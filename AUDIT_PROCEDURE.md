# ElectricNOW Dashboard — Publishing Audit Procedure

Last updated: September 1, 2026

## TVOD commentary requirement added October 3, 2026

Before writing dashboard sales conclusions, read `TVOD_ANALYSIS_POLICY.md`.
Separate release-cycle/season-pass effects from app purchase conversion. Weekly
declines alone do not establish weaker purchase motivation. Continued later sales
are encouraging, but do not prove redesign causality. The proposed 80%-within-48-
hours rule remains unverified and must not be presented as an industry benchmark.
Verify title-specific premiere, finale and digital-availability dates before
describing a measured release-cycle effect; preserve all actual sales declines.

## Calculation contract added September 20, 2026

“Base” always means April 13–19, 2026, the launch week explicitly selected by
the user. Never alias baseline to previousWeek. Time cards show actual launch
minutes, actual current minutes, and the percentage change from launch.
Previous-week change remains separately labeled. Percentage-point differences
for rates are not percentage changes.

`calculation_contract.py` runs at regeneration and in the publishing gate.
It validates comparison arithmetic, exact seconds-to-minutes denominators,
app-section and platform averages, ad ratios and subtotals, TVOD transaction
and revenue subtotals, Apple daily units, YouTube daily totals, install totals,
paid-efficiency ratios, and platform shares. The browser verifier checks the
actual time-card text against independent expected values. Negative controls
must catch wrong baseline dates, incorrect deltas, wrong time denominators,
and percentages labeled as minutes.

Repull launch, current and previous platform totals using the SAME pagePath
exclusion: `^/(landing|devices|roku|ios|android|apple-tv|fire-tv)(/|$)`,
case insensitive, negated. Use GA4 aggregate queries; never subtract per-page
active users or sum platform users to derive a deduplicated audience. Grouped
app-section averages require a deduplicated whole-group query; taking the max
of per-screen users is not a valid denominator. Raw audit queries are preserved
under `cron_tracking/0b0f51ad/calculation_audit_20260920`.

The rolling 28-day context and detailed per-platform diagnostic rows currently
remain property-wide, explicitly labeled as including acquisition traffic.
They are not interchangeable with the acquisition-excluded weekly headline.

## Why this document exists

Patrick has caught obvious, visible dashboard defects by eye — a blank page, a
missing "where our users are watching" section, missing year-to-date sales —
while the automated self-audit reported everything green. That is not bad luck.
The audit was structurally incapable of seeing those defects, for four specific
reasons. This procedure fixes each one.

| Why the audit missed it | What now prevents it |
| --- | --- |
| It checked the data file, not the rendered page | Every live artifact is rendered in a real browser and graded |
| It rendered one file; the team loaded a different one | A manifest lists every live path, and coverage is **enforced** |
| It only proved files on disk were good | A post-publish check renders the actual live URLs |
| Nobody ever proved the audit could fail | A negative-control suite re-breaks the dashboard and requires the gate to catch it |

## The four layers

### 1. Data checks (`pre_publish_dashboard_audit.py`)

The original layer: totals, date ranges, source freshness, stale-source
labelling, plain-English summary structure. Necessary but not sufficient — a
perfect data file renders a blank page if the renderer is broken.

### 2. Rendered-artifact matrix (enforced coverage)

`published_artifacts.json` declares every path that can reach a viewer. Four are
live today:

| Artifact | How it is loaded | Host quirk it must survive |
| --- | --- | --- |
| `electricnow-performance-dashboard-shareable.html` | self-contained page | — |
| `electricnow-dashboard-embed.js` | script embed on Squarespace | `window.$` is jQuery |
| `electricnow-dashboard-embed.js` | script embed, bare host | no globals at all |
| `electricnow-dashboard-embed-codeblock-safe.html` | pasted code block | `window.$` is jQuery |

The gate renders **each** in a real browser and grades: JavaScript errors, empty
containers, defect strings (`undefined`, `NaN`, `[object Object]`), payload
period, and visible text volume.

Two checks matter most:

- **`published_artifact_coverage_complete`** — if a live artifact was not
  rendered, the audit FAILS. An untested publishing path can no longer ride
  along on a green audit. This is the single most important addition; it is the
  exact hole that shipped a blank dashboard twice.
