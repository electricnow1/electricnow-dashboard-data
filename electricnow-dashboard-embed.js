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
  "generatedAt": "November 2, 2026 (Pacific)",
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
      "range": "Oct 19-Oct 25, 2026",
      "start": "2026-10-19",
      "end": "2026-10-25"
    },
    "baseline": {
      "label": "Launch baseline",
      "range": "Apr 13-Apr 19, 2026",
      "start": "2026-04-13",
      "end": "2026-04-19"
    },
    "currentWeek": {
      "label": "Latest 7 complete days",
      "range": "Oct 26-Nov 1, 2026",
      "start": "2026-10-26",
      "end": "2026-11-01"
    },
    "weekToDate": {
      "label": "Latest 7 complete days",
      "range": "Oct 26-Nov 1, 2026",
      "start": "2026-10-26",
      "end": "2026-11-01"
    },
    "current": {
      "label": "Latest 7 complete days",
      "range": "Oct 26-Nov 1, 2026",
      "start": "2026-10-26",
      "end": "2026-11-01"
    },
    "previous": {
      "label": "Previous 7 complete days",
      "range": "Oct 19-Oct 25, 2026",
      "start": "2026-10-19",
      "end": "2026-10-25"
    },
    "rolling28Current": {
      "label": "Latest rolling 28 complete days",
      "range": "Oct 5-Nov 1, 2026",
      "start": "2026-10-05",
      "end": "2026-11-01"
    },
    "rolling28Previous": {
      "label": "Prior rolling 28 complete days",
      "range": "Sep 7-Oct 4, 2026",
      "start": "2026-09-07",
      "end": "2026-10-04"
    }
  },
  "periodTotals": {
    "launchBaseline": {
      "activeUsers": 6862.0,
      "newUsers": 5973.0,
      "sessions": 11450.0,
      "engagedSessions": 7472.0,
      "engagementRate": 65.25764192139738,
      "screenPageViews": 35021.0,
      "eventCount": 692838.0,
      "userEngagementDuration": 13146012.0,
      "totalEngagementHours": 3651.67,
      "avgEngagedMinutesPerUser": 31.929495773826876,
      "avgEngagedMinutesPerSession": 19.13538864628821,
      "range": "Apr 13-Apr 19, 2026",
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "previousWeek": {
      "activeUsers": 2535.0,
      "newUsers": 569.0,
      "sessions": 6418.0,
      "engagedSessions": 5219.0,
      "engagementRate": 81.3181676534746,
      "screenPageViews": 29773.0,
      "eventCount": 837412.0,
      "userEngagementDuration": 16912231.0,
      "totalEngagementHours": 4697.841944444444,
      "avgEngagedMinutesPerUser": 111.19152531229454,
      "avgEngagedMinutesPerSession": 43.91874675392126,
      "range": "Oct 19-Oct 25, 2026",
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "baseline": {
      "activeUsers": 6862.0,
      "newUsers": 5973.0,
      "sessions": 11450.0,
      "engagedSessions": 7472.0,
      "engagementRate": 65.25764192139738,
      "screenPageViews": 35021.0,
      "eventCount": 692838.0,
      "userEngagementDuration": 13146012.0,
      "totalEngagementHours": 3651.67,
      "avgEngagedMinutesPerUser": 31.929495773826876,
      "avgEngagedMinutesPerSession": 19.13538864628821,
      "range": "Apr 13-Apr 19, 2026",
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "currentWeek": {
      "activeUsers": 2487.0,
      "newUsers": 628.0,
      "sessions": 6167.0,
      "engagedSessions": 5154.0,
      "engagementRate": 83.57386087238527,
      "screenPageViews": 28767.0,
      "eventCount": 798468.0,
      "userEngagementDuration": 16126002.0,
      "totalEngagementHours": 4479.445,
      "avgEngagedMinutesPerUser": 108.06863691194211,
      "avgEngagedMinutesPerSession": 43.58143343603049,
      "range": "Oct 26-Nov 1, 2026",
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "weekToDate": {
      "activeUsers": 2487.0,
      "newUsers": 628.0,
      "sessions": 6167.0,
      "engagedSessions": 5154.0,
      "engagementRate": 83.57386087238527,
      "screenPageViews": 28767.0,
      "eventCount": 798468.0,
      "userEngagementDuration": 16126002.0,
      "totalEngagementHours": 4479.445,
      "avgEngagedMinutesPerUser": 108.06863691194211,
      "avgEngagedMinutesPerSession": 43.58143343603049,
      "range": "Oct 26-Nov 1, 2026",
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "current": {
      "activeUsers": 2487.0,
      "newUsers": 628.0,
      "sessions": 6167.0,
      "engagedSessions": 5154.0,
      "engagementRate": 83.57386087238527,
      "screenPageViews": 28767.0,
      "eventCount": 798468.0,
      "userEngagementDuration": 16126002.0,
      "totalEngagementHours": 4479.445,
      "avgEngagedMinutesPerUser": 108.06863691194211,
      "avgEngagedMinutesPerSession": 43.58143343603049,
      "range": "Oct 26-Nov 1, 2026",
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "previous": {
      "activeUsers": 2535.0,
      "newUsers": 569.0,
      "sessions": 6418.0,
      "engagedSessions": 5219.0,
      "engagementRate": 81.3181676534746,
      "screenPageViews": 29773.0,
      "eventCount": 837412.0,
      "userEngagementDuration": 16912231.0,
      "totalEngagementHours": 4697.841944444444,
      "avgEngagedMinutesPerUser": 111.19152531229454,
      "avgEngagedMinutesPerSession": 43.91874675392126,
      "range": "Oct 19-Oct 25, 2026",
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "rolling28Current": {
      "activeUsers": 8302,
      "newUsers": 2887,
      "sessions": 27706,
      "engagedSessions": 22538,
      "engagementRate": 81.35,
      "screenPageViews": 131984,
      "eventCount": 3489465,
      "userEngagementDuration": 69544234,
      "totalEngagementHours": 19317.84,
      "avgEngagedMinutesPerUser": 139.61341443828795,
      "avgEngagedMinutesPerSession": 41.83464111263505
    },
    "rolling28Previous": {
      "activeUsers": 10254,
      "newUsers": 3676,
      "sessions": 34174,
      "engagedSessions": 27441,
      "engagementRate": 80.30000000000001,
      "screenPageViews": 172216,
      "eventCount": 3826783,
      "userEngagementDuration": 79753065,
      "totalEngagementHours": 22153.63,
      "avgEngagedMinutesPerUser": 129.62919348546907,
      "avgEngagedMinutesPerSession": 38.89558582548136
    }
  },
  "scorecards": [
    {
      "key": "platformActiveUsers",
      "label": "Platform active users",
      "baseline": 6862.0,
      "launchBaseline": 6862.0,
      "previousWeek": 2535.0,
      "current": 2487.0,
      "deltaPct": -1.8934911242603552,
      "deltaVsPreviousPct": -1.8934911242603552,
      "deltaVsLaunchPct": -63.75692218012241,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "currentWeek": 2487.0,
      "previous": 2535.0,
      "changePct": -1.8934911242603552,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "deltaVsBaselinePct": -63.75692218012241,
      "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
      "baselinePeriod": "Apr 13-Apr 19, 2026",
      "deltaVsLaunchAbsolute": -4375.0,
      "deltaVsPreviousAbsolute": -48.0,
      "comparisonUnit": "percent"
    },
    {
      "key": "newUsers",
      "label": "New users",
      "baseline": 5973.0,
      "launchBaseline": 5973.0,
      "previousWeek": 569.0,
      "current": 628.0,
      "deltaPct": 10.369068541300527,
      "deltaVsPreviousPct": 10.369068541300527,
      "deltaVsLaunchPct": -89.48602042524695,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "currentWeek": 628.0,
      "previous": 569.0,
      "changePct": 10.369068541300527,
      "direction": "up",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "deltaVsBaselinePct": -89.48602042524695,
      "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
      "baselinePeriod": "Apr 13-Apr 19, 2026",
      "deltaVsLaunchAbsolute": -5345.0,
      "deltaVsPreviousAbsolute": 59.0,
      "comparisonUnit": "percent"
    },
    {
      "key": "platformSessions",
      "label": "Platform sessions",
      "baseline": 11450.0,
      "launchBaseline": 11450.0,
      "previousWeek": 6418.0,
      "current": 6167.0,
      "deltaPct": -3.9108756622000627,
      "deltaVsPreviousPct": -3.9108756622000627,
      "deltaVsLaunchPct": -46.13973799126638,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "currentWeek": 6167.0,
      "previous": 6418.0,
      "changePct": -3.9108756622000627,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "deltaVsBaselinePct": -46.13973799126638,
      "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
      "baselinePeriod": "Apr 13-Apr 19, 2026",
      "deltaVsLaunchAbsolute": -5283.0,
      "deltaVsPreviousAbsolute": -251.0,
      "comparisonUnit": "percent"
    },
    {
      "key": "engagedSessions",
      "label": "Engaged sessions",
      "baseline": 7472.0,
      "launchBaseline": 7472.0,
      "previousWeek": 5219.0,
      "current": 5154.0,
      "deltaPct": -1.2454493197930638,
      "deltaVsPreviousPct": -1.2454493197930638,
      "deltaVsLaunchPct": -31.02248394004283,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "currentWeek": 5154.0,
      "previous": 5219.0,
      "changePct": -1.2454493197930638,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "deltaVsBaselinePct": -31.02248394004283,
      "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
      "baselinePeriod": "Apr 13-Apr 19, 2026",
      "deltaVsLaunchAbsolute": -2318.0,
      "deltaVsPreviousAbsolute": -65.0,
      "comparisonUnit": "percent"
    },
    {
      "key": "engagementRate",
      "label": "Engagement rate",
      "baseline": 65.25764192139738,
      "launchBaseline": 65.25764192139738,
      "previousWeek": 81.3181676534746,
      "current": 83.57386087238527,
      "deltaPct": 2.773910534387554,
      "deltaVsPreviousPct": 2.773910534387554,
      "deltaVsLaunchPct": 28.067546438545417,
      "deltaType": "points",
      "format": "percent",
      "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "currentWeek": 83.57386087238527,
      "previous": 81.3181676534746,
      "changePct": 2.773910534387554,
      "deltaVsBaselinePct": 28.067546438545417,
      "direction": "up",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
      "baselinePeriod": "Apr 13-Apr 19, 2026",
      "deltaVsLaunchAbsolute": 18.31621895098789,
      "deltaVsPreviousAbsolute": 2.2556932189106647,
      "comparisonUnit": "percentage_points"
    },
    {
      "key": "screenPageViews",
      "label": "Screen/page views",
      "baseline": 35021.0,
      "launchBaseline": 35021.0,
      "previousWeek": 29773.0,
      "current": 28767.0,
      "deltaPct": -3.3789003459510294,
      "deltaVsPreviousPct": -3.3789003459510294,
      "deltaVsLaunchPct": -17.857856714542702,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "currentWeek": 28767.0,
      "previous": 29773.0,
      "changePct": -3.3789003459510294,
      "deltaVsBaselinePct": -17.857856714542702,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
      "baselinePeriod": "Apr 13-Apr 19, 2026",
      "deltaVsLaunchAbsolute": -6254.0,
      "deltaVsPreviousAbsolute": -1006.0,
      "comparisonUnit": "percent"
    },
    {
      "key": "eventCount",
      "label": "Events",
      "baseline": 692838.0,
      "launchBaseline": 692838.0,
      "previousWeek": 837412.0,
      "current": 798468.0,
      "deltaPct": -4.650518502242624,
      "deltaVsPreviousPct": -4.650518502242624,
      "deltaVsLaunchPct": 15.245988239675077,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "currentWeek": 798468.0,
      "previous": 837412.0,
      "changePct": -4.650518502242624,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271",
      "deltaVsBaselinePct": 15.245988239675077,
      "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
      "baselinePeriod": "Apr 13-Apr 19, 2026",
      "deltaVsLaunchAbsolute": 105630.0,
      "deltaVsPreviousAbsolute": -38944.0,
      "comparisonUnit": "percent"
    }
  ],
  "trend": {
    "period": "Oct 26-Nov 1, 2026",
    "previousPeriod": "Oct 19-Oct 25, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "date": "2026-10-26",
        "sessions": 908,
        "activeUsers": 521
      },
      {
        "date": "2026-10-27",
        "sessions": 874,
        "activeUsers": 492
      },
      {
        "date": "2026-10-28",
        "sessions": 882,
        "activeUsers": 487
      },
      {
        "date": "2026-10-29",
        "sessions": 868,
        "activeUsers": 463
      },
      {
        "date": "2026-10-30",
        "sessions": 836,
        "activeUsers": 458
      },
      {
        "date": "2026-10-31",
        "sessions": 920,
        "activeUsers": 504
      },
      {
        "date": "2026-11-01",
        "sessions": 1138,
        "activeUsers": 624
      }
    ],
    "previousRows": [
      {
        "date": "2026-10-19",
        "sessions": 1014,
        "activeUsers": 544
      },
      {
        "date": "2026-10-20",
        "sessions": 943,
        "activeUsers": 532
      },
      {
        "date": "2026-10-21",
        "sessions": 931,
        "activeUsers": 507
      },
      {
        "date": "2026-10-22",
        "sessions": 988,
        "activeUsers": 550
      },
      {
        "date": "2026-10-23",
        "sessions": 949,
        "activeUsers": 485
      },
      {
        "date": "2026-10-24",
        "sessions": 957,
        "activeUsers": 533
      },
      {
        "date": "2026-10-25",
        "sessions": 980,
        "activeUsers": 539
      }
    ],
    "note": "GA4 property 497892271 only. Landing-page traffic is treated as acquisition only, not platform audience. Revised by the Oct 27 GA4 re-pull (Oct 25 was preliminary in the first pull).",
    "anomalyNotes": {}
  },
  "eventCards": [
    {
      "eventName": "app_time",
      "eventCount": 274174,
      "previousWeek": 276689,
      "deltaPct": -0.9089627704751545,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_request",
      "eventCount": 26105,
      "previousWeek": 35501,
      "deltaPct": -26.466860088448215,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "screen_view",
      "eventCount": 22111,
      "previousWeek": 22927,
      "deltaPct": -3.5591224320669954,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_impression",
      "eventCount": 21110,
      "previousWeek": 23191,
      "deltaPct": -8.973308611099133,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "play",
      "eventCount": 17783,
      "previousWeek": 18894,
      "deltaPct": -5.880173600084683,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_progress",
      "eventCount": 15579,
      "previousWeek": 18174,
      "deltaPct": -14.278639815120503,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_loaded",
      "eventCount": 11003,
      "previousWeek": 11104,
      "deltaPct": -0.9095821325648414,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_started",
      "eventCount": 10998,
      "previousWeek": 11088,
      "deltaPct": -0.8116883116883116,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_play",
      "eventCount": 10787,
      "previousWeek": 14713,
      "deltaPct": -26.68388499966016,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_complete",
      "eventCount": 10630,
      "previousWeek": 10791,
      "deltaPct": -1.4919840607914003,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_start",
      "eventCount": 10373,
      "previousWeek": 10887,
      "deltaPct": -4.721227151648756,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "session_start",
      "eventCount": 6165,
      "previousWeek": 6505,
      "deltaPct": -5.226748654880861,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_complete",
      "eventCount": 2743,
      "previousWeek": 3118,
      "deltaPct": -12.026940346375882,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_error",
      "eventCount": 2725,
      "previousWeek": 4859,
      "deltaPct": -43.91850174933114,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "search",
      "eventCount": 1405,
      "previousWeek": 1312,
      "deltaPct": 7.088414634146341,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "application_install",
      "eventCount": 560,
      "previousWeek": 525,
      "deltaPct": 6.666666666666667,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "application_update",
      "eventCount": 326,
      "previousWeek": 352,
      "deltaPct": -7.386363636363637,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "first_open",
      "eventCount": 294,
      "previousWeek": 257,
      "deltaPct": 14.396887159533073,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "in_app_purchase",
      "eventCount": 1,
      "previousWeek": 3,
      "deltaPct": -66.66666666666666,
      "period": "Oct 26-Nov 1, 2026",
      "comparisonPeriod": "Oct 19-Oct 25, 2026",
      "source": "Internal GA4 pull, property 497892271"
    }
  ],
  "purchaseFunnel": [
    {
      "event": "in_app_purchase",
      "label": "Purchase completed",
      "baseline": null,
      "current": 20,
      "weekToDate": 20,
      "deltaPct": null,
      "tracked": true,
      "note": "Current GA4 event signal only; not reconciled revenue.",
      "previousWeek": null
    },
    {
      "event": "go_ad_free_click",
      "label": "Go ad-free button clicked",
      "baseline": null,
      "current": 0,
      "weekToDate": 0,
      "deltaPct": null,
      "tracked": false,
      "note": "Current GA4 event signal only; not reconciled revenue.",
      "previousWeek": null
    },
    {
      "event": "go_ad_free_purchase",
      "label": "Go ad-free purchase",
      "baseline": null,
      "current": 0,
      "weekToDate": 0,
      "deltaPct": null,
      "tracked": false,
      "note": "Current GA4 event signal only; not reconciled revenue.",
      "previousWeek": null
    },
    {
      "event": "video_purchase",
      "label": "Video purchase",
      "baseline": null,
      "current": 0,
      "weekToDate": 0,
      "deltaPct": null,
      "tracked": false,
      "note": "Current GA4 event signal only; not reconciled revenue.",
      "previousWeek": null
    },
    {
      "event": "collection_purchase",
      "label": "Collection purchase",
      "baseline": null,
      "current": 0,
      "weekToDate": 0,
      "deltaPct": null,
      "tracked": false,
      "note": "Current GA4 event signal only; not reconciled revenue.",
      "previousWeek": null
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
      "activeUsers": 1206,
      "sessions": 3618,
      "screenPageViews": 17890,
      "eventCount": 0,
      "period": "Oct 26-Nov 1, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "platform": "iOS",
      "activeUsers": 699,
      "sessions": 1355,
      "screenPageViews": 5886,
      "eventCount": 0,
      "period": "Oct 26-Nov 1, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "platform": "Android",
      "activeUsers": 610,
      "sessions": 1299,
      "screenPageViews": 5441,
      "eventCount": 0,
      "period": "Oct 26-Nov 1, 2026",
      "source": "Internal GA4 pull, property 497892271"
    }
  ],
  "platformMix": {
    "period": "Oct 26-Nov 1, 2026",
    "metric": "Active users",
    "totalViewers": 2503,
    "note": "GA4 stream active users and separate DotStudios device-view signals for Oct 26-Nov 1. Different metrics; do not add.",
    "groups": [
      {
        "platform": "Web",
        "category": "Web",
        "tracked": true,
        "activeUsers": 479,
        "sharePct": 19.1,
        "sessions": 1164,
        "engagedSessions": 886,
        "detail": "Browser and web playback from the electricnow-web GA4 stream."
      },
      {
        "platform": "Apple app stream",
        "category": "App",
        "tracked": true,
        "activeUsers": 699,
        "sharePct": 27.9,
        "sessions": 1357,
        "engagedSessions": 1079,
        "detail": "iPhone and iPad app activity; Apple TV may also be included here until it is tagged separately."
      },
      {
        "platform": "Android mobile app",
        "category": "App",
        "tracked": true,
        "activeUsers": 468,
        "sharePct": 18.7,
        "sessions": 983,
        "engagedSessions": 754,
        "detail": "Android phone/tablet activity from the ElectricNOW Android GA4 stream."
      },
      {
        "platform": "Roku",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 715,
        "sharePct": 28.6,
        "sessions": 2429,
        "engagedSessions": 2123,
        "detail": "Roku activity from the electricnow-roku GA4 stream."
      },
      {
        "platform": "Android TV / Google TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 142,
        "sharePct": 5.7,
        "sessions": 317,
        "engagedSessions": 291,
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
        "detail": "Fresh DotStudios Oct 26-Nov 1, 2026: 838 firetv views, not GA4 active users.",
        "views": 838,
        "metricLabel": "views",
        "sourceLabel": "DotStudios",
        "sourcePeriod": "Oct 26-Nov 1, 2026",
        "status": "fresh_manual"
      },
      {
        "platform": "Apple TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": null,
        "sharePct": 1.2,
        "sessions": null,
        "engagedSessions": null,
        "detail": "Fresh DotStudios Oct 26-Nov 1, 2026: 120 appletv views, not GA4 active users.",
        "views": 120,
        "metricLabel": "views",
        "sourceLabel": "DotStudios",
        "sourcePeriod": "Oct 26-Nov 1, 2026",
        "status": "fresh_manual"
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
    "period": "Oct 26-Nov 1, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "unifiedPageScreen": "Splash",
        "screenPageViews": 4759,
        "activeUsers": 1908,
        "sessions": 4426,
        "eventCount": 8206,
        "userEngagementDuration": 9052,
        "totalEngagementHours": 2.5144444444444445
      },
      {
        "unifiedPageScreen": "Home Page",
        "screenPageViews": 4459,
        "activeUsers": 1295,
        "sessions": 3206,
        "eventCount": 6741,
        "userEngagementDuration": 54359,
        "totalEngagementHours": 15.099722222222223
      },
      {
        "unifiedPageScreen": "PDP",
        "screenPageViews": 4301,
        "activeUsers": 709,
        "sessions": 1981,
        "eventCount": 6090,
        "userEngagementDuration": 60850,
        "totalEngagementHours": 16.90277777777778
      },
      {
        "unifiedPageScreen": "ElectricNOW",
        "screenPageViews": 3677,
        "activeUsers": 401,
        "sessions": 1043,
        "eventCount": 48323,
        "userEngagementDuration": 729168,
        "totalEngagementHours": 202.54666666666665
      },
      {
        "unifiedPageScreen": "Intro",
        "screenPageViews": 2466,
        "activeUsers": 1100,
        "sessions": 2274,
        "eventCount": 5286,
        "userEngagementDuration": 14047,
        "totalEngagementHours": 3.9019444444444447
      },
      {
        "unifiedPageScreen": "(not set)",
        "screenPageViews": 2435,
        "activeUsers": 2001,
        "sessions": 4859,
        "eventCount": 661905,
        "userEngagementDuration": 8283497,
        "totalEngagementHours": 2300.9713888888887
      },
      {
        "unifiedPageScreen": "Player",
        "screenPageViews": 2211,
        "activeUsers": 276,
        "sessions": 1463,
        "eventCount": 34440,
        "userEngagementDuration": 2350820,
        "totalEngagementHours": 653.0055555555556
      },
      {
        "unifiedPageScreen": "Live",
        "screenPageViews": 1816,
        "activeUsers": 398,
        "sessions": 1754,
        "eventCount": 12710,
        "userEngagementDuration": 4311385,
        "totalEngagementHours": 1197.6069444444445
      },
      {
        "unifiedPageScreen": "Search Channels",
        "screenPageViews": 523,
        "activeUsers": 175,
        "sessions": 326,
        "eventCount": 1482,
        "userEngagementDuration": 7474,
        "totalEngagementHours": 2.076111111111111
      },
      {
        "unifiedPageScreen": "Category",
        "screenPageViews": 377,
        "activeUsers": 136,
        "sessions": 230,
        "eventCount": 525,
        "userEngagementDuration": 4348,
        "totalEngagementHours": 1.2077777777777778
      },
      {
        "unifiedPageScreen": "My List",
        "screenPageViews": 329,
        "activeUsers": 88,
        "sessions": 235,
        "eventCount": 387,
        "userEngagementDuration": 940,
        "totalEngagementHours": 0.2611111111111111
      },
      {
        "unifiedPageScreen": "Settings",
        "screenPageViews": 297,
        "activeUsers": 100,
        "sessions": 142,
        "eventCount": 447,
        "userEngagementDuration": 2671,
        "totalEngagementHours": 0.7419444444444444
      },
      {
        "unifiedPageScreen": "About Us",
        "screenPageViews": 121,
        "activeUsers": 29,
        "sessions": 47,
        "eventCount": 125,
        "userEngagementDuration": 195,
        "totalEngagementHours": 0.05416666666666667
      },
      {
        "unifiedPageScreen": "Search: lib | Spotlight TV",
        "screenPageViews": 104,
        "activeUsers": 1,
        "sessions": 30,
        "eventCount": 4589,
        "userEngagementDuration": 78016,
        "totalEngagementHours": 21.67111111111111
      },
      {
        "unifiedPageScreen": "Spanish Page",
        "screenPageViews": 81,
        "activeUsers": 43,
        "sessions": 58,
        "eventCount": 131,
        "userEngagementDuration": 939,
        "totalEngagementHours": 0.2608333333333333
      },
      {
        "unifiedPageScreen": "The Ark - Season 3 | ElectricNOW",
        "screenPageViews": 75,
        "activeUsers": 26,
        "sessions": 33,
        "eventCount": 91,
        "userEngagementDuration": 1183,
        "totalEngagementHours": 0.32861111111111113
      },
      {
        "unifiedPageScreen": "Search: leverage | Spotlight TV",
        "screenPageViews": 62,
        "activeUsers": 2,
        "sessions": 15,
        "eventCount": 1315,
        "userEngagementDuration": 58930,
        "totalEngagementHours": 16.369444444444444
      },
      {
        "unifiedPageScreen": "My Favorites",
        "screenPageViews": 58,
        "activeUsers": 14,
        "sessions": 17,
        "eventCount": 115,
        "userEngagementDuration": 357,
        "totalEngagementHours": 0.09916666666666667
      },
      {
        "unifiedPageScreen": "Continue Watching",
        "screenPageViews": 56,
        "activeUsers": 36,
        "sessions": 45,
        "eventCount": 90,
        "userEngagementDuration": 385,
        "totalEngagementHours": 0.10694444444444444
      },
      {
        "unifiedPageScreen": "Search: the ark | Spotlight TV",
        "screenPageViews": 55,
        "activeUsers": 5,
        "sessions": 7,
        "eventCount": 380,
        "userEngagementDuration": 10186,
        "totalEngagementHours": 2.8294444444444444
      },
      {
        "unifiedPageScreen": "Search: Leverage | Spotlight TV",
        "screenPageViews": 40,
        "activeUsers": 2,
        "sessions": 7,
        "eventCount": 365,
        "userEngagementDuration": 23683,
        "totalEngagementHours": 6.578611111111111
      },
      {
        "unifiedPageScreen": "Privacy Policy",
        "screenPageViews": 38,
        "activeUsers": 16,
        "sessions": 29,
        "eventCount": 39,
        "userEngagementDuration": 6,
        "totalEngagementHours": 0.0016666666666666668
      },
      {
        "unifiedPageScreen": "Purchases",
        "screenPageViews": 36,
        "activeUsers": 22,
        "sessions": 33,
        "eventCount": 48,
        "userEngagementDuration": 191,
        "totalEngagementHours": 0.05305555555555556
      },
      {
        "unifiedPageScreen": "Search: almost paradise | Spotlight TV",
        "screenPageViews": 36,
        "activeUsers": 1,
        "sessions": 7,
        "eventCount": 572,
        "userEngagementDuration": 2235,
        "totalEngagementHours": 0.6208333333333333
      },
      {
        "unifiedPageScreen": "Terms of use",
        "screenPageViews": 35,
        "activeUsers": 13,
        "sessions": 26,
        "eventCount": 35,
        "userEngagementDuration": 0,
        "totalEngagementHours": 0.0
      },
      {
        "unifiedPageScreen": "Search | Spotlight TV",
        "screenPageViews": 32,
        "activeUsers": 8,
        "sessions": 9,
        "eventCount": 61,
        "userEngagementDuration": 424,
        "totalEngagementHours": 0.11777777777777777
      },
      {
        "unifiedPageScreen": "Connect with us",
        "screenPageViews": 29,
        "activeUsers": 13,
        "sessions": 25,
        "eventCount": 29,
        "userEngagementDuration": 0,
        "totalEngagementHours": 0.0
      },
      {
        "unifiedPageScreen": "About ElectricNOW - Free Streaming Platform Built with AI",
        "screenPageViews": 27,
        "activeUsers": 4,
        "sessions": 5,
        "eventCount": 75,
        "userEngagementDuration": 663,
        "totalEngagementHours": 0.18416666666666667
      },
      {
        "unifiedPageScreen": "Manage Profile",
        "screenPageViews": 27,
        "activeUsers": 20,
        "sessions": 20,
        "eventCount": 40,
        "userEngagementDuration": 220,
        "totalEngagementHours": 0.06111111111111111
      },
      {
        "unifiedPageScreen": "The Ark | ElectricNOW",
        "screenPageViews": 27,
        "activeUsers": 11,
        "sessions": 16,
        "eventCount": 34,
        "userEngagementDuration": 333,
        "totalEngagementHours": 0.0925
      },
      {
        "unifiedPageScreen": "Leverage | ElectricNOW",
        "screenPageViews": 24,
        "activeUsers": 15,
        "sessions": 16,
        "eventCount": 26,
        "userEngagementDuration": 2025,
        "totalEngagementHours": 0.5625
      },
      {
        "unifiedPageScreen": "The Librarians (Full Series) | ElectricNOW",
        "screenPageViews": 24,
        "activeUsers": 2,
        "sessions": 19,
        "eventCount": 29,
        "userEngagementDuration": 155,
        "totalEngagementHours": 0.043055555555555555
      },
      {
        "unifiedPageScreen": "The Librarians: The Next Chapter Season 2 | ElectricNOW",
        "screenPageViews": 22,
        "activeUsers": 11,
        "sessions": 19,
        "eventCount": 29,
        "userEngagementDuration": 799,
        "totalEngagementHours": 0.22194444444444444
      },
      {
        "unifiedPageScreen": "My Reactions",
        "screenPageViews": 20,
        "activeUsers": 11,
        "sessions": 19,
        "eventCount": 25,
        "userEngagementDuration": 40,
        "totalEngagementHours": 0.011111111111111112
      },
      {
        "unifiedPageScreen": "Search: t | Spotlight TV",
        "screenPageViews": 20,
        "activeUsers": 4,
        "sessions": 6,
        "eventCount": 355,
        "userEngagementDuration": 13900,
        "totalEngagementHours": 3.861111111111111
      },
      {
        "unifiedPageScreen": "Search: the librarians | Spotlight TV",
        "screenPageViews": 20,
        "activeUsers": 3,
        "sessions": 5,
        "eventCount": 113,
        "userEngagementDuration": 2873,
        "totalEngagementHours": 0.7980555555555555
      },
      {
        "unifiedPageScreen": "Leverage: Redemption - Season 3 | ElectricNOW",
        "screenPageViews": 17,
        "activeUsers": 2,
        "sessions": 15,
        "eventCount": 17,
        "userEngagementDuration": 262,
        "totalEngagementHours": 0.07277777777777777
      },
      {
        "unifiedPageScreen": "Connect with Us",
        "screenPageViews": 16,
        "activeUsers": 10,
        "sessions": 12,
        "eventCount": 28,
        "userEngagementDuration": 105,
        "totalEngagementHours": 0.029166666666666667
      },
      {
        "unifiedPageScreen": "Search: medevil | Spotlight TV",
        "screenPageViews": 16,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 353,
        "userEngagementDuration": 15158,
        "totalEngagementHours": 4.210555555555556
      },
      {
        "unifiedPageScreen": "Electric Now",
        "screenPageViews": 15,
        "activeUsers": 2,
        "sessions": 5,
        "eventCount": 141,
        "userEngagementDuration": 15738,
        "totalEngagementHours": 4.371666666666667
      },
      {
        "unifiedPageScreen": "The Messenger | ElectricNOW",
        "screenPageViews": 15,
        "activeUsers": 2,
        "sessions": 3,
        "eventCount": 15,
        "userEngagementDuration": 1011,
        "totalEngagementHours": 0.2808333333333333
      },
      {
        "unifiedPageScreen": "Almost Paradise (Season 1 & 2) | ElectricNOW",
        "screenPageViews": 14,
        "activeUsers": 4,
        "sessions": 8,
        "eventCount": 21,
        "userEngagementDuration": 165,
        "totalEngagementHours": 0.04583333333333333
      },
      {
        "unifiedPageScreen": "Search: libra | Spotlight TV",
        "screenPageViews": 14,
        "activeUsers": 0,
        "sessions": 4,
        "eventCount": 214,
        "userEngagementDuration": 20242,
        "totalEngagementHours": 5.622777777777777
      },
      {
        "unifiedPageScreen": "Search: the librarians: the next chapter | Spotlight TV",
        "screenPageViews": 10,
        "activeUsers": 0,
        "sessions": 3,
        "eventCount": 174,
        "userEngagementDuration": 11063,
        "totalEngagementHours": 3.0730555555555554
      },
      {
        "unifiedPageScreen": "The Librarians: The Next Chapter (Season 1) | ElectricNOW",
        "screenPageViews": 10,
        "activeUsers": 3,
        "sessions": 9,
        "eventCount": 10,
        "userEngagementDuration": 458,
        "totalEngagementHours": 0.1272222222222222
      },
      {
        "unifiedPageScreen": "Search: Lib | Spotlight TV",
        "screenPageViews": 9,
        "activeUsers": 0,
        "sessions": 1,
        "eventCount": 34,
        "userEngagementDuration": 45,
        "totalEngagementHours": 0.0125
      },
      {
        "unifiedPageScreen": "After the Ark | ElectricNOW",
        "screenPageViews": 8,
        "activeUsers": 4,
        "sessions": 5,
        "eventCount": 16,
        "userEngagementDuration": 186,
        "totalEngagementHours": 0.051666666666666666
      },
      {
        "unifiedPageScreen": "On Demand",
        "screenPageViews": 8,
        "activeUsers": 4,
        "sessions": 8,
        "eventCount": 14,
        "userEngagementDuration": 47,
        "totalEngagementHours": 0.013055555555555556
      },
      {
        "unifiedPageScreen": "Search: lev | Spotlight TV",
        "screenPageViews": 8,
        "activeUsers": 1,
        "sessions": 4,
        "eventCount": 151,
        "userEngagementDuration": 5613,
        "totalEngagementHours": 1.5591666666666666
      },
      {
        "unifiedPageScreen": "Search: S | Spotlight TV",
        "screenPageViews": 7,
        "activeUsers": 2,
        "sessions": 2,
        "eventCount": 9,
        "userEngagementDuration": 326,
        "totalEngagementHours": 0.09055555555555556
      },
      {
        "unifiedPageScreen": "Search: T | Spotlight TV",
        "screenPageViews": 7,
        "activeUsers": 2,
        "sessions": 2,
        "eventCount": 17,
        "userEngagementDuration": 250,
        "totalEngagementHours": 0.06944444444444445
      },
      {
        "unifiedPageScreen": "Search: The Ark Season 3 | Spotlight TV",
        "screenPageViews": 7,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 32,
        "userEngagementDuration": 208,
        "totalEngagementHours": 0.057777777777777775
      },
      {
        "unifiedPageScreen": "Search: levera | Spotlight TV",
        "screenPageViews": 7,
        "activeUsers": 0,
        "sessions": 1,
        "eventCount": 97,
        "userEngagementDuration": 4453,
        "totalEngagementHours": 1.2369444444444444
      },
      {
        "unifiedPageScreen": "Search: librarians | Spotlight TV",
        "screenPageViews": 7,
        "activeUsers": 0,
        "sessions": 1,
        "eventCount": 32,
        "userEngagementDuration": 372,
        "totalEngagementHours": 0.10333333333333333
      },
      {
        "unifiedPageScreen": "Search: L | Spotlight TV",
        "screenPageViews": 6,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 128,
        "userEngagementDuration": 5769,
        "totalEngagementHours": 1.6025
      },
      {
        "unifiedPageScreen": "Search: The ark | Spotlight TV",
        "screenPageViews": 6,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 33,
        "userEngagementDuration": 820,
        "totalEngagementHours": 0.22777777777777777
      },
      {
        "unifiedPageScreen": "Update Delete Profile",
        "screenPageViews": 6,
        "activeUsers": 5,
        "sessions": 5,
        "eventCount": 10,
        "userEngagementDuration": 120,
        "totalEngagementHours": 0.03333333333333333
      },
      {
        "unifiedPageScreen": "After the Ark Season 3 - Clones | ElectricNOW",
        "screenPageViews": 5,
        "activeUsers": 2,
        "sessions": 2,
        "eventCount": 7,
        "userEngagementDuration": 340,
        "totalEngagementHours": 0.09444444444444444
      },
      {
        "unifiedPageScreen": "Checking Out - Season Two: Lysa | ElectricNOW",
        "screenPageViews": 5,
        "activeUsers": 4,
        "sessions": 6,
        "eventCount": 22,
        "userEngagementDuration": 14,
        "totalEngagementHours": 0.0038888888888888888
      },
      {
        "unifiedPageScreen": "Checking Out - Season Two: Rapid Fire | ElectricNOW",
        "screenPageViews": 5,
        "activeUsers": 4,
        "sessions": 4,
        "eventCount": 17,
        "userEngagementDuration": 32,
        "totalEngagementHours": 0.008888888888888889
      },
      {
        "unifiedPageScreen": "Checking Out - Season Two: Vikram | ElectricNOW",
        "screenPageViews": 5,
        "activeUsers": 4,
        "sessions": 5,
        "eventCount": 19,
        "userEngagementDuration": 27,
        "totalEngagementHours": 0.0075
      },
      {
        "unifiedPageScreen": "Search: The mess | Spotlight TV",
        "screenPageViews": 5,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 25,
        "userEngagementDuration": 44,
        "totalEngagementHours": 0.012222222222222223
      },
      {
        "unifiedPageScreen": "Search: con | Spotlight TV",
        "screenPageViews": 5,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 21,
        "userEngagementDuration": 65,
        "totalEngagementHours": 0.018055555555555554
      },
      {
        "unifiedPageScreen": "Terms of Use",
        "screenPageViews": 5,
        "activeUsers": 5,
        "sessions": 5,
        "eventCount": 7,
        "userEngagementDuration": 68,
        "totalEngagementHours": 0.01888888888888889
      },
      {
        "unifiedPageScreen": "Bad Samaritan | ElectricNOW",
        "screenPageViews": 4,
        "activeUsers": 3,
        "sessions": 3,
        "eventCount": 4,
        "userEngagementDuration": 399,
        "totalEngagementHours": 0.11083333333333334
      },
      {
        "unifiedPageScreen": "Checking Out - Season Two: Charlie | ElectricNOW",
        "screenPageViews": 4,
        "activeUsers": 4,
        "sessions": 4,
        "eventCount": 18,
        "userEngagementDuration": 14,
        "totalEngagementHours": 0.0038888888888888888
      },
      {
        "unifiedPageScreen": "Checking Out - Season Two: Connor | ElectricNOW",
        "screenPageViews": 4,
        "activeUsers": 4,
        "sessions": 4,
        "eventCount": 20,
        "userEngagementDuration": 17,
        "totalEngagementHours": 0.004722222222222222
      },
      {
        "unifiedPageScreen": "My Wife | ElectricNOW",
        "screenPageViews": 4,
        "activeUsers": 3,
        "sessions": 3,
        "eventCount": 12,
        "userEngagementDuration": 16,
        "totalEngagementHours": 0.0044444444444444444
      },
      {
        "unifiedPageScreen": "Search: Lev | Spotlight TV",
        "screenPageViews": 4,
        "activeUsers": 0,
        "sessions": 2,
        "eventCount": 146,
        "userEngagementDuration": 6153,
        "totalEngagementHours": 1.7091666666666667
      },
      {
        "unifiedPageScreen": "Search: The | Spotlight TV",
        "screenPageViews": 4,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 4,
        "userEngagementDuration": 8,
        "totalEngagementHours": 0.0022222222222222222
      },
      {
        "unifiedPageScreen": "Search: conan | Spotlight TV",
        "screenPageViews": 4,
        "activeUsers": 2,
        "sessions": 2,
        "eventCount": 27,
        "userEngagementDuration": 28,
        "totalEngagementHours": 0.0077777777777777776
      },
      {
        "unifiedPageScreen": "Search: l | Spotlight TV",
        "screenPageViews": 4,
        "activeUsers": 2,
        "sessions": 4,
        "eventCount": 5,
        "userEngagementDuration": 57,
        "totalEngagementHours": 0.015833333333333335
      },
      {
        "unifiedPageScreen": "Somewhere in Montana | ElectricNOW",
        "screenPageViews": 4,
        "activeUsers": 2,
        "sessions": 2,
        "eventCount": 4,
        "userEngagementDuration": 38,
        "totalEngagementHours": 0.010555555555555556
      },
      {
        "unifiedPageScreen": "The Librarians: The Next Chapter Season 2 Teaser | ElectricNOW",
        "screenPageViews": 4,
        "activeUsers": 3,
        "sessions": 4,
        "eventCount": 4,
        "userEngagementDuration": 32,
        "totalEngagementHours": 0.008888888888888889
      },
      {
        "unifiedPageScreen": "After the Ark Season 3 - Outsiders Coming In | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 3,
        "userEngagementDuration": 13,
        "totalEngagementHours": 0.003611111111111111
      },
      {
        "unifiedPageScreen": "Checking Out - Season Two: Peter Pan | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 3,
        "sessions": 3,
        "eventCount": 13,
        "userEngagementDuration": 7,
        "totalEngagementHours": 0.0019444444444444444
      },
      {
        "unifiedPageScreen": "Checking Out - Season Two: Production Design BTS | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 3,
        "sessions": 3,
        "eventCount": 15,
        "userEngagementDuration": 13,
        "totalEngagementHours": 0.003611111111111111
      },
      {
        "unifiedPageScreen": "Children of the Night | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 3,
        "userEngagementDuration": 7,
        "totalEngagementHours": 0.0019444444444444444
      },
      {
        "unifiedPageScreen": "Found in Time | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 3,
        "userEngagementDuration": 83,
        "totalEngagementHours": 0.023055555555555555
      },
      {
        "unifiedPageScreen": "Next Episode | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 2,
        "sessions": 3,
        "eventCount": 3,
        "userEngagementDuration": 68,
        "totalEngagementHours": 0.01888888888888889
      },
      {
        "unifiedPageScreen": "Search: W | Spotlight TV",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 3,
        "userEngagementDuration": 10,
        "totalEngagementHours": 0.002777777777777778
      },
      {
        "unifiedPageScreen": "Search: the li | Spotlight TV",
        "screenPageViews": 3,
        "activeUsers": 0,
        "sessions": 1,
        "eventCount": 53,
        "userEngagementDuration": 44,
        "totalEngagementHours": 0.012222222222222223
      },
      {
        "unifiedPageScreen": "Search: the libra | Spotlight TV",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 9,
        "userEngagementDuration": 7,
        "totalEngagementHours": 0.0019444444444444444
      },
      {
        "unifiedPageScreen": "Search: the | Spotlight TV",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 3,
        "userEngagementDuration": 6,
        "totalEngagementHours": 0.0016666666666666668
      },
      {
        "unifiedPageScreen": "The Ark Season 3 Premieres July 29 on SyFy | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 2,
        "sessions": 2,
        "eventCount": 3,
        "userEngagementDuration": 24,
        "totalEngagementHours": 0.006666666666666667
      },
      {
        "unifiedPageScreen": "The Book of Love | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 2,
        "sessions": 2,
        "eventCount": 3,
        "userEngagementDuration": 156,
        "totalEngagementHours": 0.043333333333333335
      },
      {
        "unifiedPageScreen": "The Carnival Job | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 3,
        "userEngagementDuration": 38,
        "totalEngagementHours": 0.010555555555555556
      },
      {
        "unifiedPageScreen": "The Deal | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 0,
        "sessions": 1,
        "eventCount": 3,
        "userEngagementDuration": 22,
        "totalEngagementHours": 0.006111111111111111
      },
      {
        "unifiedPageScreen": "The Librarians: The Next Chapter Season 2 Aug 2nd on TNT | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 2,
        "eventCount": 3,
        "userEngagementDuration": 25,
        "totalEngagementHours": 0.006944444444444444
      },
      {
        "unifiedPageScreen": "The Office Job | ElectricNOW",
        "screenPageViews": 3,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 3,
        "userEngagementDuration": 356,
        "totalEngagementHours": 0.09888888888888889
      },
      {
        "unifiedPageScreen": "After the Ark Season 3 - Eastern Federation | ElectricNOW",
        "screenPageViews": 2,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 2,
        "userEngagementDuration": 7,
        "totalEngagementHours": 0.0019444444444444444
      },
      {
        "unifiedPageScreen": "After the Ark Season 3 - Romance | ElectricNOW",
        "screenPageViews": 2,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 2,
        "userEngagementDuration": 28,
        "totalEngagementHours": 0.0077777777777777776
      },
      {
        "unifiedPageScreen": "Alone | ElectricNOW",
        "screenPageViews": 2,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 2,
        "userEngagementDuration": 28,
        "totalEngagementHours": 0.0077777777777777776
      },
      {
        "unifiedPageScreen": "Apalancamiento | ElectricNOW",
        "screenPageViews": 2,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 2,
        "userEngagementDuration": 7,
        "totalEngagementHours": 0.0019444444444444444
      },
      {
        "unifiedPageScreen": "Apalancamiento: Redención | ElectricNOW",
        "screenPageViews": 2,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 2,
        "userEngagementDuration": 56,
        "totalEngagementHours": 0.015555555555555555
      },
      {
        "unifiedPageScreen": "Bonded In Blood | ElectricNOW",
        "screenPageViews": 2,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 2,
        "userEngagementDuration": 19,
        "totalEngagementHours": 0.005277777777777778
      },
      {
        "unifiedPageScreen": "Checking Out - Season Two: Merlin | ElectricNOW",
        "screenPageViews": 2,
        "activeUsers": 2,
        "sessions": 2,
        "eventCount": 8,
        "userEngagementDuration": 0,
        "totalEngagementHours": 0.0
      },
      {
        "unifiedPageScreen": "Middle Man | ElectricNOW",
        "screenPageViews": 2,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 2,
        "userEngagementDuration": 82,
        "totalEngagementHours": 0.02277777777777778
      },
      {
        "unifiedPageScreen": "Paradise Found | ElectricNOW",
        "screenPageViews": 2,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 2,
        "userEngagementDuration": 113,
        "totalEngagementHours": 0.03138888888888889
      },
      {
        "unifiedPageScreen": "Scream at the Devil | ElectricNOW",
        "screenPageViews": 2,
        "activeUsers": 1,
        "sessions": 1,
        "eventCount": 2,
        "userEngagementDuration": 79,
        "totalEngagementHours": 0.021944444444444444
      }
    ]
  },
  "liveTv": {
    "baseline": {
      "activeUsers": 129.0,
      "sessions": 1252.0,
      "engagedSessions": 1235.0,
      "screenPageViews": 2398.0,
      "eventCount": 16337.0,
      "userEngagementDuration": 3757945.0
    },
    "current": {
      "activeUsers": 398,
      "sessions": 1754,
      "engagedSessions": 1635,
      "screenPageViews": 1816,
      "eventCount": 12710
    },
    "deltas": {
      "activeUsers": -0.5,
      "sessions": 6.561360874848117,
      "engagedSessions": 6.723237597911227,
      "screenPageViews": 10.529519172245893,
      "eventCount": 7.085685398938411
    },
    "engagementRateBaseline": 98.64217252396166,
    "engagementRateCurrent": 93.21550741163055,
    "weekToDate": {
      "activeUsers": 398,
      "sessions": 1754,
      "engagedSessions": 1635,
      "screenPageViews": 1816,
      "eventCount": 12710
    },
    "engagementRateWeekToDate": 93.21550741163055,
    "period": "Oct 26-Nov 1, 2026",
    "baselinePeriod": "Apr 13-Apr 19, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "definition": "GA4 unifiedScreenName = 'Live' (the Live TV section of the app).",
    "previousWeek": {
      "activeUsers": 400,
      "sessions": 1646,
      "engagedSessions": 1532,
      "screenPageViews": 1643,
      "eventCount": 11869
    },
    "previousPeriod": "Oct 19-Oct 25, 2026",
    "previousDeltas": {
      "activeUsers": -0.5,
      "sessions": 6.561360874848117,
      "engagedSessions": 6.723237597911227,
      "screenPageViews": 10.529519172245893,
      "eventCount": 7.085685398938411
    },
    "launchDeltas": {
      "activeUsers": 210.07751937984497,
      "sessions": 31.869009584664536,
      "engagedSessions": 24.048582995951417,
      "screenPageViews": -31.48457047539616,
      "eventCount": -27.35508355267185
    },
    "deltasBasis": "vs previous 7 days (Oct 19-Oct 25, 2026); launch comparison in launchDeltas",
    "deltasLabel": "vs previous 7 days"
  },
  "plainEnglishInsights": [
    "Ad income and viewing depth improved: Ionic gross ad-partner revenue rose 80.3% to $121.05 (Oct 26-Nov 1), its best week since Jul 6-12, as revenue per 1,000 ad impressions rose from $2.00 to $3.18, but it is still only about 22% of the June-early July average of $555.50 per week. Roku viewers averaged 90.69 minutes each (+9.5% vs 82.85), the GA4 engagement rate rose to 83.57% from 81.32%, new users rose +10.4% to 628, and YouTube reached 65,100 subscribers. Reach was slightly lower: platform users -1.9% to 2,487, sessions -3.9% to 6,167, and video-start users -3.9% to 836. Sales fell sharply: DotStudios TVOD fell 60.0% to $125.94 (6 Season Passes), Roku had no sales and Apple showed $0.00; Stripe could not be pulled because its connector is disconnected, so visible platform sales are incomplete this week. Cumulative DotStudios net sales now total $18,773.49 (Mar 25-Nov 1).",
    "Internal GA4 pull, property 497892271: 2,487 platform users, 6,167 sessions, 4,479.4 engaged hours (-4.6%); engagement rate 83.57% versus 81.32% prior. By platform: web 1,206 users / 3,618 sessions, iOS 699 / 1,355, Android 610 / 1,299 (platform users overlap; do not add). The re-pulled prior week (2,535 users, 6,418 sessions) is within 1% of what was published on Oct 27 (2,535 users, 6,453 sessions), so no revision above 5% needs disclosure. Landing-page traffic is excluded from the headline and counts as acquisition only.",
    "Viewing: 836 video-start users versus 870; on-demand starters 558 versus 554; live channel viewers 371 versus 377; live play events 5,568 versus 5,044; video-complete users 192 versus 187. Groups overlap; do not add. Live/FAST names excluded from on-demand lists.",
    "Verdict: acceptable but needs proof of viewing; historical Roku costs were concerning. (1) Paid ads are not shown to be growing the platform: Google Ads reported zero delivery (0 impressions, $0 spend) for Oct 26-Nov 1, the third straight week, and no fresh Meta delivery report exists, so this week's users (-1.9%) and flat DotStudios installs (486) are organic or unattributed. (2) Current acquisition costs cannot be judged: there was no measurable paid spend this week, Meta reporting is stale (last flight Aug 4-26, $11,667.32 for 1,032 downloads, $11.31 per download, which is acceptable for an install if those users watch), and historical Roku best cost per install above $60 was too expensive. (3) No fresh campaign, platform, age, gender or device breakdown shows targeting narrowing. (4) Meta remains the more promising limited test per Nathan, not a verified current winner over Google; no Meta-only report has arrived since Oct 5. (5) Paid spend cannot be tied to this week's sales or viewing; true ROAS cannot be stated without reconciled ad-server revenue and complete sales coverage. Paid-campaign impressions (0 on Google this week) are separate from in-app ad impressions (19,996 DotStudios-reported) and Ionic ad impressions (38,057). (6) Tests: confirm Roku pause and Meta status; plan the $5k Roku ad credit as a measured test; separate iOS/Android and retargeting; test show-led creative; optimize first play and seven-day return; exclude weak-viewing segments.",
    "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
    "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded.",
    "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
    "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
    "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
    "Visible platform sales are incomplete this week: Roku $0.00 + Apple $0.00 (Oct 25-Oct 31 window), and Stripe could not be pulled (connector disconnected; last week Stripe was $133.94). No visible total or week-over-week change is shown. DotStudios shows 5 web purchases / $104.95 that Stripe would normally confirm. Visible platform sales are never total ElectricNOW sales (Google Play/Android, $20.99 in DotStudios, is missing). Never add overlapping DotStudios $125.94.",
    "DotStudios: 486 installs (flat vs 486; Android 85, web 283, iOS 118), 297 updates (-6.6% vs 318), 10,108 reported views (-6.2% vs 10,774); TV devices were 53.7% of views versus 55.3%. In-app ad delivery: 24,798 requests (-28.7% vs 34,786), 19,996 impressions (-11.2% vs 22,514), 2,611 errors (-46.1% vs 4,841); fill 80.6% versus 64.7%. Vendor in-app ad counts are a delivery cross-check, not paid-campaign impressions or verified ad revenue.",
    "Ionic ad revenue rose 80% to $121.05 for Oct 26–Nov 1, with revenue per 1,000 ad impressions up from $2.00 to $3.18. Both drove it: more ads were served (impressions +13.2%) and each ad earned more. It is the highest Ionic week since Jul 6–12, 2026, when revenue was $607.63. This is still about 22% of the June–early July average of $555.50 per week; revenue has not recovered from the July–August drop. Ionic is gross ad-partner revenue (not net and not ROAS); its impressions are counted separately from DotStudios in-app impressions and are never added to them.",
    "Cumulative sales: DotStudios exported net sales: $30,515.70 in 1,707 charge rows less $11,727.22 in 797 adjustment rows and $14.99 in one refund = $18,773.49. Export transaction dates: Mar 25-Nov 1, 2026 (full ledger through Oct 4 plus the Oct 5-11, Oct 12-18, Oct 19-25 and Oct 26-Nov 1 weekly exports). January 1-March 24 coverage is not established by this file. Charges are not unique buyers or net retained revenue; never add Stripe, Apple or Roku, which overlap.",
    "Fresh partial YouTube: Oct 26 through Oct 31, 6 available days; matched against Oct 19 through Oct 24. Not added to app sales or in-app ad delivery. YouTube views fell 1.9% like-for-like (189,723 versus 193,314 over six matched days); net subscribers +120.",
    "TVOD interpretation: all 6 purchases were $20.99 Season Passes (The Ark Season 3: 3; The Librarians: The Next Chapter Season 2: 3), down from 15. Sales still depend on two current seasons, and season passes bring revenue forward because owners need not repurchase each episode.",
    "Next actions: Patrick and Nathan: confirm Roku pause/Meta status, supply fresh Meta-only campaign, age, gender and platform reports, and share the plan and tracking for the $5k Roku ad credit before it is spent. Patrick: Google Ads delivered nothing for a third week; confirm whether the enabled Android app campaign should stay idle or be relaunched as a measured test. Emma, Sydney, Christina and Breanna: compare Ark-led and Librarians-led creative with the app sizzle, using distinct tags. Michael: ask Ionic on Wednesday what drove the higher revenue per 1,000 impressions and whether it can hold, and explain the drop in DotStudios ad requests. Team: reconnect Stripe so web sales can be confirmed, assess TVOD by release stage and eligible non-owners, and add Google Play sales to visible coverage."
  ],
  "instrumentationGaps": [
    "No separate GA4 event found for go_ad_free_click yet.",
    "No separate GA4 event found for video_purchase yet.",
    "No separate GA4 event found for collection_purchase yet.",
    "Stripe is now one visible sales source in the dashboard; total sales still require Apple App Store and Google Play reporting, and GA4 purchase events still need to be split into go-ad-free, individual video, and collection purchase actions.",
    "Live TV should be reconciled with Amagi and ad-server reporting."
  ],
  "salesSummary": {
    "sourceLabel": "Visible platform sales: mixed source dates",
    "sourceDetail": "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97. Visible platform sales are incomplete this week: Roku $0.00 + Apple $0.00 (Oct 25-Oct 31 window), and Stripe could not be pulled (connector disconnected; last week Stripe was $133.94). No visible total or week-over-week change is shown. DotStudios shows 5 web purchases / $104.95 that Stripe would normally confirm. Visible platform sales are never total ElectricNOW sales (Google Play/Android, $20.99 in DotStudios, is missing). Never add overlapping DotStudios $125.94.",
    "stripe": {
      "status": "stale_preserved_no_fresh_pull",
      "sourceLabel": "Stripe connector source check",
      "sourceDetail": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "note": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "connectorStatus": "DISCONNECTED",
      "currentWeek": {
        "transactions": 7,
        "gross": 133.94,
        "net": 133.94,
        "period": "Oct 19-Oct 25, 2026"
      },
      "priorWeek": {
        "transactions": 3,
        "gross": 62.97,
        "net": 62.97,
        "period": "Oct 12-Oct 18, 2026"
      },
      "latestSevenDay": {
        "label": "Stripe successful charges",
        "range": "Oct 19-Oct 25, 2026",
        "purchases": 7,
        "purchaseRevenue": 133.94,
        "developerRevShare": 133.94,
        "note": "STALE, last successful Stripe pull (connector disconnected Nov 2), Oct 19-Oct 25, 2026: 7 successful charges / $133.94, 6 Season Pass charges plus 1 $8.00 subscription update; 0 failed attempts. Prior week: 3 / $62.97. Refunds $0.00; before processing fees. DotStudios web shows 5 / $104.95 because DotStudios dates are UTC: Stripe's Oct 25 6:32 PM PT Season Pass falls on Oct 26 UTC, and the $8.00 subscription update is not a TVOD purchase."
      },
      "staleNote": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "attemptedPeriod": "Oct 26-Nov 1, 2026"
    },
    "roku": {
      "sourceLabel": "Roku-visible sales",
      "sourceDetail": "Roku-visible sales come from the latest emailed Roku Sales Activity Report. The November 2, 2026 at 7:07 AM PST email was processed and Oct 26-Nov 1, 2026 Roku-only rows are shown as a source check, not added to DotStudios totals.",
      "reportEmailDate": "2026-11-02T15:07:47+00:00",
      "reportGenerated": "November 2, 2026 at 7:07 AM PST",
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
      "recentPayments": [],
      "dailyTrend": [],
      "note": "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded.",
      "dataFreshnessNote": "Fresh: Roku Sales Activity email (November 2, 2026 at 7:07 AM PST) parsed for Oct 26-Nov 1, 2026.",
      "currentWeek": {
        "label": "Roku sales latest seven days",
        "range": "Oct 26-Nov 1, 2026",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0,
        "revenuePerPurchase": 0,
        "status": "fresh",
        "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals.",
        "payments": []
      },
      "latestSevenDay": {
        "label": "Roku sales latest seven days",
        "range": "Oct 26-Nov 1, 2026",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0,
        "revenuePerPurchase": 0,
        "status": "fresh",
        "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals.",
        "payments": []
      },
      "status": "fresh",
      "dailyTrendNote": "Roku daily rows run through Aug 3, 2026, then resume 2026-08-31 from the Roku Sales Activity reports processed Sep 7 and Sep 14, 2026 and run through Sep 13 (Sep 12-13 had no Roku transactions, confirmed against the DotStudios export). Aug 4-30 was not in a processed report and is omitted rather than shown as zero."
    },
    "apple": {
      "sourceLabel": "Apple App Store manual sales/download snapshot",
      "sourceDetail": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
      "snapshotRange": "Sep 14-Sep 20, 2026",
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
        "range": "Oct 19-Oct 25, 2026",
        "period": "Oct 19-Oct 25, 2026",
        "purchases": null,
        "purchaseRevenue": 104.95,
        "downloads": 59,
        "totalUnits": 64,
        "inAppUnits": 5,
        "note": "Prior-week Apple comparison."
      },
      "latestSnapshot": {
        "label": "Apple App Store Connect: sales (Oct 25-Oct 31 window)",
        "range": "Oct 26-Nov 1, 2026",
        "period": "Oct 26-Nov 1, 2026",
        "applePeriod": "Oct 25-Oct 31, 2026",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": null,
        "downloads": 47,
        "freeDownloads": 47,
        "totalUnits": null,
        "inAppUnits": null,
        "status": "fresh_manual",
        "note": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
        "salesGeography": "Apple Sales view"
      },
      "dailyTrend": [
        {
          "date": "2026-10-25",
          "rawDate": "20261025",
          "purchaseRevenue": 0.0,
          "salesGross": 0.0
        },
        {
          "date": "2026-10-26",
          "rawDate": "20261026",
          "purchaseRevenue": 0.0,
          "salesGross": 0.0
        },
        {
          "date": "2026-10-27",
          "rawDate": "20261027",
          "purchaseRevenue": 0.0,
          "salesGross": 0.0
        },
        {
          "date": "2026-10-28",
          "rawDate": "20261028",
          "purchaseRevenue": 0.0,
          "salesGross": 0.0
        },
        {
          "date": "2026-10-29",
          "rawDate": "20261029",
          "purchaseRevenue": 0.0,
          "salesGross": 0.0
        },
        {
          "date": "2026-10-30",
          "rawDate": "20261030",
          "purchaseRevenue": 0.0,
          "salesGross": 0.0
        },
        {
          "date": "2026-10-31",
          "rawDate": "20261031",
          "purchaseRevenue": 0.0,
          "salesGross": 0.0
        }
      ],
      "latestSevenDay": {
        "label": "Apple App Store Connect: sales (Oct 25-Oct 31 window)",
        "range": "Oct 26-Nov 1, 2026",
        "period": "Oct 26-Nov 1, 2026",
        "applePeriod": "Oct 25-Oct 31, 2026",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": null,
        "downloads": 47,
        "freeDownloads": 47,
        "totalUnits": null,
        "inAppUnits": null,
        "status": "fresh_manual",
        "note": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
        "salesGeography": "Apple Sales view"
      },
      "currentWeek": {
        "label": "Apple App Store Connect: sales (Oct 25-Oct 31 window)",
        "range": "Oct 26-Nov 1, 2026",
        "period": "Oct 26-Nov 1, 2026",
        "applePeriod": "Oct 25-Oct 31, 2026",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": null,
        "downloads": 47,
        "freeDownloads": 47,
        "totalUnits": null,
        "inAppUnits": null,
        "status": "fresh_manual",
        "note": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
        "salesGeography": "Apple Sales view"
      },
      "weekToDate": {
        "label": "Apple App Store Connect: sales (Oct 25-Oct 31 window)",
        "range": "Oct 26-Nov 1, 2026",
        "period": "Oct 26-Nov 1, 2026",
        "applePeriod": "Oct 25-Oct 31, 2026",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": null,
        "downloads": 47,
        "freeDownloads": 47,
        "totalUnits": null,
        "inAppUnits": null,
        "status": "fresh_manual",
        "note": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
        "salesGeography": "Apple Sales view"
      },
      "deltas": {
        "salesGrossPct": -100.0,
        "unitsPct": null,
        "freeDownloadsPct": -20.33898305084746,
        "inAppUnitsPct": null,
        "comparisonPeriod": "Oct 19-Oct 25, 2026"
      },
      "period": "Oct 26-Nov 1, 2026",
      "dailyTrendNote": "Apple sales were $0.00 on every day of Oct 25-Oct 31; daily downloads not provided.",
      "lastWorldwideSnapshot": {
        "period": "Sep 14-Sep 20, 2026",
        "purchaseRevenue": 350.48,
        "status": "stale_historical_context",
        "note": "Worldwide current week not supplied."
      },
      "status": "fresh_manual",
      "note": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00)."
    },
    "sourceBreakout": [
      {
        "source": "Stripe",
        "purchases": 7,
        "purchaseRevenue": 133.94,
        "developerRevShare": 133.94,
        "detail": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
        "status": "stale_preserved_no_fresh_pull",
        "note": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
        "sourceDetail": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
        "countLabel": "charges (6 Season Passes + 1 $8.00 update)",
        "staleNote": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
        "attemptedPeriod": "Oct 26-Nov 1, 2026"
      },
      {
        "source": "Roku",
        "purchases": 0,
        "purchaseRevenue": 0.0,
        "developerRevShare": 0.0,
        "detail": "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded.",
        "status": "fresh"
      },
      {
        "rowId": "ytd-visible-platform-sales",
        "source": "Sales year to date: DotStudios exported net",
        "purchases": 1707,
        "countLabel": "charge rows before adjustments/refund",
        "purchaseRevenue": 18773.49,
        "detail": "DotStudios exported net sales: $30,515.70 in 1,707 charge rows less $11,727.22 in 797 adjustment rows and $14.99 in one refund = $18,773.49. Export transaction dates: Mar 25-Nov 1, 2026 (full ledger through Oct 4 plus the Oct 5-11, Oct 12-18, Oct 19-25 and Oct 26-Nov 1 weekly exports). January 1-March 24 coverage is not established by this file. Charges are not unique buyers or net retained revenue; never add Stripe, Apple or Roku, which overlap.",
        "status": "fresh_manual_export_coverage",
        "range": "Export: Mar 25-Nov 1, 2026"
      },
      {
        "rowId": "current-visible-partial",
        "source": "Visible platform sales (Stripe unavailable this week)",
        "purchases": null,
        "purchaseRevenue": null,
        "detail": "Visible platform sales are incomplete this week: Roku $0.00 + Apple $0.00 (Oct 25-Oct 31 window), and Stripe could not be pulled (connector disconnected; last week Stripe was $133.94). No visible total or week-over-week change is shown. DotStudios shows 5 web purchases / $104.95 that Stripe would normally confirm. Visible platform sales are never total ElectricNOW sales (Google Play/Android, $20.99 in DotStudios, is missing). Never add overlapping DotStudios $125.94.",
        "status": "incomplete_stripe_stale"
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
      "label": "Sales year to date: DotStudios exported net",
      "range": "Export: Mar 25-Nov 1, 2026",
      "coverageStart": "2026-03-25",
      "coverageEnd": "2026-11-01",
      "purchaseRevenue": 18773.49,
      "purchases": 1707,
      "countLabel": "charge rows before adjustments/refund",
      "revenuePerPurchase": null,
      "status": "fresh_manual_export_coverage",
      "source": "DotStudios revenue-transactions-5.csv (Mar 25-Oct 4) + revenue-transactions-6.csv (Oct 5-Oct 11, 17 paid rows) + revenue-transactions-7.csv (Oct 12-Oct 18, 19 charge rows + 1 same-day adjustment of -$14.99) + revenue-transactions-8.csv (Oct 19-Oct 25, 15 charge rows, no adjustments) + revenue-transactions-10.csv (Oct 26-Nov 1, 6 charge rows, no adjustments)",
      "sourceOfTruth": "dotstudios_full_export",
      "grossCharges": 30515.7,
      "adjustments": -11727.22,
      "refunds": -14.99,
      "totalRows": 2505,
      "byKind": {
        "adjustment": {
          "rows": 797,
          "gross": -11727.22,
          "net": -11727.22
        },
        "charge": {
          "rows": 1707,
          "gross": 30515.7,
          "net": 30515.7
        },
        "refund": {
          "rows": 1,
          "gross": -14.99,
          "net": -14.99
        }
      },
      "byDevice": {
        "Unspecified": {
          "rows": 1,
          "gross": 20.99,
          "net": 20.99
        },
        "amazon_fire": {
          "rows": 110,
          "gross": 190.84,
          "net": 190.84
        },
        "android": {
          "rows": 423,
          "gross": 3996.06,
          "net": 3996.06
        },
        "android_tv": {
          "rows": 2,
          "gross": 0.0,
          "net": 0.0
        },
        "apple": {
          "rows": 574,
          "gross": 5897.08,
          "net": 5897.08
        },
        "roku": {
          "rows": 630,
          "gross": 3316.28,
          "net": 3316.28
        },
        "vizio": {
          "rows": 22,
          "gross": 339.76,
          "net": 339.76
        },
        "web": {
          "rows": 743,
          "gross": 5012.48,
          "net": 5012.48
        }
      },
      "note": "DotStudios exported net sales: $30,515.70 in 1,707 charge rows less $11,727.22 in 797 adjustment rows and $14.99 in one refund = $18,773.49. Export transaction dates: Mar 25-Nov 1, 2026 (full ledger through Oct 4 plus the Oct 5-11, Oct 12-18, Oct 19-25 and Oct 26-Nov 1 weekly exports). January 1-March 24 coverage is not established by this file. Charges are not unique buyers or net retained revenue; never add Stripe, Apple or Roku, which overlap.",
      "caveat": "DotStudios exported net sales: $30,515.70 in 1,707 charge rows less $11,727.22 in 797 adjustment rows and $14.99 in one refund = $18,773.49. Export transaction dates: Mar 25-Nov 1, 2026 (full ledger through Oct 4 plus the Oct 5-11, Oct 12-18, Oct 19-25 and Oct 26-Nov 1 weekly exports). January 1-March 24 coverage is not established by this file. Charges are not unique buyers or net retained revenue; never add Stripe, Apple or Roku, which overlap.",
      "updatedAt": "2026-11-02T20:36:08.781670+00:00",
      "previousPublishedValue": {
        "purchaseRevenue": 18647.55,
        "purchases": 1701,
        "range": "Export: Mar 25-Oct 25, 2026"
      }
    },
    "monthToDate": {
      "label": "Stripe latest complete week (not month-to-date)",
      "range": "Oct 19-Oct 25, 2026",
      "purchases": 7,
      "purchaseRevenue": 133.94,
      "developerRevShare": 133.94,
      "payments": [
        {
          "date": "2026-10-19",
          "createdAt": "2026-10-19T06:17:12-07:00",
          "amount": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "2026-10-20",
          "createdAt": "2026-10-20T21:30:55-07:00",
          "amount": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "2026-10-20",
          "createdAt": "2026-10-20T22:55:13-07:00",
          "amount": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "2026-10-23",
          "createdAt": "2026-10-23T17:41:53-07:00",
          "amount": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "2026-10-24",
          "createdAt": "2026-10-24T13:37:09-07:00",
          "amount": 8.0,
          "description": "Subscription update",
          "source": "Stripe"
        },
        {
          "date": "2026-10-24",
          "createdAt": "2026-10-24T15:07:02-07:00",
          "amount": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "2026-10-25",
          "createdAt": "2026-10-25T18:32:32-07:00",
          "amount": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe"
        }
      ],
      "note": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "status": "stale_preserved_no_fresh_pull",
      "staleNote": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "attemptedPeriod": "Oct 26-Nov 1, 2026"
    },
    "lastWeek": {
      "label": "Apple App Store Connect: sales (Oct 25-Oct 31 window)",
      "range": "Oct 26-Nov 1, 2026",
      "period": "Oct 26-Nov 1, 2026",
      "applePeriod": "Oct 25-Oct 31, 2026",
      "purchases": 0,
      "purchaseRevenue": 0.0,
      "developerRevShare": null,
      "downloads": 47,
      "freeDownloads": 47,
      "totalUnits": null,
      "inAppUnits": null,
      "status": "fresh_manual",
      "note": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
      "salesGeography": "Apple Sales view"
    },
    "thisWeek": {
      "period": "Oct 26-Nov 1, 2026",
      "range": "Oct 26-Nov 1, 2026",
      "label": "DotStudios current-week TVOD",
      "gross": 125.94,
      "net": 125.94,
      "transactions": 6,
      "purchases": 6,
      "paidTransactions": 6,
      "chargeRows": 6,
      "adjustmentRows": 0,
      "adjustments": 0.0,
      "knownFreshVisibleTransactions": 6,
      "purchaseRevenue": 125.94,
      "source": "DotStudios manual export",
      "status": "fresh_manual",
      "note": "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
      "priorPeriod": "Oct 19-Oct 25, 2026",
      "deltaVsPriorPct": -60.00000000000001,
      "dotStudiosTvodGross": 125.94,
      "dotStudiosTvodTransactions": 6,
      "appleManualSnapshotGross": 0.0,
      "appleManualSnapshotDownloads": 47,
      "appleManualSnapshotPeriod": "Oct 25-Oct 31, 2026 (Apple Sun-Sat window)",
      "appleManualSnapshotGeography": "Apple Sales view"
    },
    "currentCompleteWeek": {
      "period": "Oct 26-Nov 1, 2026",
      "range": "Oct 26-Nov 1, 2026",
      "label": "DotStudios current-week TVOD",
      "gross": 125.94,
      "net": 125.94,
      "transactions": 6,
      "purchases": 6,
      "paidTransactions": 6,
      "chargeRows": 6,
      "adjustmentRows": 0,
      "adjustments": 0.0,
      "knownFreshVisibleTransactions": 6,
      "purchaseRevenue": 125.94,
      "source": "DotStudios manual export",
      "status": "fresh_manual",
      "note": "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
      "priorPeriod": "Oct 19-Oct 25, 2026",
      "deltaVsPriorPct": -60.00000000000001,
      "dotStudiosTvodGross": 125.94,
      "dotStudiosTvodTransactions": 6,
      "appleManualSnapshotGross": 0.0,
      "appleManualSnapshotDownloads": 47,
      "appleManualSnapshotPeriod": "Oct 25-Oct 31, 2026 (Apple Sun-Sat window)",
      "appleManualSnapshotGeography": "Apple Sales view"
    },
    "weekToDate": {
      "period": "Oct 26-Nov 1, 2026",
      "range": "Oct 26-Nov 1, 2026",
      "label": "DotStudios current-week TVOD",
      "gross": 125.94,
      "net": 125.94,
      "transactions": 6,
      "purchases": 6,
      "paidTransactions": 6,
      "chargeRows": 6,
      "adjustmentRows": 0,
      "adjustments": 0.0,
      "knownFreshVisibleTransactions": 6,
      "purchaseRevenue": 125.94,
      "source": "DotStudios manual export",
      "status": "fresh_manual",
      "note": "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
      "priorPeriod": "Oct 19-Oct 25, 2026",
      "deltaVsPriorPct": -60.00000000000001,
      "dotStudiosTvodGross": 125.94,
      "dotStudiosTvodTransactions": 6,
      "appleManualSnapshotGross": 0.0,
      "appleManualSnapshotDownloads": 47,
      "appleManualSnapshotPeriod": "Oct 25-Oct 31, 2026 (Apple Sun-Sat window)",
      "appleManualSnapshotGeography": "Apple Sales view"
    },
    "recent12Days": {
      "label": "Prior snapshot (stale): Stripe source check: latest seven days",
      "range": "Sep 14-Sep 20, 2026",
      "purchases": 2,
      "purchaseRevenue": 41.98,
      "developerRevShare": 41.98,
      "payments": [
        {
          "date": "2026-09-14",
          "createdAt": "2026-09-14",
          "amount": 20.99,
          "description": "Stripe: 1 payments",
          "source": "Stripe"
        },
        {
          "date": "2026-09-17",
          "createdAt": "2026-09-17",
          "amount": 20.99,
          "description": "Stripe: 1 payments",
          "source": "Stripe"
        }
      ],
      "note": "STALE: no new Apple or DotStudios uploads for Sep 28-Oct 4. Preserved Sep 21-Sep 27, 2026 values; NOT current-week results. Apple sales remain U.S.-only; worldwide sales and Apple updates unavailable.",
      "status": "stale_preserved_no_fresh_pull",
      "staleNote": "STALE: no new Apple or DotStudios uploads for Sep 28-Oct 4. Preserved Sep 21-Sep 27, 2026 values; NOT current-week results. Apple sales remain U.S.-only; worldwide sales and Apple updates unavailable."
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
        "date": "2026-10-19",
        "createdAt": "2026-10-19T06:17:12-07:00",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe"
      },
      {
        "date": "2026-10-20",
        "createdAt": "2026-10-20T21:30:55-07:00",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe"
      },
      {
        "date": "2026-10-20",
        "createdAt": "2026-10-20T22:55:13-07:00",
        "amount": 20.99,
        "description": "Anonymous Customer - Season Pass: Signup payment",
        "source": "Stripe"
      },
      {
        "date": "2026-10-23",
        "createdAt": "2026-10-23T17:41:53-07:00",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe"
      },
      {
        "date": "2026-10-24",
        "createdAt": "2026-10-24T13:37:09-07:00",
        "amount": 8.0,
        "description": "Subscription update",
        "source": "Stripe"
      },
      {
        "date": "2026-10-24",
        "createdAt": "2026-10-24T15:07:02-07:00",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe"
      },
      {
        "date": "2026-10-25",
        "createdAt": "2026-10-25T18:32:32-07:00",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
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
      },
      {
        "date": "Sep 19",
        "rawDate": "20260919",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Sep 20",
        "rawDate": "20260920",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0
      },
      {
        "date": "Sep 21",
        "rawDate": "20260921",
        "purchases": 1,
        "purchaseRevenue": 20.99
      },
      {
        "date": "Sep 22",
        "rawDate": "20260922",
        "purchases": 2,
        "purchaseRevenue": 41.98
      },
      {
        "date": "Sep 23",
        "rawDate": "20260923",
        "purchases": 3,
        "purchaseRevenue": 62.97
      },
      {
        "date": "Sep 24",
        "rawDate": "20260924",
        "purchases": 2,
        "purchaseRevenue": 88.0
      },
      {
        "date": "Sep 27",
        "rawDate": "20260927",
        "purchases": 2,
        "purchaseRevenue": 41.98
      },
      {
        "date": "Sep 28",
        "rawDate": "20260928",
        "purchases": 1,
        "purchaseRevenue": 8.0
      },
      {
        "date": "Sep 29",
        "rawDate": "20260929",
        "purchases": 1,
        "purchaseRevenue": 20.99
      },
      {
        "date": "Oct 1",
        "rawDate": "20261001",
        "purchases": 2,
        "purchaseRevenue": 40.97
      },
      {
        "date": "Oct 2",
        "rawDate": "20261002",
        "purchases": 1,
        "purchaseRevenue": 20.99
      },
      {
        "date": "Oct 3",
        "rawDate": "20261003",
        "purchases": 1,
        "purchaseRevenue": 20.99
      },
      {
        "date": "Oct 5",
        "rawDate": "20261005",
        "purchases": 1,
        "purchaseRevenue": 20.99
      },
      {
        "date": "Oct 7",
        "rawDate": "20261007",
        "purchases": 2,
        "purchaseRevenue": 41.98
      },
      {
        "date": "Oct 12",
        "rawDate": "20261012",
        "purchases": 1,
        "purchaseRevenue": 20.99
      },
      {
        "date": "Oct 16",
        "rawDate": "20261016",
        "purchases": 1,
        "purchaseRevenue": 20.99
      },
      {
        "date": "Oct 18",
        "rawDate": "20261018",
        "purchases": 1,
        "purchaseRevenue": 20.99
      },
      {
        "date": "Oct 19",
        "rawDate": "20261019",
        "purchases": 1,
        "purchaseRevenue": 20.99
      },
      {
        "date": "Oct 20",
        "rawDate": "20261020",
        "purchases": 2,
        "purchaseRevenue": 41.98
      },
      {
        "date": "Oct 23",
        "rawDate": "20261023",
        "purchases": 1,
        "purchaseRevenue": 20.99
      },
      {
        "date": "Oct 24",
        "rawDate": "20261024",
        "purchases": 2,
        "purchaseRevenue": 28.99
      },
      {
        "date": "Oct 25",
        "rawDate": "20261025",
        "purchases": 1,
        "purchaseRevenue": 20.99
      }
    ],
    "note": "Sales sources overlap: DotStudios is the broad TVOD view; Stripe, Roku and Apple are platform checks and are never added to DotStudios. Stripe could not be pulled this week (connector disconnected).",
    "latestSevenDayVisibleSales": {
      "period": "Oct 26-Nov 1, 2026",
      "range": "Oct 26-Nov 1, 2026",
      "label": "DotStudios current-week TVOD",
      "gross": 125.94,
      "net": 125.94,
      "transactions": 6,
      "purchases": 6,
      "paidTransactions": 6,
      "chargeRows": 6,
      "adjustmentRows": 0,
      "adjustments": 0.0,
      "knownFreshVisibleTransactions": 6,
      "purchaseRevenue": 125.94,
      "source": "DotStudios manual export",
      "status": "fresh_manual",
      "note": "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
      "priorPeriod": "Oct 19-Oct 25, 2026",
      "deltaVsPriorPct": -60.00000000000001,
      "dotStudiosTvodGross": 125.94,
      "dotStudiosTvodTransactions": 6,
      "appleManualSnapshotGross": 0.0,
      "appleManualSnapshotDownloads": 47,
      "appleManualSnapshotPeriod": "Oct 25-Oct 31, 2026 (Apple Sun-Sat window)",
      "appleManualSnapshotGeography": "Apple Sales view"
    },
    "dotStudiosTvod": {
      "period": "Oct 26-Nov 1, 2026",
      "range": "Oct 26-Nov 1, 2026",
      "label": "DotStudios current-week TVOD",
      "gross": 125.94,
      "net": 125.94,
      "transactions": 6,
      "purchases": 6,
      "paidTransactions": 6,
      "chargeRows": 6,
      "adjustmentRows": 0,
      "adjustments": 0.0,
      "knownFreshVisibleTransactions": 6,
      "purchaseRevenue": 125.94,
      "source": "DotStudios manual export",
      "status": "fresh_manual",
      "note": "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
      "priorPeriod": "Oct 19-Oct 25, 2026",
      "deltaVsPriorPct": -60.00000000000001,
      "dotStudiosTvodGross": 125.94,
      "dotStudiosTvodTransactions": 6,
      "appleManualSnapshotGross": 0.0,
      "appleManualSnapshotDownloads": 47,
      "appleManualSnapshotPeriod": "Oct 25-Oct 31, 2026 (Apple Sun-Sat window)",
      "appleManualSnapshotGeography": "Apple Sales view"
    },
    "appleManual": {
      "period": "Oct 26-Nov 1, 2026",
      "applePeriod": "Oct 25-Oct 31, 2026",
      "salesGross": 0.0,
      "downloads": 47,
      "totalUnits": null,
      "freeDownloads": 47,
      "inAppUnits": null,
      "status": "fresh_manual",
      "note": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
      "salesGeography": "Apple Sales view"
    },
    "visiblePlatformSalesDefinition": "DotStudios current-week TVOD is the broadest current visible sales view. Stripe, Roku, and Apple are platform/source checks and overlap DotStudios rows; Google Play and other channels may still be incomplete.",
    "reconciliationNote": "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
    "stripeConnectorCheck": {
      "start": "2026-10-19",
      "end": "2026-10-25",
      "transactions": 7,
      "gross": 133.94,
      "refunds": 0.0,
      "net": 133.94,
      "failedAttempts": 0,
      "subscriptionCharges": 1,
      "subscriptionGross": 8.0,
      "daily": [
        {
          "date": "2026-10-19",
          "transactions": 1,
          "gross": 20.99
        },
        {
          "date": "2026-10-20",
          "transactions": 2,
          "gross": 41.98
        },
        {
          "date": "2026-10-23",
          "transactions": 1,
          "gross": 20.99
        },
        {
          "date": "2026-10-24",
          "transactions": 2,
          "gross": 28.99
        },
        {
          "date": "2026-10-25",
          "transactions": 1,
          "gross": 20.99
        }
      ],
      "payments": [
        {
          "date": "2026-10-19",
          "createdAt": "2026-10-19T06:17:12-07:00",
          "amount": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "2026-10-20",
          "createdAt": "2026-10-20T21:30:55-07:00",
          "amount": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "2026-10-20",
          "createdAt": "2026-10-20T22:55:13-07:00",
          "amount": 20.99,
          "description": "Anonymous Customer - Season Pass: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "2026-10-23",
          "createdAt": "2026-10-23T17:41:53-07:00",
          "amount": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "2026-10-24",
          "createdAt": "2026-10-24T13:37:09-07:00",
          "amount": 8.0,
          "description": "Subscription update",
          "source": "Stripe"
        },
        {
          "date": "2026-10-24",
          "createdAt": "2026-10-24T15:07:02-07:00",
          "amount": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe"
        },
        {
          "date": "2026-10-25",
          "createdAt": "2026-10-25T18:32:32-07:00",
          "amount": 20.99,
          "description": "Customer User - Season Pass: Signup payment",
          "source": "Stripe"
        }
      ],
      "period": "Oct 19-Oct 25, 2026",
      "status": "stale_preserved_no_fresh_pull",
      "note": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "source": "Stripe live charge list",
      "hasMore": false,
      "coverageComplete": true,
      "priorPeriod": {
        "start": "2026-10-12",
        "end": "2026-10-18",
        "transactions": 3,
        "gross": 62.97,
        "refunds": 0.0,
        "net": 62.97,
        "failedAttempts": 0,
        "subscriptionCharges": 0,
        "subscriptionGross": 0.0,
        "period": "Oct 12-Oct 18, 2026"
      },
      "staleNote": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "attemptedPeriod": "Oct 26-Nov 1, 2026"
    },
    "rokuSalesActivity": {
      "period": "Oct 26-Nov 1, 2026",
      "reportPeriod": "Roku Sales Activity report generated November 2, 2026 at 7:07 AM PST; report covers the last 7 weeks, with Oct 26-Nov 1, 2026 rows (by transaction date) summarized here.",
      "source": "Roku Sales Activity email from bdp_noreply@data.roku.com",
      "emailDate": "2026-11-02T15:07:47+00:00",
      "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwDvKLV_nde7SYUl0H8b5z1dAAPKm0PlAADvKLV_nde7SYUl0H8b5z1dAAQXqSA9AAA=",
      "status": "fresh",
      "transactions": 0,
      "gross": 0.0,
      "developerRevenue": 0.0,
      "daily": [],
      "priorPeriod": {
        "period": "Oct 19-Oct 25, 2026",
        "transactions": 3,
        "gross": 62.97,
        "developerRevenue": 50.37
      },
      "deltaVsPriorGrossPct": -100.0,
      "note": "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded.",
      "trcExclusionNote": "Roku TRC emails are for the separate Roku live-channel surface outside the ElectricNOW app and are excluded from app/platform usage."
    },
    "visiblePlatformSalesCurrentWeek": {
      "period": "Oct 26-Nov 1, 2026",
      "purchaseRevenue": null,
      "purchases": null,
      "stripeGross": null,
      "rokuGross": 0.0,
      "appleGross": 0.0,
      "label": "Visible platform sales (Stripe + Roku + Apple; Stripe unavailable)",
      "status": "incomplete_stripe_stale",
      "note": "Visible platform sales are incomplete this week: Roku $0.00 + Apple $0.00 (Oct 25-Oct 31 window), and Stripe could not be pulled (connector disconnected; last week Stripe was $133.94). No visible total or week-over-week change is shown. DotStudios shows 5 web purchases / $104.95 that Stripe would normally confirm. Visible platform sales are never total ElectricNOW sales (Google Play/Android, $20.99 in DotStudios, is missing). Never add overlapping DotStudios $125.94."
    },
    "recentPaymentsNote": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
    "staleNote": "Historical legacy sales windows remain dated prior snapshots; current source cards are fresh.",
    "visiblePlatformSalesPriorWeek": {
      "period": "Oct 19-Oct 25, 2026",
      "purchaseRevenue": 301.86,
      "stripeGross": 133.94,
      "rokuGross": 62.97,
      "appleGross": 104.95,
      "label": "Visible platform sales, prior week (Stripe + Roku + Apple)",
      "status": "fresh",
      "note": "Stripe $133.94 + Roku $62.97 + Apple $104.95 (Apple Oct 18-Oct 24 window) = $301.86 (Oct 19-Oct 25). Visible platform sales, not total sales. Not compared this week because Stripe is unavailable."
    }
  },
  "contentUsage": {
    "period": "Oct 26-Nov 1, 2026",
    "live": {
      "total": {
        "screenPageViews": 1816,
        "activeUsers": 398,
        "eventCount": 12710
      },
      "platforms": [
        {
          "platform": "iOS",
          "screen": "Live",
          "screenPageViews": 701,
          "activeUsers": 207,
          "eventCount": 6886
        },
        {
          "platform": "web",
          "screen": "Live",
          "screenPageViews": 582,
          "activeUsers": 14,
          "eventCount": 582
        },
        {
          "platform": "Android",
          "screen": "Live",
          "screenPageViews": 533,
          "activeUsers": 173,
          "eventCount": 5242
        }
      ],
      "playback": {
        "play": 391,
        "video_start": 2614,
        "end_playback": 4
      },
      "playbackRows": [
        {
          "event": "video_start",
          "label": "Video starts",
          "eventCount": 2614
        },
        {
          "event": "play",
          "label": "Play events",
          "eventCount": 391
        },
        {
          "event": "pause",
          "label": "Pauses",
          "eventCount": 4
        },
        {
          "event": "resume",
          "label": "Resumes",
          "eventCount": 6
        },
        {
          "event": "end_playback",
          "label": "Playback ended",
          "eventCount": 4
        },
        {
          "event": "video_complete",
          "label": "Video completes",
          "eventCount": 3
        },
        {
          "event": "playback_error",
          "label": "Playback errors",
          "eventCount": 308
        }
      ],
      "topChannels": [
        {
          "title": "ElectricNOW",
          "plays": 2653,
          "activeUsers": 367,
          "rank": 1
        },
        {
          "title": "ElectricNOW en Español",
          "plays": 133,
          "activeUsers": 23,
          "rank": 2
        },
        {
          "title": "Kung Fu Movies",
          "plays": 72,
          "activeUsers": 10,
          "rank": 3
        },
        {
          "title": "DARK MATTER TV",
          "plays": 48,
          "activeUsers": 11,
          "rank": 4
        },
        {
          "title": "Grindhouse Gold",
          "plays": 48,
          "activeUsers": 6,
          "rank": 5
        },
        {
          "title": "Horror Asylum",
          "plays": 46,
          "activeUsers": 20,
          "rank": 6
        },
        {
          "title": "ToonOvation",
          "plays": 32,
          "activeUsers": 9,
          "rank": 7
        },
        {
          "title": "Stoner TV Network",
          "plays": 31,
          "activeUsers": 7,
          "rank": 8
        },
        {
          "title": "IndieBox",
          "plays": 30,
          "activeUsers": 5,
          "rank": 9
        },
        {
          "title": "Urban Action Channel",
          "plays": 25,
          "activeUsers": 7,
          "rank": 10
        },
        {
          "title": "AMPD TV",
          "plays": 24,
          "activeUsers": 6,
          "rank": 11
        },
        {
          "title": "Cartoon Classics",
          "plays": 22,
          "activeUsers": 7,
          "rank": 12
        },
        {
          "title": "Daily Flash",
          "plays": 21,
          "activeUsers": 9,
          "rank": 13
        },
        {
          "title": "Ghost Dimension",
          "plays": 21,
          "activeUsers": 9,
          "rank": 14
        },
        {
          "title": "spot on news",
          "plays": 21,
          "activeUsers": 9,
          "rank": 15
        },
        {
          "title": "CinePast",
          "plays": 20,
          "activeUsers": 5,
          "rank": 16
        },
        {
          "title": "Hollywood Classic Movies",
          "plays": 18,
          "activeUsers": 5,
          "rank": 17
        },
        {
          "title": "a-z Classic Flix",
          "plays": 17,
          "activeUsers": 6,
          "rank": 18
        },
        {
          "title": "a-z Best Classic TV",
          "plays": 16,
          "activeUsers": 3,
          "rank": 19
        },
        {
          "title": "Colorized.TV",
          "plays": 16,
          "activeUsers": 5,
          "rank": 20
        },
        {
          "title": "BayView Documentaries",
          "plays": 15,
          "activeUsers": 7,
          "rank": 21
        },
        {
          "title": "Fancy A Movie",
          "plays": 13,
          "activeUsers": 5,
          "rank": 22
        },
        {
          "title": "The Family TV Channel",
          "plays": 12,
          "activeUsers": 4,
          "rank": 23
        },
        {
          "title": "4ACETV CLASSIC HITS",
          "plays": 12,
          "activeUsers": 5,
          "rank": 24
        },
        {
          "title": "Fitness Rewind by Collage Video",
          "plays": 11,
          "activeUsers": 4,
          "rank": 25
        },
        {
          "title": "Comercio TV",
          "plays": 9,
          "activeUsers": 4,
          "rank": 26
        },
        {
          "title": "The Health Channel",
          "plays": 9,
          "activeUsers": 6,
          "rank": 27
        },
        {
          "title": "MomCave",
          "plays": 8,
          "activeUsers": 3,
          "rank": 28
        },
        {
          "title": "Viajar TV",
          "plays": 8,
          "activeUsers": 4,
          "rank": 29
        },
        {
          "title": "HIP HOP TV",
          "plays": 8,
          "activeUsers": 3,
          "rank": 30
        },
        {
          "title": "Box Cinema",
          "plays": 8,
          "activeUsers": 4,
          "rank": 31
        },
        {
          "title": "Rock Solid Wrestling TV",
          "plays": 8,
          "activeUsers": 4,
          "rank": 32
        },
        {
          "title": "Cowboy Classics",
          "plays": 7,
          "activeUsers": 4,
          "rank": 33
        },
        {
          "title": "MMA Futures",
          "plays": 7,
          "activeUsers": 4,
          "rank": 34
        },
        {
          "title": "Rockola Television",
          "plays": 7,
          "activeUsers": 4,
          "rank": 35
        },
        {
          "title": "a-z Western Grit",
          "plays": 7,
          "activeUsers": 4,
          "rank": 36
        },
        {
          "title": "SportsTVPlus",
          "plays": 6,
          "activeUsers": 3,
          "rank": 37
        },
        {
          "title": "NOMADslow tv",
          "plays": 6,
          "activeUsers": 4,
          "rank": 38
        },
        {
          "title": "Old West TV",
          "plays": 6,
          "activeUsers": 4,
          "rank": 39
        },
        {
          "title": "4ACETV",
          "plays": 5,
          "activeUsers": 3,
          "rank": 40
        },
        {
          "title": "Nigbati TV",
          "plays": 5,
          "activeUsers": 2,
          "rank": 41
        },
        {
          "title": "POWERtube TV",
          "plays": 5,
          "activeUsers": 3,
          "rank": 42
        },
        {
          "title": "AMusic Channel",
          "plays": 4,
          "activeUsers": 3,
          "rank": 43
        },
        {
          "title": "Americana Television",
          "plays": 4,
          "activeUsers": 3,
          "rank": 44
        },
        {
          "title": "Box Playlist",
          "plays": 4,
          "activeUsers": 3,
          "rank": 45
        },
        {
          "title": "Boxing Spotlight",
          "plays": 4,
          "activeUsers": 3,
          "rank": 46
        },
        {
          "title": "FightTVPlus",
          "plays": 4,
          "activeUsers": 3,
          "rank": 47
        },
        {
          "title": "HITS MEXICANOS",
          "plays": 4,
          "activeUsers": 2,
          "rank": 48
        },
        {
          "title": "Historias de Corazón",
          "plays": 4,
          "activeUsers": 3,
          "rank": 49
        },
        {
          "title": "Play Ibiza",
          "plays": 4,
          "activeUsers": 2,
          "rank": 50
        },
        {
          "title": "Wrestling Spotlight",
          "plays": 4,
          "activeUsers": 3,
          "rank": 51
        },
        {
          "title": "BEST (Black Enterprise Streaming Television)",
          "plays": 3,
          "activeUsers": 2,
          "rank": 52
        }
      ],
      "note": "Internal GA4 pull, property 497892271, Oct 26-Nov 1, 2026. Live usage is based on GA4 screen name 'Live' plus playback events carried on that screen. In the Top 10 Live channels table, 'Play events' are GA4 video_start events grouped by channel title. Platform rows use each platform's own screen_view users and are not deduped across platforms. Definitions differ from the Live play events scorecard: these cards count only events fired on the 'Live' screen (391 'play' + 2,614 video_start), while the scorecard counts play + video_play + video_start on any live/FAST channel title (5,568). Live active users here are 'Live' screen users; 'live channel viewers' in the summary are users with a video_start on a live/FAST title.",
      "topChannelsCount": 52,
      "topChannelsRosterNote": "52 live/FAST channels with at least one GA4 video_start in Oct 26-Nov 1, 2026. Roster: live_channels.json (13 confirmed + 42 detected). 'Plays' are video_start events grouped by channel title; users are not additive across channels."
    },
    "onDemand": {
      "total": {
        "activeUsers": 558,
        "screenPageViews": null,
        "eventCount": 6838
      },
      "platforms": [
        {
          "platform": "Web",
          "screen": "On-demand video",
          "activeUsers": 257,
          "screenPageViews": null,
          "eventCount": 5644
        },
        {
          "platform": "Android",
          "screen": "On-demand video",
          "activeUsers": 147,
          "screenPageViews": null,
          "eventCount": 831
        },
        {
          "platform": "iOS",
          "screen": "On-demand video",
          "activeUsers": 134,
          "screenPageViews": null,
          "eventCount": 363
        }
      ],
      "note": "Internal GA4 pull, property 497892271, Oct 26-Nov 1, 2026. On-demand viewers are people who started an on-demand video (live/FAST channels excluded): 558 this week versus 554 the week before (+0.7%); starts fell to 6,838 from 7,804 (-12.4%); 191 finished an on-demand video (186 the week before). Platform rows are people per platform; someone using two platforms counts in both, so rows need not add to 558. The old GA4 screen named 'On Demand' is not the audience.",
      "viewing": {
        "period": "Oct 26-Nov 1, 2026",
        "comparisonPeriod": "Oct 19-Oct 25, 2026",
        "definition": "Users with a video_start event whose channel_title is not a live/FAST channel (live_channels.json roster, 59 names). Same definition as the Viewing Behavior 'On-demand start users' scorecard.",
        "source": "Internal GA4 pull, property 497892271, pulled Nov 2, 2026",
        "viewers": 558,
        "starts": 6838,
        "finishers": 191,
        "completes": 2741,
        "prior": {
          "viewers": 554,
          "starts": 7804,
          "finishers": 186
        },
        "platforms": [
          {
            "platform": "Web",
            "viewers": 257,
            "starts": 5644,
            "priorViewers": 256
          },
          {
            "platform": "Android",
            "viewers": 147,
            "starts": 831,
            "priorViewers": 130
          },
          {
            "platform": "iOS",
            "viewers": 134,
            "starts": 363,
            "priorViewers": 133
          }
        ]
      },
      "legacyScreen": {
        "screen": "On Demand",
        "total": {
          "screenPageViews": 27,
          "activeUsers": 4,
          "eventCount": 46
        },
        "platforms": [
          {
            "platform": "Android",
            "screen": "On Demand",
            "screenPageViews": 19,
            "activeUsers": 2,
            "eventCount": 30
          },
          {
            "platform": "iOS",
            "screen": "On Demand",
            "screenPageViews": 8,
            "activeUsers": 2,
            "eventCount": 16
          }
        ],
        "note": "Legacy GA4 screen-name count. Not the on-demand audience; do not headline."
      },
      "period": "Oct 26-Nov 1, 2026"
    },
    "status": "fresh"
  },
  "titleViewership": {
    "period": "Oct 26-Nov 1, 2026",
    "note": "Fresh Internal GA4 pull, property 497892271 for Oct 26-Nov 1, 2026. Rows are GA4 channel_title values, which the app currently sends at season/collection level, not per episode - so 'Play events' counts video_start (playback initiations) for that collection. Total viewers is the largest single-label GA4 active-user count, not a sum, because users are not additive across labels. Live/FAST channels are excluded here and reported separately under Live channel usage. The exclusion uses the shared roster in live_channels.json (13 team-confirmed channels plus 42 channels auto-detected from their GA4 event signature: video_start with no screen_view, video_progress, video_complete or ad-request events), so newly added FAST channels cannot leak into the on-demand lists. Episode-level reporting needs the app to send content_type, series_title, season, episode and video_id consistently.",
    "topVideoTitlesNote": "Fresh Internal GA4 pull, property 497892271 for Oct 26-Nov 1, 2026. Rows are GA4 channel_title values, which the app currently sends at season/collection level, not per episode - so 'Play events' counts video_start (playback initiations) for that collection. Total viewers is the largest single-label GA4 active-user count, not a sum, because users are not additive across labels. Live/FAST channels are excluded here and reported separately under Live channel usage. The exclusion uses the shared roster in live_channels.json (13 team-confirmed channels plus 42 channels auto-detected from their GA4 event signature: video_start with no screen_view, video_progress, video_complete or ad-request events), so newly added FAST channels cannot leak into the on-demand lists. Episode-level reporting needs the app to send content_type, series_title, season, episode and video_id consistently.",
    "topPrograms": [
      {
        "rank": 1,
        "program": "The Ark",
        "plays": 1273,
        "activeUsers": 28,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 5,
        "examples": [
          "The Ark",
          "The Ark - Season 1",
          "The Ark - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 2,
        "program": "The Librarians: The Next Chapter",
        "plays": 612,
        "activeUsers": 40,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 3,
        "examples": [
          "The Librarians: The Next Chapter",
          "The Librarians: The Next Chapter (Season 1)",
          "The Librarians: The Next Chapter Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 3,
        "program": "Leverage",
        "plays": 580,
        "activeUsers": 33,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 6,
        "examples": [
          "Leverage",
          "Leverage - Season 1",
          "Leverage - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 4,
        "program": "Leverage: Redemption",
        "plays": 399,
        "activeUsers": 8,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 4,
        "examples": [
          "Leverage: Redemption",
          "Leverage: Redemption -  Season 1",
          "Leverage: Redemption - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 5,
        "program": "The Librarians",
        "plays": 263,
        "activeUsers": 21,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 5,
        "examples": [
          "The Librarians (Full Series)",
          "The Librarians - Season 1",
          "The Librarians - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 6,
        "program": "Almost Paradise",
        "plays": 198,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "Almost Paradise - Season 1",
          "Almost Paradise - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 7,
        "program": "The Outpost",
        "plays": 123,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 5,
        "examples": [
          "The Outpost",
          "The Outpost - Season 1",
          "The Outpost - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 8,
        "program": "The Librarians Halloween Marathon",
        "plays": 70,
        "activeUsers": 24,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarians Halloween Marathon"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 9,
        "program": "After the Ark",
        "plays": 35,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 4,
        "examples": [
          "After the Ark",
          "After the Ark - Season 1",
          "After the Ark - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 10,
        "program": "Almost Paradise (Season 1 & 2)",
        "plays": 34,
        "activeUsers": 15,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Almost Paradise (Season 1 & 2)"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 11,
        "program": "After the Ark Season 3 - Romance",
        "plays": 24,
        "activeUsers": 12,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "After the Ark  Season 3 - Romance"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 12,
        "program": "Generation Z",
        "plays": 23,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "Generation Z",
          "Generation Z - Season 1"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 13,
        "program": "The Ark Season 3 Premieres July 29 on SyFy",
        "plays": 20,
        "activeUsers": 9,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Ark Season 3 Premieres July 29 on SyFy"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 14,
        "program": "Bad Samaritan",
        "plays": 17,
        "activeUsers": 5,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "Bad Samaritan",
          "Bad Samaritan - Trailer"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 15,
        "program": "The Poly Couple",
        "plays": 16,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Poly Couple"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 16,
        "program": "The Librarian: Quest for the Spear",
        "plays": 14,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarian: Quest for the Spear"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 17,
        "program": "Checking Out: The Librarians Next Chapter",
        "plays": 14,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "Checking Out: The Librarians Next Chapter",
          "Checking Out: The Librarians Next Chapter - Season 1"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 18,
        "program": "The Messenger",
        "plays": 12,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Messenger - Season 1"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 19,
        "program": "Mythica: A Quest for Heroes",
        "plays": 11,
        "activeUsers": 5,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Mythica: A Quest for Heroes"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 20,
        "program": "After the Ark Season 3 - Clones",
        "plays": 11,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "After the Ark Season 3 - Clones"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 21,
        "program": "The Librarians and the Crown of King Arthur in Cinemascope",
        "plays": 11,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarians and the Crown of King Arthur in Cinemascope"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 22,
        "program": "The Librarian: Return to King Solomon's Mines",
        "plays": 11,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "The Librarian: Return to King Solomon's Mines",
          "The Librarian: Return to King Solomon's Mines - Trailer"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 23,
        "program": "The Librarian: Curse of the Judas Chalice",
        "plays": 10,
        "activeUsers": 5,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarian: Curse of the Judas Chalice"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 24,
        "program": "After the Ark Season 3 - Eastern Federation",
        "plays": 10,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "After the Ark Season 3 - Eastern Federation"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 25,
        "program": "Solar Impact",
        "plays": 9,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Solar Impact"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 26,
        "program": "The Librarians: The Next Chapter Season 2 Aug 2nd on TNT",
        "plays": 9,
        "activeUsers": 8,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarians: The Next Chapter Season 2 Aug 2nd on TNT"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 27,
        "program": "VueWho",
        "plays": 9,
        "activeUsers": 5,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "VueWho"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 28,
        "program": "My Wife",
        "plays": 8,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "My Wife"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 29,
        "program": "After the Ark Season 3 - Outsiders Coming In",
        "plays": 8,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "After the Ark Season 3 - Outsiders Coming In"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 30,
        "program": "Looking for something frightful? Check out our horror channels!",
        "plays": 8,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Looking for something frightful? Check out our horror channels!"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 31,
        "program": "Dominion: The Last Star Warrior",
        "plays": 8,
        "activeUsers": 4,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 2,
        "examples": [
          "Dominion: The Last Star Warrior",
          "Dominion: The Last Star Warrior - Trailer"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 32,
        "program": "The Immortal",
        "plays": 6,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Immortal - Season 1"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 33,
        "program": "Checking Out - Season Two: Rapid Fire",
        "plays": 6,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Checking Out - Season Two: Rapid Fire"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 34,
        "program": "The Librarians: The Next Chapter Season 2 Teaser",
        "plays": 5,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarians: The Next Chapter Season 2 Teaser"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 35,
        "program": "Blackway",
        "plays": 5,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Blackway"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 36,
        "program": "Checking Out - Season Two: Peter Pan",
        "plays": 5,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Checking Out - Season Two: Peter Pan"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 37,
        "program": "Wizards vs. Aliens",
        "plays": 5,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Wizards vs. Aliens - Season 1"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 38,
        "program": "Catch up on The Librarians: The Next Chapter",
        "plays": 5,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Catch up on The Librarians: The Next Chapter"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 39,
        "program": "Checking Out - Season Two Finale Recap",
        "plays": 5,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Checking Out - Season Two Finale Recap"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 40,
        "program": "White Sky",
        "plays": 5,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "White Sky"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 41,
        "program": "Terror of Hallow's Eve",
        "plays": 4,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Terror of Hallow's Eve"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 42,
        "program": "Found in Time",
        "plays": 4,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Found in Time"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 43,
        "program": "Black Wake",
        "plays": 4,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Black Wake"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 44,
        "program": "The Librarians Cinemascope Movie",
        "plays": 4,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Librarians Cinemascope Movie"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 45,
        "program": "Checking Out: The Librarians: The Next Chapter",
        "plays": 4,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Checking Out: The Librarians: The Next Chapter - Season 2"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 46,
        "program": "Agency of Vengeance",
        "plays": 3,
        "activeUsers": 1,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Agency of Vengeance"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 47,
        "program": "Checking Out - Season Two: Season One Recap",
        "plays": 3,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "Checking Out - Season Two: Season One Recap"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 48,
        "program": "The Bunker",
        "plays": 3,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "The Bunker"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 49,
        "program": "After the Ark Season 3 - Production Special",
        "plays": 3,
        "activeUsers": 3,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "After the Ark Season 3 - Production Special"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 50,
        "program": "ElectricCon Fan Convention",
        "plays": 3,
        "activeUsers": 2,
        "viewerMethod": "ga4_channel_title_video_start_max_users",
        "rawLabelCount": 1,
        "examples": [
          "ElectricCon Fan Convention"
        ],
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      }
    ],
    "topVideoTitles": [
      {
        "rank": 1,
        "title": "The Ark - Season 3",
        "group": "The Ark",
        "plays": 943,
        "activeUsers": 28,
        "screenPageViews": 1308,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 2,
        "title": "The Librarians: The Next Chapter Season 2",
        "group": "The Librarians: The Next Chapter",
        "plays": 307,
        "activeUsers": 15,
        "screenPageViews": 441,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 3,
        "title": "Leverage: Redemption - Season 3",
        "group": "Leverage: Redemption",
        "plays": 253,
        "activeUsers": 8,
        "screenPageViews": 253,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 4,
        "title": "Leverage",
        "group": "Leverage",
        "plays": 239,
        "activeUsers": 33,
        "screenPageViews": 487,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 5,
        "title": "The Librarians: The Next Chapter",
        "group": "The Librarians: The Next Chapter",
        "plays": 170,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 6,
        "title": "The Ark - Season 2",
        "group": "The Ark",
        "plays": 151,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 7,
        "title": "The Librarians: The Next Chapter (Season 1)",
        "group": "The Librarians: The Next Chapter",
        "plays": 135,
        "activeUsers": 40,
        "screenPageViews": 371,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 8,
        "title": "Almost Paradise - Season 2",
        "group": "Almost Paradise",
        "plays": 124,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 9,
        "title": "Leverage - Season 1",
        "group": "Leverage",
        "plays": 114,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 10,
        "title": "Leverage - Season 2",
        "group": "Leverage",
        "plays": 102,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 11,
        "title": "The Ark",
        "group": "The Ark",
        "plays": 98,
        "activeUsers": 28,
        "screenPageViews": 399,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 12,
        "title": "The Librarians - Season 1",
        "group": "The Librarians",
        "plays": 94,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 13,
        "title": "Almost Paradise - Season 1",
        "group": "Almost Paradise",
        "plays": 74,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 14,
        "title": "The Librarians - Season 4",
        "group": "The Librarians",
        "plays": 71,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 15,
        "title": "The Librarians Halloween Marathon",
        "group": "The Librarians Halloween Marathon",
        "plays": 70,
        "activeUsers": 24,
        "screenPageViews": 182,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 16,
        "title": "Leverage - Season 4",
        "group": "Leverage",
        "plays": 65,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 17,
        "title": "The Librarians (Full Series)",
        "group": "The Librarians",
        "plays": 59,
        "activeUsers": 21,
        "screenPageViews": 195,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 18,
        "title": "The Ark - Season 1",
        "group": "The Ark",
        "plays": 59,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 19,
        "title": "Leverage: Redemption",
        "group": "Leverage: Redemption",
        "plays": 56,
        "activeUsers": 8,
        "screenPageViews": 216,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 20,
        "title": "Leverage: Redemption -  Season 1",
        "group": "Leverage: Redemption",
        "plays": 55,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 21,
        "title": "Leverage - Season 3",
        "group": "Leverage",
        "plays": 49,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 22,
        "title": "Leverage: Redemption - Season 2",
        "group": "Leverage: Redemption",
        "plays": 35,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 23,
        "title": "Almost Paradise (Season 1 & 2)",
        "group": "Almost Paradise (Season 1 & 2)",
        "plays": 34,
        "activeUsers": 15,
        "screenPageViews": 181,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 24,
        "title": "The Outpost - Season 2",
        "group": "The Outpost",
        "plays": 29,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 25,
        "title": "The Outpost - Season 4",
        "group": "The Outpost",
        "plays": 28,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 26,
        "title": "The Outpost - Season 3",
        "group": "The Outpost",
        "plays": 28,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 27,
        "title": "The Librarians - Season 2",
        "group": "The Librarians",
        "plays": 25,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 28,
        "title": "The Outpost - Season 1",
        "group": "The Outpost",
        "plays": 24,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 29,
        "title": "After the Ark  Season 3 - Romance",
        "group": "After the Ark Season 3 - Romance",
        "plays": 24,
        "activeUsers": 12,
        "screenPageViews": 79,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 30,
        "title": "After the Ark - Season 1",
        "group": "After the Ark",
        "plays": 23,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 31,
        "title": "The Ark - Trailer",
        "group": "The Ark",
        "plays": 22,
        "activeUsers": 4,
        "screenPageViews": 65,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 32,
        "title": "The Ark Season 3 Premieres July 29 on SyFy",
        "group": "The Ark Season 3 Premieres July 29 on SyFy",
        "plays": 20,
        "activeUsers": 9,
        "screenPageViews": 51,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 33,
        "title": "The Poly Couple",
        "group": "The Poly Couple",
        "plays": 16,
        "activeUsers": 1,
        "screenPageViews": 1,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 34,
        "title": "Bad Samaritan",
        "group": "Bad Samaritan",
        "plays": 15,
        "activeUsers": 5,
        "screenPageViews": 80,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 35,
        "title": "The Librarian: Quest for the Spear",
        "group": "The Librarian: Quest for the Spear",
        "plays": 14,
        "activeUsers": 4,
        "screenPageViews": 39,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 36,
        "title": "The Librarians - Season 3",
        "group": "The Librarians",
        "plays": 14,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 37,
        "title": "The Outpost",
        "group": "The Outpost",
        "plays": 14,
        "activeUsers": 2,
        "screenPageViews": 93,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 38,
        "title": "Generation Z",
        "group": "Generation Z",
        "plays": 12,
        "activeUsers": 1,
        "screenPageViews": 38,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 39,
        "title": "The Messenger - Season 1",
        "group": "The Messenger",
        "plays": 12,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 40,
        "title": "Leverage - Season 5",
        "group": "Leverage",
        "plays": 11,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 41,
        "title": "Generation Z - Season 1",
        "group": "Generation Z",
        "plays": 11,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 42,
        "title": "Mythica: A Quest for Heroes",
        "group": "Mythica: A Quest for Heroes",
        "plays": 11,
        "activeUsers": 5,
        "screenPageViews": 34,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 43,
        "title": "After the Ark Season 3 - Clones",
        "group": "After the Ark Season 3 - Clones",
        "plays": 11,
        "activeUsers": 2,
        "screenPageViews": 29,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 44,
        "title": "The Librarians and the Crown of King Arthur in Cinemascope",
        "group": "The Librarians and the Crown of King Arthur in Cinemascope",
        "plays": 11,
        "activeUsers": 4,
        "screenPageViews": 14,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 45,
        "title": "The Librarian: Return to King Solomon's Mines",
        "group": "The Librarian: Return to King Solomon's Mines",
        "plays": 10,
        "activeUsers": 3,
        "screenPageViews": 30,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 46,
        "title": "The Librarian: Curse of the Judas Chalice",
        "group": "The Librarian: Curse of the Judas Chalice",
        "plays": 10,
        "activeUsers": 5,
        "screenPageViews": 29,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 47,
        "title": "Checking Out: The Librarians Next Chapter - Season 1",
        "group": "Checking Out: The Librarians Next Chapter",
        "plays": 10,
        "activeUsers": 1,
        "screenPageViews": 0,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 48,
        "title": "After the Ark Season 3 - Eastern Federation",
        "group": "After the Ark Season 3 - Eastern Federation",
        "plays": 10,
        "activeUsers": 2,
        "screenPageViews": 25,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 49,
        "title": "Solar Impact",
        "group": "Solar Impact",
        "plays": 9,
        "activeUsers": 4,
        "screenPageViews": 20,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "rank": 50,
        "title": "The Librarians: The Next Chapter Season 2 Aug 2nd on TNT",
        "group": "The Librarians: The Next Chapter Season 2 Aug 2nd on TNT",
        "plays": 9,
        "activeUsers": 8,
        "screenPageViews": 40,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026"
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
    "period": "Historical context checked Sep 28, 2026",
    "note": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "status": "stale_preserved_no_fresh_pull",
    "staleNote": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed."
  },
  "appUsage": {
    "note": "Archived Apr/Jul 2026 blocks (not current, not rendered). Current figures are in scorecardGroups.",
    "archive": {
      "week Apr 13-Apr 19, 2026": {
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
      "week Jul 20-Jul 26, 2026": {
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
      "week Jul 27-Aug 2, 2026": {
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
    }
  },
  "platformTime": {
    "launchBaseline": {
      "range": "Apr 13-Apr 19, 2026",
      "activeUsers": 6862.0,
      "sessions": 11450.0,
      "engagedSessions": 7472.0,
      "engagementRate": 65.25764192139738,
      "totalEngagementSeconds": 13146012.0,
      "totalEngagementHours": 3651.67,
      "avgEngagedMinutesPerUser": 31.929495773826876,
      "avgEngagedMinutesPerSession": 19.13538864628821,
      "ga4AverageSessionMinutes": 0,
      "platformBreakout": [],
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
      "newUsers": 5973.0,
      "screenPageViews": 35021.0,
      "eventCount": 692838.0,
      "userEngagementDuration": 13146012.0
    },
    "previousWeek": {
      "range": "Oct 19-Oct 25, 2026",
      "activeUsers": 2535.0,
      "sessions": 6418.0,
      "engagedSessions": 5219.0,
      "engagementRate": 81.3181676534746,
      "totalEngagementSeconds": 16912231.0,
      "totalEngagementHours": 4697.841944444444,
      "avgEngagedMinutesPerUser": 111.19152531229454,
      "avgEngagedMinutesPerSession": 43.91874675392126,
      "ga4AverageSessionMinutes": 51.71612465050643,
      "platformBreakout": [
        {
          "platform": "web",
          "activeUsers": 1258.0,
          "sessions": 3895.0,
          "engagedSessions": 3162.0,
          "screenPageViews": 18782.0,
          "userEngagementDuration": 9568170.0,
          "avgEngagedMinutesPerUser": 126.76430842607313,
          "avgEngagedMinutesPerSession": 40.94210526315789
        },
        {
          "platform": "iOS",
          "activeUsers": 763.0,
          "sessions": 1408.0,
          "engagedSessions": 1118.0,
          "screenPageViews": 5807.0,
          "userEngagementDuration": 3820251.0,
          "avgEngagedMinutesPerUser": 83.44803407601573,
          "avgEngagedMinutesPerSession": 45.22077414772727
        },
        {
          "platform": "Android",
          "activeUsers": 572.0,
          "sessions": 1338.0,
          "engagedSessions": 1053.0,
          "screenPageViews": 5592.0,
          "userEngagementDuration": 3530890.0,
          "avgEngagedMinutesPerUser": 102.88141025641025,
          "avgEngagedMinutesPerSession": 43.982187344294964
        }
      ],
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
      "status": "fresh",
      "newUsers": 569.0,
      "screenPageViews": 29773.0,
      "eventCount": 837412.0,
      "userEngagementDuration": 16912231.0,
      "breakoutNote": "Property-wide platform diagnostics include acquisition traffic; not the filtered headline."
    },
    "currentWeek": {
      "range": "Oct 26-Nov 1, 2026",
      "activeUsers": 2487.0,
      "sessions": 6167.0,
      "engagedSessions": 5154.0,
      "engagementRate": 83.57386087238527,
      "totalEngagementSeconds": 16126002.0,
      "totalEngagementHours": 4479.445,
      "avgEngagedMinutesPerUser": 108.06863691194211,
      "avgEngagedMinutesPerSession": 43.58143343603049,
      "ga4AverageSessionMinutes": 51.29167352296947,
      "platformBreakout": [
        {
          "platform": "web",
          "activeUsers": 1257.0,
          "sessions": 3619.0,
          "engagedSessions": 3044.0,
          "screenPageViews": 17890.0,
          "userEngagementDuration": 9250667.0,
          "avgEngagedMinutesPerUser": 122.65535666931848,
          "avgEngagedMinutesPerSession": 42.60231647784839
        },
        {
          "platform": "iOS",
          "activeUsers": 699.0,
          "sessions": 1357.0,
          "engagedSessions": 1079.0,
          "screenPageViews": 5886.0,
          "userEngagementDuration": 3719236.0,
          "avgEngagedMinutesPerUser": 88.67992370052457,
          "avgEngagedMinutesPerSession": 45.67963645295996
        },
        {
          "platform": "Android",
          "activeUsers": 610.0,
          "sessions": 1299.0,
          "engagedSessions": 1045.0,
          "screenPageViews": 5441.0,
          "userEngagementDuration": 3159945.0,
          "avgEngagedMinutesPerUser": 86.33729508196721,
          "avgEngagedMinutesPerSession": 40.5433025404157
        }
      ],
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
      "status": "fresh",
      "newUsers": 628.0,
      "screenPageViews": 28767.0,
      "eventCount": 798468.0,
      "userEngagementDuration": 16126002.0,
      "breakoutNote": "Property-wide platform diagnostics include acquisition traffic; not the filtered headline."
    }
  },
  "acquisitionSummary": {
    "archive": {
      "week Apr 13-Apr 19, 2026": {
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
      "week Jul 20-Jul 26, 2026": {
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
      "week Jul 27-Aug 2, 2026": {
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
    "note": "Archived Apr/Jul 2026 blocks (not current, not rendered). Current figures are in scorecardGroups."
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
      "range": "Oct 19-Oct 25, 2026",
      "viewingEventUsers": 870,
      "videoStartUsers": 870.0,
      "videoStartEvents": 10887.0,
      "videoPlayUsers": 263.0,
      "videoPlayEvents": 14713.0,
      "videoCompleteUsers": 187.0,
      "videoCompleteEvents": 3118.0,
      "onDemandStartUsers": 554.0,
      "onDemandStartEvents": 7804,
      "liveChannelViewers": 377.0,
      "livePlayEvents": 5044.0,
      "adRequestEvents": 35501.0
    },
    "currentWeek": {
      "range": "Oct 26-Nov 1, 2026",
      "viewingEventUsers": 836,
      "videoStartUsers": 836.0,
      "videoStartEvents": 10373.0,
      "videoPlayUsers": 252.0,
      "videoPlayEvents": 10787.0,
      "videoCompleteUsers": 192.0,
      "videoCompleteEvents": 2743.0,
      "onDemandStartUsers": 558.0,
      "onDemandStartEvents": 6838,
      "liveChannelViewers": 371.0,
      "livePlayEvents": 5568.0,
      "adRequestEvents": 26105.0
    },
    "fieldNotes": {
      "onDemandStartEvents": "GA4 video_start event count, live/FAST channels excluded (Oct 27 fix: previously held an inflated mixed-event count)."
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
          "baseline": 6862.0,
          "launchBaseline": 6862.0,
          "previousWeek": 2535.0,
          "current": 2487.0,
          "deltaPct": -1.8934911242603552,
          "deltaVsLaunchPct": -63.75692218012241,
          "deltaVsPreviousPct": -1.8934911242603552,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "currentWeek": 2487.0,
          "previous": 2535.0,
          "changePct": -1.8934911242603552,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": -63.75692218012241,
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": -4375.0,
          "deltaVsPreviousAbsolute": -48.0,
          "comparisonUnit": "percent"
        },
        {
          "key": "platformSessions",
          "label": "Platform sessions",
          "baseline": 11450.0,
          "launchBaseline": 11450.0,
          "previousWeek": 6418.0,
          "current": 6167.0,
          "deltaPct": -3.9108756622000627,
          "deltaVsLaunchPct": -46.13973799126638,
          "deltaVsPreviousPct": -3.9108756622000627,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "currentWeek": 6167.0,
          "previous": 6418.0,
          "changePct": -3.9108756622000627,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": -46.13973799126638,
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": -5283.0,
          "deltaVsPreviousAbsolute": -251.0,
          "comparisonUnit": "percent"
        },
        {
          "key": "viewingEventUsers",
          "label": "Viewing event users",
          "baseline": 1152.0,
          "launchBaseline": 1152.0,
          "previousWeek": 870,
          "current": 836,
          "deltaPct": -3.9080459770114944,
          "deltaVsLaunchPct": -27.430555555555557,
          "deltaVsPreviousPct": -3.9080459770114944,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered a video_start event (on-demand or live) in the week. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Oct 26-Nov 1, 2026",
          "previous": 870,
          "currentWeek": 836,
          "changePct": -3.9080459770114944,
          "deltaVsBaselinePct": -27.430555555555557,
          "direction": "down",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Users who triggered a video_start event (on-demand or live) in the week.",
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": -316.0,
          "deltaVsPreviousAbsolute": -34,
          "comparisonUnit": "percent"
        },
        {
          "key": "totalEngagementHours",
          "label": "Total engaged hours",
          "baseline": 3651.67,
          "launchBaseline": 3651.67,
          "previousWeek": 4697.841944444444,
          "current": 4479.445,
          "deltaPct": -4.648878081194615,
          "deltaVsLaunchPct": 22.668395556005873,
          "deltaVsPreviousPct": -4.648878081194615,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "currentWeek": 4479.445,
          "previous": 4697.841944444444,
          "changePct": -4.648878081194615,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": 22.668395556005873,
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": 827.7749999999996,
          "deltaVsPreviousAbsolute": -218.39694444444467,
          "comparisonUnit": "percent"
        },
        {
          "key": "avgEngagedMinutesPerUser",
          "label": "Avg time per user",
          "baseline": 31.929495773826876,
          "launchBaseline": 31.929495773826876,
          "previousWeek": 111.19152531229454,
          "current": 108.06863691194211,
          "deltaPct": -2.8085669223274308,
          "deltaVsLaunchPct": 238.4602051891083,
          "deltaVsPreviousPct": -2.8085669223274308,
          "deltaType": "percent",
          "format": "minutes",
          "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "currentWeek": 108.06863691194211,
          "previous": 111.19152531229454,
          "changePct": -2.8085669223274308,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": 238.4602051891083,
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": 76.13914113811524,
          "deltaVsPreviousAbsolute": -3.122888400352437,
          "comparisonUnit": "percent"
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
          "baseline": 1709.0,
          "launchBaseline": 1709.0,
          "previousWeek": 1335,
          "current": 1309,
          "deltaPct": -1.947565543071161,
          "deltaVsLaunchPct": -23.405500292568753,
          "deltaVsPreviousPct": -1.947565543071161,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 active users on platform = Android + iOS (summed; small overlap possible). Internal GA4 pull, property 497892271.",
          "dataPeriod": "Oct 26-Nov 1, 2026",
          "previous": 1335,
          "currentWeek": 1309,
          "changePct": -1.947565543071161,
          "deltaVsBaselinePct": -23.405500292568753,
          "direction": "down",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "GA4 active users on platform = Android + iOS (summed; small overlap possible).",
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": -400.0,
          "deltaVsPreviousAbsolute": -26,
          "comparisonUnit": "percent"
        },
        {
          "key": "appSessions",
          "label": "App stream sessions",
          "baseline": 3319.0,
          "launchBaseline": 3319.0,
          "previousWeek": 2746,
          "current": 2656,
          "deltaPct": -3.2774945375091042,
          "deltaVsLaunchPct": -19.97589635432359,
          "deltaVsPreviousPct": -3.2774945375091042,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 sessions on platform = Android + iOS. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Oct 26-Nov 1, 2026",
          "previous": 2746,
          "currentWeek": 2656,
          "changePct": -3.2774945375091042,
          "deltaVsBaselinePct": -19.97589635432359,
          "direction": "down",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "GA4 sessions on platform = Android + iOS.",
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": -663.0,
          "deltaVsPreviousAbsolute": -90,
          "comparisonUnit": "percent"
        },
        {
          "key": "appEngagementRate",
          "label": "App stream engagement rate",
          "baseline": 81.22928592949684,
          "launchBaseline": 81.22928592949684,
          "previousWeek": 79.06045156591406,
          "current": 79.96987951807229,
          "deltaPct": 1.1502944065529646,
          "deltaVsLaunchPct": -1.5504339315719884,
          "deltaVsPreviousPct": 1.1502944065529646,
          "deltaType": "points",
          "format": "percent",
          "context": "Engaged sessions / sessions on platform = Android + iOS, in percent. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Oct 26-Nov 1, 2026",
          "previous": 79.06045156591406,
          "currentWeek": 79.96987951807229,
          "changePct": 1.1502944065529646,
          "deltaVsBaselinePct": -1.5504339315719884,
          "direction": "up",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Engaged sessions / sessions on platform = Android + iOS, in percent.",
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": -1.2594064114245498,
          "deltaVsPreviousAbsolute": 0.9094279521582251,
          "comparisonUnit": "percentage_points"
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
          "baseline": 1152.0,
          "launchBaseline": 1152.0,
          "previousWeek": 870,
          "current": 836,
          "deltaPct": -3.9080459770114944,
          "deltaVsLaunchPct": -27.430555555555557,
          "deltaVsPreviousPct": -3.9080459770114944,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered a video_start event (on-demand or live) in the week. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Oct 26-Nov 1, 2026",
          "previous": 870,
          "currentWeek": 836,
          "changePct": -3.9080459770114944,
          "deltaVsBaselinePct": -27.430555555555557,
          "direction": "down",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Users who triggered a video_start event (on-demand or live) in the week.",
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": -316.0,
          "deltaVsPreviousAbsolute": -34,
          "comparisonUnit": "percent"
        },
        {
          "key": "onDemandStartUsers",
          "label": "On-demand start users",
          "baseline": 665.0,
          "launchBaseline": 665.0,
          "previousWeek": 554.0,
          "current": 558.0,
          "deltaPct": 0.7220216606498195,
          "deltaVsLaunchPct": -16.090225563909772,
          "deltaVsPreviousPct": 0.7220216606498195,
          "deltaType": "percent",
          "format": "number",
          "context": "Users with a video_start event where channel_title is NOT a live/FAST channel. Live/FAST channels come from live_channels.json (59 names). Internal GA4 pull, property 497892271.",
          "dataPeriod": "Oct 26-Nov 1, 2026",
          "previous": 554.0,
          "currentWeek": 558.0,
          "changePct": 0.7220216606498195,
          "deltaVsBaselinePct": -16.090225563909772,
          "direction": "up",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Users with a video_start event where channel_title is NOT a live/FAST channel.",
          "launchBaselineOldDefinition": 1069,
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": -107.0,
          "deltaVsPreviousAbsolute": 4.0,
          "comparisonUnit": "percent"
        },
        {
          "key": "liveChannelViewers",
          "label": "Live channel viewers",
          "baseline": 453.0,
          "launchBaseline": 453.0,
          "previousWeek": 377.0,
          "current": 371.0,
          "deltaPct": -1.5915119363395225,
          "deltaVsLaunchPct": -18.101545253863137,
          "deltaVsPreviousPct": -1.5915119363395225,
          "deltaType": "percent",
          "format": "number",
          "context": "Users with a video_start event on a live/FAST channel title. Live/FAST channels come from live_channels.json (59 names). Internal GA4 pull, property 497892271.",
          "dataPeriod": "Oct 26-Nov 1, 2026",
          "previous": 377.0,
          "currentWeek": 371.0,
          "changePct": -1.5915119363395225,
          "deltaVsBaselinePct": -18.101545253863137,
          "direction": "down",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Users with a video_start event on a live/FAST channel title.",
          "launchBaselineOldDefinition": 121,
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": -82.0,
          "deltaVsPreviousAbsolute": -6.0,
          "comparisonUnit": "percent"
        },
        {
          "key": "videoCompleteUsers",
          "label": "Video complete users",
          "baseline": 219.0,
          "launchBaseline": 219.0,
          "previousWeek": 187,
          "current": 192,
          "deltaPct": 2.6737967914438503,
          "deltaVsLaunchPct": -12.32876712328767,
          "deltaVsPreviousPct": 2.6737967914438503,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered a video_complete event in the week. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Oct 26-Nov 1, 2026",
          "previous": 187,
          "currentWeek": 192,
          "changePct": 2.6737967914438503,
          "deltaVsBaselinePct": -12.32876712328767,
          "direction": "up",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "Users who triggered a video_complete event in the week.",
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": -27.0,
          "deltaVsPreviousAbsolute": 5,
          "comparisonUnit": "percent"
        },
        {
          "key": "livePlayEvents",
          "label": "Live play events",
          "baseline": 11973.0,
          "launchBaseline": 11973.0,
          "previousWeek": 5044.0,
          "current": 5568.0,
          "deltaPct": 10.388580491673276,
          "deltaVsLaunchPct": -53.49536457028313,
          "deltaVsPreviousPct": 10.388580491673276,
          "deltaType": "percent",
          "format": "number",
          "context": "play + video_play + video_start event counts on live/FAST channel titles. Live/FAST channels come from live_channels.json (59 names). Internal GA4 pull, property 497892271. Launch comparison uses the same roster definition (Apr 13-19, 2026 re-pulled Sep 8, 2026); at launch the app fired far more 'play' events per live session, so video_start (4,039 launch vs 3,535 now) is the steadier like-for-like signal.",
          "dataPeriod": "Oct 26-Nov 1, 2026",
          "previous": 5044.0,
          "currentWeek": 5568.0,
          "changePct": 10.388580491673276,
          "deltaVsBaselinePct": -53.49536457028313,
          "direction": "up",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "play + video_play + video_start event counts on live/FAST channel titles.",
          "launchBaselineOldDefinition": 3952,
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": -6405.0,
          "deltaVsPreviousAbsolute": 524.0,
          "comparisonUnit": "percent"
        },
        {
          "key": "adRequestEvents",
          "label": "Ad request events",
          "baseline": 10589.0,
          "launchBaseline": 10589.0,
          "previousWeek": 35501,
          "current": 26105,
          "deltaPct": -26.466860088448215,
          "deltaVsLaunchPct": 146.52941731986022,
          "deltaVsPreviousPct": -26.466860088448215,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 ads_request events = ElectricNOW IN-APP ad requests, not paid-campaign metrics. Internal GA4 pull, property 497892271.",
          "dataPeriod": "Oct 26-Nov 1, 2026",
          "previous": 35501,
          "currentWeek": 26105,
          "changePct": -26.466860088448215,
          "deltaVsBaselinePct": 146.52941731986022,
          "direction": "down",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "definition": "GA4 ads_request events = ElectricNOW IN-APP ad requests, not paid-campaign metrics.",
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": 15516.0,
          "deltaVsPreviousAbsolute": -9396,
          "comparisonUnit": "percent"
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
          "baseline": 31.929495773826876,
          "launchBaseline": 31.929495773826876,
          "previousWeek": 111.19152531229454,
          "current": 108.06863691194211,
          "deltaPct": -2.8085669223274308,
          "deltaVsLaunchPct": 238.4602051891083,
          "deltaVsPreviousPct": -2.8085669223274308,
          "deltaType": "percent",
          "format": "minutes",
          "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "currentWeek": 108.06863691194211,
          "previous": 111.19152531229454,
          "changePct": -2.8085669223274308,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": 238.4602051891083,
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": 76.13914113811524,
          "deltaVsPreviousAbsolute": -3.122888400352437,
          "comparisonUnit": "percent"
        },
        {
          "key": "avgEngagedMinutesPerSession",
          "label": "Avg time per session",
          "baseline": 19.13538864628821,
          "launchBaseline": 19.13538864628821,
          "previousWeek": 43.91874675392126,
          "current": 43.58143343603049,
          "deltaPct": -0.7680394884233762,
          "deltaVsLaunchPct": 127.75306131283726,
          "deltaVsPreviousPct": -0.7680394884233762,
          "deltaType": "percent",
          "format": "minutes",
          "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "currentWeek": 43.58143343603049,
          "previous": 43.91874675392126,
          "changePct": -0.7680394884233762,
          "deltaVsBaselinePct": 127.75306131283726,
          "direction": "down",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": 24.446044789742277,
          "deltaVsPreviousAbsolute": -0.337313317890775,
          "comparisonUnit": "percent"
        },
        {
          "key": "totalEngagementHours",
          "label": "Total engaged hours",
          "baseline": 3651.67,
          "launchBaseline": 3651.67,
          "previousWeek": 4697.841944444444,
          "current": 4479.445,
          "deltaPct": -4.648878081194615,
          "deltaVsLaunchPct": 22.668395556005873,
          "deltaVsPreviousPct": -4.648878081194615,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Oct 26-Nov 1, 2026",
          "comparisonPeriod": "Oct 19-Oct 25, 2026",
          "currentWeek": 4479.445,
          "previous": 4697.841944444444,
          "changePct": -4.648878081194615,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271",
          "deltaVsBaselinePct": 22.668395556005873,
          "launchBaselineDefinitionNote": "Launch week re-pulled Sep 20 using the same metric definition as current week.",
          "baselinePeriod": "Apr 13-Apr 19, 2026",
          "deltaVsLaunchAbsolute": 827.7749999999996,
          "deltaVsPreviousAbsolute": -218.39694444444467,
          "comparisonUnit": "percent"
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
      "range": "Oct 19-Oct 25, 2026",
      "rows": [
        {
          "surface": "iOS / Apple app stream",
          "streamName": "ElectricNow",
          "streamId": "12982344897",
          "platform": "iOS",
          "activeUsers": 763,
          "sessions": 1408,
          "engagedSessions": 1118,
          "eventCount": 44233,
          "engagementRate": 79.4034090909091,
          "avgEngagedMinutesPerUser": 83.44803407601573,
          "avgEngagedMinutesPerSession": 45.220774147727276
        },
        {
          "surface": "Roku",
          "streamName": "electricnow-roku",
          "streamId": "13096428368",
          "platform": "web",
          "activeUsers": 729,
          "sessions": 2575,
          "engagedSessions": 2203,
          "eventCount": 681790,
          "engagementRate": 85.55339805825243,
          "avgEngagedMinutesPerUser": 189.7647462277092,
          "avgEngagedMinutesPerSession": 53.723689320388345
        },
        {
          "surface": "Web",
          "streamName": "electricnow-web",
          "streamId": "13090831762",
          "platform": "web",
          "activeUsers": 445,
          "sessions": 1257,
          "engagedSessions": 961,
          "eventCount": 73610,
          "engagementRate": 76.45186953062849,
          "avgEngagedMinutesPerUser": 47.38112359550562,
          "avgEngagedMinutesPerSession": 16.773747016706444
        },
        {
          "surface": "Android mobile app",
          "streamName": "ElectricNOW",
          "streamId": "12950551103",
          "platform": "Android",
          "activeUsers": 419,
          "sessions": 954,
          "engagedSessions": 696,
          "eventCount": 23536,
          "engagementRate": 72.95597484276729,
          "avgEngagedMinutesPerUser": 49.76774065234686,
          "avgEngagedMinutesPerSession": 21.85815863032844
        },
        {
          "surface": "Android TV / CTV",
          "streamName": "ElectricNOW tv",
          "streamId": "13118400722",
          "platform": "Android",
          "activeUsers": 153,
          "sessions": 382,
          "engagedSessions": 356,
          "eventCount": 15244,
          "engagementRate": 93.19371727748691,
          "avgEngagedMinutesPerUser": 248.33649237472767,
          "avgEngagedMinutesPerSession": 99.46461605584642
        },
        {
          "surface": "Vizio",
          "streamName": "electricnow-vizio",
          "streamId": "15383591472",
          "platform": "web",
          "activeUsers": 12,
          "sessions": 31,
          "engagedSessions": 3,
          "eventCount": 146,
          "engagementRate": 9.67741935483871,
          "avgEngagedMinutesPerUser": 3.8666666666666667,
          "avgEngagedMinutesPerSession": 1.4967741935483871
        },
        {
          "surface": "Samsung / Tizen",
          "streamName": "electricnow-tizen",
          "streamId": "12976057441",
          "platform": "web",
          "activeUsers": 3,
          "sessions": 4,
          "engagedSessions": 0,
          "eventCount": 22,
          "engagementRate": 0.0,
          "avgEngagedMinutesPerUser": 0.0,
          "avgEngagedMinutesPerSession": 0.0
        },
        {
          "surface": "LG / webOS",
          "streamName": "electricnow-webos",
          "streamId": "12976053175",
          "platform": "web",
          "activeUsers": 0,
          "sessions": 4,
          "engagedSessions": 0,
          "eventCount": 4,
          "engagementRate": 0.0,
          "avgEngagedMinutesPerUser": 0,
          "avgEngagedMinutesPerSession": 0.0
        }
      ],
      "note": "Internal GA4 pull, property 497892271, Oct 19-Oct 25, 2026. Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces.",
      "status": "fresh"
    },
    "currentWeek": {
      "range": "Oct 26-Nov 1, 2026",
      "rows": [
        {
          "surface": "Roku",
          "streamName": "electricnow-roku",
          "streamId": "13096428368",
          "platform": "web",
          "activeUsers": 715,
          "sessions": 2429,
          "engagedSessions": 2123,
          "eventCount": 663585,
          "engagementRate": 87.40222313709344,
          "avgEngagedMinutesPerUser": 191.67832167832168,
          "avgEngagedMinutesPerSession": 56.42239604775628
        },
        {
          "surface": "iOS / Apple app stream",
          "streamName": "ElectricNow",
          "streamId": "12982344897",
          "platform": "iOS",
          "activeUsers": 699,
          "sessions": 1357,
          "engagedSessions": 1079,
          "eventCount": 42407,
          "engagementRate": 79.51363301400147,
          "avgEngagedMinutesPerUser": 88.67992370052455,
          "avgEngagedMinutesPerSession": 45.67963645295996
        },
        {
          "surface": "Web",
          "streamName": "electricnow-web",
          "streamId": "13090831762",
          "platform": "web",
          "activeUsers": 479,
          "sessions": 1164,
          "engagedSessions": 886,
          "eventCount": 60673,
          "engagementRate": 76.1168384879725,
          "avgEngagedMinutesPerUser": 35.2097773138483,
          "avgEngagedMinutesPerSession": 14.489246849942727
        },
        {
          "surface": "Android mobile app",
          "streamName": "ElectricNOW",
          "streamId": "12950551103",
          "platform": "Android",
          "activeUsers": 468,
          "sessions": 983,
          "engagedSessions": 754,
          "eventCount": 22375,
          "engagementRate": 76.70396744659207,
          "avgEngagedMinutesPerUser": 41.96663105413106,
          "avgEngagedMinutesPerSession": 19.980044082739912
        },
        {
          "surface": "Android TV / CTV",
          "streamName": "ElectricNOW tv",
          "streamId": "13118400722",
          "platform": "Android",
          "activeUsers": 142,
          "sessions": 317,
          "engagedSessions": 291,
          "eventCount": 10550,
          "engagementRate": 91.7981072555205,
          "avgEngagedMinutesPerUser": 232.57300469483567,
          "avgEngagedMinutesPerSession": 104.18096740273397
        },
        {
          "surface": "Vizio",
          "streamName": "electricnow-vizio",
          "streamId": "15383591472",
          "platform": "web",
          "activeUsers": 10,
          "sessions": 17,
          "engagedSessions": 4,
          "eventCount": 192,
          "engagementRate": 23.52941176470588,
          "avgEngagedMinutesPerUser": 26.23,
          "avgEngagedMinutesPerSession": 15.429411764705883
        },
        {
          "surface": "LG / webOS",
          "streamName": "electricnow-webos",
          "streamId": "12976053175",
          "platform": "web",
          "activeUsers": 1,
          "sessions": 8,
          "engagedSessions": 0,
          "eventCount": 12,
          "engagementRate": 0.0,
          "avgEngagedMinutesPerUser": 0.0,
          "avgEngagedMinutesPerSession": 0.0
        }
      ],
      "note": "Internal GA4 pull, property 497892271, Oct 26-Nov 1, 2026. Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces.",
      "status": "fresh"
    }
  },
  "platformAudience": {
    "launchBaseline": {
      "range": "Apr 13-Apr 19, 2026",
      "platformActiveUsers": 6862.0,
      "platformSessions": 11450.0,
      "platformEngagedSessions": 7472.0,
      "platformEventCount": 692838.0,
      "platformEngagementRate": 65.25764192139738,
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "previousWeek": {
      "range": "Oct 19-Oct 25, 2026",
      "platformActiveUsers": 2535.0,
      "platformSessions": 6418.0,
      "platformEngagedSessions": 5219.0,
      "platformEventCount": 837412.0,
      "platformEngagementRate": 81.3181676534746,
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "currentWeek": {
      "range": "Oct 26-Nov 1, 2026",
      "platformActiveUsers": 2487.0,
      "platformSessions": 6167.0,
      "platformEngagedSessions": 5154.0,
      "platformEventCount": 798468.0,
      "platformEngagementRate": 83.57386087238527,
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    }
  },
  "weeklyTrend": {
    "period": "Oct 26-Nov 1, 2026",
    "previousPeriod": "Oct 19-Oct 25, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "date": "2026-10-26",
        "sessions": 908,
        "activeUsers": 521
      },
      {
        "date": "2026-10-27",
        "sessions": 874,
        "activeUsers": 492
      },
      {
        "date": "2026-10-28",
        "sessions": 882,
        "activeUsers": 487
      },
      {
        "date": "2026-10-29",
        "sessions": 868,
        "activeUsers": 463
      },
      {
        "date": "2026-10-30",
        "sessions": 836,
        "activeUsers": 458
      },
      {
        "date": "2026-10-31",
        "sessions": 920,
        "activeUsers": 504
      },
      {
        "date": "2026-11-01",
        "sessions": 1138,
        "activeUsers": 624
      }
    ],
    "previousRows": [
      {
        "date": "2026-10-19",
        "sessions": 1014,
        "activeUsers": 544
      },
      {
        "date": "2026-10-20",
        "sessions": 943,
        "activeUsers": 532
      },
      {
        "date": "2026-10-21",
        "sessions": 931,
        "activeUsers": 507
      },
      {
        "date": "2026-10-22",
        "sessions": 988,
        "activeUsers": 550
      },
      {
        "date": "2026-10-23",
        "sessions": 949,
        "activeUsers": 485
      },
      {
        "date": "2026-10-24",
        "sessions": 957,
        "activeUsers": 533
      },
      {
        "date": "2026-10-25",
        "sessions": 980,
        "activeUsers": 539
      }
    ],
    "note": "GA4 property 497892271 only. Landing-page traffic is treated as acquisition only, not platform audience. Revised by the Oct 27 GA4 re-pull (Oct 25 was preliminary in the first pull)."
  },
  "monthlyTrend": {
    "period": "Oct 5-Nov 1, 2026",
    "previousPeriod": "Sep 7-Oct 4, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "activeUsers": 597,
        "sessions": 1056,
        "engagedSessions": 823,
        "screenPageViews": 4716,
        "eventCount": 136131,
        "userEngagementDuration": 2562396,
        "totalEngagementHours": 711.7766666666666,
        "date": "2026-10-05",
        "label": "Oct 5"
      },
      {
        "activeUsers": 619,
        "sessions": 1117,
        "engagedSessions": 866,
        "screenPageViews": 4997,
        "eventCount": 133978,
        "userEngagementDuration": 2586497,
        "totalEngagementHours": 718.4713888888889,
        "date": "2026-10-06",
        "label": "Oct 6"
      },
      {
        "activeUsers": 674,
        "sessions": 1152,
        "engagedSessions": 914,
        "screenPageViews": 5148,
        "eventCount": 127662,
        "userEngagementDuration": 2446537,
        "totalEngagementHours": 679.5936111111112,
        "date": "2026-10-07",
        "label": "Oct 7"
      },
      {
        "activeUsers": 669,
        "sessions": 1202,
        "engagedSessions": 996,
        "screenPageViews": 5870,
        "eventCount": 132309,
        "userEngagementDuration": 2599119,
        "totalEngagementHours": 721.9775,
        "date": "2026-10-08",
        "label": "Oct 8"
      },
      {
        "activeUsers": 562,
        "sessions": 1044,
        "engagedSessions": 850,
        "screenPageViews": 5143,
        "eventCount": 131856,
        "userEngagementDuration": 2502543,
        "totalEngagementHours": 695.1508333333334,
        "date": "2026-10-09",
        "label": "Oct 9"
      },
      {
        "activeUsers": 603,
        "sessions": 1057,
        "engagedSessions": 865,
        "screenPageViews": 4858,
        "eventCount": 134888,
        "userEngagementDuration": 2725909,
        "totalEngagementHours": 757.1969444444444,
        "date": "2026-10-10",
        "label": "Oct 10"
      },
      {
        "activeUsers": 637,
        "sessions": 1111,
        "engagedSessions": 908,
        "screenPageViews": 4794,
        "eventCount": 138781,
        "userEngagementDuration": 3011048,
        "totalEngagementHours": 836.4022222222222,
        "date": "2026-10-11",
        "label": "Oct 11"
      },
      {
        "activeUsers": 597,
        "sessions": 1124,
        "engagedSessions": 902,
        "screenPageViews": 5281,
        "eventCount": 129618,
        "userEngagementDuration": 2533634,
        "totalEngagementHours": 703.7872222222222,
        "date": "2026-10-12",
        "label": "Oct 12"
      },
      {
        "activeUsers": 629,
        "sessions": 1113,
        "engagedSessions": 881,
        "screenPageViews": 5024,
        "eventCount": 129791,
        "userEngagementDuration": 2466890,
        "totalEngagementHours": 685.2472222222223,
        "date": "2026-10-13",
        "label": "Oct 13"
      },
      {
        "activeUsers": 669,
        "sessions": 1253,
        "engagedSessions": 1028,
        "screenPageViews": 6002,
        "eventCount": 127227,
        "userEngagementDuration": 2473440,
        "totalEngagementHours": 687.0666666666667,
        "date": "2026-10-14",
        "label": "Oct 14"
      },
      {
        "activeUsers": 656,
        "sessions": 1219,
        "engagedSessions": 1001,
        "screenPageViews": 5737,
        "eventCount": 132482,
        "userEngagementDuration": 2681598,
        "totalEngagementHours": 744.8883333333333,
        "date": "2026-10-15",
        "label": "Oct 15"
      },
      {
        "activeUsers": 623,
        "sessions": 1174,
        "engagedSessions": 966,
        "screenPageViews": 5495,
        "eventCount": 129537,
        "userEngagementDuration": 2578217,
        "totalEngagementHours": 716.1713888888889,
        "date": "2026-10-16",
        "label": "Oct 16"
      },
      {
        "activeUsers": 552,
        "sessions": 1030,
        "engagedSessions": 858,
        "screenPageViews": 4648,
        "eventCount": 132755,
        "userEngagementDuration": 2624271,
        "totalEngagementHours": 728.9641666666666,
        "date": "2026-10-17",
        "label": "Oct 17"
      },
      {
        "activeUsers": 588,
        "sessions": 1067,
        "engagedSessions": 885,
        "screenPageViews": 4873,
        "eventCount": 134071,
        "userEngagementDuration": 2702976,
        "totalEngagementHours": 750.8266666666667,
        "date": "2026-10-18",
        "label": "Oct 18"
      },
      {
        "activeUsers": 544,
        "sessions": 1014,
        "engagedSessions": 817,
        "screenPageViews": 4995,
        "eventCount": 128007,
        "userEngagementDuration": 2430400,
        "totalEngagementHours": 675.1111111111111,
        "date": "2026-10-19",
        "label": "Oct 19"
      },
      {
        "activeUsers": 532,
        "sessions": 943,
        "engagedSessions": 748,
        "screenPageViews": 4291,
        "eventCount": 116147,
        "userEngagementDuration": 2419644,
        "totalEngagementHours": 672.1233333333333,
        "date": "2026-10-20",
        "label": "Oct 20"
      },
      {
        "activeUsers": 507,
        "sessions": 931,
        "engagedSessions": 779,
        "screenPageViews": 4234,
        "eventCount": 106976,
        "userEngagementDuration": 2173949,
        "totalEngagementHours": 603.8747222222222,
        "date": "2026-10-21",
        "label": "Oct 21"
      },
      {
        "activeUsers": 550,
        "sessions": 988,
        "engagedSessions": 787,
        "screenPageViews": 4302,
        "eventCount": 115515,
        "userEngagementDuration": 2248025,
        "totalEngagementHours": 624.4513888888889,
        "date": "2026-10-22",
        "label": "Oct 22"
      },
      {
        "activeUsers": 485,
        "sessions": 949,
        "engagedSessions": 782,
        "screenPageViews": 4107,
        "eventCount": 120122,
        "userEngagementDuration": 2331385,
        "totalEngagementHours": 647.6069444444445,
        "date": "2026-10-23",
        "label": "Oct 23"
      },
      {
        "activeUsers": 533,
        "sessions": 957,
        "engagedSessions": 752,
        "screenPageViews": 4267,
        "eventCount": 127442,
        "userEngagementDuration": 2619450,
        "totalEngagementHours": 727.625,
        "date": "2026-10-24",
        "label": "Oct 24"
      },
      {
        "activeUsers": 539,
        "sessions": 980,
        "engagedSessions": 797,
        "screenPageViews": 3985,
        "eventCount": 124376,
        "userEngagementDuration": 2696458,
        "totalEngagementHours": 749.0161111111111,
        "date": "2026-10-25",
        "label": "Oct 25"
      },
      {
        "activeUsers": 521,
        "sessions": 908,
        "engagedSessions": 724,
        "screenPageViews": 3859,
        "eventCount": 104130,
        "userEngagementDuration": 2218631,
        "totalEngagementHours": 616.2863888888888,
        "date": "2026-10-26",
        "label": "Oct 26"
      },
      {
        "activeUsers": 492,
        "sessions": 874,
        "engagedSessions": 722,
        "screenPageViews": 4484,
        "eventCount": 124885,
        "userEngagementDuration": 2448648,
        "totalEngagementHours": 680.18,
        "date": "2026-10-27",
        "label": "Oct 27"
      },
      {
        "activeUsers": 487,
        "sessions": 882,
        "engagedSessions": 714,
        "screenPageViews": 4021,
        "eventCount": 106319,
        "userEngagementDuration": 2251608,
        "totalEngagementHours": 625.4466666666667,
        "date": "2026-10-28",
        "label": "Oct 28"
      },
      {
        "activeUsers": 463,
        "sessions": 868,
        "engagedSessions": 725,
        "screenPageViews": 3795,
        "eventCount": 102528,
        "userEngagementDuration": 2169513,
        "totalEngagementHours": 602.6425,
        "date": "2026-10-29",
        "label": "Oct 29"
      },
      {
        "activeUsers": 458,
        "sessions": 836,
        "engagedSessions": 693,
        "screenPageViews": 3506,
        "eventCount": 112132,
        "userEngagementDuration": 2361997,
        "totalEngagementHours": 656.1102777777778,
        "date": "2026-10-30",
        "label": "Oct 30"
      },
      {
        "activeUsers": 504,
        "sessions": 920,
        "engagedSessions": 752,
        "screenPageViews": 3992,
        "eventCount": 121107,
        "userEngagementDuration": 2172579,
        "totalEngagementHours": 603.4941666666666,
        "date": "2026-10-31",
        "label": "Oct 31"
      },
      {
        "activeUsers": 624,
        "sessions": 1138,
        "engagedSessions": 943,
        "screenPageViews": 5560,
        "eventCount": 128693,
        "userEngagementDuration": 2506872,
        "totalEngagementHours": 696.3533333333334,
        "date": "2026-11-01",
        "label": "Nov 1"
      }
    ],
    "note": "Daily GA4 rows for the latest 28 complete days (Oct 5-Nov 1, 2026); Internal GA4 pull, property 497892271."
  },
  "appSectionUsage": {
    "period": "Oct 26-Nov 1, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "items": [
      {
        "section": "Home / Browse",
        "activeUsers": 2336.0,
        "sessions": 5537.0,
        "eventCount": 70496.0,
        "userEngagementDuration": 811912.0,
        "avgEngagedMinutesPerUser": 5.792751141552511,
        "avgEngagedMinutesPerSession": 2.4438986213954608,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 15362.0,
        "views": 15362.0
      },
      {
        "section": "On Demand / TVOD",
        "activeUsers": 776.0,
        "sessions": 2079.0,
        "eventCount": 7154.0,
        "userEngagementDuration": 66761.0,
        "avgEngagedMinutesPerUser": 1.4338702749140895,
        "avgEngagedMinutesPerSession": 0.5352012185345519,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 5107.0,
        "views": 5107.0
      },
      {
        "section": "Player",
        "activeUsers": 276.0,
        "sessions": 1463.0,
        "eventCount": 34440.0,
        "userEngagementDuration": 2350820.0,
        "avgEngagedMinutesPerUser": 141.95772946859904,
        "avgEngagedMinutesPerSession": 26.78081567555252,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 2211.0,
        "views": 2211.0
      },
      {
        "section": "Live TV",
        "activeUsers": 398.0,
        "sessions": 1754.0,
        "eventCount": 12710.0,
        "userEngagementDuration": 4311385.0,
        "avgEngagedMinutesPerUser": 180.54376046901174,
        "avgEngagedMinutesPerSession": 40.967170277461044,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 1816.0,
        "views": 1816.0
      },
      {
        "section": "Search",
        "activeUsers": 175.0,
        "sessions": 326.0,
        "eventCount": 1482.0,
        "userEngagementDuration": 7474.0,
        "avgEngagedMinutesPerUser": 0.7118095238095238,
        "avgEngagedMinutesPerSession": 0.38210633946830264,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 523.0,
        "views": 523.0
      },
      {
        "section": "Account / Settings",
        "activeUsers": 129.0,
        "sessions": 182.0,
        "eventCount": 752.0,
        "userEngagementDuration": 3483.0,
        "avgEngagedMinutesPerUser": 0.44999999999999996,
        "avgEngagedMinutesPerSession": 0.31895604395604393,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 523.0,
        "views": 523.0
      }
    ],
    "rows": [
      {
        "section": "Home / Browse",
        "activeUsers": 2336.0,
        "sessions": 5537.0,
        "eventCount": 70496.0,
        "userEngagementDuration": 811912.0,
        "avgEngagedMinutesPerUser": 5.792751141552511,
        "avgEngagedMinutesPerSession": 2.4438986213954608,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 15362.0,
        "views": 15362.0
      },
      {
        "section": "On Demand / TVOD",
        "activeUsers": 776.0,
        "sessions": 2079.0,
        "eventCount": 7154.0,
        "userEngagementDuration": 66761.0,
        "avgEngagedMinutesPerUser": 1.4338702749140895,
        "avgEngagedMinutesPerSession": 0.5352012185345519,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 5107.0,
        "views": 5107.0
      },
      {
        "section": "Player",
        "activeUsers": 276.0,
        "sessions": 1463.0,
        "eventCount": 34440.0,
        "userEngagementDuration": 2350820.0,
        "avgEngagedMinutesPerUser": 141.95772946859904,
        "avgEngagedMinutesPerSession": 26.78081567555252,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 2211.0,
        "views": 2211.0
      },
      {
        "section": "Live TV",
        "activeUsers": 398.0,
        "sessions": 1754.0,
        "eventCount": 12710.0,
        "userEngagementDuration": 4311385.0,
        "avgEngagedMinutesPerUser": 180.54376046901174,
        "avgEngagedMinutesPerSession": 40.967170277461044,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 1816.0,
        "views": 1816.0
      },
      {
        "section": "Search",
        "activeUsers": 175.0,
        "sessions": 326.0,
        "eventCount": 1482.0,
        "userEngagementDuration": 7474.0,
        "avgEngagedMinutesPerUser": 0.7118095238095238,
        "avgEngagedMinutesPerSession": 0.38210633946830264,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 523.0,
        "views": 523.0
      },
      {
        "section": "Account / Settings",
        "activeUsers": 129.0,
        "sessions": 182.0,
        "eventCount": 752.0,
        "userEngagementDuration": 3483.0,
        "avgEngagedMinutesPerUser": 0.44999999999999996,
        "avgEngagedMinutesPerSession": 0.31895604395604393,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Oct 26-Nov 1, 2026",
        "definition": "Direct deduplicated grouped-screen query; engaged seconds divided by same-query users/sessions.",
        "note": "activeUsers is the max across grouped screens, not a sum - GA4 users are not additive across screens.",
        "screenPageViews": 523.0,
        "views": 523.0
      }
    ],
    "note": "Grouped from GA4 screen/page names for Oct 26-Nov 1, 2026 (Internal GA4 pull, property 497892271). Landing-page traffic is treated as acquisition, not platform audience. 'items' and 'rows' are kept in sync because different renderer builds read different keys."
  },
  "rokuAppEngagement": {
    "newInstalls": 78.0,
    "uninstalls": 77.0,
    "cumulativeInstalls": 292824.0,
    "avgDailyViewers": 217.0,
    "avgMinutesPerViewer": 90.69,
    "avgMinPerViewer": 90.69,
    "totalHoursStreamed": 2301.0,
    "period": "Oct 25-Oct 31, 2026 (Roku email generated November 2, 2026 at 7:07 AM PST; Roku reports Sun-Sat, one day offset from the dashboard week)",
    "reportPeriod": "Oct 25-Oct 31, 2026",
    "source": "Roku App Engagement email from bdp_noreply@data.roku.com",
    "emailDate": "2026-11-02T15:07:53+00:00",
    "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwDvKLV_nde7SYUl0H8b5z1dAAPKm0PlAADvKLV_nde7SYUl0H8b5z1dAAQXqSA_AAA=",
    "status": "fresh",
    "priorPeriod": {
      "period": "Oct 18-Oct 24, 2026",
      "newInstalls": 102.0,
      "uninstalls": 69.0,
      "cumulativeInstallsToDate": 292746.0,
      "avgDailyViewers": 240.0,
      "avgMinPerViewer": 82.85,
      "totalHoursStreamed": 2323.0
    },
    "note": "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded.",
    "trcExclusionNote": "Roku TRC emails are for the separate Roku live-channel surface outside the ElectricNOW app and are excluded from app/platform usage."
  },
  "visitSummary": {
    "currentWeek": {
      "activeUsers": 2487.0,
      "newUsers": 628.0,
      "sessions": 6167.0,
      "engagedSessions": 5154.0,
      "engagementRate": 83.57386087238527,
      "screenPageViews": 28767.0,
      "eventCount": 798468.0,
      "userEngagementDuration": 16126002.0,
      "totalEngagementHours": 4479.445,
      "avgEngagedMinutesPerUser": 108.06863691194211,
      "avgEngagedMinutesPerSession": 43.58143343603049,
      "range": "Oct 26-Nov 1, 2026",
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "previousWeek": {
      "activeUsers": 2535.0,
      "newUsers": 569.0,
      "sessions": 6418.0,
      "engagedSessions": 5219.0,
      "engagementRate": 81.3181676534746,
      "screenPageViews": 29773.0,
      "eventCount": 837412.0,
      "userEngagementDuration": 16912231.0,
      "totalEngagementHours": 4697.841944444444,
      "avgEngagedMinutesPerUser": 111.19152531229454,
      "avgEngagedMinutesPerSession": 43.91874675392126,
      "range": "Oct 19-Oct 25, 2026",
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "rolling28Current": {
      "activeUsers": 8302,
      "newUsers": 2887,
      "sessions": 27706,
      "engagedSessions": 22538,
      "engagementRate": 81.35,
      "screenPageViews": 131984,
      "eventCount": 3489465,
      "userEngagementDuration": 69544234,
      "totalEngagementHours": 19317.84,
      "avgEngagedMinutesPerUser": 139.61341443828795,
      "avgEngagedMinutesPerSession": 41.83464111263505
    },
    "rolling28Previous": {
      "activeUsers": 10254,
      "newUsers": 3676,
      "sessions": 34174,
      "engagedSessions": 27441,
      "engagementRate": 80.30000000000001,
      "screenPageViews": 172216,
      "eventCount": 3826783,
      "userEngagementDuration": 79753065,
      "totalEngagementHours": 22153.63,
      "avgEngagedMinutesPerUser": 129.62919348546907,
      "avgEngagedMinutesPerSession": 38.89558582548136
    },
    "source": "Internal GA4 pull, property 497892271",
    "period": "Oct 26-Nov 1, 2026",
    "rolling28Period": "Oct 5-Nov 1, 2026",
    "rolling28PreviousPeriod": "Sep 7-Oct 4, 2026",
    "note": "Weekly visits exclude acquisition paths using the same rule as the scorecards. Rolling 28-day visits are property-wide, including acquisition; do not compare the two totals directly.",
    "weekly": {
      "label": "This week",
      "sessions": 6167.0,
      "activeUsers": 2487.0,
      "engagedSessions": 5154.0,
      "range": "Oct 26-Nov 1, 2026",
      "deltaVsPreviousPct": -3.9108756622000627,
      "comparisonLabel": "vs previous week",
      "newUsers": 628.0,
      "engagementRate": 83.57386087238527,
      "screenPageViews": 28767.0,
      "eventCount": 798468.0,
      "userEngagementDuration": 16126002.0,
      "totalEngagementHours": 4479.445,
      "avgEngagedMinutesPerUser": 108.06863691194211,
      "avgEngagedMinutesPerSession": 43.58143343603049,
      "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
    },
    "monthly": {
      "label": "Rolling 28 days",
      "sessions": 27706.0,
      "activeUsers": 8302.0,
      "engagedSessions": 22538.0,
      "range": "Oct 5-Nov 1, 2026",
      "deltaVsPreviousPct": -18.93,
      "comparisonLabel": "vs previous 28 days",
      "rollingWindowLabel": "Rolling 28 days"
    }
  },
  "manualAppleSalesUpdate": {
    "downloads": 47,
    "displayDownloads": "47",
    "updates": null,
    "displayUpdates": null,
    "inAppUnits": null,
    "totalUnits": null,
    "dailyAverage": 6.7,
    "start": "2026-10-25",
    "end": "2026-10-31",
    "period": "Oct 25-Oct 31, 2026 (Apple Sun-Sat window)",
    "priorDownloads": 59,
    "priorPeriod": "Oct 19-Oct 25, 2026",
    "deltaPct": -20.33898305084746,
    "product": "ElectricNOW",
    "platform": "iOS/watchOS/tvOS (+ macOS categories at 0)",
    "territories": [
      {
        "territory": "United States",
        "downloads": 45
      },
      {
        "territory": "Australia",
        "downloads": 2
      }
    ],
    "sourceScreenshots": [
      {
        "metric": "free downloads",
        "path": "manual_apple/2026-11-02/apple_free_downloads_oct25_31.jpeg"
      },
      {
        "metric": "sales",
        "path": "manual_apple/2026-11-02/apple_sales_oct25_31.jpeg"
      }
    ],
    "salesGross": 0.0,
    "salesEstimatedNet70Pct": null,
    "salesDaily": [
      {
        "date": "2026-10-25",
        "rawDate": "20261025",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-26",
        "rawDate": "20261026",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-27",
        "rawDate": "20261027",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-28",
        "rawDate": "20261028",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-29",
        "rawDate": "20261029",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-30",
        "rawDate": "20261030",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-31",
        "rawDate": "20261031",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      }
    ],
    "downloadsDaily": [],
    "salesDeltaPct": -100.0,
    "updatedAtUtc": "2026-11-02T20:35:51.823384+00:00",
    "priorTotalUnits": 64,
    "priorInAppUnits": 5,
    "priorSalesGross": 104.95,
    "downloadsDailyNote": "Apple showed only the 7-day free-download total this week; daily download values were not provided.",
    "status": "fresh_manual",
    "salesComparisonPeriod": "Oct 19-Oct 25, 2026",
    "freeDownloads": 47,
    "dailyUnitsStatus": "not_provided_in_source",
    "paidUnits": null,
    "grossRevenue": 0.0,
    "salesGrossUS": null,
    "salesGeography": "Apple Sales view",
    "worldwideSalesGross": 0.0,
    "priorWorldwideSnapshot": {
      "period": "Sep 14-Sep 20, 2026",
      "salesGross": 350.48,
      "status": "stale_historical_context"
    },
    "sourceLabel": "Apple App Store Connect snapshot (user screenshots Nov 2)",
    "note": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
    "sourceDetail": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
    "dashboardWeek": "Oct 26-Nov 1, 2026",
    "periodNote": "Apple's 7-day view ends Oct 31, one day before the dashboard week ends.",
    "territoriesNote": "Free downloads by territory from the Apple screen."
  },
  "googleAdsSummary": {
    "source": "Google Ads connector (API v25)",
    "accountId": "4342267711",
    "customerClientId": "4342267711",
    "accountName": "Electric Entertainment",
    "period": "Oct 26-Nov 1, 2026",
    "campaignName": "PCSM - ElectricNow App Promotion - Android",
    "campaignId": "23836266606",
    "campaignType": "MULTI_CHANNEL",
    "status": "fresh",
    "impressions": 0,
    "clicks": 0,
    "ctrPct": null,
    "cost": 0,
    "avgCpc": null,
    "conversions": 0,
    "allConversions": 0,
    "conversionRatePct": null,
    "costPerConversion": null,
    "daily": [
      {
        "date": "2026-10-26",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0
      },
      {
        "date": "2026-10-27",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0
      },
      {
        "date": "2026-10-28",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0
      },
      {
        "date": "2026-10-29",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0
      },
      {
        "date": "2026-10-30",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0
      },
      {
        "date": "2026-10-31",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0
      },
      {
        "date": "2026-11-01",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0
      }
    ],
    "deviceBreakout": [],
    "conversionActions": [],
    "plainEnglish": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
    "dataFreshnessNote": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
    "statusDetail": "Fresh connector pull",
    "lastSuccessfulPull": "2026-11-02T20:37:43.600948+00:00",
    "latestQueryPeriod": "Oct 26-Nov 1, 2026",
    "latestQueryStatus": "OK",
    "latestQueryNote": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
    "currentPeriod": {
      "period": "Oct 26-Nov 1, 2026",
      "spend": 0,
      "impressions": 0,
      "clicks": 0,
      "conversions": 0,
      "allConversions": 0,
      "status": "fresh"
    },
    "freshness": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
    "attemptedPeriod": "Oct 26-Nov 1, 2026",
    "sourceStatus": "fresh",
    "updatedAt": "2026-11-02T20:37:43.600948+00:00",
    "zeroIsReal": true,
    "note": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
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
    "impressionsLabel": "paid-campaign impressions (distinct from ElectricNOW in-app ad impressions)",
    "campaignPeriod": "Oct 26-Nov 1, 2026",
    "campaigns": [
      {
        "id": "674171214",
        "name": "Campaign #1",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "686173562",
        "name": "Fear Inc D-Day :30 Second Trailer",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "1400813503",
        "name": "BAD SAMARITAN - FINAL WEEKEND",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "22515739134",
        "name": "YouTube - The Librarians, The Next Chapter #2",
        "status": "REMOVED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "22522239496",
        "name": "YouTube - The Librarians, The Next Chapter",
        "status": "REMOVED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "22526018365",
        "name": "YouTube - The Librarians, The Next Chapter - Target CPV",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "22538490896",
        "name": "YouTube - The Librarians, The Next Chapter - Trailer #2 - Target CPV",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "22557330676",
        "name": "YouTube - The Librarians, The Next Chapter - Trailer #3 - 15 Seconds - Target CPV",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "22565132115",
        "name": "YouTube - The Librarians, The Next Chapter - Trailer #5 - Adventure - Target CPV",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "22571461586",
        "name": "YouTube - The Librarians, The Next Chapter - Trailer #4 - The Call - Target CPV",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "22586336149",
        "name": "YouTube - The Librarians, The Next Chapter - Trailer \"Danger\" - Target CPV",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23008024791",
        "name": "YouTube - OBHF - Isolated City - Atlanta - 3760 Princeton Lakes Pkwy., Atlanta, GA 30331",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009688657",
        "name": "YouTube - OBHF - Isolated City - Atlanta - 185 Metromont Rd, Hiram, GA 30141",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009775729",
        "name": "YouTube - OBHF - Isolated City - Dallas - 100 Coneflower Drive, Garland, TX 75040",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009779839",
        "name": "YouTube - OBHF - Isolated City - Dallas - 3150 Grapevine Mills Parkway, Grapevine, TX 76051",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009781804",
        "name": "YouTube - OBHF - Isolated City - Dallas - 19919 Lyndon B Johnson Fwy, Mesquite, TX 75149",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009804397",
        "name": "YouTube - OBHF - Isolated City - Houston - 17145 Tomball Parkway, Houston, TX 77064",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009821812",
        "name": "YouTube - OBHF - Isolated City - Los Angeles - 201 E. Magnolia Blvd #345, Burbank, CA 91501",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009868633",
        "name": "YouTube - OBHF - Isolated City - Miami - 2315 N Federal Hwy, Pompano Beach, FL 33062",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009885487",
        "name": "YouTube - OBHF - Isolated City - New York - 4403 Palisades Ctr. Drive, West Nyack, NY 10994",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009899602",
        "name": "YouTube - OBHF - Isolated City - Dayton Beach - 1500 E Buena Vista Dr, Lake Buena Vista, FL 32830",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009915262",
        "name": "YouTube - OBHF - Isolated City - Phoenix - 565 North 3rd Street, Phoenix, AZ 85004",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009918589",
        "name": "YouTube - OBHF - Isolated City - Phoenix - 3033 West Agua Fria Freeway, Phoenix, AZ 85027",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009942112",
        "name": "YouTube - OBHF - Isolated City - Seattle-Tacoma - 18733 33rd Ave. West, Lynnwood, WA 98037",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009955540",
        "name": "YouTube - OBHF - Isolated City - Tampa - 3128 Tampa Road, Oldsmar, FL 34677",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009961324",
        "name": "YouTube - OBHF - Clustered Locations (3) - Detroit - 35705 South Gratiot Ave., Clinton Twp, MI 48035, 32289 John R Road, Madison Heights, MI 48071,  44681 Mound Road, Sterling Heights, MI 48314",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009967330",
        "name": "YouTube - OBHF - Clustered Locations (2) - Houston - 3301 Town Centre Blvd South, Sugar Land, TX 77479,  11225 Fountain Lake Drive, Stafford, TX 77477",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23009973321",
        "name": "YouTube - OBHF - Clustered Locations (2) - Philadelphia - 900 Haddonfield Berlin Rd, Voorhees, NJ 08043, 900 Haddonfield Berlin Rd, Voorhees, NJ 08043",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014466619",
        "name": "YouTube - OBHF - Isolated City - Atlanta - 185 Metromont Rd, Hiram, GA 30141 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014466622",
        "name": "YouTube - OBHF - Isolated City - Dallas - 19919 Lyndon B Johnson Fwy, Mesquite, TX 75149 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467093",
        "name": "YouTube - OBHF - Isolated City - Phoenix - 565 North 3rd Street, Phoenix, AZ 85004 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467483",
        "name": "YouTube - OBHF - Isolated City - Atlanta - 1536 Dogwood Dr SE, Conyers, GA 30013 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467495",
        "name": "YouTube - OBHF - Isolated City - Dallas - 2601 Preston Road Ste 300, Frisco, TX 75034 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467552",
        "name": "YouTube - OBHF - Clustered Locations (2) - Kansas City - 11701 Nall Avenue, Leawood, KS 66211, 12075 So Strang Line Road, Olathe, KS 66062 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467723",
        "name": "YouTube - OBHF - Isolated City - Atlanta - 3760 Princeton Lakes Pkwy., Atlanta, GA 30331 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467738",
        "name": "YouTube - OBHF - Isolated City - Miami - 2315 N Federal Hwy, Pompano Beach, FL 33062 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467741",
        "name": "YouTube - OBHF - Isolated City - New York - 4403 Palisades Ctr. Drive, West Nyack, NY 10994 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467756",
        "name": "YouTube - OBHF - Isolated City - Houston - 11801 S Sam Houston Pkwy E, Houston, TX 77089 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467780",
        "name": "YouTube - OBHF - Isolated City - Dallas - 3150 Grapevine Mills Parkway, Grapevine, TX 76051 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467783",
        "name": "YouTube - OBHF - Isolated City - Houston - 17145 Tomball Parkway, Houston, TX 77064 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467822",
        "name": "YouTube - OBHF - Isolated City - Dallas - 100 Coneflower Drive, Garland, TX 75040 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467963",
        "name": "YouTube - OBHF - Isolated City - Phoenix - 21001 North Tatum Blvd, Suite 32, Phoenix, AZ 85050 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467969",
        "name": "YouTube - OBHF - Isolated City - Kansas City - 8101 NW Roanridge Rd, Kansas City #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014467993",
        "name": "YouTube - OBHF - Isolated City - Seattle-Tacoma - 3600 Southcenter Mall, Tukwila, WA 98188 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014468050",
        "name": "YouTube - OBHF - Isolated City - Los Angeles - 4549 Mills Circle, Ontario, CA 91764 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014468074",
        "name": "YouTube - OBHF - Isolated City - Phoenix - 3033 West Agua Fria Freeway, Phoenix, AZ 85027 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014468200",
        "name": "YouTube - OBHF - Isolated City - Atlanta - 7065 Mount Zion Circle, Morrow, GA 30260 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014468218",
        "name": "YouTube - OBHF - Isolated City - Miami - 5701 Sunset Drive, Suite 300, South Miami, FL 33143 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014468221",
        "name": "YouTube - OBHF - Isolated City - Washington DC - 206 Hoffman Street, Alexandria, VA 22314 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014468296",
        "name": "YouTube - OBHF - Isolated City - Miami - 19501 Biscayne Blvd #3001, Aventura, FL 33180 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014468308",
        "name": "YouTube - OBHF - Isolated City - San Diego - 7037 Friars Road, San Diego, CA 92108 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014468311",
        "name": "YouTube - OBHF - Isolated City - Tampa - 2496 W. Brandon Blvd, Brandon, FL 33511 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014468314",
        "name": "YouTube - OBHF - Isolated City - New Haven - 220 New Britain Avenue, Plainville, CT 06062 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014468461",
        "name": "YouTube - OBHF - Isolated City - Boston - 90 Pleasant Valley Street, Suite 50, Methuen, MA 01844 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23014468479",
        "name": "YouTube - OBHF - Isolated City - New York - 234 West 42nd Street, New York, NY 10036 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23015833373",
        "name": "YouTube - OBHF - Isolated City - Atlanta - 1536 Dogwood Dr SE, Conyers, GA 30013",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23015841578",
        "name": "YouTube - OBHF - Isolated City - Atlanta - 2042 Lawrenceville Hwy, Suite F-22, Decatur, GA 30033",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23015848550",
        "name": "YouTube - OBHF - Isolated City - Atlanta - 7065 Mount Zion Circle, Morrow, GA 30260",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23015855174",
        "name": "YouTube - OBHF - Isolated City - Boston - 100 Independence Way, Danvers, MA 01923",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23015923379",
        "name": "YouTube - OBHF - Isolated City - Chicago - 7000 Carpenter Rd, Skokie, IL 60077",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23015935142",
        "name": "YouTube - OBHF - Isolated City - Dallas - 2601 Preston Road Ste 300, Frisco, TX 75034",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23015943335",
        "name": "YouTube - OBHF - Isolated City - Detroit - 4300 Baldwin Rd, Auburn Hills, MI 48326",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23015960132",
        "name": "YouTube - OBHF - Isolated City - Houston - 11801 S Sam Houston Pkwy E, Houston, TX 77089",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23015965361",
        "name": "YouTube - OBHF - Isolated City - Houston - 20131 Highway 59 N, Suite 8000, Humble, TX 77338",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23015977430",
        "name": "YouTube - OBHF - Isolated City - Los Angeles - 4549 Mills Circle, Ontario, CA 91764",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23016008609",
        "name": "YouTube - OBHF - Isolated City - Los Angeles - 1560 South Azusa Avenue, City Of Industry, CA 91748",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23016013349",
        "name": "YouTube - OBHF - Isolated City - Miami - 19501 Biscayne Blvd #3001, Aventura, FL 33180",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23016052049",
        "name": "YouTube - OBHF - Isolated City - Philadelphia - 660 Neshaminy Mall, Bensalem, PA 19020",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23016057347",
        "name": "YouTube - OBHF - Isolated City - Phoenix - 4915 East Ray Road, Phoenix, AZ 85044",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23016068552",
        "name": "YouTube - OBHF - Isolated City - Phoenix - 21001 North Tatum Blvd, Suite 32, Phoenix, AZ 85050",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23016072701",
        "name": "YouTube - OBHF - Isolated City - San Diego - 7037 Friars Road, San Diego, CA 92108",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23016084890",
        "name": "YouTube - OBHF - Isolated City - San Francisco - 2190 Eastridge Loop, San Jose, CA 95122",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23016099017",
        "name": "YouTube - OBHF - Isolated City - Tampa - 2496 W. Brandon Blvd, Brandon, FL 33511",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23019940516",
        "name": "YouTube - OBHF - Isolated City - Boston - 90 Pleasant Valley Street, Suite 50, Methuen, MA 01844",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23019953953",
        "name": "YouTube - OBHF - Isolated City - Dallas - 3861 South Cooper Street, Arlington, TX 76015",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23019965428",
        "name": "YouTube - OBHF - Isolated City - Detroit - 19500 Haggerty Road, Livonia, MI 48152",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23019967396",
        "name": "YouTube - OBHF - Isolated City - New Haven - 220 New Britain Avenue, Plainville, CT 06062",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23019974839",
        "name": "YouTube - OBHF - Isolated City - Houston - 5000 Katy Mills Circle, #131, Katy, TX 77494",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23019987535",
        "name": "YouTube - OBHF - Isolated City - Kansas City - 8101 NW Roanridge Rd, Kansas City",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020038694",
        "name": "YouTube - OBHF - Isolated City - Miami - 5701 Sunset Drive, Suite 300, South Miami, FL 33143",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020041082",
        "name": "YouTube - OBHF - Isolated City - Minnesota - 10051 Woodcrest Dr NW, Coon Rapids, MN 55433",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020046329",
        "name": "YouTube - OBHF - Isolated City - Minnesota - 5567 Bishop Ave, Inver Grove Heights, MN 55076",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020061407",
        "name": "YouTube - OBHF - Isolated City - New York - 651 Kapkowski Road, Elizabeth, NJ 07201",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020064788",
        "name": "YouTube - OBHF - Isolated City - New York - 234 West 42nd Street, New York, NY 10036",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020099180",
        "name": "YouTube - OBHF - Isolated City - San Francisco - 5614 Bay Street, Suite 220, Emeryville, CA 94608",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020115719",
        "name": "YouTube - OBHF - Isolated City - Seattle-Tacoma - 3600 Southcenter Mall, Tukwila, WA 98188",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020124155",
        "name": "YouTube - OBHF - Isolated City - Tampa - 9302 Anderson Road, Tampa, FL 33634",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020130146",
        "name": "YouTube - OBHF - Isolated City - Washington DC - 206 Hoffman Street, Alexandria, VA 22314",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020141393",
        "name": "YouTube - OBHF - Clustered Locations (2) - Kansas City - 11701 Nall Avenue, Leawood, KS 66211, 12075 So Strang Line Road, Olathe, KS 66062",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020151974",
        "name": "YouTube - OBHF - Clustered Locations (2) - Phoenix - 7700 West Arrowhead Towne Ctr, Suite 1079, Glendale, AZ 85308, 9400 West Hanna Lane, Glendale, AZ 85305",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020541030",
        "name": "YouTube - OBHF - Isolated City - Los Angeles - 201 E. Magnolia Blvd #345, Burbank, CA 91501 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020541165",
        "name": "YouTube - OBHF - Isolated City - Los Angeles - 1560 South Azusa Avenue, City Of Industry, CA 91748 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020541168",
        "name": "YouTube - OBHF - Isolated City - Detroit - 19500 Haggerty Road, Livonia, MI 48152 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020541885",
        "name": "YouTube - OBHF - Isolated City - Dayton Beach - 1500 E Buena Vista Dr, Lake Buena Vista, FL 32830 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020541909",
        "name": "YouTube - OBHF - Clustered Locations (2) - Philadelphia - 900 Haddonfield Berlin Rd, Voorhees, NJ 08043, 900 Haddonfield Berlin Rd, Voorhees, NJ 08043 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020541927",
        "name": "YouTube - OBHF - Isolated City - Tampa - 3128 Tampa Road, Oldsmar, FL 34677 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020541933",
        "name": "YouTube - OBHF - Clustered Locations (3) - Detroit - 35705 South Gratiot Ave., Clinton Twp, MI 48035, 32289 John R Road, Madison Heights, MI 48071,  44681 Mound Road, Sterling Heights, MI 48314 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020541978",
        "name": "YouTube - OBHF - Isolated City - Minnesota - 5567 Bishop Ave, Inver Grove Heights, MN 55076 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020541987",
        "name": "YouTube - OBHF - Isolated City - New York - 651 Kapkowski Road, Elizabeth, NJ 07201 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020541999",
        "name": "YouTube - OBHF - Isolated City - San Francisco - 5614 Bay Street, Suite 220, Emeryville, CA 94608 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23020542125",
        "name": "YouTube - OBHF - Clustered Locations (2) - Phoenix - 7700 West Arrowhead Towne Ctr, Suite 1079, Glendale, AZ 85308, 9400 West Hanna Lane, Glendale, AZ 85305 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024446261",
        "name": "YouTube - OBHF - Isolated City - Philadelphia - 660 Neshaminy Mall, Bensalem, PA 19020 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024446264",
        "name": "YouTube - OBHF - Isolated City - San Francisco - 2190 Eastridge Loop, San Jose, CA 95122 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610424",
        "name": "YouTube - OBHF - Isolated City - Seattle-Tacoma - 18733 33rd Ave. West, Lynnwood, WA 98037 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610433",
        "name": "YouTube - OBHF - Isolated Location - Houston - 3301 Town Centre Blvd South, Sugar Land, TX",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610451",
        "name": "YouTube - OBHF - Isolated City - Boston - 100 Independence Way, Danvers, MA 01923 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610457",
        "name": "YouTube - OBHF - Isolated City - Atlanta - 2042 Lawrenceville Hwy, Suite F-22, Decatur, GA 30033 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610466",
        "name": "YouTube - OBHF - Isolated City - Chicago - 7000 Carpenter Rd, Skokie, IL 60077 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610475",
        "name": "YouTube - OBHF - Isolated City - Detroit - 4300 Baldwin Rd, Auburn Hills, MI 48326 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610628",
        "name": "YouTube - OBHF - Isolated City - Houston - 20131 Highway 59 N, Suite 8000, Humble, TX 77338 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610679",
        "name": "YouTube - OBHF - Isolated City - Dallas - 3861 South Cooper Street, Arlington, TX 76015 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610850",
        "name": "YouTube - OBHF - Isolated City - Houston - 5000 Katy Mills Circle, #131, Katy, TX 77494 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610886",
        "name": "YouTube - OBHF - Isolated City - Phoenix - 4915 East Ray Road, Phoenix, AZ 85044 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610892",
        "name": "YouTube - OBHF - Isolated City - Minnesota - 10051 Woodcrest Dr NW, Coon Rapids, MN 55433 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23024610898",
        "name": "YouTube - OBHF - Isolated City - Tampa - 9302 Anderson Road, Tampa, FL 33634 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23059137803",
        "name": "NEW YouTube - OBHF - Isolated City - Altamonte, FL - 433 E Altamonte Dr Altamonte Springs, FL 32701",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23059140665",
        "name": "NEW YouTube - OBHF - Isolated City - Stony Brook - 2196 Nesconset Hwy Stony Brook, NY 11790",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23071957648",
        "name": "YouTube - OBHF - Clustered Locations (2) - Women - Movie Interests - Denver - 10655 Westminster Blvd, Westminster, CO 80020, 103 W Centennial Blvd, Highlands Ranch, CO 80129 #2",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23116785071",
        "name": "YouTube - OBHF - Clustered Locations (3) - Detroit - Sterling Heights, MI 4831",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23116790297",
        "name": "YouTube - OBHF - Isolated City - Philadelphia - 660 Neshaminy Mall, Bensalem, PA 19020 #3",
        "status": "PAUSED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23836266606",
        "name": "PCSM - ElectricNow App Promotion - Android",
        "status": "ENABLED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      },
      {
        "id": "23836268046",
        "name": "PCSM - ElectricNow App Promotion - iOS",
        "status": "REMOVED",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "period": "Oct 26-Nov 1, 2026"
      }
    ],
    "conversionActionNote": "No conversions returned for this reporting period; historical conversion-action configuration is not evidence of current delivery.",
    "deviceNote": "No delivery rows by device for this reporting period.",
    "campaignStatus": "1 ENABLED (no reported delivery)",
    "priorPeriod": {
      "period": "Oct 19-Oct 25, 2026",
      "spend": 0,
      "impressions": 0,
      "clicks": 0,
      "conversions": 0,
      "allConversions": 0,
      "status": "fresh"
    }
  },
  "adSuccessSummary": {
    "googleAds": {
      "source": "Google Ads connector (API v25)",
      "accountId": "4342267711",
      "customerClientId": "4342267711",
      "accountName": "Electric Entertainment",
      "period": "Oct 26-Nov 1, 2026",
      "campaignName": "PCSM - ElectricNow App Promotion - Android",
      "campaignId": "23836266606",
      "campaignType": "MULTI_CHANNEL",
      "status": "fresh",
      "impressions": 0,
      "clicks": 0,
      "ctrPct": null,
      "cost": 0,
      "avgCpc": null,
      "conversions": 0,
      "allConversions": 0,
      "conversionRatePct": null,
      "costPerConversion": null,
      "daily": [
        {
          "date": "2026-10-26",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0
        },
        {
          "date": "2026-10-27",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0
        },
        {
          "date": "2026-10-28",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0
        },
        {
          "date": "2026-10-29",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0
        },
        {
          "date": "2026-10-30",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0
        },
        {
          "date": "2026-10-31",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0
        },
        {
          "date": "2026-11-01",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0
        }
      ],
      "deviceBreakout": [],
      "conversionActions": [],
      "plainEnglish": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
      "dataFreshnessNote": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
      "statusDetail": "Fresh connector pull",
      "lastSuccessfulPull": "2026-11-02T20:37:43.600948+00:00",
      "latestQueryPeriod": "Oct 26-Nov 1, 2026",
      "latestQueryStatus": "OK",
      "latestQueryNote": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
      "currentPeriod": {
        "period": "Oct 26-Nov 1, 2026",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "status": "fresh"
      },
      "freshness": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
      "attemptedPeriod": "Oct 26-Nov 1, 2026",
      "sourceStatus": "fresh",
      "updatedAt": "2026-11-02T20:37:43.600948+00:00",
      "zeroIsReal": true,
      "note": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
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
      "impressionsLabel": "paid-campaign impressions (distinct from ElectricNOW in-app ad impressions)",
      "campaignPeriod": "Oct 26-Nov 1, 2026",
      "campaigns": [
        {
          "id": "674171214",
          "name": "Campaign #1",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "686173562",
          "name": "Fear Inc D-Day :30 Second Trailer",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "1400813503",
          "name": "BAD SAMARITAN - FINAL WEEKEND",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "22515739134",
          "name": "YouTube - The Librarians, The Next Chapter #2",
          "status": "REMOVED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "22522239496",
          "name": "YouTube - The Librarians, The Next Chapter",
          "status": "REMOVED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "22526018365",
          "name": "YouTube - The Librarians, The Next Chapter - Target CPV",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "22538490896",
          "name": "YouTube - The Librarians, The Next Chapter - Trailer #2 - Target CPV",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "22557330676",
          "name": "YouTube - The Librarians, The Next Chapter - Trailer #3 - 15 Seconds - Target CPV",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "22565132115",
          "name": "YouTube - The Librarians, The Next Chapter - Trailer #5 - Adventure - Target CPV",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "22571461586",
          "name": "YouTube - The Librarians, The Next Chapter - Trailer #4 - The Call - Target CPV",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "22586336149",
          "name": "YouTube - The Librarians, The Next Chapter - Trailer \"Danger\" - Target CPV",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23008024791",
          "name": "YouTube - OBHF - Isolated City - Atlanta - 3760 Princeton Lakes Pkwy., Atlanta, GA 30331",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009688657",
          "name": "YouTube - OBHF - Isolated City - Atlanta - 185 Metromont Rd, Hiram, GA 30141",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009775729",
          "name": "YouTube - OBHF - Isolated City - Dallas - 100 Coneflower Drive, Garland, TX 75040",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009779839",
          "name": "YouTube - OBHF - Isolated City - Dallas - 3150 Grapevine Mills Parkway, Grapevine, TX 76051",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009781804",
          "name": "YouTube - OBHF - Isolated City - Dallas - 19919 Lyndon B Johnson Fwy, Mesquite, TX 75149",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009804397",
          "name": "YouTube - OBHF - Isolated City - Houston - 17145 Tomball Parkway, Houston, TX 77064",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009821812",
          "name": "YouTube - OBHF - Isolated City - Los Angeles - 201 E. Magnolia Blvd #345, Burbank, CA 91501",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009868633",
          "name": "YouTube - OBHF - Isolated City - Miami - 2315 N Federal Hwy, Pompano Beach, FL 33062",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009885487",
          "name": "YouTube - OBHF - Isolated City - New York - 4403 Palisades Ctr. Drive, West Nyack, NY 10994",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009899602",
          "name": "YouTube - OBHF - Isolated City - Dayton Beach - 1500 E Buena Vista Dr, Lake Buena Vista, FL 32830",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009915262",
          "name": "YouTube - OBHF - Isolated City - Phoenix - 565 North 3rd Street, Phoenix, AZ 85004",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009918589",
          "name": "YouTube - OBHF - Isolated City - Phoenix - 3033 West Agua Fria Freeway, Phoenix, AZ 85027",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009942112",
          "name": "YouTube - OBHF - Isolated City - Seattle-Tacoma - 18733 33rd Ave. West, Lynnwood, WA 98037",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009955540",
          "name": "YouTube - OBHF - Isolated City - Tampa - 3128 Tampa Road, Oldsmar, FL 34677",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009961324",
          "name": "YouTube - OBHF - Clustered Locations (3) - Detroit - 35705 South Gratiot Ave., Clinton Twp, MI 48035, 32289 John R Road, Madison Heights, MI 48071,  44681 Mound Road, Sterling Heights, MI 48314",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009967330",
          "name": "YouTube - OBHF - Clustered Locations (2) - Houston - 3301 Town Centre Blvd South, Sugar Land, TX 77479,  11225 Fountain Lake Drive, Stafford, TX 77477",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23009973321",
          "name": "YouTube - OBHF - Clustered Locations (2) - Philadelphia - 900 Haddonfield Berlin Rd, Voorhees, NJ 08043, 900 Haddonfield Berlin Rd, Voorhees, NJ 08043",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014466619",
          "name": "YouTube - OBHF - Isolated City - Atlanta - 185 Metromont Rd, Hiram, GA 30141 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014466622",
          "name": "YouTube - OBHF - Isolated City - Dallas - 19919 Lyndon B Johnson Fwy, Mesquite, TX 75149 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467093",
          "name": "YouTube - OBHF - Isolated City - Phoenix - 565 North 3rd Street, Phoenix, AZ 85004 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467483",
          "name": "YouTube - OBHF - Isolated City - Atlanta - 1536 Dogwood Dr SE, Conyers, GA 30013 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467495",
          "name": "YouTube - OBHF - Isolated City - Dallas - 2601 Preston Road Ste 300, Frisco, TX 75034 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467552",
          "name": "YouTube - OBHF - Clustered Locations (2) - Kansas City - 11701 Nall Avenue, Leawood, KS 66211, 12075 So Strang Line Road, Olathe, KS 66062 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467723",
          "name": "YouTube - OBHF - Isolated City - Atlanta - 3760 Princeton Lakes Pkwy., Atlanta, GA 30331 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467738",
          "name": "YouTube - OBHF - Isolated City - Miami - 2315 N Federal Hwy, Pompano Beach, FL 33062 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467741",
          "name": "YouTube - OBHF - Isolated City - New York - 4403 Palisades Ctr. Drive, West Nyack, NY 10994 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467756",
          "name": "YouTube - OBHF - Isolated City - Houston - 11801 S Sam Houston Pkwy E, Houston, TX 77089 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467780",
          "name": "YouTube - OBHF - Isolated City - Dallas - 3150 Grapevine Mills Parkway, Grapevine, TX 76051 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467783",
          "name": "YouTube - OBHF - Isolated City - Houston - 17145 Tomball Parkway, Houston, TX 77064 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467822",
          "name": "YouTube - OBHF - Isolated City - Dallas - 100 Coneflower Drive, Garland, TX 75040 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467963",
          "name": "YouTube - OBHF - Isolated City - Phoenix - 21001 North Tatum Blvd, Suite 32, Phoenix, AZ 85050 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467969",
          "name": "YouTube - OBHF - Isolated City - Kansas City - 8101 NW Roanridge Rd, Kansas City #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014467993",
          "name": "YouTube - OBHF - Isolated City - Seattle-Tacoma - 3600 Southcenter Mall, Tukwila, WA 98188 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014468050",
          "name": "YouTube - OBHF - Isolated City - Los Angeles - 4549 Mills Circle, Ontario, CA 91764 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014468074",
          "name": "YouTube - OBHF - Isolated City - Phoenix - 3033 West Agua Fria Freeway, Phoenix, AZ 85027 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014468200",
          "name": "YouTube - OBHF - Isolated City - Atlanta - 7065 Mount Zion Circle, Morrow, GA 30260 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014468218",
          "name": "YouTube - OBHF - Isolated City - Miami - 5701 Sunset Drive, Suite 300, South Miami, FL 33143 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014468221",
          "name": "YouTube - OBHF - Isolated City - Washington DC - 206 Hoffman Street, Alexandria, VA 22314 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014468296",
          "name": "YouTube - OBHF - Isolated City - Miami - 19501 Biscayne Blvd #3001, Aventura, FL 33180 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014468308",
          "name": "YouTube - OBHF - Isolated City - San Diego - 7037 Friars Road, San Diego, CA 92108 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014468311",
          "name": "YouTube - OBHF - Isolated City - Tampa - 2496 W. Brandon Blvd, Brandon, FL 33511 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014468314",
          "name": "YouTube - OBHF - Isolated City - New Haven - 220 New Britain Avenue, Plainville, CT 06062 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014468461",
          "name": "YouTube - OBHF - Isolated City - Boston - 90 Pleasant Valley Street, Suite 50, Methuen, MA 01844 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23014468479",
          "name": "YouTube - OBHF - Isolated City - New York - 234 West 42nd Street, New York, NY 10036 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23015833373",
          "name": "YouTube - OBHF - Isolated City - Atlanta - 1536 Dogwood Dr SE, Conyers, GA 30013",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23015841578",
          "name": "YouTube - OBHF - Isolated City - Atlanta - 2042 Lawrenceville Hwy, Suite F-22, Decatur, GA 30033",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23015848550",
          "name": "YouTube - OBHF - Isolated City - Atlanta - 7065 Mount Zion Circle, Morrow, GA 30260",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23015855174",
          "name": "YouTube - OBHF - Isolated City - Boston - 100 Independence Way, Danvers, MA 01923",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23015923379",
          "name": "YouTube - OBHF - Isolated City - Chicago - 7000 Carpenter Rd, Skokie, IL 60077",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23015935142",
          "name": "YouTube - OBHF - Isolated City - Dallas - 2601 Preston Road Ste 300, Frisco, TX 75034",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23015943335",
          "name": "YouTube - OBHF - Isolated City - Detroit - 4300 Baldwin Rd, Auburn Hills, MI 48326",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23015960132",
          "name": "YouTube - OBHF - Isolated City - Houston - 11801 S Sam Houston Pkwy E, Houston, TX 77089",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23015965361",
          "name": "YouTube - OBHF - Isolated City - Houston - 20131 Highway 59 N, Suite 8000, Humble, TX 77338",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23015977430",
          "name": "YouTube - OBHF - Isolated City - Los Angeles - 4549 Mills Circle, Ontario, CA 91764",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23016008609",
          "name": "YouTube - OBHF - Isolated City - Los Angeles - 1560 South Azusa Avenue, City Of Industry, CA 91748",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23016013349",
          "name": "YouTube - OBHF - Isolated City - Miami - 19501 Biscayne Blvd #3001, Aventura, FL 33180",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23016052049",
          "name": "YouTube - OBHF - Isolated City - Philadelphia - 660 Neshaminy Mall, Bensalem, PA 19020",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23016057347",
          "name": "YouTube - OBHF - Isolated City - Phoenix - 4915 East Ray Road, Phoenix, AZ 85044",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23016068552",
          "name": "YouTube - OBHF - Isolated City - Phoenix - 21001 North Tatum Blvd, Suite 32, Phoenix, AZ 85050",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23016072701",
          "name": "YouTube - OBHF - Isolated City - San Diego - 7037 Friars Road, San Diego, CA 92108",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23016084890",
          "name": "YouTube - OBHF - Isolated City - San Francisco - 2190 Eastridge Loop, San Jose, CA 95122",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23016099017",
          "name": "YouTube - OBHF - Isolated City - Tampa - 2496 W. Brandon Blvd, Brandon, FL 33511",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23019940516",
          "name": "YouTube - OBHF - Isolated City - Boston - 90 Pleasant Valley Street, Suite 50, Methuen, MA 01844",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23019953953",
          "name": "YouTube - OBHF - Isolated City - Dallas - 3861 South Cooper Street, Arlington, TX 76015",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23019965428",
          "name": "YouTube - OBHF - Isolated City - Detroit - 19500 Haggerty Road, Livonia, MI 48152",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23019967396",
          "name": "YouTube - OBHF - Isolated City - New Haven - 220 New Britain Avenue, Plainville, CT 06062",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23019974839",
          "name": "YouTube - OBHF - Isolated City - Houston - 5000 Katy Mills Circle, #131, Katy, TX 77494",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23019987535",
          "name": "YouTube - OBHF - Isolated City - Kansas City - 8101 NW Roanridge Rd, Kansas City",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020038694",
          "name": "YouTube - OBHF - Isolated City - Miami - 5701 Sunset Drive, Suite 300, South Miami, FL 33143",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020041082",
          "name": "YouTube - OBHF - Isolated City - Minnesota - 10051 Woodcrest Dr NW, Coon Rapids, MN 55433",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020046329",
          "name": "YouTube - OBHF - Isolated City - Minnesota - 5567 Bishop Ave, Inver Grove Heights, MN 55076",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020061407",
          "name": "YouTube - OBHF - Isolated City - New York - 651 Kapkowski Road, Elizabeth, NJ 07201",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020064788",
          "name": "YouTube - OBHF - Isolated City - New York - 234 West 42nd Street, New York, NY 10036",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020099180",
          "name": "YouTube - OBHF - Isolated City - San Francisco - 5614 Bay Street, Suite 220, Emeryville, CA 94608",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020115719",
          "name": "YouTube - OBHF - Isolated City - Seattle-Tacoma - 3600 Southcenter Mall, Tukwila, WA 98188",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020124155",
          "name": "YouTube - OBHF - Isolated City - Tampa - 9302 Anderson Road, Tampa, FL 33634",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020130146",
          "name": "YouTube - OBHF - Isolated City - Washington DC - 206 Hoffman Street, Alexandria, VA 22314",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020141393",
          "name": "YouTube - OBHF - Clustered Locations (2) - Kansas City - 11701 Nall Avenue, Leawood, KS 66211, 12075 So Strang Line Road, Olathe, KS 66062",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020151974",
          "name": "YouTube - OBHF - Clustered Locations (2) - Phoenix - 7700 West Arrowhead Towne Ctr, Suite 1079, Glendale, AZ 85308, 9400 West Hanna Lane, Glendale, AZ 85305",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020541030",
          "name": "YouTube - OBHF - Isolated City - Los Angeles - 201 E. Magnolia Blvd #345, Burbank, CA 91501 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020541165",
          "name": "YouTube - OBHF - Isolated City - Los Angeles - 1560 South Azusa Avenue, City Of Industry, CA 91748 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020541168",
          "name": "YouTube - OBHF - Isolated City - Detroit - 19500 Haggerty Road, Livonia, MI 48152 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020541885",
          "name": "YouTube - OBHF - Isolated City - Dayton Beach - 1500 E Buena Vista Dr, Lake Buena Vista, FL 32830 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020541909",
          "name": "YouTube - OBHF - Clustered Locations (2) - Philadelphia - 900 Haddonfield Berlin Rd, Voorhees, NJ 08043, 900 Haddonfield Berlin Rd, Voorhees, NJ 08043 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020541927",
          "name": "YouTube - OBHF - Isolated City - Tampa - 3128 Tampa Road, Oldsmar, FL 34677 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020541933",
          "name": "YouTube - OBHF - Clustered Locations (3) - Detroit - 35705 South Gratiot Ave., Clinton Twp, MI 48035, 32289 John R Road, Madison Heights, MI 48071,  44681 Mound Road, Sterling Heights, MI 48314 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020541978",
          "name": "YouTube - OBHF - Isolated City - Minnesota - 5567 Bishop Ave, Inver Grove Heights, MN 55076 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020541987",
          "name": "YouTube - OBHF - Isolated City - New York - 651 Kapkowski Road, Elizabeth, NJ 07201 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020541999",
          "name": "YouTube - OBHF - Isolated City - San Francisco - 5614 Bay Street, Suite 220, Emeryville, CA 94608 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23020542125",
          "name": "YouTube - OBHF - Clustered Locations (2) - Phoenix - 7700 West Arrowhead Towne Ctr, Suite 1079, Glendale, AZ 85308, 9400 West Hanna Lane, Glendale, AZ 85305 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024446261",
          "name": "YouTube - OBHF - Isolated City - Philadelphia - 660 Neshaminy Mall, Bensalem, PA 19020 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024446264",
          "name": "YouTube - OBHF - Isolated City - San Francisco - 2190 Eastridge Loop, San Jose, CA 95122 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610424",
          "name": "YouTube - OBHF - Isolated City - Seattle-Tacoma - 18733 33rd Ave. West, Lynnwood, WA 98037 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610433",
          "name": "YouTube - OBHF - Isolated Location - Houston - 3301 Town Centre Blvd South, Sugar Land, TX",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610451",
          "name": "YouTube - OBHF - Isolated City - Boston - 100 Independence Way, Danvers, MA 01923 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610457",
          "name": "YouTube - OBHF - Isolated City - Atlanta - 2042 Lawrenceville Hwy, Suite F-22, Decatur, GA 30033 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610466",
          "name": "YouTube - OBHF - Isolated City - Chicago - 7000 Carpenter Rd, Skokie, IL 60077 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610475",
          "name": "YouTube - OBHF - Isolated City - Detroit - 4300 Baldwin Rd, Auburn Hills, MI 48326 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610628",
          "name": "YouTube - OBHF - Isolated City - Houston - 20131 Highway 59 N, Suite 8000, Humble, TX 77338 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610679",
          "name": "YouTube - OBHF - Isolated City - Dallas - 3861 South Cooper Street, Arlington, TX 76015 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610850",
          "name": "YouTube - OBHF - Isolated City - Houston - 5000 Katy Mills Circle, #131, Katy, TX 77494 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610886",
          "name": "YouTube - OBHF - Isolated City - Phoenix - 4915 East Ray Road, Phoenix, AZ 85044 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610892",
          "name": "YouTube - OBHF - Isolated City - Minnesota - 10051 Woodcrest Dr NW, Coon Rapids, MN 55433 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23024610898",
          "name": "YouTube - OBHF - Isolated City - Tampa - 9302 Anderson Road, Tampa, FL 33634 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23059137803",
          "name": "NEW YouTube - OBHF - Isolated City - Altamonte, FL - 433 E Altamonte Dr Altamonte Springs, FL 32701",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23059140665",
          "name": "NEW YouTube - OBHF - Isolated City - Stony Brook - 2196 Nesconset Hwy Stony Brook, NY 11790",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23071957648",
          "name": "YouTube - OBHF - Clustered Locations (2) - Women - Movie Interests - Denver - 10655 Westminster Blvd, Westminster, CO 80020, 103 W Centennial Blvd, Highlands Ranch, CO 80129 #2",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23116785071",
          "name": "YouTube - OBHF - Clustered Locations (3) - Detroit - Sterling Heights, MI 4831",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23116790297",
          "name": "YouTube - OBHF - Isolated City - Philadelphia - 660 Neshaminy Mall, Bensalem, PA 19020 #3",
          "status": "PAUSED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23836266606",
          "name": "PCSM - ElectricNow App Promotion - Android",
          "status": "ENABLED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        },
        {
          "id": "23836268046",
          "name": "PCSM - ElectricNow App Promotion - iOS",
          "status": "REMOVED",
          "spend": 0,
          "impressions": 0,
          "clicks": 0,
          "conversions": 0,
          "allConversions": 0,
          "period": "Oct 26-Nov 1, 2026"
        }
      ],
      "conversionActionNote": "No conversions returned for this reporting period; historical conversion-action configuration is not evidence of current delivery.",
      "deviceNote": "No delivery rows by device for this reporting period.",
      "campaignStatus": "1 ENABLED (no reported delivery)",
      "priorPeriod": {
        "period": "Oct 19-Oct 25, 2026",
        "spend": 0,
        "impressions": 0,
        "clicks": 0,
        "conversions": 0,
        "allConversions": 0,
        "status": "fresh"
      }
    },
    "metaAds": {
      "period": "Aug 4-Aug 26, 2026 (historical flight)",
      "spend": 11667.32,
      "impressions": 2491673,
      "clicks": 18890,
      "ctrPct": 0.76,
      "downloads": 1032,
      "costPerDownload": 11.31,
      "iosDownloads": 1008,
      "androidDownloads": 24,
      "source": "Meta Ads (Forge One / nathan@pcsocialmedia.com, Meta-only report)",
      "note": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
      "reportedPlatformDownloads": 0,
      "metaAppInstallsFromBreakdown": 0,
      "status": "stale_preserved_no_fresh_pull",
      "strategyNote": "Nathan recommends shifting from general app promotion to show-led Meta creative for The Ark, Leverage and The Librarians. His Sep 21 follow-up specifies 15- and 30-second Ark social cuts, with the install CTA: “Watch Seasons 1 and 2 on ElectricNOW. Download the app to stream free today.” He reports efficient initial Meta prospecting installs but weak retention; better retention from content-led creative is a test hypothesis, not a measured result.",
      "paidAcquisitionInterpretation": "Verdict: Roku acquisition is too expensive on the agency's reported evidence; content-led Meta tests need proof of retention. (1) Roku ads have been running for several weeks, but Nathan reports no expected TV-app audience growth. Google shows no Sep 14–20 delivery; current Meta delivery totals remain unavailable. (2) Roku's best campaign costs over $60/install on $1,908 campaign-to-date spend: concerning and unsustainable per Nathan. Historical Meta blended cost was $11.31/download; initial app-prospecting efficiency was better according to Nathan, but weak retention prevents declaring sustainable acquisition economics. (3) No fresh age/gender/device report establishes improving targeting; use separate iOS/Android and cold-interest/retargeting tests. (4) Nathan favors Meta's audience controls over Roku; that is a recommended next test, not verified current outperformance. (5) Nathan reports weak post-install retention; GA4's 21 paid-tagged sessions do not attribute store installs to viewing or sales. True ROAS cannot be stated without reconciled revenue. (6) Review pausing Roku rather than chasing the conditional credit; test show-led Meta cuts, track first play and seven-day return, and scale only audiences that actually watch.",
      "staleNote": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed."
    },
    "period": "Oct 26-Nov 1, 2026",
    "verdict": "acceptable but needs proof of viewing; historical Roku costs concerning",
    "plainEnglish": "Verdict: acceptable but needs proof of viewing; historical Roku costs were concerning. (1) Paid ads are not shown to be growing the platform: Google Ads reported zero delivery (0 impressions, $0 spend) for Oct 26-Nov 1, the third straight week, and no fresh Meta delivery report exists, so this week's users (-1.9%) and flat DotStudios installs (486) are organic or unattributed. (2) Current acquisition costs cannot be judged: there was no measurable paid spend this week, Meta reporting is stale (last flight Aug 4-26, $11,667.32 for 1,032 downloads, $11.31 per download, which is acceptable for an install if those users watch), and historical Roku best cost per install above $60 was too expensive. (3) No fresh campaign, platform, age, gender or device breakdown shows targeting narrowing. (4) Meta remains the more promising limited test per Nathan, not a verified current winner over Google; no Meta-only report has arrived since Oct 5. (5) Paid spend cannot be tied to this week's sales or viewing; true ROAS cannot be stated without reconciled ad-server revenue and complete sales coverage. Paid-campaign impressions (0 on Google this week) are separate from in-app ad impressions (19,996 DotStudios-reported) and Ionic ad impressions (38,057). (6) Tests: confirm Roku pause and Meta status; plan the $5k Roku ad credit as a measured test; separate iOS/Android and retargeting; test show-led creative; optimize first play and seven-day return; exclude weak-viewing segments.",
    "recommendations": [
      "Patrick and Nathan: confirm Roku pause/Meta status, supply fresh Meta-only campaign, age, gender and platform reports, and share the plan and tracking for the $5k Roku ad credit before it is spent.",
      "Patrick: Google Ads delivered nothing for a third week; confirm whether the enabled Android app campaign should stay idle or be relaunched as a measured test.",
      "Emma, Sydney, Christina and Breanna: compare Ark-led and Librarians-led creative with the app sizzle, using distinct tags.",
      "Michael: ask Ionic on Wednesday what drove the higher revenue per 1,000 impressions and whether it can hold, and explain the drop in DotStudios ad requests.",
      "Team: reconnect Stripe so web sales can be confirmed, assess TVOD by release stage and eligible non-owners, and add Google Play sales to visible coverage."
    ],
    "googleAdsStatus": "fresh",
    "googleAdsNote": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
    "status": "fresh_google_zero_delivery_stale_meta",
    "freshness": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data. STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "attemptedPeriod": "Oct 26-Nov 1, 2026",
    "sourceStatus": "fresh_google_zero_delivery_stale_meta",
    "updatedAt": "2026-11-02T20:37:43.661163+00:00",
    "rokuAds": {
      "source": "Nathan Froelich / PC Digital Marketing email",
      "subject": "Roku Ads Performance - Suggested Pivot",
      "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAP7v4KLAAA=",
      "receivedAt": "2026-09-21T20:25:16+00:00",
      "followUpEmailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAP7v4KRAAA=",
      "followUpReceivedAt": "2026-09-21T20:40:04+00:00",
      "status": "fresh_agency_report_period_unspecified",
      "period": "Campaign-to-date as reported Sep 21; exact start/end not supplied",
      "spendUSD": 1908,
      "bestCampaignCostPerInstallLowerBoundUSD": 60,
      "costPerInstallOperator": ">",
      "installCount": null,
      "weeklySpend": null,
      "conditionalCreditUSD": 5000,
      "requiredSpendUSD": 5000,
      "creditEarned": null,
      "interpretation": "New Sep 21 update from Nathan (after the scheduled refresh): Roku Ads has spent $1,908 campaign-to-date over several weeks, with the best-performing campaign costing over $60 per install. Nathan reports no expected upward trend in TV-app use and calls the cost unsustainable. This is an agency-reported campaign-to-date snapshot, not Sep 14–20 spend, not Roku app sales, and not off-app TRC performance. A $5,000 ad credit requires $5,000 spend; it is not earned revenue or a reason by itself to keep spending.",
      "strategy": "Nathan recommends shifting from general app promotion to show-led Meta creative for The Ark, Leverage and The Librarians. His Sep 21 follow-up specifies 15- and 30-second Ark social cuts, with the install CTA: “Watch Seasons 1 and 2 on ElectricNOW. Download the app to stream free today.” He reports efficient initial Meta prospecting installs but weak retention; better retention from content-led creative is a test hypothesis, not a measured result."
    },
    "tests": [
      "Ark Season 3 15/30-second creative versus app sizzle, distinct tags, judged on first play and seven-day return.",
      "Separate iOS and Android Meta ad sets with equal small budgets.",
      "Librarians: The Next Chapter creative versus Ark creative, judged on season-pass purchases and viewing.",
      "Retargeting lapsed viewers versus cold prospecting, measured on return viewing.",
      "If the $5k Roku ad credit is used in November, run it as a measured test with a holdout and judge it on Roku App Engagement viewers and purchases, not installs alone."
    ]
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
    "plainEnglish": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "paidAcquisitionInterpretation": "Verdict: acceptable but needs proof of viewing; historical Roku costs were concerning. (1) Paid ads are not shown to be growing the platform: Google Ads reported zero delivery (0 impressions, $0 spend) for Oct 26-Nov 1, the third straight week, and no fresh Meta delivery report exists, so this week's users (-1.9%) and flat DotStudios installs (486) are organic or unattributed. (2) Current acquisition costs cannot be judged: there was no measurable paid spend this week, Meta reporting is stale (last flight Aug 4-26, $11,667.32 for 1,032 downloads, $11.31 per download, which is acceptable for an install if those users watch), and historical Roku best cost per install above $60 was too expensive. (3) No fresh campaign, platform, age, gender or device breakdown shows targeting narrowing. (4) Meta remains the more promising limited test per Nathan, not a verified current winner over Google; no Meta-only report has arrived since Oct 5. (5) Paid spend cannot be tied to this week's sales or viewing; true ROAS cannot be stated without reconciled ad-server revenue and complete sales coverage. Paid-campaign impressions (0 on Google this week) are separate from in-app ad impressions (19,996 DotStudios-reported) and Ionic ad impressions (38,057). (6) Tests: confirm Roku pause and Meta status; plan the $5k Roku ad credit as a measured test; separate iOS/Android and retargeting; test show-led creative; optimize first play and seven-day return; exclude weak-viewing segments.",
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
    "strategyNote": "STALE QUANTITATIVE DATA: Meta-only measured flight remains Aug 4-26; current-week spend/downloads and segment efficiency unavailable after Sep 28 mailbox search. Nathan Sep 21 4:55 PM PDT explicitly recommended pausing Roku Ads entirely and refocusing on Meta; execution of pause/restart is unconfirmed. Historical Meta $11.31/download is not a current rate.",
    "status": "stale_preserved_no_fresh_pull",
    "note": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "staleNote": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "lastCheckedAt": "2026-11-02T20:34:53.529327+00:00",
    "dataFreshnessNote": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "freshness": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "attemptedPeriod": "Oct 26-Nov 1, 2026",
    "sourceStatus": "stale_historical_context",
    "updatedAt": "2026-09-28T19:35:59.406725+00:00",
    "periodCaveat": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "reach": 1553625,
    "ctr": "1.05% (CTR ALL, Forge One ad report headline)",
    "cpc": 0.62,
    "cpm": 4.68,
    "downloadsSplitMethod": "The report does not print an explicit iOS/Android download line. iOS = iphone+ipad install rows across all four ads (602+24+359+23 = 1,008); Android = android_smartphone install rows (16+8 = 24). 1,008+24 = 1,032, matching the reported APP INSTALLS headline. App-install campaigns were deliberately iOS-only; the 24 Android installs came from the boosted-article awareness ads.",
    "impressionsLabel": "paid-campaign impressions (distinct from ElectricNOW in-app ad impressions)",
    "flightEnded": true,
    "dashboardWeek": "Oct 26-Nov 1, 2026",
    "weekNote": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "qualitativeUpdate": {
      "source": "Nathan Froelich / PC Digital Marketing email",
      "subject": "Roku Ads Performance - Suggested Pivot",
      "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAP7v4KLAAA=",
      "receivedAt": "2026-09-21T20:25:16+00:00",
      "followUpEmailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAP7v4KRAAA=",
      "followUpReceivedAt": "2026-09-21T20:40:04+00:00",
      "status": "fresh_agency_report_period_unspecified",
      "period": "Campaign-to-date as reported Sep 21; exact start/end not supplied",
      "spendUSD": 1908,
      "bestCampaignCostPerInstallLowerBoundUSD": 60,
      "costPerInstallOperator": ">",
      "installCount": null,
      "weeklySpend": null,
      "conditionalCreditUSD": 5000,
      "requiredSpendUSD": 5000,
      "creditEarned": null,
      "interpretation": "New Sep 21 update from Nathan (after the scheduled refresh): Roku Ads has spent $1,908 campaign-to-date over several weeks, with the best-performing campaign costing over $60 per install. Nathan reports no expected upward trend in TV-app use and calls the cost unsustainable. This is an agency-reported campaign-to-date snapshot, not Sep 14–20 spend, not Roku app sales, and not off-app TRC performance. A $5,000 ad credit requires $5,000 spend; it is not earned revenue or a reason by itself to keep spending.",
      "strategy": "Nathan recommends shifting from general app promotion to show-led Meta creative for The Ark, Leverage and The Librarians. His Sep 21 follow-up specifies 15- and 30-second Ark social cuts, with the install CTA: “Watch Seasons 1 and 2 on ElectricNOW. Download the app to stream free today.” He reports efficient initial Meta prospecting installs but weak retention; better retention from content-led creative is a test hypothesis, not a measured result."
    },
    "latestQualitativeEmail": {
      "email_id": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAP7v4LAAAA=",
      "subject": "Re: Roku Ads Performance - Suggested Pivot",
      "date": "2026-09-21T23:55:20+00:00",
      "web_link": "https://outlook.office365.com/owa/?ItemID=AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO%2BIm%2FFSr39rhn8M5bDBwC%2BfCtlQrq5QYDU71YzKgxQAD%2F2Prc8AADvKLV%2Bnde7SYUl0H8b5z1dAAP7v4LAAAA%3D&exvsurl=1&viewmodel=ReadMessageItem"
    },
    "latestQualitativeUpdate": "STALE QUANTITATIVE DATA: Meta-only measured flight remains Aug 4-26; current-week spend/downloads and segment efficiency unavailable after Sep 28 mailbox search. Nathan Sep 21 4:55 PM PDT explicitly recommended pausing Roku Ads entirely and refocusing on Meta; execution of pause/restart is unconfirmed. Historical Meta $11.31/download is not a current rate."
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
    "downloads": 47,
    "displayDownloads": "47",
    "updates": null,
    "displayUpdates": null,
    "inAppUnits": null,
    "totalUnits": null,
    "dailyAverage": 6.7,
    "start": "2026-10-25",
    "end": "2026-10-31",
    "period": "Oct 25-Oct 31, 2026 (Apple Sun-Sat window)",
    "priorDownloads": 59,
    "priorPeriod": "Oct 19-Oct 25, 2026",
    "deltaPct": -20.33898305084746,
    "product": "ElectricNOW",
    "platform": "iOS/watchOS/tvOS (+ macOS categories at 0)",
    "territories": [
      {
        "territory": "United States",
        "downloads": 45
      },
      {
        "territory": "Australia",
        "downloads": 2
      }
    ],
    "sourceScreenshots": [
      {
        "metric": "free downloads",
        "path": "manual_apple/2026-11-02/apple_free_downloads_oct25_31.jpeg"
      },
      {
        "metric": "sales",
        "path": "manual_apple/2026-11-02/apple_sales_oct25_31.jpeg"
      }
    ],
    "salesGross": 0.0,
    "salesEstimatedNet70Pct": null,
    "salesDaily": [
      {
        "date": "2026-10-25",
        "rawDate": "20261025",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-26",
        "rawDate": "20261026",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-27",
        "rawDate": "20261027",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-28",
        "rawDate": "20261028",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-29",
        "rawDate": "20261029",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-30",
        "rawDate": "20261030",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      },
      {
        "date": "2026-10-31",
        "rawDate": "20261031",
        "purchaseRevenue": 0.0,
        "salesGross": 0.0
      }
    ],
    "downloadsDaily": [],
    "salesDeltaPct": -100.0,
    "updatedAtUtc": "2026-11-02T20:35:51.823384+00:00",
    "priorTotalUnits": 64,
    "priorInAppUnits": 5,
    "priorSalesGross": 104.95,
    "downloadsDailyNote": "Apple showed only the 7-day free-download total this week; daily download values were not provided.",
    "status": "fresh_manual",
    "salesComparisonPeriod": "Oct 19-Oct 25, 2026",
    "freeDownloads": 47,
    "dailyUnitsStatus": "not_provided_in_source",
    "paidUnits": null,
    "grossRevenue": 0.0,
    "salesGrossUS": null,
    "salesGeography": "Apple Sales view",
    "worldwideSalesGross": 0.0,
    "priorWorldwideSnapshot": {
      "period": "Sep 14-Sep 20, 2026",
      "salesGross": 350.48,
      "status": "stale_historical_context"
    },
    "sourceLabel": "Apple App Store Connect snapshot (user screenshots Nov 2)",
    "note": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
    "sourceDetail": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
    "dashboardWeek": "Oct 26-Nov 1, 2026",
    "periodNote": "Apple's 7-day view ends Oct 31, one day before the dashboard week ends.",
    "territoriesNote": "Free downloads by territory from the Apple screen."
  },
  "manualDataPatch": {
    "updatedAt": "2026-11-02 13:00 PST",
    "period": "Oct 26-Nov 1, 2026",
    "dotStudiosTvod": {
      "file": "manual_dotstudios/2026-11-02/revenue-transactions-10.csv",
      "status": "fresh_manual",
      "period": "Oct 26-Nov 1, 2026",
      "paidTx": 6,
      "grossNet": 125.94,
      "nonPaidRows": 0,
      "priorPaidTx": 15,
      "priorGrossNet": 314.85,
      "byDevice": {
        "web": {
          "tx": 5,
          "net": 104.95
        },
        "android": {
          "tx": 1,
          "net": 20.99
        }
      },
      "byTitle": {
        "The Ark": {
          "tx": 3,
          "net": 62.97
        },
        "The Librarians": {
          "tx": 3,
          "net": 62.97
        }
      },
      "byProduct": {
        "Season Pass": 6
      },
      "byDay": {
        "2026-10-26": {
          "tx": 2,
          "net": 41.98
        },
        "2026-10-27": {
          "tx": 1,
          "net": 20.99
        },
        "2026-10-28": {
          "tx": 2,
          "net": 41.98
        },
        "2026-10-31": {
          "tx": 1,
          "net": 20.99
        }
      },
      "uniqueCustomers": 6,
      "netPurchases": 6,
      "chargeRows": 6,
      "adjustmentRows": 0,
      "buyers": 6,
      "byFamily": {
        "The Ark - Season 3": {
          "tx": 3,
          "net": 62.97
        },
        "The Librarians: The Next Chapter Season 2": {
          "tx": 3,
          "net": 62.97
        }
      },
      "priorNetPurchases": 15,
      "priorNet": 314.85,
      "adjustments": 0.0,
      "netBuyers": 6,
      "note": "6 net purchases: 6 charge rows, no refunds or adjustments."
    },
    "apple": {
      "status": "fresh_manual",
      "period": "Oct 25-Oct 31, 2026",
      "periodNote": "Apple's 7-day Trends view is Sun-Sat (Oct 25-31), one day earlier than the dashboard week Oct 26-Nov 1; label Apple with its own dates.",
      "freeDownloads": 47,
      "freeDownloadsDeltaPct": -20.3,
      "freeDownloadsByTerritory": {
        "United States": {
          "units": 45,
          "deltaPct": -22.4
        },
        "Australia": {
          "units": 2,
          "deltaPct": 100.0
        }
      },
      "dailyAverageFree": 7,
      "units": null,
      "unitsNote": "Only the Free iOS/watchOS/tvOS screen was provided; total units and in-app units not shown.",
      "inAppUnits": null,
      "salesGross": 0.0,
      "salesDeltaPct": -100.0,
      "priorSalesGross": 104.95,
      "salesScope": "Apple Sales screen Oct 25-31: $0.00 (daily average $0.00), -100% vs Apple prior 7 days.",
      "appleComparisonPeriod": "Oct 18-Oct 24, 2026 (Apple 7D comparison)",
      "reconciliationNote": "DotStudios shows 0 Apple-device TVOD purchases Oct 26-Nov 1 (web 5, android 1), consistent with Apple $0.00.",
      "screenshots": [
        "manual_apple/2026-11-02/apple_free_downloads_oct25_31.jpeg",
        "manual_apple/2026-11-02/apple_sales_oct25_31.jpeg"
      ],
      "note": "Apple Connect Oct 25-31: 47 free downloads (-20.3%; US 45, Australia 2). Sales $0.00 (-100% vs $104.95). Total/in-app unit screen not provided.",
      "stagedAt": "2026-11-02T15:21:37.491174+00:00"
    },
    "rokuSales": {
      "gross": 0.0,
      "transactions": 0,
      "developerRevShare": 0.0,
      "period": "Oct 26-Nov 1, 2026"
    },
    "rokuAppEngagement": {
      "newInstalls": 78,
      "uninstalls": 77,
      "avgDailyViewers": 217,
      "avgMinPerViewer": 90.69,
      "totalHoursStreamed": 2301,
      "period": "Oct 25-Oct 31, 2026"
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
    "period": "Oct 26-Nov 1, 2026",
    "comparisonPeriod": "Oct 19-Oct 25, 2026",
    "overview": "Ad income and viewing depth improved: Ionic gross ad-partner revenue rose 80.3% to $121.05 (Oct 26-Nov 1), its best week since Jul 6-12, as revenue per 1,000 ad impressions rose from $2.00 to $3.18, but it is still only about 22% of the June-early July average of $555.50 per week. Roku viewers averaged 90.69 minutes each (+9.5% vs 82.85), the GA4 engagement rate rose to 83.57% from 81.32%, new users rose +10.4% to 628, and YouTube reached 65,100 subscribers. Reach was slightly lower: platform users -1.9% to 2,487, sessions -3.9% to 6,167, and video-start users -3.9% to 836. Sales fell sharply: DotStudios TVOD fell 60.0% to $125.94 (6 Season Passes), Roku had no sales and Apple showed $0.00; Stripe could not be pulled because its connector is disconnected, so visible platform sales are incomplete this week. Cumulative DotStudios net sales now total $18,773.49 (Mar 25-Nov 1).",
    "bullets": [
      "Internal GA4 pull, property 497892271: 2,487 platform users, 6,167 sessions, 4,479.4 engaged hours (-4.6%); engagement rate 83.57% versus 81.32% prior. By platform: web 1,206 users / 3,618 sessions, iOS 699 / 1,355, Android 610 / 1,299 (platform users overlap; do not add). The re-pulled prior week (2,535 users, 6,418 sessions) is within 1% of what was published on Oct 27 (2,535 users, 6,453 sessions), so no revision above 5% needs disclosure. Landing-page traffic is excluded from the headline and counts as acquisition only.",
      "Viewing: 836 video-start users versus 870; on-demand starters 558 versus 554; live channel viewers 371 versus 377; live play events 5,568 versus 5,044; video-complete users 192 versus 187. Groups overlap; do not add. Live/FAST names excluded from on-demand lists.",
      "Verdict: acceptable but needs proof of viewing; historical Roku costs were concerning. (1) Paid ads are not shown to be growing the platform: Google Ads reported zero delivery (0 impressions, $0 spend) for Oct 26-Nov 1, the third straight week, and no fresh Meta delivery report exists, so this week's users (-1.9%) and flat DotStudios installs (486) are organic or unattributed. (2) Current acquisition costs cannot be judged: there was no measurable paid spend this week, Meta reporting is stale (last flight Aug 4-26, $11,667.32 for 1,032 downloads, $11.31 per download, which is acceptable for an install if those users watch), and historical Roku best cost per install above $60 was too expensive. (3) No fresh campaign, platform, age, gender or device breakdown shows targeting narrowing. (4) Meta remains the more promising limited test per Nathan, not a verified current winner over Google; no Meta-only report has arrived since Oct 5. (5) Paid spend cannot be tied to this week's sales or viewing; true ROAS cannot be stated without reconciled ad-server revenue and complete sales coverage. Paid-campaign impressions (0 on Google this week) are separate from in-app ad impressions (19,996 DotStudios-reported) and Ionic ad impressions (38,057). (6) Tests: confirm Roku pause and Meta status; plan the $5k Roku ad credit as a measured test; separate iOS/Android and retargeting; test show-led creative; optimize first play and seven-day return; exclude weak-viewing segments.",
      "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
      "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded.",
      "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
      "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
      "Visible platform sales are incomplete this week: Roku $0.00 + Apple $0.00 (Oct 25-Oct 31 window), and Stripe could not be pulled (connector disconnected; last week Stripe was $133.94). No visible total or week-over-week change is shown. DotStudios shows 5 web purchases / $104.95 that Stripe would normally confirm. Visible platform sales are never total ElectricNOW sales (Google Play/Android, $20.99 in DotStudios, is missing). Never add overlapping DotStudios $125.94.",
      "DotStudios: 486 installs (flat vs 486; Android 85, web 283, iOS 118), 297 updates (-6.6% vs 318), 10,108 reported views (-6.2% vs 10,774); TV devices were 53.7% of views versus 55.3%. In-app ad delivery: 24,798 requests (-28.7% vs 34,786), 19,996 impressions (-11.2% vs 22,514), 2,611 errors (-46.1% vs 4,841); fill 80.6% versus 64.7%. Vendor in-app ad counts are a delivery cross-check, not paid-campaign impressions or verified ad revenue.",
      "Ionic ad revenue rose 80% to $121.05 for Oct 26–Nov 1, with revenue per 1,000 ad impressions up from $2.00 to $3.18. Both drove it: more ads were served (impressions +13.2%) and each ad earned more. It is the highest Ionic week since Jul 6–12, 2026, when revenue was $607.63. This is still about 22% of the June–early July average of $555.50 per week; revenue has not recovered from the July–August drop. Ionic is gross ad-partner revenue (not net and not ROAS); its impressions are counted separately from DotStudios in-app impressions and are never added to them.",
      "Cumulative sales: DotStudios exported net sales: $30,515.70 in 1,707 charge rows less $11,727.22 in 797 adjustment rows and $14.99 in one refund = $18,773.49. Export transaction dates: Mar 25-Nov 1, 2026 (full ledger through Oct 4 plus the Oct 5-11, Oct 12-18, Oct 19-25 and Oct 26-Nov 1 weekly exports). January 1-March 24 coverage is not established by this file. Charges are not unique buyers or net retained revenue; never add Stripe, Apple or Roku, which overlap.",
      "Fresh partial YouTube: Oct 26 through Oct 31, 6 available days; matched against Oct 19 through Oct 24. Not added to app sales or in-app ad delivery. YouTube views fell 1.9% like-for-like (189,723 versus 193,314 over six matched days); net subscribers +120.",
      "TVOD interpretation: all 6 purchases were $20.99 Season Passes (The Ark Season 3: 3; The Librarians: The Next Chapter Season 2: 3), down from 15. Sales still depend on two current seasons, and season passes bring revenue forward because owners need not repurchase each episode.",
      "Next actions: Patrick and Nathan: confirm Roku pause/Meta status, supply fresh Meta-only campaign, age, gender and platform reports, and share the plan and tracking for the $5k Roku ad credit before it is spent. Patrick: Google Ads delivered nothing for a third week; confirm whether the enabled Android app campaign should stay idle or be relaunched as a measured test. Emma, Sydney, Christina and Breanna: compare Ark-led and Librarians-led creative with the app sizzle, using distinct tags. Michael: ask Ionic on Wednesday what drove the higher revenue per 1,000 impressions and whether it can hold, and explain the drop in DotStudios ad requests. Team: reconnect Stripe so web sales can be confirmed, assess TVOD by release stage and eligible non-owners, and add Google Play sales to visible coverage."
    ],
    "paidAcquisitionAssessment": {
      "verdict": "acceptable but needs proof of viewing; historical Roku costs concerning",
      "summary": "Verdict: acceptable but needs proof of viewing; historical Roku costs were concerning. (1) Paid ads are not shown to be growing the platform: Google Ads reported zero delivery (0 impressions, $0 spend) for Oct 26-Nov 1, the third straight week, and no fresh Meta delivery report exists, so this week's users (-1.9%) and flat DotStudios installs (486) are organic or unattributed. (2) Current acquisition costs cannot be judged: there was no measurable paid spend this week, Meta reporting is stale (last flight Aug 4-26, $11,667.32 for 1,032 downloads, $11.31 per download, which is acceptable for an install if those users watch), and historical Roku best cost per install above $60 was too expensive. (3) No fresh campaign, platform, age, gender or device breakdown shows targeting narrowing. (4) Meta remains the more promising limited test per Nathan, not a verified current winner over Google; no Meta-only report has arrived since Oct 5. (5) Paid spend cannot be tied to this week's sales or viewing; true ROAS cannot be stated without reconciled ad-server revenue and complete sales coverage. Paid-campaign impressions (0 on Google this week) are separate from in-app ad impressions (19,996 DotStudios-reported) and Ionic ad impressions (38,057). (6) Tests: confirm Roku pause and Meta status; plan the $5k Roku ad credit as a measured test; separate iOS/Android and retargeting; test show-led creative; optimize first play and seven-day return; exclude weak-viewing segments.",
      "status": "fresh_zero_delivery_google_stale_meta",
      "period": "Oct 26-Nov 1, 2026",
      "tests": [
        "Ark Season 3 15/30-second creative versus app sizzle, distinct tags, judged on first play and seven-day return.",
        "Separate iOS and Android Meta ad sets with equal small budgets.",
        "Librarians: The Next Chapter creative versus Ark creative, judged on season-pass purchases and viewing.",
        "Retargeting lapsed viewers versus cold prospecting, measured on return viewing.",
        "If the $5k Roku ad credit is used in November, run it as a measured test with a holdout and judge it on Roku App Engagement viewers and purchases, not installs alone."
      ]
    }
  },
  "youtubeSummary": {
    "source": "YouTube Analytics API (ElectricNOW channel UCTC_pLf6ZvhU_oZzpqJN1Mg)",
    "connectorStatus": "fresh_partial",
    "period": "Oct 26-Nov 1, 2026",
    "periodNote": "Fresh partial YouTube: Oct 26 through Oct 31, 6 available days; matched against Oct 19 through Oct 24. Not added to app sales or in-app ad delivery.",
    "currentPeriod": {
      "views": 189723,
      "estimatedMinutesWatched": 3191719,
      "estimatedRevenue": 3738.15,
      "estimatedAdRevenue": 3491.838,
      "adImpressions": 565507,
      "monetizedPlaybacks": 98116,
      "watchTimeMinutes": 3191719,
      "hoursWatched": 53195.316666666666,
      "estimatedHoursWatched": 53195.316666666666,
      "rowsThrough": "2026-10-31",
      "days": 6,
      "status": "fresh_partial"
    },
    "isPlatformSales": false,
    "revenueType": "YouTube ad income, not ElectricNOW app TVOD",
    "totals": {
      "views": 189723,
      "estimatedMinutesWatched": 3191719,
      "estimatedRevenue": 3738.15,
      "estimatedAdRevenue": 3491.838,
      "adImpressions": 565507,
      "monetizedPlaybacks": 98116,
      "watchTimeMinutes": 3191719,
      "hoursWatched": 53195.316666666666,
      "estimatedHoursWatched": 53195.316666666666
    },
    "kpis": {
      "views": 189723,
      "estimatedMinutesWatched": 3191719,
      "estimatedRevenue": 3738.15,
      "estimatedAdRevenue": 3491.838,
      "adImpressions": 565507,
      "monetizedPlaybacks": 98116,
      "watchTimeMinutes": 3191719,
      "hoursWatched": 53195.316666666666,
      "estimatedHoursWatched": 53195.316666666666
    },
    "dailyTrend": [
      {
        "date": "2026-10-26",
        "views": 29621,
        "estimatedMinutesWatched": 558702,
        "estimatedRevenue": 572.834,
        "estimatedAdRevenue": 532.237,
        "adImpressions": 88144,
        "monetizedPlaybacks": 16021,
        "watchTimeMinutes": 558702,
        "hoursWatched": 9311.7,
        "estimatedHoursWatched": 9311.7
      },
      {
        "date": "2026-10-27",
        "views": 30982,
        "estimatedMinutesWatched": 525922,
        "estimatedRevenue": 600.483,
        "estimatedAdRevenue": 562.741,
        "adImpressions": 94501,
        "monetizedPlaybacks": 16574,
        "watchTimeMinutes": 525922,
        "hoursWatched": 8765.366666666667,
        "estimatedHoursWatched": 8765.366666666667
      },
      {
        "date": "2026-10-28",
        "views": 30302,
        "estimatedMinutesWatched": 498982,
        "estimatedRevenue": 598.212,
        "estimatedAdRevenue": 557.301,
        "adImpressions": 89898,
        "monetizedPlaybacks": 15496,
        "watchTimeMinutes": 498982,
        "hoursWatched": 8316.366666666667,
        "estimatedHoursWatched": 8316.366666666667
      },
      {
        "date": "2026-10-29",
        "views": 35080,
        "estimatedMinutesWatched": 555886,
        "estimatedRevenue": 686.097,
        "estimatedAdRevenue": 642.023,
        "adImpressions": 99498,
        "monetizedPlaybacks": 17471,
        "watchTimeMinutes": 555886,
        "hoursWatched": 9264.766666666666,
        "estimatedHoursWatched": 9264.766666666666
      },
      {
        "date": "2026-10-30",
        "views": 32486,
        "estimatedMinutesWatched": 520451,
        "estimatedRevenue": 668.242,
        "estimatedAdRevenue": 628.861,
        "adImpressions": 98831,
        "monetizedPlaybacks": 16648,
        "watchTimeMinutes": 520451,
        "hoursWatched": 8674.183333333332,
        "estimatedHoursWatched": 8674.183333333332
      },
      {
        "date": "2026-10-31",
        "views": 31252,
        "estimatedMinutesWatched": 531776,
        "estimatedRevenue": 612.282,
        "estimatedAdRevenue": 568.675,
        "adImpressions": 94635,
        "monetizedPlaybacks": 15906,
        "watchTimeMinutes": 531776,
        "hoursWatched": 8862.933333333332,
        "estimatedHoursWatched": 8862.933333333332
      }
    ],
    "topVideosCurrentPeriod": [
      {
        "videoId": "q5gQB_AGxlo",
        "title": "🔴 Leverage: Redemption | Season 1 Stream | 24/7 Entertainment 🔴",
        "views": 14409,
        "estimatedMinutesWatched": 528628,
        "estimatedHoursWatched": 8810.466666666667,
        "averageViewDuration_sec": 4174,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "tKAdjrXYj8g",
        "title": "Blackway | FULL MOVIE | Anthony Hopkins | Ray Liotta | Julia Stiles | Alexander Ludwig",
        "views": 10109,
        "estimatedMinutesWatched": 106935,
        "estimatedHoursWatched": 1782.25,
        "averageViewDuration_sec": 1202,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "j05pZDAdHhk",
        "title": "Failed Experiment | The Ark | Full Episode | S02E01",
        "views": 10046,
        "estimatedMinutesWatched": 56774,
        "estimatedHoursWatched": 946.2333333333333,
        "averageViewDuration_sec": 708,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "b6kMpenpQGM",
        "title": "Flyboys | FULL MOVIE | James Franco | Jean Reno | Jennifer Decker | David Ellison",
        "views": 8439,
        "estimatedMinutesWatched": 167085,
        "estimatedHoursWatched": 2784.75,
        "averageViewDuration_sec": 1951,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "-mqcn5M0ktA",
        "title": "LBJ | FULL MOVIE | Woody Harrelson | Jennifer Jason Leigh | Richard Jenkins | Bill Pullman",
        "views": 7828,
        "estimatedMinutesWatched": 79567,
        "estimatedHoursWatched": 1326.1166666666666,
        "averageViewDuration_sec": 1471,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "G_X8m-NJV-U",
        "title": "And the Deadly Drekavac | The Librarians: The Next Chapter | S01E01",
        "views": 5427,
        "estimatedMinutesWatched": 29150,
        "estimatedHoursWatched": 485.8333333333333,
        "averageViewDuration_sec": 810,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "Hu7thpEf-js",
        "title": "The Librarians and the Crown of King Arthur | Season 1 Episode 1",
        "views": 5032,
        "estimatedMinutesWatched": 33923,
        "estimatedHoursWatched": 565.3833333333333,
        "averageViewDuration_sec": 929,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "0T-yveMJPko",
        "title": "The Librarian: Quest for the Spear | FULL MOVIE | Noah Wyle, Kyle MacLachlan, Bob Newhart",
        "views": 4638,
        "estimatedMinutesWatched": 85974,
        "estimatedHoursWatched": 1432.9,
        "averageViewDuration_sec": 2050,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "89J-9vWWPuk",
        "title": "The Triangle: Night 1 | Full Movie | Eric Stoltz, Catherine Bell, Lou Diamond Phillips, Sam Neill",
        "views": 2910,
        "estimatedMinutesWatched": 28458,
        "estimatedHoursWatched": 474.3,
        "averageViewDuration_sec": 1073,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "YM6-fBB7yQY",
        "title": "Leverage | The Nigerian Job | Season 1 Episode 1",
        "views": 2285,
        "estimatedMinutesWatched": 37307,
        "estimatedHoursWatched": 621.7833333333333,
        "averageViewDuration_sec": 1515,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "sjsGMHmm9Yk",
        "title": "The Librarian: Curse of the Judas Chalice | FULL MOVIE | Noah Wyle, Bruce Davison, Bob Newhart",
        "views": 1960,
        "estimatedMinutesWatched": 35944,
        "estimatedHoursWatched": 599.0666666666667,
        "averageViewDuration_sec": 1786,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "4HYYYiExFSs",
        "title": "The Librarian: Return to King Solomon's Mines | FULL MOVIE | Noah Wyle, Rob Newhart, Gabrielle Anwar",
        "views": 1743,
        "estimatedMinutesWatched": 43315,
        "estimatedHoursWatched": 721.9166666666666,
        "averageViewDuration_sec": 2090,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "6etBO8Z9IBA",
        "title": "Leverage | The Last Dam Job | Season 4 Episode 18",
        "views": 1654,
        "estimatedMinutesWatched": 31987,
        "estimatedHoursWatched": 533.1166666666667,
        "averageViewDuration_sec": 1358,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "B_IiECt4atw",
        "title": "Everyone Wanted to Be on This Ship | The Ark | Full Episode | S01E01",
        "views": 1619,
        "estimatedMinutesWatched": 8463,
        "estimatedHoursWatched": 141.05,
        "averageViewDuration_sec": 688,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "rVC2lrrZvwc",
        "title": "The Librarians and the Drowned Book | Season 2 Episode 1",
        "views": 1405,
        "estimatedMinutesWatched": 14275,
        "estimatedHoursWatched": 237.91666666666666,
        "averageViewDuration_sec": 1089,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "JeeMINxXYwQ",
        "title": "Leverage | The Jailhouse Job | Season 3 Episode 1",
        "views": 1325,
        "estimatedMinutesWatched": 22949,
        "estimatedHoursWatched": 382.48333333333335,
        "averageViewDuration_sec": 1413,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "m0v9QKgOHYo",
        "title": "The Librarians and the Loom of Fate | Season 1 Episode 10",
        "views": 1269,
        "estimatedMinutesWatched": 17959,
        "estimatedHoursWatched": 299.31666666666666,
        "averageViewDuration_sec": 1320,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "8QZixK70_dY",
        "title": "The Librarians and the Sword in the Stone | Season 1 Episode 2",
        "views": 1181,
        "estimatedMinutesWatched": 21714,
        "estimatedHoursWatched": 361.9,
        "averageViewDuration_sec": 1395,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "He3ScSePRYM",
        "title": "Leverage | The Second David Job | Season 1 Episode 13",
        "views": 1168,
        "estimatedMinutesWatched": 25517,
        "estimatedHoursWatched": 425.28333333333336,
        "averageViewDuration_sec": 1541,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "Ca_QcA2opNk",
        "title": "The Librarians and the Rise of Chaos | Season 3 Episode 1",
        "views": 1114,
        "estimatedMinutesWatched": 12642,
        "estimatedHoursWatched": 210.7,
        "averageViewDuration_sec": 1174,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      }
    ],
    "ytdRevenue": 159837.952,
    "ytdViews": 10164001,
    "ytdHoursWatched": 3851631.716666667,
    "ytdAdImpressions": 40262469,
    "ytdMonetizedPlaybacks": 7105135,
    "yearToDate": {
      "views": 10164001,
      "estimatedMinutesWatched": 231097903,
      "estimatedRevenue": 159837.952,
      "estimatedAdRevenue": 144363.854,
      "adImpressions": 40262469,
      "monetizedPlaybacks": 7105135,
      "watchTimeMinutes": 231097903,
      "hoursWatched": 3851631.716666667,
      "estimatedHoursWatched": 3851631.716666667,
      "period": "Jan 1-Oct 31, 2026",
      "rowsThrough": "2026-10-31"
    },
    "ytdStatus": "fresh_partial",
    "ytdNote": "Through 2026-10-31",
    "status": "fresh_partial",
    "priorPeriod": "Oct 19-Oct 25, 2026",
    "subscribers": 65100,
    "views": 189723,
    "estimatedMinutesWatched": 3191719,
    "subscribersGained": 198,
    "netSubscribers": 120,
    "averageViewDurationSec": null,
    "likeForLike": {
      "basis": "Fresh partial YouTube: Oct 26 through Oct 31, 6 available days; matched against Oct 19 through Oct 24. Not added to app sales or in-app ad delivery.",
      "days": 6,
      "current": {
        "views": 189723,
        "estimatedMinutesWatched": 3191719,
        "estimatedRevenue": 3738.15,
        "estimatedAdRevenue": 3491.838,
        "adImpressions": 565507,
        "monetizedPlaybacks": 98116,
        "watchTimeMinutes": 3191719,
        "hoursWatched": 53195.316666666666,
        "estimatedHoursWatched": 53195.316666666666,
        "days": 6,
        "minutes": 3191719
      },
      "prior": {
        "views": 193314,
        "estimatedMinutesWatched": 3282799,
        "estimatedRevenue": 3427.003,
        "estimatedAdRevenue": 3171.928,
        "adImpressions": 577672,
        "monetizedPlaybacks": 99778,
        "watchTimeMinutes": 3282799,
        "hoursWatched": 54713.316666666666,
        "estimatedHoursWatched": 54713.316666666666,
        "days": 6,
        "minutes": 3282799
      },
      "deltas": {
        "views": -1.8575995530587541,
        "estimatedRevenue": 9.079274222987255,
        "adImpressions": -2.105866304754255,
        "minutes": -2.774461671275031
      }
    },
    "topVideos": [
      {
        "videoId": "q5gQB_AGxlo",
        "title": "🔴 Leverage: Redemption | Season 1 Stream | 24/7 Entertainment 🔴",
        "views": 14409,
        "estimatedMinutesWatched": 528628,
        "estimatedHoursWatched": 8810.466666666667,
        "averageViewDuration_sec": 4174,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "tKAdjrXYj8g",
        "title": "Blackway | FULL MOVIE | Anthony Hopkins | Ray Liotta | Julia Stiles | Alexander Ludwig",
        "views": 10109,
        "estimatedMinutesWatched": 106935,
        "estimatedHoursWatched": 1782.25,
        "averageViewDuration_sec": 1202,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "j05pZDAdHhk",
        "title": "Failed Experiment | The Ark | Full Episode | S02E01",
        "views": 10046,
        "estimatedMinutesWatched": 56774,
        "estimatedHoursWatched": 946.2333333333333,
        "averageViewDuration_sec": 708,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "b6kMpenpQGM",
        "title": "Flyboys | FULL MOVIE | James Franco | Jean Reno | Jennifer Decker | David Ellison",
        "views": 8439,
        "estimatedMinutesWatched": 167085,
        "estimatedHoursWatched": 2784.75,
        "averageViewDuration_sec": 1951,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "-mqcn5M0ktA",
        "title": "LBJ | FULL MOVIE | Woody Harrelson | Jennifer Jason Leigh | Richard Jenkins | Bill Pullman",
        "views": 7828,
        "estimatedMinutesWatched": 79567,
        "estimatedHoursWatched": 1326.1166666666666,
        "averageViewDuration_sec": 1471,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "G_X8m-NJV-U",
        "title": "And the Deadly Drekavac | The Librarians: The Next Chapter | S01E01",
        "views": 5427,
        "estimatedMinutesWatched": 29150,
        "estimatedHoursWatched": 485.8333333333333,
        "averageViewDuration_sec": 810,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "Hu7thpEf-js",
        "title": "The Librarians and the Crown of King Arthur | Season 1 Episode 1",
        "views": 5032,
        "estimatedMinutesWatched": 33923,
        "estimatedHoursWatched": 565.3833333333333,
        "averageViewDuration_sec": 929,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "0T-yveMJPko",
        "title": "The Librarian: Quest for the Spear | FULL MOVIE | Noah Wyle, Kyle MacLachlan, Bob Newhart",
        "views": 4638,
        "estimatedMinutesWatched": 85974,
        "estimatedHoursWatched": 1432.9,
        "averageViewDuration_sec": 2050,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "89J-9vWWPuk",
        "title": "The Triangle: Night 1 | Full Movie | Eric Stoltz, Catherine Bell, Lou Diamond Phillips, Sam Neill",
        "views": 2910,
        "estimatedMinutesWatched": 28458,
        "estimatedHoursWatched": 474.3,
        "averageViewDuration_sec": 1073,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "YM6-fBB7yQY",
        "title": "Leverage | The Nigerian Job | Season 1 Episode 1",
        "views": 2285,
        "estimatedMinutesWatched": 37307,
        "estimatedHoursWatched": 621.7833333333333,
        "averageViewDuration_sec": 1515,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "sjsGMHmm9Yk",
        "title": "The Librarian: Curse of the Judas Chalice | FULL MOVIE | Noah Wyle, Bruce Davison, Bob Newhart",
        "views": 1960,
        "estimatedMinutesWatched": 35944,
        "estimatedHoursWatched": 599.0666666666667,
        "averageViewDuration_sec": 1786,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "4HYYYiExFSs",
        "title": "The Librarian: Return to King Solomon's Mines | FULL MOVIE | Noah Wyle, Rob Newhart, Gabrielle Anwar",
        "views": 1743,
        "estimatedMinutesWatched": 43315,
        "estimatedHoursWatched": 721.9166666666666,
        "averageViewDuration_sec": 2090,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "6etBO8Z9IBA",
        "title": "Leverage | The Last Dam Job | Season 4 Episode 18",
        "views": 1654,
        "estimatedMinutesWatched": 31987,
        "estimatedHoursWatched": 533.1166666666667,
        "averageViewDuration_sec": 1358,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "B_IiECt4atw",
        "title": "Everyone Wanted to Be on This Ship | The Ark | Full Episode | S01E01",
        "views": 1619,
        "estimatedMinutesWatched": 8463,
        "estimatedHoursWatched": 141.05,
        "averageViewDuration_sec": 688,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "rVC2lrrZvwc",
        "title": "The Librarians and the Drowned Book | Season 2 Episode 1",
        "views": 1405,
        "estimatedMinutesWatched": 14275,
        "estimatedHoursWatched": 237.91666666666666,
        "averageViewDuration_sec": 1089,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "JeeMINxXYwQ",
        "title": "Leverage | The Jailhouse Job | Season 3 Episode 1",
        "views": 1325,
        "estimatedMinutesWatched": 22949,
        "estimatedHoursWatched": 382.48333333333335,
        "averageViewDuration_sec": 1413,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "m0v9QKgOHYo",
        "title": "The Librarians and the Loom of Fate | Season 1 Episode 10",
        "views": 1269,
        "estimatedMinutesWatched": 17959,
        "estimatedHoursWatched": 299.31666666666666,
        "averageViewDuration_sec": 1320,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "8QZixK70_dY",
        "title": "The Librarians and the Sword in the Stone | Season 1 Episode 2",
        "views": 1181,
        "estimatedMinutesWatched": 21714,
        "estimatedHoursWatched": 361.9,
        "averageViewDuration_sec": 1395,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "He3ScSePRYM",
        "title": "Leverage | The Second David Job | Season 1 Episode 13",
        "views": 1168,
        "estimatedMinutesWatched": 25517,
        "estimatedHoursWatched": 425.28333333333336,
        "averageViewDuration_sec": 1541,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      },
      {
        "videoId": "Ca_QcA2opNk",
        "title": "The Librarians and the Rise of Chaos | Season 3 Episode 1",
        "views": 1114,
        "estimatedMinutesWatched": 12642,
        "estimatedHoursWatched": 210.7,
        "averageViewDuration_sec": 1174,
        "period": "Oct 26-Oct 31, 2026 (engagement-only query)"
      }
    ],
    "dataCompleteThrough": "2026-10-31",
    "priorWeek": {
      "views": 193314,
      "estimatedMinutesWatched": 3282799,
      "estimatedRevenue": 3427.003,
      "estimatedAdRevenue": 3171.928,
      "adImpressions": 577672,
      "monetizedPlaybacks": 99778,
      "watchTimeMinutes": 3282799,
      "hoursWatched": 54713.316666666666,
      "estimatedHoursWatched": 54713.316666666666,
      "period": "Oct 19-Oct 25, 2026"
    },
    "comparisonNote": "Like-for-like: YouTube views fell 1.9% (189,723 versus 193,314 over six matched days); net subscribers +120.",
    "priorWeekTotals": {
      "views": 193314,
      "estimatedMinutesWatched": 3282799,
      "estimatedRevenue": 3427.003,
      "estimatedAdRevenue": 3171.928,
      "adImpressions": 577672,
      "monetizedPlaybacks": 99778,
      "watchTimeMinutes": 3282799,
      "hoursWatched": 54713.316666666666,
      "estimatedHoursWatched": 54713.316666666666,
      "period": "Oct 19-Oct 25, 2026",
      "days": 6
    },
    "subscriberCountNote": "YouTube Data channel-statistics, ElectricNOW UCTC_pLf6ZvhU_oZzpqJN1Mg; fresh November 2, 2026 snapshot (65,000 on Oct 26).",
    "topVideosPeriod": "Oct 26-Oct 31, 2026 (engagement-only query)",
    "dailyTrendHistory": [
      {
        "date": "2026-10-19",
        "views": 34440,
        "estimatedMinutesWatched": 571641,
        "estimatedRevenue": 580.361,
        "estimatedAdRevenue": 537.45,
        "adImpressions": 102272,
        "monetizedPlaybacks": 18212,
        "watchTimeMinutes": 571641,
        "hoursWatched": 9527.35,
        "estimatedHoursWatched": 9527.35
      },
      {
        "date": "2026-10-20",
        "views": 33824,
        "estimatedMinutesWatched": 537139,
        "estimatedRevenue": 536.899,
        "estimatedAdRevenue": 495.18,
        "adImpressions": 96145,
        "monetizedPlaybacks": 16811,
        "watchTimeMinutes": 537139,
        "hoursWatched": 8952.316666666668,
        "estimatedHoursWatched": 8952.316666666668
      },
      {
        "date": "2026-10-21",
        "views": 32852,
        "estimatedMinutesWatched": 570064,
        "estimatedRevenue": 563.636,
        "estimatedAdRevenue": 521.038,
        "adImpressions": 98110,
        "monetizedPlaybacks": 17026,
        "watchTimeMinutes": 570064,
        "hoursWatched": 9501.066666666668,
        "estimatedHoursWatched": 9501.066666666668
      },
      {
        "date": "2026-10-22",
        "views": 30922,
        "estimatedMinutesWatched": 524019,
        "estimatedRevenue": 578.611,
        "estimatedAdRevenue": 538.58,
        "adImpressions": 95606,
        "monetizedPlaybacks": 16639,
        "watchTimeMinutes": 524019,
        "hoursWatched": 8733.65,
        "estimatedHoursWatched": 8733.65
      },
      {
        "date": "2026-10-23",
        "views": 29742,
        "estimatedMinutesWatched": 505622,
        "estimatedRevenue": 559.864,
        "estimatedAdRevenue": 518.316,
        "adImpressions": 88521,
        "monetizedPlaybacks": 15119,
        "watchTimeMinutes": 505622,
        "hoursWatched": 8427.033333333333,
        "estimatedHoursWatched": 8427.033333333333
      },
      {
        "date": "2026-10-24",
        "views": 31534,
        "estimatedMinutesWatched": 574314,
        "estimatedRevenue": 607.632,
        "estimatedAdRevenue": 561.364,
        "adImpressions": 97018,
        "monetizedPlaybacks": 15971,
        "watchTimeMinutes": 574314,
        "hoursWatched": 9571.9,
        "estimatedHoursWatched": 9571.9
      },
      {
        "date": "2026-10-25",
        "views": 31902,
        "estimatedMinutesWatched": 548436,
        "estimatedRevenue": 597.232,
        "estimatedAdRevenue": 553.562,
        "adImpressions": 97301,
        "monetizedPlaybacks": 16379,
        "watchTimeMinutes": 548436,
        "hoursWatched": 9140.6,
        "estimatedHoursWatched": 9140.6
      },
      {
        "date": "2026-10-26",
        "views": 29621,
        "estimatedMinutesWatched": 558702,
        "estimatedRevenue": 572.834,
        "estimatedAdRevenue": 532.237,
        "adImpressions": 88144,
        "monetizedPlaybacks": 16021,
        "watchTimeMinutes": 558702,
        "hoursWatched": 9311.7,
        "estimatedHoursWatched": 9311.7
      },
      {
        "date": "2026-10-27",
        "views": 30982,
        "estimatedMinutesWatched": 525922,
        "estimatedRevenue": 600.483,
        "estimatedAdRevenue": 562.741,
        "adImpressions": 94501,
        "monetizedPlaybacks": 16574,
        "watchTimeMinutes": 525922,
        "hoursWatched": 8765.366666666667,
        "estimatedHoursWatched": 8765.366666666667
      },
      {
        "date": "2026-10-28",
        "views": 30302,
        "estimatedMinutesWatched": 498982,
        "estimatedRevenue": 598.212,
        "estimatedAdRevenue": 557.301,
        "adImpressions": 89898,
        "monetizedPlaybacks": 15496,
        "watchTimeMinutes": 498982,
        "hoursWatched": 8316.366666666667,
        "estimatedHoursWatched": 8316.366666666667
      },
      {
        "date": "2026-10-29",
        "views": 35080,
        "estimatedMinutesWatched": 555886,
        "estimatedRevenue": 686.097,
        "estimatedAdRevenue": 642.023,
        "adImpressions": 99498,
        "monetizedPlaybacks": 17471,
        "watchTimeMinutes": 555886,
        "hoursWatched": 9264.766666666666,
        "estimatedHoursWatched": 9264.766666666666
      },
      {
        "date": "2026-10-30",
        "views": 32486,
        "estimatedMinutesWatched": 520451,
        "estimatedRevenue": 668.242,
        "estimatedAdRevenue": 628.861,
        "adImpressions": 98831,
        "monetizedPlaybacks": 16648,
        "watchTimeMinutes": 520451,
        "hoursWatched": 8674.183333333332,
        "estimatedHoursWatched": 8674.183333333332
      },
      {
        "date": "2026-10-31",
        "views": 31252,
        "estimatedMinutesWatched": 531776,
        "estimatedRevenue": 612.282,
        "estimatedAdRevenue": 568.675,
        "adImpressions": 94635,
        "monetizedPlaybacks": 15906,
        "watchTimeMinutes": 531776,
        "hoursWatched": 8862.933333333332,
        "estimatedHoursWatched": 8862.933333333332
      }
    ],
    "actualPeriod": "Oct 26-Oct 31, 2026 (6 available days)",
    "lifetimeViews": 28318010,
    "lifetimeVideos": 401,
    "subscribersLost": 78
  },
  "appTrendNote": "This trend charts total app/platform sessions in green alongside daily active users in blue for the complete week Oct 19-Oct 25, 2026. Re-pulled from GA4 on Oct 27: the first Oct 26 pull showed a spike on Oct 25 (772 users / 1,356 sessions) that was preliminary, still-processing data; the re-pull shows 539 users / 1,013 sessions for Oct 25. Landing-page acquisition traffic remains excluded from platform audience totals.",
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
      "activeUsers": 4050.0,
      "sessions": 9548.0,
      "weekStart": "2026-09-07",
      "weekEnd": "2026-09-13",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Sep 14",
      "rawDate": "20260914",
      "activeUsers": 3552.0,
      "sessions": 9065.0,
      "weekStart": "2026-09-14",
      "weekEnd": "2026-09-20",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Sep 21",
      "rawDate": "20260921",
      "activeUsers": 3310.0,
      "sessions": 8276.0,
      "weekStart": "2026-09-21",
      "weekEnd": "2026-09-27",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Sep 28",
      "rawDate": "20260928",
      "activeUsers": 3279.0,
      "sessions": 8350.0,
      "weekStart": "2026-09-28",
      "weekEnd": "2026-10-04",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Oct 5",
      "rawDate": "20261005",
      "activeUsers": 3085.0,
      "sessions": 7623.0,
      "weekStart": "2026-10-05",
      "weekEnd": "2026-10-11",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Oct 12",
      "rawDate": "20261012",
      "activeUsers": 3042.0,
      "sessions": 7763.0,
      "weekStart": "2026-10-12",
      "weekEnd": "2026-10-18",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Oct 19",
      "rawDate": "20261019",
      "activeUsers": 2569.0,
      "sessions": 6526.0,
      "weekStart": "2026-10-19",
      "weekEnd": "2026-10-25",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "date": "Oct 26",
      "rawDate": "20261026",
      "activeUsers": 2522.0,
      "sessions": 6237.0,
      "weekStart": "2026-10-26",
      "weekEnd": "2026-11-01",
      "source": "Internal GA4 pull, property 497892271"
    }
  ],
  "ytdTrendNote": "Property-wide weekly GA4 through Nov 1; includes acquisition traffic, unlike filtered headline.",
  "eventCardsNote": "Fresh GA4 event counts for Oct 26-Nov 1, 2026 (Internal GA4 pull, property 497892271). ads_* events are ElectricNOW IN-APP ad delivery, not paid-campaign impressions.",
  "usGeography": {
    "period": "Oct 26-Nov 1, 2026",
    "freshness": "Oct 26-Nov 1, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "eyebrow": "Where the ElectricNOW app & platform is used across the United States",
    "summaryLine": "2,476 U.S. active users across 51 states/regions and 25 reported metros for Oct 26-Nov 1, 2026.",
    "states": [
      {
        "state": "Texas",
        "activeUsers": 183,
        "sessions": 425,
        "engagedSessions": 353,
        "screenPageViews": 1873,
        "eventCount": 34812,
        "userEngagementDuration": 801214,
        "totalEngagementHours": 222.6,
        "shareOfUsActiveUsersPct": 7.4
      },
      {
        "state": "California",
        "activeUsers": 169,
        "sessions": 407,
        "engagedSessions": 286,
        "screenPageViews": 1561,
        "eventCount": 29358,
        "userEngagementDuration": 1820444,
        "totalEngagementHours": 505.7,
        "shareOfUsActiveUsersPct": 6.8
      },
      {
        "state": "Florida",
        "activeUsers": 151,
        "sessions": 413,
        "engagedSessions": 364,
        "screenPageViews": 2169,
        "eventCount": 55630,
        "userEngagementDuration": 848280,
        "totalEngagementHours": 235.6,
        "shareOfUsActiveUsersPct": 6.1
      },
      {
        "state": "New York",
        "activeUsers": 126,
        "sessions": 344,
        "engagedSessions": 277,
        "screenPageViews": 1641,
        "eventCount": 43518,
        "userEngagementDuration": 749508,
        "totalEngagementHours": 208.2,
        "shareOfUsActiveUsersPct": 5.1
      },
      {
        "state": "Illinois",
        "activeUsers": 115,
        "sessions": 244,
        "engagedSessions": 214,
        "screenPageViews": 1216,
        "eventCount": 19835,
        "userEngagementDuration": 440555,
        "totalEngagementHours": 122.4,
        "shareOfUsActiveUsersPct": 4.6
      },
      {
        "state": "Pennsylvania",
        "activeUsers": 111,
        "sessions": 258,
        "engagedSessions": 212,
        "screenPageViews": 1185,
        "eventCount": 59774,
        "userEngagementDuration": 767018,
        "totalEngagementHours": 213.1,
        "shareOfUsActiveUsersPct": 4.5
      },
      {
        "state": "North Carolina",
        "activeUsers": 97,
        "sessions": 200,
        "engagedSessions": 170,
        "screenPageViews": 960,
        "eventCount": 27464,
        "userEngagementDuration": 536033,
        "totalEngagementHours": 148.9,
        "shareOfUsActiveUsersPct": 3.9
      },
      {
        "state": "Ohio",
        "activeUsers": 96,
        "sessions": 279,
        "engagedSessions": 231,
        "screenPageViews": 1049,
        "eventCount": 27786,
        "userEngagementDuration": 495475,
        "totalEngagementHours": 137.6,
        "shareOfUsActiveUsersPct": 3.9
      },
      {
        "state": "Georgia",
        "activeUsers": 94,
        "sessions": 188,
        "engagedSessions": 154,
        "screenPageViews": 710,
        "eventCount": 15220,
        "userEngagementDuration": 390710,
        "totalEngagementHours": 108.5,
        "shareOfUsActiveUsersPct": 3.8
      },
      {
        "state": "Michigan",
        "activeUsers": 92,
        "sessions": 233,
        "engagedSessions": 195,
        "screenPageViews": 868,
        "eventCount": 18962,
        "userEngagementDuration": 326467,
        "totalEngagementHours": 90.7,
        "shareOfUsActiveUsersPct": 3.7
      },
      {
        "state": "Virginia",
        "activeUsers": 80,
        "sessions": 161,
        "engagedSessions": 131,
        "screenPageViews": 571,
        "eventCount": 15148,
        "userEngagementDuration": 302014,
        "totalEngagementHours": 83.9,
        "shareOfUsActiveUsersPct": 3.2
      },
      {
        "state": "Tennessee",
        "activeUsers": 72,
        "sessions": 177,
        "engagedSessions": 145,
        "screenPageViews": 802,
        "eventCount": 28242,
        "userEngagementDuration": 638934,
        "totalEngagementHours": 177.5,
        "shareOfUsActiveUsersPct": 2.9
      },
      {
        "state": "Indiana",
        "activeUsers": 65,
        "sessions": 159,
        "engagedSessions": 135,
        "screenPageViews": 761,
        "eventCount": 20321,
        "userEngagementDuration": 355819,
        "totalEngagementHours": 98.8,
        "shareOfUsActiveUsersPct": 2.6
      },
      {
        "state": "Minnesota",
        "activeUsers": 61,
        "sessions": 212,
        "engagedSessions": 190,
        "screenPageViews": 1213,
        "eventCount": 62161,
        "userEngagementDuration": 1383620,
        "totalEngagementHours": 384.3,
        "shareOfUsActiveUsersPct": 2.5
      },
      {
        "state": "Oregon",
        "activeUsers": 61,
        "sessions": 98,
        "engagedSessions": 65,
        "screenPageViews": 322,
        "eventCount": 6874,
        "userEngagementDuration": 259978,
        "totalEngagementHours": 72.2,
        "shareOfUsActiveUsersPct": 2.5
      },
      {
        "state": "Missouri",
        "activeUsers": 56,
        "sessions": 117,
        "engagedSessions": 97,
        "screenPageViews": 525,
        "eventCount": 8978,
        "userEngagementDuration": 202581,
        "totalEngagementHours": 56.3,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Oklahoma",
        "activeUsers": 52,
        "sessions": 141,
        "engagedSessions": 117,
        "screenPageViews": 636,
        "eventCount": 27157,
        "userEngagementDuration": 365697,
        "totalEngagementHours": 101.6,
        "shareOfUsActiveUsersPct": 2.1
      },
      {
        "state": "Arizona",
        "activeUsers": 51,
        "sessions": 156,
        "engagedSessions": 137,
        "screenPageViews": 759,
        "eventCount": 22706,
        "userEngagementDuration": 349324,
        "totalEngagementHours": 97.0,
        "shareOfUsActiveUsersPct": 2.1
      },
      {
        "state": "Washington",
        "activeUsers": 48,
        "sessions": 123,
        "engagedSessions": 98,
        "screenPageViews": 587,
        "eventCount": 7171,
        "userEngagementDuration": 237624,
        "totalEngagementHours": 66.0,
        "shareOfUsActiveUsersPct": 1.9
      },
      {
        "state": "Colorado",
        "activeUsers": 47,
        "sessions": 100,
        "engagedSessions": 81,
        "screenPageViews": 468,
        "eventCount": 23049,
        "userEngagementDuration": 299260,
        "totalEngagementHours": 83.1,
        "shareOfUsActiveUsersPct": 1.9
      },
      {
        "state": "New Jersey",
        "activeUsers": 43,
        "sessions": 145,
        "engagedSessions": 130,
        "screenPageViews": 635,
        "eventCount": 12223,
        "userEngagementDuration": 338190,
        "totalEngagementHours": 93.9,
        "shareOfUsActiveUsersPct": 1.7
      },
      {
        "state": "Kentucky",
        "activeUsers": 42,
        "sessions": 75,
        "engagedSessions": 62,
        "screenPageViews": 393,
        "eventCount": 11139,
        "userEngagementDuration": 156532,
        "totalEngagementHours": 43.5,
        "shareOfUsActiveUsersPct": 1.7
      },
      {
        "state": "South Carolina",
        "activeUsers": 42,
        "sessions": 115,
        "engagedSessions": 100,
        "screenPageViews": 479,
        "eventCount": 6544,
        "userEngagementDuration": 195913,
        "totalEngagementHours": 54.4,
        "shareOfUsActiveUsersPct": 1.7
      },
      {
        "state": "Maryland",
        "activeUsers": 38,
        "sessions": 87,
        "engagedSessions": 70,
        "screenPageViews": 369,
        "eventCount": 15354,
        "userEngagementDuration": 265303,
        "totalEngagementHours": 73.7,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Wisconsin",
        "activeUsers": 36,
        "sessions": 93,
        "engagedSessions": 77,
        "screenPageViews": 405,
        "eventCount": 30119,
        "userEngagementDuration": 473762,
        "totalEngagementHours": 131.6,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Massachusetts",
        "activeUsers": 35,
        "sessions": 87,
        "engagedSessions": 70,
        "screenPageViews": 366,
        "eventCount": 16597,
        "userEngagementDuration": 415644,
        "totalEngagementHours": 115.5,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "Alabama",
        "activeUsers": 31,
        "sessions": 65,
        "engagedSessions": 42,
        "screenPageViews": 270,
        "eventCount": 6650,
        "userEngagementDuration": 129691,
        "totalEngagementHours": 36.0,
        "shareOfUsActiveUsersPct": 1.3
      },
      {
        "state": "Arkansas",
        "activeUsers": 29,
        "sessions": 53,
        "engagedSessions": 42,
        "screenPageViews": 233,
        "eventCount": 3163,
        "userEngagementDuration": 42033,
        "totalEngagementHours": 11.7,
        "shareOfUsActiveUsersPct": 1.2
      },
      {
        "state": "Connecticut",
        "activeUsers": 28,
        "sessions": 59,
        "engagedSessions": 52,
        "screenPageViews": 312,
        "eventCount": 8234,
        "userEngagementDuration": 142100,
        "totalEngagementHours": 39.5,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Louisiana",
        "activeUsers": 28,
        "sessions": 39,
        "engagedSessions": 31,
        "screenPageViews": 151,
        "eventCount": 3674,
        "userEngagementDuration": 42887,
        "totalEngagementHours": 11.9,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Mississippi",
        "activeUsers": 26,
        "sessions": 44,
        "engagedSessions": 32,
        "screenPageViews": 197,
        "eventCount": 3063,
        "userEngagementDuration": 37164,
        "totalEngagementHours": 10.3,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Nevada",
        "activeUsers": 26,
        "sessions": 70,
        "engagedSessions": 61,
        "screenPageViews": 282,
        "eventCount": 23049,
        "userEngagementDuration": 371369,
        "totalEngagementHours": 103.2,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Utah",
        "activeUsers": 25,
        "sessions": 40,
        "engagedSessions": 33,
        "screenPageViews": 187,
        "eventCount": 956,
        "userEngagementDuration": 36487,
        "totalEngagementHours": 10.1,
        "shareOfUsActiveUsersPct": 1.0
      },
      {
        "state": "Kansas",
        "activeUsers": 24,
        "sessions": 43,
        "engagedSessions": 35,
        "screenPageViews": 244,
        "eventCount": 4146,
        "userEngagementDuration": 156267,
        "totalEngagementHours": 43.4,
        "shareOfUsActiveUsersPct": 1.0
      },
      {
        "state": "Iowa",
        "activeUsers": 23,
        "sessions": 39,
        "engagedSessions": 30,
        "screenPageViews": 162,
        "eventCount": 2400,
        "userEngagementDuration": 69633,
        "totalEngagementHours": 19.3,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "West Virginia",
        "activeUsers": 18,
        "sessions": 48,
        "engagedSessions": 43,
        "screenPageViews": 251,
        "eventCount": 10879,
        "userEngagementDuration": 182862,
        "totalEngagementHours": 50.8,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "Nebraska",
        "activeUsers": 17,
        "sessions": 36,
        "engagedSessions": 29,
        "screenPageViews": 248,
        "eventCount": 1116,
        "userEngagementDuration": 37320,
        "totalEngagementHours": 10.4,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "New Mexico",
        "activeUsers": 17,
        "sessions": 62,
        "engagedSessions": 43,
        "screenPageViews": 287,
        "eventCount": 7416,
        "userEngagementDuration": 124588,
        "totalEngagementHours": 34.6,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "Idaho",
        "activeUsers": 13,
        "sessions": 44,
        "engagedSessions": 36,
        "screenPageViews": 178,
        "eventCount": 7847,
        "userEngagementDuration": 157319,
        "totalEngagementHours": 43.7,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Rhode Island",
        "activeUsers": 12,
        "sessions": 24,
        "engagedSessions": 22,
        "screenPageViews": 128,
        "eventCount": 1909,
        "userEngagementDuration": 46657,
        "totalEngagementHours": 13.0,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "South Dakota",
        "activeUsers": 12,
        "sessions": 32,
        "engagedSessions": 27,
        "screenPageViews": 126,
        "eventCount": 2763,
        "userEngagementDuration": 47615,
        "totalEngagementHours": 13.2,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Wyoming",
        "activeUsers": 12,
        "sessions": 31,
        "engagedSessions": 23,
        "screenPageViews": 162,
        "eventCount": 3496,
        "userEngagementDuration": 58657,
        "totalEngagementHours": 16.3,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "District of Columbia",
        "activeUsers": 11,
        "sessions": 12,
        "engagedSessions": 10,
        "screenPageViews": 36,
        "eventCount": 235,
        "userEngagementDuration": 900,
        "totalEngagementHours": 0.2,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Maine",
        "activeUsers": 11,
        "sessions": 43,
        "engagedSessions": 38,
        "screenPageViews": 193,
        "eventCount": 8736,
        "userEngagementDuration": 137665,
        "totalEngagementHours": 38.2,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "New Hampshire",
        "activeUsers": 11,
        "sessions": 24,
        "engagedSessions": 22,
        "screenPageViews": 142,
        "eventCount": 2924,
        "userEngagementDuration": 51709,
        "totalEngagementHours": 14.4,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Montana",
        "activeUsers": 10,
        "sessions": 14,
        "engagedSessions": 9,
        "screenPageViews": 60,
        "eventCount": 1843,
        "userEngagementDuration": 20307,
        "totalEngagementHours": 5.6,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Hawaii",
        "activeUsers": 7,
        "sessions": 27,
        "engagedSessions": 27,
        "screenPageViews": 69,
        "eventCount": 1416,
        "userEngagementDuration": 47820,
        "totalEngagementHours": 13.3,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Vermont",
        "activeUsers": 7,
        "sessions": 8,
        "engagedSessions": 5,
        "screenPageViews": 39,
        "eventCount": 241,
        "userEngagementDuration": 8144,
        "totalEngagementHours": 2.3,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Alaska",
        "activeUsers": 6,
        "sessions": 6,
        "engagedSessions": 4,
        "screenPageViews": 55,
        "eventCount": 256,
        "userEngagementDuration": 9097,
        "totalEngagementHours": 2.5,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Delaware",
        "activeUsers": 5,
        "sessions": 9,
        "engagedSessions": 9,
        "screenPageViews": 48,
        "eventCount": 1254,
        "userEngagementDuration": 16136,
        "totalEngagementHours": 4.5,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "North Dakota",
        "activeUsers": 4,
        "sessions": 10,
        "engagedSessions": 9,
        "screenPageViews": 48,
        "eventCount": 129,
        "userEngagementDuration": 350,
        "totalEngagementHours": 0.1,
        "shareOfUsActiveUsersPct": 0.2
      }
    ],
    "topCities": [
      {
        "city": "New York",
        "region": "New York",
        "activeUsers": 63,
        "sessions": 128,
        "engagedSessions": 90,
        "screenPageViews": 686,
        "engagementRate": 70.3
      },
      {
        "city": "Chicago",
        "region": "Illinois",
        "activeUsers": 54,
        "sessions": 125,
        "engagedSessions": 110,
        "screenPageViews": 576,
        "engagementRate": 88.0
      },
      {
        "city": "Los Angeles",
        "region": "California",
        "activeUsers": 39,
        "sessions": 106,
        "engagedSessions": 61,
        "screenPageViews": 251,
        "engagementRate": 57.5
      },
      {
        "city": "Atlanta",
        "region": "Georgia",
        "activeUsers": 33,
        "sessions": 63,
        "engagedSessions": 55,
        "screenPageViews": 175,
        "engagementRate": 87.3
      },
      {
        "city": "Indianapolis",
        "region": "Indiana",
        "activeUsers": 29,
        "sessions": 71,
        "engagedSessions": 64,
        "screenPageViews": 381,
        "engagementRate": 90.1
      },
      {
        "city": "Houston",
        "region": "Texas",
        "activeUsers": 26,
        "sessions": 55,
        "engagedSessions": 40,
        "screenPageViews": 223,
        "engagementRate": 72.7
      },
      {
        "city": "Detroit",
        "region": "Michigan",
        "activeUsers": 25,
        "sessions": 46,
        "engagedSessions": 40,
        "screenPageViews": 220,
        "engagementRate": 87.0
      },
      {
        "city": "Philadelphia",
        "region": "Pennsylvania",
        "activeUsers": 23,
        "sessions": 44,
        "engagedSessions": 35,
        "screenPageViews": 283,
        "engagementRate": 79.5
      },
      {
        "city": "Fort Worth",
        "region": "Texas",
        "activeUsers": 22,
        "sessions": 41,
        "engagedSessions": 25,
        "screenPageViews": 123,
        "engagementRate": 61.0
      },
      {
        "city": "Minneapolis",
        "region": "Minnesota",
        "activeUsers": 22,
        "sessions": 37,
        "engagedSessions": 29,
        "screenPageViews": 133,
        "engagementRate": 78.4
      },
      {
        "city": "Oklahoma City",
        "region": "Oklahoma",
        "activeUsers": 22,
        "sessions": 80,
        "engagedSessions": 67,
        "screenPageViews": 277,
        "engagementRate": 83.8
      },
      {
        "city": "Charlotte",
        "region": "North Carolina",
        "activeUsers": 21,
        "sessions": 47,
        "engagedSessions": 40,
        "screenPageViews": 201,
        "engagementRate": 85.1
      },
      {
        "city": "Denver",
        "region": "Colorado",
        "activeUsers": 21,
        "sessions": 36,
        "engagedSessions": 29,
        "screenPageViews": 172,
        "engagementRate": 80.6
      },
      {
        "city": "Las Vegas Valley",
        "region": "Nevada",
        "activeUsers": 20,
        "sessions": 63,
        "engagedSessions": 56,
        "screenPageViews": 261,
        "engagementRate": 88.9
      },
      {
        "city": "Portland",
        "region": "Oregon",
        "activeUsers": 20,
        "sessions": 33,
        "engagedSessions": 27,
        "screenPageViews": 112,
        "engagementRate": 81.8
      },
      {
        "city": "Dallas",
        "region": "Texas",
        "activeUsers": 19,
        "sessions": 52,
        "engagedSessions": 49,
        "screenPageViews": 137,
        "engagementRate": 94.2
      },
      {
        "city": "Jacksonville",
        "region": "Florida",
        "activeUsers": 19,
        "sessions": 55,
        "engagedSessions": 44,
        "screenPageViews": 278,
        "engagementRate": 80.0
      },
      {
        "city": "Pittsburgh",
        "region": "Pennsylvania",
        "activeUsers": 19,
        "sessions": 32,
        "engagedSessions": 28,
        "screenPageViews": 149,
        "engagementRate": 87.5
      },
      {
        "city": "Austin",
        "region": "Texas",
        "activeUsers": 17,
        "sessions": 27,
        "engagedSessions": 22,
        "screenPageViews": 112,
        "engagementRate": 81.5
      },
      {
        "city": "Nashville",
        "region": "Tennessee",
        "activeUsers": 17,
        "sessions": 46,
        "engagedSessions": 40,
        "screenPageViews": 171,
        "engagementRate": 87.0
      },
      {
        "city": "Phoenix",
        "region": "Arizona",
        "activeUsers": 14,
        "sessions": 37,
        "engagedSessions": 32,
        "screenPageViews": 150,
        "engagementRate": 86.5
      },
      {
        "city": "Columbus",
        "region": "Ohio",
        "activeUsers": 13,
        "sessions": 16,
        "engagedSessions": 13,
        "screenPageViews": 79,
        "engagementRate": 81.2
      },
      {
        "city": "Tulsa",
        "region": "Oklahoma",
        "activeUsers": 13,
        "sessions": 24,
        "engagedSessions": 16,
        "screenPageViews": 151,
        "engagementRate": 66.7
      },
      {
        "city": "Omaha",
        "region": "Nebraska",
        "activeUsers": 12,
        "sessions": 22,
        "engagedSessions": 19,
        "screenPageViews": 148,
        "engagementRate": 86.4
      },
      {
        "city": "San Antonio",
        "region": "Texas",
        "activeUsers": 12,
        "sessions": 25,
        "engagedSessions": 24,
        "screenPageViews": 58,
        "engagementRate": 96.0
      }
    ],
    "usTotals": {
      "activeUsers": 2476,
      "sessions": 5919,
      "engagedSessions": 4875,
      "userEngagementDuration": 15390676,
      "totalEngagementHours": 4275.2
    },
    "rows": [
      {
        "state": "Texas",
        "activeUsers": 183,
        "sessions": 425,
        "engagedSessions": 353,
        "screenPageViews": 1873,
        "eventCount": 34812,
        "userEngagementDuration": 801214,
        "totalEngagementHours": 222.6,
        "shareOfUsActiveUsersPct": 7.4
      },
      {
        "state": "California",
        "activeUsers": 169,
        "sessions": 407,
        "engagedSessions": 286,
        "screenPageViews": 1561,
        "eventCount": 29358,
        "userEngagementDuration": 1820444,
        "totalEngagementHours": 505.7,
        "shareOfUsActiveUsersPct": 6.8
      },
      {
        "state": "Florida",
        "activeUsers": 151,
        "sessions": 413,
        "engagedSessions": 364,
        "screenPageViews": 2169,
        "eventCount": 55630,
        "userEngagementDuration": 848280,
        "totalEngagementHours": 235.6,
        "shareOfUsActiveUsersPct": 6.1
      },
      {
        "state": "New York",
        "activeUsers": 126,
        "sessions": 344,
        "engagedSessions": 277,
        "screenPageViews": 1641,
        "eventCount": 43518,
        "userEngagementDuration": 749508,
        "totalEngagementHours": 208.2,
        "shareOfUsActiveUsersPct": 5.1
      },
      {
        "state": "Illinois",
        "activeUsers": 115,
        "sessions": 244,
        "engagedSessions": 214,
        "screenPageViews": 1216,
        "eventCount": 19835,
        "userEngagementDuration": 440555,
        "totalEngagementHours": 122.4,
        "shareOfUsActiveUsersPct": 4.6
      },
      {
        "state": "Pennsylvania",
        "activeUsers": 111,
        "sessions": 258,
        "engagedSessions": 212,
        "screenPageViews": 1185,
        "eventCount": 59774,
        "userEngagementDuration": 767018,
        "totalEngagementHours": 213.1,
        "shareOfUsActiveUsersPct": 4.5
      },
      {
        "state": "North Carolina",
        "activeUsers": 97,
        "sessions": 200,
        "engagedSessions": 170,
        "screenPageViews": 960,
        "eventCount": 27464,
        "userEngagementDuration": 536033,
        "totalEngagementHours": 148.9,
        "shareOfUsActiveUsersPct": 3.9
      },
      {
        "state": "Ohio",
        "activeUsers": 96,
        "sessions": 279,
        "engagedSessions": 231,
        "screenPageViews": 1049,
        "eventCount": 27786,
        "userEngagementDuration": 495475,
        "totalEngagementHours": 137.6,
        "shareOfUsActiveUsersPct": 3.9
      },
      {
        "state": "Georgia",
        "activeUsers": 94,
        "sessions": 188,
        "engagedSessions": 154,
        "screenPageViews": 710,
        "eventCount": 15220,
        "userEngagementDuration": 390710,
        "totalEngagementHours": 108.5,
        "shareOfUsActiveUsersPct": 3.8
      },
      {
        "state": "Michigan",
        "activeUsers": 92,
        "sessions": 233,
        "engagedSessions": 195,
        "screenPageViews": 868,
        "eventCount": 18962,
        "userEngagementDuration": 326467,
        "totalEngagementHours": 90.7,
        "shareOfUsActiveUsersPct": 3.7
      },
      {
        "state": "Virginia",
        "activeUsers": 80,
        "sessions": 161,
        "engagedSessions": 131,
        "screenPageViews": 571,
        "eventCount": 15148,
        "userEngagementDuration": 302014,
        "totalEngagementHours": 83.9,
        "shareOfUsActiveUsersPct": 3.2
      },
      {
        "state": "Tennessee",
        "activeUsers": 72,
        "sessions": 177,
        "engagedSessions": 145,
        "screenPageViews": 802,
        "eventCount": 28242,
        "userEngagementDuration": 638934,
        "totalEngagementHours": 177.5,
        "shareOfUsActiveUsersPct": 2.9
      },
      {
        "state": "Indiana",
        "activeUsers": 65,
        "sessions": 159,
        "engagedSessions": 135,
        "screenPageViews": 761,
        "eventCount": 20321,
        "userEngagementDuration": 355819,
        "totalEngagementHours": 98.8,
        "shareOfUsActiveUsersPct": 2.6
      },
      {
        "state": "Minnesota",
        "activeUsers": 61,
        "sessions": 212,
        "engagedSessions": 190,
        "screenPageViews": 1213,
        "eventCount": 62161,
        "userEngagementDuration": 1383620,
        "totalEngagementHours": 384.3,
        "shareOfUsActiveUsersPct": 2.5
      },
      {
        "state": "Oregon",
        "activeUsers": 61,
        "sessions": 98,
        "engagedSessions": 65,
        "screenPageViews": 322,
        "eventCount": 6874,
        "userEngagementDuration": 259978,
        "totalEngagementHours": 72.2,
        "shareOfUsActiveUsersPct": 2.5
      },
      {
        "state": "Missouri",
        "activeUsers": 56,
        "sessions": 117,
        "engagedSessions": 97,
        "screenPageViews": 525,
        "eventCount": 8978,
        "userEngagementDuration": 202581,
        "totalEngagementHours": 56.3,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Oklahoma",
        "activeUsers": 52,
        "sessions": 141,
        "engagedSessions": 117,
        "screenPageViews": 636,
        "eventCount": 27157,
        "userEngagementDuration": 365697,
        "totalEngagementHours": 101.6,
        "shareOfUsActiveUsersPct": 2.1
      },
      {
        "state": "Arizona",
        "activeUsers": 51,
        "sessions": 156,
        "engagedSessions": 137,
        "screenPageViews": 759,
        "eventCount": 22706,
        "userEngagementDuration": 349324,
        "totalEngagementHours": 97.0,
        "shareOfUsActiveUsersPct": 2.1
      },
      {
        "state": "Washington",
        "activeUsers": 48,
        "sessions": 123,
        "engagedSessions": 98,
        "screenPageViews": 587,
        "eventCount": 7171,
        "userEngagementDuration": 237624,
        "totalEngagementHours": 66.0,
        "shareOfUsActiveUsersPct": 1.9
      },
      {
        "state": "Colorado",
        "activeUsers": 47,
        "sessions": 100,
        "engagedSessions": 81,
        "screenPageViews": 468,
        "eventCount": 23049,
        "userEngagementDuration": 299260,
        "totalEngagementHours": 83.1,
        "shareOfUsActiveUsersPct": 1.9
      },
      {
        "state": "New Jersey",
        "activeUsers": 43,
        "sessions": 145,
        "engagedSessions": 130,
        "screenPageViews": 635,
        "eventCount": 12223,
        "userEngagementDuration": 338190,
        "totalEngagementHours": 93.9,
        "shareOfUsActiveUsersPct": 1.7
      },
      {
        "state": "Kentucky",
        "activeUsers": 42,
        "sessions": 75,
        "engagedSessions": 62,
        "screenPageViews": 393,
        "eventCount": 11139,
        "userEngagementDuration": 156532,
        "totalEngagementHours": 43.5,
        "shareOfUsActiveUsersPct": 1.7
      },
      {
        "state": "South Carolina",
        "activeUsers": 42,
        "sessions": 115,
        "engagedSessions": 100,
        "screenPageViews": 479,
        "eventCount": 6544,
        "userEngagementDuration": 195913,
        "totalEngagementHours": 54.4,
        "shareOfUsActiveUsersPct": 1.7
      },
      {
        "state": "Maryland",
        "activeUsers": 38,
        "sessions": 87,
        "engagedSessions": 70,
        "screenPageViews": 369,
        "eventCount": 15354,
        "userEngagementDuration": 265303,
        "totalEngagementHours": 73.7,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Wisconsin",
        "activeUsers": 36,
        "sessions": 93,
        "engagedSessions": 77,
        "screenPageViews": 405,
        "eventCount": 30119,
        "userEngagementDuration": 473762,
        "totalEngagementHours": 131.6,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Massachusetts",
        "activeUsers": 35,
        "sessions": 87,
        "engagedSessions": 70,
        "screenPageViews": 366,
        "eventCount": 16597,
        "userEngagementDuration": 415644,
        "totalEngagementHours": 115.5,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "Alabama",
        "activeUsers": 31,
        "sessions": 65,
        "engagedSessions": 42,
        "screenPageViews": 270,
        "eventCount": 6650,
        "userEngagementDuration": 129691,
        "totalEngagementHours": 36.0,
        "shareOfUsActiveUsersPct": 1.3
      },
      {
        "state": "Arkansas",
        "activeUsers": 29,
        "sessions": 53,
        "engagedSessions": 42,
        "screenPageViews": 233,
        "eventCount": 3163,
        "userEngagementDuration": 42033,
        "totalEngagementHours": 11.7,
        "shareOfUsActiveUsersPct": 1.2
      },
      {
        "state": "Connecticut",
        "activeUsers": 28,
        "sessions": 59,
        "engagedSessions": 52,
        "screenPageViews": 312,
        "eventCount": 8234,
        "userEngagementDuration": 142100,
        "totalEngagementHours": 39.5,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Louisiana",
        "activeUsers": 28,
        "sessions": 39,
        "engagedSessions": 31,
        "screenPageViews": 151,
        "eventCount": 3674,
        "userEngagementDuration": 42887,
        "totalEngagementHours": 11.9,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Mississippi",
        "activeUsers": 26,
        "sessions": 44,
        "engagedSessions": 32,
        "screenPageViews": 197,
        "eventCount": 3063,
        "userEngagementDuration": 37164,
        "totalEngagementHours": 10.3,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Nevada",
        "activeUsers": 26,
        "sessions": 70,
        "engagedSessions": 61,
        "screenPageViews": 282,
        "eventCount": 23049,
        "userEngagementDuration": 371369,
        "totalEngagementHours": 103.2,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Utah",
        "activeUsers": 25,
        "sessions": 40,
        "engagedSessions": 33,
        "screenPageViews": 187,
        "eventCount": 956,
        "userEngagementDuration": 36487,
        "totalEngagementHours": 10.1,
        "shareOfUsActiveUsersPct": 1.0
      },
      {
        "state": "Kansas",
        "activeUsers": 24,
        "sessions": 43,
        "engagedSessions": 35,
        "screenPageViews": 244,
        "eventCount": 4146,
        "userEngagementDuration": 156267,
        "totalEngagementHours": 43.4,
        "shareOfUsActiveUsersPct": 1.0
      },
      {
        "state": "Iowa",
        "activeUsers": 23,
        "sessions": 39,
        "engagedSessions": 30,
        "screenPageViews": 162,
        "eventCount": 2400,
        "userEngagementDuration": 69633,
        "totalEngagementHours": 19.3,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "West Virginia",
        "activeUsers": 18,
        "sessions": 48,
        "engagedSessions": 43,
        "screenPageViews": 251,
        "eventCount": 10879,
        "userEngagementDuration": 182862,
        "totalEngagementHours": 50.8,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "Nebraska",
        "activeUsers": 17,
        "sessions": 36,
        "engagedSessions": 29,
        "screenPageViews": 248,
        "eventCount": 1116,
        "userEngagementDuration": 37320,
        "totalEngagementHours": 10.4,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "New Mexico",
        "activeUsers": 17,
        "sessions": 62,
        "engagedSessions": 43,
        "screenPageViews": 287,
        "eventCount": 7416,
        "userEngagementDuration": 124588,
        "totalEngagementHours": 34.6,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "Idaho",
        "activeUsers": 13,
        "sessions": 44,
        "engagedSessions": 36,
        "screenPageViews": 178,
        "eventCount": 7847,
        "userEngagementDuration": 157319,
        "totalEngagementHours": 43.7,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Rhode Island",
        "activeUsers": 12,
        "sessions": 24,
        "engagedSessions": 22,
        "screenPageViews": 128,
        "eventCount": 1909,
        "userEngagementDuration": 46657,
        "totalEngagementHours": 13.0,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "South Dakota",
        "activeUsers": 12,
        "sessions": 32,
        "engagedSessions": 27,
        "screenPageViews": 126,
        "eventCount": 2763,
        "userEngagementDuration": 47615,
        "totalEngagementHours": 13.2,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Wyoming",
        "activeUsers": 12,
        "sessions": 31,
        "engagedSessions": 23,
        "screenPageViews": 162,
        "eventCount": 3496,
        "userEngagementDuration": 58657,
        "totalEngagementHours": 16.3,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "District of Columbia",
        "activeUsers": 11,
        "sessions": 12,
        "engagedSessions": 10,
        "screenPageViews": 36,
        "eventCount": 235,
        "userEngagementDuration": 900,
        "totalEngagementHours": 0.2,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Maine",
        "activeUsers": 11,
        "sessions": 43,
        "engagedSessions": 38,
        "screenPageViews": 193,
        "eventCount": 8736,
        "userEngagementDuration": 137665,
        "totalEngagementHours": 38.2,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "New Hampshire",
        "activeUsers": 11,
        "sessions": 24,
        "engagedSessions": 22,
        "screenPageViews": 142,
        "eventCount": 2924,
        "userEngagementDuration": 51709,
        "totalEngagementHours": 14.4,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Montana",
        "activeUsers": 10,
        "sessions": 14,
        "engagedSessions": 9,
        "screenPageViews": 60,
        "eventCount": 1843,
        "userEngagementDuration": 20307,
        "totalEngagementHours": 5.6,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Hawaii",
        "activeUsers": 7,
        "sessions": 27,
        "engagedSessions": 27,
        "screenPageViews": 69,
        "eventCount": 1416,
        "userEngagementDuration": 47820,
        "totalEngagementHours": 13.3,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Vermont",
        "activeUsers": 7,
        "sessions": 8,
        "engagedSessions": 5,
        "screenPageViews": 39,
        "eventCount": 241,
        "userEngagementDuration": 8144,
        "totalEngagementHours": 2.3,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Alaska",
        "activeUsers": 6,
        "sessions": 6,
        "engagedSessions": 4,
        "screenPageViews": 55,
        "eventCount": 256,
        "userEngagementDuration": 9097,
        "totalEngagementHours": 2.5,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Delaware",
        "activeUsers": 5,
        "sessions": 9,
        "engagedSessions": 9,
        "screenPageViews": 48,
        "eventCount": 1254,
        "userEngagementDuration": 16136,
        "totalEngagementHours": 4.5,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "North Dakota",
        "activeUsers": 4,
        "sessions": 10,
        "engagedSessions": 9,
        "screenPageViews": 48,
        "eventCount": 129,
        "userEngagementDuration": 350,
        "totalEngagementHours": 0.1,
        "shareOfUsActiveUsersPct": 0.2
      }
    ],
    "items": [
      {
        "state": "Texas",
        "activeUsers": 183,
        "sessions": 425,
        "engagedSessions": 353,
        "screenPageViews": 1873,
        "eventCount": 34812,
        "userEngagementDuration": 801214,
        "totalEngagementHours": 222.6,
        "shareOfUsActiveUsersPct": 7.4
      },
      {
        "state": "California",
        "activeUsers": 169,
        "sessions": 407,
        "engagedSessions": 286,
        "screenPageViews": 1561,
        "eventCount": 29358,
        "userEngagementDuration": 1820444,
        "totalEngagementHours": 505.7,
        "shareOfUsActiveUsersPct": 6.8
      },
      {
        "state": "Florida",
        "activeUsers": 151,
        "sessions": 413,
        "engagedSessions": 364,
        "screenPageViews": 2169,
        "eventCount": 55630,
        "userEngagementDuration": 848280,
        "totalEngagementHours": 235.6,
        "shareOfUsActiveUsersPct": 6.1
      },
      {
        "state": "New York",
        "activeUsers": 126,
        "sessions": 344,
        "engagedSessions": 277,
        "screenPageViews": 1641,
        "eventCount": 43518,
        "userEngagementDuration": 749508,
        "totalEngagementHours": 208.2,
        "shareOfUsActiveUsersPct": 5.1
      },
      {
        "state": "Illinois",
        "activeUsers": 115,
        "sessions": 244,
        "engagedSessions": 214,
        "screenPageViews": 1216,
        "eventCount": 19835,
        "userEngagementDuration": 440555,
        "totalEngagementHours": 122.4,
        "shareOfUsActiveUsersPct": 4.6
      },
      {
        "state": "Pennsylvania",
        "activeUsers": 111,
        "sessions": 258,
        "engagedSessions": 212,
        "screenPageViews": 1185,
        "eventCount": 59774,
        "userEngagementDuration": 767018,
        "totalEngagementHours": 213.1,
        "shareOfUsActiveUsersPct": 4.5
      },
      {
        "state": "North Carolina",
        "activeUsers": 97,
        "sessions": 200,
        "engagedSessions": 170,
        "screenPageViews": 960,
        "eventCount": 27464,
        "userEngagementDuration": 536033,
        "totalEngagementHours": 148.9,
        "shareOfUsActiveUsersPct": 3.9
      },
      {
        "state": "Ohio",
        "activeUsers": 96,
        "sessions": 279,
        "engagedSessions": 231,
        "screenPageViews": 1049,
        "eventCount": 27786,
        "userEngagementDuration": 495475,
        "totalEngagementHours": 137.6,
        "shareOfUsActiveUsersPct": 3.9
      },
      {
        "state": "Georgia",
        "activeUsers": 94,
        "sessions": 188,
        "engagedSessions": 154,
        "screenPageViews": 710,
        "eventCount": 15220,
        "userEngagementDuration": 390710,
        "totalEngagementHours": 108.5,
        "shareOfUsActiveUsersPct": 3.8
      },
      {
        "state": "Michigan",
        "activeUsers": 92,
        "sessions": 233,
        "engagedSessions": 195,
        "screenPageViews": 868,
        "eventCount": 18962,
        "userEngagementDuration": 326467,
        "totalEngagementHours": 90.7,
        "shareOfUsActiveUsersPct": 3.7
      },
      {
        "state": "Virginia",
        "activeUsers": 80,
        "sessions": 161,
        "engagedSessions": 131,
        "screenPageViews": 571,
        "eventCount": 15148,
        "userEngagementDuration": 302014,
        "totalEngagementHours": 83.9,
        "shareOfUsActiveUsersPct": 3.2
      },
      {
        "state": "Tennessee",
        "activeUsers": 72,
        "sessions": 177,
        "engagedSessions": 145,
        "screenPageViews": 802,
        "eventCount": 28242,
        "userEngagementDuration": 638934,
        "totalEngagementHours": 177.5,
        "shareOfUsActiveUsersPct": 2.9
      },
      {
        "state": "Indiana",
        "activeUsers": 65,
        "sessions": 159,
        "engagedSessions": 135,
        "screenPageViews": 761,
        "eventCount": 20321,
        "userEngagementDuration": 355819,
        "totalEngagementHours": 98.8,
        "shareOfUsActiveUsersPct": 2.6
      },
      {
        "state": "Minnesota",
        "activeUsers": 61,
        "sessions": 212,
        "engagedSessions": 190,
        "screenPageViews": 1213,
        "eventCount": 62161,
        "userEngagementDuration": 1383620,
        "totalEngagementHours": 384.3,
        "shareOfUsActiveUsersPct": 2.5
      },
      {
        "state": "Oregon",
        "activeUsers": 61,
        "sessions": 98,
        "engagedSessions": 65,
        "screenPageViews": 322,
        "eventCount": 6874,
        "userEngagementDuration": 259978,
        "totalEngagementHours": 72.2,
        "shareOfUsActiveUsersPct": 2.5
      },
      {
        "state": "Missouri",
        "activeUsers": 56,
        "sessions": 117,
        "engagedSessions": 97,
        "screenPageViews": 525,
        "eventCount": 8978,
        "userEngagementDuration": 202581,
        "totalEngagementHours": 56.3,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Oklahoma",
        "activeUsers": 52,
        "sessions": 141,
        "engagedSessions": 117,
        "screenPageViews": 636,
        "eventCount": 27157,
        "userEngagementDuration": 365697,
        "totalEngagementHours": 101.6,
        "shareOfUsActiveUsersPct": 2.1
      },
      {
        "state": "Arizona",
        "activeUsers": 51,
        "sessions": 156,
        "engagedSessions": 137,
        "screenPageViews": 759,
        "eventCount": 22706,
        "userEngagementDuration": 349324,
        "totalEngagementHours": 97.0,
        "shareOfUsActiveUsersPct": 2.1
      },
      {
        "state": "Washington",
        "activeUsers": 48,
        "sessions": 123,
        "engagedSessions": 98,
        "screenPageViews": 587,
        "eventCount": 7171,
        "userEngagementDuration": 237624,
        "totalEngagementHours": 66.0,
        "shareOfUsActiveUsersPct": 1.9
      },
      {
        "state": "Colorado",
        "activeUsers": 47,
        "sessions": 100,
        "engagedSessions": 81,
        "screenPageViews": 468,
        "eventCount": 23049,
        "userEngagementDuration": 299260,
        "totalEngagementHours": 83.1,
        "shareOfUsActiveUsersPct": 1.9
      },
      {
        "state": "New Jersey",
        "activeUsers": 43,
        "sessions": 145,
        "engagedSessions": 130,
        "screenPageViews": 635,
        "eventCount": 12223,
        "userEngagementDuration": 338190,
        "totalEngagementHours": 93.9,
        "shareOfUsActiveUsersPct": 1.7
      },
      {
        "state": "Kentucky",
        "activeUsers": 42,
        "sessions": 75,
        "engagedSessions": 62,
        "screenPageViews": 393,
        "eventCount": 11139,
        "userEngagementDuration": 156532,
        "totalEngagementHours": 43.5,
        "shareOfUsActiveUsersPct": 1.7
      },
      {
        "state": "South Carolina",
        "activeUsers": 42,
        "sessions": 115,
        "engagedSessions": 100,
        "screenPageViews": 479,
        "eventCount": 6544,
        "userEngagementDuration": 195913,
        "totalEngagementHours": 54.4,
        "shareOfUsActiveUsersPct": 1.7
      },
      {
        "state": "Maryland",
        "activeUsers": 38,
        "sessions": 87,
        "engagedSessions": 70,
        "screenPageViews": 369,
        "eventCount": 15354,
        "userEngagementDuration": 265303,
        "totalEngagementHours": 73.7,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Wisconsin",
        "activeUsers": 36,
        "sessions": 93,
        "engagedSessions": 77,
        "screenPageViews": 405,
        "eventCount": 30119,
        "userEngagementDuration": 473762,
        "totalEngagementHours": 131.6,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Massachusetts",
        "activeUsers": 35,
        "sessions": 87,
        "engagedSessions": 70,
        "screenPageViews": 366,
        "eventCount": 16597,
        "userEngagementDuration": 415644,
        "totalEngagementHours": 115.5,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "Alabama",
        "activeUsers": 31,
        "sessions": 65,
        "engagedSessions": 42,
        "screenPageViews": 270,
        "eventCount": 6650,
        "userEngagementDuration": 129691,
        "totalEngagementHours": 36.0,
        "shareOfUsActiveUsersPct": 1.3
      },
      {
        "state": "Arkansas",
        "activeUsers": 29,
        "sessions": 53,
        "engagedSessions": 42,
        "screenPageViews": 233,
        "eventCount": 3163,
        "userEngagementDuration": 42033,
        "totalEngagementHours": 11.7,
        "shareOfUsActiveUsersPct": 1.2
      },
      {
        "state": "Connecticut",
        "activeUsers": 28,
        "sessions": 59,
        "engagedSessions": 52,
        "screenPageViews": 312,
        "eventCount": 8234,
        "userEngagementDuration": 142100,
        "totalEngagementHours": 39.5,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Louisiana",
        "activeUsers": 28,
        "sessions": 39,
        "engagedSessions": 31,
        "screenPageViews": 151,
        "eventCount": 3674,
        "userEngagementDuration": 42887,
        "totalEngagementHours": 11.9,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Mississippi",
        "activeUsers": 26,
        "sessions": 44,
        "engagedSessions": 32,
        "screenPageViews": 197,
        "eventCount": 3063,
        "userEngagementDuration": 37164,
        "totalEngagementHours": 10.3,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Nevada",
        "activeUsers": 26,
        "sessions": 70,
        "engagedSessions": 61,
        "screenPageViews": 282,
        "eventCount": 23049,
        "userEngagementDuration": 371369,
        "totalEngagementHours": 103.2,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Utah",
        "activeUsers": 25,
        "sessions": 40,
        "engagedSessions": 33,
        "screenPageViews": 187,
        "eventCount": 956,
        "userEngagementDuration": 36487,
        "totalEngagementHours": 10.1,
        "shareOfUsActiveUsersPct": 1.0
      },
      {
        "state": "Kansas",
        "activeUsers": 24,
        "sessions": 43,
        "engagedSessions": 35,
        "screenPageViews": 244,
        "eventCount": 4146,
        "userEngagementDuration": 156267,
        "totalEngagementHours": 43.4,
        "shareOfUsActiveUsersPct": 1.0
      },
      {
        "state": "Iowa",
        "activeUsers": 23,
        "sessions": 39,
        "engagedSessions": 30,
        "screenPageViews": 162,
        "eventCount": 2400,
        "userEngagementDuration": 69633,
        "totalEngagementHours": 19.3,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "West Virginia",
        "activeUsers": 18,
        "sessions": 48,
        "engagedSessions": 43,
        "screenPageViews": 251,
        "eventCount": 10879,
        "userEngagementDuration": 182862,
        "totalEngagementHours": 50.8,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "Nebraska",
        "activeUsers": 17,
        "sessions": 36,
        "engagedSessions": 29,
        "screenPageViews": 248,
        "eventCount": 1116,
        "userEngagementDuration": 37320,
        "totalEngagementHours": 10.4,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "New Mexico",
        "activeUsers": 17,
        "sessions": 62,
        "engagedSessions": 43,
        "screenPageViews": 287,
        "eventCount": 7416,
        "userEngagementDuration": 124588,
        "totalEngagementHours": 34.6,
        "shareOfUsActiveUsersPct": 0.7
      },
      {
        "state": "Idaho",
        "activeUsers": 13,
        "sessions": 44,
        "engagedSessions": 36,
        "screenPageViews": 178,
        "eventCount": 7847,
        "userEngagementDuration": 157319,
        "totalEngagementHours": 43.7,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Rhode Island",
        "activeUsers": 12,
        "sessions": 24,
        "engagedSessions": 22,
        "screenPageViews": 128,
        "eventCount": 1909,
        "userEngagementDuration": 46657,
        "totalEngagementHours": 13.0,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "South Dakota",
        "activeUsers": 12,
        "sessions": 32,
        "engagedSessions": 27,
        "screenPageViews": 126,
        "eventCount": 2763,
        "userEngagementDuration": 47615,
        "totalEngagementHours": 13.2,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Wyoming",
        "activeUsers": 12,
        "sessions": 31,
        "engagedSessions": 23,
        "screenPageViews": 162,
        "eventCount": 3496,
        "userEngagementDuration": 58657,
        "totalEngagementHours": 16.3,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "District of Columbia",
        "activeUsers": 11,
        "sessions": 12,
        "engagedSessions": 10,
        "screenPageViews": 36,
        "eventCount": 235,
        "userEngagementDuration": 900,
        "totalEngagementHours": 0.2,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Maine",
        "activeUsers": 11,
        "sessions": 43,
        "engagedSessions": 38,
        "screenPageViews": 193,
        "eventCount": 8736,
        "userEngagementDuration": 137665,
        "totalEngagementHours": 38.2,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "New Hampshire",
        "activeUsers": 11,
        "sessions": 24,
        "engagedSessions": 22,
        "screenPageViews": 142,
        "eventCount": 2924,
        "userEngagementDuration": 51709,
        "totalEngagementHours": 14.4,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Montana",
        "activeUsers": 10,
        "sessions": 14,
        "engagedSessions": 9,
        "screenPageViews": 60,
        "eventCount": 1843,
        "userEngagementDuration": 20307,
        "totalEngagementHours": 5.6,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Hawaii",
        "activeUsers": 7,
        "sessions": 27,
        "engagedSessions": 27,
        "screenPageViews": 69,
        "eventCount": 1416,
        "userEngagementDuration": 47820,
        "totalEngagementHours": 13.3,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Vermont",
        "activeUsers": 7,
        "sessions": 8,
        "engagedSessions": 5,
        "screenPageViews": 39,
        "eventCount": 241,
        "userEngagementDuration": 8144,
        "totalEngagementHours": 2.3,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Alaska",
        "activeUsers": 6,
        "sessions": 6,
        "engagedSessions": 4,
        "screenPageViews": 55,
        "eventCount": 256,
        "userEngagementDuration": 9097,
        "totalEngagementHours": 2.5,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Delaware",
        "activeUsers": 5,
        "sessions": 9,
        "engagedSessions": 9,
        "screenPageViews": 48,
        "eventCount": 1254,
        "userEngagementDuration": 16136,
        "totalEngagementHours": 4.5,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "North Dakota",
        "activeUsers": 4,
        "sessions": 10,
        "engagedSessions": 9,
        "screenPageViews": 48,
        "eventCount": 129,
        "userEngagementDuration": 350,
        "totalEngagementHours": 0.1,
        "shareOfUsActiveUsersPct": 0.2
      }
    ],
    "totalUsActiveUsers": 2476,
    "caveat": "GA4 geography is derived from IP-based location and is directional, not exact. City/metro rows undercount users on VPNs, smart TVs, and carrier networks. Active users are not additive across states or cities.",
    "methodology": "Internal GA4 pull, property 497892271. Dimensions region x country and city x region x country, filtered to United States for Oct 26-Nov 1, 2026. Engagement hours = userEngagementDuration / 3600.",
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
    "source": "DotStudios revenue-transactions-10.csv",
    "emailDate": "2026-11-02",
    "periodStart": "2026-10-26",
    "periodEnd": "2026-11-01",
    "period": "Oct 26-Nov 1, 2026",
    "periodNote": "Fresh DotStudios revenue-transactions-10.csv export for Oct 26-Nov 1, 2026. The export contains 6 paid net TVOD purchases totaling $125.94 net (6 charge rows, no refunds or adjustments) (prior week: 15 transactions / $314.85). Do not add it to Stripe/Roku/Apple because platform sources overlap.",
    "registeredUsers": {
      "total": 7914,
      "active": 7814
    },
    "registeredUsersNote": "Registered-user count preserved from the last Michael Johnson/DotStudios email; this Aug 17-Aug 23 TVOD CSV contains transactions only.",
    "transactions": {
      "totalRows": 6,
      "paidTransactions": 6,
      "refundTransactions": 0,
      "chargeRows": 6,
      "adjustmentRows": 0,
      "latestSevenDayPaidTransactions": 6
    },
    "netRevenue": {
      "tvodSalesExportPaidGross": 125.94,
      "tvodSalesExportPaidNet": 125.94,
      "refundsGross": 0,
      "refundsNet": 0,
      "netIncludingRefunds": 125.94,
      "latestSevenDayGross": 125.94,
      "latestSevenDayNet": 125.94
    },
    "familyTotals": [
      {
        "family": "The Ark",
        "transactions": 3,
        "gross": 62.97,
        "net": 62.97,
        "shareOfPaidNetPct": 50.0,
        "shareOfTransactionsPct": 50.0
      },
      {
        "family": "The Librarians",
        "transactions": 3,
        "gross": 62.97,
        "net": 62.97,
        "shareOfPaidNetPct": 50.0,
        "shareOfTransactionsPct": 50.0
      }
    ],
    "titleFamilySummary": {
      "arkTransactions": 3,
      "arkGross": 62.97,
      "arkNet": 62.97,
      "librariansTransactions": 3,
      "librariansGross": 62.97,
      "librariansNet": 62.97,
      "arkShareOfPaidNetPct": 50.0,
      "librariansShareOfPaidNetPct": 50.0
    },
    "topTitlesByNet": [
      {
        "title": "The Ark - Season 3",
        "transactions": 3,
        "gross": 62.97,
        "net": 62.97,
        "shareOfPaidNetPct": 50.0,
        "shareOfTransactionsPct": 50.0
      },
      {
        "title": "The Librarians: The Next Chapter Season 2",
        "transactions": 3,
        "gross": 62.97,
        "net": 62.97,
        "shareOfPaidNetPct": 50.0,
        "shareOfTransactionsPct": 50.0
      }
    ],
    "channelBreakout": [
      {
        "channel": "web",
        "transactions": 5,
        "gross": 104.95,
        "net": 104.95,
        "shareOfPaidNetPct": 83.3,
        "shareOfTransactionsPct": 83.3
      },
      {
        "channel": "android",
        "transactions": 1,
        "gross": 20.99,
        "net": 20.99,
        "shareOfPaidNetPct": 16.7,
        "shareOfTransactionsPct": 16.7
      }
    ],
    "daily": [
      {
        "date": "2026-10-26",
        "label": "Oct 26",
        "transactions": 2,
        "gross": 41.98,
        "net": 41.98
      },
      {
        "date": "2026-10-27",
        "label": "Oct 27",
        "transactions": 1,
        "gross": 20.99,
        "net": 20.99
      },
      {
        "date": "2026-10-28",
        "label": "Oct 28",
        "transactions": 2,
        "gross": 41.98,
        "net": 41.98
      },
      {
        "date": "2026-10-29",
        "label": "Oct 29",
        "transactions": 0,
        "gross": 0.0,
        "net": 0.0
      },
      {
        "date": "2026-10-30",
        "label": "Oct 30",
        "transactions": 0,
        "gross": 0.0,
        "net": 0.0
      },
      {
        "date": "2026-10-31",
        "label": "Oct 31",
        "transactions": 1,
        "gross": 20.99,
        "net": 20.99
      },
      {
        "date": "2026-11-01",
        "label": "Nov 1",
        "transactions": 0,
        "gross": 0.0,
        "net": 0.0
      }
    ],
    "reconciliationNote": "DotStudios is the broadest current TVOD dashboard export. Stripe, Apple, and Roku are overlapping checks/slices, not additive sales sources.",
    "priorPeriod": {
      "period": "Oct 19-Oct 25, 2026",
      "paidTransactions": 15,
      "net": 314.85
    },
    "deltaVsPriorNetPct": -60.0,
    "deltaVsPriorTransactionsPct": -60.0,
    "status": "fresh_manual",
    "sourceLabel": "Fresh DotStudios TVOD",
    "note": "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
    "sourceDetail": "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
    "channels": [
      {
        "channel": "web",
        "transactions": 5,
        "gross": 104.95,
        "net": 104.95,
        "shareOfPaidNetPct": 33.3,
        "shareOfTransactionsPct": 33.3
      },
      {
        "channel": "android",
        "transactions": 4,
        "gross": 83.96,
        "net": 83.96,
        "shareOfPaidNetPct": 26.7,
        "shareOfTransactionsPct": 26.7
      },
      {
        "channel": "roku",
        "transactions": 3,
        "gross": 62.97,
        "net": 62.97,
        "shareOfPaidNetPct": 20.0,
        "shareOfTransactionsPct": 20.0
      },
      {
        "channel": "apple",
        "transactions": 3,
        "gross": 62.97,
        "net": 62.97,
        "shareOfPaidNetPct": 20.0,
        "shareOfTransactionsPct": 20.0
      }
    ]
  },
  "weeklyTrendNote": "Fresh GA4 daily rows for Oct 26-Nov 1, 2026; property 497892271.",
  "dotStudiosAppAds": {
    "source": "DotStudios ad-metrics-9.csv",
    "sourceType": "manual_dotstudios_export",
    "sourceFileLabel": "DotStudios ad-metrics-9.csv uploaded November 2, 2026",
    "period": "Oct 26-Nov 1, 2026",
    "date_range": [
      "2026-10-26",
      "2026-11-01"
    ],
    "rows": 266,
    "totals": {
      "requests": 24798,
      "impressions": 19996,
      "errors": 2611,
      "impressionsPerRequest": 0.81,
      "impressionsPerRequestPct": 80.64,
      "errorRatePct": 10.53,
      "avgAdsPerPod": 0.81
    },
    "dailyTrend": [
      {
        "requests": 3315,
        "impressions": 3001,
        "errors": 231,
        "impressionsPerRequest": 0.91,
        "impressionsPerRequestPct": 90.53,
        "errorRatePct": 6.97,
        "avgAdsPerPod": 0.91,
        "date": "2026-10-26",
        "label": "2026-10-26"
      },
      {
        "requests": 3713,
        "impressions": 2732,
        "errors": 409,
        "impressionsPerRequest": 0.74,
        "impressionsPerRequestPct": 73.58,
        "errorRatePct": 11.02,
        "avgAdsPerPod": 0.74,
        "date": "2026-10-27",
        "label": "2026-10-27"
      },
      {
        "requests": 2748,
        "impressions": 2557,
        "errors": 166,
        "impressionsPerRequest": 0.93,
        "impressionsPerRequestPct": 93.05,
        "errorRatePct": 6.04,
        "avgAdsPerPod": 0.93,
        "date": "2026-10-28",
        "label": "2026-10-28"
      },
      {
        "requests": 2644,
        "impressions": 2333,
        "errors": 212,
        "impressionsPerRequest": 0.88,
        "impressionsPerRequestPct": 88.24,
        "errorRatePct": 8.02,
        "avgAdsPerPod": 0.88,
        "date": "2026-10-29",
        "label": "2026-10-29"
      },
      {
        "requests": 3996,
        "impressions": 3281,
        "errors": 515,
        "impressionsPerRequest": 0.82,
        "impressionsPerRequestPct": 82.11,
        "errorRatePct": 12.89,
        "avgAdsPerPod": 0.82,
        "date": "2026-10-30",
        "label": "2026-10-30"
      },
      {
        "requests": 3833,
        "impressions": 3086,
        "errors": 542,
        "impressionsPerRequest": 0.81,
        "impressionsPerRequestPct": 80.51,
        "errorRatePct": 14.14,
        "avgAdsPerPod": 0.81,
        "date": "2026-10-31",
        "label": "2026-10-31"
      },
      {
        "requests": 4549,
        "impressions": 3006,
        "errors": 536,
        "impressionsPerRequest": 0.66,
        "impressionsPerRequestPct": 66.08,
        "errorRatePct": 11.78,
        "avgAdsPerPod": 0.66,
        "date": "2026-11-01",
        "label": "2026-11-01"
      }
    ],
    "deviceSplit": [
      {
        "requests": 15009,
        "impressions": 10499,
        "errors": 2214,
        "impressionsPerRequest": 0.7,
        "impressionsPerRequestPct": 69.95,
        "errorRatePct": 14.75,
        "avgAdsPerPod": 0.7,
        "device": "roku",
        "label": "roku"
      },
      {
        "requests": 4398,
        "impressions": 4366,
        "errors": 250,
        "impressionsPerRequest": 0.99,
        "impressionsPerRequestPct": 99.27,
        "errorRatePct": 5.68,
        "avgAdsPerPod": 0.99,
        "device": "ios",
        "label": "ios"
      },
      {
        "requests": 3480,
        "impressions": 3273,
        "errors": 20,
        "impressionsPerRequest": 0.94,
        "impressionsPerRequestPct": 94.05,
        "errorRatePct": 0.57,
        "avgAdsPerPod": 0.94,
        "device": "android",
        "label": "android"
      },
      {
        "requests": 1392,
        "impressions": 1330,
        "errors": 47,
        "impressionsPerRequest": 0.96,
        "impressionsPerRequestPct": 95.55,
        "errorRatePct": 3.38,
        "avgAdsPerPod": 0.96,
        "device": "androidtv",
        "label": "androidtv"
      },
      {
        "requests": 463,
        "impressions": 462,
        "errors": 73,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 99.78,
        "errorRatePct": 15.77,
        "avgAdsPerPod": 1.0,
        "device": "appletv",
        "label": "appletv"
      },
      {
        "requests": 54,
        "impressions": 51,
        "errors": 0,
        "impressionsPerRequest": 0.94,
        "impressionsPerRequestPct": 94.44,
        "errorRatePct": 0.0,
        "avgAdsPerPod": 0.94,
        "device": "firetv",
        "label": "firetv"
      },
      {
        "requests": 2,
        "impressions": 15,
        "errors": 7,
        "impressionsPerRequest": 7.5,
        "impressionsPerRequestPct": 750.0,
        "errorRatePct": 350.0,
        "avgAdsPerPod": 7.5,
        "device": "vizio",
        "label": "vizio"
      }
    ],
    "topChannels": [
      {
        "requests": 4314,
        "impressions": 4258,
        "errors": 156,
        "impressionsPerRequest": 0.99,
        "impressionsPerRequestPct": 98.7,
        "errorRatePct": 3.62,
        "avgAdsPerPod": 0.99,
        "channel": "Leverage",
        "label": "Leverage"
      },
      {
        "requests": 2110,
        "impressions": 2073,
        "errors": 195,
        "impressionsPerRequest": 0.98,
        "impressionsPerRequestPct": 98.25,
        "errorRatePct": 9.24,
        "avgAdsPerPod": 0.98,
        "channel": "The Ark",
        "label": "The Ark"
      },
      {
        "requests": 2376,
        "impressions": 2035,
        "errors": 208,
        "impressionsPerRequest": 0.86,
        "impressionsPerRequestPct": 85.65,
        "errorRatePct": 8.75,
        "avgAdsPerPod": 0.86,
        "channel": "Leverage: Redemption - Season 3",
        "label": "Leverage: Redemption - Season 3"
      },
      {
        "requests": 1561,
        "impressions": 1352,
        "errors": 160,
        "impressionsPerRequest": 0.87,
        "impressionsPerRequestPct": 86.61,
        "errorRatePct": 10.25,
        "avgAdsPerPod": 0.87,
        "channel": "The Ark - Season 2",
        "label": "The Ark - Season 2"
      },
      {
        "requests": 1392,
        "impressions": 1244,
        "errors": 206,
        "impressionsPerRequest": 0.89,
        "impressionsPerRequestPct": 89.37,
        "errorRatePct": 14.8,
        "avgAdsPerPod": 0.89,
        "channel": "Leverage - Season 2",
        "label": "Leverage - Season 2"
      },
      {
        "requests": 1300,
        "impressions": 958,
        "errors": 137,
        "impressionsPerRequest": 0.74,
        "impressionsPerRequestPct": 73.69,
        "errorRatePct": 10.54,
        "avgAdsPerPod": 0.74,
        "channel": "The Librarians - Season 1",
        "label": "The Librarians - Season 1"
      },
      {
        "requests": 1161,
        "impressions": 850,
        "errors": 143,
        "impressionsPerRequest": 0.73,
        "impressionsPerRequestPct": 73.21,
        "errorRatePct": 12.32,
        "avgAdsPerPod": 0.73,
        "channel": "Almost Paradise - Season 2",
        "label": "Almost Paradise - Season 2"
      },
      {
        "requests": 1227,
        "impressions": 829,
        "errors": 130,
        "impressionsPerRequest": 0.68,
        "impressionsPerRequestPct": 67.56,
        "errorRatePct": 10.59,
        "avgAdsPerPod": 0.68,
        "channel": "Leverage - Season 4",
        "label": "Leverage - Season 4"
      },
      {
        "requests": 969,
        "impressions": 683,
        "errors": 281,
        "impressionsPerRequest": 0.7,
        "impressionsPerRequestPct": 70.49,
        "errorRatePct": 29.0,
        "avgAdsPerPod": 0.7,
        "channel": "Leverage - Season 1",
        "label": "Leverage - Season 1"
      },
      {
        "requests": 621,
        "impressions": 616,
        "errors": 0,
        "impressionsPerRequest": 0.99,
        "impressionsPerRequestPct": 99.19,
        "errorRatePct": 0.0,
        "avgAdsPerPod": 0.99,
        "channel": "Leverage: Redemption",
        "label": "Leverage: Redemption"
      },
      {
        "requests": 616,
        "impressions": 597,
        "errors": 13,
        "impressionsPerRequest": 0.97,
        "impressionsPerRequestPct": 96.92,
        "errorRatePct": 2.11,
        "avgAdsPerPod": 0.97,
        "channel": "The Librarians (Full Series)",
        "label": "The Librarians (Full Series)"
      },
      {
        "requests": 681,
        "impressions": 568,
        "errors": 96,
        "impressionsPerRequest": 0.83,
        "impressionsPerRequestPct": 83.41,
        "errorRatePct": 14.1,
        "avgAdsPerPod": 0.83,
        "channel": "Almost Paradise - Season 1",
        "label": "Almost Paradise - Season 1"
      }
    ],
    "topCountries": [
      {
        "requests": 22870,
        "impressions": 18121,
        "errors": 2554,
        "impressionsPerRequest": 0.79,
        "impressionsPerRequestPct": 79.23,
        "errorRatePct": 11.17,
        "avgAdsPerPod": 0.79,
        "country": "United States",
        "label": "United States"
      },
      {
        "requests": 1480,
        "impressions": 1432,
        "errors": 30,
        "impressionsPerRequest": 0.97,
        "impressionsPerRequestPct": 96.76,
        "errorRatePct": 2.03,
        "avgAdsPerPod": 0.97,
        "country": "Australia",
        "label": "Australia"
      },
      {
        "requests": 424,
        "impressions": 421,
        "errors": 27,
        "impressionsPerRequest": 0.99,
        "impressionsPerRequestPct": 99.29,
        "errorRatePct": 6.37,
        "avgAdsPerPod": 0.99,
        "country": "Canada",
        "label": "Canada"
      },
      {
        "requests": 13,
        "impressions": 11,
        "errors": 0,
        "impressionsPerRequest": 0.85,
        "impressionsPerRequestPct": 84.62,
        "errorRatePct": 0.0,
        "avgAdsPerPod": 0.85,
        "country": "U.S. Virgin Islands",
        "label": "U.S. Virgin Islands"
      },
      {
        "requests": 11,
        "impressions": 11,
        "errors": 0,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 100.0,
        "errorRatePct": 0.0,
        "avgAdsPerPod": 1.0,
        "country": "Dominican Republic",
        "label": "Dominican Republic"
      }
    ],
    "topVideos": [
      {
        "requests": 1075,
        "impressions": 914,
        "errors": 170,
        "impressionsPerRequest": 0.85,
        "impressionsPerRequestPct": 85.02,
        "errorRatePct": 15.81,
        "avgAdsPerPod": 0.85,
        "videoTitle": "The Side Job (Leverage: Redemption - Season 3)",
        "label": "The Side Job (Leverage: Redemption - Season 3)"
      },
      {
        "requests": 823,
        "impressions": 825,
        "errors": 51,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 100.24,
        "errorRatePct": 6.2,
        "avgAdsPerPod": 1.0,
        "videoTitle": "We Don't Kill Our Own (The Ark - Season 2)",
        "label": "We Don't Kill Our Own (The Ark - Season 2)"
      },
      {
        "requests": 938,
        "impressions": 784,
        "errors": 8,
        "impressionsPerRequest": 0.84,
        "impressionsPerRequestPct": 83.58,
        "errorRatePct": 0.85,
        "avgAdsPerPod": 0.84,
        "videoTitle": "(not set) (Leverage: Redemption - Season 3)",
        "label": "(not set) (Leverage: Redemption - Season 3)"
      },
      {
        "requests": 748,
        "impressions": 675,
        "errors": 67,
        "impressionsPerRequest": 0.9,
        "impressionsPerRequestPct": 90.24,
        "errorRatePct": 8.96,
        "avgAdsPerPod": 0.9,
        "videoTitle": "And Santa's Midnight Run (The Librarians - Season 1)",
        "label": "And Santa's Midnight Run (The Librarians - Season 1)"
      },
      {
        "requests": 738,
        "impressions": 592,
        "errors": 118,
        "impressionsPerRequest": 0.8,
        "impressionsPerRequestPct": 80.22,
        "errorRatePct": 15.99,
        "avgAdsPerPod": 0.8,
        "videoTitle": "The Maltese Falcon Job (Leverage - Season 2)",
        "label": "The Maltese Falcon Job (Leverage - Season 2)"
      },
      {
        "requests": 568,
        "impressions": 566,
        "errors": 0,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 99.65,
        "errorRatePct": 0.0,
        "avgAdsPerPod": 1.0,
        "videoTitle": "(not set) (Leverage)",
        "label": "(not set) (Leverage)"
      },
      {
        "requests": 532,
        "impressions": 528,
        "errors": 25,
        "impressionsPerRequest": 0.99,
        "impressionsPerRequestPct": 99.25,
        "errorRatePct": 4.7,
        "avgAdsPerPod": 0.99,
        "videoTitle": "The Inside Job (Leverage)",
        "label": "The Inside Job (Leverage)"
      },
      {
        "requests": 552,
        "impressions": 430,
        "errors": 61,
        "impressionsPerRequest": 0.78,
        "impressionsPerRequestPct": 77.9,
        "errorRatePct": 11.05,
        "avgAdsPerPod": 0.78,
        "videoTitle": "Ghost Month (Almost Paradise - Season 2)",
        "label": "Ghost Month (Almost Paradise - Season 2)"
      },
      {
        "requests": 373,
        "impressions": 374,
        "errors": 41,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 100.27,
        "errorRatePct": 10.99,
        "avgAdsPerPod": 1.0,
        "videoTitle": "The Lost Heir Job (Leverage - Season 2)",
        "label": "The Lost Heir Job (Leverage - Season 2)"
      },
      {
        "requests": 365,
        "impressions": 365,
        "errors": 22,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 100.0,
        "errorRatePct": 6.03,
        "avgAdsPerPod": 1.0,
        "videoTitle": "The Morning After Job (Leverage)",
        "label": "The Morning After Job (Leverage)"
      }
    ],
    "caveats": [
      "These are ElectricNOW IN-APP ad impressions (ad-server delivery), not paid-campaign impressions.",
      "No ad revenue/yield in this export; do not infer ROAS or ad income. Michael Johnson (Sep 8) said DotStudios ad metrics are inaccurate; the Ionic report is the revenue source of record.",
      "Rows with 0 requests but errors > 0 are ad calls that failed before a request was counted; they inflate error totals and are reported separately."
    ],
    "plainEnglish": "DotStudios app ad-serving data shows 19,996 in-app ad impressions from 24,798 ad requests for Oct 26-Nov 1, 2026, with 2,611 errors. Compared with the last fresh export (Oct 19-Oct 25, 2026: 22,514 impressions), impressions are -11.2%. Roku delivered 10,499 impressions and non-Roku platforms 9,497 (last fresh export: 11,589). These are ElectricNOW IN-APP ad impressions, not paid-campaign impressions, and no ad revenue is included. Michael Johnson has said the DotStudios ad numbers are not accurate and Ionic is the revenue source, so treat this as a delivery cross-check only.",
    "status": "fresh_manual",
    "dataFreshness": "manual_current",
    "updatedAt": "2026-11-02T20:35:51.823384+00:00",
    "periodStart": "2026-10-26",
    "periodEnd": "2026-11-01",
    "freshness": "Fresh manual DotStudios app ad-serving export integrated for Oct 26-Nov 1, 2026.",
    "adRevenueAvailable": false,
    "revenueCaveat": "No ad-server revenue or yield was included in this DotStudios CSV; this section measures in-app ad delivery, not true ad-sales revenue.",
    "dataPeriod": "Oct 26-Nov 1, 2026",
    "alerts": [
      "Non-Roku in-app ad delivery resumed for Oct 26-Nov 1, 2026: 9,497 impressions on 9,789 non-Roku requests."
    ],
    "zeroRequestErrorRows": {
      "count": 1,
      "errors": 2,
      "byDevice": {
        "roku": 2
      }
    },
    "lastFreshExport": {
      "period": "Oct 19-Oct 25, 2026",
      "requests": 34786,
      "impressions": 22514,
      "errors": 4841
    },
    "deltaVsLastFresh": {
      "impressionsPct": -11.2,
      "requestsPct": -28.7,
      "errorsPct": -46.1
    },
    "gapNote": null,
    "priorFreshByDevice": {
      "roku": {
        "requests": 22496,
        "impressions": 10925,
        "errors": 4223
      },
      "ios": {
        "requests": 4843,
        "impressions": 4814,
        "errors": 221
      },
      "android": {
        "requests": 4437,
        "impressions": 3908,
        "errors": 290
      },
      "androidtv": {
        "requests": 1938,
        "impressions": 1826,
        "errors": 80
      },
      "firetv": {
        "requests": 887,
        "impressions": 863,
        "errors": 22
      },
      "appletv": {
        "requests": 177,
        "impressions": 176,
        "errors": 0
      },
      "vizio": {
        "requests": 8,
        "impressions": 2,
        "errors": 5
      }
    },
    "sourceLabel": "Fresh DotStudios manual export",
    "sourceDetail": "User upload November 2; Oct 26-Nov 1, 2026"
  },
  "sourceStatus": {
    "ga4": {
      "status": "fresh",
      "period": "Oct 26-Nov 1, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    "stripe": {
      "status": "stale_preserved_no_fresh_pull",
      "period": "Oct 19-Oct 25, 2026",
      "gross": 133.94,
      "transactions": 7,
      "source": "Stripe connector charge list",
      "note": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "sourceDetail": "Last successful Stripe pull (preserved, stale), Oct 19-Oct 25, 2026: 7 successful charges / $133.94, 6 Season Pass charges plus 1 $8.00 subscription update; 0 failed attempts. Prior week: 3 / $62.97. Refunds $0.00; before processing fees. DotStudios web shows 5 / $104.95 because DotStudios dates are UTC: Stripe's Oct 25 6:32 PM PT Season Pass falls on Oct 26 UTC, and the $8.00 subscription update is not a TVOD purchase.",
      "staleNote": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "attemptedPeriod": "Oct 26-Nov 1, 2026"
    },
    "rokuSales": {
      "status": "fresh",
      "period": "Oct 26-Nov 1, 2026",
      "source": "Roku Sales Activity email",
      "note": "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded."
    },
    "rokuAppEngagement": {
      "status": "fresh",
      "period": "Oct 25-Oct 31, 2026",
      "source": "Roku App Engagement email",
      "note": "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded."
    },
    "rokuTRC": {
      "status": "excluded_by_rule",
      "note": "TRC Live Percent of Unique Viewers / Average Session reports are excluded from app and platform usage."
    },
    "appleManual": {
      "status": "fresh_manual",
      "period": "Oct 26-Nov 1, 2026",
      "salesGross": 0.0,
      "downloads": 47,
      "totalUnits": null,
      "inAppUnits": null,
      "salesGeography": "United States only",
      "note": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
      "applePeriod": "Oct 25-Oct 31, 2026 (Apple Sun-Sat window)"
    },
    "dotStudiosAppAds": {
      "status": "fresh_manual",
      "period": "Oct 26-Nov 1, 2026",
      "note": "Fresh four DotStudios exports uploaded November 2."
    },
    "googleAds": {
      "status": "fresh",
      "period": "Oct 26-Nov 1, 2026",
      "note": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
      "attemptedPeriod": "Oct 26-Nov 1, 2026"
    },
    "metaAds": {
      "status": "stale_preserved_no_fresh_pull",
      "period": "Aug 4-Aug 26, 2026",
      "note": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
      "staleNote": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed."
    },
    "youtube": {
      "status": "fresh_partial",
      "period": "Oct 26-Oct 31, 2026 (6 available days)",
      "note": "Fresh partial YouTube: Oct 26 through Oct 31, 6 available days; matched against Oct 19 through Oct 24. Not added to app sales or in-app ad delivery.",
      "dataCompleteThrough": "2026-10-31"
    }
  },
  "refreshAuditNotes": [
    "Run 27 refresh for Oct 26-Nov 1, 2026 (prior Oct 19-Oct 25, 2026), November 2, 2026.",
    "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded.",
    "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
    "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
    "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
    "Fresh partial YouTube: Oct 26 through Oct 31, 6 available days; matched against Oct 19 through Oct 24. Not added to app sales or in-app ad delivery.",
    "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "Ionic ad revenue rose 80% to $121.05 for Oct 26–Nov 1, with revenue per 1,000 ad impressions up from $2.00 to $3.18. Both drove it: more ads were served (impressions +13.2%) and each ad earned more. It is the highest Ionic week since Jul 6–12, 2026, when revenue was $607.63. This is still about 22% of the June–early July average of $555.50 per week; revenue has not recovered from the July–August drop.",
    "DotStudios exported net sales: $30,515.70 in 1,707 charge rows less $11,727.22 in 797 adjustment rows and $14.99 in one refund = $18,773.49. Export transaction dates: Mar 25-Nov 1, 2026 (full ledger through Oct 4 plus the Oct 5-11, Oct 12-18, Oct 19-25 and Oct 26-Nov 1 weekly exports). January 1-March 24 coverage is not established by this file. Charges are not unique buyers or net retained revenue; never add Stripe, Apple or Roku, which overlap.",
    "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data."
  ],
  "connectorStatus": {
    "GA4": "Fresh property 497892271 for Oct 26-Nov 1, 2026",
    "Stripe": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
    "Outlook/Roku emails": "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded.",
    "Google Ads": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
    "Meta Ads": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
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
    "Run 27 refresh for Oct 26-Nov 1, 2026 (prior Oct 19-Oct 25, 2026), November 2, 2026.",
    "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded.",
    "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
    "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
    "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
    "Fresh partial YouTube: Oct 26 through Oct 31, 6 available days; matched against Oct 19 through Oct 24. Not added to app sales or in-app ad delivery.",
    "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "Ionic ad revenue rose 80% to $121.05 for Oct 26–Nov 1, with revenue per 1,000 ad impressions up from $2.00 to $3.18. Both drove it: more ads were served (impressions +13.2%) and each ad earned more. It is the highest Ionic week since Jul 6–12, 2026, when revenue was $607.63. This is still about 22% of the June–early July average of $555.50 per week; revenue has not recovered from the July–August drop.",
    "DotStudios exported net sales: $30,515.70 in 1,707 charge rows less $11,727.22 in 797 adjustment rows and $14.99 in one refund = $18,773.49. Export transaction dates: Mar 25-Nov 1, 2026 (full ledger through Oct 4 plus the Oct 5-11, Oct 12-18, Oct 19-25 and Oct 26-Nov 1 weekly exports). January 1-March 24 coverage is not established by this file. Charges are not unique buyers or net retained revenue; never add Stripe, Apple or Roku, which overlap.",
    "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data."
  ],
  "monthlyTrendNote": "Rolling 28-day trend covers Oct 5-Nov 1, 2026 and compares against Sep 7-Oct 4, 2026 where summary comparisons are available.",
  "lastUpdated": "November 2, 2026 (Pacific)",
  "lastUpdatedIso": "2026-11-02T20:35:51.823384+00:00",
  "generatedAtIso": "2026-11-02T20:35:51.823384+00:00",
  "reportingPeriod": "Oct 26-Nov 1, 2026",
  "rolling28Summary": {
    "period": "Oct 5-Nov 1, 2026",
    "previousPeriod": "Sep 7-Oct 4, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "current": {
      "activeUsers": 8302,
      "newUsers": 2887,
      "sessions": 27706,
      "engagedSessions": 22538,
      "engagementRate": 81.35,
      "screenPageViews": 131984,
      "eventCount": 3489465,
      "userEngagementDuration": 69544234,
      "totalEngagementHours": 19317.84,
      "avgEngagedMinutesPerUser": 139.61341443828795,
      "avgEngagedMinutesPerSession": 41.83464111263505
    },
    "previous": {
      "activeUsers": 10254,
      "newUsers": 3676,
      "sessions": 34174,
      "engagedSessions": 27441,
      "engagementRate": 80.30000000000001,
      "screenPageViews": 172216,
      "eventCount": 3826783,
      "userEngagementDuration": 79753065,
      "totalEngagementHours": 22153.63,
      "avgEngagedMinutesPerUser": 129.62919348546907,
      "avgEngagedMinutesPerSession": 38.89558582548136
    },
    "activeUsersDirection": {
      "direction": "down",
      "deltaPct": -19.036473571289253
    },
    "sessionsDirection": {
      "direction": "down",
      "deltaPct": -18.926669397787794
    },
    "screenPageViewsDirection": {
      "direction": "down",
      "deltaPct": -23.361360152366796
    },
    "note": "Rolling 28 complete days ending 2026-11-01 vs the preceding 28 days (Internal GA4 pull, property 497892271)."
  },
  "sourceMediumSummary": {
    "period": "Oct 26-Nov 1, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "source": "(direct) / (none)",
        "sessions": 3108,
        "activeUsers": 1573
      },
      {
        "source": "homescreen / (not set)",
        "sessions": 1846,
        "activeUsers": 481
      },
      {
        "source": "hs-search / (not set)",
        "sessions": 255,
        "activeUsers": 69
      },
      {
        "source": "google / organic",
        "sessions": 241,
        "activeUsers": 96
      },
      {
        "source": "google-play / organic",
        "sessions": 218,
        "activeUsers": 101
      },
      {
        "source": "(not set)",
        "sessions": 133,
        "activeUsers": 89
      },
      {
        "source": "homescreen / (none)",
        "sessions": 65,
        "activeUsers": 1
      },
      {
        "source": "facebook.com / referral",
        "sessions": 61,
        "activeUsers": 51
      },
      {
        "source": "electricnow.us.auth0.com / referral",
        "sessions": 59,
        "activeUsers": 7
      },
      {
        "source": "hs-voice-search / (not set)",
        "sessions": 57,
        "activeUsers": 15
      },
      {
        "source": "channel-store / (not set)",
        "sessions": 54,
        "activeUsers": 21
      },
      {
        "source": "voice-command / (not set)",
        "sessions": 37,
        "activeUsers": 8
      },
      {
        "source": "fb / paid",
        "sessions": 3,
        "activeUsers": 3
      }
    ],
    "note": "GA4-attributed paid sessions only. App-install campaigns land in the stores, so store-attributed installs will not appear here as paid sessions. Do not read this as total paid impact."
  },
  "campaignSummary": {
    "period": "Oct 26-Nov 1, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "name": "(direct)",
        "sessions": 3227,
        "activeUsers": 1584
      },
      {
        "name": "(not set)",
        "sessions": 2630,
        "activeUsers": 791
      },
      {
        "name": "(organic)",
        "sessions": 283,
        "activeUsers": 109
      },
      {
        "name": "(referral)",
        "sessions": 194,
        "activeUsers": 113
      },
      {
        "name": "(ai-assistant)",
        "sessions": 2,
        "activeUsers": 1
      },
      {
        "name": "52522050595562",
        "sessions": 1,
        "activeUsers": 1
      },
      {
        "name": "52522086945962",
        "sessions": 1,
        "activeUsers": 1
      },
      {
        "name": "52522971073362",
        "sessions": 1,
        "activeUsers": 1
      },
      {
        "name": "fb4a",
        "sessions": 1,
        "activeUsers": 1
      }
    ],
    "note": "Numeric campaign names are raw Meta campaign IDs passed through to GA4; no human-readable title is available from the connector. The Meta flight ended Aug 26, so any campaign-tagged sessions this week are residual."
  },
  "platformDeviceBreakdown": {
    "period": "Oct 26-Nov 1, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "platform": "web",
        "device": "smart tv",
        "sessions": 2438,
        "activeUsers": 718,
        "screenPageViews": 13205
      },
      {
        "platform": "web",
        "device": "desktop",
        "sessions": 986,
        "activeUsers": 392,
        "screenPageViews": 3974
      },
      {
        "platform": "iOS",
        "device": "mobile",
        "sessions": 898,
        "activeUsers": 484,
        "screenPageViews": 3737
      },
      {
        "platform": "Android",
        "device": "mobile",
        "sessions": 878,
        "activeUsers": 427,
        "screenPageViews": 3570
      },
      {
        "platform": "Android",
        "device": "smart tv",
        "sessions": 307,
        "activeUsers": 138,
        "screenPageViews": 1317
      },
      {
        "platform": "iOS",
        "device": "tablet",
        "sessions": 301,
        "activeUsers": 130,
        "screenPageViews": 1417
      },
      {
        "platform": "iOS",
        "device": "smart tv",
        "sessions": 156,
        "activeUsers": 85,
        "screenPageViews": 732
      },
      {
        "platform": "Android",
        "device": "tablet",
        "sessions": 114,
        "activeUsers": 45,
        "screenPageViews": 554
      },
      {
        "platform": "web",
        "device": "mobile",
        "sessions": 104,
        "activeUsers": 70,
        "screenPageViews": 200
      },
      {
        "platform": "web",
        "device": "tablet",
        "sessions": 90,
        "activeUsers": 26,
        "screenPageViews": 511
      }
    ],
    "note": "GA4 platform x device. 'web' on smart tv is the browser-based TV app surface."
  },
  "sourceStatuses": {
    "ga4": {
      "status": "fresh",
      "period": "Oct 26-Nov 1, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    "stripe": {
      "status": "stale_preserved_no_fresh_pull",
      "period": "Oct 19-Oct 25, 2026",
      "gross": 133.94,
      "transactions": 7,
      "source": "Stripe connector charge list",
      "note": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "sourceDetail": "STALE, last successful Stripe pull (connector disconnected Nov 2), Oct 19-Oct 25, 2026: 7 successful charges / $133.94, 6 Season Pass charges plus 1 $8.00 subscription update; 0 failed attempts. Prior week: 3 / $62.97. Refunds $0.00; before processing fees. DotStudios web shows 5 / $104.95 because DotStudios dates are UTC: Stripe's Oct 25 6:32 PM PT Season Pass falls on Oct 26 UTC, and the $8.00 subscription update is not a TVOD purchase.",
      "staleNote": "STALE: the Stripe connector was disconnected on Nov 2, so Oct 26-Nov 1 Stripe charges could not be pulled. Last successful Stripe pull (Oct 19-Oct 25, 2026: 7 charges / $133.94) is preserved, not zeroed. DotStudios still shows web purchases for this week (5 / $104.95), so web sales did occur; reconnect Stripe to confirm.",
      "attemptedPeriod": "Oct 26-Nov 1, 2026"
    },
    "rokuSales": {
      "status": "fresh",
      "period": "Oct 26-Nov 1, 2026",
      "source": "Roku Sales Activity email",
      "note": "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded."
    },
    "rokuAppEngagement": {
      "status": "fresh",
      "period": "Oct 25-Oct 31, 2026",
      "source": "Roku App Engagement email",
      "note": "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded."
    },
    "rokuTRC": {
      "status": "excluded_by_rule",
      "note": "TRC Live Percent of Unique Viewers / Average Session reports are excluded from app and platform usage."
    },
    "appleManual": {
      "status": "fresh_manual",
      "period": "Oct 26-Nov 1, 2026",
      "salesGross": 0.0,
      "downloads": 47,
      "totalUnits": null,
      "inAppUnits": null,
      "salesGeography": "United States only",
      "note": "Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00).",
      "applePeriod": "Oct 25-Oct 31, 2026 (Apple Sun-Sat window)"
    },
    "dotStudiosAppAds": {
      "status": "fresh_manual",
      "period": "Oct 26-Nov 1, 2026",
      "note": "Fresh four DotStudios exports uploaded November 2."
    },
    "googleAds": {
      "status": "fresh",
      "period": "Oct 26-Nov 1, 2026",
      "note": "Fresh Google Ads, account 4342267711, Oct 26-Nov 1, 2026: 0 paid-campaign impressions, 0 clicks, $0 spend, 0 conversions (prior week Oct 19-Oct 25 also zero; third straight zero-delivery week). 122 campaigns: 1 enabled (PCSM - ElectricNow App Promotion - Android) with no reported delivery; the rest paused or removed. The Nov 2 pull succeeded on the first try. Zero is a real reported value, not missing data.",
      "attemptedPeriod": "Oct 26-Nov 1, 2026"
    },
    "metaAds": {
      "status": "stale_preserved_no_fresh_pull",
      "period": "Aug 4-Aug 26, 2026",
      "note": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
      "staleNote": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed."
    },
    "youtube": {
      "status": "fresh_partial",
      "period": "Oct 26-Oct 31, 2026 (6 available days)",
      "note": "Fresh partial YouTube: Oct 26 through Oct 31, 6 available days; matched against Oct 19 through Oct 24. Not added to app sales or in-app ad delivery.",
      "dataCompleteThrough": "2026-10-31"
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
    "updatedAt": "2026-11-02T20:35:51.823384+00:00",
    "period": "Oct 26-Nov 1, 2026",
    "status": "fresh_manual",
    "sources": [
      "DotStudios TVOD",
      "DotStudios app installs",
      "DotStudios video views",
      "DotStudios in-app ad metrics",
      "Apple free downloads and sales"
    ],
    "summary": "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97. Fresh Apple Connect, Apple's Oct 25-Oct 31 window (Sun-Sat; Apple does not yet show Nov 1): 47 free downloads (-20.3% versus 59; United States 45, Australia 2). Apple sales $0.00 (daily average $0.00), versus $104.95 in its Oct 18-Oct 24 window. DotStudios also shows no Apple-device purchases this week, so the two agree. Only the free-downloads and sales screens were provided: total units, in-app units, updates and daily downloads are not reported this week. Apple's transaction count is not reported (sales are $0.00)."
  },
  "dotStudiosAppInstalls": {
    "source": "DotStudios app-installs-summary-9.csv",
    "sourceType": "manual_dotstudios_export",
    "period": "Oct 26-Nov 1, 2026",
    "periodStart": "2026-10-26",
    "periodEnd": "2026-11-01",
    "updatedAt": "2026-11-02T20:35:51.823384+00:00",
    "status": "fresh_manual",
    "totals": {
      "installs": 486,
      "updates": 297,
      "totalEvents": 783,
      "users": 768,
      "events": 783
    },
    "byPlatform": {
      "Android": 85,
      "iOS": 118,
      "web": 283
    },
    "platformBreakout": [
      {
        "Platform": "web",
        "installs": 283,
        "updates": 101,
        "totalEvents": 384,
        "users": 370,
        "shareOfInstallsPct": 58.2
      },
      {
        "Platform": "iOS",
        "installs": 118,
        "updates": 112,
        "totalEvents": 230,
        "users": 230,
        "shareOfInstallsPct": 24.3
      },
      {
        "Platform": "Android",
        "installs": 85,
        "updates": 84,
        "totalEvents": 169,
        "users": 168,
        "shareOfInstallsPct": 17.5
      }
    ],
    "byDeviceCategory": {
      "mobile": 149,
      "tablet": 29,
      "smart tv": 300,
      "desktop": 8
    },
    "deviceBreakout": [
      {
        "Device Category": "smart tv",
        "installs": 300,
        "updates": 113,
        "users": 399,
        "shareOfInstallsPct": 61.7
      },
      {
        "Device Category": "mobile",
        "installs": 149,
        "updates": 161,
        "users": 309,
        "shareOfInstallsPct": 30.7
      },
      {
        "Device Category": "tablet",
        "installs": 29,
        "updates": 23,
        "users": 52,
        "shareOfInstallsPct": 6.0
      },
      {
        "Device Category": "desktop",
        "installs": 8,
        "updates": 0,
        "users": 8,
        "shareOfInstallsPct": 1.6
      }
    ],
    "byCountry": {
      "United States": {
        "installs": 466,
        "updates": 293,
        "events": 759,
        "users": 744,
        "cities": 441
      },
      "Unknown": {
        "installs": 8,
        "updates": 0,
        "events": 8,
        "users": 8,
        "cities": 0
      },
      "Australia": {
        "installs": 5,
        "updates": 2,
        "events": 7,
        "users": 7,
        "cities": 4
      },
      "Puerto Rico": {
        "installs": 2,
        "updates": 0,
        "events": 2,
        "users": 2,
        "cities": 2
      },
      "Ecuador": {
        "installs": 2,
        "updates": 0,
        "events": 2,
        "users": 2,
        "cities": 0
      },
      "Israel": {
        "installs": 0,
        "updates": 1,
        "events": 1,
        "users": 1,
        "cities": 1
      },
      "Nigeria": {
        "installs": 1,
        "updates": 0,
        "events": 1,
        "users": 1,
        "cities": 1
      },
      "Indonesia": {
        "installs": 0,
        "updates": 1,
        "events": 1,
        "users": 1,
        "cities": 1
      },
      "Russia": {
        "installs": 1,
        "updates": 0,
        "events": 1,
        "users": 1,
        "cities": 1
      },
      "United Kingdom": {
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
        "installs": 466,
        "updates": 293,
        "events": 759,
        "users": 744,
        "cities": 441,
        "totalEvents": 759,
        "shareOfInstallsPct": 95.88477366255144
      },
      {
        "Country": "Unknown",
        "installs": 8,
        "updates": 0,
        "events": 8,
        "users": 8,
        "cities": 0,
        "totalEvents": 8,
        "shareOfInstallsPct": 1.646090534979424
      },
      {
        "Country": "Australia",
        "installs": 5,
        "updates": 2,
        "events": 7,
        "users": 7,
        "cities": 4,
        "totalEvents": 7,
        "shareOfInstallsPct": 1.02880658436214
      },
      {
        "Country": "Puerto Rico",
        "installs": 2,
        "updates": 0,
        "events": 2,
        "users": 2,
        "cities": 2,
        "totalEvents": 2,
        "shareOfInstallsPct": 0.411522633744856
      },
      {
        "Country": "Ecuador",
        "installs": 2,
        "updates": 0,
        "events": 2,
        "users": 2,
        "cities": 0,
        "totalEvents": 2,
        "shareOfInstallsPct": 0.411522633744856
      },
      {
        "Country": "Israel",
        "installs": 0,
        "updates": 1,
        "events": 1,
        "users": 1,
        "cities": 1,
        "totalEvents": 1,
        "shareOfInstallsPct": 0.0
      },
      {
        "Country": "Nigeria",
        "installs": 1,
        "updates": 0,
        "events": 1,
        "users": 1,
        "cities": 1,
        "totalEvents": 1,
        "shareOfInstallsPct": 0.205761316872428
      },
      {
        "Country": "Indonesia",
        "installs": 0,
        "updates": 1,
        "events": 1,
        "users": 1,
        "cities": 1,
        "totalEvents": 1,
        "shareOfInstallsPct": 0.0
      },
      {
        "Country": "Russia",
        "installs": 1,
        "updates": 0,
        "events": 1,
        "users": 1,
        "cities": 1,
        "totalEvents": 1,
        "shareOfInstallsPct": 0.205761316872428
      },
      {
        "Country": "United Kingdom",
        "installs": 1,
        "updates": 0,
        "events": 1,
        "users": 1,
        "cities": 1,
        "totalEvents": 1,
        "shareOfInstallsPct": 0.205761316872428
      }
    ],
    "file": "manual_dotstudios/2026-09-14/app-installs-summary-6.csv",
    "installs": 486,
    "updates": 297,
    "events": 783,
    "users": 768,
    "priorInstalls": 486,
    "priorUpdates": 318,
    "usInstalls": 466,
    "prior": {
      "period": "Oct 19-Oct 25, 2026",
      "installs": 486,
      "updates": 318
    },
    "installsDeltaPct": 0.0,
    "updatesDeltaPct": -6.60377358490566,
    "byPlatformDetail": {
      "Android": {
        "installs": 85,
        "updates": 84,
        "events": 169,
        "users": 168
      },
      "iOS": {
        "installs": 118,
        "updates": 112,
        "events": 230,
        "users": 230
      },
      "web": {
        "installs": 283,
        "updates": 101,
        "events": 384,
        "users": 370
      }
    },
    "byDeviceCategoryDetail": {
      "mobile": {
        "installs": 149,
        "updates": 161,
        "events": 310,
        "users": 309
      },
      "tablet": {
        "installs": 29,
        "updates": 23,
        "events": 52,
        "users": 52
      },
      "smart tv": {
        "installs": 300,
        "updates": 113,
        "events": 413,
        "users": 399
      },
      "desktop": {
        "installs": 8,
        "updates": 0,
        "events": 8,
        "users": 8
      }
    },
    "comparisonPeriod": "Sep 7-Sep 13, 2026 (last uploaded export; overlapping window)",
    "sourceLabel": "Fresh DotStudios manual export",
    "sourceDetail": "User upload November 2; Oct 26-Nov 1, 2026"
  },
  "dotStudiosVideoViews": {
    "source": "DotStudios video-views-9.csv",
    "sourceType": "manual_dotstudios_export",
    "period": "Oct 26-Nov 1, 2026",
    "periodStart": "2026-10-26",
    "periodEnd": "2026-11-01",
    "updatedAt": "2026-11-02T20:35:51.823384+00:00",
    "status": "fresh_manual",
    "rowCount": 536,
    "totalViews": 10108,
    "daily": [
      {
        "date": "2026-10-26",
        "label": "Oct 26",
        "views": 26,
        "shareOfViewsPct": 0.3
      },
      {
        "date": "2026-10-27",
        "label": "Oct 27",
        "views": 78,
        "shareOfViewsPct": 0.8
      },
      {
        "date": "2026-10-28",
        "label": "Oct 28",
        "views": 86,
        "shareOfViewsPct": 0.9
      },
      {
        "date": "2026-10-29",
        "label": "Oct 29",
        "views": 95,
        "shareOfViewsPct": 0.9
      },
      {
        "date": "2026-10-30",
        "label": "Oct 30",
        "views": 157,
        "shareOfViewsPct": 1.6
      },
      {
        "date": "2026-10-31",
        "label": "Oct 31",
        "views": 1089,
        "shareOfViewsPct": 10.8
      },
      {
        "date": "2026-11-01",
        "label": "Nov 1",
        "views": 8577,
        "shareOfViewsPct": 84.9
      }
    ],
    "byDevice": {
      "roku": 3776,
      "desktop_web": 2466,
      "android": 1130,
      "ios": 843,
      "firetv": 838,
      "androidtv": 683,
      "mobileweb": 244,
      "appletv": 120,
      "vizio": 8
    },
    "deviceBreakout": [
      {
        "Device": "roku",
        "views": 3776,
        "shareOfViewsPct": 37.4
      },
      {
        "Device": "desktop_web",
        "views": 2466,
        "shareOfViewsPct": 24.4
      },
      {
        "Device": "android",
        "views": 1130,
        "shareOfViewsPct": 11.2
      },
      {
        "Device": "ios",
        "views": 843,
        "shareOfViewsPct": 8.3
      },
      {
        "Device": "firetv",
        "views": 838,
        "shareOfViewsPct": 8.3
      },
      {
        "Device": "androidtv",
        "views": 683,
        "shareOfViewsPct": 6.8
      },
      {
        "Device": "mobileweb",
        "views": 244,
        "shareOfViewsPct": 2.4
      },
      {
        "Device": "appletv",
        "views": 120,
        "shareOfViewsPct": 1.2
      },
      {
        "Device": "vizio",
        "views": 8,
        "shareOfViewsPct": 0.1
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
      "ElectricNOW": 3572,
      "The Ark": 1446,
      "Leverage": 1320,
      "The Librarians": 1278,
      "The Triangle Night 3": 686,
      "ElectricNOW en Español": 136,
      "Almost Paradise - Season 2": 123,
      "Kung Fu Movies": 77
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
    "priorTotalViews": 10774,
    "deltaPct": -6.18,
    "ctvViews": 5425,
    "ctvSharePct": 53.7,
    "priorCtvSharePct": 55.3,
    "caveat": "DotStudios video views are the vendor's player-side count and are not GA4 active users or sessions. Daily rows in this export are not evenly attributed across the week, so do not chart them as a daily trend.",
    "sources": {
      "google_analytics": 536
    },
    "sourceLabel": "Fresh DotStudios manual export",
    "sourceDetail": "User upload November 2; Oct 26-Nov 1, 2026"
  },
  "rokuSalesActivity": {
    "period": "Oct 26-Nov 1, 2026",
    "reportPeriod": "Roku Sales Activity report generated November 2, 2026 at 7:07 AM PST; report covers the last 7 weeks, with Oct 26-Nov 1, 2026 rows (by transaction date) summarized here.",
    "source": "Roku Sales Activity email from bdp_noreply@data.roku.com",
    "emailDate": "2026-11-02T15:07:47+00:00",
    "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwDvKLV_nde7SYUl0H8b5z1dAAPKm0PlAADvKLV_nde7SYUl0H8b5z1dAAQXqSA9AAA=",
    "status": "fresh",
    "transactions": 0,
    "gross": 0.0,
    "developerRevenue": 0.0,
    "daily": [],
    "priorPeriod": {
      "period": "Oct 19-Oct 25, 2026",
      "transactions": 3,
      "gross": 62.97,
      "developerRevenue": 50.37
    },
    "deltaVsPriorGrossPct": -100.0,
    "note": "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded.",
    "trcExclusionNote": "Roku TRC emails are for the separate Roku live-channel surface outside the ElectricNOW app and are excluded from app/platform usage."
  },
  "rokuSalesSummary": {
    "period": "Oct 26-Nov 1, 2026",
    "reportPeriod": "Roku Sales Activity report generated November 2, 2026 at 7:07 AM PST; report covers the last 7 weeks, with Oct 26-Nov 1, 2026 rows (by transaction date) summarized here.",
    "source": "Roku Sales Activity email from bdp_noreply@data.roku.com",
    "emailDate": "2026-11-02T15:07:47+00:00",
    "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwDvKLV_nde7SYUl0H8b5z1dAAPKm0PlAADvKLV_nde7SYUl0H8b5z1dAAQXqSA9AAA=",
    "status": "fresh",
    "transactions": 0,
    "gross": 0.0,
    "developerRevenue": 0.0,
    "daily": [],
    "priorPeriod": {
      "period": "Oct 19-Oct 25, 2026",
      "transactions": 3,
      "gross": 62.97,
      "developerRevenue": 50.37
    },
    "deltaVsPriorGrossPct": -100.0,
    "note": "Fresh Roku Sales: Oct 26-Nov 1, 2026, 0 purchases / $0.00 (prior week 3 / $62.97); the latest Roku sale is Oct 24, and DotStudios also shows no Roku-device purchases. App Engagement: Oct 25-Oct 31 (Sun-Sat, one-day offset), 2,301 hours, 217 average daily viewers, 90.69 minutes/viewer, 78 installs / 77 uninstalls (prior 2,323 hours, 240 viewers, 82.85 min). Separate from GA4; TRC off-app excluded.",
    "trcExclusionNote": "Roku TRC emails are for the separate Roku live-channel surface outside the ElectricNOW app and are excluded from app/platform usage."
  },
  "visibleSourceWeek": {
    "period": "Oct 26-Nov 1, 2026",
    "range": "Oct 26-Nov 1, 2026",
    "label": "DotStudios current-week TVOD",
    "gross": 125.94,
    "net": 125.94,
    "transactions": 6,
    "purchases": 6,
    "paidTransactions": 6,
    "chargeRows": 6,
    "adjustmentRows": 0,
    "adjustments": 0.0,
    "knownFreshVisibleTransactions": 6,
    "purchaseRevenue": 125.94,
    "source": "DotStudios manual export",
    "status": "fresh_manual",
    "note": "DotStudios TVOD: 6 purchases / $125.94 net from 6 buyers versus 15 / $314.85 (-60.0% purchases and dollars); 6 charge rows, no adjustments. By device: web 5 / $104.95, Android 1 / $20.99; no Roku or Apple purchases. Roku Sales Activity also shows no purchases and Apple shows $0.00, so those agree. Stripe could not be checked this week (connector disconnected). All 6 were $20.99 Season Passes: The Ark Season 3 3 / $62.97 and The Librarians: The Next Chapter Season 2 3 / $62.97.",
    "priorPeriod": "Oct 19-Oct 25, 2026",
    "deltaVsPriorPct": -60.00000000000001,
    "dotStudiosTvodGross": 125.94,
    "dotStudiosTvodTransactions": 6,
    "appleManualSnapshotGross": 0.0,
    "appleManualSnapshotDownloads": 47,
    "appleManualSnapshotPeriod": "Oct 25-Oct 31, 2026 (Apple Sun-Sat window)",
    "appleManualSnapshotGeography": "Apple Sales view"
  },
  "_renderContract": {
    "normalizedAt": "2026-11-02 20:34 ",
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
    "lastPatched": "2026-09-21"
  },
  "corrections": [
    {
      "date": "2026-11-02",
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
    },
    "calculationAudit": {
      "date": "2026-09-20",
      "range": "Apr 13-Apr 19, 2026",
      "definition": "GA4 property 497892271; identical pagePath exclusion for launch, current and previous weeks: /landing, /devices, /roku, /ios, /android, /apple-tv and /fire-tv roots and subpaths. Totals are queried directly, not sums of per-platform users. Engaged time is not proven video-watch time.",
      "rule": "Base always means the user-approved launch week. Percentage = (now - base) / base * 100. Minutes remain actual period values."
    }
  },
  "calculationAudit": {
    "date": "2026-11-02",
    "launchWeek": "Apr 13-Apr 19, 2026",
    "note": "GA4 property 497892271; identical acquisition-page exclusions in launch/current/prior queries. Direct aggregate totals, not added platform users. Engaged time is not independently verified video-watch time."
  },
  "rokuAdsSummary": {
    "source": "Nathan Froelich / PC Digital Marketing email",
    "subject": "Roku Ads Performance - Suggested Pivot",
    "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAP7v4KLAAA=",
    "receivedAt": "2026-09-21T20:25:16+00:00",
    "followUpEmailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAP7v4KRAAA=",
    "followUpReceivedAt": "2026-09-21T20:40:04+00:00",
    "status": "stale_preserved_no_fresh_pull",
    "period": "Campaign-to-date as reported Sep 21; exact start/end not supplied",
    "spendUSD": 1908,
    "bestCampaignCostPerInstallLowerBoundUSD": 60,
    "costPerInstallOperator": ">",
    "installCount": null,
    "weeklySpend": null,
    "conditionalCreditUSD": 5000,
    "requiredSpendUSD": 5000,
    "creditEarned": null,
    "interpretation": "New Sep 21 update from Nathan (after the scheduled refresh): Roku Ads has spent $1,908 campaign-to-date over several weeks, with the best-performing campaign costing over $60 per install. Nathan reports no expected upward trend in TV-app use and calls the cost unsustainable. This is an agency-reported campaign-to-date snapshot, not Sep 14–20 spend, not Roku app sales, and not off-app TRC performance. A $5,000 ad credit requires $5,000 spend; it is not earned revenue or a reason by itself to keep spending.",
    "strategy": "Nathan recommends shifting from general app promotion to show-led Meta creative for The Ark, Leverage and The Librarians. His Sep 21 follow-up specifies 15- and 30-second Ark social cuts, with the install CTA: “Watch Seasons 1 and 2 on ElectricNOW. Download the app to stream free today.” He reports efficient initial Meta prospecting installs but weak retention; better retention from content-led creative is a test hypothesis, not a measured result.",
    "note": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed.",
    "latestClarification": "STALE QUANTITATIVE DATA: Meta-only measured flight remains Aug 4-26; current-week spend/downloads and segment efficiency unavailable after Sep 28 mailbox search. Nathan Sep 21 4:55 PM PDT explicitly recommended pausing Roku Ads entirely and refocusing on Meta; execution of pause/restart is unconfirmed. Historical Meta $11.31/download is not a current rate.",
    "pauseConfirmed": false,
    "staleNote": "STALE quantitative Meta data: latest measured flight remains Aug 4-Aug 26, 2026. Nov 2 Outlook search found no newer Meta-only report from Nathan (none since Oct 5; his latest thread is the Oct 17 Roku Ads Manager payment-card issue, with a $5k Roku ad credit to spend through November). Sep 21 recommendation to pause Roku and test show-led Meta is historical; implementation remains unconfirmed."
  },
  "contentReadout": "App activity this week is led by Splash (1,908 users), Home Page (1,295) and Intro (1,100); the deepest interaction is on Player (125 events per user) and ElectricNOW (121), the viewing screens. Rows marked (not set) arrived with no screen name.",
  "emptyStateMessages": {
    "google-ads-devices": "No device rows: Google Ads delivered 0 impressions Oct 19-Oct 25, 2026.",
    "google-ads-actions": "No conversion actions: Google Ads delivered 0 impressions Oct 19-Oct 25, 2026.",
    "youtube-traffic": "YouTube did not return traffic-source rows for this partial Oct 19-Oct 24 window.",
    "youtube-devices": "YouTube did not return device rows for this partial Oct 19-Oct 24 window.",
    "meta-ads-gender": "No gender breakdown in Nathan’s latest Meta-only report (stale: Aug 4-26).",
    "meta-ads-age": "No age breakdown in Nathan’s latest Meta-only report (stale: Aug 4-26)."
  },
  "ga4Revisions": [
    {
      "period": "Oct 12-Oct 18, 2026",
      "metric": "activeUsers",
      "published": 3259,
      "revised": 3024,
      "publishedOn": "2026-10-19",
      "revisedOn": "2026-10-26",
      "scope": "platform users (landing pages excluded)"
    },
    {
      "period": "Oct 12-Oct 18, 2026",
      "metric": "sessions",
      "published": 8253,
      "revised": 7682,
      "publishedOn": "2026-10-19",
      "revisedOn": "2026-10-26",
      "scope": "platform sessions"
    },
    {
      "period": "Oct 12-Oct 18, 2026",
      "metric": "webSessions",
      "published": 5308,
      "revised": 4791,
      "publishedOn": "2026-10-19",
      "revisedOn": "2026-10-26",
      "scope": "web sessions"
    },
    {
      "period": "Oct 19-Oct 25, 2026",
      "metric": "webSessions",
      "published": 4224,
      "revised": 3877,
      "publishedOn": "2026-10-26",
      "revisedOn": "2026-10-27",
      "scope": "web sessions; first pull included late-processing Oct 25 data"
    },
    {
      "period": "Oct 19-Oct 25, 2026",
      "metric": "activeUsers",
      "published": 2727,
      "revised": 2535,
      "publishedOn": "2026-10-26",
      "revisedOn": "2026-10-27",
      "scope": "platform users; first pull included late-processing Oct 25 data"
    },
    {
      "period": "Oct 19-Oct 25, 2026",
      "metric": "sessions",
      "published": 6736,
      "revised": 6453,
      "publishedOn": "2026-10-26",
      "revisedOn": "2026-10-27",
      "scope": "platform sessions"
    }
  ],
  "ga4RevisionsNote": "GA4 keeps processing for 24-72 hours; first-pull values that were published and later revised are kept here so every revision mentioned on the dashboard traces to data.",
  "ionicAdRevenue": {
    "title": "Ad revenue (Ionic)",
    "status": "fresh_manual",
    "period": "Oct 26–Nov 1, 2026",
    "periodStart": "2026-10-26",
    "periodEnd": "2026-11-01",
    "comparisonPeriod": "Oct 19–25, 2026",
    "source": "Ionic 180-day daily report (Ionic180DayReport_11012026.csv, (GMT-05:00) Eastern Time), sent by Michael Johnson — email 'Ionic Ad Revenue 11012026'",
    "sourceEmailDate": "2026-11-02T06:41:51Z",
    "reportGenerated": "2026-11-02 1:35 AM",
    "current": {
      "daysCovered": 7,
      "revenue": 121.05,
      "impressions": 38057,
      "bidRequests": 60077,
      "rpm": 3.18
    },
    "prior": {
      "daysCovered": 7,
      "revenue": 67.15,
      "impressions": 33627,
      "bidRequests": 55161,
      "rpm": 2.0
    },
    "deltas": {
      "revenuePct": 80.3,
      "impressionsPct": 13.2,
      "rpmPct": 59.0
    },
    "weeklyTrend": [
      {
        "weekStart": "2026-08-24",
        "label": "Aug 24–30",
        "daysCovered": 7,
        "revenue": 43.82,
        "impressions": 43206,
        "bidRequests": 73920,
        "rpm": 1.01
      },
      {
        "weekStart": "2026-08-31",
        "label": "Aug 31–Sep 6",
        "daysCovered": 7,
        "revenue": 65.8,
        "impressions": 54243,
        "bidRequests": 75773,
        "rpm": 1.21
      },
      {
        "weekStart": "2026-09-07",
        "label": "Sep 7–13",
        "daysCovered": 7,
        "revenue": 77.24,
        "impressions": 61253,
        "bidRequests": 74159,
        "rpm": 1.26
      },
      {
        "weekStart": "2026-09-14",
        "label": "Sep 14–20",
        "daysCovered": 7,
        "revenue": 78.17,
        "impressions": 58318,
        "bidRequests": 64972,
        "rpm": 1.34
      },
      {
        "weekStart": "2026-09-21",
        "label": "Sep 21–27",
        "daysCovered": 7,
        "revenue": 77.55,
        "impressions": 48593,
        "bidRequests": 62243,
        "rpm": 1.6
      },
      {
        "weekStart": "2026-09-28",
        "label": "Sep 28–Oct 4",
        "daysCovered": 7,
        "revenue": 54.81,
        "impressions": 53475,
        "bidRequests": 58533,
        "rpm": 1.02
      },
      {
        "weekStart": "2026-10-05",
        "label": "Oct 5–11",
        "daysCovered": 7,
        "revenue": 70.54,
        "impressions": 65397,
        "bidRequests": 56408,
        "rpm": 1.08
      },
      {
        "weekStart": "2026-10-12",
        "label": "Oct 12–18",
        "daysCovered": 7,
        "revenue": 17.35,
        "impressions": 36338,
        "bidRequests": 59588,
        "rpm": 0.48
      },
      {
        "weekStart": "2026-10-19",
        "label": "Oct 19–25",
        "daysCovered": 7,
        "revenue": 67.15,
        "impressions": 33627,
        "bidRequests": 55161,
        "rpm": 2.0
      },
      {
        "weekStart": "2026-10-26",
        "label": "Oct 26–Nov 1",
        "daysCovered": 7,
        "revenue": 121.05,
        "impressions": 38057,
        "bidRequests": 60077,
        "rpm": 3.18
      }
    ],
    "summerBaseline": {
      "label": "Jun 1–Jul 12 average week",
      "revenuePerWeek": 555.5,
      "weeks": 6
    },
    "shareOfSummerPct": 22,
    "previousHigherWeek": {
      "label": "Jul 6–12, 2026",
      "revenue": 607.63
    },
    "plainEnglish": "Ionic ad revenue rose 80% to $121.05 for Oct 26–Nov 1, with revenue per 1,000 ad impressions up from $2.00 to $3.18. Both drove it: more ads were served (impressions +13.2%) and each ad earned more. It is the highest Ionic week since Jul 6–12, 2026, when revenue was $607.63. This is still about 22% of the June–early July average of $555.50 per week; revenue has not recovered from the July–August drop.",
    "caveats": [
      "Ionic supply revenue is gross revenue reported by the ad partner, not net revenue to ElectricNOW and not a return on ad spend.",
      "Ionic impressions come from Ionic’s ad-serving system and are not the DotStudios in-app ad impression count; do not add or compare them directly.",
      "Weeks are Monday–Sunday to match the dashboard. Michael’s email uses Sunday–Saturday weeks, so his weekly totals differ slightly.",
      "Ionic report times are (GMT-05:00) Eastern Time."
    ],
    "updatedAt": "2026-11-02T20:36:49.471502+00:00"
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
  // Comparison values here are percentages, except explicit rate-point cards.
  return ['points', 'percentage_points'].includes(card.deltaType) ? fmt.points(value) : fmt.delta(value);
}

// The launch-baseline comparison divides by the card's launchBaseline value.
// When that denominator is missing or zero the percentage is undefined, and a
// bare "new" badge is misleading for metrics that already existed at launch.
// Render an explicit "baseline unavailable" note instead, reserving the normal
// delta for cards that actually have a usable baseline.
function launchBaselineCompare(card) {
  const baseline = toFiniteNumber(card.launchBaseline);
  const now = toFiniteNumber(card.current);
  const delta = now === null || baseline === null || baseline === 0 ? null :
    (['points', 'percentage_points'].includes(card.deltaType) ? now - baseline : (now - baseline) / baseline * 100);
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
  const previous = toFiniteNumber(card.previousWeek);
  const now = toFiniteNumber(card.current);
  const delta = now === null || previous === null || previous === 0 ? null :
    (['points', 'percentage_points'].includes(card.deltaType) ? now - previous : (now - previous) / previous * 100);
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
            <small>Launch-week value</small>
            <em>${card.format === 'minutes' ? fmt.minutes(card.launchBaseline) : card.format === 'percent' ? fmt.percent(card.launchBaseline) : fmt.number(card.launchBaseline)}</em>
            <small>vs launch baseline</small>
            <em class="delta ${launchBaselineCompare(card).cls}"${launchBaselineCompare(card).title ? ` title="${escapeHtml(launchBaselineCompare(card).title)}"` : ''}>${launchBaselineCompare(card).text}</em>
            <small>vs previous 7 days</small>
            <em class="delta ${previousWeekCompare(card).cls}">${previousWeekCompare(card).text}</em>
          </div>
          <p>Base: ${escapeHtml(data.periods.launchBaseline.range)}<br>Now: ${escapeHtml(periodLabel())}</p>
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
        // skip the closing verdict when a bullet already carries it (it printed twice before Oct 27)
        paidAssessmentText && !(summary.bullets || []).some((b) => paidAssessment?.summary && String(b).includes(paidAssessment.summary.slice(0, 160)))
          ? paidAssessmentText : null,
      ].filter(Boolean)
    : null;
  const insightItems = summaryItems?.length ? summaryItems : data.plainEnglishInsights || [];
  document.querySelector('#insights-list').innerHTML = insightItems
    .map((item, index) => `<li class="${index === 0 ? 'insight-overview' : ''}">${item}</li>`)
    .join('');
}

// Oct 27, 2026: never print the same long note twice in one card (Apple and DotStudios notes repeated in Purchases)
function _enDedupeText(root) {
  if (!root) return;
  const seen = [];
  root.querySelectorAll('p, em.sales-stat-footnote').forEach((el) => {
    let t = (el.textContent || '').trim();
    for (const s of seen) {
      if (t.includes(s)) t = t.replace(s, '').trim();
    }
    if (t !== (el.textContent || '').trim()) {
      if (!t) { el.remove(); return; }
      el.textContent = t;
    }
    if (t.length > 80) seen.push(t);
  });
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
          <span>${escapeHtml(source.source)}<br><small>${escapeHtml(source.period || source.range || '')} ${String(source.detail || source.note || '').toLowerCase().startsWith(String(source.status || '').toLowerCase()) ? '' : escapeHtml(source.status || '')} ${escapeHtml(source.detail || source.note || '')}</small></span>
          <strong>${fmt.number(source.purchases)} ${escapeHtml(source.countLabel || 'purchases')} / ${fmt.currency(source.purchaseRevenue)}</strong>
        </li>
      `,
    )
    .join('');
  const recentPaymentLine = (sales.monthToDate?.payments || sales.recentPayments || [])
    .slice().sort((a, b) => String(b.createdAt || b.date || '').localeCompare(String(a.createdAt || a.date || ''))).slice(0, 4)
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
      <p class="sales-net">Reconciliation: the weekly headline is ${fmt.currency(headlineVisibleRevenue)} for ${escapeHtml(headlineVisibleRange)}, using the DotStudios transaction export. Apple, Stripe and Roku are overlapping cross-checks, not amounts to add to that headline. Individual source periods are shown separately.</p>
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
        <span>${escapeHtml(sales.yearToDate.label || 'Sales year to date')}</span>
        <strong>${fmt.currency(sales.yearToDate.purchaseRevenue)}</strong>
        <em>${escapeHtml(sales.yearToDate.range || '')} · ${fmt.number(sales.yearToDate.purchases)} ${escapeHtml(sales.yearToDate.countLabel || 'purchases')}</em>
        <em class="sales-stat-footnote">${escapeHtml(sales.yearToDate.caveat || sales.yearToDate.note || '')}</em>
      </div>` : ''}
      <div class="sales-stat baseline-set">
        <span>${/stale/i.test(String((sales.stripe || {}).status || '')) ? 'Latest Stripe source check (stale, last successful pull)' : 'Latest Stripe source check'}</span>
        <strong>${fmt.currency(stripeLatest.purchaseRevenue)}</strong>
        <em>${stripeLatest.range} · ${fmt.number(stripeLatest.purchases)} purchases</em>
        <em class="sales-stat-footnote">${escapeHtml(stripeLatest.note || 'Stripe-visible web purchases only; do not add to DotStudios TVOD.')}</em>
      </div>
      <div class="sales-stat">
        <span>${escapeHtml(appleLatest.label || 'Apple latest snapshot')}</span>
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
      <strong>${appleDownloads.totalUnits != null ? `${fmt.number(appleDownloads.totalUnits)} Apple total units` : `${fmt.number(appleDownloads.downloads)} Apple free downloads`}</strong>
      <p>${escapeHtml(appleDownloads.period)} · daily average ${fmt.number(appleDownloads.dailyAverage)}. ${escapeHtml(appleDownloads.sourceDetail || appleDownloads.note || '')}</p>
    </div>` : ''}
    ${sales.sourceDetail ? `<p class="sales-source">${sales.sourceDetail}</p>` : ''}
    <p class="sales-note">${sales.note}</p>
  `;
  _enDedupeText(salesSummaryEl);
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
      const d = (live.previousDeltas || live.deltas)[key];
      const delta = selectedPeriod === 'weekToDate' ? '' : `<em class="delta ${deltaClass(d)}">${fmt.delta(d)} ${escapeHtml(live.deltasLabel || 'vs previous 7 days')}</em>`;
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
    usageStat("Live-screen 'play' events", usage.live.playback.play || 0),
    usageStat('Live-screen video starts', usage.live.playback.video_start || 0),
  ].join('');
  const _odv = usage.onDemand.viewing;
  if (_odv) {
    // Oct 27 fix: headline the real on-demand audience (video starts, live/FAST excluded), never the legacy 'On Demand' screen count.
    document.querySelector('#ondemand-usage-cards').innerHTML = [
      usageStat('On-demand viewers', _odv.viewers),
      usageStat('On-demand video starts', _odv.starts),
      usageStat('Finished an on-demand video', _odv.finishers),
    ].join('');
  } else {
    document.querySelector('#ondemand-usage-cards').innerHTML = [
      usageStat('On Demand active users', usage.onDemand.total.activeUsers),
      usageStat('On Demand screen views', usage.onDemand.total.screenPageViews),
      usageStat('On Demand events', usage.onDemand.total.eventCount),
    ].join('');
  }
  renderUsagePlatformList('#live-platform-breakdown', usage.live.platforms);
  if (_odv && Array.isArray(_odv.platforms)) {
    const _odMax = Math.max(..._odv.platforms.map((r) => r.viewers || 0), 1);
    document.querySelector('#ondemand-platform-breakdown').innerHTML = _odv.platforms
      .map((row) => `
        <article class="platform-share-card compact-card">
          <header>
            <div>
              <strong>${escapeHtml(row.platform)}</strong>
              <span>${fmt.number(row.viewers)} on-demand viewers</span>
            </div>
            <b>${fmt.number(row.viewers)}</b>
          </header>
          <div class="share-track" aria-hidden="true">
            <div class="share-fill" style="width:${Math.max(5, ((row.viewers || 0) / _odMax) * 100)}%"></div>
          </div>
          <p>${fmt.number(row.starts)} video starts</p>
        </article>
      `)
      .join('');
  } else {
    renderUsagePlatformList('#ondemand-platform-breakdown', usage.onDemand.platforms);
  }
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

function renderIonicAdRevenue() {
  // Ionic ad-revenue card (added 2026-11-02). Self-inserting so every renderer copy works without template edits.
  const summary = data.ionicAdRevenue;
  let section = document.querySelector('#ionic-ad-revenue');
  if (!summary || typeof summary !== 'object' || !summary.current) {
    if (section) section.hidden = true;
    return;
  }
  if (!section) {
    const anchor = document.querySelector('#dotstudios-app-ads');
    if (!anchor || !anchor.parentNode) return;
    section = document.createElement('section');
    section.className = 'panel ionic-ad-revenue-panel';
    section.id = 'ionic-ad-revenue';
    section.setAttribute('aria-labelledby', 'ionic-ad-revenue-title');
    anchor.parentNode.insertBefore(section, anchor);
  }
  section.hidden = false;
  const cur = summary.current || {};
  const pri = summary.prior || {};
  const deltas = summary.deltas || {};
  const money = (v) => (toFiniteNumber(v) === null ? NOT_AVAILABLE : `$${Number(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  const signed = (v) => (toFiniteNumber(v) === null ? NOT_AVAILABLE : `${Number(v) >= 0 ? '+' : ''}${Number(v).toFixed(1)}%`);
  const stale = summary.status && String(summary.status).startsWith('stale');
  const exactCount = (v) => (toFiniteNumber(v) === null ? NOT_AVAILABLE : Number(v).toLocaleString('en-US'));
  const kpis = [
    usageStat('Ionic ad revenue', money(cur.revenue), `${signed(deltas.revenuePct)} vs ${escapeHtml(summary.comparisonPeriod || 'prior week')} (${money(pri.revenue)})`),
    usageStat('Revenue per 1,000 ads', money(cur.rpm), `${money(pri.rpm)} prior week (${signed(deltas.rpmPct)})`),
    usageStat('Ionic ad impressions', exactCount(cur.impressions), `${signed(deltas.impressionsPct)} vs ${exactCount(pri.impressions)}; Ionic count, not DotStudios in-app impressions`),
    usageStat('June–early July average', money(summary.summerBaseline?.revenuePerWeek), `per week; this week is about ${summary.shareOfSummerPct ?? NOT_AVAILABLE}% of that level`),
  ];
  const trend = Array.isArray(summary.weeklyTrend) ? summary.weeklyTrend : [];
  const max = Math.max(...trend.map((r) => toFiniteNumber(r.revenue) || 0), 1);
  const bars = trend
    .map((r) => {
      const v = toFiniteNumber(r.revenue) || 0;
      const width = Math.max(3, (v / max) * 100);
      const isCurrent = r.weekStart === summary.periodStart;
      return `
        <div class="bar-row${isCurrent ? ' is-current' : ''}">
          <header><span>${escapeHtml(r.label || r.weekStart)}${isCurrent ? ' (this week)' : ''}</span><strong>${money(v)}</strong></header>
          <div class="bar-track"><div class="bar-fill" style="width:${width.toFixed(1)}%;${isCurrent ? '' : ' opacity:.55;'}"></div></div>
        </div>`;
    })
    .join('');
  const caveats = Array.isArray(summary.caveats) ? summary.caveats : [];
  section.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">Ad partner revenue · manual report</p>
        <h2 id="ionic-ad-revenue-title">${escapeHtml(summary.title || 'Ad revenue (Ionic)')}</h2>
      </div>
      <span class="period-chip" id="ionic-ad-revenue-period">${escapeHtml(summary.period || '')}${stale ? ' · stale' : ''}</span>
    </div>
    <p class="panel-note" id="ionic-ad-revenue-plain" data-testid="ionic-ad-revenue-plain">${escapeHtml(summary.plainEnglish || '')}</p>
    <div class="usage-card-grid" id="ionic-ad-revenue-kpis" data-testid="ionic-ad-revenue-kpis">${kpis.join('')}</div>
    <h3>Weekly Ionic ad revenue (Monday–Sunday)</h3>
    <div class="bar-list" id="ionic-ad-revenue-trend" data-testid="ionic-ad-revenue-trend">${bars}</div>
    <p class="panel-note">${escapeHtml(summary.source || '')}</p>
    <ul class="panel-note" id="ionic-ad-revenue-caveats">${caveats.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}</ul>
  `;
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
      'Per user = total weekly engaged time divided by active users. Per session = engaged time divided by visits/sessions. ' + (platformTime.breakoutNote || '');
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
      (data.contentReadout || 'App activity is concentrated in app-lifecycle and video-playback screens. ') +
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
  if (periodChip) periodChip.textContent = `${summary.actualPeriod || summary.period} · latest available`;

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
    { key: 'views', label: 'Views', value: kpiObject?.views ?? summary.totals?.views, detail: summary.actualPeriod || summary.period || '' },
    { key: 'hoursWatched', label: 'Hours watched', value: kpiObject?.hoursWatched ?? summary.totals?.hoursWatched, detail: summary.actualPeriod || summary.period || '' },
    { key: 'estimatedRevenue', label: 'Est. total revenue', value: kpiObject?.estimatedRevenue ?? summary.totals?.estimatedRevenue, detail: 'YouTube only; includes non-ad revenue' },
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
        <thead><tr><th>Date</th><th>Views</th><th>Est. hours</th><th>Est. total rev</th><th>Ad impressions</th><th>Monetized playbacks</th></tr></thead>
        <tbody>
          ${daily.map((r) => `
            <tr>
              <td>${escapeHtml(r.date)}</td>
              <td>${fmt.number(r.views)}</td>
              <td>${fmt.number(r.estimatedHoursWatched ?? r.hoursWatched ?? ((r.watchTimeMinutes || 0) / 60))}</td>
              <td>${fmt.currency(r.estimatedRevenue)}</td>
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
              <td>${fmt.number(v.estimatedHoursWatched ?? v.hoursWatched ?? (v.estimatedMinutesWatched != null ? v.estimatedMinutesWatched / 60 : v.watchTimeMinutes != null ? v.watchTimeMinutes / 60 : null))}</td>
              <td>${v.averageViewDuration_sec != null ? fmt.minutes(v.averageViewDuration_sec / 60) : escapeHtml(v.averageViewDuration || 'Not reported')}</td>
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
      ytd.label || 'Total sales year to date',
      fmt.currency(ytd.purchaseRevenue),
      `${fmt.number(ytd.purchases)} ${ytd.countLabel || 'purchases'} \u00b7 ${ytd.range || 'year to date'} \u00b7 ${ytd.caveat || ytd.note || ''}`,
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
  try { renderIonicAdRevenue(); } catch (err) { console.error('Ionic ad revenue card failed', err); }
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
  _enFillEmptyStates();
}

function _enFillEmptyStates() {
  const msgs = data.emptyStateMessages || {};
  document.querySelectorAll('.google-ads-action-list, .google-ads-device-list').forEach((el) => {
    if (!el.textContent.trim()) el.innerHTML = `<p class="panel-note">${escapeHtml(msgs[el.id] || 'None reported for this period.')}</p>`;
  });
  document.querySelectorAll('table').forEach((t) => {
    const body = t.querySelector('tbody');
    const cols = t.querySelectorAll('thead th').length || 1;
    if (body && !body.querySelector('tr')) {
      const host = t.closest('[id]');
      body.innerHTML = `<tr><td colspan="${cols}">${escapeHtml(msgs[host?.id] || 'None reported for this period.')}</td></tr>`;
    }
  });
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
      // Newest-wins: CDN branch caches can serve an older commit. Fetch the CDN copy and the GitHub copy,
      // and never replace bundled/loaded data with anything older (by generatedAtIso).
      const _enUrls = [`${HOSTED_DATA_URL}${separator}v=${Date.now()}`];
      if (/cdn\.jsdelivr\.net\/gh\/electricnow1\/electricnow-dashboard-data@main\//.test(HOSTED_DATA_URL)) {
        _enUrls.push(`https://raw.githubusercontent.com/electricnow1/electricnow-dashboard-data/main/dashboard-data.json?v=${Date.now()}`);
      }
      const _enGot = (await Promise.all(_enUrls.map(u => fetch(u, { cache: 'no-store' }).then(r => r.ok ? r.json() : null).catch(() => null)))).filter(Boolean);
      const _enTs = d => (d && d.generatedAtIso ? Date.parse(d.generatedAtIso) || 0 : 0);
      let _enBest = _enGot[0] || data || null; // primary hosted copy wins ties
      for (const d of [..._enGot.slice(1), data]) { if (d && (!_enBest || _enTs(d) > _enTs(_enBest))) _enBest = d; }
      if (!_enBest) throw new Error('Hosted data failed');
      if (_enBest === data && _enGot.length) console.warn('ElectricNOW: hosted data older than bundled data; keeping bundled', _enGot.map(d => d.generatedAtIso));
      data = _enBest;
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
