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
#electricnow-dashboard-embed .plain-panel:focus {
  outline: 2px solid rgba(104, 183, 255, 0.75);
  outline-offset: 4px;
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
#electricnow-dashboard-embed .delta.baseline-unavailable {
  color: var(--muted);
  font-weight: 600;
  font-style: italic;
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
#electricnow-dashboard-embed .chart-note {
  margin: 10px 0 0;
  padding: 10px 12px;
  border-left: 3px solid var(--warn);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
}
#electricnow-dashboard-embed .chart-note:empty {
  display: none;
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
#electricnow-dashboard-embed .plain-panel.is-visible {
    margin: 18px 0 22px;
    border-color: rgba(104, 183, 255, 0.62);
    background:
      linear-gradient(135deg, rgba(47, 129, 215, 0.22), rgba(10, 21, 36, 0.96) 48%),
      #0a1524 !important;
    box-shadow: 0 0 0 1px rgba(104, 183, 255, 0.16), 0 18px 48px rgba(0, 0, 0, 0.28);
    scroll-margin-top: 14px;
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
#electricnow-dashboard-embed /* US audience geography section */
.us-geo-map-wrap {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: rgba(15, 33, 56, 0.5);
  padding: 16px;
  margin: 14px 0;
}
#electricnow-dashboard-embed .us-geo-map svg {
  width: 100%;
  height: auto;
  display: block;
}
#electricnow-dashboard-embed .us-geo-map-bg {
  fill: rgba(10, 21, 36, 0.6);
  stroke: var(--border);
  stroke-width: 0.3;
}
#electricnow-dashboard-embed .us-geo-bubble circle {
  transition: opacity 0.15s ease;
}
#electricnow-dashboard-embed .us-geo-bubble:hover circle {
  opacity: 0.85;
  stroke-width: 0.6;
}
#electricnow-dashboard-embed .us-geo-bubble-label {
  fill: var(--text);
  font-family: var(--font-ui);
  font-size: 2px;
  font-weight: 700;
  pointer-events: none;
}
#electricnow-dashboard-embed .us-geo-map-caption {
  color: var(--faint);
  font-size: 12px;
  margin: 10px 2px 0;
}
#electricnow-dashboard-embed .us-geo-tables {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 14px;
}
@media (max-width: 900px) {
#electricnow-dashboard-embed .us-geo-tables {
    grid-template-columns: 1fr;
  }


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
          <a href="#tvod-title-revenue" data-testid="nav-tvod-title-revenue">Registered users</a>
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
          <button class="ghost-button" type="button" id="plain-toggle" data-testid="button-toggle-plain" aria-controls="plain-panel" aria-expanded="false">Plain English</button>
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

        <section class="plain-panel" id="plain-panel" aria-labelledby="plain-title" tabindex="-1">
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
              <span><i class="legend-swatch legend-green"></i>Green line: app sessions (daily)</span>
            </div>
            <p class="chart-note" id="trend-note"></p>
            <h3>Past seven days</h3>
            <div class="chart-wrap">
              <svg id="traffic-chart" viewBox="0 0 820 300" role="img" aria-label="Daily traffic and engagement trend" data-testid="chart-traffic"></svg>
            </div>
            <h3>Past month</h3>
            <div class="chart-wrap">
              <svg id="monthly-traffic-chart" viewBox="0 0 820 300" role="img" aria-label="Monthly app traffic and engagement trend" data-testid="chart-monthly-traffic"></svg>
            </div>
            <h3>Year to date (weekly)</h3>
            <p class="chart-note" id="ytd-trend-note"></p>
            <div class="chart-wrap">
              <svg id="ytd-traffic-chart" viewBox="0 0 820 300" role="img" aria-label="Year-to-date weekly app traffic and engagement trend" data-testid="chart-ytd-traffic"></svg>
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
              <p class="eyebrow">App screen activity and tracking health</p>
              <h2 id="content-title">Where people are active in the app</h2>
            </div>
          </div>
          <p id="content-readout" class="panel-note"></p>
          <p id="content-note" class="panel-note"></p>
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

        <section class="panel" id="tvod-title-revenue" aria-labelledby="tvod-title-revenue-title">
          <div class="panel-header">
            <div>
              <p class="eyebrow" id="tvod-title-revenue-eyebrow">TVOD title revenue &amp; registered users</p>
              <h2 id="tvod-title-revenue-title">TVOD Title Revenue &amp; Registered Users</h2>
            </div>
            <span class="period-chip" id="tvod-title-revenue-period">Cumulative since launch</span>
          </div>
          <p id="tvod-title-revenue-note" class="panel-note"></p>
          <div class="usage-card-grid" id="tvod-title-revenue-summary" data-testid="section-tvod-title-revenue-summary"></div>
          <div id="tvod-title-revenue-table" class="table-wrap title-table" data-testid="table-tvod-title-revenue"></div>
          <h3>Net revenue by channel</h3>
          <div id="tvod-title-revenue-channels" class="table-wrap" data-testid="table-tvod-title-revenue-channels"></div>
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
window.DASHBOARD_DATA = {"generatedAt": "2026-07-27 13:06 PDT", "property": "properties/497892271", "sourceLabel": "Internal GA4 pull, property 497892271", "periods": {"launchBaseline": {"label": "Launch baseline", "range": "Apr 13-Apr 19, 2026", "start": "2026-04-13", "end": "2026-04-19"}, "previousWeek": {"label": "Previous 7 days", "range": "Jul 13-Jul 19, 2026", "start": "2026-07-13", "end": "2026-07-19"}, "baseline": {"label": "Previous 7 days", "range": "Jul 13-Jul 19, 2026", "start": "2026-07-13", "end": "2026-07-19"}, "currentWeek": {"label": "Latest 7 complete days", "range": "Jul 20-Jul 26, 2026", "start": "2026-07-20", "end": "2026-07-26"}, "weekToDate": {"label": "Current complete week", "range": "Jul 20-Jul 26, 2026", "start": "2026-07-20", "end": "2026-07-26", "note": "Complete Monday-Sunday GA4 reporting week pulled on Jul 27, 2026 from property 497892271."}}, "periodTotals": {"launchBaseline": {"activeUsers": 8739, "newUsers": 8011, "sessions": 13421, "engagedSessions": 7960, "engagementRate": 59.310036509947096, "screenPageViews": 39326, "eventCount": 705015, "purchaseRevenue": 89.94999999999999, "userEngagementDuration": 13165345}, "previousWeek": {"activeUsers": 3498, "newUsers": 1067, "sessions": 9730, "engagedSessions": 7507, "engagementRate": 77.15313463514903, "screenPageViews": 31964, "eventCount": 1032439, "userEngagementDuration": 20650740, "purchaseRevenue": 37.57}, "baseline": {"activeUsers": 3498, "newUsers": 1067, "sessions": 9730, "engagedSessions": 7507, "engagementRate": 77.15313463514903, "screenPageViews": 31964, "eventCount": 1032439, "userEngagementDuration": 20650740, "purchaseRevenue": 37.57}, "currentWeek": {"activeUsers": 3540, "newUsers": 1126, "sessions": 10102, "engagedSessions": 7305, "engagementRate": 72.31241338348842, "screenPageViews": 32979, "eventCount": 1110590, "userEngagementDuration": 20739211, "purchaseRevenue": 37.57, "note": "Fresh complete-week GA4 pull for Jul 20-Jul 26, 2026 (property 497892271)."}, "weekToDate": {"activeUsers": 3540, "newUsers": 1126, "sessions": 10102, "engagedSessions": 7305, "engagementRate": 72.31241338348842, "screenPageViews": 32979, "eventCount": 1110590, "userEngagementDuration": 20739211, "purchaseRevenue": 37.57, "note": "Fresh complete-week GA4 pull for Jul 20-Jul 26, 2026 (property 497892271)."}}, "scorecards": [{"key": "platformActiveUsers", "label": "Platform active users", "baseline": 5282, "launchBaseline": 8710, "previousWeek": 3349, "current": 3377, "deltaPct": 0.83607, "deltaVsLaunchPct": -61.228473, "deltaVsPreviousPct": 0.83607, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}, {"key": "platformSessions", "label": "Platform sessions", "baseline": 10925, "launchBaseline": 13323, "previousWeek": 9415, "current": 9780, "deltaPct": 3.876792, "deltaVsLaunchPct": -26.59311, "deltaVsPreviousPct": 3.876792, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}, {"key": "viewingEventUsers", "label": "Viewing event users", "baseline": 2410, "launchBaseline": 1152, "previousWeek": 1726, "current": 1349, "deltaPct": -21.84241, "deltaVsLaunchPct": 17.100694, "deltaVsPreviousPct": -21.84241, "deltaType": "percent", "format": "number", "context": "Users who triggered on-demand video_start or Live play events. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "totalEngagementHours", "label": "Total engaged hours", "baseline": 4792.675, "launchBaseline": 3652.9975, "previousWeek": 5735.596111, "current": 5760.891944, "deltaPct": 0.441032, "deltaVsLaunchPct": 57.703145, "deltaVsPreviousPct": 0.441032, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}, {"key": "avgEngagedMinutesPerUser", "label": "Avg time per user", "baseline": 48.938138, "launchBaseline": 25.164161882893225, "previousWeek": 102.757768, "current": 102.355202, "deltaPct": -0.391763, "deltaVsLaunchPct": 306.749894, "deltaVsPreviousPct": -0.391763, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}, {"key": "landingPageUsers", "label": "Landing-page users", "baseline": 686, "launchBaseline": 1045, "previousWeek": 686, "current": 163, "deltaPct": -76.239067, "deltaVsLaunchPct": -84.401914, "deltaVsPreviousPct": -76.239067, "deltaType": "percent", "format": "number", "context": "Web acquisition: users whose entry/page path contains “landing” (GA4 unifiedPageScreen, property 497892271). Week of Jun 29-Jul 5 vs the prior week Jun 22-28. This is acquisition traffic, not platform audience. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "comparisonUnavailable": false, "stale": true}, {"key": "devicesPageUsers", "label": "Devices-page users", "baseline": 139, "launchBaseline": 2028, "previousWeek": 139, "current": 24, "deltaPct": -82.733813, "deltaVsLaunchPct": -98.816568, "deltaVsPreviousPct": -82.733813, "deltaType": "percent", "format": "number", "context": "Web acquisition: users whose page path contains “devices” (GA4 unifiedPageScreen, property 497892271). Week of Jun 29-Jul 5 vs the prior week Jun 22-28. Acquisition traffic, not platform audience. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "comparisonUnavailable": false, "stale": true}, {"key": "paidSocialUsers", "label": "Paid social users", "baseline": 639, "launchBaseline": 4441, "previousWeek": 639, "current": 380, "deltaPct": -40.532081, "deltaVsLaunchPct": -91.443369, "deltaVsPreviousPct": -40.532081, "deltaType": "percent", "format": "number", "context": "Web acquisition: users from GA4 session source/medium containing Facebook, Instagram, or Meta (property 497892271). Week of Jun 29-Jul 5 vs the prior week Jun 22-28. Acquisition traffic, not platform audience. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "comparisonUnavailable": false, "stale": true}, {"key": "appActiveUsers", "label": "App stream active users", "baseline": 5383, "launchBaseline": 1547, "previousWeek": 5383, "current": 4800, "deltaPct": -10.830392, "deltaVsLaunchPct": 210.277957, "deltaVsPreviousPct": -10.830392, "deltaType": "percent", "format": "number", "context": "People using the Apple/iOS or Android app streams (GA4 property 497892271, streams 12950551103 + 12982344897); Apple TV is not yet split from the Apple/iOS stream. Stream-level app-usage for the week of Jun 8-14 compared with the prior week Jun 1-7. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}, {"key": "appSessions", "label": "App stream sessions", "baseline": 8405, "launchBaseline": 2889, "previousWeek": 8405, "current": 8029, "deltaPct": -4.473528, "deltaVsLaunchPct": 177.916234, "deltaVsPreviousPct": -4.473528, "deltaType": "percent", "format": "number", "context": "GA4 sessions on the Apple/iOS and Android app streams (property 497892271, streams 12950551103 + 12982344897). Stream-level week of Jun 8-14 compared with the prior week Jun 1-7. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}, {"key": "appEngagementRate", "label": "App stream engagement rate", "baseline": 78.37001784651993, "launchBaseline": 59.70126848307439, "previousWeek": 78.37001784651993, "current": 76.43542159671192, "deltaPct": -1.934596, "deltaVsLaunchPct": 16.734153, "deltaVsPreviousPct": -1.934596, "deltaType": "points", "format": "percent", "context": "Engaged app-stream sessions divided by app-stream sessions (GA4 property 497892271, streams 12950551103 + 12982344897). Stream-level week of Jun 8-14 compared with the prior week Jun 1-7; the change is shown in percentage points. Filtered-total query (stream IDs summed) is used rather than per-stream row sums, which differ slightly due to GA4 cross-stream user de-duplication. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}, {"key": "viewingEventUsers", "label": "Viewing event users", "baseline": 2410, "launchBaseline": 1152, "previousWeek": 1726, "current": 1349, "deltaPct": -21.84241, "deltaVsLaunchPct": 17.100694, "deltaVsPreviousPct": -21.84241, "deltaType": "percent", "format": "number", "context": "Users who triggered on-demand video_start or Live play events. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "onDemandStartUsers", "label": "On-demand start users", "baseline": 2354, "launchBaseline": 1020, "previousWeek": 2354, "current": 2354, "deltaPct": 0.0, "deltaVsLaunchPct": 130.784314, "deltaVsPreviousPct": 0.0, "deltaType": "percent", "format": "number", "context": "Users who triggered video_start outside the Live screen. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.) [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "liveChannelViewers", "label": "Live channel viewers", "baseline": 132, "launchBaseline": 121, "previousWeek": 132, "current": 132, "deltaPct": 0.0, "deltaVsLaunchPct": 9.090909, "deltaVsPreviousPct": 0.0, "deltaType": "percent", "format": "number", "context": "Users who triggered a Live play event. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.) [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "videoCompleteUsers", "label": "Video complete users", "baseline": 209, "launchBaseline": 219, "previousWeek": 222, "current": 344, "deltaPct": 54.954955, "deltaVsLaunchPct": 57.077626, "deltaVsPreviousPct": 54.954955, "deltaType": "percent", "format": "number", "context": "Users who triggered video_complete. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "livePlayEvents", "label": "Live play events", "baseline": 3898, "launchBaseline": 3952, "previousWeek": 3898, "current": 3898, "deltaPct": 0.0, "deltaVsLaunchPct": -1.366397, "deltaVsPreviousPct": 0.0, "deltaType": "percent", "format": "number", "context": "Total Live play events, not unique users. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.) [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "adRequestEvents", "label": "Ad request events", "baseline": 25669, "launchBaseline": 10589, "previousWeek": 26144, "current": 23803, "deltaPct": -8.954253, "deltaVsLaunchPct": 124.789876, "deltaVsPreviousPct": -8.954253, "deltaType": "percent", "format": "number", "context": "Total ad request events generated by viewing activity. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "avgEngagedMinutesPerUser", "label": "Avg time per user", "baseline": 48.938138, "launchBaseline": 25.164161882893225, "previousWeek": 102.757768, "current": 102.355202, "deltaPct": -0.391763, "deltaVsLaunchPct": 306.749894, "deltaVsPreviousPct": -0.391763, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}, {"key": "avgEngagedMinutesPerSession", "label": "Avg time per session", "baseline": 24.332417, "launchBaseline": 16.45123845980635, "previousWeek": 36.551861, "current": 35.342895, "deltaPct": -3.307534, "deltaVsLaunchPct": 114.834254, "deltaVsPreviousPct": -3.307534, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}, {"key": "totalEngagementHours", "label": "Total engaged hours", "baseline": 4792.675, "launchBaseline": 3652.9975, "previousWeek": 5735.596111, "current": 5760.891944, "deltaPct": 0.441032, "deltaVsLaunchPct": 57.703145, "deltaVsPreviousPct": 0.441032, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}], "trend": [{"date": "Jul 20", "rawDate": "20260720", "activeUsers": 654, "newUsers": 141, "sessions": 1352, "engagedSessions": 1044, "screenPageViews": 4566, "eventCount": 142412, "userEngagementDuration": 2563573, "engagementRate": 77.2189349112426}, {"date": "Jul 21", "rawDate": "20260721", "activeUsers": 757, "newUsers": 186, "sessions": 1514, "engagedSessions": 1184, "screenPageViews": 5208, "eventCount": 142353, "userEngagementDuration": 2948300, "engagementRate": 78.20343461030383}, {"date": "Jul 22", "rawDate": "20260722", "activeUsers": 713, "newUsers": 153, "sessions": 1415, "engagedSessions": 1129, "screenPageViews": 4942, "eventCount": 145178, "userEngagementDuration": 2677649, "engagementRate": 79.78798586572438}, {"date": "Jul 23", "rawDate": "20260723", "activeUsers": 677, "newUsers": 149, "sessions": 1414, "engagedSessions": 1104, "screenPageViews": 4766, "eventCount": 146295, "userEngagementDuration": 2664598, "engagementRate": 78.07637906647807}, {"date": "Jul 24", "rawDate": "20260724", "activeUsers": 673, "newUsers": 137, "sessions": 1449, "engagedSessions": 1101, "screenPageViews": 4911, "eventCount": 143185, "userEngagementDuration": 2551100, "engagementRate": 75.98343685300208}, {"date": "Jul 25", "rawDate": "20260725", "activeUsers": 710, "newUsers": 170, "sessions": 1412, "engagedSessions": 1100, "screenPageViews": 4892, "eventCount": 142935, "userEngagementDuration": 2824425, "engagementRate": 77.90368271954674}, {"date": "Jul 26", "rawDate": "20260726", "activeUsers": 802, "newUsers": 190, "sessions": 1898, "engagedSessions": 908, "screenPageViews": 3694, "eventCount": 248232, "userEngagementDuration": 4509566, "engagementRate": 47.83983140147524}], "eventCards": [{"event": "in_app_purchase", "label": "In-app purchases", "baseline": 0, "current": 2, "weekToDate": 2, "deltaPct": null, "activeUsersCurrent": 2, "stale": true}, {"event": "application_install", "label": "Application installs", "baseline": 4452, "current": 1110, "weekToDate": 1110, "deltaPct": 1.277372, "activeUsersCurrent": 934, "previousWeek": 1096}, {"event": "first_open", "label": "First opens", "baseline": 3699, "current": 514, "weekToDate": 514, "deltaPct": -38.072289, "activeUsersCurrent": 511, "previousWeek": 830}, {"event": "app_open", "label": "App opens", "baseline": 1610, "current": 2602, "weekToDate": 2602, "deltaPct": 31.083123, "activeUsersCurrent": 570, "previousWeek": 1985}, {"event": "app_time", "label": "App time events", "baseline": 261902, "current": 302871, "weekToDate": 302871, "deltaPct": 8.5816, "activeUsersCurrent": 722, "previousWeek": 278934}, {"event": "play", "label": "Play events", "baseline": 57320, "current": 61366, "weekToDate": 61366, "deltaPct": 9.219378, "activeUsersCurrent": 1228, "previousWeek": 56186}, {"event": "video_start", "label": "Video starts", "baseline": 20510, "current": 22343, "weekToDate": 22343, "deltaPct": 16.406169, "activeUsersCurrent": 1217, "previousWeek": 19194}, {"event": "video_play", "label": "Video plays", "baseline": 15366, "current": 8772, "weekToDate": 8772, "deltaPct": 41.438246, "activeUsersCurrent": 158, "previousWeek": 6202}, {"event": "video_complete", "label": "Video completes", "baseline": 3391, "current": 6475, "weekToDate": 6475, "deltaPct": 15.811125, "activeUsersCurrent": 371, "previousWeek": 5591}, {"event": "ads_request", "label": "Ad requests", "baseline": 23365, "current": 30829, "weekToDate": 30829, "deltaPct": 25.3976, "activeUsersCurrent": 264, "previousWeek": 24585}, {"event": "ads_impression", "label": "In-app ad impressions", "baseline": 31800, "current": 46936, "weekToDate": 46936, "deltaPct": 27.870103, "activeUsersCurrent": 258, "previousWeek": 36706}, {"event": "ads_loaded", "label": "Ads loaded", "baseline": 16646, "current": 23765, "weekToDate": 23765, "deltaPct": 33.182022, "activeUsersCurrent": 1, "previousWeek": 17844}, {"event": "ads_started", "label": "Ads started", "baseline": 16638, "current": 23733, "weekToDate": 23733, "deltaPct": 33.025055, "activeUsersCurrent": 1, "previousWeek": 17841}, {"event": "ads_complete", "label": "Ads completed", "baseline": 16093, "current": 23129, "weekToDate": 23129, "deltaPct": 33.147199, "activeUsersCurrent": 1, "previousWeek": 17371}, {"event": "ad_error", "label": "Ad errors", "baseline": 112, "current": 50, "weekToDate": 50, "deltaPct": -54.12844, "activeUsersCurrent": 3, "previousWeek": 109}], "purchaseFunnel": [{"event": "in_app_purchase", "label": "Purchase completed", "baseline": 2, "current": 3, "weekToDate": 3, "deltaPct": 50.0, "tracked": true, "note": "Launch baseline: 6 purchases / $84.94"}, {"event": "go_ad_free_click", "label": "Go ad-free button clicked", "baseline": 0, "current": 0, "weekToDate": 0, "deltaPct": null, "tracked": false, "note": "Not found as a distinct GA4 event yet"}, {"event": "go_ad_free_purchase", "label": "Go ad-free purchase", "baseline": 0, "current": 0, "weekToDate": 0, "deltaPct": null, "tracked": false, "note": "Not separated from in_app_purchase yet"}, {"event": "video_purchase", "label": "Video purchase", "baseline": 0, "current": 0, "weekToDate": 0, "deltaPct": null, "tracked": false, "note": "Not found as a distinct GA4 event yet"}, {"event": "collection_purchase", "label": "Collection purchase", "baseline": 0, "current": 0, "weekToDate": 0, "deltaPct": null, "tracked": false, "note": "Not found as a distinct GA4 event yet"}], "purchaseTrend": [{"date": "Apr 13", "rawDate": "20260413", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 243, "first_open": 43, "app_open": 120, "play": 3103, "ads_impression": 3241}, {"date": "Apr 14", "rawDate": "20260414", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 206, "first_open": 31, "app_open": 118, "play": 3019, "ads_impression": 1257}, {"date": "Apr 15", "rawDate": "20260415", "purchaseRevenue": 14.99, "in_app_purchase": 1, "application_install": 241, "first_open": 33, "app_open": 148, "play": 3376, "ads_impression": 1785}, {"date": "Apr 16", "rawDate": "20260416", "purchaseRevenue": 74.96, "in_app_purchase": 4, "application_install": 777, "first_open": 470, "app_open": 295, "play": 5409, "ads_impression": 2610}, {"date": "Apr 17", "rawDate": "20260417", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 509, "first_open": 281, "app_open": 220, "play": 4568, "ads_impression": 3235}, {"date": "Apr 18", "rawDate": "20260418", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 447, "first_open": 210, "app_open": 171, "play": 4912, "ads_impression": 3708}, {"date": "Apr 19", "rawDate": "20260419", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 548, "first_open": 288, "app_open": 253, "play": 6614, "ads_impression": 4338}, {"date": "Apr 20", "rawDate": "20260420", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 421, "first_open": 219, "app_open": 291, "play": 5204, "ads_impression": 3072}, {"date": "Apr 21", "rawDate": "20260421", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 496, "first_open": 290, "app_open": 196, "play": 5050, "ads_impression": 3705}, {"date": "Apr 22", "rawDate": "20260422", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 530, "first_open": 301, "app_open": 275, "play": 6927, "ads_impression": 7715}, {"date": "Apr 23", "rawDate": "20260423", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 390, "first_open": 232, "app_open": 223, "play": 6170, "ads_impression": 7873}, {"date": "Apr 24", "rawDate": "20260424", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 564, "first_open": 373, "app_open": 244, "play": 6914, "ads_impression": 7448}, {"date": "Apr 25", "rawDate": "20260425", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 565, "first_open": 341, "app_open": 293, "play": 7676, "ads_impression": 9775}, {"date": "Apr 26", "rawDate": "20260426", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 616, "first_open": 394, "app_open": 321, "play": 7483, "ads_impression": 6755}, {"date": "Apr 27", "rawDate": "20260427", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 467, "first_open": 279, "app_open": 334, "play": 7291, "ads_impression": 7083}, {"date": "Apr 28", "rawDate": "20260428", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 619, "first_open": 431, "app_open": 249, "play": 7851, "ads_impression": 7222}, {"date": "Apr 29", "rawDate": "20260429", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 669, "first_open": 507, "app_open": 220, "play": 6956, "ads_impression": 6896}, {"date": "Apr 30", "rawDate": "20260430", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 543, "first_open": 403, "app_open": 273, "play": 8035, "ads_impression": 8464}, {"date": "May 1", "rawDate": "20260501", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 435, "first_open": 292, "app_open": 205, "play": 5452, "ads_impression": 7385}, {"date": "May 2", "rawDate": "20260502", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 486, "first_open": 304, "app_open": 225, "play": 5268, "ads_impression": 6962}, {"date": "May 3", "rawDate": "20260503", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 467, "first_open": 306, "app_open": 231, "play": 5865, "ads_impression": 6765}, {"date": "May 4", "rawDate": "20260504", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 371, "first_open": 240, "app_open": 203, "play": 7407, "ads_impression": 7368}, {"date": "May 5", "rawDate": "20260505", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 374, "first_open": 260, "app_open": 187, "play": 5578, "ads_impression": 6534}, {"date": "May 6", "rawDate": "20260506", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 409, "first_open": 284, "app_open": 211, "play": 6158, "ads_impression": 6954}, {"date": "May 7", "rawDate": "20260507", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 370, "first_open": 227, "app_open": 185, "play": 8621, "ads_impression": 5870}, {"date": "May 8", "rawDate": "20260508", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 351, "first_open": 236, "app_open": 203, "play": 5300, "ads_impression": 5719}, {"date": "May 9", "rawDate": "20260509", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 370, "first_open": 222, "app_open": 259, "play": 6274, "ads_impression": 5509}, {"date": "May 10", "rawDate": "20260510", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 384, "first_open": 264, "app_open": 221, "play": 6366, "ads_impression": 5118}, {"date": "May 11", "rawDate": "20260511", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 330, "first_open": 224, "app_open": 188, "play": 5729, "ads_impression": 5514}, {"date": "May 12", "rawDate": "20260512", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 614, "first_open": 496, "app_open": 212, "play": 8651, "ads_impression": 5890}, {"date": "May 13", "rawDate": "20260513", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 746, "first_open": 619, "app_open": 216, "play": 7493, "ads_impression": 4605}, {"date": "May 14", "rawDate": "20260514", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 806, "first_open": 689, "app_open": 279, "play": 7058, "ads_impression": 5406}, {"date": "May 15", "rawDate": "20260515", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 765, "first_open": 645, "app_open": 248, "play": 6903, "ads_impression": 5333}, {"date": "May 16", "rawDate": "20260516", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 801, "first_open": 662, "app_open": 261, "play": 6923, "ads_impression": 4107}, {"date": "May 17", "rawDate": "20260517", "purchaseRevenue": 29.99, "in_app_purchase": 1, "application_install": 832, "first_open": 690, "app_open": 288, "play": 7654, "ads_impression": 4846}, {"date": "May 18", "rawDate": "20260518", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 710, "first_open": 590, "app_open": 215, "play": 7392, "ads_impression": 4621}, {"date": "May 19", "rawDate": "20260519", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 697, "first_open": 572, "app_open": 234, "play": 6957, "ads_impression": 4641}, {"date": "May 20", "rawDate": "20260520", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 718, "first_open": 593, "app_open": 298, "play": 8314, "ads_impression": 5706}, {"date": "May 21", "rawDate": "20260521", "purchaseRevenue": 29.98, "in_app_purchase": 2, "application_install": 725, "first_open": 629, "app_open": 271, "play": 8218, "ads_impression": 5513}, {"date": "May 22", "rawDate": "20260522", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 631, "first_open": 520, "app_open": 242, "play": 7380, "ads_impression": 5449}, {"date": "May 23", "rawDate": "20260523", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 672, "first_open": 547, "app_open": 269, "play": 10744, "ads_impression": 3958}, {"date": "May 24", "rawDate": "20260524", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 709, "first_open": 584, "app_open": 267, "play": 7573, "ads_impression": 4753}, {"date": "May 25", "rawDate": "20260525", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 706, "first_open": 604, "app_open": 275, "play": 6993, "ads_impression": 4329}, {"date": "May 26", "rawDate": "20260526", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 639, "first_open": 541, "app_open": 220, "play": 7296, "ads_impression": 4180}, {"date": "May 27", "rawDate": "20260527", "purchaseRevenue": 9.99, "in_app_purchase": 1, "application_install": 711, "first_open": 610, "app_open": 295, "play": 9087, "ads_impression": 5114}, {"date": "May 28", "rawDate": "20260528", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 705, "first_open": 588, "app_open": 244, "play": 7341, "ads_impression": 4942}, {"date": "May 29", "rawDate": "20260529", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 685, "first_open": 568, "app_open": 265, "play": 8479, "ads_impression": 4805}, {"date": "May 30", "rawDate": "20260530", "purchaseRevenue": 27.58, "in_app_purchase": 2, "application_install": 675, "first_open": 554, "app_open": 254, "play": 6924, "ads_impression": 4587}, {"date": "May 31", "rawDate": "20260531", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 713, "first_open": 625, "app_open": 250, "play": 7649, "ads_impression": 4648}], "platforms": [{"platform": "web", "baseline": {"platform": "web", "activeUsers": 2079, "newUsers": 1418, "sessions": 5045, "engagedSessions": 3939, "screenPageViews": 26316, "eventCount": 790606, "engagementRate": 78.0773042616452}, "previousWeek": {"platform": "web", "activeUsers": 1332, "sessions": 4856, "engagedSessions": 3703, "screenPageViews": 26681, "eventCount": 817200, "userEngagementDuration": 9217641, "engagementRate": 76.25617792421747}, "current": {"platform": "web", "activeUsers": 1383, "sessions": 5536, "engagedSessions": 3714, "screenPageViews": 27014, "userEngagementDuration": 10004723, "eventCount": null, "engagementRate": 67.08815028901735}, "activeUsersDeltaPct": 3.828829, "engagementRateCurrent": 67.08815028901735}, {"platform": "iOS", "baseline": {"platform": "iOS", "activeUsers": 2564, "newUsers": 1721, "sessions": 4186, "engagedSessions": 3522, "screenPageViews": 726, "eventCount": 92933, "engagementRate": 84.13760152890588}, "previousWeek": {"platform": "iOS", "activeUsers": 1225, "sessions": 2337, "engagedSessions": 1850, "screenPageViews": 1495, "eventCount": 85361, "userEngagementDuration": 6219906, "engagementRate": 79.16131792896877}, "current": {"platform": "iOS", "activeUsers": 1194, "sessions": 2257, "engagedSessions": 1816, "screenPageViews": 1435, "userEngagementDuration": 5525087, "eventCount": null, "engagementRate": 80.46078865750998}, "activeUsersDeltaPct": -2.530612, "engagementRateCurrent": 80.46078865750998}, {"platform": "Android", "baseline": {"platform": "Android", "activeUsers": 3277, "newUsers": 2369, "sessions": 5192, "engagedSessions": 4069, "screenPageViews": 2254, "eventCount": 120394, "engagementRate": 78.37057010785824}, "previousWeek": {"platform": "Android", "activeUsers": 941, "sessions": 2255, "engagedSessions": 1749, "screenPageViews": 3788, "eventCount": 129878, "userEngagementDuration": 5213193, "engagementRate": 77.5609756097561}, "current": {"platform": "Android", "activeUsers": 969, "sessions": 2430, "engagedSessions": 1921, "screenPageViews": 4530, "userEngagementDuration": 5209401, "eventCount": null, "engagementRate": 79.05349794238683}, "activeUsersDeltaPct": 2.975558, "engagementRateCurrent": 79.05349794238683}], "platformMix": [{"platform": "iOS", "deviceCategory": "mobile", "operatingSystem": "iOS", "activeUsers": 1312, "sessions": 2219, "engagedSessions": 1735, "engagementRate": 78.188373, "eventCount": 51563, "totalEngagementSeconds": 2213272}, {"platform": "web", "deviceCategory": "smart tv", "operatingSystem": "(not set)", "activeUsers": 1133, "sessions": 3684, "engagedSessions": 2953, "engagementRate": 80.157438, "eventCount": 724768, "totalEngagementSeconds": 8504893}, {"platform": "Android", "deviceCategory": "mobile", "operatingSystem": "Android", "activeUsers": 789, "sessions": 1851, "engagedSessions": 1349, "engagementRate": 72.879525, "eventCount": 53054, "totalEngagementSeconds": 1180777}, {"platform": "iOS", "deviceCategory": "tablet", "operatingSystem": "iOS", "activeUsers": 251, "sessions": 524, "engagedSessions": 453, "engagementRate": 86.450382, "eventCount": 21161, "totalEngagementSeconds": 1424826}, {"platform": "web", "deviceCategory": "desktop", "operatingSystem": "(not set)", "activeUsers": 208, "sessions": 910, "engagedSessions": 568, "engagementRate": 62.417582, "eventCount": 41931, "totalEngagementSeconds": 821574}, {"platform": "Android", "deviceCategory": "smart tv", "operatingSystem": "Android", "activeUsers": 196, "sessions": 533, "engagedSessions": 501, "engagementRate": 93.996248, "eventCount": 43994, "totalEngagementSeconds": 3490003}, {"platform": "iOS", "deviceCategory": "smart tv", "operatingSystem": "iOS", "activeUsers": 107, "sessions": 258, "engagedSessions": 227, "engagementRate": 87.984496, "eventCount": 26966, "totalEngagementSeconds": 3444531}, {"platform": "web", "deviceCategory": "mobile", "operatingSystem": "(not set)", "activeUsers": 75, "sessions": 101, "engagedSessions": 63, "engagementRate": 62.376238, "eventCount": 1694, "totalEngagementSeconds": 12720}, {"platform": "Android", "deviceCategory": "tablet", "operatingSystem": "Android", "activeUsers": 70, "sessions": 172, "engagedSessions": 135, "engagementRate": 78.488372, "eventCount": 8219, "totalEngagementSeconds": 106733}, {"platform": "web", "deviceCategory": "tablet", "operatingSystem": "(not set)", "activeUsers": 18, "sessions": 61, "engagedSessions": 46, "engagementRate": 75.409836, "eventCount": 3353, "totalEngagementSeconds": 17361}], "acquisition": [{"sessionSourceMedium": "(direct) / (none)", "activeUsers": 3163, "newUsers": 1946, "sessions": 5386, "engagedSessions": 4405, "engagementRate": 81.7861121425919, "eventCount": 174483}, {"sessionSourceMedium": "apps.facebook.com / (not set)", "activeUsers": 1801, "newUsers": 1293, "sessions": 2575, "engagedSessions": 1940, "engagementRate": 75.33980582524272, "eventCount": 36707}, {"sessionSourceMedium": "homescreen / (not set)", "activeUsers": 719, "newUsers": 182, "sessions": 2274, "engagedSessions": 1965, "engagementRate": 86.41160949868075, "eventCount": 460155}, {"sessionSourceMedium": "google / organic", "activeUsers": 389, "newUsers": 326, "sessions": 632, "engagedSessions": 556, "engagementRate": 87.9746835443038, "eventCount": 13407}, {"sessionSourceMedium": "google-play / organic", "activeUsers": 293, "newUsers": 187, "sessions": 501, "engagedSessions": 423, "engagementRate": 84.4311377245509, "eventCount": 27093}, {"sessionSourceMedium": "(not set)", "activeUsers": 88, "newUsers": 9, "sessions": 501, "engagedSessions": 0, "engagementRate": 0.0, "eventCount": 58150}, {"sessionSourceMedium": "hs-search / (not set)", "activeUsers": 64, "newUsers": 14, "sessions": 449, "engagedSessions": 394, "engagementRate": 87.75055679287304, "eventCount": 100637}, {"sessionSourceMedium": "apps.instagram.com / (not set)", "activeUsers": 294, "newUsers": 215, "sessions": 413, "engagedSessions": 313, "engagementRate": 75.78692493946731, "eventCount": 7728}, {"sessionSourceMedium": "apps.facebook.com / (none)", "activeUsers": 32, "newUsers": 0, "sessions": 157, "engagedSessions": 120, "engagementRate": 76.43312101910828, "eventCount": 847}, {"sessionSourceMedium": "fb / paid", "activeUsers": 107, "newUsers": 18, "sessions": 138, "engagedSessions": 108, "engagementRate": 78.26086956521739, "eventCount": 1598}, {"sessionSourceMedium": "bing / organic", "activeUsers": 59, "newUsers": 38, "sessions": 121, "engagedSessions": 109, "engagementRate": 90.08264462809917, "eventCount": 8388}, {"sessionSourceMedium": "channel-store / (not set)", "activeUsers": 20, "newUsers": 8, "sessions": 102, "engagedSessions": 97, "engagementRate": 95.09803921568627, "eventCount": 23065}], "topPages": [{"screen": "(not set)", "path": "(not set)", "activeUsers": 6175, "sessions": 11787, "engagedSessions": 9080, "screenPageViews": 3288, "eventCount": 865150, "totalEngagementSeconds": 11715096}, {"screen": "Splash", "path": "(not set)", "activeUsers": 1444, "sessions": 3762, "engagedSessions": 3148, "screenPageViews": 3905, "eventCount": 4920, "totalEngagementSeconds": 2674}, {"screen": "Intro", "path": "(not set)", "activeUsers": 1226, "sessions": 2660, "engagedSessions": 2179, "screenPageViews": 2744, "eventCount": 2992, "totalEngagementSeconds": 20006}, {"screen": "On Demand", "path": "(not set)", "activeUsers": 898, "sessions": 2961, "engagedSessions": 2790, "screenPageViews": 3428, "eventCount": 4018, "totalEngagementSeconds": 39317}, {"screen": "ElectricNOW", "path": "/landing", "activeUsers": 744, "sessions": 1078, "engagedSessions": 994, "screenPageViews": 1434, "eventCount": 2439, "totalEngagementSeconds": 15031}, {"screen": "ElectricNOW", "path": "/", "activeUsers": 680, "sessions": 1052, "engagedSessions": 1004, "screenPageViews": 1879, "eventCount": 4852, "totalEngagementSeconds": 13744}, {"screen": "PDP", "path": "(not set)", "activeUsers": 372, "sessions": 1771, "engagedSessions": 1699, "screenPageViews": 3484, "eventCount": 3862, "totalEngagementSeconds": 18937}, {"screen": "ElectricNOW", "path": "/live-tv", "activeUsers": 285, "sessions": 851, "engagedSessions": 769, "screenPageViews": 1896, "eventCount": 42898, "totalEngagementSeconds": 511507}, {"screen": "Live", "path": "(not set)", "activeUsers": 161, "sessions": 1058, "engagedSessions": 1036, "screenPageViews": 1790, "eventCount": 24271, "totalEngagementSeconds": 4968273}, {"screen": "Category", "path": "(not set)", "activeUsers": 133, "sessions": 232, "engagedSessions": 231, "screenPageViews": 346, "eventCount": 375, "totalEngagementSeconds": 3082}, {"screen": "ElectricNOW", "path": "/devices", "activeUsers": 131, "sessions": 139, "engagedSessions": 59, "screenPageViews": 161, "eventCount": 591, "totalEngagementSeconds": 1469}, {"screen": "ElectricNOW", "path": "/profiles", "activeUsers": 97, "sessions": 144, "engagedSessions": 139, "screenPageViews": 178, "eventCount": 215, "totalEngagementSeconds": 960}, {"screen": "ElectricNOW", "path": "/english", "activeUsers": 87, "sessions": 116, "engagedSessions": 105, "screenPageViews": 176, "eventCount": 248, "totalEngagementSeconds": 4699}, {"screen": "Player", "path": "(not set)", "activeUsers": 85, "sessions": 1364, "engagedSessions": 1353, "screenPageViews": 2712, "eventCount": 23735, "totalEngagementSeconds": 636082}, {"screen": "Search Channels", "path": "(not set)", "activeUsers": 77, "sessions": 208, "engagedSessions": 207, "screenPageViews": 700, "eventCount": 799, "totalEngagementSeconds": 2221}, {"screen": "ElectricNOW", "path": "/search", "activeUsers": 44, "sessions": 50, "engagedSessions": 50, "screenPageViews": 55, "eventCount": 217, "totalEngagementSeconds": 165}, {"screen": "My Stuff", "path": "(not set)", "activeUsers": 40, "sessions": 124, "engagedSessions": 124, "screenPageViews": 301, "eventCount": 301, "totalEngagementSeconds": 0}, {"screen": "Settings", "path": "(not set)", "activeUsers": 37, "sessions": 75, "engagedSessions": 75, "screenPageViews": 182, "eventCount": 229, "totalEngagementSeconds": 3306}, {"screen": "ElectricNOW", "path": "/shows/leverage", "activeUsers": 34, "sessions": 38, "engagedSessions": 37, "screenPageViews": 49, "eventCount": 154, "totalEngagementSeconds": 145}, {"screen": "ElectricNOW", "path": "/shows/leverage-redemption", "activeUsers": 28, "sessions": 29, "engagedSessions": 28, "screenPageViews": 34, "eventCount": 114, "totalEngagementSeconds": 144}, {"screen": "Search | Spotlight TV", "path": "/search", "activeUsers": 26, "sessions": 31, "engagedSessions": 31, "screenPageViews": 48, "eventCount": 53, "totalEngagementSeconds": 776}, {"screen": "ElectricNOW", "path": "/watch/the-ark-2", "activeUsers": 22, "sessions": 39, "engagedSessions": 38, "screenPageViews": 199, "eventCount": 3456, "totalEngagementSeconds": 136401}, {"screen": "Leverage: Redemption - Season 3 | ElectricNOW", "path": "/", "activeUsers": 21, "sessions": 22, "engagedSessions": 22, "screenPageViews": 38, "eventCount": 48, "totalEngagementSeconds": 1271}, {"screen": "ElectricNOW", "path": "/watch/almost-paradise-1", "activeUsers": 20, "sessions": 27, "engagedSessions": 27, "screenPageViews": 128, "eventCount": 2220, "totalEngagementSeconds": 72297}, {"screen": "About Us", "path": "(not set)", "activeUsers": 18, "sessions": 52, "engagedSessions": 52, "screenPageViews": 59, "eventCount": 59, "totalEngagementSeconds": 0}, {"screen": "Connect with us", "path": "(not set)", "activeUsers": 18, "sessions": 52, "engagedSessions": 52, "screenPageViews": 59, "eventCount": 59, "totalEngagementSeconds": 0}, {"screen": "Privacy Policy", "path": "(not set)", "activeUsers": 18, "sessions": 52, "engagedSessions": 52, "screenPageViews": 59, "eventCount": 59, "totalEngagementSeconds": 0}, {"screen": "Terms of use", "path": "(not set)", "activeUsers": 18, "sessions": 52, "engagedSessions": 52, "screenPageViews": 59, "eventCount": 59, "totalEngagementSeconds": 0}, {"screen": "The Ark | ElectricNOW", "path": "/", "activeUsers": 16, "sessions": 24, "engagedSessions": 24, "screenPageViews": 39, "eventCount": 47, "totalEngagementSeconds": 2538}, {"screen": "ElectricNOW", "path": "/shows/librarians", "activeUsers": 16, "sessions": 16, "engagedSessions": 13, "screenPageViews": 18, "eventCount": 64, "totalEngagementSeconds": 42}], "liveTv": {"baseline": {"activeUsers": 437, "sessions": 1878, "engagedSessions": 1801, "screenPageViews": 3524, "eventCount": 50603}, "current": {"activeUsers": 444, "sessions": 1964, "engagedSessions": 1837, "screenPageViews": 3784, "eventCount": 62812}, "deltas": {"activeUsers": 1.6018306636155606, "sessions": 4.579339723109691, "engagedSessions": 1.9988895058300944, "screenPageViews": 7.377979568671964, "eventCount": 24.127028041815702}, "engagementRateBaseline": 95.89989350372737, "engagementRateCurrent": 93.5336048879837, "weekToDate": {"activeUsers": 444, "sessions": 1964, "engagedSessions": 1837, "screenPageViews": 3784, "eventCount": 62812}, "engagementRateWeekToDate": 93.5336048879837}, "plainEnglishInsights": ["For Jul 20-Jul 26, the strongest signal was off-app: YouTube drove 242,276 views, 84,348 hours watched, and $3,579.54 estimated revenue, with YTD YouTube revenue now at $98,785.81. On the ElectricNOW app itself, GA4 active users were up 1.2% and sessions were up 3.8% versus the prior week, but engagement rate softened from 77.2% to 72.3% and engaged sessions declined, so reach grew a little faster than depth of engagement. Visible platform sales for the complete week were 4 purchases / $80.95 (2 Roku + 2 Stripe); Apple had no new sales, only 139 downloads and 351 updates. Paid acquisition verdict: acceptable but unproven — Google Ads is connected but rate-limited this refresh (stale, preserved) and Meta has no new report, so neither channel's spend can be tied to verified in-app viewing this week.", "Traffic/use: active users were 3,540 (+1.2% vs prior week), sessions were 10,102 (+3.8%), and screen/page views were 32,979 (+3.2%).", "Attention: total engaged time was 5,761 hours (+0.4%), but engagement rate eased to 72.3% from 77.2%, and engaged sessions dipped from 7,507 to 7,305. More people visited, but a slightly smaller share of sessions were 'engaged.'", "Sales (complete week): visible platform sales were 4 purchases / $80.95 — two Roku Purchase Bundle 20 sales (Jul 20, Jul 25) and two Stripe sales (Jul 21 $19.98, Jul 26 $20.99). Visible YTD (complete-week basis) is 72 purchases / $1,338.26. Two more Stripe sales ($35.98) landed same-day as this refresh (Jul 27) and are tracked separately, not counted in the complete week.", "Apple downloads: latest manual App Store Connect snapshot shows 139 free iOS/watchOS/tvOS downloads and 351 app updates for Jul 20-Jul 26, up +1.5% from the prior 137-download snapshot. No new Apple sales this refresh.", "Roku app engagement: latest Roku App Engagement report (Jul 19-Jul 25) shows 209 new installs, 107 uninstalls, 335 average daily viewers, 74.50 avg minutes per viewer, and 2,909 hours streamed. Roku app metrics remain separate from GA4 and Roku TRC live-channel metrics.", "YouTube: Jul 20-Jul 26 produced 242,276 views, 84,348 hours watched, $3,579.54 estimated revenue, and $98,785.81 YTD estimated revenue. \"Everyone Wanted to Be on This Ship\" (The Ark, S01E01) led by views this week; Flyboys remained a top watch-time title.", "TVOD title revenue (new this refresh): Michael Johnson's title-transaction report shows 7,914 total registered users (7,814 active) and $1,339.15 net TVOD revenue across 90 paid transactions since Apr 1, 2026. Top title by net revenue: The Librarians: The Next Chapter ($299.8). This is a separate, cumulative-since-launch source and is not reconciled against the Stripe/Roku/Apple visible-sales figures above.", "Paid acquisition verdict: acceptable but needs proof of viewing. Meta has no new performance report this refresh (last known state preserved), and Google Ads is connected but rate-limited, so last-good Google data is preserved. Do not read paid-campaign impressions as ElectricNOW in-app ad impressions, and do not infer ROAS because ad-server revenue is unavailable.", "Next tests: restart paid spend only with clean measurement, split iOS and Android budgets, focus geos where app usage already exists while reserving a small test budget for underpenetrated states, use show-specific creative tied to actual viewing quality, and review install-to-viewing behavior before scaling budget."], "instrumentationGaps": ["No separate GA4 event found for go_ad_free_click yet.", "No separate GA4 event found for video_purchase yet.", "No separate GA4 event found for collection_purchase yet.", "Stripe is now one visible sales source in the dashboard; total sales still require Apple App Store and Google Play reporting, and GA4 purchase events still need to be split into go-ad-free, individual video, and collection purchase actions.", "Live TV should be reconciled with Amagi and ad-server reporting."], "salesSummary": {"sourceLabel": "Visible platform sales", "sourceDetail": "Visible platform sales combine Stripe-visible net payments, Roku-visible sales from Roku email reports, and manual Apple App Store sales snapshots. Google Play and other stores may be missing, so this is not total ElectricNOW sales.", "stripe": {"sourceLabel": "Stripe-visible net payments", "sourceDetail": "Stripe connector rechecked Jul 19, 2026 after reconnect. Latest succeeded charge was Jul 14, 2026 but it was fully refunded, so it is excluded. Net non-refunded 2026 Stripe charges are 22/$454.78; latest net sale remains Jun 27, 2026.", "baselineWindow": {"label": "Stripe launch baseline", "range": "Apr 13-Apr 19, 2026", "purchases": 4, "purchaseRevenue": 54.96, "revenuePerPurchase": 13.74, "deltaPurchasesPct": null, "deltaRevenuePct": null, "detail": "Stripe shows 4 visible payments totaling $54.96 during the prior complete week."}, "yearToDate": {"label": "Stripe net sales this year", "range": "Jan 1-Jul 19, 2026 connector check", "purchases": 25, "purchaseRevenue": 515.73, "revenuePerPurchase": 20.67, "payments": [{"id": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV", "date": "Jun 27", "createdAt": "2026-06-27T21:53:44Z", "sortDate": "2026-06-27T21:53:44Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV", "stripePaymentIntentId": "pi_3Tn4AWLG0Cw1zW4e2lZs02fb", "orderId": "jak-2026062721534447", "contentId": null, "contentTitle": null}, {"id": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7", "date": "Jun 15", "createdAt": "2026-06-15T13:18:05Z", "sortDate": "2026-06-15T13:18:05Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7", "stripePaymentIntentId": "pi_3TiaOvLG0Cw1zW4e1J9vWz96", "orderId": "moj-2026061513180484", "contentId": null, "contentTitle": null}, {"id": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi", "date": "Jun 12", "createdAt": "2026-06-12T23:06:49Z", "sortDate": "2026-06-12T23:06:49Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi", "stripePaymentIntentId": "pi_3TheA0LG0Cw1zW4e2ajY663E", "orderId": "tub-2026061223064851", "contentId": null, "contentTitle": null}, {"id": "ch_3Tc8fSLG0Cw1zW4e0JGS5fDH", "date": "May 28", "createdAt": "2026-05-28T18:28:30Z", "sortDate": "2026-05-28T18:28:30Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tc8fSLG0Cw1zW4e0JGS5fDH", "stripePaymentIntentId": "pi_3Tc8fSLG0Cw1zW4e0aRnmEQw", "orderId": "smd-2026052818283000", "contentId": null, "contentTitle": null}, {"id": "ch_3TYIl0LG0Cw1zW4e25Rk2nkG", "date": "May 17", "createdAt": "2026-05-18T04:26:22Z", "sortDate": "2026-05-18T04:26:22Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TYIl0LG0Cw1zW4e25Rk2nkG", "stripePaymentIntentId": "pi_3TYIl0LG0Cw1zW4e29yDkQvy", "orderId": "mcb-2026051804262176", "contentId": null, "contentTitle": null}, {"id": "ch_3TXC7jLG0Cw1zW4e0RRivOUl", "date": "May 14", "createdAt": "2026-05-15T03:09:15Z", "sortDate": "2026-05-15T03:09:15Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TXC7jLG0Cw1zW4e0RRivOUl", "stripePaymentIntentId": "pi_3TXC7jLG0Cw1zW4e0aTDzJEJ", "orderId": "amr-2026051503091512", "contentId": null, "contentTitle": null}, {"id": "ch_3TU0PpLG0Cw1zW4e1Qz5eWBw", "date": "May 6", "createdAt": "2026-05-06T08:02:45Z", "sortDate": "2026-05-06T08:02:45Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TU0PpLG0Cw1zW4e1Qz5eWBw", "stripePaymentIntentId": "pi_3TU0PpLG0Cw1zW4e1xA1B4CB", "orderId": "mcj-2026050608024483", "contentId": null, "contentTitle": null}, {"id": "ch_3TQfbqLG0Cw1zW4e05VOck3Z", "date": "Apr 26", "createdAt": "2026-04-27T03:13:22Z", "sortDate": "2026-04-27T03:13:22Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TQfbqLG0Cw1zW4e05VOck3Z", "stripePaymentIntentId": "pi_3TQfbqLG0Cw1zW4e0xCVetD1", "orderId": "paj-2026042703132246", "contentId": null, "contentTitle": null}, {"id": "ch_3TPsMQLG0Cw1zW4e10Y4DH94", "date": "Apr 24", "createdAt": "2026-04-24T22:38:11Z", "sortDate": "2026-04-24T22:38:11Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TPsMQLG0Cw1zW4e10Y4DH94", "stripePaymentIntentId": "pi_3TPsMQLG0Cw1zW4e1KupKuAF", "orderId": "jas-2026042422381072", "contentId": null, "contentTitle": null}, {"id": "ch_3TP3uxLG0Cw1zW4e0Bc1E9wU", "date": "Apr 22", "createdAt": "2026-04-22T16:46:28Z", "sortDate": "2026-04-22T16:46:28Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TP3uxLG0Cw1zW4e0Bc1E9wU", "stripePaymentIntentId": "pi_3TP3uxLG0Cw1zW4e0LSedyYu", "orderId": "had-2026042216462753", "contentId": null, "contentTitle": null}, {"id": "ch_3TOx2ZLG0Cw1zW4e1kfcn4xI", "date": "Apr 22", "createdAt": "2026-04-22T09:25:51Z", "sortDate": "2026-04-22T09:25:51Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TOx2ZLG0Cw1zW4e1kfcn4xI", "stripePaymentIntentId": "pi_3TOx2ZLG0Cw1zW4e1W7SJZXg", "orderId": "vec-2026042209255089", "contentId": null, "contentTitle": null}, {"id": "ch_3TOTAALG0Cw1zW4e0mRRpkrF", "date": "Apr 20", "createdAt": "2026-04-21T01:31:42Z", "sortDate": "2026-04-21T01:31:42Z", "amount": 14.99, "description": "Anonymous Customer - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TOTAALG0Cw1zW4e0mRRpkrF", "stripePaymentIntentId": "pi_3TOTAALG0Cw1zW4e0dIkMbV1", "orderId": "mig-2026042101314189", "contentId": null, "contentTitle": null}, {"id": "ch_3TNjaVLG0Cw1zW4e2DKoJF6H", "date": "Apr 18", "createdAt": "2026-04-19T00:51:51Z", "sortDate": "2026-04-19T00:51:51Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TNjaVLG0Cw1zW4e2DKoJF6H", "stripePaymentIntentId": "pi_3TNjaVLG0Cw1zW4e2up0QKdp", "orderId": "shc-2026041900515126", "contentId": null, "contentTitle": null}, {"id": "ch_3TN1fjLG0Cw1zW4e1LDsMhNA", "date": "Apr 16", "createdAt": "2026-04-17T01:58:20Z", "sortDate": "2026-04-17T01:58:20Z", "amount": 9.99, "description": "Customer User - Purchase Bundle 10: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TN1fjLG0Cw1zW4e1LDsMhNA", "stripePaymentIntentId": "pi_3TN1fjLG0Cw1zW4e1efwz7Hc", "orderId": "cae-2026041701581961", "contentId": null, "contentTitle": null}, {"id": "ch_3TMxdiLG0Cw1zW4e0SJiBjPo", "date": "Apr 16", "createdAt": "2026-04-16T21:39:58Z", "sortDate": "2026-04-16T21:39:58Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TMxdiLG0Cw1zW4e0SJiBjPo", "stripePaymentIntentId": "pi_3TMxdiLG0Cw1zW4e0ApnxCmW", "orderId": "jom-2026041621395774", "contentId": null, "contentTitle": null}, {"id": "ch_3TMxZHLG0Cw1zW4e0SlNjQzx", "date": "Apr 16", "createdAt": "2026-04-16T21:35:24Z", "sortDate": "2026-04-16T21:35:24Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TMxZHLG0Cw1zW4e0SlNjQzx", "stripePaymentIntentId": "pi_3TMxZHLG0Cw1zW4e0RXKnWOb", "orderId": "jom-2026041621352354", "contentId": null, "contentTitle": null}, {"id": "ch_3T45wBLG0Cw1zW4e1ah1kA3Y", "date": "Feb 23", "createdAt": "2026-02-23T20:41:03Z", "sortDate": "2026-02-23T20:41:03Z", "amount": 29.99, "description": "Stripe charge", "source": "Stripe", "stripeChargeId": "ch_3T45wBLG0Cw1zW4e1ah1kA3Y", "stripePaymentIntentId": null, "orderId": "1000", "contentId": "5521", "contentTitle": "The Librarians: The Next Chapter"}, {"id": "ch_3T0YwGLG0Cw1zW4e1qfmMfux", "date": "Feb 13", "createdAt": "2026-02-14T02:50:32Z", "sortDate": "2026-02-14T02:50:32Z", "amount": 29.99, "description": "Stripe charge", "source": "Stripe", "stripeChargeId": "ch_3T0YwGLG0Cw1zW4e1qfmMfux", "stripePaymentIntentId": null, "orderId": "998", "contentId": "5521", "contentTitle": "The Librarians: The Next Chapter"}, {"id": "ch_3SrEfALG0Cw1zW4e1KiLmfkZ", "date": "Jan 19", "createdAt": "2026-01-19T09:22:20Z", "sortDate": "2026-01-19T09:22:20Z", "amount": 19.99, "description": "Stripe charge", "source": "Stripe", "stripeChargeId": "ch_3SrEfALG0Cw1zW4e1KiLmfkZ", "stripePaymentIntentId": null, "orderId": "991", "contentId": "3133", "contentTitle": "The Ark Season One"}, {"id": "ch_3SpJQfLG0Cw1zW4e0l6Kw2Ea", "date": "Jan 13", "createdAt": "2026-01-14T02:03:25Z", "sortDate": "2026-01-14T02:03:25Z", "amount": 29.99, "description": "Stripe charge", "source": "Stripe", "stripeChargeId": "ch_3SpJQfLG0Cw1zW4e0l6Kw2Ea", "stripePaymentIntentId": null, "orderId": "990", "contentId": "5521", "contentTitle": "The Librarians: The Next Chapter"}, {"id": "ch_3SlCjkLG0Cw1zW4e1MP1Uus6", "date": "Jan 2", "createdAt": "2026-01-02T18:06:08Z", "sortDate": "2026-01-02T18:06:08Z", "amount": 89.99, "description": "Stripe charge", "source": "Stripe", "stripeChargeId": "ch_3SlCjkLG0Cw1zW4e1MP1Uus6", "stripePaymentIntentId": null, "orderId": "988", "contentId": "1337", "contentTitle": "Leverage Season 4"}, {"id": "ch_3Skt4xLG0Cw1zW4e1Yu98Lrf", "date": "Jan 1", "createdAt": "2026-01-01T21:06:43Z", "sortDate": "2026-01-01T21:06:43Z", "amount": 19.99, "description": "Stripe charge", "source": "Stripe", "stripeChargeId": "ch_3Skt4xLG0Cw1zW4e1Yu98Lrf", "stripePaymentIntentId": null, "orderId": "987", "contentId": "5472", "contentTitle": " Leverage: Redemption Season 2"}]}, "monthToDate": {"label": "Stripe sales this month", "range": "Jul 1-Jul 19, 2026", "purchases": 0, "purchaseRevenue": 0, "revenuePerPurchase": 0, "payments": []}, "lastWeek": {"label": "Stripe sales last complete week", "range": "Jul 6-Jul 12, 2026", "purchases": 0, "purchaseRevenue": 0, "revenuePerPurchase": 0, "payments": []}, "thisWeek": {"label": "Stripe sales, complete week", "range": "Jul 20-Jul 26, 2026", "purchases": 2, "purchaseRevenue": 40.97, "developerRevShare": 40.97, "revenuePerPurchase": 20.485, "payments": [{"date": "Jul 21", "createdAt": "2026-07-21", "amount": 19.98, "developerRevShare": 19.98, "description": "Stripe - Purchase Bundle 20", "source": "Stripe", "chargeId": "ch_3Tvm3yLG0Cw1zW4e0BJSXl2H"}, {"date": "Jul 26", "createdAt": "2026-07-26", "amount": 20.99, "developerRevShare": 20.99, "description": "Stripe - Purchase Bundle 21", "source": "Stripe", "chargeId": "ch_3TxbcULG0Cw1zW4e1fG5wBI6"}], "note": "Two captured, paid, non-refunded Stripe charges within the complete Jul 20-Jul 26 week."}, "currentCompleteWeek": {"label": "Stripe sales last complete week", "range": "Jul 6-Jul 12, 2026", "purchases": 0, "purchaseRevenue": 0, "revenuePerPurchase": 0, "payments": []}, "weekToDate": {"label": "Stripe sales, complete week", "range": "Jul 20-Jul 26, 2026", "purchases": 2, "purchaseRevenue": 40.97, "developerRevShare": 40.97, "revenuePerPurchase": 20.485, "payments": [{"date": "Jul 21", "createdAt": "2026-07-21", "amount": 19.98, "developerRevShare": 19.98, "description": "Stripe - Purchase Bundle 20", "source": "Stripe", "chargeId": "ch_3Tvm3yLG0Cw1zW4e0BJSXl2H"}, {"date": "Jul 26", "createdAt": "2026-07-26", "amount": 20.99, "developerRevShare": 20.99, "description": "Stripe - Purchase Bundle 21", "source": "Stripe", "chargeId": "ch_3TxbcULG0Cw1zW4e1fG5wBI6"}], "note": "Two captured, paid, non-refunded Stripe charges within the complete Jul 20-Jul 26 week."}, "recent12Days": {"label": "Stripe last 12 days", "range": "Jul 8-Jul 19, 2026", "purchases": 0, "purchaseRevenue": 0, "revenuePerPurchase": 0, "payments": []}, "lifetimeObserved": {"range": "Through Jul 19, 2026 reconnect pull", "purchases": 22, "purchaseRevenue": 454.78, "revenuePerPurchase": 20.67}, "mix": [{"label": "Title purchases", "purchases": 23, "purchaseRevenue": 474.77}, {"label": "Bundle purchases", "purchases": 1, "purchaseRevenue": 9.99}, {"label": "Subscriptions", "purchases": 0, "purchaseRevenue": 0}], "recentPayments": [{"id": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV", "date": "Jun 27", "createdAt": "2026-06-27T21:53:44Z", "sortDate": "2026-06-27T21:53:44Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV", "stripePaymentIntentId": "pi_3Tn4AWLG0Cw1zW4e2lZs02fb", "orderId": "jak-2026062721534447", "contentId": null, "contentTitle": null}, {"id": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7", "date": "Jun 15", "createdAt": "2026-06-15T13:18:05Z", "sortDate": "2026-06-15T13:18:05Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7", "stripePaymentIntentId": "pi_3TiaOvLG0Cw1zW4e1J9vWz96", "orderId": "moj-2026061513180484", "contentId": null, "contentTitle": null}, {"id": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi", "date": "Jun 12", "createdAt": "2026-06-12T23:06:49Z", "sortDate": "2026-06-12T23:06:49Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi", "stripePaymentIntentId": "pi_3TheA0LG0Cw1zW4e2ajY663E", "orderId": "tub-2026061223064851", "contentId": null, "contentTitle": null}, {"id": "ch_3Tc8fSLG0Cw1zW4e0JGS5fDH", "date": "May 28", "createdAt": "2026-05-28T18:28:30Z", "sortDate": "2026-05-28T18:28:30Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tc8fSLG0Cw1zW4e0JGS5fDH", "stripePaymentIntentId": "pi_3Tc8fSLG0Cw1zW4e0aRnmEQw", "orderId": "smd-2026052818283000", "contentId": null, "contentTitle": null}, {"id": "ch_3TYIl0LG0Cw1zW4e25Rk2nkG", "date": "May 17", "createdAt": "2026-05-18T04:26:22Z", "sortDate": "2026-05-18T04:26:22Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TYIl0LG0Cw1zW4e25Rk2nkG", "stripePaymentIntentId": "pi_3TYIl0LG0Cw1zW4e29yDkQvy", "orderId": "mcb-2026051804262176", "contentId": null, "contentTitle": null}, {"id": "ch_3TXC7jLG0Cw1zW4e0RRivOUl", "date": "May 14", "createdAt": "2026-05-15T03:09:15Z", "sortDate": "2026-05-15T03:09:15Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TXC7jLG0Cw1zW4e0RRivOUl", "stripePaymentIntentId": "pi_3TXC7jLG0Cw1zW4e0aTDzJEJ", "orderId": "amr-2026051503091512", "contentId": null, "contentTitle": null}, {"id": "ch_3TU0PpLG0Cw1zW4e1Qz5eWBw", "date": "May 6", "createdAt": "2026-05-06T08:02:45Z", "sortDate": "2026-05-06T08:02:45Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TU0PpLG0Cw1zW4e1Qz5eWBw", "stripePaymentIntentId": "pi_3TU0PpLG0Cw1zW4e1xA1B4CB", "orderId": "mcj-2026050608024483", "contentId": null, "contentTitle": null}, {"id": "ch_3TQfbqLG0Cw1zW4e05VOck3Z", "date": "Apr 26", "createdAt": "2026-04-27T03:13:22Z", "sortDate": "2026-04-27T03:13:22Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TQfbqLG0Cw1zW4e05VOck3Z", "stripePaymentIntentId": "pi_3TQfbqLG0Cw1zW4e0xCVetD1", "orderId": "paj-2026042703132246", "contentId": null, "contentTitle": null}, {"id": "ch_3TPsMQLG0Cw1zW4e10Y4DH94", "date": "Apr 24", "createdAt": "2026-04-24T22:38:11Z", "sortDate": "2026-04-24T22:38:11Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TPsMQLG0Cw1zW4e10Y4DH94", "stripePaymentIntentId": "pi_3TPsMQLG0Cw1zW4e1KupKuAF", "orderId": "jas-2026042422381072", "contentId": null, "contentTitle": null}, {"id": "ch_3TP3uxLG0Cw1zW4e0Bc1E9wU", "date": "Apr 22", "createdAt": "2026-04-22T16:46:28Z", "sortDate": "2026-04-22T16:46:28Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TP3uxLG0Cw1zW4e0Bc1E9wU", "stripePaymentIntentId": "pi_3TP3uxLG0Cw1zW4e0LSedyYu", "orderId": "had-2026042216462753", "contentId": null, "contentTitle": null}], "dailyTrend": [{"date": "Apr 13", "rawDate": "20260413", "purchases": 0, "purchaseRevenue": 0}, {"date": "Apr 14", "rawDate": "20260414", "purchases": 0, "purchaseRevenue": 0}, {"date": "Apr 15", "rawDate": "20260415", "purchases": 0, "purchaseRevenue": 0}, {"date": "Apr 16", "rawDate": "20260416", "purchases": 3, "purchaseRevenue": 39.97}, {"date": "Apr 17", "rawDate": "20260417", "purchases": 0, "purchaseRevenue": 0}, {"date": "Apr 18", "rawDate": "20260418", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Apr 19", "rawDate": "20260419", "purchases": 0, "purchaseRevenue": 0}, {"date": "Apr 20", "rawDate": "20260420", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Apr 21", "rawDate": "20260421", "purchases": 0, "purchaseRevenue": 0}, {"date": "Apr 22", "rawDate": "20260422", "purchases": 2, "purchaseRevenue": 29.98}, {"date": "Apr 23", "rawDate": "20260423", "purchases": 0, "purchaseRevenue": 0}, {"date": "Apr 24", "rawDate": "20260424", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Apr 25", "rawDate": "20260425", "purchases": 0, "purchaseRevenue": 0}, {"date": "Apr 26", "rawDate": "20260426", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Apr 27", "rawDate": "20260427", "purchases": 0, "purchaseRevenue": 0}, {"date": "Apr 28", "rawDate": "20260428", "purchases": 0, "purchaseRevenue": 0}, {"date": "Apr 29", "rawDate": "20260429", "purchases": 0, "purchaseRevenue": 0}, {"date": "Apr 30", "rawDate": "20260430", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 1", "rawDate": "20260501", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 2", "rawDate": "20260502", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 3", "rawDate": "20260503", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 4", "rawDate": "20260504", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 5", "rawDate": "20260505", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 6", "rawDate": "20260506", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "May 7", "rawDate": "20260507", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 8", "rawDate": "20260508", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 9", "rawDate": "20260509", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 10", "rawDate": "20260510", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 11", "rawDate": "20260511", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 12", "rawDate": "20260512", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 13", "rawDate": "20260513", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 14", "rawDate": "20260514", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "May 15", "rawDate": "20260515", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 16", "rawDate": "20260516", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 17", "rawDate": "20260517", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "May 18", "rawDate": "20260518", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 19", "rawDate": "20260519", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 20", "rawDate": "20260520", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 21", "rawDate": "20260521", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 22", "rawDate": "20260522", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 23", "rawDate": "20260523", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 24", "rawDate": "20260524", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 25", "rawDate": "20260525", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 26", "rawDate": "20260526", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 27", "rawDate": "20260527", "purchases": 0, "purchaseRevenue": 0}, {"date": "May 28", "rawDate": "20260528", "purchases": 0, "purchaseRevenue": 0}, {"date": "Jun 12", "rawDate": "20260612", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Jun 15", "rawDate": "20260615", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Jun 28", "rawDate": "20260628", "purchases": 1, "purchaseRevenue": 14.99}], "note": "Stripe connector connected. Reconciled Jul 27: two new valid captured non-refunded sales within the complete Jul 20-Jul 26 week (Jul 21 $19.98, Jul 26 $20.99). Two additional same-day Jul 27 sales ($35.98) are tracked separately and are not part of the complete week.", "connectorStatus": "CONNECTED_UPDATED", "lastStripeVisiblePayment": {"id": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV", "date": "Jun 27", "createdAt": "2026-06-27T21:53:44Z", "sortDate": "2026-06-27T21:53:44Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV", "stripePaymentIntentId": "pi_3Tn4AWLG0Cw1zW4e2lZs02fb", "orderId": "jak-2026062721534447", "contentId": null, "contentTitle": null}, "latestConnectorAudit": {"checkedAt": "2026-07-19 09:55 PDT", "succeeded2026NonRefundedCharges": 22, "purchaseRevenue": 454.78, "newNetPaymentsFound": 0, "newNetRevenueFound": 0, "refunded2026ChargesExcluded": 3, "refundedCharges": [{"id": "ch_3TtAJTLG0Cw1zW4e2vfLcnfE", "date": "Jul 14", "createdAt": "2026-07-14T17:40:11Z", "sortDate": "2026-07-14T17:40:11Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TtAJTLG0Cw1zW4e2vfLcnfE", "stripePaymentIntentId": "pi_3TtAJTLG0Cw1zW4e203NKpmf", "orderId": "arm-2026071417401091", "contentId": null, "contentTitle": null, "amountRefunded": 14.99}, {"id": "ch_3TKta2LG0Cw1zW4e2jEPD9iR", "date": "Apr 10", "createdAt": "2026-04-11T04:55:38Z", "sortDate": "2026-04-11T04:55:38Z", "amount": 14.99, "description": "Stripe charge", "source": "Stripe", "stripeChargeId": "ch_3TKta2LG0Cw1zW4e2jEPD9iR", "stripePaymentIntentId": "pi_3TKta2LG0Cw1zW4e26XmyZs9", "orderId": "1021", "contentId": "5633", "contentTitle": "The Draw", "amountRefunded": 14.99}, {"id": "ch_3TBhVMLG0Cw1zW4e1sOFxVJX", "date": "Mar 16", "createdAt": "2026-03-16T20:12:48Z", "sortDate": "2026-03-16T20:12:48Z", "amount": 14.99, "description": "Stripe charge", "source": "Stripe", "stripeChargeId": "ch_3TBhVMLG0Cw1zW4e1sOFxVJX", "stripePaymentIntentId": null, "orderId": "1006", "contentId": "5588", "contentTitle": "The Bunker", "amountRefunded": 14.99}], "latestVisiblePayment": {"id": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV", "date": "Jun 27", "createdAt": "2026-06-27T21:53:44Z", "sortDate": "2026-06-27T21:53:44Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV", "stripePaymentIntentId": "pi_3Tn4AWLG0Cw1zW4e2lZs02fb", "orderId": "jak-2026062721534447", "contentId": null, "contentTitle": null}, "correction": "Removed refunded 2026 charges from Stripe sales math: delta -2 purchases / $-29.98 vs prior dashboard Stripe total."}, "staleNote": "Fresh Stripe connector check completed Jul 19, 2026; no stale Stripe values remain in this preview.", "sameDayFollowOn": {"label": "Stripe sales same-day as this refresh (Jul 27), not part of the complete week", "range": "Jul 27, 2026", "purchases": 2, "purchaseRevenue": 35.98, "payments": [{"date": "Jul 27", "createdAt": "2026-07-27", "amount": 14.99, "description": "Stripe - Purchase this title", "source": "Stripe", "chargeId": "ch_3Txt8TLG0Cw1zW4e0nsHWvcG"}, {"date": "Jul 27", "createdAt": "2026-07-27", "amount": 20.99, "description": "Stripe - Purchase Bundle 21", "source": "Stripe", "chargeId": "ch_3Txt79LG0Cw1zW4e1I51WlLH"}], "note": "Included in YTD-through-refresh totals only where explicitly labeled; excluded from the Jul 20-Jul 26 complete-week figures."}}, "roku": {"sourceLabel": "Roku-visible sales", "sourceDetail": "Roku-visible sales come from emailed Roku Sales Activity Reports. The Jun 8 report added Jun 4 and Jun 7 purchases. These are not total ElectricNOW sales.", "reportEmailDate": "2026-07-27T14:19:00+00:00", "reportGenerated": "July 27, 2026 7:19 AM PDT", "baselineWindow": {"label": "Roku launch baseline", "range": "Apr 13-Apr 19, 2026", "purchases": 5, "purchaseRevenue": 74.95, "developerRevShare": 59.95, "revenuePerPurchase": 14.99, "deltaPurchasesPct": null, "deltaRevenuePct": null}, "yearToDate": {"label": "Roku sales this year", "range": "Jan 1-Jun 30, 2026", "purchases": 25, "purchaseRevenue": 459.75, "developerRevShare": 368.75, "revenuePerPurchase": 18.89, "payments": [{"date": "Jun 30", "createdAt": "2026-06-30", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}, {"date": "Jun 27", "createdAt": "2026-06-27", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 19", "createdAt": "2026-06-19", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}, {"date": "Jun 13", "createdAt": "2026-06-13", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 11", "createdAt": "2026-06-11", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 4", "createdAt": "2026-06-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 7", "createdAt": "2026-06-07", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "May 20", "createdAt": "2026-05-20", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "May 18", "createdAt": "2026-05-18", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "May 16", "createdAt": "2026-05-16", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "May 14", "createdAt": "2026-05-14", "amount": 2.99, "developerRevShare": 2.39, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 13", "createdAt": "2026-05-13", "amount": 2.99, "developerRevShare": 2.39, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 12", "createdAt": "2026-05-12", "amount": 5.98, "developerRevShare": 4.78, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 4", "createdAt": "2026-05-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 22", "createdAt": "2026-04-22", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}, {"date": "Apr 19", "createdAt": "2026-04-19", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 17", "createdAt": "2026-04-17", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 16", "createdAt": "2026-04-16", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 14", "createdAt": "2026-04-14", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}]}, "monthToDate": {"label": "Roku sales this month", "range": "Jun 1-Jun 14, 2026", "purchases": 4, "purchaseRevenue": 64.96, "developerRevShare": 51.96, "revenuePerPurchase": 16.24, "deltaPurchasesPct": null, "deltaRevenuePct": null, "payments": [{"date": "Jun 4", "createdAt": "2026-06-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 7", "createdAt": "2026-06-07", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "Jun 11", "createdAt": "2026-06-11", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 13", "createdAt": "2026-06-13", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}]}, "lastWeek": {"label": "Roku sales last week", "range": "Jun 29-Jul 5, 2026", "purchases": 1, "purchaseRevenue": 54.99, "developerRevShare": 43.99, "revenuePerPurchase": 54.99, "deltaPurchasesPct": null, "deltaRevenuePct": null, "payments": [{"date": "Jun 30", "createdAt": "2026-06-30", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}]}, "thisWeek": {"label": "Roku visible sales, complete week", "range": "Jul 20-Jul 26, 2026", "purchases": 2, "purchaseRevenue": 39.98, "developerRevShare": 31.98, "revenuePerPurchase": 19.99, "deltaPurchasesPct": 0.0, "deltaRevenuePct": 73.977372, "payments": [{"date": "Jul 20", "createdAt": "2026-07-20", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "Jul 25", "createdAt": "2026-07-25", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}], "note": "Jul 27 Roku Sales Activity Report parsed from Outlook ROKU folder. Two Purchase Bundle 20 sales, one on Jul 20 and one on Jul 25."}, "currentCompleteWeek": {"label": "Roku visible sales, complete week", "range": "Jul 20-Jul 26, 2026", "purchases": 2, "purchaseRevenue": 39.98, "developerRevShare": 31.98, "revenuePerPurchase": 19.99, "deltaPurchasesPct": 0.0, "deltaRevenuePct": 73.977372, "payments": [{"date": "Jul 20", "createdAt": "2026-07-20", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "Jul 25", "createdAt": "2026-07-25", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}], "note": "Jul 27 Roku Sales Activity Report parsed from Outlook ROKU folder. Two Purchase Bundle 20 sales, one on Jul 20 and one on Jul 25."}, "weekToDate": {"label": "Roku visible sales, complete week", "range": "Jul 20-Jul 26, 2026", "purchases": 2, "purchaseRevenue": 39.98, "developerRevShare": 31.98, "revenuePerPurchase": 19.99, "deltaPurchasesPct": 0.0, "deltaRevenuePct": 73.977372, "payments": [{"date": "Jul 20", "createdAt": "2026-07-20", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "Jul 25", "createdAt": "2026-07-25", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}], "note": "Jul 27 Roku Sales Activity Report parsed from Outlook ROKU folder. Two Purchase Bundle 20 sales, one on Jul 20 and one on Jul 25."}, "lifetimeObserved": {"range": "Through Jun 8, 2026 Roku Sales Activity report", "purchases": 16, "purchaseRevenue": 241.84, "developerRevShare": 193.44}, "mix": [{"label": "Roku title purchases", "purchases": 15, "purchaseRevenue": 176.85}, {"label": "Roku bundle purchases", "purchases": 4, "purchaseRevenue": 184.96}], "recentPayments": [{"date": "Jun 30", "createdAt": "2026-06-30", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}, {"date": "Jun 4", "createdAt": "2026-06-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 7", "createdAt": "2026-06-07", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "May 20", "createdAt": "2026-05-20", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "May 18", "createdAt": "2026-05-18", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "May 16", "createdAt": "2026-05-16", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "May 14", "createdAt": "2026-05-14", "amount": 2.99, "developerRevShare": 2.39, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 13", "createdAt": "2026-05-13", "amount": 2.99, "developerRevShare": 2.39, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 12", "createdAt": "2026-05-12", "amount": 5.98, "developerRevShare": 4.78, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 4", "createdAt": "2026-05-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 22", "createdAt": "2026-04-22", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}, {"date": "Apr 19", "createdAt": "2026-04-19", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 17", "createdAt": "2026-04-17", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 16", "createdAt": "2026-04-16", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 14", "createdAt": "2026-04-14", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}], "dailyTrend": [{"date": "Apr 13", "rawDate": "20260413", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 14", "rawDate": "20260414", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 15", "rawDate": "20260415", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 16", "rawDate": "20260416", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 17", "rawDate": "20260417", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 18", "rawDate": "20260418", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 19", "rawDate": "20260419", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 20", "rawDate": "20260420", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 21", "rawDate": "20260421", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 22", "rawDate": "20260422", "purchases": 1, "purchaseRevenue": 54.99, "developerRevShare": 43.99}, {"date": "Apr 23", "rawDate": "20260423", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 24", "rawDate": "20260424", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 25", "rawDate": "20260425", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 26", "rawDate": "20260426", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 27", "rawDate": "20260427", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 28", "rawDate": "20260428", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 29", "rawDate": "20260429", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 30", "rawDate": "20260430", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 1", "rawDate": "20260501", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 2", "rawDate": "20260502", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 3", "rawDate": "20260503", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 4", "rawDate": "20260504", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "May 5", "rawDate": "20260505", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 6", "rawDate": "20260506", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 7", "rawDate": "20260507", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 8", "rawDate": "20260508", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 9", "rawDate": "20260509", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 10", "rawDate": "20260510", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 11", "rawDate": "20260511", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 12", "rawDate": "20260512", "purchases": 2, "purchaseRevenue": 5.98, "developerRevShare": 4.78}, {"date": "May 13", "rawDate": "20260513", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 2.39}, {"date": "May 14", "rawDate": "20260514", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 2.39}, {"date": "May 15", "rawDate": "20260515", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 16", "rawDate": "20260516", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 15.99}, {"date": "May 17", "rawDate": "20260517", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 18", "rawDate": "20260518", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "May 19", "rawDate": "20260519", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 20", "rawDate": "20260520", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "May 21", "rawDate": "20260521", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 22", "rawDate": "20260522", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 23", "rawDate": "20260523", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 24", "rawDate": "20260524", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 25", "rawDate": "20260525", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 26", "rawDate": "20260526", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 27", "rawDate": "20260527", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 28", "rawDate": "20260528", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 29", "rawDate": "20260529", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 30", "rawDate": "20260530", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 31", "rawDate": "20260531", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Jun 11", "rawDate": "20260611", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Jun 13", "rawDate": "20260613", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Jun 19", "rawDate": "20260619", "purchases": 1, "purchaseRevenue": 54.99, "developerRevShare": 43.99}, {"date": "Jun 27", "rawDate": "20260627", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Jun 30", "rawDate": "20260630", "purchases": 1, "purchaseRevenue": 54.99, "developerRevShare": 43.99}], "note": "Latest Roku Sales Activity Report found in Outlook ROKU folder on Jul 27. Two Purchase Bundle 20 sales added: Jul 20 and Jul 25 ($19.99 each, $15.99 dev rev share each)."}, "apple": {"sourceLabel": "Apple App Store manual snapshot", "sourceDetail": "Apple App Store in-app purchase snapshot manually entered from App Store Connect screenshots. Gross customer sales are shown; estimated net assumes Apple keeps 30% before remittance. This remains a manual source until Apple App Store Connect API reporting is connected.", "isManualSnapshot": true, "snapshotRange": "Jun 29-Jul 5, 2026", "platformFeePct": 30, "estimatedNetPct": 70, "baselineWindow": {"label": "Apple launch baseline", "range": "Apr 13-Apr 19, 2026", "purchases": 2, "purchaseRevenue": 29.98, "developerRevShare": 20.99, "revenuePerPurchase": 14.99, "payments": [{"date": "Apr 16", "amount": 29.98, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "lastWeek": {"label": "Apple sales last week", "range": "May 24-May 30, 2026", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49, "revenuePerPurchase": 14.99, "payments": [{"date": "May 25", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "thisWeek": {"label": "Apple sales this week", "range": "Jun 29-Jul 5, 2026", "purchases": 2, "purchaseRevenue": 29.98, "developerRevShare": 20.98, "revenuePerPurchase": 14.99, "payments": [{"date": "Jul 2", "createdAt": "2026-07-02", "amount": 14.99, "developerRevShare": 10.49, "description": "Apple - Purchase HD 15", "source": "Apple"}, {"date": "Jul 5", "createdAt": "2026-07-05", "amount": 14.99, "developerRevShare": 10.49, "description": "Apple - Purchase HD 15", "source": "Apple"}]}, "monthToDate": {"label": "Apple sales this month", "range": "Jun 1-Jun 14, 2026", "purchases": 5, "purchaseRevenue": 74.95, "developerRevShare": 52.46, "revenuePerPurchase": 14.99, "payments": [{"date": "Jun 10", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 11", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 13", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 13", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 14", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "recent12Days": {"label": "Apple sales last 12 days", "range": "May 20-May 31, 2026", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49, "revenuePerPurchase": 14.99, "payments": [{"date": "May 25", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "yearToDate": {"label": "Apple App Store snapshot", "range": "Jan 1-Jul 5, 2026", "purchases": 22, "purchaseRevenue": 362.78, "developerRevShare": 253.9, "revenuePerPurchase": 16.49, "payments": [{"date": "Apr 16", "amount": 29.98, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Apr 21", "amount": 9.99, "description": "Apple App Store - Purchase Bundle 10", "source": "Apple App Store"}, {"date": "May 13", "amount": 29.99, "description": "Apple App Store - Purchase Bundle 30", "source": "Apple App Store"}, {"date": "May 18", "amount": 29.99, "description": "Apple App Store - Purchase Bundle 30", "source": "Apple App Store"}, {"date": "May 18", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "May 25", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Apr 6-May 10", "amount": 29.99, "description": "Apple App Store - Purchase Bundle 30, date pending", "source": "Apple App Store"}, {"date": "Jun 10", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 11", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 13", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 13", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 14", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 16", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 22", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 24", "amount": 19.99, "description": "Apple App Store - Purchase Bundle 20", "source": "Apple App Store"}, {"date": "Jun 26", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 27", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 28", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 30", "amount": 2.99, "description": "Apple App Store - Purchase HD 3", "source": "Apple App Store"}, {"date": "Jul 2", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jul 5", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "dailyTrend": [{"date": "Apr 16", "rawDate": "20260416", "purchases": 2, "purchaseRevenue": 29.98, "developerRevShare": 20.99}, {"date": "Apr 21", "rawDate": "20260421", "purchases": 1, "purchaseRevenue": 9.99, "developerRevShare": 6.99}, {"date": "May 13", "rawDate": "20260513", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 20.99}, {"date": "May 18", "rawDate": "20260518", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 20.99}, {"date": "May 18", "rawDate": "20260518", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "May 25", "rawDate": "20260525", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 10", "rawDate": "20260610", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 11", "rawDate": "20260611", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 13", "rawDate": "20260613", "purchases": 2, "purchaseRevenue": 29.98, "developerRevShare": 20.99}, {"date": "Jun 14", "rawDate": "20260614", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 16", "rawDate": "20260616", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 22", "rawDate": "20260622", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 24", "rawDate": "20260624", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 13.99}, {"date": "Jun 26", "rawDate": "20260626", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 27", "rawDate": "20260627", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 28", "rawDate": "20260628", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 30", "rawDate": "20260630", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 2.09}, {"date": "Jul 2", "rawDate": "20260702", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jul 5", "rawDate": "20260705", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}], "undatedSales": [{"dateLabel": "Apr 6-May 10", "amount": 29.99, "count": 1, "description": "Apple App Store - Purchase Bundle 30, date pending"}], "mix": [{"label": "Apple Purchase Bundle 30", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 20.99}, {"label": "Apple Purchase HD 15", "purchases": 14, "purchaseRevenue": 209.86, "developerRevShare": 146.87}, {"label": "Apple Purchase Bundle 10", "purchases": 1, "purchaseRevenue": 9.99, "developerRevShare": 6.99}, {"label": "Apple Purchase Bundle 20", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 13.99}, {"label": "Apple Purchase HD 3", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 2.09}], "note": "No new Apple App Store sales screenshot since Jul 6, 2026 (last recorded sale Jul 5, 2026). Apple sales unchanged this refresh; only downloads/updates were refreshed via manualAppleDownloads.", "latestSalesSnapshot": {"period": "Jun 29-Jul 5, 2026", "start": "2026-06-29", "end": "2026-07-05", "purchases": 2, "purchaseRevenue": 29.98, "alreadyIncludedInCumulative": true, "note": "Latest Apple App Store Connect screenshots (Jun 29-Jul 5, 2026) show two new Purchase HD 15 sales on Jul 2 and Jul 5 ($14.99 each, est net $10.49) = $29.98 gross (est net $20.98). The Jun 30 Purchase HD 3 ($2.99) in the same screenshot was already recorded Jul 2, 2026 and is not double-counted. Added Jul 6, 2026, lifting cumulative Apple to 22/$362.80 gross (est net $253.90)."}}, "sourceBreakout": [{"source": "Stripe", "purchases": 25, "purchaseRevenue": 515.73}, {"source": "Roku", "purchases": 25, "purchaseRevenue": 459.75}, {"source": "Apple manual", "purchases": 22, "purchaseRevenue": 362.78}], "baselineWindow": {"label": "Launch baseline", "range": "Apr 13-Apr 19, 2026", "purchases": 11, "purchaseRevenue": 159.89, "developerRevShare": 80.94, "revenuePerPurchase": 14.54, "payments": [{"date": "Apr 16", "amount": 29.98, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "yearToDate": {"label": "Visible sales this year", "range": "Jan 1-Jul 26, 2026", "purchases": 72, "purchaseRevenue": 1338.26, "developerRevShare": 1138.38, "revenuePerPurchase": 18.59}, "monthToDate": {"label": "Sales this month", "range": "Jun 1-Jun 17, 2026", "purchases": 12, "purchaseRevenue": 184.88, "developerRevShare": 144.88, "revenuePerPurchase": 15.41, "payments": [{"date": "Jun 15", "createdAt": "2026-06-15T13:18:05+00:00", "amount": 14.99, "developerRevShare": 14.99, "description": "Stripe - Purchase this title", "source": "Stripe", "stripeChargeId": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7"}, {"date": "Jun 12", "createdAt": "2026-06-12T23:06:49+00:00", "amount": 14.99, "developerRevShare": 14.99, "description": "Stripe - Purchase this title", "source": "Stripe", "stripeChargeId": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi"}, {"date": "Jun 10", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 11", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 13", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 13", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 14", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 4", "createdAt": "2026-06-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 7", "createdAt": "2026-06-07", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "Jun 11", "createdAt": "2026-06-11", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 13", "createdAt": "2026-06-13", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 16", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "lastWeek": {"label": "Sales last week", "range": "Jun 1-Jun 7, 2026", "purchases": 2, "purchaseRevenue": 34.98, "revenuePerPurchase": 17.49, "payments": [{"date": "Jun 7", "createdAt": "2026-06-07", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "Jun 4", "createdAt": "2026-06-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}], "developerRevShare": 27.98}, "thisWeek": {"label": "Visible platform sales, complete week", "range": "Jul 20-Jul 26, 2026", "purchases": 4, "purchaseRevenue": 80.95, "developerRevShare": 72.95, "revenuePerPurchase": 20.2375, "note": "Complete Jul 20-Jul 26 week: two Roku sales ($39.98) and two Stripe sales ($40.97). Apple had zero new sales this week (downloads-only update)."}, "currentCompleteWeek": {"label": "Visible platform sales, complete week", "range": "Jul 20-Jul 26, 2026", "purchases": 4, "purchaseRevenue": 80.95, "developerRevShare": 72.95, "revenuePerPurchase": 20.2375, "note": "Complete Jul 20-Jul 26 week: two Roku sales ($39.98) and two Stripe sales ($40.97). Apple had zero new sales this week (downloads-only update)."}, "weekToDate": {"label": "Visible platform sales, complete week", "range": "Jul 20-Jul 26, 2026", "purchases": 4, "purchaseRevenue": 80.95, "developerRevShare": 72.95, "revenuePerPurchase": 20.2375, "note": "Complete Jul 20-Jul 26 week: two Roku sales ($39.98) and two Stripe sales ($40.97). Apple had zero new sales this week (downloads-only update)."}, "recent12Days": {"label": "Visible sales last 12 days", "range": "May 29-Jun 9, 2026", "purchases": 2, "purchaseRevenue": 34.98, "revenuePerPurchase": 17.49, "payments": [{"date": "Jun 7", "createdAt": "2026-06-07", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "Jun 4", "createdAt": "2026-06-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}], "developerRevShare": 27.98}, "lifetimeObserved": {"range": "Through Jun 8, 2026 refresh", "purchases": 45, "purchaseRevenue": 841.55, "developerRevShare": 305.38}, "mix": [{"source": "Stripe", "purchases": 25, "purchaseRevenue": 515.73}, {"source": "Roku", "purchases": 25, "purchaseRevenue": 459.75}, {"source": "Apple manual", "purchases": 22, "purchaseRevenue": 362.78}], "recentPayments": [{"id": "pi_3TYIl0LG0Cw1zW4e29yDkQvy", "date": "May 17", "createdAt": "2026-05-17 21:26 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TXC7jLG0Cw1zW4e0aTDzJEJ", "date": "May 14", "createdAt": "2026-05-14 20:09 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TU0PpLG0Cw1zW4e1xA1B4CB", "date": "May 6", "createdAt": "2026-05-06 01:02 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TQfbqLG0Cw1zW4e0xCVetD1", "date": "Apr 26", "createdAt": "2026-04-26 20:13 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TPsMQLG0Cw1zW4e1KupKuAF", "date": "Apr 24", "createdAt": "2026-04-24 15:38 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TP3uxLG0Cw1zW4e0LSedyYu", "date": "Apr 22", "createdAt": "2026-04-22 09:46 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TOx2ZLG0Cw1zW4e1W7SJZXg", "date": "Apr 22", "createdAt": "2026-04-22 02:25 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TOTAALG0Cw1zW4e0dIkMbV1", "date": "Apr 20", "createdAt": "2026-04-20 18:31 PDT", "amount": 14.99, "description": "Anonymous Customer - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TNjaVLG0Cw1zW4e2up0QKdp", "date": "Apr 18", "createdAt": "2026-04-18 17:51 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TN1fjLG0Cw1zW4e1efwz7Hc", "date": "Apr 16", "createdAt": "2026-04-16 18:58 PDT", "amount": 9.99, "description": "Customer User - Purchase Bundle 10: Signup payment", "source": "Stripe"}, {"id": "pi_3TMxdiLG0Cw1zW4e0ApnxCmW", "date": "Apr 16", "createdAt": "2026-04-16 14:39 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TMxZHLG0Cw1zW4e0RXKnWOb", "date": "Apr 16", "createdAt": "2026-04-16 14:35 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}], "dailyTrend": [{"date": "Apr 13", "rawDate": "20260413", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 14", "rawDate": "20260414", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 15", "rawDate": "20260415", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 16", "rawDate": "20260416", "purchases": 6, "purchaseRevenue": 84.94, "developerRevShare": 32.98}, {"date": "Apr 17", "rawDate": "20260417", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 18", "rawDate": "20260418", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "Apr 19", "rawDate": "20260419", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 20", "rawDate": "20260420", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "Apr 21", "rawDate": "20260421", "purchases": 1, "purchaseRevenue": 9.99, "developerRevShare": 6.99}, {"date": "Apr 22", "rawDate": "20260422", "purchases": 3, "purchaseRevenue": 84.97, "developerRevShare": 43.99}, {"date": "Apr 23", "rawDate": "20260423", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 24", "rawDate": "20260424", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "Apr 25", "rawDate": "20260425", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 26", "rawDate": "20260426", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "Apr 27", "rawDate": "20260427", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 28", "rawDate": "20260428", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 29", "rawDate": "20260429", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 30", "rawDate": "20260430", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 1", "rawDate": "20260501", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 2", "rawDate": "20260502", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 3", "rawDate": "20260503", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 4", "rawDate": "20260504", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "May 5", "rawDate": "20260505", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 6", "rawDate": "20260506", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "May 7", "rawDate": "20260507", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 8", "rawDate": "20260508", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 9", "rawDate": "20260509", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 10", "rawDate": "20260510", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 11", "rawDate": "20260511", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 12", "rawDate": "20260512", "purchases": 2, "purchaseRevenue": 5.98, "developerRevShare": 4.78}, {"date": "May 13", "rawDate": "20260513", "purchases": 2, "purchaseRevenue": 32.98, "developerRevShare": 23.38}, {"date": "May 14", "rawDate": "20260514", "purchases": 2, "purchaseRevenue": 17.98, "developerRevShare": 2.39}, {"date": "May 15", "rawDate": "20260515", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 16", "rawDate": "20260516", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 15.99}, {"date": "May 17", "rawDate": "20260517", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "May 18", "rawDate": "20260518", "purchases": 3, "purchaseRevenue": 59.97, "developerRevShare": 43.47}, {"date": "May 19", "rawDate": "20260519", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 20", "rawDate": "20260520", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "May 21", "rawDate": "20260521", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 22", "rawDate": "20260522", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 23", "rawDate": "20260523", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 24", "rawDate": "20260524", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 25", "rawDate": "20260525", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "May 26", "rawDate": "20260526", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 27", "rawDate": "20260527", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 28", "rawDate": "20260528", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 29", "rawDate": "20260529", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 30", "rawDate": "20260530", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 31", "rawDate": "20260531", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}], "note": "Visible platform sales refreshed Jul 27: 72 purchases / $1,338.26 YTD across Stripe, Roku, and manual Apple snapshots (complete Jul 20-Jul 26 week only). New additions: two Roku purchases ($39.98) and two Stripe purchases ($40.97). Apple sales unchanged; latest Apple input was downloads only. Two additional same-day Jul 27 Stripe sales ($35.98) are tracked separately and are not part of the complete week total.", "current": {"purchases": 72, "purchaseRevenue": 1338.26, "developerRevShare": 1138.38, "label": "Visible YTD (complete week)"}, "throughRefreshNote": "Including two same-day Jul 27 Stripe sales ($35.98) that arrived after the complete week closed, visible platform totals through the refresh moment are 74 purchases / $1,374.24. The complete Jul 20-Jul 26 week alone is 72 purchases / $1,338.26 YTD, with 4 purchases / $80.95 in the week itself."}, "contentUsage": {"period": "May 25-May 31, 2026", "live": {"total": {"screenPageViews": 1932, "activeUsers": 166, "eventCount": 23489}, "platforms": [{"platform": "web", "screen": "Live", "screenPageViews": 1549, "activeUsers": 8, "eventCount": 1549}, {"platform": "Android", "screen": "Live", "screenPageViews": 276, "activeUsers": 106, "eventCount": 11712}, {"platform": "iOS", "screen": "Live", "screenPageViews": 107, "activeUsers": 52, "eventCount": 10228}], "playback": {"play": 4208, "video_start": 2247, "end_playback": 274}, "playbackRows": [{"event": "play", "label": "Play events", "eventCount": 4208}, {"event": "video_start", "label": "Video starts", "eventCount": 2247}, {"event": "end_playback", "label": "Ended playbacks", "eventCount": 274}], "topChannels": [{"title": "ElectricNOW", "plays": 3529, "activeUsers": 160, "rank": 1}, {"title": "spot on news", "plays": 174, "activeUsers": 8, "rank": 2}, {"title": "ElectricNOW en Español", "plays": 101, "activeUsers": 12, "rank": 3}, {"title": "Kung Fu Movies", "plays": 57, "activeUsers": 13, "rank": 4}, {"title": "Daily Flash", "plays": 32, "activeUsers": 5, "rank": 5}, {"title": "Stoner TV Network", "plays": 23, "activeUsers": 8, "rank": 6}, {"title": "Grindhouse Gold", "plays": 22, "activeUsers": 7, "rank": 7}, {"title": "ToonOvation", "plays": 22, "activeUsers": 12, "rank": 8}, {"title": "BayView Documentaries", "plays": 19, "activeUsers": 5, "rank": 9}, {"title": "Horror Asylum", "plays": 19, "activeUsers": 12, "rank": 10}], "note": "Live usage is based on GA4 screen name 'Live' plus playback events that also carried the Live screen name."}, "onDemand": {"total": {"screenPageViews": 3264, "activeUsers": 861, "eventCount": 3760}, "platforms": [{"platform": "web", "screen": "On Demand", "screenPageViews": 2699, "activeUsers": 662, "eventCount": 2699}, {"platform": "Android", "screen": "On Demand", "screenPageViews": 405, "activeUsers": 136, "eventCount": 641}, {"platform": "iOS", "screen": "On Demand", "screenPageViews": 160, "activeUsers": 63, "eventCount": 420}], "note": "On Demand usage is based on GA4 screen name 'On Demand'. Title-level viewing is shown below from GA4 video_title play events."}, "freshnessNote": "No fresh GA4 app-screen source in the Jun 29-Jul 5, 2026 run; values preserved from the last complete window where a clean app-screen export was available."}, "titleViewership": {"period": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)", "note": "Top programs roll up GA4 play-event labels into parent shows/collections where possible and rank by play events because ads monetize playback. Live/FAST/linear channels are excluded from Top Shows and Top Videos and reported separately under Live channel usage. Title mapping remains dependent on app metadata quality. On hours watched: GA4 tracks these titles by play events (video starts) and unique viewers, not watched hours — the app fires a “play” event per title but no per-title watch-duration, video length, or completion event, so an hours-watched column cannot be shown here without inventing numbers. True watched-hours by title exists today only for YouTube (estimatedMinutesWatched), reported separately in the YouTube section and keyed to YouTube video IDs, so it cannot be mapped onto these app show names. To rank these titles by real hours watched, add a GA4 event that reports elapsed playback time per title — e.g. a periodic video_progress / video_complete event carrying video_title plus watch seconds (or engagement_time_msec scoped to the title) — after which this column can switch from Total viewers to Hours watched.", "topVideoTitlesNote": "Top videos shows individual on-demand video plays only. Live/FAST/linear channel rows (e.g. DARK MATTER TV, Kung Fu Movies, spot on news, ToonOvation, ElectricNOW en Espanol, Stoner TV Network) are excluded here and reported separately in 'Live channel usage'. Top 50 may list fewer than 50 entries until the next GA4 refresh overfetches with the stricter row-level live-channel predicate.", "topPrograms": [{"program": "Leverage: Redemption", "plays": 114, "activeUsers": 21, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 2, "examples": ["Leverage: Redemption - Season 3", "Leverage: Redemption (Seasons 1 & 2)"], "rank": 1}, {"program": "The Ark", "plays": 60, "activeUsers": 16, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Ark"], "rank": 2}, {"program": "The Librarians: The Next Chapter", "plays": 38, "activeUsers": 6, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 2, "examples": ["The Librarians: The Next Chapter (Season 1)", "The Librarians: The Next Chapter Season 2 Teaser"], "rank": 3}, {"program": "Leverage", "plays": 38, "activeUsers": 5, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Leverage"], "rank": 4}, {"program": "Almost Paradise", "plays": 22, "activeUsers": 4, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Almost Paradise (Season 1 & 2)"], "rank": 5}, {"program": "The Messenger", "plays": 12, "activeUsers": 3, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Messenger"], "rank": 6}, {"program": "Abroad", "plays": 11, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Abroad"], "rank": 7}, {"program": "Checking Out: The Librarians Next Chapter", "plays": 11, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Checking Out: The Librarians Next Chapter"], "rank": 8}, {"program": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast", "plays": 6, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Official Leverage: Redemption After Show - A Very Distinctive Podcast"], "rank": 9}, {"program": "The Poly Couple", "plays": 6, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Poly Couple (Season 1)"], "rank": 10}, {"program": "Art of Life", "plays": 5, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Art of Life"], "rank": 11}, {"program": "The Side Job", "plays": 4, "activeUsers": 3, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Side Job"], "rank": 12}, {"program": "Delicious", "plays": 4, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Delicious"], "rank": 13}, {"program": "Ghosted", "plays": 4, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Ghosted"], "rank": 14}, {"program": "Black Mamba", "plays": 3, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Black Mamba"], "rank": 15}, {"program": "The Outpost", "plays": 3, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Outpost"], "rank": 16}, {"program": "6 Horas", "plays": 3, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["6 Horas"], "rank": 17}, {"program": "Paradise Found", "plays": 3, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Paradise Found"], "rank": 18}, {"program": "The Triangle Mini-Series", "plays": 3, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Triangle Mini-Series"], "rank": 19}, {"program": "The Triangle Night 1", "plays": 3, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Triangle Night 1"], "rank": 20}, {"program": "A Christmas Carol", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["A Christmas Carol"], "rank": 21}, {"program": "A Crack in the Floor", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["A Crack in the Floor"], "rank": 22}, {"program": "ElectricCon Fan Convention", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["ElectricCon Fan Convention"], "rank": 23}, {"program": "Exile", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Exile"], "rank": 24}, {"program": "FMWBH: F'ing My Way Back Home", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["FMWBH: F'ing My Way Back Home"], "rank": 25}, {"program": "Generation Z", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Generation Z"], "rank": 26}, {"program": "Highlander", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Highlander"], "rank": 27}, {"program": "One Big Happy Family", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["One Big Happy Family"], "rank": 28}, {"program": "Reef Eel Soup for the Soul", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Reef Eel Soup for the Soul"], "rank": 29}, {"program": "The Librarian: Curse of the Judas Chalice", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Librarian: Curse of the Judas Chalice"], "rank": 30}, {"program": "The Triangle Night 2", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Triangle Night 2"], "rank": 31}, {"program": "The Weekend In Paris Job", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Weekend In Paris Job"], "rank": 32}, {"program": "Adventures of Sonic the Hedgehog", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Adventures of Sonic the Hedgehog"], "rank": 33}, {"program": "Apalancamiento", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Apalancamiento"], "rank": 34}, {"program": "Ares 11", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Ares 11"], "rank": 35}, {"program": "Asian American Pacific Islander Month", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Asian American Pacific Islander Month"], "rank": 36}, {"program": "Awake in the Woods", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Awake in the Woods"], "rank": 37}, {"program": "Bad Samaritan", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Bad Samaritan"], "rank": 38}, {"program": "Blank Slate", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Blank Slate"], "rank": 39}], "topVideoTitles": [{"title": "Leverage: Redemption - Season 3", "plays": 83, "activeUsers": 21, "group": "Leverage: Redemption", "rank": 1}, {"title": "The Ark", "plays": 60, "activeUsers": 16, "group": "The Ark", "rank": 2}, {"title": "Leverage", "plays": 38, "activeUsers": 5, "group": "Leverage", "rank": 3}, {"title": "The Librarians: The Next Chapter (Season 1)", "plays": 32, "activeUsers": 6, "group": "The Librarians: The Next Chapter", "rank": 4}, {"title": "Leverage: Redemption (Seasons 1 & 2)", "plays": 31, "activeUsers": 7, "group": "Leverage: Redemption", "rank": 5}, {"title": "Almost Paradise (Season 1 & 2)", "plays": 22, "activeUsers": 4, "group": "Almost Paradise", "rank": 6}, {"title": "The Messenger", "plays": 12, "activeUsers": 3, "group": "The Messenger", "rank": 7}, {"title": "Abroad", "plays": 11, "activeUsers": 2, "group": "Abroad", "rank": 8}, {"title": "Checking Out: The Librarians Next Chapter", "plays": 11, "activeUsers": 2, "group": "Checking Out: The Librarians Next Chapter", "rank": 9}, {"title": "The Librarians: The Next Chapter Season 2 Teaser", "plays": 6, "activeUsers": 2, "group": "The Librarians: The Next Chapter", "rank": 10}, {"title": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast", "plays": 6, "activeUsers": 2, "group": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast", "rank": 11}, {"title": "The Poly Couple (Season 1)", "plays": 6, "activeUsers": 2, "group": "The Poly Couple", "rank": 12}, {"title": "Art of Life", "plays": 5, "activeUsers": 1, "group": "Art of Life", "rank": 13}, {"title": "The Side Job", "plays": 4, "activeUsers": 3, "group": "The Side Job", "rank": 14}, {"title": "Delicious", "plays": 4, "activeUsers": 2, "group": "Delicious", "rank": 15}, {"title": "Ghosted", "plays": 4, "activeUsers": 2, "group": "Ghosted", "rank": 16}, {"title": "Black Mamba", "plays": 3, "activeUsers": 2, "group": "Black Mamba", "rank": 17}, {"title": "The Outpost", "plays": 3, "activeUsers": 2, "group": "The Outpost", "rank": 18}, {"title": "6 Horas", "plays": 3, "activeUsers": 1, "group": "6 Horas", "rank": 19}, {"title": "Paradise Found", "plays": 3, "activeUsers": 1, "group": "Paradise Found", "rank": 20}, {"title": "The Triangle Mini-Series", "plays": 3, "activeUsers": 1, "group": "The Triangle Mini-Series", "rank": 21}, {"title": "The Triangle Night 1", "plays": 3, "activeUsers": 1, "group": "The Triangle Night 1", "rank": 22}, {"title": "A Christmas Carol", "plays": 2, "activeUsers": 1, "group": "A Christmas Carol", "rank": 23}, {"title": "A Crack in the Floor", "plays": 2, "activeUsers": 1, "group": "A Crack in the Floor", "rank": 24}, {"title": "ElectricCon Fan Convention", "plays": 2, "activeUsers": 1, "group": "ElectricCon Fan Convention", "rank": 25}, {"title": "Exile", "plays": 2, "activeUsers": 1, "group": "Exile", "rank": 26}, {"title": "FMWBH: F'ing My Way Back Home", "plays": 2, "activeUsers": 1, "group": "FMWBH: F'ing My Way Back Home", "rank": 27}, {"title": "Generation Z", "plays": 2, "activeUsers": 1, "group": "Generation Z", "rank": 28}, {"title": "Highlander", "plays": 2, "activeUsers": 1, "group": "Highlander", "rank": 29}, {"title": "One Big Happy Family", "plays": 2, "activeUsers": 1, "group": "One Big Happy Family", "rank": 30}, {"title": "Reef Eel Soup for the Soul", "plays": 2, "activeUsers": 1, "group": "Reef Eel Soup for the Soul", "rank": 31}, {"title": "The Librarian: Curse of the Judas Chalice", "plays": 2, "activeUsers": 1, "group": "The Librarian: Curse of the Judas Chalice", "rank": 32}, {"title": "The Triangle Night 2", "plays": 2, "activeUsers": 1, "group": "The Triangle Night 2", "rank": 33}, {"title": "The Weekend In Paris Job", "plays": 2, "activeUsers": 1, "group": "The Weekend In Paris Job", "rank": 34}, {"title": "Adventures of Sonic the Hedgehog", "plays": 1, "activeUsers": 1, "group": "Adventures of Sonic the Hedgehog", "rank": 35}, {"title": "Apalancamiento", "plays": 1, "activeUsers": 1, "group": "Apalancamiento", "rank": 36}, {"title": "Ares 11", "plays": 1, "activeUsers": 1, "group": "Ares 11", "rank": 37}, {"title": "Asian American Pacific Islander Month", "plays": 1, "activeUsers": 1, "group": "Asian American Pacific Islander Month", "rank": 38}, {"title": "Awake in the Woods", "plays": 1, "activeUsers": 1, "group": "Awake in the Woods", "rank": 39}, {"title": "Bad Samaritan", "plays": 1, "activeUsers": 1, "group": "Bad Samaritan", "rank": 40}, {"title": "Blank Slate", "plays": 1, "activeUsers": 1, "group": "Blank Slate", "rank": 41}, {"title": "Bodies", "plays": 1, "activeUsers": 1, "group": "Bodies", "rank": 42}, {"title": "Demon Stalker", "plays": 1, "activeUsers": 1, "group": "Demon Stalker", "rank": 43}, {"title": "Episode 5", "plays": 1, "activeUsers": 1, "group": "Episode 5", "rank": 44}, {"title": "I Never Cry", "plays": 1, "activeUsers": 1, "group": "I Never Cry", "rank": 45}, {"title": "Killington", "plays": 1, "activeUsers": 1, "group": "Killington", "rank": 46}, {"title": "Pistol Whip", "plays": 1, "activeUsers": 1, "group": "Pistol Whip", "rank": 47}, {"title": "Silent Night: A Song for the World", "plays": 1, "activeUsers": 1, "group": "Silent Night: A Song for the World", "rank": 48}, {"title": "Somewhere in Montana", "plays": 1, "activeUsers": 1, "group": "Somewhere in Montana", "rank": 49}], "topChannelTitles": [{"title": "Leverage: Redemption - Season 3", "plays": 83, "activeUsers": 21, "rank": 1}, {"title": "The Ark", "plays": 60, "activeUsers": 16, "rank": 2}, {"title": "Leverage", "plays": 38, "activeUsers": 5, "rank": 3}, {"title": "The Librarians: The Next Chapter (Season 1)", "plays": 32, "activeUsers": 6, "rank": 4}, {"title": "Leverage: Redemption (Seasons 1 & 2)", "plays": 31, "activeUsers": 7, "rank": 5}, {"title": "Almost Paradise (Season 1 & 2)", "plays": 22, "activeUsers": 4, "rank": 6}, {"title": "The Messenger", "plays": 12, "activeUsers": 3, "rank": 7}, {"title": "Abroad", "plays": 11, "activeUsers": 2, "rank": 8}, {"title": "Checking Out: The Librarians Next Chapter", "plays": 11, "activeUsers": 2, "rank": 9}, {"title": "The Librarians: The Next Chapter Season 2 Teaser", "plays": 6, "activeUsers": 2, "rank": 10}, {"title": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast", "plays": 6, "activeUsers": 2, "rank": 11}, {"title": "The Poly Couple (Season 1)", "plays": 6, "activeUsers": 2, "rank": 12}, {"title": "Art of Life", "plays": 5, "activeUsers": 1, "rank": 13}, {"title": "The Side Job", "plays": 4, "activeUsers": 3, "rank": 14}, {"title": "Delicious", "plays": 4, "activeUsers": 2, "rank": 15}, {"title": "Ghosted", "plays": 4, "activeUsers": 2, "rank": 16}, {"title": "Black Mamba", "plays": 3, "activeUsers": 2, "rank": 17}, {"title": "The Outpost", "plays": 3, "activeUsers": 2, "rank": 18}, {"title": "6 Horas", "plays": 3, "activeUsers": 1, "rank": 19}, {"title": "Paradise Found", "plays": 3, "activeUsers": 1, "rank": 20}, {"title": "The Triangle Mini-Series", "plays": 3, "activeUsers": 1, "rank": 21}, {"title": "The Triangle Night 1", "plays": 3, "activeUsers": 1, "rank": 22}, {"title": "A Christmas Carol", "plays": 2, "activeUsers": 1, "rank": 23}, {"title": "A Crack in the Floor", "plays": 2, "activeUsers": 1, "rank": 24}]}, "metaCampaignContext": {"source": "ENow-TV-April-1st-May-3rd-Meta-Ads.xlsx, Raw Data Report!A1:W361", "note": "Meta campaign objective shifted from landing-page traffic, to app-store button-click leads, to direct app-install campaigns starting Apr 28. The app-install phase bypasses the website landing page, so lower landing-page traffic is expected and should not be judged as a standalone negative.", "phases": [{"phase": "Traffic to landing page", "dateRange": "Apr 16-Apr 23", "objective": "Link clicks", "results": "5,656 link clicks", "spend": "$887.22", "costPerResult": "$0.16"}, {"phase": "Leads / app-store button clicks", "dateRange": "Apr 23-May 1", "objective": "Website leads / app-store button clicks", "results": "2,095 button-click leads", "spend": "$1,452.24", "costPerResult": "$0.69"}, {"phase": "Direct app-install campaigns", "dateRange": "Apr 28-May 3", "objective": "Mobile app installs", "results": "1,465 installs", "spend": "$723.72", "costPerResult": "$0.49"}], "appInstallBreakout": "Through May 3, Meta reported 516 iOS installs at about $0.65 each and 949 Google Play installs at about $0.41 each.", "interpretation": "Judge the newest phase by installs, app opens, viewing, Live usage, purchases, and ad value rather than by landing-page traffic."}, "appUsage": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "appActiveUsers": 1547, "appSessions": 2889, "appEngagedSessions": 2339, "appEngagementRate": 80.96227068189685, "viewingUsers": 730, "viewingShare": 47.18810601163542, "onDemandStartUsers": 699, "onDemandStartEvents": 2508, "liveChannelViewers": 46, "livePlayEvents": 1673}, "previousWeek": {"range": "May 18-May 24, 2026", "appActiveUsers": 5343, "appSessions": 8599, "appEngagedSessions": 7017, "appEngagementRate": 81.60251191999069, "viewingUsers": 2260, "viewingShare": 42.298334269137186, "onDemandStartUsers": 2229, "onDemandStartEvents": 8448, "liveChannelViewers": 38, "livePlayEvents": 1655}, "currentWeek": {"range": "May 25-May 31, 2026", "appActiveUsers": 5635, "appSessions": 8832, "appEngagedSessions": 7125, "appEngagementRate": 80.6725543478261, "viewingUsers": 2328, "viewingShare": 41.31322094055013, "onDemandStartUsers": 2283, "onDemandStartEvents": 7885, "liveChannelViewers": 51, "livePlayEvents": 1631}, "freshnessNote": "No fresh GA4 app-screen source in the Jun 29-Jul 5, 2026 run; values preserved from the last complete window where a clean app-screen export was available."}, "platformTime": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "activeUsers": 8742, "sessions": 13350, "engagedSessions": 7917, "engagementRate": 59.30337078651685, "totalEngagementSeconds": 13150782, "totalEngagementHours": 3652.995, "avgEngagedMinutesPerUser": 25.072031571722718, "avgEngagedMinutesPerSession": 16.417955056179775, "ga4AverageSessionMinutes": 22.769179101851435, "platformBreakout": [{"platform": "web", "activeUsers": 7033, "sessions": 10031, "engagedSessions": 5221, "avgEngagedMinutesPerUser": 16.21484193563676, "avgEngagedMinutesPerSession": 11.368655501279367, "ga4AverageSessionMinutes": 13.258718967379458}, {"platform": "iOS", "activeUsers": 896, "sessions": 1427, "engagedSessions": 1272, "avgEngagedMinutesPerUser": 63.90292038690476, "avgEngagedMinutesPerSession": 40.12404811959823, "ga4AverageSessionMinutes": 44.78369523208362}, {"platform": "Android", "activeUsers": 813, "sessions": 1892, "engagedSessions": 1424, "avgEngagedMinutesPerUser": 58.89753997539976, "avgEngagedMinutesPerSession": 25.308509513742074, "ga4AverageSessionMinutes": 56.58773676096723}], "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."}, "previousWeek": {"range": "May 18-May 24, 2026", "activeUsers": 7616, "sessions": 14072, "engagedSessions": 11573, "engagementRate": 82.24133030130756, "totalEngagementSeconds": 18920573, "totalEngagementHours": 5255.714722222222, "avgEngagedMinutesPerUser": 41.40531556372549, "avgEngagedMinutesPerSession": 22.409244125450066, "ga4AverageSessionMinutes": 61.60810070515563, "platformBreakout": [{"platform": "Android", "activeUsers": 3226, "sessions": 5188, "engagedSessions": 4252, "avgEngagedMinutesPerUser": 19.763484190948542, "avgEngagedMinutesPerSession": 12.289321511179645, "ga4AverageSessionMinutes": 109.80297653093035}, {"platform": "iOS", "activeUsers": 2325, "sessions": 3811, "engagedSessions": 3196, "avgEngagedMinutesPerUser": 41.14767741935484, "avgEngagedMinutesPerSession": 25.10321437942797, "ga4AverageSessionMinutes": 29.076549897572818}, {"platform": "web", "activeUsers": 2065, "sessions": 5073, "engagedSessions": 4125, "avgEngagedMinutesPerUser": 75.50485875706214, "avgEngagedMinutesPerSession": 30.73477889480255, "ga4AverageSessionMinutes": 36.759436077436106}], "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."}, "currentWeek": {"range": "May 25-May 31, 2026", "activeUsers": 7844, "sessions": 14259, "engagedSessions": 11506, "engagementRate": 80.69289571498702, "totalEngagementSeconds": 19465580, "totalEngagementHours": 5407.105555555556, "avgEngagedMinutesPerUser": 41.35980792112868, "avgEngagedMinutesPerSession": 22.75239030320032, "ga4AverageSessionMinutes": 59.59084461335944, "platformBreakout": [{"platform": "Android", "activeUsers": 3276, "sessions": 5164, "engagedSessions": 4066, "avgEngagedMinutesPerUser": 22.847120472120473, "avgEngagedMinutesPerSession": 14.494029176349082, "ga4AverageSessionMinutes": 108.83817197057776}, {"platform": "iOS", "activeUsers": 2563, "sessions": 4165, "engagedSessions": 3511, "avgEngagedMinutesPerUser": 34.91463779425153, "avgEngagedMinutesPerSession": 21.485286114445778, "ga4AverageSessionMinutes": 23.31271856910407}, {"platform": "web", "activeUsers": 2005, "sessions": 4930, "engagedSessions": 3929, "avgEngagedMinutesPerUser": 79.84685785536159, "avgEngagedMinutesPerSession": 32.47321501014199, "ga4AverageSessionMinutes": 38.654778995032494}], "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."}, "freshnessNote": "No fresh GA4 app-screen source in the Jun 29-Jul 5, 2026 run; values preserved from the last complete window where a clean app-screen export was available."}, "acquisitionSummary": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "totalGa4ActiveUsers": 8739.0, "totalGa4Sessions": 13421.0, "totalGa4EngagementRate": 59.310036509947096, "landingPageUsers": 1045, "landingPageSessions": 1485, "devicesPageUsers": 2028, "devicesPageSessions": 2119, "paidSocialUsers": 4441, "paidSocialSessions": 4547}, "previousWeek": {"range": "Preserved · last fresh Jun 1-Jun 7, 2026 (no fresh source this run)", "totalGa4ActiveUsers": 7608, "totalGa4Sessions": 13911, "totalGa4EngagementRate": 78.16835597728416, "landingPageUsers": 606, "landingPageSessions": 909, "paidSocialUsers": 2436, "paidSocialSessions": 3360}, "currentWeek": {"range": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)", "totalGa4ActiveUsers": 7282, "totalGa4Sessions": 13850, "totalGa4EngagementRate": 77.50180505415163, "landingPageUsers": 744, "landingPageSessions": 1080, "paidSocialUsers": 2421, "paidSocialSessions": 3497}, "landingPage": {"sourceLabel": "Landing page acquisition only", "currentWeek": {"range": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)", "activeUsers": 744, "newUsers": null, "sessions": 1080, "engagedSessions": 996, "engagementRate": 92.22222222222223, "screenPageViews": 1448, "eventCount": 2457}, "previousWeek": {"range": "Preserved · last fresh Jun 1-Jun 7, 2026 (no fresh source this run)", "activeUsers": 606, "newUsers": 497, "sessions": 909, "engagedSessions": 840, "engagementRate": 92.4092409240924, "screenPageViews": 1175, "eventCount": 1959}, "deltaActiveUsersPct": 22.772277227722775}, "sourceMedium": [{"sessionSourceMedium": "(direct) / (none)", "activeUsers": 3163, "newUsers": 1946, "sessions": 5386, "engagedSessions": 4405, "engagementRate": 81.7861121425919, "eventCount": 174483}, {"sessionSourceMedium": "apps.facebook.com / (not set)", "activeUsers": 1801, "newUsers": 1293, "sessions": 2575, "engagedSessions": 1940, "engagementRate": 75.33980582524272, "eventCount": 36707}, {"sessionSourceMedium": "homescreen / (not set)", "activeUsers": 719, "newUsers": 182, "sessions": 2274, "engagedSessions": 1965, "engagementRate": 86.41160949868075, "eventCount": 460155}, {"sessionSourceMedium": "google / organic", "activeUsers": 389, "newUsers": 326, "sessions": 632, "engagedSessions": 556, "engagementRate": 87.9746835443038, "eventCount": 13407}, {"sessionSourceMedium": "google-play / organic", "activeUsers": 293, "newUsers": 187, "sessions": 501, "engagedSessions": 423, "engagementRate": 84.4311377245509, "eventCount": 27093}, {"sessionSourceMedium": "(not set)", "activeUsers": 88, "newUsers": 9, "sessions": 501, "engagedSessions": 0, "engagementRate": 0.0, "eventCount": 58150}, {"sessionSourceMedium": "hs-search / (not set)", "activeUsers": 64, "newUsers": 14, "sessions": 449, "engagedSessions": 394, "engagementRate": 87.75055679287304, "eventCount": 100637}, {"sessionSourceMedium": "apps.instagram.com / (not set)", "activeUsers": 294, "newUsers": 215, "sessions": 413, "engagedSessions": 313, "engagementRate": 75.78692493946731, "eventCount": 7728}, {"sessionSourceMedium": "apps.facebook.com / (none)", "activeUsers": 32, "newUsers": 0, "sessions": 157, "engagedSessions": 120, "engagementRate": 76.43312101910828, "eventCount": 847}, {"sessionSourceMedium": "fb / paid", "activeUsers": 107, "newUsers": 18, "sessions": 138, "engagedSessions": 108, "engagementRate": 78.26086956521739, "eventCount": 1598}, {"sessionSourceMedium": "bing / organic", "activeUsers": 59, "newUsers": 38, "sessions": 121, "engagedSessions": 109, "engagementRate": 90.08264462809917, "eventCount": 8388}, {"sessionSourceMedium": "channel-store / (not set)", "activeUsers": 20, "newUsers": 8, "sessions": 102, "engagedSessions": 97, "engagementRate": 95.09803921568627, "eventCount": 23065}, {"sessionSourceMedium": "google / cpc", "activeUsers": 57, "newUsers": 4, "sessions": 87, "engagedSessions": 75, "engagementRate": 86.20689655172413, "eventCount": 987}, {"sessionSourceMedium": "m.facebook.com / referral", "activeUsers": 69, "newUsers": 69, "sessions": 69, "engagedSessions": 45, "engagementRate": 65.21739130434783, "eventCount": 367}, {"sessionSourceMedium": "electricentertainment.com / referral", "activeUsers": 28, "newUsers": 21, "sessions": 57, "engagedSessions": 48, "engagementRate": 84.21052631578947, "eventCount": 2707}, {"sessionSourceMedium": "facebook.com / referral", "activeUsers": 54, "newUsers": 54, "sessions": 54, "engagedSessions": 14, "engagementRate": 25.925925925925924, "eventCount": 303}, {"sessionSourceMedium": "lm.facebook.com / referral", "activeUsers": 32, "newUsers": 32, "sessions": 32, "engagedSessions": 7, "engagementRate": 21.875, "eventCount": 135}, {"sessionSourceMedium": "homescreen / (none)", "activeUsers": 2, "newUsers": 0, "sessions": 32, "engagedSessions": 32, "engagementRate": 100.0, "eventCount": 61767}, {"sessionSourceMedium": "ntp.msn.com / referral", "activeUsers": 3, "newUsers": 0, "sessions": 30, "engagedSessions": 29, "engagementRate": 96.66666666666667, "eventCount": 2123}, {"sessionSourceMedium": "ig / paid", "activeUsers": 23, "newUsers": 9, "sessions": 26, "engagedSessions": 22, "engagementRate": 84.61538461538461, "eventCount": 352}, {"sessionSourceMedium": "hs-voice-search / (not set)", "activeUsers": 9, "newUsers": 2, "sessions": 26, "engagedSessions": 20, "engagementRate": 76.92307692307693, "eventCount": 3520}, {"sessionSourceMedium": "apps.instagram.com / (none)", "activeUsers": 3, "newUsers": 0, "sessions": 22, "engagedSessions": 18, "engagementRate": 81.81818181818183, "eventCount": 1003}, {"sessionSourceMedium": "l.instagram.com / referral", "activeUsers": 17, "newUsers": 17, "sessions": 18, "engagedSessions": 5, "engagementRate": 27.77777777777778, "eventCount": 82}, {"sessionSourceMedium": "l.facebook.com / referral", "activeUsers": 11, "newUsers": 8, "sessions": 18, "engagedSessions": 7, "engagementRate": 38.88888888888889, "eventCount": 154}, {"sessionSourceMedium": "yahoo / organic", "activeUsers": 11, "newUsers": 8, "sessions": 16, "engagedSessions": 16, "engagementRate": 100.0, "eventCount": 760}, {"sessionSourceMedium": "voice-command / (not set)", "activeUsers": 3, "newUsers": 1, "sessions": 16, "engagedSessions": 14, "engagementRate": 87.5, "eventCount": 4868}, {"sessionSourceMedium": "mail.yahoo.com / referral", "activeUsers": 1, "newUsers": 0, "sessions": 16, "engagedSessions": 15, "engagementRate": 93.75, "eventCount": 230}, {"sessionSourceMedium": "roku-mobile-app / (not set)", "activeUsers": 7, "newUsers": 2, "sessions": 15, "engagedSessions": 13, "engagementRate": 86.66666666666667, "eventCount": 2590}, {"sessionSourceMedium": "other-channel / (not set)", "activeUsers": 3, "newUsers": 0, "sessions": 14, "engagedSessions": 13, "engagementRate": 92.85714285714286, "eventCount": 4680}, {"sessionSourceMedium": "login.microsoftonline.com / referral", "activeUsers": 1, "newUsers": 0, "sessions": 12, "engagedSessions": 12, "engagementRate": 100.0, "eventCount": 1062}, {"sessionSourceMedium": "statics.teams.cdn.office.net / referral", "activeUsers": 1, "newUsers": 0, "sessions": 12, "engagedSessions": 10, "engagementRate": 83.33333333333334, "eventCount": 259}, {"sessionSourceMedium": "bit.ly / referral", "activeUsers": 11, "newUsers": 11, "sessions": 11, "engagedSessions": 4, "engagementRate": 36.36363636363637, "eventCount": 54}, {"sessionSourceMedium": "duckduckgo / organic", "activeUsers": 8, "newUsers": 6, "sessions": 11, "engagedSessions": 8, "engagementRate": 72.72727272727273, "eventCount": 88}, {"sessionSourceMedium": "linktr.ee / referral", "activeUsers": 8, "newUsers": 8, "sessions": 8, "engagedSessions": 5, "engagementRate": 62.5, "eventCount": 40}, {"sessionSourceMedium": "th / paid", "activeUsers": 7, "newUsers": 1, "sessions": 8, "engagedSessions": 6, "engagementRate": 75.0, "eventCount": 48}, {"sessionSourceMedium": "electric.ottera.tv / referral", "activeUsers": 1, "newUsers": 0, "sessions": 8, "engagedSessions": 4, "engagementRate": 50.0, "eventCount": 54}, {"sessionSourceMedium": "reddit.com / referral", "activeUsers": 6, "newUsers": 7, "sessions": 7, "engagedSessions": 4, "engagementRate": 57.14285714285714, "eventCount": 51}, {"sessionSourceMedium": "electricnow.us.auth0.com / referral", "activeUsers": 5, "newUsers": 2, "sessions": 7, "engagedSessions": 6, "engagementRate": 85.71428571428571, "eventCount": 178}, {"sessionSourceMedium": "tvbrittanyf.com / referral", "activeUsers": 5, "newUsers": 5, "sessions": 6, "engagedSessions": 6, "engagementRate": 100.0, "eventCount": 87}, {"sessionSourceMedium": "youtube.com / referral", "activeUsers": 4, "newUsers": 4, "sessions": 6, "engagedSessions": 4, "engagementRate": 66.66666666666666, "eventCount": 69}, {"sessionSourceMedium": "t.co / referral", "activeUsers": 4, "newUsers": 4, "sessions": 5, "engagedSessions": 2, "engagementRate": 40.0, "eventCount": 22}, {"sessionSourceMedium": "go.bsky.app / referral", "activeUsers": 1, "newUsers": 0, "sessions": 4, "engagedSessions": 0, "engagementRate": 0.0, "eventCount": 12}, {"sessionSourceMedium": "hs-d / (not set)", "activeUsers": 1, "newUsers": 1, "sessions": 4, "engagedSessions": 0, "engagementRate": 0.0, "eventCount": 26}, {"sessionSourceMedium": "ecosia.org / organic", "activeUsers": 2, "newUsers": 1, "sessions": 2, "engagedSessions": 2, "engagementRate": 100.0, "eventCount": 18}, {"sessionSourceMedium": "onebighappyfamilymovie.com / referral", "activeUsers": 2, "newUsers": 2, "sessions": 2, "engagedSessions": 0, "engagementRate": 0.0, "eventCount": 8}, {"sessionSourceMedium": "threads / social", "activeUsers": 2, "newUsers": 2, "sessions": 2, "engagedSessions": 2, "engagementRate": 100.0, "eventCount": 11}, {"sessionSourceMedium": "chatgpt.com / (not set)", "activeUsers": 1, "newUsers": 1, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 5}, {"sessionSourceMedium": "go.aftvnews.com / referral", "activeUsers": 1, "newUsers": 1, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 8}, {"sessionSourceMedium": "hs-search / (none)", "activeUsers": 1, "newUsers": 0, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 657}, {"sessionSourceMedium": "instagram / organic", "activeUsers": 1, "newUsers": 0, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 3}, {"sessionSourceMedium": "m.youtube.com / referral", "activeUsers": 1, "newUsers": 1, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 13}, {"sessionSourceMedium": "startpage.com / referral", "activeUsers": 1, "newUsers": 1, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 26}, {"sessionSourceMedium": "vizio.com / referral", "activeUsers": 1, "newUsers": 1, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 7}], "campaigns": [{"sessionCampaignName": "(direct)", "activeUsers": 3271, "newUsers": 2052, "sessions": 5505, "engagedSessions": 4505, "engagementRate": 81.83469573115349, "eventCount": 205601}, {"sessionCampaignName": "fb4a", "activeUsers": 2048, "newUsers": 1644, "sessions": 2791, "engagedSessions": 2200, "engagementRate": 78.8247939806521, "eventCount": 48102}, {"sessionCampaignName": "(not set)", "activeUsers": 1206, "newUsers": 462, "sessions": 3685, "engagedSessions": 2813, "engagementRate": 76.33649932157395, "eventCount": 658532}, {"sessionCampaignName": "(organic)", "activeUsers": 347, "newUsers": 276, "sessions": 649, "engagedSessions": 550, "engagementRate": 84.7457627118644, "eventCount": 28088}, {"sessionCampaignName": "ig4a", "activeUsers": 345, "newUsers": 273, "sessions": 481, "engagedSessions": 375, "engagementRate": 77.96257796257797, "eventCount": 13663}, {"sessionCampaignName": "(referral)", "activeUsers": 285, "newUsers": 268, "sessions": 357, "engagedSessions": 185, "engagementRate": 51.820728291316534, "eventCount": 5116}, {"sessionCampaignName": "PCSM - ElectricNow App Promotion - Android", "activeUsers": 175, "newUsers": 106, "sessions": 265, "engagedSessions": 232, "engagementRate": 87.54716981132076, "eventCount": 4636}, {"sessionCampaignName": "6946101792958", "activeUsers": 78, "newUsers": 21, "sessions": 103, "engagedSessions": 84, "engagementRate": 81.55339805825243, "eventCount": 832}, {"sessionCampaignName": "6952224519558", "activeUsers": 68, "newUsers": 15, "sessions": 79, "engagedSessions": 57, "engagementRate": 72.15189873417721, "eventCount": 578}], "note": "Acquisition rows are GA4 source/medium and campaign rows. Landing-page users are acquisition-only and are not counted as platform audience."}, "viewingBehavior": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "viewingEventUsers": 1152, "videoStartUsers": 1152, "videoStartEvents": 14853, "videoPlayUsers": 324, "videoPlayEvents": 4643, "videoCompleteUsers": 219, "videoCompleteEvents": 2980, "onDemandStartUsers": 1020, "onDemandStartEvents": 12876, "liveChannelViewers": 121, "livePlayEvents": 3952, "adRequestEvents": 10589, "adErrorEvents": 158}, "previousWeek": {"range": "Preserved · last fresh Jun 1-Jun 7, 2026 (no fresh source this run)", "viewingEventUsers": 2570, "videoStartUsers": 2486, "videoStartEvents": 20510, "videoPlayUsers": 264, "videoPlayEvents": 15366, "videoCompleteUsers": 255, "videoCompleteEvents": 3391, "onDemandStartUsers": 2354, "onDemandStartEvents": 18533, "liveChannelViewers": 132, "livePlayEvents": 3898, "adRequestEvents": 23365, "adErrorEvents": 112}, "currentWeek": {"range": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)", "videoStartUsers": 2319, "videoStartEvents": 20195, "videoPlayUsers": 295, "videoPlayEvents": 12250, "videoCompleteUsers": 209, "videoCompleteEvents": 3855, "adRequestEvents": 25669, "adErrorEvents": 109, "viewingEventUsers": 2410, "onDemandStartUsers": 2354, "onDemandStartEvents": 18533, "liveChannelViewers": 132, "livePlayEvents": 3898, "sourceNote": "Live-channel and on-demand-start event breakdowns were not present in the Jun 8-14 GA4 events pull; those fields carry the prior complete week. video_start/play/complete and ad events are current. viewingEventUsers uses the 'play' event active users."}}, "scorecardGroups": [{"title": "Measured ElectricNOW Platform Audience", "eyebrow": "Is the measured platform growing or shrinking?", "definition": "GA4 active users across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Landing-page traffic is reported only in Web Acquisition. Reconcile with Amagi, app stores, ad servers, and platform dashboards before treating this as total company-wide audience.", "cards": [{"key": "platformActiveUsers", "label": "Platform active users", "baseline": 5282, "launchBaseline": 8710, "previousWeek": 3349, "current": 3377, "deltaPct": 0.83607, "deltaVsLaunchPct": -61.228473, "deltaVsPreviousPct": 0.83607, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}, {"key": "platformSessions", "label": "Platform sessions", "baseline": 10925, "launchBaseline": 13323, "previousWeek": 9415, "current": 9780, "deltaPct": 3.876792, "deltaVsLaunchPct": -26.59311, "deltaVsPreviousPct": 3.876792, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}, {"key": "viewingEventUsers", "label": "Viewing event users", "baseline": 2410, "launchBaseline": 1152, "previousWeek": 1726, "current": 1349, "deltaPct": -21.84241, "deltaVsLaunchPct": 17.100694, "deltaVsPreviousPct": -21.84241, "deltaType": "percent", "format": "number", "context": "Users who triggered on-demand video_start or Live play events. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "totalEngagementHours", "label": "Total engaged hours", "baseline": 4792.675, "launchBaseline": 3652.9975, "previousWeek": 5735.596111, "current": 5760.891944, "deltaPct": 0.441032, "deltaVsLaunchPct": 57.703145, "deltaVsPreviousPct": 0.441032, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}, {"key": "avgEngagedMinutesPerUser", "label": "Avg time per user", "baseline": 48.938138, "launchBaseline": 25.164161882893225, "previousWeek": 102.757768, "current": 102.355202, "deltaPct": -0.391763, "deltaVsLaunchPct": 306.749894, "deltaVsPreviousPct": -0.391763, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}]}, {"title": "Web Acquisition", "eyebrow": "Who arrived through the website and campaigns", "definition": "Website, landing-page, device-page, and paid-social traffic. These metrics explain acquisition and campaign reach, not app viewing.", "cards": [{"key": "landingPageUsers", "label": "Landing-page users", "baseline": 686, "launchBaseline": 1045, "previousWeek": 686, "current": 163, "deltaPct": -76.239067, "deltaVsLaunchPct": -84.401914, "deltaVsPreviousPct": -76.239067, "deltaType": "percent", "format": "number", "context": "Web acquisition: users whose entry/page path contains “landing” (GA4 unifiedPageScreen, property 497892271). Week of Jun 29-Jul 5 vs the prior week Jun 22-28. This is acquisition traffic, not platform audience. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "comparisonUnavailable": false, "stale": true}, {"key": "devicesPageUsers", "label": "Devices-page users", "baseline": 139, "launchBaseline": 2028, "previousWeek": 139, "current": 24, "deltaPct": -82.733813, "deltaVsLaunchPct": -98.816568, "deltaVsPreviousPct": -82.733813, "deltaType": "percent", "format": "number", "context": "Web acquisition: users whose page path contains “devices” (GA4 unifiedPageScreen, property 497892271). Week of Jun 29-Jul 5 vs the prior week Jun 22-28. Acquisition traffic, not platform audience. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "comparisonUnavailable": false, "stale": true}, {"key": "paidSocialUsers", "label": "Paid social users", "baseline": 639, "launchBaseline": 4441, "previousWeek": 639, "current": 380, "deltaPct": -40.532081, "deltaVsLaunchPct": -91.443369, "deltaVsPreviousPct": -40.532081, "deltaType": "percent", "format": "number", "context": "Web acquisition: users from GA4 session source/medium containing Facebook, Instagram, or Meta (property 497892271). Week of Jun 29-Jul 5 vs the prior week Jun 22-28. Acquisition traffic, not platform audience. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "comparisonUnavailable": false, "stale": true}]}, {"title": "Apple and Android App Stream Usage", "eyebrow": "Who used the Apple/iOS and Android app streams", "definition": "GA4 Apple/iOS and Android app streams only: stream IDs 12950551103 and 12982344897. The Apple/iOS stream may include iPhone, iPad, and Apple TV until Apple TV is separated by the app developer. Excludes web, Roku, Android TV, Samsung/Tizen, and LG/webOS unless separately stated.", "cards": [{"key": "appActiveUsers", "label": "App stream active users", "baseline": 5383, "launchBaseline": 1547, "previousWeek": 5383, "current": 4800, "deltaPct": -10.830392, "deltaVsLaunchPct": 210.277957, "deltaVsPreviousPct": -10.830392, "deltaType": "percent", "format": "number", "context": "People using the Apple/iOS or Android app streams (GA4 property 497892271, streams 12950551103 + 12982344897); Apple TV is not yet split from the Apple/iOS stream. Stream-level app-usage for the week of Jun 8-14 compared with the prior week Jun 1-7. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}, {"key": "appSessions", "label": "App stream sessions", "baseline": 8405, "launchBaseline": 2889, "previousWeek": 8405, "current": 8029, "deltaPct": -4.473528, "deltaVsLaunchPct": 177.916234, "deltaVsPreviousPct": -4.473528, "deltaType": "percent", "format": "number", "context": "GA4 sessions on the Apple/iOS and Android app streams (property 497892271, streams 12950551103 + 12982344897). Stream-level week of Jun 8-14 compared with the prior week Jun 1-7. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}, {"key": "appEngagementRate", "label": "App stream engagement rate", "baseline": 78.37001784651993, "launchBaseline": 59.70126848307439, "previousWeek": 78.37001784651993, "current": 76.43542159671192, "deltaPct": -1.934596, "deltaVsLaunchPct": 16.734153, "deltaVsPreviousPct": -1.934596, "deltaType": "points", "format": "percent", "context": "Engaged app-stream sessions divided by app-stream sessions (GA4 property 497892271, streams 12950551103 + 12982344897). Stream-level week of Jun 8-14 compared with the prior week Jun 1-7; the change is shown in percentage points. Filtered-total query (stream IDs summed) is used rather than per-stream row sums, which differ slightly due to GA4 cross-stream user de-duplication. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}]}, {"title": "Fresh GA4 Viewing Event Behavior", "eyebrow": "What people actually triggered this week", "definition": "These cards use the fresh Jul 13-Jul 19 GA4 eventName pull. They show event counts, not unique viewers. Live-channel-specific unique viewers remain in the Live TV/Roku sections when segmented live-source data is available.", "cards": [{"key": "playEvents", "label": "Play events", "baseline": 57320, "launchBaseline": 57320, "previousWeek": 47143, "current": 56186, "deltaPct": 19.182063, "deltaVsLaunchPct": -1.978367, "deltaVsPreviousPct": 19.182063, "deltaType": "percent", "format": "number", "context": "Total GA4 play events across tracked ElectricNOW platform surfaces. This is event volume, not unique viewers.", "source": "Fresh GA4 eventName pull, property 497892271, Jul 13-Jul 19, 2026."}, {"key": "videoStartEvents", "label": "Video start events", "baseline": 20510, "launchBaseline": 20510, "previousWeek": 19437, "current": 19194, "deltaPct": -1.250193, "deltaVsLaunchPct": -6.416382, "deltaVsPreviousPct": -1.250193, "deltaType": "percent", "format": "number", "context": "Total GA4 video_start events across tracked ElectricNOW platform surfaces. This is event volume, not unique users.", "source": "Fresh GA4 eventName pull, property 497892271, Jul 13-Jul 19, 2026."}, {"key": "videoPlayEvents", "label": "Video play events", "baseline": 15366, "launchBaseline": 15366, "previousWeek": 12250, "current": 6202, "deltaPct": -49.371429, "deltaVsLaunchPct": -59.638162, "deltaVsPreviousPct": -49.371429, "deltaType": "percent", "format": "number", "context": "Total GA4 video_play events across tracked ElectricNOW platform surfaces. This is event volume, not unique users. The sharp decline should be investigated as possible instrumentation or playback-state mix, not assumed to be true audience loss by itself.", "source": "Fresh GA4 eventName pull, property 497892271, Jul 13-Jul 19, 2026."}, {"key": "videoCompleteEvents", "label": "Video complete events", "baseline": 3391, "launchBaseline": 3391, "previousWeek": 5038, "current": 5591, "deltaPct": 10.976578, "deltaVsLaunchPct": 64.877617, "deltaVsPreviousPct": 10.976578, "deltaType": "percent", "format": "number", "context": "Total GA4 video_complete events across tracked ElectricNOW platform surfaces. This is event volume, not unique users.", "source": "Fresh GA4 eventName pull, property 497892271, Jul 13-Jul 19, 2026."}, {"key": "adRequestEvents", "label": "Ad request events", "baseline": 23365, "launchBaseline": 23365, "previousWeek": 23803, "current": 24585, "deltaPct": 3.2853, "deltaVsLaunchPct": 5.221485, "deltaVsPreviousPct": 3.2853, "deltaType": "percent", "format": "number", "context": "Total GA4 ads_request events generated by viewing activity across tracked ElectricNOW platform surfaces.", "source": "Fresh GA4 eventName pull, property 497892271, Jul 13-Jul 19, 2026."}]}, {"title": "Time on Platform", "eyebrow": "How long people stayed", "definition": "All GA4-tracked platforms. Per user measures weekly attention per person; per session measures the average visit or viewing session.", "cards": [{"key": "avgEngagedMinutesPerUser", "label": "Avg time per user", "baseline": 48.938138, "launchBaseline": 25.164161882893225, "previousWeek": 102.757768, "current": 102.355202, "deltaPct": -0.391763, "deltaVsLaunchPct": 306.749894, "deltaVsPreviousPct": -0.391763, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}, {"key": "avgEngagedMinutesPerSession", "label": "Avg time per session", "baseline": 24.332417, "launchBaseline": 16.45123845980635, "previousWeek": 36.551861, "current": 35.342895, "deltaPct": -3.307534, "deltaVsLaunchPct": 114.834254, "deltaVsPreviousPct": -3.307534, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}, {"key": "totalEngagementHours", "label": "Total engaged hours", "baseline": 4792.675, "launchBaseline": 3652.9975, "previousWeek": 5735.596111, "current": 5760.891944, "deltaPct": 0.441032, "deltaVsLaunchPct": 57.703145, "deltaVsPreviousPct": 0.441032, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 20-Jul 26, 2026, excluding landing/device acquisition paths."}]}], "surfaceBreakout": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "rows": [{"surface": "Web", "streamName": "electricnow-web", "streamId": "13090831762", "platform": "web", "activeUsers": 5699, "sessions": 6734, "engagedSessions": 2504, "eventCount": 60226, "engagementRate": 37.184437184437186, "avgEngagedMinutesPerUser": 1.8929110370240392, "avgEngagedMinutesPerSession": 1.601975051975052}, {"surface": "Roku", "streamName": "electricnow-roku", "streamId": "13096428368", "platform": "web", "activeUsers": 1303, "sessions": 3532, "engagedSessions": 2827, "eventCount": 556413, "engagementRate": 80.039637599094, "avgEngagedMinutesPerUser": 79.42747505755948, "avgEngagedMinutesPerSession": 29.30181200453001}, {"surface": "iOS / Apple app stream", "streamName": "ElectricNow", "streamId": "12982344897", "platform": "iOS", "activeUsers": 896, "sessions": 1427, "engagedSessions": 1272, "eventCount": 38429, "engagementRate": 89.13805185704274, "avgEngagedMinutesPerUser": 63.90292038690476, "avgEngagedMinutesPerSession": 40.12404811959823}, {"surface": "Android mobile app", "streamName": "ElectricNOW", "streamId": "12950551103", "platform": "Android", "activeUsers": 651, "sessions": 1479, "engagedSessions": 1063, "eventCount": 30967, "engagementRate": 71.87288708586883, "avgEngagedMinutesPerUser": 18.074654377880183, "avgEngagedMinutesPerSession": 7.95578093306288}, {"surface": "Android TV / CTV", "streamName": "ElectricNOW tv", "streamId": "13118400722", "platform": "Android", "activeUsers": 162, "sessions": 414, "engagedSessions": 361, "eventCount": 18889, "engagementRate": 87.19806763285024, "avgEngagedMinutesPerUser": 222.94506172839507, "avgEngagedMinutesPerSession": 87.23937198067634}, {"surface": "LG / webOS", "streamName": "electricnow-webos", "streamId": "12976053175", "platform": "web", "activeUsers": 0, "sessions": 14, "engagedSessions": 0, "eventCount": 91, "engagementRate": 0.0, "avgEngagedMinutesPerUser": 0, "avgEngagedMinutesPerSession": 0.0}], "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."}, "previousWeek": {"range": "May 18-May 24, 2026", "rows": [{"surface": "Android mobile app", "streamName": "ElectricNOW", "streamId": "12950551103", "platform": "Android", "activeUsers": 3018, "sessions": 4721, "engagedSessions": 3810, "eventCount": 111199, "engagementRate": 80.70324083880533, "avgEngagedMinutesPerUser": 8.444223547603269, "avgEngagedMinutesPerSession": 5.398150109440091}, {"surface": "iOS / Apple app stream", "streamName": "ElectricNow", "streamId": "12982344897", "platform": "iOS", "activeUsers": 2325, "sessions": 3811, "engagedSessions": 3196, "eventCount": 86874, "engagementRate": 83.86250327997901, "avgEngagedMinutesPerUser": 41.14767741935484, "avgEngagedMinutesPerSession": 25.10321437942797}, {"surface": "Roku", "streamName": "electricnow-roku", "streamId": "13096428368", "platform": "web", "activeUsers": 1163, "sessions": 3345, "engagedSessions": 2714, "eventCount": 724286, "engagementRate": 81.13602391629297, "avgEngagedMinutesPerUser": 120.50257953568357, "avgEngagedMinutesPerSession": 41.89671150971599}, {"surface": "Web", "streamName": "electricnow-web", "streamId": "13090831762", "platform": "web", "activeUsers": 978, "sessions": 1810, "engagedSessions": 1414, "eventCount": 55155, "engagementRate": 78.12154696132598, "avgEngagedMinutesPerUser": 16.24655760054533, "avgEngagedMinutesPerSession": 8.778526703499079}, {"surface": "Android TV / CTV", "streamName": "ElectricNOW tv", "streamId": "13118400722", "platform": "Android", "activeUsers": 207, "sessions": 479, "engagedSessions": 448, "eventCount": 42519, "engagementRate": 93.52818371607515, "avgEngagedMinutesPerUser": 184.89049919484702, "avgEngagedMinutesPerSession": 79.90048712595686}, {"surface": "LG / webOS", "streamName": "electricnow-webos", "streamId": "12976053175", "platform": "web", "activeUsers": 0, "sessions": 26, "engagedSessions": 0, "eventCount": 138, "engagementRate": 0.0, "avgEngagedMinutesPerUser": 0, "avgEngagedMinutesPerSession": 0.0}], "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."}, "currentWeek": {"range": "May 25-May 31, 2026", "rows": [{"surface": "Android mobile app", "streamName": "ElectricNOW", "streamId": "12950551103", "platform": "Android", "activeUsers": 3071, "sessions": 4737, "engagedSessions": 3664, "eventCount": 89787, "engagementRate": 77.34853282668355, "avgEngagedMinutesPerUser": 7.872142624552263, "avgEngagedMinutesPerSession": 5.103514882837239}, {"surface": "iOS / Apple app stream", "streamName": "ElectricNow", "streamId": "12982344897", "platform": "iOS", "activeUsers": 2564, "sessions": 4186, "engagedSessions": 3522, "eventCount": 92933, "engagementRate": 84.13760152890588, "avgEngagedMinutesPerUser": 34.89377275091003, "avgEngagedMinutesPerSession": 21.373060996974043}, {"surface": "Roku", "streamName": "electricnow-roku", "streamId": "13096428368", "platform": "web", "activeUsers": 1133, "sessions": 3358, "engagedSessions": 2683, "eventCount": 723322, "engagementRate": 79.89874925550923, "avgEngagedMinutesPerUser": 124.22374227714035, "avgEngagedMinutesPerSession": 41.91349017272186}, {"surface": "Web", "streamName": "electricnow-web", "streamId": "13090831762", "platform": "web", "activeUsers": 946, "sessions": 1715, "engagedSessions": 1303, "eventCount": 67284, "engagementRate": 75.97667638483965, "avgEngagedMinutesPerUser": 20.69103241719521, "avgEngagedMinutesPerSession": 11.413245869776482}, {"surface": "Android TV / CTV", "streamName": "ElectricNOW tv", "streamId": "13118400722", "platform": "Android", "activeUsers": 206, "sessions": 471, "engagedSessions": 435, "eventCount": 30607, "engagementRate": 92.35668789808918, "avgEngagedMinutesPerUser": 245.81423948220066, "avgEngagedMinutesPerSession": 107.51111111111112}], "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."}}, "platformAudience": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "platformActiveUsers": 8710, "platformSessions": 13323, "platformEngagedSessions": 7954, "platformEventCount": 701671, "platformEngagementRate": 59.70126848307439, "platformEngagementSeconds": 13150791, "platformEngagementHours": 3652.9975, "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition."}, "previousWeek": {"range": "Jul 13-Jul 19, 2026", "platformActiveUsers": 3349, "platformSessions": 9415, "platformEngagedSessions": 7259, "platformEventCount": 1031243, "platformEngagementRate": 77.1003717472119, "platformEngagementSeconds": 20648146, "platformEngagementHours": 5735.596111111111, "note": "Fresh GA4 pagePath acquisition offset for Jul 13-Jul 19, 2026. Landing/device acquisition paths remain excluded from platform audience."}, "currentWeek": {"range": "Jul 20-Jul 26, 2026", "platformActiveUsers": 3377, "platformSessions": 9780, "platformEngagedSessions": 7100, "platformEventCount": 1110590, "platformEngagementRate": 72.59713701431492, "platformEngagementSeconds": 20739211, "platformEngagementHours": 5760.891944444445, "note": "Fresh GA4 landing-page acquisition offset for Jul 20-Jul 26, 2026 (landing/device paths only). Landing/device acquisition traffic remains excluded from platform audience."}}, "weeklyTrend": [{"date": "Jul 20", "rawDate": "20260720", "activeUsers": 654, "newUsers": 141, "sessions": 1352, "engagedSessions": 1044, "screenPageViews": 4566, "eventCount": 142412, "userEngagementDuration": 2563573, "engagementRate": 77.2189349112426}, {"date": "Jul 21", "rawDate": "20260721", "activeUsers": 757, "newUsers": 186, "sessions": 1514, "engagedSessions": 1184, "screenPageViews": 5208, "eventCount": 142353, "userEngagementDuration": 2948300, "engagementRate": 78.20343461030383}, {"date": "Jul 22", "rawDate": "20260722", "activeUsers": 713, "newUsers": 153, "sessions": 1415, "engagedSessions": 1129, "screenPageViews": 4942, "eventCount": 145178, "userEngagementDuration": 2677649, "engagementRate": 79.78798586572438}, {"date": "Jul 23", "rawDate": "20260723", "activeUsers": 677, "newUsers": 149, "sessions": 1414, "engagedSessions": 1104, "screenPageViews": 4766, "eventCount": 146295, "userEngagementDuration": 2664598, "engagementRate": 78.07637906647807}, {"date": "Jul 24", "rawDate": "20260724", "activeUsers": 673, "newUsers": 137, "sessions": 1449, "engagedSessions": 1101, "screenPageViews": 4911, "eventCount": 143185, "userEngagementDuration": 2551100, "engagementRate": 75.98343685300208}, {"date": "Jul 25", "rawDate": "20260725", "activeUsers": 710, "newUsers": 170, "sessions": 1412, "engagedSessions": 1100, "screenPageViews": 4892, "eventCount": 142935, "userEngagementDuration": 2824425, "engagementRate": 77.90368271954674}, {"date": "Jul 26", "rawDate": "20260726", "activeUsers": 802, "newUsers": 190, "sessions": 1898, "engagedSessions": 908, "screenPageViews": 3694, "eventCount": 248232, "userEngagementDuration": 4509566, "engagementRate": 47.83983140147524}], "monthlyTrend": [{"date": "Jun 27", "rawDate": "20260627", "activeUsers": 1163, "newUsers": null, "sessions": 1882, "engagedSessions": 1433, "screenPageViews": 4652, "eventCount": 154508, "engagementRate": 76.1424017003188}, {"date": "Jun 28", "rawDate": "20260628", "activeUsers": 1337, "newUsers": null, "sessions": 2339, "engagedSessions": 702, "screenPageViews": 7386, "eventCount": 147386, "engagementRate": 30.012825994014534}, {"date": "Jun 29", "rawDate": "20260629", "activeUsers": 961, "newUsers": null, "sessions": 1619, "engagedSessions": 1266, "screenPageViews": 4073, "eventCount": 144209, "engagementRate": 78.1964175416924}, {"date": "Jun 30", "rawDate": "20260630", "activeUsers": 776, "newUsers": null, "sessions": 1408, "engagedSessions": 1069, "screenPageViews": 3733, "eventCount": 138438, "engagementRate": 75.92329545454545}, {"date": "Jul 1", "rawDate": "20260701", "activeUsers": 714, "newUsers": null, "sessions": 1341, "engagedSessions": 1046, "screenPageViews": 3704, "eventCount": 131297, "engagementRate": 78.00149142431022}, {"date": "Jul 2", "rawDate": "20260702", "activeUsers": 768, "newUsers": null, "sessions": 1424, "engagedSessions": 1083, "screenPageViews": 3929, "eventCount": 135267, "engagementRate": 76.05337078651685}, {"date": "Jul 3", "rawDate": "20260703", "activeUsers": 790, "newUsers": null, "sessions": 1404, "engagedSessions": 1079, "screenPageViews": 3882, "eventCount": 133289, "engagementRate": 76.85185185185185}, {"date": "Jul 4", "rawDate": "20260704", "activeUsers": 922, "newUsers": null, "sessions": 1792, "engagedSessions": 1429, "screenPageViews": 5647, "eventCount": 152908, "engagementRate": 79.74330357142857}, {"date": "Jul 5", "rawDate": "20260705", "activeUsers": 770, "newUsers": null, "sessions": 1554, "engagedSessions": 1223, "screenPageViews": 4796, "eventCount": 141295, "engagementRate": 78.7001287001287}, {"date": "Jul 6", "rawDate": "20260706", "activeUsers": 780, "newUsers": null, "sessions": 1510, "engagedSessions": 1155, "screenPageViews": 4467, "eventCount": 137589, "engagementRate": 76.49006622516556}, {"date": "Jul 7", "rawDate": "20260707", "activeUsers": 768, "newUsers": null, "sessions": 1449, "engagedSessions": 1136, "screenPageViews": 4487, "eventCount": 136976, "engagementRate": 78.39889579020014}, {"date": "Jul 8", "rawDate": "20260708", "activeUsers": 759, "newUsers": null, "sessions": 1486, "engagedSessions": 1198, "screenPageViews": 4719, "eventCount": 135410, "engagementRate": 80.61911170928667}, {"date": "Jul 9", "rawDate": "20260709", "activeUsers": 729, "newUsers": null, "sessions": 1413, "engagedSessions": 1110, "screenPageViews": 4676, "eventCount": 137563, "engagementRate": 78.55626326963908}, {"date": "Jul 10", "rawDate": "20260710", "activeUsers": 721, "newUsers": null, "sessions": 1345, "engagedSessions": 1084, "screenPageViews": 4593, "eventCount": 137902, "engagementRate": 80.59479553903346}, {"date": "Jul 11", "rawDate": "20260711", "activeUsers": 735, "newUsers": null, "sessions": 1359, "engagedSessions": 1055, "screenPageViews": 4583, "eventCount": 139458, "engagementRate": 77.63061074319353}, {"date": "Jul 12", "rawDate": "20260712", "activeUsers": 724, "newUsers": null, "sessions": 1409, "engagedSessions": 1063, "screenPageViews": 4245, "eventCount": 143385, "engagementRate": 75.44357700496806}, {"date": "Jul 13", "rawDate": "20260713", "activeUsers": 689, "newUsers": 131, "sessions": 1328, "engagedSessions": 1041, "screenPageViews": 4208, "eventCount": 135823, "userEngagementDuration": 2903189, "engagementRate": 78.38855421686746}, {"date": "Jul 14", "rawDate": "20260714", "activeUsers": 696, "newUsers": 114, "sessions": 1371, "engagedSessions": 1023, "screenPageViews": 4577, "eventCount": 134706, "userEngagementDuration": 3120570, "engagementRate": 74.61706783369803}, {"date": "Jul 15", "rawDate": "20260715", "activeUsers": 652, "newUsers": 130, "sessions": 1279, "engagedSessions": 1009, "screenPageViews": 4553, "eventCount": 143963, "userEngagementDuration": 2921960, "engagementRate": 78.88975762314307}, {"date": "Jul 16", "rawDate": "20260716", "activeUsers": 724, "newUsers": 170, "sessions": 1389, "engagedSessions": 1072, "screenPageViews": 4839, "eventCount": 151688, "userEngagementDuration": 2923322, "engagementRate": 77.17782577393808}, {"date": "Jul 17", "rawDate": "20260717", "activeUsers": 759, "newUsers": 193, "sessions": 1416, "engagedSessions": 1099, "screenPageViews": 4726, "eventCount": 189135, "userEngagementDuration": 2882215, "engagementRate": 77.61299435028248}, {"date": "Jul 18", "rawDate": "20260718", "activeUsers": 719, "newUsers": 163, "sessions": 1345, "engagedSessions": 1045, "screenPageViews": 4461, "eventCount": 135503, "userEngagementDuration": 2868641, "engagementRate": 77.69516728624535}, {"date": "Jul 19", "rawDate": "20260719", "activeUsers": 731, "newUsers": 166, "sessions": 1448, "engagedSessions": 1127, "screenPageViews": 4600, "eventCount": 141621, "userEngagementDuration": 3030843, "engagementRate": 77.83149171270718}, {"date": "Jul 20", "rawDate": "20260720", "activeUsers": 654, "newUsers": 141, "sessions": 1352, "engagedSessions": 1044, "screenPageViews": 4566, "eventCount": 142412, "userEngagementDuration": 2563573, "engagementRate": 77.2189349112426}, {"date": "Jul 21", "rawDate": "20260721", "activeUsers": 757, "newUsers": 186, "sessions": 1514, "engagedSessions": 1184, "screenPageViews": 5208, "eventCount": 142353, "userEngagementDuration": 2948300, "engagementRate": 78.20343461030383}, {"date": "Jul 22", "rawDate": "20260722", "activeUsers": 713, "newUsers": 153, "sessions": 1415, "engagedSessions": 1129, "screenPageViews": 4942, "eventCount": 145178, "userEngagementDuration": 2677649, "engagementRate": 79.78798586572438}, {"date": "Jul 23", "rawDate": "20260723", "activeUsers": 677, "newUsers": 149, "sessions": 1414, "engagedSessions": 1104, "screenPageViews": 4766, "eventCount": 146295, "userEngagementDuration": 2664598, "engagementRate": 78.07637906647807}, {"date": "Jul 24", "rawDate": "20260724", "activeUsers": 673, "newUsers": 137, "sessions": 1449, "engagedSessions": 1101, "screenPageViews": 4911, "eventCount": 143185, "userEngagementDuration": 2551100, "engagementRate": 75.98343685300208}, {"date": "Jul 25", "rawDate": "20260725", "activeUsers": 710, "newUsers": 170, "sessions": 1412, "engagedSessions": 1100, "screenPageViews": 4892, "eventCount": 142935, "userEngagementDuration": 2824425, "engagementRate": 77.90368271954674}, {"date": "Jul 26", "rawDate": "20260726", "activeUsers": 802, "newUsers": 190, "sessions": 1898, "engagedSessions": 908, "screenPageViews": 3694, "eventCount": 248232, "userEngagementDuration": 4509566, "engagementRate": 47.83983140147524}], "appSectionUsage": {"period": "Jul 20-Jul 26, 2026", "metric": "GA4 active users and engaged time by unified screen name rollup", "rows": [{"section": "Unattributed app/background events", "activeUsers": 3205, "sessions": 0, "engagedSessions": 0, "screenPageViews": 3704, "eventCount": 954207, "totalEngagementSeconds": 13590904, "engagementRate": 0, "totalEngagementHours": 3775.251111111111, "avgEngagedMinutesPerUser": 70.67552782111285, "avgEngagedMinutesPerSession": 226515.06666666668, "sharePct": 38.64705173037501}, {"section": "Home", "activeUsers": 2822, "sessions": 0, "engagedSessions": 0, "screenPageViews": 10746, "eventCount": 45350, "totalEngagementSeconds": 811234, "engagementRate": 0, "totalEngagementHours": 225.34277777777777, "avgEngagedMinutesPerUser": 4.791129222773447, "avgEngagedMinutesPerSession": 13520.566666666668, "sharePct": 34.028698902689015}, {"section": "On Demand", "activeUsers": 980, "sessions": 0, "engagedSessions": 0, "screenPageViews": 4292, "eventCount": 5291, "totalEngagementSeconds": 46388, "engagementRate": 0, "totalEngagementHours": 12.885555555555555, "avgEngagedMinutesPerUser": 0.7889115646258503, "avgEngagedMinutesPerSession": 773.1333333333333, "sharePct": 11.81719522488846}, {"section": "Title Detail", "activeUsers": 476, "sessions": 0, "engagedSessions": 0, "screenPageViews": 5646, "eventCount": 6597, "totalEngagementSeconds": 85841, "engagementRate": 0, "totalEngagementHours": 23.844722222222224, "avgEngagedMinutesPerUser": 3.005637254901961, "avgEngagedMinutesPerSession": 1430.6833333333334, "sharePct": 5.739780537802966}, {"section": "Player", "activeUsers": 195, "sessions": 0, "engagedSessions": 0, "screenPageViews": 4698, "eventCount": 76157, "totalEngagementSeconds": 2770200, "engagementRate": 0, "totalEngagementHours": 769.5, "avgEngagedMinutesPerUser": 236.76923076923077, "avgEngagedMinutesPerSession": 46170.0, "sharePct": 2.3513806825033163}, {"section": "Category", "activeUsers": 160, "sessions": 0, "engagedSessions": 0, "screenPageViews": 489, "eventCount": 557, "totalEngagementSeconds": 5495, "engagementRate": 0, "totalEngagementHours": 1.5263888888888888, "avgEngagedMinutesPerUser": 0.5723958333333333, "avgEngagedMinutesPerSession": 91.58333333333333, "sharePct": 1.9293379959001569}, {"section": "Title Pages", "activeUsers": 148, "sessions": 0, "engagedSessions": 0, "screenPageViews": 322, "eventCount": 412, "totalEngagementSeconds": 14223, "engagementRate": 0, "totalEngagementHours": 3.950833333333333, "avgEngagedMinutesPerUser": 1.6016891891891893, "avgEngagedMinutesPerSession": 237.05, "sharePct": 1.784637646207645}, {"section": "Live TV", "activeUsers": 147, "sessions": 0, "engagedSessions": 0, "screenPageViews": 1326, "eventCount": 18038, "totalEngagementSeconds": 3303014, "engagementRate": 0, "totalEngagementHours": 917.5038888888889, "avgEngagedMinutesPerUser": 374.4913832199546, "avgEngagedMinutesPerSession": 55050.23333333333, "sharePct": 1.772579283733269}, {"section": "Search", "activeUsers": 75, "sessions": 0, "engagedSessions": 0, "screenPageViews": 648, "eventCount": 708, "totalEngagementSeconds": 1925, "engagementRate": 0, "totalEngagementHours": 0.5347222222222222, "avgEngagedMinutesPerUser": 0.4277777777777778, "avgEngagedMinutesPerSession": 32.083333333333336, "sharePct": 0.9043771855781985}, {"section": "Settings", "activeUsers": 49, "sessions": 0, "engagedSessions": 0, "screenPageViews": 186, "eventCount": 244, "totalEngagementSeconds": 2682, "engagementRate": 0, "totalEngagementHours": 0.745, "avgEngagedMinutesPerUser": 0.9122448979591837, "avgEngagedMinutesPerSession": 44.7, "sharePct": 0.590859761244423}, {"section": "My Stuff", "activeUsers": 36, "sessions": 0, "engagedSessions": 0, "screenPageViews": 333, "eventCount": 333, "totalEngagementSeconds": 0, "engagementRate": 0, "totalEngagementHours": 0.0, "avgEngagedMinutesPerUser": 0.0, "avgEngagedMinutesPerSession": 0.0, "sharePct": 0.4341010490775353}], "note": "Fresh screen-name rollup. Rows can double-count users who visit multiple sections and should be used directionally, not as a deduped total audience count. GA4 pages/screens pull does not return sessions/engagedSessions by screen name, so those fields are 0 by design.", "sourceNote": "Internal GA4 pull, property 497892271."}, "rokuAppEngagement": {"sourceLabel": "Roku App Engagement email report", "sourceDetail": "Roku app engagement is parsed from the latest Roku App Engagement PDF emailed from bdp_noreply@data.roku.com. It measures Roku app/channel-store usage and is shown separately from GA4 app/web metrics.", "reportPeriod": "Jul 19-Jul 25, 2026", "rawReportPeriod": "Jul 19-Jul 25, 2026 (generated Jul 27)", "channelStoreCode": "us", "reportGenerated": "July 27, 2026 at 7:19 AM PDT", "dateLabels": ["Sun Jul 19", "Mon Jul 20", "Tue Jul 21", "Wed Jul 22", "Thu Jul 23", "Fri Jul 24", "Sat Jul 25"], "metrics": {"newInstalls": 209, "uninstalls": 107, "netInstalls": 102, "cumulativeInstalls": 289797, "avgDailyViewers": 335, "avgMinPerViewer": 74.5, "totalHoursStreamed": 2909}, "reportEmailDate": "2026-07-27T14:19:00+00:00", "attachmentFilename": "App_Engagement_2026-07-27T0719.pdf", "note": "Roku TRC Live Dashboard reports are intentionally excluded from app/platform usage to avoid mixing Roku Channel live-stream consumption with ElectricNOW app engagement.", "status": "CURRENT_PARSED", "staleNote": "Jul 27, 2026 Roku App Engagement report (covers Jul 19-Jul 25, 2026) parsed from Outlook ROKU folder PDF. Kept separate from GA4 and Roku TRC live-channel reports.", "lastSuccessfulReportPeriod": "Jul 19-Jul 25, 2026", "previousReportPeriod": "Jul 16-Jul 22, 2026", "previousMetrics": {"newInstalls": 218, "uninstalls": 109, "netInstalls": 109, "cumulativeInstalls": 289710, "avgDailyViewers": 344, "avgMinPerViewer": 80.16, "totalHoursStreamed": 3216}}, "visitSummary": {"source": "GA4 sessions on tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths.", "weekly": {"label": "Weekly visits", "range": "Jul 20-Jul 26, 2026", "sessions": 9780, "activeUsers": 3377, "engagedSessions": 7100, "previousRange": "Jul 13-Jul 19, 2026", "previousSessions": 9415, "deltaVsPreviousPct": 3.876792, "comparisonLabel": "vs previous 7 days"}, "monthly": {"label": "Monthly visits", "range": "May 18-Jun 14, 2026", "sessions": 57678, "activeUsers": 37956, "engagedSessions": 45928, "previousRange": "Apr 20-May 17, 2026", "previousSessions": 56406, "deltaVsPreviousPct": 2.255079246888629, "comparisonLabel": "vs prior 28 days", "asOfNote": "Most recent fully reconciled 28-day window (through Jun 14, 2026). visitSummary figures are landing-excluded; the 28-day landing-excluded aggregation was not re-pulled in the latest weekly refreshes, so this window lags the weekly window (Jun 22-28) and is preserved as last-good rather than recomputed. The +2.3% delta compares it against the preceding 28 days (Apr 20-May 17, 2026)."}, "note": "Visits are GA4 sessions, not unique people. Landing-page/device acquisition traffic remains excluded from platform audience and shown only as acquisition context."}, "manualAppleSalesUpdate": {"updatedAt": "2026-07-06T14:31:00+00:00", "source": "manual_apple_sales.json updated Jul 6, 2026 with Jul 2 and Jul 5 Purchase HD 15 ($14.99 each); Jun 30 Purchase HD 3 ($2.99) already recorded Jul 2, not re-added; preserved across refresh", "totalManualAppleEntries": 16, "note": "16 manual entries; Jul 6, 2026 adds Jul 2 and Jul 5 (Purchase HD 15 $14.99 each) from the Jun 29-Jul 5, 2026 Apple Connect screenshots (net-new $29.98 gross / $20.98 est net). The Jun 30 Purchase HD 3 ($2.99) in the same screenshot was already recorded Jul 2 and is deduped by stable id (0 net-new)."}, "googleAdsSummary": {"source": "Google Ads connector", "accountId": "4342267711", "customerClientId": "4342267711", "accountName": "Electric Entertainment", "period": "Jun 1-Jun 7, 2026", "campaignName": "PCSM - ElectricNow App Promotion - Android", "campaignId": "23836266606", "campaignType": "MULTI_CHANNEL", "status": "STALE_RATE_LIMITED", "impressions": 10424, "clicks": 304, "ctrPct": 2.916346891788181, "cost": 66.47, "avgCpc": 0.21865670065789475, "conversions": 124.0, "allConversions": 235.0, "conversionRatePct": 40.78947368421053, "costPerConversion": 0.5360615887096775, "daily": [{"date": "2026-06-01", "device": "2026-06-01", "cost": 14.011478, "impressions": 2071, "clicks": 69, "conversions": 28.0, "allConversions": 56.0, "ctrPct": 3.3317238049251565, "avgCpc": 0.20306489855072465, "costPerConversion": 0.5004099285714286}, {"date": "2026-06-02", "device": "2026-06-02", "cost": 17.030354, "impressions": 2515, "clicks": 70, "conversions": 30.0, "allConversions": 55.0, "ctrPct": 2.783300198807157, "avgCpc": 0.24329077142857142, "costPerConversion": 0.5676784666666667}, {"date": "2026-06-03", "device": "2026-06-03", "cost": 16.340343, "impressions": 2704, "clicks": 87, "conversions": 29.0, "allConversions": 55.0, "ctrPct": 3.217455621301775, "avgCpc": 0.18782003448275864, "costPerConversion": 0.5634601034482759}, {"date": "2026-06-04", "device": "2026-06-04", "cost": 16.226717999999998, "impressions": 2683, "clicks": 68, "conversions": 30.0, "allConversions": 59.0, "ctrPct": 2.5344763324636603, "avgCpc": 0.23862820588235292, "costPerConversion": 0.5408905999999999}, {"date": "2026-06-05", "device": "2026-06-05", "cost": 2.862744, "impressions": 451, "clicks": 10, "conversions": 7.0, "allConversions": 10.0, "ctrPct": 2.2172949002217295, "avgCpc": 0.28627440000000004, "costPerConversion": 0.4089634285714286}], "deviceBreakout": [{"date": "MOBILE", "device": "MOBILE", "cost": 54.282101999999995, "impressions": 8384, "clicks": 252, "conversions": 97.0, "allConversions": 189.0, "ctrPct": 3.0057251908396947, "avgCpc": 0.21540516666666665, "costPerConversion": 0.5596092989690721}, {"date": "TABLET", "device": "TABLET", "cost": 12.156039000000002, "impressions": 2034, "clicks": 52, "conversions": 27.0, "allConversions": 46.0, "ctrPct": 2.55653883972468, "avgCpc": 0.2337699807692308, "costPerConversion": 0.45022366666666674}, {"date": "CONNECTED_TV", "device": "CONNECTED_TV", "cost": 0.033496000000000005, "impressions": 6, "clicks": 0, "conversions": 0.0, "allConversions": 0.0, "ctrPct": 0.0, "avgCpc": null, "costPerConversion": null}], "conversionActions": [{"campaign": "PCSM - ElectricNow App Promotion - Android", "conversionAction": "electricnow-4fbb4 - com.electric.now (Android) First open", "conversions": 124.0, "allConversions": 136.0}, {"campaign": "PCSM - ElectricNow App Promotion - Android", "conversionAction": "Android installs (all other apps)", "conversions": 0.0, "allConversions": 99.0}], "plainEnglish": "Google Ads produced 124 counted Android first-open conversions on $66.47 of spend, about $0.54 per conversion.", "dataFreshnessNote": "Google Ads connector CONNECTED on the Jul 13, 2026 run and returned NO rows for the current complete week (Jul 6-12, 2026): no active campaigns / zero spend. Historical last-good campaign figures are preserved for context, not zeroed.", "statusDetail": "Current complete week Jul 6-12, 2026: connected, zero rows (no active Google Ads spend). Customer 4342267711.", "lastSuccessfulPull": "2026-06-11 14:40 PDT", "staleNote": "Google Ads connector is connected, but the Jul 27 refresh hit API RESOURCE_EXHAUSTED / rate-limited (retry-after ~538s). Last successful campaign metrics are preserved, not zeroed.", "latestQueryPeriod": "Jul 20-Jul 26, 2026", "latestQueryStatus": "CONNECTED_RATE_LIMITED", "latestQueryNote": "Google Ads campaign report (customer 4342267711) returned zero rows for Jul 6-12, 2026 - no active campaign spend/impressions/clicks in the window. The connector is CONNECTED; this is a genuine no-spend week, not a failure."}, "adSuccessSummary": {"googleAds": {"period": "May 12-May 26, 2026", "campaignName": "PCSM - ElectricNow App Promotion - Android", "spend": 241.08, "impressions": 46962, "clicks": 1458, "ctrPct": 3.1, "avgCpc": 0.17, "firstOpenConversions": 443.0, "allConversions": 967.0, "conversionRatePct": 30.38, "costPerConversion": 0.54, "source": "Google Ads connector", "note": "Google Ads connector responded for Jul 6-9, 2026 with zero campaign rows (no active spend in the window) - recorded as connected/no-current-rows, not a failure. Last-good values (May 12-26, 2026 campaign) are preserved, not zeroed.", "status": "connected_no_current_rows"}, "metaAds": {"period": "Jun 14-Jun 20, 2026", "spend": 1642.88, "impressions": 108731, "clicks": 5050, "ctrPct": 4.64, "downloads": 1, "costPerDownload": 0.0, "iosDownloads": 0, "androidDownloads": 1, "source": "Nathan / Forge One Meta email report", "note": "Meta spent only $40.80 for Jul 2-Jul 8, 2026 (-97.3% vs the prior period) on a single iOS-only campaign driving 23 iOS installs at $1.77 each (CPC $0.15). The campaign was almost fully paused this week. Treat as an acquisition-efficiency signal only. Paid-campaign impressions (2,539) are distinct from in-app GA4 ad impressions.", "reportedPlatformDownloads": 1, "metaAppInstallsFromBreakdown": 1174}, "period": "Jul 2-Jul 8, 2026 for Meta email report; Google Ads connector responded for Jul 6-9, 2026 with zero campaign rows (no active spend in-window); last-good preserved", "verdict": "acceptable but needs proof of viewing", "plainEnglish": "Paid acquisition verdict: efficiency signal only, not a viewing/ROAS proof this run. Meta (Jul 2-Jul 8, 2026) was scaled to almost nothing - $40.80 spend (-97.3%) driving 23 iOS installs (-97.5%) at $1.77 each; CPC improved to $0.15 (-55.8%) but cost per install rose +9.6%, with 55-64 ($1.39) and 65+ ($1.65) the most efficient bands and 18-24 producing 0 installs. Google Ads returned zero rows for Jul 6-9 (no active spend); connected/no-current-rows, last-good preserved, not zeroed. Distinguish paid-campaign impressions (2,539 Meta) from in-app GA4 ad impressions. Spend reliably buys free iOS installs but there is no proof they become viewers or buyers; we do NOT claim true ROAS.", "recommendations": ["Separate iOS and Android budgets so cheaper Android volume does not hide more expensive iOS acquisition.", "Shift budget toward lower-cost audiences only when GA4 shows those cohorts also become viewing users.", "Refresh creative with show-specific hooks for The Ark, Leverage, Almost Paradise, The Librarians, and The Poly Couple.", "Ask the developer to pass campaign/ad identifiers into GA4 first-open and viewing events so install-to-view quality can be measured directly.", "Do not call this true ROAS until ad-server revenue and complete app-store revenue are connected."], "googleAdsStatus": "STALE_RATE_LIMITED", "googleAdsNote": "Google Ads connector is connected but rate-limited on Jul 27; last successful Google Ads efficiency metrics are preserved."}, "metaAdsSummary": {"source": "Meta Ads (Forge One / nathan@pcsocialmedia.com twice-weekly email report)", "reportType": "Meta Ads Performance Report (Meta-only, used to avoid double-counting Google Ads which is pulled via connector)", "emailFrom": "nathan@pcsocialmedia.com", "emailTo": "DeanD@electricentertainment.com", "emailSubject": "ElectricNow | Meta Ads Performance Report (2026-07-12 to 2026-07-18)", "emailDate": "2026-07-19T13:31:09+00:00", "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAPLZ0ZHAAA=", "reportLink": "https://app.forgeonemarketing.com/r/28800a13-6c1d-4562-8614-872d80ec8c80", "reportCadence": "Twice weekly (Sundays and Thursdays at 6am PST/PDT), each report covers Last 7 days", "period": "Jul 12-Jul 18, 2026", "periodStart": "2026-07-12", "periodEnd": "2026-07-18", "comparison": "vs prior Meta report period", "spend": 0.0, "impressions": 0, "linkClicks": 0, "costPerClick": 0.0, "iosDownloads": 0, "androidDownloads": 0, "totalDownloads": 0, "costPerIosDownload": null, "costPerAndroidDownload": null, "costPerDownload": 0.0, "ctrPct": 0.0, "deltas": {"spendPct": -100.0, "impressionsPct": -100.0, "linkClicksPct": -100.0, "costPerClickPct": -100.0, "iosDownloadsPct": -100.0, "costPerIosDownloadPct": null, "comparisonNote": "Deltas vs prior Meta report period (Jul 2-Jul 8, 2026)."}, "campaigns": [], "genderBreakdown": [], "ageBreakdown": [], "plainEnglish": "Meta's latest report (Jul 5-11, 2026) shows the campaign PAUSED: $0.00 spend (down 100%), 0 impressions, 0 link clicks and 0 app installs, with 'No campaign metrics found for this period'. The prior report (Jul 2-8, 2026) was $40.80 spend / 2,539 impressions / 251 link clicks / 23 iOS installs at $1.77 each. Per PC Social Media (Nathan), ElectricNow is deliberately pivoting AWAY from Meta Ads to Roku Ads: mobile iOS/Android install retention was too low to justify spend, TV (Roku) is judged the most valuable audience, and DotStudio is setting up Roku conversion tracking. So the Meta drop to $0 is an intentional strategy change, not a reporting gap.", "paidAcquisitionInterpretation": "PAID ACQUISITION ASSESSMENT (Meta, Jul 5-11, 2026). Meta paid acquisition is effectively OFF this week: spend $0.00 (-100%), 0 impressions and 0 iOS installs. This is an INTENTIONAL pivot away from Meta Ads toward Roku Ads (PC Social Media / Nathan): mobile retention was too low, TV is the priority audience, and Roku conversion tracking is being set up by DotStudio. Google Ads also had no spend this week (connector returned no rows for Jul 6-12). NET: essentially no paid acquisition ran this week on either Meta or Google. Effect on the platform: GA4 property-wide traffic eased (sessions 9,971 vs 10,320, about -3.4%; new users 1,179 vs 1,519) and week-unique active users are estimated lower (~3,800 vs 4,158) - consistent with paid acquisition being switched off, though week-to-week noise also contributes. We still do NOT claim true ROAS (no install->activation->sale join; installs are free, not paid sales). Distinguish paid-campaign impressions (0 Meta this week) from in-app ad impressions (GA4 ads_impression, last instrumented at 34,940 for Jun 29-Jul 5) - different things. NEXT TESTS: (1) stand up Roku Ads conversion tracking and measure install->first-play activation; (2) compare Roku Ads cost-per-install to the paused Meta baseline ($1.77 iOS); (3) confirm whether the traffic dip persists once Roku Ads spend begins.", "threadId": "AAQkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOAAQAIBt6Dqvj9JKvIVO2AKlKos=", "reportedPlatformDownloads": 0, "blendedCostPerReportedDownload": null, "metaAppInstallsFromBreakdown": 0, "downloadGrainNote": "Meta bought 0 app installs this week (campaign paused). Paid acquisition, when active, buys FREE app installs, not paid sales; installs are a distinct grain from visible platform sales and from in-app ad impressions.", "previousPeriod": {"period": "Jul 2-Jul 8, 2026", "spend": 40.8, "impressions": 2539, "linkClicks": 251, "costPerClick": 0.15, "iosDownloads": 23, "androidDownloads": 0, "costPerIosDownload": 1.77}, "strategyNote": "PC Social Media (Nathan) is pivoting ElectricNow from Meta Ads to Roku Ads due to low mobile iOS/Android retention; TV is the priority audience and DotStudio is configuring Roku conversion tracking. Meta $0 for Jul 5-11 reflects this deliberate pause.", "status": "STALE_NO_NEW_REPORT", "note": "Latest Nathan/Forge One Meta-only email found in Outlook: Jul 12-Jul 18, 2026. Spend, impressions, clicks, and downloads were all zero; campaign appears paused or inactive. This is intentionally separate from Google Ads connector data.", "staleNote": "Broad and Nathan-specific Outlook searches on Jul 27, 2026 found no new Meta Ads performance email (only a Roku Ads CAPI tracking-setup thread). Prior Meta metrics are preserved unchanged below.", "lastCheckedAt": "2026-07-27T13:06:00-07:00"}, "ga4PurchaseSignals": {"sourceLabel": "GA4 In-App Purchase Signals", "sourceShortLabel": "Google Play / Android purchase signals", "sourceDetail": "These are GA4 in_app_purchase events from property 497892271. They are directional purchase signals only — GA4 does not return Google Play / Android billing transaction IDs, so these rows must be reconciled against Google Play Console before being treated as financial revenue. They are intentionally kept out of the Stripe / Roku / Apple visible-sales rollup above.", "reconciliationLabel": "GA4 purchase signal, not reconciled revenue", "reconciliationDetail": "Likely Google Play / Android billing. Reconcile against Google Play Console before counting toward final sales. Do not double count if the same purchase later appears in Stripe, Roku, Apple, or official Google Play reporting.", "isFinancialRevenue": false, "excludedFromVisiblePlatformSales": true, "latestDay": {"label": "GA4 in-app purchase signals on May 21, 2026", "date": "2026-05-21", "range": "May 21, 2026 (America/Los_Angeles)", "purchaseRevenue": 29.98, "eventCount": 2, "events": [{"dateHour": "2026052106", "eventName": "in_app_purchase", "platform": "Android", "deviceCategory": "mobile", "operatingSystem": "Android", "appVersion": "16.019", "country": "United States", "region": "Pennsylvania", "city": "Philadelphia", "sourceMedium": "(direct) / (none)", "transactionId": "(not set)", "purchaseRevenue": 14.99}, {"dateHour": "2026052121", "eventName": "in_app_purchase", "platform": "Android", "deviceCategory": "smart tv", "operatingSystem": "Android", "appVersion": "16.026", "country": "United States", "region": "Washington", "city": "Vancouver", "sourceMedium": "(direct) / (none)", "transactionId": "(not set)", "purchaseRevenue": 14.99}]}, "platformSplit": [{"label": "Android · mobile", "platform": "Android", "deviceCategory": "mobile", "eventCount": 1, "purchaseRevenue": 14.99}, {"label": "Android · smart tv", "platform": "Android", "deviceCategory": "smart tv", "eventCount": 1, "purchaseRevenue": 14.99}], "appVersionSplit": [{"appVersion": "16.019", "platform": "Android", "deviceCategory": "mobile", "eventCount": 1, "purchaseRevenue": 14.99}, {"appVersion": "16.026", "platform": "Android", "deviceCategory": "smart tv", "eventCount": 1, "purchaseRevenue": 14.99}], "geoSplit": [{"country": "United States", "region": "Pennsylvania", "city": "Philadelphia", "eventCount": 1, "purchaseRevenue": 14.99}, {"country": "United States", "region": "Washington", "city": "Vancouver", "eventCount": 1, "purchaseRevenue": 14.99}], "comparisonProperty": {"property": "213042706", "result": "No in_app_purchase rows returned for 2026-05-21 from the older GA4 property; signal is only present in property 497892271."}, "note": "GA4 detected $29.98 of Android in-app purchase activity on May 21, 2026 across 2 in_app_purchase events (1 Android mobile in Philadelphia at appVersion 16.019; 1 Android smart TV in Vancouver, WA at appVersion 16.026). This is most likely Google Play / Android billing. It is shown separately from Stripe, Roku, and the manual Apple App Store snapshot and is NOT included in visible platform sales until it is reconciled with Google Play Console."}, "manualAppleDownloads": {"sourceLabel": "Manual Apple App Store Connect snapshot", "sourceDetail": "User-provided App Store Connect screenshots for Free iOS/watchOS/tvOS downloads. This is app download activity, not paid sales and not GA4 active users.", "capturedAt": "2026-07-27 07:19 PDT", "enteredAt": "2026-07-27 13:01 PDT", "uploadedAttachments": ["uploaded_attachments/b6ada2ee1ce244b29823d9414891e933/image.jpeg"], "product": "ElectricNOW", "platform": "Free iOS/watchOS/tvOS", "period": "Jul 20-Jul 26, 2026", "start": "2026-07-20", "end": "2026-07-26", "downloads": 139, "displayDownloads": "139", "dailyAverage": 19.9, "daily": [{"date": "2026-07-20", "label": "July 20, 2026", "downloads": 16, "updates": 53}, {"date": "2026-07-21", "label": "July 21, 2026", "downloads": 27, "updates": 58}, {"date": "2026-07-22", "label": "July 22, 2026", "downloads": 18, "updates": 55}, {"date": "2026-07-23", "label": "July 23, 2026", "downloads": 21, "updates": 46}, {"date": "2026-07-24", "label": "July 24, 2026", "downloads": 15, "updates": 43}, {"date": "2026-07-25", "label": "July 25, 2026", "downloads": 19, "updates": 44}, {"date": "2026-07-26", "label": "July 26, 2026", "downloads": 23, "updates": 52}], "deltaPct": 1.5, "territories": [{"territory": "United States", "downloads": 139, "deltaPct": 1.5}], "note": "Manual Apple Connect screenshot entered Jul 27, 2026. Daily U.S. free iOS/watchOS/tvOS downloads total 139 for Jul 20-Jul 26 (351 app updates in the same window). Downloads/updates only; no new Apple sales were provided this refresh.", "fiveWeekSnapshot": {"period": "Apr 27-May 31, 2026", "start": "2026-04-27", "end": "2026-05-31", "downloads": 6183, "displayDownloads": "6.18K", "weeklyAverage": 1240, "deltaPct": 353.0, "territories": [{"territory": "United States", "downloads": 6174, "deltaPct": 357.0}, {"territory": "Australia", "downloads": 9, "deltaPct": -35.7}]}, "priorSnapshot": {"period": "Jul 17-Jul 23, 2026", "start": "2026-07-17", "end": "2026-07-23", "downloads": 137}, "updates": 351}, "manualDataPatch": {"updatedAt": "2026-06-07 07:55 PDT", "updatedAtIso": "2026-06-07T07:55:00-07:00", "items": ["manualAppleDownloads", "rokuAppEngagement", "metaAdsSummary"], "note": "Manual/email data patch applied without changing GA4, Stripe, Roku sales, or Apple sales totals."}, "titleAggregationPatch": {"updatedAt": "2026-06-07 07:59 PDT", "summary": {"topPrograms": [], "topVideoTitles": [], "topChannelTitles": [], "collapsedDuplicateVideoTitles": [], "removedVideoRowsFromPrograms": ["Exile", "Alone"]}, "rule": "Same video-title rows are collapsed; blank collection labels no longer become standalone Top Shows rows. Active users are not summed across duplicate title rows to avoid overcounting."}, "plainEnglishSummary": {"generatedAt": "2026-07-27T13:06:00-07:00", "overview": "For Jul 20-Jul 26, the strongest signal was off-app: YouTube drove 242,276 views, 84,348 hours watched, and $3,579.54 estimated revenue, with YTD YouTube revenue now at $98,785.81. On the ElectricNOW app itself, GA4 active users were up 1.2% and sessions were up 3.8% versus the prior week, but engagement rate softened from 77.2% to 72.3% and engaged sessions declined, so reach grew a little faster than depth of engagement. Visible platform sales for the complete week were 4 purchases / $80.95 (2 Roku + 2 Stripe); Apple had no new sales, only 139 downloads and 351 updates. Paid acquisition verdict: acceptable but unproven — Google Ads is connected but rate-limited this refresh (stale, preserved) and Meta has no new report, so neither channel's spend can be tied to verified in-app viewing this week.", "bullets": ["Traffic/use: active users were 3,540 (+1.2% vs prior week), sessions were 10,102 (+3.8%), and screen/page views were 32,979 (+3.2%).", "Attention: total engaged time was 5,761 hours (+0.4%), but engagement rate eased to 72.3% from 77.2%, and engaged sessions dipped from 7,507 to 7,305. More people visited, but a slightly smaller share of sessions were 'engaged.'", "Sales (complete week): visible platform sales were 4 purchases / $80.95 — two Roku Purchase Bundle 20 sales (Jul 20, Jul 25) and two Stripe sales (Jul 21 $19.98, Jul 26 $20.99). Visible YTD (complete-week basis) is 72 purchases / $1,338.26. Two more Stripe sales ($35.98) landed same-day as this refresh (Jul 27) and are tracked separately, not counted in the complete week.", "Apple downloads: latest manual App Store Connect snapshot shows 139 free iOS/watchOS/tvOS downloads and 351 app updates for Jul 20-Jul 26, up +1.5% from the prior 137-download snapshot. No new Apple sales this refresh.", "Roku app engagement: latest Roku App Engagement report (Jul 19-Jul 25) shows 209 new installs, 107 uninstalls, 335 average daily viewers, 74.50 avg minutes per viewer, and 2,909 hours streamed. Roku app metrics remain separate from GA4 and Roku TRC live-channel metrics.", "YouTube: Jul 20-Jul 26 produced 242,276 views, 84,348 hours watched, $3,579.54 estimated revenue, and $98,785.81 YTD estimated revenue. \"Everyone Wanted to Be on This Ship\" (The Ark, S01E01) led by views this week; Flyboys remained a top watch-time title.", "TVOD title revenue (new this refresh): Michael Johnson's title-transaction report shows 7,914 total registered users (7,814 active) and $1,339.15 net TVOD revenue across 90 paid transactions since Apr 1, 2026. Top title by net revenue: The Librarians: The Next Chapter ($299.8). This is a separate, cumulative-since-launch source and is not reconciled against the Stripe/Roku/Apple visible-sales figures above.", "Paid acquisition verdict: acceptable but needs proof of viewing. Meta has no new performance report this refresh (last known state preserved), and Google Ads is connected but rate-limited, so last-good Google data is preserved. Do not read paid-campaign impressions as ElectricNOW in-app ad impressions, and do not infer ROAS because ad-server revenue is unavailable.", "Next tests: restart paid spend only with clean measurement, split iOS and Android budgets, focus geos where app usage already exists while reserving a small test budget for underpenetrated states, use show-specific creative tied to actual viewing quality, and review install-to-viewing behavior before scaling budget."], "connectorStatus": {"GA4": "CONNECTED_FRESH", "Stripe": "CONNECTED_UPDATED", "Outlook/Roku": "CONNECTED_UPDATED", "Google Ads": "CONNECTED_RATE_LIMITED_STALE_PRESERVED", "Meta email": "STALE_NO_NEW_REPORT", "YouTube": "CONNECTED_FRESH", "Apple manual": "UPDATED_DOWNLOADS_ONLY", "TVOD (Michael email)": "NEW_INTEGRATION_CURRENT"}}, "youtubeSummary": {"source": "YouTube Analytics connector, ElectricNOW channel", "connectorStatus": "CONNECTED", "period": "Jul 20-Jul 26, 2026", "periodNote": "Complete YouTube Analytics week, Jul 20-Jul 26, 2026.", "comparisonPeriod": "Jul 13-Jul 19, 2026", "comparisonNote": "Compared to the prior full week (Jun 22-Jun 28, 2026).", "isPlatformSales": false, "revenueType": "estimated YouTube ad revenue", "kpis": [{"key": "views", "label": "Views", "value": 175840, "deltaPct": 11.856795, "detail": "YouTube channel views in the complete week"}, {"key": "hoursWatched", "label": "Est. hours watched", "value": 76849.82, "deltaPct": 10.279699, "detail": "Estimated hours watched on YouTube"}, {"key": "avgViewDuration", "label": "Avg view duration", "value": "26m 14s", "detail": "Average watch time per YouTube view"}, {"key": "estimatedAdRevenue", "label": "Est. YouTube ad revenue", "value": 2581.949, "deltaPct": -6.1462, "detail": "Estimated YouTube ad revenue (NOT sales, NOT in-app purchases)"}, {"key": "estimatedRevenue", "label": "Est. total YouTube revenue", "value": 2885.068, "deltaPct": -4.649839, "detail": "Estimated total YouTube revenue (ads + other), separate channel - NOT platform sales"}, {"key": "estimatedRevenueYtd", "label": "YTD YouTube revenue", "value": 87968.84, "detail": "Estimated total YouTube revenue Jan 1-Jul 10, 2026 (ads + other). YouTube-only estimated revenue — NOT ElectricNOW in-app / platform sales. Est. ad revenue: $79,108.12"}, {"key": "adImpressions", "label": "YouTube ad impressions", "value": 782494, "deltaPct": 4.625764, "detail": "YouTube ad impressions (NOT ElectricNOW in-app ads, NOT paid-acquisition impressions)"}, {"key": "monetizedPlaybacks", "label": "Monetized playbacks", "value": 134911, "deltaPct": 6.940668, "detail": "YouTube playbacks that served a monetized ad"}], "totals": {"views": 242276, "estimatedMinutesWatched": 5060903, "estimatedHoursWatched": 84348.38, "averageViewDuration": 1257, "averageViewDurationLabel": "20m 57s", "estimatedRevenue": 3579.544, "adImpressions": 909554, "monetizedPlaybacks": 177175, "ytdRevenue": 98785.811, "ytdViews": 6237007, "ytdHoursWatched": 2658323.03, "ytdAdImpressions": 27533044, "ytdMonetizedPlaybacks": 4833550}, "previousTotals": {"views": 267023, "estimatedMinutesWatched": 6132873, "estimatedHoursWatched": 102214.55, "averageViewDuration": 1380, "averageViewDurationLabel": "23m 00s", "estimatedRevenue": 4346.321, "estimatedAdRevenue": 3927.46, "adImpressions": 1113687, "monetizedPlaybacks": 201871, "subscribersGained": 674, "likes": 4288, "shares": 369, "ytdRevenue": 95206.266, "ytdAdRevenue": 85571.77, "ytdViews": 5995289, "ytdHoursWatched": 2574178.68}, "dailyTrend": [{"date": "2026-07-20", "views": 40381, "estimatedMinutesWatched": 842254, "estimatedHoursWatched": 14037.57, "estimatedRevenue": 581.758, "adImpressions": 151579}, {"date": "2026-07-21", "views": 39000, "estimatedMinutesWatched": 792596, "estimatedHoursWatched": 13209.93, "estimatedRevenue": 556.344, "adImpressions": 142155}, {"date": "2026-07-22", "views": 38669, "estimatedMinutesWatched": 832574, "estimatedHoursWatched": 13876.23, "estimatedRevenue": 556.42, "adImpressions": 147881}, {"date": "2026-07-23", "views": 44610, "estimatedMinutesWatched": 936578, "estimatedHoursWatched": 15609.63, "estimatedRevenue": 650.855, "adImpressions": 164562}, {"date": "2026-07-24", "views": 40089, "estimatedMinutesWatched": 827468, "estimatedHoursWatched": 13791.13, "estimatedRevenue": 606.264, "adImpressions": 149607}, {"date": "2026-07-25", "views": 39527, "estimatedMinutesWatched": 829429, "estimatedHoursWatched": 13823.82, "estimatedRevenue": 627.903, "adImpressions": 153770}], "topVideos": [{"videoId": "B_IiECt4atw", "title": "Everyone Wanted to Be on This Ship | The Ark | Full Episode | S01E01", "views": 34255, "estimatedMinutesWatched": 454237, "estimatedHoursWatched": 7570.62, "averageViewDuration": "13m 15s", "estimatedRevenue": 383.793, "adImpressions": 82374, "monetizedPlaybacks": 19956, "titleSource": "dashboard_title_map"}, {"videoId": "13025kKEUUY", "title": "Untitled video (YouTube ID 13025kKEUUY) — title lookup unavailable this refresh", "views": 15062, "estimatedMinutesWatched": 197260, "estimatedHoursWatched": 3287.67, "averageViewDuration": "13m 05s", "estimatedRevenue": 182.277, "adImpressions": 40462, "monetizedPlaybacks": 9689, "titleSource": "unresolved_id_labeled"}, {"videoId": "q5gQB_AGxlo", "title": "Leverage: Redemption | Season 1 Stream | 24/7 Entertainment", "views": 13712, "estimatedMinutesWatched": 326408, "estimatedHoursWatched": 5440.13, "averageViewDuration": "23m 48s", "estimatedRevenue": 92.55, "adImpressions": 21272, "monetizedPlaybacks": 8782, "titleSource": "dashboard_title_map"}, {"videoId": "b6kMpenpQGM", "title": "Flyboys | FULL MOVIE | James Franco | Jean Reno | Jennifer Decker | David Ellison", "views": 12375, "estimatedMinutesWatched": 532199, "estimatedHoursWatched": 8869.98, "averageViewDuration": "43m 00s", "estimatedRevenue": 328.291, "adImpressions": 93061, "monetizedPlaybacks": 8829, "titleSource": "dashboard_title_map"}, {"videoId": "G_X8m-NJV-U", "title": "Untitled video (YouTube ID G_X8m-NJV-U) — title lookup unavailable this refresh", "views": 8391, "estimatedMinutesWatched": 96508, "estimatedHoursWatched": 1608.47, "averageViewDuration": "11m 30s", "estimatedRevenue": 115.915, "adImpressions": 23748, "monetizedPlaybacks": 6566, "titleSource": "unresolved_id_labeled"}, {"videoId": "tKAdjrXYj8g", "title": "Blackway | FULL MOVIE | Anthony Hopkins | Ray Liotta | Julia Stiles | Alexander Ludwig", "views": 6954, "estimatedMinutesWatched": 112464, "estimatedHoursWatched": 1874.4, "averageViewDuration": "16m 10s", "estimatedRevenue": 75.713, "adImpressions": 17756, "monetizedPlaybacks": 2743, "titleSource": "dashboard_title_map"}, {"videoId": "6G2FEy9LGBw", "title": "Untitled video (YouTube ID 6G2FEy9LGBw) — title lookup unavailable this refresh", "views": 4916, "estimatedMinutesWatched": 59108, "estimatedHoursWatched": 985.13, "averageViewDuration": "12m 01s", "estimatedRevenue": 64.176, "adImpressions": 13431, "monetizedPlaybacks": 3889, "titleSource": "unresolved_id_labeled"}, {"videoId": "NgCIyD4T8JM", "title": "Untitled video (YouTube ID NgCIyD4T8JM) — title lookup unavailable this refresh", "views": 4127, "estimatedMinutesWatched": 54146, "estimatedHoursWatched": 902.43, "averageViewDuration": "13m 07s", "estimatedRevenue": 68.961, "adImpressions": 14056, "monetizedPlaybacks": 3136, "titleSource": "unresolved_id_labeled"}, {"videoId": "0T-yveMJPko", "title": "The Librarian: Quest for the Spear | FULL MOVIE | Noah Wyle, Kyle MacLachlan, Bob Newhart", "views": 2917, "estimatedMinutesWatched": 109724, "estimatedHoursWatched": 1828.73, "averageViewDuration": "37m 36s", "estimatedRevenue": 91.56, "adImpressions": 21203, "monetizedPlaybacks": 2292, "titleSource": "dashboard_title_map"}, {"videoId": "Hu7thpEf-js", "title": "The Librarians and the Crown of King Arthur | Season 1 Episode 1 | Official Episode", "views": 2733, "estimatedMinutesWatched": 55456, "estimatedHoursWatched": 924.27, "averageViewDuration": "20m 17s", "estimatedRevenue": 52.135, "adImpressions": 11906, "monetizedPlaybacks": 2056, "titleSource": "dashboard_title_map"}, {"videoId": "sjsGMHmm9Yk", "title": "The Librarian: Curse of the Judas Chalice | FULL MOVIE | Noah Wyle, Bruce Davison, Bob Newhart", "views": 2575, "estimatedMinutesWatched": 59411, "estimatedHoursWatched": 990.18, "averageViewDuration": "23m 04s", "estimatedRevenue": 40.646, "adImpressions": 10421, "monetizedPlaybacks": 1696, "titleSource": "dashboard_title_map"}, {"videoId": "YM6-fBB7yQY", "title": "Leverage | The Nigerian Job | Season 1 Episode 1 | Official Episode", "views": 2544, "estimatedMinutesWatched": 70174, "estimatedHoursWatched": 1169.57, "averageViewDuration": "27m 35s", "estimatedRevenue": 39.205, "adImpressions": 12391, "monetizedPlaybacks": 2028, "titleSource": "dashboard_title_map"}, {"videoId": "-mqcn5M0ktA", "title": "LBJ | FULL MOVIE | Woody Harrelson | Jennifer Jason Leigh | Richard Jenkins | Bill Pullman", "views": 2496, "estimatedMinutesWatched": 61664, "estimatedHoursWatched": 1027.73, "averageViewDuration": "24m 42s", "estimatedRevenue": 36.142, "adImpressions": 9733, "monetizedPlaybacks": 1982, "titleSource": "dashboard_title_map"}, {"videoId": "JeeMINxXYwQ", "title": "Untitled video (YouTube ID JeeMINxXYwQ) — title lookup unavailable this refresh", "views": 1774, "estimatedMinutesWatched": 38088, "estimatedHoursWatched": 634.8, "averageViewDuration": "21m 28s", "estimatedRevenue": 26.391, "adImpressions": 7217, "monetizedPlaybacks": 1421, "titleSource": "unresolved_id_labeled"}, {"videoId": "LMX2-vsoGSo", "title": "Leverage | The Homecoming Job | Season 1 Episode 2 | Official Episode", "views": 1625, "estimatedMinutesWatched": 44987, "estimatedHoursWatched": 749.78, "averageViewDuration": "27m 41s", "estimatedRevenue": 24.433, "adImpressions": 7344, "monetizedPlaybacks": 1242, "titleSource": "dashboard_title_map"}, {"videoId": "8QZixK70_dY", "title": "The Librarians and the Sword in the Stone | Season 1 Episode 2 | Official Episode", "views": 1553, "estimatedMinutesWatched": 34870, "estimatedHoursWatched": 581.17, "averageViewDuration": "22m 27s", "estimatedRevenue": 33.619, "adImpressions": 7752, "monetizedPlaybacks": 1249, "titleSource": "dashboard_title_map"}, {"videoId": "pbLonEcXhTs", "title": "Untitled video (YouTube ID pbLonEcXhTs) — title lookup unavailable this refresh", "views": 1541, "estimatedMinutesWatched": 506, "estimatedHoursWatched": 8.43, "averageViewDuration": "0m 31s", "estimatedRevenue": 0.423, "adImpressions": 0, "monetizedPlaybacks": 0, "titleSource": "unresolved_id_labeled"}, {"videoId": "4HYYYiExFSs", "title": "The Librarian: Return to King Solomon's Mines | FULL MOVIE | Noah Wyle, Rob Newhart, Gabrielle Anwar", "views": 1514, "estimatedMinutesWatched": 52603, "estimatedHoursWatched": 876.72, "averageViewDuration": "34m 44s", "estimatedRevenue": 34.418, "adImpressions": 8737, "monetizedPlaybacks": 1137, "titleSource": "dashboard_title_map"}, {"videoId": "6etBO8Z9IBA", "title": "Untitled video (YouTube ID 6etBO8Z9IBA) — title lookup unavailable this refresh", "views": 1411, "estimatedMinutesWatched": 29604, "estimatedHoursWatched": 493.4, "averageViewDuration": "20m 58s", "estimatedRevenue": 19.398, "adImpressions": 5384, "monetizedPlaybacks": 1435, "titleSource": "unresolved_id_labeled"}, {"videoId": "Q9XTdOji2wc", "title": "Untitled video (YouTube ID Q9XTdOji2wc) — title lookup unavailable this refresh", "views": 1315, "estimatedMinutesWatched": 31027, "estimatedHoursWatched": 517.12, "averageViewDuration": "23m 35s", "estimatedRevenue": 28.405, "adImpressions": 7042, "monetizedPlaybacks": 1088, "titleSource": "unresolved_id_labeled"}, {"videoId": "89J-9vWWPuk", "title": "Untitled video (YouTube ID 89J-9vWWPuk) — title lookup unavailable this refresh", "views": 1284, "estimatedMinutesWatched": 25727, "estimatedHoursWatched": 428.78, "averageViewDuration": "20m 02s", "estimatedRevenue": 16.698, "adImpressions": 4291, "monetizedPlaybacks": 736, "titleSource": "unresolved_id_labeled"}, {"videoId": "He3ScSePRYM", "title": "Untitled video (YouTube ID He3ScSePRYM) — title lookup unavailable this refresh", "views": 1283, "estimatedMinutesWatched": 32289, "estimatedHoursWatched": 538.15, "averageViewDuration": "25m 10s", "estimatedRevenue": 17.919, "adImpressions": 5469, "monetizedPlaybacks": 1058, "titleSource": "unresolved_id_labeled"}, {"videoId": "rVC2lrrZvwc", "title": "Untitled video (YouTube ID rVC2lrrZvwc) — title lookup unavailable this refresh", "views": 1250, "estimatedMinutesWatched": 25083, "estimatedHoursWatched": 418.05, "averageViewDuration": "20m 04s", "estimatedRevenue": 21.92, "adImpressions": 5278, "monetizedPlaybacks": 905, "titleSource": "unresolved_id_labeled"}, {"videoId": "V21Q6QjV0Hc", "title": "Untitled video (YouTube ID V21Q6QjV0Hc) — title lookup unavailable this refresh", "views": 1186, "estimatedMinutesWatched": 28319, "estimatedHoursWatched": 471.98, "averageViewDuration": "23m 52s", "estimatedRevenue": 19.995, "adImpressions": 5280, "monetizedPlaybacks": 1030, "titleSource": "unresolved_id_labeled"}, {"videoId": "gJtM5e4S5sU", "title": "Untitled video (YouTube ID gJtM5e4S5sU) — title lookup unavailable this refresh", "views": 1177, "estimatedMinutesWatched": 27779, "estimatedHoursWatched": 462.98, "averageViewDuration": "23m 36s", "estimatedRevenue": 16.034, "adImpressions": 4886, "monetizedPlaybacks": 976, "titleSource": "unresolved_id_labeled"}], "trafficSources": [{"source": "RELATED_VIDEO", "label": "Related videos", "views": 64768, "viewSharePct": 48.0, "estimatedHoursWatched": 35617.57, "averageViewDuration": "32m 59s"}, {"source": "SUBSCRIBER", "label": "Subscriber feed", "views": 32269, "viewSharePct": 23.9, "estimatedHoursWatched": 9232.07, "averageViewDuration": "17m 11s"}, {"source": "PLAYLIST", "label": "Playlists", "views": 16912, "viewSharePct": 12.5, "estimatedHoursWatched": 7277.72, "averageViewDuration": "25m 49s"}, {"source": "NO_LINK_OTHER", "label": "Direct / unknown", "views": 8275, "viewSharePct": 6.1, "estimatedHoursWatched": 4185.85, "averageViewDuration": "30m 21s"}, {"source": "YT_SEARCH", "label": "YouTube search", "views": 6263, "viewSharePct": 4.6, "estimatedHoursWatched": 2114.37, "averageViewDuration": "20m 18s"}, {"source": "YT_OTHER_PAGE", "label": "Other YouTube pages", "views": 3539, "viewSharePct": 2.6, "estimatedHoursWatched": 1273.38, "averageViewDuration": "21m 35s"}, {"source": "EXT_URL", "label": "External URLs", "views": 1265, "viewSharePct": 0.9, "estimatedHoursWatched": 297.37, "averageViewDuration": "14m 06s"}, {"source": "YT_CHANNEL", "label": "Channel pages", "views": 1140, "viewSharePct": 0.8, "estimatedHoursWatched": 258.37, "averageViewDuration": "13m 40s"}, {"source": "END_SCREEN", "label": "End screens", "views": 284, "viewSharePct": 0.2, "estimatedHoursWatched": 112.67, "averageViewDuration": "23m 48s"}, {"source": "NOTIFICATION", "label": "Notifications", "views": 79, "viewSharePct": 0.1, "estimatedHoursWatched": 4.37, "averageViewDuration": "3m 19s"}], "deviceSplit": [{"device": "TV", "label": "TV", "views": 73954, "viewSharePct": 54.9, "estimatedHoursWatched": 38854.07, "averageViewDuration": "31m 32s"}, {"device": "MOBILE", "label": "Mobile", "views": 30888, "viewSharePct": 22.9, "estimatedHoursWatched": 10274.63, "averageViewDuration": "19m 59s"}, {"device": "DESKTOP", "label": "Desktop", "views": 22645, "viewSharePct": 16.8, "estimatedHoursWatched": 8545.1, "averageViewDuration": "22m 39s"}, {"device": "TABLET", "label": "Tablet", "views": 7316, "viewSharePct": 5.4, "estimatedHoursWatched": 2692.2, "averageViewDuration": "22m 06s"}], "distinctionNote": "This is YouTube-only performance. YouTube ad impressions and estimated YouTube ad revenue are distinct from ElectricNOW in-app ad impressions and from Google/Meta paid-acquisition impressions. YouTube has no purchases and is NOT included in Visible Platform Sales.", "plainEnglish": "YouTube had a strong week separate from the ElectricNOW app: 242,276 views, 84,348 hours watched, and $3,579.54 estimated revenue for Jul 20-Jul 26. YTD estimated YouTube revenue is $98,785.81. \"Everyone Wanted to Be on This Ship\" (The Ark) led the week by views; Flyboys led by watch time.", "dataFreshnessNote": "YouTube Analytics connector pull completed Jul 27, 2026 for Jul 20-Jul 26, 2026.", "dataLagNote": "YouTube data can lag by 1-3 days; this pull returned complete weekly and YTD totals for Jul 20-Jul 26.", "partialUpdate": {"period": "Jul 6-Jul 9, 2026", "days": 4, "views": 59961, "estimatedMinutesWatched": 1447274, "estimatedHoursWatched": 24121.23, "averageViewDuration": "24m 09s", "estimatedRevenue": 855.873, "estimatedAdRevenue": 764.481, "adImpressions": 227488, "monetizedPlaybacks": 44808, "note": "Partial current week (Jul 6-9, 2026, 4 days) from the YouTube Analytics connector. The complete-week comparison above remains Jun 29-Jul 5 vs Jun 22-28. YouTube daily rows lag a few days, so these partial totals will settle upward. NOT platform sales - YouTube ad revenue is a separate channel."}, "yearToDateRevenue": {"period": "Jan 1-Jul 10, 2026", "source": "YouTube Analytics connector, ElectricNOW channel", "sourceFile": "cron_tracking/0b0f51ad/youtube_ytd_20260711/youtube_ytd_revenue_20260101_20260710.json", "estimatedRevenue": 87968.835, "estimatedAdRevenue": 79108.115, "views": 5543311, "estimatedMinutesWatched": 144220281, "averageViewDurationSeconds": 1567, "adImpressions": 24756572, "monetizedPlaybacks": 4315022, "isPlatformSales": false, "note": "YouTube-only estimated revenue; NOT ElectricNOW in-app/platform sales; NOT in Visible Platform Sales."}}, "appTrendNote": "This trend charts total app sessions in green (a reliable daily activity signal) alongside daily active users in blue for the complete week ending Sun Jul 12, 2026. Traffic eased modestly this week - sessions 9,971 (about -3.4% vs Jun 29-Jul 5) and week-unique active users an estimated ~3,800 - while the engaged-session rate stayed healthy at 78.2%. Time-on-platform and event-level detail were not in this daily-only GA4 pull, so those scorecards are held at the last fully-instrumented week (Jun 29-Jul 5) and marked stale.", "ytdTrend": [{"date": "Apr 13", "rawDate": "20260413", "activeUsers": 8739, "sessions": 13421}, {"date": "May 25", "rawDate": "20260525", "activeUsers": 7826, "sessions": 14470}, {"date": "Jun 1", "rawDate": "20260601", "activeUsers": 7608, "sessions": 13911}, {"date": "Jun 8", "rawDate": "20260608", "activeUsers": 7282, "sessions": 13850}, {"date": "Jun 15", "rawDate": "20260615", "activeUsers": 5871, "sessions": 11817}, {"date": "Jun 22", "rawDate": "20260622", "activeUsers": 5921, "sessions": 12379}, {"date": "Jun 29", "rawDate": "20260629", "activeUsers": 4158, "sessions": 10320}, {"date": "Jul 6", "rawDate": "20260706", "activeUsers": 3800, "sessions": 9971}, {"date": "Jul 13", "rawDate": "20260713", "activeUsers": 3498, "sessions": 9730}, {"date": "Jul 20", "rawDate": "20260720", "activeUsers": 3540, "sessions": 10102}], "ytdTrendNote": "Weekly GA4 totals from property 497892271. Latest point is Jul 20-Jul 26, 2026: active users up slightly, sessions up, but engagement rate softened versus the prior week.", "eventCardsNote": "Fresh GA4 event breakdown for Jul 20-Jul 26, 2026. Paid-campaign impressions remain separate from ElectricNOW in-app ad impression events.", "usGeography": {"title": "Where app users are in the U.S.", "eyebrow": "GA4 geography", "period": "Jul 20-Jul 26, 2026", "source": "Internal GA4 pull, property 497892271 (region dimension; country not separately confirmed in this pull, treated as U.S. per existing convention)", "freshness": "Fresh pull on Jul 27, 2026", "property": "properties/497892271", "usTotals": {"activeUsers": 3755, "sessions": 10067, "engagedSessions": 7546, "totalEngagementHours": 5760.51}, "states": [{"state": "California", "activeUsers": 301, "sessions": 753, "engagedSessions": 563, "totalEngagementHours": 599.53, "sharePct": 8.02, "timeZoneGroup": "Pacific", "x": 12.0, "y": 34.0, "stateCode": "CA"}, {"state": "Texas", "activeUsers": 270, "sessions": 692, "engagedSessions": 523, "totalEngagementHours": 370.3, "sharePct": 7.19, "timeZoneGroup": "Central/Mountain", "x": 42.0, "y": 48.0, "stateCode": "TX"}, {"state": "Florida", "activeUsers": 233, "sessions": 702, "engagedSessions": 517, "totalEngagementHours": 331.0, "sharePct": 6.21, "timeZoneGroup": "East Coast", "x": 70.0, "y": 58.0, "stateCode": "FL"}, {"state": "New York", "activeUsers": 201, "sessions": 480, "engagedSessions": 343, "totalEngagementHours": 203.75, "sharePct": 5.35, "timeZoneGroup": "East Coast", "x": 79.0, "y": 16.0, "stateCode": "NY"}, {"state": "North Carolina", "activeUsers": 174, "sessions": 473, "engagedSessions": 357, "totalEngagementHours": 271.61, "sharePct": 4.63, "timeZoneGroup": "East Coast", "x": 73.0, "y": 39.0, "stateCode": "NC"}, {"state": "Pennsylvania", "activeUsers": 165, "sessions": 435, "engagedSessions": 328, "totalEngagementHours": 232.52, "sharePct": 4.39, "timeZoneGroup": "East Coast", "x": 76.0, "y": 23.0, "stateCode": "PA"}, {"state": "Ohio", "activeUsers": 151, "sessions": 503, "engagedSessions": 402, "totalEngagementHours": 339.13, "sharePct": 4.02, "timeZoneGroup": "East Coast", "x": 65.0, "y": 25.0, "stateCode": "OH"}, {"state": "Georgia", "activeUsers": 150, "sessions": 445, "engagedSessions": 327, "totalEngagementHours": 208.69, "sharePct": 3.99, "timeZoneGroup": "East Coast", "x": 65.0, "y": 46.0, "stateCode": "GA"}, {"state": "Illinois", "activeUsers": 136, "sessions": 348, "engagedSessions": 284, "totalEngagementHours": 143.67, "sharePct": 3.62, "timeZoneGroup": "Central/Mountain", "x": 58.0, "y": 28.0, "stateCode": "IL"}, {"state": "Michigan", "activeUsers": 133, "sessions": 364, "engagedSessions": 293, "totalEngagementHours": 148.94, "sharePct": 3.54, "timeZoneGroup": "East Coast", "x": 62.0, "y": 18.0, "stateCode": "MI"}, {"state": "Tennessee", "activeUsers": 116, "sessions": 250, "engagedSessions": 183, "totalEngagementHours": 88.18, "sharePct": 3.09, "timeZoneGroup": "Central/Mountain", "x": 62.0, "y": 39.0, "stateCode": "TN"}, {"state": "Indiana", "activeUsers": 94, "sessions": 248, "engagedSessions": 165, "totalEngagementHours": 141.97, "sharePct": 2.5, "timeZoneGroup": "Other/unknown", "x": 61.0, "y": 27.0, "stateCode": "IN"}, {"state": "Virginia", "activeUsers": 94, "sessions": 272, "engagedSessions": 196, "totalEngagementHours": 164.6, "sharePct": 2.5, "timeZoneGroup": "East Coast", "x": 75.0, "y": 32.0, "stateCode": "VA"}, {"state": "Arizona", "activeUsers": 90, "sessions": 241, "engagedSessions": 186, "totalEngagementHours": 125.61, "sharePct": 2.4, "timeZoneGroup": "Central/Mountain", "x": 24.0, "y": 42.0, "stateCode": "AZ"}, {"state": "Minnesota", "activeUsers": 84, "sessions": 311, "engagedSessions": 254, "totalEngagementHours": 326.23, "sharePct": 2.24, "timeZoneGroup": "Central/Mountain", "x": 51.0, "y": 14.0, "stateCode": "MN"}, {"state": "Alabama", "activeUsers": 82, "sessions": 211, "engagedSessions": 155, "totalEngagementHours": 100.69, "sharePct": 2.18, "timeZoneGroup": "Other/unknown", "x": 61.0, "y": 46.0, "stateCode": "AL"}, {"state": "Missouri", "activeUsers": 74, "sessions": 206, "engagedSessions": 136, "totalEngagementHours": 80.06, "sharePct": 1.97, "timeZoneGroup": "Other/unknown", "x": 54.0, "y": 32.0, "stateCode": "MO"}, {"state": "New Jersey", "activeUsers": 70, "sessions": 237, "engagedSessions": 194, "totalEngagementHours": 210.91, "sharePct": 1.86, "timeZoneGroup": "Other/unknown", "x": 80.0, "y": 24.0, "stateCode": "NJ"}, {"state": "Oklahoma", "activeUsers": 70, "sessions": 216, "engagedSessions": 166, "totalEngagementHours": 118.94, "sharePct": 1.86, "timeZoneGroup": "Other/unknown", "x": 46.0, "y": 40.0, "stateCode": "OK"}, {"state": "Oregon", "activeUsers": 68, "sessions": 133, "engagedSessions": 82, "totalEngagementHours": 73.83, "sharePct": 1.81, "timeZoneGroup": "Pacific", "x": 14.0, "y": 15.0, "stateCode": "OR"}, {"state": "Washington", "activeUsers": 68, "sessions": 134, "engagedSessions": 94, "totalEngagementHours": 30.46, "sharePct": 1.81, "timeZoneGroup": "Pacific", "x": 15.0, "y": 6.0, "stateCode": "WA"}, {"state": "Wisconsin", "activeUsers": 62, "sessions": 192, "engagedSessions": 128, "totalEngagementHours": 116.03, "sharePct": 1.65, "timeZoneGroup": "Other/unknown", "x": 55.0, "y": 16.0, "stateCode": "WI"}, {"state": "Kentucky", "activeUsers": 61, "sessions": 130, "engagedSessions": 93, "totalEngagementHours": 42.48, "sharePct": 1.62, "timeZoneGroup": "Other/unknown", "x": 64.0, "y": 33.0, "stateCode": "KY"}, {"state": "Massachusetts", "activeUsers": 60, "sessions": 144, "engagedSessions": 104, "totalEngagementHours": 52.02, "sharePct": 1.6, "timeZoneGroup": "East Coast", "x": 84.0, "y": 18.0, "stateCode": "MA"}, {"state": "Arkansas", "activeUsers": 58, "sessions": 174, "engagedSessions": 136, "totalEngagementHours": 94.0, "sharePct": 1.54, "timeZoneGroup": "Other/unknown", "x": 56.0, "y": 42.0, "stateCode": "AR"}, {"state": "Colorado", "activeUsers": 56, "sessions": 169, "engagedSessions": 142, "totalEngagementHours": 113.79, "sharePct": 1.49, "timeZoneGroup": "Central/Mountain", "x": 34.0, "y": 32.0, "stateCode": "CO"}, {"state": "South Carolina", "activeUsers": 53, "sessions": 169, "engagedSessions": 141, "totalEngagementHours": 78.05, "sharePct": 1.41, "timeZoneGroup": "Other/unknown", "x": 70.0, "y": 43.0, "stateCode": "SC"}, {"state": "Maryland", "activeUsers": 50, "sessions": 103, "engagedSessions": 75, "totalEngagementHours": 52.81, "sharePct": 1.33, "timeZoneGroup": "Other/unknown", "x": 79.0, "y": 28.0, "stateCode": "MD"}, {"state": "Connecticut", "activeUsers": 42, "sessions": 112, "engagedSessions": 93, "totalEngagementHours": 69.04, "sharePct": 1.12, "timeZoneGroup": "Other/unknown", "x": 83.0, "y": 20.0, "stateCode": "CT"}, {"state": "Louisiana", "activeUsers": 42, "sessions": 107, "engagedSessions": 74, "totalEngagementHours": 204.13, "sharePct": 1.12, "timeZoneGroup": "Other/unknown", "x": 56.0, "y": 50.0, "stateCode": "LA"}, {"state": "Iowa", "activeUsers": 38, "sessions": 116, "engagedSessions": 74, "totalEngagementHours": 81.67, "sharePct": 1.01, "timeZoneGroup": "Other/unknown", "x": 53.0, "y": 24.0, "stateCode": "IA"}, {"state": "Nevada", "activeUsers": 38, "sessions": 106, "engagedSessions": 82, "totalEngagementHours": 75.6, "sharePct": 1.01, "timeZoneGroup": "Pacific", "x": 17.0, "y": 28.0, "stateCode": "NV"}, {"state": "Kansas", "activeUsers": 37, "sessions": 91, "engagedSessions": 62, "totalEngagementHours": 43.13, "sharePct": 0.99, "timeZoneGroup": "Other/unknown", "x": 45.0, "y": 32.0, "stateCode": "KS"}, {"state": "Mississippi", "activeUsers": 30, "sessions": 96, "engagedSessions": 72, "totalEngagementHours": 45.29, "sharePct": 0.8, "timeZoneGroup": "Other/unknown", "x": 59.0, "y": 46.0, "stateCode": "MS"}, {"state": "West Virginia", "activeUsers": 27, "sessions": 85, "engagedSessions": 61, "totalEngagementHours": 99.92, "sharePct": 0.72, "timeZoneGroup": "Other/unknown", "x": 72.0, "y": 30.0, "stateCode": "WV"}, {"state": "Idaho", "activeUsers": 25, "sessions": 85, "engagedSessions": 70, "totalEngagementHours": 34.19, "sharePct": 0.67, "timeZoneGroup": "Central/Mountain", "x": 22.0, "y": 16.0, "stateCode": "ID"}, {"state": "Nebraska", "activeUsers": 25, "sessions": 46, "engagedSessions": 39, "totalEngagementHours": 25.9, "sharePct": 0.67, "timeZoneGroup": "Other/unknown", "x": 45.0, "y": 24.0, "stateCode": "NE"}, {"state": "Utah", "activeUsers": 25, "sessions": 62, "engagedSessions": 47, "totalEngagementHours": 27.59, "sharePct": 0.67, "timeZoneGroup": "Central/Mountain", "x": 23.0, "y": 28.0, "stateCode": "UT"}, {"state": "Maine", "activeUsers": 23, "sessions": 70, "engagedSessions": 58, "totalEngagementHours": 36.4, "sharePct": 0.61, "timeZoneGroup": "Other/unknown", "x": 85.0, "y": 8.0, "stateCode": "ME"}, {"state": "New Mexico", "activeUsers": 23, "sessions": 76, "engagedSessions": 48, "totalEngagementHours": 31.21, "sharePct": 0.61, "timeZoneGroup": "Central/Mountain", "x": 32.0, "y": 42.0, "stateCode": "NM"}, {"state": "New Hampshire", "activeUsers": 19, "sessions": 39, "engagedSessions": 30, "totalEngagementHours": 35.38, "sharePct": 0.51, "timeZoneGroup": "Other/unknown", "x": 84.0, "y": 15.0, "stateCode": "NH"}, {"state": "Rhode Island", "activeUsers": 15, "sessions": 28, "engagedSessions": 25, "totalEngagementHours": 16.1, "sharePct": 0.4, "timeZoneGroup": "Other/unknown", "x": 85.0, "y": 19.0, "stateCode": "RI"}, {"state": "Montana", "activeUsers": 12, "sessions": 37, "engagedSessions": 26, "totalEngagementHours": 15.65, "sharePct": 0.32, "timeZoneGroup": "Central/Mountain", "x": 29.0, "y": 10.0, "stateCode": "MT"}, {"state": "South Dakota", "activeUsers": 12, "sessions": 27, "engagedSessions": 14, "totalEngagementHours": 17.82, "sharePct": 0.32, "timeZoneGroup": "Other/unknown", "x": 44.0, "y": 17.0, "stateCode": "SD"}, {"state": "District of Columbia", "activeUsers": 11, "sessions": 21, "engagedSessions": 17, "totalEngagementHours": 10.51, "sharePct": 0.29, "timeZoneGroup": "Other/unknown", "x": 79.0, "y": 29.0, "stateCode": "DC"}, {"state": "Alaska", "activeUsers": 9, "sessions": 16, "engagedSessions": 13, "totalEngagementHours": 7.64, "sharePct": 0.24, "timeZoneGroup": "Pacific", "x": 7.0, "y": 56.0, "stateCode": "AK"}, {"state": "Vermont", "activeUsers": 9, "sessions": 12, "engagedSessions": 8, "totalEngagementHours": 0.29, "sharePct": 0.24, "timeZoneGroup": "Other/unknown", "x": 82.0, "y": 13.0, "stateCode": "VT"}, {"state": "Hawaii", "activeUsers": 8, "sessions": 8, "engagedSessions": 7, "totalEngagementHours": 6.48, "sharePct": 0.21, "timeZoneGroup": "Pacific", "x": 18.0, "y": 56.0, "stateCode": "HI"}, {"state": "North Dakota", "activeUsers": 8, "sessions": 11, "engagedSessions": 8, "totalEngagementHours": 7.23, "sharePct": 0.21, "timeZoneGroup": "Other/unknown", "x": 44.0, "y": 10.0, "stateCode": "ND"}, {"state": "Delaware", "activeUsers": 7, "sessions": 16, "engagedSessions": 14, "totalEngagementHours": 2.6, "sharePct": 0.19, "timeZoneGroup": "Other/unknown", "x": 80.0, "y": 27.0, "stateCode": "DE"}], "topCities": [{"city": "New York", "region": "New York", "activeUsers": 101, "newUsers": 19, "sessions": 178, "engagedSessions": 134, "screenPageViews": 436, "eventCount": 7614, "engagementRate": 75.3}, {"city": "Los Angeles", "region": "California", "activeUsers": 78, "newUsers": 12, "sessions": 187, "engagedSessions": 147, "screenPageViews": 404, "eventCount": 38505, "engagementRate": 78.6}, {"city": "Chicago", "region": "Illinois", "activeUsers": 73, "newUsers": 21, "sessions": 186, "engagedSessions": 156, "screenPageViews": 371, "eventCount": 8708, "engagementRate": 83.9}, {"city": "Houston", "region": "Texas", "activeUsers": 58, "newUsers": 18, "sessions": 141, "engagedSessions": 117, "screenPageViews": 219, "eventCount": 13913, "engagementRate": 83.0}, {"city": "Philadelphia", "region": "Pennsylvania", "activeUsers": 54, "newUsers": 9, "sessions": 147, "engagedSessions": 116, "screenPageViews": 345, "eventCount": 14961, "engagementRate": 78.9}, {"city": "Atlanta", "region": "Georgia", "activeUsers": 43, "newUsers": 11, "sessions": 81, "engagedSessions": 56, "screenPageViews": 120, "eventCount": 3080, "engagementRate": 69.1}, {"city": "Las Vegas Valley", "region": "Nevada", "activeUsers": 36, "newUsers": 9, "sessions": 79, "engagedSessions": 66, "screenPageViews": 219, "eventCount": 16585, "engagementRate": 83.5}, {"city": "Phoenix", "region": "Arizona", "activeUsers": 35, "newUsers": 8, "sessions": 69, "engagedSessions": 54, "screenPageViews": 279, "eventCount": 6083, "engagementRate": 78.3}, {"city": "Dallas", "region": "Texas", "activeUsers": 35, "newUsers": 15, "sessions": 65, "engagedSessions": 48, "screenPageViews": 184, "eventCount": 2154, "engagementRate": 73.8}, {"city": "Indianapolis", "region": "Indiana", "activeUsers": 32, "newUsers": 9, "sessions": 49, "engagedSessions": 38, "screenPageViews": 59, "eventCount": 1844, "engagementRate": 77.6}, {"city": "Seattle", "region": "Washington", "activeUsers": 32, "newUsers": 12, "sessions": 74, "engagedSessions": 63, "screenPageViews": 206, "eventCount": 10489, "engagementRate": 85.1}, {"city": "Denver", "region": "Colorado", "activeUsers": 31, "newUsers": 10, "sessions": 63, "engagedSessions": 48, "screenPageViews": 128, "eventCount": 4481, "engagementRate": 76.2}, {"city": "Austin", "region": "Texas", "activeUsers": 31, "newUsers": 7, "sessions": 70, "engagedSessions": 53, "screenPageViews": 78, "eventCount": 3062, "engagementRate": 75.7}, {"city": "Detroit", "region": "Michigan", "activeUsers": 30, "newUsers": 11, "sessions": 42, "engagedSessions": 31, "screenPageViews": 140, "eventCount": 4192, "engagementRate": 73.8}, {"city": "Boston", "region": "Massachusetts", "activeUsers": 28, "newUsers": 5, "sessions": 46, "engagedSessions": 38, "screenPageViews": 46, "eventCount": 2111, "engagementRate": 82.6}], "sumStateActiveUsers": 3755, "timeZoneUsage": [{"group": "Pacific", "activeUsers": 492, "sharePct": 13.1}, {"group": "Central/Mountain", "activeUsers": 843, "sharePct": 22.45}, {"group": "East Coast", "activeUsers": 1361, "sharePct": 36.25}, {"group": "Other/unknown", "activeUsers": 1059, "sharePct": 28.2}], "summaryLine": "Top U.S. states this week: California, Texas, Florida, New York, North Carolina. Time-zone mix: Pacific 13.1%, Central/Mountain 22.5%, East Coast 36.2%.", "caveat": "GA4 geography is approximate and based on active users with state-level signals; the Jul 27 pull returned a region-only dimension without a separate country filter, consistent with the established dashboard convention of treating this feed as U.S. state-level.", "methodologyNote": "Mapped U.S. regions into Pacific, Central/Mountain, East Coast, and other/unknown groups for ad-targeting direction. City-level breakdown unchanged (no fresh city pull this refresh). Map bubble positions are fixed approximate state locations for display purposes only; they do not affect underlying GA4 figures."}, "auditNotes": [{"date": "2026-07-24", "section": "Viewing Behavior", "note": "Replaced stale held unique-user/live-segment scorecards with fresh GA4 event-count cards for Jul 13-Jul 19, 2026. Old held cards were internally inconsistent because the dashboard had fresh event data but stale card flags from an earlier partial pull."}], "tvodTitleRevenue": {"title": "TVOD Title Revenue & Registered Users", "eyebrow": "Michael Johnson email — Transactions Per Title and Registered Users by Date", "source": "Michael Johnson email: Transactions Per Title and Registered Users by Date", "emailDate": "2026-07-27T18:52:25Z", "periodStart": "2026-04-01", "periodNote": "Cumulative TVOD (transactional video on demand) transactions since launch (period start Apr 1, 2026), not limited to the Jul 20-Jul 26 GA4 week. Distinct from Stripe/Roku/Apple visible-sales tracking above.", "extractedAt": "2026-07-27T13:01:00-07:00", "registeredUsers": {"total": 7914, "active": 7814}, "transactions": {"totalRows": 90, "paidTransactions": 90}, "netRevenue": {"tvodSalesEmailTotalNet": 1339.15, "csvPaidGrossTotal": 1339.15, "csvPaidNetTotal": 1339.15}, "topTitlesByNet": [{"title": "The Librarians: The Next Chapter", "transactions": 20, "gross": 299.8, "net": 299.8, "channels": {"web": 8, "roku": 5, "apple": 4, "amazon_fire": 3}, "first_date": "2026-04-16", "last_date": "2026-06-27"}, {"title": "Leverage: Redemption - Season 3", "transactions": 19, "gross": 284.81, "net": 284.81, "channels": {"apple": 10, "web": 4, "roku": 3, "vizio": 1, "amazon_fire": 1}, "first_date": "2026-04-11", "last_date": "2026-06-28"}, {"title": "The Ark", "transactions": 3, "gross": 164.97, "net": 164.97, "channels": {"roku": 2, "vizio": 1}, "first_date": "2026-05-06", "last_date": "2026-06-30"}, {"title": "The Draw", "transactions": 5, "gross": 74.95, "net": 74.95, "channels": {"vizio": 2, "amazon_fire": 1, "web": 1, "roku": 1}, "first_date": "2026-04-13", "last_date": "2026-05-07"}, {"title": "Leverage: Redemption", "transactions": 2, "gross": 59.98, "net": 59.98, "channels": {"apple": 2}, "first_date": "2026-04-16", "last_date": "2026-05-18"}, {"title": "One Big Happy Family", "transactions": 8, "gross": 59.96, "net": 59.96, "channels": {"web": 4, "roku": 1, "vizio": 1, "apple": 1, "amazon_fire": 1}, "first_date": "2026-04-02", "last_date": "2026-06-27"}, {"title": "Somewhere in Montana", "transactions": 4, "gross": 59.96, "net": 59.96, "channels": {"amazon_fire": 2, "android": 1, "roku": 1}, "first_date": "2026-05-20", "last_date": "2026-06-16"}, {"title": "The Librarians", "transactions": 1, "gross": 54.99, "net": 54.99, "channels": {"roku": 1}, "first_date": "2026-04-22", "last_date": "2026-04-22"}, {"title": "The Messenger", "transactions": 2, "gross": 39.96, "net": 39.96, "channels": {"apple": 1, "vizio": 1}, "first_date": "2026-05-06", "last_date": "2026-06-24"}, {"title": "Almost Paradise", "transactions": 3, "gross": 29.99, "net": 29.99, "channels": {"web": 2, "vizio": 1}, "first_date": "2026-04-01", "last_date": "2026-05-06"}, {"title": "The Librarians: The Next Chapter1", "transactions": 4, "gross": 29.98, "net": 29.98, "channels": {"web": 3, "roku": 1}, "first_date": "2026-04-03", "last_date": "2026-04-16"}, {"title": "The Bunker", "transactions": 2, "gross": 29.98, "net": 29.98, "channels": {"vizio": 2}, "first_date": "2026-05-06", "last_date": "2026-05-07"}, {"title": "Flyboys", "transactions": 2, "gross": 19.98, "net": 19.98, "channels": {"vizio": 2}, "first_date": "2026-05-06", "last_date": "2026-05-07"}, {"title": "The Poly Couple", "transactions": 2, "gross": 19.98, "net": 19.98, "channels": {"apple": 1, "web": 1}, "first_date": "2026-04-17", "last_date": "2026-04-21"}, {"title": "Blank Slate", "transactions": 1, "gross": 19.98, "net": 19.98, "channels": {"roku": 1}, "first_date": "2026-06-07", "last_date": "2026-06-07"}, {"title": "The Ark - Season 2", "transactions": 1, "gross": 19.98, "net": 19.98, "channels": {"roku": 1}, "first_date": "2026-05-16", "last_date": "2026-05-16"}, {"title": "The Ark - Season 1", "transactions": 1, "gross": 19.98, "net": 19.98, "channels": {"vizio": 1}, "first_date": "2026-05-07", "last_date": "2026-05-07"}, {"title": "Una Gran Familia Feliz", "transactions": 1, "gross": 14.99, "net": 14.99, "channels": {"web": 1}, "first_date": "2026-04-27", "last_date": "2026-04-27"}, {"title": "Blood on the Crown", "transactions": 1, "gross": 9.99, "net": 9.99, "channels": {"vizio": 1}, "first_date": "2026-05-06", "last_date": "2026-05-06"}, {"title": "Generation Z", "transactions": 1, "gross": 9.99, "net": 9.99, "channels": {"vizio": 1}, "first_date": "2026-05-06", "last_date": "2026-05-06"}, {"title": "The Librarian: Quest for the Spear", "transactions": 2, "gross": 5.98, "net": 5.98, "channels": {"roku": 2}, "first_date": "2026-05-12", "last_date": "2026-05-14"}, {"title": "Mythica: A Quest for Heroes", "transactions": 1, "gross": 2.99, "net": 2.99, "channels": {"apple": 1}, "first_date": "2026-06-30", "last_date": "2026-06-30"}, {"title": "The Librarian: Curse of the Judas Chalice", "transactions": 1, "gross": 2.99, "net": 2.99, "channels": {"roku": 1}, "first_date": "2026-05-13", "last_date": "2026-05-13"}, {"title": "The Librarian: Return to King Solomon's Mines", "transactions": 1, "gross": 2.99, "net": 2.99, "channels": {"roku": 1}, "first_date": "2026-05-12", "last_date": "2026-05-12"}, {"title": "The Outpost", "transactions": 2, "gross": 0.0, "net": 0.0, "channels": {"web": 2}, "first_date": "2026-04-03", "last_date": "2026-04-03"}], "channels": [{"channel": "roku", "transactions": 21, "gross": 396.77, "net": 396.77}, {"channel": "apple", "transactions": 20, "gross": 317.79, "net": 317.79}, {"channel": "vizio", "transactions": 14, "gross": 254.84, "net": 254.84}, {"channel": "web", "transactions": 26, "gross": 234.84, "net": 234.84}, {"channel": "amazon_fire", "transactions": 8, "gross": 119.92, "net": 119.92}, {"channel": "android", "transactions": 1, "gross": 14.99, "net": 14.99}], "note": "New this refresh (Jul 27, 2026): first-time integration of Michael Johnson's TVOD title-revenue and registered-user report. This is cumulative since Apr 1, 2026 and reflects title-level purchase transactions across Roku, Apple, Vizio, web, Amazon Fire, and Android — separate from the Stripe/Roku/Apple visible-sales figures tracked elsewhere on this dashboard, which use different source systems and time windows. Do not sum this section with salesSummary; they overlap in places (e.g. Roku, Apple) but are not reconciled to the same totals.", "sourceUrl": null}};
window.ELECTRICNOW_DASHBOARD_DATA = window.DASHBOARD_DATA;

