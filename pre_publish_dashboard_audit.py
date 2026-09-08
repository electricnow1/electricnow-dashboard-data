#!/usr/bin/env python3
"""
Strict pre-publish audit for the ElectricNOW dashboard.

Run this after rebuilding dashboard-data.json / electricnow-dashboard-embed.js
and before deploying or pushing hosted assets. The script exits non-zero when
the dashboard should not be published.
"""

from __future__ import annotations

import argparse
import json
import datetime as _dt
import os
import re
import subprocess
import tempfile
from dataclasses import dataclass, asdict
from datetime import datetime
from pathlib import Path
from typing import Any


PROJECT = Path(__file__).resolve().parent
DEFAULT_CRON = Path("/home/user/workspace/cron_tracking/0b0f51ad")


@dataclass
class Check:
    name: str
    status: str
    detail: str
    severity: str = "error"


def load_json(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def normalize_rows(value: Any) -> list[dict[str, Any]]:
    if isinstance(value, list):
        return [r for r in value if isinstance(r, dict)]
    if isinstance(value, dict) and isinstance(value.get("rows"), list):
        return [r for r in value["rows"] if isinstance(r, dict)]
    return []


def money(value: Any) -> float | None:
    try:
        if value is None:
            return None
        return round(float(value), 2)
    except (TypeError, ValueError):
        return None


def parse_date(value: str | None) -> datetime | None:
    if not value:
        return None
    for fmt in ("%Y-%m-%d", "%Y%m%d"):
        try:
            return datetime.strptime(value, fmt)
        except ValueError:
            pass
    return None


def row_date(row: dict[str, Any]) -> datetime | None:
    for key in ("date", "rawDate"):
        parsed = parse_date(str(row.get(key) or ""))
        if parsed:
            return parsed
    return None


def add(checks: list[Check], name: str, ok: bool, detail: str, severity: str = "error") -> None:
    checks.append(Check(name=name, status="pass" if ok else "fail", detail=detail, severity=severity))


# A bare `$(` that is not `document.$(`, `x.$(`, or `$$(`. The embed files must
# never rely on a global `$`: on Squarespace that is jQuery, not a DOM helper.
_BARE_DOLLAR = re.compile(r'(?<![A-Za-z0-9_.$])\$\(')


def contains_dom_id(text: str, dom_id: str) -> bool:
    return f'id="{dom_id}"' in text or f'id=\\"{dom_id}\\"' in text or f"id='{dom_id}'" in text or f"id=\\'{dom_id}\\'" in text


def run_rendered_page_verification(shareable_path: Path, expect_period, candidate_data: Path = None):
    """Serve the real published artifact over HTTP and grade the rendered page.

    The old smoke test only asked whether an allowlist of 11 DOM ids had any
    HTML in them. That let a full week of defects ship: the US geography
    section was hidden, every app-section card read "Not reported", the
    top-video table showed "undefined" ranks, and the top-titles table showed
    July numbers labelled as August. None of those ids were on the allowlist,
    and "has HTML" is true for a card full of "Not reported".

    verify_rendered_dashboard.js checks defect strings in visible text,
    sections hidden while their data is non-empty, cards that must exist when
    the data supports them, and that the payload the renderer actually
    consumed is for the expected reporting period -- with caching off, so a
    warm cache cannot make last week's data look fresh.
    """
    import http.server
    import socketserver
    import threading
    import tempfile
    import functools as _ft
    import os as _os
    import shutil as _shutil

    verifier = Path(__file__).parent / "verify_rendered_dashboard.js"
    if not verifier.exists():
        return {"errors": ["verify_rendered_dashboard.js not found"], "verdict": "ERROR"}

    tmpdir = Path(tempfile.mkdtemp(prefix="pubaudit_"))
    _shutil.copy(shareable_path, tmpdir / "index.html")
    handler = _ft.partial(http.server.SimpleHTTPRequestHandler, directory=str(tmpdir))
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.TCPServer(("127.0.0.1", 0), handler)
    port = httpd.server_address[1]
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    try:
        env = dict(_os.environ)
        if expect_period:
            env["EXPECT_PERIOD"] = expect_period
        if candidate_data and Path(candidate_data).exists():
            env["CANDIDATE_DATA"] = str(Path(candidate_data).resolve())
        proc = subprocess.run(
            ["node", str(verifier), "http://127.0.0.1:%d" % port],
            text=True, capture_output=True, timeout=300, env=env,
        )
        try:
            return json.loads(proc.stdout)
        except json.JSONDecodeError:
            return {"errors": [(proc.stderr or proc.stdout or "no output")[:600]], "verdict": "ERROR"}
    except subprocess.TimeoutExpired:
        return {"errors": ["rendered-page verification timed out"], "verdict": "ERROR"}
    finally:
        httpd.shutdown()
        _shutil.rmtree(tmpdir, ignore_errors=True)


def run_embed_squarespace_verification(embed_path: Path, data_path: Path, expect_period):
    """Grade the EMBED publishing path the way Squarespace actually loads it.

    The rendered-page gate above only ever browser-tested the shareable HTML.
    That blind spot shipped a fully blank published dashboard: embed.js called
    a bare `$(...)` helper 110 times but never defined one. On the shareable
    that code path does not exist (it uses document.querySelector), and on
    Squarespace `$` resolves to jQuery, so the render threw
    "$(...).addEventListener is not a function" right after the shell mounted.
    Every panel stayed empty and the hardcoded template placeholders
    ("Latest app usage", "Apr 14-30") were never overwritten -- while the gate
    reported 120/120 green.

    So: load the embed in a page that already owns window.$ as jQuery, and
    require that real content actually painted.
    """
    import os as _os

    verifier = Path(__file__).parent / "verify_embed_squarespace.js"
    if not verifier.exists():
        return {"fails": ["verify_embed_squarespace.js not found"], "verdict": "ERROR"}
    try:
        env = dict(_os.environ)
        if expect_period:
            env["EXPECT_PERIOD"] = expect_period
        proc = subprocess.run(
            ["node", str(verifier), str(embed_path), str(data_path)],
            text=True, capture_output=True, timeout=300, env=env,
        )
        try:
            return json.loads(proc.stdout)
        except json.JSONDecodeError:
            return {"fails": [(proc.stderr or proc.stdout or "no output")[:600]], "verdict": "ERROR"}
    except subprocess.TimeoutExpired:
        return {"fails": ["embed verification timed out"], "verdict": "ERROR"}


def run_published_artifact_matrix(project_dir: Path, data_path: Path, expect_period: str):
    """Browser-render EVERY artifact declared live in published_artifacts.json.

    Both times this dashboard shipped visibly broken, the gate was green because
    it rendered one artifact and the team loaded a different one. So coverage is
    now driven by a manifest and ENFORCED: if a live artifact is not rendered
    here, the audit fails rather than quietly passing.
    """
    manifest_path = project_dir / "published_artifacts.json"
    if not manifest_path.exists():
        return {"error": f"missing manifest {manifest_path}", "artifacts": []}
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    results = []
    for art in manifest.get("artifacts", []):
        if not art.get("live"):
            continue
        artifact_path = project_dir / art["path"]
        entry = {"id": art["id"], "path": art["path"], "loadMode": art["loadMode"],
                 "hostGlobals": art.get("hostGlobals", [])}
        if not artifact_path.exists():
            entry.update(verdict="MISSING", fails=[f"artifact not found: {artifact_path}"])
            results.append(entry)
            continue

        spec = {
            "artifactPath": str(artifact_path.resolve()),
            "dataPath": str(Path(data_path).resolve()),
            "loadMode": art["loadMode"],
            "hostGlobals": art.get("hostGlobals", []),
            "expectPeriod": expect_period or "",
            "mustRenderContainers": manifest.get("mustRenderContainers", []),
            "mustBeOverwrittenByRender": manifest.get("mustBeOverwrittenByRender", []),
            "containerRowExpectations": manifest.get("containerRowExpectations", []),
        }
        with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False) as fh:
            json.dump(spec, fh)
            spec_path = fh.name
        try:
            proc = subprocess.run(
                ["node", str(project_dir / "verify_published_artifact.js"), spec_path],
                text=True, capture_output=True, timeout=420)
            try:
                report = json.loads(proc.stdout)
                entry.update(verdict=report.get("verdict"), fails=report.get("fails", []),
                             errors=report.get("errors", [])[:3],
                             probe=report.get("probe", {}),
                             viewports=[{"viewport": v.get("viewport"), "width": v.get("width"),
                                         "groups": v.get("groups"), "groupWidths": v.get("groupWidths"),
                                         "fails": v.get("fails", [])} for v in report.get("viewports", [])])
            except json.JSONDecodeError:
                entry.update(verdict="UNPARSEABLE",
                             fails=[f"verifier emitted no JSON: {proc.stderr[-300:]}"])
        except subprocess.TimeoutExpired:
            entry.update(verdict="TIMEOUT", fails=["verifier timed out"])
        finally:
            os.unlink(spec_path)
        results.append(entry)

    return {"artifacts": results,
            "declaredLive": [a["id"] for a in manifest.get("artifacts", []) if a.get("live")]}


