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
  style.textContent = "#electricnow-dashboard-embed {\n  --bg: #050a12;\n  --surface: #0a1524;\n  --surface-2: #0f2138;\n  --surface-3: #132b48;\n  --border: rgba(255, 255, 255, 0.11);\n  --border-strong: rgba(255, 255, 255, 0.18);\n  --text: #f6f9ff;\n  --muted: #9fb3ca;\n  --faint: #667f9d;\n  --primary: #2f81d7;\n  --primary-2: #68b7ff;\n  --good: #69d895;\n  --bad: #ff6f85;\n  --warn: #ffc857;\n  --shadow: 0 22px 70px rgba(0, 0, 0, 0.42);\n  --radius: 14px;\n  --radius-sm: 10px;\n  --font-ui: 'Inter', system-ui, sans-serif;\n  --font-display: 'Barlow Condensed', 'Arial Narrow', sans-serif;\n  --embed-top-buffer: 32px;\n}\n#electricnow-dashboard-embed *,\n#electricnow-dashboard-embed *::before,\n#electricnow-dashboard-embed *::after {\n  box-sizing: border-box;\n}\n#electricnow-dashboard-embed,\n#electricnow-dashboard-embed {\n  min-height: 100%;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n#electricnow-dashboard-embed {\n  margin: 0;\n  background:\n    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),\n    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),\n    var(--bg);\n  color: var(--text);\n  font-family: var(--font-ui);\n  font-size: 15px;\n  line-height: 1.45;\n  overflow-x: hidden;\n}\n#electricnow-dashboard-embed,\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n  background:\n    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),\n    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),\n    var(--bg) !important;\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed a {\n  color: inherit !important;\n}\n#electricnow-dashboard-embed button,\n#electricnow-dashboard-embed select {\n  font: inherit;\n}\n#electricnow-dashboard-embed .skip-link {\n  position: fixed;\n  left: 16px;\n  top: 16px;\n  z-index: 1000;\n  transform: translateY(-160%);\n  background: var(--primary);\n  color: #fff;\n  padding: 10px 14px;\n  border-radius: 999px;\n}\n#electricnow-dashboard-embed .skip-link:focus {\n  transform: translateY(0);\n}\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n  max-width: 100vw;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-columns: 280px minmax(0, 1fr);\n  grid-template-rows: minmax(104px, auto) minmax(0, 1fr);\n  min-height: 100vh;\n  padding-top: var(--embed-top-buffer);\n}\n#electricnow-dashboard-embed .sidebar {\n  grid-row: 1 / -1;\n  position: sticky;\n  top: var(--embed-top-buffer);\n  height: calc(100vh - var(--embed-top-buffer));\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  border-right: 1px solid var(--border);\n  background: #050a12 !important;\n  padding: 24px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\n#electricnow-dashboard-embed .brand {\n  display: grid;\n  grid-template-columns: 48px 1fr;\n  gap: 12px;\n  align-items: center;\n  text-decoration: none;\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .brand-mark {\n  width: 48px;\n  border-radius: 4px;\n  background: linear-gradient(135deg, #2367b2, #d9ebff);\n  color: #fff;\n  padding: 7px;\n}\n#electricnow-dashboard-embed .brand span {\n  display: grid;\n  gap: 0;\n}\n#electricnow-dashboard-embed .brand strong {\n  font-family: var(--font-display);\n  font-size: 25px;\n  line-height: 0.82;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .brand small,\n#electricnow-dashboard-embed .source-card span,\n#electricnow-dashboard-embed .eyebrow,\n#electricnow-dashboard-embed .select-label {\n  color: var(--primary-2) !important;\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .side-nav {\n  display: grid;\n  gap: 6px;\n}\n#electricnow-dashboard-embed .side-nav a {\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  border-radius: var(--radius-sm);\n  color: var(--muted) !important;\n  padding: 0 12px;\n  text-decoration: none;\n}\n#electricnow-dashboard-embed .side-nav a:hover,\n#electricnow-dashboard-embed .side-nav a:focus-visible {\n  background: var(--surface-2);\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .source-card {\n  margin-top: auto;\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  background: #0f2138 !important;\n  padding: 16px;\n}\n#electricnow-dashboard-embed .source-card strong {\n  display: block;\n  margin-top: 6px;\n}\n#electricnow-dashboard-embed .source-card p {\n  margin: 8px 0 0;\n  color: var(--muted);\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n#electricnow-dashboard-embed .topbar {\n  position: sticky;\n  top: var(--embed-top-buffer);\n  z-index: 20;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  border-bottom: 1px solid var(--border);\n  background: #070d17 !important;\n  backdrop-filter: blur(14px);\n  padding: 18px 28px;\n}\n#electricnow-dashboard-embed .topbar > div:first-child {\n  min-width: 0;\n  flex: 1 1 360px;\n}\n#electricnow-dashboard-embed .topbar h1 {\n  color: var(--text) !important;\n  margin: 2px 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(26px, 2.35vw, 34px);\n  line-height: 0.98;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .topbar-actions {\n  flex: 0 1 520px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n}\n#electricnow-dashboard-embed select,\n#electricnow-dashboard-embed .ghost-button {\n  min-height: 42px;\n  border: 1px solid var(--border-strong);\n  border-radius: 999px;\n  background: #0f2138 !important;\n  color: var(--text) !important;\n  padding: 0 14px;\n}\n#electricnow-dashboard-embed .ghost-button {\n  cursor: pointer;\n}\n#electricnow-dashboard-embed .ghost-button:disabled {\n  cursor: wait;\n  opacity: 0.55;\n}\n#electricnow-dashboard-embed .refresh-button {\n  border-color: rgba(104, 183, 255, 0.42);\n}\n#electricnow-dashboard-embed .refresh-status {\n  min-width: 130px;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .ghost-button.is-active,\n#electricnow-dashboard-embed .ghost-button:hover {\n  background: var(--primary);\n  border-color: var(--primary);\n}\n#electricnow-dashboard-embed .main {\n  padding: 28px;\n  min-width: 0;\n  background: #050a12 !important;\n}\n#electricnow-dashboard-embed .hero-panel,\n#electricnow-dashboard-embed .panel,\n#electricnow-dashboard-embed .plain-panel,\n#electricnow-dashboard-embed .kpi-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0)),\n    #0a1524 !important;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n#electricnow-dashboard-embed .hero-panel {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 260px;\n  align-items: end;\n  gap: 24px;\n  background:\n    linear-gradient(135deg, rgba(47, 129, 215, 0.28), rgba(10, 21, 36, 0.96) 55%),\n    #0a1524 !important;\n  padding: clamp(24px, 4vw, 42px);\n}\n#electricnow-dashboard-embed .hero-panel h2,\n#electricnow-dashboard-embed .plain-panel h2,\n#electricnow-dashboard-embed .panel h2 {\n  color: var(--text) !important;\n  margin: 4px 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(25px, 3vw, 34px);\n  line-height: 0.96;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .panel h3,\n#electricnow-dashboard-embed .subsection-header h3 {\n  color: var(--text) !important;\n  margin: 18px 0 10px;\n  font-family: var(--font-display);\n  font-size: 22px;\n  line-height: 0.95;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .subsection-header {\n  margin-top: 28px;\n  border-top: 1px solid var(--border);\n  padding-top: 20px;\n}\n#electricnow-dashboard-embed .panel-note {\n  margin: 0 0 16px;\n  color: var(--muted);\n  font-size: 13px;\n  max-width: 860px;\n}\n#electricnow-dashboard-embed .topbar h1,\n#electricnow-dashboard-embed .hero-panel h2,\n#electricnow-dashboard-embed .plain-panel h2,\n#electricnow-dashboard-embed .panel h2,\n#electricnow-dashboard-embed .panel h3,\n#electricnow-dashboard-embed .subsection-header h3 {\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .eyebrow,\n#electricnow-dashboard-embed .select-label,\n#electricnow-dashboard-embed .source-card span,\n#electricnow-dashboard-embed .brand small {\n  color: var(--primary-2) !important;\n}\n#electricnow-dashboard-embed .hero-panel p {\n  max-width: 72ch;\n  margin: 14px 0 0;\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .hero-meta {\n  display: grid;\n  gap: 4px;\n  justify-items: end;\n  color: var(--muted);\n  text-align: right;\n}\n#electricnow-dashboard-embed .hero-meta strong {\n  color: var(--text);\n}\n#electricnow-dashboard-embed .visit-strip {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\n  gap: 16px;\n  margin-top: 18px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--radius);\n  background:\n    linear-gradient(135deg, rgba(47, 129, 215, 0.20), rgba(10, 21, 36, 0.96)),\n    var(--surface);\n  box-shadow: var(--shadow);\n  padding: 20px;\n}\n#electricnow-dashboard-embed .visit-strip-header h2 {\n  margin: 2px 0 8px;\n  color: var(--text);\n  font-family: var(--font-display);\n  font-size: clamp(26px, 3vw, 38px);\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .visit-strip-header p:not(.eyebrow),\n#electricnow-dashboard-embed .visit-source,\n#electricnow-dashboard-embed .visit-card p {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .visit-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .visit-card {\n  display: grid;\n  gap: 10px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(5, 10, 18, 0.46);\n  padding: 16px;\n}\n#electricnow-dashboard-embed .visit-card span {\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .visit-card strong {\n  color: var(--text);\n  font-family: var(--font-display);\n  font-size: clamp(42px, 5vw, 64px);\n  line-height: 0.9;\n  letter-spacing: 0.02em;\n}\n#electricnow-dashboard-embed .visit-card-meta {\n  display: grid;\n  gap: 4px;\n}\n#electricnow-dashboard-embed .visit-card small {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .visit-card p,\n#electricnow-dashboard-embed .visit-source {\n  margin: 0;\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .visit-source {\n  grid-column: 1 / -1;\n}\n#electricnow-dashboard-embed .plain-panel {\n  display: none;\n  grid-template-columns: 240px 1fr;\n  gap: 24px;\n  margin-top: 18px;\n  padding: 20px;\n}\n#electricnow-dashboard-embed .plain-panel.is-visible {\n  display: grid;\n}\n#electricnow-dashboard-embed .plain-panel ul {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n#electricnow-dashboard-embed .plain-panel li,\n#electricnow-dashboard-embed .gap-list li {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .plain-panel li.insight-overview {\n  color: var(--text);\n  font-size: 1.03rem;\n  line-height: 1.55;\n}\n#electricnow-dashboard-embed .kpi-grid {\n  display: grid;\n  gap: 18px;\n  margin-top: 18px;\n}\n#electricnow-dashboard-embed .kpi-group {\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  background: #08111e !important;\n  padding: 16px;\n  box-shadow: var(--shadow);\n}\n#electricnow-dashboard-embed .kpi-group-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  margin-bottom: 12px;\n}\n#electricnow-dashboard-embed .kpi-group-header h3 {\n  margin: 0;\n  color: var(--text) !important;\n  font-family: var(--font-display);\n  font-size: 23px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .kpi-group-header > p {\n  max-width: 620px;\n  margin: 0;\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .kpi-group-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .kpi-card {\n  min-height: 232px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 16px;\n}\n#electricnow-dashboard-embed .kpi-card span,\n#electricnow-dashboard-embed .metric-row span,\n#electricnow-dashboard-embed .table-wrap th {\n  color: var(--faint);\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .kpi-card span {\n  min-height: 32px;\n  display: block;\n}\n#electricnow-dashboard-embed .kpi-card strong {\n  display: block;\n  margin-top: 8px;\n  font-family: var(--font-display);\n  font-size: 34px;\n  line-height: 0.95;\n  letter-spacing: 0.03em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .kpi-card p {\n  margin: 12px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .kpi-compare-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 8px;\n  align-items: center;\n  margin-top: 14px;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n#electricnow-dashboard-embed .kpi-compare-grid small {\n  color: var(--faint);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .delta {\n  display: inline-flex;\n  align-self: flex-start;\n  margin-top: 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--muted);\n  padding: 4px 8px;\n  font-size: 12px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .delta.up {\n  color: var(--good);\n}\n#electricnow-dashboard-embed .delta.down {\n  color: var(--bad);\n}\n#electricnow-dashboard-embed .delta.baseline-unavailable {\n  color: var(--muted);\n  font-weight: 600;\n  font-style: italic;\n}\n#electricnow-dashboard-embed .dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n  gap: 18px;\n  margin-top: 18px;\n}\n#electricnow-dashboard-embed .span-4 {\n  grid-column: span 4;\n}\n#electricnow-dashboard-embed .span-6 {\n  grid-column: span 6;\n}\n#electricnow-dashboard-embed .span-8 {\n  grid-column: span 8;\n}\n#electricnow-dashboard-embed .panel {\n  min-width: 0;\n  padding: 18px;\n}\n#electricnow-dashboard-embed .panel-header {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: start;\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .period-chip {\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--muted);\n  padding: 6px 10px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n#electricnow-dashboard-embed .chart-wrap,\n#electricnow-dashboard-embed .mini-chart-wrap {\n  width: 100%;\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .chart-wrap + h3 {\n  margin-top: 24px;\n}\n#electricnow-dashboard-embed .chart-legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px 18px;\n  margin-top: 12px;\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .chart-legend span {\n  display: inline-flex;\n  gap: 7px;\n  align-items: center;\n}\n#electricnow-dashboard-embed .legend-swatch {\n  width: 22px;\n  height: 4px;\n  border-radius: 999px;\n  display: inline-block;\n}\n#electricnow-dashboard-embed .legend-blue {\n  background: var(--primary-2);\n}\n#electricnow-dashboard-embed .legend-green {\n  background: var(--good);\n}\n#electricnow-dashboard-embed svg {\n  width: 100%;\n  height: auto;\n}\n#electricnow-dashboard-embed .axis {\n  stroke: rgba(255, 255, 255, 0.12);\n}\n#electricnow-dashboard-embed .chart-label {\n  fill: var(--muted);\n  font-size: 12px;\n  font-family: var(--font-ui);\n}\n#electricnow-dashboard-embed .chart-end-label {\n  font-family: var(--font-ui);\n  font-size: 12px;\n  font-weight: 800;\n  paint-order: stroke;\n  stroke: var(--surface);\n  stroke-width: 4px;\n}\n#electricnow-dashboard-embed .active-end {\n  fill: var(--primary-2);\n}\n#electricnow-dashboard-embed .engaged-end {\n  fill: var(--good);\n}\n#electricnow-dashboard-embed .line-active {\n  fill: none;\n  stroke: var(--primary-2);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .line-engaged {\n  fill: none;\n  stroke: var(--good);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .line-purchase {\n  fill: none;\n  stroke: var(--warn);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .area-fill {\n  fill: rgba(104, 183, 255, 0.12);\n}\n#electricnow-dashboard-embed .purchase-summary {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .sales-summary {\n  display: grid;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .sales-callout {\n  border: 1px solid rgba(255, 200, 87, 0.28);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(255, 200, 87, 0.15), rgba(47, 129, 215, 0.1));\n  padding: 14px;\n}\n#electricnow-dashboard-embed .sales-callout span,\n#electricnow-dashboard-embed .sales-stat span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-callout strong {\n  display: block;\n  margin-top: 5px;\n  font-family: var(--font-display);\n  font-size: 30px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-callout p,\n#electricnow-dashboard-embed .sales-note,\n#electricnow-dashboard-embed .sales-source,\n#electricnow-dashboard-embed .sales-stat em {\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .sales-callout p,\n#electricnow-dashboard-embed .sales-source,\n#electricnow-dashboard-embed .sales-note {\n  margin: 8px 0 0;\n}\n#electricnow-dashboard-embed .sales-source {\n  border-left: 2px solid rgba(104, 183, 255, 0.45);\n  padding-left: 10px;\n}\n#electricnow-dashboard-embed .sales-source-list {\n  display: grid;\n  gap: 6px;\n  margin: 14px 0 0;\n  padding: 0;\n  list-style: none;\n}\n#electricnow-dashboard-embed .sales-source-list li {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 8px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .sales-source-list li strong {\n  color: var(--text);\n  font-size: 12px;\n  text-align: right;\n}\n#electricnow-dashboard-embed .sales-stat-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n#electricnow-dashboard-embed .sales-stat {\n  min-width: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.58);\n  padding: 12px;\n}\n#electricnow-dashboard-embed .sales-stat strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 26px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-stat.baseline-set strong {\n  color: var(--good);\n  font-size: 24px;\n}\n#electricnow-dashboard-embed .sales-audit {\n  border: 1px solid rgba(104, 183, 255, 0.34);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.72);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .sales-audit span {\n  display: block;\n  color: var(--warn);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-audit strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 28px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-audit p,\n#electricnow-dashboard-embed .sales-audit small {\n  display: block;\n  margin: 8px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .purchase-row,\n#electricnow-dashboard-embed .metric-row {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 12px;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  padding-block: 10px;\n}\n#electricnow-dashboard-embed .purchase-row:last-child,\n#electricnow-dashboard-embed .metric-row:last-child {\n  border-bottom: 0;\n}\n#electricnow-dashboard-embed .purchase-row strong,\n#electricnow-dashboard-embed .metric-row strong {\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .not-tracked {\n  color: var(--warn);\n}\n#electricnow-dashboard-embed .purchase-point-label {\n  fill: var(--text);\n  font-size: 11px;\n  font-weight: 700;\n}\n#electricnow-dashboard-embed .metric-list {\n  display: grid;\n}\n#electricnow-dashboard-embed .usage-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 18px;\n}\n#electricnow-dashboard-embed .roku-engagement-grid {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin-bottom: 0;\n}\n#electricnow-dashboard-embed .roku-live-channel-grid {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  margin-bottom: 14px;\n}\n@media (max-width: 1180px) {\n#electricnow-dashboard-embed .roku-live-channel-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n#electricnow-dashboard-embed .roku-live-channel-grid {\n    grid-template-columns: 1fr;\n  }\n}\n#electricnow-dashboard-embed .roku-live-channel-split {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-top: 8px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .roku-live-channel-split {\n    grid-template-columns: 1fr;\n  }\n}\n#electricnow-dashboard-embed .usage-stat {\n  border: 1px solid rgba(104, 183, 255, 0.18);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.52);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .usage-stat span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .usage-stat strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 32px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .usage-stat em {\n  display: block;\n  margin-top: 5px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-mix {\n  display: grid;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n#electricnow-dashboard-embed .platform-total {\n  border: 1px solid rgba(104, 183, 255, 0.22);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));\n  padding: 14px;\n}\n#electricnow-dashboard-embed .platform-total span,\n#electricnow-dashboard-embed .coming-platforms span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .platform-total strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 36px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n}\n#electricnow-dashboard-embed .platform-total em,\n#electricnow-dashboard-embed .platform-share-card span,\n#electricnow-dashboard-embed .platform-share-card p,\n#electricnow-dashboard-embed .platform-note {\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-share-list {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .section-usage-list {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .section-usage-card {\n  min-width: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.62);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .section-usage-card header {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .section-usage-card span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .section-usage-card strong,\n#electricnow-dashboard-embed .section-usage-card b {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  line-height: 0.98;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .section-usage-card strong {\n  font-size: 28px;\n}\n#electricnow-dashboard-embed .section-usage-card b {\n  color: var(--good);\n  font-size: 18px;\n  text-align: left;\n  white-space: normal;\n}\n#electricnow-dashboard-embed .section-metrics {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px;\n  margin-top: 12px;\n}\n#electricnow-dashboard-embed .section-metrics em {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 999px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n  padding: 5px 8px;\n}\n#electricnow-dashboard-embed .section-usage-card p {\n  margin: 12px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .platform-share-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.52);\n  padding: 12px;\n}\n#electricnow-dashboard-embed .platform-share-card.is-untracked {\n  border-style: dashed;\n  background: rgba(255, 199, 95, 0.08);\n}\n#electricnow-dashboard-embed .platform-share-card header {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: start;\n}\n#electricnow-dashboard-embed .platform-share-card strong,\n#electricnow-dashboard-embed .platform-share-card b {\n  color: var(--text) !important;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .platform-share-card strong {\n  display: block;\n}\n#electricnow-dashboard-embed .platform-share-card b {\n  font-family: var(--font-display);\n  font-size: 24px;\n  line-height: 1;\n}\n#electricnow-dashboard-embed .platform-share-card.is-untracked b {\n  color: var(--warn) !important;\n}\n#electricnow-dashboard-embed .share-track {\n  height: 9px;\n  margin-top: 10px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .share-fill {\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--primary), var(--primary-2));\n}\n#electricnow-dashboard-embed .platform-share-card p {\n  margin: 8px 0 0;\n}\n#electricnow-dashboard-embed .compact-card {\n  padding: 10px;\n}\n#electricnow-dashboard-embed .compact-card header {\n  align-items: center;\n}\n#electricnow-dashboard-embed .compact-card b {\n  font-size: 20px;\n}\n#electricnow-dashboard-embed .coming-platforms {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n#electricnow-dashboard-embed .coming-platforms span {\n  margin-right: 4px;\n}\n#electricnow-dashboard-embed .coming-platforms em {\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--muted);\n  padding: 4px 9px;\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-note {\n  margin: 0 0 16px;\n}\n#electricnow-dashboard-embed .bar-list {\n  display: grid;\n  gap: 13px;\n}\n#electricnow-dashboard-embed .bar-row {\n  display: grid;\n  gap: 7px;\n}\n#electricnow-dashboard-embed .bar-row header {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n#electricnow-dashboard-embed .bar-row span {\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .bar-track {\n  height: 9px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .bar-fill {\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--primary), var(--primary-2));\n}\n#electricnow-dashboard-embed .table-wrap {\n  overflow-x: auto;\n  max-width: 100%;\n}\n#electricnow-dashboard-embed table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 520px;\n}\n#electricnow-dashboard-embed .title-table table {\n  min-width: 720px;\n}\n#electricnow-dashboard-embed th,\n#electricnow-dashboard-embed td {\n  border-bottom: 1px solid var(--border);\n  padding: 10px 8px;\n  text-align: left;\n  vertical-align: top;\n}\n#electricnow-dashboard-embed td {\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed td strong {\n  color: var(--text);\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .gap-list {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding-left: 18px;\n}\n#electricnow-dashboard-embed :focus-visible {\n  outline: 2px solid var(--primary-2);\n  outline-offset: 3px;\n}\n@media (max-width: 1180px) {\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto 1fr;\n  }\n#electricnow-dashboard-embed .sidebar {\n    position: static;\n    height: auto;\n    grid-row: auto;\n  }\n#electricnow-dashboard-embed .side-nav {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n#electricnow-dashboard-embed .source-card {\n    margin-top: 0;\n  }\n#electricnow-dashboard-embed .kpi-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n#electricnow-dashboard-embed .section-usage-list {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n\n}\n@media (max-width: 820px) {\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n    overflow-x: hidden;\n  }\n#electricnow-dashboard-embed .sidebar,\n#electricnow-dashboard-embed .topbar,\n#electricnow-dashboard-embed .main {\n    min-width: 0;\n    width: 100%;\n  }\n#electricnow-dashboard-embed .topbar,\n#electricnow-dashboard-embed .hero-panel,\n#electricnow-dashboard-embed .visit-strip,\n#electricnow-dashboard-embed .plain-panel {\n    grid-template-columns: 1fr;\n  }\n#electricnow-dashboard-embed .topbar {\n    align-items: stretch;\n  }\n#electricnow-dashboard-embed .topbar-actions {\n    justify-content: flex-start;\n  }\n#electricnow-dashboard-embed .kpi-group-header {\n    display: block;\n  }\n#electricnow-dashboard-embed .kpi-group-header > p {\n    margin-top: 8px;\n  }\n#electricnow-dashboard-embed .hero-meta {\n    justify-items: start;\n    text-align: left;\n  }\n#electricnow-dashboard-embed .main {\n    padding: 16px;\n  }\n#electricnow-dashboard-embed .kpi-grid,\n#electricnow-dashboard-embed .dashboard-grid,\n#electricnow-dashboard-embed .visit-card-grid,\n#electricnow-dashboard-embed .section-usage-list,\n#electricnow-dashboard-embed .side-nav {\n    grid-template-columns: 1fr;\n  }\n#electricnow-dashboard-embed .source-card {\n    max-width: 100%;\n  }\n#electricnow-dashboard-embed .span-4,\n#electricnow-dashboard-embed .span-6,\n#electricnow-dashboard-embed .span-8 {\n    grid-column: auto;\n  }\n\n\n}\n@media (max-width: 520px) {\n#electricnow-dashboard-embed .sidebar {\n    padding: 20px 16px;\n  }\n#electricnow-dashboard-embed .brand {\n    grid-template-columns: 48px minmax(0, 1fr);\n  }\n#electricnow-dashboard-embed .brand strong {\n    font-size: 23px;\n    letter-spacing: 0.18em;\n  }\n#electricnow-dashboard-embed .topbar-actions {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: stretch;\n  }\n#electricnow-dashboard-embed select,\n#electricnow-dashboard-embed .ghost-button {\n    width: 100%;\n    max-width: 100%;\n  }\n#electricnow-dashboard-embed .kpi-grid {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed /* ===== Google Ads section ===== */\n.google-ads-panel .panel-note {\n  margin-bottom: 14px;\n}\n#electricnow-dashboard-embed .google-ads-campaign {\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  justify-content: space-between;\n  align-items: flex-start;\n  border: 1px solid rgba(104, 183, 255, 0.22);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));\n  padding: 14px 16px;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card strong {\n  display: block;\n  margin-top: 4px;\n  font-family: var(--font-display);\n  font-size: 20px;\n  line-height: 1.1;\n  letter-spacing: 0.02em;\n  color: var(--text);\n}\n#electricnow-dashboard-embed .google-ads-campaign-card em {\n  display: block;\n  margin-top: 4px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .google-ads-campaign-meta {\n  text-align: right;\n  min-width: 160px;\n}\n#electricnow-dashboard-embed .google-ads-kpis {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin-bottom: 22px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .google-ads-kpis {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n\n}\n@media (max-width: 560px) {\n#electricnow-dashboard-embed .google-ads-kpis {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed .google-ads-split {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .google-ads-split {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed .google-ads-device-list,\n#electricnow-dashboard-embed .google-ads-action-list {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .google-ads-device-row,\n#electricnow-dashboard-embed .google-ads-action-row {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.62);\n  padding: 12px 14px;\n}\n#electricnow-dashboard-embed .google-ads-device-row header,\n#electricnow-dashboard-embed .google-ads-action-row header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .google-ads-device-row header span,\n#electricnow-dashboard-embed .google-ads-action-row header span {\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .google-ads-device-row header strong,\n#electricnow-dashboard-embed .google-ads-action-row header strong {\n  font-family: var(--font-display);\n  font-size: 18px;\n  letter-spacing: 0.02em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-device-row .share-track {\n  margin: 8px 0 8px;\n}\n#electricnow-dashboard-embed .google-ads-device-metrics {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 14px;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .google-ads-device-metrics em {\n  font-style: normal;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-action-row em {\n  display: block;\n  margin-top: 6px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-context {\n  margin-top: 6px;\n  padding: 12px 14px;\n  border-left: 3px solid var(--warn);\n  background: rgba(255, 200, 87, 0.06);\n  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;\n  color: var(--text);\n}\n\n";
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
    "generatedAt": "2026-07-03 09:00 PDT",
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
        "label": "Previous 7 days",
        "range": "Jun 15-Jun 21, 2026",
        "start": "2026-06-15",
        "end": "2026-06-21"
      },
      "baseline": {
        "label": "Previous 7 days",
        "range": "Jun 15-Jun 21, 2026",
        "start": "2026-06-15",
        "end": "2026-06-21"
      },
      "currentWeek": {
        "label": "Latest 7 complete days",
        "range": "Jun 22-Jun 28, 2026",
        "start": "2026-06-22",
        "end": "2026-06-28"
      },
      "weekToDate": {
        "label": "Latest 7 complete days",
        "range": "Jun 22-Jun 28, 2026",
        "start": "2026-06-22",
        "end": "2026-06-28"
      }
    },
    "periodTotals": {
      "launchBaseline": {
        "activeUsers": 8739,
        "newUsers": 8011,
        "sessions": 13421,
        "engagedSessions": 7960,
        "engagementRate": 59.310036509947096,
        "screenPageViews": 39326,
        "eventCount": 705015,
        "purchaseRevenue": 89.94999999999999,
        "userEngagementDuration": 13165345
      },
      "previousWeek": {
        "activeUsers": 5876,
        "newUsers": 3290,
        "sessions": 11818,
        "engagedSessions": 9331,
        "engagementRate": 78.95583008969369,
        "screenPageViews": 29850,
        "eventCount": 969672,
        "userEngagementDuration": 17253630,
        "purchaseRevenue": 37.57
      },
      "baseline": {
        "activeUsers": 5876,
        "newUsers": 3290,
        "sessions": 11818,
        "engagedSessions": 9331,
        "engagementRate": 78.95583008969369,
        "screenPageViews": 29850,
        "eventCount": 969672,
        "userEngagementDuration": 17253630,
        "purchaseRevenue": 37.57
      },
      "currentWeek": {
        "activeUsers": 5921,
        "newUsers": 3032,
        "sessions": 12379,
        "engagedSessions": 8511,
        "engagementRate": 68.75353421116407,
        "screenPageViews": 33975,
        "eventCount": 995251,
        "userEngagementDuration": 17566100,
        "purchaseRevenue": 37.57,
        "engagementRateCaveat": "Sunday Jun 28 shows a low engagementRate/engagedSessions classification despite high users/sessions/views/time. Use engagement duration, app_time, user_engagement and play/video events as the primary attention signals; engagedSessions/engagementRate this week are potentially inconsistent and should NOT be read as a real retention collapse."
      },
      "weekToDate": {
        "activeUsers": 5921,
        "newUsers": 3032,
        "sessions": 12379,
        "engagedSessions": 8511,
        "engagementRate": 68.75353421116407,
        "screenPageViews": 33975,
        "eventCount": 995251,
        "userEngagementDuration": 17566100,
        "purchaseRevenue": 37.57,
        "engagementRateCaveat": "Sunday Jun 28 shows a low engagementRate/engagedSessions classification despite high users/sessions/views/time. Use engagement duration, app_time, user_engagement and play/video events as the primary attention signals; engagedSessions/engagementRate this week are potentially inconsistent and should NOT be read as a real retention collapse."
      }
    },
    "scorecards": [
      {
        "key": "platformActiveUsers",
        "label": "Platform active users",
        "baseline": 5282,
        "launchBaseline": 8710,
        "previousWeek": 5282,
        "current": 5327,
        "deltaPct": 0.85195,
        "deltaVsLaunchPct": -38.840413,
        "deltaVsPreviousPct": 0.85195,
        "deltaType": "percent",
        "format": "number",
        "context": "GA4 active users excluding landing-page acquisition paths."
      },
      {
        "key": "platformSessions",
        "label": "Platform sessions",
        "baseline": 10925,
        "launchBaseline": 13323,
        "previousWeek": 10925,
        "current": 11486,
        "deltaPct": 5.135011,
        "deltaVsLaunchPct": -13.788186,
        "deltaVsPreviousPct": 5.135011,
        "deltaType": "percent",
        "format": "number",
        "context": "GA4 sessions excluding landing-page acquisition paths."
      },
      {
        "key": "viewingEventUsers",
        "label": "Viewing event users",
        "baseline": 2410,
        "launchBaseline": 1152,
        "previousWeek": 2410,
        "current": 1726,
        "deltaPct": -28.381743,
        "deltaVsLaunchPct": 49.826389,
        "deltaVsPreviousPct": -28.381743,
        "deltaType": "percent",
        "format": "number",
        "context": "Users who triggered on-demand video_start or Live play events."
      },
      {
        "key": "totalEngagementHours",
        "label": "Total engaged hours",
        "baseline": 4792.675,
        "launchBaseline": 3652.9975,
        "previousWeek": 4792.675,
        "current": 4879.472222,
        "deltaPct": 1.811039,
        "deltaVsLaunchPct": 33.574475,
        "deltaVsPreviousPct": 1.811039,
        "deltaType": "percent",
        "format": "number",
        "context": "Total GA4 engaged time (property 497892271) for Jun 22-Jun 28, 2026, converted to hours - refreshed this run and UP +1.8% vs Jun 15-21. Engagement DEPTH / time-spent improved; GA4's engaged-session RATE looks down only because of an isolated Sunday Jun 28 classification anomaly, so time spent is the more reliable attention signal."
      },
      {
        "key": "avgEngagedMinutesPerUser",
        "label": "Avg time per user",
        "baseline": 48.938138,
        "launchBaseline": 25.164161882893225,
        "previousWeek": 48.938138,
        "current": 49.445758,
        "deltaPct": 1.037269,
        "deltaVsLaunchPct": 96.492767,
        "deltaVsPreviousPct": 1.037269,
        "deltaType": "minutes",
        "format": "minutes",
        "context": "Total GA4 engaged time (Jun 22-Jun 28, 2026, property 497892271) divided by active users, excluding landing-page paths - refreshed this run and UP +1.0% vs Jun 15-21. Time-per-user rose even as the GA4 engaged-session rate dipped on the Jun 28 anomaly."
      },
      {
        "key": "landingPageUsers",
        "label": "Landing-page users",
        "baseline": 744,
        "launchBaseline": 1045,
        "previousWeek": 744,
        "current": 594,
        "deltaPct": -20.16129,
        "deltaVsLaunchPct": -43.157895,
        "deltaVsPreviousPct": -20.16129,
        "deltaType": "percent",
        "format": "number",
        "context": "Users reaching pages with “landing” in the path."
      },
      {
        "key": "devicesPageUsers",
        "label": "Devices-page users",
        "baseline": 131,
        "launchBaseline": 2028,
        "previousWeek": 131,
        "current": 60,
        "deltaPct": -54.198473,
        "deltaVsLaunchPct": -97.04142,
        "deltaVsPreviousPct": -54.198473,
        "deltaType": "percent",
        "format": "number",
        "context": "Users reaching pages with “devices” in the path."
      },
      {
        "key": "paidSocialUsers",
        "label": "Paid social users",
        "baseline": 2421,
        "launchBaseline": 4441,
        "previousWeek": 2421,
        "current": 2421,
        "deltaPct": 0.0,
        "deltaVsLaunchPct": -45.485251,
        "deltaVsPreviousPct": 0.0,
        "deltaType": "percent",
        "format": "number",
        "context": "Users from GA4 source/medium values containing Facebook, Instagram, or Meta. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)"
      },
      {
        "key": "appActiveUsers",
        "label": "App stream active users",
        "baseline": 5635,
        "launchBaseline": 1547,
        "previousWeek": 5635,
        "current": 5635,
        "deltaPct": 0.0,
        "deltaVsLaunchPct": 264.253394,
        "deltaVsPreviousPct": 0.0,
        "deltaType": "percent",
        "format": "number",
        "context": "People using the Apple/iOS or Android app streams; Apple TV is not yet split from the Apple/iOS stream. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)",
        "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run."
      },
      {
        "key": "appSessions",
        "label": "App stream sessions",
        "baseline": 8832,
        "launchBaseline": 2889,
        "previousWeek": 8832,
        "current": 8832,
        "deltaPct": 0.0,
        "deltaVsLaunchPct": 205.711319,
        "deltaVsPreviousPct": 0.0,
        "deltaType": "percent",
        "format": "number",
        "context": "GA4 sessions on the Apple/iOS and Android app streams. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)",
        "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run."
      },
      {
        "key": "appEngagementRate",
        "label": "App stream engagement rate",
        "baseline": 78.53266767961797,
        "launchBaseline": 59.70126848307439,
        "previousWeek": 78.53266767961797,
        "current": 78.53266767961797,
        "deltaPct": 0.0,
        "deltaVsLaunchPct": 31.542712,
        "deltaVsPreviousPct": 0.0,
        "deltaType": "points",
        "format": "percent",
        "context": "Engaged app-stream sessions divided by app-stream sessions. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)",
        "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run."
      },
      {
        "key": "viewingEventUsers",
        "label": "Viewing event users",
        "baseline": 2410,
        "launchBaseline": 1152,
        "previousWeek": 2410,
        "current": 1726,
        "deltaPct": -28.381743,
        "deltaVsLaunchPct": 49.826389,
        "deltaVsPreviousPct": -28.381743,
        "deltaType": "percent",
        "format": "number",
        "context": "Users who triggered on-demand video_start or Live play events."
      },
      {
        "key": "onDemandStartUsers",
        "label": "On-demand start users",
        "baseline": 2354,
        "launchBaseline": 1020,
        "previousWeek": 2354,
        "current": 2354,
        "deltaPct": 0.0,
        "deltaVsLaunchPct": 130.784314,
        "deltaVsPreviousPct": 0.0,
        "deltaType": "percent",
        "format": "number",
        "context": "Users who triggered video_start outside the Live screen. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)"
      },
      {
        "key": "liveChannelViewers",
        "label": "Live channel viewers",
        "baseline": 132,
        "launchBaseline": 121,
        "previousWeek": 132,
        "current": 132,
        "deltaPct": 0.0,
        "deltaVsLaunchPct": 9.090909,
        "deltaVsPreviousPct": 0.0,
        "deltaType": "percent",
        "format": "number",
        "context": "Users who triggered a Live play event. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)"
      },
      {
        "key": "videoCompleteUsers",
        "label": "Video complete users",
        "baseline": 209,
        "launchBaseline": 219,
        "previousWeek": 209,
        "current": 222,
        "deltaPct": 6.220096,
        "deltaVsLaunchPct": 1.369863,
        "deltaVsPreviousPct": 6.220096,
        "deltaType": "percent",
        "format": "number",
        "context": "Users who triggered video_complete."
      },
      {
        "key": "livePlayEvents",
        "label": "Live play events",
        "baseline": 3898,
        "launchBaseline": 3952,
        "previousWeek": 3898,
        "current": 3898,
        "deltaPct": 0.0,
        "deltaVsLaunchPct": -1.366397,
        "deltaVsPreviousPct": 0.0,
        "deltaType": "percent",
        "format": "number",
        "context": "Total Live play events, not unique users. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)"
      },
      {
        "key": "adRequestEvents",
        "label": "Ad request events",
        "baseline": 25669,
        "launchBaseline": 10589,
        "previousWeek": 25669,
        "current": 26144,
        "deltaPct": 1.850481,
        "deltaVsLaunchPct": 146.897724,
        "deltaVsPreviousPct": 1.850481,
        "deltaType": "percent",
        "format": "number",
        "context": "Total ad request events generated by viewing activity."
      },
      {
        "key": "avgEngagedMinutesPerUser",
        "label": "Avg time per user",
        "baseline": 48.938138,
        "launchBaseline": 25.164161882893225,
        "previousWeek": 48.938138,
        "current": 49.445758,
        "deltaPct": 1.037269,
        "deltaVsLaunchPct": 96.492767,
        "deltaVsPreviousPct": 1.037269,
        "deltaType": "minutes",
        "format": "minutes",
        "context": "Total GA4 engaged time (Jun 22-Jun 28, 2026, property 497892271) divided by active users, excluding landing-page paths - refreshed this run and UP +1.0% vs Jun 15-21. Time-per-user rose even as the GA4 engaged-session rate dipped on the Jun 28 anomaly."
      },
      {
        "key": "avgEngagedMinutesPerSession",
        "label": "Avg time per session",
        "baseline": 24.332417,
        "launchBaseline": 16.45123845980635,
        "previousWeek": 24.332417,
        "current": 23.650403,
        "deltaPct": -2.802903,
        "deltaVsLaunchPct": 43.760624,
        "deltaVsPreviousPct": -2.802903,
        "deltaType": "minutes",
        "format": "minutes",
        "context": "Total GA4 engaged time (Jun 22-Jun 28, 2026) divided by sessions - refreshed this run. Down slightly (~-2.8%) only because sessions grew faster (+4.7%) than total engaged time (+1.8%); total time and time-per-user still improved. The GA4 engaged-session rate is separately affected by the Jun 28 classification anomaly, not a real retention drop."
      },
      {
        "key": "totalEngagementHours",
        "label": "Total engaged hours",
        "baseline": 4792.675,
        "launchBaseline": 3652.9975,
        "previousWeek": 4792.675,
        "current": 4879.472222,
        "deltaPct": 1.811039,
        "deltaVsLaunchPct": 33.574475,
        "deltaVsPreviousPct": 1.811039,
        "deltaType": "percent",
        "format": "number",
        "context": "Total GA4 engaged time (property 497892271) for Jun 22-Jun 28, 2026, converted to hours - refreshed this run and UP +1.8% vs Jun 15-21. Engagement DEPTH / time-spent improved; GA4's engaged-session RATE looks down only because of an isolated Sunday Jun 28 classification anomaly, so time spent is the more reliable attention signal."
      }
    ],
    "trend": [
      {
        "date": "May 30",
        "rawDate": "20260530",
        "activeUsers": 1415,
        "newUsers": null,
        "sessions": 2060,
        "engagedSessions": 1656,
        "screenPageViews": 4310,
        "eventCount": 140484,
        "engagementRate": 80.3883495145631
      },
      {
        "date": "May 31",
        "rawDate": "20260531",
        "activeUsers": 1481,
        "newUsers": null,
        "sessions": 2150,
        "engagedSessions": 1744,
        "screenPageViews": 4223,
        "eventCount": 149858,
        "engagementRate": 81.11627906976744
      },
      {
        "date": "Jun 1",
        "rawDate": "20260601",
        "activeUsers": 1420,
        "newUsers": null,
        "sessions": 2092,
        "engagedSessions": 1667,
        "screenPageViews": 3939,
        "eventCount": 146212,
        "engagementRate": 79.68451242829828
      },
      {
        "date": "Jun 2",
        "rawDate": "20260602",
        "activeUsers": 1334,
        "newUsers": null,
        "sessions": 1980,
        "engagedSessions": 1567,
        "screenPageViews": 3656,
        "eventCount": 130647,
        "engagementRate": 79.14141414141415
      },
      {
        "date": "Jun 3",
        "rawDate": "20260603",
        "activeUsers": 1307,
        "newUsers": null,
        "sessions": 1985,
        "engagedSessions": 1591,
        "screenPageViews": 3991,
        "eventCount": 130258,
        "engagementRate": 80.15113350125944
      },
      {
        "date": "Jun 4",
        "rawDate": "20260604",
        "activeUsers": 1312,
        "newUsers": null,
        "sessions": 2024,
        "engagedSessions": 1592,
        "screenPageViews": 4261,
        "eventCount": 129207,
        "engagementRate": 78.65612648221344
      },
      {
        "date": "Jun 5",
        "rawDate": "20260605",
        "activeUsers": 1278,
        "newUsers": null,
        "sessions": 1981,
        "engagedSessions": 1565,
        "screenPageViews": 4326,
        "eventCount": 128435,
        "engagementRate": 79.0005047955578
      },
      {
        "date": "Jun 6",
        "rawDate": "20260606",
        "activeUsers": 1209,
        "newUsers": null,
        "sessions": 1860,
        "engagedSessions": 1493,
        "screenPageViews": 4301,
        "eventCount": 146249,
        "engagementRate": 80.26881720430109
      },
      {
        "date": "Jun 7",
        "rawDate": "20260607",
        "activeUsers": 1508,
        "newUsers": null,
        "sessions": 2272,
        "engagedSessions": 1718,
        "screenPageViews": 4212,
        "eventCount": 154841,
        "engagementRate": 75.61619718309859
      },
      {
        "date": "Jun 8",
        "rawDate": "20260608",
        "activeUsers": 1361,
        "newUsers": null,
        "sessions": 2103,
        "engagedSessions": 1672,
        "screenPageViews": 3996,
        "eventCount": 143022,
        "engagementRate": 79.50546837850689
      },
      {
        "date": "Jun 9",
        "rawDate": "20260609",
        "activeUsers": 1408,
        "newUsers": null,
        "sessions": 2136,
        "engagedSessions": 1712,
        "screenPageViews": 4732,
        "eventCount": 142331,
        "engagementRate": 80.14981273408239
      },
      {
        "date": "Jun 10",
        "rawDate": "20260610",
        "activeUsers": 1418,
        "newUsers": null,
        "sessions": 2176,
        "engagedSessions": 1704,
        "screenPageViews": 4951,
        "eventCount": 142511,
        "engagementRate": 78.30882352941177
      },
      {
        "date": "Jun 11",
        "rawDate": "20260611",
        "activeUsers": 1366,
        "newUsers": null,
        "sessions": 2109,
        "engagedSessions": 1658,
        "screenPageViews": 4584,
        "eventCount": 144061,
        "engagementRate": 78.61545756282598
      },
      {
        "date": "Jun 12",
        "rawDate": "20260612",
        "activeUsers": 1278,
        "newUsers": null,
        "sessions": 1964,
        "engagedSessions": 1522,
        "screenPageViews": 4186,
        "eventCount": 143065,
        "engagementRate": 77.49490835030551
      },
      {
        "date": "Jun 13",
        "rawDate": "20260613",
        "activeUsers": 1102,
        "newUsers": null,
        "sessions": 1794,
        "engagedSessions": 1356,
        "screenPageViews": 4338,
        "eventCount": 143051,
        "engagementRate": 75.58528428093646
      },
      {
        "date": "Jun 14",
        "rawDate": "20260614",
        "activeUsers": 1117,
        "newUsers": null,
        "sessions": 1788,
        "engagedSessions": 1414,
        "screenPageViews": 4532,
        "eventCount": 143718,
        "engagementRate": 79.082774049217
      },
      {
        "date": "Jun 15",
        "rawDate": "20260615",
        "activeUsers": 1090,
        "newUsers": null,
        "sessions": 1753,
        "engagedSessions": 1344,
        "screenPageViews": 4224,
        "eventCount": 140277,
        "engagementRate": 76.6685681688534
      },
      {
        "date": "Jun 16",
        "rawDate": "20260616",
        "activeUsers": 1037,
        "newUsers": null,
        "sessions": 1707,
        "engagedSessions": 1306,
        "screenPageViews": 4185,
        "eventCount": 138022,
        "engagementRate": 76.50849443468073
      },
      {
        "date": "Jun 17",
        "rawDate": "20260617",
        "activeUsers": 994,
        "newUsers": null,
        "sessions": 1609,
        "engagedSessions": 1262,
        "screenPageViews": 4225,
        "eventCount": 140425,
        "engagementRate": 78.43380981976384
      },
      {
        "date": "Jun 18",
        "rawDate": "20260618",
        "activeUsers": 1082,
        "newUsers": null,
        "sessions": 1721,
        "engagedSessions": 1364,
        "screenPageViews": 4359,
        "eventCount": 132981,
        "engagementRate": 79.25624636839046
      },
      {
        "date": "Jun 19",
        "rawDate": "20260619",
        "activeUsers": 1076,
        "newUsers": null,
        "sessions": 1737,
        "engagedSessions": 1368,
        "screenPageViews": 4222,
        "eventCount": 136312,
        "engagementRate": 78.75647668393782
      },
      {
        "date": "Jun 20",
        "rawDate": "20260620",
        "activeUsers": 1014,
        "newUsers": null,
        "sessions": 1640,
        "engagedSessions": 1299,
        "screenPageViews": 4350,
        "eventCount": 136527,
        "engagementRate": 79.20731707317074
      },
      {
        "date": "Jun 21",
        "rawDate": "20260621",
        "activeUsers": 1094,
        "newUsers": null,
        "sessions": 1753,
        "engagedSessions": 1403,
        "screenPageViews": 4285,
        "eventCount": 145128,
        "engagementRate": 80.0342270393611
      },
      {
        "date": "Jun 22",
        "rawDate": "20260622",
        "activeUsers": 1103,
        "newUsers": null,
        "sessions": 1787,
        "engagedSessions": 1409,
        "screenPageViews": 4613,
        "eventCount": 146808,
        "engagementRate": 78.84722999440403
      },
      {
        "date": "Jun 23",
        "rawDate": "20260623",
        "activeUsers": 1011,
        "newUsers": null,
        "sessions": 1674,
        "engagedSessions": 1276,
        "screenPageViews": 4254,
        "eventCount": 136468,
        "engagementRate": 76.22461170848268
      },
      {
        "date": "Jun 24",
        "rawDate": "20260624",
        "activeUsers": 1016,
        "newUsers": null,
        "sessions": 1657,
        "engagedSessions": 1322,
        "screenPageViews": 4207,
        "eventCount": 126928,
        "engagementRate": 79.78273989136994
      },
      {
        "date": "Jun 25",
        "rawDate": "20260625",
        "activeUsers": 966,
        "newUsers": null,
        "sessions": 1555,
        "engagedSessions": 1217,
        "screenPageViews": 4347,
        "eventCount": 138913,
        "engagementRate": 78.2636655948553
      },
      {
        "date": "Jun 26",
        "rawDate": "20260626",
        "activeUsers": 940,
        "newUsers": null,
        "sessions": 1604,
        "engagedSessions": 1263,
        "screenPageViews": 4516,
        "eventCount": 144240,
        "engagementRate": 78.74064837905237
      },
      {
        "date": "Jun 27",
        "rawDate": "20260627",
        "activeUsers": 1163,
        "newUsers": null,
        "sessions": 1882,
        "engagedSessions": 1433,
        "screenPageViews": 4652,
        "eventCount": 154508,
        "engagementRate": 76.1424017003188
      },
      {
        "date": "Jun 28",
        "rawDate": "20260628",
        "activeUsers": 1337,
        "newUsers": null,
        "sessions": 2339,
        "engagedSessions": 702,
        "screenPageViews": 7386,
        "eventCount": 147386,
        "engagementRate": 30.012825994014534
      }
    ],
    "eventCards": [
      {
        "event": "in_app_purchase",
        "label": "In-app purchases",
        "baseline": 0,
        "current": 6,
        "weekToDate": 6,
        "deltaPct": null,
        "activeUsersCurrent": 6
      },
      {
        "event": "application_install",
        "label": "Application installs",
        "baseline": 4452,
        "current": 3774,
        "weekToDate": 3774,
        "deltaPct": -15.229111,
        "activeUsersCurrent": 3513
      },
      {
        "event": "first_open",
        "label": "First opens",
        "baseline": 3699,
        "current": 3033,
        "weekToDate": 3033,
        "deltaPct": -18.004866,
        "activeUsersCurrent": 3029
      },
      {
        "event": "app_open",
        "label": "App opens",
        "baseline": 1610,
        "current": 1985,
        "weekToDate": 1985,
        "deltaPct": 23.291925,
        "activeUsersCurrent": 465
      },
      {
        "event": "app_time",
        "label": "App time events",
        "baseline": 261902,
        "current": 270473,
        "weekToDate": 270473,
        "deltaPct": 3.272598,
        "activeUsersCurrent": 746
      },
      {
        "event": "play",
        "label": "Play events",
        "baseline": 57320,
        "current": 54060,
        "weekToDate": 54060,
        "deltaPct": -5.687369,
        "activeUsersCurrent": 2410
      },
      {
        "event": "video_start",
        "label": "Video starts",
        "baseline": 20510,
        "current": 20195,
        "weekToDate": 20195,
        "deltaPct": -1.535836,
        "activeUsersCurrent": 2319
      },
      {
        "event": "video_play",
        "label": "Video plays",
        "baseline": 15366,
        "current": 12250,
        "weekToDate": 12250,
        "deltaPct": -20.278537,
        "activeUsersCurrent": 295
      },
      {
        "event": "video_complete",
        "label": "Video completes",
        "baseline": 3391,
        "current": 3855,
        "weekToDate": 3855,
        "deltaPct": 13.683279,
        "activeUsersCurrent": 209
      },
      {
        "event": "ads_request",
        "label": "Ad requests",
        "baseline": 23365,
        "current": 25669,
        "weekToDate": 25669,
        "deltaPct": 9.860903,
        "activeUsersCurrent": 731
      },
      {
        "event": "ads_impression",
        "label": "In-app ad impressions",
        "baseline": 31800,
        "current": 38370,
        "weekToDate": 38370,
        "deltaPct": 20.660377,
        "activeUsersCurrent": 706
      },
      {
        "event": "ads_loaded",
        "label": "Ads loaded",
        "baseline": 16646,
        "current": 20830,
        "weekToDate": 20830,
        "deltaPct": 25.135168,
        "activeUsersCurrent": 1
      },
      {
        "event": "ads_started",
        "label": "Ads started",
        "baseline": 16638,
        "current": 20824,
        "weekToDate": 20824,
        "deltaPct": 25.159274,
        "activeUsersCurrent": 1
      },
      {
        "event": "ads_complete",
        "label": "Ads completed",
        "baseline": 16093,
        "current": 20221,
        "weekToDate": 20221,
        "deltaPct": 25.650904,
        "activeUsersCurrent": 1
      },
      {
        "event": "ad_error",
        "label": "Ad errors",
        "baseline": 112,
        "current": 109,
        "weekToDate": 109,
        "deltaPct": -2.678571,
        "activeUsersCurrent": 5
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
          "activeUsers": 2079,
          "newUsers": 1418,
          "sessions": 5045,
          "engagedSessions": 3939,
          "screenPageViews": 26316,
          "eventCount": 790606,
          "engagementRate": 78.0773042616452
        },
        "current": {
          "platform": "web",
          "activeUsers": 2224,
          "newUsers": null,
          "sessions": 5414,
          "engagedSessions": 4269,
          "screenPageViews": 28099,
          "eventCount": 790185,
          "engagementRate": 78.85112670853344
        },
        "activeUsersDeltaPct": 6.9745069745069745,
        "engagementRateCurrent": 78.85112670853344
      },
      {
        "platform": "iOS",
        "baseline": {
          "platform": "iOS",
          "activeUsers": 2564,
          "newUsers": 1721,
          "sessions": 4186,
          "engagedSessions": 3522,
          "screenPageViews": 726,
          "eventCount": 92933,
          "engagementRate": 84.13760152890588
        },
        "current": {
          "platform": "iOS",
          "activeUsers": 2050,
          "newUsers": null,
          "sessions": 3265,
          "engagedSessions": 2706,
          "screenPageViews": 903,
          "eventCount": 78231,
          "engagementRate": 82.87901990811639
        },
        "activeUsersDeltaPct": -20.04680187207488,
        "engagementRateCurrent": 82.87901990811639
      },
      {
        "platform": "Android",
        "baseline": {
          "platform": "Android",
          "activeUsers": 3277,
          "newUsers": 2369,
          "sessions": 5192,
          "engagedSessions": 4069,
          "screenPageViews": 2254,
          "eventCount": 120394,
          "engagementRate": 78.37057010785824
        },
        "current": {
          "platform": "Android",
          "activeUsers": 2982,
          "newUsers": null,
          "sessions": 5229,
          "engagedSessions": 3919,
          "screenPageViews": 2313,
          "eventCount": 133276,
          "engagementRate": 74.94740868234844
        },
        "activeUsersDeltaPct": -9.002136100091548,
        "engagementRateCurrent": 74.94740868234844
      }
    ],
    "platformMix": [
      {
        "platform": "Android",
        "deviceCategory": "mobile",
        "operatingSystem": "Android",
        "activeUsers": 2547,
        "sessions": 4416,
        "engagedSessions": 3231,
        "engagementRate": 73.16576086956522,
        "eventCount": 87394,
        "totalEngagementSeconds": 1309442
      },
      {
        "platform": "iOS",
        "deviceCategory": "mobile",
        "operatingSystem": "iOS",
        "activeUsers": 1725,
        "sessions": 2678,
        "engagedSessions": 2201,
        "engagementRate": 82.1882001493652,
        "eventCount": 51010,
        "totalEngagementSeconds": 1723813
      },
      {
        "platform": "web",
        "deviceCategory": "smart tv",
        "operatingSystem": "(not set)",
        "activeUsers": 1145,
        "sessions": 3348,
        "engagedSessions": 2751,
        "engagementRate": 82.168458781362,
        "eventCount": 716889,
        "totalEngagementSeconds": 8114010
      },
      {
        "platform": "web",
        "deviceCategory": "desktop",
        "operatingSystem": "Windows",
        "activeUsers": 346,
        "sessions": 814,
        "engagedSessions": 695,
        "engagementRate": 85.38083538083538,
        "eventCount": 53458,
        "totalEngagementSeconds": 701446
      },
      {
        "platform": "web",
        "deviceCategory": "mobile",
        "operatingSystem": "iOS",
        "activeUsers": 273,
        "sessions": 298,
        "engagedSessions": 193,
        "engagementRate": 64.76510067114094,
        "eventCount": 1723,
        "totalEngagementSeconds": 4954
      },
      {
        "platform": "web",
        "deviceCategory": "mobile",
        "operatingSystem": "Android",
        "activeUsers": 237,
        "sessions": 245,
        "engagedSessions": 195,
        "engagementRate": 79.59183673469387,
        "eventCount": 1851,
        "totalEngagementSeconds": 1767
      },
      {
        "platform": "iOS",
        "deviceCategory": "tablet",
        "operatingSystem": "iOS",
        "activeUsers": 234,
        "sessions": 374,
        "engagedSessions": 325,
        "engagementRate": 86.89839572192514,
        "eventCount": 8528,
        "totalEngagementSeconds": 474894
      },
      {
        "platform": "Android",
        "deviceCategory": "smart tv",
        "operatingSystem": "Android",
        "activeUsers": 219,
        "sessions": 466,
        "engagedSessions": 409,
        "engagementRate": 87.76824034334764,
        "eventCount": 28843,
        "totalEngagementSeconds": 2439330
      },
      {
        "platform": "Android",
        "deviceCategory": "tablet",
        "operatingSystem": "Android",
        "activeUsers": 216,
        "sessions": 347,
        "engagedSessions": 279,
        "engagementRate": 80.40345821325649,
        "eventCount": 17039,
        "totalEngagementSeconds": 201933
      },
      {
        "platform": "web",
        "deviceCategory": "desktop",
        "operatingSystem": "Macintosh",
        "activeUsers": 108,
        "sessions": 273,
        "engagedSessions": 207,
        "engagementRate": 75.82417582417582,
        "eventCount": 6057,
        "totalEngagementSeconds": 149112
      },
      {
        "platform": "iOS",
        "deviceCategory": "smart tv",
        "operatingSystem": "iOS",
        "activeUsers": 91,
        "sessions": 213,
        "engagedSessions": 180,
        "engagementRate": 84.50704225352112,
        "eventCount": 18693,
        "totalEngagementSeconds": 3153584
      },
      {
        "platform": "web",
        "deviceCategory": "desktop",
        "operatingSystem": "Linux",
        "activeUsers": 51,
        "sessions": 120,
        "engagedSessions": 98,
        "engagementRate": 81.66666666666667,
        "eventCount": 3367,
        "totalEngagementSeconds": 73945
      },
      {
        "platform": "web",
        "deviceCategory": "tablet",
        "operatingSystem": "Android",
        "activeUsers": 33,
        "sessions": 110,
        "engagedSessions": 86,
        "engagementRate": 78.18181818181819,
        "eventCount": 2518,
        "totalEngagementSeconds": 46638
      },
      {
        "platform": "web",
        "deviceCategory": "tablet",
        "operatingSystem": "iOS",
        "activeUsers": 16,
        "sessions": 30,
        "engagedSessions": 23,
        "engagementRate": 76.66666666666667,
        "eventCount": 372,
        "totalEngagementSeconds": 1194
      },
      {
        "platform": "web",
        "deviceCategory": "desktop",
        "operatingSystem": "Chrome OS",
        "activeUsers": 10,
        "sessions": 17,
        "engagedSessions": 16,
        "engagementRate": 94.11764705882352,
        "eventCount": 810,
        "totalEngagementSeconds": 13976
      },
      {
        "platform": "web",
        "deviceCategory": "smart tv",
        "operatingSystem": "Android",
        "activeUsers": 4,
        "sessions": 4,
        "engagedSessions": 4,
        "engagementRate": 100.0,
        "eventCount": 53,
        "totalEngagementSeconds": 248
      },
      {
        "platform": "web",
        "deviceCategory": "desktop",
        "operatingSystem": "(not set)",
        "activeUsers": 1,
        "sessions": 155,
        "engagedSessions": 1,
        "engagementRate": 0.6451612903225806,
        "eventCount": 3087,
        "totalEngagementSeconds": 0
      }
    ],
    "acquisition": [
      {
        "sessionSourceMedium": "(direct) / (none)",
        "activeUsers": 3163,
        "newUsers": 1946,
        "sessions": 5386,
        "engagedSessions": 4405,
        "engagementRate": 81.7861121425919,
        "eventCount": 174483
      },
      {
        "sessionSourceMedium": "apps.facebook.com / (not set)",
        "activeUsers": 1801,
        "newUsers": 1293,
        "sessions": 2575,
        "engagedSessions": 1940,
        "engagementRate": 75.33980582524272,
        "eventCount": 36707
      },
      {
        "sessionSourceMedium": "homescreen / (not set)",
        "activeUsers": 719,
        "newUsers": 182,
        "sessions": 2274,
        "engagedSessions": 1965,
        "engagementRate": 86.41160949868075,
        "eventCount": 460155
      },
      {
        "sessionSourceMedium": "google / organic",
        "activeUsers": 389,
        "newUsers": 326,
        "sessions": 632,
        "engagedSessions": 556,
        "engagementRate": 87.9746835443038,
        "eventCount": 13407
      },
      {
        "sessionSourceMedium": "google-play / organic",
        "activeUsers": 293,
        "newUsers": 187,
        "sessions": 501,
        "engagedSessions": 423,
        "engagementRate": 84.4311377245509,
        "eventCount": 27093
      },
      {
        "sessionSourceMedium": "(not set)",
        "activeUsers": 88,
        "newUsers": 9,
        "sessions": 501,
        "engagedSessions": 0,
        "engagementRate": 0.0,
        "eventCount": 58150
      },
      {
        "sessionSourceMedium": "hs-search / (not set)",
        "activeUsers": 64,
        "newUsers": 14,
        "sessions": 449,
        "engagedSessions": 394,
        "engagementRate": 87.75055679287304,
        "eventCount": 100637
      },
      {
        "sessionSourceMedium": "apps.instagram.com / (not set)",
        "activeUsers": 294,
        "newUsers": 215,
        "sessions": 413,
        "engagedSessions": 313,
        "engagementRate": 75.78692493946731,
        "eventCount": 7728
      },
      {
        "sessionSourceMedium": "apps.facebook.com / (none)",
        "activeUsers": 32,
        "newUsers": 0,
        "sessions": 157,
        "engagedSessions": 120,
        "engagementRate": 76.43312101910828,
        "eventCount": 847
      },
      {
        "sessionSourceMedium": "fb / paid",
        "activeUsers": 107,
        "newUsers": 18,
        "sessions": 138,
        "engagedSessions": 108,
        "engagementRate": 78.26086956521739,
        "eventCount": 1598
      },
      {
        "sessionSourceMedium": "bing / organic",
        "activeUsers": 59,
        "newUsers": 38,
        "sessions": 121,
        "engagedSessions": 109,
        "engagementRate": 90.08264462809917,
        "eventCount": 8388
      },
      {
        "sessionSourceMedium": "channel-store / (not set)",
        "activeUsers": 20,
        "newUsers": 8,
        "sessions": 102,
        "engagedSessions": 97,
        "engagementRate": 95.09803921568627,
        "eventCount": 23065
      }
    ],
    "topPages": [
      {
        "screen": "(not set)",
        "path": "(not set)",
        "activeUsers": 6175,
        "sessions": 11787,
        "engagedSessions": 9080,
        "screenPageViews": 3288,
        "eventCount": 865150,
        "totalEngagementSeconds": 11715096
      },
      {
        "screen": "Splash",
        "path": "(not set)",
        "activeUsers": 1444,
        "sessions": 3762,
        "engagedSessions": 3148,
        "screenPageViews": 3905,
        "eventCount": 4920,
        "totalEngagementSeconds": 2674
      },
      {
        "screen": "Intro",
        "path": "(not set)",
        "activeUsers": 1226,
        "sessions": 2660,
        "engagedSessions": 2179,
        "screenPageViews": 2744,
        "eventCount": 2992,
        "totalEngagementSeconds": 20006
      },
      {
        "screen": "On Demand",
        "path": "(not set)",
        "activeUsers": 898,
        "sessions": 2961,
        "engagedSessions": 2790,
        "screenPageViews": 3428,
        "eventCount": 4018,
        "totalEngagementSeconds": 39317
      },
      {
        "screen": "ElectricNOW",
        "path": "/landing",
        "activeUsers": 744,
        "sessions": 1078,
        "engagedSessions": 994,
        "screenPageViews": 1434,
        "eventCount": 2439,
        "totalEngagementSeconds": 15031
      },
      {
        "screen": "ElectricNOW",
        "path": "/",
        "activeUsers": 680,
        "sessions": 1052,
        "engagedSessions": 1004,
        "screenPageViews": 1879,
        "eventCount": 4852,
        "totalEngagementSeconds": 13744
      },
      {
        "screen": "PDP",
        "path": "(not set)",
        "activeUsers": 372,
        "sessions": 1771,
        "engagedSessions": 1699,
        "screenPageViews": 3484,
        "eventCount": 3862,
        "totalEngagementSeconds": 18937
      },
      {
        "screen": "ElectricNOW",
        "path": "/live-tv",
        "activeUsers": 285,
        "sessions": 851,
        "engagedSessions": 769,
        "screenPageViews": 1896,
        "eventCount": 42898,
        "totalEngagementSeconds": 511507
      },
      {
        "screen": "Live",
        "path": "(not set)",
        "activeUsers": 161,
        "sessions": 1058,
        "engagedSessions": 1036,
        "screenPageViews": 1790,
        "eventCount": 24271,
        "totalEngagementSeconds": 4968273
      },
      {
        "screen": "Category",
        "path": "(not set)",
        "activeUsers": 133,
        "sessions": 232,
        "engagedSessions": 231,
        "screenPageViews": 346,
        "eventCount": 375,
        "totalEngagementSeconds": 3082
      },
      {
        "screen": "ElectricNOW",
        "path": "/devices",
        "activeUsers": 131,
        "sessions": 139,
        "engagedSessions": 59,
        "screenPageViews": 161,
        "eventCount": 591,
        "totalEngagementSeconds": 1469
      },
      {
        "screen": "ElectricNOW",
        "path": "/profiles",
        "activeUsers": 97,
        "sessions": 144,
        "engagedSessions": 139,
        "screenPageViews": 178,
        "eventCount": 215,
        "totalEngagementSeconds": 960
      },
      {
        "screen": "ElectricNOW",
        "path": "/english",
        "activeUsers": 87,
        "sessions": 116,
        "engagedSessions": 105,
        "screenPageViews": 176,
        "eventCount": 248,
        "totalEngagementSeconds": 4699
      },
      {
        "screen": "Player",
        "path": "(not set)",
        "activeUsers": 85,
        "sessions": 1364,
        "engagedSessions": 1353,
        "screenPageViews": 2712,
        "eventCount": 23735,
        "totalEngagementSeconds": 636082
      },
      {
        "screen": "Search Channels",
        "path": "(not set)",
        "activeUsers": 77,
        "sessions": 208,
        "engagedSessions": 207,
        "screenPageViews": 700,
        "eventCount": 799,
        "totalEngagementSeconds": 2221
      },
      {
        "screen": "ElectricNOW",
        "path": "/search",
        "activeUsers": 44,
        "sessions": 50,
        "engagedSessions": 50,
        "screenPageViews": 55,
        "eventCount": 217,
        "totalEngagementSeconds": 165
      },
      {
        "screen": "My Stuff",
        "path": "(not set)",
        "activeUsers": 40,
        "sessions": 124,
        "engagedSessions": 124,
        "screenPageViews": 301,
        "eventCount": 301,
        "totalEngagementSeconds": 0
      },
      {
        "screen": "Settings",
        "path": "(not set)",
        "activeUsers": 37,
        "sessions": 75,
        "engagedSessions": 75,
        "screenPageViews": 182,
        "eventCount": 229,
        "totalEngagementSeconds": 3306
      },
      {
        "screen": "ElectricNOW",
        "path": "/shows/leverage",
        "activeUsers": 34,
        "sessions": 38,
        "engagedSessions": 37,
        "screenPageViews": 49,
        "eventCount": 154,
        "totalEngagementSeconds": 145
      },
      {
        "screen": "ElectricNOW",
        "path": "/shows/leverage-redemption",
        "activeUsers": 28,
        "sessions": 29,
        "engagedSessions": 28,
        "screenPageViews": 34,
        "eventCount": 114,
        "totalEngagementSeconds": 144
      },
      {
        "screen": "Search | Spotlight TV",
        "path": "/search",
        "activeUsers": 26,
        "sessions": 31,
        "engagedSessions": 31,
        "screenPageViews": 48,
        "eventCount": 53,
        "totalEngagementSeconds": 776
      },
      {
        "screen": "ElectricNOW",
        "path": "/watch/the-ark-2",
        "activeUsers": 22,
        "sessions": 39,
        "engagedSessions": 38,
        "screenPageViews": 199,
        "eventCount": 3456,
        "totalEngagementSeconds": 136401
      },
      {
        "screen": "Leverage: Redemption - Season 3 | ElectricNOW",
        "path": "/",
        "activeUsers": 21,
        "sessions": 22,
        "engagedSessions": 22,
        "screenPageViews": 38,
        "eventCount": 48,
        "totalEngagementSeconds": 1271
      },
      {
        "screen": "ElectricNOW",
        "path": "/watch/almost-paradise-1",
        "activeUsers": 20,
        "sessions": 27,
        "engagedSessions": 27,
        "screenPageViews": 128,
        "eventCount": 2220,
        "totalEngagementSeconds": 72297
      },
      {
        "screen": "About Us",
        "path": "(not set)",
        "activeUsers": 18,
        "sessions": 52,
        "engagedSessions": 52,
        "screenPageViews": 59,
        "eventCount": 59,
        "totalEngagementSeconds": 0
      },
      {
        "screen": "Connect with us",
        "path": "(not set)",
        "activeUsers": 18,
        "sessions": 52,
        "engagedSessions": 52,
        "screenPageViews": 59,
        "eventCount": 59,
        "totalEngagementSeconds": 0
      },
      {
        "screen": "Privacy Policy",
        "path": "(not set)",
        "activeUsers": 18,
        "sessions": 52,
        "engagedSessions": 52,
        "screenPageViews": 59,
        "eventCount": 59,
        "totalEngagementSeconds": 0
      },
      {
        "screen": "Terms of use",
        "path": "(not set)",
        "activeUsers": 18,
        "sessions": 52,
        "engagedSessions": 52,
        "screenPageViews": 59,
        "eventCount": 59,
        "totalEngagementSeconds": 0
      },
      {
        "screen": "The Ark | ElectricNOW",
        "path": "/",
        "activeUsers": 16,
        "sessions": 24,
        "engagedSessions": 24,
        "screenPageViews": 39,
        "eventCount": 47,
        "totalEngagementSeconds": 2538
      },
      {
        "screen": "ElectricNOW",
        "path": "/shows/librarians",
        "activeUsers": 16,
        "sessions": 16,
        "engagedSessions": 13,
        "screenPageViews": 18,
        "eventCount": 64,
        "totalEngagementSeconds": 42
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
      "This week, traffic and use improved modestly while engagement-quality scoring was distorted by a Jun 28 anomaly. Property-wide GA4 active users rose +0.8% (5,921), sessions +4.7% (12,379), screen/page views +13.8% (33,975), and total engagement time +1.8% (about 4,879 hours); new users fell -7.8% (3,032). Reported engaged sessions (8,511) and engagement rate (68.75%, down from 78.96%) look weak, but that is driven by Sunday Jun 28 showing a low engagement classification despite high users, sessions, views and time - so engagedSessions/engagementRate are potentially inconsistent this week and should NOT be read as a real retention collapse; engagement duration, app_time and play/video events are the better attention signals and they held up. Visible platform sales GREW to 64 purchases / $1,159.36 gross ($991.08 developer rev share) after one new Stripe charge ($14.99), one new Roku sale (Jun 27 Purchase HD 15, $14.99), and four new manual Apple sales from the Jul 2 Jun 25-Jul 1 screenshots ($47.96 gross). Apple rises to 20/$332.80 gross (est net $232.92) after the Jul 2 screenshots add three Jun 26/27/28 Purchase HD 15 ($14.99 each) and one Jun 30 Purchase HD 3 ($2.99). YouTube (a separate channel) softened: 157,201 views (-10.1%) and ~$2,751 estimated ad revenue (-15.3%). Visible Platform Sales are Stripe + Roku + manual Apple only - not total ElectricNOW sales - and YouTube estimated ad revenue is a separate channel. As of the June 29, 2026 refresh, the GA4 complete-week window advances to the current week June 22-June 28, 2026 (previous complete week June 15-June 21 is the comparison baseline). Measured platform audience (landing-excluded) was 5,327 active users on 11,486 sessions, up about 0.9% and 5.1% respectively vs Jun 15-21. On paid acquisition, the newest numeric Meta report (Jun 21-Jun 27, 2026) shows $1,749.69 spent on an iOS-only campaign driving 1,157 iOS installs at $1.51 each (CPC $0.44); link clicks fell ~22%, CPC rose ~59.5%, and cost per install rose ~11.1% - acquisition got more expensive while volume held, with 55+ the most efficient bands. The prior top-card ~0 download anomaly has resolved (top-card now matches the 1,157 breakdown installs). Google Ads is STALE this run (connector RATE_LIMITED, 429) so its last-good values are preserved, not zeroed. VERDICT on paid: promising but still needs proof of viewing - spend reliably buys free iOS installs but there is no proof those installs become viewers or buyers; we do NOT claim true ROAS. Distinguish paid-campaign impressions (113,119 Meta) from in-app ad impressions (GA4 ads_impression, 42,200).",
      "Engagement: weekly platform visits (landing-excluded sessions) were 15,081, +9.1% vs the previous 7 days, on 8,109 active users with 12,009 engaged sessions; engagement rate 78%. The new complete week held up versus the prior week.",
      "Landing-page traffic is acquisition-only and is NOT included in platform audience totals; this keeps measured platform audience clean of marketing-page hits.",
      "Paid acquisition (Meta, Jun 11-Jun 17, 2026): Meta spent $1,968.57 (-37.1% vs the prior period) driving 987 reported platform downloads (iOS 277 + Android 710); the breakdown tables show 1641 Meta app installs (a different attribution grain - the two are kept separate, not blended). Spend and volume were down but CPC improved to $0.31, and Google Play / Android stays cheaper than iOS ($0.98 vs $1.24 per download); 55-64 and 65+ are the most efficient larger age bands, 18-24 is inefficient. Google Ads is STALE this run (RESOURCE_EXHAUSTED rate limit on the Jun 8-14 pull); its last successful pull (2026-06-11 14:40 PDT) covering Jun 1-Jun 7, 2026 reported $66.47 app-promotion cost and 124 conversions, held as last-good (not zeroed). IMPORTANT - time-period mismatch: GA4 current data is Jun 8-Jun 14 while this Meta report is Jun 11-Jun 17, so the windows do not line up; read this as an acquisition-efficiency signal only. We do NOT claim a true ROAS (ad-server revenue attribution unavailable; visible platform sales are not ad-attributed booked revenue).",
      "Targeting signal: Meta's Google Play / Android downloads remain materially cheaper than iOS ($0.98 vs $1.24 per download) in the Jun 11-17 report; among larger age bands 55-64 and 65+ are the most efficient (cost/install ~$1.12 and ~$1.16) while 18-24 is inefficient (~$2.99). Spend continues to skew toward the more efficient platforms/segments.",
      "Roku App Engagement (separate from GA4) is preserved from its last good window where no fresher engagement source is available this run; the only new Roku data is the two sales rows from the Jun 15 Sales Activity Report (not engagement). It is not zeroed and is kept distinct from GA4 platform audience.",
      "Visible platform sales (Stripe + Roku + manual Apple): 55 purchases and $991.45 year to date - Stripe 23/$469.77, Roku 18/$271.82, Apple 14/$249.86 gross - UNCHANGED this run. No new deduped Stripe charges after Jun 15; the Jun 22 Roku Sales Activity Report PDF was not machine-readable so no new Roku sales were confirmed; the only Apple sale in the latest screenshot (Jun 16, $14.99) was already counted. YouTube estimated ad revenue is a separate channel and is NOT included.",
      "Tracking caveat: GA4 does not cleanly identify every smart-TV surface; Stripe, Roku, Apple, Google Play, and ad-server revenue are separate systems, so visible platform sales are a floor, not total ElectricNOW sales, and no true ROAS is claimed (ad-server revenue attribution unavailable).",
      "YouTube (separate channel, estimated ad revenue only): the ElectricNOW YouTube channel now has a complete week for Jun 8-Jun 14, 2026 - 164,595 views, ~74,521 hours watched, average view duration 27m 11s, and ~$3,243.85 estimated YouTube ad revenue on 877,734 ad impressions (136,472 monetized playbacks). Net subscribers +179. This is estimated YouTube ad revenue on a separate YouTube channel - it is NOT a platform sales source and is NOT included in Visible Platform Sales; ad impressions are a distinct YouTube metric, not GA4 ad events.",
      "Bottom line: the GA4 complete-week window advances to Jun 15-Jun 21, 2026 with traffic down week over week (users -19.4%, sessions -14.6%) but engagement rate up slightly to 78.98%; visible sales flat at 55/$991.45 and Apple downloads steady at 1,598. The newest Meta report (Jun 14-20) shows spend down to $1,642.88 with a better CPC ($0.28) but broken platform-download top-cards (breakdown still ~1,174 installs at ~$1.40); Google Ads returned no current rows (last-good preserved). Paid installs are not yet visibly converting into more measured viewing or sales, and true ROAS remains unprovable until ad-attributed revenue is available."
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
      "sourceDetail": "This combines Stripe-visible payments, Roku-visible sales from Roku email reports, and manual Apple App Store screenshot snapshots. Stripe was reconnected and re-pulled on Jun 18, 2026, adding 2 previously-missed succeeded charges (Jun 12 and Jun 15, $14.99 each); Stripe now totals 23/$469.77. Google Play and other sources may still be missing.",
      "stripe": {
        "sourceLabel": "Stripe-visible payments",
        "sourceDetail": "This shows Stripe-visible sales from the connected electricnow.tv account (acct_1HZdStLG0Cw1zW4e). Reconnected and re-pulled 2026-06-18: the connector returned 2 new succeeded charges (Jun 12 and Jun 15, $14.99 each) that had been missed while Stripe was preserved through May 28. Stripe now totals 23 succeeded 2026 charges / $469.77.",
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
          "range": "Jan 1-Jun 28, 2026",
          "purchases": 24,
          "purchaseRevenue": 484.76,
          "revenuePerPurchase": 20.2,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": [
            {
              "date": "Jun 28",
              "createdAt": "2026-06-28",
              "sortDate": "2026-06-28",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripeChargeId": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV",
              "note": "Charge timestamp not included in the Stripe export; assigned to the current complete week Jun 22-28, 2026."
            },
            {
              "date": "Jun 15",
              "createdAt": "2026-06-15T13:18:05+00:00",
              "sortDate": "2026-06-15T13:18:05+00:00",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripePaymentIntentId": "pi_3TiaOvLG0Cw1zW4e1J9vWz96",
              "stripeChargeId": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7",
              "orderId": "moj-2026061513180484"
            },
            {
              "date": "Jun 12",
              "createdAt": "2026-06-12T23:06:49+00:00",
              "sortDate": "2026-06-12T23:06:49+00:00",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripePaymentIntentId": "pi_3TheA0LG0Cw1zW4e2ajY663E",
              "stripeChargeId": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi",
              "orderId": "tub-2026061223064851"
            },
            {
              "date": "May 28",
              "createdAt": "2026-05-28 18:08 PDT",
              "sortDate": "2026-05-28T18:08:30-07:00",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripePaymentIntentId": "pi_3Tc8fSLG0Cw1zW4e0aRnmEQw",
              "stripeChargeId": "ch_3Tc8fSLG0Cw1zW4e0JGS5fDH"
            },
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
          "label": "Stripe sales this month",
          "range": "Jun 1-Jun 17, 2026",
          "purchases": 2,
          "purchaseRevenue": 29.98,
          "revenuePerPurchase": 14.99,
          "payments": [
            {
              "date": "Jun 15",
              "createdAt": "2026-06-15T13:18:05+00:00",
              "sortDate": "2026-06-15T13:18:05+00:00",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripePaymentIntentId": "pi_3TiaOvLG0Cw1zW4e1J9vWz96",
              "stripeChargeId": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7",
              "orderId": "moj-2026061513180484"
            },
            {
              "date": "Jun 12",
              "createdAt": "2026-06-12T23:06:49+00:00",
              "sortDate": "2026-06-12T23:06:49+00:00",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripePaymentIntentId": "pi_3TheA0LG0Cw1zW4e2ajY663E",
              "stripeChargeId": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi",
              "orderId": "tub-2026061223064851"
            }
          ]
        },
        "lastWeek": {
          "label": "Stripe sales last week",
          "range": "Jun 15-Jun 21, 2026",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "revenuePerPurchase": 14.99,
          "payments": [
            {
              "date": "Jun 15",
              "createdAt": "2026-06-15T13:18:05+00:00",
              "sortDate": "2026-06-15T13:18:05+00:00",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripePaymentIntentId": "pi_3TiaOvLG0Cw1zW4e1J9vWz96",
              "stripeChargeId": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7",
              "orderId": "moj-2026061513180484"
            }
          ]
        },
        "thisWeek": {
          "label": "Stripe sales this week",
          "range": "Jun 22-Jun 28, 2026",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "revenuePerPurchase": 14.99,
          "payments": [
            {
              "date": "Jun 28",
              "createdAt": "2026-06-28",
              "sortDate": "2026-06-28",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripeChargeId": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV",
              "note": "Charge timestamp not included in the Stripe export; assigned to the current complete week Jun 22-28, 2026."
            }
          ]
        },
        "currentCompleteWeek": {
          "label": "Stripe sales this week",
          "range": "Jun 22-Jun 28, 2026",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "revenuePerPurchase": 14.99,
          "payments": [
            {
              "date": "Jun 28",
              "createdAt": "2026-06-28",
              "sortDate": "2026-06-28",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripeChargeId": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV",
              "note": "Charge timestamp not included in the Stripe export; assigned to the current complete week Jun 22-28, 2026."
            }
          ]
        },
        "weekToDate": {
          "label": "Stripe sales this week",
          "range": "Jun 22-Jun 28, 2026",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "revenuePerPurchase": 14.99,
          "payments": [
            {
              "date": "Jun 28",
              "createdAt": "2026-06-28",
              "sortDate": "2026-06-28",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripeChargeId": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV",
              "note": "Charge timestamp not included in the Stripe export; assigned to the current complete week Jun 22-28, 2026."
            }
          ]
        },
        "recent12Days": {
          "label": "Stripe last 12 days",
          "range": "Jun 6-Jun 17, 2026",
          "purchases": 2,
          "purchaseRevenue": 29.98,
          "revenuePerPurchase": 14.99,
          "payments": [
            {
              "date": "Jun 15",
              "createdAt": "2026-06-15T13:18:05+00:00",
              "sortDate": "2026-06-15T13:18:05+00:00",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripePaymentIntentId": "pi_3TiaOvLG0Cw1zW4e1J9vWz96",
              "stripeChargeId": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7",
              "orderId": "moj-2026061513180484"
            },
            {
              "date": "Jun 12",
              "createdAt": "2026-06-12T23:06:49+00:00",
              "sortDate": "2026-06-12T23:06:49+00:00",
              "amount": 14.99,
              "description": "Customer User - Purchase this title: Signup payment",
              "source": "Stripe",
              "stripePaymentIntentId": "pi_3TheA0LG0Cw1zW4e2ajY663E",
              "stripeChargeId": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi",
              "orderId": "tub-2026061223064851"
            }
          ]
        },
        "lifetimeObserved": {
          "range": "Through Jun 17, 2026 reconnect pull",
          "purchases": 23,
          "purchaseRevenue": 469.77,
          "revenuePerPurchase": 20.42
        },
        "mix": [
          {
            "label": "Title purchases",
            "purchases": 23,
            "purchaseRevenue": 474.77
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
            "id": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV",
            "date": "Jun 28",
            "createdAt": "2026-06-28",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "stripeChargeId": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV"
          },
          {
            "id": "pi_3TiaOvLG0Cw1zW4e1J9vWz96",
            "date": "Jun 15",
            "createdAt": "2026-06-15T13:18:05+00:00",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "stripeChargeId": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7",
            "orderId": "moj-2026061513180484"
          },
          {
            "id": "pi_3TheA0LG0Cw1zW4e2ajY663E",
            "date": "Jun 12",
            "createdAt": "2026-06-12T23:06:49+00:00",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "stripeChargeId": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi",
            "orderId": "tub-2026061223064851"
          },
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
          },
          {
            "date": "Jun 12",
            "rawDate": "20260612",
            "purchases": 1,
            "purchaseRevenue": 14.99
          },
          {
            "date": "Jun 15",
            "rawDate": "20260615",
            "purchases": 1,
            "purchaseRevenue": 14.99
          },
          {
            "date": "Jun 28",
            "rawDate": "20260628",
            "purchases": 1,
            "purchaseRevenue": 14.99
          }
        ],
        "note": "Stripe-visible sales show 23 payments and $469.77 year to date (Stripe reconnected Jun 18, 2026 and 2 previously-missed succeeded charges from Jun 12 and Jun 15 were added). Add Apple App Store and Google Play reports before treating this as total sales. | Jun 29, 2026 refresh adds Stripe charge ch_3Tn4AWLG0Cw1zW4e2emVa5xV ($14.99); charge timestamp absent from export so assigned to the current complete week (Jun 22-28).",
        "connectorStatus": "connected; reconnected and pulled Jun 18, 2026; 2 new succeeded charges added (Jun 12 + Jun 15)",
        "lastStripeVisiblePayment": {
          "date": "Jun 28",
          "createdAt": "2026-06-28",
          "amount": 14.99,
          "stripeChargeId": "ch_3Tn4AWLG0Cw1zW4e2emVa5xV"
        },
        "latestConnectorAudit": {
          "checkedAt": "2026-06-18 07:05 PDT",
          "succeeded2026Charges": 23,
          "purchaseRevenue": 469.77,
          "newPaymentsFound": 2,
          "newRevenueFound": 29.98,
          "newChargeIds": [
            "ch_3TheA0LG0Cw1zW4e2Fj5pdSi",
            "ch_3TiaOvLG0Cw1zW4e1gfG0nL7"
          ],
          "latestVisiblePayment": {
            "date": "Jun 15",
            "createdAt": "2026-06-15T13:18:05+00:00",
            "sortDate": "2026-06-15T13:18:05+00:00",
            "amount": 14.99,
            "description": "Customer User - Purchase this title: Signup payment",
            "source": "Stripe",
            "stripePaymentIntentId": "pi_3TiaOvLG0Cw1zW4e1J9vWz96",
            "stripeChargeId": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7",
            "orderId": "moj-2026061513180484"
          }
        }
      },
      "roku": {
        "sourceLabel": "Roku-visible sales",
        "sourceDetail": "Roku-visible sales come from emailed Roku Sales Activity Reports. The Jun 8 report added Jun 4 and Jun 7 purchases. These are not total ElectricNOW sales.",
        "reportEmailDate": "2026-06-15T14:17:35+00:00",
        "reportGenerated": "June 29, 2026 7:13 AM PDT",
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
          "range": "Jan 1-Jun 27, 2026",
          "purchases": 20,
          "purchaseRevenue": 341.8,
          "developerRevShare": 273.4,
          "revenuePerPurchase": 17.09,
          "payments": [
            {
              "date": "Jun 27",
              "createdAt": "2026-06-27",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            },
            {
              "date": "Jun 19",
              "createdAt": "2026-06-19",
              "amount": 54.99,
              "developerRevShare": 43.99,
              "description": "Roku - Purchase Bundle 55",
              "source": "Roku"
            },
            {
              "date": "Jun 13",
              "createdAt": "2026-06-13",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            },
            {
              "date": "Jun 11",
              "createdAt": "2026-06-11",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            },
            {
              "date": "Jun 4",
              "createdAt": "2026-06-04",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            },
            {
              "date": "Jun 7",
              "createdAt": "2026-06-07",
              "amount": 19.99,
              "developerRevShare": 15.99,
              "description": "Roku - Purchase Bundle 20",
              "source": "Roku"
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
          ]
        },
        "monthToDate": {
          "label": "Roku sales this month",
          "range": "Jun 1-Jun 14, 2026",
          "purchases": 4,
          "purchaseRevenue": 64.96,
          "developerRevShare": 51.96,
          "revenuePerPurchase": 16.24,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": [
            {
              "date": "Jun 4",
              "createdAt": "2026-06-04",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            },
            {
              "date": "Jun 7",
              "createdAt": "2026-06-07",
              "amount": 19.99,
              "developerRevShare": 15.99,
              "description": "Roku - Purchase Bundle 20",
              "source": "Roku"
            },
            {
              "date": "Jun 11",
              "createdAt": "2026-06-11",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            },
            {
              "date": "Jun 13",
              "createdAt": "2026-06-13",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            }
          ]
        },
        "lastWeek": {
          "label": "Roku sales last week",
          "range": "Jun 15-Jun 21, 2026",
          "purchases": 1,
          "purchaseRevenue": 54.99,
          "developerRevShare": 43.99,
          "revenuePerPurchase": 54.99,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": [
            {
              "date": "Jun 19",
              "createdAt": "2026-06-19",
              "amount": 54.99,
              "developerRevShare": 43.99,
              "description": "Roku - Purchase Bundle 55",
              "source": "Roku"
            }
          ]
        },
        "thisWeek": {
          "label": "Roku sales this week",
          "range": "Jun 22-Jun 28, 2026",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 11.99,
          "revenuePerPurchase": 14.99,
          "deltaPurchasesPct": 0.0,
          "deltaRevenuePct": -72.7405,
          "payments": [
            {
              "date": "Jun 27",
              "createdAt": "2026-06-27",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            }
          ]
        },
        "currentCompleteWeek": {
          "label": "Roku sales this week",
          "range": "Jun 22-Jun 28, 2026",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 11.99,
          "revenuePerPurchase": 14.99,
          "deltaPurchasesPct": 0.0,
          "deltaRevenuePct": -72.7405,
          "payments": [
            {
              "date": "Jun 27",
              "createdAt": "2026-06-27",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            }
          ]
        },
        "weekToDate": {
          "label": "Roku sales this week",
          "range": "Jun 8-Jun 14, 2026",
          "purchases": 2,
          "purchaseRevenue": 29.98,
          "developerRevShare": 23.98,
          "revenuePerPurchase": 14.99,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
          "payments": [
            {
              "date": "Jun 11",
              "createdAt": "2026-06-11",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            },
            {
              "date": "Jun 13",
              "createdAt": "2026-06-13",
              "amount": 14.99,
              "developerRevShare": 11.99,
              "description": "Roku - Purchase HD 15",
              "source": "Roku"
            }
          ]
        },
        "lifetimeObserved": {
          "range": "Through Jun 8, 2026 Roku Sales Activity report",
          "purchases": 16,
          "purchaseRevenue": 241.84,
          "developerRevShare": 193.44
        },
        "mix": [
          {
            "label": "Roku title purchases",
            "purchases": 15,
            "purchaseRevenue": 176.85
          },
          {
            "label": "Roku bundle purchases",
            "purchases": 3,
            "purchaseRevenue": 129.97
          }
        ],
        "recentPayments": [
          {
            "date": "Jun 4",
            "createdAt": "2026-06-04",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
          {
            "date": "Jun 7",
            "createdAt": "2026-06-07",
            "amount": 19.99,
            "developerRevShare": 15.99,
            "description": "Roku - Purchase Bundle 20",
            "source": "Roku"
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
          },
          {
            "date": "Jun 11",
            "rawDate": "20260611",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 11.99
          },
          {
            "date": "Jun 13",
            "rawDate": "20260613",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 11.99
          },
          {
            "date": "Jun 19",
            "rawDate": "20260619",
            "purchases": 1,
            "purchaseRevenue": 54.99,
            "developerRevShare": 43.99
          },
          {
            "date": "Jun 27",
            "rawDate": "20260627",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 11.99
          }
        ],
        "note": "Roku-visible sales from the latest emailed Sales Activity Report (generated Jun 15, 2026). Year to date: 18 purchases / $271.82 gross (dev rev share $217.42). Adds the new Jun 11 and Jun 13 Purchase HD 15 ($14.99 each) sales; earlier rows (through Jun 7) were already recorded and are not double-counted. | Jun 22, 2026 Sales Activity Report added one new sale: Jun 19 Purchase Bundle 55 ($54.99 gross, $43.99 developer rev share). | Jun 29, 2026 Sales Activity Report adds Jun 27 Purchase HD 15 ($14.99 gross / $11.99 developer rev share)."
      },
      "apple": {
        "sourceLabel": "Apple App Store manual snapshot",
        "sourceDetail": "Apple App Store in-app purchase snapshot manually entered from App Store Connect screenshots. Gross customer sales are shown; estimated net assumes Apple keeps 30% before remittance. This remains a manual source until Apple App Store Connect API reporting is connected.",
        "isManualSnapshot": true,
        "snapshotRange": "Jun 25-Jul 1, 2026",
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
          "range": "Jun 8-Jun 14, 2026",
          "purchases": 5,
          "purchaseRevenue": 74.95,
          "developerRevShare": 52.46,
          "revenuePerPurchase": 14.99,
          "payments": [
            {
              "date": "Jun 10",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 11",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 13",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 13",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 14",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            }
          ]
        },
        "monthToDate": {
          "label": "Apple sales this month",
          "range": "Jun 1-Jun 14, 2026",
          "purchases": 5,
          "purchaseRevenue": 74.95,
          "developerRevShare": 52.46,
          "revenuePerPurchase": 14.99,
          "payments": [
            {
              "date": "Jun 10",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 11",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 13",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 13",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 14",
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
          "range": "Jan 1-Jul 1, 2026",
          "purchases": 20,
          "purchaseRevenue": 332.8,
          "developerRevShare": 232.92,
          "revenuePerPurchase": 16.64,
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
            },
            {
              "date": "Jun 10",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 11",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 13",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 13",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 14",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 16",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 22",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 24",
              "amount": 19.99,
              "description": "Apple App Store - Purchase Bundle 20",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 26",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 27",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 28",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jun 30",
              "amount": 2.99,
              "description": "Apple App Store - Purchase HD 3",
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
          },
          {
            "date": "Jun 10",
            "rawDate": "20260610",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 10.49
          },
          {
            "date": "Jun 11",
            "rawDate": "20260611",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 10.49
          },
          {
            "date": "Jun 13",
            "rawDate": "20260613",
            "purchases": 2,
            "purchaseRevenue": 29.98,
            "developerRevShare": 20.99
          },
          {
            "date": "Jun 14",
            "rawDate": "20260614",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 10.49
          },
          {
            "date": "Jun 16",
            "rawDate": "20260616",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 10.49
          },
          {
            "date": "Jun 22",
            "rawDate": "20260622",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 10.49
          },
          {
            "date": "Jun 24",
            "rawDate": "20260624",
            "purchases": 1,
            "purchaseRevenue": 19.99,
            "developerRevShare": 13.99
          },
          {
            "date": "Jun 26",
            "rawDate": "20260626",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 10.49
          },
          {
            "date": "Jun 27",
            "rawDate": "20260627",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 10.49
          },
          {
            "date": "Jun 28",
            "rawDate": "20260628",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 10.49
          },
          {
            "date": "Jun 30",
            "rawDate": "20260630",
            "purchases": 1,
            "purchaseRevenue": 2.99,
            "developerRevShare": 2.09
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
            "purchases": 12,
            "purchaseRevenue": 179.88,
            "developerRevShare": 125.89
          },
          {
            "label": "Apple Purchase Bundle 10",
            "purchases": 1,
            "purchaseRevenue": 9.99,
            "developerRevShare": 6.99
          },
          {
            "label": "Apple Purchase Bundle 20",
            "purchases": 1,
            "purchaseRevenue": 19.99,
            "developerRevShare": 13.99
          },
          {
            "label": "Apple Purchase HD 3",
            "purchases": 1,
            "purchaseRevenue": 2.99,
            "developerRevShare": 2.09
          }
        ],
        "note": "Apple App Store screenshots show $249.86 gross in-app purchase sales manually entered so far, or approximately $174.88 after Apple's 30% platform fee. The latest sales screenshot (Jun 15-Jun 21, 2026) shows one $14.99 sale on Jun 16, which was already recorded in the 2026-06-18 update, so cumulative Apple sales are unchanged at 14/$249.86 (no double-count). These figures remain manual until Apple App Store Connect API reporting is connected.",
        "latestSalesSnapshot": {
          "period": "Jun 25-Jul 1, 2026",
          "start": "2026-06-25",
          "end": "2026-07-01",
          "purchases": 4,
          "purchaseRevenue": 47.96,
          "alreadyIncludedInCumulative": true,
          "note": "Latest Apple App Store Connect screenshots (Jun 25-Jul 1, 2026) show four new sales: Purchase HD 15 on Jun 26, Jun 27, Jun 28 ($14.99 each, est net $10.49) and Purchase HD 3 on Jun 30 ($2.99, est net $2.09) - total $47.96 gross (est net $33.56). Newly added July 2, 2026, lifting cumulative Apple to 20/$332.80 gross (est net $232.92)."
        }
      },
      "sourceBreakout": [
        {
          "source": "Stripe",
          "purchases": 24,
          "purchaseRevenue": 484.76,
          "developerRevShare": 484.76,
          "detail": "Stripe-visible title/bundle sales; Jun 29 refresh adds charge ch_3Tn4AW ($14.99). Stripe full take shown as developer rev share."
        },
        {
          "source": "Roku",
          "purchases": 20,
          "purchaseRevenue": 341.8,
          "developerRevShare": 273.4,
          "detail": "Roku-visible sales; Jun 29, 2026 Sales Activity Report adds Jun 27 Purchase HD 15 ($14.99 gross / $11.99 dev rev share)."
        },
        {
          "source": "Apple App Store",
          "purchases": 20,
          "purchaseRevenue": 332.8,
          "developerRevShare": 232.92,
          "detail": "Manual Apple App Store snapshot. Jul 2, 2026 screenshots add three Jun 26/27/28 Purchase HD 15 ($14.99 each) and one Jun 30 Purchase HD 3 ($2.99) = $47.96 gross; earlier sales preserved, not double-counted."
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
        "label": "Visible sales this year",
        "range": "Jan 1-Jul 1, 2026",
        "purchases": 64,
        "purchaseRevenue": 1159.36,
        "developerRevShare": 991.08,
        "revenuePerPurchase": 18.11
      },
      "monthToDate": {
        "label": "Sales this month",
        "range": "Jun 1-Jun 17, 2026",
        "purchases": 12,
        "purchaseRevenue": 184.88,
        "developerRevShare": 144.88,
        "revenuePerPurchase": 15.41,
        "payments": [
          {
            "date": "Jun 15",
            "createdAt": "2026-06-15T13:18:05+00:00",
            "amount": 14.99,
            "developerRevShare": 14.99,
            "description": "Stripe - Purchase this title",
            "source": "Stripe",
            "stripeChargeId": "ch_3TiaOvLG0Cw1zW4e1gfG0nL7"
          },
          {
            "date": "Jun 12",
            "createdAt": "2026-06-12T23:06:49+00:00",
            "amount": 14.99,
            "developerRevShare": 14.99,
            "description": "Stripe - Purchase this title",
            "source": "Stripe",
            "stripeChargeId": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi"
          },
          {
            "date": "Jun 10",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 11",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 13",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 13",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 14",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 4",
            "createdAt": "2026-06-04",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
          {
            "date": "Jun 7",
            "createdAt": "2026-06-07",
            "amount": 19.99,
            "developerRevShare": 15.99,
            "description": "Roku - Purchase Bundle 20",
            "source": "Roku"
          },
          {
            "date": "Jun 11",
            "createdAt": "2026-06-11",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
          {
            "date": "Jun 13",
            "createdAt": "2026-06-13",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
          {
            "date": "Jun 16",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          }
        ]
      },
      "lastWeek": {
        "label": "Sales last week",
        "range": "Jun 1-Jun 7, 2026",
        "purchases": 2,
        "purchaseRevenue": 34.98,
        "revenuePerPurchase": 17.49,
        "payments": [
          {
            "date": "Jun 7",
            "createdAt": "2026-06-07",
            "amount": 19.99,
            "developerRevShare": 15.99,
            "description": "Roku - Purchase Bundle 20",
            "source": "Roku"
          },
          {
            "date": "Jun 4",
            "createdAt": "2026-06-04",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          }
        ],
        "developerRevShare": 27.98
      },
      "thisWeek": {
        "label": "Sales this week",
        "range": "Jun 8-Jun 14, 2026",
        "purchases": 8,
        "purchaseRevenue": 119.92,
        "developerRevShare": 91.42,
        "revenuePerPurchase": 14.99,
        "payments": [
          {
            "date": "Jun 12",
            "createdAt": "2026-06-12T23:06:49+00:00",
            "amount": 14.99,
            "developerRevShare": 14.99,
            "description": "Stripe - Purchase this title",
            "source": "Stripe",
            "stripeChargeId": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi"
          },
          {
            "date": "Jun 10",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 11",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 13",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 13",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 14",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 11",
            "createdAt": "2026-06-11",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
          {
            "date": "Jun 13",
            "createdAt": "2026-06-13",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          }
        ]
      },
      "currentCompleteWeek": {
        "label": "Sales last week",
        "range": "Jun 1-Jun 7, 2026",
        "purchases": 2,
        "purchaseRevenue": 34.98,
        "revenuePerPurchase": 17.49,
        "payments": [
          {
            "date": "Jun 7",
            "createdAt": "2026-06-07",
            "amount": 19.99,
            "developerRevShare": 15.99,
            "description": "Roku - Purchase Bundle 20",
            "source": "Roku"
          },
          {
            "date": "Jun 4",
            "createdAt": "2026-06-04",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          }
        ],
        "developerRevShare": 27.98
      },
      "weekToDate": {
        "label": "Sales this week",
        "range": "Jun 8-Jun 14, 2026",
        "purchases": 8,
        "purchaseRevenue": 119.92,
        "developerRevShare": 91.42,
        "revenuePerPurchase": 14.99,
        "payments": [
          {
            "date": "Jun 12",
            "createdAt": "2026-06-12T23:06:49+00:00",
            "amount": 14.99,
            "developerRevShare": 14.99,
            "description": "Stripe - Purchase this title",
            "source": "Stripe",
            "stripeChargeId": "ch_3TheA0LG0Cw1zW4e2Fj5pdSi"
          },
          {
            "date": "Jun 10",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 11",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 13",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 13",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 14",
            "amount": 14.99,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store"
          },
          {
            "date": "Jun 11",
            "createdAt": "2026-06-11",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          },
          {
            "date": "Jun 13",
            "createdAt": "2026-06-13",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          }
        ]
      },
      "recent12Days": {
        "label": "Visible sales last 12 days",
        "range": "May 29-Jun 9, 2026",
        "purchases": 2,
        "purchaseRevenue": 34.98,
        "revenuePerPurchase": 17.49,
        "payments": [
          {
            "date": "Jun 7",
            "createdAt": "2026-06-07",
            "amount": 19.99,
            "developerRevShare": 15.99,
            "description": "Roku - Purchase Bundle 20",
            "source": "Roku"
          },
          {
            "date": "Jun 4",
            "createdAt": "2026-06-04",
            "amount": 14.99,
            "developerRevShare": 11.99,
            "description": "Roku - Purchase HD 15",
            "source": "Roku"
          }
        ],
        "developerRevShare": 27.98
      },
      "lifetimeObserved": {
        "range": "Through Jun 8, 2026 refresh",
        "purchases": 45,
        "purchaseRevenue": 841.55,
        "developerRevShare": 305.38
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
      "note": "Visible platform sales show 55 purchases and $991.45 year to date, combining Stripe-visible payments, Roku-visible sales, and the manual Apple App Store snapshot. This run reconnected Stripe and added 2 previously-missed succeeded charges (Jun 12 and Jun 15, $14.99 each). Still not total ElectricNOW sales: Google Play is separate and Apple is a manual snapshot. YouTube is a separate channel (estimated YouTube ad revenue only) and is NOT included here."
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
            "title": "ElectricNOW en Español",
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
      },
      "freshnessNote": "No fresh GA4 app-screen source in the Jun 15 run; values preserved from the last complete pull (May 25-31) and not advanced or zeroed."
    },
    "titleViewership": {
      "period": "Jun 8-Jun 14, 2026",
      "note": "Top programs roll up GA4 play-event labels into parent shows/collections where possible and rank by play events because ads monetize playback. Live/FAST/linear channels are excluded from Top Shows and Top Videos and reported separately under Live channel usage. Title mapping remains dependent on app metadata quality.",
      "topVideoTitlesNote": "Top videos shows individual on-demand video plays only. Live/FAST/linear channel rows (e.g. DARK MATTER TV, Kung Fu Movies, spot on news, ToonOvation, ElectricNOW en Espanol, Stoner TV Network) are excluded here and reported separately in 'Live channel usage'. Top 50 may list fewer than 50 entries until the next GA4 refresh overfetches with the stricter row-level live-channel predicate.",
      "topPrograms": [
        {
          "program": "Leverage: Redemption",
          "plays": 114,
          "activeUsers": 21,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 2,
          "examples": [
            "Leverage: Redemption - Season 3",
            "Leverage: Redemption (Seasons 1 & 2)"
          ],
          "rank": 1
        },
        {
          "program": "The Ark",
          "plays": 60,
          "activeUsers": 16,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "The Ark"
          ],
          "rank": 2
        },
        {
          "program": "The Librarians: The Next Chapter",
          "plays": 38,
          "activeUsers": 6,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 2,
          "examples": [
            "The Librarians: The Next Chapter (Season 1)",
            "The Librarians: The Next Chapter Season 2 Teaser"
          ],
          "rank": 3
        },
        {
          "program": "Leverage",
          "plays": 38,
          "activeUsers": 5,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Leverage"
          ],
          "rank": 4
        },
        {
          "program": "Almost Paradise",
          "plays": 22,
          "activeUsers": 4,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Almost Paradise (Season 1 & 2)"
          ],
          "rank": 5
        },
        {
          "program": "The Messenger",
          "plays": 12,
          "activeUsers": 3,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "The Messenger"
          ],
          "rank": 6
        },
        {
          "program": "Abroad",
          "plays": 11,
          "activeUsers": 2,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Abroad"
          ],
          "rank": 7
        },
        {
          "program": "Checking Out: The Librarians Next Chapter",
          "plays": 11,
          "activeUsers": 2,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Checking Out: The Librarians Next Chapter"
          ],
          "rank": 8
        },
        {
          "program": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast",
          "plays": 6,
          "activeUsers": 2,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "The Official Leverage: Redemption After Show - A Very Distinctive Podcast"
          ],
          "rank": 9
        },
        {
          "program": "The Poly Couple",
          "plays": 6,
          "activeUsers": 2,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "The Poly Couple (Season 1)"
          ],
          "rank": 10
        },
        {
          "program": "Art of Life",
          "plays": 5,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Art of Life"
          ],
          "rank": 11
        },
        {
          "program": "The Side Job",
          "plays": 4,
          "activeUsers": 3,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "The Side Job"
          ],
          "rank": 12
        },
        {
          "program": "Delicious",
          "plays": 4,
          "activeUsers": 2,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Delicious"
          ],
          "rank": 13
        },
        {
          "program": "Ghosted",
          "plays": 4,
          "activeUsers": 2,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Ghosted"
          ],
          "rank": 14
        },
        {
          "program": "Black Mamba",
          "plays": 3,
          "activeUsers": 2,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Black Mamba"
          ],
          "rank": 15
        },
        {
          "program": "The Outpost",
          "plays": 3,
          "activeUsers": 2,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "The Outpost"
          ],
          "rank": 16
        },
        {
          "program": "6 Horas",
          "plays": 3,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "6 Horas"
          ],
          "rank": 17
        },
        {
          "program": "Paradise Found",
          "plays": 3,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Paradise Found"
          ],
          "rank": 18
        },
        {
          "program": "The Triangle Mini-Series",
          "plays": 3,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "The Triangle Mini-Series"
          ],
          "rank": 19
        },
        {
          "program": "The Triangle Night 1",
          "plays": 3,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "The Triangle Night 1"
          ],
          "rank": 20
        },
        {
          "program": "A Christmas Carol",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "A Christmas Carol"
          ],
          "rank": 21
        },
        {
          "program": "A Crack in the Floor",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "A Crack in the Floor"
          ],
          "rank": 22
        },
        {
          "program": "ElectricCon Fan Convention",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "ElectricCon Fan Convention"
          ],
          "rank": 23
        },
        {
          "program": "Exile",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Exile"
          ],
          "rank": 24
        },
        {
          "program": "FMWBH: F'ing My Way Back Home",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "FMWBH: F'ing My Way Back Home"
          ],
          "rank": 25
        },
        {
          "program": "Generation Z",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Generation Z"
          ],
          "rank": 26
        },
        {
          "program": "Highlander",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Highlander"
          ],
          "rank": 27
        },
        {
          "program": "One Big Happy Family",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "One Big Happy Family"
          ],
          "rank": 28
        },
        {
          "program": "Reef Eel Soup for the Soul",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Reef Eel Soup for the Soul"
          ],
          "rank": 29
        },
        {
          "program": "The Librarian: Curse of the Judas Chalice",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "The Librarian: Curse of the Judas Chalice"
          ],
          "rank": 30
        },
        {
          "program": "The Triangle Night 2",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "The Triangle Night 2"
          ],
          "rank": 31
        },
        {
          "program": "The Weekend In Paris Job",
          "plays": 2,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "The Weekend In Paris Job"
          ],
          "rank": 32
        },
        {
          "program": "Adventures of Sonic the Hedgehog",
          "plays": 1,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Adventures of Sonic the Hedgehog"
          ],
          "rank": 33
        },
        {
          "program": "Apalancamiento",
          "plays": 1,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Apalancamiento"
          ],
          "rank": 34
        },
        {
          "program": "Ares 11",
          "plays": 1,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Ares 11"
          ],
          "rank": 35
        },
        {
          "program": "Asian American Pacific Islander Month",
          "plays": 1,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Asian American Pacific Islander Month"
          ],
          "rank": 36
        },
        {
          "program": "Awake in the Woods",
          "plays": 1,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Awake in the Woods"
          ],
          "rank": 37
        },
        {
          "program": "Bad Samaritan",
          "plays": 1,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Bad Samaritan"
          ],
          "rank": 38
        },
        {
          "program": "Blank Slate",
          "plays": 1,
          "activeUsers": 1,
          "viewerMethod": "deduped_ga4_filter",
          "rawLabelCount": 1,
          "examples": [
            "Blank Slate"
          ],
          "rank": 39
        }
      ],
      "topVideoTitles": [
        {
          "title": "Leverage: Redemption - Season 3",
          "plays": 83,
          "activeUsers": 21,
          "group": "Leverage: Redemption",
          "rank": 1
        },
        {
          "title": "The Ark",
          "plays": 60,
          "activeUsers": 16,
          "group": "The Ark",
          "rank": 2
        },
        {
          "title": "Leverage",
          "plays": 38,
          "activeUsers": 5,
          "group": "Leverage",
          "rank": 3
        },
        {
          "title": "The Librarians: The Next Chapter (Season 1)",
          "plays": 32,
          "activeUsers": 6,
          "group": "The Librarians: The Next Chapter",
          "rank": 4
        },
        {
          "title": "Leverage: Redemption (Seasons 1 & 2)",
          "plays": 31,
          "activeUsers": 7,
          "group": "Leverage: Redemption",
          "rank": 5
        },
        {
          "title": "Almost Paradise (Season 1 & 2)",
          "plays": 22,
          "activeUsers": 4,
          "group": "Almost Paradise",
          "rank": 6
        },
        {
          "title": "The Messenger",
          "plays": 12,
          "activeUsers": 3,
          "group": "The Messenger",
          "rank": 7
        },
        {
          "title": "Abroad",
          "plays": 11,
          "activeUsers": 2,
          "group": "Abroad",
          "rank": 8
        },
        {
          "title": "Checking Out: The Librarians Next Chapter",
          "plays": 11,
          "activeUsers": 2,
          "group": "Checking Out: The Librarians Next Chapter",
          "rank": 9
        },
        {
          "title": "The Librarians: The Next Chapter Season 2 Teaser",
          "plays": 6,
          "activeUsers": 2,
          "group": "The Librarians: The Next Chapter",
          "rank": 10
        },
        {
          "title": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast",
          "plays": 6,
          "activeUsers": 2,
          "group": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast",
          "rank": 11
        },
        {
          "title": "The Poly Couple (Season 1)",
          "plays": 6,
          "activeUsers": 2,
          "group": "The Poly Couple",
          "rank": 12
        },
        {
          "title": "Art of Life",
          "plays": 5,
          "activeUsers": 1,
          "group": "Art of Life",
          "rank": 13
        },
        {
          "title": "The Side Job",
          "plays": 4,
          "activeUsers": 3,
          "group": "The Side Job",
          "rank": 14
        },
        {
          "title": "Delicious",
          "plays": 4,
          "activeUsers": 2,
          "group": "Delicious",
          "rank": 15
        },
        {
          "title": "Ghosted",
          "plays": 4,
          "activeUsers": 2,
          "group": "Ghosted",
          "rank": 16
        },
        {
          "title": "Black Mamba",
          "plays": 3,
          "activeUsers": 2,
          "group": "Black Mamba",
          "rank": 17
        },
        {
          "title": "The Outpost",
          "plays": 3,
          "activeUsers": 2,
          "group": "The Outpost",
          "rank": 18
        },
        {
          "title": "6 Horas",
          "plays": 3,
          "activeUsers": 1,
          "group": "6 Horas",
          "rank": 19
        },
        {
          "title": "Paradise Found",
          "plays": 3,
          "activeUsers": 1,
          "group": "Paradise Found",
          "rank": 20
        },
        {
          "title": "The Triangle Mini-Series",
          "plays": 3,
          "activeUsers": 1,
          "group": "The Triangle Mini-Series",
          "rank": 21
        },
        {
          "title": "The Triangle Night 1",
          "plays": 3,
          "activeUsers": 1,
          "group": "The Triangle Night 1",
          "rank": 22
        },
        {
          "title": "A Christmas Carol",
          "plays": 2,
          "activeUsers": 1,
          "group": "A Christmas Carol",
          "rank": 23
        },
        {
          "title": "A Crack in the Floor",
          "plays": 2,
          "activeUsers": 1,
          "group": "A Crack in the Floor",
          "rank": 24
        },
        {
          "title": "ElectricCon Fan Convention",
          "plays": 2,
          "activeUsers": 1,
          "group": "ElectricCon Fan Convention",
          "rank": 25
        },
        {
          "title": "Exile",
          "plays": 2,
          "activeUsers": 1,
          "group": "Exile",
          "rank": 26
        },
        {
          "title": "FMWBH: F'ing My Way Back Home",
          "plays": 2,
          "activeUsers": 1,
          "group": "FMWBH: F'ing My Way Back Home",
          "rank": 27
        },
        {
          "title": "Generation Z",
          "plays": 2,
          "activeUsers": 1,
          "group": "Generation Z",
          "rank": 28
        },
        {
          "title": "Highlander",
          "plays": 2,
          "activeUsers": 1,
          "group": "Highlander",
          "rank": 29
        },
        {
          "title": "One Big Happy Family",
          "plays": 2,
          "activeUsers": 1,
          "group": "One Big Happy Family",
          "rank": 30
        },
        {
          "title": "Reef Eel Soup for the Soul",
          "plays": 2,
          "activeUsers": 1,
          "group": "Reef Eel Soup for the Soul",
          "rank": 31
        },
        {
          "title": "The Librarian: Curse of the Judas Chalice",
          "plays": 2,
          "activeUsers": 1,
          "group": "The Librarian: Curse of the Judas Chalice",
          "rank": 32
        },
        {
          "title": "The Triangle Night 2",
          "plays": 2,
          "activeUsers": 1,
          "group": "The Triangle Night 2",
          "rank": 33
        },
        {
          "title": "The Weekend In Paris Job",
          "plays": 2,
          "activeUsers": 1,
          "group": "The Weekend In Paris Job",
          "rank": 34
        },
        {
          "title": "Adventures of Sonic the Hedgehog",
          "plays": 1,
          "activeUsers": 1,
          "group": "Adventures of Sonic the Hedgehog",
          "rank": 35
        },
        {
          "title": "Apalancamiento",
          "plays": 1,
          "activeUsers": 1,
          "group": "Apalancamiento",
          "rank": 36
        },
        {
          "title": "Ares 11",
          "plays": 1,
          "activeUsers": 1,
          "group": "Ares 11",
          "rank": 37
        },
        {
          "title": "Asian American Pacific Islander Month",
          "plays": 1,
          "activeUsers": 1,
          "group": "Asian American Pacific Islander Month",
          "rank": 38
        },
        {
          "title": "Awake in the Woods",
          "plays": 1,
          "activeUsers": 1,
          "group": "Awake in the Woods",
          "rank": 39
        },
        {
          "title": "Bad Samaritan",
          "plays": 1,
          "activeUsers": 1,
          "group": "Bad Samaritan",
          "rank": 40
        },
        {
          "title": "Blank Slate",
          "plays": 1,
          "activeUsers": 1,
          "group": "Blank Slate",
          "rank": 41
        },
        {
          "title": "Bodies",
          "plays": 1,
          "activeUsers": 1,
          "group": "Bodies",
          "rank": 42
        },
        {
          "title": "Demon Stalker",
          "plays": 1,
          "activeUsers": 1,
          "group": "Demon Stalker",
          "rank": 43
        },
        {
          "title": "Episode 5",
          "plays": 1,
          "activeUsers": 1,
          "group": "Episode 5",
          "rank": 44
        },
        {
          "title": "I Never Cry",
          "plays": 1,
          "activeUsers": 1,
          "group": "I Never Cry",
          "rank": 45
        },
        {
          "title": "Killington",
          "plays": 1,
          "activeUsers": 1,
          "group": "Killington",
          "rank": 46
        },
        {
          "title": "Pistol Whip",
          "plays": 1,
          "activeUsers": 1,
          "group": "Pistol Whip",
          "rank": 47
        },
        {
          "title": "Silent Night: A Song for the World",
          "plays": 1,
          "activeUsers": 1,
          "group": "Silent Night: A Song for the World",
          "rank": 48
        },
        {
          "title": "Somewhere in Montana",
          "plays": 1,
          "activeUsers": 1,
          "group": "Somewhere in Montana",
          "rank": 49
        }
      ],
      "topChannelTitles": [
        {
          "title": "Leverage: Redemption - Season 3",
          "plays": 83,
          "activeUsers": 21,
          "rank": 1
        },
        {
          "title": "The Ark",
          "plays": 60,
          "activeUsers": 16,
          "rank": 2
        },
        {
          "title": "Leverage",
          "plays": 38,
          "activeUsers": 5,
          "rank": 3
        },
        {
          "title": "The Librarians: The Next Chapter (Season 1)",
          "plays": 32,
          "activeUsers": 6,
          "rank": 4
        },
        {
          "title": "Leverage: Redemption (Seasons 1 & 2)",
          "plays": 31,
          "activeUsers": 7,
          "rank": 5
        },
        {
          "title": "Almost Paradise (Season 1 & 2)",
          "plays": 22,
          "activeUsers": 4,
          "rank": 6
        },
        {
          "title": "The Messenger",
          "plays": 12,
          "activeUsers": 3,
          "rank": 7
        },
        {
          "title": "Abroad",
          "plays": 11,
          "activeUsers": 2,
          "rank": 8
        },
        {
          "title": "Checking Out: The Librarians Next Chapter",
          "plays": 11,
          "activeUsers": 2,
          "rank": 9
        },
        {
          "title": "The Librarians: The Next Chapter Season 2 Teaser",
          "plays": 6,
          "activeUsers": 2,
          "rank": 10
        },
        {
          "title": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast",
          "plays": 6,
          "activeUsers": 2,
          "rank": 11
        },
        {
          "title": "The Poly Couple (Season 1)",
          "plays": 6,
          "activeUsers": 2,
          "rank": 12
        },
        {
          "title": "Art of Life",
          "plays": 5,
          "activeUsers": 1,
          "rank": 13
        },
        {
          "title": "The Side Job",
          "plays": 4,
          "activeUsers": 3,
          "rank": 14
        },
        {
          "title": "Delicious",
          "plays": 4,
          "activeUsers": 2,
          "rank": 15
        },
        {
          "title": "Ghosted",
          "plays": 4,
          "activeUsers": 2,
          "rank": 16
        },
        {
          "title": "Black Mamba",
          "plays": 3,
          "activeUsers": 2,
          "rank": 17
        },
        {
          "title": "The Outpost",
          "plays": 3,
          "activeUsers": 2,
          "rank": 18
        },
        {
          "title": "6 Horas",
          "plays": 3,
          "activeUsers": 1,
          "rank": 19
        },
        {
          "title": "Paradise Found",
          "plays": 3,
          "activeUsers": 1,
          "rank": 20
        },
        {
          "title": "The Triangle Mini-Series",
          "plays": 3,
          "activeUsers": 1,
          "rank": 21
        },
        {
          "title": "The Triangle Night 1",
          "plays": 3,
          "activeUsers": 1,
          "rank": 22
        },
        {
          "title": "A Christmas Carol",
          "plays": 2,
          "activeUsers": 1,
          "rank": 23
        },
        {
          "title": "A Crack in the Floor",
          "plays": 2,
          "activeUsers": 1,
          "rank": 24
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
      },
      "freshnessNote": "No fresh GA4 app-screen source in the Jun 15 run; values preserved from the last complete pull (May 25-31) and not advanced or zeroed."
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
      },
      "freshnessNote": "No fresh GA4 app-screen source in the Jun 15 run; values preserved from the last complete pull (May 25-31) and not advanced or zeroed."
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
        "range": "Jun 1-Jun 7, 2026",
        "totalGa4ActiveUsers": 7608,
        "totalGa4Sessions": 13911,
        "totalGa4EngagementRate": 78.16835597728416,
        "landingPageUsers": 606,
        "landingPageSessions": 909,
        "paidSocialUsers": 2436,
        "paidSocialSessions": 3360
      },
      "currentWeek": {
        "range": "Jun 8-Jun 14, 2026",
        "totalGa4ActiveUsers": 7282,
        "totalGa4Sessions": 13850,
        "totalGa4EngagementRate": 77.50180505415163,
        "landingPageUsers": 744,
        "landingPageSessions": 1080,
        "paidSocialUsers": 2421,
        "paidSocialSessions": 3497
      },
      "landingPage": {
        "sourceLabel": "Landing page acquisition only",
        "currentWeek": {
          "range": "Jun 8-Jun 14, 2026",
          "activeUsers": 744,
          "newUsers": null,
          "sessions": 1080,
          "engagedSessions": 996,
          "engagementRate": 92.22222222222223,
          "screenPageViews": 1448,
          "eventCount": 2457
        },
        "previousWeek": {
          "range": "Jun 1-Jun 7, 2026",
          "activeUsers": 606,
          "newUsers": 497,
          "sessions": 909,
          "engagedSessions": 840,
          "engagementRate": 92.4092409240924,
          "screenPageViews": 1175,
          "eventCount": 1959
        },
        "deltaActiveUsersPct": 22.772277227722775
      },
      "sourceMedium": [
        {
          "sessionSourceMedium": "(direct) / (none)",
          "activeUsers": 3163,
          "newUsers": 1946,
          "sessions": 5386,
          "engagedSessions": 4405,
          "engagementRate": 81.7861121425919,
          "eventCount": 174483
        },
        {
          "sessionSourceMedium": "apps.facebook.com / (not set)",
          "activeUsers": 1801,
          "newUsers": 1293,
          "sessions": 2575,
          "engagedSessions": 1940,
          "engagementRate": 75.33980582524272,
          "eventCount": 36707
        },
        {
          "sessionSourceMedium": "homescreen / (not set)",
          "activeUsers": 719,
          "newUsers": 182,
          "sessions": 2274,
          "engagedSessions": 1965,
          "engagementRate": 86.41160949868075,
          "eventCount": 460155
        },
        {
          "sessionSourceMedium": "google / organic",
          "activeUsers": 389,
          "newUsers": 326,
          "sessions": 632,
          "engagedSessions": 556,
          "engagementRate": 87.9746835443038,
          "eventCount": 13407
        },
        {
          "sessionSourceMedium": "google-play / organic",
          "activeUsers": 293,
          "newUsers": 187,
          "sessions": 501,
          "engagedSessions": 423,
          "engagementRate": 84.4311377245509,
          "eventCount": 27093
        },
        {
          "sessionSourceMedium": "(not set)",
          "activeUsers": 88,
          "newUsers": 9,
          "sessions": 501,
          "engagedSessions": 0,
          "engagementRate": 0.0,
          "eventCount": 58150
        },
        {
          "sessionSourceMedium": "hs-search / (not set)",
          "activeUsers": 64,
          "newUsers": 14,
          "sessions": 449,
          "engagedSessions": 394,
          "engagementRate": 87.75055679287304,
          "eventCount": 100637
        },
        {
          "sessionSourceMedium": "apps.instagram.com / (not set)",
          "activeUsers": 294,
          "newUsers": 215,
          "sessions": 413,
          "engagedSessions": 313,
          "engagementRate": 75.78692493946731,
          "eventCount": 7728
        },
        {
          "sessionSourceMedium": "apps.facebook.com / (none)",
          "activeUsers": 32,
          "newUsers": 0,
          "sessions": 157,
          "engagedSessions": 120,
          "engagementRate": 76.43312101910828,
          "eventCount": 847
        },
        {
          "sessionSourceMedium": "fb / paid",
          "activeUsers": 107,
          "newUsers": 18,
          "sessions": 138,
          "engagedSessions": 108,
          "engagementRate": 78.26086956521739,
          "eventCount": 1598
        },
        {
          "sessionSourceMedium": "bing / organic",
          "activeUsers": 59,
          "newUsers": 38,
          "sessions": 121,
          "engagedSessions": 109,
          "engagementRate": 90.08264462809917,
          "eventCount": 8388
        },
        {
          "sessionSourceMedium": "channel-store / (not set)",
          "activeUsers": 20,
          "newUsers": 8,
          "sessions": 102,
          "engagedSessions": 97,
          "engagementRate": 95.09803921568627,
          "eventCount": 23065
        },
        {
          "sessionSourceMedium": "google / cpc",
          "activeUsers": 57,
          "newUsers": 4,
          "sessions": 87,
          "engagedSessions": 75,
          "engagementRate": 86.20689655172413,
          "eventCount": 987
        },
        {
          "sessionSourceMedium": "m.facebook.com / referral",
          "activeUsers": 69,
          "newUsers": 69,
          "sessions": 69,
          "engagedSessions": 45,
          "engagementRate": 65.21739130434783,
          "eventCount": 367
        },
        {
          "sessionSourceMedium": "electricentertainment.com / referral",
          "activeUsers": 28,
          "newUsers": 21,
          "sessions": 57,
          "engagedSessions": 48,
          "engagementRate": 84.21052631578947,
          "eventCount": 2707
        },
        {
          "sessionSourceMedium": "facebook.com / referral",
          "activeUsers": 54,
          "newUsers": 54,
          "sessions": 54,
          "engagedSessions": 14,
          "engagementRate": 25.925925925925924,
          "eventCount": 303
        },
        {
          "sessionSourceMedium": "lm.facebook.com / referral",
          "activeUsers": 32,
          "newUsers": 32,
          "sessions": 32,
          "engagedSessions": 7,
          "engagementRate": 21.875,
          "eventCount": 135
        },
        {
          "sessionSourceMedium": "homescreen / (none)",
          "activeUsers": 2,
          "newUsers": 0,
          "sessions": 32,
          "engagedSessions": 32,
          "engagementRate": 100.0,
          "eventCount": 61767
        },
        {
          "sessionSourceMedium": "ntp.msn.com / referral",
          "activeUsers": 3,
          "newUsers": 0,
          "sessions": 30,
          "engagedSessions": 29,
          "engagementRate": 96.66666666666667,
          "eventCount": 2123
        },
        {
          "sessionSourceMedium": "ig / paid",
          "activeUsers": 23,
          "newUsers": 9,
          "sessions": 26,
          "engagedSessions": 22,
          "engagementRate": 84.61538461538461,
          "eventCount": 352
        },
        {
          "sessionSourceMedium": "hs-voice-search / (not set)",
          "activeUsers": 9,
          "newUsers": 2,
          "sessions": 26,
          "engagedSessions": 20,
          "engagementRate": 76.92307692307693,
          "eventCount": 3520
        },
        {
          "sessionSourceMedium": "apps.instagram.com / (none)",
          "activeUsers": 3,
          "newUsers": 0,
          "sessions": 22,
          "engagedSessions": 18,
          "engagementRate": 81.81818181818183,
          "eventCount": 1003
        },
        {
          "sessionSourceMedium": "l.instagram.com / referral",
          "activeUsers": 17,
          "newUsers": 17,
          "sessions": 18,
          "engagedSessions": 5,
          "engagementRate": 27.77777777777778,
          "eventCount": 82
        },
        {
          "sessionSourceMedium": "l.facebook.com / referral",
          "activeUsers": 11,
          "newUsers": 8,
          "sessions": 18,
          "engagedSessions": 7,
          "engagementRate": 38.88888888888889,
          "eventCount": 154
        },
        {
          "sessionSourceMedium": "yahoo / organic",
          "activeUsers": 11,
          "newUsers": 8,
          "sessions": 16,
          "engagedSessions": 16,
          "engagementRate": 100.0,
          "eventCount": 760
        },
        {
          "sessionSourceMedium": "voice-command / (not set)",
          "activeUsers": 3,
          "newUsers": 1,
          "sessions": 16,
          "engagedSessions": 14,
          "engagementRate": 87.5,
          "eventCount": 4868
        },
        {
          "sessionSourceMedium": "mail.yahoo.com / referral",
          "activeUsers": 1,
          "newUsers": 0,
          "sessions": 16,
          "engagedSessions": 15,
          "engagementRate": 93.75,
          "eventCount": 230
        },
        {
          "sessionSourceMedium": "roku-mobile-app / (not set)",
          "activeUsers": 7,
          "newUsers": 2,
          "sessions": 15,
          "engagedSessions": 13,
          "engagementRate": 86.66666666666667,
          "eventCount": 2590
        },
        {
          "sessionSourceMedium": "other-channel / (not set)",
          "activeUsers": 3,
          "newUsers": 0,
          "sessions": 14,
          "engagedSessions": 13,
          "engagementRate": 92.85714285714286,
          "eventCount": 4680
        },
        {
          "sessionSourceMedium": "login.microsoftonline.com / referral",
          "activeUsers": 1,
          "newUsers": 0,
          "sessions": 12,
          "engagedSessions": 12,
          "engagementRate": 100.0,
          "eventCount": 1062
        },
        {
          "sessionSourceMedium": "statics.teams.cdn.office.net / referral",
          "activeUsers": 1,
          "newUsers": 0,
          "sessions": 12,
          "engagedSessions": 10,
          "engagementRate": 83.33333333333334,
          "eventCount": 259
        },
        {
          "sessionSourceMedium": "bit.ly / referral",
          "activeUsers": 11,
          "newUsers": 11,
          "sessions": 11,
          "engagedSessions": 4,
          "engagementRate": 36.36363636363637,
          "eventCount": 54
        },
        {
          "sessionSourceMedium": "duckduckgo / organic",
          "activeUsers": 8,
          "newUsers": 6,
          "sessions": 11,
          "engagedSessions": 8,
          "engagementRate": 72.72727272727273,
          "eventCount": 88
        },
        {
          "sessionSourceMedium": "linktr.ee / referral",
          "activeUsers": 8,
          "newUsers": 8,
          "sessions": 8,
          "engagedSessions": 5,
          "engagementRate": 62.5,
          "eventCount": 40
        },
        {
          "sessionSourceMedium": "th / paid",
          "activeUsers": 7,
          "newUsers": 1,
          "sessions": 8,
          "engagedSessions": 6,
          "engagementRate": 75.0,
          "eventCount": 48
        },
        {
          "sessionSourceMedium": "electric.ottera.tv / referral",
          "activeUsers": 1,
          "newUsers": 0,
          "sessions": 8,
          "engagedSessions": 4,
          "engagementRate": 50.0,
          "eventCount": 54
        },
        {
          "sessionSourceMedium": "reddit.com / referral",
          "activeUsers": 6,
          "newUsers": 7,
          "sessions": 7,
          "engagedSessions": 4,
          "engagementRate": 57.14285714285714,
          "eventCount": 51
        },
        {
          "sessionSourceMedium": "electricnow.us.auth0.com / referral",
          "activeUsers": 5,
          "newUsers": 2,
          "sessions": 7,
          "engagedSessions": 6,
          "engagementRate": 85.71428571428571,
          "eventCount": 178
        },
        {
          "sessionSourceMedium": "tvbrittanyf.com / referral",
          "activeUsers": 5,
          "newUsers": 5,
          "sessions": 6,
          "engagedSessions": 6,
          "engagementRate": 100.0,
          "eventCount": 87
        },
        {
          "sessionSourceMedium": "youtube.com / referral",
          "activeUsers": 4,
          "newUsers": 4,
          "sessions": 6,
          "engagedSessions": 4,
          "engagementRate": 66.66666666666666,
          "eventCount": 69
        },
        {
          "sessionSourceMedium": "t.co / referral",
          "activeUsers": 4,
          "newUsers": 4,
          "sessions": 5,
          "engagedSessions": 2,
          "engagementRate": 40.0,
          "eventCount": 22
        },
        {
          "sessionSourceMedium": "go.bsky.app / referral",
          "activeUsers": 1,
          "newUsers": 0,
          "sessions": 4,
          "engagedSessions": 0,
          "engagementRate": 0.0,
          "eventCount": 12
        },
        {
          "sessionSourceMedium": "hs-d / (not set)",
          "activeUsers": 1,
          "newUsers": 1,
          "sessions": 4,
          "engagedSessions": 0,
          "engagementRate": 0.0,
          "eventCount": 26
        },
        {
          "sessionSourceMedium": "ecosia.org / organic",
          "activeUsers": 2,
          "newUsers": 1,
          "sessions": 2,
          "engagedSessions": 2,
          "engagementRate": 100.0,
          "eventCount": 18
        },
        {
          "sessionSourceMedium": "onebighappyfamilymovie.com / referral",
          "activeUsers": 2,
          "newUsers": 2,
          "sessions": 2,
          "engagedSessions": 0,
          "engagementRate": 0.0,
          "eventCount": 8
        },
        {
          "sessionSourceMedium": "threads / social",
          "activeUsers": 2,
          "newUsers": 2,
          "sessions": 2,
          "engagedSessions": 2,
          "engagementRate": 100.0,
          "eventCount": 11
        },
        {
          "sessionSourceMedium": "chatgpt.com / (not set)",
          "activeUsers": 1,
          "newUsers": 1,
          "sessions": 1,
          "engagedSessions": 1,
          "engagementRate": 100.0,
          "eventCount": 5
        },
        {
          "sessionSourceMedium": "go.aftvnews.com / referral",
          "activeUsers": 1,
          "newUsers": 1,
          "sessions": 1,
          "engagedSessions": 1,
          "engagementRate": 100.0,
          "eventCount": 8
        },
        {
          "sessionSourceMedium": "hs-search / (none)",
          "activeUsers": 1,
          "newUsers": 0,
          "sessions": 1,
          "engagedSessions": 1,
          "engagementRate": 100.0,
          "eventCount": 657
        },
        {
          "sessionSourceMedium": "instagram / organic",
          "activeUsers": 1,
          "newUsers": 0,
          "sessions": 1,
          "engagedSessions": 1,
          "engagementRate": 100.0,
          "eventCount": 3
        },
        {
          "sessionSourceMedium": "m.youtube.com / referral",
          "activeUsers": 1,
          "newUsers": 1,
          "sessions": 1,
          "engagedSessions": 1,
          "engagementRate": 100.0,
          "eventCount": 13
        },
        {
          "sessionSourceMedium": "startpage.com / referral",
          "activeUsers": 1,
          "newUsers": 1,
          "sessions": 1,
          "engagedSessions": 1,
          "engagementRate": 100.0,
          "eventCount": 26
        },
        {
          "sessionSourceMedium": "vizio.com / referral",
          "activeUsers": 1,
          "newUsers": 1,
          "sessions": 1,
          "engagedSessions": 1,
          "engagementRate": 100.0,
          "eventCount": 7
        }
      ],
      "campaigns": [
        {
          "sessionCampaignName": "(direct)",
          "activeUsers": 3271,
          "newUsers": 2052,
          "sessions": 5505,
          "engagedSessions": 4505,
          "engagementRate": 81.83469573115349,
          "eventCount": 205601
        },
        {
          "sessionCampaignName": "fb4a",
          "activeUsers": 2048,
          "newUsers": 1644,
          "sessions": 2791,
          "engagedSessions": 2200,
          "engagementRate": 78.8247939806521,
          "eventCount": 48102
        },
        {
          "sessionCampaignName": "(not set)",
          "activeUsers": 1206,
          "newUsers": 462,
          "sessions": 3685,
          "engagedSessions": 2813,
          "engagementRate": 76.33649932157395,
          "eventCount": 658532
        },
        {
          "sessionCampaignName": "(organic)",
          "activeUsers": 347,
          "newUsers": 276,
          "sessions": 649,
          "engagedSessions": 550,
          "engagementRate": 84.7457627118644,
          "eventCount": 28088
        },
        {
          "sessionCampaignName": "ig4a",
          "activeUsers": 345,
          "newUsers": 273,
          "sessions": 481,
          "engagedSessions": 375,
          "engagementRate": 77.96257796257797,
          "eventCount": 13663
        },
        {
          "sessionCampaignName": "(referral)",
          "activeUsers": 285,
          "newUsers": 268,
          "sessions": 357,
          "engagedSessions": 185,
          "engagementRate": 51.820728291316534,
          "eventCount": 5116
        },
        {
          "sessionCampaignName": "PCSM - ElectricNow App Promotion - Android",
          "activeUsers": 175,
          "newUsers": 106,
          "sessions": 265,
          "engagedSessions": 232,
          "engagementRate": 87.54716981132076,
          "eventCount": 4636
        },
        {
          "sessionCampaignName": "6946101792958",
          "activeUsers": 78,
          "newUsers": 21,
          "sessions": 103,
          "engagedSessions": 84,
          "engagementRate": 81.55339805825243,
          "eventCount": 832
        },
        {
          "sessionCampaignName": "6952224519558",
          "activeUsers": 68,
          "newUsers": 15,
          "sessions": 79,
          "engagedSessions": 57,
          "engagementRate": 72.15189873417721,
          "eventCount": 578
        }
      ],
      "note": "Acquisition rows are GA4 source/medium and campaign rows. Landing-page users are acquisition-only and are not counted as platform audience."
    },
    "viewingBehavior": {
      "launchBaseline": {
        "range": "Apr 13-Apr 19, 2026",
        "viewingEventUsers": 1152,
        "videoStartUsers": 1152,
        "videoStartEvents": 14853,
        "videoPlayUsers": 324,
        "videoPlayEvents": 4643,
        "videoCompleteUsers": 219,
        "videoCompleteEvents": 2980,
        "onDemandStartUsers": 1020,
        "onDemandStartEvents": 12876,
        "liveChannelViewers": 121,
        "livePlayEvents": 3952,
        "adRequestEvents": 10589,
        "adErrorEvents": 158
      },
      "previousWeek": {
        "range": "Jun 1-Jun 7, 2026",
        "viewingEventUsers": 2570,
        "videoStartUsers": 2486,
        "videoStartEvents": 20510,
        "videoPlayUsers": 264,
        "videoPlayEvents": 15366,
        "videoCompleteUsers": 255,
        "videoCompleteEvents": 3391,
        "onDemandStartUsers": 2354,
        "onDemandStartEvents": 18533,
        "liveChannelViewers": 132,
        "livePlayEvents": 3898,
        "adRequestEvents": 23365,
        "adErrorEvents": 112
      },
      "currentWeek": {
        "range": "Jun 8-Jun 14, 2026",
        "videoStartUsers": 2319,
        "videoStartEvents": 20195,
        "videoPlayUsers": 295,
        "videoPlayEvents": 12250,
        "videoCompleteUsers": 209,
        "videoCompleteEvents": 3855,
        "adRequestEvents": 25669,
        "adErrorEvents": 109,
        "viewingEventUsers": 2410,
        "onDemandStartUsers": 2354,
        "onDemandStartEvents": 18533,
        "liveChannelViewers": 132,
        "livePlayEvents": 3898,
        "sourceNote": "Live-channel and on-demand-start event breakdowns were not present in the Jun 8-14 GA4 events pull; those fields carry the prior complete week. video_start/play/complete and ad events are current. viewingEventUsers uses the 'play' event active users."
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
            "baseline": 5282,
            "launchBaseline": 8710,
            "previousWeek": 5282,
            "current": 5327,
            "deltaPct": 0.85195,
            "deltaVsLaunchPct": -38.840413,
            "deltaVsPreviousPct": 0.85195,
            "deltaType": "percent",
            "format": "number",
            "context": "GA4 active users excluding landing-page acquisition paths."
          },
          {
            "key": "platformSessions",
            "label": "Platform sessions",
            "baseline": 10925,
            "launchBaseline": 13323,
            "previousWeek": 10925,
            "current": 11486,
            "deltaPct": 5.135011,
            "deltaVsLaunchPct": -13.788186,
            "deltaVsPreviousPct": 5.135011,
            "deltaType": "percent",
            "format": "number",
            "context": "GA4 sessions excluding landing-page acquisition paths."
          },
          {
            "key": "viewingEventUsers",
            "label": "Viewing event users",
            "baseline": 2410,
            "launchBaseline": 1152,
            "previousWeek": 2410,
            "current": 1726,
            "deltaPct": -28.381743,
            "deltaVsLaunchPct": 49.826389,
            "deltaVsPreviousPct": -28.381743,
            "deltaType": "percent",
            "format": "number",
            "context": "Users who triggered on-demand video_start or Live play events."
          },
          {
            "key": "totalEngagementHours",
            "label": "Total engaged hours",
            "baseline": 4792.675,
            "launchBaseline": 3652.9975,
            "previousWeek": 4792.675,
            "current": 4879.472222,
            "deltaPct": 1.811039,
            "deltaVsLaunchPct": 33.574475,
            "deltaVsPreviousPct": 1.811039,
            "deltaType": "percent",
            "format": "number",
            "context": "Total GA4 engaged time (property 497892271) for Jun 22-Jun 28, 2026, converted to hours - refreshed this run and UP +1.8% vs Jun 15-21. Engagement DEPTH / time-spent improved; GA4's engaged-session RATE looks down only because of an isolated Sunday Jun 28 classification anomaly, so time spent is the more reliable attention signal."
          },
          {
            "key": "avgEngagedMinutesPerUser",
            "label": "Avg time per user",
            "baseline": 48.938138,
            "launchBaseline": 25.164161882893225,
            "previousWeek": 48.938138,
            "current": 49.445758,
            "deltaPct": 1.037269,
            "deltaVsLaunchPct": 96.492767,
            "deltaVsPreviousPct": 1.037269,
            "deltaType": "minutes",
            "format": "minutes",
            "context": "Total GA4 engaged time (Jun 22-Jun 28, 2026, property 497892271) divided by active users, excluding landing-page paths - refreshed this run and UP +1.0% vs Jun 15-21. Time-per-user rose even as the GA4 engaged-session rate dipped on the Jun 28 anomaly."
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
            "baseline": 744,
            "launchBaseline": 1045,
            "previousWeek": 744,
            "current": 594,
            "deltaPct": -20.16129,
            "deltaVsLaunchPct": -43.157895,
            "deltaVsPreviousPct": -20.16129,
            "deltaType": "percent",
            "format": "number",
            "context": "Users reaching pages with “landing” in the path."
          },
          {
            "key": "devicesPageUsers",
            "label": "Devices-page users",
            "baseline": 131,
            "launchBaseline": 2028,
            "previousWeek": 131,
            "current": 60,
            "deltaPct": -54.198473,
            "deltaVsLaunchPct": -97.04142,
            "deltaVsPreviousPct": -54.198473,
            "deltaType": "percent",
            "format": "number",
            "context": "Users reaching pages with “devices” in the path."
          },
          {
            "key": "paidSocialUsers",
            "label": "Paid social users",
            "baseline": 2421,
            "launchBaseline": 4441,
            "previousWeek": 2421,
            "current": 2421,
            "deltaPct": 0.0,
            "deltaVsLaunchPct": -45.485251,
            "deltaVsPreviousPct": 0.0,
            "deltaType": "percent",
            "format": "number",
            "context": "Users from GA4 source/medium values containing Facebook, Instagram, or Meta. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)"
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
            "baseline": 5635,
            "launchBaseline": 1547,
            "previousWeek": 5635,
            "current": 5635,
            "deltaPct": 0.0,
            "deltaVsLaunchPct": 264.253394,
            "deltaVsPreviousPct": 0.0,
            "deltaType": "percent",
            "format": "number",
            "context": "People using the Apple/iOS or Android app streams; Apple TV is not yet split from the Apple/iOS stream. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)",
            "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run."
          },
          {
            "key": "appSessions",
            "label": "App stream sessions",
            "baseline": 8832,
            "launchBaseline": 2889,
            "previousWeek": 8832,
            "current": 8832,
            "deltaPct": 0.0,
            "deltaVsLaunchPct": 205.711319,
            "deltaVsPreviousPct": 0.0,
            "deltaType": "percent",
            "format": "number",
            "context": "GA4 sessions on the Apple/iOS and Android app streams. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)",
            "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run."
          },
          {
            "key": "appEngagementRate",
            "label": "App stream engagement rate",
            "baseline": 78.53266767961797,
            "launchBaseline": 59.70126848307439,
            "previousWeek": 78.53266767961797,
            "current": 78.53266767961797,
            "deltaPct": 0.0,
            "deltaVsLaunchPct": 31.542712,
            "deltaVsPreviousPct": 0.0,
            "deltaType": "points",
            "format": "percent",
            "context": "Engaged app-stream sessions divided by app-stream sessions. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)",
            "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run."
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
            "baseline": 2410,
            "launchBaseline": 1152,
            "previousWeek": 2410,
            "current": 1726,
            "deltaPct": -28.381743,
            "deltaVsLaunchPct": 49.826389,
            "deltaVsPreviousPct": -28.381743,
            "deltaType": "percent",
            "format": "number",
            "context": "Users who triggered on-demand video_start or Live play events."
          },
          {
            "key": "onDemandStartUsers",
            "label": "On-demand start users",
            "baseline": 2354,
            "launchBaseline": 1020,
            "previousWeek": 2354,
            "current": 2354,
            "deltaPct": 0.0,
            "deltaVsLaunchPct": 130.784314,
            "deltaVsPreviousPct": 0.0,
            "deltaType": "percent",
            "format": "number",
            "context": "Users who triggered video_start outside the Live screen. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)"
          },
          {
            "key": "liveChannelViewers",
            "label": "Live channel viewers",
            "baseline": 132,
            "launchBaseline": 121,
            "previousWeek": 132,
            "current": 132,
            "deltaPct": 0.0,
            "deltaVsLaunchPct": 9.090909,
            "deltaVsPreviousPct": 0.0,
            "deltaType": "percent",
            "format": "number",
            "context": "Users who triggered a Live play event. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)"
          },
          {
            "key": "videoCompleteUsers",
            "label": "Video complete users",
            "baseline": 209,
            "launchBaseline": 219,
            "previousWeek": 209,
            "current": 222,
            "deltaPct": 6.220096,
            "deltaVsLaunchPct": 1.369863,
            "deltaVsPreviousPct": 6.220096,
            "deltaType": "percent",
            "format": "number",
            "context": "Users who triggered video_complete."
          },
          {
            "key": "livePlayEvents",
            "label": "Live play events",
            "baseline": 3898,
            "launchBaseline": 3952,
            "previousWeek": 3898,
            "current": 3898,
            "deltaPct": 0.0,
            "deltaVsLaunchPct": -1.366397,
            "deltaVsPreviousPct": 0.0,
            "deltaType": "percent",
            "format": "number",
            "context": "Total Live play events, not unique users. (Last-good Jun 8-14; not refreshed this run — no duration/stream/live source in this scheduled pull.)"
          },
          {
            "key": "adRequestEvents",
            "label": "Ad request events",
            "baseline": 25669,
            "launchBaseline": 10589,
            "previousWeek": 25669,
            "current": 26144,
            "deltaPct": 1.850481,
            "deltaVsLaunchPct": 146.897724,
            "deltaVsPreviousPct": 1.850481,
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
            "baseline": 48.938138,
            "launchBaseline": 25.164161882893225,
            "previousWeek": 48.938138,
            "current": 49.445758,
            "deltaPct": 1.037269,
            "deltaVsLaunchPct": 96.492767,
            "deltaVsPreviousPct": 1.037269,
            "deltaType": "minutes",
            "format": "minutes",
            "context": "Total GA4 engaged time (Jun 22-Jun 28, 2026, property 497892271) divided by active users, excluding landing-page paths - refreshed this run and UP +1.0% vs Jun 15-21. Time-per-user rose even as the GA4 engaged-session rate dipped on the Jun 28 anomaly."
          },
          {
            "key": "avgEngagedMinutesPerSession",
            "label": "Avg time per session",
            "baseline": 24.332417,
            "launchBaseline": 16.45123845980635,
            "previousWeek": 24.332417,
            "current": 23.650403,
            "deltaPct": -2.802903,
            "deltaVsLaunchPct": 43.760624,
            "deltaVsPreviousPct": -2.802903,
            "deltaType": "minutes",
            "format": "minutes",
            "context": "Total GA4 engaged time (Jun 22-Jun 28, 2026) divided by sessions - refreshed this run. Down slightly (~-2.8%) only because sessions grew faster (+4.7%) than total engaged time (+1.8%); total time and time-per-user still improved. The GA4 engaged-session rate is separately affected by the Jun 28 classification anomaly, not a real retention drop."
          },
          {
            "key": "totalEngagementHours",
            "label": "Total engaged hours",
            "baseline": 4792.675,
            "launchBaseline": 3652.9975,
            "previousWeek": 4792.675,
            "current": 4879.472222,
            "deltaPct": 1.811039,
            "deltaVsLaunchPct": 33.574475,
            "deltaVsPreviousPct": 1.811039,
            "deltaType": "percent",
            "format": "number",
            "context": "Total GA4 engaged time (property 497892271) for Jun 22-Jun 28, 2026, converted to hours - refreshed this run and UP +1.8% vs Jun 15-21. Engagement DEPTH / time-spent improved; GA4's engaged-session RATE looks down only because of an isolated Sunday Jun 28 classification anomaly, so time spent is the more reliable attention signal."
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
        "platformActiveUsers": 8710,
        "platformSessions": 13323,
        "platformEngagedSessions": 7954,
        "platformEventCount": 701671,
        "platformEngagementRate": 59.70126848307439,
        "platformEngagementSeconds": 13150791,
        "platformEngagementHours": 3652.9975,
        "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition."
      },
      "previousWeek": {
        "range": "Jun 15-Jun 21, 2026",
        "platformActiveUsers": 5282,
        "platformSessions": 10925,
        "platformEngagedSessions": 8516,
        "platformEventCount": 967663,
        "platformEngagementRate": 77.949657,
        "platformEngagementSeconds": 17253630,
        "platformEngagementHours": 4792.675,
        "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition. Platform audience = property-wide GA4 (property 497892271) minus /landing acquisition paths. NOTE: landing offset is last-good/estimated (landing breakdown not re-pulled this run; top_pages export was a truncated preview). Engaged-time uses property-wide userEngagementDuration (fresh this run); landing-page engaged time is not separable, so platform engaged seconds/hours are not landing-adjusted."
      },
      "currentWeek": {
        "range": "Jun 22-Jun 28, 2026",
        "platformActiveUsers": 5327,
        "platformSessions": 11486,
        "platformEngagedSessions": 7696,
        "platformEventCount": 993242,
        "platformEngagementRate": 67.003308,
        "platformEngagementSeconds": 17566100,
        "platformEngagementHours": 4879.472222,
        "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition. Platform audience = property-wide GA4 (property 497892271) minus /landing acquisition paths. NOTE: landing offset is last-good/estimated (landing breakdown not re-pulled this run; top_pages export was a truncated preview). Engaged-time uses property-wide userEngagementDuration (fresh this run); landing-page engaged time is not separable, so platform engaged seconds/hours are not landing-adjusted.",
        "methodologyNote": "Excludes landing-page acquisition paths. Platform audience = property-wide GA4 (property 497892271) minus /landing acquisition paths.",
        "engagementRateCaveat": "Sunday Jun 28 shows a low engagementRate/engagedSessions classification despite high users/sessions/views/time. Use engagement duration, app_time, user_engagement and play/video events as the primary attention signals; engagedSessions/engagementRate this week are potentially inconsistent and should NOT be read as a real retention collapse."
      }
    },
    "weeklyTrend": [
      {
        "date": "Jun 22",
        "rawDate": "20260622",
        "activeUsers": 1103,
        "newUsers": null,
        "sessions": 1787,
        "engagedSessions": 1409,
        "screenPageViews": 4613,
        "eventCount": 146808,
        "engagementRate": 78.84722999440403
      },
      {
        "date": "Jun 23",
        "rawDate": "20260623",
        "activeUsers": 1011,
        "newUsers": null,
        "sessions": 1674,
        "engagedSessions": 1276,
        "screenPageViews": 4254,
        "eventCount": 136468,
        "engagementRate": 76.22461170848268
      },
      {
        "date": "Jun 24",
        "rawDate": "20260624",
        "activeUsers": 1016,
        "newUsers": null,
        "sessions": 1657,
        "engagedSessions": 1322,
        "screenPageViews": 4207,
        "eventCount": 126928,
        "engagementRate": 79.78273989136994
      },
      {
        "date": "Jun 25",
        "rawDate": "20260625",
        "activeUsers": 966,
        "newUsers": null,
        "sessions": 1555,
        "engagedSessions": 1217,
        "screenPageViews": 4347,
        "eventCount": 138913,
        "engagementRate": 78.2636655948553
      },
      {
        "date": "Jun 26",
        "rawDate": "20260626",
        "activeUsers": 940,
        "newUsers": null,
        "sessions": 1604,
        "engagedSessions": 1263,
        "screenPageViews": 4516,
        "eventCount": 144240,
        "engagementRate": 78.74064837905237
      },
      {
        "date": "Jun 27",
        "rawDate": "20260627",
        "activeUsers": 1163,
        "newUsers": null,
        "sessions": 1882,
        "engagedSessions": 1433,
        "screenPageViews": 4652,
        "eventCount": 154508,
        "engagementRate": 76.1424017003188
      },
      {
        "date": "Jun 28",
        "rawDate": "20260628",
        "activeUsers": 1337,
        "newUsers": null,
        "sessions": 2339,
        "engagedSessions": 702,
        "screenPageViews": 7386,
        "eventCount": 147386,
        "engagementRate": 30.012825994014534
      }
    ],
    "monthlyTrend": [
      {
        "date": "May 30",
        "rawDate": "20260530",
        "activeUsers": 1415,
        "newUsers": null,
        "sessions": 2060,
        "engagedSessions": 1656,
        "screenPageViews": 4310,
        "eventCount": 140484,
        "engagementRate": 80.3883495145631
      },
      {
        "date": "May 31",
        "rawDate": "20260531",
        "activeUsers": 1481,
        "newUsers": null,
        "sessions": 2150,
        "engagedSessions": 1744,
        "screenPageViews": 4223,
        "eventCount": 149858,
        "engagementRate": 81.11627906976744
      },
      {
        "date": "Jun 1",
        "rawDate": "20260601",
        "activeUsers": 1420,
        "newUsers": null,
        "sessions": 2092,
        "engagedSessions": 1667,
        "screenPageViews": 3939,
        "eventCount": 146212,
        "engagementRate": 79.68451242829828
      },
      {
        "date": "Jun 2",
        "rawDate": "20260602",
        "activeUsers": 1334,
        "newUsers": null,
        "sessions": 1980,
        "engagedSessions": 1567,
        "screenPageViews": 3656,
        "eventCount": 130647,
        "engagementRate": 79.14141414141415
      },
      {
        "date": "Jun 3",
        "rawDate": "20260603",
        "activeUsers": 1307,
        "newUsers": null,
        "sessions": 1985,
        "engagedSessions": 1591,
        "screenPageViews": 3991,
        "eventCount": 130258,
        "engagementRate": 80.15113350125944
      },
      {
        "date": "Jun 4",
        "rawDate": "20260604",
        "activeUsers": 1312,
        "newUsers": null,
        "sessions": 2024,
        "engagedSessions": 1592,
        "screenPageViews": 4261,
        "eventCount": 129207,
        "engagementRate": 78.65612648221344
      },
      {
        "date": "Jun 5",
        "rawDate": "20260605",
        "activeUsers": 1278,
        "newUsers": null,
        "sessions": 1981,
        "engagedSessions": 1565,
        "screenPageViews": 4326,
        "eventCount": 128435,
        "engagementRate": 79.0005047955578
      },
      {
        "date": "Jun 6",
        "rawDate": "20260606",
        "activeUsers": 1209,
        "newUsers": null,
        "sessions": 1860,
        "engagedSessions": 1493,
        "screenPageViews": 4301,
        "eventCount": 146249,
        "engagementRate": 80.26881720430109
      },
      {
        "date": "Jun 7",
        "rawDate": "20260607",
        "activeUsers": 1508,
        "newUsers": null,
        "sessions": 2272,
        "engagedSessions": 1718,
        "screenPageViews": 4212,
        "eventCount": 154841,
        "engagementRate": 75.61619718309859
      },
      {
        "date": "Jun 8",
        "rawDate": "20260608",
        "activeUsers": 1361,
        "newUsers": null,
        "sessions": 2103,
        "engagedSessions": 1672,
        "screenPageViews": 3996,
        "eventCount": 143022,
        "engagementRate": 79.50546837850689
      },
      {
        "date": "Jun 9",
        "rawDate": "20260609",
        "activeUsers": 1408,
        "newUsers": null,
        "sessions": 2136,
        "engagedSessions": 1712,
        "screenPageViews": 4732,
        "eventCount": 142331,
        "engagementRate": 80.14981273408239
      },
      {
        "date": "Jun 10",
        "rawDate": "20260610",
        "activeUsers": 1418,
        "newUsers": null,
        "sessions": 2176,
        "engagedSessions": 1704,
        "screenPageViews": 4951,
        "eventCount": 142511,
        "engagementRate": 78.30882352941177
      },
      {
        "date": "Jun 11",
        "rawDate": "20260611",
        "activeUsers": 1366,
        "newUsers": null,
        "sessions": 2109,
        "engagedSessions": 1658,
        "screenPageViews": 4584,
        "eventCount": 144061,
        "engagementRate": 78.61545756282598
      },
      {
        "date": "Jun 12",
        "rawDate": "20260612",
        "activeUsers": 1278,
        "newUsers": null,
        "sessions": 1964,
        "engagedSessions": 1522,
        "screenPageViews": 4186,
        "eventCount": 143065,
        "engagementRate": 77.49490835030551
      },
      {
        "date": "Jun 13",
        "rawDate": "20260613",
        "activeUsers": 1102,
        "newUsers": null,
        "sessions": 1794,
        "engagedSessions": 1356,
        "screenPageViews": 4338,
        "eventCount": 143051,
        "engagementRate": 75.58528428093646
      },
      {
        "date": "Jun 14",
        "rawDate": "20260614",
        "activeUsers": 1117,
        "newUsers": null,
        "sessions": 1788,
        "engagedSessions": 1414,
        "screenPageViews": 4532,
        "eventCount": 143718,
        "engagementRate": 79.082774049217
      },
      {
        "date": "Jun 15",
        "rawDate": "20260615",
        "activeUsers": 1090,
        "newUsers": null,
        "sessions": 1753,
        "engagedSessions": 1344,
        "screenPageViews": 4224,
        "eventCount": 140277,
        "engagementRate": 76.6685681688534
      },
      {
        "date": "Jun 16",
        "rawDate": "20260616",
        "activeUsers": 1037,
        "newUsers": null,
        "sessions": 1707,
        "engagedSessions": 1306,
        "screenPageViews": 4185,
        "eventCount": 138022,
        "engagementRate": 76.50849443468073
      },
      {
        "date": "Jun 17",
        "rawDate": "20260617",
        "activeUsers": 994,
        "newUsers": null,
        "sessions": 1609,
        "engagedSessions": 1262,
        "screenPageViews": 4225,
        "eventCount": 140425,
        "engagementRate": 78.43380981976384
      },
      {
        "date": "Jun 18",
        "rawDate": "20260618",
        "activeUsers": 1082,
        "newUsers": null,
        "sessions": 1721,
        "engagedSessions": 1364,
        "screenPageViews": 4359,
        "eventCount": 132981,
        "engagementRate": 79.25624636839046
      },
      {
        "date": "Jun 19",
        "rawDate": "20260619",
        "activeUsers": 1076,
        "newUsers": null,
        "sessions": 1737,
        "engagedSessions": 1368,
        "screenPageViews": 4222,
        "eventCount": 136312,
        "engagementRate": 78.75647668393782
      },
      {
        "date": "Jun 20",
        "rawDate": "20260620",
        "activeUsers": 1014,
        "newUsers": null,
        "sessions": 1640,
        "engagedSessions": 1299,
        "screenPageViews": 4350,
        "eventCount": 136527,
        "engagementRate": 79.20731707317074
      },
      {
        "date": "Jun 21",
        "rawDate": "20260621",
        "activeUsers": 1094,
        "newUsers": null,
        "sessions": 1753,
        "engagedSessions": 1403,
        "screenPageViews": 4285,
        "eventCount": 145128,
        "engagementRate": 80.0342270393611
      },
      {
        "date": "Jun 22",
        "rawDate": "20260622",
        "activeUsers": 1103,
        "newUsers": null,
        "sessions": 1787,
        "engagedSessions": 1409,
        "screenPageViews": 4613,
        "eventCount": 146808,
        "engagementRate": 78.84722999440403
      },
      {
        "date": "Jun 23",
        "rawDate": "20260623",
        "activeUsers": 1011,
        "newUsers": null,
        "sessions": 1674,
        "engagedSessions": 1276,
        "screenPageViews": 4254,
        "eventCount": 136468,
        "engagementRate": 76.22461170848268
      },
      {
        "date": "Jun 24",
        "rawDate": "20260624",
        "activeUsers": 1016,
        "newUsers": null,
        "sessions": 1657,
        "engagedSessions": 1322,
        "screenPageViews": 4207,
        "eventCount": 126928,
        "engagementRate": 79.78273989136994
      },
      {
        "date": "Jun 25",
        "rawDate": "20260625",
        "activeUsers": 966,
        "newUsers": null,
        "sessions": 1555,
        "engagedSessions": 1217,
        "screenPageViews": 4347,
        "eventCount": 138913,
        "engagementRate": 78.2636655948553
      },
      {
        "date": "Jun 26",
        "rawDate": "20260626",
        "activeUsers": 940,
        "newUsers": null,
        "sessions": 1604,
        "engagedSessions": 1263,
        "screenPageViews": 4516,
        "eventCount": 144240,
        "engagementRate": 78.74064837905237
      },
      {
        "date": "Jun 27",
        "rawDate": "20260627",
        "activeUsers": 1163,
        "newUsers": null,
        "sessions": 1882,
        "engagedSessions": 1433,
        "screenPageViews": 4652,
        "eventCount": 154508,
        "engagementRate": 76.1424017003188
      },
      {
        "date": "Jun 28",
        "rawDate": "20260628",
        "activeUsers": 1337,
        "newUsers": null,
        "sessions": 2339,
        "engagedSessions": 702,
        "screenPageViews": 7386,
        "eventCount": 147386,
        "engagementRate": 30.012825994014534
      }
    ],
    "appSectionUsage": {
      "period": "Jun 8-Jun 14, 2026",
      "metric": "GA4 active users and engaged time by inferred app section",
      "rows": [
        {
          "section": "Home",
          "activeUsers": 1961,
          "sessions": 6650,
          "engagedSessions": 6328,
          "screenPageViews": 10939,
          "eventCount": 41403,
          "totalEngagementSeconds": 960603,
          "engagementRate": 95.15789473684211,
          "totalEngagementHours": 266.83416666666665,
          "avgEngagedMinutesPerUser": 8.164227434982152,
          "avgEngagedMinutesPerSession": 2.4075263157894735,
          "sharePct": 75.51020408163265
        },
        {
          "section": "En Espanol",
          "activeUsers": 10,
          "sessions": 11,
          "engagedSessions": 10,
          "screenPageViews": 62,
          "eventCount": 102,
          "totalEngagementSeconds": 415,
          "engagementRate": 90.9090909090909,
          "totalEngagementHours": 0.11527777777777778,
          "avgEngagedMinutesPerUser": 0.6916666666666667,
          "avgEngagedMinutesPerSession": 0.6287878787878788,
          "sharePct": 0.3850596842510589
        },
        {
          "section": "Live TV",
          "activeUsers": 528,
          "sessions": 1995,
          "engagedSessions": 1866,
          "screenPageViews": 3779,
          "eventCount": 72287,
          "totalEngagementSeconds": 4885904,
          "engagementRate": 93.53383458646617,
          "totalEngagementHours": 1357.1955555555555,
          "avgEngagedMinutesPerUser": 154.22676767676768,
          "avgEngagedMinutesPerSession": 40.81791144527987,
          "sharePct": 20.33115132845591
        },
        {
          "section": "My Stuff",
          "activeUsers": 55,
          "sessions": 128,
          "engagedSessions": 127,
          "screenPageViews": 329,
          "eventCount": 338,
          "totalEngagementSeconds": 918,
          "engagementRate": 99.21875,
          "totalEngagementHours": 0.255,
          "avgEngagedMinutesPerUser": 0.2781818181818182,
          "avgEngagedMinutesPerSession": 0.11953125,
          "sharePct": 2.117828263380824
        },
        {
          "section": "Settings",
          "activeUsers": 43,
          "sessions": 81,
          "engagedSessions": 80,
          "screenPageViews": 194,
          "eventCount": 248,
          "totalEngagementSeconds": 1058,
          "engagementRate": 98.76543209876543,
          "totalEngagementHours": 0.29388888888888887,
          "avgEngagedMinutesPerUser": 0.41007751937984493,
          "avgEngagedMinutesPerSession": 0.2176954732510288,
          "sharePct": 1.6557566422795533
        }
      ],
      "note": "Section rows are inferred from GA4 screen/path labels and may double-count users who visit multiple sections. They should be used for directional section interest, not as a deduped total audience count.",
      "sourceNote": "Section rollup carried from the most recent app-screen pull; per-section app rows were not refreshed this run."
    },
    "rokuAppEngagement": {
      "sourceLabel": "Roku App Engagement email report",
      "sourceDetail": "Roku app engagement is parsed from the latest Roku App Engagement PDF emailed from bdp_noreply@data.roku.com. It measures Roku app/channel-store usage and is shown separately from GA4 app/web metrics.",
      "reportPeriod": "Jun 21-Jun 27, 2026",
      "rawReportPeriod": "Jun 21-Jun 27, 2026 (generated Jun 29)",
      "channelStoreCode": "us",
      "reportGenerated": "June 29, 2026 at 7:13 AM PDT",
      "dateLabels": [
        "Sun Jun 21",
        "Mon Jun 22",
        "Tue Jun 23",
        "Wed Jun 24",
        "Thu Jun 25",
        "Fri Jun 26",
        "Sat Jun 27"
      ],
      "metrics": {
        "newInstalls": 225,
        "uninstalls": 159,
        "netInstalls": 66,
        "cumulativeInstalls": 288977,
        "avgDailyViewers": 265,
        "avgMinPerViewer": 78.45,
        "totalHoursStreamed": 2426
      },
      "reportEmailDate": "2026-06-29T14:13:00+00:00",
      "attachmentFilename": "roku_App_Engagement_2026-06-29T0713.pdf",
      "note": "Roku TRC Live Dashboard reports are intentionally excluded from app/platform usage to avoid mixing Roku Channel live-stream consumption with ElectricNOW app engagement.",
      "status": "CURRENT_PARSED",
      "staleNote": "Jun 29, 2026 Roku App Engagement report (covers Jun 21-Jun 27, 2026) parsed from the refresh manifest. TRC / Viewership Summary (live) reports remain excluded from app/platform usage.",
      "lastSuccessfulReportPeriod": "Jun 21-Jun 27, 2026"
    },
    "visitSummary": {
      "source": "GA4 sessions on tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths.",
      "weekly": {
        "label": "Weekly visits",
        "range": "Jun 22-Jun 28, 2026",
        "sessions": 11486,
        "activeUsers": 5327,
        "engagedSessions": 7696,
        "previousRange": "Jun 15-Jun 21, 2026",
        "previousSessions": 10925,
        "deltaVsPreviousPct": 5.135011,
        "comparisonLabel": "vs previous 7 days"
      },
      "monthly": {
        "label": "Monthly visits",
        "range": "May 18-Jun 14, 2026",
        "sessions": 57678,
        "activeUsers": 37956,
        "engagedSessions": 45928,
        "previousRange": "Apr 20-May 17, 2026",
        "previousSessions": 56406,
        "deltaVsPreviousPct": 2.255079246888629,
        "comparisonLabel": "latest 28 days"
      },
      "note": "Visits are GA4 sessions, not unique people. Weekly visits use the current complete reporting week (Jun 22-Jun 28, 2026) and compare against the previous 7 complete days (Jun 15-21); monthly visits use the latest complete 28 days. Landing-page traffic remains acquisition-only and is not included here."
    },
    "manualAppleSalesUpdate": {
      "updatedAt": "2026-07-02T12:00:00+00:00",
      "source": "manual_apple_sales.json updated Jul 2, 2026 with Jun 26/27/28 Purchase HD 15 ($14.99 each) and Jun 30 Purchase HD 3 ($2.99); preserved across refresh",
      "totalManualAppleEntries": 15,
      "note": "15 manual entries; Jul 2, 2026 adds Jun 26, Jun 27, Jun 28 (Purchase HD 15 $14.99 each) and Jun 30 (Purchase HD 3 $2.99), from the Jun 25-Jul 1, 2026 Apple Connect screenshots (total $47.96 gross / $33.56 est net)."
    },
    "googleAdsSummary": {
      "source": "Google Ads connector",
      "accountId": "4342267711",
      "customerClientId": "4342267711",
      "accountName": "Electric Entertainment",
      "period": "Jun 1-Jun 7, 2026",
      "campaignName": "PCSM - ElectricNow App Promotion - Android",
      "campaignId": "23836266606",
      "campaignType": "MULTI_CHANNEL",
      "status": "STALE_RATE_LIMITED",
      "impressions": 10424,
      "clicks": 304,
      "ctrPct": 2.916346891788181,
      "cost": 66.47,
      "avgCpc": 0.21865670065789475,
      "conversions": 124.0,
      "allConversions": 235.0,
      "conversionRatePct": 40.78947368421053,
      "costPerConversion": 0.5360615887096775,
      "daily": [
        {
          "date": "2026-06-01",
          "device": "2026-06-01",
          "cost": 14.011478,
          "impressions": 2071,
          "clicks": 69,
          "conversions": 28.0,
          "allConversions": 56.0,
          "ctrPct": 3.3317238049251565,
          "avgCpc": 0.20306489855072465,
          "costPerConversion": 0.5004099285714286
        },
        {
          "date": "2026-06-02",
          "device": "2026-06-02",
          "cost": 17.030354,
          "impressions": 2515,
          "clicks": 70,
          "conversions": 30.0,
          "allConversions": 55.0,
          "ctrPct": 2.783300198807157,
          "avgCpc": 0.24329077142857142,
          "costPerConversion": 0.5676784666666667
        },
        {
          "date": "2026-06-03",
          "device": "2026-06-03",
          "cost": 16.340343,
          "impressions": 2704,
          "clicks": 87,
          "conversions": 29.0,
          "allConversions": 55.0,
          "ctrPct": 3.217455621301775,
          "avgCpc": 0.18782003448275864,
          "costPerConversion": 0.5634601034482759
        },
        {
          "date": "2026-06-04",
          "device": "2026-06-04",
          "cost": 16.226717999999998,
          "impressions": 2683,
          "clicks": 68,
          "conversions": 30.0,
          "allConversions": 59.0,
          "ctrPct": 2.5344763324636603,
          "avgCpc": 0.23862820588235292,
          "costPerConversion": 0.5408905999999999
        },
        {
          "date": "2026-06-05",
          "device": "2026-06-05",
          "cost": 2.862744,
          "impressions": 451,
          "clicks": 10,
          "conversions": 7.0,
          "allConversions": 10.0,
          "ctrPct": 2.2172949002217295,
          "avgCpc": 0.28627440000000004,
          "costPerConversion": 0.4089634285714286
        }
      ],
      "deviceBreakout": [
        {
          "date": "MOBILE",
          "device": "MOBILE",
          "cost": 54.282101999999995,
          "impressions": 8384,
          "clicks": 252,
          "conversions": 97.0,
          "allConversions": 189.0,
          "ctrPct": 3.0057251908396947,
          "avgCpc": 0.21540516666666665,
          "costPerConversion": 0.5596092989690721
        },
        {
          "date": "TABLET",
          "device": "TABLET",
          "cost": 12.156039000000002,
          "impressions": 2034,
          "clicks": 52,
          "conversions": 27.0,
          "allConversions": 46.0,
          "ctrPct": 2.55653883972468,
          "avgCpc": 0.2337699807692308,
          "costPerConversion": 0.45022366666666674
        },
        {
          "date": "CONNECTED_TV",
          "device": "CONNECTED_TV",
          "cost": 0.033496000000000005,
          "impressions": 6,
          "clicks": 0,
          "conversions": 0.0,
          "allConversions": 0.0,
          "ctrPct": 0.0,
          "avgCpc": null,
          "costPerConversion": null
        }
      ],
      "conversionActions": [
        {
          "campaign": "PCSM - ElectricNow App Promotion - Android",
          "conversionAction": "electricnow-4fbb4 - com.electric.now (Android) First open",
          "conversions": 124.0,
          "allConversions": 136.0
        },
        {
          "campaign": "PCSM - ElectricNow App Promotion - Android",
          "conversionAction": "Android installs (all other apps)",
          "conversions": 0.0,
          "allConversions": 99.0
        }
      ],
      "plainEnglish": "Google Ads produced 124 counted Android first-open conversions on $66.47 of spend, about $0.54 per conversion.",
      "dataFreshnessNote": "Google Ads connector was RATE_LIMITED (429 RESOURCE_EXHAUSTED, retry in ~737s) for the current complete week (Jun 22-Jun 28, 2026). Last-good figures are preserved, not zeroed.",
      "statusDetail": "429 RESOURCE_EXHAUSTED on the Jun 22-Jun 28 pull; no current-week rows retrieved. Source: google_ads_account_options_20260629.json.",
      "lastSuccessfulPull": "2026-06-11 14:40 PDT",
      "staleNote": "Jun 22-28 pull was rate-limited (429). Preserving last-good Google Ads values rather than zeroing. Needs a successful pull next run to restore current spend/conversions and a Meta-vs-Google comparison."
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
        "note": "Google Ads returned NO rows for the current complete week (Jun 15-21, 2026): the direct-customer report was connected but empty, and the manager/client retry was permission-denied. Last-good app-promotion figures are preserved (not zeroed). No fresh Google-vs-Meta cost-per-install comparison is possible this run.",
        "status": "stale"
      },
      "metaAds": {
        "period": "Jun 14-Jun 20, 2026",
        "spend": 1642.88,
        "impressions": 108731,
        "clicks": 5050,
        "ctrPct": 4.64,
        "downloads": 1,
        "costPerDownload": 0.0,
        "iosDownloads": 0,
        "androidDownloads": 1,
        "source": "Nathan / Forge One Meta email report",
        "note": "Meta spent $1,642.88 for Jun 14-Jun 20, 2026 (down ~47% vs the prior period) on a single now-iOS-only campaign (\"PCSM - ElectricNow App - iOS - June 2026\"). The report's platform download top-cards read ~0 (iOS 0 + Android 1), but the breakdown tables still attribute 1,174 app installs at about $1.40 each - so volume did NOT actually collapse; the top-card counters appear to have stopped populating. CPC improved to $0.28 (-33.1%) and link clicks were 5,050. Among larger age bands, 55-64 ($1.28/install) and 45-54 ($1.34) are most efficient; 25-34 ($2.03) and 18-24 ($5.60) are weakest. Time-period note: GA4 current is Jun 15-21 and this Meta report is Jun 14-20 - close but not identical, so treat this as an acquisition-efficiency read, not downstream viewing proof or true ROAS.",
        "reportedPlatformDownloads": 1,
        "metaAppInstallsFromBreakdown": 1174
      },
      "period": "Jun 11-Jun 17, 2026 for Meta email report; Google Ads STALE (last-good Jun 1-Jun 7, 2026, RESOURCE_EXHAUSTED rate limit)",
      "verdict": "acceptable but needs proof of viewing",
      "plainEnglish": "Paid acquisition verdict: efficiency signal only, not a viewing/ROAS proof this run. Meta (Jun 11-17) reported 987 platform downloads (iOS 277 + Android 710) on $1,968.57; spend and volume were down vs the prior period but CPC improved to $0.31, and Android stays cheaper than iOS ($0.98 vs $1.24). The breakdown tables show 1641 Meta app installs (separate attribution grain, not blended). Google Ads is stale (RESOURCE_EXHAUSTED); last-good Jun 1-7 = 124 Android first-open conversions at ~$0.54, preserved not zeroed. NOTE the GA4 (Jun 8-14) vs Meta (Jun 11-17) window mismatch: do NOT over-claim that paid installs became viewing users this run.",
      "recommendations": [
        "Separate iOS and Android budgets so cheaper Android volume does not hide more expensive iOS acquisition.",
        "Shift budget toward lower-cost audiences only when GA4 shows those cohorts also become viewing users.",
        "Refresh creative with show-specific hooks for The Ark, Leverage, Almost Paradise, The Librarians, and The Poly Couple.",
        "Ask the developer to pass campaign/ad identifiers into GA4 first-open and viewing events so install-to-view quality can be measured directly.",
        "Do not call this true ROAS until ad-server revenue and complete app-store revenue are connected."
      ]
    },
    "metaAdsSummary": {
      "source": "Meta Ads (Forge One / nathan@pcsocialmedia.com twice-weekly email report)",
      "reportType": "Meta Ads Performance Report (Meta-only, used to avoid double-counting Google Ads which is pulled via connector)",
      "emailFrom": "nathan@pcsocialmedia.com",
      "emailTo": "DeanD@electricentertainment.com",
      "emailSubject": "ElectricNow | Meta Ads Performance Report (2026-06-21 to 2026-06-27)",
      "emailDate": "2026-06-28T15:43:36+00:00",
      "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAPDwhikAAA=",
      "reportLink": "https://app.forgeonemarketing.com/r/68d531a3-f3bc-46a3-af89-86682198fb1b",
      "reportCadence": "Twice weekly (Sundays and Thursdays at 6am PST/PDT), each report covers Last 7 days",
      "period": "Jun 21-Jun 27, 2026",
      "periodStart": "2026-06-21",
      "periodEnd": "2026-06-27",
      "comparison": "vs prior Meta report period (Jun 14-Jun 20, 2026)",
      "spend": 1749.69,
      "impressions": 113119,
      "linkClicks": 3907,
      "costPerClick": 0.44,
      "iosDownloads": 1157,
      "androidDownloads": 0,
      "totalDownloads": 1157,
      "costPerIosDownload": 1.51,
      "costPerAndroidDownload": null,
      "costPerDownload": 1.51,
      "ctrPct": 3.4539,
      "deltas": {
        "linkClicksPct": -22.0,
        "costPerClickPct": 59.5,
        "costPerIosDownloadPct": 11.1,
        "comparisonNote": "Deltas vs prior Meta report period (Jun 14-Jun 20, 2026)."
      },
      "campaigns": [
        {
          "campaign": "PCSM - ElectricNow App - iOS - June 2026",
          "spend": 1749.69,
          "appInstalls": 1157,
          "costPerAppInstall": 1.51
        }
      ],
      "genderBreakdown": [
        {
          "gender": "male",
          "spend": 1202.33,
          "costPerAppInstall": 1.52,
          "appInstalls": 789
        },
        {
          "gender": "female",
          "spend": 537.07,
          "costPerAppInstall": 1.47,
          "appInstalls": 365
        },
        {
          "gender": "unknown",
          "spend": 10.29,
          "costPerAppInstall": 3.43,
          "appInstalls": 3
        }
      ],
      "ageBreakdown": [
        {
          "ageGroup": "55-64",
          "spend": 587.21,
          "costPerAppInstall": 1.41,
          "appInstalls": 415
        },
        {
          "ageGroup": "65+",
          "spend": 580.44,
          "costPerAppInstall": 1.41,
          "appInstalls": 413
        },
        {
          "ageGroup": "45-54",
          "spend": 335.21,
          "costPerAppInstall": 1.64,
          "appInstalls": 204
        },
        {
          "ageGroup": "35-44",
          "spend": 160.9,
          "costPerAppInstall": 1.55,
          "appInstalls": 104
        },
        {
          "ageGroup": "25-34",
          "spend": 69.5,
          "costPerAppInstall": 3.86,
          "appInstalls": 18
        },
        {
          "ageGroup": "18-24",
          "spend": 16.43,
          "costPerAppInstall": 5.48,
          "appInstalls": 3
        }
      ],
      "plainEnglish": "Meta's latest numeric report covers Jun 21-Jun 27, 2026: $1,749.69 spent on a single iOS-only campaign (PCSM - ElectricNow App - iOS - June 2026) drove 1,157 iOS app installs at $1.51 each on 113,119 impressions and 3,907 link clicks (CPC $0.44). Versus the prior report period link clicks fell ~22%, CPC rose ~59.5%, and cost per iOS download rose ~11.1% - acquisition got more expensive even as install volume held. Targeting skews older and efficient: 55-64 ($1.41/install) and 65+ ($1.41) are the most efficient and largest bands, while 18-24 ($5.48) and 25-34 ($3.86) are weakest. Female cost per install ($1.47) is slightly lower than male ($1.52), but male volume is larger (789 vs 365 installs). These are free installs, not paid sales.",
      "paidAcquisitionInterpretation": "PAID ACQUISITION ASSESSMENT (Meta, Jun 21-Jun 27, 2026). Is the platform growing? Modestly - GA4 traffic was roughly flat to slightly up (active users +0.8%, sessions +4.7%, screen/page views +13.8%, total engagement time +1.8%) while Meta kept buying ~1,157 iOS installs/week. Are costs acceptable? Mixed and slightly WORSENING: spend $1,749.69, CPC $0.44 (up ~59.5%), cost per iOS install $1.51 (up ~11.1%), link clicks down ~22%. Is targeting narrowing? Yes - toward older users (55-64 and 65+ are the most efficient and highest-volume bands at $1.41/install), away from 18-34 which is expensive ($3.86-$5.48). Which channel is stronger? Cannot compare to Google Ads this run (Google Ads RATE_LIMITED / stale, not zeroed). Do paid users convert to viewing/time/purchases? UNPROVEN: installs are free and we have no install->activation->sale join; visible sales did tick up to 60/$1,111.40 but cannot be attributed to Meta. VERDICT: promising but still needs proof of viewing - paid spend is reliably buying iOS installs at a rising but still-reasonable cost, yet there is no evidence those installs become viewers or buyers. NEXT TESTS: (1) add an install->first-play activation event so installs can be tied to viewing; (2) hold/scale the 55+ bands and cut 18-24; (3) test female-skewed creative given slightly lower female CPI; (4) compare Meta vs Google once the Google Ads pull succeeds; (5) track 7-day post-install retention and first purchase. We do NOT claim true ROAS (ad-server revenue is not attributed). Distinguish paid-campaign impressions (113,119 Meta ad impressions) from in-app ad impressions (GA4 ads_impression, 42,200 this week) - they are different things.",
      "threadId": "AAQkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOAAQAIBt6Dqvj9JKvIVO2AKlKos=",
      "reportedPlatformDownloads": 1157,
      "blendedCostPerReportedDownload": 1.51,
      "metaAppInstallsFromBreakdown": 1157,
      "downloadGrainNote": "This period the report top-card platform-download counter is populated again: iOS installs 1,157 (Android 0), matching the breakdown tables (gender installs 789+365+3 = 1,157; age installs 415+413+204+104+18+3 = 1,157). The prior-period top-card ~0 anomaly has resolved. Paid acquisition buys FREE app installs, not paid downloads; these installs are a distinct grain from visible platform sales and from in-app ad impressions."
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
    "manualAppleDownloads": {
      "sourceLabel": "Manual Apple App Store Connect snapshot",
      "sourceDetail": "User-provided App Store Connect screenshots for Free iOS/watchOS/tvOS downloads. This is app download activity, not paid sales and not GA4 active users.",
      "capturedAt": "2026-07-02 09:00 PDT",
      "enteredAt": "2026-07-02 09:00 PDT",
      "uploadedAttachments": [],
      "product": "ElectricNOW",
      "platform": "Free iOS/watchOS/tvOS",
      "period": "Jun 25-Jul 1, 2026",
      "start": "2026-06-25",
      "end": "2026-07-01",
      "downloads": 1063,
      "displayDownloads": "1,063",
      "dailyAverage": 152,
      "daily": [
        {
          "date": "2026-06-25",
          "label": "June 25, 2026",
          "downloads": 182
        },
        {
          "date": "2026-06-26",
          "label": "June 26, 2026",
          "downloads": 171
        },
        {
          "date": "2026-06-27",
          "label": "June 27, 2026",
          "downloads": 207
        },
        {
          "date": "2026-06-28",
          "label": "June 28, 2026",
          "downloads": 211
        },
        {
          "date": "2026-06-29",
          "label": "June 29, 2026",
          "downloads": 180
        },
        {
          "date": "2026-06-30",
          "label": "June 30, 2026",
          "downloads": 74
        },
        {
          "date": "2026-07-01",
          "label": "July 1, 2026",
          "downloads": 38
        }
      ],
      "deltaPct": -29.3,
      "territories": [
        {
          "territory": "United States",
          "downloads": 1063,
          "deltaPct": -29.3
        }
      ],
      "note": "Manual Apple Connect screenshot entered Jul 2, 2026. Daily U.S. downloads total 1,063 for Jun 25-Jul 1, 2026. Replaces the prior Jun 19-Jun 25, 2026 = 1,503 snapshot (-29.3%). No file attachment path was supplied with this screenshot; values entered from the provided daily figures. fiveWeekSnapshot history preserved. Preserved until replaced by a newer screenshot or an Apple App Store Connect API integration.",
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
      "priorSnapshot": {
        "period": "Jun 19-Jun 25, 2026",
        "start": "2026-06-19",
        "end": "2026-06-25",
        "downloads": 1503
      }
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
    },
    "titleAggregationPatch": {
      "updatedAt": "2026-06-07 07:59 PDT",
      "summary": {
        "topPrograms": [],
        "topVideoTitles": [],
        "topChannelTitles": [],
        "collapsedDuplicateVideoTitles": [],
        "removedVideoRowsFromPrograms": [
          "Exile",
          "Alone"
        ]
      },
      "rule": "Same video-title rows are collapsed; blank collection labels no longer become standalone Top Shows rows. Active users are not summed across duplicate title rows to avoid overcounting."
    },
    "plainEnglishSummary": {
      "generatedAt": "2026-06-29T12:31:00-07:00",
      "overview": "This week, traffic and use improved modestly while engagement-quality scoring was distorted by a Jun 28 anomaly. Property-wide GA4 active users rose +0.8% (5,921), sessions +4.7% (12,379), screen/page views +13.8% (33,975), and total engagement time +1.8% (about 4,879 hours); new users fell -7.8% (3,032). Reported engaged sessions (8,511) and engagement rate (68.75%, down from 78.96%) look weak, but that is driven by Sunday Jun 28 showing a low engagement classification despite high users, sessions, views and time - so engagedSessions/engagementRate are potentially inconsistent this week and should NOT be read as a real retention collapse; engagement duration, app_time and play/video events are the better attention signals and they held up. Visible platform sales GREW to 64 purchases / $1,159.36 gross ($991.08 developer rev share) after one new Stripe charge ($14.99), one new Roku sale (Jun 27 Purchase HD 15, $14.99), and four new manual Apple sales from the Jul 2 Jun 25-Jul 1 screenshots ($47.96 gross). Apple rises to 20/$332.80 gross (est net $232.92) after the Jul 2 screenshots add three Jun 26/27/28 Purchase HD 15 ($14.99 each) and one Jun 30 Purchase HD 3 ($2.99). YouTube (a separate channel) softened: 157,201 views (-10.1%) and ~$2,751 estimated ad revenue (-15.3%). Visible Platform Sales are Stripe + Roku + manual Apple only - not total ElectricNOW sales - and YouTube estimated ad revenue is a separate channel. As of the June 29, 2026 refresh, the GA4 complete-week window advances to the current week June 22-June 28, 2026 (previous complete week June 15-June 21 is the comparison baseline). Measured platform audience (landing-excluded) was 5,327 active users on 11,486 sessions, up about 0.9% and 5.1% respectively vs Jun 15-21. On paid acquisition, the newest numeric Meta report (Jun 21-Jun 27, 2026) shows $1,749.69 spent on an iOS-only campaign driving 1,157 iOS installs at $1.51 each (CPC $0.44); link clicks fell ~22%, CPC rose ~59.5%, and cost per install rose ~11.1% - acquisition got more expensive while volume held, with 55+ the most efficient bands. The prior top-card ~0 download anomaly has resolved (top-card now matches the 1,157 breakdown installs). Google Ads is STALE this run (connector RATE_LIMITED, 429) so its last-good values are preserved, not zeroed. VERDICT on paid: promising but still needs proof of viewing - spend reliably buys free iOS installs but there is no proof those installs become viewers or buyers; we do NOT claim true ROAS. Distinguish paid-campaign impressions (113,119 Meta) from in-app ad impressions (GA4 ads_impression, 42,200).",
      "bullets": [
        "Traffic: measured platform visits (GA4 sessions, landing-excluded) were 11,486 in the current complete week (Jun 22-Jun 28, 2026), up about 5.1% vs the previous 7 days (10,925 for Jun 15-21); platform active users were 5,327, up about 0.9%. Property-wide GA4 sessions were 12,379 (+4.7%) and active users 5,921 (+0.8%). Traffic improved modestly week over week.",
        "Engagement: the reported GA4 engagement rate slipped to 68.75% (from 78.96%) and engaged sessions to 8,511 (-8.8%), BUT this is distorted by Sunday Jun 28, which shows a low engagement classification despite high users, sessions, views and time. Total engagement time actually rose +1.8% to about 4,879 hours (userEngagementDuration 17,566,100s, fresh this run). Treat engagedSessions/engagementRate as potentially inconsistent this week - NOT a real retention collapse - and lean on engagement duration, app_time, user_engagement and play/video events as the primary attention signals.",
        "Paid acquisition (Meta, latest numeric report Jun 21-Jun 27, 2026): Meta spent $1,749.69 on a single iOS-only campaign and drove 1,157 iOS app installs at $1.51 each on 113,119 impressions and 3,907 link clicks (CPC $0.44). Versus the prior report period link clicks fell ~22%, CPC rose ~59.5%, and cost per iOS install rose ~11.1% - acquisition got more expensive while install volume held. The prior-period top-card ~0 download anomaly has RESOLVED: the top-card iOS installs (1,157) now match the breakdown tables (gender 789+365+3 and age 415+413+204+104+18+3 both = 1,157). Targeting skews older and efficient (55-64 and 65+ at $1.41/install are most efficient and highest-volume; 18-24 $5.48 and 25-34 $3.86 weakest); female CPI ($1.47) is slightly lower than male ($1.52) but male volume is larger. Google Ads is STALE this run (connector RATE_LIMITED, 429 RESOURCE_EXHAUSTED), so its last-good values are preserved, not zeroed, and no Meta-vs-Google comparison is possible. VERDICT: promising but still needs proof of viewing - spend reliably buys free iOS installs, but install->viewer->sale conversion is unproven. We do NOT claim true ROAS (ad-server revenue is not attributed). Distinguish paid-campaign impressions (113,119 Meta) from in-app ad impressions (GA4 ads_impression, 42,200 this week).",
        "App downloads (Apple manual snapshot): preserved at 1,503 for Jun 19-Jun 25, 2026 - no new Apple App Store screenshot was provided in this scheduled run. App Store downloads are free install activity, not paid sales and not GA4 active users.",
        "Sales (visible platform sales = Stripe + Roku + manual Apple): 64 purchases and $1,159.36 gross ($991.08 developer rev share) - Stripe 24/$484.76, Roku 20/$341.80 ($273.40 dev share), and Apple 20/$332.80 gross ($232.92 net) - UP this run. Stripe adds one charge ($14.99, ch_3Tn4AW; timestamp absent from the export so assigned to the current week). Roku's Jun 29 Sales Activity Report adds a Jun 27 Purchase HD 15 ($14.99 gross / $11.99 dev rev share). Apple adds four sales from the Jul 2 Jun 25-Jul 1 Apple Connect screenshots: Jun 26/27/28 Purchase HD 15 ($14.99 each) and Jun 30 Purchase HD 3 ($2.99), $47.96 gross total. YouTube is separate (estimated YouTube ad revenue only) and not in this total.",
        "Caveats: visible platform sales are a floor, not total ElectricNOW sales (Google Play handled separately; ad-server revenue not attributed, so no true ROAS). Apple figures are a preserved manual App Store Connect snapshot (gross shown; estimated net assumes Apple keeps 30%). Roku App Engagement (Jun 21-27) was parsed this run; Roku TRC / Viewership (live) reports remain excluded from app/platform usage. Google Ads was rate-limited (429) and is shown last-good, not zeroed. The landing offset used for platform audience is last-good/estimated (top_pages export was a truncated preview). GA4 in-app-purchase signals are usage signals, not booked revenue, and are excluded from visible platform sales.",
        "YouTube (separate channel, estimated ad revenue only): the ElectricNOW YouTube channel had a complete week for Jun 22-Jun 28, 2026 - 157,201 views, ~69,686 hours watched, average view duration 26m 36s, ~$2,751.03 estimated ad revenue ($3,025.76 estimated total revenue) on 747,898 ad impressions (126,155 monetized playbacks), and 210 new subscribers. That is down vs the prior full week (views -10.1%, ad revenue -15.3%, ad impressions -18.0%, monetized playbacks -12.7%). Per-day rows run through Jun 27 only this run. This is estimated YouTube ad revenue on a separate channel - NOT a platform sales source and NOT included in Visible Platform Sales; YouTube ad impressions are a distinct metric, not GA4 ad events.",
        "Bottom line: the GA4 complete-week window advances to Jun 22-28, 2026 with traffic and use up modestly (active users +0.8%, sessions +4.7%, views +13.8%, engagement time +1.8%) and new users down -7.8%; reported engagement rate looks low (68.75%) only because of a Jun 28 classification anomaly, not a real retention drop. Visible sales GREW to 64/$1,159.36 (Stripe +$14.99, Roku +$14.99, Apple +$47.96). Meta's newest numeric report (Jun 21-27) shows spend $1,749.69 and 1,157 iOS installs at $1.51 (CPC up, clicks down); the top-card download anomaly has resolved. Open items: restore the Google Ads pull (rate-limited this run), add an install->activation event so paid installs can be tied to actual viewing, and obtain a fresh Apple downloads screenshot; true ROAS remains unprovable until ad-attributed revenue is available."
      ]
    },
    "youtubeSummary": {
      "source": "YouTube Analytics connector, ElectricNOW channel",
      "connectorStatus": "CONNECTED",
      "period": "Jun 22-Jun 28, 2026",
      "periodNote": "Monday-Sunday week Jun 22-28. Weekly totals cover the full week; the per-day trend rows returned by the connector run through Jun 27 only, so daily rows are 6 days while weekly totals are the full 7-day figures.",
      "comparisonPeriod": "Jun 15-Jun 21, 2026",
      "comparisonNote": "Compared to the prior full week (Jun 15-Jun 21, 2026).",
      "isPlatformSales": false,
      "revenueType": "estimated YouTube ad revenue",
      "kpis": [
        {
          "key": "views",
          "label": "Views",
          "value": 157201,
          "deltaPct": -10.12,
          "detail": "YouTube channel views in the complete week"
        },
        {
          "key": "hoursWatched",
          "label": "Est. hours watched",
          "value": 69686.28,
          "deltaPct": -11.39,
          "detail": "Estimated hours watched on YouTube"
        },
        {
          "key": "avgViewDuration",
          "label": "Avg view duration",
          "value": "26m 36s",
          "detail": "Average watch time per YouTube view"
        },
        {
          "key": "estimatedAdRevenue",
          "label": "Est. YouTube ad revenue",
          "value": 2751.033,
          "deltaPct": -15.3,
          "detail": "Estimated YouTube ad revenue (NOT sales, NOT in-app purchases)"
        },
        {
          "key": "estimatedRevenue",
          "label": "Est. total YouTube revenue",
          "value": 3025.761,
          "detail": "Estimated total YouTube revenue (ads + other), separate channel - NOT platform sales",
          "deltaPct": -15.24
        },
        {
          "key": "adImpressions",
          "label": "YouTube ad impressions",
          "value": 747898,
          "deltaPct": -17.95,
          "detail": "YouTube ad impressions (NOT ElectricNOW in-app ads, NOT paid-acquisition impressions)"
        },
        {
          "key": "monetizedPlaybacks",
          "label": "Monetized playbacks",
          "value": 126155,
          "deltaPct": -12.69,
          "detail": "YouTube playbacks that served a monetized ad"
        }
      ],
      "totals": {
        "views": 157201,
        "estimatedMinutesWatched": 4181177,
        "estimatedHoursWatched": 69686.28,
        "averageViewDuration": "26m 36s",
        "estimatedRevenue": 3025.761,
        "estimatedAdRevenue": 2751.033,
        "adImpressions": 747898,
        "monetizedPlaybacks": 126155,
        "subscribersGained": 210,
        "likes": 1617,
        "comments": 44,
        "shares": 174
      },
      "previousTotals": {
        "views": 174898,
        "estimatedMinutesWatched": 4718726,
        "estimatedHoursWatched": 78645.43,
        "averageViewDuration": "26m 59s",
        "estimatedRevenue": 3569.663,
        "estimatedAdRevenue": 3247.966,
        "adImpressions": 911554,
        "monetizedPlaybacks": 144494,
        "subscribersGained": 218,
        "likes": 1687,
        "comments": 72,
        "shares": 174
      },
      "dailyTrend": [
        {
          "date": "2026-06-22",
          "views": 27226,
          "estimatedMinutesWatched": 684627,
          "estimatedHoursWatched": 11410.45,
          "estimatedRevenue": 473.435,
          "estimatedAdRevenue": 429.843,
          "adImpressions": 120180,
          "monetizedPlaybacks": 21885
        },
        {
          "date": "2026-06-23",
          "views": 24563,
          "estimatedMinutesWatched": 661614,
          "estimatedHoursWatched": 11026.9,
          "estimatedRevenue": 490.34,
          "estimatedAdRevenue": 444.406,
          "adImpressions": 115955,
          "monetizedPlaybacks": 20025
        },
        {
          "date": "2026-06-24",
          "views": 24689,
          "estimatedMinutesWatched": 648206,
          "estimatedHoursWatched": 10803.43,
          "estimatedRevenue": 468.441,
          "estimatedAdRevenue": 426.315,
          "adImpressions": 117105,
          "monetizedPlaybacks": 20583
        },
        {
          "date": "2026-06-25",
          "views": 25551,
          "estimatedMinutesWatched": 669214,
          "estimatedHoursWatched": 11153.57,
          "estimatedRevenue": 537.584,
          "estimatedAdRevenue": 496.657,
          "adImpressions": 123097,
          "monetizedPlaybacks": 20875
        },
        {
          "date": "2026-06-26",
          "views": 25485,
          "estimatedMinutesWatched": 692956,
          "estimatedHoursWatched": 11549.27,
          "estimatedRevenue": 490.981,
          "estimatedAdRevenue": 446.706,
          "adImpressions": 124006,
          "monetizedPlaybacks": 19911
        },
        {
          "date": "2026-06-27",
          "views": 29687,
          "estimatedMinutesWatched": 824558,
          "estimatedHoursWatched": 13742.63,
          "estimatedRevenue": 564.98,
          "estimatedAdRevenue": 507.106,
          "adImpressions": 147555,
          "monetizedPlaybacks": 22876
        }
      ],
      "topVideos": [
        {
          "videoId": "b6kMpenpQGM",
          "title": "Flyboys | FULL MOVIE | James Franco | Jean Reno | Jennifer Decker | David Ellison",
          "views": 15195,
          "estimatedHoursWatched": 12925.98,
          "averageViewDuration": "51m 04s",
          "averageViewPercentage": 36.79,
          "estimatedAdRevenue": 476.77,
          "adImpressions": 147592,
          "monetizedPlaybacks": 11476
        },
        {
          "videoId": "tKAdjrXYj8g",
          "title": "Blackway | FULL MOVIE | Anthony Hopkins | Ray Liotta | Julia Stiles | Alexander Ludwig",
          "views": 4042,
          "estimatedHoursWatched": 1373.38,
          "averageViewDuration": "20m 23s",
          "averageViewPercentage": 22.58,
          "estimatedAdRevenue": 63.92,
          "adImpressions": 16286,
          "monetizedPlaybacks": 2177
        },
        {
          "videoId": "YM6-fBB7yQY",
          "title": "Leverage | The Nigerian Job | Season 1 Episode 1 | Official Episode",
          "views": 3624,
          "estimatedHoursWatched": 1709.7,
          "averageViewDuration": "28m 21s",
          "averageViewPercentage": 49.34,
          "estimatedAdRevenue": 62.02,
          "adImpressions": 20982,
          "monetizedPlaybacks": 3105
        },
        {
          "videoId": "0T-yveMJPko",
          "title": "The Librarian: Quest for the Spear | FULL MOVIE | Noah Wyle, Kyle MacLachlan, Bob Newhart",
          "views": 2706,
          "estimatedHoursWatched": 1593.73,
          "averageViewDuration": "35m 20s",
          "averageViewPercentage": 33.36,
          "estimatedAdRevenue": 98.62,
          "adImpressions": 21222,
          "monetizedPlaybacks": 2306
        },
        {
          "videoId": "hDt1a2yjYBE",
          "title": "The Boost Job | Electric Entertainment 25th Anniversary Celebration! | Leverage S03E08",
          "views": 2118,
          "estimatedHoursWatched": 546.68,
          "averageViewDuration": "15m 27s",
          "averageViewPercentage": 36.12,
          "estimatedAdRevenue": 32.22,
          "adImpressions": 7648,
          "monetizedPlaybacks": 1918
        },
        {
          "videoId": "LMX2-vsoGSo",
          "title": "Leverage | The Homecoming Job | Season 1 Episode 2 | Official Episode",
          "views": 1969,
          "estimatedHoursWatched": 972.12,
          "averageViewDuration": "29m 36s",
          "averageViewPercentage": 69.06,
          "estimatedAdRevenue": 32.81,
          "adImpressions": 10010,
          "monetizedPlaybacks": 1495
        },
        {
          "videoId": "89J-9vWWPuk",
          "title": "The Triangle: Night 1 | Full Movie | Eric Stoltz, Catherine Bell, Lou Diamond Phillips, Sam Neill",
          "views": 1803,
          "estimatedHoursWatched": 603.55,
          "averageViewDuration": "20m 04s",
          "averageViewPercentage": 22.64,
          "estimatedAdRevenue": 24.69,
          "adImpressions": 6237,
          "monetizedPlaybacks": 1080
        },
        {
          "videoId": "sjsGMHmm9Yk",
          "title": "The Librarian: Curse of the Judas Chalice | FULL MOVIE | Noah Wyle, Bruce Davison, Bob Newhart",
          "views": 1628,
          "estimatedHoursWatched": 735.48,
          "averageViewDuration": "27m 05s",
          "averageViewPercentage": 30.07,
          "estimatedAdRevenue": 34.69,
          "adImpressions": 9102,
          "monetizedPlaybacks": 1195
        },
        {
          "videoId": "-mqcn5M0ktA",
          "title": "LBJ | FULL MOVIE | Woody Harrelson | Jennifer Jason Leigh | Richard Jenkins | Bill Pullman",
          "views": 1530,
          "estimatedHoursWatched": 616.78,
          "averageViewDuration": "24m 08s",
          "averageViewPercentage": 24.84,
          "estimatedAdRevenue": 22.43,
          "adImpressions": 5752,
          "monetizedPlaybacks": 1216
        },
        {
          "videoId": "JeeMINxXYwQ",
          "title": "Leverage | The Jailhouse Job | Season 3 Episode 1 | Official Episode",
          "views": 1456,
          "estimatedHoursWatched": 560.27,
          "averageViewDuration": "23m 05s",
          "averageViewPercentage": 53.84,
          "estimatedAdRevenue": 26.51,
          "adImpressions": 6521,
          "monetizedPlaybacks": 1182
        }
      ],
      "trafficSources": [
        {
          "source": "RELATED_VIDEO",
          "label": "Related videos",
          "views": 64768,
          "viewSharePct": 48.0,
          "estimatedHoursWatched": 35617.57,
          "averageViewDuration": "32m 59s"
        },
        {
          "source": "SUBSCRIBER",
          "label": "Subscriber feed",
          "views": 32269,
          "viewSharePct": 23.9,
          "estimatedHoursWatched": 9232.07,
          "averageViewDuration": "17m 11s"
        },
        {
          "source": "PLAYLIST",
          "label": "Playlists",
          "views": 16912,
          "viewSharePct": 12.5,
          "estimatedHoursWatched": 7277.72,
          "averageViewDuration": "25m 49s"
        },
        {
          "source": "NO_LINK_OTHER",
          "label": "Direct / unknown",
          "views": 8275,
          "viewSharePct": 6.1,
          "estimatedHoursWatched": 4185.85,
          "averageViewDuration": "30m 21s"
        },
        {
          "source": "YT_SEARCH",
          "label": "YouTube search",
          "views": 6263,
          "viewSharePct": 4.6,
          "estimatedHoursWatched": 2114.37,
          "averageViewDuration": "20m 18s"
        },
        {
          "source": "YT_OTHER_PAGE",
          "label": "Other YouTube pages",
          "views": 3539,
          "viewSharePct": 2.6,
          "estimatedHoursWatched": 1273.38,
          "averageViewDuration": "21m 35s"
        },
        {
          "source": "EXT_URL",
          "label": "External URLs",
          "views": 1265,
          "viewSharePct": 0.9,
          "estimatedHoursWatched": 297.37,
          "averageViewDuration": "14m 06s"
        },
        {
          "source": "YT_CHANNEL",
          "label": "Channel pages",
          "views": 1140,
          "viewSharePct": 0.8,
          "estimatedHoursWatched": 258.37,
          "averageViewDuration": "13m 40s"
        },
        {
          "source": "END_SCREEN",
          "label": "End screens",
          "views": 284,
          "viewSharePct": 0.2,
          "estimatedHoursWatched": 112.67,
          "averageViewDuration": "23m 48s"
        },
        {
          "source": "NOTIFICATION",
          "label": "Notifications",
          "views": 79,
          "viewSharePct": 0.1,
          "estimatedHoursWatched": 4.37,
          "averageViewDuration": "3m 19s"
        }
      ],
      "deviceSplit": [
        {
          "device": "TV",
          "label": "TV",
          "views": 73954,
          "viewSharePct": 54.9,
          "estimatedHoursWatched": 38854.07,
          "averageViewDuration": "31m 32s"
        },
        {
          "device": "MOBILE",
          "label": "Mobile",
          "views": 30888,
          "viewSharePct": 22.9,
          "estimatedHoursWatched": 10274.63,
          "averageViewDuration": "19m 59s"
        },
        {
          "device": "DESKTOP",
          "label": "Desktop",
          "views": 22645,
          "viewSharePct": 16.8,
          "estimatedHoursWatched": 8545.1,
          "averageViewDuration": "22m 39s"
        },
        {
          "device": "TABLET",
          "label": "Tablet",
          "views": 7316,
          "viewSharePct": 5.4,
          "estimatedHoursWatched": 2692.2,
          "averageViewDuration": "22m 06s"
        }
      ],
      "distinctionNote": "This is YouTube-only performance. YouTube ad impressions and estimated YouTube ad revenue are distinct from ElectricNOW in-app ad impressions and from Google/Meta paid-acquisition impressions. YouTube has no purchases and is NOT included in Visible Platform Sales.",
      "plainEnglish": "YouTube is a meaningful separate audience and revenue channel. For the complete week Jun 22-28, 2026 the channel produced 157,201 views, about 69,686 hours watched, ~126,155 monetized playbacks, and roughly $2,751 in estimated ad revenue ($3,026 estimated total revenue), with average view duration about 26m 36s and 210 new subscribers. That is down versus the prior full week (views -10.1%, ad revenue -15.3%, ad impressions -18.0%, monetized playbacks -12.7%). The connector's per-day rows run through Jun 27 only this run, so daily detail is 6 days while the weekly totals are the full 7-day figures. This section is YouTube-only performance, separate from ElectricNOW app/GA4 usage and separate from paid-acquisition ad impressions, and is NOT included in Visible Platform Sales."
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

  // The launch-baseline comparison divides by the card's launchBaseline value.
  // When that denominator is missing or zero the percentage is undefined, and a
  // bare "new" badge is misleading for metrics that already existed at launch.
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
    // Meta campaign rows carry the name in `campaign` (sometimes `name`) and
    // have no explicit platform field. Derive a readable label and infer the
    // platform from the campaign string so empty names never render as "()".
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
      const baseName = name || ('Campaign ' + (index + 1) + ' (Meta paid)');
      return platform ? baseName + ' (' + platform + ')' : baseName;
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
      campaignsEl.innerHTML = campaigns.map(function (row, index) {
        return '<div class="google-ads-action-row">' +
          '<header><span>' + escapeHtml(metaCampaignLabel(row, index)) + '</span>' +
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
      if (card.key === 'estimatedAdRevenue') return fmt.currency(card.value);
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
                <td>${escapeHtml(v.title)}</td>
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
    renderYouTube();
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