- **Static-vs-rendered diff** — each artifact is loaded twice, once with
  JavaScript disabled. If a container is byte-identical both ways, the renderer
  never ran. This catches "the page is blank" generically, without needing to
  know what the placeholder text says.

Also enforced: `codeblock_safe_renderer_matches_embed`. The code-block fallback
is now **generated** from `embed.js` by `build_codeblock_safe.py`, so the two
cannot drift. It previously sat broken for weeks because regeneration refreshed
its data but never its renderer.

### 3. Data-to-DOM row counts

Counting "does the container have children" is too weak: a table that lost all
50 rows still reports one child — the `<table>` element itself. That is how an
emptied section read as populated. Rendered rows are now compared against the
payload array they come from, so both **emptied** and **silently truncated**
sections fail.

### 4. Post-publish live verification (`verify_live_publish.py`)

Everything above only proves the files on disk are good. Publishing is not
"audit, then push" — it is:

```
audit  →  push  →  PURGE the CDN  →  render the live URLs  →  grade
```

Both extra steps are load-bearing:

- The published page fetches `dashboard-data.json` **live from GitHub**, which
  overrides the inline payload. Nothing is live until it is pushed.
- jsDelivr caches `@main` aggressively. After the September 1 fix it kept
  serving the old broken bytes until explicitly purged. **Every push must be
  followed by a purge**, or the team sees last week's broken copy.

This script purges, confirms what the CDN is actually serving, then renders the
real loader through jsDelivr with jQuery present, exactly as Squarespace does.

### 5. Multi-viewport geometry (added September 7, 2026)

On September 7 the gate was green (142 checks, 0 failures, live verify PASS) and
Dean opened the published page on an iPad and found four defects in ten minutes:

1. The four scorecard groups sat side by side in 180px columns in portrait.
2. "VS PREVIOUS 7 DAYS" wrapped underneath its delta badge in landscape.
3. Cards with a launch baseline showed a wide italic "not tracked at launch".
4. Live/FAST channels (Grindhouse Gold, a-z Classic Flix, Ghost Dimension and
   six more) were listed as on-demand titles in Top Programs and Top Videos.

Why the audit missed every one of them:

- **It rendered only at 1440px.** Every layout defect lived below 1180px.
- **It validated data, not geometry.** Row counts and period strings were correct;
  nothing measured whether text boxes overlapped or a label wrapped.
- **The live roster was a 13-name constant** in `apply_full_refresh`, while GA4
  now carries about 50 FAST channels. The embed and shareable never filtered the
  title lists by name at all (only `app.js` did, with its own separate list), so
  three renderers had drifted three different ways.
- **The refresh left refreshed cards stale-labelled.** Nine behavior/app cards had
  new numbers but still carried `status: stale_preserved_no_fresh_pull`, so the
  gate's period checks skipped them by design and the page showed a stale badge.

What changed:

- `viewport_checks.js` holds one set of geometry checks shared by two callers.
  `verify_published_artifact.js` now runs them as a third pass for **every live
  artifact** at 1440 / 1194 / 834 / 768 / 390px, so the Squarespace embed with
  jQuery present is judged at iPad widths, not only the shareable page.
  Checks: text-rectangle overlaps inside scorecard compare grids; a compare label
  that wraps past two lines; any scorecard group narrower than 60% of the grid at
  >= 768px; "not tracked at launch" on a card that has a launch baseline; any live
  roster name in the Top Programs / Top Videos tables; empty containers; JS errors;
  a card refreshed for the reporting period but still labelled stale.
- `audit_viewports.js <url-or-file> [--offline]` runs the same checks standalone
  against a local file or a live URL and writes per-viewport screenshots. Use
  `--offline` before a push so the inline candidate data is tested instead of last
  week's hosted payload.
- `live_channels.json` is the single roster (`confirmed`, `detected`,
  `legacy_seed`, `detection_rule`). The payload ships it at
  `titleViewership.liveChannelRoster.names`; all three renderers filter by the
  built-in list plus the shipped list. Gate checks
  `live_channel_roster_file_present`, `live_channel_roster_shipped_in_payload`,
  `no_live_channels_in_on_demand_lists`, `on_demand_lists_ranks_contiguous`.
  Detection rule: `video_start` present with none of screen_view / video_progress /
  video_complete / vmap_ad_* / ads_*, at least 2 starts, and a name that is not a
  Season/Temporada/Full Series/Trailer label. Detected names stay
  `pending_team_confirmation` until Michael confirms them.
