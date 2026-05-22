<!-- ElectricNOW Performance Dashboard embed. Paste this whole block into one Code Block. -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
#electricnow-dashboard-embed {
  --bg: #050a12;
  --surface: #0a1524;
  --surface-2: #0f2138;
  --surface-3: #132b48;
  --border: rgba(255, 255, 255, 0.11);
  --border-strong: rgba(255, 255, 255, 0.18);
  --text: #f6f9ff;
  --muted: #9fb3ca;
  --faint: #667f9d;
  --primary: #2f81d7;
  --primary-2: #68b7ff;
  --good: #69d895;
  --bad: #ff6f85;
  --warn: #ffc857;
  --shadow: 0 22px 70px rgba(0, 0, 0, 0.42);
  --radius: 14px;
  --radius-sm: 10px;
  --font-ui: 'Inter', system-ui, sans-serif;
  --font-display: 'Barlow Condensed', 'Arial Narrow', sans-serif;
  --embed-top-buffer: 32px;
}
#electricnow-dashboard-embed *,
#electricnow-dashboard-embed *::before,
#electricnow-dashboard-embed *::after {
  box-sizing: border-box;
}
#electricnow-dashboard-embed,
#electricnow-dashboard-embed {
  min-height: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
#electricnow-dashboard-embed {
  margin: 0;
  background:
    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),
    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),
    var(--bg);
  color: var(--text);
  font-family: var(--font-ui);
  font-size: 15px;
  line-height: 1.45;
  overflow-x: hidden;
}
#electricnow-dashboard-embed,
#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {
  background:
    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),
    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),
    var(--bg) !important;
  color: var(--text) !important;
}
#electricnow-dashboard-embed a {
  color: inherit !important;
}
#electricnow-dashboard-embed button,
#electricnow-dashboard-embed select {
  font: inherit;
}
#electricnow-dashboard-embed .skip-link {
  position: fixed;
  left: 16px;
  top: 16px;
  z-index: 1000;
  transform: translateY(-160%);
  background: var(--primary);
  color: #fff;
  padding: 10px 14px;
  border-radius: 999px;
}
#electricnow-dashboard-embed .skip-link:focus {
  transform: translateY(0);
}
#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {
  max-width: 100vw;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  grid-template-rows: minmax(104px, auto) minmax(0, 1fr);
  min-height: 100vh;
  padding-top: var(--embed-top-buffer);
}
#electricnow-dashboard-embed .sidebar {
  grid-row: 1 / -1;
  position: sticky;
  top: var(--embed-top-buffer);
  height: calc(100vh - var(--embed-top-buffer));
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-right: 1px solid var(--border);
  background: #050a12 !important;
  padding: 24px;
  overflow-y: auto;
  overscroll-behavior: contain;
}
#electricnow-dashboard-embed .brand {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  align-items: center;
  text-decoration: none;
  color: var(--text) !important;
}
#electricnow-dashboard-embed .brand-mark {
  width: 48px;
  border-radius: 4px;
  background: linear-gradient(135deg, #2367b2, #d9ebff);
  color: #fff;
  padding: 7px;
}
#electricnow-dashboard-embed .brand span {
  display: grid;
  gap: 0;
}
#electricnow-dashboard-embed .brand strong {
  font-family: var(--font-display);
  font-size: 25px;
  line-height: 0.82;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .brand small,
#electricnow-dashboard-embed .source-card span,
#electricnow-dashboard-embed .eyebrow,
#electricnow-dashboard-embed .select-label {
  color: var(--primary-2) !important;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .side-nav {
  display: grid;
  gap: 6px;
}
#electricnow-dashboard-embed .side-nav a {
  min-height: 42px;
  display: flex;
  align-items: center;
  border-radius: var(--radius-sm);
  color: var(--muted) !important;
  padding: 0 12px;
  text-decoration: none;
}
#electricnow-dashboard-embed .side-nav a:hover,
#electricnow-dashboard-embed .side-nav a:focus-visible {
  background: var(--surface-2);
  color: var(--text) !important;
}
#electricnow-dashboard-embed .source-card {
  margin-top: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #0f2138 !important;
  padding: 16px;
}
#electricnow-dashboard-embed .source-card strong {
  display: block;
  margin-top: 6px;
}
#electricnow-dashboard-embed .source-card p {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 13px;
  overflow-wrap: anywhere;
}
#electricnow-dashboard-embed .topbar {
  position: sticky;
  top: var(--embed-top-buffer);
  z-index: 20;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--border);
  background: #070d17 !important;
  backdrop-filter: blur(14px);
  padding: 18px 28px;
}
#electricnow-dashboard-embed .topbar > div:first-child {
  min-width: 0;
  flex: 1 1 360px;
}
#electricnow-dashboard-embed .topbar h1 {
  color: var(--text) !important;
  margin: 2px 0 0;
  font-family: var(--font-display);
  font-size: clamp(26px, 2.35vw, 34px);
  line-height: 0.98;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .topbar-actions {
  flex: 0 1 520px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}
#electricnow-dashboard-embed select,
#electricnow-dashboard-embed .ghost-button {
  min-height: 42px;
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  background: #0f2138 !important;
  color: var(--text) !important;
  padding: 0 14px;
}
#electricnow-dashboard-embed .ghost-button {
  cursor: pointer;
}
#electricnow-dashboard-embed .ghost-button:disabled {
  cursor: wait;
  opacity: 0.55;
}
#electricnow-dashboard-embed .refresh-button {
  border-color: rgba(104, 183, 255, 0.42);
}
#electricnow-dashboard-embed .refresh-status {
  min-width: 130px;
  color: var(--muted);
  font-size: 12px;
}
#electricnow-dashboard-embed .ghost-button.is-active,
#electricnow-dashboard-embed .ghost-button:hover {
  background: var(--primary);
  border-color: var(--primary);
}
#electricnow-dashboard-embed .main {
  padding: 28px;
  min-width: 0;
  background: #050a12 !important;
}
#electricnow-dashboard-embed .hero-panel,
#electricnow-dashboard-embed .panel,
#electricnow-dashboard-embed .plain-panel,
#electricnow-dashboard-embed .kpi-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0)),
    #0a1524 !important;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04);
}
#electricnow-dashboard-embed .hero-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 260px;
  align-items: end;
  gap: 24px;
  background:
    linear-gradient(135deg, rgba(47, 129, 215, 0.28), rgba(10, 21, 36, 0.96) 55%),
    #0a1524 !important;
  padding: clamp(24px, 4vw, 42px);
}
#electricnow-dashboard-embed .hero-panel h2,
#electricnow-dashboard-embed .plain-panel h2,
#electricnow-dashboard-embed .panel h2 {
  color: var(--text) !important;
  margin: 4px 0 0;
  font-family: var(--font-display);
  font-size: clamp(25px, 3vw, 34px);
  line-height: 0.96;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .panel h3,
#electricnow-dashboard-embed .subsection-header h3 {
  color: var(--text) !important;
  margin: 18px 0 10px;
  font-family: var(--font-display);
  font-size: 22px;
  line-height: 0.95;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .subsection-header {
  margin-top: 28px;
  border-top: 1px solid var(--border);
  padding-top: 20px;
}
#electricnow-dashboard-embed .panel-note {
  margin: 0 0 16px;
  color: var(--muted);
  font-size: 13px;
  max-width: 860px;
}
#electricnow-dashboard-embed .topbar h1,
#electricnow-dashboard-embed .hero-panel h2,
#electricnow-dashboard-embed .plain-panel h2,
#electricnow-dashboard-embed .panel h2,
#electricnow-dashboard-embed .panel h3,
#electricnow-dashboard-embed .subsection-header h3 {
  color: var(--text) !important;
}
#electricnow-dashboard-embed .eyebrow,
#electricnow-dashboard-embed .select-label,
#electricnow-dashboard-embed .source-card span,
#electricnow-dashboard-embed .brand small {
  color: var(--primary-2) !important;
}
#electricnow-dashboard-embed .hero-panel p {
  max-width: 72ch;
  margin: 14px 0 0;
  color: var(--muted);
}
#electricnow-dashboard-embed .hero-meta {
  display: grid;
  gap: 4px;
  justify-items: end;
  color: var(--muted);
  text-align: right;
}
#electricnow-dashboard-embed .hero-meta strong {
  color: var(--text);
}
#electricnow-dashboard-embed .visit-strip {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 16px;
  margin-top: 18px;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  background:
    linear-gradient(135deg, rgba(47, 129, 215, 0.20), rgba(10, 21, 36, 0.96)),
    var(--surface);
  box-shadow: var(--shadow);
  padding: 20px;
}
#electricnow-dashboard-embed .visit-strip-header h2 {
  margin: 2px 0 8px;
  color: var(--text);
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 38px);
  line-height: 0.95;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .visit-strip-header p:not(.eyebrow),
#electricnow-dashboard-embed .visit-source,
#electricnow-dashboard-embed .visit-card p {
  color: var(--muted);
}
#electricnow-dashboard-embed .visit-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
#electricnow-dashboard-embed .visit-card {
  display: grid;
  gap: 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: rgba(5, 10, 18, 0.46);
  padding: 16px;
}
#electricnow-dashboard-embed .visit-card span {
  color: var(--primary-2);
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .visit-card strong {
  color: var(--text);
  font-family: var(--font-display);
  font-size: clamp(42px, 5vw, 64px);
  line-height: 0.9;
  letter-spacing: 0.02em;
}
#electricnow-dashboard-embed .visit-card-meta {
  display: grid;
  gap: 4px;
}
#electricnow-dashboard-embed .visit-card small {
  color: var(--muted);
}
#electricnow-dashboard-embed .visit-card p,
#electricnow-dashboard-embed .visit-source {
  margin: 0;
  font-size: 13px;
}
#electricnow-dashboard-embed .visit-source {
  grid-column: 1 / -1;
}
#electricnow-dashboard-embed .plain-panel {
  display: none;
  grid-template-columns: 240px 1fr;
  gap: 24px;
  margin-top: 18px;
  padding: 20px;
}
#electricnow-dashboard-embed .plain-panel.is-visible {
  display: grid;
}
#electricnow-dashboard-embed .plain-panel ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}
#electricnow-dashboard-embed .plain-panel li,
#electricnow-dashboard-embed .gap-list li {
  color: var(--muted);
}
#electricnow-dashboard-embed .plain-panel li.insight-overview {
  color: var(--text);
  font-size: 1.03rem;
  line-height: 1.55;
}
#electricnow-dashboard-embed .kpi-grid {
  display: grid;
  gap: 18px;
  margin-top: 18px;
}
#electricnow-dashboard-embed .kpi-group {
  border: 1px solid var(--border);
  border-radius: 18px;
  background: #08111e !important;
  padding: 16px;
  box-shadow: var(--shadow);
}
#electricnow-dashboard-embed .kpi-group-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 12px;
}
#electricnow-dashboard-embed .kpi-group-header h3 {
  margin: 0;
  color: var(--text) !important;
  font-family: var(--font-display);
  font-size: 23px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .kpi-group-header > p {
  max-width: 620px;
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}
#electricnow-dashboard-embed .kpi-group-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 12px;
}
#electricnow-dashboard-embed .kpi-card {
  min-height: 232px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;
}
#electricnow-dashboard-embed .kpi-card span,
#electricnow-dashboard-embed .metric-row span,
#electricnow-dashboard-embed .table-wrap th {
  color: var(--faint);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .kpi-card span {
  min-height: 32px;
  display: block;
}
#electricnow-dashboard-embed .kpi-card strong {
  display: block;
  margin-top: 8px;
  font-family: var(--font-display);
  font-size: 34px;
  line-height: 0.95;
  letter-spacing: 0.03em;
  font-variant-numeric: tabular-nums;
}
#electricnow-dashboard-embed .kpi-card p {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 12px;
}
#electricnow-dashboard-embed .kpi-compare-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  margin-top: 14px;
  border-top: 1px solid var(--border);
  padding-top: 12px;
}
#electricnow-dashboard-embed .kpi-compare-grid small {
  color: var(--faint);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .delta {
  display: inline-flex;
  align-self: flex-start;
  margin-top: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--muted);
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}
#electricnow-dashboard-embed .delta.up {
  color: var(--good);
}
#electricnow-dashboard-embed .delta.down {
  color: var(--bad);
}
#electricnow-dashboard-embed .dashboard-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}
#electricnow-dashboard-embed .span-4 {
  grid-column: span 4;
}
#electricnow-dashboard-embed .span-6 {
  grid-column: span 6;
}
#electricnow-dashboard-embed .span-8 {
  grid-column: span 8;
}
#electricnow-dashboard-embed .panel {
  min-width: 0;
  padding: 18px;
}
#electricnow-dashboard-embed .panel-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: start;
  margin-bottom: 16px;
}
#electricnow-dashboard-embed .period-chip {
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  padding: 6px 10px;
  font-size: 12px;
  white-space: nowrap;
}
#electricnow-dashboard-embed .chart-wrap,
#electricnow-dashboard-embed .mini-chart-wrap {
  width: 100%;
  overflow: hidden;
}
#electricnow-dashboard-embed .chart-wrap + h3 {
  margin-top: 24px;
}
#electricnow-dashboard-embed .chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin-top: 12px;
  color: var(--muted);
  font-size: 13px;
}
#electricnow-dashboard-embed .chart-legend span {
  display: inline-flex;
  gap: 7px;
  align-items: center;
}
#electricnow-dashboard-embed .legend-swatch {
  width: 22px;
  height: 4px;
  border-radius: 999px;
  display: inline-block;
}
#electricnow-dashboard-embed .legend-blue {
  background: var(--primary-2);
}
#electricnow-dashboard-embed .legend-green {
  background: var(--good);
}
#electricnow-dashboard-embed svg {
  width: 100%;
  height: auto;
}
#electricnow-dashboard-embed .axis {
  stroke: rgba(255, 255, 255, 0.12);
}
#electricnow-dashboard-embed .chart-label {
  fill: var(--muted);
  font-size: 12px;
  font-family: var(--font-ui);
}
#electricnow-dashboard-embed .chart-end-label {
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 800;
  paint-order: stroke;
  stroke: var(--surface);
  stroke-width: 4px;
}
#electricnow-dashboard-embed .active-end {
  fill: var(--primary-2);
}
#electricnow-dashboard-embed .engaged-end {
  fill: var(--good);
}
#electricnow-dashboard-embed .line-active {
  fill: none;
  stroke: var(--primary-2);
  stroke-width: 4;
}
#electricnow-dashboard-embed .line-engaged {
  fill: none;
  stroke: var(--good);
  stroke-width: 4;
}
#electricnow-dashboard-embed .line-purchase {
  fill: none;
  stroke: var(--warn);
  stroke-width: 4;
}
#electricnow-dashboard-embed .area-fill {
  fill: rgba(104, 183, 255, 0.12);
}
#electricnow-dashboard-embed .purchase-summary {
  display: grid;
  gap: 10px;
}
#electricnow-dashboard-embed .sales-summary {
  display: grid;
  gap: 14px;
  margin-bottom: 16px;
}
#electricnow-dashboard-embed .sales-callout {
  border: 1px solid rgba(255, 200, 87, 0.28);
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, rgba(255, 200, 87, 0.15), rgba(47, 129, 215, 0.1));
  padding: 14px;
}
#electricnow-dashboard-embed .sales-callout span,
#electricnow-dashboard-embed .sales-stat span {
  display: block;
  color: var(--primary-2);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .sales-callout strong {
  display: block;
  margin-top: 5px;
  font-family: var(--font-display);
  font-size: 30px;
  line-height: 0.95;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .sales-callout p,
#electricnow-dashboard-embed .sales-note,
#electricnow-dashboard-embed .sales-source,
#electricnow-dashboard-embed .sales-stat em {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}
#electricnow-dashboard-embed .sales-callout p,
#electricnow-dashboard-embed .sales-source,
#electricnow-dashboard-embed .sales-note {
  margin: 8px 0 0;
}
#electricnow-dashboard-embed .sales-source {
  border-left: 2px solid rgba(104, 183, 255, 0.45);
  padding-left: 10px;
}
#electricnow-dashboard-embed .sales-source-list {
  display: grid;
  gap: 6px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}
#electricnow-dashboard-embed .sales-source-list li {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 8px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--muted);
  font-size: 12px;
}
#electricnow-dashboard-embed .sales-source-list li strong {
  color: var(--text);
  font-size: 12px;
  text-align: right;
}
#electricnow-dashboard-embed .sales-stat-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}
#electricnow-dashboard-embed .sales-stat {
  min-width: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: rgba(15, 33, 56, 0.58);
  padding: 12px;
}
#electricnow-dashboard-embed .sales-stat strong {
  display: block;
  margin-top: 6px;
  font-family: var(--font-display);
  font-size: 26px;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .sales-stat.baseline-set strong {
  color: var(--good);
  font-size: 24px;
}
#electricnow-dashboard-embed .sales-audit {
  border: 1px solid rgba(104, 183, 255, 0.34);
  border-radius: var(--radius-sm);
  background: rgba(15, 33, 56, 0.72);
  padding: 14px;
}
#electricnow-dashboard-embed .sales-audit span {
  display: block;
  color: var(--warn);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .sales-audit strong {
  display: block;
  margin-top: 6px;
  font-family: var(--font-display);
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .sales-audit p,
#electricnow-dashboard-embed .sales-audit small {
  display: block;
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 12px;
}
#electricnow-dashboard-embed .purchase-row,
#electricnow-dashboard-embed .metric-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
  border-bottom: 1px solid var(--border);
  padding-block: 10px;
}
#electricnow-dashboard-embed .purchase-row:last-child,
#electricnow-dashboard-embed .metric-row:last-child {
  border-bottom: 0;
}
#electricnow-dashboard-embed .purchase-row strong,
#electricnow-dashboard-embed .metric-row strong {
  font-variant-numeric: tabular-nums;
}
#electricnow-dashboard-embed .not-tracked {
  color: var(--warn);
}
#electricnow-dashboard-embed .purchase-point-label {
  fill: var(--text);
  font-size: 11px;
  font-weight: 700;
}
#electricnow-dashboard-embed .metric-list {
  display: grid;
}
#electricnow-dashboard-embed .usage-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 18px;
}
#electricnow-dashboard-embed .roku-engagement-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 0;
}
#electricnow-dashboard-embed .usage-stat {
  border: 1px solid rgba(104, 183, 255, 0.18);
  border-radius: var(--radius-sm);
  background: rgba(15, 33, 56, 0.52);
  padding: 14px;
}
#electricnow-dashboard-embed .usage-stat span {
  display: block;
  color: var(--primary-2);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .usage-stat strong {
  display: block;
  margin-top: 6px;
  font-family: var(--font-display);
  font-size: 32px;
  line-height: 0.95;
  letter-spacing: 0.04em;
  font-variant-numeric: tabular-nums;
}
#electricnow-dashboard-embed .usage-stat em {
  display: block;
  margin-top: 5px;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}
#electricnow-dashboard-embed .platform-mix {
  display: grid;
  gap: 14px;
  margin-bottom: 18px;
}
#electricnow-dashboard-embed .platform-total {
  border: 1px solid rgba(104, 183, 255, 0.22);
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));
  padding: 14px;
}
#electricnow-dashboard-embed .platform-total span,
#electricnow-dashboard-embed .coming-platforms span {
  display: block;
  color: var(--primary-2);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .platform-total strong {
  display: block;
  margin-top: 6px;
  font-family: var(--font-display);
  font-size: 36px;
  line-height: 0.95;
  letter-spacing: 0.04em;
}
#electricnow-dashboard-embed .platform-total em,
#electricnow-dashboard-embed .platform-share-card span,
#electricnow-dashboard-embed .platform-share-card p,
#electricnow-dashboard-embed .platform-note {
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}
#electricnow-dashboard-embed .platform-share-list {
  display: grid;
  gap: 10px;
}
#electricnow-dashboard-embed .section-usage-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}
#electricnow-dashboard-embed .section-usage-card {
  min-width: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: rgba(15, 33, 56, 0.62);
  padding: 14px;
}
#electricnow-dashboard-embed .section-usage-card header {
  display: grid;
  gap: 10px;
}
#electricnow-dashboard-embed .section-usage-card span {
  display: block;
  color: var(--primary-2);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .section-usage-card strong,
#electricnow-dashboard-embed .section-usage-card b {
  display: block;
  margin-top: 6px;
  font-family: var(--font-display);
  line-height: 0.98;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;
}
#electricnow-dashboard-embed .section-usage-card strong {
  font-size: 28px;
}
#electricnow-dashboard-embed .section-usage-card b {
  color: var(--good);
  font-size: 18px;
  text-align: left;
  white-space: normal;
}
#electricnow-dashboard-embed .section-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-top: 12px;
}
#electricnow-dashboard-embed .section-metrics em {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  padding: 5px 8px;
}
#electricnow-dashboard-embed .section-usage-card p {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 12px;
}
#electricnow-dashboard-embed .platform-share-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: rgba(15, 33, 56, 0.52);
  padding: 12px;
}
#electricnow-dashboard-embed .platform-share-card.is-untracked {
  border-style: dashed;
  background: rgba(255, 199, 95, 0.08);
}
#electricnow-dashboard-embed .platform-share-card header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: start;
}
#electricnow-dashboard-embed .platform-share-card strong,
#electricnow-dashboard-embed .platform-share-card b {
  color: var(--text) !important;
  font-variant-numeric: tabular-nums;
}
#electricnow-dashboard-embed .platform-share-card strong {
  display: block;
}
#electricnow-dashboard-embed .platform-share-card b {
  font-family: var(--font-display);
  font-size: 24px;
  line-height: 1;
}
#electricnow-dashboard-embed .platform-share-card.is-untracked b {
  color: var(--warn) !important;
}
#electricnow-dashboard-embed .share-track {
  height: 9px;
  margin-top: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}
#electricnow-dashboard-embed .share-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary), var(--primary-2));
}
#electricnow-dashboard-embed .platform-share-card p {
  margin: 8px 0 0;
}
#electricnow-dashboard-embed .compact-card {
  padding: 10px;
}
#electricnow-dashboard-embed .compact-card header {
  align-items: center;
}
#electricnow-dashboard-embed .compact-card b {
  font-size: 20px;
}
#electricnow-dashboard-embed .coming-platforms {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  border-top: 1px solid var(--border);
  padding-top: 12px;
}
#electricnow-dashboard-embed .coming-platforms span {
  margin-right: 4px;
}
#electricnow-dashboard-embed .coming-platforms em {
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  padding: 4px 9px;
  font-size: 12px;
  font-style: normal;
}
#electricnow-dashboard-embed .platform-note {
  margin: 0 0 16px;
}
#electricnow-dashboard-embed .bar-list {
  display: grid;
  gap: 13px;
}
#electricnow-dashboard-embed .bar-row {
  display: grid;
  gap: 7px;
}
#electricnow-dashboard-embed .bar-row header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
#electricnow-dashboard-embed .bar-row span {
  color: var(--muted);
  font-size: 13px;
}
#electricnow-dashboard-embed .bar-track {
  height: 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}
#electricnow-dashboard-embed .bar-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--primary), var(--primary-2));
}
#electricnow-dashboard-embed .table-wrap {
  overflow-x: auto;
  max-width: 100%;
}
#electricnow-dashboard-embed table {
  width: 100%;
  border-collapse: collapse;
  min-width: 520px;
}
#electricnow-dashboard-embed .title-table table {
  min-width: 720px;
}
#electricnow-dashboard-embed th,
#electricnow-dashboard-embed td {
  border-bottom: 1px solid var(--border);
  padding: 10px 8px;
  text-align: left;
  vertical-align: top;
}
#electricnow-dashboard-embed td {
  color: var(--muted);
  font-size: 13px;
}
#electricnow-dashboard-embed td strong {
  color: var(--text);
  font-variant-numeric: tabular-nums;
}
#electricnow-dashboard-embed .gap-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding-left: 18px;
}
#electricnow-dashboard-embed :focus-visible {
  outline: 2px solid var(--primary-2);
  outline-offset: 3px;
}
@media (max-width: 1180px) {
#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
  }
#electricnow-dashboard-embed .sidebar {
    position: static;
    height: auto;
    grid-row: auto;
  }
#electricnow-dashboard-embed .side-nav {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
#electricnow-dashboard-embed .source-card {
    margin-top: 0;
  }
#electricnow-dashboard-embed .kpi-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
#electricnow-dashboard-embed .section-usage-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }


}
@media (max-width: 820px) {
#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {
    overflow-x: hidden;
  }
#electricnow-dashboard-embed .sidebar,
#electricnow-dashboard-embed .topbar,
#electricnow-dashboard-embed .main {
    min-width: 0;
    width: 100%;
  }
#electricnow-dashboard-embed .topbar,
#electricnow-dashboard-embed .hero-panel,
#electricnow-dashboard-embed .visit-strip,
#electricnow-dashboard-embed .plain-panel {
    grid-template-columns: 1fr;
  }
#electricnow-dashboard-embed .topbar {
    align-items: stretch;
  }
#electricnow-dashboard-embed .topbar-actions {
    justify-content: flex-start;
  }
#electricnow-dashboard-embed .kpi-group-header {
    display: block;
  }
#electricnow-dashboard-embed .kpi-group-header > p {
    margin-top: 8px;
  }
#electricnow-dashboard-embed .hero-meta {
    justify-items: start;
    text-align: left;
  }
#electricnow-dashboard-embed .main {
    padding: 16px;
  }
#electricnow-dashboard-embed .kpi-grid,
#electricnow-dashboard-embed .dashboard-grid,
#electricnow-dashboard-embed .visit-card-grid,
#electricnow-dashboard-embed .section-usage-list,
#electricnow-dashboard-embed .side-nav {
    grid-template-columns: 1fr;
  }
#electricnow-dashboard-embed .source-card {
    max-width: 100%;
  }
#electricnow-dashboard-embed .span-4,
#electricnow-dashboard-embed .span-6,
#electricnow-dashboard-embed .span-8 {
    grid-column: auto;
  }


}
@media (max-width: 520px) {
#electricnow-dashboard-embed .sidebar {
    padding: 20px 16px;
  }
#electricnow-dashboard-embed .brand {
    grid-template-columns: 48px minmax(0, 1fr);
  }
#electricnow-dashboard-embed .brand strong {
    font-size: 23px;
    letter-spacing: 0.18em;
  }
#electricnow-dashboard-embed .topbar-actions {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
  }
#electricnow-dashboard-embed select,
#electricnow-dashboard-embed .ghost-button {
    width: 100%;
    max-width: 100%;
  }
#electricnow-dashboard-embed .kpi-grid {
    grid-template-columns: 1fr;
  }


}
#electricnow-dashboard-embed /* ===== Google Ads section ===== */
.google-ads-panel .panel-note {
  margin-bottom: 14px;
}
#electricnow-dashboard-embed .google-ads-campaign {
  margin-bottom: 16px;
}
#electricnow-dashboard-embed .google-ads-campaign-card {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid rgba(104, 183, 255, 0.22);
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));
  padding: 14px 16px;
}
#electricnow-dashboard-embed .google-ads-campaign-card span {
  display: block;
  color: var(--primary-2);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .google-ads-campaign-card strong {
  display: block;
  margin-top: 4px;
  font-family: var(--font-display);
  font-size: 20px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: var(--text);
}
#electricnow-dashboard-embed .google-ads-campaign-card em {
  display: block;
  margin-top: 4px;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
}
#electricnow-dashboard-embed .google-ads-campaign-meta {
  text-align: right;
  min-width: 160px;
}
#electricnow-dashboard-embed .google-ads-kpis {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 22px;
}
@media (max-width: 900px) {
#electricnow-dashboard-embed .google-ads-kpis {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }


}
@media (max-width: 560px) {
#electricnow-dashboard-embed .google-ads-kpis {
    grid-template-columns: 1fr;
  }


}
#electricnow-dashboard-embed .google-ads-split {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 20px;
  margin-bottom: 14px;
}
@media (max-width: 900px) {
#electricnow-dashboard-embed .google-ads-split {
    grid-template-columns: 1fr;
  }


}
#electricnow-dashboard-embed .google-ads-device-list,
#electricnow-dashboard-embed .google-ads-action-list {
  display: grid;
  gap: 10px;
}
#electricnow-dashboard-embed .google-ads-device-row,
#electricnow-dashboard-embed .google-ads-action-row {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: rgba(15, 33, 56, 0.62);
  padding: 12px 14px;
}
#electricnow-dashboard-embed .google-ads-device-row header,
#electricnow-dashboard-embed .google-ads-action-row header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}
#electricnow-dashboard-embed .google-ads-device-row header span,
#electricnow-dashboard-embed .google-ads-action-row header span {
  color: var(--primary-2);
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
#electricnow-dashboard-embed .google-ads-device-row header strong,
#electricnow-dashboard-embed .google-ads-action-row header strong {
  font-family: var(--font-display);
  font-size: 18px;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
}
#electricnow-dashboard-embed .google-ads-device-row .share-track {
  margin: 8px 0 8px;
}
#electricnow-dashboard-embed .google-ads-device-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  color: var(--muted);
  font-size: 12px;
}
#electricnow-dashboard-embed .google-ads-device-metrics em {
  font-style: normal;
  font-variant-numeric: tabular-nums;
}
#electricnow-dashboard-embed .google-ads-action-row em {
  display: block;
  margin-top: 6px;
  color: var(--muted);
  font-size: 12px;
  font-style: normal;
  font-variant-numeric: tabular-nums;
}
#electricnow-dashboard-embed .google-ads-context {
  margin-top: 6px;
  padding: 12px 14px;
  border-left: 3px solid var(--warn);
  background: rgba(255, 200, 87, 0.06);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  color: var(--text);
}


