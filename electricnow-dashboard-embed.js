(() => {
  // Inject Google Fonts.
  const fontPreconnect1 = document.createElement('link');
  fontPreconnect1.rel = 'preconnect';
  fontPreconnect1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(fontPreconnect1);
  const fontPreconnect2 = document.createElement('link');
  fontPreconnect2.rel = 'preconnect';
  fontPreconnect2.href = 'https://fonts.gstatic.com';
  fontPreconnect2.crossOrigin = '';
  document.head.appendChild(fontPreconnect2);
  const fontStylesheet = document.createElement('link');
  fontStylesheet.rel = 'stylesheet';
  fontStylesheet.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap';
  document.head.appendChild(fontStylesheet);

  // Inject dashboard styles.
  const style = document.createElement('style');
  style.textContent = "#electricnow-dashboard-embed {\n  --bg: #050a12;\n  --surface: #0a1524;\n  --surface-2: #0f2138;\n  --surface-3: #132b48;\n  --border: rgba(255, 255, 255, 0.11);\n  --border-strong: rgba(255, 255, 255, 0.18);\n  --text: #f6f9ff;\n  --muted: #9fb3ca;\n  --faint: #667f9d;\n  --primary: #2f81d7;\n  --primary-2: #68b7ff;\n  --good: #69d895;\n  --bad: #ff6f85;\n  --warn: #ffc857;\n  --shadow: 0 22px 70px rgba(0, 0, 0, 0.42);\n  --radius: 14px;\n  --radius-sm: 10px;\n  --font-ui: 'Inter', system-ui, sans-serif;\n  --font-display: 'Barlow Condensed', 'Arial Narrow', sans-serif;\n  --embed-top-buffer: 32px;\n}\n#electricnow-dashboard-embed *,\n#electricnow-dashboard-embed *::before,\n#electricnow-dashboard-embed *::after {\n  box-sizing: border-box;\n}\n#electricnow-dashboard-embed,\n#electricnow-dashboard-embed {\n  min-height: 100%;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n#electricnow-dashboard-embed {\n  margin: 0;\n  background:\n    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),\n    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),\n    var(--bg);\n  color: var(--text);\n  font-family: var(--font-ui);\n  font-size: 15px;\n  line-height: 1.45;\n  overflow-x: hidden;\n}\n#electricnow-dashboard-embed,\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n  background:\n    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),\n    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),\n    var(--bg) !important;\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed a {\n  color: inherit !important;\n}\n#electricnow-dashboard-embed button,\n#electricnow-dashboard-embed select {\n  font: inherit;\n}\n#electricnow-dashboard-embed .skip-link {\n  position: fixed;\n  left: 16px;\n  top: 16px;\n  z-index: 1000;\n  transform: translateY(-160%);\n  background: var(--primary);\n  color: #fff;\n  padding: 10px 14px;\n  border-radius: 999px;\n}\n#electricnow-dashboard-embed .skip-link:focus {\n  transform: translateY(0);\n}\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n  max-width: 100vw;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-columns: 280px minmax(0, 1fr);\n  grid-template-rows: minmax(104px, auto) minmax(0, 1fr);\n  min-height: 100vh;\n  padding-top: var(--embed-top-buffer);\n}\n#electricnow-dashboard-embed .sidebar {\n  grid-row: 1 / -1;\n  position: sticky;\n  top: var(--embed-top-buffer);\n  height: calc(100vh - var(--embed-top-buffer));\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  border-right: 1px solid var(--border);\n  background: #050a12 !important;\n  padding: 24px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\n#electricnow-dashboard-embed .brand {\n  display: grid;\n  grid-template-columns: 48px 1fr;\n  gap: 12px;\n  align-items: center;\n  text-decoration: none;\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .brand-mark {\n  width: 48px;\n  border-radius: 4px;\n  background: linear-gradient(135deg, #2367b2, #d9ebff);\n  color: #fff;\n  padding: 7px;\n}\n#electricnow-dashboard-embed .brand span {\n  display: grid;\n  gap: 0;\n}\n#electricnow-dashboard-embed .brand strong {\n  font-family: var(--font-display);\n  font-size: 25px;\n  line-height: 0.82;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .brand small,\n#electricnow-dashboard-embed .source-card span,\n#electricnow-dashboard-embed .eyebrow,\n#electricnow-dashboard-embed .select-label {\n  color: var(--primary-2) !important;\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .side-nav {\n  display: grid;\n  gap: 6px;\n}\n#electricnow-dashboard-embed .side-nav a {\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  border-radius: var(--radius-sm);\n  color: var(--muted) !important;\n  padding: 0 12px;\n  text-decoration: none;\n}\n#electricnow-dashboard-embed .side-nav a:hover,\n#electricnow-dashboard-embed .side-nav a:focus-visible {\n  background: var(--surface-2);\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .source-card {\n  margin-top: auto;\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  background: #0f2138 !important;\n  padding: 16px;\n}\n#electricnow-dashboard-embed .source-card strong {\n  display: block;\n  margin-top: 6px;\n}\n#electricnow-dashboard-embed .source-card p {\n  margin: 8px 0 0;\n  color: var(--muted);\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n#electricnow-dashboard-embed .topbar {\n  position: sticky;\n  top: var(--embed-top-buffer);\n  z-index: 20;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  border-bottom: 1px solid var(--border);\n  background: #070d17 !important;\n  backdrop-filter: blur(14px);\n  padding: 18px 28px;\n}\n#electricnow-dashboard-embed .topbar > div:first-child {\n  min-width: 0;\n  flex: 1 1 360px;\n}\n#electricnow-dashboard-embed .topbar h1 {\n  color: var(--text) !important;\n  margin: 2px 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(26px, 2.35vw, 34px);\n  line-height: 0.98;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .topbar-actions {\n  flex: 0 1 520px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n}\n#electricnow-dashboard-embed select,\n#electricnow-dashboard-embed .ghost-button {\n  min-height: 42px;\n  border: 1px solid var(--border-strong);\n  border-radius: 999px;\n  background: #0f2138 !important;\n  color: var(--text) !important;\n  padding: 0 14px;\n}\n#electricnow-dashboard-embed .ghost-button {\n  cursor: pointer;\n}\n#electricnow-dashboard-embed .ghost-button:disabled {\n  cursor: wait;\n  opacity: 0.55;\n}\n#electricnow-dashboard-embed .refresh-button {\n  border-color: rgba(104, 183, 255, 0.42);\n}\n#electricnow-dashboard-embed .refresh-status {\n  min-width: 130px;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .ghost-button.is-active,\n#electricnow-dashboard-embed .ghost-button:hover {\n  background: var(--primary);\n  border-color: var(--primary);\n}\n#electricnow-dashboard-embed .main {\n  padding: 28px;\n  min-width: 0;\n  background: #050a12 !important;\n}\n#electricnow-dashboard-embed .hero-panel,\n#electricnow-dashboard-embed .panel,\n#electricnow-dashboard-embed .plain-panel,\n#electricnow-dashboard-embed .kpi-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0)),\n    #0a1524 !important;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n#electricnow-dashboard-embed .hero-panel {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 260px;\n  align-items: end;\n  gap: 24px;\n  background:\n    linear-gradient(135deg, rgba(47, 129, 215, 0.28), rgba(10, 21, 36, 0.96) 55%),\n    #0a1524 !important;\n  padding: clamp(24px, 4vw, 42px);\n}\n#electricnow-dashboard-embed .hero-panel h2,\n#electricnow-dashboard-embed .plain-panel h2,\n#electricnow-dashboard-embed .panel h2 {\n  color: var(--text) !important;\n  margin: 4px 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(25px, 3vw, 34px);\n  line-height: 0.96;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .panel h3,\n#electricnow-dashboard-embed .subsection-header h3 {\n  color: var(--text) !important;\n  margin: 18px 0 10px;\n  font-family: var(--font-display);\n  font-size: 22px;\n  line-height: 0.95;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .subsection-header {\n  margin-top: 28px;\n  border-top: 1px solid var(--border);\n  padding-top: 20px;\n}\n#electricnow-dashboard-embed .panel-note {\n  margin: 0 0 16px;\n  color: var(--muted);\n  font-size: 13px;\n  max-width: 860px;\n}\n#electricnow-dashboard-embed .topbar h1,\n#electricnow-dashboard-embed .hero-panel h2,\n#electricnow-dashboard-embed .plain-panel h2,\n#electricnow-dashboard-embed .panel h2,\n#electricnow-dashboard-embed .panel h3,\n#electricnow-dashboard-embed .subsection-header h3 {\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .eyebrow,\n#electricnow-dashboard-embed .select-label,\n#electricnow-dashboard-embed .source-card span,\n#electricnow-dashboard-embed .brand small {\n  color: var(--primary-2) !important;\n}\n#electricnow-dashboard-embed .hero-panel p {\n  max-width: 72ch;\n  margin: 14px 0 0;\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .hero-meta {\n  display: grid;\n  gap: 4px;\n  justify-items: end;\n  color: var(--muted);\n  text-align: right;\n}\n#electricnow-dashboard-embed .hero-meta strong {\n  color: var(--text);\n}\n#electricnow-dashboard-embed .visit-strip {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\n  gap: 16px;\n  margin-top: 18px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--radius);\n  background:\n    linear-gradient(135deg, rgba(47, 129, 215, 0.20), rgba(10, 21, 36, 0.96)),\n    var(--surface);\n  box-shadow: var(--shadow);\n  padding: 20px;\n}\n#electricnow-dashboard-embed .visit-strip-header h2 {\n  margin: 2px 0 8px;\n  color: var(--text);\n  font-family: var(--font-display);\n  font-size: clamp(26px, 3vw, 38px);\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .visit-strip-header p:not(.eyebrow),\n#electricnow-dashboard-embed .visit-source,\n#electricnow-dashboard-embed .visit-card p {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .visit-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .visit-card {\n  display: grid;\n  gap: 10px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(5, 10, 18, 0.46);\n  padding: 16px;\n}\n#electricnow-dashboard-embed .visit-card span {\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .visit-card strong {\n  color: var(--text);\n  font-family: var(--font-display);\n  font-size: clamp(42px, 5vw, 64px);\n  line-height: 0.9;\n  letter-spacing: 0.02em;\n}\n#electricnow-dashboard-embed .visit-card-meta {\n  display: grid;\n  gap: 4px;\n}\n#electricnow-dashboard-embed .visit-card small {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .visit-card p,\n#electricnow-dashboard-embed .visit-source {\n  margin: 0;\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .visit-source {\n  grid-column: 1 / -1;\n}\n#electricnow-dashboard-embed .plain-panel {\n  display: none;\n  grid-template-columns: 240px 1fr;\n  gap: 24px;\n  margin-top: 18px;\n  padding: 20px;\n}\n#electricnow-dashboard-embed .plain-panel.is-visible {\n  display: grid;\n}\n#electricnow-dashboard-embed .plain-panel ul {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n#electricnow-dashboard-embed .plain-panel li,\n#electricnow-dashboard-embed .gap-list li {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .plain-panel li.insight-overview {\n  color: var(--text);\n  font-size: 1.03rem;\n  line-height: 1.55;\n}\n#electricnow-dashboard-embed .kpi-grid {\n  display: grid;\n  gap: 18px;\n  margin-top: 18px;\n}\n#electricnow-dashboard-embed .kpi-group {\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  background: #08111e !important;\n  padding: 16px;\n  box-shadow: var(--shadow);\n}\n#electricnow-dashboard-embed .kpi-group-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  margin-bottom: 12px;\n}\n#electricnow-dashboard-embed .kpi-group-header h3 {\n  margin: 0;\n  color: var(--text) !important;\n  font-family: var(--font-display);\n  font-size: 23px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .kpi-group-header > p {\n  max-width: 620px;\n  margin: 0;\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .kpi-group-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .kpi-card {\n  min-height: 232px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 16px;\n}\n#electricnow-dashboard-embed .kpi-card span,\n#electricnow-dashboard-embed .metric-row span,\n#electricnow-dashboard-embed .table-wrap th {\n  color: var(--faint);\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .kpi-card span {\n  min-height: 32px;\n  display: block;\n}\n#electricnow-dashboard-embed .kpi-card strong {\n  display: block;\n  margin-top: 8px;\n  font-family: var(--font-display);\n  font-size: 34px;\n  line-height: 0.95;\n  letter-spacing: 0.03em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .kpi-card p {\n  margin: 12px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .kpi-compare-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 8px;\n  align-items: center;\n  margin-top: 14px;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n#electricnow-dashboard-embed .kpi-compare-grid small {\n  color: var(--faint);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .delta {\n  display: inline-flex;\n  align-self: flex-start;\n  margin-top: 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--muted);\n  padding: 4px 8px;\n  font-size: 12px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .delta.up {\n  color: var(--good);\n}\n#electricnow-dashboard-embed .delta.down {\n  color: var(--bad);\n}\n#electricnow-dashboard-embed .dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n  gap: 18px;\n  margin-top: 18px;\n}\n#electricnow-dashboard-embed .span-4 {\n  grid-column: span 4;\n}\n#electricnow-dashboard-embed .span-6 {\n  grid-column: span 6;\n}\n#electricnow-dashboard-embed .span-8 {\n  grid-column: span 8;\n}\n#electricnow-dashboard-embed .panel {\n  min-width: 0;\n  padding: 18px;\n}\n#electricnow-dashboard-embed .panel-header {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: start;\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .period-chip {\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--muted);\n  padding: 6px 10px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n#electricnow-dashboard-embed .chart-wrap,\n#electricnow-dashboard-embed .mini-chart-wrap {\n  width: 100%;\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .chart-wrap + h3 {\n  margin-top: 24px;\n}\n#electricnow-dashboard-embed .chart-legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px 18px;\n  margin-top: 12px;\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .chart-legend span {\n  display: inline-flex;\n  gap: 7px;\n  align-items: center;\n}\n#electricnow-dashboard-embed .legend-swatch {\n  width: 22px;\n  height: 4px;\n  border-radius: 999px;\n  display: inline-block;\n}\n#electricnow-dashboard-embed .legend-blue {\n  background: var(--primary-2);\n}\n#electricnow-dashboard-embed .legend-green {\n  background: var(--good);\n}\n#electricnow-dashboard-embed svg {\n  width: 100%;\n  height: auto;\n}\n#electricnow-dashboard-embed .axis {\n  stroke: rgba(255, 255, 255, 0.12);\n}\n#electricnow-dashboard-embed .chart-label {\n  fill: var(--muted);\n  font-size: 12px;\n  font-family: var(--font-ui);\n}\n#electricnow-dashboard-embed .chart-end-label {\n  font-family: var(--font-ui);\n  font-size: 12px;\n  font-weight: 800;\n  paint-order: stroke;\n  stroke: var(--surface);\n  stroke-width: 4px;\n}\n#electricnow-dashboard-embed .active-end {\n  fill: var(--primary-2);\n}\n#electricnow-dashboard-embed .engaged-end {\n  fill: var(--good);\n}\n#electricnow-dashboard-embed .line-active {\n  fill: none;\n  stroke: var(--primary-2);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .line-engaged {\n  fill: none;\n  stroke: var(--good);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .line-purchase {\n  fill: none;\n  stroke: var(--warn);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .area-fill {\n  fill: rgba(104, 183, 255, 0.12);\n}\n#electricnow-dashboard-embed .purchase-summary {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .sales-summary {\n  display: grid;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .sales-callout {\n  border: 1px solid rgba(255, 200, 87, 0.28);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(255, 200, 87, 0.15), rgba(47, 129, 215, 0.1));\n  padding: 14px;\n}\n#electricnow-dashboard-embed .sales-callout span,\n#electricnow-dashboard-embed .sales-stat span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-callout strong {\n  display: block;\n  margin-top: 5px;\n  font-family: var(--font-display);\n  font-size: 30px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-callout p,\n#electricnow-dashboard-embed .sales-note,\n#electricnow-dashboard-embed .sales-source,\n#electricnow-dashboard-embed .sales-stat em {\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .sales-callout p,\n#electricnow-dashboard-embed .sales-source,\n#electricnow-dashboard-embed .sales-note {\n  margin: 8px 0 0;\n}\n#electricnow-dashboard-embed .sales-source {\n  border-left: 2px solid rgba(104, 183, 255, 0.45);\n  padding-left: 10px;\n}\n#electricnow-dashboard-embed .sales-source-list {\n  display: grid;\n  gap: 6px;\n  margin: 14px 0 0;\n  padding: 0;\n  list-style: none;\n}\n#electricnow-dashboard-embed .sales-source-list li {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 8px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .sales-source-list li strong {\n  color: var(--text);\n  font-size: 12px;\n  text-align: right;\n}\n#electricnow-dashboard-embed .sales-stat-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n#electricnow-dashboard-embed .sales-stat {\n  min-width: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.58);\n  padding: 12px;\n}\n#electricnow-dashboard-embed .sales-stat strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 26px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-stat.baseline-set strong {\n  color: var(--good);\n  font-size: 24px;\n}\n#electricnow-dashboard-embed .sales-audit {\n  border: 1px solid rgba(104, 183, 255, 0.34);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.72);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .sales-audit span {\n  display: block;\n  color: var(--warn);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-audit strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 28px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-audit p,\n#electricnow-dashboard-embed .sales-audit small {\n  display: block;\n  margin: 8px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .purchase-row,\n#electricnow-dashboard-embed .metric-row {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 12px;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  padding-block: 10px;\n}\n#electricnow-dashboard-embed .purchase-row:last-child,\n#electricnow-dashboard-embed .metric-row:last-child {\n  border-bottom: 0;\n}\n#electricnow-dashboard-embed .purchase-row strong,\n#electricnow-dashboard-embed .metric-row strong {\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .not-tracked {\n  color: var(--warn);\n}\n#electricnow-dashboard-embed .purchase-point-label {\n  fill: var(--text);\n  font-size: 11px;\n  font-weight: 700;\n}\n#electricnow-dashboard-embed .metric-list {\n  display: grid;\n}\n#electricnow-dashboard-embed .usage-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 18px;\n}\n#electricnow-dashboard-embed .roku-engagement-grid {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin-bottom: 0;\n}\n#electricnow-dashboard-embed .roku-live-channel-grid {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  margin-bottom: 14px;\n}\n@media (max-width: 1180px) {\n#electricnow-dashboard-embed .roku-live-channel-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n#electricnow-dashboard-embed .roku-live-channel-grid {\n    grid-template-columns: 1fr;\n  }\n}\n#electricnow-dashboard-embed .roku-live-channel-split {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-top: 8px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .roku-live-channel-split {\n    grid-template-columns: 1fr;\n  }\n}\n#electricnow-dashboard-embed .usage-stat {\n  border: 1px solid rgba(104, 183, 255, 0.18);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.52);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .usage-stat span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .usage-stat strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 32px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .usage-stat em {\n  display: block;\n  margin-top: 5px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-mix {\n  display: grid;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n#electricnow-dashboard-embed .platform-total {\n  border: 1px solid rgba(104, 183, 255, 0.22);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));\n  padding: 14px;\n}\n#electricnow-dashboard-embed .platform-total span,\n#electricnow-dashboard-embed .coming-platforms span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .platform-total strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 36px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n}\n#electricnow-dashboard-embed .platform-total em,\n#electricnow-dashboard-embed .platform-share-card span,\n#electricnow-dashboard-embed .platform-share-card p,\n#electricnow-dashboard-embed .platform-note {\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-share-list {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .section-usage-list {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .section-usage-card {\n  min-width: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.62);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .section-usage-card header {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .section-usage-card span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .section-usage-card strong,\n#electricnow-dashboard-embed .section-usage-card b {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  line-height: 0.98;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .section-usage-card strong {\n  font-size: 28px;\n}\n#electricnow-dashboard-embed .section-usage-card b {\n  color: var(--good);\n  font-size: 18px;\n  text-align: left;\n  white-space: normal;\n}\n#electricnow-dashboard-embed .section-metrics {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px;\n  margin-top: 12px;\n}\n#electricnow-dashboard-embed .section-metrics em {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 999px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n  padding: 5px 8px;\n}\n#electricnow-dashboard-embed .section-usage-card p {\n  margin: 12px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .platform-share-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.52);\n  padding: 12px;\n}\n#electricnow-dashboard-embed .platform-share-card.is-untracked {\n  border-style: dashed;\n  background: rgba(255, 199, 95, 0.08);\n}\n#electricnow-dashboard-embed .platform-share-card header {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: start;\n}\n#electricnow-dashboard-embed .platform-share-card strong,\n#electricnow-dashboard-embed .platform-share-card b {\n  color: var(--text) !important;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .platform-share-card strong {\n  display: block;\n}\n#electricnow-dashboard-embed .platform-share-card b {\n  font-family: var(--font-display);\n  font-size: 24px;\n  line-height: 1;\n}\n#electricnow-dashboard-embed .platform-share-card.is-untracked b {\n  color: var(--warn) !important;\n}\n#electricnow-dashboard-embed .share-track {\n  height: 9px;\n  margin-top: 10px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .share-fill {\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--primary), var(--primary-2));\n}\n#electricnow-dashboard-embed .platform-share-card p {\n  margin: 8px 0 0;\n}\n#electricnow-dashboard-embed .compact-card {\n  padding: 10px;\n}\n#electricnow-dashboard-embed .compact-card header {\n  align-items: center;\n}\n#electricnow-dashboard-embed .compact-card b {\n  font-size: 20px;\n}\n#electricnow-dashboard-embed .coming-platforms {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n#electricnow-dashboard-embed .coming-platforms span {\n  margin-right: 4px;\n}\n#electricnow-dashboard-embed .coming-platforms em {\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--muted);\n  padding: 4px 9px;\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-note {\n  margin: 0 0 16px;\n}\n#electricnow-dashboard-embed .bar-list {\n  display: grid;\n  gap: 13px;\n}\n#electricnow-dashboard-embed .bar-row {\n  display: grid;\n  gap: 7px;\n}\n#electricnow-dashboard-embed .bar-row header {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n#electricnow-dashboard-embed .bar-row span {\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .bar-track {\n  height: 9px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .bar-fill {\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--primary), var(--primary-2));\n}\n#electricnow-dashboard-embed .table-wrap {\n  overflow-x: auto;\n  max-width: 100%;\n}\n#electricnow-dashboard-embed table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 520px;\n}\n#electricnow-dashboard-embed .title-table table {\n  min-width: 720px;\n}\n#electricnow-dashboard-embed th,\n#electricnow-dashboard-embed td {\n  border-bottom: 1px solid var(--border);\n  padding: 10px 8px;\n  text-align: left;\n  vertical-align: top;\n}\n#electricnow-dashboard-embed td {\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed td strong {\n  color: var(--text);\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .gap-list {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding-left: 18px;\n}\n#electricnow-dashboard-embed :focus-visible {\n  outline: 2px solid var(--primary-2);\n  outline-offset: 3px;\n}\n@media (max-width: 1180px) {\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto 1fr;\n  }\n#electricnow-dashboard-embed .sidebar {\n    position: static;\n    height: auto;\n    grid-row: auto;\n  }\n#electricnow-dashboard-embed .side-nav {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n#electricnow-dashboard-embed .source-card {\n    margin-top: 0;\n  }\n#electricnow-dashboard-embed .kpi-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n#electricnow-dashboard-embed .section-usage-list {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n\n}\n@media (max-width: 820px) {\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n    overflow-x: hidden;\n  }\n#electricnow-dashboard-embed .sidebar,\n#electricnow-dashboard-embed .topbar,\n#electricnow-dashboard-embed .main {\n    min-width: 0;\n    width: 100%;\n  }\n#electricnow-dashboard-embed .topbar,\n#electricnow-dashboard-embed .hero-panel,\n#electricnow-dashboard-embed .visit-strip,\n#electricnow-dashboard-embed .plain-panel {\n    grid-template-columns: 1fr;\n  }\n#electricnow-dashboard-embed .topbar {\n    align-items: stretch;\n  }\n#electricnow-dashboard-embed .topbar-actions {\n    justify-content: flex-start;\n  }\n#electricnow-dashboard-embed .kpi-group-header {\n    display: block;\n  }\n#electricnow-dashboard-embed .kpi-group-header > p {\n    margin-top: 8px;\n  }\n#electricnow-dashboard-embed .hero-meta {\n    justify-items: start;\n    text-align: left;\n  }\n#electricnow-dashboard-embed .main {\n    padding: 16px;\n  }\n#electricnow-dashboard-embed .kpi-grid,\n#electricnow-dashboard-embed .dashboard-grid,\n#electricnow-dashboard-embed .visit-card-grid,\n#electricnow-dashboard-embed .section-usage-list,\n#electricnow-dashboard-embed .side-nav {\n    grid-template-columns: 1fr;\n  }\n#electricnow-dashboard-embed .source-card {\n    max-width: 100%;\n  }\n#electricnow-dashboard-embed .span-4,\n#electricnow-dashboard-embed .span-6,\n#electricnow-dashboard-embed .span-8 {\n    grid-column: auto;\n  }\n\n\n}\n@media (max-width: 520px) {\n#electricnow-dashboard-embed .sidebar {\n    padding: 20px 16px;\n  }\n#electricnow-dashboard-embed .brand {\n    grid-template-columns: 48px minmax(0, 1fr);\n  }\n#electricnow-dashboard-embed .brand strong {\n    font-size: 23px;\n    letter-spacing: 0.18em;\n  }\n#electricnow-dashboard-embed .topbar-actions {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: stretch;\n  }\n#electricnow-dashboard-embed select,\n#electricnow-dashboard-embed .ghost-button {\n    width: 100%;\n    max-width: 100%;\n  }\n#electricnow-dashboard-embed .kpi-grid {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed /* ===== Google Ads section ===== */\n.google-ads-panel .panel-note {\n  margin-bottom: 14px;\n}\n#electricnow-dashboard-embed .google-ads-campaign {\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  justify-content: space-between;\n  align-items: flex-start;\n  border: 1px solid rgba(104, 183, 255, 0.22);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));\n  padding: 14px 16px;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card strong {\n  display: block;\n  margin-top: 4px;\n  font-family: var(--font-display);\n  font-size: 20px;\n  line-height: 1.1;\n  letter-spacing: 0.02em;\n  color: var(--text);\n}\n#electricnow-dashboard-embed .google-ads-campaign-card em {\n  display: block;\n  margin-top: 4px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .google-ads-campaign-meta {\n  text-align: right;\n  min-width: 160px;\n}\n#electricnow-dashboard-embed .google-ads-kpis {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin-bottom: 22px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .google-ads-kpis {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n\n}\n@media (max-width: 560px) {\n#electricnow-dashboard-embed .google-ads-kpis {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed .google-ads-split {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .google-ads-split {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed .google-ads-device-list,\n#electricnow-dashboard-embed .google-ads-action-list {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .google-ads-device-row,\n#electricnow-dashboard-embed .google-ads-action-row {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.62);\n  padding: 12px 14px;\n}\n#electricnow-dashboard-embed .google-ads-device-row header,\n#electricnow-dashboard-embed .google-ads-action-row header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .google-ads-device-row header span,\n#electricnow-dashboard-embed .google-ads-action-row header span {\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .google-ads-device-row header strong,\n#electricnow-dashboard-embed .google-ads-action-row header strong {\n  font-family: var(--font-display);\n  font-size: 18px;\n  letter-spacing: 0.02em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-device-row .share-track {\n  margin: 8px 0 8px;\n}\n#electricnow-dashboard-embed .google-ads-device-metrics {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 14px;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .google-ads-device-metrics em {\n  font-style: normal;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-action-row em {\n  display: block;\n  margin-top: 6px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-context {\n  margin-top: 6px;\n  padding: 12px 14px;\n  border-left: 3px solid var(--warn);\n  background: rgba(255, 200, 87, 0.06);\n  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;\n  color: var(--text);\n}\n\n";
  document.head.appendChild(style);

  // Replace the Squarespace mount with the dashboard markup.
  const mount = document.getElementById('electricnow-dashboard-hosted-mount');
  if (mount) {
    mount.outerHTML = "<div id=\"electricnow-dashboard-embed\" class=\"app-shell\">\n      <aside class=\"sidebar\" aria-label=\"Dashboard sections\">\n        <a class=\"brand\" href=\"#overview\" data-testid=\"link-overview\">\n          <svg class=\"brand-mark\" viewBox=\"0 0 48 48\" aria-hidden=\"true\">\n            <path d=\"M30 4 9 28h13l-4 16 22-26H27l3-14Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n            <path d=\"M27 12 15 26h11l-2 9 11-14H24l3-9Z\" fill=\"currentColor\" />\n          </svg>\n          <span><strong>Electric</strong><strong>NOW</strong><small>Growth dashboard</small></span>\n        </a>\n        <nav class=\"side-nav\">\n          <a href=\"#overview\" data-testid=\"nav-overview\">Overview</a>\n          <a href=\"#purchases\" data-testid=\"nav-purchases\">Purchases</a>\n          <a href=\"#live\" data-testid=\"nav-live\">Live TV</a>\n          <a href=\"#sections\" data-testid=\"nav-sections\">App sections</a>\n          <a href=\"#viewership\" data-testid=\"nav-viewership\">Viewership</a>\n          <a href=\"#titles\" data-testid=\"nav-titles\">Top titles</a>\n          <a href=\"#videos\" data-testid=\"nav-videos\">Top videos</a>\n          <a href=\"#platforms\" data-testid=\"nav-platforms\">Platforms</a>\n          <a href=\"#roku-app\" data-testid=\"nav-roku-app\">Roku app</a>\n          <a href=\"#roku-live-channel\" data-testid=\"nav-roku-live-channel\">Live Channel on Roku</a>\n          <a href=\"#funnel\" data-testid=\"nav-funnel\">App funnel</a>\n          <a href=\"#ads\" data-testid=\"nav-ads\">Ad signals</a>\n          <a href=\"#google-ads\" data-testid=\"nav-google-ads\">Google Ads</a>\n          <a href=\"#acquisition\" data-testid=\"nav-acquisition\">Acquisition</a>\n          <a href=\"#content\" data-testid=\"nav-content\">Content</a>\n        </nav>\n        <div class=\"source-card\">\n          <span>Source</span>\n          <strong>Internal GA4 pull</strong>\n          <p>Property 497892271. Reconcile with app-store, Amagi, ad-server, YouTube, and Meta reporting.</p>\n        </div>\n      </aside>\n\n      <header class=\"topbar\">\n        <div>\n          <p class=\"eyebrow\">Private snapshot</p>\n          <h1>ElectricNOW performance dashboard</h1>\n        </div>\n        <div class=\"topbar-actions\">\n          <label class=\"select-label\" for=\"period-select\">Period</label>\n          <select id=\"period-select\" data-testid=\"select-period\">\n            <option value=\"currentWeek\">Latest app usage</option>\n            <option value=\"weekToDate\">Apr 28-30 watch</option>\n          </select>\n          <button class=\"ghost-button refresh-button\" type=\"button\" id=\"refresh-data\" data-testid=\"button-refresh-data\">Update data</button>\n          <button class=\"ghost-button\" type=\"button\" id=\"plain-toggle\" data-testid=\"button-toggle-plain\">Plain English</button>\n          <span class=\"refresh-status\" id=\"refresh-status\" role=\"status\" aria-live=\"polite\"></span>\n        </div>\n      </header>\n\n      <main id=\"main\" class=\"main\" tabindex=\"-1\">\n        <section class=\"hero-panel\" id=\"overview\" aria-labelledby=\"overview-title\">\n          <div>\n            <p class=\"eyebrow\">Corrected metric framing</p>\n            <h2 id=\"overview-title\">Acquisition, app usage, viewing, and time are now separated.</h2>\n            <p>\n              The top scorecards now show which numbers are web acquisition, which are Apple/Android app-stream usage, which are actual viewing events, and which measure time spent across all GA4-tracked platforms.\n            </p>\n          </div>\n          <div class=\"hero-meta\">\n            <span id=\"generated-at\">Generated</span>\n            <strong id=\"source-label\">GA4 property 497892271</strong>\n          </div>\n        </section>\n\n        <section class=\"visit-strip\" id=\"visit-summary\" aria-label=\"Weekly and monthly visits\" data-testid=\"section-visit-summary\"></section>\n\n        <section class=\"plain-panel\" id=\"plain-panel\" aria-labelledby=\"plain-title\">\n          <div>\n            <p class=\"eyebrow\">Plain-English headlines</p>\n            <h2 id=\"plain-title\">What changed?</h2>\n          </div>\n          <ul id=\"insights-list\" role=\"list\" data-testid=\"list-insights\"></ul>\n        </section>\n\n        <section class=\"kpi-grid\" id=\"kpi-grid\" aria-label=\"Weekly scorecard\" data-testid=\"grid-kpis\"></section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-8\" aria-labelledby=\"traffic-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">App use and engagement</p>\n                <h2 id=\"traffic-title\">Daily app trend</h2>\n              </div>\n              <span class=\"period-chip\" id=\"trend-period\">Apr 14-30</span>\n            </div>\n            <div class=\"chart-legend\" aria-label=\"Daily trend legend\">\n              <span><i class=\"legend-swatch legend-blue\"></i>Blue line: app active users</span>\n              <span><i class=\"legend-swatch legend-green\"></i>Green line: engaged app sessions</span>\n            </div>\n            <h3>Past seven days</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Daily traffic and engagement trend\" data-testid=\"chart-traffic\"></svg>\n            </div>\n            <h3>Past month</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"monthly-traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Monthly app traffic and engagement trend\" data-testid=\"chart-monthly-traffic\"></svg>\n            </div>\n          </article>\n          <article class=\"panel span-4\" id=\"purchases\" aria-labelledby=\"purchase-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Sales baseline</p>\n                <h2 id=\"purchase-title\">In-app purchases and revenue</h2>\n              </div>\n            </div>\n            <div id=\"sales-summary\" class=\"sales-summary\" data-testid=\"section-sales-summary\"></div>\n            <div id=\"purchase-summary\" class=\"purchase-summary\" data-testid=\"section-purchases\"></div>\n            <div class=\"mini-chart-wrap\">\n              <svg id=\"purchase-chart\" viewBox=\"0 0 420 160\" role=\"img\" aria-label=\"Daily in-app purchase trend\"></svg>\n            </div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"sections\" aria-labelledby=\"sections-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">App navigation</p>\n              <h2 id=\"sections-title\">Traffic and time by app section</h2>\n            </div>\n            <span class=\"period-chip\" id=\"section-usage-period\">Latest</span>\n          </div>\n          <p id=\"section-usage-note\" class=\"panel-note\"></p>\n          <div id=\"section-usage-list\" class=\"section-usage-list\" data-testid=\"section-app-sections\"></div>\n        </section>\n\n        <section class=\"dashboard-grid three-col\" id=\"live\" aria-labelledby=\"live-title\">\n          <article class=\"panel span-4\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Live channels</p>\n                <h2 id=\"live-title\">Live TV performance</h2>\n              </div>\n            </div>\n            <div id=\"live-summary\" class=\"metric-list\" data-testid=\"section-live\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"funnel\" aria-labelledby=\"funnel-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">New app funnel</p>\n                <h2 id=\"funnel-title\">Installs to viewing</h2>\n              </div>\n            </div>\n            <div id=\"funnel-list\" class=\"bar-list\" data-testid=\"section-funnel\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"ads\" aria-labelledby=\"ads-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Monetization proxy</p>\n                <h2 id=\"ads-title\">Ad event signals</h2>\n              </div>\n            </div>\n            <div id=\"ad-list\" class=\"bar-list\" data-testid=\"section-ads\"></div>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\" id=\"viewership\" aria-labelledby=\"viewership-title\">\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2 id=\"viewership-title\">Live channel usage</h2>\n              </div>\n              <span class=\"period-chip\" id=\"content-usage-period\">Latest</span>\n            </div>\n            <div id=\"live-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-live-usage-cards\"></div>\n            <h3>Top 10 Live channels</h3>\n            <div id=\"live-channel-table\" class=\"table-wrap title-table\" data-testid=\"table-live-channels\"></div>\n            <h3>Live usage by platform</h3>\n            <div id=\"live-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-live-platforms\"></div>\n            <h3>Live playback signals</h3>\n            <div id=\"live-playback-list\" class=\"bar-list\" data-testid=\"section-live-playback\"></div>\n            <p id=\"live-usage-note\" class=\"platform-note\"></p>\n          </article>\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2>On Demand usage</h2>\n              </div>\n            </div>\n            <div id=\"ondemand-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-ondemand-usage-cards\"></div>\n            <h3>On Demand usage by platform</h3>\n            <div id=\"ondemand-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-ondemand-platforms\"></div>\n            <p id=\"ondemand-usage-note\" class=\"platform-note\"></p>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-6\" id=\"platforms\" aria-labelledby=\"platform-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Measured audience by surface</p>\n                <h2 id=\"platform-title\">Where users are coming from</h2>\n              </div>\n              <span class=\"period-chip\" id=\"platform-mix-period\">Latest</span>\n            </div>\n            <h3>Audience by GA4 stream</h3>\n            <p id=\"surface-note\" class=\"panel-note\"></p>\n            <div id=\"surface-table\" class=\"table-wrap\" data-testid=\"table-surface-breakout\"></div>\n            <h3>Audience by app, web, and connected TV platform</h3>\n            <div id=\"platform-mix\" class=\"platform-mix\" data-testid=\"section-platform-mix\"></div>\n            <p id=\"platform-note\" class=\"platform-note\"></p>\n            <h3>Average time by platform</h3>\n            <p id=\"platform-time-note\" class=\"panel-note\"></p>\n            <div id=\"platform-time-table\" class=\"table-wrap\" data-testid=\"table-platform-time\"></div>\n            <div id=\"platform-table\" class=\"table-wrap\" data-testid=\"table-platform\"></div>\n          </article>\n          <article class=\"panel span-6\" id=\"acquisition\" aria-labelledby=\"acquisition-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Audience sources</p>\n                <h2 id=\"acquisition-title\">Top acquisition</h2>\n              </div>\n            </div>\n            <div id=\"acquisition-table\" class=\"table-wrap\" data-testid=\"table-acquisition\"></div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"roku-app\" aria-labelledby=\"roku-app-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Roku app report</p>\n              <h2 id=\"roku-app-title\">Roku App Engagement</h2>\n            </div>\n            <span class=\"period-chip\" id=\"roku-app-period\">Latest</span>\n          </div>\n          <p id=\"roku-app-note\" class=\"panel-note\"></p>\n          <div id=\"roku-app-summary\" class=\"usage-card-grid roku-engagement-grid\" data-testid=\"section-roku-app-engagement\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"content\" aria-labelledby=\"content-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Content and screens</p>\n              <h2 id=\"content-title\">Top pages and app screens</h2>\n            </div>\n          </div>\n          <div id=\"content-table\" class=\"table-wrap\" data-testid=\"table-content\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"titles\" aria-labelledby=\"titles-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by program</p>\n              <h2 id=\"titles-title\">Top 50 watched shows and collections</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-title-period\">Latest</span>\n          </div>\n          <p id=\"top-title-note\" class=\"panel-note\"></p>\n          <div id=\"top-titles-table\" class=\"table-wrap title-table\" data-testid=\"table-top-titles\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"videos\" aria-labelledby=\"videos-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by individual video</p>\n              <h2 id=\"videos-title\">Top 50 individual videos played</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-video-period\">Latest</span>\n          </div>\n          <p id=\"top-video-note\" class=\"panel-note\"></p>\n          <div id=\"top-videos-table\" class=\"table-wrap title-table\" data-testid=\"table-top-videos\"></div>\n        </section>\n\n        <section class=\"panel google-ads-panel\" id=\"google-ads\" aria-labelledby=\"google-ads-title\" hidden>\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Paid acquisition efficiency</p>\n              <h2 id=\"google-ads-title\">Google Ads &mdash; Android App Campaign</h2>\n            </div>\n            <span class=\"period-chip\" id=\"google-ads-period\">Latest</span>\n          </div>\n          <p id=\"google-ads-note\" class=\"panel-note\"></p>\n          <div class=\"google-ads-campaign\" id=\"google-ads-campaign\" data-testid=\"google-ads-campaign\"></div>\n          <div class=\"usage-card-grid google-ads-kpis\" id=\"google-ads-kpis\" data-testid=\"google-ads-kpis\"></div>\n          <div class=\"google-ads-split\">\n            <div>\n              <h3>By device</h3>\n              <div id=\"google-ads-devices\" class=\"google-ads-device-list\" data-testid=\"google-ads-devices\"></div>\n            </div>\n            <div>\n              <h3>Conversion actions</h3>\n              <div id=\"google-ads-actions\" class=\"google-ads-action-list\" data-testid=\"google-ads-actions\"></div>\n            </div>\n          </div>\n          <p class=\"panel-note google-ads-context\" id=\"google-ads-plain\"></p>\n        </section>\n\n        <section class=\"panel gaps-panel\" aria-labelledby=\"gaps-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Developer follow-up</p>\n              <h2 id=\"gaps-title\">Measurement gaps to close</h2>\n            </div>\n          </div>\n          <ul id=\"gaps-list\" class=\"gap-list\" role=\"list\" data-testid=\"list-gaps\"></ul>\n        </section>\n\n        <section class=\"panel roku-live-channel-panel\" id=\"roku-live-channel\" aria-labelledby=\"roku-live-channel-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Roku live channel &mdash; outside the app</p>\n              <h2 id=\"roku-live-channel-title\">Live Channel on Roku</h2>\n            </div>\n            <span class=\"period-chip\" id=\"roku-live-channel-period\">Latest</span>\n          </div>\n          <p id=\"roku-live-channel-scope\" class=\"panel-note\"></p>\n          <p id=\"roku-live-channel-note\" class=\"panel-note\"></p>\n          <div id=\"roku-live-channel-summary\" class=\"usage-card-grid roku-live-channel-grid\" data-testid=\"section-roku-live-channel-summary\"></div>\n          <div id=\"roku-viewership-summary-block\" class=\"roku-viewership-summary\" data-testid=\"section-roku-viewership-summary\" hidden>\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Roku Viewership Summary &mdash; live channel only</p>\n                <h3 id=\"roku-viewership-summary-title\">Roku Viewership Summary</h3>\n              </div>\n              <span class=\"period-chip\" id=\"roku-viewership-summary-period\">Latest report</span>\n            </div>\n            <p id=\"roku-viewership-summary-scope\" class=\"panel-note\"></p>\n            <p id=\"roku-viewership-summary-note\" class=\"panel-note\"></p>\n            <div id=\"roku-viewership-summary-cards\" class=\"usage-card-grid roku-live-channel-grid\" data-testid=\"section-roku-viewership-summary-cards\"></div>\n            <h4>Top devices by streams</h4>\n            <div id=\"roku-viewership-summary-streams-table\" class=\"table-wrap title-table\" data-testid=\"table-roku-viewership-summary-streams\"></div>\n            <h4>Top devices by total hours streamed</h4>\n            <div id=\"roku-viewership-summary-hours-table\" class=\"table-wrap title-table\" data-testid=\"table-roku-viewership-summary-hours\"></div>\n            <p id=\"roku-viewership-summary-caveats\" class=\"panel-note\"></p>\n          </div>\n          <h3>Latest week &mdash; title share and session depth</h3>\n          <div id=\"roku-live-channel-week-table\" class=\"table-wrap title-table\" data-testid=\"table-roku-live-channel-week\"></div>\n          <div class=\"roku-live-channel-split\">\n            <div>\n              <h3 id=\"roku-live-channel-month-title\">Last complete month</h3>\n              <div id=\"roku-live-channel-month-table\" class=\"table-wrap title-table\" data-testid=\"table-roku-live-channel-month\"></div>\n            </div>\n            <div>\n              <h3 id=\"roku-live-channel-quarter-title\">Last complete quarter</h3>\n              <div id=\"roku-live-channel-quarter-table\" class=\"table-wrap title-table\" data-testid=\"table-roku-live-channel-quarter\"></div>\n            </div>\n          </div>\n          <p id=\"roku-live-channel-methodology\" class=\"panel-note\"></p>\n          <p id=\"roku-live-channel-freshness\" class=\"panel-note\"></p>\n        </section>\n      </main>\n    </div>";
  } else if (!document.getElementById('electricnow-dashboard-embed')) {
    const container = document.createElement('div');
    container.innerHTML = "<div id=\"electricnow-dashboard-embed\" class=\"app-shell\">\n      <aside class=\"sidebar\" aria-label=\"Dashboard sections\">\n        <a class=\"brand\" href=\"#overview\" data-testid=\"link-overview\">\n          <svg class=\"brand-mark\" viewBox=\"0 0 48 48\" aria-hidden=\"true\">\n            <path d=\"M30 4 9 28h13l-4 16 22-26H27l3-14Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n            <path d=\"M27 12 15 26h11l-2 9 11-14H24l3-9Z\" fill=\"currentColor\" />\n          </svg>\n          <span><strong>Electric</strong><strong>NOW</strong><small>Growth dashboard</small></span>\n        </a>\n        <nav class=\"side-nav\">\n          <a href=\"#overview\" data-testid=\"nav-overview\">Overview</a>\n          <a href=\"#purchases\" data-testid=\"nav-purchases\">Purchases</a>\n          <a href=\"#live\" data-testid=\"nav-live\">Live TV</a>\n          <a href=\"#sections\" data-testid=\"nav-sections\">App sections</a>\n          <a href=\"#viewership\" data-testid=\"nav-viewership\">Viewership</a>\n          <a href=\"#titles\" data-testid=\"nav-titles\">Top titles</a>\n          <a href=\"#videos\" data-testid=\"nav-videos\">Top videos</a>\n          <a href=\"#platforms\" data-testid=\"nav-platforms\">Platforms</a>\n          <a href=\"#roku-app\" data-testid=\"nav-roku-app\">Roku app</a>\n          <a href=\"#roku-live-channel\" data-testid=\"nav-roku-live-channel\">Live Channel on Roku</a>\n          <a href=\"#funnel\" data-testid=\"nav-funnel\">App funnel</a>\n          <a href=\"#ads\" data-testid=\"nav-ads\">Ad signals</a>\n          <a href=\"#google-ads\" data-testid=\"nav-google-ads\">Google Ads</a>\n          <a href=\"#acquisition\" data-testid=\"nav-acquisition\">Acquisition</a>\n          <a href=\"#content\" data-testid=\"nav-content\">Content</a>\n        </nav>\n        <div class=\"source-card\">\n          <span>Source</span>\n          <strong>Internal GA4 pull</strong>\n          <p>Property 497892271. Reconcile with app-store, Amagi, ad-server, YouTube, and Meta reporting.</p>\n        </div>\n      </aside>\n\n      <header class=\"topbar\">\n        <div>\n          <p class=\"eyebrow\">Private snapshot</p>\n          <h1>ElectricNOW performance dashboard</h1>\n        </div>\n        <div class=\"topbar-actions\">\n          <label class=\"select-label\" for=\"period-select\">Period</label>\n          <select id=\"period-select\" data-testid=\"select-period\">\n            <option value=\"currentWeek\">Latest app usage</option>\n            <option value=\"weekToDate\">Apr 28-30 watch</option>\n          </select>\n          <button class=\"ghost-button refresh-button\" type=\"button\" id=\"refresh-data\" data-testid=\"button-refresh-data\">Update data</button>\n          <button class=\"ghost-button\" type=\"button\" id=\"plain-toggle\" data-testid=\"button-toggle-plain\">Plain English</button>\n          <span class=\"refresh-status\" id=\"refresh-status\" role=\"status\" aria-live=\"polite\"></span>\n        </div>\n      </header>\n\n      <main id=\"main\" class=\"main\" tabindex=\"-1\">\n        <section class=\"hero-panel\" id=\"overview\" aria-labelledby=\"overview-title\">\n          <div>\n            <p class=\"eyebrow\">Corrected metric framing</p>\n            <h2 id=\"overview-title\">Acquisition, app usage, viewing, and time are now separated.</h2>\n            <p>\n              The top scorecards now show which numbers are web acquisition, which are Apple/Android app-stream usage, which are actual viewing events, and which measure time spent across all GA4-tracked platforms.\n            </p>\n          </div>\n          <div class=\"hero-meta\">\n            <span id=\"generated-at\">Generated</span>\n            <strong id=\"source-label\">GA4 property 497892271</strong>\n          </div>\n        </section>\n\n        <section class=\"visit-strip\" id=\"visit-summary\" aria-label=\"Weekly and monthly visits\" data-testid=\"section-visit-summary\"></section>\n\n        <section class=\"plain-panel\" id=\"plain-panel\" aria-labelledby=\"plain-title\">\n          <div>\n            <p class=\"eyebrow\">Plain-English headlines</p>\n            <h2 id=\"plain-title\">What changed?</h2>\n          </div>\n          <ul id=\"insights-list\" role=\"list\" data-testid=\"list-insights\"></ul>\n        </section>\n\n        <section class=\"kpi-grid\" id=\"kpi-grid\" aria-label=\"Weekly scorecard\" data-testid=\"grid-kpis\"></section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-8\" aria-labelledby=\"traffic-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">App use and engagement</p>\n                <h2 id=\"traffic-title\">Daily app trend</h2>\n              </div>\n              <span class=\"period-chip\" id=\"trend-period\">Apr 14-30</span>\n            </div>\n            <div class=\"chart-legend\" aria-label=\"Daily trend legend\">\n              <span><i class=\"legend-swatch legend-blue\"></i>Blue line: app active users</span>\n              <span><i class=\"legend-swatch legend-green\"></i>Green line: engaged app sessions</span>\n            </div>\n            <h3>Past seven days</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Daily traffic and engagement trend\" data-testid=\"chart-traffic\"></svg>\n            </div>\n            <h3>Past month</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"monthly-traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Monthly app traffic and engagement trend\" data-testid=\"chart-monthly-traffic\"></svg>\n            </div>\n          </article>\n          <article class=\"panel span-4\" id=\"purchases\" aria-labelledby=\"purchase-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Sales baseline</p>\n                <h2 id=\"purchase-title\">In-app purchases and revenue</h2>\n              </div>\n            </div>\n            <div id=\"sales-summary\" class=\"sales-summary\" data-testid=\"section-sales-summary\"></div>\n            <div id=\"purchase-summary\" class=\"purchase-summary\" data-testid=\"section-purchases\"></div>\n            <div class=\"mini-chart-wrap\">\n              <svg id=\"purchase-chart\" viewBox=\"0 0 420 160\" role=\"img\" aria-label=\"Daily in-app purchase trend\"></svg>\n            </div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"sections\" aria-labelledby=\"sections-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">App navigation</p>\n              <h2 id=\"sections-title\">Traffic and time by app section</h2>\n            </div>\n            <span class=\"period-chip\" id=\"section-usage-period\">Latest</span>\n          </div>\n          <p id=\"section-usage-note\" class=\"panel-note\"></p>\n          <div id=\"section-usage-list\" class=\"section-usage-list\" data-testid=\"section-app-sections\"></div>\n        </section>\n\n        <section class=\"dashboard-grid three-col\" id=\"live\" aria-labelledby=\"live-title\">\n          <article class=\"panel span-4\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Live channels</p>\n                <h2 id=\"live-title\">Live TV performance</h2>\n              </div>\n            </div>\n            <div id=\"live-summary\" class=\"metric-list\" data-testid=\"section-live\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"funnel\" aria-labelledby=\"funnel-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">New app funnel</p>\n                <h2 id=\"funnel-title\">Installs to viewing</h2>\n              </div>\n            </div>\n            <div id=\"funnel-list\" class=\"bar-list\" data-testid=\"section-funnel\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"ads\" aria-labelledby=\"ads-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Monetization proxy</p>\n                <h2 id=\"ads-title\">Ad event signals</h2>\n              </div>\n            </div>\n            <div id=\"ad-list\" class=\"bar-list\" data-testid=\"section-ads\"></div>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\" id=\"viewership\" aria-labelledby=\"viewership-title\">\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2 id=\"viewership-title\">Live channel usage</h2>\n              </div>\n              <span class=\"period-chip\" id=\"content-usage-period\">Latest</span>\n            </div>\n            <div id=\"live-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-live-usage-cards\"></div>\n            <h3>Top 10 Live channels</h3>\n            <div id=\"live-channel-table\" class=\"table-wrap title-table\" data-testid=\"table-live-channels\"></div>\n            <h3>Live usage by platform</h3>\n            <div id=\"live-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-live-platforms\"></div>\n            <h3>Live playback signals</h3>\n            <div id=\"live-playback-list\" class=\"bar-list\" data-testid=\"section-live-playback\"></div>\n            <p id=\"live-usage-note\" class=\"platform-note\"></p>\n          </article>\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2>On Demand usage</h2>\n              </div>\n            </div>\n            <div id=\"ondemand-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-ondemand-usage-cards\"></div>\n            <h3>On Demand usage by platform</h3>\n            <div id=\"ondemand-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-ondemand-platforms\"></div>\n            <p id=\"ondemand-usage-note\" class=\"platform-note\"></p>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-6\" id=\"platforms\" aria-labelledby=\"platform-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Measured audience by surface</p>\n                <h2 id=\"platform-title\">Where users are coming from</h2>\n              </div>\n              <span class=\"period-chip\" id=\"platform-mix-period\">Latest</span>\n            </div>\n            <h3>Audience by GA4 stream</h3>\n            <p id=\"surface-note\" class=\"panel-note\"></p>\n            <div id=\"surface-table\" class=\"table-wrap\" data-testid=\"table-surface-breakout\"></div>\n            <h3>Audience by app, web, and connected TV platform</h3>\n            <div id=\"platform-mix\" class=\"platform-mix\" data-testid=\"section-platform-mix\"></div>\n            <p id=\"platform-note\" class=\"platform-note\"></p>\n            <h3>Average time by platform</h3>\n            <p id=\"platform-time-note\" class=\"panel-note\"></p>\n            <div id=\"platform-time-table\" class=\"table-wrap\" data-testid=\"table-platform-time\"></div>\n            <div id=\"platform-table\" class=\"table-wrap\" data-testid=\"table-platform\"></div>\n          </article>\n          <article class=\"panel span-6\" id=\"acquisition\" aria-labelledby=\"acquisition-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Audience sources</p>\n                <h2 id=\"acquisition-title\">Top acquisition</h2>\n              </div>\n            </div>\n            <div id=\"acquisition-table\" class=\"table-wrap\" data-testid=\"table-acquisition\"></div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"roku-app\" aria-labelledby=\"roku-app-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Roku app report</p>\n              <h2 id=\"roku-app-title\">Roku App Engagement</h2>\n            </div>\n            <span class=\"period-chip\" id=\"roku-app-period\">Latest</span>\n          </div>\n          <p id=\"roku-app-note\" class=\"panel-note\"></p>\n          <div id=\"roku-app-summary\" class=\"usage-card-grid roku-engagement-grid\" data-testid=\"section-roku-app-engagement\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"content\" aria-labelledby=\"content-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Content and screens</p>\n              <h2 id=\"content-title\">Top pages and app screens</h2>\n            </div>\n          </div>\n          <div id=\"content-table\" class=\"table-wrap\" data-testid=\"table-content\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"titles\" aria-labelledby=\"titles-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by program</p>\n              <h2 id=\"titles-title\">Top 50 watched shows and collections</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-title-period\">Latest</span>\n          </div>\n          <p id=\"top-title-note\" class=\"panel-note\"></p>\n          <div id=\"top-titles-table\" class=\"table-wrap title-table\" data-testid=\"table-top-titles\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"videos\" aria-labelledby=\"videos-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by individual video</p>\n              <h2 id=\"videos-title\">Top 50 individual videos played</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-video-period\">Latest</span>\n          </div>\n          <p id=\"top-video-note\" class=\"panel-note\"></p>\n          <div id=\"top-videos-table\" class=\"table-wrap title-table\" data-testid=\"table-top-videos\"></div>\n        </section>\n\n        <section class=\"panel google-ads-panel\" id=\"google-ads\" aria-labelledby=\"google-ads-title\" hidden>\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Paid acquisition efficiency</p>\n              <h2 id=\"google-ads-title\">Google Ads &mdash; Android App Campaign</h2>\n            </div>\n            <span class=\"period-chip\" id=\"google-ads-period\">Latest</span>\n          </div>\n          <p id=\"google-ads-note\" class=\"panel-note\"></p>\n          <div class=\"google-ads-campaign\" id=\"google-ads-campaign\" data-testid=\"google-ads-campaign\"></div>\n          <div class=\"usage-card-grid google-ads-kpis\" id=\"google-ads-kpis\" data-testid=\"google-ads-kpis\"></div>\n          <div class=\"google-ads-split\">\n            <div>\n              <h3>By device</h3>\n              <div id=\"google-ads-devices\" class=\"google-ads-device-list\" data-testid=\"google-ads-devices\"></div>\n            </div>\n            <div>\n              <h3>Conversion actions</h3>\n              <div id=\"google-ads-actions\" class=\"google-ads-action-list\" data-testid=\"google-ads-actions\"></div>\n            </div>\n          </div>\n          <p class=\"panel-note google-ads-context\" id=\"google-ads-plain\"></p>\n        </section>\n\n        <section class=\"panel gaps-panel\" aria-labelledby=\"gaps-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Developer follow-up</p>\n              <h2 id=\"gaps-title\">Measurement gaps to close</h2>\n            </div>\n          </div>\n          <ul id=\"gaps-list\" class=\"gap-list\" role=\"list\" data-testid=\"list-gaps\"></ul>\n        </section>\n\n        <section class=\"panel roku-live-channel-panel\" id=\"roku-live-channel\" aria-labelledby=\"roku-live-channel-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Roku live channel &mdash; outside the app</p>\n              <h2 id=\"roku-live-channel-title\">Live Channel on Roku</h2>\n            </div>\n            <span class=\"period-chip\" id=\"roku-live-channel-period\">Latest</span>\n          </div>\n          <p id=\"roku-live-channel-scope\" class=\"panel-note\"></p>\n          <p id=\"roku-live-channel-note\" class=\"panel-note\"></p>\n          <div id=\"roku-live-channel-summary\" class=\"usage-card-grid roku-live-channel-grid\" data-testid=\"section-roku-live-channel-summary\"></div>\n          <div id=\"roku-viewership-summary-block\" class=\"roku-viewership-summary\" data-testid=\"section-roku-viewership-summary\" hidden>\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Roku Viewership Summary &mdash; live channel only</p>\n                <h3 id=\"roku-viewership-summary-title\">Roku Viewership Summary</h3>\n              </div>\n              <span class=\"period-chip\" id=\"roku-viewership-summary-period\">Latest report</span>\n            </div>\n            <p id=\"roku-viewership-summary-scope\" class=\"panel-note\"></p>\n            <p id=\"roku-viewership-summary-note\" class=\"panel-note\"></p>\n            <div id=\"roku-viewership-summary-cards\" class=\"usage-card-grid roku-live-channel-grid\" data-testid=\"section-roku-viewership-summary-cards\"></div>\n            <h4>Top devices by streams</h4>\n            <div id=\"roku-viewership-summary-streams-table\" class=\"table-wrap title-table\" data-testid=\"table-roku-viewership-summary-streams\"></div>\n            <h4>Top devices by total hours streamed</h4>\n            <div id=\"roku-viewership-summary-hours-table\" class=\"table-wrap title-table\" data-testid=\"table-roku-viewership-summary-hours\"></div>\n            <p id=\"roku-viewership-summary-caveats\" class=\"panel-note\"></p>\n          </div>\n          <h3>Latest week &mdash; title share and session depth</h3>\n          <div id=\"roku-live-channel-week-table\" class=\"table-wrap title-table\" data-testid=\"table-roku-live-channel-week\"></div>\n          <div class=\"roku-live-channel-split\">\n            <div>\n              <h3 id=\"roku-live-channel-month-title\">Last complete month</h3>\n              <div id=\"roku-live-channel-month-table\" class=\"table-wrap title-table\" data-testid=\"table-roku-live-channel-month\"></div>\n            </div>\n            <div>\n              <h3 id=\"roku-live-channel-quarter-title\">Last complete quarter</h3>\n              <div id=\"roku-live-channel-quarter-table\" class=\"table-wrap title-table\" data-testid=\"table-roku-live-channel-quarter\"></div>\n            </div>\n          </div>\n          <p id=\"roku-live-channel-methodology\" class=\"panel-note\"></p>\n          <p id=\"roku-live-channel-freshness\" class=\"panel-note\"></p>\n        </section>\n      </main>\n    </div>";
    document.body.appendChild(container.firstElementChild);
  }

  // Embedded data snapshot (overridden at runtime by hosted JSON fetch when available).
  window.ELECTRICNOW_DASHBOARD_DATA = {
    "generatedAt": "2026-05-28 08:38 PDT",
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
        "range": "May 14-May 20, 2026",
        "start": "2026-05-14",
        "end": "2026-05-20"
      },
      "baseline": {
        "label": "Previous 7 complete days",
        "range": "May 14-May 20, 2026",
        "start": "2026-05-14",
        "end": "2026-05-20"
      },
      "currentWeek": {
        "label": "Latest 7 complete days",
        "range": "May 21-May 27, 2026",
        "start": "2026-05-21",
        "end": "2026-05-27"
      },
      "weekToDate": {
        "label": "Latest 7 complete days",
        "range": "May 21-May 27, 2026",
        "start": "2026-05-21",
        "end": "2026-05-27"
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
        "activeUsers": 8249.0,
        "newUsers": 6416.0,
        "sessions": 14860.0,
        "engagedSessions": 12088.0,
        "engagementRate": 81.34589502018844,
        "screenPageViews": 32407.0,
        "eventCount": 1007239.0,
        "purchaseRevenue": 29.99
      },
      "baseline": {
        "activeUsers": 8249.0,
        "newUsers": 6416.0,
        "sessions": 14860.0,
        "engagedSessions": 12088.0,
        "engagementRate": 81.34589502018844,
        "screenPageViews": 32407.0,
        "eventCount": 1007239.0,
        "purchaseRevenue": 29.99
      },
      "currentWeek": {
        "activeUsers": 7944.0,
        "newUsers": 5399.0,
        "sessions": 14804.0,
        "engagedSessions": 10528.0,
        "engagementRate": 71.1159146176709,
        "screenPageViews": 28343.0,
        "eventCount": 1009067.0,
        "purchaseRevenue": 39.97
      },
      "weekToDate": {
        "activeUsers": 7944.0,
        "newUsers": 5399.0,
        "sessions": 14804.0,
        "engagedSessions": 10528.0,
        "engagementRate": 71.1159146176709,
        "screenPageViews": 28343.0,
        "eventCount": 1009067.0,
        "purchaseRevenue": 39.97
      }
    },
    "scorecards": [
      {
        "key": "platformActiveUsers",
        "label": "Platform active users",
        "baseline": 8709,
        "launchBaseline": 8709,
        "previousWeek": 8128,
        "current": 7865,
        "deltaPct": -3.2357283464566926,
        "deltaVsLaunchPct": -9.69112412446894,
        "deltaVsPreviousPct": -3.2357283464566926,
        "deltaType": "percent",
        "format": "number",
        "context": "GA4 active users excluding landing-page acquisition paths."
      },
      {
        "key": "platformSessions",
        "label": "Platform sessions",
        "baseline": 13316,
        "launchBaseline": 13316,
        "previousWeek": 14651,
        "current": 14653,
        "deltaPct": 0.013650945327963961,
        "deltaVsLaunchPct": 10.040552718534094,
        "deltaVsPreviousPct": 0.013650945327963961,
        "deltaType": "percent",
        "format": "number",
        "context": "GA4 sessions excluding landing-page acquisition paths."
      },
      {
        "key": "viewingEventUsers",
        "label": "Viewing event users",
        "baseline": 1155,
        "launchBaseline": 1155,
        "previousWeek": 2765,
        "current": 2609,
        "deltaPct": -5.641952983725136,
        "deltaVsLaunchPct": 125.88744588744589,
        "deltaVsPreviousPct": -5.641952983725136,
        "deltaType": "percent",
        "format": "number",
        "context": "Users who triggered on-demand video_start or Live play events."
      },
      {
        "key": "totalEngagementHours",
        "label": "Total engaged hours",
        "baseline": 3652.995,
        "launchBaseline": 3652.995,
        "previousWeek": 5149.927222222223,
        "current": 5590.390555555556,
        "deltaPct": 8.552806949051812,
        "deltaVsLaunchPct": 53.03581186274703,
        "deltaVsPreviousPct": 8.552806949051812,
        "deltaType": "percent",
        "format": "number",
        "context": "Total GA4 engaged time converted to hours."
      },
      {
        "key": "avgEngagedMinutesPerUser",
        "label": "Avg time per user",
        "baseline": 25.072031571722718,
        "launchBaseline": 25.072031571722718,
        "previousWeek": 37.899623860337705,
        "current": 44.36231098179253,
        "deltaPct": 6.462687121454827,
        "deltaVsLaunchPct": 19.290279410069815,
        "deltaVsPreviousPct": 6.462687121454827,
        "deltaType": "minutes",
        "format": "minutes",
        "context": "Total engaged time divided by active users, excluding landing-page acquisition paths."
      },
      {
        "key": "landingPageUsers",
        "label": "Landing-page users",
        "baseline": 1045,
        "launchBaseline": 1045,
        "previousWeek": 762,
        "current": 655,
        "deltaPct": -14.041994750656167,
        "deltaVsLaunchPct": -37.32057416267943,
        "deltaVsPreviousPct": -14.041994750656167,
        "deltaType": "percent",
        "format": "number",
        "context": "Users reaching pages with “landing” in the path."
      },
      {
        "key": "devicesPageUsers",
        "label": "Devices-page users",
        "baseline": 2028,
        "launchBaseline": 2028,
        "previousWeek": 506,
        "current": 138,
        "deltaPct": -72.72727272727273,
        "deltaVsLaunchPct": -93.19526627218934,
        "deltaVsPreviousPct": -72.72727272727273,
        "deltaType": "percent",
        "format": "number",
        "context": "Users reaching pages with “devices” in the path."
      },
      {
        "key": "paidSocialUsers",
        "label": "Paid social users",
        "baseline": 4441,
        "launchBaseline": 4441,
        "previousWeek": 2864,
        "current": 2401,
        "deltaPct": -16.166201117318437,
        "deltaVsLaunchPct": -45.935600090069805,
        "deltaVsPreviousPct": -16.166201117318437,
        "deltaType": "percent",
        "format": "number",
        "context": "Users from GA4 source/medium values containing Facebook, Instagram, or Meta."
      },
      {
        "key": "appActiveUsers",
        "label": "App stream active users",
        "baseline": 1547,
        "launchBaseline": 1547,
        "previousWeek": 5470,
        "current": 5472,
        "deltaPct": 0.03656307129798903,
        "deltaVsLaunchPct": 253.71687136393018,
        "deltaVsPreviousPct": 0.03656307129798903,
        "deltaType": "percent",
        "format": "number",
        "context": "People using the Apple/iOS or Android app streams; Apple TV is not yet split from the Apple/iOS stream."
      },
      {
        "key": "appSessions",
        "label": "App stream sessions",
        "baseline": 2889,
        "launchBaseline": 2889,
        "previousWeek": 8670,
        "current": 8767,
        "deltaPct": 1.118800461361015,
        "deltaVsLaunchPct": 203.46140533056422,
        "deltaVsPreviousPct": 1.118800461361015,
        "deltaType": "percent",
        "format": "number",
        "context": "GA4 sessions on the Apple/iOS and Android app streams."
      },
      {
        "key": "appEngagementRate",
        "label": "App stream engagement rate",
        "baseline": 80.96227068189685,
        "launchBaseline": 80.96227068189685,
        "previousWeek": 82.88350634371395,
        "current": 74.50667275008554,
        "deltaPct": -8.376833593628405,
        "deltaVsLaunchPct": -6.455597931811312,
        "deltaVsPreviousPct": -8.376833593628405,
        "deltaType": "points",
        "format": "percent",
        "context": "Engaged app-stream sessions divided by app-stream sessions."
      },
      {
        "key": "viewingEventUsers",
        "label": "Viewing event users",
        "baseline": 1155,
        "launchBaseline": 1155,
        "previousWeek": 2765,
        "current": 2609,
        "deltaPct": -5.641952983725136,
        "deltaVsLaunchPct": 125.88744588744589,
        "deltaVsPreviousPct": -5.641952983725136,
        "deltaType": "percent",
        "format": "number",
        "context": "Users who triggered on-demand video_start or Live play events."
      },
      {
        "key": "onDemandStartUsers",
        "label": "On-demand start users",
        "baseline": 1069,
        "launchBaseline": 1069,
        "previousWeek": 2652,
        "current": 2478,
        "deltaPct": -6.561085972850679,
        "deltaVsLaunchPct": 131.80542563143126,
        "deltaVsPreviousPct": -6.561085972850679,
        "deltaType": "percent",
        "format": "number",
        "context": "Users who triggered video_start outside the Live screen."
      },
      {
        "key": "liveChannelViewers",
        "label": "Live channel viewers",
        "baseline": 121,
        "launchBaseline": 121,
        "previousWeek": 128,
        "current": 153,
        "deltaPct": 19.53125,
        "deltaVsLaunchPct": 26.446280991735538,
        "deltaVsPreviousPct": 19.53125,
        "deltaType": "percent",
        "format": "number",
        "context": "Users who triggered a Live play event."
      },
      {
        "key": "videoCompleteUsers",
        "label": "Video complete users",
        "baseline": 219,
        "launchBaseline": 219,
        "previousWeek": 286,
        "current": 298,
        "deltaPct": 4.195804195804196,
        "deltaVsLaunchPct": 36.07305936073059,
        "deltaVsPreviousPct": 4.195804195804196,
        "deltaType": "percent",
        "format": "number",
        "context": "Users who triggered video_complete."
      },
      {
        "key": "livePlayEvents",
        "label": "Live play events",
        "baseline": 3952,
        "launchBaseline": 3952,
        "previousWeek": 3897,
        "current": 4279,
        "deltaPct": 9.802412111880935,
        "deltaVsLaunchPct": 8.274291497975709,
        "deltaVsPreviousPct": 9.802412111880935,
        "deltaType": "percent",
        "format": "number",
        "context": "Total Live play events, not unique users."
      },
      {
        "key": "adRequestEvents",
        "label": "Ad request events",
        "baseline": 10589,
        "launchBaseline": 10589,
        "previousWeek": 25799,
        "current": 25045,
        "deltaPct": -2.9225938989883327,
        "deltaVsLaunchPct": 136.5190291812258,
        "deltaVsPreviousPct": -2.9225938989883327,
        "deltaType": "percent",
        "format": "number",
        "context": "Total ad request events generated by viewing activity."
      },
      {
        "key": "avgEngagedMinutesPerUser",
        "label": "Avg time per user",
        "baseline": 25.072031571722718,
        "launchBaseline": 25.072031571722718,
        "previousWeek": 37.899623860337705,
        "current": 44.36231098179253,
        "deltaPct": 6.462687121454827,
        "deltaVsLaunchPct": 19.290279410069815,
        "deltaVsPreviousPct": 6.462687121454827,
        "deltaType": "minutes",
        "format": "minutes",
        "context": "Total engaged time divided by active users."
      },
      {
        "key": "avgEngagedMinutesPerSession",
        "label": "Avg time per session",
        "baseline": 16.417955056179775,
        "launchBaseline": 16.417955056179775,
        "previousWeek": 21.113469992028243,
        "current": 24.262092827004217,
        "deltaPct": 3.148622834975974,
        "deltaVsLaunchPct": 7.844137770824442,
        "deltaVsPreviousPct": 3.148622834975974,
        "deltaType": "minutes",
        "format": "minutes",
        "context": "Total engaged time divided by sessions."
      },
      {
        "key": "totalEngagementHours",
        "label": "Total engaged hours",
        "baseline": 3652.995,
        "launchBaseline": 3652.995,
        "previousWeek": 5149.927222222223,
        "current": 5590.390555555556,
        "deltaPct": 8.552806949051812,
        "deltaVsLaunchPct": 53.03581186274703,
        "deltaVsPreviousPct": 8.552806949051812,
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
        "eventCount": 27801,
        "engagementRate": 82.29587712206953
      },
      {
        "date": "May 16",
        "rawDate": "20260516",
        "activeUsers": 978,
        "newUsers": 643,
        "sessions": 1268,
        "engagedSessions": 1062,
        "screenPageViews": 93,
        "eventCount": 24315,
        "engagementRate": 83.75394321766562
      },
      {
        "date": "May 17",
        "rawDate": "20260517",
        "activeUsers": 1064,
        "newUsers": 674,
        "sessions": 1400,
        "engagedSessions": 1149,
        "screenPageViews": 131,
        "eventCount": 30067,
        "engagementRate": 82.07142857142857
      },
      {
        "date": "May 18",
        "rawDate": "20260518",
        "activeUsers": 952,
        "newUsers": 582,
        "sessions": 1233,
        "engagedSessions": 1015,
        "screenPageViews": 73,
        "eventCount": 26045,
        "engagementRate": 82.31954582319545
      },
      {
        "date": "May 19",
        "rawDate": "20260519",
        "activeUsers": 962,
        "newUsers": 560,
        "sessions": 1245,
        "engagedSessions": 999,
        "screenPageViews": 111,
        "eventCount": 30256,
        "engagementRate": 80.24096385542168
      },
      {
        "date": "May 20",
        "rawDate": "20260520",
        "activeUsers": 988,
        "newUsers": 581,
        "sessions": 1274,
        "engagedSessions": 1043,
        "screenPageViews": 96,
        "eventCount": 33086,
        "engagementRate": 81.86813186813187
      },
      {
        "date": "May 21",
        "rawDate": "20260521",
        "activeUsers": 1030,
        "newUsers": 620,
        "sessions": 1339,
        "engagedSessions": 1090,
        "screenPageViews": 71,
        "eventCount": 29662,
        "engagementRate": 81.40403286034355
      },
      {
        "date": "May 22",
        "rawDate": "20260522",
        "activeUsers": 899,
        "newUsers": 507,
        "sessions": 1170,
        "engagedSessions": 941,
        "screenPageViews": 65,
        "eventCount": 22604,
        "engagementRate": 80.42735042735043
      },
      {
        "date": "May 23",
        "rawDate": "20260523",
        "activeUsers": 956,
        "newUsers": 536,
        "sessions": 1281,
        "engagedSessions": 1022,
        "screenPageViews": 126,
        "eventCount": 26276,
        "engagementRate": 79.78142076502732
      },
      {
        "date": "May 24",
        "rawDate": "20260524",
        "activeUsers": 1018,
        "newUsers": 565,
        "sessions": 1334,
        "engagedSessions": 1067,
        "screenPageViews": 228,
        "eventCount": 30142,
        "engagementRate": 79.98500749625187
      },
      {
        "date": "May 25",
        "rawDate": "20260525",
        "activeUsers": 1018,
        "newUsers": 594,
        "sessions": 1364,
        "engagedSessions": 1118,
        "screenPageViews": 93,
        "eventCount": 30996,
        "engagementRate": 81.96480938416423
      },
      {
        "date": "May 26",
        "rawDate": "20260526",
        "activeUsers": 934,
        "newUsers": 525,
        "sessions": 1272,
        "engagedSessions": 1001,
        "screenPageViews": 49,
        "eventCount": 23980,
        "engagementRate": 78.69496855345912
      },
      {
        "date": "May 27",
        "rawDate": "20260527",
        "activeUsers": 992,
        "newUsers": 520,
        "sessions": 1312,
        "engagedSessions": 469,
        "screenPageViews": 46,
        "eventCount": 21764,
        "engagementRate": 35.7469512195122
      }
    ],
    "eventCards": [
      {
        "event": "in_app_purchase",
        "label": "In-app purchases",
        "baseline": 1,
        "current": 3,
        "weekToDate": 3,
        "deltaPct": 200.0,
        "activeUsersCurrent": 3
      },
      {
        "event": "application_install",
        "label": "Application installs",
        "baseline": 5329,
        "current": 4695,
        "weekToDate": 4695,
        "deltaPct": -11.897166447738789,
        "activeUsersCurrent": 4447
      },
      {
        "event": "first_open",
        "label": "First opens",
        "baseline": 4441,
        "current": 3953,
        "weekToDate": 3953,
        "deltaPct": -10.988516099977483,
        "activeUsersCurrent": 3952
      },
      {
        "event": "app_open",
        "label": "App opens",
        "baseline": 1823,
        "current": 1802,
        "weekToDate": 1802,
        "deltaPct": -1.151947339550192,
        "activeUsersCurrent": 483
      },
      {
        "event": "play",
        "label": "Plays",
        "baseline": 51201,
        "current": 56506,
        "weekToDate": 56506,
        "deltaPct": 10.361125759262514,
        "activeUsersCurrent": 2709
      },
      {
        "event": "video_start",
        "label": "Video starts",
        "baseline": 22239,
        "current": 21179,
        "weekToDate": 21179,
        "deltaPct": -4.76640136696794,
        "activeUsersCurrent": 2603
      },
      {
        "event": "video_play",
        "label": "Video plays",
        "baseline": 7694,
        "current": 8809,
        "weekToDate": 8809,
        "deltaPct": 14.491811801403692,
        "activeUsersCurrent": 252
      },
      {
        "event": "video_complete",
        "label": "Video completes",
        "baseline": 3284,
        "current": 3745,
        "weekToDate": 3745,
        "deltaPct": 14.037758830694274,
        "activeUsersCurrent": 298
      },
      {
        "event": "ads_request",
        "label": "Ad requests",
        "baseline": 25799,
        "current": 25045,
        "weekToDate": 25045,
        "deltaPct": -2.9225938989883327,
        "activeUsersCurrent": 889
      },
      {
        "event": "ads_impression",
        "label": "Ad impressions",
        "baseline": 34660,
        "current": 33256,
        "weekToDate": 33256,
        "deltaPct": -4.050778995960762,
        "activeUsersCurrent": 858
      },
      {
        "event": "ads_loaded",
        "label": "Ads loaded",
        "baseline": 17738,
        "current": 16372,
        "weekToDate": 16372,
        "deltaPct": -7.700980944864133,
        "activeUsersCurrent": 1
      },
      {
        "event": "ads_started",
        "label": "Ads started",
        "baseline": 17736,
        "current": 16402,
        "weekToDate": 16402,
        "deltaPct": -7.521425349571493,
        "activeUsersCurrent": 1
      },
      {
        "event": "ads_complete",
        "label": "Ads complete",
        "baseline": 17187,
        "current": 15904,
        "weekToDate": 15904,
        "deltaPct": -7.464944434747192,
        "activeUsersCurrent": 1
      },
      {
        "event": "ad_request",
        "label": "Ad request",
        "baseline": 3949,
        "current": 2861,
        "weekToDate": 2861,
        "deltaPct": -27.5512788047607,
        "activeUsersCurrent": 60
      },
      {
        "event": "ad_complete",
        "label": "Ad complete",
        "baseline": 15389,
        "current": 15457,
        "weekToDate": 15457,
        "deltaPct": 0.441874065891221,
        "activeUsersCurrent": 676
      },
      {
        "event": "vmap_ad_request",
        "label": "VMAP ad request",
        "baseline": 4215,
        "current": 4031,
        "weekToDate": 4031,
        "deltaPct": -4.365361803084223,
        "activeUsersCurrent": 1045
      },
      {
        "event": "vmap_ad_loaded",
        "label": "VMAP ad loaded",
        "baseline": 27443,
        "current": 28194,
        "weekToDate": 28194,
        "deltaPct": 2.7365812775571183,
        "activeUsersCurrent": 902
      },
      {
        "event": "click",
        "label": "Clicks",
        "baseline": 64,
        "current": 33,
        "weekToDate": 33,
        "deltaPct": -48.4375,
        "activeUsersCurrent": 26
      }
    ],
    "purchaseFunnel": [
      {
        "event": "in_app_purchase",
        "label": "Purchase completed",
        "baseline": 1,
        "current": 3,
        "weekToDate": 3,
        "deltaPct": 200.0,
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
        "application_install": 832,
        "first_open": 690,
        "app_open": 288,
        "play": 7654,
        "ads_impression": 4846
      },
      {
        "date": "May 18",
        "rawDate": "20260518",
        "purchaseRevenue": 0,
        "in_app_purchase": 0,
        "application_install": 710,
        "first_open": 590,
        "app_open": 215,
        "play": 7392,
        "ads_impression": 4621
      },
      {
        "date": "May 19",
        "rawDate": "20260519",
        "purchaseRevenue": 0,
        "in_app_purchase": 0,
        "application_install": 697,
        "first_open": 572,
        "app_open": 234,
        "play": 6957,
        "ads_impression": 4641
      },
      {
        "date": "May 20",
        "rawDate": "20260520",
        "purchaseRevenue": 0,
        "in_app_purchase": 0,
        "application_install": 718,
        "first_open": 593,
        "app_open": 298,
        "play": 8314,
        "ads_impression": 5706
      },
      {
        "date": "May 21",
        "rawDate": "20260521",
        "purchaseRevenue": 29.98,
        "in_app_purchase": 2,
        "application_install": 725,
        "first_open": 629,
        "app_open": 271,
        "play": 8218,
        "ads_impression": 5513
      },
      {
        "date": "May 22",
        "rawDate": "20260522",
        "purchaseRevenue": 0,
        "in_app_purchase": 0,
        "application_install": 631,
        "first_open": 520,
        "app_open": 242,
        "play": 7380,
        "ads_impression": 5449
      },
      {
        "date": "May 23",
        "rawDate": "20260523",
        "purchaseRevenue": 0,
        "in_app_purchase": 0,
        "application_install": 672,
        "first_open": 547,
        "app_open": 269,
        "play": 10744,
        "ads_impression": 3958
      },
      {
        "date": "May 24",
        "rawDate": "20260524",
        "purchaseRevenue": 0,
        "in_app_purchase": 0,
        "application_install": 709,
        "first_open": 584,
        "app_open": 267,
        "play": 7573,
        "ads_impression": 4753
      },
      {
        "date": "May 25",
        "rawDate": "20260525",
        "purchaseRevenue": 0,
        "in_app_purchase": 0,
        "application_install": 706,
        "first_open": 604,
        "app_open": 275,
        "play": 6993,
        "ads_impression": 4329
      },
      {
        "date": "May 26",
        "rawDate": "20260526",
        "purchaseRevenue": 0,
        "in_app_purchase": 0,
        "application_install": 637,
        "first_open": 541,
        "app_open": 219,
        "play": 7280,
        "ads_impression": 4180
      },
      {
        "date": "May 27",
        "rawDate": "20260527",
        "purchaseRevenue": 9.99,
        "in_app_purchase": 1,
        "application_install": 615,
        "first_open": 528,
        "app_open": 259,
        "play": 8318,
        "ads_impression": 5074
      }
    ],
    "platforms": [
      {
        "platform": "web",
        "baseline": {
          "platform": "web",
          "activeUsers": 2606,
          "newUsers": 1975,
          "sessions": 5710,
          "engagedSessions": 4366,
          "screenPageViews": 29536,
          "eventCount": 780758,
          "engagementRate": 76.46234676007005
        },
        "current": {
          "platform": "web",
          "activeUsers": 2195,
          "newUsers": 1446,
          "sessions": 5400,
          "engagedSessions": 3428,
          "screenPageViews": 25285,
          "eventCount": 781529,
          "engagementRate": 63.48148148148148
        },
        "activeUsersDeltaPct": -15.771297006907137,
        "engagementRateCurrent": 63.48148148148148
      },
      {
        "platform": "iOS",
        "baseline": {
          "platform": "iOS",
          "activeUsers": 2297,
          "newUsers": 1687,
          "sessions": 3785,
          "engagedSessions": 3272,
          "screenPageViews": 671,
          "eventCount": 94701,
          "engagementRate": 86.44649933949802
        },
        "current": {
          "platform": "iOS",
          "activeUsers": 2465,
          "newUsers": 1613,
          "sessions": 4087,
          "engagedSessions": 3076,
          "screenPageViews": 678,
          "eventCount": 90788,
          "engagementRate": 75.26302911671152
        },
        "activeUsersDeltaPct": 7.313887679582064,
        "engagementRateCurrent": 75.26302911671152
      },
      {
        "platform": "Android",
        "baseline": {
          "platform": "Android",
          "activeUsers": 3377,
          "newUsers": 2754,
          "sessions": 5336,
          "engagedSessions": 4376,
          "screenPageViews": 2200,
          "eventCount": 131780,
          "engagementRate": 82.00899550224887
        },
        "current": {
          "platform": "Android",
          "activeUsers": 3216,
          "newUsers": 2340,
          "sessions": 5282,
          "engagedSessions": 3926,
          "screenPageViews": 2380,
          "eventCount": 136750,
          "engagementRate": 74.3279060961757
        },
        "activeUsersDeltaPct": -4.767545158424637,
        "engagementRateCurrent": 74.3279060961757
      }
    ],
    "platformMix": {
      "period": "May 21-May 27, 2026",
      "metric": "Active users",
      "totalViewers": 7876,
      "note": "Viewer share uses GA4 active users grouped by stream and device data where available. People who use more than one platform may appear in more than one bucket. Apple TV is not separately broken out yet; Amazon/Fire TV is inferred from Amazon AFT smart-TV device models until the developer confirms a cleaner Fire TV label.",
      "groups": [
        {
          "platform": "Web",
          "category": "Web",
          "tracked": true,
          "activeUsers": 940,
          "sharePct": 11.9,
          "sessions": 1806,
          "engagedSessions": 1259,
          "detail": "Browser and web playback from the electricnow-web GA4 stream."
        },
        {
          "platform": "Apple app stream",
          "category": "App",
          "tracked": true,
          "activeUsers": 2465,
          "sharePct": 31.3,
          "sessions": 4087,
          "engagedSessions": 3076,
          "detail": "iPhone and iPad app activity; Apple TV may also be included here until it is tagged separately."
        },
        {
          "platform": "Android mobile app",
          "category": "App",
          "tracked": true,
          "activeUsers": 3007,
          "sharePct": 38.2,
          "sessions": 4802,
          "engagedSessions": 3492,
          "detail": "Android phone/tablet activity from the ElectricNOW Android GA4 stream."
        },
        {
          "platform": "Roku",
          "category": "Connected TV",
          "tracked": true,
          "activeUsers": 1255,
          "sharePct": 15.9,
          "sessions": 3614,
          "engagedSessions": 2175,
          "detail": "Roku activity from the electricnow-roku GA4 stream."
        },
        {
          "platform": "Amazon / Fire TV",
          "category": "Connected TV",
          "tracked": true,
          "activeUsers": 104,
          "sharePct": 1.3,
          "sessions": 256,
          "engagedSessions": 229,
          "detail": "Likely Fire TV activity inferred from Amazon AFT smart-TV model codes."
        },
        {
          "platform": "Android TV / Google TV",
          "category": "Connected TV",
          "tracked": true,
          "activeUsers": 105,
          "sharePct": 1.3,
          "sessions": 235,
          "engagedSessions": 212,
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
        "activeUsers": 3539,
        "newUsers": 2361,
        "sessions": 6297,
        "engagedSessions": 4737,
        "eventCount": 172958,
        "engagementRate": 75.22629823725583
      },
      {
        "sourceMedium": "apps.facebook.com / (not set)",
        "activeUsers": 1836,
        "newUsers": 1448,
        "sessions": 2578,
        "engagedSessions": 1787,
        "eventCount": 37345,
        "engagementRate": 69.31730023273856
      },
      {
        "sourceMedium": "(not set)",
        "activeUsers": 864,
        "newUsers": 133,
        "sessions": 1617,
        "engagedSessions": 1,
        "eventCount": 189178,
        "engagementRate": 0.06184291898577613
      },
      {
        "sourceMedium": "homescreen / (not set)",
        "activeUsers": 749,
        "newUsers": 203,
        "sessions": 2275,
        "engagedSessions": 1661,
        "eventCount": 416227,
        "engagementRate": 73.01098901098901
      },
      {
        "sourceMedium": "apps.instagram.com / (not set)",
        "activeUsers": 380,
        "newUsers": 325,
        "sessions": 525,
        "engagedSessions": 380,
        "eventCount": 9425,
        "engagementRate": 72.38095238095238
      },
      {
        "sourceMedium": "google-play / organic",
        "activeUsers": 308,
        "newUsers": 216,
        "sessions": 526,
        "engagedSessions": 448,
        "eventCount": 23017,
        "engagementRate": 85.17110266159695
      },
      {
        "sourceMedium": "google / organic",
        "activeUsers": 302,
        "newUsers": 248,
        "sessions": 537,
        "engagedSessions": 437,
        "eventCount": 13668,
        "engagementRate": 81.3780260707635
      },
      {
        "sourceMedium": "google / cpc",
        "activeUsers": 158,
        "newUsers": 108,
        "sessions": 212,
        "engagedSessions": 178,
        "eventCount": 4460,
        "engagementRate": 83.9622641509434
      },
      {
        "sourceMedium": "apps.facebook.com / (none)",
        "activeUsers": 157,
        "newUsers": 0,
        "sessions": 327,
        "engagedSessions": 232,
        "eventCount": 3740,
        "engagementRate": 70.9480122324159
      },
      {
        "sourceMedium": "fb / paid",
        "activeUsers": 87,
        "newUsers": 25,
        "sessions": 109,
        "engagedSessions": 88,
        "eventCount": 1241,
        "engagementRate": 80.73394495412845
      },
      {
        "sourceMedium": "hs-search / (not set)",
        "activeUsers": 70,
        "newUsers": 25,
        "sessions": 294,
        "engagedSessions": 218,
        "eventCount": 50661,
        "engagementRate": 74.14965986394559
      },
      {
        "sourceMedium": "facebook.com / referral",
        "activeUsers": 62,
        "newUsers": 62,
        "sessions": 63,
        "engagedSessions": 24,
        "eventCount": 296,
        "engagementRate": 38.095238095238095
      }
    ],
    "topPages": [
      {
        "path": "(not set)",
        "screen": "(not set)",
        "activeUsers": 5901,
        "views": 2654,
        "eventCount": 758377
      },
      {
        "path": "",
        "screen": "(not set)",
        "activeUsers": 1337,
        "views": 464,
        "eventCount": 120914
      },
      {
        "path": "(not set)",
        "screen": "Splash",
        "activeUsers": 1245,
        "views": 3143,
        "eventCount": 3962
      },
      {
        "path": "(not set)",
        "screen": "Intro",
        "activeUsers": 1076,
        "views": 2266,
        "eventCount": 2431
      },
      {
        "path": "(not set)",
        "screen": "On Demand",
        "activeUsers": 775,
        "views": 2723,
        "eventCount": 3071
      },
      {
        "path": "/landing",
        "screen": "/landing",
        "activeUsers": 589,
        "views": 1196,
        "eventCount": 1988
      },
      {
        "path": "/",
        "screen": "/",
        "activeUsers": 534,
        "views": 1461,
        "eventCount": 3842
      },
      {
        "path": "",
        "screen": "Splash",
        "activeUsers": 340,
        "views": 533,
        "eventCount": 644
      },
      {
        "path": "(not set)",
        "screen": "PDP",
        "activeUsers": 297,
        "views": 2531,
        "eventCount": 2814
      },
      {
        "path": "",
        "screen": "On Demand",
        "activeUsers": 280,
        "views": 462,
        "eventCount": 523
      },
      {
        "path": "",
        "screen": "Intro",
        "activeUsers": 267,
        "views": 384,
        "eventCount": 410
      },
      {
        "path": "/live-tv",
        "screen": "/live-tv",
        "activeUsers": 264,
        "views": 1603,
        "eventCount": 30169
      },
      {
        "path": "",
        "screen": "PDP",
        "activeUsers": 161,
        "views": 450,
        "eventCount": 473
      },
      {
        "path": "(not set)",
        "screen": "Live",
        "activeUsers": 150,
        "views": 1562,
        "eventCount": 19961
      },
      {
        "path": "(not set)",
        "screen": "Category",
        "activeUsers": 139,
        "views": 346,
        "eventCount": 392
      },
      {
        "path": "",
        "screen": "Player",
        "activeUsers": 131,
        "views": 422,
        "eventCount": 3414
      },
      {
        "path": "",
        "screen": "Live",
        "activeUsers": 123,
        "views": 261,
        "eventCount": 3086
      },
      {
        "path": "(not set)",
        "screen": "Player",
        "activeUsers": 74,
        "views": 1954,
        "eventCount": 29622
      },
      {
        "path": "/devices",
        "screen": "/devices",
        "activeUsers": 69,
        "views": 88,
        "eventCount": 315
      },
      {
        "path": "(not set)",
        "screen": "Search",
        "activeUsers": 64,
        "views": 528,
        "eventCount": 593
      }
    ],
    "liveTv": {
      "baseline": {
        "activeUsers": 423,
        "sessions": 1824,
        "engagedSessions": 1761,
        "screenPageViews": 3609,
        "eventCount": 46228
      },
      "current": {
        "activeUsers": 503,
        "sessions": 2011,
        "engagedSessions": 1685,
        "screenPageViews": 3633,
        "eventCount": 55356
      },
      "deltas": {
        "activeUsers": 18.912529550827422,
        "sessions": 10.25219298245614,
        "engagedSessions": -4.315729699034639,
        "screenPageViews": 0.6650041562759768,
        "eventCount": 19.745608721986674
      },
      "engagementRateBaseline": 96.54605263157895,
      "engagementRateCurrent": 83.78915962207857,
      "weekToDate": {
        "activeUsers": 503,
        "sessions": 2011,
        "engagedSessions": 1685,
        "screenPageViews": 3633,
        "eventCount": 55356
      },
      "engagementRateWeekToDate": 83.78915962207857
    },
    "plainEnglishInsights": [
      "Overall, ElectricNOW’s latest measured week shows that measured platform audience was down 3.2%, viewing was down 6.4%, and time spent improved by 6.5 minutes per active user. The short version is that we are separating real platform use from landing-page acquisition, so this read focuses first on whether people are using and watching ElectricNOW, then explains traffic sources, sales, and tracking caveats below.",
      "Measured ElectricNOW platform audience was 7.9K GA4 active users excluding landing-page acquisition paths, down 3.2% from the previous week.",
      "Acquisition traffic is tracked separately: property-wide GA4 active users including landing-page traffic were 7.9K, down 3.7% from the previous week; landing-page users were down 14.0%.",
      "Paid advertising is now being measured more directly through the connected Google Ads account: PCSM - ElectricNow App Promotion - Android spent $241.08 from May 12-May 26, 2026, generated 47.0K impressions, 1.5K clicks, and 443 Android first-open conversions at about $0.54 per first open. That is a promising cost-per-install/open signal, but the real success test is whether those paid users become viewers, so this should be read alongside GA4 viewing, time-spent, and ad-impression/ad-server reporting rather than as revenue by itself.",
      "Measured Apple/Android app-stream usage improved: 5.5K active users this week, up 253.7% from launch baseline and up 0.0% from the previous week; Apple TV is not yet split out from the Apple/iOS stream.",
      "Viewing also improved: 2.2K app users watched on-demand or Live content, up 202.5% from launch baseline and down 6.4% from the previous week.",
      "Roughly 40.4% of app users watched something, compared with 47.2% during launch week and 43.1% the prior week, so the viewing conversion rate is steady while the audience is growing.",
      "On-demand is carrying most of the viewing growth with 2.2K starter users; Live remains meaningful at 43 viewers, down 6.5% from launch baseline and up 13.2% from the previous week.",
      "Actual viewing behavior is measured separately: 2.6K users triggered a viewing event, down 5.6% from the previous week; video-complete users were up 4.2%.",
      "Average time on platform is 44.4 engaged minutes per active user across all GA4-tracked platforms, up 19.3 minutes from launch week and up 6.5 minutes from the previous week.",
      "Read this as two different measures: average time per user shows total weekly attention per person, while average time per session shows how long each individual visit or viewing session lasted.",
      "Visible platform sales now combine Stripe, Roku, and the manual Apple App Store snapshot: 1 purchases and $14.99 in the latest 7 complete days, plus 1 purchases and $14.99 so far this week; this still excludes Google Play purchases. The Apple App Store contribution is currently a manual snapshot of $159.92 gross, or about $111.94 after Apple’s 30% platform fee.",
      "Ad-sales readiness is mixed: GA4 counted 33.3K ad impressions in the latest 7 complete days, down 4.1% from the previous 7 days; ad requests were down 2.9%; completed ad events were down 7.5%. This tells us ad inventory delivery inside the tracked app experience, but actual ad revenue still needs to be reconciled with the ad server because GA4 ad events are not the same thing as booked or collected ad sales.",
      "Top watched programs in GA4 this week include ElectricNOW, The Ark, Leverage, The Librarians, and Leverage: Redemption.",
      "The most watched Live channels generated 4.3K Live play events, led by ElectricNOW, spot on news, ElectricNOW en Español, Kung Fu Movies, and Cartoon Classics.",
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
        "sourceDetail": "This shows Stripe-visible sales from the connected electricnow.tv account only. It is not total ElectricNOW sales because Apple App Store and Google Play purchases are handled separately.",
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
          "range": "Jan 1-May 28, 2026",
          "purchases": 13,
          "purchaseRevenue": 189.87,
          "revenuePerPurchase": 14.61,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": [
            {
              "date": "May 17",
              "createdAt": "2026-05-17 21:26 PDT",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment"
            },
            {
              "date": "May 14",
              "createdAt": "2026-05-14 20:09 PDT",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment"
            },
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
            }
          ]
        },
        "monthToDate": {
          "label": "Sales this month",
          "range": "May 1-May 28, 2026",
          "purchases": 3,
          "purchaseRevenue": 44.97,
          "revenuePerPurchase": 14.99,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": [
            {
              "date": "May 17",
              "createdAt": "2026-05-17 21:26 PDT",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment"
            },
            {
              "date": "May 14",
              "createdAt": "2026-05-14 20:09 PDT",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment"
            },
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
          "range": "May 21-May 27, 2026",
          "purchases": 0,
          "purchaseRevenue": 0,
          "revenuePerPurchase": 0,
          "deltaPurchasesPct": -100.0,
          "deltaRevenuePct": -100.0,
          "payments": []
        },
        "thisWeek": {
          "label": "Sales this week",
          "range": "May 25-May 28, 2026",
          "purchases": 0,
          "purchaseRevenue": 0,
          "revenuePerPurchase": 0,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": []
        },
        "currentCompleteWeek": {
          "label": "Sales last week",
          "range": "May 21-May 27, 2026",
          "purchases": 0,
          "purchaseRevenue": 0,
          "revenuePerPurchase": 0,
          "deltaPurchasesPct": -100.0,
          "deltaRevenuePct": -100.0,
          "payments": []
        },
        "weekToDate": {
          "label": "Sales this week",
          "range": "May 25-May 28, 2026",
          "purchases": 0,
          "purchaseRevenue": 0,
          "revenuePerPurchase": 0,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": []
        },
        "recent12Days": {
          "label": "Stripe last 12 days",
          "range": "May 17-May 28, 2026",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "revenuePerPurchase": 14.99,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": [
            {
              "date": "May 17",
              "createdAt": "2026-05-17 21:26 PDT",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment"
            }
          ]
        },
        "lifetimeObserved": {
          "range": "Through May 28, 2026 pull",
          "purchases": 13,
          "purchaseRevenue": 189.87,
          "revenuePerPurchase": 14.61
        },
        "mix": [
          {
            "label": "Title purchases",
            "purchases": 12,
            "purchaseRevenue": 179.88
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
            "id": "pi_3TYIl0LG0Cw1zW4e29yDkQvy",
            "date": "May 17",
            "createdAt": "2026-05-17 21:26 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          },
          {
            "id": "pi_3TXC7jLG0Cw1zW4e0aTDzJEJ",
            "date": "May 14",
            "createdAt": "2026-05-14 20:09 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment"
          },
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
            "purchases": 1,
            "purchaseRevenue": 14.99
          },
          {
            "date": "May 15",
            "rawDate": "20260515",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 16",
            "rawDate": "20260516",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 17",
            "rawDate": "20260517",
            "purchases": 1,
            "purchaseRevenue": 14.99
          },
          {
            "date": "May 18",
            "rawDate": "20260518",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 19",
            "rawDate": "20260519",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 20",
            "rawDate": "20260520",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 21",
            "rawDate": "20260521",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 22",
            "rawDate": "20260522",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 23",
            "rawDate": "20260523",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 24",
            "rawDate": "20260524",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 25",
            "rawDate": "20260525",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 26",
            "rawDate": "20260526",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 27",
            "rawDate": "20260527",
            "purchases": 0,
            "purchaseRevenue": 0
          },
          {
            "date": "May 28",
            "rawDate": "20260528",
            "purchases": 0,
            "purchaseRevenue": 0
          }
        ],
        "note": "Stripe-visible sales show 13 payments and $189.87 year to date, 3 payments and $44.97 this month, 0 payments and $0.00 last week, and 0 payments and $0.00 this week. Add Apple App Store and Google Play reports before treating this as total sales."
      },
      "roku": {
        "sourceLabel": "Roku-visible sales",
        "sourceDetail": "Roku-visible sales come from the latest emailed Roku Sales Activity Report PDF. These are not total ElectricNOW sales.",
        "reportEmailDate": "2026-05-25T14:36:02+00:00",
        "reportGenerated": "May 25, 2026 at 7:35 AM PDT",
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
          "range": "Jan 1-May 28, 2026",
          "purchases": 14,
          "purchaseRevenue": 206.86,
          "developerRevShare": 165.46,
          "revenuePerPurchase": 14.78,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": [
            {
              "date": "May 20",
              "createdAt": "2026-05-20",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            },
            {
              "date": "May 18",
              "createdAt": "2026-05-18",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            },
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
            }
          ]
        },
        "monthToDate": {
          "label": "Roku sales this month",
          "range": "May 1-May 28, 2026",
          "purchases": 8,
          "purchaseRevenue": 76.92,
          "developerRevShare": 61.52,
          "revenuePerPurchase": 9.62,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": [
            {
              "date": "May 20",
              "createdAt": "2026-05-20",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            },
            {
              "date": "May 18",
              "createdAt": "2026-05-18",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            },
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
          "range": "May 21-May 27, 2026",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0,
          "revenuePerPurchase": 0,
          "deltaPurchasesPct": -100.0,
          "deltaRevenuePct": -100.0,
          "payments": []
        },
        "thisWeek": {
          "label": "Roku sales this week",
          "range": "May 25-May 28, 2026",
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
          "range": "May 21-May 27, 2026",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0,
          "revenuePerPurchase": 0,
          "deltaPurchasesPct": -100.0,
          "deltaRevenuePct": -100.0,
          "payments": []
        },
        "weekToDate": {
          "label": "Roku sales this week",
          "range": "May 25-May 28, 2026",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0,
          "revenuePerPurchase": 0,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": []
        },
        "lifetimeObserved": {
          "range": "Through May 28, 2026 pull",
          "purchases": 14,
          "purchaseRevenue": 206.86,
          "developerRevShare": 165.46
        },
        "mix": [
          {
            "label": "Roku title purchases",
            "purchases": 12,
            "purchaseRevenue": 131.88
          },
          {
            "label": "Roku bundle purchases",
            "purchases": 2,
            "purchaseRevenue": 74.98
          }
        ],
        "recentPayments": [
          {
            "date": "May 20",
            "createdAt": "2026-05-20",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
          {
            "date": "May 18",
            "createdAt": "2026-05-18",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
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
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 11.99
          },
          {
            "date": "May 19",
            "rawDate": "20260519",
            "purchases": 0,
            "purchaseRevenue": 0,
            "developerRevShare": 0
          },
          {
            "date": "May 20",
            "rawDate": "20260520",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 11.99
          },
          {
            "date": "May 21",
            "rawDate": "20260521",
            "purchases": 0,
            "purchaseRevenue": 0,
            "developerRevShare": 0
          },
          {
            "date": "May 22",
            "rawDate": "20260522",
            "purchases": 0,
            "purchaseRevenue": 0,
            "developerRevShare": 0
          },
          {
            "date": "May 23",
            "rawDate": "20260523",
            "purchases": 0,
            "purchaseRevenue": 0,
            "developerRevShare": 0
          },
          {
            "date": "May 24",
            "rawDate": "20260524",
            "purchases": 0,
            "purchaseRevenue": 0,
            "developerRevShare": 0
          },
          {
            "date": "May 25",
            "rawDate": "20260525",
            "purchases": 0,
            "purchaseRevenue": 0,
            "developerRevShare": 0
          },
          {
            "date": "May 26",
            "rawDate": "20260526",
            "purchases": 0,
            "purchaseRevenue": 0,
            "developerRevShare": 0
          },
          {
            "date": "May 27",
            "rawDate": "20260527",
            "purchases": 0,
            "purchaseRevenue": 0,
            "developerRevShare": 0
          },
          {
            "date": "May 28",
            "rawDate": "20260528",
            "purchases": 0,
            "purchaseRevenue": 0,
            "developerRevShare": 0
          }
        ],
        "note": "Roku report shows 14 purchases and $206.86 gross sales year to date, with $165.46 developer rev share."
      },
      "apple": {
        "sourceLabel": "Apple App Store manual snapshot",
        "sourceDetail": "Apple App Store in-app purchase snapshot manually entered from App Store Connect screenshots. Gross customer sales are shown; estimated net assumes Apple keeps 30% before remittance. This remains a manual source until Apple App Store Connect API reporting is connected.",
        "isManualSnapshot": true,
        "snapshotRange": "Manual Apple App Store screenshots through May 18, 2026",
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
          "range": "May 21-May 27, 2026",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 10.49,
          "revenuePerPurchase": 14.99,
          "payments": [
            {
              "date": "May 25",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            }
          ]
        },
        "thisWeek": {
          "label": "Apple sales this week",
          "range": "May 25-May 28, 2026",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 10.49,
          "revenuePerPurchase": 14.99,
          "payments": [
            {
              "date": "May 25",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            }
          ]
        },
        "monthToDate": {
          "label": "Apple sales this month",
          "range": "May 1-May 28, 2026",
          "purchases": 4,
          "purchaseRevenue": 89.96,
          "developerRevShare": 62.97,
          "revenuePerPurchase": 22.49,
          "payments": [
            {
              "date": "May 13",
              "amount": 29.99,
              "description": "Apple App Store - Purchase Bundle 30",
              "source": "Apple App Store"
            },
            {
              "date": "May 18",
              "amount": 29.99,
              "description": "Apple App Store - Purchase Bundle 30",
              "source": "Apple App Store"
            },
            {
              "date": "May 18",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "May 25",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            }
          ]
        },
        "recent12Days": {
          "label": "Apple sales last 12 days",
          "range": "May 17-May 28, 2026",
          "purchases": 3,
          "purchaseRevenue": 59.97,
          "developerRevShare": 41.98,
          "revenuePerPurchase": 19.99,
          "payments": [
            {
              "date": "May 18",
              "amount": 29.99,
              "description": "Apple App Store - Purchase Bundle 30",
              "source": "Apple App Store"
            },
            {
              "date": "May 18",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "May 25",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            }
          ]
        },
        "yearToDate": {
          "label": "Apple App Store snapshot",
          "range": "Jan 1-May 28, 2026",
          "purchases": 8,
          "purchaseRevenue": 159.92,
          "developerRevShare": 111.94,
          "revenuePerPurchase": 19.99,
          "payments": [
            {
              "date": "Apr 16",
              "amount": 29.98,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Apr 21",
              "amount": 9.99,
              "description": "Apple App Store - Purchase Bundle 10",
              "source": "Apple App Store"
            },
            {
              "date": "May 13",
              "amount": 29.99,
              "description": "Apple App Store - Purchase Bundle 30",
              "source": "Apple App Store"
            },
            {
              "date": "May 18",
              "amount": 29.99,
              "description": "Apple App Store - Purchase Bundle 30",
              "source": "Apple App Store"
            },
            {
              "date": "May 18",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "May 25",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Apr 6-May 10",
              "amount": 29.99,
              "description": "Apple App Store - Purchase Bundle 30, date pending",
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
            "purchases": 1,
            "purchaseRevenue": 29.99,
            "developerRevShare": 20.99
          },
          {
            "date": "May 18",
            "rawDate": "20260518",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 10.49
          },
          {
            "date": "May 25",
            "rawDate": "20260525",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 10.49
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
            "purchases": 1,
            "purchaseRevenue": 29.99,
            "developerRevShare": 20.99
          },
          {
            "label": "Apple Purchase HD 15",
            "purchases": 2,
            "purchaseRevenue": 29.98,
            "developerRevShare": 20.99
          },
          {
            "label": "Apple Purchase Bundle 10",
            "purchases": 1,
            "purchaseRevenue": 9.99,
            "developerRevShare": 6.99
          }
        ],
        "note": "Apple App Store screenshots show $159.92 gross in-app purchase sales manually entered so far, or approximately $111.94 after Apple’s 30% platform fee. These figures remain manual until Apple App Store Connect API reporting is connected."
      },
      "sourceBreakout": [
        {
          "source": "Stripe",
          "purchases": 13,
          "purchaseRevenue": 189.87,
          "developerRevShare": 0.0,
          "detail": "This shows Stripe-visible sales from the connected electricnow.tv account only. It is not total ElectricNOW sales because Apple App Store and Google Play purchases are handled separately."
        },
        {
          "source": "Roku",
          "purchases": 14,
          "purchaseRevenue": 206.86,
          "developerRevShare": 165.46,
          "detail": "Roku-visible sales come from the latest emailed Roku Sales Activity Report PDF. These are not total ElectricNOW sales."
        },
        {
          "source": "Apple App Store",
          "purchases": 8,
          "purchaseRevenue": 159.92,
          "developerRevShare": 111.94,
          "detail": "Apple App Store in-app purchase snapshot manually entered from App Store Connect screenshots. Gross customer sales are shown; estimated net assumes Apple keeps 30% before remittance. This remains a manual source until Apple App Store Connect API reporting is connected."
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
        "range": "Jan 1-May 28, 2026",
        "purchases": 35,
        "purchaseRevenue": 556.65,
        "developerRevShare": 277.4,
        "revenuePerPurchase": 15.9,
        "payments": [
          {
            "date": "May 17",
            "createdAt": "2026-05-17 21:26 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "source": "Stripe"
          },
          {
            "date": "May 14",
            "createdAt": "2026-05-14 20:09 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "source": "Stripe"
          },
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
          }
        ]
      },
      "monthToDate": {
        "label": "Sales this month",
        "range": "May 1-May 28, 2026",
        "purchases": 15,
        "purchaseRevenue": 211.85,
        "developerRevShare": 124.49,
        "revenuePerPurchase": 14.12,
        "payments": [
          {
            "date": "May 17",
            "createdAt": "2026-05-17 21:26 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "source": "Stripe"
          },
          {
            "date": "May 14",
            "createdAt": "2026-05-14 20:09 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "source": "Stripe"
          },
          {
            "date": "May 6",
            "createdAt": "2026-05-06 01:02 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "source": "Stripe"
          },
          {
            "date": "May 20",
            "createdAt": "2026-05-20",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
          {
            "date": "May 18",
            "createdAt": "2026-05-18",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
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
          }
        ]
      },
      "lastWeek": {
        "label": "Sales last week",
        "range": "May 21-May 27, 2026",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 10.49,
        "revenuePerPurchase": 14.99,
        "payments": [
          {
            "date": "May 25",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          }
        ],
        "deltaPurchasesPct": -90.9090909090909,
        "deltaRevenuePct": -90.62480455313026
      },
      "thisWeek": {
        "label": "Sales this week",
        "range": "May 25-May 28, 2026",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 10.49,
        "revenuePerPurchase": 14.99,
        "payments": [
          {
            "date": "May 25",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          }
        ]
      },
      "currentCompleteWeek": {
        "label": "Sales last week",
        "range": "May 21-May 27, 2026",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 10.49,
        "revenuePerPurchase": 14.99,
        "payments": [
          {
            "date": "May 25",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          }
        ],
        "deltaPurchasesPct": -90.9090909090909,
        "deltaRevenuePct": -90.62480455313026
      },
      "weekToDate": {
        "label": "Sales this week",
        "range": "May 25-May 28, 2026",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 10.49,
        "revenuePerPurchase": 14.99,
        "payments": [
          {
            "date": "May 25",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          }
        ]
      },
      "recent12Days": {
        "label": "Visible sales last 12 days",
        "range": "May 17-May 28, 2026",
        "purchases": 4,
        "purchaseRevenue": 74.96,
        "developerRevShare": 41.98,
        "revenuePerPurchase": 18.74,
        "payments": [
          {
            "date": "May 17",
            "createdAt": "2026-05-17 21:26 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "source": "Stripe"
          },
          {
            "date": "May 18",
            "amount": 29.99,
            "description": "Apple App Store - Purchase Bundle 30",
            "source": "Apple App Store"
          },
          {
            "date": "May 18",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "May 25",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          }
        ]
      },
      "lifetimeObserved": {
        "label": "Sales this year",
        "range": "Jan 1-May 28, 2026",
        "purchases": 35,
        "purchaseRevenue": 556.65,
        "developerRevShare": 277.4,
        "revenuePerPurchase": 15.9,
        "payments": [
          {
            "date": "May 17",
            "createdAt": "2026-05-17 21:26 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "source": "Stripe"
          },
          {
            "date": "May 14",
            "createdAt": "2026-05-14 20:09 PDT",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "source": "Stripe"
          },
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
          }
        ]
      },
      "mix": [
        {
          "label": "Title purchases",
          "purchases": 12,
          "purchaseRevenue": 179.88
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
          "purchases": 12,
          "purchaseRevenue": 131.88
        },
        {
          "label": "Roku bundle purchases",
          "purchases": 2,
          "purchaseRevenue": 74.98
        },
        {
          "label": "Apple Purchase Bundle 30",
          "purchases": 1,
          "purchaseRevenue": 29.99,
          "developerRevShare": 20.99
        },
        {
          "label": "Apple Purchase HD 15",
          "purchases": 2,
          "purchaseRevenue": 29.98,
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
          "id": "pi_3TYIl0LG0Cw1zW4e29yDkQvy",
          "date": "May 17",
          "createdAt": "2026-05-17 21:26 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
        {
          "id": "pi_3TXC7jLG0Cw1zW4e0aTDzJEJ",
          "date": "May 14",
          "createdAt": "2026-05-14 20:09 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe"
        },
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
          "purchases": 2,
          "purchaseRevenue": 17.98,
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
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 0.0
        },
        {
          "date": "May 18",
          "rawDate": "20260518",
          "purchases": 3,
          "purchaseRevenue": 59.97,
          "developerRevShare": 43.47
        },
        {
          "date": "May 19",
          "rawDate": "20260519",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        },
        {
          "date": "May 20",
          "rawDate": "20260520",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 11.99
        },
        {
          "date": "May 21",
          "rawDate": "20260521",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        },
        {
          "date": "May 22",
          "rawDate": "20260522",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        },
        {
          "date": "May 23",
          "rawDate": "20260523",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        },
        {
          "date": "May 24",
          "rawDate": "20260524",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        },
        {
          "date": "May 25",
          "rawDate": "20260525",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 10.49
        },
        {
          "date": "May 26",
          "rawDate": "20260526",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        },
        {
          "date": "May 27",
          "rawDate": "20260527",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        },
        {
          "date": "May 28",
          "rawDate": "20260528",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        }
      ],
      "note": "Visible platform sales show 35 purchases and $556.65 year to date, including the manual Apple App Store snapshot. Apple gross sales in the snapshot are $159.92, with estimated net-to-Electric of $111.94 after Apple’s 30% platform fee. Add Google Play reports before treating this as total sales."
    },
    "contentUsage": {
      "period": "May 21-May 27, 2026",
      "live": {
        "total": {
          "screenPageViews": 1823,
          "activeUsers": 234,
          "eventCount": 23047
        },
        "platforms": [
          {
            "platform": "web",
            "screen": "Live",
            "screenPageViews": 1459,
            "activeUsers": 78,
            "eventCount": 1459
          },
          {
            "platform": "Android",
            "screen": "Live",
            "screenPageViews": 271,
            "activeUsers": 111,
            "eventCount": 11729
          },
          {
            "platform": "iOS",
            "screen": "Live",
            "screenPageViews": 93,
            "activeUsers": 45,
            "eventCount": 9859
          }
        ],
        "playback": {
          "play": 4279,
          "video_start": 2200,
          "end_playback": 206
        },
        "playbackRows": [
          {
            "event": "play",
            "label": "Play events",
            "eventCount": 4279
          },
          {
            "event": "video_start",
            "label": "Video starts",
            "eventCount": 2200
          },
          {
            "event": "end_playback",
            "label": "Ended playbacks",
            "eventCount": 206
          }
        ],
        "topChannels": [
          {
            "title": "ElectricNOW",
            "plays": 3441,
            "activeUsers": 155,
            "rank": 1
          },
          {
            "title": "spot on news",
            "plays": 343,
            "activeUsers": 8,
            "rank": 2
          },
          {
            "title": "ElectricNOW en Español",
            "plays": 114,
            "activeUsers": 13,
            "rank": 3
          },
          {
            "title": "Kung Fu Movies",
            "plays": 53,
            "activeUsers": 10,
            "rank": 4
          },
          {
            "title": "Cartoon Classics",
            "plays": 44,
            "activeUsers": 10,
            "rank": 5
          },
          {
            "title": "Horror Asylum",
            "plays": 28,
            "activeUsers": 7,
            "rank": 6
          },
          {
            "title": "Daily Flash",
            "plays": 25,
            "activeUsers": 7,
            "rank": 7
          },
          {
            "title": "Grindhouse Gold",
            "plays": 25,
            "activeUsers": 9,
            "rank": 8
          },
          {
            "title": "ToonOvation",
            "plays": 25,
            "activeUsers": 11,
            "rank": 9
          },
          {
            "title": "Stoner TV Network",
            "plays": 18,
            "activeUsers": 9,
            "rank": 10
          }
        ],
        "note": "Live usage is based on GA4 screen name 'Live' plus playback events that also carried the Live screen name."
      },
      "onDemand": {
        "total": {
          "screenPageViews": 3163,
          "activeUsers": 1015,
          "eventCount": 3572
        },
        "platforms": [
          {
            "platform": "web",
            "screen": "On Demand",
            "screenPageViews": 2601,
            "activeUsers": 820,
            "eventCount": 2601
          },
          {
            "platform": "Android",
            "screen": "On Demand",
            "screenPageViews": 431,
            "activeUsers": 136,
            "eventCount": 629
          },
          {
            "platform": "iOS",
            "screen": "On Demand",
            "screenPageViews": 131,
            "activeUsers": 59,
            "eventCount": 342
          }
        ],
        "note": "On Demand usage is based on GA4 screen name 'On Demand'. Title-level viewing is shown below from GA4 video_title play events."
      }
    },
    "titleViewership": {
      "period": "May 21-May 27, 2026",
      "note": "Top programs roll up fragmented GA4 play-event labels into parent shows/collections where possible, then use a GA4 filter to estimate deduped active users for each program. Play events remain the ranking metric because ads monetize playback; active users are total GA4 users who triggered matching play events for that program during the period. On-demand shows and collections only — live/FAST/linear channels (DARK MATTER TV, Kung Fu Movies, spot on news, ToonOvation, ElectricNOW en Espanol, Stoner TV Network, etc.) are excluded here and reported separately under Live channel usage and Live Channel on Roku. Top 50 may list fewer than 50 entries until the next GA4 refresh overfetches with the stricter row-level predicate. Treat this as GA-tracked viewership, not a fully cleaned catalog report yet, until the app sends content_type, series_title, season, episode, and video_id consistently.",
      "topPrograms": [
        {
          "rank": 1,
          "program": "ElectricNOW",
          "plays": 10389,
          "activeUsers": 1989,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 2,
          "examples": [
            "Electric Now",
            "Asian American Pacific Islander Month",
            "Play Ball"
          ]
        },
        {
          "rank": 2,
          "program": "The Ark",
          "plays": 9193,
          "activeUsers": 148,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 27,
          "examples": [
            "Everyone Wanted to Be On This Ship",
            "Like It Touched the Sun",
            "Get Out and Push"
          ]
        },
        {
          "rank": 3,
          "program": "Leverage",
          "plays": 5872,
          "activeUsers": 63,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 48,
          "examples": [
            "The Nigerian Job (Pilot) - 43 Min Cut",
            "The Miracle Job",
            "The Homecoming Job"
          ]
        },
        {
          "rank": 4,
          "program": "The Librarians",
          "plays": 2644,
          "activeUsers": 38,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 21,
          "examples": [
            "And the Crown of King Arthur",
            "And the Horns of a Dilemma",
            "And the Sword in the Stone"
          ]
        },
        {
          "rank": 5,
          "program": "Leverage: Redemption",
          "plays": 2161,
          "activeUsers": 42,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 17,
          "examples": [
            "The Too Many Rembrandts Job",
            "The Panamanian Job",
            "The Pyramid Job"
          ]
        },
        {
          "rank": 6,
          "program": "Almost Paradise",
          "plays": 2077,
          "activeUsers": 63,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 23,
          "examples": [
            "Finding Mabuhay",
            "It's Personal",
            "Reef Eel Soup for the Soul"
          ]
        },
        {
          "rank": 7,
          "program": "The Poly Couple",
          "plays": 878,
          "activeUsers": 64,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 11,
          "examples": [
            "So This Is How Polyamory Happens",
            "Are You Jealous",
            "Spin the Bottle"
          ]
        },
        {
          "rank": 8,
          "program": "The Librarians: The Next Chapter",
          "plays": 827,
          "activeUsers": 9,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 4,
          "examples": [
            "And the Dance of Doom!",
            "And the Ghost Train",
            "And the Deadly Drekavac"
          ]
        },
        {
          "rank": 9,
          "program": "The Outpost",
          "plays": 712,
          "activeUsers": 18,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 7,
          "examples": [
            "One Is the Loneliest Number",
            "Two Heads are Better than None",
            "Bones to Pick"
          ]
        },
        {
          "rank": 10,
          "program": "The Messenger",
          "plays": 622,
          "activeUsers": 63,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 4,
          "examples": [
            "Episode 1",
            "Episode 2",
            "Episode 3"
          ]
        },
        {
          "rank": 11,
          "program": "Adventures of Sonic the Hedgehog",
          "plays": 354,
          "activeUsers": 22,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 2,
          "examples": [
            "Super Special Sonic Search and Smash Squad",
            "Sonic Breakout",
            "Close Encounters\nof the Sonic Kind"
          ]
        },
        {
          "rank": 12,
          "program": "The Librarians: The Next Chapter Season 2 Teaser",
          "plays": 219,
          "activeUsers": 20,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 2,
          "examples": []
        }
      ],
      "topVideoTitles": [
        {
          "rank": 1,
          "title": "Electric Now",
          "plays": 10360,
          "activeUsers": 1989,
          "group": "ElectricNOW"
        },
        {
          "rank": 2,
          "title": "Everyone Wanted to Be On This Ship",
          "plays": 739,
          "activeUsers": 92,
          "group": "The Ark"
        },
        {
          "rank": 3,
          "title": "Finding Mabuhay",
          "plays": 476,
          "activeUsers": 46,
          "group": "Almost Paradise"
        },
        {
          "rank": 4,
          "title": "Like It Touched the Sun",
          "plays": 455,
          "activeUsers": 20,
          "group": "The Ark"
        },
        {
          "rank": 5,
          "title": "Get Out and Push",
          "plays": 396,
          "activeUsers": 16,
          "group": "The Ark"
        },
        {
          "rank": 6,
          "title": "The Too Many Rembrandts Job",
          "plays": 387,
          "activeUsers": 26,
          "group": "Leverage: Redemption"
        },
        {
          "rank": 7,
          "title": "We Weren't Supposed to Be Awake",
          "plays": 365,
          "activeUsers": 12,
          "group": "The Ark"
        },
        {
          "rank": 8,
          "title": "Kill or Be Killed",
          "plays": 350,
          "activeUsers": 13,
          "group": "The Ark"
        },
        {
          "rank": 9,
          "title": "Episode 1",
          "plays": 347,
          "activeUsers": 51,
          "group": "The Messenger"
        },
        {
          "rank": 10,
          "title": "The Other You",
          "plays": 346,
          "activeUsers": 13,
          "group": "The Ark"
        },
        {
          "rank": 11,
          "title": "Failed Experiment",
          "plays": 334,
          "activeUsers": 15,
          "group": "The Ark"
        },
        {
          "rank": 12,
          "title": "Museum of Death",
          "plays": 332,
          "activeUsers": 15,
          "group": "The Ark"
        },
        {
          "rank": 13,
          "title": "Anomaly",
          "plays": 326,
          "activeUsers": 14,
          "group": "The Ark"
        },
        {
          "rank": 14,
          "title": "The Nigerian Job (Pilot) - 43 Min Cut",
          "plays": 320,
          "activeUsers": 29,
          "group": "Leverage"
        },
        {
          "rank": 15,
          "title": "We Don't Kill Our Own",
          "plays": 299,
          "activeUsers": 10,
          "group": "The Ark"
        },
        {
          "rank": 16,
          "title": "Pretty Big Deal",
          "plays": 295,
          "activeUsers": 16,
          "group": "The Ark"
        },
        {
          "rank": 17,
          "title": "And the Crown of King Arthur",
          "plays": 289,
          "activeUsers": 25,
          "group": "The Librarians"
        },
        {
          "rank": 18,
          "title": "One Step Forward, Two Steps Back",
          "plays": 288,
          "activeUsers": 13,
          "group": "The Ark"
        },
        {
          "rank": 19,
          "title": "Hoping for Forever",
          "plays": 264,
          "activeUsers": 10,
          "group": "The Ark"
        },
        {
          "rank": 20,
          "title": "It's Personal",
          "plays": 246,
          "activeUsers": 12,
          "group": "Almost Paradise"
        },
        {
          "rank": 21,
          "title": "The Last Thing You Ever Do",
          "plays": 245,
          "activeUsers": 10,
          "group": "The Ark"
        },
        {
          "rank": 22,
          "title": "The Painful Way",
          "plays": 245,
          "activeUsers": 10,
          "group": "The Ark"
        },
        {
          "rank": 23,
          "title": "It Can't Be True",
          "plays": 241,
          "activeUsers": 12,
          "group": "The Ark"
        }
      ],
      "topChannelTitles": [
        {
          "rank": 1,
          "title": "ElectricNOW",
          "plays": 9380,
          "activeUsers": 1797
        },
        {
          "rank": 2,
          "title": "The Ark",
          "plays": 5039,
          "activeUsers": 129
        },
        {
          "rank": 3,
          "title": "Leverage",
          "plays": 3203,
          "activeUsers": 49
        },
        {
          "rank": 4,
          "title": "The Ark - Season 1",
          "plays": 2016,
          "activeUsers": 1
        },
        {
          "rank": 5,
          "title": "The Ark - Season 2",
          "plays": 1633,
          "activeUsers": 1
        },
        {
          "rank": 6,
          "title": "Leverage - Season 1",
          "plays": 1140,
          "activeUsers": 1
        },
        {
          "rank": 7,
          "title": "The Librarians (Full Series)",
          "plays": 1115,
          "activeUsers": 29
        },
        {
          "rank": 8,
          "title": "Leverage: Redemption (Seasons 1 & 2)",
          "plays": 1099,
          "activeUsers": 32
        },
        {
          "rank": 9,
          "title": "Almost Paradise - Season 1",
          "plays": 839,
          "activeUsers": 1
        },
        {
          "rank": 10,
          "title": "The Librarians - Season 1",
          "plays": 829,
          "activeUsers": 1
        },
        {
          "rank": 11,
          "title": "The Librarians: The Next Chapter",
          "plays": 773,
          "activeUsers": 1
        },
        {
          "rank": 12,
          "title": "Leverage - Season 2",
          "plays": 702,
          "activeUsers": 1
        },
        {
          "rank": 13,
          "title": "Almost Paradise (Season 1 & 2)",
          "plays": 575,
          "activeUsers": 41
        },
        {
          "rank": 14,
          "title": "The Outpost",
          "plays": 507,
          "activeUsers": 14
        },
        {
          "rank": 15,
          "title": "Leverage: Redemption -  Season 1",
          "plays": 466,
          "activeUsers": 1
        },
        {
          "rank": 16,
          "title": "The Messenger",
          "plays": 405,
          "activeUsers": 51
        }
      ],
      "topVideoTitlesNote": "Top videos shows individual on-demand video plays only. Live/FAST/linear channel rows (e.g. DARK MATTER TV, Kung Fu Movies, spot on news, ToonOvation, ElectricNOW en Espanol, Stoner TV Network) are excluded here and reported separately in 'Live channel usage' and 'Live Channel on Roku'. Top 50 may list fewer than 50 entries until the next GA4 refresh overfetches with the stricter row-level live-channel predicate."
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
        "range": "May 14-May 20, 2026",
        "appActiveUsers": 5470,
        "appSessions": 8670,
        "appEngagedSessions": 7186,
        "appEngagementRate": 82.88350634371395,
        "viewingUsers": 2358,
        "viewingShare": 43.107861060329064,
        "onDemandStartUsers": 2324,
        "onDemandStartEvents": 8145,
        "liveChannelViewers": 38,
        "livePlayEvents": 1506
      },
      "currentWeek": {
        "range": "May 21-May 27, 2026",
        "appActiveUsers": 5472,
        "appSessions": 8767,
        "appEngagedSessions": 6532,
        "appEngagementRate": 74.50667275008554,
        "viewingUsers": 2208,
        "viewingShare": 40.35087719298245,
        "onDemandStartUsers": 2171,
        "onDemandStartEvents": 8104,
        "liveChannelViewers": 43,
        "livePlayEvents": 1616
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
            "ga4AverageSessionMinutes": 13.258718967379462
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
        "range": "May 14-May 20, 2026",
        "activeUsers": 8153,
        "sessions": 14635,
        "engagedSessions": 11969,
        "engagementRate": 81.7833959685685,
        "totalEngagementSeconds": 18539738,
        "totalEngagementHours": 5149.927222222223,
        "avgEngagedMinutesPerUser": 37.899623860337705,
        "avgEngagedMinutesPerSession": 21.113469992028243,
        "ga4AverageSessionMinutes": 57.02231679435486,
        "platformBreakout": [
          {
            "platform": "Android",
            "activeUsers": 3377,
            "sessions": 5336,
            "engagedSessions": 4376,
            "avgEngagedMinutesPerUser": 16.764677721843846,
            "avgEngagedMinutesPerSession": 10.609879435282359,
            "ga4AverageSessionMinutes": 100.24513239366254
          },
          {
            "platform": "web",
            "activeUsers": 2479,
            "sessions": 5514,
            "engagedSessions": 4321,
            "avgEngagedMinutesPerUser": 63.32080139841334,
            "avgEngagedMinutesPerSession": 28.46794825293193,
            "ga4AverageSessionMinutes": 34.53649315471225
          },
          {
            "platform": "iOS",
            "activeUsers": 2297,
            "sessions": 3785,
            "engagedSessions": 3272,
            "avgEngagedMinutesPerUser": 41.53637353069221,
            "avgEngagedMinutesPerSession": 25.207146631439894,
            "ga4AverageSessionMinutes": 28.84527254365037
          }
        ],
        "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."
      },
      "currentWeek": {
        "range": "May 21-May 27, 2026",
        "activeUsers": 7561,
        "sessions": 13825,
        "engagedSessions": 10101,
        "engagementRate": 73.0632911392405,
        "totalEngagementSeconds": 20125406,
        "totalEngagementHours": 5590.390555555556,
        "avgEngagedMinutesPerUser": 44.36231098179253,
        "avgEngagedMinutesPerSession": 24.262092827004217,
        "ga4AverageSessionMinutes": 98.85318825276214,
        "platformBreakout": [
          {
            "platform": "Android",
            "activeUsers": 3126,
            "sessions": 5121,
            "engagedSessions": 3818,
            "avgEngagedMinutesPerUser": 24.709117082533588,
            "avgEngagedMinutesPerSession": 15.083128295254832,
            "ga4AverageSessionMinutes": 114.31168448409669
          },
          {
            "platform": "iOS",
            "activeUsers": 2391,
            "sessions": 3963,
            "engagedSessions": 2986,
            "avgEngagedMinutesPerUser": 43.1072006134114,
            "avgEngagedMinutesPerSession": 26.007902262595678,
            "ga4AverageSessionMinutes": 31.619433811972325
          },
          {
            "platform": "web",
            "activeUsers": 2044,
            "sessions": 4741,
            "engagedSessions": 3297,
            "avgEngagedMinutesPerUser": 75.88719015003262,
            "avgEngagedMinutesPerSession": 32.71744709273712,
            "ga4AverageSessionMinutes": 138.35633308469335
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
        "range": "May 14-May 20, 2026",
        "totalGa4ActiveUsers": 8249.0,
        "totalGa4Sessions": 14860.0,
        "totalGa4EngagementRate": 81.34589502018844,
        "landingPageUsers": 762,
        "landingPageSessions": 1130,
        "devicesPageUsers": 506,
        "devicesPageSessions": 523,
        "paidSocialUsers": 2864,
        "paidSocialSessions": 3753
      },
      "currentWeek": {
        "range": "May 21-May 27, 2026",
        "totalGa4ActiveUsers": 7944.0,
        "totalGa4Sessions": 14804.0,
        "totalGa4EngagementRate": 71.1159146176709,
        "landingPageUsers": 655,
        "landingPageSessions": 991,
        "devicesPageUsers": 138,
        "devicesPageSessions": 146,
        "paidSocialUsers": 2401,
        "paidSocialSessions": 3339
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
        "range": "May 14-May 20, 2026",
        "viewingEventUsers": 2765,
        "videoStartUsers": 2760,
        "videoStartEvents": 22239,
        "videoPlayUsers": 275,
        "videoPlayEvents": 7694,
        "videoCompleteUsers": 286,
        "videoCompleteEvents": 3284,
        "onDemandStartUsers": 2652,
        "onDemandStartEvents": 20229,
        "liveChannelViewers": 128,
        "livePlayEvents": 3897,
        "adRequestEvents": 25799,
        "adErrorEvents": 9
      },
      "currentWeek": {
        "range": "May 21-May 27, 2026",
        "viewingEventUsers": 2609,
        "videoStartUsers": 2603,
        "videoStartEvents": 21179,
        "videoPlayUsers": 252,
        "videoPlayEvents": 8809,
        "videoCompleteUsers": 298,
        "videoCompleteEvents": 3745,
        "onDemandStartUsers": 2478,
        "onDemandStartEvents": 18979,
        "liveChannelViewers": 153,
        "livePlayEvents": 4279,
        "adRequestEvents": 25045,
        "adErrorEvents": 21
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
            "previousWeek": 8128,
            "current": 7865,
            "deltaPct": -3.2357283464566926,
            "deltaVsLaunchPct": -9.69112412446894,
            "deltaVsPreviousPct": -3.2357283464566926,
            "deltaType": "percent",
            "format": "number",
            "context": "GA4 active users excluding landing-page acquisition paths."
          },
          {
            "key": "platformSessions",
            "label": "Platform sessions",
            "baseline": 13316,
            "launchBaseline": 13316,
            "previousWeek": 14651,
            "current": 14653,
            "deltaPct": 0.013650945327963961,
            "deltaVsLaunchPct": 10.040552718534094,
            "deltaVsPreviousPct": 0.013650945327963961,
            "deltaType": "percent",
            "format": "number",
            "context": "GA4 sessions excluding landing-page acquisition paths."
          },
          {
            "key": "viewingEventUsers",
            "label": "Viewing event users",
            "baseline": 1155,
            "launchBaseline": 1155,
            "previousWeek": 2765,
            "current": 2609,
            "deltaPct": -5.641952983725136,
            "deltaVsLaunchPct": 125.88744588744589,
            "deltaVsPreviousPct": -5.641952983725136,
            "deltaType": "percent",
            "format": "number",
            "context": "Users who triggered on-demand video_start or Live play events."
          },
          {
            "key": "totalEngagementHours",
            "label": "Total engaged hours",
            "baseline": 3652.995,
            "launchBaseline": 3652.995,
            "previousWeek": 5149.927222222223,
            "current": 5590.390555555556,
            "deltaPct": 8.552806949051812,
            "deltaVsLaunchPct": 53.03581186274703,
            "deltaVsPreviousPct": 8.552806949051812,
            "deltaType": "percent",
            "format": "number",
            "context": "Total GA4 engaged time converted to hours."
          },
          {
            "key": "avgEngagedMinutesPerUser",
            "label": "Avg time per user",
            "baseline": 25.072031571722718,
            "launchBaseline": 25.072031571722718,
            "previousWeek": 37.899623860337705,
            "current": 44.36231098179253,
            "deltaPct": 6.462687121454827,
            "deltaVsLaunchPct": 19.290279410069815,
            "deltaVsPreviousPct": 6.462687121454827,
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
            "previousWeek": 762,
            "current": 655,
            "deltaPct": -14.041994750656167,
            "deltaVsLaunchPct": -37.32057416267943,
            "deltaVsPreviousPct": -14.041994750656167,
            "deltaType": "percent",
            "format": "number",
            "context": "Users reaching pages with “landing” in the path."
          },
          {
            "key": "devicesPageUsers",
            "label": "Devices-page users",
            "baseline": 2028,
            "launchBaseline": 2028,
            "previousWeek": 506,
            "current": 138,
            "deltaPct": -72.72727272727273,
            "deltaVsLaunchPct": -93.19526627218934,
            "deltaVsPreviousPct": -72.72727272727273,
            "deltaType": "percent",
            "format": "number",
            "context": "Users reaching pages with “devices” in the path."
          },
          {
            "key": "paidSocialUsers",
            "label": "Paid social users",
            "baseline": 4441,
            "launchBaseline": 4441,
            "previousWeek": 2864,
            "current": 2401,
            "deltaPct": -16.166201117318437,
            "deltaVsLaunchPct": -45.935600090069805,
            "deltaVsPreviousPct": -16.166201117318437,
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
            "previousWeek": 5470,
            "current": 5472,
            "deltaPct": 0.03656307129798903,
            "deltaVsLaunchPct": 253.71687136393018,
            "deltaVsPreviousPct": 0.03656307129798903,
            "deltaType": "percent",
            "format": "number",
            "context": "People using the Apple/iOS or Android app streams; Apple TV is not yet split from the Apple/iOS stream."
          },
          {
            "key": "appSessions",
            "label": "App stream sessions",
            "baseline": 2889,
            "launchBaseline": 2889,
            "previousWeek": 8670,
            "current": 8767,
            "deltaPct": 1.118800461361015,
            "deltaVsLaunchPct": 203.46140533056422,
            "deltaVsPreviousPct": 1.118800461361015,
            "deltaType": "percent",
            "format": "number",
            "context": "GA4 sessions on the Apple/iOS and Android app streams."
          },
          {
            "key": "appEngagementRate",
            "label": "App stream engagement rate",
            "baseline": 80.96227068189685,
            "launchBaseline": 80.96227068189685,
            "previousWeek": 82.88350634371395,
            "current": 74.50667275008554,
            "deltaPct": -8.376833593628405,
            "deltaVsLaunchPct": -6.455597931811312,
            "deltaVsPreviousPct": -8.376833593628405,
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
            "previousWeek": 2765,
            "current": 2609,
            "deltaPct": -5.641952983725136,
            "deltaVsLaunchPct": 125.88744588744589,
            "deltaVsPreviousPct": -5.641952983725136,
            "deltaType": "percent",
            "format": "number",
            "context": "Users who triggered on-demand video_start or Live play events."
          },
          {
            "key": "onDemandStartUsers",
            "label": "On-demand start users",
            "baseline": 1069,
            "launchBaseline": 1069,
            "previousWeek": 2652,
            "current": 2478,
            "deltaPct": -6.561085972850679,
            "deltaVsLaunchPct": 131.80542563143126,
            "deltaVsPreviousPct": -6.561085972850679,
            "deltaType": "percent",
            "format": "number",
            "context": "Users who triggered video_start outside the Live screen."
          },
          {
            "key": "liveChannelViewers",
            "label": "Live channel viewers",
            "baseline": 121,
            "launchBaseline": 121,
            "previousWeek": 128,
            "current": 153,
            "deltaPct": 19.53125,
            "deltaVsLaunchPct": 26.446280991735538,
            "deltaVsPreviousPct": 19.53125,
            "deltaType": "percent",
            "format": "number",
            "context": "Users who triggered a Live play event."
          },
          {
            "key": "videoCompleteUsers",
            "label": "Video complete users",
            "baseline": 219,
            "launchBaseline": 219,
            "previousWeek": 286,
            "current": 298,
            "deltaPct": 4.195804195804196,
            "deltaVsLaunchPct": 36.07305936073059,
            "deltaVsPreviousPct": 4.195804195804196,
            "deltaType": "percent",
            "format": "number",
            "context": "Users who triggered video_complete."
          },
          {
            "key": "livePlayEvents",
            "label": "Live play events",
            "baseline": 3952,
            "launchBaseline": 3952,
            "previousWeek": 3897,
            "current": 4279,
            "deltaPct": 9.802412111880935,
            "deltaVsLaunchPct": 8.274291497975709,
            "deltaVsPreviousPct": 9.802412111880935,
            "deltaType": "percent",
            "format": "number",
            "context": "Total Live play events, not unique users."
          },
          {
            "key": "adRequestEvents",
            "label": "Ad request events",
            "baseline": 10589,
            "launchBaseline": 10589,
            "previousWeek": 25799,
            "current": 25045,
            "deltaPct": -2.9225938989883327,
            "deltaVsLaunchPct": 136.5190291812258,
            "deltaVsPreviousPct": -2.9225938989883327,
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
            "previousWeek": 37.899623860337705,
            "current": 44.36231098179253,
            "deltaPct": 6.462687121454827,
            "deltaVsLaunchPct": 19.290279410069815,
            "deltaVsPreviousPct": 6.462687121454827,
            "deltaType": "minutes",
            "format": "minutes",
            "context": "Total engaged time divided by active users."
          },
          {
            "key": "avgEngagedMinutesPerSession",
            "label": "Avg time per session",
            "baseline": 16.417955056179775,
            "launchBaseline": 16.417955056179775,
            "previousWeek": 21.113469992028243,
            "current": 24.262092827004217,
            "deltaPct": 3.148622834975974,
            "deltaVsLaunchPct": 7.844137770824442,
            "deltaVsPreviousPct": 3.148622834975974,
            "deltaType": "minutes",
            "format": "minutes",
            "context": "Total engaged time divided by sessions."
          },
          {
            "key": "totalEngagementHours",
            "label": "Total engaged hours",
            "baseline": 3652.995,
            "launchBaseline": 3652.995,
            "previousWeek": 5149.927222222223,
            "current": 5590.390555555556,
            "deltaPct": 8.552806949051812,
            "deltaVsLaunchPct": 53.03581186274703,
            "deltaVsPreviousPct": 8.552806949051812,
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
        "range": "May 14-May 20, 2026",
        "rows": [
          {
            "surface": "Android mobile app",
            "streamName": "ElectricNOW",
            "streamId": "12950551103",
            "platform": "Android",
            "activeUsers": 3173,
            "sessions": 4891,
            "engagedSessions": 3924,
            "eventCount": 103373,
            "engagementRate": 80.22899202617052,
            "avgEngagedMinutesPerUser": 7.991396155058305,
            "avgEngagedMinutesPerSession": 5.1843590267838895
          },
          {
            "surface": "iOS / Apple app stream",
            "streamName": "ElectricNow",
            "streamId": "12982344897",
            "platform": "iOS",
            "activeUsers": 2297,
            "sessions": 3785,
            "engagedSessions": 3272,
            "eventCount": 94701,
            "engagementRate": 86.44649933949802,
            "avgEngagedMinutesPerUser": 41.53637353069221,
            "avgEngagedMinutesPerSession": 25.207146631439894
          },
          {
            "surface": "Web",
            "streamName": "electricnow-web",
            "streamId": "13090831762",
            "platform": "web",
            "activeUsers": 1428,
            "sessions": 2234,
            "engagedSessions": 1493,
            "eventCount": 56002,
            "engagementRate": 66.83079677708147,
            "avgEngagedMinutesPerUser": 11.752602707749766,
            "avgEngagedMinutesPerSession": 7.512406744255446
          },
          {
            "surface": "Roku",
            "streamName": "electricnow-roku",
            "streamId": "13096428368",
            "platform": "web",
            "activeUsers": 1178,
            "sessions": 3474,
            "engagedSessions": 2857,
            "eventCount": 724618,
            "engagementRate": 82.23949337938976,
            "avgEngagedMinutesPerUser": 119.13115449915111,
            "avgEngagedMinutesPerSession": 40.39622913068509
          },
          {
            "surface": "Android TV / CTV",
            "streamName": "ElectricNOW tv",
            "streamId": "13118400722",
            "platform": "Android",
            "activeUsers": 204,
            "sessions": 457,
            "engagedSessions": 437,
            "eventCount": 28407,
            "engagementRate": 95.62363238512035,
            "avgEngagedMinutesPerUser": 153.2236111111111,
            "avgEngagedMinutesPerSession": 68.3974106491612
          },
          {
            "surface": "LG / webOS",
            "streamName": "electricnow-webos",
            "streamId": "12976053175",
            "platform": "web",
            "activeUsers": 0,
            "sessions": 26,
            "engagedSessions": 0,
            "eventCount": 138,
            "engagementRate": 0.0,
            "avgEngagedMinutesPerUser": 0,
            "avgEngagedMinutesPerSession": 0.0
          }
        ],
        "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."
      },
      "currentWeek": {
        "range": "May 21-May 27, 2026",
        "rows": [
          {
            "surface": "Android mobile app",
            "streamName": "ElectricNOW",
            "streamId": "12950551103",
            "platform": "Android",
            "activeUsers": 3007,
            "sessions": 4802,
            "engagedSessions": 3492,
            "eventCount": 94636,
            "engagementRate": 72.71970012494793,
            "avgEngagedMinutesPerUser": 7.781410043232458,
            "avgEngagedMinutesPerSession": 4.872698875468555
          },
          {
            "surface": "iOS / Apple app stream",
            "streamName": "ElectricNow",
            "streamId": "12982344897",
            "platform": "iOS",
            "activeUsers": 2465,
            "sessions": 4087,
            "engagedSessions": 3076,
            "eventCount": 90788,
            "engagementRate": 75.26302911671152,
            "avgEngagedMinutesPerUser": 38.46371196754564,
            "avgEngagedMinutesPerSession": 23.198690971372645
          },
          {
            "surface": "Roku",
            "streamName": "electricnow-roku",
            "streamId": "13096428368",
            "platform": "web",
            "activeUsers": 1255,
            "sessions": 3614,
            "engagedSessions": 2175,
            "eventCount": 724128,
            "engagementRate": 60.18262313226342,
            "avgEngagedMinutesPerUser": 113.05298804780877,
            "avgEngagedMinutesPerSession": 39.258854454897616
          },
          {
            "surface": "Web",
            "streamName": "electricnow-web",
            "streamId": "13090831762",
            "platform": "web",
            "activeUsers": 940,
            "sessions": 1806,
            "engagedSessions": 1259,
            "eventCount": 57401,
            "engagementRate": 69.71207087486158,
            "avgEngagedMinutesPerUser": 18.73044326241135,
            "avgEngagedMinutesPerSession": 9.748957179771134
          },
          {
            "surface": "Android TV / CTV",
            "streamName": "ElectricNOW tv",
            "streamId": "13118400722",
            "platform": "Android",
            "activeUsers": 209,
            "sessions": 491,
            "engagedSessions": 441,
            "eventCount": 42114,
            "engagementRate": 89.81670061099797,
            "avgEngagedMinutesPerUser": 226.05637958532694,
            "avgEngagedMinutesPerSession": 96.22359131025118
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
        "range": "May 14-May 20, 2026",
        "platformActiveUsers": 8128,
        "platformSessions": 14651,
        "platformEngagedSessions": 12053,
        "platformEventCount": 1004544,
        "platformEngagementRate": 82.26742201897481,
        "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition."
      },
      "currentWeek": {
        "range": "May 21-May 27, 2026",
        "platformActiveUsers": 7865,
        "platformSessions": 14653,
        "platformEngagedSessions": 10503,
        "platformEventCount": 1006754,
        "platformEngagementRate": 71.67815464410019,
        "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition."
      }
    },
    "weeklyTrend": [
      {
        "date": "May 21",
        "rawDate": "20260521",
        "activeUsers": 1030,
        "newUsers": 620,
        "sessions": 1339,
        "engagedSessions": 1090,
        "screenPageViews": 71,
        "eventCount": 29662,
        "engagementRate": 81.40403286034355
      },
      {
        "date": "May 22",
        "rawDate": "20260522",
        "activeUsers": 899,
        "newUsers": 507,
        "sessions": 1170,
        "engagedSessions": 941,
        "screenPageViews": 65,
        "eventCount": 22604,
        "engagementRate": 80.42735042735043
      },
      {
        "date": "May 23",
        "rawDate": "20260523",
        "activeUsers": 956,
        "newUsers": 536,
        "sessions": 1281,
        "engagedSessions": 1022,
        "screenPageViews": 126,
        "eventCount": 26276,
        "engagementRate": 79.78142076502732
      },
      {
        "date": "May 24",
        "rawDate": "20260524",
        "activeUsers": 1018,
        "newUsers": 565,
        "sessions": 1334,
        "engagedSessions": 1067,
        "screenPageViews": 228,
        "eventCount": 30142,
        "engagementRate": 79.98500749625187
      },
      {
        "date": "May 25",
        "rawDate": "20260525",
        "activeUsers": 1018,
        "newUsers": 594,
        "sessions": 1364,
        "engagedSessions": 1118,
        "screenPageViews": 93,
        "eventCount": 30996,
        "engagementRate": 81.96480938416423
      },
      {
        "date": "May 26",
        "rawDate": "20260526",
        "activeUsers": 934,
        "newUsers": 525,
        "sessions": 1272,
        "engagedSessions": 1001,
        "screenPageViews": 49,
        "eventCount": 23980,
        "engagementRate": 78.69496855345912
      },
      {
        "date": "May 27",
        "rawDate": "20260527",
        "activeUsers": 992,
        "newUsers": 520,
        "sessions": 1312,
        "engagedSessions": 469,
        "screenPageViews": 46,
        "eventCount": 21764,
        "engagementRate": 35.7469512195122
      }
    ],
    "monthlyTrend": [
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
        "eventCount": 27801,
        "engagementRate": 82.29587712206953
      },
      {
        "date": "May 16",
        "rawDate": "20260516",
        "activeUsers": 978,
        "newUsers": 643,
        "sessions": 1268,
        "engagedSessions": 1062,
        "screenPageViews": 93,
        "eventCount": 24315,
        "engagementRate": 83.75394321766562
      },
      {
        "date": "May 17",
        "rawDate": "20260517",
        "activeUsers": 1064,
        "newUsers": 674,
        "sessions": 1400,
        "engagedSessions": 1149,
        "screenPageViews": 131,
        "eventCount": 30067,
        "engagementRate": 82.07142857142857
      },
      {
        "date": "May 18",
        "rawDate": "20260518",
        "activeUsers": 952,
        "newUsers": 582,
        "sessions": 1233,
        "engagedSessions": 1015,
        "screenPageViews": 73,
        "eventCount": 26045,
        "engagementRate": 82.31954582319545
      },
      {
        "date": "May 19",
        "rawDate": "20260519",
        "activeUsers": 962,
        "newUsers": 560,
        "sessions": 1245,
        "engagedSessions": 999,
        "screenPageViews": 111,
        "eventCount": 30256,
        "engagementRate": 80.24096385542168
      },
      {
        "date": "May 20",
        "rawDate": "20260520",
        "activeUsers": 988,
        "newUsers": 581,
        "sessions": 1274,
        "engagedSessions": 1043,
        "screenPageViews": 96,
        "eventCount": 33086,
        "engagementRate": 81.86813186813187
      },
      {
        "date": "May 21",
        "rawDate": "20260521",
        "activeUsers": 1030,
        "newUsers": 620,
        "sessions": 1339,
        "engagedSessions": 1090,
        "screenPageViews": 71,
        "eventCount": 29662,
        "engagementRate": 81.40403286034355
      },
      {
        "date": "May 22",
        "rawDate": "20260522",
        "activeUsers": 899,
        "newUsers": 507,
        "sessions": 1170,
        "engagedSessions": 941,
        "screenPageViews": 65,
        "eventCount": 22604,
        "engagementRate": 80.42735042735043
      },
      {
        "date": "May 23",
        "rawDate": "20260523",
        "activeUsers": 956,
        "newUsers": 536,
        "sessions": 1281,
        "engagedSessions": 1022,
        "screenPageViews": 126,
        "eventCount": 26276,
        "engagementRate": 79.78142076502732
      },
      {
        "date": "May 24",
        "rawDate": "20260524",
        "activeUsers": 1018,
        "newUsers": 565,
        "sessions": 1334,
        "engagedSessions": 1067,
        "screenPageViews": 228,
        "eventCount": 30142,
        "engagementRate": 79.98500749625187
      },
      {
        "date": "May 25",
        "rawDate": "20260525",
        "activeUsers": 1018,
        "newUsers": 594,
        "sessions": 1364,
        "engagedSessions": 1118,
        "screenPageViews": 93,
        "eventCount": 30996,
        "engagementRate": 81.96480938416423
      },
      {
        "date": "May 26",
        "rawDate": "20260526",
        "activeUsers": 934,
        "newUsers": 525,
        "sessions": 1272,
        "engagedSessions": 1001,
        "screenPageViews": 49,
        "eventCount": 23980,
        "engagementRate": 78.69496855345912
      },
      {
        "date": "May 27",
        "rawDate": "20260527",
        "activeUsers": 992,
        "newUsers": 520,
        "sessions": 1312,
        "engagedSessions": 469,
        "screenPageViews": 46,
        "eventCount": 21764,
        "engagementRate": 35.7469512195122
      }
    ],
    "appSectionUsage": {
      "period": "May 21-May 27, 2026",
      "metric": "GA4 active users and engaged time",
      "rows": [
        {
          "section": "Home",
          "definition": "Home/content browsing activity inferred from GA4 screen and path labels such as Home, On Demand, PDP, Player, Category, and Search.",
          "activeUsers": 1060,
          "sessions": 2786,
          "engagedSessions": 2251,
          "screenPageViews": 10795,
          "eventCount": 45391,
          "engagementRate": 80.79684134960516,
          "totalEngagementSeconds": 952582,
          "totalEngagementHours": 264.6061111111111,
          "avgEngagedMinutesPerUser": 14.977704402515723,
          "avgEngagedMinutesPerSession": 5.698624072744676,
          "sharePct": 61.4
        },
        {
          "section": "En Espanol",
          "definition": "Spanish-language section activity inferred from GA4 labels containing En Espanol, Español, Espanol, Spanish, or matching paths.",
          "activeUsers": 8,
          "sessions": 11,
          "engagedSessions": 10,
          "screenPageViews": 19,
          "eventCount": 59,
          "engagementRate": 90.9090909090909,
          "totalEngagementSeconds": 302,
          "totalEngagementHours": 0.08388888888888889,
          "avgEngagedMinutesPerUser": 0.6291666666666667,
          "avgEngagedMinutesPerSession": 0.4575757575757576,
          "sharePct": 0.5
        },
        {
          "section": "Live TV",
          "definition": "Live TV activity inferred from GA4 Live screen/path labels.",
          "activeUsers": 491,
          "sessions": 1921,
          "engagedSessions": 1626,
          "screenPageViews": 3917,
          "eventCount": 58830,
          "engagementRate": 84.64341488807912,
          "totalEngagementSeconds": 5547397,
          "totalEngagementHours": 1540.943611111111,
          "avgEngagedMinutesPerUser": 188.30268160217244,
          "avgEngagedMinutesPerSession": 48.12942044074267,
          "sharePct": 28.4
        },
        {
          "section": "My Stuff",
          "definition": "Saved or personal-list activity inferred from My Stuff, My List, Mylist, Watchlist, and Favorites labels.",
          "activeUsers": 55,
          "sessions": 128,
          "engagedSessions": 112,
          "screenPageViews": 337,
          "eventCount": 341,
          "engagementRate": 87.5,
          "totalEngagementSeconds": 372,
          "totalEngagementHours": 0.10333333333333333,
          "avgEngagedMinutesPerUser": 0.11272727272727273,
          "avgEngagedMinutesPerSession": 0.0484375,
          "sharePct": 3.2
        },
        {
          "section": "Settings",
          "definition": "Settings/account activity inferred from Settings, Account, Profile, and Preferences labels.",
          "activeUsers": 112,
          "sessions": 195,
          "engagedSessions": 173,
          "screenPageViews": 374,
          "eventCount": 429,
          "engagementRate": 88.71794871794872,
          "totalEngagementSeconds": 2567,
          "totalEngagementHours": 0.7130555555555556,
          "avgEngagedMinutesPerUser": 0.38199404761904765,
          "avgEngagedMinutesPerSession": 0.2194017094017094,
          "sharePct": 6.5
        }
      ],
      "note": "This section uses the current GA4 screen/path labels to infer the five app navigation areas in the order Home, En Espanol, Live TV, My Stuff, and Settings. A user can appear in more than one section. For cleaner reporting, the app should send a stable app_section value with exactly these five section names."
    },
    "rokuAppEngagement": {
      "sourceLabel": "Roku App Engagement email report",
      "sourceDetail": "Roku app engagement is parsed from the latest Roku App Engagement PDF emailed from bdp_noreply@data.roku.com. It measures Roku app/channel-store usage and is shown separately from GA4 app/web metrics.",
      "reportPeriod": "8 days ago for 7 days Time Grain is day",
      "channelStoreCode": "us",
      "reportGenerated": "May 28, 2026 at 7:08 AM PDT",
      "dateLabels": [
        "Wed May 20",
        "Thu May 21",
        "Fri May 22",
        "Sat May 23",
        "Sun May 24",
        "Mon May 25",
        "Tue May 26"
      ],
      "metrics": {
        "newInstalls": 274,
        "uninstalls": 175,
        "netInstalls": 99,
        "cumulativeInstalls": 287981,
        "avgDailyViewers": 276,
        "avgMinPerViewer": 90.65,
        "totalHoursStreamed": 2915
      },
      "reportEmailDate": "2026-05-28T14:08:41+00:00",
      "attachmentFilename": "App_Engagement_2026-05-28T0708.pdf"
    },
    "visitSummary": {
      "source": "GA4 sessions on tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths.",
      "weekly": {
        "label": "Weekly visits",
        "range": "May 21-May 27, 2026",
        "sessions": 14653,
        "activeUsers": 7865,
        "engagedSessions": 10503,
        "previousRange": "May 14-May 20, 2026",
        "previousSessions": 14651,
        "deltaVsPreviousPct": 0.013650945327963961,
        "comparisonLabel": "vs previous 7 days"
      },
      "monthly": {
        "label": "Monthly visits",
        "range": "Apr 30-May 27, 2026",
        "sessions": 52329,
        "activeUsers": 22504,
        "engagedSessions": 40779,
        "previousRange": "Apr 2-Apr 29, 2026",
        "previousSessions": 39987,
        "deltaVsPreviousPct": null,
        "comparisonLabel": "latest 28 days"
      },
      "note": "Visits are GA4 sessions, not unique people. Weekly visits use the latest 7 complete days and compare against the previous 7 complete days. Landing-page traffic remains acquisition-only and is not included here."
    },
    "manualAppleSalesUpdate": {
      "updatedAt": "2026-05-28T15:40:00+00:00",
      "source": "manual_apple_sales.json preserved after refresh",
      "totalManualAppleEntries": 4,
      "note": "Preserved May 25 Apple sale (Purchase HD 15, $14.99 gross). 4 manual entries: May 13, May 18 (2), May 25."
    },
    "googleAdsSummary": {
      "source": "Google Ads connector",
      "accountId": "4342267711",
      "customerClientId": "4342267711",
      "accountName": "Electric Entertainment",
      "period": "May 12-May 26, 2026",
      "campaignName": "PCSM - ElectricNow App Promotion - Android",
      "campaignId": "23836266606",
      "campaignType": "Android App Campaign",
      "status": "Enabled / Eligible",
      "impressions": 46962,
      "clicks": 1458,
      "ctrPct": 3.1,
      "cost": 241.08,
      "avgCpc": 0.17,
      "conversions": 443.0,
      "allConversions": 967.0,
      "conversionRatePct": 30.38,
      "costPerConversion": 0.54,
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
          "conversionRatePct": 38.57,
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
          "conversionRatePct": 23.36,
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
          "conversionRatePct": 34.17,
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
          "conversionRatePct": 26.49,
          "costPerConversion": 0.46,
          "conversionValue": 40.0
        },
        {
          "date": "2026-05-16",
          "campaignName": "PCSM - ElectricNow App Promotion - Android",
          "impressions": 6173,
          "clicks": 201,
          "ctrPct": 3.26,
          "cost": 28.98,
          "avgCpc": 0.14,
          "conversions": 46.0,
          "allConversions": 100.0,
          "conversionRatePct": 22.89,
          "costPerConversion": 0.63,
          "conversionValue": 46.0
        },
        {
          "date": "2026-05-17",
          "campaignName": "PCSM - ElectricNow App Promotion - Android",
          "impressions": 4500,
          "clicks": 139,
          "ctrPct": 3.09,
          "cost": 19.02,
          "avgCpc": 0.14,
          "conversions": 34.0,
          "allConversions": 69.0,
          "conversionRatePct": 24.46,
          "costPerConversion": 0.56,
          "conversionValue": 34.0
        },
        {
          "date": "2026-05-18",
          "campaignName": "PCSM - ElectricNow App Promotion - Android",
          "impressions": 4093,
          "clicks": 125,
          "ctrPct": 3.05,
          "cost": 21.37,
          "avgCpc": 0.17,
          "conversions": 40.0,
          "allConversions": 78.0,
          "conversionRatePct": 32.0,
          "costPerConversion": 0.53,
          "conversionValue": 40.0
        },
        {
          "date": "2026-05-19",
          "campaignName": "PCSM - ElectricNow App Promotion - Android",
          "impressions": 2668,
          "clicks": 70,
          "ctrPct": 2.62,
          "cost": 15.7,
          "avgCpc": 0.22,
          "conversions": 33.0,
          "allConversions": 70.0,
          "conversionRatePct": 47.14,
          "costPerConversion": 0.48,
          "conversionValue": 33.0
        },
        {
          "date": "2026-05-20",
          "campaignName": "PCSM - ElectricNow App Promotion - Android",
          "impressions": 2296,
          "clicks": 79,
          "ctrPct": 3.44,
          "cost": 14.36,
          "avgCpc": 0.18,
          "conversions": 24.0,
          "allConversions": 53.0,
          "conversionRatePct": 30.38,
          "costPerConversion": 0.6,
          "conversionValue": 24.0
        },
        {
          "date": "2026-05-21",
          "campaignName": "PCSM - ElectricNow App Promotion - Android",
          "impressions": 2269,
          "clicks": 69,
          "ctrPct": 3.04,
          "cost": 16.69,
          "avgCpc": 0.24,
          "conversions": 31.0,
          "allConversions": 52.0,
          "conversionRatePct": 44.93,
          "costPerConversion": 0.54,
          "conversionValue": 31.0
        },
        {
          "date": "2026-05-22",
          "campaignName": "PCSM - ElectricNow App Promotion - Android",
          "impressions": 1700,
          "clicks": 49,
          "ctrPct": 2.88,
          "cost": 10.43,
          "avgCpc": 0.21,
          "conversions": 16.0,
          "allConversions": 38.0,
          "conversionRatePct": 32.65,
          "costPerConversion": 0.65,
          "conversionValue": 16.0
        },
        {
          "date": "2026-05-23",
          "campaignName": "PCSM - ElectricNow App Promotion - Android",
          "impressions": 1487,
          "clicks": 38,
          "ctrPct": 2.56,
          "cost": 7.19,
          "avgCpc": 0.19,
          "conversions": 7.0,
          "allConversions": 25.0,
          "conversionRatePct": 18.42,
          "costPerConversion": 1.03,
          "conversionValue": 7.0
        },
        {
          "date": "2026-05-24",
          "campaignName": "PCSM - ElectricNow App Promotion - Android",
          "impressions": 2392,
          "clicks": 72,
          "ctrPct": 3.01,
          "cost": 16.29,
          "avgCpc": 0.23,
          "conversions": 16.0,
          "allConversions": 44.0,
          "conversionRatePct": 22.22,
          "costPerConversion": 1.02,
          "conversionValue": 16.0
        },
        {
          "date": "2026-05-25",
          "campaignName": "PCSM - ElectricNow App Promotion - Android",
          "impressions": 2835,
          "clicks": 98,
          "ctrPct": 3.46,
          "cost": 21.58,
          "avgCpc": 0.22,
          "conversions": 38.0,
          "allConversions": 80.0,
          "conversionRatePct": 38.78,
          "costPerConversion": 0.57,
          "conversionValue": 38.0
        },
        {
          "date": "2026-05-26",
          "campaignName": "PCSM - ElectricNow App Promotion - Android",
          "impressions": 1813,
          "clicks": 40,
          "ctrPct": 2.21,
          "cost": 12.5,
          "avgCpc": 0.31,
          "conversions": 18.0,
          "allConversions": 33.0,
          "conversionRatePct": 45.0,
          "costPerConversion": 0.69,
          "conversionValue": 18.0
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
      "plainEnglish": "Google Ads is now useful for judging paid Android app-campaign efficiency directly: it shows spend, clicks, installs/first-opens, conversion rate, and cost per conversion. This should sit beside GA4 viewing quality so we can see not only whether ads are buying installs, but whether those installs become viewers.",
      "dataFreshnessNote": "Main Google Ads campaign totals refreshed through May 26, 2026. Device and conversion-action breakouts remain from the last successful detailed segment pull until those segment queries are fixed."
    },
    "adSuccessSummary": {
      "googleAds": {
        "period": "May 12-May 26, 2026",
        "campaignName": "PCSM - ElectricNow App Promotion - Android",
        "spend": 241.08,
        "impressions": 46962,
        "clicks": 1458,
        "ctrPct": 3.1,
        "avgCpc": 0.17,
        "firstOpenConversions": 443.0,
        "allConversions": 967.0,
        "conversionRatePct": 30.38,
        "costPerConversion": 0.54,
        "source": "Google Ads connector",
        "note": "Paid acquisition looks efficient on cost, but the growth signal is mixed: Google Ads spent $241.08 from May 12-May 26, 2026, generated 46,962 paid-campaign impressions, 1,458 clicks, and 443 Android first-open conversions at about $0.54 per first open. That cost per first open is strong for app acquisition, but platform audience was down 8.0% and viewing was down 2.7% in the latest GA4 week, so the ads appear good at buying installs/opens but we still need to watch whether those paid users convert into sustained viewers and time spent. Meta remains the bigger spend driver in the latest Nathan report at $3,148.58 for 3,335 downloads, with Android cheaper than iOS; the next question for Patrick/Nathan is whether the lower-cost Android volume produces real viewing quality."
      }
    },
    "metaAdsSummary": {
      "source": "Meta Ads (Forge One / nathan@pcsocialmedia.com twice-weekly email report)",
      "reportType": "Meta Ads Performance Dashboard Summary (Meta-only, used to avoid double-counting Google Ads which is pulled via connector)",
      "emailFrom": "nathan@pcsocialmedia.com",
      "emailSubject": "ElectricNow | Meta Ads Performance Dashboard Summary (2026-05-17 to 2026-05-23)",
      "emailDate": "2026-05-25T01:59:46+00:00",
      "reportCadence": "Twice weekly (Sundays and Thursdays at 6am PST/PDT), each report covers Last 7 days",
      "period": "May 17-May 23, 2026",
      "comparison": "vs previous 7-day period",
      "spend": 3148.58,
      "impressions": 259503,
      "linkClicks": 9022,
      "costPerClick": 0.35,
      "iosDownloads": 1166,
      "androidDownloads": 2169,
      "totalDownloads": 3335,
      "costPerIosDownload": 1.35,
      "costPerAndroidDownload": 0.73,
      "costPerDownload": 0.9441,
      "deltas": {
        "spendPct": 60.4,
        "impressionsPct": 43.6,
        "costPerClickPct": 13.3,
        "linkClicksPct": 40.4,
        "iosDownloadsPct": 26.3,
        "costPerIosDownloadPct": 27.1,
        "androidDownloadsPct": 37.0,
        "costPerAndroidDownloadPct": 17.0
      },
      "campaigns": [
        {
          "name": "PCSM - ElectricNow App - Google Play",
          "platform": "Android",
          "spend": 787.21,
          "appInstalls": 1007,
          "costPerAppInstall": 0.78
        },
        {
          "name": "PCSM - ElectricNow App - iOS",
          "platform": "iOS",
          "spend": 787.18,
          "appInstalls": 583,
          "costPerAppInstall": 1.35
        },
        {
          "name": "PCSM - ElectricNow App - Google Play - Women",
          "platform": "Android",
          "spend": 787.11,
          "appInstalls": 1162,
          "costPerAppInstall": 0.68
        },
        {
          "name": "PCSM - ElectricNow App - iOS - Women",
          "platform": "iOS",
          "spend": 787.08,
          "appInstalls": 583,
          "costPerAppInstall": 1.35
        }
      ],
      "genderBreakdown": [
        {
          "gender": "male",
          "spend": 2246.81,
          "costPerAppInstall": 0.91,
          "appInstalls": 2459
        },
        {
          "gender": "female",
          "spend": 882.83,
          "costPerAppInstall": 1.02,
          "appInstalls": 868
        },
        {
          "gender": "unknown",
          "spend": 18.94,
          "costPerAppInstall": 2.37,
          "appInstalls": 8
        }
      ],
      "ageBreakdown": [
        {
          "ageRange": "55-64",
          "spend": 1066.19,
          "costPerAppInstall": 0.9,
          "appInstalls": 1191
        },
        {
          "ageRange": "65+",
          "spend": 929.17,
          "costPerAppInstall": 1.01,
          "appInstalls": 921
        },
        {
          "ageRange": "45-54",
          "spend": 654.42,
          "costPerAppInstall": 0.89,
          "appInstalls": 733
        },
        {
          "ageRange": "35-44",
          "spend": 327.78,
          "costPerAppInstall": 1.01,
          "appInstalls": 323
        },
        {
          "ageRange": "25-34",
          "spend": 146.63,
          "costPerAppInstall": 1.01,
          "appInstalls": 145
        },
        {
          "ageRange": "18-24",
          "spend": 24.39,
          "costPerAppInstall": 1.16,
          "appInstalls": 21
        },
        {
          "ageRange": "Unknown",
          "spend": 0.0,
          "costPerAppInstall": 0.0,
          "appInstalls": 1
        }
      ],
      "plainEnglish": "This is Meta paid acquisition data from Nathan / Forge One (pcsocialmedia.com). It covers Meta ad campaigns running on Facebook and Instagram that drive iOS and Android app installs for ElectricNOW. It is a separate paid channel from Google Ads (which is pulled via connector and shown above) and should be read alongside it, not added on top in a way that double-counts. These are Meta-platform ad impressions and clicks, NOT in-app ad impressions served inside the ElectricNOW app — those live in the Ad event signals panel.",
      "doubleCountingNote": "Use only Meta rows from Nathan's reports. Nathan also sends a blended Meta + Google Ads report; the Google Ads rows in that blended report are NOT used here because Google Ads is already pulled directly from the Google Ads connector. The Meta numbers shown here are independent of the Google Ads connector totals.",
      "inAppAdsDistinction": "Meta campaign impressions (259,503 this period) are paid ad placements on Meta’s own platforms (Facebook/Instagram feeds, stories, etc.) and are NOT the same as ElectricNOW in-app ad impressions counted in the Ad event signals panel."
    },
    "ga4PurchaseSignals": {
      "sourceLabel": "GA4 In-App Purchase Signals",
      "sourceShortLabel": "Google Play / Android purchase signals",
      "sourceDetail": "These are GA4 in_app_purchase events from property 497892271. They are directional purchase signals only — GA4 does not return Google Play / Android billing transaction IDs, so these rows must be reconciled against Google Play Console before being treated as financial revenue. They are intentionally kept out of the Stripe / Roku / Apple visible-sales rollup above.",
      "reconciliationLabel": "GA4 purchase signal, not reconciled revenue",
      "reconciliationDetail": "Likely Google Play / Android billing. Reconcile against Google Play Console before counting toward final sales. Do not double count if the same purchase later appears in Stripe, Roku, Apple, or official Google Play reporting.",
      "isFinancialRevenue": false,
      "excludedFromVisiblePlatformSales": true,
      "latestDay": {
        "label": "GA4 in-app purchase signals on May 21, 2026",
        "date": "2026-05-21",
        "range": "May 21, 2026 (America/Los_Angeles)",
        "purchaseRevenue": 29.98,
        "eventCount": 2,
        "events": [
          {
            "dateHour": "2026052106",
            "eventName": "in_app_purchase",
            "platform": "Android",
            "deviceCategory": "mobile",
            "operatingSystem": "Android",
            "appVersion": "16.019",
            "country": "United States",
            "region": "Pennsylvania",
            "city": "Philadelphia",
            "sourceMedium": "(direct) / (none)",
            "transactionId": "(not set)",
            "purchaseRevenue": 14.99
          },
          {
            "dateHour": "2026052121",
            "eventName": "in_app_purchase",
            "platform": "Android",
            "deviceCategory": "smart tv",
            "operatingSystem": "Android",
            "appVersion": "16.026",
            "country": "United States",
            "region": "Washington",
            "city": "Vancouver",
            "sourceMedium": "(direct) / (none)",
            "transactionId": "(not set)",
            "purchaseRevenue": 14.99
          }
        ]
      },
      "platformSplit": [
        {
          "label": "Android · mobile",
          "platform": "Android",
          "deviceCategory": "mobile",
          "eventCount": 1,
          "purchaseRevenue": 14.99
        },
        {
          "label": "Android · smart tv",
          "platform": "Android",
          "deviceCategory": "smart tv",
          "eventCount": 1,
          "purchaseRevenue": 14.99
        }
      ],
      "appVersionSplit": [
        {
          "appVersion": "16.019",
          "platform": "Android",
          "deviceCategory": "mobile",
          "eventCount": 1,
          "purchaseRevenue": 14.99
        },
        {
          "appVersion": "16.026",
          "platform": "Android",
          "deviceCategory": "smart tv",
          "eventCount": 1,
          "purchaseRevenue": 14.99
        }
      ],
      "geoSplit": [
        {
          "country": "United States",
          "region": "Pennsylvania",
          "city": "Philadelphia",
          "eventCount": 1,
          "purchaseRevenue": 14.99
        },
        {
          "country": "United States",
          "region": "Washington",
          "city": "Vancouver",
          "eventCount": 1,
          "purchaseRevenue": 14.99
        }
      ],
      "comparisonProperty": {
        "property": "213042706",
        "result": "No in_app_purchase rows returned for 2026-05-21 from the older GA4 property; signal is only present in property 497892271."
      },
      "note": "GA4 detected $29.98 of Android in-app purchase activity on May 21, 2026 across 2 in_app_purchase events (1 Android mobile in Philadelphia at appVersion 16.019; 1 Android smart TV in Vancouver, WA at appVersion 16.026). This is most likely Google Play / Android billing. It is shown separately from Stripe, Roku, and the manual Apple App Store snapshot and is NOT included in visible platform sales until it is reconciled with Google Play Console."
    },
    "rokuLiveChannelPerformance": {
      "sourceLabel": "Roku TRC Live Channel email report",
      "sourceDetail": "TRC live-channel viewing on the Roku platform, parsed from the latest 'TRC Live Percent of Unique Viewers and Average Session' PDF emailed by bdp_noreply@data.roku.com. This is the Roku live channel that plays outside the ElectricNOW app. It is reported separately from in-app (GA4) usage and Roku App Engagement, and overlaps mean weekly rows do not sum to 100%.",
      "scopeNote": "Roku Live Channel only. Not ElectricNOW app/platform usage. Excluded from platform audience totals and GA4 figures.",
      "reportGenerated": "May 25, 2026 at 6:52 AM PDT",
      "reportEmailDate": "2026-05-25T13:53:13+00:00",
      "attachmentFilename": "TRC_Live_Percent_of_Unique_Viewers_and_Average_Session_2026-05-25T0652.pdf",
      "freshnessNote": "Section uses the latest attached TRC live-channel PDF (generated May 25, 2026 at 6:52 AM PDT). Newer daily TRC Live Dashboard emails (May 26-28) ship image-only attachments and require separate OCR/parsing before they can refresh this section.",
      "metricDefinitions": {
        "percentOfViewers": "Title unique viewers divided by total Roku live-channel unique viewers. Rows do not sum to 100% — a viewer can watch multiple titles.",
        "avgSessionHours": "Streaming hours divided by streaming starts, in hours. Measures Roku live-channel session depth, not ElectricNOW in-app session time."
      },
      "viewershipSummary": {
        "sourceLabel": "Roku Viewership Summary email report",
        "sourceDetail": "Roku live-channel viewership totals parsed from the latest 'Viewership Summary' PDF emailed by bdp_noreply@data.roku.com. Generated by Looker. Reports Roku Channel Store visits, streams, total hours streamed, and rebuffers for the prior 7 days at day grain, US channel store.",
        "scopeNote": "Roku Live Channel only (outside the ElectricNOW app). Excluded from app/platform audience totals and GA4 figures.",
        "reportGenerated": "May 28, 2026 at 7:08 AM PDT",
        "reportEmailDate": "2026-05-28T14:08:43+00:00",
        "attachmentFilename": "Viewership_Summary_2026-05-28T0708.pdf",
        "reportPeriod": "May 20 - May 26, 2026 (7 days)",
        "channelStore": "us",
        "timeGrain": "day",
        "extractionNote": "Totals computed from the 21 device rows visible in the Viewership Details table extracted from the PDF text layer. Chart visuals in the PDF (daily visits, streams, streaming ratios, rebuffers) were not exposed in the text layer, so exact daily values are not included.",
        "metricDefinitions": {
          "visits": "Roku Channel Store visits to the live channel during the report window.",
          "streams": "Number of stream starts on the Roku live channel during the report window.",
          "totalHoursStreamed": "Total hours streamed on the Roku live channel during the report window.",
          "streamsPerVisit": "streams divided by visits.",
          "avgMinutesPerStream": "totalHoursStreamed * 60 divided by streams.",
          "rebuffersPerStreamingHour": "Average rebuffers per streaming hour for the device row."
        },
        "totals": {
          "visits": 297,
          "streams": 1772,
          "totalHoursStreamed": 242,
          "streamsPerVisit": 5.97,
          "avgMinutesPerStream": 8.19,
          "deviceRowsCounted": 21
        },
        "topByStreams": [
          {
            "deviceGroup": "Amarillo_4K",
            "model": "3810R",
            "visits": 85,
            "streams": 600,
            "totalHoursStreamed": 66,
            "rebuffersPerStreamingHour": 2.7
          },
          {
            "deviceGroup": "Amarillo_4K",
            "model": "3810X",
            "visits": 18,
            "streams": 414,
            "totalHoursStreamed": 62,
            "rebuffersPerStreamingHour": 0.02
          },
          {
            "deviceGroup": "Amarillo_1080",
            "model": "3800X",
            "visits": 33,
            "streams": 294,
            "totalHoursStreamed": 21,
            "rebuffersPerStreamingHour": 0.38
          },
          {
            "deviceGroup": "Amarillo_4K",
            "model": "3810RW2",
            "visits": 42,
            "streams": 105,
            "totalHoursStreamed": 14,
            "rebuffersPerStreamingHour": 0.22
          },
          {
            "deviceGroup": "Amarillo_1080",
            "model": "3800RW",
            "visits": 13,
            "streams": 104,
            "totalHoursStreamed": 32,
            "rebuffersPerStreamingHour": 0.59
          }
        ],
        "topByHours": [
          {
            "deviceGroup": "Amarillo_4K",
            "model": "3810R",
            "visits": 85,
            "streams": 600,
            "totalHoursStreamed": 66,
            "rebuffersPerStreamingHour": 2.7
          },
          {
            "deviceGroup": "Amarillo_4K",
            "model": "3810X",
            "visits": 18,
            "streams": 414,
            "totalHoursStreamed": 62,
            "rebuffersPerStreamingHour": 0.02
          },
          {
            "deviceGroup": "Amarillo_1080",
            "model": "3800RW",
            "visits": 13,
            "streams": 104,
            "totalHoursStreamed": 32,
            "rebuffersPerStreamingHour": 0.59
          },
          {
            "deviceGroup": "Amarillo_1080",
            "model": "3800X",
            "visits": 33,
            "streams": 294,
            "totalHoursStreamed": 21,
            "rebuffersPerStreamingHour": 0.38
          },
          {
            "deviceGroup": "Amarillo_4K",
            "model": "3810RW",
            "visits": 33,
            "streams": 77,
            "totalHoursStreamed": 14,
            "rebuffersPerStreamingHour": 0.14
          }
        ],
        "caveats": [
          "Totals are sums of the 21 device rows visible in the PDF's Viewership Details table; if the underlying report has additional pages or hidden rows, those are not included.",
          "Chart-level daily values (visits, streams, streaming ratios, rebuffers) were not text-extractable from the PDF and are not shown here.",
          "rebuffers_per_streaming_hour for Athens model G135X was blank/null in the report and is omitted from rebuffer averages.",
          "This is Roku live-channel viewership outside the ElectricNOW app and is intentionally NOT folded into platform/app audience totals."
        ]
      },
      "latestWeek": {
        "weekStart": "2026-05-18",
        "label": "Week of May 18, 2026",
        "rows": [
          {
            "title": "Leverage: Redemption",
            "percentOfViewers": 53.35,
            "avgSessionHours": 0.58
          },
          {
            "title": "Leverage",
            "percentOfViewers": 41.68,
            "avgSessionHours": 0.53
          },
          {
            "title": "The Librarians",
            "percentOfViewers": 32.57,
            "avgSessionHours": 0.46
          },
          {
            "title": "The Paradise",
            "percentOfViewers": 19.66,
            "avgSessionHours": 0.58
          },
          {
            "title": "Lionheart",
            "percentOfViewers": 12.32,
            "avgSessionHours": 0.47
          },
          {
            "title": "The Ark",
            "percentOfViewers": 10.4,
            "avgSessionHours": 0.43
          },
          {
            "title": "The Outpost",
            "percentOfViewers": 5.98,
            "avgSessionHours": 0.53
          },
          {
            "title": "Wizards vs Aliens",
            "percentOfViewers": 5.06,
            "avgSessionHours": 0.36
          },
          {
            "title": "The Poly Couple",
            "percentOfViewers": 4.89,
            "avgSessionHours": 0.34
          }
        ]
      },
      "priorWeeks": [
        {
          "weekStart": "2026-05-11",
          "label": "Week of May 11, 2026",
          "rows": [
            {
              "title": "Leverage",
              "percentOfViewers": 51.94,
              "avgSessionHours": 0.58
            },
            {
              "title": "The Librarians",
              "percentOfViewers": 43.71,
              "avgSessionHours": 0.5
            },
            {
              "title": "Leverage: Redemption",
              "percentOfViewers": 31.59,
              "avgSessionHours": 0.53
            },
            {
              "title": "The Paradise",
              "percentOfViewers": 18.46,
              "avgSessionHours": 0.58
            },
            {
              "title": "White Sky",
              "percentOfViewers": 10.6,
              "avgSessionHours": 0.42
            },
            {
              "title": "The Ark",
              "percentOfViewers": 10.06,
              "avgSessionHours": 0.45
            },
            {
              "title": "The Librarian: Return to King Solomon's Mines",
              "percentOfViewers": 6.79,
              "avgSessionHours": 0.56
            },
            {
              "title": "The Outpost",
              "percentOfViewers": 6.26,
              "avgSessionHours": 0.55
            },
            {
              "title": "The Poly Couple",
              "percentOfViewers": 4.75,
              "avgSessionHours": 0.38
            }
          ]
        },
        {
          "weekStart": "2026-05-04",
          "label": "Week of May 4, 2026",
          "rows": [
            {
              "title": "Leverage",
              "percentOfViewers": 51.35,
              "avgSessionHours": 0.57
            },
            {
              "title": "The Librarians",
              "percentOfViewers": 43.99,
              "avgSessionHours": 0.48
            },
            {
              "title": "Leverage: Redemption",
              "percentOfViewers": 31.26,
              "avgSessionHours": 0.53
            },
            {
              "title": "The Paradise",
              "percentOfViewers": 17.93,
              "avgSessionHours": 0.58
            },
            {
              "title": "Jules Verne's Mysterious Island",
              "percentOfViewers": 11.51,
              "avgSessionHours": 0.46
            },
            {
              "title": "The Ark",
              "percentOfViewers": 10.53,
              "avgSessionHours": 0.45
            },
            {
              "title": "The Librarian: Return to King Solomon's Mines",
              "percentOfViewers": 6.72,
              "avgSessionHours": 0.55
            },
            {
              "title": "The Outpost",
              "percentOfViewers": 5.98,
              "avgSessionHours": 0.53
            },
            {
              "title": "Wizards vs Aliens",
              "percentOfViewers": 5.24,
              "avgSessionHours": 0.36
            },
            {
              "title": "The Poly Couple",
              "percentOfViewers": 4.7,
              "avgSessionHours": 0.37
            }
          ]
        },
        {
          "weekStart": "2026-04-27",
          "label": "Week of Apr 27, 2026",
          "rows": [
            {
              "title": "Leverage",
              "percentOfViewers": 52.46,
              "avgSessionHours": 0.58
            },
            {
              "title": "The Librarians",
              "percentOfViewers": 44.81,
              "avgSessionHours": 0.48
            },
            {
              "title": "Leverage: Redemption",
              "percentOfViewers": 31.71,
              "avgSessionHours": 0.52
            },
            {
              "title": "The Paradise",
              "percentOfViewers": 14.99,
              "avgSessionHours": 0.51
            },
            {
              "title": "The Ark",
              "percentOfViewers": 10.45,
              "avgSessionHours": 0.43
            },
            {
              "title": "A Remarkable Life",
              "percentOfViewers": 8.31,
              "avgSessionHours": 0.49
            },
            {
              "title": "The Librarian: Return to King Solomon's Mines",
              "percentOfViewers": 7.08,
              "avgSessionHours": 0.53
            },
            {
              "title": "The Outpost",
              "percentOfViewers": 6.04,
              "avgSessionHours": 0.52
            },
            {
              "title": "Jules Verne's Mysterious Island",
              "percentOfViewers": 5.81,
              "avgSessionHours": 0.76
            },
            {
              "title": "The Poly Couple",
              "percentOfViewers": 4.57,
              "avgSessionHours": 0.36
            }
          ]
        }
      ],
      "monthApril2026": {
        "label": "April 2026 (last complete month)",
        "rows": [
          {
            "title": "The Librarians",
            "percentOfViewers": 59.74,
            "avgSessionHours": 0.51
          },
          {
            "title": "Leverage",
            "percentOfViewers": 49.72,
            "avgSessionHours": 0.59
          },
          {
            "title": "Leverage: Redemption",
            "percentOfViewers": 29.87,
            "avgSessionHours": 0.52
          },
          {
            "title": "The Paradise",
            "percentOfViewers": 17.82,
            "avgSessionHours": 0.56
          },
          {
            "title": "The Outpost",
            "percentOfViewers": 8.76,
            "avgSessionHours": 0.52
          },
          {
            "title": "The Ark",
            "percentOfViewers": 7.53,
            "avgSessionHours": 0.42
          },
          {
            "title": "Jules Verne's Mysterious Island",
            "percentOfViewers": 4.74,
            "avgSessionHours": 0.5
          },
          {
            "title": "The Poly Couple",
            "percentOfViewers": 4.41,
            "avgSessionHours": 0.41
          },
          {
            "title": "Undercover Grandpa",
            "percentOfViewers": 4.14,
            "avgSessionHours": 0.56
          },
          {
            "title": "Flyboys",
            "percentOfViewers": 4.08,
            "avgSessionHours": 0.49
          }
        ]
      },
      "quarterQ12026": {
        "label": "Q1 2026 (last complete quarter)",
        "rows": [
          {
            "title": "Leverage",
            "percentOfViewers": 57.22,
            "avgSessionHours": 0.55
          },
          {
            "title": "The Librarians",
            "percentOfViewers": 55.79,
            "avgSessionHours": 0.46
          },
          {
            "title": "Leverage: Redemption",
            "percentOfViewers": 31.93,
            "avgSessionHours": 0.51
          },
          {
            "title": "The Paradise",
            "percentOfViewers": 20.79,
            "avgSessionHours": 0.54
          },
          {
            "title": "The Outpost",
            "percentOfViewers": 11.23,
            "avgSessionHours": 0.46
          },
          {
            "title": "Sir Arthur Conan Doyle's The Lost World",
            "percentOfViewers": 5.46,
            "avgSessionHours": 0.44
          },
          {
            "title": "The Tribe",
            "percentOfViewers": 4.72,
            "avgSessionHours": 0.45
          },
          {
            "title": "The Librarian: Return to King Solomon's Mines",
            "percentOfViewers": 4.61,
            "avgSessionHours": 0.5
          },
          {
            "title": "The Librarian: Curse of the Judas Chalice",
            "percentOfViewers": 4.56,
            "avgSessionHours": 0.51
          },
          {
            "title": "The Librarian: Quest for the Spear",
            "percentOfViewers": 4.33,
            "avgSessionHours": 0.56
          }
        ]
      }
    }
  };
  

  const ELECTRICNOW_ROOT = document.getElementById('electricnow-dashboard-embed') || document;
  const $ = (selector) => ELECTRICNOW_ROOT.querySelector(selector);
  
  // ---- Defensive live/FAST channel filter (reliability guardrail 2026-05-28) ----
  // Even if hosted JSON or the bundled snapshot ever ships live/FAST/linear channel
  // rows in on-demand top lists, this strips them at render time. The on-demand
  // ranking sections must NOT show live channel labels. The Live Channel on Roku
  // and Live TV sections (which legitimately render channel labels) are not touched.
  const LIVE_CHANNEL_SEED = ["DARK MATTER TV","Kung Fu Movies","spot on news","Horror Asylum","a-z Classic Flix","Box Cinema","ElectricNOW en Espanol","ElectricNOW en Espa\u00f1ol","ElectricNOW en Espa","Cartoon Classics","Grindhouse Gold","Daily Flash","ToonOvation","TooNovation","Stoner TV Network","Ghost Dimension","Fancy A Movie","Comercio TV","Play Ibiza","a-z Western Grit","SportsTVPlus","Urban Action Channel","Hollywood Classic Movies","Cowboy Classics","Celebrity Scene","Colorized.TV","Mor2CTV","4ACETV CLASSIC HITS","4ACETV","CinePast","The Health Channel","a-z Best Classic TV","The Family TV Channel","IndieBox","Rock Solid Wrestling TV","Wrestling Spotlight","DJ Central TV","POWERtube TV","MomCave","Fitness Rewind by Collage Video","MMA Futures","Beyond The Score","AMPD TV","AMusic Channel","Rockola Television","BayView Documentaries","Viajar TV","Mythica: The Darkspore","El Bumbun"];
  const LIVE_CHANNEL_PREFIXES = ["electricnow en espa","electricnow en espan"];
  const LIVE_CHANNEL_SUBSTRINGS = ["live tv","live channel","linear channel","fast channel"];
  function _enLiveNorm(v){
    if (v == null) return '';
    let s = String(v);
    try { s = s.normalize('NFKD').replace(/[\u0300-\u036f]/g,''); } catch(e) {}
    s = s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
    return s;
  }
  const LIVE_CHANNEL_NAMES = new Set(LIVE_CHANNEL_SEED.map(_enLiveNorm).filter(Boolean));
  function _enIsLive(v){
    const n = _enLiveNorm(v);
    if (!n) return false;
    if (LIVE_CHANNEL_NAMES.has(n)) return true;
    for (const p of LIVE_CHANNEL_PREFIXES){ if (p && (n === p || n.startsWith(p))) return true; }
    for (const sub of LIVE_CHANNEL_SUBSTRINGS){ if (n.indexOf(sub) >= 0) return true; }
    return false;
  }
  const _enFields = ["program","title","group","channelTitle","channel_title","parent","parentLabel","label","show","collection","groupedTitle"];
  function _enRowIsLive(row){
    if (!row || typeof row !== 'object') return false;
    for (const f of _enFields){ if (f in row && _enIsLive(row[f])) return true; }
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

  let data = window.DASHBOARD_DATA || window.ELECTRICNOW_DASHBOARD_DATA;
  _enPurgeLiveFromOnDemand(data);
  const API_BASE = '__PORT_8000__'.startsWith('__') ? 'http://127.0.0.1:8000' : '__PORT_8000__';
  const HOSTED_DATA_URL = window.DASHBOARD_DATA_URL || "https://raw.githubusercontent.com/electricnow1/electricnow-dashboard-data/main/dashboard-data.json";

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

  function renderRokuLiveChannel() {
    const report = data.rokuLiveChannelPerformance;
    const section = $('#roku-live-channel');
    if (!section || !report || !report.latestWeek) {
      if (section) section.hidden = true;
      return;
    }
    section.hidden = false;
    const latest = report.latestWeek;
    const prior = (report.priorWeeks && report.priorWeeks[0]) || null;
    const priorByTitle = {};
    if (prior && Array.isArray(prior.rows)) {
      prior.rows.forEach((r) => { priorByTitle[r.title] = r; });
    }
    $('#roku-live-channel-period').textContent = latest.label || 'Latest week';
    $('#roku-live-channel-scope').textContent = report.scopeNote || 'Roku live channel only. Not ElectricNOW app or platform usage.';
    $('#roku-live-channel-note').textContent =
      `${report.sourceDetail || ''} Report generated ${report.reportGenerated || report.reportEmailDate || 'by Roku'}.`;

    const leader = latest.rows[0];
    const sessionsLeader = latest.rows.slice().sort((a, b) => (b.avgSessionHours || 0) - (a.avgSessionHours || 0))[0];
    const poly = latest.rows.find((r) => /poly couple/i.test(r.title));
    const summaryCards = [
      [
        'Latest leader by share',
        leader ? `${leader.percentOfViewers.toFixed(2)}%` : 'Not available',
        leader ? `${leader.title} (${latest.label})` : 'No leader available',
      ],
      [
        'Best session depth (latest week)',
        sessionsLeader ? `${sessionsLeader.avgSessionHours.toFixed(2)} hrs` : 'Not available',
        sessionsLeader ? `${sessionsLeader.title} avg session in hours` : 'No data',
      ],
      [
        'The Poly Couple latest week',
        poly ? `${poly.percentOfViewers.toFixed(2)}%` : 'Not in latest top rows',
        poly ? `${poly.avgSessionHours.toFixed(2)} hrs avg session this week` : 'Below tracked top titles',
      ],
      [
        'Report freshness',
        report.reportGenerated || 'Latest',
        report.attachmentFilename || report.sourceLabel || 'Roku TRC Live PDF',
      ],
    ];
    $('#roku-live-channel-summary').innerHTML = summaryCards
      .map(([label, value, detail]) => usageStat(label, value, detail))
      .join('');

    const weekHeaders = ['Title', 'Latest % viewers', 'Avg session (hrs)', 'Prior week % viewers', 'Read'];
    const weekRows = latest.rows.map((row) => {
      const p = priorByTitle[row.title];
      const priorCell = p ? `${p.percentOfViewers.toFixed(2)}%` : '\u2014';
      let read = '';
      if (p) {
        const delta = row.percentOfViewers - p.percentOfViewers;
        if (Math.abs(delta) < 0.5) read = 'Steady';
        else if (delta > 0) read = `Up ${delta.toFixed(2)} pts vs prior`;
        else read = `Down ${Math.abs(delta).toFixed(2)} pts vs prior`;
      } else {
        read = 'New to top rows';
      }
      return [
        row.title,
        `<strong>${row.percentOfViewers.toFixed(2)}%</strong>`,
        row.avgSessionHours.toFixed(2),
        priorCell,
        read,
      ];
    });
    renderRokuLiveChannelTable('#roku-live-channel-week-table', weekHeaders, weekRows);

    const monthEl = $('#roku-live-channel-month-title');
    const monthRows = (report.monthApril2026 && report.monthApril2026.rows) || [];
    if (report.monthApril2026 && monthEl) monthEl.textContent = report.monthApril2026.label;
    renderRokuLiveChannelTable('#roku-live-channel-month-table',
      ['Title', '% viewers', 'Avg session (hrs)'],
      monthRows.map((r) => [r.title, `${r.percentOfViewers.toFixed(2)}%`, r.avgSessionHours.toFixed(2)]));

    const quarterEl = $('#roku-live-channel-quarter-title');
    const quarterRows = (report.quarterQ12026 && report.quarterQ12026.rows) || [];
    if (report.quarterQ12026 && quarterEl) quarterEl.textContent = report.quarterQ12026.label;
    renderRokuLiveChannelTable('#roku-live-channel-quarter-table',
      ['Title', '% viewers', 'Avg session (hrs)'],
      quarterRows.map((r) => [r.title, `${r.percentOfViewers.toFixed(2)}%`, r.avgSessionHours.toFixed(2)]));

    $('#roku-live-channel-methodology').textContent =
      'Methodology: % of viewers = title unique viewers / total Roku live-channel unique viewers. Rows overlap and do not sum to 100% because a viewer can watch multiple titles. Avg session hours = streaming hours / streaming starts. This is Roku live-channel viewing only, outside the ElectricNOW app, and is not included in platform or app audience totals.';
    $('#roku-live-channel-freshness').textContent = report.freshnessNote || '';
    renderRokuViewershipSummary(report.viewershipSummary);
  }

  function renderRokuViewershipSummary(vs) {
    const block = $('#roku-viewership-summary-block');
    if (!block) return;
    if (!vs || !vs.totals) {
      block.hidden = true;
      return;
    }
    block.hidden = false;
    const periodEl = $('#roku-viewership-summary-period');
    if (periodEl) periodEl.textContent = vs.reportPeriod || vs.reportGenerated || 'Latest report';
    const scopeEl = $('#roku-viewership-summary-scope');
    if (scopeEl) scopeEl.textContent = vs.scopeNote || 'Roku Live Channel only. Outside the ElectricNOW app and not counted in app/platform totals.';
    const noteEl = $('#roku-viewership-summary-note');
    if (noteEl) {
      noteEl.textContent = `${vs.sourceDetail || ''} Report generated ${vs.reportGenerated || vs.reportEmailDate || 'by Roku'}. ${vs.extractionNote || ''}`.trim();
    }
    const t = vs.totals;
    const cards = [
      ['Visits (Roku live channel)', fmt.number(t.visits), `Roku Channel Store visits for ${vs.reportPeriod || 'the report window'}`],
      ['Streams', fmt.number(t.streams), `Stream starts on the Roku live channel for ${vs.reportPeriod || 'the report window'}`],
      ['Total hours streamed', fmt.number(t.totalHoursStreamed), `Total live-channel hours for ${vs.reportPeriod || 'the report window'}`],
      ['Streams per visit', (t.streamsPerVisit != null ? t.streamsPerVisit.toFixed(2) : '—'), 'streams / visits across visible device rows'],
      ['Avg minutes per stream', (t.avgMinutesPerStream != null ? t.avgMinutesPerStream.toFixed(2) : '—'), 'total hours * 60 / streams across visible device rows'],
      ['Device rows counted', fmt.number(t.deviceRowsCounted || 0), 'Rows extracted from the PDF Viewership Details table'],
    ];
    $('#roku-viewership-summary-cards').innerHTML = cards
      .map(([label, value, detail]) => usageStat(label, value, detail))
      .join('');
    const streamsHeaders = ['Device group', 'Model', 'Visits', 'Streams', 'Hours streamed', 'Rebuffers / streaming hr'];
    const streamsRows = (vs.topByStreams || []).map((r) => [
      r.deviceGroup, r.model, fmt.number(r.visits), `<strong>${fmt.number(r.streams)}</strong>`,
      fmt.number(r.totalHoursStreamed),
      r.rebuffersPerStreamingHour != null ? r.rebuffersPerStreamingHour.toFixed(2) : '—',
    ]);
    renderRokuLiveChannelTable('#roku-viewership-summary-streams-table', streamsHeaders, streamsRows);
    const hoursHeaders = ['Device group', 'Model', 'Visits', 'Streams', 'Hours streamed', 'Rebuffers / streaming hr'];
    const hoursRows = (vs.topByHours || []).map((r) => [
      r.deviceGroup, r.model, fmt.number(r.visits), fmt.number(r.streams),
      `<strong>${fmt.number(r.totalHoursStreamed)}</strong>`,
      r.rebuffersPerStreamingHour != null ? r.rebuffersPerStreamingHour.toFixed(2) : '—',
    ]);
    renderRokuLiveChannelTable('#roku-viewership-summary-hours-table', hoursHeaders, hoursRows);
    const caveatsEl = $('#roku-viewership-summary-caveats');
    if (caveatsEl) {
      const caveats = Array.isArray(vs.caveats) ? vs.caveats.join(' ') : '';
      caveatsEl.textContent = caveats;
    }
  }

  function renderRokuLiveChannelTable(selector, headers, rows) {
    const el = $(selector);
    if (!el) return;
    el.innerHTML = `
      <table>
        <thead><tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    `;
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
      'On-demand videos only. Live-channel (FAST/linear) viewing is excluded from this list and reported separately under Live channel usage and Live Channel on Roku. Individual video titles are ranked by GA4 play events, regardless of collection. Collection/show is the best available parent label inferred from GA4 channel_title or grouped title labels; blanks mean GA4 did not provide a reliable parent collection for that video.';
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

  function ensureGa4PurchaseSection() {
    let section = document.getElementById('ga4-purchase-signals');
    if (section) return section;
    const purchases = document.getElementById('purchases');
    if (!purchases) return null;
    const sideNav = document.querySelector('#electricnow-dashboard-embed .side-nav');
    if (sideNav && !sideNav.querySelector('a[href="#ga4-purchase-signals"]')) {
      const purchaseLink = sideNav.querySelector('a[href="#purchases"]');
      const link = document.createElement('a');
      link.href = '#ga4-purchase-signals';
      link.setAttribute('data-testid', 'nav-ga4-purchase-signals');
      link.textContent = 'GA4 purchase signals';
      if (purchaseLink && purchaseLink.nextSibling) {
        sideNav.insertBefore(link, purchaseLink.nextSibling);
      } else {
        sideNav.appendChild(link);
      }
    }
    section = document.createElement('section');
    section.className = 'panel';
    section.id = 'ga4-purchase-signals';
    section.setAttribute('aria-labelledby', 'ga4-purchase-signals-title');
    section.setAttribute('data-testid', 'section-ga4-purchase-signals');
    section.innerHTML = `
      <div class="panel-header">
        <div>
          <p class="eyebrow">GA4 purchase signal — not reconciled revenue</p>
          <h2 id="ga4-purchase-signals-title">GA4 In-App Purchase Signals (Google Play / Android)</h2>
        </div>
        <span class="period-chip" id="ga4-purchase-signals-period">Latest</span>
      </div>
      <p id="ga4-purchase-signals-note" class="panel-note"></p>
      <div id="ga4-purchase-signals-callout" class="sales-summary"></div>
      <div id="ga4-purchase-signals-splits" class="sales-summary"></div>
      <div id="ga4-purchase-signals-events" class="table-wrap"></div>
      <p id="ga4-purchase-signals-reconcile" class="sales-note"></p>
    `;
    const parent = purchases.parentNode;
    if (!parent) return null;
    if (parent.classList && parent.classList.contains('dashboard-grid')) {
      parent.parentNode.insertBefore(section, parent.nextSibling);
    } else {
      parent.insertBefore(section, purchases.nextSibling);
    }
    return section;
  }

  function renderGa4PurchaseSignals() {
    const signals = data.ga4PurchaseSignals;
    const section = ensureGa4PurchaseSection();
    if (!section) return;
    if (!signals || typeof signals !== 'object') {
      section.hidden = true;
      return;
    }
    section.hidden = false;

    const latest = signals.latestDay || {};
    const periodChip = $('#ga4-purchase-signals-period');
    if (periodChip) periodChip.textContent = latest.range || latest.date || 'Latest GA4 signal';

    const noteEl = $('#ga4-purchase-signals-note');
    if (noteEl) noteEl.textContent = signals.sourceDetail || '';

    const platformRows = (signals.platformSplit || [])
      .map((row) => `
        <li>
          <span>${escapeHtml(row.label || `${row.platform || ''} · ${row.deviceCategory || ''}`)}</span>
          <strong>${fmt.number(row.eventCount)} events / ${fmt.currency(row.purchaseRevenue)}</strong>
        </li>
      `)
      .join('');
    const appVersionRows = (signals.appVersionSplit || [])
      .map((row) => `
        <li>
          <span>${escapeHtml(`appVersion ${row.appVersion || 'unknown'} · ${row.platform || ''} ${row.deviceCategory || ''}`.trim())}</span>
          <strong>${fmt.number(row.eventCount)} events / ${fmt.currency(row.purchaseRevenue)}</strong>
        </li>
      `)
      .join('');
    const geoRows = (signals.geoSplit || [])
      .map((row) => {
        const place = [row.city, row.region, row.country].filter(Boolean).join(', ');
        return `
        <li>
          <span>${escapeHtml(place || 'Unknown location')}</span>
          <strong>${fmt.number(row.eventCount)} events / ${fmt.currency(row.purchaseRevenue)}</strong>
        </li>
      `;
      })
      .join('');

    const callout = $('#ga4-purchase-signals-callout');
    if (callout) {
      callout.innerHTML = `
        <div class="sales-callout">
          <span>${escapeHtml(signals.sourceLabel || 'GA4 In-App Purchase Signals')}</span>
          <strong>${fmt.number(latest.eventCount)} events / ${fmt.currency(latest.purchaseRevenue)}</strong>
          <p>${escapeHtml(latest.label || latest.range || '')}. ${escapeHtml(signals.reconciliationLabel || '')}. ${escapeHtml(signals.reconciliationDetail || '')}</p>
        </div>
        <div class="sales-audit">
          <span>Why this is separated</span>
          <strong>Not in visible platform sales</strong>
          <p>This GA4 in_app_purchase signal is excluded from the Stripe / Roku / Apple visible-sales rollup above. It is shown here as a directional Google Play / Android billing signal until it can be reconciled against Google Play Console reporting.</p>
        </div>
      `;
    }

    const splits = $('#ga4-purchase-signals-splits');
    if (splits) {
      const hasSplits = platformRows || appVersionRows || geoRows;
      splits.innerHTML = hasSplits
        ? `
          <div class="sales-callout">
            <span>Platform / device split</span>
            <ul class="sales-source-list">${platformRows || '<li><span>No split</span><strong>—</strong></li>'}</ul>
          </div>
          <div class="sales-callout">
            <span>App version split</span>
            <ul class="sales-source-list">${appVersionRows || '<li><span>No split</span><strong>—</strong></li>'}</ul>
          </div>
          <div class="sales-callout">
            <span>Geography</span>
            <ul class="sales-source-list">${geoRows || '<li><span>No split</span><strong>—</strong></li>'}</ul>
          </div>
        `
        : '';
    }

    const eventsWrap = $('#ga4-purchase-signals-events');
    const events = (latest && latest.events) || [];
    if (eventsWrap) {
      if (events.length) {
        const headerRow = `
          <thead>
            <tr>
              <th>Date / hour</th>
              <th>Event</th>
              <th>Platform / device</th>
              <th>App version</th>
              <th>Location</th>
              <th>Source / medium</th>
              <th>Transaction ID</th>
              <th>Revenue</th>
            </tr>
          </thead>
        `;
        const bodyRows = events
          .map((row) => {
            const place = [row.city, row.region, row.country].filter(Boolean).join(', ');
            return `
              <tr>
                <td>${escapeHtml(row.dateHour || '')}</td>
                <td>${escapeHtml(row.eventName || '')}</td>
                <td>${escapeHtml(`${row.platform || ''} · ${row.deviceCategory || ''}`.trim())}</td>
                <td>${escapeHtml(row.appVersion || '')}</td>
                <td>${escapeHtml(place)}</td>
                <td>${escapeHtml(row.sourceMedium || '')}</td>
                <td>${escapeHtml(row.transactionId || '(not set)')}</td>
                <td><strong>${fmt.currency(row.purchaseRevenue)}</strong></td>
              </tr>
            `;
          })
          .join('');
        eventsWrap.innerHTML = `<table>${headerRow}<tbody>${bodyRows}</tbody></table>`;
      } else {
        eventsWrap.innerHTML = '';
      }
    }

    const reconcile = $('#ga4-purchase-signals-reconcile');
    if (reconcile) {
      const comparison = signals.comparisonProperty
        ? ` ${signals.comparisonProperty.result || ''}`
        : '';
      reconcile.textContent = `${signals.note || ''}${comparison}`.trim();
    }
  }


  function ensureMetaAdsSection() {
    let section = document.getElementById('meta-ads');
    if (section) return section;
    const googleAds = document.getElementById('google-ads');
    if (!googleAds) return null;
    const sideNav = document.querySelector('#electricnow-dashboard-embed .side-nav');
    if (sideNav && !sideNav.querySelector('a[href="#meta-ads"]')) {
      const gaLink = sideNav.querySelector('a[href="#google-ads"]');
      const link = document.createElement('a');
      link.href = '#meta-ads';
      link.setAttribute('data-testid', 'nav-meta-ads');
      link.textContent = 'Meta Ads';
      if (gaLink && gaLink.nextSibling) {
        sideNav.insertBefore(link, gaLink.nextSibling);
      } else if (sideNav) {
        sideNav.appendChild(link);
      }
    }
    section = document.createElement('section');
    section.className = 'panel google-ads-panel';
    section.id = 'meta-ads';
    section.setAttribute('aria-labelledby', 'meta-ads-title');
    section.setAttribute('data-testid', 'section-meta-ads');
    section.innerHTML = '' +
      '<div class="panel-header">' +
        '<div>' +
          '<p class="eyebrow">Paid acquisition efficiency \u2014 Meta</p>' +
          '<h2 id="meta-ads-title">Meta Ads \u2014 Paid App Campaigns</h2>' +
        '</div>' +
        '<span class="period-chip" id="meta-ads-period">Latest</span>' +
      '</div>' +
      '<p id="meta-ads-note" class="panel-note"></p>' +
      '<div class="usage-card-grid google-ads-kpis" id="meta-ads-kpis" data-testid="meta-ads-kpis"></div>' +
      '<div class="google-ads-split">' +
        '<div><h3>By campaign</h3><div id="meta-ads-campaigns" class="google-ads-action-list" data-testid="meta-ads-campaigns"></div></div>' +
        '<div><h3>By gender</h3><div id="meta-ads-gender" class="google-ads-action-list" data-testid="meta-ads-gender"></div></div>' +
      '</div>' +
      '<h3>By age</h3>' +
      '<div id="meta-ads-age" class="google-ads-device-list" data-testid="meta-ads-age"></div>' +
      '<p class="panel-note google-ads-context" id="meta-ads-plain"></p>' +
      '<p class="panel-note" id="meta-ads-distinction"></p>';
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
        (summary.source || 'Meta Ads via Forge One email report') +
        '. Period ' + (summary.period || '') +
        ' (' + (summary.comparison || 'vs previous period') + '). ' +
        'These numbers count Meta-platform impressions and clicks on Facebook/Instagram, NOT ElectricNOW in-app ad impressions, and they are independent of the Google Ads connector totals above.';
    }

    function deltaLabel(value) {
      if (value === null || value === undefined || Number.isNaN(value)) return '';
      const sign = value > 0 ? '\u25B2 +' : (value < 0 ? '\u25BC ' : '');
      return sign + Number(value).toFixed(1) + '% vs previous period';
    }
    const deltas = summary.deltas || {};

    const kpiCards = [
      usageStat('Meta spend', fmt.currency(summary.spend), deltaLabel(deltas.spendPct) || 'Total Meta paid spend for the period'),
      usageStat('Impressions', fmt.number(summary.impressions), deltaLabel(deltas.impressionsPct) || 'Meta platform impressions (NOT in-app ad impressions)'),
      usageStat('Link clicks', fmt.number(summary.linkClicks), deltaLabel(deltas.linkClicksPct) || 'Clicks to the App Store / Play Store from Meta ads'),
      usageStat('Cost / click', fmt.currency(summary.costPerClick), deltaLabel(deltas.costPerClickPct) || 'Average Meta cost per link click'),
      usageStat('iOS downloads', fmt.number(summary.iosDownloads), deltaLabel(deltas.iosDownloadsPct) || 'App Store installs attributed to Meta'),
      usageStat('Cost / iOS download', fmt.currency(summary.costPerIosDownload), deltaLabel(deltas.costPerIosDownloadPct) || 'Meta spend divided by iOS downloads'),
      usageStat('Android downloads', fmt.number(summary.androidDownloads), deltaLabel(deltas.androidDownloadsPct) || 'Play Store installs attributed to Meta'),
      usageStat('Cost / Android download', fmt.currency(summary.costPerAndroidDownload), deltaLabel(deltas.costPerAndroidDownloadPct) || 'Meta spend divided by Android downloads'),
      usageStat('Total downloads', fmt.number(summary.totalDownloads), 'iOS + Android downloads attributed to Meta'),
    ];
    const kpisEl = $('#meta-ads-kpis');
    if (kpisEl) kpisEl.innerHTML = kpiCards.join('');

    const campaigns = Array.isArray(summary.campaigns) ? summary.campaigns : [];
    const campaignsEl = $('#meta-ads-campaigns');
    if (campaignsEl) {
      campaignsEl.innerHTML = campaigns.map(function (row) {
        return '<div class="google-ads-action-row">' +
          '<header><span>' + escapeHtml((row.name || '') + ' (' + (row.platform || '') + ')') + '</span>' +
          '<strong>' + fmt.currency(row.spend) + '</strong></header>' +
          '<em>' + fmt.number(row.appInstalls) + ' app installs \u00b7 ' + fmt.currency(row.costPerAppInstall) + ' / install</em>' +
        '</div>';
      }).join('');
    }

    const genders = Array.isArray(summary.genderBreakdown) ? summary.genderBreakdown : [];
    const genderEl = $('#meta-ads-gender');
    if (genderEl) {
      genderEl.innerHTML = genders.map(function (row) {
        const label = String(row.gender || 'unknown');
        const niceLabel = label.charAt(0).toUpperCase() + label.slice(1);
        return '<div class="google-ads-action-row">' +
          '<header><span>' + escapeHtml(niceLabel) + '</span>' +
          '<strong>' + fmt.currency(row.spend) + '</strong></header>' +
          '<em>' + fmt.number(row.appInstalls) + ' installs \u00b7 ' + fmt.currency(row.costPerAppInstall) + ' / install</em>' +
        '</div>';
      }).join('');
    }

    const ages = Array.isArray(summary.ageBreakdown) ? summary.ageBreakdown : [];
    const totalAgeSpend = ages.reduce(function (sum, row) { return sum + (toFiniteNumber(row.spend) || 0); }, 0) || 1;
    const ageEl = $('#meta-ads-age');
    if (ageEl) {
      ageEl.innerHTML = ages.map(function (row) {
        const spend = toFiniteNumber(row.spend) || 0;
        const share = (spend / totalAgeSpend) * 100;
        const width = Math.max(3, share);
        return '<div class="google-ads-device-row">' +
          '<header><span>' + escapeHtml(String(row.ageRange || 'Unknown')) + '</span>' +
          '<strong>' + fmt.currency(row.spend) + '</strong></header>' +
          '<div class="share-track" aria-hidden="true"><div class="share-fill" style="width:' + width.toFixed(1) + '%"></div></div>' +
          '<div class="google-ads-device-metrics">' +
            '<em>' + fmt.number(row.appInstalls) + ' installs</em>' +
            '<em>' + fmt.currency(row.costPerAppInstall) + ' / install</em>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    const plainEl = $('#meta-ads-plain');
    if (plainEl) plainEl.textContent = summary.plainEnglish || '';
    const distEl = $('#meta-ads-distinction');
    if (distEl) {
      distEl.textContent =
        (summary.inAppAdsDistinction || '') + ' ' + (summary.doubleCountingNote || '');
    }
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
    renderGa4PurchaseSignals();
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
    renderMetaAds();
    renderRokuLiveChannel();
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

})();
