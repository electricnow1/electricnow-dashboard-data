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
  style.textContent = "#electricnow-dashboard-embed {\n  --bg: #050a12;\n  --surface: #0a1524;\n  --surface-2: #0f2138;\n  --surface-3: #132b48;\n  --border: rgba(255, 255, 255, 0.11);\n  --border-strong: rgba(255, 255, 255, 0.18);\n  --text: #f6f9ff;\n  --muted: #9fb3ca;\n  --faint: #667f9d;\n  --primary: #2f81d7;\n  --primary-2: #68b7ff;\n  --good: #69d895;\n  --bad: #ff6f85;\n  --warn: #ffc857;\n  --shadow: 0 22px 70px rgba(0, 0, 0, 0.42);\n  --radius: 14px;\n  --radius-sm: 10px;\n  --font-ui: 'Inter', system-ui, sans-serif;\n  --font-display: 'Barlow Condensed', 'Arial Narrow', sans-serif;\n  --embed-top-buffer: 32px;\n}\n#electricnow-dashboard-embed *,\n#electricnow-dashboard-embed *::before,\n#electricnow-dashboard-embed *::after {\n  box-sizing: border-box;\n}\n#electricnow-dashboard-embed,\n#electricnow-dashboard-embed {\n  min-height: 100%;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n#electricnow-dashboard-embed {\n  margin: 0;\n  background:\n    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),\n    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),\n    var(--bg);\n  color: var(--text);\n  font-family: var(--font-ui);\n  font-size: 15px;\n  line-height: 1.45;\n  overflow-x: hidden;\n}\n#electricnow-dashboard-embed,\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n  background:\n    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),\n    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),\n    var(--bg) !important;\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed a {\n  color: inherit !important;\n}\n#electricnow-dashboard-embed button,\n#electricnow-dashboard-embed select {\n  font: inherit;\n}\n#electricnow-dashboard-embed .skip-link {\n  position: fixed;\n  left: 16px;\n  top: 16px;\n  z-index: 1000;\n  transform: translateY(-160%);\n  background: var(--primary);\n  color: #fff;\n  padding: 10px 14px;\n  border-radius: 999px;\n}\n#electricnow-dashboard-embed .skip-link:focus {\n  transform: translateY(0);\n}\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n  max-width: 100vw;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-columns: 280px minmax(0, 1fr);\n  grid-template-rows: minmax(104px, auto) minmax(0, 1fr);\n  min-height: 100vh;\n  padding-top: var(--embed-top-buffer);\n}\n#electricnow-dashboard-embed .sidebar {\n  grid-row: 1 / -1;\n  position: sticky;\n  top: var(--embed-top-buffer);\n  height: calc(100vh - var(--embed-top-buffer));\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  border-right: 1px solid var(--border);\n  background: #050a12 !important;\n  padding: 24px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\n#electricnow-dashboard-embed .brand {\n  display: grid;\n  grid-template-columns: 48px 1fr;\n  gap: 12px;\n  align-items: center;\n  text-decoration: none;\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .brand-mark {\n  width: 48px;\n  border-radius: 4px;\n  background: linear-gradient(135deg, #2367b2, #d9ebff);\n  color: #fff;\n  padding: 7px;\n}\n#electricnow-dashboard-embed .brand span {\n  display: grid;\n  gap: 0;\n}\n#electricnow-dashboard-embed .brand strong {\n  font-family: var(--font-display);\n  font-size: 25px;\n  line-height: 0.82;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .brand small,\n#electricnow-dashboard-embed .source-card span,\n#electricnow-dashboard-embed .eyebrow,\n#electricnow-dashboard-embed .select-label {\n  color: var(--primary-2) !important;\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .side-nav {\n  display: grid;\n  gap: 6px;\n}\n#electricnow-dashboard-embed .side-nav a {\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  border-radius: var(--radius-sm);\n  color: var(--muted) !important;\n  padding: 0 12px;\n  text-decoration: none;\n}\n#electricnow-dashboard-embed .side-nav a:hover,\n#electricnow-dashboard-embed .side-nav a:focus-visible {\n  background: var(--surface-2);\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .source-card {\n  margin-top: auto;\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  background: #0f2138 !important;\n  padding: 16px;\n}\n#electricnow-dashboard-embed .source-card strong {\n  display: block;\n  margin-top: 6px;\n}\n#electricnow-dashboard-embed .source-card p {\n  margin: 8px 0 0;\n  color: var(--muted);\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n#electricnow-dashboard-embed .topbar {\n  position: sticky;\n  top: var(--embed-top-buffer);\n  z-index: 20;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  border-bottom: 1px solid var(--border);\n  background: #070d17 !important;\n  backdrop-filter: blur(14px);\n  padding: 18px 28px;\n}\n#electricnow-dashboard-embed .topbar > div:first-child {\n  min-width: 0;\n  flex: 1 1 360px;\n}\n#electricnow-dashboard-embed .topbar h1 {\n  color: var(--text) !important;\n  margin: 2px 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(26px, 2.35vw, 34px);\n  line-height: 0.98;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .topbar-actions {\n  flex: 0 1 520px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n}\n#electricnow-dashboard-embed select,\n#electricnow-dashboard-embed .ghost-button {\n  min-height: 42px;\n  border: 1px solid var(--border-strong);\n  border-radius: 999px;\n  background: #0f2138 !important;\n  color: var(--text) !important;\n  padding: 0 14px;\n}\n#electricnow-dashboard-embed .ghost-button {\n  cursor: pointer;\n}\n#electricnow-dashboard-embed .ghost-button:disabled {\n  cursor: wait;\n  opacity: 0.55;\n}\n#electricnow-dashboard-embed .refresh-button {\n  border-color: rgba(104, 183, 255, 0.42);\n}\n#electricnow-dashboard-embed .refresh-status {\n  min-width: 130px;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .ghost-button.is-active,\n#electricnow-dashboard-embed .ghost-button:hover {\n  background: var(--primary);\n  border-color: var(--primary);\n}\n#electricnow-dashboard-embed .main {\n  padding: 28px;\n  min-width: 0;\n  background: #050a12 !important;\n}\n#electricnow-dashboard-embed .hero-panel,\n#electricnow-dashboard-embed .panel,\n#electricnow-dashboard-embed .plain-panel,\n#electricnow-dashboard-embed .kpi-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0)),\n    #0a1524 !important;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n#electricnow-dashboard-embed .hero-panel {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 260px;\n  align-items: end;\n  gap: 24px;\n  background:\n    linear-gradient(135deg, rgba(47, 129, 215, 0.28), rgba(10, 21, 36, 0.96) 55%),\n    #0a1524 !important;\n  padding: clamp(24px, 4vw, 42px);\n}\n#electricnow-dashboard-embed .hero-panel h2,\n#electricnow-dashboard-embed .plain-panel h2,\n#electricnow-dashboard-embed .panel h2 {\n  color: var(--text) !important;\n  margin: 4px 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(25px, 3vw, 34px);\n  line-height: 0.96;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .panel h3,\n#electricnow-dashboard-embed .subsection-header h3 {\n  color: var(--text) !important;\n  margin: 18px 0 10px;\n  font-family: var(--font-display);\n  font-size: 22px;\n  line-height: 0.95;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .subsection-header {\n  margin-top: 28px;\n  border-top: 1px solid var(--border);\n  padding-top: 20px;\n}\n#electricnow-dashboard-embed .panel-note {\n  margin: 0 0 16px;\n  color: var(--muted);\n  font-size: 13px;\n  max-width: 860px;\n}\n#electricnow-dashboard-embed .topbar h1,\n#electricnow-dashboard-embed .hero-panel h2,\n#electricnow-dashboard-embed .plain-panel h2,\n#electricnow-dashboard-embed .panel h2,\n#electricnow-dashboard-embed .panel h3,\n#electricnow-dashboard-embed .subsection-header h3 {\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .eyebrow,\n#electricnow-dashboard-embed .select-label,\n#electricnow-dashboard-embed .source-card span,\n#electricnow-dashboard-embed .brand small {\n  color: var(--primary-2) !important;\n}\n#electricnow-dashboard-embed .hero-panel p {\n  max-width: 72ch;\n  margin: 14px 0 0;\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .hero-meta {\n  display: grid;\n  gap: 4px;\n  justify-items: end;\n  color: var(--muted);\n  text-align: right;\n}\n#electricnow-dashboard-embed .hero-meta strong {\n  color: var(--text);\n}\n#electricnow-dashboard-embed .visit-strip {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\n  gap: 16px;\n  margin-top: 18px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--radius);\n  background:\n    linear-gradient(135deg, rgba(47, 129, 215, 0.20), rgba(10, 21, 36, 0.96)),\n    var(--surface);\n  box-shadow: var(--shadow);\n  padding: 20px;\n}\n#electricnow-dashboard-embed .visit-strip-header h2 {\n  margin: 2px 0 8px;\n  color: var(--text);\n  font-family: var(--font-display);\n  font-size: clamp(26px, 3vw, 38px);\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .visit-strip-header p:not(.eyebrow),\n#electricnow-dashboard-embed .visit-source,\n#electricnow-dashboard-embed .visit-card p {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .visit-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .visit-card {\n  display: grid;\n  gap: 10px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(5, 10, 18, 0.46);\n  padding: 16px;\n}\n#electricnow-dashboard-embed .visit-card span {\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .visit-card strong {\n  color: var(--text);\n  font-family: var(--font-display);\n  font-size: clamp(42px, 5vw, 64px);\n  line-height: 0.9;\n  letter-spacing: 0.02em;\n}\n#electricnow-dashboard-embed .visit-card-meta {\n  display: grid;\n  gap: 4px;\n}\n#electricnow-dashboard-embed .visit-card small {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .visit-card p,\n#electricnow-dashboard-embed .visit-source {\n  margin: 0;\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .visit-source {\n  grid-column: 1 / -1;\n}\n#electricnow-dashboard-embed .plain-panel {\n  display: none;\n  grid-template-columns: 240px 1fr;\n  gap: 24px;\n  margin-top: 18px;\n  padding: 20px;\n}\n#electricnow-dashboard-embed .plain-panel.is-visible {\n  display: grid;\n}\n#electricnow-dashboard-embed .plain-panel ul {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n#electricnow-dashboard-embed .plain-panel li,\n#electricnow-dashboard-embed .gap-list li {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .plain-panel li.insight-overview {\n  color: var(--text);\n  font-size: 1.03rem;\n  line-height: 1.55;\n}\n#electricnow-dashboard-embed .kpi-grid {\n  display: grid;\n  gap: 18px;\n  margin-top: 18px;\n}\n#electricnow-dashboard-embed .kpi-group {\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  background: #08111e !important;\n  padding: 16px;\n  box-shadow: var(--shadow);\n}\n#electricnow-dashboard-embed .kpi-group-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  margin-bottom: 12px;\n}\n#electricnow-dashboard-embed .kpi-group-header h3 {\n  margin: 0;\n  color: var(--text) !important;\n  font-family: var(--font-display);\n  font-size: 23px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .kpi-group-header > p {\n  max-width: 620px;\n  margin: 0;\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .kpi-group-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .kpi-card {\n  min-height: 232px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 16px;\n}\n#electricnow-dashboard-embed .kpi-card span,\n#electricnow-dashboard-embed .metric-row span,\n#electricnow-dashboard-embed .table-wrap th {\n  color: var(--faint);\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .kpi-card span {\n  min-height: 32px;\n  display: block;\n}\n#electricnow-dashboard-embed .kpi-card strong {\n  display: block;\n  margin-top: 8px;\n  font-family: var(--font-display);\n  font-size: 34px;\n  line-height: 0.95;\n  letter-spacing: 0.03em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .kpi-card p {\n  margin: 12px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .kpi-compare-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 8px;\n  align-items: center;\n  margin-top: 14px;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n#electricnow-dashboard-embed .kpi-compare-grid small {\n  color: var(--faint);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .delta {\n  display: inline-flex;\n  align-self: flex-start;\n  margin-top: 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--muted);\n  padding: 4px 8px;\n  font-size: 12px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .delta.up {\n  color: var(--good);\n}\n#electricnow-dashboard-embed .delta.down {\n  color: var(--bad);\n}\n#electricnow-dashboard-embed .delta.baseline-unavailable {\n  color: var(--muted);\n  font-weight: 600;\n  font-style: italic;\n}\n#electricnow-dashboard-embed .dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n  gap: 18px;\n  margin-top: 18px;\n}\n#electricnow-dashboard-embed .span-4 {\n  grid-column: span 4;\n}\n#electricnow-dashboard-embed .span-6 {\n  grid-column: span 6;\n}\n#electricnow-dashboard-embed .span-8 {\n  grid-column: span 8;\n}\n#electricnow-dashboard-embed .panel {\n  min-width: 0;\n  padding: 18px;\n}\n#electricnow-dashboard-embed .panel-header {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: start;\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .period-chip {\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--muted);\n  padding: 6px 10px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n#electricnow-dashboard-embed .chart-wrap,\n#electricnow-dashboard-embed .mini-chart-wrap {\n  width: 100%;\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .chart-wrap + h3 {\n  margin-top: 24px;\n}\n#electricnow-dashboard-embed .chart-legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px 18px;\n  margin-top: 12px;\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .chart-note {\n  margin: 10px 0 0;\n  padding: 10px 12px;\n  border-left: 3px solid var(--warn);\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 8px;\n  color: var(--muted);\n  font-size: 13px;\n  line-height: 1.5;\n}\n#electricnow-dashboard-embed .chart-note:empty {\n  display: none;\n}\n#electricnow-dashboard-embed .chart-legend span {\n  display: inline-flex;\n  gap: 7px;\n  align-items: center;\n}\n#electricnow-dashboard-embed .legend-swatch {\n  width: 22px;\n  height: 4px;\n  border-radius: 999px;\n  display: inline-block;\n}\n#electricnow-dashboard-embed .legend-blue {\n  background: var(--primary-2);\n}\n#electricnow-dashboard-embed .legend-green {\n  background: var(--good);\n}\n#electricnow-dashboard-embed svg {\n  width: 100%;\n  height: auto;\n}\n#electricnow-dashboard-embed .axis {\n  stroke: rgba(255, 255, 255, 0.12);\n}\n#electricnow-dashboard-embed .chart-label {\n  fill: var(--muted);\n  font-size: 12px;\n  font-family: var(--font-ui);\n}\n#electricnow-dashboard-embed .chart-end-label {\n  font-family: var(--font-ui);\n  font-size: 12px;\n  font-weight: 800;\n  paint-order: stroke;\n  stroke: var(--surface);\n  stroke-width: 4px;\n}\n#electricnow-dashboard-embed .active-end {\n  fill: var(--primary-2);\n}\n#electricnow-dashboard-embed .engaged-end {\n  fill: var(--good);\n}\n#electricnow-dashboard-embed .line-active {\n  fill: none;\n  stroke: var(--primary-2);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .line-engaged {\n  fill: none;\n  stroke: var(--good);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .line-purchase {\n  fill: none;\n  stroke: var(--warn);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .area-fill {\n  fill: rgba(104, 183, 255, 0.12);\n}\n#electricnow-dashboard-embed .purchase-summary {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .sales-summary {\n  display: grid;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .sales-callout {\n  border: 1px solid rgba(255, 200, 87, 0.28);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(255, 200, 87, 0.15), rgba(47, 129, 215, 0.1));\n  padding: 14px;\n}\n#electricnow-dashboard-embed .sales-callout span,\n#electricnow-dashboard-embed .sales-stat span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-callout strong {\n  display: block;\n  margin-top: 5px;\n  font-family: var(--font-display);\n  font-size: 30px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-callout p,\n#electricnow-dashboard-embed .sales-note,\n#electricnow-dashboard-embed .sales-source,\n#electricnow-dashboard-embed .sales-stat em {\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .sales-callout p,\n#electricnow-dashboard-embed .sales-source,\n#electricnow-dashboard-embed .sales-note {\n  margin: 8px 0 0;\n}\n#electricnow-dashboard-embed .sales-source {\n  border-left: 2px solid rgba(104, 183, 255, 0.45);\n  padding-left: 10px;\n}\n#electricnow-dashboard-embed .sales-source-list {\n  display: grid;\n  gap: 6px;\n  margin: 14px 0 0;\n  padding: 0;\n  list-style: none;\n}\n#electricnow-dashboard-embed .sales-source-list li {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 8px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .sales-source-list li strong {\n  color: var(--text);\n  font-size: 12px;\n  text-align: right;\n}\n#electricnow-dashboard-embed .sales-stat-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n#electricnow-dashboard-embed .sales-stat {\n  min-width: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.58);\n  padding: 12px;\n}\n#electricnow-dashboard-embed .sales-stat strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 26px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-stat.baseline-set strong {\n  color: var(--good);\n  font-size: 24px;\n}\n#electricnow-dashboard-embed .sales-audit {\n  border: 1px solid rgba(104, 183, 255, 0.34);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.72);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .sales-audit span {\n  display: block;\n  color: var(--warn);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-audit strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 28px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-audit p,\n#electricnow-dashboard-embed .sales-audit small {\n  display: block;\n  margin: 8px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .purchase-row,\n#electricnow-dashboard-embed .metric-row {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 12px;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  padding-block: 10px;\n}\n#electricnow-dashboard-embed .purchase-row:last-child,\n#electricnow-dashboard-embed .metric-row:last-child {\n  border-bottom: 0;\n}\n#electricnow-dashboard-embed .purchase-row strong,\n#electricnow-dashboard-embed .metric-row strong {\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .not-tracked {\n  color: var(--warn);\n}\n#electricnow-dashboard-embed .purchase-point-label {\n  fill: var(--text);\n  font-size: 11px;\n  font-weight: 700;\n}\n#electricnow-dashboard-embed .metric-list {\n  display: grid;\n}\n#electricnow-dashboard-embed .usage-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 18px;\n}\n#electricnow-dashboard-embed .roku-engagement-grid {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin-bottom: 0;\n}\n#electricnow-dashboard-embed .roku-live-channel-grid {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  margin-bottom: 14px;\n}\n@media (max-width: 1180px) {\n#electricnow-dashboard-embed .roku-live-channel-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n#electricnow-dashboard-embed .roku-live-channel-grid {\n    grid-template-columns: 1fr;\n  }\n}\n#electricnow-dashboard-embed .roku-live-channel-split {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-top: 8px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .roku-live-channel-split {\n    grid-template-columns: 1fr;\n  }\n}\n#electricnow-dashboard-embed .usage-stat {\n  border: 1px solid rgba(104, 183, 255, 0.18);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.52);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .usage-stat span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .usage-stat strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 32px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .usage-stat em {\n  display: block;\n  margin-top: 5px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-mix {\n  display: grid;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n#electricnow-dashboard-embed .platform-total {\n  border: 1px solid rgba(104, 183, 255, 0.22);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));\n  padding: 14px;\n}\n#electricnow-dashboard-embed .platform-total span,\n#electricnow-dashboard-embed .coming-platforms span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .platform-total strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 36px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n}\n#electricnow-dashboard-embed .platform-total em,\n#electricnow-dashboard-embed .platform-share-card span,\n#electricnow-dashboard-embed .platform-share-card p,\n#electricnow-dashboard-embed .platform-note {\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-share-list {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .section-usage-list {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .section-usage-card {\n  min-width: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.62);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .section-usage-card header {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .section-usage-card span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .section-usage-card strong,\n#electricnow-dashboard-embed .section-usage-card b {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  line-height: 0.98;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .section-usage-card strong {\n  font-size: 28px;\n}\n#electricnow-dashboard-embed .section-usage-card b {\n  color: var(--good);\n  font-size: 18px;\n  text-align: left;\n  white-space: normal;\n}\n#electricnow-dashboard-embed .section-metrics {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px;\n  margin-top: 12px;\n}\n#electricnow-dashboard-embed .section-metrics em {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 999px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n  padding: 5px 8px;\n}\n#electricnow-dashboard-embed .section-usage-card p {\n  margin: 12px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .platform-share-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.52);\n  padding: 12px;\n}\n#electricnow-dashboard-embed .platform-share-card.is-untracked {\n  border-style: dashed;\n  background: rgba(255, 199, 95, 0.08);\n}\n#electricnow-dashboard-embed .platform-share-card header {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: start;\n}\n#electricnow-dashboard-embed .platform-share-card strong,\n#electricnow-dashboard-embed .platform-share-card b {\n  color: var(--text) !important;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .platform-share-card strong {\n  display: block;\n}\n#electricnow-dashboard-embed .platform-share-card b {\n  font-family: var(--font-display);\n  font-size: 24px;\n  line-height: 1;\n}\n#electricnow-dashboard-embed .platform-share-card.is-untracked b {\n  color: var(--warn) !important;\n}\n#electricnow-dashboard-embed .share-track {\n  height: 9px;\n  margin-top: 10px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .share-fill {\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--primary), var(--primary-2));\n}\n#electricnow-dashboard-embed .platform-share-card p {\n  margin: 8px 0 0;\n}\n#electricnow-dashboard-embed .compact-card {\n  padding: 10px;\n}\n#electricnow-dashboard-embed .compact-card header {\n  align-items: center;\n}\n#electricnow-dashboard-embed .compact-card b {\n  font-size: 20px;\n}\n#electricnow-dashboard-embed .coming-platforms {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n#electricnow-dashboard-embed .coming-platforms span {\n  margin-right: 4px;\n}\n#electricnow-dashboard-embed .coming-platforms em {\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--muted);\n  padding: 4px 9px;\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-note {\n  margin: 0 0 16px;\n}\n#electricnow-dashboard-embed .bar-list {\n  display: grid;\n  gap: 13px;\n}\n#electricnow-dashboard-embed .bar-row {\n  display: grid;\n  gap: 7px;\n}\n#electricnow-dashboard-embed .bar-row header {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n#electricnow-dashboard-embed .bar-row span {\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .bar-track {\n  height: 9px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .bar-fill {\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--primary), var(--primary-2));\n}\n#electricnow-dashboard-embed .table-wrap {\n  overflow-x: auto;\n  max-width: 100%;\n}\n#electricnow-dashboard-embed table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 520px;\n}\n#electricnow-dashboard-embed .title-table table {\n  min-width: 720px;\n}\n#electricnow-dashboard-embed th,\n#electricnow-dashboard-embed td {\n  border-bottom: 1px solid var(--border);\n  padding: 10px 8px;\n  text-align: left;\n  vertical-align: top;\n}\n#electricnow-dashboard-embed td {\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed td strong {\n  color: var(--text);\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .gap-list {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding-left: 18px;\n}\n#electricnow-dashboard-embed :focus-visible {\n  outline: 2px solid var(--primary-2);\n  outline-offset: 3px;\n}\n@media (max-width: 1180px) {\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto 1fr;\n  }\n#electricnow-dashboard-embed .sidebar {\n    position: static;\n    height: auto;\n    grid-row: auto;\n  }\n#electricnow-dashboard-embed .side-nav {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n#electricnow-dashboard-embed .source-card {\n    margin-top: 0;\n  }\n#electricnow-dashboard-embed .kpi-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n#electricnow-dashboard-embed .section-usage-list {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n\n}\n@media (max-width: 820px) {\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n    overflow-x: hidden;\n  }\n#electricnow-dashboard-embed .sidebar,\n#electricnow-dashboard-embed .topbar,\n#electricnow-dashboard-embed .main {\n    min-width: 0;\n    width: 100%;\n  }\n#electricnow-dashboard-embed .topbar,\n#electricnow-dashboard-embed .hero-panel,\n#electricnow-dashboard-embed .visit-strip,\n#electricnow-dashboard-embed .plain-panel {\n    grid-template-columns: 1fr;\n  }\n#electricnow-dashboard-embed .topbar {\n    align-items: stretch;\n  }\n#electricnow-dashboard-embed .topbar-actions {\n    justify-content: flex-start;\n  }\n#electricnow-dashboard-embed .kpi-group-header {\n    display: block;\n  }\n#electricnow-dashboard-embed .kpi-group-header > p {\n    margin-top: 8px;\n  }\n#electricnow-dashboard-embed .hero-meta {\n    justify-items: start;\n    text-align: left;\n  }\n#electricnow-dashboard-embed .main {\n    padding: 16px;\n  }\n#electricnow-dashboard-embed .kpi-grid,\n#electricnow-dashboard-embed .dashboard-grid,\n#electricnow-dashboard-embed .visit-card-grid,\n#electricnow-dashboard-embed .section-usage-list,\n#electricnow-dashboard-embed .side-nav {\n    grid-template-columns: 1fr;\n  }\n#electricnow-dashboard-embed .source-card {\n    max-width: 100%;\n  }\n#electricnow-dashboard-embed .span-4,\n#electricnow-dashboard-embed .span-6,\n#electricnow-dashboard-embed .span-8 {\n    grid-column: auto;\n  }\n\n\n}\n@media (max-width: 520px) {\n#electricnow-dashboard-embed .sidebar {\n    padding: 20px 16px;\n  }\n#electricnow-dashboard-embed .brand {\n    grid-template-columns: 48px minmax(0, 1fr);\n  }\n#electricnow-dashboard-embed .brand strong {\n    font-size: 23px;\n    letter-spacing: 0.18em;\n  }\n#electricnow-dashboard-embed .topbar-actions {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: stretch;\n  }\n#electricnow-dashboard-embed select,\n#electricnow-dashboard-embed .ghost-button {\n    width: 100%;\n    max-width: 100%;\n  }\n#electricnow-dashboard-embed .kpi-grid {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed /* ===== Google Ads section ===== */\n.google-ads-panel .panel-note {\n  margin-bottom: 14px;\n}\n#electricnow-dashboard-embed .google-ads-campaign {\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  justify-content: space-between;\n  align-items: flex-start;\n  border: 1px solid rgba(104, 183, 255, 0.22);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));\n  padding: 14px 16px;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card strong {\n  display: block;\n  margin-top: 4px;\n  font-family: var(--font-display);\n  font-size: 20px;\n  line-height: 1.1;\n  letter-spacing: 0.02em;\n  color: var(--text);\n}\n#electricnow-dashboard-embed .google-ads-campaign-card em {\n  display: block;\n  margin-top: 4px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .google-ads-campaign-meta {\n  text-align: right;\n  min-width: 160px;\n}\n#electricnow-dashboard-embed .google-ads-kpis {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin-bottom: 22px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .google-ads-kpis {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n\n}\n@media (max-width: 560px) {\n#electricnow-dashboard-embed .google-ads-kpis {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed .google-ads-split {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .google-ads-split {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed .google-ads-device-list,\n#electricnow-dashboard-embed .google-ads-action-list {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .google-ads-device-row,\n#electricnow-dashboard-embed .google-ads-action-row {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.62);\n  padding: 12px 14px;\n}\n#electricnow-dashboard-embed .google-ads-device-row header,\n#electricnow-dashboard-embed .google-ads-action-row header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .google-ads-device-row header span,\n#electricnow-dashboard-embed .google-ads-action-row header span {\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .google-ads-device-row header strong,\n#electricnow-dashboard-embed .google-ads-action-row header strong {\n  font-family: var(--font-display);\n  font-size: 18px;\n  letter-spacing: 0.02em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-device-row .share-track {\n  margin: 8px 0 8px;\n}\n#electricnow-dashboard-embed .google-ads-device-metrics {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 14px;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .google-ads-device-metrics em {\n  font-style: normal;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-action-row em {\n  display: block;\n  margin-top: 6px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-context {\n  margin-top: 6px;\n  padding: 12px 14px;\n  border-left: 3px solid var(--warn);\n  background: rgba(255, 200, 87, 0.06);\n  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;\n  color: var(--text);\n}\n\n";
  document.head.appendChild(style);

  // Replace the Squarespace mount with the dashboard markup.
  const mount = document.getElementById('electricnow-dashboard-hosted-mount');
  if (mount) {
    mount.outerHTML = "<div id=\"electricnow-dashboard-embed\" class=\"app-shell\">\n      <aside class=\"sidebar\" aria-label=\"Dashboard sections\">\n        <a class=\"brand\" href=\"#overview\" data-testid=\"link-overview\">\n          <svg class=\"brand-mark\" viewBox=\"0 0 48 48\" aria-hidden=\"true\">\n            <path d=\"M30 4 9 28h13l-4 16 22-26H27l3-14Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n            <path d=\"M27 12 15 26h11l-2 9 11-14H24l3-9Z\" fill=\"currentColor\" />\n          </svg>\n          <span><strong>Electric</strong><strong>NOW</strong><small>Growth dashboard</small></span>\n        </a>\n        <nav class=\"side-nav\">\n          <a href=\"#overview\" data-testid=\"nav-overview\">Overview</a>\n          <a href=\"#purchases\" data-testid=\"nav-purchases\">Purchases</a>\n          <a href=\"#live\" data-testid=\"nav-live\">Live TV</a>\n          <a href=\"#sections\" data-testid=\"nav-sections\">App sections</a>\n          <a href=\"#viewership\" data-testid=\"nav-viewership\">Viewership</a>\n          <a href=\"#titles\" data-testid=\"nav-titles\">Top titles</a>\n          <a href=\"#videos\" data-testid=\"nav-videos\">Top videos</a>\n          <a href=\"#platforms\" data-testid=\"nav-platforms\">Platforms</a>\n          <a href=\"#roku-app\" data-testid=\"nav-roku-app\">Roku app</a>\n          <a href=\"#funnel\" data-testid=\"nav-funnel\">App funnel</a>\n          <a href=\"#ads\" data-testid=\"nav-ads\">Ad signals</a>\n          <a href=\"#google-ads\" data-testid=\"nav-google-ads\">Google Ads</a>\n          <a href=\"#acquisition\" data-testid=\"nav-acquisition\">Acquisition</a>\n          <a href=\"#content\" data-testid=\"nav-content\">Content</a>\n        </nav>\n        <div class=\"source-card\">\n          <span>Source</span>\n          <strong>Internal GA4 pull</strong>\n          <p>Property 497892271. Reconcile with app-store, Amagi, ad-server, YouTube, and Meta reporting.</p>\n        </div>\n      </aside>\n\n      <header class=\"topbar\">\n        <div>\n          <p class=\"eyebrow\">Private snapshot</p>\n          <h1>ElectricNOW performance dashboard</h1>\n        </div>\n        <div class=\"topbar-actions\">\n          <label class=\"select-label\" for=\"period-select\">Period</label>\n          <select id=\"period-select\" data-testid=\"select-period\">\n            <option value=\"currentWeek\">Latest app usage</option>\n            <option value=\"weekToDate\">Apr 28-30 watch</option>\n          </select>\n          <button class=\"ghost-button refresh-button\" type=\"button\" id=\"refresh-data\" data-testid=\"button-refresh-data\">Update data</button>\n          <button class=\"ghost-button\" type=\"button\" id=\"plain-toggle\" data-testid=\"button-toggle-plain\">Plain English</button>\n          <span class=\"refresh-status\" id=\"refresh-status\" role=\"status\" aria-live=\"polite\"></span>\n        </div>\n      </header>\n\n      <main id=\"main\" class=\"main\" tabindex=\"-1\">\n        <section class=\"hero-panel\" id=\"overview\" aria-labelledby=\"overview-title\">\n          <div>\n            <p class=\"eyebrow\">Corrected metric framing</p>\n            <h2 id=\"overview-title\">Acquisition, app usage, viewing, and time are now separated.</h2>\n            <p>\n              The top scorecards now show which numbers are web acquisition, which are Apple/Android app-stream usage, which are actual viewing events, and which measure time spent across all GA4-tracked platforms.\n            </p>\n          </div>\n          <div class=\"hero-meta\">\n            <span id=\"generated-at\">Generated</span>\n            <strong id=\"source-label\">GA4 property 497892271</strong>\n          </div>\n        </section>\n\n        <section class=\"visit-strip\" id=\"visit-summary\" aria-label=\"Weekly and monthly visits\" data-testid=\"section-visit-summary\"></section>\n\n        <section class=\"plain-panel\" id=\"plain-panel\" aria-labelledby=\"plain-title\">\n          <div>\n            <p class=\"eyebrow\">Plain-English headlines</p>\n            <h2 id=\"plain-title\">What changed?</h2>\n          </div>\n          <ul id=\"insights-list\" role=\"list\" data-testid=\"list-insights\"></ul>\n        </section>\n\n        <section class=\"kpi-grid\" id=\"kpi-grid\" aria-label=\"Weekly scorecard\" data-testid=\"grid-kpis\"></section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-8\" aria-labelledby=\"traffic-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">App use and engagement</p>\n                <h2 id=\"traffic-title\">Daily app trend</h2>\n              </div>\n              <span class=\"period-chip\" id=\"trend-period\">Apr 14-30</span>\n            </div>\n            <div class=\"chart-legend\" aria-label=\"Daily trend legend\">\n              <span><i class=\"legend-swatch legend-blue\"></i>Blue line: app active users</span>\n              <span><i class=\"legend-swatch legend-green\"></i>Green line: app sessions (daily)</span>\n            </div>\n            <p class=\"chart-note\" id=\"trend-note\"></p>\n            <h3>Past seven days</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Daily traffic and engagement trend\" data-testid=\"chart-traffic\"></svg>\n            </div>\n            <h3>Past month</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"monthly-traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Monthly app traffic and engagement trend\" data-testid=\"chart-monthly-traffic\"></svg>\n            </div>\n          </article>\n          <article class=\"panel span-4\" id=\"purchases\" aria-labelledby=\"purchase-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Sales baseline</p>\n                <h2 id=\"purchase-title\">In-app purchases and revenue</h2>\n              </div>\n            </div>\n            <div id=\"sales-summary\" class=\"sales-summary\" data-testid=\"section-sales-summary\"></div>\n            <div id=\"purchase-summary\" class=\"purchase-summary\" data-testid=\"section-purchases\"></div>\n            <div class=\"mini-chart-wrap\">\n              <svg id=\"purchase-chart\" viewBox=\"0 0 420 160\" role=\"img\" aria-label=\"Daily in-app purchase trend\"></svg>\n            </div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"sections\" aria-labelledby=\"sections-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">App navigation</p>\n              <h2 id=\"sections-title\">Traffic and time by app section</h2>\n            </div>\n            <span class=\"period-chip\" id=\"section-usage-period\">Latest</span>\n          </div>\n          <p id=\"section-usage-note\" class=\"panel-note\"></p>\n          <div id=\"section-usage-list\" class=\"section-usage-list\" data-testid=\"section-app-sections\"></div>\n        </section>\n\n        <section class=\"dashboard-grid three-col\" id=\"live\" aria-labelledby=\"live-title\">\n          <article class=\"panel span-4\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Live channels</p>\n                <h2 id=\"live-title\">Live TV performance</h2>\n              </div>\n            </div>\n            <div id=\"live-summary\" class=\"metric-list\" data-testid=\"section-live\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"funnel\" aria-labelledby=\"funnel-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">New app funnel</p>\n                <h2 id=\"funnel-title\">Installs to viewing</h2>\n              </div>\n            </div>\n            <div id=\"funnel-list\" class=\"bar-list\" data-testid=\"section-funnel\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"ads\" aria-labelledby=\"ads-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Monetization proxy</p>\n                <h2 id=\"ads-title\">Ad event signals</h2>\n              </div>\n            </div>\n            <div id=\"ad-list\" class=\"bar-list\" data-testid=\"section-ads\"></div>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\" id=\"viewership\" aria-labelledby=\"viewership-title\">\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2 id=\"viewership-title\">Live channel usage</h2>\n              </div>\n              <span class=\"period-chip\" id=\"content-usage-period\">Latest</span>\n            </div>\n            <div id=\"live-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-live-usage-cards\"></div>\n            <h3>Top 10 Live channels</h3>\n            <div id=\"live-channel-table\" class=\"table-wrap title-table\" data-testid=\"table-live-channels\"></div>\n            <h3>Live usage by platform</h3>\n            <div id=\"live-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-live-platforms\"></div>\n            <h3>Live playback signals</h3>\n            <div id=\"live-playback-list\" class=\"bar-list\" data-testid=\"section-live-playback\"></div>\n            <p id=\"live-usage-note\" class=\"platform-note\"></p>\n          </article>\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2>On Demand usage</h2>\n              </div>\n            </div>\n            <div id=\"ondemand-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-ondemand-usage-cards\"></div>\n            <h3>On Demand usage by platform</h3>\n            <div id=\"ondemand-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-ondemand-platforms\"></div>\n            <p id=\"ondemand-usage-note\" class=\"platform-note\"></p>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-6\" id=\"platforms\" aria-labelledby=\"platform-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Measured audience by surface</p>\n                <h2 id=\"platform-title\">Where users are coming from</h2>\n              </div>\n              <span class=\"period-chip\" id=\"platform-mix-period\">Latest</span>\n            </div>\n            <h3>Audience by GA4 stream</h3>\n            <p id=\"surface-note\" class=\"panel-note\"></p>\n            <div id=\"surface-table\" class=\"table-wrap\" data-testid=\"table-surface-breakout\"></div>\n            <h3>Audience by app, web, and connected TV platform</h3>\n            <div id=\"platform-mix\" class=\"platform-mix\" data-testid=\"section-platform-mix\"></div>\n            <p id=\"platform-note\" class=\"platform-note\"></p>\n            <h3>Average time by platform</h3>\n            <p id=\"platform-time-note\" class=\"panel-note\"></p>\n            <div id=\"platform-time-table\" class=\"table-wrap\" data-testid=\"table-platform-time\"></div>\n            <div id=\"platform-table\" class=\"table-wrap\" data-testid=\"table-platform\"></div>\n          </article>\n          <article class=\"panel span-6\" id=\"acquisition\" aria-labelledby=\"acquisition-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Audience sources</p>\n                <h2 id=\"acquisition-title\">Top acquisition</h2>\n              </div>\n            </div>\n            <div id=\"acquisition-table\" class=\"table-wrap\" data-testid=\"table-acquisition\"></div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"roku-app\" aria-labelledby=\"roku-app-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Roku app report</p>\n              <h2 id=\"roku-app-title\">Roku App Engagement</h2>\n            </div>\n            <span class=\"period-chip\" id=\"roku-app-period\">Latest</span>\n          </div>\n          <p id=\"roku-app-note\" class=\"panel-note\"></p>\n          <div id=\"roku-app-summary\" class=\"usage-card-grid roku-engagement-grid\" data-testid=\"section-roku-app-engagement\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"content\" aria-labelledby=\"content-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">App screen activity and tracking health</p>\n              <h2 id=\"content-title\">Where people are active in the app</h2>\n            </div>\n          </div>\n          <p id=\"content-readout\" class=\"panel-note\"></p>\n          <p id=\"content-note\" class=\"panel-note\"></p>\n          <div id=\"content-table\" class=\"table-wrap\" data-testid=\"table-content\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"titles\" aria-labelledby=\"titles-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by program</p>\n              <h2 id=\"titles-title\">Top 50 watched shows and collections</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-title-period\">Latest</span>\n          </div>\n          <p id=\"top-title-note\" class=\"panel-note\"></p>\n          <div id=\"top-titles-table\" class=\"table-wrap title-table\" data-testid=\"table-top-titles\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"videos\" aria-labelledby=\"videos-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by individual video</p>\n              <h2 id=\"videos-title\">Top 50 individual videos played</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-video-period\">Latest</span>\n          </div>\n          <p id=\"top-video-note\" class=\"panel-note\"></p>\n          <div id=\"top-videos-table\" class=\"table-wrap title-table\" data-testid=\"table-top-videos\"></div>\n        </section>\n\n        <section class=\"panel google-ads-panel\" id=\"google-ads\" aria-labelledby=\"google-ads-title\" hidden>\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Paid acquisition efficiency</p>\n              <h2 id=\"google-ads-title\">Google Ads &mdash; Android App Campaign</h2>\n            </div>\n            <span class=\"period-chip\" id=\"google-ads-period\">Latest</span>\n          </div>\n          <p id=\"google-ads-note\" class=\"panel-note\"></p>\n          <div class=\"google-ads-campaign\" id=\"google-ads-campaign\" data-testid=\"google-ads-campaign\"></div>\n          <div class=\"usage-card-grid google-ads-kpis\" id=\"google-ads-kpis\" data-testid=\"google-ads-kpis\"></div>\n          <div class=\"google-ads-split\">\n            <div>\n              <h3>By device</h3>\n              <div id=\"google-ads-devices\" class=\"google-ads-device-list\" data-testid=\"google-ads-devices\"></div>\n            </div>\n            <div>\n              <h3>Conversion actions</h3>\n              <div id=\"google-ads-actions\" class=\"google-ads-action-list\" data-testid=\"google-ads-actions\"></div>\n            </div>\n          </div>\n          <p class=\"panel-note google-ads-context\" id=\"google-ads-plain\"></p>\n        </section>\n\n        <section class=\"panel gaps-panel\" aria-labelledby=\"gaps-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Developer follow-up</p>\n              <h2 id=\"gaps-title\">Measurement gaps to close</h2>\n            </div>\n          </div>\n          <ul id=\"gaps-list\" class=\"gap-list\" role=\"list\" data-testid=\"list-gaps\"></ul>\n        </section>\n\n      </main>\n    </div>";
  } else if (!document.getElementById('electricnow-dashboard-embed')) {
    const container = document.createElement('div');
    container.innerHTML = "<div id=\"electricnow-dashboard-embed\" class=\"app-shell\">\n      <aside class=\"sidebar\" aria-label=\"Dashboard sections\">\n        <a class=\"brand\" href=\"#overview\" data-testid=\"link-overview\">\n          <svg class=\"brand-mark\" viewBox=\"0 0 48 48\" aria-hidden=\"true\">\n            <path d=\"M30 4 9 28h13l-4 16 22-26H27l3-14Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n            <path d=\"M27 12 15 26h11l-2 9 11-14H24l3-9Z\" fill=\"currentColor\" />\n          </svg>\n          <span><strong>Electric</strong><strong>NOW</strong><small>Growth dashboard</small></span>\n        </a>\n        <nav class=\"side-nav\">\n          <a href=\"#overview\" data-testid=\"nav-overview\">Overview</a>\n          <a href=\"#purchases\" data-testid=\"nav-purchases\">Purchases</a>\n          <a href=\"#live\" data-testid=\"nav-live\">Live TV</a>\n          <a href=\"#sections\" data-testid=\"nav-sections\">App sections</a>\n          <a href=\"#viewership\" data-testid=\"nav-viewership\">Viewership</a>\n          <a href=\"#titles\" data-testid=\"nav-titles\">Top titles</a>\n          <a href=\"#videos\" data-testid=\"nav-videos\">Top videos</a>\n          <a href=\"#platforms\" data-testid=\"nav-platforms\">Platforms</a>\n          <a href=\"#roku-app\" data-testid=\"nav-roku-app\">Roku app</a>\n          <a href=\"#funnel\" data-testid=\"nav-funnel\">App funnel</a>\n          <a href=\"#ads\" data-testid=\"nav-ads\">Ad signals</a>\n          <a href=\"#google-ads\" data-testid=\"nav-google-ads\">Google Ads</a>\n          <a href=\"#acquisition\" data-testid=\"nav-acquisition\">Acquisition</a>\n          <a href=\"#content\" data-testid=\"nav-content\">Content</a>\n        </nav>\n        <div class=\"source-card\">\n          <span>Source</span>\n          <strong>Internal GA4 pull</strong>\n          <p>Property 497892271. Reconcile with app-store, Amagi, ad-server, YouTube, and Meta reporting.</p>\n        </div>\n      </aside>\n\n      <header class=\"topbar\">\n        <div>\n          <p class=\"eyebrow\">Private snapshot</p>\n          <h1>ElectricNOW performance dashboard</h1>\n        </div>\n        <div class=\"topbar-actions\">\n          <label class=\"select-label\" for=\"period-select\">Period</label>\n          <select id=\"period-select\" data-testid=\"select-period\">\n            <option value=\"currentWeek\">Latest app usage</option>\n            <option value=\"weekToDate\">Apr 28-30 watch</option>\n          </select>\n          <button class=\"ghost-button refresh-button\" type=\"button\" id=\"refresh-data\" data-testid=\"button-refresh-data\">Update data</button>\n          <button class=\"ghost-button\" type=\"button\" id=\"plain-toggle\" data-testid=\"button-toggle-plain\">Plain English</button>\n          <span class=\"refresh-status\" id=\"refresh-status\" role=\"status\" aria-live=\"polite\"></span>\n        </div>\n      </header>\n\n      <main id=\"main\" class=\"main\" tabindex=\"-1\">\n        <section class=\"hero-panel\" id=\"overview\" aria-labelledby=\"overview-title\">\n          <div>\n            <p class=\"eyebrow\">Corrected metric framing</p>\n            <h2 id=\"overview-title\">Acquisition, app usage, viewing, and time are now separated.</h2>\n            <p>\n              The top scorecards now show which numbers are web acquisition, which are Apple/Android app-stream usage, which are actual viewing events, and which measure time spent across all GA4-tracked platforms.\n            </p>\n          </div>\n          <div class=\"hero-meta\">\n            <span id=\"generated-at\">Generated</span>\n            <strong id=\"source-label\">GA4 property 497892271</strong>\n          </div>\n        </section>\n\n        <section class=\"visit-strip\" id=\"visit-summary\" aria-label=\"Weekly and monthly visits\" data-testid=\"section-visit-summary\"></section>\n\n        <section class=\"plain-panel\" id=\"plain-panel\" aria-labelledby=\"plain-title\">\n          <div>\n            <p class=\"eyebrow\">Plain-English headlines</p>\n            <h2 id=\"plain-title\">What changed?</h2>\n          </div>\n          <ul id=\"insights-list\" role=\"list\" data-testid=\"list-insights\"></ul>\n        </section>\n\n        <section class=\"kpi-grid\" id=\"kpi-grid\" aria-label=\"Weekly scorecard\" data-testid=\"grid-kpis\"></section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-8\" aria-labelledby=\"traffic-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">App use and engagement</p>\n                <h2 id=\"traffic-title\">Daily app trend</h2>\n              </div>\n              <span class=\"period-chip\" id=\"trend-period\">Apr 14-30</span>\n            </div>\n            <div class=\"chart-legend\" aria-label=\"Daily trend legend\">\n              <span><i class=\"legend-swatch legend-blue\"></i>Blue line: app active users</span>\n              <span><i class=\"legend-swatch legend-green\"></i>Green line: app sessions (daily)</span>\n            </div>\n            <p class=\"chart-note\" id=\"trend-note\"></p>\n            <h3>Past seven days</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Daily traffic and engagement trend\" data-testid=\"chart-traffic\"></svg>\n            </div>\n            <h3>Past month</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"monthly-traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Monthly app traffic and engagement trend\" data-testid=\"chart-monthly-traffic\"></svg>\n            </div>\n          </article>\n          <article class=\"panel span-4\" id=\"purchases\" aria-labelledby=\"purchase-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Sales baseline</p>\n                <h2 id=\"purchase-title\">In-app purchases and revenue</h2>\n              </div>\n            </div>\n            <div id=\"sales-summary\" class=\"sales-summary\" data-testid=\"section-sales-summary\"></div>\n            <div id=\"purchase-summary\" class=\"purchase-summary\" data-testid=\"section-purchases\"></div>\n            <div class=\"mini-chart-wrap\">\n              <svg id=\"purchase-chart\" viewBox=\"0 0 420 160\" role=\"img\" aria-label=\"Daily in-app purchase trend\"></svg>\n            </div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"sections\" aria-labelledby=\"sections-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">App navigation</p>\n              <h2 id=\"sections-title\">Traffic and time by app section</h2>\n            </div>\n            <span class=\"period-chip\" id=\"section-usage-period\">Latest</span>\n          </div>\n          <p id=\"section-usage-note\" class=\"panel-note\"></p>\n          <div id=\"section-usage-list\" class=\"section-usage-list\" data-testid=\"section-app-sections\"></div>\n        </section>\n\n        <section class=\"dashboard-grid three-col\" id=\"live\" aria-labelledby=\"live-title\">\n          <article class=\"panel span-4\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Live channels</p>\n                <h2 id=\"live-title\">Live TV performance</h2>\n              </div>\n            </div>\n            <div id=\"live-summary\" class=\"metric-list\" data-testid=\"section-live\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"funnel\" aria-labelledby=\"funnel-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">New app funnel</p>\n                <h2 id=\"funnel-title\">Installs to viewing</h2>\n              </div>\n            </div>\n            <div id=\"funnel-list\" class=\"bar-list\" data-testid=\"section-funnel\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"ads\" aria-labelledby=\"ads-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Monetization proxy</p>\n                <h2 id=\"ads-title\">Ad event signals</h2>\n              </div>\n            </div>\n            <div id=\"ad-list\" class=\"bar-list\" data-testid=\"section-ads\"></div>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\" id=\"viewership\" aria-labelledby=\"viewership-title\">\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2 id=\"viewership-title\">Live channel usage</h2>\n              </div>\n              <span class=\"period-chip\" id=\"content-usage-period\">Latest</span>\n            </div>\n            <div id=\"live-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-live-usage-cards\"></div>\n            <h3>Top 10 Live channels</h3>\n            <div id=\"live-channel-table\" class=\"table-wrap title-table\" data-testid=\"table-live-channels\"></div>\n            <h3>Live usage by platform</h3>\n            <div id=\"live-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-live-platforms\"></div>\n            <h3>Live playback signals</h3>\n            <div id=\"live-playback-list\" class=\"bar-list\" data-testid=\"section-live-playback\"></div>\n            <p id=\"live-usage-note\" class=\"platform-note\"></p>\n          </article>\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2>On Demand usage</h2>\n              </div>\n            </div>\n            <div id=\"ondemand-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-ondemand-usage-cards\"></div>\n            <h3>On Demand usage by platform</h3>\n            <div id=\"ondemand-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-ondemand-platforms\"></div>\n            <p id=\"ondemand-usage-note\" class=\"platform-note\"></p>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-6\" id=\"platforms\" aria-labelledby=\"platform-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Measured audience by surface</p>\n                <h2 id=\"platform-title\">Where users are coming from</h2>\n              </div>\n              <span class=\"period-chip\" id=\"platform-mix-period\">Latest</span>\n            </div>\n            <h3>Audience by GA4 stream</h3>\n            <p id=\"surface-note\" class=\"panel-note\"></p>\n            <div id=\"surface-table\" class=\"table-wrap\" data-testid=\"table-surface-breakout\"></div>\n            <h3>Audience by app, web, and connected TV platform</h3>\n            <div id=\"platform-mix\" class=\"platform-mix\" data-testid=\"section-platform-mix\"></div>\n            <p id=\"platform-note\" class=\"platform-note\"></p>\n            <h3>Average time by platform</h3>\n            <p id=\"platform-time-note\" class=\"panel-note\"></p>\n            <div id=\"platform-time-table\" class=\"table-wrap\" data-testid=\"table-platform-time\"></div>\n            <div id=\"platform-table\" class=\"table-wrap\" data-testid=\"table-platform\"></div>\n          </article>\n          <article class=\"panel span-6\" id=\"acquisition\" aria-labelledby=\"acquisition-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Audience sources</p>\n                <h2 id=\"acquisition-title\">Top acquisition</h2>\n              </div>\n            </div>\n            <div id=\"acquisition-table\" class=\"table-wrap\" data-testid=\"table-acquisition\"></div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"roku-app\" aria-labelledby=\"roku-app-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Roku app report</p>\n              <h2 id=\"roku-app-title\">Roku App Engagement</h2>\n            </div>\n            <span class=\"period-chip\" id=\"roku-app-period\">Latest</span>\n          </div>\n          <p id=\"roku-app-note\" class=\"panel-note\"></p>\n          <div id=\"roku-app-summary\" class=\"usage-card-grid roku-engagement-grid\" data-testid=\"section-roku-app-engagement\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"content\" aria-labelledby=\"content-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">App screen activity and tracking health</p>\n              <h2 id=\"content-title\">Where people are active in the app</h2>\n            </div>\n          </div>\n          <p id=\"content-readout\" class=\"panel-note\"></p>\n          <p id=\"content-note\" class=\"panel-note\"></p>\n          <div id=\"content-table\" class=\"table-wrap\" data-testid=\"table-content\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"titles\" aria-labelledby=\"titles-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by program</p>\n              <h2 id=\"titles-title\">Top 50 watched shows and collections</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-title-period\">Latest</span>\n          </div>\n          <p id=\"top-title-note\" class=\"panel-note\"></p>\n          <div id=\"top-titles-table\" class=\"table-wrap title-table\" data-testid=\"table-top-titles\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"videos\" aria-labelledby=\"videos-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by individual video</p>\n              <h2 id=\"videos-title\">Top 50 individual videos played</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-video-period\">Latest</span>\n          </div>\n          <p id=\"top-video-note\" class=\"panel-note\"></p>\n          <div id=\"top-videos-table\" class=\"table-wrap title-table\" data-testid=\"table-top-videos\"></div>\n        </section>\n\n        <section class=\"panel google-ads-panel\" id=\"google-ads\" aria-labelledby=\"google-ads-title\" hidden>\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Paid acquisition efficiency</p>\n              <h2 id=\"google-ads-title\">Google Ads &mdash; Android App Campaign</h2>\n            </div>\n            <span class=\"period-chip\" id=\"google-ads-period\">Latest</span>\n          </div>\n          <p id=\"google-ads-note\" class=\"panel-note\"></p>\n          <div class=\"google-ads-campaign\" id=\"google-ads-campaign\" data-testid=\"google-ads-campaign\"></div>\n          <div class=\"usage-card-grid google-ads-kpis\" id=\"google-ads-kpis\" data-testid=\"google-ads-kpis\"></div>\n          <div class=\"google-ads-split\">\n            <div>\n              <h3>By device</h3>\n              <div id=\"google-ads-devices\" class=\"google-ads-device-list\" data-testid=\"google-ads-devices\"></div>\n            </div>\n            <div>\n              <h3>Conversion actions</h3>\n              <div id=\"google-ads-actions\" class=\"google-ads-action-list\" data-testid=\"google-ads-actions\"></div>\n            </div>\n          </div>\n          <p class=\"panel-note google-ads-context\" id=\"google-ads-plain\"></p>\n        </section>\n\n        <section class=\"panel gaps-panel\" aria-labelledby=\"gaps-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Developer follow-up</p>\n              <h2 id=\"gaps-title\">Measurement gaps to close</h2>\n            </div>\n          </div>\n          <ul id=\"gaps-list\" class=\"gap-list\" role=\"list\" data-testid=\"list-gaps\"></ul>\n        </section>\n\n      </main>\n    </div>";
    document.body.appendChild(container.firstElementChild);
  }

  // Embedded data snapshot (overridden at runtime by hosted JSON fetch when available).
  window.ELECTRICNOW_DASHBOARD_DATA = {
    "generatedAt": "2026-07-10 15:20 PDT",
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
        "range": "Jun 22-Jun 28, 2026",
        "start": "2026-06-22",
        "end": "2026-06-28"
      },
      "baseline": {
        "label": "Previous 7 days",
        "range": "Jun 22-Jun 28, 2026",
        "start": "2026-06-22",
        "end": "2026-06-28"
      },
      "currentWeek": {
        "label": "Latest 7 complete days",
        "range": "Jun 29-Jul 5, 2026",
        "start": "2026-06-29",
        "end": "2026-07-05"
      },
      "weekToDate": {
        "label": "Current week to date (partial)",
        "range": "Jul 6-Jul 9, 2026",
        "start": "2026-07-06",
        "end": "2026-07-09",
        "partial": true,
        "completeDays": 4,
        "note": "Partial current week (Mon Jul 6 - Thu Jul 9, 2026); NOT a full Mon-Sun week. Jul 9 GA4 rows are still settling (its engagement rate reads low pending late-event attribution)."
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
        "activeUsers": 5797,
        "newUsers": 3082,
        "sessions": 11883,
        "engagedSessions": 9270,
        "engagementRate": 78.01060338298409,
        "screenPageViews": 32205,
        "eventCount": 998629,
        "userEngagementDuration": 17857621,
        "purchaseRevenue": 37.57
      },
      "baseline": {
        "activeUsers": 5797,
        "newUsers": 3082,
        "sessions": 11883,
        "engagedSessions": 9270,
        "engagementRate": 78.01060338298409,
        "screenPageViews": 32205,
        "eventCount": 998629,
        "userEngagementDuration": 17857621,
        "purchaseRevenue": 37.57
      },
      "currentWeek": {
        "activeUsers": 4158,
        "newUsers": 1519,
        "sessions": 10320,
        "engagedSessions": 8047,
        "engagementRate": 77.97480620155038,
        "screenPageViews": 29764,
        "eventCount": 976703,
        "userEngagementDuration": 21216690,
        "purchaseRevenue": 37.57
      },
      "weekToDate": {
        "activeUsers": 2482,
        "newUsers": 722,
        "sessions": 6308,
        "engagedSessions": 3706,
        "engagementRate": 58.75079264426125,
        "screenPageViews": 19042,
        "eventCount": 595894,
        "partial": true,
        "days": 4,
        "note": "Jul 6-9, 2026 partial (4 days), GA4 property 497892271. Engagement rate is depressed by Jul 9's still-settling rows (Jul 6-8 held 76.4%/78.3%/79.7%); it will rise as Jul 9 attribution completes. Complete-week comparisons remain on Jun 29-Jul 5 vs Jun 22-28."
      }
    },
    "scorecards": [
      {
        "key": "platformActiveUsers",
        "label": "Platform active users",
        "baseline": 5282,
        "launchBaseline": 8710,
        "previousWeek": 5203,
        "current": 3564,
        "deltaPct": -31.501057,
        "deltaVsLaunchPct": -59.081515,
        "deltaVsPreviousPct": -31.501057,
        "deltaType": "percent",
        "format": "number",
        "context": "GA4 active users excluding landing-page acquisition paths."
      },
      {
        "key": "platformSessions",
        "label": "Platform sessions",
        "baseline": 10925,
        "launchBaseline": 13323,
        "previousWeek": 10990,
        "current": 9427,
        "deltaPct": -14.22202,
        "deltaVsLaunchPct": -29.242663,
        "deltaVsPreviousPct": -14.22202,
        "deltaType": "percent",
        "format": "number",
        "context": "GA4 sessions excluding landing-page acquisition paths."
      },
      {
        "key": "viewingEventUsers",
        "label": "Viewing event users",
        "baseline": 2410,
        "launchBaseline": 1152,
        "previousWeek": 1726,
        "current": 1349,
        "deltaPct": -21.84241,
        "deltaVsLaunchPct": 17.100694,
        "deltaVsPreviousPct": -21.84241,
        "deltaType": "percent",
        "format": "number",
        "context": "Users who triggered on-demand video_start or Live play events."
      },
      {
        "key": "totalEngagementHours",
        "label": "Total engaged hours",
        "baseline": 4792.675,
        "launchBaseline": 3652.9975,
        "previousWeek": 4960.450278,
        "current": 5893.525,
        "deltaPct": 18.810283,
        "deltaVsLaunchPct": 61.333946,
        "deltaVsPreviousPct": 18.810283,
        "deltaType": "percent",
        "format": "number",
        "context": "Total GA4 engaged time (property 497892271) for Jun 29-Jul 5, 2026, converted to hours - refreshed this run and UP +18.8% vs Jun 22-28. Fewer users and sessions this week, but the audience that stayed spent more time, so total attention rose; engagement rate held steady (~78%) with no classification anomaly."
      },
      {
        "key": "avgEngagedMinutesPerUser",
        "label": "Avg time per user",
        "baseline": 48.938138,
        "launchBaseline": 25.164161882893225,
        "previousWeek": 51.341559,
        "current": 85.043651,
        "deltaPct": 65.642907,
        "deltaVsLaunchPct": 237.955428,
        "deltaVsPreviousPct": 65.642907,
        "deltaType": "minutes",
        "format": "minutes",
        "context": "Total GA4 engaged time (Jun 29-Jul 5, 2026, property 497892271) divided by active users, excluding landing-page paths - refreshed this run and UP vs Jun 22-28. Time-per-user rose sharply because engaged time grew while active users fell; engagement rate stayed healthy near 78%."
      },
      {
        "key": "landingPageUsers",
        "label": "Landing-page users",
        "baseline": 744,
        "launchBaseline": 1045,
        "previousWeek": 594,
        "current": 594,
        "deltaPct": 0.0,
        "deltaVsLaunchPct": -43.157895,
        "deltaVsPreviousPct": 0.0,
        "deltaType": "percent",
        "format": "number",
        "context": "Users reaching pages with “landing” in the path."
      },
      {
        "key": "devicesPageUsers",
        "label": "Devices-page users",
        "baseline": 131,
        "launchBaseline": 2028,
        "previousWeek": 60,
        "current": 60,
        "deltaPct": 0.0,
        "deltaVsLaunchPct": -97.04142,
        "deltaVsPreviousPct": 0.0,
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
        "deltaPct": null,
        "deltaVsLaunchPct": 264.253394,
        "deltaVsPreviousPct": null,
        "deltaType": "percent",
        "format": "number",
        "context": "People using the Apple/iOS or Android app streams (GA4 property 497892271, streams 12950551103 + 12982344897); Apple TV is not yet split from the Apple/iOS stream. Value shown is the last good stream-level reading (week of Jun 8-14). The stream-level app-usage source was not refreshed in this run, so the vs-previous-7-days comparison is unavailable (not 0%).",
        "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run.",
        "comparisonUnavailable": true
      },
      {
        "key": "appSessions",
        "label": "App stream sessions",
        "baseline": 8832,
        "launchBaseline": 2889,
        "previousWeek": 8832,
        "current": 8832,
        "deltaPct": null,
        "deltaVsLaunchPct": 205.711319,
        "deltaVsPreviousPct": null,
        "deltaType": "percent",
        "format": "number",
        "context": "GA4 sessions on the Apple/iOS and Android app streams (property 497892271, streams 12950551103 + 12982344897). Value shown is the last good stream-level reading (week of Jun 8-14). The stream-level app-usage source was not refreshed in this run, so the vs-previous-7-days comparison is unavailable (not 0%).",
        "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run.",
        "comparisonUnavailable": true
      },
      {
        "key": "appEngagementRate",
        "label": "App stream engagement rate",
        "baseline": 78.53266767961797,
        "launchBaseline": 59.70126848307439,
        "previousWeek": 78.53266767961797,
        "current": 78.53266767961797,
        "deltaPct": null,
        "deltaVsLaunchPct": 31.542712,
        "deltaVsPreviousPct": null,
        "deltaType": "points",
        "format": "percent",
        "context": "Engaged app-stream sessions divided by app-stream sessions (GA4 property 497892271, streams 12950551103 + 12982344897). Value shown is the last good stream-level reading (week of Jun 8-14); the stream-level source was not refreshed in this run, so the vs-previous-7-days comparison is unavailable (not 0%). The property-level engaged-session rate for the current week (Jun 22-28) is reported in the weekly engagement scorecards, where an isolated Sunday Jun 28 GA4 engaged-session classification anomaly (engagedSessions 702 of 2,339) briefly depressed the rate - not a real engagement collapse: active users, sessions, views and time-spent (+1.8%) all held up or rose that day.",
        "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run.",
        "comparisonUnavailable": true
      },
      {
        "key": "viewingEventUsers",
        "label": "Viewing event users",
        "baseline": 2410,
        "launchBaseline": 1152,
        "previousWeek": 1726,
        "current": 1349,
        "deltaPct": -21.84241,
        "deltaVsLaunchPct": 17.100694,
        "deltaVsPreviousPct": -21.84241,
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
        "previousWeek": 222,
        "current": 344,
        "deltaPct": 54.954955,
        "deltaVsLaunchPct": 57.077626,
        "deltaVsPreviousPct": 54.954955,
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
        "previousWeek": 26144,
        "current": 23803,
        "deltaPct": -8.954253,
        "deltaVsLaunchPct": 124.789876,
        "deltaVsPreviousPct": -8.954253,
        "deltaType": "percent",
        "format": "number",
        "context": "Total ad request events generated by viewing activity."
      },
      {
        "key": "avgEngagedMinutesPerUser",
        "label": "Avg time per user",
        "baseline": 48.938138,
        "launchBaseline": 25.164161882893225,
        "previousWeek": 51.341559,
        "current": 85.043651,
        "deltaPct": 65.642907,
        "deltaVsLaunchPct": 237.955428,
        "deltaVsPreviousPct": 65.642907,
        "deltaType": "minutes",
        "format": "minutes",
        "context": "Total GA4 engaged time (Jun 29-Jul 5, 2026, property 497892271) divided by active users, excluding landing-page paths - refreshed this run and UP vs Jun 22-28. Time-per-user rose sharply because engaged time grew while active users fell; engagement rate stayed healthy near 78%."
      },
      {
        "key": "avgEngagedMinutesPerSession",
        "label": "Avg time per session",
        "baseline": 24.332417,
        "launchBaseline": 16.45123845980635,
        "previousWeek": 25.046454,
        "current": 34.26468,
        "deltaPct": 36.804515,
        "deltaVsLaunchPct": 108.280246,
        "deltaVsPreviousPct": 36.804515,
        "deltaType": "minutes",
        "format": "minutes",
        "context": "Total GA4 engaged time (Jun 22-Jun 28, 2026) divided by sessions - refreshed this run. Down slightly (~-2.8%) only because sessions grew faster (+4.7%) than total engaged time (+1.8%); total time and time-per-user still improved. The GA4 engaged-session rate is separately affected by the Jun 28 classification anomaly, not a real retention drop."
      },
      {
        "key": "totalEngagementHours",
        "label": "Total engaged hours",
        "baseline": 4792.675,
        "launchBaseline": 3652.9975,
        "previousWeek": 4960.450278,
        "current": 5893.525,
        "deltaPct": 18.810283,
        "deltaVsLaunchPct": 61.333946,
        "deltaVsPreviousPct": 18.810283,
        "deltaType": "percent",
        "format": "number",
        "context": "Total GA4 engaged time (property 497892271) for Jun 29-Jul 5, 2026, converted to hours - refreshed this run and UP +18.8% vs Jun 22-28. Fewer users and sessions this week, but the audience that stayed spent more time, so total attention rose; engagement rate held steady (~78%) with no classification anomaly."
      }
    ],
    "trend": [
      {
        "date": "Jun 29",
        "rawDate": "20260629",
        "activeUsers": 961,
        "newUsers": null,
        "sessions": 1619,
        "engagedSessions": 1266,
        "screenPageViews": 4073,
        "eventCount": 144209,
        "engagementRate": 78.1964175416924
      },
      {
        "date": "Jun 30",
        "rawDate": "20260630",
        "activeUsers": 776,
        "newUsers": null,
        "sessions": 1408,
        "engagedSessions": 1069,
        "screenPageViews": 3733,
        "eventCount": 138438,
        "engagementRate": 75.92329545454545
      },
      {
        "date": "Jul 1",
        "rawDate": "20260701",
        "activeUsers": 714,
        "newUsers": null,
        "sessions": 1341,
        "engagedSessions": 1046,
        "screenPageViews": 3704,
        "eventCount": 131297,
        "engagementRate": 78.00149142431022
      },
      {
        "date": "Jul 2",
        "rawDate": "20260702",
        "activeUsers": 768,
        "newUsers": null,
        "sessions": 1424,
        "engagedSessions": 1083,
        "screenPageViews": 3929,
        "eventCount": 135267,
        "engagementRate": 76.05337078651685
      },
      {
        "date": "Jul 3",
        "rawDate": "20260703",
        "activeUsers": 790,
        "newUsers": null,
        "sessions": 1404,
        "engagedSessions": 1079,
        "screenPageViews": 3882,
        "eventCount": 133289,
        "engagementRate": 76.85185185185185
      },
      {
        "date": "Jul 4",
        "rawDate": "20260704",
        "activeUsers": 922,
        "newUsers": null,
        "sessions": 1792,
        "engagedSessions": 1429,
        "screenPageViews": 5647,
        "eventCount": 152908,
        "engagementRate": 79.74330357142857
      },
      {
        "date": "Jul 5",
        "rawDate": "20260705",
        "activeUsers": 770,
        "newUsers": null,
        "sessions": 1554,
        "engagedSessions": 1223,
        "screenPageViews": 4796,
        "eventCount": 141295,
        "engagementRate": 78.7001287001287
      }
    ],
    "eventCards": [
      {
        "event": "in_app_purchase",
        "label": "In-app purchases",
        "baseline": 0,
        "current": 2,
        "weekToDate": 2,
        "deltaPct": null,
        "activeUsersCurrent": 2
      },
      {
        "event": "application_install",
        "label": "Application installs",
        "baseline": 4452,
        "current": 1531,
        "weekToDate": 1531,
        "deltaPct": -65.610961,
        "activeUsersCurrent": 1324
      },
      {
        "event": "first_open",
        "label": "First opens",
        "baseline": 3699,
        "current": 830,
        "weekToDate": 830,
        "deltaPct": -77.561503,
        "activeUsersCurrent": 827
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
        "current": 283279,
        "weekToDate": 283279,
        "deltaPct": 8.162213,
        "activeUsersCurrent": 763
      },
      {
        "event": "play",
        "label": "Play events",
        "baseline": 57320,
        "current": 47143,
        "weekToDate": 47143,
        "deltaPct": -17.75471,
        "activeUsersCurrent": 1363
      },
      {
        "event": "video_start",
        "label": "Video starts",
        "baseline": 20510,
        "current": 19437,
        "weekToDate": 19437,
        "deltaPct": -5.231594,
        "activeUsersCurrent": 1349
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
        "current": 5038,
        "weekToDate": 5038,
        "deltaPct": 48.569743,
        "activeUsersCurrent": 344
      },
      {
        "event": "ads_request",
        "label": "Ad requests",
        "baseline": 23365,
        "current": 23803,
        "weekToDate": 23803,
        "deltaPct": 1.874599,
        "activeUsersCurrent": 250
      },
      {
        "event": "ads_impression",
        "label": "In-app ad impressions",
        "baseline": 31800,
        "current": 34940,
        "weekToDate": 34940,
        "deltaPct": 9.874214,
        "activeUsersCurrent": 248
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
          "activeUsers": 1434,
          "newUsers": null,
          "sessions": 4756,
          "engagedSessions": 3630,
          "screenPageViews": 25712,
          "eventCount": 771746,
          "engagementRate": 76.324643
        },
        "activeUsersDeltaPct": -31.024531,
        "engagementRateCurrent": 76.324643
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
          "activeUsers": 1670,
          "newUsers": null,
          "sessions": 3001,
          "engagedSessions": 2415,
          "screenPageViews": 986,
          "eventCount": 99690,
          "engagementRate": 80.473176
        },
        "activeUsersDeltaPct": -34.867395,
        "engagementRateCurrent": 80.473176
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
          "activeUsers": 1055,
          "newUsers": null,
          "sessions": 2556,
          "engagedSessions": 1985,
          "screenPageViews": 3066,
          "eventCount": 105267,
          "engagementRate": 77.660407
        },
        "activeUsersDeltaPct": -67.80592,
        "engagementRateCurrent": 77.660407
      }
    ],
    "platformMix": [
      {
        "platform": "iOS",
        "deviceCategory": "mobile",
        "operatingSystem": "iOS",
        "activeUsers": 1312,
        "sessions": 2219,
        "engagedSessions": 1735,
        "engagementRate": 78.188373,
        "eventCount": 51563,
        "totalEngagementSeconds": 2213272
      },
      {
        "platform": "web",
        "deviceCategory": "smart tv",
        "operatingSystem": "(not set)",
        "activeUsers": 1133,
        "sessions": 3684,
        "engagedSessions": 2953,
        "engagementRate": 80.157438,
        "eventCount": 724768,
        "totalEngagementSeconds": 8504893
      },
      {
        "platform": "Android",
        "deviceCategory": "mobile",
        "operatingSystem": "Android",
        "activeUsers": 789,
        "sessions": 1851,
        "engagedSessions": 1349,
        "engagementRate": 72.879525,
        "eventCount": 53054,
        "totalEngagementSeconds": 1180777
      },
      {
        "platform": "iOS",
        "deviceCategory": "tablet",
        "operatingSystem": "iOS",
        "activeUsers": 251,
        "sessions": 524,
        "engagedSessions": 453,
        "engagementRate": 86.450382,
        "eventCount": 21161,
        "totalEngagementSeconds": 1424826
      },
      {
        "platform": "web",
        "deviceCategory": "desktop",
        "operatingSystem": "(not set)",
        "activeUsers": 208,
        "sessions": 910,
        "engagedSessions": 568,
        "engagementRate": 62.417582,
        "eventCount": 41931,
        "totalEngagementSeconds": 821574
      },
      {
        "platform": "Android",
        "deviceCategory": "smart tv",
        "operatingSystem": "Android",
        "activeUsers": 196,
        "sessions": 533,
        "engagedSessions": 501,
        "engagementRate": 93.996248,
        "eventCount": 43994,
        "totalEngagementSeconds": 3490003
      },
      {
        "platform": "iOS",
        "deviceCategory": "smart tv",
        "operatingSystem": "iOS",
        "activeUsers": 107,
        "sessions": 258,
        "engagedSessions": 227,
        "engagementRate": 87.984496,
        "eventCount": 26966,
        "totalEngagementSeconds": 3444531
      },
      {
        "platform": "web",
        "deviceCategory": "mobile",
        "operatingSystem": "(not set)",
        "activeUsers": 75,
        "sessions": 101,
        "engagedSessions": 63,
        "engagementRate": 62.376238,
        "eventCount": 1694,
        "totalEngagementSeconds": 12720
      },
      {
        "platform": "Android",
        "deviceCategory": "tablet",
        "operatingSystem": "Android",
        "activeUsers": 70,
        "sessions": 172,
        "engagedSessions": 135,
        "engagementRate": 78.488372,
        "eventCount": 8219,
        "totalEngagementSeconds": 106733
      },
      {
        "platform": "web",
        "deviceCategory": "tablet",
        "operatingSystem": "(not set)",
        "activeUsers": 18,
        "sessions": 61,
        "engagedSessions": 46,
        "engagementRate": 75.409836,
        "eventCount": 3353,
        "totalEngagementSeconds": 17361
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
      "Partial current week (Jul 6-9, 2026, first 4 days): early traffic is running at a healthy daily pace while attention and Roku usage are climbing; visible sales are flat. Over Jul 6-9 GA4 (property 497892271) shows 2,482 active users, 722 new users, 6,308 sessions and 19,042 screen/page views across 4 days - a per-day pace slightly above the last complete week. Engagement rate reads 58.75% for the partial, but that is dragged down by Jul 9's still-settling rows (Jul 6-8 held 76-80%); it will rise as Jul 9 attribution completes. The latest complete-week comparison stays Jun 29-Jul 5 (4,158 active users, 77.97% engagement) vs Jun 22-28. Attention/use is UP: the newest Roku App Engagement report (Jul 2-Jul 8) shows 239 new installs (was 197), 340 avg daily viewers (was 286) and 3,777 total hours streamed (was 2,993). Sales are flat - no net-new visible purchases this run (Stripe had no new charges since Jun 27, Roku no new sales beyond the Jun 30 bundle, Apple unchanged), so visible platform sales hold at 67 purchases / $1,244.33 gross ($1,056.05 developer rev share). Paid acquisition: Meta was scaled to almost nothing (Jul 2-8: $40.80 spend, 23 iOS installs at $1.77; -97% spend), an efficiency signal only - not proof of viewing or ROAS; Google Ads returned zero rows for Jul 6-9 (no active spend), preserved as last-good. YouTube (a separate channel, NOT platform sales): the Jul 6-9 partial shows 59,961 views and ~$764 estimated ad revenue over 4 days, with the complete-week Jun 29-Jul 5 total (175,840 views) held above; YouTube daily rows lag and will settle upward.",
      "Traffic: measured platform visits (GA4 sessions, landing-excluded) were 9,427 in the current complete week (Jun 29-Jul 5, 2026), down about 14.2% vs the previous 7 days (10,990 for Jun 22-28); platform active users were 3,564, down about 31.5%. Property-wide GA4 sessions were 10,320 (-13.2%) and active users 4,158 (-28.3%). Acquisition pulled back sharply this week.",
      "Engagement: GA4 engagement rate held steady and healthy at 77.97% (vs 78.01%) with no Jun 28-style classification anomaly. Even though user and session counts fell, total engagement time ROSE +18.8% to about 5,894 hours (userEngagementDuration 21,216,690s) - the smaller audience watched more per person. Time per active user rose to ~85 min and time per session to ~34 min.",
      "Sales: visible platform sales grew to 67 purchases / $1,244.33 gross ($1,056.05 developer rev share) after one net-new Roku sale (Jun 30 Purchase Bundle 55, $54.99 / $43.99 dev share). Apple is preserved at 22 / $362.78 gross (est net $253.90) and Stripe at 24 / $484.76 (connector disconnected this run, last-good preserved, not zeroed). Visible sales are Stripe + Roku + manual Apple only, not total ElectricNOW sales.",
      "Paid acquisition (Meta, Jul 2-Jul 8, 2026): spend collapsed to $40.80 (-97.3%) buying just 23 iOS installs (-97.5%) at $1.77 each on 2,539 impressions and 251 link clicks (CPC $0.15, -55.8%). The campaign was almost fully paused; 55-64 ($1.39) and 65+ ($1.65) were the most efficient bands, 18-24 produced 0 installs.",
      "Google Ads connector responded for Jul 6-9, 2026 with zero campaign rows (no active paid spend in the window) - recorded as connected/no-current-rows, not a failure; last-good values are preserved, not zeroed.",
      "YouTube (a separate channel, NOT platform sales): the Jul 6-9, 2026 partial shows 59,961 views and ~$764 estimated ad revenue over 4 days; the complete week Jun 29-Jul 5 remains 175,840 views (+11.9%) and ~$2,582 est ad revenue. YouTube daily rows lag a few days, so partial totals will settle upward.",
      "Roku app engagement (Jul 10 report, covers Jul 2-Jul 8): 239 new installs, 133 uninstalls (net +106), 289,318 cumulative installs, 340 avg daily viewers, 95.30 avg min/viewer, 3,777 total hours streamed - up across the board vs the prior report (Jun 27-Jul 3) and tracked separately from GA4.",
      "Ad-impression grain: distinguish paid-campaign impressions (41,285 Meta ad impressions) from in-app ad impressions (GA4 ads_impression, 34,940 this week) and from YouTube ad impressions (782,494) - three different things.",
      "Landing-page traffic is acquisition-only and is NOT included in platform audience totals; this keeps measured platform audience clean of marketing-page hits.",
      "Tracking caveat: GA4 does not cleanly identify every smart-TV surface, and Stripe, Roku, Apple, Google Play and ad-server revenue are separate systems, so visible platform sales are a floor, not total ElectricNOW sales, and no true ROAS is claimed (ad-server revenue attribution unavailable)."
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
      "sourceDetail": "This combines Stripe-visible payments, Roku-visible sales from Roku email reports, and manual Apple App Store screenshot snapshots. Stripe totals 24/$484.76 (connector responded Jul 10, 2026 with no new in-window charges; preserved), Roku 21/$396.79, Apple 22/$362.78. Google Play and other sources may still be missing, so this is a floor, not total sales.",
      "stripe": {
        "sourceLabel": "Stripe-visible payments",
        "sourceDetail": "This shows Stripe-visible sales from the connected electricnow.tv account (acct_1HZdStLG0Cw1zW4e). Reconnected 2026-06-18. Re-queried 2026-07-10: the connector responded, but there are no new succeeded charges since the last recorded one (latest succeeded charge is Jun 27, 2026), so the Stripe total is unchanged at 24 succeeded 2026 charges / $484.76.",
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
        "note": "Stripe is DISCONNECTED this run; last-good total (24 succeeded 2026 charges / $484.76) is preserved, not zeroed. Add Apple App Store and Google Play reports before treating this as total sales. Needs reconnect to resume fresh pulls.",
        "connectorStatus": "DISCONNECTED_PRESERVED",
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
        },
        "staleNote": "Stripe connector was DISCONNECTED for the Jun 29-Jul 5, 2026 run. Last-good totals (24 succeeded 2026 charges / $484.76) are preserved, not zeroed. Needs reconnect to resume."
      },
      "roku": {
        "sourceLabel": "Roku-visible sales",
        "sourceDetail": "Roku-visible sales come from emailed Roku Sales Activity Reports. The Jun 8 report added Jun 4 and Jun 7 purchases. These are not total ElectricNOW sales.",
        "reportEmailDate": "2026-07-06T14:04:00+00:00",
        "reportGenerated": "July 6, 2026 7:04 AM PDT",
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
          "range": "Jan 1-Jun 30, 2026",
          "purchases": 21,
          "purchaseRevenue": 396.79,
          "developerRevShare": 317.39,
          "revenuePerPurchase": 18.89,
          "payments": [
            {
              "date": "Jun 30",
              "createdAt": "2026-06-30",
              "amount": 54.99,
              "developerRevShare": 43.99,
              "description": "Roku - Purchase Bundle 55",
              "source": "Roku"
            },
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
          "range": "Jun 22-Jun 28, 2026",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 11.99,
          "revenuePerPurchase": 14.99,
          "deltaPurchasesPct": null,
          "deltaRevenuePct": null,
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
        "thisWeek": {
          "label": "Roku sales this week",
          "range": "Jun 29-Jul 5, 2026",
          "purchases": 1,
          "purchaseRevenue": 54.99,
          "developerRevShare": 43.99,
          "revenuePerPurchase": 54.99,
          "deltaPurchasesPct": 0.0,
          "deltaRevenuePct": 266.844563,
          "payments": [
            {
              "date": "Jun 30",
              "createdAt": "2026-06-30",
              "amount": 54.99,
              "developerRevShare": 43.99,
              "description": "Roku - Purchase Bundle 55",
              "source": "Roku"
            }
          ]
        },
        "currentCompleteWeek": {
          "label": "Roku sales this week",
          "range": "Jun 29-Jul 5, 2026",
          "purchases": 1,
          "purchaseRevenue": 54.99,
          "developerRevShare": 43.99,
          "revenuePerPurchase": 54.99,
          "deltaPurchasesPct": 0.0,
          "deltaRevenuePct": 266.844563,
          "payments": [
            {
              "date": "Jun 30",
              "createdAt": "2026-06-30",
              "amount": 54.99,
              "developerRevShare": 43.99,
              "description": "Roku - Purchase Bundle 55",
              "source": "Roku"
            }
          ]
        },
        "weekToDate": {
          "label": "Roku sales this week",
          "range": "Jun 29-Jul 5, 2026",
          "purchases": 1,
          "purchaseRevenue": 54.99,
          "developerRevShare": 43.99,
          "revenuePerPurchase": 54.99,
          "deltaPurchasesPct": 0.0,
          "deltaRevenuePct": 266.844563,
          "payments": [
            {
              "date": "Jun 30",
              "createdAt": "2026-06-30",
              "amount": 54.99,
              "developerRevShare": 43.99,
              "description": "Roku - Purchase Bundle 55",
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
            "purchases": 4,
            "purchaseRevenue": 184.96
          }
        ],
        "recentPayments": [
          {
            "date": "Jun 30",
            "createdAt": "2026-06-30",
            "amount": 54.99,
            "developerRevShare": 43.99,
            "description": "Roku - Purchase Bundle 55",
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
          },
          {
            "date": "Jun 30",
            "rawDate": "20260630",
            "purchases": 1,
            "purchaseRevenue": 54.99,
            "developerRevShare": 43.99
          }
        ],
        "note": "Roku-visible sales from the latest emailed Sales Activity Report (generated Jul 6, 2026). Year to date: 21 purchases / $396.79 gross (dev rev share $317.39). | Jul 6, 2026 report adds Jun 30 Purchase Bundle 55 ($54.99 gross / $43.99 developer rev share); rows through Jun 27 were already recorded and are not double-counted."
      },
      "apple": {
        "sourceLabel": "Apple App Store manual snapshot",
        "sourceDetail": "Apple App Store in-app purchase snapshot manually entered from App Store Connect screenshots. Gross customer sales are shown; estimated net assumes Apple keeps 30% before remittance. This remains a manual source until Apple App Store Connect API reporting is connected.",
        "isManualSnapshot": true,
        "snapshotRange": "Jun 29-Jul 5, 2026",
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
          "range": "Jun 29-Jul 5, 2026",
          "purchases": 2,
          "purchaseRevenue": 29.98,
          "developerRevShare": 20.98,
          "revenuePerPurchase": 14.99,
          "payments": [
            {
              "date": "Jul 2",
              "createdAt": "2026-07-02",
              "amount": 14.99,
              "developerRevShare": 10.49,
              "description": "Apple - Purchase HD 15",
              "source": "Apple"
            },
            {
              "date": "Jul 5",
              "createdAt": "2026-07-05",
              "amount": 14.99,
              "developerRevShare": 10.49,
              "description": "Apple - Purchase HD 15",
              "source": "Apple"
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
          "range": "Jan 1-Jul 5, 2026",
          "purchases": 22,
          "purchaseRevenue": 362.78,
          "developerRevShare": 253.9,
          "revenuePerPurchase": 16.49,
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
            },
            {
              "date": "Jul 2",
              "amount": 14.99,
              "description": "Apple App Store - Purchase HD 15",
              "source": "Apple App Store"
            },
            {
              "date": "Jul 5",
              "amount": 14.99,
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
          },
          {
            "date": "Jul 2",
            "rawDate": "20260702",
            "purchases": 1,
            "purchaseRevenue": 14.99,
            "developerRevShare": 10.49
          },
          {
            "date": "Jul 5",
            "rawDate": "20260705",
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
            "purchases": 14,
            "purchaseRevenue": 209.86,
            "developerRevShare": 146.87
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
        "note": "Apple App Store screenshots are manually entered from App Store Connect; estimated net assumes Apple's 30% platform fee. Jul 6, 2026 adds two Purchase HD 15 sales (Jul 2 and Jul 5, $14.99 each) from the Jun 29-Jul 5, 2026 screenshots; the Jun 30 Purchase HD 3 ($2.99) shown in the same screenshot was already recorded Jul 2 and is not double-counted. Cumulative Apple sales are now 22 purchases / $362.78 gross (est net $253.90). These figures remain manual until Apple App Store Connect API reporting is connected.",
        "latestSalesSnapshot": {
          "period": "Jun 29-Jul 5, 2026",
          "start": "2026-06-29",
          "end": "2026-07-05",
          "purchases": 2,
          "purchaseRevenue": 29.98,
          "alreadyIncludedInCumulative": true,
          "note": "Latest Apple App Store Connect screenshots (Jun 29-Jul 5, 2026) show two new Purchase HD 15 sales on Jul 2 and Jul 5 ($14.99 each, est net $10.49) = $29.98 gross (est net $20.98). The Jun 30 Purchase HD 3 ($2.99) in the same screenshot was already recorded Jul 2, 2026 and is not double-counted. Added Jul 6, 2026, lifting cumulative Apple to 22/$362.80 gross (est net $253.90)."
        }
      },
      "sourceBreakout": [
        {
          "source": "Stripe",
          "purchases": 24,
          "purchaseRevenue": 484.76,
          "developerRevShare": 484.76,
          "detail": "Stripe-visible title/bundle sales (24/$484.76). Connector DISCONNECTED this run; last-good preserved, not zeroed. Stripe full take shown as developer rev share."
        },
        {
          "source": "Roku",
          "purchases": 21,
          "purchaseRevenue": 396.79,
          "developerRevShare": 317.39,
          "detail": "Roku-visible sales; Jul 6, 2026 Sales Activity Report adds Jun 30 Purchase Bundle 55 ($54.99 gross / $43.99 dev rev share). Earlier sales preserved."
        },
        {
          "source": "Apple App Store",
          "purchases": 22,
          "purchaseRevenue": 362.78,
          "developerRevShare": 253.9,
          "detail": "Manual Apple App Store snapshot. Jul 6, 2026 screenshots add two Jul 2 and Jul 5 Purchase HD 15 ($14.99 each) = $29.98 gross; the Jun 30 Purchase HD 3 ($2.99) was already recorded Jul 2 and is not double-counted. Earlier sales preserved."
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
        "range": "Jan 1-Jul 5, 2026",
        "purchases": 67,
        "purchaseRevenue": 1244.33,
        "developerRevShare": 1056.05,
        "revenuePerPurchase": 18.57
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
        "range": "Jun 29-Jul 5, 2026",
        "purchases": 3,
        "purchaseRevenue": 84.97,
        "developerRevShare": 64.97,
        "revenuePerPurchase": 28.32,
        "payments": [
          {
            "date": "Jun 30",
            "createdAt": "2026-06-30",
            "amount": 54.99,
            "developerRevShare": 43.99,
            "description": "Roku - Purchase Bundle 55",
            "source": "Roku"
          },
          {
            "date": "Jul 2",
            "createdAt": "2026-07-02",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple - Purchase HD 15",
            "source": "Apple"
          },
          {
            "date": "Jul 5",
            "createdAt": "2026-07-05",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple - Purchase HD 15",
            "source": "Apple"
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
        "range": "Jun 29-Jul 5, 2026",
        "purchases": 3,
        "purchaseRevenue": 84.97,
        "developerRevShare": 64.97,
        "revenuePerPurchase": 28.32,
        "payments": [
          {
            "date": "Jun 30",
            "createdAt": "2026-06-30",
            "amount": 54.99,
            "developerRevShare": 43.99,
            "description": "Roku - Purchase Bundle 55",
            "source": "Roku"
          },
          {
            "date": "Jul 2",
            "createdAt": "2026-07-02",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple - Purchase HD 15",
            "source": "Apple"
          },
          {
            "date": "Jul 5",
            "createdAt": "2026-07-05",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple - Purchase HD 15",
            "source": "Apple"
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
      "note": "Visible platform sales show 67 purchases and $1,244.33 year to date ($1,056.05 developer rev share), combining Stripe-visible payments, Roku-visible sales, and the manual Apple App Store snapshot. This run added one net-new Roku sale (Jun 30 Purchase Bundle 55, $54.99). Stripe is DISCONNECTED this run - its last-good total (24 charges / $484.76) is preserved, not zeroed. Still not total ElectricNOW sales: Google Play is separate and Apple is a manual snapshot. YouTube is a separate channel (estimated YouTube ad revenue only) and is NOT included here."
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
      "freshnessNote": "No fresh GA4 app-screen source in the Jun 29-Jul 5, 2026 run; values preserved from the last complete window where a clean app-screen export was available."
    },
    "titleViewership": {
      "period": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)",
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
      "freshnessNote": "No fresh GA4 app-screen source in the Jun 29-Jul 5, 2026 run; values preserved from the last complete window where a clean app-screen export was available."
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
      "freshnessNote": "No fresh GA4 app-screen source in the Jun 29-Jul 5, 2026 run; values preserved from the last complete window where a clean app-screen export was available."
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
        "range": "Preserved · last fresh Jun 1-Jun 7, 2026 (no fresh source this run)",
        "totalGa4ActiveUsers": 7608,
        "totalGa4Sessions": 13911,
        "totalGa4EngagementRate": 78.16835597728416,
        "landingPageUsers": 606,
        "landingPageSessions": 909,
        "paidSocialUsers": 2436,
        "paidSocialSessions": 3360
      },
      "currentWeek": {
        "range": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)",
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
          "range": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)",
          "activeUsers": 744,
          "newUsers": null,
          "sessions": 1080,
          "engagedSessions": 996,
          "engagementRate": 92.22222222222223,
          "screenPageViews": 1448,
          "eventCount": 2457
        },
        "previousWeek": {
          "range": "Preserved · last fresh Jun 1-Jun 7, 2026 (no fresh source this run)",
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
        "range": "Preserved · last fresh Jun 1-Jun 7, 2026 (no fresh source this run)",
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
        "range": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)",
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
            "previousWeek": 5203,
            "current": 3564,
            "deltaPct": -31.501057,
            "deltaVsLaunchPct": -59.081515,
            "deltaVsPreviousPct": -31.501057,
            "deltaType": "percent",
            "format": "number",
            "context": "GA4 active users excluding landing-page acquisition paths."
          },
          {
            "key": "platformSessions",
            "label": "Platform sessions",
            "baseline": 10925,
            "launchBaseline": 13323,
            "previousWeek": 10990,
            "current": 9427,
            "deltaPct": -14.22202,
            "deltaVsLaunchPct": -29.242663,
            "deltaVsPreviousPct": -14.22202,
            "deltaType": "percent",
            "format": "number",
            "context": "GA4 sessions excluding landing-page acquisition paths."
          },
          {
            "key": "viewingEventUsers",
            "label": "Viewing event users",
            "baseline": 2410,
            "launchBaseline": 1152,
            "previousWeek": 1726,
            "current": 1349,
            "deltaPct": -21.84241,
            "deltaVsLaunchPct": 17.100694,
            "deltaVsPreviousPct": -21.84241,
            "deltaType": "percent",
            "format": "number",
            "context": "Users who triggered on-demand video_start or Live play events."
          },
          {
            "key": "totalEngagementHours",
            "label": "Total engaged hours",
            "baseline": 4792.675,
            "launchBaseline": 3652.9975,
            "previousWeek": 4960.450278,
            "current": 5893.525,
            "deltaPct": 18.810283,
            "deltaVsLaunchPct": 61.333946,
            "deltaVsPreviousPct": 18.810283,
            "deltaType": "percent",
            "format": "number",
            "context": "Total GA4 engaged time (property 497892271) for Jun 29-Jul 5, 2026, converted to hours - refreshed this run and UP +18.8% vs Jun 22-28. Fewer users and sessions this week, but the audience that stayed spent more time, so total attention rose; engagement rate held steady (~78%) with no classification anomaly."
          },
          {
            "key": "avgEngagedMinutesPerUser",
            "label": "Avg time per user",
            "baseline": 48.938138,
            "launchBaseline": 25.164161882893225,
            "previousWeek": 51.341559,
            "current": 85.043651,
            "deltaPct": 65.642907,
            "deltaVsLaunchPct": 237.955428,
            "deltaVsPreviousPct": 65.642907,
            "deltaType": "minutes",
            "format": "minutes",
            "context": "Total GA4 engaged time (Jun 29-Jul 5, 2026, property 497892271) divided by active users, excluding landing-page paths - refreshed this run and UP vs Jun 22-28. Time-per-user rose sharply because engaged time grew while active users fell; engagement rate stayed healthy near 78%."
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
            "previousWeek": 594,
            "current": 594,
            "deltaPct": 0.0,
            "deltaVsLaunchPct": -43.157895,
            "deltaVsPreviousPct": 0.0,
            "deltaType": "percent",
            "format": "number",
            "context": "Users reaching pages with “landing” in the path."
          },
          {
            "key": "devicesPageUsers",
            "label": "Devices-page users",
            "baseline": 131,
            "launchBaseline": 2028,
            "previousWeek": 60,
            "current": 60,
            "deltaPct": 0.0,
            "deltaVsLaunchPct": -97.04142,
            "deltaVsPreviousPct": 0.0,
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
            "deltaPct": null,
            "deltaVsLaunchPct": 264.253394,
            "deltaVsPreviousPct": null,
            "deltaType": "percent",
            "format": "number",
            "context": "People using the Apple/iOS or Android app streams (GA4 property 497892271, streams 12950551103 + 12982344897); Apple TV is not yet split from the Apple/iOS stream. Value shown is the last good stream-level reading (week of Jun 8-14). The stream-level app-usage source was not refreshed in this run, so the vs-previous-7-days comparison is unavailable (not 0%).",
            "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run.",
            "comparisonUnavailable": true
          },
          {
            "key": "appSessions",
            "label": "App stream sessions",
            "baseline": 8832,
            "launchBaseline": 2889,
            "previousWeek": 8832,
            "current": 8832,
            "deltaPct": null,
            "deltaVsLaunchPct": 205.711319,
            "deltaVsPreviousPct": null,
            "deltaType": "percent",
            "format": "number",
            "context": "GA4 sessions on the Apple/iOS and Android app streams (property 497892271, streams 12950551103 + 12982344897). Value shown is the last good stream-level reading (week of Jun 8-14). The stream-level app-usage source was not refreshed in this run, so the vs-previous-7-days comparison is unavailable (not 0%).",
            "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run.",
            "comparisonUnavailable": true
          },
          {
            "key": "appEngagementRate",
            "label": "App stream engagement rate",
            "baseline": 78.53266767961797,
            "launchBaseline": 59.70126848307439,
            "previousWeek": 78.53266767961797,
            "current": 78.53266767961797,
            "deltaPct": null,
            "deltaVsLaunchPct": 31.542712,
            "deltaVsPreviousPct": null,
            "deltaType": "points",
            "format": "percent",
            "context": "Engaged app-stream sessions divided by app-stream sessions (GA4 property 497892271, streams 12950551103 + 12982344897). Value shown is the last good stream-level reading (week of Jun 8-14); the stream-level source was not refreshed in this run, so the vs-previous-7-days comparison is unavailable (not 0%). The property-level engaged-session rate for the current week (Jun 22-28) is reported in the weekly engagement scorecards, where an isolated Sunday Jun 28 GA4 engaged-session classification anomaly (engagedSessions 702 of 2,339) briefly depressed the rate - not a real engagement collapse: active users, sessions, views and time-spent (+1.8%) all held up or rose that day.",
            "currentSourceNote": "Preserved: no fresh GA4 source for this metric in the Jun 8-14 run.",
            "comparisonUnavailable": true
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
            "previousWeek": 1726,
            "current": 1349,
            "deltaPct": -21.84241,
            "deltaVsLaunchPct": 17.100694,
            "deltaVsPreviousPct": -21.84241,
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
            "previousWeek": 222,
            "current": 344,
            "deltaPct": 54.954955,
            "deltaVsLaunchPct": 57.077626,
            "deltaVsPreviousPct": 54.954955,
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
            "previousWeek": 26144,
            "current": 23803,
            "deltaPct": -8.954253,
            "deltaVsLaunchPct": 124.789876,
            "deltaVsPreviousPct": -8.954253,
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
            "previousWeek": 51.341559,
            "current": 85.043651,
            "deltaPct": 65.642907,
            "deltaVsLaunchPct": 237.955428,
            "deltaVsPreviousPct": 65.642907,
            "deltaType": "minutes",
            "format": "minutes",
            "context": "Total GA4 engaged time (Jun 29-Jul 5, 2026, property 497892271) divided by active users, excluding landing-page paths - refreshed this run and UP vs Jun 22-28. Time-per-user rose sharply because engaged time grew while active users fell; engagement rate stayed healthy near 78%."
          },
          {
            "key": "avgEngagedMinutesPerSession",
            "label": "Avg time per session",
            "baseline": 24.332417,
            "launchBaseline": 16.45123845980635,
            "previousWeek": 25.046454,
            "current": 34.26468,
            "deltaPct": 36.804515,
            "deltaVsLaunchPct": 108.280246,
            "deltaVsPreviousPct": 36.804515,
            "deltaType": "minutes",
            "format": "minutes",
            "context": "Total GA4 engaged time (Jun 22-Jun 28, 2026) divided by sessions - refreshed this run. Down slightly (~-2.8%) only because sessions grew faster (+4.7%) than total engaged time (+1.8%); total time and time-per-user still improved. The GA4 engaged-session rate is separately affected by the Jun 28 classification anomaly, not a real retention drop."
          },
          {
            "key": "totalEngagementHours",
            "label": "Total engaged hours",
            "baseline": 4792.675,
            "launchBaseline": 3652.9975,
            "previousWeek": 4960.450278,
            "current": 5893.525,
            "deltaPct": 18.810283,
            "deltaVsLaunchPct": 61.333946,
            "deltaVsPreviousPct": 18.810283,
            "deltaType": "percent",
            "format": "number",
            "context": "Total GA4 engaged time (property 497892271) for Jun 29-Jul 5, 2026, converted to hours - refreshed this run and UP +18.8% vs Jun 22-28. Fewer users and sessions this week, but the audience that stayed spent more time, so total attention rose; engagement rate held steady (~78%) with no classification anomaly."
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
        "range": "Jun 22-Jun 28, 2026",
        "platformActiveUsers": 5203,
        "platformSessions": 10990,
        "platformEngagedSessions": 8455,
        "platformEventCount": 996620,
        "platformEngagementRate": 76.933576,
        "platformEngagementSeconds": 17857621,
        "platformEngagementHours": 4960.450278,
        "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition. Platform audience = property-wide GA4 (property 497892271) minus /landing acquisition paths. NOTE: landing offset is last-good/estimated (landing breakdown not re-pulled this run; top_pages export remains a truncated preview). Engaged-time uses property-wide userEngagementDuration (fresh this run); landing-page engaged time is not separable, so platform engaged seconds/hours are not landing-adjusted."
      },
      "currentWeek": {
        "range": "Jun 29-Jul 5, 2026",
        "platformActiveUsers": 3564,
        "platformSessions": 9427,
        "platformEngagedSessions": 7232,
        "platformEventCount": 974694,
        "platformEngagementRate": 76.715816,
        "platformEngagementSeconds": 21216690,
        "platformEngagementHours": 5893.525,
        "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only in Web Acquisition. Platform audience = property-wide GA4 (property 497892271) minus /landing acquisition paths. NOTE: landing offset is last-good/estimated (landing breakdown not re-pulled this run; top_pages export remains a truncated preview). Engaged-time uses property-wide userEngagementDuration (fresh this run); landing-page engaged time is not separable, so platform engaged seconds/hours are not landing-adjusted.",
        "methodologyNote": "Excludes landing-page acquisition paths. Platform audience = property-wide GA4 (property 497892271) minus /landing acquisition paths.",
        "engagementRateCaveat": "Sunday Jun 28 shows a low engagementRate/engagedSessions classification despite high users/sessions/views/time. Use engagement duration, app_time, user_engagement and play/video events as the primary attention signals; engagedSessions/engagementRate this week are potentially inconsistent and should NOT be read as a real retention collapse."
      }
    },
    "weeklyTrend": [
      {
        "date": "Jun 29",
        "rawDate": "20260629",
        "activeUsers": 961,
        "newUsers": null,
        "sessions": 1619,
        "engagedSessions": 1266,
        "screenPageViews": 4073,
        "eventCount": 144209,
        "engagementRate": 78.1964175416924
      },
      {
        "date": "Jun 30",
        "rawDate": "20260630",
        "activeUsers": 776,
        "newUsers": null,
        "sessions": 1408,
        "engagedSessions": 1069,
        "screenPageViews": 3733,
        "eventCount": 138438,
        "engagementRate": 75.92329545454545
      },
      {
        "date": "Jul 1",
        "rawDate": "20260701",
        "activeUsers": 714,
        "newUsers": null,
        "sessions": 1341,
        "engagedSessions": 1046,
        "screenPageViews": 3704,
        "eventCount": 131297,
        "engagementRate": 78.00149142431022
      },
      {
        "date": "Jul 2",
        "rawDate": "20260702",
        "activeUsers": 768,
        "newUsers": null,
        "sessions": 1424,
        "engagedSessions": 1083,
        "screenPageViews": 3929,
        "eventCount": 135267,
        "engagementRate": 76.05337078651685
      },
      {
        "date": "Jul 3",
        "rawDate": "20260703",
        "activeUsers": 790,
        "newUsers": null,
        "sessions": 1404,
        "engagedSessions": 1079,
        "screenPageViews": 3882,
        "eventCount": 133289,
        "engagementRate": 76.85185185185185
      },
      {
        "date": "Jul 4",
        "rawDate": "20260704",
        "activeUsers": 922,
        "newUsers": null,
        "sessions": 1792,
        "engagedSessions": 1429,
        "screenPageViews": 5647,
        "eventCount": 152908,
        "engagementRate": 79.74330357142857
      },
      {
        "date": "Jul 5",
        "rawDate": "20260705",
        "activeUsers": 770,
        "newUsers": null,
        "sessions": 1554,
        "engagedSessions": 1223,
        "screenPageViews": 4796,
        "eventCount": 141295,
        "engagementRate": 78.7001287001287
      }
    ],
    "monthlyTrend": [
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
      },
      {
        "date": "Jun 29",
        "rawDate": "20260629",
        "activeUsers": 961,
        "newUsers": null,
        "sessions": 1619,
        "engagedSessions": 1266,
        "screenPageViews": 4073,
        "eventCount": 144209,
        "engagementRate": 78.1964175416924
      },
      {
        "date": "Jun 30",
        "rawDate": "20260630",
        "activeUsers": 776,
        "newUsers": null,
        "sessions": 1408,
        "engagedSessions": 1069,
        "screenPageViews": 3733,
        "eventCount": 138438,
        "engagementRate": 75.92329545454545
      },
      {
        "date": "Jul 1",
        "rawDate": "20260701",
        "activeUsers": 714,
        "newUsers": null,
        "sessions": 1341,
        "engagedSessions": 1046,
        "screenPageViews": 3704,
        "eventCount": 131297,
        "engagementRate": 78.00149142431022
      },
      {
        "date": "Jul 2",
        "rawDate": "20260702",
        "activeUsers": 768,
        "newUsers": null,
        "sessions": 1424,
        "engagedSessions": 1083,
        "screenPageViews": 3929,
        "eventCount": 135267,
        "engagementRate": 76.05337078651685
      },
      {
        "date": "Jul 3",
        "rawDate": "20260703",
        "activeUsers": 790,
        "newUsers": null,
        "sessions": 1404,
        "engagedSessions": 1079,
        "screenPageViews": 3882,
        "eventCount": 133289,
        "engagementRate": 76.85185185185185
      },
      {
        "date": "Jul 4",
        "rawDate": "20260704",
        "activeUsers": 922,
        "newUsers": null,
        "sessions": 1792,
        "engagedSessions": 1429,
        "screenPageViews": 5647,
        "eventCount": 152908,
        "engagementRate": 79.74330357142857
      },
      {
        "date": "Jul 5",
        "rawDate": "20260705",
        "activeUsers": 770,
        "newUsers": null,
        "sessions": 1554,
        "engagedSessions": 1223,
        "screenPageViews": 4796,
        "eventCount": 141295,
        "engagementRate": 78.7001287001287
      }
    ],
    "appSectionUsage": {
      "period": "Preserved · last fresh Jun 8-Jun 14, 2026 (no fresh source this run)",
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
      "reportPeriod": "Jul 2-Jul 8, 2026",
      "rawReportPeriod": "Jul 2-Jul 8, 2026 (generated Jul 10)",
      "channelStoreCode": "us",
      "reportGenerated": "July 10, 2026 at 6:50 AM PDT",
      "dateLabels": [
        "Thu Jul 2",
        "Fri Jul 3",
        "Sat Jul 4",
        "Sun Jul 5",
        "Mon Jul 6",
        "Tue Jul 7",
        "Wed Jul 8"
      ],
      "metrics": {
        "newInstalls": 239,
        "uninstalls": 133,
        "netInstalls": 106,
        "cumulativeInstalls": 289318,
        "avgDailyViewers": 340,
        "avgMinPerViewer": 95.3,
        "totalHoursStreamed": 3777
      },
      "reportEmailDate": "2026-07-10T13:50:18+00:00",
      "attachmentFilename": "App_Engagement_2026-07-10T0650.pdf",
      "note": "Roku TRC Live Dashboard reports are intentionally excluded from app/platform usage to avoid mixing Roku Channel live-stream consumption with ElectricNOW app engagement.",
      "status": "CURRENT_PARSED",
      "staleNote": "Jul 10, 2026 Roku App Engagement report (covers Jul 2-Jul 8, 2026) parsed from the ROKU Outlook folder. Engagement rose vs the prior report: installs 239 (was 197), avg daily viewers 340 (was 286), total hours 3,777 (was 2,993). TRC / Viewership Summary (live) reports remain excluded from app/platform usage.",
      "lastSuccessfulReportPeriod": "Jul 2-Jul 8, 2026",
      "previousReportPeriod": "Jun 27-Jul 3, 2026",
      "previousMetrics": {
        "newInstalls": 197,
        "uninstalls": 137,
        "netInstalls": 60,
        "cumulativeInstalls": 289138,
        "avgDailyViewers": 286,
        "avgMinPerViewer": 89.73,
        "totalHoursStreamed": 2993
      }
    },
    "visitSummary": {
      "source": "GA4 sessions on tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths.",
      "weekly": {
        "label": "Weekly visits",
        "range": "Jun 29-Jul 5, 2026",
        "sessions": 9427,
        "activeUsers": 3564,
        "engagedSessions": 7232,
        "previousRange": "Jun 22-Jun 28, 2026",
        "previousSessions": 10990,
        "deltaVsPreviousPct": -14.22202,
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
        "comparisonLabel": "vs prior 28 days",
        "asOfNote": "Most recent fully reconciled 28-day window (through Jun 14, 2026). visitSummary figures are landing-excluded; the 28-day landing-excluded aggregation was not re-pulled in the latest weekly refreshes, so this window lags the weekly window (Jun 22-28) and is preserved as last-good rather than recomputed. The +2.3% delta compares it against the preceding 28 days (Apr 20-May 17, 2026)."
      },
      "note": "Visits are GA4 sessions, not unique people. Weekly visits use the current complete reporting week (Jun 29-Jul 5, 2026) and compare against the previous 7 complete days (Jun 22-28). Monthly visits show the most recent fully reconciled 28-day window (May 18-Jun 14, 2026) compared against the preceding 28 days; this window lags the weekly window because the 28-day landing-excluded figure was not re-pulled this run. Landing-page traffic remains acquisition-only and is not included here."
    },
    "manualAppleSalesUpdate": {
      "updatedAt": "2026-07-06T14:31:00+00:00",
      "source": "manual_apple_sales.json updated Jul 6, 2026 with Jul 2 and Jul 5 Purchase HD 15 ($14.99 each); Jun 30 Purchase HD 3 ($2.99) already recorded Jul 2, not re-added; preserved across refresh",
      "totalManualAppleEntries": 16,
      "note": "16 manual entries; Jul 6, 2026 adds Jul 2 and Jul 5 (Purchase HD 15 $14.99 each) from the Jun 29-Jul 5, 2026 Apple Connect screenshots (net-new $29.98 gross / $20.98 est net). The Jun 30 Purchase HD 3 ($2.99) in the same screenshot was already recorded Jul 2 and is deduped by stable id (0 net-new)."
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
      "dataFreshnessNote": "Google Ads connector returned NO rows for the current complete week (Jun 29-Jul 5, 2026); the manager/client retry was permission-denied. Last-good figures are preserved, not zeroed.",
      "statusDetail": "No current-week rows for Jun 29-Jul 5, 2026 (customer 4342267711 empty; manager retry permission denied).",
      "lastSuccessfulPull": "2026-06-11 14:40 PDT",
      "staleNote": "Jun 29-Jul 5 pull returned no rows / retry permission-denied. Preserving last-good Google Ads values rather than zeroing. Needs a successful pull next run to restore current spend/conversions and a Meta-vs-Google comparison.",
      "latestQueryPeriod": "Jul 6-Jul 9, 2026",
      "latestQueryStatus": "CONNECTED_NO_ROWS",
      "latestQueryNote": "Google Ads connector responded for Jul 6-9, 2026 (customer 4342267711) with zero campaign rows - no active paid spend in the window. Recorded as connected/no-current-rows, not a failure or rate-limit. The campaign summary shown is preserved last-good (Jun 1-7, 2026), not zeroed."
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
        "note": "Google Ads connector responded for Jul 6-9, 2026 with zero campaign rows (no active spend in the window) - recorded as connected/no-current-rows, not a failure. Last-good values (May 12-26, 2026 campaign) are preserved, not zeroed.",
        "status": "connected_no_current_rows"
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
        "note": "Meta spent only $40.80 for Jul 2-Jul 8, 2026 (-97.3% vs the prior period) on a single iOS-only campaign driving 23 iOS installs at $1.77 each (CPC $0.15). The campaign was almost fully paused this week. Treat as an acquisition-efficiency signal only. Paid-campaign impressions (2,539) are distinct from in-app GA4 ad impressions.",
        "reportedPlatformDownloads": 1,
        "metaAppInstallsFromBreakdown": 1174
      },
      "period": "Jul 2-Jul 8, 2026 for Meta email report; Google Ads connector responded for Jul 6-9, 2026 with zero campaign rows (no active spend in-window); last-good preserved",
      "verdict": "acceptable but needs proof of viewing",
      "plainEnglish": "Paid acquisition verdict: efficiency signal only, not a viewing/ROAS proof this run. Meta (Jul 2-Jul 8, 2026) was scaled to almost nothing - $40.80 spend (-97.3%) driving 23 iOS installs (-97.5%) at $1.77 each; CPC improved to $0.15 (-55.8%) but cost per install rose +9.6%, with 55-64 ($1.39) and 65+ ($1.65) the most efficient bands and 18-24 producing 0 installs. Google Ads returned zero rows for Jul 6-9 (no active spend); connected/no-current-rows, last-good preserved, not zeroed. Distinguish paid-campaign impressions (2,539 Meta) from in-app GA4 ad impressions. Spend reliably buys free iOS installs but there is no proof they become viewers or buyers; we do NOT claim true ROAS.",
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
      "emailSubject": "ElectricNow | Meta Ads Performance Report (2026-07-02 to 2026-07-08)",
      "emailDate": "2026-07-09T13:31:07+00:00",
      "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAPLZ0ZHAAA=",
      "reportLink": "https://app.forgeonemarketing.com/r/28800a13-6c1d-4562-8614-872d80ec8c80",
      "reportCadence": "Twice weekly (Sundays and Thursdays at 6am PST/PDT), each report covers Last 7 days",
      "period": "Jul 2-Jul 8, 2026",
      "periodStart": "2026-07-02",
      "periodEnd": "2026-07-08",
      "comparison": "vs prior Meta report period (Jun 28-Jul 4, 2026)",
      "spend": 40.8,
      "impressions": 2539,
      "linkClicks": 251,
      "costPerClick": 0.15,
      "iosDownloads": 23,
      "androidDownloads": 0,
      "totalDownloads": 23,
      "costPerIosDownload": 1.77,
      "costPerAndroidDownload": null,
      "costPerDownload": 1.77,
      "ctrPct": 9.8858,
      "deltas": {
        "spendPct": -97.3,
        "impressionsPct": -97.3,
        "linkClicksPct": -94.3,
        "costPerClickPct": -55.8,
        "iosDownloadsPct": -97.5,
        "costPerIosDownloadPct": 9.6,
        "comparisonNote": "Deltas vs prior Meta report period (Jun 28-Jul 4, 2026)."
      },
      "campaigns": [
        {
          "campaign": "PCSM - ElectricNow App - iOS - June 2026",
          "spend": 40.8,
          "appInstalls": 23,
          "costPerAppInstall": 1.77
        }
      ],
      "genderBreakdown": [
        {
          "gender": "male",
          "spend": 30.47,
          "costPerAppInstall": 1.6,
          "appInstalls": 19
        },
        {
          "gender": "female",
          "spend": 10.07,
          "costPerAppInstall": 2.52,
          "appInstalls": 4
        },
        {
          "gender": "unknown",
          "spend": 0.26,
          "costPerAppInstall": null,
          "appInstalls": 0
        }
      ],
      "ageBreakdown": [
        {
          "ageGroup": "65+",
          "spend": 14.85,
          "costPerAppInstall": 1.65,
          "appInstalls": 9
        },
        {
          "ageGroup": "55-64",
          "spend": 12.48,
          "costPerAppInstall": 1.39,
          "appInstalls": 9
        },
        {
          "ageGroup": "45-54",
          "spend": 6.98,
          "costPerAppInstall": 3.49,
          "appInstalls": 2
        },
        {
          "ageGroup": "35-44",
          "spend": 3.56,
          "costPerAppInstall": 1.78,
          "appInstalls": 2
        },
        {
          "ageGroup": "25-34",
          "spend": 2.42,
          "costPerAppInstall": 2.42,
          "appInstalls": 1
        },
        {
          "ageGroup": "18-24",
          "spend": 0.51,
          "costPerAppInstall": null,
          "appInstalls": 0
        }
      ],
      "plainEnglish": "Meta's newest numeric report covers Jul 2-Jul 8, 2026: just $40.80 spent on the single iOS-only campaign (PCSM - ElectricNow App - iOS - June 2026) drove 23 iOS app installs at $1.77 each on 2,539 impressions and 251 link clicks (CPC $0.15). Spend (-97.3%), impressions (-97.3%) and iOS installs (-97.5%) all collapsed versus the prior report period (Jun 28-Jul 4) - the campaign was almost fully paused this week. CPC improved to $0.15 (-55.8%) but cost per iOS install edged up to $1.77 (+9.6%). 55-64 ($1.39) and 65+ ($1.65) remained the most efficient bands; 18-24 produced 0 installs. This is an acquisition-efficiency signal only, not proof of viewing or ROAS.",
      "paidAcquisitionInterpretation": "PAID ACQUISITION ASSESSMENT (Meta, Jul 2-Jul 8, 2026). Meta was scaled to almost nothing this week: $40.80 spend (-97.3%) bought 23 free iOS installs (-97.5%) at $1.77 each. CPC improved to $0.15 but cost per install rose slightly (+9.6%). With spend near zero, Meta is effectively paused, so it is not currently a growth driver; there is still no proof that paid installs become viewers or buyers, so we do NOT claim true ROAS. Google Ads returned zero rows for the same window (no active spend); last-good campaign values are preserved. Judge growth from GA4 usage and visible sales, not from paid-install counts.",
      "threadId": "AAQkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOAAQAIBt6Dqvj9JKvIVO2AKlKos=",
      "reportedPlatformDownloads": 23,
      "blendedCostPerReportedDownload": 1.77,
      "metaAppInstallsFromBreakdown": 23,
      "downloadGrainNote": "iOS installs 23 (Android 0) match the breakdown tables (gender 19+4+0 = 23; age 9+9+2+2+1+0 = 23). Paid acquisition buys FREE app installs, not paid downloads; these installs are a distinct grain from visible platform sales and from in-app ad impressions."
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
      "capturedAt": "2026-07-06 07:31 PDT",
      "enteredAt": "2026-07-06 07:31 PDT",
      "uploadedAttachments": [],
      "product": "ElectricNOW",
      "platform": "Free iOS/watchOS/tvOS",
      "period": "Jun 29-Jul 5, 2026",
      "start": "2026-06-29",
      "end": "2026-07-05",
      "downloads": 424,
      "displayDownloads": "424",
      "dailyAverage": 61,
      "daily": [
        {
          "date": "2026-06-29",
          "label": "June 29, 2026",
          "downloads": 180
        },
        {
          "date": "2026-06-30",
          "label": "June 30, 2026",
          "downloads": 75
        },
        {
          "date": "2026-07-01",
          "label": "July 1, 2026",
          "downloads": 38
        },
        {
          "date": "2026-07-02",
          "label": "July 2, 2026",
          "downloads": 46
        },
        {
          "date": "2026-07-03",
          "label": "July 3, 2026",
          "downloads": 28
        },
        {
          "date": "2026-07-04",
          "label": "July 4, 2026",
          "downloads": 38
        },
        {
          "date": "2026-07-05",
          "label": "July 5, 2026",
          "downloads": 19
        }
      ],
      "deltaPct": -60.1,
      "territories": [
        {
          "territory": "United States",
          "downloads": 424,
          "deltaPct": -60.1
        }
      ],
      "note": "Manual Apple Connect screenshot entered Jul 6, 2026. Daily U.S. downloads total 424 for Jun 29-Jul 5, 2026 (the latest complete week). Deduped against the prior Jun 25-Jul 1 snapshot by date: Jun 29 (180) confirmed, Jun 30 updated 74->75, Jul 1 (38) confirmed, and Jul 2-5 (46/28/38/19) added; the prior Jun 25-Jul 1 = 1,063 window is preserved below as priorSnapshot and is not double-counted. fiveWeekSnapshot history preserved. Preserved until replaced by a newer screenshot or an Apple App Store Connect API integration.",
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
        "period": "Jun 25-Jul 1, 2026",
        "start": "2026-06-25",
        "end": "2026-07-01",
        "downloads": 1063
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
      "generatedAt": "2026-07-10T15:20:00-07:00",
      "overview": "Partial current week (Jul 6-9, 2026, first 4 days): early traffic is running at a healthy daily pace while attention and Roku usage are climbing; visible sales are flat. Over Jul 6-9 GA4 (property 497892271) shows 2,482 active users, 722 new users, 6,308 sessions and 19,042 screen/page views across 4 days - a per-day pace slightly above the last complete week. Engagement rate reads 58.75% for the partial, but that is dragged down by Jul 9's still-settling rows (Jul 6-8 held 76-80%); it will rise as Jul 9 attribution completes. The latest complete-week comparison stays Jun 29-Jul 5 (4,158 active users, 77.97% engagement) vs Jun 22-28. Attention/use is UP: the newest Roku App Engagement report (Jul 2-Jul 8) shows 239 new installs (was 197), 340 avg daily viewers (was 286) and 3,777 total hours streamed (was 2,993). Sales are flat - no net-new visible purchases this run (Stripe had no new charges since Jun 27, Roku no new sales beyond the Jun 30 bundle, Apple unchanged), so visible platform sales hold at 67 purchases / $1,244.33 gross ($1,056.05 developer rev share). Paid acquisition: Meta was scaled to almost nothing (Jul 2-8: $40.80 spend, 23 iOS installs at $1.77; -97% spend), an efficiency signal only - not proof of viewing or ROAS; Google Ads returned zero rows for Jul 6-9 (no active spend), preserved as last-good. YouTube (a separate channel, NOT platform sales): the Jul 6-9 partial shows 59,961 views and ~$764 estimated ad revenue over 4 days, with the complete-week Jun 29-Jul 5 total (175,840 views) held above; YouTube daily rows lag and will settle upward.",
      "bullets": [
        "Traffic: measured platform visits (GA4 sessions, landing-excluded) were 9,427 in the current complete week (Jun 29-Jul 5, 2026), down about 14.2% vs the previous 7 days (10,990 for Jun 22-28); platform active users were 3,564, down about 31.5%. Property-wide GA4 sessions were 10,320 (-13.2%) and active users 4,158 (-28.3%). Acquisition pulled back sharply this week.",
        "Engagement: GA4 engagement rate held steady and healthy at 77.97% (vs 78.01%) with no Jun 28-style classification anomaly. Even though user and session counts fell, total engagement time ROSE +18.8% to about 5,894 hours (userEngagementDuration 21,216,690s) - the smaller audience watched more per person. Time per active user rose to ~85 min and time per session to ~34 min.",
        "Sales: visible platform sales grew to 67 purchases / $1,244.33 gross ($1,056.05 developer rev share) after one net-new Roku sale (Jun 30 Purchase Bundle 55, $54.99 / $43.99 dev share). Apple is preserved at 22 / $362.78 gross (est net $253.90) and Stripe at 24 / $484.76 (connector disconnected this run, last-good preserved, not zeroed). Visible sales are Stripe + Roku + manual Apple only, not total ElectricNOW sales.",
        "Paid acquisition (Meta, Jun 28-Jul 4, 2026): spend cut to $618.34 (-64.3%) drove 354 iOS installs (-68.7%) at $1.75 each on 41,285 impressions and 2,868 link clicks (CPC $0.21, -51.7%). Cost per iOS install rose +14.1%. Older bands are most efficient/highest-volume (55-64 $1.44, 65+ $1.69); 18-24 produced 0 installs. These are free installs, not paid sales, and cannot be tied to viewing or purchases - we do NOT claim true ROAS.",
        "Google Ads is STALE this run (current complete week returned no rows / manager retry permission-denied); last-good values are preserved, not zeroed, so no fresh Meta-vs-Google cost-per-install comparison is possible.",
        "YouTube (a separate channel, NOT platform sales): 175,840 views (+11.9%) and ~$2,582 estimated ad revenue (-6.1%) for Jun 29-Jul 5; daily rows for Jul 2-4 show 0 views while revenue accrues (a multi-day reporting lag), so weekly totals are authoritative and back-half daily shape is preliminary.",
        "Roku app engagement (Jul 6 report, Jun 27-Jul 3): 197 new installs, 137 uninstalls (net +60), 289,138 cumulative installs, 286 avg daily viewers, 89.73 avg min/viewer, 2,993 total hours streamed - tracked separately from GA4 and from Roku live TRC reports.",
        "Ad-impression grain: distinguish paid-campaign impressions (41,285 Meta ad impressions) from in-app ad impressions (GA4 ads_impression, 34,940 this week) and from YouTube ad impressions (782,494) - three different things."
      ]
    },
    "youtubeSummary": {
      "source": "YouTube Analytics connector, ElectricNOW channel",
      "connectorStatus": "CONNECTED",
      "period": "Jun 29-Jul 5, 2026",
      "periodNote": "Monday-Sunday week of Jun 29-Jul 5, 2026. Weekly totals cover the full 7 days, but the connector's DAILY rows for Jul 2-4 report 0 views/minutes while revenue continues to accrue (a multi-day YouTube reporting lag), so daily view/watch-time shape for the back half of the week is preliminary and will settle upward.",
      "comparisonPeriod": "Jun 22-Jun 28, 2026",
      "comparisonNote": "Compared to the prior full week (Jun 22-Jun 28, 2026).",
      "isPlatformSales": false,
      "revenueType": "estimated YouTube ad revenue",
      "kpis": [
        {
          "key": "views",
          "label": "Views",
          "value": 175840,
          "deltaPct": 11.856795,
          "detail": "YouTube channel views in the complete week"
        },
        {
          "key": "hoursWatched",
          "label": "Est. hours watched",
          "value": 76849.82,
          "deltaPct": 10.279699,
          "detail": "Estimated hours watched on YouTube"
        },
        {
          "key": "avgViewDuration",
          "label": "Avg view duration",
          "value": "26m 14s",
          "detail": "Average watch time per YouTube view"
        },
        {
          "key": "estimatedAdRevenue",
          "label": "Est. YouTube ad revenue",
          "value": 2581.949,
          "deltaPct": -6.1462,
          "detail": "Estimated YouTube ad revenue (NOT sales, NOT in-app purchases)"
        },
        {
          "key": "estimatedRevenue",
          "label": "Est. total YouTube revenue",
          "value": 2885.068,
          "deltaPct": -4.649839,
          "detail": "Estimated total YouTube revenue (ads + other), separate channel - NOT platform sales"
        },
        {
          "key": "adImpressions",
          "label": "YouTube ad impressions",
          "value": 782494,
          "deltaPct": 4.625764,
          "detail": "YouTube ad impressions (NOT ElectricNOW in-app ads, NOT paid-acquisition impressions)"
        },
        {
          "key": "monetizedPlaybacks",
          "label": "Monetized playbacks",
          "value": 134911,
          "deltaPct": 6.940668,
          "detail": "YouTube playbacks that served a monetized ad"
        }
      ],
      "totals": {
        "views": 175840,
        "estimatedMinutesWatched": 4610989,
        "estimatedHoursWatched": 76849.82,
        "averageViewDuration": "26m 14s",
        "estimatedRevenue": 2885.068,
        "estimatedAdRevenue": 2581.949,
        "adImpressions": 782494,
        "monetizedPlaybacks": 134911,
        "subscribersGained": 238,
        "subscribersLost": 87,
        "likes": 1617,
        "comments": 44,
        "shares": 174
      },
      "previousTotals": {
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
      "dailyTrend": [
        {
          "date": "2026-06-29",
          "views": 26333,
          "estimatedMinutesWatched": 700199,
          "estimatedHoursWatched": 11669.98,
          "estimatedRevenue": 518.436,
          "estimatedAdRevenue": 475.119
        },
        {
          "date": "2026-06-30",
          "views": 28767,
          "estimatedMinutesWatched": 761495,
          "estimatedHoursWatched": 12691.58,
          "estimatedRevenue": 466.58,
          "estimatedAdRevenue": 418.859
        },
        {
          "date": "2026-07-01",
          "views": 30113,
          "estimatedMinutesWatched": 782183,
          "estimatedHoursWatched": 13036.38,
          "estimatedRevenue": 448.776,
          "estimatedAdRevenue": 399.023
        },
        {
          "date": "2026-07-02",
          "views": 0,
          "estimatedMinutesWatched": 0,
          "estimatedHoursWatched": 0.0,
          "estimatedRevenue": 479.521,
          "estimatedAdRevenue": 428.497
        },
        {
          "date": "2026-07-03",
          "views": 0,
          "estimatedMinutesWatched": 0,
          "estimatedHoursWatched": 0.0,
          "estimatedRevenue": 497.585,
          "estimatedAdRevenue": 444.51
        },
        {
          "date": "2026-07-04",
          "views": 0,
          "estimatedMinutesWatched": 0,
          "estimatedHoursWatched": 0.0,
          "estimatedRevenue": 474.17,
          "estimatedAdRevenue": 415.941
        }
      ],
      "topVideos": [
        {
          "videoId": "b6kMpenpQGM",
          "title": "Flyboys | FULL MOVIE | James Franco | Jean Reno | Jennifer Decker | David Ellison",
          "views": 22026,
          "estimatedHoursWatched": 16898.32,
          "averageViewDuration": "46m 01s",
          "estimatedAdRevenue": 508.41
        },
        {
          "videoId": "q5gQB_AGxlo",
          "title": "q5gQB_AGxlo",
          "views": 12254,
          "estimatedHoursWatched": 5223.12,
          "averageViewDuration": "25m 34s",
          "estimatedAdRevenue": 67.015
        },
        {
          "videoId": "Ilpx6mH1nMk",
          "title": "Ilpx6mH1nMk",
          "views": 11115,
          "estimatedHoursWatched": 4083.57,
          "averageViewDuration": "22m 02s",
          "estimatedAdRevenue": 114.57
        },
        {
          "videoId": "tKAdjrXYj8g",
          "title": "Blackway | FULL MOVIE | Anthony Hopkins | Ray Liotta | Julia Stiles | Alexander Ludwig",
          "views": 4632,
          "estimatedHoursWatched": 1489.72,
          "averageViewDuration": "19m 17s",
          "estimatedAdRevenue": 53.035
        },
        {
          "videoId": "YM6-fBB7yQY",
          "title": "Leverage | The Nigerian Job | Season 1 Episode 1 | Official Episode",
          "views": 3942,
          "estimatedHoursWatched": 2315.9,
          "averageViewDuration": "35m 15s",
          "estimatedAdRevenue": 67.691
        },
        {
          "videoId": "-mqcn5M0ktA",
          "title": "LBJ | FULL MOVIE | Woody Harrelson | Jennifer Jason Leigh | Richard Jenkins | Bill Pullman",
          "views": 3312,
          "estimatedHoursWatched": 1364.08,
          "averageViewDuration": "24m 42s",
          "estimatedAdRevenue": 40.949
        },
        {
          "videoId": "aHfMGLnoaaE",
          "title": "aHfMGLnoaaE",
          "views": 2498,
          "estimatedHoursWatched": 673.92,
          "averageViewDuration": "16m 11s",
          "estimatedAdRevenue": 34.236
        },
        {
          "videoId": "89J-9vWWPuk",
          "title": "The Triangle: Night 1 | Full Movie | Eric Stoltz, Catherine Bell, Lou Diamond Phillips, Sam Neill",
          "views": 2410,
          "estimatedHoursWatched": 754.7,
          "averageViewDuration": "18m 47s",
          "estimatedAdRevenue": 24.69
        },
        {
          "videoId": "LMX2-vsoGSo",
          "title": "Leverage | The Homecoming Job | Season 1 Episode 2 | Official Episode",
          "views": 2326,
          "estimatedHoursWatched": 1252.12,
          "averageViewDuration": "32m 17s",
          "estimatedAdRevenue": 29.098
        },
        {
          "videoId": "0T-yveMJPko",
          "title": "The Librarian: Quest for the Spear | FULL MOVIE | Noah Wyle, Kyle MacLachlan, Bob Newhart",
          "views": 2117,
          "estimatedHoursWatched": 1219.53,
          "averageViewDuration": "34m 33s",
          "estimatedAdRevenue": 59.153
        },
        {
          "videoId": "JeeMINxXYwQ",
          "title": "Leverage | The Jailhouse Job | Season 3 Episode 1 | Official Episode",
          "views": 1837,
          "estimatedHoursWatched": 627.8,
          "averageViewDuration": "20m 30s",
          "estimatedAdRevenue": 24.451
        },
        {
          "videoId": "He3ScSePRYM",
          "title": "He3ScSePRYM",
          "views": 1548,
          "estimatedHoursWatched": 642.75,
          "averageViewDuration": "24m 54s",
          "estimatedAdRevenue": 20.357
        },
        {
          "videoId": "6etBO8Z9IBA",
          "title": "6etBO8Z9IBA",
          "views": 1515,
          "estimatedHoursWatched": 543.8,
          "averageViewDuration": "21m 32s",
          "estimatedAdRevenue": 26.605
        },
        {
          "videoId": "sjsGMHmm9Yk",
          "title": "The Librarian: Curse of the Judas Chalice | FULL MOVIE | Noah Wyle, Bruce Davison, Bob Newhart",
          "views": 1425,
          "estimatedHoursWatched": 679.98,
          "averageViewDuration": "28m 37s",
          "estimatedAdRevenue": 22.89
        },
        {
          "videoId": "n_edsw_uKQE",
          "title": "n_edsw_uKQE",
          "views": 1363,
          "estimatedHoursWatched": 572.17,
          "averageViewDuration": "25m 11s",
          "estimatedAdRevenue": 17.474
        },
        {
          "videoId": "V2sH3XGiUns",
          "title": "V2sH3XGiUns",
          "views": 1359,
          "estimatedHoursWatched": 643.22,
          "averageViewDuration": "28m 23s",
          "estimatedAdRevenue": 17.968
        },
        {
          "videoId": "RRb6SMYb72Y",
          "title": "RRb6SMYb72Y",
          "views": 1331,
          "estimatedHoursWatched": 336.22,
          "averageViewDuration": "15m 09s",
          "estimatedAdRevenue": 18.348
        },
        {
          "videoId": "Hu7thpEf-js",
          "title": "Hu7thpEf-js",
          "views": 1294,
          "estimatedHoursWatched": 441.28,
          "averageViewDuration": "20m 27s",
          "estimatedAdRevenue": 28.287
        },
        {
          "videoId": "V21Q6QjV0Hc",
          "title": "V21Q6QjV0Hc",
          "views": 1239,
          "estimatedHoursWatched": 497.1,
          "averageViewDuration": "24m 04s",
          "estimatedAdRevenue": 18.003
        },
        {
          "videoId": "7Ubadx5paaI",
          "title": "7Ubadx5paaI",
          "views": 1173,
          "estimatedHoursWatched": 529.05,
          "averageViewDuration": "27m 03s",
          "estimatedAdRevenue": 12.59
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
      "plainEnglish": "YouTube is a meaningful separate audience and revenue channel. For Jun 22-27, 2026 (the latest available data; Jun 28 is not yet finalized by the connector) the channel produced 157,201 views, about 69,686 hours watched, ~126,155 monetized playbacks, and roughly $2,751 in estimated ad revenue ($3,026 estimated total revenue), with average view duration about 26m 36s and 210 new subscribers. Versus the prior full week that is down (views -10.1%, ad revenue -15.3%, ad impressions -18.0%, monetized playbacks -12.7%), though those deltas compare 6 days to a 7-day prior week and are preliminary. This section is YouTube-only performance, separate from ElectricNOW app/GA4 usage and separate from paid-acquisition ad impressions, and is NOT included in Visible Platform Sales.",
      "dataFreshnessNote": "YouTube Analytics pull for Jun 29-Jul 5, 2026. Daily view/watch-time rows for Jul 2-4 lag (0 views while revenue accrues); weekly totals are complete.",
      "dataLagNote": "YouTube daily rows for Jul 2-4, 2026 show 0 views/watch-time while estimated revenue keeps accruing - a known multi-day reporting lag. Weekly totals are authoritative; back-half daily view/watch-time will settle upward on later pulls.",
      "partialUpdate": {
        "period": "Jul 6-Jul 9, 2026",
        "days": 4,
        "views": 59961,
        "estimatedMinutesWatched": 1447274,
        "estimatedHoursWatched": 24121.23,
        "averageViewDuration": "24m 09s",
        "estimatedRevenue": 855.873,
        "estimatedAdRevenue": 764.481,
        "adImpressions": 227488,
        "monetizedPlaybacks": 44808,
        "note": "Partial current week (Jul 6-9, 2026, 4 days) from the YouTube Analytics connector. The complete-week comparison above remains Jun 29-Jul 5 vs Jun 22-28. YouTube daily rows lag a few days, so these partial totals will settle upward. NOT platform sales - YouTube ad revenue is a separate channel."
      }
    },
    "appTrendNote": "This trend charts total app sessions in green (a reliable daily activity signal) alongside daily active users in blue for the week ending Sun Jul 5, 2026. Traffic pulled back this week - active users and sessions fell versus Jun 22-28 - but total time spent in the app ROSE (+18.8% userEngagementDuration), so the smaller audience watched more per person. Engaged-session rate held steady (77.97% vs 78.01%), with no Jun 28-style classification anomaly this week."
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

  // The vs-previous-7-days comparison needs a refreshed prior-period value. When
  // the underlying source could not be refreshed this run (comparisonUnavailable)
  // or the delta is missing, "0.0%"/"new" is misleading — render "comparison
  // unavailable" instead.
  function previousWeekCompare(card) {
    const delta = card.deltaVsPreviousPct;
    const hasDelta = delta !== null && delta !== undefined && !Number.isNaN(delta);
    if (card.comparisonUnavailable || !hasDelta) {
      return { cls: 'baseline-unavailable', text: 'comparison unavailable' };
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
        'while Live TV shows far higher events per user than any other screen \u2014 a sign of deep viewing sessions. ' +
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
      if (card.key === 'estimatedAdRevenue' || card.key === 'estimatedRevenue') return fmt.currency(card.value);
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
