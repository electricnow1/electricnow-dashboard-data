(() => {
  if (window.__ELECTRICNOW_DASHBOARD_EMBED_LOADED__) return;
  window.__ELECTRICNOW_DASHBOARD_EMBED_LOADED__ = true;

  function appendFontLink(rel, href, crossOrigin) {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (crossOrigin !== undefined) link.crossOrigin = crossOrigin;
    document.head.appendChild(link);
  }

  appendFontLink('preconnect', 'https://fonts.googleapis.com');
  appendFontLink('preconnect', 'https://fonts.gstatic.com', '');
  appendFontLink('stylesheet', 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

  const style = document.createElement('style');
  style.textContent = "#electricnow-dashboard-embed {\n  --bg: #050a12;\n  --surface: #0a1524;\n  --surface-2: #0f2138;\n  --surface-3: #132b48;\n  --border: rgba(255, 255, 255, 0.11);\n  --border-strong: rgba(255, 255, 255, 0.18);\n  --text: #f6f9ff;\n  --muted: #9fb3ca;\n  --faint: #667f9d;\n  --primary: #2f81d7;\n  --primary-2: #68b7ff;\n  --good: #69d895;\n  --bad: #ff6f85;\n  --warn: #ffc857;\n  --shadow: 0 22px 70px rgba(0, 0, 0, 0.42);\n  --radius: 14px;\n  --radius-sm: 10px;\n  --font-ui: 'Inter', system-ui, sans-serif;\n  --font-display: 'Barlow Condensed', 'Arial Narrow', sans-serif;\n  --embed-top-buffer: 32px;\n}\n#electricnow-dashboard-embed *,\n#electricnow-dashboard-embed *::before,\n#electricnow-dashboard-embed *::after {\n  box-sizing: border-box;\n}\n#electricnow-dashboard-embed,\n#electricnow-dashboard-embed {\n  min-height: 100%;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n#electricnow-dashboard-embed {\n  margin: 0;\n  background:\n    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),\n    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),\n    var(--bg);\n  color: var(--text);\n  font-family: var(--font-ui);\n  font-size: 15px;\n  line-height: 1.45;\n  overflow-x: hidden;\n}\n#electricnow-dashboard-embed,\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n  background:\n    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),\n    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),\n    var(--bg) !important;\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed a {\n  color: inherit !important;\n}\n#electricnow-dashboard-embed button,\n#electricnow-dashboard-embed select {\n  font: inherit;\n}\n#electricnow-dashboard-embed .skip-link {\n  position: fixed;\n  left: 16px;\n  top: 16px;\n  z-index: 1000;\n  transform: translateY(-160%);\n  background: var(--primary);\n  color: #fff;\n  padding: 10px 14px;\n  border-radius: 999px;\n}\n#electricnow-dashboard-embed .skip-link:focus {\n  transform: translateY(0);\n}\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n  max-width: 100vw;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-columns: 280px minmax(0, 1fr);\n  grid-template-rows: minmax(104px, auto) minmax(0, 1fr);\n  min-height: 100vh;\n  padding-top: var(--embed-top-buffer);\n}\n#electricnow-dashboard-embed .sidebar {\n  grid-row: 1 / -1;\n  position: sticky;\n  top: var(--embed-top-buffer);\n  height: calc(100vh - var(--embed-top-buffer));\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  border-right: 1px solid var(--border);\n  background: #050a12 !important;\n  padding: 24px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\n#electricnow-dashboard-embed .brand {\n  display: grid;\n  grid-template-columns: 48px 1fr;\n  gap: 12px;\n  align-items: center;\n  text-decoration: none;\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .brand-mark {\n  width: 48px;\n  border-radius: 4px;\n  background: linear-gradient(135deg, #2367b2, #d9ebff);\n  color: #fff;\n  padding: 7px;\n}\n#electricnow-dashboard-embed .brand span {\n  display: grid;\n  gap: 0;\n}\n#electricnow-dashboard-embed .brand strong {\n  font-family: var(--font-display);\n  font-size: 25px;\n  line-height: 0.82;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .brand small,\n#electricnow-dashboard-embed .source-card span,\n#electricnow-dashboard-embed .eyebrow,\n#electricnow-dashboard-embed .select-label {\n  color: var(--primary-2) !important;\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .side-nav {\n  display: grid;\n  gap: 6px;\n}\n#electricnow-dashboard-embed .side-nav a {\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  border-radius: var(--radius-sm);\n  color: var(--muted) !important;\n  padding: 0 12px;\n  text-decoration: none;\n}\n#electricnow-dashboard-embed .side-nav a:hover,\n#electricnow-dashboard-embed .side-nav a:focus-visible {\n  background: var(--surface-2);\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .source-card {\n  margin-top: auto;\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  background: #0f2138 !important;\n  padding: 16px;\n}\n#electricnow-dashboard-embed .source-card strong {\n  display: block;\n  margin-top: 6px;\n}\n#electricnow-dashboard-embed .source-card p {\n  margin: 8px 0 0;\n  color: var(--muted);\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n#electricnow-dashboard-embed .topbar {\n  position: sticky;\n  top: var(--embed-top-buffer);\n  z-index: 20;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  border-bottom: 1px solid var(--border);\n  background: #070d17 !important;\n  backdrop-filter: blur(14px);\n  padding: 18px 28px;\n}\n#electricnow-dashboard-embed .topbar > div:first-child {\n  min-width: 0;\n  flex: 1 1 360px;\n}\n#electricnow-dashboard-embed .topbar h1 {\n  color: var(--text) !important;\n  margin: 2px 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(26px, 2.35vw, 34px);\n  line-height: 0.98;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .topbar-actions {\n  flex: 0 1 520px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n}\n#electricnow-dashboard-embed select,\n#electricnow-dashboard-embed .ghost-button {\n  min-height: 42px;\n  border: 1px solid var(--border-strong);\n  border-radius: 999px;\n  background: #0f2138 !important;\n  color: var(--text) !important;\n  padding: 0 14px;\n}\n#electricnow-dashboard-embed .ghost-button {\n  cursor: pointer;\n}\n#electricnow-dashboard-embed .ghost-button:disabled {\n  cursor: wait;\n  opacity: 0.55;\n}\n#electricnow-dashboard-embed .refresh-button {\n  border-color: rgba(104, 183, 255, 0.42);\n}\n#electricnow-dashboard-embed .refresh-status {\n  min-width: 130px;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .ghost-button.is-active,\n#electricnow-dashboard-embed .ghost-button:hover {\n  background: var(--primary);\n  border-color: var(--primary);\n}\n#electricnow-dashboard-embed .main {\n  padding: 28px 28px 96px;\n  min-width: 0;\n  background: #050a12 !important;\n}\n#electricnow-dashboard-embed .hero-panel,\n#electricnow-dashboard-embed .panel,\n#electricnow-dashboard-embed .plain-panel,\n#electricnow-dashboard-embed .kpi-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0)),\n    #0a1524 !important;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n#electricnow-dashboard-embed .hero-panel {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 260px;\n  align-items: end;\n  gap: 24px;\n  background:\n    linear-gradient(135deg, rgba(47, 129, 215, 0.28), rgba(10, 21, 36, 0.96) 55%),\n    #0a1524 !important;\n  padding: clamp(24px, 4vw, 42px);\n}\n#electricnow-dashboard-embed .hero-panel h2,\n#electricnow-dashboard-embed .plain-panel h2,\n#electricnow-dashboard-embed .panel h2 {\n  color: var(--text) !important;\n  margin: 4px 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(25px, 3vw, 34px);\n  line-height: 1.08;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .panel h3,\n#electricnow-dashboard-embed .subsection-header h3 {\n  color: var(--text) !important;\n  margin: 18px 0 10px;\n  font-family: var(--font-display);\n  font-size: 22px;\n  line-height: 0.95;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .subsection-header {\n  margin-top: 28px;\n  border-top: 1px solid var(--border);\n  padding-top: 20px;\n}\n#electricnow-dashboard-embed .panel-note {\n  margin: 0 0 16px;\n  color: var(--muted);\n  font-size: 13px;\n  max-width: 860px;\n}\n#electricnow-dashboard-embed .topbar h1,\n#electricnow-dashboard-embed .hero-panel h2,\n#electricnow-dashboard-embed .plain-panel h2,\n#electricnow-dashboard-embed .panel h2,\n#electricnow-dashboard-embed .panel h3,\n#electricnow-dashboard-embed .subsection-header h3 {\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .eyebrow,\n#electricnow-dashboard-embed .select-label,\n#electricnow-dashboard-embed .source-card span,\n#electricnow-dashboard-embed .brand small {\n  color: var(--primary-2) !important;\n}\n#electricnow-dashboard-embed .hero-panel p {\n  max-width: 72ch;\n  margin: 14px 0 0;\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .hero-meta {\n  display: grid;\n  gap: 4px;\n  justify-items: end;\n  color: var(--muted);\n  text-align: right;\n}\n#electricnow-dashboard-embed .hero-meta strong {\n  color: var(--text);\n}\n#electricnow-dashboard-embed .visit-strip {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\n  gap: 16px;\n  margin-top: 18px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--radius);\n  background:\n    linear-gradient(135deg, rgba(47, 129, 215, 0.20), rgba(10, 21, 36, 0.96)),\n    var(--surface);\n  box-shadow: var(--shadow);\n  padding: 20px;\n}\n#electricnow-dashboard-embed .visit-strip-header h2 {\n  margin: 2px 0 8px;\n  color: var(--text);\n  font-family: var(--font-display);\n  font-size: clamp(26px, 3vw, 38px);\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .visit-strip-header p:not(.eyebrow),\n#electricnow-dashboard-embed .visit-source,\n#electricnow-dashboard-embed .visit-card p {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .visit-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .visit-card {\n  display: grid;\n  gap: 10px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(5, 10, 18, 0.46);\n  padding: 16px;\n}\n#electricnow-dashboard-embed .visit-card span {\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .visit-card strong {\n  color: var(--text);\n  font-family: var(--font-display);\n  font-size: clamp(42px, 5vw, 64px);\n  line-height: 0.9;\n  letter-spacing: 0.02em;\n}\n#electricnow-dashboard-embed .visit-card-meta {\n  display: grid;\n  gap: 6px;\n  align-items: start;\n}\n#electricnow-dashboard-embed .visit-card small {\n  display: block;\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .visit-card-meta .delta {\n  display: inline-flex;\n  width: fit-content;\n  max-width: 100%;\n  white-space: normal;\n}\n#electricnow-dashboard-embed .visit-card p,\n#electricnow-dashboard-embed .visit-source {\n  margin: 0;\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .visit-source {\n  grid-column: 1 / -1;\n}\n#electricnow-dashboard-embed .plain-panel {\n  display: none;\n  grid-template-columns: 240px 1fr;\n  gap: 24px;\n  margin-top: 18px;\n  padding: 20px;\n}\n#electricnow-dashboard-embed .plain-panel.is-visible {\n  display: grid;\n}\n#electricnow-dashboard-embed .plain-panel:focus {\n  outline: 2px solid rgba(104, 183, 255, 0.75);\n  outline-offset: 4px;\n}\n#electricnow-dashboard-embed .plain-panel ul {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n#electricnow-dashboard-embed .plain-panel li,\n#electricnow-dashboard-embed .gap-list li {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .plain-panel li.insight-overview {\n  color: var(--text);\n  font-size: 1.03rem;\n  line-height: 1.55;\n}\n#electricnow-dashboard-embed .kpi-grid {\n  display: grid;\n  gap: 18px;\n  margin-top: 18px;\n}\n#electricnow-dashboard-embed .kpi-group {\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  background: #08111e !important;\n  padding: 16px;\n  box-shadow: var(--shadow);\n}\n#electricnow-dashboard-embed .kpi-group-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  margin-bottom: 12px;\n}\n#electricnow-dashboard-embed .kpi-group-header h3 {\n  margin: 0;\n  color: var(--text) !important;\n  font-family: var(--font-display);\n  font-size: 23px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .kpi-group-header > p {\n  max-width: 620px;\n  margin: 0;\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .kpi-group-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .kpi-card {\n  min-height: 320px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 16px;\n}\n#electricnow-dashboard-embed .kpi-card span,\n#electricnow-dashboard-embed .metric-row span,\n#electricnow-dashboard-embed .table-wrap th {\n  color: var(--faint);\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .kpi-card span {\n  min-height: 32px;\n  display: block;\n}\n#electricnow-dashboard-embed .kpi-card strong {\n  display: block;\n  margin-top: 8px;\n  font-family: var(--font-display);\n  font-size: 34px;\n  line-height: 0.95;\n  letter-spacing: 0.03em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .kpi-card p {\n  margin: 12px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n  line-height: 1.4;\n}\n#electricnow-dashboard-embed .kpi-compare-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 4px;\n  align-items: start;\n  justify-items: start;\n  margin-top: 14px;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n#electricnow-dashboard-embed .kpi-compare-grid small {\n  color: var(--faint);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .kpi-compare-grid .delta {\n  margin-top: 0;\n  margin-bottom: 6px;\n  justify-self: start;\n  max-width: 100%;\n  white-space: normal;\n  overflow-wrap: anywhere;\n}\n#electricnow-dashboard-embed .kpi-compare-grid small {\n  display: block;\n  line-height: 1.3;\n}\n\n#electricnow-dashboard-embed .delta {\n  display: inline-flex;\n  align-self: flex-start;\n  margin-top: 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--muted);\n  padding: 4px 8px;\n  font-size: 12px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .delta.up {\n  color: var(--good);\n}\n#electricnow-dashboard-embed .delta.down {\n  color: var(--bad);\n}\n#electricnow-dashboard-embed .delta.baseline-unavailable {\n  color: var(--muted);\n  font-weight: 600;\n  font-style: italic;\n}\n#electricnow-dashboard-embed .dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n  gap: 18px;\n  margin-top: 18px;\n}\n#electricnow-dashboard-embed .span-4 {\n  grid-column: span 4;\n}\n#electricnow-dashboard-embed .span-6 {\n  grid-column: span 6;\n}\n#electricnow-dashboard-embed .span-8 {\n  grid-column: span 8;\n}\n#electricnow-dashboard-embed .panel {\n  min-width: 0;\n  padding: 18px;\n}\n#electricnow-dashboard-embed .panel-header {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: start;\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .period-chip {\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--muted);\n  padding: 6px 10px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n#electricnow-dashboard-embed .chart-wrap,\n#electricnow-dashboard-embed .mini-chart-wrap {\n  width: 100%;\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .chart-wrap + h3 {\n  margin-top: 24px;\n}\n#electricnow-dashboard-embed .chart-legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px 18px;\n  margin-top: 12px;\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .chart-note {\n  margin: 10px 0 0;\n  padding: 10px 12px;\n  border-left: 3px solid var(--warn);\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 8px;\n  color: var(--muted);\n  font-size: 13px;\n  line-height: 1.5;\n}\n#electricnow-dashboard-embed .chart-note:empty {\n  display: none;\n}\n#electricnow-dashboard-embed .chart-legend span {\n  display: inline-flex;\n  gap: 7px;\n  align-items: center;\n}\n#electricnow-dashboard-embed .legend-swatch {\n  width: 22px;\n  height: 4px;\n  border-radius: 999px;\n  display: inline-block;\n}\n#electricnow-dashboard-embed .legend-blue {\n  background: var(--primary-2);\n}\n#electricnow-dashboard-embed .legend-green {\n  background: var(--good);\n}\n#electricnow-dashboard-embed svg {\n  width: 100%;\n  height: auto;\n}\n#electricnow-dashboard-embed .axis {\n  stroke: rgba(255, 255, 255, 0.12);\n}\n#electricnow-dashboard-embed .chart-label {\n  fill: var(--muted);\n  font-size: 12px;\n  font-family: var(--font-ui);\n}\n#electricnow-dashboard-embed .chart-end-label {\n  font-family: var(--font-ui);\n  font-size: 12px;\n  font-weight: 800;\n  paint-order: stroke;\n  stroke: var(--surface);\n  stroke-width: 4px;\n}\n#electricnow-dashboard-embed .active-end {\n  fill: var(--primary-2);\n}\n#electricnow-dashboard-embed .engaged-end {\n  fill: var(--good);\n}\n#electricnow-dashboard-embed .line-active {\n  fill: none;\n  stroke: var(--primary-2);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .line-engaged {\n  fill: none;\n  stroke: var(--good);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .line-purchase {\n  fill: none;\n  stroke: var(--warn);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .area-fill {\n  fill: rgba(104, 183, 255, 0.12);\n}\n#electricnow-dashboard-embed .purchase-summary {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .sales-summary {\n  display: grid;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .sales-callout {\n  border: 1px solid rgba(255, 200, 87, 0.28);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(255, 200, 87, 0.15), rgba(47, 129, 215, 0.1));\n  padding: 14px;\n}\n#electricnow-dashboard-embed .sales-callout-secondary {\n  border-color: rgba(56, 189, 248, 0.34);\n  background: linear-gradient(135deg, rgba(56, 189, 248, 0.16), rgba(129, 140, 248, 0.1));\n}\n#electricnow-dashboard-embed .sales-callout span,\n#electricnow-dashboard-embed .sales-stat span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-callout strong {\n  display: block;\n  margin-top: 5px;\n  font-family: var(--font-display);\n  font-size: 30px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-callout p,\n#electricnow-dashboard-embed .sales-note,\n#electricnow-dashboard-embed .sales-source,\n#electricnow-dashboard-embed .sales-stat em {\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .sales-callout p,\n#electricnow-dashboard-embed .sales-source,\n#electricnow-dashboard-embed .sales-note {\n  margin: 8px 0 0;\n}\n#electricnow-dashboard-embed .sales-source {\n  border-left: 2px solid rgba(104, 183, 255, 0.45);\n  padding-left: 10px;\n}\n#electricnow-dashboard-embed .sales-source-list {\n  display: grid;\n  gap: 6px;\n  margin: 14px 0 0;\n  padding: 0;\n  list-style: none;\n}\n#electricnow-dashboard-embed .sales-source-list li {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 8px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .sales-source-list li strong {\n  color: var(--text);\n  font-size: 12px;\n  text-align: right;\n}\n#electricnow-dashboard-embed .sales-stat-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 10px;\n}\n#electricnow-dashboard-embed .sales-stat {\n  min-width: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.58);\n  padding: 12px;\n}\n#electricnow-dashboard-embed .sales-stat strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 26px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-stat.baseline-set strong {\n  color: var(--good);\n  font-size: 24px;\n}\n#electricnow-dashboard-embed .sales-stat.sales-stat-ytd {\n  border-color: rgba(104, 183, 255, 0.55);\n  background: rgba(20, 46, 78, 0.85);\n}\n#electricnow-dashboard-embed .sales-stat.sales-stat-ytd span {\n  color: #68b7ff;\n}\n#electricnow-dashboard-embed .sales-stat.sales-stat-ytd strong {\n  color: #ffffff;\n  font-size: 28px;\n}\n#electricnow-dashboard-embed .sales-stat-footnote {\n  display: block;\n  margin-top: 4px;\n  font-size: 10px;\n  line-height: 1.3;\n  opacity: 0.85;\n}\n#electricnow-dashboard-embed .sales-audit-recent {\n  border-color: rgba(255, 197, 66, 0.4);\n}\n#electricnow-dashboard-embed .sales-audit {\n  border: 1px solid rgba(104, 183, 255, 0.34);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.72);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .sales-audit span {\n  display: block;\n  color: var(--warn);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-audit strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 28px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-audit p,\n#electricnow-dashboard-embed .sales-audit small {\n  display: block;\n  margin: 8px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .purchase-row,\n#electricnow-dashboard-embed .metric-row {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 12px;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  padding-block: 10px;\n}\n#electricnow-dashboard-embed .purchase-row:last-child,\n#electricnow-dashboard-embed .metric-row:last-child {\n  border-bottom: 0;\n}\n#electricnow-dashboard-embed .purchase-row strong,\n#electricnow-dashboard-embed .metric-row strong {\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .not-tracked {\n  color: var(--warn);\n}\n#electricnow-dashboard-embed .purchase-point-label {\n  fill: var(--text);\n  font-size: 11px;\n  font-weight: 700;\n}\n#electricnow-dashboard-embed .metric-list {\n  display: grid;\n}\n#electricnow-dashboard-embed .usage-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 18px;\n}\n#electricnow-dashboard-embed .roku-engagement-grid {\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  margin-bottom: 0;\n}\n#electricnow-dashboard-embed .usage-stat {\n  border: 1px solid rgba(104, 183, 255, 0.18);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.52);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .usage-stat span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .usage-stat strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 32px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .usage-stat em {\n  display: block;\n  margin-top: 5px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-mix {\n  display: grid;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n#electricnow-dashboard-embed .platform-total {\n  border: 1px solid rgba(104, 183, 255, 0.22);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));\n  padding: 14px;\n}\n#electricnow-dashboard-embed .platform-total span,\n#electricnow-dashboard-embed .coming-platforms span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .platform-total strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 36px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n}\n#electricnow-dashboard-embed .platform-total em,\n#electricnow-dashboard-embed .platform-share-card span,\n#electricnow-dashboard-embed .platform-share-card p,\n#electricnow-dashboard-embed .platform-note {\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-share-list {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .section-usage-list {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .section-usage-card {\n  min-width: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.62);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .section-usage-card header {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .section-usage-card span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .section-usage-card strong,\n#electricnow-dashboard-embed .section-usage-card b {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  line-height: 0.98;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .section-usage-card strong {\n  font-size: 28px;\n}\n#electricnow-dashboard-embed .section-usage-card b {\n  color: var(--good);\n  font-size: 18px;\n  text-align: left;\n  white-space: normal;\n}\n#electricnow-dashboard-embed .section-metrics {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px;\n  margin-top: 12px;\n}\n#electricnow-dashboard-embed .section-metrics em {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 999px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n  padding: 5px 8px;\n}\n#electricnow-dashboard-embed .section-usage-card p {\n  margin: 12px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .platform-share-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.52);\n  padding: 12px;\n}\n#electricnow-dashboard-embed .platform-share-card.is-untracked {\n  border-style: dashed;\n  background: rgba(255, 199, 95, 0.08);\n}\n#electricnow-dashboard-embed .platform-share-card header {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: start;\n}\n#electricnow-dashboard-embed .platform-share-card strong,\n#electricnow-dashboard-embed .platform-share-card b {\n  color: var(--text) !important;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .platform-share-card strong {\n  display: block;\n}\n#electricnow-dashboard-embed .platform-share-card b {\n  font-family: var(--font-display);\n  font-size: 24px;\n  line-height: 1;\n}\n#electricnow-dashboard-embed .platform-share-card.is-untracked b {\n  color: var(--warn) !important;\n}\n#electricnow-dashboard-embed .share-track {\n  height: 9px;\n  margin-top: 10px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .share-fill {\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--primary), var(--primary-2));\n}\n#electricnow-dashboard-embed .platform-share-card p {\n  margin: 8px 0 0;\n}\n#electricnow-dashboard-embed .compact-card {\n  padding: 10px;\n}\n#electricnow-dashboard-embed .compact-card header {\n  align-items: center;\n}\n#electricnow-dashboard-embed .compact-card b {\n  font-size: 20px;\n}\n#electricnow-dashboard-embed .coming-platforms {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n#electricnow-dashboard-embed .coming-platforms span {\n  margin-right: 4px;\n}\n#electricnow-dashboard-embed .coming-platforms em {\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--muted);\n  padding: 4px 9px;\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-note {\n  margin: 0 0 16px;\n}\n#electricnow-dashboard-embed .bar-list {\n  display: grid;\n  gap: 13px;\n}\n#electricnow-dashboard-embed .bar-row {\n  display: grid;\n  gap: 7px;\n}\n#electricnow-dashboard-embed .bar-row header {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n#electricnow-dashboard-embed .bar-row span {\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .bar-track {\n  height: 9px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .bar-fill {\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--primary), var(--primary-2));\n}\n#electricnow-dashboard-embed .table-wrap {\n  overflow-x: auto;\n  max-width: 100%;\n}\n#electricnow-dashboard-embed table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 520px;\n}\n#electricnow-dashboard-embed .title-table table {\n  min-width: 720px;\n}\n#electricnow-dashboard-embed th,\n#electricnow-dashboard-embed td {\n  border-bottom: 1px solid var(--border);\n  padding: 10px 8px;\n  text-align: left;\n  vertical-align: top;\n}\n#electricnow-dashboard-embed td {\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed td strong {\n  color: var(--text);\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .gap-list {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding-left: 18px;\n}\n#electricnow-dashboard-embed :focus-visible {\n  outline: 2px solid var(--primary-2);\n  outline-offset: 3px;\n}\n@media (max-width: 1180px) {\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto 1fr;\n  }\n#electricnow-dashboard-embed .sidebar {\n    position: static;\n    height: auto;\n    grid-row: auto;\n  }\n#electricnow-dashboard-embed .side-nav {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n#electricnow-dashboard-embed .source-card {\n    margin-top: 0;\n  }\n#electricnow-dashboard-embed .kpi-grid {\n    grid-template-columns: 1fr;\n  }\n#electricnow-dashboard-embed .section-usage-list {\n    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  }\n\n\n}\n@media (max-width: 820px) {\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n    overflow-x: hidden;\n  }\n#electricnow-dashboard-embed .sidebar,\n#electricnow-dashboard-embed .topbar,\n#electricnow-dashboard-embed .main {\n    min-width: 0;\n    width: 100%;\n  }\n#electricnow-dashboard-embed .topbar,\n#electricnow-dashboard-embed .hero-panel,\n#electricnow-dashboard-embed .visit-strip,\n#electricnow-dashboard-embed .plain-panel {\n    grid-template-columns: 1fr;\n  }\n#electricnow-dashboard-embed .plain-panel.is-visible {\n    margin: 18px 0 22px;\n    border-color: rgba(104, 183, 255, 0.62);\n    background:\n      linear-gradient(135deg, rgba(47, 129, 215, 0.22), rgba(10, 21, 36, 0.96) 48%),\n      #0a1524 !important;\n    box-shadow: 0 0 0 1px rgba(104, 183, 255, 0.16), 0 18px 48px rgba(0, 0, 0, 0.28);\n    scroll-margin-top: 14px;\n  }\n#electricnow-dashboard-embed .topbar {\n    align-items: stretch;\n  }\n#electricnow-dashboard-embed .topbar-actions {\n    justify-content: flex-start;\n  }\n#electricnow-dashboard-embed .kpi-group-header {\n    display: block;\n  }\n#electricnow-dashboard-embed .kpi-group-header > p {\n    margin-top: 8px;\n  }\n#electricnow-dashboard-embed .hero-meta {\n    justify-items: start;\n    text-align: left;\n  }\n#electricnow-dashboard-embed .main {\n    padding: 16px;\n  }\n#electricnow-dashboard-embed .kpi-grid,\n#electricnow-dashboard-embed .dashboard-grid,\n#electricnow-dashboard-embed .visit-card-grid,\n#electricnow-dashboard-embed .section-usage-list,\n#electricnow-dashboard-embed .side-nav {\n    grid-template-columns: 1fr;\n  }\n#electricnow-dashboard-embed .source-card {\n    max-width: 100%;\n  }\n#electricnow-dashboard-embed .span-4,\n#electricnow-dashboard-embed .span-6,\n#electricnow-dashboard-embed .span-8 {\n    grid-column: auto;\n  }\n\n\n}\n@media (max-width: 520px) {\n#electricnow-dashboard-embed .sidebar {\n    padding: 20px 16px;\n  }\n#electricnow-dashboard-embed .brand {\n    grid-template-columns: 48px minmax(0, 1fr);\n  }\n#electricnow-dashboard-embed .brand strong {\n    font-size: 23px;\n    letter-spacing: 0.18em;\n  }\n#electricnow-dashboard-embed .topbar-actions {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: stretch;\n  }\n#electricnow-dashboard-embed select,\n#electricnow-dashboard-embed .ghost-button {\n    width: 100%;\n    max-width: 100%;\n  }\n#electricnow-dashboard-embed .kpi-grid {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed /* ===== Google Ads section ===== */\n.google-ads-panel .panel-note {\n  margin-bottom: 14px;\n}\n#electricnow-dashboard-embed .google-ads-campaign {\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  justify-content: space-between;\n  align-items: flex-start;\n  border: 1px solid rgba(104, 183, 255, 0.22);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));\n  padding: 14px 16px;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card strong {\n  display: block;\n  margin-top: 4px;\n  font-family: var(--font-display);\n  font-size: 20px;\n  line-height: 1.1;\n  letter-spacing: 0.02em;\n  color: var(--text);\n}\n#electricnow-dashboard-embed .google-ads-campaign-card em {\n  display: block;\n  margin-top: 4px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .google-ads-campaign-meta {\n  text-align: right;\n  min-width: 160px;\n}\n#electricnow-dashboard-embed .google-ads-kpis {\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  margin-bottom: 22px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .google-ads-kpis {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n\n}\n@media (max-width: 560px) {\n#electricnow-dashboard-embed .google-ads-kpis {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed .google-ads-split {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .google-ads-split {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed .google-ads-device-list,\n#electricnow-dashboard-embed .google-ads-action-list {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .google-ads-device-row,\n#electricnow-dashboard-embed .google-ads-action-row {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.62);\n  padding: 12px 14px;\n}\n#electricnow-dashboard-embed .google-ads-device-row header,\n#electricnow-dashboard-embed .google-ads-action-row header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .google-ads-device-row header span,\n#electricnow-dashboard-embed .google-ads-action-row header span {\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .google-ads-device-row header strong,\n#electricnow-dashboard-embed .google-ads-action-row header strong {\n  font-family: var(--font-display);\n  font-size: 18px;\n  letter-spacing: 0.02em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-device-row .share-track {\n  margin: 8px 0 8px;\n}\n#electricnow-dashboard-embed .google-ads-device-metrics {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 14px;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .google-ads-device-metrics em {\n  font-style: normal;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-action-row em {\n  display: block;\n  margin-top: 6px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-context {\n  margin-top: 6px;\n  padding: 12px 14px;\n  border-left: 3px solid var(--warn);\n  background: rgba(255, 200, 87, 0.06);\n  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;\n  color: var(--text);\n}\n#electricnow-dashboard-embed .dotstudios-ads-panel {\n  border-color: rgba(104, 183, 255, 0.22);\n}\n#electricnow-dashboard-embed .dotstudios-ads-kpis {\n  margin: 16px 0 18px;\n}\n#electricnow-dashboard-embed .dotstudios-ads-caveats {\n  display: grid;\n  gap: 8px;\n  margin: 16px 0 0;\n  padding: 14px 16px 14px 30px;\n  border: 1px solid rgba(255, 200, 87, 0.22);\n  border-radius: var(--radius-sm);\n  background: rgba(255, 200, 87, 0.07);\n  color: var(--muted);\n  font-size: 12px;\n  line-height: 1.45;\n}\n#electricnow-dashboard-embed .dotstudios-ads-caveats li::marker {\n  color: var(--primary-2);\n}\n#electricnow-dashboard-embed /* US audience geography section */\n.us-geo-map-wrap {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.5);\n  padding: 16px;\n  margin: 14px 0;\n}\n#electricnow-dashboard-embed .us-geo-map svg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n#electricnow-dashboard-embed .us-geo-map-bg {\n  fill: rgba(10, 21, 36, 0.6);\n  stroke: var(--border);\n  stroke-width: 0.3;\n}\n#electricnow-dashboard-embed .us-geo-bubble circle {\n  transition: opacity 0.15s ease;\n}\n#electricnow-dashboard-embed .us-geo-bubble:hover circle {\n  opacity: 0.85;\n  stroke-width: 0.6;\n}\n#electricnow-dashboard-embed .us-geo-bubble-label {\n  fill: var(--text);\n  font-family: var(--font-ui);\n  font-size: 2px;\n  font-weight: 700;\n  pointer-events: none;\n}\n#electricnow-dashboard-embed .us-geo-map-caption {\n  color: var(--faint);\n  font-size: 12px;\n  margin: 10px 2px 0;\n}\n#electricnow-dashboard-embed .us-geo-tables {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .us-geo-tables {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n\n";
  document.head.appendChild(style);

  if (!document.getElementById('electricnow-dashboard-embed')) {
    const template = document.createElement('template');
    template.innerHTML = "<div id=\"electricnow-dashboard-embed\" class=\"app-shell\">\n      <aside class=\"sidebar\" aria-label=\"Dashboard sections\">\n        <a class=\"brand\" href=\"#overview\" data-testid=\"link-overview\">\n          <svg class=\"brand-mark\" viewBox=\"0 0 48 48\" aria-hidden=\"true\">\n            <path d=\"M30 4 9 28h13l-4 16 22-26H27l3-14Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linejoin=\"round\" />\n            <path d=\"M27 12 15 26h11l-2 9 11-14H24l3-9Z\" fill=\"currentColor\" />\n          </svg>\n          <span><strong>Electric</strong><strong>NOW</strong><small>Growth dashboard</small></span>\n        </a>\n        <nav class=\"side-nav\">\n          <a href=\"#overview\" data-testid=\"nav-overview\">Overview</a>\n          <a href=\"#purchases\" data-testid=\"nav-purchases\">Purchases</a>\n          <a href=\"#live\" data-testid=\"nav-live\">Live TV</a>\n          <a href=\"#sections\" data-testid=\"nav-sections\">App sections</a>\n          <a href=\"#viewership\" data-testid=\"nav-viewership\">Viewership</a>\n          <a href=\"#titles\" data-testid=\"nav-titles\">Top titles</a>\n          <a href=\"#videos\" data-testid=\"nav-videos\">Top videos</a>\n          <a href=\"#tvod-title-revenue\" data-testid=\"nav-tvod-title-revenue\">Registered users</a>\n          <a href=\"#platforms\" data-testid=\"nav-platforms\">Platforms</a>\n          <a href=\"#roku-app\" data-testid=\"nav-roku-app\">Roku app</a>\n          <a href=\"#funnel\" data-testid=\"nav-funnel\">App funnel</a>\n          <a href=\"#ads\" data-testid=\"nav-ads\">Ad signals</a>\n          <a href=\"#dotstudios-app-ads\" data-testid=\"nav-dotstudios-app-ads\">App ads</a>\n          <a href=\"#google-ads\" data-testid=\"nav-google-ads\">Google Ads</a>\n          <a href=\"#content\" data-testid=\"nav-content\">Content</a>\n        </nav>\n        <div class=\"source-card\">\n          <span>Source</span>\n          <strong>Internal GA4 pull</strong>\n          <p>Property 497892271. Reconcile with app-store, Amagi, ad-server, YouTube, and Meta reporting.</p>\n        </div>\n      </aside>\n\n      <header class=\"topbar\">\n        <div>\n          <p class=\"eyebrow\">Private snapshot</p>\n          <h1>ElectricNOW performance dashboard</h1>\n        </div>\n        <div class=\"topbar-actions\">\n          <label class=\"select-label\" for=\"period-select\">Period</label>\n          <select id=\"period-select\" data-testid=\"select-period\">\n            <option value=\"currentWeek\">Latest app usage</option>\n            <option value=\"weekToDate\">Apr 28-30 watch</option>\n          </select>\n          <button class=\"ghost-button refresh-button\" type=\"button\" id=\"refresh-data\" data-testid=\"button-refresh-data\">Update data</button>\n          <button class=\"ghost-button\" type=\"button\" id=\"plain-toggle\" data-testid=\"button-toggle-plain\" aria-controls=\"plain-panel\" aria-expanded=\"false\">Plain English</button>\n          <span class=\"refresh-status\" id=\"refresh-status\" role=\"status\" aria-live=\"polite\"></span>\n        </div>\n      </header>\n\n      <main id=\"main\" class=\"main\" tabindex=\"-1\">\n        <section class=\"hero-panel\" id=\"overview\" aria-labelledby=\"overview-title\">\n          <div>\n            <p class=\"eyebrow\">Corrected metric framing</p>\n            <h2 id=\"overview-title\">Acquisition, app usage, viewing, and time are now separated.</h2>\n            <p>\n              The top scorecards now separate Apple/Android app-stream usage, actual viewing events, sales signals, geography, and time spent across GA4-tracked platforms.\n            </p>\n          </div>\n          <div class=\"hero-meta\">\n            <span id=\"generated-at\">Generated</span>\n            <strong id=\"source-label\">GA4 property 497892271</strong>\n          </div>\n        </section>\n\n        <section class=\"visit-strip\" id=\"visit-summary\" aria-label=\"Weekly and monthly visits\" data-testid=\"section-visit-summary\"></section>\n\n        <section class=\"plain-panel\" id=\"plain-panel\" aria-labelledby=\"plain-title\" tabindex=\"-1\">\n          <div>\n            <p class=\"eyebrow\">Plain-English headlines</p>\n            <h2 id=\"plain-title\">What changed?</h2>\n          </div>\n          <ul id=\"insights-list\" role=\"list\" data-testid=\"list-insights\"></ul>\n        </section>\n\n        <section class=\"kpi-grid\" id=\"kpi-grid\" aria-label=\"Weekly scorecard\" data-testid=\"grid-kpis\"></section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-8\" aria-labelledby=\"traffic-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">App use and engagement</p>\n                <h2 id=\"traffic-title\">Daily app trend</h2>\n              </div>\n              <span class=\"period-chip\" id=\"trend-period\">Apr 14-30</span>\n            </div>\n            <div class=\"chart-legend\" aria-label=\"Daily trend legend\">\n              <span><i class=\"legend-swatch legend-blue\"></i>Blue line: app active users</span>\n              <span><i class=\"legend-swatch legend-green\"></i>Green line: app sessions (daily)</span>\n            </div>\n            <p class=\"chart-note\" id=\"trend-note\"></p>\n            <h3>Past seven days</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Daily traffic and engagement trend\" data-testid=\"chart-traffic\"></svg>\n            </div>\n            <h3>Past month</h3>\n            <div class=\"chart-wrap\">\n              <svg id=\"monthly-traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Monthly app traffic and engagement trend\" data-testid=\"chart-monthly-traffic\"></svg>\n            </div>\n            <h3>Year to date (weekly)</h3>\n            <p class=\"chart-note\" id=\"ytd-trend-note\"></p>\n            <div class=\"chart-wrap\">\n              <svg id=\"ytd-traffic-chart\" viewBox=\"0 0 820 300\" role=\"img\" aria-label=\"Year-to-date weekly app traffic and engagement trend\" data-testid=\"chart-ytd-traffic\"></svg>\n            </div>\n          </article>\n          <article class=\"panel span-4\" id=\"purchases\" aria-labelledby=\"purchase-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Sales baseline</p>\n                <h2 id=\"purchase-title\">In-app purchases and revenue</h2>\n              </div>\n            </div>\n            <div id=\"sales-summary\" class=\"sales-summary\" data-testid=\"section-sales-summary\"></div>\n            <div id=\"purchase-summary\" class=\"purchase-summary\" data-testid=\"section-purchases\"></div>\n            <div class=\"mini-chart-wrap\">\n              <svg id=\"purchase-chart\" viewBox=\"0 0 420 160\" role=\"img\" aria-label=\"Daily in-app purchase trend\"></svg>\n            </div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"sections\" aria-labelledby=\"sections-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">App navigation</p>\n              <h2 id=\"sections-title\">Traffic and time by app section</h2>\n            </div>\n            <span class=\"period-chip\" id=\"section-usage-period\">Latest</span>\n          </div>\n          <p id=\"section-usage-note\" class=\"panel-note\"></p>\n          <div id=\"section-usage-list\" class=\"section-usage-list\" data-testid=\"section-app-sections\"></div>\n        </section>\n\n        <section class=\"dashboard-grid three-col\" id=\"live\" aria-labelledby=\"live-title\">\n          <article class=\"panel span-4\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Live channels</p>\n                <h2 id=\"live-title\">Live TV performance</h2>\n              </div>\n            </div>\n            <div id=\"live-summary\" class=\"metric-list\" data-testid=\"section-live\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"funnel\" aria-labelledby=\"funnel-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">New app funnel</p>\n                <h2 id=\"funnel-title\">Installs to viewing</h2>\n              </div>\n            </div>\n            <div id=\"funnel-list\" class=\"bar-list\" data-testid=\"section-funnel\"></div>\n          </article>\n          <article class=\"panel span-4\" id=\"ads\" aria-labelledby=\"ads-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Monetization proxy</p>\n                <h2 id=\"ads-title\">Ad event signals</h2>\n              </div>\n            </div>\n            <div id=\"ad-list\" class=\"bar-list\" data-testid=\"section-ads\"></div>\n          </article>\n        </section>\n\n        <section class=\"panel dotstudios-ads-panel\" id=\"dotstudios-app-ads\" aria-labelledby=\"dotstudios-app-ads-title\" hidden>\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Manual app ad-serving source</p>\n              <h2 id=\"dotstudios-app-ads-title\">DotStudios App Ad Delivery</h2>\n            </div>\n            <span class=\"period-chip\" id=\"dotstudios-app-ads-period\">Manual upload</span>\n          </div>\n          <p id=\"dotstudios-app-ads-note\" class=\"panel-note\"></p>\n          <div class=\"usage-card-grid dotstudios-ads-kpis\" id=\"dotstudios-app-ads-kpis\" data-testid=\"dotstudios-app-ads-kpis\"></div>\n          <div class=\"google-ads-split\">\n            <div>\n              <h3>By device</h3>\n              <div id=\"dotstudios-app-ads-devices\" class=\"google-ads-device-list\" data-testid=\"dotstudios-app-ads-devices\"></div>\n            </div>\n            <div>\n              <h3>By channel</h3>\n              <div id=\"dotstudios-app-ads-channels\" class=\"google-ads-action-list\" data-testid=\"dotstudios-app-ads-channels\"></div>\n            </div>\n          </div>\n          <h3>Top videos by app ad impressions</h3>\n          <div id=\"dotstudios-app-ads-videos\" class=\"table-wrap title-table\" data-testid=\"table-dotstudios-app-ads-videos\"></div>\n          <h3>Daily app ad delivery</h3>\n          <div id=\"dotstudios-app-ads-daily\" class=\"table-wrap\" data-testid=\"table-dotstudios-app-ads-daily\"></div>\n          <p class=\"panel-note google-ads-context\" id=\"dotstudios-app-ads-plain\"></p>\n          <ul class=\"dotstudios-ads-caveats\" id=\"dotstudios-app-ads-caveats\" data-testid=\"dotstudios-app-ads-caveats\"></ul>\n        </section>\n\n        <section class=\"dashboard-grid two-col\" id=\"viewership\" aria-labelledby=\"viewership-title\">\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2 id=\"viewership-title\">Live channel usage</h2>\n              </div>\n              <span class=\"period-chip\" id=\"content-usage-period\">Latest</span>\n            </div>\n            <div id=\"live-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-live-usage-cards\"></div>\n            <h3>Top 10 Live channels</h3>\n            <div id=\"live-channel-table\" class=\"table-wrap title-table\" data-testid=\"table-live-channels\"></div>\n            <h3>Live usage by platform</h3>\n            <div id=\"live-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-live-platforms\"></div>\n            <h3>Live playback signals</h3>\n            <div id=\"live-playback-list\" class=\"bar-list\" data-testid=\"section-live-playback\"></div>\n            <p id=\"live-usage-note\" class=\"platform-note\"></p>\n          </article>\n          <article class=\"panel span-6\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Feature usage</p>\n                <h2>On Demand usage</h2>\n              </div>\n            </div>\n            <div id=\"ondemand-usage-cards\" class=\"usage-card-grid\" data-testid=\"section-ondemand-usage-cards\"></div>\n            <h3>On Demand usage by platform</h3>\n            <div id=\"ondemand-platform-breakdown\" class=\"platform-share-list\" data-testid=\"section-ondemand-platforms\"></div>\n            <p id=\"ondemand-usage-note\" class=\"platform-note\"></p>\n          </article>\n        </section>\n\n        <section class=\"dashboard-grid two-col\">\n          <article class=\"panel span-6\" id=\"platforms\" aria-labelledby=\"platform-title\">\n            <div class=\"panel-header\">\n              <div>\n                <p class=\"eyebrow\">Measured audience by surface</p>\n                <h2 id=\"platform-title\">Where users are coming from</h2>\n              </div>\n              <span class=\"period-chip\" id=\"platform-mix-period\">Latest</span>\n            </div>\n            <h3>Audience by GA4 stream</h3>\n            <p id=\"surface-note\" class=\"panel-note\"></p>\n            <div id=\"surface-table\" class=\"table-wrap\" data-testid=\"table-surface-breakout\"></div>\n            <h3>Audience by app, web, and connected TV platform</h3>\n            <div id=\"platform-mix\" class=\"platform-mix\" data-testid=\"section-platform-mix\"></div>\n            <p id=\"platform-note\" class=\"platform-note\"></p>\n            <h3>Average time by platform</h3>\n            <p id=\"platform-time-note\" class=\"panel-note\"></p>\n            <div id=\"platform-time-table\" class=\"table-wrap\" data-testid=\"table-platform-time\"></div>\n            <div id=\"platform-table\" class=\"table-wrap\" data-testid=\"table-platform\"></div>\n          </article>\n        </section>\n\n        <section class=\"panel\" id=\"roku-app\" aria-labelledby=\"roku-app-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Roku app report</p>\n              <h2 id=\"roku-app-title\">Roku App Engagement</h2>\n            </div>\n            <span class=\"period-chip\" id=\"roku-app-period\">Latest</span>\n          </div>\n          <p id=\"roku-app-note\" class=\"panel-note\"></p>\n          <div id=\"roku-app-summary\" class=\"usage-card-grid roku-engagement-grid\" data-testid=\"section-roku-app-engagement\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"content\" aria-labelledby=\"content-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">App screen activity and tracking health</p>\n              <h2 id=\"content-title\">Where people are active in the app</h2>\n            </div>\n          </div>\n          <p id=\"content-readout\" class=\"panel-note\"></p>\n          <p id=\"content-note\" class=\"panel-note\"></p>\n          <div id=\"content-table\" class=\"table-wrap\" data-testid=\"table-content\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"titles\" aria-labelledby=\"titles-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by program</p>\n              <h2 id=\"titles-title\">Top 50 watched shows and collections</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-title-period\">Latest</span>\n          </div>\n          <p id=\"top-title-note\" class=\"panel-note\"></p>\n          <div id=\"top-titles-table\" class=\"table-wrap title-table\" data-testid=\"table-top-titles\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"videos\" aria-labelledby=\"videos-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Viewing by individual video</p>\n              <h2 id=\"videos-title\">Top 50 individual videos played</h2>\n            </div>\n            <span class=\"period-chip\" id=\"top-video-period\">Latest</span>\n          </div>\n          <p id=\"top-video-note\" class=\"panel-note\"></p>\n          <div id=\"top-videos-table\" class=\"table-wrap title-table\" data-testid=\"table-top-videos\"></div>\n        </section>\n\n        <section class=\"panel\" id=\"tvod-title-revenue\" aria-labelledby=\"tvod-title-revenue-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\" id=\"tvod-title-revenue-eyebrow\">TVOD title revenue &amp; registered users</p>\n              <h2 id=\"tvod-title-revenue-title\">TVOD Title Revenue &amp; Registered Users</h2>\n            </div>\n            <span class=\"period-chip\" id=\"tvod-title-revenue-period\">Cumulative since launch</span>\n          </div>\n          <p id=\"tvod-title-revenue-note\" class=\"panel-note\"></p>\n          <div class=\"usage-card-grid\" id=\"tvod-title-revenue-summary\" data-testid=\"section-tvod-title-revenue-summary\"></div>\n          <h3>Title-family totals</h3>\n          <div id=\"tvod-title-family-table\" class=\"table-wrap\" data-testid=\"table-tvod-title-family\"></div>\n          <div id=\"tvod-title-revenue-table\" class=\"table-wrap title-table\" data-testid=\"table-tvod-title-revenue\"></div>\n          <h3>Net revenue by channel</h3>\n          <div id=\"tvod-title-revenue-channels\" class=\"table-wrap\" data-testid=\"table-tvod-title-revenue-channels\"></div>\n        </section>\n\n        <section class=\"panel google-ads-panel\" id=\"google-ads\" aria-labelledby=\"google-ads-title\" hidden>\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Paid acquisition efficiency</p>\n              <h2 id=\"google-ads-title\">Google Ads &mdash; Android App Campaign</h2>\n            </div>\n            <span class=\"period-chip\" id=\"google-ads-period\">Latest</span>\n          </div>\n          <p id=\"google-ads-note\" class=\"panel-note\"></p>\n          <div class=\"google-ads-campaign\" id=\"google-ads-campaign\" data-testid=\"google-ads-campaign\"></div>\n          <div class=\"usage-card-grid google-ads-kpis\" id=\"google-ads-kpis\" data-testid=\"google-ads-kpis\"></div>\n          <div class=\"google-ads-split\">\n            <div>\n              <h3>By device</h3>\n              <div id=\"google-ads-devices\" class=\"google-ads-device-list\" data-testid=\"google-ads-devices\"></div>\n            </div>\n            <div>\n              <h3>Conversion actions</h3>\n              <div id=\"google-ads-actions\" class=\"google-ads-action-list\" data-testid=\"google-ads-actions\"></div>\n            </div>\n          </div>\n          <p class=\"panel-note google-ads-context\" id=\"google-ads-plain\"></p>\n        </section>\n\n        <section class=\"panel gaps-panel\" aria-labelledby=\"gaps-title\">\n          <div class=\"panel-header\">\n            <div>\n              <p class=\"eyebrow\">Developer follow-up</p>\n              <h2 id=\"gaps-title\">Measurement gaps to close</h2>\n            </div>\n          </div>\n          <ul id=\"gaps-list\" class=\"gap-list\" role=\"list\" data-testid=\"list-gaps\"></ul>\n        </section>\n\n      </main>\n    </div>";
    const mount = document.getElementById('electricnow-dashboard-hosted-mount');
    if (mount) {
      mount.replaceWith(template.content.cloneNode(true));
    } else {
      const script = document.currentScript;
      if (script && script.parentNode) {
        script.parentNode.insertBefore(template.content.cloneNode(true), script);
      } else {
        document.body.appendChild(template.content.cloneNode(true));
      }
    }
  }

window.ELECTRICNOW_DASHBOARD_DATA = {
  "generatedAt": "September 19, 2026 (Pacific)",
  "property": "properties/497892271",
  "sourceLabel": "Internal GA4 pull, property 497892271, plus labeled connector and manual sources (Stripe, Roku email, Apple manual, DotStudios, Google Ads, Meta, YouTube).",
  "periods": {
    "launchBaseline": {
      "label": "Launch baseline",
      "range": "Apr 13-Apr 19, 2026",
      "start": "2026-04-13",
      "end": "2026-04-19"
    },
    "previousWeek": {
      "label": "Previous 7 complete days",
      "range": "Sep 5-Sep 11, 2026",
      "start": "2026-09-05",
      "end": "2026-09-11"
    },
    "baseline": {
      "label": "Previous 7 complete days",
      "range": "Sep 5-Sep 11, 2026",
      "start": "2026-09-05",
      "end": "2026-09-11"
    },
    "currentWeek": {
      "label": "Latest 7 complete days",
      "range": "Sep 12-Sep 18, 2026",
      "start": "2026-09-12",
      "end": "2026-09-18"
    },
    "weekToDate": {
      "label": "Latest 7 complete days",
      "range": "Sep 12-Sep 18, 2026",
      "start": "2026-09-12",
      "end": "2026-09-18"
    },
    "current": {
      "label": "Latest 7 complete days",
      "range": "Sep 12-Sep 18, 2026",
      "start": "2026-09-12",
      "end": "2026-09-18"
    },
    "previous": {
      "label": "Previous 7 complete days",
      "range": "Sep 5-Sep 11, 2026",
      "start": "2026-09-05",
      "end": "2026-09-11"
    },
    "rolling28Current": {
      "label": "Latest rolling 28 complete days",
      "range": "Aug 22-Sep 18, 2026",
      "start": "2026-08-22",
      "end": "2026-09-18"
    },
    "rolling28Previous": {
      "label": "Prior rolling 28 complete days",
      "range": "Jul 25-Aug 21, 2026",
      "start": "2026-07-25",
      "end": "2026-08-21"
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
      "purchaseRevenue": 89.94999999999999
    },
    "previousWeek": {
      "activeUsers": 4076,
      "newUsers": 1102,
      "sessions": 9864,
      "engagedSessions": 8178,
      "engagementRate": 82.91,
      "screenPageViews": 49830,
      "eventCount": 990331,
      "userEngagementDuration": 22768107,
      "totalEngagementHours": 6324.47,
      "avgEngagedMinutesPerUser": 93.09824582924436,
      "avgEngagedMinutesPerSession": 38.47003751013788
    },
    "baseline": {
      "activeUsers": 4076,
      "newUsers": 1102,
      "sessions": 9864,
      "engagedSessions": 8178,
      "engagementRate": 82.91,
      "screenPageViews": 49830,
      "eventCount": 990331,
      "userEngagementDuration": 22768107,
      "totalEngagementHours": 6324.47,
      "avgEngagedMinutesPerUser": 93.09824582924436,
      "avgEngagedMinutesPerSession": 38.47003751013788
    },
    "currentWeek": {
      "activeUsers": 3871,
      "newUsers": 978,
      "sessions": 9659,
      "engagedSessions": 6658,
      "engagementRate": 68.93,
      "screenPageViews": 42988,
      "eventCount": 1007206,
      "userEngagementDuration": 20471008,
      "totalEngagementHours": 5686.39,
      "avgEngagedMinutesPerUser": 88.13832773615776,
      "avgEngagedMinutesPerSession": 35.322856058253095
    },
    "weekToDate": {
      "activeUsers": 3871,
      "newUsers": 978,
      "sessions": 9659,
      "engagedSessions": 6658,
      "engagementRate": 68.93,
      "screenPageViews": 42988,
      "eventCount": 1007206,
      "userEngagementDuration": 20471008,
      "totalEngagementHours": 5686.39,
      "avgEngagedMinutesPerUser": 88.13832773615776,
      "avgEngagedMinutesPerSession": 35.322856058253095
    },
    "current": {
      "activeUsers": 3871,
      "newUsers": 978,
      "sessions": 9659,
      "engagedSessions": 6658,
      "engagementRate": 68.93,
      "screenPageViews": 42988,
      "eventCount": 1007206,
      "userEngagementDuration": 20471008,
      "totalEngagementHours": 5686.39,
      "avgEngagedMinutesPerUser": 88.13832773615776,
      "avgEngagedMinutesPerSession": 35.322856058253095
    },
    "previous": {
      "activeUsers": 4076,
      "newUsers": 1102,
      "sessions": 9864,
      "engagedSessions": 8178,
      "engagementRate": 82.91,
      "screenPageViews": 49830,
      "eventCount": 990331,
      "userEngagementDuration": 22768107,
      "totalEngagementHours": 6324.47,
      "avgEngagedMinutesPerUser": 93.09824582924436,
      "avgEngagedMinutesPerSession": 38.47003751013788
    },
    "rolling28Current": {
      "activeUsers": 12315,
      "newUsers": 4944,
      "sessions": 40695,
      "engagedSessions": 31697,
      "engagementRate": 77.89,
      "screenPageViews": 207703,
      "eventCount": 4028429,
      "userEngagementDuration": 89075712,
      "totalEngagementHours": 24743.25,
      "avgEngagedMinutesPerUser": 120.55178237921234,
      "avgEngagedMinutesPerSession": 36.48102223860425
    },
    "rolling28Previous": {
      "activeUsers": 15370,
      "newUsers": 8353,
      "sessions": 51034,
      "engagedSessions": 41656,
      "engagementRate": 81.62,
      "screenPageViews": 200128,
      "eventCount": 4330119,
      "userEngagementDuration": 88940323,
      "totalEngagementHours": 24705.65,
      "avgEngagedMinutesPerUser": 96.44363803947083,
      "avgEngagedMinutesPerSession": 29.04610096536949
    }
  },
  "scorecards": [
    {
      "key": "platformActiveUsers",
      "label": "Platform active users",
      "baseline": 4076,
      "launchBaseline": 8709,
      "previousWeek": 4076,
      "current": 3871,
      "deltaPct": -5.029440628066732,
      "deltaVsPreviousPct": -5.029440628066732,
      "deltaVsLaunchPct": -55.551728097370535,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 active users on app/platform surfaces; landing pages excluded.",
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "currentWeek": 3871,
      "previous": 4076,
      "changePct": -5.029440628066732,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "deltaVsBaselinePct": -5.029440628066732
    },
    {
      "key": "newUsers",
      "label": "New users",
      "baseline": 1102,
      "launchBaseline": null,
      "previousWeek": 1102,
      "current": 978,
      "deltaPct": -11.252268602540836,
      "deltaVsPreviousPct": -11.252268602540836,
      "deltaVsLaunchPct": null,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 new users on measured ElectricNOW platform surfaces.",
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "currentWeek": 978,
      "previous": 1102,
      "changePct": -11.252268602540836,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "deltaVsBaselinePct": -11.252268602540836
    },
    {
      "key": "platformSessions",
      "label": "Platform sessions",
      "baseline": 9864,
      "launchBaseline": 13316,
      "previousWeek": 9864,
      "current": 9659,
      "deltaPct": -2.078264395782644,
      "deltaVsPreviousPct": -2.078264395782644,
      "deltaVsLaunchPct": -27.463202162811655,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 sessions on app/platform surfaces; landing pages excluded.",
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "currentWeek": 9659,
      "previous": 9864,
      "changePct": -2.078264395782644,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "deltaVsBaselinePct": -2.078264395782644
    },
    {
      "key": "engagedSessions",
      "label": "Engaged sessions",
      "baseline": 8178,
      "launchBaseline": null,
      "previousWeek": 8178,
      "current": 6658,
      "deltaPct": -18.586451455123502,
      "deltaVsPreviousPct": -18.586451455123502,
      "deltaVsLaunchPct": null,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 engaged sessions.",
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "currentWeek": 6658,
      "previous": 8178,
      "changePct": -18.586451455123502,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "deltaVsBaselinePct": -18.586451455123502
    },
    {
      "key": "engagementRate",
      "label": "Engagement rate",
      "baseline": 82.91,
      "launchBaseline": null,
      "previousWeek": 82.91,
      "current": 68.93,
      "deltaPct": -13.97999999999999,
      "deltaVsPreviousPct": -13.97999999999999,
      "deltaVsLaunchPct": null,
      "deltaType": "percentage_points",
      "format": "percent",
      "context": "Internal GA4 pull, property 497892271; landing-page acquisition paths excluded from platform audience where applicable.",
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "currentWeek": 68.93,
      "previous": 82.91,
      "changePct": -13.97999999999999,
      "deltaVsBaselinePct": -13.97999999999999,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271"
    },
    {
      "key": "screenPageViews",
      "label": "Screen/page views",
      "baseline": 49830,
      "launchBaseline": null,
      "previousWeek": 49830,
      "current": 42988,
      "deltaPct": -13.730684326710819,
      "deltaVsPreviousPct": -13.730684326710819,
      "deltaVsLaunchPct": null,
      "deltaType": "percent",
      "format": "number",
      "context": "Internal GA4 pull, property 497892271; landing-page acquisition paths excluded from platform audience where applicable.",
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "currentWeek": 42988,
      "previous": 49830,
      "changePct": -13.730684326710819,
      "deltaVsBaselinePct": -13.730684326710819,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271"
    },
    {
      "key": "eventCount",
      "label": "Events",
      "baseline": 990331,
      "launchBaseline": null,
      "previousWeek": 990331,
      "current": 1007206,
      "deltaPct": 1.703975741444022,
      "deltaVsPreviousPct": 1.703975741444022,
      "deltaVsLaunchPct": null,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 event count across measured app/platform surfaces.",
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "currentWeek": 1007206,
      "previous": 990331,
      "changePct": 1.703975741444022,
      "direction": "up",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "deltaVsBaselinePct": 1.703975741444022
    }
  ],
  "trend": {
    "period": "Sep 12-Sep 18, 2026",
    "previousPeriod": "Sep 5-Sep 11, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "date": "2026-09-12",
        "sessions": 1315,
        "activeUsers": 834
      },
      {
        "date": "2026-09-13",
        "sessions": 1365,
        "activeUsers": 779
      },
      {
        "date": "2026-09-14",
        "sessions": 1276,
        "activeUsers": 736
      },
      {
        "date": "2026-09-15",
        "sessions": 1278,
        "activeUsers": 762
      },
      {
        "date": "2026-09-16",
        "sessions": 1316,
        "activeUsers": 722
      },
      {
        "date": "2026-09-17",
        "sessions": 1394,
        "activeUsers": 762
      },
      {
        "date": "2026-09-18",
        "sessions": 1767,
        "activeUsers": 973
      }
    ],
    "previousRows": [
      {
        "date": "2026-09-05",
        "sessions": 1417,
        "activeUsers": 851
      },
      {
        "date": "2026-09-06",
        "sessions": 1473,
        "activeUsers": 879
      },
      {
        "date": "2026-09-07",
        "sessions": 1533,
        "activeUsers": 881
      },
      {
        "date": "2026-09-08",
        "sessions": 1424,
        "activeUsers": 830
      },
      {
        "date": "2026-09-09",
        "sessions": 1441,
        "activeUsers": 822
      },
      {
        "date": "2026-09-10",
        "sessions": 1583,
        "activeUsers": 928
      },
      {
        "date": "2026-09-11",
        "sessions": 1289,
        "activeUsers": 772
      }
    ],
    "note": "GA4 property 497892271 only. Landing-page traffic is treated as acquisition only, not platform audience."
  },
  "eventCards": [
    {
      "eventName": "app_time",
      "eventCount": 309658,
      "previousWeek": 290343,
      "deltaPct": 6.652476553593509,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_request",
      "eventCount": 33624,
      "previousWeek": 23134,
      "deltaPct": 45.344514567303534,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "screen_view",
      "eventCount": 32738,
      "previousWeek": 37779,
      "deltaPct": -13.343391831440748,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_impression",
      "eventCount": 32155,
      "previousWeek": 18534,
      "deltaPct": 73.49196072083738,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_progress",
      "eventCount": 24049,
      "previousWeek": 28121,
      "deltaPct": -14.480281640055475,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "play",
      "eventCount": 23501,
      "previousWeek": 23299,
      "deltaPct": 0.8669899995707971,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_play",
      "eventCount": 22172,
      "previousWeek": 25061,
      "deltaPct": -11.527871992338694,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_started",
      "eventCount": 16769,
      "previousWeek": 15630,
      "deltaPct": 7.287268074216251,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_loaded",
      "eventCount": 16745,
      "previousWeek": 15633,
      "deltaPct": 7.113158063071707,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_complete",
      "eventCount": 16265,
      "previousWeek": 15088,
      "deltaPct": 7.800901378579003,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_start",
      "eventCount": 14500,
      "previousWeek": 16084,
      "deltaPct": -9.848296443670728,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "session_start",
      "eventCount": 8881,
      "previousWeek": 9837,
      "deltaPct": -9.718410084375318,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_complete",
      "eventCount": 3911,
      "previousWeek": 4617,
      "deltaPct": -15.291314706519385,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "search",
      "eventCount": 1623,
      "previousWeek": 2325,
      "deltaPct": -30.193548387096776,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_error",
      "eventCount": 1598,
      "previousWeek": 7977,
      "deltaPct": -79.96740629309265,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "application_install",
      "eventCount": 771,
      "previousWeek": 945,
      "deltaPct": -18.412698412698415,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "application_update",
      "eventCount": 768,
      "previousWeek": 1125,
      "deltaPct": -31.733333333333334,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "first_open",
      "eventCount": 399,
      "previousWeek": 501,
      "deltaPct": -20.35928143712575,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "in_app_purchase",
      "eventCount": 14,
      "previousWeek": 6,
      "deltaPct": 133.33333333333331,
      "period": "Sep 12-Sep 18, 2026",
      "comparisonPeriod": "Sep 5-Sep 11, 2026",
      "source": "Internal GA4 pull, property 497892271"
    }
  ],
  "purchaseFunnel": [
    {
      "event": "in_app_purchase",
      "label": "Purchase completed",
      "baseline": 2,
      "current": 20,
      "weekToDate": 20,
      "deltaPct": 900,
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
      "first_open": 555,
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
      "app_open": 251,
      "play": 7706,
      "ads_impression": 4681
    },
    {
      "date": "Jun 1",
      "rawDate": "20260601",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 662,
      "first_open": 568,
      "app_open": 222,
      "play": 14420,
      "ads_impression": 4154
    },
    {
      "date": "Jun 2",
      "rawDate": "20260602",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 663,
      "first_open": 545,
      "app_open": 202,
      "play": 6891,
      "ads_impression": 4466
    },
    {
      "date": "Jun 3",
      "rawDate": "20260603",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 668,
      "first_open": 535,
      "app_open": 205,
      "play": 7033,
      "ads_impression": 4345
    },
    {
      "date": "Jun 4",
      "rawDate": "20260604",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 617,
      "first_open": 511,
      "app_open": 234,
      "play": 6597,
      "ads_impression": 4507
    },
    {
      "date": "Jun 5",
      "rawDate": "20260605",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 572,
      "first_open": 487,
      "app_open": 241,
      "play": 6472,
      "ads_impression": 4360
    },
    {
      "date": "Jun 6",
      "rawDate": "20260606",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 563,
      "first_open": 458,
      "app_open": 224,
      "play": 7369,
      "ads_impression": 5009
    },
    {
      "date": "Jun 7",
      "rawDate": "20260607",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 709,
      "first_open": 595,
      "app_open": 284,
      "play": 8674,
      "ads_impression": 5054
    },
    {
      "date": "Jun 8",
      "rawDate": "20260608",
      "purchaseRevenue": 14.99,
      "in_app_purchase": 1,
      "application_install": 611,
      "first_open": 518,
      "app_open": 265,
      "play": 8039,
      "ads_impression": 5669
    },
    {
      "date": "Jun 9",
      "rawDate": "20260609",
      "purchaseRevenue": 29.98,
      "in_app_purchase": 2,
      "application_install": 622,
      "first_open": 509,
      "app_open": 336,
      "play": 8473,
      "ads_impression": 4644
    },
    {
      "date": "Jun 10",
      "rawDate": "20260610",
      "purchaseRevenue": 14.99,
      "in_app_purchase": 1,
      "application_install": 590,
      "first_open": 499,
      "app_open": 290,
      "play": 8385,
      "ads_impression": 4665
    },
    {
      "date": "Jun 11",
      "rawDate": "20260611",
      "purchaseRevenue": 14.99,
      "in_app_purchase": 1,
      "application_install": 617,
      "first_open": 518,
      "app_open": 273,
      "play": 8639,
      "ads_impression": 5420
    },
    {
      "date": "Jun 12",
      "rawDate": "20260612",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 524,
      "first_open": 459,
      "app_open": 274,
      "play": 6912,
      "ads_impression": 6599
    },
    {
      "date": "Jun 13",
      "rawDate": "20260613",
      "purchaseRevenue": 14.99,
      "in_app_purchase": 1,
      "application_install": 430,
      "first_open": 292,
      "app_open": 263,
      "play": 6954,
      "ads_impression": 6311
    },
    {
      "date": "Jun 14",
      "rawDate": "20260614",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 381,
      "first_open": 238,
      "app_open": 285,
      "play": 6661,
      "ads_impression": 5062
    },
    {
      "date": "Jun 15",
      "rawDate": "20260615",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 403,
      "first_open": 301,
      "app_open": 327,
      "play": 9036,
      "ads_impression": 4664
    },
    {
      "date": "Jun 16",
      "rawDate": "20260616",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 345,
      "first_open": 243,
      "app_open": 289,
      "play": 6037,
      "ads_impression": 4755
    },
    {
      "date": "Jun 17",
      "rawDate": "20260617",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 345,
      "first_open": 249,
      "app_open": 276,
      "play": 6229,
      "ads_impression": 5535
    },
    {
      "date": "Jun 18",
      "rawDate": "20260618",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 398,
      "first_open": 268,
      "app_open": 273,
      "play": 5854,
      "ads_impression": 5951
    },
    {
      "date": "Jun 19",
      "rawDate": "20260619",
      "purchaseRevenue": 54.99,
      "in_app_purchase": 1,
      "application_install": 416,
      "first_open": 307,
      "app_open": 288,
      "play": 5472,
      "ads_impression": 5463
    },
    {
      "date": "Jun 20",
      "rawDate": "20260620",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 387,
      "first_open": 254,
      "app_open": 251,
      "play": 5668,
      "ads_impression": 4984
    },
    {
      "date": "Jun 21",
      "rawDate": "20260621",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 453,
      "first_open": 321,
      "app_open": 230,
      "play": 6550,
      "ads_impression": 5117
    },
    {
      "date": "Jun 22",
      "rawDate": "20260622",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 376,
      "first_open": 261,
      "app_open": 289,
      "play": 9537,
      "ads_impression": 6628
    },
    {
      "date": "Jun 23",
      "rawDate": "20260623",
      "purchaseRevenue": 54.99,
      "in_app_purchase": 1,
      "application_install": 320,
      "first_open": 233,
      "app_open": 279,
      "play": 6660,
      "ads_impression": 6220
    },
    {
      "date": "Jun 24",
      "rawDate": "20260624",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 329,
      "first_open": 233,
      "app_open": 243,
      "play": 6349,
      "ads_impression": 5107
    },
    {
      "date": "Jun 25",
      "rawDate": "20260625",
      "purchaseRevenue": 14.99,
      "in_app_purchase": 1,
      "application_install": 309,
      "first_open": 222,
      "app_open": 271,
      "play": 7128,
      "ads_impression": 6419
    },
    {
      "date": "Jun 26",
      "rawDate": "20260626",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 326,
      "first_open": 221,
      "app_open": 301,
      "play": 8628,
      "ads_impression": 6057
    },
    {
      "date": "Jun 27",
      "rawDate": "20260627",
      "purchaseRevenue": 29.98,
      "in_app_purchase": 2,
      "application_install": 393,
      "first_open": 270,
      "app_open": 259,
      "play": 7791,
      "ads_impression": 5694
    },
    {
      "date": "Jun 28",
      "rawDate": "20260628",
      "purchaseRevenue": 14.99,
      "in_app_purchase": 1,
      "application_install": 393,
      "first_open": 277,
      "app_open": 317,
      "play": 8759,
      "ads_impression": 6591
    },
    {
      "date": "Jun 29",
      "rawDate": "20260629",
      "purchaseRevenue": 14.99,
      "in_app_purchase": 1,
      "application_install": 298,
      "first_open": 184,
      "app_open": 311,
      "play": 6368,
      "ads_impression": 5576
    },
    {
      "date": "Jun 30",
      "rawDate": "20260630",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 205,
      "first_open": 134,
      "app_open": 341,
      "play": 6783,
      "ads_impression": 6353
    },
    {
      "date": "Jul 1",
      "rawDate": "20260701",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 145,
      "first_open": 79,
      "app_open": 329,
      "play": 6393,
      "ads_impression": 5423
    },
    {
      "date": "Jul 2",
      "rawDate": "20260702",
      "purchaseRevenue": 14.99,
      "in_app_purchase": 1,
      "application_install": 208,
      "first_open": 113,
      "app_open": 296,
      "play": 6108,
      "ads_impression": 5178
    },
    {
      "date": "Jul 3",
      "rawDate": "20260703",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 214,
      "first_open": 107,
      "app_open": 302,
      "play": 5980,
      "ads_impression": 4588
    },
    {
      "date": "Jul 4",
      "rawDate": "20260704",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 268,
      "first_open": 130,
      "app_open": 486,
      "play": 8093,
      "ads_impression": 3736
    },
    {
      "date": "Jul 5",
      "rawDate": "20260705",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 195,
      "first_open": 83,
      "app_open": 407,
      "play": 7492,
      "ads_impression": 4147
    },
    {
      "date": "Jul 6",
      "rawDate": "20260706",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 213,
      "first_open": 111,
      "app_open": 377,
      "play": 7045,
      "ads_impression": 4778
    },
    {
      "date": "Jul 7",
      "rawDate": "20260707",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 177,
      "first_open": 82,
      "app_open": 367,
      "play": 9741,
      "ads_impression": 4212
    },
    {
      "date": "Jul 8",
      "rawDate": "20260708",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 191,
      "first_open": 95,
      "app_open": 380,
      "play": 6911,
      "ads_impression": 4869
    },
    {
      "date": "Jul 9",
      "rawDate": "20260709",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 168,
      "first_open": 74,
      "app_open": 391,
      "play": 7514,
      "ads_impression": 5192
    },
    {
      "date": "Jul 10",
      "rawDate": "20260710",
      "purchaseRevenue": 19.99,
      "in_app_purchase": 1,
      "application_install": 146,
      "first_open": 67,
      "app_open": 343,
      "play": 7101,
      "ads_impression": 5098
    },
    {
      "date": "Jul 11",
      "rawDate": "20260711",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 153,
      "first_open": 65,
      "app_open": 355,
      "play": 7625,
      "ads_impression": 5149
    },
    {
      "date": "Jul 12",
      "rawDate": "20260712",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 164,
      "first_open": 73,
      "app_open": 366,
      "play": 7698,
      "ads_impression": 5681
    },
    {
      "date": "Jul 13",
      "rawDate": "20260713",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 130,
      "first_open": 58,
      "app_open": 357,
      "play": 6927,
      "ads_impression": 4781
    },
    {
      "date": "Jul 14",
      "rawDate": "20260714",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 129,
      "first_open": 44,
      "app_open": 335,
      "play": 6613,
      "ads_impression": 4961
    },
    {
      "date": "Jul 15",
      "rawDate": "20260715",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 137,
      "first_open": 74,
      "app_open": 382,
      "play": 7979,
      "ads_impression": 5802
    },
    {
      "date": "Jul 16",
      "rawDate": "20260716",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 181,
      "first_open": 90,
      "app_open": 378,
      "play": 8029,
      "ads_impression": 5538
    },
    {
      "date": "Jul 17",
      "rawDate": "20260717",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 181,
      "first_open": 84,
      "app_open": 391,
      "play": 12823,
      "ads_impression": 5833
    },
    {
      "date": "Jul 18",
      "rawDate": "20260718",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 175,
      "first_open": 82,
      "app_open": 347,
      "play": 6782,
      "ads_impression": 4917
    },
    {
      "date": "Jul 19",
      "rawDate": "20260719",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 163,
      "first_open": 82,
      "app_open": 412,
      "play": 7033,
      "ads_impression": 4874
    },
    {
      "date": "Jul 20",
      "rawDate": "20260720",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 156,
      "first_open": 76,
      "app_open": 370,
      "play": 7792,
      "ads_impression": 6280
    },
    {
      "date": "Jul 21",
      "rawDate": "20260721",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 183,
      "first_open": 89,
      "app_open": 394,
      "play": 7997,
      "ads_impression": 5375
    },
    {
      "date": "Jul 22",
      "rawDate": "20260722",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 169,
      "first_open": 84,
      "app_open": 361,
      "play": 8740,
      "ads_impression": 6345
    },
    {
      "date": "Jul 23",
      "rawDate": "20260723",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 154,
      "first_open": 84,
      "app_open": 420,
      "play": 8379,
      "ads_impression": 6944
    },
    {
      "date": "Jul 24",
      "rawDate": "20260724",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 149,
      "first_open": 61,
      "app_open": 426,
      "play": 8340,
      "ads_impression": 6372
    },
    {
      "date": "Jul 25",
      "rawDate": "20260725",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 155,
      "first_open": 80,
      "app_open": 356,
      "play": 7943,
      "ads_impression": 5252
    },
    {
      "date": "Jul 26",
      "rawDate": "20260726",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 170,
      "first_open": 88,
      "app_open": 422,
      "play": 9616,
      "ads_impression": 7523
    },
    {
      "date": "Jul 27",
      "rawDate": "20260727",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 197,
      "first_open": 127,
      "app_open": 456,
      "play": 8293,
      "ads_impression": 6574
    },
    {
      "date": "Jul 28",
      "rawDate": "20260728",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 311,
      "first_open": 188,
      "app_open": 521,
      "play": 11950,
      "ads_impression": 8295
    },
    {
      "date": "Jul 29",
      "rawDate": "20260729",
      "purchaseRevenue": 0,
      "in_app_purchase": 0,
      "application_install": 442,
      "first_open": 288,
      "app_open": 739,
      "play": 12019,
      "ads_impression": 9156
    },
    {
      "date": "Jul 30",
      "rawDate": "20260730",
      "purchaseRevenue": 171.32,
      "in_app_purchase": 8,
      "application_install": 632,
      "first_open": 414,
      "app_open": 888,
      "play": 10459,
      "ads_impression": 6522
    },
    {
      "date": "Jul 31",
      "rawDate": "20260731",
      "purchaseRevenue": 62.97,
      "in_app_purchase": 3,
      "application_install": 337,
      "first_open": 219,
      "app_open": 886,
      "play": 10396,
      "ads_impression": 7369
    },
    {
      "date": "Aug 1",
      "rawDate": "20260801",
      "purchaseRevenue": 166.92,
      "in_app_purchase": 8,
      "application_install": 273,
      "first_open": 181,
      "app_open": 764,
      "play": 11103,
      "ads_impression": 7919
    },
    {
      "date": "Aug 2",
      "rawDate": "20260802",
      "purchaseRevenue": 20.99,
      "in_app_purchase": 1,
      "application_install": 301,
      "first_open": 199,
      "app_open": 719,
      "play": 11546,
      "ads_impression": 8040
    }
  ],
  "platforms": [
    {
      "platform": "web",
      "activeUsers": 1978,
      "sessions": 5559,
      "screenPageViews": 24658,
      "eventCount": 0,
      "period": "Sep 12-Sep 18, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "platform": "iOS",
      "activeUsers": 1063,
      "sessions": 2110,
      "screenPageViews": 9687,
      "eventCount": 0,
      "period": "Sep 12-Sep 18, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "platform": "Android",
      "activeUsers": 839,
      "sessions": 1955,
      "screenPageViews": 8643,
      "eventCount": 0,
      "period": "Sep 12-Sep 18, 2026",
      "source": "Internal GA4 pull, property 497892271"
    }
  ],
  "platformMix": {
    "period": "Sep 12-Sep 18, 2026",
    "metric": "Active users",
    "totalViewers": 3835,
    "note": "Viewer share uses GA4 active users grouped by GA4 data stream for the reporting week. Amazon / Fire TV and Apple TV are shown as DotStudios manual video-views breakouts for the same week, so they are viewing signals and not directly comparable to GA4 active-user rows. People who use more than one platform may appear in more than one bucket.",
    "groups": [
      {
        "platform": "Web",
        "category": "Web",
        "tracked": true,
        "activeUsers": 713,
        "sharePct": 18.6,
        "sessions": 1689,
        "engagedSessions": 1146,
        "detail": "Browser and web playback from the electricnow-web GA4 stream."
      },
      {
        "platform": "Apple app stream",
        "category": "App",
        "tracked": true,
        "activeUsers": 1063,
        "sharePct": 27.7,
        "sessions": 2106,
        "engagedSessions": 1601,
        "detail": "iPhone and iPad app activity; Apple TV may also be included here until it is tagged separately."
      },
      {
        "platform": "Android mobile app",
        "category": "App",
        "tracked": true,
        "activeUsers": 603,
        "sharePct": 15.7,
        "sessions": 1435,
        "engagedSessions": 1015,
        "detail": "Android phone/tablet activity from the ElectricNOW Android GA4 stream."
      },
      {
        "platform": "Roku",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 1220,
        "sharePct": 31.8,
        "sessions": 3829,
        "engagedSessions": 2376,
        "detail": "Roku activity from the electricnow-roku GA4 stream."
      },
      {
        "platform": "Android TV / Google TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 236,
        "sharePct": 6.2,
        "sessions": 523,
        "engagedSessions": 455,
        "detail": "Android TV / Google TV stream activity. Fire TV devices report through this stream and are not split out in this week's GA4 pull; see the DotStudios Fire TV views row."
      },
      {
        "platform": "Amazon / Fire TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": null,
        "sharePct": 8.3,
        "sessions": null,
        "engagedSessions": null,
        "detail": "DotStudios video-views export shows 1,222 Amazon / Fire TV views for Sep 12-Sep 18, 2026, equal to 8.3% of 14,674 DotStudios video views. This is not a GA4 active-user count.",
        "views": 1222,
        "metricLabel": "views",
        "sourceLabel": "DotStudios",
        "sourcePeriod": "Sep 12-Sep 18, 2026"
      },
      {
        "platform": "Apple TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": null,
        "sharePct": 1.8,
        "sessions": null,
        "engagedSessions": null,
        "detail": "DotStudios video-views export shows 263 Apple TV views for Sep 12-Sep 18, 2026, equal to 1.8% of 14,674 DotStudios video views. This is not a GA4 active-user count.",
        "views": 263,
        "metricLabel": "views",
        "sourceLabel": "DotStudios",
        "sourcePeriod": "Sep 12-Sep 18, 2026"
      }
    ],
    "comingSoon": [
      "Samsung",
      "LG",
      "Vizio"
    ],
    "status": "fresh"
  },
  "topPages": {
    "period": "Sep 12-Sep 18, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "unifiedPageScreen": "PDP",
        "screenPageViews": 7587,
        "activeUsers": 1455,
        "sessions": 3769,
        "eventCount": 11601,
        "userEngagementDuration": 234518,
        "totalEngagementHours": 65.1438888888889
      },
      {
        "unifiedPageScreen": "Splash",
        "screenPageViews": 6751,
        "activeUsers": 2859,
        "sessions": 6216,
        "eventCount": 12032,
        "userEngagementDuration": 15258,
        "totalEngagementHours": 4.238333333333333
      },
      {
        "unifiedPageScreen": "Home Page",
        "screenPageViews": 6490,
        "activeUsers": 2131,
        "sessions": 4725,
        "eventCount": 10107,
        "userEngagementDuration": 92371,
        "totalEngagementHours": 25.65861111111111
      },
      {
        "unifiedPageScreen": "ElectricNOW",
        "screenPageViews": 5323,
        "activeUsers": 630,
        "sessions": 1492,
        "eventCount": 97399,
        "userEngagementDuration": 1697596,
        "totalEngagementHours": 471.55444444444447
      },
      {
        "unifiedPageScreen": "Player",
        "screenPageViews": 3922,
        "activeUsers": 714,
        "sessions": 2585,
        "eventCount": 60450,
        "userEngagementDuration": 4418855,
        "totalEngagementHours": 1227.4597222222221
      },
      {
        "unifiedPageScreen": "Intro",
        "screenPageViews": 3212,
        "activeUsers": 1606,
        "sessions": 2877,
        "eventCount": 7112,
        "userEngagementDuration": 21271,
        "totalEngagementHours": 5.908611111111111
      },
      {
        "unifiedPageScreen": "(not set)",
        "screenPageViews": 2808,
        "activeUsers": 2576,
        "sessions": 6107,
        "eventCount": 617739,
        "userEngagementDuration": 7679327,
        "totalEngagementHours": 2133.146388888889
      },
      {
        "unifiedPageScreen": "Live",
        "screenPageViews": 1829,
        "activeUsers": 514,
        "sessions": 1789,
        "eventCount": 13392,
        "userEngagementDuration": 3825076,
        "totalEngagementHours": 1062.5211111111112
      },
      {
        "unifiedPageScreen": "Search Channels",
        "screenPageViews": 670,
        "activeUsers": 236,
        "sessions": 397,
        "eventCount": 2016,
        "userEngagementDuration": 8625,
        "totalEngagementHours": 2.3958333333333335
      },
      {
        "unifiedPageScreen": "My List",
        "screenPageViews": 619,
        "activeUsers": 181,
        "sessions": 430,
        "eventCount": 878,
        "userEngagementDuration": 2254,
        "totalEngagementHours": 0.6261111111111111
      },
      {
        "unifiedPageScreen": "",
        "screenPageViews": 486,
        "activeUsers": 619,
        "sessions": 1426,
        "eventCount": 151788,
        "userEngagementDuration": 1750186,
        "totalEngagementHours": 486.16277777777776
      },
      {
        "unifiedPageScreen": "Category",
        "screenPageViews": 423,
        "activeUsers": 171,
        "sessions": 258,
        "eventCount": 605,
        "userEngagementDuration": 4722,
        "totalEngagementHours": 1.3116666666666668
      },
      {
        "unifiedPageScreen": "Settings",
        "screenPageViews": 365,
        "activeUsers": 154,
        "sessions": 185,
        "eventCount": 725,
        "userEngagementDuration": 4555,
        "totalEngagementHours": 1.2652777777777777
      },
      {
        "unifiedPageScreen": "Search: leverage | Spotlight TV",
        "screenPageViews": 149,
        "activeUsers": 7,
        "sessions": 66,
        "eventCount": 2853,
        "userEngagementDuration": 151918,
        "totalEngagementHours": 42.199444444444445
      },
      {
        "unifiedPageScreen": "Continue Watching",
        "screenPageViews": 134,
        "activeUsers": 80,
        "sessions": 101,
        "eventCount": 215,
        "userEngagementDuration": 628,
        "totalEngagementHours": 0.17444444444444446
      },
      {
        "unifiedPageScreen": "About Us",
        "screenPageViews": 123,
        "activeUsers": 28,
        "sessions": 48,
        "eventCount": 128,
        "userEngagementDuration": 75,
        "totalEngagementHours": 0.020833333333333332
      },
      {
        "unifiedPageScreen": "Search | Spotlight TV",
        "screenPageViews": 118,
        "activeUsers": 24,
        "sessions": 30,
        "eventCount": 383,
        "userEngagementDuration": 10670,
        "totalEngagementHours": 2.963888888888889
      },
      {
        "unifiedPageScreen": "Purchases",
        "screenPageViews": 109,
        "activeUsers": 36,
        "sessions": 76,
        "eventCount": 175,
        "userEngagementDuration": 397,
        "totalEngagementHours": 0.11027777777777778
      },
      {
        "unifiedPageScreen": "Spanish Page",
        "screenPageViews": 102,
        "activeUsers": 52,
        "sessions": 68,
        "eventCount": 156,
        "userEngagementDuration": 986,
        "totalEngagementHours": 0.2738888888888889
      },
      {
        "unifiedPageScreen": "Search: lev | Spotlight TV",
        "screenPageViews": 98,
        "activeUsers": 1,
        "sessions": 23,
        "eventCount": 1841,
        "userEngagementDuration": 100808,
        "totalEngagementHours": 28.002222222222223
      },
      {
        "unifiedPageScreen": "Search: l | Spotlight TV",
        "screenPageViews": 97,
        "activeUsers": 13,
        "sessions": 29,
        "eventCount": 1305,
        "userEngagementDuration": 83971,
        "totalEngagementHours": 23.325277777777778
      },
      {
        "unifiedPageScreen": "The Ark - Season 3 | ElectricNOW",
        "screenPageViews": 79,
        "activeUsers": 48,
        "sessions": 59,
        "eventCount": 102,
        "userEngagementDuration": 3982,
        "totalEngagementHours": 1.106111111111111
      },
      {
        "unifiedPageScreen": "Search: the ark | Spotlight TV",
        "screenPageViews": 72,
        "activeUsers": 7,
        "sessions": 20,
        "eventCount": 1045,
        "userEngagementDuration": 25245,
        "totalEngagementHours": 7.0125
      },
      {
        "unifiedPageScreen": "Manage Profile",
        "screenPageViews": 71,
        "activeUsers": 53,
        "sessions": 47,
        "eventCount": 97,
        "userEngagementDuration": 1065,
        "totalEngagementHours": 0.29583333333333334
      },
      {
        "unifiedPageScreen": "My Favorites",
        "screenPageViews": 69,
        "activeUsers": 19,
        "sessions": 35,
        "eventCount": 135,
        "userEngagementDuration": 577,
        "totalEngagementHours": 0.16027777777777777
      },
      {
        "unifiedPageScreen": "Search: librarian | Spotlight TV",
        "screenPageViews": 63,
        "activeUsers": 2,
        "sessions": 5,
        "eventCount": 789,
        "userEngagementDuration": 12278,
        "totalEngagementHours": 3.4105555555555553
      },
      {
        "unifiedPageScreen": "Leverage | ElectricNOW",
        "screenPageViews": 46,
        "activeUsers": 17,
        "sessions": 29,
        "eventCount": 66,
        "userEngagementDuration": 1193,
        "totalEngagementHours": 0.3313888888888889
      },
      {
        "unifiedPageScreen": "My Reactions",
        "screenPageViews": 45,
        "activeUsers": 25,
        "sessions": 34,
        "eventCount": 70,
        "userEngagementDuration": 123,
        "totalEngagementHours": 0.034166666666666665
      },
      {
        "unifiedPageScreen": "Privacy Policy",
        "screenPageViews": 40,
        "activeUsers": 17,
        "sessions": 28,
        "eventCount": 41,
        "userEngagementDuration": 29,
        "totalEngagementHours": 0.008055555555555555
      },
      {
        "unifiedPageScreen": "Search: The librar | Spotlight TV",
        "screenPageViews": 39,
        "activeUsers": 1,
        "sessions": 5,
        "eventCount": 237,
        "userEngagementDuration": 24482,
        "totalEngagementHours": 6.8005555555555555
      },
      {
        "unifiedPageScreen": "On Demand",
        "screenPageViews": 37,
        "activeUsers": 12,
        "sessions": 28,
        "eventCount": 68,
        "userEngagementDuration": 1092,
        "totalEngagementHours": 0.30333333333333334
      },
      {
        "unifiedPageScreen": "The Librarians: The Next Chapter Season 2 | ElectricNOW",
        "screenPageViews": 37,
        "activeUsers": 16,
        "sessions": 29,
        "eventCount": 46,
        "userEngagementDuration": 1909,
        "totalEngagementHours": 0.5302777777777777
      },
      {
        "unifiedPageScreen": "Search: LEVERAGE | Spotlight TV",
        "screenPageViews": 32,
        "activeUsers": 1,
        "sessions": 9,
        "eventCount": 699,
        "userEngagementDuration": 77226,
        "totalEngagementHours": 21.451666666666668
      },
      {
        "unifiedPageScreen": "Terms of use",
        "screenPageViews": 32,
        "activeUsers": 12,
        "sessions": 22,
        "eventCount": 32,
        "userEngagementDuration": 0,
        "totalEngagementHours": 0.0
      },
      {
        "unifiedPageScreen": "Search: le | Spotlight TV",
        "screenPageViews": 31,
        "activeUsers": 1,
        "sessions": 10,
        "eventCount": 405,
        "userEngagementDuration": 36920,
        "totalEngagementHours": 10.255555555555556
      },
      {
        "unifiedPageScreen": "Connect with us",
        "screenPageViews": 29,
        "activeUsers": 14,
        "sessions": 24,
        "eventCount": 29,
        "userEngagementDuration": 0,
        "totalEngagementHours": 0.0
      },
      {
        "unifiedPageScreen": "Search: The ark | Spotlight TV",
        "screenPageViews": 29,
        "activeUsers": 4,
        "sessions": 6,
        "eventCount": 81,
        "userEngagementDuration": 2032,
        "totalEngagementHours": 0.5644444444444444
      },
      {
        "unifiedPageScreen": "Search: librarians | Spotlight TV",
        "screenPageViews": 28,
        "activeUsers": 6,
        "sessions": 7,
        "eventCount": 214,
        "userEngagementDuration": 10172,
        "totalEngagementHours": 2.8255555555555554
      },
      {
        "unifiedPageScreen": "Search: lib | Spotlight TV",
        "screenPageViews": 24,
        "activeUsers": 0,
        "sessions": 10,
        "eventCount": 1151,
        "userEngagementDuration": 24452,
        "totalEngagementHours": 6.792222222222223
      },
      {
        "unifiedPageScreen": "The Librarians: The Next Chapter (Season 1) | ElectricNOW",
        "screenPageViews": 24,
        "activeUsers": 6,
        "sessions": 17,
        "eventCount": 53,
        "userEngagementDuration": 1718,
        "totalEngagementHours": 0.4772222222222222
      },
      {
        "unifiedPageScreen": "Search: leverage: redemption | Spotlight TV",
        "screenPageViews": 23,
        "activeUsers": 0,
        "sessions": 1,
        "eventCount": 367,
        "userEngagementDuration": 918,
        "totalEngagementHours": 0.255
      },
      {
        "unifiedPageScreen": "Leverage: Redemption - Season 3 | ElectricNOW",
        "screenPageViews": 21,
        "activeUsers": 11,
        "sessions": 13,
        "eventCount": 23,
        "userEngagementDuration": 510,
        "totalEngagementHours": 0.14166666666666666
      },
      {
        "unifiedPageScreen": "ElectricNow",
        "screenPageViews": 17,
        "activeUsers": 0,
        "sessions": 29,
        "eventCount": 4537,
        "userEngagementDuration": 26005,
        "totalEngagementHours": 7.223611111111111
      },
      {
        "unifiedPageScreen": "After the Ark | ElectricNOW",
        "screenPageViews": 16,
        "activeUsers": 6,
        "sessions": 11,
        "eventCount": 21,
        "userEngagementDuration": 337,
        "totalEngagementHours": 0.09361111111111112
      },
      {
        "unifiedPageScreen": "Search: the poly | Spotlight TV",
        "screenPageViews": 16,
        "activeUsers": 0,
        "sessions": 2,
        "eventCount": 70,
        "userEngagementDuration": 237,
        "totalEngagementHours": 0.06583333333333333
      },
      {
        "unifiedPageScreen": "Search: T | Spotlight TV",
        "screenPageViews": 15,
        "activeUsers": 6,
        "sessions": 9,
        "eventCount": 60,
        "userEngagementDuration": 2101,
        "totalEngagementHours": 0.5836111111111111
      },
      {
        "unifiedPageScreen": "Almost Paradise (Season 1 & 2) | ElectricNOW",
        "screenPageViews": 14,
        "activeUsers": 10,
        "sessions": 12,
        "eventCount": 16,
        "userEngagementDuration": 568,
        "totalEngagementHours": 0.15777777777777777
      },
      {
        "unifiedPageScreen": "Search: THe librarians | Spotlight TV",
        "screenPageViews": 14,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 213,
        "userEngagementDuration": 3067,
        "totalEngagementHours": 0.8519444444444444
      },
      {
        "unifiedPageScreen": "Search: leverage redem | Spotlight TV",
        "screenPageViews": 14,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 122,
        "userEngagementDuration": 6635,
        "totalEngagementHours": 1.8430555555555554
      },
      {
        "unifiedPageScreen": "The Librarians (Full Series) | ElectricNOW",
        "screenPageViews": 14,
        "activeUsers": 6,
        "sessions": 13,
        "eventCount": 16,
        "userEngagementDuration": 970,
        "totalEngagementHours": 0.26944444444444443
      },
      {
        "unifiedPageScreen": "Search: The Ark | Spotlight TV",
        "screenPageViews": 12,
        "activeUsers": 2,
        "sessions": 3,
        "eventCount": 60,
        "userEngagementDuration": 737,
        "totalEngagementHours": 0.20472222222222222
      },
      {
        "unifiedPageScreen": "Search: The li | Spotlight TV",
        "screenPageViews": 12,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 210,
        "userEngagementDuration": 1794,
        "totalEngagementHours": 0.49833333333333335
      },
      {
        "unifiedPageScreen": "Search: the ar | Spotlight TV",
        "screenPageViews": 12,
        "activeUsers": 1,
        "sessions": 3,
        "eventCount": 345,
        "userEngagementDuration": 8658,
        "totalEngagementHours": 2.405
      },
      {
        "unifiedPageScreen": "Search: leve | Spotlight TV",
        "screenPageViews": 11,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 113,
        "userEngagementDuration": 188,
        "totalEngagementHours": 0.052222222222222225
      },
      {
        "unifiedPageScreen": "Search: o | Spotlight TV",
        "screenPageViews": 11,
        "activeUsers": 0,
        "sessions": 2,
        "eventCount": 706,
        "userEngagementDuration": 6085,
        "totalEngagementHours": 1.6902777777777778
      },
      {
        "unifiedPageScreen": "Search: the librarians | Spotlight TV",
        "screenPageViews": 11,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 116,
        "userEngagementDuration": 1422,
        "totalEngagementHours": 0.395
      },
      {
        "unifiedPageScreen": "The Ark | ElectricNOW",
        "screenPageViews": 11,
        "activeUsers": 7,
        "sessions": 10,
        "eventCount": 15,
        "userEngagementDuration": 533,
        "totalEngagementHours": 0.14805555555555555
      },
      {
        "unifiedPageScreen": "Search: one | Spotlight TV",
        "screenPageViews": 10,
        "activeUsers": 0,
        "sessions": 2,
        "eventCount": 129,
        "userEngagementDuration": 1000,
        "totalEngagementHours": 0.2777777777777778
      },
      {
        "unifiedPageScreen": "Search: t | Spotlight TV",
        "screenPageViews": 10,
        "activeUsers": 6,
        "sessions": 6,
        "eventCount": 31,
        "userEngagementDuration": 125,
        "totalEngagementHours": 0.034722222222222224
      },
      {
        "unifiedPageScreen": "The Ark - Trailer | ElectricNOW",
        "screenPageViews": 10,
        "activeUsers": 8,
        "sessions": 9,
        "eventCount": 12,
        "userEngagementDuration": 137,
        "totalEngagementHours": 0.03805555555555556
      },
      {
        "unifiedPageScreen": "The Ark Season 3 Premieres July 29 on SyFy | ElectricNOW",
        "screenPageViews": 10,
        "activeUsers": 6,
        "sessions": 8,
        "eventCount": 16,
        "userEngagementDuration": 100,
        "totalEngagementHours": 0.027777777777777776
      },
      {
        "unifiedPageScreen": "Update Delete Profile",
        "screenPageViews": 10,
        "activeUsers": 8,
        "sessions": 6,
        "eventCount": 12,
        "userEngagementDuration": 239,
        "totalEngagementHours": 0.06638888888888889
      },
      {
        "unifiedPageScreen": "Connect with Us",
        "screenPageViews": 9,
        "activeUsers": 8,
        "sessions": 8,
        "eventCount": 17,
        "userEngagementDuration": 75,
        "totalEngagementHours": 0.020833333333333332
      },
      {
        "unifiedPageScreen": "Search: Lev | Spotlight TV",
        "screenPageViews": 9,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 81,
        "userEngagementDuration": 1754,
        "totalEngagementHours": 0.4872222222222222
      },
      {
        "unifiedPageScreen": "Search: THE LIB | Spotlight TV",
        "screenPageViews": 9,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 122,
        "userEngagementDuration": 5626,
        "totalEngagementHours": 1.5627777777777778
      },
      {
        "unifiedPageScreen": "Search: lever | Spotlight TV",
        "screenPageViews": 9,
        "activeUsers": 2,
        "sessions": 3,
        "eventCount": 112,
        "userEngagementDuration": 4687,
        "totalEngagementHours": 1.3019444444444443
      },
      {
        "unifiedPageScreen": "The Ice Man Job | ElectricNOW",
        "screenPageViews": 9,
        "activeUsers": 4,
        "sessions": 5,
        "eventCount": 10,
        "userEngagementDuration": 182,
        "totalEngagementHours": 0.050555555555555555
      },
      {
        "unifiedPageScreen": "Search: leverage redemption | Spotlight TV",
        "screenPageViews": 8,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 52,
        "userEngagementDuration": 724,
        "totalEngagementHours": 0.2011111111111111
      },
      {
        "unifiedPageScreen": "Search: the librar | Spotlight TV",
        "screenPageViews": 8,
        "activeUsers": 1,
        "sessions": 3,
        "eventCount": 28,
        "userEngagementDuration": 101,
        "totalEngagementHours": 0.028055555555555556
      },
      {
        "unifiedPageScreen": "Search: The LIbrarians | Spotlight TV",
        "screenPageViews": 7,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 78,
        "userEngagementDuration": 241,
        "totalEngagementHours": 0.06694444444444445
      },
      {
        "unifiedPageScreen": "Search: Avatar | Spotlight TV",
        "screenPageViews": 6,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 78,
        "userEngagementDuration": 626,
        "totalEngagementHours": 0.1738888888888889
      },
      {
        "unifiedPageScreen": "Search: The lib | Spotlight TV",
        "screenPageViews": 6,
        "activeUsers": 0,
        "sessions": 1,
        "eventCount": 50,
        "userEngagementDuration": 65,
        "totalEngagementHours": 0.018055555555555554
      },
      {
        "unifiedPageScreen": "Search: mess | Spotlight TV",
        "screenPageViews": 6,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 30,
        "userEngagementDuration": 39,
        "totalEngagementHours": 0.010833333333333334
      },
      {
        "unifiedPageScreen": "Search: my best wor | Spotlight TV",
        "screenPageViews": 6,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 68,
        "userEngagementDuration": 66,
        "totalEngagementHours": 0.018333333333333333
      },
      {
        "unifiedPageScreen": "Search: paranormal | Spotlight TV",
        "screenPageViews": 6,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 207,
        "userEngagementDuration": 47,
        "totalEngagementHours": 0.013055555555555556
      },
      {
        "unifiedPageScreen": "The Librarians and the Crown of King Arthur in Cinemascope | ElectricNOW",
        "screenPageViews": 6,
        "activeUsers": 4,
        "sessions": 4,
        "eventCount": 6,
        "userEngagementDuration": 134,
        "totalEngagementHours": 0.03722222222222222
      },
      {
        "unifiedPageScreen": "Channel Overview",
        "screenPageViews": 5,
        "activeUsers": 5,
        "sessions": 4,
        "eventCount": 6,
        "userEngagementDuration": 71,
        "totalEngagementHours": 0.01972222222222222
      },
      {
        "unifiedPageScreen": "Electric Now",
        "screenPageViews": 5,
        "activeUsers": 3,
        "sessions": 5,
        "eventCount": 31,
        "userEngagementDuration": 704,
        "totalEngagementHours": 0.19555555555555557
      },
      {
        "unifiedPageScreen": "Leverage: Redemption | ElectricNOW",
        "screenPageViews": 5,
        "activeUsers": 4,
        "sessions": 4,
        "eventCount": 6,
        "userEngagementDuration": 90,
        "totalEngagementHours": 0.025
      },
      {
        "unifiedPageScreen": "Search: B | Spotlight TV",
        "screenPageViews": 5,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 175,
        "userEngagementDuration": 51446,
        "totalEngagementHours": 14.290555555555555
      },
      {
        "unifiedPageScreen": "Search: The | Spotlight TV",
        "screenPageViews": 5,
        "activeUsers": 2,
        "sessions": 2,
        "eventCount": 13,
        "userEngagementDuration": 187,
        "totalEngagementHours": 0.051944444444444446
      },
      {
        "unifiedPageScreen": "The Messenger | ElectricNOW",
        "screenPageViews": 5,
        "activeUsers": 3,
        "sessions": 3,
        "eventCount": 5,
        "userEngagementDuration": 47,
        "totalEngagementHours": 0.013055555555555556
      },
      {
        "unifiedPageScreen": "The Outpost | ElectricNOW",
        "screenPageViews": 5,
        "activeUsers": 2,
        "sessions": 5,
        "eventCount": 5,
        "userEngagementDuration": 1,
        "totalEngagementHours": 0.0002777777777777778
      },
      {
        "unifiedPageScreen": "Checking Out: The Librarians Next Chapter | ElectricNOW",
        "screenPageViews": 4,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 10,
        "userEngagementDuration": 53,
        "totalEngagementHours": 0.014722222222222222
      },
      {
        "unifiedPageScreen": "Get Wyle'd Up - A Noah Wyle Collection | ElectricNOW",
        "screenPageViews": 4,
        "activeUsers": 3,
        "sessions": 4,
        "eventCount": 4,
        "userEngagementDuration": 118,
        "totalEngagementHours": 0.03277777777777778
      },
      {
        "unifiedPageScreen": "Search: Leverage | Spotlight TV",
        "screenPageViews": 4,
        "activeUsers": 3,
        "sessions": 4,
        "eventCount": 17,
        "userEngagementDuration": 83,
        "totalEngagementHours": 0.023055555555555555
      },
      {
        "unifiedPageScreen": "Search: The librarians | Spotlight TV",
        "screenPageViews": 4,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 12,
        "userEngagementDuration": 39,
        "totalEngagementHours": 0.010833333333333334
      },
      {
        "unifiedPageScreen": "Search: the ark season 2 | Spotlight TV",
        "screenPageViews": 4,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 30,
        "userEngagementDuration": 1570,
        "totalEngagementHours": 0.4361111111111111
      },
      {
        "unifiedPageScreen": "Somewhere in Montana | ElectricNOW",
        "screenPageViews": 4,
        "activeUsers": 3,
        "sessions": 3,
        "eventCount": 4,
        "userEngagementDuration": 190,
        "totalEngagementHours": 0.05277777777777778
      },
      {
        "unifiedPageScreen": "The Librarian: Quest for the Spear | ElectricNOW",
        "screenPageViews": 4,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 4,
        "userEngagementDuration": 43,
        "totalEngagementHours": 0.011944444444444445
      },
      {
        "unifiedPageScreen": "Topper | ElectricNOW",
        "screenPageViews": 4,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 4,
        "userEngagementDuration": 180,
        "totalEngagementHours": 0.05
      },
      {
        "unifiedPageScreen": "And the House of Cards | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 2,
        "sessions": 3,
        "eventCount": 3,
        "userEngagementDuration": 102,
        "totalEngagementHours": 0.028333333333333332
      },
      {
        "unifiedPageScreen": "Next Episode | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 2,
        "sessions": 3,
        "eventCount": 3,
        "userEngagementDuration": 30,
        "totalEngagementHours": 0.008333333333333333
      },
      {
        "unifiedPageScreen": "Search: 17 | Spotlight TV",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 27,
        "userEngagementDuration": 8,
        "totalEngagementHours": 0.0022222222222222222
      },
      {
        "unifiedPageScreen": "Search: L | Spotlight TV",
        "screenPageViews": 3,
        "activeUsers": 2,
        "sessions": 3,
        "eventCount": 3,
        "userEngagementDuration": 39,
        "totalEngagementHours": 0.010833333333333334
      },
      {
        "unifiedPageScreen": "Search: Sacrifice | Spotlight TV",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 4,
        "userEngagementDuration": 10,
        "totalEngagementHours": 0.002777777777777778
      },
      {
        "unifiedPageScreen": "Search: THE ARK | Spotlight TV",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 6,
        "userEngagementDuration": 50,
        "totalEngagementHours": 0.013888888888888888
      },
      {
        "unifiedPageScreen": "Search: ark | Spotlight TV",
        "screenPageViews": 3,
        "activeUsers": 2,
        "sessions": 2,
        "eventCount": 5,
        "userEngagementDuration": 111,
        "totalEngagementHours": 0.030833333333333334
      },
      {
        "unifiedPageScreen": "Search: b | Spotlight TV",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 3,
        "userEngagementDuration": 209,
        "totalEngagementHours": 0.058055555555555555
      },
      {
        "unifiedPageScreen": "Search: city heet | Spotlight TV",
        "screenPageViews": 3,
        "activeUsers": 0,
        "sessions": 1,
        "eventCount": 28,
        "userEngagementDuration": 31,
        "totalEngagementHours": 0.008611111111111111
      }
    ]
  },
  "liveTv": {
    "baseline": {
      "activeUsers": 542,
      "sessions": 1842,
      "engagedSessions": 1748,
      "screenPageViews": 1946,
      "eventCount": 14310
    },
    "current": {
      "activeUsers": 514,
      "sessions": 1789,
      "engagedSessions": 1522,
      "screenPageViews": 1829,
      "eventCount": 13392
    },
    "deltas": {
      "activeUsers": -5.166051660516605,
      "sessions": -2.8773072747014115,
      "engagedSessions": -12.929061784897025,
      "screenPageViews": -6.012332990750257,
      "eventCount": -6.415094339622642
    },
    "engagementRateBaseline": 94.89685124864278,
    "engagementRateCurrent": 85.07546115148128,
    "weekToDate": {
      "activeUsers": 514,
      "sessions": 1789,
      "engagedSessions": 1522,
      "screenPageViews": 1829,
      "eventCount": 13392
    },
    "engagementRateWeekToDate": 85.07546115148128,
    "period": "Sep 12-Sep 18, 2026",
    "baselinePeriod": "Sep 5-Sep 11, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "definition": "GA4 unifiedScreenName = 'Live' (the Live TV section of the app)."
  },
  "plainEnglishInsights": [
    "Apple gross sales improved to $294.95, up 22.45% against the preceding seven days, and DotStudios reports stronger ad delivery. Overall usage and title sales softened: GA4 users fell 5.0%, sessions fell 2.1%, and engagement rate dropped from 82.91% to 68.93%. DotStudios TVOD was $669.66 from 32 purchases, down 24.9% in value versus Sep 5-Sep 11. Reported ad impressions are not verified ad income.",
    "Audience: 3,871 GA4 active users and 9,659 sessions. Engaged sessions fell 18.6%; the engagement-rate decline needs investigation rather than a claim of deeper viewing.",
    "Viewing: 14,500 GA4 video starts versus 16,084; deduplicated on-demand starters 957 versus 1,120 and live-channel viewers 443 versus 514. Live starts held at 3,751 versus 3,738. Live/FAST channels remain excluded from on-demand rankings.",
    "DotStudios: 14,674 video views, 709 installs and 687 updates. The export comparisons use the overlapping Sep 7-Sep 13 snapshot, not a true week-over-week period; installs and views are separate from GA4 audience.",
    "In-app ads: DotStudios reports 31,226 requests, 29,769 impressions and 1,456 errors (95.3% impressions/requests). Counts remain provisional pending vendor reconciliation; Ionic is required to verify paid revenue. These are not paid-acquisition impressions.",
    "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
    "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable.",
    "Verdict: needs proof of viewing. (1) Paid ads have not been demonstrated to grow sustained viewing this week: Google reports no delivery and current Meta activity is unverified. (2) Historical Meta blended cost of $11.31 per download remains a concern without retention evidence; current costs cannot be assessed. (3) No new targeting improvement is established. (4) Meta has historical delivery; Google has none this week, but there is no defensible current efficiency winner. (5) Only 18 of 9,659 GA4 sessions carry paid tags, and installs are not reliably linked to viewing or purchases. True ROAS cannot be stated because reconciled ad revenue and complete platform sales are unavailable. (6) Obtain current Meta data, test platforms and show-specific creative separately, measure install-to-first-play, investigate engagement loss, and reconcile Ionic revenue before scaling.",
    "Source limitations: Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals. Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero. YouTube revenue covers only Sep 12-Sep 16; its comparison matches five days on each side.",
    "Next actions: Patrick and Nathan: obtain a current Meta-only report before deciding whether to restart or expand spend. For any small acquisition test, separate iOS and Android, test Ark and Librarians creative, and optimize to first play and sustained viewing, not installs alone. Michael/DotStudios: investigate the 14-point drop in GA4 engagement rate and reconcile ad delivery with Ionic paid revenue. Reconcile the $20.99 Stripe/web discrepancy and Apple gross versus DotStudios apple before using source checks as settled revenue. Recover the latest Roku report attachments; keep stale Roku and delayed YouTube figures clearly labeled."
  ],
  "instrumentationGaps": [
    "No separate GA4 event found for go_ad_free_click yet.",
    "No separate GA4 event found for video_purchase yet.",
    "No separate GA4 event found for collection_purchase yet.",
    "Stripe is now one visible sales source in the dashboard; total sales still require Apple App Store and Google Play reporting, and GA4 purchase events still need to be split into go-ad-free, individual video, and collection purchase actions.",
    "Live TV should be reconciled with Amagi and ad-server reporting.",
    "YouTube current-period rows are fresh but partial through Aug 11 for the Aug 7-Aug 13 request; Aug 12-Aug 13 remain pending and are not zero-filled.",
    "YouTube current-period rows are fresh but partial through Aug 11 for the Aug 10-Aug 16 request; Aug 12-Aug 16 remain pending and are not zero-filled."
  ],
  "salesSummary": {
    "sourceLabel": "Visible platform sales — DotStudios current-week TVOD, with platform checks kept separate",
    "sourceDetail": "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
    "stripe": {
      "sourceLabel": "Stripe connector source check",
      "sourceDetail": "Stripe connector charge-list checked fresh for Sep 12-Sep 18, 2026 and returned 5 successful Stripe-visible charges totaling $104.95. Stripe overlaps the DotStudios TVOD ecosystem and is not added to the DotStudios total.",
      "connectorStatus": "CONNECTED_FRESH_CHARGE_LIST",
      "latestSevenDay": {
        "label": "Stripe connector source check",
        "range": "Sep 12-Sep 18, 2026",
        "purchases": 5,
        "purchaseRevenue": 104.95,
        "developerRevShare": 104.95,
        "note": "Stripe is a web/payment-source check for the same TVOD ecosystem and overlaps the DotStudios export; it is not added to DotStudios totals."
      },
      "currentWeek": {
        "period": "Sep 12-Sep 18, 2026",
        "gross": 104.95,
        "transactions": 5,
        "refunds": 0.0,
        "net": 104.95,
        "source": "Stripe connector charge list"
      },
      "priorWeek": {
        "transactions": 10,
        "grossUsd": 209.9,
        "refundsUsd": 0.0,
        "netUsd": 209.9,
        "daily": [
          {
            "date": "2026-09-05",
            "transactions": 3,
            "grossUsd": 62.97
          },
          {
            "date": "2026-09-06",
            "transactions": 1,
            "grossUsd": 20.99
          },
          {
            "date": "2026-09-07",
            "transactions": 2,
            "grossUsd": 41.98
          },
          {
            "date": "2026-09-08",
            "transactions": 1,
            "grossUsd": 20.99
          },
          {
            "date": "2026-09-09",
            "transactions": 1,
            "grossUsd": 20.99
          },
          {
            "date": "2026-09-11",
            "transactions": 2,
            "grossUsd": 41.98
          }
        ]
      },
      "status": "fresh"
    },
    "roku": {
      "sourceLabel": "Roku-visible sales",
      "sourceDetail": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals.",
      "reportEmailDate": "2026-09-14T13:58:17+00:00",
      "reportGenerated": "September 14, 2026 at 6:58 AM PDT",
      "baselineWindow": {
        "label": "Roku launch baseline",
        "range": "Apr 13-Apr 19, 2026",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0,
        "revenuePerPurchase": 0,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null
      },
      "yearToDate": {
        "label": "Roku sales this year",
        "range": "Jan 1-Aug 3, 2026",
        "purchases": 32,
        "purchaseRevenue": 710.68,
        "developerRevShare": 568.48,
        "revenuePerPurchase": 22.21,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": [
          {
            "date": "Aug 2",
            "createdAt": "2026-08-02",
            "amount": 20.99,
            "developerRevShare": 16.79,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Aug 1",
            "createdAt": "2026-08-01",
            "amount": 19.99,
            "developerRevShare": 15.99,
            "description": "Roku - Purchase Bundle 20",
            "source": "Roku"
          },
          {
            "date": "Aug 1",
            "createdAt": "2026-08-01",
            "amount": 83.96,
            "developerRevShare": 67.16,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Jul 31",
            "createdAt": "2026-07-31",
            "amount": 209.9,
            "developerRevShare": 167.9,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Jul 31",
            "createdAt": "2026-07-31",
            "amount": 54.99,
            "developerRevShare": 43.99,
            "description": "Roku - Purchase Bundle 55",
            "source": "Roku"
          },
          {
            "date": "Jul 30",
            "createdAt": "2026-07-30",
            "amount": 146.93,
            "developerRevShare": 117.53,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Jul 27",
            "createdAt": "2026-07-27",
            "amount": 19.99,
            "developerRevShare": 15.99,
            "description": "Roku - Purchase Bundle 20",
            "source": "Roku"
          },
          {
            "date": "Jul 27",
            "createdAt": "2026-07-27",
            "amount": 20.99,
            "developerRevShare": 16.79,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          }
        ],
        "status": "stale_preserved",
        "staleNote": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
      },
      "monthToDate": {
        "label": "Roku sales this month",
        "range": "Sep 1-Sep 13, 2026",
        "purchases": 17,
        "purchaseRevenue": 356.83,
        "developerRevShare": 285.46,
        "revenuePerPurchase": 20.99,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "status": "stale_preserved",
        "staleNote": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
      },
      "lastWeek": {
        "label": "Roku sales last week",
        "range": "Aug 31-Sep 6, 2026",
        "purchases": 9,
        "purchaseRevenue": 222.91,
        "developerRevShare": 178.33,
        "revenuePerPurchase": 24.77,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "status": "stale_preserved",
        "staleNote": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
      },
      "thisWeek": {
        "label": "Roku sales this week",
        "range": "Sep 7-Sep 13, 2026",
        "purchases": 9,
        "purchaseRevenue": 188.91,
        "developerRevShare": 151.13,
        "revenuePerPurchase": 20.99,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "status": "stale_preserved",
        "staleNote": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
      },
      "currentCompleteWeek": {
        "label": "Roku sales last week",
        "range": "Aug 31-Sep 6, 2026",
        "purchases": 9,
        "purchaseRevenue": 222.91,
        "developerRevShare": 178.33,
        "revenuePerPurchase": 24.77,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "status": "stale_preserved",
        "staleNote": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
      },
      "weekToDate": {
        "label": "Roku sales this week",
        "range": "Sep 7-Sep 13, 2026",
        "purchases": 9,
        "purchaseRevenue": 188.91,
        "developerRevShare": 151.13,
        "revenuePerPurchase": 20.99,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "status": "stale_preserved",
        "staleNote": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
      },
      "lifetimeObserved": {
        "range": "Through Aug 3, 2026 pull",
        "purchases": 32,
        "purchaseRevenue": 710.68,
        "developerRevShare": 568.48,
        "status": "stale_preserved",
        "staleNote": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
      },
      "mix": [
        {
          "label": "Roku title purchases",
          "purchases": 2,
          "purchaseRevenue": 17.98
        },
        {
          "label": "Roku bundle purchases",
          "purchases": 30,
          "purchaseRevenue": 692.7
        }
      ],
      "recentPayments": [
        {
          "date": "Sep 11",
          "createdAt": "2026-09-11",
          "amount": 41.98,
          "developerRevShare": 33.58,
          "description": "Roku - Purchase Bundle 21 (2 tx)",
          "source": "Roku"
        },
        {
          "date": "Sep 10",
          "createdAt": "2026-09-10",
          "amount": 41.98,
          "developerRevShare": 33.58,
          "description": "Roku - Purchase Bundle 21 (2 tx)",
          "source": "Roku"
        },
        {
          "date": "Sep 9",
          "createdAt": "2026-09-09",
          "amount": 62.97,
          "developerRevShare": 50.38,
          "description": "Roku - Purchase Bundle 21 (3 tx)",
          "source": "Roku"
        },
        {
          "date": "Sep 8",
          "createdAt": "2026-09-08",
          "amount": 20.99,
          "developerRevShare": 16.79,
          "description": "Roku - Purchase Bundle 21 (1 tx)",
          "source": "Roku"
        },
        {
          "date": "Sep 7",
          "createdAt": "2026-09-07",
          "amount": 20.99,
          "developerRevShare": 16.79,
          "description": "Roku - Purchase Bundle 21 (1 tx)",
          "source": "Roku"
        }
      ],
      "dailyTrend": [
        {
          "date": "Apr 13",
          "rawDate": "20260413",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 14",
          "rawDate": "20260414",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
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
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Apr 17",
          "rawDate": "20260417",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
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
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
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
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
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
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
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
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 13",
          "rawDate": "20260513",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "May 14",
          "rawDate": "20260514",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
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
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
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
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
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
          "date": "Jun 1",
          "rawDate": "20260601",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 2",
          "rawDate": "20260602",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 3",
          "rawDate": "20260603",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 4",
          "rawDate": "20260604",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 5",
          "rawDate": "20260605",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 6",
          "rawDate": "20260606",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 7",
          "rawDate": "20260607",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 8",
          "rawDate": "20260608",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 9",
          "rawDate": "20260609",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 10",
          "rawDate": "20260610",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 11",
          "rawDate": "20260611",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 12",
          "rawDate": "20260612",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 13",
          "rawDate": "20260613",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 14",
          "rawDate": "20260614",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 15",
          "rawDate": "20260615",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 16",
          "rawDate": "20260616",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 17",
          "rawDate": "20260617",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 18",
          "rawDate": "20260618",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 19",
          "rawDate": "20260619",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 20",
          "rawDate": "20260620",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 21",
          "rawDate": "20260621",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 22",
          "rawDate": "20260622",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 23",
          "rawDate": "20260623",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 24",
          "rawDate": "20260624",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 25",
          "rawDate": "20260625",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 26",
          "rawDate": "20260626",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 27",
          "rawDate": "20260627",
          "purchases": 1,
          "purchaseRevenue": 14.99,
          "developerRevShare": 11.99
        },
        {
          "date": "Jun 28",
          "rawDate": "20260628",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 29",
          "rawDate": "20260629",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jun 30",
          "rawDate": "20260630",
          "purchases": 1,
          "purchaseRevenue": 54.99,
          "developerRevShare": 43.99
        },
        {
          "date": "Jul 1",
          "rawDate": "20260701",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 2",
          "rawDate": "20260702",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 3",
          "rawDate": "20260703",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 4",
          "rawDate": "20260704",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 5",
          "rawDate": "20260705",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 6",
          "rawDate": "20260706",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 7",
          "rawDate": "20260707",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 8",
          "rawDate": "20260708",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 9",
          "rawDate": "20260709",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 10",
          "rawDate": "20260710",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 11",
          "rawDate": "20260711",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 12",
          "rawDate": "20260712",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 13",
          "rawDate": "20260713",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 14",
          "rawDate": "20260714",
          "purchases": 2,
          "purchaseRevenue": 22.98,
          "developerRevShare": 18.38
        },
        {
          "date": "Jul 15",
          "rawDate": "20260715",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 16",
          "rawDate": "20260716",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 17",
          "rawDate": "20260717",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 18",
          "rawDate": "20260718",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 19",
          "rawDate": "20260719",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 20",
          "rawDate": "20260720",
          "purchases": 1,
          "purchaseRevenue": 19.99,
          "developerRevShare": 15.99
        },
        {
          "date": "Jul 21",
          "rawDate": "20260721",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 22",
          "rawDate": "20260722",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 23",
          "rawDate": "20260723",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 24",
          "rawDate": "20260724",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 25",
          "rawDate": "20260725",
          "purchases": 1,
          "purchaseRevenue": 19.99,
          "developerRevShare": 15.99
        },
        {
          "date": "Jul 26",
          "rawDate": "20260726",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 27",
          "rawDate": "20260727",
          "purchases": 2,
          "purchaseRevenue": 40.98,
          "developerRevShare": 32.78
        },
        {
          "date": "Jul 28",
          "rawDate": "20260728",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 29",
          "rawDate": "20260729",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Jul 30",
          "rawDate": "20260730",
          "purchases": 7,
          "purchaseRevenue": 146.93,
          "developerRevShare": 117.53
        },
        {
          "date": "Jul 31",
          "rawDate": "20260731",
          "purchases": 11,
          "purchaseRevenue": 264.89,
          "developerRevShare": 211.89
        },
        {
          "date": "Aug 1",
          "rawDate": "20260801",
          "purchases": 5,
          "purchaseRevenue": 103.95,
          "developerRevShare": 83.15
        },
        {
          "date": "Aug 2",
          "rawDate": "20260802",
          "purchases": 1,
          "purchaseRevenue": 20.99,
          "developerRevShare": 16.79
        },
        {
          "date": "Aug 3",
          "rawDate": "20260803",
          "purchases": 0,
          "purchaseRevenue": 0,
          "developerRevShare": 0
        },
        {
          "date": "Aug 31",
          "rawDate": "20260831",
          "purchases": 1,
          "purchaseRevenue": 54.99,
          "developerRevShare": 43.99
        },
        {
          "date": "Sep 1",
          "rawDate": "20260901",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        },
        {
          "date": "Sep 2",
          "rawDate": "20260902",
          "purchases": 3,
          "purchaseRevenue": 62.97,
          "developerRevShare": 50.37
        },
        {
          "date": "Sep 3",
          "rawDate": "20260903",
          "purchases": 2,
          "purchaseRevenue": 41.98,
          "developerRevShare": 33.58
        },
        {
          "date": "Sep 4",
          "rawDate": "20260904",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        },
        {
          "date": "Sep 5",
          "rawDate": "20260905",
          "purchases": 2,
          "purchaseRevenue": 41.98,
          "developerRevShare": 33.58
        },
        {
          "date": "Sep 6",
          "rawDate": "20260906",
          "purchases": 1,
          "purchaseRevenue": 20.99,
          "developerRevShare": 16.79
        },
        {
          "date": "Sep 7",
          "rawDate": "20260907",
          "purchases": 1,
          "purchaseRevenue": 20.99,
          "developerRevShare": 16.79
        },
        {
          "date": "Sep 8",
          "rawDate": "20260908",
          "purchases": 1,
          "purchaseRevenue": 20.99,
          "developerRevShare": 16.79
        },
        {
          "date": "Sep 9",
          "rawDate": "20260909",
          "purchases": 3,
          "purchaseRevenue": 62.97,
          "developerRevShare": 50.37
        },
        {
          "date": "Sep 10",
          "rawDate": "20260910",
          "purchases": 2,
          "purchaseRevenue": 41.98,
          "developerRevShare": 33.58
        },
        {
          "date": "Sep 11",
          "rawDate": "20260911",
          "purchases": 2,
          "purchaseRevenue": 41.98,
          "developerRevShare": 33.58
        },
        {
          "date": "Sep 12",
          "rawDate": "20260912",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        },
        {
          "date": "Sep 13",
          "rawDate": "20260913",
          "purchases": 0,
          "purchaseRevenue": 0.0,
          "developerRevShare": 0.0
        }
      ],
      "note": "Roku Sales Activity email processed Sep 14, 2026: 9 purchases and $188.91 gross for Sep 7-Sep 13, 2026 (prior week 9 / $222.91).",
      "dataFreshnessNote": "Fresh: Roku Sales Activity email (September 14, 2026 at 6:58 AM PDT) parsed for Sep 7-Sep 13, 2026.",
      "currentWeek": {
        "label": "Roku sales latest seven days",
        "range": "Sep 7-Sep 13, 2026",
        "purchases": 9,
        "purchaseRevenue": 188.91,
        "developerRevShare": 151.11,
        "revenuePerPurchase": 20.99,
        "status": "stale_preserved",
        "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals.",
        "payments": [
          {
            "date": "Sep 11",
            "createdAt": "2026-09-11",
            "amount": 41.98,
            "developerRevShare": 33.58,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Sep 10",
            "createdAt": "2026-09-10",
            "amount": 41.98,
            "developerRevShare": 33.58,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Sep 9",
            "createdAt": "2026-09-09",
            "amount": 62.97,
            "developerRevShare": 50.37,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Sep 8",
            "createdAt": "2026-09-08",
            "amount": 20.99,
            "developerRevShare": 16.79,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Sep 7",
            "createdAt": "2026-09-07",
            "amount": 20.99,
            "developerRevShare": 16.79,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          }
        ],
        "staleNote": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
      },
      "latestSevenDay": {
        "label": "Roku sales latest seven days",
        "range": "Sep 7-Sep 13, 2026",
        "purchases": 9,
        "purchaseRevenue": 188.91,
        "developerRevShare": 151.11,
        "revenuePerPurchase": 20.99,
        "status": "stale_preserved",
        "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals.",
        "payments": [
          {
            "date": "Sep 11",
            "createdAt": "2026-09-11",
            "amount": 41.98,
            "developerRevShare": 33.58,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Sep 10",
            "createdAt": "2026-09-10",
            "amount": 41.98,
            "developerRevShare": 33.58,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Sep 9",
            "createdAt": "2026-09-09",
            "amount": 62.97,
            "developerRevShare": 50.37,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Sep 8",
            "createdAt": "2026-09-08",
            "amount": 20.99,
            "developerRevShare": 16.79,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          },
          {
            "date": "Sep 7",
            "createdAt": "2026-09-07",
            "amount": 20.99,
            "developerRevShare": 16.79,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku"
          }
        ],
        "staleNote": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
      },
      "status": "stale_preserved",
      "dailyTrendNote": "Roku daily rows run through Aug 3, 2026, then resume 2026-08-31 from the Roku Sales Activity reports processed Sep 7 and Sep 14, 2026 and run through Sep 13 (Sep 12-13 had no Roku transactions, confirmed against the DotStudios export). Aug 4-30 was not in a processed report and is omitted rather than shown as zero.",
      "staleNote": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
    },
    "apple": {
      "sourceLabel": "Apple App Store manual sales/download snapshot",
      "sourceDetail": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable.",
      "snapshotRange": "Sep 12-Sep 18, 2026",
      "yearToDate": {
        "label": "Apple manual gross sales this year",
        "range": "Jan 1-Aug 6, 2026",
        "purchases": 16,
        "purchaseRevenue": 1353.34,
        "developerRevShare": 947.29,
        "revenuePerPurchase": 84.58,
        "payments": [
          {
            "date": "May 13, 2026",
            "createdAt": "2026-05-13",
            "amount": 29.99,
            "developerRevShare": 20.99,
            "description": "Apple App Store - Purchase Bundle 30",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "May 18, 2026",
            "createdAt": "2026-05-18",
            "amount": 29.99,
            "developerRevShare": 20.99,
            "description": "Apple App Store - Purchase Bundle 30",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "May 18, 2026",
            "createdAt": "2026-05-18",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "May 25, 2026",
            "createdAt": "2026-05-25",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "June 10, 2026",
            "createdAt": "2026-06-10",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "June 11, 2026",
            "createdAt": "2026-06-11",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "June 13, 2026",
            "createdAt": "2026-06-13",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "June 13, 2026",
            "createdAt": "2026-06-13",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "June 14, 2026",
            "createdAt": "2026-06-14",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "June 16, 2026",
            "createdAt": "2026-06-16",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "June 26, 2026",
            "createdAt": "2026-06-26",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "June 27, 2026",
            "createdAt": "2026-06-27",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "June 28, 2026",
            "createdAt": "2026-06-28",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "June 30, 2026",
            "createdAt": "2026-06-30",
            "amount": 2.99,
            "developerRevShare": 2.09,
            "description": "Apple App Store - Purchase HD 3",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "July 2, 2026",
            "createdAt": "2026-07-02",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "July 5, 2026",
            "createdAt": "2026-07-05",
            "amount": 14.99,
            "developerRevShare": 10.49,
            "description": "Apple App Store - Purchase HD 15",
            "source": "Apple App Store",
            "note": null
          },
          {
            "date": "Jul 29-Aug 4",
            "createdAt": "2026-08-04",
            "amount": 1095.5,
            "developerRevShare": 766.85,
            "description": "Apple App Store - App Store Connect aggregate gross sales",
            "source": "Apple App Store",
            "note": "Manual aggregate sales screenshot for Jul 29-Aug 4, 2026. Revenue-only source; transaction count is not shown and is not fabricated."
          }
        ],
        "note": "Purchase count includes only individually visible Apple transaction rows. The latest aggregate Apple screenshot is counted in revenue but not in purchase count because the screenshot does not show transactions."
      },
      "lastWeek": {
        "label": "Apple manual gross sales/download prior week",
        "range": "Aug 31-Sep 6, 2026",
        "purchases": null,
        "purchaseRevenue": 295.87,
        "developerRevShare": 207.11,
        "downloads": 141,
        "note": "Latest App Store Connect snapshot; gross sales and downloads are reported, but transaction count is not provided, so no purchase count is fabricated.",
        "period": "Aug 31-Sep 6, 2026",
        "source": "Apple App Store Connect manual snapshot",
        "freeDownloads": 128,
        "inAppUnits": 13
      },
      "latestSnapshot": {
        "label": "Apple gross sales and total units",
        "range": "Sep 12-Sep 18, 2026",
        "period": "Sep 12-Sep 18, 2026",
        "purchases": null,
        "purchaseRevenue": 294.95,
        "developerRevShare": 206.46,
        "downloads": 85,
        "totalUnits": 85,
        "freeDownloads": null,
        "inAppUnits": null,
        "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable. Developer share is an illustrative 70% estimate, not settled proceeds.",
        "status": "fresh_manual"
      },
      "dailyTrend": [
        {
          "date": "Sep 7",
          "rawDate": "20260907",
          "purchases": null,
          "purchaseRevenue": 62.97,
          "developerRevShare": 44.08,
          "downloads": 21,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Sep 8",
          "rawDate": "20260908",
          "purchases": null,
          "purchaseRevenue": 41.98,
          "developerRevShare": 29.39,
          "downloads": 25,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Sep 9",
          "rawDate": "20260909",
          "purchases": null,
          "purchaseRevenue": 9.99,
          "developerRevShare": 6.99,
          "downloads": 14,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Sep 10",
          "rawDate": "20260910",
          "purchases": null,
          "purchaseRevenue": 41.98,
          "developerRevShare": 29.39,
          "downloads": 17,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Sep 11",
          "rawDate": "20260911",
          "purchases": null,
          "purchaseRevenue": 20.99,
          "developerRevShare": 14.69,
          "downloads": 16,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Sep 12",
          "rawDate": "20260912",
          "purchases": null,
          "purchaseRevenue": 41.98,
          "developerRevShare": 29.39,
          "downloads": 17,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Sep 13",
          "rawDate": "20260913",
          "purchases": null,
          "purchaseRevenue": 62.97,
          "developerRevShare": 44.08,
          "downloads": 16,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        }
      ],
      "latestSevenDay": {
        "label": "Apple gross sales and total units",
        "range": "Sep 12-Sep 18, 2026",
        "period": "Sep 12-Sep 18, 2026",
        "purchases": null,
        "purchaseRevenue": 294.95,
        "developerRevShare": 206.46,
        "downloads": 85,
        "totalUnits": 85,
        "freeDownloads": null,
        "inAppUnits": null,
        "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable. Developer share is an illustrative 70% estimate, not settled proceeds.",
        "status": "fresh_manual"
      },
      "currentWeek": {
        "label": "Apple gross sales and total units",
        "range": "Sep 12-Sep 18, 2026",
        "period": "Sep 12-Sep 18, 2026",
        "purchases": null,
        "purchaseRevenue": 294.95,
        "developerRevShare": 206.46,
        "downloads": 85,
        "totalUnits": 85,
        "freeDownloads": null,
        "inAppUnits": null,
        "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable. Developer share is an illustrative 70% estimate, not settled proceeds.",
        "status": "fresh_manual"
      },
      "weekToDate": {
        "label": "Apple gross sales and total units",
        "range": "Sep 12-Sep 18, 2026",
        "period": "Sep 12-Sep 18, 2026",
        "purchases": null,
        "purchaseRevenue": 294.95,
        "developerRevShare": 206.46,
        "downloads": 85,
        "totalUnits": 85,
        "freeDownloads": null,
        "inAppUnits": null,
        "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable. Developer share is an illustrative 70% estimate, not settled proceeds.",
        "status": "fresh_manual"
      },
      "deltas": {
        "salesGrossPct": 22.45,
        "unitsPct": -32.54,
        "freeDownloadsPct": null,
        "inAppUnitsPct": null,
        "comparisonPeriod": "Sep 5-Sep 11, 2026",
        "unitsComparisonPeriod": "Sep 7-Sep 13, 2026 (overlapping last snapshot)"
      },
      "period": "Sep 12-Sep 18, 2026",
      "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable."
    },
    "sourceBreakout": [
      {
        "source": "Stripe",
        "purchases": 5,
        "purchaseRevenue": 104.95,
        "developerRevShare": 104.95,
        "detail": "Fresh same-week Stripe connector pull for Sep 12-Sep 18, 2026."
      },
      {
        "source": "Roku",
        "purchases": 9,
        "purchaseRevenue": 188.91,
        "developerRevShare": 151.11,
        "detail": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals.",
        "status": "stale_preserved"
      },
      {
        "rowId": "ytd-visible-platform-sales",
        "source": "Year to date (Jan 1-Sep 18, 2026)",
        "purchases": 612,
        "purchaseRevenue": 13947.19,
        "detail": "Understates full-year sales - no Google Play source before Aug 7, 2026."
      }
    ],
    "baselineWindow": {
      "label": "Launch baseline",
      "range": "Apr 13-Apr 19, 2026",
      "purchases": 6,
      "purchaseRevenue": 84.94,
      "developerRevShare": 20.99,
      "revenuePerPurchase": 14.16,
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
      "label": "Visible platform sales year to date",
      "range": "Jan 1-Sep 18, 2026",
      "coverageStart": "2026-01-01",
      "coverageEnd": "2026-09-18",
      "purchases": 612,
      "purchaseRevenue": 13947.19,
      "revenuePerPurchase": 22.79,
      "status": "partial_coverage_google_play_missing",
      "components": [
        {
          "source": "Stripe (web)",
          "range": "Jan 1-Aug 6, 2026",
          "purchases": 114,
          "revenue": 2359.84,
          "grain": "transaction-level charge list",
          "coverage": "complete"
        },
        {
          "source": "Apple App Store",
          "range": "Jan 1-Aug 6, 2026",
          "purchases": 16,
          "revenue": 1353.34,
          "grain": "preserved source check",
          "coverage": "partial"
        },
        {
          "source": "Roku",
          "range": "Jan 1-Aug 3, 2026",
          "purchases": 32,
          "revenue": 710.68,
          "grain": "preserved source check",
          "coverage": "partial, stale after Aug 3"
        },
        {
          "source": "DotStudios TVOD (all devices)",
          "range": "Aug 7-Sep 18, 2026",
          "purchases": 450,
          "revenue": 9523.33,
          "grain": "transaction-level, deduped across overlapping exports",
          "coverage": "complete"
        }
      ],
      "recentWindowByDevice": {
        "web": {
          "purchases": 110,
          "revenue": 2330.84
        },
        "apple": {
          "purchases": 132,
          "revenue": 2765.64
        },
        "android": {
          "purchases": 135,
          "revenue": 2931.61
        },
        "roku": {
          "purchases": 68,
          "revenue": 1432.3
        },
        "amazon_fire": {
          "purchases": 2,
          "revenue": 34.97
        },
        "vizio": {
          "purchases": 3,
          "revenue": 27.97
        }
      },
      "note": "Visible platform sales only, not total ElectricNOW sales. Google Play / Android purchases have no reporting source before Aug 7, 2026, so this total understates the full year: Android was the single largest device in the Aug 7-Sep 18 window (135 purchases). Jan 1-Aug 6 is Stripe web transactions plus preserved Apple and Roku source checks; Aug 7-Sep 18 is DotStudios transaction-level data across all devices. Apple manual snapshots are not summed because they mix daily rows with weekly aggregates. Sources overlap by design and are reconciled, not added twice.",
      "caveat": "Understates full-year sales - no Google Play source before Aug 7, 2026.",
      "updatedAt": "2026-09-19 15:27 PDT",
      "previousPublishedValue": {
        "label": "Visible platform sales year to date",
        "range": "Jan 1-Sep 13, 2026",
        "purchases": 593,
        "purchaseRevenue": 13550.4
      },
      "payments": [
        {
          "id": "ch_3U1QPLLG0Cw1zW4e1ZBTdNcI",
          "date": "Aug 6",
          "createdAt": "2026-08-06T12:28:24Z",
          "sortDate": "2026-08-06T12:28:24Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U1QPLLG0Cw1zW4e1ZBTdNcI",
          "stripePaymentIntentId": "pi_3U1QPLLG0Cw1zW4e1R4UjxWW",
          "orderId": "aic-2026080612282350",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "66509"
        },
        {
          "id": "ch_3U1HVgLG0Cw1zW4e0MK2hasJ",
          "date": "Aug 5",
          "createdAt": "2026-08-06T02:58:20Z",
          "sortDate": "2026-08-06T02:58:20Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U1HVgLG0Cw1zW4e0MK2hasJ",
          "stripePaymentIntentId": "pi_3U1HVgLG0Cw1zW4e0920dmuq",
          "orderId": "drp-2026080602582027",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "32805-1356"
        },
        {
          "id": "ch_3U1FT9LG0Cw1zW4e0cBcwjtW",
          "date": "Aug 5",
          "createdAt": "2026-08-06T00:47:35Z",
          "sortDate": "2026-08-06T00:47:35Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U1FT9LG0Cw1zW4e0cBcwjtW",
          "stripePaymentIntentId": "pi_3U1FT9LG0Cw1zW4e09WrCEN8",
          "orderId": "shp-2026080600473509",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "77461"
        },
        {
          "id": "ch_3U1EEjLG0Cw1zW4e2MhJhU2G",
          "date": "Aug 5",
          "createdAt": "2026-08-05T23:28:38Z",
          "sortDate": "2026-08-05T23:28:38Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U1EEjLG0Cw1zW4e2MhJhU2G",
          "stripePaymentIntentId": "pi_3U1EEjLG0Cw1zW4e2NK1QbkF",
          "orderId": "rom-2026080523283743",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "53172"
        },
        {
          "id": "ch_3U1CNNLG0Cw1zW4e2lJfa3De",
          "date": "Aug 5",
          "createdAt": "2026-08-05T21:29:25Z",
          "sortDate": "2026-08-05T21:29:25Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U1CNNLG0Cw1zW4e2lJfa3De",
          "stripePaymentIntentId": "pi_3U1CNNLG0Cw1zW4e2dugArAO",
          "orderId": "clj-2026080521292499",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "60540"
        },
        {
          "id": "ch_3U1BNPLG0Cw1zW4e1QQk7ODL",
          "date": "Aug 5",
          "createdAt": "2026-08-05T20:25:24Z",
          "sortDate": "2026-08-05T20:25:24Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U1BNPLG0Cw1zW4e1QQk7ODL",
          "stripePaymentIntentId": "pi_3U1BNPLG0Cw1zW4e1VOKVhUa",
          "orderId": "noj-2026080520252348",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "33544"
        },
        {
          "id": "ch_3U14GdLG0Cw1zW4e0sry4lWy",
          "date": "Aug 5",
          "createdAt": "2026-08-05T12:49:55Z",
          "sortDate": "2026-08-05T12:49:55Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U14GdLG0Cw1zW4e0sry4lWy",
          "stripePaymentIntentId": "pi_3U14GdLG0Cw1zW4e0bT0DzXm",
          "orderId": "doj-2026080512495519",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "37882"
        },
        {
          "id": "ch_3U0tqnLG0Cw1zW4e1UMoMBcd",
          "date": "Aug 4",
          "createdAt": "2026-08-05T01:42:33Z",
          "sortDate": "2026-08-05T01:42:33Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0tqnLG0Cw1zW4e1UMoMBcd",
          "stripePaymentIntentId": "pi_3U0tqnLG0Cw1zW4e1O8FqvmL",
          "orderId": "rir-2026080501423335",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "89129"
        },
        {
          "id": "ch_3U0tUCLG0Cw1zW4e0p3fAn0k",
          "date": "Aug 4",
          "createdAt": "2026-08-05T01:19:13Z",
          "sortDate": "2026-08-05T01:19:13Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0tUCLG0Cw1zW4e0p3fAn0k",
          "stripePaymentIntentId": "pi_3U0tUCLG0Cw1zW4e0o7yMANd",
          "orderId": "nom-2026080501191236",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "17403"
        },
        {
          "id": "ch_3U0spyLG0Cw1zW4e2mupHw0X",
          "date": "Aug 4",
          "createdAt": "2026-08-05T00:37:38Z",
          "sortDate": "2026-08-05T00:37:38Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0spyLG0Cw1zW4e2mupHw0X",
          "stripePaymentIntentId": "pi_3U0spyLG0Cw1zW4e2kWD20is",
          "orderId": "adj-2026080500373835",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "08234"
        },
        {
          "id": "ch_3U0s1mLG0Cw1zW4e1tIFRN7A",
          "date": "Aug 4",
          "createdAt": "2026-08-04T23:45:46Z",
          "sortDate": "2026-08-04T23:45:46Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0s1mLG0Cw1zW4e1tIFRN7A",
          "stripePaymentIntentId": "pi_3U0s1mLG0Cw1zW4e1gKZLFtP",
          "orderId": "spm-2026080423454586",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "58368"
        },
        {
          "id": "ch_3U0ryQLG0Cw1zW4e1LIc1gnl",
          "date": "Aug 4",
          "createdAt": "2026-08-04T23:42:18Z",
          "sortDate": "2026-08-04T23:42:18Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0ryQLG0Cw1zW4e1LIc1gnl",
          "stripePaymentIntentId": "pi_3U0ryQLG0Cw1zW4e1AFD4hFW",
          "orderId": "ken-2026080423421830",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "06076"
        },
        {
          "id": "ch_3U0qfNLG0Cw1zW4e2r6ELyTx",
          "date": "Aug 4",
          "createdAt": "2026-08-04T22:18:33Z",
          "sortDate": "2026-08-04T22:18:33Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0qfNLG0Cw1zW4e2r6ELyTx",
          "stripePaymentIntentId": "pi_3U0qfNLG0Cw1zW4e2hgHc2n2",
          "orderId": "mor-2026080422183319",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "Nw71DU"
        },
        {
          "id": "ch_3U0n0lLG0Cw1zW4e2RVEoY1W",
          "date": "Aug 4",
          "createdAt": "2026-08-04T18:24:24Z",
          "sortDate": "2026-08-04T18:24:24Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0n0lLG0Cw1zW4e2RVEoY1W",
          "stripePaymentIntentId": "pi_3U0n0lLG0Cw1zW4e2tTkxZdn",
          "orderId": "buh-2026080418242346",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "97404"
        },
        {
          "id": "ch_3U0lKOLG0Cw1zW4e1xbKH1e7",
          "date": "Aug 4",
          "createdAt": "2026-08-04T16:36:32Z",
          "sortDate": "2026-08-04T16:36:32Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0lKOLG0Cw1zW4e1xbKH1e7",
          "stripePaymentIntentId": "pi_3U0lKOLG0Cw1zW4e1fr0oa5M",
          "orderId": "ell-2026080416363229",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "03229"
        },
        {
          "id": "ch_3U0jRjLG0Cw1zW4e1viBvBk9",
          "date": "Aug 4",
          "createdAt": "2026-08-04T14:35:59Z",
          "sortDate": "2026-08-04T14:35:59Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0jRjLG0Cw1zW4e1viBvBk9",
          "stripePaymentIntentId": "pi_3U0jRjLG0Cw1zW4e1Oj2X3YY",
          "orderId": "jek-2026080414355891",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "97023"
        },
        {
          "id": "ch_3U0dRLLG0Cw1zW4e2wKcSXBm",
          "date": "Aug 4",
          "createdAt": "2026-08-04T08:11:11Z",
          "sortDate": "2026-08-04T08:11:11Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0dRLLG0Cw1zW4e2wKcSXBm",
          "stripePaymentIntentId": "pi_3U0dRLLG0Cw1zW4e2ToPehzE",
          "orderId": "dej-2026080408111080",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "90012"
        },
        {
          "id": "ch_3U0abXLG0Cw1zW4e2N6d18CF",
          "date": "Aug 3",
          "createdAt": "2026-08-04T05:09:31Z",
          "sortDate": "2026-08-04T05:09:31Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0abXLG0Cw1zW4e2N6d18CF",
          "stripePaymentIntentId": "pi_3U0abXLG0Cw1zW4e2dRGYObQ",
          "orderId": "ths-2026080405093111",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "91316"
        },
        {
          "id": "ch_3U0aGILG0Cw1zW4e0K33UHSQ",
          "date": "Aug 3",
          "createdAt": "2026-08-04T04:47:34Z",
          "sortDate": "2026-08-04T04:47:34Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0aGILG0Cw1zW4e0K33UHSQ",
          "stripePaymentIntentId": "pi_3U0aGILG0Cw1zW4e0iJu39vp",
          "orderId": "mij-2026080404473379",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "84047"
        },
        {
          "id": "ch_3U0YjRLG0Cw1zW4e1mBkW3HV",
          "date": "Aug 3",
          "createdAt": "2026-08-04T03:09:33Z",
          "sortDate": "2026-08-04T03:09:33Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0YjRLG0Cw1zW4e1mBkW3HV",
          "stripePaymentIntentId": "pi_3U0YjRLG0Cw1zW4e1q3r6gU5",
          "orderId": "dag-2026080403093346",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "85748"
        },
        {
          "id": "ch_3U0Y4eLG0Cw1zW4e1CaAwPXg",
          "date": "Aug 3",
          "createdAt": "2026-08-04T02:27:25Z",
          "sortDate": "2026-08-04T02:27:25Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0Y4eLG0Cw1zW4e1CaAwPXg",
          "stripePaymentIntentId": "pi_3U0Y4eLG0Cw1zW4e1lZGHuSc",
          "orderId": "rit-2026080402272459",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "92130"
        },
        {
          "id": "ch_3U0V2VLG0Cw1zW4e13UmYAmM",
          "date": "Aug 3",
          "createdAt": "2026-08-03T23:12:59Z",
          "sortDate": "2026-08-03T23:12:59Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0V2VLG0Cw1zW4e13UmYAmM",
          "stripePaymentIntentId": "pi_3U0V2VLG0Cw1zW4e1JUXa5fK",
          "orderId": "ovj-2026080323125883",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "30606"
        },
        {
          "id": "ch_3U0UcsLG0Cw1zW4e1tm2H5ih",
          "date": "Aug 3",
          "createdAt": "2026-08-03T22:46:31Z",
          "sortDate": "2026-08-03T22:46:31Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0UcsLG0Cw1zW4e1tm2H5ih",
          "stripePaymentIntentId": "pi_3U0UcsLG0Cw1zW4e1g575i57",
          "orderId": "dum-2026080322463050",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "07675"
        },
        {
          "id": "ch_3U0TY2LG0Cw1zW4e0A7LBu9v",
          "date": "Aug 3",
          "createdAt": "2026-08-03T21:37:26Z",
          "sortDate": "2026-08-03T21:37:26Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0TY2LG0Cw1zW4e0A7LBu9v",
          "stripePaymentIntentId": "pi_3U0TY2LG0Cw1zW4e0khMMhcN",
          "orderId": "god-2026080321372627",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "33850"
        },
        {
          "id": "ch_3U0TTMLG0Cw1zW4e0Y0Jn1hi",
          "date": "Aug 3",
          "createdAt": "2026-08-03T21:32:36Z",
          "sortDate": "2026-08-03T21:32:36Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0TTMLG0Cw1zW4e0Y0Jn1hi",
          "stripePaymentIntentId": "pi_3U0TTMLG0Cw1zW4e0bM2F9cy",
          "orderId": "god-2026080321323640",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "33850"
        },
        {
          "id": "ch_3U0TTMLG0Cw1zW4e2ddW297X",
          "date": "Aug 3",
          "createdAt": "2026-08-03T21:32:36Z",
          "sortDate": "2026-08-03T21:32:36Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0TTMLG0Cw1zW4e2ddW297X",
          "stripePaymentIntentId": "pi_3U0TTMLG0Cw1zW4e2toCPVmD",
          "orderId": "dee-2026080321323587",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "98125"
        },
        {
          "id": "ch_3U0TTLLG0Cw1zW4e1dDjxktV",
          "date": "Aug 3",
          "createdAt": "2026-08-03T21:32:35Z",
          "sortDate": "2026-08-03T21:32:35Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0TTLLG0Cw1zW4e1dDjxktV",
          "stripePaymentIntentId": "pi_3U0TTLLG0Cw1zW4e1LOG6N1Q",
          "orderId": "crs-2026080321323528",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "45840"
        },
        {
          "id": "ch_3U0TCFLG0Cw1zW4e0PM2Uy7V",
          "date": "Aug 3",
          "createdAt": "2026-08-03T21:14:56Z",
          "sortDate": "2026-08-03T21:14:56Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0TCFLG0Cw1zW4e0PM2Uy7V",
          "stripePaymentIntentId": "pi_3U0TCFLG0Cw1zW4e0sH3757a",
          "orderId": "gaj-2026080321145561",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "21093"
        },
        {
          "id": "ch_3U0T1VLG0Cw1zW4e2jnJWDzR",
          "date": "Aug 3",
          "createdAt": "2026-08-03T21:03:49Z",
          "sortDate": "2026-08-03T21:03:49Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0T1VLG0Cw1zW4e2jnJWDzR",
          "stripePaymentIntentId": "pi_3U0T1VLG0Cw1zW4e2OpKJpuH",
          "orderId": "paw-2026080321034940",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "28451"
        },
        {
          "id": "ch_3U0SlMLG0Cw1zW4e0cl8UUyP",
          "date": "Aug 3",
          "createdAt": "2026-08-03T20:47:08Z",
          "sortDate": "2026-08-03T20:47:08Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0SlMLG0Cw1zW4e0cl8UUyP",
          "stripePaymentIntentId": "pi_3U0SlMLG0Cw1zW4e0L2YCJFC",
          "orderId": "goc-2026080320470840",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "80121"
        },
        {
          "id": "ch_3U0RH2LG0Cw1zW4e21zAVhh4",
          "date": "Aug 3",
          "createdAt": "2026-08-03T19:11:44Z",
          "sortDate": "2026-08-03T19:11:44Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0RH2LG0Cw1zW4e21zAVhh4",
          "stripePaymentIntentId": "pi_3U0RH2LG0Cw1zW4e2yJxmT9q",
          "orderId": "cab-2026080319114407",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "12561"
        },
        {
          "id": "ch_3U0QhaLG0Cw1zW4e01f5XIGe",
          "date": "Aug 3",
          "createdAt": "2026-08-03T18:35:06Z",
          "sortDate": "2026-08-03T18:35:06Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0QhaLG0Cw1zW4e01f5XIGe",
          "stripePaymentIntentId": "pi_3U0QhaLG0Cw1zW4e0EhN1KS2",
          "orderId": "vao-2026080318350590",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "07008"
        },
        {
          "id": "ch_3U0QeaLG0Cw1zW4e2yxzxAUz",
          "date": "Aug 3",
          "createdAt": "2026-08-03T18:32:00Z",
          "sortDate": "2026-08-03T18:32:00Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0QeaLG0Cw1zW4e2yxzxAUz",
          "stripePaymentIntentId": "pi_3U0QeaLG0Cw1zW4e2mSLDACx",
          "orderId": "brr-2026080318315977",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "so155as"
        },
        {
          "id": "ch_3U0QZtLG0Cw1zW4e2SxN6Ww6",
          "date": "Aug 3",
          "createdAt": "2026-08-03T18:27:09Z",
          "sortDate": "2026-08-03T18:27:09Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0QZtLG0Cw1zW4e2SxN6Ww6",
          "stripePaymentIntentId": "pi_3U0QZtLG0Cw1zW4e21a21dLe",
          "orderId": "haw-2026080318270894",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "80015"
        },
        {
          "id": "ch_3U0QPyLG0Cw1zW4e2s3Svcmx",
          "date": "Aug 3",
          "createdAt": "2026-08-03T18:16:54Z",
          "sortDate": "2026-08-03T18:16:54Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0QPyLG0Cw1zW4e2s3Svcmx",
          "stripePaymentIntentId": "pi_3U0QPyLG0Cw1zW4e2GiSIM9B",
          "orderId": "auj-2026080318165407",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "33312"
        },
        {
          "id": "ch_3U0PVfLG0Cw1zW4e2y8Ts45E",
          "date": "Aug 3",
          "createdAt": "2026-08-03T17:18:43Z",
          "sortDate": "2026-08-03T17:18:43Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0PVfLG0Cw1zW4e2y8Ts45E",
          "stripePaymentIntentId": "pi_3U0PVfLG0Cw1zW4e27yM6CGo",
          "orderId": "rot-2026080317184325",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "50324"
        },
        {
          "id": "ch_3U0NxpLG0Cw1zW4e0Jf4ljZP",
          "date": "Aug 3",
          "createdAt": "2026-08-03T15:39:41Z",
          "sortDate": "2026-08-03T15:39:41Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0NxpLG0Cw1zW4e0Jf4ljZP",
          "stripePaymentIntentId": "pi_3U0NxpLG0Cw1zW4e0HvqUvqX",
          "orderId": "toc-2026080315394085",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "30542"
        },
        {
          "id": "ch_3U0MYWLG0Cw1zW4e2U8KlkxG",
          "date": "Aug 3",
          "createdAt": "2026-08-03T14:09:29Z",
          "sortDate": "2026-08-03T14:09:29Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0MYWLG0Cw1zW4e2U8KlkxG",
          "stripePaymentIntentId": "pi_3U0MYWLG0Cw1zW4e2o3ydkfH",
          "orderId": "mam-2026080314092849",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "60136"
        },
        {
          "id": "ch_3U0MSqLG0Cw1zW4e07JuMfIB",
          "date": "Aug 3",
          "createdAt": "2026-08-03T14:03:36Z",
          "sortDate": "2026-08-03T14:03:36Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0MSqLG0Cw1zW4e07JuMfIB",
          "stripePaymentIntentId": "pi_3U0MSqLG0Cw1zW4e0mUIGwHe",
          "orderId": "dog-2026080314033600",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "98607"
        },
        {
          "id": "ch_3U0LYDLG0Cw1zW4e2wo6Cy5f",
          "date": "Aug 3",
          "createdAt": "2026-08-03T13:05:06Z",
          "sortDate": "2026-08-03T13:05:06Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0LYDLG0Cw1zW4e2wo6Cy5f",
          "stripePaymentIntentId": "pi_3U0LYDLG0Cw1zW4e2DWUNkYG",
          "orderId": "ocr-2026080313050566",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "77407"
        },
        {
          "id": "ch_3U0L9bLG0Cw1zW4e2EFEpUVp",
          "date": "Aug 3",
          "createdAt": "2026-08-03T12:39:40Z",
          "sortDate": "2026-08-03T12:39:40Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0L9bLG0Cw1zW4e2EFEpUVp",
          "stripePaymentIntentId": "pi_3U0L9bLG0Cw1zW4e2KMfl8sB",
          "orderId": "fis-2026080312393953",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "20716"
        },
        {
          "id": "ch_3U0Kj0LG0Cw1zW4e2Ou9bvee",
          "date": "Aug 3",
          "createdAt": "2026-08-03T12:12:10Z",
          "sortDate": "2026-08-03T12:12:10Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0Kj0LG0Cw1zW4e2Ou9bvee",
          "stripePaymentIntentId": "pi_3U0Kj0LG0Cw1zW4e2SbkWyWU",
          "orderId": "pas-2026080312121033",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "26554"
        },
        {
          "id": "ch_3U0JmwLG0Cw1zW4e1yK7Kqqf",
          "date": "Aug 3",
          "createdAt": "2026-08-03T11:12:10Z",
          "sortDate": "2026-08-03T11:12:10Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0JmwLG0Cw1zW4e1yK7Kqqf",
          "stripePaymentIntentId": "pi_3U0JmwLG0Cw1zW4e1xcvnkpH",
          "orderId": "yak-2026080311120993",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "83843"
        },
        {
          "id": "ch_3U0HaCLG0Cw1zW4e2E5nbWOg",
          "date": "Aug 3",
          "createdAt": "2026-08-03T08:50:52Z",
          "sortDate": "2026-08-03T08:50:52Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0HaCLG0Cw1zW4e2E5nbWOg",
          "stripePaymentIntentId": "pi_3U0HaCLG0Cw1zW4e2aVCJ4dU",
          "orderId": "bas-2026080308505215",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "760277"
        },
        {
          "id": "ch_3U0GnYLG0Cw1zW4e0d0DpfPY",
          "date": "Aug 3",
          "createdAt": "2026-08-03T08:00:36Z",
          "sortDate": "2026-08-03T08:00:36Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0GnYLG0Cw1zW4e0d0DpfPY",
          "stripePaymentIntentId": "pi_3U0GnYLG0Cw1zW4e0Cbr6z4V",
          "orderId": "mcg-2026080308003579",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "V3L 4G4"
        },
        {
          "id": "ch_3U0D7yLG0Cw1zW4e2Uhrbc8Y",
          "date": "Aug 2",
          "createdAt": "2026-08-03T04:05:26Z",
          "sortDate": "2026-08-03T04:05:26Z",
          "amount": 19.98,
          "developerRevShare": 19.98,
          "description": "Customer User - Purchase Bundle 20: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0D7yLG0Cw1zW4e2Uhrbc8Y",
          "stripePaymentIntentId": "pi_3U0D7yLG0Cw1zW4e2AbgrzrA",
          "orderId": "goc-2026080304052579",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "80121"
        },
        {
          "id": "ch_3U0BHaLG0Cw1zW4e2McLyn79",
          "date": "Aug 2",
          "createdAt": "2026-08-03T02:07:14Z",
          "sortDate": "2026-08-03T02:07:14Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U0BHaLG0Cw1zW4e2McLyn79",
          "stripePaymentIntentId": "pi_3U0BHaLG0Cw1zW4e2mT4wwVS",
          "orderId": "bla-2026080302071386",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "70754"
        },
        {
          "id": "ch_3U06x0LG0Cw1zW4e2Ms2ApcY",
          "date": "Aug 2",
          "createdAt": "2026-08-02T21:29:42Z",
          "sortDate": "2026-08-02T21:29:42Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U06x0LG0Cw1zW4e2Ms2ApcY",
          "stripePaymentIntentId": "pi_3U06x0LG0Cw1zW4e24rYxjgb",
          "orderId": "myk-2026080221294213",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "47404"
        },
        {
          "id": "ch_3U03YRLG0Cw1zW4e0JeIRS1L",
          "date": "Aug 2",
          "createdAt": "2026-08-02T17:52:07Z",
          "sortDate": "2026-08-02T17:52:07Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U03YRLG0Cw1zW4e0JeIRS1L",
          "stripePaymentIntentId": "pi_3U03YRLG0Cw1zW4e0R50vgMl",
          "orderId": "ast-2026080217520691",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "91911-4003"
        },
        {
          "id": "ch_3U02GBLG0Cw1zW4e0UBV3qyU",
          "date": "Aug 2",
          "createdAt": "2026-08-02T16:29:11Z",
          "sortDate": "2026-08-02T16:29:11Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U02GBLG0Cw1zW4e0UBV3qyU",
          "stripePaymentIntentId": "pi_3U02GBLG0Cw1zW4e0qRKwWh1",
          "orderId": "chm-2026080216291122",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "65109"
        },
        {
          "id": "ch_3U01jJLG0Cw1zW4e07amka3k",
          "date": "Aug 2",
          "createdAt": "2026-08-02T15:55:13Z",
          "sortDate": "2026-08-02T15:55:13Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3U01jJLG0Cw1zW4e07amka3k",
          "stripePaymentIntentId": "pi_3U01jJLG0Cw1zW4e0gHK5LGq",
          "orderId": "chj-2026080215551287",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "64844"
        },
        {
          "id": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt",
          "date": "Aug 1",
          "createdAt": "2026-08-02T02:59:21Z",
          "sortDate": "2026-08-02T02:59:21Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt",
          "stripePaymentIntentId": "pi_3TzpcTLG0Cw1zW4e2ONdvaRi",
          "orderId": "itr-2026080202592092",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "53094"
        },
        {
          "id": "ch_3TzmDeLG0Cw1zW4e1hSM76p5",
          "date": "Aug 1",
          "createdAt": "2026-08-01T23:21:31Z",
          "sortDate": "2026-08-01T23:21:31Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzmDeLG0Cw1zW4e1hSM76p5",
          "stripePaymentIntentId": "pi_3TzmDeLG0Cw1zW4e1DjlcMXo",
          "orderId": "baa-2026080123213055",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "91105"
        },
        {
          "id": "ch_3TzUsaLG0Cw1zW4e1E2iPagJ",
          "date": "Jul 31",
          "createdAt": "2026-08-01T04:50:37Z",
          "sortDate": "2026-08-01T04:50:37Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzUsaLG0Cw1zW4e1E2iPagJ",
          "stripePaymentIntentId": "pi_3TzUsaLG0Cw1zW4e1tfWkCsi",
          "orderId": "sas-2026080104503658",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "97317"
        },
        {
          "id": "ch_3TzUOVLG0Cw1zW4e1cL58jI6",
          "date": "Jul 31",
          "createdAt": "2026-08-01T04:19:31Z",
          "sortDate": "2026-08-01T04:19:31Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzUOVLG0Cw1zW4e1cL58jI6",
          "stripePaymentIntentId": "pi_3TzUOVLG0Cw1zW4e1RwTB9hv",
          "orderId": "wew-2026080104193090",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "98201"
        },
        {
          "id": "ch_3TzUKMLG0Cw1zW4e2kKfWreG",
          "date": "Jul 31",
          "createdAt": "2026-08-01T04:15:14Z",
          "sortDate": "2026-08-01T04:15:14Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzUKMLG0Cw1zW4e2kKfWreG",
          "stripePaymentIntentId": "pi_3TzUKMLG0Cw1zW4e2H29Ygkt",
          "orderId": "pyy-2026080104151396",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "06897"
        },
        {
          "id": "ch_3TzS18LG0Cw1zW4e0gJjIT5t",
          "date": "Jul 31",
          "createdAt": "2026-08-01T01:47:14Z",
          "sortDate": "2026-08-01T01:47:14Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzS18LG0Cw1zW4e0gJjIT5t",
          "stripePaymentIntentId": "pi_3TzS18LG0Cw1zW4e0ZkxzNE3",
          "orderId": "gol-2026080101471383",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "34238"
        },
        {
          "id": "ch_3TzR9FLG0Cw1zW4e1mPMQLV7",
          "date": "Jul 31",
          "createdAt": "2026-08-01T00:51:33Z",
          "sortDate": "2026-08-01T00:51:33Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzR9FLG0Cw1zW4e1mPMQLV7",
          "stripePaymentIntentId": "pi_3TzR9FLG0Cw1zW4e1C46ZvYS",
          "orderId": "bag-2026080100513319",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "44221"
        },
        {
          "id": "ch_3TzQHKLG0Cw1zW4e0m2DJ4QH",
          "date": "Jul 31",
          "createdAt": "2026-07-31T23:55:50Z",
          "sortDate": "2026-07-31T23:55:50Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzQHKLG0Cw1zW4e0m2DJ4QH",
          "stripePaymentIntentId": "pi_3TzQHKLG0Cw1zW4e0PP1u8tL",
          "orderId": "brr-2026073123554977",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "27704"
        },
        {
          "id": "ch_3TzJehLG0Cw1zW4e0ZafeOP1",
          "date": "Jul 31",
          "createdAt": "2026-07-31T16:51:32Z",
          "sortDate": "2026-07-31T16:51:32Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzJehLG0Cw1zW4e0ZafeOP1",
          "stripePaymentIntentId": "pi_3TzJehLG0Cw1zW4e0PvTBJus",
          "orderId": "com-2026073116513172",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "32086"
        },
        {
          "id": "ch_3TzJNXLG0Cw1zW4e0nCG3w5s",
          "date": "Jul 31",
          "createdAt": "2026-07-31T16:33:48Z",
          "sortDate": "2026-07-31T16:33:48Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzJNXLG0Cw1zW4e0nCG3w5s",
          "stripePaymentIntentId": "pi_3TzJNXLG0Cw1zW4e0huvDWSP",
          "orderId": "sah-2026073116334765",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "92260"
        },
        {
          "id": "ch_3TzEFKLG0Cw1zW4e23n3fXCE",
          "date": "Jul 31",
          "createdAt": "2026-07-31T11:04:59Z",
          "sortDate": "2026-07-31T11:04:59Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzEFKLG0Cw1zW4e23n3fXCE",
          "stripePaymentIntentId": "pi_3TzEFKLG0Cw1zW4e2BhEcfTJ",
          "orderId": "spc-2026073111045857",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "75409"
        },
        {
          "id": "ch_3TzCUiLG0Cw1zW4e16ILLnfy",
          "date": "Jul 31",
          "createdAt": "2026-07-31T09:12:45Z",
          "sortDate": "2026-07-31T09:12:45Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzCUiLG0Cw1zW4e16ILLnfy",
          "stripePaymentIntentId": "pi_3TzCUiLG0Cw1zW4e1e6IMbcp",
          "orderId": "boj-2026073109124470",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "45805"
        },
        {
          "id": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs",
          "date": "Jul 30",
          "createdAt": "2026-07-31T03:44:17Z",
          "sortDate": "2026-07-31T03:44:17Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs",
          "stripePaymentIntentId": "pi_3Tz7MrLG0Cw1zW4e0nFPqa1h",
          "orderId": "gaj-2026073103441719",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "78260"
        },
        {
          "id": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd",
          "date": "Jul 30",
          "createdAt": "2026-07-31T03:40:22Z",
          "sortDate": "2026-07-31T03:40:22Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd",
          "stripePaymentIntentId": "pi_3Tz7J4LG0Cw1zW4e0HUD0BHa",
          "orderId": "coj-2026073103402209",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "95119"
        },
        {
          "id": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR",
          "date": "Jul 30",
          "createdAt": "2026-07-31T03:29:27Z",
          "sortDate": "2026-07-31T03:29:27Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR",
          "stripePaymentIntentId": "pi_3Tz78ULG0Cw1zW4e0tM1JWeq",
          "orderId": "huc-2026073103292664",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "78240"
        },
        {
          "id": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv",
          "date": "Jul 30",
          "createdAt": "2026-07-31T00:16:09Z",
          "sortDate": "2026-07-31T00:16:09Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv",
          "stripePaymentIntentId": "pi_3Tz47RLG0Cw1zW4e1FYzc0le",
          "orderId": "taj-2026073100160920",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "11224"
        },
        {
          "id": "ch_3Tz3MsLG0Cw1zW4e00hGznTV",
          "date": "Jul 30",
          "createdAt": "2026-07-30T23:28:02Z",
          "sortDate": "2026-07-30T23:28:02Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tz3MsLG0Cw1zW4e00hGznTV",
          "stripePaymentIntentId": "pi_3Tz3MsLG0Cw1zW4e0mjh6SJz",
          "orderId": "gud-2026073023280174",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "34772"
        },
        {
          "id": "ch_3Tz301LG0Cw1zW4e1OHOZPHl",
          "date": "Jul 30",
          "createdAt": "2026-07-30T23:04:26Z",
          "sortDate": "2026-07-30T23:04:26Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tz301LG0Cw1zW4e1OHOZPHl",
          "stripePaymentIntentId": "pi_3Tz301LG0Cw1zW4e1ZokiUw6",
          "orderId": "war-2026073023042542",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "78840-7742"
        },
        {
          "id": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7",
          "date": "Jul 30",
          "createdAt": "2026-07-30T22:05:40Z",
          "sortDate": "2026-07-30T22:05:40Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7",
          "stripePaymentIntentId": "pi_3Tz25ALG0Cw1zW4e2WFGOneD",
          "orderId": "dar-2026073022054001",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "30707"
        },
        {
          "id": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK",
          "date": "Jul 30",
          "createdAt": "2026-07-30T21:16:17Z",
          "sortDate": "2026-07-30T21:16:17Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK",
          "stripePaymentIntentId": "pi_3Tz1JNLG0Cw1zW4e10c2mJD9",
          "orderId": "kot-2026073021161666",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "53072"
        },
        {
          "id": "ch_3Tz1ANLG0Cw1zW4e0UQ7AKMZ",
          "date": "Jul 30",
          "createdAt": "2026-07-30T21:06:59Z",
          "sortDate": "2026-07-30T21:06:59Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tz1ANLG0Cw1zW4e0UQ7AKMZ",
          "stripePaymentIntentId": "pi_3Tz1ANLG0Cw1zW4e0p7QtHKt",
          "orderId": "crj-2026073021065903",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "07032"
        },
        {
          "id": "ch_3TyzCmLG0Cw1zW4e0OkN3IXD",
          "date": "Jul 30",
          "createdAt": "2026-07-30T19:01:20Z",
          "sortDate": "2026-07-30T19:01:20Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TyzCmLG0Cw1zW4e0OkN3IXD",
          "stripePaymentIntentId": "pi_3TyzCmLG0Cw1zW4e0B1Gtod3",
          "orderId": "ind-2026073019012018",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "49307"
        },
        {
          "id": "ch_3TyvJZLG0Cw1zW4e29PYVKoH",
          "date": "Jul 30",
          "createdAt": "2026-07-30T14:52:05Z",
          "sortDate": "2026-07-30T14:52:05Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TyvJZLG0Cw1zW4e29PYVKoH",
          "stripePaymentIntentId": "pi_3TyvJZLG0Cw1zW4e2Xwr2Ngh",
          "orderId": "fis-2026073014520532",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "20716"
        },
        {
          "id": "ch_3TyuURLG0Cw1zW4e2bpnTqLk",
          "date": "Jul 30",
          "createdAt": "2026-07-30T13:59:15Z",
          "sortDate": "2026-07-30T13:59:15Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TyuURLG0Cw1zW4e2bpnTqLk",
          "stripePaymentIntentId": "pi_3TyuURLG0Cw1zW4e2dGOkWT1",
          "orderId": "bas-2026073013591485",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "760277"
        },
        {
          "id": "ch_3Tyu2VLG0Cw1zW4e0luUxo96",
          "date": "Jul 30",
          "createdAt": "2026-07-30T13:30:23Z",
          "sortDate": "2026-07-30T13:30:23Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tyu2VLG0Cw1zW4e0luUxo96",
          "stripePaymentIntentId": "pi_3Tyu2VLG0Cw1zW4e00p70EBS",
          "orderId": "bom-2026073013302344",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "97754"
        },
        {
          "id": "ch_3TytxLLG0Cw1zW4e2FpZ4FHc",
          "date": "Jul 30",
          "createdAt": "2026-07-30T13:25:03Z",
          "sortDate": "2026-07-30T13:25:03Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TytxLLG0Cw1zW4e2FpZ4FHc",
          "stripePaymentIntentId": "pi_3TytxLLG0Cw1zW4e2jaqTlD5",
          "orderId": "bed-2026073013250321",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "90039"
        },
        {
          "id": "ch_3TytpLLG0Cw1zW4e2mlSZtpI",
          "date": "Jul 30",
          "createdAt": "2026-07-30T13:16:48Z",
          "sortDate": "2026-07-30T13:16:48Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TytpLLG0Cw1zW4e2mlSZtpI",
          "stripePaymentIntentId": "pi_3TytpLLG0Cw1zW4e2Uk4gTJE",
          "orderId": "tid-2026073013164763",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "80221-4090"
        },
        {
          "id": "ch_3Tys4oLG0Cw1zW4e18cjs5pa",
          "date": "Jul 30",
          "createdAt": "2026-07-30T11:24:38Z",
          "sortDate": "2026-07-30T11:24:38Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tys4oLG0Cw1zW4e18cjs5pa",
          "stripePaymentIntentId": "pi_3Tys4oLG0Cw1zW4e1EqfS7yB",
          "orderId": "ann-2026073011243826",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "93709"
        },
        {
          "id": "ch_3TyrAVLG0Cw1zW4e1FifKDmF",
          "date": "Jul 30",
          "createdAt": "2026-07-30T10:26:27Z",
          "sortDate": "2026-07-30T10:26:27Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TyrAVLG0Cw1zW4e1FifKDmF",
          "stripePaymentIntentId": "pi_3TyrAVLG0Cw1zW4e16XWG5po",
          "orderId": "paj-2026073010262706",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "91202"
        },
        {
          "id": "ch_3Tyq1cLG0Cw1zW4e2FB0Tk9a",
          "date": "Jul 30",
          "createdAt": "2026-07-30T09:13:13Z",
          "sortDate": "2026-07-30T09:13:13Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tyq1cLG0Cw1zW4e2FB0Tk9a",
          "stripePaymentIntentId": "pi_3Tyq1cLG0Cw1zW4e2sUdkqzy",
          "orderId": "mec-2026073009131248",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "92027"
        },
        {
          "id": "ch_3TypI6LG0Cw1zW4e1qSCh6i3",
          "date": "Jul 30",
          "createdAt": "2026-07-30T08:26:10Z",
          "sortDate": "2026-07-30T08:26:10Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TypI6LG0Cw1zW4e1qSCh6i3",
          "stripePaymentIntentId": "pi_3TypI6LG0Cw1zW4e1DWOdzwV",
          "orderId": "pem-2026073008261037",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "85340"
        },
        {
          "id": "ch_3Tyot3LG0Cw1zW4e0qLYtbmV",
          "date": "Jul 30",
          "createdAt": "2026-07-30T08:00:17Z",
          "sortDate": "2026-07-30T08:00:17Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Tyot3LG0Cw1zW4e0qLYtbmV",
          "stripePaymentIntentId": "pi_3Tyot3LG0Cw1zW4e065eK1tE",
          "orderId": "jom-2026073008001694",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "91724"
        },
        {
          "id": "ch_3TyUuPLG0Cw1zW4e2UIrqDbg",
          "date": "Jul 29",
          "createdAt": "2026-07-29T10:40:21Z",
          "sortDate": "2026-07-29T10:40:21Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Purchase Bundle 21: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TyUuPLG0Cw1zW4e2UIrqDbg",
          "stripePaymentIntentId": "pi_3TyUuPLG0Cw1zW4e2XnL5rB4",
          "orderId": "paj-2026072910402080",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "91202"
        },
        {
          "id": "ch_3Txt8TLG0Cw1zW4e0nsHWvcG",
          "date": "Jul 27",
          "createdAt": "2026-07-27T18:20:21Z",
          "sortDate": "2026-07-27T18:20:21Z",
          "amount": 14.99,
          "developerRevShare": 14.99,
          "description": "Customer User - Purchase this title: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Txt8TLG0Cw1zW4e0nsHWvcG",
          "stripePaymentIntentId": "pi_3Txt8TLG0Cw1zW4e0n5w12v6",
          "orderId": "jom-2026072718202102",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "90069"
        },
        {
          "id": "ch_3Txt79LG0Cw1zW4e1I51WlLH",
          "date": "Jul 27",
          "createdAt": "2026-07-27T18:18:59Z",
          "sortDate": "2026-07-27T18:18:59Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Purchase Bundle 21: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3Txt79LG0Cw1zW4e1I51WlLH",
          "stripePaymentIntentId": "pi_3Txt79LG0Cw1zW4e1zbs8Q3n",
          "orderId": "jom-2026072718185937",
          "contentId": null,
          "contentTitle": null,
          "postalCode": "90069"
        },
        {
          "date": "Aug 2",
          "createdAt": "2026-08-02",
          "amount": 20.99,
          "developerRevShare": 16.79,
          "description": "Roku - Purchase Bundle 21",
          "source": "Roku"
        },
        {
          "date": "Aug 1",
          "createdAt": "2026-08-01",
          "amount": 19.99,
          "developerRevShare": 15.99,
          "description": "Roku - Purchase Bundle 20",
          "source": "Roku"
        },
        {
          "date": "Aug 1",
          "createdAt": "2026-08-01",
          "amount": 83.96,
          "developerRevShare": 67.16,
          "description": "Roku - Purchase Bundle 21",
          "source": "Roku"
        },
        {
          "date": "Jul 31",
          "createdAt": "2026-07-31",
          "amount": 209.9,
          "developerRevShare": 167.9,
          "description": "Roku - Purchase Bundle 21",
          "source": "Roku"
        },
        {
          "date": "Jul 31",
          "createdAt": "2026-07-31",
          "amount": 54.99,
          "developerRevShare": 43.99,
          "description": "Roku - Purchase Bundle 55",
          "source": "Roku"
        },
        {
          "date": "Jul 30",
          "createdAt": "2026-07-30",
          "amount": 146.93,
          "developerRevShare": 117.53,
          "description": "Roku - Purchase Bundle 21",
          "source": "Roku"
        },
        {
          "date": "Jul 27",
          "createdAt": "2026-07-27",
          "amount": 19.99,
          "developerRevShare": 15.99,
          "description": "Roku - Purchase Bundle 20",
          "source": "Roku"
        },
        {
          "date": "Jul 27",
          "createdAt": "2026-07-27",
          "amount": 20.99,
          "developerRevShare": 16.79,
          "description": "Roku - Purchase Bundle 21",
          "source": "Roku"
        },
        {
          "date": "May 13, 2026",
          "createdAt": "2026-05-13",
          "amount": 29.99,
          "developerRevShare": 20.99,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "May 18, 2026",
          "createdAt": "2026-05-18",
          "amount": 29.99,
          "developerRevShare": 20.99,
          "description": "Apple App Store - Purchase Bundle 30",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "May 18, 2026",
          "createdAt": "2026-05-18",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "May 25, 2026",
          "createdAt": "2026-05-25",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "June 10, 2026",
          "createdAt": "2026-06-10",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "June 11, 2026",
          "createdAt": "2026-06-11",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "June 13, 2026",
          "createdAt": "2026-06-13",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "June 13, 2026",
          "createdAt": "2026-06-13",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "June 14, 2026",
          "createdAt": "2026-06-14",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "June 16, 2026",
          "createdAt": "2026-06-16",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "June 26, 2026",
          "createdAt": "2026-06-26",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "June 27, 2026",
          "createdAt": "2026-06-27",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "June 28, 2026",
          "createdAt": "2026-06-28",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "June 30, 2026",
          "createdAt": "2026-06-30",
          "amount": 2.99,
          "developerRevShare": 2.09,
          "description": "Apple App Store - Purchase HD 3",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "July 2, 2026",
          "createdAt": "2026-07-02",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "July 5, 2026",
          "createdAt": "2026-07-05",
          "amount": 14.99,
          "developerRevShare": 10.49,
          "description": "Apple App Store - Purchase HD 15",
          "source": "Apple App Store",
          "note": null
        },
        {
          "date": "Jul 29-Aug 4",
          "createdAt": "2026-08-04",
          "amount": 1095.5,
          "developerRevShare": 766.85,
          "description": "Apple App Store - App Store Connect aggregate gross sales",
          "source": "Apple App Store",
          "note": "Manual aggregate sales screenshot for Jul 29-Aug 4, 2026. Revenue-only source; transaction count is not shown and is not fabricated."
        }
      ]
    },
    "monthToDate": {
      "label": "Stripe source check: latest seven days",
      "range": "Sep 12-Sep 18, 2026",
      "purchases": 5,
      "purchaseRevenue": 104.95,
      "developerRevShare": 104.95,
      "revenuePerPurchase": 20.99,
      "payments": [
        {
          "date": "2026-09-13",
          "createdAt": "2026-09-13",
          "amount": 62.97,
          "description": "Stripe TVOD: 3 charges",
          "source": "Stripe"
        },
        {
          "date": "2026-09-14",
          "createdAt": "2026-09-14",
          "amount": 20.99,
          "description": "Stripe TVOD: 1 charges",
          "source": "Stripe"
        },
        {
          "date": "2026-09-17",
          "createdAt": "2026-09-17",
          "amount": 20.99,
          "description": "Stripe TVOD: 1 charges",
          "source": "Stripe"
        }
      ],
      "note": "Net after refunds, before Stripe fees; overlaps DotStudios."
    },
    "lastWeek": {
      "label": "Apple gross sales and total units",
      "range": "Sep 12-Sep 18, 2026",
      "period": "Sep 12-Sep 18, 2026",
      "purchases": null,
      "purchaseRevenue": 294.95,
      "developerRevShare": 206.46,
      "downloads": 85,
      "totalUnits": 85,
      "freeDownloads": null,
      "inAppUnits": null,
      "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable. Developer share is an illustrative 70% estimate, not settled proceeds.",
      "status": "fresh_manual"
    },
    "thisWeek": {
      "period": "Sep 12-Sep 18, 2026",
      "range": "Sep 12-Sep 18, 2026",
      "label": "DotStudios current-week TVOD",
      "gross": 669.66,
      "net": 669.66,
      "transactions": 32,
      "purchases": 32,
      "paidTransactions": 32,
      "knownFreshVisibleTransactions": 32,
      "purchaseRevenue": 669.66,
      "source": "DotStudios manual revenue export",
      "status": "fresh_manual",
      "note": "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
      "priorPeriod": "Sep 5-Sep 11, 2026",
      "deltaVsPriorPct": -24.89,
      "dotStudiosTvodGross": 669.66,
      "dotStudiosTvodTransactions": 32,
      "appleManualSnapshotGross": 294.95,
      "appleManualSnapshotDownloads": 85,
      "appleManualSnapshotPeriod": "Sep 12-Sep 18, 2026"
    },
    "currentCompleteWeek": {
      "period": "Sep 12-Sep 18, 2026",
      "range": "Sep 12-Sep 18, 2026",
      "label": "DotStudios current-week TVOD",
      "gross": 669.66,
      "net": 669.66,
      "transactions": 32,
      "purchases": 32,
      "paidTransactions": 32,
      "knownFreshVisibleTransactions": 32,
      "purchaseRevenue": 669.66,
      "source": "DotStudios manual revenue export",
      "status": "fresh_manual",
      "note": "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
      "priorPeriod": "Sep 5-Sep 11, 2026",
      "deltaVsPriorPct": -24.89,
      "dotStudiosTvodGross": 669.66,
      "dotStudiosTvodTransactions": 32,
      "appleManualSnapshotGross": 294.95,
      "appleManualSnapshotDownloads": 85,
      "appleManualSnapshotPeriod": "Sep 12-Sep 18, 2026"
    },
    "weekToDate": {
      "period": "Sep 12-Sep 18, 2026",
      "range": "Sep 12-Sep 18, 2026",
      "label": "DotStudios current-week TVOD",
      "gross": 669.66,
      "net": 669.66,
      "transactions": 32,
      "purchases": 32,
      "paidTransactions": 32,
      "knownFreshVisibleTransactions": 32,
      "purchaseRevenue": 669.66,
      "source": "DotStudios manual revenue export",
      "status": "fresh_manual",
      "note": "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
      "priorPeriod": "Sep 5-Sep 11, 2026",
      "deltaVsPriorPct": -24.89,
      "dotStudiosTvodGross": 669.66,
      "dotStudiosTvodTransactions": 32,
      "appleManualSnapshotGross": 294.95,
      "appleManualSnapshotDownloads": 85,
      "appleManualSnapshotPeriod": "Sep 12-Sep 18, 2026"
    },
    "recent12Days": {
      "label": "Stripe sales last 7 days",
      "range": "Sep 7-Sep 13, 2026",
      "purchases": 9,
      "purchaseRevenue": 188.91,
      "developerRevShare": 188.91,
      "revenuePerPurchase": 20.99,
      "payments": [
        {
          "id": "ch_3UFLpILG0Cw1zW4e1Q0D3AL5",
          "date": "Sep 13",
          "createdAt": "2026-09-13T22:24:44Z",
          "sortDate": "2026-09-13T22:24:44Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3UFLpILG0Cw1zW4e1Q0D3AL5",
          "stripePaymentIntentId": "pi_3UFLpILG0Cw1zW4e11mKQ3aW",
          "orderId": "alj-2026091322244425",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3UFLkMLG0Cw1zW4e04KF7TDk",
          "date": "Sep 13",
          "createdAt": "2026-09-13T22:19:39Z",
          "sortDate": "2026-09-13T22:19:39Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3UFLkMLG0Cw1zW4e04KF7TDk",
          "stripePaymentIntentId": "pi_3UFLkMLG0Cw1zW4e0WyJgMtO",
          "orderId": "dis-2026091322193846",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3UF7x8LG0Cw1zW4e2UQgiKKU",
          "date": "Sep 13",
          "createdAt": "2026-09-13T07:35:54Z",
          "sortDate": "2026-09-13T07:35:54Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3UF7x8LG0Cw1zW4e2UQgiKKU",
          "stripePaymentIntentId": "pi_3UF7x8LG0Cw1zW4e2e4io5ba",
          "orderId": "pob-2026091307355375",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3UEeqALG0Cw1zW4e1tsweP4X",
          "date": "Sep 11",
          "createdAt": "2026-09-12T00:30:47Z",
          "sortDate": "2026-09-12T00:30:47Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3UEeqALG0Cw1zW4e1tsweP4X",
          "stripePaymentIntentId": "pi_3UEeqALG0Cw1zW4e1eQsgKHx",
          "orderId": "rar-2026091200304640",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3UEeLZLG0Cw1zW4e0dpgHwTL",
          "date": "Sep 11",
          "createdAt": "2026-09-11T23:59:09Z",
          "sortDate": "2026-09-11T23:59:09Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3UEeLZLG0Cw1zW4e0dpgHwTL",
          "stripePaymentIntentId": "pi_3UEeLZLG0Cw1zW4e0tEXX7fx",
          "orderId": "stm-2026091123590938",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3UDv6eLG0Cw1zW4e2hSmgDaj",
          "date": "Sep 9",
          "createdAt": "2026-09-09T23:40:45Z",
          "sortDate": "2026-09-09T23:40:45Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3UDv6eLG0Cw1zW4e2hSmgDaj",
          "stripePaymentIntentId": "pi_3UDv6eLG0Cw1zW4e2Aa9n0Hf",
          "orderId": "paj-2026090923404459",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3UDTSgLG0Cw1zW4e2UOH9Zir",
          "date": "Sep 8",
          "createdAt": "2026-09-08T18:09:39Z",
          "sortDate": "2026-09-08T18:09:39Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3UDTSgLG0Cw1zW4e2UOH9Zir",
          "stripePaymentIntentId": "pi_3UDTSgLG0Cw1zW4e2iDr388F",
          "orderId": "bem-2026090818093873",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3UDH2NLG0Cw1zW4e20RBnu27",
          "date": "Sep 7",
          "createdAt": "2026-09-08T04:53:40Z",
          "sortDate": "2026-09-08T04:53:40Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3UDH2NLG0Cw1zW4e20RBnu27",
          "stripePaymentIntentId": "pi_3UDH2NLG0Cw1zW4e20f5Jv39",
          "orderId": "lio-2026090804533971",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3UDCjpLG0Cw1zW4e1TjylHRu",
          "date": "Sep 7",
          "createdAt": "2026-09-08T00:18:14Z",
          "sortDate": "2026-09-08T00:18:14Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3UDCjpLG0Cw1zW4e1TjylHRu",
          "stripePaymentIntentId": "pi_3UDCjpLG0Cw1zW4e1ihLeYwa",
          "orderId": "hoc-2026090800181362",
          "contentId": null,
          "contentTitle": null
        }
      ],
      "status": "fresh",
      "note": "Stripe connector charge list for the reporting week; overlaps the DotStudios TVOD export."
    },
    "lifetimeObserved": {
      "label": "Sales this year",
      "range": "Jan 1-Aug 3, 2026",
      "purchases": 140,
      "purchaseRevenue": 3588.59,
      "developerRevShare": 1307.54,
      "revenuePerPurchase": 25.63,
      "payments": [
        {
          "id": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt",
          "date": "Aug 1",
          "createdAt": "2026-08-02T02:59:21Z",
          "sortDate": "2026-08-02T02:59:21Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzpcTLG0Cw1zW4e2wDuwmDt",
          "stripePaymentIntentId": "pi_3TzpcTLG0Cw1zW4e2ONdvaRi",
          "orderId": "itr-2026080202592092",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3TzmDeLG0Cw1zW4e1hSM76p5",
          "date": "Aug 1",
          "createdAt": "2026-08-01T23:21:31Z",
          "sortDate": "2026-08-01T23:21:31Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzmDeLG0Cw1zW4e1hSM76p5",
          "stripePaymentIntentId": "pi_3TzmDeLG0Cw1zW4e1DjlcMXo",
          "orderId": "baa-2026080123213055",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3TzUsaLG0Cw1zW4e1E2iPagJ",
          "date": "Jul 31",
          "createdAt": "2026-08-01T04:50:37Z",
          "sortDate": "2026-08-01T04:50:37Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzUsaLG0Cw1zW4e1E2iPagJ",
          "stripePaymentIntentId": "pi_3TzUsaLG0Cw1zW4e1tfWkCsi",
          "orderId": "sas-2026080104503658",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3TzUOVLG0Cw1zW4e1cL58jI6",
          "date": "Jul 31",
          "createdAt": "2026-08-01T04:19:31Z",
          "sortDate": "2026-08-01T04:19:31Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzUOVLG0Cw1zW4e1cL58jI6",
          "stripePaymentIntentId": "pi_3TzUOVLG0Cw1zW4e1RwTB9hv",
          "orderId": "wew-2026080104193090",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3TzUKMLG0Cw1zW4e2kKfWreG",
          "date": "Jul 31",
          "createdAt": "2026-08-01T04:15:14Z",
          "sortDate": "2026-08-01T04:15:14Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzUKMLG0Cw1zW4e2kKfWreG",
          "stripePaymentIntentId": "pi_3TzUKMLG0Cw1zW4e2H29Ygkt",
          "orderId": "pyy-2026080104151396",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3TzS18LG0Cw1zW4e0gJjIT5t",
          "date": "Jul 31",
          "createdAt": "2026-08-01T01:47:14Z",
          "sortDate": "2026-08-01T01:47:14Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzS18LG0Cw1zW4e0gJjIT5t",
          "stripePaymentIntentId": "pi_3TzS18LG0Cw1zW4e0ZkxzNE3",
          "orderId": "gol-2026080101471383",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3TzR9FLG0Cw1zW4e1mPMQLV7",
          "date": "Jul 31",
          "createdAt": "2026-08-01T00:51:33Z",
          "sortDate": "2026-08-01T00:51:33Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzR9FLG0Cw1zW4e1mPMQLV7",
          "stripePaymentIntentId": "pi_3TzR9FLG0Cw1zW4e1C46ZvYS",
          "orderId": "bag-2026080100513319",
          "contentId": null,
          "contentTitle": null
        },
        {
          "id": "ch_3TzQHKLG0Cw1zW4e0m2DJ4QH",
          "date": "Jul 31",
          "createdAt": "2026-07-31T23:55:50Z",
          "sortDate": "2026-07-31T23:55:50Z",
          "amount": 20.99,
          "developerRevShare": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe",
          "stripeChargeId": "ch_3TzQHKLG0Cw1zW4e0m2DJ4QH",
          "stripePaymentIntentId": "pi_3TzQHKLG0Cw1zW4e0PP1u8tL",
          "orderId": "brr-2026073123554977",
          "contentId": null,
          "contentTitle": null
        }
      ]
    },
    "mix": [
      {
        "source": "Stripe",
        "purchases": 86,
        "purchaseRevenue": 1798.13,
        "developerRevShare": 1798.13,
        "detail": "Stripe connector refreshed Aug 6, 2026. The current pull returned 86 valid 2026 paid/captured/succeeded/non-refunded charges totaling $1,798.13. Failed/uncaptured Stripe attempts are excluded."
      },
      {
        "source": "Roku",
        "purchases": 32,
        "purchaseRevenue": 710.68,
        "developerRevShare": 568.48,
        "detail": "Roku-visible sales come from the latest emailed Roku Sales Activity Report PDF. The freshest available Roku sales email was generated Aug 3 and covers sales through Aug 2; values are preserved and clearly separated from Stripe/Apple."
      },
      {
        "source": "Apple App Store",
        "purchases": 16,
        "purchaseRevenue": 1353.34,
        "developerRevShare": 947.29,
        "detail": "Apple App Store in-app purchase snapshots are manually entered from App Store Connect screenshots. Gross customer sales are shown; estimated net assumes Apple keeps 30%. The Aug 5/6 snapshot supersedes overlapping older aggregate snapshots with Jul 29-Aug 4 gross sales of $1,095.50 and 434 downloads. The latest Apple sales snapshot is revenue-only, so no transaction count is fabricated."
      }
    ],
    "recentPayments": [
      {
        "date": "2026-09-13",
        "createdAt": "2026-09-13",
        "amount": 62.97,
        "description": "Stripe TVOD: 3 charges",
        "source": "Stripe"
      },
      {
        "date": "2026-09-14",
        "createdAt": "2026-09-14",
        "amount": 20.99,
        "description": "Stripe TVOD: 1 charges",
        "source": "Stripe"
      },
      {
        "date": "2026-09-17",
        "createdAt": "2026-09-17",
        "amount": 20.99,
        "description": "Stripe TVOD: 1 charges",
        "source": "Stripe"
      }
    ],
    "dailyTrend": [
      {
        "date": "Apr 13",
        "rawDate": "20260413",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Apr 14",
        "rawDate": "20260414",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
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
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Apr 17",
        "rawDate": "20260417",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
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
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
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
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
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
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
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
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "May 13",
        "rawDate": "20260513",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "May 14",
        "rawDate": "20260514",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
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
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
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
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
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
        "date": "Jun 1",
        "rawDate": "20260601",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 2",
        "rawDate": "20260602",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 3",
        "rawDate": "20260603",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 4",
        "rawDate": "20260604",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 5",
        "rawDate": "20260605",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 6",
        "rawDate": "20260606",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 7",
        "rawDate": "20260607",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 8",
        "rawDate": "20260608",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 9",
        "rawDate": "20260609",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 10",
        "rawDate": "20260610",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 11",
        "rawDate": "20260611",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 12",
        "rawDate": "20260612",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 13",
        "rawDate": "20260613",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 14",
        "rawDate": "20260614",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 15",
        "rawDate": "20260615",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 16",
        "rawDate": "20260616",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 17",
        "rawDate": "20260617",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 18",
        "rawDate": "20260618",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 19",
        "rawDate": "20260619",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 20",
        "rawDate": "20260620",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 21",
        "rawDate": "20260621",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 22",
        "rawDate": "20260622",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 23",
        "rawDate": "20260623",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 24",
        "rawDate": "20260624",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 25",
        "rawDate": "20260625",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 26",
        "rawDate": "20260626",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 27",
        "rawDate": "20260627",
        "purchases": 1,
        "purchaseRevenue": 14.99,
        "developerRevShare": 11.99
      },
      {
        "date": "Jun 28",
        "rawDate": "20260628",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 29",
        "rawDate": "20260629",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jun 30",
        "rawDate": "20260630",
        "purchases": 1,
        "purchaseRevenue": 54.99,
        "developerRevShare": 43.99
      },
      {
        "date": "Jul 1",
        "rawDate": "20260701",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 2",
        "rawDate": "20260702",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 3",
        "rawDate": "20260703",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 4",
        "rawDate": "20260704",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 5",
        "rawDate": "20260705",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 6",
        "rawDate": "20260706",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 7",
        "rawDate": "20260707",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 8",
        "rawDate": "20260708",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 9",
        "rawDate": "20260709",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 10",
        "rawDate": "20260710",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 11",
        "rawDate": "20260711",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 12",
        "rawDate": "20260712",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 13",
        "rawDate": "20260713",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 14",
        "rawDate": "20260714",
        "purchases": 2,
        "purchaseRevenue": 22.98,
        "developerRevShare": 18.38
      },
      {
        "date": "Jul 15",
        "rawDate": "20260715",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 16",
        "rawDate": "20260716",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 17",
        "rawDate": "20260717",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 18",
        "rawDate": "20260718",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 19",
        "rawDate": "20260719",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 20",
        "rawDate": "20260720",
        "purchases": 1,
        "purchaseRevenue": 19.99,
        "developerRevShare": 15.99
      },
      {
        "date": "Jul 21",
        "rawDate": "20260721",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 22",
        "rawDate": "20260722",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 23",
        "rawDate": "20260723",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 24",
        "rawDate": "20260724",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 25",
        "rawDate": "20260725",
        "purchases": 1,
        "purchaseRevenue": 19.99,
        "developerRevShare": 15.99
      },
      {
        "date": "Jul 26",
        "rawDate": "20260726",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 27",
        "rawDate": "20260727",
        "purchases": 4,
        "purchaseRevenue": 76.96,
        "developerRevShare": 68.76
      },
      {
        "date": "Jul 28",
        "rawDate": "20260728",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Jul 29",
        "rawDate": "20260729",
        "purchases": 1,
        "purchaseRevenue": 73.49,
        "developerRevShare": 57.74
      },
      {
        "date": "Jul 30",
        "rawDate": "20260730",
        "purchases": 27,
        "purchaseRevenue": 875.43,
        "developerRevShare": 753.42
      },
      {
        "date": "Jul 31",
        "rawDate": "20260731",
        "purchases": 21,
        "purchaseRevenue": 607.09,
        "developerRevShare": 514.4
      },
      {
        "date": "Aug 1",
        "rawDate": "20260801",
        "purchases": 7,
        "purchaseRevenue": 306.93,
        "developerRevShare": 237.83
      },
      {
        "date": "Aug 2",
        "rawDate": "20260802",
        "purchases": 7,
        "purchaseRevenue": 190.02,
        "developerRevShare": 172.59
      },
      {
        "date": "Aug 3",
        "rawDate": "20260803",
        "purchases": 28,
        "purchaseRevenue": 867.02,
        "developerRevShare": 783.23
      },
      {
        "date": "Aug 4",
        "rawDate": "20260804",
        "purchases": 10,
        "purchaseRevenue": 327.5,
        "developerRevShare": 292.22
      },
      {
        "date": "Aug 5",
        "rawDate": "20260805",
        "purchases": 6,
        "purchaseRevenue": 125.94,
        "developerRevShare": 125.94
      },
      {
        "date": "Aug 6",
        "rawDate": "20260806",
        "purchases": 1,
        "purchaseRevenue": 20.99,
        "developerRevShare": 20.99
      },
      {
        "date": "Aug 7",
        "rawDate": "20260807",
        "purchases": 5,
        "purchaseRevenue": 98.95,
        "developerRevShare": 98.95
      },
      {
        "date": "Aug 8",
        "rawDate": "20260808",
        "purchases": 2,
        "purchaseRevenue": 40.97,
        "developerRevShare": 40.97
      },
      {
        "date": "Aug 9",
        "rawDate": "20260809",
        "purchases": 5,
        "purchaseRevenue": 138.95,
        "developerRevShare": 138.95
      },
      {
        "date": "Aug 10",
        "rawDate": "20260810",
        "purchases": 13,
        "purchaseRevenue": 270.85,
        "developerRevShare": 270.85
      },
      {
        "date": "Aug 11",
        "rawDate": "20260811",
        "purchases": 1,
        "purchaseRevenue": 19.98,
        "developerRevShare": 19.98
      },
      {
        "date": "Aug 12",
        "rawDate": "20260812",
        "purchases": 4,
        "purchaseRevenue": 83.96,
        "developerRevShare": 83.96
      },
      {
        "date": "Aug 13",
        "rawDate": "20260813",
        "purchases": 5,
        "purchaseRevenue": 104.95,
        "developerRevShare": 104.95
      },
      {
        "date": "Aug 14",
        "rawDate": "20260814",
        "purchases": 4,
        "purchaseRevenue": 83.96,
        "developerRevShare": 83.96
      },
      {
        "date": "Aug 15",
        "rawDate": "20260815",
        "purchases": 4,
        "purchaseRevenue": 83.96,
        "developerRevShare": 83.96
      },
      {
        "date": "Aug 16",
        "rawDate": "20260816",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "Aug 17",
        "rawDate": "20260817",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "Aug 18",
        "rawDate": "20260818",
        "purchases": 4,
        "purchaseRevenue": 83.96,
        "developerRevShare": 83.96
      },
      {
        "date": "Aug 19",
        "rawDate": "20260819",
        "purchases": 4,
        "purchaseRevenue": 83.96,
        "developerRevShare": 83.96
      },
      {
        "date": "Aug 20",
        "rawDate": "20260820",
        "purchases": 1,
        "purchaseRevenue": 20.99,
        "developerRevShare": 20.99
      },
      {
        "date": "Aug 21",
        "rawDate": "20260821",
        "purchases": 4,
        "purchaseRevenue": 83.96,
        "developerRevShare": 83.96
      },
      {
        "date": "Aug 22",
        "rawDate": "20260822",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "Aug 23",
        "rawDate": "20260823",
        "purchases": 7,
        "purchaseRevenue": 145.92,
        "developerRevShare": 145.92
      },
      {
        "date": "Aug 24",
        "rawDate": "20260824",
        "purchases": 2,
        "purchaseRevenue": 41.98,
        "developerRevShare": 41.98
      },
      {
        "date": "Aug 25",
        "rawDate": "20260825",
        "purchases": 7,
        "purchaseRevenue": 145.92,
        "developerRevShare": 145.92
      },
      {
        "date": "Aug 26",
        "rawDate": "20260826",
        "purchases": 1,
        "purchaseRevenue": 20.99,
        "developerRevShare": 20.99
      },
      {
        "date": "Aug 27",
        "rawDate": "20260827",
        "purchases": 1,
        "purchaseRevenue": 20.99,
        "developerRevShare": 20.99
      },
      {
        "date": "Aug 28",
        "rawDate": "20260828",
        "purchases": 5,
        "purchaseRevenue": 104.95,
        "developerRevShare": 104.95
      },
      {
        "date": "Aug 29",
        "rawDate": "20260829",
        "purchases": 2,
        "purchaseRevenue": 41.98,
        "developerRevShare": 41.98
      },
      {
        "date": "Aug 30",
        "rawDate": "20260830",
        "purchases": 2,
        "purchaseRevenue": 41.98,
        "developerRevShare": 41.98
      },
      {
        "date": "Aug 31",
        "rawDate": "20260831",
        "purchases": 4,
        "purchaseRevenue": 83.96,
        "developerRevShare": 83.96
      },
      {
        "date": "Sep 1",
        "rawDate": "20260901",
        "purchases": 1,
        "purchaseRevenue": 20.99,
        "developerRevShare": 20.99
      },
      {
        "date": "Sep 2",
        "rawDate": "20260902",
        "purchases": 2,
        "purchaseRevenue": 41.98,
        "developerRevShare": 20.99
      },
      {
        "date": "Sep 3",
        "rawDate": "20260903",
        "purchases": 4,
        "purchaseRevenue": 83.96,
        "developerRevShare": 83.96
      },
      {
        "date": "Sep 4",
        "rawDate": "20260904",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0
      },
      {
        "date": "Sep 5",
        "rawDate": "20260905",
        "purchases": 3,
        "purchaseRevenue": 62.97,
        "developerRevShare": 62.97
      },
      {
        "date": "Sep 6",
        "rawDate": "20260906",
        "purchases": 1,
        "purchaseRevenue": 20.99,
        "developerRevShare": 20.99
      },
      {
        "date": "Sep 7",
        "rawDate": "20260907",
        "purchases": 2,
        "purchaseRevenue": 41.98,
        "developerRevShare": 41.98
      },
      {
        "date": "Sep 8",
        "rawDate": "20260908",
        "purchases": 1,
        "purchaseRevenue": 20.99,
        "developerRevShare": 20.99
      },
      {
        "date": "Sep 9",
        "rawDate": "20260909",
        "purchases": 1,
        "purchaseRevenue": 20.99,
        "developerRevShare": 20.99
      },
      {
        "date": "Sep 10",
        "rawDate": "20260910",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Sep 11",
        "rawDate": "20260911",
        "purchases": 2,
        "purchaseRevenue": 41.98,
        "developerRevShare": 41.98
      },
      {
        "date": "Sep 12",
        "rawDate": "20260912",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Sep 13",
        "rawDate": "20260913",
        "purchases": 3,
        "purchaseRevenue": 62.97,
        "developerRevShare": 62.97
      },
      {
        "date": "Sep 14",
        "rawDate": "20260914",
        "purchases": 1,
        "purchaseRevenue": 20.99,
        "developerRevShare": 20.99
      },
      {
        "date": "Sep 15",
        "rawDate": "20260915",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Sep 16",
        "rawDate": "20260916",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Sep 17",
        "rawDate": "20260917",
        "purchases": 1,
        "purchaseRevenue": 20.99,
        "developerRevShare": 20.99
      },
      {
        "date": "Sep 18",
        "rawDate": "20260918",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      }
    ],
    "note": "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
    "latestSevenDayVisibleSales": {
      "period": "Sep 12-Sep 18, 2026",
      "range": "Sep 12-Sep 18, 2026",
      "label": "DotStudios current-week TVOD",
      "gross": 669.66,
      "net": 669.66,
      "transactions": 32,
      "purchases": 32,
      "paidTransactions": 32,
      "knownFreshVisibleTransactions": 32,
      "purchaseRevenue": 669.66,
      "source": "DotStudios manual revenue export",
      "status": "fresh_manual",
      "note": "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
      "priorPeriod": "Sep 5-Sep 11, 2026",
      "deltaVsPriorPct": -24.89,
      "dotStudiosTvodGross": 669.66,
      "dotStudiosTvodTransactions": 32,
      "appleManualSnapshotGross": 294.95,
      "appleManualSnapshotDownloads": 85,
      "appleManualSnapshotPeriod": "Sep 12-Sep 18, 2026"
    },
    "dotStudiosTvod": {
      "period": "Sep 12-Sep 18, 2026",
      "gross": 669.66,
      "net": 669.66,
      "transactions": 32,
      "source": "DotStudios manual revenue export",
      "status": "fresh_manual",
      "note": "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
      "priorPeriod": "Sep 5-Sep 11, 2026",
      "deltaVsPriorPct": -24.89,
      "range": "Sep 12-Sep 18, 2026",
      "label": "DotStudios current-week TVOD",
      "purchases": 32,
      "paidTransactions": 32,
      "knownFreshVisibleTransactions": 32,
      "purchaseRevenue": 669.66,
      "dotStudiosTvodGross": 669.66,
      "dotStudiosTvodTransactions": 32,
      "appleManualSnapshotGross": 294.95,
      "appleManualSnapshotDownloads": 85,
      "appleManualSnapshotPeriod": "Sep 12-Sep 18, 2026"
    },
    "appleManual": {
      "period": "Sep 12-Sep 18, 2026",
      "salesGross": 294.95,
      "downloads": 85,
      "status": "fresh_manual",
      "source": "Manual Apple App Store Connect screenshots",
      "freeDownloads": null,
      "inAppUnits": null,
      "note": "Latest App Store Connect snapshot; gross sales and total units are reported, but the free / in-app split and transaction count are not provided this week, so no purchase count or split is fabricated. Units are compared with the prior week's total units."
    },
    "visiblePlatformSalesDefinition": "DotStudios current-week TVOD is the broadest current visible sales view. Stripe, Roku, and Apple are platform/source checks and overlap DotStudios rows; Google Play and other channels may still be incomplete.",
    "reconciliationNote": "Stripe reports 5 charges/$104.95 versus DotStudios web 6/$125.94; a $20.99 difference remains unresolved. Apple gross $294.95 differs from DotStudios apple $291.84 by $3.11. Timing, currency and classification require reconciliation. Roku is stale. Do not add these overlapping sources.",
    "stripeConnectorCheck": {
      "period": "Sep 12-Sep 18, 2026",
      "gross": 104.95,
      "transactions": 5,
      "refunds": 0.0,
      "net": 104.95,
      "source": "Stripe connector charge list",
      "status": "fresh_charge_list",
      "hasMore": false,
      "daily": [
        {
          "date": "2026-09-13",
          "transactions": 3,
          "gross": 62.97
        },
        {
          "date": "2026-09-14",
          "transactions": 1,
          "gross": 20.99
        },
        {
          "date": "2026-09-17",
          "transactions": 1,
          "gross": 20.99
        }
      ],
      "priorPeriod": {
        "period": "Sep 5-Sep 11, 2026",
        "gross": 209.9,
        "transactions": 10
      },
      "note": "Stripe charge-list pull is fresh (paid + succeeded charges, Pacific dates). Overlaps DotStudios device=web rows; not added to DotStudios totals."
    },
    "rokuSalesActivity": {
      "period": "Sep 7-Sep 13, 2026",
      "reportPeriod": "Roku Sales Activity report generated September 14, 2026 at 6:58 AM PDT; report covers the last 7 weeks, with Sep 7-Sep 13, 2026 rows (by transaction date) summarized here.",
      "source": "Roku Sales Activity email from bdp_noreply@data.roku.com",
      "emailDate": "2026-09-14T13:58:17+00:00",
      "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwDvKLV_nde7SYUl0H8b5z1dAAPKm0PlAADvKLV_nde7SYUl0H8b5z1dAAP3FDbEAAA=",
      "status": "stale_preserved",
      "transactions": 9,
      "gross": 188.91,
      "developerRevenue": 151.11,
      "daily": [
        {
          "date": "2026-09-07",
          "product": "Purchase Bundle 21",
          "transactions": 1,
          "gross": 20.99,
          "developerRevenue": 16.79
        },
        {
          "date": "2026-09-08",
          "product": "Purchase Bundle 21",
          "transactions": 1,
          "gross": 20.99,
          "developerRevenue": 16.79
        },
        {
          "date": "2026-09-09",
          "product": "Purchase Bundle 21",
          "transactions": 3,
          "gross": 62.97,
          "developerRevenue": 50.37
        },
        {
          "date": "2026-09-10",
          "product": "Purchase Bundle 21",
          "transactions": 2,
          "gross": 41.98,
          "developerRevenue": 33.58
        },
        {
          "date": "2026-09-11",
          "product": "Purchase Bundle 21",
          "transactions": 2,
          "gross": 41.98,
          "developerRevenue": 33.58
        }
      ],
      "priorPeriod": {
        "period": "Aug 31-Sep 6, 2026",
        "transactions": 9,
        "gross": 222.91,
        "developerRevenue": 178.31
      },
      "deltaVsPriorGrossPct": -15.25,
      "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals.",
      "trcExclusionNote": "Roku TRC emails are for the separate Roku live-channel surface outside the ElectricNOW app and are excluded from app/platform usage.",
      "sourceDetail": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals.",
      "staleNote": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
    }
  },
  "contentUsage": {
    "period": "Sep 12-Sep 18, 2026",
    "live": {
      "total": {
        "screenPageViews": 1829,
        "activeUsers": 514,
        "eventCount": 13392
      },
      "platforms": [
        {
          "platform": "iOS",
          "screen": "Live",
          "screenPageViews": 746,
          "activeUsers": 240,
          "eventCount": 7401
        },
        {
          "platform": "Android",
          "screen": "Live",
          "screenPageViews": 618,
          "activeUsers": 209,
          "eventCount": 5526
        },
        {
          "platform": "web",
          "screen": "Live",
          "screenPageViews": 465,
          "activeUsers": 56,
          "eventCount": 465
        }
      ],
      "playback": {
        "play": 506,
        "video_start": 3032,
        "end_playback": 11
      },
      "playbackRows": [
        {
          "event": "video_start",
          "label": "Video starts",
          "eventCount": 3032
        },
        {
          "event": "play",
          "label": "Play events",
          "eventCount": 506
        },
        {
          "event": "pause",
          "label": "Pauses",
          "eventCount": 16
        },
        {
          "event": "resume",
          "label": "Resumes",
          "eventCount": 15
        },
        {
          "event": "end_playback",
          "label": "Playback ended",
          "eventCount": 11
        },
        {
          "event": "video_complete",
          "label": "Video completes",
          "eventCount": 6
        },
        {
          "event": "playback_error",
          "label": "Playback errors",
          "eventCount": 136
        }
      ],
      "topChannels": [
        {
          "title": "ElectricNOW",
          "plays": 3015,
          "activeUsers": 437,
          "priorPlays": 3144,
          "priorActiveUsers": 510,
          "rosterStatus": "confirmed",
          "rank": 1
        },
        {
          "title": "ElectricNOW en Español",
          "plays": 143,
          "activeUsers": 34,
          "priorPlays": 120,
          "priorActiveUsers": 42,
          "rosterStatus": "confirmed",
          "rank": 2
        },
        {
          "title": "Horror Asylum",
          "plays": 51,
          "activeUsers": 16,
          "priorPlays": 32,
          "priorActiveUsers": 14,
          "rosterStatus": "confirmed",
          "rank": 3
        },
        {
          "title": "Kung Fu Movies",
          "plays": 34,
          "activeUsers": 9,
          "priorPlays": 36,
          "priorActiveUsers": 14,
          "rosterStatus": "confirmed",
          "rank": 4
        },
        {
          "title": "DARK MATTER TV",
          "plays": 34,
          "activeUsers": 7,
          "priorPlays": 30,
          "priorActiveUsers": 13,
          "rosterStatus": "confirmed",
          "rank": 5
        },
        {
          "title": "Stoner TV Network",
          "plays": 32,
          "activeUsers": 12,
          "priorPlays": 20,
          "priorActiveUsers": 10,
          "rosterStatus": "confirmed",
          "rank": 6
        },
        {
          "title": "Grindhouse Gold",
          "plays": 30,
          "activeUsers": 9,
          "priorPlays": 30,
          "priorActiveUsers": 10,
          "rosterStatus": "detected",
          "rank": 7
        },
        {
          "title": "Cartoon Classics",
          "plays": 27,
          "activeUsers": 9,
          "priorPlays": 29,
          "priorActiveUsers": 15,
          "rosterStatus": "detected",
          "rank": 8
        },
        {
          "title": "ToonOvation",
          "plays": 26,
          "activeUsers": 15,
          "priorPlays": 40,
          "priorActiveUsers": 17,
          "rosterStatus": "confirmed",
          "rank": 9
        },
        {
          "title": "IndieBox",
          "plays": 25,
          "activeUsers": 5,
          "priorPlays": 12,
          "priorActiveUsers": 6,
          "rosterStatus": "detected",
          "rank": 10
        },
        {
          "title": "Daily Flash",
          "plays": 23,
          "activeUsers": 13,
          "priorPlays": 16,
          "priorActiveUsers": 10,
          "rosterStatus": "detected",
          "rank": 11
        },
        {
          "title": "Ghost Dimension",
          "plays": 23,
          "activeUsers": 10,
          "priorPlays": 21,
          "priorActiveUsers": 17,
          "rosterStatus": "detected",
          "rank": 12
        },
        {
          "title": "AMPD TV",
          "plays": 21,
          "activeUsers": 9,
          "priorPlays": 12,
          "priorActiveUsers": 6,
          "rosterStatus": "confirmed",
          "rank": 13
        },
        {
          "title": "a-z Classic Flix",
          "plays": 18,
          "activeUsers": 10,
          "priorPlays": 30,
          "priorActiveUsers": 10,
          "rosterStatus": "detected",
          "rank": 14
        },
        {
          "title": "CinePast",
          "plays": 16,
          "activeUsers": 7,
          "priorPlays": 14,
          "priorActiveUsers": 6,
          "rosterStatus": "confirmed",
          "rank": 15
        },
        {
          "title": "Hollywood Classic Movies",
          "plays": 15,
          "activeUsers": 8,
          "priorPlays": 18,
          "priorActiveUsers": 8,
          "rosterStatus": "confirmed",
          "rank": 16
        },
        {
          "title": "spot on news",
          "plays": 15,
          "activeUsers": 7,
          "priorPlays": 24,
          "priorActiveUsers": 13,
          "rosterStatus": "confirmed",
          "rank": 17
        },
        {
          "title": "Colorized.TV",
          "plays": 13,
          "activeUsers": 6,
          "priorPlays": 10,
          "priorActiveUsers": 6,
          "rosterStatus": "confirmed",
          "rank": 18
        },
        {
          "title": "Urban Action Channel",
          "plays": 13,
          "activeUsers": 6,
          "priorPlays": 6,
          "priorActiveUsers": 2,
          "rosterStatus": "detected",
          "rank": 19
        },
        {
          "title": "The Family TV Channel",
          "plays": 11,
          "activeUsers": 7,
          "priorPlays": 6,
          "priorActiveUsers": 4,
          "rosterStatus": "detected",
          "rank": 20
        },
        {
          "title": "a-z Best Classic TV",
          "plays": 10,
          "activeUsers": 4,
          "priorPlays": 5,
          "priorActiveUsers": 5,
          "rosterStatus": "detected",
          "rank": 21
        },
        {
          "title": "4ACETV",
          "plays": 9,
          "activeUsers": 5,
          "priorPlays": 2,
          "priorActiveUsers": 1,
          "rosterStatus": "detected",
          "rank": 22
        },
        {
          "title": "Fitness Rewind by Collage Video",
          "plays": 9,
          "activeUsers": 4,
          "priorPlays": 2,
          "priorActiveUsers": 2,
          "rosterStatus": "detected",
          "rank": 23
        },
        {
          "title": "4ACETV CLASSIC HITS",
          "plays": 8,
          "activeUsers": 4,
          "priorPlays": 8,
          "priorActiveUsers": 6,
          "rosterStatus": "detected",
          "rank": 24
        },
        {
          "title": "Americana Television",
          "plays": 7,
          "activeUsers": 5,
          "priorPlays": 1,
          "priorActiveUsers": 1,
          "rosterStatus": "detected",
          "rank": 25
        },
        {
          "title": "Box Cinema",
          "plays": 7,
          "activeUsers": 5,
          "priorPlays": 5,
          "priorActiveUsers": 4,
          "rosterStatus": "detected",
          "rank": 26
        },
        {
          "title": "Fancy A Movie",
          "plays": 7,
          "activeUsers": 5,
          "priorPlays": 13,
          "priorActiveUsers": 6,
          "rosterStatus": "detected",
          "rank": 27
        },
        {
          "title": "Comercio TV",
          "plays": 6,
          "activeUsers": 4,
          "priorPlays": null,
          "priorActiveUsers": null,
          "rosterStatus": "detected",
          "rank": 28
        },
        {
          "title": "FightTVPlus",
          "plays": 6,
          "activeUsers": 4,
          "priorPlays": 2,
          "priorActiveUsers": 2,
          "rosterStatus": "detected",
          "rank": 29
        },
        {
          "title": "MomCave",
          "plays": 6,
          "activeUsers": 4,
          "priorPlays": 3,
          "priorActiveUsers": 2,
          "rosterStatus": "detected",
          "rank": 30
        },
        {
          "title": "AMusic Channel",
          "plays": 6,
          "activeUsers": 3,
          "priorPlays": 3,
          "priorActiveUsers": 2,
          "rosterStatus": "detected",
          "rank": 31
        },
        {
          "title": "BayView Documentaries",
          "plays": 6,
          "activeUsers": 3,
          "priorPlays": 5,
          "priorActiveUsers": 3,
          "rosterStatus": "detected",
          "rank": 32
        },
        {
          "title": "HIP HOP TV",
          "plays": 6,
          "activeUsers": 2,
          "priorPlays": 1,
          "priorActiveUsers": 1,
          "rosterStatus": "detected",
          "rank": 33
        },
        {
          "title": "Historias de Corazón",
          "plays": 5,
          "activeUsers": 4,
          "priorPlays": 3,
          "priorActiveUsers": 2,
          "rosterStatus": "detected",
          "rank": 34
        },
        {
          "title": "Old West TV",
          "plays": 5,
          "activeUsers": 3,
          "priorPlays": 7,
          "priorActiveUsers": 5,
          "rosterStatus": "detected",
          "rank": 35
        },
        {
          "title": "Rock Solid Wrestling TV",
          "plays": 5,
          "activeUsers": 3,
          "priorPlays": null,
          "priorActiveUsers": null,
          "rosterStatus": "detected",
          "rank": 36
        },
        {
          "title": "Wrestling Spotlight",
          "plays": 5,
          "activeUsers": 3,
          "priorPlays": 3,
          "priorActiveUsers": 3,
          "rosterStatus": "detected",
          "rank": 37
        },
        {
          "title": "MMA Futures",
          "plays": 4,
          "activeUsers": 3,
          "priorPlays": 1,
          "priorActiveUsers": 1,
          "rosterStatus": "detected",
          "rank": 38
        },
        {
          "title": "Viajar TV",
          "plays": 4,
          "activeUsers": 3,
          "priorPlays": null,
          "priorActiveUsers": null,
          "rosterStatus": "detected",
          "rank": 39
        },
        {
          "title": "BEST (Black Enterprise Streaming Television)",
          "plays": 4,
          "activeUsers": 2,
          "priorPlays": null,
          "priorActiveUsers": null,
          "rosterStatus": "detected",
          "rank": 40
        },
        {
          "title": "Box Gamers",
          "plays": 4,
          "activeUsers": 2,
          "priorPlays": 1,
          "priorActiveUsers": 0,
          "rosterStatus": "detected",
          "rank": 41
        },
        {
          "title": "Cowboy Classics",
          "plays": 4,
          "activeUsers": 2,
          "priorPlays": 6,
          "priorActiveUsers": 5,
          "rosterStatus": "detected",
          "rank": 42
        },
        {
          "title": "HITS MEXICANOS",
          "plays": 4,
          "activeUsers": 2,
          "priorPlays": 2,
          "priorActiveUsers": 2,
          "rosterStatus": "detected",
          "rank": 43
        },
        {
          "title": "SportsTVPlus",
          "plays": 4,
          "activeUsers": 2,
          "priorPlays": 2,
          "priorActiveUsers": 2,
          "rosterStatus": "detected",
          "rank": 44
        },
        {
          "title": "The Health Channel",
          "plays": 4,
          "activeUsers": 2,
          "priorPlays": 4,
          "priorActiveUsers": 3,
          "rosterStatus": "detected",
          "rank": 45
        },
        {
          "title": "a-z Western Grit",
          "plays": 3,
          "activeUsers": 2,
          "priorPlays": 2,
          "priorActiveUsers": 1,
          "rosterStatus": "detected",
          "rank": 46
        },
        {
          "title": "Box Playlist",
          "plays": 3,
          "activeUsers": 2,
          "priorPlays": 1,
          "priorActiveUsers": 1,
          "rosterStatus": "detected",
          "rank": 47
        },
        {
          "title": "Boxing Spotlight",
          "plays": 3,
          "activeUsers": 2,
          "priorPlays": null,
          "priorActiveUsers": null,
          "rosterStatus": "detected",
          "rank": 48
        },
        {
          "title": "NOMADslow tv",
          "plays": 3,
          "activeUsers": 2,
          "priorPlays": 1,
          "priorActiveUsers": 1,
          "rosterStatus": "detected",
          "rank": 49
        },
        {
          "title": "Play Ibiza",
          "plays": 3,
          "activeUsers": 2,
          "priorPlays": 2,
          "priorActiveUsers": 2,
          "rosterStatus": "detected",
          "rank": 50
        },
        {
          "title": "POWERtube TV",
          "plays": 3,
          "activeUsers": 2,
          "priorPlays": 1,
          "priorActiveUsers": 0,
          "rosterStatus": "detected",
          "rank": 51
        },
        {
          "title": "Rockola Television",
          "plays": 2,
          "activeUsers": 2,
          "priorPlays": 1,
          "priorActiveUsers": 1,
          "rosterStatus": "detected",
          "rank": 52
        },
        {
          "title": "Nigbati TV",
          "plays": 1,
          "activeUsers": 1,
          "priorPlays": 1,
          "priorActiveUsers": 1,
          "rosterStatus": "detected",
          "rank": 53
        }
      ],
      "note": "Internal GA4 pull, property 497892271, Sep 12-Sep 18, 2026. Live usage is based on GA4 screen name 'Live' plus playback events carried on that screen. In the Live channels table, 'Play events' are GA4 video_start events grouped by channel title. Platform rows use each platform's own screen_view users and are not deduped across platforms.",
      "topChannelsCount": 53,
      "topChannelsRosterNote": "53 live/FAST channels with at least one GA4 video_start in Sep 12-Sep 18, 2026. Roster: live_channels.json (13 confirmed + 42 detected). 'Plays' are video_start events grouped by channel title; users are not additive across channels."
    },
    "onDemand": {
      "total": {
        "screenPageViews": 37,
        "activeUsers": 12,
        "eventCount": 68
      },
      "platforms": [
        {
          "platform": "Android",
          "screen": "On Demand",
          "screenPageViews": 20,
          "activeUsers": 5,
          "eventCount": 37
        },
        {
          "platform": "iOS",
          "screen": "On Demand",
          "screenPageViews": 12,
          "activeUsers": 4,
          "eventCount": 26
        },
        {
          "platform": "web",
          "screen": "On Demand",
          "screenPageViews": 5,
          "activeUsers": 3,
          "eventCount": 5
        }
      ],
      "note": "Internal GA4 pull, property 497892271, Sep 12-Sep 18, 2026. The GA4 screen literally named 'On Demand' now records almost no traffic (37 screen views this week versus 7,142 in late July), because on-demand browsing is tracked under Home Page, PDP and Player screens (see App section usage above). Treat this panel as a legacy screen-name check, not the on-demand audience; user count is a sum of platform rows, not deduped."
    },
    "status": "fresh"
  },
  "titleViewership": {
    "period": "Sep 12-Sep 18, 2026",
    "note": "Fresh Internal GA4 pull, property 497892271 for Sep 12-Sep 18, 2026. Rows are GA4 channel_title values, which the app currently sends at season/collection level, not per episode - so 'Play events' counts video_start (playback initiations) for that collection. Total viewers is the largest single-label GA4 active-user count, not a sum, because users are not additive across labels. Live/FAST channels are excluded here and reported separately under Live channel usage. The exclusion uses the shared roster in live_channels.json (13 team-confirmed channels plus 42 channels auto-detected from their GA4 event signature: video_start with no screen_view, video_progress, video_complete or ad-request events), so newly added FAST channels cannot leak into the on-demand lists. Episode-level reporting needs the app to send content_type, series_title, season, episode and video_id consistently.",
    "topVideoTitlesNote": "Fresh Internal GA4 pull, property 497892271 for Sep 12-Sep 18, 2026. Rows are GA4 channel_title values, which the app currently sends at season/collection level, not per episode - so 'Play events' counts video_start (playback initiations) for that collection. Total viewers is the largest single-label GA4 active-user count, not a sum, because users are not additive across labels. Live/FAST channels are excluded here and reported separately under Live channel usage. The exclusion uses the shared roster in live_channels.json (13 team-confirmed channels plus 42 channels auto-detected from their GA4 event signature: video_start with no screen_view, video_progress, video_complete or ad-request events), so newly added FAST channels cannot leak into the on-demand lists. Episode-level reporting needs the app to send content_type, series_title, season, episode and video_id consistently.",
    "topPrograms": [
      {
        "rank": 1,
        "program": "The Ark",
        "plays": 2272,
        "activeUsers": 135,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 5,
        "examples": [
          "The Ark",
          "The Ark - Season 1",
          "The Ark - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 2,
        "program": "The Librarians: The Next Chapter",
        "plays": 1292,
        "activeUsers": 53,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 3,
        "examples": [
          "The Librarians: The Next Chapter",
          "The Librarians: The Next Chapter (Season 1)",
          "The Librarians: The Next Chapter Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 3,
        "program": "Leverage",
        "plays": 722,
        "activeUsers": 53,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 6,
        "examples": [
          "Leverage",
          "Leverage - Season 1",
          "Leverage - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 4,
        "program": "Leverage: Redemption",
        "plays": 483,
        "activeUsers": 23,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 4,
        "examples": [
          "Leverage: Redemption",
          "Leverage: Redemption -  Season 1",
          "Leverage: Redemption - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 5,
        "program": "The Librarians",
        "plays": 406,
        "activeUsers": 32,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 5,
        "examples": [
          "The Librarians (Full Series)",
          "The Librarians - Season 1",
          "The Librarians - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 6,
        "program": "Almost Paradise",
        "plays": 197,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "Almost Paradise - Season 1",
          "Almost Paradise - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 7,
        "program": "Almost Paradise (Season 1 & 2)",
        "plays": 78,
        "activeUsers": 18,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Almost Paradise (Season 1 & 2)"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 8,
        "program": "After the Ark",
        "plays": 65,
        "activeUsers": 20,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 4,
        "examples": [
          "After the Ark",
          "After the Ark - Season 1",
          "After the Ark - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 9,
        "program": "Checking Out: The Librarians: The Next Chapter",
        "plays": 59,
        "activeUsers": 5,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Checking Out: The Librarians: The Next Chapter - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 10,
        "program": "Catch up on The Librarians: The Next Chapter",
        "plays": 50,
        "activeUsers": 13,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Catch up on The Librarians: The Next Chapter"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 11,
        "program": "The Ark Season 3 Premieres July 29 on SyFy",
        "plays": 43,
        "activeUsers": 19,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Ark Season 3 Premieres July 29 on SyFy"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 12,
        "program": "Checking Out: The Librarians Next Chapter",
        "plays": 43,
        "activeUsers": 12,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "Checking Out: The Librarians Next Chapter",
          "Checking Out: The Librarians Next Chapter - Season 1"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 13,
        "program": "The Messenger",
        "plays": 34,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "The Messenger",
          "The Messenger - Season 1"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 14,
        "program": "The Librarian: Quest for the Spear",
        "plays": 27,
        "activeUsers": 10,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarian: Quest for the Spear"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 15,
        "program": "One Big Happy Family",
        "plays": 21,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "One Big Happy Family",
          "One Big Happy Family - Trailer"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 16,
        "program": "Generation Z",
        "plays": 21,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "Generation Z",
          "Generation Z - Season 1"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 17,
        "program": "The Outpost",
        "plays": 17,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 3,
        "examples": [
          "The Outpost - Season 1",
          "The Outpost - Season 2",
          "The Outpost - Season 3"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 18,
        "program": "The Librarians: The Next Chapter Season 2 Aug 2nd on TNT",
        "plays": 16,
        "activeUsers": 12,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarians: The Next Chapter Season 2 Aug 2nd on TNT"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 19,
        "program": "Get Wyle'd Up - A Noah Wyle Collection",
        "plays": 14,
        "activeUsers": 9,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Get Wyle'd Up - A Noah Wyle Collection"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 20,
        "program": "After the Ark Season 3 - The Ark Crew Part 1",
        "plays": 14,
        "activeUsers": 8,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "After the Ark Season 3 - The Ark Crew Part 1"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 21,
        "program": "The Librarians: The Next Chapter Season 2 Teaser",
        "plays": 14,
        "activeUsers": 6,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarians: The Next Chapter Season 2 Teaser"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 22,
        "program": "The Librarian: Curse of the Judas Chalice",
        "plays": 12,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarian: Curse of the Judas Chalice"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 23,
        "program": "Flash Gordon",
        "plays": 11,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Flash Gordon"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 24,
        "program": "The Librarian: Return to King Solomon's Mines",
        "plays": 11,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "The Librarian: Return to King Solomon's Mines",
          "The Librarian: Return to King Solomon's Mines - Trailer"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 25,
        "program": "The Patrick LabyorSheaux with Patrick Labyorteaux",
        "plays": 10,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Patrick LabyorSheaux with Patrick Labyorteaux"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 26,
        "program": "Adventures of Sonic the Hedgehog",
        "plays": 9,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Adventures of Sonic the Hedgehog - Season 1"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 27,
        "program": "The Tower Job",
        "plays": 9,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Tower Job"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 28,
        "program": "The Librarians and the Crown of King Arthur in Cinemascope",
        "plays": 9,
        "activeUsers": 5,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarians and the Crown of King Arthur in Cinemascope"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 29,
        "program": "Flyboys",
        "plays": 9,
        "activeUsers": 6,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Flyboys"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 30,
        "program": "Bed & Breakfast",
        "plays": 9,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "Bed & Breakfast",
          "Bed & Breakfast - Trailer"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 31,
        "program": "Forget About It",
        "plays": 8,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Forget About It"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 32,
        "program": "Solar Impact",
        "plays": 8,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Solar Impact"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 33,
        "program": "Burt Reynolds: The Last Interview",
        "plays": 8,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Burt Reynolds: The Last Interview"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 34,
        "program": "The Triangle Mini-Series",
        "plays": 8,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Triangle Mini-Series"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 35,
        "program": "The Deal",
        "plays": 8,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Deal"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 36,
        "program": "The Librarians: The Next Chapter at SDCC 2026",
        "plays": 7,
        "activeUsers": 6,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarians: The Next Chapter at SDCC 2026"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 37,
        "program": "Dark Waters of Crime",
        "plays": 7,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Dark Waters of Crime"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 38,
        "program": "The Walk in the Woods Job",
        "plays": 7,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Walk in the Woods Job"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 39,
        "program": "The Triangle Night 1",
        "plays": 6,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Triangle Night 1"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 40,
        "program": "The Triangle Night 2",
        "plays": 6,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Triangle Night 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 41,
        "program": "After the Ark Season 3 - Production Special",
        "plays": 6,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "After the Ark Season 3 - Production Special"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 42,
        "program": "The Book of Love",
        "plays": 5,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Book of Love"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 43,
        "program": "Paradise Found",
        "plays": 5,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "Paradise Found",
          "Paradise Found - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 44,
        "program": "Blackway",
        "plays": 4,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Blackway"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 45,
        "program": "As I Am",
        "plays": 4,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "As I Am"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 46,
        "program": "The Triangle Night 3",
        "plays": 4,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Triangle Night 3"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 47,
        "program": "After the Ark Season 3 - Writer's Special",
        "plays": 4,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "After the Ark Season 3 - Writer's Special"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 48,
        "program": "the Unwellness Job",
        "plays": 4,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "the Unwellness Job"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 49,
        "program": "After the Ark Season 3 - Rapid Fire",
        "plays": 4,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "After the Ark Season 3 - Rapid Fire"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 50,
        "program": "Beauty and the Least",
        "plays": 4,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Beauty and the Least"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      }
    ],
    "topVideoTitles": [
      {
        "rank": 1,
        "title": "The Ark - Season 3",
        "group": "The Ark",
        "plays": 1359,
        "activeUsers": 135,
        "screenPageViews": 2859,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 2,
        "title": "The Librarians: The Next Chapter Season 2",
        "group": "The Librarians: The Next Chapter",
        "plays": 853,
        "activeUsers": 45,
        "screenPageViews": 1262,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 3,
        "title": "The Ark",
        "group": "The Ark",
        "plays": 509,
        "activeUsers": 66,
        "screenPageViews": 1189,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 4,
        "title": "Leverage",
        "group": "Leverage",
        "plays": 403,
        "activeUsers": 53,
        "screenPageViews": 822,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 5,
        "title": "The Librarians: The Next Chapter",
        "group": "The Librarians: The Next Chapter",
        "plays": 228,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 6,
        "title": "The Librarians (Full Series)",
        "group": "The Librarians",
        "plays": 218,
        "activeUsers": 32,
        "screenPageViews": 444,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 7,
        "title": "The Librarians: The Next Chapter (Season 1)",
        "group": "The Librarians: The Next Chapter",
        "plays": 211,
        "activeUsers": 53,
        "screenPageViews": 565,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 8,
        "title": "Leverage: Redemption - Season 3",
        "group": "Leverage: Redemption",
        "plays": 199,
        "activeUsers": 18,
        "screenPageViews": 283,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 9,
        "title": "The Ark - Season 1",
        "group": "The Ark",
        "plays": 187,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 10,
        "title": "The Ark - Season 2",
        "group": "The Ark",
        "plays": 175,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 11,
        "title": "Leverage: Redemption",
        "group": "Leverage: Redemption",
        "plays": 155,
        "activeUsers": 23,
        "screenPageViews": 357,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 12,
        "title": "Almost Paradise - Season 1",
        "group": "Almost Paradise",
        "plays": 141,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 13,
        "title": "Leverage - Season 1",
        "group": "Leverage",
        "plays": 90,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 14,
        "title": "Almost Paradise (Season 1 & 2)",
        "group": "Almost Paradise (Season 1 & 2)",
        "plays": 78,
        "activeUsers": 18,
        "screenPageViews": 257,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 15,
        "title": "Leverage: Redemption -  Season 1",
        "group": "Leverage: Redemption",
        "plays": 76,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 16,
        "title": "Leverage - Season 3",
        "group": "Leverage",
        "plays": 65,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 17,
        "title": "The Librarians - Season 1",
        "group": "The Librarians",
        "plays": 65,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 18,
        "title": "Leverage - Season 4",
        "group": "Leverage",
        "plays": 62,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 19,
        "title": "Leverage - Season 2",
        "group": "Leverage",
        "plays": 59,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 20,
        "title": "Checking Out: The Librarians: The Next Chapter - Season 2",
        "group": "Checking Out: The Librarians: The Next Chapter",
        "plays": 59,
        "activeUsers": 5,
        "screenPageViews": 65,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 21,
        "title": "Almost Paradise - Season 2",
        "group": "Almost Paradise",
        "plays": 56,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 22,
        "title": "Leverage: Redemption - Season 2",
        "group": "Leverage: Redemption",
        "plays": 53,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 23,
        "title": "The Librarians - Season 4",
        "group": "The Librarians",
        "plays": 50,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 24,
        "title": "Catch up on The Librarians: The Next Chapter",
        "group": "Catch up on The Librarians: The Next Chapter",
        "plays": 50,
        "activeUsers": 13,
        "screenPageViews": 90,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 25,
        "title": "The Librarians - Season 2",
        "group": "The Librarians",
        "plays": 46,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 26,
        "title": "Leverage - Season 5",
        "group": "Leverage",
        "plays": 43,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 27,
        "title": "The Ark Season 3 Premieres July 29 on SyFy",
        "group": "The Ark Season 3 Premieres July 29 on SyFy",
        "plays": 43,
        "activeUsers": 19,
        "screenPageViews": 152,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 28,
        "title": "The Ark - Trailer",
        "group": "The Ark",
        "plays": 42,
        "activeUsers": 14,
        "screenPageViews": 148,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 29,
        "title": "After the Ark",
        "group": "After the Ark",
        "plays": 30,
        "activeUsers": 20,
        "screenPageViews": 149,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 30,
        "title": "The Librarians - Season 3",
        "group": "The Librarians",
        "plays": 27,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 31,
        "title": "The Librarian: Quest for the Spear",
        "group": "The Librarian: Quest for the Spear",
        "plays": 27,
        "activeUsers": 10,
        "screenPageViews": 71,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 32,
        "title": "Checking Out: The Librarians Next Chapter - Season 1",
        "group": "Checking Out: The Librarians Next Chapter",
        "plays": 23,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 33,
        "title": "After the Ark - Season 3",
        "group": "After the Ark",
        "plays": 21,
        "activeUsers": 1,
        "screenPageViews": 1,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 34,
        "title": "Checking Out: The Librarians Next Chapter",
        "group": "Checking Out: The Librarians Next Chapter",
        "plays": 20,
        "activeUsers": 12,
        "screenPageViews": 87,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 35,
        "title": "The Messenger - Season 1",
        "group": "The Messenger",
        "plays": 19,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 36,
        "title": "One Big Happy Family",
        "group": "One Big Happy Family",
        "plays": 19,
        "activeUsers": 3,
        "screenPageViews": 45,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 37,
        "title": "The Librarians: The Next Chapter Season 2 Aug 2nd on TNT",
        "group": "The Librarians: The Next Chapter Season 2 Aug 2nd on TNT",
        "plays": 16,
        "activeUsers": 12,
        "screenPageViews": 59,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 38,
        "title": "The Messenger",
        "group": "The Messenger",
        "plays": 15,
        "activeUsers": 4,
        "screenPageViews": 75,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 39,
        "title": "Get Wyle'd Up - A Noah Wyle Collection",
        "group": "Get Wyle'd Up - A Noah Wyle Collection",
        "plays": 14,
        "activeUsers": 9,
        "screenPageViews": 85,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 40,
        "title": "After the Ark Season 3 - The Ark Crew Part 1",
        "group": "After the Ark Season 3 - The Ark Crew Part 1",
        "plays": 14,
        "activeUsers": 8,
        "screenPageViews": 53,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 41,
        "title": "The Librarians: The Next Chapter Season 2 Teaser",
        "group": "The Librarians: The Next Chapter Season 2 Teaser",
        "plays": 14,
        "activeUsers": 6,
        "screenPageViews": 52,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 42,
        "title": "After the Ark - Season 1",
        "group": "After the Ark",
        "plays": 13,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 43,
        "title": "Generation Z",
        "group": "Generation Z",
        "plays": 12,
        "activeUsers": 4,
        "screenPageViews": 46,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 44,
        "title": "The Librarian: Curse of the Judas Chalice",
        "group": "The Librarian: Curse of the Judas Chalice",
        "plays": 12,
        "activeUsers": 4,
        "screenPageViews": 46,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 45,
        "title": "Flash Gordon",
        "group": "Flash Gordon",
        "plays": 11,
        "activeUsers": 1,
        "screenPageViews": 5,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 46,
        "title": "The Patrick LabyorSheaux with Patrick Labyorteaux",
        "group": "The Patrick LabyorSheaux with Patrick Labyorteaux",
        "plays": 10,
        "activeUsers": 1,
        "screenPageViews": 32,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 47,
        "title": "The Librarian: Return to King Solomon's Mines",
        "group": "The Librarian: Return to King Solomon's Mines",
        "plays": 10,
        "activeUsers": 4,
        "screenPageViews": 24,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 48,
        "title": "Adventures of Sonic the Hedgehog - Season 1",
        "group": "Adventures of Sonic the Hedgehog",
        "plays": 9,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 49,
        "title": "The Tower Job",
        "group": "The Tower Job",
        "plays": 9,
        "activeUsers": 3,
        "screenPageViews": 22,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      },
      {
        "rank": 50,
        "title": "The Librarians and the Crown of King Arthur in Cinemascope",
        "group": "The Librarians and the Crown of King Arthur in Cinemascope",
        "plays": 9,
        "activeUsers": 5,
        "screenPageViews": 18,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026"
      }
    ],
    "topChannelTitles": [
      {
        "rank": 1,
        "title": "The Ark",
        "plays": 19297,
        "activeUsers": 262
      },
      {
        "rank": 2,
        "title": "The Librarians: The Next Chapter",
        "plays": 4622,
        "activeUsers": 1
      },
      {
        "rank": 3,
        "title": "Leverage: Redemption - Season 3",
        "plays": 3630,
        "activeUsers": 40
      },
      {
        "rank": 4,
        "title": "The Librarians: The Next Chapter (Season 1)",
        "plays": 3191,
        "activeUsers": 318
      },
      {
        "rank": 5,
        "title": "Leverage: Redemption",
        "plays": 2688,
        "activeUsers": 24
      },
      {
        "rank": 6,
        "title": "Leverage",
        "plays": 2662,
        "activeUsers": 40
      },
      {
        "rank": 7,
        "title": "The Librarians (Full Series)",
        "plays": 2654,
        "activeUsers": 44
      },
      {
        "rank": 8,
        "title": "The Ark - Season 2",
        "plays": 2612,
        "activeUsers": 1
      },
      {
        "rank": 9,
        "title": "The Ark - Season 1",
        "plays": 2452,
        "activeUsers": 1
      },
      {
        "rank": 10,
        "title": "Almost Paradise (Season 1 & 2)",
        "plays": 1859,
        "activeUsers": 26
      },
      {
        "rank": 11,
        "title": "Leverage - Season 1",
        "plays": 1037,
        "activeUsers": 1
      },
      {
        "rank": 12,
        "title": "The Ark Season 3 Premieres July 29 on SyFy",
        "plays": 988,
        "activeUsers": 400
      },
      {
        "rank": 13,
        "title": "The Librarians - Season 1",
        "plays": 988,
        "activeUsers": 1
      },
      {
        "rank": 14,
        "title": "The Ark - Season 3",
        "plays": 889,
        "activeUsers": 52
      },
      {
        "rank": 15,
        "title": "Almost Paradise - Season 1",
        "plays": 625,
        "activeUsers": 1
      },
      {
        "rank": 16,
        "title": "Catch up on The Librarians: The Next Chapter",
        "plays": 602,
        "activeUsers": 46
      },
      {
        "rank": 17,
        "title": "La Arca",
        "plays": 454,
        "activeUsers": 6
      },
      {
        "rank": 18,
        "title": "The Messenger - Season 1",
        "plays": 384,
        "activeUsers": 1
      },
      {
        "rank": 19,
        "title": "Leverage - Season 2",
        "plays": 381,
        "activeUsers": 1
      },
      {
        "rank": 20,
        "title": "Almost Paradise - Season 2",
        "plays": 373,
        "activeUsers": 1
      },
      {
        "rank": 21,
        "title": "Leverage - Season 3",
        "plays": 370,
        "activeUsers": 1
      },
      {
        "rank": 22,
        "title": "Checking Out: The Librarians Next Chapter",
        "plays": 353,
        "activeUsers": 33
      },
      {
        "rank": 23,
        "title": "The Librarians - Season 2",
        "plays": 352,
        "activeUsers": 1
      },
      {
        "rank": 24,
        "title": "Leverage - Season 4",
        "plays": 335,
        "activeUsers": 1
      },
      {
        "rank": 25,
        "title": "Leverage: Redemption -  Season 1",
        "plays": 331,
        "activeUsers": 1
      }
    ],
    "source": "Internal GA4 pull, property 497892271",
    "liveChannelRoster": {
      "file": "live_channels.json",
      "confirmed": 13,
      "detected": 42,
      "updated": "2026-09-14",
      "names": [
        "ElectricNOW",
        "ElectricNOW en Español",
        "ElectricNOW en Espanol",
        "Stoner TV Network",
        "Hollywood Classic Movies",
        "ToonOvation",
        "CinePast",
        "AMPD TV",
        "DARK MATTER TV",
        "Colorized.TV",
        "Horror Asylum",
        "Kung Fu Movies",
        "Spot On News",
        "Grindhouse Gold",
        "a-z Classic Flix",
        "IndieBox",
        "Ghost Dimension",
        "Fancy A Movie",
        "Cartoon Classics",
        "Urban Action Channel",
        "BayView Documentaries",
        "Daily Flash",
        "4ACETV CLASSIC HITS",
        "MMA Futures",
        "Old West TV",
        "a-z Western Grit",
        "The Health Channel",
        "AMusic Channel",
        "Box Cinema",
        "The Family TV Channel",
        "a-z Best Classic TV",
        "Americana Television",
        "Cowboy Classics",
        "SportsTVPlus",
        "MomCave",
        "Historias de Corazón",
        "4ACETV",
        "Rock Solid Wrestling TV",
        "Box Gamers",
        "Boxing Spotlight",
        "FightTVPlus",
        "Fitness Rewind by Collage Video",
        "Play Ibiza",
        "Rockola Television",
        "NOMADslow tv",
        "Wrestling Spotlight",
        "Comercio TV",
        "Box Playlist",
        "HIP HOP TV",
        "POWERtube TV",
        "Viajar TV",
        "Ray Harryhausen Collection",
        "Nigbati TV",
        "BEST (Black Enterprise Streaming Television)",
        "HITS MEXICANOS",
        "Celebrity Scene",
        "Mor2CTV",
        "DJ Central TV",
        "Beyond The Score"
      ],
      "rule": "Renderers must drop any on-demand row whose program/title/group/example matches one of these names (case-insensitive, accents ignored)."
    }
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
      "range": "Jul 20-Jul 26, 2026",
      "appActiveUsers": 1902,
      "appSessions": 4084,
      "appEngagedSessions": 3127,
      "appEngagementRate": 76.56709108716943,
      "viewingUsers": 854,
      "viewingShare": 44.900105152471085,
      "onDemandStartUsers": 818,
      "onDemandStartEvents": 4173,
      "liveChannelViewers": 45,
      "livePlayEvents": 1162
    },
    "currentWeek": {
      "range": "Jul 27-Aug 2, 2026",
      "appActiveUsers": 2775,
      "appSessions": 5977,
      "appEngagedSessions": 4992,
      "appEngagementRate": 83.5201606156935,
      "viewingUsers": 1345,
      "viewingShare": 48.468468468468465,
      "onDemandStartUsers": 1297,
      "onDemandStartEvents": 5919,
      "liveChannelViewers": 71,
      "livePlayEvents": 1388
    }
  },
  "platformTime": {
    "launchBaseline": {
      "range": "Apr 13-Apr 19, 2026",
      "activeUsers": 0,
      "sessions": 0,
      "engagedSessions": 0,
      "engagementRate": 0,
      "totalEngagementSeconds": 0,
      "totalEngagementHours": 0,
      "avgEngagedMinutesPerUser": 0,
      "avgEngagedMinutesPerSession": 0,
      "ga4AverageSessionMinutes": 0,
      "platformBreakout": [],
      "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."
    },
    "previousWeek": {
      "range": "Sep 5-Sep 11, 2026",
      "activeUsers": 4045,
      "sessions": 9882,
      "engagedSessions": 8207,
      "engagementRate": 83.04998988059097,
      "totalEngagementSeconds": 22768107,
      "totalEngagementHours": 6324.474166666667,
      "avgEngagedMinutesPerUser": 93.8117305315204,
      "avgEngagedMinutesPerSession": 38.39996458206841,
      "ga4AverageSessionMinutes": 49.20919633827666,
      "platformBreakout": [
        {
          "platform": "web",
          "activeUsers": 1912,
          "sessions": 5348,
          "engagedSessions": 4326,
          "avgEngagedMinutesPerUser": 102.09592050209204,
          "avgEngagedMinutesPerSession": 36.501009723261035,
          "ga4AverageSessionMinutes": 44.42353681520195
        },
        {
          "platform": "iOS",
          "activeUsers": 1101,
          "sessions": 2333,
          "engagedSessions": 1978,
          "avgEngagedMinutesPerUser": 77.23413563427188,
          "avgEngagedMinutesPerSession": 36.44868552650379,
          "ga4AverageSessionMinutes": 40.60982354793542
        },
        {
          "platform": "Android",
          "activeUsers": 1032,
          "sessions": 2201,
          "engagedSessions": 1903,
          "avgEngagedMinutesPerUser": 96.14948320413437,
          "avgEngagedMinutesPerSession": 45.08235650461911,
          "ga4AverageSessionMinutes": 69.95251476138877
        }
      ],
      "note": "Internal GA4 pull, property 497892271, Sep 5-Sep 11, 2026. Platform time is based on GA4 userEngagementDuration summed across all tracked ElectricNOW GA4 streams grouped by GA4 platform (web includes Roku, browser, Vizio and webOS streams). Landing-page paths sit inside the web stream and are not separately excluded in this week's pull. GA4 average session duration is kept for context but may overstate streaming attention when sessions remain open.",
      "status": "fresh"
    },
    "currentWeek": {
      "range": "Sep 12-Sep 18, 2026",
      "activeUsers": 3844,
      "sessions": 9613,
      "engagedSessions": 6595,
      "engagementRate": 68.60501404348278,
      "totalEngagementSeconds": 20471008,
      "totalEngagementHours": 5686.391111111111,
      "avgEngagedMinutesPerUser": 88.75740548040237,
      "avgEngagedMinutesPerSession": 35.491882520198345,
      "ga4AverageSessionMinutes": 138.2244044037519,
      "platformBreakout": [
        {
          "platform": "web",
          "activeUsers": 1942,
          "sessions": 5549,
          "engagedSessions": 3524,
          "avgEngagedMinutesPerUser": 100.36695846206659,
          "avgEngagedMinutesPerSession": 35.1257223523758,
          "ga4AverageSessionMinutes": 203.8749591281222
        },
        {
          "platform": "iOS",
          "activeUsers": 1063,
          "sessions": 2106,
          "engagedSessions": 1601,
          "avgEngagedMinutesPerUser": 62.35716525556601,
          "avgEngagedMinutesPerSession": 31.474675530231085,
          "ga4AverageSessionMinutes": 37.86366290131371
        },
        {
          "platform": "Android",
          "activeUsers": 839,
          "sessions": 1958,
          "engagedSessions": 1470,
          "avgEngagedMinutesPerUser": 95.33392928088996,
          "avgEngagedMinutesPerSession": 40.85044262853251,
          "ga4AverageSessionMinutes": 60.11653588414198
        }
      ],
      "note": "Internal GA4 pull, property 497892271, Sep 12-Sep 18, 2026. Platform time is based on GA4 userEngagementDuration summed across all tracked ElectricNOW GA4 streams grouped by GA4 platform (web includes Roku, browser, Vizio and webOS streams). Landing-page paths sit inside the web stream and are not separately excluded in this week's pull. GA4 average session duration is kept for context but may overstate streaming attention when sessions remain open.",
      "status": "fresh"
    }
  },
  "acquisitionSummary": {
    "launchBaseline": {
      "range": "Apr 13-Apr 19, 2026",
      "totalGa4ActiveUsers": 8739,
      "totalGa4Sessions": 13421,
      "totalGa4EngagementRate": 59.310036509947096,
      "landingPageUsers": 1045,
      "landingPageSessions": 1485,
      "devicesPageUsers": 2028,
      "devicesPageSessions": 2119,
      "paidSocialUsers": 4441,
      "paidSocialSessions": 4547
    },
    "previousWeek": {
      "range": "Jul 20-Jul 26, 2026",
      "totalGa4ActiveUsers": 3544,
      "totalGa4Sessions": 9899,
      "totalGa4EngagementRate": 76.94716638044247,
      "landingPageUsers": 148,
      "landingPageSessions": 329,
      "devicesPageUsers": 45,
      "devicesPageSessions": 47,
      "paidSocialUsers": 252,
      "paidSocialSessions": 338
    },
    "currentWeek": {
      "range": "Jul 27-Aug 2, 2026",
      "totalGa4ActiveUsers": 5702,
      "totalGa4Sessions": 14519,
      "totalGa4EngagementRate": 79.39252014601557,
      "landingPageUsers": 569,
      "landingPageSessions": 885,
      "devicesPageUsers": 89,
      "devicesPageSessions": 92,
      "paidSocialUsers": 317,
      "paidSocialSessions": 433
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
      "range": "Jul 24-Jul 30, 2026",
      "viewingEventUsers": 1909,
      "videoStartUsers": 1889,
      "videoStartEvents": 24116,
      "videoPlayUsers": 359,
      "videoPlayEvents": 10602,
      "videoCompleteUsers": 628,
      "videoCompleteEvents": 6763,
      "onDemandStartUsers": 1889,
      "onDemandStartEvents": 24116,
      "liveChannelViewers": 359,
      "livePlayEvents": 68620,
      "adRequestEvents": 35651
    },
    "currentWeek": {
      "range": "Jul 31-Aug 6, 2026",
      "viewingEventUsers": 1848,
      "videoStartUsers": 1814,
      "videoStartEvents": 24377,
      "videoPlayUsers": 326,
      "videoPlayEvents": 12892,
      "videoCompleteUsers": 593,
      "videoCompleteEvents": 8318,
      "onDemandStartUsers": 1814,
      "onDemandStartEvents": 24377,
      "liveChannelViewers": 326,
      "livePlayEvents": 74089,
      "adRequestEvents": 36688
    }
  },
  "scorecardGroups": [
    {
      "title": "Measured ElectricNOW Platform Audience",
      "eyebrow": "Is the measured platform growing or shrinking?",
      "definition": "GA4 active users across tracked ElectricNOW app/platform surfaces. Landing pages are acquisition context only. Reconcile with Amagi, app stores, ad servers, and platform dashboards before treating this as total company-wide audience.",
      "cards": [
        {
          "key": "platformActiveUsers",
          "label": "Platform active users",
          "baseline": 4076,
          "launchBaseline": 8709,
          "previousWeek": 4076,
          "current": 3871,
          "deltaPct": -5.029440628066732,
          "deltaVsLaunchPct": -55.551728097370535,
          "deltaVsPreviousPct": -5.029440628066732,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 active users on app/platform surfaces; landing pages excluded.",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "currentWeek": 3871,
          "previous": 4076,
          "changePct": -5.029440628066732,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": -5.029440628066732
        },
        {
          "key": "platformSessions",
          "label": "Platform sessions",
          "baseline": 9864,
          "launchBaseline": 13316,
          "previousWeek": 9864,
          "current": 9659,
          "deltaPct": -2.078264395782644,
          "deltaVsLaunchPct": -27.463202162811655,
          "deltaVsPreviousPct": -2.078264395782644,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 sessions on app/platform surfaces; landing pages excluded.",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "currentWeek": 9659,
          "previous": 9864,
          "changePct": -2.078264395782644,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": -2.078264395782644
        },
        {
          "key": "viewingEventUsers",
          "label": "Viewing event users",
          "baseline": 1520,
          "launchBaseline": 1155,
          "previousWeek": 1520,
          "current": 1309,
          "deltaPct": -13.88157894736842,
          "deltaVsLaunchPct": 13.333333333333334,
          "deltaVsPreviousPct": -13.88157894736842,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered a video_start event (on-demand or live) in the week. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Sep 12-Sep 18, 2026",
          "previous": 1520,
          "currentWeek": 1309,
          "changePct": -13.88157894736842,
          "deltaVsBaselinePct": -13.88157894736842,
          "direction": "down",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Users who triggered a video_start event (on-demand or live) in the week."
        },
        {
          "key": "totalEngagementHours",
          "label": "Total engaged hours",
          "baseline": 6324.47,
          "launchBaseline": 3652.9975,
          "previousWeek": 6324.47,
          "current": 5686.39,
          "deltaPct": -10.089066751838493,
          "deltaVsLaunchPct": 55.66367072520582,
          "deltaVsPreviousPct": -10.089066751838493,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 total engaged time converted to hours.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "currentWeek": 5686.39,
          "previous": 6324.47,
          "changePct": -10.089066751838493,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": -10.089066751838493
        },
        {
          "key": "avgEngagedMinutesPerUser",
          "label": "Avg time per user",
          "baseline": 93.09824582924436,
          "launchBaseline": 25.164161882893225,
          "previousWeek": 93.09824582924436,
          "current": 88.13832773615776,
          "deltaPct": -5.327617130599653,
          "deltaVsLaunchPct": 250.25338076558322,
          "deltaVsPreviousPct": -5.327617130599653,
          "deltaType": "minutes",
          "format": "minutes",
          "context": "GA4 engaged time divided by active users.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "currentWeek": 88.13832773615776,
          "previous": 93.09824582924436,
          "changePct": -5.327617130599653,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": -5.327617130599653
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
          "baseline": 2133,
          "launchBaseline": 1547,
          "previousWeek": 2133,
          "current": 1902,
          "deltaPct": -10.829817158931084,
          "deltaVsLaunchPct": 22.94764059469942,
          "deltaVsPreviousPct": -10.829817158931084,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 active users on platform = Android + iOS (summed; small overlap possible). Internal GA4 pull, property 497892271.",
          "dataPeriod": "Sep 12-Sep 18, 2026",
          "previous": 2133,
          "currentWeek": 1902,
          "changePct": -10.829817158931084,
          "deltaVsBaselinePct": -10.829817158931084,
          "direction": "down",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "GA4 active users on platform = Android + iOS (summed; small overlap possible)."
        },
        {
          "key": "appSessions",
          "label": "App stream sessions",
          "baseline": 4536,
          "launchBaseline": 2889,
          "previousWeek": 4536,
          "current": 4065,
          "deltaPct": -10.383597883597883,
          "deltaVsLaunchPct": 40.7061266874351,
          "deltaVsPreviousPct": -10.383597883597883,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 sessions on platform = Android + iOS. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Sep 12-Sep 18, 2026",
          "previous": 4536,
          "currentWeek": 4065,
          "changePct": -10.383597883597883,
          "deltaVsBaselinePct": -10.383597883597883,
          "direction": "down",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "GA4 sessions on platform = Android + iOS."
        },
        {
          "key": "appEngagementRate",
          "label": "App stream engagement rate",
          "baseline": 85.55996472663139,
          "launchBaseline": 80.96227068189685,
          "previousWeek": 85.55996472663139,
          "current": 75.5719557195572,
          "deltaPct": -9.988009007074197,
          "deltaVsLaunchPct": -5.390314962339659,
          "deltaVsPreviousPct": -9.988009007074197,
          "deltaType": "points",
          "format": "percent",
          "context": "Engaged sessions / sessions on platform = Android + iOS, in percent. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Sep 12-Sep 18, 2026",
          "previous": 85.55996472663139,
          "currentWeek": 75.5719557195572,
          "changePct": -9.988009007074197,
          "deltaVsBaselinePct": -9.988009007074197,
          "direction": "down",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Engaged sessions / sessions on platform = Android + iOS, in percent."
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
          "baseline": 1520,
          "launchBaseline": 1155,
          "previousWeek": 1520,
          "current": 1309,
          "deltaPct": -13.88157894736842,
          "deltaVsLaunchPct": 13.333333333333334,
          "deltaVsPreviousPct": -13.88157894736842,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered a video_start event (on-demand or live) in the week. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Sep 12-Sep 18, 2026",
          "previous": 1520,
          "currentWeek": 1309,
          "changePct": -13.88157894736842,
          "deltaVsBaselinePct": -13.88157894736842,
          "direction": "down",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Users who triggered a video_start event (on-demand or live) in the week."
        },
        {
          "key": "onDemandStartUsers",
          "label": "On-demand start users",
          "baseline": 1120,
          "launchBaseline": 674,
          "previousWeek": 1120,
          "current": 957,
          "deltaPct": -14.553571428571429,
          "deltaVsLaunchPct": 41.98813056379822,
          "deltaVsPreviousPct": -14.553571428571429,
          "deltaType": "percent",
          "format": "number",
          "context": "Users with a video_start event where channel_title is NOT a live/FAST channel. Live/FAST channels come from live_channels.json (59 names). Internal GA4 pull, property 497892271.",
          "dataPeriod": "Sep 12-Sep 18, 2026",
          "previous": 1120,
          "currentWeek": 957,
          "changePct": -14.553571428571429,
          "deltaVsBaselinePct": -14.553571428571429,
          "direction": "down",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Users with a video_start event where channel_title is NOT a live/FAST channel.",
          "launchBaselineOldDefinition": 1069,
          "launchBaselineDefinitionNote": "Launch-week value (Apr 13-19, 2026) re-pulled from GA4 on Sep 8, 2026 with the same live/FAST channel_title roster used for this week's value, so the launch comparison is like-for-like. Internal GA4 pull, property 497892271."
        },
        {
          "key": "liveChannelViewers",
          "label": "Live channel viewers",
          "baseline": 514,
          "launchBaseline": 452,
          "previousWeek": 514,
          "current": 443,
          "deltaPct": -13.813229571984436,
          "deltaVsLaunchPct": -1.991150442477876,
          "deltaVsPreviousPct": -13.813229571984436,
          "deltaType": "percent",
          "format": "number",
          "context": "Users with a video_start event on a live/FAST channel title. Live/FAST channels come from live_channels.json (59 names). Internal GA4 pull, property 497892271.",
          "dataPeriod": "Sep 12-Sep 18, 2026",
          "previous": 514,
          "currentWeek": 443,
          "changePct": -13.813229571984436,
          "deltaVsBaselinePct": -13.813229571984436,
          "direction": "down",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Users with a video_start event on a live/FAST channel title.",
          "launchBaselineOldDefinition": 121,
          "launchBaselineDefinitionNote": "Launch-week value (Apr 13-19, 2026) re-pulled from GA4 on Sep 8, 2026 with the same live/FAST channel_title roster used for this week's value, so the launch comparison is like-for-like. Internal GA4 pull, property 497892271."
        },
        {
          "key": "videoCompleteUsers",
          "label": "Video complete users",
          "baseline": 467,
          "launchBaseline": 219,
          "previousWeek": 467,
          "current": 421,
          "deltaPct": -9.850107066381156,
          "deltaVsLaunchPct": 92.23744292237443,
          "deltaVsPreviousPct": -9.850107066381156,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered a video_complete event in the week. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Sep 12-Sep 18, 2026",
          "previous": 467,
          "currentWeek": 421,
          "changePct": -9.850107066381156,
          "deltaVsBaselinePct": -9.850107066381156,
          "direction": "down",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Users who triggered a video_complete event in the week."
        },
        {
          "key": "livePlayEvents",
          "label": "Live play events",
          "baseline": 5370,
          "launchBaseline": 11700,
          "previousWeek": 5370,
          "current": 5494,
          "deltaPct": 2.3091247672253257,
          "deltaVsLaunchPct": -53.042735042735046,
          "deltaVsPreviousPct": 2.3091247672253257,
          "deltaType": "percent",
          "format": "number",
          "context": "play + video_play + video_start event counts on live/FAST channel titles. Live/FAST channels come from live_channels.json (59 names). Internal GA4 pull, property 497892271. Launch comparison uses the same roster definition (Apr 13-19, 2026 re-pulled Sep 8, 2026); at launch the app fired far more 'play' events per live session, so video_start (4,039 launch vs 3,751 now) is the steadier like-for-like signal.",
          "dataPeriod": "Sep 12-Sep 18, 2026",
          "previous": 5370,
          "currentWeek": 5494,
          "changePct": 2.3091247672253257,
          "deltaVsBaselinePct": 2.3091247672253257,
          "direction": "up",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "play + video_play + video_start event counts on live/FAST channel titles.",
          "launchBaselineOldDefinition": 3952,
          "launchBaselineDefinitionNote": "Launch-week value (Apr 13-19, 2026) re-pulled from GA4 on Sep 8, 2026 with the same live/FAST channel_title roster used for this week's value, so the launch comparison is like-for-like. Internal GA4 pull, property 497892271. Caveat: launch week logged 7,661 'play' events on live channels versus 1,607 this week, so most of the drop is the app firing fewer 'play' events per session. Live video_start alone was 4,039 at launch vs 3,546 this week (-12%)."
        },
        {
          "key": "adRequestEvents",
          "label": "Ad request events",
          "baseline": 23134,
          "launchBaseline": 10589,
          "previousWeek": 23134,
          "current": 33624,
          "deltaPct": 45.344514567303534,
          "deltaVsLaunchPct": 217.53706676740015,
          "deltaVsPreviousPct": 45.344514567303534,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 ads_request events = ElectricNOW IN-APP ad requests, not paid-campaign metrics. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Sep 12-Sep 18, 2026",
          "previous": 23134,
          "currentWeek": 33624,
          "changePct": 45.344514567303534,
          "deltaVsBaselinePct": 45.344514567303534,
          "direction": "up",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "GA4 ads_request events = ElectricNOW IN-APP ad requests, not paid-campaign metrics."
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
          "baseline": 93.09824582924436,
          "launchBaseline": 25.164161882893225,
          "previousWeek": 93.09824582924436,
          "current": 88.13832773615776,
          "deltaPct": -5.327617130599653,
          "deltaVsLaunchPct": 250.25338076558322,
          "deltaVsPreviousPct": -5.327617130599653,
          "deltaType": "minutes",
          "format": "minutes",
          "context": "GA4 engaged time divided by active users.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "currentWeek": 88.13832773615776,
          "previous": 93.09824582924436,
          "changePct": -5.327617130599653,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": -5.327617130599653
        },
        {
          "key": "avgEngagedMinutesPerSession",
          "label": "Avg time per session",
          "baseline": 38.47003751013788,
          "launchBaseline": 16.45123845980635,
          "previousWeek": 38.47003751013788,
          "current": 35.322856058253095,
          "deltaPct": -8.18086400632029,
          "deltaVsLaunchPct": 114.71244334919746,
          "deltaVsPreviousPct": -8.18086400632029,
          "deltaType": "minutes",
          "format": "minutes",
          "context": "Total engaged time divided by sessions.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "currentWeek": 35.322856058253095,
          "previous": 38.47003751013788,
          "changePct": -8.18086400632029,
          "deltaVsBaselinePct": -8.18086400632029,
          "direction": "down",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271"
        },
        {
          "key": "totalEngagementHours",
          "label": "Total engaged hours",
          "baseline": 6324.47,
          "launchBaseline": 3652.9975,
          "previousWeek": 6324.47,
          "current": 5686.39,
          "deltaPct": -10.089066751838493,
          "deltaVsLaunchPct": 55.66367072520582,
          "deltaVsPreviousPct": -10.089066751838493,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 total engaged time converted to hours.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Sep 12-Sep 18, 2026",
          "comparisonPeriod": "Sep 5-Sep 11, 2026",
          "currentWeek": 5686.39,
          "previous": 6324.47,
          "changePct": -10.089066751838493,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": -10.089066751838493
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
          "engagementRate": 0,
          "avgEngagedMinutesPerUser": 0,
          "avgEngagedMinutesPerSession": 0
        }
      ],
      "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."
    },
    "previousWeek": {
      "range": "Sep 5-Sep 11, 2026",
      "rows": [
        {
          "surface": "Roku",
          "streamName": "electricnow-roku",
          "streamId": "13096428368",
          "platform": "web",
          "activeUsers": 1133,
          "sessions": 3308,
          "engagedSessions": 2787,
          "eventCount": 722551,
          "engagementRate": 84.2503022974607,
          "avgEngagedMinutesPerUser": 128.1368049426302,
          "avgEngagedMinutesPerSession": 43.88724304715841
        },
        {
          "surface": "iOS / Apple app stream",
          "streamName": "ElectricNow",
          "streamId": "12982344897",
          "platform": "iOS",
          "activeUsers": 1101,
          "sessions": 2333,
          "engagedSessions": 1978,
          "eventCount": 64725,
          "engagementRate": 84.78354050578653,
          "avgEngagedMinutesPerUser": 77.23413563427188,
          "avgEngagedMinutesPerSession": 36.44868552650379
        },
        {
          "surface": "Web",
          "streamName": "electricnow-web",
          "streamId": "13090831762",
          "platform": "web",
          "activeUsers": 772,
          "sessions": 1989,
          "engagedSessions": 1537,
          "eventCount": 144941,
          "engagementRate": 77.27501256913023,
          "avgEngagedMinutesPerUser": 64.76185233160622,
          "avgEngagedMinutesPerSession": 25.136324786324785
        },
        {
          "surface": "Android mobile app",
          "streamName": "ElectricNOW",
          "streamId": "12950551103",
          "platform": "Android",
          "activeUsers": 711,
          "sessions": 1484,
          "engagedSessions": 1219,
          "eventCount": 36000,
          "engagementRate": 82.14285714285714,
          "avgEngagedMinutesPerUser": 52.9834974214721,
          "avgEngagedMinutesPerSession": 25.38495058400719
        },
        {
          "surface": "Android TV / CTV",
          "streamName": "ElectricNOW tv",
          "streamId": "13118400722",
          "platform": "Android",
          "activeUsers": 321,
          "sessions": 717,
          "engagedSessions": 684,
          "eventCount": 21927,
          "engagementRate": 95.39748953974896,
          "avgEngagedMinutesPerUser": 191.7601246105919,
          "avgEngagedMinutesPerSession": 85.85076708507671
        },
        {
          "surface": "Vizio",
          "streamName": "electricnow-vizio",
          "streamId": "15383591472",
          "platform": "web",
          "activeUsers": 5,
          "sessions": 11,
          "engagedSessions": 2,
          "eventCount": 88,
          "engagementRate": 18.181818181818183,
          "avgEngagedMinutesPerUser": 6.45,
          "avgEngagedMinutesPerSession": 2.9318181818181817
        },
        {
          "surface": "Samsung / Tizen",
          "streamName": "electricnow-tizen",
          "streamId": "12976057441",
          "platform": "web",
          "activeUsers": 1,
          "sessions": 16,
          "engagedSessions": 0,
          "eventCount": 65,
          "engagementRate": 0.0,
          "avgEngagedMinutesPerUser": 0.0,
          "avgEngagedMinutesPerSession": 0.0
        },
        {
          "surface": "LG / webOS",
          "streamName": "electricnow-webos",
          "streamId": "12976053175",
          "platform": "web",
          "activeUsers": 1,
          "sessions": 24,
          "engagedSessions": 0,
          "eventCount": 34,
          "engagementRate": 0.0,
          "avgEngagedMinutesPerUser": 0.0,
          "avgEngagedMinutesPerSession": 0.0
        }
      ],
      "note": "Internal GA4 pull, property 497892271, Sep 5-Sep 11, 2026. Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces.",
      "status": "fresh"
    },
    "currentWeek": {
      "range": "Sep 12-Sep 18, 2026",
      "rows": [
        {
          "surface": "Roku",
          "streamName": "electricnow-roku",
          "streamId": "13096428368",
          "platform": "web",
          "activeUsers": 1220,
          "sessions": 3829,
          "engagedSessions": 2376,
          "eventCount": 770071,
          "engagementRate": 62.0527552885871,
          "avgEngagedMinutesPerUser": 126.86024590163933,
          "avgEngagedMinutesPerSession": 40.42034473752938
        },
        {
          "surface": "iOS / Apple app stream",
          "streamName": "ElectricNow",
          "streamId": "12982344897",
          "platform": "iOS",
          "activeUsers": 1063,
          "sessions": 2106,
          "engagedSessions": 1601,
          "eventCount": 64676,
          "engagementRate": 76.02089268755935,
          "avgEngagedMinutesPerUser": 62.35716525556601,
          "avgEngagedMinutesPerSession": 31.474675530231085
        },
        {
          "surface": "Web",
          "streamName": "electricnow-web",
          "streamId": "13090831762",
          "platform": "web",
          "activeUsers": 713,
          "sessions": 1689,
          "engagedSessions": 1146,
          "eventCount": 117542,
          "engagementRate": 67.85079928952042,
          "avgEngagedMinutesPerUser": 56.285273492286116,
          "avgEngagedMinutesPerSession": 23.760449970396685
        },
        {
          "surface": "Android mobile app",
          "streamName": "ElectricNOW",
          "streamId": "12950551103",
          "platform": "Android",
          "activeUsers": 603,
          "sessions": 1435,
          "engagedSessions": 1015,
          "eventCount": 37767,
          "engagementRate": 70.73170731707317,
          "avgEngagedMinutesPerUser": 56.971945826423436,
          "avgEngagedMinutesPerSession": 23.94012775842044
        },
        {
          "surface": "Android TV / CTV",
          "streamName": "ElectricNOW tv",
          "streamId": "13118400722",
          "platform": "Android",
          "activeUsers": 236,
          "sessions": 523,
          "engagedSessions": 455,
          "eventCount": 17014,
          "engagementRate": 86.9980879541109,
          "avgEngagedMinutesPerUser": 193.35204802259886,
          "avgEngagedMinutesPerSession": 87.24872530274061
        },
        {
          "surface": "Vizio",
          "streamName": "electricnow-vizio",
          "streamId": "15383591472",
          "platform": "web",
          "activeUsers": 9,
          "sessions": 21,
          "engagedSessions": 2,
          "eventCount": 126,
          "engagementRate": 9.523809523809524,
          "avgEngagedMinutesPerUser": 1.3037037037037038,
          "avgEngagedMinutesPerSession": 0.5587301587301587
        },
        {
          "surface": "Samsung / Tizen",
          "streamName": "electricnow-tizen",
          "streamId": "12976057441",
          "platform": "web",
          "activeUsers": 0,
          "sessions": 1,
          "engagedSessions": 0,
          "eventCount": 1,
          "engagementRate": 0.0,
          "avgEngagedMinutesPerUser": 0,
          "avgEngagedMinutesPerSession": 0.0
        },
        {
          "surface": "LG / webOS",
          "streamName": "electricnow-webos",
          "streamId": "12976053175",
          "platform": "web",
          "activeUsers": 0,
          "sessions": 9,
          "engagedSessions": 0,
          "eventCount": 9,
          "engagementRate": 0.0,
          "avgEngagedMinutesPerUser": 0,
          "avgEngagedMinutesPerSession": 0.0
        }
      ],
      "note": "Internal GA4 pull, property 497892271, Sep 12-Sep 18, 2026. Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces.",
      "status": "fresh"
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
      "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only as acquisition context, not as platform audience."
    },
    "previousWeek": {
      "range": "Jul 20-Jul 26, 2026",
      "platformActiveUsers": 3510,
      "platformSessions": 9819,
      "platformEngagedSessions": 7610,
      "platformEventCount": 1016291,
      "platformEngagementRate": 77.50280069253488,
      "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only as acquisition context, not as platform audience."
    },
    "currentWeek": {
      "range": "Jul 27-Aug 2, 2026",
      "platformActiveUsers": 5593,
      "platformSessions": 14272,
      "platformEngagedSessions": 11448,
      "platformEventCount": 1174963,
      "platformEngagementRate": 80.21300448430493,
      "note": "Excludes landing-page acquisition paths. Landing-page traffic is tracked only as acquisition context, not as platform audience."
    }
  },
  "weeklyTrend": {
    "period": "Sep 12-Sep 18, 2026",
    "previousPeriod": "Sep 5-Sep 11, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "date": "2026-09-12",
        "sessions": 1315,
        "activeUsers": 834
      },
      {
        "date": "2026-09-13",
        "sessions": 1365,
        "activeUsers": 779
      },
      {
        "date": "2026-09-14",
        "sessions": 1276,
        "activeUsers": 736
      },
      {
        "date": "2026-09-15",
        "sessions": 1278,
        "activeUsers": 762
      },
      {
        "date": "2026-09-16",
        "sessions": 1316,
        "activeUsers": 722
      },
      {
        "date": "2026-09-17",
        "sessions": 1394,
        "activeUsers": 762
      },
      {
        "date": "2026-09-18",
        "sessions": 1767,
        "activeUsers": 973
      }
    ],
    "previousRows": [
      {
        "date": "2026-09-05",
        "sessions": 1417,
        "activeUsers": 851
      },
      {
        "date": "2026-09-06",
        "sessions": 1473,
        "activeUsers": 879
      },
      {
        "date": "2026-09-07",
        "sessions": 1533,
        "activeUsers": 881
      },
      {
        "date": "2026-09-08",
        "sessions": 1424,
        "activeUsers": 830
      },
      {
        "date": "2026-09-09",
        "sessions": 1441,
        "activeUsers": 822
      },
      {
        "date": "2026-09-10",
        "sessions": 1583,
        "activeUsers": 928
      },
      {
        "date": "2026-09-11",
        "sessions": 1289,
        "activeUsers": 772
      }
    ],
    "note": "GA4 property 497892271 only. Landing-page traffic is treated as acquisition only, not platform audience."
  },
  "monthlyTrend": {
    "period": "Aug 22-Sep 18, 2026",
    "previousPeriod": "Jul 25-Aug 21, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "activeUsers": 981,
        "sessions": 1582,
        "engagedSessions": 1301,
        "screenPageViews": 8302,
        "eventCount": 137694,
        "userEngagementDuration": 3176599,
        "totalEngagementHours": 882.3886111111111,
        "date": "2026-08-22",
        "label": "Aug 22"
      },
      {
        "activeUsers": 1062,
        "sessions": 1675,
        "engagedSessions": 1383,
        "screenPageViews": 8397,
        "eventCount": 154908,
        "userEngagementDuration": 4130094,
        "totalEngagementHours": 1147.2483333333332,
        "date": "2026-08-23",
        "label": "Aug 23"
      },
      {
        "activeUsers": 1011,
        "sessions": 1626,
        "engagedSessions": 1349,
        "screenPageViews": 9238,
        "eventCount": 148245,
        "userEngagementDuration": 3753503,
        "totalEngagementHours": 1042.6397222222222,
        "date": "2026-08-24",
        "label": "Aug 24"
      },
      {
        "activeUsers": 926,
        "sessions": 1524,
        "engagedSessions": 1255,
        "screenPageViews": 7976,
        "eventCount": 139695,
        "userEngagementDuration": 3374470,
        "totalEngagementHours": 937.3527777777778,
        "date": "2026-08-25",
        "label": "Aug 25"
      },
      {
        "activeUsers": 951,
        "sessions": 1587,
        "engagedSessions": 1304,
        "screenPageViews": 7734,
        "eventCount": 137522,
        "userEngagementDuration": 3046534,
        "totalEngagementHours": 846.2594444444444,
        "date": "2026-08-26",
        "label": "Aug 26"
      },
      {
        "activeUsers": 979,
        "sessions": 1667,
        "engagedSessions": 1384,
        "screenPageViews": 8492,
        "eventCount": 149472,
        "userEngagementDuration": 3294256,
        "totalEngagementHours": 915.0711111111111,
        "date": "2026-08-27",
        "label": "Aug 27"
      },
      {
        "activeUsers": 896,
        "sessions": 1443,
        "engagedSessions": 1152,
        "screenPageViews": 7083,
        "eventCount": 140669,
        "userEngagementDuration": 3132183,
        "totalEngagementHours": 870.0508333333333,
        "date": "2026-08-28",
        "label": "Aug 28"
      },
      {
        "activeUsers": 857,
        "sessions": 1450,
        "engagedSessions": 1190,
        "screenPageViews": 7228,
        "eventCount": 139692,
        "userEngagementDuration": 3182561,
        "totalEngagementHours": 884.0447222222223,
        "date": "2026-08-29",
        "label": "Aug 29"
      },
      {
        "activeUsers": 949,
        "sessions": 1593,
        "engagedSessions": 1317,
        "screenPageViews": 8425,
        "eventCount": 156922,
        "userEngagementDuration": 3541875,
        "totalEngagementHours": 983.8541666666666,
        "date": "2026-08-30",
        "label": "Aug 30"
      },
      {
        "activeUsers": 959,
        "sessions": 1579,
        "engagedSessions": 1286,
        "screenPageViews": 9591,
        "eventCount": 148320,
        "userEngagementDuration": 3382488,
        "totalEngagementHours": 939.58,
        "date": "2026-08-31",
        "label": "Aug 31"
      },
      {
        "activeUsers": 904,
        "sessions": 1450,
        "engagedSessions": 1167,
        "screenPageViews": 7879,
        "eventCount": 146070,
        "userEngagementDuration": 3252806,
        "totalEngagementHours": 903.5572222222222,
        "date": "2026-09-01",
        "label": "Sep 1"
      },
      {
        "activeUsers": 963,
        "sessions": 1608,
        "engagedSessions": 1312,
        "screenPageViews": 7765,
        "eventCount": 145142,
        "userEngagementDuration": 2839016,
        "totalEngagementHours": 788.6155555555556,
        "date": "2026-09-02",
        "label": "Sep 2"
      },
      {
        "activeUsers": 1024,
        "sessions": 1733,
        "engagedSessions": 1366,
        "screenPageViews": 8842,
        "eventCount": 144038,
        "userEngagementDuration": 2715852,
        "totalEngagementHours": 754.4033333333333,
        "date": "2026-09-03",
        "label": "Sep 3"
      },
      {
        "activeUsers": 836,
        "sessions": 1515,
        "engagedSessions": 1243,
        "screenPageViews": 7933,
        "eventCount": 142503,
        "userEngagementDuration": 3014360,
        "totalEngagementHours": 837.3222222222222,
        "date": "2026-09-04",
        "label": "Sep 4"
      },
      {
        "activeUsers": 851,
        "sessions": 1417,
        "engagedSessions": 1172,
        "screenPageViews": 6869,
        "eventCount": 144715,
        "userEngagementDuration": 3365838,
        "totalEngagementHours": 934.955,
        "date": "2026-09-05",
        "label": "Sep 5"
      },
      {
        "activeUsers": 879,
        "sessions": 1473,
        "engagedSessions": 1252,
        "screenPageViews": 7530,
        "eventCount": 145817,
        "userEngagementDuration": 3646524,
        "totalEngagementHours": 1012.9233333333333,
        "date": "2026-09-06",
        "label": "Sep 6"
      },
      {
        "activeUsers": 881,
        "sessions": 1533,
        "engagedSessions": 1306,
        "screenPageViews": 7562,
        "eventCount": 148019,
        "userEngagementDuration": 3851548,
        "totalEngagementHours": 1069.8744444444444,
        "date": "2026-09-07",
        "label": "Sep 7"
      },
      {
        "activeUsers": 830,
        "sessions": 1424,
        "engagedSessions": 1188,
        "screenPageViews": 6635,
        "eventCount": 137759,
        "userEngagementDuration": 2916245,
        "totalEngagementHours": 810.0680555555556,
        "date": "2026-09-08",
        "label": "Sep 8"
      },
      {
        "activeUsers": 822,
        "sessions": 1441,
        "engagedSessions": 1207,
        "screenPageViews": 6632,
        "eventCount": 131952,
        "userEngagementDuration": 2913652,
        "totalEngagementHours": 809.3477777777778,
        "date": "2026-09-09",
        "label": "Sep 9"
      },
      {
        "activeUsers": 928,
        "sessions": 1583,
        "engagedSessions": 1201,
        "screenPageViews": 7677,
        "eventCount": 136971,
        "userEngagementDuration": 3051075,
        "totalEngagementHours": 847.5208333333334,
        "date": "2026-09-10",
        "label": "Sep 10"
      },
      {
        "activeUsers": 772,
        "sessions": 1289,
        "engagedSessions": 1070,
        "screenPageViews": 6925,
        "eventCount": 145098,
        "userEngagementDuration": 3023225,
        "totalEngagementHours": 839.7847222222222,
        "date": "2026-09-11",
        "label": "Sep 11"
      },
      {
        "activeUsers": 834,
        "sessions": 1315,
        "engagedSessions": 1066,
        "screenPageViews": 6539,
        "eventCount": 143864,
        "userEngagementDuration": 3240844,
        "totalEngagementHours": 900.2344444444444,
        "date": "2026-09-12",
        "label": "Sep 12"
      },
      {
        "activeUsers": 779,
        "sessions": 1365,
        "engagedSessions": 1106,
        "screenPageViews": 5970,
        "eventCount": 140505,
        "userEngagementDuration": 3023696,
        "totalEngagementHours": 839.9155555555556,
        "date": "2026-09-13",
        "label": "Sep 13"
      },
      {
        "activeUsers": 736,
        "sessions": 1276,
        "engagedSessions": 1013,
        "screenPageViews": 6039,
        "eventCount": 132163,
        "userEngagementDuration": 2749150,
        "totalEngagementHours": 763.6527777777778,
        "date": "2026-09-14",
        "label": "Sep 14"
      },
      {
        "activeUsers": 762,
        "sessions": 1278,
        "engagedSessions": 1029,
        "screenPageViews": 6121,
        "eventCount": 140761,
        "userEngagementDuration": 2740377,
        "totalEngagementHours": 761.2158333333333,
        "date": "2026-09-15",
        "label": "Sep 15"
      },
      {
        "activeUsers": 722,
        "sessions": 1316,
        "engagedSessions": 1102,
        "screenPageViews": 6297,
        "eventCount": 132313,
        "userEngagementDuration": 2764411,
        "totalEngagementHours": 767.8919444444444,
        "date": "2026-09-16",
        "label": "Sep 16"
      },
      {
        "activeUsers": 762,
        "sessions": 1394,
        "engagedSessions": 1117,
        "screenPageViews": 6409,
        "eventCount": 136230,
        "userEngagementDuration": 2862506,
        "totalEngagementHours": 795.1405555555556,
        "date": "2026-09-17",
        "label": "Sep 17"
      },
      {
        "activeUsers": 973,
        "sessions": 1767,
        "engagedSessions": 259,
        "screenPageViews": 5613,
        "eventCount": 181370,
        "userEngagementDuration": 3090024,
        "totalEngagementHours": 858.34,
        "date": "2026-09-18",
        "label": "Sep 18"
      }
    ],
    "note": "Daily GA4 rows for the latest 28 complete days (Aug 22-Sep 18, 2026); Internal GA4 pull, property 497892271."
  },
  "appSectionUsage": {
    "period": "Sep 12-Sep 18, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "items": [
      {
        "section": "Home / Browse",
        "activeUsers": 2859,
        "sessions": 6216,
        "eventCount": 126650,
        "userEngagementDuration": 1826496,
        "avgEngagedMinutesPerUser": 10.6,
        "avgEngagedMinutesPerSession": 4.9,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: Home Page, ElectricNOW, Intro, Splash. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "views": 21776,
        "screenPageViews": 21776
      },
      {
        "section": "On Demand / TVOD",
        "activeUsers": 1455,
        "sessions": 3769,
        "eventCount": 13542,
        "userEngagementDuration": 243611,
        "avgEngagedMinutesPerUser": 2.8,
        "avgEngagedMinutesPerSession": 1.1,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: PDP, On Demand, Category, Purchases, Continue Watching, My List. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "views": 8909,
        "screenPageViews": 8909
      },
      {
        "section": "Player",
        "activeUsers": 714,
        "sessions": 2585,
        "eventCount": 60450,
        "userEngagementDuration": 4418855,
        "avgEngagedMinutesPerUser": 103.1,
        "avgEngagedMinutesPerSession": 28.5,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: Player. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "views": 3922,
        "screenPageViews": 3922
      },
      {
        "section": "Live TV",
        "activeUsers": 514,
        "sessions": 1789,
        "eventCount": 13392,
        "userEngagementDuration": 3825076,
        "avgEngagedMinutesPerUser": 124.0,
        "avgEngagedMinutesPerSession": 35.6,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: Live. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "views": 1829,
        "screenPageViews": 1829
      },
      {
        "section": "Account / Settings",
        "activeUsers": 154,
        "sessions": 185,
        "eventCount": 1155,
        "userEngagementDuration": 6395,
        "avgEngagedMinutesPerUser": 0.7,
        "avgEngagedMinutesPerSession": 0.6,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: Settings, Manage Profile, My Favorites, My Reactions, About Us. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "views": 673,
        "screenPageViews": 673
      },
      {
        "section": "Search",
        "activeUsers": 236,
        "sessions": 397,
        "eventCount": 2016,
        "userEngagementDuration": 8625,
        "avgEngagedMinutesPerUser": 0.6,
        "avgEngagedMinutesPerSession": 0.4,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: Search Channels. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "views": 670,
        "screenPageViews": 670
      }
    ],
    "rows": [
      {
        "section": "Home / Browse",
        "activeUsers": 2859,
        "sessions": 6216,
        "eventCount": 126650,
        "userEngagementDuration": 1826496,
        "avgEngagedMinutesPerUser": 10.6,
        "avgEngagedMinutesPerSession": 4.9,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: Home Page, ElectricNOW, Intro, Splash. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 21776,
        "views": 21776
      },
      {
        "section": "On Demand / TVOD",
        "activeUsers": 1455,
        "sessions": 3769,
        "eventCount": 13542,
        "userEngagementDuration": 243611,
        "avgEngagedMinutesPerUser": 2.8,
        "avgEngagedMinutesPerSession": 1.1,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: PDP, On Demand, Category, Purchases, Continue Watching, My List. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 8909,
        "views": 8909
      },
      {
        "section": "Player",
        "activeUsers": 714,
        "sessions": 2585,
        "eventCount": 60450,
        "userEngagementDuration": 4418855,
        "avgEngagedMinutesPerUser": 103.1,
        "avgEngagedMinutesPerSession": 28.5,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: Player. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 3922,
        "views": 3922
      },
      {
        "section": "Live TV",
        "activeUsers": 514,
        "sessions": 1789,
        "eventCount": 13392,
        "userEngagementDuration": 3825076,
        "avgEngagedMinutesPerUser": 124.0,
        "avgEngagedMinutesPerSession": 35.6,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: Live. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 1829,
        "views": 1829
      },
      {
        "section": "Account / Settings",
        "activeUsers": 154,
        "sessions": 185,
        "eventCount": 1155,
        "userEngagementDuration": 6395,
        "avgEngagedMinutesPerUser": 0.7,
        "avgEngagedMinutesPerSession": 0.6,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: Settings, Manage Profile, My Favorites, My Reactions, About Us. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 673,
        "views": 673
      },
      {
        "section": "Search",
        "activeUsers": 236,
        "sessions": 397,
        "eventCount": 2016,
        "userEngagementDuration": 8625,
        "avgEngagedMinutesPerUser": 0.6,
        "avgEngagedMinutesPerSession": 0.4,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Sep 12-Sep 18, 2026",
        "definition": "GA4 screens rolled in: Search Channels. Users and sessions are the max across those screens, not a sum, because GA4 users and sessions are not additive across screens; views, events and engaged time are summed.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 670,
        "views": 670
      }
    ],
    "note": "Grouped from GA4 screen/page names for Sep 12-Sep 18, 2026 (Internal GA4 pull, property 497892271). Landing-page traffic is treated as acquisition, not platform audience. 'items' and 'rows' are kept in sync because different renderer builds read different keys."
  },
  "rokuAppEngagement": {
    "newInstalls": 218,
    "uninstalls": 88,
    "cumulativeInstalls": 291877,
    "avgDailyViewers": 444,
    "avgMinutesPerViewer": 86.11,
    "avgMinPerViewer": 86.11,
    "totalHoursStreamed": 4456,
    "period": "Sep 6-Sep 12, 2026 (Roku email generated September 14, 2026 at 6:58 AM PDT; Roku reports Sun-Sat, one day offset from the dashboard week)",
    "reportPeriod": "Sep 6-Sep 12, 2026",
    "source": "Roku App Engagement email from bdp_noreply@data.roku.com",
    "emailDate": "2026-09-14T13:58:17+00:00",
    "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwDvKLV_nde7SYUl0H8b5z1dAAPKm0PlAADvKLV_nde7SYUl0H8b5z1dAAP3FDbFAAA=",
    "status": "stale_preserved_attachment_unavailable",
    "priorPeriod": {
      "period": "Aug 30-Sep 5, 2026",
      "newInstalls": 241,
      "uninstalls": 90,
      "cumulativeInstallsToDate": 291663,
      "avgDailyViewers": 440,
      "avgMinPerViewer": 84.31,
      "totalHoursStreamed": 4324
    },
    "note": "Roku App Engagement is separate from GA4 and should be read as Roku-side app engagement, not total ElectricNOW platform usage.",
    "trcExclusionNote": "Roku TRC emails are for the separate Roku live-channel surface outside the ElectricNOW app and are excluded from app/platform usage.",
    "staleNote": "Last processed Roku App Engagement report covers Sep 6-Sep 12, 2026; a newer report was not obtained this run. NOT current."
  },
  "visitSummary": {
    "currentWeek": {
      "activeUsers": 3871,
      "newUsers": 978,
      "sessions": 9659,
      "engagedSessions": 6658,
      "engagementRate": 68.93,
      "screenPageViews": 42988,
      "eventCount": 1007206,
      "userEngagementDuration": 20471008,
      "totalEngagementHours": 5686.39,
      "avgEngagedMinutesPerUser": 88.13832773615776,
      "avgEngagedMinutesPerSession": 35.322856058253095
    },
    "previousWeek": {
      "activeUsers": 4076,
      "newUsers": 1102,
      "sessions": 9864,
      "engagedSessions": 8178,
      "engagementRate": 82.91,
      "screenPageViews": 49830,
      "eventCount": 990331,
      "userEngagementDuration": 22768107,
      "totalEngagementHours": 6324.47,
      "avgEngagedMinutesPerUser": 93.09824582924436,
      "avgEngagedMinutesPerSession": 38.47003751013788
    },
    "rolling28Current": {
      "activeUsers": 12315,
      "newUsers": 4944,
      "sessions": 40695,
      "engagedSessions": 31697,
      "engagementRate": 77.89,
      "screenPageViews": 207703,
      "eventCount": 4028429,
      "userEngagementDuration": 89075712,
      "totalEngagementHours": 24743.25,
      "avgEngagedMinutesPerUser": 120.55178237921234,
      "avgEngagedMinutesPerSession": 36.48102223860425
    },
    "rolling28Previous": {
      "activeUsers": 15370,
      "newUsers": 8353,
      "sessions": 51034,
      "engagedSessions": 41656,
      "engagementRate": 81.62,
      "screenPageViews": 200128,
      "eventCount": 4330119,
      "userEngagementDuration": 88940323,
      "totalEngagementHours": 24705.65,
      "avgEngagedMinutesPerUser": 96.44363803947083,
      "avgEngagedMinutesPerSession": 29.04610096536949
    },
    "source": "Internal GA4 pull, property 497892271",
    "period": "Sep 12-Sep 18, 2026",
    "rolling28Period": "Aug 22-Sep 18, 2026",
    "rolling28PreviousPeriod": "Jul 25-Aug 21, 2026",
    "weekly": {
      "label": "This week",
      "sessions": 9659.0,
      "activeUsers": 3871.0,
      "engagedSessions": 6658.0,
      "range": null,
      "deltaVsPreviousPct": -2.08,
      "comparisonLabel": "vs previous week"
    },
    "monthly": {
      "label": "Rolling 28 days",
      "sessions": 40695.0,
      "activeUsers": 12315.0,
      "engagedSessions": 31697.0,
      "range": null,
      "deltaVsPreviousPct": -20.26,
      "comparisonLabel": "vs previous 28 days",
      "rollingWindowLabel": "Rolling 28 days"
    }
  },
  "manualAppleSalesUpdate": {
    "downloads": 85,
    "displayDownloads": "85",
    "updates": null,
    "displayUpdates": null,
    "inAppUnits": null,
    "totalUnits": 85,
    "dailyAverage": 12.1,
    "start": "2026-09-12",
    "end": "2026-09-18",
    "period": "Sep 12-Sep 18, 2026",
    "priorDownloads": 126,
    "priorPeriod": "Sep 7-Sep 13, 2026 (overlapping snapshot)",
    "deltaPct": -32.54,
    "product": "ElectricNOW",
    "platform": "iOS/watchOS/tvOS (+ macOS categories at 0)",
    "territories": [
      {
        "territory": "All territories; no unit breakdown supplied",
        "downloads": 85,
        "deltaPct": null
      }
    ],
    "sourceLabel": "Manual Apple App Store Connect snapshot",
    "sourceDetail": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable.",
    "sourceScreenshots": [
      {
        "metric": "sales",
        "path": "uploaded_attachments/926c8388451146eba4c837e76f7ce41f/image.jpeg"
      },
      {
        "metric": "units",
        "path": "uploaded_attachments/926c8388451146eba4c837e76f7ce41f/image-1.jpeg"
      }
    ],
    "salesGross": 294.95,
    "salesEstimatedNet70Pct": 206.46,
    "salesDaily": [],
    "downloadsDaily": [
      {
        "date": "2026-09-12",
        "label": "Sep 12",
        "downloads": 17,
        "estimated": false
      },
      {
        "date": "2026-09-13",
        "label": "Sep 13",
        "downloads": 16,
        "estimated": false
      },
      {
        "date": "2026-09-14",
        "label": "Sep 14",
        "downloads": 12,
        "estimated": false
      },
      {
        "date": "2026-09-15",
        "label": "Sep 15",
        "downloads": 15,
        "estimated": false
      },
      {
        "date": "2026-09-16",
        "label": "Sep 16",
        "downloads": 6,
        "estimated": false
      },
      {
        "date": "2026-09-17",
        "label": "Sep 17",
        "downloads": 10,
        "estimated": false
      },
      {
        "date": "2026-09-18",
        "label": "Sep 18",
        "downloads": 9,
        "estimated": false
      }
    ],
    "salesDeltaPct": 22.45,
    "updatedAtUtc": "2026-09-19T15:38:20.670567+00:00",
    "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable.",
    "priorTotalUnits": 126,
    "priorInAppUnits": null,
    "priorSalesGross": 240.88,
    "downloadsDailyNote": "Daily unit counts are read from the App Store Connect daily list (total units; free / in-app split not shown this week).",
    "status": "fresh_manual",
    "salesComparisonPeriod": "Sep 5-Sep 11, 2026"
  },
  "googleAdsSummary": {
    "source": "Google Ads connector (API v25)",
    "accountId": "4342267711",
    "customerClientId": "4342267711",
    "accountName": "Electric Entertainment",
    "period": "Sep 12-Sep 18, 2026",
    "campaignName": "PCSM - ElectricNow App Promotion - Android",
    "campaignId": "23836266606",
    "campaignType": "MULTI_CHANNEL",
    "status": "fresh_no_delivery",
    "impressions": 0,
    "clicks": 0,
    "ctrPct": null,
    "cost": 0,
    "avgCpc": null,
    "conversions": 0,
    "allConversions": 0,
    "conversionRatePct": null,
    "costPerConversion": null,
    "daily": [],
    "deviceBreakout": [],
    "conversionActions": [],
    "plainEnglish": "Fresh Google Ads connector query for Sep 12-Sep 18 and Sep 5-Sep 11 returned no delivery rows: no reported spend, impressions, clicks or conversions in either window. This is paid acquisition, not in-app ad delivery.",
    "dataFreshnessNote": "Fresh Google Ads connector query for Sep 12-Sep 18 and Sep 5-Sep 11 returned no delivery rows: no reported spend, impressions, clicks or conversions in either window. This is paid acquisition, not in-app ad delivery.",
    "statusDetail": "OK_ZERO_ROWS",
    "lastSuccessfulPull": "2026-09-19T15:38:20.670567+00:00",
    "staleNote": null,
    "latestQueryPeriod": "Sep 12-Sep 18, 2026",
    "latestQueryStatus": "OK_ZERO_ROWS",
    "latestQueryNote": "Fresh Google Ads connector query for Sep 12-Sep 18 and Sep 5-Sep 11 returned no delivery rows: no reported spend, impressions, clicks or conversions in either window. This is paid acquisition, not in-app ad delivery.",
    "currentPeriod": {
      "period": "Sep 12-Sep 18, 2026",
      "spend": 0,
      "impressions": 0,
      "clicks": 0,
      "conversions": 0,
      "allConversions": 0
    },
    "freshness": "Fresh Google Ads connector query for Sep 12-Sep 18 and Sep 5-Sep 11 returned no delivery rows: no reported spend, impressions, clicks or conversions in either window. This is paid acquisition, not in-app ad delivery.",
    "attemptedPeriod": "Sep 12-Sep 18, 2026",
    "sourceStatus": "fresh_zero_delivery",
    "updatedAt": "2026-09-19T15:38:20.670567+00:00",
    "zeroIsReal": true,
    "note": "Google Ads API returned no delivery rows for Sep 12-18 or Sep 5-11, 2026. Zero delivery is verified, not a failed pull.",
    "lastAvailableData": {
      "note": "Context only - NOT the reporting period. Final full week with delivery: 2026-05-30 to 2026-06-05. Impressions below are PAID-CAMPAIGN impressions from Google Ads, distinct from ElectricNOW in-app ad impressions.",
      "period": {
        "start": "2026-05-30",
        "end": "2026-06-05"
      },
      "campaign": {
        "id": "23836266606",
        "name": "PCSM - ElectricNow App Promotion - Android",
        "status": "ENABLED",
        "channelType": "MULTI_CHANNEL"
      },
      "totals": {
        "paidCampaignImpressions": 16434,
        "clicks": 478,
        "spendUsd": 114.922571,
        "conversions_androidFirstOpens": 204,
        "allConversions": 394
      },
      "deviceBreakout": [
        {
          "device": "MOBILE",
          "paidCampaignImpressions": 13114,
          "clicks": 380,
          "spendUsd": 90.649771,
          "ctr": 0.028976666158304104,
          "avgCpcUsd": 0.238552028947,
          "conversions": 159,
          "conversionRate": 0.06445074989866234,
          "costPerConversionUsd": 0.5701243459119496,
          "allConversions": 314
        },
        {
          "device": "TABLET",
          "paidCampaignImpressions": 3314,
          "clicks": 98,
          "spendUsd": 24.239304,
          "ctr": 0.029571514785757393,
          "avgCpcUsd": 0.24733983673469387,
          "conversions": 45,
          "conversionRate": 0.05102040816326531,
          "costPerConversionUsd": 0.5386512,
          "allConversions": 80
        },
        {
          "device": "CONNECTED_TV",
          "paidCampaignImpressions": 6,
          "clicks": 0,
          "spendUsd": 0.033496,
          "ctr": 0.0,
          "avgCpcUsd": null,
          "conversions": 0,
          "conversionRate": 0.0,
          "costPerConversionUsd": null,
          "allConversions": 0
        }
      ],
      "conversionActions": [
        {
          "conversionActionName": "electricnow-4fbb4 - com.electric.now (Android) First open",
          "conversions": 204,
          "allConversions": 227
        },
        {
          "conversionActionName": "Android installs (all other apps)",
          "conversions": 0,
          "allConversions": 167
        }
      ]
    },
    "impressionsLabel": "paid-campaign impressions (distinct from ElectricNOW in-app ad impressions)"
  },
  "adSuccessSummary": {
    "googleAds": {
      "period": "Sep 12-Sep 18, 2026",
      "campaignName": "PCSM - ElectricNow App Promotion - Android",
      "spend": 0.0,
      "impressions": 0,
      "clicks": 0,
      "ctrPct": null,
      "avgCpc": null,
      "firstOpenConversions": 0,
      "allConversions": 0,
      "conversionRatePct": null,
      "costPerConversion": null,
      "source": "Google Ads connector (API v25)",
      "note": "Fresh Google Ads connector query for Sep 12-Sep 18 and Sep 5-Sep 11 returned no delivery rows: no reported spend, impressions, clicks or conversions in either window. This is paid acquisition, not in-app ad delivery.",
      "status": "fresh_no_delivery"
    },
    "metaAds": {
      "period": "Aug 4-Aug 26, 2026 (historical completed flight)",
      "spend": 11667.32,
      "impressions": 2491673,
      "clicks": 18890,
      "ctrPct": 0.76,
      "downloads": 1032,
      "costPerDownload": 11.31,
      "iosDownloads": 1008,
      "androidDownloads": 24,
      "source": "Meta Ads (Forge One / nathan@pcsocialmedia.com, Meta-only report)",
      "note": "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero.",
      "reportedPlatformDownloads": 0,
      "metaAppInstallsFromBreakdown": 0,
      "status": "stale_historical_context"
    },
    "period": "Sep 12-Sep 18, 2026",
    "verdict": "needs proof of viewing; current Meta activity unverified",
    "plainEnglish": "Verdict: needs proof of viewing. (1) Paid ads have not been demonstrated to grow sustained viewing this week: Google reports no delivery and current Meta activity is unverified. (2) Historical Meta blended cost of $11.31 per download remains a concern without retention evidence; current costs cannot be assessed. (3) No new targeting improvement is established. (4) Meta has historical delivery; Google has none this week, but there is no defensible current efficiency winner. (5) Only 18 of 9,659 GA4 sessions carry paid tags, and installs are not reliably linked to viewing or purchases. True ROAS cannot be stated because reconciled ad revenue and complete platform sales are unavailable. (6) Obtain current Meta data, test platforms and show-specific creative separately, measure install-to-first-play, investigate engagement loss, and reconcile Ionic revenue before scaling.",
    "recommendations": [
      "Patrick and Nathan: obtain a current Meta-only report before deciding whether to restart or expand spend.",
      "For any small acquisition test, separate iOS and Android, test Ark and Librarians creative, and optimize to first play and sustained viewing, not installs alone.",
      "Michael/DotStudios: investigate the 14-point drop in GA4 engagement rate and reconcile ad delivery with Ionic paid revenue.",
      "Reconcile the $20.99 Stripe/web discrepancy and Apple gross versus DotStudios apple before using source checks as settled revenue.",
      "Recover the latest Roku report attachments; keep stale Roku and delayed YouTube figures clearly labeled."
    ],
    "googleAdsStatus": "fresh_no_delivery",
    "googleAdsNote": "Fresh Google Ads connector query for Sep 12-Sep 18 and Sep 5-Sep 11 returned no delivery rows: no reported spend, impressions, clicks or conversions in either window. This is paid acquisition, not in-app ad delivery.",
    "status": "mixed_fresh_google_historical_meta",
    "freshness": "Fresh Google Ads connector query for Sep 12-Sep 18 and Sep 5-Sep 11 returned no delivery rows: no reported spend, impressions, clicks or conversions in either window. This is paid acquisition, not in-app ad delivery. Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero.",
    "attemptedPeriod": "Sep 12-Sep 18, 2026",
    "sourceStatus": "mixed_fresh_google_historical_meta",
    "updatedAt": "2026-09-19T15:38:20.670567+00:00"
  },
  "metaAdsSummary": {
    "source": "Meta Ads (Forge One / nathan@pcsocialmedia.com, Meta-only report)",
    "reportType": "Meta Ads Campaign Conclusion (flight total, Meta-only)",
    "emailFrom": "nathan@pcsocialmedia.com",
    "emailTo": "DeanD@electricentertainment.com",
    "emailSubject": "Re: Meta Ads Campaign Conclusion",
    "emailDate": "2026-08-27T22:37:41+00:00",
    "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAPrmtE5AAA=",
    "reportLink": "https://app.forgeonemarketing.com/r/b07aa271-deff-40c8-81e5-86bd440af687",
    "reportCadence": "Twice weekly (Sundays and Thursdays at 6am PST/PDT), each report covers Last 7 days",
    "period": "Aug 1-Aug 27, 2026 report header; media flight Aug 4-Aug 26, 2026",
    "periodStart": "2026-08-04",
    "periodEnd": "2026-08-26",
    "comparison": "vs prior Meta report period",
    "spend": 11667.32,
    "impressions": 2491673,
    "linkClicks": 18890,
    "costPerClick": 0.62,
    "iosDownloads": 1008,
    "androidDownloads": 24,
    "totalDownloads": 1032,
    "costPerIosDownload": null,
    "costPerAndroidDownload": null,
    "costPerDownload": 11.31,
    "ctrPct": 0.76,
    "deltas": {},
    "campaigns": [
      {
        "campaign": "PCSM - ElectricNow App - iOS - The Ark - Purchase Event - August 2026",
        "spend": 4118.21,
        "appInstalls": 282,
        "costPerAppInstall": 14.6,
        "cpm": 12.88,
        "clicks": 5610,
        "actionActivateApp": 14
      },
      {
        "campaign": "PCSM - ElectricNow App - iOS - The Ark - Purchase Event - August 2026 - App Installs",
        "spend": 2048.07,
        "appInstalls": 344,
        "costPerAppInstall": 5.95,
        "cpm": 12.88,
        "clicks": 4027,
        "actionActivateApp": 1
      },
      {
        "campaign": "PCSM - Awareness - ComicBooks.Com - ARK Push",
        "spend": 2002.53,
        "appInstalls": 16,
        "costPerAppInstall": 125.16,
        "cpm": 1.69,
        "clicks": 8827,
        "actionActivateApp": 68
      },
      {
        "campaign": "PCSM - ElectricNow App - iOS - The Librarians - Purchase Event - August 2026 - App Installs",
        "spend": 1820.9,
        "appInstalls": 322,
        "costPerAppInstall": 5.65,
        "cpm": 14.29,
        "clicks": 3396,
        "actionActivateApp": 13
      },
      {
        "campaign": "PCSM - Awareness - Librarians",
        "spend": 1125.1,
        "appInstalls": 8,
        "costPerAppInstall": 140.64,
        "cpm": 1.7,
        "clicks": 3600,
        "actionActivateApp": 49
      },
      {
        "campaign": "PCSM - ElectricNow App - iOS - The Librarians - Purchase Event - August 2026",
        "spend": 552.51,
        "appInstalls": 60,
        "costPerAppInstall": 9.21,
        "cpm": 14.42,
        "clicks": 679,
        "actionActivateApp": 4
      }
    ],
    "genderBreakdown": {
      "female": {
        "installs": 320,
        "spend": 3748.37
      },
      "male": {
        "installs": 709,
        "spend": 7822.13
      },
      "unknown": {
        "installs": 3,
        "spend": 96.82
      },
      "note": "Aggregated by summing the four ad-level gender rows in the Forge One Ad Report for the concluded Aug 1-27, 2026 flight (prior flight context, not a weekly figure). Installs sum to 1,032 and spend to $11,667.32, matching report headline totals. Per-title skews stated by Nathan: The Ark 83.5% male installs at $9.26 CPI; The Librarians 54.7% female installs at $5.83 CPI, male 45.3% at $6.54 CPI."
    },
    "ageBreakdown": {
      "18-24": {
        "installs": 2,
        "spend": 177.63
      },
      "25-34": {
        "installs": 26,
        "spend": 949.41
      },
      "35-44": {
        "installs": 115,
        "spend": 1901.7
      },
      "45-54": {
        "installs": 251,
        "spend": 2582.63
      },
      "55-64": {
        "installs": 325,
        "spend": 3146.91
      },
      "65+": {
        "installs": 313,
        "spend": 2907.98
      },
      "unknown": {
        "installs": 0,
        "spend": 1.06
      },
      "note": "Prior flight context (Aug 4-Aug 26, 2026 Meta flight), not a weekly figure. Aggregated from the four ad-level age rows; installs sum to 1,032 and spend to $11,667.32. Ages 45-65+ = 889 of 1,032 installs (86.1%). 65+ had best CTR (3.24% Librarians, 2.75% Ark) and lowest CPI ($5.32-$8.14)."
    },
    "plainEnglish": "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero.",
    "paidAcquisitionInterpretation": "Verdict: needs proof of viewing. (1) Paid ads have not been demonstrated to grow sustained viewing this week: Google reports no delivery and current Meta activity is unverified. (2) Historical Meta blended cost of $11.31 per download remains a concern without retention evidence; current costs cannot be assessed. (3) No new targeting improvement is established. (4) Meta has historical delivery; Google has none this week, but there is no defensible current efficiency winner. (5) Only 18 of 9,659 GA4 sessions carry paid tags, and installs are not reliably linked to viewing or purchases. True ROAS cannot be stated because reconciled ad revenue and complete platform sales are unavailable. (6) Obtain current Meta data, test platforms and show-specific creative separately, measure install-to-first-play, investigate engagement loss, and reconcile Ionic revenue before scaling.",
    "threadId": "AAQkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOAAQAIBt6Dqvj9JKvIVO2AKlKos=",
    "reportedPlatformDownloads": 1032,
    "blendedCostPerReportedDownload": 11.31,
    "metaAppInstallsFromBreakdown": 1032,
    "downloadGrainNote": "The historical Aug 4-Aug 26 flight reported 1,032 installs. These are not current-week installs, paid sales or proven viewers.",
    "previousPeriod": {
      "period": "Jul 2-Jul 8, 2026",
      "spend": 40.8,
      "impressions": 2539,
      "linkClicks": 251,
      "costPerClick": 0.15,
      "iosDownloads": 23,
      "androidDownloads": 0,
      "costPerIosDownload": 1.77
    },
    "strategyNote": "Historical campaign mix is retained as context. Obtain current Meta spend and install-to-viewing results before choosing or scaling the next test.",
    "status": "stale_historical_context",
    "note": "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero.",
    "staleNote": "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero.",
    "lastCheckedAt": "2026-09-19T15:38:20.670567+00:00",
    "dataFreshnessNote": "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero.",
    "freshness": "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero.",
    "attemptedPeriod": "Sep 12-Sep 18, 2026",
    "sourceStatus": "stale_historical_context",
    "updatedAt": "2026-09-19T15:38:20.670567+00:00",
    "periodCaveat": "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero.",
    "reach": 1553625,
    "ctr": "1.05% (CTR ALL, Forge One ad report headline)",
    "cpc": 0.45,
    "cpm": 4.68,
    "downloadsSplitMethod": "The report does not print an explicit iOS/Android download line. iOS = iphone+ipad install rows across all four ads (602+24+359+23 = 1,008); Android = android_smartphone install rows (16+8 = 24). 1,008+24 = 1,032, matching the reported APP INSTALLS headline. App-install campaigns were deliberately iOS-only; the 24 Android installs came from the boosted-article awareness ads.",
    "impressionsLabel": "paid-campaign impressions (distinct from ElectricNOW in-app ad impressions)",
    "flightEnded": true,
    "dashboardWeek": "Sep 12-Sep 18, 2026",
    "weekNote": "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero."
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
      "status": "removed_from_dashboard_refresh",
      "note": "Legacy comparison using a non-approved GA4 property was removed. Dashboard GA4 reporting uses property 497892271 only."
    },
    "note": "GA4 detected $29.98 of Android in-app purchase activity on May 21, 2026 across 2 in_app_purchase events (1 Android mobile in Philadelphia at appVersion 16.019; 1 Android smart TV in Vancouver, WA at appVersion 16.026). This is most likely Google Play / Android billing. It is shown separately from Stripe, Roku, and the manual Apple App Store snapshot and is NOT included in visible platform sales until it is reconciled with Google Play Console."
  },
  "manualAppleDownloads": {
    "downloads": 85,
    "displayDownloads": "85",
    "updates": null,
    "displayUpdates": null,
    "inAppUnits": null,
    "totalUnits": 85,
    "dailyAverage": 12.1,
    "start": "2026-09-12",
    "end": "2026-09-18",
    "period": "Sep 12-Sep 18, 2026",
    "priorDownloads": 126,
    "priorPeriod": "Sep 7-Sep 13, 2026 (overlapping snapshot)",
    "deltaPct": -32.54,
    "product": "ElectricNOW",
    "platform": "iOS/watchOS/tvOS (+ macOS categories at 0)",
    "territories": [
      {
        "territory": "All territories; no unit breakdown supplied",
        "downloads": 85,
        "deltaPct": null
      }
    ],
    "sourceLabel": "Manual Apple App Store Connect snapshot",
    "sourceDetail": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable.",
    "sourceScreenshots": [
      {
        "metric": "sales",
        "path": "uploaded_attachments/926c8388451146eba4c837e76f7ce41f/image.jpeg"
      },
      {
        "metric": "units",
        "path": "uploaded_attachments/926c8388451146eba4c837e76f7ce41f/image-1.jpeg"
      }
    ],
    "salesGross": 294.95,
    "salesEstimatedNet70Pct": 206.46,
    "salesDaily": [],
    "downloadsDaily": [
      {
        "date": "2026-09-12",
        "label": "Sep 12",
        "downloads": 17,
        "estimated": false
      },
      {
        "date": "2026-09-13",
        "label": "Sep 13",
        "downloads": 16,
        "estimated": false
      },
      {
        "date": "2026-09-14",
        "label": "Sep 14",
        "downloads": 12,
        "estimated": false
      },
      {
        "date": "2026-09-15",
        "label": "Sep 15",
        "downloads": 15,
        "estimated": false
      },
      {
        "date": "2026-09-16",
        "label": "Sep 16",
        "downloads": 6,
        "estimated": false
      },
      {
        "date": "2026-09-17",
        "label": "Sep 17",
        "downloads": 10,
        "estimated": false
      },
      {
        "date": "2026-09-18",
        "label": "Sep 18",
        "downloads": 9,
        "estimated": false
      }
    ],
    "salesDeltaPct": 22.45,
    "updatedAtUtc": "2026-09-19T15:38:20.670567+00:00",
    "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable.",
    "priorTotalUnits": 126,
    "priorInAppUnits": null,
    "priorSalesGross": 240.88,
    "downloadsDailyNote": "Daily unit counts are read from the App Store Connect daily list (total units; free / in-app split not shown this week).",
    "status": "fresh_manual",
    "salesComparisonPeriod": "Sep 5-Sep 11, 2026"
  },
  "manualDataPatch": {
    "updatedAt": "2026-09-19 13:00 PDT",
    "period": "Sep 12-Sep 18, 2026",
    "dotStudiosTvod": {
      "file": "manual_dotstudios/2026-09-19/revenue-transactions.csv",
      "status": "fresh_manual",
      "period": "Sep 12-Sep 18, 2026",
      "paidTx": 32,
      "grossNet": 669.66,
      "nonPaidRows": 0,
      "priorPaidTx": 43,
      "priorGrossNet": 891.57,
      "byDevice": {
        "android": {
          "tx": 11,
          "net": 230.89
        },
        "apple": {
          "tx": 14,
          "net": 291.84
        },
        "roku": {
          "tx": 1,
          "net": 20.99
        },
        "web": {
          "tx": 6,
          "net": 125.94
        }
      },
      "byTitle": {
        "The Ark": {
          "tx": 15,
          "net": 314.85
        },
        "The Librarians": {
          "tx": 15,
          "net": 314.85
        },
        "leverage - season 2": {
          "tx": 1,
          "net": 19.98
        },
        "leverage - season 1": {
          "tx": 1,
          "net": 19.98
        }
      },
      "byProduct": {
        "Season Pass": 30,
        "Purchase Bundle 20": 2
      },
      "byDay": {
        "2026-09-12": {
          "tx": 6,
          "net": 125.94
        },
        "2026-09-13": {
          "tx": 7,
          "net": 146.93
        },
        "2026-09-14": {
          "tx": 4,
          "net": 83.96
        },
        "2026-09-15": {
          "tx": 4,
          "net": 82.95
        },
        "2026-09-16": {
          "tx": 1,
          "net": 20.99
        },
        "2026-09-17": {
          "tx": 5,
          "net": 103.94
        },
        "2026-09-18": {
          "tx": 5,
          "net": 104.95
        }
      },
      "uniqueCustomers": 30,
      "comparisonPeriod": "Sep 5-Sep 11, 2026"
    },
    "apple": {
      "status": "fresh_manual",
      "period": "Sep 12-Sep 18, 2026",
      "units": 85,
      "freeDownloads": null,
      "inAppUnits": null,
      "paidUnits": null,
      "unitsSplitAvailable": false,
      "dailyAverage": 12.14,
      "salesGross": 294.95,
      "salesDaily": {},
      "unitsDaily": {
        "2026-09-12": 17,
        "2026-09-13": 16,
        "2026-09-14": 12,
        "2026-09-15": 15,
        "2026-09-16": 6,
        "2026-09-17": 10,
        "2026-09-18": 9
      },
      "priorUnits": 126,
      "priorSalesGross": 240.88,
      "salesDeltaPct": 22.45,
      "unitsDeltaPct": -32.54,
      "screenshots": [
        "uploaded_attachments/926c8388451146eba4c837e76f7ce41f/image.jpeg",
        "uploaded_attachments/926c8388451146eba4c837e76f7ce41f/image-1.jpeg"
      ],
      "note": "Sales are $294.95 from exact product totals ($251.88 + $43.07); screenshot headline rounds to $295. Daily sales amounts are unavailable, so no daily split is estimated. 85 daily-list total units; free/in-app split not supplied. Screenshot sales change is +22% (rounded).",
      "territorySales": [
        {
          "territory": "United States",
          "gross": 251.88
        },
        {
          "territory": "Australia",
          "gross": 43.07
        }
      ],
      "unitsComparisonPeriod": "Sep 7-Sep 13, 2026 (last uploaded snapshot; overlapping window)"
    },
    "rokuSales": {
      "gross": 197.91,
      "transactions": 9
    },
    "rokuAppEngagement": {
      "newInstalls": 267,
      "avgDailyViewers": 418,
      "totalHoursStreamed": 3729
    },
    "note": "DotStudios TVOD OVERLAPS Apple/Stripe/Roku/Android/Web - it is a source cross-check, NOT additive to visible platform sales."
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
    "period": "Sep 12-Sep 18, 2026",
    "comparisonPeriod": "Sep 5-Sep 11, 2026",
    "overview": "Apple gross sales improved to $294.95, up 22.45% against the preceding seven days, and DotStudios reports stronger ad delivery. Overall usage and title sales softened: GA4 users fell 5.0%, sessions fell 2.1%, and engagement rate dropped from 82.91% to 68.93%. DotStudios TVOD was $669.66 from 32 purchases, down 24.9% in value versus Sep 5-Sep 11. Reported ad impressions are not verified ad income.",
    "bullets": [
      "Audience: 3,871 GA4 active users and 9,659 sessions. Engaged sessions fell 18.6%; the engagement-rate decline needs investigation rather than a claim of deeper viewing.",
      "Viewing: 14,500 GA4 video starts versus 16,084; deduplicated on-demand starters 957 versus 1,120 and live-channel viewers 443 versus 514. Live starts held at 3,751 versus 3,738. Live/FAST channels remain excluded from on-demand rankings.",
      "DotStudios: 14,674 video views, 709 installs and 687 updates. The export comparisons use the overlapping Sep 7-Sep 13 snapshot, not a true week-over-week period; installs and views are separate from GA4 audience.",
      "In-app ads: DotStudios reports 31,226 requests, 29,769 impressions and 1,456 errors (95.3% impressions/requests). Counts remain provisional pending vendor reconciliation; Ionic is required to verify paid revenue. These are not paid-acquisition impressions.",
      "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
      "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable.",
      "Verdict: needs proof of viewing. (1) Paid ads have not been demonstrated to grow sustained viewing this week: Google reports no delivery and current Meta activity is unverified. (2) Historical Meta blended cost of $11.31 per download remains a concern without retention evidence; current costs cannot be assessed. (3) No new targeting improvement is established. (4) Meta has historical delivery; Google has none this week, but there is no defensible current efficiency winner. (5) Only 18 of 9,659 GA4 sessions carry paid tags, and installs are not reliably linked to viewing or purchases. True ROAS cannot be stated because reconciled ad revenue and complete platform sales are unavailable. (6) Obtain current Meta data, test platforms and show-specific creative separately, measure install-to-first-play, investigate engagement loss, and reconcile Ionic revenue before scaling.",
      "Source limitations: Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals. Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero. YouTube revenue covers only Sep 12-Sep 16; its comparison matches five days on each side.",
      "Next actions: Patrick and Nathan: obtain a current Meta-only report before deciding whether to restart or expand spend. For any small acquisition test, separate iOS and Android, test Ark and Librarians creative, and optimize to first play and sustained viewing, not installs alone. Michael/DotStudios: investigate the 14-point drop in GA4 engagement rate and reconcile ad delivery with Ionic paid revenue. Reconcile the $20.99 Stripe/web discrepancy and Apple gross versus DotStudios apple before using source checks as settled revenue. Recover the latest Roku report attachments; keep stale Roku and delayed YouTube figures clearly labeled."
    ],
    "paidAcquisitionAssessment": {
      "verdict": "needs proof of viewing; current Meta activity unverified",
      "summary": "Verdict: needs proof of viewing. (1) Paid ads have not been demonstrated to grow sustained viewing this week: Google reports no delivery and current Meta activity is unverified. (2) Historical Meta blended cost of $11.31 per download remains a concern without retention evidence; current costs cannot be assessed. (3) No new targeting improvement is established. (4) Meta has historical delivery; Google has none this week, but there is no defensible current efficiency winner. (5) Only 18 of 9,659 GA4 sessions carry paid tags, and installs are not reliably linked to viewing or purchases. True ROAS cannot be stated because reconciled ad revenue and complete platform sales are unavailable. (6) Obtain current Meta data, test platforms and show-specific creative separately, measure install-to-first-play, investigate engagement loss, and reconcile Ionic revenue before scaling.",
      "period": "Sep 12-Sep 18, 2026",
      "status": "mixed_fresh_google_historical_meta",
      "roasNote": "No true ROAS without reconciled revenue."
    },
    "sourceLabel": "Internal GA4 pull, property 497892271; source-labeled platform checks"
  },
  "youtubeSummary": {
    "source": "YouTube Analytics API (ElectricNOW channel UCTC_pLf6ZvhU_oZzpqJN1Mg)",
    "connectorStatus": "fresh_partial",
    "period": "Sep 12-Sep 18, 2026",
    "periodNote": "Revenue-aligned YouTube figures cover Sep 12-Sep 16 (5 days); Sep 17-Sep 18 are not available yet.",
    "currentPeriod": {
      "views": 201983,
      "estimatedMinutesWatched": 3168341,
      "estimatedRevenue": 2921.35,
      "estimatedAdRevenue": 2691.45,
      "adImpressions": 583865,
      "monetizedPlaybacks": 100799,
      "watchTimeMinutes": 3168341,
      "hoursWatched": 52805.68,
      "estimatedHoursWatched": 52805.68,
      "rowsThrough": "2026-09-16",
      "days": 5,
      "status": "fresh_partial"
    },
    "isPlatformSales": false,
    "revenueType": "YouTube ad income, not ElectricNOW app TVOD",
    "totals": {
      "views": 201983,
      "estimatedMinutesWatched": 3168341,
      "estimatedRevenue": 2921.35,
      "estimatedAdRevenue": 2691.45,
      "adImpressions": 583865,
      "monetizedPlaybacks": 100799,
      "watchTimeMinutes": 3168341,
      "hoursWatched": 52805.68,
      "estimatedHoursWatched": 52805.68
    },
    "kpis": {
      "views": 201983,
      "estimatedMinutesWatched": 3168341,
      "estimatedRevenue": 2921.35,
      "estimatedAdRevenue": 2691.45,
      "adImpressions": 583865,
      "monetizedPlaybacks": 100799,
      "watchTimeMinutes": 3168341,
      "hoursWatched": 52805.68,
      "estimatedHoursWatched": 52805.68
    },
    "dailyTrend": [
      {
        "date": "2026-09-05",
        "views": 52104,
        "estimatedMinutesWatched": 737515,
        "estimatedRevenue": 608.93,
        "estimatedAdRevenue": 552.31,
        "adImpressions": 130191,
        "monetizedPlaybacks": 22920,
        "watchTimeMinutes": 737515,
        "hoursWatched": 12291.92,
        "estimatedHoursWatched": 12291.92
      },
      {
        "date": "2026-09-06",
        "views": 50119,
        "estimatedMinutesWatched": 719098,
        "estimatedRevenue": 580.23,
        "estimatedAdRevenue": 524.11,
        "adImpressions": 127339,
        "monetizedPlaybacks": 22406,
        "watchTimeMinutes": 719098,
        "hoursWatched": 11984.97,
        "estimatedHoursWatched": 11984.97
      },
      {
        "date": "2026-09-07",
        "views": 47405,
        "estimatedMinutesWatched": 724407,
        "estimatedRevenue": 571.34,
        "estimatedAdRevenue": 512.5,
        "adImpressions": 125056,
        "monetizedPlaybacks": 22835,
        "watchTimeMinutes": 724407,
        "hoursWatched": 12073.45,
        "estimatedHoursWatched": 12073.45
      },
      {
        "date": "2026-09-08",
        "views": 44939,
        "estimatedMinutesWatched": 690676,
        "estimatedRevenue": 591.61,
        "estimatedAdRevenue": 539.84,
        "adImpressions": 125350,
        "monetizedPlaybacks": 22476,
        "watchTimeMinutes": 690676,
        "hoursWatched": 11511.27,
        "estimatedHoursWatched": 11511.27
      },
      {
        "date": "2026-09-09",
        "views": 42223,
        "estimatedMinutesWatched": 641509,
        "estimatedRevenue": 588.19,
        "estimatedAdRevenue": 540.91,
        "adImpressions": 120777,
        "monetizedPlaybacks": 21768,
        "watchTimeMinutes": 641509,
        "hoursWatched": 10691.82,
        "estimatedHoursWatched": 10691.82
      },
      {
        "date": "2026-09-10",
        "views": 48855,
        "estimatedMinutesWatched": 758564,
        "estimatedRevenue": 768.06,
        "estimatedAdRevenue": 711.25,
        "adImpressions": 146670,
        "monetizedPlaybacks": 25981,
        "watchTimeMinutes": 758564,
        "hoursWatched": 12642.73,
        "estimatedHoursWatched": 12642.73
      },
      {
        "date": "2026-09-11",
        "views": 42933,
        "estimatedMinutesWatched": 674597,
        "estimatedRevenue": 650.15,
        "estimatedAdRevenue": 599.58,
        "adImpressions": 127851,
        "monetizedPlaybacks": 22592,
        "watchTimeMinutes": 674597,
        "hoursWatched": 11243.28,
        "estimatedHoursWatched": 11243.28
      },
      {
        "date": "2026-09-12",
        "views": 42361,
        "estimatedMinutesWatched": 648106,
        "estimatedRevenue": 586.13,
        "estimatedAdRevenue": 543.48,
        "adImpressions": 121881,
        "monetizedPlaybacks": 20532,
        "watchTimeMinutes": 648106,
        "hoursWatched": 10801.77,
        "estimatedHoursWatched": 10801.77
      },
      {
        "date": "2026-09-13",
        "views": 40728,
        "estimatedMinutesWatched": 659925,
        "estimatedRevenue": 594.71,
        "estimatedAdRevenue": 548.78,
        "adImpressions": 120963,
        "monetizedPlaybacks": 21292,
        "watchTimeMinutes": 659925,
        "hoursWatched": 10998.75,
        "estimatedHoursWatched": 10998.75
      },
      {
        "date": "2026-09-14",
        "views": 38900,
        "estimatedMinutesWatched": 590721,
        "estimatedRevenue": 563.18,
        "estimatedAdRevenue": 519.66,
        "adImpressions": 111147,
        "monetizedPlaybacks": 19529,
        "watchTimeMinutes": 590721,
        "hoursWatched": 9845.35,
        "estimatedHoursWatched": 9845.35
      },
      {
        "date": "2026-09-15",
        "views": 40841,
        "estimatedMinutesWatched": 601739,
        "estimatedRevenue": 584.21,
        "estimatedAdRevenue": 536.64,
        "adImpressions": 112629,
        "monetizedPlaybacks": 19926,
        "watchTimeMinutes": 601739,
        "hoursWatched": 10028.98,
        "estimatedHoursWatched": 10028.98
      },
      {
        "date": "2026-09-16",
        "views": 39153,
        "estimatedMinutesWatched": 667850,
        "estimatedRevenue": 593.11,
        "estimatedAdRevenue": 542.88,
        "adImpressions": 117245,
        "monetizedPlaybacks": 19520,
        "watchTimeMinutes": 667850,
        "hoursWatched": 11130.83,
        "estimatedHoursWatched": 11130.83
      }
    ],
    "topVideosCurrentPeriod": [
      {
        "videoId": "q5gQB_AGxlo",
        "title": "🔴 Leverage: Redemption | Season 1 Stream | 24/7 Entertainment 🔴",
        "views": 14463,
        "estimatedMinutesWatched": 297425,
        "averageViewDuration_sec": 2751,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "tKAdjrXYj8g",
        "title": "Blackway | FULL MOVIE | Anthony Hopkins | Ray Liotta | Julia Stiles | Alexander Ludwig",
        "views": 13036,
        "estimatedMinutesWatched": 148048,
        "averageViewDuration_sec": 1266,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "b6kMpenpQGM",
        "title": "Flyboys | FULL MOVIE | James Franco | Jean Reno | Jennifer Decker | David Ellison",
        "views": 7454,
        "estimatedMinutesWatched": 201679,
        "averageViewDuration_sec": 2484,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "-mqcn5M0ktA",
        "title": "LBJ | FULL MOVIE | Woody Harrelson | Jennifer Jason Leigh | Richard Jenkins | Bill Pullman",
        "views": 6728,
        "estimatedMinutesWatched": 75497,
        "averageViewDuration_sec": 1494,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "1OIeQVEtq_Y",
        "title": "The Painful Way | The Ark | Full Episode | S01E09",
        "views": 5512,
        "estimatedMinutesWatched": 34543,
        "averageViewDuration_sec": 805,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "89J-9vWWPuk",
        "title": "The Triangle: Night 1 | Full Movie | Eric Stoltz, Catherine Bell, Lou Diamond Phillips, Sam Neill",
        "views": 5088,
        "estimatedMinutesWatched": 42286,
        "averageViewDuration_sec": 958,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "0T-yveMJPko",
        "title": "The Librarian: Quest for the Spear | FULL MOVIE | Noah Wyle, Kyle MacLachlan, Bob Newhart",
        "views": 4112,
        "estimatedMinutesWatched": 87255,
        "averageViewDuration_sec": 2136,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "G_X8m-NJV-U",
        "title": "And the Deadly Drekavac | The Librarians: The Next Chapter | S01E01",
        "views": 3649,
        "estimatedMinutesWatched": 27761,
        "averageViewDuration_sec": 984,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "B_IiECt4atw",
        "title": "Everyone Wanted to Be on This Ship | The Ark | Full Episode | S01E01",
        "views": 3499,
        "estimatedMinutesWatched": 17927,
        "averageViewDuration_sec": 720,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "Hu7thpEf-js",
        "title": "The Librarians and the Crown of King Arthur | Season 1 Episode 1 | Official Episode",
        "views": 2826,
        "estimatedMinutesWatched": 29576,
        "averageViewDuration_sec": 1192,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "MnYkWWERfYo",
        "title": "Writer’s Special | Checking Out: The Librarians The Next Chapter | S02E11 Aftershow | TNT",
        "views": 2457,
        "estimatedMinutesWatched": 1208,
        "averageViewDuration_sec": 110,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)",
        "titleSource": "https://www.youtube.com/watch?v=MnYkWWERfYo"
      },
      {
        "videoId": "YM6-fBB7yQY",
        "title": "Leverage | The Nigerian Job | Season 1 Episode 1 | Official Episode",
        "views": 2421,
        "estimatedMinutesWatched": 35312,
        "averageViewDuration_sec": 1498,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "sjsGMHmm9Yk",
        "title": "The Librarian: Curse of the Judas Chalice | FULL MOVIE | Noah Wyle, Bruce Davison, Bob Newhart",
        "views": 1908,
        "estimatedMinutesWatched": 34033,
        "averageViewDuration_sec": 1895,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "IjG6PUzwkdc",
        "title": "The Double Blind Job | Electric Entertainment 25th Anniversary Celebration! | Leverage S03E05",
        "views": 1582,
        "estimatedMinutesWatched": 21987,
        "averageViewDuration_sec": 1174,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)",
        "titleSource": "https://www.youtube.com/watch?v=IjG6PUzwkdc"
      },
      {
        "videoId": "wjdEa_g0LNA",
        "title": "And the Unfinished Business | The Librarians: The Next Chapter | S01E12",
        "views": 1579,
        "estimatedMinutesWatched": 21109,
        "averageViewDuration_sec": 1108,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "zF-Iz7dVja0",
        "title": "Every Single Person Matters | The Ark | Full Episode | S01E08",
        "views": 1529,
        "estimatedMinutesWatched": 15564,
        "averageViewDuration_sec": 1017,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "rVC2lrrZvwc",
        "title": "The Librarians and the Drowned Book | Season 2 Episode 1 | Official Episode",
        "views": 1508,
        "estimatedMinutesWatched": 15721,
        "averageViewDuration_sec": 1118,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)",
        "titleSource": "https://www.youtube.com/watch?v=rVC2lrrZvwc"
      },
      {
        "videoId": "TmpODBUsPgw",
        "title": "The Triangle: Night 3 | Full Movie | Eric Stoltz, Catherine Bell, Lou Diamond Phillips, Sam Neill",
        "views": 1499,
        "estimatedMinutesWatched": 21140,
        "averageViewDuration_sec": 1636,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "4HYYYiExFSs",
        "title": "The Librarian: Return to King Solomon's Mines | FULL MOVIE | Noah Wyle, Rob Newhart, Gabrielle Anwar",
        "views": 1492,
        "estimatedMinutesWatched": 33927,
        "averageViewDuration_sec": 2030,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "U1PLpc_l-L8",
        "title": "A Slow Death is Worse | The Ark | Full Episode | S01E07",
        "views": 1489,
        "estimatedMinutesWatched": 14588,
        "averageViewDuration_sec": 1035,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      }
    ],
    "ytdRevenue": 132166.19,
    "ytdViews": 8513527,
    "ytdHoursWatched": 3381653.47,
    "ytdAdImpressions": 35315379,
    "ytdMonetizedPlaybacks": 6253888,
    "yearToDate": {
      "views": 8513527,
      "estimatedMinutesWatched": 202899208,
      "estimatedRevenue": 132166.19,
      "estimatedAdRevenue": 118912.86,
      "adImpressions": 35315379,
      "monetizedPlaybacks": 6253888,
      "watchTimeMinutes": 202899208,
      "hoursWatched": 3381653.47,
      "estimatedHoursWatched": 3381653.47,
      "period": "Jan 1-Sep 16, 2026",
      "rowsThrough": "2026-09-16"
    },
    "ytdStatus": "fresh_partial",
    "ytdNote": "Year to date through Sep 16; YouTube revenue is separate from ElectricNOW TVOD.",
    "status": "fresh_partial",
    "priorPeriod": "Sep 5-Sep 11, 2026",
    "subscribers": null,
    "views": 201983,
    "estimatedMinutesWatched": 3168341,
    "subscribersGained": 281,
    "netSubscribers": 199,
    "averageViewDurationSec": null,
    "likeForLike": {
      "basis": "Sep 12-Sep 16 vs Sep 5-Sep 9, 2026 (5 days each)",
      "reason": "Revenue data is delayed two days.",
      "current": {
        "views": 201983,
        "estimatedMinutesWatched": 3168341,
        "estimatedRevenue": 2921.35,
        "estimatedAdRevenue": 2691.45,
        "adImpressions": 583865,
        "monetizedPlaybacks": 100799,
        "watchTimeMinutes": 3168341,
        "hoursWatched": 52805.68,
        "estimatedHoursWatched": 52805.68,
        "days": 5,
        "minutes": 3168341
      },
      "prior": {
        "views": 236790,
        "estimatedMinutesWatched": 3513205,
        "estimatedRevenue": 2940.3,
        "estimatedAdRevenue": 2669.67,
        "adImpressions": 628713,
        "monetizedPlaybacks": 112405,
        "watchTimeMinutes": 3513205,
        "hoursWatched": 58553.42,
        "estimatedHoursWatched": 58553.42,
        "days": 5,
        "minutes": 3513205
      },
      "deltas": {
        "views": -14.7,
        "estimatedRevenue": -0.64,
        "adImpressions": -7.13,
        "minutes": -9.82
      },
      "days": 5
    },
    "topVideos": [
      {
        "videoId": "q5gQB_AGxlo",
        "title": "🔴 Leverage: Redemption | Season 1 Stream | 24/7 Entertainment 🔴",
        "views": 14463,
        "estimatedMinutesWatched": 297425,
        "averageViewDuration_sec": 2751,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "tKAdjrXYj8g",
        "title": "Blackway | FULL MOVIE | Anthony Hopkins | Ray Liotta | Julia Stiles | Alexander Ludwig",
        "views": 13036,
        "estimatedMinutesWatched": 148048,
        "averageViewDuration_sec": 1266,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "b6kMpenpQGM",
        "title": "Flyboys | FULL MOVIE | James Franco | Jean Reno | Jennifer Decker | David Ellison",
        "views": 7454,
        "estimatedMinutesWatched": 201679,
        "averageViewDuration_sec": 2484,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "-mqcn5M0ktA",
        "title": "LBJ | FULL MOVIE | Woody Harrelson | Jennifer Jason Leigh | Richard Jenkins | Bill Pullman",
        "views": 6728,
        "estimatedMinutesWatched": 75497,
        "averageViewDuration_sec": 1494,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "1OIeQVEtq_Y",
        "title": "The Painful Way | The Ark | Full Episode | S01E09",
        "views": 5512,
        "estimatedMinutesWatched": 34543,
        "averageViewDuration_sec": 805,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "89J-9vWWPuk",
        "title": "The Triangle: Night 1 | Full Movie | Eric Stoltz, Catherine Bell, Lou Diamond Phillips, Sam Neill",
        "views": 5088,
        "estimatedMinutesWatched": 42286,
        "averageViewDuration_sec": 958,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "0T-yveMJPko",
        "title": "The Librarian: Quest for the Spear | FULL MOVIE | Noah Wyle, Kyle MacLachlan, Bob Newhart",
        "views": 4112,
        "estimatedMinutesWatched": 87255,
        "averageViewDuration_sec": 2136,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "G_X8m-NJV-U",
        "title": "And the Deadly Drekavac | The Librarians: The Next Chapter | S01E01",
        "views": 3649,
        "estimatedMinutesWatched": 27761,
        "averageViewDuration_sec": 984,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "B_IiECt4atw",
        "title": "Everyone Wanted to Be on This Ship | The Ark | Full Episode | S01E01",
        "views": 3499,
        "estimatedMinutesWatched": 17927,
        "averageViewDuration_sec": 720,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "Hu7thpEf-js",
        "title": "The Librarians and the Crown of King Arthur | Season 1 Episode 1 | Official Episode",
        "views": 2826,
        "estimatedMinutesWatched": 29576,
        "averageViewDuration_sec": 1192,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "MnYkWWERfYo",
        "title": "Writer’s Special | Checking Out: The Librarians The Next Chapter | S02E11 Aftershow | TNT",
        "views": 2457,
        "estimatedMinutesWatched": 1208,
        "averageViewDuration_sec": 110,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)",
        "titleSource": "https://www.youtube.com/watch?v=MnYkWWERfYo"
      },
      {
        "videoId": "YM6-fBB7yQY",
        "title": "Leverage | The Nigerian Job | Season 1 Episode 1 | Official Episode",
        "views": 2421,
        "estimatedMinutesWatched": 35312,
        "averageViewDuration_sec": 1498,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "sjsGMHmm9Yk",
        "title": "The Librarian: Curse of the Judas Chalice | FULL MOVIE | Noah Wyle, Bruce Davison, Bob Newhart",
        "views": 1908,
        "estimatedMinutesWatched": 34033,
        "averageViewDuration_sec": 1895,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "IjG6PUzwkdc",
        "title": "The Double Blind Job | Electric Entertainment 25th Anniversary Celebration! | Leverage S03E05",
        "views": 1582,
        "estimatedMinutesWatched": 21987,
        "averageViewDuration_sec": 1174,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)",
        "titleSource": "https://www.youtube.com/watch?v=IjG6PUzwkdc"
      },
      {
        "videoId": "wjdEa_g0LNA",
        "title": "And the Unfinished Business | The Librarians: The Next Chapter | S01E12",
        "views": 1579,
        "estimatedMinutesWatched": 21109,
        "averageViewDuration_sec": 1108,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "zF-Iz7dVja0",
        "title": "Every Single Person Matters | The Ark | Full Episode | S01E08",
        "views": 1529,
        "estimatedMinutesWatched": 15564,
        "averageViewDuration_sec": 1017,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "rVC2lrrZvwc",
        "title": "The Librarians and the Drowned Book | Season 2 Episode 1 | Official Episode",
        "views": 1508,
        "estimatedMinutesWatched": 15721,
        "averageViewDuration_sec": 1118,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)",
        "titleSource": "https://www.youtube.com/watch?v=rVC2lrrZvwc"
      },
      {
        "videoId": "TmpODBUsPgw",
        "title": "The Triangle: Night 3 | Full Movie | Eric Stoltz, Catherine Bell, Lou Diamond Phillips, Sam Neill",
        "views": 1499,
        "estimatedMinutesWatched": 21140,
        "averageViewDuration_sec": 1636,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "4HYYYiExFSs",
        "title": "The Librarian: Return to King Solomon's Mines | FULL MOVIE | Noah Wyle, Rob Newhart, Gabrielle Anwar",
        "views": 1492,
        "estimatedMinutesWatched": 33927,
        "averageViewDuration_sec": 2030,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      },
      {
        "videoId": "U1PLpc_l-L8",
        "title": "A Slow Death is Worse | The Ark | Full Episode | S01E07",
        "views": 1489,
        "estimatedMinutesWatched": 14588,
        "averageViewDuration_sec": 1035,
        "period": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
      }
    ],
    "dataCompleteThrough": "2026-09-16",
    "priorWeek": {
      "views": 328578,
      "estimatedMinutesWatched": 4946366,
      "estimatedRevenue": 4358.52,
      "estimatedAdRevenue": 3980.51,
      "adImpressions": 903234,
      "monetizedPlaybacks": 160978,
      "watchTimeMinutes": 4946366,
      "hoursWatched": 82439.43,
      "estimatedHoursWatched": 82439.43,
      "period": "Sep 5-Sep 11, 2026"
    },
    "comparisonNote": "Matched 5-day comparison: views -14.7%, estimated revenue -0.6%, ad impressions -7.1%. Do not compare 5 current days directly with 7 prior days.",
    "priorWeekTotals": {
      "views": 328578,
      "estimatedMinutesWatched": 4946366,
      "estimatedRevenue": 4358.52,
      "estimatedAdRevenue": 3980.51,
      "adImpressions": 903234,
      "monetizedPlaybacks": 160978,
      "watchTimeMinutes": 4946366,
      "hoursWatched": 82439.43,
      "estimatedHoursWatched": 82439.43,
      "period": "Sep 5-Sep 11, 2026",
      "days": 7
    },
    "subscriberCountNote": "Last observed 63,500 on Sep 14; current subscriber count not refreshed.",
    "topVideosPeriod": "Sep 12-Sep 18, 2026 (engagement-only query; revenue uses Sep 12-Sep 16)"
  },
  "appTrendNote": "This trend charts total app/platform sessions in green alongside daily active users in blue for the complete week ending Aug 20, 2026. Landing-page acquisition traffic remains excluded from platform audience totals.",
  "ytdTrend": [
    {
      "date": "Apr 13",
      "rawDate": "20260413",
      "activeUsers": 8739,
      "sessions": 13421,
      "weekStart": "2026-04-13",
      "weekEnd": "2026-04-19",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Apr 20",
      "rawDate": "20260420",
      "activeUsers": 12843,
      "sessions": 18759,
      "weekStart": "2026-04-20",
      "weekEnd": "2026-04-26",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Apr 27",
      "rawDate": "20260427",
      "activeUsers": 8115,
      "sessions": 14023,
      "weekStart": "2026-04-27",
      "weekEnd": "2026-05-03",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "May 4",
      "rawDate": "20260504",
      "activeUsers": 4659,
      "sessions": 9942,
      "weekStart": "2026-05-04",
      "weekEnd": "2026-05-10",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "May 11",
      "rawDate": "20260511",
      "activeUsers": 7905,
      "sessions": 14166,
      "weekStart": "2026-05-11",
      "weekEnd": "2026-05-17",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "May 18",
      "rawDate": "20260518",
      "activeUsers": 7742,
      "sessions": 14487,
      "weekStart": "2026-05-18",
      "weekEnd": "2026-05-24",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "May 25",
      "rawDate": "20260525",
      "activeUsers": 7826,
      "sessions": 14470,
      "weekStart": "2026-05-25",
      "weekEnd": "2026-05-31",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Jun 1",
      "rawDate": "20260601",
      "activeUsers": 7610,
      "sessions": 13891,
      "weekStart": "2026-06-01",
      "weekEnd": "2026-06-07",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Jun 8",
      "rawDate": "20260608",
      "activeUsers": 7283,
      "sessions": 13830,
      "weekStart": "2026-06-08",
      "weekEnd": "2026-06-14",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Jun 15",
      "rawDate": "20260615",
      "activeUsers": 5876,
      "sessions": 11818,
      "weekStart": "2026-06-15",
      "weekEnd": "2026-06-21",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Jun 22",
      "rawDate": "20260622",
      "activeUsers": 5797,
      "sessions": 11883,
      "weekStart": "2026-06-22",
      "weekEnd": "2026-06-28",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Jun 29",
      "rawDate": "20260629",
      "activeUsers": 4162,
      "sessions": 10275,
      "weekStart": "2026-06-29",
      "weekEnd": "2026-07-05",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Jul 6",
      "rawDate": "20260706",
      "activeUsers": 3710,
      "sessions": 9647,
      "weekStart": "2026-07-06",
      "weekEnd": "2026-07-12",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Jul 13",
      "rawDate": "20260713",
      "activeUsers": 3498,
      "sessions": 9730,
      "weekStart": "2026-07-13",
      "weekEnd": "2026-07-19",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Jul 20",
      "rawDate": "20260720",
      "activeUsers": 3544,
      "sessions": 9899,
      "weekStart": "2026-07-20",
      "weekEnd": "2026-07-26",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Jul 27",
      "rawDate": "20260727",
      "activeUsers": 5704,
      "sessions": 14470,
      "weekStart": "2026-07-27",
      "weekEnd": "2026-08-02",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Aug 3",
      "rawDate": "20260803",
      "activeUsers": 5172,
      "sessions": 13191,
      "weekStart": "2026-08-03",
      "weekEnd": "2026-08-09",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Aug 10",
      "rawDate": "20260810",
      "activeUsers": 4824,
      "sessions": 11803,
      "weekStart": "2026-08-10",
      "weekEnd": "2026-08-16",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Aug 17",
      "rawDate": "20260817",
      "activeUsers": 4818,
      "sessions": 11463,
      "weekStart": "2026-08-17",
      "weekEnd": "2026-08-23",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Aug 24",
      "rawDate": "20260824",
      "activeUsers": 4496,
      "sessions": 10835,
      "weekStart": "2026-08-24",
      "weekEnd": "2026-08-30",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Aug 31",
      "rawDate": "20260831",
      "activeUsers": 4388,
      "sessions": 10617,
      "weekStart": "2026-08-31",
      "weekEnd": "2026-09-06",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Sep 7",
      "rawDate": "20260907",
      "activeUsers": 4049,
      "sessions": 9585,
      "weekStart": "2026-09-07",
      "weekEnd": "2026-09-13",
      "source": "Internal GA4 pull, property 497892271"
    }
  ],
  "ytdTrendNote": "Weekly GA4 totals from property 497892271. Year-to-date trend is retained as weekly context and should be compared against the launch-baseline week, not the latest 7-day period.",
  "eventCardsNote": "Fresh GA4 event counts for Sep 12-Sep 18, 2026 (Internal GA4 pull, property 497892271). ads_* events are ElectricNOW IN-APP ad delivery, not paid-campaign impressions.",
  "usGeography": {
    "period": "Sep 12-Sep 18, 2026",
    "freshness": "Sep 12-Sep 18, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "eyebrow": "Where the ElectricNOW app & platform is used across the United States",
    "summaryLine": "3,865 U.S. active users across 51 states/regions and 25 reported metros for Sep 12-Sep 18, 2026.",
    "states": [
      {
        "state": "Texas",
        "activeUsers": 353,
        "sessions": 732,
        "engagedSessions": 530,
        "screenPageViews": 2928,
        "eventCount": 86863,
        "userEngagementDuration": 1716603,
        "totalEngagementHours": 476.8,
        "shareOfUsActiveUsersPct": 9.1
      },
      {
        "state": "California",
        "activeUsers": 308,
        "sessions": 729,
        "engagedSessions": 456,
        "screenPageViews": 3362,
        "eventCount": 75043,
        "userEngagementDuration": 2242259,
        "totalEngagementHours": 622.8,
        "shareOfUsActiveUsersPct": 8.0
      },
      {
        "state": "Florida",
        "activeUsers": 252,
        "sessions": 622,
        "engagedSessions": 442,
        "screenPageViews": 2794,
        "eventCount": 68056,
        "userEngagementDuration": 1197595,
        "totalEngagementHours": 332.7,
        "shareOfUsActiveUsersPct": 6.5
      },
      {
        "state": "New York",
        "activeUsers": 204,
        "sessions": 499,
        "engagedSessions": 355,
        "screenPageViews": 1923,
        "eventCount": 78463,
        "userEngagementDuration": 987774,
        "totalEngagementHours": 274.4,
        "shareOfUsActiveUsersPct": 5.3
      },
      {
        "state": "Illinois",
        "activeUsers": 161,
        "sessions": 401,
        "engagedSessions": 287,
        "screenPageViews": 1476,
        "eventCount": 30867,
        "userEngagementDuration": 688622,
        "totalEngagementHours": 191.3,
        "shareOfUsActiveUsersPct": 4.2
      },
      {
        "state": "Ohio",
        "activeUsers": 159,
        "sessions": 468,
        "engagedSessions": 309,
        "screenPageViews": 1848,
        "eventCount": 42202,
        "userEngagementDuration": 1074482,
        "totalEngagementHours": 298.5,
        "shareOfUsActiveUsersPct": 4.1
      },
      {
        "state": "Pennsylvania",
        "activeUsers": 153,
        "sessions": 434,
        "engagedSessions": 288,
        "screenPageViews": 2120,
        "eventCount": 53595,
        "userEngagementDuration": 863135,
        "totalEngagementHours": 239.8,
        "shareOfUsActiveUsersPct": 4.0
      },
      {
        "state": "North Carolina",
        "activeUsers": 142,
        "sessions": 338,
        "engagedSessions": 216,
        "screenPageViews": 1502,
        "eventCount": 37368,
        "userEngagementDuration": 650766,
        "totalEngagementHours": 180.8,
        "shareOfUsActiveUsersPct": 3.7
      },
      {
        "state": "Georgia",
        "activeUsers": 141,
        "sessions": 324,
        "engagedSessions": 217,
        "screenPageViews": 1172,
        "eventCount": 24159,
        "userEngagementDuration": 444836,
        "totalEngagementHours": 123.6,
        "shareOfUsActiveUsersPct": 3.6
      },
      {
        "state": "Virginia",
        "activeUsers": 130,
        "sessions": 272,
        "engagedSessions": 195,
        "screenPageViews": 1140,
        "eventCount": 19346,
        "userEngagementDuration": 729921,
        "totalEngagementHours": 202.8,
        "shareOfUsActiveUsersPct": 3.4
      },
      {
        "state": "Michigan",
        "activeUsers": 125,
        "sessions": 358,
        "engagedSessions": 247,
        "screenPageViews": 1508,
        "eventCount": 17780,
        "userEngagementDuration": 382202,
        "totalEngagementHours": 106.2,
        "shareOfUsActiveUsersPct": 3.2
      },
      {
        "state": "Arizona",
        "activeUsers": 114,
        "sessions": 287,
        "engagedSessions": 199,
        "screenPageViews": 1279,
        "eventCount": 28333,
        "userEngagementDuration": 418146,
        "totalEngagementHours": 116.2,
        "shareOfUsActiveUsersPct": 2.9
      },
      {
        "state": "Tennessee",
        "activeUsers": 114,
        "sessions": 269,
        "engagedSessions": 191,
        "screenPageViews": 1238,
        "eventCount": 26045,
        "userEngagementDuration": 498293,
        "totalEngagementHours": 138.4,
        "shareOfUsActiveUsersPct": 2.9
      },
      {
        "state": "Minnesota",
        "activeUsers": 90,
        "sessions": 231,
        "engagedSessions": 178,
        "screenPageViews": 1080,
        "eventCount": 30174,
        "userEngagementDuration": 872328,
        "totalEngagementHours": 242.3,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Missouri",
        "activeUsers": 89,
        "sessions": 185,
        "engagedSessions": 139,
        "screenPageViews": 835,
        "eventCount": 14178,
        "userEngagementDuration": 236476,
        "totalEngagementHours": 65.7,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "New Jersey",
        "activeUsers": 87,
        "sessions": 212,
        "engagedSessions": 155,
        "screenPageViews": 911,
        "eventCount": 14844,
        "userEngagementDuration": 388609,
        "totalEngagementHours": 107.9,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Washington",
        "activeUsers": 87,
        "sessions": 199,
        "engagedSessions": 136,
        "screenPageViews": 821,
        "eventCount": 15430,
        "userEngagementDuration": 428080,
        "totalEngagementHours": 118.9,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Indiana",
        "activeUsers": 85,
        "sessions": 165,
        "engagedSessions": 112,
        "screenPageViews": 766,
        "eventCount": 18768,
        "userEngagementDuration": 376518,
        "totalEngagementHours": 104.6,
        "shareOfUsActiveUsersPct": 2.2
      },
      {
        "state": "Oklahoma",
        "activeUsers": 74,
        "sessions": 196,
        "engagedSessions": 140,
        "screenPageViews": 817,
        "eventCount": 24710,
        "userEngagementDuration": 355246,
        "totalEngagementHours": 98.7,
        "shareOfUsActiveUsersPct": 1.9
      },
      {
        "state": "Colorado",
        "activeUsers": 70,
        "sessions": 167,
        "engagedSessions": 123,
        "screenPageViews": 749,
        "eventCount": 22797,
        "userEngagementDuration": 398558,
        "totalEngagementHours": 110.7,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Alabama",
        "activeUsers": 69,
        "sessions": 152,
        "engagedSessions": 90,
        "screenPageViews": 599,
        "eventCount": 10714,
        "userEngagementDuration": 229322,
        "totalEngagementHours": 63.7,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Massachusetts",
        "activeUsers": 68,
        "sessions": 143,
        "engagedSessions": 105,
        "screenPageViews": 516,
        "eventCount": 13411,
        "userEngagementDuration": 257053,
        "totalEngagementHours": 71.4,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Oregon",
        "activeUsers": 68,
        "sessions": 138,
        "engagedSessions": 86,
        "screenPageViews": 700,
        "eventCount": 15466,
        "userEngagementDuration": 411503,
        "totalEngagementHours": 114.3,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Maryland",
        "activeUsers": 60,
        "sessions": 119,
        "engagedSessions": 77,
        "screenPageViews": 678,
        "eventCount": 13581,
        "userEngagementDuration": 219801,
        "totalEngagementHours": 61.1,
        "shareOfUsActiveUsersPct": 1.6
      },
      {
        "state": "South Carolina",
        "activeUsers": 59,
        "sessions": 156,
        "engagedSessions": 102,
        "screenPageViews": 569,
        "eventCount": 11855,
        "userEngagementDuration": 230018,
        "totalEngagementHours": 63.9,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Louisiana",
        "activeUsers": 57,
        "sessions": 128,
        "engagedSessions": 85,
        "screenPageViews": 702,
        "eventCount": 14298,
        "userEngagementDuration": 244799,
        "totalEngagementHours": 68.0,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Kentucky",
        "activeUsers": 55,
        "sessions": 143,
        "engagedSessions": 104,
        "screenPageViews": 572,
        "eventCount": 8859,
        "userEngagementDuration": 195016,
        "totalEngagementHours": 54.2,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "Wisconsin",
        "activeUsers": 54,
        "sessions": 141,
        "engagedSessions": 109,
        "screenPageViews": 772,
        "eventCount": 22601,
        "userEngagementDuration": 423481,
        "totalEngagementHours": 117.6,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "Arkansas",
        "activeUsers": 39,
        "sessions": 103,
        "engagedSessions": 75,
        "screenPageViews": 452,
        "eventCount": 6328,
        "userEngagementDuration": 128364,
        "totalEngagementHours": 35.7,
        "shareOfUsActiveUsersPct": 1.0
      },
      {
        "state": "Nevada",
        "activeUsers": 36,
        "sessions": 96,
        "engagedSessions": 76,
        "screenPageViews": 554,
        "eventCount": 16327,
        "userEngagementDuration": 400950,
        "totalEngagementHours": 111.4,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "Kansas",
        "activeUsers": 35,
        "sessions": 64,
        "engagedSessions": 48,
        "screenPageViews": 318,
        "eventCount": 5723,
        "userEngagementDuration": 81897,
        "totalEngagementHours": 22.7,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "Connecticut",
        "activeUsers": 34,
        "sessions": 88,
        "engagedSessions": 68,
        "screenPageViews": 327,
        "eventCount": 3656,
        "userEngagementDuration": 143332,
        "totalEngagementHours": 39.8,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "Nebraska",
        "activeUsers": 27,
        "sessions": 57,
        "engagedSessions": 32,
        "screenPageViews": 319,
        "eventCount": 4708,
        "userEngagementDuration": 60100,
        "totalEngagementHours": 16.7,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "Utah",
        "activeUsers": 25,
        "sessions": 60,
        "engagedSessions": 46,
        "screenPageViews": 289,
        "eventCount": 3006,
        "userEngagementDuration": 78083,
        "totalEngagementHours": 21.7,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "Maine",
        "activeUsers": 23,
        "sessions": 115,
        "engagedSessions": 89,
        "screenPageViews": 511,
        "eventCount": 14125,
        "userEngagementDuration": 404133,
        "totalEngagementHours": 112.3,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "District of Columbia",
        "activeUsers": 22,
        "sessions": 44,
        "engagedSessions": 32,
        "screenPageViews": 142,
        "eventCount": 2464,
        "userEngagementDuration": 81482,
        "totalEngagementHours": 22.6,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "West Virginia",
        "activeUsers": 22,
        "sessions": 70,
        "engagedSessions": 38,
        "screenPageViews": 283,
        "eventCount": 9018,
        "userEngagementDuration": 130009,
        "totalEngagementHours": 36.1,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "Idaho",
        "activeUsers": 20,
        "sessions": 40,
        "engagedSessions": 27,
        "screenPageViews": 216,
        "eventCount": 7901,
        "userEngagementDuration": 126743,
        "totalEngagementHours": 35.2,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "New Mexico",
        "activeUsers": 20,
        "sessions": 38,
        "engagedSessions": 22,
        "screenPageViews": 134,
        "eventCount": 840,
        "userEngagementDuration": 11468,
        "totalEngagementHours": 3.2,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Iowa",
        "activeUsers": 19,
        "sessions": 48,
        "engagedSessions": 34,
        "screenPageViews": 226,
        "eventCount": 7519,
        "userEngagementDuration": 79495,
        "totalEngagementHours": 22.1,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "South Dakota",
        "activeUsers": 19,
        "sessions": 30,
        "engagedSessions": 16,
        "screenPageViews": 111,
        "eventCount": 2922,
        "userEngagementDuration": 36904,
        "totalEngagementHours": 10.3,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Mississippi",
        "activeUsers": 17,
        "sessions": 50,
        "engagedSessions": 35,
        "screenPageViews": 204,
        "eventCount": 2748,
        "userEngagementDuration": 52701,
        "totalEngagementHours": 14.6,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "New Hampshire",
        "activeUsers": 16,
        "sessions": 41,
        "engagedSessions": 25,
        "screenPageViews": 244,
        "eventCount": 4821,
        "userEngagementDuration": 93765,
        "totalEngagementHours": 26.0,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Rhode Island",
        "activeUsers": 13,
        "sessions": 34,
        "engagedSessions": 22,
        "screenPageViews": 132,
        "eventCount": 4934,
        "userEngagementDuration": 58280,
        "totalEngagementHours": 16.2,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Hawaii",
        "activeUsers": 10,
        "sessions": 16,
        "engagedSessions": 12,
        "screenPageViews": 138,
        "eventCount": 697,
        "userEngagementDuration": 14303,
        "totalEngagementHours": 4.0,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Wyoming",
        "activeUsers": 8,
        "sessions": 18,
        "engagedSessions": 13,
        "screenPageViews": 66,
        "eventCount": 18944,
        "userEngagementDuration": 156979,
        "totalEngagementHours": 43.6,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Delaware",
        "activeUsers": 7,
        "sessions": 14,
        "engagedSessions": 10,
        "screenPageViews": 48,
        "eventCount": 387,
        "userEngagementDuration": 6962,
        "totalEngagementHours": 1.9,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Montana",
        "activeUsers": 7,
        "sessions": 17,
        "engagedSessions": 14,
        "screenPageViews": 128,
        "eventCount": 5921,
        "userEngagementDuration": 89948,
        "totalEngagementHours": 25.0,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Vermont",
        "activeUsers": 7,
        "sessions": 9,
        "engagedSessions": 7,
        "screenPageViews": 42,
        "eventCount": 144,
        "userEngagementDuration": 5982,
        "totalEngagementHours": 1.7,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Alaska",
        "activeUsers": 6,
        "sessions": 10,
        "engagedSessions": 2,
        "screenPageViews": 30,
        "eventCount": 91,
        "userEngagementDuration": 187,
        "totalEngagementHours": 0.1,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "North Dakota",
        "activeUsers": 5,
        "sessions": 7,
        "engagedSessions": 6,
        "screenPageViews": 38,
        "eventCount": 697,
        "userEngagementDuration": 10543,
        "totalEngagementHours": 2.9,
        "shareOfUsActiveUsersPct": 0.1
      }
    ],
    "topCities": [
      {
        "city": "New York",
        "region": "New York",
        "activeUsers": 102,
        "sessions": 214,
        "engagedSessions": 146,
        "screenPageViews": 761,
        "engagementRate": 68.2
      },
      {
        "city": "Atlanta",
        "region": "Georgia",
        "activeUsers": 61,
        "sessions": 121,
        "engagedSessions": 90,
        "screenPageViews": 311,
        "engagementRate": 74.4
      },
      {
        "city": "Chicago",
        "region": "Illinois",
        "activeUsers": 60,
        "sessions": 144,
        "engagedSessions": 109,
        "screenPageViews": 479,
        "engagementRate": 75.7
      },
      {
        "city": "Los Angeles",
        "region": "California",
        "activeUsers": 58,
        "sessions": 141,
        "engagedSessions": 81,
        "screenPageViews": 506,
        "engagementRate": 57.4
      },
      {
        "city": "Houston",
        "region": "Texas",
        "activeUsers": 54,
        "sessions": 111,
        "engagedSessions": 74,
        "screenPageViews": 497,
        "engagementRate": 66.7
      },
      {
        "city": "Philadelphia",
        "region": "Pennsylvania",
        "activeUsers": 42,
        "sessions": 114,
        "engagedSessions": 89,
        "screenPageViews": 680,
        "engagementRate": 78.1
      },
      {
        "city": "Phoenix",
        "region": "Arizona",
        "activeUsers": 40,
        "sessions": 104,
        "engagedSessions": 79,
        "screenPageViews": 491,
        "engagementRate": 76.0
      },
      {
        "city": "Dallas",
        "region": "Texas",
        "activeUsers": 35,
        "sessions": 69,
        "engagedSessions": 53,
        "screenPageViews": 225,
        "engagementRate": 76.8
      },
      {
        "city": "Austin",
        "region": "Texas",
        "activeUsers": 31,
        "sessions": 42,
        "engagedSessions": 23,
        "screenPageViews": 176,
        "engagementRate": 54.8
      },
      {
        "city": "Las Vegas Valley",
        "region": "Nevada",
        "activeUsers": 28,
        "sessions": 81,
        "engagedSessions": 64,
        "screenPageViews": 481,
        "engagementRate": 79.0
      },
      {
        "city": "Charlotte",
        "region": "North Carolina",
        "activeUsers": 27,
        "sessions": 61,
        "engagedSessions": 36,
        "screenPageViews": 204,
        "engagementRate": 59.0
      },
      {
        "city": "Seattle",
        "region": "Washington",
        "activeUsers": 27,
        "sessions": 39,
        "engagedSessions": 22,
        "screenPageViews": 136,
        "engagementRate": 56.4
      },
      {
        "city": "Oklahoma City",
        "region": "Oklahoma",
        "activeUsers": 25,
        "sessions": 81,
        "engagedSessions": 60,
        "screenPageViews": 296,
        "engagementRate": 74.1
      },
      {
        "city": "Fort Worth",
        "region": "Texas",
        "activeUsers": 24,
        "sessions": 46,
        "engagedSessions": 27,
        "screenPageViews": 246,
        "engagementRate": 58.7
      },
      {
        "city": "Indianapolis",
        "region": "Indiana",
        "activeUsers": 23,
        "sessions": 38,
        "engagedSessions": 25,
        "screenPageViews": 169,
        "engagementRate": 65.8
      },
      {
        "city": "Nashville",
        "region": "Tennessee",
        "activeUsers": 23,
        "sessions": 56,
        "engagedSessions": 38,
        "screenPageViews": 230,
        "engagementRate": 67.9
      },
      {
        "city": "Jacksonville",
        "region": "Florida",
        "activeUsers": 22,
        "sessions": 63,
        "engagedSessions": 48,
        "screenPageViews": 309,
        "engagementRate": 76.2
      },
      {
        "city": "Washington",
        "region": "District of Columbia",
        "activeUsers": 22,
        "sessions": 44,
        "engagedSessions": 32,
        "screenPageViews": 142,
        "engagementRate": 72.7
      },
      {
        "city": "Boston",
        "region": "Massachusetts",
        "activeUsers": 21,
        "sessions": 44,
        "engagedSessions": 35,
        "screenPageViews": 149,
        "engagementRate": 79.5
      },
      {
        "city": "Omaha",
        "region": "Nebraska",
        "activeUsers": 20,
        "sessions": 40,
        "engagedSessions": 20,
        "screenPageViews": 240,
        "engagementRate": 50.0
      },
      {
        "city": "Pittsburgh",
        "region": "Pennsylvania",
        "activeUsers": 20,
        "sessions": 33,
        "engagedSessions": 20,
        "screenPageViews": 156,
        "engagementRate": 60.6
      },
      {
        "city": "Cleveland",
        "region": "Ohio",
        "activeUsers": 19,
        "sessions": 36,
        "engagedSessions": 23,
        "screenPageViews": 138,
        "engagementRate": 63.9
      },
      {
        "city": "Denver",
        "region": "Colorado",
        "activeUsers": 19,
        "sessions": 36,
        "engagedSessions": 27,
        "screenPageViews": 156,
        "engagementRate": 75.0
      },
      {
        "city": "Detroit",
        "region": "Michigan",
        "activeUsers": 19,
        "sessions": 49,
        "engagedSessions": 32,
        "screenPageViews": 172,
        "engagementRate": 65.3
      },
      {
        "city": "Kansas City",
        "region": "Missouri",
        "activeUsers": 19,
        "sessions": 32,
        "engagedSessions": 20,
        "screenPageViews": 199,
        "engagementRate": 62.5
      }
    ],
    "usTotals": {
      "activeUsers": 3865,
      "sessions": 9277,
      "engagedSessions": 6422,
      "userEngagementDuration": 19414052,
      "totalEngagementHours": 5392.8
    },
    "rows": [
      {
        "state": "Texas",
        "activeUsers": 353,
        "sessions": 732,
        "engagedSessions": 530,
        "screenPageViews": 2928,
        "eventCount": 86863,
        "userEngagementDuration": 1716603,
        "totalEngagementHours": 476.8,
        "shareOfUsActiveUsersPct": 9.1
      },
      {
        "state": "California",
        "activeUsers": 308,
        "sessions": 729,
        "engagedSessions": 456,
        "screenPageViews": 3362,
        "eventCount": 75043,
        "userEngagementDuration": 2242259,
        "totalEngagementHours": 622.8,
        "shareOfUsActiveUsersPct": 8.0
      },
      {
        "state": "Florida",
        "activeUsers": 252,
        "sessions": 622,
        "engagedSessions": 442,
        "screenPageViews": 2794,
        "eventCount": 68056,
        "userEngagementDuration": 1197595,
        "totalEngagementHours": 332.7,
        "shareOfUsActiveUsersPct": 6.5
      },
      {
        "state": "New York",
        "activeUsers": 204,
        "sessions": 499,
        "engagedSessions": 355,
        "screenPageViews": 1923,
        "eventCount": 78463,
        "userEngagementDuration": 987774,
        "totalEngagementHours": 274.4,
        "shareOfUsActiveUsersPct": 5.3
      },
      {
        "state": "Illinois",
        "activeUsers": 161,
        "sessions": 401,
        "engagedSessions": 287,
        "screenPageViews": 1476,
        "eventCount": 30867,
        "userEngagementDuration": 688622,
        "totalEngagementHours": 191.3,
        "shareOfUsActiveUsersPct": 4.2
      },
      {
        "state": "Ohio",
        "activeUsers": 159,
        "sessions": 468,
        "engagedSessions": 309,
        "screenPageViews": 1848,
        "eventCount": 42202,
        "userEngagementDuration": 1074482,
        "totalEngagementHours": 298.5,
        "shareOfUsActiveUsersPct": 4.1
      },
      {
        "state": "Pennsylvania",
        "activeUsers": 153,
        "sessions": 434,
        "engagedSessions": 288,
        "screenPageViews": 2120,
        "eventCount": 53595,
        "userEngagementDuration": 863135,
        "totalEngagementHours": 239.8,
        "shareOfUsActiveUsersPct": 4.0
      },
      {
        "state": "North Carolina",
        "activeUsers": 142,
        "sessions": 338,
        "engagedSessions": 216,
        "screenPageViews": 1502,
        "eventCount": 37368,
        "userEngagementDuration": 650766,
        "totalEngagementHours": 180.8,
        "shareOfUsActiveUsersPct": 3.7
      },
      {
        "state": "Georgia",
        "activeUsers": 141,
        "sessions": 324,
        "engagedSessions": 217,
        "screenPageViews": 1172,
        "eventCount": 24159,
        "userEngagementDuration": 444836,
        "totalEngagementHours": 123.6,
        "shareOfUsActiveUsersPct": 3.6
      },
      {
        "state": "Virginia",
        "activeUsers": 130,
        "sessions": 272,
        "engagedSessions": 195,
        "screenPageViews": 1140,
        "eventCount": 19346,
        "userEngagementDuration": 729921,
        "totalEngagementHours": 202.8,
        "shareOfUsActiveUsersPct": 3.4
      },
      {
        "state": "Michigan",
        "activeUsers": 125,
        "sessions": 358,
        "engagedSessions": 247,
        "screenPageViews": 1508,
        "eventCount": 17780,
        "userEngagementDuration": 382202,
        "totalEngagementHours": 106.2,
        "shareOfUsActiveUsersPct": 3.2
      },
      {
        "state": "Arizona",
        "activeUsers": 114,
        "sessions": 287,
        "engagedSessions": 199,
        "screenPageViews": 1279,
        "eventCount": 28333,
        "userEngagementDuration": 418146,
        "totalEngagementHours": 116.2,
        "shareOfUsActiveUsersPct": 2.9
      },
      {
        "state": "Tennessee",
        "activeUsers": 114,
        "sessions": 269,
        "engagedSessions": 191,
        "screenPageViews": 1238,
        "eventCount": 26045,
        "userEngagementDuration": 498293,
        "totalEngagementHours": 138.4,
        "shareOfUsActiveUsersPct": 2.9
      },
      {
        "state": "Minnesota",
        "activeUsers": 90,
        "sessions": 231,
        "engagedSessions": 178,
        "screenPageViews": 1080,
        "eventCount": 30174,
        "userEngagementDuration": 872328,
        "totalEngagementHours": 242.3,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Missouri",
        "activeUsers": 89,
        "sessions": 185,
        "engagedSessions": 139,
        "screenPageViews": 835,
        "eventCount": 14178,
        "userEngagementDuration": 236476,
        "totalEngagementHours": 65.7,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "New Jersey",
        "activeUsers": 87,
        "sessions": 212,
        "engagedSessions": 155,
        "screenPageViews": 911,
        "eventCount": 14844,
        "userEngagementDuration": 388609,
        "totalEngagementHours": 107.9,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Washington",
        "activeUsers": 87,
        "sessions": 199,
        "engagedSessions": 136,
        "screenPageViews": 821,
        "eventCount": 15430,
        "userEngagementDuration": 428080,
        "totalEngagementHours": 118.9,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Indiana",
        "activeUsers": 85,
        "sessions": 165,
        "engagedSessions": 112,
        "screenPageViews": 766,
        "eventCount": 18768,
        "userEngagementDuration": 376518,
        "totalEngagementHours": 104.6,
        "shareOfUsActiveUsersPct": 2.2
      },
      {
        "state": "Oklahoma",
        "activeUsers": 74,
        "sessions": 196,
        "engagedSessions": 140,
        "screenPageViews": 817,
        "eventCount": 24710,
        "userEngagementDuration": 355246,
        "totalEngagementHours": 98.7,
        "shareOfUsActiveUsersPct": 1.9
      },
      {
        "state": "Colorado",
        "activeUsers": 70,
        "sessions": 167,
        "engagedSessions": 123,
        "screenPageViews": 749,
        "eventCount": 22797,
        "userEngagementDuration": 398558,
        "totalEngagementHours": 110.7,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Alabama",
        "activeUsers": 69,
        "sessions": 152,
        "engagedSessions": 90,
        "screenPageViews": 599,
        "eventCount": 10714,
        "userEngagementDuration": 229322,
        "totalEngagementHours": 63.7,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Massachusetts",
        "activeUsers": 68,
        "sessions": 143,
        "engagedSessions": 105,
        "screenPageViews": 516,
        "eventCount": 13411,
        "userEngagementDuration": 257053,
        "totalEngagementHours": 71.4,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Oregon",
        "activeUsers": 68,
        "sessions": 138,
        "engagedSessions": 86,
        "screenPageViews": 700,
        "eventCount": 15466,
        "userEngagementDuration": 411503,
        "totalEngagementHours": 114.3,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Maryland",
        "activeUsers": 60,
        "sessions": 119,
        "engagedSessions": 77,
        "screenPageViews": 678,
        "eventCount": 13581,
        "userEngagementDuration": 219801,
        "totalEngagementHours": 61.1,
        "shareOfUsActiveUsersPct": 1.6
      },
      {
        "state": "South Carolina",
        "activeUsers": 59,
        "sessions": 156,
        "engagedSessions": 102,
        "screenPageViews": 569,
        "eventCount": 11855,
        "userEngagementDuration": 230018,
        "totalEngagementHours": 63.9,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Louisiana",
        "activeUsers": 57,
        "sessions": 128,
        "engagedSessions": 85,
        "screenPageViews": 702,
        "eventCount": 14298,
        "userEngagementDuration": 244799,
        "totalEngagementHours": 68.0,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Kentucky",
        "activeUsers": 55,
        "sessions": 143,
        "engagedSessions": 104,
        "screenPageViews": 572,
        "eventCount": 8859,
        "userEngagementDuration": 195016,
        "totalEngagementHours": 54.2,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "Wisconsin",
        "activeUsers": 54,
        "sessions": 141,
        "engagedSessions": 109,
        "screenPageViews": 772,
        "eventCount": 22601,
        "userEngagementDuration": 423481,
        "totalEngagementHours": 117.6,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "Arkansas",
        "activeUsers": 39,
        "sessions": 103,
        "engagedSessions": 75,
        "screenPageViews": 452,
        "eventCount": 6328,
        "userEngagementDuration": 128364,
        "totalEngagementHours": 35.7,
        "shareOfUsActiveUsersPct": 1.0
      },
      {
        "state": "Nevada",
        "activeUsers": 36,
        "sessions": 96,
        "engagedSessions": 76,
        "screenPageViews": 554,
        "eventCount": 16327,
        "userEngagementDuration": 400950,
        "totalEngagementHours": 111.4,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "Kansas",
        "activeUsers": 35,
        "sessions": 64,
        "engagedSessions": 48,
        "screenPageViews": 318,
        "eventCount": 5723,
        "userEngagementDuration": 81897,
        "totalEngagementHours": 22.7,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "Connecticut",
        "activeUsers": 34,
        "sessions": 88,
        "engagedSessions": 68,
        "screenPageViews": 327,
        "eventCount": 3656,
        "userEngagementDuration": 143332,
        "totalEngagementHours": 39.8,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "Nebraska",
        "activeUsers": 27,
        "sessions": 57,
        "engagedSessions": 32,
        "screenPageViews": 319,
        "eventCount": 4708,
        "userEngagementDuration": 60100,
        "totalEngagementHours": 16.7,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "Utah",
        "activeUsers": 25,
        "sessions": 60,
        "engagedSessions": 46,
        "screenPageViews": 289,
        "eventCount": 3006,
        "userEngagementDuration": 78083,
        "totalEngagementHours": 21.7,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "Maine",
        "activeUsers": 23,
        "sessions": 115,
        "engagedSessions": 89,
        "screenPageViews": 511,
        "eventCount": 14125,
        "userEngagementDuration": 404133,
        "totalEngagementHours": 112.3,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "District of Columbia",
        "activeUsers": 22,
        "sessions": 44,
        "engagedSessions": 32,
        "screenPageViews": 142,
        "eventCount": 2464,
        "userEngagementDuration": 81482,
        "totalEngagementHours": 22.6,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "West Virginia",
        "activeUsers": 22,
        "sessions": 70,
        "engagedSessions": 38,
        "screenPageViews": 283,
        "eventCount": 9018,
        "userEngagementDuration": 130009,
        "totalEngagementHours": 36.1,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "Idaho",
        "activeUsers": 20,
        "sessions": 40,
        "engagedSessions": 27,
        "screenPageViews": 216,
        "eventCount": 7901,
        "userEngagementDuration": 126743,
        "totalEngagementHours": 35.2,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "New Mexico",
        "activeUsers": 20,
        "sessions": 38,
        "engagedSessions": 22,
        "screenPageViews": 134,
        "eventCount": 840,
        "userEngagementDuration": 11468,
        "totalEngagementHours": 3.2,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Iowa",
        "activeUsers": 19,
        "sessions": 48,
        "engagedSessions": 34,
        "screenPageViews": 226,
        "eventCount": 7519,
        "userEngagementDuration": 79495,
        "totalEngagementHours": 22.1,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "South Dakota",
        "activeUsers": 19,
        "sessions": 30,
        "engagedSessions": 16,
        "screenPageViews": 111,
        "eventCount": 2922,
        "userEngagementDuration": 36904,
        "totalEngagementHours": 10.3,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Mississippi",
        "activeUsers": 17,
        "sessions": 50,
        "engagedSessions": 35,
        "screenPageViews": 204,
        "eventCount": 2748,
        "userEngagementDuration": 52701,
        "totalEngagementHours": 14.6,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "New Hampshire",
        "activeUsers": 16,
        "sessions": 41,
        "engagedSessions": 25,
        "screenPageViews": 244,
        "eventCount": 4821,
        "userEngagementDuration": 93765,
        "totalEngagementHours": 26.0,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Rhode Island",
        "activeUsers": 13,
        "sessions": 34,
        "engagedSessions": 22,
        "screenPageViews": 132,
        "eventCount": 4934,
        "userEngagementDuration": 58280,
        "totalEngagementHours": 16.2,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Hawaii",
        "activeUsers": 10,
        "sessions": 16,
        "engagedSessions": 12,
        "screenPageViews": 138,
        "eventCount": 697,
        "userEngagementDuration": 14303,
        "totalEngagementHours": 4.0,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Wyoming",
        "activeUsers": 8,
        "sessions": 18,
        "engagedSessions": 13,
        "screenPageViews": 66,
        "eventCount": 18944,
        "userEngagementDuration": 156979,
        "totalEngagementHours": 43.6,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Delaware",
        "activeUsers": 7,
        "sessions": 14,
        "engagedSessions": 10,
        "screenPageViews": 48,
        "eventCount": 387,
        "userEngagementDuration": 6962,
        "totalEngagementHours": 1.9,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Montana",
        "activeUsers": 7,
        "sessions": 17,
        "engagedSessions": 14,
        "screenPageViews": 128,
        "eventCount": 5921,
        "userEngagementDuration": 89948,
        "totalEngagementHours": 25.0,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Vermont",
        "activeUsers": 7,
        "sessions": 9,
        "engagedSessions": 7,
        "screenPageViews": 42,
        "eventCount": 144,
        "userEngagementDuration": 5982,
        "totalEngagementHours": 1.7,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Alaska",
        "activeUsers": 6,
        "sessions": 10,
        "engagedSessions": 2,
        "screenPageViews": 30,
        "eventCount": 91,
        "userEngagementDuration": 187,
        "totalEngagementHours": 0.1,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "North Dakota",
        "activeUsers": 5,
        "sessions": 7,
        "engagedSessions": 6,
        "screenPageViews": 38,
        "eventCount": 697,
        "userEngagementDuration": 10543,
        "totalEngagementHours": 2.9,
        "shareOfUsActiveUsersPct": 0.1
      }
    ],
    "items": [
      {
        "state": "Texas",
        "activeUsers": 353,
        "sessions": 732,
        "engagedSessions": 530,
        "screenPageViews": 2928,
        "eventCount": 86863,
        "userEngagementDuration": 1716603,
        "totalEngagementHours": 476.8,
        "shareOfUsActiveUsersPct": 9.1
      },
      {
        "state": "California",
        "activeUsers": 308,
        "sessions": 729,
        "engagedSessions": 456,
        "screenPageViews": 3362,
        "eventCount": 75043,
        "userEngagementDuration": 2242259,
        "totalEngagementHours": 622.8,
        "shareOfUsActiveUsersPct": 8.0
      },
      {
        "state": "Florida",
        "activeUsers": 252,
        "sessions": 622,
        "engagedSessions": 442,
        "screenPageViews": 2794,
        "eventCount": 68056,
        "userEngagementDuration": 1197595,
        "totalEngagementHours": 332.7,
        "shareOfUsActiveUsersPct": 6.5
      },
      {
        "state": "New York",
        "activeUsers": 204,
        "sessions": 499,
        "engagedSessions": 355,
        "screenPageViews": 1923,
        "eventCount": 78463,
        "userEngagementDuration": 987774,
        "totalEngagementHours": 274.4,
        "shareOfUsActiveUsersPct": 5.3
      },
      {
        "state": "Illinois",
        "activeUsers": 161,
        "sessions": 401,
        "engagedSessions": 287,
        "screenPageViews": 1476,
        "eventCount": 30867,
        "userEngagementDuration": 688622,
        "totalEngagementHours": 191.3,
        "shareOfUsActiveUsersPct": 4.2
      },
      {
        "state": "Ohio",
        "activeUsers": 159,
        "sessions": 468,
        "engagedSessions": 309,
        "screenPageViews": 1848,
        "eventCount": 42202,
        "userEngagementDuration": 1074482,
        "totalEngagementHours": 298.5,
        "shareOfUsActiveUsersPct": 4.1
      },
      {
        "state": "Pennsylvania",
        "activeUsers": 153,
        "sessions": 434,
        "engagedSessions": 288,
        "screenPageViews": 2120,
        "eventCount": 53595,
        "userEngagementDuration": 863135,
        "totalEngagementHours": 239.8,
        "shareOfUsActiveUsersPct": 4.0
      },
      {
        "state": "North Carolina",
        "activeUsers": 142,
        "sessions": 338,
        "engagedSessions": 216,
        "screenPageViews": 1502,
        "eventCount": 37368,
        "userEngagementDuration": 650766,
        "totalEngagementHours": 180.8,
        "shareOfUsActiveUsersPct": 3.7
      },
      {
        "state": "Georgia",
        "activeUsers": 141,
        "sessions": 324,
        "engagedSessions": 217,
        "screenPageViews": 1172,
        "eventCount": 24159,
        "userEngagementDuration": 444836,
        "totalEngagementHours": 123.6,
        "shareOfUsActiveUsersPct": 3.6
      },
      {
        "state": "Virginia",
        "activeUsers": 130,
        "sessions": 272,
        "engagedSessions": 195,
        "screenPageViews": 1140,
        "eventCount": 19346,
        "userEngagementDuration": 729921,
        "totalEngagementHours": 202.8,
        "shareOfUsActiveUsersPct": 3.4
      },
      {
        "state": "Michigan",
        "activeUsers": 125,
        "sessions": 358,
        "engagedSessions": 247,
        "screenPageViews": 1508,
        "eventCount": 17780,
        "userEngagementDuration": 382202,
        "totalEngagementHours": 106.2,
        "shareOfUsActiveUsersPct": 3.2
      },
      {
        "state": "Arizona",
        "activeUsers": 114,
        "sessions": 287,
        "engagedSessions": 199,
        "screenPageViews": 1279,
        "eventCount": 28333,
        "userEngagementDuration": 418146,
        "totalEngagementHours": 116.2,
        "shareOfUsActiveUsersPct": 2.9
      },
      {
        "state": "Tennessee",
        "activeUsers": 114,
        "sessions": 269,
        "engagedSessions": 191,
        "screenPageViews": 1238,
        "eventCount": 26045,
        "userEngagementDuration": 498293,
        "totalEngagementHours": 138.4,
        "shareOfUsActiveUsersPct": 2.9
      },
      {
        "state": "Minnesota",
        "activeUsers": 90,
        "sessions": 231,
        "engagedSessions": 178,
        "screenPageViews": 1080,
        "eventCount": 30174,
        "userEngagementDuration": 872328,
        "totalEngagementHours": 242.3,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Missouri",
        "activeUsers": 89,
        "sessions": 185,
        "engagedSessions": 139,
        "screenPageViews": 835,
        "eventCount": 14178,
        "userEngagementDuration": 236476,
        "totalEngagementHours": 65.7,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "New Jersey",
        "activeUsers": 87,
        "sessions": 212,
        "engagedSessions": 155,
        "screenPageViews": 911,
        "eventCount": 14844,
        "userEngagementDuration": 388609,
        "totalEngagementHours": 107.9,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Washington",
        "activeUsers": 87,
        "sessions": 199,
        "engagedSessions": 136,
        "screenPageViews": 821,
        "eventCount": 15430,
        "userEngagementDuration": 428080,
        "totalEngagementHours": 118.9,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Indiana",
        "activeUsers": 85,
        "sessions": 165,
        "engagedSessions": 112,
        "screenPageViews": 766,
        "eventCount": 18768,
        "userEngagementDuration": 376518,
        "totalEngagementHours": 104.6,
        "shareOfUsActiveUsersPct": 2.2
      },
      {
        "state": "Oklahoma",
        "activeUsers": 74,
        "sessions": 196,
        "engagedSessions": 140,
        "screenPageViews": 817,
        "eventCount": 24710,
        "userEngagementDuration": 355246,
        "totalEngagementHours": 98.7,
        "shareOfUsActiveUsersPct": 1.9
      },
      {
        "state": "Colorado",
        "activeUsers": 70,
        "sessions": 167,
        "engagedSessions": 123,
        "screenPageViews": 749,
        "eventCount": 22797,
        "userEngagementDuration": 398558,
        "totalEngagementHours": 110.7,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Alabama",
        "activeUsers": 69,
        "sessions": 152,
        "engagedSessions": 90,
        "screenPageViews": 599,
        "eventCount": 10714,
        "userEngagementDuration": 229322,
        "totalEngagementHours": 63.7,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Massachusetts",
        "activeUsers": 68,
        "sessions": 143,
        "engagedSessions": 105,
        "screenPageViews": 516,
        "eventCount": 13411,
        "userEngagementDuration": 257053,
        "totalEngagementHours": 71.4,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Oregon",
        "activeUsers": 68,
        "sessions": 138,
        "engagedSessions": 86,
        "screenPageViews": 700,
        "eventCount": 15466,
        "userEngagementDuration": 411503,
        "totalEngagementHours": 114.3,
        "shareOfUsActiveUsersPct": 1.8
      },
      {
        "state": "Maryland",
        "activeUsers": 60,
        "sessions": 119,
        "engagedSessions": 77,
        "screenPageViews": 678,
        "eventCount": 13581,
        "userEngagementDuration": 219801,
        "totalEngagementHours": 61.1,
        "shareOfUsActiveUsersPct": 1.6
      },
      {
        "state": "South Carolina",
        "activeUsers": 59,
        "sessions": 156,
        "engagedSessions": 102,
        "screenPageViews": 569,
        "eventCount": 11855,
        "userEngagementDuration": 230018,
        "totalEngagementHours": 63.9,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Louisiana",
        "activeUsers": 57,
        "sessions": 128,
        "engagedSessions": 85,
        "screenPageViews": 702,
        "eventCount": 14298,
        "userEngagementDuration": 244799,
        "totalEngagementHours": 68.0,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Kentucky",
        "activeUsers": 55,
        "sessions": 143,
        "engagedSessions": 104,
        "screenPageViews": 572,
        "eventCount": 8859,
        "userEngagementDuration": 195016,
        "totalEngagementHours": 54.2,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "Wisconsin",
        "activeUsers": 54,
        "sessions": 141,
        "engagedSessions": 109,
        "screenPageViews": 772,
        "eventCount": 22601,
        "userEngagementDuration": 423481,
        "totalEngagementHours": 117.6,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "Arkansas",
        "activeUsers": 39,
        "sessions": 103,
        "engagedSessions": 75,
        "screenPageViews": 452,
        "eventCount": 6328,
        "userEngagementDuration": 128364,
        "totalEngagementHours": 35.7,
        "shareOfUsActiveUsersPct": 1.0
      },
      {
        "state": "Nevada",
        "activeUsers": 36,
        "sessions": 96,
        "engagedSessions": 76,
        "screenPageViews": 554,
        "eventCount": 16327,
        "userEngagementDuration": 400950,
        "totalEngagementHours": 111.4,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "Kansas",
        "activeUsers": 35,
        "sessions": 64,
        "engagedSessions": 48,
        "screenPageViews": 318,
        "eventCount": 5723,
        "userEngagementDuration": 81897,
        "totalEngagementHours": 22.7,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "Connecticut",
        "activeUsers": 34,
        "sessions": 88,
        "engagedSessions": 68,
        "screenPageViews": 327,
        "eventCount": 3656,
        "userEngagementDuration": 143332,
        "totalEngagementHours": 39.8,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "Nebraska",
        "activeUsers": 27,
        "sessions": 57,
        "engagedSessions": 32,
        "screenPageViews": 319,
        "eventCount": 4708,
        "userEngagementDuration": 60100,
        "totalEngagementHours": 16.7,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "Utah",
        "activeUsers": 25,
        "sessions": 60,
        "engagedSessions": 46,
        "screenPageViews": 289,
        "eventCount": 3006,
        "userEngagementDuration": 78083,
        "totalEngagementHours": 21.7,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "Maine",
        "activeUsers": 23,
        "sessions": 115,
        "engagedSessions": 89,
        "screenPageViews": 511,
        "eventCount": 14125,
        "userEngagementDuration": 404133,
        "totalEngagementHours": 112.3,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "District of Columbia",
        "activeUsers": 22,
        "sessions": 44,
        "engagedSessions": 32,
        "screenPageViews": 142,
        "eventCount": 2464,
        "userEngagementDuration": 81482,
        "totalEngagementHours": 22.6,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "West Virginia",
        "activeUsers": 22,
        "sessions": 70,
        "engagedSessions": 38,
        "screenPageViews": 283,
        "eventCount": 9018,
        "userEngagementDuration": 130009,
        "totalEngagementHours": 36.1,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "Idaho",
        "activeUsers": 20,
        "sessions": 40,
        "engagedSessions": 27,
        "screenPageViews": 216,
        "eventCount": 7901,
        "userEngagementDuration": 126743,
        "totalEngagementHours": 35.2,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "New Mexico",
        "activeUsers": 20,
        "sessions": 38,
        "engagedSessions": 22,
        "screenPageViews": 134,
        "eventCount": 840,
        "userEngagementDuration": 11468,
        "totalEngagementHours": 3.2,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Iowa",
        "activeUsers": 19,
        "sessions": 48,
        "engagedSessions": 34,
        "screenPageViews": 226,
        "eventCount": 7519,
        "userEngagementDuration": 79495,
        "totalEngagementHours": 22.1,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "South Dakota",
        "activeUsers": 19,
        "sessions": 30,
        "engagedSessions": 16,
        "screenPageViews": 111,
        "eventCount": 2922,
        "userEngagementDuration": 36904,
        "totalEngagementHours": 10.3,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Mississippi",
        "activeUsers": 17,
        "sessions": 50,
        "engagedSessions": 35,
        "screenPageViews": 204,
        "eventCount": 2748,
        "userEngagementDuration": 52701,
        "totalEngagementHours": 14.6,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "New Hampshire",
        "activeUsers": 16,
        "sessions": 41,
        "engagedSessions": 25,
        "screenPageViews": 244,
        "eventCount": 4821,
        "userEngagementDuration": 93765,
        "totalEngagementHours": 26.0,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Rhode Island",
        "activeUsers": 13,
        "sessions": 34,
        "engagedSessions": 22,
        "screenPageViews": 132,
        "eventCount": 4934,
        "userEngagementDuration": 58280,
        "totalEngagementHours": 16.2,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Hawaii",
        "activeUsers": 10,
        "sessions": 16,
        "engagedSessions": 12,
        "screenPageViews": 138,
        "eventCount": 697,
        "userEngagementDuration": 14303,
        "totalEngagementHours": 4.0,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Wyoming",
        "activeUsers": 8,
        "sessions": 18,
        "engagedSessions": 13,
        "screenPageViews": 66,
        "eventCount": 18944,
        "userEngagementDuration": 156979,
        "totalEngagementHours": 43.6,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Delaware",
        "activeUsers": 7,
        "sessions": 14,
        "engagedSessions": 10,
        "screenPageViews": 48,
        "eventCount": 387,
        "userEngagementDuration": 6962,
        "totalEngagementHours": 1.9,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Montana",
        "activeUsers": 7,
        "sessions": 17,
        "engagedSessions": 14,
        "screenPageViews": 128,
        "eventCount": 5921,
        "userEngagementDuration": 89948,
        "totalEngagementHours": 25.0,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Vermont",
        "activeUsers": 7,
        "sessions": 9,
        "engagedSessions": 7,
        "screenPageViews": 42,
        "eventCount": 144,
        "userEngagementDuration": 5982,
        "totalEngagementHours": 1.7,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Alaska",
        "activeUsers": 6,
        "sessions": 10,
        "engagedSessions": 2,
        "screenPageViews": 30,
        "eventCount": 91,
        "userEngagementDuration": 187,
        "totalEngagementHours": 0.1,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "North Dakota",
        "activeUsers": 5,
        "sessions": 7,
        "engagedSessions": 6,
        "screenPageViews": 38,
        "eventCount": 697,
        "userEngagementDuration": 10543,
        "totalEngagementHours": 2.9,
        "shareOfUsActiveUsersPct": 0.1
      }
    ],
    "totalUsActiveUsers": 3865,
    "caveat": "GA4 geography is derived from IP-based location and is directional, not exact. City/metro rows undercount users on VPNs, smart TVs, and carrier networks. Active users are not additive across states or cities.",
    "methodology": "Internal GA4 pull, property 497892271. Dimensions region x country and city x region x country, filtered to United States for Sep 12-Sep 18, 2026. Engagement hours = userEngagementDuration / 3600.",
    "note": ""
  },
  "auditNotes": [
    {
      "date": "2026-07-24",
      "section": "Viewing Behavior",
      "note": "Replaced stale held unique-user/live-segment scorecards with fresh GA4 event-count cards for Jul 13-Jul 19, 2026. Old held cards were internally inconsistent because the dashboard had fresh event data but stale card flags from an earlier partial pull."
    },
    {
      "date": "2026-07-28",
      "section": "Full refresh",
      "note": "Tuesday manual refresh (rolling latest-complete-7-day window Jul 21-Jul 27, 2026 vs Jul 14-Jul 20, 2026). Fresh: GA4, YouTube, Stripe, Roku App Engagement. Stale/preserved with labels: Roku Sales Activity (source date still Jul 27), Google Ads (rate-limited 429, retry ~16638s), Meta (no new report), Apple sales and downloads (no new screenshot since Jul 5/Jul 26 respectively), TVOD/registered users (no new Michael email since Jul 27). No fresh landing-page-only or daily-trend GA4 pulls this cycle; platformAudience landing split is estimated from last week’s ratio and weeklyTrend/dailyTrend rows are preserved, both explicitly labeled."
    },
    {
      "date": "2026-08-02T08:20:00-07:00",
      "type": "apple_stripe_refresh",
      "summary": "Applied Apple Jul 26-Aug 1 downloads/sales and fresh Stripe connector pull. Apple YTD $1046.68; Stripe YTD 88/$1822.11; visible YTD 137/$3368.52.",
      "stalePreservation": "GA4/Roku/YouTube/Google Ads/Meta/TVOD last-good values preserved where no fresh pull was applied; no values zeroed."
    },
    "Added DotStudios app ad-serving manual export for Jul 26-Aug 1, 2026 (37,918 requests, 52,316 impressions, 931 errors). Kept separate from GA4 ads events and paid media impressions.",
    {
      "date": "2026-08-03T12:58:00-07:00",
      "type": "aug3_stripe_reconnect_refresh",
      "summary": "Started from the Aug 3 refresh candidate, replaced stale Stripe auth-required data with a fresh connector pull, updated Apple manual downloads/sales to the Aug 3 snapshot, and removed the retired web-acquisition section from visible scorecard groups.",
      "blockers": []
    },
    "YouTube YTD income restored as preserved/stale from the last successful cumulative pull through Jul 27, 2026; Aug 7 YouTube data remains partial through Aug 4 and did not include updated YTD fields."
  ],
  "tvodTitleRevenue": {
    "title": "TVOD Title Revenue & Registered Users",
    "eyebrow": "User-provided DotStudios TVOD dashboard export — aggregate only",
    "source": "DotStudios revenue-transactions.csv",
    "emailDate": "2026-09-19",
    "periodStart": "2026-09-12",
    "periodEnd": "2026-09-18",
    "period": "Sep 12-Sep 18, 2026",
    "periodNote": "Fresh DotStudios revenue-transactions.csv export for Sep 12-Sep 18, 2026. The export contains 32 paid line-item TVOD transactions totaling $669.66 gross/net (prior week: 43 transactions / $891.57). Do not add it to Stripe/Roku/Apple because platform sources overlap.",
    "registeredUsers": {
      "total": 7914,
      "active": 7814
    },
    "registeredUsersNote": "Registered-user count preserved from the last Michael Johnson/DotStudios email; this Aug 17-Aug 23 TVOD CSV contains transactions only.",
    "transactions": {
      "totalRows": 32,
      "paidTransactions": 32,
      "refundTransactions": 0,
      "latestSevenDayPaidTransactions": 32
    },
    "netRevenue": {
      "tvodSalesExportPaidGross": 669.66,
      "tvodSalesExportPaidNet": 669.66,
      "refundsGross": 0,
      "refundsNet": 0,
      "netIncludingRefunds": 669.66,
      "latestSevenDayGross": 669.66,
      "latestSevenDayNet": 669.66
    },
    "familyTotals": [
      {
        "family": "The Ark",
        "transactions": 15,
        "gross": 314.85,
        "net": 314.85,
        "shareOfPaidNetPct": 47.0,
        "shareOfTransactionsPct": 46.9
      },
      {
        "family": "The Librarians",
        "transactions": 15,
        "gross": 314.85,
        "net": 314.85,
        "shareOfPaidNetPct": 47.0,
        "shareOfTransactionsPct": 46.9
      },
      {
        "family": "Leverage - Season 2",
        "transactions": 1,
        "gross": 19.98,
        "net": 19.98,
        "shareOfPaidNetPct": 3.0,
        "shareOfTransactionsPct": 3.1
      },
      {
        "family": "Leverage - Season 1",
        "transactions": 1,
        "gross": 19.98,
        "net": 19.98,
        "shareOfPaidNetPct": 3.0,
        "shareOfTransactionsPct": 3.1
      }
    ],
    "titleFamilySummary": {
      "arkTransactions": 15,
      "arkGross": 314.85,
      "arkNet": 314.85,
      "librariansTransactions": 15,
      "librariansGross": 314.85,
      "librariansNet": 314.85,
      "arkShareOfPaidNetPct": 47.0,
      "librariansShareOfPaidNetPct": 47.0
    },
    "topTitlesByNet": [
      {
        "title": "The Ark - Season 3",
        "transactions": 15,
        "gross": 314.85,
        "net": 314.85,
        "shareOfPaidNetPct": 47.0,
        "shareOfTransactionsPct": 46.9
      },
      {
        "title": "The Librarians: The Next Chapter Season 2",
        "transactions": 15,
        "gross": 314.85,
        "net": 314.85,
        "shareOfPaidNetPct": 47.0,
        "shareOfTransactionsPct": 46.9
      },
      {
        "title": "Leverage - Season 2",
        "transactions": 1,
        "gross": 19.98,
        "net": 19.98,
        "shareOfPaidNetPct": 3.0,
        "shareOfTransactionsPct": 3.1
      },
      {
        "title": "Leverage - Season 1",
        "transactions": 1,
        "gross": 19.98,
        "net": 19.98,
        "shareOfPaidNetPct": 3.0,
        "shareOfTransactionsPct": 3.1
      }
    ],
    "channelBreakout": [
      {
        "channel": "apple",
        "transactions": 14,
        "gross": 291.84,
        "net": 291.84,
        "shareOfPaidNetPct": 43.6,
        "shareOfTransactionsPct": 43.8
      },
      {
        "channel": "android",
        "transactions": 11,
        "gross": 230.89,
        "net": 230.89,
        "shareOfPaidNetPct": 34.5,
        "shareOfTransactionsPct": 34.4
      },
      {
        "channel": "web",
        "transactions": 6,
        "gross": 125.94,
        "net": 125.94,
        "shareOfPaidNetPct": 18.8,
        "shareOfTransactionsPct": 18.8
      },
      {
        "channel": "roku",
        "transactions": 1,
        "gross": 20.99,
        "net": 20.99,
        "shareOfPaidNetPct": 3.1,
        "shareOfTransactionsPct": 3.1
      }
    ],
    "daily": [
      {
        "date": "2026-09-12",
        "label": "Sep 12",
        "transactions": 6,
        "gross": 125.94,
        "net": 125.94
      },
      {
        "date": "2026-09-13",
        "label": "Sep 13",
        "transactions": 7,
        "gross": 146.93,
        "net": 146.93
      },
      {
        "date": "2026-09-14",
        "label": "Sep 14",
        "transactions": 4,
        "gross": 83.96,
        "net": 83.96
      },
      {
        "date": "2026-09-15",
        "label": "Sep 15",
        "transactions": 4,
        "gross": 82.95,
        "net": 82.95
      },
      {
        "date": "2026-09-16",
        "label": "Sep 16",
        "transactions": 1,
        "gross": 20.99,
        "net": 20.99
      },
      {
        "date": "2026-09-17",
        "label": "Sep 17",
        "transactions": 5,
        "gross": 103.94,
        "net": 103.94
      },
      {
        "date": "2026-09-18",
        "label": "Sep 18",
        "transactions": 5,
        "gross": 104.95,
        "net": 104.95
      }
    ],
    "reconciliationNote": "DotStudios is the broadest current TVOD dashboard export. Stripe, Apple, and Roku are overlapping checks/slices, not additive sales sources.",
    "priorPeriod": {
      "period": "Sep 5-Sep 11, 2026",
      "paidTransactions": 43,
      "net": 891.57
    },
    "deltaVsPriorNetPct": -24.89,
    "deltaVsPriorTransactionsPct": -25.58
  },
  "weeklyTrendNote": "Fresh GA4 daily rows for Sep 12-Sep 18, 2026; property 497892271.",
  "dotStudiosAppAds": {
    "source": "DotStudios ad-metrics.csv",
    "sourceType": "manual_dotstudios_export",
    "sourceFileLabel": "DotStudios app ad-serving export uploaded Sep 19, 2026",
    "period": "Sep 12-Sep 18, 2026",
    "date_range": [
      "2026-09-12",
      "2026-09-18"
    ],
    "rows": 312,
    "totals": {
      "requests": 31226,
      "impressions": 29769,
      "errors": 1456,
      "impressionsPerRequest": 0.95,
      "impressionsPerRequestPct": 95.33,
      "errorRatePct": 4.66,
      "avgAdsPerPod": 0.95
    },
    "dailyTrend": [
      {
        "requests": 4391,
        "impressions": 4046,
        "errors": 181,
        "impressionsPerRequest": 0.92,
        "impressionsPerRequestPct": 92.14,
        "errorRatePct": 4.12,
        "avgAdsPerPod": 0.92,
        "date": "2026-09-12",
        "label": "2026-09-12"
      },
      {
        "requests": 4491,
        "impressions": 4253,
        "errors": 134,
        "impressionsPerRequest": 0.95,
        "impressionsPerRequestPct": 94.7,
        "errorRatePct": 2.98,
        "avgAdsPerPod": 0.95,
        "date": "2026-09-13",
        "label": "2026-09-13"
      },
      {
        "requests": 3209,
        "impressions": 3081,
        "errors": 119,
        "impressionsPerRequest": 0.96,
        "impressionsPerRequestPct": 96.01,
        "errorRatePct": 3.71,
        "avgAdsPerPod": 0.96,
        "date": "2026-09-14",
        "label": "2026-09-14"
      },
      {
        "requests": 4176,
        "impressions": 4059,
        "errors": 205,
        "impressionsPerRequest": 0.97,
        "impressionsPerRequestPct": 97.2,
        "errorRatePct": 4.91,
        "avgAdsPerPod": 0.97,
        "date": "2026-09-15",
        "label": "2026-09-15"
      },
      {
        "requests": 4499,
        "impressions": 4295,
        "errors": 218,
        "impressionsPerRequest": 0.95,
        "impressionsPerRequestPct": 95.47,
        "errorRatePct": 4.85,
        "avgAdsPerPod": 0.95,
        "date": "2026-09-16",
        "label": "2026-09-16"
      },
      {
        "requests": 5239,
        "impressions": 5088,
        "errors": 204,
        "impressionsPerRequest": 0.97,
        "impressionsPerRequestPct": 97.12,
        "errorRatePct": 3.89,
        "avgAdsPerPod": 0.97,
        "date": "2026-09-17",
        "label": "2026-09-17"
      },
      {
        "requests": 5221,
        "impressions": 4947,
        "errors": 395,
        "impressionsPerRequest": 0.95,
        "impressionsPerRequestPct": 94.75,
        "errorRatePct": 7.57,
        "avgAdsPerPod": 0.95,
        "date": "2026-09-18",
        "label": "2026-09-18"
      }
    ],
    "deviceSplit": [
      {
        "requests": 15251,
        "impressions": 14729,
        "errors": 1206,
        "impressionsPerRequest": 0.97,
        "impressionsPerRequestPct": 96.58,
        "errorRatePct": 7.91,
        "avgAdsPerPod": 0.97,
        "device": "roku",
        "label": "roku"
      },
      {
        "requests": 6346,
        "impressions": 5793,
        "errors": 182,
        "impressionsPerRequest": 0.91,
        "impressionsPerRequestPct": 91.29,
        "errorRatePct": 2.87,
        "avgAdsPerPod": 0.91,
        "device": "android",
        "label": "android"
      },
      {
        "requests": 5600,
        "impressions": 5271,
        "errors": 57,
        "impressionsPerRequest": 0.94,
        "impressionsPerRequestPct": 94.12,
        "errorRatePct": 1.02,
        "avgAdsPerPod": 0.94,
        "device": "ios",
        "label": "ios"
      },
      {
        "requests": 1559,
        "impressions": 1557,
        "errors": 3,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 99.87,
        "errorRatePct": 0.19,
        "avgAdsPerPod": 1.0,
        "device": "appletv",
        "label": "appletv"
      },
      {
        "requests": 1504,
        "impressions": 1470,
        "errors": 5,
        "impressionsPerRequest": 0.98,
        "impressionsPerRequestPct": 97.74,
        "errorRatePct": 0.33,
        "avgAdsPerPod": 0.98,
        "device": "androidtv",
        "label": "androidtv"
      },
      {
        "requests": 966,
        "impressions": 949,
        "errors": 3,
        "impressionsPerRequest": 0.98,
        "impressionsPerRequestPct": 98.24,
        "errorRatePct": 0.31,
        "avgAdsPerPod": 0.98,
        "device": "firetv",
        "label": "firetv"
      }
    ],
    "topChannels": [
      {
        "requests": 5284,
        "impressions": 4898,
        "errors": 19,
        "impressionsPerRequest": 0.93,
        "impressionsPerRequestPct": 92.69,
        "errorRatePct": 0.36,
        "avgAdsPerPod": 0.93,
        "channel": "The Ark",
        "label": "The Ark"
      },
      {
        "requests": 3773,
        "impressions": 3659,
        "errors": 65,
        "impressionsPerRequest": 0.97,
        "impressionsPerRequestPct": 96.98,
        "errorRatePct": 1.72,
        "avgAdsPerPod": 0.97,
        "channel": "Leverage",
        "label": "Leverage"
      },
      {
        "requests": 2415,
        "impressions": 2286,
        "errors": 145,
        "impressionsPerRequest": 0.95,
        "impressionsPerRequestPct": 94.66,
        "errorRatePct": 6.0,
        "avgAdsPerPod": 0.95,
        "channel": "The Librarians (Full Series)",
        "label": "The Librarians (Full Series)"
      },
      {
        "requests": 1922,
        "impressions": 1838,
        "errors": 112,
        "impressionsPerRequest": 0.96,
        "impressionsPerRequestPct": 95.63,
        "errorRatePct": 5.83,
        "avgAdsPerPod": 0.96,
        "channel": "The Ark - Season 2",
        "label": "The Ark - Season 2"
      },
      {
        "requests": 1883,
        "impressions": 1647,
        "errors": 3,
        "impressionsPerRequest": 0.87,
        "impressionsPerRequestPct": 87.47,
        "errorRatePct": 0.16,
        "avgAdsPerPod": 0.87,
        "channel": "Leverage: Redemption",
        "label": "Leverage: Redemption"
      },
      {
        "requests": 1304,
        "impressions": 1208,
        "errors": 61,
        "impressionsPerRequest": 0.93,
        "impressionsPerRequestPct": 92.64,
        "errorRatePct": 4.68,
        "avgAdsPerPod": 0.93,
        "channel": "Leverage: Redemption - Season 3",
        "label": "Leverage: Redemption - Season 3"
      },
      {
        "requests": 1222,
        "impressions": 1196,
        "errors": 54,
        "impressionsPerRequest": 0.98,
        "impressionsPerRequestPct": 97.87,
        "errorRatePct": 4.42,
        "avgAdsPerPod": 0.98,
        "channel": "The Ark - Season 1",
        "label": "The Ark - Season 1"
      },
      {
        "requests": 1189,
        "impressions": 1186,
        "errors": 32,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 99.75,
        "errorRatePct": 2.69,
        "avgAdsPerPod": 1.0,
        "channel": "Leverage - Season 1",
        "label": "Leverage - Season 1"
      },
      {
        "requests": 1148,
        "impressions": 1124,
        "errors": 30,
        "impressionsPerRequest": 0.98,
        "impressionsPerRequestPct": 97.91,
        "errorRatePct": 2.61,
        "avgAdsPerPod": 0.98,
        "channel": "Leverage - Season 4",
        "label": "Leverage - Season 4"
      },
      {
        "requests": 1073,
        "impressions": 1043,
        "errors": 140,
        "impressionsPerRequest": 0.97,
        "impressionsPerRequestPct": 97.2,
        "errorRatePct": 13.05,
        "avgAdsPerPod": 0.97,
        "channel": "Almost Paradise - Season 1",
        "label": "Almost Paradise - Season 1"
      },
      {
        "requests": 988,
        "impressions": 986,
        "errors": 3,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 99.8,
        "errorRatePct": 0.3,
        "avgAdsPerPod": 1.0,
        "channel": "Leverage: Redemption - Season 2",
        "label": "Leverage: Redemption - Season 2"
      },
      {
        "requests": 947,
        "impressions": 925,
        "errors": 154,
        "impressionsPerRequest": 0.98,
        "impressionsPerRequestPct": 97.68,
        "errorRatePct": 16.26,
        "avgAdsPerPod": 0.98,
        "channel": "Leverage - Season 2",
        "label": "Leverage - Season 2"
      }
    ],
    "topCountries": [
      {
        "requests": 30641,
        "impressions": 29192,
        "errors": 1456,
        "impressionsPerRequest": 0.95,
        "impressionsPerRequestPct": 95.27,
        "errorRatePct": 4.75,
        "avgAdsPerPod": 0.95,
        "country": "United States",
        "label": "United States"
      },
      {
        "requests": 567,
        "impressions": 559,
        "errors": 0,
        "impressionsPerRequest": 0.99,
        "impressionsPerRequestPct": 98.59,
        "errorRatePct": 0.0,
        "avgAdsPerPod": 0.99,
        "country": "Australia",
        "label": "Australia"
      },
      {
        "requests": 17,
        "impressions": 17,
        "errors": 0,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 100.0,
        "errorRatePct": 0.0,
        "avgAdsPerPod": 1.0,
        "country": "U.S. Virgin Islands",
        "label": "U.S. Virgin Islands"
      },
      {
        "requests": 1,
        "impressions": 1,
        "errors": 0,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 100.0,
        "errorRatePct": 0.0,
        "avgAdsPerPod": 1.0,
        "country": "Jamaica",
        "label": "Jamaica"
      }
    ],
    "topVideos": [
      {
        "requests": 2075,
        "impressions": 1831,
        "errors": 15,
        "impressionsPerRequest": 0.88,
        "impressionsPerRequestPct": 88.24,
        "errorRatePct": 0.72,
        "avgAdsPerPod": 0.88,
        "videoTitle": "(not set) (The Ark)",
        "label": "(not set) (The Ark)"
      },
      {
        "requests": 750,
        "impressions": 732,
        "errors": 58,
        "impressionsPerRequest": 0.98,
        "impressionsPerRequestPct": 97.6,
        "errorRatePct": 7.73,
        "avgAdsPerPod": 0.98,
        "videoTitle": "Rise of the Kalangay (Almost Paradise - Season 1)",
        "label": "Rise of the Kalangay (Almost Paradise - Season 1)"
      },
      {
        "requests": 589,
        "impressions": 584,
        "errors": 6,
        "impressionsPerRequest": 0.99,
        "impressionsPerRequestPct": 99.15,
        "errorRatePct": 1.02,
        "avgAdsPerPod": 0.99,
        "videoTitle": "It Should Have Been You (The Ark - Season 2)",
        "label": "It Should Have Been You (The Ark - Season 2)"
      },
      {
        "requests": 570,
        "impressions": 576,
        "errors": 13,
        "impressionsPerRequest": 1.01,
        "impressionsPerRequestPct": 101.05,
        "errorRatePct": 2.28,
        "avgAdsPerPod": 1.01,
        "videoTitle": "The Long Goodbye Job (Leverage - Season 5)",
        "label": "The Long Goodbye Job (Leverage - Season 5)"
      },
      {
        "requests": 593,
        "impressions": 551,
        "errors": 35,
        "impressionsPerRequest": 0.93,
        "impressionsPerRequestPct": 92.92,
        "errorRatePct": 5.9,
        "avgAdsPerPod": 0.93,
        "videoTitle": "(not set) (Leverage)",
        "label": "(not set) (Leverage)"
      },
      {
        "requests": 572,
        "impressions": 528,
        "errors": 2,
        "impressionsPerRequest": 0.92,
        "impressionsPerRequestPct": 92.31,
        "errorRatePct": 0.35,
        "avgAdsPerPod": 0.92,
        "videoTitle": "(not set) (Leverage: Redemption - Season 3)",
        "label": "(not set) (Leverage: Redemption - Season 3)"
      },
      {
        "requests": 562,
        "impressions": 500,
        "errors": 124,
        "impressionsPerRequest": 0.89,
        "impressionsPerRequestPct": 88.97,
        "errorRatePct": 22.06,
        "avgAdsPerPod": 0.89,
        "videoTitle": "And the Reunion of Evil (The Librarians - Season 3)",
        "label": "And the Reunion of Evil (The Librarians - Season 3)"
      },
      {
        "requests": 486,
        "impressions": 485,
        "errors": 3,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 99.79,
        "errorRatePct": 0.62,
        "avgAdsPerPod": 1.0,
        "videoTitle": "The First Contact Job (Leverage)",
        "label": "The First Contact Job (Leverage)"
      },
      {
        "requests": 480,
        "impressions": 467,
        "errors": 6,
        "impressionsPerRequest": 0.97,
        "impressionsPerRequestPct": 97.29,
        "errorRatePct": 1.25,
        "avgAdsPerPod": 0.97,
        "videoTitle": "The Second David Job (Leverage)",
        "label": "The Second David Job (Leverage)"
      },
      {
        "requests": 460,
        "impressions": 460,
        "errors": 0,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 100.0,
        "errorRatePct": 0.0,
        "avgAdsPerPod": 1.0,
        "videoTitle": "A Slow Death Is Worse (The Ark - Season 1)",
        "label": "A Slow Death Is Worse (The Ark - Season 1)"
      }
    ],
    "caveats": [
      "These are ElectricNOW IN-APP ad impressions (ad-server delivery), not paid-campaign impressions.",
      "No ad revenue/yield in this export; do not infer ROAS or ad income. Michael Johnson (Sep 8) said DotStudios ad metrics are inaccurate; the Ionic report is the revenue source of record.",
      "Rows with 0 requests but errors > 0 are ad calls that failed before a request was counted; they inflate error totals and are reported separately."
    ],
    "plainEnglish": "DotStudios app ad-serving data shows 29,769 in-app ad impressions from 31,226 ad requests for Sep 12-Sep 18, 2026, with 1,456 errors. Compared with the last fresh export (Sep 7-Sep 13, 2026: 22,506 impressions), impressions are +32.3%. Roku delivered 14,729 impressions and non-Roku platforms 15,040 (last fresh export: 7,615). These are ElectricNOW IN-APP ad impressions, not paid-campaign impressions, and no ad revenue is included. Michael Johnson has said the DotStudios ad numbers are not accurate and Ionic is the revenue source, so treat this as a delivery cross-check only. The previous export overlaps the current window; its percentage change is not a week-over-week growth rate. The previous export overlaps the current window; its percentage change is not a week-over-week growth rate. The previous export overlaps the current window; its percentage change is not a week-over-week growth rate.",
    "status": "fresh_manual",
    "dataFreshness": "manual_current",
    "updatedAt": "2026-09-19T13:00:00-07:00",
    "periodStart": "2026-09-12",
    "periodEnd": "2026-09-18",
    "freshness": "Fresh manual DotStudios app ad-serving export integrated for Sep 12-Sep 18, 2026.",
    "adRevenueAvailable": false,
    "revenueCaveat": "No ad-server revenue or yield was included in this DotStudios CSV; this section measures in-app ad delivery, not true ad-sales revenue.",
    "dataPeriod": "Sep 12-Sep 18, 2026",
    "alerts": [
      "Non-Roku in-app ad delivery resumed for Sep 12-Sep 18, 2026: 15,040 impressions on 15,975 non-Roku requests."
    ],
    "zeroRequestErrorRows": {
      "count": 0,
      "errors": 0,
      "byDevice": {}
    },
    "lastFreshExport": {
      "period": "Sep 7-Sep 13, 2026",
      "requests": 25919,
      "impressions": 22506,
      "errors": 5389
    },
    "deltaVsLastFresh": {
      "impressionsPct": 32.3,
      "requestsPct": 20.5,
      "errorsPct": -73.0
    },
    "gapNote": null,
    "priorFreshByDevice": {
      "roku": {
        "requests": 15503,
        "impressions": 14891,
        "errors": 1259
      },
      "android": {
        "requests": 4880,
        "impressions": 3341,
        "errors": 1272
      },
      "ios": {
        "requests": 3073,
        "impressions": 2873,
        "errors": 1367
      },
      "androidtv": {
        "requests": 1128,
        "impressions": 659,
        "errors": 466
      },
      "appletv": {
        "requests": 516,
        "impressions": 515,
        "errors": 434
      },
      "firetv": {
        "requests": 817,
        "impressions": 222,
        "errors": 590
      },
      "vizio": {
        "requests": 2,
        "impressions": 5,
        "errors": 1
      }
    }
  },
  "sourceStatus": {
    "ga4": {
      "status": "fresh",
      "period": "Sep 12-Sep 18, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    "stripe": {
      "status": "fresh",
      "period": "Sep 12-Sep 18, 2026",
      "gross": 104.95,
      "transactions": 5,
      "source": "Stripe connector charge list"
    },
    "rokuSales": {
      "status": "stale_preserved",
      "period": "Sep 7-Sep 13, 2026",
      "source": "Roku Sales Activity email; newer report not obtained this run",
      "note": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
    },
    "rokuAppEngagement": {
      "status": "stale_preserved",
      "period": "Sep 6-Sep 12, 2026",
      "source": "Roku App Engagement email; newer report not obtained this run",
      "note": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
    },
    "rokuTRC": {
      "status": "stale_preserved",
      "note": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
    },
    "appleManual": {
      "status": "fresh_manual",
      "period": "Sep 12-Sep 18, 2026",
      "salesGross": 294.95,
      "downloads": 85,
      "freeDownloads": null,
      "inAppUnits": null,
      "source": "Apple App Store Connect manual snapshot",
      "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable."
    },
    "dotStudiosAppAds": {
      "status": "fresh_manual",
      "period": "Sep 12-Sep 18, 2026",
      "note": "In-app ad-serving export; delivery cross-check only (Michael: DotStudios ad numbers inaccurate; Ionic is the revenue source)."
    },
    "googleAds": {
      "status": "fresh_no_delivery",
      "period": "Sep 12-Sep 18, 2026",
      "note": "Fresh Google Ads connector query for Sep 12-Sep 18 and Sep 5-Sep 11 returned no delivery rows: no reported spend, impressions, clicks or conversions in either window. This is paid acquisition, not in-app ad delivery."
    },
    "metaAds": {
      "status": "stale_historical_context",
      "period": "Aug 4-Aug 26, 2026",
      "note": "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero."
    },
    "youtube": {
      "status": "fresh_partial",
      "period": "Sep 12-Sep 16, 2026",
      "note": "Revenue-aligned YouTube figures cover Sep 12-Sep 16 (5 days); Sep 17-Sep 18 are not available yet.",
      "dataCompleteThrough": "2026-09-16"
    },
    "apple": {
      "status": "fresh_manual",
      "period": "Sep 12-Sep 18, 2026",
      "salesGross": 294.95,
      "downloads": 85,
      "freeDownloads": null,
      "inAppUnits": null,
      "source": "Apple App Store Connect manual snapshot",
      "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable."
    }
  },
  "refreshAuditNotes": [
    "Sep 12-Sep 18, 2026 refreshed September 19, 2026.",
    "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
    "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals.",
    "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero.",
    "Revenue-aligned YouTube figures cover Sep 12-Sep 16 (5 days); Sep 17-Sep 18 are not available yet."
  ],
  "connectorStatus": {
    "GA4": "CONNECTED; property 497892271 refreshed for Sep 12-Sep 18, 2026.",
    "Stripe": "CONNECTED; charge list pulled fresh.",
    "Outlook/Roku emails": "CONNECTED search; ROKU folder and mailbox searched, but a newer Roku report was not obtained this run, so Roku values remain stale.",
    "Google Ads": "CONNECTED (API v25); zero rows because the account has had no delivery since Jun 5, 2026.",
    "Meta Ads": "Outlook search found no new Meta-only report since Aug 27; flight ended Aug 26.",
    "YouTube": "CONNECTED; status fresh_partial."
  },
  "audit": {
    "status": "pass_with_labeled_stale_sources",
    "checkedAt": "2026-08-24T14:50:00-07:00",
    "checksPassed": 34,
    "errors": [],
    "summary": {
      "period": "Aug 17-Aug 23, 2026",
      "ga4ActiveUsers": 4708,
      "ga4Sessions": 11138,
      "dotStudiosTvodGross": 1846.15,
      "dotStudiosTvodTransactions": 84,
      "dotStudiosAppInstalls": 1533,
      "dotStudiosVideoViews": 16373,
      "dotStudiosAppleTvViews": 241,
      "dotStudiosAppAdRequests": 25602,
      "dotStudiosAppAdImpressions": 22964,
      "dotStudiosAppAdErrors": 10362,
      "appleDownloads": 528,
      "appleSalesGross": 477.78,
      "stripeGross": 398.81,
      "stripeTransactions": 19,
      "youtubeYtdRevenue": 115998.58,
      "rokuStatus": "stale_preserved_attachment_unavailable_trc_excluded",
      "googleAdsStatus": "stale_metrics_preserved_campaign_inventory_only",
      "metaAdsStatus": "stale_no_new_email"
    },
    "checks": [
      "Reporting period updated to Aug 17-Aug 23, 2026.",
      "GA4 core, daily, source/medium, top pages, platform/device, rolling 28-day, and U.S. geography rows refreshed from Aug 24 saved raw connector outputs.",
      "DotStudios TVOD revenue-transactions-11.csv integrated for Aug 17-Aug 23.",
      "DotStudios app-installs-summary-2.csv integrated for Aug 17-Aug 23.",
      "DotStudios video-views-3.csv integrated for Aug 17-Aug 23, including Apple TV views.",
      "DotStudios ad-metrics-3.csv integrated for Aug 17-Aug 23 as in-app ad-serving delivery only, separate from paid-campaign impressions and ad revenue.",
      "Manual Apple Connect sales/download screenshots integrated for Aug 17-Aug 23.",
      "Stripe charge-list parsed fresh after connector reconnection; Stripe Analytics/Sigma permission blocker recorded.",
      "Roku TRC/live-channel emails explicitly excluded from app/platform usage.",
      "Roku, Google Ads, Meta, and YouTube partial-current statuses are labeled rather than zero-filled.",
      "YouTube YTD income is present and separate from app TVOD."
    ],
    "blockers": [
      "Roku Aug 24 email search did not expose PDF attachments, so Aug 17 Roku Sales/App Engagement values are preserved and marked stale.",
      "Stripe Analytics/Sigma blocked by reporting_write permission; charge-list source check is fresh.",
      "Google Ads Aug 24 connector output contained campaign inventory only, not performance metrics.",
      "No newer Nathan/Forge One Meta-only report found in the saved Outlook search.",
      "YouTube current-period daily rows returned through Aug 21 only; Aug 22-Aug 23 were not zero-filled."
    ]
  },
  "updateNotes": [
    "Sep 12-Sep 18, 2026 refreshed September 19, 2026.",
    "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
    "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals.",
    "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero.",
    "Revenue-aligned YouTube figures cover Sep 12-Sep 16 (5 days); Sep 17-Sep 18 are not available yet."
  ],
  "monthlyTrendNote": "Rolling 28-day trend covers Jul 24-Aug 20, 2026 and compares against Jun 26-Jul 23, 2026 where summary comparisons are available.",
  "lastUpdated": "September 19, 2026 (Pacific)",
  "lastUpdatedIso": "2026-09-19T15:38:20.670567+00:00",
  "generatedAtIso": "2026-09-19T15:38:20.670567+00:00",
  "reportingPeriod": "Sep 12-Sep 18, 2026",
  "rolling28Summary": {
    "period": "Aug 22-Sep 18, 2026",
    "previousPeriod": "Jul 25-Aug 21, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "current": {
      "activeUsers": 12315,
      "newUsers": 4944,
      "sessions": 40695,
      "engagedSessions": 31697,
      "engagementRate": 77.89,
      "screenPageViews": 207703,
      "eventCount": 4028429,
      "userEngagementDuration": 89075712,
      "totalEngagementHours": 24743.25,
      "avgEngagedMinutesPerUser": 120.55178237921234,
      "avgEngagedMinutesPerSession": 36.48102223860425
    },
    "previous": {
      "activeUsers": 15370,
      "newUsers": 8353,
      "sessions": 51034,
      "engagedSessions": 41656,
      "engagementRate": 81.62,
      "screenPageViews": 200128,
      "eventCount": 4330119,
      "userEngagementDuration": 88940323,
      "totalEngagementHours": 24705.65,
      "avgEngagedMinutesPerUser": 96.44363803947083,
      "avgEngagedMinutesPerSession": 29.04610096536949
    },
    "activeUsersDirection": {
      "direction": "down",
      "deltaPct": -19.876382563435264
    },
    "sessionsDirection": {
      "direction": "down",
      "deltaPct": -20.25904299094721
    },
    "screenPageViewsDirection": {
      "direction": "up",
      "deltaPct": 3.7850775503677645
    },
    "note": "Rolling 28 complete days ending 2026-09-18 vs the preceding 28 days (Internal GA4 pull, property 497892271)."
  },
  "sourceMediumSummary": {
    "period": "Sep 12-Sep 18, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "source": "(direct) / (none)",
        "sessions": 4532,
        "activeUsers": 2230
      },
      {
        "source": "homescreen / (not set)",
        "sessions": 2004,
        "activeUsers": 615
      },
      {
        "source": "(not set)",
        "sessions": 1435,
        "activeUsers": 746
      },
      {
        "source": "google / organic",
        "sessions": 449,
        "activeUsers": 192
      },
      {
        "source": "google-play / organic",
        "sessions": 379,
        "activeUsers": 186
      },
      {
        "source": "homescreen / ",
        "sessions": 376,
        "activeUsers": 280
      },
      {
        "source": "hs-search / (not set)",
        "sessions": 344,
        "activeUsers": 83
      },
      {
        "source": "channel-store / (not set)",
        "sessions": 137,
        "activeUsers": 24
      },
      {
        "source": "bing / organic",
        "sessions": 133,
        "activeUsers": 82
      },
      {
        "source": "homescreen / (none)",
        "sessions": 108,
        "activeUsers": 101
      },
      {
        "source": "electricnow.us.auth0.com / referral",
        "sessions": 74,
        "activeUsers": 11
      },
      {
        "source": "hs-voice-search / (not set)",
        "sessions": 39,
        "activeUsers": 20
      },
      {
        "source": "fb / paid",
        "sessions": 14,
        "activeUsers": 12
      },
      {
        "source": "ig / paid",
        "sessions": 4,
        "activeUsers": 4
      }
    ],
    "note": "GA4-attributed paid sessions only. App-install campaigns land in the stores, so store-attributed installs will not appear here as paid sessions. Do not read this as total paid impact."
  },
  "campaignSummary": {
    "period": "Sep 12-Sep 18, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "name": "(direct)",
        "sessions": 4742,
        "activeUsers": 2373
      },
      {
        "name": "(not set)",
        "sessions": 4438,
        "activeUsers": 1553
      },
      {
        "name": "(organic)",
        "sessions": 605,
        "activeUsers": 264
      },
      {
        "name": "",
        "sessions": 473,
        "activeUsers": 342
      },
      {
        "name": "(referral)",
        "sessions": 219,
        "activeUsers": 102
      },
      {
        "name": "(cross-network)",
        "sessions": 9,
        "activeUsers": 9
      },
      {
        "name": "6991179955958",
        "sessions": 6,
        "activeUsers": 6
      },
      {
        "name": "52522971073362",
        "sessions": 5,
        "activeUsers": 4
      },
      {
        "name": "52522971072562",
        "sessions": 4,
        "activeUsers": 4
      },
      {
        "name": "52522086945962",
        "sessions": 2,
        "activeUsers": 2
      },
      {
        "name": "52522050595562",
        "sessions": 1,
        "activeUsers": 0
      },
      {
        "name": "52524776437562",
        "sessions": 1,
        "activeUsers": 1
      }
    ],
    "note": "Numeric campaign names are raw Meta campaign IDs passed through to GA4; no human-readable title is available from the connector. The Meta flight ended Aug 26, so any campaign-tagged sessions this week are residual."
  },
  "platformDeviceBreakdown": {
    "period": "Sep 12-Sep 18, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "platform": "web",
        "device": "smart tv",
        "sessions": 3844,
        "activeUsers": 1228,
        "screenPageViews": 17670
      },
      {
        "platform": "web",
        "device": "desktop",
        "sessions": 1461,
        "activeUsers": 623,
        "screenPageViews": 6249
      },
      {
        "platform": "iOS",
        "device": "mobile",
        "sessions": 1393,
        "activeUsers": 737,
        "screenPageViews": 6008
      },
      {
        "platform": "Android",
        "device": "mobile",
        "sessions": 1286,
        "activeUsers": 540,
        "screenPageViews": 5199
      },
      {
        "platform": "Android",
        "device": "smart tv",
        "sessions": 508,
        "activeUsers": 229,
        "screenPageViews": 2720
      },
      {
        "platform": "iOS",
        "device": "tablet",
        "sessions": 400,
        "activeUsers": 187,
        "screenPageViews": 2179
      },
      {
        "platform": "iOS",
        "device": "smart tv",
        "sessions": 317,
        "activeUsers": 139,
        "screenPageViews": 1500
      },
      {
        "platform": "Android",
        "device": "tablet",
        "sessions": 161,
        "activeUsers": 70,
        "screenPageViews": 724
      },
      {
        "platform": "web",
        "device": "mobile",
        "sessions": 135,
        "activeUsers": 91,
        "screenPageViews": 323
      },
      {
        "platform": "web",
        "device": "tablet",
        "sessions": 119,
        "activeUsers": 36,
        "screenPageViews": 416
      }
    ],
    "note": "GA4 platform x device. 'web' on smart tv is the browser-based TV app surface."
  },
  "sourceStatuses": {
    "ga4": {
      "status": "fresh",
      "period": "Sep 12-Sep 18, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    "stripe": {
      "status": "fresh",
      "period": "Sep 12-Sep 18, 2026",
      "gross": 104.95,
      "transactions": 5,
      "source": "Stripe connector charge list"
    },
    "rokuSales": {
      "status": "stale_preserved",
      "period": "Sep 7-Sep 13, 2026",
      "source": "Roku Sales Activity email; newer report not obtained this run",
      "note": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
    },
    "rokuAppEngagement": {
      "status": "stale_preserved",
      "period": "Sep 6-Sep 12, 2026",
      "source": "Roku App Engagement email; newer report not obtained this run",
      "note": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
    },
    "rokuTRC": {
      "status": "stale_preserved",
      "note": "Stale: newer Roku emails were found but Outlook returned no attachments. Last extracted sales are Sep 7-Sep 13; app engagement is Sep 6-Sep 12. Preserved figures are not current-week totals."
    },
    "appleManual": {
      "status": "fresh_manual",
      "period": "Sep 12-Sep 18, 2026",
      "salesGross": 294.95,
      "downloads": 85,
      "freeDownloads": null,
      "inAppUnits": null,
      "source": "Apple App Store Connect manual snapshot",
      "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable."
    },
    "dotStudiosAppAds": {
      "status": "fresh_manual",
      "period": "Sep 12-Sep 18, 2026",
      "note": "In-app ad-serving export; delivery cross-check only (Michael: DotStudios ad numbers inaccurate; Ionic is the revenue source)."
    },
    "googleAds": {
      "status": "fresh_no_delivery",
      "period": "Sep 12-Sep 18, 2026",
      "note": "Fresh Google Ads connector query for Sep 12-Sep 18 and Sep 5-Sep 11 returned no delivery rows: no reported spend, impressions, clicks or conversions in either window. This is paid acquisition, not in-app ad delivery."
    },
    "metaAds": {
      "status": "stale_historical_context",
      "period": "Aug 4-Aug 26, 2026",
      "note": "Historical Meta flight Aug 4-Aug 26, 2026 only. No newer Meta-only report found in Outlook as of Sep 19. Current-week Meta activity and spend are unverified, not confirmed zero."
    },
    "youtube": {
      "status": "fresh_partial",
      "period": "Sep 12-Sep 16, 2026",
      "note": "Revenue-aligned YouTube figures cover Sep 12-Sep 16 (5 days); Sep 17-Sep 18 are not available yet.",
      "dataCompleteThrough": "2026-09-16"
    },
    "apple": {
      "status": "fresh_manual",
      "period": "Sep 12-Sep 18, 2026",
      "salesGross": 294.95,
      "downloads": 85,
      "freeDownloads": null,
      "inAppUnits": null,
      "source": "Apple App Store Connect manual snapshot",
      "note": "Apple App Store Connect reports $294.95 gross sales and 85 total units for Sep 12-Sep 18. Units are not a paid transaction count; the free/in-app split is unavailable. Sales rose 22.45% versus Sep 5-Sep 11. The units comparison uses the overlapping Sep 7-Sep 13 snapshot (126), not a week-over-week comparison. Exact daily sales are unavailable."
    }
  },
  "auditStatus": {
    "status": "pass_with_labeled_stale_sources",
    "checkedAt": "2026-08-24T14:50:00-07:00",
    "checksPassed": 34,
    "errors": [],
    "summary": {
      "period": "Aug 17-Aug 23, 2026",
      "ga4ActiveUsers": 4708,
      "ga4Sessions": 11138,
      "dotStudiosTvodGross": 1846.15,
      "dotStudiosTvodTransactions": 84,
      "dotStudiosAppInstalls": 1533,
      "dotStudiosVideoViews": 16373,
      "dotStudiosAppleTvViews": 241,
      "dotStudiosAppAdRequests": 25602,
      "dotStudiosAppAdImpressions": 22964,
      "dotStudiosAppAdErrors": 10362,
      "appleDownloads": 528,
      "appleSalesGross": 477.78,
      "stripeGross": 398.81,
      "stripeTransactions": 19,
      "youtubeYtdRevenue": 115998.58,
      "rokuStatus": "stale_preserved_attachment_unavailable_trc_excluded",
      "googleAdsStatus": "stale_metrics_preserved_campaign_inventory_only",
      "metaAdsStatus": "stale_no_new_email"
    },
    "checks": [
      "Reporting period updated to Aug 17-Aug 23, 2026.",
      "GA4 core, daily, source/medium, top pages, platform/device, rolling 28-day, and U.S. geography rows refreshed from Aug 24 saved raw connector outputs.",
      "DotStudios TVOD revenue-transactions-11.csv integrated for Aug 17-Aug 23.",
      "DotStudios app-installs-summary-2.csv integrated for Aug 17-Aug 23.",
      "DotStudios video-views-3.csv integrated for Aug 17-Aug 23, including Apple TV views.",
      "DotStudios ad-metrics-3.csv integrated for Aug 17-Aug 23 as in-app ad-serving delivery only, separate from paid-campaign impressions and ad revenue.",
      "Manual Apple Connect sales/download screenshots integrated for Aug 17-Aug 23.",
      "Stripe charge-list parsed fresh after connector reconnection; Stripe Analytics/Sigma permission blocker recorded.",
      "Roku TRC/live-channel emails explicitly excluded from app/platform usage.",
      "Roku, Google Ads, Meta, and YouTube partial-current statuses are labeled rather than zero-filled.",
      "YouTube YTD income is present and separate from app TVOD."
    ],
    "blockers": [
      "Roku Aug 24 email search did not expose PDF attachments, so Aug 17 Roku Sales/App Engagement values are preserved and marked stale.",
      "Stripe Analytics/Sigma blocked by reporting_write permission; charge-list source check is fresh.",
      "Google Ads Aug 24 connector output contained campaign inventory only, not performance metrics.",
      "No newer Nathan/Forge One Meta-only report found in the saved Outlook search.",
      "YouTube current-period daily rows returned through Aug 21 only; Aug 22-Aug 23 were not zero-filled."
    ]
  },
  "lastManualSourceUpdate": {
    "updatedAt": "2026-09-19T15:38:20.670567+00:00",
    "sources": [
      "DotStudios TVOD",
      "DotStudios app installs",
      "DotStudios video views",
      "DotStudios app ad-serving",
      "Apple manual snapshot"
    ],
    "period": "Sep 12-Sep 18, 2026",
    "summary": "DotStudios TVOD overlaps Apple/Stripe/Roku/Android/Web; source check only, never summed as total ElectricNOW sales.; Video views for Sep 12-Sep 18, 2026 are GA4-sourced within the DotStudios export (Source column = google_analytics); treat as viewing depth, not additive to GA4 property 497892271 headline metrics. Export dates cluster on the last days of the range, so do not chart it as a daily series.; In-app ad delivery figures are ad-server delivery only; keep separate from GA4 ads_impression events and from Meta/Google paid-campaign impressions. Ionic, GA4 and DotStudios impression counts a",
    "caveat": "Manual exports supplied by Michael/DotStudios; kept separate from GA4, paid-campaign impressions, YouTube, Roku, Stripe.",
    "dotStudiosTvodPeriod": "Sep 12-Sep 18, 2026"
  },
  "dotStudiosAppInstalls": {
    "source": "DotStudios app-installs-summary.csv",
    "sourceType": "manual_dotstudios_export",
    "period": "Sep 12-Sep 18, 2026",
    "periodStart": "2026-09-12",
    "periodEnd": "2026-09-18",
    "updatedAt": "2026-09-19 13:00 PDT",
    "status": "fresh_manual",
    "totals": {
      "installs": 709,
      "updates": 687,
      "totalEvents": 1396,
      "users": 1375,
      "events": 1396
    },
    "byPlatform": {
      "web": 363,
      "iOS": 181,
      "Android": 165
    },
    "platformBreakout": [
      {
        "Platform": "web",
        "installs": 363,
        "updates": 317,
        "totalEvents": 680,
        "users": 661,
        "shareOfInstallsPct": 51.2
      },
      {
        "Platform": "iOS",
        "installs": 181,
        "updates": 227,
        "totalEvents": 408,
        "users": 407,
        "shareOfInstallsPct": 25.5
      },
      {
        "Platform": "Android",
        "installs": 165,
        "updates": 143,
        "totalEvents": 308,
        "users": 307,
        "shareOfInstallsPct": 23.3
      }
    ],
    "byDeviceCategory": {
      "smart tv": 391,
      "tablet": 48,
      "mobile": 239,
      "desktop": 31
    },
    "deviceBreakout": [
      {
        "Device Category": "smart tv",
        "installs": 391,
        "updates": 348,
        "users": 720,
        "shareOfInstallsPct": 55.1
      },
      {
        "Device Category": "mobile",
        "installs": 239,
        "updates": 295,
        "users": 532,
        "shareOfInstallsPct": 33.7
      },
      {
        "Device Category": "tablet",
        "installs": 48,
        "updates": 38,
        "users": 86,
        "shareOfInstallsPct": 6.8
      },
      {
        "Device Category": "desktop",
        "installs": 31,
        "updates": 6,
        "users": 37,
        "shareOfInstallsPct": 4.4
      }
    ],
    "byCountry": {
      "United States": {
        "installs": 663,
        "updates": 675,
        "events": 1338,
        "users": 1317,
        "cities": 697
      },
      "Unknown": {
        "installs": 31,
        "updates": 6,
        "events": 37,
        "users": 37,
        "cities": 0
      },
      "Australia": {
        "installs": 8,
        "updates": 4,
        "events": 12,
        "users": 12,
        "cities": 6
      },
      "Canada": {
        "installs": 2,
        "updates": 2,
        "events": 4,
        "users": 4,
        "cities": 3
      },
      "Costa Rica": {
        "installs": 1,
        "updates": 0,
        "events": 1,
        "users": 1,
        "cities": 1
      },
      "Jamaica": {
        "installs": 1,
        "updates": 0,
        "events": 1,
        "users": 1,
        "cities": 1
      },
      "Rwanda": {
        "installs": 1,
        "updates": 0,
        "events": 1,
        "users": 1,
        "cities": 1
      },
      "Puerto Rico": {
        "installs": 1,
        "updates": 0,
        "events": 1,
        "users": 1,
        "cities": 1
      },
      "Panama": {
        "installs": 1,
        "updates": 0,
        "events": 1,
        "users": 1,
        "cities": 1
      }
    },
    "countryBreakout": [
      {
        "Country": "United States",
        "installs": 1320,
        "updates": 2238,
        "totalEvents": 3558,
        "users": 3481,
        "citiesCount": 1489,
        "shareOfInstallsPct": 86.1
      },
      {
        "Country": "Unknown",
        "installs": 178,
        "updates": 14,
        "totalEvents": 192,
        "users": 190,
        "citiesCount": 0,
        "shareOfInstallsPct": 11.6
      },
      {
        "Country": "Australia",
        "installs": 13,
        "updates": 9,
        "totalEvents": 22,
        "users": 22,
        "citiesCount": 6,
        "shareOfInstallsPct": 0.8
      },
      {
        "Country": "India",
        "installs": 4,
        "updates": 4,
        "totalEvents": 8,
        "users": 5,
        "citiesCount": 2,
        "shareOfInstallsPct": 0.3
      },
      {
        "Country": "Brazil",
        "installs": 4,
        "updates": 0,
        "totalEvents": 4,
        "users": 4,
        "citiesCount": 0,
        "shareOfInstallsPct": 0.3
      },
      {
        "Country": "Portugal",
        "installs": 4,
        "updates": 0,
        "totalEvents": 4,
        "users": 4,
        "citiesCount": 0,
        "shareOfInstallsPct": 0.3
      },
      {
        "Country": "Canada",
        "installs": 2,
        "updates": 7,
        "totalEvents": 9,
        "users": 9,
        "citiesCount": 4,
        "shareOfInstallsPct": 0.1
      },
      {
        "Country": "Puerto Rico",
        "installs": 2,
        "updates": 0,
        "totalEvents": 2,
        "users": 2,
        "citiesCount": 2,
        "shareOfInstallsPct": 0.1
      },
      {
        "Country": "Ireland",
        "installs": 1,
        "updates": 1,
        "totalEvents": 2,
        "users": 2,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "Country": "Netherlands",
        "installs": 1,
        "updates": 0,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "Country": "Norway",
        "installs": 1,
        "updates": 0,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "Country": "Germany",
        "installs": 1,
        "updates": 0,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "Country": "Egypt",
        "installs": 1,
        "updates": 0,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "Country": "Costa Rica",
        "installs": 1,
        "updates": 0,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "Country": "Switzerland",
        "installs": 0,
        "updates": 3,
        "totalEvents": 3,
        "users": 3,
        "citiesCount": 0,
        "shareOfInstallsPct": 0.0
      },
      {
        "Country": "Aruba",
        "installs": 0,
        "updates": 1,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.0
      },
      {
        "Country": "China",
        "installs": 0,
        "updates": 1,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.0
      },
      {
        "Country": "United Kingdom",
        "installs": 0,
        "updates": 1,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.0
      },
      {
        "Country": "Denmark",
        "installs": 0,
        "updates": 1,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.0
      }
    ],
    "note": "DotStudios install events are not GA4 active users and should be presented as a manual app-dashboard source.",
    "file": "manual_dotstudios/2026-09-14/app-installs-summary-6.csv",
    "installs": 709,
    "updates": 687,
    "events": 1396,
    "users": 1375,
    "priorInstalls": 948,
    "priorUpdates": 945,
    "usInstalls": 1046,
    "prior": {
      "period": "Sep 5-Sep 11, 2026",
      "installs": 948,
      "updates": 945
    },
    "installsDeltaPct": -25.21097046413502,
    "updatesDeltaPct": -27.3015873015873,
    "byPlatformDetail": {
      "web": {
        "installs": 363,
        "updates": 317,
        "events": 680,
        "users": 661
      },
      "iOS": {
        "installs": 181,
        "updates": 227,
        "events": 408,
        "users": 407
      },
      "Android": {
        "installs": 165,
        "updates": 143,
        "events": 308,
        "users": 307
      }
    },
    "byDeviceCategoryDetail": {
      "smart tv": {
        "installs": 391,
        "updates": 348,
        "events": 739,
        "users": 720
      },
      "tablet": {
        "installs": 48,
        "updates": 38,
        "events": 86,
        "users": 86
      },
      "mobile": {
        "installs": 239,
        "updates": 295,
        "events": 534,
        "users": 532
      },
      "desktop": {
        "installs": 31,
        "updates": 6,
        "events": 37,
        "users": 37
      }
    },
    "comparisonPeriod": "Sep 7-Sep 13, 2026 (last uploaded export; overlapping window)"
  },
  "dotStudiosVideoViews": {
    "source": "DotStudios video-views.csv",
    "sourceType": "manual_dotstudios_export",
    "period": "Sep 12-Sep 18, 2026",
    "periodStart": "2026-09-12",
    "periodEnd": "2026-09-18",
    "updatedAt": "2026-09-19 13:00 PDT",
    "status": "fresh_manual",
    "rowCount": 534,
    "totalViews": 14674,
    "daily": [
      {
        "date": "2026-09-12",
        "label": "Sep 12",
        "views": 25,
        "shareOfViewsPct": 0.2
      },
      {
        "date": "2026-09-13",
        "label": "Sep 13",
        "views": 80,
        "shareOfViewsPct": 0.5
      },
      {
        "date": "2026-09-14",
        "label": "Sep 14",
        "views": 55,
        "shareOfViewsPct": 0.4
      },
      {
        "date": "2026-09-15",
        "label": "Sep 15",
        "views": 61,
        "shareOfViewsPct": 0.4
      },
      {
        "date": "2026-09-16",
        "label": "Sep 16",
        "views": 342,
        "shareOfViewsPct": 2.3
      },
      {
        "date": "2026-09-17",
        "label": "Sep 17",
        "views": 2573,
        "shareOfViewsPct": 17.5
      },
      {
        "date": "2026-09-18",
        "label": "Sep 18",
        "views": 11538,
        "shareOfViewsPct": 78.6
      }
    ],
    "byDevice": {
      "roku": 4573,
      "desktop_web": 4204,
      "android": 1845,
      "ios": 1334,
      "firetv": 1222,
      "androidtv": 954,
      "mobileweb": 272,
      "appletv": 263,
      "vizio": 7
    },
    "deviceBreakout": [
      {
        "Device": "roku",
        "views": 4573,
        "shareOfViewsPct": 31.2
      },
      {
        "Device": "desktop_web",
        "views": 4204,
        "shareOfViewsPct": 28.6
      },
      {
        "Device": "android",
        "views": 1845,
        "shareOfViewsPct": 12.6
      },
      {
        "Device": "ios",
        "views": 1334,
        "shareOfViewsPct": 9.1
      },
      {
        "Device": "firetv",
        "views": 1222,
        "shareOfViewsPct": 8.3
      },
      {
        "Device": "androidtv",
        "views": 954,
        "shareOfViewsPct": 6.5
      },
      {
        "Device": "mobileweb",
        "views": 272,
        "shareOfViewsPct": 1.9
      },
      {
        "Device": "appletv",
        "views": 263,
        "shareOfViewsPct": 1.8
      },
      {
        "Device": "vizio",
        "views": 7,
        "shareOfViewsPct": 0.0
      }
    ],
    "appleTvViews": 241,
    "appleTvShareOfViewsPct": 1.5,
    "byFamily": [
      {
        "family": "Other",
        "views": 8704,
        "shareOfViewsPct": 53.2
      },
      {
        "family": "The Librarians",
        "views": 3477,
        "shareOfViewsPct": 21.2
      },
      {
        "family": "The Ark",
        "views": 2313,
        "shareOfViewsPct": 14.1
      },
      {
        "family": "Leverage",
        "views": 1561,
        "shareOfViewsPct": 9.5
      },
      {
        "family": "Almost Paradise",
        "views": 318,
        "shareOfViewsPct": 1.9
      }
    ],
    "familyTotals": [
      {
        "Family": "Other",
        "views": 8704,
        "shareOfViewsPct": 53.2
      },
      {
        "Family": "The Librarians",
        "views": 3477,
        "shareOfViewsPct": 21.2
      },
      {
        "Family": "The Ark",
        "views": 2313,
        "shareOfViewsPct": 14.1
      },
      {
        "Family": "Leverage",
        "views": 1561,
        "shareOfViewsPct": 9.5
      },
      {
        "Family": "Almost Paradise",
        "views": 318,
        "shareOfViewsPct": 1.9
      }
    ],
    "byProgramType": [
      {
        "programType": "Full Episode",
        "views": 7347,
        "shareOfViewsPct": 44.9
      },
      {
        "programType": "movie",
        "views": 5402,
        "shareOfViewsPct": 33.0
      },
      {
        "programType": "Trailer",
        "views": 3050,
        "shareOfViewsPct": 18.6
      },
      {
        "programType": "Movie",
        "views": 399,
        "shareOfViewsPct": 2.4
      },
      {
        "programType": "Behind the Scenes",
        "views": 173,
        "shareOfViewsPct": 1.1
      },
      {
        "programType": "Series",
        "views": 2,
        "shareOfViewsPct": 0.0
      }
    ],
    "topChannels": [
      {
        "Channel": "ElectricNOW",
        "views": 4070,
        "shareOfViewsPct": 24.9
      },
      {
        "Channel": "Topper",
        "views": 2696,
        "shareOfViewsPct": 16.5
      },
      {
        "Channel": "The Librarians: The Next Chapter (Season 1)",
        "views": 1412,
        "shareOfViewsPct": 8.6
      },
      {
        "Channel": "The Librarians: The Next Chapter Season 2",
        "views": 1059,
        "shareOfViewsPct": 6.5
      },
      {
        "Channel": "The Ark - Season 3",
        "views": 788,
        "shareOfViewsPct": 4.8
      },
      {
        "Channel": "The Ark - Season 1",
        "views": 538,
        "shareOfViewsPct": 3.3
      },
      {
        "Channel": "The Ark - Season 2",
        "views": 468,
        "shareOfViewsPct": 2.9
      },
      {
        "Channel": "Leverage - Season 1",
        "views": 323,
        "shareOfViewsPct": 2.0
      },
      {
        "Channel": "Leverage - Season 4",
        "views": 254,
        "shareOfViewsPct": 1.6
      },
      {
        "Channel": "Leverage - Season 2",
        "views": 244,
        "shareOfViewsPct": 1.5
      },
      {
        "Channel": "The Librarians - Season 1",
        "views": 233,
        "shareOfViewsPct": 1.4
      },
      {
        "Channel": "Leverage - Season 3",
        "views": 224,
        "shareOfViewsPct": 1.4
      },
      {
        "Channel": "Leverage: Redemption - Season 3",
        "views": 200,
        "shareOfViewsPct": 1.2
      },
      {
        "Channel": "Almost Paradise (Season 1 & 2)",
        "views": 173,
        "shareOfViewsPct": 1.1
      },
      {
        "Channel": "Leverage - Season 5",
        "views": 166,
        "shareOfViewsPct": 1.0
      },
      {
        "Channel": "Season 3",
        "views": 150,
        "shareOfViewsPct": 0.9
      },
      {
        "Channel": "ElectricNOW en Español",
        "views": 147,
        "shareOfViewsPct": 0.9
      },
      {
        "Channel": "The Librarians - Season 4",
        "views": 142,
        "shareOfViewsPct": 0.9
      },
      {
        "Channel": "The Librarians - Season 2",
        "views": 134,
        "shareOfViewsPct": 0.8
      },
      {
        "Channel": "Checking Out: The Librarians: The Next Chapter - Season 2",
        "views": 133,
        "shareOfViewsPct": 0.8
      }
    ],
    "topTitles": {
      "ElectricNOW": 4470,
      "The Ark": 2505,
      "The Librarians": 2151,
      "William Shatner's: A Twist in the Tale": 1896,
      "Leverage": 1795,
      "ElectricNOW en Español": 187,
      "Almost Paradise - Season 1": 129,
      "Almost Paradise - Season 2": 101
    },
    "sourceColumnValues": [
      {
        "source": "google_analytics",
        "views": 16373,
        "shareOfViewsPct": 100.0
      }
    ],
    "note": "Device Breakdown is a packed 'device: n; device: n' string, not a column - parse by splitting on ';' then rsplit ':'. Device sums tie exactly to Total Views for this export.",
    "file": "manual_dotstudios/2026-09-14/video-views-7.csv",
    "rows": 552,
    "priorTotalViews": 16229,
    "deltaPct": -9.58,
    "ctvViews": 7019,
    "ctvSharePct": 47.8,
    "priorCtvSharePct": 47.6,
    "caveat": "DotStudios video views are the vendor's player-side count and are not GA4 active users or sessions. Daily rows in this export are not evenly attributed across the week, so do not chart them as a daily trend.",
    "sources": {
      "google_analytics": 534
    }
  },
  "rokuSalesActivity": {
    "period": "Sep 7-Sep 13, 2026",
    "reportPeriod": "Roku Sales Activity report generated September 14, 2026 at 6:58 AM PDT; report covers the last 7 weeks, with Sep 7-Sep 13, 2026 rows (by transaction date) summarized here.",
    "source": "Roku Sales Activity email from bdp_noreply@data.roku.com",
    "emailDate": "2026-09-14T13:58:17+00:00",
    "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwDvKLV_nde7SYUl0H8b5z1dAAPKm0PlAADvKLV_nde7SYUl0H8b5z1dAAP3FDbEAAA=",
    "status": "stale_preserved_attachment_unavailable",
    "transactions": 9,
    "gross": 188.91,
    "developerRevenue": 151.11,
    "daily": [
      {
        "date": "2026-09-07",
        "product": "Purchase Bundle 21",
        "transactions": 1,
        "gross": 20.99,
        "developerRevenue": 16.79
      },
      {
        "date": "2026-09-08",
        "product": "Purchase Bundle 21",
        "transactions": 1,
        "gross": 20.99,
        "developerRevenue": 16.79
      },
      {
        "date": "2026-09-09",
        "product": "Purchase Bundle 21",
        "transactions": 3,
        "gross": 62.97,
        "developerRevenue": 50.37
      },
      {
        "date": "2026-09-10",
        "product": "Purchase Bundle 21",
        "transactions": 2,
        "gross": 41.98,
        "developerRevenue": 33.58
      },
      {
        "date": "2026-09-11",
        "product": "Purchase Bundle 21",
        "transactions": 2,
        "gross": 41.98,
        "developerRevenue": 33.58
      }
    ],
    "priorPeriod": {
      "period": "Aug 31-Sep 6, 2026",
      "transactions": 9,
      "gross": 222.91,
      "developerRevenue": 178.31
    },
    "deltaVsPriorGrossPct": -15.25,
    "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals.",
    "trcExclusionNote": "Roku TRC emails are for the separate Roku live-channel surface outside the ElectricNOW app and are excluded from app/platform usage.",
    "staleNote": "Roku report emails carry data only as attachments and the Outlook connector returns an empty attachments array. Values below are the last successfully processed report (Sep 7-Sep 13, 2026) and are NOT current."
  },
  "rokuSalesSummary": {
    "period": "Sep 7-Sep 13, 2026",
    "reportPeriod": "Roku Sales Activity report generated September 14, 2026 at 6:58 AM PDT; report covers the last 7 weeks, with Sep 7-Sep 13, 2026 rows (by transaction date) summarized here.",
    "source": "Roku Sales Activity email from bdp_noreply@data.roku.com",
    "emailDate": "2026-09-14T13:58:17+00:00",
    "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwDvKLV_nde7SYUl0H8b5z1dAAPKm0PlAADvKLV_nde7SYUl0H8b5z1dAAP3FDbEAAA=",
    "status": "stale_preserved_attachment_unavailable",
    "transactions": 9,
    "gross": 188.91,
    "developerRevenue": 151.11,
    "daily": [
      {
        "date": "2026-09-07",
        "product": "Purchase Bundle 21",
        "transactions": 1,
        "gross": 20.99,
        "developerRevenue": 16.79
      },
      {
        "date": "2026-09-08",
        "product": "Purchase Bundle 21",
        "transactions": 1,
        "gross": 20.99,
        "developerRevenue": 16.79
      },
      {
        "date": "2026-09-09",
        "product": "Purchase Bundle 21",
        "transactions": 3,
        "gross": 62.97,
        "developerRevenue": 50.37
      },
      {
        "date": "2026-09-10",
        "product": "Purchase Bundle 21",
        "transactions": 2,
        "gross": 41.98,
        "developerRevenue": 33.58
      },
      {
        "date": "2026-09-11",
        "product": "Purchase Bundle 21",
        "transactions": 2,
        "gross": 41.98,
        "developerRevenue": 33.58
      }
    ],
    "priorPeriod": {
      "period": "Aug 31-Sep 6, 2026",
      "transactions": 9,
      "gross": 222.91,
      "developerRevenue": 178.31
    },
    "deltaVsPriorGrossPct": -15.25,
    "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals.",
    "trcExclusionNote": "Roku TRC emails are for the separate Roku live-channel surface outside the ElectricNOW app and are excluded from app/platform usage.",
    "staleNote": "Roku report emails carry data only as attachments and the Outlook connector returns an empty attachments array. Values below are the last successfully processed report (Sep 7-Sep 13, 2026) and are NOT current."
  },
  "visibleSourceWeek": {
    "period": "Sep 12-Sep 18, 2026",
    "range": "Sep 12-Sep 18, 2026",
    "label": "DotStudios current-week TVOD",
    "gross": 669.66,
    "net": 669.66,
    "transactions": 32,
    "purchases": 32,
    "paidTransactions": 32,
    "knownFreshVisibleTransactions": 32,
    "purchaseRevenue": 669.66,
    "source": "DotStudios manual revenue export",
    "status": "fresh_manual",
    "note": "DotStudios is the broadest current TVOD export: 32 purchases and $669.66 for Sep 12-Sep 18, versus 43 and $891.57 for Sep 5-Sep 11. Stripe, Apple and Roku are overlapping checks, not additional sales. Dollar amounts retain source reporting conventions.",
    "priorPeriod": "Sep 5-Sep 11, 2026",
    "deltaVsPriorPct": -24.89,
    "dotStudiosTvodGross": 669.66,
    "dotStudiosTvodTransactions": 32,
    "appleManualSnapshotGross": 294.95,
    "appleManualSnapshotDownloads": 85,
    "appleManualSnapshotPeriod": "Sep 12-Sep 18, 2026"
  },
  "_renderContract": {
    "normalizedAt": "2026-09-19 15:26 ",
    "mappings": [
      "visitSummary.currentWeek -> .weekly (1 item(s))",
      "visitSummary.rolling28Current -> .monthly (1 item(s))"
    ],
    "note": "Writer key names were mapped to the published renderer's contract by normalize_render_contract.py."
  },
  "ytdTrendMeta": {
    "grain": "weekly, Monday-start, Monday..Sunday inclusive",
    "source": "Internal GA4 pull, property 497892271",
    "baselineVintage": "2026-08-31 single-pass GA4 pull for every week in the series",
    "seriesStart": "2026-04-13",
    "seriesStartRationale": "GA4 property 497892271 has pre-Apr data but tracking was ramping (Jan 75 active users, Feb 323, Mar 1,136), so earlier weeks are not comparable. Apr 13, 2026 is the launch-baseline week.",
    "caveat": "activeUsers is not additive across days; each week is its own GA4 request. GA4 revises recent weeks, so the latest point can move slightly on re-pull.",
    "lastPatched": "2026-09-14 19:57"
  },
  "corrections": [
    {
      "date": "2026-09-19",
      "id": "live_roster_and_cards_fix",
      "summary": "Live/FAST channels removed from on-demand lists using shared roster + GA4 signature; refreshed behavior cards un-staled; live split cards re-pulled with full roster; live top-channels rebuilt.",
      "removedFromOnDemand": {
        "topPrograms": [],
        "topVideoTitles": [],
        "topChannelTitles": []
      }
    }
  ],
  "launchBaselineMeta": {
    "liveRosterRepull": {
      "pulledAt": "2026-09-08T08:45:00-07:00",
      "launchWeek": "Apr 13-19, 2026",
      "rosterNamesQueried": 53,
      "liveRows": {
        "play": [
          460,
          7661
        ],
        "video_start": [
          452,
          4039
        ],
        "video_complete": [
          1,
          21
        ]
      },
      "onDemandRows": {
        "play": [
          684,
          13842
        ],
        "video_start": [
          674,
          6109
        ],
        "video_play": [
          253,
          3147
        ],
        "ads_request": [
          242,
          7762
        ],
        "video_complete": [
          173,
          2097
        ]
      },
      "source": "Internal GA4 pull, property 497892271",
      "note": "Launch-week value (Apr 13-19, 2026) re-pulled from GA4 on Sep 8, 2026 with the same live/FAST channel_title roster used for this week's value, so the launch comparison is like-for-like. Internal GA4 pull, property 497892271."
    }
  }
}
let data = window.DASHBOARD_DATA || window.ELECTRICNOW_DASHBOARD_DATA;
function _enRowIsLive(row) {
  const text = [
    row?.title,
    row?.family,
    row?.channel,
    row?.product,
    row?.video,
    row?.name,
    row?.source,
  ].filter(Boolean).join(' ').toLowerCase();
  return /trc live|live channel|roku live|fast channel|linear channel|linear live/.test(text);
}

// ---- Data-driven live/FAST roster filter (2026-09-07) ----
// The writer ships the full roster in titleViewership.liveChannelRoster.names
// (live_channels.json). Any on-demand row whose name matches is dropped here as
// a second line of defense, so a writer regression cannot reach the page.
function _enRosterNorm(v) {
  if (v == null) return '';
  let s = String(v);
  try { s = s.normalize('NFKD').replace(/[\u0300-\u036f]/g, ''); } catch (e) {}
  return s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}
// Built-in copy of live_channels.json (regenerated by the patch script) so the
// filter also works against a data file that predates the roster field.
const _EN_LIVE_ROSTER_BUILTIN = ["ElectricNOW", "ElectricNOW en Español", "ElectricNOW en Espanol", "Stoner TV Network", "Hollywood Classic Movies", "ToonOvation", "CinePast", "AMPD TV", "DARK MATTER TV", "Colorized.TV", "Horror Asylum", "Kung Fu Movies", "Spot On News", "Grindhouse Gold", "a-z Classic Flix", "IndieBox", "Ghost Dimension", "Fancy A Movie", "Cartoon Classics", "Urban Action Channel", "BayView Documentaries", "Daily Flash", "4ACETV CLASSIC HITS", "MMA Futures", "Old West TV", "a-z Western Grit", "The Health Channel", "AMusic Channel", "Box Cinema", "The Family TV Channel", "a-z Best Classic TV", "Americana Television", "Cowboy Classics", "SportsTVPlus", "MomCave", "Historias de Corazón", "4ACETV", "Rock Solid Wrestling TV", "Box Gamers", "Boxing Spotlight", "FightTVPlus", "Fitness Rewind by Collage Video", "Play Ibiza", "Rockola Television", "NOMADslow tv", "Wrestling Spotlight", "Comercio TV", "Box Playlist", "HIP HOP TV", "POWERtube TV", "Viajar TV", "Ray Harryhausen Collection", "Nigbati TV", "Celebrity Scene", "Mor2CTV", "DJ Central TV", "Beyond The Score"];
function _enPurgeRosterRows(payload) {
  const tv = payload && payload.titleViewership;
  const fromData = tv && tv.liveChannelRoster && Array.isArray(tv.liveChannelRoster.names) ? tv.liveChannelRoster.names : [];
  const names = _EN_LIVE_ROSTER_BUILTIN.concat(fromData);
  if (!tv || !names.length) return payload;
  const set = new Set(names.map(_enRosterNorm).filter(Boolean));
  const fields = ['program', 'title', 'group', 'channelTitle', 'channel_title', 'label', 'show', 'collection'];
  const rowIsLive = (row) => {
    if (!row || typeof row !== 'object') return false;
    for (const f of fields) { if (f in row && set.has(_enRosterNorm(row[f]))) return true; }
    if (Array.isArray(row.examples)) { for (const ex of row.examples) { if (set.has(_enRosterNorm(ex))) return true; } }
    return false;
  };
  for (const key of ['topPrograms', 'topVideoTitles', 'topChannelTitles']) {
    if (!Array.isArray(tv[key])) continue;
    const kept = tv[key].filter((r) => !rowIsLive(r));
    kept.forEach((r, i) => { if (r && typeof r === 'object') r.rank = i + 1; });
    tv[key] = kept;
  }
  return payload;
}
function _enPurgeLiveFromOnDemand(payload) {
  if (!payload || typeof payload !== 'object') return payload;
  const tv = payload.tvodTitleRevenue;
  if (tv && typeof tv === 'object') {
    ['topTitlesByNet', 'familyTotals', 'channels', 'channelBreakout'].forEach((key) => {
      if (Array.isArray(tv[key])) tv[key] = tv[key].filter((row) => !_enRowIsLive(row));
    });
  }
  _enPurgeRosterRows(payload);
  return payload;
}
_enPurgeLiveFromOnDemand(data);
const API_BASE = window.ELECTRICNOW_DASHBOARD_API_BASE || '';
const HOSTED_DATA_URL = window.DASHBOARD_DATA_URL || 'https://cdn.jsdelivr.net/gh/electricnow1/electricnow-dashboard-data@main/dashboard-data.json';

const NOT_AVAILABLE = 'Not reported';
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
  if (baseline === null || baseline === 0) {
    return { cls: 'baseline-unavailable', text: 'baseline unavailable' };
  }
  if (hasDelta) {
    return { cls: deltaClass(delta), text: deltaText(card, delta) };
  }
  if (card.launchBaselineNote) {
    return { cls: 'baseline-unavailable', text: 'definition changed', title: card.launchBaselineNote };
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
  const grid = document.querySelector('#kpi-grid');
  const groups = (data.scorecardGroups?.length
    ? data.scorecardGroups
    : [{ title: 'Weekly scorecard', eyebrow: 'Overview', definition: '', cards: data.scorecards }])
    .filter((group) => !['retired-acquisition-card'].includes(String(group?.id || '').toLowerCase()));
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
            <em class="delta ${launchBaselineCompare(card).cls}"${launchBaselineCompare(card).title ? ` title="${escapeHtml(launchBaselineCompare(card).title)}"` : ''}>${launchBaselineCompare(card).text}</em>
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
  const wrap = document.querySelector('#visit-summary');
  if (!wrap) return;
  const summary = data.visitSummary;
  if (!summary?.weekly || !summary?.monthly) {
    wrap.innerHTML = '';
    wrap.hidden = true;
    return;
  }
  wrap.hidden = false;
  const cards = [summary.weekly, summary.monthly];
  function visitDeltaText(card) {
    const delta = card.deltaVsPreviousPct;
    const label = card.comparisonLabel || 'vs previous period';
    if (delta === null || delta === undefined || Number.isNaN(delta)) {
      return `comparison unavailable ${label}`;
    }
    return `${deltaText({ deltaType: 'percent' }, delta)} ${label}`;
  }
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
                <small>${card.asOfNote ? `Last complete: ${escapeHtml(card.range)}` : escapeHtml(card.rollingWindowLabel || card.range)}</small>
                <em class="delta ${deltaClass(card.deltaVsPreviousPct)}">${escapeHtml(visitDeltaText(card))}</em>
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
  const chartRows = Array.isArray(rows) ? rows : (rows?.rows || []);
  const vals = chartRows.map((d) => Number(d[key] || 0));
  const max = maxOverride || Math.max(...vals, 1);
  const step = (width - pad.left - pad.right) / Math.max(chartRows.length - 1, 1);
  return chartRows.map((d, i) => ({
    x: pad.left + i * step,
    y: pad.top + (height - pad.top - pad.bottom) * (1 - Number(d[key] || 0) / max),
    value: Number(d[key] || 0),
    date: d.date,
  }));
}

function renderLineTrendChart(selector, rows) {
  const svg = document.querySelector(selector);
  const chartRows = Array.isArray(rows) ? rows : (rows?.rows || []);
  if (!svg || !chartRows.length) return;
  const width = 820;
  const height = 300;
  const pad = { left: 38, right: 20, top: 24, bottom: 38 };
  // Green line plots total app sessions (reliable daily activity), not engagedSessions.
  // GA4's engaged-session classification wobbles on isolated days (e.g. Sun Jun 28 2026),
  // which renders as a false "engagement collapse" even when users/sessions/time held up.
  const maxValue = Math.max(...chartRows.map((d) => Math.max(Number(d.activeUsers || 0), Number(d.sessions || 0))), 1);
  const active = chartPoints(chartRows, 'activeUsers', width, height, pad, maxValue);
  const engaged = chartPoints(chartRows, 'sessions', width, height, pad, maxValue);
  const tickStep = chartRows.length > 16 ? 7 : 2;
  const ticks = chartRows
    .filter((_, i) => i === 0 || i === chartRows.length - 1 || i % tickStep === 0)
    .map((d, i) => {
      const x = active[chartRows.indexOf(d)]?.x || pad.left;
      return `<text class="chart-label" x="${x}" y="${height - 8}" text-anchor="${i === 0 ? 'start' : 'middle'}">${d.label || d.date}</text>`;
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
  const noteEl = document.querySelector('#trend-note');
  if (noteEl) noteEl.textContent = data.appTrendNote || '';
  renderLineTrendChart('#traffic-chart', data.weeklyTrend || data.trend);
  renderLineTrendChart('#monthly-traffic-chart', data.monthlyTrend || data.trend);
  if (data.ytdTrend?.length) {
    renderLineTrendChart('#ytd-traffic-chart', data.ytdTrend);
    const ytdNoteEl = document.querySelector('#ytd-trend-note');
    if (ytdNoteEl) ytdNoteEl.textContent = data.ytdTrendNote || '';
  }
}

function renderPurchaseChart() {
  const svg = document.querySelector('#purchase-chart');
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
  document.querySelector('#generated-at').textContent = `Generated ${data.generatedAt}`;
  document.querySelector('#source-label').textContent = data.sourceLabel;
  const summary = data.plainEnglishSummary;
  const paidAssessment = summary?.paidAcquisitionAssessment;
  const paidAssessmentText = typeof paidAssessment === 'string'
    ? paidAssessment
    : paidAssessment?.summary
      ? `Paid-acquisition verdict: ${paidAssessment.verdict || 'needs review'}. ${paidAssessment.summary}`
      : null;
  const summaryItems = summary
    ? [
        summary.overview || summary.overall,
        ...(Array.isArray(summary.bullets) ? summary.bullets : []),
        paidAssessmentText,
      ].filter(Boolean)
    : null;
  const insightItems = summaryItems?.length ? summaryItems : data.plainEnglishInsights || [];
  document.querySelector('#insights-list').innerHTML = insightItems
    .map((item, index) => `<li class="${index === 0 ? 'insight-overview' : ''}">${item}</li>`)
    .join('');
}

function renderPurchases() {
  const wrap = document.querySelector('#purchase-summary');
  const sales = data.salesSummary;
  const tvod = data.tvodTitleRevenue;
  const appleDownloads = data.manualAppleDownloads;
  const yearToDate = sales.yearToDate || sales.lifetimeObserved || sales.baselineWindow;
  const stripeSourceStatus = data.sourceStatus?.stripe;
  const rawStripeLatest = sales.stripe?.latestSevenDay || sales.stripe?.lastWeek || sales.monthToDate || sales.recent12Days;
  const stripeLatest = rawStripeLatest
    && Number(rawStripeLatest.purchaseRevenue || 0) === 0
    && Number(rawStripeLatest.purchases || 0) === 0
    && stripeSourceStatus?.status === 'fresh'
    && Number(stripeSourceStatus.gross || 0) > 0
      ? {
          label: 'Stripe connector source check',
          range: stripeSourceStatus.period || rawStripeLatest.range,
          purchases: stripeSourceStatus.transactions,
          purchaseRevenue: stripeSourceStatus.gross,
          developerRevShare: stripeSourceStatus.gross,
          note: stripeSourceStatus.note || rawStripeLatest.note,
        }
      : rawStripeLatest;
  const appleLatest = data.manualAppleSalesUpdate
    ? {
        label: data.manualAppleSalesUpdate.sourceLabel || 'Apple latest snapshot',
        range: data.manualAppleSalesUpdate.period,
        purchases: null,
        purchaseRevenue: data.manualAppleSalesUpdate.grossRevenue ?? data.manualAppleSalesUpdate.salesGross,
        downloads: data.manualAppleSalesUpdate.downloads,
        detail: data.manualAppleSalesUpdate.note,
      }
    : sales.apple?.latestSevenDay || sales.apple?.lastWeek || sales.lastWeek;
  const visibleSourceWeek = sales.latestSevenDayVisibleSales || sales.currentCompleteWeek || sales.weekToDate || sales.thisWeek;
  const visibleSourceRevenue =
    visibleSourceWeek.knownFreshVisibleRevenue ??
    visibleSourceWeek.knownFreshGross ??
    visibleSourceWeek.purchaseRevenue ??
    visibleSourceWeek.gross ??
    visibleSourceWeek.net ??
    visibleSourceWeek.dotStudiosTvodGross;
  const visibleSourcePurchases =
    visibleSourceWeek.knownFreshVisibleTransactions ??
    visibleSourceWeek.knownFreshTransactions ??
    visibleSourceWeek.purchases ??
    visibleSourceWeek.paidTransactions ??
    visibleSourceWeek.dotStudiosTvodTransactions;
  const headlineVisibleRevenue = visibleSourceRevenue ?? yearToDate.purchaseRevenue;
  const headlineVisiblePurchases = visibleSourcePurchases ?? yearToDate.purchases;
  const headlineVisibleRange = visibleSourceWeek?.range || visibleSourceWeek?.period || yearToDate.range;
  const headlineVisibleLabel = visibleSourceWeek?.label || visibleSourceWeek?.source || 'Latest visible-source rollup';
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
  const tvodNet = tvod?.netRevenue || {};
  const tvodTxn = tvod?.transactions || {};
  const revenueOverview = tvod?.revenueOverview || {};
  const revenueOverviewGross = revenueOverview.totalRevenue ?? revenueOverview.grossRevenue;
  const revenueOverviewNet = revenueOverview.netRevenue;
  const tvodPaidGross = tvodNet.tvodSalesExportPaidGross ?? tvodNet.tvodSalesEmailTotalGross ?? tvodNet.csvPaidGrossTotal;
  const tvodNetIncludingRefunds = tvodNet.netIncludingRefunds ?? tvodNet.tvodSalesExportPaidNet ?? tvodNet.csvPaidNetTotal;
  const tvodLatestGross = tvodNet.latestSevenDayGross;
  const tvodReconciliation = (revenueOverviewGross != null || tvodPaidGross != null) ? `
    <div class="sales-callout sales-callout-secondary">
      <span>DotStudios TVOD transaction export</span>
      <strong>${revenueOverviewGross != null ? fmt.currency(revenueOverviewGross) : fmt.currency(tvodPaidGross)} total revenue</strong>
      <p>${escapeHtml(revenueOverview.period || tvod.period || '')}. This is the latest DotStudios transaction export provided for the dashboard and is the current title/device TVOD sales view.</p>
      ${revenueOverviewNet != null ? `<p class="sales-net">Net revenue shown in DotStudios: ${fmt.currency(revenueOverviewNet)}${revenueOverview.activeSubscribers != null ? ` · Active subscribers: ${fmt.number(revenueOverview.activeSubscribers)}` : ''}</p>` : ''}
      ${tvodPaidGross != null ? `<p class="sales-net">Line-item transaction export subtotal: ${fmt.number(tvodTxn.paidTransactions)} paid rows / ${fmt.currency(tvodPaidGross)} gross for ${escapeHtml(tvod.period || '')}. This subtotal supports title, device, and daily breakdowns, but it does not equal the broader DotStudios Revenue Overview card.</p>` : ''}
      <p class="sales-net">Reconciliation: the fresh same-week visible payment-source check below is ${fmt.currency(headlineVisibleRevenue)} for ${escapeHtml(headlineVisibleRange)}. It combines only sources that refreshed for the same week and should not be added to the DotStudios total because those sources overlap.</p>
    </div>
  ` : '';
  const salesSummaryEl = document.querySelector('#sales-summary') || document.querySelector('#purchase-summary');
  if (!salesSummaryEl) return;
  salesSummaryEl.innerHTML = `
    ${tvodReconciliation}
    <div class="sales-callout">
      <span>${escapeHtml(headlineVisibleLabel)}</span>
      <strong>${fmt.number(headlineVisiblePurchases)} purchases / ${fmt.currency(headlineVisibleRevenue)}</strong>
      <p>${escapeHtml(headlineVisibleRange)}. This is the fresh current-period TVOD check. DotStudios is the broad title/device source for this window; Stripe, Roku, and Apple remain labeled platform checks because they can overlap DotStudios and should not be added to it.</p>
      ${sourceBreakout ? `<ul class="sales-source-list">${sourceBreakout}</ul>` : ''}
    </div>
    <div class="sales-stat-grid">
      ${sales.yearToDate ? `<div class="sales-stat sales-stat-ytd" id="sales-ytd-card">
        <span>Sales year to date</span>
        <strong>${fmt.currency(sales.yearToDate.purchaseRevenue)}</strong>
        <em>${escapeHtml(sales.yearToDate.range || '')} · ${fmt.number(sales.yearToDate.purchases)} purchases</em>
        <em class="sales-stat-footnote">${escapeHtml(sales.yearToDate.caveat || sales.yearToDate.note || '')}</em>
      </div>` : ''}
      <div class="sales-stat baseline-set">
        <span>Latest Stripe source check</span>
        <strong>${fmt.currency(stripeLatest.purchaseRevenue)}</strong>
        <em>${stripeLatest.range} · ${fmt.number(stripeLatest.purchases)} purchases</em>
        <em class="sales-stat-footnote">${escapeHtml(stripeLatest.note || 'Stripe-visible web purchases only; do not add to DotStudios TVOD.')}</em>
      </div>
      <div class="sales-stat">
        <span>Apple latest snapshot</span>
        <strong>${fmt.currency(appleLatest.purchaseRevenue)}</strong>
        <em>${appleLatest.range} · ${appleLatest.downloads != null ? `${fmt.number(appleLatest.downloads)} downloads · ` : ''}${appleLatest.purchases != null ? `${fmt.number(appleLatest.purchases)} purchases` : 'transaction count not reported'}</em>
        <em class="sales-stat-footnote">${escapeHtml(appleLatest.detail || 'Aggregate gross App Store Connect screenshot; overlaps DotStudios Apple-platform TVOD.')}</em>
      </div>
      <div class="sales-stat">
        <span>${escapeHtml(headlineVisibleLabel)}</span>
        <strong>${fmt.currency(visibleSourceRevenue)}</strong>
        <em>${escapeHtml(headlineVisibleRange)} · ${visibleSourcePurchases != null ? `${fmt.number(visibleSourcePurchases)} purchases` : 'partial transaction count'}</em>
        <em class="sales-stat-footnote">${escapeHtml(visibleSourceWeek.note || 'Stripe + Roku + Apple source snapshots only; may be incomplete and overlaps DotStudios.')}</em>
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
  document.querySelector('#live-summary').innerHTML = keys
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
  if (explicit !== null) return explicit <= 1 ? explicit * 100 : explicit;
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
  document.querySelector(selector).innerHTML = (rows || [])
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
  document.querySelector(selector).innerHTML = (rows || [])
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
  document.querySelector('#content-usage-period').textContent = usage.period;
  document.querySelector('#live-usage-note').textContent = usage.live.note;
  document.querySelector('#ondemand-usage-note').textContent = usage.onDemand.note;
  document.querySelector('#live-usage-cards').innerHTML = [
    usageStat('Live active users', usage.live.total.activeUsers),
    usageStat('Live screen views', usage.live.total.screenPageViews),
    usageStat('Live play events', usage.live.playback.play || 0),
    usageStat('Live video starts', usage.live.playback.video_start || 0),
  ].join('');
  document.querySelector('#ondemand-usage-cards').innerHTML = [
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
  document.querySelector('#section-usage-period').textContent = usage.period || data.periods.currentWeek.range;
  document.querySelector('#section-usage-note').textContent = usage.note || '';
  const maxUsers = Math.max(...(usage.rows || []).map((row) => row.activeUsers || 0), 1);
  document.querySelector('#section-usage-list').innerHTML = (usage.rows || [])
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
  const section = document.querySelector('#roku-app');
  const metrics = report?.metrics || report;
  if (!section || !report || !metrics) {
    if (section) section.hidden = true;
    return;
  }
  section.hidden = false;
  const dateRange = report.dateLabels?.length ? `${report.dateLabels[0]}-${report.dateLabels.at(-1)}` : (report.reportPeriod || report.period);
  const reportRange = dateRange || report.reportPeriod || report.period || 'the latest Roku report';
  document.querySelector('#roku-app-period').textContent = dateRange || 'Latest Roku App Engagement report';
  document.querySelector('#roku-app-note').textContent =
    report.sourceDetail || report.note || report.source || 'Roku app metrics are parsed from the latest emailed Roku App Engagement PDF.';
  const netInstalls = metrics.netInstalls ?? (
    typeof metrics.newInstalls === 'number' && typeof metrics.uninstalls === 'number'
      ? metrics.newInstalls - metrics.uninstalls
      : null
  );
  const cards = [
    ['New installs', metrics.newInstalls, fmt.number(metrics.newInstalls), `Roku app installs for ${reportRange}`],
    ['Uninstalls', metrics.uninstalls, fmt.number(metrics.uninstalls), `Roku app uninstalls for ${reportRange}`],
    ['Net installs', netInstalls, fmt.number(netInstalls), `Installs minus uninstalls for ${reportRange}`],
    ['Cumulative installs', metrics.cumulativeInstalls, fmt.number(metrics.cumulativeInstalls), `Roku cumulative installs reported by Roku for ${reportRange}`],
    ['Avg daily viewers', metrics.avgDailyViewers, fmt.number(metrics.avgDailyViewers), `Average Roku viewers per day for ${reportRange}`],
    ['Avg min per viewer', metrics.avgMinPerViewer ?? metrics.avgMinutesPerViewer, fmt.minutes(metrics.avgMinPerViewer ?? metrics.avgMinutesPerViewer), `Average viewing time per Roku viewer for ${reportRange}`],
    ['Total hours streamed', metrics.totalHoursStreamed, fmt.number(metrics.totalHoursStreamed), `Total Roku app streaming hours for ${reportRange}`],
  ].filter(([, raw]) => raw !== undefined && raw !== null && raw !== '');
  document.querySelector('#roku-app-summary').innerHTML = cards
    .map(([label, , value, detail]) => usageStat(label, value, detail))
    .join('');
}

function barRows(selector, events, accent = false) {
  const rows = events
    .map((name) => {
      const row = (data.eventCards || []).find((e) => (e.event || e.eventName) === name);
      if (!row) return null;
      const value = selectedPeriod === 'weekToDate'
        ? (row.weekToDate ?? row.current ?? row.eventCount)
        : (row.current ?? row.eventCount ?? row.weekToDate);
      return {
        ...row,
        event: row.event || row.eventName || name,
        label: row.label || row.eventName || row.event || name,
        displayValue: toFiniteNumber(value) ?? 0,
      };
    })
    .filter(Boolean);
  const target = document.querySelector(selector);
  if (!target) return;
  if (!rows.length) {
    target.innerHTML = '<p class="panel-note">No matching GA4 event rows were returned for this period.</p>';
    return;
  }
  const max = Math.max(...rows.map((r) => r.displayValue), 1);
  target.innerHTML = rows
    .map((r) => {
      const value = r.displayValue;
      const width = Math.max(3, (value / max) * 100);
      return `
        <div class="bar-row">
          <header><span>${escapeHtml(r.label)}</span><strong>${fmt.number(value)}</strong></header>
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
  const section = document.querySelector('#dotstudios-app-ads');
  const summary = data.dotStudiosAppAds;
  if (!section) return;
  if (!summary || typeof summary !== 'object') {
    section.hidden = true;
    return;
  }
  section.hidden = false;

  const totals = summary.totals || {};
  const period = summary.period || [summary.periodStart, summary.periodEnd].filter(Boolean).join(' to ') || 'Manual upload';
  const periodEl = document.querySelector('#dotstudios-app-ads-period');
  if (periodEl) periodEl.textContent = period;

  const noteEl = document.querySelector('#dotstudios-app-ads-note');
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
  const kpiEl = document.querySelector('#dotstudios-app-ads-kpis');
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
  const deviceEl = document.querySelector('#dotstudios-app-ads-devices');
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
  const channelEl = document.querySelector('#dotstudios-app-ads-channels');
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
  const videosEl = document.querySelector('#dotstudios-app-ads-videos');
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
  const dailyEl = document.querySelector('#dotstudios-app-ads-daily');
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

  const plainEl = document.querySelector('#dotstudios-app-ads-plain');
  if (plainEl) plainEl.textContent = summary.plainEnglish || '';

  const caveatEl = document.querySelector('#dotstudios-app-ads-caveats');
  const caveats = Array.isArray(summary.caveats) ? summary.caveats : [];
  if (caveatEl) {
    caveatEl.innerHTML = caveats.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  }
}

function renderTable(selector, headers, rows, mapper) {
  const tableRows = Array.isArray(rows) ? rows : (rows?.rows || []);
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = `
    <table>
      <thead><tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${tableRows.map((row) => `<tr>${mapper(row).map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
  `;
}

function renderPlatformMix() {
  const mix = data.platformMix;
  const periodEl = document.querySelector('#platform-mix-period');
  const noteEl = document.querySelector('#platform-note');
  const target = document.querySelector('#platform-mix');
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
        .map((row) => {
          const rowValue = row.activeUsers ?? row.views ?? 0;
          const metricLabel = row.metricLabel || (row.views != null && row.activeUsers == null ? 'views' : 'active users');
          const rowSource = row.sourceLabel ? ` · ${escapeHtml(row.sourceLabel)}` : '';
          return `
            <article class="platform-share-card ${row.tracked === false ? 'is-untracked' : ''}">
              <header>
                <div>
                  <strong>${escapeHtml(row.platform || 'Unknown')}</strong>
                  <span>${row.category ? `${escapeHtml(row.category)} · ` : ''}${row.tracked === false ? 'not separately tracked yet' : `${fmt.number(rowValue)} ${escapeHtml(metricLabel)}${rowSource}`}</span>
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
          `;
        })
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
  document.querySelector('#top-title-period').textContent = viewership.period;
  document.querySelector('#top-title-note').textContent = viewership.note;
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
  document.querySelector('#top-video-period').textContent = viewership.period;
  document.querySelector('#top-video-note').textContent =
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
    document.querySelector('#surface-note').textContent = surface.note;
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
    document.querySelector('#platform-time-note').textContent =
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
    Array.isArray(data.platforms) ? data.platforms : [],
    (p) => {
      const current = p.current || p;
      const engagementRate = p.engagementRateCurrent ?? current.engagementRate ?? null;
      const deltaMarkup = Number.isFinite(p.activeUsersDeltaPct)
        ? ` <em class="delta ${deltaClass(p.activeUsersDeltaPct)}">${fmt.delta(p.activeUsersDeltaPct)}</em>`
        : '';
      return [
        `<strong>${escapeHtml(p.platform || current.platform || NOT_AVAILABLE)}</strong>`,
        `<strong>${fmt.number(current.activeUsers)}</strong>${deltaMarkup}`,
        fmt.number(current.sessions),
        fmt.percent(engagementRate),
      ];
    },
  );
  renderContentActivity();
}

function contentRowLabel(row) {
  const rawPath = String(row.path ?? '').trim();
  const rawScreen = String(row.screen ?? '').trim();
  const rawUnified = String(row.unifiedPageScreen ?? row.pageScreen ?? row.pageTitle ?? '').trim();
  const hasPath = rawPath && rawPath !== '(not set)';
  const hasScreen = rawScreen && rawScreen !== '(not set)';
  const hasUnified = rawUnified && rawUnified !== '(not set)';
  if (hasScreen && !hasPath) return { label: rawScreen, context: 'App screen' };
  if (hasPath) {
    const context = hasScreen && rawScreen !== 'ElectricNOW' ? rawScreen : 'Web page';
    return { label: rawPath, context };
  }
  if (hasUnified) {
    const isWebPath = rawUnified.startsWith('/');
    return { label: rawUnified, context: isWebPath ? 'Web page' : 'App screen or GA4 page/screen' };
  }
  return { label: 'Unlabeled activity', context: 'No screen name or path sent to GA4' };
}

function renderContentActivity() {
  const readout = document.querySelector('#content-readout');
  if (readout) {
    readout.innerHTML =
      'App activity is concentrated in app-lifecycle and video-playback screens: Splash, Intro, and On Demand draw the most users, ' +
      'while Live TV shows far higher events per user than any other screen — a sign of deep viewing sessions. ' +
      'Rows such as /landing, / (root), and /devices are web navigation or acquisition pages, not app platform audience.';
  }
  const note = document.querySelector('#content-note');
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
  document.querySelector('#gaps-list').innerHTML = data.instrumentationGaps.map((gap) => `<li>${gap}</li>`).join('');
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
  const section = document.querySelector('#google-ads');
  const summary = data.googleAdsSummary;
  if (!section) return;
  if (!summary || typeof summary !== 'object') {
    section.hidden = true;
    return;
  }
  section.hidden = false;

  document.querySelector('#google-ads-period').textContent = summary.period || data.periods.currentWeek.range;
  const sourceLabel = summary.source || 'Google Ads connector';
  const accountBits = [summary.accountName, summary.accountId ? `account ${summary.accountId}` : null].filter(Boolean).join(' \u2014 ');
  document.querySelector('#google-ads-note').textContent =
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
  document.querySelector('#google-ads-campaign').innerHTML = campaignCard;

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
  document.querySelector('#google-ads-kpis').innerHTML = kpiCards.join('');

  const devices = Array.isArray(summary.deviceBreakout) ? summary.deviceBreakout : [];
  const totalImpressions = devices.reduce((sum, row) => sum + (toFiniteNumber(row.impressions) || 0), 0) || 1;
  document.querySelector('#google-ads-devices').innerHTML = devices
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
  document.querySelector('#google-ads-actions').innerHTML = actions
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
  document.querySelector('#google-ads-plain').textContent = plain;
}

function ensureMetaAdsSection() {
  let section = document.getElementById('meta-ads');
  if (section) return section;
  const googleAds = document.getElementById('google-ads');
  if (!googleAds) return null;
  const sideNav = document.querySelector('.side-nav');
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

  const periodChip = document.querySelector('#meta-ads-period');
  if (periodChip) periodChip.textContent = summary.period || 'Latest Meta report';

  const noteEl = document.querySelector('#meta-ads-note');
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
  const kpisEl = document.querySelector('#meta-ads-kpis');
  if (kpisEl) kpisEl.innerHTML = kpiCards.join('');

  const campaigns = Array.isArray(summary.campaigns) ? summary.campaigns : [];
  const campaignsEl = document.querySelector('#meta-ads-campaigns');
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
  const genderEl = document.querySelector('#meta-ads-gender');
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
  const ageEl = document.querySelector('#meta-ads-age');
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

  const interpEl = document.querySelector('#meta-ads-interp');
  if (interpEl) interpEl.textContent = summary.paidAcquisitionInterpretation || '';
  const plainEl = document.querySelector('#meta-ads-plain');
  if (plainEl) plainEl.textContent = summary.plainEnglish || '';
  const distEl = document.querySelector('#meta-ads-distinction');
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
  const sideNav = document.querySelector('.side-nav');
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

  const periodChip = document.querySelector('#youtube-period');
  if (periodChip) periodChip.textContent = `${summary.period} · latest available`;

  const noteEl = document.querySelector('#youtube-note');
  if (noteEl) {
    noteEl.textContent =
      [summary.source, summary.periodNote, summary.comparisonNote].filter(Boolean).join(' ') + ' ' +
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
  const kpiObject = summary.kpis && !Array.isArray(summary.kpis) ? summary.kpis : null;
  const kpis = Array.isArray(summary.kpis) ? [...summary.kpis] : [
    { key: 'views', label: 'Views', value: kpiObject?.views ?? summary.totals?.views, detail: summary.period || '' },
    { key: 'hoursWatched', label: 'Hours watched', value: kpiObject?.hoursWatched ?? summary.totals?.hoursWatched, detail: summary.period || '' },
    { key: 'estimatedAdRevenue', label: 'Est. ad revenue', value: kpiObject?.estimatedRevenue ?? summary.totals?.estimatedRevenue, detail: 'YouTube only' },
    { key: 'adImpressions', label: 'Ad impressions', value: kpiObject?.adImpressions ?? summary.totals?.adImpressions, detail: 'YouTube ads only' },
  ].filter((card) => card.value != null);
  const ytdRevenue = summary.ytdRevenue ?? summary.yearToDate?.estimatedRevenue ?? summary.ytd?.estimatedRevenue;
  if (ytdRevenue != null && !kpis.some((card) => card.key === 'estimatedRevenueYtd' || /ytd/i.test(card.label || ''))) {
    kpis.push({
      key: 'estimatedRevenueYtd',
      label: 'YTD YouTube income',
      value: ytdRevenue,
      detail: summary.ytdFreshnessNote || summary.ytdNote || 'Separate YouTube ad income; not TVOD sales',
    });
  }
  const kpisEl = document.querySelector('#youtube-kpis');
  if (kpisEl) {
    kpisEl.innerHTML = kpis
      .map((card) => usageStat(card.label, ytCardValue(card), `${card.detail}${ytDelta(card) ? ` · ${ytDelta(card)}` : ''}`))
      .join('');
  }

  const daily = Array.isArray(summary.dailyTrend) ? summary.dailyTrend : [];
  const dailyEl = document.querySelector('#youtube-daily');
  if (dailyEl) {
    dailyEl.innerHTML = `
      <table>
        <thead><tr><th>Date</th><th>Views</th><th>Est. hours</th><th>Est. ad rev</th><th>Ad impressions</th><th>Monetized playbacks</th></tr></thead>
        <tbody>
          ${daily.map((r) => `
            <tr>
              <td>${escapeHtml(r.date)}</td>
              <td>${fmt.number(r.views)}</td>
              <td>${fmt.number(r.estimatedHoursWatched ?? r.hoursWatched ?? ((r.watchTimeMinutes || 0) / 60))}</td>
              <td>${fmt.currency(r.estimatedAdRevenue ?? r.estimatedRevenue)}</td>
              <td>${fmt.number(r.adImpressions)}</td>
              <td>${fmt.number(r.monetizedPlaybacks)}</td>
            </tr>`).join('')}
        </tbody>
      </table>`;
  }

  const videos = Array.isArray(summary.topVideos) ? summary.topVideos : (Array.isArray(summary.topVideosCurrentPeriod) ? summary.topVideosCurrentPeriod : []);
  const videosEl = document.querySelector('#youtube-top-videos');
  if (videosEl) {
    videosEl.innerHTML = `
      <table>
        <thead><tr><th>Video</th><th>Views</th><th>Est. hours</th><th>Avg view</th><th>Est. ad rev</th><th>Ad impressions</th><th>Monetized playbacks</th></tr></thead>
        <tbody>
          ${videos.map((v) => `
            <tr>
              <td><strong>${escapeHtml(v.title)}</strong>${v.videoId && v.videoId !== v.title ? `<br><span>${escapeHtml(v.videoId)}</span>` : ''}</td>
              <td>${fmt.number(v.views)}</td>
              <td>${fmt.number(v.estimatedHoursWatched ?? v.hoursWatched ?? ((v.watchTimeMinutes || 0) / 60))}</td>
              <td>${escapeHtml(v.averageViewDuration || '—')}</td>
              <td>${fmt.currency(v.estimatedAdRevenue ?? v.estimatedRevenue)}</td>
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
  const trafficEl = document.querySelector('#youtube-traffic');
  if (trafficEl) trafficEl.innerHTML = ytShareRows(summary.trafficSources);
  const devicesEl = document.querySelector('#youtube-devices');
  if (devicesEl) devicesEl.innerHTML = ytShareRows(summary.deviceSplit);

  const distEl = document.querySelector('#youtube-distinction');
  if (distEl) distEl.textContent = summary.distinctionNote || '';
}

function ensureUsGeographySection() {
  let section = document.getElementById('us-geography');
  if (section) return section;
  // Anchor after YouTube when present, otherwise after Meta/Google Ads.
  const anchor = document.getElementById('youtube') || document.getElementById('meta-ads') || document.getElementById('google-ads');
  if (!anchor) return null;
  const sideNav = document.querySelector('.side-nav');
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

  const eyebrow = document.querySelector('#us-geography-eyebrow');
  if (eyebrow) eyebrow.textContent = geo.eyebrow || 'Where the ElectricNOW app & platform is used across the United States';
  const periodChip = document.querySelector('#us-geography-period');
  if (periodChip) periodChip.textContent = geo.freshness || geo.period || '';
  const noteEl = document.querySelector('#us-geography-note');
  if (noteEl) noteEl.textContent = `Source: ${geo.source}. ${geo.summaryLine || ''}`;

  const stateRowsForTotals = Array.isArray(geo.states) ? geo.states : [];
  const derivedUsTotals = stateRowsForTotals.reduce((acc, s) => {
    acc.activeUsers += toFiniteNumber(s.activeUsers) || 0;
    acc.sessions += toFiniteNumber(s.sessions) || 0;
    acc.engagedSessions += toFiniteNumber(s.engagedSessions) || 0;
    acc.userEngagementDuration += toFiniteNumber(s.userEngagementDuration) || 0;
    acc.totalEngagementHours += toFiniteNumber(s.totalEngagementHours) || 0;
    return acc;
  }, { activeUsers: 0, sessions: 0, engagedSessions: 0, userEngagementDuration: 0, totalEngagementHours: 0 });
  if (!derivedUsTotals.totalEngagementHours && derivedUsTotals.userEngagementDuration) {
    derivedUsTotals.totalEngagementHours = derivedUsTotals.userEngagementDuration / 3600;
  }
  const t = {
    ...derivedUsTotals,
    ...(geo.usTotals || {}),
  };
  const totalEngagementHours = toFiniteNumber(t.totalEngagementHours);
  const activeUsers = toFiniteNumber(t.activeUsers);
  const avgHoursPerUser = totalEngagementHours !== null && activeUsers !== null && activeUsers > 0 ? totalEngagementHours / activeUsers : null;
  const kpisEl = document.querySelector('#us-geography-kpis');
  if (kpisEl) {
    kpisEl.innerHTML = [
      usageStat('U.S. active users', t.activeUsers, 'State-rollup GA4 active users'),
      usageStat('Sessions', t.sessions, 'U.S. sessions this week'),
      usageStat('Engagement rate', fmt.percent(engagementRateFrom(t)), 'U.S. engaged sessions / sessions'),
      usageStat('Engagement hours', totalEngagementHours === null ? NOT_AVAILABLE : fmt.number(totalEngagementHours), 'U.S. GA4 engagement time'),
      usageStat('Avg hours / user', avgHoursPerUser === null ? NOT_AVAILABLE : avgHoursPerUser.toFixed(1), 'Engagement hours divided by active users'),
    ].join('');
  }

  // Bubble map: proportional circles positioned at approximate state locations.
  const mapEl = document.querySelector('#us-geography-map');
  if (mapEl) {
    const fallbackCoords = {
      'Alabama': [61, 46, 'AL'], 'Alaska': [7, 56, 'AK'], 'Arizona': [24, 42, 'AZ'], 'Arkansas': [56, 42, 'AR'],
      'California': [12, 34, 'CA'], 'Colorado': [34, 32, 'CO'], 'Connecticut': [83, 20, 'CT'], 'Delaware': [80, 27, 'DE'],
      'District of Columbia': [79, 29, 'DC'], 'Florida': [70, 58, 'FL'], 'Georgia': [65, 46, 'GA'], 'Hawaii': [18, 56, 'HI'],
      'Idaho': [22, 16, 'ID'], 'Illinois': [58, 28, 'IL'], 'Indiana': [61, 27, 'IN'], 'Iowa': [53, 24, 'IA'],
      'Kansas': [45, 32, 'KS'], 'Kentucky': [64, 33, 'KY'], 'Louisiana': [56, 50, 'LA'], 'Maine': [85, 8, 'ME'],
      'Maryland': [79, 28, 'MD'], 'Massachusetts': [84, 18, 'MA'], 'Michigan': [62, 18, 'MI'], 'Minnesota': [51, 14, 'MN'],
      'Mississippi': [59, 46, 'MS'], 'Missouri': [54, 32, 'MO'], 'Montana': [29, 10, 'MT'], 'Nebraska': [45, 24, 'NE'],
      'Nevada': [17, 28, 'NV'], 'New Hampshire': [84, 15, 'NH'], 'New Jersey': [80, 24, 'NJ'], 'New Mexico': [32, 42, 'NM'],
      'New York': [79, 16, 'NY'], 'North Carolina': [73, 39, 'NC'], 'North Dakota': [44, 10, 'ND'], 'Ohio': [65, 25, 'OH'],
      'Oklahoma': [46, 40, 'OK'], 'Oregon': [14, 15, 'OR'], 'Pennsylvania': [76, 23, 'PA'], 'Puerto Rico': [80, 56, 'PR'],
      'Rhode Island': [85, 19, 'RI'], 'South Carolina': [70, 43, 'SC'], 'South Dakota': [44, 17, 'SD'], 'Tennessee': [62, 39, 'TN'],
      'Texas': [42, 48, 'TX'], 'Utah': [23, 28, 'UT'], 'Vermont': [82, 13, 'VT'], 'Virginia': [75, 32, 'VA'],
      'Washington': [15, 6, 'WA'], 'Washington, D.C.': [79, 29, 'DC'], 'West Virginia': [72, 30, 'WV'], 'Wisconsin': [55, 16, 'WI'],
      'Wyoming': [30, 20, 'WY'],
    };
    const placed = geo.states
      .map((s) => {
        const coord = fallbackCoords[s.state];
        if ((typeof s.x !== 'number' || typeof s.y !== 'number') && coord) {
          return { ...s, x: coord[0], y: coord[1], stateCode: s.stateCode || coord[2] };
        }
        return s;
      })
      .filter((s) => typeof s.x === 'number' && typeof s.y === 'number' && s.activeUsers > 0);
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
  const mapCaption = document.querySelector('#us-geography-map-caption');
  if (mapCaption) mapCaption.textContent = 'Bubble size is proportional to GA4 active users by state (directional). Hover a bubble for exact figures. Alaska and Hawaii are shown as insets at lower-left.';

  const statesEl = document.querySelector('#us-geography-states');
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

  const citiesEl = document.querySelector('#us-geography-cities');
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

  const tzPanel = document.querySelector('#us-geography-timezones');
  const tz = geo.timeZoneUsage;
  if (tzPanel) {
    const tzGroups = Array.isArray(tz)
      ? tz
          .filter((grp) => grp && (grp.activeUsers || grp.sessions))
          .map((grp) => ({
            name: grp.group || grp.name,
            pct: grp.sharePct ?? grp.pct,
            sessions: grp.sessions ?? grp.activeUsers,
            metricLabel: grp.sessions ? 'sessions' : 'active users',
          }))
      : tz && Array.isArray(tz.groups)
        ? tz.groups
            .filter((grp) => grp && (grp.sessions || grp.activeUsers))
            .map((grp) => ({
              name: grp.name || grp.group,
              pct: grp.pct ?? grp.sharePct,
              sessions: grp.sessions ?? grp.activeUsers,
              metricLabel: grp.sessions ? 'sessions' : 'active users',
            }))
        : [];
    if (tzGroups.length) {
      tzPanel.hidden = false;
      const labelEl = document.querySelector('#us-geography-timezones-label');
      const tzLabel = !Array.isArray(tz) && tz && tz.label
        ? tz.label
        : 'Share of U.S. app users by time-zone grouping';
      if (labelEl) labelEl.textContent = tzLabel;
      const palette = ['rgba(56,189,248,0.85)', 'rgba(129,140,248,0.85)', 'rgba(52,211,153,0.85)'];
      const barEl = document.querySelector('#us-geography-timezones-bar');
      if (barEl) {
        barEl.innerHTML = tzGroups
          .map((grp, i) => {
            const seg = `${grp.name}: ${fmt.percent(grp.pct)} (${fmt.number(grp.sessions)} ${grp.metricLabel})`;
            return `<div title="${escapeHtml(seg)}" style="width:${grp.pct}%;background:${palette[i % palette.length]};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#0a1524;min-width:0;overflow:hidden;white-space:nowrap;">${grp.pct >= 8 ? fmt.percent(grp.pct) : ''}</div>`;
          })
          .join('');
      }
      const chipsEl = document.querySelector('#us-geography-timezones-chips');
      if (chipsEl) {
        chipsEl.innerHTML = tzGroups
          .map((grp) => usageStat(grp.name, fmt.percent(grp.pct), `${fmt.number(grp.sessions)} ${grp.metricLabel}`))
          .join('');
      }
      const tzCaveatEl = document.querySelector('#us-geography-timezones-caveat');
      const tzCaveat = !Array.isArray(tz) && tz && tz.caveat
        ? tz.caveat
        : 'Time-zone groups are directional and based on GA4 state-level app usage signals.';
      if (tzCaveatEl) tzCaveatEl.textContent = tzCaveat;
    } else {
      tzPanel.hidden = true;
    }
  }

  const caveatEl = document.querySelector('#us-geography-caveat');
  if (caveatEl) caveatEl.textContent = geo.caveat || '';
  const methodEl = document.querySelector('#us-geography-methodology');
  if (methodEl) methodEl.textContent = geo.methodologyNote || '';
}

function renderTvodTitleRevenue() {
  const section = document.querySelector('#tvod-title-revenue');
  const tv = data.tvodTitleRevenue;
  if (!section || !tv) {
    if (section) section.hidden = true;
    return;
  }
  section.hidden = false;
  const periodLabel = tv.period || (tv.periodStart && tv.periodEnd ? `${tv.periodStart} to ${tv.periodEnd}` : tv.periodStart ? `Since ${tv.periodStart}` : 'Cumulative since launch');
  document.querySelector('#tvod-title-revenue-period').textContent = periodLabel;
  document.querySelector('#tvod-title-revenue-note').textContent = tv.periodNote || tv.note || '';

  const ru = tv.registeredUsers || {};
  const txn = tv.transactions || {};
  const net = tv.netRevenue || {};
  const revenueOverview = tv.revenueOverview || {};
  const tvodNetRevenue =
    net.netIncludingRefunds ??
    net.tvodSalesExportPaidNet ??
    net.tvodSalesEmailTotalNet ??
    net.csvPaidNetTotal;
  const hasDashboardRevenue = revenueOverview.totalRevenue != null || revenueOverview.grossRevenue != null || tv.totalGross != null;
  const dashboardRevenue = hasDashboardRevenue ? (revenueOverview.totalRevenue ?? revenueOverview.grossRevenue ?? tv.totalGross) : tvodNetRevenue;
  const revenueCardLabel = hasDashboardRevenue ? 'DotStudios revenue overview' : 'DotStudios TVOD export total';
  const revenueCardDetail = hasDashboardRevenue
    ? (revenueOverview.period ? `${revenueOverview.period} · dashboard-level total` : 'Dashboard-level revenue total')
    : `${fmt.number(txn.paidTransactions)} paid line items · ${periodLabel}`;
  const cards = [
    [revenueCardLabel, fmt.currency(dashboardRevenue), revenueCardDetail],
    ['Registered users', fmt.number(ru.total), 'Total registered ElectricNOW accounts'],
    ['Active registered users', fmt.number(ru.active), 'Registered users considered active'],
    ['Line-item export rows', fmt.number(txn.paidTransactions), `${fmt.number(txn.totalRows)} paid rows in the title/device export`],
    ['Line-item export subtotal', fmt.currency(tvodNetRevenue), 'Subtotal used for title-family and channel breakdowns'],
  ];
  if (revenueOverview.activeSubscribers != null) {
    cards.splice(3, 0, ['Active subscribers', fmt.number(revenueOverview.activeSubscribers), 'DotStudios Revenue Overview card']);
  }
  // Year-to-date sales, surfaced here at the user's request. Labelled as ALL
  // visible platform sources, not DotStudios, because every other card in this
  // grid is the single-week DotStudios export.
  const ytd = (data.salesSummary || {}).yearToDate;
  if (ytd && ytd.purchaseRevenue != null) {
    cards.push([
      'Total sales year to date \u00b7 all visible sources',
      fmt.currency(ytd.purchaseRevenue),
      `${fmt.number(ytd.purchases)} purchases \u00b7 ${ytd.range || 'year to date'} \u00b7 not the DotStudios weekly export above. Understates the full year: no Google Play source before Aug 7, 2026.`,
    ]);
  }
  document.querySelector('#tvod-title-revenue-summary').innerHTML = cards
    .map(([label, value, detail]) => usageStat(label, value, detail))
    .join('');

  const familyTotals = tv.familyTotals || [];
  renderTable(
    '#tvod-title-family-table',
    ['Title family', 'Transactions', 'Gross', 'Net'],
    familyTotals,
    (row) => [
      `<strong>${escapeHtml(row.family || 'Unknown')}</strong>`,
      fmt.number(row.transactions),
      fmt.currency(row.gross),
      fmt.currency(row.net),
    ],
  );

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
  document.querySelector('#trend-period').textContent =
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
  document.querySelector('#period-select option[value="currentWeek"]').textContent =
    `${data.periods.currentWeek.range} usage`;
  document.querySelector('#period-select option[value="weekToDate"]').textContent = `${data.periods.weekToDate.range} watch`;
}

async function loadCurrentData() {
  const status = document.querySelector('#refresh-status');
  if (HOSTED_DATA_URL) {
    try {
      const separator = HOSTED_DATA_URL.includes('?') ? '&' : '?';
      const response = await fetch(`${HOSTED_DATA_URL}${separator}v=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Hosted data failed (${response.status})`);
      data = await response.json();
      window.ELECTRICNOW_DASHBOARD_DATA = data; // keep the page global equal to what is rendered (audit reads it)
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
  if (!API_BASE) {
    if (data) {
      status.textContent = `Updated ${data.generatedAt}`;
    } else {
      status.textContent = 'Data load failed';
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

document.querySelector('#period-select').addEventListener('change', (event) => {
  selectedPeriod = event.target.value;
  renderAll();
});

const refreshButton = document.querySelector('#refresh-data');
if (refreshButton) {
  refreshButton.addEventListener('click', async () => {
    const button = document.querySelector('#refresh-data');
    const status = document.querySelector('#refresh-status');
    button.disabled = true;
    button.textContent = 'Updating...';
    status.textContent = HOSTED_DATA_URL ? 'Loading hosted data' : API_BASE ? 'Pulling GA4' : 'Using bundled dashboard data';
    try {
      if (HOSTED_DATA_URL) {
        await loadCurrentData();
        return;
      }
      if (!API_BASE) {
        if (data) {
          setPeriodOptions();
          renderAll();
          status.textContent = `Updated ${data.generatedAt}`;
        } else {
          status.textContent = 'No dashboard API configured';
        }
        return;
      }
      const response = await fetch(`${API_BASE}/api/refresh`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Refresh failed (${response.status})`);
      data = await response.json();
      window.ELECTRICNOW_DASHBOARD_DATA = data; // keep the page global equal to what is rendered (audit reads it)
    _enPurgeLiveFromOnDemand(data);
      _enPurgeLiveFromOnDemand(data);
      selectedPeriod = 'currentWeek';
      document.querySelector('#period-select').value = selectedPeriod;
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

document.querySelector('#plain-toggle').addEventListener('click', () => {
  const panel = document.querySelector('#plain-panel');
  const button = document.querySelector('#plain-toggle');
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
  setPeriodOptions(); // bundled-data path must label the period selector too (2026-09-08 preview defect)
  renderAll();
}
loadCurrentData();

})();