</script>
<script>
// ---- Defensive live/FAST channel filter (reliability guardrail 2026-05-28) ----
// Strips known live/FAST/linear channel rows from on-demand top lists at
// render time, in case any data source ever ships them. The Live Channel on
// Roku and Live TV sections, which legitimately render channel labels, are
// not touched.
const LIVE_CHANNEL_SEED = ["DARK MATTER TV","Kung Fu Movies","spot on news","Horror Asylum","a-z Classic Flix","Box Cinema","ElectricNOW en Espanol","ElectricNOW en Español","ElectricNOW en Espa","Cartoon Classics","Grindhouse Gold","Daily Flash","ToonOvation","TooNovation","Stoner TV Network","Ghost Dimension","Fancy A Movie","Comercio TV","Play Ibiza","a-z Western Grit","SportsTVPlus","Urban Action Channel","Hollywood Classic Movies","Cowboy Classics","Celebrity Scene","Colorized.TV","Mor2CTV","4ACETV CLASSIC HITS","4ACETV","CinePast","The Health Channel","a-z Best Classic TV","The Family TV Channel","IndieBox","Rock Solid Wrestling TV","Wrestling Spotlight","DJ Central TV","POWERtube TV","MomCave","Fitness Rewind by Collage Video","MMA Futures","Beyond The Score","AMPD TV","AMusic Channel","Rockola Television","BayView Documentaries","Viajar TV","Mythica: The Darkspore","El Bumbun"];
const LIVE_CHANNEL_PREFIXES = ["electricnow en espa","electricnow en espan"];
const LIVE_CHANNEL_SUBSTRINGS = ["live tv","live channel","linear channel","fast channel"];
function _enLiveNorm(v){
  if (v == null) return '';
  let s = String(v);
  try { s = s.normalize('NFKD').replace(/[̀-ͯ]/g,''); } catch(e) {}
  return s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
}
const _LIVE_CHANNEL_NAMES = new Set(LIVE_CHANNEL_SEED.map(_enLiveNorm).filter(Boolean));
function _enIsLive(v){
  const n = _enLiveNorm(v);
  if (!n) return false;
  if (_LIVE_CHANNEL_NAMES.has(n)) return true;
  for (const p of LIVE_CHANNEL_PREFIXES){ if (p && (n === p || n.startsWith(p))) return true; }
  for (const sub of LIVE_CHANNEL_SUBSTRINGS){ if (n.indexOf(sub) >= 0) return true; }
  return false;
}
const _EN_FIELDS = ["program","title","group","channelTitle","channel_title","parent","parentLabel","label","show","collection","groupedTitle"];
function _enRowIsLive(row){
  if (!row || typeof row !== 'object') return false;
  for (const f of _EN_FIELDS){ if (f in row && _enIsLive(row[f])) return true; }
  if (Array.isArray(row.examples)){ for (const ex of row.examples){ if (_enIsLive(ex)) return true; } }
  return false;
}
function _enPurgeLiveFromOnDemand(d){
  if (!d || typeof d !== 'object') return d;
  const tv = d.titleViewership;
  if (!tv || typeof tv !== 'object') return d;
  for (const key of ['topPrograms','topVideoTitles','topChannelTitles']){
    const rows = tv[key];
    if (!Array.isArray(rows)) continue;
    const kept = [];
    for (const r of rows){ if (!_enRowIsLive(r)) kept.push(r); }
    kept.forEach((r,i)=>{ if (r && typeof r === 'object') r.rank = i+1; });
    tv[key] = kept;
  }
  return d;
}
// ---- end defensive filter ----