</style>
<div id="electricnow-dashboard-embed" class="app-shell">
      <aside class="sidebar" aria-label="Dashboard sections">
        <a class="brand" href="#overview" data-testid="link-overview">
          <svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M30 4 9 28h13l-4 16 22-26H27l3-14Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
            <path d="M27 12 15 26h11l-2 9 11-14H24l3-9Z" fill="currentColor" />
          </svg>
          <span><strong>Electric</strong><strong>NOW</strong><small>Growth dashboard</small></span>
        </a>
        <nav class="side-nav">
          <a href="#overview" data-testid="nav-overview">Overview</a>
          <a href="#purchases" data-testid="nav-purchases">Purchases</a>
          <a href="#live" data-testid="nav-live">Live TV</a>
          <a href="#sections" data-testid="nav-sections">App sections</a>
          <a href="#viewership" data-testid="nav-viewership">Viewership</a>
          <a href="#titles" data-testid="nav-titles">Top titles</a>
          <a href="#videos" data-testid="nav-videos">Top videos</a>
          <a href="#platforms" data-testid="nav-platforms">Platforms</a>
          <a href="#roku-app" data-testid="nav-roku-app">Roku app</a>
          <a href="#funnel" data-testid="nav-funnel">App funnel</a>
          <a href="#ads" data-testid="nav-ads">Ad signals</a>
          <a href="#google-ads" data-testid="nav-google-ads">Google Ads</a>
          <a href="#acquisition" data-testid="nav-acquisition">Acquisition</a>
          <a href="#content" data-testid="nav-content">Content</a>
        </nav>
        <div class="source-card">
          <span>Source</span>
          <strong>Internal GA4 pull</strong>
          <p>Property 497892271. Reconcile with app-store, Amagi, ad-server, YouTube, and Meta reporting.</p>
        </div>
      </aside>

      <header class="topbar">
        <div>
          <p class="eyebrow">Private snapshot</p>
          <h1>ElectricNOW performance dashboard</h1>
        </div>
        <div class="topbar-actions">
          <label class="select-label" for="period-select">Period</label>
          <select id="period-select" data-testid="select-period">
            <option value="currentWeek">Latest app usage</option>
            <option value="weekToDate">Apr 28-30 watch</option>
          </select>
          <button class="ghost-button refresh-button" type="button" id="refresh-data" data-testid="button-refresh-data">Update data</button>
          <button class="ghost-button" type="button" id="plain-toggle" data-testid="button-toggle-plain">Plain English</button>
          <span class="refresh-status" id="refresh-status" role="status" aria-live="polite"></span>
        </div>
      </header>

      <main id="main" class="main" tabindex="-1">
        <section class="hero-panel" id="overview" aria-labelledby="overview-title">
          <div>
            <p class="eyebrow">Corrected metric framing</p>
            <h2 id="overview-title">Acquisition, app usage, viewing, and time are now separated.</h2>
            <p>
              The top scorecards now show which numbers are web acquisition, which are Apple/Android app-stream usage, which are actual viewing events, and which measure time spent across all GA4-tracked platforms.
            </p>
          </div>
          <div class="hero-meta">
            <span id="generated-at">Generated</span>
            <strong id="source-label">GA4 property 497892271</strong>
          </div>
        </section>

        <section class="visit-strip" id="visit-summary" aria-label="Weekly and monthly visits" data-testid="section-visit-summary"></section>

        <section class="plain-panel" id="plain-panel" aria-labelledby="plain-title">
          <div>
            <p class="eyebrow">Plain-English headlines</p>
            <h2 id="plain-title">What changed?</h2>
          </div>
          <ul id="insights-list" role="list" data-testid="list-insights"></ul>
        </section>

        <section class="kpi-grid" id="kpi-grid" aria-label="Weekly scorecard" data-testid="grid-kpis"></section>

        <section class="dashboard-grid two-col">
          <article class="panel span-8" aria-labelledby="traffic-title">
            <div class="panel-header">
              <div>
                <p class="eyebrow">App use and engagement</p>
                <h2 id="traffic-title">Daily app trend</h2>
              </div>
              <span class="period-chip" id="trend-period">Apr 14-30</span>
            </div>
            <div class="chart-legend" aria-label="Daily trend legend">
              <span><i class="legend-swatch legend-blue"></i>Blue line: app active users</span>
              <span><i class="legend-swatch legend-green"></i>Green line: engaged app sessions</span>
            </div>
            <h3>Past seven days</h3>
            <div class="chart-wrap">
              <svg id="traffic-chart" viewBox="0 0 820 300" role="img" aria-label="Daily traffic and engagement trend" data-testid="chart-traffic"></svg>
            </div>
            <h3>Past month</h3>
            <div class="chart-wrap">
              <svg id="monthly-traffic-chart" viewBox="0 0 820 300" role="img" aria-label="Monthly app traffic and engagement trend" data-testid="chart-monthly-traffic"></svg>
            </div>
          </article>
          <article class="panel span-4" id="purchases" aria-labelledby="purchase-title">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Sales baseline</p>
                <h2 id="purchase-title">In-app purchases and revenue</h2>
              </div>
            </div>
            <div id="sales-summary" class="sales-summary" data-testid="section-sales-summary"></div>
            <div id="purchase-summary" class="purchase-summary" data-testid="section-purchases"></div>
            <div class="mini-chart-wrap">
              <svg id="purchase-chart" viewBox="0 0 420 160" role="img" aria-label="Daily in-app purchase trend"></svg>
            </div>
          </article>
        </section>

        <section class="panel" id="sections" aria-labelledby="sections-title">
          <div class="panel-header">
            <div>
              <p class="eyebrow">App navigation</p>
              <h2 id="sections-title">Traffic and time by app section</h2>
            </div>
            <span class="period-chip" id="section-usage-period">Latest</span>
          </div>
          <p id="section-usage-note" class="panel-note"></p>
          <div id="section-usage-list" class="section-usage-list" data-testid="section-app-sections"></div>
        </section>

        <section class="dashboard-grid three-col" id="live" aria-labelledby="live-title">
          <article class="panel span-4">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Live channels</p>
                <h2 id="live-title">Live TV performance</h2>
              </div>
            </div>
            <div id="live-summary" class="metric-list" data-testid="section-live"></div>
          </article>
          <article class="panel span-4" id="funnel" aria-labelledby="funnel-title">
            <div class="panel-header">
              <div>
                <p class="eyebrow">New app funnel</p>
                <h2 id="funnel-title">Installs to viewing</h2>
              </div>
            </div>
            <div id="funnel-list" class="bar-list" data-testid="section-funnel"></div>
          </article>
          <article class="panel span-4" id="ads" aria-labelledby="ads-title">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Monetization proxy</p>
                <h2 id="ads-title">Ad event signals</h2>
              </div>
            </div>
            <div id="ad-list" class="bar-list" data-testid="section-ads"></div>
          </article>
        </section>

        <section class="dashboard-grid two-col" id="viewership" aria-labelledby="viewership-title">
          <article class="panel span-6">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Feature usage</p>
                <h2 id="viewership-title">Live channel usage</h2>
              </div>
              <span class="period-chip" id="content-usage-period">Latest</span>
            </div>
            <div id="live-usage-cards" class="usage-card-grid" data-testid="section-live-usage-cards"></div>
            <h3>Top 10 Live channels</h3>
            <div id="live-channel-table" class="table-wrap title-table" data-testid="table-live-channels"></div>
            <h3>Live usage by platform</h3>
            <div id="live-platform-breakdown" class="platform-share-list" data-testid="section-live-platforms"></div>
            <h3>Live playback signals</h3>
            <div id="live-playback-list" class="bar-list" data-testid="section-live-playback"></div>
            <p id="live-usage-note" class="platform-note"></p>
          </article>
          <article class="panel span-6">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Feature usage</p>
                <h2>On Demand usage</h2>
              </div>
            </div>
            <div id="ondemand-usage-cards" class="usage-card-grid" data-testid="section-ondemand-usage-cards"></div>
            <h3>On Demand usage by platform</h3>
            <div id="ondemand-platform-breakdown" class="platform-share-list" data-testid="section-ondemand-platforms"></div>
            <p id="ondemand-usage-note" class="platform-note"></p>
          </article>
        </section>

        <section class="dashboard-grid two-col">
          <article class="panel span-6" id="platforms" aria-labelledby="platform-title">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Measured audience by surface</p>
                <h2 id="platform-title">Where users are coming from</h2>
              </div>
              <span class="period-chip" id="platform-mix-period">Latest</span>
            </div>
            <h3>Audience by GA4 stream</h3>
            <p id="surface-note" class="panel-note"></p>
            <div id="surface-table" class="table-wrap" data-testid="table-surface-breakout"></div>
            <h3>Audience by app, web, and connected TV platform</h3>
            <div id="platform-mix" class="platform-mix" data-testid="section-platform-mix"></div>
            <p id="platform-note" class="platform-note"></p>
            <h3>Average time by platform</h3>
            <p id="platform-time-note" class="panel-note"></p>
            <div id="platform-time-table" class="table-wrap" data-testid="table-platform-time"></div>
            <div id="platform-table" class="table-wrap" data-testid="table-platform"></div>
          </article>
          <article class="panel span-6" id="acquisition" aria-labelledby="acquisition-title">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Audience sources</p>
                <h2 id="acquisition-title">Top acquisition</h2>
              </div>
            </div>
            <div id="acquisition-table" class="table-wrap" data-testid="table-acquisition"></div>
          </article>
        </section>

        <section class="panel" id="roku-app" aria-labelledby="roku-app-title">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Roku app report</p>
              <h2 id="roku-app-title">Roku App Engagement</h2>
            </div>
            <span class="period-chip" id="roku-app-period">Latest</span>
          </div>
          <p id="roku-app-note" class="panel-note"></p>
          <div id="roku-app-summary" class="usage-card-grid roku-engagement-grid" data-testid="section-roku-app-engagement"></div>
        </section>

        <section class="panel" id="content" aria-labelledby="content-title">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Content and screens</p>
              <h2 id="content-title">Top pages and app screens</h2>
            </div>
          </div>
          <div id="content-table" class="table-wrap" data-testid="table-content"></div>
        </section>

        <section class="panel" id="titles" aria-labelledby="titles-title">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Viewing by program</p>
              <h2 id="titles-title">Top 50 watched shows and collections</h2>
            </div>
            <span class="period-chip" id="top-title-period">Latest</span>
          </div>
          <p id="top-title-note" class="panel-note"></p>
          <div id="top-titles-table" class="table-wrap title-table" data-testid="table-top-titles"></div>
        </section>

        <section class="panel" id="videos" aria-labelledby="videos-title">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Viewing by individual video</p>
              <h2 id="videos-title">Top 50 individual videos played</h2>
            </div>
            <span class="period-chip" id="top-video-period">Latest</span>
          </div>
          <p id="top-video-note" class="panel-note"></p>
          <div id="top-videos-table" class="table-wrap title-table" data-testid="table-top-videos"></div>
        </section>

        <section class="panel google-ads-panel" id="google-ads" aria-labelledby="google-ads-title" hidden>
          <div class="panel-header">
            <div>
              <p class="eyebrow">Paid acquisition efficiency</p>
              <h2 id="google-ads-title">Google Ads &mdash; Android App Campaign</h2>
            </div>
            <span class="period-chip" id="google-ads-period">Latest</span>
          </div>
          <p id="google-ads-note" class="panel-note"></p>
          <div class="google-ads-campaign" id="google-ads-campaign" data-testid="google-ads-campaign"></div>
          <div class="usage-card-grid google-ads-kpis" id="google-ads-kpis" data-testid="google-ads-kpis"></div>
          <div class="google-ads-split">
            <div>
              <h3>By device</h3>
              <div id="google-ads-devices" class="google-ads-device-list" data-testid="google-ads-devices"></div>
            </div>
            <div>
              <h3>Conversion actions</h3>
              <div id="google-ads-actions" class="google-ads-action-list" data-testid="google-ads-actions"></div>
            </div>
          </div>
          <p class="panel-note google-ads-context" id="google-ads-plain"></p>
        </section>

        <section class="panel gaps-panel" aria-labelledby="gaps-title">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Developer follow-up</p>
              <h2 id="gaps-title">Measurement gaps to close</h2>
            </div>
          </div>
          <ul id="gaps-list" class="gap-list" role="list" data-testid="list-gaps"></ul>
        </section>
      </main>
    </div>
