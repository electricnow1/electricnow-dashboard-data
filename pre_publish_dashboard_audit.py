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
import re
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
    ]
    for key in note_keys:
        note = str(data.get(key) or "")
        add(checks, f"{key}_present", bool(note.strip()), f"{key}={note[:160]!r}")
        if period:
            stale_hits = [p for p in stale_note_patterns if re.search(p, note) and period not in note and "stale" not in note.lower()]
            add(checks, f"{key}_not_misleadingly_stale", not stale_hits, f"{key} stale pattern hits={stale_hits}; reportingPeriod={period!r}")

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

    # YouTube YTD should never disappear when current-period rows are partial.
    youtube = data.get("youtubeSummary") or {}
    ytd_revenue = money(((youtube.get("yearToDate") or {}).get("estimatedRevenue")) or ((youtube.get("totals") or {}).get("yearToDateRevenue")))
    add(checks, "youtube_ytd_revenue_present", ytd_revenue is not None and ytd_revenue > 0, f"YouTube YTD revenue={ytd_revenue}")

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

    failures = [c for c in checks if c.status == "fail" and c.severity == "error"]
    warnings = [c for c in checks if c.status == "fail" and c.severity == "warning"]
    return {
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