- Gate check `scorecard_refreshed_cards_not_marked_stale` blocks the opposite of
  the old failure: a card that is on-period and moved vs the previous week cannot
  also be stale.
- Self-test cases added: `tablet_grid_multicolumn`, `launch_badge_regression`,
  `live_channel_leak` (renderer filter disabled AND a channel injected — both
  lines of defence down), `refreshed_card_marked_stale`.

The rule this incident adds: **the audit must look at the page the way the team
does.** The team reads this dashboard on iPads and phones. A check that only
renders a desktop viewport is not a rendering check.

## The self-test: proving the gate can fail

A green audit is only meaningful if a red audit is possible. `audit_selftest.py`
deliberately re-breaks the dashboard eleven ways and requires the gate to catch
each one:

| Mutation | Real incident it reproduces |
| --- | --- |
| `undefined_selector_helper` | Sept 1 blank page — `$()` was jQuery on Squarespace |
| `rows_map_drift` | Code-block fallback crashing on object-wrapped trend data |
| `render_throws_early` | Any exception before panels paint |
| `undefined_leak` | Defect strings reaching the screen |
| `blank_top_titles` | A whole section silently emptying |
| `stale_period` | Shipping last week's payload as current |
| `tablet_grid_multicolumn` | Sept 7 iPad — scorecard groups side by side in 180px columns |
| `launch_badge_regression` | Sept 7 iPad — "not tracked at launch" on baseline cards, badge overlapping its label |
| `live_channel_leak` | Sept 7 — Grindhouse Gold / Ghost Dimension listed as on-demand titles |
| `refreshed_card_marked_stale` | Sept 7 — refreshed cards still stale-labelled, so the gate skipped them |

It also detects **dead controls** — a mutation that no longer applies (because
the code it targeted was renamed) is reported as a failure, not silently
skipped. A test that cannot fail is worse than no test.

The suite writes `audit_selftest_result.json`, and the main gate reads it:
`audit_selftest_has_no_blind_spots` fails if any blind spot exists. So the audit
will not certify a publish unless it has recently demonstrated it can detect
failure.

The self-test earned its keep immediately. On its first run it exposed three
defects in the audit itself: one mutation the gate could not catch and two dead
controls. It also found a second broken artifact nobody knew about — the
Squarespace code-block fallback was crashing with `rows.map is not a function`.

## Weekly run order

```
apply_full_refresh → normalize_render_contract → patch_sales_ytd → patch_ytd_trend
  → [apple/app-ads, tvod, render-layer, plain-english patches]
  → patch_render_contract_fixes
  → regen_outputs_2026-08-31.py          # regenerates code-block fallback from embed.js
  → audit_selftest.py                    # prove the gate can still fail
  → pre_publish_dashboard_audit.py       # must be 0 failures; renders every live artifact at 5 viewports
  → git push
  → verify_live_publish.py               # purge + render the real live URLs
  → node audit_viewports.js <live shareable URL>   # optional standalone iPad/phone check with screenshots
```

Do not push on a failed gate. Do not consider a publish finished before
`verify_live_publish.py` passes.

## Standing data rules (unchanged)

- All GA4 values are labelled "Internal GA4 pull, property 497892271". Never use
  property 213042706 or 150386366.
- Roku TRC Live "Percent of Unique Viewers" / "Average Session" are excluded
  from app/platform usage. Roku App Engagement stays separate from GA4.
- DotStudios TVOD overlaps Apple/Stripe/Roku/Android/Web — it is a cross-check,
  never additive. Stripe + Roku + Apple = "visible platform sales," never total
  ElectricNOW sales.
- No true ROAS claims; ad-server revenue is unavailable.
- Paid-campaign impressions are distinct from in-app ad impressions.
- Stale sources are preserved and labelled stale, never zero-filled. Manual
  Apple entries are never overwritten.
- Landing-page traffic is acquisition only, not platform audience.
- Plain-English summaries open with the most positive accurate finding, then
  cover drops, risks, and caveats honestly.

## Current state (September 7, 2026 — see cron_tracking status for the latest counts)

Superseded figures from September 1 kept for history:

