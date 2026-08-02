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
  line-height: 1.08;
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
#electricnow-dashboard-embed .sales-stat-footnote {
  display: block;
  margin-top: 4px;
  font-size: 10px;
  line-height: 1.3;
  opacity: 0.85;
}
#electricnow-dashboard-embed .sales-audit-recent {
  border-color: rgba(255, 197, 66, 0.4);
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
#electricnow-dashboard-embed .dotstudios-ads-panel {
  border-color: rgba(104, 183, 255, 0.22);
}
#electricnow-dashboard-embed .dotstudios-ads-kpis {
  margin: 16px 0 18px;
}
#electricnow-dashboard-embed .dotstudios-ads-caveats {
  display: grid;
  gap: 8px;
  margin: 16px 0 0;
  padding: 14px 16px 14px 30px;
  border: 1px solid rgba(255, 200, 87, 0.22);
  border-radius: var(--radius-sm);
  background: rgba(255, 200, 87, 0.07);
  color: var(--muted);
  font-size: 12px;
  line-height: 1.45;
}
#electricnow-dashboard-embed .dotstudios-ads-caveats li::marker {
  color: var(--primary-2);
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
          <a href="#dotstudios-app-ads" data-testid="nav-dotstudios-app-ads">App ads</a>
          <a href="#google-ads" data-testid="nav-google-ads">Google Ads</a>
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
              The top scorecards now separate Apple/Android app-stream usage, actual viewing events, sales signals, geography, and time spent across GA4-tracked platforms.
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

        <section class="panel dotstudios-ads-panel" id="dotstudios-app-ads" aria-labelledby="dotstudios-app-ads-title" hidden>
          <div class="panel-header">
            <div>
              <p class="eyebrow">Manual app ad-serving source</p>
              <h2 id="dotstudios-app-ads-title">DotStudios App Ad Delivery</h2>
            </div>
            <span class="period-chip" id="dotstudios-app-ads-period">Manual upload</span>
          </div>
          <p id="dotstudios-app-ads-note" class="panel-note"></p>
          <div class="usage-card-grid dotstudios-ads-kpis" id="dotstudios-app-ads-kpis" data-testid="dotstudios-app-ads-kpis"></div>
          <div class="google-ads-split">
            <div>
              <h3>By device</h3>
              <div id="dotstudios-app-ads-devices" class="google-ads-device-list" data-testid="dotstudios-app-ads-devices"></div>
            </div>
            <div>
              <h3>By channel</h3>
              <div id="dotstudios-app-ads-channels" class="google-ads-action-list" data-testid="dotstudios-app-ads-channels"></div>
            </div>
          </div>
          <h3>Top videos by app ad impressions</h3>
          <div id="dotstudios-app-ads-videos" class="table-wrap title-table" data-testid="table-dotstudios-app-ads-videos"></div>
          <h3>Daily app ad delivery</h3>
          <div id="dotstudios-app-ads-daily" class="table-wrap" data-testid="table-dotstudios-app-ads-daily"></div>
          <p class="panel-note google-ads-context" id="dotstudios-app-ads-plain"></p>
          <ul class="dotstudios-ads-caveats" id="dotstudios-app-ads-caveats" data-testid="dotstudios-app-ads-caveats"></ul>
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
window.DASHBOARD_DATA = {"generatedAt": "2026-08-02 08:50 PDT", "property": "properties/497892271", "sourceLabel": "Internal GA4 pull, property 497892271", "periods": {"launchBaseline": {"label": "Launch baseline", "range": "Apr 13-Apr 19, 2026", "start": "2026-04-13", "end": "2026-04-19"}, "previousWeek": {"label": "Previous 7 days", "range": "Jul 14-Jul 20, 2026", "start": "2026-07-14", "end": "2026-07-20"}, "baseline": {"label": "Previous 7 days", "range": "Jul 14-Jul 20, 2026", "start": "2026-07-14", "end": "2026-07-20"}, "currentWeek": {"label": "Latest 7 complete days", "range": "Jul 21-Jul 27, 2026", "start": "2026-07-21", "end": "2026-07-27"}, "weekToDate": {"label": "Current complete week", "range": "Jul 21-Jul 27, 2026", "start": "2026-07-21", "end": "2026-07-27", "note": "Complete rolling latest-7-day GA4 reporting window pulled on Jul 28, 2026 (Tuesday manual refresh, not the regular Monday-Sunday scheduled report) from property 497892271."}}, "periodTotals": {"launchBaseline": {"activeUsers": 8739, "newUsers": 8011, "sessions": 13421, "engagedSessions": 7960, "engagementRate": 59.310036509947096, "screenPageViews": 39326, "eventCount": 705015, "purchaseRevenue": 89.94999999999999, "userEngagementDuration": 13165345}, "previousWeek": {"activeUsers": 3485, "newUsers": 1077, "sessions": 9586, "engagedSessions": 7414, "engagementRate": 77.34195702065512, "screenPageViews": 32322, "eventCount": 1039028, "userEngagementDuration": 20311124, "purchaseRevenue": 37.57}, "baseline": {"activeUsers": 3485, "newUsers": 1077, "sessions": 9586, "engagedSessions": 7414, "engagementRate": 77.34195702065512, "screenPageViews": 32322, "eventCount": 1039028, "userEngagementDuration": 20311124, "purchaseRevenue": 37.57}, "currentWeek": {"activeUsers": 3789, "newUsers": 1225, "sessions": 10658, "engagedSessions": 7011, "engagementRate": 65.78157252767875, "screenPageViews": 35091, "eventCount": 1051634, "userEngagementDuration": 20251827, "purchaseRevenue": 37.57, "note": "Fresh complete rolling-7-day GA4 pull for Jul 21-Jul 27, 2026 (property 497892271); Tuesday manual refresh, not the regular Monday-Sunday cadence."}, "weekToDate": {"activeUsers": 3789, "newUsers": 1225, "sessions": 10658, "engagedSessions": 7011, "engagementRate": 65.78157252767875, "screenPageViews": 35091, "eventCount": 1051634, "userEngagementDuration": 20251827, "purchaseRevenue": 37.57, "note": "Fresh complete rolling-7-day GA4 pull for Jul 21-Jul 27, 2026 (property 497892271); Tuesday manual refresh, not the regular Monday-Sunday cadence."}}, "scorecards": [{"key": "platformActiveUsers", "label": "Platform active users", "baseline": 5282, "launchBaseline": 8710, "previousWeek": 3377, "current": 3615, "deltaPct": 7.047675, "deltaVsLaunchPct": -58.495982, "deltaVsPreviousPct": 7.047675, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}, {"key": "platformSessions", "label": "Platform sessions", "baseline": 10925, "launchBaseline": 13323, "previousWeek": 9780, "current": 10318, "deltaPct": 5.501022, "deltaVsLaunchPct": -22.55498, "deltaVsPreviousPct": 5.501022, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}, {"key": "viewingEventUsers", "label": "Viewing event users", "baseline": 2410, "launchBaseline": 1152, "previousWeek": 1726, "current": 1349, "deltaPct": -21.84241, "deltaVsLaunchPct": 17.100694, "deltaVsPreviousPct": -21.84241, "deltaType": "percent", "format": "number", "context": "Users who triggered on-demand video_start or Live play events. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "totalEngagementHours", "label": "Total engaged hours", "baseline": 4792.675, "launchBaseline": 3652.9975, "previousWeek": 5760.891944, "current": 5625.5075, "deltaPct": -2.35006, "deltaVsLaunchPct": 53.997026, "deltaVsPreviousPct": -2.35006, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}, {"key": "avgEngagedMinutesPerUser", "label": "Avg time per user", "baseline": 48.938138, "launchBaseline": 25.164161882893225, "previousWeek": 102.355202, "current": 93.369419, "deltaPct": -8.779019, "deltaVsLaunchPct": 271.041243, "deltaVsPreviousPct": -8.779019, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}, {"key": "appActiveUsers", "label": "App stream active users", "baseline": 5383, "launchBaseline": 1547, "previousWeek": 5383, "current": 4800, "deltaPct": -10.830392, "deltaVsLaunchPct": 210.277957, "deltaVsPreviousPct": -10.830392, "deltaType": "percent", "format": "number", "context": "People using the Apple/iOS or Android app streams (GA4 property 497892271, streams 12950551103 + 12982344897); Apple TV is not yet split from the Apple/iOS stream. Stream-level app-usage for the week of Jun 8-14 compared with the prior week Jun 1-7. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}, {"key": "appSessions", "label": "App stream sessions", "baseline": 8405, "launchBaseline": 2889, "previousWeek": 8405, "current": 8029, "deltaPct": -4.473528, "deltaVsLaunchPct": 177.916234, "deltaVsPreviousPct": -4.473528, "deltaType": "percent", "format": "number", "context": "GA4 sessions on the Apple/iOS and Android app streams (property 497892271, streams 12950551103 + 12982344897). Stream-level week of Jun 8-14 compared with the prior week Jun 1-7. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}, {"key": "appEngagementRate", "label": "App stream engagement rate", "baseline": 78.37001784651993, "launchBaseline": 59.70126848307439, "previousWeek": 78.37001784651993, "current": 76.43542159671192, "deltaPct": -1.934596, "deltaVsLaunchPct": 16.734153, "deltaVsPreviousPct": -1.934596, "deltaType": "points", "format": "percent", "context": "Engaged app-stream sessions divided by app-stream sessions (GA4 property 497892271, streams 12950551103 + 12982344897). Stream-level week of Jun 8-14 compared with the prior week Jun 1-7; the change is shown in percentage points. Filtered-total query (stream IDs summed) is used rather than per-stream row sums, which differ slightly due to GA4 cross-stream user de-duplication. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}, {"key": "viewingEventUsers", "label": "Viewing event users", "baseline": 2410, "launchBaseline": 1152, "previousWeek": 1726, "current": 1349, "deltaPct": -21.84241, "deltaVsLaunchPct": 17.100694, "deltaVsPreviousPct": -21.84241, "deltaType": "percent", "format": "number", "context": "Users who triggered on-demand video_start or Live play events. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "onDemandStartUsers", "label": "On-demand start users", "baseline": 2354, "launchBaseline": 1020, "previousWeek": 2354, "current": 2354, "deltaPct": 0.0, "deltaVsLaunchPct": 130.784314, "deltaVsPreviousPct": 0.0, "deltaType": "percent", "format": "number", "context": "Users who triggered video_start outside the Live screen. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.) [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "liveChannelViewers", "label": "Live channel viewers", "baseline": 132, "launchBaseline": 121, "previousWeek": 132, "current": 132, "deltaPct": 0.0, "deltaVsLaunchPct": 9.090909, "deltaVsPreviousPct": 0.0, "deltaType": "percent", "format": "number", "context": "Users who triggered a Live play event. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.) [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "videoCompleteUsers", "label": "Video complete users", "baseline": 209, "launchBaseline": 219, "previousWeek": 222, "current": 344, "deltaPct": 54.954955, "deltaVsLaunchPct": 57.077626, "deltaVsPreviousPct": 54.954955, "deltaType": "percent", "format": "number", "context": "Users who triggered video_complete. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "livePlayEvents", "label": "Live play events", "baseline": 3898, "launchBaseline": 3952, "previousWeek": 3898, "current": 3898, "deltaPct": 0.0, "deltaVsLaunchPct": -1.366397, "deltaVsPreviousPct": 0.0, "deltaType": "percent", "format": "number", "context": "Total Live play events, not unique users. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.) [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "adRequestEvents", "label": "Ad request events", "baseline": 25669, "launchBaseline": 10589, "previousWeek": 26144, "current": 23803, "deltaPct": -8.954253, "deltaVsLaunchPct": 124.789876, "deltaVsPreviousPct": -8.954253, "deltaType": "percent", "format": "number", "context": "Total ad request events generated by viewing activity. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "avgEngagedMinutesPerUser", "label": "Avg time per user", "baseline": 48.938138, "launchBaseline": 25.164161882893225, "previousWeek": 102.355202, "current": 93.369419, "deltaPct": -8.779019, "deltaVsLaunchPct": 271.041243, "deltaVsPreviousPct": -8.779019, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}, {"key": "avgEngagedMinutesPerSession", "label": "Avg time per session", "baseline": 24.332417, "launchBaseline": 16.45123845980635, "previousWeek": 35.342895, "current": 32.712779, "deltaPct": -7.441713, "deltaVsLaunchPct": 98.846906, "deltaVsPreviousPct": -7.441713, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}, {"key": "totalEngagementHours", "label": "Total engaged hours", "baseline": 4792.675, "launchBaseline": 3652.9975, "previousWeek": 5760.891944, "current": 5625.5075, "deltaPct": -2.35006, "deltaVsLaunchPct": 53.997026, "deltaVsPreviousPct": -2.35006, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}], "trend": [{"date": "Jul 20", "rawDate": "20260720", "activeUsers": 654, "newUsers": 141, "sessions": 1352, "engagedSessions": 1044, "screenPageViews": 4566, "eventCount": 142412, "userEngagementDuration": 2563573, "engagementRate": 77.2189349112426}, {"date": "Jul 21", "rawDate": "20260721", "activeUsers": 757, "newUsers": 186, "sessions": 1514, "engagedSessions": 1184, "screenPageViews": 5208, "eventCount": 142353, "userEngagementDuration": 2948300, "engagementRate": 78.20343461030383}, {"date": "Jul 22", "rawDate": "20260722", "activeUsers": 713, "newUsers": 153, "sessions": 1415, "engagedSessions": 1129, "screenPageViews": 4942, "eventCount": 145178, "userEngagementDuration": 2677649, "engagementRate": 79.78798586572438}, {"date": "Jul 23", "rawDate": "20260723", "activeUsers": 677, "newUsers": 149, "sessions": 1414, "engagedSessions": 1104, "screenPageViews": 4766, "eventCount": 146295, "userEngagementDuration": 2664598, "engagementRate": 78.07637906647807}, {"date": "Jul 24", "rawDate": "20260724", "activeUsers": 673, "newUsers": 137, "sessions": 1449, "engagedSessions": 1101, "screenPageViews": 4911, "eventCount": 143185, "userEngagementDuration": 2551100, "engagementRate": 75.98343685300208}, {"date": "Jul 25", "rawDate": "20260725", "activeUsers": 710, "newUsers": 170, "sessions": 1412, "engagedSessions": 1100, "screenPageViews": 4892, "eventCount": 142935, "userEngagementDuration": 2824425, "engagementRate": 77.90368271954674}, {"date": "Jul 26", "rawDate": "20260726", "activeUsers": 802, "newUsers": 190, "sessions": 1898, "engagedSessions": 908, "screenPageViews": 3694, "eventCount": 248232, "userEngagementDuration": 4509566, "engagementRate": 47.83983140147524}], "eventCards": [{"event": "in_app_purchase", "label": "In-app purchases", "baseline": 0, "current": 2, "weekToDate": 2, "deltaPct": null, "activeUsersCurrent": 2, "stale": true}, {"event": "application_install", "label": "Application installs", "baseline": 4452, "current": 1160, "weekToDate": 1160, "deltaPct": 4.504505, "activeUsersCurrent": 979, "previousWeek": 1110}, {"event": "first_open", "label": "First opens", "baseline": 3699, "current": 602, "weekToDate": 602, "deltaPct": 17.120623, "activeUsersCurrent": 599, "previousWeek": 514}, {"event": "app_open", "label": "App opens", "baseline": 1610, "current": 2825, "weekToDate": 2825, "deltaPct": 8.570331, "activeUsersCurrent": 703, "previousWeek": 2602}, {"event": "app_time", "label": "App time events", "baseline": 261902, "current": 276886, "weekToDate": 276886, "deltaPct": -8.57956, "activeUsersCurrent": 870, "previousWeek": 302871}, {"event": "play", "label": "Play events", "baseline": 57320, "current": 59717, "weekToDate": 59717, "deltaPct": -2.687156, "activeUsersCurrent": 1296, "previousWeek": 61366}, {"event": "video_start", "label": "Video starts", "baseline": 20510, "current": 21718, "weekToDate": 21718, "deltaPct": -2.797297, "activeUsersCurrent": 1276, "previousWeek": 22343}, {"event": "video_play", "label": "Video plays", "baseline": 15366, "current": 9379, "weekToDate": 9379, "deltaPct": 6.919745, "activeUsersCurrent": 189, "previousWeek": 8772}, {"event": "video_complete", "label": "Video completes", "baseline": 3391, "current": 6230, "weekToDate": 6230, "deltaPct": -3.783784, "activeUsersCurrent": 397, "previousWeek": 6475}, {"event": "ads_request", "label": "Ad requests", "baseline": 23365, "current": 30326, "weekToDate": 30326, "deltaPct": -1.631581, "activeUsersCurrent": 285, "previousWeek": 30829}, {"event": "ads_impression", "label": "In-app ad impressions", "baseline": 31800, "current": 45398, "weekToDate": 45398, "deltaPct": -3.276802, "activeUsersCurrent": 279, "previousWeek": 46936}, {"event": "ads_loaded", "label": "Ads loaded", "baseline": 16646, "current": 22499, "weekToDate": 22499, "deltaPct": -5.327162, "activeUsersCurrent": 1, "previousWeek": 23765}, {"event": "ads_started", "label": "Ads started", "baseline": 16638, "current": 22474, "weekToDate": 22474, "deltaPct": -5.30485, "activeUsersCurrent": 1, "previousWeek": 23733}, {"event": "ads_complete", "label": "Ads completed", "baseline": 16093, "current": 21923, "weekToDate": 21923, "deltaPct": -5.214233, "activeUsersCurrent": 1, "previousWeek": 23129}, {"event": "ad_error", "label": "Ad errors", "baseline": 112, "current": 160, "weekToDate": 160, "deltaPct": 220.0, "activeUsersCurrent": 4, "previousWeek": 50}], "purchaseFunnel": [{"event": "in_app_purchase", "label": "Purchase completed", "baseline": 2, "current": 3, "weekToDate": 3, "deltaPct": 50.0, "tracked": true, "note": "Launch baseline: 6 purchases / $84.94"}, {"event": "go_ad_free_click", "label": "Go ad-free button clicked", "baseline": 0, "current": 0, "weekToDate": 0, "deltaPct": null, "tracked": false, "note": "Not found as a distinct GA4 event yet"}, {"event": "go_ad_free_purchase", "label": "Go ad-free purchase", "baseline": 0, "current": 0, "weekToDate": 0, "deltaPct": null, "tracked": false, "note": "Not separated from in_app_purchase yet"}, {"event": "video_purchase", "label": "Video purchase", "baseline": 0, "current": 0, "weekToDate": 0, "deltaPct": null, "tracked": false, "note": "Not found as a distinct GA4 event yet"}, {"event": "collection_purchase", "label": "Collection purchase", "baseline": 0, "current": 0, "weekToDate": 0, "deltaPct": null, "tracked": false, "note": "Not found as a distinct GA4 event yet"}], "purchaseTrend": [{"date": "Apr 13", "rawDate": "20260413", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 243, "first_open": 43, "app_open": 120, "play": 3103, "ads_impression": 3241}, {"date": "Apr 14", "rawDate": "20260414", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 206, "first_open": 31, "app_open": 118, "play": 3019, "ads_impression": 1257}, {"date": "Apr 15", "rawDate": "20260415", "purchaseRevenue": 14.99, "in_app_purchase": 1, "application_install": 241, "first_open": 33, "app_open": 148, "play": 3376, "ads_impression": 1785}, {"date": "Apr 16", "rawDate": "20260416", "purchaseRevenue": 74.96, "in_app_purchase": 4, "application_install": 777, "first_open": 470, "app_open": 295, "play": 5409, "ads_impression": 2610}, {"date": "Apr 17", "rawDate": "20260417", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 509, "first_open": 281, "app_open": 220, "play": 4568, "ads_impression": 3235}, {"date": "Apr 18", "rawDate": "20260418", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 447, "first_open": 210, "app_open": 171, "play": 4912, "ads_impression": 3708}, {"date": "Apr 19", "rawDate": "20260419", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 548, "first_open": 288, "app_open": 253, "play": 6614, "ads_impression": 4338}, {"date": "Apr 20", "rawDate": "20260420", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 421, "first_open": 219, "app_open": 291, "play": 5204, "ads_impression": 3072}, {"date": "Apr 21", "rawDate": "20260421", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 496, "first_open": 290, "app_open": 196, "play": 5050, "ads_impression": 3705}, {"date": "Apr 22", "rawDate": "20260422", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 530, "first_open": 301, "app_open": 275, "play": 6927, "ads_impression": 7715}, {"date": "Apr 23", "rawDate": "20260423", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 390, "first_open": 232, "app_open": 223, "play": 6170, "ads_impression": 7873}, {"date": "Apr 24", "rawDate": "20260424", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 564, "first_open": 373, "app_open": 244, "play": 6914, "ads_impression": 7448}, {"date": "Apr 25", "rawDate": "20260425", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 565, "first_open": 341, "app_open": 293, "play": 7676, "ads_impression": 9775}, {"date": "Apr 26", "rawDate": "20260426", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 616, "first_open": 394, "app_open": 321, "play": 7483, "ads_impression": 6755}, {"date": "Apr 27", "rawDate": "20260427", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 467, "first_open": 279, "app_open": 334, "play": 7291, "ads_impression": 7083}, {"date": "Apr 28", "rawDate": "20260428", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 619, "first_open": 431, "app_open": 249, "play": 7851, "ads_impression": 7222}, {"date": "Apr 29", "rawDate": "20260429", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 669, "first_open": 507, "app_open": 220, "play": 6956, "ads_impression": 6896}, {"date": "Apr 30", "rawDate": "20260430", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 543, "first_open": 403, "app_open": 273, "play": 8035, "ads_impression": 8464}, {"date": "May 1", "rawDate": "20260501", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 435, "first_open": 292, "app_open": 205, "play": 5452, "ads_impression": 7385}, {"date": "May 2", "rawDate": "20260502", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 486, "first_open": 304, "app_open": 225, "play": 5268, "ads_impression": 6962}, {"date": "May 3", "rawDate": "20260503", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 467, "first_open": 306, "app_open": 231, "play": 5865, "ads_impression": 6765}, {"date": "May 4", "rawDate": "20260504", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 371, "first_open": 240, "app_open": 203, "play": 7407, "ads_impression": 7368}, {"date": "May 5", "rawDate": "20260505", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 374, "first_open": 260, "app_open": 187, "play": 5578, "ads_impression": 6534}, {"date": "May 6", "rawDate": "20260506", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 409, "first_open": 284, "app_open": 211, "play": 6158, "ads_impression": 6954}, {"date": "May 7", "rawDate": "20260507", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 370, "first_open": 227, "app_open": 185, "play": 8621, "ads_impression": 5870}, {"date": "May 8", "rawDate": "20260508", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 351, "first_open": 236, "app_open": 203, "play": 5300, "ads_impression": 5719}, {"date": "May 9", "rawDate": "20260509", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 370, "first_open": 222, "app_open": 259, "play": 6274, "ads_impression": 5509}, {"date": "May 10", "rawDate": "20260510", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 384, "first_open": 264, "app_open": 221, "play": 6366, "ads_impression": 5118}, {"date": "May 11", "rawDate": "20260511", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 330, "first_open": 224, "app_open": 188, "play": 5729, "ads_impression": 5514}, {"date": "May 12", "rawDate": "20260512", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 614, "first_open": 496, "app_open": 212, "play": 8651, "ads_impression": 5890}, {"date": "May 13", "rawDate": "20260513", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 746, "first_open": 619, "app_open": 216, "play": 7493, "ads_impression": 4605}, {"date": "May 14", "rawDate": "20260514", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 806, "first_open": 689, "app_open": 279, "play": 7058, "ads_impression": 5406}, {"date": "May 15", "rawDate": "20260515", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 765, "first_open": 645, "app_open": 248, "play": 6903, "ads_impression": 5333}, {"date": "May 16", "rawDate": "20260516", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 801, "first_open": 662, "app_open": 261, "play": 6923, "ads_impression": 4107}, {"date": "May 17", "rawDate": "20260517", "purchaseRevenue": 29.99, "in_app_purchase": 1, "application_install": 832, "first_open": 690, "app_open": 288, "play": 7654, "ads_impression": 4846}, {"date": "May 18", "rawDate": "20260518", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 710, "first_open": 590, "app_open": 215, "play": 7392, "ads_impression": 4621}, {"date": "May 19", "rawDate": "20260519", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 697, "first_open": 572, "app_open": 234, "play": 6957, "ads_impression": 4641}, {"date": "May 20", "rawDate": "20260520", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 718, "first_open": 593, "app_open": 298, "play": 8314, "ads_impression": 5706}, {"date": "May 21", "rawDate": "20260521", "purchaseRevenue": 29.98, "in_app_purchase": 2, "application_install": 725, "first_open": 629, "app_open": 271, "play": 8218, "ads_impression": 5513}, {"date": "May 22", "rawDate": "20260522", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 631, "first_open": 520, "app_open": 242, "play": 7380, "ads_impression": 5449}, {"date": "May 23", "rawDate": "20260523", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 672, "first_open": 547, "app_open": 269, "play": 10744, "ads_impression": 3958}, {"date": "May 24", "rawDate": "20260524", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 709, "first_open": 584, "app_open": 267, "play": 7573, "ads_impression": 4753}, {"date": "May 25", "rawDate": "20260525", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 706, "first_open": 604, "app_open": 275, "play": 6993, "ads_impression": 4329}, {"date": "May 26", "rawDate": "20260526", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 639, "first_open": 541, "app_open": 220, "play": 7296, "ads_impression": 4180}, {"date": "May 27", "rawDate": "20260527", "purchaseRevenue": 9.99, "in_app_purchase": 1, "application_install": 711, "first_open": 610, "app_open": 295, "play": 9087, "ads_impression": 5114}, {"date": "May 28", "rawDate": "20260528", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 705, "first_open": 588, "app_open": 244, "play": 7341, "ads_impression": 4942}, {"date": "May 29", "rawDate": "20260529", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 685, "first_open": 568, "app_open": 265, "play": 8479, "ads_impression": 4805}, {"date": "May 30", "rawDate": "20260530", "purchaseRevenue": 27.58, "in_app_purchase": 2, "application_install": 675, "first_open": 554, "app_open": 254, "play": 6924, "ads_impression": 4587}, {"date": "May 31", "rawDate": "20260531", "purchaseRevenue": 0, "in_app_purchase": 0, "application_install": 713, "first_open": 625, "app_open": 250, "play": 7649, "ads_impression": 4648}], "platforms": [{"platform": "web", "baseline": {"platform": "web", "activeUsers": 2079, "newUsers": 1418, "sessions": 5045, "engagedSessions": 3939, "screenPageViews": 26316, "eventCount": 790606, "engagementRate": 78.0773042616452}, "previousWeek": {"platform": "web", "activeUsers": 1383, "sessions": 5536, "engagedSessions": 3714, "screenPageViews": 27014, "userEngagementDuration": 10004723, "eventCount": null, "engagementRate": 67.08815028901735}, "current": {"platform": "web", "activeUsers": 1592, "sessions": 5889, "engagedSessions": 3499, "screenPageViews": 28872, "userEngagementDuration": 9395265, "eventCount": null, "engagementRate": 59.415860078111734}, "activeUsersDeltaPct": 15.112075, "engagementRateCurrent": 59.415860078111734}, {"platform": "iOS", "baseline": {"platform": "iOS", "activeUsers": 2564, "newUsers": 1721, "sessions": 4186, "engagedSessions": 3522, "screenPageViews": 726, "eventCount": 92933, "engagementRate": 84.13760152890588}, "previousWeek": {"platform": "iOS", "activeUsers": 1194, "sessions": 2257, "engagedSessions": 1816, "screenPageViews": 1435, "userEngagementDuration": 5525087, "eventCount": null, "engagementRate": 80.46078865750998}, "current": {"platform": "iOS", "activeUsers": 1199, "sessions": 2323, "engagedSessions": 1753, "screenPageViews": 1565, "userEngagementDuration": 5621324, "eventCount": null, "engagementRate": 75.46276366767111}, "activeUsersDeltaPct": 0.41876, "engagementRateCurrent": 75.46276366767111}, {"platform": "Android", "baseline": {"platform": "Android", "activeUsers": 3277, "newUsers": 2369, "sessions": 5192, "engagedSessions": 4069, "screenPageViews": 2254, "eventCount": 120394, "engagementRate": 78.37057010785824}, "previousWeek": {"platform": "Android", "activeUsers": 969, "sessions": 2430, "engagedSessions": 1921, "screenPageViews": 4530, "userEngagementDuration": 5209401, "eventCount": null, "engagementRate": 79.05349794238683}, "current": {"platform": "Android", "activeUsers": 1006, "sessions": 2475, "engagedSessions": 1857, "screenPageViews": 4654, "userEngagementDuration": 5235238, "eventCount": null, "engagementRate": 75.03030303030303}, "activeUsersDeltaPct": 3.818369, "engagementRateCurrent": 75.03030303030303}], "platformMix": [{"platform": "iOS", "deviceCategory": "mobile", "operatingSystem": "iOS", "activeUsers": 1312, "sessions": 2219, "engagedSessions": 1735, "engagementRate": 78.188373, "eventCount": 51563, "totalEngagementSeconds": 2213272}, {"platform": "web", "deviceCategory": "smart tv", "operatingSystem": "(not set)", "activeUsers": 1133, "sessions": 3684, "engagedSessions": 2953, "engagementRate": 80.157438, "eventCount": 724768, "totalEngagementSeconds": 8504893}, {"platform": "Android", "deviceCategory": "mobile", "operatingSystem": "Android", "activeUsers": 789, "sessions": 1851, "engagedSessions": 1349, "engagementRate": 72.879525, "eventCount": 53054, "totalEngagementSeconds": 1180777}, {"platform": "iOS", "deviceCategory": "tablet", "operatingSystem": "iOS", "activeUsers": 251, "sessions": 524, "engagedSessions": 453, "engagementRate": 86.450382, "eventCount": 21161, "totalEngagementSeconds": 1424826}, {"platform": "web", "deviceCategory": "desktop", "operatingSystem": "(not set)", "activeUsers": 208, "sessions": 910, "engagedSessions": 568, "engagementRate": 62.417582, "eventCount": 41931, "totalEngagementSeconds": 821574}, {"platform": "Android", "deviceCategory": "smart tv", "operatingSystem": "Android", "activeUsers": 196, "sessions": 533, "engagedSessions": 501, "engagementRate": 93.996248, "eventCount": 43994, "totalEngagementSeconds": 3490003}, {"platform": "iOS", "deviceCategory": "smart tv", "operatingSystem": "iOS", "activeUsers": 107, "sessions": 258, "engagedSessions": 227, "engagementRate": 87.984496, "eventCount": 26966, "totalEngagementSeconds": 3444531}, {"platform": "web", "deviceCategory": "mobile", "operatingSystem": "(not set)", "activeUsers": 75, "sessions": 101, "engagedSessions": 63, "engagementRate": 62.376238, "eventCount": 1694, "totalEngagementSeconds": 12720}, {"platform": "Android", "deviceCategory": "tablet", "operatingSystem": "Android", "activeUsers": 70, "sessions": 172, "engagedSessions": 135, "engagementRate": 78.488372, "eventCount": 8219, "totalEngagementSeconds": 106733}, {"platform": "web", "deviceCategory": "tablet", "operatingSystem": "(not set)", "activeUsers": 18, "sessions": 61, "engagedSessions": 46, "engagementRate": 75.409836, "eventCount": 3353, "totalEngagementSeconds": 17361}], "acquisition": [{"sessionSourceMedium": "(direct) / (none)", "activeUsers": 3163, "newUsers": 1946, "sessions": 5386, "engagedSessions": 4405, "engagementRate": 81.7861121425919, "eventCount": 174483}, {"sessionSourceMedium": "apps.facebook.com / (not set)", "activeUsers": 1801, "newUsers": 1293, "sessions": 2575, "engagedSessions": 1940, "engagementRate": 75.33980582524272, "eventCount": 36707}, {"sessionSourceMedium": "homescreen / (not set)", "activeUsers": 719, "newUsers": 182, "sessions": 2274, "engagedSessions": 1965, "engagementRate": 86.41160949868075, "eventCount": 460155}, {"sessionSourceMedium": "google / organic", "activeUsers": 389, "newUsers": 326, "sessions": 632, "engagedSessions": 556, "engagementRate": 87.9746835443038, "eventCount": 13407}, {"sessionSourceMedium": "google-play / organic", "activeUsers": 293, "newUsers": 187, "sessions": 501, "engagedSessions": 423, "engagementRate": 84.4311377245509, "eventCount": 27093}, {"sessionSourceMedium": "(not set)", "activeUsers": 88, "newUsers": 9, "sessions": 501, "engagedSessions": 0, "engagementRate": 0.0, "eventCount": 58150}, {"sessionSourceMedium": "hs-search / (not set)", "activeUsers": 64, "newUsers": 14, "sessions": 449, "engagedSessions": 394, "engagementRate": 87.75055679287304, "eventCount": 100637}, {"sessionSourceMedium": "apps.instagram.com / (not set)", "activeUsers": 294, "newUsers": 215, "sessions": 413, "engagedSessions": 313, "engagementRate": 75.78692493946731, "eventCount": 7728}, {"sessionSourceMedium": "apps.facebook.com / (none)", "activeUsers": 32, "newUsers": 0, "sessions": 157, "engagedSessions": 120, "engagementRate": 76.43312101910828, "eventCount": 847}, {"sessionSourceMedium": "fb / paid", "activeUsers": 107, "newUsers": 18, "sessions": 138, "engagedSessions": 108, "engagementRate": 78.26086956521739, "eventCount": 1598}, {"sessionSourceMedium": "bing / organic", "activeUsers": 59, "newUsers": 38, "sessions": 121, "engagedSessions": 109, "engagementRate": 90.08264462809917, "eventCount": 8388}, {"sessionSourceMedium": "channel-store / (not set)", "activeUsers": 20, "newUsers": 8, "sessions": 102, "engagedSessions": 97, "engagementRate": 95.09803921568627, "eventCount": 23065}], "topPages": [{"screen": "(not set)", "path": "(not set)", "activeUsers": 6175, "sessions": 11787, "engagedSessions": 9080, "screenPageViews": 3288, "eventCount": 865150, "totalEngagementSeconds": 11715096}, {"screen": "Splash", "path": "(not set)", "activeUsers": 1444, "sessions": 3762, "engagedSessions": 3148, "screenPageViews": 3905, "eventCount": 4920, "totalEngagementSeconds": 2674}, {"screen": "Intro", "path": "(not set)", "activeUsers": 1226, "sessions": 2660, "engagedSessions": 2179, "screenPageViews": 2744, "eventCount": 2992, "totalEngagementSeconds": 20006}, {"screen": "On Demand", "path": "(not set)", "activeUsers": 898, "sessions": 2961, "engagedSessions": 2790, "screenPageViews": 3428, "eventCount": 4018, "totalEngagementSeconds": 39317}, {"screen": "ElectricNOW", "path": "/landing", "activeUsers": 744, "sessions": 1078, "engagedSessions": 994, "screenPageViews": 1434, "eventCount": 2439, "totalEngagementSeconds": 15031}, {"screen": "ElectricNOW", "path": "/", "activeUsers": 680, "sessions": 1052, "engagedSessions": 1004, "screenPageViews": 1879, "eventCount": 4852, "totalEngagementSeconds": 13744}, {"screen": "PDP", "path": "(not set)", "activeUsers": 372, "sessions": 1771, "engagedSessions": 1699, "screenPageViews": 3484, "eventCount": 3862, "totalEngagementSeconds": 18937}, {"screen": "ElectricNOW", "path": "/live-tv", "activeUsers": 285, "sessions": 851, "engagedSessions": 769, "screenPageViews": 1896, "eventCount": 42898, "totalEngagementSeconds": 511507}, {"screen": "Live", "path": "(not set)", "activeUsers": 161, "sessions": 1058, "engagedSessions": 1036, "screenPageViews": 1790, "eventCount": 24271, "totalEngagementSeconds": 4968273}, {"screen": "Category", "path": "(not set)", "activeUsers": 133, "sessions": 232, "engagedSessions": 231, "screenPageViews": 346, "eventCount": 375, "totalEngagementSeconds": 3082}, {"screen": "ElectricNOW", "path": "/devices", "activeUsers": 131, "sessions": 139, "engagedSessions": 59, "screenPageViews": 161, "eventCount": 591, "totalEngagementSeconds": 1469}, {"screen": "ElectricNOW", "path": "/profiles", "activeUsers": 97, "sessions": 144, "engagedSessions": 139, "screenPageViews": 178, "eventCount": 215, "totalEngagementSeconds": 960}, {"screen": "ElectricNOW", "path": "/english", "activeUsers": 87, "sessions": 116, "engagedSessions": 105, "screenPageViews": 176, "eventCount": 248, "totalEngagementSeconds": 4699}, {"screen": "Player", "path": "(not set)", "activeUsers": 85, "sessions": 1364, "engagedSessions": 1353, "screenPageViews": 2712, "eventCount": 23735, "totalEngagementSeconds": 636082}, {"screen": "Search Channels", "path": "(not set)", "activeUsers": 77, "sessions": 208, "engagedSessions": 207, "screenPageViews": 700, "eventCount": 799, "totalEngagementSeconds": 2221}, {"screen": "ElectricNOW", "path": "/search", "activeUsers": 44, "sessions": 50, "engagedSessions": 50, "screenPageViews": 55, "eventCount": 217, "totalEngagementSeconds": 165}, {"screen": "My Stuff", "path": "(not set)", "activeUsers": 40, "sessions": 124, "engagedSessions": 124, "screenPageViews": 301, "eventCount": 301, "totalEngagementSeconds": 0}, {"screen": "Settings", "path": "(not set)", "activeUsers": 37, "sessions": 75, "engagedSessions": 75, "screenPageViews": 182, "eventCount": 229, "totalEngagementSeconds": 3306}, {"screen": "ElectricNOW", "path": "/shows/leverage", "activeUsers": 34, "sessions": 38, "engagedSessions": 37, "screenPageViews": 49, "eventCount": 154, "totalEngagementSeconds": 145}, {"screen": "ElectricNOW", "path": "/shows/leverage-redemption", "activeUsers": 28, "sessions": 29, "engagedSessions": 28, "screenPageViews": 34, "eventCount": 114, "totalEngagementSeconds": 144}, {"screen": "Search | Spotlight TV", "path": "/search", "activeUsers": 26, "sessions": 31, "engagedSessions": 31, "screenPageViews": 48, "eventCount": 53, "totalEngagementSeconds": 776}, {"screen": "ElectricNOW", "path": "/watch/the-ark-2", "activeUsers": 22, "sessions": 39, "engagedSessions": 38, "screenPageViews": 199, "eventCount": 3456, "totalEngagementSeconds": 136401}, {"screen": "Leverage: Redemption - Season 3 | ElectricNOW", "path": "/", "activeUsers": 21, "sessions": 22, "engagedSessions": 22, "screenPageViews": 38, "eventCount": 48, "totalEngagementSeconds": 1271}, {"screen": "ElectricNOW", "path": "/watch/almost-paradise-1", "activeUsers": 20, "sessions": 27, "engagedSessions": 27, "screenPageViews": 128, "eventCount": 2220, "totalEngagementSeconds": 72297}, {"screen": "About Us", "path": "(not set)", "activeUsers": 18, "sessions": 52, "engagedSessions": 52, "screenPageViews": 59, "eventCount": 59, "totalEngagementSeconds": 0}, {"screen": "Connect with us", "path": "(not set)", "activeUsers": 18, "sessions": 52, "engagedSessions": 52, "screenPageViews": 59, "eventCount": 59, "totalEngagementSeconds": 0}, {"screen": "Privacy Policy", "path": "(not set)", "activeUsers": 18, "sessions": 52, "engagedSessions": 52, "screenPageViews": 59, "eventCount": 59, "totalEngagementSeconds": 0}, {"screen": "Terms of use", "path": "(not set)", "activeUsers": 18, "sessions": 52, "engagedSessions": 52, "screenPageViews": 59, "eventCount": 59, "totalEngagementSeconds": 0}, {"screen": "The Ark | ElectricNOW", "path": "/", "activeUsers": 16, "sessions": 24, "engagedSessions": 24, "screenPageViews": 39, "eventCount": 47, "totalEngagementSeconds": 2538}, {"screen": "ElectricNOW", "path": "/shows/librarians", "activeUsers": 16, "sessions": 16, "engagedSessions": 13, "screenPageViews": 18, "eventCount": 64, "totalEngagementSeconds": 42}], "liveTv": {"baseline": {"activeUsers": 437, "sessions": 1878, "engagedSessions": 1801, "screenPageViews": 3524, "eventCount": 50603}, "current": {"activeUsers": 444, "sessions": 1964, "engagedSessions": 1837, "screenPageViews": 3784, "eventCount": 62812}, "deltas": {"activeUsers": 1.6018306636155606, "sessions": 4.579339723109691, "engagedSessions": 1.9988895058300944, "screenPageViews": 7.377979568671964, "eventCount": 24.127028041815702}, "engagementRateBaseline": 95.89989350372737, "engagementRateCurrent": 93.5336048879837, "weekToDate": {"activeUsers": 444, "sessions": 1964, "engagedSessions": 1837, "screenPageViews": 3784, "eventCount": 62812}, "engagementRateWeekToDate": 93.5336048879837}, "plainEnglishInsights": ["The strongest current signal is sales and downloads: the latest Jul 26-Aug 1 Apple snapshot shows 405 iOS downloads and $683.90 in Apple gross sales, while the fresh Stripe connector shows 36 valid Stripe charges totaling $749.64 for the same seven-day window. Together, known Apple+Stripe visible sales for the week were $1433.54, and visible platform YTD sales now stand at 137 known purchases / $3368.52. Traffic/reach from the last full GA4 window remains positive, with active users up 8.7%, sessions up 11.2%, new users up 13.7%, and screen/page views up 8.6%; engagement depth remains the caveat, with engaged sessions and engagement rate softer in the last audited GA4 period.", "Sales: Stripe is freshly updated and Apple manual screenshots are freshly updated. Roku sales are preserved from the last-good Roku Sales Activity source rather than zeroed.", "Apple manual update: Jul 26-Aug 1 produced 405 iOS downloads and $683.90 in gross Apple sales. This supersedes the overlapping Jul 24-Jul 30 Apple aggregate, so the dashboard avoids double-counting.", "Stripe update: the connector is working. The Jul 26-Aug 1 pull found 36 valid paid/captured/succeeded/non-refunded charges totaling $749.64; 10 missing charge IDs totaling $209.90 were added to the dashboard and already-present charge IDs were not counted twice.", "Visible platform sales: YTD visible sales are now 137 known purchases / $3368.52. This is Stripe + Roku + manual Apple only; it is not total ElectricNOW sales because some app-store/platform channels may be missing.", "Paid acquisition verdict: acceptable but needs proof of viewing. Existing Google Ads/Meta sections should still be read directionally unless fresh ad-source pulls are available; paid-campaign impressions remain separate from ElectricNOW in-app or YouTube ad impressions, and true ROAS is not implied because ad-server revenue is unavailable for a complete matchback.", "Next tests: keep pushing The Ark and other high-intent title creative, separate iOS and Android measurement/budgets, shift budget toward audiences that convert into viewing time and sales, exclude weak segments, and keep checking install-to-viewing quality before scaling spend."], "instrumentationGaps": ["No separate GA4 event found for go_ad_free_click yet.", "No separate GA4 event found for video_purchase yet.", "No separate GA4 event found for collection_purchase yet.", "Stripe is now one visible sales source in the dashboard; total sales still require Apple App Store and Google Play reporting, and GA4 purchase events still need to be split into go-ad-free, individual video, and collection purchase actions.", "Live TV should be reconciled with Amagi and ad-server reporting."], "salesSummary": {"sourceLabel": "Visible platform sales", "sourceDetail": "Visible platform sales combine Stripe-visible net payments (fully rebuilt Jul 31, 2026 from the complete valid charge set: 78 of 100 returned charges), Roku-visible sales from Roku email reports, and manual Apple App Store sales snapshots. Google Play and other stores may be missing, so this is not total ElectricNOW sales.", "stripe": {"sourceLabel": "Stripe-visible net payments", "sourceDetail": "Stripe connector refreshed Aug 2, 2026. Current seven-day pull returned 36 valid paid/captured/succeeded/non-refunded charges totaling $749.64. Ten valid charges totaling $209.90 were not yet in the dashboard and were added by charge ID; already-present charges were not double-counted. Stripe visible YTD is now 88/$1822.11.", "baselineWindow": {"label": "Stripe launch baseline", "range": "Apr 13-Apr 19, 2026", "purchases": 4, "purchaseRevenue": 54.96, "revenuePerPurchase": 13.74, "deltaPurchasesPct": null, "deltaRevenuePct": null, "detail": "Stripe shows 4 visible payments totaling $54.96 during the prior complete week."}, "yearToDate": {"label": "Stripe net sales this year", "range": "Jan 1-Aug 1, 2026", "purchases": 88, "purchaseRevenue": 1822.11, "revenuePerPurchase": 20.71, "payments": [{"id": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt", "date": "Aug 1", "createdAt": "2026-08-02T02:59:21Z", "sortDate": "2026-08-02T02:59:21Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt", "stripePaymentIntentId": "pi_3TzpcTLG0Cw1zW4e2ONdvaRi", "orderId": "itr-2026080202592092", "contentId": null, "contentTitle": null}, {"id": "ch_3TzmDeLG0Cw1zW4e1hSM76p5", "date": "Aug 1", "createdAt": "2026-08-01T23:21:31Z", "sortDate": "2026-08-01T23:21:31Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzmDeLG0Cw1zW4e1hSM76p5", "stripePaymentIntentId": "pi_3TzmDeLG0Cw1zW4e1DjlcMXo", "orderId": "baa-2026080123213055", "contentId": null, "contentTitle": null}, {"id": "ch_3TzUsaLG0Cw1zW4e1E2iPagJ", "date": "Jul 31", "createdAt": "2026-08-01T04:50:37Z", "sortDate": "2026-08-01T04:50:37Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzUsaLG0Cw1zW4e1E2iPagJ", "stripePaymentIntentId": "pi_3TzUsaLG0Cw1zW4e1tfWkCsi", "orderId": "sas-2026080104503658", "contentId": null, "contentTitle": null}, {"id": "ch_3TzUOVLG0Cw1zW4e1cL58jI6", "date": "Jul 31", "createdAt": "2026-08-01T04:19:31Z", "sortDate": "2026-08-01T04:19:31Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzUOVLG0Cw1zW4e1cL58jI6", "stripePaymentIntentId": "pi_3TzUOVLG0Cw1zW4e1RwTB9hv", "orderId": "wew-2026080104193090", "contentId": null, "contentTitle": null}, {"id": "ch_3TzUKMLG0Cw1zW4e2kKfWreG", "date": "Jul 31", "createdAt": "2026-08-01T04:15:14Z", "sortDate": "2026-08-01T04:15:14Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzUKMLG0Cw1zW4e2kKfWreG", "stripePaymentIntentId": "pi_3TzUKMLG0Cw1zW4e2H29Ygkt", "orderId": "pyy-2026080104151396", "contentId": null, "contentTitle": null}, {"id": "ch_3TzS18LG0Cw1zW4e0gJjIT5t", "date": "Jul 31", "createdAt": "2026-08-01T01:47:14Z", "sortDate": "2026-08-01T01:47:14Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzS18LG0Cw1zW4e0gJjIT5t", "stripePaymentIntentId": "pi_3TzS18LG0Cw1zW4e0ZkxzNE3", "orderId": "gol-2026080101471383", "contentId": null, "contentTitle": null}, {"id": "ch_3TzR9FLG0Cw1zW4e1mPMQLV7", "date": "Jul 31", "createdAt": "2026-08-01T00:51:33Z", "sortDate": "2026-08-01T00:51:33Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzR9FLG0Cw1zW4e1mPMQLV7", "stripePaymentIntentId": "pi_3TzR9FLG0Cw1zW4e1C46ZvYS", "orderId": "bag-2026080100513319", "contentId": null, "contentTitle": null}, {"id": "ch_3TzQHKLG0Cw1zW4e0m2DJ4QH", "date": "Jul 31", "createdAt": "2026-07-31T23:55:50Z", "sortDate": "2026-07-31T23:55:50Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzQHKLG0Cw1zW4e0m2DJ4QH", "stripePaymentIntentId": "pi_3TzQHKLG0Cw1zW4e0PP1u8tL", "orderId": "brr-2026073123554977", "contentId": null, "contentTitle": null}, {"id": "ch_3TzJehLG0Cw1zW4e0ZafeOP1", "date": "Jul 31", "createdAt": "2026-07-31T16:51:32Z", "sortDate": "2026-07-31T16:51:32Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzJehLG0Cw1zW4e0ZafeOP1", "stripePaymentIntentId": "pi_3TzJehLG0Cw1zW4e0PvTBJus", "orderId": "com-2026073116513172", "contentId": null, "contentTitle": null}, {"id": "ch_3TzJNXLG0Cw1zW4e0nCG3w5s", "date": "Jul 31", "createdAt": "2026-07-31T16:33:48Z", "sortDate": "2026-07-31T16:33:48Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzJNXLG0Cw1zW4e0nCG3w5s", "stripePaymentIntentId": "pi_3TzJNXLG0Cw1zW4e0huvDWSP", "orderId": "sah-2026073116334765", "contentId": null, "contentTitle": null}, {"id": "ch_3TzEFKLG0Cw1zW4e23n3fXCE", "date": "Jul 31", "createdAt": "2026-07-31T11:04:59Z", "sortDate": "2026-07-31T11:04:59Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzEFKLG0Cw1zW4e23n3fXCE", "stripePaymentIntentId": "pi_3TzEFKLG0Cw1zW4e2BhEcfTJ", "orderId": "spc-2026073111045857", "contentId": null, "contentTitle": null}, {"id": "ch_3TzCUiLG0Cw1zW4e16ILLnfy", "date": "Jul 31", "createdAt": "2026-07-31T09:12:45Z", "sortDate": "2026-07-31T09:12:45Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzCUiLG0Cw1zW4e16ILLnfy", "stripePaymentIntentId": "pi_3TzCUiLG0Cw1zW4e1e6IMbcp", "orderId": "boj-2026073109124470", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs", "date": "Jul 31", "createdAt": "2026-07-31T03:44:17Z", "sortDate": "2026-07-31T03:44:17Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs", "stripePaymentIntentId": "pi_3Tz7MrLG0Cw1zW4e0nFPqa1h", "orderId": "gaj-2026073103441719", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd", "date": "Jul 31", "createdAt": "2026-07-31T03:40:22Z", "sortDate": "2026-07-31T03:40:22Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd", "stripePaymentIntentId": "pi_3Tz7J4LG0Cw1zW4e0HUD0BHa", "orderId": "coj-2026073103402209", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR", "date": "Jul 31", "createdAt": "2026-07-31T03:29:27Z", "sortDate": "2026-07-31T03:29:27Z", "amount": 20.99, "description": "Anonymous Customer - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR", "stripePaymentIntentId": "pi_3Tz78ULG0Cw1zW4e0tM1JWeq", "orderId": "huc-2026073103292664", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv", "date": "Jul 31", "createdAt": "2026-07-31T00:16:09Z", "sortDate": "2026-07-31T00:16:09Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv", "stripePaymentIntentId": "pi_3Tz47RLG0Cw1zW4e1FYzc0le", "orderId": "taj-2026073100160920", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz3MsLG0Cw1zW4e00hGznTV", "date": "Jul 30", "createdAt": "2026-07-30T23:28:02Z", "sortDate": "2026-07-30T23:28:02Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz3MsLG0Cw1zW4e00hGznTV", "stripePaymentIntentId": "pi_3Tz3MsLG0Cw1zW4e0mjh6SJz", "orderId": "gud-2026073023280174", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz301LG0Cw1zW4e1OHOZPHl", "date": "Jul 30", "createdAt": "2026-07-30T23:04:26Z", "sortDate": "2026-07-30T23:04:26Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz301LG0Cw1zW4e1OHOZPHl", "stripePaymentIntentId": "pi_3Tz301LG0Cw1zW4e1ZokiUw6", "orderId": "war-2026073023042542", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7", "date": "Jul 30", "createdAt": "2026-07-30T22:05:40Z", "sortDate": "2026-07-30T22:05:40Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7", "stripePaymentIntentId": "pi_3Tz25ALG0Cw1zW4e2WFGOneD", "orderId": "dar-2026073022054001", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK", "date": "Jul 30", "createdAt": "2026-07-30T21:16:17Z", "sortDate": "2026-07-30T21:16:17Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK", "stripePaymentIntentId": "pi_3Tz1JNLG0Cw1zW4e10c2mJD9", "orderId": "kot-2026073021161666", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz1ANLG0Cw1zW4e0UQ7AKMZ", "date": "Jul 30", "createdAt": "2026-07-30T21:06:59Z", "sortDate": "2026-07-30T21:06:59Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz1ANLG0Cw1zW4e0UQ7AKMZ", "stripePaymentIntentId": "pi_3Tz1ANLG0Cw1zW4e0p7QtHKt", "orderId": "crj-2026073021065903", "contentId": null, "contentTitle": null}, {"id": "ch_3TyzCmLG0Cw1zW4e0OkN3IXD", "date": "Jul 30", "createdAt": "2026-07-30T19:01:20Z", "sortDate": "2026-07-30T19:01:20Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyzCmLG0Cw1zW4e0OkN3IXD", "stripePaymentIntentId": "pi_3TyzCmLG0Cw1zW4e0B1Gtod3", "orderId": "ind-2026073019012018", "contentId": null, "contentTitle": null}, {"id": "ch_3TyvJZLG0Cw1zW4e29PYVKoH", "date": "Jul 30", "createdAt": "2026-07-30T14:52:05Z", "sortDate": "2026-07-30T14:52:05Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyvJZLG0Cw1zW4e29PYVKoH", "stripePaymentIntentId": "pi_3TyvJZLG0Cw1zW4e2Xwr2Ngh", "orderId": "fis-2026073014520532", "contentId": null, "contentTitle": null}, {"id": "ch_3TyuURLG0Cw1zW4e2bpnTqLk", "date": "Jul 30", "createdAt": "2026-07-30T13:59:15Z", "sortDate": "2026-07-30T13:59:15Z", "amount": 20.99, "description": "Anonymous Customer - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyuURLG0Cw1zW4e2bpnTqLk", "stripePaymentIntentId": "pi_3TyuURLG0Cw1zW4e2dGOkWT1", "orderId": "bas-2026073013591485", "contentId": null, "contentTitle": null}, {"id": "ch_3Tyu2VLG0Cw1zW4e0luUxo96", "date": "Jul 30", "createdAt": "2026-07-30T13:30:23Z", "sortDate": "2026-07-30T13:30:23Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tyu2VLG0Cw1zW4e0luUxo96", "stripePaymentIntentId": "pi_3Tyu2VLG0Cw1zW4e00p70EBS", "orderId": "bom-2026073013302344", "contentId": null, "contentTitle": null}, {"id": "ch_3TytxLLG0Cw1zW4e2FpZ4FHc", "date": "Jul 30", "createdAt": "2026-07-30T13:25:03Z", "sortDate": "2026-07-30T13:25:03Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TytxLLG0Cw1zW4e2FpZ4FHc", "stripePaymentIntentId": "pi_3TytxLLG0Cw1zW4e2jaqTlD5", "orderId": "bed-2026073013250321", "contentId": null, "contentTitle": null}, {"id": "ch_3TytpLLG0Cw1zW4e2mlSZtpI", "date": "Jul 30", "createdAt": "2026-07-30T13:16:48Z", "sortDate": "2026-07-30T13:16:48Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TytpLLG0Cw1zW4e2mlSZtpI", "stripePaymentIntentId": "pi_3TytpLLG0Cw1zW4e2Uk4gTJE", "orderId": "tid-2026073013164763", "contentId": null, "contentTitle": null}, {"id": "ch_3Tys4oLG0Cw1zW4e18cjs5pa", "date": "Jul 30", "createdAt": "2026-07-30T11:24:38Z", "sortDate": "2026-07-30T11:24:38Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tys4oLG0Cw1zW4e18cjs5pa", "stripePaymentIntentId": "pi_3Tys4oLG0Cw1zW4e1EqfS7yB", "orderId": "ann-2026073011243826", "contentId": null, "contentTitle": null}, {"id": "ch_3TyrAVLG0Cw1zW4e1FifKDmF", "date": "Jul 30", "createdAt": "2026-07-30T10:26:27Z", "sortDate": "2026-07-30T10:26:27Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyrAVLG0Cw1zW4e1FifKDmF", "stripePaymentIntentId": "pi_3TyrAVLG0Cw1zW4e16XWG5po", "orderId": "paj-2026073010262706", "contentId": null, "contentTitle": null}, {"id": "ch_3Tyq1cLG0Cw1zW4e2FB0Tk9a", "date": "Jul 30", "createdAt": "2026-07-30T09:13:13Z", "sortDate": "2026-07-30T09:13:13Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tyq1cLG0Cw1zW4e2FB0Tk9a", "stripePaymentIntentId": "pi_3Tyq1cLG0Cw1zW4e2sUdkqzy", "orderId": "mec-2026073009131248", "contentId": null, "contentTitle": null}, {"id": "ch_3TypI6LG0Cw1zW4e1qSCh6i3", "date": "Jul 30", "createdAt": "2026-07-30T08:26:10Z", "sortDate": "2026-07-30T08:26:10Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TypI6LG0Cw1zW4e1qSCh6i3", "stripePaymentIntentId": "pi_3TypI6LG0Cw1zW4e1DWOdzwV", "orderId": "pem-2026073008261037", "contentId": null, "contentTitle": null}, {"id": "ch_3Tyot3LG0Cw1zW4e0qLYtbmV", "date": "Jul 30", "createdAt": "2026-07-30T08:00:17Z", "sortDate": "2026-07-30T08:00:17Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tyot3LG0Cw1zW4e0qLYtbmV", "stripePaymentIntentId": "pi_3Tyot3LG0Cw1zW4e065eK1tE", "orderId": "jom-2026073008001694", "contentId": null, "contentTitle": null}, {"id": "ch_3TyUuPLG0Cw1zW4e2UIrqDbg", "date": "Jul 29", "createdAt": "2026-07-29T10:40:21Z", "sortDate": "2026-07-29T10:40:21Z", "amount": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyUuPLG0Cw1zW4e2UIrqDbg", "stripePaymentIntentId": "pi_3TyUuPLG0Cw1zW4e2XnL5rB4", "orderId": "paj-2026072910402080", "contentId": null, "contentTitle": null}, {"id": "ch_3Txt8TLG0Cw1zW4e0nsHWvcG", "date": "Jul 27", "createdAt": "2026-07-27T18:20:21Z", "sortDate": "2026-07-27T18:20:21Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Txt8TLG0Cw1zW4e0nsHWvcG", "stripePaymentIntentId": "pi_3Txt8TLG0Cw1zW4e0n5w12v6", "orderId": "jom-2026072718202102", "contentId": null, "contentTitle": null}, {"id": "ch_3Txt79LG0Cw1zW4e1I51WlLH", "date": "Jul 27", "createdAt": "2026-07-27T18:18:59Z", "sortDate": "2026-07-27T18:18:59Z", "amount": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Txt79LG0Cw1zW4e1I51WlLH", "stripePaymentIntentId": "pi_3Txt79LG0Cw1zW4e1zbs8Q3n", "orderId": "jom-2026072718185937", "contentId": null, "contentTitle": null}, {"id": "ch_3TxbcULG0Cw1zW4e1fG5wBI6", "date": "Jul 26", "createdAt": "2026-07-26T23:38:10Z", "sortDate": "2026-07-26T23:38:10Z", "amount": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TxbcULG0Cw1zW4e1fG5wBI6", "stripePaymentIntentId": "pi_3TxbcULG0Cw1zW4e1VCvW9gh", "orderId": "jom-2026072623381034", "contentId": null, "contentTitle": null}, {"id": "ch_3Tvm3yLG0Cw1zW4e0BJSXl2H", "date": "Jul 21", "createdAt": "2026-07-21T22:22:58Z", "sortDate": "2026-07-21T22:22:58Z", "amount": 19.98, "description": "Anonymous Customer - Purchase Bundle 20: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tvm3yLG0Cw1zW4e0BJSXl2H", "stripePaymentIntentId": "pi_3Tvm3yLG0Cw1zW4e0RuTrDfP", "orderId": "met-2026072122225793", "contentId": null, "contentTitle": null}, {"id": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV", "date": "Jun 27", "createdAt": "2026-06-27T21:53:44Z", "sortDate": "2026-06-27T21:53:44Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV", "stripePaymentIntentId": "pi_3Tn4AWLG0Cw1zW4e2lZs02fb", "orderId": "jak-2026062721534447", "contentId": null, "contentTitle": null}, {"id": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7", "date": "Jun 15", "createdAt": "2026-06-15T13:18:05Z", "sortDate": "2026-06-15T13:18:05Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7", "stripePaymentIntentId": "pi_3TiaOvLG0Cw1zW4e1J9vWz96", "orderId": "moj-2026061513180484", "contentId": null, "contentTitle": null}, {"id": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi", "date": "Jun 12", "createdAt": "2026-06-12T23:06:49Z", "sortDate": "2026-06-12T23:06:49Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi", "stripePaymentIntentId": "pi_3TheA0LG0Cw1zW4e2ajY663E", "orderId": "tub-2026061223064851", "contentId": null, "contentTitle": null}, {"id": "ch_3Tc8fSLG0Cw1zW4e0JGS5fDH", "date": "May 28", "createdAt": "2026-05-28T18:28:30Z", "sortDate": "2026-05-28T18:28:30Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tc8fSLG0Cw1zW4e0JGS5fDH", "stripePaymentIntentId": "pi_3Tc8fSLG0Cw1zW4e0aRnmEQw", "orderId": "smd-2026052818283000", "contentId": null, "contentTitle": null}, {"id": "ch_3TYIl0LG0Cw1zW4e25Rk2nkG", "date": "May 18", "createdAt": "2026-05-18T04:26:22Z", "sortDate": "2026-05-18T04:26:22Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TYIl0LG0Cw1zW4e25Rk2nkG", "stripePaymentIntentId": "pi_3TYIl0LG0Cw1zW4e29yDkQvy", "orderId": "mcb-2026051804262176", "contentId": null, "contentTitle": null}, {"id": "ch_3TXC7jLG0Cw1zW4e0RRivOUl", "date": "May 15", "createdAt": "2026-05-15T03:09:15Z", "sortDate": "2026-05-15T03:09:15Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TXC7jLG0Cw1zW4e0RRivOUl", "stripePaymentIntentId": "pi_3TXC7jLG0Cw1zW4e0aTDzJEJ", "orderId": "amr-2026051503091512", "contentId": null, "contentTitle": null}, {"id": "ch_3TU0PpLG0Cw1zW4e1Qz5eWBw", "date": "May 6", "createdAt": "2026-05-06T08:02:45Z", "sortDate": "2026-05-06T08:02:45Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TU0PpLG0Cw1zW4e1Qz5eWBw", "stripePaymentIntentId": "pi_3TU0PpLG0Cw1zW4e1xA1B4CB", "orderId": "mcj-2026050608024483", "contentId": null, "contentTitle": null}, {"id": "ch_3TQfbqLG0Cw1zW4e05VOck3Z", "date": "Apr 27", "createdAt": "2026-04-27T03:13:22Z", "sortDate": "2026-04-27T03:13:22Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TQfbqLG0Cw1zW4e05VOck3Z", "stripePaymentIntentId": "pi_3TQfbqLG0Cw1zW4e0xCVetD1", "orderId": "paj-2026042703132246", "contentId": null, "contentTitle": null}, {"id": "ch_3TPsMQLG0Cw1zW4e10Y4DH94", "date": "Apr 24", "createdAt": "2026-04-24T22:38:11Z", "sortDate": "2026-04-24T22:38:11Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TPsMQLG0Cw1zW4e10Y4DH94", "stripePaymentIntentId": "pi_3TPsMQLG0Cw1zW4e1KupKuAF", "orderId": "jas-2026042422381072", "contentId": null, "contentTitle": null}, {"id": "ch_3TP3uxLG0Cw1zW4e0Bc1E9wU", "date": "Apr 22", "createdAt": "2026-04-22T16:46:28Z", "sortDate": "2026-04-22T16:46:28Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TP3uxLG0Cw1zW4e0Bc1E9wU", "stripePaymentIntentId": "pi_3TP3uxLG0Cw1zW4e0LSedyYu", "orderId": "had-2026042216462753", "contentId": null, "contentTitle": null}, {"id": "ch_3TOx2ZLG0Cw1zW4e1kfcn4xI", "date": "Apr 22", "createdAt": "2026-04-22T09:25:51Z", "sortDate": "2026-04-22T09:25:51Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TOx2ZLG0Cw1zW4e1kfcn4xI", "stripePaymentIntentId": "pi_3TOx2ZLG0Cw1zW4e1W7SJZXg", "orderId": "vec-2026042209255089", "contentId": null, "contentTitle": null}, {"id": "ch_3TOTAALG0Cw1zW4e0mRRpkrF", "date": "Apr 21", "createdAt": "2026-04-21T01:31:42Z", "sortDate": "2026-04-21T01:31:42Z", "amount": 14.99, "description": "Anonymous Customer - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TOTAALG0Cw1zW4e0mRRpkrF", "stripePaymentIntentId": "pi_3TOTAALG0Cw1zW4e0dIkMbV1", "orderId": "mig-2026042101314189", "contentId": null, "contentTitle": null}, {"id": "ch_3TNjaVLG0Cw1zW4e2DKoJF6H", "date": "Apr 19", "createdAt": "2026-04-19T00:51:51Z", "sortDate": "2026-04-19T00:51:51Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TNjaVLG0Cw1zW4e2DKoJF6H", "stripePaymentIntentId": "pi_3TNjaVLG0Cw1zW4e2up0QKdp", "orderId": "shc-2026041900515126", "contentId": null, "contentTitle": null}, {"id": "ch_3TN1fjLG0Cw1zW4e1LDsMhNA", "date": "Apr 17", "createdAt": "2026-04-17T01:58:20Z", "sortDate": "2026-04-17T01:58:20Z", "amount": 9.99, "description": "Customer User - Purchase Bundle 10: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TN1fjLG0Cw1zW4e1LDsMhNA", "stripePaymentIntentId": "pi_3TN1fjLG0Cw1zW4e1efwz7Hc", "orderId": "cae-2026041701581961", "contentId": null, "contentTitle": null}, {"id": "ch_3TMxdiLG0Cw1zW4e0SJiBjPo", "date": "Apr 16", "createdAt": "2026-04-16T21:39:58Z", "sortDate": "2026-04-16T21:39:58Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TMxdiLG0Cw1zW4e0SJiBjPo", "stripePaymentIntentId": "pi_3TMxdiLG0Cw1zW4e0ApnxCmW", "orderId": "jom-2026041621395774", "contentId": null, "contentTitle": null}, {"id": "ch_3TMxZHLG0Cw1zW4e0SlNjQzx", "date": "Apr 16", "createdAt": "2026-04-16T21:35:24Z", "sortDate": "2026-04-16T21:35:24Z", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TMxZHLG0Cw1zW4e0SlNjQzx", "stripePaymentIntentId": "pi_3TMxZHLG0Cw1zW4e0RXKnWOb", "orderId": "jom-2026041621352354", "contentId": null, "contentTitle": null}, {"id": "ch_3T45wBLG0Cw1zW4e1ah1kA3Y", "date": "Feb 23", "createdAt": "2026-02-23T20:41:03Z", "sortDate": "2026-02-23T20:41:03Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3T45wBLG0Cw1zW4e1ah1kA3Y", "stripePaymentIntentId": null, "orderId": "1000", "contentId": null, "contentTitle": null}, {"id": "ch_3T0YwGLG0Cw1zW4e1qfmMfux", "date": "Feb 14", "createdAt": "2026-02-14T02:50:32Z", "sortDate": "2026-02-14T02:50:32Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3T0YwGLG0Cw1zW4e1qfmMfux", "stripePaymentIntentId": null, "orderId": "998", "contentId": null, "contentTitle": null}, {"id": "ch_3SrEfALG0Cw1zW4e1KiLmfkZ", "date": "Jan 19", "createdAt": "2026-01-19T09:22:20Z", "sortDate": "2026-01-19T09:22:20Z", "amount": 19.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SrEfALG0Cw1zW4e1KiLmfkZ", "stripePaymentIntentId": null, "orderId": "991", "contentId": null, "contentTitle": null}, {"id": "ch_3SpJQfLG0Cw1zW4e0l6Kw2Ea", "date": "Jan 14", "createdAt": "2026-01-14T02:03:25Z", "sortDate": "2026-01-14T02:03:25Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SpJQfLG0Cw1zW4e0l6Kw2Ea", "stripePaymentIntentId": null, "orderId": "990", "contentId": null, "contentTitle": null}, {"id": "ch_3SlCjkLG0Cw1zW4e1MP1Uus6", "date": "Jan 2", "createdAt": "2026-01-02T18:06:08Z", "sortDate": "2026-01-02T18:06:08Z", "amount": 89.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SlCjkLG0Cw1zW4e1MP1Uus6", "stripePaymentIntentId": null, "orderId": "988", "contentId": null, "contentTitle": null}, {"id": "ch_3Skt4xLG0Cw1zW4e1Yu98Lrf", "date": "Jan 1", "createdAt": "2026-01-01T21:06:43Z", "sortDate": "2026-01-01T21:06:43Z", "amount": 19.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3Skt4xLG0Cw1zW4e1Yu98Lrf", "stripePaymentIntentId": null, "orderId": "987", "contentId": null, "contentTitle": null}, {"id": "ch_3SjSk7LG0Cw1zW4e2NTVZm9l", "date": "Dec 28", "createdAt": "2025-12-28T22:47:19Z", "sortDate": "2025-12-28T22:47:19Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SjSk7LG0Cw1zW4e2NTVZm9l", "stripePaymentIntentId": null, "orderId": "985", "contentId": null, "contentTitle": null}, {"id": "ch_3SbpBQLG0Cw1zW4e2seOQ7EB", "date": "Dec 7", "createdAt": "2025-12-07T21:07:56Z", "sortDate": "2025-12-07T21:07:56Z", "amount": 19.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SbpBQLG0Cw1zW4e2seOQ7EB", "stripePaymentIntentId": null, "orderId": "976", "contentId": null, "contentTitle": null}, {"id": "ch_3SZaI1LG0Cw1zW4e0f1U7XNE", "date": "Dec 1", "createdAt": "2025-12-01T16:49:29Z", "sortDate": "2025-12-01T16:49:29Z", "amount": 9.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SZaI1LG0Cw1zW4e0f1U7XNE", "stripePaymentIntentId": null, "orderId": "972", "contentId": null, "contentTitle": null}, {"id": "ch_3SYV8OLG0Cw1zW4e25lKCxgL", "date": "Nov 28", "createdAt": "2025-11-28T17:07:04Z", "sortDate": "2025-11-28T17:07:04Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SYV8OLG0Cw1zW4e25lKCxgL", "stripePaymentIntentId": null, "orderId": "971", "contentId": null, "contentTitle": null}, {"id": "ch_3SUm6eLG0Cw1zW4e0DkHmRrk", "date": "Nov 18", "createdAt": "2025-11-18T10:25:52Z", "sortDate": "2025-11-18T10:25:52Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SUm6eLG0Cw1zW4e0DkHmRrk", "stripePaymentIntentId": null, "orderId": "970", "contentId": null, "contentTitle": null}, {"id": "ch_3SNUHqLG0Cw1zW4e2Itxfeqm", "date": "Oct 29", "createdAt": "2025-10-29T07:59:18Z", "sortDate": "2025-10-29T07:59:18Z", "amount": 9.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SNUHqLG0Cw1zW4e2Itxfeqm", "stripePaymentIntentId": null, "orderId": "955", "contentId": null, "contentTitle": null}, {"id": "ch_3SNU5mLG0Cw1zW4e0ELVSksz", "date": "Oct 29", "createdAt": "2025-10-29T07:46:50Z", "sortDate": "2025-10-29T07:46:50Z", "amount": 9.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SNU5mLG0Cw1zW4e0ELVSksz", "stripePaymentIntentId": null, "orderId": "954", "contentId": null, "contentTitle": null}, {"id": "ch_3SCLIWLG0Cw1zW4e1Vk7oABe", "date": "Sep 28", "createdAt": "2025-09-28T14:09:56Z", "sortDate": "2025-09-28T14:09:56Z", "amount": 19.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SCLIWLG0Cw1zW4e1Vk7oABe", "stripePaymentIntentId": null, "orderId": "945", "contentId": null, "contentTitle": null}, {"id": "ch_3SBd0nLG0Cw1zW4e2sw4kolK", "date": "Sep 26", "createdAt": "2025-09-26T14:52:41Z", "sortDate": "2025-09-26T14:52:41Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SBd0nLG0Cw1zW4e2sw4kolK", "stripePaymentIntentId": null, "orderId": "944", "contentId": null, "contentTitle": null}, {"id": "ch_3SBII1LG0Cw1zW4e2rsIv72Q", "date": "Sep 25", "createdAt": "2025-09-25T16:45:05Z", "sortDate": "2025-09-25T16:45:05Z", "amount": 2.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3SBII1LG0Cw1zW4e2rsIv72Q", "stripePaymentIntentId": null, "orderId": "943", "contentId": null, "contentTitle": null}, {"id": "ch_3S9hUQLG0Cw1zW4e0U4aOgQv", "date": "Sep 21", "createdAt": "2025-09-21T07:15:18Z", "sortDate": "2025-09-21T07:15:18Z", "amount": 19.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3S9hUQLG0Cw1zW4e0U4aOgQv", "stripePaymentIntentId": null, "orderId": "939", "contentId": null, "contentTitle": null}, {"id": "ch_3S225ULG0Cw1zW4e1qFZkdYA", "date": "Aug 31", "createdAt": "2025-08-31T03:37:52Z", "sortDate": "2025-08-31T03:37:52Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3S225ULG0Cw1zW4e1qFZkdYA", "stripePaymentIntentId": null, "orderId": "934", "contentId": null, "contentTitle": null}, {"id": "ch_3S0t36LG0Cw1zW4e0gAEY7kD", "date": "Aug 27", "createdAt": "2025-08-27T23:46:40Z", "sortDate": "2025-08-27T23:46:40Z", "amount": 2.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3S0t36LG0Cw1zW4e0gAEY7kD", "stripePaymentIntentId": null, "orderId": "929", "contentId": null, "contentTitle": null}, {"id": "ch_3Ryd6uLG0Cw1zW4e1jvzyIAw", "date": "Aug 21", "createdAt": "2025-08-21T18:21:16Z", "sortDate": "2025-08-21T18:21:16Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3Ryd6uLG0Cw1zW4e1jvzyIAw", "stripePaymentIntentId": null, "orderId": "926", "contentId": null, "contentTitle": null}, {"id": "ch_3RxUsVLG0Cw1zW4e1IZ31VIM", "date": "Aug 18", "createdAt": "2025-08-18T15:21:43Z", "sortDate": "2025-08-18T15:21:43Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RxUsVLG0Cw1zW4e1IZ31VIM", "stripePaymentIntentId": null, "orderId": "925", "contentId": null, "contentTitle": null}, {"id": "ch_3RwAV0LG0Cw1zW4e2tSQq9hl", "date": "Aug 14", "createdAt": "2025-08-14T23:23:58Z", "sortDate": "2025-08-14T23:23:58Z", "amount": 19.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RwAV0LG0Cw1zW4e2tSQq9hl", "stripePaymentIntentId": null, "orderId": "921", "contentId": null, "contentTitle": null}, {"id": "ch_3RvWNeLG0Cw1zW4e04wlDyxT", "date": "Aug 13", "createdAt": "2025-08-13T04:33:42Z", "sortDate": "2025-08-13T04:33:42Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RvWNeLG0Cw1zW4e04wlDyxT", "stripePaymentIntentId": null, "orderId": "920", "contentId": null, "contentTitle": null}, {"id": "ch_3RvS2XLG0Cw1zW4e206SdNzI", "date": "Aug 12", "createdAt": "2025-08-12T23:55:37Z", "sortDate": "2025-08-12T23:55:37Z", "amount": 2.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RvS2XLG0Cw1zW4e206SdNzI", "stripePaymentIntentId": null, "orderId": "919", "contentId": null, "contentTitle": null}, {"id": "ch_3RtV82LG0Cw1zW4e2dLoGngx", "date": "Aug 7", "createdAt": "2025-08-07T14:49:14Z", "sortDate": "2025-08-07T14:49:14Z", "amount": 2.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RtV82LG0Cw1zW4e2dLoGngx", "stripePaymentIntentId": null, "orderId": "911", "contentId": null, "contentTitle": null}, {"id": "ch_3RsEZPLG0Cw1zW4e1ZXk6hfz", "date": "Aug 4", "createdAt": "2025-08-04T02:56:15Z", "sortDate": "2025-08-04T02:56:15Z", "amount": 19.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RsEZPLG0Cw1zW4e1ZXk6hfz", "stripePaymentIntentId": null, "orderId": "909", "contentId": null, "contentTitle": null}, {"id": "ch_3Rrl11LG0Cw1zW4e2Y0fpe87", "date": "Aug 2", "createdAt": "2025-08-02T19:22:47Z", "sortDate": "2025-08-02T19:22:47Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3Rrl11LG0Cw1zW4e2Y0fpe87", "stripePaymentIntentId": null, "orderId": "908", "contentId": null, "contentTitle": null}, {"id": "ch_3RqRmPLG0Cw1zW4e0E7tnxzY", "date": "Jul 30", "createdAt": "2025-07-30T04:38:17Z", "sortDate": "2025-07-30T04:38:17Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RqRmPLG0Cw1zW4e0E7tnxzY", "stripePaymentIntentId": null, "orderId": "905", "contentId": null, "contentTitle": null}, {"id": "ch_3RpxwMLG0Cw1zW4e2CfMHolM", "date": "Jul 28", "createdAt": "2025-07-28T20:46:34Z", "sortDate": "2025-07-28T20:46:34Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RpxwMLG0Cw1zW4e2CfMHolM", "stripePaymentIntentId": null, "orderId": "904", "contentId": null, "contentTitle": null}, {"id": "ch_3RpYbSLG0Cw1zW4e1e9r6RQ7", "date": "Jul 27", "createdAt": "2025-07-27T17:43:18Z", "sortDate": "2025-07-27T17:43:18Z", "amount": 2.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RpYbSLG0Cw1zW4e1e9r6RQ7", "stripePaymentIntentId": null, "orderId": "899", "contentId": null, "contentTitle": null}, {"id": "ch_3RpCGWLG0Cw1zW4e0A9VsXtR", "date": "Jul 26", "createdAt": "2025-07-26T17:52:12Z", "sortDate": "2025-07-26T17:52:12Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RpCGWLG0Cw1zW4e0A9VsXtR", "stripePaymentIntentId": null, "orderId": "898", "contentId": null, "contentTitle": null}, {"id": "ch_3Rn6LHLG0Cw1zW4e2YJjTpdt", "date": "Jul 20", "createdAt": "2025-07-20T23:08:27Z", "sortDate": "2025-07-20T23:08:27Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3Rn6LHLG0Cw1zW4e2YJjTpdt", "stripePaymentIntentId": null, "orderId": "890", "contentId": null, "contentTitle": null}, {"id": "ch_3Rn0yILG0Cw1zW4e0xHRIOOC", "date": "Jul 20", "createdAt": "2025-07-20T17:24:22Z", "sortDate": "2025-07-20T17:24:22Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3Rn0yILG0Cw1zW4e0xHRIOOC", "stripePaymentIntentId": null, "orderId": "889", "contentId": null, "contentTitle": null}, {"id": "ch_3RmiRaLG0Cw1zW4e2xQ7LnS0", "date": "Jul 19", "createdAt": "2025-07-19T21:37:22Z", "sortDate": "2025-07-19T21:37:22Z", "amount": 2.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RmiRaLG0Cw1zW4e2xQ7LnS0", "stripePaymentIntentId": null, "orderId": "888", "contentId": null, "contentTitle": null}, {"id": "ch_3RmQeOLG0Cw1zW4e2D7O6JGu", "date": "Jul 19", "createdAt": "2025-07-19T02:37:24Z", "sortDate": "2025-07-19T02:37:24Z", "amount": 29.99, "description": null, "source": "Stripe", "stripeChargeId": "ch_3RmQeOLG0Cw1zW4e2D7O6JGu", "stripePaymentIntentId": null, "orderId": "886", "contentId": null, "contentTitle": null}], "rangeNote": "The 78 valid charges span 2025-07-19 through 2026-07-31 (29 charges predate calendar-2026, totaling $597.71; 49 charges are dated in 2026, totaling $1014.5). This is the dashboard's full Stripe-visible net-non-refunded set as returned by the connector; it is reported here in full rather than re-scoped to calendar-2026-only so the total matches the verified source-of-truth 78/$1,612.21."}, "monthToDate": {"label": "Stripe sales this month", "range": "Jul 1-Jul 19, 2026", "purchases": 0, "purchaseRevenue": 0, "revenuePerPurchase": 0, "payments": []}, "lastWeek": {"label": "Stripe sales last complete week", "range": "Jul 6-Jul 12, 2026", "purchases": 0, "purchaseRevenue": 0, "revenuePerPurchase": 0, "payments": []}, "thisWeek": {"label": "Stripe sales, complete rolling week", "range": "Jul 21-Jul 27, 2026", "purchases": 4, "purchaseRevenue": 76.95, "developerRevShare": 76.95, "revenuePerPurchase": 19.24, "payments": [{"date": "Jul 21", "createdAt": "2026-07-21", "amount": 19.98, "developerRevShare": 19.98, "description": "Anonymous Customer - Purchase Bundle 20: Signup payment", "source": "Stripe", "chargeId": "ch_3Tvm3yLG0Cw1zW4e0BJSXl2H"}, {"date": "Jul 26", "createdAt": "2026-07-26", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "chargeId": "ch_3TxbcULG0Cw1zW4e1fG5wBI6"}, {"date": "Jul 27", "createdAt": "2026-07-27", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "chargeId": "ch_3Txt79LG0Cw1zW4e1I51WlLH"}, {"date": "Jul 27", "createdAt": "2026-07-27", "amount": 14.99, "developerRevShare": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "chargeId": "ch_3Txt8TLG0Cw1zW4e0nsHWvcG"}], "note": "Four captured, paid, non-refunded Stripe charges within the complete Jul 21-Jul 27 rolling week (verified against live Stripe charge records: 77 of 100 pulled charges qualified as paid/captured/non-refunded)."}, "currentCompleteWeek": {"label": "Stripe sales last complete week", "range": "Jul 6-Jul 12, 2026", "purchases": 0, "purchaseRevenue": 0, "revenuePerPurchase": 0, "payments": []}, "weekToDate": {"label": "Stripe sales, complete rolling week", "range": "Jul 21-Jul 27, 2026", "purchases": 4, "purchaseRevenue": 76.95, "developerRevShare": 76.95, "revenuePerPurchase": 19.24, "payments": [{"date": "Jul 21", "createdAt": "2026-07-21", "amount": 19.98, "developerRevShare": 19.98, "description": "Anonymous Customer - Purchase Bundle 20: Signup payment", "source": "Stripe", "chargeId": "ch_3Tvm3yLG0Cw1zW4e0BJSXl2H"}, {"date": "Jul 26", "createdAt": "2026-07-26", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "chargeId": "ch_3TxbcULG0Cw1zW4e1fG5wBI6"}, {"date": "Jul 27", "createdAt": "2026-07-27", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "chargeId": "ch_3Txt79LG0Cw1zW4e1I51WlLH"}, {"date": "Jul 27", "createdAt": "2026-07-27", "amount": 14.99, "developerRevShare": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "chargeId": "ch_3Txt8TLG0Cw1zW4e0nsHWvcG"}], "note": "Four captured, paid, non-refunded Stripe charges within the complete Jul 21-Jul 27 rolling week (verified against live Stripe charge records: 77 of 100 pulled charges qualified as paid/captured/non-refunded)."}, "recent12Days": {"label": "Stripe last 12 days", "range": "Jul 8-Jul 19, 2026", "purchases": 0, "purchaseRevenue": 0, "revenuePerPurchase": 0, "payments": []}, "lifetimeObserved": {"range": "Through Jul 19, 2026 reconnect pull", "purchases": 22, "purchaseRevenue": 454.78, "revenuePerPurchase": 20.67}, "mix": [{"label": "Title purchases", "purchases": 23, "purchaseRevenue": 474.77}, {"label": "Bundle purchases", "purchases": 2, "purchaseRevenue": 30.98}, {"label": "Subscriptions", "purchases": 0, "purchaseRevenue": 0}, {"label": "Season Pass", "purchases": 22, "purchaseRevenue": 461.78}], "recentPayments": [{"id": "ch_3TzEFKLG0Cw1zW4e23n3fXCE", "date": "Jul 31", "createdAt": "2026-07-31T11:04:59Z", "sortDate": "2026-07-31T11:04:59Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzEFKLG0Cw1zW4e23n3fXCE", "stripePaymentIntentId": "pi_3TzEFKLG0Cw1zW4e2BhEcfTJ", "orderId": "spc-2026073111045857", "contentId": null, "contentTitle": null}, {"id": "ch_3TzCUiLG0Cw1zW4e16ILLnfy", "date": "Jul 31", "createdAt": "2026-07-31T09:12:45Z", "sortDate": "2026-07-31T09:12:45Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzCUiLG0Cw1zW4e16ILLnfy", "stripePaymentIntentId": "pi_3TzCUiLG0Cw1zW4e1e6IMbcp", "orderId": "boj-2026073109124470", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs", "date": "Jul 31", "createdAt": "2026-07-31T03:44:17Z", "sortDate": "2026-07-31T03:44:17Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs", "stripePaymentIntentId": "pi_3Tz7MrLG0Cw1zW4e0nFPqa1h", "orderId": "gaj-2026073103441719", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd", "date": "Jul 31", "createdAt": "2026-07-31T03:40:22Z", "sortDate": "2026-07-31T03:40:22Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd", "stripePaymentIntentId": "pi_3Tz7J4LG0Cw1zW4e0HUD0BHa", "orderId": "coj-2026073103402209", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR", "date": "Jul 31", "createdAt": "2026-07-31T03:29:27Z", "sortDate": "2026-07-31T03:29:27Z", "amount": 20.99, "description": "Anonymous Customer - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR", "stripePaymentIntentId": "pi_3Tz78ULG0Cw1zW4e0tM1JWeq", "orderId": "huc-2026073103292664", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv", "date": "Jul 31", "createdAt": "2026-07-31T00:16:09Z", "sortDate": "2026-07-31T00:16:09Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv", "stripePaymentIntentId": "pi_3Tz47RLG0Cw1zW4e1FYzc0le", "orderId": "taj-2026073100160920", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz3MsLG0Cw1zW4e00hGznTV", "date": "Jul 30", "createdAt": "2026-07-30T23:28:02Z", "sortDate": "2026-07-30T23:28:02Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz3MsLG0Cw1zW4e00hGznTV", "stripePaymentIntentId": "pi_3Tz3MsLG0Cw1zW4e0mjh6SJz", "orderId": "gud-2026073023280174", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz301LG0Cw1zW4e1OHOZPHl", "date": "Jul 30", "createdAt": "2026-07-30T23:04:26Z", "sortDate": "2026-07-30T23:04:26Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz301LG0Cw1zW4e1OHOZPHl", "stripePaymentIntentId": "pi_3Tz301LG0Cw1zW4e1ZokiUw6", "orderId": "war-2026073023042542", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7", "date": "Jul 30", "createdAt": "2026-07-30T22:05:40Z", "sortDate": "2026-07-30T22:05:40Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7", "stripePaymentIntentId": "pi_3Tz25ALG0Cw1zW4e2WFGOneD", "orderId": "dar-2026073022054001", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK", "date": "Jul 30", "createdAt": "2026-07-30T21:16:17Z", "sortDate": "2026-07-30T21:16:17Z", "amount": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK", "stripePaymentIntentId": "pi_3Tz1JNLG0Cw1zW4e10c2mJD9", "orderId": "kot-2026073021161666", "contentId": null, "contentTitle": null}], "dailyTrend": [{"date": "Jan 1", "rawDate": "20260101", "purchases": 1, "purchaseRevenue": 19.99}, {"date": "Jan 2", "rawDate": "20260102", "purchases": 1, "purchaseRevenue": 89.99}, {"date": "Jan 14", "rawDate": "20260114", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Jan 19", "rawDate": "20260119", "purchases": 1, "purchaseRevenue": 19.99}, {"date": "Feb 14", "rawDate": "20260214", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Feb 23", "rawDate": "20260223", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Apr 16", "rawDate": "20260416", "purchases": 2, "purchaseRevenue": 29.98}, {"date": "Apr 17", "rawDate": "20260417", "purchases": 1, "purchaseRevenue": 9.99}, {"date": "Apr 19", "rawDate": "20260419", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Apr 21", "rawDate": "20260421", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Apr 22", "rawDate": "20260422", "purchases": 2, "purchaseRevenue": 29.98}, {"date": "Apr 24", "rawDate": "20260424", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Apr 27", "rawDate": "20260427", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "May 6", "rawDate": "20260506", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "May 15", "rawDate": "20260515", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "May 18", "rawDate": "20260518", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "May 28", "rawDate": "20260528", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Jun 12", "rawDate": "20260612", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Jun 15", "rawDate": "20260615", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Jun 27", "rawDate": "20260627", "purchases": 1, "purchaseRevenue": 14.99}, {"date": "Jul 19", "rawDate": "20260719", "purchases": 2, "purchaseRevenue": 32.98}, {"date": "Jul 20", "rawDate": "20260720", "purchases": 2, "purchaseRevenue": 59.98}, {"date": "Jul 21", "rawDate": "20260721", "purchases": 1, "purchaseRevenue": 19.98}, {"date": "Jul 26", "rawDate": "20260726", "purchases": 2, "purchaseRevenue": 50.98}, {"date": "Jul 27", "rawDate": "20260727", "purchases": 3, "purchaseRevenue": 38.97}, {"date": "Jul 28", "rawDate": "20260728", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Jul 29", "rawDate": "20260729", "purchases": 1, "purchaseRevenue": 20.99}, {"date": "Jul 30", "rawDate": "20260730", "purchases": 17, "purchaseRevenue": 365.83}, {"date": "Jul 31", "rawDate": "20260731", "purchases": 14, "purchaseRevenue": 293.86}, {"date": "Aug 1", "rawDate": "20260801", "purchases": 2, "purchaseRevenue": 41.98}, {"date": "Aug 2", "rawDate": "20260802", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Aug 4", "rawDate": "20260804", "purchases": 1, "purchaseRevenue": 19.99}, {"date": "Aug 7", "rawDate": "20260807", "purchases": 1, "purchaseRevenue": 2.99}, {"date": "Aug 12", "rawDate": "20260812", "purchases": 1, "purchaseRevenue": 2.99}, {"date": "Aug 13", "rawDate": "20260813", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Aug 14", "rawDate": "20260814", "purchases": 1, "purchaseRevenue": 19.99}, {"date": "Aug 18", "rawDate": "20260818", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Aug 21", "rawDate": "20260821", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Aug 27", "rawDate": "20260827", "purchases": 1, "purchaseRevenue": 2.99}, {"date": "Aug 31", "rawDate": "20260831", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Sep 21", "rawDate": "20260921", "purchases": 1, "purchaseRevenue": 19.99}, {"date": "Sep 25", "rawDate": "20260925", "purchases": 1, "purchaseRevenue": 2.99}, {"date": "Sep 26", "rawDate": "20260926", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Sep 28", "rawDate": "20260928", "purchases": 1, "purchaseRevenue": 19.99}, {"date": "Oct 29", "rawDate": "20261029", "purchases": 2, "purchaseRevenue": 19.98}, {"date": "Nov 18", "rawDate": "20261118", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Nov 28", "rawDate": "20261128", "purchases": 1, "purchaseRevenue": 29.99}, {"date": "Dec 1", "rawDate": "20261201", "purchases": 1, "purchaseRevenue": 9.99}, {"date": "Dec 7", "rawDate": "20261207", "purchases": 1, "purchaseRevenue": 19.99}, {"date": "Dec 28", "rawDate": "20261228", "purchases": 1, "purchaseRevenue": 29.99}], "note": "Stripe connector fully rebuilt Jul 31, 2026 from the complete valid charge set (100 charges returned by the fresh connector pull, 78 valid paid/captured/succeeded/non-refunded, 22 excluded as refunded/incomplete). Stripe YTD is now 78 purchases / $1612.21 -- this supersedes an earlier same-day figure of 52 purchases / $1075.45, which undercounted by adding a 23-charge/$482.77 incremental diff onto a stale, already-incomplete 29/$592.68 baseline instead of rebuilding from the full valid set.", "connectorStatus": "CONNECTED_UPDATED", "lastStripeVisiblePayment": {"id": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt", "date": "Aug 1", "createdAt": "2026-08-02T02:59:21Z", "sortDate": "2026-08-02T02:59:21Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt", "stripePaymentIntentId": "pi_3TzpcTLG0Cw1zW4e2ONdvaRi", "orderId": "itr-2026080202592092", "contentId": null, "contentTitle": null}, "latestConnectorAudit": {"checkedAt": "2026-08-02T08:20:00-07:00", "totalChargesReturnedInSevenDayPull": 46, "validPaidCapturedNotRefundedChargesInSevenDayPull": 36, "validSevenDayAmount": 749.64, "missingChargeIdsAdded": 10, "missingAmountAdded": 209.9, "method": "id_deduped_incremental_add_from_fresh_connector_pull"}, "staleNote": "Fresh Stripe connector pull checked Aug 2, 2026; missing valid charge IDs were added and no Stripe values were zeroed.", "sinceLastRefresh": {"label": "Stripe charges since prior dashboard refresh", "range": "Jul 28-Jul 31, 2026 (since Jul 28, 08:11 PDT refresh)", "purchases": 23, "purchaseRevenue": 482.77, "developerRevShare": 482.77, "revenuePerPurchase": 20.99, "payments": [{"date": "Jul 31", "createdAt": "2026-07-31", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3TzEFKLG0Cw1zW4e23n3fXCE"}, {"date": "Jul 31", "createdAt": "2026-07-31", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3TzCUiLG0Cw1zW4e16ILLnfy"}, {"date": "Jul 31", "createdAt": "2026-07-31", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs"}, {"date": "Jul 31", "createdAt": "2026-07-31", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd"}, {"date": "Jul 31", "createdAt": "2026-07-31", "amount": 20.99, "developerRevShare": 20.99, "description": "Anonymous Customer - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR"}, {"date": "Jul 31", "createdAt": "2026-07-31", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tz3MsLG0Cw1zW4e00hGznTV"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tz301LG0Cw1zW4e1OHOZPHl"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tz1ANLG0Cw1zW4e0UQ7AKMZ"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3TyzCmLG0Cw1zW4e0OkN3IXD"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3TyvJZLG0Cw1zW4e29PYVKoH"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Anonymous Customer - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3TyuURLG0Cw1zW4e2bpnTqLk"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tyu2VLG0Cw1zW4e0luUxo96"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3TytxLLG0Cw1zW4e2FpZ4FHc"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3TytpLLG0Cw1zW4e2mlSZtpI"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tys4oLG0Cw1zW4e18cjs5pa"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3TyrAVLG0Cw1zW4e1FifKDmF"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tyq1cLG0Cw1zW4e2FB0Tk9a"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3TypI6LG0Cw1zW4e1qSCh6i3"}, {"date": "Jul 30", "createdAt": "2026-07-30", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "chargeId": "ch_3Tyot3LG0Cw1zW4e0qLYtbmV"}, {"date": "Jul 29", "createdAt": "2026-07-29", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "chargeId": "ch_3TyUuPLG0Cw1zW4e2UIrqDbg"}], "note": "23 valid paid/captured/succeeded/non-refunded Stripe charges added since the Jul 28, 2026 08:11 PDT refresh (mostly Season Pass signups, Jul 29-Jul 31). Verified by charge-ID diff against the full known ledger (26 previously-counted IDs) with zero overlap, and cross-checked against the independently supplied Stripe charges summary (exact match: 23 charges / $482.77).", "supersededNote": "This 'since Jul 28 baseline' figure (23/$482.77) was used in an earlier same-day update to compute an incremental Stripe YTD of 52/$1,075.45 by adding it to a 29/$592.68 baseline. That approach undercounted the true Stripe total; Stripe YTD has since been fully rebuilt to 78/$1,612.21 from the complete valid charge set. This block is retained only as a historical record of the most-recent-charges audit trail, not as the current Stripe total."}}, "roku": {"sourceLabel": "Roku-visible sales", "sourceDetail": "Roku-visible sales come from emailed Roku Sales Activity Reports. The Jun 8 report added Jun 4 and Jun 7 purchases. These are not total ElectricNOW sales.", "reportEmailDate": "2026-07-27T14:19:00+00:00", "reportGenerated": "July 27, 2026 7:19 AM PDT", "baselineWindow": {"label": "Roku launch baseline", "range": "Apr 13-Apr 19, 2026", "purchases": 5, "purchaseRevenue": 74.95, "developerRevShare": 59.95, "revenuePerPurchase": 14.99, "deltaPurchasesPct": null, "deltaRevenuePct": null}, "yearToDate": {"label": "Roku sales this year", "range": "Jan 1-Jun 30, 2026", "purchases": 27, "purchaseRevenue": 499.73, "developerRevShare": 400.73, "revenuePerPurchase": 18.89, "payments": [{"date": "Jun 30", "createdAt": "2026-06-30", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}, {"date": "Jun 27", "createdAt": "2026-06-27", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 19", "createdAt": "2026-06-19", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}, {"date": "Jun 13", "createdAt": "2026-06-13", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 11", "createdAt": "2026-06-11", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 4", "createdAt": "2026-06-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 7", "createdAt": "2026-06-07", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "May 20", "createdAt": "2026-05-20", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "May 18", "createdAt": "2026-05-18", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "May 16", "createdAt": "2026-05-16", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "May 14", "createdAt": "2026-05-14", "amount": 2.99, "developerRevShare": 2.39, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 13", "createdAt": "2026-05-13", "amount": 2.99, "developerRevShare": 2.39, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 12", "createdAt": "2026-05-12", "amount": 5.98, "developerRevShare": 4.78, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 4", "createdAt": "2026-05-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 22", "createdAt": "2026-04-22", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}, {"date": "Apr 19", "createdAt": "2026-04-19", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 17", "createdAt": "2026-04-17", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 16", "createdAt": "2026-04-16", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 14", "createdAt": "2026-04-14", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}]}, "monthToDate": {"label": "Roku sales this month", "range": "Jun 1-Jun 14, 2026", "purchases": 4, "purchaseRevenue": 64.96, "developerRevShare": 51.96, "revenuePerPurchase": 16.24, "deltaPurchasesPct": null, "deltaRevenuePct": null, "payments": [{"date": "Jun 4", "createdAt": "2026-06-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 7", "createdAt": "2026-06-07", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "Jun 11", "createdAt": "2026-06-11", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 13", "createdAt": "2026-06-13", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}]}, "lastWeek": {"label": "Roku sales last week", "range": "Jun 29-Jul 5, 2026", "purchases": 1, "purchaseRevenue": 54.99, "developerRevShare": 43.99, "revenuePerPurchase": 54.99, "deltaPurchasesPct": null, "deltaRevenuePct": null, "payments": [{"date": "Jun 30", "createdAt": "2026-06-30", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}]}, "thisWeek": {"label": "Roku visible sales, complete rolling week", "range": "Jul 21-Jul 27, 2026", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 15.99, "revenuePerPurchase": 19.99, "deltaPurchasesPct": -50.0, "deltaRevenuePct": -50.0, "payments": [{"date": "Jul 25", "createdAt": "2026-07-25", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}], "note": "Latest Roku Sales Activity Report available is still the Jul 27, 2026 email (no fresher report after Jul 27, per handoff); source date for Roku sales remains Jul 27. Within the Jul 21-Jul 27 window, one Purchase Bundle 20 sale (Jul 25, $19.99/$15.99 dev share) applies; the other recent sale (Jul 20, $19.99) falls in the prior Jul 14-Jul 20 week and was already counted there."}, "currentCompleteWeek": {"label": "Roku visible sales, complete rolling week", "range": "Jul 21-Jul 27, 2026", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 15.99, "revenuePerPurchase": 19.99, "deltaPurchasesPct": -50.0, "deltaRevenuePct": -50.0, "payments": [{"date": "Jul 25", "createdAt": "2026-07-25", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}], "note": "Latest Roku Sales Activity Report available is still the Jul 27, 2026 email (no fresher report after Jul 27, per handoff); source date for Roku sales remains Jul 27. Within the Jul 21-Jul 27 window, one Purchase Bundle 20 sale (Jul 25, $19.99/$15.99 dev share) applies; the other recent sale (Jul 20, $19.99) falls in the prior Jul 14-Jul 20 week and was already counted there."}, "weekToDate": {"label": "Roku visible sales, complete rolling week", "range": "Jul 21-Jul 27, 2026", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 15.99, "revenuePerPurchase": 19.99, "deltaPurchasesPct": -50.0, "deltaRevenuePct": -50.0, "payments": [{"date": "Jul 25", "createdAt": "2026-07-25", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}], "note": "Latest Roku Sales Activity Report available is still the Jul 27, 2026 email (no fresher report after Jul 27, per handoff); source date for Roku sales remains Jul 27. Within the Jul 21-Jul 27 window, one Purchase Bundle 20 sale (Jul 25, $19.99/$15.99 dev share) applies; the other recent sale (Jul 20, $19.99) falls in the prior Jul 14-Jul 20 week and was already counted there."}, "lifetimeObserved": {"range": "Through Jun 8, 2026 Roku Sales Activity report", "purchases": 16, "purchaseRevenue": 241.84, "developerRevShare": 193.44}, "mix": [{"label": "Roku title purchases", "purchases": 15, "purchaseRevenue": 176.85}, {"label": "Roku bundle purchases", "purchases": 4, "purchaseRevenue": 184.96}], "recentPayments": [{"date": "Jun 30", "createdAt": "2026-06-30", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}, {"date": "Jun 4", "createdAt": "2026-06-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Jun 7", "createdAt": "2026-06-07", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "May 20", "createdAt": "2026-05-20", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "May 18", "createdAt": "2026-05-18", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "May 16", "createdAt": "2026-05-16", "amount": 19.99, "developerRevShare": 15.99, "description": "Roku - Purchase Bundle 20", "source": "Roku"}, {"date": "May 14", "createdAt": "2026-05-14", "amount": 2.99, "developerRevShare": 2.39, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 13", "createdAt": "2026-05-13", "amount": 2.99, "developerRevShare": 2.39, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 12", "createdAt": "2026-05-12", "amount": 5.98, "developerRevShare": 4.78, "description": "Roku - Purchase HD 3", "source": "Roku"}, {"date": "May 4", "createdAt": "2026-05-04", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 22", "createdAt": "2026-04-22", "amount": 54.99, "developerRevShare": 43.99, "description": "Roku - Purchase Bundle 55", "source": "Roku"}, {"date": "Apr 19", "createdAt": "2026-04-19", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 17", "createdAt": "2026-04-17", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 16", "createdAt": "2026-04-16", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}, {"date": "Apr 14", "createdAt": "2026-04-14", "amount": 14.99, "developerRevShare": 11.99, "description": "Roku - Purchase HD 15", "source": "Roku"}], "dailyTrend": [{"date": "Apr 13", "rawDate": "20260413", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 14", "rawDate": "20260414", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 15", "rawDate": "20260415", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 16", "rawDate": "20260416", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 17", "rawDate": "20260417", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 18", "rawDate": "20260418", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 19", "rawDate": "20260419", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 20", "rawDate": "20260420", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 21", "rawDate": "20260421", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 22", "rawDate": "20260422", "purchases": 1, "purchaseRevenue": 54.99, "developerRevShare": 43.99}, {"date": "Apr 23", "rawDate": "20260423", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 24", "rawDate": "20260424", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 25", "rawDate": "20260425", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 26", "rawDate": "20260426", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 27", "rawDate": "20260427", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 28", "rawDate": "20260428", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 29", "rawDate": "20260429", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Apr 30", "rawDate": "20260430", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 1", "rawDate": "20260501", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 2", "rawDate": "20260502", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 3", "rawDate": "20260503", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 4", "rawDate": "20260504", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "May 5", "rawDate": "20260505", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 6", "rawDate": "20260506", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 7", "rawDate": "20260507", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 8", "rawDate": "20260508", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 9", "rawDate": "20260509", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 10", "rawDate": "20260510", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 11", "rawDate": "20260511", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 12", "rawDate": "20260512", "purchases": 2, "purchaseRevenue": 5.98, "developerRevShare": 4.78}, {"date": "May 13", "rawDate": "20260513", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 2.39}, {"date": "May 14", "rawDate": "20260514", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 2.39}, {"date": "May 15", "rawDate": "20260515", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 16", "rawDate": "20260516", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 15.99}, {"date": "May 17", "rawDate": "20260517", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 18", "rawDate": "20260518", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "May 19", "rawDate": "20260519", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 20", "rawDate": "20260520", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "May 21", "rawDate": "20260521", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 22", "rawDate": "20260522", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 23", "rawDate": "20260523", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 24", "rawDate": "20260524", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 25", "rawDate": "20260525", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 26", "rawDate": "20260526", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 27", "rawDate": "20260527", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 28", "rawDate": "20260528", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 29", "rawDate": "20260529", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 30", "rawDate": "20260530", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "May 31", "rawDate": "20260531", "purchases": 0, "purchaseRevenue": 0, "developerRevShare": 0}, {"date": "Jun 11", "rawDate": "20260611", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Jun 13", "rawDate": "20260613", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Jun 19", "rawDate": "20260619", "purchases": 1, "purchaseRevenue": 54.99, "developerRevShare": 43.99}, {"date": "Jun 27", "rawDate": "20260627", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Jun 30", "rawDate": "20260630", "purchases": 1, "purchaseRevenue": 54.99, "developerRevShare": 43.99}], "note": "Roku Sales Activity Report source date remains Jul 27, 2026 (no fresher Sales Activity email found on Jul 28 per Outlook ROKU folder search); sales through Jul 27 preserved and labeled accordingly. One Purchase Bundle 20 sale (Jul 25) falls within the current Jul 21-Jul 27 window. Reconciliation note: the Jul 20 and Jul 25 sales had only ever appeared in a weekly bucket, not yearToDate; both are now folded into yearToDate this refresh to avoid permanently losing them from the cumulative total."}, "apple": {"sourceLabel": "Apple App Store manual snapshot", "sourceDetail": "Apple App Store in-app purchase snapshot manually entered from App Store Connect screenshots. The Aug 2 screenshot supersedes the overlapping Jul 24-Jul 30 aggregate ($557.75) with the newer Jul 26-Aug 1 aggregate ($683.90). Gross customer sales are shown; estimated net assumes Apple keeps 30%.", "isManualSnapshot": true, "snapshotRange": "Jul 26-Aug 1, 2026", "platformFeePct": 30, "estimatedNetPct": 70, "baselineWindow": {"label": "Apple launch baseline", "range": "Apr 13-Apr 19, 2026", "purchases": 2, "purchaseRevenue": 29.98, "developerRevShare": 20.99, "revenuePerPurchase": 14.99, "payments": [{"date": "Apr 16", "amount": 29.98, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "lastWeek": {"label": "Apple sales last week", "range": "May 24-May 30, 2026", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49, "revenuePerPurchase": 14.99, "payments": [{"date": "May 25", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "thisWeek": {"label": "Apple sales this week", "range": "Jun 29-Jul 5, 2026", "purchases": 2, "purchaseRevenue": 29.98, "developerRevShare": 20.98, "revenuePerPurchase": 14.99, "payments": [{"date": "Jul 2", "createdAt": "2026-07-02", "amount": 14.99, "developerRevShare": 10.49, "description": "Apple - Purchase HD 15", "source": "Apple"}, {"date": "Jul 5", "createdAt": "2026-07-05", "amount": 14.99, "developerRevShare": 10.49, "description": "Apple - Purchase HD 15", "source": "Apple"}]}, "monthToDate": {"label": "Apple sales this month", "range": "Jun 1-Jun 14, 2026", "purchases": 5, "purchaseRevenue": 74.95, "developerRevShare": 52.46, "revenuePerPurchase": 14.99, "payments": [{"date": "Jun 10", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 11", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 13", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 13", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 14", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "recent12Days": {"label": "Apple sales last 12 days", "range": "May 20-May 31, 2026", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49, "revenuePerPurchase": 14.99, "payments": [{"date": "May 25", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "yearToDate": {"label": "Apple App Store snapshot", "range": "Jan 1-Aug 1, 2026", "purchases": 22, "purchaseRevenue": 1046.68, "developerRevShare": 732.68, "revenuePerPurchase": 47.58, "payments": [{"date": "Apr 16", "amount": 29.98, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Apr 21", "amount": 9.99, "description": "Apple App Store - Purchase Bundle 10", "source": "Apple App Store"}, {"date": "May 13", "amount": 29.99, "description": "Apple App Store - Purchase Bundle 30", "source": "Apple App Store"}, {"date": "May 18", "amount": 29.99, "description": "Apple App Store - Purchase Bundle 30", "source": "Apple App Store"}, {"date": "May 18", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "May 25", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Apr 6-May 10", "amount": 29.99, "description": "Apple App Store - Purchase Bundle 30, date pending", "source": "Apple App Store"}, {"date": "Jun 10", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 11", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 13", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 13", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 14", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 16", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 22", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 24", "amount": 19.99, "description": "Apple App Store - Purchase Bundle 20", "source": "Apple App Store"}, {"date": "Jun 26", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 27", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 28", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jun 30", "amount": 2.99, "description": "Apple App Store - Purchase HD 3", "source": "Apple App Store"}, {"date": "Jul 2", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jul 5", "amount": 14.99, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}, {"date": "Jul 26-Aug 1 (aggregate)", "createdAt": "2026-08-01", "sortDate": "2026-08-01", "amount": 683.9, "developerRevShare": 478.73, "description": "Apple App Store - aggregate gross sales, United States (no title breakdown provided)", "source": "Apple App Store", "note": "Revenue-only aggregate; no transaction count or per-title detail provided."}], "purchases_note": "Jul 31, 2026 aggregate sales screenshot reported revenue only (no per-transaction count); 'purchases' count below is NOT incremented for this window to avoid an invented transaction count. revenuePerPurchase is therefore no longer strictly purchases-based for this period; treat purchaseRevenue as the reliable figure."}, "dailyTrend": [{"date": "Apr 16", "rawDate": "20260416", "purchases": 2, "purchaseRevenue": 29.98, "developerRevShare": 20.99}, {"date": "Apr 21", "rawDate": "20260421", "purchases": 1, "purchaseRevenue": 9.99, "developerRevShare": 6.99}, {"date": "May 13", "rawDate": "20260513", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 20.99}, {"date": "May 18", "rawDate": "20260518", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 20.99}, {"date": "May 18", "rawDate": "20260518", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "May 25", "rawDate": "20260525", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 10", "rawDate": "20260610", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 11", "rawDate": "20260611", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 13", "rawDate": "20260613", "purchases": 2, "purchaseRevenue": 29.98, "developerRevShare": 20.99}, {"date": "Jun 14", "rawDate": "20260614", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 16", "rawDate": "20260616", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 22", "rawDate": "20260622", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 24", "rawDate": "20260624", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 13.99}, {"date": "Jun 26", "rawDate": "20260626", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 27", "rawDate": "20260627", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 28", "rawDate": "20260628", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 30", "rawDate": "20260630", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 2.09}, {"date": "Jul 2", "rawDate": "20260702", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jul 5", "rawDate": "20260705", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jul 26", "rawDate": "20260726", "purchases": null, "purchaseRevenue": 0.0, "developerRevShare": 0.0, "note": null}, {"date": "Jul 27", "rawDate": "20260727", "purchases": null, "purchaseRevenue": 29.4, "developerRevShare": 20.58, "note": "Aggregate revenue only; source screenshot provided no per-transaction count."}, {"date": "Jul 28", "rawDate": "20260728", "purchases": null, "purchaseRevenue": 0.0, "developerRevShare": 0.0, "note": null}, {"date": "Jul 29", "rawDate": "20260729", "purchases": null, "purchaseRevenue": 52.5, "developerRevShare": 36.75, "note": "Aggregate revenue only; source screenshot provided no per-transaction count."}, {"date": "Jul 30", "rawDate": "20260730", "purchases": null, "purchaseRevenue": 308.7, "developerRevShare": 216.09, "note": "Aggregate revenue only; source screenshot provided no per-transaction count."}, {"date": "Jul 31", "rawDate": "20260731", "purchases": null, "purchaseRevenue": 132.3, "developerRevShare": 92.61, "note": "Aggregate revenue only; source screenshot provided no per-transaction count."}, {"date": "Aug 1", "rawDate": "20260801", "purchases": null, "purchaseRevenue": 161.0, "developerRevShare": 112.7, "note": "Aggregate revenue only; source screenshot provided no per-transaction count."}], "undatedSales": [{"dateLabel": "Apr 6-May 10", "amount": 29.99, "count": 1, "description": "Apple App Store - Purchase Bundle 30, date pending"}], "mix": [{"label": "Apple Purchase Bundle 30", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 20.99}, {"label": "Apple Purchase HD 15", "purchases": 14, "purchaseRevenue": 209.86, "developerRevShare": 146.87}, {"label": "Apple Purchase Bundle 10", "purchases": 1, "purchaseRevenue": 9.99, "developerRevShare": 6.99}, {"label": "Apple Purchase Bundle 20", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 13.99}, {"label": "Apple Purchase HD 3", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 2.09}], "note": "Apple App Store screenshots are manually entered from App Store Connect; estimated net assumes Apple's 30% platform fee. Jul 31, 2026 adds an AGGREGATE daily gross-sales snapshot for Jul 24-Jul 30, 2026 ($557.75 total: Jul 27 $41.98, Jul 29 $74.98, Jul 30 $440.79). This screenshot showed daily totals only, with no title/product breakdown, so no per-title entries or transaction counts were invented; purchases count is unchanged at 22 while purchaseRevenue/developerRevShare reflect the added aggregate. Cumulative Apple purchaseRevenue is now $920.53 gross (est net $644.32). These figures remain manual until Apple App Store Connect API reporting is connected.", "latestSalesSnapshot": {"period": "Jul 24-Jul 30, 2026", "start": "2026-07-24", "end": "2026-07-30", "purchases": null, "purchaseRevenue": 557.75, "alreadyIncludedInCumulative": true, "note": "Latest Apple App Store Connect sales screenshot (Jul 24-Jul 30, 2026) shows aggregate daily gross sales totaling $557.75 (Jul 27 $41.98, Jul 29 $74.98, Jul 30 $440.79; Jul 24/25/26/28 $0.00), United States. No per-title/product breakdown was provided, so no transaction count or title-level entries are recorded -- this is an amount-only aggregate. Estimated net at existing 70%-of-gross convention is $390.42. Added Jul 31, 2026, lifting cumulative Apple purchaseRevenue to $920.53 gross (est net $644.32)."}, "latestSnapshot": {"label": "Apple latest snapshot", "range": "Jul 26-Aug 1, 2026", "purchaseRevenue": 683.9, "estimatedDeveloperRevShare": 478.73, "downloads": 405, "note": "Manual Apple Connect screenshot. Sales are gross sales; downloads are free app downloads. Apple transaction count was not provided."}}, "sourceBreakout": [{"source": "Stripe", "purchases": 88, "purchaseRevenue": 1822.11, "detail": "Stripe refreshed Aug 2, 2026; only missing valid charge IDs from the fresh connector pull were added."}, {"source": "Roku", "purchases": 27, "purchaseRevenue": 499.73, "detail": "Last-good Roku Sales Activity values preserved; no zeroing."}, {"source": "Apple manual", "purchases": 22, "purchaseRevenue": 1046.68, "detail": "Manual Apple screenshot superseded Jul 24-Jul 30 $557.75 with Jul 26-Aug 1 $683.90; purchase count unchanged because screenshot was revenue-only."}], "baselineWindow": {"label": "Launch baseline", "range": "Apr 13-Apr 19, 2026", "purchases": 11, "purchaseRevenue": 159.89, "developerRevShare": 80.94, "revenuePerPurchase": 14.54, "payments": [{"date": "Apr 16", "amount": 29.98, "description": "Apple App Store - Purchase HD 15", "source": "Apple App Store"}]}, "yearToDate": {"label": "Visible sales this year", "range": "Jan 1-Aug 1, 2026", "purchases": 137, "purchaseRevenue": 3368.52, "developerRevShare": 2955.52, "revenuePerPurchase": 24.59, "developerRevShareNote": "Stripe full charge amount counted at 100% ($1822.11) + Roku developer share ($400.73) + Apple's estimated 70% net ($732.68) = $2955.52."}, "monthToDate": {"label": "Latest Stripe pull (rolling 7 days)", "range": "Jul 26-Aug 1, 2026", "purchases": 36, "purchaseRevenue": 749.64, "developerRevShare": 749.64, "revenuePerPurchase": 20.82, "payments": [{"id": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt", "date": "Aug 1", "createdAt": "2026-08-02T02:59:21Z", "sortDate": "2026-08-02T02:59:21Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt", "stripePaymentIntentId": "pi_3TzpcTLG0Cw1zW4e2ONdvaRi", "orderId": "itr-2026080202592092", "contentId": null, "contentTitle": null}, {"id": "ch_3TzmDeLG0Cw1zW4e1hSM76p5", "date": "Aug 1", "createdAt": "2026-08-01T23:21:31Z", "sortDate": "2026-08-01T23:21:31Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzmDeLG0Cw1zW4e1hSM76p5", "stripePaymentIntentId": "pi_3TzmDeLG0Cw1zW4e1DjlcMXo", "orderId": "baa-2026080123213055", "contentId": null, "contentTitle": null}, {"id": "ch_3TzUsaLG0Cw1zW4e1E2iPagJ", "date": "Jul 31", "createdAt": "2026-08-01T04:50:37Z", "sortDate": "2026-08-01T04:50:37Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzUsaLG0Cw1zW4e1E2iPagJ", "stripePaymentIntentId": "pi_3TzUsaLG0Cw1zW4e1tfWkCsi", "orderId": "sas-2026080104503658", "contentId": null, "contentTitle": null}, {"id": "ch_3TzUOVLG0Cw1zW4e1cL58jI6", "date": "Jul 31", "createdAt": "2026-08-01T04:19:31Z", "sortDate": "2026-08-01T04:19:31Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzUOVLG0Cw1zW4e1cL58jI6", "stripePaymentIntentId": "pi_3TzUOVLG0Cw1zW4e1RwTB9hv", "orderId": "wew-2026080104193090", "contentId": null, "contentTitle": null}, {"id": "ch_3TzUKMLG0Cw1zW4e2kKfWreG", "date": "Jul 31", "createdAt": "2026-08-01T04:15:14Z", "sortDate": "2026-08-01T04:15:14Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzUKMLG0Cw1zW4e2kKfWreG", "stripePaymentIntentId": "pi_3TzUKMLG0Cw1zW4e2H29Ygkt", "orderId": "pyy-2026080104151396", "contentId": null, "contentTitle": null}, {"id": "ch_3TzS18LG0Cw1zW4e0gJjIT5t", "date": "Jul 31", "createdAt": "2026-08-01T01:47:14Z", "sortDate": "2026-08-01T01:47:14Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzS18LG0Cw1zW4e0gJjIT5t", "stripePaymentIntentId": "pi_3TzS18LG0Cw1zW4e0ZkxzNE3", "orderId": "gol-2026080101471383", "contentId": null, "contentTitle": null}, {"id": "ch_3TzR9FLG0Cw1zW4e1mPMQLV7", "date": "Jul 31", "createdAt": "2026-08-01T00:51:33Z", "sortDate": "2026-08-01T00:51:33Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzR9FLG0Cw1zW4e1mPMQLV7", "stripePaymentIntentId": "pi_3TzR9FLG0Cw1zW4e1C46ZvYS", "orderId": "bag-2026080100513319", "contentId": null, "contentTitle": null}, {"id": "ch_3TzQHKLG0Cw1zW4e0m2DJ4QH", "date": "Jul 31", "createdAt": "2026-07-31T23:55:50Z", "sortDate": "2026-07-31T23:55:50Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzQHKLG0Cw1zW4e0m2DJ4QH", "stripePaymentIntentId": "pi_3TzQHKLG0Cw1zW4e0PP1u8tL", "orderId": "brr-2026073123554977", "contentId": null, "contentTitle": null}, {"id": "ch_3TzJehLG0Cw1zW4e0ZafeOP1", "date": "Jul 31", "createdAt": "2026-07-31T16:51:32Z", "sortDate": "2026-07-31T16:51:32Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzJehLG0Cw1zW4e0ZafeOP1", "stripePaymentIntentId": "pi_3TzJehLG0Cw1zW4e0PvTBJus", "orderId": "com-2026073116513172", "contentId": null, "contentTitle": null}, {"id": "ch_3TzJNXLG0Cw1zW4e0nCG3w5s", "date": "Jul 31", "createdAt": "2026-07-31T16:33:48Z", "sortDate": "2026-07-31T16:33:48Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzJNXLG0Cw1zW4e0nCG3w5s", "stripePaymentIntentId": "pi_3TzJNXLG0Cw1zW4e0huvDWSP", "orderId": "sah-2026073116334765", "contentId": null, "contentTitle": null}, {"id": "ch_3TzEFKLG0Cw1zW4e23n3fXCE", "date": "Jul 31", "createdAt": "2026-07-31T11:04:59Z", "sortDate": "2026-07-31T11:04:59Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzEFKLG0Cw1zW4e23n3fXCE", "stripePaymentIntentId": "pi_3TzEFKLG0Cw1zW4e2BhEcfTJ", "orderId": "spc-2026073111045857", "contentId": null, "contentTitle": null}, {"id": "ch_3TzCUiLG0Cw1zW4e16ILLnfy", "date": "Jul 31", "createdAt": "2026-07-31T09:12:45Z", "sortDate": "2026-07-31T09:12:45Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzCUiLG0Cw1zW4e16ILLnfy", "stripePaymentIntentId": "pi_3TzCUiLG0Cw1zW4e1e6IMbcp", "orderId": "boj-2026073109124470", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs", "date": "Jul 30", "createdAt": "2026-07-31T03:44:17Z", "sortDate": "2026-07-31T03:44:17Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs", "stripePaymentIntentId": "pi_3Tz7MrLG0Cw1zW4e0nFPqa1h", "orderId": "gaj-2026073103441719", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd", "date": "Jul 30", "createdAt": "2026-07-31T03:40:22Z", "sortDate": "2026-07-31T03:40:22Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd", "stripePaymentIntentId": "pi_3Tz7J4LG0Cw1zW4e0HUD0BHa", "orderId": "coj-2026073103402209", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR", "date": "Jul 30", "createdAt": "2026-07-31T03:29:27Z", "sortDate": "2026-07-31T03:29:27Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Anonymous Customer - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR", "stripePaymentIntentId": "pi_3Tz78ULG0Cw1zW4e0tM1JWeq", "orderId": "huc-2026073103292664", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv", "date": "Jul 30", "createdAt": "2026-07-31T00:16:09Z", "sortDate": "2026-07-31T00:16:09Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv", "stripePaymentIntentId": "pi_3Tz47RLG0Cw1zW4e1FYzc0le", "orderId": "taj-2026073100160920", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz3MsLG0Cw1zW4e00hGznTV", "date": "Jul 30", "createdAt": "2026-07-30T23:28:02Z", "sortDate": "2026-07-30T23:28:02Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz3MsLG0Cw1zW4e00hGznTV", "stripePaymentIntentId": "pi_3Tz3MsLG0Cw1zW4e0mjh6SJz", "orderId": "gud-2026073023280174", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz301LG0Cw1zW4e1OHOZPHl", "date": "Jul 30", "createdAt": "2026-07-30T23:04:26Z", "sortDate": "2026-07-30T23:04:26Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz301LG0Cw1zW4e1OHOZPHl", "stripePaymentIntentId": "pi_3Tz301LG0Cw1zW4e1ZokiUw6", "orderId": "war-2026073023042542", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7", "date": "Jul 30", "createdAt": "2026-07-30T22:05:40Z", "sortDate": "2026-07-30T22:05:40Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7", "stripePaymentIntentId": "pi_3Tz25ALG0Cw1zW4e2WFGOneD", "orderId": "dar-2026073022054001", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK", "date": "Jul 30", "createdAt": "2026-07-30T21:16:17Z", "sortDate": "2026-07-30T21:16:17Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK", "stripePaymentIntentId": "pi_3Tz1JNLG0Cw1zW4e10c2mJD9", "orderId": "kot-2026073021161666", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz1ANLG0Cw1zW4e0UQ7AKMZ", "date": "Jul 30", "createdAt": "2026-07-30T21:06:59Z", "sortDate": "2026-07-30T21:06:59Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz1ANLG0Cw1zW4e0UQ7AKMZ", "stripePaymentIntentId": "pi_3Tz1ANLG0Cw1zW4e0p7QtHKt", "orderId": "crj-2026073021065903", "contentId": null, "contentTitle": null}, {"id": "ch_3TyzCmLG0Cw1zW4e0OkN3IXD", "date": "Jul 30", "createdAt": "2026-07-30T19:01:20Z", "sortDate": "2026-07-30T19:01:20Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyzCmLG0Cw1zW4e0OkN3IXD", "stripePaymentIntentId": "pi_3TyzCmLG0Cw1zW4e0B1Gtod3", "orderId": "ind-2026073019012018", "contentId": null, "contentTitle": null}, {"id": "ch_3TyvJZLG0Cw1zW4e29PYVKoH", "date": "Jul 30", "createdAt": "2026-07-30T14:52:05Z", "sortDate": "2026-07-30T14:52:05Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyvJZLG0Cw1zW4e29PYVKoH", "stripePaymentIntentId": "pi_3TyvJZLG0Cw1zW4e2Xwr2Ngh", "orderId": "fis-2026073014520532", "contentId": null, "contentTitle": null}, {"id": "ch_3TyuURLG0Cw1zW4e2bpnTqLk", "date": "Jul 30", "createdAt": "2026-07-30T13:59:15Z", "sortDate": "2026-07-30T13:59:15Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Anonymous Customer - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyuURLG0Cw1zW4e2bpnTqLk", "stripePaymentIntentId": "pi_3TyuURLG0Cw1zW4e2dGOkWT1", "orderId": "bas-2026073013591485", "contentId": null, "contentTitle": null}, {"id": "ch_3Tyu2VLG0Cw1zW4e0luUxo96", "date": "Jul 30", "createdAt": "2026-07-30T13:30:23Z", "sortDate": "2026-07-30T13:30:23Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tyu2VLG0Cw1zW4e0luUxo96", "stripePaymentIntentId": "pi_3Tyu2VLG0Cw1zW4e00p70EBS", "orderId": "bom-2026073013302344", "contentId": null, "contentTitle": null}, {"id": "ch_3TytxLLG0Cw1zW4e2FpZ4FHc", "date": "Jul 30", "createdAt": "2026-07-30T13:25:03Z", "sortDate": "2026-07-30T13:25:03Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TytxLLG0Cw1zW4e2FpZ4FHc", "stripePaymentIntentId": "pi_3TytxLLG0Cw1zW4e2jaqTlD5", "orderId": "bed-2026073013250321", "contentId": null, "contentTitle": null}, {"id": "ch_3TytpLLG0Cw1zW4e2mlSZtpI", "date": "Jul 30", "createdAt": "2026-07-30T13:16:48Z", "sortDate": "2026-07-30T13:16:48Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TytpLLG0Cw1zW4e2mlSZtpI", "stripePaymentIntentId": "pi_3TytpLLG0Cw1zW4e2Uk4gTJE", "orderId": "tid-2026073013164763", "contentId": null, "contentTitle": null}, {"id": "ch_3Tys4oLG0Cw1zW4e18cjs5pa", "date": "Jul 30", "createdAt": "2026-07-30T11:24:38Z", "sortDate": "2026-07-30T11:24:38Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tys4oLG0Cw1zW4e18cjs5pa", "stripePaymentIntentId": "pi_3Tys4oLG0Cw1zW4e1EqfS7yB", "orderId": "ann-2026073011243826", "contentId": null, "contentTitle": null}, {"id": "ch_3TyrAVLG0Cw1zW4e1FifKDmF", "date": "Jul 30", "createdAt": "2026-07-30T10:26:27Z", "sortDate": "2026-07-30T10:26:27Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyrAVLG0Cw1zW4e1FifKDmF", "stripePaymentIntentId": "pi_3TyrAVLG0Cw1zW4e16XWG5po", "orderId": "paj-2026073010262706", "contentId": null, "contentTitle": null}, {"id": "ch_3Tyq1cLG0Cw1zW4e2FB0Tk9a", "date": "Jul 30", "createdAt": "2026-07-30T09:13:13Z", "sortDate": "2026-07-30T09:13:13Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tyq1cLG0Cw1zW4e2FB0Tk9a", "stripePaymentIntentId": "pi_3Tyq1cLG0Cw1zW4e2sUdkqzy", "orderId": "mec-2026073009131248", "contentId": null, "contentTitle": null}, {"id": "ch_3TypI6LG0Cw1zW4e1qSCh6i3", "date": "Jul 30", "createdAt": "2026-07-30T08:26:10Z", "sortDate": "2026-07-30T08:26:10Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TypI6LG0Cw1zW4e1qSCh6i3", "stripePaymentIntentId": "pi_3TypI6LG0Cw1zW4e1DWOdzwV", "orderId": "pem-2026073008261037", "contentId": null, "contentTitle": null}, {"id": "ch_3Tyot3LG0Cw1zW4e0qLYtbmV", "date": "Jul 30", "createdAt": "2026-07-30T08:00:17Z", "sortDate": "2026-07-30T08:00:17Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tyot3LG0Cw1zW4e0qLYtbmV", "stripePaymentIntentId": "pi_3Tyot3LG0Cw1zW4e065eK1tE", "orderId": "jom-2026073008001694", "contentId": null, "contentTitle": null}, {"id": "ch_3TyUuPLG0Cw1zW4e2UIrqDbg", "date": "Jul 29", "createdAt": "2026-07-29T10:40:21Z", "sortDate": "2026-07-29T10:40:21Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyUuPLG0Cw1zW4e2UIrqDbg", "stripePaymentIntentId": "pi_3TyUuPLG0Cw1zW4e2XnL5rB4", "orderId": "paj-2026072910402080", "contentId": null, "contentTitle": null}, {"id": "ch_3Txt8TLG0Cw1zW4e0nsHWvcG", "date": "Jul 27", "createdAt": "2026-07-27T18:20:21Z", "sortDate": "2026-07-27T18:20:21Z", "amount": 14.99, "developerRevShare": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Txt8TLG0Cw1zW4e0nsHWvcG", "stripePaymentIntentId": "pi_3Txt8TLG0Cw1zW4e0n5w12v6", "orderId": "jom-2026072718202102", "contentId": null, "contentTitle": null}, {"id": "ch_3Txt79LG0Cw1zW4e1I51WlLH", "date": "Jul 27", "createdAt": "2026-07-27T18:18:59Z", "sortDate": "2026-07-27T18:18:59Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Txt79LG0Cw1zW4e1I51WlLH", "stripePaymentIntentId": "pi_3Txt79LG0Cw1zW4e1zbs8Q3n", "orderId": "jom-2026072718185937", "contentId": null, "contentTitle": null}, {"id": "ch_3TxbcULG0Cw1zW4e1fG5wBI6", "date": "Jul 26", "createdAt": "2026-07-26T23:38:10Z", "sortDate": "2026-07-26T23:38:10Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TxbcULG0Cw1zW4e1fG5wBI6", "stripePaymentIntentId": "pi_3TxbcULG0Cw1zW4e1VCvW9gh", "orderId": "jom-2026072623381034", "contentId": null, "contentTitle": null}], "note": "Fresh Stripe connector pull for Jul 26-Aug 1, 2026. Valid charges are paid/captured/succeeded/non-refunded; duplicate charge IDs already in the dashboard were not counted twice."}, "lastWeek": {"label": "Apple latest snapshot", "range": "Jul 26-Aug 1, 2026", "purchases": null, "purchaseRevenue": 683.9, "estimatedDeveloperRevShare": 478.73, "downloads": 405, "note": "Most recent Apple App Store Connect screenshot. The sales screenshot is gross revenue by day, not transaction count, so Apple purchase count is left blank rather than invented."}, "thisWeek": {"label": "Visible YTD", "range": "Jan 1-Aug 1, 2026", "purchases": 137, "purchaseRevenue": 3368.52, "developerRevShare": 2955.52, "note": "Visible platform sales: Stripe (88/$1822.11) + Roku (27/$499.73) + Apple manual (22/$1046.68). Apple count excludes unknown transactions from revenue-only screenshots."}, "currentCompleteWeek": {"label": "Visible YTD", "range": "Jan 1-Aug 1, 2026", "purchases": 137, "purchaseRevenue": 3368.52, "developerRevShare": 2955.52, "note": "Visible platform sales: Stripe (88/$1822.11) + Roku (27/$499.73) + Apple manual (22/$1046.68). Apple count excludes unknown transactions from revenue-only screenshots."}, "weekToDate": {"label": "Visible YTD", "range": "Jan 1-Aug 1, 2026", "purchases": 137, "purchaseRevenue": 3368.52, "developerRevShare": 2955.52, "note": "Visible platform sales: Stripe (88/$1822.11) + Roku (27/$499.73) + Apple manual (22/$1046.68). Apple count excludes unknown transactions from revenue-only screenshots."}, "recent12Days": {"label": "Latest Stripe pull (rolling 7 days)", "range": "Jul 26-Aug 1, 2026", "purchases": 36, "purchaseRevenue": 749.64, "developerRevShare": 749.64, "revenuePerPurchase": 20.82, "payments": [{"id": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt", "date": "Aug 1", "createdAt": "2026-08-02T02:59:21Z", "sortDate": "2026-08-02T02:59:21Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt", "stripePaymentIntentId": "pi_3TzpcTLG0Cw1zW4e2ONdvaRi", "orderId": "itr-2026080202592092", "contentId": null, "contentTitle": null}, {"id": "ch_3TzmDeLG0Cw1zW4e1hSM76p5", "date": "Aug 1", "createdAt": "2026-08-01T23:21:31Z", "sortDate": "2026-08-01T23:21:31Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzmDeLG0Cw1zW4e1hSM76p5", "stripePaymentIntentId": "pi_3TzmDeLG0Cw1zW4e1DjlcMXo", "orderId": "baa-2026080123213055", "contentId": null, "contentTitle": null}, {"id": "ch_3TzUsaLG0Cw1zW4e1E2iPagJ", "date": "Jul 31", "createdAt": "2026-08-01T04:50:37Z", "sortDate": "2026-08-01T04:50:37Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzUsaLG0Cw1zW4e1E2iPagJ", "stripePaymentIntentId": "pi_3TzUsaLG0Cw1zW4e1tfWkCsi", "orderId": "sas-2026080104503658", "contentId": null, "contentTitle": null}, {"id": "ch_3TzUOVLG0Cw1zW4e1cL58jI6", "date": "Jul 31", "createdAt": "2026-08-01T04:19:31Z", "sortDate": "2026-08-01T04:19:31Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzUOVLG0Cw1zW4e1cL58jI6", "stripePaymentIntentId": "pi_3TzUOVLG0Cw1zW4e1RwTB9hv", "orderId": "wew-2026080104193090", "contentId": null, "contentTitle": null}, {"id": "ch_3TzUKMLG0Cw1zW4e2kKfWreG", "date": "Jul 31", "createdAt": "2026-08-01T04:15:14Z", "sortDate": "2026-08-01T04:15:14Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzUKMLG0Cw1zW4e2kKfWreG", "stripePaymentIntentId": "pi_3TzUKMLG0Cw1zW4e2H29Ygkt", "orderId": "pyy-2026080104151396", "contentId": null, "contentTitle": null}, {"id": "ch_3TzS18LG0Cw1zW4e0gJjIT5t", "date": "Jul 31", "createdAt": "2026-08-01T01:47:14Z", "sortDate": "2026-08-01T01:47:14Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzS18LG0Cw1zW4e0gJjIT5t", "stripePaymentIntentId": "pi_3TzS18LG0Cw1zW4e0ZkxzNE3", "orderId": "gol-2026080101471383", "contentId": null, "contentTitle": null}, {"id": "ch_3TzR9FLG0Cw1zW4e1mPMQLV7", "date": "Jul 31", "createdAt": "2026-08-01T00:51:33Z", "sortDate": "2026-08-01T00:51:33Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzR9FLG0Cw1zW4e1mPMQLV7", "stripePaymentIntentId": "pi_3TzR9FLG0Cw1zW4e1C46ZvYS", "orderId": "bag-2026080100513319", "contentId": null, "contentTitle": null}, {"id": "ch_3TzQHKLG0Cw1zW4e0m2DJ4QH", "date": "Jul 31", "createdAt": "2026-07-31T23:55:50Z", "sortDate": "2026-07-31T23:55:50Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzQHKLG0Cw1zW4e0m2DJ4QH", "stripePaymentIntentId": "pi_3TzQHKLG0Cw1zW4e0PP1u8tL", "orderId": "brr-2026073123554977", "contentId": null, "contentTitle": null}, {"id": "ch_3TzJehLG0Cw1zW4e0ZafeOP1", "date": "Jul 31", "createdAt": "2026-07-31T16:51:32Z", "sortDate": "2026-07-31T16:51:32Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzJehLG0Cw1zW4e0ZafeOP1", "stripePaymentIntentId": "pi_3TzJehLG0Cw1zW4e0PvTBJus", "orderId": "com-2026073116513172", "contentId": null, "contentTitle": null}, {"id": "ch_3TzJNXLG0Cw1zW4e0nCG3w5s", "date": "Jul 31", "createdAt": "2026-07-31T16:33:48Z", "sortDate": "2026-07-31T16:33:48Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzJNXLG0Cw1zW4e0nCG3w5s", "stripePaymentIntentId": "pi_3TzJNXLG0Cw1zW4e0huvDWSP", "orderId": "sah-2026073116334765", "contentId": null, "contentTitle": null}, {"id": "ch_3TzEFKLG0Cw1zW4e23n3fXCE", "date": "Jul 31", "createdAt": "2026-07-31T11:04:59Z", "sortDate": "2026-07-31T11:04:59Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzEFKLG0Cw1zW4e23n3fXCE", "stripePaymentIntentId": "pi_3TzEFKLG0Cw1zW4e2BhEcfTJ", "orderId": "spc-2026073111045857", "contentId": null, "contentTitle": null}, {"id": "ch_3TzCUiLG0Cw1zW4e16ILLnfy", "date": "Jul 31", "createdAt": "2026-07-31T09:12:45Z", "sortDate": "2026-07-31T09:12:45Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TzCUiLG0Cw1zW4e16ILLnfy", "stripePaymentIntentId": "pi_3TzCUiLG0Cw1zW4e1e6IMbcp", "orderId": "boj-2026073109124470", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs", "date": "Jul 30", "createdAt": "2026-07-31T03:44:17Z", "sortDate": "2026-07-31T03:44:17Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs", "stripePaymentIntentId": "pi_3Tz7MrLG0Cw1zW4e0nFPqa1h", "orderId": "gaj-2026073103441719", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd", "date": "Jul 30", "createdAt": "2026-07-31T03:40:22Z", "sortDate": "2026-07-31T03:40:22Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd", "stripePaymentIntentId": "pi_3Tz7J4LG0Cw1zW4e0HUD0BHa", "orderId": "coj-2026073103402209", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR", "date": "Jul 30", "createdAt": "2026-07-31T03:29:27Z", "sortDate": "2026-07-31T03:29:27Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Anonymous Customer - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR", "stripePaymentIntentId": "pi_3Tz78ULG0Cw1zW4e0tM1JWeq", "orderId": "huc-2026073103292664", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv", "date": "Jul 30", "createdAt": "2026-07-31T00:16:09Z", "sortDate": "2026-07-31T00:16:09Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv", "stripePaymentIntentId": "pi_3Tz47RLG0Cw1zW4e1FYzc0le", "orderId": "taj-2026073100160920", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz3MsLG0Cw1zW4e00hGznTV", "date": "Jul 30", "createdAt": "2026-07-30T23:28:02Z", "sortDate": "2026-07-30T23:28:02Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz3MsLG0Cw1zW4e00hGznTV", "stripePaymentIntentId": "pi_3Tz3MsLG0Cw1zW4e0mjh6SJz", "orderId": "gud-2026073023280174", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz301LG0Cw1zW4e1OHOZPHl", "date": "Jul 30", "createdAt": "2026-07-30T23:04:26Z", "sortDate": "2026-07-30T23:04:26Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz301LG0Cw1zW4e1OHOZPHl", "stripePaymentIntentId": "pi_3Tz301LG0Cw1zW4e1ZokiUw6", "orderId": "war-2026073023042542", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7", "date": "Jul 30", "createdAt": "2026-07-30T22:05:40Z", "sortDate": "2026-07-30T22:05:40Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7", "stripePaymentIntentId": "pi_3Tz25ALG0Cw1zW4e2WFGOneD", "orderId": "dar-2026073022054001", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK", "date": "Jul 30", "createdAt": "2026-07-30T21:16:17Z", "sortDate": "2026-07-30T21:16:17Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK", "stripePaymentIntentId": "pi_3Tz1JNLG0Cw1zW4e10c2mJD9", "orderId": "kot-2026073021161666", "contentId": null, "contentTitle": null}, {"id": "ch_3Tz1ANLG0Cw1zW4e0UQ7AKMZ", "date": "Jul 30", "createdAt": "2026-07-30T21:06:59Z", "sortDate": "2026-07-30T21:06:59Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tz1ANLG0Cw1zW4e0UQ7AKMZ", "stripePaymentIntentId": "pi_3Tz1ANLG0Cw1zW4e0p7QtHKt", "orderId": "crj-2026073021065903", "contentId": null, "contentTitle": null}, {"id": "ch_3TyzCmLG0Cw1zW4e0OkN3IXD", "date": "Jul 30", "createdAt": "2026-07-30T19:01:20Z", "sortDate": "2026-07-30T19:01:20Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyzCmLG0Cw1zW4e0OkN3IXD", "stripePaymentIntentId": "pi_3TyzCmLG0Cw1zW4e0B1Gtod3", "orderId": "ind-2026073019012018", "contentId": null, "contentTitle": null}, {"id": "ch_3TyvJZLG0Cw1zW4e29PYVKoH", "date": "Jul 30", "createdAt": "2026-07-30T14:52:05Z", "sortDate": "2026-07-30T14:52:05Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyvJZLG0Cw1zW4e29PYVKoH", "stripePaymentIntentId": "pi_3TyvJZLG0Cw1zW4e2Xwr2Ngh", "orderId": "fis-2026073014520532", "contentId": null, "contentTitle": null}, {"id": "ch_3TyuURLG0Cw1zW4e2bpnTqLk", "date": "Jul 30", "createdAt": "2026-07-30T13:59:15Z", "sortDate": "2026-07-30T13:59:15Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Anonymous Customer - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyuURLG0Cw1zW4e2bpnTqLk", "stripePaymentIntentId": "pi_3TyuURLG0Cw1zW4e2dGOkWT1", "orderId": "bas-2026073013591485", "contentId": null, "contentTitle": null}, {"id": "ch_3Tyu2VLG0Cw1zW4e0luUxo96", "date": "Jul 30", "createdAt": "2026-07-30T13:30:23Z", "sortDate": "2026-07-30T13:30:23Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tyu2VLG0Cw1zW4e0luUxo96", "stripePaymentIntentId": "pi_3Tyu2VLG0Cw1zW4e00p70EBS", "orderId": "bom-2026073013302344", "contentId": null, "contentTitle": null}, {"id": "ch_3TytxLLG0Cw1zW4e2FpZ4FHc", "date": "Jul 30", "createdAt": "2026-07-30T13:25:03Z", "sortDate": "2026-07-30T13:25:03Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TytxLLG0Cw1zW4e2FpZ4FHc", "stripePaymentIntentId": "pi_3TytxLLG0Cw1zW4e2jaqTlD5", "orderId": "bed-2026073013250321", "contentId": null, "contentTitle": null}, {"id": "ch_3TytpLLG0Cw1zW4e2mlSZtpI", "date": "Jul 30", "createdAt": "2026-07-30T13:16:48Z", "sortDate": "2026-07-30T13:16:48Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TytpLLG0Cw1zW4e2mlSZtpI", "stripePaymentIntentId": "pi_3TytpLLG0Cw1zW4e2Uk4gTJE", "orderId": "tid-2026073013164763", "contentId": null, "contentTitle": null}, {"id": "ch_3Tys4oLG0Cw1zW4e18cjs5pa", "date": "Jul 30", "createdAt": "2026-07-30T11:24:38Z", "sortDate": "2026-07-30T11:24:38Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tys4oLG0Cw1zW4e18cjs5pa", "stripePaymentIntentId": "pi_3Tys4oLG0Cw1zW4e1EqfS7yB", "orderId": "ann-2026073011243826", "contentId": null, "contentTitle": null}, {"id": "ch_3TyrAVLG0Cw1zW4e1FifKDmF", "date": "Jul 30", "createdAt": "2026-07-30T10:26:27Z", "sortDate": "2026-07-30T10:26:27Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyrAVLG0Cw1zW4e1FifKDmF", "stripePaymentIntentId": "pi_3TyrAVLG0Cw1zW4e16XWG5po", "orderId": "paj-2026073010262706", "contentId": null, "contentTitle": null}, {"id": "ch_3Tyq1cLG0Cw1zW4e2FB0Tk9a", "date": "Jul 30", "createdAt": "2026-07-30T09:13:13Z", "sortDate": "2026-07-30T09:13:13Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tyq1cLG0Cw1zW4e2FB0Tk9a", "stripePaymentIntentId": "pi_3Tyq1cLG0Cw1zW4e2sUdkqzy", "orderId": "mec-2026073009131248", "contentId": null, "contentTitle": null}, {"id": "ch_3TypI6LG0Cw1zW4e1qSCh6i3", "date": "Jul 30", "createdAt": "2026-07-30T08:26:10Z", "sortDate": "2026-07-30T08:26:10Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TypI6LG0Cw1zW4e1qSCh6i3", "stripePaymentIntentId": "pi_3TypI6LG0Cw1zW4e1DWOdzwV", "orderId": "pem-2026073008261037", "contentId": null, "contentTitle": null}, {"id": "ch_3Tyot3LG0Cw1zW4e0qLYtbmV", "date": "Jul 30", "createdAt": "2026-07-30T08:00:17Z", "sortDate": "2026-07-30T08:00:17Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Season Pass: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Tyot3LG0Cw1zW4e0qLYtbmV", "stripePaymentIntentId": "pi_3Tyot3LG0Cw1zW4e065eK1tE", "orderId": "jom-2026073008001694", "contentId": null, "contentTitle": null}, {"id": "ch_3TyUuPLG0Cw1zW4e2UIrqDbg", "date": "Jul 29", "createdAt": "2026-07-29T10:40:21Z", "sortDate": "2026-07-29T10:40:21Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TyUuPLG0Cw1zW4e2UIrqDbg", "stripePaymentIntentId": "pi_3TyUuPLG0Cw1zW4e2XnL5rB4", "orderId": "paj-2026072910402080", "contentId": null, "contentTitle": null}, {"id": "ch_3Txt8TLG0Cw1zW4e0nsHWvcG", "date": "Jul 27", "createdAt": "2026-07-27T18:20:21Z", "sortDate": "2026-07-27T18:20:21Z", "amount": 14.99, "developerRevShare": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Txt8TLG0Cw1zW4e0nsHWvcG", "stripePaymentIntentId": "pi_3Txt8TLG0Cw1zW4e0n5w12v6", "orderId": "jom-2026072718202102", "contentId": null, "contentTitle": null}, {"id": "ch_3Txt79LG0Cw1zW4e1I51WlLH", "date": "Jul 27", "createdAt": "2026-07-27T18:18:59Z", "sortDate": "2026-07-27T18:18:59Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3Txt79LG0Cw1zW4e1I51WlLH", "stripePaymentIntentId": "pi_3Txt79LG0Cw1zW4e1zbs8Q3n", "orderId": "jom-2026072718185937", "contentId": null, "contentTitle": null}, {"id": "ch_3TxbcULG0Cw1zW4e1fG5wBI6", "date": "Jul 26", "createdAt": "2026-07-26T23:38:10Z", "sortDate": "2026-07-26T23:38:10Z", "amount": 20.99, "developerRevShare": 20.99, "description": "Customer User - Purchase Bundle 21: Signup payment", "source": "Stripe", "stripeChargeId": "ch_3TxbcULG0Cw1zW4e1fG5wBI6", "stripePaymentIntentId": "pi_3TxbcULG0Cw1zW4e1VCvW9gh", "orderId": "jom-2026072623381034", "contentId": null, "contentTitle": null}], "note": "Fresh Stripe connector pull for Jul 26-Aug 1, 2026. Valid charges are paid/captured/succeeded/non-refunded; duplicate charge IDs already in the dashboard were not counted twice."}, "lifetimeObserved": {"range": "Through Jun 8, 2026 refresh", "purchases": 45, "purchaseRevenue": 841.55, "developerRevShare": 305.38}, "mix": [{"source": "Stripe", "purchases": 88, "purchaseRevenue": 1822.11, "detail": "Stripe refreshed Aug 2, 2026; only missing valid charge IDs from the fresh connector pull were added."}, {"source": "Roku", "purchases": 27, "purchaseRevenue": 499.73, "detail": "Last-good Roku Sales Activity values preserved; no zeroing."}, {"source": "Apple manual", "purchases": 22, "purchaseRevenue": 1046.68, "detail": "Manual Apple screenshot superseded Jul 24-Jul 30 $557.75 with Jul 26-Aug 1 $683.90; purchase count unchanged because screenshot was revenue-only."}], "recentPayments": [{"id": "pi_3TYIl0LG0Cw1zW4e29yDkQvy", "date": "May 17", "createdAt": "2026-05-17 21:26 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TXC7jLG0Cw1zW4e0aTDzJEJ", "date": "May 14", "createdAt": "2026-05-14 20:09 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TU0PpLG0Cw1zW4e1xA1B4CB", "date": "May 6", "createdAt": "2026-05-06 01:02 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TQfbqLG0Cw1zW4e0xCVetD1", "date": "Apr 26", "createdAt": "2026-04-26 20:13 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TPsMQLG0Cw1zW4e1KupKuAF", "date": "Apr 24", "createdAt": "2026-04-24 15:38 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TP3uxLG0Cw1zW4e0LSedyYu", "date": "Apr 22", "createdAt": "2026-04-22 09:46 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TOx2ZLG0Cw1zW4e1W7SJZXg", "date": "Apr 22", "createdAt": "2026-04-22 02:25 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TOTAALG0Cw1zW4e0dIkMbV1", "date": "Apr 20", "createdAt": "2026-04-20 18:31 PDT", "amount": 14.99, "description": "Anonymous Customer - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TNjaVLG0Cw1zW4e2up0QKdp", "date": "Apr 18", "createdAt": "2026-04-18 17:51 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TN1fjLG0Cw1zW4e1efwz7Hc", "date": "Apr 16", "createdAt": "2026-04-16 18:58 PDT", "amount": 9.99, "description": "Customer User - Purchase Bundle 10: Signup payment", "source": "Stripe"}, {"id": "pi_3TMxdiLG0Cw1zW4e0ApnxCmW", "date": "Apr 16", "createdAt": "2026-04-16 14:39 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}, {"id": "pi_3TMxZHLG0Cw1zW4e0RXKnWOb", "date": "Apr 16", "createdAt": "2026-04-16 14:35 PDT", "amount": 14.99, "description": "Customer User - Purchase this title: Signup payment", "source": "Stripe"}], "dailyTrend": [{"date": "Jan 1", "rawDate": "20260101", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 0.0}, {"date": "Jan 2", "rawDate": "20260102", "purchases": 1, "purchaseRevenue": 89.99, "developerRevShare": 0.0}, {"date": "Jan 14", "rawDate": "20260114", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Jan 19", "rawDate": "20260119", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 0.0}, {"date": "Feb 14", "rawDate": "20260214", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Feb 23", "rawDate": "20260223", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Apr 13", "rawDate": "20260413", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 14", "rawDate": "20260414", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "Apr 15", "rawDate": "20260415", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 16", "rawDate": "20260416", "purchases": 5, "purchaseRevenue": 74.95, "developerRevShare": 32.98}, {"date": "Apr 17", "rawDate": "20260417", "purchases": 2, "purchaseRevenue": 24.98, "developerRevShare": 11.99}, {"date": "Apr 18", "rawDate": "20260418", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 19", "rawDate": "20260419", "purchases": 2, "purchaseRevenue": 29.98, "developerRevShare": 11.99}, {"date": "Apr 20", "rawDate": "20260420", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 21", "rawDate": "20260421", "purchases": 2, "purchaseRevenue": 24.98, "developerRevShare": 6.99}, {"date": "Apr 22", "rawDate": "20260422", "purchases": 3, "purchaseRevenue": 84.97, "developerRevShare": 43.99}, {"date": "Apr 23", "rawDate": "20260423", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 24", "rawDate": "20260424", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "Apr 25", "rawDate": "20260425", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 26", "rawDate": "20260426", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 27", "rawDate": "20260427", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "Apr 28", "rawDate": "20260428", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 29", "rawDate": "20260429", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Apr 30", "rawDate": "20260430", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 1", "rawDate": "20260501", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 2", "rawDate": "20260502", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 3", "rawDate": "20260503", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 4", "rawDate": "20260504", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "May 5", "rawDate": "20260505", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 6", "rawDate": "20260506", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "May 7", "rawDate": "20260507", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 8", "rawDate": "20260508", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 9", "rawDate": "20260509", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 10", "rawDate": "20260510", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 11", "rawDate": "20260511", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 12", "rawDate": "20260512", "purchases": 2, "purchaseRevenue": 5.98, "developerRevShare": 4.78}, {"date": "May 13", "rawDate": "20260513", "purchases": 2, "purchaseRevenue": 32.98, "developerRevShare": 23.38}, {"date": "May 14", "rawDate": "20260514", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 2.39}, {"date": "May 15", "rawDate": "20260515", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "May 16", "rawDate": "20260516", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 15.99}, {"date": "May 17", "rawDate": "20260517", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 18", "rawDate": "20260518", "purchases": 4, "purchaseRevenue": 74.96, "developerRevShare": 43.47}, {"date": "May 19", "rawDate": "20260519", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 20", "rawDate": "20260520", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 11.99}, {"date": "May 21", "rawDate": "20260521", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 22", "rawDate": "20260522", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 23", "rawDate": "20260523", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 24", "rawDate": "20260524", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 25", "rawDate": "20260525", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "May 26", "rawDate": "20260526", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 27", "rawDate": "20260527", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 28", "rawDate": "20260528", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "May 29", "rawDate": "20260529", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 30", "rawDate": "20260530", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "May 31", "rawDate": "20260531", "purchases": 0, "purchaseRevenue": 0.0, "developerRevShare": 0.0}, {"date": "Jun 10", "rawDate": "20260610", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 11", "rawDate": "20260611", "purchases": 2, "purchaseRevenue": 29.98, "developerRevShare": 22.48}, {"date": "Jun 12", "rawDate": "20260612", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "Jun 13", "rawDate": "20260613", "purchases": 3, "purchaseRevenue": 44.97, "developerRevShare": 32.98}, {"date": "Jun 14", "rawDate": "20260614", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 15", "rawDate": "20260615", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 0.0}, {"date": "Jun 16", "rawDate": "20260616", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 19", "rawDate": "20260619", "purchases": 1, "purchaseRevenue": 54.99, "developerRevShare": 43.99}, {"date": "Jun 22", "rawDate": "20260622", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 24", "rawDate": "20260624", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 13.99}, {"date": "Jun 26", "rawDate": "20260626", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 27", "rawDate": "20260627", "purchases": 3, "purchaseRevenue": 44.97, "developerRevShare": 22.48}, {"date": "Jun 28", "rawDate": "20260628", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jun 30", "rawDate": "20260630", "purchases": 2, "purchaseRevenue": 57.98, "developerRevShare": 46.08}, {"date": "Jul 2", "rawDate": "20260702", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jul 5", "rawDate": "20260705", "purchases": 1, "purchaseRevenue": 14.99, "developerRevShare": 10.49}, {"date": "Jul 19", "rawDate": "20260719", "purchases": 2, "purchaseRevenue": 32.98, "developerRevShare": 0.0}, {"date": "Jul 20", "rawDate": "20260720", "purchases": 2, "purchaseRevenue": 59.98, "developerRevShare": 0.0}, {"date": "Jul 21", "rawDate": "20260721", "purchases": 1, "purchaseRevenue": 19.98, "developerRevShare": 0.0}, {"date": "Jul 26", "rawDate": "20260726", "purchases": 2, "purchaseRevenue": 50.98, "developerRevShare": 0.0}, {"date": "Jul 27", "rawDate": "20260727", "purchases": 3, "purchaseRevenue": 68.37, "developerRevShare": 20.58}, {"date": "Jul 28", "rawDate": "20260728", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Jul 29", "rawDate": "20260729", "purchases": 1, "purchaseRevenue": 73.49, "developerRevShare": 36.75}, {"date": "Jul 30", "rawDate": "20260730", "purchases": 17, "purchaseRevenue": 674.53, "developerRevShare": 216.09}, {"date": "Jul 31", "rawDate": "20260731", "purchases": 14, "purchaseRevenue": 426.16, "developerRevShare": 92.61}, {"date": "Aug 1", "rawDate": "20260801", "purchases": 2, "purchaseRevenue": 202.98, "developerRevShare": 112.7}, {"date": "Aug 2", "rawDate": "20260802", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Aug 4", "rawDate": "20260804", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 0.0}, {"date": "Aug 7", "rawDate": "20260807", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 0.0}, {"date": "Aug 12", "rawDate": "20260812", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 0.0}, {"date": "Aug 13", "rawDate": "20260813", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Aug 14", "rawDate": "20260814", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 0.0}, {"date": "Aug 18", "rawDate": "20260818", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Aug 21", "rawDate": "20260821", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Aug 27", "rawDate": "20260827", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 0.0}, {"date": "Aug 31", "rawDate": "20260831", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Sep 21", "rawDate": "20260921", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 0.0}, {"date": "Sep 25", "rawDate": "20260925", "purchases": 1, "purchaseRevenue": 2.99, "developerRevShare": 0.0}, {"date": "Sep 26", "rawDate": "20260926", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Sep 28", "rawDate": "20260928", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 0.0}, {"date": "Oct 29", "rawDate": "20261029", "purchases": 2, "purchaseRevenue": 19.98, "developerRevShare": 0.0}, {"date": "Nov 18", "rawDate": "20261118", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Nov 28", "rawDate": "20261128", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}, {"date": "Dec 1", "rawDate": "20261201", "purchases": 1, "purchaseRevenue": 9.99, "developerRevShare": 0.0}, {"date": "Dec 7", "rawDate": "20261207", "purchases": 1, "purchaseRevenue": 19.99, "developerRevShare": 0.0}, {"date": "Dec 28", "rawDate": "20261228", "purchases": 1, "purchaseRevenue": 29.99, "developerRevShare": 0.0}], "note": "Visible platform sales fully reconciled Jul 31, 2026: 127 purchases / $3032.47 YTD across Stripe (78/$1612.21, full rebuild from the fresh connector pull's complete 78-charge valid set), Roku (27/$499.73, unchanged), and manual Apple snapshots (22/$920.53, unchanged this pass). This corrects an earlier same-day undercount: the prior 52/$1075.45 Stripe figure and 101/$2495.71 platform YTD resulted from diffing 23 new charges against a stale, already-incomplete baseline instead of rebuilding from the full valid Stripe charge set, and are both superseded -- do not treat them as current. The three small sales cards below are now rolling 7-day windows ending on the latest sales-update date (2026-07-31): 'Latest Stripe pull', 'Apple latest snapshot', and 'Visible YTD'. The former GA4-usage-week $96.94 figure is retained only as a clearly labeled secondary historical note, not a headline card.", "current": {"purchases": 137, "purchaseRevenue": 3368.52, "developerRevShare": 2955.52, "label": "Visible YTD (Jan 1-Aug 1, 2026)"}, "postUsageWeekAdditions": {"label": "Superseded: see 'Latest Stripe pull' / 'Apple latest snapshot' / 'Visible YTD' cards", "supersededAsOf": "2026-07-31", "note": "This block previously explained which post-period Apple/Stripe additions were excluded from the old GA4-usage-week mini-card. The mini-cards have been reframed as rolling 7-day windows ending on the latest sales-update date, so that gap no longer exists -- the 'Latest Stripe pull' and 'Apple latest snapshot' cards now directly show the most current activity. Retained as an empty pointer only to avoid breaking any code paths that reference this key; contains no summed/actionable figures.", "alreadyIncludedInYearToDate": true}, "lifetime": {"label": "Visible lifetime sales (through this refresh)", "purchases": 137, "purchaseRevenue": 3368.52, "developerRevShare": 2955.52, "asOf": "2026-08-01"}, "usageWeekHistorical": {"label": "Historical note: complete GA4 usage week (superseded as a headline card)", "range": "Jul 21-Jul 27, 2026", "purchases": 5, "purchaseRevenue": 96.94, "note": "This is the dashboard's previously-selected complete GA4 usage week (Jul 21-Jul 27, 2026). It is retained here ONLY as a secondary historical reference and is NOT one of the three main sales cards -- it should not be read as the current/latest sales figure. The user correctly flagged this $96.94 number as misleading when circled/screenshotted as if it were the current headline sales figure; see 'Latest Stripe pull', 'Apple latest snapshot', and 'Visible YTD' above for current figures.", "isHistoricalOnly": true, "isMainCard": false}, "latestSevenDayVisibleSales": {"label": "Latest visible sales snapshot", "range": "Jul 26-Aug 1, 2026", "knownStripePurchases": 36, "stripeRevenue": 749.64, "appleGrossRevenue": 683.9, "knownVisibleRevenue": 1433.54, "appleDownloads": 405, "note": "Seven-day visible sales combines fresh Stripe charges plus Apple gross sales. Roku sales are not included in this seven-day figure unless a matching fresh Roku Sales Activity report is available."}}, "contentUsage": {"period": "May 25-May 31, 2026", "live": {"total": {"screenPageViews": 1932, "activeUsers": 166, "eventCount": 23489}, "platforms": [{"platform": "web", "screen": "Live", "screenPageViews": 1549, "activeUsers": 8, "eventCount": 1549}, {"platform": "Android", "screen": "Live", "screenPageViews": 276, "activeUsers": 106, "eventCount": 11712}, {"platform": "iOS", "screen": "Live", "screenPageViews": 107, "activeUsers": 52, "eventCount": 10228}], "playback": {"play": 4208, "video_start": 2247, "end_playback": 274}, "playbackRows": [{"event": "play", "label": "Play events", "eventCount": 4208}, {"event": "video_start", "label": "Video starts", "eventCount": 2247}, {"event": "end_playback", "label": "Ended playbacks", "eventCount": 274}], "topChannels": [{"title": "ElectricNOW", "plays": 3529, "activeUsers": 160, "rank": 1}, {"title": "spot on news", "plays": 174, "activeUsers": 8, "rank": 2}, {"title": "ElectricNOW en Español", "plays": 101, "activeUsers": 12, "rank": 3}, {"title": "Kung Fu Movies", "plays": 57, "activeUsers": 13, "rank": 4}, {"title": "Daily Flash", "plays": 32, "activeUsers": 5, "rank": 5}, {"title": "Stoner TV Network", "plays": 23, "activeUsers": 8, "rank": 6}, {"title": "Grindhouse Gold", "plays": 22, "activeUsers": 7, "rank": 7}, {"title": "ToonOvation", "plays": 22, "activeUsers": 12, "rank": 8}, {"title": "BayView Documentaries", "plays": 19, "activeUsers": 5, "rank": 9}, {"title": "Horror Asylum", "plays": 19, "activeUsers": 12, "rank": 10}], "note": "Live usage is based on GA4 screen name 'Live' plus playback events that also carried the Live screen name."}, "onDemand": {"total": {"screenPageViews": 3264, "activeUsers": 861, "eventCount": 3760}, "platforms": [{"platform": "web", "screen": "On Demand", "screenPageViews": 2699, "activeUsers": 662, "eventCount": 2699}, {"platform": "Android", "screen": "On Demand", "screenPageViews": 405, "activeUsers": 136, "eventCount": 641}, {"platform": "iOS", "screen": "On Demand", "screenPageViews": 160, "activeUsers": 63, "eventCount": 420}], "note": "On Demand usage is based on GA4 screen name 'On Demand'. Title-level viewing is shown below from GA4 video_title play events."}, "freshnessNote": "No fresh GA4 app-screen source in the Jun 29-Jul 5, 2026 run; values preserved from the last complete window where a clean app-screen export was available."}, "titleViewership": {"period": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)", "note": "Top programs roll up GA4 play-event labels into parent shows/collections where possible and rank by play events because ads monetize playback. Live/FAST/linear channels are excluded from Top Shows and Top Videos and reported separately under Live channel usage. Title mapping remains dependent on app metadata quality. On hours watched: GA4 tracks these titles by play events (video starts) and unique viewers, not watched hours — the app fires a “play” event per title but no per-title watch-duration, video length, or completion event, so an hours-watched column cannot be shown here without inventing numbers. True watched-hours by title exists today only for YouTube (estimatedMinutesWatched), reported separately in the YouTube section and keyed to YouTube video IDs, so it cannot be mapped onto these app show names. To rank these titles by real hours watched, add a GA4 event that reports elapsed playback time per title — e.g. a periodic video_progress / video_complete event carrying video_title plus watch seconds (or engagement_time_msec scoped to the title) — after which this column can switch from Total viewers to Hours watched.", "topVideoTitlesNote": "Top videos shows individual on-demand video plays only. Live/FAST/linear channel rows (e.g. DARK MATTER TV, Kung Fu Movies, spot on news, ToonOvation, ElectricNOW en Espanol, Stoner TV Network) are excluded here and reported separately in 'Live channel usage'. Top 50 may list fewer than 50 entries until the next GA4 refresh overfetches with the stricter row-level live-channel predicate.", "topPrograms": [{"program": "Leverage: Redemption", "plays": 114, "activeUsers": 21, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 2, "examples": ["Leverage: Redemption - Season 3", "Leverage: Redemption (Seasons 1 & 2)"], "rank": 1}, {"program": "The Ark", "plays": 60, "activeUsers": 16, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Ark"], "rank": 2}, {"program": "The Librarians: The Next Chapter", "plays": 38, "activeUsers": 6, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 2, "examples": ["The Librarians: The Next Chapter (Season 1)", "The Librarians: The Next Chapter Season 2 Teaser"], "rank": 3}, {"program": "Leverage", "plays": 38, "activeUsers": 5, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Leverage"], "rank": 4}, {"program": "Almost Paradise", "plays": 22, "activeUsers": 4, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Almost Paradise (Season 1 & 2)"], "rank": 5}, {"program": "The Messenger", "plays": 12, "activeUsers": 3, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Messenger"], "rank": 6}, {"program": "Abroad", "plays": 11, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Abroad"], "rank": 7}, {"program": "Checking Out: The Librarians Next Chapter", "plays": 11, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Checking Out: The Librarians Next Chapter"], "rank": 8}, {"program": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast", "plays": 6, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Official Leverage: Redemption After Show - A Very Distinctive Podcast"], "rank": 9}, {"program": "The Poly Couple", "plays": 6, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Poly Couple (Season 1)"], "rank": 10}, {"program": "Art of Life", "plays": 5, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Art of Life"], "rank": 11}, {"program": "The Side Job", "plays": 4, "activeUsers": 3, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Side Job"], "rank": 12}, {"program": "Delicious", "plays": 4, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Delicious"], "rank": 13}, {"program": "Ghosted", "plays": 4, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Ghosted"], "rank": 14}, {"program": "Black Mamba", "plays": 3, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Black Mamba"], "rank": 15}, {"program": "The Outpost", "plays": 3, "activeUsers": 2, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Outpost"], "rank": 16}, {"program": "6 Horas", "plays": 3, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["6 Horas"], "rank": 17}, {"program": "Paradise Found", "plays": 3, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Paradise Found"], "rank": 18}, {"program": "The Triangle Mini-Series", "plays": 3, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Triangle Mini-Series"], "rank": 19}, {"program": "The Triangle Night 1", "plays": 3, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Triangle Night 1"], "rank": 20}, {"program": "A Christmas Carol", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["A Christmas Carol"], "rank": 21}, {"program": "A Crack in the Floor", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["A Crack in the Floor"], "rank": 22}, {"program": "ElectricCon Fan Convention", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["ElectricCon Fan Convention"], "rank": 23}, {"program": "Exile", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Exile"], "rank": 24}, {"program": "FMWBH: F'ing My Way Back Home", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["FMWBH: F'ing My Way Back Home"], "rank": 25}, {"program": "Generation Z", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Generation Z"], "rank": 26}, {"program": "Highlander", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Highlander"], "rank": 27}, {"program": "One Big Happy Family", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["One Big Happy Family"], "rank": 28}, {"program": "Reef Eel Soup for the Soul", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Reef Eel Soup for the Soul"], "rank": 29}, {"program": "The Librarian: Curse of the Judas Chalice", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Librarian: Curse of the Judas Chalice"], "rank": 30}, {"program": "The Triangle Night 2", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Triangle Night 2"], "rank": 31}, {"program": "The Weekend In Paris Job", "plays": 2, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["The Weekend In Paris Job"], "rank": 32}, {"program": "Adventures of Sonic the Hedgehog", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Adventures of Sonic the Hedgehog"], "rank": 33}, {"program": "Apalancamiento", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Apalancamiento"], "rank": 34}, {"program": "Ares 11", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Ares 11"], "rank": 35}, {"program": "Asian American Pacific Islander Month", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Asian American Pacific Islander Month"], "rank": 36}, {"program": "Awake in the Woods", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Awake in the Woods"], "rank": 37}, {"program": "Bad Samaritan", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Bad Samaritan"], "rank": 38}, {"program": "Blank Slate", "plays": 1, "activeUsers": 1, "viewerMethod": "deduped_ga4_filter", "rawLabelCount": 1, "examples": ["Blank Slate"], "rank": 39}], "topVideoTitles": [{"title": "Leverage: Redemption - Season 3", "plays": 83, "activeUsers": 21, "group": "Leverage: Redemption", "rank": 1}, {"title": "The Ark", "plays": 60, "activeUsers": 16, "group": "The Ark", "rank": 2}, {"title": "Leverage", "plays": 38, "activeUsers": 5, "group": "Leverage", "rank": 3}, {"title": "The Librarians: The Next Chapter (Season 1)", "plays": 32, "activeUsers": 6, "group": "The Librarians: The Next Chapter", "rank": 4}, {"title": "Leverage: Redemption (Seasons 1 & 2)", "plays": 31, "activeUsers": 7, "group": "Leverage: Redemption", "rank": 5}, {"title": "Almost Paradise (Season 1 & 2)", "plays": 22, "activeUsers": 4, "group": "Almost Paradise", "rank": 6}, {"title": "The Messenger", "plays": 12, "activeUsers": 3, "group": "The Messenger", "rank": 7}, {"title": "Abroad", "plays": 11, "activeUsers": 2, "group": "Abroad", "rank": 8}, {"title": "Checking Out: The Librarians Next Chapter", "plays": 11, "activeUsers": 2, "group": "Checking Out: The Librarians Next Chapter", "rank": 9}, {"title": "The Librarians: The Next Chapter Season 2 Teaser", "plays": 6, "activeUsers": 2, "group": "The Librarians: The Next Chapter", "rank": 10}, {"title": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast", "plays": 6, "activeUsers": 2, "group": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast", "rank": 11}, {"title": "The Poly Couple (Season 1)", "plays": 6, "activeUsers": 2, "group": "The Poly Couple", "rank": 12}, {"title": "Art of Life", "plays": 5, "activeUsers": 1, "group": "Art of Life", "rank": 13}, {"title": "The Side Job", "plays": 4, "activeUsers": 3, "group": "The Side Job", "rank": 14}, {"title": "Delicious", "plays": 4, "activeUsers": 2, "group": "Delicious", "rank": 15}, {"title": "Ghosted", "plays": 4, "activeUsers": 2, "group": "Ghosted", "rank": 16}, {"title": "Black Mamba", "plays": 3, "activeUsers": 2, "group": "Black Mamba", "rank": 17}, {"title": "The Outpost", "plays": 3, "activeUsers": 2, "group": "The Outpost", "rank": 18}, {"title": "6 Horas", "plays": 3, "activeUsers": 1, "group": "6 Horas", "rank": 19}, {"title": "Paradise Found", "plays": 3, "activeUsers": 1, "group": "Paradise Found", "rank": 20}, {"title": "The Triangle Mini-Series", "plays": 3, "activeUsers": 1, "group": "The Triangle Mini-Series", "rank": 21}, {"title": "The Triangle Night 1", "plays": 3, "activeUsers": 1, "group": "The Triangle Night 1", "rank": 22}, {"title": "A Christmas Carol", "plays": 2, "activeUsers": 1, "group": "A Christmas Carol", "rank": 23}, {"title": "A Crack in the Floor", "plays": 2, "activeUsers": 1, "group": "A Crack in the Floor", "rank": 24}, {"title": "ElectricCon Fan Convention", "plays": 2, "activeUsers": 1, "group": "ElectricCon Fan Convention", "rank": 25}, {"title": "Exile", "plays": 2, "activeUsers": 1, "group": "Exile", "rank": 26}, {"title": "FMWBH: F'ing My Way Back Home", "plays": 2, "activeUsers": 1, "group": "FMWBH: F'ing My Way Back Home", "rank": 27}, {"title": "Generation Z", "plays": 2, "activeUsers": 1, "group": "Generation Z", "rank": 28}, {"title": "Highlander", "plays": 2, "activeUsers": 1, "group": "Highlander", "rank": 29}, {"title": "One Big Happy Family", "plays": 2, "activeUsers": 1, "group": "One Big Happy Family", "rank": 30}, {"title": "Reef Eel Soup for the Soul", "plays": 2, "activeUsers": 1, "group": "Reef Eel Soup for the Soul", "rank": 31}, {"title": "The Librarian: Curse of the Judas Chalice", "plays": 2, "activeUsers": 1, "group": "The Librarian: Curse of the Judas Chalice", "rank": 32}, {"title": "The Triangle Night 2", "plays": 2, "activeUsers": 1, "group": "The Triangle Night 2", "rank": 33}, {"title": "The Weekend In Paris Job", "plays": 2, "activeUsers": 1, "group": "The Weekend In Paris Job", "rank": 34}, {"title": "Adventures of Sonic the Hedgehog", "plays": 1, "activeUsers": 1, "group": "Adventures of Sonic the Hedgehog", "rank": 35}, {"title": "Apalancamiento", "plays": 1, "activeUsers": 1, "group": "Apalancamiento", "rank": 36}, {"title": "Ares 11", "plays": 1, "activeUsers": 1, "group": "Ares 11", "rank": 37}, {"title": "Asian American Pacific Islander Month", "plays": 1, "activeUsers": 1, "group": "Asian American Pacific Islander Month", "rank": 38}, {"title": "Awake in the Woods", "plays": 1, "activeUsers": 1, "group": "Awake in the Woods", "rank": 39}, {"title": "Bad Samaritan", "plays": 1, "activeUsers": 1, "group": "Bad Samaritan", "rank": 40}, {"title": "Blank Slate", "plays": 1, "activeUsers": 1, "group": "Blank Slate", "rank": 41}, {"title": "Bodies", "plays": 1, "activeUsers": 1, "group": "Bodies", "rank": 42}, {"title": "Demon Stalker", "plays": 1, "activeUsers": 1, "group": "Demon Stalker", "rank": 43}, {"title": "Episode 5", "plays": 1, "activeUsers": 1, "group": "Episode 5", "rank": 44}, {"title": "I Never Cry", "plays": 1, "activeUsers": 1, "group": "I Never Cry", "rank": 45}, {"title": "Killington", "plays": 1, "activeUsers": 1, "group": "Killington", "rank": 46}, {"title": "Pistol Whip", "plays": 1, "activeUsers": 1, "group": "Pistol Whip", "rank": 47}, {"title": "Silent Night: A Song for the World", "plays": 1, "activeUsers": 1, "group": "Silent Night: A Song for the World", "rank": 48}, {"title": "Somewhere in Montana", "plays": 1, "activeUsers": 1, "group": "Somewhere in Montana", "rank": 49}], "topChannelTitles": [{"title": "Leverage: Redemption - Season 3", "plays": 83, "activeUsers": 21, "rank": 1}, {"title": "The Ark", "plays": 60, "activeUsers": 16, "rank": 2}, {"title": "Leverage", "plays": 38, "activeUsers": 5, "rank": 3}, {"title": "The Librarians: The Next Chapter (Season 1)", "plays": 32, "activeUsers": 6, "rank": 4}, {"title": "Leverage: Redemption (Seasons 1 & 2)", "plays": 31, "activeUsers": 7, "rank": 5}, {"title": "Almost Paradise (Season 1 & 2)", "plays": 22, "activeUsers": 4, "rank": 6}, {"title": "The Messenger", "plays": 12, "activeUsers": 3, "rank": 7}, {"title": "Abroad", "plays": 11, "activeUsers": 2, "rank": 8}, {"title": "Checking Out: The Librarians Next Chapter", "plays": 11, "activeUsers": 2, "rank": 9}, {"title": "The Librarians: The Next Chapter Season 2 Teaser", "plays": 6, "activeUsers": 2, "rank": 10}, {"title": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast", "plays": 6, "activeUsers": 2, "rank": 11}, {"title": "The Poly Couple (Season 1)", "plays": 6, "activeUsers": 2, "rank": 12}, {"title": "Art of Life", "plays": 5, "activeUsers": 1, "rank": 13}, {"title": "The Side Job", "plays": 4, "activeUsers": 3, "rank": 14}, {"title": "Delicious", "plays": 4, "activeUsers": 2, "rank": 15}, {"title": "Ghosted", "plays": 4, "activeUsers": 2, "rank": 16}, {"title": "Black Mamba", "plays": 3, "activeUsers": 2, "rank": 17}, {"title": "The Outpost", "plays": 3, "activeUsers": 2, "rank": 18}, {"title": "6 Horas", "plays": 3, "activeUsers": 1, "rank": 19}, {"title": "Paradise Found", "plays": 3, "activeUsers": 1, "rank": 20}, {"title": "The Triangle Mini-Series", "plays": 3, "activeUsers": 1, "rank": 21}, {"title": "The Triangle Night 1", "plays": 3, "activeUsers": 1, "rank": 22}, {"title": "A Christmas Carol", "plays": 2, "activeUsers": 1, "rank": 23}, {"title": "A Crack in the Floor", "plays": 2, "activeUsers": 1, "rank": 24}]}, "metaCampaignContext": {"source": "ENow-TV-April-1st-May-3rd-Meta-Ads.xlsx, Raw Data Report!A1:W361", "note": "Meta campaign objective shifted from landing-page traffic, to app-store button-click leads, to direct app-install campaigns starting Apr 28. The app-install phase bypasses the website landing page, so lower landing-page traffic is expected and should not be judged as a standalone negative.", "phases": [{"phase": "Traffic to landing page", "dateRange": "Apr 16-Apr 23", "objective": "Link clicks", "results": "5,656 link clicks", "spend": "$887.22", "costPerResult": "$0.16"}, {"phase": "Leads / app-store button clicks", "dateRange": "Apr 23-May 1", "objective": "Website leads / app-store button clicks", "results": "2,095 button-click leads", "spend": "$1,452.24", "costPerResult": "$0.69"}, {"phase": "Direct app-install campaigns", "dateRange": "Apr 28-May 3", "objective": "Mobile app installs", "results": "1,465 installs", "spend": "$723.72", "costPerResult": "$0.49"}], "appInstallBreakout": "Through May 3, Meta reported 516 iOS installs at about $0.65 each and 949 Google Play installs at about $0.41 each.", "interpretation": "Judge the newest phase by installs, app opens, viewing, Live usage, purchases, and ad value rather than by landing-page traffic."}, "appUsage": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "appActiveUsers": 1547, "appSessions": 2889, "appEngagedSessions": 2339, "appEngagementRate": 80.96227068189685, "viewingUsers": 730, "viewingShare": 47.18810601163542, "onDemandStartUsers": 699, "onDemandStartEvents": 2508, "liveChannelViewers": 46, "livePlayEvents": 1673}, "previousWeek": {"range": "May 18-May 24, 2026", "appActiveUsers": 5343, "appSessions": 8599, "appEngagedSessions": 7017, "appEngagementRate": 81.60251191999069, "viewingUsers": 2260, "viewingShare": 42.298334269137186, "onDemandStartUsers": 2229, "onDemandStartEvents": 8448, "liveChannelViewers": 38, "livePlayEvents": 1655}, "currentWeek": {"range": "May 25-May 31, 2026", "appActiveUsers": 5635, "appSessions": 8832, "appEngagedSessions": 7125, "appEngagementRate": 80.6725543478261, "viewingUsers": 2328, "viewingShare": 41.31322094055013, "onDemandStartUsers": 2283, "onDemandStartEvents": 7885, "liveChannelViewers": 51, "livePlayEvents": 1631}, "freshnessNote": "No fresh GA4 app-screen source in the Jun 29-Jul 5, 2026 run; values preserved from the last complete window where a clean app-screen export was available."}, "platformTime": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "activeUsers": 8742, "sessions": 13350, "engagedSessions": 7917, "engagementRate": 59.30337078651685, "totalEngagementSeconds": 13150782, "totalEngagementHours": 3652.995, "avgEngagedMinutesPerUser": 25.072031571722718, "avgEngagedMinutesPerSession": 16.417955056179775, "ga4AverageSessionMinutes": 22.769179101851435, "platformBreakout": [{"platform": "web", "activeUsers": 7033, "sessions": 10031, "engagedSessions": 5221, "avgEngagedMinutesPerUser": 16.21484193563676, "avgEngagedMinutesPerSession": 11.368655501279367, "ga4AverageSessionMinutes": 13.258718967379458}, {"platform": "iOS", "activeUsers": 896, "sessions": 1427, "engagedSessions": 1272, "avgEngagedMinutesPerUser": 63.90292038690476, "avgEngagedMinutesPerSession": 40.12404811959823, "ga4AverageSessionMinutes": 44.78369523208362}, {"platform": "Android", "activeUsers": 813, "sessions": 1892, "engagedSessions": 1424, "avgEngagedMinutesPerUser": 58.89753997539976, "avgEngagedMinutesPerSession": 25.308509513742074, "ga4AverageSessionMinutes": 56.58773676096723}], "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."}, "previousWeek": {"range": "May 18-May 24, 2026", "activeUsers": 7616, "sessions": 14072, "engagedSessions": 11573, "engagementRate": 82.24133030130756, "totalEngagementSeconds": 18920573, "totalEngagementHours": 5255.714722222222, "avgEngagedMinutesPerUser": 41.40531556372549, "avgEngagedMinutesPerSession": 22.409244125450066, "ga4AverageSessionMinutes": 61.60810070515563, "platformBreakout": [{"platform": "Android", "activeUsers": 3226, "sessions": 5188, "engagedSessions": 4252, "avgEngagedMinutesPerUser": 19.763484190948542, "avgEngagedMinutesPerSession": 12.289321511179645, "ga4AverageSessionMinutes": 109.80297653093035}, {"platform": "iOS", "activeUsers": 2325, "sessions": 3811, "engagedSessions": 3196, "avgEngagedMinutesPerUser": 41.14767741935484, "avgEngagedMinutesPerSession": 25.10321437942797, "ga4AverageSessionMinutes": 29.076549897572818}, {"platform": "web", "activeUsers": 2065, "sessions": 5073, "engagedSessions": 4125, "avgEngagedMinutesPerUser": 75.50485875706214, "avgEngagedMinutesPerSession": 30.73477889480255, "ga4AverageSessionMinutes": 36.759436077436106}], "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."}, "currentWeek": {"range": "May 25-May 31, 2026", "activeUsers": 7844, "sessions": 14259, "engagedSessions": 11506, "engagementRate": 80.69289571498702, "totalEngagementSeconds": 19465580, "totalEngagementHours": 5407.105555555556, "avgEngagedMinutesPerUser": 41.35980792112868, "avgEngagedMinutesPerSession": 22.75239030320032, "ga4AverageSessionMinutes": 59.59084461335944, "platformBreakout": [{"platform": "Android", "activeUsers": 3276, "sessions": 5164, "engagedSessions": 4066, "avgEngagedMinutesPerUser": 22.847120472120473, "avgEngagedMinutesPerSession": 14.494029176349082, "ga4AverageSessionMinutes": 108.83817197057776}, {"platform": "iOS", "activeUsers": 2563, "sessions": 4165, "engagedSessions": 3511, "avgEngagedMinutesPerUser": 34.91463779425153, "avgEngagedMinutesPerSession": 21.485286114445778, "ga4AverageSessionMinutes": 23.31271856910407}, {"platform": "web", "activeUsers": 2005, "sessions": 4930, "engagedSessions": 3929, "avgEngagedMinutesPerUser": 79.84685785536159, "avgEngagedMinutesPerSession": 32.47321501014199, "ga4AverageSessionMinutes": 38.654778995032494}], "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."}, "freshnessNote": "No fresh GA4 app-screen source in the Jun 29-Jul 5, 2026 run; values preserved from the last complete window where a clean app-screen export was available."}, "acquisitionSummary": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "totalGa4ActiveUsers": 8739.0, "totalGa4Sessions": 13421.0, "totalGa4EngagementRate": 59.310036509947096, "landingPageUsers": 1045, "landingPageSessions": 1485, "devicesPageUsers": 2028, "devicesPageSessions": 2119, "paidSocialUsers": 4441, "paidSocialSessions": 4547}, "previousWeek": {"range": "Preserved · last fresh Jun 1-Jun 7, 2026 (no fresh source this run)", "totalGa4ActiveUsers": 7608, "totalGa4Sessions": 13911, "totalGa4EngagementRate": 78.16835597728416, "landingPageUsers": 606, "landingPageSessions": 909, "paidSocialUsers": 2436, "paidSocialSessions": 3360}, "currentWeek": {"range": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)", "totalGa4ActiveUsers": 7282, "totalGa4Sessions": 13850, "totalGa4EngagementRate": 77.50180505415163, "landingPageUsers": 744, "landingPageSessions": 1080, "paidSocialUsers": 2421, "paidSocialSessions": 3497}, "landingPage": {"sourceLabel": "Landing page acquisition only", "currentWeek": {"range": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)", "activeUsers": 744, "newUsers": null, "sessions": 1080, "engagedSessions": 996, "engagementRate": 92.22222222222223, "screenPageViews": 1448, "eventCount": 2457}, "previousWeek": {"range": "Preserved · last fresh Jun 1-Jun 7, 2026 (no fresh source this run)", "activeUsers": 606, "newUsers": 497, "sessions": 909, "engagedSessions": 840, "engagementRate": 92.4092409240924, "screenPageViews": 1175, "eventCount": 1959}, "deltaActiveUsersPct": 22.772277227722775}, "sourceMedium": [{"sessionSourceMedium": "(direct) / (none)", "activeUsers": 3163, "newUsers": 1946, "sessions": 5386, "engagedSessions": 4405, "engagementRate": 81.7861121425919, "eventCount": 174483}, {"sessionSourceMedium": "apps.facebook.com / (not set)", "activeUsers": 1801, "newUsers": 1293, "sessions": 2575, "engagedSessions": 1940, "engagementRate": 75.33980582524272, "eventCount": 36707}, {"sessionSourceMedium": "homescreen / (not set)", "activeUsers": 719, "newUsers": 182, "sessions": 2274, "engagedSessions": 1965, "engagementRate": 86.41160949868075, "eventCount": 460155}, {"sessionSourceMedium": "google / organic", "activeUsers": 389, "newUsers": 326, "sessions": 632, "engagedSessions": 556, "engagementRate": 87.9746835443038, "eventCount": 13407}, {"sessionSourceMedium": "google-play / organic", "activeUsers": 293, "newUsers": 187, "sessions": 501, "engagedSessions": 423, "engagementRate": 84.4311377245509, "eventCount": 27093}, {"sessionSourceMedium": "(not set)", "activeUsers": 88, "newUsers": 9, "sessions": 501, "engagedSessions": 0, "engagementRate": 0.0, "eventCount": 58150}, {"sessionSourceMedium": "hs-search / (not set)", "activeUsers": 64, "newUsers": 14, "sessions": 449, "engagedSessions": 394, "engagementRate": 87.75055679287304, "eventCount": 100637}, {"sessionSourceMedium": "apps.instagram.com / (not set)", "activeUsers": 294, "newUsers": 215, "sessions": 413, "engagedSessions": 313, "engagementRate": 75.78692493946731, "eventCount": 7728}, {"sessionSourceMedium": "apps.facebook.com / (none)", "activeUsers": 32, "newUsers": 0, "sessions": 157, "engagedSessions": 120, "engagementRate": 76.43312101910828, "eventCount": 847}, {"sessionSourceMedium": "fb / paid", "activeUsers": 107, "newUsers": 18, "sessions": 138, "engagedSessions": 108, "engagementRate": 78.26086956521739, "eventCount": 1598}, {"sessionSourceMedium": "bing / organic", "activeUsers": 59, "newUsers": 38, "sessions": 121, "engagedSessions": 109, "engagementRate": 90.08264462809917, "eventCount": 8388}, {"sessionSourceMedium": "channel-store / (not set)", "activeUsers": 20, "newUsers": 8, "sessions": 102, "engagedSessions": 97, "engagementRate": 95.09803921568627, "eventCount": 23065}, {"sessionSourceMedium": "google / cpc", "activeUsers": 57, "newUsers": 4, "sessions": 87, "engagedSessions": 75, "engagementRate": 86.20689655172413, "eventCount": 987}, {"sessionSourceMedium": "m.facebook.com / referral", "activeUsers": 69, "newUsers": 69, "sessions": 69, "engagedSessions": 45, "engagementRate": 65.21739130434783, "eventCount": 367}, {"sessionSourceMedium": "electricentertainment.com / referral", "activeUsers": 28, "newUsers": 21, "sessions": 57, "engagedSessions": 48, "engagementRate": 84.21052631578947, "eventCount": 2707}, {"sessionSourceMedium": "facebook.com / referral", "activeUsers": 54, "newUsers": 54, "sessions": 54, "engagedSessions": 14, "engagementRate": 25.925925925925924, "eventCount": 303}, {"sessionSourceMedium": "lm.facebook.com / referral", "activeUsers": 32, "newUsers": 32, "sessions": 32, "engagedSessions": 7, "engagementRate": 21.875, "eventCount": 135}, {"sessionSourceMedium": "homescreen / (none)", "activeUsers": 2, "newUsers": 0, "sessions": 32, "engagedSessions": 32, "engagementRate": 100.0, "eventCount": 61767}, {"sessionSourceMedium": "ntp.msn.com / referral", "activeUsers": 3, "newUsers": 0, "sessions": 30, "engagedSessions": 29, "engagementRate": 96.66666666666667, "eventCount": 2123}, {"sessionSourceMedium": "ig / paid", "activeUsers": 23, "newUsers": 9, "sessions": 26, "engagedSessions": 22, "engagementRate": 84.61538461538461, "eventCount": 352}, {"sessionSourceMedium": "hs-voice-search / (not set)", "activeUsers": 9, "newUsers": 2, "sessions": 26, "engagedSessions": 20, "engagementRate": 76.92307692307693, "eventCount": 3520}, {"sessionSourceMedium": "apps.instagram.com / (none)", "activeUsers": 3, "newUsers": 0, "sessions": 22, "engagedSessions": 18, "engagementRate": 81.81818181818183, "eventCount": 1003}, {"sessionSourceMedium": "l.instagram.com / referral", "activeUsers": 17, "newUsers": 17, "sessions": 18, "engagedSessions": 5, "engagementRate": 27.77777777777778, "eventCount": 82}, {"sessionSourceMedium": "l.facebook.com / referral", "activeUsers": 11, "newUsers": 8, "sessions": 18, "engagedSessions": 7, "engagementRate": 38.88888888888889, "eventCount": 154}, {"sessionSourceMedium": "yahoo / organic", "activeUsers": 11, "newUsers": 8, "sessions": 16, "engagedSessions": 16, "engagementRate": 100.0, "eventCount": 760}, {"sessionSourceMedium": "voice-command / (not set)", "activeUsers": 3, "newUsers": 1, "sessions": 16, "engagedSessions": 14, "engagementRate": 87.5, "eventCount": 4868}, {"sessionSourceMedium": "mail.yahoo.com / referral", "activeUsers": 1, "newUsers": 0, "sessions": 16, "engagedSessions": 15, "engagementRate": 93.75, "eventCount": 230}, {"sessionSourceMedium": "roku-mobile-app / (not set)", "activeUsers": 7, "newUsers": 2, "sessions": 15, "engagedSessions": 13, "engagementRate": 86.66666666666667, "eventCount": 2590}, {"sessionSourceMedium": "other-channel / (not set)", "activeUsers": 3, "newUsers": 0, "sessions": 14, "engagedSessions": 13, "engagementRate": 92.85714285714286, "eventCount": 4680}, {"sessionSourceMedium": "login.microsoftonline.com / referral", "activeUsers": 1, "newUsers": 0, "sessions": 12, "engagedSessions": 12, "engagementRate": 100.0, "eventCount": 1062}, {"sessionSourceMedium": "statics.teams.cdn.office.net / referral", "activeUsers": 1, "newUsers": 0, "sessions": 12, "engagedSessions": 10, "engagementRate": 83.33333333333334, "eventCount": 259}, {"sessionSourceMedium": "bit.ly / referral", "activeUsers": 11, "newUsers": 11, "sessions": 11, "engagedSessions": 4, "engagementRate": 36.36363636363637, "eventCount": 54}, {"sessionSourceMedium": "duckduckgo / organic", "activeUsers": 8, "newUsers": 6, "sessions": 11, "engagedSessions": 8, "engagementRate": 72.72727272727273, "eventCount": 88}, {"sessionSourceMedium": "linktr.ee / referral", "activeUsers": 8, "newUsers": 8, "sessions": 8, "engagedSessions": 5, "engagementRate": 62.5, "eventCount": 40}, {"sessionSourceMedium": "th / paid", "activeUsers": 7, "newUsers": 1, "sessions": 8, "engagedSessions": 6, "engagementRate": 75.0, "eventCount": 48}, {"sessionSourceMedium": "electric.ottera.tv / referral", "activeUsers": 1, "newUsers": 0, "sessions": 8, "engagedSessions": 4, "engagementRate": 50.0, "eventCount": 54}, {"sessionSourceMedium": "reddit.com / referral", "activeUsers": 6, "newUsers": 7, "sessions": 7, "engagedSessions": 4, "engagementRate": 57.14285714285714, "eventCount": 51}, {"sessionSourceMedium": "electricnow.us.auth0.com / referral", "activeUsers": 5, "newUsers": 2, "sessions": 7, "engagedSessions": 6, "engagementRate": 85.71428571428571, "eventCount": 178}, {"sessionSourceMedium": "tvbrittanyf.com / referral", "activeUsers": 5, "newUsers": 5, "sessions": 6, "engagedSessions": 6, "engagementRate": 100.0, "eventCount": 87}, {"sessionSourceMedium": "youtube.com / referral", "activeUsers": 4, "newUsers": 4, "sessions": 6, "engagedSessions": 4, "engagementRate": 66.66666666666666, "eventCount": 69}, {"sessionSourceMedium": "t.co / referral", "activeUsers": 4, "newUsers": 4, "sessions": 5, "engagedSessions": 2, "engagementRate": 40.0, "eventCount": 22}, {"sessionSourceMedium": "go.bsky.app / referral", "activeUsers": 1, "newUsers": 0, "sessions": 4, "engagedSessions": 0, "engagementRate": 0.0, "eventCount": 12}, {"sessionSourceMedium": "hs-d / (not set)", "activeUsers": 1, "newUsers": 1, "sessions": 4, "engagedSessions": 0, "engagementRate": 0.0, "eventCount": 26}, {"sessionSourceMedium": "ecosia.org / organic", "activeUsers": 2, "newUsers": 1, "sessions": 2, "engagedSessions": 2, "engagementRate": 100.0, "eventCount": 18}, {"sessionSourceMedium": "onebighappyfamilymovie.com / referral", "activeUsers": 2, "newUsers": 2, "sessions": 2, "engagedSessions": 0, "engagementRate": 0.0, "eventCount": 8}, {"sessionSourceMedium": "threads / social", "activeUsers": 2, "newUsers": 2, "sessions": 2, "engagedSessions": 2, "engagementRate": 100.0, "eventCount": 11}, {"sessionSourceMedium": "chatgpt.com / (not set)", "activeUsers": 1, "newUsers": 1, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 5}, {"sessionSourceMedium": "go.aftvnews.com / referral", "activeUsers": 1, "newUsers": 1, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 8}, {"sessionSourceMedium": "hs-search / (none)", "activeUsers": 1, "newUsers": 0, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 657}, {"sessionSourceMedium": "instagram / organic", "activeUsers": 1, "newUsers": 0, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 3}, {"sessionSourceMedium": "m.youtube.com / referral", "activeUsers": 1, "newUsers": 1, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 13}, {"sessionSourceMedium": "startpage.com / referral", "activeUsers": 1, "newUsers": 1, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 26}, {"sessionSourceMedium": "vizio.com / referral", "activeUsers": 1, "newUsers": 1, "sessions": 1, "engagedSessions": 1, "engagementRate": 100.0, "eventCount": 7}], "campaigns": [{"sessionCampaignName": "(direct)", "activeUsers": 3271, "newUsers": 2052, "sessions": 5505, "engagedSessions": 4505, "engagementRate": 81.83469573115349, "eventCount": 205601}, {"sessionCampaignName": "fb4a", "activeUsers": 2048, "newUsers": 1644, "sessions": 2791, "engagedSessions": 2200, "engagementRate": 78.8247939806521, "eventCount": 48102}, {"sessionCampaignName": "(not set)", "activeUsers": 1206, "newUsers": 462, "sessions": 3685, "engagedSessions": 2813, "engagementRate": 76.33649932157395, "eventCount": 658532}, {"sessionCampaignName": "(organic)", "activeUsers": 347, "newUsers": 276, "sessions": 649, "engagedSessions": 550, "engagementRate": 84.7457627118644, "eventCount": 28088}, {"sessionCampaignName": "ig4a", "activeUsers": 345, "newUsers": 273, "sessions": 481, "engagedSessions": 375, "engagementRate": 77.96257796257797, "eventCount": 13663}, {"sessionCampaignName": "(referral)", "activeUsers": 285, "newUsers": 268, "sessions": 357, "engagedSessions": 185, "engagementRate": 51.820728291316534, "eventCount": 5116}, {"sessionCampaignName": "PCSM - ElectricNow App Promotion - Android", "activeUsers": 175, "newUsers": 106, "sessions": 265, "engagedSessions": 232, "engagementRate": 87.54716981132076, "eventCount": 4636}, {"sessionCampaignName": "6946101792958", "activeUsers": 78, "newUsers": 21, "sessions": 103, "engagedSessions": 84, "engagementRate": 81.55339805825243, "eventCount": 832}, {"sessionCampaignName": "6952224519558", "activeUsers": 68, "newUsers": 15, "sessions": 79, "engagedSessions": 57, "engagementRate": 72.15189873417721, "eventCount": 578}], "note": "Acquisition rows are GA4 source/medium and campaign rows. Website landing traffic is acquisition-only and is not counted as platform audience."}, "viewingBehavior": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "viewingEventUsers": 1152, "videoStartUsers": 1152, "videoStartEvents": 14853, "videoPlayUsers": 324, "videoPlayEvents": 4643, "videoCompleteUsers": 219, "videoCompleteEvents": 2980, "onDemandStartUsers": 1020, "onDemandStartEvents": 12876, "liveChannelViewers": 121, "livePlayEvents": 3952, "adRequestEvents": 10589, "adErrorEvents": 158}, "previousWeek": {"range": "Preserved · last fresh Jun 1-Jun 7, 2026 (no fresh source this run)", "viewingEventUsers": 2570, "videoStartUsers": 2486, "videoStartEvents": 20510, "videoPlayUsers": 264, "videoPlayEvents": 15366, "videoCompleteUsers": 255, "videoCompleteEvents": 3391, "onDemandStartUsers": 2354, "onDemandStartEvents": 18533, "liveChannelViewers": 132, "livePlayEvents": 3898, "adRequestEvents": 23365, "adErrorEvents": 112}, "currentWeek": {"range": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)", "videoStartUsers": 2319, "videoStartEvents": 20195, "videoPlayUsers": 295, "videoPlayEvents": 12250, "videoCompleteUsers": 209, "videoCompleteEvents": 3855, "adRequestEvents": 25669, "adErrorEvents": 109, "viewingEventUsers": 2410, "onDemandStartUsers": 2354, "onDemandStartEvents": 18533, "liveChannelViewers": 132, "livePlayEvents": 3898, "sourceNote": "Live-channel and on-demand-start event breakdowns were not present in the Jun 8-14 GA4 events pull; those fields carry the prior complete week. video_start/play/complete and ad events are current. viewingEventUsers uses the 'play' event active users."}}, "scorecardGroups": [{"title": "Measured ElectricNOW Platform Audience", "eyebrow": "Is the measured platform growing or shrinking?", "definition": "GA4 active users across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Landing-page traffic remains excluded from platform audience. Reconcile with Amagi, app stores, ad servers, and platform dashboards before treating this as total company-wide audience.", "cards": [{"key": "platformActiveUsers", "label": "Platform active users", "baseline": 5282, "launchBaseline": 8710, "previousWeek": 3377, "current": 3615, "deltaPct": 7.047675, "deltaVsLaunchPct": -58.495982, "deltaVsPreviousPct": 7.047675, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}, {"key": "platformSessions", "label": "Platform sessions", "baseline": 10925, "launchBaseline": 13323, "previousWeek": 9780, "current": 10318, "deltaPct": 5.501022, "deltaVsLaunchPct": -22.55498, "deltaVsPreviousPct": 5.501022, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}, {"key": "viewingEventUsers", "label": "Viewing event users", "baseline": 2410, "launchBaseline": 1152, "previousWeek": 1726, "current": 1349, "deltaPct": -21.84241, "deltaVsLaunchPct": 17.100694, "deltaVsPreviousPct": -21.84241, "deltaType": "percent", "format": "number", "context": "Users who triggered on-demand video_start or Live play events. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "stale": true}, {"key": "totalEngagementHours", "label": "Total engaged hours", "baseline": 4792.675, "launchBaseline": 3652.9975, "previousWeek": 5760.891944, "current": 5625.5075, "deltaPct": -2.35006, "deltaVsLaunchPct": 53.997026, "deltaVsPreviousPct": -2.35006, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}, {"key": "avgEngagedMinutesPerUser", "label": "Avg time per user", "baseline": 48.938138, "launchBaseline": 25.164161882893225, "previousWeek": 102.355202, "current": 93.369419, "deltaPct": -8.779019, "deltaVsLaunchPct": 271.041243, "deltaVsPreviousPct": -8.779019, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}]}, {"title": "Apple and Android App Stream Usage", "eyebrow": "Who used the Apple/iOS and Android app streams", "definition": "GA4 Apple/iOS and Android app streams only: stream IDs 12950551103 and 12982344897. The Apple/iOS stream may include iPhone, iPad, and Apple TV until Apple TV is separated by the app developer. Excludes web, Roku, Android TV, Samsung/Tizen, and LG/webOS unless separately stated.", "cards": [{"key": "appActiveUsers", "label": "App stream active users", "baseline": 5383, "launchBaseline": 1547, "previousWeek": 5383, "current": 4800, "deltaPct": -10.830392, "deltaVsLaunchPct": 210.277957, "deltaVsPreviousPct": -10.830392, "deltaType": "percent", "format": "number", "context": "People using the Apple/iOS or Android app streams (GA4 property 497892271, streams 12950551103 + 12982344897); Apple TV is not yet split from the Apple/iOS stream. Stream-level app-usage for the week of Jun 8-14 compared with the prior week Jun 1-7. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}, {"key": "appSessions", "label": "App stream sessions", "baseline": 8405, "launchBaseline": 2889, "previousWeek": 8405, "current": 8029, "deltaPct": -4.473528, "deltaVsLaunchPct": 177.916234, "deltaVsPreviousPct": -4.473528, "deltaType": "percent", "format": "number", "context": "GA4 sessions on the Apple/iOS and Android app streams (property 497892271, streams 12950551103 + 12982344897). Stream-level week of Jun 8-14 compared with the prior week Jun 1-7. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}, {"key": "appEngagementRate", "label": "App stream engagement rate", "baseline": 78.37001784651993, "launchBaseline": 59.70126848307439, "previousWeek": 78.37001784651993, "current": 76.43542159671192, "deltaPct": -1.934596, "deltaVsLaunchPct": 16.734153, "deltaVsPreviousPct": -1.934596, "deltaType": "points", "format": "percent", "context": "Engaged app-stream sessions divided by app-stream sessions (GA4 property 497892271, streams 12950551103 + 12982344897). Stream-level week of Jun 8-14 compared with the prior week Jun 1-7; the change is shown in percentage points. Filtered-total query (stream IDs summed) is used rather than per-stream row sums, which differ slightly due to GA4 cross-stream user de-duplication. [Held: not refreshed for the Jul 6-12, 2026 week. The Jul 13 GA4 pull was daily top-line only (no userEngagementDuration / event / segment detail), so this reflects the last fully-instrumented week (Jun 29-Jul 5, 2026).]", "currentSourceNote": "GA4 stream-level filtered total, streams 12950551103 + 12982344897, week Jun 8-14 vs Jun 1-7 (pulled 2026-07-10).", "comparisonUnavailable": false, "stale": true}]}, {"title": "Fresh GA4 Viewing Event Behavior", "eyebrow": "What people actually triggered this week", "definition": "These cards use the fresh Jul 13-Jul 19 GA4 eventName pull. They show event counts, not unique viewers. Live-channel-specific unique viewers remain in the Live TV/Roku sections when segmented live-source data is available.", "cards": [{"key": "playEvents", "label": "Play events", "baseline": 57320, "launchBaseline": 57320, "previousWeek": 47143, "current": 56186, "deltaPct": 19.182063, "deltaVsLaunchPct": -1.978367, "deltaVsPreviousPct": 19.182063, "deltaType": "percent", "format": "number", "context": "Total GA4 play events across tracked ElectricNOW platform surfaces. This is event volume, not unique viewers.", "source": "Fresh GA4 eventName pull, property 497892271, Jul 13-Jul 19, 2026."}, {"key": "videoStartEvents", "label": "Video start events", "baseline": 20510, "launchBaseline": 20510, "previousWeek": 19437, "current": 19194, "deltaPct": -1.250193, "deltaVsLaunchPct": -6.416382, "deltaVsPreviousPct": -1.250193, "deltaType": "percent", "format": "number", "context": "Total GA4 video_start events across tracked ElectricNOW platform surfaces. This is event volume, not unique users.", "source": "Fresh GA4 eventName pull, property 497892271, Jul 13-Jul 19, 2026."}, {"key": "videoPlayEvents", "label": "Video play events", "baseline": 15366, "launchBaseline": 15366, "previousWeek": 12250, "current": 6202, "deltaPct": -49.371429, "deltaVsLaunchPct": -59.638162, "deltaVsPreviousPct": -49.371429, "deltaType": "percent", "format": "number", "context": "Total GA4 video_play events across tracked ElectricNOW platform surfaces. This is event volume, not unique users. The sharp decline should be investigated as possible instrumentation or playback-state mix, not assumed to be true audience loss by itself.", "source": "Fresh GA4 eventName pull, property 497892271, Jul 13-Jul 19, 2026."}, {"key": "videoCompleteEvents", "label": "Video complete events", "baseline": 3391, "launchBaseline": 3391, "previousWeek": 5038, "current": 5591, "deltaPct": 10.976578, "deltaVsLaunchPct": 64.877617, "deltaVsPreviousPct": 10.976578, "deltaType": "percent", "format": "number", "context": "Total GA4 video_complete events across tracked ElectricNOW platform surfaces. This is event volume, not unique users.", "source": "Fresh GA4 eventName pull, property 497892271, Jul 13-Jul 19, 2026."}, {"key": "adRequestEvents", "label": "Ad request events", "baseline": 23365, "launchBaseline": 23365, "previousWeek": 23803, "current": 24585, "deltaPct": 3.2853, "deltaVsLaunchPct": 5.221485, "deltaVsPreviousPct": 3.2853, "deltaType": "percent", "format": "number", "context": "Total GA4 ads_request events generated by viewing activity across tracked ElectricNOW platform surfaces.", "source": "Fresh GA4 eventName pull, property 497892271, Jul 13-Jul 19, 2026."}]}, {"title": "Time on Platform", "eyebrow": "How long people stayed", "definition": "All GA4-tracked platforms. Per user measures weekly attention per person; per session measures the average visit or viewing session.", "cards": [{"key": "avgEngagedMinutesPerUser", "label": "Avg time per user", "baseline": 48.938138, "launchBaseline": 25.164161882893225, "previousWeek": 102.355202, "current": 93.369419, "deltaPct": -8.779019, "deltaVsLaunchPct": 271.041243, "deltaVsPreviousPct": -8.779019, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}, {"key": "avgEngagedMinutesPerSession", "label": "Avg time per session", "baseline": 24.332417, "launchBaseline": 16.45123845980635, "previousWeek": 35.342895, "current": 32.712779, "deltaPct": -7.441713, "deltaVsLaunchPct": 98.846906, "deltaVsPreviousPct": -7.441713, "deltaType": "minutes", "format": "minutes", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}, {"key": "totalEngagementHours", "label": "Total engaged hours", "baseline": 4792.675, "launchBaseline": 3652.9975, "previousWeek": 5760.891944, "current": 5625.5075, "deltaPct": -2.35006, "deltaVsLaunchPct": 53.997026, "deltaVsPreviousPct": -2.35006, "deltaType": "percent", "format": "number", "context": "Fresh GA4 property 497892271 platform metric for Jul 21-Jul 27, 2026 (estimated landing/device exclusion; see platformAudience note)."}]}], "surfaceBreakout": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "rows": [{"surface": "Web", "streamName": "electricnow-web", "streamId": "13090831762", "platform": "web", "activeUsers": 5699, "sessions": 6734, "engagedSessions": 2504, "eventCount": 60226, "engagementRate": 37.184437184437186, "avgEngagedMinutesPerUser": 1.8929110370240392, "avgEngagedMinutesPerSession": 1.601975051975052}, {"surface": "Roku", "streamName": "electricnow-roku", "streamId": "13096428368", "platform": "web", "activeUsers": 1303, "sessions": 3532, "engagedSessions": 2827, "eventCount": 556413, "engagementRate": 80.039637599094, "avgEngagedMinutesPerUser": 79.42747505755948, "avgEngagedMinutesPerSession": 29.30181200453001}, {"surface": "iOS / Apple app stream", "streamName": "ElectricNow", "streamId": "12982344897", "platform": "iOS", "activeUsers": 896, "sessions": 1427, "engagedSessions": 1272, "eventCount": 38429, "engagementRate": 89.13805185704274, "avgEngagedMinutesPerUser": 63.90292038690476, "avgEngagedMinutesPerSession": 40.12404811959823}, {"surface": "Android mobile app", "streamName": "ElectricNOW", "streamId": "12950551103", "platform": "Android", "activeUsers": 651, "sessions": 1479, "engagedSessions": 1063, "eventCount": 30967, "engagementRate": 71.87288708586883, "avgEngagedMinutesPerUser": 18.074654377880183, "avgEngagedMinutesPerSession": 7.95578093306288}, {"surface": "Android TV / CTV", "streamName": "ElectricNOW tv", "streamId": "13118400722", "platform": "Android", "activeUsers": 162, "sessions": 414, "engagedSessions": 361, "eventCount": 18889, "engagementRate": 87.19806763285024, "avgEngagedMinutesPerUser": 222.94506172839507, "avgEngagedMinutesPerSession": 87.23937198067634}, {"surface": "LG / webOS", "streamName": "electricnow-webos", "streamId": "12976053175", "platform": "web", "activeUsers": 0, "sessions": 14, "engagedSessions": 0, "eventCount": 91, "engagementRate": 0.0, "avgEngagedMinutesPerUser": 0, "avgEngagedMinutesPerSession": 0.0}], "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."}, "previousWeek": {"range": "May 18-May 24, 2026", "rows": [{"surface": "Android mobile app", "streamName": "ElectricNOW", "streamId": "12950551103", "platform": "Android", "activeUsers": 3018, "sessions": 4721, "engagedSessions": 3810, "eventCount": 111199, "engagementRate": 80.70324083880533, "avgEngagedMinutesPerUser": 8.444223547603269, "avgEngagedMinutesPerSession": 5.398150109440091}, {"surface": "iOS / Apple app stream", "streamName": "ElectricNow", "streamId": "12982344897", "platform": "iOS", "activeUsers": 2325, "sessions": 3811, "engagedSessions": 3196, "eventCount": 86874, "engagementRate": 83.86250327997901, "avgEngagedMinutesPerUser": 41.14767741935484, "avgEngagedMinutesPerSession": 25.10321437942797}, {"surface": "Roku", "streamName": "electricnow-roku", "streamId": "13096428368", "platform": "web", "activeUsers": 1163, "sessions": 3345, "engagedSessions": 2714, "eventCount": 724286, "engagementRate": 81.13602391629297, "avgEngagedMinutesPerUser": 120.50257953568357, "avgEngagedMinutesPerSession": 41.89671150971599}, {"surface": "Web", "streamName": "electricnow-web", "streamId": "13090831762", "platform": "web", "activeUsers": 978, "sessions": 1810, "engagedSessions": 1414, "eventCount": 55155, "engagementRate": 78.12154696132598, "avgEngagedMinutesPerUser": 16.24655760054533, "avgEngagedMinutesPerSession": 8.778526703499079}, {"surface": "Android TV / CTV", "streamName": "ElectricNOW tv", "streamId": "13118400722", "platform": "Android", "activeUsers": 207, "sessions": 479, "engagedSessions": 448, "eventCount": 42519, "engagementRate": 93.52818371607515, "avgEngagedMinutesPerUser": 184.89049919484702, "avgEngagedMinutesPerSession": 79.90048712595686}, {"surface": "LG / webOS", "streamName": "electricnow-webos", "streamId": "12976053175", "platform": "web", "activeUsers": 0, "sessions": 26, "engagedSessions": 0, "eventCount": 138, "engagementRate": 0.0, "avgEngagedMinutesPerUser": 0, "avgEngagedMinutesPerSession": 0.0}], "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."}, "currentWeek": {"range": "May 25-May 31, 2026", "rows": [{"surface": "Android mobile app", "streamName": "ElectricNOW", "streamId": "12950551103", "platform": "Android", "activeUsers": 3071, "sessions": 4737, "engagedSessions": 3664, "eventCount": 89787, "engagementRate": 77.34853282668355, "avgEngagedMinutesPerUser": 7.872142624552263, "avgEngagedMinutesPerSession": 5.103514882837239}, {"surface": "iOS / Apple app stream", "streamName": "ElectricNow", "streamId": "12982344897", "platform": "iOS", "activeUsers": 2564, "sessions": 4186, "engagedSessions": 3522, "eventCount": 92933, "engagementRate": 84.13760152890588, "avgEngagedMinutesPerUser": 34.89377275091003, "avgEngagedMinutesPerSession": 21.373060996974043}, {"surface": "Roku", "streamName": "electricnow-roku", "streamId": "13096428368", "platform": "web", "activeUsers": 1133, "sessions": 3358, "engagedSessions": 2683, "eventCount": 723322, "engagementRate": 79.89874925550923, "avgEngagedMinutesPerUser": 124.22374227714035, "avgEngagedMinutesPerSession": 41.91349017272186}, {"surface": "Web", "streamName": "electricnow-web", "streamId": "13090831762", "platform": "web", "activeUsers": 946, "sessions": 1715, "engagedSessions": 1303, "eventCount": 67284, "engagementRate": 75.97667638483965, "avgEngagedMinutesPerUser": 20.69103241719521, "avgEngagedMinutesPerSession": 11.413245869776482}, {"surface": "Android TV / CTV", "streamName": "ElectricNOW tv", "streamId": "13118400722", "platform": "Android", "activeUsers": 206, "sessions": 471, "engagedSessions": 435, "eventCount": 30607, "engagementRate": 92.35668789808918, "avgEngagedMinutesPerUser": 245.81423948220066, "avgEngagedMinutesPerSession": 107.51111111111112}], "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."}}, "platformAudience": {"launchBaseline": {"range": "Apr 13-Apr 19, 2026", "platformActiveUsers": 8710, "platformSessions": 13323, "platformEngagedSessions": 7954, "platformEventCount": 701671, "platformEngagementRate": 59.70126848307439, "platformEngagementSeconds": 13150791, "platformEngagementHours": 3652.9975, "note": "Excludes landing-page acquisition paths. Landing-page traffic is excluded from platform audience and no longer displayed as a dashboard section."}, "previousWeek": {"range": "Jul 14-Jul 20, 2026", "platformActiveUsers": 3377, "platformSessions": 9780, "platformEngagedSessions": 7100, "platformEventCount": 1110590, "platformEngagementRate": 72.59713701431492, "platformEngagementSeconds": 20739211, "platformEngagementHours": 5760.891944444445, "note": "Fresh GA4 landing-page acquisition offset for Jul 20-Jul 26, 2026 (landing/device paths only). Landing/device acquisition traffic remains excluded from platform audience."}, "currentWeek": {"range": "Jul 21-Jul 27, 2026", "platformActiveUsers": 3615, "platformSessions": 10318, "platformEngagedSessions": 6814, "platformEventCount": 1051634, "platformEngagementRate": 66.03993021903469, "platformEngagementSeconds": 20251827, "platformEngagementHours": 5625.5075, "note": "No fresh landing-page-only GA4 pull was available in this Jul 28 refresh cycle. Platform-audience figures below apply last week’s landing-vs-platform share (~3.2% of sessions) to this week’s fresh GA4 totals as an ESTIMATE, not a fresh landing/device-path pull. Flagged for a fresh landing pull next scheduled refresh."}}, "weeklyTrend": [{"date": "Jul 20", "rawDate": "20260720", "activeUsers": 654, "newUsers": 141, "sessions": 1352, "engagedSessions": 1044, "screenPageViews": 4566, "eventCount": 142412, "userEngagementDuration": 2563573, "engagementRate": 77.2189349112426}, {"date": "Jul 21", "rawDate": "20260721", "activeUsers": 757, "newUsers": 186, "sessions": 1514, "engagedSessions": 1184, "screenPageViews": 5208, "eventCount": 142353, "userEngagementDuration": 2948300, "engagementRate": 78.20343461030383}, {"date": "Jul 22", "rawDate": "20260722", "activeUsers": 713, "newUsers": 153, "sessions": 1415, "engagedSessions": 1129, "screenPageViews": 4942, "eventCount": 145178, "userEngagementDuration": 2677649, "engagementRate": 79.78798586572438}, {"date": "Jul 23", "rawDate": "20260723", "activeUsers": 677, "newUsers": 149, "sessions": 1414, "engagedSessions": 1104, "screenPageViews": 4766, "eventCount": 146295, "userEngagementDuration": 2664598, "engagementRate": 78.07637906647807}, {"date": "Jul 24", "rawDate": "20260724", "activeUsers": 673, "newUsers": 137, "sessions": 1449, "engagedSessions": 1101, "screenPageViews": 4911, "eventCount": 143185, "userEngagementDuration": 2551100, "engagementRate": 75.98343685300208}, {"date": "Jul 25", "rawDate": "20260725", "activeUsers": 710, "newUsers": 170, "sessions": 1412, "engagedSessions": 1100, "screenPageViews": 4892, "eventCount": 142935, "userEngagementDuration": 2824425, "engagementRate": 77.90368271954674}, {"date": "Jul 26", "rawDate": "20260726", "activeUsers": 802, "newUsers": 190, "sessions": 1898, "engagedSessions": 908, "screenPageViews": 3694, "eventCount": 248232, "userEngagementDuration": 4509566, "engagementRate": 47.83983140147524}], "monthlyTrend": [{"date": "Jun 27", "rawDate": "20260627", "activeUsers": 1163, "newUsers": null, "sessions": 1882, "engagedSessions": 1433, "screenPageViews": 4652, "eventCount": 154508, "engagementRate": 76.1424017003188}, {"date": "Jun 28", "rawDate": "20260628", "activeUsers": 1337, "newUsers": null, "sessions": 2339, "engagedSessions": 702, "screenPageViews": 7386, "eventCount": 147386, "engagementRate": 30.012825994014534}, {"date": "Jun 29", "rawDate": "20260629", "activeUsers": 961, "newUsers": null, "sessions": 1619, "engagedSessions": 1266, "screenPageViews": 4073, "eventCount": 144209, "engagementRate": 78.1964175416924}, {"date": "Jun 30", "rawDate": "20260630", "activeUsers": 776, "newUsers": null, "sessions": 1408, "engagedSessions": 1069, "screenPageViews": 3733, "eventCount": 138438, "engagementRate": 75.92329545454545}, {"date": "Jul 1", "rawDate": "20260701", "activeUsers": 714, "newUsers": null, "sessions": 1341, "engagedSessions": 1046, "screenPageViews": 3704, "eventCount": 131297, "engagementRate": 78.00149142431022}, {"date": "Jul 2", "rawDate": "20260702", "activeUsers": 768, "newUsers": null, "sessions": 1424, "engagedSessions": 1083, "screenPageViews": 3929, "eventCount": 135267, "engagementRate": 76.05337078651685}, {"date": "Jul 3", "rawDate": "20260703", "activeUsers": 790, "newUsers": null, "sessions": 1404, "engagedSessions": 1079, "screenPageViews": 3882, "eventCount": 133289, "engagementRate": 76.85185185185185}, {"date": "Jul 4", "rawDate": "20260704", "activeUsers": 922, "newUsers": null, "sessions": 1792, "engagedSessions": 1429, "screenPageViews": 5647, "eventCount": 152908, "engagementRate": 79.74330357142857}, {"date": "Jul 5", "rawDate": "20260705", "activeUsers": 770, "newUsers": null, "sessions": 1554, "engagedSessions": 1223, "screenPageViews": 4796, "eventCount": 141295, "engagementRate": 78.7001287001287}, {"date": "Jul 6", "rawDate": "20260706", "activeUsers": 780, "newUsers": null, "sessions": 1510, "engagedSessions": 1155, "screenPageViews": 4467, "eventCount": 137589, "engagementRate": 76.49006622516556}, {"date": "Jul 7", "rawDate": "20260707", "activeUsers": 768, "newUsers": null, "sessions": 1449, "engagedSessions": 1136, "screenPageViews": 4487, "eventCount": 136976, "engagementRate": 78.39889579020014}, {"date": "Jul 8", "rawDate": "20260708", "activeUsers": 759, "newUsers": null, "sessions": 1486, "engagedSessions": 1198, "screenPageViews": 4719, "eventCount": 135410, "engagementRate": 80.61911170928667}, {"date": "Jul 9", "rawDate": "20260709", "activeUsers": 729, "newUsers": null, "sessions": 1413, "engagedSessions": 1110, "screenPageViews": 4676, "eventCount": 137563, "engagementRate": 78.55626326963908}, {"date": "Jul 10", "rawDate": "20260710", "activeUsers": 721, "newUsers": null, "sessions": 1345, "engagedSessions": 1084, "screenPageViews": 4593, "eventCount": 137902, "engagementRate": 80.59479553903346}, {"date": "Jul 11", "rawDate": "20260711", "activeUsers": 735, "newUsers": null, "sessions": 1359, "engagedSessions": 1055, "screenPageViews": 4583, "eventCount": 139458, "engagementRate": 77.63061074319353}, {"date": "Jul 12", "rawDate": "20260712", "activeUsers": 724, "newUsers": null, "sessions": 1409, "engagedSessions": 1063, "screenPageViews": 4245, "eventCount": 143385, "engagementRate": 75.44357700496806}, {"date": "Jul 13", "rawDate": "20260713", "activeUsers": 689, "newUsers": 131, "sessions": 1328, "engagedSessions": 1041, "screenPageViews": 4208, "eventCount": 135823, "userEngagementDuration": 2903189, "engagementRate": 78.38855421686746}, {"date": "Jul 14", "rawDate": "20260714", "activeUsers": 696, "newUsers": 114, "sessions": 1371, "engagedSessions": 1023, "screenPageViews": 4577, "eventCount": 134706, "userEngagementDuration": 3120570, "engagementRate": 74.61706783369803}, {"date": "Jul 15", "rawDate": "20260715", "activeUsers": 652, "newUsers": 130, "sessions": 1279, "engagedSessions": 1009, "screenPageViews": 4553, "eventCount": 143963, "userEngagementDuration": 2921960, "engagementRate": 78.88975762314307}, {"date": "Jul 16", "rawDate": "20260716", "activeUsers": 724, "newUsers": 170, "sessions": 1389, "engagedSessions": 1072, "screenPageViews": 4839, "eventCount": 151688, "userEngagementDuration": 2923322, "engagementRate": 77.17782577393808}, {"date": "Jul 17", "rawDate": "20260717", "activeUsers": 759, "newUsers": 193, "sessions": 1416, "engagedSessions": 1099, "screenPageViews": 4726, "eventCount": 189135, "userEngagementDuration": 2882215, "engagementRate": 77.61299435028248}, {"date": "Jul 18", "rawDate": "20260718", "activeUsers": 719, "newUsers": 163, "sessions": 1345, "engagedSessions": 1045, "screenPageViews": 4461, "eventCount": 135503, "userEngagementDuration": 2868641, "engagementRate": 77.69516728624535}, {"date": "Jul 19", "rawDate": "20260719", "activeUsers": 731, "newUsers": 166, "sessions": 1448, "engagedSessions": 1127, "screenPageViews": 4600, "eventCount": 141621, "userEngagementDuration": 3030843, "engagementRate": 77.83149171270718}, {"date": "Jul 20", "rawDate": "20260720", "activeUsers": 654, "newUsers": 141, "sessions": 1352, "engagedSessions": 1044, "screenPageViews": 4566, "eventCount": 142412, "userEngagementDuration": 2563573, "engagementRate": 77.2189349112426}, {"date": "Jul 21", "rawDate": "20260721", "activeUsers": 757, "newUsers": 186, "sessions": 1514, "engagedSessions": 1184, "screenPageViews": 5208, "eventCount": 142353, "userEngagementDuration": 2948300, "engagementRate": 78.20343461030383}, {"date": "Jul 22", "rawDate": "20260722", "activeUsers": 713, "newUsers": 153, "sessions": 1415, "engagedSessions": 1129, "screenPageViews": 4942, "eventCount": 145178, "userEngagementDuration": 2677649, "engagementRate": 79.78798586572438}, {"date": "Jul 23", "rawDate": "20260723", "activeUsers": 677, "newUsers": 149, "sessions": 1414, "engagedSessions": 1104, "screenPageViews": 4766, "eventCount": 146295, "userEngagementDuration": 2664598, "engagementRate": 78.07637906647807}, {"date": "Jul 24", "rawDate": "20260724", "activeUsers": 673, "newUsers": 137, "sessions": 1449, "engagedSessions": 1101, "screenPageViews": 4911, "eventCount": 143185, "userEngagementDuration": 2551100, "engagementRate": 75.98343685300208}, {"date": "Jul 25", "rawDate": "20260725", "activeUsers": 710, "newUsers": 170, "sessions": 1412, "engagedSessions": 1100, "screenPageViews": 4892, "eventCount": 142935, "userEngagementDuration": 2824425, "engagementRate": 77.90368271954674}, {"date": "Jul 26", "rawDate": "20260726", "activeUsers": 802, "newUsers": 190, "sessions": 1898, "engagedSessions": 908, "screenPageViews": 3694, "eventCount": 248232, "userEngagementDuration": 4509566, "engagementRate": 47.83983140147524}], "appSectionUsage": {"period": "Jul 21-Jul 27, 2026", "metric": "GA4 active users and engaged time by unified screen name rollup", "rows": [{"section": "Unattributed app/background events", "activeUsers": 3644, "sessions": 0, "engagedSessions": 0, "screenPageViews": 4010, "eventCount": 890623, "totalEngagementSeconds": 12889989, "engagementRate": 0, "totalEngagementHours": 3580.5525, "avgEngagedMinutesPerUser": 58.95531009879254, "avgEngagedMinutesPerSession": 214833.15, "sharePct": 37.505146150679295}, {"section": "Home", "activeUsers": 3111, "sessions": 0, "engagedSessions": 0, "screenPageViews": 11560, "eventCount": 49763, "totalEngagementSeconds": 961644, "engagementRate": 0, "totalEngagementHours": 267.12333333333333, "avgEngagedMinutesPerUser": 5.151848280295725, "avgEngagedMinutesPerSession": 16027.4, "sharePct": 32.01934952655414}, {"section": "On Demand", "activeUsers": 1166, "sessions": 0, "engagedSessions": 0, "screenPageViews": 4669, "eventCount": 5728, "totalEngagementSeconds": 49179, "engagementRate": 0, "totalEngagementHours": 13.660833333333333, "avgEngagedMinutesPerUser": 0.702958833619211, "avgEngagedMinutesPerSession": 819.65, "sharePct": 12.000823384108687}, {"section": "Title Detail", "activeUsers": 666, "sessions": 0, "engagedSessions": 0, "screenPageViews": 5938, "eventCount": 6937, "totalEngagementSeconds": 97199, "engagementRate": 0, "totalEngagementHours": 26.99972222222222, "avgEngagedMinutesPerUser": 2.4324074074074074, "avgEngagedMinutesPerSession": 1619.9833333333333, "sharePct": 6.854672704816797}, {"section": "Player", "activeUsers": 394, "sessions": 0, "engagedSessions": 0, "screenPageViews": 4816, "eventCount": 75148, "totalEngagementSeconds": 2753526, "engagementRate": 0, "totalEngagementHours": 764.8683333333333, "avgEngagedMinutesPerUser": 116.47741116751268, "avgEngagedMinutesPerSession": 45892.1, "sharePct": 4.055166735282009}, {"section": "Live TV", "activeUsers": 210, "sessions": 0, "engagedSessions": 0, "screenPageViews": 1471, "eventCount": 18086, "totalEngagementSeconds": 3340297, "engagementRate": 0, "totalEngagementHours": 927.8602777777778, "avgEngagedMinutesPerUser": 265.10293650793653, "avgEngagedMinutesPerSession": 55671.61666666667, "sharePct": 2.161383285302594}, {"section": "Title Pages", "activeUsers": 172, "sessions": 0, "engagedSessions": 0, "screenPageViews": 350, "eventCount": 448, "totalEngagementSeconds": 17708, "engagementRate": 0, "totalEngagementHours": 4.918888888888889, "avgEngagedMinutesPerUser": 1.715891472868217, "avgEngagedMinutesPerSession": 295.1333333333333, "sharePct": 1.7702758336764102}, {"section": "Category", "activeUsers": 165, "sessions": 0, "engagedSessions": 0, "screenPageViews": 523, "eventCount": 595, "totalEngagementSeconds": 5973, "engagementRate": 0, "totalEngagementHours": 1.6591666666666667, "avgEngagedMinutesPerUser": 0.6033333333333333, "avgEngagedMinutesPerSession": 99.55, "sharePct": 1.6982297241663236}, {"section": "Search", "activeUsers": 85, "sessions": 0, "engagedSessions": 0, "screenPageViews": 641, "eventCount": 700, "totalEngagementSeconds": 2145, "engagementRate": 0, "totalEngagementHours": 0.5958333333333333, "avgEngagedMinutesPerUser": 0.42058823529411765, "avgEngagedMinutesPerSession": 35.75, "sharePct": 0.8748456154796213}, {"section": "Settings", "activeUsers": 55, "sessions": 0, "engagedSessions": 0, "screenPageViews": 186, "eventCount": 250, "totalEngagementSeconds": 3040, "engagementRate": 0, "totalEngagementHours": 0.8444444444444444, "avgEngagedMinutesPerUser": 0.9212121212121211, "avgEngagedMinutesPerSession": 50.666666666666664, "sharePct": 0.5660765747221078}, {"section": "My Stuff", "activeUsers": 48, "sessions": 0, "engagedSessions": 0, "screenPageViews": 350, "eventCount": 350, "totalEngagementSeconds": 0, "engagementRate": 0, "totalEngagementHours": 0.0, "avgEngagedMinutesPerUser": 0.0, "avgEngagedMinutesPerSession": 0.0, "sharePct": 0.49403046521202143}], "note": "Fresh screen-name rollup. Rows can double-count users who visit multiple sections and should be used directionally, not as a deduped total audience count. GA4 pages/screens pull does not return sessions/engagedSessions by screen name, so those fields are 0 by design.", "sourceNote": "Internal GA4 pull, property 497892271."}, "rokuAppEngagement": {"sourceLabel": "Roku App Engagement email report", "sourceDetail": "Roku app engagement is parsed from the latest Roku App Engagement PDF emailed from bdp_noreply@data.roku.com. It measures Roku app/channel-store usage and is shown separately from GA4 app/web metrics.", "reportPeriod": "Jul 20-Jul 26, 2026", "rawReportPeriod": "Jul 20-Jul 26, 2026 (generated Jul 28)", "channelStoreCode": "us", "reportGenerated": "July 28, 2026 at 6:51 AM PDT", "dateLabels": ["Mon Jul 20", "Tue Jul 21", "Wed Jul 22", "Thu Jul 23", "Fri Jul 24", "Sat Jul 25", "Sun Jul 26"], "metrics": {"newInstalls": 214, "uninstalls": 102, "netInstalls": 112, "cumulativeInstalls": 289833, "avgDailyViewers": 337, "avgMinPerViewer": 76.0, "totalHoursStreamed": 2987}, "reportEmailDate": "2026-07-28T13:51:57+00:00", "attachmentFilename": "App_Engagement_2026-07-28T0651.pdf", "note": "Roku TRC Live Dashboard reports are intentionally excluded from app/platform usage to avoid mixing Roku Channel live-stream consumption with ElectricNOW app engagement.", "status": "CURRENT_PARSED", "staleNote": "Jul 28, 2026 Roku App Engagement report (covers Jul 20-Jul 26, 2026) parsed from Outlook ROKU folder PDF, received 6:51 AM PDT. Kept separate from GA4 and Roku TRC live-channel reports. Note: report period (Jul 20-26) trails the GA4/dashboard rolling window (Jul 21-27) by one day because Roku publishes on a fixed \"8 days ago for 7 days\" schedule; this is the latest available Roku App Engagement data as of this refresh.", "lastSuccessfulReportPeriod": "Jul 20-Jul 26, 2026", "previousReportPeriod": "Jul 19-Jul 25, 2026", "previousMetrics": {"newInstalls": 209, "uninstalls": 107, "netInstalls": 102, "cumulativeInstalls": 289797, "avgDailyViewers": 335, "avgMinPerViewer": 74.5, "totalHoursStreamed": 2909}}, "visitSummary": {"source": "GA4 sessions on tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths.", "weekly": {"label": "Weekly visits", "range": "Jul 21-Jul 27, 2026", "sessions": 10318, "activeUsers": 3615, "engagedSessions": 6814, "previousRange": "Jul 14-Jul 20, 2026", "previousSessions": 9780, "deltaVsPreviousPct": 5.501022, "comparisonLabel": "vs previous 7 days"}, "monthly": {"label": "Last reconciled 28-day visits", "range": "May 18-Jun 14, 2026", "sessions": 57678, "activeUsers": 37956, "engagedSessions": 45928, "previousRange": "Apr 20-May 17, 2026", "previousSessions": 56406, "deltaVsPreviousPct": 2.255079246888629, "comparisonLabel": "vs prior complete 28 days", "asOfNote": "Stale / last-good metric: this is the most recent fully reconciled 28-day landing-excluded window (through Jun 14, 2026). The 28-day landing-excluded aggregation was not re-pulled in the latest weekly refresh, so this card is preserved as last-good rather than recomputed. The +2.3% delta compares it against the preceding 28 days (Apr 20-May 17, 2026)."}, "note": "Visits are GA4 sessions, not unique people. Landing-page/device acquisition traffic remains excluded from platform audience (estimated split this cycle; see platformAudience.currentWeek.note)."}, "manualAppleSalesUpdate": {"updatedAt": "2026-08-02T08:20:00-07:00", "source": "manual_apple_sales.json updated Aug 2, 2026 with one aggregate gross-sales entry for Jul 26-Aug 1, 2026 ($683.90, revenue-only, no title breakdown)", "totalManualAppleEntries": 17, "note": "New Apple sales snapshot supersedes the overlapping Jul 24-Jul 30 $557.75 aggregate; old aggregate was removed to avoid double-counting. Apple purchases count is unchanged because the screenshot provided revenue by day, not transaction counts."}, "googleAdsSummary": {"source": "Google Ads connector", "accountId": "4342267711", "customerClientId": "4342267711", "accountName": "Electric Entertainment", "period": "Jun 1-Jun 7, 2026", "campaignName": "PCSM - ElectricNow App Promotion - Android", "campaignId": "23836266606", "campaignType": "MULTI_CHANNEL", "status": "STALE_RATE_LIMITED", "impressions": 10424, "clicks": 304, "ctrPct": 2.916346891788181, "cost": 66.47, "avgCpc": 0.21865670065789475, "conversions": 124.0, "allConversions": 235.0, "conversionRatePct": 40.78947368421053, "costPerConversion": 0.5360615887096775, "daily": [{"date": "2026-06-01", "device": "2026-06-01", "cost": 14.011478, "impressions": 2071, "clicks": 69, "conversions": 28.0, "allConversions": 56.0, "ctrPct": 3.3317238049251565, "avgCpc": 0.20306489855072465, "costPerConversion": 0.5004099285714286}, {"date": "2026-06-02", "device": "2026-06-02", "cost": 17.030354, "impressions": 2515, "clicks": 70, "conversions": 30.0, "allConversions": 55.0, "ctrPct": 2.783300198807157, "avgCpc": 0.24329077142857142, "costPerConversion": 0.5676784666666667}, {"date": "2026-06-03", "device": "2026-06-03", "cost": 16.340343, "impressions": 2704, "clicks": 87, "conversions": 29.0, "allConversions": 55.0, "ctrPct": 3.217455621301775, "avgCpc": 0.18782003448275864, "costPerConversion": 0.5634601034482759}, {"date": "2026-06-04", "device": "2026-06-04", "cost": 16.226717999999998, "impressions": 2683, "clicks": 68, "conversions": 30.0, "allConversions": 59.0, "ctrPct": 2.5344763324636603, "avgCpc": 0.23862820588235292, "costPerConversion": 0.5408905999999999}, {"date": "2026-06-05", "device": "2026-06-05", "cost": 2.862744, "impressions": 451, "clicks": 10, "conversions": 7.0, "allConversions": 10.0, "ctrPct": 2.2172949002217295, "avgCpc": 0.28627440000000004, "costPerConversion": 0.4089634285714286}], "deviceBreakout": [{"date": "MOBILE", "device": "MOBILE", "cost": 54.282101999999995, "impressions": 8384, "clicks": 252, "conversions": 97.0, "allConversions": 189.0, "ctrPct": 3.0057251908396947, "avgCpc": 0.21540516666666665, "costPerConversion": 0.5596092989690721}, {"date": "TABLET", "device": "TABLET", "cost": 12.156039000000002, "impressions": 2034, "clicks": 52, "conversions": 27.0, "allConversions": 46.0, "ctrPct": 2.55653883972468, "avgCpc": 0.2337699807692308, "costPerConversion": 0.45022366666666674}, {"date": "CONNECTED_TV", "device": "CONNECTED_TV", "cost": 0.033496000000000005, "impressions": 6, "clicks": 0, "conversions": 0.0, "allConversions": 0.0, "ctrPct": 0.0, "avgCpc": null, "costPerConversion": null}], "conversionActions": [{"campaign": "PCSM - ElectricNow App Promotion - Android", "conversionAction": "electricnow-4fbb4 - com.electric.now (Android) First open", "conversions": 124.0, "allConversions": 136.0}, {"campaign": "PCSM - ElectricNow App Promotion - Android", "conversionAction": "Android installs (all other apps)", "conversions": 0.0, "allConversions": 99.0}], "plainEnglish": "Google Ads produced 124 counted Android first-open conversions on $66.47 of spend, about $0.54 per conversion.", "dataFreshnessNote": "Google Ads connector CONNECTED on the Jul 13, 2026 run and returned NO rows for the current complete week (Jul 6-12, 2026): no active campaigns / zero spend. Historical last-good campaign figures are preserved for context, not zeroed.", "statusDetail": "Current complete week Jul 6-12, 2026: connected, zero rows (no active Google Ads spend). Customer 4342267711.", "lastSuccessfulPull": "2026-06-11 14:40 PDT", "staleNote": "Google Ads connector is connected, but the Jul 28 refresh hit API RESOURCE_EXHAUSTED / rate-limited (retry-after ~16638s). Last successful campaign metrics are preserved, not zeroed.", "latestQueryPeriod": "Jul 21-Jul 27, 2026", "latestQueryStatus": "CONNECTED_RATE_LIMITED", "latestQueryNote": "Google Ads campaign report (customer 4342267711) returned zero rows for Jul 6-12, 2026 - no active campaign spend/impressions/clicks in the window. The connector is CONNECTED; this is a genuine no-spend week, not a failure."}, "adSuccessSummary": {"googleAds": {"period": "May 12-May 26, 2026", "campaignName": "PCSM - ElectricNow App Promotion - Android", "spend": 241.08, "impressions": 46962, "clicks": 1458, "ctrPct": 3.1, "avgCpc": 0.17, "firstOpenConversions": 443.0, "allConversions": 967.0, "conversionRatePct": 30.38, "costPerConversion": 0.54, "source": "Google Ads connector", "note": "Google Ads connector responded for Jul 6-9, 2026 with zero campaign rows (no active spend in the window) - recorded as connected/no-current-rows, not a failure. Last-good values (May 12-26, 2026 campaign) are preserved, not zeroed.", "status": "connected_no_current_rows"}, "metaAds": {"period": "Jun 14-Jun 20, 2026", "spend": 1642.88, "impressions": 108731, "clicks": 5050, "ctrPct": 4.64, "downloads": 1, "costPerDownload": 0.0, "iosDownloads": 0, "androidDownloads": 1, "source": "Nathan / Forge One Meta email report", "note": "Meta spent only $40.80 for Jul 2-Jul 8, 2026 (-97.3% vs the prior period) on a single iOS-only campaign driving 23 iOS installs at $1.77 each (CPC $0.15). The campaign was almost fully paused this week. Treat as an acquisition-efficiency signal only. Paid-campaign impressions (2,539) are distinct from in-app GA4 ad impressions.", "reportedPlatformDownloads": 1, "metaAppInstallsFromBreakdown": 1174}, "period": "Jul 2-Jul 8, 2026 for Meta email report; Google Ads connector responded for Jul 6-9, 2026 with zero campaign rows (no active spend in-window); last-good preserved", "verdict": "acceptable but needs proof of viewing", "plainEnglish": "Paid acquisition verdict: efficiency signal only, not a viewing/ROAS proof this run. Meta (Jul 2-Jul 8, 2026) was scaled to almost nothing - $40.80 spend (-97.3%) driving 23 iOS installs (-97.5%) at $1.77 each; CPC improved to $0.15 (-55.8%) but cost per install rose +9.6%, with 55-64 ($1.39) and 65+ ($1.65) the most efficient bands and 18-24 producing 0 installs. Google Ads returned zero rows for Jul 6-9 (no active spend); connected/no-current-rows, last-good preserved, not zeroed. Distinguish paid-campaign impressions (2,539 Meta) from in-app GA4 ad impressions. Spend reliably buys free iOS installs but there is no proof they become viewers or buyers; we do NOT claim true ROAS.", "recommendations": ["Separate iOS and Android budgets so cheaper Android volume does not hide more expensive iOS acquisition.", "Shift budget toward lower-cost audiences only when GA4 shows those cohorts also become viewing users.", "Refresh creative with show-specific hooks for The Ark, Leverage, Almost Paradise, The Librarians, and The Poly Couple.", "Ask the developer to pass campaign/ad identifiers into GA4 first-open and viewing events so install-to-view quality can be measured directly.", "Do not call this true ROAS until ad-server revenue and complete app-store revenue are connected."], "googleAdsStatus": "STALE_RATE_LIMITED", "googleAdsNote": "Google Ads connector is connected but rate-limited on Jul 28; last successful Google Ads efficiency metrics are preserved."}, "metaAdsSummary": {"source": "Meta Ads (Forge One / nathan@pcsocialmedia.com twice-weekly email report)", "reportType": "Meta Ads Performance Report (Meta-only, used to avoid double-counting Google Ads which is pulled via connector)", "emailFrom": "nathan@pcsocialmedia.com", "emailTo": "DeanD@electricentertainment.com", "emailSubject": "ElectricNow | Meta Ads Performance Report (2026-07-12 to 2026-07-18)", "emailDate": "2026-07-19T13:31:09+00:00", "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAPLZ0ZHAAA=", "reportLink": "https://app.forgeonemarketing.com/r/28800a13-6c1d-4562-8614-872d80ec8c80", "reportCadence": "Twice weekly (Sundays and Thursdays at 6am PST/PDT), each report covers Last 7 days", "period": "Jul 12-Jul 18, 2026", "periodStart": "2026-07-12", "periodEnd": "2026-07-18", "comparison": "vs prior Meta report period", "spend": 0.0, "impressions": 0, "linkClicks": 0, "costPerClick": 0.0, "iosDownloads": 0, "androidDownloads": 0, "totalDownloads": 0, "costPerIosDownload": null, "costPerAndroidDownload": null, "costPerDownload": 0.0, "ctrPct": 0.0, "deltas": {"spendPct": -100.0, "impressionsPct": -100.0, "linkClicksPct": -100.0, "costPerClickPct": -100.0, "iosDownloadsPct": -100.0, "costPerIosDownloadPct": null, "comparisonNote": "Deltas vs prior Meta report period (Jul 2-Jul 8, 2026)."}, "campaigns": [], "genderBreakdown": [], "ageBreakdown": [], "plainEnglish": "Meta's latest report (Jul 5-11, 2026) shows the campaign PAUSED: $0.00 spend (down 100%), 0 impressions, 0 link clicks and 0 app installs, with 'No campaign metrics found for this period'. The prior report (Jul 2-8, 2026) was $40.80 spend / 2,539 impressions / 251 link clicks / 23 iOS installs at $1.77 each. Per PC Social Media (Nathan), ElectricNow is deliberately pivoting AWAY from Meta Ads to Roku Ads: mobile iOS/Android install retention was too low to justify spend, TV (Roku) is judged the most valuable audience, and DotStudio is setting up Roku conversion tracking. So the Meta drop to $0 is an intentional strategy change, not a reporting gap.", "paidAcquisitionInterpretation": "PAID ACQUISITION ASSESSMENT (Meta, Jul 5-11, 2026). Meta paid acquisition is effectively OFF this week: spend $0.00 (-100%), 0 impressions and 0 iOS installs. This is an INTENTIONAL pivot away from Meta Ads toward Roku Ads (PC Social Media / Nathan): mobile retention was too low, TV is the priority audience, and Roku conversion tracking is being set up by DotStudio. Google Ads also had no spend this week (connector returned no rows for Jul 6-12). NET: essentially no paid acquisition ran this week on either Meta or Google. Effect on the platform: GA4 property-wide traffic eased (sessions 9,971 vs 10,320, about -3.4%; new users 1,179 vs 1,519) and week-unique active users are estimated lower (~3,800 vs 4,158) - consistent with paid acquisition being switched off, though week-to-week noise also contributes. We still do NOT claim true ROAS (no install->activation->sale join; installs are free, not paid sales). Distinguish paid-campaign impressions (0 Meta this week) from in-app ad impressions (GA4 ads_impression, last instrumented at 34,940 for Jun 29-Jul 5) - different things. NEXT TESTS: (1) stand up Roku Ads conversion tracking and measure install->first-play activation; (2) compare Roku Ads cost-per-install to the paused Meta baseline ($1.77 iOS); (3) confirm whether the traffic dip persists once Roku Ads spend begins.", "threadId": "AAQkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOAAQAIBt6Dqvj9JKvIVO2AKlKos=", "reportedPlatformDownloads": 0, "blendedCostPerReportedDownload": null, "metaAppInstallsFromBreakdown": 0, "downloadGrainNote": "Meta bought 0 app installs this week (campaign paused). Paid acquisition, when active, buys FREE app installs, not paid sales; installs are a distinct grain from visible platform sales and from in-app ad impressions.", "previousPeriod": {"period": "Jul 2-Jul 8, 2026", "spend": 40.8, "impressions": 2539, "linkClicks": 251, "costPerClick": 0.15, "iosDownloads": 23, "androidDownloads": 0, "costPerIosDownload": 1.77}, "strategyNote": "PC Social Media (Nathan) is pivoting ElectricNow from Meta Ads to Roku Ads due to low mobile iOS/Android retention; TV is the priority audience and DotStudio is configuring Roku conversion tracking. Meta $0 for Jul 5-11 reflects this deliberate pause.", "status": "STALE_NO_NEW_REPORT", "note": "Latest Nathan/Forge One Meta-only email found in Outlook: Jul 12-Jul 18, 2026. Spend, impressions, clicks, and downloads were all zero; campaign appears paused or inactive. This is intentionally separate from Google Ads connector data.", "staleNote": "Outlook search on Jul 28, 2026 found no newer Meta-only Nathan performance report since the last refresh. Prior Meta metrics are preserved unchanged below; do not treat as fresh and do not imply ROAS from stale paid data.", "lastCheckedAt": "2026-07-28T08:11:00-07:00"}, "ga4PurchaseSignals": {"sourceLabel": "GA4 In-App Purchase Signals", "sourceShortLabel": "Google Play / Android purchase signals", "sourceDetail": "These are GA4 in_app_purchase events from property 497892271. They are directional purchase signals only — GA4 does not return Google Play / Android billing transaction IDs, so these rows must be reconciled against Google Play Console before being treated as financial revenue. They are intentionally kept out of the Stripe / Roku / Apple visible-sales rollup above.", "reconciliationLabel": "GA4 purchase signal, not reconciled revenue", "reconciliationDetail": "Likely Google Play / Android billing. Reconcile against Google Play Console before counting toward final sales. Do not double count if the same purchase later appears in Stripe, Roku, Apple, or official Google Play reporting.", "isFinancialRevenue": false, "excludedFromVisiblePlatformSales": true, "latestDay": {"label": "GA4 in-app purchase signals on May 21, 2026", "date": "2026-05-21", "range": "May 21, 2026 (America/Los_Angeles)", "purchaseRevenue": 29.98, "eventCount": 2, "events": [{"dateHour": "2026052106", "eventName": "in_app_purchase", "platform": "Android", "deviceCategory": "mobile", "operatingSystem": "Android", "appVersion": "16.019", "country": "United States", "region": "Pennsylvania", "city": "Philadelphia", "sourceMedium": "(direct) / (none)", "transactionId": "(not set)", "purchaseRevenue": 14.99}, {"dateHour": "2026052121", "eventName": "in_app_purchase", "platform": "Android", "deviceCategory": "smart tv", "operatingSystem": "Android", "appVersion": "16.026", "country": "United States", "region": "Washington", "city": "Vancouver", "sourceMedium": "(direct) / (none)", "transactionId": "(not set)", "purchaseRevenue": 14.99}]}, "platformSplit": [{"label": "Android · mobile", "platform": "Android", "deviceCategory": "mobile", "eventCount": 1, "purchaseRevenue": 14.99}, {"label": "Android · smart tv", "platform": "Android", "deviceCategory": "smart tv", "eventCount": 1, "purchaseRevenue": 14.99}], "appVersionSplit": [{"appVersion": "16.019", "platform": "Android", "deviceCategory": "mobile", "eventCount": 1, "purchaseRevenue": 14.99}, {"appVersion": "16.026", "platform": "Android", "deviceCategory": "smart tv", "eventCount": 1, "purchaseRevenue": 14.99}], "geoSplit": [{"country": "United States", "region": "Pennsylvania", "city": "Philadelphia", "eventCount": 1, "purchaseRevenue": 14.99}, {"country": "United States", "region": "Washington", "city": "Vancouver", "eventCount": 1, "purchaseRevenue": 14.99}], "comparisonProperty": {"property": "213042706", "result": "No in_app_purchase rows returned for 2026-05-21 from the older GA4 property; signal is only present in property 497892271."}, "note": "GA4 detected $29.98 of Android in-app purchase activity on May 21, 2026 across 2 in_app_purchase events (1 Android mobile in Philadelphia at appVersion 16.019; 1 Android smart TV in Vancouver, WA at appVersion 16.026). This is most likely Google Play / Android billing. It is shown separately from Stripe, Roku, and the manual Apple App Store snapshot and is NOT included in visible platform sales until it is reconciled with Google Play Console."}, "manualAppleDownloads": {"downloads": 405, "displayDownloads": "405", "updates": null, "displayUpdates": null, "dailyAverage": 58, "updatesDailyAverage": null, "start": "2026-07-26", "end": "2026-08-01", "period": "Jul 26-Aug 1, 2026", "priorDownloads": 360, "priorUpdates": 351, "priorPeriod": "Jul 24-Jul 30, 2026", "deltaPct": 12.5, "updatesDeltaPct": null, "product": "ElectricNOW", "platform": "iOS/watchOS/tvOS (+ macOS categories at 0)", "territories": [{"territory": "United States", "downloads": 405, "deltaPct": null}], "sourceLabel": "Manual Apple App Store Connect snapshot", "sourceDetail": "User-provided App Store Connect screenshots for iOS downloads. This is app download activity, not paid sales and not GA4 active users.", "sourceScreenshot": "uploaded_attachments/4beeea98ae04412ebed20a096a881497/image.jpeg", "sourceScreenshots": [{"metric": "downloads", "path": "uploaded_attachments/4beeea98ae04412ebed20a096a881497/image.jpeg"}, {"metric": "sales", "path": "uploaded_attachments/4beeea98ae04412ebed20a096a881497/image-1.jpeg"}], "note": "Manual Apple Connect screenshots uploaded Aug 2, 2026 for Jul 26-Aug 1, 2026. The latest download screenshot shows exact daily rows totaling 405 downloads. The paired sales screenshot shows $683.90 gross sales for the same period. Prior Jul 24-Jul 30 download snapshot is preserved as priorSnapshot, not double-counted.", "updatedAtUtc": "2026-08-02T15:20:00+00:00", "snapshots": [{"daily": [{"date": "2026-07-17", "downloads": 28}, {"date": "2026-07-18", "downloads": 11}, {"date": "2026-07-19", "downloads": 16}, {"date": "2026-07-20", "downloads": 16}, {"date": "2026-07-21", "downloads": 27}, {"date": "2026-07-22", "downloads": 18}, {"date": "2026-07-23", "downloads": 21}], "metric": "free_app_downloads", "period_end": "2026-07-23", "period_start": "2026-07-17", "platform": "iOS/watchOS/tvOS", "recorded_at": "2026-07-24T14:20:19.894661+00:00", "sales_note": "No new iOS sales included in this screenshot; downloads only.", "source": "Apple App Store Connect screenshot", "total_downloads": 137}, {"daily": [{"date": "2026-07-20", "downloads": 16, "updates": 53}, {"date": "2026-07-21", "downloads": 27, "updates": 58}, {"date": "2026-07-22", "downloads": 18, "updates": 55}, {"date": "2026-07-23", "downloads": 21, "updates": 46}, {"date": "2026-07-24", "downloads": 15, "updates": 43}, {"date": "2026-07-25", "downloads": 19, "updates": 44}, {"date": "2026-07-26", "downloads": 23, "updates": 52}], "metric": "free_app_downloads_and_updates", "period_end": "2026-07-26", "period_start": "2026-07-20", "platform": "iOS/watchOS/tvOS", "recorded_at": "2026-07-27T15:57:00+00:00", "sales_note": "No new iOS sales included in these screenshots; downloads and updates only.", "source": "Apple App Store Connect screenshots", "source_screenshots": ["uploaded_attachments/edae3d6b5f0543f2bb2de390b593f8a1/image.jpeg", "uploaded_attachments/edae3d6b5f0543f2bb2de390b593f8a1/image-1.jpeg"], "total_downloads": 139, "total_updates": 351}, {"metric": "downloads_units_breakdown", "period_start": "2026-07-24", "period_end": "2026-07-30", "platform": "iOS/watchOS/tvOS + macOS", "recorded_at": "2026-07-31T15:20:00+00:00", "source": "Apple App Store Connect screenshot", "total_units": 360, "daily_average": 51, "overall_delta_pct": 163.0, "breakdown": {"paid_ios_watchos_tvos": 0, "free_ios_watchos_tvos": 334, "free_ios_watchos_tvos_delta_pct": 143.8, "inapp_ios_tvos": 26, "inapp_ios_tvos_delta_pct": 100.0, "paid_macos": 0, "free_macos": 0, "inapp_macos": 0}, "sales_note": "No new iOS sales included in this units screenshot; a separate aggregate sales screenshot for the same week was recorded in manual_apple_sales.json.", "notes": "Screenshot does not show exact per-day numeric bar values; category totals and grand total (360) preserved without fabricating daily rows."}, {"metric": "free_app_downloads", "period_start": "2026-07-26", "period_end": "2026-08-01", "platform": "iOS/watchOS/tvOS", "recorded_at": "2026-08-02T15:20:00+00:00", "source": "Apple App Store Connect screenshot", "source_screenshot": "uploaded_attachments/4beeea98ae04412ebed20a096a881497/image.jpeg", "total_downloads": 405, "daily": [{"date": "2026-07-26", "downloads": 23}, {"date": "2026-07-27", "downloads": 25}, {"date": "2026-07-28", "downloads": 43}, {"date": "2026-07-29", "downloads": 54}, {"date": "2026-07-30", "downloads": 155}, {"date": "2026-07-31", "downloads": 55}, {"date": "2026-08-01", "downloads": 50}], "sales_note": "Paired Apple sales screenshot for the same period totals $683.90 gross."}], "priorSnapshot": {"period": "Jul 24-Jul 30, 2026", "start": "2026-07-24", "end": "2026-07-30", "downloads": 360}, "categoryBreakdown": null, "daily": [{"date": "2026-07-26", "downloads": 23}, {"date": "2026-07-27", "downloads": 25}, {"date": "2026-07-28", "downloads": 43}, {"date": "2026-07-29", "downloads": 54}, {"date": "2026-07-30", "downloads": 155}, {"date": "2026-07-31", "downloads": 55}, {"date": "2026-08-01", "downloads": 50}], "capturedAt": "2026-08-02 08:20 PDT", "enteredAt": "2026-08-02 08:20 PDT"}, "manualDataPatch": {"updatedAt": "2026-06-07 07:55 PDT", "updatedAtIso": "2026-06-07T07:55:00-07:00", "items": ["manualAppleDownloads", "rokuAppEngagement", "metaAdsSummary"], "note": "Manual/email data patch applied without changing GA4, Stripe, Roku sales, or Apple sales totals."}, "titleAggregationPatch": {"updatedAt": "2026-06-07 07:59 PDT", "summary": {"topPrograms": [], "topVideoTitles": [], "topChannelTitles": [], "collapsedDuplicateVideoTitles": [], "removedVideoRowsFromPrograms": ["Exile", "Alone"]}, "rule": "Same video-title rows are collapsed; blank collection labels no longer become standalone Top Shows rows. Active users are not summed across duplicate title rows to avoid overcounting."}, "plainEnglishSummary": {"generatedAt": "2026-08-02T08:50:00-07:00", "overview": "The strongest current signal is sales and downloads: the fresh Aug 2 TVOD export shows 107 paid TVOD transactions and $2,285.89 in the latest seven-day window, with The Ark title family contributing 101 transactions / $2,185.97 and The Ark - Season 3 alone contributing 97 transactions / $2,036.03. The latest Jul 26-Aug 1 Apple snapshot also shows 405 iOS downloads and $683.90 in Apple gross sales, while the fresh Stripe connector shows 36 valid Stripe charges totaling $749.64 for the same seven-day window. Together, known Apple+Stripe visible sales for the week were $1433.54, and visible platform YTD sales now stand at 137 known purchases / $3368.52. The important caveat is that the TVOD export may overlap with Stripe, Roku, Apple, or other platform feeds, so it is shown as a separate TVOD transaction section and is not treated as incremental visible-platform revenue until transaction-level reconciliation is complete.", "bullets": ["The strongest current signal is sales and downloads: the fresh Aug 2 TVOD export shows 107 paid TVOD transactions and $2,285.89 in the latest seven-day window, with The Ark title family contributing 101 transactions / $2,185.97 and The Ark - Season 3 alone contributing 97 transactions / $2,036.03. The latest Jul 26-Aug 1 Apple snapshot also shows 405 iOS downloads and $683.90 in Apple gross sales, while the fresh Stripe connector shows 36 valid Stripe charges totaling $749.64 for the same seven-day window. Together, known Apple+Stripe visible sales for the week were $1433.54, and visible platform YTD sales now stand at 137 known purchases / $3368.52. The important caveat is that the TVOD export may overlap with Stripe, Roku, Apple, or other platform feeds, so it is shown as a separate TVOD transaction section and is not treated as incremental visible-platform revenue until transaction-level reconciliation is complete.", "TVOD title sales: the latest export now shows 118 paid charges / $2,451.73 across Jul 3-Aug 1, with $2,436.74 net after one matching refund. This is aggregate-only and remains separate from Visible Platform Sales.", "The Ark signal: in the latest seven-day window, The Ark title family represents 94.4% of TVOD transactions and 95.6% of TVOD revenue; The Ark - Season 3 alone represents 90.7% of transactions and 89.1% of TVOD revenue.", "Apple manual update: Jul 26-Aug 1 produced 405 iOS downloads and $683.90 in gross Apple sales. This supersedes the overlapping Jul 24-Jul 30 Apple aggregate, so the dashboard avoids double-counting.", "Stripe update: the connector is working. The Jul 26-Aug 1 pull found 36 valid paid/captured/succeeded/non-refunded charges totaling $749.64; 10 missing charge IDs totaling $209.90 were added to the dashboard and already-present charge IDs were not counted twice.", "Paid acquisition verdict: acceptable but needs proof of viewing. Existing Google Ads/Meta sections should still be read directionally unless fresh ad-source pulls are available; paid-campaign impressions remain separate from ElectricNOW in-app or YouTube ad impressions, and true ROAS is not implied because ad-server revenue is unavailable for a complete matchback.", "Next tests: keep pushing The Ark and other high-intent title creative, separate iOS and Android measurement/budgets, shift budget toward audiences that convert into viewing time and sales, exclude weak segments, and keep checking install-to-viewing quality before scaling spend."], "connectorStatus": {"GA4": "LAST_GOOD_PRESERVED", "Stripe": "CONNECTED_UPDATED", "Outlook/Roku": "LAST_GOOD_PRESERVED", "Google Ads": "CONNECTED_LAST_GOOD_PRESERVED", "Meta email": "LAST_GOOD_PRESERVED", "YouTube": "LAST_GOOD_PRESERVED", "Apple manual": "MANUAL_UPDATED", "TVOD (Michael email)": "UPDATED_AGGREGATE_2026-08-02", "TVOD (Michael/user export)": "UPDATED_AGGREGATE_2026-08-02"}, "sourceStatus": {"DotStudios app ad-serving": "Manual export updated for Jul 26-Aug 1, 2026; requires weekly manual upload."}}, "youtubeSummary": {"source": "YouTube Analytics connector, ElectricNOW channel", "connectorStatus": "CONNECTED", "period": "Jul 21-Jul 27, 2026", "periodNote": "Complete rolling YouTube Analytics week, Jul 21-Jul 27, 2026 (Tuesday manual refresh).", "comparisonPeriod": "Jul 20-Jul 26, 2026", "comparisonNote": "Compared to the prior full week (Jun 22-Jun 28, 2026).", "isPlatformSales": false, "revenueType": "estimated YouTube ad revenue", "kpis": [{"key": "views", "label": "Views", "value": 175840, "deltaPct": 11.856795, "detail": "YouTube channel views in the complete week"}, {"key": "hoursWatched", "label": "Est. hours watched", "value": 76849.82, "deltaPct": 10.279699, "detail": "Estimated hours watched on YouTube"}, {"key": "avgViewDuration", "label": "Avg view duration", "value": "26m 14s", "detail": "Average watch time per YouTube view"}, {"key": "estimatedAdRevenue", "label": "Est. YouTube ad revenue", "value": 2581.949, "deltaPct": -6.1462, "detail": "Estimated YouTube ad revenue (NOT sales, NOT in-app purchases)"}, {"key": "estimatedRevenue", "label": "Est. total YouTube revenue", "value": 2885.068, "deltaPct": -4.649839, "detail": "Estimated total YouTube revenue (ads + other), separate channel - NOT platform sales"}, {"key": "estimatedRevenueYtd", "label": "YTD YouTube revenue", "value": 87968.84, "detail": "Estimated total YouTube revenue Jan 1-Jul 10, 2026 (ads + other). YouTube-only estimated revenue — NOT ElectricNOW in-app / platform sales. Est. ad revenue: $79,108.12"}, {"key": "adImpressions", "label": "YouTube ad impressions", "value": 782494, "deltaPct": 4.625764, "detail": "YouTube ad impressions (NOT ElectricNOW in-app ads, NOT paid-acquisition impressions)"}, {"key": "monetizedPlaybacks", "label": "Monetized playbacks", "value": 134911, "deltaPct": 6.940668, "detail": "YouTube playbacks that served a monetized ad"}], "totals": {"views": 201352, "estimatedMinutesWatched": 4211119, "estimatedHoursWatched": 70185.32, "averageViewDuration": 1259, "averageViewDurationLabel": "20m 59s", "estimatedRevenue": 2997.786, "adImpressions": 757975, "monetizedPlaybacks": 147687, "ytdRevenue": 98785.811, "ytdViews": 6240229, "ytdHoursWatched": 2660146.63, "ytdAdImpressions": 27533044, "ytdMonetizedPlaybacks": 4833550}, "previousTotals": {"views": 242276, "estimatedMinutesWatched": 5060903, "estimatedHoursWatched": 84348.38, "averageViewDuration": 1257, "averageViewDurationLabel": "20m 57s", "estimatedRevenue": 3579.544, "adImpressions": 909554, "monetizedPlaybacks": 177175, "ytdRevenue": 98785.811, "ytdViews": 6237007, "ytdHoursWatched": 2658323.03, "ytdAdImpressions": 27533044, "ytdMonetizedPlaybacks": 4833550}, "dailyTrend": [{"date": "2026-07-20", "views": 40381, "estimatedMinutesWatched": 842254, "estimatedHoursWatched": 14037.57, "estimatedRevenue": 581.758, "adImpressions": 151579}, {"date": "2026-07-21", "views": 39000, "estimatedMinutesWatched": 792596, "estimatedHoursWatched": 13209.93, "estimatedRevenue": 556.344, "adImpressions": 142155}, {"date": "2026-07-22", "views": 38669, "estimatedMinutesWatched": 832574, "estimatedHoursWatched": 13876.23, "estimatedRevenue": 556.42, "adImpressions": 147881}, {"date": "2026-07-23", "views": 44610, "estimatedMinutesWatched": 936578, "estimatedHoursWatched": 15609.63, "estimatedRevenue": 650.855, "adImpressions": 164562}, {"date": "2026-07-24", "views": 40089, "estimatedMinutesWatched": 827468, "estimatedHoursWatched": 13791.13, "estimatedRevenue": 606.264, "adImpressions": 149607}, {"date": "2026-07-25", "views": 39527, "estimatedMinutesWatched": 829429, "estimatedHoursWatched": 13823.82, "estimatedRevenue": 627.903, "adImpressions": 153770}], "topVideos": [{"videoId": "B_IiECt4atw", "title": "Everyone Wanted to Be on This Ship | The Ark | Full Episode | S01E01", "views": 27214, "estimatedMinutesWatched": 364776, "estimatedHoursWatched": 6079.6, "averageViewDuration": "13m 24s", "estimatedRevenue": 287.489, "titleSource": "dashboard_title_map"}, {"videoId": "13025kKEUUY", "title": "Untitled video (YouTube ID 13025kKEUUY) — title lookup unavailable this refresh", "views": 14985, "estimatedMinutesWatched": 196356, "estimatedHoursWatched": 3272.6, "averageViewDuration": "13m 06s", "estimatedRevenue": 182.277, "titleSource": "unresolved_id_labeled"}, {"videoId": "q5gQB_AGxlo", "title": "Leverage: Redemption | Season 1 Stream | 24/7 Entertainment", "views": 11288, "estimatedMinutesWatched": 274065, "estimatedHoursWatched": 4567.75, "averageViewDuration": "24m 16s", "estimatedRevenue": 76.61, "titleSource": "dashboard_title_map"}, {"videoId": "b6kMpenpQGM", "title": "Flyboys | FULL MOVIE | James Franco | Jean Reno | Jennifer Decker | David Ellison", "views": 10403, "estimatedMinutesWatched": 447776, "estimatedHoursWatched": 7462.93, "averageViewDuration": "43m 02s", "estimatedRevenue": 278.094, "titleSource": "dashboard_title_map"}, {"videoId": "tKAdjrXYj8g", "title": "Blackway | FULL MOVIE | Anthony Hopkins | Ray Liotta | Julia Stiles | Alexander Ludwig", "views": 5735, "estimatedMinutesWatched": 91955, "estimatedHoursWatched": 1532.58, "averageViewDuration": "16m 02s", "estimatedRevenue": 61.192, "titleSource": "dashboard_title_map"}, {"videoId": "G_X8m-NJV-U", "title": "Untitled video (YouTube ID G_X8m-NJV-U) — title lookup unavailable this refresh", "views": 5404, "estimatedMinutesWatched": 69027, "estimatedHoursWatched": 1150.45, "averageViewDuration": "12m 46s", "estimatedRevenue": 86.632, "titleSource": "unresolved_id_labeled"}, {"videoId": "6G2FEy9LGBw", "title": "Untitled video (YouTube ID 6G2FEy9LGBw) — title lookup unavailable this refresh", "views": 4907, "estimatedMinutesWatched": 59051, "estimatedHoursWatched": 984.18, "averageViewDuration": "12m 02s", "estimatedRevenue": 64.176, "titleSource": "unresolved_id_labeled"}, {"videoId": "NgCIyD4T8JM", "title": "Untitled video (YouTube ID NgCIyD4T8JM) — title lookup unavailable this refresh", "views": 4127, "estimatedMinutesWatched": 54146, "estimatedHoursWatched": 902.43, "averageViewDuration": "13m 07s", "estimatedRevenue": 68.961, "titleSource": "unresolved_id_labeled"}, {"videoId": "0T-yveMJPko", "title": "The Librarian: Quest for the Spear | FULL MOVIE | Noah Wyle, Kyle MacLachlan, Bob Newhart", "views": 2410, "estimatedMinutesWatched": 90962, "estimatedHoursWatched": 1516.03, "averageViewDuration": "37m 44s", "estimatedRevenue": 77.273, "titleSource": "dashboard_title_map"}, {"videoId": "Hu7thpEf-js", "title": "The Librarians and the Crown of King Arthur | Season 1 Episode 1 | Official Episode", "views": 2183, "estimatedMinutesWatched": 44125, "estimatedHoursWatched": 735.42, "averageViewDuration": "20m 12s", "estimatedRevenue": 41.684, "titleSource": "dashboard_title_map"}, {"videoId": "-mqcn5M0ktA", "title": "LBJ | FULL MOVIE | Woody Harrelson | Jennifer Jason Leigh | Richard Jenkins | Bill Pullman", "views": 2027, "estimatedMinutesWatched": 49145, "estimatedHoursWatched": 819.08, "averageViewDuration": "24m 14s", "estimatedRevenue": 30.154, "titleSource": "dashboard_title_map"}, {"videoId": "YM6-fBB7yQY", "title": "Leverage | The Nigerian Job | Season 1 Episode 1 | Official Episode", "views": 1948, "estimatedMinutesWatched": 51562, "estimatedHoursWatched": 859.37, "averageViewDuration": "26m 28s", "estimatedRevenue": 30.335, "titleSource": "dashboard_title_map"}, {"videoId": "sjsGMHmm9Yk", "title": "The Librarian: Curse of the Judas Chalice | FULL MOVIE | Noah Wyle, Bruce Davison, Bob Newhart", "views": 1944, "estimatedMinutesWatched": 47001, "estimatedHoursWatched": 783.35, "averageViewDuration": "24m 10s", "estimatedRevenue": 33.41, "titleSource": "dashboard_title_map"}, {"videoId": "pbLonEcXhTs", "title": "Untitled video (YouTube ID pbLonEcXhTs) — title lookup unavailable this refresh", "views": 1541, "estimatedMinutesWatched": 506, "estimatedHoursWatched": 8.43, "averageViewDuration": "0m 31s", "estimatedRevenue": 0.423, "titleSource": "unresolved_id_labeled"}, {"videoId": "JeeMINxXYwQ", "title": "Untitled video (YouTube ID JeeMINxXYwQ) — title lookup unavailable this refresh", "views": 1491, "estimatedMinutesWatched": 31892, "estimatedHoursWatched": 531.53, "averageViewDuration": "21m 23s", "estimatedRevenue": 22.835, "titleSource": "unresolved_id_labeled"}, {"videoId": "8QZixK70_dY", "title": "The Librarians and the Sword in the Stone | Season 1 Episode 2 | Official Episode", "views": 1247, "estimatedMinutesWatched": 27794, "estimatedHoursWatched": 463.23, "averageViewDuration": "22m 17s", "estimatedRevenue": 28.301, "titleSource": "dashboard_title_map"}, {"videoId": "LMX2-vsoGSo", "title": "Leverage | The Homecoming Job | Season 1 Episode 2 | Official Episode", "views": 1236, "estimatedMinutesWatched": 33075, "estimatedHoursWatched": 551.25, "averageViewDuration": "26m 45s", "estimatedRevenue": 18.914, "titleSource": "dashboard_title_map"}, {"videoId": "4HYYYiExFSs", "title": "The Librarian: Return to King Solomon's Mines | FULL MOVIE | Noah Wyle, Rob Newhart, Gabrielle Anwar", "views": 1195, "estimatedMinutesWatched": 43540, "estimatedHoursWatched": 725.67, "averageViewDuration": "36m 26s", "estimatedRevenue": 28.347, "titleSource": "dashboard_title_map"}, {"videoId": "6etBO8Z9IBA", "title": "Untitled video (YouTube ID 6etBO8Z9IBA) — title lookup unavailable this refresh", "views": 1168, "estimatedMinutesWatched": 24269, "estimatedHoursWatched": 404.48, "averageViewDuration": "20m 46s", "estimatedRevenue": 15.308, "titleSource": "unresolved_id_labeled"}, {"videoId": "Q9XTdOji2wc", "title": "Untitled video (YouTube ID Q9XTdOji2wc) — title lookup unavailable this refresh", "views": 1101, "estimatedMinutesWatched": 26230, "estimatedHoursWatched": 437.17, "averageViewDuration": "23m 49s", "estimatedRevenue": 24.072, "titleSource": "unresolved_id_labeled"}, {"videoId": "He3ScSePRYM", "title": "Untitled video (YouTube ID He3ScSePRYM) — title lookup unavailable this refresh", "views": 1069, "estimatedMinutesWatched": 26745, "estimatedHoursWatched": 445.75, "averageViewDuration": "25m 01s", "estimatedRevenue": 14.12, "titleSource": "unresolved_id_labeled"}, {"videoId": "89J-9vWWPuk", "title": "Untitled video (YouTube ID 89J-9vWWPuk) — title lookup unavailable this refresh", "views": 1036, "estimatedMinutesWatched": 20993, "estimatedHoursWatched": 349.88, "averageViewDuration": "20m 15s", "estimatedRevenue": 13.928, "titleSource": "unresolved_id_labeled"}, {"videoId": "rVC2lrrZvwc", "title": "Untitled video (YouTube ID rVC2lrrZvwc) — title lookup unavailable this refresh", "views": 1035, "estimatedMinutesWatched": 21112, "estimatedHoursWatched": 351.87, "averageViewDuration": "20m 23s", "estimatedRevenue": 18.868, "titleSource": "unresolved_id_labeled"}, {"videoId": "V21Q6QjV0Hc", "title": "Untitled video (YouTube ID V21Q6QjV0Hc) — title lookup unavailable this refresh", "views": 1016, "estimatedMinutesWatched": 23796, "estimatedHoursWatched": 396.6, "averageViewDuration": "23m 25s", "estimatedRevenue": 16.82, "titleSource": "unresolved_id_labeled"}, {"videoId": "gJtM5e4S5sU", "title": "Untitled video (YouTube ID gJtM5e4S5sU) — title lookup unavailable this refresh", "views": 1013, "estimatedMinutesWatched": 24085, "estimatedHoursWatched": 401.42, "averageViewDuration": "23m 46s", "estimatedRevenue": 13.997, "titleSource": "unresolved_id_labeled"}], "trafficSources": [{"source": "RELATED_VIDEO", "label": "Related videos", "views": 64768, "viewSharePct": 48.0, "estimatedHoursWatched": 35617.57, "averageViewDuration": "32m 59s"}, {"source": "SUBSCRIBER", "label": "Subscriber feed", "views": 32269, "viewSharePct": 23.9, "estimatedHoursWatched": 9232.07, "averageViewDuration": "17m 11s"}, {"source": "PLAYLIST", "label": "Playlists", "views": 16912, "viewSharePct": 12.5, "estimatedHoursWatched": 7277.72, "averageViewDuration": "25m 49s"}, {"source": "NO_LINK_OTHER", "label": "Direct / unknown", "views": 8275, "viewSharePct": 6.1, "estimatedHoursWatched": 4185.85, "averageViewDuration": "30m 21s"}, {"source": "YT_SEARCH", "label": "YouTube search", "views": 6263, "viewSharePct": 4.6, "estimatedHoursWatched": 2114.37, "averageViewDuration": "20m 18s"}, {"source": "YT_OTHER_PAGE", "label": "Other YouTube pages", "views": 3539, "viewSharePct": 2.6, "estimatedHoursWatched": 1273.38, "averageViewDuration": "21m 35s"}, {"source": "EXT_URL", "label": "External URLs", "views": 1265, "viewSharePct": 0.9, "estimatedHoursWatched": 297.37, "averageViewDuration": "14m 06s"}, {"source": "YT_CHANNEL", "label": "Channel pages", "views": 1140, "viewSharePct": 0.8, "estimatedHoursWatched": 258.37, "averageViewDuration": "13m 40s"}, {"source": "END_SCREEN", "label": "End screens", "views": 284, "viewSharePct": 0.2, "estimatedHoursWatched": 112.67, "averageViewDuration": "23m 48s"}, {"source": "NOTIFICATION", "label": "Notifications", "views": 79, "viewSharePct": 0.1, "estimatedHoursWatched": 4.37, "averageViewDuration": "3m 19s"}], "deviceSplit": [{"device": "TV", "label": "TV", "views": 73954, "viewSharePct": 54.9, "estimatedHoursWatched": 38854.07, "averageViewDuration": "31m 32s"}, {"device": "MOBILE", "label": "Mobile", "views": 30888, "viewSharePct": 22.9, "estimatedHoursWatched": 10274.63, "averageViewDuration": "19m 59s"}, {"device": "DESKTOP", "label": "Desktop", "views": 22645, "viewSharePct": 16.8, "estimatedHoursWatched": 8545.1, "averageViewDuration": "22m 39s"}, {"device": "TABLET", "label": "Tablet", "views": 7316, "viewSharePct": 5.4, "estimatedHoursWatched": 2692.2, "averageViewDuration": "22m 06s"}], "distinctionNote": "This is YouTube-only performance. YouTube ad impressions and estimated YouTube ad revenue are distinct from ElectricNOW in-app ad impressions and from Google/Meta paid-acquisition impressions. YouTube has no purchases and is NOT included in Visible Platform Sales.", "plainEnglish": "YouTube had a strong week separate from the ElectricNOW app: 201,352 views, 70,185 hours watched, and $2,997.79 estimated revenue for Jul 21-Jul 27. YTD estimated YouTube revenue is $98,785.81. \"Everyone Wanted to Be on This Ship\" (The Ark) led the week by views; Flyboys remained a top watch-time title.", "dataFreshnessNote": "YouTube Analytics connector pull completed Jul 28, 2026 for Jul 21-Jul 27, 2026.", "dataLagNote": "YouTube data can lag by 1-3 days; this pull returned complete weekly and YTD totals for Jul 21-Jul 27.", "partialUpdate": {"period": "Jul 6-Jul 9, 2026", "days": 4, "views": 59961, "estimatedMinutesWatched": 1447274, "estimatedHoursWatched": 24121.23, "averageViewDuration": "24m 09s", "estimatedRevenue": 855.873, "estimatedAdRevenue": 764.481, "adImpressions": 227488, "monetizedPlaybacks": 44808, "note": "Partial current week (Jul 6-9, 2026, 4 days) from the YouTube Analytics connector. The complete-week comparison above remains Jun 29-Jul 5 vs Jun 22-28. YouTube daily rows lag a few days, so these partial totals will settle upward. NOT platform sales - YouTube ad revenue is a separate channel."}, "yearToDateRevenue": {"period": "Jan 1-Jul 10, 2026", "source": "YouTube Analytics connector, ElectricNOW channel", "sourceFile": "cron_tracking/0b0f51ad/youtube_ytd_20260711/youtube_ytd_revenue_20260101_20260710.json", "estimatedRevenue": 87968.835, "estimatedAdRevenue": 79108.115, "views": 5543311, "estimatedMinutesWatched": 144220281, "averageViewDurationSeconds": 1567, "adImpressions": 24756572, "monetizedPlaybacks": 4315022, "isPlatformSales": false, "note": "YouTube-only estimated revenue; NOT ElectricNOW in-app/platform sales; NOT in Visible Platform Sales."}, "dailyTrendNote": "No fresh daily YouTube trend pull was requested in this Jul 28 ad-hoc refresh; dailyTrend rows preserved from the last scheduled refresh. Weekly/YTD totals above ARE fresh."}, "appTrendNote": "This trend charts total app sessions in green (a reliable daily activity signal) alongside daily active users in blue for the complete week ending Sun Jul 12, 2026. Traffic eased modestly this week - sessions 9,971 (about -3.4% vs Jun 29-Jul 5) and week-unique active users an estimated ~3,800 - while the engaged-session rate stayed healthy at 78.2%. Time-on-platform and event-level detail were not in this daily-only GA4 pull, so those scorecards are held at the last fully-instrumented week (Jun 29-Jul 5) and marked stale.", "ytdTrend": [{"date": "Apr 13", "rawDate": "20260413", "activeUsers": 8739, "sessions": 13421}, {"date": "May 25", "rawDate": "20260525", "activeUsers": 7826, "sessions": 14470}, {"date": "Jun 1", "rawDate": "20260601", "activeUsers": 7608, "sessions": 13911}, {"date": "Jun 8", "rawDate": "20260608", "activeUsers": 7282, "sessions": 13850}, {"date": "Jun 15", "rawDate": "20260615", "activeUsers": 5871, "sessions": 11817}, {"date": "Jun 22", "rawDate": "20260622", "activeUsers": 5921, "sessions": 12379}, {"date": "Jun 29", "rawDate": "20260629", "activeUsers": 4158, "sessions": 10320}, {"date": "Jul 6", "rawDate": "20260706", "activeUsers": 3800, "sessions": 9971}, {"date": "Jul 13", "rawDate": "20260713", "activeUsers": 3498, "sessions": 9730}, {"date": "Jul 20", "rawDate": "20260720", "activeUsers": 3540, "sessions": 10102}, {"date": "Jul 21", "rawDate": "20260721", "activeUsers": 3789, "sessions": 10658}], "ytdTrendNote": "Weekly GA4 totals from property 497892271. Latest point is Jul 21-Jul 27, 2026: active users and sessions both up versus the prior window, while engagement rate softened.", "eventCardsNote": "Fresh GA4 event breakdown for Jul 21-Jul 27, 2026. Paid-campaign impressions remain separate from ElectricNOW in-app ad impression events (see instrumentationGaps / metaAdsSummary / googleAdsSummary distinctions).", "usGeography": {"title": "Where app users are in the U.S.", "eyebrow": "GA4 geography", "period": "Jul 21-Jul 27, 2026", "source": "Internal GA4 pull, property 497892271 (region dimension; country not separately confirmed in this pull, treated as U.S. per existing convention)", "freshness": "Fresh pull on Jul 28, 2026", "property": "properties/497892271", "usTotals": {"activeUsers": 3938, "sessions": 10413, "engagedSessions": 7131, "totalEngagementHours": 5614.79}, "states": [{"state": "California", "activeUsers": 322, "sessions": 806, "engagedSessions": 542, "totalEngagementHours": 596.59, "sharePct": 8.18, "timeZoneGroup": "Pacific", "x": 12.0, "y": 34.0, "stateCode": "CA"}, {"state": "Texas", "activeUsers": 289, "sessions": 748, "engagedSessions": 502, "totalEngagementHours": 386.37, "sharePct": 7.34, "timeZoneGroup": "Central/Mountain", "x": 42.0, "y": 48.0, "stateCode": "TX"}, {"state": "Florida", "activeUsers": 253, "sessions": 710, "engagedSessions": 483, "totalEngagementHours": 311.75, "sharePct": 6.42, "timeZoneGroup": "East Coast", "x": 70.0, "y": 58.0, "stateCode": "FL"}, {"state": "New York", "activeUsers": 202, "sessions": 473, "engagedSessions": 311, "totalEngagementHours": 186.07, "sharePct": 5.13, "timeZoneGroup": "East Coast", "x": 79.0, "y": 16.0, "stateCode": "NY"}, {"state": "North Carolina", "activeUsers": 183, "sessions": 502, "engagedSessions": 337, "totalEngagementHours": 275.15, "sharePct": 4.65, "timeZoneGroup": "East Coast", "x": 73.0, "y": 39.0, "stateCode": "NC"}, {"state": "Pennsylvania", "activeUsers": 177, "sessions": 422, "engagedSessions": 298, "totalEngagementHours": 226.79, "sharePct": 4.49, "timeZoneGroup": "East Coast", "x": 76.0, "y": 23.0, "stateCode": "PA"}, {"state": "Georgia", "activeUsers": 157, "sessions": 464, "engagedSessions": 318, "totalEngagementHours": 197.89, "sharePct": 3.99, "timeZoneGroup": "East Coast", "x": 65.0, "y": 46.0, "stateCode": "GA"}, {"state": "Ohio", "activeUsers": 155, "sessions": 489, "engagedSessions": 356, "totalEngagementHours": 274.0, "sharePct": 3.94, "timeZoneGroup": "East Coast", "x": 65.0, "y": 25.0, "stateCode": "OH"}, {"state": "Illinois", "activeUsers": 145, "sessions": 344, "engagedSessions": 259, "totalEngagementHours": 152.17, "sharePct": 3.68, "timeZoneGroup": "Central/Mountain", "x": 58.0, "y": 28.0, "stateCode": "IL"}, {"state": "Michigan", "activeUsers": 145, "sessions": 398, "engagedSessions": 270, "totalEngagementHours": 135.76, "sharePct": 3.68, "timeZoneGroup": "East Coast", "x": 62.0, "y": 18.0, "stateCode": "MI"}, {"state": "Tennessee", "activeUsers": 119, "sessions": 238, "engagedSessions": 182, "totalEngagementHours": 91.58, "sharePct": 3.02, "timeZoneGroup": "Central/Mountain", "x": 62.0, "y": 39.0, "stateCode": "TN"}, {"state": "Virginia", "activeUsers": 100, "sessions": 264, "engagedSessions": 187, "totalEngagementHours": 164.05, "sharePct": 2.54, "timeZoneGroup": "East Coast", "x": 75.0, "y": 32.0, "stateCode": "VA"}, {"state": "Arizona", "activeUsers": 94, "sessions": 247, "engagedSessions": 178, "totalEngagementHours": 111.99, "sharePct": 2.39, "timeZoneGroup": "Central/Mountain", "x": 24.0, "y": 42.0, "stateCode": "AZ"}, {"state": "Indiana", "activeUsers": 94, "sessions": 242, "engagedSessions": 168, "totalEngagementHours": 128.61, "sharePct": 2.39, "timeZoneGroup": "Other/unknown", "x": 61.0, "y": 27.0, "stateCode": "IN"}, {"state": "Minnesota", "activeUsers": 91, "sessions": 333, "engagedSessions": 243, "totalEngagementHours": 318.27, "sharePct": 2.31, "timeZoneGroup": "Central/Mountain", "x": 51.0, "y": 14.0, "stateCode": "MN"}, {"state": "Washington", "activeUsers": 91, "sessions": 169, "engagedSessions": 95, "totalEngagementHours": 36.12, "sharePct": 2.31, "timeZoneGroup": "Pacific", "x": 15.0, "y": 6.0, "stateCode": "WA"}, {"state": "Alabama", "activeUsers": 88, "sessions": 226, "engagedSessions": 154, "totalEngagementHours": 102.38, "sharePct": 2.23, "timeZoneGroup": "Other/unknown", "x": 61.0, "y": 46.0, "stateCode": "AL"}, {"state": "Missouri", "activeUsers": 84, "sessions": 235, "engagedSessions": 147, "totalEngagementHours": 84.6, "sharePct": 2.13, "timeZoneGroup": "Other/unknown", "x": 54.0, "y": 32.0, "stateCode": "MO"}, {"state": "Oregon", "activeUsers": 79, "sessions": 154, "engagedSessions": 91, "totalEngagementHours": 75.79, "sharePct": 2.01, "timeZoneGroup": "Pacific", "x": 14.0, "y": 15.0, "stateCode": "OR"}, {"state": "New Jersey", "activeUsers": 73, "sessions": 254, "engagedSessions": 187, "totalEngagementHours": 202.8, "sharePct": 1.85, "timeZoneGroup": "Other/unknown", "x": 80.0, "y": 24.0, "stateCode": "NJ"}, {"state": "Oklahoma", "activeUsers": 71, "sessions": 224, "engagedSessions": 142, "totalEngagementHours": 107.52, "sharePct": 1.8, "timeZoneGroup": "Other/unknown", "x": 46.0, "y": 40.0, "stateCode": "OK"}, {"state": "Wisconsin", "activeUsers": 67, "sessions": 204, "engagedSessions": 118, "totalEngagementHours": 122.57, "sharePct": 1.7, "timeZoneGroup": "Other/unknown", "x": 55.0, "y": 16.0, "stateCode": "WI"}, {"state": "Massachusetts", "activeUsers": 66, "sessions": 155, "engagedSessions": 107, "totalEngagementHours": 63.82, "sharePct": 1.68, "timeZoneGroup": "East Coast", "x": 84.0, "y": 18.0, "stateCode": "MA"}, {"state": "Kentucky", "activeUsers": 57, "sessions": 139, "engagedSessions": 83, "totalEngagementHours": 46.88, "sharePct": 1.45, "timeZoneGroup": "Other/unknown", "x": 64.0, "y": 33.0, "stateCode": "KY"}, {"state": "Arkansas", "activeUsers": 56, "sessions": 173, "engagedSessions": 125, "totalEngagementHours": 94.46, "sharePct": 1.42, "timeZoneGroup": "Other/unknown", "x": 56.0, "y": 42.0, "stateCode": "AR"}, {"state": "Colorado", "activeUsers": 56, "sessions": 169, "engagedSessions": 125, "totalEngagementHours": 98.54, "sharePct": 1.42, "timeZoneGroup": "Central/Mountain", "x": 34.0, "y": 32.0, "stateCode": "CO"}, {"state": "South Carolina", "activeUsers": 56, "sessions": 174, "engagedSessions": 136, "totalEngagementHours": 82.89, "sharePct": 1.42, "timeZoneGroup": "Other/unknown", "x": 70.0, "y": 43.0, "stateCode": "SC"}, {"state": "Maryland", "activeUsers": 55, "sessions": 107, "engagedSessions": 69, "totalEngagementHours": 51.71, "sharePct": 1.4, "timeZoneGroup": "Other/unknown", "x": 79.0, "y": 28.0, "stateCode": "MD"}, {"state": "Iowa", "activeUsers": 42, "sessions": 115, "engagedSessions": 76, "totalEngagementHours": 76.13, "sharePct": 1.07, "timeZoneGroup": "Other/unknown", "x": 53.0, "y": 24.0, "stateCode": "IA"}, {"state": "Louisiana", "activeUsers": 42, "sessions": 100, "engagedSessions": 71, "totalEngagementHours": 194.9, "sharePct": 1.07, "timeZoneGroup": "Other/unknown", "x": 56.0, "y": 50.0, "stateCode": "LA"}, {"state": "Connecticut", "activeUsers": 40, "sessions": 110, "engagedSessions": 85, "totalEngagementHours": 76.15, "sharePct": 1.02, "timeZoneGroup": "Other/unknown", "x": 83.0, "y": 20.0, "stateCode": "CT"}, {"state": "Nevada", "activeUsers": 40, "sessions": 131, "engagedSessions": 77, "totalEngagementHours": 79.92, "sharePct": 1.02, "timeZoneGroup": "Pacific", "x": 17.0, "y": 28.0, "stateCode": "NV"}, {"state": "Kansas", "activeUsers": 39, "sessions": 91, "engagedSessions": 62, "totalEngagementHours": 38.86, "sharePct": 0.99, "timeZoneGroup": "Other/unknown", "x": 45.0, "y": 32.0, "stateCode": "KS"}, {"state": "Mississippi", "activeUsers": 36, "sessions": 114, "engagedSessions": 71, "totalEngagementHours": 46.46, "sharePct": 0.91, "timeZoneGroup": "Other/unknown", "x": 59.0, "y": 46.0, "stateCode": "MS"}, {"state": "West Virginia", "activeUsers": 29, "sessions": 89, "engagedSessions": 60, "totalEngagementHours": 88.3, "sharePct": 0.74, "timeZoneGroup": "Other/unknown", "x": 72.0, "y": 30.0, "stateCode": "WV"}, {"state": "Utah", "activeUsers": 27, "sessions": 73, "engagedSessions": 45, "totalEngagementHours": 42.53, "sharePct": 0.69, "timeZoneGroup": "Central/Mountain", "x": 23.0, "y": 28.0, "stateCode": "UT"}, {"state": "Idaho", "activeUsers": 25, "sessions": 82, "engagedSessions": 67, "totalEngagementHours": 40.16, "sharePct": 0.63, "timeZoneGroup": "Central/Mountain", "x": 22.0, "y": 16.0, "stateCode": "ID"}, {"state": "Nebraska", "activeUsers": 25, "sessions": 55, "engagedSessions": 36, "totalEngagementHours": 28.82, "sharePct": 0.63, "timeZoneGroup": "Other/unknown", "x": 45.0, "y": 24.0, "stateCode": "NE"}, {"state": "Maine", "activeUsers": 23, "sessions": 73, "engagedSessions": 58, "totalEngagementHours": 39.68, "sharePct": 0.58, "timeZoneGroup": "Other/unknown", "x": 85.0, "y": 8.0, "stateCode": "ME"}, {"state": "New Mexico", "activeUsers": 23, "sessions": 74, "engagedSessions": 50, "totalEngagementHours": 26.52, "sharePct": 0.58, "timeZoneGroup": "Central/Mountain", "x": 32.0, "y": 42.0, "stateCode": "NM"}, {"state": "New Hampshire", "activeUsers": 20, "sessions": 40, "engagedSessions": 29, "totalEngagementHours": 26.34, "sharePct": 0.51, "timeZoneGroup": "Other/unknown", "x": 84.0, "y": 15.0, "stateCode": "NH"}, {"state": "Rhode Island", "activeUsers": 15, "sessions": 26, "engagedSessions": 20, "totalEngagementHours": 10.38, "sharePct": 0.38, "timeZoneGroup": "Other/unknown", "x": 85.0, "y": 19.0, "stateCode": "RI"}, {"state": "District of Columbia", "activeUsers": 13, "sessions": 27, "engagedSessions": 17, "totalEngagementHours": 11.32, "sharePct": 0.33, "timeZoneGroup": "Other/unknown", "x": 79.0, "y": 29.0, "stateCode": "DC"}, {"state": "Hawaii", "activeUsers": 12, "sessions": 15, "engagedSessions": 8, "totalEngagementHours": 13.73, "sharePct": 0.3, "timeZoneGroup": "Pacific", "x": 18.0, "y": 56.0, "stateCode": "HI"}, {"state": "South Dakota", "activeUsers": 12, "sessions": 28, "engagedSessions": 15, "totalEngagementHours": 15.01, "sharePct": 0.3, "timeZoneGroup": "Other/unknown", "x": 44.0, "y": 17.0, "stateCode": "SD"}, {"state": "Alaska", "activeUsers": 11, "sessions": 19, "engagedSessions": 15, "totalEngagementHours": 7.71, "sharePct": 0.28, "timeZoneGroup": "Pacific", "x": 7.0, "y": 56.0, "stateCode": "AK"}, {"state": "Montana", "activeUsers": 11, "sessions": 38, "engagedSessions": 23, "totalEngagementHours": 13.12, "sharePct": 0.28, "timeZoneGroup": "Central/Mountain", "x": 29.0, "y": 10.0, "stateCode": "MT"}, {"state": "Delaware", "activeUsers": 9, "sessions": 21, "engagedSessions": 14, "totalEngagementHours": 2.53, "sharePct": 0.23, "timeZoneGroup": "Other/unknown", "x": 80.0, "y": 27.0, "stateCode": "DE"}, {"state": "Vermont", "activeUsers": 8, "sessions": 10, "engagedSessions": 6, "totalEngagementHours": 0.2, "sharePct": 0.2, "timeZoneGroup": "Other/unknown", "x": 82.0, "y": 13.0, "stateCode": "VT"}, {"state": "Wyoming", "activeUsers": 6, "sessions": 10, "engagedSessions": 7, "totalEngagementHours": 1.67, "sharePct": 0.15, "timeZoneGroup": "Central/Mountain", "x": 30.0, "y": 20.0, "stateCode": "WY"}], "topCities": [{"city": "New York", "region": "New York", "activeUsers": 101, "newUsers": 19, "sessions": 178, "engagedSessions": 134, "screenPageViews": 436, "eventCount": 7614, "engagementRate": 75.3}, {"city": "Los Angeles", "region": "California", "activeUsers": 78, "newUsers": 12, "sessions": 187, "engagedSessions": 147, "screenPageViews": 404, "eventCount": 38505, "engagementRate": 78.6}, {"city": "Chicago", "region": "Illinois", "activeUsers": 73, "newUsers": 21, "sessions": 186, "engagedSessions": 156, "screenPageViews": 371, "eventCount": 8708, "engagementRate": 83.9}, {"city": "Houston", "region": "Texas", "activeUsers": 58, "newUsers": 18, "sessions": 141, "engagedSessions": 117, "screenPageViews": 219, "eventCount": 13913, "engagementRate": 83.0}, {"city": "Philadelphia", "region": "Pennsylvania", "activeUsers": 54, "newUsers": 9, "sessions": 147, "engagedSessions": 116, "screenPageViews": 345, "eventCount": 14961, "engagementRate": 78.9}, {"city": "Atlanta", "region": "Georgia", "activeUsers": 43, "newUsers": 11, "sessions": 81, "engagedSessions": 56, "screenPageViews": 120, "eventCount": 3080, "engagementRate": 69.1}, {"city": "Las Vegas Valley", "region": "Nevada", "activeUsers": 36, "newUsers": 9, "sessions": 79, "engagedSessions": 66, "screenPageViews": 219, "eventCount": 16585, "engagementRate": 83.5}, {"city": "Phoenix", "region": "Arizona", "activeUsers": 35, "newUsers": 8, "sessions": 69, "engagedSessions": 54, "screenPageViews": 279, "eventCount": 6083, "engagementRate": 78.3}, {"city": "Dallas", "region": "Texas", "activeUsers": 35, "newUsers": 15, "sessions": 65, "engagedSessions": 48, "screenPageViews": 184, "eventCount": 2154, "engagementRate": 73.8}, {"city": "Indianapolis", "region": "Indiana", "activeUsers": 32, "newUsers": 9, "sessions": 49, "engagedSessions": 38, "screenPageViews": 59, "eventCount": 1844, "engagementRate": 77.6}, {"city": "Seattle", "region": "Washington", "activeUsers": 32, "newUsers": 12, "sessions": 74, "engagedSessions": 63, "screenPageViews": 206, "eventCount": 10489, "engagementRate": 85.1}, {"city": "Denver", "region": "Colorado", "activeUsers": 31, "newUsers": 10, "sessions": 63, "engagedSessions": 48, "screenPageViews": 128, "eventCount": 4481, "engagementRate": 76.2}, {"city": "Austin", "region": "Texas", "activeUsers": 31, "newUsers": 7, "sessions": 70, "engagedSessions": 53, "screenPageViews": 78, "eventCount": 3062, "engagementRate": 75.7}, {"city": "Detroit", "region": "Michigan", "activeUsers": 30, "newUsers": 11, "sessions": 42, "engagedSessions": 31, "screenPageViews": 140, "eventCount": 4192, "engagementRate": 73.8}, {"city": "Boston", "region": "Massachusetts", "activeUsers": 28, "newUsers": 5, "sessions": 46, "engagedSessions": 38, "screenPageViews": 46, "eventCount": 2111, "engagementRate": 82.6}], "sumStateActiveUsers": 3938, "timeZoneUsage": [{"group": "Pacific", "activeUsers": 555, "sharePct": 14.09}, {"group": "Central/Mountain", "activeUsers": 886, "sharePct": 22.5}, {"group": "East Coast", "activeUsers": 1438, "sharePct": 36.52}, {"group": "Other/unknown", "activeUsers": 1059, "sharePct": 26.89}], "summaryLine": "Top U.S. states this week: California, Texas, Florida, New York, North Carolina. Time-zone mix: Pacific 14.1%, Central/Mountain 22.5%, East Coast 36.5%.", "caveat": "GA4 geography is approximate and based on active users with state-level signals; the Jul 28 pull returned a region-only dimension without a separate country filter, consistent with the established dashboard convention of treating this feed as U.S. state-level.", "methodologyNote": "Mapped U.S. regions into Pacific, Central/Mountain, East Coast, and other/unknown groups for ad-targeting direction. City-level breakdown unchanged (no fresh city pull this refresh). Map bubble positions are fixed approximate state locations for display purposes only; they do not affect underlying GA4 figures."}, "auditNotes": [{"date": "2026-07-24", "section": "Viewing Behavior", "note": "Replaced stale held unique-user/live-segment scorecards with fresh GA4 event-count cards for Jul 13-Jul 19, 2026. Old held cards were internally inconsistent because the dashboard had fresh event data but stale card flags from an earlier partial pull."}, {"date": "2026-07-28", "section": "Full refresh", "note": "Tuesday manual refresh (rolling latest-complete-7-day window Jul 21-Jul 27, 2026 vs Jul 14-Jul 20, 2026). Fresh: GA4, YouTube, Stripe, Roku App Engagement. Stale/preserved with labels: Roku Sales Activity (source date still Jul 27), Google Ads (rate-limited 429, retry ~16638s), Meta (no new report), Apple sales and downloads (no new screenshot since Jul 5/Jul 26 respectively), TVOD/registered users (no new Michael email since Jul 27). No fresh landing-page-only or daily-trend GA4 pulls this cycle; platformAudience landing split is estimated from last week’s ratio and weeklyTrend/dailyTrend rows are preserved, both explicitly labeled."}, {"date": "2026-08-02T08:20:00-07:00", "type": "apple_stripe_refresh", "summary": "Applied Apple Jul 26-Aug 1 downloads/sales and fresh Stripe connector pull. Apple YTD $1046.68; Stripe YTD 88/$1822.11; visible YTD 137/$3368.52.", "stalePreservation": "GA4/Roku/YouTube/Google Ads/Meta/TVOD last-good values preserved where no fresh pull was applied; no values zeroed."}, "Added DotStudios app ad-serving manual export for Jul 26-Aug 1, 2026 (37,918 requests, 52,316 impressions, 931 errors). Kept separate from GA4 ads events and paid media impressions."], "tvodTitleRevenue": {"title": "TVOD Title Revenue & Registered Users", "eyebrow": "User-provided Michael Johnson TVOD export — aggregate only", "source": "User-provided TVOD transaction CSV pasted in chat on 2026-08-02", "emailDate": "2026-08-02", "periodStart": "2026-07-03", "periodEnd": "2026-08-01", "periodNote": "Fresh aggregate TVOD transaction export covering Jul 3-Aug 1, 2026. This section is separate from Stripe/Roku/Apple Visible Platform Sales and should not be summed with salesSummary until transaction-level reconciliation confirms there is no overlap.", "extractedAt": "2026-08-02T08:50:00-07:00", "registeredUsers": {"total": 7914, "active": 7814}, "registeredUsersNote": "Registered-user count preserved from the last Michael Johnson email because the Aug 2 pasted TVOD export included transactions only, not a newer registered-user total.", "transactions": {"totalRows": 119, "paidTransactions": 118, "refundTransactions": 1, "latestSevenDayPaidTransactions": 107}, "netRevenue": {"tvodSalesExportPaidGross": 2451.73, "tvodSalesExportPaidNet": 2451.73, "refundsGross": -14.99, "refundsNet": -14.99, "netIncludingRefunds": 2436.74, "latestSevenDayGross": 2285.89, "latestSevenDayNet": 2285.89}, "latestSevenDay": {"periodStart": "2026-07-26", "periodEnd": "2026-08-01", "transactions": 107, "gross": 2285.89, "net": 2285.89, "arkTitleFamilyTransactions": 101, "arkTitleFamilyGross": 2185.97, "arkTitleFamilyNet": 2185.97, "arkTitleFamilyShareOfTransactionsPct": 94.4, "arkTitleFamilyShareOfRevenuePct": 95.6, "arkSeason3Transactions": 97, "arkSeason3Gross": 2036.03, "arkSeason3Net": 2036.03, "arkSeason3ShareOfTransactionsPct": 90.7, "arkSeason3ShareOfRevenuePct": 89.1, "topTitlesByNet": [{"title": "The Ark - Season 3", "transactions": 97, "gross": 2036.03, "net": 2036.03}, {"title": "The Ark", "transactions": 2, "gross": 109.98, "net": 109.98}, {"title": "The Librarians: The Next Chapter Season 2", "transactions": 2, "gross": 41.98, "net": 41.98}, {"title": "The Ark - Season 1", "transactions": 2, "gross": 39.96, "net": 39.96}, {"title": "Parent The Librarians: The Next Chapter", "transactions": 1, "gross": 19.98, "net": 19.98}, {"title": "The Librarians - Season 1", "transactions": 1, "gross": 19.98, "net": 19.98}, {"title": "The Draw", "transactions": 1, "gross": 14.99, "net": 14.99}, {"title": "Universal Soldier II", "transactions": 1, "gross": 2.99, "net": 2.99}], "channels": [{"channel": "apple", "transactions": 44, "gross": 955.54, "net": 955.54}, {"channel": "web", "transactions": 35, "gross": 728.65, "net": 728.65}, {"channel": "roku", "transactions": 24, "gross": 535.74, "net": 535.74}, {"channel": "android", "transactions": 3, "gross": 62.97, "net": 62.97}, {"channel": "amazon_fire", "transactions": 1, "gross": 2.99, "net": 2.99}]}, "topTitlesByNet": [{"title": "The Ark - Season 3", "transactions": 97, "gross": 2036.03, "net": 2036.03}, {"title": "The Ark", "transactions": 2, "gross": 109.98, "net": 109.98}, {"title": "Leverage: Redemption - Season 3", "transactions": 4, "gross": 64.95, "net": 64.95}, {"title": "The Ark - Season 2", "transactions": 3, "gross": 59.94, "net": 59.94}, {"title": "The Librarians: The Next Chapter Season 2", "transactions": 2, "gross": 41.98, "net": 41.98}, {"title": "The Ark - Season 1", "transactions": 2, "gross": 39.96, "net": 39.96}, {"title": "Parent The Librarians: The Next Chapter", "transactions": 1, "gross": 19.98, "net": 19.98}, {"title": "The Librarians - Season 1", "transactions": 1, "gross": 19.98, "net": 19.98}, {"title": "The Messenger", "transactions": 1, "gross": 19.98, "net": 19.98}, {"title": "The Draw", "transactions": 1, "gross": 14.99, "net": 14.99}, {"title": "The Librarians and the Crown of King Arthur in Cinemascope", "transactions": 1, "gross": 2.99, "net": 2.99}, {"title": "The Triangle Night 1", "transactions": 1, "gross": 2.99, "net": 2.99}, {"title": "Universal Soldier II", "transactions": 1, "gross": 2.99, "net": 2.99}, {"title": "Somewhere in Montana", "transactions": 2, "gross": 0.0, "net": 0.0}], "channels": [{"channel": "apple", "transactions": 45, "gross": 970.53, "net": 970.53}, {"channel": "web", "transactions": 38, "gross": 748.63, "net": 748.63}, {"channel": "roku", "transactions": 28, "gross": 598.67, "net": 598.67}, {"channel": "android", "transactions": 3, "gross": 62.97, "net": 62.97}, {"channel": "vizio", "transactions": 2, "gross": 29.98, "net": 29.98}, {"channel": "amazon_fire", "transactions": 3, "gross": 25.96, "net": 25.96}], "dailyTrend": [{"date": "2026-07-03", "transactions": 1, "gross": 19.98, "net": 19.98}, {"date": "2026-07-05", "transactions": 1, "gross": 14.99, "net": 14.99}, {"date": "2026-07-08", "transactions": 2, "gross": 29.98, "net": 29.98}, {"date": "2026-07-14", "transactions": 4, "gross": 22.97, "net": 22.97}, {"date": "2026-07-20", "transactions": 1, "gross": 19.98, "net": 19.98}, {"date": "2026-07-21", "transactions": 2, "gross": 22.97, "net": 22.97}, {"date": "2026-07-25", "transactions": 1, "gross": 19.98, "net": 19.98}, {"date": "2026-07-26", "transactions": 1, "gross": 20.99, "net": 20.99}, {"date": "2026-07-27", "transactions": 6, "gross": 118.93, "net": 118.93}, {"date": "2026-07-28", "transactions": 2, "gross": 41.98, "net": 41.98}, {"date": "2026-07-29", "transactions": 4, "gross": 116.95, "net": 116.95}, {"date": "2026-07-30", "transactions": 44, "gross": 905.56, "net": 905.56}, {"date": "2026-07-31", "transactions": 29, "gross": 642.71, "net": 642.71}, {"date": "2026-08-01", "transactions": 21, "gross": 438.77, "net": 438.77}], "note": "Fresh Aug 2 aggregate export. Customer emails and individual customer rows are intentionally excluded. The latest seven-day window shows 107 paid TVOD transactions / $2,285.89. The Ark title family accounts for 101 transactions / $2,185.97, and The Ark - Season 3 alone accounts for 97 transactions / $2,036.03. Do not add this TVOD export to Visible Platform Sales until it is reconciled against Stripe, Roku, Apple, and other platform-specific transaction feeds.", "privacyNote": "Aggregated only; no customer emails or individual customer records are exposed.", "sourceUrl": null}, "weeklyTrendNote": "No fresh daily GA4 trend pull was requested in this Jul 28 ad-hoc refresh; daily weeklyTrend/monthlyTrend rows are preserved from the last scheduled refresh (Jul 27) and are not re-derived here. Aggregate KPI totals above ARE fresh for Jul 21-Jul 27.", "dotStudiosAppAds": {"source": "DotStudios manual app ad-serving export", "sourceType": "manual_weekly_upload", "sourceFileLabel": "DotStudios app ads export pasted/uploaded Aug 2, 2026", "dataFreshness": "manual_current", "manualUpdateRequired": true, "updatedAt": "2026-08-02T16:14:54.463156+00:00", "periodStart": "2026-07-26", "periodEnd": "2026-08-01", "period": "2026-07-26 to 2026-08-01", "rowCount": 393, "totals": {"requests": 37918, "impressions": 52316, "errors": 931, "impressionsPerRequest": 1.38, "impressionsPerRequestPct": 137.97, "errorRatePct": 2.46}, "dailyTrend": [{"label": "2026-07-26", "date": "2026-07-26", "requests": 4415, "impressions": 5790, "errors": 47, "impressionsPerRequest": 1.31, "impressionsPerRequestPct": 131.14, "errorRatePct": 1.06, "avgAdsPerPod": 1.31}, {"label": "2026-07-27", "date": "2026-07-27", "requests": 3576, "impressions": 4698, "errors": 47, "impressionsPerRequest": 1.31, "impressionsPerRequestPct": 131.38, "errorRatePct": 1.31, "avgAdsPerPod": 1.31}, {"label": "2026-07-28", "date": "2026-07-28", "requests": 5028, "impressions": 5693, "errors": 75, "impressionsPerRequest": 1.13, "impressionsPerRequestPct": 113.23, "errorRatePct": 1.49, "avgAdsPerPod": 1.13}, {"label": "2026-07-29", "date": "2026-07-29", "requests": 6355, "impressions": 8809, "errors": 203, "impressionsPerRequest": 1.39, "impressionsPerRequestPct": 138.62, "errorRatePct": 3.19, "avgAdsPerPod": 1.38}, {"label": "2026-07-30", "date": "2026-07-30", "requests": 6618, "impressions": 9242, "errors": 117, "impressionsPerRequest": 1.4, "impressionsPerRequestPct": 139.65, "errorRatePct": 1.77, "avgAdsPerPod": 1.4}, {"label": "2026-07-31", "date": "2026-07-31", "requests": 5948, "impressions": 8545, "errors": 179, "impressionsPerRequest": 1.44, "impressionsPerRequestPct": 143.66, "errorRatePct": 3.01, "avgAdsPerPod": 1.44}, {"label": "2026-08-01", "date": "2026-08-01", "requests": 5978, "impressions": 9539, "errors": 263, "impressionsPerRequest": 1.6, "impressionsPerRequestPct": 159.57, "errorRatePct": 4.4, "avgAdsPerPod": 1.6}], "topChannels": [{"label": "The Ark", "channel": "The Ark", "requests": 16832, "impressions": 15996, "errors": 149, "impressionsPerRequest": 0.95, "impressionsPerRequestPct": 95.03, "errorRatePct": 0.89, "avgAdsPerPod": 0.95}, {"label": "Leverage: Redemption - Season 3", "channel": "Leverage: Redemption - Season 3", "requests": 2508, "impressions": 4278, "errors": 61, "impressionsPerRequest": 1.71, "impressionsPerRequestPct": 170.57, "errorRatePct": 2.43, "avgAdsPerPod": 1.71}, {"label": "The Ark - Season 1", "channel": "The Ark - Season 1", "requests": 1276, "impressions": 4065, "errors": 182, "impressionsPerRequest": 3.19, "impressionsPerRequestPct": 318.57, "errorRatePct": 14.26, "avgAdsPerPod": 3.19}, {"label": "The Ark - Season 2", "channel": "The Ark - Season 2", "requests": 1200, "impressions": 3995, "errors": 151, "impressionsPerRequest": 3.33, "impressionsPerRequestPct": 332.92, "errorRatePct": 12.58, "avgAdsPerPod": 3.33}, {"label": "Leverage", "channel": "Leverage", "requests": 3254, "impressions": 3234, "errors": 14, "impressionsPerRequest": 0.99, "impressionsPerRequestPct": 99.39, "errorRatePct": 0.43, "avgAdsPerPod": 0.99}, {"label": "The Librarians (Full Series)", "channel": "The Librarians (Full Series)", "requests": 2496, "impressions": 2407, "errors": 45, "impressionsPerRequest": 0.96, "impressionsPerRequestPct": 96.43, "errorRatePct": 1.8, "avgAdsPerPod": 0.97}, {"label": "Almost Paradise (Season 1 & 2)", "channel": "Almost Paradise (Season 1 & 2)", "requests": 2083, "impressions": 2109, "errors": 15, "impressionsPerRequest": 1.01, "impressionsPerRequestPct": 101.25, "errorRatePct": 0.72, "avgAdsPerPod": 1.01}, {"label": "Leverage: Redemption", "channel": "Leverage: Redemption", "requests": 2089, "impressions": 2056, "errors": 32, "impressionsPerRequest": 0.98, "impressionsPerRequestPct": 98.42, "errorRatePct": 1.53, "avgAdsPerPod": 0.98}, {"label": "Leverage - Season 1", "channel": "Leverage - Season 1", "requests": 537, "impressions": 1965, "errors": 20, "impressionsPerRequest": 3.66, "impressionsPerRequestPct": 365.92, "errorRatePct": 3.72, "avgAdsPerPod": 3.66}, {"label": "Almost Paradise - Season 1", "channel": "Almost Paradise - Season 1", "requests": 371, "impressions": 1252, "errors": 45, "impressionsPerRequest": 3.37, "impressionsPerRequestPct": 337.47, "errorRatePct": 12.13, "avgAdsPerPod": 3.37}, {"label": "The Librarians - Season 1", "channel": "The Librarians - Season 1", "requests": 261, "impressions": 841, "errors": 27, "impressionsPerRequest": 3.22, "impressionsPerRequestPct": 322.22, "errorRatePct": 10.34, "avgAdsPerPod": 3.22}, {"label": "Leverage - Season 3", "channel": "Leverage - Season 3", "requests": 198, "impressions": 707, "errors": 3, "impressionsPerRequest": 3.57, "impressionsPerRequestPct": 357.07, "errorRatePct": 1.52, "avgAdsPerPod": 3.57}], "deviceSplit": [{"label": "roku", "device": "roku", "requests": 6399, "impressions": 22046, "errors": 652, "impressionsPerRequest": 3.45, "impressionsPerRequestPct": 344.52, "errorRatePct": 10.19, "avgAdsPerPod": 3.45}, {"label": "android", "device": "android", "requests": 10045, "impressions": 9454, "errors": 106, "impressionsPerRequest": 0.94, "impressionsPerRequestPct": 94.12, "errorRatePct": 1.06, "avgAdsPerPod": 0.94}, {"label": "ios", "device": "ios", "requests": 8444, "impressions": 7970, "errors": 105, "impressionsPerRequest": 0.94, "impressionsPerRequestPct": 94.39, "errorRatePct": 1.24, "avgAdsPerPod": 0.94}, {"label": "androidtv", "device": "androidtv", "requests": 6118, "impressions": 6026, "errors": 21, "impressionsPerRequest": 0.98, "impressionsPerRequestPct": 98.5, "errorRatePct": 0.34, "avgAdsPerPod": 0.98}, {"label": "appletv", "device": "appletv", "requests": 3465, "impressions": 3464, "errors": 1, "impressionsPerRequest": 1.0, "impressionsPerRequestPct": 99.97, "errorRatePct": 0.03, "avgAdsPerPod": 1.0}, {"label": "firetv", "device": "firetv", "requests": 3140, "impressions": 3020, "errors": 45, "impressionsPerRequest": 0.96, "impressionsPerRequestPct": 96.18, "errorRatePct": 1.43, "avgAdsPerPod": 0.96}, {"label": "webos", "device": "webos", "requests": 307, "impressions": 336, "errors": 1, "impressionsPerRequest": 1.09, "impressionsPerRequestPct": 109.45, "errorRatePct": 0.33, "avgAdsPerPod": 1.09}], "countrySplit": [{"label": "United States", "country": "United States", "requests": 36964, "impressions": 51337, "errors": 930, "impressionsPerRequest": 1.39, "impressionsPerRequestPct": 138.88, "errorRatePct": 2.52, "avgAdsPerPod": 1.39}, {"label": "Canada", "country": "Canada", "requests": 647, "impressions": 643, "errors": 0, "impressionsPerRequest": 0.99, "impressionsPerRequestPct": 99.38, "errorRatePct": 0.0, "avgAdsPerPod": 0.99}, {"label": "(not set)", "country": "(not set)", "requests": 295, "impressions": 324, "errors": 1, "impressionsPerRequest": 1.1, "impressionsPerRequestPct": 109.83, "errorRatePct": 0.34, "avgAdsPerPod": 1.1}, {"label": "Unknown", "country": "Unknown", "requests": 12, "impressions": 12, "errors": 0, "impressionsPerRequest": 1.0, "impressionsPerRequestPct": 100.0, "errorRatePct": 0.0, "avgAdsPerPod": 1.0}], "topVideos": [{"label": "(not set)", "video Title": "(not set)", "requests": 5135, "impressions": 4925, "errors": 70, "impressionsPerRequest": 0.96, "impressionsPerRequestPct": 95.91, "errorRatePct": 1.36, "avgAdsPerPod": 0.96}, {"label": "Like It Touched the Sun", "video Title": "Like It Touched the Sun", "requests": 2578, "impressions": 3038, "errors": 55, "impressionsPerRequest": 1.18, "impressionsPerRequestPct": 117.84, "errorRatePct": 2.13, "avgAdsPerPod": 1.18}, {"label": "It Will Be Over Soon", "video Title": "It Will Be Over Soon", "requests": 1673, "impressions": 2417, "errors": 56, "impressionsPerRequest": 1.44, "impressionsPerRequestPct": 144.47, "errorRatePct": 3.35, "avgAdsPerPod": 1.45}, {"label": "Everyone Wanted to Be On This Ship", "video Title": "Everyone Wanted to Be On This Ship", "requests": 1759, "impressions": 2400, "errors": 56, "impressionsPerRequest": 1.36, "impressionsPerRequestPct": 136.44, "errorRatePct": 3.18, "avgAdsPerPod": 1.36}, {"label": "Hoping for Forever", "video Title": "Hoping for Forever", "requests": 1849, "impressions": 1744, "errors": 23, "impressionsPerRequest": 0.94, "impressionsPerRequestPct": 94.32, "errorRatePct": 1.24, "avgAdsPerPod": 0.94}, {"label": "Anomaly", "video Title": "Anomaly", "requests": 1009, "impressions": 1689, "errors": 78, "impressionsPerRequest": 1.67, "impressionsPerRequestPct": 167.39, "errorRatePct": 7.73, "avgAdsPerPod": 1.67}, {"label": "Fortunate", "video Title": "Fortunate", "requests": 1499, "impressions": 1498, "errors": 0, "impressionsPerRequest": 1.0, "impressionsPerRequestPct": 99.93, "errorRatePct": 0.0, "avgAdsPerPod": 1.0}, {"label": "The Weekend In Paris Job", "video Title": "The Weekend In Paris Job", "requests": 564, "impressions": 1487, "errors": 35, "impressionsPerRequest": 2.64, "impressionsPerRequestPct": 263.65, "errorRatePct": 6.21, "avgAdsPerPod": 2.64}, {"label": "We Weren't Supposed to Be Awake", "video Title": "We Weren't Supposed to Be Awake", "requests": 506, "impressions": 1422, "errors": 84, "impressionsPerRequest": 2.81, "impressionsPerRequestPct": 281.03, "errorRatePct": 16.6, "avgAdsPerPod": 2.81}, {"label": "Everybody Wins", "video Title": "Everybody Wins", "requests": 692, "impressions": 1419, "errors": 35, "impressionsPerRequest": 2.05, "impressionsPerRequestPct": 205.06, "errorRatePct": 5.06, "avgAdsPerPod": 2.05}, {"label": "The Last Thing You Ever Do", "video Title": "The Last Thing You Ever Do", "requests": 1198, "impressions": 1178, "errors": 12, "impressionsPerRequest": 0.98, "impressionsPerRequestPct": 98.33, "errorRatePct": 1.0, "avgAdsPerPod": 0.98}, {"label": "Every Single Person Matters", "video Title": "Every Single Person Matters", "requests": 1159, "impressions": 1088, "errors": 0, "impressionsPerRequest": 0.94, "impressionsPerRequestPct": 93.87, "errorRatePct": 0.0, "avgAdsPerPod": 0.94}, {"label": "Failed Experiment", "video Title": "Failed Experiment", "requests": 311, "impressions": 1086, "errors": 18, "impressionsPerRequest": 3.49, "impressionsPerRequestPct": 349.2, "errorRatePct": 5.79, "avgAdsPerPod": 3.49}, {"label": "The Side Job", "video Title": "The Side Job", "requests": 275, "impressions": 1047, "errors": 8, "impressionsPerRequest": 3.81, "impressionsPerRequestPct": 380.73, "errorRatePct": 2.91, "avgAdsPerPod": 3.81}, {"label": "One Step Forward, Two Steps Back", "video Title": "One Step Forward, Two Steps Back", "requests": 1000, "impressions": 994, "errors": 3, "impressionsPerRequest": 0.99, "impressionsPerRequestPct": 99.4, "errorRatePct": 0.3, "avgAdsPerPod": 0.99}], "caveats": ["This is DotStudios app ad-serving delivery data, not GA4 ads_* event data.", "These impressions are ElectricNOW in-app ad impressions, not Google/Meta paid-campaign impressions and not YouTube ad impressions.", "The export does not include ad revenue, so it should not be used as ROAS or yield reporting.", "Source fill-rate values can exceed 100% because multiple ads/ad-pod impressions can be served per request; the dashboard labels this as impressions per request.", "The export is manually supplied and must be refreshed weekly before the dashboard can treat this section as current."], "plainEnglish": "DotStudios app ad-serving data shows 52,316 in-app ad impressions from 37,918 ad requests for Jul 26–Aug 1, with 931 errors. This gives the team a real app monetization delivery signal that GA4 alone does not provide, but it still needs revenue/yield data before it can answer true monetization performance.", "weeklyReminderRecommendation": "Ask the user to upload the DotStudios title-view and app-ad exports each Monday morning before the dashboard refresh."}};
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
  const groups = (data.scorecardGroups?.length
    ? data.scorecardGroups
    : [{ title: 'Weekly scorecard', eyebrow: 'Overview', definition: '', cards: data.scorecards }])
    .filter((group) => String(group?.title || '').toLowerCase() !== 'web acquisition');
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
                <small>${card.asOfNote ? `Last complete: ${escapeHtml(card.range)}` : escapeHtml(card.range)}</small>
                <em class="delta ${deltaClass(card.deltaVsPreviousPct)}">${card.deltaVsPreviousPct === null || card.deltaVsPreviousPct === undefined ? escapeHtml(card.comparisonLabel || 'latest period') : `${deltaText({ deltaType: 'percent' }, card.deltaVsPreviousPct)} ${escapeHtml(card.comparisonLabel || '')}`}</em>
              </div>
              <p>${fmt.number(card.activeUsers)} active users · ${fmt.number(card.engagedSessions)} engaged sessions</p>
              ${card.asOfNote ? `<p class="stale-note">${escapeHtml(card.asOfNote)}</p>` : ''}
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
  const recentPaymentLine = (sales.monthToDate?.payments || sales.recentPayments || [])
    .slice(0, 4)
    .map((payment) => `${escapeHtml(payment.source || sourceLabel)} ${escapeHtml(payment.date)} ${fmt.currency(payment.amount)}`)
    .join(' · ');
  const usageWeekHistorical = sales.usageWeekHistorical;
  $('#sales-summary').innerHTML = `
    <div class="sales-callout">
      <span>${escapeHtml(sourceLabel)} this year</span>
      <strong>${fmt.number(yearToDate.purchases)} purchases / ${fmt.currency(yearToDate.purchaseRevenue)}</strong>
      <p>${yearToDate.range}. This is visible sales from connected/reporting sources plus any manual snapshots. Apple App Store is included from the current manual screenshot; Google Play is not included yet.</p>
      ${yearToDate.developerRevShare ? `<p class="sales-net">Estimated net after platform fees visible here: ${fmt.currency(yearToDate.developerRevShare)}</p>` : ''}
      ${sourceBreakout ? `<ul class="sales-source-list">${sourceBreakout}</ul>` : ''}
    </div>
    <div class="sales-stat-grid">
      <div class="sales-stat baseline-set">
        <span>Latest Stripe pull (rolling 7 days)</span>
        <strong>${fmt.currency(monthToDate.purchaseRevenue)}</strong>
        <em>${monthToDate.range} · ${fmt.number(monthToDate.purchases)} purchases</em>
        <em class="sales-stat-footnote">Rolling 7-day window ending on the latest sales-update date.</em>
      </div>
      <div class="sales-stat">
        <span>Apple latest snapshot</span>
        <strong>${fmt.currency(lastWeek.purchaseRevenue)}</strong>
        <em>${lastWeek.range} · ${lastWeek.purchases != null ? `${fmt.number(lastWeek.purchases)} purchases` : 'revenue-only, no transaction count'}</em>
        <em class="sales-stat-footnote">Aggregate gross screenshot; overlaps the current rolling window.</em>
      </div>
      <div class="sales-stat">
        <span>Visible YTD</span>
        <strong>${fmt.currency(thisWeek.purchaseRevenue)}</strong>
        <em>${thisWeek.range} · ${fmt.number(thisWeek.purchases)} purchases</em>
      </div>
    </div>
    ${usageWeekHistorical ? `<div class="sales-audit">
      <span>${escapeHtml(usageWeekHistorical.label)}</span>
      <strong>${fmt.currency(usageWeekHistorical.purchaseRevenue)} · ${fmt.number(usageWeekHistorical.purchases)} purchases · ${escapeHtml(usageWeekHistorical.range)}</strong>
      <p>${escapeHtml(usageWeekHistorical.note)}</p>
    </div>` : ''}
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

function engagementRateFrom(row) {
  const explicit = toFiniteNumber(row?.engagementRate);
  if (explicit !== null) return explicit;
  const engaged = toFiniteNumber(row?.engagedSessions);
  const sessions = toFiniteNumber(row?.sessions);
  if (engaged === null || sessions === null || sessions <= 0) return null;
  return (engaged / sessions) * 100;
}

function engagementHoursPerUser(row) {
  const hours = toFiniteNumber(row?.totalEngagementHours);
  const users = toFiniteNumber(row?.activeUsers);
  if (hours === null || users === null || users <= 0) return null;
  return hours / users;
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

function renderDotStudiosAppAds() {
  const section = $('#dotstudios-app-ads');
  const summary = data.dotStudiosAppAds;
  if (!section) return;
  if (!summary || typeof summary !== 'object') {
    section.hidden = true;
    return;
  }
  section.hidden = false;

  const totals = summary.totals || {};
  const period = summary.period || [summary.periodStart, summary.periodEnd].filter(Boolean).join(' to ') || 'Manual upload';
  const periodEl = $('#dotstudios-app-ads-period');
  if (periodEl) periodEl.textContent = period;

  const noteEl = $('#dotstudios-app-ads-note');
  if (noteEl) {
    noteEl.textContent =
      `${summary.source || 'DotStudios manual app ad-serving export'} · ${period}. ` +
      'This is app ad-serving delivery inside ElectricNOW. It is separate from GA4 ads_* events, Google/Meta paid-campaign impressions, and YouTube ads.';
  }

  const kpis = [
    usageStat('App ad impressions', fmt.number(totals.impressions), 'ElectricNOW in-app ad impressions delivered by DotStudios'),
    usageStat('Ad requests', fmt.number(totals.requests), 'App ad requests sent to the ad stack'),
    usageStat('Errors', fmt.number(totals.errors), `${fmt.percent(totals.errorRatePct)} of ad requests`),
    usageStat('Impressions / request', `${toFiniteNumber(totals.impressionsPerRequest) === null ? NOT_AVAILABLE : Number(totals.impressionsPerRequest).toFixed(2)}x`, 'Can exceed 1.0x when pods serve multiple ad impressions'),
  ];
  const kpiEl = $('#dotstudios-app-ads-kpis');
  if (kpiEl) kpiEl.innerHTML = kpis.join('');

  function rowLabel(row) {
    return escapeHtml(row.label || row.channel || row.device || row.videoTitle || row.date || 'Unknown');
  }

  function deliveryDetail(row) {
    const perRequest = toFiniteNumber(row.impressionsPerRequest);
    const perRequestLabel = perRequest === null ? NOT_AVAILABLE : `${perRequest.toFixed(2)}x impressions/request`;
    return `${fmt.number(row.requests)} requests · ${fmt.number(row.errors)} errors · ${perRequestLabel}`;
  }

  const devices = Array.isArray(summary.deviceSplit) ? summary.deviceSplit : [];
  const maxDeviceImpressions = Math.max(...devices.map((row) => toFiniteNumber(row.impressions) || 0), 1);
  const deviceEl = $('#dotstudios-app-ads-devices');
  if (deviceEl) {
    deviceEl.innerHTML = devices
      .map((row) => {
        const impressions = toFiniteNumber(row.impressions) || 0;
        const width = Math.max(3, (impressions / maxDeviceImpressions) * 100);
        return `
          <div class="google-ads-device-row">
            <header>
              <span>${rowLabel(row)}</span>
              <strong>${fmt.number(row.impressions)} imp</strong>
            </header>
            <div class="share-track" aria-hidden="true">
              <div class="share-fill" style="width:${width.toFixed(1)}%"></div>
            </div>
            <div class="google-ads-device-metrics">
              <em>${fmt.number(row.requests)} requests</em>
              <em>${fmt.number(row.errors)} errors</em>
              <em>${fmt.percent(row.errorRatePct)} error rate</em>
              <em>${toFiniteNumber(row.impressionsPerRequest) === null ? NOT_AVAILABLE : Number(row.impressionsPerRequest).toFixed(2) + 'x imp/request'}</em>
            </div>
          </div>
        `;
      })
      .join('');
  }

  const channels = Array.isArray(summary.topChannels) ? summary.topChannels : [];
  const channelEl = $('#dotstudios-app-ads-channels');
  if (channelEl) {
    channelEl.innerHTML = channels
      .slice(0, 8)
      .map((row) => `
        <div class="google-ads-action-row">
          <header>
            <span>${rowLabel(row)}</span>
            <strong>${fmt.number(row.impressions)} imp</strong>
          </header>
          <em>${escapeHtml(deliveryDetail(row))}</em>
        </div>
      `)
      .join('');
  }

  const videos = Array.isArray(summary.topVideos) ? summary.topVideos : [];
  const videosEl = $('#dotstudios-app-ads-videos');
  if (videosEl) {
    renderTable(
      '#dotstudios-app-ads-videos',
      ['Video title', 'Impressions', 'Requests', 'Errors', 'Imp/request', 'Error rate'],
      videos.slice(0, 12),
      (row) => [
        escapeHtml(row.label || row.videoTitle || 'Unknown'),
        fmt.number(row.impressions),
        fmt.number(row.requests),
        fmt.number(row.errors),
        toFiniteNumber(row.impressionsPerRequest) === null ? NOT_AVAILABLE : `${Number(row.impressionsPerRequest).toFixed(2)}x`,
        fmt.percent(row.errorRatePct),
      ]
    );
  }

  const daily = Array.isArray(summary.dailyTrend) ? summary.dailyTrend : [];
  const dailyEl = $('#dotstudios-app-ads-daily');
  if (dailyEl) {
    renderTable(
      '#dotstudios-app-ads-daily',
      ['Date', 'Impressions', 'Requests', 'Errors', 'Imp/request', 'Error rate'],
      daily,
      (row) => [
        escapeHtml(row.label || row.date || ''),
        fmt.number(row.impressions),
        fmt.number(row.requests),
        fmt.number(row.errors),
        toFiniteNumber(row.impressionsPerRequest) === null ? NOT_AVAILABLE : `${Number(row.impressionsPerRequest).toFixed(2)}x`,
        fmt.percent(row.errorRatePct),
      ]
    );
  }

  const plainEl = $('#dotstudios-app-ads-plain');
  if (plainEl) plainEl.textContent = summary.plainEnglish || '';

  const caveatEl = $('#dotstudios-app-ads-caveats');
  const caveats = Array.isArray(summary.caveats) ? summary.caveats : [];
  if (caveatEl) {
    caveatEl.innerHTML = caveats.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  }
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
  const totalEngagementHours = toFiniteNumber(t.totalEngagementHours);
  const activeUsers = toFiniteNumber(t.activeUsers);
  const avgHoursPerUser = totalEngagementHours !== null && activeUsers !== null && activeUsers > 0 ? totalEngagementHours / activeUsers : null;
  const kpisEl = $('#us-geography-kpis');
  if (kpisEl) {
    kpisEl.innerHTML = [
      usageStat('U.S. active users', t.activeUsers, 'Deduplicated country-level GA4 count'),
      usageStat('Sessions', t.sessions, 'U.S. sessions this week'),
      usageStat('Engagement rate', fmt.percent(engagementRateFrom(t)), 'U.S. engaged sessions / sessions'),
      usageStat('Engagement hours', totalEngagementHours === null ? NOT_AVAILABLE : fmt.number(totalEngagementHours), 'U.S. GA4 engagement time'),
      usageStat('Avg hours / user', avgHoursPerUser === null ? NOT_AVAILABLE : avgHoursPerUser.toFixed(1), 'Engagement hours divided by active users'),
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
        const title = `${s.state}: ${fmt.number(s.activeUsers)} active users · ${fmt.number(s.sessions)} sessions · ${fmt.percent(engagementRateFrom(s))} ER`;
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
        <thead><tr><th>State</th><th>Active users</th><th>Sessions</th><th>Eng. rate</th><th>Eng. hours</th><th>Hours / user</th></tr></thead>
        <tbody>
          ${rows.map((s) => `
            <tr>
              <td>${escapeHtml(s.state)}</td>
              <td>${fmt.number(s.activeUsers)}</td>
              <td>${fmt.number(s.sessions)}</td>
              <td>${fmt.percent(engagementRateFrom(s))}</td>
              <td>${fmt.number(s.totalEngagementHours)}</td>
              <td>${engagementHoursPerUser(s) === null ? NOT_AVAILABLE : engagementHoursPerUser(s).toFixed(1)}</td>
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
  const tvodNetRevenue =
    net.netIncludingRefunds ??
    net.tvodSalesExportPaidNet ??
    net.tvodSalesEmailTotalNet ??
    net.csvPaidNetTotal;
  const cards = [
    ['Registered users', fmt.number(ru.total), 'Total registered ElectricNOW accounts'],
    ['Active registered users', fmt.number(ru.active), 'Registered users considered active'],
    ['Paid TVOD transactions', fmt.number(txn.paidTransactions), `${fmt.number(txn.totalRows)} total rows in the report`],
    ['Net TVOD revenue', fmt.currency(tvodNetRevenue), 'Cumulative net revenue from title-level transactions'],
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
  renderDotStudiosAppAds();
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