<script>
window.ELECTRICNOW_DASHBOARD_DATA = {
  "generatedAt": "2026-05-22T15:23:38.861969+00:00",
  "property": "GA4 property 497892271",
  "sourceLabel": "Internal GA4 pull, property 497892271",
  "periods": {
    "launchBaseline": {
      "label": "Launch baseline",
      "range": "Apr 13-Apr 19, 2026",
      "start": "2026-04-13",
      "end": "2026-04-19"
    },
    "previousWeek": {
      "label": "Previous 7 complete days",
      "range": "May 4-May 10, 2026",
      "start": "2026-05-04",
      "end": "2026-05-10"
    },
    "baseline": {
      "label": "Previous 7 complete days",
      "range": "May 4-May 10, 2026",
      "start": "2026-05-04",
      "end": "2026-05-10"
    },
    "currentWeek": {
      "label": "Latest 7 complete days",
      "range": "May 11-May 17, 2026",
      "start": "2026-05-11",
      "end": "2026-05-17"
    },
    "weekToDate": {
      "label": "Latest 7 complete days",
      "range": "May 11-May 17, 2026",
      "start": "2026-05-11",
      "end": "2026-05-17"
    }
  },
  "periodTotals": {
    "launchBaseline": {
      "activeUsers": 8739.0,
      "newUsers": 8011.0,
      "sessions": 13421.0,
      "engagedSessions": 7960.0,
      "engagementRate": 59.310036509947096,
      "screenPageViews": 39326.0,
      "eventCount": 705015.0,
      "purchaseRevenue": 89.94999999999999
    },
    "previousWeek": {
      "activeUsers": 4659.0,
      "newUsers": 3016.0,
      "sessions": 9942.0,
      "engagedSessions": 8250.0,
      "engagementRate": 82.98129149064575,
      "screenPageViews": 28641.0,
      "eventCount": 910449.0,
      "purchaseRevenue": 0.0
    },
    "baseline": {
      "activeUsers": 4659.0,
      "newUsers": 3016.0,
      "sessions": 9942.0,
      "engagedSessions": 8250.0,
      "engagementRate": 82.98129149064575,
      "screenPageViews": 28641.0,
      "eventCount": 910449.0,
      "purchaseRevenue": 0.0
    },
    "currentWeek": {
      "activeUsers": 7902.0,
      "newUsers": 6260.0,
      "sessions": 14198.0,
      "engagedSessions": 11252.0,
      "engagementRate": 79.25059867586984,
      "screenPageViews": 31694.0,
      "eventCount": 979709.0,
      "purchaseRevenue": 29.99
    },
    "weekToDate": {
      "activeUsers": 7902.0,
      "newUsers": 6260.0,
      "sessions": 14198.0,
      "engagedSessions": 11252.0,
      "engagementRate": 79.25059867586984,
      "screenPageViews": 31694.0,
      "eventCount": 979709.0,
      "purchaseRevenue": 29.99
    }
  },
  "scorecards": [
    {
      "key": "platformActiveUsers",
      "label": "Platform active users",
      "baseline": 8709,
      "launchBaseline": 8709,
      "previousWeek": 4622,
      "current": 7792,
      "deltaPct": 68.58502812635223,
      "deltaVsLaunchPct": -10.529337466988173,
      "deltaVsPreviousPct": 68.58502812635223,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 active users excluding landing-page acquisition paths."
    },
    {
      "key": "platformSessions",
      "label": "Platform sessions",
      "baseline": 13316,
      "launchBaseline": 13316,
      "previousWeek": 9879,
      "current": 14024,
      "deltaPct": 41.95768802510376,
      "deltaVsLaunchPct": 5.316911985581255,
      "deltaVsPreviousPct": 41.95768802510376,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 sessions excluding landing-page acquisition paths."
    },
    {
      "key": "viewingEventUsers",
      "label": "Viewing event users",
      "baseline": 1155,
      "launchBaseline": 1155,
      "previousWeek": 1527,
      "current": 2504,
      "deltaPct": 63.981663392272424,
      "deltaVsLaunchPct": 116.79653679653678,
      "deltaVsPreviousPct": 63.981663392272424,
      "deltaType": "percent",
      "format": "number",
      "context": "Users who triggered on-demand video_start or Live play events."
    },
    {
      "key": "totalEngagementHours",
      "label": "Total engaged hours",
      "baseline": 3652.995,
      "launchBaseline": 3652.995,
      "previousWeek": 4522.9775,
      "current": 5369.4961111111115,
      "deltaPct": 18.715958925533272,
      "deltaVsLaunchPct": 46.988871080062026,
      "deltaVsPreviousPct": 18.715958925533272,
      "deltaType": "percent",
      "format": "number",
      "context": "Total GA4 engaged time converted to hours."
    },
    {
      "key": "avgEngagedMinutesPerUser",
      "label": "Avg time per user",
      "baseline": 25.072031571722718,
      "launchBaseline": 25.072031571722718,
      "previousWeek": 58.70184944841012,
      "current": 41.81850553824852,
      "deltaPct": -16.8833439101616,
      "deltaVsLaunchPct": 16.746473966525805,
      "deltaVsPreviousPct": -16.8833439101616,
      "deltaType": "minutes",
      "format": "minutes",
      "context": "Total engaged time divided by active users, excluding landing-page acquisition paths."
    },
    {
      "key": "landingPageUsers",
      "label": "Landing-page users",
      "baseline": 1045,
      "launchBaseline": 1045,
      "previousWeek": 526,
      "current": 811,
      "deltaPct": 54.18250950570342,
      "deltaVsLaunchPct": -22.392344497607656,
      "deltaVsPreviousPct": 54.18250950570342,
      "deltaType": "percent",
      "format": "number",
      "context": "Users reaching pages with “landing” in the path."
    },
    {
      "key": "devicesPageUsers",
      "label": "Devices-page users",
      "baseline": 2028,
      "launchBaseline": 2028,
      "previousWeek": 112,
      "current": 758,
      "deltaPct": 576.7857142857143,
      "deltaVsLaunchPct": -62.6232741617357,
      "deltaVsPreviousPct": 576.7857142857143,
      "deltaType": "percent",
      "format": "number",
      "context": "Users reaching pages with “devices” in the path."
    },
    {
      "key": "paidSocialUsers",
      "label": "Paid social users",
      "baseline": 4441,
      "launchBaseline": 4441,
      "previousWeek": 983,
      "current": 2803,
      "deltaPct": 185.147507629705,
      "deltaVsLaunchPct": -36.88358477820311,
      "deltaVsPreviousPct": 185.147507629705,
      "deltaType": "percent",
      "format": "number",
      "context": "Users from GA4 source/medium values containing Facebook, Instagram, or Meta."
    },
    {
      "key": "appActiveUsers",
      "label": "App stream active users",
      "baseline": 1547,
      "launchBaseline": 1547,
      "previousWeek": 2605,
      "current": 4912,
      "deltaPct": 88.56046065259116,
      "deltaVsLaunchPct": 217.51777634130573,
      "deltaVsPreviousPct": 88.56046065259116,
      "deltaType": "percent",
      "format": "number",
      "context": "People using the Apple/iOS or Android app streams; Apple TV is not yet split from the Apple/iOS stream."
    },
    {
      "key": "appSessions",
      "label": "App stream sessions",
      "baseline": 2889,
      "launchBaseline": 2889,
      "previousWeek": 4554,
      "current": 7752,
      "deltaPct": 70.2239789196311,
      "deltaVsLaunchPct": 168.32814122533748,
      "deltaVsPreviousPct": 70.2239789196311,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 sessions on the Apple/iOS and Android app streams."
    },
    {
      "key": "appEngagementRate",
      "label": "App stream engagement rate",
      "baseline": 80.96227068189685,
      "launchBaseline": 80.96227068189685,
      "previousWeek": 81.8620992534036,
      "current": 82.36584107327141,
      "deltaPct": 0.5037418198678125,
      "deltaVsLaunchPct": 1.4035703913745579,
      "deltaVsPreviousPct": 0.5037418198678125,
      "deltaType": "points",
      "format": "percent",
      "context": "Engaged app-stream sessions divided by app-stream sessions."
    },
    {
      "key": "viewingEventUsers",
      "label": "Viewing event users",
      "baseline": 1155,
      "launchBaseline": 1155,
      "previousWeek": 1527,
      "current": 2504,
      "deltaPct": 63.981663392272424,
      "deltaVsLaunchPct": 116.79653679653678,
      "deltaVsPreviousPct": 63.981663392272424,
      "deltaType": "percent",
      "format": "number",
      "context": "Users who triggered on-demand video_start or Live play events."
    },
    {
      "key": "onDemandStartUsers",
      "label": "On-demand start users",
      "baseline": 1069,
      "launchBaseline": 1069,
      "previousWeek": 1449,
      "current": 2395,
      "deltaPct": 65.28640441683919,
      "deltaVsLaunchPct": 124.04115996258184,
      "deltaVsPreviousPct": 65.28640441683919,
      "deltaType": "percent",
      "format": "number",
      "context": "Users who triggered video_start outside the Live screen."
    },
    {
      "key": "liveChannelViewers",
      "label": "Live channel viewers",
      "baseline": 121,
      "launchBaseline": 121,
      "previousWeek": 99,
      "current": 124,
      "deltaPct": 25.252525252525253,
      "deltaVsLaunchPct": 2.479338842975207,
      "deltaVsPreviousPct": 25.252525252525253,
      "deltaType": "percent",
      "format": "number",
      "context": "Users who triggered a Live play event."
    },
    {
      "key": "videoCompleteUsers",
      "label": "Video complete users",
      "baseline": 219,
      "launchBaseline": 219,
      "previousWeek": 181,
      "current": 263,
      "deltaPct": 45.30386740331492,
      "deltaVsLaunchPct": 20.091324200913242,
      "deltaVsPreviousPct": 45.30386740331492,
      "deltaType": "percent",
      "format": "number",
      "context": "Users who triggered video_complete."
    },
    {
      "key": "livePlayEvents",
      "label": "Live play events",
      "baseline": 3952,
      "launchBaseline": 3952,
      "previousWeek": 3991,
      "current": 4171,
      "deltaPct": 4.510147832623403,
      "deltaVsLaunchPct": 5.541497975708502,
      "deltaVsPreviousPct": 4.510147832623403,
      "deltaType": "percent",
      "format": "number",
      "context": "Total Live play events, not unique users."
    },
    {
      "key": "adRequestEvents",
      "label": "Ad request events",
      "baseline": 10589,
      "launchBaseline": 10589,
      "previousWeek": 25145,
      "current": 25034,
      "deltaPct": -0.441439650029827,
      "deltaVsLaunchPct": 136.41514779488148,
      "deltaVsPreviousPct": -0.441439650029827,
      "deltaType": "percent",
      "format": "number",
      "context": "Total ad request events generated by viewing activity."
    },
    {
      "key": "avgEngagedMinutesPerUser",
      "label": "Avg time per user",
      "baseline": 25.072031571722718,
      "launchBaseline": 25.072031571722718,
      "previousWeek": 58.70184944841012,
      "current": 41.81850553824852,
      "deltaPct": -16.8833439101616,
      "deltaVsLaunchPct": 16.746473966525805,
      "deltaVsPreviousPct": -16.8833439101616,
      "deltaType": "minutes",
      "format": "minutes",
      "context": "Total engaged time divided by active users."
    },
    {
      "key": "avgEngagedMinutesPerSession",
      "label": "Avg time per session",
      "baseline": 16.417955056179775,
      "launchBaseline": 16.417955056179775,
      "previousWeek": 27.304421974041652,
      "current": 23.878577428599666,
      "deltaPct": -3.4258445454419864,
      "deltaVsLaunchPct": 7.460622372419891,
      "deltaVsPreviousPct": -3.4258445454419864,
      "deltaType": "minutes",
      "format": "minutes",
      "context": "Total engaged time divided by sessions."
    },
    {
      "key": "totalEngagementHours",
      "label": "Total engaged hours",
      "baseline": 3652.995,
      "launchBaseline": 3652.995,
      "previousWeek": 4522.9775,
      "current": 5369.4961111111115,
      "deltaPct": 18.715958925533272,
      "deltaVsLaunchPct": 46.988871080062026,
      "deltaVsPreviousPct": 18.715958925533272,
      "deltaType": "percent",
      "format": "number",
      "context": "Total GA4 engaged time converted to hours."
    }
  ],
  "trend": [
    {
      "date": "Apr 13",
      "rawDate": "20260413",
      "activeUsers": 96,
      "newUsers": 39,
      "sessions": 197,
      "engagedSessions": 136,
      "screenPageViews": 150,
      "eventCount": 4690,
      "engagementRate": 69.03553299492386
    },
    {
      "date": "Apr 14",
      "rawDate": "20260414",
      "activeUsers": 84,
      "newUsers": 19,
      "sessions": 174,
      "engagedSessions": 114,
      "screenPageViews": 158,
      "eventCount": 4350,
      "engagementRate": 65.51724137931035
    },
    {
      "date": "Apr 15",
      "rawDate": "20260415",
      "activeUsers": 98,
      "newUsers": 28,
      "sessions": 180,
      "engagedSessions": 133,
      "screenPageViews": 298,
      "eventCount": 5106,
      "engagementRate": 73.88888888888889
    },
    {
      "date": "Apr 16",
      "rawDate": "20260416",
      "activeUsers": 569,
      "newUsers": 450,
      "sessions": 785,
      "engagedSessions": 653,
      "screenPageViews": 187,
      "eventCount": 14051,
      "engagementRate": 83.18471337579618
    },
    {
      "date": "Apr 17",
      "rawDate": "20260417",
      "activeUsers": 410,
      "newUsers": 272,
      "sessions": 594,
      "engagedSessions": 481,
      "screenPageViews": 219,
      "eventCount": 13657,
      "engagementRate": 80.97643097643098
    },
    {
      "date": "Apr 18",
      "rawDate": "20260418",
      "activeUsers": 335,
      "newUsers": 200,
      "sessions": 455,
      "engagedSessions": 374,
      "screenPageViews": 83,
      "eventCount": 11471,
      "engagementRate": 82.19780219780219
    },
    {
      "date": "Apr 19",
      "rawDate": "20260419",
      "activeUsers": 426,
      "newUsers": 270,
      "sessions": 584,
      "engagedSessions": 499,
      "screenPageViews": 256,
      "eventCount": 16071,
      "engagementRate": 85.44520547945206
    },
    {
      "date": "Apr 20",
      "rawDate": "20260420",
      "activeUsers": 367,
      "newUsers": 195,
      "sessions": 516,
      "engagedSessions": 438,
      "screenPageViews": 183,
      "eventCount": 11588,
      "engagementRate": 84.88372093023256
    },
    {
      "date": "Apr 21",
      "rawDate": "20260421",
      "activeUsers": 439,
      "newUsers": 273,
      "sessions": 599,
      "engagedSessions": 508,
      "screenPageViews": 101,
      "eventCount": 13597,
      "engagementRate": 84.80801335559266
    },
    {
      "date": "Apr 22",
      "rawDate": "20260422",
      "activeUsers": 484,
      "newUsers": 280,
      "sessions": 668,
      "engagedSessions": 569,
      "screenPageViews": 239,
      "eventCount": 22015,
      "engagementRate": 85.17964071856288
    },
    {
      "date": "Apr 23",
      "rawDate": "20260423",
      "activeUsers": 424,
      "newUsers": 212,
      "sessions": 611,
      "engagedSessions": 527,
      "screenPageViews": 101,
      "eventCount": 20023,
      "engagementRate": 86.2520458265139
    },
    {
      "date": "Apr 24",
      "rawDate": "20260424",
      "activeUsers": 566,
      "newUsers": 356,
      "sessions": 756,
      "engagedSessions": 647,
      "screenPageViews": 219,
      "eventCount": 23368,
      "engagementRate": 85.58201058201058
    },
    {
      "date": "Apr 25",
      "rawDate": "20260425",
      "activeUsers": 500,
      "newUsers": 307,
      "sessions": 664,
      "engagedSessions": 568,
      "screenPageViews": 246,
      "eventCount": 21547,
      "engagementRate": 85.54216867469879
    },
    {
      "date": "Apr 26",
      "rawDate": "20260426",
      "activeUsers": 584,
      "newUsers": 370,
      "sessions": 775,
      "engagedSessions": 674,
      "screenPageViews": 235,
      "eventCount": 26001,
      "engagementRate": 86.96774193548387
    },
    {
      "date": "Apr 27",
      "rawDate": "20260427",
      "activeUsers": 484,
      "newUsers": 257,
      "sessions": 640,
      "engagedSessions": 550,
      "screenPageViews": 611,
      "eventCount": 20429,
      "engagementRate": 85.9375
    },
    {
      "date": "Apr 28",
      "rawDate": "20260428",
      "activeUsers": 652,
      "newUsers": 416,
      "sessions": 825,
      "engagedSessions": 701,
      "screenPageViews": 170,
      "eventCount": 25485,
      "engagementRate": 84.96969696969697
    },
    {
      "date": "Apr 29",
      "rawDate": "20260429",
      "activeUsers": 746,
      "newUsers": 496,
      "sessions": 969,
      "engagedSessions": 819,
      "screenPageViews": 145,
      "eventCount": 27397,
      "engagementRate": 84.52012383900929
    },
    {
      "date": "Apr 30",
      "rawDate": "20260430",
      "activeUsers": 662,
      "newUsers": 375,
      "sessions": 871,
      "engagedSessions": 733,
      "screenPageViews": 117,
      "eventCount": 25914,
      "engagementRate": 84.15614236509758
    },
    {
      "date": "May 1",
      "rawDate": "20260501",
      "activeUsers": 508,
      "newUsers": 278,
      "sessions": 686,
      "engagedSessions": 563,
      "screenPageViews": 177,
      "eventCount": 15861,
      "engagementRate": 82.06997084548105
    },
    {
      "date": "May 2",
      "rawDate": "20260502",
      "activeUsers": 555,
      "newUsers": 294,
      "sessions": 734,
      "engagedSessions": 598,
      "screenPageViews": 160,
      "eventCount": 24839,
      "engagementRate": 81.47138964577657
    },
    {
      "date": "May 3",
      "rawDate": "20260503",
      "activeUsers": 568,
      "newUsers": 298,
      "sessions": 765,
      "engagedSessions": 636,
      "screenPageViews": 132,
      "eventCount": 19851,
      "engagementRate": 83.13725490196079
    },
    {
      "date": "May 4",
      "rawDate": "20260504",
      "activeUsers": 476,
      "newUsers": 230,
      "sessions": 652,
      "engagedSessions": 515,
      "screenPageViews": 54,
      "eventCount": 23040,
      "engagementRate": 78.9877300613497
    },
    {
      "date": "May 5",
      "rawDate": "20260505",
      "activeUsers": 499,
      "newUsers": 252,
      "sessions": 648,
      "engagedSessions": 545,
      "screenPageViews": 147,
      "eventCount": 18886,
      "engagementRate": 84.10493827160494
    },
    {
      "date": "May 6",
      "rawDate": "20260506",
      "activeUsers": 528,
      "newUsers": 263,
      "sessions": 698,
      "engagedSessions": 571,
      "screenPageViews": 57,
      "eventCount": 19244,
      "engagementRate": 81.80515759312321
    },
    {
      "date": "May 7",
      "rawDate": "20260507",
      "activeUsers": 496,
      "newUsers": 223,
      "sessions": 667,
      "engagedSessions": 549,
      "screenPageViews": 77,
      "eventCount": 20037,
      "engagementRate": 82.3088455772114
    },
    {
      "date": "May 8",
      "rawDate": "20260508",
      "activeUsers": 493,
      "newUsers": 228,
      "sessions": 659,
      "engagedSessions": 539,
      "screenPageViews": 104,
      "eventCount": 17938,
      "engagementRate": 81.79059180576631
    },
    {
      "date": "May 9",
      "rawDate": "20260509",
      "activeUsers": 470,
      "newUsers": 218,
      "sessions": 623,
      "engagedSessions": 520,
      "screenPageViews": 103,
      "eventCount": 16427,
      "engagementRate": 83.46709470304975
    },
    {
      "date": "May 10",
      "rawDate": "20260510",
      "activeUsers": 534,
      "newUsers": 263,
      "sessions": 742,
      "engagedSessions": 613,
      "screenPageViews": 141,
      "eventCount": 21776,
      "engagementRate": 82.61455525606469
    },
    {
      "date": "May 11",
      "rawDate": "20260511",
      "activeUsers": 477,
      "newUsers": 217,
      "sessions": 646,
      "engagedSessions": 519,
      "screenPageViews": 32,
      "eventCount": 18124,
      "engagementRate": 80.34055727554178
    },
    {
      "date": "May 12",
      "rawDate": "20260512",
      "activeUsers": 749,
      "newUsers": 485,
      "sessions": 954,
      "engagedSessions": 811,
      "screenPageViews": 76,
      "eventCount": 23033,
      "engagementRate": 85.01048218029351
    },
    {
      "date": "May 13",
      "rawDate": "20260513",
      "activeUsers": 920,
      "newUsers": 609,
      "sessions": 1150,
      "engagedSessions": 954,
      "screenPageViews": 85,
      "eventCount": 22185,
      "engagementRate": 82.95652173913044
    },
    {
      "date": "May 14",
      "rawDate": "20260514",
      "activeUsers": 999,
      "newUsers": 680,
      "sessions": 1265,
      "engagedSessions": 1073,
      "screenPageViews": 109,
      "eventCount": 26504,
      "engagementRate": 84.82213438735178
    },
    {
      "date": "May 15",
      "rawDate": "20260515",
      "activeUsers": 971,
      "newUsers": 632,
      "sessions": 1237,
      "engagedSessions": 1018,
      "screenPageViews": 58,
      "eventCount": 27718,
      "engagementRate": 82.29587712206953
    },
    {
      "date": "May 16",
      "rawDate": "20260516",
      "activeUsers": 978,
      "newUsers": 643,
      "sessions": 1274,
      "engagedSessions": 1066,
      "screenPageViews": 93,
      "eventCount": 24309,
      "engagementRate": 83.6734693877551
    },
    {
      "date": "May 17",
      "rawDate": "20260517",
      "activeUsers": 1061,
      "newUsers": 672,
      "sessions": 1417,
      "engagedSessions": 1148,
      "screenPageViews": 127,
      "eventCount": 29879,
      "engagementRate": 81.01623147494708
    }
  ],
  "eventCards": [
    {
      "event": "in_app_purchase",
      "label": "In-app purchases",
      "baseline": 0,
      "current": 1,
      "weekToDate": 1,
      "deltaPct": null,
      "activeUsersCurrent": 1
    },
    {
      "event": "application_install",
      "label": "Application installs",
      "baseline": 2629,
      "current": 4889,
      "weekToDate": 4889,
      "deltaPct": 85.96424496006087,
      "activeUsersCurrent": 4590
    },
    {
      "event": "first_open",
      "label": "First opens",
      "baseline": 1733,
      "current": 4023,
      "weekToDate": 4023,
      "deltaPct": 132.1407963069821,
      "activeUsersCurrent": 4021
    },
    {
      "event": "app_open",
      "label": "App opens",
      "baseline": 1469,
      "current": 1689,
      "weekToDate": 1689,
      "deltaPct": 14.976174268209666,
      "activeUsersCurrent": 381
    },
    {
      "event": "play",
      "label": "Plays",
      "baseline": 45704,
      "current": 50367,
      "weekToDate": 50367,
      "deltaPct": 10.202608086819534,
      "activeUsersCurrent": 2583
    },
    {
      "event": "video_start",
      "label": "Video starts",
      "baseline": 18518,
      "current": 21598,
      "weekToDate": 21598,
      "deltaPct": 16.632465709039852,
      "activeUsersCurrent": 2497
    },
    {
      "event": "video_play",
      "label": "Video plays",
      "baseline": 7931,
      "current": 7290,
      "weekToDate": 7290,
      "deltaPct": -8.08220905308284,
      "activeUsersCurrent": 278
    },
    {
      "event": "video_complete",
      "label": "Video completes",
      "baseline": 3261,
      "current": 3512,
      "weekToDate": 3512,
      "deltaPct": 7.697025452315241,
      "activeUsersCurrent": 263
    },
    {
      "event": "ads_request",
      "label": "Ad requests",
      "baseline": 25145,
      "current": 25034,
      "weekToDate": 25034,
      "deltaPct": -0.441439650029827,
      "activeUsersCurrent": 913
    },
    {
      "event": "ads_impression",
      "label": "Ad impressions",
      "baseline": 43072,
      "current": 35655,
      "weekToDate": 35655,
      "deltaPct": -17.220003714710252,
      "activeUsersCurrent": 875
    },
    {
      "event": "ads_loaded",
      "label": "Ads loaded",
      "baseline": 26461,
      "current": 19384,
      "weekToDate": 19384,
      "deltaPct": -26.745020974264012,
      "activeUsersCurrent": 1
    },
    {
      "event": "ads_started",
      "label": "Ads started",
      "baseline": 26462,
      "current": 19374,
      "weekToDate": 19374,
      "deltaPct": -26.78557932129091,
      "activeUsersCurrent": 1
    },
    {
      "event": "ads_complete",
      "label": "Ads complete",
      "baseline": 25825,
      "current": 18738,
      "weekToDate": 18738,
      "deltaPct": -27.44240077444337,
      "activeUsersCurrent": 1
    },
    {
      "event": "ad_request",
      "label": "Ad request",
      "baseline": 3320,
      "current": 3622,
      "weekToDate": 3622,
      "deltaPct": 9.096385542168676,
      "activeUsersCurrent": 83
    },
    {
      "event": "ad_complete",
      "label": "Ad complete",
      "baseline": 15571,
      "current": 14888,
      "weekToDate": 14888,
      "deltaPct": -4.386359257594246,
      "activeUsersCurrent": 666
    },
    {
      "event": "vmap_ad_request",
      "label": "VMAP ad request",
      "baseline": 2593,
      "current": 3630,
      "weekToDate": 3630,
      "deltaPct": 39.99228692634015,
      "activeUsersCurrent": 1030
    },
    {
      "event": "vmap_ad_loaded",
      "label": "VMAP ad loaded",
      "baseline": 13210,
      "current": 14203,
      "weekToDate": 14203,
      "deltaPct": 7.517032551097653,
      "activeUsersCurrent": 919
    },
    {
      "event": "click",
      "label": "Clicks",
      "baseline": 37,
      "current": 86,
      "weekToDate": 86,
      "deltaPct": 132.43243243243242,
      "activeUsersCurrent": 68
    }
  ],
  "purchaseFunnel": [
    {
      "event": "in_app_purchase",
      "label": "Purchase completed",
      "baseline": 5,
      "current": 1,
      "weekToDate": 1,
      "deltaPct": -80.0,
      "tracked": true,
      "note": "Launch baseline: 11 purchases / $159.89"
    },
    {
      "event": "go_ad_free_click",
      "label": "Go ad-free button clicked",
      "baseline": 0,
      "current": 0,
      "weekToDate": 0,
      "deltaPct": null,
      "tracked": false,
      "note": "Not found as a distinct GA4 event yet"
    },
    {
      "event": "go_ad_free_purchase",
      "label": "Go ad-free purchase",
      "baseline": 0,
      "current": 0,
      "weekToDate": 0,
      "deltaPct": null,
      "tracked": false,
      "note": "Not separated from in_app_purchase yet"
    },
    {
      "event": "video_purchase",
      "label": "Video purchase",
      "baseline": 0,
      "current": 0,
      "weekToDate": 0,
      "deltaPct": null,
      "tracked": false,
      "note": "Not found as a distinct GA4 event yet"
    },
    {
      "event": "collection_purchase",
      "label": "Collection purchase",
      "baseline": 0,
      "current": 0,
      "weekToDate": 0,
      "deltaPct": null,
      "tracked": false,
      "note": "Not found as a distinct GA4 event yet"
    }
  ],
  "purchaseTrend": [
    {
      "date": "Apr 13",
      "rawDate": "20260413",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 243,
      "first_open": 43,
      "app_open": 120,
      "play": 3103,
      "ads_impression": 3241
    },
    {
      "date": "Apr 14",
      "rawDate": "20260414",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 206,
      "first_open": 31,
      "app_open": 118,
      "play": 3019,
      "ads_impression": 1257
    },
    {
      "date": "Apr 15",
      "rawDate": "20260415",
      "purchaseRevenue": 14.99,
      "in_app_purchase": 1,
      "application_install": 241,
      "first_open": 33,
      "app_open": 148,
      "play": 3376,
      "ads_impression": 1785
    },
    {
      "date": "Apr 16",
      "rawDate": "20260416",
      "purchaseRevenue": 74.96,
      "in_app_purchase": 4,
      "application_install": 777,
      "first_open": 470,
      "app_open": 295,
      "play": 5409,
      "ads_impression": 2610
    },
    {
      "date": "Apr 17",
      "rawDate": "20260417",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 509,
      "first_open": 281,
      "app_open": 220,
      "play": 4568,
      "ads_impression": 3235
    },
    {
      "date": "Apr 18",
      "rawDate": "20260418",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 447,
      "first_open": 210,
      "app_open": 171,
      "play": 4912,
      "ads_impression": 3708
    },
    {
      "date": "Apr 19",
      "rawDate": "20260419",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 548,
      "first_open": 288,
      "app_open": 253,
      "play": 6614,
      "ads_impression": 4338
    },
    {
      "date": "Apr 20",
      "rawDate": "20260420",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 421,
      "first_open": 219,
      "app_open": 291,
      "play": 5204,
      "ads_impression": 3072
    },
    {
      "date": "Apr 21",
      "rawDate": "20260421",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 496,
      "first_open": 290,
      "app_open": 196,
      "play": 5050,
      "ads_impression": 3705
    },
    {
      "date": "Apr 22",
      "rawDate": "20260422",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 530,
      "first_open": 301,
      "app_open": 275,
      "play": 6927,
      "ads_impression": 7715
    },
    {
      "date": "Apr 23",
      "rawDate": "20260423",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 390,
      "first_open": 232,
      "app_open": 223,
      "play": 6170,
      "ads_impression": 7873
    },
    {
      "date": "Apr 24",
      "rawDate": "20260424",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 564,
      "first_open": 373,
      "app_open": 244,
      "play": 6914,
      "ads_impression": 7448
    },
    {
      "date": "Apr 25",
      "rawDate": "20260425",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 565,
      "first_open": 341,
      "app_open": 293,
      "play": 7676,
      "ads_impression": 9775
    },
    {
      "date": "Apr 26",
      "rawDate": "20260426",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 616,
      "first_open": 394,
      "app_open": 321,
      "play": 7483,
      "ads_impression": 6755
    },
    {
      "date": "Apr 27",
      "rawDate": "20260427",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 467,
      "first_open": 279,
      "app_open": 334,
      "play": 7291,
      "ads_impression": 7083
    },
    {
      "date": "Apr 28",
      "rawDate": "20260428",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 619,
      "first_open": 431,
      "app_open": 249,
      "play": 7851,
      "ads_impression": 7222
    },
    {
      "date": "Apr 29",
      "rawDate": "20260429",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 669,
      "first_open": 507,
      "app_open": 220,
      "play": 6956,
      "ads_impression": 6896
    },
    {
      "date": "Apr 30",
      "rawDate": "20260430",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 543,
      "first_open": 403,
      "app_open": 273,
      "play": 8035,
      "ads_impression": 8464
    },
    {
      "date": "May 1",
      "rawDate": "20260501",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 435,
      "first_open": 292,
      "app_open": 205,
      "play": 5452,
      "ads_impression": 7385
    },
    {
      "date": "May 2",
      "rawDate": "20260502",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 486,
      "first_open": 304,
      "app_open": 225,
      "play": 5268,
      "ads_impression": 6962
    },
    {
      "date": "May 3",
      "rawDate": "20260503",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 467,
      "first_open": 306,
      "app_open": 231,
      "play": 5865,
      "ads_impression": 6765
    },
    {
      "date": "May 4",
      "rawDate": "20260504",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 371,
      "first_open": 240,
      "app_open": 203,
      "play": 7407,
      "ads_impression": 7368
    },
    {
      "date": "May 5",
      "rawDate": "20260505",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 374,
      "first_open": 260,
      "app_open": 187,
      "play": 5578,
      "ads_impression": 6534
    },
    {
      "date": "May 6",
      "rawDate": "20260506",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 409,
      "first_open": 284,
      "app_open": 211,
      "play": 6158,
      "ads_impression": 6954
    },
    {
      "date": "May 7",
      "rawDate": "20260507",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 370,
      "first_open": 227,
      "app_open": 185,
      "play": 8621,
      "ads_impression": 5870
    },
    {
      "date": "May 8",
      "rawDate": "20260508",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 351,
      "first_open": 236,
      "app_open": 203,
      "play": 5300,
      "ads_impression": 5719
    },
    {
      "date": "May 9",
      "rawDate": "20260509",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 370,
      "first_open": 222,
      "app_open": 259,
      "play": 6274,
      "ads_impression": 5509
    },
    {
      "date": "May 10",
      "rawDate": "20260510",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 384,
      "first_open": 264,
      "app_open": 221,
      "play": 6366,
      "ads_impression": 5118
    },
    {
      "date": "May 11",
      "rawDate": "20260511",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 330,
      "first_open": 224,
      "app_open": 188,
      "play": 5729,
      "ads_impression": 5514
    },
    {
      "date": "May 12",
      "rawDate": "20260512",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 614,
      "first_open": 496,
      "app_open": 212,
      "play": 8651,
      "ads_impression": 5890
    },
    {
      "date": "May 13",
      "rawDate": "20260513",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 746,
      "first_open": 619,
      "app_open": 216,
      "play": 7493,
      "ads_impression": 4605
    },
    {
      "date": "May 14",
      "rawDate": "20260514",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 806,
      "first_open": 689,
      "app_open": 279,
      "play": 7058,
      "ads_impression": 5406
    },
    {
      "date": "May 15",
      "rawDate": "20260515",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 765,
      "first_open": 645,
      "app_open": 248,
      "play": 6903,
      "ads_impression": 5333
    },
    {
      "date": "May 16",
      "rawDate": "20260516",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 801,
      "first_open": 662,
      "app_open": 261,
      "play": 6923,
      "ads_impression": 4107
    },
    {
      "date": "May 17",
      "rawDate": "20260517",
      "purchaseRevenue": 29.99,
      "in_app_purchase": 1,
      "application_install": 827,
      "first_open": 688,
      "app_open": 285,
      "play": 7610,
      "ads_impression": 4800
    }
  ],
  "platforms": [
    {
      "platform": "web",
      "baseline": {
        "platform": "web",
        "activeUsers": 1911,
        "newUsers": 1283,
        "sessions": 5091,
        "engagedSessions": 4111,
        "screenPageViews": 26341,
        "eventCount": 747596,
        "engagementRate": 80.75034374386172
      },
      "current": {
        "platform": "web",
        "activeUsers": 2834,
        "newUsers": 2237,
        "sessions": 5929,
        "engagedSessions": 4364,
        "screenPageViews": 28977,
        "eventCount": 778578,
        "engagementRate": 73.60431776016192
      },
      "activeUsersDeltaPct": 48.29931972789115,
      "engagementRateCurrent": 73.60431776016192
    },
    {
      "platform": "iOS",
      "baseline": {
        "platform": "iOS",
        "activeUsers": 1293,
        "newUsers": 779,
        "sessions": 2324,
        "engagedSessions": 1991,
        "screenPageViews": 683,
        "eventCount": 74175,
        "engagementRate": 85.671256454389
      },
      "current": {
        "platform": "iOS",
        "activeUsers": 2088,
        "newUsers": 1526,
        "sessions": 3384,
        "engagedSessions": 2992,
        "screenPageViews": 580,
        "eventCount": 90012,
        "engagementRate": 88.4160756501182
      },
      "activeUsersDeltaPct": 61.48491879350348,
      "engagementRateCurrent": 88.4160756501182
    },
    {
      "platform": "Android",
      "baseline": {
        "platform": "Android",
        "activeUsers": 1456,
        "newUsers": 954,
        "sessions": 2597,
        "engagedSessions": 2092,
        "screenPageViews": 1617,
        "eventCount": 88678,
        "engagementRate": 80.55448594532153
      },
      "current": {
        "platform": "Android",
        "activeUsers": 3025,
        "newUsers": 2497,
        "sessions": 4830,
        "engagedSessions": 3907,
        "screenPageViews": 2137,
        "eventCount": 111119,
        "engagementRate": 80.89026915113871
      },
      "activeUsersDeltaPct": 107.76098901098901,
      "engagementRateCurrent": 80.89026915113871
    }
  ],
  "platformMix": {
    "period": "May 11-May 17, 2026",
    "metric": "Active users",
    "totalViewers": 7947,
    "note": "Viewer share uses GA4 active users grouped by stream and device data where available. People who use more than one platform may appear in more than one bucket. Apple TV is not separately broken out yet; Amazon/Fire TV is inferred from Amazon AFT smart-TV device models until the developer confirms a cleaner Fire TV label.",
    "groups": [
      {
        "platform": "Web",
        "category": "Web",
        "tracked": true,
        "activeUsers": 1727,
        "sharePct": 21.7,
        "sessions": 2485,
        "engagedSessions": 1579,
        "detail": "Browser and web playback from the electricnow-web GA4 stream."
      },
      {
        "platform": "Apple app stream",
        "category": "App",
        "tracked": true,
        "activeUsers": 2088,
        "sharePct": 26.3,
        "sessions": 3384,
        "engagedSessions": 2992,
        "detail": "iPhone and iPad app activity; Apple TV may also be included here until it is tagged separately."
      },
      {
        "platform": "Android mobile app",
        "category": "App",
        "tracked": true,
        "activeUsers": 2824,
        "sharePct": 35.5,
        "sessions": 4386,
        "engagedSessions": 3495,
        "detail": "Android phone/tablet activity from the ElectricNOW Android GA4 stream."
      },
      {
        "platform": "Roku",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 1107,
        "sharePct": 13.9,
        "sessions": 3349,
        "engagedSessions": 2751,
        "detail": "Roku activity from the electricnow-roku GA4 stream."
      },
      {
        "platform": "Amazon / Fire TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 97,
        "sharePct": 1.2,
        "sessions": 249,
        "engagedSessions": 232,
        "detail": "Likely Fire TV activity inferred from Amazon AFT smart-TV model codes."
      },
      {
        "platform": "Android TV / Google TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 104,
        "sharePct": 1.3,
        "sessions": 212,
        "engagedSessions": 195,
        "detail": "Android TV / Google TV stream activity, excluding likely Fire TV devices where GA4 exposes Amazon AFT models."
      },
      {
        "platform": "Apple TV",
        "category": "Connected TV",
        "tracked": false,
        "activeUsers": null,
        "sharePct": null,
        "sessions": null,
        "engagedSessions": null,
        "detail": "Not separately broken out yet. It is likely inside the Apple app stream until the developer sends a distinct Apple TV platform or stream."
      }
    ],
    "comingSoon": [
      "Samsung",
      "LG",
      "Vizio"
    ]
  },
  "acquisition": [
    {
      "sourceMedium": "(direct) / (none)",
      "activeUsers": 3395,
      "newUsers": 2494,
      "sessions": 5538,
      "engagedSessions": 4667,
      "eventCount": 159915,
      "engagementRate": 84.27230046948357
    },
    {
      "sourceMedium": "apps.facebook.com / (not set)",
      "activeUsers": 1848,
      "newUsers": 1719,
      "sessions": 2491,
      "engagedSessions": 1964,
      "eventCount": 36778,
      "engagementRate": 78.84383781613809
    },
    {
      "sourceMedium": "homescreen / (not set)",
      "activeUsers": 636,
      "newUsers": 199,
      "sessions": 2265,
      "engagedSessions": 1928,
      "eventCount": 454485,
      "engagementRate": 85.12141280353201
    },
    {
      "sourceMedium": "google / organic",
      "activeUsers": 311,
      "newUsers": 259,
      "sessions": 562,
      "engagedSessions": 500,
      "eventCount": 11940,
      "engagementRate": 88.96797153024912
    },
    {
      "sourceMedium": "facebook.com / referral",
      "activeUsers": 285,
      "newUsers": 284,
      "sessions": 286,
      "engagedSessions": 40,
      "eventCount": 1238,
      "engagementRate": 13.986013986013987
    },
    {
      "sourceMedium": "google-play / organic",
      "activeUsers": 259,
      "newUsers": 201,
      "sessions": 416,
      "engagedSessions": 353,
      "eventCount": 10982,
      "engagementRate": 84.85576923076923
    },
    {
      "sourceMedium": "lm.facebook.com / referral",
      "activeUsers": 256,
      "newUsers": 261,
      "sessions": 265,
      "engagedSessions": 70,
      "eventCount": 1177,
      "engagementRate": 26.41509433962264
    },
    {
      "sourceMedium": "google / cpc",
      "activeUsers": 218,
      "newUsers": 207,
      "sessions": 290,
      "engagedSessions": 266,
      "eventCount": 8429,
      "engagementRate": 91.72413793103448
    },
    {
      "sourceMedium": "apps.instagram.com / (not set)",
      "activeUsers": 187,
      "newUsers": 155,
      "sessions": 272,
      "engagedSessions": 210,
      "eventCount": 8210,
      "engagementRate": 77.20588235294117
    },
    {
      "sourceMedium": "l.facebook.com / referral",
      "activeUsers": 118,
      "newUsers": 110,
      "sessions": 143,
      "engagedSessions": 78,
      "eventCount": 2116,
      "engagementRate": 54.54545454545454
    },
    {
      "sourceMedium": "m.facebook.com / referral",
      "activeUsers": 101,
      "newUsers": 101,
      "sessions": 102,
      "engagedSessions": 22,
      "eventCount": 450,
      "engagementRate": 21.568627450980394
    },
    {
      "sourceMedium": "(not set)",
      "activeUsers": 85,
      "newUsers": 8,
      "sessions": 146,
      "engagedSessions": 0,
      "eventCount": 87783,
      "engagementRate": 0.0
    }
  ],
  "topPages": [
    {
      "path": "(not set)",
      "screen": "(not set)",
      "activeUsers": 6178,
      "views": 3370,
      "eventCount": 863441
    },
    {
      "path": "(not set)",
      "screen": "Splash",
      "activeUsers": 1364,
      "views": 3898,
      "eventCount": 4740
    },
    {
      "path": "(not set)",
      "screen": "Intro",
      "activeUsers": 1231,
      "views": 2979,
      "eventCount": 3161
    },
    {
      "path": "(not set)",
      "screen": "On Demand",
      "activeUsers": 792,
      "views": 3422,
      "eventCount": 3834
    },
    {
      "path": "/landing",
      "screen": "/landing",
      "activeUsers": 691,
      "views": 1312,
      "eventCount": 2116
    },
    {
      "path": "/",
      "screen": "/",
      "activeUsers": 648,
      "views": 1552,
      "eventCount": 4049
    },
    {
      "path": "(not set)",
      "screen": "PDP",
      "activeUsers": 331,
      "views": 3478,
      "eventCount": 3674
    },
    {
      "path": "/live-tv",
      "screen": "/live-tv",
      "activeUsers": 299,
      "views": 1235,
      "eventCount": 19123
    },
    {
      "path": "(not set)",
      "screen": "Category",
      "activeUsers": 132,
      "views": 380,
      "eventCount": 411
    },
    {
      "path": "(not set)",
      "screen": "Live",
      "activeUsers": 131,
      "views": 2054,
      "eventCount": 21627
    },
    {
      "path": "/devices",
      "screen": "/devices",
      "activeUsers": 89,
      "views": 112,
      "eventCount": 381
    },
    {
      "path": "/english",
      "screen": "/english",
      "activeUsers": 88,
      "views": 140,
      "eventCount": 199
    },
    {
      "path": "(not set)",
      "screen": "Player",
      "activeUsers": 82,
      "views": 2821,
      "eventCount": 20748
    },
    {
      "path": "(not set)",
      "screen": "Search",
      "activeUsers": 48,
      "views": 542,
      "eventCount": 563
    },
    {
      "path": "(not set)",
      "screen": "Settings",
      "activeUsers": 38,
      "views": 230,
      "eventCount": 263
    },
    {
      "path": "/watch/the-ark-2?_id=691698915572586b0a2328be",
      "screen": "/watch/the-ark-2?_id=691698915572586b0a2328be",
      "activeUsers": 32,
      "views": 55,
      "eventCount": 1011
    },
    {
      "path": "/watch/the-ark-2?_id=691698915572586b0a2328be?_id=691698915572586b0a2328be",
      "screen": "/watch/the-ark-2?_id=691698915572586b0a2328be?_id=691698915572586b0a2328be",
      "activeUsers": 32,
      "views": 55,
      "eventCount": 55
    },
    {
      "path": "(not set)",
      "screen": "Mylist",
      "activeUsers": 30,
      "views": 325,
      "eventCount": 325
    },
    {
      "path": "/?channel=the-ark-2",
      "screen": "/?channel=the-ark-2",
      "activeUsers": 29,
      "views": 66,
      "eventCount": 87
    },
    {
      "path": "/profiles?after_selection=%2F",
      "screen": "/profiles?after_selection=%2F",
      "activeUsers": 26,
      "views": 36,
      "eventCount": 43
    }
  ],
  "liveTv": {
    "baseline": {
      "activeUsers": 381,
      "sessions": 1803,
      "engagedSessions": 1688,
      "screenPageViews": 3474,
      "eventCount": 47309
    },
    "current": {
      "activeUsers": 432,
      "sessions": 1783,
      "engagedSessions": 1704,
      "screenPageViews": 3446,
      "eventCount": 45098
    },
    "deltas": {
      "activeUsers": 13.385826771653544,
      "sessions": -1.1092623405435387,
      "engagedSessions": 0.9478672985781991,
      "screenPageViews": -0.8059873344847437,
      "eventCount": -4.673529349595214
    },
    "engagementRateBaseline": 93.62174154187464,
    "engagementRateCurrent": 95.56926528323051,
    "weekToDate": {
      "activeUsers": 432,
      "sessions": 1783,
      "engagedSessions": 1704,
      "screenPageViews": 3446,
      "eventCount": 45098
    },
    "engagementRateWeekToDate": 95.56926528323051
  },
  "plainEnglishInsights": [
    "Overall, ElectricNOW’s latest measured week shows that measured platform audience grew 68.6%, viewing grew 78.9%, and time spent softened by 16.9 minutes per active user. The short version is that we are separating real platform use from landing-page acquisition, so this read focuses first on whether people are using and watching ElectricNOW, then explains traffic sources, sales, and tracking caveats below.",
    "Measured ElectricNOW platform audience was 7.8K GA4 active users excluding landing-page acquisition paths, up 68.6% from the previous week.",
    "Acquisition traffic is tracked separately: property-wide GA4 active users including landing-page traffic were 7.9K, up 69.6% from the previous week; landing-page users were up 54.2%.",
    "Measured Apple/Android app-stream usage improved: 4.9K active users this week, up 217.5% from launch baseline and up 88.6% from the previous week; Apple TV is not yet split out from the Apple/iOS stream.",
    "Viewing also improved: 2.1K app users watched on-demand or Live content, up 187.3% from launch baseline and up 78.9% from the previous week.",
    "Roughly 42.7% of app users watched something, compared with 47.2% during launch week and 45.0% the prior week, so the viewing conversion rate is steady while the audience is growing.",
    "On-demand is carrying most of the viewing growth with 2.1K starter users; Live remains meaningful at 40 viewers, down 13.0% from launch baseline and up 17.6% from the previous week.",
    "Actual viewing behavior is measured separately: 2.5K users triggered a viewing event, up 64.0% from the previous week; video-complete users were up 45.3%.",
    "Average time on platform is 41.8 engaged minutes per active user across all GA4-tracked platforms, up 16.7 minutes from launch week and down 16.9 minutes from the previous week.",
    "Read this as two different measures: average time per user shows total weekly attention per person, while average time per session shows how long each individual visit or viewing session lasted.",
    "Visible platform sales now combine Stripe, Roku, and the manual Apple App Store snapshot: 5 purchases and $31.95 in the latest 7 complete days, plus 0 purchases and $0.00 so far this week; this still excludes Google Play purchases. The Apple App Store contribution is currently a manual snapshot of $69.96 gross, or about $48.97 after Apple’s 30% platform fee.",
    "Top watched programs in GA4 this week include ElectricNOW, The Ark, Leverage, Leverage: Redemption, and Almost Paradise.",
    "The most watched Live channels generated 4.2K Live play events, led by ElectricNOW, ElectricNOW en Español, ToonOvation, Kung Fu Movies, and Daily Flash.",
    "GA4, Stripe, Roku, and the manual Apple App Store snapshot should still be reconciled with Google Play, Amagi, ad-server, YouTube, Meta, and final app-store reporting before making final business decisions."
  ],
  "instrumentationGaps": [
    "No separate GA4 event found for go_ad_free_click yet.",
    "No separate GA4 event found for video_purchase yet.",
    "No separate GA4 event found for collection_purchase yet.",
    "Stripe is now one visible sales source in the dashboard; total sales still require Apple App Store and Google Play reporting, and GA4 purchase events still need to be split into go-ad-free, individual video, and collection purchase actions.",
    "Live TV should be reconciled with Amagi and ad-server reporting."
  ],
  "salesSummary": {
    "sourceLabel": "Visible platform sales",
    "sourceDetail": "This combines Stripe-visible payments, Roku-visible sales from the latest Roku email report, and a manual Apple App Store screenshot snapshot. It is still not total ElectricNOW sales because Google Play purchases are handled separately and Apple is not yet API-connected.",
    "stripe": {
      "sourceLabel": "Stripe-visible payments",
      "sourceDetail": "Stripe-visible sales are shown from the last successful pull. Latest live Stripe refresh failed: {\"error\": \"auth_required\", \"auth_url\": \"https://www.perplexity.ai/rest/connector-service/auth/oauth-redirect?source_id=stripe\", \"source_id\": \"stripe\"}\n",
      "baselineWindow": {
        "label": "Stripe launch baseline",
        "range": "Apr 13-Apr 19, 2026",
        "purchases": 4,
        "purchaseRevenue": 54.96,
        "revenuePerPurchase": 13.74,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "detail": "Stripe shows 4 visible payments totaling $54.96 during the prior complete week."
      },
      "yearToDate": {
        "label": "Sales this year",
        "range": "Jan 1-May 14, 2026",
        "purchases": 11,
        "purchaseRevenue": 159.89,
        "revenuePerPurchase": 14.54,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": [
          {
            "date": "May 6",
            "createdAt": "2026-05-06 01:02 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          },
          {
            "date": "Apr 26",
            "createdAt": "2026-04-26 20:13 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          },
          {
            "date": "Apr 24",
            "createdAt": "2026-04-24 15:38 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          },
          {
            "date": "Apr 22",
            "createdAt": "2026-04-22 09:46 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          },
          {
            "date": "Apr 22",
            "createdAt": "2026-04-22 02:25 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          },
          {
            "date": "Apr 20",
            "createdAt": "2026-04-20 18:31 PDT",
            "amount": 14.99,
            "description": "Anonymous Customer - Purchase this title: Signup payment"
          },
          {
            "date": "Apr 18",
            "createdAt": "2026-04-18 17:51 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          },
          {
            "date": "Apr 16",
            "createdAt": "2026-04-16 18:58 PDT",
            "amount": 9.99,
            "description": "Customer User - Purchase Bundle 10: Signup payment"
          }
        ]
      },
      "monthToDate": {
        "label": "Sales this month",
        "range": "May 1-May 14, 2026",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "revenuePerPurchase": 14.99,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": [
          {
            "date": "May 6",
            "createdAt": "2026-05-06 01:02 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          }
        ]
      },
      "lastWeek": {
        "label": "Sales last week",
        "range": "May 4-May 10, 2026",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "revenuePerPurchase": 14.99,
        "deltaPurchasesPct": -75.0,
        "deltaRevenuePct": -72.72561863173217,
        "payments": [
          {
            "date": "May 6",
            "createdAt": "2026-05-06 01:02 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          }
        ]
      },
      "thisWeek": {
        "label": "Sales this week",
        "range": "May 11-May 14, 2026",
        "purchases": 0,
        "purchaseRevenue": 0,
        "revenuePerPurchase": 0,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": []
      },
      "currentCompleteWeek": {
        "label": "Sales last week",
        "range": "May 4-May 10, 2026",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "revenuePerPurchase": 14.99,
        "deltaPurchasesPct": -75.0,
        "deltaRevenuePct": -72.72561863173217,
        "payments": [
          {
            "date": "May 6",
            "createdAt": "2026-05-06 01:02 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          }
        ]
      },
      "weekToDate": {
        "label": "Sales this week",
        "range": "May 11-May 14, 2026",
        "purchases": 0,
        "purchaseRevenue": 0,
        "revenuePerPurchase": 0,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": []
      },
      "recent12Days": {
        "label": "Stripe last 12 days",
        "range": "May 3-May 14, 2026",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "revenuePerPurchase": 14.99,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": [
          {
            "date": "May 6",
            "createdAt": "2026-05-06 01:02 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          }
        ]
      },
      "lifetimeObserved": {
        "range": "Through May 14, 2026 pull",
        "purchases": 11,
        "purchaseRevenue": 159.89,
        "revenuePerPurchase": 14.54
      },
      "mix": [
        {
          "label": "Title purchases",
          "purchases": 10,
          "purchaseRevenue": 149.9
        },
        {
          "label": "Bundle purchases",
          "purchases": 1,
          "purchaseRevenue": 9.99
        },
        {
          "label": "Subscriptions",
          "purchases": 0,
          "purchaseRevenue": 0
        }
      ],
      "recentPayments": [
        {
          "id": "pi_3TU0PpLG0Cw1zW4e1xA1B4CB",
          "date": "May 6",
          "createdAt": "2026-05-06 01:02 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment"
        },
        {
          "id": "pi_3TQfbqLG0Cw1zW4e0xCVetD1",
          "date": "Apr 26",
          "createdAt": "2026-04-26 20:13 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment"
        },
        {
          "id": "pi_3TPsMQLG0Cw1zW4e1KupKuAF",
          "date": "Apr 24",
          "createdAt": "2026-04-24 15:38 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment"
        },
        {
          "id": "pi_3TP3uxLG0Cw1zW4e0LSedyYu",
          "date": "Apr 22",
          "createdAt": "2026-04-22 09:46 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment"
        },
        {
          "id": "pi_3TOx2ZLG0Cw1zW4e1W7SJZXg",
          "date": "Apr 22",
          "createdAt": "2026-04-22 02:25 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment"
        },
        {
          "id": "pi_3TOTAALG0Cw1zW4e0dIkMbV1",
          "date": "Apr 20",
          "createdAt": "2026-04-20 18:31 PDT",
          "amount": 14.99,
          "description": "Anonymous Customer - Purchase this title: Signup payment"
        },
        {
          "id": "pi_3TNjaVLG0Cw1zW4e2up0QKdp",
          "date": "Apr 18",
          "createdAt": "2026-04-18 17:51 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment"
        },
        {
          "id": "pi_3TN1fjLG0Cw1zW4e1efwz7Hc",
          "date": "Apr 16",
          "createdAt": "2026-04-16 18:58 PDT",
          "amount": 9.99,
          "description": "Customer User - Purchase Bundle 10: Signup payment"
        },
        {
          "id": "pi_3TMxdiLG0Cw1zW4e0ApnxCmW",
          "date": "Apr 16",
          "createdAt": "2026-04-16 14:39 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment"
        },
        {
          "id": "pi_3TMxZHLG0Cw1zW4e0RXKnWOb",
          "date": "Apr 16",
          "createdAt": "2026-04-16 14:35 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment"
        },
        {
          "id": "pi_3TKta2LG0Cw1zW4e26XmyZs9",
          "date": "Apr 10",
          "createdAt": "2026-04-10 21:55 PDT",
          "amount": 14.99,
          "description": "pi_3TKta2LG0Cw1zW4e26XmyZs9"
        }
      ],
      "dailyTrend": [
        {
          "date": "Apr 13",
          "rawDate": "20260413",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "Apr 14",
          "rawDate": "20260414",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "Apr 15",
          "rawDate": "20260415",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "Apr 16",
          "rawDate": "20260416",
          "purchases": 3,
          "purchaseRevenue": 39.97
        },
        {
          "date": "Apr 17",
          "rawDate": "20260417",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "Apr 18",
          "rawDate": "20260418",
          "purchases": 1,
          "purchaseRevenue": 14.99
        },
        {
          "date": "Apr 19",
          "rawDate": "20260419",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "Apr 20",
          "rawDate": "20260420",
          "purchases": 1,
          "purchaseRevenue": 14.99
        },
        {
          "date": "Apr 21",
          "rawDate": "20260421",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "Apr 22",
          "rawDate": "20260422",
          "purchases": 2,
          "purchaseRevenue": 29.98
        },
        {
          "date": "Apr 23",
          "rawDate": "20260423",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "Apr 24",
          "rawDate": "20260424",
          "purchases": 1,
          "purchaseRevenue": 14.99
        },
        {
          "date": "Apr 25",
          "rawDate": "20260425",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "Apr 26",
          "rawDate": "20260426",
          "purchases": 1,
          "purchaseRevenue": 14.99
        },
        {
          "date": "Apr 27",
          "rawDate": "20260427",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "Apr 28",
          "rawDate": "20260428",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "Apr 29",
          "rawDate": "20260429",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "Apr 30",
          "rawDate": "20260430",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 1",
          "rawDate": "20260501",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 2",
          "rawDate": "20260502",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 3",
          "rawDate": "20260503",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 4",
          "rawDate": "20260504",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 5",
          "rawDate": "20260505",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 6",
          "rawDate": "20260506",
          "purchases": 1,
          "purchaseRevenue": 14.99
        },
        {
          "date": "May 7",
          "rawDate": "20260507",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 8",
          "rawDate": "20260508",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 9",
          "rawDate": "20260509",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 10",
          "rawDate": "20260510",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 11",
          "rawDate": "20260511",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 12",
          "rawDate": "20260512",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 13",
          "rawDate": "20260513",
          "purchases": 0,
          "purchaseRevenue": 0
        },
        {
          "date": "May 14",
          "rawDate": "20260514",
          "purchases": 0,
          "purchaseRevenue": 0
        }
      ],
      "note": "Stripe-visible sales show 11 payments and $159.89 year to date, 1 payment and $14.99 this month, 1 payment and $14.99 last week, and 0 payments and $0.00 this week. Add Apple App Store and Google Play reports before treating this as total sales."
    },
    "roku": {
      "sourceLabel": "Roku-visible sales",
      "sourceDetail": "Roku-visible sales come from the latest emailed Roku Sales Activity Report PDF. These are not total ElectricNOW sales.",
      "reportEmailDate": "2026-05-18T15:10:51+00:00",
      "reportGenerated": "May 18, 2026 at 8:10 AM PDT",
      "baselineWindow": {
        "label": "Roku launch baseline",
        "range": "Apr 13-Apr 19, 2026",
        "purchases": 5,
        "purchaseRevenue": 74.95,
        "developerRevShare": 59.95,
        "revenuePerPurchase": 14.99,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null
      },
      "yearToDate": {
        "label": "Roku sales this year",
        "range": "Jan 1-May 18, 2026",
        "purchases": 12,
        "purchaseRevenue": 176.88,
        "developerRevShare": 141.48,
        "revenuePerPurchase": 14.74,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": [
          {
            "date": "May 16",
            "createdAt": "2026-05-16",
            "amount": 19.99,
            "developerRevShare": 15.99,
            "description": "Roku - Purchase Bundle 20",
            "source": "Roku"
          },
          {
            "date": "May 14",
            "createdAt": "2026-05-14",
            "amount": 2.99,
            "developerRevShare": 2.39,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          },
          {
            "date": "May 13",
            "createdAt": "2026-05-13",
            "amount": 2.99,
            "developerRevShare": 2.39,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          },
          {
            "date": "May 12",
            "createdAt": "2026-05-12",
            "amount": 5.98,
            "developerRevShare": 4.78,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          },
          {
            "date": "May 4",
            "createdAt": "2026-05-04",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
          {
            "date": "Apr 22",
            "createdAt": "2026-04-22",
            "amount": 54.99,
            "developerRevShare": 43.99,
            "description": "Roku - Purchase Bundle 55",
            "source": "Roku"
          },
          {
            "date": "Apr 19",
            "createdAt": "2026-04-19",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
          {
            "date": "Apr 17",
            "createdAt": "2026-04-17",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          }
        ]
      },
      "monthToDate": {
        "label": "Roku sales this month",
        "range": "May 1-May 18, 2026",
        "purchases": 6,
        "purchaseRevenue": 46.94,
        "developerRevShare": 37.54,
        "revenuePerPurchase": 7.82,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": [
          {
            "date": "May 16",
            "createdAt": "2026-05-16",
            "amount": 19.99,
            "developerRevShare": 15.99,
            "description": "Roku - Purchase Bundle 20",
            "source": "Roku"
          },
          {
            "date": "May 14",
            "createdAt": "2026-05-14",
            "amount": 2.99,
            "developerRevShare": 2.39,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          },
          {
            "date": "May 13",
            "createdAt": "2026-05-13",
            "amount": 2.99,
            "developerRevShare": 2.39,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          },
          {
            "date": "May 12",
            "createdAt": "2026-05-12",
            "amount": 5.98,
            "developerRevShare": 4.78,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          },
          {
            "date": "May 4",
            "createdAt": "2026-05-04",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          }
        ]
      },
      "lastWeek": {
        "label": "Roku sales last week",
        "range": "May 11-May 17, 2026",
        "purchases": 5,
        "purchaseRevenue": 31.95,
        "developerRevShare": 25.55,
        "revenuePerPurchase": 6.39,
        "deltaPurchasesPct": 0.0,
        "deltaRevenuePct": -57.37158105403603,
        "payments": [
          {
            "date": "May 16",
            "createdAt": "2026-05-16",
            "amount": 19.99,
            "developerRevShare": 15.99,
            "description": "Roku - Purchase Bundle 20",
            "source": "Roku"
          },
          {
            "date": "May 14",
            "createdAt": "2026-05-14",
            "amount": 2.99,
            "developerRevShare": 2.39,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          },
          {
            "date": "May 13",
            "createdAt": "2026-05-13",
            "amount": 2.99,
            "developerRevShare": 2.39,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          },
          {
            "date": "May 12",
            "createdAt": "2026-05-12",
            "amount": 5.98,
            "developerRevShare": 4.78,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          }
        ]
      },
      "thisWeek": {
        "label": "Roku sales this week",
        "range": "May 18-May 18, 2026",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0,
        "revenuePerPurchase": 0,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": []
      },
      "currentCompleteWeek": {
        "label": "Roku sales last week",
        "range": "May 11-May 17, 2026",
        "purchases": 5,
        "purchaseRevenue": 31.95,
        "developerRevShare": 25.55,
        "revenuePerPurchase": 6.39,
        "deltaPurchasesPct": 0.0,
        "deltaRevenuePct": -57.37158105403603,
        "payments": [
          {
            "date": "May 16",
            "createdAt": "2026-05-16",
            "amount": 19.99,
            "developerRevShare": 15.99,
            "description": "Roku - Purchase Bundle 20",
            "source": "Roku"
          },
          {
            "date": "May 14",
            "createdAt": "2026-05-14",
            "amount": 2.99,
            "developerRevShare": 2.39,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          },
          {
            "date": "May 13",
            "createdAt": "2026-05-13",
            "amount": 2.99,
            "developerRevShare": 2.39,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          },
          {
            "date": "May 12",
            "createdAt": "2026-05-12",
            "amount": 5.98,
            "developerRevShare": 4.78,
            "description": "Roku - Purchase HD 3",
            "source": "Roku"
          }
        ]
      },
      "weekToDate": {
        "label": "Roku sales this week",
        "range": "May 18-May 18, 2026",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0,
        "revenuePerPurchase": 0,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": []
      },
      "lifetimeObserved": {
        "range": "Through May 18, 2026 pull",
        "purchases": 12,
        "purchaseRevenue": 176.88,
        "developerRevShare": 141.48
      },
      "mix": [
        {
          "label": "Roku title purchases",
          "purchases": 10,
          "purchaseRevenue": 101.9
        },
        {
          "label": "Roku bundle purchases",
          "purchases": 2,
          "purchaseRevenue": 74.98
        }
      ],
      "recentPayments": [
        {
          "date": "May 16",
          "createdAt": "2026-05-16",
          "amount": 19.99,
          "developerRevShare": 15.99,
          "description": "Roku - Purchase Bundle 20",
          "source": "Roku"
        },
        {
          "date": "May 14",
          "createdAt": "2026-05-14",
          "amount": 2.99,
          "developerRevShare": 2.39,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 13",
          "createdAt": "2026-05-13",
          "amount": 2.99,
          "developerRevShare": 2.39,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 12",
          "createdAt": "2026-05-12",
          "amount": 5.98,
          "developerRevShare": 4.78,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 4",
          "createdAt": "2026-05-04",
          "amount": 14.99,
          "developerRevShare": 11.99,
          "description": "Roku - Purchase HD 15",
          "source": "Roku"
        },
        {
          "date": "Apr 22",
          "createdAt": "2026-04-22",
          "amount": 54.99,
          "developerRevShare": 43.99,
          "description": "Roku - Purchase Bundle 55",
          "source": "Roku"
        },
        {
          "date": "Apr 19",
          "createdAt": "2026-04-19",
          "amount": 14.99,
          "developerRevShare": 11.99,
          "description": "Roku - Purchase HD 15",
          "source": "Roku"
        },
        {
          "date": "Apr 17",
          "createdAt": "2026-04-17",
          "amount": 14.99,
          "developerRevShare": 11.99,
          "description": "Roku - Purchase HD 15",
          "source": "Roku"
        },
        {
          "date": "Apr 16",
          "createdAt": "2026-04-16",
          "amount": 14.99,
          "developerRevShare": 11.99,
          "description": "Roku - Purchase HD 15",
          "source": "Roku"
        },
        {
          "date": "Apr 14",
          "createdAt": "2026-04-14",
          "amount": 14.99,
          "developerRevShare": 11.99,
          "description": "Roku - Purchase HD 15",
          "source": "Roku"
        },
        {
          "date": "Apr 13",
          "createdAt": "2026-04-13",
          "amount": 14.99,
          "developerRevShare": 11.99,
          "description": "Roku - Purchase HD 15",
          "source": "Roku"
        }
      ],
      "dailyTrend": [
        {
          "date": "Apr 13",
          "rawDate": "20260413",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 11.99
        },
        {
          "date": "Apr 14",
          "rawDate": "20260414",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 11.99
        },
        {
          "date": "Apr 15",
          "rawDate": "20260415",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 16",
          "rawDate": "20260416",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 11.99
        },
        {
          "date": "Apr 17",
          "rawDate": "20260417",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 11.99
        },
        {
          "date": "Apr 18",
          "rawDate": "20260418",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 19",
          "rawDate": "20260419",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 11.99
        },
        {
          "date": "Apr 20",
          "rawDate": "20260420",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 21",
          "rawDate": "20260421",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 22",
          "rawDate": "20260422",
          "purchases": 1,
          "purchaseRevenue": 54.99,
          "developerRevShare": 43.99
        },
        {
          "date": "Apr 23",
          "rawDate": "20260423",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 24",
          "rawDate": "20260424",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 25",
          "rawDate": "20260425",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 26",
          "rawDate": "20260426",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 27",
          "rawDate": "20260427",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 28",
          "rawDate": "20260428",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 29",
          "rawDate": "20260429",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 30",
          "rawDate": "20260430",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 1",
          "rawDate": "20260501",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 2",
          "rawDate": "20260502",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 3",
          "rawDate": "20260503",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 4",
          "rawDate": "20260504",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 11.99
        },
        {
          "date": "May 5",
          "rawDate": "20260505",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 6",
          "rawDate": "20260506",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 7",
          "rawDate": "20260507",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 8",
          "rawDate": "20260508",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 9",
          "rawDate": "20260509",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 10",
          "rawDate": "20260510",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 11",
          "rawDate": "20260511",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 12",
          "rawDate": "20260512",
          "purchases": 2,
          "purchaseRevenue": 5.98,
          "developerRevShare": 4.78
        },
        {
          "date": "May 13",
          "rawDate": "20260513",
          "purchases": 1,
          "purchaseRevenue": 2.99,
          "developerRevShare": 2.39
        },
        {
          "date": "May 14",
          "rawDate": "20260514",
          "purchases": 1,
          "purchaseRevenue": 2.99,
          "developerRevShare": 2.39
        },
        {
          "date": "May 15",
          "rawDate": "20260515",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 16",
          "rawDate": "20260516",
          "purchases": 1,
          "purchaseRevenue": 19.99,
          "developerRevShare": 15.99
        },
        {
          "date": "May 17",
          "rawDate": "20260517",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        }
      ],
      "note": "Roku report shows 12 purchases and $176.88 gross sales year to date, with $141.48 developer rev share."
    },
    "apple": {
      "sourceLabel": "Apple App Store manual snapshot",
      "sourceDetail": "Apple App Store in-app purchase snapshots manually entered from App Store Connect screenshots. Gross customer sales are shown; estimated net assumes Apple keeps 30% before remittance. Latest manual snapshot added May 12-May 18, 2026 sales for Purchase Bundle 30 and Purchase HD 15.",
      "isManualSnapshot": true,
      "snapshotRange": "Apr 6-May 18, 2026",
      "platformFeePct": 30,
      "estimatedNetPct": 70,
      "baselineWindow": {
        "label": "Apple launch baseline",
        "range": "Apr 13-Apr 19, 2026",
        "purchases": 2,
        "purchaseRevenue": 29.98,
        "developerRevShare": 20.99,
        "revenuePerPurchase": 14.99,
        "payments": [
          {
            "date": "Apr 16",
            "amount": 29.98,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          }
        ]
      },
      "lastWeek": {
        "label": "Apple sales last week",
        "range": "May 11-May 17, 2026",
        "purchases": 1,
        "purchaseRevenue": 29.99,
        "developerRevShare": 20.99,
        "revenuePerPurchase": 29.99,
        "payments": [
          {
            "date": "May 13",
            "rawDate": "20260513",
            "amount": 29.99,
            "count": 1,
            "description": "Apple App Store - Purchase Bundle 30",
            "source": "Apple App Store"
          }
        ]
      },
      "thisWeek": {
        "label": "Apple sales this week",
        "range": "May 18-May 19, 2026",
        "purchases": 2,
        "purchaseRevenue": 44.98,
        "developerRevShare": 31.49,
        "revenuePerPurchase": 22.49,
        "payments": [
          {
            "date": "May 18",
            "rawDate": "20260518",
            "amount": 29.99,
            "count": 1,
            "description": "Apple App Store - Purchase Bundle 30",
            "source": "Apple App Store"
          },
          {
            "date": "May 18",
            "rawDate": "20260518",
            "amount": 14.99,
            "count": 1,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          }
        ]
      },
      "monthToDate": {
        "label": "Apple sales this month",
        "range": "May 1-May 19, 2026",
        "purchases": 3,
        "purchaseRevenue": 74.97,
        "developerRevShare": 52.48,
        "revenuePerPurchase": 24.99,
        "payments": [
          {
            "date": "May 13",
            "rawDate": "20260513",
            "amount": 29.99,
            "count": 1,
            "description": "Apple App Store - Purchase Bundle 30",
            "source": "Apple App Store"
          },
          {
            "date": "May 18",
            "rawDate": "20260518",
            "amount": 29.99,
            "count": 1,
            "description": "Apple App Store - Purchase Bundle 30",
            "source": "Apple App Store"
          },
          {
            "date": "May 18",
            "rawDate": "20260518",
            "amount": 14.99,
            "count": 1,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          }
        ]
      },
      "recent12Days": {
        "label": "Apple sales last 12 days",
        "range": "May 8-May 19, 2026",
        "purchases": 3,
        "purchaseRevenue": 74.97,
        "developerRevShare": 52.48,
        "revenuePerPurchase": 24.99,
        "payments": [
          {
            "date": "May 13",
            "rawDate": "20260513",
            "amount": 29.99,
            "count": 1,
            "description": "Apple App Store - Purchase Bundle 30",
            "source": "Apple App Store"
          },
          {
            "date": "May 18",
            "rawDate": "20260518",
            "amount": 29.99,
            "count": 1,
            "description": "Apple App Store - Purchase Bundle 30",
            "source": "Apple App Store"
          },
          {
            "date": "May 18",
            "rawDate": "20260518",
            "amount": 14.99,
            "count": 1,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          }
        ]
      },
      "yearToDate": {
        "label": "Apple App Store snapshot",
        "range": "Jan 1-May 19, 2026",
        "purchases": 7,
        "purchaseRevenue": 144.93,
        "developerRevShare": 101.45,
        "revenuePerPurchase": 20.7,
        "payments": [
          {
            "date": "Apr 16",
            "amount": 29.98,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "rawDate": "20260416",
            "count": 2
          },
          {
            "date": "Apr 21",
            "amount": 9.99,
            "description": "Apple App Store - Purchase Bundle 10",
            "source": "Apple App Store",
            "rawDate": "20260421",
            "count": 1
          },
          {
            "date": "Apr 6-May 10",
            "amount": 29.99,
            "description": "Apple App Store - Purchase Bundle 30, date pending",
            "source": "Apple App Store",
            "count": 1
          },
          {
            "date": "May 13",
            "rawDate": "20260513",
            "amount": 29.99,
            "count": 1,
            "description": "Apple App Store - Purchase Bundle 30",
            "source": "Apple App Store"
          },
          {
            "date": "May 18",
            "rawDate": "20260518",
            "amount": 29.99,
            "count": 1,
            "description": "Apple App Store - Purchase Bundle 30",
            "source": "Apple App Store"
          },
          {
            "date": "May 18",
            "rawDate": "20260518",
            "amount": 14.99,
            "count": 1,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          }
        ]
      },
      "dailyTrend": [
        {
          "date": "Apr 16",
          "rawDate": "20260416",
          "purchases": 2,
          "purchaseRevenue": 29.98,
          "developerRevShare": 20.99
        },
        {
          "date": "Apr 21",
          "rawDate": "20260421",
          "purchases": 1,
          "purchaseRevenue": 9.99,
          "developerRevShare": 6.99
        },
        {
          "date": "May 13",
          "rawDate": "20260513",
          "purchases": 1,
          "purchaseRevenue": 29.99,
          "developerRevShare": 20.99
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "purchases": 2,
          "purchaseRevenue": 44.98,
          "developerRevShare": 31.49
        }
      ],
      "undatedSales": [
        {
          "dateLabel": "Apr 6-May 10",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30, date pending"
        }
      ],
      "mix": [
        {
          "label": "Apple Purchase Bundle 30",
          "purchases": 2,
          "purchaseRevenue": 59.98,
          "developerRevShare": 41.99
        },
        {
          "label": "Apple Purchase HD 15",
          "purchases": 3,
          "purchaseRevenue": 44.97,
          "developerRevShare": 31.48
        },
        {
          "label": "Apple Purchase Bundle 30, date pending",
          "purchases": 1,
          "purchaseRevenue": 29.99,
          "developerRevShare": 20.99
        },
        {
          "label": "Apple Purchase Bundle 10",
          "purchases": 1,
          "purchaseRevenue": 9.99,
          "developerRevShare": 6.99
        }
      ],
      "note": "Apple App Store screenshots now show $144.93 gross in-app purchase sales through May 18, 2026, or approximately $101.45 after Apple’s 30% platform fee. Newly added from the May 12-May 18 screenshots: Bundle 30 on May 13 ($29.99), Bundle 30 on May 18 ($29.99), and HD 15 on May 18 ($14.99)."
    },
    "sourceBreakout": [
      {
        "source": "Stripe",
        "purchases": 11,
        "purchaseRevenue": 159.89,
        "developerRevShare": 0.0,
        "detail": "Stripe-visible sales are shown from the last successful pull. Latest live Stripe refresh failed: {\"error\": \"auth_required\", \"auth_url\": \"https://www.perplexity.ai/rest/connector-service/auth/oauth-redirect?source_id=stripe\", \"source_id\": \"stripe\"}\n"
      },
      {
        "source": "Roku",
        "purchases": 12,
        "purchaseRevenue": 176.88,
        "developerRevShare": 141.48,
        "detail": "Roku-visible sales come from the latest emailed Roku Sales Activity Report PDF. These are not total ElectricNOW sales."
      },
      {
        "source": "Apple App Store",
        "purchases": 7,
        "purchaseRevenue": 144.93,
        "developerRevShare": 101.45,
        "detail": "Apple App Store in-app purchase snapshots manually entered from App Store Connect screenshots. Gross customer sales are shown; estimated net assumes Apple keeps 30% before remittance. Latest manual snapshot added May 12-May 18, 2026 sales for Purchase Bundle 30 and Purchase HD 15."
      }
    ],
    "baselineWindow": {
      "label": "Launch baseline",
      "range": "Apr 13-Apr 19, 2026",
      "purchases": 11,
      "purchaseRevenue": 159.89,
      "developerRevShare": 80.94,
      "revenuePerPurchase": 14.54,
      "payments": [
        {
          "date": "Apr 16",
          "amount": 29.98,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store"
        }
      ]
    },
    "yearToDate": {
      "label": "Sales this year",
      "range": "Jan 1-May 14, 2026",
      "purchases": 30,
      "purchaseRevenue": 481.7,
      "developerRevShare": 242.93,
      "revenuePerPurchase": 16.06,
      "payments": [
        {
          "date": "May 6",
          "createdAt": "2026-05-06 01:02 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 26",
          "createdAt": "2026-04-26 20:13 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 24",
          "createdAt": "2026-04-24 15:38 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 22",
          "createdAt": "2026-04-22 09:46 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 22",
          "createdAt": "2026-04-22 02:25 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 20",
          "createdAt": "2026-04-20 18:31 PDT",
          "amount": 14.99,
          "description": "Anonymous Customer - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 18",
          "createdAt": "2026-04-18 17:51 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 16",
          "createdAt": "2026-04-16 18:58 PDT",
          "amount": 9.99,
          "description": "Customer User - Purchase Bundle 10: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "May 13",
          "rawDate": "20260513",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 14.99,
          "count": 1,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store"
        }
      ]
    },
    "monthToDate": {
      "label": "Sales this month",
      "range": "May 1-May 18, 2026",
      "purchases": 9,
      "purchaseRevenue": 121.91,
      "developerRevShare": 90.02,
      "revenuePerPurchase": 13.55,
      "payments": [
        {
          "date": "May 16",
          "createdAt": "2026-05-16",
          "amount": 19.99,
          "developerRevShare": 15.99,
          "description": "Roku - Purchase Bundle 20",
          "source": "Roku"
        },
        {
          "date": "May 14",
          "createdAt": "2026-05-14",
          "amount": 2.99,
          "developerRevShare": 2.39,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 13",
          "createdAt": "2026-05-13",
          "amount": 2.99,
          "developerRevShare": 2.39,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 12",
          "createdAt": "2026-05-12",
          "amount": 5.98,
          "developerRevShare": 4.78,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 4",
          "createdAt": "2026-05-04",
          "amount": 14.99,
          "developerRevShare": 11.99,
          "description": "Roku - Purchase HD 15",
          "source": "Roku"
        },
        {
          "date": "May 13",
          "rawDate": "20260513",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 14.99,
          "count": 1,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store"
        }
      ]
    },
    "lastWeek": {
      "label": "Sales last week",
      "range": "May 11-May 17, 2026",
      "purchases": 6,
      "purchaseRevenue": 61.94,
      "developerRevShare": 46.54,
      "revenuePerPurchase": 10.32,
      "payments": [
        {
          "date": "May 16",
          "createdAt": "2026-05-16",
          "amount": 19.99,
          "developerRevShare": 15.99,
          "description": "Roku - Purchase Bundle 20",
          "source": "Roku"
        },
        {
          "date": "May 14",
          "createdAt": "2026-05-14",
          "amount": 2.99,
          "developerRevShare": 2.39,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 13",
          "createdAt": "2026-05-13",
          "amount": 2.99,
          "developerRevShare": 2.39,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 12",
          "createdAt": "2026-05-12",
          "amount": 5.98,
          "developerRevShare": 4.78,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 13",
          "rawDate": "20260513",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        }
      ],
      "deltaPurchasesPct": -54.54545454545454,
      "deltaRevenuePct": -80.01751203952718
    },
    "thisWeek": {
      "label": "Sales this week",
      "range": "May 18-May 19, 2026",
      "purchases": 2,
      "purchaseRevenue": 44.98,
      "developerRevShare": 31.49,
      "revenuePerPurchase": 22.49,
      "payments": [
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 14.99,
          "count": 1,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store"
        }
      ]
    },
    "currentCompleteWeek": {
      "label": "Sales last week",
      "range": "May 11-May 17, 2026",
      "purchases": 6,
      "purchaseRevenue": 61.94,
      "developerRevShare": 46.54,
      "revenuePerPurchase": 10.32,
      "payments": [
        {
          "date": "May 16",
          "createdAt": "2026-05-16",
          "amount": 19.99,
          "developerRevShare": 15.99,
          "description": "Roku - Purchase Bundle 20",
          "source": "Roku"
        },
        {
          "date": "May 14",
          "createdAt": "2026-05-14",
          "amount": 2.99,
          "developerRevShare": 2.39,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 13",
          "createdAt": "2026-05-13",
          "amount": 2.99,
          "developerRevShare": 2.39,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 12",
          "createdAt": "2026-05-12",
          "amount": 5.98,
          "developerRevShare": 4.78,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "May 13",
          "rawDate": "20260513",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        }
      ],
      "deltaPurchasesPct": -54.54545454545454,
      "deltaRevenuePct": -80.01751203952718
    },
    "weekToDate": {
      "label": "Sales this week",
      "range": "May 18-May 19, 2026",
      "purchases": 2,
      "purchaseRevenue": 44.98,
      "developerRevShare": 31.49,
      "revenuePerPurchase": 22.49,
      "payments": [
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 14.99,
          "count": 1,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store"
        }
      ]
    },
    "recent12Days": {
      "label": "Visible sales last 12 days",
      "range": "May 7-May 18, 2026",
      "purchases": 3,
      "purchaseRevenue": 74.97,
      "developerRevShare": 52.48,
      "revenuePerPurchase": 24.99,
      "payments": [
        {
          "date": "May 13",
          "rawDate": "20260513",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 14.99,
          "count": 1,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store"
        }
      ]
    },
    "lifetimeObserved": {
      "label": "Sales this year",
      "range": "Jan 1-May 14, 2026",
      "purchases": 30,
      "purchaseRevenue": 481.7,
      "developerRevShare": 242.93,
      "revenuePerPurchase": 16.06,
      "payments": [
        {
          "date": "May 6",
          "createdAt": "2026-05-06 01:02 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 26",
          "createdAt": "2026-04-26 20:13 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 24",
          "createdAt": "2026-04-24 15:38 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 22",
          "createdAt": "2026-04-22 09:46 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 22",
          "createdAt": "2026-04-22 02:25 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 20",
          "createdAt": "2026-04-20 18:31 PDT",
          "amount": 14.99,
          "description": "Anonymous Customer - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 18",
          "createdAt": "2026-04-18 17:51 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "Apr 16",
          "createdAt": "2026-04-16 18:58 PDT",
          "amount": 9.99,
          "description": "Customer User - Purchase Bundle 10: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "May 13",
          "rawDate": "20260513",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 29.99,
          "count": 1,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "amount": 14.99,
          "count": 1,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store"
        }
      ]
    },
    "mix": [
      {
        "label": "Title purchases",
        "purchases": 10,
        "purchaseRevenue": 149.9
      },
      {
        "label": "Bundle purchases",
        "purchases": 1,
        "purchaseRevenue": 9.99
      },
      {
        "label": "Subscriptions",
        "purchases": 0,
        "purchaseRevenue": 0
      },
      {
        "label": "Roku title purchases",
        "purchases": 10,
        "purchaseRevenue": 101.9
      },
      {
        "label": "Roku bundle purchases",
        "purchases": 2,
        "purchaseRevenue": 74.98
      },
      {
        "label": "Apple Purchase Bundle 30",
        "purchases": 2,
        "purchaseRevenue": 59.98,
        "developerRevShare": 41.99
      },
      {
        "label": "Apple Purchase HD 15",
        "purchases": 3,
        "purchaseRevenue": 44.97,
        "developerRevShare": 31.48
      },
      {
        "label": "Apple Purchase Bundle 30, date pending",
        "purchases": 1,
        "purchaseRevenue": 29.99,
        "developerRevShare": 20.99
      },
      {
        "label": "Apple Purchase Bundle 10",
        "purchases": 1,
        "purchaseRevenue": 9.99,
        "developerRevShare": 6.99
      }
    ],
    "recentPayments": [
      {
        "id": "pi_3TU0PpLG0Cw1zW4e1xA1B4CB",
        "date": "May 6",
        "createdAt": "2026-05-06 01:02 PDT",
        "amount": 14.99,
        "description": "Customer User - Purchase this title: Signup payment",
        "source": "Stripe"
      },
      {
        "id": "pi_3TQfbqLG0Cw1zW4e0xCVetD1",
        "date": "Apr 26",
        "createdAt": "2026-04-26 20:13 PDT",
        "amount": 14.99,
        "description": "Customer User - Purchase this title: Signup payment",
        "source": "Stripe"
      },
      {
        "id": "pi_3TPsMQLG0Cw1zW4e1KupKuAF",
        "date": "Apr 24",
        "createdAt": "2026-04-24 15:38 PDT",
        "amount": 14.99,
        "description": "Customer User - Purchase this title: Signup payment",
        "source": "Stripe"
      },
      {
        "id": "pi_3TP3uxLG0Cw1zW4e0LSedyYu",
        "date": "Apr 22",
        "createdAt": "2026-04-22 09:46 PDT",
        "amount": 14.99,
        "description": "Customer User - Purchase this title: Signup payment",
        "source": "Stripe"
      },
      {
        "id": "pi_3TOx2ZLG0Cw1zW4e1W7SJZXg",
        "date": "Apr 22",
        "createdAt": "2026-04-22 02:25 PDT",
        "amount": 14.99,
        "description": "Customer User - Purchase this title: Signup payment",
        "source": "Stripe"
      },
      {
        "id": "pi_3TOTAALG0Cw1zW4e0dIkMbV1",
        "date": "Apr 20",
        "createdAt": "2026-04-20 18:31 PDT",
        "amount": 14.99,
        "description": "Anonymous Customer - Purchase this title: Signup payment",
        "source": "Stripe"
      },
      {
        "id": "pi_3TNjaVLG0Cw1zW4e2up0QKdp",
        "date": "Apr 18",
        "createdAt": "2026-04-18 17:51 PDT",
        "amount": 14.99,
        "description": "Customer User - Purchase this title: Signup payment",
        "source": "Stripe"
      },
      {
        "id": "pi_3TN1fjLG0Cw1zW4e1efwz7Hc",
        "date": "Apr 16",
        "createdAt": "2026-04-16 18:58 PDT",
        "amount": 9.99,
        "description": "Customer User - Purchase Bundle 10: Signup payment",
        "source": "Stripe"
      },
      {
        "id": "pi_3TMxdiLG0Cw1zW4e0ApnxCmW",
        "date": "Apr 16",
        "createdAt": "2026-04-16 14:39 PDT",
        "amount": 14.99,
        "description": "Customer User - Purchase this title: Signup payment",
        "source": "Stripe"
      },
      {
        "id": "pi_3TMxZHLG0Cw1zW4e0RXKnWOb",
        "date": "Apr 16",
        "createdAt": "2026-04-16 14:35 PDT",
        "amount": 14.99,
        "description": "Customer User - Purchase this title: Signup payment",
        "source": "Stripe"
      },
      {
        "id": "pi_3TKta2LG0Cw1zW4e26XmyZs9",
        "date": "Apr 10",
        "createdAt": "2026-04-10 21:55 PDT",
        "amount": 14.99,
        "description": "pi_3TKta2LG0Cw1zW4e26XmyZs9",
        "source": "Stripe"
      },
      {
        "date": "May 16",
        "createdAt": "2026-05-16",
        "amount": 19.99,
        "developerRevShare": 15.99,
        "description": "Roku - Purchase Bundle 20",
        "source": "Roku"
      }
    ],
    "dailyTrend": [
      {
        "date": "Apr 13",
        "rawDate": "20260413",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 11.99
      },
      {
        "date": "Apr 14",
        "rawDate": "20260414",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 11.99
      },
      {
        "date": "Apr 15",
        "rawDate": "20260415",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "Apr 16",
        "rawDate": "20260416",
        "purchases": 6,
        "purchaseRevenue": 84.94,
        "developerRevShare": 32.98
      },
      {
        "date": "Apr 17",
        "rawDate": "20260417",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 11.99
      },
      {
        "date": "Apr 18",
        "rawDate": "20260418",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 0.0
      },
      {
        "date": "Apr 19",
        "rawDate": "20260419",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 11.99
      },
      {
        "date": "Apr 20",
        "rawDate": "20260420",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 0.0
      },
      {
        "date": "Apr 21",
        "rawDate": "20260421",
        "purchases": 1,
        "purchaseRevenue": 9.99,
        "developerRevShare": 6.99
      },
      {
        "date": "Apr 22",
        "rawDate": "20260422",
        "purchases": 3,
        "purchaseRevenue": 84.97,
        "developerRevShare": 43.99
      },
      {
        "date": "Apr 23",
        "rawDate": "20260423",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "Apr 24",
        "rawDate": "20260424",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 0.0
      },
      {
        "date": "Apr 25",
        "rawDate": "20260425",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "Apr 26",
        "rawDate": "20260426",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 0.0
      },
      {
        "date": "Apr 27",
        "rawDate": "20260427",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "Apr 28",
        "rawDate": "20260428",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "Apr 29",
        "rawDate": "20260429",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "Apr 30",
        "rawDate": "20260430",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 1",
        "rawDate": "20260501",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 2",
        "rawDate": "20260502",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 3",
        "rawDate": "20260503",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 4",
        "rawDate": "20260504",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 11.99
      },
      {
        "date": "May 5",
        "rawDate": "20260505",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 6",
        "rawDate": "20260506",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 0.0
      },
      {
        "date": "May 7",
        "rawDate": "20260507",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 8",
        "rawDate": "20260508",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 9",
        "rawDate": "20260509",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 10",
        "rawDate": "20260510",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 11",
        "rawDate": "20260511",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 12",
        "rawDate": "20260512",
        "purchases": 2,
        "purchaseRevenue": 5.98,
        "developerRevShare": 4.78
      },
      {
        "date": "May 13",
        "rawDate": "20260513",
        "purchases": 2,
        "purchaseRevenue": 32.98,
        "developerRevShare": 23.38
      },
      {
        "date": "May 14",
        "rawDate": "20260514",
        "purchases": 1,
        "purchaseRevenue": 2.99,
        "developerRevShare": 2.39
      },
      {
        "date": "May 15",
        "rawDate": "20260515",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 16",
        "rawDate": "20260516",
        "purchases": 1,
        "purchaseRevenue": 19.99,
        "developerRevShare": 15.99
      },
      {
        "date": "May 17",
        "rawDate": "20260517",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 18",
        "rawDate": "20260518",
        "purchases": 2,
        "purchaseRevenue": 44.98,
        "developerRevShare": 31.48
      }
    ],
    "note": "Visible platform sales combine Stripe-visible, Roku-visible, and manually entered Apple App Store snapshot sales. This is still not total ElectricNOW sales because Google Play and any other app-store/platform channels may be missing."
  },
  "contentUsage": {
    "period": "May 11-May 17, 2026",
    "live": {
      "total": {
        "screenPageViews": 2054,
        "activeUsers": 131,
        "eventCount": 21657
      },
      "platforms": [
        {
          "platform": "web",
          "screen": "Live",
          "screenPageViews": 1736,
          "activeUsers": 6,
          "eventCount": 1736
        },
        {
          "platform": "Android",
          "screen": "Live",
          "screenPageViews": 228,
          "activeUsers": 85,
          "eventCount": 11464
        },
        {
          "platform": "iOS",
          "screen": "Live",
          "screenPageViews": 90,
          "activeUsers": 40,
          "eventCount": 8457
        }
      ],
      "playback": {
        "play": 4171,
        "video_start": 2209,
        "end_playback": 219
      },
      "playbackRows": [
        {
          "event": "play",
          "label": "Play events",
          "eventCount": 4171
        },
        {
          "event": "video_start",
          "label": "Video starts",
          "eventCount": 2209
        },
        {
          "event": "end_playback",
          "label": "Ended playbacks",
          "eventCount": 219
        }
      ],
      "topChannels": [
        {
          "title": "ElectricNOW",
          "plays": 3318,
          "activeUsers": 125,
          "rank": 1
        },
        {
          "title": "ElectricNOW en Español",
          "plays": 444,
          "activeUsers": 10,
          "rank": 2
        },
        {
          "title": "ToonOvation",
          "plays": 48,
          "activeUsers": 14,
          "rank": 3
        },
        {
          "title": "Kung Fu Movies",
          "plays": 33,
          "activeUsers": 7,
          "rank": 4
        },
        {
          "title": "Daily Flash",
          "plays": 24,
          "activeUsers": 9,
          "rank": 5
        },
        {
          "title": "Cartoon Classics",
          "plays": 23,
          "activeUsers": 6,
          "rank": 6
        },
        {
          "title": "NOMADslow tv",
          "plays": 21,
          "activeUsers": 3,
          "rank": 7
        },
        {
          "title": "spot on news",
          "plays": 16,
          "activeUsers": 4,
          "rank": 8
        },
        {
          "title": "Wrestling Spotlight",
          "plays": 15,
          "activeUsers": 3,
          "rank": 9
        },
        {
          "title": "BayView Documentaries",
          "plays": 14,
          "activeUsers": 4,
          "rank": 10
        }
      ],
      "note": "Live usage is based on GA4 screen name 'Live' plus playback events that also carried the Live screen name."
    },
    "onDemand": {
      "total": {
        "screenPageViews": 3402,
        "activeUsers": 793,
        "eventCount": 3814
      },
      "platforms": [
        {
          "platform": "web",
          "screen": "On Demand",
          "screenPageViews": 2850,
          "activeUsers": 618,
          "eventCount": 2850
        },
        {
          "platform": "Android",
          "screen": "On Demand",
          "screenPageViews": 410,
          "activeUsers": 128,
          "eventCount": 607
        },
        {
          "platform": "iOS",
          "screen": "On Demand",
          "screenPageViews": 142,
          "activeUsers": 47,
          "eventCount": 357
        }
      ],
      "note": "On Demand usage is based on GA4 screen name 'On Demand'. Title-level viewing is shown below from GA4 video_title play events."
    }
  },
  "titleViewership": {
    "period": "May 11-May 17, 2026",
    "note": "Top programs roll up fragmented GA4 play-event labels into parent shows/collections where possible, then use a GA4 filter to estimate deduped active users for each program. Play events remain the ranking metric because ads monetize playback; active users are total GA4 users who triggered matching play events for that program during the period. Treat this as GA-tracked viewership, not a fully cleaned catalog report yet, until the app sends content_type, series_title, season, episode, and video_id consistently.",
    "topPrograms": [
      {
        "rank": 1,
        "program": "ElectricNOW",
        "plays": 9973,
        "activeUsers": 1896,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Electric Now",
          "One Big Happy Family Trailer",
          "Don't Let It Out"
        ]
      },
      {
        "rank": 2,
        "program": "The Ark",
        "plays": 6845,
        "activeUsers": 174,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 25,
        "examples": [
          "Everyone Wanted to Be On This Ship",
          "Like It Touched the Sun",
          "Get Out and Push"
        ]
      },
      {
        "rank": 3,
        "program": "Leverage",
        "plays": 5498,
        "activeUsers": 76,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 57,
        "examples": [
          "The Nigerian Job (Pilot) - 43 Min Cut",
          "The Homecoming Job",
          "The Stork Job"
        ]
      },
      {
        "rank": 4,
        "program": "Leverage: Redemption",
        "plays": 3615,
        "activeUsers": 29,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 29,
        "examples": [
          "The Too Many Rembrandts Job",
          "The Crowning Achievement Job",
          "The Panamanian Job"
        ]
      },
      {
        "rank": 5,
        "program": "Almost Paradise",
        "plays": 2444,
        "activeUsers": 44,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 9,
        "examples": [
          "Finding Mabuhay",
          "It's Personal",
          "Reef Eel Soup for the Soul"
        ]
      },
      {
        "rank": 6,
        "program": "The Librarians",
        "plays": 2225,
        "activeUsers": 46,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 28,
        "examples": [
          "And the Horns of a Dilemma",
          "And the Crown of King Arthur",
          "And the Sword in the Stone"
        ]
      },
      {
        "rank": 7,
        "program": "The Librarians: The Next Chapter",
        "plays": 1022,
        "activeUsers": 8,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 4,
        "examples": [
          "And the Deadly Drekavac",
          "And the Dance of Doom!",
          "And the Ghost Train"
        ]
      },
      {
        "rank": 8,
        "program": "The Messenger",
        "plays": 946,
        "activeUsers": 59,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 4,
        "examples": [
          "Episode 1",
          "Episode 2",
          "Episode 3"
        ]
      },
      {
        "rank": 9,
        "program": "ElectricNOW en Español",
        "plays": 707,
        "activeUsers": 111,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "spot on news"
        ]
      },
      {
        "rank": 10,
        "program": "The Poly Couple",
        "plays": 697,
        "activeUsers": 70,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 9,
        "examples": [
          "So This Is How Polyamory Happens",
          "Morning Breath",
          "Are You Jealous"
        ]
      },
      {
        "rank": 11,
        "program": "ToonOvation",
        "plays": 524,
        "activeUsers": 206,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "AMPD TV"
        ]
      },
      {
        "rank": 12,
        "program": "Wizards vs. Aliens",
        "plays": 506,
        "activeUsers": 8,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 3,
        "examples": [
          "Wizards vs. Aliens - Trailer",
          "Wizards vs. Aliens - Dawn of the Nekross: Part 1",
          "Wizards vs. Aliens - Rebel Magic: Part 2"
        ]
      },
      {
        "rank": 13,
        "program": "Kung Fu Movies",
        "plays": 475,
        "activeUsers": 192,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 14,
        "program": "a-z Classic Flix",
        "plays": 384,
        "activeUsers": 96,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Finding Mabuhay"
        ]
      },
      {
        "rank": 15,
        "program": "Horror Asylum",
        "plays": 378,
        "activeUsers": 179,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 16,
        "program": "Ghost Dimension",
        "plays": 357,
        "activeUsers": 125,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Horror Asylum"
        ]
      },
      {
        "rank": 17,
        "program": "4ACETV CLASSIC HITS",
        "plays": 319,
        "activeUsers": 70,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "4ACETV",
          "Rockola Television"
        ]
      },
      {
        "rank": 18,
        "program": "The Outpost",
        "plays": 318,
        "activeUsers": 15,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 6,
        "examples": [
          "One Is the Loneliest Number",
          "Strange Bedfellows",
          "The Book of Names"
        ]
      },
      {
        "rank": 19,
        "program": "Cartoon Classics",
        "plays": 299,
        "activeUsers": 103,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 20,
        "program": "Daily Flash",
        "plays": 291,
        "activeUsers": 131,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "spot on news"
        ]
      },
      {
        "rank": 21,
        "program": "Stoner TV Network",
        "plays": 284,
        "activeUsers": 96,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Beyond Lochness",
          "Kung Fu Movies"
        ]
      },
      {
        "rank": 22,
        "program": "Grindhouse Gold",
        "plays": 277,
        "activeUsers": 105,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Lionheart"
        ]
      },
      {
        "rank": 23,
        "program": "spot on news",
        "plays": 271,
        "activeUsers": 133,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Electric Now",
          "Finding Mabuhay"
        ]
      },
      {
        "rank": 24,
        "program": "Flyboys",
        "plays": 263,
        "activeUsers": 24,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Flyboys Trailer"
        ]
      },
      {
        "rank": 25,
        "program": "DARK MATTER TV",
        "plays": 252,
        "activeUsers": 108,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 26,
        "program": "Celebrity Scene",
        "plays": 248,
        "activeUsers": 116,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Don't Let It Out",
          "Electric Now"
        ]
      },
      {
        "rank": 27,
        "program": "The Librarian: Quest for the Spear",
        "plays": 244,
        "activeUsers": 12,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 28,
        "program": "Hollywood Classic Movies",
        "plays": 239,
        "activeUsers": 79,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Beyond Lochness"
        ]
      },
      {
        "rank": 29,
        "program": "The Librarians: The Next Chapter Season 2 Teaser",
        "plays": 230,
        "activeUsers": 23,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 30,
        "program": "Mor2CTV",
        "plays": 211,
        "activeUsers": 56,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Old West TV"
        ]
      },
      {
        "rank": 31,
        "program": "Comedy Classics",
        "plays": 206,
        "activeUsers": 72,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 32,
        "program": "Exile",
        "plays": 200,
        "activeUsers": 20,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 33,
        "program": "The Family TV Channel",
        "plays": 196,
        "activeUsers": 79,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "TIDPIX-AUTHENTICALLY AFRICAN"
        ]
      },
      {
        "rank": 34,
        "program": "BayView Documentaries",
        "plays": 193,
        "activeUsers": 57,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 35,
        "program": "Checking Out: The Librarians Next Chapter",
        "plays": 191,
        "activeUsers": 17,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "TNC Series Preview",
          "And the Deadly Drekavac",
          "And the Con-Con"
        ]
      },
      {
        "rank": 36,
        "program": "AMPD TV",
        "plays": 174,
        "activeUsers": 82,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Cartoon Classics"
        ]
      },
      {
        "rank": 37,
        "program": "The Librarian: Return to King Solomon's Mines",
        "plays": 172,
        "activeUsers": 9,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 38,
        "program": "IndieBox",
        "plays": 170,
        "activeUsers": 70,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 39,
        "program": "Urban Action Channel",
        "plays": 168,
        "activeUsers": 85,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "AMPD TV",
          "Solar Impact"
        ]
      },
      {
        "rank": 40,
        "program": "Generation Z",
        "plays": 164,
        "activeUsers": 12,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Episode 1",
          "Episode 2",
          "Episode 3"
        ]
      },
      {
        "rank": 41,
        "program": "Wrestling Spotlight",
        "plays": 153,
        "activeUsers": 54,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 42,
        "program": "Box Cinema",
        "plays": 144,
        "activeUsers": 56,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Comercio TV"
        ]
      },
      {
        "rank": 43,
        "program": "a-z Western Grit",
        "plays": 144,
        "activeUsers": 87,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Episode 1",
          "Old West TV"
        ]
      },
      {
        "rank": 44,
        "program": "Like A Country Song",
        "plays": 142,
        "activeUsers": 1,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 45,
        "program": "Old West TV",
        "plays": 141,
        "activeUsers": 66,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 46,
        "program": "Spoils of War",
        "plays": 138,
        "activeUsers": 16,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 47,
        "program": "4ACETV",
        "plays": 134,
        "activeUsers": 57,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "4ACETV CLASSIC HITS"
        ]
      },
      {
        "rank": 48,
        "program": "Rockola Television",
        "plays": 134,
        "activeUsers": 63,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "DJ Central TV"
        ]
      },
      {
        "rank": 49,
        "program": "FightTVPlus",
        "plays": 132,
        "activeUsers": 53,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Wrestling Spotlight"
        ]
      },
      {
        "rank": 50,
        "program": "a-z Best Classic TV",
        "plays": 131,
        "activeUsers": 63,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      }
    ],
    "topVideoTitles": [
      {
        "rank": 1,
        "title": "Electric Now",
        "plays": 9943,
        "activeUsers": 1896,
        "group": "ElectricNOW"
      },
      {
        "rank": 2,
        "title": "Everyone Wanted to Be On This Ship",
        "plays": 991,
        "activeUsers": 117,
        "group": "The Ark"
      },
      {
        "rank": 3,
        "title": "ElectricNOW en Español",
        "plays": 706,
        "activeUsers": 111,
        "group": ""
      },
      {
        "rank": 4,
        "title": "ToonOvation",
        "plays": 523,
        "activeUsers": 206,
        "group": ""
      },
      {
        "rank": 5,
        "title": "Like It Touched the Sun",
        "plays": 500,
        "activeUsers": 28,
        "group": "The Ark"
      },
      {
        "rank": 6,
        "title": "Kung Fu Movies",
        "plays": 475,
        "activeUsers": 192,
        "group": "Stoner TV Network"
      },
      {
        "rank": 7,
        "title": "Episode 1",
        "plays": 473,
        "activeUsers": 49,
        "group": "The Messenger"
      },
      {
        "rank": 8,
        "title": "Finding Mabuhay",
        "plays": 458,
        "activeUsers": 26,
        "group": "Almost Paradise"
      },
      {
        "rank": 9,
        "title": "Get Out and Push",
        "plays": 386,
        "activeUsers": 16,
        "group": "The Ark"
      },
      {
        "rank": 10,
        "title": "a-z Classic Flix",
        "plays": 383,
        "activeUsers": 96,
        "group": ""
      },
      {
        "rank": 11,
        "title": "We Weren't Supposed to Be Awake",
        "plays": 382,
        "activeUsers": 17,
        "group": "The Ark"
      },
      {
        "rank": 12,
        "title": "Horror Asylum",
        "plays": 378,
        "activeUsers": 179,
        "group": "ElectricNOW"
      },
      {
        "rank": 13,
        "title": "Ghost Dimension",
        "plays": 355,
        "activeUsers": 125,
        "group": ""
      },
      {
        "rank": 14,
        "title": "Kill or Be Killed",
        "plays": 332,
        "activeUsers": 14,
        "group": "The Ark"
      },
      {
        "rank": 15,
        "title": "The Other You",
        "plays": 315,
        "activeUsers": 8,
        "group": "The Ark"
      },
      {
        "rank": 16,
        "title": "4ACETV CLASSIC HITS",
        "plays": 307,
        "activeUsers": 70,
        "group": "DJ Central TV"
      },
      {
        "rank": 17,
        "title": "Cartoon Classics",
        "plays": 299,
        "activeUsers": 103,
        "group": "AMPD TV"
      },
      {
        "rank": 18,
        "title": "Daily Flash",
        "plays": 290,
        "activeUsers": 131,
        "group": ""
      },
      {
        "rank": 19,
        "title": "The Too Many Rembrandts Job",
        "plays": 289,
        "activeUsers": 19,
        "group": "Leverage: Redemption"
      },
      {
        "rank": 20,
        "title": "Failed Experiment",
        "plays": 288,
        "activeUsers": 13,
        "group": "The Ark"
      },
      {
        "rank": 21,
        "title": "And the Crown of King Arthur",
        "plays": 285,
        "activeUsers": 28,
        "group": "The Librarians"
      },
      {
        "rank": 22,
        "title": "And the Horns of a Dilemma",
        "plays": 285,
        "activeUsers": 9,
        "group": "The Librarians"
      },
      {
        "rank": 23,
        "title": "Grindhouse Gold",
        "plays": 275,
        "activeUsers": 105,
        "group": ""
      },
      {
        "rank": 24,
        "title": "It's Personal",
        "plays": 268,
        "activeUsers": 10,
        "group": "Almost Paradise"
      },
      {
        "rank": 25,
        "title": "spot on news",
        "plays": 268,
        "activeUsers": 133,
        "group": "Daily Flash"
      },
      {
        "rank": 26,
        "title": "Stoner TV Network",
        "plays": 265,
        "activeUsers": 96,
        "group": ""
      },
      {
        "rank": 27,
        "title": "Anomaly",
        "plays": 258,
        "activeUsers": 10,
        "group": "The Ark"
      },
      {
        "rank": 28,
        "title": "Flyboys",
        "plays": 258,
        "activeUsers": 23,
        "group": ""
      },
      {
        "rank": 29,
        "title": "So This Is How Polyamory Happens",
        "plays": 253,
        "activeUsers": 52,
        "group": "The Poly Couple"
      },
      {
        "rank": 30,
        "title": "DARK MATTER TV",
        "plays": 252,
        "activeUsers": 108,
        "group": ""
      },
      {
        "rank": 31,
        "title": "The Nigerian Job (Pilot) - 43 Min Cut",
        "plays": 252,
        "activeUsers": 40,
        "group": "Leverage"
      },
      {
        "rank": 32,
        "title": "The Crowning Achievement Job",
        "plays": 246,
        "activeUsers": 3,
        "group": "Leverage: Redemption"
      },
      {
        "rank": 33,
        "title": "Celebrity Scene",
        "plays": 244,
        "activeUsers": 116,
        "group": ""
      },
      {
        "rank": 34,
        "title": "The Librarian: Quest for the Spear",
        "plays": 244,
        "activeUsers": 12,
        "group": ""
      },
      {
        "rank": 35,
        "title": "Hollywood Classic Movies",
        "plays": 237,
        "activeUsers": 80,
        "group": "CinePast"
      },
      {
        "rank": 36,
        "title": "Wizards vs. Aliens - Trailer",
        "plays": 235,
        "activeUsers": 12,
        "group": "Wizards vs. Aliens"
      },
      {
        "rank": 37,
        "title": "The Librarians: The Next Chapter Season 2 Teaser",
        "plays": 230,
        "activeUsers": 23,
        "group": ""
      },
      {
        "rank": 38,
        "title": "A Slow Death Is Worse",
        "plays": 228,
        "activeUsers": 9,
        "group": "The Ark"
      },
      {
        "rank": 39,
        "title": "One Step Forward, Two Steps Back",
        "plays": 228,
        "activeUsers": 16,
        "group": "The Ark"
      },
      {
        "rank": 40,
        "title": "Mor2CTV",
        "plays": 210,
        "activeUsers": 56,
        "group": ""
      },
      {
        "rank": 41,
        "title": "Pretty Big Deal",
        "plays": 207,
        "activeUsers": 6,
        "group": "The Ark"
      },
      {
        "rank": 42,
        "title": "Comedy Classics",
        "plays": 206,
        "activeUsers": 72,
        "group": "AMusic Channel"
      },
      {
        "rank": 43,
        "title": "Museum of Death",
        "plays": 205,
        "activeUsers": 8,
        "group": "The Ark"
      },
      {
        "rank": 44,
        "title": "Every Single Person Matters",
        "plays": 201,
        "activeUsers": 11,
        "group": "The Ark"
      },
      {
        "rank": 45,
        "title": "Episode 2",
        "plays": 200,
        "activeUsers": 10,
        "group": "The Messenger"
      },
      {
        "rank": 46,
        "title": "Exile",
        "plays": 200,
        "activeUsers": 20,
        "group": ""
      },
      {
        "rank": 47,
        "title": "The Homecoming Job",
        "plays": 196,
        "activeUsers": 17,
        "group": "Leverage"
      },
      {
        "rank": 48,
        "title": "The Family TV Channel",
        "plays": 195,
        "activeUsers": 79,
        "group": ""
      },
      {
        "rank": 49,
        "title": "BayView Documentaries",
        "plays": 193,
        "activeUsers": 57,
        "group": ""
      },
      {
        "rank": 50,
        "title": "Fortunate",
        "plays": 193,
        "activeUsers": 8,
        "group": "The Ark"
      }
    ],
    "topChannelTitles": [
      {
        "rank": 1,
        "title": "ElectricNOW",
        "plays": 9250,
        "activeUsers": 1697
      },
      {
        "rank": 2,
        "title": "Leverage",
        "plays": 3005,
        "activeUsers": 52
      },
      {
        "rank": 3,
        "title": "The Ark",
        "plays": 2572,
        "activeUsers": 130
      },
      {
        "rank": 4,
        "title": "The Ark - Season 1",
        "plays": 2019,
        "activeUsers": 1
      },
      {
        "rank": 5,
        "title": "The Ark - Season 2",
        "plays": 1586,
        "activeUsers": 1
      },
      {
        "rank": 6,
        "title": "Leverage: Redemption (Seasons 1 & 2)",
        "plays": 1397,
        "activeUsers": 16
      },
      {
        "rank": 7,
        "title": "Almost Paradise - Season 1",
        "plays": 1095,
        "activeUsers": 1
      },
      {
        "rank": 8,
        "title": "The Librarians: The Next Chapter",
        "plays": 977,
        "activeUsers": 1
      },
      {
        "rank": 9,
        "title": "Almost Paradise (Season 1 & 2)",
        "plays": 969,
        "activeUsers": 35
      },
      {
        "rank": 10,
        "title": "The Librarians (Full Series)",
        "plays": 883,
        "activeUsers": 38
      },
      {
        "rank": 11,
        "title": "Leverage: Redemption -  Season 1",
        "plays": 787,
        "activeUsers": 1
      },
      {
        "rank": 12,
        "title": "ElectricNOW en Español",
        "plays": 702,
        "activeUsers": 107
      },
      {
        "rank": 13,
        "title": "Leverage - Season 1",
        "plays": 630,
        "activeUsers": 1
      },
      {
        "rank": 14,
        "title": "Leverage: Redemption - Season 3",
        "plays": 625,
        "activeUsers": 1
      },
      {
        "rank": 15,
        "title": "Leverage: Redemption - Season 2",
        "plays": 580,
        "activeUsers": 1
      },
      {
        "rank": 16,
        "title": "The Messenger - Season 1",
        "plays": 552,
        "activeUsers": 1
      },
      {
        "rank": 17,
        "title": "The Librarians - Season 1",
        "plays": 541,
        "activeUsers": 1
      },
      {
        "rank": 18,
        "title": "Leverage - Season 3",
        "plays": 528,
        "activeUsers": 1
      },
      {
        "rank": 19,
        "title": "ToonOvation",
        "plays": 517,
        "activeUsers": 202
      },
      {
        "rank": 20,
        "title": "Kung Fu Movies",
        "plays": 470,
        "activeUsers": 189
      },
      {
        "rank": 21,
        "title": "a-z Classic Flix",
        "plays": 384,
        "activeUsers": 96
      },
      {
        "rank": 22,
        "title": "Horror Asylum",
        "plays": 370,
        "activeUsers": 174
      },
      {
        "rank": 23,
        "title": "Leverage - Season 4",
        "plays": 360,
        "activeUsers": 1
      },
      {
        "rank": 24,
        "title": "Ghost Dimension",
        "plays": 356,
        "activeUsers": 124
      },
      {
        "rank": 25,
        "title": "Leverage - Season 2",
        "plays": 343,
        "activeUsers": 1
      }
    ]
  },
  "metaCampaignContext": {
    "source": "ENow-TV-April-1st-May-3rd-Meta-Ads.xlsx, Raw Data Report!A1:W361",
    "note": "Meta campaign objective shifted from landing-page traffic, to app-store button-click leads, to direct app-install campaigns starting Apr 28. The app-install phase bypasses the website landing page, so lower landing-page traffic is expected and should not be judged as a standalone negative.",
    "phases": [
      {
        "phase": "Traffic to landing page",
        "dateRange": "Apr 16-Apr 23",
        "objective": "Link clicks",
        "results": "5,656 link clicks",
        "spend": "$887.22",
        "costPerResult": "$0.16"
      },
      {
        "phase": "Leads / app-store button clicks",
        "dateRange": "Apr 23-May 1",
        "objective": "Website leads / app-store button clicks",
        "results": "2,095 button-click leads",
        "spend": "$1,452.24",
        "costPerResult": "$0.69"
      },
      {
        "phase": "Direct app-install campaigns",
        "dateRange": "Apr 28-May 3",
        "objective": "Mobile app installs",
        "results": "1,465 installs",
        "spend": "$723.72",
        "costPerResult": "$0.49"
      }
    ],
    "appInstallBreakout": "Through May 3, Meta reported 516 iOS installs at about $0.65 each and 949 Google Play installs at about $0.41 each.",
    "interpretation": "Judge the newest phase by installs, app opens, viewing, Live usage, purchases, and ad value rather than by landing-page traffic."
  },
  "appUsage": {
    "launchBaseline": {
      "range": "Apr 13-Apr 19, 2026",
      "appActiveUsers": 1547,
      "appSessions": 2889,
      "appEngagedSessions": 2339,
      "appEngagementRate": 80.96227068189685,
      "viewingUsers": 730,
      "viewingShare": 47.18810601163542,
      "onDemandStartUsers": 699,
      "onDemandStartEvents": 2508,
      "liveChannelViewers": 46,
      "livePlayEvents": 1673
    },
    "previousWeek": {
      "range": "May 4-May 10, 2026",
      "appActiveUsers": 2605,
      "appSessions": 4554,
      "appEngagedSessions": 3728,
      "appEngagementRate": 81.8620992534036,
      "viewingUsers": 1172,
      "viewingShare": 44.990403071017276,
      "onDemandStartUsers": 1146,
      "onDemandStartEvents": 5083,
      "liveChannelViewers": 34,
      "livePlayEvents": 1542
    },
    "currentWeek": {
      "range": "May 11-May 17, 2026",
      "appActiveUsers": 4912,
      "appSessions": 7752,
      "appEngagedSessions": 6385,
      "appEngagementRate": 82.36584107327141,
      "viewingUsers": 2097,
      "viewingShare": 42.6913680781759,
      "onDemandStartUsers": 2061,
      "onDemandStartEvents": 7720,
      "liveChannelViewers": 40,
      "livePlayEvents": 1518
    }
  },
  "platformTime": {
    "launchBaseline": {
      "range": "Apr 13-Apr 19, 2026",
      "activeUsers": 8742,
      "sessions": 13350,
      "engagedSessions": 7917,
      "engagementRate": 59.30337078651685,
      "totalEngagementSeconds": 13150782,
      "totalEngagementHours": 3652.995,
      "avgEngagedMinutesPerUser": 25.072031571722718,
      "avgEngagedMinutesPerSession": 16.417955056179775,
      "ga4AverageSessionMinutes": 22.769179101851442,
      "platformBreakout": [
        {
          "platform": "web",
          "activeUsers": 7033,
          "sessions": 10031,
          "engagedSessions": 5221,
          "avgEngagedMinutesPerUser": 16.21484193563676,
          "avgEngagedMinutesPerSession": 11.368655501279367,
          "ga4AverageSessionMinutes": 13.258718967379467
        },
        {
          "platform": "iOS",
          "activeUsers": 896,
          "sessions": 1427,
          "engagedSessions": 1272,
          "avgEngagedMinutesPerUser": 63.90292038690476,
          "avgEngagedMinutesPerSession": 40.12404811959823,
          "ga4AverageSessionMinutes": 44.78369523208362
        },
        {
          "platform": "Android",
          "activeUsers": 813,
          "sessions": 1892,
          "engagedSessions": 1424,
          "avgEngagedMinutesPerUser": 58.89753997539976,
          "avgEngagedMinutesPerSession": 25.308509513742074,
          "ga4AverageSessionMinutes": 56.58773676096723
        }
      ],
      "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."
    },
    "previousWeek": {
      "range": "May 4-May 10, 2026",
      "activeUsers": 4623,
      "sessions": 9939,
      "engagedSessions": 8183,
      "engagementRate": 82.33222658215112,
      "totalEngagementSeconds": 16282719,
      "totalEngagementHours": 4522.9775,
      "avgEngagedMinutesPerUser": 58.70184944841012,
      "avgEngagedMinutesPerSession": 27.304421974041652,
      "ga4AverageSessionMinutes": 45.52332285097092,
      "platformBreakout": [
        {
          "platform": "web",
          "activeUsers": 1874,
          "sessions": 5018,
          "engagedSessions": 4100,
          "avgEngagedMinutesPerUser": 75.26255780860903,
          "avgEngagedMinutesPerSession": 28.10722067224658,
          "ga4AverageSessionMinutes": 32.39326327197754
        },
        {
          "platform": "Android",
          "activeUsers": 1456,
          "sessions": 2597,
          "engagedSessions": 2092,
          "avgEngagedMinutesPerUser": 37.582016941391934,
          "avgEngagedMinutesPerSession": 21.070241304068798,
          "ga4AverageSessionMinutes": 78.34755388522653
        },
        {
          "platform": "iOS",
          "activeUsers": 1293,
          "sessions": 2324,
          "engagedSessions": 1991,
          "avgEngagedMinutesPerUser": 58.48197989172467,
          "avgEngagedMinutesPerSession": 32.53752151462995,
          "ga4AverageSessionMinutes": 37.19376647034567
        }
      ],
      "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."
    },
    "currentWeek": {
      "range": "May 11-May 17, 2026",
      "activeUsers": 7704,
      "sessions": 13492,
      "engagedSessions": 10612,
      "engagementRate": 78.65401719537503,
      "totalEngagementSeconds": 19330186,
      "totalEngagementHours": 5369.4961111111115,
      "avgEngagedMinutesPerUser": 41.81850553824852,
      "avgEngagedMinutesPerSession": 23.878577428599666,
      "ga4AverageSessionMinutes": 99.54972380625533,
      "platformBreakout": [
        {
          "platform": "Android",
          "activeUsers": 2926,
          "sessions": 4642,
          "engagedSessions": 3761,
          "avgEngagedMinutesPerUser": 23.159899749373434,
          "avgEngagedMinutesPerSession": 14.598420221169038,
          "ga4AverageSessionMinutes": 93.25018360221874
        },
        {
          "platform": "web",
          "activeUsers": 2760,
          "sessions": 5587,
          "engagedSessions": 3958,
          "avgEngagedMinutesPerUser": 56.08671497584541,
          "avgEngagedMinutesPerSession": 27.707058051428913,
          "ga4AverageSessionMinutes": 142.56076350089373
        },
        {
          "platform": "iOS",
          "activeUsers": 2018,
          "sessions": 3263,
          "engagedSessions": 2893,
          "avgEngagedMinutesPerUser": 49.35806078625702,
          "avgEngagedMinutesPerSession": 30.52545714577587,
          "ga4AverageSessionMinutes": 34.86685125130384
        }
      ],
      "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."
    }
  },
  "acquisitionSummary": {
    "launchBaseline": {
      "range": "Apr 13-Apr 19, 2026",
      "totalGa4ActiveUsers": 8739.0,
      "totalGa4Sessions": 13421.0,
      "totalGa4EngagementRate": 59.310036509947096,
      "landingPageUsers": 1045,
      "landingPageSessions": 1485,
      "devicesPageUsers": 2028,
      "devicesPageSessions": 2119,
      "paidSocialUsers": 4441,
      "paidSocialSessions": 4547
    },
    "previousWeek": {
      "range": "May 4-May 10, 2026",
      "totalGa4ActiveUsers": 4659.0,
      "totalGa4Sessions": 9942.0,
      "totalGa4EngagementRate": 82.98129149064575,
      "landingPageUsers": 526,
      "landingPageSessions": 808,
      "devicesPageUsers": 112,
      "devicesPageSessions": 122,
      "paidSocialUsers": 983,
      "paidSocialSessions": 1318
    },
    "currentWeek": {
      "range": "May 11-May 17, 2026",
      "totalGa4ActiveUsers": 7902.0,
      "totalGa4Sessions": 14198.0,
      "totalGa4EngagementRate": 79.25059867586984,
      "landingPageUsers": 811,
      "landingPageSessions": 1138,
      "devicesPageUsers": 758,
      "devicesPageSessions": 777,
      "paidSocialUsers": 2803,
      "paidSocialSessions": 3640
    }
  },
  "viewingBehavior": {
    "launchBaseline": {
      "range": "Apr 13-Apr 19, 2026",
      "viewingEventUsers": 1155,
      "videoStartUsers": 1152,
      "videoStartEvents": 14853,
      "videoPlayUsers": 324,
      "videoPlayEvents": 4643,
      "videoCompleteUsers": 219,
      "videoCompleteEvents": 2980,
      "onDemandStartUsers": 1069,
      "onDemandStartEvents": 12780,
      "liveChannelViewers": 121,
      "livePlayEvents": 3952,
      "adRequestEvents": 10589,
      "adErrorEvents": 158
    },
    "previousWeek": {
      "range": "May 4-May 10, 2026",
      "viewingEventUsers": 1527,
      "videoStartUsers": 1525,
      "videoStartEvents": 18518,
      "videoPlayUsers": 263,
      "videoPlayEvents": 7931,
      "videoCompleteUsers": 181,
      "videoCompleteEvents": 3261,
      "onDemandStartUsers": 1449,
      "onDemandStartEvents": 16469,
      "liveChannelViewers": 99,
      "livePlayEvents": 3991,
      "adRequestEvents": 25145,
      "adErrorEvents": 13
    },
    "currentWeek": {
      "range": "May 11-May 17, 2026",
      "viewingEventUsers": 2504,
      "videoStartUsers": 2497,
      "videoStartEvents": 21598,
      "videoPlayUsers": 278,
      "videoPlayEvents": 7290,
      "videoCompleteUsers": 263,
      "videoCompleteEvents": 3512,
      "onDemandStartUsers": 2395,
      "onDemandStartEvents": 19389,
      "liveChannelViewers": 124,
      "livePlayEvents": 4171,
      "adRequestEvents": 25034,
      "adErrorEvents": 39
    }
  },
  "scorecardGroups": [
    {
      "title": "Measured ElectricNOW Platform Audience",
      "eyebrow": "Is the measured platform growing or shrinking?",
      "definition": "GA4 active users across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Landing-page traffic is reported only in Web Acquisition. Reconcile with Amagi, app stores, ad servers, and platform dashboards before treating this as total company-wide audience.",
      "cards": [
        {
          "key": "platformActiveUsers",
          "label": "Platform active users",
          "baseline": 8709,
          "launchBaseline": 8709,
          "previousWeek": 4622,
          "current": 7792,
          "deltaPct": 68.58502812635223,
          "deltaVsLaunchPct": -10.529337466988173,
          "deltaVsPreviousPct": 68.58502812635223,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 active users excluding landing-page acquisition paths."
        },
        {
          "key": "platformSessions",
          "label": "Platform sessions",
          "baseline": 13316,
          "launchBaseline": 13316,
          "previousWeek": 9879,
          "current": 14024,
          "deltaPct": 41.95768802510376,
          "deltaVsLaunchPct": 5.316911985581255,
          "deltaVsPreviousPct": 41.95768802510376,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 sessions excluding landing-page acquisition paths."
        },
        {
          "key": "viewingEventUsers",
          "label": "Viewing event users",
          "baseline": 1155,
          "launchBaseline": 1155,
          "previousWeek": 1527,
          "current": 2504,
          "deltaPct": 63.981663392272424,
          "deltaVsLaunchPct": 116.79653679653678,
          "deltaVsPreviousPct": 63.981663392272424,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered on-demand video_start or Live play events."
        },
        {
          "key": "totalEngagementHours",
          "label": "Total engaged hours",
          "baseline": 3652.995,
          "launchBaseline": 3652.995,
          "previousWeek": 4522.9775,
          "current": 5369.4961111111115,
          "deltaPct": 18.715958925533272,
          "deltaVsLaunchPct": 46.988871080062026,
          "deltaVsPreviousPct": 18.715958925533272,
          "deltaType": "percent",
          "format": "number",
          "context": "Total GA4 engaged time converted to hours."
        },
        {
          "key": "avgEngagedMinutesPerUser",
          "label": "Avg time per user",
          "baseline": 25.072031571722718,
          "launchBaseline": 25.072031571722718,
          "previousWeek": 58.70184944841012,
          "current": 41.81850553824852,
          "deltaPct": -16.8833439101616,
          "deltaVsLaunchPct": 16.746473966525805,
          "deltaVsPreviousPct": -16.8833439101616,
          "deltaType": "minutes",
          "format": "minutes",
          "context": "Total engaged time divided by active users, excluding landing-page acquisition paths."
        }
      ]
    },
    {
      "title": "Web Acquisition",
      "eyebrow": "Who arrived through the website and campaigns",
      "definition": "Website, landing-page, device-page, and paid-social traffic. These metrics explain acquisition and campaign reach, not app viewing.",
      "cards": [
        {
          "key": "landingPageUsers",
          "label": "Landing-page users",
          "baseline": 1045,
          "launchBaseline": 1045,
          "previousWeek": 526,
          "current": 811,
          "deltaPct": 54.18250950570342,
          "deltaVsLaunchPct": -22.392344497607656,
          "deltaVsPreviousPct": 54.18250950570342,
          "deltaType": "percent",
          "format": "number",
          "context": "Users reaching pages with “landing” in the path."
        },
        {
          "key": "devicesPageUsers",
          "label": "Devices-page users",
          "baseline": 2028,
          "launchBaseline": 2028,
          "previousWeek": 112,
          "current": 758,
          "deltaPct": 576.7857142857143,
          "deltaVsLaunchPct": -62.6232741617357,
          "deltaVsPreviousPct": 576.7857142857143,
          "deltaType": "percent",
          "format": "number",
          "context": "Users reaching pages with “devices” in the path."
        },
        {
          "key": "paidSocialUsers",
          "label": "Paid social users",
          "baseline": 4441,
          "launchBaseline": 4441,
          "previousWeek": 983,
          "current": 2803,
          "deltaPct": 185.147507629705,
          "deltaVsLaunchPct": -36.88358477820311,
          "deltaVsPreviousPct": 185.147507629705,
          "deltaType": "percent",
          "format": "number",
          "context": "Users from GA4 source/medium values containing Facebook, Instagram, or Meta."
        }
      ]
    },
    {
      "title": "Apple and Android App Stream Usage",
      "eyebrow": "Who used the Apple/iOS and Android app streams",
      "definition": "GA4 Apple/iOS and Android app streams only: stream IDs 12950551103 and 12982344897. The Apple/iOS stream may include iPhone, iPad, and Apple TV until Apple TV is separated by the app developer. Excludes web, Roku, Android TV, Samsung/Tizen, and LG/webOS unless separately stated.",
      "cards": [
        {
          "key": "appActiveUsers",
          "label": "App stream active users",
          "baseline": 1547,
          "launchBaseline": 1547,
          "previousWeek": 2605,
          "current": 4912,
          "deltaPct": 88.56046065259116,
          "deltaVsLaunchPct": 217.51777634130573,
          "deltaVsPreviousPct": 88.56046065259116,
          "deltaType": "percent",
          "format": "number",
          "context": "People using the Apple/iOS or Android app streams; Apple TV is not yet split from the Apple/iOS stream."
        },
        {
          "key": "appSessions",
          "label": "App stream sessions",
          "baseline": 2889,
          "launchBaseline": 2889,
          "previousWeek": 4554,
          "current": 7752,
          "deltaPct": 70.2239789196311,
          "deltaVsLaunchPct": 168.32814122533748,
          "deltaVsPreviousPct": 70.2239789196311,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 sessions on the Apple/iOS and Android app streams."
        },
        {
          "key": "appEngagementRate",
          "label": "App stream engagement rate",
          "baseline": 80.96227068189685,
          "launchBaseline": 80.96227068189685,
          "previousWeek": 81.8620992534036,
          "current": 82.36584107327141,
          "deltaPct": 0.5037418198678125,
          "deltaVsLaunchPct": 1.4035703913745579,
          "deltaVsPreviousPct": 0.5037418198678125,
          "deltaType": "points",
          "format": "percent",
          "context": "Engaged app-stream sessions divided by app-stream sessions."
        }
      ]
    },
    {
      "title": "Viewing Behavior",
      "eyebrow": "Who actually watched or started video",
      "definition": "Event-based viewing metrics across GA4-tracked platforms. Users are deduped within each event filter; event counts are labeled separately.",
      "cards": [
        {
          "key": "viewingEventUsers",
          "label": "Viewing event users",
          "baseline": 1155,
          "launchBaseline": 1155,
          "previousWeek": 1527,
          "current": 2504,
          "deltaPct": 63.981663392272424,
          "deltaVsLaunchPct": 116.79653679653678,
          "deltaVsPreviousPct": 63.981663392272424,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered on-demand video_start or Live play events."
        },
        {
          "key": "onDemandStartUsers",
          "label": "On-demand start users",
          "baseline": 1069,
          "launchBaseline": 1069,
          "previousWeek": 1449,
          "current": 2395,
          "deltaPct": 65.28640441683919,
          "deltaVsLaunchPct": 124.04115996258184,
          "deltaVsPreviousPct": 65.28640441683919,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered video_start outside the Live screen."
        },
        {
          "key": "liveChannelViewers",
          "label": "Live channel viewers",
          "baseline": 121,
          "launchBaseline": 121,
          "previousWeek": 99,
          "current": 124,
          "deltaPct": 25.252525252525253,
          "deltaVsLaunchPct": 2.479338842975207,
          "deltaVsPreviousPct": 25.252525252525253,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered a Live play event."
        },
        {
          "key": "videoCompleteUsers",
          "label": "Video complete users",
          "baseline": 219,
          "launchBaseline": 219,
          "previousWeek": 181,
          "current": 263,
          "deltaPct": 45.30386740331492,
          "deltaVsLaunchPct": 20.091324200913242,
          "deltaVsPreviousPct": 45.30386740331492,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered video_complete."
        },
        {
          "key": "livePlayEvents",
          "label": "Live play events",
          "baseline": 3952,
          "launchBaseline": 3952,
          "previousWeek": 3991,
          "current": 4171,
          "deltaPct": 4.510147832623403,
          "deltaVsLaunchPct": 5.541497975708502,
          "deltaVsPreviousPct": 4.510147832623403,
          "deltaType": "percent",
          "format": "number",
          "context": "Total Live play events, not unique users."
        },
        {
          "key": "adRequestEvents",
          "label": "Ad request events",
          "baseline": 10589,
          "launchBaseline": 10589,
          "previousWeek": 25145,
          "current": 25034,
          "deltaPct": -0.441439650029827,
          "deltaVsLaunchPct": 136.41514779488148,
          "deltaVsPreviousPct": -0.441439650029827,
          "deltaType": "percent",
          "format": "number",
          "context": "Total ad request events generated by viewing activity."
        }
      ]
    },
    {
      "title": "Time on Platform",
      "eyebrow": "How long people stayed",
      "definition": "All GA4-tracked platforms. Per user measures weekly attention per person; per session measures the average visit or viewing session.",
      "cards": [
        {
          "key": "avgEngagedMinutesPerUser",
          "label": "Avg time per user",
          "baseline": 25.072031571722718,
          "launchBaseline": 25.072031571722718,
          "previousWeek": 58.70184944841012,
          "current": 41.81850553824852,
          "deltaPct": -16.8833439101616,
          "deltaVsLaunchPct": 16.746473966525805,
          "deltaVsPreviousPct": -16.8833439101616,
          "deltaType": "minutes",
          "format": "minutes",
          "context": "Total engaged time divided by active users."
        },
        {
          "key": "avgEngagedMinutesPerSession",
          "label": "Avg time per session",
          "baseline": 16.417955056179775,
          "launchBaseline": 16.417955056179775,
          "previousWeek": 27.304421974041652,
          "current": 23.878577428599666,
          "deltaPct": -3.4258445454419864,
          "deltaVsLaunchPct": 7.460622372419891,
          "deltaVsPreviousPct": -3.4258445454419864,
          "deltaType": "minutes",
          "format": "minutes",
          "context": "Total engaged time divided by sessions."
        },
        {
          "key": "totalEngagementHours",
          "label": "Total engaged hours",
          "baseline": 3652.995,
          "launchBaseline": 3652.995,
          "previousWeek": 4522.9775,
          "current": 5369.4961111111115,
          "deltaPct": 18.715958925533272,
          "deltaVsLaunchPct": 46.988871080062026,
          "deltaVsPreviousPct": 18.715958925533272,
          "deltaType": "percent",
          "format": "number",
          "context": "Total GA4 engaged time converted to hours."
        }
      ]
    }
  ],
  "surfaceBreakout": {
    "launchBaseline": {
      "range": "Apr 13-Apr 19, 2026",
      "rows": [
        {
          "surface": "Web",
          "streamName": "electricnow-web",
          "streamId": "13090831762",
          "platform": "web",
          "activeUsers": 5699,
          "sessions": 6734,
          "engagedSessions": 2504,
          "eventCount": 60226,
          "engagementRate": 37.184437184437186,
          "avgEngagedMinutesPerUser": 1.8929110370240392,
          "avgEngagedMinutesPerSession": 1.601975051975052
        },
        {
          "surface": "Roku",
          "streamName": "electricnow-roku",
          "streamId": "13096428368",
          "platform": "web",
          "activeUsers": 1303,
          "sessions": 3532,
          "engagedSessions": 2827,
          "eventCount": 556413,
          "engagementRate": 80.039637599094,
          "avgEngagedMinutesPerUser": 79.42747505755948,
          "avgEngagedMinutesPerSession": 29.30181200453001
        },
        {
          "surface": "iOS / Apple app stream",
          "streamName": "ElectricNow",
          "streamId": "12982344897",
          "platform": "iOS",
          "activeUsers": 896,
          "sessions": 1427,
          "engagedSessions": 1272,
          "eventCount": 38429,
          "engagementRate": 89.13805185704274,
          "avgEngagedMinutesPerUser": 63.90292038690476,
          "avgEngagedMinutesPerSession": 40.12404811959823
        },
        {
          "surface": "Android mobile app",
          "streamName": "ElectricNOW",
          "streamId": "12950551103",
          "platform": "Android",
          "activeUsers": 651,
          "sessions": 1479,
          "engagedSessions": 1063,
          "eventCount": 30967,
          "engagementRate": 71.87288708586883,
          "avgEngagedMinutesPerUser": 18.074654377880183,
          "avgEngagedMinutesPerSession": 7.95578093306288
        },
        {
          "surface": "Android TV / CTV",
          "streamName": "ElectricNOW tv",
          "streamId": "13118400722",
          "platform": "Android",
          "activeUsers": 162,
          "sessions": 414,
          "engagedSessions": 361,
          "eventCount": 18889,
          "engagementRate": 87.19806763285024,
          "avgEngagedMinutesPerUser": 222.94506172839507,
          "avgEngagedMinutesPerSession": 87.23937198067634
        },
        {
          "surface": "LG / webOS",
          "streamName": "electricnow-webos",
          "streamId": "12976053175",
          "platform": "web",
          "activeUsers": 0,
          "sessions": 14,
          "engagedSessions": 0,
          "eventCount": 91,
          "engagementRate": 0.0,
          "avgEngagedMinutesPerUser": 0,
          "avgEngagedMinutesPerSession": 0.0
        }
      ],
      "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."
    },
    "previousWeek": {
      "range": "May 4-May 10, 2026",
      "rows": [
        {
          "surface": "Android mobile app",
          "streamName": "ElectricNOW",
          "streamId": "12950551103",
          "platform": "Android",
          "activeUsers": 1312,
          "sessions": 2249,
          "engagedSessions": 1776,
          "eventCount": 63173,
          "engagementRate": 78.96843041351713,
          "avgEngagedMinutesPerUser": 11.44777693089431,
          "avgEngagedMinutesPerSession": 6.678294056617756
        },
        {
          "surface": "iOS / Apple app stream",
          "streamName": "ElectricNow",
          "streamId": "12982344897",
          "platform": "iOS",
          "activeUsers": 1293,
          "sessions": 2324,
          "engagedSessions": 1991,
          "eventCount": 74175,
          "engagementRate": 85.671256454389,
          "avgEngagedMinutesPerUser": 58.48197989172467,
          "avgEngagedMinutesPerSession": 32.53752151462995
        },
        {
          "surface": "Roku",
          "streamName": "electricnow-roku",
          "streamId": "13096428368",
          "platform": "web",
          "activeUsers": 1096,
          "sessions": 3404,
          "engagedSessions": 2758,
          "eventCount": 693901,
          "engagementRate": 81.02232667450059,
          "avgEngagedMinutesPerUser": 113.31341240875912,
          "avgEngagedMinutesPerSession": 36.48398942420682
        },
        {
          "surface": "Web",
          "streamName": "electricnow-web",
          "streamId": "13090831762",
          "platform": "web",
          "activeUsers": 815,
          "sessions": 1583,
          "engagedSessions": 1247,
          "eventCount": 53679,
          "engagementRate": 78.77447883765004,
          "avgEngagedMinutesPerUser": 20.80276073619632,
          "avgEngagedMinutesPerSession": 10.710202147820594
        },
        {
          "surface": "Android TV / CTV",
          "streamName": "ElectricNOW tv",
          "streamId": "13118400722",
          "platform": "Android",
          "activeUsers": 144,
          "sessions": 345,
          "engagedSessions": 314,
          "eventCount": 25505,
          "engagementRate": 91.01449275362319,
          "avgEngagedMinutesPerUser": 275.6939814814815,
          "avgEngagedMinutesPerSession": 115.07227053140097
        },
        {
          "surface": "LG / webOS",
          "streamName": "electricnow-webos",
          "streamId": "12976053175",
          "platform": "web",
          "activeUsers": 0,
          "sessions": 2,
          "engagedSessions": 0,
          "eventCount": 16,
          "engagementRate": 0.0,
          "avgEngagedMinutesPerUser": 0,
          "avgEngagedMinutesPerSession": 0.0
        }
      ],
      "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."
    },
    "currentWeek": {
      "range": "May 11-May 17, 2026",
      "rows": [
        {
          "surface": "Android mobile app",
          "streamName": "ElectricNOW",
          "streamId": "12950551103",
          "platform": "Android",
          "activeUsers": 2824,
          "sessions": 4386,
          "engagedSessions": 3495,
          "eventCount": 81740,
          "engagementRate": 79.68536251709986,
          "avgEngagedMinutesPerUser": 7.866347969782813,
          "avgEngagedMinutesPerSession": 5.064880680954553
        },
        {
          "surface": "iOS / Apple app stream",
          "streamName": "ElectricNow",
          "streamId": "12982344897",
          "platform": "iOS",
          "activeUsers": 2088,
          "sessions": 3384,
          "engagedSessions": 2992,
          "eventCount": 90012,
          "engagementRate": 88.4160756501182,
          "avgEngagedMinutesPerUser": 43.29341475095785,
          "avgEngagedMinutesPerSession": 26.712958037825057
        },
        {
          "surface": "Web",
          "streamName": "electricnow-web",
          "streamId": "13090831762",
          "platform": "web",
          "activeUsers": 1727,
          "sessions": 2485,
          "engagedSessions": 1579,
          "eventCount": 56022,
          "engagementRate": 63.541247484909455,
          "avgEngagedMinutesPerUser": 9.590831885736344,
          "avgEngagedMinutesPerSession": 6.665338698859825
        },
        {
          "surface": "Roku",
          "streamName": "electricnow-roku",
          "streamId": "13096428368",
          "platform": "web",
          "activeUsers": 1107,
          "sessions": 3349,
          "engagedSessions": 2751,
          "eventCount": 722553,
          "engagementRate": 82.14392355927143,
          "avgEngagedMinutesPerUser": 124.73577235772358,
          "avgEngagedMinutesPerSession": 41.23096446700507
        },
        {
          "surface": "Android TV / CTV",
          "streamName": "ElectricNOW tv",
          "streamId": "13118400722",
          "platform": "Android",
          "activeUsers": 201,
          "sessions": 461,
          "engagedSessions": 427,
          "eventCount": 29379,
          "engagementRate": 92.62472885032538,
          "avgEngagedMinutesPerUser": 200.41285240464347,
          "avgEngagedMinutesPerSession": 87.38174258857556
        },
        {
          "surface": "LG / webOS",
          "streamName": "electricnow-webos",
          "streamId": "12976053175",
          "platform": "web",
          "activeUsers": 0,
          "sessions": 1,
          "engagedSessions": 0,
          "eventCount": 3,
          "engagementRate": 0.0,
          "avgEngagedMinutesPerUser": 0,
          "avgEngagedMinutesPerSession": 0.0
        }
      ],
      "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."
    }
  },
  "platformAudience": {
    "launchBaseline": {
      "range": "Apr 13-Apr 19, 2026",
      "platformActiveUsers": 8709,
      "platformSessions": 13316,
      "platformEngagedSessions": 7950,
      "platformEventCount": 701653,
      "platformEngagementRate": 59.702613397416634,
      "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition."
    },
    "previousWeek": {
      "range": "May 4-May 10, 2026",
      "platformActiveUsers": 4622,
      "platformSessions": 9879,
      "platformEngagedSessions": 8240,
      "platformEventCount": 908801,
      "platformEngagementRate": 83.40925194857779,
      "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition."
    },
    "currentWeek": {
      "range": "May 11-May 17, 2026",
      "platformActiveUsers": 7792,
      "platformSessions": 14024,
      "platformEngagedSessions": 11224,
      "platformEventCount": 977026,
      "platformEngagementRate": 80.0342270393611,
      "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition."
    }
  },
  "weeklyTrend": [
    {
      "date": "May 11",
      "rawDate": "20260511",
      "activeUsers": 477,
      "newUsers": 217,
      "sessions": 646,
      "engagedSessions": 519,
      "screenPageViews": 32,
      "eventCount": 18124,
      "engagementRate": 80.34055727554178
    },
    {
      "date": "May 12",
      "rawDate": "20260512",
      "activeUsers": 749,
      "newUsers": 485,
      "sessions": 954,
      "engagedSessions": 811,
      "screenPageViews": 76,
      "eventCount": 23033,
      "engagementRate": 85.01048218029351
    },
    {
      "date": "May 13",
      "rawDate": "20260513",
      "activeUsers": 920,
      "newUsers": 609,
      "sessions": 1150,
      "engagedSessions": 954,
      "screenPageViews": 85,
      "eventCount": 22185,
      "engagementRate": 82.95652173913044
    },
    {
      "date": "May 14",
      "rawDate": "20260514",
      "activeUsers": 999,
      "newUsers": 680,
      "sessions": 1265,
      "engagedSessions": 1073,
      "screenPageViews": 109,
      "eventCount": 26504,
      "engagementRate": 84.82213438735178
    },
    {
      "date": "May 15",
      "rawDate": "20260515",
      "activeUsers": 971,
      "newUsers": 632,
      "sessions": 1237,
      "engagedSessions": 1018,
      "screenPageViews": 58,
      "eventCount": 27718,
      "engagementRate": 82.29587712206953
    },
    {
      "date": "May 16",
      "rawDate": "20260516",
      "activeUsers": 978,
      "newUsers": 643,
      "sessions": 1274,
      "engagedSessions": 1066,
      "screenPageViews": 93,
      "eventCount": 24309,
      "engagementRate": 83.6734693877551
    },
    {
      "date": "May 17",
      "rawDate": "20260517",
      "activeUsers": 1061,
      "newUsers": 672,
      "sessions": 1417,
      "engagedSessions": 1148,
      "screenPageViews": 127,
      "eventCount": 29879,
      "engagementRate": 81.01623147494708
    }
  ],
  "monthlyTrend": [
    {
      "date": "Apr 18",
      "rawDate": "20260418",
      "activeUsers": 335,
      "newUsers": 200,
      "sessions": 455,
      "engagedSessions": 374,
      "screenPageViews": 83,
      "eventCount": 11471,
      "engagementRate": 82.19780219780219
    },
    {
      "date": "Apr 19",
      "rawDate": "20260419",
      "activeUsers": 426,
      "newUsers": 270,
      "sessions": 584,
      "engagedSessions": 499,
      "screenPageViews": 256,
      "eventCount": 16071,
      "engagementRate": 85.44520547945206
    },
    {
      "date": "Apr 20",
      "rawDate": "20260420",
      "activeUsers": 367,
      "newUsers": 195,
      "sessions": 516,
      "engagedSessions": 438,
      "screenPageViews": 183,
      "eventCount": 11588,
      "engagementRate": 84.88372093023256
    },
    {
      "date": "Apr 21",
      "rawDate": "20260421",
      "activeUsers": 439,
      "newUsers": 273,
      "sessions": 599,
      "engagedSessions": 508,
      "screenPageViews": 101,
      "eventCount": 13597,
      "engagementRate": 84.80801335559266
    },
    {
      "date": "Apr 22",
      "rawDate": "20260422",
      "activeUsers": 484,
      "newUsers": 280,
      "sessions": 668,
      "engagedSessions": 569,
      "screenPageViews": 239,
      "eventCount": 22015,
      "engagementRate": 85.17964071856288
    },
    {
      "date": "Apr 23",
      "rawDate": "20260423",
      "activeUsers": 424,
      "newUsers": 212,
      "sessions": 611,
      "engagedSessions": 527,
      "screenPageViews": 101,
      "eventCount": 20023,
      "engagementRate": 86.2520458265139
    },
    {
      "date": "Apr 24",
      "rawDate": "20260424",
      "activeUsers": 566,
      "newUsers": 356,
      "sessions": 756,
      "engagedSessions": 647,
      "screenPageViews": 219,
      "eventCount": 23368,
      "engagementRate": 85.58201058201058
    },
    {
      "date": "Apr 25",
      "rawDate": "20260425",
      "activeUsers": 500,
      "newUsers": 307,
      "sessions": 664,
      "engagedSessions": 568,
      "screenPageViews": 246,
      "eventCount": 21547,
      "engagementRate": 85.54216867469879
    },
    {
      "date": "Apr 26",
      "rawDate": "20260426",
      "activeUsers": 584,
      "newUsers": 370,
      "sessions": 775,
      "engagedSessions": 674,
      "screenPageViews": 235,
      "eventCount": 26001,
      "engagementRate": 86.96774193548387
    },
    {
      "date": "Apr 27",
      "rawDate": "20260427",
      "activeUsers": 484,
      "newUsers": 257,
      "sessions": 640,
      "engagedSessions": 550,
      "screenPageViews": 611,
      "eventCount": 20429,
      "engagementRate": 85.9375
    },
    {
      "date": "Apr 28",
      "rawDate": "20260428",
      "activeUsers": 652,
      "newUsers": 416,
      "sessions": 825,
      "engagedSessions": 701,
      "screenPageViews": 170,
      "eventCount": 25485,
      "engagementRate": 84.96969696969697
    },
    {
      "date": "Apr 29",
      "rawDate": "20260429",
      "activeUsers": 746,
      "newUsers": 496,
      "sessions": 969,
      "engagedSessions": 819,
      "screenPageViews": 145,
      "eventCount": 27397,
      "engagementRate": 84.52012383900929
    },
    {
      "date": "Apr 30",
      "rawDate": "20260430",
      "activeUsers": 662,
      "newUsers": 375,
      "sessions": 871,
      "engagedSessions": 733,
      "screenPageViews": 117,
      "eventCount": 25914,
      "engagementRate": 84.15614236509758
    },
    {
      "date": "May 1",
      "rawDate": "20260501",
      "activeUsers": 508,
      "newUsers": 278,
      "sessions": 686,
      "engagedSessions": 563,
      "screenPageViews": 177,
      "eventCount": 15861,
      "engagementRate": 82.06997084548105
    },
    {
      "date": "May 2",
      "rawDate": "20260502",
      "activeUsers": 555,
      "newUsers": 294,
      "sessions": 734,
      "engagedSessions": 598,
      "screenPageViews": 160,
      "eventCount": 24839,
      "engagementRate": 81.47138964577657
    },
    {
      "date": "May 3",
      "rawDate": "20260503",
      "activeUsers": 568,
      "newUsers": 298,
      "sessions": 765,
      "engagedSessions": 636,
      "screenPageViews": 132,
      "eventCount": 19851,
      "engagementRate": 83.13725490196079
    },
    {
      "date": "May 4",
      "rawDate": "20260504",
      "activeUsers": 476,
      "newUsers": 230,
      "sessions": 652,
      "engagedSessions": 515,
      "screenPageViews": 54,
      "eventCount": 23040,
      "engagementRate": 78.9877300613497
    },
    {
      "date": "May 5",
      "rawDate": "20260505",
      "activeUsers": 499,
      "newUsers": 252,
      "sessions": 648,
      "engagedSessions": 545,
      "screenPageViews": 147,
      "eventCount": 18886,
      "engagementRate": 84.10493827160494
    },
    {
      "date": "May 6",
      "rawDate": "20260506",
      "activeUsers": 528,
      "newUsers": 263,
      "sessions": 698,
      "engagedSessions": 571,
      "screenPageViews": 57,
      "eventCount": 19244,
      "engagementRate": 81.80515759312321
    },
    {
      "date": "May 7",
      "rawDate": "20260507",
      "activeUsers": 496,
      "newUsers": 223,
      "sessions": 667,
      "engagedSessions": 549,
      "screenPageViews": 77,
      "eventCount": 20037,
      "engagementRate": 82.3088455772114
    },
    {
      "date": "May 8",
      "rawDate": "20260508",
      "activeUsers": 493,
      "newUsers": 228,
      "sessions": 659,
      "engagedSessions": 539,
      "screenPageViews": 104,
      "eventCount": 17938,
      "engagementRate": 81.79059180576631
    },
    {
      "date": "May 9",
      "rawDate": "20260509",
      "activeUsers": 470,
      "newUsers": 218,
      "sessions": 623,
      "engagedSessions": 520,
      "screenPageViews": 103,
      "eventCount": 16427,
      "engagementRate": 83.46709470304975
    },
    {
      "date": "May 10",
      "rawDate": "20260510",
      "activeUsers": 534,
      "newUsers": 263,
      "sessions": 742,
      "engagedSessions": 613,
      "screenPageViews": 141,
      "eventCount": 21776,
      "engagementRate": 82.61455525606469
    },
    {
      "date": "May 11",
      "rawDate": "20260511",
      "activeUsers": 477,
      "newUsers": 217,
      "sessions": 646,
      "engagedSessions": 519,
      "screenPageViews": 32,
      "eventCount": 18124,
      "engagementRate": 80.34055727554178
    },
    {
      "date": "May 12",
      "rawDate": "20260512",
      "activeUsers": 749,
      "newUsers": 485,
      "sessions": 954,
      "engagedSessions": 811,
      "screenPageViews": 76,
      "eventCount": 23033,
      "engagementRate": 85.01048218029351
    },
    {
      "date": "May 13",
      "rawDate": "20260513",
      "activeUsers": 920,
      "newUsers": 609,
      "sessions": 1150,
      "engagedSessions": 954,
      "screenPageViews": 85,
      "eventCount": 22185,
      "engagementRate": 82.95652173913044
    },
    {
      "date": "May 14",
      "rawDate": "20260514",
      "activeUsers": 999,
      "newUsers": 680,
      "sessions": 1265,
      "engagedSessions": 1073,
      "screenPageViews": 109,
      "eventCount": 26504,
      "engagementRate": 84.82213438735178
    },
    {
      "date": "May 15",
      "rawDate": "20260515",
      "activeUsers": 971,
      "newUsers": 632,
      "sessions": 1237,
      "engagedSessions": 1018,
      "screenPageViews": 58,
      "eventCount": 27718,
      "engagementRate": 82.29587712206953
    },
    {
      "date": "May 16",
      "rawDate": "20260516",
      "activeUsers": 978,
      "newUsers": 643,
      "sessions": 1274,
      "engagedSessions": 1066,
      "screenPageViews": 93,
      "eventCount": 24309,
      "engagementRate": 83.6734693877551
    },
    {
      "date": "May 17",
      "rawDate": "20260517",
      "activeUsers": 1061,
      "newUsers": 672,
      "sessions": 1417,
      "engagedSessions": 1148,
      "screenPageViews": 127,
      "eventCount": 29879,
      "engagementRate": 81.01623147494708
    }
  ],
  "appSectionUsage": {
    "period": "May 11-May 17, 2026",
    "metric": "GA4 active users and engaged time",
    "rows": [
      {
        "section": "Home",
        "definition": "Home/content browsing activity inferred from GA4 screen and path labels such as Home, On Demand, PDP, Player, Category, and Search.",
        "activeUsers": 1018,
        "sessions": 2995,
        "engagedSessions": 2544,
        "screenPageViews": 11652,
        "eventCount": 36298,
        "engagementRate": 84.9415692821369,
        "totalEngagementSeconds": 753851,
        "totalEngagementHours": 209.40305555555557,
        "avgEngagedMinutesPerUser": 12.342026850032743,
        "avgEngagedMinutesPerSession": 4.1950528658875905,
        "sharePct": 59.5
      },
      {
        "section": "En Espanol",
        "definition": "Spanish-language section activity inferred from GA4 labels containing En Espanol, Español, Espanol, Spanish, or matching paths.",
        "activeUsers": 10,
        "sessions": 10,
        "engagedSessions": 10,
        "screenPageViews": 21,
        "eventCount": 68,
        "engagementRate": 100.0,
        "totalEngagementSeconds": 544,
        "totalEngagementHours": 0.1511111111111111,
        "avgEngagedMinutesPerUser": 0.9066666666666666,
        "avgEngagedMinutesPerSession": 0.9066666666666666,
        "sharePct": 0.6
      },
      {
        "section": "Live TV",
        "definition": "Live TV activity inferred from GA4 Live screen/path labels.",
        "activeUsers": 505,
        "sessions": 1742,
        "engagedSessions": 1543,
        "screenPageViews": 3588,
        "eventCount": 50333,
        "engagementRate": 88.57634902411023,
        "totalEngagementSeconds": 4785103,
        "totalEngagementHours": 1329.1952777777778,
        "avgEngagedMinutesPerUser": 157.92419141914192,
        "avgEngagedMinutesPerSession": 45.78169728281669,
        "sharePct": 29.5
      },
      {
        "section": "My Stuff",
        "definition": "Saved or personal-list activity inferred from My Stuff, My List, Mylist, Watchlist, and Favorites labels.",
        "activeUsers": 55,
        "sessions": 140,
        "engagedSessions": 126,
        "screenPageViews": 377,
        "eventCount": 393,
        "engagementRate": 90.0,
        "totalEngagementSeconds": 717,
        "totalEngagementHours": 0.19916666666666666,
        "avgEngagedMinutesPerUser": 0.21727272727272728,
        "avgEngagedMinutesPerSession": 0.08535714285714285,
        "sharePct": 3.2
      },
      {
        "section": "Settings",
        "definition": "Settings/account activity inferred from Settings, Account, Profile, and Preferences labels.",
        "activeUsers": 122,
        "sessions": 208,
        "engagedSessions": 196,
        "screenPageViews": 401,
        "eventCount": 478,
        "engagementRate": 94.23076923076923,
        "totalEngagementSeconds": 2453,
        "totalEngagementHours": 0.6813888888888889,
        "avgEngagedMinutesPerUser": 0.33510928961748637,
        "avgEngagedMinutesPerSession": 0.19655448717948718,
        "sharePct": 7.1
      }
    ],
    "note": "This section uses the current GA4 screen/path labels to infer the five app navigation areas in the order Home, En Espanol, Live TV, My Stuff, and Settings. A user can appear in more than one section. For cleaner reporting, the app should send a stable app_section value with exactly these five section names."
  },
  "rokuAppEngagement": {
    "sourceLabel": "Roku App Engagement email report",
    "sourceDetail": "Roku app engagement is parsed from the latest Roku App Engagement PDF emailed from bdp_noreply@data.roku.com. It measures Roku app/channel-store usage and is shown separately from GA4 app/web metrics.",
    "reportPeriod": "8 days ago for 7 days Time Grain is day",
    "channelStoreCode": "us",
    "reportGenerated": "May 18, 2026 at 8:10 AM PDT",
    "dateLabels": [
      "Sun May 10",
      "Mon May 11",
      "Tue May 12",
      "Wed May 13",
      "Thu May 14",
      "Fri May 15",
      "Sat May 16"
    ],
    "metrics": {
      "newInstalls": 234,
      "uninstalls": 186,
      "netInstalls": 48,
      "cumulativeInstalls": 287586,
      "avgDailyViewers": 250,
      "avgMinPerViewer": 80.21,
      "totalHoursStreamed": 2341
    },
    "reportEmailDate": "2026-05-18T15:10:58+00:00",
    "attachmentFilename": "App_Engagement_2026-05-18T0810.pdf"
  },
  "visitSummary": {
    "source": "GA4 sessions on tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths.",
    "weekly": {
      "label": "Weekly visits",
      "range": "May 11-May 17, 2026",
      "sessions": 14024,
      "activeUsers": 7792,
      "engagedSessions": 11224,
      "previousRange": "May 4-May 10, 2026",
      "previousSessions": 9879,
      "deltaVsPreviousPct": 41.95768802510376,
      "comparisonLabel": "vs previous 7 days"
    },
    "monthly": {
      "label": "Monthly visits",
      "range": "Apr 20-May 17, 2026",
      "sessions": 54063,
      "activeUsers": 27481,
      "engagedSessions": 42513,
      "previousRange": "Mar 23-Apr 19, 2026",
      "previousSessions": 17330,
      "deltaVsPreviousPct": null,
      "comparisonLabel": "latest 28 days"
    },
    "note": "Visits are GA4 sessions, not unique people. Weekly visits use the latest 7 complete days and compare against the previous 7 complete days. Landing-page traffic remains acquisition-only and is not included here."
  },
  "manualAppleSalesUpdate": {
    "updatedAt": "2026-05-20T02:05:13.539727+00:00",
    "addedPayments": [
      {
        "date": "May 13",
        "rawDate": "20260513",
        "amount": 29.99,
        "count": 1,
        "description": "Apple App Store - Purchase Bundle 30",
        "source": "Apple App Store"
      },
      {
        "date": "May 18",
        "rawDate": "20260518",
        "amount": 29.99,
        "count": 1,
        "description": "Apple App Store - Purchase Bundle 30",
        "source": "Apple App Store"
      },
      {
        "date": "May 18",
        "rawDate": "20260518",
        "amount": 14.99,
        "count": 1,
        "description": "Apple App Store - Purchase HD 15",
        "source": "Apple App Store"
      }
    ],
    "source": "User-provided Apple App Store screenshots for May 12-May 18, 2026",
    "dedupeNote": "Existing dashboard had one undated Apple Bundle 30 sale from Apr 6-May 10; new screenshots are dated May 13 and May 18, so these were treated as new non-overlapping sales."
  },
  "googleAdsSummary": {
    "source": "Google Ads connector",
    "accountId": "4342267711",
    "customerClientId": "4342267711",
    "accountName": "Electric Entertainment",
    "period": "May 11-May 21, 2026",
    "campaignName": "PCSM - ElectricNow App Promotion - Android",
    "campaignId": "23836266606",
    "campaignType": "Android App Campaign",
    "status": "Enabled / Eligible",
    "impressions": 36923,
    "clicks": 1175,
    "ctrPct": 3.18,
    "cost": 176.44,
    "avgCpc": 0.15,
    "conversions": 349.0,
    "allConversions": 753.0,
    "conversionRatePct": 29.7,
    "costPerConversion": 0.51,
    "daily": [
      {
        "date": "2026-05-12",
        "campaignName": "PCSM - ElectricNow App Promotion - Android",
        "impressions": 1376,
        "clicks": 70,
        "ctrPct": 5.09,
        "cost": 7.91,
        "avgCpc": 0.11,
        "conversions": 27.0,
        "allConversions": 61.0,
        "conversionRatePct": 9.47,
        "costPerConversion": 0.29,
        "conversionValue": 27.0
      },
      {
        "date": "2026-05-13",
        "campaignName": "PCSM - ElectricNow App Promotion - Android",
        "impressions": 3833,
        "clicks": 137,
        "ctrPct": 3.57,
        "cost": 17.96,
        "avgCpc": 0.13,
        "conversions": 32.0,
        "allConversions": 83.0,
        "conversionRatePct": 5.72,
        "costPerConversion": 0.56,
        "conversionValue": 32.0
      },
      {
        "date": "2026-05-14",
        "campaignName": "PCSM - ElectricNow App Promotion - Android",
        "impressions": 3437,
        "clicks": 120,
        "ctrPct": 3.49,
        "cost": 12.86,
        "avgCpc": 0.11,
        "conversions": 41.0,
        "allConversions": 87.0,
        "conversionRatePct": 21.35,
        "costPerConversion": 0.31,
        "conversionValue": 41.0
      },
      {
        "date": "2026-05-15",
        "campaignName": "PCSM - ElectricNow App Promotion - Android",
        "impressions": 6090,
        "clicks": 151,
        "ctrPct": 2.48,
        "cost": 18.24,
        "avgCpc": 0.12,
        "conversions": 40.0,
        "allConversions": 94.0,
        "conversionRatePct": 16.88,
        "costPerConversion": 0.46,
        "conversionValue": 40.0
      },
      {
        "date": "2026-05-16",
        "campaignName": "PCSM - ElectricNow App Promotion - Android",
        "impressions": 6188,
        "clicks": 201,
        "ctrPct": 3.25,
        "cost": 29.14,
        "avgCpc": 0.14,
        "conversions": 46.0,
        "allConversions": 101.0,
        "conversionRatePct": 9.94,
        "costPerConversion": 0.63,
        "conversionValue": 46.0
      },
      {
        "date": "2026-05-17",
        "campaignName": "PCSM - ElectricNow App Promotion - Android",
        "impressions": 4517,
        "clicks": 142,
        "ctrPct": 3.14,
        "cost": 19.35,
        "avgCpc": 0.14,
        "conversions": 35.0,
        "allConversions": 72.0,
        "conversionRatePct": 8.08,
        "costPerConversion": 0.55,
        "conversionValue": 35.0
      },
      {
        "date": "2026-05-18",
        "campaignName": "PCSM - ElectricNow App Promotion - Android",
        "impressions": 4126,
        "clicks": 127,
        "ctrPct": 3.08,
        "cost": 22.38,
        "avgCpc": 0.18,
        "conversions": 40.0,
        "allConversions": 79.0,
        "conversionRatePct": 6.62,
        "costPerConversion": 0.56,
        "conversionValue": 40.0
      },
      {
        "date": "2026-05-19",
        "campaignName": "PCSM - ElectricNow App Promotion - Android",
        "impressions": 2716,
        "clicks": 71,
        "ctrPct": 2.61,
        "cost": 16.68,
        "avgCpc": 0.23,
        "conversions": 34.0,
        "allConversions": 71.0,
        "conversionRatePct": 7.17,
        "costPerConversion": 0.49,
        "conversionValue": 34.0
      },
      {
        "date": "2026-05-20",
        "campaignName": "PCSM - ElectricNow App Promotion - Android",
        "impressions": 2337,
        "clicks": 87,
        "ctrPct": 3.72,
        "cost": 14.85,
        "avgCpc": 0.17,
        "conversions": 24.0,
        "allConversions": 54.0,
        "conversionRatePct": 4.34,
        "costPerConversion": 0.62,
        "conversionValue": 24.0
      },
      {
        "date": "2026-05-21",
        "campaignName": "PCSM - ElectricNow App Promotion - Android",
        "impressions": 2303,
        "clicks": 69,
        "ctrPct": 3.0,
        "cost": 17.07,
        "avgCpc": 0.25,
        "conversions": 30.0,
        "allConversions": 51.0,
        "conversionRatePct": 6.76,
        "costPerConversion": 0.57,
        "conversionValue": 30.0
      }
    ],
    "deviceBreakout": [
      {
        "device": "MOBILE",
        "impressions": 30293,
        "clicks": 988,
        "ctrPct": 3.26,
        "cost": 149.6,
        "conversions": 292.0,
        "allConversions": 632.0,
        "costPerConversion": 0.51
      },
      {
        "device": "TABLET",
        "impressions": 6629,
        "clicks": 187,
        "ctrPct": 2.82,
        "cost": 26.82,
        "conversions": 57.0,
        "allConversions": 121.0,
        "costPerConversion": 0.47
      },
      {
        "device": "CONNECTED_TV",
        "impressions": 1,
        "clicks": 0,
        "ctrPct": 0.0,
        "cost": 0.01,
        "conversions": 0.0,
        "allConversions": 0.0,
        "costPerConversion": null
      }
    ],
    "conversionActions": [
      {
        "name": "electricnow-4fbb4 - com.electric.now (Android) First open",
        "conversions": 349.0,
        "allConversions": 391.0,
        "conversionValue": 349.0
      },
      {
        "name": "Android installs (all other apps)",
        "conversions": 0.0,
        "allConversions": 362.0,
        "conversionValue": 0.0
      }
    ],
    "plainEnglish": "Google Ads is now useful for judging paid Android app-campaign efficiency directly: it shows spend, clicks, installs/first-opens, conversion rate, and cost per conversion. This should sit beside GA4 viewing quality so we can see not only whether ads are buying installs, but whether those installs become viewers."
  },
  "adSuccessSummary": {
    "googleAds": {
      "period": "May 11-May 21, 2026",
      "campaignName": "PCSM - ElectricNow App Promotion - Android",
      "spend": 176.44,
      "impressions": 36923,
      "clicks": 1175,
      "ctrPct": 3.18,
      "avgCpc": 0.15,
      "firstOpenConversions": 349.0,
      "allConversions": 753.0,
      "conversionRatePct": 29.7,
      "costPerConversion": 0.51,
      "source": "Google Ads connector",
      "note": "Google Ads is now useful for judging paid Android app-campaign efficiency directly: it shows spend, clicks, installs/first-opens, conversion rate, and cost per conversion. This should sit beside GA4 viewing quality so we can see not only whether ads are buying installs, but whether those installs become viewers."
    }
  }
};