- Pre-publish gate: **136 checks, 0 failures, 0 warnings**, `pass_publish_allowed`
- Negative-control suite: **7 cases, no blind spots**
- All 4 live artifacts render clean
- Live CDN verified: 0 bare `$(` calls, period `Aug 24-Aug 30, 2026`, 0 JS
  errors, 50 top titles, 50 top videos, 100 content rows

## Addendum — September 8, 2026: preview page and renderer parity

Failure that motivated this: the preview site (index.html + app.js) was deployed from the project directory even though the manifest listed app.js as known-bad, and the gate never rendered the preview URL because it was not a live artifact. The team saw empty Top 50 / TVOD / gaps sections and blank trend charts while every gate check was green.

Rules now enforced:
1. `preview_site_index` is a live artifact in `published_artifacts.json` (loadMode `preview_site_dir`). The gate static-serves the project dir and renders index.html at 1440/1194/834/768/390. Any preview deploy must come from the same audited project dir, after the gate passes, never before.
2. Renderer parity: `renderer_parity_<renderer>_vs_embed` fails if any function shared with `electricnow-dashboard-embed.js` has drifted or is missing in `app.js` or the shareable HTML. Allowed differences are listed under `rendererParity.allowedDifferences` in the manifest. Fix drift by porting the embed version; never by adding to the allow-list.
3. The self-test includes `preview_control_unmutated` (must PASS), `preview_rows_map_crash` (re-breaks renderTable, must FAIL) and `preview_renderer_drift` (must FAIL). 24 cases total; blind spots must be none.
4. Launch-baseline comparisons must use the same metric definition as the current value. When a definition changes, re-pull the launch week (Apr 13-19, 2026) under the new definition and store `launchBaselineDefinitionNote`; the `definition changed` badge is only a temporary fallback until that re-pull is done.

## Addendum — October 27, 2026

**Why:** The Oct 26 run passed every rule (383 checks, 0 failures, self-test with no blind spots, live verified) and still published a
daily chart with a preliminary Oct 25 spike (772 users; GA4 later revised it to 539), stale trend captions ("week ending Aug 20, 2026"),
"Fresh Fresh" labels, a Live TV card that compared against launch while saying "vs previous 7 days" (+259.7%), a screen narrative naming
On Demand (4 users) as a top screen, a "Not reported" purchase count, repeated paragraphs and empty tables. The rules were in force; they had
blind spots. These additions close them.

**New data checks** (`audit_content_integrity.py`, run inside `audit_rendered_freshness.py` and therefore inside the main gate):
1. `trend_notes_name_current_window` — trend captions must name the current window, including single dates and year-less ranges.
2. `no_stale_single_date_or_yearless_followups` — "week ending <old date>" anywhere; old dates in Developer follow-up without context.
3. `no_repeated_adjacent_words`, `no_float_formatted_counts_in_prose` ("3,017.0").
4. `no_duplicate_paragraphs_in_card`.
5. `week_over_week_deltas_use_prior_week_and_are_plausible` — Live TV deltas recomputed from the prior week; anything over ±150% fails unless whitelisted with a reason.
6. `narrative_top_screens_match_data` — the screen-ranking sentence is generated from data (`contentReadout`) and checked against the top screens.
7. `last_day_ga4_not_preliminary` — if the last day's engagement rate is under 60% of the rest of the week, GA4 is still processing: re-pull the week before publishing.
8. `live_card_definitions_reconciled` — Live channel usage and the Live play events scorecard must disclose their different definitions.
9. `no_empty_rendered_counts_or_tables` — no "Not reported purchases" when dollars exist; no empty table when source rows exist.

**New rendered-page check** (`audit_rendered_text.py <text dump>`): run on the real rendered page text (with the candidate data substituted
for the hosted URL). Fails on repeated words, repeated paragraphs/sentences, "Not reported purchases", hardcoded stale narrative,
week-over-week deltas over ±150%, and empty tables/lists.

**Self-test:** 12 new data controls plus 6 rendered-text controls (run against the Oct 26 page text saved at
`cron_tracking/0b0f51ad/audit_20261027/rendered_text_published_a3d59c6.txt`) must each FAIL. 49 cases total, 0 blind spots.

**Live check:** because the period string alone cannot tell an old copy from a corrected one, confirm the live JSON `generatedAt`
matches the candidate after `verify_live_publish.py`.