const ELECTRICNOW_ROOT = document.getElementById('electricnow-dashboard-embed') || document;
const $ = (selector) => ELECTRICNOW_ROOT.querySelector(selector);
let data = window.DASHBOARD_DATA || window.ELECTRICNOW_DASHBOARD_DATA;
_enPurgeLiveFromOnDemand(data);
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

// The launch-baseline comparison divides by the card's launchBaseline value.
// When that denominator is missing or zero the percentage is undefined, and a
// bare "new" badge is misleading for metrics that already existed at launch.
// Render an explicit "baseline unavailable" note instead, reserving the normal
// delta for cards that actually have a usable baseline.
function launchBaselineCompare(card) {
  const baseline = toFiniteNumber(card.launchBaseline);
  const delta = card.deltaVsLaunchPct;
  const hasDelta = delta !== null && delta !== undefined && !Number.isNaN(delta);
  if (hasDelta) {
    return { cls: deltaClass(delta), text: deltaText(card, delta) };
  }
  if (baseline === null || baseline === 0) {
    return { cls: 'baseline-unavailable', text: 'baseline unavailable' };
  }
  return { cls: '', text: 'not tracked at launch' };
}

// The vs-previous-7-days comparison needs a refreshed prior-period value. When
// the underlying source could not be refreshed this run (comparisonUnavailable)
// or the delta is missing, showing "0.0%" or "new" is misleading — the metric
// simply was not re-pulled. A held/stale metric carries the same value in both
// the current and prior slots, so its computed delta is a self-comparison, not a
// real week-over-week change. Render a neutral "Held" badge for held/stale cards
// and "comparison unavailable" otherwise, instead of a misleading numeric delta.
function previousWeekCompare(card) {
  const delta = card.deltaVsPreviousPct;
  const hasDelta = delta !== null && delta !== undefined && !Number.isNaN(delta);
  if (card.comparisonUnavailable || !hasDelta) {
    return { cls: 'baseline-unavailable', text: (card.stale || card.held) ? 'Held' : 'comparison unavailable' };
  }
  return { cls: deltaClass(delta), text: deltaText(card, delta) };
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
            <em class="delta ${launchBaselineCompare(card).cls}">${launchBaselineCompare(card).text}</em>
            <small>vs previous 7 days</small>
            <em class="delta ${previousWeekCompare(card).cls}">${previousWeekCompare(card).text}</em>
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
  // Green line plots total app sessions (reliable daily activity), not engagedSessions.
  // GA4's engaged-session classification wobbles on isolated days (e.g. Sun Jun 28 2026),
  // which renders as a false "engagement collapse" even when users/sessions/time held up.
  const maxValue = Math.max(...rows.map((d) => Math.max(Number(d.activeUsers || 0), Number(d.sessions || 0))), 1);
  const active = chartPoints(rows, 'activeUsers', width, height, pad, maxValue);
  const engaged = chartPoints(rows, 'sessions', width, height, pad, maxValue);
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
  const noteEl = $('#trend-note');
  if (noteEl) noteEl.textContent = data.appTrendNote || '';
  renderLineTrendChart('#traffic-chart', data.weeklyTrend || data.trend);
  renderLineTrendChart('#monthly-traffic-chart', data.monthlyTrend || data.trend);
  if (data.ytdTrend?.length) {
    renderLineTrendChart('#ytd-traffic-chart', data.ytdTrend);
    const ytdNoteEl = $('#ytd-trend-note');
    if (ytdNoteEl) ytdNoteEl.textContent = data.ytdTrendNote || '';
  }
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
  const appleDownloads = data.manualAppleDownloads;
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
    ${appleDownloads ? `<div class="sales-audit">
      <span>Apple App Store Connect downloads</span>
      <strong>${fmt.number(appleDownloads.downloads)} free iOS/watchOS/tvOS downloads</strong>
      <p>${escapeHtml(appleDownloads.period)} · daily average ${fmt.number(appleDownloads.dailyAverage)} · ${fmt.delta(appleDownloads.deltaPct)} vs the prior comparable period. Territory split: ${escapeHtml((appleDownloads.territories || []).map((row) => `${row.territory} ${fmt.number(row.downloads)}`).join(' · '))}. This is a manual Apple Connect snapshot, not paid sales and not a GA4 user count.</p>
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

function usageStat(label, value, detail = '', exactTitle = '') {
  // If callers already formatted the value (e.g. a minutes/percent string),
  // render it as-is. Only run fmt.number on raw numeric inputs so we never
  // double-format and accidentally produce "NaN".
  const display = typeof value === 'string' ? (value || NOT_AVAILABLE) : fmt.number(value);
  const titleAttr = exactTitle ? ` title="${escapeHtml(String(exactTitle))}"` : '';
  return `
    <article class="usage-stat">
      <span>${label}</span>
      <strong${titleAttr}>${display}</strong>
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
  const periodEl = $('#platform-mix-period');
  const noteEl = $('#platform-note');
  const target = $('#platform-mix');
  if (!target) return;

  if (Array.isArray(mix)) {
    const rows = mix
      .filter((row) => row && row.activeUsers)
      .map((row) => {
        const platform = row.platform || 'Unknown';
        const device = row.deviceCategory || 'device not set';
        const os = row.operatingSystem || 'OS not set';
        return {
          platform: `${platform} / ${device}`,
          category: os,
          activeUsers: row.activeUsers || 0,
          sessions: row.sessions || 0,
          engagementRate: row.engagementRate || 0,
          detail: `${fmt.number(row.sessions || 0)} sessions · ${fmt.percent(row.engagementRate || 0)} engagement rate`,
        };
      });
    const totalUsers = rows.reduce((sum, row) => sum + (row.activeUsers || 0), 0);
    const maxUsers = Math.max(...rows.map((row) => row.activeUsers || 0), 1);
    if (periodEl) periodEl.textContent = data.periods?.currentWeek?.range || 'Latest';
    if (noteEl) noteEl.textContent = 'GA4 platform/device rows. Rows are not deduped across platform/device combinations, so use this as a directional surface mix rather than a total audience count.';
    target.innerHTML = `
      <div class="platform-total">
        <span>GA4 active users grouped by platform/device</span>
        <strong>${fmt.number(totalUsers)}</strong>
        <em>platform-device records</em>
      </div>
      <div class="platform-share-list">
        ${rows
          .map(
            (row) => `
              <article class="platform-share-card">
                <header>
                  <div>
                    <strong>${escapeHtml(row.platform)}</strong>
                    <span>${escapeHtml(row.category)} · ${fmt.number(row.activeUsers)} active users</span>
                  </div>
                  <b>${fmt.number(row.activeUsers)}</b>
                </header>
                <div class="share-track" aria-hidden="true">
                  <div class="share-fill" style="width:${Math.max(5, ((row.activeUsers || 0) / maxUsers) * 100)}%"></div>
                </div>
                <p>${escapeHtml(row.detail)}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    `;
    return;
  }

  if (!mix || !Array.isArray(mix.groups)) {
    if (periodEl) periodEl.textContent = 'Latest';
    if (noteEl) noteEl.textContent = 'Platform mix data is unavailable for this refresh.';
    target.innerHTML = '<p class="empty-state">Platform mix data is unavailable for this refresh.</p>';
    return;
  }

  const max = Math.max(...mix.groups.filter((row) => row.tracked !== false).map((row) => row.sharePct || 0), 1);
  if (periodEl) periodEl.textContent = mix.period || 'Latest';
  if (noteEl) noteEl.textContent = mix.note || '';
  target.innerHTML = `
    <div class="platform-total">
      <span>${mix.metric || 'Audience'} grouped by stream/platform</span>
      <strong>${fmt.number(mix.totalViewers || 0)}</strong>
      <em>viewer-platform records</em>
    </div>
    <div class="platform-share-list">
      ${mix.groups
        .map(
          (row) => `
            <article class="platform-share-card ${row.tracked === false ? 'is-untracked' : ''}">
              <header>
                <div>
                  <strong>${escapeHtml(row.platform || 'Unknown')}</strong>
                  <span>${row.category ? `${escapeHtml(row.category)} · ` : ''}${row.tracked === false ? 'not separately tracked yet' : `${fmt.number(row.activeUsers || 0)} active users`}</span>
                </div>
                <b>${row.tracked === false ? 'TBD' : fmt.percent(row.sharePct || 0)}</b>
              </header>
              ${
                row.tracked === false
                  ? ''
                  : `<div class="share-track" aria-hidden="true">
                      <div class="share-fill" style="width:${Math.max(5, ((row.sharePct || 0) / max) * 100)}%"></div>
                    </div>`
              }
              <p>${escapeHtml(row.detail || '')}</p>
            </article>
          `,
        )
        .join('')}
    </div>
    <div class="coming-platforms">
      <span>Coming soon</span>
      ${(mix.comingSoon || []).map((item) => `<em>${escapeHtml(item)}</em>`).join('')}
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
    'On-demand videos only. Live-channel (FAST/linear) viewing is excluded from this list and reported separately under Live channel usage. Individual video titles are ranked by GA4 play events, regardless of collection. Collection/show is the best available parent label inferred from GA4 channel_title or grouped title labels; blanks mean GA4 did not provide a reliable parent collection for that video.';
  renderTable(
    '#top-videos-table',
    ['#', 'Collection / show', 'Individual video', 'Play events', 'Total viewers'],
    viewership.topVideoTitles || [],
    (row) => [
      `<strong>${row.rank}</strong>`,
      row.group ? `<strong>${escapeHtml(row.group)}</strong>` : '<span>Collection not tracked</span>',
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
    data.acquisition || [],
    (r) => [
      `<strong>${escapeHtml(r.sourceMedium || r.sessionSourceMedium || r.source || 'Unknown source')}</strong>`,
      fmt.number(r.activeUsers),
      fmt.number(r.sessions),
      fmt.percent(r.engagementRate),
    ],
  );
  renderContentActivity();
}

function contentRowLabel(row) {
  const rawPath = String(row.path ?? '').trim();
  const rawScreen = String(row.screen ?? '').trim();
  const hasPath = rawPath && rawPath !== '(not set)';
  const hasScreen = rawScreen && rawScreen !== '(not set)';
  if (hasScreen && !hasPath) return { label: rawScreen, context: 'App screen' };
  if (hasPath) {
    const context = hasScreen && rawScreen !== 'ElectricNOW' ? rawScreen : 'Web page';
    return { label: rawPath, context };
  }
  return { label: 'Unlabeled activity', context: 'No screen name or path sent to GA4' };
}

function renderContentActivity() {
  const readout = $('#content-readout');
  if (readout) {
    readout.innerHTML =
      'App activity is concentrated in app-lifecycle and video-playback screens: Splash, Intro, and On Demand draw the most users, ' +
      'while Live TV shows far higher events per user than any other screen — a sign of deep viewing sessions. ' +
      'Rows such as /landing, / (root), and /devices are web navigation or acquisition pages, not app platform audience.';
  }
  const note = $('#content-note');
  if (note) {
    note.textContent =
      'GA4 is receiving app screen names (Splash, Intro, On Demand, PDP, Live, Player) but often not a clean page path, ' +
      'so read this as a screen/activity ranking rather than a literal URL or page report. "Events" counts every tracked ' +
      'interaction on a screen and "Events / user" shows interaction depth. Rows marked "Unlabeled activity" arrived with ' +
      'no screen name or path attached to the GA4 event.';
  }
  renderTable(
    '#content-table',
    ['Screen / page', 'Users', 'Events', 'Events / user'],
    data.topPages,
    (r) => {
      const { label, context } = contentRowLabel(r);
      const users = toFiniteNumber(r.activeUsers) || 0;
      const events = toFiniteNumber(r.eventCount) || 0;
      const perUser = users > 0 ? Math.round(events / users) : null;
      return [
        `<strong>${escapeHtml(label)}</strong><br><span>${escapeHtml(context)}</span>`,
        fmt.number(r.activeUsers),
        fmt.number(r.eventCount),
        perUser === null ? NOT_AVAILABLE : fmt.number(perUser),
      ];
    },
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

function ensureMetaAdsSection() {
  let section = document.getElementById('meta-ads');
  if (section) return section;
  const googleAds = document.getElementById('google-ads');
  if (!googleAds) return null;
  const sideNav = $('.side-nav');
  if (sideNav && !sideNav.querySelector('a[href="#meta-ads"]')) {
    const gaLink = sideNav.querySelector('a[href="#google-ads"]');
    const link = document.createElement('a');
    link.href = '#meta-ads';
    link.setAttribute('data-testid', 'nav-meta-ads');
    link.textContent = 'Meta Ads';
    if (gaLink && gaLink.nextSibling) {
      sideNav.insertBefore(link, gaLink.nextSibling);
    } else {
      sideNav.appendChild(link);
    }
  }
  section = document.createElement('section');
  section.className = 'panel google-ads-panel';
  section.id = 'meta-ads';
  section.setAttribute('aria-labelledby', 'meta-ads-title');
  section.setAttribute('data-testid', 'section-meta-ads');
  section.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">Paid acquisition efficiency — Meta</p>
        <h2 id="meta-ads-title">Meta Ads — Paid App Campaigns</h2>
      </div>
      <span class="period-chip" id="meta-ads-period">Latest</span>
    </div>
    <p id="meta-ads-note" class="panel-note"></p>
    <div class="usage-card-grid google-ads-kpis" id="meta-ads-kpis" data-testid="meta-ads-kpis"></div>
    <div class="google-ads-split">
      <div><h3>By campaign</h3><div id="meta-ads-campaigns" class="google-ads-action-list" data-testid="meta-ads-campaigns"></div></div>
      <div><h3>By gender</h3><div id="meta-ads-gender" class="google-ads-action-list" data-testid="meta-ads-gender"></div></div>
    </div>
    <h3>By age</h3>
    <div id="meta-ads-age" class="google-ads-device-list" data-testid="meta-ads-age"></div>
    <p class="panel-note google-ads-context" id="meta-ads-interp"></p>
    <p class="panel-note google-ads-context" id="meta-ads-plain"></p>
    <p class="panel-note" id="meta-ads-distinction"></p>
  `;
  if (googleAds.parentNode) {
    googleAds.parentNode.insertBefore(section, googleAds.nextSibling);
  }
  return section;
}

function renderMetaAds() {
  const summary = data.metaAdsSummary;
  const section = ensureMetaAdsSection();
  if (!section) return;
  if (!summary || typeof summary !== 'object') {
    section.hidden = true;
    return;
  }
  section.hidden = false;

  const periodChip = $('#meta-ads-period');
  if (periodChip) periodChip.textContent = summary.period || 'Latest Meta report';

  const noteEl = $('#meta-ads-note');
  if (noteEl) {
    noteEl.textContent =
      `${summary.source || 'Meta Ads via Forge One email report'}. ` +
      `Period ${summary.period || ''} (${summary.comparison || 'vs previous period'}). ` +
      'These numbers count Meta-platform impressions and clicks on Facebook/Instagram, NOT ElectricNOW in-app ad impressions, and they are independent of the Google Ads connector totals above.';
  }

  function deltaLabel(value) {
    if (value === null || value === undefined || Number.isNaN(value)) return '';
    const sign = value > 0 ? '▲ +' : (value < 0 ? '▼ ' : '');
    return `${sign}${Number(value).toFixed(1)}% vs previous period`;
  }
  const deltas = summary.deltas || {};

  // fmt.number abbreviates large counts (e.g. 250,366 -> "250K"), so surface the
  // exact email value in a sublabel and a hover tooltip to keep it visible.
  function exactInt(value) {
    const n = toFiniteNumber(value);
    return n === null ? null : Math.round(n).toLocaleString();
  }
  function countDetail(deltaPct, exact, fallback) {
    const d = deltaLabel(deltaPct);
    const exactPart = exact ? `Exact: ${exact}` : '';
    if (d && exactPart) return `${d} · ${exactPart}`;
    return d || exactPart || fallback;
  }
  // Meta campaign rows carry the name in `campaign` (sometimes `name`) and have
  // no explicit platform field. Derive a readable label and infer platform from
  // the campaign string so empty/missing names never render as bare "()".
  function metaCampaignPlatform(name) {
    const s = String(name || '').toLowerCase();
    if (s.includes('google play') || s.includes('android')) return 'Google Play';
    if (s.includes('ios') || s.includes('app store') || s.includes('apple')) return 'iOS';
    return '';
  }
  function metaCampaignLabel(row, index) {
    const rawName = (row && (row.campaign || row.name || row.campaignName)) || '';
    const name = String(rawName).trim();
    const platform = String((row && row.platform) || metaCampaignPlatform(name) || '').trim();
    const baseName = name || `Campaign ${index + 1} (Meta paid)`;
    return platform ? `${baseName} (${platform})` : baseName;
  }

  // Blended cost per download (~$0.97) and CTR (~3.22%) as named cards.
  const blendedCost = toFiniteNumber(summary.costPerDownload);
  const ctr = toFiniteNumber(summary.ctrPct);
  const ctrDisplay = ctr === null ? NOT_AVAILABLE : `${ctr.toFixed(2)}%`;
  const blendedDisplay = blendedCost === null ? NOT_AVAILABLE : `$${blendedCost.toFixed(2)}`;

  const kpiCards = [
    usageStat('Meta spend', fmt.currency(summary.spend), deltaLabel(deltas.spendPct) || 'Total Meta paid spend for the period'),
    usageStat('Impressions', fmt.number(summary.impressions), countDetail(deltas.impressionsPct, exactInt(summary.impressions), 'Meta platform impressions (NOT in-app ad impressions)'), exactInt(summary.impressions) ? `Exact impressions: ${exactInt(summary.impressions)}` : ''),
    usageStat('Link clicks', fmt.number(summary.linkClicks), countDetail(deltas.linkClicksPct, exactInt(summary.linkClicks), 'Clicks to the App Store / Play Store from Meta ads'), exactInt(summary.linkClicks) ? `Exact link clicks: ${exactInt(summary.linkClicks)}` : ''),
    usageStat('Cost / click', fmt.currency(summary.costPerClick), deltaLabel(deltas.costPerClickPct) || 'Average Meta cost per link click'),
    usageStat('CTR', ctrDisplay, 'Click-through rate (link clicks ÷ impressions), per Meta report', ctr === null ? '' : `CTR ${ctr.toFixed(2)}%`),
    usageStat('iOS downloads', fmt.number(summary.iosDownloads), countDetail(deltas.iosDownloadsPct, exactInt(summary.iosDownloads), 'App Store installs attributed to Meta'), exactInt(summary.iosDownloads) ? `Exact iOS downloads: ${exactInt(summary.iosDownloads)}` : ''),
    usageStat('Cost / iOS download', fmt.currency(summary.costPerIosDownload), deltaLabel(deltas.costPerIosDownloadPct) || 'Meta spend divided by iOS downloads'),
    usageStat('Android downloads', fmt.number(summary.androidDownloads), countDetail(deltas.androidDownloadsPct, exactInt(summary.androidDownloads), 'Play Store installs attributed to Meta'), exactInt(summary.androidDownloads) ? `Exact Android downloads: ${exactInt(summary.androidDownloads)}` : ''),
    usageStat('Cost / Android download', fmt.currency(summary.costPerAndroidDownload), deltaLabel(deltas.costPerAndroidDownloadPct) || 'Meta spend divided by Android downloads'),
    usageStat('Total downloads', fmt.number(summary.totalDownloads), exactInt(summary.totalDownloads) ? `iOS + Android attributed to Meta · Exact: ${exactInt(summary.totalDownloads)}` : 'iOS + Android downloads attributed to Meta', exactInt(summary.totalDownloads) ? `Exact total downloads: ${exactInt(summary.totalDownloads)}` : ''),
    usageStat('Cost / download', blendedDisplay, 'Blended Meta cost per download (spend ÷ total downloads)', blendedCost === null ? '' : `Blended cost per download $${blendedCost.toFixed(4)}`),
  ];
  const kpisEl = $('#meta-ads-kpis');
  if (kpisEl) kpisEl.innerHTML = kpiCards.join('');

  const campaigns = Array.isArray(summary.campaigns) ? summary.campaigns : [];
  const campaignsEl = $('#meta-ads-campaigns');
  if (campaignsEl) {
    campaignsEl.innerHTML = campaigns.map((row, index) => `
      <div class="google-ads-action-row">
        <header>
          <span>${escapeHtml(metaCampaignLabel(row, index))}</span>
          <strong>${fmt.currency(row.spend)}</strong>
        </header>
        <em>${fmt.number(row.appInstalls)} app installs · ${fmt.currency(row.costPerAppInstall)} / install</em>
      </div>
    `).join('');
  }

  const genders = Array.isArray(summary.genderBreakdown) ? summary.genderBreakdown : [];
  const genderEl = $('#meta-ads-gender');
  if (genderEl) {
    genderEl.innerHTML = genders.map((row) => {
      const label = String(row.gender || 'unknown');
      const niceLabel = label.charAt(0).toUpperCase() + label.slice(1);
      return `
        <div class="google-ads-action-row">
          <header>
            <span>${escapeHtml(niceLabel)}</span>
            <strong>${fmt.currency(row.spend)}</strong>
          </header>
          <em>${fmt.number(row.appInstalls)} installs · ${fmt.currency(row.costPerAppInstall)} / install</em>
        </div>
      `;
    }).join('');
  }

  const ages = Array.isArray(summary.ageBreakdown) ? summary.ageBreakdown : [];
  const totalAgeSpend = ages.reduce((sum, row) => sum + (toFiniteNumber(row.spend) || 0), 0) || 1;
  const ageEl = $('#meta-ads-age');
  if (ageEl) {
    ageEl.innerHTML = ages.map((row) => {
      const spend = toFiniteNumber(row.spend) || 0;
      const share = (spend / totalAgeSpend) * 100;
      const width = Math.max(3, share);
      return `
        <div class="google-ads-device-row">
          <header>
            <span>${escapeHtml(String(row.ageRange || 'Unknown'))}</span>
            <strong>${fmt.currency(row.spend)}</strong>
          </header>
          <div class="share-track" aria-hidden="true"><div class="share-fill" style="width:${width.toFixed(1)}%"></div></div>
          <div class="google-ads-device-metrics">
            <em>${fmt.number(row.appInstalls)} installs</em>
            <em>${fmt.currency(row.costPerAppInstall)} / install</em>
          </div>
        </div>
      `;
    }).join('');
  }

  const interpEl = $('#meta-ads-interp');
  if (interpEl) interpEl.textContent = summary.paidAcquisitionInterpretation || '';
  const plainEl = $('#meta-ads-plain');
  if (plainEl) plainEl.textContent = summary.plainEnglish || '';
  const distEl = $('#meta-ads-distinction');
  if (distEl) {
    distEl.textContent = `${summary.inAppAdsDistinction || ''} ${summary.doubleCountingNote || ''}`.trim();
  }
}

function ensureYouTubeSection() {
  let section = document.getElementById('youtube');
  if (section) return section;
  // Anchor after Meta Ads when present, otherwise after Google Ads.
  const anchor = document.getElementById('meta-ads') || document.getElementById('google-ads');
  if (!anchor) return null;
  const sideNav = $('.side-nav');
  if (sideNav && !sideNav.querySelector('a[href="#youtube"]')) {
    const refLink = sideNav.querySelector('a[href="#meta-ads"]') || sideNav.querySelector('a[href="#google-ads"]');
    const link = document.createElement('a');
    link.href = '#youtube';
    link.setAttribute('data-testid', 'nav-youtube');
    link.textContent = 'YouTube';
    if (refLink && refLink.nextSibling) {
      sideNav.insertBefore(link, refLink.nextSibling);
    } else {
      sideNav.appendChild(link);
    }
  }
  section = document.createElement('section');
  section.className = 'panel google-ads-panel';
  section.id = 'youtube';
  section.setAttribute('aria-labelledby', 'youtube-title');
  section.setAttribute('data-testid', 'section-youtube');
  section.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">YouTube channel — audience & estimated ad revenue</p>
        <h2 id="youtube-title">YouTube Analytics — ElectricNOW channel</h2>
      </div>
      <span class="period-chip" id="youtube-period">Latest available</span>
    </div>
    <p id="youtube-note" class="panel-note"></p>
    <div class="usage-card-grid google-ads-kpis" id="youtube-kpis" data-testid="youtube-kpis"></div>
    <h3>Daily trend</h3>
    <div id="youtube-daily" class="table-wrap" data-testid="youtube-daily"></div>
    <h3>Top videos</h3>
    <div id="youtube-top-videos" class="table-wrap title-table" data-testid="youtube-top-videos"></div>
    <div class="google-ads-split">
      <div><h3>Traffic sources</h3><div id="youtube-traffic" class="google-ads-device-list" data-testid="youtube-traffic"></div></div>
      <div><h3>Device split</h3><div id="youtube-devices" class="google-ads-device-list" data-testid="youtube-devices"></div></div>
    </div>
    <p class="panel-note" id="youtube-distinction"></p>
  `;
  if (anchor.parentNode) {
    anchor.parentNode.insertBefore(section, anchor.nextSibling);
  }
  return section;
}

function renderYouTube() {
  const summary = data.youtubeSummary;
  const section = ensureYouTubeSection();
  if (!section) return;
  if (!summary || typeof summary !== 'object') {
    section.hidden = true;
    return;
  }
  section.hidden = false;

  const periodChip = $('#youtube-period');
  if (periodChip) periodChip.textContent = `${summary.period} · latest available`;

  const noteEl = $('#youtube-note');
  if (noteEl) {
    noteEl.textContent =
      `${summary.source}. ${summary.periodNote} ${summary.comparisonNote} ` +
      'These are YouTube-only metrics: YouTube ad impressions and estimated YouTube ad revenue ' +
      'are NOT ElectricNOW in-app ad impressions and NOT Google/Meta paid-acquisition impressions. ' +
      'YouTube has no purchases and is not part of Visible Platform Sales.';
  }

  function ytDelta(card) {
    if (typeof card.deltaPct === 'number') {
      const cls = card.deltaPct > 0 ? 'up' : (card.deltaPct < 0 ? 'down' : '');
      return `<span class="delta ${cls}">${fmt.delta(card.deltaPct)} vs prior full week</span>`;
    }
    if (typeof card.deltaPoints === 'number') return `${fmt.points(card.deltaPoints)} vs prior full week`;
    if (typeof card.deltaSeconds === 'number') {
      const sign = card.deltaSeconds > 0 ? '+' : '';
      return `${sign}${card.deltaSeconds}s vs prior full week`;
    }
    if (typeof card.deltaDelta === 'number') {
      const sign = card.deltaDelta > 0 ? '+' : '';
      return `${sign}${card.deltaDelta} vs prior full week`;
    }
    return '';
  }
  function ytCardValue(card) {
    // Pre-formatted strings (duration label) render as-is; revenue uses currency.
    if (card.key === 'estimatedAdRevenue' || card.key === 'estimatedRevenue' || card.key === 'estimatedRevenueYtd') return fmt.currency(card.value);
    if (card.key === 'avgViewPct') return fmt.percent(card.value);
    if (typeof card.value === 'string') return card.value;
    return fmt.number(card.value);
  }
  const kpis = Array.isArray(summary.kpis) ? summary.kpis : [];
  const kpisEl = $('#youtube-kpis');
  if (kpisEl) {
    kpisEl.innerHTML = kpis
      .map((card) => usageStat(card.label, ytCardValue(card), `${card.detail}${ytDelta(card) ? ` · ${ytDelta(card)}` : ''}`))
      .join('');
  }

  const daily = Array.isArray(summary.dailyTrend) ? summary.dailyTrend : [];
  const dailyEl = $('#youtube-daily');
  if (dailyEl) {
    dailyEl.innerHTML = `
      <table>
        <thead><tr><th>Date</th><th>Views</th><th>Est. hours</th><th>Est. ad rev</th><th>Ad impressions</th><th>Monetized playbacks</th></tr></thead>
        <tbody>
          ${daily.map((r) => `
            <tr>
              <td>${escapeHtml(r.date)}</td>
              <td>${fmt.number(r.views)}</td>
              <td>${fmt.number(r.estimatedHoursWatched)}</td>
              <td>${fmt.currency(r.estimatedAdRevenue)}</td>
              <td>${fmt.number(r.adImpressions)}</td>
              <td>${fmt.number(r.monetizedPlaybacks)}</td>
            </tr>`).join('')}
        </tbody>
      </table>`;
  }

  const videos = Array.isArray(summary.topVideos) ? summary.topVideos : [];
  const videosEl = $('#youtube-top-videos');
  if (videosEl) {
    videosEl.innerHTML = `
      <table>
        <thead><tr><th>Video</th><th>Views</th><th>Est. hours</th><th>Avg view</th><th>Est. ad rev</th><th>Ad impressions</th><th>Monetized playbacks</th></tr></thead>
        <tbody>
          ${videos.map((v) => `
            <tr>
              <td><strong>${escapeHtml(v.title)}</strong>${v.videoId && v.videoId !== v.title ? `<br><span>${escapeHtml(v.videoId)}</span>` : ''}</td>
              <td>${fmt.number(v.views)}</td>
              <td>${fmt.number(v.estimatedHoursWatched)}</td>
              <td>${escapeHtml(v.averageViewDuration)}</td>
              <td>${fmt.currency(v.estimatedAdRevenue)}</td>
              <td>${fmt.number(v.adImpressions)}</td>
              <td>${fmt.number(v.monetizedPlaybacks)}</td>
            </tr>`).join('')}
        </tbody>
      </table>`;
  }

  function ytShareRows(rows) {
    return (rows || []).map((row) => {
      const share = toFiniteNumber(row.viewSharePct) || 0;
      const width = Math.max(3, share);
      return `
        <div class="google-ads-device-row">
          <header>
            <span>${escapeHtml(row.label)}</span>
            <strong>${fmt.number(row.views)} views</strong>
          </header>
          <div class="share-track" aria-hidden="true"><div class="share-fill" style="width:${width.toFixed(1)}%"></div></div>
          <div class="google-ads-device-metrics">
            <em>${fmt.percent(row.viewSharePct)} of views</em>
            <em>${fmt.number(row.estimatedHoursWatched)} hrs · ${escapeHtml(row.averageViewDuration)} avg</em>
          </div>
        </div>`;
    }).join('');
  }
  const trafficEl = $('#youtube-traffic');
  if (trafficEl) trafficEl.innerHTML = ytShareRows(summary.trafficSources);
  const devicesEl = $('#youtube-devices');
  if (devicesEl) devicesEl.innerHTML = ytShareRows(summary.deviceSplit);

  const distEl = $('#youtube-distinction');
  if (distEl) distEl.textContent = summary.distinctionNote || '';
}

function ensureUsGeographySection() {
  let section = document.getElementById('us-geography');
  if (section) return section;
  // Anchor after YouTube when present, otherwise after Meta/Google Ads.
  const anchor = document.getElementById('youtube') || document.getElementById('meta-ads') || document.getElementById('google-ads');
  if (!anchor) return null;
  const sideNav = $('.side-nav');
  if (sideNav && !sideNav.querySelector('a[href="#us-geography"]')) {
    const refLink = sideNav.querySelector('a[href="#youtube"]') || sideNav.querySelector('a[href="#meta-ads"]') || sideNav.querySelector('a[href="#google-ads"]');
    const link = document.createElement('a');
    link.href = '#us-geography';
    link.setAttribute('data-testid', 'nav-us-geography');
    link.textContent = 'US geography';
    if (refLink && refLink.nextSibling) {
      sideNav.insertBefore(link, refLink.nextSibling);
    } else {
      sideNav.appendChild(link);
    }
  }
  section = document.createElement('section');
  section.className = 'panel us-geo-panel';
  section.id = 'us-geography';
  section.setAttribute('aria-labelledby', 'us-geography-title');
  section.setAttribute('data-testid', 'section-us-geography');
  section.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow" id="us-geography-eyebrow"></p>
        <h2 id="us-geography-title">US audience geography</h2>
      </div>
      <span class="period-chip" id="us-geography-period"></span>
    </div>
    <p id="us-geography-note" class="panel-note"></p>
    <div class="usage-card-grid" id="us-geography-kpis" data-testid="us-geography-kpis"></div>
    <div class="us-geo-map-wrap" style="border:1px solid rgba(255,255,255,0.11);border-radius:10px;background:rgba(15,33,56,0.5);padding:16px;margin:14px 0;">
      <div class="us-geo-map" id="us-geography-map" data-testid="us-geography-map"></div>
      <p class="us-geo-map-caption" id="us-geography-map-caption" style="color:#667f9d;font-size:12px;margin:10px 2px 0;"></p>
    </div>
    <div class="us-geo-timezones" id="us-geography-timezones" data-testid="us-geography-timezones" style="border:1px solid rgba(255,255,255,0.11);border-radius:10px;background:rgba(15,33,56,0.5);padding:16px;margin:14px 0;" hidden>
      <h3 id="us-geography-timezones-title" style="margin:0 0 4px;">Usage by U.S. time-zone grouping</h3>
      <p id="us-geography-timezones-label" style="color:#8aa3c2;font-size:13px;margin:0 0 12px;"></p>
      <div id="us-geography-timezones-bar" style="display:flex;width:100%;height:26px;border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,0.11);"></div>
      <div id="us-geography-timezones-chips" class="usage-card-grid" style="margin-top:14px;"></div>
      <p class="panel-note" id="us-geography-timezones-caveat" style="margin-top:10px;"></p>
    </div>
    <div class="us-geo-tables" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:14px;">
      <div><h3>Top states by active users</h3><div id="us-geography-states" class="table-wrap" data-testid="us-geography-states"></div></div>
      <div><h3>Top cities / metros by active users</h3><div id="us-geography-cities" class="table-wrap" data-testid="us-geography-cities"></div></div>
    </div>
    <p class="panel-note" id="us-geography-caveat"></p>
    <p class="sales-source" id="us-geography-methodology"></p>
  `;
  if (anchor.parentNode) {
    anchor.parentNode.insertBefore(section, anchor.nextSibling);
  }
  return section;
}

function renderUsGeography() {
  const geo = data.usGeography;
  const section = ensureUsGeographySection();
  if (!section) return;
  if (!geo || typeof geo !== 'object' || !Array.isArray(geo.states) || !geo.states.length) {
    section.hidden = true;
    return;
  }
  section.hidden = false;

  const eyebrow = $('#us-geography-eyebrow');
  if (eyebrow) eyebrow.textContent = geo.eyebrow || 'Where the ElectricNOW app & platform is used across the United States';
  const periodChip = $('#us-geography-period');
  if (periodChip) periodChip.textContent = geo.freshness || geo.period || '';
  const noteEl = $('#us-geography-note');
  if (noteEl) noteEl.textContent = `Source: ${geo.source}. ${geo.summaryLine || ''}`;

  const t = geo.usTotals || {};
  const kpisEl = $('#us-geography-kpis');
  if (kpisEl) {
    kpisEl.innerHTML = [
      usageStat('U.S. active users', t.activeUsers, 'Deduplicated country-level GA4 count'),
      usageStat('Sessions', t.sessions, 'U.S. sessions this week'),
      usageStat('Engagement rate', fmt.percent(t.engagementRate), 'U.S. engaged sessions / sessions'),
      usageStat('Screen / page views', t.screenPageViews, 'U.S. views this week'),
      usageStat('Events', t.eventCount, 'U.S. event count this week'),
    ].join('');
  }

  // Bubble map: proportional circles positioned at approximate state locations.
  const mapEl = $('#us-geography-map');
  if (mapEl) {
    const placed = geo.states.filter((s) => typeof s.x === 'number' && typeof s.y === 'number' && s.activeUsers > 0);
    const maxAu = Math.max(...placed.map((s) => s.activeUsers), 1);
    const bubbles = placed
      .slice()
      .sort((a, b) => b.activeUsers - a.activeUsers)
      .map((s) => {
        const r = 1.6 + Math.sqrt(s.activeUsers / maxAu) * 6.4;
        const intensity = 0.35 + (s.activeUsers / maxAu) * 0.55;
        const showLabel = s.activeUsers >= maxAu * 0.28;
        const title = `${s.state}: ${fmt.number(s.activeUsers)} active users · ${fmt.number(s.sessions)} sessions · ${fmt.percent(s.engagementRate)} ER`;
        return `<g class="us-geo-bubble">
            <title>${escapeHtml(title)}</title>
            <circle cx="${s.x}" cy="${s.y}" r="${r.toFixed(2)}" fill="rgba(56,189,248,${intensity.toFixed(2)})" stroke="rgba(14,165,233,0.9)" stroke-width="0.3"></circle>
            ${showLabel ? `<text x="${s.x}" y="${(s.y + 0.9).toFixed(2)}" text-anchor="middle" class="us-geo-bubble-label" font-size="2" font-weight="700" fill="#f6f9ff" style="pointer-events:none;">${escapeHtml(s.stateCode || '')}</text>` : ''}
          </g>`;
      })
      .join('');
    mapEl.innerHTML = `
      <svg viewBox="0 0 92 64" role="img" aria-label="Map of U.S. app usage by state" preserveAspectRatio="xMidYMid meet">
        <rect x="0" y="0" width="92" height="64" rx="3" class="us-geo-map-bg" fill="rgba(10,21,36,0.6)" stroke="rgba(255,255,255,0.11)" stroke-width="0.3"></rect>
        ${bubbles}
      </svg>`;
  }
  const mapCaption = $('#us-geography-map-caption');
  if (mapCaption) mapCaption.textContent = 'Bubble size is proportional to GA4 active users by state (directional). Hover a bubble for exact figures. Alaska and Hawaii are shown as insets at lower-left.';

  const statesEl = $('#us-geography-states');
  if (statesEl) {
    const rows = geo.states.filter((s) => s.activeUsers > 0).slice(0, 12);
    statesEl.innerHTML = `
      <table>
        <thead><tr><th>State</th><th>Active users</th><th>Sessions</th><th>Eng. rate</th><th>Views</th><th>Events</th></tr></thead>
        <tbody>
          ${rows.map((s) => `
            <tr>
              <td>${escapeHtml(s.state)}</td>
              <td>${fmt.number(s.activeUsers)}</td>
              <td>${fmt.number(s.sessions)}</td>
              <td>${fmt.percent(s.engagementRate)}</td>
              <td>${fmt.number(s.screenPageViews)}</td>
              <td>${fmt.number(s.eventCount)}</td>
            </tr>`).join('')}
        </tbody>
      </table>`;
  }

  const citiesEl = $('#us-geography-cities');
  if (citiesEl) {
    const rows = (geo.topCities || []).slice(0, 12);
    citiesEl.innerHTML = `
      <table>
        <thead><tr><th>City / metro</th><th>State</th><th>Active users</th><th>Sessions</th><th>Eng. rate</th><th>Views</th></tr></thead>
        <tbody>
          ${rows.map((c) => `
            <tr>
              <td>${escapeHtml(c.city)}</td>
              <td>${escapeHtml(c.region)}</td>
              <td>${fmt.number(c.activeUsers)}</td>
              <td>${fmt.number(c.sessions)}</td>
              <td>${fmt.percent(c.engagementRate)}</td>
              <td>${fmt.number(c.screenPageViews)}</td>
            </tr>`).join('')}
        </tbody>
      </table>`;
  }

  const tzPanel = $('#us-geography-timezones');
  const tz = geo.timeZoneUsage;
  if (tzPanel) {
    const tzGroups = tz && Array.isArray(tz.groups) ? tz.groups.filter((grp) => grp && grp.sessions > 0) : [];
    if (tzGroups.length) {
      tzPanel.hidden = false;
      const labelEl = $('#us-geography-timezones-label');
      if (labelEl) labelEl.textContent = tz.label || 'Share of U.S. sessions by time-zone grouping';
      const palette = ['rgba(56,189,248,0.85)', 'rgba(129,140,248,0.85)', 'rgba(52,211,153,0.85)'];
      const barEl = $('#us-geography-timezones-bar');
      if (barEl) {
        barEl.innerHTML = tzGroups
          .map((grp, i) => {
            const seg = `${grp.name}: ${fmt.percent(grp.pct)} (${fmt.number(grp.sessions)} sessions)`;
            return `<div title="${escapeHtml(seg)}" style="width:${grp.pct}%;background:${palette[i % palette.length]};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#0a1524;min-width:0;overflow:hidden;white-space:nowrap;">${grp.pct >= 8 ? fmt.percent(grp.pct) : ''}</div>`;
          })
          .join('');
      }
      const chipsEl = $('#us-geography-timezones-chips');
      if (chipsEl) {
        chipsEl.innerHTML = tzGroups
          .map((grp) => usageStat(grp.name, fmt.percent(grp.pct), `${fmt.number(grp.sessions)} sessions`))
          .join('');
      }
      const tzCaveatEl = $('#us-geography-timezones-caveat');
      if (tzCaveatEl) tzCaveatEl.textContent = tz.caveat || '';
    } else {
      tzPanel.hidden = true;
    }
  }

  const caveatEl = $('#us-geography-caveat');
  if (caveatEl) caveatEl.textContent = geo.caveat || '';
  const methodEl = $('#us-geography-methodology');
  if (methodEl) methodEl.textContent = geo.methodologyNote || '';
}

function renderTvodTitleRevenue() {
  const section = $('#tvod-title-revenue');
  const tv = data.tvodTitleRevenue;
  if (!section || !tv) {
    if (section) section.hidden = true;
    return;
  }
  section.hidden = false;
  const periodLabel = tv.periodStart ? `Since ${tv.periodStart}` : 'Cumulative since launch';
  $('#tvod-title-revenue-period').textContent = periodLabel;
  $('#tvod-title-revenue-note').textContent = tv.note || '';

  const ru = tv.registeredUsers || {};
  const txn = tv.transactions || {};
  const net = tv.netRevenue || {};
  const cards = [
    ['Registered users', fmt.number(ru.total), 'Total registered ElectricNOW accounts'],
    ['Active registered users', fmt.number(ru.active), 'Registered users considered active'],
    ['Paid TVOD transactions', fmt.number(txn.paidTransactions), `${fmt.number(txn.totalRows)} total rows in the report`],
    ['Net TVOD revenue', fmt.currency(net.tvodSalesEmailTotalNet), 'Cumulative net revenue from title-level transactions'],
  ];
  $('#tvod-title-revenue-summary').innerHTML = cards
    .map(([label, value, detail]) => usageStat(label, value, detail))
    .join('');

  const titles = (tv.topTitlesByNet || [])
    .filter((row) => !_enRowIsLive(row))
    .map((row, i) => Object.assign({ _rank: i + 1 }, row));
  renderTable(
    '#tvod-title-revenue-table',
    ['#', 'Title', 'Transactions', 'Gross', 'Net'],
    titles,
    (row) => [
      `<strong>${row._rank}</strong>`,
      `<strong>${escapeHtml(row.title || 'Untitled')}</strong>`,
      fmt.number(row.transactions),
      fmt.currency(row.gross),
      fmt.currency(row.net),
    ],
  );

  const channels = tv.channels || [];
  renderTable(
    '#tvod-title-revenue-channels',
    ['Channel', 'Transactions', 'Net revenue'],
    channels,
    (row) => [
      `<strong>${escapeHtml(row.channel || 'Unknown')}</strong>`,
      fmt.number(row.transactions),
      fmt.currency(row.net),
    ],
  );
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
  renderTvodTitleRevenue();
  renderGaps();
  renderGoogleAds();
  renderMetaAds();
  renderYouTube();
  renderUsGeography();
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
    _enPurgeLiveFromOnDemand(data);
      _enPurgeLiveFromOnDemand(data);
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
    _enPurgeLiveFromOnDemand(data);
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
    _enPurgeLiveFromOnDemand(data);
      _enPurgeLiveFromOnDemand(data);
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
  const isVisible = panel.classList.toggle('is-visible');
  button.classList.toggle('is-active', isVisible);
  button.setAttribute('aria-expanded', String(isVisible));
  if (isVisible) {
    window.requestAnimationFrame(() => {
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      panel.focus({ preventScroll: true });
    });
  }
});

if (data) {
  renderAll();
}
loadCurrentData();

</script>
<!-- End ElectricNOW Performance Dashboard embed. -->