def run_shareable_smoke_test(shareable_path: Path) -> dict[str, Any]:
    script = r"""
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.stack || e.message));
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  await page.goto('file://' + process.argv[2], { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  const ids = [
    'kpi-grid',
    'traffic-chart',
    'monthly-traffic-chart',
    'ytd-traffic-chart',
    'trend-period',
    'purchase-chart',
    'purchase-summary',
    'funnel-list',
    'ad-list',
    'content-table',
    'tvod-title-revenue-summary',
  ];
  const sections = {};
  for (const id of ids) {
    sections[id] = await page.$eval('#' + id, (el) => {
      const r = el.getBoundingClientRect();
      return {
        textLength: (el.innerText || el.textContent || '').trim().length,
        htmlLength: el.innerHTML.length,
        width: r.width,
        height: r.height,
      };
    }).catch((e) => ({ error: e.message }));
  }
  await browser.close();
  console.log(JSON.stringify({ errors, sections }));
})().catch((e) => {
  console.log(JSON.stringify({ errors: [e.stack || e.message], sections: {} }));
  process.exit(1);
});
"""
    with tempfile.NamedTemporaryFile("w", suffix=".js", dir=str(shareable_path.parent), delete=False, encoding="utf-8") as tmp:
        tmp.write(script)
        tmp_path = Path(tmp.name)
    try:
        proc = subprocess.run(
            # Must be absolute: the harness does 'file://' + argv[2], and a
            # relative path silently becomes file://<filename>/ -> ERR_INVALID_URL,
            # which fails every downstream smoke check for the wrong reason.
            ["node", str(tmp_path), str(Path(shareable_path).resolve())],
            text=True,
            capture_output=True,
            timeout=30,
        )
        try:
            result = json.loads(proc.stdout.strip().splitlines()[-1])
        except Exception:
            result = {"errors": [proc.stderr or proc.stdout or "Unable to parse Playwright smoke-test output"], "sections": {}}
        result["returncode"] = proc.returncode
        return result
    except subprocess.TimeoutExpired:
        return {"errors": ["Playwright smoke test timed out"], "sections": {}, "returncode": 124}
    finally:
        tmp_path.unlink(missing_ok=True)