**Order (unchanged, with the new step):** regen → audit_selftest.py → pre_publish_dashboard_audit.py → audit_rendered_text.py on the
rendered dump → git push → verify_live_publish.py + generatedAt match.

## Addendum — October 27, 2026 (2): eleven blind-spot checks

**Why:** after the Oct 27 fix the user asked what else could slip through. Eleven gaps were found and each now has a check
(`audit_blindspots_v2.py`, run inside the main gate) and at least one self-test that recreates the real failure and must FAIL
(`selftest_blindspots_v2.py`, run by `audit_selftest.py`).

1. **Weekly email gate** (`audit_weekly_email.py --body <txt> --built-from <json>`): the email may be sent only if the live JSON is the
   build it was made from, the live data passes every content check, a Sat/Sun re-pull under 2 hours old passed, every number in the body
   traces to the live data, and the GA4 label and week dates are present. The builder must read dashboard values only — no separate GA4 pull.
2. **Weekend re-pull** (`ga4_tail_repull.py`): re-pull the last two days from GA4 497892271 after regen and again before the email;
   any users/sessions/engaged-sessions change over 3% fails and the week is rebuilt.
3. **Live identity**: `verify_live_publish.py` now compares the sha256 of every CDN file with the pushed file and the live `generatedAtIso`.
   A matching period is not enough.
4. **Every prose number traces to data**, including derived percentages and differences. IDs, names, addresses and timestamps are excluded.
   Limitation: the data holds ~39,000 values, so a random invented 4-digit number matches one by chance about 38% of the time; stale and
   preliminary numbers are caught, and check 5 covers headline metrics exactly.
5. **Same metric, same value**: a registry of where each headline metric appears (scorecards, totals, audience, prose); all must match.
   A different definition shown alongside (YTD property-wide users) must be labelled.
6. **Comparison basis**: every scorecard change is recomputed against `comparisonPeriod`/`baselinePeriod`; Live TV must carry
   `deltasBasis` naming the prior week and `deltasLabel`, which the renderer now displays.
7. **No claims typed into renderer code**: quoted text with dates, counts, percentages or claim words in app.js/index.html/embed/shareable
   must be on the reviewed `renderer_literal_allowlist.json` (one entry: the period-menu placeholder).
8. **Revisions to past weeks disclosed**: `cron_tracking/0b0f51ad/published_history.json` stores what was published per week;
   a >5% change to the prior week needs a `ga4Revisions` entry and both numbers in the summary. Run `record_published_history.py` after each verified publish.
9. **One-day spikes/drops explained**: any day above 2× or below 0.4× the week's median needs `trend.anomalyNotes[date]`.
10. **Manual sources cover the week**: uploaded exports/screenshots marked fresh must cover the dashboard week (vendor Sun-Sat offsets only
    when labelled); export rows must sit inside the week; "Fresh …, <range>" text must name the current week.
11. **Every user-reported issue has a test**: `user_reported_issues.json` lists each issue and its self-test cases; the self-test fails if any
    is missing or not caught.

**Order:** regen → `ga4_tail_repull.py` → `audit_selftest.py` (0 blind spots) → `pre_publish_dashboard_audit.py` (0 failures, 5 viewports)
→ `audit_rendered_text.py` → git push → `verify_live_publish.py` (now includes identity) → `record_published_history.py`.
Weekly email: `ga4_tail_repull.py` again → build from the live dashboard JSON → `audit_weekly_email.py` → send only on pass.

## Addendum — October 27, 2026 (3): CDN served last week's preliminary data

**What happened:** after the 15:00 UTC purge, jsDelivr's `@main` copy of `dashboard-data.json` reverted to the Oct 26
preliminary build (a3d59c6; 2,727 users), and the renderer replaced its own up-to-date built-in data with it. The
period still read "Oct 19-Oct 25, 2026", so only the new identity check (check 3) caught it.

**Fix (commit 4e69ac4, all four renderer copies):** the renderer now fetches both the CDN copy and the GitHub copy of the
data and renders the newest by `generatedAtIso`; it never replaces its built-in data with an older file. The primary
hosted copy wins ties, so the gate's injected test data is still the one rendered.

**Proven:** with both data URLs forced to return the Oct 26 preliminary file, the page kept the Oct 27 data and showed no
2,727. The real live loader then rendered 2,535 users, 48 free Apple downloads and the revision note, each paragraph once.
