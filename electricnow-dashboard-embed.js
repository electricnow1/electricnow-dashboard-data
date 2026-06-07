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
    mount.outerHTML = "<div id=\"electricnow-dashboard-embed\" class=\"app-shell\">\n      <aside class=\"sidebar\" aria-label=\"Dashboard sections\">\n        <a class=\"brand\" href=\"#overview\" data-testid=\"link-overview\">\n          <svg class=\"brand-mark\" viewBox=\"0 0 48 48\" aria-hidden=\"true\">\n            <path d=\"M30 4 9 28h13l-4 16 22-26H27l3-14Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n            <path d=\"M27 12 15 26h11l-2 9 11-14H24l3-9Z\" fill=\"currentColor\" />\n          </svg>\n          <span><strong>Electric</strong><strong>NOW</strong><small>Growth dashboard</small></span>\n        </a>\n        <nav class=\"side-nav\">\n          <a href=\"#overview\" data-testid=\"nav-overview\">Overview</a>\n          <a href=\"#purchases\" data-testid=\"nav-purchases\">Purchases</a>\n          <a href=\"#live\" data-testid=\"nav-live\">Live TV</a>\n          <a href=\"#sections\" data-testid=\"nav-sections\">App sections</a>\n          <a href=\"#viewership\" data-testid=\"nav-viewership\">Viewership</a>\n          <a href=\"#titles\" data-testid=\"nav-titles\">Top titles</a>\n          <a href=\"#videos\" data-testid=\"nav-videos\">Top videos</a>\n          <a href=\"#platforms\" data-testid=\"nav-platforms\">Platforms</a>\n          <a href=\"#roku-app\" data-testid=\"nav-roku-app\">Roku app</a>\n          <a href=\"#funnel\" data-testid=\"nav-funnel\">App funnel</a>\n          <a href=\"#ads\" data-testid=\"nav-ads\">Ad signals</a>\n          <a href=\"#google-ads\" data-testid=\"nav-google-ads\">Google Ads</a>\n          <a href=\"#acquisition\" data-testid=\"nav-acquisition\">Acquisition</a>\n          <a href=\"#content\" data-testid=\"nav-content\">Content</a>\n        </nav>\n        <div class=\"source-card\">\n          <span>Source</span>\n          <strong>Internal GA4 pull</strong>\n          <p>Property 497892271. Reconcile with app-store, Amagi, ad-server, YouTube, and Meta reporting.</p>\n        </div>\n      </aside>\n\n      <header class=\"topbar\">\n        <div>\n          <p class=\"eyebrow\">Private snapshot</p>\n          <h1>ElectricNOW performance dashboard</h1>\n        </div>\n        <div class=\"topbar-actions\">\n          <label class=\"select-label\" for=\"period-select\">Period</label>\n          <select id=\"period-select\" data-testid=\"select-period\">\n            <option value=\"currentWeek\">Latest app usage</option>\n            <option value=\"weekToDate\">Apr 28-30 watch</option>\n          </select>\n          <button class=\"ghost-button refresh-button\" type=\"button\" id=\"refresh-data\" data-testid=\"button-refresh-data\">Update data</button>\n          <button class=\"ghost-button\" type=\"button\" id=\"plain-toggle\" data-testid=\"button-toggle-plain\">Plain English</button>\n          <span class=\"refresh-status\" id=\"refresh-status\" role=\"status\" aria-live=\"polite\"></span>\n        </div>\n      </header>\n\n      <main id=\"main\" class=\"main\" tabindex=\"-1\">\n        <section class=\"hero-panel\" id=\"overview\" aria-labelledby=\"overview-title\">\n          <div>\n            <p class=\"eyebrow\">Corrected metric framing</p>\n            <h2 id=\"overview-title\">Acquisition, app usage, viewing, and time are now separated.</h2>\n            <p>\n              The top scorecards now show which numbers are web acquisition, which are Apple/Android app-stream usage, which are actual viewing events, and which measure time spent across all GA4-tracked platforms.\n            </p>\n          </div>\n          <div class=\"hero-meta\">\n            <span id=\"generated-at\">Generated</span>\n            <strong id=\"source-label\">GA4 property 497892271</strong>\n          </div>\n        </section>\n\n        <section class=\"visit-strip\" id=\"visit-summary\" aria-label=\"Weekly and monthly visits\" data-testid=\"section-visit-summary\"></section>\n\n        <section class=\"plain-panel\" id=\"plain-panel\" aria-labelledby=\"plain-title\">\n          <div>\n            <p class=\"eyebrow\">Plain-English headlines</p>\n            <h2 id=\"plain-title\">What changed?</h2>\n          </div>\n          <ul id=\"insights-list\" role=\"list\" data-testid=\"list-insights\"></ul>\n        </section>\n\n        <section class=\"kpi-grid\" id=\"kpi-grid\" aria-label=\"Weekly scorecard\" data-testid=\"grid-kpis\"></section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-8\" aria-labelledby=\"traffic-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">App use and engagement</p>\n                <h2 id=\"traffic-title\">Daily app trend</h2>\n              </div>\n              <span class=\"period-chip\" id=\"trend-period\">Apr 14-30</span>\n            </div>\n            <div class=\"chart-legend\" aria-label=\"Daily trend legend\">\n              <span><i class=\"legend-swatch legend-blue\"></i>Blue line: app active users</span>\n              <span><i class=\"legend-swatch legend-green\"></i>Green line: engaged app sessions</span>\n            </div>\n            <h3>Past seven days</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Daily traffic and engagement trend\" data-testid=\"chart-traffic\"></svg>\n            </div>\n            <h3>Past month</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"monthly-traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Monthly app traffic and engagement trend\" data-testid=\"chart-monthly-traffic\"></svg>\n            </div>\n          </article>\n          <article class=\"panel span-4\" id=\"purchases\" aria-labelledby=\"purchase-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Sales baseline</p>\n                <h2 id=\"purchase-title\">In-app purchases and revenue</h2>\n              </div>\n            </div>\n            <div id=\"sales-summary\" class=\"sales-summary\" data-testid=\"section-sales-summary\"></div>\n            <div id=\"purchase-summary\" class=\"purchase-summary\" data-testid=\"section-purchases\"></div>\n            <div class=\"mini-chart-wrap\">\n              <svg id=\"purchase-chart\" viewBox=\"0 0 420 160\" role=\"img\" aria-label=\"Daily in-app purchase trend\"></svg>\n            </div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"sections\" aria-labelledby=\"sections-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">App navigation</p>\n              <h2 id=\"sections-title\">Traffic and time by app section</h2>\n            </div>\n            <span class=\"period-chip\" id=\"section-usage-period\">Latest</span>\n          </div>\n          <p id=\"section-usage-note\" class=\"panel-note\"></p>\n          <div id=\"section-usage-list\" class=\"section-usage-list\" data-testid=\"section-app-sections\"></div>\n        </section>\n\n        <section class=\"dashboard-grid three-col\" id=\"live\" aria-labelledby=\"live-title\">\n          <article class=\"panel span-4\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Live channels</p>\n                <h2 id=\"live-title\">Live TV performance</h2>\n              </div>\n            </div>\n            <div id=\"live-summary\" class=\"metric-list\" data-testid=\"section-live\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"funnel\" aria-labelledby=\"funnel-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">New app funnel</p>\n                <h2 id=\"funnel-title\">Installs to viewing</h2>\n              </div>\n            </div>\n            <div id=\"funnel-list\" class=\"bar-list\" data-testid=\"section-funnel\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"ads\" aria-labelledby=\"ads-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Monetization proxy</p>\n                <h2 id=\"ads-title\">Ad event signals</h2>\n              </div>\n            </div>\n            <div id=\"ad-list\" class=\"bar-list\" data-testid=\"section-ads\"></div>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\" id=\"viewership\" aria-labelledby=\"viewership-title\">\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2 id=\"viewership-title\">Live channel usage</h2>\n              </div>\n              <span class=\"period-chip\" id=\"content-usage-period\">Latest</span>\n            </div>\n            <div id=\"live-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-live-usage-cards\"></div>\n            <h3>Top 10 Live channels</h3>\n            <div id=\"live-channel-table\" class=\"table-wrap title-table\" data-testid=\"table-live-channels\"></div>\n            <h3>Live usage by platform</h3>\n            <div id=\"live-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-live-platforms\"></div>\n            <h3>Live playback signals</h3>\n            <div id=\"live-playback-list\" class=\"bar-list\" data-testid=\"section-live-playback\"></div>\n            <p id=\"live-usage-note\" class=\"platform-note\"></p>\n          </article>\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2>On Demand usage</h2>\n              </div>\n            </div>\n            <div id=\"ondemand-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-ondemand-usage-cards\"></div>\n            <h3>On Demand usage by platform</h3>\n            <div id=\"ondemand-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-ondemand-platforms\"></div>\n            <p id=\"ondemand-usage-note\" class=\"platform-note\"></p>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-6\" id=\"platforms\" aria-labelledby=\"platform-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Measured audience by surface</p>\n                <h2 id=\"platform-title\">Where users are coming from</h2>\n              </div>\n              <span class=\"period-chip\" id=\"platform-mix-period\">Latest</span>\n            </div>\n            <h3>Audience by GA4 stream</h3>\n            <p id=\"surface-note\" class=\"panel-note\"></p>\n            <div id=\"surface-table\" class=\"table-wrap\" data-testid=\"table-surface-breakout\"></div>\n            <h3>Audience by app, web, and connected TV platform</h3>\n            <div id=\"platform-mix\" class=\"platform-mix\" data-testid=\"section-platform-mix\"></div>\n            <p id=\"platform-note\" class=\"platform-note\"></p>\n            <h3>Average time by platform</h3>\n            <p id=\"platform-time-note\" class=\"panel-note\"></p>\n            <div id=\"platform-time-table\" class=\"table-wrap\" data-testid=\"table-platform-time\"></div>\n            <div id=\"platform-table\" class=\"table-wrap\" data-testid=\"table-platform\"></div>\n          </article>\n          <article class=\"panel span-6\" id=\"acquisition\" aria-labelledby=\"acquisition-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Audience sources</p>\n                <h2 id=\"acquisition-title\">Top acquisition</h2>\n              </div>\n            </div>\n            <div id=\"acquisition-table\" class=\"table-wrap\" data-testid=\"table-acquisition\"></div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"roku-app\" aria-labelledby=\"roku-app-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Roku app report</p>\n              <h2 id=\"roku-app-title\">Roku App Engagement</h2>\n            </div>\n            <span class=\"period-chip\" id=\"roku-app-period\">Latest</span>\n          </div>\n          <p id=\"roku-app-note\" class=\"panel-note\"></p>\n          <div id=\"roku-app-summary\" class=\"usage-card-grid roku-engagement-grid\" data-testid=\"section-roku-app-engagement\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"content\" aria-labelledby=\"content-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Content and screens</p>\n              <h2 id=\"content-title\">Top pages and app screens</h2>\n            </div>\n          </div>\n          <div id=\"content-table\" class=\"table-wrap\" data-testid=\"table-content\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"titles\" aria-labelledby=\"titles-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by program</p>\n              <h2 id=\"titles-title\">Top 50 watched shows and collections</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-title-period\">Latest</span>\n          </div>\n          <p id=\"top-title-note\" class=\"panel-note\"></p>\n          <div id=\"top-titles-table\" class=\"table-wrap title-table\" data-testid=\"table-top-titles\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"videos\" aria-labelledby=\"videos-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by individual video</p>\n              <h2 id=\"videos-title\">Top 50 individual videos played</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-video-period\">Latest</span>\n          </div>\n          <p id=\"top-video-note\" class=\"panel-note\"></p>\n          <div id=\"top-videos-table\" class=\"table-wrap title-table\" data-testid=\"table-top-videos\"></div>\n        </section>\n\n        <section class=\"panel google-ads-panel\" id=\"google-ads\" aria-labelledby=\"google-ads-title\" hidden>\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Paid acquisition efficiency</p>\n              <h2 id=\"google-ads-title\">Google Ads &mdash; Android App Campaign</h2>\n            </div>\n            <span class=\"period-chip\" id=\"google-ads-period\">Latest</span>\n          </div>\n          <p id=\"google-ads-note\" class=\"panel-note\"></p>\n          <div class=\"google-ads-campaign\" id=\"google-ads-campaign\" data-testid=\"google-ads-campaign\"></div>\n          <div class=\"usage-card-grid google-ads-kpis\" id=\"google-ads-kpis\" data-testid=\"google-ads-kpis\"></div>\n          <div class=\"google-ads-split\">\n            <div>\n              <h3>By device</h3>\n              <div id=\"google-ads-devices\" class=\"google-ads-device-list\" data-testid=\"google-ads-devices\"></div>\n            </div>\n            <div>\n              <h3>Conversion actions</h3>\n              <div id=\"google-ads-actions\" class=\"google-ads-action-list\" data-testid=\"google-ads-actions\"></div>\n            </div>\n          </div>\n          <p class=\"panel-note google-ads-context\" id=\"google-ads-plain\"></p>\n        </section>\n\n        <section class=\"panel gaps-panel\" aria-labelledby=\"gaps-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Developer follow-up</p>\n              <h2 id=\"gaps-title\">Measurement gaps to close</h2>\n            </div>\n          </div>\n          <ul id=\"gaps-list\" class=\"gap-list\" role=\"list\" data-testid=\"list-gaps\"></ul>\n        </section>\n\n      </main>\n    </div>";
  } else if (!document.getElementById('electricnow-dashboard-embed')) {
    const container = document.createElement('div');
    container.innerHTML = "<div id=\"electricnow-dashboard-embed\" class=\"app-shell\">\n      <aside class=\"sidebar\" aria-label=\"Dashboard sections\">\n        <a class=\"brand\" href=\"#overview\" data-testid=\"link-overview\">\n          <svg class=\"brand-mark\" viewBox=\"0 0 48 48\" aria-hidden=\"true\">\n            <path d=\"M30 4 9 28h13l-4 16 22-26H27l3-14Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n            <path d=\"M27 12 15 26h11l-2 9 11-14H24l3-9Z\" fill=\"currentColor\" />\n          </svg>\n          <span><strong>Electric</strong><strong>NOW</strong><small>Growth dashboard</small></span>\n        </a>\n        <nav class=\"side-nav\">\n          <a href=\"#overview\" data-testid=\"nav-overview\">Overview</a>\n          <a href=\"#purchases\" data-testid=\"nav-purchases\">Purchases</a>\n          <a href=\"#live\" data-testid=\"nav-live\">Live TV</a>\n          <a href=\"#sections\" data-testid=\"nav-sections\">App sections</a>\n          <a href=\"#viewership\" data-testid=\"nav-viewership\">Viewership</a>\n          <a href=\"#titles\" data-testid=\"nav-titles\">Top titles</a>\n          <a href=\"#videos\" data-testid=\"nav-videos\">Top videos</a>\n          <a href=\"#platforms\" data-testid=\"nav-platforms\">Platforms</a>\n          <a href=\"#roku-app\" data-testid=\"nav-roku-app\">Roku app</a>\n          <a href=\"#funnel\" data-testid=\"nav-funnel\">App funnel</a>\n          <a href=\"#ads\" data-testid=\"nav-ads\">Ad signals</a>\n          <a href=\"#google-ads\" data-testid=\"nav-google-ads\">Google Ads</a>\n          <a href=\"#acquisition\" data-testid=\"nav-acquisition\">Acquisition</a>\n          <a href=\"#content\" data-testid=\"nav-content\">Content</a>\n        </nav>\n        <div class=\"source-card\">\n          <span>Source</span>\n          <strong>Internal GA4 pull</strong>\n          <p>Property 497892271. Reconcile with app-store, Amagi, ad-server, YouTube, and Meta reporting.</p>\n        </div>\n      </aside>\n\n      <header class=\"topbar\">\n        <div>\n          <p class=\"eyebrow\">Private snapshot</p>\n          <h1>ElectricNOW performance dashboard</h1>\n        </div>\n        <div class=\"topbar-actions\">\n          <label class=\"select-label\" for=\"period-select\">Period</label>\n          <select id=\"period-select\" data-testid=\"select-period\">\n            <option value=\"currentWeek\">Latest app usage</option>\n            <option value=\"weekToDate\">Apr 28-30 watch</option>\n          </select>\n          <button class=\"ghost-button refresh-button\" type=\"button\" id=\"refresh-data\" data-testid=\"button-refresh-data\">Update data</button>\n          <button class=\"ghost-button\" type=\"button\" id=\"plain-toggle\" data-testid=\"button-toggle-plain\">Plain English</button>\n          <span class=\"refresh-status\" id=\"refresh-status\" role=\"status\" aria-live=\"polite\"></span>\n        </div>\n      </header>\n\n      <main id=\"main\" class=\"main\" tabindex=\"-1\">\n        <section class=\"hero-panel\" id=\"overview\" aria-labelledby=\"overview-title\">\n          <div>\n            <p class=\"eyebrow\">Corrected metric framing</p>\n            <h2 id=\"overview-title\">Acquisition, app usage, viewing, and time are now separated.</h2>\n            <p>\n              The top scorecards now show which numbers are web acquisition, which are Apple/Android app-stream usage, which are actual viewing events, and which measure time spent across all GA4-tracked platforms.\n            </p>\n          </div>\n          <div class=\"hero-meta\">\n            <span id=\"generated-at\">Generated</span>\n            <strong id=\"source-label\">GA4 property 497892271</strong>\n          </div>\n        </section>\n\n        <section class=\"visit-strip\" id=\"visit-summary\" aria-label=\"Weekly and monthly visits\" data-testid=\"section-visit-summary\"></section>\n\n        <section class=\"plain-panel\" id=\"plain-panel\" aria-labelledby=\"plain-title\">\n          <div>\n            <p class=\"eyebrow\">Plain-English headlines</p>\n            <h2 id=\"plain-title\">What changed?</h2>\n          </div>\n          <ul id=\"insights-list\" role=\"list\" data-testid=\"list-insights\"></ul>\n        </section>\n\n        <section class=\"kpi-grid\" id=\"kpi-grid\" aria-label=\"Weekly scorecard\" data-testid=\"grid-kpis\"></section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-8\" aria-labelledby=\"traffic-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">App use and engagement</p>\n                <h2 id=\"traffic-title\">Daily app trend</h2>\n              </div>\n              <span class=\"period-chip\" id=\"trend-period\">Apr 14-30</span>\n            </div>\n            <div class=\"chart-legend\" aria-label=\"Daily trend legend\">\n              <span><i class=\"legend-swatch legend-blue\"></i>Blue line: app active users</span>\n              <span><i class=\"legend-swatch legend-green\"></i>Green line: engaged app sessions</span>\n            </div>\n            <h3>Past seven days</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Daily traffic and engagement trend\" data-testid=\"chart-traffic\"></svg>\n            </div>\n            <h3>Past month</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"monthly-traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Monthly app traffic and engagement trend\" data-testid=\"chart-monthly-traffic\"></svg>\n            </div>\n          </article>\n          <article class=\"panel span-4\" id=\"purchases\" aria-labelledby=\"purchase-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Sales baseline</p>\n                <h2 id=\"purchase-title\">In-app purchases and revenue</h2>\n              </div>\n            </div>\n            <div id=\"sales-summary\" class=\"sales-summary\" data-testid=\"section-sales-summary\"></div>\n            <div id=\"purchase-summary\" class=\"purchase-summary\" data-testid=\"section-purchases\"></div>\n            <div class=\"mini-chart-wrap\">\n              <svg id=\"purchase-chart\" viewBox=\"0 0 420 160\" role=\"img\" aria-label=\"Daily in-app purchase trend\"></svg>\n            </div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"sections\" aria-labelledby=\"sections-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">App navigation</p>\n              <h2 id=\"sections-title\">Traffic and time by app section</h2>\n            </div>\n            <span class=\"period-chip\" id=\"section-usage-period\">Latest</span>\n          </div>\n          <p id=\"section-usage-note\" class=\"panel-note\"></p>\n          <div id=\"section-usage-list\" class=\"section-usage-list\" data-testid=\"section-app-sections\"></div>\n        </section>\n\n        <section class=\"dashboard-grid three-col\" id=\"live\" aria-labelledby=\"live-title\">\n          <article class=\"panel span-4\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Live channels</p>\n                <h2 id=\"live-title\">Live TV performance</h2>\n              </div>\n            </div>\n            <div id=\"live-summary\" class=\"metric-list\" data-testid=\"section-live\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"funnel\" aria-labelledby=\"funnel-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">New app funnel</p>\n                <h2 id=\"funnel-title\">Installs to viewing</h2>\n              </div>\n            </div>\n            <div id=\"funnel-list\" class=\"bar-list\" data-testid=\"section-funnel\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"ads\" aria-labelledby=\"ads-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Monetization proxy</p>\n                <h2 id=\"ads-title\">Ad event signals</h2>\n              </div>\n            </div>\n            <div id=\"ad-list\" class=\"bar-list\" data-testid=\"section-ads\"></div>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\" id=\"viewership\" aria-labelledby=\"viewership-title\">\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2 id=\"viewership-title\">Live channel usage</h2>\n              </div>\n              <span class=\"period-chip\" id=\"content-usage-period\">Latest</span>\n            </div>\n            <div id=\"live-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-live-usage-cards\"></div>\n            <h3>Top 10 Live channels</h3>\n            <div id=\"live-channel-table\" class=\"table-wrap title-table\" data-testid=\"table-live-channels\"></div>\n            <h3>Live usage by platform</h3>\n            <div id=\"live-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-live-platforms\"></div>\n            <h3>Live playback signals</h3>\n            <div id=\"live-playback-list\" class=\"bar-list\" data-testid=\"section-live-playback\"></div>\n            <p id=\"live-usage-note\" class=\"platform-note\"></p>\n          </article>\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2>On Demand usage</h2>\n              </div>\n            </div>\n            <div id=\"ondemand-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-ondemand-usage-cards\"></div>\n            <h3>On Demand usage by platform</h3>\n            <div id=\"ondemand-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-ondemand-platforms\"></div>\n            <p id=\"ondemand-usage-note\" class=\"platform-note\"></p>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-6\" id=\"platforms\" aria-labelledby=\"platform-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Measured audience by surface</p>\n                <h2 id=\"platform-title\">Where users are coming from</h2>\n              </div>\n              <span class=\"period-chip\" id=\"platform-mix-period\">Latest</span>\n            </div>\n            <h3>Audience by GA4 stream</h3>\n            <p id=\"surface-note\" class=\"panel-note\"></p>\n            <div id=\"surface-table\" class=\"table-wrap\" data-testid=\"table-surface-breakout\"></div>\n            <h3>Audience by app, web, and connected TV platform</h3>\n            <div id=\"platform-mix\" class=\"platform-mix\" data-testid=\"section-platform-mix\"></div>\n            <p id=\"platform-note\" class=\"platform-note\"></p>\n            <h3>Average time by platform</h3>\n            <p id=\"platform-time-note\" class=\"panel-note\"></p>\n            <div id=\"platform-time-table\" class=\"table-wrap\" data-testid=\"table-platform-time\"></div>\n            <div id=\"platform-table\" class=\"table-wrap\" data-testid=\"table-platform\"></div>\n          </article>\n          <article class=\"panel span-6\" id=\"acquisition\" aria-labelledby=\"acquisition-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Audience sources</p>\n                <h2 id=\"acquisition-title\">Top acquisition</h2>\n              </div>\n            </div>\n            <div id=\"acquisition-table\" class=\"table-wrap\" data-testid=\"table-acquisition\"></div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"roku-app\" aria-labelledby=\"roku-app-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Roku app report</p>\n              <h2 id=\"roku-app-title\">Roku App Engagement</h2>\n            </div>\n            <span class=\"period-chip\" id=\"roku-app-period\">Latest</span>\n          </div>\n          <p id=\"roku-app-note\" class=\"panel-note\"></p>\n          <div id=\"roku-app-summary\" class=\"usage-card-grid roku-engagement-grid\" data-testid=\"section-roku-app-engagement\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"content\" aria-labelledby=\"content-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Content and screens</p>\n              <h2 id=\"content-title\">Top pages and app screens</h2>\n            </div>\n          </div>\n          <div id=\"content-table\" class=\"table-wrap\" data-testid=\"table-content\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"titles\" aria-labelledby=\"titles-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by program</p>\n              <h2 id=\"titles-title\">Top 50 watched shows and collections</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-title-period\">Latest</span>\n          </div>\n          <p id=\"top-title-note\" class=\"panel-note\"></p>\n          <div id=\"top-titles-table\" class=\"table-wrap title-table\" data-testid=\"table-top-titles\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"videos\" aria-labelledby=\"videos-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by individual video</p>\n              <h2 id=\"videos-title\">Top 50 individual videos played</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-video-period\">Latest</span>\n          </div>\n          <p id=\"top-video-note\" class=\"panel-note\"></p>\n          <div id=\"top-videos-table\" class=\"table-wrap title-table\" data-testid=\"table-top-videos\"></div>\n        </section>\n\n        <section class=\"panel google-ads-panel\" id=\"google-ads\" aria-labelledby=\"google-ads-title\" hidden>\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Paid acquisition efficiency</p>\n              <h2 id=\"google-ads-title\">Google Ads &mdash; Android App Campaign</h2>\n            </div>\n            <span class=\"period-chip\" id=\"google-ads-period\">Latest</span>\n          </div>\n          <p id=\"google-ads-note\" class=\"panel-note\"></p>\n          <div class=\"google-ads-campaign\" id=\"google-ads-campaign\" data-testid=\"google-ads-campaign\"></div>\n          <div class=\"usage-card-grid google-ads-kpis\" id=\"google-ads-kpis\" data-testid=\"google-ads-kpis\"></div>\n          <div class=\"google-ads-split\">\n            <div>\n              <h3>By device</h3>\n              <div id=\"google-ads-devices\" class=\"google-ads-device-list\" data-testid=\"google-ads-devices\"></div>\n            </div>\n            <div>\n              <h3>Conversion actions</h3>\n              <div id=\"google-ads-actions\" class=\"google-ads-action-list\" data-testid=\"google-ads-actions\"></div>\n            </div>\n          </div>\n          <p class=\"panel-note google-ads-context\" id=\"google-ads-plain\"></p>\n        </section>\n\n        <section class=\"panel gaps-panel\" aria-labelledby=\"gaps-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Developer follow-up</p>\n              <h2 id=\"gaps-title\">Measurement gaps to close</h2>\n            </div>\n          </div>\n          <ul id=\"gaps-list\" class=\"gap-list\" role=\"list\" data-testid=\"list-gaps\"></ul>\n        </section>\n\n      </main>\n    </div>";
    document.body.appendChild(container.firstElementChild);
  }

  // Embedded data snapshot (overridden at runtime by hosted JSON fetch when available).
  window.ELECTRICNOW_DASHBOARD_DATA = {
  "generatedAt": "2026-06-01 22:36 PDT",
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
      "range": "May 18-May 24, 2026",
      "start": "2026-05-18",
      "end": "2026-05-24"
    },
    "baseline": {
      "label": "Previous 7 complete days",
      "range": "May 18-May 24, 2026",
      "start": "2026-05-18",
      "end": "2026-05-24"
    },
    "currentWeek": {
      "label": "Latest 7 complete days",
      "range": "May 25-May 31, 2026",
      "start": "2026-05-25",
      "end": "2026-05-31"
    },
    "weekToDate": {
      "label": "Latest 7 complete days",
      "range": "May 25-May 31, 2026",
      "start": "2026-05-25",
      "end": "2026-05-31"
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
      "activeUsers": 7742.0,
      "newUsers": 5534.0,
      "sessions": 14487.0,
      "engagedSessions": 11752.0,
      "engagementRate": 81.12100503900048,
      "screenPageViews": 29797.0,
      "eventCount": 1020171.0,
      "purchaseRevenue": 29.98
    },
    "baseline": {
      "activeUsers": 7742.0,
      "newUsers": 5534.0,
      "sessions": 14487.0,
      "engagedSessions": 11752.0,
      "engagementRate": 81.12100503900048,
      "screenPageViews": 29797.0,
      "eventCount": 1020171.0,
      "purchaseRevenue": 29.98
    },
    "currentWeek": {
      "activeUsers": 7824.0,
      "newUsers": 5508.0,
      "sessions": 14484.0,
      "engagedSessions": 11527.0,
      "engagementRate": 79.58436895885114,
      "screenPageViews": 29296.0,
      "eventCount": 1003933.0,
      "purchaseRevenue": 37.57
    },
    "weekToDate": {
      "activeUsers": 7824.0,
      "newUsers": 5508.0,
      "sessions": 14484.0,
      "engagedSessions": 11527.0,
      "engagementRate": 79.58436895885114,
      "screenPageViews": 29296.0,
      "eventCount": 1003933.0,
      "purchaseRevenue": 37.57
    }
  },
  "scorecards": [
    {
      "key": "platformActiveUsers",
      "label": "Platform active users",
      "baseline": 8709,
      "launchBaseline": 8709,
      "previousWeek": 7672,
      "current": 7757,
      "deltaPct": 1.107924921793535,
      "deltaVsLaunchPct": -10.931220576415203,
      "deltaVsPreviousPct": 1.107924921793535,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 active users excluding landing-page acquisition paths."
    },
    {
      "key": "platformSessions",
      "label": "Platform sessions",
      "baseline": 13316,
      "launchBaseline": 13316,
      "previousWeek": 14345,
      "current": 14362,
      "deltaPct": 0.11850819100731962,
      "deltaVsLaunchPct": 7.8552117753079,
      "deltaVsPreviousPct": 0.11850819100731962,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 sessions excluding landing-page acquisition paths."
    },
    {
      "key": "viewingEventUsers",
      "label": "Viewing event users",
      "baseline": 1155,
      "launchBaseline": 1155,
      "previousWeek": 2675,
      "current": 2734,
      "deltaPct": 2.2056074766355143,
      "deltaVsLaunchPct": 136.7099567099567,
      "deltaVsPreviousPct": 2.2056074766355143,
      "deltaType": "percent",
      "format": "number",
      "context": "Users who triggered on-demand video_start or Live play events."
    },
    {
      "key": "totalEngagementHours",
      "label": "Total engaged hours",
      "baseline": 3652.995,
      "launchBaseline": 3652.995,
      "previousWeek": 5255.714722222222,
      "current": 5407.105555555556,
      "deltaPct": 2.880499443647937,
      "deltaVsLaunchPct": 48.01842202235579,
      "deltaVsPreviousPct": 2.880499443647937,
      "deltaType": "percent",
      "format": "number",
      "context": "Total GA4 engaged time converted to hours."
    },
    {
      "key": "avgEngagedMinutesPerUser",
      "label": "Avg time per user",
      "baseline": 25.072031571722718,
      "launchBaseline": 25.072031571722718,
      "previousWeek": 41.40531556372549,
      "current": 41.35980792112868,
      "deltaPct": -0.04550764259681017,
      "deltaVsLaunchPct": 16.28777634940596,
      "deltaVsPreviousPct": -0.04550764259681017,
      "deltaType": "minutes",
      "format": "minutes",
      "context": "Total engaged time divided by active users, excluding landing-page acquisition paths."
    },
    {
      "key": "landingPageUsers",
      "label": "Landing-page users",
      "baseline": 1045,
      "launchBaseline": 1045,
      "previousWeek": 668,
      "current": 622,
      "deltaPct": -6.88622754491018,
      "deltaVsLaunchPct": -40.47846889952153,
      "deltaVsPreviousPct": -6.88622754491018,
      "deltaType": "percent",
      "format": "number",
      "context": "Users reaching pages with \u201clanding\u201d in the path."
    },
    {
      "key": "devicesPageUsers",
      "label": "Devices-page users",
      "baseline": 2028,
      "launchBaseline": 2028,
      "previousWeek": 169,
      "current": 123,
      "deltaPct": -27.218934911242602,
      "deltaVsLaunchPct": -93.93491124260355,
      "deltaVsPreviousPct": -27.218934911242602,
      "deltaType": "percent",
      "format": "number",
      "context": "Users reaching pages with \u201cdevices\u201d in the path."
    },
    {
      "key": "paidSocialUsers",
      "label": "Paid social users",
      "baseline": 4441,
      "launchBaseline": 4441,
      "previousWeek": 2468,
      "current": 2436,
      "deltaPct": -1.2965964343598055,
      "deltaVsLaunchPct": -45.147489304210765,
      "deltaVsPreviousPct": -1.2965964343598055,
      "deltaType": "percent",
      "format": "number",
      "context": "Users from GA4 source/medium values containing Facebook, Instagram, or Meta."
    },
    {
      "key": "appActiveUsers",
      "label": "App stream active users",
      "baseline": 1547,
      "launchBaseline": 1547,
      "previousWeek": 5343,
      "current": 5635,
      "deltaPct": 5.4650945161894064,
      "deltaVsLaunchPct": 264.25339366515834,
      "deltaVsPreviousPct": 5.4650945161894064,
      "deltaType": "percent",
      "format": "number",
      "context": "People using the Apple/iOS or Android app streams; Apple TV is not yet split from the Apple/iOS stream."
    },
    {
      "key": "appSessions",
      "label": "App stream sessions",
      "baseline": 2889,
      "launchBaseline": 2889,
      "previousWeek": 8599,
      "current": 8832,
      "deltaPct": 2.7096173973717876,
      "deltaVsLaunchPct": 205.71131879543097,
      "deltaVsPreviousPct": 2.7096173973717876,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 sessions on the Apple/iOS and Android app streams."
    },
    {
      "key": "appEngagementRate",
      "label": "App stream engagement rate",
      "baseline": 80.96227068189685,
      "launchBaseline": 80.96227068189685,
      "previousWeek": 81.60251191999069,
      "current": 80.6725543478261,
      "deltaPct": -0.9299575721645965,
      "deltaVsLaunchPct": -0.2897163340707607,
      "deltaVsPreviousPct": -0.9299575721645965,
      "deltaType": "points",
      "format": "percent",
      "context": "Engaged app-stream sessions divided by app-stream sessions."
    },
    {
      "key": "viewingEventUsers",
      "label": "Viewing event users",
      "baseline": 1155,
      "launchBaseline": 1155,
      "previousWeek": 2675,
      "current": 2734,
      "deltaPct": 2.2056074766355143,
      "deltaVsLaunchPct": 136.7099567099567,
      "deltaVsPreviousPct": 2.2056074766355143,
      "deltaType": "percent",
      "format": "number",
      "context": "Users who triggered on-demand video_start or Live play events."
    },
    {
      "key": "onDemandStartUsers",
      "label": "On-demand start users",
      "baseline": 1069,
      "launchBaseline": 1069,
      "previousWeek": 2547,
      "current": 2598,
      "deltaPct": 2.0023557126030624,
      "deltaVsLaunchPct": 143.0308699719364,
      "deltaVsPreviousPct": 2.0023557126030624,
      "deltaType": "percent",
      "format": "number",
      "context": "Users who triggered video_start outside the Live screen."
    },
    {
      "key": "liveChannelViewers",
      "label": "Live channel viewers",
      "baseline": 121,
      "launchBaseline": 121,
      "previousWeek": 148,
      "current": 156,
      "deltaPct": 5.405405405405405,
      "deltaVsLaunchPct": 28.92561983471074,
      "deltaVsPreviousPct": 5.405405405405405,
      "deltaType": "percent",
      "format": "number",
      "context": "Users who triggered a Live play event."
    },
    {
      "key": "videoCompleteUsers",
      "label": "Video complete users",
      "baseline": 219,
      "launchBaseline": 219,
      "previousWeek": 288,
      "current": 289,
      "deltaPct": 0.3472222222222222,
      "deltaVsLaunchPct": 31.963470319634702,
      "deltaVsPreviousPct": 0.3472222222222222,
      "deltaType": "percent",
      "format": "number",
      "context": "Users who triggered video_complete."
    },
    {
      "key": "livePlayEvents",
      "label": "Live play events",
      "baseline": 3952,
      "launchBaseline": 3952,
      "previousWeek": 4208,
      "current": 4208,
      "deltaPct": 0.0,
      "deltaVsLaunchPct": 6.477732793522267,
      "deltaVsPreviousPct": 0.0,
      "deltaType": "percent",
      "format": "number",
      "context": "Total Live play events, not unique users."
    },
    {
      "key": "adRequestEvents",
      "label": "Ad request events",
      "baseline": 10589,
      "launchBaseline": 10589,
      "previousWeek": 25596,
      "current": 23864,
      "deltaPct": -6.766682294108454,
      "deltaVsLaunchPct": 125.36594579280384,
      "deltaVsPreviousPct": -6.766682294108454,
      "deltaType": "percent",
      "format": "number",
      "context": "Total ad request events generated by viewing activity."
    },
    {
      "key": "avgEngagedMinutesPerUser",
      "label": "Avg time per user",
      "baseline": 25.072031571722718,
      "launchBaseline": 25.072031571722718,
      "previousWeek": 41.40531556372549,
      "current": 41.35980792112868,
      "deltaPct": -0.04550764259681017,
      "deltaVsLaunchPct": 16.28777634940596,
      "deltaVsPreviousPct": -0.04550764259681017,
      "deltaType": "minutes",
      "format": "minutes",
      "context": "Total engaged time divided by active users."
    },
    {
      "key": "avgEngagedMinutesPerSession",
      "label": "Avg time per session",
      "baseline": 16.417955056179775,
      "launchBaseline": 16.417955056179775,
      "previousWeek": 22.409244125450066,
      "current": 22.75239030320032,
      "deltaPct": 0.3431461777502527,
      "deltaVsLaunchPct": 6.334435247020544,
      "deltaVsPreviousPct": 0.3431461777502527,
      "deltaType": "minutes",
      "format": "minutes",
      "context": "Total engaged time divided by sessions."
    },
    {
      "key": "totalEngagementHours",
      "label": "Total engaged hours",
      "baseline": 3652.995,
      "launchBaseline": 3652.995,
      "previousWeek": 5255.714722222222,
      "current": 5407.105555555556,
      "deltaPct": 2.880499443647937,
      "deltaVsLaunchPct": 48.01842202235579,
      "deltaVsPreviousPct": 2.880499443647937,
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
      "sessions": 1330,
      "engagedSessions": 1064,
      "screenPageViews": 228,
      "eventCount": 30144,
      "engagementRate": 80.0
    },
    {
      "date": "May 25",
      "rawDate": "20260525",
      "activeUsers": 1019,
      "newUsers": 594,
      "sessions": 1353,
      "engagedSessions": 1112,
      "screenPageViews": 93,
      "eventCount": 31003,
      "engagementRate": 82.18773096821877
    },
    {
      "date": "May 26",
      "rawDate": "20260526",
      "activeUsers": 938,
      "newUsers": 525,
      "sessions": 1240,
      "engagedSessions": 989,
      "screenPageViews": 51,
      "eventCount": 24084,
      "engagementRate": 79.75806451612904
    },
    {
      "date": "May 27",
      "rawDate": "20260527",
      "activeUsers": 1051,
      "newUsers": 599,
      "sessions": 1367,
      "engagedSessions": 1084,
      "screenPageViews": 82,
      "eventCount": 25730,
      "engagementRate": 79.2977322604243
    },
    {
      "date": "May 28",
      "rawDate": "20260528",
      "activeUsers": 1023,
      "newUsers": 577,
      "sessions": 1322,
      "engagedSessions": 1055,
      "screenPageViews": 79,
      "eventCount": 24549,
      "engagementRate": 79.80332829046898
    },
    {
      "date": "May 29",
      "rawDate": "20260529",
      "activeUsers": 964,
      "newUsers": 552,
      "sessions": 1265,
      "engagedSessions": 1025,
      "screenPageViews": 108,
      "eventCount": 26936,
      "engagementRate": 81.02766798418972
    },
    {
      "date": "May 30",
      "rawDate": "20260530",
      "activeUsers": 985,
      "newUsers": 545,
      "sessions": 1281,
      "engagedSessions": 1028,
      "screenPageViews": 149,
      "eventCount": 22660,
      "engagementRate": 80.24980483996877
    },
    {
      "date": "May 31",
      "rawDate": "20260531",
      "activeUsers": 1059,
      "newUsers": 616,
      "sessions": 1373,
      "engagedSessions": 1097,
      "screenPageViews": 164,
      "eventCount": 27758,
      "engagementRate": 79.8980335032775
    }
  ],
  "eventCards": [
    {
      "event": "in_app_purchase",
      "label": "In-app purchases",
      "baseline": 2,
      "current": 3,
      "weekToDate": 3,
      "deltaPct": 50.0,
      "activeUsersCurrent": 3
    },
    {
      "event": "application_install",
      "label": "Application installs",
      "baseline": 4862,
      "current": 4834,
      "weekToDate": 4834,
      "deltaPct": -0.5758946935417524,
      "activeUsersCurrent": 4578
    },
    {
      "event": "first_open",
      "label": "First opens",
      "baseline": 4035,
      "current": 4090,
      "weekToDate": 4090,
      "deltaPct": 1.3630731102850062,
      "activeUsersCurrent": 4085
    },
    {
      "event": "app_open",
      "label": "App opens",
      "baseline": 1796,
      "current": 1803,
      "weekToDate": 1803,
      "deltaPct": 0.3897550111358575,
      "activeUsersCurrent": 426
    },
    {
      "event": "play",
      "label": "Plays",
      "baseline": 56578,
      "current": 53769,
      "weekToDate": 53769,
      "deltaPct": -4.964827318038814,
      "activeUsersCurrent": 2788
    },
    {
      "event": "video_start",
      "label": "Video starts",
      "baseline": 21932,
      "current": 21499,
      "weekToDate": 21499,
      "deltaPct": -1.9742841510122195,
      "activeUsersCurrent": 2726
    },
    {
      "event": "video_play",
      "label": "Video plays",
      "baseline": 8189,
      "current": 11286,
      "weekToDate": 11286,
      "deltaPct": 37.81902552204176,
      "activeUsersCurrent": 262
    },
    {
      "event": "video_complete",
      "label": "Video completes",
      "baseline": 3662,
      "current": 3661,
      "weekToDate": 3661,
      "deltaPct": -0.027307482250136534,
      "activeUsersCurrent": 289
    },
    {
      "event": "ads_request",
      "label": "Ad requests",
      "baseline": 25596,
      "current": 23864,
      "weekToDate": 23864,
      "deltaPct": -6.766682294108454,
      "activeUsersCurrent": 933
    },
    {
      "event": "ads_impression",
      "label": "Ad impressions",
      "baseline": 34641,
      "current": 32605,
      "weekToDate": 32605,
      "deltaPct": -5.877428480702059,
      "activeUsersCurrent": 896
    },
    {
      "event": "ads_loaded",
      "label": "Ads loaded",
      "baseline": 17859,
      "current": 17317,
      "weekToDate": 17317,
      "deltaPct": -3.034884372025309,
      "activeUsersCurrent": 1
    },
    {
      "event": "ads_started",
      "label": "Ads started",
      "baseline": 17856,
      "current": 17307,
      "weekToDate": 17307,
      "deltaPct": -3.0745967741935485,
      "activeUsersCurrent": 1
    },
    {
      "event": "ads_complete",
      "label": "Ads complete",
      "baseline": 17349,
      "current": 16862,
      "weekToDate": 16862,
      "deltaPct": -2.8070782177647127,
      "activeUsersCurrent": 1
    },
    {
      "event": "ad_request",
      "label": "Ad request",
      "baseline": 3529,
      "current": 3282,
      "weekToDate": 3282,
      "deltaPct": -6.999149900821762,
      "activeUsersCurrent": 62
    },
    {
      "event": "ad_complete",
      "label": "Ad complete",
      "baseline": 15336,
      "current": 13973,
      "weekToDate": 13973,
      "deltaPct": -8.887584767866457,
      "activeUsersCurrent": 707
    },
    {
      "event": "vmap_ad_request",
      "label": "VMAP ad request",
      "baseline": 4217,
      "current": 3834,
      "weekToDate": 3834,
      "deltaPct": -9.082285985297604,
      "activeUsersCurrent": 1073
    },
    {
      "event": "vmap_ad_loaded",
      "label": "VMAP ad loaded",
      "baseline": 40825,
      "current": 19003,
      "weekToDate": 19003,
      "deltaPct": -53.45254133496632,
      "activeUsersCurrent": 948
    },
    {
      "event": "click",
      "label": "Clicks",
      "baseline": 35,
      "current": 41,
      "weekToDate": 41,
      "deltaPct": 17.142857142857142,
      "activeUsersCurrent": 36
    }
  ],
  "purchaseFunnel": [
    {
      "event": "in_app_purchase",
      "label": "Purchase completed",
      "baseline": 2,
      "current": 3,
      "weekToDate": 3,
      "deltaPct": 50.0,
      "tracked": true,
      "note": "Launch baseline: 6 purchases / $84.94"
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
      "application_install": 639,
      "first_open": 541,
      "app_open": 220,
      "play": 7296,
      "ads_impression": 4180
    },
    {
      "date": "May 27",
      "rawDate": "20260527",
      "purchaseRevenue": 9.99,
      "in_app_purchase": 1,
      "application_install": 711,
      "first_open": 610,
      "app_open": 295,
      "play": 9087,
      "ads_impression": 5114
    },
    {
      "date": "May 28",
      "rawDate": "20260528",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 705,
      "first_open": 588,
      "app_open": 244,
      "play": 7341,
      "ads_impression": 4942
    },
    {
      "date": "May 29",
      "rawDate": "20260529",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 685,
      "first_open": 568,
      "app_open": 265,
      "play": 8479,
      "ads_impression": 4805
    },
    {
      "date": "May 30",
      "rawDate": "20260530",
      "purchaseRevenue": 27.58,
      "in_app_purchase": 2,
      "application_install": 675,
      "first_open": 554,
      "app_open": 254,
      "play": 6924,
      "ads_impression": 4587
    },
    {
      "date": "May 31",
      "rawDate": "20260531",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 713,
      "first_open": 625,
      "app_open": 250,
      "play": 7649,
      "ads_impression": 4648
    }
  ],
  "platforms": [
    {
      "platform": "web",
      "baseline": {
        "platform": "web",
        "activeUsers": 2141,
        "newUsers": 1499,
        "sessions": 5231,
        "engagedSessions": 4157,
        "screenPageViews": 26701,
        "eventCount": 779579,
        "engagementRate": 79.46855285796215
      },
      "current": {
        "platform": "web",
        "activeUsers": 2079,
        "newUsers": 1418,
        "sessions": 5045,
        "engagedSessions": 3939,
        "screenPageViews": 26316,
        "eventCount": 790606,
        "engagementRate": 78.0773042616452
      },
      "activeUsersDeltaPct": -2.8958430639887904,
      "engagementRateCurrent": 78.0773042616452
    },
    {
      "platform": "iOS",
      "baseline": {
        "platform": "iOS",
        "activeUsers": 2325,
        "newUsers": 1597,
        "sessions": 3811,
        "engagedSessions": 3196,
        "screenPageViews": 770,
        "eventCount": 86874,
        "engagementRate": 83.86250327997901
      },
      "current": {
        "platform": "iOS",
        "activeUsers": 2564,
        "newUsers": 1721,
        "sessions": 4186,
        "engagedSessions": 3522,
        "screenPageViews": 726,
        "eventCount": 92933,
        "engagementRate": 84.13760152890588
      },
      "activeUsersDeltaPct": 10.279569892473118,
      "engagementRateCurrent": 84.13760152890588
    },
    {
      "platform": "Android",
      "baseline": {
        "platform": "Android",
        "activeUsers": 3225,
        "newUsers": 2438,
        "sessions": 5188,
        "engagedSessions": 4252,
        "screenPageViews": 2326,
        "eventCount": 153718,
        "engagementRate": 81.95836545875096
      },
      "current": {
        "platform": "Android",
        "activeUsers": 3277,
        "newUsers": 2369,
        "sessions": 5192,
        "engagedSessions": 4069,
        "screenPageViews": 2254,
        "eventCount": 120394,
        "engagementRate": 78.37057010785824
      },
      "activeUsersDeltaPct": 1.6124031007751938,
      "engagementRateCurrent": 78.37057010785824
    }
  ],
  "platformMix": {
    "period": "May 25-May 31, 2026",
    "metric": "Active users",
    "totalViewers": 7920,
    "note": "Viewer share uses GA4 active users grouped by stream and device data where available. People who use more than one platform may appear in more than one bucket. Apple TV is not separately broken out yet; Amazon/Fire TV is inferred from Amazon AFT smart-TV device models until the developer confirms a cleaner Fire TV label.",
    "groups": [
      {
        "platform": "Web",
        "category": "Web",
        "tracked": true,
        "activeUsers": 946,
        "sharePct": 11.9,
        "sessions": 1715,
        "engagedSessions": 1303,
        "detail": "Browser and web playback from the electricnow-web GA4 stream."
      },
      {
        "platform": "Apple app stream",
        "category": "App",
        "tracked": true,
        "activeUsers": 2564,
        "sharePct": 32.4,
        "sessions": 4186,
        "engagedSessions": 3522,
        "detail": "iPhone and iPad app activity; Apple TV may also be included here until it is tagged separately."
      },
      {
        "platform": "Android mobile app",
        "category": "App",
        "tracked": true,
        "activeUsers": 3071,
        "sharePct": 38.8,
        "sessions": 4737,
        "engagedSessions": 3664,
        "detail": "Android phone/tablet activity from the ElectricNOW Android GA4 stream."
      },
      {
        "platform": "Roku",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 1133,
        "sharePct": 14.3,
        "sessions": 3358,
        "engagedSessions": 2683,
        "detail": "Roku activity from the electricnow-roku GA4 stream."
      },
      {
        "platform": "Amazon / Fire TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 115,
        "sharePct": 1.5,
        "sessions": 266,
        "engagedSessions": 248,
        "detail": "Likely Fire TV activity inferred from Amazon AFT smart-TV model codes."
      },
      {
        "platform": "Android TV / Google TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 91,
        "sharePct": 1.1,
        "sessions": 205,
        "engagedSessions": 187,
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
      "activeUsers": 3638,
      "newUsers": 2511,
      "sessions": 6246,
      "engagedSessions": 5195,
      "eventCount": 168516,
      "engagementRate": 83.17323086775536
    },
    {
      "sourceMedium": "apps.facebook.com / (not set)",
      "activeUsers": 1904,
      "newUsers": 1505,
      "sessions": 2576,
      "engagedSessions": 2014,
      "eventCount": 40248,
      "engagementRate": 78.1832298136646
    },
    {
      "sourceMedium": "homescreen / (not set)",
      "activeUsers": 667,
      "newUsers": 183,
      "sessions": 2196,
      "engagedSessions": 1853,
      "eventCount": 434847,
      "engagementRate": 84.38069216757741
    },
    {
      "sourceMedium": "apps.instagram.com / (not set)",
      "activeUsers": 356,
      "newUsers": 289,
      "sessions": 495,
      "engagedSessions": 388,
      "eventCount": 10300,
      "engagementRate": 78.3838383838384
    },
    {
      "sourceMedium": "google-play / organic",
      "activeUsers": 293,
      "newUsers": 200,
      "sessions": 478,
      "engagedSessions": 407,
      "eventCount": 12570,
      "engagementRate": 85.14644351464436
    },
    {
      "sourceMedium": "google / cpc",
      "activeUsers": 272,
      "newUsers": 210,
      "sessions": 363,
      "engagedSessions": 326,
      "eventCount": 7858,
      "engagementRate": 89.80716253443526
    },
    {
      "sourceMedium": "google / organic",
      "activeUsers": 263,
      "newUsers": 212,
      "sessions": 473,
      "engagedSessions": 407,
      "eventCount": 14222,
      "engagementRate": 86.04651162790698
    },
    {
      "sourceMedium": "(not set)",
      "activeUsers": 134,
      "newUsers": 25,
      "sessions": 292,
      "engagedSessions": 0,
      "eventCount": 91808,
      "engagementRate": 0.0
    },
    {
      "sourceMedium": "fb / paid",
      "activeUsers": 119,
      "newUsers": 34,
      "sessions": 168,
      "engagedSessions": 148,
      "eventCount": 2128,
      "engagementRate": 88.09523809523809
    },
    {
      "sourceMedium": "hs-search / (not set)",
      "activeUsers": 81,
      "newUsers": 29,
      "sessions": 432,
      "engagedSessions": 375,
      "eventCount": 94906,
      "engagementRate": 86.80555555555556
    },
    {
      "sourceMedium": "facebook.com / referral",
      "activeUsers": 77,
      "newUsers": 77,
      "sessions": 79,
      "engagedSessions": 37,
      "eventCount": 509,
      "engagementRate": 46.835443037974684
    },
    {
      "sourceMedium": "m.facebook.com / referral",
      "activeUsers": 66,
      "newUsers": 66,
      "sessions": 66,
      "engagedSessions": 10,
      "eventCount": 305,
      "engagementRate": 15.151515151515152
    }
  ],
  "topPages": [
    {
      "path": "(not set)",
      "screen": "(not set)",
      "activeUsers": 6913,
      "views": 3275,
      "eventCount": 874543
    },
    {
      "path": "(not set)",
      "screen": "Splash",
      "activeUsers": 1412,
      "views": 3836,
      "eventCount": 4796
    },
    {
      "path": "(not set)",
      "screen": "Intro",
      "activeUsers": 1221,
      "views": 2807,
      "eventCount": 2978
    },
    {
      "path": "(not set)",
      "screen": "On Demand",
      "activeUsers": 860,
      "views": 3283,
      "eventCount": 3779
    },
    {
      "path": "/landing",
      "screen": "/landing",
      "activeUsers": 566,
      "views": 1089,
      "eventCount": 1769
    },
    {
      "path": "/",
      "screen": "/",
      "activeUsers": 514,
      "views": 1446,
      "eventCount": 3779
    },
    {
      "path": "(not set)",
      "screen": "PDP",
      "activeUsers": 317,
      "views": 2992,
      "eventCount": 3285
    },
    {
      "path": "/live-tv",
      "screen": "/live-tv",
      "activeUsers": 275,
      "views": 1688,
      "eventCount": 35099
    },
    {
      "path": "(not set)",
      "screen": "Live",
      "activeUsers": 166,
      "views": 1932,
      "eventCount": 23435
    },
    {
      "path": "(not set)",
      "screen": "Category",
      "activeUsers": 136,
      "views": 368,
      "eventCount": 408
    },
    {
      "path": "(not set)",
      "screen": "Player",
      "activeUsers": 91,
      "views": 2420,
      "eventCount": 21550
    },
    {
      "path": "/english",
      "screen": "/english",
      "activeUsers": 72,
      "views": 167,
      "eventCount": 249
    },
    {
      "path": "(not set)",
      "screen": "Search",
      "activeUsers": 65,
      "views": 561,
      "eventCount": 626
    },
    {
      "path": "/devices",
      "screen": "/devices",
      "activeUsers": 65,
      "views": 84,
      "eventCount": 290
    },
    {
      "path": "(not set)",
      "screen": "Settings",
      "activeUsers": 44,
      "views": 212,
      "eventCount": 250
    },
    {
      "path": "(not set)",
      "screen": "Mylist",
      "activeUsers": 33,
      "views": 223,
      "eventCount": 223
    },
    {
      "path": "(not set)",
      "screen": "AboutUs",
      "activeUsers": 26,
      "views": 77,
      "eventCount": 77
    },
    {
      "path": "(not set)",
      "screen": "ConnectWithUs",
      "activeUsers": 26,
      "views": 77,
      "eventCount": 77
    },
    {
      "path": "(not set)",
      "screen": "PrivacyPolicy",
      "activeUsers": 26,
      "views": 77,
      "eventCount": 77
    },
    {
      "path": "(not set)",
      "screen": "Terms of Use",
      "activeUsers": 26,
      "views": 77,
      "eventCount": 77
    }
  ],
  "liveTv": {
    "baseline": {
      "activeUsers": 437,
      "sessions": 1878,
      "engagedSessions": 1801,
      "screenPageViews": 3524,
      "eventCount": 50603
    },
    "current": {
      "activeUsers": 444,
      "sessions": 1964,
      "engagedSessions": 1837,
      "screenPageViews": 3784,
      "eventCount": 62812
    },
    "deltas": {
      "activeUsers": 1.6018306636155606,
      "sessions": 4.579339723109691,
      "engagedSessions": 1.9988895058300944,
      "screenPageViews": 7.377979568671964,
      "eventCount": 24.127028041815702
    },
    "engagementRateBaseline": 95.89989350372737,
    "engagementRateCurrent": 93.5336048879837,
    "weekToDate": {
      "activeUsers": 444,
      "sessions": 1964,
      "engagedSessions": 1837,
      "screenPageViews": 3784,
      "eventCount": 62812
    },
    "engagementRateWeekToDate": 93.5336048879837
  },
  "plainEnglishInsights": [
    "Overall, ElectricNOW\u2019s latest complete week (May 25-May 31, 2026) shows a measured platform audience of 7,757 GA4 active users excluding landing-page acquisition, up +1.1% from the prior week. Viewing-event users and engaged hours also moved up slightly, so the late-night GA4 refresh still points to modest growth rather than a drop, but engagement rate remains a little softer than the prior week.",
    "Late GA4 fill-in was small but real: property-wide sessions are now 14,484, engaged sessions 11,527, page/screen views 29,296, and events 1,003,933. Compared with the 12:47 PM pull, that added 6 sessions, 3 engaged sessions, 7 views, and 87 events.",
    "Landing-page traffic remains acquisition-only. The platform-audience number above excludes the landing page; property-wide GA4 active users including acquisition context were 7,824 this week versus 7,742 the prior week.",
    "Viewing behavior improved slightly: viewing-event users were 2,734, up +2.2% week over week; on-demand start users were 2,598, and live-channel viewers were 156. Total engaged hours were 5,407, up +2.9%.",
    "Paid acquisition - simple read: Meta remains promising but got a little less efficient in the May 31-Jun 6 report. Nathan/Forge One reported $3,128.73 of Meta spend, 248,978 paid-campaign impressions, 7,970 link clicks, and 2,997 downloads at about $1.04 blended cost per download. Android remains cheaper ($0.89/download) than iOS ($1.34/download), but both platform CPIs worsened versus the prior report, so the next priority is proving these installs become actual viewers before scaling spend.",
    "Google Ads remains marked stale for this refresh because the connector was rate-limited earlier today; the dashboard preserves the last successful pull through 2026-05-26 rather than zeroing it out. Treat Google Ads as directional until the next successful connector pull.",
    "Apple App Store Connect manual download context was updated from the user screenshots: Free iOS/watchOS/tvOS downloads were 1,343 in the U.S. for May 31-Jun 6, 2026, with a daily average of 192. The separate five-week Apple snapshot shows 6,183 total downloads for Apr 27-May 31, up 353%. These are downloads only; they are not Apple sales and are not counted as GA4 active users.",
    "Visible platform sales remain preserved and audited at 43 purchases / $806.57 year to date across Stripe, Roku, and manual Apple sales snapshots. This is still not total ElectricNOW sales because Google Play sales are not connected and Apple sales are manual.",
    "Bottom line: the app/platform story is still cautiously positive, but paid acquisition is no longer improving cleanly. ElectricNOW is holding roughly steady on measured usage, Roku app engagement remains meaningful at 261 average daily viewers and 2,285 hours streamed for May 30-Jun 5, and Apple/Meta downloads show real acquisition volume; the key question remains how many of those paid downloads turn into repeat viewing."
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
      "sourceDetail": "This shows Stripe-visible sales from the connected electricnow.tv account (acct_1HZdStLG0Cw1zW4e). Reconnected 2026-05-31; the connector returned 21 succeeded 2026 charges totaling $439.79. The increase over the prior visible 13/$189.87 is historical 2026 charges that became visible after reconnection, not new same-day sales. Apple App Store and Google Play purchases are handled separately.",
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
        "range": "Jan 1-May 31, 2026",
        "purchases": 21,
        "purchaseRevenue": 439.79,
        "revenuePerPurchase": 20.94,
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
        "range": "Through May 31, 2026 reconnect pull",
        "purchases": 21,
        "purchaseRevenue": 439.79,
        "revenuePerPurchase": 20.94
      },
      "mix": [
        {
          "label": "Title purchases",
          "purchases": 20,
          "purchaseRevenue": 429.8
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
        },
        {
          "id": "ch_3TKta2LG0Cw1zW4e2jEPD9iR",
          "date": "Apr 10",
          "createdAt": "2026-04-10 21:55 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment (historical, visible after Stripe reconnect)"
        },
        {
          "id": "ch_3TBhVMLG0Cw1zW4e1sOFxVJX",
          "date": "Mar 16",
          "createdAt": "2026-03-16 13:12 PDT",
          "amount": 14.99,
          "description": "Customer User - Purchase this title: Signup payment (historical, visible after Stripe reconnect)"
        },
        {
          "id": "ch_3T45wBLG0Cw1zW4e1ah1kA3Y",
          "date": "Feb 23",
          "createdAt": "2026-02-23 12:41 PST",
          "amount": 29.99,
          "description": "Customer User - Purchase this title: Signup payment (historical, visible after Stripe reconnect)"
        },
        {
          "id": "ch_3T0YwGLG0Cw1zW4e1qfmMfux",
          "date": "Feb 13",
          "createdAt": "2026-02-13 18:50 PST",
          "amount": 29.99,
          "description": "Customer User - Purchase this title: Signup payment (historical, visible after Stripe reconnect)"
        },
        {
          "id": "ch_3SrEfALG0Cw1zW4e1KiLmfkZ",
          "date": "Jan 19",
          "createdAt": "2026-01-19 01:22 PST",
          "amount": 19.99,
          "description": "Customer User - Purchase this title: Signup payment (historical, visible after Stripe reconnect)"
        },
        {
          "id": "ch_3SpJQfLG0Cw1zW4e0l6Kw2Ea",
          "date": "Jan 13",
          "createdAt": "2026-01-13 18:03 PST",
          "amount": 29.99,
          "description": "Customer User - Purchase this title: Signup payment (historical, visible after Stripe reconnect)"
        },
        {
          "id": "ch_3SlCjkLG0Cw1zW4e1MP1Uus6",
          "date": "Jan 2",
          "createdAt": "2026-01-02 10:06 PST",
          "amount": 89.99,
          "description": "Customer User - Purchase this title: Signup payment (historical, visible after Stripe reconnect)"
        },
        {
          "id": "ch_3Skt4xLG0Cw1zW4e1Yu98Lrf",
          "date": "Jan 1",
          "createdAt": "2026-01-01 13:06 PST",
          "amount": 19.99,
          "description": "Customer User - Purchase this title: Signup payment (historical, visible after Stripe reconnect)"
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
      "note": "Stripe-visible sales show 21 payments and $439.79 year to date (includes 8 historical 2026 charges visible after the 2026-05-31 reconnect), 3 payments and $44.97 this month, 0 payments and $0.00 last week, and 0 payments and $0.00 this week. Add Apple App Store and Google Play reports before treating this as total sales."
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
        "range": "Jan 1-May 31, 2026",
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
        "range": "May 1-May 31, 2026",
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
        "range": "May 24-May 30, 2026",
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
        "range": "May 25-May 31, 2026",
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
        "range": "May 24-May 30, 2026",
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
        "range": "May 25-May 31, 2026",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0,
        "revenuePerPurchase": 0,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": []
      },
      "lifetimeObserved": {
        "range": "Through May 31, 2026 pull",
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
        },
        {
          "date": "May 29",
          "rawDate": "20260529",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 30",
          "rawDate": "20260530",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 31",
          "rawDate": "20260531",
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
        "range": "May 24-May 30, 2026",
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
        "range": "May 25-May 31, 2026",
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
        "range": "May 1-May 31, 2026",
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
        "range": "May 20-May 31, 2026",
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
      "yearToDate": {
        "label": "Apple App Store snapshot",
        "range": "Jan 1-May 31, 2026",
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
      "note": "Apple App Store screenshots show $159.92 gross in-app purchase sales manually entered so far, or approximately $111.94 after Apple\u2019s 30% platform fee. These figures remain manual until Apple App Store Connect API reporting is connected."
    },
    "sourceBreakout": [
      {
        "source": "Stripe",
        "purchases": 21,
        "purchaseRevenue": 439.79,
        "developerRevShare": 0.0,
        "detail": "This shows Stripe-visible sales from the connected electricnow.tv account (acct_1HZdStLG0Cw1zW4e). Reconnected 2026-05-31; the connector returned 21 succeeded 2026 charges totaling $439.79. The increase over the prior visible 13/$189.87 is historical 2026 charges that became visible after reconnection, not new same-day sales. Apple App Store and Google Play purchases are handled separately."
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
      "range": "Jan 1-May 31, 2026",
      "purchases": 43,
      "purchaseRevenue": 806.57,
      "developerRevShare": 277.4,
      "revenuePerPurchase": 18.76,
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
      "range": "May 1-May 31, 2026",
      "purchases": 12,
      "purchaseRevenue": 166.88,
      "developerRevShare": 124.49,
      "revenuePerPurchase": 13.91,
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
          "date": "May 13",
          "amount": 29.99,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store"
        }
      ]
    },
    "lastWeek": {
      "label": "Sales last week",
      "range": "May 24-May 30, 2026",
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
      "range": "May 25-May 31, 2026",
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
      "range": "May 24-May 30, 2026",
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
      "range": "May 25-May 31, 2026",
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
      "range": "May 20-May 31, 2026",
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
    "lifetimeObserved": {
      "label": "Sales this year",
      "range": "Jan 1-May 31, 2026",
      "purchases": 43,
      "purchaseRevenue": 806.57,
      "developerRevShare": 277.4,
      "revenuePerPurchase": 18.76,
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
      },
      {
        "date": "May 29",
        "rawDate": "20260529",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 30",
        "rawDate": "20260530",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "May 31",
        "rawDate": "20260531",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      }
    ],
    "note": "Visible platform sales show 43 purchases and $806.57 year to date, including 8 historical Stripe charges that became visible after the 2026-05-31 reconnect and the manual Apple App Store snapshot. Apple gross sales in the snapshot are $159.92, with estimated net-to-Electric of $111.94 after Apple's 30% platform fee. Add Google Play reports before treating this as total sales."
  },
  "contentUsage": {
    "period": "May 25-May 31, 2026",
    "live": {
      "total": {
        "screenPageViews": 1932,
        "activeUsers": 166,
        "eventCount": 23489
      },
      "platforms": [
        {
          "platform": "web",
          "screen": "Live",
          "screenPageViews": 1549,
          "activeUsers": 8,
          "eventCount": 1549
        },
        {
          "platform": "Android",
          "screen": "Live",
          "screenPageViews": 276,
          "activeUsers": 106,
          "eventCount": 11712
        },
        {
          "platform": "iOS",
          "screen": "Live",
          "screenPageViews": 107,
          "activeUsers": 52,
          "eventCount": 10228
        }
      ],
      "playback": {
        "play": 4208,
        "video_start": 2247,
        "end_playback": 274
      },
      "playbackRows": [
        {
          "event": "play",
          "label": "Play events",
          "eventCount": 4208
        },
        {
          "event": "video_start",
          "label": "Video starts",
          "eventCount": 2247
        },
        {
          "event": "end_playback",
          "label": "Ended playbacks",
          "eventCount": 274
        }
      ],
      "topChannels": [
        {
          "title": "ElectricNOW",
          "plays": 3529,
          "activeUsers": 160,
          "rank": 1
        },
        {
          "title": "spot on news",
          "plays": 174,
          "activeUsers": 8,
          "rank": 2
        },
        {
          "title": "ElectricNOW en Espa\u00f1ol",
          "plays": 101,
          "activeUsers": 12,
          "rank": 3
        },
        {
          "title": "Kung Fu Movies",
          "plays": 57,
          "activeUsers": 13,
          "rank": 4
        },
        {
          "title": "Daily Flash",
          "plays": 32,
          "activeUsers": 5,
          "rank": 5
        },
        {
          "title": "Stoner TV Network",
          "plays": 23,
          "activeUsers": 8,
          "rank": 6
        },
        {
          "title": "Grindhouse Gold",
          "plays": 22,
          "activeUsers": 7,
          "rank": 7
        },
        {
          "title": "ToonOvation",
          "plays": 22,
          "activeUsers": 12,
          "rank": 8
        },
        {
          "title": "BayView Documentaries",
          "plays": 19,
          "activeUsers": 5,
          "rank": 9
        },
        {
          "title": "Horror Asylum",
          "plays": 19,
          "activeUsers": 12,
          "rank": 10
        }
      ],
      "note": "Live usage is based on GA4 screen name 'Live' plus playback events that also carried the Live screen name."
    },
    "onDemand": {
      "total": {
        "screenPageViews": 3264,
        "activeUsers": 861,
        "eventCount": 3760
      },
      "platforms": [
        {
          "platform": "web",
          "screen": "On Demand",
          "screenPageViews": 2699,
          "activeUsers": 662,
          "eventCount": 2699
        },
        {
          "platform": "Android",
          "screen": "On Demand",
          "screenPageViews": 405,
          "activeUsers": 136,
          "eventCount": 641
        },
        {
          "platform": "iOS",
          "screen": "On Demand",
          "screenPageViews": 160,
          "activeUsers": 63,
          "eventCount": 420
        }
      ],
      "note": "On Demand usage is based on GA4 screen name 'On Demand'. Title-level viewing is shown below from GA4 video_title play events."
    }
  },
  "titleViewership": {
    "period": "May 24-May 30, 2026",
    "note": "Top programs roll up fragmented GA4 play-event labels into parent shows/collections where possible, then use a GA4 filter to estimate deduped active users for each program. Play events remain the ranking metric because ads monetize playback; active users are total GA4 users who triggered matching play events for that program during the period. On-demand shows and collections only \u2014 live/FAST/linear channels (DARK MATTER TV, Kung Fu Movies, spot on news, ToonOvation, ElectricNOW en Espanol, Stoner TV Network, etc.) are excluded here and reported separately under Live channel usage. Top 50 may list fewer than 50 entries until the next GA4 refresh overfetches with the stricter row-level predicate. Treat this as GA-tracked viewership, not a fully cleaned catalog report yet, until the app sends content_type, series_title, season, episode, and video_id consistently.",
    "topVideoTitlesNote": "Top videos shows individual on-demand video plays only. Live/FAST/linear channel rows (e.g. DARK MATTER TV, Kung Fu Movies, spot on news, ToonOvation, ElectricNOW en Espanol, Stoner TV Network) are excluded here and reported separately in 'Live channel usage'. Top 50 may list fewer than 50 entries until the next GA4 refresh overfetches with the stricter row-level live-channel predicate.",
    "topPrograms": [
      {
        "rank": 1,
        "program": "The Ark",
        "plays": 8657,
        "activeUsers": 152,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 27,
        "examples": [
          "Everyone Wanted to Be On This Ship",
          "Like It Touched the Sun",
          "We Weren't Supposed to Be Awake"
        ]
      },
      {
        "rank": 2,
        "program": "Leverage",
        "plays": 6418,
        "activeUsers": 79,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 54,
        "examples": [
          "The Nigerian Job (Pilot) - 43 Min Cut",
          "The Homecoming Job",
          "The Wedding Job"
        ]
      },
      {
        "rank": 3,
        "program": "Almost Paradise",
        "plays": 2618,
        "activeUsers": 77,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 23,
        "examples": [
          "Finding Mabuhay",
          "Rise of the Kalangay",
          "Reef Eel Soup for the Soul"
        ]
      },
      {
        "rank": 4,
        "program": "Leverage: Redemption",
        "plays": 2376,
        "activeUsers": 44,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 15,
        "examples": [
          "The Too Many Rembrandts Job",
          "The Panamanian Job",
          "The Pyramid Job"
        ]
      },
      {
        "rank": 5,
        "program": "The Librarians",
        "plays": 1680,
        "activeUsers": 39,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 29,
        "examples": [
          "And the Crown of King Arthur",
          "And the Sword in the Stone",
          "And the Horns of a Dilemma"
        ]
      },
      {
        "rank": 6,
        "program": "The Librarians: The Next Chapter",
        "plays": 778,
        "activeUsers": 12,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 9,
        "examples": [
          "And the Dance of Doom!",
          "And the Deadly Drekavac",
          "And the Ghost Train"
        ]
      },
      {
        "rank": 7,
        "program": "The Poly Couple",
        "plays": 720,
        "activeUsers": 64,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 11,
        "examples": [
          "So This Is How Polyamory Happens",
          "Spin the Bottle",
          "The Password Is Love"
        ]
      },
      {
        "rank": 8,
        "program": "The Messenger",
        "plays": 372,
        "activeUsers": 48,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 3,
        "examples": [
          "Episode 1",
          "Episode 2",
          "Episode 4"
        ]
      },
      {
        "rank": 9,
        "program": "The Outpost",
        "plays": 298,
        "activeUsers": 13,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 6,
        "examples": [
          "One Is the Loneliest Number",
          "Under Yavalla's Control",
          "The Vex Rezicon"
        ]
      },
      {
        "rank": 10,
        "program": "Adventures of Sonic the Hedgehog",
        "plays": 295,
        "activeUsers": 18,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Super Special Sonic Search and Smash Squad",
          "Momma Robotnik's Birthday",
          "Close Encounters\nof the Sonic Kind"
        ]
      },
      {
        "rank": 11,
        "program": "Solar Impact",
        "plays": 215,
        "activeUsers": 19,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Solar Impact - Trailer"
        ]
      },
      {
        "rank": 12,
        "program": "The Librarians: The Next Chapter Season 2 Teaser",
        "plays": 154,
        "activeUsers": 17,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 13,
        "program": "Exile",
        "plays": 149,
        "activeUsers": 20,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 14,
        "program": "Alone",
        "plays": 136,
        "activeUsers": 4,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 15,
        "program": "Checking Out: The Librarians Next Chapter",
        "plays": 115,
        "activeUsers": 19,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 4,
        "examples": [
          "TNC Series Preview",
          "And the Deadly Drekavac",
          "And the Dance of Doom"
        ]
      },
      {
        "rank": 16,
        "program": "Daughter of the Wolf",
        "plays": 107,
        "activeUsers": 14,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 17,
        "program": "Flyboys",
        "plays": 107,
        "activeUsers": 14,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Flyboys Trailer"
        ]
      },
      {
        "rank": 18,
        "program": "24 Seven",
        "plays": 105,
        "activeUsers": 19,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "24 Seven Trailer"
        ]
      },
      {
        "rank": 19,
        "program": "The Librarians Cinemascope Movie",
        "plays": 102,
        "activeUsers": 7,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 20,
        "program": "A Living Dog",
        "plays": 101,
        "activeUsers": 4,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 21,
        "program": "Like A Country Song",
        "plays": 100,
        "activeUsers": 5,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 22,
        "program": "The Triangle Night 1",
        "plays": 99,
        "activeUsers": 6,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 23,
        "program": "Black Fly",
        "plays": 98,
        "activeUsers": 4,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 24,
        "program": "Generation Z",
        "plays": 93,
        "activeUsers": 9,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Episode 2",
          "Episode 1",
          "Episode 3"
        ]
      },
      {
        "rank": 25,
        "program": "The Humanity Bureau",
        "plays": 91,
        "activeUsers": 6,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 26,
        "program": "The Librarian: Curse of the Judas Chalice",
        "plays": 89,
        "activeUsers": 5,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 27,
        "program": "Betty Boop",
        "plays": 88,
        "activeUsers": 6,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Betty Boop with Henry",
          "Betty Boop and Grampy",
          "Betty Boop and Little King"
        ]
      },
      {
        "rank": 28,
        "program": "A Christmas Carol",
        "plays": 86,
        "activeUsers": 9,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 29,
        "program": "2nd Serve",
        "plays": 85,
        "activeUsers": 6,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 30,
        "program": "The Triangle Mini-Series",
        "plays": 83,
        "activeUsers": 5,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "The Triangle Episode 2",
          "The Triangle Episode 1",
          "The Triangle Episode 3"
        ]
      },
      {
        "rank": 31,
        "program": "Black Wake",
        "plays": 80,
        "activeUsers": 9,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Black Wake - Trailer"
        ]
      },
      {
        "rank": 32,
        "program": "Bad Samaritan",
        "plays": 79,
        "activeUsers": 10,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Bad Samaritan - Trailer"
        ]
      },
      {
        "rank": 33,
        "program": "The Librarian: Quest for the Spear",
        "plays": 77,
        "activeUsers": 3,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 34,
        "program": "Americana Television",
        "plays": 76,
        "activeUsers": 29,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 35,
        "program": "LBJ",
        "plays": 71,
        "activeUsers": 2,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 36,
        "program": "RoboCop (The Series)",
        "plays": 70,
        "activeUsers": 22,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "The Future of Law Enforcement",
          "Trouble in Delta City",
          "Officer Missing"
        ]
      },
      {
        "rank": 37,
        "program": "Mythica: A Quest for Heroes",
        "plays": 69,
        "activeUsers": 7,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 38,
        "program": "Bonded In Blood",
        "plays": 68,
        "activeUsers": 2,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 39,
        "program": "Wizards vs. Aliens",
        "plays": 67,
        "activeUsers": 9,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Wizards vs. Aliens - Dawn of the Nekross: Part 1",
          "Wizards vs. Aliens - Dawn of the Nekross: Part 2",
          "Wizards vs. Aliens - Trailer"
        ]
      },
      {
        "rank": 40,
        "program": "The Librarian: Return to King Solomon's Mines",
        "plays": 66,
        "activeUsers": 3,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 41,
        "program": "Murder on the Cape",
        "plays": 60,
        "activeUsers": 3,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Murder on the Cape - Trailer"
        ]
      }
    ],
    "topVideoTitles": [
      {
        "rank": 1,
        "title": "Everyone Wanted to Be On This Ship",
        "plays": 1111,
        "activeUsers": 92,
        "group": "The Ark"
      },
      {
        "rank": 2,
        "title": "Like It Touched the Sun",
        "plays": 509,
        "activeUsers": 17,
        "group": "The Ark"
      },
      {
        "rank": 3,
        "title": "We Weren't Supposed to Be Awake",
        "plays": 470,
        "activeUsers": 16,
        "group": "The Ark"
      },
      {
        "rank": 4,
        "title": "The Too Many Rembrandts Job",
        "plays": 429,
        "activeUsers": 29,
        "group": "Leverage: Redemption"
      },
      {
        "rank": 5,
        "title": "The Nigerian Job (Pilot) - 43 Min Cut",
        "plays": 422,
        "activeUsers": 36,
        "group": "Leverage"
      },
      {
        "rank": 6,
        "title": "We Don't Kill Our Own",
        "plays": 408,
        "activeUsers": 11,
        "group": "The Ark"
      },
      {
        "rank": 7,
        "title": "Finding Mabuhay",
        "plays": 396,
        "activeUsers": 49,
        "group": "Almost Paradise"
      },
      {
        "rank": 8,
        "title": "Get Out and Push",
        "plays": 382,
        "activeUsers": 19,
        "group": "The Ark"
      },
      {
        "rank": 9,
        "title": "The Homecoming Job",
        "plays": 331,
        "activeUsers": 17,
        "group": "Leverage"
      },
      {
        "rank": 10,
        "title": "One Step Forward, Two Steps Back",
        "plays": 326,
        "activeUsers": 14,
        "group": "The Ark"
      },
      {
        "rank": 11,
        "title": "It Can't Be True",
        "plays": 296,
        "activeUsers": 12,
        "group": "The Ark"
      },
      {
        "rank": 12,
        "title": "Pretty Big Deal",
        "plays": 287,
        "activeUsers": 13,
        "group": "The Ark"
      },
      {
        "rank": 13,
        "title": "Museum of Death",
        "plays": 271,
        "activeUsers": 11,
        "group": "The Ark"
      },
      {
        "rank": 14,
        "title": "Cycle of Violence",
        "plays": 256,
        "activeUsers": 11,
        "group": "The Ark"
      },
      {
        "rank": 15,
        "title": "The Panamanian Job",
        "plays": 256,
        "activeUsers": 17,
        "group": "Leverage: Redemption"
      },
      {
        "rank": 16,
        "title": "Episode 1",
        "plays": 249,
        "activeUsers": 42,
        "group": "The Messenger"
      },
      {
        "rank": 17,
        "title": "And the Crown of King Arthur",
        "plays": 240,
        "activeUsers": 23,
        "group": "The Librarians"
      },
      {
        "rank": 18,
        "title": "Anomaly",
        "plays": 240,
        "activeUsers": 8,
        "group": "The Ark"
      },
      {
        "rank": 19,
        "title": "The Wedding Job",
        "plays": 240,
        "activeUsers": 7,
        "group": "Leverage"
      },
      {
        "rank": 20,
        "title": "The Two-Horse Job",
        "plays": 233,
        "activeUsers": 12,
        "group": "Leverage"
      },
      {
        "rank": 21,
        "title": "The Other You",
        "plays": 228,
        "activeUsers": 9,
        "group": "The Ark"
      },
      {
        "rank": 22,
        "title": "It Will Be Over Soon",
        "plays": 224,
        "activeUsers": 10,
        "group": "The Ark"
      },
      {
        "rank": 23,
        "title": "Hoping for Forever",
        "plays": 223,
        "activeUsers": 7,
        "group": "The Ark"
      },
      {
        "rank": 24,
        "title": "Two by Two",
        "plays": 222,
        "activeUsers": 10,
        "group": "The Ark"
      },
      {
        "rank": 25,
        "title": "Failed Experiment",
        "plays": 214,
        "activeUsers": 11,
        "group": "The Ark"
      },
      {
        "rank": 26,
        "title": "It Should Have Been You",
        "plays": 212,
        "activeUsers": 10,
        "group": "The Ark"
      },
      {
        "rank": 27,
        "title": "Rise of the Kalangay",
        "plays": 211,
        "activeUsers": 12,
        "group": "Almost Paradise"
      },
      {
        "rank": 28,
        "title": "Solar Impact",
        "plays": 209,
        "activeUsers": 19,
        "group": ""
      },
      {
        "rank": 29,
        "title": "Fortunate",
        "plays": 206,
        "activeUsers": 10,
        "group": "The Ark"
      },
      {
        "rank": 30,
        "title": "The Stork Job",
        "plays": 205,
        "activeUsers": 13,
        "group": "Leverage"
      },
      {
        "rank": 31,
        "title": "Kill or Be Killed",
        "plays": 191,
        "activeUsers": 6,
        "group": "The Ark"
      },
      {
        "rank": 32,
        "title": "The Painful Way",
        "plays": 191,
        "activeUsers": 8,
        "group": "The Ark"
      },
      {
        "rank": 33,
        "title": "The Pyramid Job",
        "plays": 187,
        "activeUsers": 3,
        "group": "Leverage: Redemption"
      },
      {
        "rank": 34,
        "title": "Reef Eel Soup for the Soul",
        "plays": 182,
        "activeUsers": 13,
        "group": "Almost Paradise"
      },
      {
        "rank": 35,
        "title": "The Miracle Job",
        "plays": 182,
        "activeUsers": 12,
        "group": "Leverage"
      },
      {
        "rank": 36,
        "title": "The Bank Shot Job",
        "plays": 175,
        "activeUsers": 9,
        "group": "Leverage"
      },
      {
        "rank": 37,
        "title": "It's Personal",
        "plays": 169,
        "activeUsers": 14,
        "group": "Almost Paradise"
      },
      {
        "rank": 38,
        "title": "The Last Thing You Ever Do",
        "plays": 160,
        "activeUsers": 8,
        "group": "The Ark"
      },
      {
        "rank": 39,
        "title": "And the Sword in the Stone",
        "plays": 159,
        "activeUsers": 7,
        "group": "The Librarians"
      },
      {
        "rank": 40,
        "title": "So This Is How Polyamory Happens",
        "plays": 157,
        "activeUsers": 47,
        "group": "The Poly Couple"
      },
      {
        "rank": 41,
        "title": "Pistol Whip",
        "plays": 156,
        "activeUsers": 12,
        "group": "Almost Paradise"
      },
      {
        "rank": 42,
        "title": "Unbecalming",
        "plays": 156,
        "activeUsers": 14,
        "group": "Almost Paradise"
      },
      {
        "rank": 43,
        "title": "Everybody Wins",
        "plays": 155,
        "activeUsers": 11,
        "group": "The Ark"
      },
      {
        "rank": 44,
        "title": "The Librarians: The Next Chapter Season 2 Teaser",
        "plays": 154,
        "activeUsers": 17,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 45,
        "title": "Every Single Person Matters",
        "plays": 153,
        "activeUsers": 7,
        "group": "The Ark"
      },
      {
        "rank": 46,
        "title": "Exile",
        "plays": 149,
        "activeUsers": 20,
        "group": ""
      },
      {
        "rank": 47,
        "title": "A Slow Death Is Worse",
        "plays": 143,
        "activeUsers": 7,
        "group": "The Ark"
      },
      {
        "rank": 48,
        "title": "The Mile High Job",
        "plays": 140,
        "activeUsers": 6,
        "group": "Leverage"
      },
      {
        "rank": 49,
        "title": "Alone",
        "plays": 136,
        "activeUsers": 4,
        "group": ""
      }
    ],
    "topChannelTitles": [
      {
        "rank": 1,
        "title": "The Ark",
        "plays": 4072,
        "activeUsers": 131
      },
      {
        "rank": 2,
        "title": "Leverage",
        "plays": 3549,
        "activeUsers": 62
      },
      {
        "rank": 3,
        "title": "The Ark - Season 2",
        "plays": 2119,
        "activeUsers": 1
      },
      {
        "rank": 4,
        "title": "The Ark - Season 1",
        "plays": 2018,
        "activeUsers": 1
      },
      {
        "rank": 5,
        "title": "Leverage - Season 1",
        "plays": 1407,
        "activeUsers": 1
      },
      {
        "rank": 6,
        "title": "Almost Paradise (Season 1 & 2)",
        "plays": 1049,
        "activeUsers": 52
      },
      {
        "rank": 7,
        "title": "Leverage: Redemption (Seasons 1 & 2)",
        "plays": 848,
        "activeUsers": 30
      },
      {
        "rank": 8,
        "title": "Almost Paradise - Season 1",
        "plays": 800,
        "activeUsers": 1
      },
      {
        "rank": 9,
        "title": "Leverage: Redemption -  Season 1",
        "plays": 749,
        "activeUsers": 1
      },
      {
        "rank": 10,
        "title": "The Librarians (Full Series)",
        "plays": 690,
        "activeUsers": 34
      },
      {
        "rank": 11,
        "title": "The Librarians: The Next Chapter",
        "plays": 688,
        "activeUsers": 1
      },
      {
        "rank": 12,
        "title": "Leverage - Season 2",
        "plays": 610,
        "activeUsers": 1
      },
      {
        "rank": 13,
        "title": "Leverage: Redemption - Season 3",
        "plays": 499,
        "activeUsers": 2
      },
      {
        "rank": 14,
        "title": "Almost Paradise - Season 2",
        "plays": 428,
        "activeUsers": 1
      },
      {
        "rank": 15,
        "title": "The Librarians - Season 1",
        "plays": 357,
        "activeUsers": 1
      },
      {
        "rank": 16,
        "title": "The Poly Couple",
        "plays": 258,
        "activeUsers": 2
      },
      {
        "rank": 17,
        "title": "The Librarians - Season 4",
        "plays": 229,
        "activeUsers": 1
      },
      {
        "rank": 18,
        "title": "The Messenger",
        "plays": 223,
        "activeUsers": 41
      },
      {
        "rank": 19,
        "title": "Solar Impact",
        "plays": 215,
        "activeUsers": 19
      },
      {
        "rank": 20,
        "title": "Adventures of Sonic the Hedgehog - Season 1",
        "plays": 199,
        "activeUsers": 1
      },
      {
        "rank": 21,
        "title": "Leverage - Season 5",
        "plays": 181,
        "activeUsers": 1
      },
      {
        "rank": 22,
        "title": "The Poly Couple (Season 1)",
        "plays": 156,
        "activeUsers": 54
      },
      {
        "rank": 23,
        "title": "Leverage - Season 3",
        "plays": 153,
        "activeUsers": 1
      },
      {
        "rank": 24,
        "title": "Exile",
        "plays": 149,
        "activeUsers": 20
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
      "range": "May 18-May 24, 2026",
      "appActiveUsers": 5343,
      "appSessions": 8599,
      "appEngagedSessions": 7017,
      "appEngagementRate": 81.60251191999069,
      "viewingUsers": 2260,
      "viewingShare": 42.298334269137186,
      "onDemandStartUsers": 2229,
      "onDemandStartEvents": 8448,
      "liveChannelViewers": 38,
      "livePlayEvents": 1655
    },
    "currentWeek": {
      "range": "May 25-May 31, 2026",
      "appActiveUsers": 5635,
      "appSessions": 8832,
      "appEngagedSessions": 7125,
      "appEngagementRate": 80.6725543478261,
      "viewingUsers": 2328,
      "viewingShare": 41.31322094055013,
      "onDemandStartUsers": 2283,
      "onDemandStartEvents": 7885,
      "liveChannelViewers": 51,
      "livePlayEvents": 1631
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
      "ga4AverageSessionMinutes": 22.769179101851435,
      "platformBreakout": [
        {
          "platform": "web",
          "activeUsers": 7033,
          "sessions": 10031,
          "engagedSessions": 5221,
          "avgEngagedMinutesPerUser": 16.21484193563676,
          "avgEngagedMinutesPerSession": 11.368655501279367,
          "ga4AverageSessionMinutes": 13.258718967379458
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
      "range": "May 18-May 24, 2026",
      "activeUsers": 7616,
      "sessions": 14072,
      "engagedSessions": 11573,
      "engagementRate": 82.24133030130756,
      "totalEngagementSeconds": 18920573,
      "totalEngagementHours": 5255.714722222222,
      "avgEngagedMinutesPerUser": 41.40531556372549,
      "avgEngagedMinutesPerSession": 22.409244125450066,
      "ga4AverageSessionMinutes": 61.60810070515563,
      "platformBreakout": [
        {
          "platform": "Android",
          "activeUsers": 3226,
          "sessions": 5188,
          "engagedSessions": 4252,
          "avgEngagedMinutesPerUser": 19.763484190948542,
          "avgEngagedMinutesPerSession": 12.289321511179645,
          "ga4AverageSessionMinutes": 109.80297653093035
        },
        {
          "platform": "iOS",
          "activeUsers": 2325,
          "sessions": 3811,
          "engagedSessions": 3196,
          "avgEngagedMinutesPerUser": 41.14767741935484,
          "avgEngagedMinutesPerSession": 25.10321437942797,
          "ga4AverageSessionMinutes": 29.076549897572818
        },
        {
          "platform": "web",
          "activeUsers": 2065,
          "sessions": 5073,
          "engagedSessions": 4125,
          "avgEngagedMinutesPerUser": 75.50485875706214,
          "avgEngagedMinutesPerSession": 30.73477889480255,
          "ga4AverageSessionMinutes": 36.759436077436106
        }
      ],
      "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."
    },
    "currentWeek": {
      "range": "May 25-May 31, 2026",
      "activeUsers": 7844,
      "sessions": 14259,
      "engagedSessions": 11506,
      "engagementRate": 80.69289571498702,
      "totalEngagementSeconds": 19465580,
      "totalEngagementHours": 5407.105555555556,
      "avgEngagedMinutesPerUser": 41.35980792112868,
      "avgEngagedMinutesPerSession": 22.75239030320032,
      "ga4AverageSessionMinutes": 59.59084461335944,
      "platformBreakout": [
        {
          "platform": "Android",
          "activeUsers": 3276,
          "sessions": 5164,
          "engagedSessions": 4066,
          "avgEngagedMinutesPerUser": 22.847120472120473,
          "avgEngagedMinutesPerSession": 14.494029176349082,
          "ga4AverageSessionMinutes": 108.83817197057776
        },
        {
          "platform": "iOS",
          "activeUsers": 2563,
          "sessions": 4165,
          "engagedSessions": 3511,
          "avgEngagedMinutesPerUser": 34.91463779425153,
          "avgEngagedMinutesPerSession": 21.485286114445778,
          "ga4AverageSessionMinutes": 23.31271856910407
        },
        {
          "platform": "web",
          "activeUsers": 2005,
          "sessions": 4930,
          "engagedSessions": 3929,
          "avgEngagedMinutesPerUser": 79.84685785536159,
          "avgEngagedMinutesPerSession": 32.47321501014199,
          "ga4AverageSessionMinutes": 38.654778995032494
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
      "range": "May 18-May 24, 2026",
      "totalGa4ActiveUsers": 7742.0,
      "totalGa4Sessions": 14487.0,
      "totalGa4EngagementRate": 81.12100503900048,
      "landingPageUsers": 668,
      "landingPageSessions": 1026,
      "devicesPageUsers": 169,
      "devicesPageSessions": 179,
      "paidSocialUsers": 2468,
      "paidSocialSessions": 3397
    },
    "currentWeek": {
      "range": "May 25-May 31, 2026",
      "totalGa4ActiveUsers": 7824.0,
      "totalGa4Sessions": 14484.0,
      "totalGa4EngagementRate": 79.58436895885114,
      "landingPageUsers": 622,
      "landingPageSessions": 903,
      "devicesPageUsers": 123,
      "devicesPageSessions": 129,
      "paidSocialUsers": 2436,
      "paidSocialSessions": 3360
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
      "range": "May 18-May 24, 2026",
      "viewingEventUsers": 2675,
      "videoStartUsers": 2672,
      "videoStartEvents": 21932,
      "videoPlayUsers": 267,
      "videoPlayEvents": 8189,
      "videoCompleteUsers": 288,
      "videoCompleteEvents": 3662,
      "onDemandStartUsers": 2547,
      "onDemandStartEvents": 19831,
      "liveChannelViewers": 148,
      "livePlayEvents": 4208,
      "adRequestEvents": 25596,
      "adErrorEvents": 22
    },
    "currentWeek": {
      "range": "May 25-May 31, 2026",
      "viewingEventUsers": 2734,
      "videoStartUsers": 2726,
      "videoStartEvents": 21499,
      "videoPlayUsers": 262,
      "videoPlayEvents": 11286,
      "videoCompleteUsers": 289,
      "videoCompleteEvents": 3661,
      "onDemandStartUsers": 2598,
      "onDemandStartEvents": 19252,
      "liveChannelViewers": 156,
      "livePlayEvents": 4208,
      "adRequestEvents": 23864,
      "adErrorEvents": 46
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
          "previousWeek": 7672,
          "current": 7757,
          "deltaPct": 1.107924921793535,
          "deltaVsLaunchPct": -10.931220576415203,
          "deltaVsPreviousPct": 1.107924921793535,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 active users excluding landing-page acquisition paths."
        },
        {
          "key": "platformSessions",
          "label": "Platform sessions",
          "baseline": 13316,
          "launchBaseline": 13316,
          "previousWeek": 14345,
          "current": 14362,
          "deltaPct": 0.11850819100731962,
          "deltaVsLaunchPct": 7.8552117753079,
          "deltaVsPreviousPct": 0.11850819100731962,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 sessions excluding landing-page acquisition paths."
        },
        {
          "key": "viewingEventUsers",
          "label": "Viewing event users",
          "baseline": 1155,
          "launchBaseline": 1155,
          "previousWeek": 2675,
          "current": 2734,
          "deltaPct": 2.2056074766355143,
          "deltaVsLaunchPct": 136.7099567099567,
          "deltaVsPreviousPct": 2.2056074766355143,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered on-demand video_start or Live play events."
        },
        {
          "key": "totalEngagementHours",
          "label": "Total engaged hours",
          "baseline": 3652.995,
          "launchBaseline": 3652.995,
          "previousWeek": 5255.714722222222,
          "current": 5407.105555555556,
          "deltaPct": 2.880499443647937,
          "deltaVsLaunchPct": 48.01842202235579,
          "deltaVsPreviousPct": 2.880499443647937,
          "deltaType": "percent",
          "format": "number",
          "context": "Total GA4 engaged time converted to hours."
        },
        {
          "key": "avgEngagedMinutesPerUser",
          "label": "Avg time per user",
          "baseline": 25.072031571722718,
          "launchBaseline": 25.072031571722718,
          "previousWeek": 41.40531556372549,
          "current": 41.35980792112868,
          "deltaPct": -0.04550764259681017,
          "deltaVsLaunchPct": 16.28777634940596,
          "deltaVsPreviousPct": -0.04550764259681017,
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
          "previousWeek": 668,
          "current": 622,
          "deltaPct": -6.88622754491018,
          "deltaVsLaunchPct": -40.47846889952153,
          "deltaVsPreviousPct": -6.88622754491018,
          "deltaType": "percent",
          "format": "number",
          "context": "Users reaching pages with \u201clanding\u201d in the path."
        },
        {
          "key": "devicesPageUsers",
          "label": "Devices-page users",
          "baseline": 2028,
          "launchBaseline": 2028,
          "previousWeek": 169,
          "current": 123,
          "deltaPct": -27.218934911242602,
          "deltaVsLaunchPct": -93.93491124260355,
          "deltaVsPreviousPct": -27.218934911242602,
          "deltaType": "percent",
          "format": "number",
          "context": "Users reaching pages with \u201cdevices\u201d in the path."
        },
        {
          "key": "paidSocialUsers",
          "label": "Paid social users",
          "baseline": 4441,
          "launchBaseline": 4441,
          "previousWeek": 2468,
          "current": 2436,
          "deltaPct": -1.2965964343598055,
          "deltaVsLaunchPct": -45.147489304210765,
          "deltaVsPreviousPct": -1.2965964343598055,
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
          "previousWeek": 5343,
          "current": 5635,
          "deltaPct": 5.4650945161894064,
          "deltaVsLaunchPct": 264.25339366515834,
          "deltaVsPreviousPct": 5.4650945161894064,
          "deltaType": "percent",
          "format": "number",
          "context": "People using the Apple/iOS or Android app streams; Apple TV is not yet split from the Apple/iOS stream."
        },
        {
          "key": "appSessions",
          "label": "App stream sessions",
          "baseline": 2889,
          "launchBaseline": 2889,
          "previousWeek": 8599,
          "current": 8832,
          "deltaPct": 2.7096173973717876,
          "deltaVsLaunchPct": 205.71131879543097,
          "deltaVsPreviousPct": 2.7096173973717876,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 sessions on the Apple/iOS and Android app streams."
        },
        {
          "key": "appEngagementRate",
          "label": "App stream engagement rate",
          "baseline": 80.96227068189685,
          "launchBaseline": 80.96227068189685,
          "previousWeek": 81.60251191999069,
          "current": 80.6725543478261,
          "deltaPct": -0.9299575721645965,
          "deltaVsLaunchPct": -0.2897163340707607,
          "deltaVsPreviousPct": -0.9299575721645965,
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
          "previousWeek": 2675,
          "current": 2734,
          "deltaPct": 2.2056074766355143,
          "deltaVsLaunchPct": 136.7099567099567,
          "deltaVsPreviousPct": 2.2056074766355143,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered on-demand video_start or Live play events."
        },
        {
          "key": "onDemandStartUsers",
          "label": "On-demand start users",
          "baseline": 1069,
          "launchBaseline": 1069,
          "previousWeek": 2547,
          "current": 2598,
          "deltaPct": 2.0023557126030624,
          "deltaVsLaunchPct": 143.0308699719364,
          "deltaVsPreviousPct": 2.0023557126030624,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered video_start outside the Live screen."
        },
        {
          "key": "liveChannelViewers",
          "label": "Live channel viewers",
          "baseline": 121,
          "launchBaseline": 121,
          "previousWeek": 148,
          "current": 156,
          "deltaPct": 5.405405405405405,
          "deltaVsLaunchPct": 28.92561983471074,
          "deltaVsPreviousPct": 5.405405405405405,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered a Live play event."
        },
        {
          "key": "videoCompleteUsers",
          "label": "Video complete users",
          "baseline": 219,
          "launchBaseline": 219,
          "previousWeek": 288,
          "current": 289,
          "deltaPct": 0.3472222222222222,
          "deltaVsLaunchPct": 31.963470319634702,
          "deltaVsPreviousPct": 0.3472222222222222,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered video_complete."
        },
        {
          "key": "livePlayEvents",
          "label": "Live play events",
          "baseline": 3952,
          "launchBaseline": 3952,
          "previousWeek": 4208,
          "current": 4208,
          "deltaPct": 0.0,
          "deltaVsLaunchPct": 6.477732793522267,
          "deltaVsPreviousPct": 0.0,
          "deltaType": "percent",
          "format": "number",
          "context": "Total Live play events, not unique users."
        },
        {
          "key": "adRequestEvents",
          "label": "Ad request events",
          "baseline": 10589,
          "launchBaseline": 10589,
          "previousWeek": 25596,
          "current": 23864,
          "deltaPct": -6.766682294108454,
          "deltaVsLaunchPct": 125.36594579280384,
          "deltaVsPreviousPct": -6.766682294108454,
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
          "previousWeek": 41.40531556372549,
          "current": 41.35980792112868,
          "deltaPct": -0.04550764259681017,
          "deltaVsLaunchPct": 16.28777634940596,
          "deltaVsPreviousPct": -0.04550764259681017,
          "deltaType": "minutes",
          "format": "minutes",
          "context": "Total engaged time divided by active users."
        },
        {
          "key": "avgEngagedMinutesPerSession",
          "label": "Avg time per session",
          "baseline": 16.417955056179775,
          "launchBaseline": 16.417955056179775,
          "previousWeek": 22.409244125450066,
          "current": 22.75239030320032,
          "deltaPct": 0.3431461777502527,
          "deltaVsLaunchPct": 6.334435247020544,
          "deltaVsPreviousPct": 0.3431461777502527,
          "deltaType": "minutes",
          "format": "minutes",
          "context": "Total engaged time divided by sessions."
        },
        {
          "key": "totalEngagementHours",
          "label": "Total engaged hours",
          "baseline": 3652.995,
          "launchBaseline": 3652.995,
          "previousWeek": 5255.714722222222,
          "current": 5407.105555555556,
          "deltaPct": 2.880499443647937,
          "deltaVsLaunchPct": 48.01842202235579,
          "deltaVsPreviousPct": 2.880499443647937,
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
      "range": "May 18-May 24, 2026",
      "rows": [
        {
          "surface": "Android mobile app",
          "streamName": "ElectricNOW",
          "streamId": "12950551103",
          "platform": "Android",
          "activeUsers": 3018,
          "sessions": 4721,
          "engagedSessions": 3810,
          "eventCount": 111199,
          "engagementRate": 80.70324083880533,
          "avgEngagedMinutesPerUser": 8.444223547603269,
          "avgEngagedMinutesPerSession": 5.398150109440091
        },
        {
          "surface": "iOS / Apple app stream",
          "streamName": "ElectricNow",
          "streamId": "12982344897",
          "platform": "iOS",
          "activeUsers": 2325,
          "sessions": 3811,
          "engagedSessions": 3196,
          "eventCount": 86874,
          "engagementRate": 83.86250327997901,
          "avgEngagedMinutesPerUser": 41.14767741935484,
          "avgEngagedMinutesPerSession": 25.10321437942797
        },
        {
          "surface": "Roku",
          "streamName": "electricnow-roku",
          "streamId": "13096428368",
          "platform": "web",
          "activeUsers": 1163,
          "sessions": 3345,
          "engagedSessions": 2714,
          "eventCount": 724286,
          "engagementRate": 81.13602391629297,
          "avgEngagedMinutesPerUser": 120.50257953568357,
          "avgEngagedMinutesPerSession": 41.89671150971599
        },
        {
          "surface": "Web",
          "streamName": "electricnow-web",
          "streamId": "13090831762",
          "platform": "web",
          "activeUsers": 978,
          "sessions": 1810,
          "engagedSessions": 1414,
          "eventCount": 55155,
          "engagementRate": 78.12154696132598,
          "avgEngagedMinutesPerUser": 16.24655760054533,
          "avgEngagedMinutesPerSession": 8.778526703499079
        },
        {
          "surface": "Android TV / CTV",
          "streamName": "ElectricNOW tv",
          "streamId": "13118400722",
          "platform": "Android",
          "activeUsers": 207,
          "sessions": 479,
          "engagedSessions": 448,
          "eventCount": 42519,
          "engagementRate": 93.52818371607515,
          "avgEngagedMinutesPerUser": 184.89049919484702,
          "avgEngagedMinutesPerSession": 79.90048712595686
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
      "range": "May 25-May 31, 2026",
      "rows": [
        {
          "surface": "Android mobile app",
          "streamName": "ElectricNOW",
          "streamId": "12950551103",
          "platform": "Android",
          "activeUsers": 3071,
          "sessions": 4737,
          "engagedSessions": 3664,
          "eventCount": 89787,
          "engagementRate": 77.34853282668355,
          "avgEngagedMinutesPerUser": 7.872142624552263,
          "avgEngagedMinutesPerSession": 5.103514882837239
        },
        {
          "surface": "iOS / Apple app stream",
          "streamName": "ElectricNow",
          "streamId": "12982344897",
          "platform": "iOS",
          "activeUsers": 2564,
          "sessions": 4186,
          "engagedSessions": 3522,
          "eventCount": 92933,
          "engagementRate": 84.13760152890588,
          "avgEngagedMinutesPerUser": 34.89377275091003,
          "avgEngagedMinutesPerSession": 21.373060996974043
        },
        {
          "surface": "Roku",
          "streamName": "electricnow-roku",
          "streamId": "13096428368",
          "platform": "web",
          "activeUsers": 1133,
          "sessions": 3358,
          "engagedSessions": 2683,
          "eventCount": 723322,
          "engagementRate": 79.89874925550923,
          "avgEngagedMinutesPerUser": 124.22374227714035,
          "avgEngagedMinutesPerSession": 41.91349017272186
        },
        {
          "surface": "Web",
          "streamName": "electricnow-web",
          "streamId": "13090831762",
          "platform": "web",
          "activeUsers": 946,
          "sessions": 1715,
          "engagedSessions": 1303,
          "eventCount": 67284,
          "engagementRate": 75.97667638483965,
          "avgEngagedMinutesPerUser": 20.69103241719521,
          "avgEngagedMinutesPerSession": 11.413245869776482
        },
        {
          "surface": "Android TV / CTV",
          "streamName": "ElectricNOW tv",
          "streamId": "13118400722",
          "platform": "Android",
          "activeUsers": 206,
          "sessions": 471,
          "engagedSessions": 435,
          "eventCount": 30607,
          "engagementRate": 92.35668789808918,
          "avgEngagedMinutesPerUser": 245.81423948220066,
          "avgEngagedMinutesPerSession": 107.51111111111112
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
      "range": "May 18-May 24, 2026",
      "platformActiveUsers": 7672,
      "platformSessions": 14345,
      "platformEngagedSessions": 11734,
      "platformEventCount": 1017783,
      "platformEngagementRate": 81.79853607528756,
      "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition."
    },
    "currentWeek": {
      "range": "May 25-May 31, 2026",
      "platformActiveUsers": 7757,
      "platformSessions": 14362,
      "platformEngagedSessions": 11514,
      "platformEventCount": 1001881,
      "platformEngagementRate": 80.16989277259434,
      "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition."
    }
  },
  "weeklyTrend": [
    {
      "date": "May 25",
      "rawDate": "20260525",
      "activeUsers": 1019,
      "newUsers": 594,
      "sessions": 1353,
      "engagedSessions": 1112,
      "screenPageViews": 93,
      "eventCount": 31003,
      "engagementRate": 82.18773096821877
    },
    {
      "date": "May 26",
      "rawDate": "20260526",
      "activeUsers": 938,
      "newUsers": 525,
      "sessions": 1240,
      "engagedSessions": 989,
      "screenPageViews": 51,
      "eventCount": 24084,
      "engagementRate": 79.75806451612904
    },
    {
      "date": "May 27",
      "rawDate": "20260527",
      "activeUsers": 1051,
      "newUsers": 599,
      "sessions": 1367,
      "engagedSessions": 1084,
      "screenPageViews": 82,
      "eventCount": 25730,
      "engagementRate": 79.2977322604243
    },
    {
      "date": "May 28",
      "rawDate": "20260528",
      "activeUsers": 1023,
      "newUsers": 577,
      "sessions": 1322,
      "engagedSessions": 1055,
      "screenPageViews": 79,
      "eventCount": 24549,
      "engagementRate": 79.80332829046898
    },
    {
      "date": "May 29",
      "rawDate": "20260529",
      "activeUsers": 964,
      "newUsers": 552,
      "sessions": 1265,
      "engagedSessions": 1025,
      "screenPageViews": 108,
      "eventCount": 26936,
      "engagementRate": 81.02766798418972
    },
    {
      "date": "May 30",
      "rawDate": "20260530",
      "activeUsers": 985,
      "newUsers": 545,
      "sessions": 1281,
      "engagedSessions": 1028,
      "screenPageViews": 149,
      "eventCount": 22660,
      "engagementRate": 80.24980483996877
    },
    {
      "date": "May 31",
      "rawDate": "20260531",
      "activeUsers": 1059,
      "newUsers": 616,
      "sessions": 1373,
      "engagedSessions": 1097,
      "screenPageViews": 164,
      "eventCount": 27758,
      "engagementRate": 79.8980335032775
    }
  ],
  "monthlyTrend": [
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
      "sessions": 1330,
      "engagedSessions": 1064,
      "screenPageViews": 228,
      "eventCount": 30144,
      "engagementRate": 80.0
    },
    {
      "date": "May 25",
      "rawDate": "20260525",
      "activeUsers": 1019,
      "newUsers": 594,
      "sessions": 1353,
      "engagedSessions": 1112,
      "screenPageViews": 93,
      "eventCount": 31003,
      "engagementRate": 82.18773096821877
    },
    {
      "date": "May 26",
      "rawDate": "20260526",
      "activeUsers": 938,
      "newUsers": 525,
      "sessions": 1240,
      "engagedSessions": 989,
      "screenPageViews": 51,
      "eventCount": 24084,
      "engagementRate": 79.75806451612904
    },
    {
      "date": "May 27",
      "rawDate": "20260527",
      "activeUsers": 1051,
      "newUsers": 599,
      "sessions": 1367,
      "engagedSessions": 1084,
      "screenPageViews": 82,
      "eventCount": 25730,
      "engagementRate": 79.2977322604243
    },
    {
      "date": "May 28",
      "rawDate": "20260528",
      "activeUsers": 1023,
      "newUsers": 577,
      "sessions": 1322,
      "engagedSessions": 1055,
      "screenPageViews": 79,
      "eventCount": 24549,
      "engagementRate": 79.80332829046898
    },
    {
      "date": "May 29",
      "rawDate": "20260529",
      "activeUsers": 964,
      "newUsers": 552,
      "sessions": 1265,
      "engagedSessions": 1025,
      "screenPageViews": 108,
      "eventCount": 26936,
      "engagementRate": 81.02766798418972
    },
    {
      "date": "May 30",
      "rawDate": "20260530",
      "activeUsers": 985,
      "newUsers": 545,
      "sessions": 1281,
      "engagedSessions": 1028,
      "screenPageViews": 149,
      "eventCount": 22660,
      "engagementRate": 80.24980483996877
    },
    {
      "date": "May 31",
      "rawDate": "20260531",
      "activeUsers": 1059,
      "newUsers": 616,
      "sessions": 1373,
      "engagedSessions": 1097,
      "screenPageViews": 164,
      "eventCount": 27758,
      "engagementRate": 79.8980335032775
    }
  ],
  "appSectionUsage": {
    "period": "May 25-May 31, 2026",
    "metric": "GA4 active users and engaged time",
    "rows": [
      {
        "section": "Home",
        "definition": "Home/content browsing activity inferred from GA4 screen and path labels such as Home, On Demand, PDP, Player, Category, and Search.",
        "activeUsers": 945,
        "sessions": 2943,
        "engagedSessions": 2736,
        "screenPageViews": 10162,
        "eventCount": 31866,
        "engagementRate": 92.96636085626912,
        "totalEngagementSeconds": 807433,
        "totalEngagementHours": 224.28694444444446,
        "avgEngagedMinutesPerUser": 14.240440917107584,
        "avgEngagedMinutesPerSession": 4.57261864310794,
        "sharePct": 60.8
      },
      {
        "section": "En Espanol",
        "definition": "Spanish-language section activity inferred from GA4 labels containing En Espanol, Espa\u00f1ol, Espanol, Spanish, or matching paths.",
        "activeUsers": 9,
        "sessions": 12,
        "engagedSessions": 11,
        "screenPageViews": 17,
        "eventCount": 56,
        "engagementRate": 91.66666666666666,
        "totalEngagementSeconds": 339,
        "totalEngagementHours": 0.09416666666666666,
        "avgEngagedMinutesPerUser": 0.6277777777777778,
        "avgEngagedMinutesPerSession": 0.4708333333333333,
        "sharePct": 0.6
      },
      {
        "section": "Live TV",
        "definition": "Live TV activity inferred from GA4 Live screen/path labels.",
        "activeUsers": 444,
        "sessions": 1955,
        "engagedSessions": 1832,
        "screenPageViews": 3782,
        "eventCount": 62833,
        "engagementRate": 93.70843989769821,
        "totalEngagementSeconds": 5144104,
        "totalEngagementHours": 1428.9177777777777,
        "avgEngagedMinutesPerUser": 193.096996996997,
        "avgEngagedMinutesPerSession": 43.85425404944587,
        "sharePct": 28.6
      },
      {
        "section": "My Stuff",
        "definition": "Saved or personal-list activity inferred from My Stuff, My List, Mylist, Watchlist, and Favorites labels.",
        "activeUsers": 44,
        "sessions": 110,
        "engagedSessions": 110,
        "screenPageViews": 264,
        "eventCount": 272,
        "engagementRate": 100.0,
        "totalEngagementSeconds": 1571,
        "totalEngagementHours": 0.4363888888888889,
        "avgEngagedMinutesPerUser": 0.5950757575757576,
        "avgEngagedMinutesPerSession": 0.238030303030303,
        "sharePct": 2.8
      },
      {
        "section": "Settings",
        "definition": "Settings/account activity inferred from Settings, Account, Profile, and Preferences labels.",
        "activeUsers": 111,
        "sessions": 211,
        "engagedSessions": 209,
        "screenPageViews": 371,
        "eventCount": 439,
        "engagementRate": 99.0521327014218,
        "totalEngagementSeconds": 2154,
        "totalEngagementHours": 0.5983333333333334,
        "avgEngagedMinutesPerUser": 0.32342342342342345,
        "avgEngagedMinutesPerSession": 0.17014218009478674,
        "sharePct": 7.1
      }
    ],
    "note": "This section uses the current GA4 screen/path labels to infer the five app navigation areas in the order Home, En Espanol, Live TV, My Stuff, and Settings. A user can appear in more than one section. For cleaner reporting, the app should send a stable app_section value with exactly these five section names."
  },
  "rokuAppEngagement": {
    "sourceLabel": "Roku App Engagement email report",
    "sourceDetail": "Roku app engagement is parsed from the latest Roku App Engagement PDF emailed from bdp_noreply@data.roku.com. It measures Roku app/channel-store usage and is shown separately from GA4 app/web metrics.",
    "reportPeriod": "May 30-Jun 5, 2026",
    "rawReportPeriod": "8 days ago for 7 days Time Grain is day",
    "channelStoreCode": "us",
    "reportGenerated": "June 7, 2026 at 7:10 AM PDT",
    "dateLabels": [
      "Sat May 30",
      "Sun May 31",
      "Mon Jun 1",
      "Tue Jun 2",
      "Wed Jun 3",
      "Thu Jun 4",
      "Fri Jun 5"
    ],
    "metrics": {
      "newInstalls": 239,
      "uninstalls": 138,
      "netInstalls": 101,
      "cumulativeInstalls": 288329,
      "avgDailyViewers": 261,
      "avgMinPerViewer": 74.91,
      "totalHoursStreamed": 2285
    },
    "reportEmailDate": "2026-06-07T14:11:13+00:00",
    "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAO1_RKfAAA=",
    "attachmentFilename": "App_Engagement_2026-06-07T0711.pdf",
    "note": "Roku TRC Live Dashboard reports are intentionally excluded from app/platform usage to avoid mixing Roku Channel live-stream consumption with ElectricNOW app engagement."
  },
  "visitSummary": {
    "source": "GA4 sessions on tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths.",
    "weekly": {
      "label": "Weekly visits",
      "range": "May 25-May 31, 2026",
      "sessions": 14362,
      "activeUsers": 7757,
      "engagedSessions": 11514,
      "previousRange": "May 18-May 24, 2026",
      "previousSessions": 14345,
      "deltaVsPreviousPct": 0.11850819100731962,
      "comparisonLabel": "vs previous 7 days"
    },
    "monthly": {
      "label": "Monthly visits",
      "range": "May 4-May 31, 2026",
      "sessions": 53156,
      "activeUsers": 23520,
      "engagedSessions": 43481,
      "previousRange": "Apr 6-May 3, 2026",
      "previousSessions": 45811,
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
    "status": "STALE_RATE_LIMITED",
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
    "dataFreshnessNote": "STALE THIS RUN: Google Ads connector rate-limited on 2026-06-01; preserving last successful campaign totals through May 26, 2026. Device and conversion-action breakouts are from the prior detailed segment pull.",
    "statusDetail": "Google Ads connector was rate-limited on the 2026-06-01 refresh (RESOURCE_EXHAUSTED, retry delay ~228s). Showing the last successful connector pull through May 26, 2026. Figures are not zeroed; they are the most recent good data and should be treated as stale until the next successful pull.",
    "lastSuccessfulPull": "2026-05-26"
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
      "note": "Paid acquisition looks efficient on cost, but the growth signal is mixed: Google Ads spent $241.08 from May 12-May 26, 2026, generated 46,962 paid-campaign impressions, 1,458 clicks, and 443 Android first-open conversions at about $0.54 per first open. That cost per first open is strong for app acquisition, but platform audience was down 8.0% and viewing was down 2.7% in the latest GA4 week, so the ads appear good at buying installs/opens but we still need to watch whether those paid users convert into sustained viewers and time spent. Meta remains the bigger spend driver in the latest Nathan report (May 24-May 30) at $3,146.72 for 3,259 downloads (about $0.97 blended cost per download), with Android still cheaper than iOS; iOS cost per download improved to $1.23 while Android rose to $0.80, and impressions/link clicks softened (down 4.8% and 13.1%). The next question for Patrick/Nathan is whether the lower-cost Android volume produces real viewing quality.",
      "status": "STALE_RATE_LIMITED",
      "staleNote": "Google Ads connector rate-limited on 2026-06-01; last successful pull May 12-May 26, 2026. Values preserved (not zeroed) and marked stale."
    },
    "metaAds": {
      "period": "May 31-Jun 6, 2026",
      "spend": 3128.73,
      "impressions": 248978,
      "clicks": 7970,
      "ctrPct": 3.2,
      "downloads": 2997,
      "costPerDownload": 1.044,
      "iosDownloads": 1036,
      "androidDownloads": 1961,
      "source": "Nathan / Forge One Meta email report",
      "note": "Meta paid acquisition for May 31-Jun 6 remains acceptable but less efficient than the prior week. Spend was essentially flat at $3,128.73 and the campaigns produced 2,997 reported downloads at about $1.04 blended cost per download. Android is still the stronger efficiency story: 1,961 Android downloads at $0.89 each, while iOS delivered 1,036 downloads at $1.34 each. The concern is that both iOS volume and cost moved the wrong way: iOS downloads fell 17.9% and cost per iOS download rose 7.4%; Android volume was basically flat but cost per Android download rose 11.3%. The good news is CTR remains healthy at about 3.20%, so the creative/audience is still generating interest. Verdict: promising but needs proof of downstream viewing. Next tests should keep Android scaled, tighten or refresh iOS creative, and compare these paid downloads against GA4 viewing and Roku/Apple app engagement before increasing budget materially."
    }
  },
  "metaAdsSummary": {
    "source": "Meta Ads (Forge One / nathan@pcsocialmedia.com twice-weekly email report)",
    "reportType": "Meta Ads Performance Dashboard Summary (Meta-only, used to avoid double-counting Google Ads which is pulled via connector)",
    "emailFrom": "nathan@pcsocialmedia.com",
    "emailTo": "DeanD@electricentertainment.com",
    "emailSubject": "ElectricNow | Meta Ads Performance Dashboard Summary (2026-05-31 to 2026-06-06)",
    "emailDate": "2026-06-07T13:30:56+00:00",
    "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAO1_RKcAAA=",
    "reportLink": "https://app.forgeonemarketing.com/r/4542d711-77d2-4e33-a6dd-66aa3a8032fd",
    "reportCadence": "Twice weekly (Sundays and Thursdays at 6am PST/PDT), each report covers Last 7 days",
    "period": "May 31-Jun 6, 2026",
    "periodStart": "2026-05-31",
    "periodEnd": "2026-06-06",
    "comparison": "vs previous 7-day period (May 24-May 30)",
    "spend": 3128.73,
    "impressions": 248978,
    "linkClicks": 7970,
    "costPerClick": 0.39,
    "iosDownloads": 1036,
    "androidDownloads": 1961,
    "totalDownloads": 2997,
    "costPerIosDownload": 1.34,
    "costPerAndroidDownload": 0.89,
    "costPerDownload": 1.044,
    "ctrPct": 3.2,
    "deltas": {
      "spendPct": -0.4,
      "impressionsPct": -1.4,
      "costPerClickPct": 3.3,
      "linkClicksPct": -1.1,
      "iosDownloadsPct": -17.9,
      "costPerIosDownloadPct": 7.4,
      "androidDownloadsPct": -0.1,
      "costPerAndroidDownloadPct": 11.3
    },
    "campaigns": [
      {
        "name": "PCSM - ElectricNow App - Google Play - Women",
        "platform": "Android",
        "spend": 872.51,
        "appInstalls": 999,
        "costPerAppInstall": 0.87
      },
      {
        "name": "PCSM - ElectricNow App - Google Play",
        "platform": "Android",
        "spend": 868.9,
        "appInstalls": 962,
        "costPerAppInstall": 0.9
      },
      {
        "name": "PCSM - ElectricNow App - iOS - Women",
        "platform": "iOS",
        "spend": 695.2,
        "appInstalls": 511,
        "costPerAppInstall": 1.36
      },
      {
        "name": "PCSM - ElectricNow App - iOS",
        "platform": "iOS",
        "spend": 692.12,
        "appInstalls": 525,
        "costPerAppInstall": 1.32
      }
    ],
    "genderBreakdown": [
      {
        "gender": "male",
        "spend": 2154.1,
        "costPerAppInstall": 1.02,
        "appInstalls": 2106
      },
      {
        "gender": "female",
        "spend": 954.56,
        "costPerAppInstall": 1.08,
        "appInstalls": 882
      },
      {
        "gender": "unknown",
        "spend": 20.06,
        "costPerAppInstall": 2.23,
        "appInstalls": 9
      }
    ],
    "ageBreakdown": [
      {
        "ageRange": "55-64",
        "spend": 1067.49,
        "costPerAppInstall": 0.98,
        "appInstalls": 1086
      },
      {
        "ageRange": "65+",
        "spend": 939.6,
        "costPerAppInstall": 1.09,
        "appInstalls": 864
      },
      {
        "ageRange": "45-54",
        "spend": 651.7,
        "costPerAppInstall": 1.04,
        "appInstalls": 629
      },
      {
        "ageRange": "35-44",
        "spend": 326.44,
        "costPerAppInstall": 1.02,
        "appInstalls": 319
      },
      {
        "ageRange": "25-34",
        "spend": 123.05,
        "costPerAppInstall": 1.46,
        "appInstalls": 84
      },
      {
        "ageRange": "18-24",
        "spend": 20.45,
        "costPerAppInstall": 1.46,
        "appInstalls": 14
      },
      {
        "ageRange": "Unknown",
        "spend": 0.0,
        "costPerAppInstall": 0.0,
        "appInstalls": 1
      }
    ],
    "plainEnglish": "This is Meta paid acquisition data from Nathan / Forge One (pcsocialmedia.com). It covers Facebook and Instagram app-install campaigns for ElectricNOW and is separate from Google Ads connector data. These are paid-campaign impressions and clicks, not in-app ad impressions served inside ElectricNOW.",
    "paidAcquisitionInterpretation": "Meta paid acquisition for May 31-Jun 6 remains acceptable but less efficient than the prior week. Spend was essentially flat at $3,128.73 and the campaigns produced 2,997 reported downloads at about $1.04 blended cost per download. Android is still the stronger efficiency story: 1,961 Android downloads at $0.89 each, while iOS delivered 1,036 downloads at $1.34 each. The concern is that both iOS volume and cost moved the wrong way: iOS downloads fell 17.9% and cost per iOS download rose 7.4%; Android volume was basically flat but cost per Android download rose 11.3%. The good news is CTR remains healthy at about 3.20%, so the creative/audience is still generating interest. Verdict: promising but needs proof of downstream viewing. Next tests should keep Android scaled, tighten or refresh iOS creative, and compare these paid downloads against GA4 viewing and Roku/Apple app engagement before increasing budget materially."
  },
  "ga4PurchaseSignals": {
    "sourceLabel": "GA4 In-App Purchase Signals",
    "sourceShortLabel": "Google Play / Android purchase signals",
    "sourceDetail": "These are GA4 in_app_purchase events from property 497892271. They are directional purchase signals only \u2014 GA4 does not return Google Play / Android billing transaction IDs, so these rows must be reconciled against Google Play Console before being treated as financial revenue. They are intentionally kept out of the Stripe / Roku / Apple visible-sales rollup above.",
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
        "label": "Android \u00b7 mobile",
        "platform": "Android",
        "deviceCategory": "mobile",
        "eventCount": 1,
        "purchaseRevenue": 14.99
      },
      {
        "label": "Android \u00b7 smart tv",
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
  "manualAppleDownloads": {
    "sourceLabel": "Manual Apple App Store Connect snapshot",
    "sourceDetail": "User-provided App Store Connect screenshots for Free iOS/watchOS/tvOS downloads. This is app download activity, not paid sales and not GA4 active users.",
    "capturedAt": "2026-06-07 07:31 PDT",
    "enteredAt": "2026-06-07 07:55 PDT",
    "uploadedAttachments": [
      "uploaded_attachments/d6553cdb322544eda7c29709f1b35019/image.jpeg",
      "uploaded_attachments/d6553cdb322544eda7c29709f1b35019/image-1.jpeg"
    ],
    "product": "ElectricNOW",
    "platform": "Free iOS/watchOS/tvOS",
    "period": "May 31-Jun 6, 2026",
    "start": "2026-05-31",
    "end": "2026-06-06",
    "downloads": 1343,
    "displayDownloads": "1,343",
    "dailyAverage": 192,
    "daily": [
      {
        "date": "2026-05-31",
        "label": "May 31, 2026",
        "downloads": 257
      },
      {
        "date": "2026-06-01",
        "label": "June 1, 2026",
        "downloads": 206
      },
      {
        "date": "2026-06-02",
        "label": "June 2, 2026",
        "downloads": 214
      },
      {
        "date": "2026-06-03",
        "label": "June 3, 2026",
        "downloads": 206
      },
      {
        "date": "2026-06-04",
        "label": "June 4, 2026",
        "downloads": 196
      },
      {
        "date": "2026-06-05",
        "label": "June 5, 2026",
        "downloads": 126
      },
      {
        "date": "2026-06-06",
        "label": "June 6, 2026",
        "downloads": 138
      }
    ],
    "fiveWeekSnapshot": {
      "period": "Apr 27-May 31, 2026",
      "start": "2026-04-27",
      "end": "2026-05-31",
      "downloads": 6183,
      "displayDownloads": "6.18K",
      "weeklyAverage": 1240,
      "deltaPct": 353.0,
      "territories": [
        {
          "territory": "United States",
          "downloads": 6174,
          "deltaPct": 357.0
        },
        {
          "territory": "Australia",
          "downloads": 9,
          "deltaPct": -35.7
        }
      ]
    },
    "deltaPct": null,
    "territories": [
      {
        "territory": "United States",
        "downloads": 1343,
        "deltaPct": null
      }
    ],
    "note": "Because this is a manual Apple Connect screenshot, it should be preserved until replaced by a newer screenshot or an Apple App Store Connect API integration. Daily U.S. values total 1,343 for May 31-Jun 6; the separate 5-week screen shows 6,183 total free iOS/watchOS/tvOS downloads for Apr 27-May 31."
  },
  "manualDataPatch": {
    "updatedAt": "2026-06-07 07:55 PDT",
    "updatedAtIso": "2026-06-07T07:55:00-07:00",
    "items": [
      "manualAppleDownloads",
      "rokuAppEngagement",
      "metaAdsSummary"
    ],
    "note": "Manual/email data patch applied without changing GA4, Stripe, Roku sales, or Apple sales totals."
  }
};
  

  const ELECTRICNOW_ROOT = document.getElementById('electricnow-dashboard-embed') || document;
  const $ = (selector) => ELECTRICNOW_ROOT.querySelector(selector);
  
  // ---- Defensive live/FAST channel filter (reliability guardrail 2026-05-28) ----
  // Even if hosted JSON or the bundled snapshot ever ships live/FAST/linear channel
  // rows in on-demand top lists, this strips them at render time. The on-demand
  // ranking sections must NOT show live channel labels. The Live TV section
  // (which legitimately renders channel labels) is not touched.
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
      'On-demand videos only. Live-channel (FAST/linear) viewing is excluded from this list and reported separately under Live channel usage. Individual video titles are ranked by GA4 play events, regardless of collection. Collection/show is the best available parent label inferred from GA4 channel_title or grouped title labels; blanks mean GA4 did not provide a reliable parent collection for that video.';
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
      '<p class="panel-note google-ads-context" id="meta-ads-interp"></p>' +
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

    // fmt.number abbreviates large counts (e.g. 250,366 -> "250K"), so surface the
    // exact email value in a sublabel and a hover tooltip to keep it visible.
    function exactInt(value) {
      const n = toFiniteNumber(value);
      return n === null ? null : Math.round(n).toLocaleString();
    }
    function countDetail(deltaPct, exact, fallback) {
      const d = deltaLabel(deltaPct);
      const exactPart = exact ? 'Exact: ' + exact : '';
      if (d && exactPart) return d + ' · ' + exactPart;
      return d || exactPart || fallback;
    }

    const blendedCost = toFiniteNumber(summary.costPerDownload);
    const ctr = toFiniteNumber(summary.ctrPct);
    const ctrDisplay = ctr === null ? NOT_AVAILABLE : ctr.toFixed(2) + '%';
    const blendedDisplay = blendedCost === null ? NOT_AVAILABLE : '$' + blendedCost.toFixed(2);

    const kpiCards = [
      usageStat('Meta spend', fmt.currency(summary.spend), deltaLabel(deltas.spendPct) || 'Total Meta paid spend for the period'),
      usageStat('Impressions', fmt.number(summary.impressions), countDetail(deltas.impressionsPct, exactInt(summary.impressions), 'Meta platform impressions (NOT in-app ad impressions)'), exactInt(summary.impressions) ? 'Exact impressions: ' + exactInt(summary.impressions) : ''),
      usageStat('Link clicks', fmt.number(summary.linkClicks), countDetail(deltas.linkClicksPct, exactInt(summary.linkClicks), 'Clicks to the App Store / Play Store from Meta ads'), exactInt(summary.linkClicks) ? 'Exact link clicks: ' + exactInt(summary.linkClicks) : ''),
      usageStat('Cost / click', fmt.currency(summary.costPerClick), deltaLabel(deltas.costPerClickPct) || 'Average Meta cost per link click'),
      usageStat('CTR', ctrDisplay, 'Click-through rate (link clicks ÷ impressions), per Meta report', ctr === null ? '' : 'CTR ' + ctr.toFixed(2) + '%'),
      usageStat('iOS downloads', fmt.number(summary.iosDownloads), countDetail(deltas.iosDownloadsPct, exactInt(summary.iosDownloads), 'App Store installs attributed to Meta'), exactInt(summary.iosDownloads) ? 'Exact iOS downloads: ' + exactInt(summary.iosDownloads) : ''),
      usageStat('Cost / iOS download', fmt.currency(summary.costPerIosDownload), deltaLabel(deltas.costPerIosDownloadPct) || 'Meta spend divided by iOS downloads'),
      usageStat('Android downloads', fmt.number(summary.androidDownloads), countDetail(deltas.androidDownloadsPct, exactInt(summary.androidDownloads), 'Play Store installs attributed to Meta'), exactInt(summary.androidDownloads) ? 'Exact Android downloads: ' + exactInt(summary.androidDownloads) : ''),
      usageStat('Cost / Android download', fmt.currency(summary.costPerAndroidDownload), deltaLabel(deltas.costPerAndroidDownloadPct) || 'Meta spend divided by Android downloads'),
      usageStat('Total downloads', fmt.number(summary.totalDownloads), exactInt(summary.totalDownloads) ? 'iOS + Android attributed to Meta · Exact: ' + exactInt(summary.totalDownloads) : 'iOS + Android downloads attributed to Meta', exactInt(summary.totalDownloads) ? 'Exact total downloads: ' + exactInt(summary.totalDownloads) : ''),
      usageStat('Cost / download', blendedDisplay, 'Blended Meta cost per download (spend ÷ total downloads)', blendedCost === null ? '' : 'Blended cost per download $' + blendedCost.toFixed(4)),
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

    const interpEl = $('#meta-ads-interp');
    if (interpEl) interpEl.textContent = summary.paidAcquisitionInterpretation || '';
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