def audit(data_path: Path, embed_path: Path, shareable_path: Path | None, expected_period: str | None) -> dict[str, Any]:
    checks: list[Check] = []
    data = load_json(data_path)
    reporting_period = data.get("reportingPeriod") or data.get("period")
    period = expected_period or reporting_period

    add(checks, "reporting_period_present", bool(reporting_period), f"reportingPeriod={reporting_period!r}")
    if expected_period:
        add(
            checks,
            "reporting_period_matches_expected",
            reporting_period == expected_period,
            f"expected {expected_period!r}; found {reporting_period!r}",
        )

    # Core data sections that should exist every time. Missing sections create hidden dashboard holes.
    required_sections = [
        "plainEnglishSummary",
        "weeklyTrend",
        "monthlyTrend",
        "ytdTrend",
        "rolling28Summary",
        "salesSummary",
        "tvodTitleRevenue",
        "dotStudiosAppAds",
        "youtubeSummary",
        "connectorStatus",
        "sourceStatus",
        "adSuccessSummary",
    ]
    for key in required_sections:
        value = data.get(key)
        ok = value is not None and value != {} and value != []
        add(checks, f"required_section_{key}", ok, f"{key} type={type(value).__name__}")

    # Trend chart contracts. These checks are designed to prevent blank SVG panels.
    chart_contracts = [
        ("weeklyTrend", 7, period),
        ("monthlyTrend", 28, None),
        ("ytdTrend", 4, None),
    ]
    for key, min_rows, expected in chart_contracts:
        rows = normalize_rows(data.get(key))
        add(checks, f"{key}_has_rows", len(rows) >= min_rows, f"{key} rows={len(rows)}; minimum={min_rows}")
        numeric_ok = bool(rows) and all(
            money(r.get("activeUsers")) is not None and money(r.get("sessions")) is not None
            for r in rows
        )
        add(checks, f"{key}_has_numeric_chart_values", numeric_ok, f"{key} activeUsers/sessions numeric rows={len(rows)}")
        dates = [row_date(r) for r in rows]
        dates = [d for d in dates if d]
        sorted_ok = len(dates) == len(rows) and dates == sorted(dates)
        add(checks, f"{key}_dates_are_complete_and_sorted", sorted_ok, f"{key} dated rows={len(dates)}")
        if expected and isinstance(data.get(key), dict):
            add(checks, f"{key}_period_matches_reporting_period", data[key].get("period") == expected, f"{key}.period={data[key].get('period')!r}; reportingPeriod={expected!r}")

    # Catch stale user-facing labels and notes. Notes may mention old comparison periods only if clearly marked stale/preserved.
    note_keys = ["appTrendNote", "weeklyTrendNote", "monthlyTrendNote", "ytdTrendNote"]
    stale_note_patterns = [
        r"ending Aug 6, 2026",
        r"Jul 21-Jul 27, 2026",
        r"Aug 10-Aug 16, 2026",
        r"Aug 14-Aug 20, 2026",
    ]
    for key in note_keys:
        note = str(data.get(key) or "")
        add(checks, f"{key}_present", bool(note.strip()), f"{key}={note[:160]!r}")
        if period:
            stale_hits = [p for p in stale_note_patterns if re.search(p, note) and period not in note and "stale" not in note.lower()]
            add(checks, f"{key}_not_misleadingly_stale", not stale_hits, f"{key} stale pattern hits={stale_hits}; reportingPeriod={period!r}")

    # Content/activity labeling: GA4 commonly returns the useful screen value in unifiedPageScreen.
    # The renderer must not show those rows as repeated "Unlabeled activity" placeholders.
    top_pages = data.get("topPages") or {}
    top_page_rows = normalize_rows(top_pages)
    named_unified_rows = [
        str(row.get("unifiedPageScreen") or row.get("pageScreen") or row.get("pageTitle") or "").strip()
        for row in top_page_rows
    ]
    named_unified_rows = [name for name in named_unified_rows if name and name != "(not set)"]
    add(
        checks,
        "top_pages_include_named_unified_screens",
        bool(named_unified_rows),
        f"named unifiedPageScreen/pageScreen/pageTitle rows={named_unified_rows[:10]}",
    )
    if named_unified_rows:
        app_js = embed_path.read_text(encoding="utf-8", errors="replace")
        shareable_js = shareable_path.read_text(encoding="utf-8", errors="replace") if shareable_path and shareable_path.exists() else ""
        renderer_uses_unified = "unifiedPageScreen" in app_js and (not shareable_js or "unifiedPageScreen" in shareable_js)
        add(
            checks,
            "content_renderer_uses_unified_screen_labels",
            renderer_uses_unified,
            "Renderer must read unifiedPageScreen/pageScreen/pageTitle before falling back to Unlabeled activity.",
        )

    # TVOD reconciliation: title family and channel totals should roll up to the DotStudios TVOD total.
    tvod = data.get("tvodTitleRevenue") or {}
    tvod_total = money((tvod.get("netRevenue") or {}).get("latestSevenDayGross"))
    daily_sum = round(sum(money(r.get("gross")) or 0 for r in tvod.get("daily", [])), 2) if isinstance(tvod.get("daily"), list) else None
    family_sum = round(sum(money(r.get("gross")) or 0 for r in tvod.get("familyTotals", [])), 2) if isinstance(tvod.get("familyTotals"), list) else None
    channel_sum = round(sum(money(r.get("gross")) or 0 for r in tvod.get("channelBreakout", [])), 2) if isinstance(tvod.get("channelBreakout"), list) else None
    if tvod_total is not None:
        add(checks, "tvod_daily_total_reconciles", daily_sum == tvod_total, f"daily={daily_sum}; tvod_total={tvod_total}")
        add(checks, "tvod_family_total_reconciles", family_sum == tvod_total, f"family={family_sum}; tvod_total={tvod_total}")
        add(checks, "tvod_channel_total_reconciles", channel_sum == tvod_total, f"channel={channel_sum}; tvod_total={tvod_total}")
    tvod_net = tvod.get("netRevenue") or {}
    tvod_txn = tvod.get("transactions") or {}
    tvod_export_total = (
        money(tvod_net.get("netIncludingRefunds"))
        or money(tvod_net.get("tvodSalesExportPaidNet"))
        or money(tvod_net.get("latestSevenDayNet"))
        or money(tvod_net.get("latestSevenDayGross"))
    )
    if tvod_export_total is not None and tvod_export_total > 0:
        embed_text = embed_path.read_text(encoding="utf-8", errors="replace")
        shareable_text = shareable_path.read_text(encoding="utf-8", errors="replace") if shareable_path and shareable_path.exists() else ""
        renderer_has_tvod_fallback = "DotStudios TVOD export total" in embed_text and "hasDashboardRevenue" in embed_text
        if shareable_text:
            renderer_has_tvod_fallback = renderer_has_tvod_fallback and "DotStudios TVOD export total" in shareable_text and "hasDashboardRevenue" in shareable_text
        add(
            checks,
            "tvod_summary_card_uses_export_total_fallback",
            renderer_has_tvod_fallback,
            f"TVOD export total={tvod_export_total}; paid rows={tvod_txn.get('paidTransactions')}; renderer must not show revenue as Not reported",
        )

    # DotStudios app ad-serving must be current when a current-period ad-metrics CSV was uploaded.
    # These are ElectricNOW in-app ad impressions, not Google/Meta paid-campaign impressions, and
    # the manual CSV does not include ad-server revenue/yield.
    app_ads = data.get("dotStudiosAppAds") or {}
    app_ads_totals = app_ads.get("totals") or {}
    app_ads_period = app_ads.get("period")
    app_ads_source = " ".join(str(app_ads.get(k) or "") for k in ["sourceFileLabel", "source"])
    app_ads_caveat_text = " ".join(
        [str(app_ads.get("plainEnglish") or ""), str(app_ads.get("revenueCaveat") or "")]
        + [str(c) for c in (app_ads.get("caveats") or [])]
    ).lower()
    add(
        checks,
        "dotstudios_app_ads_period_matches_reporting_period",
        app_ads_period == period,
        f"dotStudiosAppAds.period={app_ads_period!r}; reportingPeriod={period!r}",
    )
    # Reconcile the rendered DotStudios ad totals against the staged CSV they claim
    # to come from, instead of hard-coding one week's numbers (the Aug 24 version of
    # this check would have gone red forever, or been deleted, on the next upload).
    def _staged_ad_metrics_totals():
        import csv, re as _re
        m = _re.search(r"(ad-metrics[^\s'\"]*\.csv)", app_ads_source)
        if not m:
            return None, "no ad-metrics csv named in dotStudiosAppAds.source"
        name = m.group(1)
        hits = sorted((PROJECT / "manual_dotstudios").rglob(name)) if (PROJECT / "manual_dotstudios").exists() else []
        hits = [h for h in hits if not h.is_symlink()]
        if not hits:
            return None, f"{name} not found under manual_dotstudios/"
        tot = {"impressions": 0.0, "requests": 0.0}
        with open(hits[-1], newline="", encoding="utf-8-sig") as fh:
            for row in csv.DictReader(fh):
                for k, col in (("impressions", "Impressions"), ("requests", "Requests")):
                    try:
                        tot[k] += float(str(row.get(col, "0")).replace(",", "") or 0)
                    except ValueError:
                        pass
        return tot, str(hits[-1].relative_to(PROJECT))
    _csv_tot, _csv_detail = _staged_ad_metrics_totals()
    add(
        checks,
        "dotstudios_app_ads_totals_reconcile_to_staged_csv",
        bool(_csv_tot) and money(app_ads_totals.get("impressions")) == money(_csv_tot["impressions"])
        and money(app_ads_totals.get("requests")) == money(_csv_tot["requests"]),
        f"source={app_ads_source!r}; dashboard impressions={app_ads_totals.get('impressions')} requests={app_ads_totals.get('requests')}; "
        f"csv={_csv_detail} totals={_csv_tot}",
    )
    add(
        checks,
        "dotstudios_app_ads_has_delivery_not_revenue_caveat",
        all(term in app_ads_caveat_text for term in ["in-app", "paid-campaign", "revenue"]),
        f"caveat_text={app_ads_caveat_text[:240]!r}",
    )
    if embed_path.exists():
        embed_text = embed_path.read_text(encoding="utf-8", errors="replace")
        add(
            checks,
            "dotstudios_app_ads_renderer_contract_present",
            "dotstudios-app-ads" in embed_text and "dotStudiosAppAds" in embed_text,
            "Embed renderer must include the DotStudios app ad-serving section.",
        )

    # YouTube YTD should never disappear when current-period rows are partial.
    youtube = data.get("youtubeSummary") or {}
    ytd_revenue = money(((youtube.get("yearToDate") or {}).get("estimatedRevenue")) or ((youtube.get("totals") or {}).get("yearToDateRevenue")))
    # --- ytdTrend weekly series must be a clean, current Monday grid ----------
    _yt = data.get("ytdTrend") or []
    _days = []
    for _p in _yt:
        try:
            _days.append(_dt.datetime.strptime(str(_p.get("rawDate", "")), "%Y%m%d").date())
        except ValueError:
            pass
    _all_monday = bool(_days) and all(d.weekday() == 0 for d in _days)
    _gaps = [
        (a_.isoformat(), b_.isoformat(), (b_ - a_).days)
        for a_, b_ in zip(_days, _days[1:]) if (b_ - a_).days != 7
    ]
    add(
        checks,
        "ytd_trend_weekly_grid_clean",
        _all_monday and not _gaps,
        "ytdTrend must be one point per Monday with exactly 7-day spacing. "
        f"non-Monday points present={not _all_monday}; bad gaps={_gaps[:4]}. "
        "Re-run patch_ytd_trend.py; never append a daily point into this weekly series.",
    )
    _last = max(_days) if _days else None
    _age = (_dt.date.today() - _last).days if _last else 9999
    add(
        checks,
        "ytd_trend_recent",
        _age <= 14,
        f"ytdTrend last week is {_last} ({_age} days old); must be within 14 days. "
        "Pull the newly completed Mon-Sun week from GA4 property 497892271, add it to "
        "VERIFIED_WEEKS in patch_ytd_trend.py, and re-run that script.",
    )
    add(
        checks,
        "ytd_trend_has_full_history",
        len(_yt) >= 20,
        f"ytdTrend has {len(_yt)} points; expected at least 20 weekly points from the "
        "Apr 13, 2026 launch baseline. Missing weeks mean the chart understates history.",
    )

    # --- the year-to-date card must exist in the renderer that publishes ------
    try:
        _embed_src = embed_path.read_text(encoding="utf-8")
    except Exception:
        _embed_src = ""
    add(
        checks,
        "sales_ytd_card_present_in_embed",
        "sales-ytd-card" in _embed_src and "Sales year to date" in _embed_src,
        "electricnow-dashboard-embed.js must render the id='sales-ytd-card' stat card. "
        "This is the renderer the live Squarespace dashboard loads; without it the YTD "
        "value exists in data but is invisible to readers.",
    )

    # --- weekly headline must not borrow the year-to-date purchase count ------
    # renderPurchases: headlineVisiblePurchases = visibleSourcePurchases ?? yearToDate.purchases
    # If the weekly block lacks a contract transaction key the headline pairs a
    # YTD count with weekly revenue. Caught only after the YTD value changed.
    _sales = data.get("salesSummary") or {}
    _week = None
    for _k in ("latestSevenDayVisibleSales", "currentCompleteWeek", "weekToDate", "thisWeek"):
        if isinstance(_sales.get(_k), dict):
            _week = _sales[_k]
            _weekKey = _k
            break
    _contract_keys = ("knownFreshVisibleTransactions", "knownFreshTransactions",
                      "purchases", "paidTransactions", "dotStudiosTvodTransactions")
    _has = _week is not None and any(_week.get(c) is not None for c in _contract_keys)
    add(
        checks,
        "weekly_headline_purchase_count_not_ytd_fallback",
        _has,
        (f"salesSummary.{_weekKey} must carry one of {_contract_keys} or the weekly headline "
         f"falls back to yearToDate.purchases and shows a YTD count beside weekly revenue. "
         f"Run normalize_render_contract.py. keys={sorted(_week.keys()) if _week else None}")
        if _week is not None else "No weekly visible-sales block found in salesSummary.",
    )

    # --- sales year-to-date shown in the weekly sales section -------------
    # The weekly refresh rebuilds dashboard-data.json from a freshly authored
    # apply_full_refresh script, which will drop salesSummary.yearToDate unless
    # patch_sales_ytd.py is re-run. Fail closed so it cannot silently vanish or
    # freeze at an old coverage date.
    sales_block = data.get("salesSummary") or {}
    sales_ytd = sales_block.get("yearToDate") or {}
    ytd_purchases = sales_ytd.get("purchases")
    ytd_revenue = sales_ytd.get("purchaseRevenue")
    add(
        checks,
        "sales_ytd_present",
        bool(ytd_purchases) and bool(ytd_revenue),
        f"salesSummary.yearToDate purchases={ytd_purchases} revenue={ytd_revenue}. "
        "If missing, re-run patch_sales_ytd.py after the refresh writes dashboard-data.json.",
    )
    coverage_end = parse_date(str(sales_ytd.get("coverageEnd") or ""))
    stale_days = (datetime.now() - coverage_end).days if coverage_end else None
    add(
        checks,
        "sales_ytd_coverage_current",
        coverage_end is not None and stale_days is not None and stale_days <= 14,
        f"salesSummary.yearToDate.coverageEnd={sales_ytd.get('coverageEnd')!r} "
        f"({stale_days} days behind today); must be within 14 days. Re-run patch_sales_ytd.py.",
    )
    breakout_rows = sales_block.get("sourceBreakout") or []
    ytd_row = next((r for r in breakout_rows if r.get("rowId") == "ytd-visible-platform-sales"), None)
    add(
        checks,
        "sales_ytd_row_rendered_in_callout",
        ytd_row is not None and bool(ytd_row.get("purchases")),
        "salesSummary.sourceBreakout must carry the rowId='ytd-visible-platform-sales' row - "
        "that list is the data-driven hook renderPurchases uses to display the YTD line.",
    )
    add(
        checks,
        "sales_ytd_labeled_partial",
        "Google Play" in str(sales_ytd.get("note") or "") + str(sales_ytd.get("caveat") or ""),
        "YTD must state that Google Play / Android has no source before Aug 7, 2026, so the "
        "total understates full-year sales and is not total ElectricNOW sales.",
    )

    add(checks, "youtube_ytd_revenue_present", ytd_revenue is not None and ytd_revenue > 0, f"YouTube YTD revenue={ytd_revenue}")

    # Every GA4 scorecard must be advanced to the reporting period. A refresh script that
    # omits one metric key silently republishes last week's number with a stale delta;
    # that shipped undetected before this check existed.
    scorecards = data.get("scorecards") or []
    add(checks, "scorecards_present", bool(scorecards), f"scorecard count={len(scorecards)}")
    stale_cards = [
        {"key": c.get("key"), "period": c.get("period")}
        for c in scorecards
        if period and c.get("period") and c.get("period") != period
    ]
    add(
        checks,
        "all_scorecards_on_reporting_period",
        not stale_cards,
        f"reportingPeriod={period!r}; off-period scorecards={stale_cards}",
    )

    # Guard against a scorecard whose current value still equals the prior week's value
    # while claiming a nonzero delta -- the signature of a partially applied refresh.
    inconsistent_cards = []
    for c in scorecards:
        cur_v, prev_v = c.get("current"), c.get("previousWeek")
        delta = c.get("deltaVsPreviousPct")
        if not all(isinstance(v, (int, float)) for v in (cur_v, prev_v, delta)):
            continue
        # Rate/percentage metrics (e.g. engagementRate) legitimately report a
        # percentage-POINT difference rather than a relative percent change, so
        # accept either convention for them.
        relative = ((cur_v - prev_v) / prev_v * 100) if prev_v else None
        points = cur_v - prev_v
        is_rate = "rate" in str(c.get("key", "")).lower() or str(c.get("format", "")).lower() in ("percent", "percentage")
        candidates = [v for v in ([relative, points] if is_rate else [relative]) if v is not None]
        expected = relative
        if candidates and min(abs(v - delta) for v in candidates) > 0.15:
            inconsistent_cards.append(
                {"key": c.get("key"), "current": cur_v, "previousWeek": prev_v,
                 "statedDelta": round(delta, 2),
                 "recomputedRelativePct": round(relative, 2) if relative is not None else None,
                 "recomputedPointDiff": round(points, 2) if is_rate else None})
    add(
        checks,
        "scorecard_deltas_match_current_and_prior_values",
        not inconsistent_cards,
        f"scorecards whose stated delta disagrees with (current-prior)/prior: {inconsistent_cards}",
    )

    # ---- RENDER-LAYER FRESHNESS ------------------------------------------------
    # The published embed does NOT render `scorecards`. It renders `visitSummary`,
    # `scorecardGroups`, `topPages`, `usGeography`, and the sales headline blocks.
    # For weeks the refresh script wrote only the non-rendered keys, so the live
    # dashboard silently republished the prior week while the gate stayed green.
    # These checks bind the gate to what the renderer actually reads.
    RENDER_SECTIONS = [
        ("visitSummary", lambda d: d.get("visitSummary")),
        ("topPages", lambda d: d.get("topPages")),
        ("usGeography", lambda d: d.get("usGeography")),
        ("visibleSourceWeek", lambda d: d.get("visibleSourceWeek")),
        ("salesSummary.latestSevenDayVisibleSales",
         lambda d: (d.get("salesSummary") or {}).get("latestSevenDayVisibleSales")),
        ("salesSummary.dotStudiosTvod",
         lambda d: (d.get("salesSummary") or {}).get("dotStudiosTvod")),
        ("salesSummary.apple.latestSnapshot",
         lambda d: ((d.get("salesSummary") or {}).get("apple") or {}).get("latestSnapshot")),
    ]
    off_period_sections = []
    for name, getter in RENDER_SECTIONS:
        node = getter(data) or {}
        node_period = node.get("period")
        if not node_period or not period:
            continue
        if node_period == period:
            continue
        # A section with no fresh source is acceptable ONLY if it says so.
        if str(node.get("status", "")).startswith("stale") or node.get("staleNote"):
            continue
        off_period_sections.append({"section": name, "period": node_period})
    add(
        checks,
        "rendered_sections_on_reporting_period",
        not off_period_sections,
        f"reportingPeriod={period!r}; rendered sections still on an older period and "
        f"NOT stale-labelled={off_period_sections}. These feed visible cards.",
    )

    # ---- DATA-DRIVEN RENDERED FRESHNESS (added Sep 7, 2026) ---------------------
    # RENDER_SECTIONS above is a hand-written allow-list, and everything not on it
    # was invisible to the gate: Live/On Demand usage, surface table, platform
    # mix/time and the Stripe daily chart sat on Jul 27-Aug 6 data for five weeks
    # while the gate stayed green. audit_rendered_freshness walks every top-level
    # key the renderers actually read and fails on any old date-range field,
    # old daily array or unexplained old date mention that is not stale-labelled.
    try:
        from audit_rendered_freshness import rendered_field_freshness_checks
        _texts = [embed_path.read_text(encoding="utf-8", errors="replace") if embed_path.exists() else "",
                  shareable_path.read_text(encoding="utf-8", errors="replace") if shareable_path and shareable_path.exists() else ""]
        _comparison = data.get("comparisonPeriod") or data.get("priorPeriod") or (data.get("periods") or {}).get("previousWeek", {}).get("range")
        for _name, _ok, _detail in rendered_field_freshness_checks(data, _texts, period, _comparison):
            add(checks, _name, _ok, _detail)
    except Exception as exc:  # a broken freshness module must fail the gate, not skip it
        add(checks, "rendered_freshness_module_ran", False, f"audit_rendered_freshness raised {exc!r}")

    # scorecardGroups is a second, separately-stored scorecard set that the embed
    # renders. Every card must either be on the reporting period or be explicitly
    # stale-labelled; silent carry-over is a publish blocker.
    group_problems = []
    for g in data.get("scorecardGroups") or []:
        for c in g.get("cards") or []:
            cp = c.get("period")
            labelled = str(c.get("status", "")).startswith("stale") or bool(c.get("staleNote"))
            if cp and period and cp != period and not labelled:
                group_problems.append({"group": g.get("title"), "key": c.get("key"),
                                       "period": cp})
            if not cp and not labelled:
                group_problems.append({"group": g.get("title"), "key": c.get("key"),
                                       "period": None, "issue": "no period and no stale label"})
    add(
        checks,
        "scorecard_groups_period_labelled",
        not group_problems,
        f"reportingPeriod={period!r}; scorecardGroups cards that are off-period or "
        f"unlabelled={group_problems}",
    )

    # 2026-09-07: the opposite failure. Nine behavior/app cards WERE refreshed
    # (current != previousWeek, period == reportingPeriod) but still carried
    # status=stale_preserved_no_fresh_pull / dataPeriod "through Aug 23". The
    # stale label made the gate skip them, and the page showed a stale badge and
    # "not tracked at launch" on cards that have a launch baseline. A card that
    # is on-period and moved this week is NOT stale; a stale label on it is a
    # contradiction and a publish blocker.
    contradictions = []
    for g in data.get("scorecardGroups") or []:
        for c in g.get("cards") or []:
            labelled = str(c.get("status", "")).startswith("stale") or bool(c.get("staleNote"))
            if not labelled:
                continue
            on_period = period and c.get("period") == period
            moved = c.get("current") is not None and c.get("previousWeek") is not None and c.get("current") != c.get("previousWeek")
            dp = str(c.get("dataPeriod") or "")
            if on_period and (moved or dp == period):
                contradictions.append({"group": g.get("title"), "key": c.get("key"), "status": c.get("status"),
                                       "dataPeriod": c.get("dataPeriod"), "current": c.get("current"),
                                       "previousWeek": c.get("previousWeek")})
    add(
        checks,
        "scorecard_refreshed_cards_not_marked_stale",
        not contradictions,
        f"reportingPeriod={period!r}; cards refreshed this period but still stale-labelled={contradictions}",
    )

    # 2026-09-07: live/FAST channels appeared in the on-demand title lists because
    # the writer's roster was a 13-name constant while GA4 carries ~50 channels.
    # The roster now lives in live_channels.json (confirmed + detected + legacy_seed)
    # and must also be shipped inside the payload (titleViewership.liveChannelRoster.names)
    # for the renderers' defensive filter. Any roster name in topPrograms /
    # topVideoTitles / topChannelTitles blocks publishing.
    def _norm(v):
        import unicodedata
        v = unicodedata.normalize("NFKD", str(v or ""))
        v = "".join(ch for ch in v if not unicodedata.combining(ch)).lower()
        return re.sub(r"[^a-z0-9]+", " ", v).strip()
    roster_path = PROJECT / "live_channels.json"
    if not roster_path.exists():
        roster_path = data_path.parent / "live_channels.json"
    roster_names = set()
    roster_ok = roster_path.exists()
    if roster_ok:
        try:
            rj = load_json(roster_path)
            roster_names = {_norm(n) for k in ("confirmed", "detected", "legacy_seed") for n in rj.get(k) or []}
        except Exception as exc:  # noqa: BLE001
            roster_ok = False
    add(checks, "live_channel_roster_file_present", roster_ok and len(roster_names) >= 13,
        f"live_channels.json at {roster_path} with {len(roster_names)} names (need >= 13)")
    tv = data.get("titleViewership") or {}
    shipped = {_norm(n) for n in ((tv.get("liveChannelRoster") or {}).get("names") or [])}
    add(checks, "live_channel_roster_shipped_in_payload", bool(shipped) and roster_names <= shipped,
        f"payload titleViewership.liveChannelRoster.names has {len(shipped)} names; "
        f"missing from payload={sorted(roster_names - shipped)[:10]}")
    leaks = []
    for key, nk in (("topPrograms", "program"), ("topVideoTitles", "title"), ("topChannelTitles", "title")):
        for r in tv.get(key) or []:
            cand = [r.get(nk), r.get("group")] + list(r.get("examples") or [])
            hit = [c for c in cand if c and _norm(c) in roster_names]
            if hit:
                leaks.append({"list": key, "rank": r.get("rank"), "name": r.get(nk), "matched": hit[:2]})
    add(checks, "no_live_channels_in_on_demand_lists", not leaks,
        f"live/FAST roster names found in on-demand title lists={leaks[:12]} (total {len(leaks)})")
    # ranks must be contiguous after any filtering
    bad_rank = []
    for key in ("topPrograms", "topVideoTitles", "topChannelTitles"):
        rows = tv.get(key) or []
        if rows and [r.get("rank") for r in rows] != list(range(1, len(rows) + 1)):
            bad_rank.append(key)
    add(checks, "on_demand_lists_ranks_contiguous", not bad_rank, f"lists with non-contiguous ranks={bad_rank}")

    # visitSummary drives the headline visits/active-users/minutes cards. Its
    # derived engagement fields must reconcile with its own raw counters.
    vs = data.get("visitSummary") or {}
    vs_problems = []
    for wk in ("currentWeek", "previousWeek", "rolling28Current", "rolling28Previous"):
        w = vs.get(wk) or {}
        s, au, ues = w.get("sessions"), w.get("activeUsers"), w.get("userEngagementDuration")
        es, er = w.get("engagedSessions"), w.get("engagementRate")
        if all(isinstance(v, (int, float)) and v for v in (s, es)) and isinstance(er, (int, float)):
            if abs(es / s * 100 - er) > 0.05:
                vs_problems.append({wk: "engagementRate != engagedSessions/sessions"})
        if all(isinstance(v, (int, float)) and v for v in (au, ues)):
            exp = ues / au / 60
            got = w.get("avgEngagedMinutesPerUser")
            if isinstance(got, (int, float)) and abs(exp - got) > 0.05:
                vs_problems.append({wk: f"avgEngagedMinutesPerUser {got} != recomputed {exp:.2f}"})
    add(
        checks,
        "visit_summary_internally_consistent",
        not vs_problems,
        f"visitSummary derived fields disagreeing with their own raw counters: {vs_problems}",
    )

    # renderPlainEnglish() reads plainEnglishSummary as an OBJECT and composes
    #   [overview||overall, ...bullets, paidAcquisitionAssessment]
    # A list (or a bullets value that is not an array) renders NOTHING and silently
    # falls back to plainEnglishInsights. Reproduce that composition here so an
    # empty or object-valued summary blocks publish instead of shipping blank.
    pes = data.get("plainEnglishSummary")
    pe_items, pe_problem = [], None
    if isinstance(pes, dict):
        pa = pes.get("paidAcquisitionAssessment")
        pa_text = pa if isinstance(pa, str) else (
            f"Paid-acquisition verdict: {pa.get('verdict') or 'needs review'}. {pa.get('summary')}"
            if isinstance(pa, dict) and pa.get("summary") else None)
        pe_items = [x for x in [pes.get("overview") or pes.get("overall"),
                                *(pes.get("bullets") if isinstance(pes.get("bullets"), list) else []),
                                pa_text] if x]
    elif pes is not None:
        pe_problem = f"plainEnglishSummary is {type(pes).__name__}, renderer expects an object"
    if not pe_problem and not all(isinstance(x, str) for x in pe_items):
        pe_problem = "composed plain-English items include non-strings (would render [object Object])"
    if not pe_problem and len(pe_items) < 3:
        pe_problem = f"renderer would display only {len(pe_items)} plain-English items"
    add(
        checks,
        "plain_english_renders_via_renderer_contract",
        pe_problem is None,
        pe_problem or f"renderer composes {len(pe_items)} plain-English items "
                      f"({sum(len(str(x).split()) for x in pe_items)} words)",
    )

    joined_pe = " ".join(str(x) for x in pe_items)
    add(
        checks,
        "plain_english_has_paid_acquisition_verdict",
        "verdict" in joined_pe.lower() and all(q in joined_pe for q in ("(1)", "(6)")),
        "Plain-English summary must carry the paid-acquisition verdict and answer the "
        "six mandated questions in plain language.",
    )
    add(
        checks,
        "plain_english_no_roas_claim",
        ("roas" not in joined_pe.lower())
        or (
            # every ROAS mention must be a disclaimer, and none may be a positive claim
            re.search(r"(cannot state true roas|do not infer|no roas is implied|roas (is|was) not implied|"
                      r"true roas (cannot|can not|can't) be (stated|inferred|computed|calculated)|not impl(y|ied|ying) (true )?roas)",
                      joined_pe.lower()) is not None
            and re.search(r"roas (of|was|is|at|=|:)\s*\$?\d|\d+(\.\d+)?x roas|roas .{0,20}\d+(\.\d+)?x\b", joined_pe.lower()) is None
        ),
        "Ad-server revenue is unavailable, so the summary must not imply true ROAS.",
    )

    # A node whose `period` was advanced to the reporting week while its `range` and
    # values still describe the prior week is WORSE than plain staleness: it presents
    # last week's numbers under this week's label, and the period check above passes it.
    # Require period and range to agree wherever both exist.
    def walk(node, path=""):
        if isinstance(node, dict):
            per, rng = node.get("period"), node.get("range")
            if isinstance(per, str) and isinstance(rng, str) and per != rng:
                yield {"path": path or "<root>", "period": per, "range": rng}
            for k, v in node.items():
                yield from walk(v, f"{path}.{k}" if path else k)
        elif isinstance(node, list):
            for i, v in enumerate(node):
                yield from walk(v, f"{path}[{i}]")

    period_range_conflicts = list(walk(data))
    add(
        checks,
        "period_label_matches_range_label",
        not period_range_conflicts,
        f"nodes whose 'period' disagrees with their own 'range' (a relabelled-but-stale "
        f"block presents old values under the new week): {period_range_conflicts[:12]}",
    )

    # Every alias of the Apple current week must carry identical values. The refresh
    # writes several (latestSevenDay / currentWeek / weekToDate / latestSnapshot /
    # sourceStatus.apple) and updating only some shipped a stale revenue figure once.
    ap = ((data.get("salesSummary") or {}).get("apple") or {})
    apple_aliases = {k: ap.get(k) for k in ("latestSevenDay", "currentWeek", "weekToDate", "latestSnapshot")}
    apple_alias_problems = []
    ref = apple_aliases.get("latestSevenDay") or {}
    for name, node in apple_aliases.items():
        if not isinstance(node, dict) or not ref:
            continue
        for f in ("range", "purchaseRevenue", "developerRevShare", "downloads"):
            if node.get(f) != ref.get(f):
                apple_alias_problems.append({"alias": name, "field": f,
                                             "value": node.get(f), "expected": ref.get(f)})
    add(
        checks,
        "apple_current_week_aliases_agree",
        not apple_alias_problems,
        f"Apple current-week aliases disagreeing with latestSevenDay: {apple_alias_problems}",
    )

    # Manual Apple screenshots often include revenue/downloads but not transaction count.
    # The dashboard must not summarize the whole Apple card as "Not Reported" when values exist.
    apple_status = (data.get("sourceStatus") or {}).get("apple") or (data.get("sourceStatus") or {}).get("appleManual") or {}
    apple_latest = (((data.get("salesSummary") or {}).get("apple") or {}).get("latestSevenDay") or {})
    apple_sales = money(apple_status.get("salesGross") or apple_latest.get("purchaseRevenue"))
    apple_downloads = apple_status.get("downloads") or apple_latest.get("downloads")
    apple_period = apple_status.get("period") or apple_latest.get("range")
    has_apple_values = (apple_sales is not None and apple_sales > 0) or bool(apple_downloads)
    add(
        checks,
        "apple_manual_snapshot_values_displayed",
        (not has_apple_values) or (
            money(apple_latest.get("purchaseRevenue")) == apple_sales
            and apple_latest.get("range") == apple_period
            and (apple_latest.get("downloads") == apple_downloads or not apple_downloads)
        ),
        f"Apple sourceStatus sales={apple_sales}, downloads={apple_downloads}, period={apple_period!r}; salesSummary.latestSevenDay={apple_latest}",
    )
    apple_summary = ((data.get("salesSummary") or {}).get("apple") or {})
    apple_current = apple_summary.get("currentWeek") or {}
    apple_week_to_date = apple_summary.get("weekToDate") or {}
    apple_aliases_match_latest = (
        (not has_apple_values)
        or (
            apple_current.get("range") == apple_latest.get("range") == period
            and apple_week_to_date.get("range") == apple_latest.get("range")
            and money(apple_current.get("purchaseRevenue")) == money(apple_latest.get("purchaseRevenue"))
            and money(apple_week_to_date.get("purchaseRevenue")) == money(apple_latest.get("purchaseRevenue"))
            and apple_current.get("downloads") == apple_latest.get("downloads")
            and apple_week_to_date.get("downloads") == apple_latest.get("downloads")
        )
    )
    add(
        checks,
        "apple_current_period_aliases_match_latest_snapshot",
        apple_aliases_match_latest,
        f"reportingPeriod={period!r}; latest={apple_latest}; currentWeek={apple_current}; weekToDate={apple_week_to_date}",
    )
    add(
        checks,
        "apple_manual_snapshot_not_reduced_to_not_reported",
        (not has_apple_values) or str(apple_latest.get("note") or "").lower().find("transaction count") >= 0,
        "When Apple sales/download values exist, only transaction count may be labeled not reported.",
    )
    try:
        embed_text = embed_path.read_text(encoding="utf-8")
    except Exception as exc:
        embed_text = ""
        add(checks, "embed_readable_for_apple_render_audit", False, f"Could not read embed for Apple renderer audit: {exc}")
    if has_apple_values and apple_status.get("salesGross") is not None:
        add(
            checks,
            "apple_renderer_accepts_salesGross_field",
            "manualAppleSalesUpdate.grossRevenue ?? data.manualAppleSalesUpdate.salesGross" in embed_text
            or "manualAppleSalesUpdate.salesGross ?? data.manualAppleSalesUpdate.grossRevenue" in embed_text,
            "Apple manual snapshot uses salesGross in current data; renderer must fall back to salesGross, not only grossRevenue.",
        )
        add(
            checks,
            "apple_renderer_includes_downloads_line",
            "appleLatest.downloads" in embed_text and "transaction count not reported" in embed_text,
            "Apple card should display revenue/downloads and reserve 'not reported' only for transaction count.",
        )

    # Connector/source freshness must be explicit. Failed sources are allowed only when labeled stale/preserved/blocked.
    status_blobs = [
        data.get("connectorStatus") or {},
        data.get("sourceStatus") or {},
        data.get("sourceStatuses") or {},
        data.get("auditStatus") or {},
    ]
    status_text = json.dumps(status_blobs, sort_keys=True).lower()
    for source in ["roku", "stripe", "google", "meta", "youtube", "apple", "dotstudios"]:
        found = source in status_text
        add(checks, f"source_status_mentions_{source}", found, f"source={source}; present={found}", severity="warning")
    blocked_or_stale_ok = all(term in status_text for term in ["roku", "trc"]) and "excluded" in status_text
    add(checks, "roku_trc_exclusion_explicit", blocked_or_stale_ok, "Roku TRC must be explicitly labeled as live-channel-only/excluded from app usage")

    # Published embed/shareable must contain chartRows normalization so object-wrapped trend data cannot blank charts.
    embed_text = embed_path.read_text(encoding="utf-8", errors="replace") if embed_path.exists() else ""
    add(checks, "embed_file_present", embed_path.exists(), str(embed_path))
    add(
        checks,
        "embed_chart_renderer_accepts_wrapped_rows",
        "const chartRows = Array.isArray(rows) ? rows : (rows?.rows || []);" in embed_text,
        "embed trend renderer must normalize object-wrapped trend data before checking length",
    )
    add(
        checks,
        "embed_chart_renderer_not_old_rows_length_check",
        "if (!svg || !rows?.length) return;" not in embed_text,
        "old rows.length guard blanks charts when weeklyTrend/monthlyTrend are objects",
    )
    add(
        checks,
        "embed_contains_current_reporting_period",
        bool(period and period in embed_text),
        f"embed contains reporting period {period!r}",
    )
    for required_id in [
        "kpi-grid",
        "plain-panel",
        "trend-period",
        "purchase-chart",
        "purchase-summary",
        "tvod-title-revenue-summary",
        "youtube-kpis",
    ]:
        add(
            checks,
            f"embed_markup_contains_{required_id}",
            contains_dom_id(embed_text, required_id),
            f"required visible container id={required_id!r} must exist in the hosted embed markup",
        )
    add(
        checks,
        "embed_sales_summary_selector_is_guarded",
        ("const salesSummaryEl = $('#sales-summary') || $('#purchase-summary');" in embed_text
         or "const salesSummaryEl = document.querySelector('#sales-summary') || document.querySelector('#purchase-summary');" in embed_text),
        "purchase renderer must fall back from #sales-summary to #purchase-summary so a selector mismatch cannot stop later charts",
    )
    if embed_path.exists():
        syntax = subprocess.run(["node", "--check", str(embed_path)], text=True, capture_output=True)
        add(
            checks,
            "embed_javascript_syntax_valid",
            syntax.returncode == 0,
            (syntax.stderr or syntax.stdout or "node --check passed")[:500],
        )

    if shareable_path:
        shareable_exists = shareable_path.exists()
        shareable_text = shareable_path.read_text(encoding="utf-8", errors="replace") if shareable_exists else ""
        add(checks, "shareable_file_present", shareable_exists, str(shareable_path), severity="warning")
        if shareable_exists:
            add(
                checks,
                "shareable_chart_renderer_accepts_wrapped_rows",
                "const chartRows = Array.isArray(rows) ? rows : (rows?.rows || []);" in shareable_text,
                "shareable trend renderer must normalize object-wrapped trend data",
            )
            add(
                checks,
                "shareable_contains_current_reporting_period",
                bool(period and period in shareable_text),
                f"shareable contains reporting period {period!r}",
            )
            for required_id in [
                "kpi-grid",
                "plain-panel",
                "trend-period",
                "purchase-chart",
                "purchase-summary",
                "funnel-list",
                "ad-list",
                "tvod-title-revenue-summary",
                "youtube-kpis",
            ]:
                add(
                    checks,
                    f"shareable_markup_contains_{required_id}",
                    contains_dom_id(shareable_text, required_id),
                    f"required visible container id={required_id!r} must exist in the shareable markup",
                )
            add(
                checks,
                "shareable_sales_summary_selector_is_guarded",
                "const salesSummaryEl = document.querySelector('#sales-summary') || document.querySelector('#purchase-summary');" in shareable_text,
                "purchase renderer must fall back from #sales-summary to #purchase-summary so a selector mismatch cannot stop later charts",
            )
            script_matches = re.findall(r"<script>\s*(.*?)\s*</script>", shareable_text, flags=re.S)
            if script_matches:
                with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as tmp:
                    tmp.write(script_matches[-1])
                    tmp_path = Path(tmp.name)
                try:
                    syntax = subprocess.run(["node", "--check", str(tmp_path)], text=True, capture_output=True)
                    add(
                        checks,
                        "shareable_javascript_syntax_valid",
                        syntax.returncode == 0,
                        (syntax.stderr or syntax.stdout or "node --check passed")[:500],
                    )
                finally:
                    tmp_path.unlink(missing_ok=True)
            else:
                add(checks, "shareable_script_block_found", False, "No terminal <script> block found for syntax validation")

            smoke = run_shareable_smoke_test(shareable_path)
            smoke_errors = smoke.get("errors") or []
            add(
                checks,
                "shareable_runtime_has_no_console_or_page_errors",
                not smoke_errors,
                "; ".join(str(e)[:220] for e in smoke_errors[:4]) or "No browser runtime errors",
            )
            sections = smoke.get("sections") or {}
            for required_id in [
                "kpi-grid",
                "traffic-chart",
                "monthly-traffic-chart",
                "ytd-traffic-chart",
                "purchase-chart",
                "purchase-summary",
                "content-table",
                "tvod-title-revenue-summary",
            ]:
                section = sections.get(required_id) or {}
                rendered = not section.get("error") and int(section.get("htmlLength") or 0) > 0
                add(
                    checks,
                    f"shareable_runtime_renders_{required_id}",
                    rendered,
                    f"{required_id} smoke-test section={section}",
                )

            # --- rendered-page verification (the real gate) ------------------
            period = (data.get("reportingPeriod") or "").strip() or None
            rv = run_rendered_page_verification(shareable_path, period, candidate_data=data_path)
            rv_failures = rv.get("failures") or rv.get("errors") or []
            add(
                checks,
                "rendered_page_has_no_user_visible_defects",
                rv.get("verdict") == "PASS",
                "; ".join(str(f)[:260] for f in rv_failures[:6]) or "Rendered page clean",
            )
            defects = rv.get("defects") or {}
            for key, label in (
                ("undefined", "undefined"),
                ("NaN", "NaN"),
                ("objectObject", "[object Object]"),
                ("collectionNotTracked", "Collection not tracked"),
            ):
                add(
                    checks,
                    "rendered_page_free_of_%s" % key,
                    int(defects.get(key) or 0) == 0,
                    "'%s' occurrences in visible text: %s" % (label, defects.get(key)),
                )
            fetches = rv.get("payloadFetches") or []
            add(
                checks,
                "rendered_page_consumed_expected_period",
                bool(period) and rv.get("renderedPeriod") == period
                and all((f.get("reportingPeriod") in (None, period)) for f in fetches),
                "expected=%s rendered=%s fetched=%s" % (period, rv.get("renderedPeriod"), [f.get("reportingPeriod") for f in fetches]),
            )
            geo = (rv.get("spot") or {}).get("geo") or {}
            add(
                checks,
                "rendered_page_us_geography_visible_with_rows",
                bool(geo.get("present")) and not geo.get("hidden")
                and int(geo.get("stateRows") or 0) >= 5 and int(geo.get("cityRows") or 0) >= 5,
                "us geography: %s" % ({k: v for k, v in geo.items() if k != "kpiText"},),
            )
            appsec = (rv.get("spot") or {}).get("appSections") or {}
            add(
                checks,
                "rendered_page_app_section_cards_populated",
                int(appsec.get("count") or 0) >= 5 and not appsec.get("anyNotReported"),
                "app sections: count=%s anyNotReported=%s" % (appsec.get("count"), appsec.get("anyNotReported")),
            )
            cards = rv.get("cards") or {}
            add(
                checks,
                "rendered_page_sales_ytd_card_present_when_data_supports_it",
                (not cards.get("ytdInData")) or bool(cards.get("ytdCardExists")),
                "ytdInData=%s ytdCardExists=%s" % (cards.get("ytdInData"), cards.get("ytdCardExists")),
            )

            # --- embed / Squarespace publishing path -------------------------
            ev = run_embed_squarespace_verification(embed_path, data_path, period)
            ev_fails = ev.get("fails") or []
            ev_probe = ev.get("probe") or {}
            add(
                checks,
                "embed_renders_under_squarespace_jquery",
                ev.get("verdict") != "ERROR" and not ev_fails,
                "; ".join(str(f)[:260] for f in ev_fails[:6]) or "Embed rendered clean with jQuery present",
            )
            add(
                checks,
                "embed_free_of_javascript_errors",
                not (ev.get("errors") or []),
                "embed js errors: %s" % ((ev.get("errors") or [])[:3] or "none"),
            )
            add(
                checks,
                "embed_template_placeholders_replaced",
                ev_probe.get("placeholderLeak") is False,
                "placeholder leak=%s periodSelector=%r trendChip=%r"
                % (ev_probe.get("placeholderLeak"), ev_probe.get("periodOptionText"), ev_probe.get("trendChip")),
            )
            add(
                checks,
                "embed_core_panels_populated",
                int(ev_probe.get("kpiCards") or 0) > 0
                and int(ev_probe.get("salesSummary") or 0) > 0
                and int(ev_probe.get("tvodCards") or 0) > 0
                and int(ev_probe.get("topTitleRows") or 0) > 0,
                "kpi=%s sales=%s tvod=%s topTitles=%s"
                % (ev_probe.get("kpiCards"), ev_probe.get("salesSummary"),
                   ev_probe.get("tvodCards"), ev_probe.get("topTitleRows")),
            )
            add(
                checks,
                "embed_consumed_expected_period",
                bool(period) and ev_probe.get("dataPeriod") == period,
                "expected=%s embedRendered=%s" % (period, ev_probe.get("dataPeriod")),
            )
            add(
                checks,
                "embed_has_no_undefined_selector_helper",
                _BARE_DOLLAR.search(embed_path.read_text(errors="ignore")) is None,
                "bare $( calls in embed (must be document.querySelector): %s"
                % len(_BARE_DOLLAR.findall(embed_path.read_text(errors="ignore"))),
            )
            cbs = embed_path.parent / "electricnow-dashboard-embed-codeblock-safe.html"
            if cbs.exists():
                add(
                    checks,
                    "codeblock_safe_has_no_undefined_selector_helper",
                    _BARE_DOLLAR.search(cbs.read_text(errors="ignore")) is None,
                    "bare $( calls in codeblock-safe: %s"
                    % len(_BARE_DOLLAR.findall(cbs.read_text(errors="ignore"))),
                )

    # ---- Every live publishing path, browser-rendered, coverage enforced ----
    project_dir = Path(embed_path).resolve().parent
    matrix = run_published_artifact_matrix(project_dir, data_path, expected_period or reporting_period)
    rendered_ok = set()
    if matrix.get("error"):
        add(checks, "published_artifact_manifest_present", False, matrix["error"])
    else:
        add(checks, "published_artifact_manifest_present", True,
            f"{len(matrix.get('declaredLive', []))} live artifacts declared")
        for art in matrix.get("artifacts", []):
            ok = art.get("verdict") == "PASS"
            if ok:
                rendered_ok.add(art["id"])
            detail = f"{art['path']} via {art['loadMode']}"
            if art.get("hostGlobals"):
                detail += f" with host globals {art['hostGlobals']}"
            if not ok:
                detail += " | " + "; ".join(str(f) for f in art.get("fails", [])[:3])
            add(checks, f"published_artifact_renders__{art['id']}", ok, detail)

        # The meta-check. A publishing path that was never rendered must not be
        # able to ride along on a green audit -- that is the exact failure mode
        # that shipped a blank dashboard twice.
        declared = set(matrix.get("declaredLive", []))
        uncovered = sorted(declared - rendered_ok)
        add(checks, "published_artifact_coverage_complete",
            bool(declared) and not uncovered,
            "every live artifact in published_artifacts.json must render clean; "
            f"uncovered={uncovered or 'none'}")

    # ---- Renderer drift between artifacts --------------------------------
    # The code-block fallback shipped broken for weeks because regen only
    # refreshed its DATA while its renderer stayed frozen at an old revision.
    # It is now generated from embed.js, so assert that is still true.
    cbs_path = project_dir / "electricnow-dashboard-embed-codeblock-safe.html"
    if cbs_path.exists() and embed_path.exists():
        embed_src = embed_path.read_text(errors="ignore")
        cbs_src = cbs_path.read_text(errors="ignore")
        add(checks, "codeblock_safe_renderer_matches_embed",
            embed_src.strip() in cbs_src,
            "code-block fallback must embed the embed.js renderer verbatim so the two "
            "cannot drift apart; regenerate with build_codeblock_safe.py")

    # ---- The gate must have demonstrated it can fail ----------------------
    selftest_path = project_dir / "audit_selftest_result.json"
    if selftest_path.exists():
        try:
            st = json.loads(selftest_path.read_text(encoding="utf-8"))
            blind = st.get("blindSpots") or []
            add(checks, "audit_selftest_has_no_blind_spots", st.get("status") == "pass",
                f"negative-control suite: {st.get('cases')} cases, blind spots={blind or 'none'}")
        except json.JSONDecodeError:
            add(checks, "audit_selftest_has_no_blind_spots", False,
                "audit_selftest_result.json is unreadable")
    else:
        add(checks, "audit_selftest_has_no_blind_spots", False,
            "no audit_selftest_result.json - run audit_selftest.py so the gate proves "
            "it can still detect known failure modes", severity="warning")

    failures = [c for c in checks if c.status == "fail" and c.severity == "error"]
    warnings = [c for c in checks if c.status == "fail" and c.severity == "warning"]
    return {
        "publishedArtifactMatrix": matrix,
        "status": "fail_block_publish" if failures else "pass_publish_allowed",
        "checkedAt": datetime.now().astimezone().isoformat(timespec="seconds"),
        "dashboardData": str(data_path),
        "embed": str(embed_path),
        "shareable": str(shareable_path) if shareable_path else None,
        "reportingPeriod": reporting_period,
        "expectedPeriod": expected_period,
        "summary": {
            "checks": len(checks),
            "failures": len(failures),
            "warnings": len(warnings),
        },
        "checks": [asdict(c) for c in checks],
        "publishBlockers": [asdict(c) for c in failures],
        "warnings": [asdict(c) for c in warnings],
    }


