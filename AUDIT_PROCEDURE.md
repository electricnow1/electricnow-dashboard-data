# ElectricNOW Dashboard — Publishing Audit Procedure

Last updated: September 1, 2026

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