</script>
<script>
const ELECTRICNOW_ROOT = document.getElementById('electricnow-dashboard-embed') || document;
const $ = (selector) => ELECTRICNOW_ROOT.querySelector(selector);
let data = window.DASHBOARD_DATA || window.ELECTRICNOW_DASHBOARD_DATA;
const API_BASE = '__PORT_8000__'.startsWith('__') ? 'http://127.0.0.1:8000' : '__PORT_8000__';
const HOSTED_DATA_URL = window.DASHBOARD_DATA_URL || '';

const NOT_AVAILABLE = 'Not available';
function toFiniteNumber(value) {
  if (value === null || value === undefined || value === '') return null;
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  if (typeof value === 'string') {
    const cleaned = value.replace(/,/g, '').trim();
    if (!cleaned) return null;
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
  }
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}
const fmt = {
  number(value) {
    const n = toFiniteNumber(value);
    if (n === null) return NOT_AVAILABLE;
    if (Math.abs(n) >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (Math.abs(n) >= 1_000) return `${(n / 1_000).toFixed(n >= 10_000 ? 0 : 1)}K`;
    return n.toLocaleString();
  },
  percent(value) {
    const n = toFiniteNumber(value);
    if (n === null) return NOT_AVAILABLE;
    return `${n.toFixed(1)}%`;
  },
  minutes(value) {
    const n = toFiniteNumber(value);
    if (n === null) return NOT_AVAILABLE;
    return `${n.toFixed(1)} min`;
  },
  currency(value) {
    const n = toFiniteNumber(value);
    if (n === null) return NOT_AVAILABLE;
    return `$${n.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  },
  delta(value) {
    if (value === null || value === undefined || Number.isNaN(value)) return 'new';
    const sign = value > 0 ? '+' : '';
    return `${sign}${Number(value).toFixed(1)}%`;
  },
  points(value) {
    if (value === null || value === undefined || Number.isNaN(value)) return 'new';
    const sign = value > 0 ? '+' : '';
    return `${sign}${Number(value).toFixed(1)} pts`;
  },
  minuteDelta(value) {
    if (value === null || value === undefined || Number.isNaN(value)) return 'new';
    const sign = value > 0 ? '+' : '';
    return `${sign}${Number(value).toFixed(1)} min`;
  },
};

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

let selectedPeriod = 'currentWeek';

function periodLabel() {
  return data.periods[selectedPeriod]?.range || data.periods.currentWeek.range;
}

function deltaClass(value) {
  if (value === null || value === undefined || Number.isNaN(value)) return '';
  if (value > 0) return 'up';
  if (value < 0) return 'down';
  return '';
}

function valueForCard(card) {
  const value = selectedPeriod === 'weekToDate' ? (data.periodTotals.weekToDate[card.key] ?? card.current) : card.current;
  if (card.format === 'minutes') return fmt.minutes(value);
  return card.format === 'percent' ? fmt.percent(value) : fmt.number(value);
}

function deltaText(card, value) {
  if (card.deltaType === 'minutes') return fmt.minuteDelta(value);
  return card.deltaType === 'points' ? fmt.points(value) : fmt.delta(value);
}

function renderKpis() {
  const grid = $('#kpi-grid');
  const groups = data.scorecardGroups?.length
    ? data.scorecardGroups
    : [{ title: 'Weekly scorecard', eyebrow: 'Overview', definition: '', cards: data.scorecards }];
  grid.innerHTML = groups
    .map(
      (group) => `
        <section class="kpi-group" aria-label="${escapeHtml(group.title)}">
          <div class="kpi-group-header">
            <div>
              <p class="eyebrow">${escapeHtml(group.eyebrow || '')}</p>
              <h3>${escapeHtml(group.title)}</h3>
            </div>
            ${group.definition ? `<p>${escapeHtml(group.definition)}</p>` : ''}
          </div>
          <div class="kpi-group-grid">
            ${group.cards
              .map(
                (card) => `
        <article class="kpi-card" data-testid="card-kpi-${card.key}">
          <span>${card.label}</span>
          <strong>${valueForCard(card)}</strong>
          <div class="kpi-compare-grid" aria-label="${card.label} comparisons">
            <small>vs launch baseline</small>
            <em class="delta ${deltaClass(card.deltaVsLaunchPct)}">${deltaText(card, card.deltaVsLaunchPct)}</em>
            <small>vs previous 7 days</small>
            <em class="delta ${deltaClass(card.deltaVsPreviousPct)}">${deltaText(card, card.deltaVsPreviousPct)}</em>
          </div>
          ${card.context ? `<p>${card.context}</p>` : ''}
        </article>
      `,
              )
              .join('')}
          </div>
        </section>
      `,
    )
    .join('');
}

function renderVisitSummary() {
  const wrap = $('#visit-summary');
  if (!wrap) return;
  const summary = data.visitSummary;
  if (!summary?.weekly || !summary?.monthly) {
    wrap.innerHTML = '';
    wrap.hidden = true;
    return;
  }
  wrap.hidden = false;
  const cards = [summary.weekly, summary.monthly];
  wrap.innerHTML = `
    <div class="visit-strip-header">
      <p class="eyebrow">Visits</p>
      <h2>Weekly and monthly visits</h2>
      <p>${escapeHtml(summary.note || 'Visits are GA4 sessions.')}</p>
    </div>
    <div class="visit-card-grid">
      ${cards
        .map(
          (card) => `
            <article class="visit-card" data-testid="card-${escapeHtml(card.label).toLowerCase().replaceAll(' ', '-')}">
              <span>${escapeHtml(card.label)}</span>
              <strong>${fmt.number(card.sessions)}</strong>
              <div class="visit-card-meta">
                <small>${escapeHtml(card.range)}</small>
                <em class="delta ${deltaClass(card.deltaVsPreviousPct)}">${card.deltaVsPreviousPct === null || card.deltaVsPreviousPct === undefined ? escapeHtml(card.comparisonLabel || 'latest period') : `${deltaText({ deltaType: 'percent' }, card.deltaVsPreviousPct)} ${escapeHtml(card.comparisonLabel || '')}`}</em>
              </div>
              <p>${fmt.number(card.activeUsers)} active users · ${fmt.number(card.engagedSessions)} engaged sessions</p>
            </article>
          `,
        )
        .join('')}
    </div>
    <p class="visit-source">${escapeHtml(summary.source || '')}</p>
  `;
}

function linePath(points) {
  return points.map((p, i) => `${i ? 'L' : 'M'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
}

function areaPath(points, bottom) {
  if (!points.length) return '';
  return `${linePath(points)} L ${points.at(-1).x.toFixed(1)} ${bottom} L ${points[0].x.toFixed(1)} ${bottom} Z`;
}

function chartPoints(rows, key, width, height, pad, maxOverride = null) {
  const vals = rows.map((d) => Number(d[key] || 0));
  const max = maxOverride || Math.max(...vals, 1);
  const step = (width - pad.left - pad.right) / Math.max(rows.length - 1, 1);
  return rows.map((d, i) => ({
    x: pad.left + i * step,
    y: pad.top + (height - pad.top - pad.bottom) * (1 - Number(d[key] || 0) / max),
    value: Number(d[key] || 0),
    date: d.date,
  }));
}

function renderLineTrendChart(selector, rows) {
  const svg = $(selector);
  if (!svg || !rows?.length) return;
  const width = 820;
  const height = 300;
  const pad = { left: 38, right: 20, top: 24, bottom: 38 };
  const maxValue = Math.max(...rows.map((d) => Math.max(Number(d.activeUsers || 0), Number(d.engagedSessions || 0))), 1);
  const active = chartPoints(rows, 'activeUsers', width, height, pad, maxValue);
  const engaged = chartPoints(rows, 'engagedSessions', width, height, pad, maxValue);
  const tickStep = rows.length > 16 ? 7 : 2;
  const ticks = rows
    .filter((_, i) => i === 0 || i === rows.length - 1 || i % tickStep === 0)
    .map((d, i) => {
      const x = active[rows.indexOf(d)]?.x || pad.left;
      return `<text class="chart-label" x="${x}" y="${height - 8}" text-anchor="${i === 0 ? 'start' : 'middle'}">${d.date}</text>`;
    })
    .join('');
  svg.innerHTML = `
    <line class="axis" x1="${pad.left}" y1="${height - pad.bottom}" x2="${width - pad.right}" y2="${height - pad.bottom}" />
    <text class="chart-label" x="${pad.left}" y="${pad.top - 8}">${fmt.number(maxValue)}</text>
    <text class="chart-label" x="${pad.left}" y="${height - pad.bottom - 6}">0</text>
    <path class="area-fill" d="${areaPath(active, height - pad.bottom)}" />
    <path class="line-active" d="${linePath(active)}" />
    <path class="line-engaged" d="${linePath(engaged)}" />
    <text class="chart-end-label active-end" x="${Math.min(width - 64, active.at(-1).x + 8)}" y="${active.at(-1).y - 6}">${fmt.number(active.at(-1).value)}</text>
    <text class="chart-end-label engaged-end" x="${Math.min(width - 64, engaged.at(-1).x + 8)}" y="${engaged.at(-1).y + 14}">${fmt.number(engaged.at(-1).value)}</text>
    ${ticks}
  `;
}

function renderTrafficChart() {
  renderLineTrendChart('#traffic-chart', data.weeklyTrend || data.trend);
  renderLineTrendChart('#monthly-traffic-chart', data.monthlyTrend || data.trend);
}

function renderPurchaseChart() {
  const svg = $('#purchase-chart');
  const width = 420;
  const height = 160;
  const pad = { left: 22, right: 18, top: 18, bottom: 28 };
  const stripeRows = data.salesSummary?.dailyTrend;
  const rows = stripeRows?.length ? stripeRows : data.purchaseTrend;
  const metricKey = stripeRows?.length ? 'purchases' : 'in_app_purchase';
  const revenueKey = stripeRows?.length ? 'purchaseRevenue' : 'purchaseRevenue';
  const points = chartPoints(rows, metricKey, width, height, pad);
  const labeledPoints = points
    .map((p, i) => ({ ...p, revenue: Number(rows[i][revenueKey] || 0) }))
    .filter((p) => p.value > 0)
    .filter((_, i, all) => i === 0 || i === all.length - 1 || all.length <= 5);
  svg.innerHTML = `
    <line class="axis" x1="${pad.left}" y1="${height - pad.bottom}" x2="${width - pad.right}" y2="${height - pad.bottom}" />
    <path class="line-purchase" d="${linePath(points)}" />
    ${points.map((p) => `<circle cx="${p.x}" cy="${p.y}" r="${p.value ? 4 : 2}" fill="var(--warn)" />`).join('')}
    ${labeledPoints
      .map(
        (p) => `
          <text class="chart-label purchase-point-label" x="${p.x}" y="${Math.max(16, p.y - 12)}" text-anchor="middle">
            ${p.value} / ${fmt.currency(p.revenue)}
          </text>
        `,
      )
      .join('')}
    <text class="chart-label" x="${pad.left}" y="${height - 8}">${rows[0].date}</text>
    <text class="chart-label" x="${width - pad.right}" y="${height - 8}" text-anchor="end">${rows.at(-1).date}</text>
  `;
}

function renderPlainEnglish() {
  $('#generated-at').textContent = `Generated ${data.generatedAt}`;
  $('#source-label').textContent = data.sourceLabel;
  $('#insights-list').innerHTML = data.plainEnglishInsights
    .map((item, index) => `<li class="${index === 0 ? 'insight-overview' : ''}">${item}</li>`)
    .join('');
}

function renderPurchases() {
  const wrap = $('#purchase-summary');
  const sales = data.salesSummary;
  const yearToDate = sales.yearToDate || sales.lifetimeObserved || sales.baselineWindow;
  const monthToDate = sales.monthToDate || sales.recent12Days;
  const lastWeek = sales.lastWeek || sales.currentCompleteWeek;
  const thisWeek = sales.thisWeek || sales.weekToDate;
  const sourceLabel = sales.sourceLabel || 'Visible platform sales';
  const sourceBreakout = (sales.sourceBreakout || [])
    .filter((source) => source.purchases || source.purchaseRevenue)
    .map(
      (source) => `
        <li>
          <span>${escapeHtml(source.source)}</span>
          <strong>${fmt.number(source.purchases)} purchases / ${fmt.currency(source.purchaseRevenue)}</strong>
        </li>
      `,
    )
    .join('');
  const recentPaymentLine = (thisWeek?.payments || sales.recentPayments || [])
    .slice(0, 4)
    .map((payment) => `${escapeHtml(payment.source || sourceLabel)} ${escapeHtml(payment.date)} ${fmt.currency(payment.amount)}`)
    .join(' · ');
  $('#sales-summary').innerHTML = `
    <div class="sales-callout">
      <span>${escapeHtml(sourceLabel)} this year</span>
      <strong>${fmt.number(yearToDate.purchases)} purchases / ${fmt.currency(yearToDate.purchaseRevenue)}</strong>
      <p>${yearToDate.range}. This is visible sales from connected/reporting sources plus any manual snapshots. Apple App Store is included from the current manual screenshot; Google Play is not included yet.</p>
      ${yearToDate.developerRevShare ? `<p class="sales-net">Estimated net after platform fees visible here: ${fmt.currency(yearToDate.developerRevShare)}</p>` : ''}
      ${sourceBreakout ? `<ul class="sales-source-list">${sourceBreakout}</ul>` : ''}
    </div>
    <div class="sales-stat-grid">
      <div class="sales-stat">
        <span>Sales this month</span>
        <strong>${fmt.currency(monthToDate.purchaseRevenue)}</strong>
        <em>${monthToDate.range} · ${fmt.number(monthToDate.purchases)} purchases</em>
      </div>
      <div class="sales-stat">
        <span>Sales last week</span>
        <strong>${fmt.currency(lastWeek.purchaseRevenue)}</strong>
        <em>${lastWeek.range} · ${fmt.number(lastWeek.purchases)} purchases</em>
      </div>
      <div class="sales-stat baseline-set">
        <span>Sales this week</span>
        <strong>${fmt.currency(thisWeek.purchaseRevenue)}</strong>
        <em>${thisWeek.range} · ${fmt.number(thisWeek.purchases)} purchases</em>
      </div>
    </div>
    ${recentPaymentLine ? `<div class="sales-audit">
      <span>Most recent visible sales</span>
      <strong>${recentPaymentLine}</strong>
      <p>These are the latest sales visible through the sources currently connected, emailed, or manually snapshotted into the dashboard. They remain a partial sales view until Apple App Store is API-connected and Google Play sales are reconciled.</p>
    </div>` : ''}
    ${sales.sourceDetail ? `<p class="sales-source">${sales.sourceDetail}</p>` : ''}
    <p class="sales-note">${sales.note}</p>
  `;
  wrap.innerHTML = data.purchaseFunnel
    .map((row) => {
      const value = selectedPeriod === 'weekToDate' ? row.weekToDate : row.current;
      return `
        <div class="purchase-row">
          <span class="${row.tracked ? '' : 'not-tracked'}">${row.label}${row.note ? `<br><small>${row.note}</small>` : ''}</span>
          <strong>${fmt.number(value)}</strong>
        </div>
      `;
    })
    .join('');
}

function renderMetricList() {
  const live = data.liveTv;
  const keys = [
    ['activeUsers', 'Active users'],
    ['sessions', 'Sessions'],
    ['engagedSessions', 'Engaged sessions'],
    ['screenPageViews', 'Views'],
    ['eventCount', 'Events'],
  ];
  $('#live-summary').innerHTML = keys
    .map(([key, label]) => {
      const livePeriod = selectedPeriod === 'weekToDate' ? live.weekToDate : live.current;
      const value = fmt.number(livePeriod?.[key] || 0);
      const d = live.deltas[key];
      const delta = selectedPeriod === 'weekToDate' ? '' : `<em class="delta ${deltaClass(d)}">${fmt.delta(d)}</em>`;
      return `<div class="metric-row"><span>${label}</span><strong>${value} ${delta}</strong></div>`;
    })
    .join('');
}

function usageStat(label, value, detail = '') {
  // If callers already formatted the value (e.g. a minutes/percent string),
  // render it as-is. Only run fmt.number on raw numeric inputs so we never
  // double-format and accidentally produce "NaN".
  const display = typeof value === 'string' ? (value || NOT_AVAILABLE) : fmt.number(value);
  return `
    <article class="usage-stat">
      <span>${label}</span>
      <strong>${display}</strong>
      ${detail ? `<em>${detail}</em>` : ''}
    </article>
  `;
}

function renderUsagePlatformList(selector, rows) {
  const max = Math.max(...(rows || []).map((row) => row.activeUsers || 0), 1);
  $(selector).innerHTML = (rows || [])
    .map(
      (row) => `
        <article class="platform-share-card compact-card">
          <header>
            <div>
              <strong>${escapeHtml(row.platform)}</strong>
              <span>${fmt.number(row.activeUsers)} active users</span>
            </div>
            <b>${fmt.number(row.activeUsers)}</b>
          </header>
          <div class="share-track" aria-hidden="true">
            <div class="share-fill" style="width:${Math.max(5, ((row.activeUsers || 0) / max) * 100)}%"></div>
          </div>
          <p>${fmt.number(row.screenPageViews)} screen views · ${fmt.number(row.eventCount)} events</p>
        </article>
      `,
    )
    .join('');
}

function renderPlaybackList(selector, rows) {
  const max = Math.max(...(rows || []).map((row) => row.eventCount || 0), 1);
  $(selector).innerHTML = (rows || [])
    .map((row) => {
      const width = Math.max(3, ((row.eventCount || 0) / max) * 100);
      return `
        <div class="bar-row">
          <header><span>${escapeHtml(row.label)}</span><strong>${fmt.number(row.eventCount)}</strong></header>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
        </div>
      `;
    })
    .join('');
}

function renderContentUsage() {
  const usage = data.contentUsage;
  if (!usage) return;
  $('#content-usage-period').textContent = usage.period;
  $('#live-usage-note').textContent = usage.live.note;
  $('#ondemand-usage-note').textContent = usage.onDemand.note;
  $('#live-usage-cards').innerHTML = [
    usageStat('Live active users', usage.live.total.activeUsers),
    usageStat('Live screen views', usage.live.total.screenPageViews),
    usageStat('Live play events', usage.live.playback.play || 0),
    usageStat('Live video starts', usage.live.playback.video_start || 0),
  ].join('');
  $('#ondemand-usage-cards').innerHTML = [
    usageStat('On Demand active users', usage.onDemand.total.activeUsers),
    usageStat('On Demand screen views', usage.onDemand.total.screenPageViews),
    usageStat('On Demand events', usage.onDemand.total.eventCount),
  ].join('');
  renderUsagePlatformList('#live-platform-breakdown', usage.live.platforms);
  renderUsagePlatformList('#ondemand-platform-breakdown', usage.onDemand.platforms);
  renderPlaybackList('#live-playback-list', usage.live.playbackRows);
  renderTable(
    '#live-channel-table',
    ['#', 'Live channel', 'Play events', 'Active users'],
    (usage.live.topChannels || []).slice(0, 10),
    (row) => [
      `<strong>${row.rank}</strong>`,
      `<strong>${escapeHtml(row.title)}</strong>`,
      fmt.number(row.plays),
      fmt.number(row.activeUsers),
    ],
  );
}

function renderAppSectionUsage() {
  const usage = data.appSectionUsage;
  if (!usage) return;
  $('#section-usage-period').textContent = usage.period || data.periods.currentWeek.range;
  $('#section-usage-note').textContent = usage.note || '';
  const maxUsers = Math.max(...(usage.rows || []).map((row) => row.activeUsers || 0), 1);
  $('#section-usage-list').innerHTML = (usage.rows || [])
    .map((row) => {
      const width = Math.max(4, ((row.activeUsers || 0) / maxUsers) * 100);
      return `
        <article class="section-usage-card">
          <header>
            <div>
              <span>${escapeHtml(row.section)}</span>
              <strong>${fmt.number(row.activeUsers)} users</strong>
            </div>
            <b>${fmt.minutes(row.avgEngagedMinutesPerUser)} / user</b>
          </header>
          <div class="share-track" aria-hidden="true">
            <div class="share-fill" style="width:${width}%"></div>
          </div>
          <div class="section-metrics">
            <em>${fmt.number(row.sessions)} sessions</em>
            <em>${fmt.number(row.screenPageViews)} views</em>
            <em>${fmt.minutes(row.avgEngagedMinutesPerSession)} / session</em>
            <em>${fmt.number(row.eventCount)} events</em>
          </div>
          <p>${escapeHtml(row.definition)}</p>
        </article>
      `;
    })
    .join('');
}

function renderRokuAppEngagement() {
  const report = data.rokuAppEngagement;
  const section = $('#roku-app');
  if (!section || !report || !report.metrics) {
    if (section) section.hidden = true;
    return;
  }
  section.hidden = false;
  const metrics = report.metrics;
  const dateRange = report.dateLabels?.length ? `${report.dateLabels[0]}-${report.dateLabels.at(-1)}` : report.reportPeriod;
  const reportRange = dateRange || report.reportPeriod || 'the latest Roku report';
  $('#roku-app-period').textContent = dateRange || 'Latest Roku report';
  $('#roku-app-note').textContent =
    `${report.sourceDetail || 'Roku app metrics are parsed from the latest emailed Roku App Engagement PDF.'} Report generated ${report.reportGenerated || report.reportEmailDate || 'by Roku'}.`;
  const cards = [
    ['New installs', fmt.number(metrics.newInstalls), `Roku app installs for ${reportRange}`],
    ['Uninstalls', fmt.number(metrics.uninstalls), `Roku app uninstalls for ${reportRange}`],
    ['Net installs', fmt.number(metrics.netInstalls), `Installs minus uninstalls for ${reportRange}`],
    ['Avg daily viewers', fmt.number(metrics.avgDailyViewers), `Average Roku viewers per day for ${reportRange}`],
    ['Avg min per viewer', fmt.minutes(metrics.avgMinPerViewer), `Average viewing time per Roku viewer for ${reportRange}`],
    ['Total hours streamed', fmt.number(metrics.totalHoursStreamed), `Total Roku app streaming hours for ${reportRange}`],
  ];
  $('#roku-app-summary').innerHTML = cards
    .map(([label, value, detail]) => usageStat(label, value, detail))
    .join('');
}

function barRows(selector, events, accent = false) {
  const rows = events
    .map((name) => data.eventCards.find((e) => e.event === name))
    .filter(Boolean);
  const max = Math.max(...rows.map((r) => (selectedPeriod === 'weekToDate' ? r.weekToDate : r.current)), 1);
  $(selector).innerHTML = rows
    .map((r) => {
      const value = selectedPeriod === 'weekToDate' ? r.weekToDate : r.current;
      const width = Math.max(3, (value / max) * 100);
      return `
        <div class="bar-row">
          <header><span>${r.label}</span><strong>${fmt.number(value)}</strong></header>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%; ${accent ? 'background:linear-gradient(90deg,var(--warn),var(--primary-2));' : ''}"></div></div>
        </div>
      `;
    })
    .join('');
}

function renderEventLists() {
  barRows('#funnel-list', ['application_install', 'first_open', 'app_open', 'play', 'video_start', 'video_play']);
  barRows('#ad-list', ['ads_request', 'ads_impression', 'ads_loaded', 'ads_started', 'ads_complete', 'ad_complete'], true);
}

function renderTable(selector, headers, rows, mapper) {
  $(selector).innerHTML = `
    <table>
      <thead><tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${mapper(row).map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
  `;
}

function renderPlatformMix() {
  const mix = data.platformMix;
  const max = Math.max(...mix.groups.filter((row) => row.tracked !== false).map((row) => row.sharePct || 0), 1);
  $('#platform-mix-period').textContent = mix.period;
  $('#platform-note').textContent = mix.note;
  $('#platform-mix').innerHTML = `
    <div class="platform-total">
      <span>${mix.metric} grouped by stream/platform</span>
      <strong>${fmt.number(mix.totalViewers)}</strong>
      <em>viewer-platform records</em>
    </div>
    <div class="platform-share-list">
      ${mix.groups
        .map(
          (row) => `
            <article class="platform-share-card ${row.tracked === false ? 'is-untracked' : ''}">
              <header>
                <div>
                  <strong>${row.platform}</strong>
                  <span>${row.category ? `${escapeHtml(row.category)} · ` : ''}${row.tracked === false ? 'not separately tracked yet' : `${fmt.number(row.activeUsers)} active users`}</span>
                </div>
                <b>${row.tracked === false ? 'TBD' : fmt.percent(row.sharePct)}</b>
              </header>
              ${
                row.tracked === false
                  ? ''
                  : `<div class="share-track" aria-hidden="true">
                      <div class="share-fill" style="width:${Math.max(5, ((row.sharePct || 0) / max) * 100)}%"></div>
                    </div>`
              }
              <p>${row.detail}</p>
            </article>
          `,
        )
        .join('')}
    </div>
    <div class="coming-platforms">
      <span>Coming soon</span>
      ${mix.comingSoon.map((item) => `<em>${item}</em>`).join('')}
    </div>
  `;
}

function renderTitleTables() {
  const viewership = data.titleViewership;
  if (!viewership) return;
  $('#top-title-period').textContent = viewership.period;
  $('#top-title-note').textContent = viewership.note;
  renderTable(
    '#top-titles-table',
    ['#', 'Program / show', 'Example titles rolled in', 'Play events', 'Total viewers'],
    viewership.topPrograms || viewership.topVideoTitles,
    (row) => [
      `<strong>${row.rank}</strong>`,
      `<strong>${escapeHtml(row.program || row.title)}</strong><br><span>${row.rawLabelCount ? `${row.rawLabelCount} GA4 labels grouped` : 'Raw GA4 title'}</span>`,
      row.examples?.length ? `<span>${row.examples.map(escapeHtml).join('<br>')}</span>` : row.group ? `<span>${escapeHtml(row.group)}</span>` : '<span>Not set</span>',
      fmt.number(row.plays),
      fmt.number(row.activeUsers),
    ],
  );
  $('#top-video-period').textContent = viewership.period;
  $('#top-video-note').textContent =
    'Individual video titles are ranked by GA4 play events, regardless of collection. Collection/show is the best available parent label inferred from GA4 channel_title or grouped title labels; blanks mean GA4 did not provide a reliable parent collection for that video.';
  renderTable(
    '#top-videos-table',
    ['#', 'Collection / show', 'Individual video', 'Play events', 'Total viewers'],
    viewership.topVideoTitles || [],
    (row) => [
      `<strong>${row.rank}</strong>`,
      row.group ? `<strong>${escapeHtml(row.group)}</strong>` : '<span>Not set in GA4</span>',
      `<strong>${escapeHtml(row.title)}</strong>`,
      fmt.number(row.plays),
      fmt.number(row.activeUsers),
    ],
  );
}

function renderTables() {
  const surface = data.surfaceBreakout?.currentWeek;
  if (surface) {
    $('#surface-note').textContent = surface.note;
    renderTable(
      '#surface-table',
      ['Surface', 'Users', 'Sessions', 'Eng. rate', 'Avg time/user'],
      surface.rows || [],
      (row) => [
        `<strong>${escapeHtml(row.surface)}</strong><br><span>${escapeHtml(row.streamName)} · ${escapeHtml(row.streamId)}</span>`,
        fmt.number(row.activeUsers),
        fmt.number(row.sessions),
        fmt.percent(row.engagementRate),
        fmt.minutes(row.avgEngagedMinutesPerUser),
      ],
    );
  }
  const platformTime = data.platformTime?.currentWeek;
  if (platformTime) {
    $('#platform-time-note').textContent =
      'Per user = total weekly engaged time divided by active users. Per session = engaged time divided by visits/sessions.';
    renderTable(
      '#platform-time-table',
      ['Platform', 'Avg time per user', 'Avg time per session', 'Active users'],
      platformTime.platformBreakout || [],
      (p) => [
        `<strong>${escapeHtml(p.platform)}</strong>`,
        fmt.minutes(p.avgEngagedMinutesPerUser),
        fmt.minutes(p.avgEngagedMinutesPerSession),
        fmt.number(p.activeUsers),
      ],
    );
  }
  renderTable(
    '#platform-table',
    ['Platform', 'Active users', 'Sessions', 'Eng. rate'],
    data.platforms,
    (p) => [
      `<strong>${p.platform}</strong>`,
      `<strong>${fmt.number(p.current.activeUsers)}</strong> <em class="delta ${deltaClass(p.activeUsersDeltaPct)}">${fmt.delta(p.activeUsersDeltaPct)}</em>`,
      fmt.number(p.current.sessions),
      fmt.percent(p.engagementRateCurrent),
    ],
  );
  renderTable(
    '#acquisition-table',
    ['Source / medium', 'Users', 'Sessions', 'Eng. rate'],
    data.acquisition,
    (r) => [`<strong>${r.sourceMedium}</strong>`, fmt.number(r.activeUsers), fmt.number(r.sessions), fmt.percent(r.engagementRate)],
  );
  renderTable(
    '#content-table',
    ['Path / screen', 'Users', 'Views', 'Events'],
    data.topPages,
    (r) => [
      `<strong>${r.path}</strong><br><span>${r.screen}</span>`,
      fmt.number(r.activeUsers),
      fmt.number(r.views),
      fmt.number(r.eventCount),
    ],
  );
}

function renderGaps() {
  $('#gaps-list').innerHTML = data.instrumentationGaps.map((gap) => `<li>${gap}</li>`).join('');
}

function deviceLabel(device) {
  const map = {
    MOBILE: 'Mobile',
    TABLET: 'Tablet',
    CONNECTED_TV: 'Connected TV',
    DESKTOP: 'Desktop',
    OTHER: 'Other',
  };
  return map[device] || String(device || '').replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

function renderGoogleAds() {
  const section = $('#google-ads');
  const summary = data.googleAdsSummary;
  if (!section) return;
  if (!summary || typeof summary !== 'object') {
    section.hidden = true;
    return;
  }
  section.hidden = false;

  $('#google-ads-period').textContent = summary.period || data.periods.currentWeek.range;
  const sourceLabel = summary.source || 'Google Ads connector';
  const accountBits = [summary.accountName, summary.accountId ? `account ${summary.accountId}` : null].filter(Boolean).join(' \u2014 ');
  $('#google-ads-note').textContent =
    `${sourceLabel}${accountBits ? ` (${accountBits})` : ''}. This is Google Ads Android App Campaign data \u2014 pair it with GA4 viewing quality (above) to judge whether paid installs become viewers.`;

  const campaignCard = `
    <div class="google-ads-campaign-card">
      <div>
        <span>Campaign</span>
        <strong>${escapeHtml(summary.campaignName || 'Untitled campaign')}</strong>
        <em>${escapeHtml(summary.campaignType || 'App Campaign')} \u00b7 ${escapeHtml(summary.status || 'Status unknown')}</em>
      </div>
      <div class="google-ads-campaign-meta">
        <span>Period</span>
        <strong>${escapeHtml(summary.period || data.periods.currentWeek.range)}</strong>
      </div>
    </div>
  `;
  $('#google-ads-campaign').innerHTML = campaignCard;

  const kpiCards = [
    usageStat('Spend', fmt.currency(summary.cost), 'Total Google Ads spend for the period'),
    usageStat('Impressions', fmt.number(summary.impressions), 'Ad impressions served'),
    usageStat('Clicks', fmt.number(summary.clicks), 'Clicks to install / app store'),
    usageStat('CTR', fmt.percent(summary.ctrPct), 'Clicks divided by impressions'),
    usageStat('Avg CPC', fmt.currency(summary.avgCpc), 'Average cost per click'),
    usageStat('First-open conversions', fmt.number(summary.conversions), 'Android first opens attributed to the campaign'),
    usageStat('Conversion rate', fmt.percent(summary.conversionRatePct), 'First opens divided by clicks'),
    usageStat('Cost / conversion', fmt.currency(summary.costPerConversion), 'Spend divided by first-open conversions'),
    usageStat('All conversions', fmt.number(summary.allConversions), 'Includes secondary install / event conversions'),
  ];
  $('#google-ads-kpis').innerHTML = kpiCards.join('');

  const devices = Array.isArray(summary.deviceBreakout) ? summary.deviceBreakout : [];
  const totalImpressions = devices.reduce((sum, row) => sum + (toFiniteNumber(row.impressions) || 0), 0) || 1;
  $('#google-ads-devices').innerHTML = devices
    .map((row) => {
      const impressions = toFiniteNumber(row.impressions) || 0;
      const share = (impressions / totalImpressions) * 100;
      const width = Math.max(3, share);
      return `
        <div class="google-ads-device-row">
          <header>
            <span>${escapeHtml(deviceLabel(row.device))}</span>
            <strong>${fmt.number(row.impressions)} imp</strong>
          </header>
          <div class="share-track" aria-hidden="true">
            <div class="share-fill" style="width:${width.toFixed(1)}%"></div>
          </div>
          <div class="google-ads-device-metrics">
            <em>${fmt.number(row.clicks)} clicks</em>
            <em>${fmt.percent(row.ctrPct)} CTR</em>
            <em>${fmt.currency(row.cost)} spend</em>
            <em>${fmt.number(row.conversions)} conv</em>
            <em>${row.costPerConversion == null ? 'No conv' : fmt.currency(row.costPerConversion) + ' / conv'}</em>
          </div>
        </div>
      `;
    })
    .join('');

  const actions = Array.isArray(summary.conversionActions) ? summary.conversionActions : [];
  $('#google-ads-actions').innerHTML = actions
    .map((row) => `
      <div class="google-ads-action-row">
        <header>
          <span>${escapeHtml(row.name || 'Conversion action')}</span>
          <strong>${fmt.number(row.conversions)}</strong>
        </header>
        <em>${fmt.number(row.allConversions)} all-conversions \u00b7 ${fmt.number(row.conversionValue)} value</em>
      </div>
    `)
    .join('');

  const plain = summary.plainEnglish ||
    'Google Ads is the spend-side picture for the Android App Campaign. Read it next to GA4 to see whether paid installs become viewers, not just installers.';
  $('#google-ads-plain').textContent = plain;
}

function renderAll() {
  $('#trend-period').textContent =
    selectedPeriod === 'weekToDate' ? data.periods.weekToDate.range : data.periods.currentWeek.range;
  renderVisitSummary();
  renderKpis();
  renderPlainEnglish();
  renderTrafficChart();
  renderPurchaseChart();
  renderPurchases();
  renderMetricList();
  renderEventLists();
  renderPlatformMix();
  renderAppSectionUsage();
  renderRokuAppEngagement();
  renderContentUsage();
  renderTables();
  renderTitleTables();
  renderGaps();
  renderGoogleAds();
}

function setPeriodOptions() {
  $('#period-select option[value="currentWeek"]').textContent =
    `${data.periods.currentWeek.range} usage`;
  $('#period-select option[value="weekToDate"]').textContent = `${data.periods.weekToDate.range} watch`;
}

async function loadCurrentData() {
  const status = $('#refresh-status');
  if (HOSTED_DATA_URL) {
    try {
      const separator = HOSTED_DATA_URL.includes('?') ? '&' : '?';
      const response = await fetch(`${HOSTED_DATA_URL}${separator}v=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Hosted data failed (${response.status})`);
      data = await response.json();
      setPeriodOptions();
      renderAll();
      status.textContent = `Updated ${data.generatedAt}`;
    } catch (error) {
      status.textContent = data ? `Using last loaded data` : 'Data load failed';
      console.error(error);
    }
    return;
  }
  try {
    const response = await fetch(`${API_BASE}/api/current`, { cache: 'no-store' });
    if (!response.ok) return;
    data = await response.json();
    setPeriodOptions();
    renderAll();
    status.textContent = `Updated ${data.generatedAt}`;
  } catch (error) {
    console.info('Using bundled dashboard data.');
  }
}

$('#period-select').addEventListener('change', (event) => {
  selectedPeriod = event.target.value;
  renderAll();
});

const refreshButton = $('#refresh-data');
if (refreshButton) {
  refreshButton.addEventListener('click', async () => {
    const button = $('#refresh-data');
    const status = $('#refresh-status');
    button.disabled = true;
    button.textContent = 'Updating...';
    status.textContent = HOSTED_DATA_URL ? 'Loading hosted data' : 'Pulling GA4';
    try {
      if (HOSTED_DATA_URL) {
        await loadCurrentData();
        return;
      }
      const response = await fetch(`${API_BASE}/api/refresh`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Refresh failed (${response.status})`);
      data = await response.json();
      selectedPeriod = 'currentWeek';
      $('#period-select').value = selectedPeriod;
      setPeriodOptions();
      renderAll();
      status.textContent = `Updated ${data.generatedAt}`;
    } catch (error) {
      status.textContent = 'Update failed';
      console.error(error);
    } finally {
      button.disabled = false;
      button.textContent = 'Update data';
    }
  });
}

$('#plain-toggle').addEventListener('click', () => {
  const panel = $('#plain-panel');
  const button = $('#plain-toggle');
  panel.classList.toggle('is-visible');
  button.classList.toggle('is-active');
});

if (data) {
  renderAll();
}
loadCurrentData();

</script>
<!-- End ElectricNOW Performance Dashboard embed. -->