def write_outputs(result: dict[str, Any], out_dir: Path, label: str) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    json_path = out_dir / f"pre_publish_audit_{label}.json"
    md_path = out_dir / f"pre_publish_audit_{label}.md"
    json_path.write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")
    lines = [
        f"# ElectricNOW Pre-Publish Audit — {label}",
        "",
        f"Status: **{result['status']}**",
        f"Reporting period: {result.get('reportingPeriod')}",
        f"Checks: {result['summary']['checks']} | Failures: {result['summary']['failures']} | Warnings: {result['summary']['warnings']}",
        "",
        "## Publish blockers",
    ]
    blockers = result.get("publishBlockers") or []
    if blockers:
        lines += [f"- **{b['name']}**: {b['detail']}" for b in blockers]
    else:
        lines.append("- None.")
    lines += ["", "## Warnings"]
    warnings = result.get("warnings") or []
    if warnings:
        lines += [f"- **{w['name']}**: {w['detail']}" for w in warnings]
    else:
        lines.append("- None.")
    md_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Run the ElectricNOW dashboard pre-publish audit gate.")
    parser.add_argument("--data", default=str(PROJECT / "dashboard-data.json"))
    parser.add_argument("--embed", default=str(PROJECT / "electricnow-dashboard-embed.js"))
    parser.add_argument("--shareable", default=str(PROJECT / "electricnow-performance-dashboard-shareable.html"))
    parser.add_argument("--expected-period", default=None)
    parser.add_argument("--out-dir", default=str(DEFAULT_CRON))
    parser.add_argument("--label", default=datetime.now().strftime("%Y%m%d_%H%M%S"))
    args = parser.parse_args()

    result = audit(Path(args.data), Path(args.embed), Path(args.shareable), args.expected_period)
    write_outputs(result, Path(args.out_dir), args.label)
    print(json.dumps({"status": result["status"], **result["summary"]}, indent=2))
    if result["status"] != "pass_publish_allowed":
        print("Publish blocked. See publishBlockers in the audit JSON/Markdown output.")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
