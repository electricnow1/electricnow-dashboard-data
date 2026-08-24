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
  style.textContent = "#electricnow-dashboard-embed {\n  --bg: #050a12;\n  --surface: #0a1524;\n  --surface-2: #0f2138;\n  --surface-3: #132b48;\n  --border: rgba(255, 255, 255, 0.11);\n  --border-strong: rgba(255, 255, 255, 0.18);\n  --text: #f6f9ff;\n  --muted: #9fb3ca;\n  --faint: #667f9d;\n  --primary: #2f81d7;\n  --primary-2: #68b7ff;\n  --good: #69d895;\n  --bad: #ff6f85;\n  --warn: #ffc857;\n  --shadow: 0 22px 70px rgba(0, 0, 0, 0.42);\n  --radius: 14px;\n  --radius-sm: 10px;\n  --font-ui: 'Inter', system-ui, sans-serif;\n  --font-display: 'Barlow Condensed', 'Arial Narrow', sans-serif;\n  --embed-top-buffer: 32px;\n}\n#electricnow-dashboard-embed *,\n#electricnow-dashboard-embed *::before,\n#electricnow-dashboard-embed *::after {\n  box-sizing: border-box;\n}\n#electricnow-dashboard-embed,\n#electricnow-dashboard-embed {\n  min-height: 100%;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n#electricnow-dashboard-embed {\n  margin: 0;\n  background:\n    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),\n    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),\n    var(--bg);\n  color: var(--text);\n  font-family: var(--font-ui);\n  font-size: 15px;\n  line-height: 1.45;\n  overflow-x: hidden;\n}\n#electricnow-dashboard-embed,\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n  background:\n    radial-gradient(circle at 12% 12%, rgba(47, 129, 215, 0.22), transparent 26rem),\n    radial-gradient(circle at 88% 18%, rgba(104, 183, 255, 0.12), transparent 28rem),\n    var(--bg) !important;\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed a {\n  color: inherit !important;\n}\n#electricnow-dashboard-embed button,\n#electricnow-dashboard-embed select {\n  font: inherit;\n}\n#electricnow-dashboard-embed .skip-link {\n  position: fixed;\n  left: 16px;\n  top: 16px;\n  z-index: 1000;\n  transform: translateY(-160%);\n  background: var(--primary);\n  color: #fff;\n  padding: 10px 14px;\n  border-radius: 999px;\n}\n#electricnow-dashboard-embed .skip-link:focus {\n  transform: translateY(0);\n}\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n  max-width: 100vw;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-columns: 280px minmax(0, 1fr);\n  grid-template-rows: minmax(104px, auto) minmax(0, 1fr);\n  min-height: 100vh;\n  padding-top: var(--embed-top-buffer);\n}\n#electricnow-dashboard-embed .sidebar {\n  grid-row: 1 / -1;\n  position: sticky;\n  top: var(--embed-top-buffer);\n  height: calc(100vh - var(--embed-top-buffer));\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  border-right: 1px solid var(--border);\n  background: #050a12 !important;\n  padding: 24px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\n#electricnow-dashboard-embed .brand {\n  display: grid;\n  grid-template-columns: 48px 1fr;\n  gap: 12px;\n  align-items: center;\n  text-decoration: none;\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .brand-mark {\n  width: 48px;\n  border-radius: 4px;\n  background: linear-gradient(135deg, #2367b2, #d9ebff);\n  color: #fff;\n  padding: 7px;\n}\n#electricnow-dashboard-embed .brand span {\n  display: grid;\n  gap: 0;\n}\n#electricnow-dashboard-embed .brand strong {\n  font-family: var(--font-display);\n  font-size: 25px;\n  line-height: 0.82;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .brand small,\n#electricnow-dashboard-embed .source-card span,\n#electricnow-dashboard-embed .eyebrow,\n#electricnow-dashboard-embed .select-label {\n  color: var(--primary-2) !important;\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .side-nav {\n  display: grid;\n  gap: 6px;\n}\n#electricnow-dashboard-embed .side-nav a {\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  border-radius: var(--radius-sm);\n  color: var(--muted) !important;\n  padding: 0 12px;\n  text-decoration: none;\n}\n#electricnow-dashboard-embed .side-nav a:hover,\n#electricnow-dashboard-embed .side-nav a:focus-visible {\n  background: var(--surface-2);\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .source-card {\n  margin-top: auto;\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  background: #0f2138 !important;\n  padding: 16px;\n}\n#electricnow-dashboard-embed .source-card strong {\n  display: block;\n  margin-top: 6px;\n}\n#electricnow-dashboard-embed .source-card p {\n  margin: 8px 0 0;\n  color: var(--muted);\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n#electricnow-dashboard-embed .topbar {\n  position: sticky;\n  top: var(--embed-top-buffer);\n  z-index: 20;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  border-bottom: 1px solid var(--border);\n  background: #070d17 !important;\n  backdrop-filter: blur(14px);\n  padding: 18px 28px;\n}\n#electricnow-dashboard-embed .topbar > div:first-child {\n  min-width: 0;\n  flex: 1 1 360px;\n}\n#electricnow-dashboard-embed .topbar h1 {\n  color: var(--text) !important;\n  margin: 2px 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(26px, 2.35vw, 34px);\n  line-height: 0.98;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .topbar-actions {\n  flex: 0 1 520px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n}\n#electricnow-dashboard-embed select,\n#electricnow-dashboard-embed .ghost-button {\n  min-height: 42px;\n  border: 1px solid var(--border-strong);\n  border-radius: 999px;\n  background: #0f2138 !important;\n  color: var(--text) !important;\n  padding: 0 14px;\n}\n#electricnow-dashboard-embed .ghost-button {\n  cursor: pointer;\n}\n#electricnow-dashboard-embed .ghost-button:disabled {\n  cursor: wait;\n  opacity: 0.55;\n}\n#electricnow-dashboard-embed .refresh-button {\n  border-color: rgba(104, 183, 255, 0.42);\n}\n#electricnow-dashboard-embed .refresh-status {\n  min-width: 130px;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .ghost-button.is-active,\n#electricnow-dashboard-embed .ghost-button:hover {\n  background: var(--primary);\n  border-color: var(--primary);\n}\n#electricnow-dashboard-embed .main {\n  padding: 28px 28px 96px;\n  min-width: 0;\n  background: #050a12 !important;\n}\n#electricnow-dashboard-embed .hero-panel,\n#electricnow-dashboard-embed .panel,\n#electricnow-dashboard-embed .plain-panel,\n#electricnow-dashboard-embed .kpi-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  background:\n    linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0)),\n    #0a1524 !important;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04);\n}\n#electricnow-dashboard-embed .hero-panel {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 260px;\n  align-items: end;\n  gap: 24px;\n  background:\n    linear-gradient(135deg, rgba(47, 129, 215, 0.28), rgba(10, 21, 36, 0.96) 55%),\n    #0a1524 !important;\n  padding: clamp(24px, 4vw, 42px);\n}\n#electricnow-dashboard-embed .hero-panel h2,\n#electricnow-dashboard-embed .plain-panel h2,\n#electricnow-dashboard-embed .panel h2 {\n  color: var(--text) !important;\n  margin: 4px 0 0;\n  font-family: var(--font-display);\n  font-size: clamp(25px, 3vw, 34px);\n  line-height: 1.08;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .panel h3,\n#electricnow-dashboard-embed .subsection-header h3 {\n  color: var(--text) !important;\n  margin: 18px 0 10px;\n  font-family: var(--font-display);\n  font-size: 22px;\n  line-height: 0.95;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .subsection-header {\n  margin-top: 28px;\n  border-top: 1px solid var(--border);\n  padding-top: 20px;\n}\n#electricnow-dashboard-embed .panel-note {\n  margin: 0 0 16px;\n  color: var(--muted);\n  font-size: 13px;\n  max-width: 860px;\n}\n#electricnow-dashboard-embed .topbar h1,\n#electricnow-dashboard-embed .hero-panel h2,\n#electricnow-dashboard-embed .plain-panel h2,\n#electricnow-dashboard-embed .panel h2,\n#electricnow-dashboard-embed .panel h3,\n#electricnow-dashboard-embed .subsection-header h3 {\n  color: var(--text) !important;\n}\n#electricnow-dashboard-embed .eyebrow,\n#electricnow-dashboard-embed .select-label,\n#electricnow-dashboard-embed .source-card span,\n#electricnow-dashboard-embed .brand small {\n  color: var(--primary-2) !important;\n}\n#electricnow-dashboard-embed .hero-panel p {\n  max-width: 72ch;\n  margin: 14px 0 0;\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .hero-meta {\n  display: grid;\n  gap: 4px;\n  justify-items: end;\n  color: var(--muted);\n  text-align: right;\n}\n#electricnow-dashboard-embed .hero-meta strong {\n  color: var(--text);\n}\n#electricnow-dashboard-embed .visit-strip {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\n  gap: 16px;\n  margin-top: 18px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--radius);\n  background:\n    linear-gradient(135deg, rgba(47, 129, 215, 0.20), rgba(10, 21, 36, 0.96)),\n    var(--surface);\n  box-shadow: var(--shadow);\n  padding: 20px;\n}\n#electricnow-dashboard-embed .visit-strip-header h2 {\n  margin: 2px 0 8px;\n  color: var(--text);\n  font-family: var(--font-display);\n  font-size: clamp(26px, 3vw, 38px);\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .visit-strip-header p:not(.eyebrow),\n#electricnow-dashboard-embed .visit-source,\n#electricnow-dashboard-embed .visit-card p {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .visit-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .visit-card {\n  display: grid;\n  gap: 10px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(5, 10, 18, 0.46);\n  padding: 16px;\n}\n#electricnow-dashboard-embed .visit-card span {\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .visit-card strong {\n  color: var(--text);\n  font-family: var(--font-display);\n  font-size: clamp(42px, 5vw, 64px);\n  line-height: 0.9;\n  letter-spacing: 0.02em;\n}\n#electricnow-dashboard-embed .visit-card-meta {\n  display: grid;\n  gap: 6px;\n  align-items: start;\n}\n#electricnow-dashboard-embed .visit-card small {\n  display: block;\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .visit-card-meta .delta {\n  display: inline-flex;\n  width: fit-content;\n  max-width: 100%;\n  white-space: normal;\n}\n#electricnow-dashboard-embed .visit-card p,\n#electricnow-dashboard-embed .visit-source {\n  margin: 0;\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .visit-source {\n  grid-column: 1 / -1;\n}\n#electricnow-dashboard-embed .plain-panel {\n  display: none;\n  grid-template-columns: 240px 1fr;\n  gap: 24px;\n  margin-top: 18px;\n  padding: 20px;\n}\n#electricnow-dashboard-embed .plain-panel.is-visible {\n  display: grid;\n}\n#electricnow-dashboard-embed .plain-panel:focus {\n  outline: 2px solid rgba(104, 183, 255, 0.75);\n  outline-offset: 4px;\n}\n#electricnow-dashboard-embed .plain-panel ul {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n#electricnow-dashboard-embed .plain-panel li,\n#electricnow-dashboard-embed .gap-list li {\n  color: var(--muted);\n}\n#electricnow-dashboard-embed .plain-panel li.insight-overview {\n  color: var(--text);\n  font-size: 1.03rem;\n  line-height: 1.55;\n}\n#electricnow-dashboard-embed .kpi-grid {\n  display: grid;\n  gap: 18px;\n  margin-top: 18px;\n}\n#electricnow-dashboard-embed .kpi-group {\n  border: 1px solid var(--border);\n  border-radius: 18px;\n  background: #08111e !important;\n  padding: 16px;\n  box-shadow: var(--shadow);\n}\n#electricnow-dashboard-embed .kpi-group-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  margin-bottom: 12px;\n}\n#electricnow-dashboard-embed .kpi-group-header h3 {\n  margin: 0;\n  color: var(--text) !important;\n  font-family: var(--font-display);\n  font-size: 23px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .kpi-group-header > p {\n  max-width: 620px;\n  margin: 0;\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .kpi-group-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .kpi-card {\n  min-height: 232px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 16px;\n}\n#electricnow-dashboard-embed .kpi-card span,\n#electricnow-dashboard-embed .metric-row span,\n#electricnow-dashboard-embed .table-wrap th {\n  color: var(--faint);\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .kpi-card span {\n  min-height: 32px;\n  display: block;\n}\n#electricnow-dashboard-embed .kpi-card strong {\n  display: block;\n  margin-top: 8px;\n  font-family: var(--font-display);\n  font-size: 34px;\n  line-height: 0.95;\n  letter-spacing: 0.03em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .kpi-card p {\n  margin: 12px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .kpi-compare-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 8px;\n  align-items: center;\n  margin-top: 14px;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n#electricnow-dashboard-embed .kpi-compare-grid small {\n  color: var(--faint);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .delta {\n  display: inline-flex;\n  align-self: flex-start;\n  margin-top: 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--muted);\n  padding: 4px 8px;\n  font-size: 12px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .delta.up {\n  color: var(--good);\n}\n#electricnow-dashboard-embed .delta.down {\n  color: var(--bad);\n}\n#electricnow-dashboard-embed .delta.baseline-unavailable {\n  color: var(--muted);\n  font-weight: 600;\n  font-style: italic;\n}\n#electricnow-dashboard-embed .dashboard-grid {\n  display: grid;\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n  gap: 18px;\n  margin-top: 18px;\n}\n#electricnow-dashboard-embed .span-4 {\n  grid-column: span 4;\n}\n#electricnow-dashboard-embed .span-6 {\n  grid-column: span 6;\n}\n#electricnow-dashboard-embed .span-8 {\n  grid-column: span 8;\n}\n#electricnow-dashboard-embed .panel {\n  min-width: 0;\n  padding: 18px;\n}\n#electricnow-dashboard-embed .panel-header {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: start;\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .period-chip {\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--muted);\n  padding: 6px 10px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n#electricnow-dashboard-embed .chart-wrap,\n#electricnow-dashboard-embed .mini-chart-wrap {\n  width: 100%;\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .chart-wrap + h3 {\n  margin-top: 24px;\n}\n#electricnow-dashboard-embed .chart-legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px 18px;\n  margin-top: 12px;\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .chart-note {\n  margin: 10px 0 0;\n  padding: 10px 12px;\n  border-left: 3px solid var(--warn);\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 8px;\n  color: var(--muted);\n  font-size: 13px;\n  line-height: 1.5;\n}\n#electricnow-dashboard-embed .chart-note:empty {\n  display: none;\n}\n#electricnow-dashboard-embed .chart-legend span {\n  display: inline-flex;\n  gap: 7px;\n  align-items: center;\n}\n#electricnow-dashboard-embed .legend-swatch {\n  width: 22px;\n  height: 4px;\n  border-radius: 999px;\n  display: inline-block;\n}\n#electricnow-dashboard-embed .legend-blue {\n  background: var(--primary-2);\n}\n#electricnow-dashboard-embed .legend-green {\n  background: var(--good);\n}\n#electricnow-dashboard-embed svg {\n  width: 100%;\n  height: auto;\n}\n#electricnow-dashboard-embed .axis {\n  stroke: rgba(255, 255, 255, 0.12);\n}\n#electricnow-dashboard-embed .chart-label {\n  fill: var(--muted);\n  font-size: 12px;\n  font-family: var(--font-ui);\n}\n#electricnow-dashboard-embed .chart-end-label {\n  font-family: var(--font-ui);\n  font-size: 12px;\n  font-weight: 800;\n  paint-order: stroke;\n  stroke: var(--surface);\n  stroke-width: 4px;\n}\n#electricnow-dashboard-embed .active-end {\n  fill: var(--primary-2);\n}\n#electricnow-dashboard-embed .engaged-end {\n  fill: var(--good);\n}\n#electricnow-dashboard-embed .line-active {\n  fill: none;\n  stroke: var(--primary-2);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .line-engaged {\n  fill: none;\n  stroke: var(--good);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .line-purchase {\n  fill: none;\n  stroke: var(--warn);\n  stroke-width: 4;\n}\n#electricnow-dashboard-embed .area-fill {\n  fill: rgba(104, 183, 255, 0.12);\n}\n#electricnow-dashboard-embed .purchase-summary {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .sales-summary {\n  display: grid;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .sales-callout {\n  border: 1px solid rgba(255, 200, 87, 0.28);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(255, 200, 87, 0.15), rgba(47, 129, 215, 0.1));\n  padding: 14px;\n}\n#electricnow-dashboard-embed .sales-callout-secondary {\n  border-color: rgba(56, 189, 248, 0.34);\n  background: linear-gradient(135deg, rgba(56, 189, 248, 0.16), rgba(129, 140, 248, 0.1));\n}\n#electricnow-dashboard-embed .sales-callout span,\n#electricnow-dashboard-embed .sales-stat span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-callout strong {\n  display: block;\n  margin-top: 5px;\n  font-family: var(--font-display);\n  font-size: 30px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-callout p,\n#electricnow-dashboard-embed .sales-note,\n#electricnow-dashboard-embed .sales-source,\n#electricnow-dashboard-embed .sales-stat em {\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .sales-callout p,\n#electricnow-dashboard-embed .sales-source,\n#electricnow-dashboard-embed .sales-note {\n  margin: 8px 0 0;\n}\n#electricnow-dashboard-embed .sales-source {\n  border-left: 2px solid rgba(104, 183, 255, 0.45);\n  padding-left: 10px;\n}\n#electricnow-dashboard-embed .sales-source-list {\n  display: grid;\n  gap: 6px;\n  margin: 14px 0 0;\n  padding: 0;\n  list-style: none;\n}\n#electricnow-dashboard-embed .sales-source-list li {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 8px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .sales-source-list li strong {\n  color: var(--text);\n  font-size: 12px;\n  text-align: right;\n}\n#electricnow-dashboard-embed .sales-stat-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n#electricnow-dashboard-embed .sales-stat {\n  min-width: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.58);\n  padding: 12px;\n}\n#electricnow-dashboard-embed .sales-stat strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 26px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-stat.baseline-set strong {\n  color: var(--good);\n  font-size: 24px;\n}\n#electricnow-dashboard-embed .sales-stat-footnote {\n  display: block;\n  margin-top: 4px;\n  font-size: 10px;\n  line-height: 1.3;\n  opacity: 0.85;\n}\n#electricnow-dashboard-embed .sales-audit-recent {\n  border-color: rgba(255, 197, 66, 0.4);\n}\n#electricnow-dashboard-embed .sales-audit {\n  border: 1px solid rgba(104, 183, 255, 0.34);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.72);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .sales-audit span {\n  display: block;\n  color: var(--warn);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-audit strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 28px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .sales-audit p,\n#electricnow-dashboard-embed .sales-audit small {\n  display: block;\n  margin: 8px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .purchase-row,\n#electricnow-dashboard-embed .metric-row {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 12px;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  padding-block: 10px;\n}\n#electricnow-dashboard-embed .purchase-row:last-child,\n#electricnow-dashboard-embed .metric-row:last-child {\n  border-bottom: 0;\n}\n#electricnow-dashboard-embed .purchase-row strong,\n#electricnow-dashboard-embed .metric-row strong {\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .not-tracked {\n  color: var(--warn);\n}\n#electricnow-dashboard-embed .purchase-point-label {\n  fill: var(--text);\n  font-size: 11px;\n  font-weight: 700;\n}\n#electricnow-dashboard-embed .metric-list {\n  display: grid;\n}\n#electricnow-dashboard-embed .usage-card-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 18px;\n}\n#electricnow-dashboard-embed .roku-engagement-grid {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin-bottom: 0;\n}\n#electricnow-dashboard-embed .usage-stat {\n  border: 1px solid rgba(104, 183, 255, 0.18);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.52);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .usage-stat span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .usage-stat strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 32px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .usage-stat em {\n  display: block;\n  margin-top: 5px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-mix {\n  display: grid;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n#electricnow-dashboard-embed .platform-total {\n  border: 1px solid rgba(104, 183, 255, 0.22);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));\n  padding: 14px;\n}\n#electricnow-dashboard-embed .platform-total span,\n#electricnow-dashboard-embed .coming-platforms span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .platform-total strong {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  font-size: 36px;\n  line-height: 0.95;\n  letter-spacing: 0.04em;\n}\n#electricnow-dashboard-embed .platform-total em,\n#electricnow-dashboard-embed .platform-share-card span,\n#electricnow-dashboard-embed .platform-share-card p,\n#electricnow-dashboard-embed .platform-note {\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-share-list {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .section-usage-list {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 12px;\n}\n#electricnow-dashboard-embed .section-usage-card {\n  min-width: 0;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.62);\n  padding: 14px;\n}\n#electricnow-dashboard-embed .section-usage-card header {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .section-usage-card span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .section-usage-card strong,\n#electricnow-dashboard-embed .section-usage-card b {\n  display: block;\n  margin-top: 6px;\n  font-family: var(--font-display);\n  line-height: 0.98;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .section-usage-card strong {\n  font-size: 28px;\n}\n#electricnow-dashboard-embed .section-usage-card b {\n  color: var(--good);\n  font-size: 18px;\n  text-align: left;\n  white-space: normal;\n}\n#electricnow-dashboard-embed .section-metrics {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px;\n  margin-top: 12px;\n}\n#electricnow-dashboard-embed .section-metrics em {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 999px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n  padding: 5px 8px;\n}\n#electricnow-dashboard-embed .section-usage-card p {\n  margin: 12px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .platform-share-card {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.52);\n  padding: 12px;\n}\n#electricnow-dashboard-embed .platform-share-card.is-untracked {\n  border-style: dashed;\n  background: rgba(255, 199, 95, 0.08);\n}\n#electricnow-dashboard-embed .platform-share-card header {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  align-items: start;\n}\n#electricnow-dashboard-embed .platform-share-card strong,\n#electricnow-dashboard-embed .platform-share-card b {\n  color: var(--text) !important;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .platform-share-card strong {\n  display: block;\n}\n#electricnow-dashboard-embed .platform-share-card b {\n  font-family: var(--font-display);\n  font-size: 24px;\n  line-height: 1;\n}\n#electricnow-dashboard-embed .platform-share-card.is-untracked b {\n  color: var(--warn) !important;\n}\n#electricnow-dashboard-embed .share-track {\n  height: 9px;\n  margin-top: 10px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .share-fill {\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--primary), var(--primary-2));\n}\n#electricnow-dashboard-embed .platform-share-card p {\n  margin: 8px 0 0;\n}\n#electricnow-dashboard-embed .compact-card {\n  padding: 10px;\n}\n#electricnow-dashboard-embed .compact-card header {\n  align-items: center;\n}\n#electricnow-dashboard-embed .compact-card b {\n  font-size: 20px;\n}\n#electricnow-dashboard-embed .coming-platforms {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  border-top: 1px solid var(--border);\n  padding-top: 12px;\n}\n#electricnow-dashboard-embed .coming-platforms span {\n  margin-right: 4px;\n}\n#electricnow-dashboard-embed .coming-platforms em {\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--muted);\n  padding: 4px 9px;\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .platform-note {\n  margin: 0 0 16px;\n}\n#electricnow-dashboard-embed .bar-list {\n  display: grid;\n  gap: 13px;\n}\n#electricnow-dashboard-embed .bar-row {\n  display: grid;\n  gap: 7px;\n}\n#electricnow-dashboard-embed .bar-row header {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n}\n#electricnow-dashboard-embed .bar-row span {\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed .bar-track {\n  height: 9px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  overflow: hidden;\n}\n#electricnow-dashboard-embed .bar-fill {\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, var(--primary), var(--primary-2));\n}\n#electricnow-dashboard-embed .table-wrap {\n  overflow-x: auto;\n  max-width: 100%;\n}\n#electricnow-dashboard-embed table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 520px;\n}\n#electricnow-dashboard-embed .title-table table {\n  min-width: 720px;\n}\n#electricnow-dashboard-embed th,\n#electricnow-dashboard-embed td {\n  border-bottom: 1px solid var(--border);\n  padding: 10px 8px;\n  text-align: left;\n  vertical-align: top;\n}\n#electricnow-dashboard-embed td {\n  color: var(--muted);\n  font-size: 13px;\n}\n#electricnow-dashboard-embed td strong {\n  color: var(--text);\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .gap-list {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding-left: 18px;\n}\n#electricnow-dashboard-embed :focus-visible {\n  outline: 2px solid var(--primary-2);\n  outline-offset: 3px;\n}\n@media (max-width: 1180px) {\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto 1fr;\n  }\n#electricnow-dashboard-embed .sidebar {\n    position: static;\n    height: auto;\n    grid-row: auto;\n  }\n#electricnow-dashboard-embed .side-nav {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n#electricnow-dashboard-embed .source-card {\n    margin-top: 0;\n  }\n#electricnow-dashboard-embed .kpi-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n#electricnow-dashboard-embed .section-usage-list {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n\n}\n@media (max-width: 820px) {\n#electricnow-dashboard-embed.app-shell, #electricnow-dashboard-embed .app-shell {\n    overflow-x: hidden;\n  }\n#electricnow-dashboard-embed .sidebar,\n#electricnow-dashboard-embed .topbar,\n#electricnow-dashboard-embed .main {\n    min-width: 0;\n    width: 100%;\n  }\n#electricnow-dashboard-embed .topbar,\n#electricnow-dashboard-embed .hero-panel,\n#electricnow-dashboard-embed .visit-strip,\n#electricnow-dashboard-embed .plain-panel {\n    grid-template-columns: 1fr;\n  }\n#electricnow-dashboard-embed .plain-panel.is-visible {\n    margin: 18px 0 22px;\n    border-color: rgba(104, 183, 255, 0.62);\n    background:\n      linear-gradient(135deg, rgba(47, 129, 215, 0.22), rgba(10, 21, 36, 0.96) 48%),\n      #0a1524 !important;\n    box-shadow: 0 0 0 1px rgba(104, 183, 255, 0.16), 0 18px 48px rgba(0, 0, 0, 0.28);\n    scroll-margin-top: 14px;\n  }\n#electricnow-dashboard-embed .topbar {\n    align-items: stretch;\n  }\n#electricnow-dashboard-embed .topbar-actions {\n    justify-content: flex-start;\n  }\n#electricnow-dashboard-embed .kpi-group-header {\n    display: block;\n  }\n#electricnow-dashboard-embed .kpi-group-header > p {\n    margin-top: 8px;\n  }\n#electricnow-dashboard-embed .hero-meta {\n    justify-items: start;\n    text-align: left;\n  }\n#electricnow-dashboard-embed .main {\n    padding: 16px;\n  }\n#electricnow-dashboard-embed .kpi-grid,\n#electricnow-dashboard-embed .dashboard-grid,\n#electricnow-dashboard-embed .visit-card-grid,\n#electricnow-dashboard-embed .section-usage-list,\n#electricnow-dashboard-embed .side-nav {\n    grid-template-columns: 1fr;\n  }\n#electricnow-dashboard-embed .source-card {\n    max-width: 100%;\n  }\n#electricnow-dashboard-embed .span-4,\n#electricnow-dashboard-embed .span-6,\n#electricnow-dashboard-embed .span-8 {\n    grid-column: auto;\n  }\n\n\n}\n@media (max-width: 520px) {\n#electricnow-dashboard-embed .sidebar {\n    padding: 20px 16px;\n  }\n#electricnow-dashboard-embed .brand {\n    grid-template-columns: 48px minmax(0, 1fr);\n  }\n#electricnow-dashboard-embed .brand strong {\n    font-size: 23px;\n    letter-spacing: 0.18em;\n  }\n#electricnow-dashboard-embed .topbar-actions {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: stretch;\n  }\n#electricnow-dashboard-embed select,\n#electricnow-dashboard-embed .ghost-button {\n    width: 100%;\n    max-width: 100%;\n  }\n#electricnow-dashboard-embed .kpi-grid {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed /* ===== Google Ads section ===== */\n.google-ads-panel .panel-note {\n  margin-bottom: 14px;\n}\n#electricnow-dashboard-embed .google-ads-campaign {\n  margin-bottom: 16px;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  justify-content: space-between;\n  align-items: flex-start;\n  border: 1px solid rgba(104, 183, 255, 0.22);\n  border-radius: var(--radius-sm);\n  background: linear-gradient(135deg, rgba(47, 129, 215, 0.18), rgba(15, 33, 56, 0.45));\n  padding: 14px 16px;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card span {\n  display: block;\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .google-ads-campaign-card strong {\n  display: block;\n  margin-top: 4px;\n  font-family: var(--font-display);\n  font-size: 20px;\n  line-height: 1.1;\n  letter-spacing: 0.02em;\n  color: var(--text);\n}\n#electricnow-dashboard-embed .google-ads-campaign-card em {\n  display: block;\n  margin-top: 4px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n}\n#electricnow-dashboard-embed .google-ads-campaign-meta {\n  text-align: right;\n  min-width: 160px;\n}\n#electricnow-dashboard-embed .google-ads-kpis {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin-bottom: 22px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .google-ads-kpis {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n\n}\n@media (max-width: 560px) {\n#electricnow-dashboard-embed .google-ads-kpis {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed .google-ads-split {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .google-ads-split {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n#electricnow-dashboard-embed .google-ads-device-list,\n#electricnow-dashboard-embed .google-ads-action-list {\n  display: grid;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .google-ads-device-row,\n#electricnow-dashboard-embed .google-ads-action-row {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.62);\n  padding: 12px 14px;\n}\n#electricnow-dashboard-embed .google-ads-device-row header,\n#electricnow-dashboard-embed .google-ads-action-row header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 10px;\n}\n#electricnow-dashboard-embed .google-ads-device-row header span,\n#electricnow-dashboard-embed .google-ads-action-row header span {\n  color: var(--primary-2);\n  font-family: var(--font-display);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n#electricnow-dashboard-embed .google-ads-device-row header strong,\n#electricnow-dashboard-embed .google-ads-action-row header strong {\n  font-family: var(--font-display);\n  font-size: 18px;\n  letter-spacing: 0.02em;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-device-row .share-track {\n  margin: 8px 0 8px;\n}\n#electricnow-dashboard-embed .google-ads-device-metrics {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 14px;\n  color: var(--muted);\n  font-size: 12px;\n}\n#electricnow-dashboard-embed .google-ads-device-metrics em {\n  font-style: normal;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-action-row em {\n  display: block;\n  margin-top: 6px;\n  color: var(--muted);\n  font-size: 12px;\n  font-style: normal;\n  font-variant-numeric: tabular-nums;\n}\n#electricnow-dashboard-embed .google-ads-context {\n  margin-top: 6px;\n  padding: 12px 14px;\n  border-left: 3px solid var(--warn);\n  background: rgba(255, 200, 87, 0.06);\n  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;\n  color: var(--text);\n}\n#electricnow-dashboard-embed .dotstudios-ads-panel {\n  border-color: rgba(104, 183, 255, 0.22);\n}\n#electricnow-dashboard-embed .dotstudios-ads-kpis {\n  margin: 16px 0 18px;\n}\n#electricnow-dashboard-embed .dotstudios-ads-caveats {\n  display: grid;\n  gap: 8px;\n  margin: 16px 0 0;\n  padding: 14px 16px 14px 30px;\n  border: 1px solid rgba(255, 200, 87, 0.22);\n  border-radius: var(--radius-sm);\n  background: rgba(255, 200, 87, 0.07);\n  color: var(--muted);\n  font-size: 12px;\n  line-height: 1.45;\n}\n#electricnow-dashboard-embed .dotstudios-ads-caveats li::marker {\n  color: var(--primary-2);\n}\n#electricnow-dashboard-embed /* US audience geography section */\n.us-geo-map-wrap {\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: rgba(15, 33, 56, 0.5);\n  padding: 16px;\n  margin: 14px 0;\n}\n#electricnow-dashboard-embed .us-geo-map svg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n#electricnow-dashboard-embed .us-geo-map-bg {\n  fill: rgba(10, 21, 36, 0.6);\n  stroke: var(--border);\n  stroke-width: 0.3;\n}\n#electricnow-dashboard-embed .us-geo-bubble circle {\n  transition: opacity 0.15s ease;\n}\n#electricnow-dashboard-embed .us-geo-bubble:hover circle {\n  opacity: 0.85;\n  stroke-width: 0.6;\n}\n#electricnow-dashboard-embed .us-geo-bubble-label {\n  fill: var(--text);\n  font-family: var(--font-ui);\n  font-size: 2px;\n  font-weight: 700;\n  pointer-events: none;\n}\n#electricnow-dashboard-embed .us-geo-map-caption {\n  color: var(--faint);\n  font-size: 12px;\n  margin: 10px 2px 0;\n}\n#electricnow-dashboard-embed .us-geo-tables {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n@media (max-width: 900px) {\n#electricnow-dashboard-embed .us-geo-tables {\n    grid-template-columns: 1fr;\n  }\n\n\n}\n\n";
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
  "generatedAt": "2026-08-24 14:50 PDT",
  "property": "properties/497892271",
  "sourceLabel": "Internal GA4 pull, property 497892271, plus labeled connector/manual sources",
  "periods": {
    "launchBaseline": {
      "label": "Launch baseline",
      "range": "Apr 13-Apr 19, 2026",
      "start": "2026-04-13",
      "end": "2026-04-19"
    },
    "previousWeek": {
      "label": "Previous 7 complete days",
      "range": "Aug 10-Aug 16, 2026",
      "start": "2026-08-10",
      "end": "2026-08-16"
    },
    "baseline": {
      "label": "Previous 7 complete days",
      "range": "Aug 3-Aug 9, 2026",
      "start": "2026-08-03",
      "end": "2026-08-09"
    },
    "currentWeek": {
      "label": "Latest 7 complete days",
      "range": "Aug 17-Aug 23, 2026",
      "start": "2026-08-17",
      "end": "2026-08-23"
    },
    "weekToDate": {
      "label": "Latest 7 complete days",
      "range": "Aug 17-Aug 23, 2026",
      "start": "2026-08-17",
      "end": "2026-08-23"
    },
    "current": {
      "label": "Latest 7 complete days",
      "range": "Aug 17-Aug 23, 2026",
      "start": "2026-08-17",
      "end": "2026-08-23"
    },
    "previous": {
      "label": "Previous 7 complete days",
      "range": "Aug 10-Aug 16, 2026",
      "start": "2026-08-10",
      "end": "2026-08-16"
    },
    "rolling28Current": {
      "label": "Latest rolling 28 complete days",
      "range": "Jul 27-Aug 23, 2026",
      "start": "2026-07-27",
      "end": "2026-08-23"
    },
    "rolling28Previous": {
      "label": "Previous rolling 28 days",
      "range": "Jun 29-Jul 26, 2026",
      "start": "2026-06-29",
      "end": "2026-07-26"
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
      "activeUsers": 4824,
      "newUsers": 1782,
      "sessions": 11803,
      "engagedSessions": 9515,
      "engagementRate": 80.61509785647716,
      "screenPageViews": 47247,
      "eventCount": 1078185,
      "userEngagementDuration": 21375072,
      "totalEngagementHours": 5937.52,
      "avgEngagedMinutesPerUser": 73.8497512437811,
      "avgEngagedMinutesPerSession": 30.18310599000254
    },
    "baseline": {
      "activeUsers": 5172,
      "newUsers": 2077,
      "sessions": 13191,
      "engagedSessions": 10499,
      "engagementRate": 79.59214616026078,
      "screenPageViews": 45292,
      "eventCount": 1074859,
      "userEngagementDuration": 21991691,
      "totalEngagementHours": 6108.803055555555,
      "avgEngagedMinutesPerUser": 70.86778486723382,
      "avgEngagedMinutesPerSession": 27.786231774189474
    },
    "currentWeek": {
      "activeUsers": 4708,
      "newUsers": 1608,
      "sessions": 11138,
      "engagedSessions": 8122,
      "engagementRate": 72.9215298976477,
      "screenPageViews": 59032,
      "eventCount": 1076141,
      "userEngagementDuration": 22978369,
      "totalEngagementHours": 6382.880277777777,
      "avgEngagedMinutesPerUser": 81.34511823845936,
      "avgEngagedMinutesPerSession": 34.38434338899862
    },
    "weekToDate": {
      "activeUsers": 4708,
      "newUsers": 1608,
      "sessions": 11138,
      "engagedSessions": 8122,
      "engagementRate": 72.9215298976477,
      "screenPageViews": 59032,
      "eventCount": 1076141,
      "userEngagementDuration": 22978369,
      "totalEngagementHours": 6382.880277777777,
      "avgEngagedMinutesPerUser": 81.34511823845936,
      "avgEngagedMinutesPerSession": 34.38434338899862
    },
    "current": {
      "activeUsers": 4708,
      "newUsers": 1608,
      "sessions": 11138,
      "engagedSessions": 8122,
      "engagementRate": 72.9215298976477,
      "screenPageViews": 59032,
      "eventCount": 1076141,
      "userEngagementDuration": 22978369,
      "totalEngagementHours": 6382.880277777777,
      "avgEngagedMinutesPerUser": 81.34511823845936,
      "avgEngagedMinutesPerSession": 34.38434338899862
    },
    "previous": {
      "activeUsers": 4824,
      "newUsers": 1782,
      "sessions": 11803,
      "engagedSessions": 9515,
      "engagementRate": 80.61509785647716,
      "screenPageViews": 47247,
      "eventCount": 1078185,
      "userEngagementDuration": 21375072,
      "totalEngagementHours": 5937.52,
      "avgEngagedMinutesPerUser": 73.8497512437811,
      "avgEngagedMinutesPerSession": 30.18310599000254
    }
  },
  "scorecards": [
    {
      "key": "platformActiveUsers",
      "label": "Platform active users",
      "baseline": 5172,
      "launchBaseline": 8709,
      "previousWeek": 4824,
      "current": 4708,
      "deltaPct": -2.404643449419569,
      "deltaVsPreviousPct": -6.767208043310132,
      "deltaVsLaunchPct": -44.631989895510394,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 active users on measured ElectricNOW platform surfaces; landing-page acquisition paths are not counted as platform audience.",
      "period": "Aug 17-Aug 23, 2026",
      "comparisonPeriod": "Aug 3-Aug 9, 2026",
      "currentWeek": 4708,
      "previous": 4824,
      "changePct": -2.404643449419569,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271"
    },
    {
      "key": "newUsers",
      "label": "New users",
      "baseline": 2077,
      "launchBaseline": null,
      "previousWeek": 1782,
      "current": 1608,
      "deltaPct": -9.764309764309765,
      "deltaVsPreviousPct": -14.25132402503611,
      "deltaVsLaunchPct": null,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 new users on measured ElectricNOW platform surfaces.",
      "period": "Aug 17-Aug 23, 2026",
      "comparisonPeriod": "Aug 3-Aug 9, 2026",
      "currentWeek": 1608,
      "previous": 1782,
      "changePct": -9.764309764309765,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271"
    },
    {
      "key": "platformSessions",
      "label": "Platform sessions",
      "baseline": 13191,
      "launchBaseline": 13316,
      "previousWeek": 11803,
      "current": 11138,
      "deltaPct": -5.6341608065746,
      "deltaVsPreviousPct": -10.12811765597756,
      "deltaVsLaunchPct": -10.971763292279963,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 sessions on measured ElectricNOW platform surfaces; landing pages remain acquisition-only.",
      "period": "Aug 17-Aug 23, 2026",
      "comparisonPeriod": "Aug 3-Aug 9, 2026",
      "currentWeek": 11138,
      "previous": 11803,
      "changePct": -5.6341608065746,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271"
    },
    {
      "key": "engagedSessions",
      "label": "Engaged sessions",
      "baseline": 10499,
      "launchBaseline": null,
      "previousWeek": 9515,
      "current": 8122,
      "deltaPct": -14.64004203888597,
      "deltaVsPreviousPct": -9.305648156967331,
      "deltaVsLaunchPct": null,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 engaged sessions.",
      "period": "Aug 17-Aug 23, 2026",
      "comparisonPeriod": "Aug 3-Aug 9, 2026",
      "currentWeek": 8122,
      "previous": 9515,
      "changePct": -14.64004203888597,
      "direction": "down",
      "sourceLabel": "Internal GA4 pull, property 497892271"
    },
    {
      "key": "engagementRate",
      "label": "Engagement rate",
      "baseline": 0.7979958534899793,
      "launchBaseline": null,
      "previousWeek": 0.7979958534899793,
      "current": 0.7955457919854556,
      "deltaPct": -0.24500615045236485,
      "deltaVsPreviousPct": -0.24500615045236485,
      "deltaVsLaunchPct": null,
      "deltaType": "percentage_points",
      "format": "percent",
      "context": "Internal GA4 pull, property 497892271; landing-page acquisition paths excluded from platform audience where applicable.",
      "period": "Aug 3-Aug 9, 2026",
      "comparisonPeriod": "Jul 27-Aug 2, 2026"
    },
    {
      "key": "screenPageViews",
      "label": "Screen/page views",
      "baseline": 54050,
      "launchBaseline": null,
      "previousWeek": 54050,
      "current": 45285,
      "deltaPct": -16.216466234967623,
      "deltaVsPreviousPct": -16.216466234967623,
      "deltaVsLaunchPct": null,
      "deltaType": "percent",
      "format": "number",
      "context": "Internal GA4 pull, property 497892271; landing-page acquisition paths excluded from platform audience where applicable.",
      "period": "Aug 3-Aug 9, 2026",
      "comparisonPeriod": "Jul 27-Aug 2, 2026"
    },
    {
      "key": "eventCount",
      "label": "Events",
      "baseline": 1074859,
      "launchBaseline": null,
      "previousWeek": 1078185,
      "current": 1076141,
      "deltaPct": -0.18957785537732394,
      "deltaVsPreviousPct": 0.28673528341856935,
      "deltaVsLaunchPct": null,
      "deltaType": "percent",
      "format": "number",
      "context": "GA4 event count across measured app/platform surfaces.",
      "period": "Aug 17-Aug 23, 2026",
      "comparisonPeriod": "Aug 3-Aug 9, 2026",
      "currentWeek": 1076141,
      "previous": 1078185,
      "changePct": -0.18957785537732394,
      "direction": "flat",
      "sourceLabel": "Internal GA4 pull, property 497892271"
    }
  ],
  "trend": {
    "period": "Aug 17-Aug 23, 2026",
    "previousPeriod": "Aug 10-Aug 16, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "activeUsers": 935,
        "newUsers": 226,
        "sessions": 1651,
        "engagedSessions": 1355,
        "engagementRate": 82.07147183525136,
        "screenPageViews": 8598,
        "eventCount": 139352,
        "userEngagementDuration": 2783276,
        "totalEngagementHours": 773.1322222222223,
        "date": "2026-08-17",
        "label": "Aug 17"
      },
      {
        "activeUsers": 895,
        "newUsers": 211,
        "sessions": 1611,
        "engagedSessions": 1334,
        "engagementRate": 82.80571073867164,
        "screenPageViews": 9744,
        "eventCount": 135794,
        "userEngagementDuration": 3062917,
        "totalEngagementHours": 850.8102777777777,
        "date": "2026-08-18",
        "label": "Aug 18"
      },
      {
        "activeUsers": 935,
        "newUsers": 233,
        "sessions": 1574,
        "engagedSessions": 1304,
        "engagementRate": 82.84625158831004,
        "screenPageViews": 8230,
        "eventCount": 131383,
        "userEngagementDuration": 2767268,
        "totalEngagementHours": 768.6855555555555,
        "date": "2026-08-19",
        "label": "Aug 19"
      },
      {
        "activeUsers": 892,
        "newUsers": 195,
        "sessions": 1519,
        "engagedSessions": 1276,
        "engagementRate": 84.00263331138908,
        "screenPageViews": 7760,
        "eventCount": 129131,
        "userEngagementDuration": 3017562,
        "totalEngagementHours": 838.2116666666667,
        "date": "2026-08-20",
        "label": "Aug 20"
      },
      {
        "activeUsers": 896,
        "newUsers": 235,
        "sessions": 1505,
        "engagedSessions": 1221,
        "engagementRate": 81.12956810631229,
        "screenPageViews": 7809,
        "eventCount": 132849,
        "userEngagementDuration": 3006562,
        "totalEngagementHours": 835.1561111111112,
        "date": "2026-08-21",
        "label": "Aug 21"
      },
      {
        "activeUsers": 908,
        "newUsers": 246,
        "sessions": 1542,
        "engagedSessions": 1232,
        "engagementRate": 79.89623865110246,
        "screenPageViews": 7979,
        "eventCount": 131722,
        "userEngagementDuration": 3030293,
        "totalEngagementHours": 841.7480555555555,
        "date": "2026-08-22",
        "label": "Aug 22"
      },
      {
        "activeUsers": 1240,
        "newUsers": 262,
        "sessions": 2247,
        "engagedSessions": 504,
        "engagementRate": 22.429906542056074,
        "screenPageViews": 8912,
        "eventCount": 275916,
        "userEngagementDuration": 5310491,
        "totalEngagementHours": 1475.1363888888889,
        "date": "2026-08-23",
        "label": "Aug 23"
      }
    ],
    "previousRows": [
      {
        "activeUsers": 1091,
        "newUsers": 329,
        "sessions": 1939,
        "engagedSessions": 1543,
        "engagementRate": 79.57710159876224,
        "screenPageViews": 6945,
        "eventCount": 159264,
        "userEngagementDuration": 2954567,
        "totalEngagementHours": 820.7130555555556,
        "date": "2026-08-10",
        "label": "Aug 10"
      },
      {
        "activeUsers": 936,
        "newUsers": 237,
        "sessions": 1649,
        "engagedSessions": 1309,
        "engagementRate": 79.38144329896907,
        "screenPageViews": 5727,
        "eventCount": 153520,
        "userEngagementDuration": 3059200,
        "totalEngagementHours": 849.7777777777778,
        "date": "2026-08-11",
        "label": "Aug 11"
      },
      {
        "activeUsers": 928,
        "newUsers": 195,
        "sessions": 1683,
        "engagedSessions": 1363,
        "engagementRate": 80.9863339275104,
        "screenPageViews": 6151,
        "eventCount": 147891,
        "userEngagementDuration": 2781220,
        "totalEngagementHours": 772.5611111111111,
        "date": "2026-08-12",
        "label": "Aug 12"
      },
      {
        "activeUsers": 897,
        "newUsers": 215,
        "sessions": 1609,
        "engagedSessions": 1292,
        "engagementRate": 80.2983219390926,
        "screenPageViews": 6024,
        "eventCount": 153551,
        "userEngagementDuration": 2739038,
        "totalEngagementHours": 760.8438888888888,
        "date": "2026-08-13",
        "label": "Aug 13"
      },
      {
        "activeUsers": 965,
        "newUsers": 257,
        "sessions": 1716,
        "engagedSessions": 1366,
        "engagementRate": 79.6037296037296,
        "screenPageViews": 6576,
        "eventCount": 151107,
        "userEngagementDuration": 3219119,
        "totalEngagementHours": 894.1997222222222,
        "date": "2026-08-14",
        "label": "Aug 14"
      },
      {
        "activeUsers": 962,
        "newUsers": 283,
        "sessions": 1623,
        "engagedSessions": 1280,
        "engagementRate": 78.86629698089956,
        "screenPageViews": 7225,
        "eventCount": 156225,
        "userEngagementDuration": 3101483,
        "totalEngagementHours": 861.5230555555555,
        "date": "2026-08-15",
        "label": "Aug 15"
      },
      {
        "activeUsers": 985,
        "newUsers": 266,
        "sessions": 1688,
        "engagedSessions": 1393,
        "engagementRate": 82.52369668246445,
        "screenPageViews": 8599,
        "eventCount": 156627,
        "userEngagementDuration": 3520445,
        "totalEngagementHours": 977.9013888888888,
        "date": "2026-08-16",
        "label": "Aug 16"
      }
    ],
    "note": "GA4 property 497892271 only. Landing-page traffic is treated as acquisition only, not platform audience."
  },
  "eventCards": [
    {
      "eventName": "user_engagement",
      "eventCount": 365269,
      "activeUsers": 4151,
      "sessions": 9609,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "app_time",
      "eventCount": 336519,
      "activeUsers": 1095,
      "sessions": 3749,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "screen_view",
      "eventCount": 48019,
      "activeUsers": 3964,
      "sessions": 8611,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_progress",
      "eventCount": 29656,
      "activeUsers": 749,
      "sessions": 3265,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_request",
      "eventCount": 27179,
      "activeUsers": 162,
      "sessions": 1106,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_impression",
      "eventCount": 24190,
      "activeUsers": 83,
      "sessions": 774,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_started",
      "eventCount": 22688,
      "activeUsers": 1,
      "sessions": 669,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_loaded",
      "eventCount": 22676,
      "activeUsers": 1,
      "sessions": 668,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "play",
      "eventCount": 20623,
      "activeUsers": 357,
      "sessions": 3063,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_complete",
      "eventCount": 20558,
      "activeUsers": 2,
      "sessions": 639,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_start",
      "eventCount": 16172,
      "activeUsers": 1456,
      "sessions": 5577,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "app_close",
      "eventCount": 15050,
      "activeUsers": 2389,
      "sessions": 4773,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "app_open",
      "eventCount": 13875,
      "activeUsers": 2918,
      "sessions": 6383,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_error",
      "eventCount": 11011,
      "activeUsers": 257,
      "sessions": 1048,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "page_view",
      "eventCount": 10989,
      "activeUsers": 1836,
      "sessions": 5001,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "session_start",
      "eventCount": 10455,
      "activeUsers": 4491,
      "sessions": 10267,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "seek",
      "eventCount": 9983,
      "activeUsers": 210,
      "sessions": 1079,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_play",
      "eventCount": 8439,
      "activeUsers": 220,
      "sessions": 655,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "pause",
      "eventCount": 8316,
      "activeUsers": 215,
      "sessions": 1657,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "idle",
      "eventCount": 7859,
      "activeUsers": 221,
      "sessions": 657,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ready",
      "eventCount": 7058,
      "activeUsers": 356,
      "sessions": 2998,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "resume_after_seek",
      "eventCount": 6518,
      "activeUsers": 211,
      "sessions": 1041,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_complete",
      "eventCount": 4988,
      "activeUsers": 472,
      "sessions": 1685,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "vmap_ad_request",
      "eventCount": 4427,
      "activeUsers": 654,
      "sessions": 1425,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "vmap_ad_loaded",
      "eventCount": 3676,
      "activeUsers": 486,
      "sessions": 1080,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "resize",
      "eventCount": 2697,
      "activeUsers": 66,
      "sessions": 136,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "search",
      "eventCount": 2281,
      "activeUsers": 305,
      "sessions": 455,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "application_update",
      "eventCount": 2258,
      "activeUsers": 1834,
      "sessions": 2259,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "end_playback",
      "eventCount": 1664,
      "activeUsers": 61,
      "sessions": 923,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "vmap_ad_error",
      "eventCount": 1613,
      "activeUsers": 502,
      "sessions": 1003,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "application_install",
      "eventCount": 1519,
      "activeUsers": 1376,
      "sessions": 1514,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "first_open",
      "eventCount": 978,
      "activeUsers": 975,
      "sessions": 976,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "first_visit",
      "eventCount": 727,
      "activeUsers": 629,
      "sessions": 726,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "resume",
      "eventCount": 668,
      "activeUsers": 33,
      "sessions": 76,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "scroll",
      "eventCount": 655,
      "activeUsers": 262,
      "sessions": 458,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ad_error",
      "eventCount": 650,
      "activeUsers": 33,
      "sessions": 73,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "app_update",
      "eventCount": 640,
      "activeUsers": 616,
      "sessions": 615,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ad_request",
      "eventCount": 495,
      "activeUsers": 8,
      "sessions": 15,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ad_complete",
      "eventCount": 478,
      "activeUsers": 13,
      "sessions": 18,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "os_update",
      "eventCount": 455,
      "activeUsers": 427,
      "sessions": 438,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "rewind",
      "eventCount": 430,
      "activeUsers": 1,
      "sessions": 86,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "stop",
      "eventCount": 406,
      "activeUsers": 78,
      "sessions": 168,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "playback_error",
      "eventCount": 279,
      "activeUsers": 50,
      "sessions": 59,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "app_remove",
      "eventCount": 223,
      "activeUsers": 95,
      "sessions": 220,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "deep_link_open",
      "eventCount": 185,
      "activeUsers": 133,
      "sessions": 159,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "(other)",
      "eventCount": 150,
      "activeUsers": 1,
      "sessions": 89,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "replay",
      "eventCount": 125,
      "activeUsers": 1,
      "sessions": 26,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "app_exception",
      "eventCount": 100,
      "activeUsers": 63,
      "sessions": 73,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "form_start",
      "eventCount": 78,
      "activeUsers": 45,
      "sessions": 60,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "video_error",
      "eventCount": 44,
      "activeUsers": 6,
      "sessions": 7,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "view_search_results",
      "eventCount": 33,
      "activeUsers": 19,
      "sessions": 24,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "app_clear_data",
      "eventCount": 24,
      "activeUsers": 19,
      "sessions": 24,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "closed_caption",
      "eventCount": 24,
      "activeUsers": 14,
      "sessions": 19,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "chromecast_started",
      "eventCount": 16,
      "activeUsers": 5,
      "sessions": 7,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "chromecast_ended",
      "eventCount": 14,
      "activeUsers": 5,
      "sessions": 6,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "in_app_purchase",
      "eventCount": 12,
      "activeUsers": 10,
      "sessions": 11,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_progress",
      "eventCount": 9,
      "activeUsers": 1,
      "sessions": 1,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "airplay_ended",
      "eventCount": 7,
      "activeUsers": 6,
      "sessions": 7,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "airplay_started",
      "eventCount": 7,
      "activeUsers": 6,
      "sessions": 7,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "click",
      "eventCount": 7,
      "activeUsers": 4,
      "sessions": 6,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "ads_click",
      "eventCount": 2,
      "activeUsers": 1,
      "sessions": 1,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "setup_error",
      "eventCount": 1,
      "activeUsers": 0,
      "sessions": 1,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "",
      "eventCount": 0,
      "activeUsers": 44,
      "sessions": 47,
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "eventName": "(not set)",
      "eventCount": 0,
      "activeUsers": 297,
      "sessions": 296,
      "period": "Aug 17-Aug 23, 2026",
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
      "activeUsers": 2067,
      "sessions": 6459,
      "screenPageViews": 35457,
      "eventCount": 0,
      "period": "Aug 3-Aug 9, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "platform": "iOS",
      "activeUsers": 1719,
      "sessions": 3329,
      "screenPageViews": 2347,
      "eventCount": 0,
      "period": "Aug 3-Aug 9, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    {
      "platform": "Android",
      "activeUsers": 1391,
      "sessions": 3160,
      "screenPageViews": 7481,
      "eventCount": 0,
      "period": "Aug 3-Aug 9, 2026",
      "source": "Internal GA4 pull, property 497892271"
    }
  ],
  "platformMix": {
    "period": "Jul 27-Aug 2, 2026",
    "metric": "Active users",
    "totalViewers": 5702,
    "note": "Viewer share mostly uses GA4 active users grouped by stream and device data where available. Apple TV is now shown as a DotStudios manual video-views breakout for the current uploaded period, so it is a viewing signal and not directly comparable to GA4 active-user rows. People who use more than one platform may appear in more than one bucket.",
    "groups": [
      {
        "platform": "Web",
        "category": "Web",
        "tracked": true,
        "activeUsers": 961,
        "sharePct": 16.9,
        "sessions": 2053,
        "engagedSessions": 1623,
        "detail": "Browser and web playback from the electricnow-web GA4 stream."
      },
      {
        "platform": "Apple app stream",
        "category": "App",
        "tracked": true,
        "activeUsers": 1603,
        "sharePct": 28.1,
        "sessions": 3242,
        "engagedSessions": 2782,
        "detail": "iPhone and iPad app activity; Apple TV may also be included here until it is tagged separately."
      },
      {
        "platform": "Android mobile app",
        "category": "App",
        "tracked": true,
        "activeUsers": 1172,
        "sharePct": 20.6,
        "sessions": 2746,
        "engagedSessions": 2191,
        "detail": "Android phone/tablet activity from the ElectricNOW Android GA4 stream."
      },
      {
        "platform": "Roku",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 1426,
        "sharePct": 25,
        "sessions": 4757,
        "engagedSessions": 3896,
        "detail": "Roku activity from the electricnow-roku GA4 stream."
      },
      {
        "platform": "Amazon / Fire TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 219,
        "sharePct": 3.8,
        "sessions": 545,
        "engagedSessions": 503,
        "detail": "Likely Fire TV activity inferred from Amazon AFT smart-TV model codes."
      },
      {
        "platform": "Android TV / Google TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": 321,
        "sharePct": 5.6,
        "sessions": 685,
        "engagedSessions": 655,
        "detail": "Android TV / Google TV stream activity, excluding likely Fire TV devices where GA4 exposes Amazon AFT models."
      },
      {
        "platform": "Apple TV",
        "category": "Connected TV",
        "tracked": true,
        "activeUsers": null,
        "sharePct": 1.4,
        "sessions": null,
        "engagedSessions": null,
        "detail": "DotStudios video-views export shows 311 Apple TV views for Aug 10-Aug 16, 2026, equal to 1.4% of 21,555 DotStudios video views. This is not a GA4 active-user count.",
        "views": 311,
        "metricLabel": "views",
        "sourceLabel": "DotStudios",
        "sourcePeriod": "Aug 10-Aug 16, 2026"
      }
    ],
    "comingSoon": [
      "Samsung",
      "LG",
      "Vizio"
    ]
  },
  "topPages": {
    "period": "Aug 17-Aug 23, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "unifiedPageScreen": "PDP",
        "screenPageViews": 11936,
        "activeUsers": 2055,
        "sessions": 5022,
        "eventCount": 19428,
        "userEngagementDuration": 337520,
        "totalEngagementHours": 93.75555555555556
      },
      {
        "unifiedPageScreen": "Splash",
        "screenPageViews": 8758,
        "activeUsers": 3877,
        "sessions": 8051,
        "eventCount": 17027,
        "userEngagementDuration": 29322,
        "totalEngagementHours": 8.145
      },
      {
        "unifiedPageScreen": "On Demand",
        "screenPageViews": 7620,
        "activeUsers": 2133,
        "sessions": 4039,
        "eventCount": 14926,
        "userEngagementDuration": 147018,
        "totalEngagementHours": 40.83833333333333
      },
      {
        "unifiedPageScreen": "Player",
        "screenPageViews": 5344,
        "activeUsers": 998,
        "sessions": 3495,
        "eventCount": 58956,
        "userEngagementDuration": 6296538,
        "totalEngagementHours": 1749.0383333333334
      },
      {
        "unifiedPageScreen": "Intro",
        "screenPageViews": 4651,
        "activeUsers": 2489,
        "sessions": 4258,
        "eventCount": 12787,
        "userEngagementDuration": 52857,
        "totalEngagementHours": 14.6825
      },
      {
        "unifiedPageScreen": "(not set)",
        "screenPageViews": 3483,
        "activeUsers": 3533,
        "sessions": 7968,
        "eventCount": 630548,
        "userEngagementDuration": 7442457,
        "totalEngagementHours": 2067.349166666667
      },
      {
        "unifiedPageScreen": "Home Page",
        "screenPageViews": 2505,
        "activeUsers": 984,
        "sessions": 2398,
        "eventCount": 2505,
        "userEngagementDuration": 0,
        "totalEngagementHours": 0.0
      },
      {
        "unifiedPageScreen": "Live",
        "screenPageViews": 2137,
        "activeUsers": 637,
        "sessions": 1922,
        "eventCount": 14253,
        "userEngagementDuration": 4288159,
        "totalEngagementHours": 1191.1552777777779
      },
      {
        "unifiedPageScreen": "/",
        "screenPageViews": 1900,
        "activeUsers": 197,
        "sessions": 395,
        "eventCount": 3897,
        "userEngagementDuration": 11873,
        "totalEngagementHours": 3.2980555555555555
      },
      {
        "unifiedPageScreen": "Search",
        "screenPageViews": 1100,
        "activeUsers": 348,
        "sessions": 555,
        "eventCount": 2805,
        "userEngagementDuration": 11990,
        "totalEngagementHours": 3.3305555555555557
      },
      {
        "unifiedPageScreen": "Category",
        "screenPageViews": 987,
        "activeUsers": 297,
        "sessions": 426,
        "eventCount": 1476,
        "userEngagementDuration": 13659,
        "totalEngagementHours": 3.7941666666666665
      },
      {
        "unifiedPageScreen": "/live-tv",
        "screenPageViews": 874,
        "activeUsers": 100,
        "sessions": 426,
        "eventCount": 12598,
        "userEngagementDuration": 203556,
        "totalEngagementHours": 56.54333333333334
      },
      {
        "unifiedPageScreen": "Settings",
        "screenPageViews": 688,
        "activeUsers": 266,
        "sessions": 343,
        "eventCount": 1288,
        "userEngagementDuration": 8934,
        "totalEngagementHours": 2.4816666666666665
      },
      {
        "unifiedPageScreen": "",
        "screenPageViews": 670,
        "activeUsers": 965,
        "sessions": 2030,
        "eventCount": 241655,
        "userEngagementDuration": 3022413,
        "totalEngagementHours": 839.5591666666667
      },
      {
        "unifiedPageScreen": "Mylist",
        "screenPageViews": 627,
        "activeUsers": 161,
        "sessions": 327,
        "eventCount": 875,
        "userEngagementDuration": 3421,
        "totalEngagementHours": 0.9502777777777778
      },
      {
        "unifiedPageScreen": "/landing",
        "screenPageViews": 615,
        "activeUsers": 234,
        "sessions": 496,
        "eventCount": 1840,
        "userEngagementDuration": 5794,
        "totalEngagementHours": 1.6094444444444445
      },
      {
        "unifiedPageScreen": "My List",
        "screenPageViews": 244,
        "activeUsers": 72,
        "sessions": 183,
        "eventCount": 244,
        "userEngagementDuration": 0,
        "totalEngagementHours": 0.0
      },
      {
        "unifiedPageScreen": "AboutUs",
        "screenPageViews": 229,
        "activeUsers": 58,
        "sessions": 107,
        "eventCount": 264,
        "userEngagementDuration": 569,
        "totalEngagementHours": 0.15805555555555556
      },
      {
        "unifiedPageScreen": "/english",
        "screenPageViews": 160,
        "activeUsers": 55,
        "sessions": 84,
        "eventCount": 268,
        "userEngagementDuration": 7210,
        "totalEngagementHours": 2.0027777777777778
      },
      {
        "unifiedPageScreen": "/?channel=the-ark-season-3",
        "screenPageViews": 147,
        "activeUsers": 43,
        "sessions": 72,
        "eventCount": 210,
        "userEngagementDuration": 3665,
        "totalEngagementHours": 1.0180555555555555
      },
      {
        "unifiedPageScreen": "ManageProfile",
        "screenPageViews": 142,
        "activeUsers": 98,
        "sessions": 100,
        "eventCount": 193,
        "userEngagementDuration": 1593,
        "totalEngagementHours": 0.4425
      },
      {
        "unifiedPageScreen": "Purchases",
        "screenPageViews": 134,
        "activeUsers": 50,
        "sessions": 89,
        "eventCount": 206,
        "userEngagementDuration": 826,
        "totalEngagementHours": 0.22944444444444445
      },
      {
        "unifiedPageScreen": "/my-lists/watchlist",
        "screenPageViews": 98,
        "activeUsers": 33,
        "sessions": 52,
        "eventCount": 139,
        "userEngagementDuration": 3577,
        "totalEngagementHours": 0.9936111111111111
      },
      {
        "unifiedPageScreen": "Continue Watching",
        "screenPageViews": 98,
        "activeUsers": 53,
        "sessions": 80,
        "eventCount": 134,
        "userEngagementDuration": 1000,
        "totalEngagementHours": 0.2777777777777778
      },
      {
        "unifiedPageScreen": "ConnectWithUs",
        "screenPageViews": 96,
        "activeUsers": 45,
        "sessions": 84,
        "eventCount": 126,
        "userEngagementDuration": 309,
        "totalEngagementHours": 0.08583333333333333
      },
      {
        "unifiedPageScreen": "ContinueWatching",
        "screenPageViews": 86,
        "activeUsers": 41,
        "sessions": 64,
        "eventCount": 121,
        "userEngagementDuration": 265,
        "totalEngagementHours": 0.07361111111111111
      },
      {
        "unifiedPageScreen": "PrivacyPolicy",
        "screenPageViews": 84,
        "activeUsers": 30,
        "sessions": 68,
        "eventCount": 87,
        "userEngagementDuration": 82,
        "totalEngagementHours": 0.02277777777777778
      },
      {
        "unifiedPageScreen": "Terms of Use",
        "screenPageViews": 78,
        "activeUsers": 31,
        "sessions": 66,
        "eventCount": 84,
        "userEngagementDuration": 111,
        "totalEngagementHours": 0.030833333333333334
      },
      {
        "unifiedPageScreen": "/profiles?after_selection=%2F",
        "screenPageViews": 75,
        "activeUsers": 49,
        "sessions": 68,
        "eventCount": 106,
        "userEngagementDuration": 223,
        "totalEngagementHours": 0.06194444444444445
      },
      {
        "unifiedPageScreen": "/watch/the-ark-season-3?_id=6a615fd0ebe94048aa33958a",
        "screenPageViews": 71,
        "activeUsers": 17,
        "sessions": 39,
        "eventCount": 381,
        "userEngagementDuration": 3572,
        "totalEngagementHours": 0.9922222222222222
      },
      {
        "unifiedPageScreen": "/?channel=the-librarians-the-next-chapter-season-2",
        "screenPageViews": 70,
        "activeUsers": 25,
        "sessions": 43,
        "eventCount": 93,
        "userEngagementDuration": 1586,
        "totalEngagementHours": 0.44055555555555553
      },
      {
        "unifiedPageScreen": "My Favorites",
        "screenPageViews": 67,
        "activeUsers": 22,
        "sessions": 36,
        "eventCount": 106,
        "userEngagementDuration": 315,
        "totalEngagementHours": 0.0875
      },
      {
        "unifiedPageScreen": "(other)",
        "screenPageViews": 58,
        "activeUsers": 1,
        "sessions": 97,
        "eventCount": 184,
        "userEngagementDuration": 0,
        "totalEngagementHours": 0.0
      },
      {
        "unifiedPageScreen": "/watch/the-ark-season-3?_id=6a615fd1ebe94048aa33958d",
        "screenPageViews": 43,
        "activeUsers": 19,
        "sessions": 31,
        "eventCount": 967,
        "userEngagementDuration": 51813,
        "totalEngagementHours": 14.3925
      },
      {
        "unifiedPageScreen": "/search",
        "screenPageViews": 36,
        "activeUsers": 20,
        "sessions": 22,
        "eventCount": 45,
        "userEngagementDuration": 318,
        "totalEngagementHours": 0.08833333333333333
      },
      {
        "unifiedPageScreen": "MyReactions",
        "screenPageViews": 34,
        "activeUsers": 22,
        "sessions": 27,
        "eventCount": 49,
        "userEngagementDuration": 140,
        "totalEngagementHours": 0.03888888888888889
      },
      {
        "unifiedPageScreen": "/search?q=The+ark",
        "screenPageViews": 32,
        "activeUsers": 3,
        "sessions": 13,
        "eventCount": 48,
        "userEngagementDuration": 120,
        "totalEngagementHours": 0.03333333333333333
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-season-2?_id=6a44602f6a334bc1bf816f2e",
        "screenPageViews": 32,
        "activeUsers": 16,
        "sessions": 26,
        "eventCount": 1814,
        "userEngagementDuration": 36523,
        "totalEngagementHours": 10.145277777777778
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-season-2?_id=6a44602e6a334bc1bf816f29",
        "screenPageViews": 31,
        "activeUsers": 14,
        "sessions": 24,
        "eventCount": 290,
        "userEngagementDuration": 5846,
        "totalEngagementHours": 1.623888888888889
      },
      {
        "unifiedPageScreen": "/watch/the-ark-season-3?_id=6a615fd0ebe94048aa33958c",
        "screenPageViews": 30,
        "activeUsers": 9,
        "sessions": 22,
        "eventCount": 322,
        "userEngagementDuration": 13005,
        "totalEngagementHours": 3.6125
      },
      {
        "unifiedPageScreen": "/live-tv/electric-now",
        "screenPageViews": 29,
        "activeUsers": 6,
        "sessions": 18,
        "eventCount": 786,
        "userEngagementDuration": 6856,
        "totalEngagementHours": 1.9044444444444444
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-season-2?_id=6a44602f6a334bc1bf816f2d",
        "screenPageViews": 29,
        "activeUsers": 19,
        "sessions": 27,
        "eventCount": 1800,
        "userEngagementDuration": 32125,
        "totalEngagementHours": 8.92361111111111
      },
      {
        "unifiedPageScreen": "/watch/leverage?_id=691279c97fadf6de6e00419a",
        "screenPageViews": 28,
        "activeUsers": 11,
        "sessions": 21,
        "eventCount": 874,
        "userEngagementDuration": 15603,
        "totalEngagementHours": 4.3341666666666665
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-season-2?_id=6a44602f6a334bc1bf816f2e?_id=6a44602f6a334bc1bf816f2e",
        "screenPageViews": 28,
        "activeUsers": 16,
        "sessions": 24,
        "eventCount": 28,
        "userEngagementDuration": 152,
        "totalEngagementHours": 0.042222222222222223
      },
      {
        "unifiedPageScreen": "/watch/leverage?_id=691279c97fadf6de6e00419a?_id=691279c97fadf6de6e00419a",
        "screenPageViews": 27,
        "activeUsers": 10,
        "sessions": 19,
        "eventCount": 30,
        "userEngagementDuration": 83,
        "totalEngagementHours": 0.023055555555555555
      },
      {
        "unifiedPageScreen": "/watch/the-ark-season-3?_id=6a615fd1ebe94048aa33958d?_id=6a615fd1ebe94048aa33958d",
        "screenPageViews": 27,
        "activeUsers": 19,
        "sessions": 24,
        "eventCount": 27,
        "userEngagementDuration": 648,
        "totalEngagementHours": 0.18
      },
      {
        "unifiedPageScreen": "/?channel=the-librarians-the-next-chapter-1",
        "screenPageViews": 26,
        "activeUsers": 15,
        "sessions": 20,
        "eventCount": 34,
        "userEngagementDuration": 649,
        "totalEngagementHours": 0.1802777777777778
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-season-2?_id=6a44602f6a334bc1bf816f2d?_id=6a44602f6a334bc1bf816f2d",
        "screenPageViews": 26,
        "activeUsers": 19,
        "sessions": 23,
        "eventCount": 26,
        "userEngagementDuration": 282,
        "totalEngagementHours": 0.07833333333333334
      },
      {
        "unifiedPageScreen": "ChannelOverview",
        "screenPageViews": 26,
        "activeUsers": 24,
        "sessions": 24,
        "eventCount": 33,
        "userEngagementDuration": 193,
        "totalEngagementHours": 0.05361111111111111
      },
      {
        "unifiedPageScreen": "/?channel=leverage",
        "screenPageViews": 25,
        "activeUsers": 6,
        "sessions": 11,
        "eventCount": 25,
        "userEngagementDuration": 5263,
        "totalEngagementHours": 1.4619444444444445
      },
      {
        "unifiedPageScreen": "/my-lists/purchases",
        "screenPageViews": 25,
        "activeUsers": 8,
        "sessions": 10,
        "eventCount": 33,
        "userEngagementDuration": 359,
        "totalEngagementHours": 0.09972222222222223
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-season-2?_id=6a44602e6a334bc1bf816f29?_id=6a44602e6a334bc1bf816f29",
        "screenPageViews": 25,
        "activeUsers": 13,
        "sessions": 22,
        "eventCount": 26,
        "userEngagementDuration": 517,
        "totalEngagementHours": 0.1436111111111111
      },
      {
        "unifiedPageScreen": "/search?q=T",
        "screenPageViews": 23,
        "activeUsers": 4,
        "sessions": 14,
        "eventCount": 26,
        "userEngagementDuration": 155,
        "totalEngagementHours": 0.043055555555555555
      },
      {
        "unifiedPageScreen": "/watch/the-ark-2?_id=691698915572586b0a2328be?_id=691698915572586b0a2328be",
        "screenPageViews": 22,
        "activeUsers": 16,
        "sessions": 19,
        "eventCount": 28,
        "userEngagementDuration": 160,
        "totalEngagementHours": 0.044444444444444446
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-1?_id=699f400971c38f8082d7477d",
        "screenPageViews": 22,
        "activeUsers": 16,
        "sessions": 17,
        "eventCount": 386,
        "userEngagementDuration": 2908,
        "totalEngagementHours": 0.8077777777777778
      },
      {
        "unifiedPageScreen": "My Reactions",
        "screenPageViews": 22,
        "activeUsers": 8,
        "sessions": 22,
        "eventCount": 22,
        "userEngagementDuration": 7,
        "totalEngagementHours": 0.0019444444444444444
      },
      {
        "unifiedPageScreen": "/watch/the-ark-season-3?_id=6a615fd0ebe94048aa33958a?_id=6a615fd0ebe94048aa33958a",
        "screenPageViews": 21,
        "activeUsers": 13,
        "sessions": 15,
        "eventCount": 25,
        "userEngagementDuration": 341,
        "totalEngagementHours": 0.09472222222222222
      },
      {
        "unifiedPageScreen": "UpdateDeleteProfile",
        "screenPageViews": 21,
        "activeUsers": 17,
        "sessions": 17,
        "eventCount": 28,
        "userEngagementDuration": 625,
        "totalEngagementHours": 0.1736111111111111
      },
      {
        "unifiedPageScreen": "/checkout/6a615fd1ebe94048aa33958f",
        "screenPageViews": 20,
        "activeUsers": 11,
        "sessions": 11,
        "eventCount": 51,
        "userEngagementDuration": 350,
        "totalEngagementHours": 0.09722222222222222
      },
      {
        "unifiedPageScreen": "/download",
        "screenPageViews": 19,
        "activeUsers": 9,
        "sessions": 9,
        "eventCount": 53,
        "userEngagementDuration": 192,
        "totalEngagementHours": 0.05333333333333334
      },
      {
        "unifiedPageScreen": "/my-lists/continue-watching",
        "screenPageViews": 19,
        "activeUsers": 10,
        "sessions": 11,
        "eventCount": 20,
        "userEngagementDuration": 815,
        "totalEngagementHours": 0.2263888888888889
      },
      {
        "unifiedPageScreen": "/watch/the-ark",
        "screenPageViews": 19,
        "activeUsers": 9,
        "sessions": 9,
        "eventCount": 113,
        "userEngagementDuration": 205,
        "totalEngagementHours": 0.05694444444444444
      },
      {
        "unifiedPageScreen": "/watch/the-ark-2?_id=691698915572586b0a2328be",
        "screenPageViews": 18,
        "activeUsers": 16,
        "sessions": 19,
        "eventCount": 214,
        "userEngagementDuration": 3756,
        "totalEngagementHours": 1.0433333333333332
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-1?_id=699f400971c38f8082d7477d?_id=699f400971c38f8082d7477d",
        "screenPageViews": 18,
        "activeUsers": 12,
        "sessions": 13,
        "eventCount": 22,
        "userEngagementDuration": 220,
        "totalEngagementHours": 0.06111111111111111
      },
      {
        "unifiedPageScreen": "/?channel=the-ark-2",
        "screenPageViews": 17,
        "activeUsers": 4,
        "sessions": 8,
        "eventCount": 26,
        "userEngagementDuration": 1038,
        "totalEngagementHours": 0.28833333333333333
      },
      {
        "unifiedPageScreen": "/watch/leverage",
        "screenPageViews": 17,
        "activeUsers": 4,
        "sessions": 16,
        "eventCount": 37,
        "userEngagementDuration": 101,
        "totalEngagementHours": 0.028055555555555556
      },
      {
        "unifiedPageScreen": "/?iss=https%3A%2F%2Felectricnow.us.auth0.com%2F",
        "screenPageViews": 16,
        "activeUsers": 12,
        "sessions": 14,
        "eventCount": 35,
        "userEngagementDuration": 31,
        "totalEngagementHours": 0.008611111111111111
      },
      {
        "unifiedPageScreen": "/watch/the-ark-season-3-trailer",
        "screenPageViews": 16,
        "activeUsers": 6,
        "sessions": 6,
        "eventCount": 95,
        "userEngagementDuration": 221,
        "totalEngagementHours": 0.06138888888888889
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-1?_id=69136cfa19767d8cd515345b?_id=69136cfa19767d8cd515345b",
        "screenPageViews": 16,
        "activeUsers": 13,
        "sessions": 14,
        "eventCount": 16,
        "userEngagementDuration": 53,
        "totalEngagementHours": 0.014722222222222222
      },
      {
        "unifiedPageScreen": "/search?q=The+lib",
        "screenPageViews": 14,
        "activeUsers": 1,
        "sessions": 4,
        "eventCount": 38,
        "userEngagementDuration": 116,
        "totalEngagementHours": 0.03222222222222222
      },
      {
        "unifiedPageScreen": "/watch/the-ark-season-3?_id=6a615fd0ebe94048aa33958c?_id=6a615fd0ebe94048aa33958c",
        "screenPageViews": 14,
        "activeUsers": 7,
        "sessions": 11,
        "eventCount": 14,
        "userEngagementDuration": 42,
        "totalEngagementHours": 0.011666666666666667
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-1?_id=69136cfa19767d8cd515345b",
        "screenPageViews": 14,
        "activeUsers": 13,
        "sessions": 14,
        "eventCount": 279,
        "userEngagementDuration": 11522,
        "totalEngagementHours": 3.2005555555555554
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-s1-marathon",
        "screenPageViews": 13,
        "activeUsers": 7,
        "sessions": 8,
        "eventCount": 59,
        "userEngagementDuration": 3813,
        "totalEngagementHours": 1.0591666666666666
      },
      {
        "unifiedPageScreen": "/?channel=the-ark",
        "screenPageViews": 12,
        "activeUsers": 6,
        "sessions": 6,
        "eventCount": 13,
        "userEngagementDuration": 315,
        "totalEngagementHours": 0.0875
      },
      {
        "unifiedPageScreen": "/?channel=the-outpost",
        "screenPageViews": 12,
        "activeUsers": 2,
        "sessions": 7,
        "eventCount": 14,
        "userEngagementDuration": 1028,
        "totalEngagementHours": 0.28555555555555556
      },
      {
        "unifiedPageScreen": "/profiles",
        "screenPageViews": 12,
        "activeUsers": 8,
        "sessions": 8,
        "eventCount": 15,
        "userEngagementDuration": 386,
        "totalEngagementHours": 0.10722222222222222
      },
      {
        "unifiedPageScreen": "/search?q=the+ark",
        "screenPageViews": 12,
        "activeUsers": 6,
        "sessions": 7,
        "eventCount": 32,
        "userEngagementDuration": 93,
        "totalEngagementHours": 0.025833333333333333
      },
      {
        "unifiedPageScreen": "/watch/leverage-redemption?_id=6924c675a128fb6e4248e5ad",
        "screenPageViews": 12,
        "activeUsers": 8,
        "sessions": 10,
        "eventCount": 314,
        "userEngagementDuration": 15429,
        "totalEngagementHours": 4.285833333333334
      },
      {
        "unifiedPageScreen": "/watch/leverage?_id=691279cd7fadf6de6e0041a7",
        "screenPageViews": 12,
        "activeUsers": 4,
        "sessions": 8,
        "eventCount": 272,
        "userEngagementDuration": 7742,
        "totalEngagementHours": 2.1505555555555556
      },
      {
        "unifiedPageScreen": "/watch/leverage?_id=691279cd7fadf6de6e0041a7?_id=691279cd7fadf6de6e0041a7",
        "screenPageViews": 12,
        "activeUsers": 4,
        "sessions": 7,
        "eventCount": 12,
        "userEngagementDuration": 77,
        "totalEngagementHours": 0.021388888888888888
      },
      {
        "unifiedPageScreen": "/watch/leverage?_id=691279d57fadf6de6e0041c6",
        "screenPageViews": 12,
        "activeUsers": 8,
        "sessions": 11,
        "eventCount": 234,
        "userEngagementDuration": 11912,
        "totalEngagementHours": 3.3088888888888888
      },
      {
        "unifiedPageScreen": "/watch/leverage?_id=691279d57fadf6de6e0041c6?_id=691279d57fadf6de6e0041c6",
        "screenPageViews": 12,
        "activeUsers": 8,
        "sessions": 11,
        "eventCount": 12,
        "userEngagementDuration": 1103,
        "totalEngagementHours": 0.3063888888888889
      },
      {
        "unifiedPageScreen": "/watch/the-ark-2?_id=691698965572586b0a2328d4",
        "screenPageViews": 12,
        "activeUsers": 5,
        "sessions": 7,
        "eventCount": 261,
        "userEngagementDuration": 9804,
        "totalEngagementHours": 2.723333333333333
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-1?_id=699f400b71c38f8082d74785",
        "screenPageViews": 12,
        "activeUsers": 11,
        "sessions": 13,
        "eventCount": 292,
        "userEngagementDuration": 12507,
        "totalEngagementHours": 3.4741666666666666
      },
      {
        "unifiedPageScreen": "/english?channel=the-librarians-the-next-chapter-season-2",
        "screenPageViews": 11,
        "activeUsers": 5,
        "sessions": 8,
        "eventCount": 18,
        "userEngagementDuration": 185,
        "totalEngagementHours": 0.05138888888888889
      },
      {
        "unifiedPageScreen": "/profiles?after_selection=%2Flanding",
        "screenPageViews": 11,
        "activeUsers": 7,
        "sessions": 10,
        "eventCount": 20,
        "userEngagementDuration": 76,
        "totalEngagementHours": 0.021111111111111112
      },
      {
        "unifiedPageScreen": "/watch/leverage-redemption?_id=6924c675a128fb6e4248e5ad?_id=6924c675a128fb6e4248e5ad",
        "screenPageViews": 11,
        "activeUsers": 7,
        "sessions": 8,
        "eventCount": 13,
        "userEngagementDuration": 91,
        "totalEngagementHours": 0.025277777777777777
      },
      {
        "unifiedPageScreen": "/watch/leverage?_id=691279ca7fadf6de6e00419d",
        "screenPageViews": 11,
        "activeUsers": 4,
        "sessions": 10,
        "eventCount": 216,
        "userEngagementDuration": 2518,
        "totalEngagementHours": 0.6994444444444444
      },
      {
        "unifiedPageScreen": "/watch/leverage?_id=691279ca7fadf6de6e00419d?_id=691279ca7fadf6de6e00419d",
        "screenPageViews": 11,
        "activeUsers": 4,
        "sessions": 10,
        "eventCount": 11,
        "userEngagementDuration": 11,
        "totalEngagementHours": 0.0030555555555555557
      },
      {
        "unifiedPageScreen": "/watch/leverage?_id=691279da7fadf6de6e0041d7",
        "screenPageViews": 11,
        "activeUsers": 6,
        "sessions": 6,
        "eventCount": 409,
        "userEngagementDuration": 9584,
        "totalEngagementHours": 2.6622222222222223
      },
      {
        "unifiedPageScreen": "/watch/the-ark-season-3?_id=6a615fd0ebe94048aa33958b",
        "screenPageViews": 11,
        "activeUsers": 5,
        "sessions": 8,
        "eventCount": 158,
        "userEngagementDuration": 3945,
        "totalEngagementHours": 1.0958333333333334
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-1?_id=699f400a71c38f8082d74781",
        "screenPageViews": 11,
        "activeUsers": 6,
        "sessions": 8,
        "eventCount": 839,
        "userEngagementDuration": 9846,
        "totalEngagementHours": 2.735
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-1?_id=699f400b71c38f8082d74785?_id=699f400b71c38f8082d74785",
        "screenPageViews": 11,
        "activeUsers": 10,
        "sessions": 11,
        "eventCount": 13,
        "userEngagementDuration": 21,
        "totalEngagementHours": 0.005833333333333334
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-season-2?_id=6a44602e6a334bc1bf816f2a",
        "screenPageViews": 11,
        "activeUsers": 6,
        "sessions": 9,
        "eventCount": 240,
        "userEngagementDuration": 13943,
        "totalEngagementHours": 3.8730555555555557
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-season-2?_id=6a44602e6a334bc1bf816f2b",
        "screenPageViews": 11,
        "activeUsers": 10,
        "sessions": 11,
        "eventCount": 381,
        "userEngagementDuration": 15042,
        "totalEngagementHours": 4.178333333333334
      },
      {
        "unifiedPageScreen": "/watch/the-librarians-the-next-chapter-season-2?_id=6a44602e6a334bc1bf816f2b?_id=6a44602e6a334bc1bf816f2b",
        "screenPageViews": 11,
        "activeUsers": 10,
        "sessions": 11,
        "eventCount": 11,
        "userEngagementDuration": 377,
        "totalEngagementHours": 0.10472222222222222
      },
      {
        "unifiedPageScreen": "/category/new",
        "screenPageViews": 10,
        "activeUsers": 6,
        "sessions": 7,
        "eventCount": 16,
        "userEngagementDuration": 197,
        "totalEngagementHours": 0.05472222222222222
      },
      {
        "unifiedPageScreen": "/search?q=l",
        "screenPageViews": 10,
        "activeUsers": 5,
        "sessions": 6,
        "eventCount": 23,
        "userEngagementDuration": 1096,
        "totalEngagementHours": 0.30444444444444446
      },
      {
        "unifiedPageScreen": "/watch/the-ark-2?_id=691698935572586b0a2328ca",
        "screenPageViews": 10,
        "activeUsers": 4,
        "sessions": 7,
        "eventCount": 111,
        "userEngagementDuration": 4738,
        "totalEngagementHours": 1.316111111111111
      },
      {
        "unifiedPageScreen": "/watch/the-ark-2?_id=691698945572586b0a2328ce",
        "screenPageViews": 10,
        "activeUsers": 5,
        "sessions": 5,
        "eventCount": 178,
        "userEngagementDuration": 9438,
        "totalEngagementHours": 2.6216666666666666
      }
    ]
  },
  "liveTv": {
    "baseline": {
      "activeUsers": 235,
      "sessions": 1255,
      "engagedSessions": 1198,
      "screenPageViews": 2298,
      "eventCount": 28926
    },
    "current": {
      "activeUsers": 466,
      "sessions": 1598,
      "engagedSessions": 1488,
      "screenPageViews": 2829,
      "eventCount": 41780
    },
    "deltas": {
      "activeUsers": 98.29787234042553,
      "sessions": 27.330677290836654,
      "engagedSessions": 24.207011686143574,
      "screenPageViews": 23.10704960835509,
      "eventCount": 44.43753024960244
    },
    "engagementRateBaseline": 95.45816733067728,
    "engagementRateCurrent": 93.11639549436796,
    "weekToDate": {
      "activeUsers": 466,
      "sessions": 1598,
      "engagedSessions": 1488,
      "screenPageViews": 2829,
      "eventCount": 41780
    },
    "engagementRateWeekToDate": 93.11639549436796
  },
  "plainEnglishInsights": [
    "The best news is that ElectricNOW’s TVOD momentum is still real: DotStudios shows $1,846.15 across 84 paid transactions for Aug 17-Aug 23, 2026, with The Ark ($1,129.50) and The Librarians ($716.65) accounting for almost all of the sales. GA4 sessions and total engaged time also rose versus Aug 10-Aug 16, 2026, though engagement rate softened, so the audience is still arriving but needs continued conversion into deeper viewing.",
    "Platform traffic is slightly up week over week: active users were 4,708 versus 4,824, and sessions were 11,138 versus 11,803. Screen/page views increased sharply to 59,032, while engagement rate fell from 80.6% to 72.9%, so the team should keep watching whether new/returning traffic becomes durable viewing.",
    "The DotStudios app dashboard adds useful app-side context: it shows 1,533 installs, 2,280 updates, and 16,373 in-app video views for Aug 17-Aug 23, 2026. Roku was the largest in-app viewing device in the DotStudios export, while Apple TV contributed 241 views; Roku TRC live-channel-only emails remain excluded from app/platform usage.",
    "DotStudios app ad-serving now shows 22,964 ElectricNOW in-app ad impressions from 25,602 requests for Aug 17-Aug 23, 2026. This is a delivery signal only, separate from Google/Meta paid-campaign impressions, and the file does not include ad-server revenue or yield.",
    "Apple remained steady but not accelerating: the latest manual Apple screenshot shows 528 downloads and $477.78 gross sales for Aug 17-Aug 23, 2026, compared with 528 downloads and $477.78 sales in the prior Apple snapshot.",
    "Paid acquisition verdict: acceptable but still needs proof of viewing. Google Ads and Meta efficiency metrics are preserved from the last successful pulls because no fresh usable performance report was available today; do not infer true ROAS because ad-server revenue is unavailable and app-store/TVOD sources overlap.",
    "Next tests: keep separate The Ark and The Librarians purchase campaigns, split iOS/Android budgets, shift spend toward lower-cost audiences that also show viewing depth, refresh creative around show-specific urgency, and check install-to-viewing quality before scaling budget again."
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
    "sourceDetail": "Current TVOD dashboard total is the DotStudios Aug 17-Aug 23, 2026 export. Stripe, Roku, and Apple overlap DotStudios by platform and should not be summed into it.",
    "stripe": {
      "sourceLabel": "Stripe connector source check",
      "sourceDetail": "Stripe connector charge-list checked fresh for Aug 17-Aug 23, 2026 and returned 19 successful Stripe-visible charges totaling $398.81. Stripe overlaps the DotStudios TVOD ecosystem and is not added to the DotStudios total. Stripe Analytics/Sigma remains blocked by reporting_write permission, so charge-list is used as the source check.",
      "connectorStatus": "CONNECTED_FRESH_CHARGE_LIST_ANALYTICS_PERMISSION_BLOCKED",
      "latestSevenDay": {
        "label": "Stripe connector source check",
        "range": "Aug 17-Aug 23, 2026",
        "purchases": 19,
        "purchaseRevenue": 398.81,
        "developerRevShare": 398.81,
        "note": "Stripe is a web/payment-source check for the same TVOD ecosystem and overlaps the DotStudios export; it is not added to DotStudios totals."
      },
      "currentWeek": {
        "period": "Aug 17-Aug 23, 2026",
        "gross": 398.81,
        "transactions": 19,
        "source": "Stripe connector charge list",
        "status": "fresh_charge_list",
        "hasMore": false,
        "daily": [
          {
            "date": "2026-08-18",
            "transactions": 4,
            "gross": 83.96
          },
          {
            "date": "2026-08-19",
            "transactions": 2,
            "gross": 41.98
          },
          {
            "date": "2026-08-20",
            "transactions": 3,
            "gross": 62.97
          },
          {
            "date": "2026-08-21",
            "transactions": 4,
            "gross": 83.96
          },
          {
            "date": "2026-08-23",
            "transactions": 6,
            "gross": 125.94
          }
        ],
        "note": "Stripe Analytics/Sigma unavailable due reporting_write permission; charge-list pull is fresh."
      }
    },
    "roku": {
      "sourceLabel": "Roku-visible sales",
      "sourceDetail": "Roku-visible sales come from the latest emailed Roku Sales Activity Report. The Aug 17 email was processed and Aug 10-Aug 16 Roku-only rows are shown as a source check, not added to DotStudios totals.",
      "reportEmailDate": "2026-08-17T14:26:07+00:00",
      "reportGenerated": "August 17, 2026 at 7:24 AM PDT",
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
        ]
      },
      "monthToDate": {
        "label": "Roku sales this month",
        "range": "Aug 1-Aug 3, 2026",
        "purchases": 6,
        "purchaseRevenue": 124.94,
        "developerRevShare": 99.94,
        "revenuePerPurchase": 20.82,
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
          }
        ]
      },
      "lastWeek": {
        "label": "Roku sales last week",
        "range": "Jul 27-Aug 2, 2026",
        "purchases": 26,
        "purchaseRevenue": 577.74,
        "developerRevShare": 462.14,
        "revenuePerPurchase": 22.22,
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
        ]
      },
      "thisWeek": {
        "label": "Roku sales this week",
        "range": "Aug 3-Aug 3, 2026",
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
        "range": "Jul 27-Aug 2, 2026",
        "purchases": 26,
        "purchaseRevenue": 577.74,
        "developerRevShare": 462.14,
        "revenuePerPurchase": 22.22,
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
        ]
      },
      "weekToDate": {
        "label": "Roku sales this week",
        "range": "Aug 3-Aug 3, 2026",
        "purchases": 0,
        "purchaseRevenue": 0,
        "developerRevShare": 0,
        "revenuePerPurchase": 0,
        "deltaPurchasesPct": null,
        "deltaRevenuePct": null,
        "payments": []
      },
      "lifetimeObserved": {
        "range": "Through Aug 3, 2026 pull",
        "purchases": 32,
        "purchaseRevenue": 710.68,
        "developerRevShare": 568.48
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
          "date": "Jul 25",
          "createdAt": "2026-07-25",
          "amount": 19.99,
          "developerRevShare": 15.99,
          "description": "Roku - Purchase Bundle 20",
          "source": "Roku"
        },
        {
          "date": "Jul 20",
          "createdAt": "2026-07-20",
          "amount": 19.99,
          "developerRevShare": 15.99,
          "description": "Roku - Purchase Bundle 20",
          "source": "Roku"
        },
        {
          "date": "Jul 14",
          "createdAt": "2026-07-14",
          "amount": 2.99,
          "developerRevShare": 2.39,
          "description": "Roku - Purchase HD 3",
          "source": "Roku"
        },
        {
          "date": "Jul 14",
          "createdAt": "2026-07-14",
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
        }
      ],
      "note": "Roku report shows 32 purchases and $710.68 gross sales year to date, with $568.48 developer rev share.",
      "dataFreshnessNote": "Latest Roku Sales Activity email found in Outlook ROKU search: Aug 3, 2026 at 7:34 AM PDT; no newer Sales Activity report was found in the Aug 6 search.",
      "currentWeek": {
        "label": "Roku sales latest seven days",
        "range": "Aug 10-Aug 16, 2026",
        "purchases": 9,
        "purchaseRevenue": 197.91,
        "developerRevShare": 158.31,
        "revenuePerPurchase": 21.99,
        "status": "fresh",
        "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals.",
        "payments": [
          {
            "date": "Aug 10",
            "createdAt": "2026-08-10",
            "amount": 41.98,
            "developerRevShare": 33.58,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku",
            "transactions": 2
          },
          {
            "date": "Aug 13",
            "createdAt": "2026-08-13",
            "amount": 29.99,
            "developerRevShare": 23.99,
            "description": "Roku - Purchase Bundle 30",
            "source": "Roku",
            "transactions": 1
          },
          {
            "date": "Aug 14",
            "createdAt": "2026-08-14",
            "amount": 62.97,
            "developerRevShare": 50.37,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku",
            "transactions": 3
          },
          {
            "date": "Aug 15",
            "createdAt": "2026-08-15",
            "amount": 41.98,
            "developerRevShare": 33.58,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku",
            "transactions": 2
          },
          {
            "date": "Aug 16",
            "createdAt": "2026-08-16",
            "amount": 20.99,
            "developerRevShare": 16.79,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku",
            "transactions": 1
          }
        ]
      },
      "latestSevenDay": {
        "label": "Roku sales latest seven days",
        "range": "Aug 10-Aug 16, 2026",
        "purchases": 9,
        "purchaseRevenue": 197.91,
        "developerRevShare": 158.31,
        "revenuePerPurchase": 21.99,
        "status": "fresh",
        "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals.",
        "payments": [
          {
            "date": "Aug 10",
            "createdAt": "2026-08-10",
            "amount": 41.98,
            "developerRevShare": 33.58,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku",
            "transactions": 2
          },
          {
            "date": "Aug 13",
            "createdAt": "2026-08-13",
            "amount": 29.99,
            "developerRevShare": 23.99,
            "description": "Roku - Purchase Bundle 30",
            "source": "Roku",
            "transactions": 1
          },
          {
            "date": "Aug 14",
            "createdAt": "2026-08-14",
            "amount": 62.97,
            "developerRevShare": 50.37,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku",
            "transactions": 3
          },
          {
            "date": "Aug 15",
            "createdAt": "2026-08-15",
            "amount": 41.98,
            "developerRevShare": 33.58,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku",
            "transactions": 2
          },
          {
            "date": "Aug 16",
            "createdAt": "2026-08-16",
            "amount": 20.99,
            "developerRevShare": 16.79,
            "description": "Roku - Purchase Bundle 21",
            "source": "Roku",
            "transactions": 1
          }
        ]
      }
    },
    "apple": {
      "sourceLabel": "Apple App Store manual sales/download snapshot",
      "sourceDetail": "Apple App Store Connect screenshots were manually uploaded and integrated for Aug 17-Aug 23, 2026. Gross customer sales are shown; the screenshot does not provide a transaction count, so no purchase count is fabricated. Downloads are shown separately and are not paid sales or GA4 active users.",
      "snapshotRange": "Aug 17-Aug 23, 2026",
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
        "label": "Apple manual gross sales/download latest snapshot",
        "range": "Aug 17-Aug 23, 2026",
        "purchases": null,
        "purchaseRevenue": 477.78,
        "developerRevShare": 334.45,
        "downloads": 528,
        "note": "Latest App Store Connect screenshots; gross sales and downloads are reported, but transaction count is not provided."
      },
      "latestSnapshot": {
        "label": "Apple manual gross sales/download latest snapshot",
        "range": "Aug 17-Aug 23, 2026",
        "purchases": null,
        "purchaseRevenue": 477.78,
        "developerRevShare": 334.45,
        "downloads": 528,
        "note": "Latest App Store Connect screenshots; gross sales and downloads are reported, but transaction count is not provided."
      },
      "dailyTrend": [
        {
          "date": "Aug 17",
          "rawDate": "20260817",
          "purchases": null,
          "purchaseRevenue": 146.93,
          "developerRevShare": 102.85,
          "downloads": 71,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Aug 18",
          "rawDate": "20260818",
          "purchases": null,
          "purchaseRevenue": 20.99,
          "developerRevShare": 14.69,
          "downloads": 80,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Aug 19",
          "rawDate": "20260819",
          "purchases": null,
          "purchaseRevenue": 44.97,
          "developerRevShare": 31.48,
          "downloads": 71,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Aug 20",
          "rawDate": "20260820",
          "purchases": null,
          "purchaseRevenue": 41.98,
          "developerRevShare": 29.39,
          "downloads": 81,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Aug 21",
          "rawDate": "20260821",
          "purchases": null,
          "purchaseRevenue": 104.95,
          "developerRevShare": 73.47,
          "downloads": 81,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Aug 22",
          "rawDate": "20260822",
          "purchases": null,
          "purchaseRevenue": 20.99,
          "developerRevShare": 14.69,
          "downloads": 66,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        },
        {
          "date": "Aug 23",
          "rawDate": "20260823",
          "purchases": null,
          "purchaseRevenue": 96.97,
          "developerRevShare": 67.88,
          "downloads": 78,
          "note": "Aggregate Apple revenue only; transaction count unavailable."
        }
      ],
      "latestSevenDay": {
        "label": "Apple manual gross sales/download latest snapshot",
        "range": "Aug 17-Aug 23, 2026",
        "purchases": null,
        "purchaseRevenue": 477.78,
        "developerRevShare": 334.45,
        "downloads": 528,
        "note": "Latest App Store Connect screenshots; gross sales and downloads are reported, but transaction count is not provided."
      },
      "currentWeek": {
        "label": "Apple manual gross sales/download latest snapshot",
        "range": "Aug 17-Aug 23, 2026",
        "purchases": null,
        "purchaseRevenue": 477.78,
        "developerRevShare": 334.45,
        "downloads": 528,
        "note": "Latest App Store Connect screenshots; gross sales and downloads are reported, but transaction count is not provided."
      },
      "weekToDate": {
        "label": "Apple manual gross sales/download latest snapshot",
        "range": "Aug 17-Aug 23, 2026",
        "purchases": null,
        "purchaseRevenue": 477.78,
        "developerRevShare": 334.45,
        "downloads": 528,
        "note": "Latest App Store Connect screenshots; gross sales and downloads are reported, but transaction count is not provided."
      }
    },
    "sourceBreakout": [
      {
        "source": "Stripe",
        "purchases": 59,
        "purchaseRevenue": 1265.4,
        "developerRevShare": 1265.4,
        "detail": "Fresh same-week Stripe connector pull for Aug 3-Aug 9, 2026."
      },
      {
        "source": "Roku",
        "purchases": 39,
        "purchaseRevenue": 815.61,
        "developerRevShare": 652.41,
        "detail": "Fresh Roku Sales Activity email parsed for Aug 3-Aug 9, 2026."
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
      "label": "Preserved partial source-check sales before Aug 10 refresh",
      "range": "Jan 1-Aug 6, 2026",
      "purchases": 118,
      "purchaseRevenue": 3532.31,
      "developerRevShare": 2984.06,
      "revenuePerPurchase": 29.93,
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
      ],
      "note": "Preserved for historical reconciliation only. The headline visible-sales card now uses the fresh Aug 3-Aug 9 Stripe + Roku source check instead of this older partial rollup.",
      "preserved": true
    },
    "monthToDate": {
      "label": "Stripe sales last 7 days",
      "range": "Jul 28-Aug 3, 2026",
      "purchases": 54,
      "purchaseRevenue": 1132.45,
      "developerRevShare": 1132.45,
      "revenuePerPurchase": 20.97,
      "payments": [
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
        }
      ],
      "note": "Fresh Stripe connector pull. Valid charges are paid/captured/succeeded/non-refunded and de-duplicated by charge ID."
    },
    "lastWeek": {
      "label": "Apple sales last week",
      "range": "Jul 27-Aug 2, 2026",
      "purchases": null,
      "purchaseRevenue": 728,
      "developerRevShare": 509.6,
      "downloads": 423,
      "note": "Manual Apple App Store Connect snapshot. Sales are gross revenue by day; transaction count was not provided."
    },
    "thisWeek": {
      "label": "Visible sales last week",
      "range": "Jul 27-Aug 2, 2026",
      "purchases": 67,
      "purchaseRevenue": 2159.32,
      "developerRevShare": 1825.32,
      "note": "Purchase count includes Stripe + Roku only for this window; Apple latest snapshot adds revenue but has no transaction count."
    },
    "currentCompleteWeek": {
      "label": "Fresh DotStudios TVOD and Apple manual checks",
      "period": "Aug 7-Aug 13, 2026",
      "dotStudiosTvodGross": 2317.84,
      "dotStudiosTvodTransactions": 109,
      "appleManualSnapshotGross": 648.69,
      "appleManualSnapshotDownloads": 608,
      "appleManualSnapshotPeriod": "Aug 7-Aug 13, 2026",
      "note": "Fresh manual checks now include DotStudios TVOD and Apple App Store Connect for Aug 7-Aug 13. Do not add DotStudios to Apple/Roku/Stripe because the sources overlap; use DotStudios for current title/device TVOD detail and Apple as an Apple-only confirmation slice."
    },
    "weekToDate": {
      "label": "Visible source-snapshot sales in latest usage week",
      "range": "Jul 31-Aug 6, 2026",
      "purchases": 73,
      "purchaseRevenue": 3222.46,
      "developerRevShare": 2722.56,
      "note": "Stripe/web + Apple manual gross snapshot + latest available Roku sales through Aug 2. Roku Aug 3-Aug 6 may be missing here; DotStudios TVOD is the fuller current title/platform export."
    },
    "recent12Days": {
      "label": "Stripe sales last 7 days",
      "range": "Jul 28-Aug 3, 2026",
      "purchases": 54,
      "purchaseRevenue": 1132.45,
      "developerRevShare": 1132.45,
      "revenuePerPurchase": 20.97,
      "payments": [
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
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
          "contentTitle": null
        }
      ],
      "note": "Fresh Stripe connector pull. Valid charges are paid/captured/succeeded/non-refunded and de-duplicated by charge ID."
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
        "id": "ch_3TzEFKLG0Cw1zW4e23n3fXCE",
        "date": "Jul 31",
        "createdAt": "2026-07-31T11:04:59Z",
        "sortDate": "2026-07-31T11:04:59Z",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe",
        "stripeChargeId": "ch_3TzEFKLG0Cw1zW4e23n3fXCE",
        "stripePaymentIntentId": "pi_3TzEFKLG0Cw1zW4e2BhEcfTJ",
        "orderId": "spc-2026073111045857",
        "contentId": null,
        "contentTitle": null
      },
      {
        "id": "ch_3TzCUiLG0Cw1zW4e16ILLnfy",
        "date": "Jul 31",
        "createdAt": "2026-07-31T09:12:45Z",
        "sortDate": "2026-07-31T09:12:45Z",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe",
        "stripeChargeId": "ch_3TzCUiLG0Cw1zW4e16ILLnfy",
        "stripePaymentIntentId": "pi_3TzCUiLG0Cw1zW4e1e6IMbcp",
        "orderId": "boj-2026073109124470",
        "contentId": null,
        "contentTitle": null
      },
      {
        "id": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs",
        "date": "Jul 31",
        "createdAt": "2026-07-31T03:44:17Z",
        "sortDate": "2026-07-31T03:44:17Z",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe",
        "stripeChargeId": "ch_3Tz7MrLG0Cw1zW4e0szfHeWs",
        "stripePaymentIntentId": "pi_3Tz7MrLG0Cw1zW4e0nFPqa1h",
        "orderId": "gaj-2026073103441719",
        "contentId": null,
        "contentTitle": null
      },
      {
        "id": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd",
        "date": "Jul 31",
        "createdAt": "2026-07-31T03:40:22Z",
        "sortDate": "2026-07-31T03:40:22Z",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe",
        "stripeChargeId": "ch_3Tz7J4LG0Cw1zW4e0gBqEDTd",
        "stripePaymentIntentId": "pi_3Tz7J4LG0Cw1zW4e0HUD0BHa",
        "orderId": "coj-2026073103402209",
        "contentId": null,
        "contentTitle": null
      },
      {
        "id": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR",
        "date": "Jul 31",
        "createdAt": "2026-07-31T03:29:27Z",
        "sortDate": "2026-07-31T03:29:27Z",
        "amount": 20.99,
        "description": "Anonymous Customer - Season Pass: Signup payment",
        "source": "Stripe",
        "stripeChargeId": "ch_3Tz78ULG0Cw1zW4e0qdLvlSR",
        "stripePaymentIntentId": "pi_3Tz78ULG0Cw1zW4e0tM1JWeq",
        "orderId": "huc-2026073103292664",
        "contentId": null,
        "contentTitle": null
      },
      {
        "id": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv",
        "date": "Jul 31",
        "createdAt": "2026-07-31T00:16:09Z",
        "sortDate": "2026-07-31T00:16:09Z",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe",
        "stripeChargeId": "ch_3Tz47RLG0Cw1zW4e1TUSt1nv",
        "stripePaymentIntentId": "pi_3Tz47RLG0Cw1zW4e1FYzc0le",
        "orderId": "taj-2026073100160920",
        "contentId": null,
        "contentTitle": null
      },
      {
        "id": "ch_3Tz3MsLG0Cw1zW4e00hGznTV",
        "date": "Jul 30",
        "createdAt": "2026-07-30T23:28:02Z",
        "sortDate": "2026-07-30T23:28:02Z",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe",
        "stripeChargeId": "ch_3Tz3MsLG0Cw1zW4e00hGznTV",
        "stripePaymentIntentId": "pi_3Tz3MsLG0Cw1zW4e0mjh6SJz",
        "orderId": "gud-2026073023280174",
        "contentId": null,
        "contentTitle": null
      },
      {
        "id": "ch_3Tz301LG0Cw1zW4e1OHOZPHl",
        "date": "Jul 30",
        "createdAt": "2026-07-30T23:04:26Z",
        "sortDate": "2026-07-30T23:04:26Z",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe",
        "stripeChargeId": "ch_3Tz301LG0Cw1zW4e1OHOZPHl",
        "stripePaymentIntentId": "pi_3Tz301LG0Cw1zW4e1ZokiUw6",
        "orderId": "war-2026073023042542",
        "contentId": null,
        "contentTitle": null
      },
      {
        "id": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7",
        "date": "Jul 30",
        "createdAt": "2026-07-30T22:05:40Z",
        "sortDate": "2026-07-30T22:05:40Z",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe",
        "stripeChargeId": "ch_3Tz25ALG0Cw1zW4e2RPbDsa7",
        "stripePaymentIntentId": "pi_3Tz25ALG0Cw1zW4e2WFGOneD",
        "orderId": "dar-2026073022054001",
        "contentId": null,
        "contentTitle": null
      },
      {
        "id": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK",
        "date": "Jul 30",
        "createdAt": "2026-07-30T21:16:17Z",
        "sortDate": "2026-07-30T21:16:17Z",
        "amount": 20.99,
        "description": "Customer User - Season Pass: Signup payment",
        "source": "Stripe",
        "stripeChargeId": "ch_3Tz1JNLG0Cw1zW4e1wemmNrK",
        "stripePaymentIntentId": "pi_3Tz1JNLG0Cw1zW4e10c2mJD9",
        "orderId": "kot-2026073021161666",
        "contentId": null,
        "contentTitle": null
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
      }
    ],
    "note": "Use the DotStudios TVOD section for current weekly title/platform sales. Use visible source snapshots for reconciliation only; do not add the two together.",
    "latestSevenDayVisibleSales": {
      "period": "Aug 17-Aug 23, 2026",
      "gross": 1846.15,
      "net": 1846.15,
      "transactions": 84,
      "source": "DotStudios revenue-transactions-11.csv",
      "status": "fresh_manual",
      "note": "Broadest current TVOD dashboard export; do not add overlapping Apple/Roku/Stripe values."
    },
    "dotStudiosTvod": {
      "period": "Aug 17-Aug 23, 2026",
      "gross": 1846.15,
      "net": 1846.15,
      "transactions": 84,
      "source": "DotStudios revenue-transactions-11.csv",
      "status": "fresh_manual",
      "note": "Broadest current TVOD dashboard export; do not add overlapping Apple/Roku/Stripe values."
    },
    "appleManual": {
      "period": "Aug 17-Aug 23, 2026",
      "salesGross": 477.78,
      "downloads": 528,
      "status": "fresh_manual",
      "source": "Manual Apple App Store Connect screenshots"
    },
    "visiblePlatformSalesDefinition": "DotStudios current-week TVOD is the broadest current visible sales view. Stripe, Roku, and Apple are platform/source checks and overlap DotStudios rows; Google Play and other channels may still be incomplete.",
    "reconciliationNote": "Use the fresh DotStudios Aug 10-Aug 16 export for current TVOD title/device performance. Use Apple, Stripe, and Roku as platform confirmation slices. Do not add them together.",
    "stripeConnectorCheck": {
      "period": "Aug 17-Aug 23, 2026",
      "gross": 398.81,
      "transactions": 19,
      "source": "Stripe connector charge list",
      "status": "fresh_charge_list",
      "hasMore": false,
      "daily": [
        {
          "date": "2026-08-18",
          "transactions": 4,
          "gross": 83.96
        },
        {
          "date": "2026-08-19",
          "transactions": 2,
          "gross": 41.98
        },
        {
          "date": "2026-08-20",
          "transactions": 3,
          "gross": 62.97
        },
        {
          "date": "2026-08-21",
          "transactions": 4,
          "gross": 83.96
        },
        {
          "date": "2026-08-23",
          "transactions": 6,
          "gross": 125.94
        }
      ],
      "note": "Stripe Analytics/Sigma unavailable due reporting_write permission; charge-list pull is fresh."
    },
    "rokuSalesActivity": {
      "period": "Aug 10-Aug 16, 2026",
      "reportPeriod": "Roku Sales Activity report generated Aug 17, 2026 at 7:24 AM PDT; report covers the last 7 weeks, with Aug 10-Aug 16 rows summarized here.",
      "source": "Roku Sales Activity email from bdp_noreply@data.roku.com",
      "emailDate": "2026-08-17T14:26:07+00:00",
      "status": "fresh",
      "transactions": 9,
      "gross": 197.91,
      "developerRevenue": 158.31,
      "daily": [
        {
          "date": "2026-08-10",
          "product": "Purchase Bundle 21",
          "transactions": 2,
          "gross": 41.98,
          "developerRevenue": 33.58
        },
        {
          "date": "2026-08-13",
          "product": "Purchase Bundle 30",
          "transactions": 1,
          "gross": 29.99,
          "developerRevenue": 23.99
        },
        {
          "date": "2026-08-14",
          "product": "Purchase Bundle 21",
          "transactions": 3,
          "gross": 62.97,
          "developerRevenue": 50.37
        },
        {
          "date": "2026-08-15",
          "product": "Purchase Bundle 21",
          "transactions": 2,
          "gross": 41.98,
          "developerRevenue": 33.58
        },
        {
          "date": "2026-08-16",
          "product": "Purchase Bundle 21",
          "transactions": 1,
          "gross": 20.99,
          "developerRevenue": 16.79
        }
      ],
      "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals."
    }
  },
  "contentUsage": {
    "period": "Jul 27-Aug 2, 2026",
    "live": {
      "total": {
        "screenPageViews": 1478,
        "activeUsers": 228,
        "eventCount": 19232
      },
      "platforms": [
        {
          "platform": "web",
          "screen": "Live",
          "screenPageViews": 1066,
          "activeUsers": 9,
          "eventCount": 1066
        },
        {
          "platform": "Android",
          "screen": "Live",
          "screenPageViews": 279,
          "activeUsers": 148,
          "eventCount": 9364
        },
        {
          "platform": "iOS",
          "screen": "Live",
          "screenPageViews": 133,
          "activeUsers": 71,
          "eventCount": 8802
        }
      ],
      "playback": {
        "play": 3457,
        "video_start": 1846,
        "end_playback": 225
      },
      "playbackRows": [
        {
          "event": "play",
          "label": "Play events",
          "eventCount": 3457
        },
        {
          "event": "video_start",
          "label": "Video starts",
          "eventCount": 1846
        },
        {
          "event": "end_playback",
          "label": "Ended playbacks",
          "eventCount": 225
        }
      ],
      "topChannels": [
        {
          "title": "ElectricNOW",
          "plays": 2682,
          "activeUsers": 219,
          "rank": 1
        },
        {
          "title": "ElectricNOW en Español",
          "plays": 459,
          "activeUsers": 22,
          "rank": 2
        },
        {
          "title": "Stoner TV Network",
          "plays": 44,
          "activeUsers": 6,
          "rank": 3
        },
        {
          "title": "Hollywood Classic Movies",
          "plays": 29,
          "activeUsers": 3,
          "rank": 4
        },
        {
          "title": "ToonOvation",
          "plays": 29,
          "activeUsers": 4,
          "rank": 5
        },
        {
          "title": "CinePast",
          "plays": 22,
          "activeUsers": 2,
          "rank": 6
        },
        {
          "title": "AMPD TV",
          "plays": 21,
          "activeUsers": 5,
          "rank": 7
        },
        {
          "title": "DARK MATTER TV",
          "plays": 18,
          "activeUsers": 6,
          "rank": 8
        },
        {
          "title": "Colorized.TV",
          "plays": 17,
          "activeUsers": 3,
          "rank": 9
        },
        {
          "title": "Horror Asylum",
          "plays": 17,
          "activeUsers": 7,
          "rank": 10
        }
      ],
      "note": "Live usage is based on GA4 screen name 'Live' plus playback events that also carried the Live screen name."
    },
    "onDemand": {
      "total": {
        "screenPageViews": 7142,
        "activeUsers": 1642,
        "eventCount": 9504
      },
      "platforms": [
        {
          "platform": "web",
          "screen": "On Demand",
          "screenPageViews": 4008,
          "activeUsers": 1006,
          "eventCount": 4008
        },
        {
          "platform": "Android",
          "screen": "On Demand",
          "screenPageViews": 2279,
          "activeUsers": 452,
          "eventCount": 3311
        },
        {
          "platform": "iOS",
          "screen": "On Demand",
          "screenPageViews": 855,
          "activeUsers": 184,
          "eventCount": 2185
        }
      ],
      "note": "On Demand usage is based on GA4 screen name 'On Demand'. Title-level viewing is shown below from GA4 video_title play events."
    }
  },
  "titleViewership": {
    "period": "Jul 27-Aug 2, 2026",
    "note": "Top programs roll up fragmented GA4 play-event labels into parent shows/collections where possible, then use a GA4 filter to estimate deduped active users for each program. Play events remain the ranking metric because ads monetize playback; active users are total GA4 users who triggered matching play events for that program during the period. On-demand shows and collections only — live/FAST/linear channels (DARK MATTER TV, Kung Fu Movies, spot on news, ToonOvation, ElectricNOW en Espanol, Stoner TV Network, etc.) are excluded here and reported separately under Live channel usage and Live Channel on Roku. Top 50 may list fewer than 50 entries until the next GA4 refresh overfetches with the stricter row-level predicate. Treat this as GA-tracked viewership, not a fully cleaned catalog report yet, until the app sends content_type, series_title, season, episode, and video_id consistently.",
    "topVideoTitlesNote": "Top videos shows individual on-demand video plays only. Live/FAST/linear channel rows (e.g. DARK MATTER TV, Kung Fu Movies, spot on news, ToonOvation, ElectricNOW en Espanol, Stoner TV Network) are excluded here and reported separately in 'Live channel usage' and 'Live Channel on Roku'. Top 50 may list fewer than 50 entries until the next GA4 refresh overfetches with the stricter row-level live-channel predicate.",
    "topPrograms": [
      {
        "rank": 1,
        "program": "The Ark",
        "plays": 28425,
        "activeUsers": 440,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 29,
        "examples": [
          "Everyone Wanted to Be On This Ship",
          "Like It Touched the Sun",
          "We Weren't Supposed to Be Awake"
        ]
      },
      {
        "rank": 2,
        "program": "The Librarians: The Next Chapter",
        "plays": 10367,
        "activeUsers": 432,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 15,
        "examples": [
          "And the Deadly Drekavac",
          "And the Ghost Train",
          "And the Dance of Doom!"
        ]
      },
      {
        "rank": 3,
        "program": "Leverage: Redemption",
        "plays": 7208,
        "activeUsers": 67,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 33,
        "examples": [
          "The Weekend In Paris Job",
          "The Digital Frankenstein Job",
          "The Scared Stiff Job"
        ]
      },
      {
        "rank": 4,
        "program": "Leverage",
        "plays": 5018,
        "activeUsers": 48,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 36,
        "examples": [
          "The Nigerian Job (Pilot) - 43 Min Cut",
          "The Mile High Job",
          "The Wedding Job"
        ]
      },
      {
        "rank": 5,
        "program": "The Librarians",
        "plays": 4424,
        "activeUsers": 54,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 19,
        "examples": [
          "And the Crown of King Arthur",
          "And the Horns of a Dilemma",
          "And the Sword in the Stone"
        ]
      },
      {
        "rank": 6,
        "program": "Almost Paradise",
        "plays": 2902,
        "activeUsers": 33,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 9,
        "examples": [
          "Finding Mabuhay",
          "Uncle Danny",
          "Lone Wolf"
        ]
      },
      {
        "rank": 7,
        "program": "The Ark Season 3 Premieres July 29 on SyFy",
        "plays": 1298,
        "activeUsers": 529,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "The Ark Season 3 Trailer"
        ]
      },
      {
        "rank": 8,
        "program": "The Messenger",
        "plays": 620,
        "activeUsers": 22,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 4,
        "examples": [
          "Episode 1",
          "Episode 2",
          "Episode 4"
        ]
      },
      {
        "rank": 9,
        "program": "Catch up on The Librarians: The Next Chapter",
        "plays": 602,
        "activeUsers": 46,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "And the Deadly Drekavac",
          "And the Dance of Doom!",
          "And the Memory Crystal"
        ]
      },
      {
        "rank": 10,
        "program": "La Arca",
        "plays": 454,
        "activeUsers": 6,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Get Out and Push",
          "Everyone Wanted to Be On This Ship",
          "One Step Forward, Two Steps Back"
        ]
      },
      {
        "rank": 11,
        "program": "The Poly Couple",
        "plays": 421,
        "activeUsers": 15,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 10,
        "examples": [
          "So This Is How Polyamory Happens",
          "Morning Breath",
          "He Forgot the Date"
        ]
      },
      {
        "rank": 12,
        "program": "Checking Out: The Librarians Next Chapter",
        "plays": 367,
        "activeUsers": 35,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 4,
        "examples": [
          "TNC Series Preview",
          "And the Deadly Drekavac",
          "And the Dance of Doom"
        ]
      },
      {
        "rank": 13,
        "program": "The Ark - Trailer",
        "plays": 356,
        "activeUsers": 99,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 14,
        "program": "After the Ark",
        "plays": 319,
        "activeUsers": 105,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 6,
        "examples": [
          "After the Ark - Season 3 Recap",
          "Episode 101",
          "Episode 112"
        ]
      },
      {
        "rank": 15,
        "program": "The Librarians: The Next Chapter Season 2 Aug 2nd on TNT",
        "plays": 221,
        "activeUsers": 86,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "TNT - The Librarians: The Next Chapter Season 2 Premieres Aug 2!"
        ]
      },
      {
        "rank": 16,
        "program": "Checking Out: The Librarians: The Next Chapter",
        "plays": 181,
        "activeUsers": 63,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Checking Out: The Librarians The Next Chapter - Season 2 Recap"
        ]
      },
      {
        "rank": 17,
        "program": "The Book of Love",
        "plays": 119,
        "activeUsers": 3,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "The Book of Love Official Trailer"
        ]
      },
      {
        "rank": 18,
        "program": "The Librarians: The Next Chapter at SDCC 2026",
        "plays": 110,
        "activeUsers": 46,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 19,
        "program": "The Triangle Night 1",
        "plays": 109,
        "activeUsers": 2,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 20,
        "program": "The Outpost",
        "plays": 105,
        "activeUsers": 10,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 8,
        "examples": [
          "One Is the Loneliest Number",
          "Two Heads are Better than None",
          "In the Worst Corner of My Memory"
        ]
      },
      {
        "rank": 21,
        "program": "Flyboys",
        "plays": 97,
        "activeUsers": 9,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 22,
        "program": "Paranormal Quest",
        "plays": 95,
        "activeUsers": 2,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Overnight at the Most Terrifying Hospital in West Virginia",
          "Ghost Hunting at a Real Haunted House",
          "Overnigh at a Haunted Ghost Ship"
        ]
      },
      {
        "rank": 23,
        "program": "Inglorious Treksperts",
        "plays": 94,
        "activeUsers": 4,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Inglorious Treksperts, Episode 30",
          "Inglorious Treksperts, Episode 46",
          "Inglorious Treksperts, Episode 43"
        ]
      },
      {
        "rank": 24,
        "program": "The Official Leverage: Redemption After Show - A Very Distinctive Podcast",
        "plays": 89,
        "activeUsers": 1,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "The Double-Edged Sword Job",
          "The Mastermind Job",
          "The Harry Wilson Job"
        ]
      },
      {
        "rank": 25,
        "program": "The Librarian: Quest for the Spear",
        "plays": 86,
        "activeUsers": 7,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 26,
        "program": "Mythica: A Quest for Heroes",
        "plays": 82,
        "activeUsers": 8,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 27,
        "program": "Wizards vs. Aliens",
        "plays": 78,
        "activeUsers": 10,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Wizards vs. Aliens - Dawn of the Nekross: Part 1",
          "Wizards vs. Aliens - Dawn of the Nekross: Part 2",
          "Wizards vs. Aliens - Rebel Magic: Part 2"
        ]
      },
      {
        "rank": 28,
        "program": "Generation Z",
        "plays": 73,
        "activeUsers": 3,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Episode 4",
          "Episode 3",
          "Episode 2"
        ]
      },
      {
        "rank": 29,
        "program": "Bad Samaritan",
        "plays": 66,
        "activeUsers": 2,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 30,
        "program": "The Librarian: Curse of the Judas Chalice",
        "plays": 64,
        "activeUsers": 6,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 31,
        "program": "LBJ",
        "plays": 60,
        "activeUsers": 3,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 32,
        "program": "Solar Impact",
        "plays": 52,
        "activeUsers": 4,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "Solar Impact - Trailer"
        ]
      },
      {
        "rank": 33,
        "program": "La Arca - Temporada 1",
        "plays": 52,
        "activeUsers": 1,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "Everybody Wins",
          "Everyone Wanted to Be On This Ship",
          "A Slow Death Is Worse"
        ]
      },
      {
        "rank": 34,
        "program": "William Shatner's: A Twist in the Tale",
        "plays": 52,
        "activeUsers": 4,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "William Shatner's: A Twist in the Tale - Obsession in August",
          "William Shatner's: A Twist in the Tale - A Crack in Time",
          "William Shatner's: A Twist in the Tale - The Anchoress"
        ]
      },
      {
        "rank": 35,
        "program": "In the Line of Duty",
        "plays": 50,
        "activeUsers": 2,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": [
          "A Cop for the Killing"
        ]
      },
      {
        "rank": 36,
        "program": "The Librarians: The Next Chapter Season 2 Teaser",
        "plays": 49,
        "activeUsers": 6,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 37,
        "program": "TIDPIX-AUTHENTICALLY AFRICAN",
        "plays": 44,
        "activeUsers": 4,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 38,
        "program": "Awake in the Woods",
        "plays": 42,
        "activeUsers": 6,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 39,
        "program": "Spoils of War",
        "plays": 37,
        "activeUsers": 4,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 40,
        "program": "Bed & Breakfast",
        "plays": 34,
        "activeUsers": 1,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 41,
        "program": "The Librarians and the Crown of King Arthur in Cinemascope",
        "plays": 34,
        "activeUsers": 6,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 42,
        "program": "Bonded In Blood",
        "plays": 34,
        "activeUsers": 3,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 43,
        "program": "Black Mamba",
        "plays": 33,
        "activeUsers": 3,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 44,
        "program": "The Librarian: Return to King Solomon's Mines",
        "plays": 31,
        "activeUsers": 4,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 45,
        "program": "Boxing Spotlight",
        "plays": 30,
        "activeUsers": 9,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 46,
        "program": "The Librarians: The Next Chapter Season 2",
        "plays": 29,
        "activeUsers": 7,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": [
          "And the Burning Heart"
        ]
      },
      {
        "rank": 47,
        "program": "Enigma",
        "plays": 27,
        "activeUsers": 2,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 48,
        "program": "Exile",
        "plays": 26,
        "activeUsers": 5,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 2,
        "examples": []
      },
      {
        "rank": 49,
        "program": "Black Fly",
        "plays": 25,
        "activeUsers": 2,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      },
      {
        "rank": 50,
        "program": "It’s What’s On the Inside",
        "plays": 23,
        "activeUsers": 1,
        "viewerMethod": "deduped_ga4_filter",
        "rawLabelCount": 1,
        "examples": []
      }
    ],
    "topVideoTitles": [
      {
        "rank": 1,
        "title": "Everyone Wanted to Be On This Ship",
        "plays": 2100,
        "activeUsers": 206,
        "group": "The Ark"
      },
      {
        "rank": 2,
        "title": "And the Deadly Drekavac",
        "plays": 1626,
        "activeUsers": 260,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 3,
        "title": "Like It Touched the Sun",
        "plays": 1477,
        "activeUsers": 73,
        "group": "The Ark"
      },
      {
        "rank": 4,
        "title": "We Weren't Supposed to Be Awake",
        "plays": 1281,
        "activeUsers": 60,
        "group": "The Ark"
      },
      {
        "rank": 5,
        "title": "Get Out and Push",
        "plays": 1199,
        "activeUsers": 61,
        "group": "The Ark"
      },
      {
        "rank": 6,
        "title": "It Will Be Over Soon",
        "plays": 1114,
        "activeUsers": 49,
        "group": "The Ark"
      },
      {
        "rank": 7,
        "title": "And the Dance of Doom!",
        "plays": 1070,
        "activeUsers": 144,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 8,
        "title": "I Told You Not to Come",
        "plays": 1064,
        "activeUsers": 65,
        "group": "The Ark"
      },
      {
        "rank": 9,
        "title": "Fortunate",
        "plays": 1057,
        "activeUsers": 68,
        "group": "The Ark"
      },
      {
        "rank": 10,
        "title": "And the Ghost Train",
        "plays": 1042,
        "activeUsers": 149,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 11,
        "title": "One Step Forward, Two Steps Back",
        "plays": 1014,
        "activeUsers": 59,
        "group": "The Ark"
      },
      {
        "rank": 12,
        "title": "Every Single Person Matters",
        "plays": 955,
        "activeUsers": 49,
        "group": "The Ark"
      },
      {
        "rank": 13,
        "title": "A Slow Death Is Worse",
        "plays": 920,
        "activeUsers": 54,
        "group": "The Ark"
      },
      {
        "rank": 14,
        "title": "And the Memory Crystal",
        "plays": 911,
        "activeUsers": 125,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 15,
        "title": "And the Thief of Love",
        "plays": 910,
        "activeUsers": 133,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 16,
        "title": "It Should Have Been You",
        "plays": 880,
        "activeUsers": 42,
        "group": "The Ark"
      },
      {
        "rank": 17,
        "title": "Failed Experiment",
        "plays": 869,
        "activeUsers": 56,
        "group": "The Ark"
      },
      {
        "rank": 18,
        "title": "And the House of Cards",
        "plays": 817,
        "activeUsers": 116,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 19,
        "title": "Two by Two",
        "plays": 802,
        "activeUsers": 57,
        "group": "The Ark"
      },
      {
        "rank": 20,
        "title": "Everybody Wins",
        "plays": 770,
        "activeUsers": 44,
        "group": "The Ark"
      },
      {
        "rank": 21,
        "title": "Kill or Be Killed",
        "plays": 766,
        "activeUsers": 39,
        "group": "The Ark"
      },
      {
        "rank": 22,
        "title": "Cycle of Violence",
        "plays": 733,
        "activeUsers": 36,
        "group": "The Ark"
      },
      {
        "rank": 23,
        "title": "The Painful Way",
        "plays": 722,
        "activeUsers": 44,
        "group": "The Ark"
      },
      {
        "rank": 24,
        "title": "The Last Thing You Ever Do",
        "plays": 706,
        "activeUsers": 40,
        "group": "The Ark"
      },
      {
        "rank": 25,
        "title": "Anomaly",
        "plays": 690,
        "activeUsers": 38,
        "group": "The Ark"
      },
      {
        "rank": 26,
        "title": "And the Graffiti of the Gods",
        "plays": 685,
        "activeUsers": 99,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 27,
        "title": "And the Con-Con",
        "plays": 667,
        "activeUsers": 111,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 28,
        "title": "And the Feast of the Vampir",
        "plays": 660,
        "activeUsers": 108,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 29,
        "title": "And the Unfinished Business",
        "plays": 645,
        "activeUsers": 115,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 30,
        "title": "And the Hangover from Hell",
        "plays": 632,
        "activeUsers": 103,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 31,
        "title": "It Can't Be True",
        "plays": 632,
        "activeUsers": 34,
        "group": "The Ark"
      },
      {
        "rank": 32,
        "title": "Pretty Big Deal",
        "plays": 620,
        "activeUsers": 37,
        "group": "The Ark"
      },
      {
        "rank": 33,
        "title": "Museum of Death",
        "plays": 616,
        "activeUsers": 38,
        "group": "The Ark"
      },
      {
        "rank": 34,
        "title": "Hoping for Forever",
        "plays": 591,
        "activeUsers": 39,
        "group": "The Ark"
      },
      {
        "rank": 35,
        "title": "And Going Medieval",
        "plays": 576,
        "activeUsers": 101,
        "group": "The Librarians: The Next Chapter"
      },
      {
        "rank": 36,
        "title": "The Other You",
        "plays": 558,
        "activeUsers": 38,
        "group": "The Ark"
      },
      {
        "rank": 37,
        "title": "The Weekend In Paris Job",
        "plays": 555,
        "activeUsers": 19,
        "group": "Leverage: Redemption"
      },
      {
        "rank": 38,
        "title": "We Don't Kill Our Own",
        "plays": 505,
        "activeUsers": 35,
        "group": "The Ark"
      },
      {
        "rank": 39,
        "title": "The Digital Frankenstein Job",
        "plays": 365,
        "activeUsers": 9,
        "group": "Leverage: Redemption"
      },
      {
        "rank": 40,
        "title": "The Ark - Trailer",
        "plays": 356,
        "activeUsers": 99,
        "group": ""
      },
      {
        "rank": 41,
        "title": "Episode 1",
        "plays": 286,
        "activeUsers": 21,
        "group": "The Messenger"
      },
      {
        "rank": 42,
        "title": "And the Crown of King Arthur",
        "plays": 278,
        "activeUsers": 33,
        "group": "The Librarians"
      },
      {
        "rank": 43,
        "title": "The Scared Stiff Job",
        "plays": 239,
        "activeUsers": 12,
        "group": "Leverage: Redemption"
      },
      {
        "rank": 44,
        "title": "The Nigerian Job (Pilot) - 43 Min Cut",
        "plays": 235,
        "activeUsers": 18,
        "group": "Leverage"
      },
      {
        "rank": 45,
        "title": "Finding Mabuhay",
        "plays": 229,
        "activeUsers": 21,
        "group": "Almost Paradise"
      },
      {
        "rank": 46,
        "title": "And the Horns of a Dilemma",
        "plays": 223,
        "activeUsers": 15,
        "group": "The Librarians"
      },
      {
        "rank": 47,
        "title": "TNT - The Librarians: The Next Chapter Season 2 Premieres Aug 2!",
        "plays": 221,
        "activeUsers": 86,
        "group": "The Librarians: The Next Chapter Season 2 Aug 2nd on TNT"
      },
      {
        "rank": 48,
        "title": "The Shakedown in Clone-Town Job",
        "plays": 218,
        "activeUsers": 5,
        "group": "Leverage: Redemption"
      },
      {
        "rank": 49,
        "title": "After the Ark - Season 3 Recap",
        "plays": 197,
        "activeUsers": 70,
        "group": "After the Ark"
      },
      {
        "rank": 50,
        "title": "Uncle Danny",
        "plays": 195,
        "activeUsers": 6,
        "group": "Almost Paradise"
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
      "range": "Jul 20-Jul 26, 2026",
      "activeUsers": 3510,
      "sessions": 9805,
      "engagedSessions": 7672,
      "engagementRate": 78.24579296277409,
      "totalEngagementSeconds": 19633662,
      "totalEngagementHours": 5453.795,
      "avgEngagedMinutesPerUser": 93.22726495726495,
      "avgEngagedMinutesPerSession": 33.373554309026005,
      "ga4AverageSessionMinutes": 43.76100970438382,
      "platformBreakout": [
        {
          "platform": "web",
          "activeUsers": 1343,
          "sessions": 5138,
          "engagedSessions": 3934,
          "avgEngagedMinutesPerUser": 110.25939439066767,
          "avgEngagedMinutesPerSession": 28.820234851433764,
          "ga4AverageSessionMinutes": 33.439344335704554
        },
        {
          "platform": "iOS",
          "activeUsers": 1195,
          "sessions": 2240,
          "engagedSessions": 1808,
          "avgEngagedMinutesPerUser": 77.15716875871688,
          "avgEngagedMinutesPerSession": 41.16197172619047,
          "ga4AverageSessionMinutes": 45.86524988973959
        },
        {
          "platform": "Android",
          "activeUsers": 972,
          "sessions": 2427,
          "engagedSessions": 1930,
          "avgEngagedMinutesPerUser": 89.45114883401921,
          "avgEngagedMinutesPerSession": 35.82468754291993,
          "ga4AverageSessionMinutes": 63.67004087417251
        }
      ],
      "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."
    },
    "currentWeek": {
      "range": "Jul 27-Aug 2, 2026",
      "activeUsers": 5592,
      "sessions": 14298,
      "engagedSessions": 11612,
      "engagementRate": 81.21415582598965,
      "totalEngagementSeconds": 23934320,
      "totalEngagementHours": 6648.422222222222,
      "avgEngagedMinutesPerUser": 71.3350023843586,
      "avgEngagedMinutesPerSession": 27.899379866648015,
      "ga4AverageSessionMinutes": 41.59797896258869,
      "platformBreakout": [
        {
          "platform": "web",
          "activeUsers": 2277,
          "sessions": 7098,
          "engagedSessions": 5468,
          "avgEngagedMinutesPerUser": 74.3329527155614,
          "avgEngagedMinutesPerSession": 23.845609091762938,
          "ga4AverageSessionMinutes": 29.357601966721962
        },
        {
          "platform": "Android",
          "activeUsers": 1713,
          "sessions": 3985,
          "engagedSessions": 3374,
          "avgEngagedMinutesPerUser": 69.54944541739637,
          "avgEngagedMinutesPerSession": 29.896662484316188,
          "ga4AverageSessionMinutes": 64.22469602804996
        },
        {
          "platform": "iOS",
          "activeUsers": 1602,
          "sessions": 3215,
          "engagedSessions": 2770,
          "avgEngagedMinutesPerUser": 68.98314606741573,
          "avgEngagedMinutesPerSession": 34.37356143079316,
          "ga4AverageSessionMinutes": 40.576121547596145
        }
      ],
      "note": "Platform time is based on GA4 userEngagementDuration across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Use this as the cleaner attention metric; GA4 average session duration is retained for context but may overstate streaming attention when sessions remain open."
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
      "definition": "GA4 active users across tracked ElectricNOW platform surfaces, excluding landing-page acquisition paths. Landing-page traffic is reported only as acquisition context and is not counted as platform audience. Reconcile with Amagi, app stores, ad servers, and platform dashboards before treating this as total company-wide audience.",
      "cards": [
        {
          "key": "platformActiveUsers",
          "label": "Platform active users",
          "baseline": 5172,
          "launchBaseline": 8709,
          "previousWeek": 4824,
          "current": 4708,
          "deltaPct": -2.404643449419569,
          "deltaVsLaunchPct": -44.631989895510394,
          "deltaVsPreviousPct": -6.767208043310132,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 active users on measured ElectricNOW platform surfaces; landing-page acquisition paths are not counted as platform audience.",
          "period": "Aug 17-Aug 23, 2026",
          "comparisonPeriod": "Aug 3-Aug 9, 2026",
          "currentWeek": 4708,
          "previous": 4824,
          "changePct": -2.404643449419569,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271"
        },
        {
          "key": "platformSessions",
          "label": "Platform sessions",
          "baseline": 13191,
          "launchBaseline": 13316,
          "previousWeek": 11803,
          "current": 11138,
          "deltaPct": -5.6341608065746,
          "deltaVsLaunchPct": -10.971763292279963,
          "deltaVsPreviousPct": -10.12811765597756,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 sessions on measured ElectricNOW platform surfaces; landing pages remain acquisition-only.",
          "period": "Aug 17-Aug 23, 2026",
          "comparisonPeriod": "Aug 3-Aug 9, 2026",
          "currentWeek": 11138,
          "previous": 11803,
          "changePct": -5.6341608065746,
          "direction": "down",
          "sourceLabel": "Internal GA4 pull, property 497892271"
        },
        {
          "key": "viewingEventUsers",
          "label": "Viewing event users",
          "baseline": 1909,
          "launchBaseline": 1155,
          "previousWeek": 1909,
          "current": 1848,
          "deltaPct": -3.1953902566788894,
          "deltaVsLaunchPct": 60,
          "deltaVsPreviousPct": -3.1953902566788894,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered on-demand video_start or Live play events."
        },
        {
          "key": "totalEngagementHours",
          "label": "Total engaged hours",
          "baseline": 6108.803055555555,
          "launchBaseline": 3652.9975,
          "previousWeek": 5937.52,
          "current": 6382.880277777777,
          "deltaPct": 7.500779412579273,
          "deltaVsLaunchPct": 84.80164425090477,
          "deltaVsPreviousPct": -2.8483530438837015,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 total engaged time converted to hours.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Aug 17-Aug 23, 2026",
          "comparisonPeriod": "Aug 3-Aug 9, 2026",
          "currentWeek": 6382.880277777777,
          "previous": 5937.52,
          "changePct": 7.500779412579273,
          "direction": "up",
          "sourceLabel": "Internal GA4 pull, property 497892271"
        },
        {
          "key": "avgEngagedMinutesPerUser",
          "label": "Avg time per user",
          "baseline": 70.86778486723382,
          "launchBaseline": 25.164161882893225,
          "previousWeek": 73.8497512437811,
          "current": 81.34511823845936,
          "deltaPct": 10.149481709065947,
          "deltaVsLaunchPct": 186.71576797744572,
          "deltaVsPreviousPct": 4.2033011316950315,
          "deltaType": "minutes",
          "format": "minutes",
          "context": "Total GA4 engaged time divided by active users.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Aug 17-Aug 23, 2026",
          "comparisonPeriod": "Aug 3-Aug 9, 2026",
          "currentWeek": 81.34511823845936,
          "previous": 73.8497512437811,
          "changePct": 10.149481709065947,
          "direction": "up",
          "sourceLabel": "Internal GA4 pull, property 497892271"
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
          "previousWeek": 1902,
          "current": 2775,
          "deltaPct": 45.89905362776025,
          "deltaVsLaunchPct": 79.37944408532644,
          "deltaVsPreviousPct": 45.89905362776025,
          "deltaType": "percent",
          "format": "number",
          "context": "People using the Apple/iOS or Android app streams; Apple TV is not yet split from the Apple/iOS stream."
        },
        {
          "key": "appSessions",
          "label": "App stream sessions",
          "baseline": 2889,
          "launchBaseline": 2889,
          "previousWeek": 4084,
          "current": 5977,
          "deltaPct": 46.35161606268364,
          "deltaVsLaunchPct": 106.88819660782278,
          "deltaVsPreviousPct": 46.35161606268364,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 sessions on the Apple/iOS and Android app streams."
        },
        {
          "key": "appEngagementRate",
          "label": "App stream engagement rate",
          "baseline": 80.96227068189685,
          "launchBaseline": 80.96227068189685,
          "previousWeek": 76.56709108716943,
          "current": 83.5201606156935,
          "deltaPct": 6.953069528524068,
          "deltaVsLaunchPct": 2.5578899337966448,
          "deltaVsPreviousPct": 6.953069528524068,
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
          "baseline": 1909,
          "launchBaseline": 1155,
          "previousWeek": 1909,
          "current": 1848,
          "deltaPct": -3.1953902566788894,
          "deltaVsLaunchPct": 60,
          "deltaVsPreviousPct": -3.1953902566788894,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered on-demand video_start or Live play events."
        },
        {
          "key": "onDemandStartUsers",
          "label": "On-demand start users",
          "baseline": 1889,
          "launchBaseline": 1069,
          "previousWeek": 1889,
          "current": 1814,
          "deltaPct": -3.970354685018528,
          "deltaVsLaunchPct": 69.6913002806361,
          "deltaVsPreviousPct": -3.970354685018528,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered video_start outside the Live screen."
        },
        {
          "key": "liveChannelViewers",
          "label": "Live channel viewers",
          "baseline": 359,
          "launchBaseline": 121,
          "previousWeek": 359,
          "current": 326,
          "deltaPct": -9.192200557103064,
          "deltaVsLaunchPct": 169.42148760330576,
          "deltaVsPreviousPct": -9.192200557103064,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered a Live play event."
        },
        {
          "key": "videoCompleteUsers",
          "label": "Video complete users",
          "baseline": 628,
          "launchBaseline": 219,
          "previousWeek": 628,
          "current": 593,
          "deltaPct": -5.573248407643312,
          "deltaVsLaunchPct": 170.77625570776257,
          "deltaVsPreviousPct": -5.573248407643312,
          "deltaType": "percent",
          "format": "number",
          "context": "Users who triggered video_complete."
        },
        {
          "key": "livePlayEvents",
          "label": "Live play events",
          "baseline": 68620,
          "launchBaseline": 3952,
          "previousWeek": 68620,
          "current": 74089,
          "deltaPct": 7.969979597784903,
          "deltaVsLaunchPct": 1774.7216599190285,
          "deltaVsPreviousPct": 7.969979597784903,
          "deltaType": "percent",
          "format": "number",
          "context": "Total Live play events, not unique users."
        },
        {
          "key": "adRequestEvents",
          "label": "Ad request events",
          "baseline": 35651,
          "launchBaseline": 10589,
          "previousWeek": 35651,
          "current": 36688,
          "deltaPct": 2.9087543126420017,
          "deltaVsLaunchPct": 246.47275474549062,
          "deltaVsPreviousPct": 2.9087543126420017,
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
          "baseline": 70.86778486723382,
          "launchBaseline": 25.164161882893225,
          "previousWeek": 73.8497512437811,
          "current": 81.34511823845936,
          "deltaPct": 10.149481709065947,
          "deltaVsLaunchPct": 186.71576797744572,
          "deltaVsPreviousPct": 4.2033011316950315,
          "deltaType": "minutes",
          "format": "minutes",
          "context": "Total GA4 engaged time divided by active users.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Aug 17-Aug 23, 2026",
          "comparisonPeriod": "Aug 3-Aug 9, 2026",
          "currentWeek": 81.34511823845936,
          "previous": 73.8497512437811,
          "changePct": 10.149481709065947,
          "direction": "up",
          "sourceLabel": "Internal GA4 pull, property 497892271"
        },
        {
          "key": "avgEngagedMinutesPerSession",
          "label": "Avg time per session",
          "baseline": 31.446588729016785,
          "launchBaseline": 16.45123845980635,
          "previousWeek": 31.446588729016785,
          "current": 25.049813149357316,
          "deltaPct": -20.341715391714196,
          "deltaVsLaunchPct": 52.267035764869576,
          "deltaVsPreviousPct": -20.341715391714196,
          "deltaType": "minutes",
          "format": "minutes",
          "context": "Total engaged time divided by sessions.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026"
        },
        {
          "key": "totalEngagementHours",
          "label": "Total engaged hours",
          "baseline": 6108.803055555555,
          "launchBaseline": 3652.9975,
          "previousWeek": 5937.52,
          "current": 6382.880277777777,
          "deltaPct": 7.500779412579273,
          "deltaVsLaunchPct": 84.80164425090477,
          "deltaVsPreviousPct": -2.8483530438837015,
          "deltaType": "percent",
          "format": "number",
          "context": "GA4 total engaged time converted to hours.",
          "baselineSource": "GA4 property 497892271 launch week, Apr 13-Apr 19, 2026",
          "period": "Aug 17-Aug 23, 2026",
          "comparisonPeriod": "Aug 3-Aug 9, 2026",
          "currentWeek": 6382.880277777777,
          "previous": 5937.52,
          "changePct": 7.500779412579273,
          "direction": "up",
          "sourceLabel": "Internal GA4 pull, property 497892271"
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
      "range": "Jul 20-Jul 26, 2026",
      "rows": [
        {
          "surface": "iOS / Apple app stream",
          "streamName": "ElectricNow",
          "streamId": "12982344897",
          "platform": "iOS",
          "activeUsers": 1195,
          "sessions": 2240,
          "engagedSessions": 1808,
          "eventCount": 86730,
          "engagementRate": 80.71428571428572,
          "avgEngagedMinutesPerUser": 77.15716875871688,
          "avgEngagedMinutesPerSession": 41.16197172619047
        },
        {
          "surface": "Roku",
          "streamName": "electricnow-roku",
          "streamId": "13096428368",
          "platform": "web",
          "activeUsers": 1062,
          "sessions": 4043,
          "engagedSessions": 3337,
          "eventCount": 723937,
          "engagementRate": 82.53771951521148,
          "avgEngagedMinutesPerUser": 125.13841807909604,
          "avgEngagedMinutesPerSession": 32.87088795448924
        },
        {
          "surface": "Android mobile app",
          "streamName": "ElectricNOW",
          "streamId": "12950551103",
          "platform": "Android",
          "activeUsers": 707,
          "sessions": 1787,
          "engagedSessions": 1309,
          "eventCount": 86734,
          "engagementRate": 73.25125909345272,
          "avgEngagedMinutesPerUser": 30.907024988213106,
          "avgEngagedMinutesPerSession": 12.22790524155941
        },
        {
          "surface": "Web",
          "streamName": "electricnow-web",
          "streamId": "13090831762",
          "platform": "web",
          "activeUsers": 315,
          "sessions": 870,
          "engagedSessions": 651,
          "eventCount": 39493,
          "engagementRate": 74.82758620689656,
          "avgEngagedMinutesPerUser": 48.440899470899474,
          "avgEngagedMinutesPerSession": 17.538946360153258
        },
        {
          "surface": "Android TV / CTV",
          "streamName": "ElectricNOW tv",
          "streamId": "13118400722",
          "platform": "Android",
          "activeUsers": 265,
          "sessions": 637,
          "engagedSessions": 618,
          "eventCount": 74413,
          "engagementRate": 97.01726844583987,
          "avgEngagedMinutesPerUser": 245.6424528301887,
          "avgEngagedMinutesPerSession": 102.1903453689168
        },
        {
          "surface": "LG / webOS",
          "streamName": "electricnow-webos",
          "streamId": "12976053175",
          "platform": "web",
          "activeUsers": 0,
          "sessions": 360,
          "engagedSessions": 0,
          "eventCount": 6170,
          "engagementRate": 0,
          "avgEngagedMinutesPerUser": 0,
          "avgEngagedMinutesPerSession": 0
        }
      ],
      "note": "Surface rows come from GA4 streamName/streamId. The headline total measured audience is deduped at the property level; surface rows may not dedupe the same person across multiple surfaces."
    },
    "currentWeek": {
      "range": "Jul 27-Aug 2, 2026",
      "rows": [
        {
          "surface": "iOS / Apple app stream",
          "streamName": "ElectricNow",
          "streamId": "12982344897",
          "platform": "iOS",
          "activeUsers": 1603,
          "sessions": 3242,
          "engagedSessions": 2782,
          "eventCount": 123202,
          "engagementRate": 85.81122763726094,
          "avgEngagedMinutesPerUser": 68.86723851112497,
          "avgEngagedMinutesPerSession": 34.05125951059017
        },
        {
          "surface": "Roku",
          "streamName": "electricnow-roku",
          "streamId": "13096428368",
          "platform": "web",
          "activeUsers": 1426,
          "sessions": 4757,
          "engagedSessions": 3896,
          "eventCount": 737360,
          "engagementRate": 81.90035736808913,
          "avgEngagedMinutesPerUser": 93.82363253856943,
          "avgEngagedMinutesPerSession": 28.125394155980658
        },
        {
          "surface": "Android mobile app",
          "streamName": "ElectricNOW",
          "streamId": "12950551103",
          "platform": "Android",
          "activeUsers": 1172,
          "sessions": 2746,
          "engagedSessions": 2191,
          "eventCount": 113531,
          "engagementRate": 79.78878368536051,
          "avgEngagedMinutesPerUser": 25.64189419795222,
          "avgEngagedMinutesPerSession": 10.94402767662054
        },
        {
          "surface": "Web",
          "streamName": "electricnow-web",
          "streamId": "13090831762",
          "platform": "web",
          "activeUsers": 961,
          "sessions": 2053,
          "engagedSessions": 1623,
          "eventCount": 88509,
          "engagementRate": 79.05504140282514,
          "avgEngagedMinutesPerUser": 37.14323621227888,
          "avgEngagedMinutesPerSession": 17.386580613735994
        },
        {
          "surface": "Android TV / CTV",
          "streamName": "ElectricNOW tv",
          "streamId": "13118400722",
          "platform": "Android",
          "activeUsers": 540,
          "sessions": 1230,
          "engagedSessions": 1158,
          "eventCount": 108936,
          "engagementRate": 94.14634146341463,
          "avgEngagedMinutesPerUser": 164.1920061728395,
          "avgEngagedMinutesPerSession": 72.08429539295393
        },
        {
          "surface": "Samsung / Tizen",
          "streamName": "electricnow-tizen",
          "streamId": "12976057441",
          "platform": "web",
          "activeUsers": 0,
          "sessions": 5,
          "engagedSessions": 0,
          "eventCount": 22,
          "engagementRate": 0,
          "avgEngagedMinutesPerUser": 0,
          "avgEngagedMinutesPerSession": 0
        },
        {
          "surface": "LG / webOS",
          "streamName": "electricnow-webos",
          "streamId": "12976053175",
          "platform": "web",
          "activeUsers": 0,
          "sessions": 550,
          "engagedSessions": 0,
          "eventCount": 6958,
          "engagementRate": 0,
          "avgEngagedMinutesPerUser": 0,
          "avgEngagedMinutesPerSession": 0
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
    "period": "Aug 17-Aug 23, 2026",
    "previousPeriod": "Aug 10-Aug 16, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "activeUsers": 935,
        "newUsers": 226,
        "sessions": 1651,
        "engagedSessions": 1355,
        "engagementRate": 82.07147183525136,
        "screenPageViews": 8598,
        "eventCount": 139352,
        "userEngagementDuration": 2783276,
        "totalEngagementHours": 773.1322222222223,
        "date": "2026-08-17",
        "label": "Aug 17"
      },
      {
        "activeUsers": 895,
        "newUsers": 211,
        "sessions": 1611,
        "engagedSessions": 1334,
        "engagementRate": 82.80571073867164,
        "screenPageViews": 9744,
        "eventCount": 135794,
        "userEngagementDuration": 3062917,
        "totalEngagementHours": 850.8102777777777,
        "date": "2026-08-18",
        "label": "Aug 18"
      },
      {
        "activeUsers": 935,
        "newUsers": 233,
        "sessions": 1574,
        "engagedSessions": 1304,
        "engagementRate": 82.84625158831004,
        "screenPageViews": 8230,
        "eventCount": 131383,
        "userEngagementDuration": 2767268,
        "totalEngagementHours": 768.6855555555555,
        "date": "2026-08-19",
        "label": "Aug 19"
      },
      {
        "activeUsers": 892,
        "newUsers": 195,
        "sessions": 1519,
        "engagedSessions": 1276,
        "engagementRate": 84.00263331138908,
        "screenPageViews": 7760,
        "eventCount": 129131,
        "userEngagementDuration": 3017562,
        "totalEngagementHours": 838.2116666666667,
        "date": "2026-08-20",
        "label": "Aug 20"
      },
      {
        "activeUsers": 896,
        "newUsers": 235,
        "sessions": 1505,
        "engagedSessions": 1221,
        "engagementRate": 81.12956810631229,
        "screenPageViews": 7809,
        "eventCount": 132849,
        "userEngagementDuration": 3006562,
        "totalEngagementHours": 835.1561111111112,
        "date": "2026-08-21",
        "label": "Aug 21"
      },
      {
        "activeUsers": 908,
        "newUsers": 246,
        "sessions": 1542,
        "engagedSessions": 1232,
        "engagementRate": 79.89623865110246,
        "screenPageViews": 7979,
        "eventCount": 131722,
        "userEngagementDuration": 3030293,
        "totalEngagementHours": 841.7480555555555,
        "date": "2026-08-22",
        "label": "Aug 22"
      },
      {
        "activeUsers": 1240,
        "newUsers": 262,
        "sessions": 2247,
        "engagedSessions": 504,
        "engagementRate": 22.429906542056074,
        "screenPageViews": 8912,
        "eventCount": 275916,
        "userEngagementDuration": 5310491,
        "totalEngagementHours": 1475.1363888888889,
        "date": "2026-08-23",
        "label": "Aug 23"
      }
    ],
    "previousRows": [
      {
        "activeUsers": 1091,
        "newUsers": 329,
        "sessions": 1939,
        "engagedSessions": 1543,
        "engagementRate": 79.57710159876224,
        "screenPageViews": 6945,
        "eventCount": 159264,
        "userEngagementDuration": 2954567,
        "totalEngagementHours": 820.7130555555556,
        "date": "2026-08-10",
        "label": "Aug 10"
      },
      {
        "activeUsers": 936,
        "newUsers": 237,
        "sessions": 1649,
        "engagedSessions": 1309,
        "engagementRate": 79.38144329896907,
        "screenPageViews": 5727,
        "eventCount": 153520,
        "userEngagementDuration": 3059200,
        "totalEngagementHours": 849.7777777777778,
        "date": "2026-08-11",
        "label": "Aug 11"
      },
      {
        "activeUsers": 928,
        "newUsers": 195,
        "sessions": 1683,
        "engagedSessions": 1363,
        "engagementRate": 80.9863339275104,
        "screenPageViews": 6151,
        "eventCount": 147891,
        "userEngagementDuration": 2781220,
        "totalEngagementHours": 772.5611111111111,
        "date": "2026-08-12",
        "label": "Aug 12"
      },
      {
        "activeUsers": 897,
        "newUsers": 215,
        "sessions": 1609,
        "engagedSessions": 1292,
        "engagementRate": 80.2983219390926,
        "screenPageViews": 6024,
        "eventCount": 153551,
        "userEngagementDuration": 2739038,
        "totalEngagementHours": 760.8438888888888,
        "date": "2026-08-13",
        "label": "Aug 13"
      },
      {
        "activeUsers": 965,
        "newUsers": 257,
        "sessions": 1716,
        "engagedSessions": 1366,
        "engagementRate": 79.6037296037296,
        "screenPageViews": 6576,
        "eventCount": 151107,
        "userEngagementDuration": 3219119,
        "totalEngagementHours": 894.1997222222222,
        "date": "2026-08-14",
        "label": "Aug 14"
      },
      {
        "activeUsers": 962,
        "newUsers": 283,
        "sessions": 1623,
        "engagedSessions": 1280,
        "engagementRate": 78.86629698089956,
        "screenPageViews": 7225,
        "eventCount": 156225,
        "userEngagementDuration": 3101483,
        "totalEngagementHours": 861.5230555555555,
        "date": "2026-08-15",
        "label": "Aug 15"
      },
      {
        "activeUsers": 985,
        "newUsers": 266,
        "sessions": 1688,
        "engagedSessions": 1393,
        "engagementRate": 82.52369668246445,
        "screenPageViews": 8599,
        "eventCount": 156627,
        "userEngagementDuration": 3520445,
        "totalEngagementHours": 977.9013888888888,
        "date": "2026-08-16",
        "label": "Aug 16"
      }
    ],
    "note": "GA4 property 497892271 only. Landing-page traffic is treated as acquisition only, not platform audience."
  },
  "monthlyTrend": {
    "period": "Jul 27-Aug 23, 2026",
    "previousPeriod": "Jun 29-Jul 26, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "activeUsers": 790,
        "sessions": 1489,
        "engagedSessions": 1247,
        "screenPageViews": 5227,
        "eventCount": 149202,
        "userEngagementDuration": 3096982,
        "totalEngagementHours": 860.2727777777778,
        "date": "2026-07-27",
        "label": "Jul 27"
      },
      {
        "activeUsers": 1049,
        "sessions": 1883,
        "engagedSessions": 1477,
        "screenPageViews": 6626,
        "eventCount": 166714,
        "userEngagementDuration": 3224441,
        "totalEngagementHours": 895.6780555555556,
        "date": "2026-07-28",
        "label": "Jul 28"
      },
      {
        "activeUsers": 1229,
        "sessions": 2242,
        "engagedSessions": 1849,
        "screenPageViews": 9000,
        "eventCount": 176500,
        "userEngagementDuration": 3210950,
        "totalEngagementHours": 891.9305555555555,
        "date": "2026-07-29",
        "label": "Jul 29"
      },
      {
        "activeUsers": 1670,
        "sessions": 2869,
        "engagedSessions": 2346,
        "screenPageViews": 11016,
        "eventCount": 172213,
        "userEngagementDuration": 3455247,
        "totalEngagementHours": 959.7908333333334,
        "date": "2026-07-30",
        "label": "Jul 30"
      },
      {
        "activeUsers": 1173,
        "sessions": 2146,
        "engagedSessions": 1698,
        "screenPageViews": 7732,
        "eventCount": 167365,
        "userEngagementDuration": 3478837,
        "totalEngagementHours": 966.3436111111112,
        "date": "2026-07-31",
        "label": "Jul 31"
      },
      {
        "activeUsers": 1052,
        "sessions": 1907,
        "engagedSessions": 1541,
        "screenPageViews": 7123,
        "eventCount": 172795,
        "userEngagementDuration": 3742298,
        "totalEngagementHours": 1039.5272222222222,
        "date": "2026-08-01",
        "label": "Aug 1"
      },
      {
        "activeUsers": 1207,
        "sessions": 2217,
        "engagedSessions": 1695,
        "screenPageViews": 7326,
        "eventCount": 174517,
        "userEngagementDuration": 3736900,
        "totalEngagementHours": 1038.0277777777778,
        "date": "2026-08-02",
        "label": "Aug 2"
      },
      {
        "activeUsers": 1245,
        "sessions": 2272,
        "engagedSessions": 1786,
        "screenPageViews": 8030,
        "eventCount": 168153,
        "userEngagementDuration": 3658729,
        "totalEngagementHours": 1016.3136111111111,
        "date": "2026-08-03",
        "label": "Aug 3"
      },
      {
        "activeUsers": 1056,
        "sessions": 1884,
        "engagedSessions": 1471,
        "screenPageViews": 7000,
        "eventCount": 155989,
        "userEngagementDuration": 3181274,
        "totalEngagementHours": 883.6872222222222,
        "date": "2026-08-04",
        "label": "Aug 4"
      },
      {
        "activeUsers": 1074,
        "sessions": 1968,
        "engagedSessions": 1565,
        "screenPageViews": 6733,
        "eventCount": 143873,
        "userEngagementDuration": 2895271,
        "totalEngagementHours": 804.2419444444445,
        "date": "2026-08-05",
        "label": "Aug 5"
      },
      {
        "activeUsers": 1074,
        "sessions": 1878,
        "engagedSessions": 1469,
        "screenPageViews": 6724,
        "eventCount": 157118,
        "userEngagementDuration": 3251852,
        "totalEngagementHours": 903.2922222222222,
        "date": "2026-08-06",
        "label": "Aug 6"
      },
      {
        "activeUsers": 920,
        "sessions": 1619,
        "engagedSessions": 1315,
        "screenPageViews": 5484,
        "eventCount": 146056,
        "userEngagementDuration": 2983777,
        "totalEngagementHours": 828.8269444444444,
        "date": "2026-08-07",
        "label": "Aug 7"
      },
      {
        "activeUsers": 978,
        "sessions": 1707,
        "engagedSessions": 1399,
        "screenPageViews": 6000,
        "eventCount": 152115,
        "userEngagementDuration": 2905018,
        "totalEngagementHours": 806.9494444444445,
        "date": "2026-08-08",
        "label": "Aug 8"
      },
      {
        "activeUsers": 1035,
        "sessions": 1771,
        "engagedSessions": 1400,
        "screenPageViews": 5321,
        "eventCount": 151555,
        "userEngagementDuration": 3115770,
        "totalEngagementHours": 865.4916666666667,
        "date": "2026-08-09",
        "label": "Aug 9"
      },
      {
        "activeUsers": 1091,
        "sessions": 1939,
        "engagedSessions": 1543,
        "screenPageViews": 6945,
        "eventCount": 159264,
        "userEngagementDuration": 2954567,
        "totalEngagementHours": 820.7130555555556,
        "date": "2026-08-10",
        "label": "Aug 10"
      },
      {
        "activeUsers": 936,
        "sessions": 1649,
        "engagedSessions": 1309,
        "screenPageViews": 5727,
        "eventCount": 153520,
        "userEngagementDuration": 3059200,
        "totalEngagementHours": 849.7777777777778,
        "date": "2026-08-11",
        "label": "Aug 11"
      },
      {
        "activeUsers": 928,
        "sessions": 1683,
        "engagedSessions": 1363,
        "screenPageViews": 6151,
        "eventCount": 147891,
        "userEngagementDuration": 2781220,
        "totalEngagementHours": 772.5611111111111,
        "date": "2026-08-12",
        "label": "Aug 12"
      },
      {
        "activeUsers": 897,
        "sessions": 1609,
        "engagedSessions": 1292,
        "screenPageViews": 6024,
        "eventCount": 153551,
        "userEngagementDuration": 2739038,
        "totalEngagementHours": 760.8438888888888,
        "date": "2026-08-13",
        "label": "Aug 13"
      },
      {
        "activeUsers": 965,
        "sessions": 1716,
        "engagedSessions": 1366,
        "screenPageViews": 6576,
        "eventCount": 151107,
        "userEngagementDuration": 3219119,
        "totalEngagementHours": 894.1997222222222,
        "date": "2026-08-14",
        "label": "Aug 14"
      },
      {
        "activeUsers": 962,
        "sessions": 1623,
        "engagedSessions": 1280,
        "screenPageViews": 7225,
        "eventCount": 156225,
        "userEngagementDuration": 3101483,
        "totalEngagementHours": 861.5230555555555,
        "date": "2026-08-15",
        "label": "Aug 15"
      },
      {
        "activeUsers": 985,
        "sessions": 1688,
        "engagedSessions": 1393,
        "screenPageViews": 8599,
        "eventCount": 156627,
        "userEngagementDuration": 3520445,
        "totalEngagementHours": 977.9013888888888,
        "date": "2026-08-16",
        "label": "Aug 16"
      },
      {
        "activeUsers": 935,
        "sessions": 1651,
        "engagedSessions": 1355,
        "screenPageViews": 8598,
        "eventCount": 139352,
        "userEngagementDuration": 2783276,
        "totalEngagementHours": 773.1322222222223,
        "date": "2026-08-17",
        "label": "Aug 17"
      },
      {
        "activeUsers": 895,
        "sessions": 1611,
        "engagedSessions": 1334,
        "screenPageViews": 9744,
        "eventCount": 135794,
        "userEngagementDuration": 3062917,
        "totalEngagementHours": 850.8102777777777,
        "date": "2026-08-18",
        "label": "Aug 18"
      },
      {
        "activeUsers": 935,
        "sessions": 1574,
        "engagedSessions": 1304,
        "screenPageViews": 8230,
        "eventCount": 131383,
        "userEngagementDuration": 2767268,
        "totalEngagementHours": 768.6855555555555,
        "date": "2026-08-19",
        "label": "Aug 19"
      },
      {
        "activeUsers": 892,
        "sessions": 1519,
        "engagedSessions": 1276,
        "screenPageViews": 7760,
        "eventCount": 129131,
        "userEngagementDuration": 3017562,
        "totalEngagementHours": 838.2116666666667,
        "date": "2026-08-20",
        "label": "Aug 20"
      },
      {
        "activeUsers": 896,
        "sessions": 1505,
        "engagedSessions": 1221,
        "screenPageViews": 7809,
        "eventCount": 132849,
        "userEngagementDuration": 3006562,
        "totalEngagementHours": 835.1561111111112,
        "date": "2026-08-21",
        "label": "Aug 21"
      },
      {
        "activeUsers": 908,
        "sessions": 1542,
        "engagedSessions": 1232,
        "screenPageViews": 7979,
        "eventCount": 131722,
        "userEngagementDuration": 3030293,
        "totalEngagementHours": 841.7480555555555,
        "date": "2026-08-22",
        "label": "Aug 22"
      },
      {
        "activeUsers": 1240,
        "sessions": 2247,
        "engagedSessions": 504,
        "screenPageViews": 8912,
        "eventCount": 275916,
        "userEngagementDuration": 5310491,
        "totalEngagementHours": 1475.1363888888889,
        "date": "2026-08-23",
        "label": "Aug 23"
      }
    ],
    "note": "Rolling 28 complete days from GA4 property 497892271. Landing-page traffic remains acquisition-only, not platform audience."
  },
  "appSectionUsage": {
    "period": "Aug 3-Aug 9, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "items": [
      {
        "section": "On Demand / TVOD",
        "views": 15332,
        "activeUsers": 3132,
        "sessions": 8917,
        "engagedHours": 188.26,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 3-Aug 9, 2026",
        "note": "GA4 screen/page grouping; landing-page acquisition is not counted as platform audience."
      },
      {
        "section": "Home / App Entry",
        "views": 13535,
        "activeUsers": 8112,
        "sessions": 20067,
        "engagedHours": 3584.98,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 3-Aug 9, 2026",
        "note": "GA4 screen/page grouping; landing-page acquisition is not counted as platform audience."
      },
      {
        "section": "Live TV",
        "views": 6949,
        "activeUsers": 673,
        "sessions": 3808,
        "engagedHours": 1991.83,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 3-Aug 9, 2026",
        "note": "GA4 screen/page grouping; landing-page acquisition is not counted as platform audience."
      },
      {
        "section": "Other App / Web Screens",
        "views": 6538,
        "activeUsers": 2965,
        "sessions": 4412,
        "engagedHours": 328.39,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 3-Aug 9, 2026",
        "note": "GA4 screen/page grouping; landing-page acquisition is not counted as platform audience."
      },
      {
        "section": "Search / Discovery",
        "views": 2176,
        "activeUsers": 750,
        "sessions": 1102,
        "engagedHours": 8.32,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 3-Aug 9, 2026",
        "note": "GA4 screen/page grouping; landing-page acquisition is not counted as platform audience."
      },
      {
        "section": "Account / Settings",
        "views": 755,
        "activeUsers": 393,
        "sessions": 496,
        "engagedHours": 2.12,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 3-Aug 9, 2026",
        "note": "GA4 screen/page grouping; landing-page acquisition is not counted as platform audience."
      }
    ],
    "note": "Grouped from GA4 screen/page names. Landing-page traffic is treated as acquisition and not platform audience."
  },
  "rokuAppEngagement": {
    "newInstalls": 267,
    "uninstalls": 111,
    "cumulativeInstalls": 290899,
    "avgDailyViewers": 418,
    "avgMinutesPerViewer": 76.52,
    "avgMinPerViewer": 76.52,
    "totalHoursStreamed": 3729,
    "period": "Aug 9-Aug 15, 2026 (Roku email generated Aug 17, 2026 7:25 AM PDT)",
    "source": "Roku App Engagement email from bdp_noreply@data.roku.com",
    "emailDate": "2026-08-17T14:26:07+00:00",
    "status": "stale_preserved_attachment_unavailable",
    "note": "Roku App Engagement is separate from GA4 and should be read as Roku-side app engagement, not total ElectricNOW platform usage.",
    "staleNote": "Aug 24 Outlook search found Roku App Engagement emails, but attachments were unavailable in the connector result. Preserved Aug 17 app engagement values and labeled stale.",
    "trcExclusionNote": "Roku TRC emails are for the separate Roku live-channel surface outside the ElectricNOW app and are excluded from app/platform usage."
  },
  "visitSummary": {
    "currentWeek": {
      "activeUsers": 4708,
      "newUsers": 1608,
      "sessions": 11138,
      "engagedSessions": 8122,
      "engagementRate": 72.9215298976477,
      "screenPageViews": 59032,
      "eventCount": 1076141,
      "userEngagementDuration": 22978369,
      "totalEngagementHours": 6382.880277777777,
      "avgEngagedMinutesPerUser": 81.34511823845936,
      "avgEngagedMinutesPerSession": 34.38434338899862
    },
    "previousWeek": {
      "activeUsers": 4824,
      "newUsers": 1782,
      "sessions": 11803,
      "engagedSessions": 9515,
      "engagementRate": 80.61509785647716,
      "screenPageViews": 47247,
      "eventCount": 1078185,
      "userEngagementDuration": 21375072,
      "totalEngagementHours": 5937.52,
      "avgEngagedMinutesPerUser": 73.8497512437811,
      "avgEngagedMinutesPerSession": 30.18310599000254
    },
    "rolling28Current": {
      "activeUsers": 15355,
      "newUsers": 8416,
      "sessions": 50350,
      "engagedSessions": 40165,
      "engagementRate": 79.77159880834161,
      "screenPageViews": 205621,
      "eventCount": 4408491,
      "userEngagementDuration": 90290787,
      "totalEngagementHours": 25080.774166666666,
      "avgEngagedMinutesPerUser": 98.00367632692934,
      "avgEngagedMinutesPerSession": 29.887714995034756
    },
    "rolling28Previous": {
      "activeUsers": 11387,
      "newUsers": 4892,
      "sessions": 38997,
      "engagedSessions": 30395,
      "engagementRate": 77.94189296612561,
      "screenPageViews": 127781,
      "eventCount": 3995702,
      "userEngagementDuration": 81946428,
      "totalEngagementHours": 22762.896666666667,
      "avgEngagedMinutesPerUser": 119.94149468692369,
      "avgEngagedMinutesPerSession": 35.02253506680001
    },
    "source": "Internal GA4 pull, property 497892271",
    "period": "Aug 17-Aug 23, 2026"
  },
  "manualAppleSalesUpdate": {
    "downloads": 528,
    "displayDownloads": "528",
    "updates": null,
    "displayUpdates": null,
    "inAppUnits": null,
    "totalUnits": 528,
    "dailyAverage": 75,
    "start": "2026-08-17",
    "end": "2026-08-23",
    "period": "Aug 17-Aug 23, 2026",
    "priorDownloads": 528,
    "priorPeriod": "Aug 17-Aug 23, 2026",
    "deltaPct": 0.0,
    "product": "ElectricNOW",
    "platform": "iOS/watchOS/tvOS (+ macOS categories at 0)",
    "territories": [
      {
        "territory": "United States",
        "downloads": 528,
        "deltaPct": null
      }
    ],
    "sourceLabel": "Manual Apple App Store Connect snapshot",
    "sourceDetail": "User-provided App Store Connect screenshots for Free iOS/watchOS/tvOS downloads and aggregate gross sales. App downloads are not paid sales and not GA4 active users.",
    "sourceScreenshots": [
      {
        "metric": "sales",
        "path": "uploaded_attachments/37ca4a2c4b7246889e4835539f4ad2be/image.jpeg"
      },
      {
        "metric": "downloads",
        "path": "uploaded_attachments/37ca4a2c4b7246889e4835539f4ad2be/image-1.jpeg"
      }
    ],
    "salesGross": 477.78,
    "salesEstimatedNet70Pct": 334.45,
    "salesDaily": [
      {
        "date": "2026-08-17",
        "label": "Aug 17",
        "gross": 146.93
      },
      {
        "date": "2026-08-18",
        "label": "Aug 18",
        "gross": 20.99
      },
      {
        "date": "2026-08-19",
        "label": "Aug 19",
        "gross": 44.97
      },
      {
        "date": "2026-08-20",
        "label": "Aug 20",
        "gross": 41.98
      },
      {
        "date": "2026-08-21",
        "label": "Aug 21",
        "gross": 104.95
      },
      {
        "date": "2026-08-22",
        "label": "Aug 22",
        "gross": 20.99
      },
      {
        "date": "2026-08-23",
        "label": "Aug 23",
        "gross": 96.97
      }
    ],
    "downloadsDaily": [
      {
        "date": "2026-08-17",
        "label": "Aug 17",
        "downloads": 71
      },
      {
        "date": "2026-08-18",
        "label": "Aug 18",
        "downloads": 80
      },
      {
        "date": "2026-08-19",
        "label": "Aug 19",
        "downloads": 71
      },
      {
        "date": "2026-08-20",
        "label": "Aug 20",
        "downloads": 81
      },
      {
        "date": "2026-08-21",
        "label": "Aug 21",
        "downloads": 81
      },
      {
        "date": "2026-08-22",
        "label": "Aug 22",
        "downloads": 66
      },
      {
        "date": "2026-08-23",
        "label": "Aug 23",
        "downloads": 78
      }
    ],
    "salesDeltaPct": 0.0,
    "updatedAtUtc": "2026-08-24T14:50:00-07:00",
    "note": "Manual Apple Connect screenshots for Aug 17-Aug 23, 2026. Sales screenshot totals $477.78 gross; download screenshot totals 528 downloads. Prior Apple snapshots are preserved and not overwritten."
  },
  "googleAdsSummary": {
    "source": "Google Ads connector",
    "accountId": "4342267711",
    "customerClientId": "4342267711",
    "accountName": "Electric Entertainment",
    "period": "Jul 31-Aug 6, 2026",
    "campaignName": "PCSM - ElectricNow App Promotion - Android",
    "campaignId": "23836266606",
    "campaignType": "MULTI_CHANNEL",
    "status": "stale_metrics_preserved_campaign_inventory_only",
    "impressions": 10424,
    "clicks": 304,
    "ctrPct": 2.916346891788181,
    "cost": 66.47,
    "avgCpc": 0.21865670065789475,
    "conversions": 124,
    "allConversions": 235,
    "conversionRatePct": 40.78947368421053,
    "costPerConversion": 0.5360615887096775,
    "daily": [
      {
        "date": "2026-06-01",
        "device": "2026-06-01",
        "cost": 14.011478,
        "impressions": 2071,
        "clicks": 69,
        "conversions": 28,
        "allConversions": 56,
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
        "conversions": 30,
        "allConversions": 55,
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
        "conversions": 29,
        "allConversions": 55,
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
        "conversions": 30,
        "allConversions": 59,
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
        "conversions": 7,
        "allConversions": 10,
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
        "conversions": 97,
        "allConversions": 189,
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
        "conversions": 27,
        "allConversions": 46,
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
        "conversions": 0,
        "allConversions": 0,
        "ctrPct": 0,
        "avgCpc": null,
        "costPerConversion": null
      }
    ],
    "conversionActions": [
      {
        "campaign": "PCSM - ElectricNow App Promotion - Android",
        "conversionAction": "electricnow-4fbb4 - com.electric.now (Android) First open",
        "conversions": 124,
        "allConversions": 136
      },
      {
        "campaign": "PCSM - ElectricNow App Promotion - Android",
        "conversionAction": "Android installs (all other apps)",
        "conversions": 0,
        "allConversions": 99
      }
    ],
    "plainEnglish": "Google Ads could not be refreshed this run because the connector is using deprecated API version v21. Treat displayed Google Ads numbers as stale until the connector is updated or repaired.",
    "dataFreshnessNote": "Google Ads connector failed during the Aug 7 refresh because it is calling deprecated Google Ads API version v21. Last-good values are preserved and this section is marked stale; values were not zeroed.",
    "statusDetail": "error:\nAxiosError - Request failed with status code 400: {\"error\":{\"code\":400,\"message\":\"Request contains an invalid argument.\",\"status\":\"INVALID_ARGUMENT\",\"details\":[{\"@type\":\"type.googleapis.com/google.ads.googleads.v21.errors.GoogleAdsFailure\",\"errors\":[{\"errorCode\":{\"requestError\":\"UNSUPPORTED_VERSION\"},\"message\":\"Version v21 is deprecated. Requests to this version will be blocked.\"}],\"requestId\":\"iKGBQpFPkiFbGyHDrD740Q\"}]}}",
    "lastSuccessfulPull": "2026-06-11 14:40 PDT",
    "staleNote": "Aug 24 Google Ads connector returned campaign inventory only, not performance metrics; previous paid-efficiency metrics are preserved and not represented as fresh.",
    "latestQueryPeriod": "Jul 31-Aug 6, 2026",
    "latestQueryStatus": "FAILED_UNSUPPORTED_VERSION",
    "latestQueryNote": "Google Ads campaign report (customer 4342267711) returned zero rows for Jul 6-12, 2026 - no active campaign spend/impressions/clicks in the window. The connector is CONNECTED; this is a genuine no-spend week, not a failure.",
    "currentPeriod": {
      "period": "Jul 30-Aug 5, 2026",
      "spend": 0,
      "impressions": 0,
      "clicks": 0,
      "conversions": 0,
      "allConversions": 0
    },
    "freshness": "Preserved prior Google Ads values. Aug 17 connector retry failed with UNSUPPORTED_VERSION because the connector uses deprecated API v21.",
    "attemptedPeriod": "Aug 3-Aug 9, 2026",
    "sourceStatus": "stale_connector_error",
    "updatedAt": "2026-08-17T12:30:00-07:00"
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
      "firstOpenConversions": 443,
      "allConversions": 967,
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
      "costPerDownload": 0,
      "iosDownloads": 0,
      "androidDownloads": 1,
      "source": "Nathan / Forge One Meta email report",
      "note": "Meta spent only $40.80 for Jul 2-Jul 8, 2026 (-97.3% vs the prior period) on a single iOS-only campaign driving 23 iOS installs at $1.77 each (CPC $0.15). The campaign was almost fully paused this week. Treat as an acquisition-efficiency signal only. Paid-campaign impressions (2,539) are distinct from in-app GA4 ad impressions.",
      "reportedPlatformDownloads": 1,
      "metaAppInstallsFromBreakdown": 1174
    },
    "period": "Jul 31-Aug 6, 2026",
    "verdict": "momentum promising, paid-acquisition measurement incomplete",
    "plainEnglish": "Paid acquisition cannot be fully judged this refresh: platform usage and TVOD sales are moving positively, but Google Ads failed due a deprecated API version and Meta remains stale. Do not infer ROAS; use this week to repair measurement and test title-specific Facebook campaigns carefully.",
    "recommendations": [
      "Repair Google Ads connector/API version before the next weekly report.",
      "Ask Forge One/Nathan for a fresh Meta-only report if campaigns are active.",
      "Run separate Facebook campaigns for The Ark and The Librarians in top sales/usage states.",
      "Split iOS and Android budgets so cost/download and downstream viewing can be judged cleanly.",
      "Check install-to-viewing quality before scaling beyond the proposed tests."
    ],
    "googleAdsStatus": "STALE_CONNECTOR_ERROR_UNSUPPORTED_VERSION",
    "googleAdsNote": "Google Ads connector failed during the Aug 7 refresh because it is calling deprecated Google Ads API version v21. Last-good values are preserved and this section is marked stale; values were not zeroed.",
    "status": "stale_connector_error",
    "freshness": "Preserved prior Google Ads values. Aug 17 connector retry failed with UNSUPPORTED_VERSION because the connector uses deprecated API v21.",
    "attemptedPeriod": "Aug 3-Aug 9, 2026",
    "sourceStatus": "stale_connector_error",
    "updatedAt": "2026-08-17T12:30:00-07:00"
  },
  "metaAdsSummary": {
    "source": "Meta Ads (Forge One / nathan@pcsocialmedia.com twice-weekly email report)",
    "reportType": "Meta Ads Performance Report (Meta-only, used to avoid double-counting Google Ads which is pulled via connector)",
    "emailFrom": "nathan@pcsocialmedia.com",
    "emailTo": "DeanD@electricentertainment.com",
    "emailSubject": "ElectricNow | Meta Ads Performance Report (2026-07-12 to 2026-07-18)",
    "emailDate": "2026-07-19T13:31:09+00:00",
    "emailId": "AAMkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOABGAAAAAABShmO_Im-FSr39rhn8M5bDBwC_fCtlQrq5QYDU71YzKgxQAD-2Prc8AADvKLV_nde7SYUl0H8b5z1dAAPLZ0ZHAAA=",
    "reportLink": "https://app.forgeonemarketing.com/r/28800a13-6c1d-4562-8614-872d80ec8c80",
    "reportCadence": "Twice weekly (Sundays and Thursdays at 6am PST/PDT), each report covers Last 7 days",
    "period": "Jul 12-Jul 18, 2026",
    "periodStart": "2026-07-12",
    "periodEnd": "2026-07-18",
    "comparison": "vs prior Meta report period",
    "spend": 0,
    "impressions": 0,
    "linkClicks": 0,
    "costPerClick": 0,
    "iosDownloads": 0,
    "androidDownloads": 0,
    "totalDownloads": 0,
    "costPerIosDownload": null,
    "costPerAndroidDownload": null,
    "costPerDownload": 0,
    "ctrPct": 0,
    "deltas": {
      "spendPct": -100,
      "impressionsPct": -100,
      "linkClicksPct": -100,
      "costPerClickPct": -100,
      "iosDownloadsPct": -100,
      "costPerIosDownloadPct": null,
      "comparisonNote": "Deltas vs prior Meta report period (Jul 2-Jul 8, 2026)."
    },
    "campaigns": [],
    "genderBreakdown": [],
    "ageBreakdown": [],
    "plainEnglish": "Meta's latest report (Jul 5-11, 2026) shows the campaign PAUSED: $0.00 spend (down 100%), 0 impressions, 0 link clicks and 0 app installs, with 'No campaign metrics found for this period'. The prior report (Jul 2-8, 2026) was $40.80 spend / 2,539 impressions / 251 link clicks / 23 iOS installs at $1.77 each. Per PC Social Media (Nathan), ElectricNow is deliberately pivoting AWAY from Meta Ads to Roku Ads: mobile iOS/Android install retention was too low to justify spend, TV (Roku) is judged the most valuable audience, and DotStudio is setting up Roku conversion tracking. So the Meta drop to $0 is an intentional strategy change, not a reporting gap.",
    "paidAcquisitionInterpretation": "PAID ACQUISITION ASSESSMENT (Meta, Jul 5-11, 2026). Meta paid acquisition is effectively OFF this week: spend $0.00 (-100%), 0 impressions and 0 iOS installs. This is an INTENTIONAL pivot away from Meta Ads toward Roku Ads (PC Social Media / Nathan): mobile retention was too low, TV is the priority audience, and Roku conversion tracking is being set up by DotStudio. Google Ads also had no spend this week (connector returned no rows for Jul 6-12). NET: essentially no paid acquisition ran this week on either Meta or Google. Effect on the platform: GA4 property-wide traffic eased (sessions 9,971 vs 10,320, about -3.4%; new users 1,179 vs 1,519) and week-unique active users are estimated lower (~3,800 vs 4,158) - consistent with paid acquisition being switched off, though week-to-week noise also contributes. We still do NOT claim true ROAS (no install->activation->sale join; installs are free, not paid sales). Distinguish paid-campaign impressions (0 Meta this week) from in-app ad impressions (GA4 ads_impression, last instrumented at 34,940 for Jun 29-Jul 5) - different things. NEXT TESTS: (1) stand up Roku Ads conversion tracking and measure install->first-play activation; (2) compare Roku Ads cost-per-install to the paused Meta baseline ($1.77 iOS); (3) confirm whether the traffic dip persists once Roku Ads spend begins.",
    "threadId": "AAQkAGZhNDFjNDNhLTYwZDktNDM4OS04OGQyLTc1N2ZlMjI0YjljOAAQAIBt6Dqvj9JKvIVO2AKlKos=",
    "reportedPlatformDownloads": 0,
    "blendedCostPerReportedDownload": null,
    "metaAppInstallsFromBreakdown": 0,
    "downloadGrainNote": "Meta bought 0 app installs this week (campaign paused). Paid acquisition, when active, buys FREE app installs, not paid sales; installs are a distinct grain from visible platform sales and from in-app ad impressions.",
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
    "strategyNote": "PC Social Media (Nathan) is pivoting ElectricNow from Meta Ads to Roku Ads due to low mobile iOS/Android retention; TV is the priority audience and DotStudio is configuring Roku conversion tracking. Meta $0 for Jul 5-11 reflects this deliberate pause.",
    "status": "stale_no_new_meta_only_email",
    "note": "Latest Nathan/Forge One Meta-only email found in Outlook: Jul 12-Jul 18, 2026. Spend, impressions, clicks, and downloads were all zero; campaign appears paused or inactive. This is intentionally separate from Google Ads connector data.",
    "staleNote": "Aug 24 Outlook search did not return a newer Nathan/Forge One Meta-only performance report; prior values preserved.",
    "lastCheckedAt": "2026-07-28T08:11:00-07:00",
    "dataFreshnessNote": "No newer Nathan/Forge One Meta-only email report was processed in the Aug 7 refresh; last successful Meta values are preserved and marked stale.",
    "freshness": "Preserved prior Meta-only email values. Aug 17 Outlook search found no newer Nathan/Forge One Meta-only report after Aug 10.",
    "attemptedPeriod": "Aug 3-Aug 9, 2026",
    "sourceStatus": "stale_no_new_email",
    "updatedAt": "2026-08-17T12:30:00-07:00"
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
    "downloads": 528,
    "displayDownloads": "528",
    "updates": null,
    "displayUpdates": null,
    "inAppUnits": null,
    "totalUnits": 528,
    "dailyAverage": 75,
    "start": "2026-08-17",
    "end": "2026-08-23",
    "period": "Aug 17-Aug 23, 2026",
    "priorDownloads": 528,
    "priorPeriod": "Aug 17-Aug 23, 2026",
    "deltaPct": 0.0,
    "product": "ElectricNOW",
    "platform": "iOS/watchOS/tvOS (+ macOS categories at 0)",
    "territories": [
      {
        "territory": "United States",
        "downloads": 528,
        "deltaPct": null
      }
    ],
    "sourceLabel": "Manual Apple App Store Connect snapshot",
    "sourceDetail": "User-provided App Store Connect screenshots for Free iOS/watchOS/tvOS downloads and aggregate gross sales. App downloads are not paid sales and not GA4 active users.",
    "sourceScreenshots": [
      {
        "metric": "sales",
        "path": "uploaded_attachments/37ca4a2c4b7246889e4835539f4ad2be/image.jpeg"
      },
      {
        "metric": "downloads",
        "path": "uploaded_attachments/37ca4a2c4b7246889e4835539f4ad2be/image-1.jpeg"
      }
    ],
    "salesGross": 477.78,
    "salesEstimatedNet70Pct": 334.45,
    "salesDaily": [
      {
        "date": "2026-08-17",
        "label": "Aug 17",
        "gross": 146.93
      },
      {
        "date": "2026-08-18",
        "label": "Aug 18",
        "gross": 20.99
      },
      {
        "date": "2026-08-19",
        "label": "Aug 19",
        "gross": 44.97
      },
      {
        "date": "2026-08-20",
        "label": "Aug 20",
        "gross": 41.98
      },
      {
        "date": "2026-08-21",
        "label": "Aug 21",
        "gross": 104.95
      },
      {
        "date": "2026-08-22",
        "label": "Aug 22",
        "gross": 20.99
      },
      {
        "date": "2026-08-23",
        "label": "Aug 23",
        "gross": 96.97
      }
    ],
    "downloadsDaily": [
      {
        "date": "2026-08-17",
        "label": "Aug 17",
        "downloads": 71
      },
      {
        "date": "2026-08-18",
        "label": "Aug 18",
        "downloads": 80
      },
      {
        "date": "2026-08-19",
        "label": "Aug 19",
        "downloads": 71
      },
      {
        "date": "2026-08-20",
        "label": "Aug 20",
        "downloads": 81
      },
      {
        "date": "2026-08-21",
        "label": "Aug 21",
        "downloads": 81
      },
      {
        "date": "2026-08-22",
        "label": "Aug 22",
        "downloads": 66
      },
      {
        "date": "2026-08-23",
        "label": "Aug 23",
        "downloads": 78
      }
    ],
    "salesDeltaPct": 0.0,
    "updatedAtUtc": "2026-08-24T14:50:00-07:00",
    "note": "Manual Apple Connect screenshots for Aug 17-Aug 23, 2026. Sales screenshot totals $477.78 gross; download screenshot totals 528 downloads. Prior Apple snapshots are preserved and not overwritten."
  },
  "manualDataPatch": {
    "updatedAt": "2026-08-17T12:30:00-07:00",
    "period": "Aug 10-Aug 16, 2026",
    "dotStudiosTvod": {
      "gross": 2231.86,
      "transactions": 109
    },
    "apple": {
      "downloads": 538,
      "salesGross": 673.67
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
    "stripe": {
      "gross": 647.66,
      "transactions": 31
    }
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
  "plainEnglishSummary": [
    "The best news is that ElectricNOW’s TVOD momentum is still real: DotStudios shows $1,846.15 across 84 paid transactions for Aug 17-Aug 23, 2026, with The Ark ($1,129.50) and The Librarians ($716.65) accounting for almost all of the sales. GA4 sessions and total engaged time also rose versus Aug 10-Aug 16, 2026, though engagement rate softened, so the audience is still arriving but needs continued conversion into deeper viewing.",
    "Platform traffic is slightly up week over week: active users were 4,708 versus 4,824, and sessions were 11,138 versus 11,803. Screen/page views increased sharply to 59,032, while engagement rate fell from 80.6% to 72.9%, so the team should keep watching whether new/returning traffic becomes durable viewing.",
    "The DotStudios app dashboard adds useful app-side context: it shows 1,533 installs, 2,280 updates, and 16,373 in-app video views for Aug 17-Aug 23, 2026. Roku was the largest in-app viewing device in the DotStudios export, while Apple TV contributed 241 views; Roku TRC live-channel-only emails remain excluded from app/platform usage.",
    "DotStudios app ad-serving now shows 22,964 ElectricNOW in-app ad impressions from 25,602 requests for Aug 17-Aug 23, 2026. This is a delivery signal only, separate from Google/Meta paid-campaign impressions, and the file does not include ad-server revenue or yield.",
    "Apple remained steady but not accelerating: the latest manual Apple screenshot shows 528 downloads and $477.78 gross sales for Aug 17-Aug 23, 2026, compared with 528 downloads and $477.78 sales in the prior Apple snapshot.",
    "Paid acquisition verdict: acceptable but still needs proof of viewing. Google Ads and Meta efficiency metrics are preserved from the last successful pulls because no fresh usable performance report was available today; do not infer true ROAS because ad-server revenue is unavailable and app-store/TVOD sources overlap.",
    "Next tests: keep separate The Ark and The Librarians purchase campaigns, split iOS/Android budgets, shift spend toward lower-cost audiences that also show viewing depth, refresh creative around show-specific urgency, and check install-to-viewing quality before scaling budget again."
  ],
  "youtubeSummary": {
    "source": "YouTube Analytics connector",
    "connectorStatus": "connected_partial_fresh",
    "period": "Aug 17-Aug 23, 2026 request; daily rows returned through 2026-08-21",
    "periodNote": "YouTube Analytics returned daily rows through Aug 15 for the Aug 10-Aug 16 request; Aug 16 may still be pending and is not zero-filled.",
    "currentPeriod": {
      "views": 201862,
      "estimatedRevenue": 3504.98,
      "rowsThrough": "2026-08-21",
      "status": "partial_fresh"
    },
    "isPlatformSales": false,
    "revenueType": "YouTube ad income, not ElectricNOW app TVOD",
    "totals": {
      "views": 266079,
      "watchTimeMinutes": 5674717.0,
      "hoursWatched": 94578.62,
      "estimatedRevenue": 4383.7,
      "adImpressions": 1044026,
      "monetizedPlaybacks": 194513
    },
    "kpis": {
      "views": 266079,
      "hoursWatched": 94578.62,
      "estimatedRevenue": 4383.7,
      "adImpressions": 1044026
    },
    "dailyTrend": [
      {
        "date": "2026-08-10",
        "views": 42828,
        "watchTimeMinutes": 927744,
        "estimatedRevenue": 706.31,
        "adImpressions": 170471,
        "monetizedPlaybacks": 31890
      },
      {
        "date": "2026-08-11",
        "views": 40363,
        "watchTimeMinutes": 843814,
        "estimatedRevenue": 632.67,
        "adImpressions": 152445,
        "monetizedPlaybacks": 29245
      },
      {
        "date": "2026-08-12",
        "views": 43433,
        "watchTimeMinutes": 940962,
        "estimatedRevenue": 682.51,
        "adImpressions": 166961,
        "monetizedPlaybacks": 32687
      },
      {
        "date": "2026-08-13",
        "views": 46725,
        "watchTimeMinutes": 995699,
        "estimatedRevenue": 779.35,
        "adImpressions": 185764,
        "monetizedPlaybacks": 34847
      },
      {
        "date": "2026-08-14",
        "views": 46394,
        "watchTimeMinutes": 1001104,
        "estimatedRevenue": 828.82,
        "adImpressions": 191380,
        "monetizedPlaybacks": 34978
      },
      {
        "date": "2026-08-15",
        "views": 46336,
        "watchTimeMinutes": 965394,
        "estimatedRevenue": 754.04,
        "adImpressions": 177005,
        "monetizedPlaybacks": 30866
      }
    ],
    "topVideosCurrentPeriod": [
      {
        "videoId": "yUs2hr7QUso",
        "title": "yUs2hr7QUso",
        "views": 15083,
        "watchTimeMinutes": 242968,
        "estimatedRevenue": 212.04,
        "adImpressions": 0,
        "monetizedPlaybacks": 0
      },
      {
        "videoId": "O3E98LtAjDk",
        "title": "And the Going Medieval | The Librarians: The Next Chapter | S01E10",
        "views": 13242,
        "watchTimeMinutes": 252362,
        "estimatedRevenue": 287.93,
        "adImpressions": 0,
        "monetizedPlaybacks": 0
      },
      {
        "videoId": "q5gQB_AGxlo",
        "title": "🔴 Leverage: Redemption | Season 1 Stream | 24/7 Entertainment 🔴",
        "views": 11400,
        "watchTimeMinutes": 526562,
        "estimatedRevenue": 150.65,
        "adImpressions": 0,
        "monetizedPlaybacks": 0
      },
      {
        "videoId": "wjdEa_g0LNA",
        "title": "wjdEa_g0LNA",
        "views": 11004,
        "watchTimeMinutes": 191041,
        "estimatedRevenue": 238.25,
        "adImpressions": 0,
        "monetizedPlaybacks": 0
      },
      {
        "videoId": "53T2grazz-I",
        "title": "53T2grazz-I",
        "views": 9377,
        "watchTimeMinutes": 151254,
        "estimatedRevenue": 150.7,
        "adImpressions": 0,
        "monetizedPlaybacks": 0
      },
      {
        "videoId": "b6kMpenpQGM",
        "title": "Flyboys | FULL MOVIE | James Franco | Jean Reno | Jennifer Decker | David Ellison",
        "views": 8281,
        "watchTimeMinutes": 284305,
        "estimatedRevenue": 180.94,
        "adImpressions": 0,
        "monetizedPlaybacks": 0
      },
      {
        "videoId": "tKAdjrXYj8g",
        "title": "Blackway | FULL MOVIE | Anthony Hopkins | Ray Liotta | Julia Stiles | Alexander Ludwig",
        "views": 6804,
        "watchTimeMinutes": 127589,
        "estimatedRevenue": 86.87,
        "adImpressions": 0,
        "monetizedPlaybacks": 0
      },
      {
        "videoId": "G_X8m-NJV-U",
        "title": "And the Deadly Drekavac | The Librarians: The Next Chapter | S01E01",
        "views": 5702,
        "watchTimeMinutes": 88570,
        "estimatedRevenue": 96.42,
        "adImpressions": 0,
        "monetizedPlaybacks": 0
      },
      {
        "videoId": "89J-9vWWPuk",
        "title": "89J-9vWWPuk",
        "views": 5305,
        "watchTimeMinutes": 95905,
        "estimatedRevenue": 60.49,
        "adImpressions": 0,
        "monetizedPlaybacks": 0
      },
      {
        "videoId": "B_IiECt4atw",
        "title": "Everyone Wanted to Be on This Ship | The Ark | Full Episode | S01E01",
        "views": 5287,
        "watchTimeMinutes": 56166,
        "estimatedRevenue": 61.58,
        "adImpressions": 0,
        "monetizedPlaybacks": 0
      }
    ],
    "note": "YouTube income is separate YouTube ad income, not app TVOD. Current period is partial because the connector returned rows through Aug 21 only; missing days were not zero-filled.",
    "ytdRevenue": 115998.58,
    "ytdViews": 7098766,
    "ytdHoursWatched": 2965568.7,
    "ytdAdImpressions": 30823523,
    "ytdMonetizedPlaybacks": 5462328,
    "yearToDate": {
      "views": 7343194,
      "estimatedMinutesWatched": 183657721,
      "estimatedHoursWatched": 3060962.02,
      "estimatedRevenue": 115998.58,
      "estimatedAdRevenue": 104255.16,
      "period": "Jan 1-Aug 23, 2026",
      "rowsThrough": "2026-08-21"
    },
    "ytdStatus": "fresh",
    "ytdFreshnessNote": "Fresh YouTube Analytics YTD pull for Jan 1-Aug 16, 2026. This fixes the dashboard issue where YTD YouTube income had vanished.",
    "ytdNote": "YouTube income is separate ad revenue and should not be mixed with platform TVOD sales.",
    "currentPeriodStatus": {
      "requestedStart": "2026-08-10",
      "requestedEnd": "2026-08-16",
      "returnedThrough": "2026-08-15",
      "status": "partial_fresh"
    },
    "status": "partial_fresh",
    "daily": [
      {
        "date": "2026-08-17",
        "label": "Aug 17",
        "views": 43570,
        "estimatedMinutesWatched": 1028284,
        "estimatedHoursWatched": 17138.07,
        "estimatedRevenue": 720.94,
        "estimatedAdRevenue": 649.16
      },
      {
        "date": "2026-08-18",
        "label": "Aug 18",
        "views": 38083,
        "estimatedMinutesWatched": 905544,
        "estimatedHoursWatched": 15092.4,
        "estimatedRevenue": 644.53,
        "estimatedAdRevenue": 583.01
      },
      {
        "date": "2026-08-19",
        "label": "Aug 19",
        "views": 39145,
        "estimatedMinutesWatched": 912404,
        "estimatedHoursWatched": 15206.73,
        "estimatedRevenue": 671.34,
        "estimatedAdRevenue": 609.28
      },
      {
        "date": "2026-08-20",
        "label": "Aug 20",
        "views": 43752,
        "estimatedMinutesWatched": 1006073,
        "estimatedHoursWatched": 16767.88,
        "estimatedRevenue": 789.42,
        "estimatedAdRevenue": 722.56
      },
      {
        "date": "2026-08-21",
        "label": "Aug 21",
        "views": 37312,
        "estimatedMinutesWatched": 841715,
        "estimatedHoursWatched": 14028.58,
        "estimatedRevenue": 678.75,
        "estimatedAdRevenue": 616.4
      }
    ],
    "estimatedRevenue": 3504.98
  },
  "appTrendNote": "This trend charts total app/platform sessions in green alongside daily active users in blue for the complete week ending Aug 20, 2026. Landing-page acquisition traffic remains excluded from platform audience totals.",
  "ytdTrend": [
    {
      "date": "Apr 13",
      "rawDate": "20260413",
      "activeUsers": 8739,
      "sessions": 13421
    },
    {
      "date": "May 25",
      "rawDate": "20260525",
      "activeUsers": 7826,
      "sessions": 14470
    },
    {
      "date": "Jun 1",
      "rawDate": "20260601",
      "activeUsers": 7608,
      "sessions": 13911
    },
    {
      "date": "Jun 8",
      "rawDate": "20260608",
      "activeUsers": 7282,
      "sessions": 13850
    },
    {
      "date": "Jun 15",
      "rawDate": "20260615",
      "activeUsers": 5871,
      "sessions": 11817
    },
    {
      "date": "Jun 22",
      "rawDate": "20260622",
      "activeUsers": 5921,
      "sessions": 12379
    },
    {
      "date": "Jun 29",
      "rawDate": "20260629",
      "activeUsers": 4158,
      "sessions": 10320
    },
    {
      "date": "Jul 6",
      "rawDate": "20260706",
      "activeUsers": 3800,
      "sessions": 9971
    },
    {
      "date": "Jul 13",
      "rawDate": "20260713",
      "activeUsers": 3498,
      "sessions": 9730
    },
    {
      "date": "Jul 20",
      "rawDate": "20260720",
      "activeUsers": 3540,
      "sessions": 10102
    },
    {
      "date": "Jul 21",
      "rawDate": "20260721",
      "activeUsers": 3789,
      "sessions": 10658
    }
  ],
  "ytdTrendNote": "Weekly GA4 totals from property 497892271. Year-to-date trend is retained as weekly context and should be compared against the launch-baseline week, not the latest 7-day period.",
  "eventCardsNote": "Fresh GA4 event counts for Aug 17-Aug 23. Prior-event comparison rows were not included in the Aug 24 saved raw bundle, so previous event-card deltas are not recalculated.",
  "usGeography": {
    "period": "Aug 17-Aug 23, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "state": "Texas",
        "activeUsers": 449,
        "sessions": 981,
        "engagedSessions": 698,
        "screenPageViews": 5149,
        "eventCount": 69811,
        "totalEngagementHours": 446.6,
        "lat": 42.0,
        "lon": 48.0,
        "shareOfUsActiveUsersPct": 9.4
      },
      {
        "state": "California",
        "activeUsers": 353,
        "sessions": 749,
        "engagedSessions": 506,
        "screenPageViews": 3771,
        "eventCount": 93295,
        "totalEngagementHours": 765.4,
        "lat": 12.0,
        "lon": 34.0,
        "shareOfUsActiveUsersPct": 7.4
      },
      {
        "state": "Florida",
        "activeUsers": 329,
        "sessions": 921,
        "engagedSessions": 671,
        "screenPageViews": 4723,
        "eventCount": 112605,
        "totalEngagementHours": 540.6,
        "lat": 70.0,
        "lon": 58.0,
        "shareOfUsActiveUsersPct": 6.9
      },
      {
        "state": "New York",
        "activeUsers": 260,
        "sessions": 592,
        "engagedSessions": 421,
        "screenPageViews": 2703,
        "eventCount": 40851,
        "totalEngagementHours": 250.3,
        "lat": 79.0,
        "lon": 16.0,
        "shareOfUsActiveUsersPct": 5.4
      },
      {
        "state": "Pennsylvania",
        "activeUsers": 211,
        "sessions": 481,
        "engagedSessions": 351,
        "screenPageViews": 2281,
        "eventCount": 46566,
        "totalEngagementHours": 197.2,
        "lat": 76.0,
        "lon": 23.0,
        "shareOfUsActiveUsersPct": 4.4
      },
      {
        "state": "North Carolina",
        "activeUsers": 207,
        "sessions": 464,
        "engagedSessions": 333,
        "screenPageViews": 2665,
        "eventCount": 60491,
        "totalEngagementHours": 284.6,
        "lat": 73.0,
        "lon": 39.0,
        "shareOfUsActiveUsersPct": 4.3
      },
      {
        "state": "Ohio",
        "activeUsers": 205,
        "sessions": 607,
        "engagedSessions": 442,
        "screenPageViews": 2584,
        "eventCount": 49645,
        "totalEngagementHours": 341.2,
        "lat": 65.0,
        "lon": 25.0,
        "shareOfUsActiveUsersPct": 4.3
      },
      {
        "state": "Illinois",
        "activeUsers": 186,
        "sessions": 490,
        "engagedSessions": 332,
        "screenPageViews": 2115,
        "eventCount": 26937,
        "totalEngagementHours": 238.4,
        "lat": 58.0,
        "lon": 28.0,
        "shareOfUsActiveUsersPct": 3.9
      },
      {
        "state": "Georgia",
        "activeUsers": 173,
        "sessions": 419,
        "engagedSessions": 279,
        "screenPageViews": 1812,
        "eventCount": 32270,
        "totalEngagementHours": 271.2,
        "lat": 65.0,
        "lon": 46.0,
        "shareOfUsActiveUsersPct": 3.6
      },
      {
        "state": "Michigan",
        "activeUsers": 150,
        "sessions": 393,
        "engagedSessions": 299,
        "screenPageViews": 2124,
        "eventCount": 32858,
        "totalEngagementHours": 214.7,
        "lat": 62.0,
        "lon": 18.0,
        "shareOfUsActiveUsersPct": 3.1
      },
      {
        "state": "Virginia",
        "activeUsers": 132,
        "sessions": 260,
        "engagedSessions": 180,
        "screenPageViews": 1111,
        "eventCount": 20288,
        "totalEngagementHours": 132.2,
        "lat": 75.0,
        "lon": 32.0,
        "shareOfUsActiveUsersPct": 2.7
      },
      {
        "state": "Arizona",
        "activeUsers": 113,
        "sessions": 257,
        "engagedSessions": 161,
        "screenPageViews": 1263,
        "eventCount": 15231,
        "totalEngagementHours": 59.2,
        "lat": 24.0,
        "lon": 42.0,
        "shareOfUsActiveUsersPct": 2.4
      },
      {
        "state": "Washington",
        "activeUsers": 113,
        "sessions": 220,
        "engagedSessions": 152,
        "screenPageViews": 1285,
        "eventCount": 11122,
        "totalEngagementHours": 68.5,
        "lat": 15.0,
        "lon": 6.0,
        "shareOfUsActiveUsersPct": 2.4
      },
      {
        "state": "Tennessee",
        "activeUsers": 112,
        "sessions": 222,
        "engagedSessions": 161,
        "screenPageViews": 1148,
        "eventCount": 18306,
        "totalEngagementHours": 95.3,
        "lat": 62.0,
        "lon": 39.0,
        "shareOfUsActiveUsersPct": 2.3
      },
      {
        "state": "Missouri",
        "activeUsers": 107,
        "sessions": 244,
        "engagedSessions": 173,
        "screenPageViews": 1102,
        "eventCount": 19288,
        "totalEngagementHours": 73.8,
        "lat": 54.0,
        "lon": 32.0,
        "shareOfUsActiveUsersPct": 2.2
      },
      {
        "state": "Minnesota",
        "activeUsers": 102,
        "sessions": 305,
        "engagedSessions": 202,
        "screenPageViews": 1520,
        "eventCount": 37161,
        "totalEngagementHours": 352.9,
        "lat": 51.0,
        "lon": 14.0,
        "shareOfUsActiveUsersPct": 2.1
      },
      {
        "state": "Massachusetts",
        "activeUsers": 95,
        "sessions": 253,
        "engagedSessions": 184,
        "screenPageViews": 1397,
        "eventCount": 25471,
        "totalEngagementHours": 141.9,
        "lat": 84.0,
        "lon": 18.0,
        "shareOfUsActiveUsersPct": 2.0
      },
      {
        "state": "Indiana",
        "activeUsers": 92,
        "sessions": 206,
        "engagedSessions": 161,
        "screenPageViews": 906,
        "eventCount": 14313,
        "totalEngagementHours": 77.8,
        "lat": 61.0,
        "lon": 27.0,
        "shareOfUsActiveUsersPct": 1.9
      },
      {
        "state": "Oregon",
        "activeUsers": 91,
        "sessions": 178,
        "engagedSessions": 111,
        "screenPageViews": 796,
        "eventCount": 13624,
        "totalEngagementHours": 105.0,
        "lat": 14.0,
        "lon": 15.0,
        "shareOfUsActiveUsersPct": 1.9
      },
      {
        "state": "Wisconsin",
        "activeUsers": 82,
        "sessions": 209,
        "engagedSessions": 148,
        "screenPageViews": 997,
        "eventCount": 36957,
        "totalEngagementHours": 115.0,
        "lat": 55.0,
        "lon": 16.0,
        "shareOfUsActiveUsersPct": 1.7
      },
      {
        "state": "Alabama",
        "activeUsers": 81,
        "sessions": 175,
        "engagedSessions": 111,
        "screenPageViews": 756,
        "eventCount": 15391,
        "totalEngagementHours": 56.7,
        "lat": 61.0,
        "lon": 46.0,
        "shareOfUsActiveUsersPct": 1.7
      },
      {
        "state": "Maryland",
        "activeUsers": 79,
        "sessions": 168,
        "engagedSessions": 114,
        "screenPageViews": 950,
        "eventCount": 19927,
        "totalEngagementHours": 95.8,
        "lat": 79.0,
        "lon": 28.0,
        "shareOfUsActiveUsersPct": 1.6
      },
      {
        "state": "Oklahoma",
        "activeUsers": 78,
        "sessions": 222,
        "engagedSessions": 166,
        "screenPageViews": 1051,
        "eventCount": 35298,
        "totalEngagementHours": 127.2,
        "lat": 46.0,
        "lon": 40.0,
        "shareOfUsActiveUsersPct": 1.6
      },
      {
        "state": "Colorado",
        "activeUsers": 74,
        "sessions": 157,
        "engagedSessions": 120,
        "screenPageViews": 637,
        "eventCount": 10021,
        "totalEngagementHours": 70.6,
        "lat": 34.0,
        "lon": 32.0,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "Kentucky",
        "activeUsers": 72,
        "sessions": 162,
        "engagedSessions": 120,
        "screenPageViews": 868,
        "eventCount": 12848,
        "totalEngagementHours": 69.9,
        "lat": 64.0,
        "lon": 33.0,
        "shareOfUsActiveUsersPct": 1.5
      },
      {
        "state": "New Jersey",
        "activeUsers": 68,
        "sessions": 203,
        "engagedSessions": 159,
        "screenPageViews": 977,
        "eventCount": 18503,
        "totalEngagementHours": 108.8,
        "lat": 80.0,
        "lon": 24.0,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "South Carolina",
        "activeUsers": 68,
        "sessions": 184,
        "engagedSessions": 137,
        "screenPageViews": 897,
        "eventCount": 10828,
        "totalEngagementHours": 77.6,
        "lat": 70.0,
        "lon": 43.0,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "Louisiana",
        "activeUsers": 66,
        "sessions": 143,
        "engagedSessions": 103,
        "screenPageViews": 723,
        "eventCount": 37938,
        "totalEngagementHours": 165.6,
        "lat": 56.0,
        "lon": 50.0,
        "shareOfUsActiveUsersPct": 1.4
      },
      {
        "state": "Arkansas",
        "activeUsers": 63,
        "sessions": 153,
        "engagedSessions": 119,
        "screenPageViews": 798,
        "eventCount": 10315,
        "totalEngagementHours": 93.7,
        "lat": 56.0,
        "lon": 42.0,
        "shareOfUsActiveUsersPct": 1.3
      },
      {
        "state": "Nevada",
        "activeUsers": 59,
        "sessions": 152,
        "engagedSessions": 112,
        "screenPageViews": 653,
        "eventCount": 21889,
        "totalEngagementHours": 119.7,
        "lat": 17.0,
        "lon": 28.0,
        "shareOfUsActiveUsersPct": 1.2
      },
      {
        "state": "Connecticut",
        "activeUsers": 58,
        "sessions": 132,
        "engagedSessions": 105,
        "screenPageViews": 570,
        "eventCount": 9280,
        "totalEngagementHours": 64.0,
        "lat": 83.0,
        "lon": 20.0,
        "shareOfUsActiveUsersPct": 1.2
      },
      {
        "state": "Kansas",
        "activeUsers": 55,
        "sessions": 116,
        "engagedSessions": 82,
        "screenPageViews": 624,
        "eventCount": 15451,
        "totalEngagementHours": 54.7,
        "lat": 45.0,
        "lon": 32.0,
        "shareOfUsActiveUsersPct": 1.1
      },
      {
        "state": "Mississippi",
        "activeUsers": 47,
        "sessions": 106,
        "engagedSessions": 74,
        "screenPageViews": 421,
        "eventCount": 5809,
        "totalEngagementHours": 26.8,
        "lat": 59.0,
        "lon": 46.0,
        "shareOfUsActiveUsersPct": 1.0
      },
      {
        "state": "Utah",
        "activeUsers": 46,
        "sessions": 114,
        "engagedSessions": 85,
        "screenPageViews": 598,
        "eventCount": 5376,
        "totalEngagementHours": 38.0,
        "lat": 23.0,
        "lon": 28.0,
        "shareOfUsActiveUsersPct": 1.0
      },
      {
        "state": "Iowa",
        "activeUsers": 42,
        "sessions": 62,
        "engagedSessions": 42,
        "screenPageViews": 417,
        "eventCount": 3897,
        "totalEngagementHours": 21.2,
        "lat": 53.0,
        "lon": 24.0,
        "shareOfUsActiveUsersPct": 0.9
      },
      {
        "state": "Idaho",
        "activeUsers": 30,
        "sessions": 48,
        "engagedSessions": 29,
        "screenPageViews": 213,
        "eventCount": 1198,
        "totalEngagementHours": 8.5,
        "lat": 22.0,
        "lon": 16.0,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "West Virginia",
        "activeUsers": 29,
        "sessions": 75,
        "engagedSessions": 49,
        "screenPageViews": 413,
        "eventCount": 12270,
        "totalEngagementHours": 49.0,
        "lat": 72.0,
        "lon": 30.0,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "New Mexico",
        "activeUsers": 28,
        "sessions": 71,
        "engagedSessions": 41,
        "screenPageViews": 347,
        "eventCount": 6278,
        "totalEngagementHours": 22.5,
        "lat": 32.0,
        "lon": 42.0,
        "shareOfUsActiveUsersPct": 0.6
      },
      {
        "state": "Maine",
        "activeUsers": 25,
        "sessions": 94,
        "engagedSessions": 70,
        "screenPageViews": 446,
        "eventCount": 4874,
        "totalEngagementHours": 40.0,
        "lat": 85.0,
        "lon": 8.0,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Nebraska",
        "activeUsers": 22,
        "sessions": 37,
        "engagedSessions": 27,
        "screenPageViews": 229,
        "eventCount": 1657,
        "totalEngagementHours": 12.1,
        "lat": 45.0,
        "lon": 24.0,
        "shareOfUsActiveUsersPct": 0.5
      },
      {
        "state": "Montana",
        "activeUsers": 17,
        "sessions": 35,
        "engagedSessions": 31,
        "screenPageViews": 191,
        "eventCount": 3128,
        "totalEngagementHours": 16.9,
        "lat": 29.0,
        "lon": 10.0,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "New Hampshire",
        "activeUsers": 17,
        "sessions": 28,
        "engagedSessions": 21,
        "screenPageViews": 106,
        "eventCount": 2910,
        "totalEngagementHours": 11.1,
        "lat": 84.0,
        "lon": 15.0,
        "shareOfUsActiveUsersPct": 0.4
      },
      {
        "state": "Rhode Island",
        "activeUsers": 15,
        "sessions": 46,
        "engagedSessions": 27,
        "screenPageViews": 171,
        "eventCount": 3333,
        "totalEngagementHours": 18.3,
        "lat": 85.0,
        "lon": 19.0,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "South Dakota",
        "activeUsers": 15,
        "sessions": 20,
        "engagedSessions": 12,
        "screenPageViews": 71,
        "eventCount": 529,
        "totalEngagementHours": 3.8,
        "lat": 44.0,
        "lon": 17.0,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Delaware",
        "activeUsers": 14,
        "sessions": 19,
        "engagedSessions": 11,
        "screenPageViews": 104,
        "eventCount": 3194,
        "totalEngagementHours": 15.8,
        "lat": 80.0,
        "lon": 27.0,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "Vermont",
        "activeUsers": 14,
        "sessions": 64,
        "engagedSessions": 50,
        "screenPageViews": 352,
        "eventCount": 2945,
        "totalEngagementHours": 30.2,
        "lat": 82.0,
        "lon": 13.0,
        "shareOfUsActiveUsersPct": 0.3
      },
      {
        "state": "(not set)",
        "activeUsers": 12,
        "sessions": 14,
        "engagedSessions": 13,
        "screenPageViews": 26,
        "eventCount": 253,
        "totalEngagementHours": 0.7,
        "lat": null,
        "lon": null,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "District of Columbia",
        "activeUsers": 12,
        "sessions": 18,
        "engagedSessions": 14,
        "screenPageViews": 98,
        "eventCount": 707,
        "totalEngagementHours": 6.9,
        "lat": 79.0,
        "lon": 29.0,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Hawaii",
        "activeUsers": 12,
        "sessions": 25,
        "engagedSessions": 21,
        "screenPageViews": 158,
        "eventCount": 1679,
        "totalEngagementHours": 7.9,
        "lat": 18.0,
        "lon": 56.0,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "North Dakota",
        "activeUsers": 8,
        "sessions": 15,
        "engagedSessions": 13,
        "screenPageViews": 122,
        "eventCount": 1024,
        "totalEngagementHours": 6.3,
        "lat": 44.0,
        "lon": 10.0,
        "shareOfUsActiveUsersPct": 0.2
      },
      {
        "state": "Wyoming",
        "activeUsers": 7,
        "sessions": 13,
        "engagedSessions": 12,
        "screenPageViews": 909,
        "eventCount": 2228,
        "totalEngagementHours": 7.3,
        "lat": 30.0,
        "lon": 20.0,
        "shareOfUsActiveUsersPct": 0.1
      },
      {
        "state": "Alaska",
        "activeUsers": 5,
        "sessions": 5,
        "engagedSessions": 3,
        "screenPageViews": 13,
        "eventCount": 44,
        "totalEngagementHours": 0.1,
        "lat": 7.0,
        "lon": 56.0,
        "shareOfUsActiveUsersPct": 0.1
      },
      {
        "state": "Unknown",
        "activeUsers": 1,
        "sessions": 4,
        "engagedSessions": 0,
        "screenPageViews": 16,
        "eventCount": 120,
        "totalEngagementHours": 0.2,
        "lat": null,
        "lon": null,
        "shareOfUsActiveUsersPct": 0.0
      }
    ]
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
    "source": "DotStudios revenue-transactions-11.csv",
    "emailDate": "2026-08-24",
    "periodStart": "2026-08-17",
    "periodEnd": "2026-08-23",
    "period": "Aug 17-Aug 23, 2026",
    "periodNote": "Fresh DotStudios revenue-transactions-11.csv export for Aug 17-Aug 23, 2026. The export contains 84 paid line-item TVOD transactions totaling $1,846.15 gross/net. Do not add it to Stripe/Roku/Apple because platform sources overlap.",
    "registeredUsers": {
      "total": 7914,
      "active": 7814
    },
    "registeredUsersNote": "Registered-user count preserved from the last Michael Johnson/DotStudios email; this Aug 17-Aug 23 TVOD CSV contains transactions only.",
    "transactions": {
      "totalRows": 84,
      "paidTransactions": 84,
      "refundTransactions": 0,
      "latestSevenDayPaidTransactions": 84
    },
    "netRevenue": {
      "tvodSalesExportPaidGross": 1846.15,
      "tvodSalesExportPaidNet": 1846.15,
      "refundsGross": 0.0,
      "refundsNet": 0.0,
      "netIncludingRefunds": 1846.15,
      "latestSevenDayGross": 1846.15,
      "latestSevenDayNet": 1846.15
    },
    "familyTotals": [
      {
        "family": "The Ark",
        "transactions": 49,
        "gross": 1129.5,
        "net": 1129.5,
        "shareOfPaidNetPct": 61.2,
        "shareOfTransactionsPct": 58.3
      },
      {
        "family": "The Librarians",
        "transactions": 35,
        "gross": 716.65,
        "net": 716.65,
        "shareOfPaidNetPct": 38.8,
        "shareOfTransactionsPct": 41.7
      }
    ],
    "titleFamilySummary": {
      "arkTransactions": 49,
      "arkGross": 1129.5,
      "arkNet": 1129.5,
      "librariansTransactions": 35,
      "librariansGross": 716.65,
      "librariansNet": 716.65,
      "arkShareOfPaidNetPct": 61.2,
      "librariansShareOfPaidNetPct": 38.8
    },
    "topTitlesByNet": [
      {
        "title": "The Ark - Season 3",
        "transactions": 45,
        "gross": 944.55,
        "net": 944.55,
        "shareOfPaidNetPct": 51.2,
        "shareOfTransactionsPct": 53.6
      },
      {
        "title": "The Librarians: The Next Chapter Season 2",
        "transactions": 34,
        "gross": 713.66,
        "net": 713.66,
        "shareOfPaidNetPct": 38.7,
        "shareOfTransactionsPct": 40.5
      },
      {
        "title": "The Ark",
        "transactions": 2,
        "gross": 109.98,
        "net": 109.98,
        "shareOfPaidNetPct": 6.0,
        "shareOfTransactionsPct": 2.4
      },
      {
        "title": "La Arca",
        "transactions": 1,
        "gross": 54.99,
        "net": 54.99,
        "shareOfPaidNetPct": 3.0,
        "shareOfTransactionsPct": 1.2
      },
      {
        "title": "The Ark - Season 2",
        "transactions": 1,
        "gross": 19.98,
        "net": 19.98,
        "shareOfPaidNetPct": 1.1,
        "shareOfTransactionsPct": 1.2
      },
      {
        "title": "The Librarian: Quest for the Spear",
        "transactions": 1,
        "gross": 2.99,
        "net": 2.99,
        "shareOfPaidNetPct": 0.2,
        "shareOfTransactionsPct": 1.2
      }
    ],
    "channelBreakout": [
      {
        "channel": "android",
        "transactions": 29,
        "gross": 676.71,
        "net": 676.71,
        "shareOfPaidNetPct": 36.7,
        "shareOfTransactionsPct": 34.5
      },
      {
        "channel": "apple",
        "transactions": 22,
        "gross": 477.78,
        "net": 477.78,
        "shareOfPaidNetPct": 25.9,
        "shareOfTransactionsPct": 26.2
      },
      {
        "channel": "web",
        "transactions": 19,
        "gross": 398.81,
        "net": 398.81,
        "shareOfPaidNetPct": 21.6,
        "shareOfTransactionsPct": 22.6
      },
      {
        "channel": "roku",
        "transactions": 14,
        "gross": 292.85,
        "net": 292.85,
        "shareOfPaidNetPct": 15.9,
        "shareOfTransactionsPct": 16.7
      }
    ],
    "daily": [
      {
        "date": "2026-08-17",
        "label": "Aug 17",
        "transactions": 11,
        "gross": 264.89,
        "net": 264.89
      },
      {
        "date": "2026-08-18",
        "label": "Aug 18",
        "transactions": 11,
        "gross": 230.89,
        "net": 230.89
      },
      {
        "date": "2026-08-19",
        "label": "Aug 19",
        "transactions": 9,
        "gross": 170.91,
        "net": 170.91
      },
      {
        "date": "2026-08-20",
        "label": "Aug 20",
        "transactions": 12,
        "gross": 251.88,
        "net": 251.88
      },
      {
        "date": "2026-08-21",
        "label": "Aug 21",
        "transactions": 20,
        "gross": 453.8,
        "net": 453.8
      },
      {
        "date": "2026-08-22",
        "label": "Aug 22",
        "transactions": 5,
        "gross": 104.95,
        "net": 104.95
      },
      {
        "date": "2026-08-23",
        "label": "Aug 23",
        "transactions": 16,
        "gross": 368.83,
        "net": 368.83
      }
    ],
    "reconciliationNote": "DotStudios is the broadest current TVOD dashboard export. Stripe, Apple, and Roku are overlapping checks/slices, not additive sales sources."
  },
  "weeklyTrendNote": "Fresh GA4 daily rows for Aug 17-Aug 23, 2026; property 497892271.",
  "dotStudiosAppAds": {
    "source": "DotStudios ad-metrics-3.csv",
    "sourceType": "manual_dotstudios_export",
    "sourceFileLabel": "DotStudios app ad-serving export uploaded Aug 24, 2026",
    "period": "Aug 17-Aug 23, 2026",
    "date_range": [
      "2026-08-17",
      "2026-08-23"
    ],
    "rows": 378,
    "totals": {
      "requests": 25602,
      "impressions": 22964,
      "errors": 10362,
      "impressionsPerRequest": 0.9,
      "impressionsPerRequestPct": 89.7,
      "errorRatePct": 40.47,
      "avgAdsPerPod": 0.9
    },
    "dailyTrend": [
      {
        "requests": 2028,
        "impressions": 2871,
        "errors": 50,
        "impressionsPerRequest": 1.42,
        "impressionsPerRequestPct": 141.57,
        "errorRatePct": 2.47,
        "avgAdsPerPod": 1.42,
        "date": "2026-08-17",
        "label": "2026-08-17"
      },
      {
        "requests": 1813,
        "impressions": 2366,
        "errors": 1172,
        "impressionsPerRequest": 1.31,
        "impressionsPerRequestPct": 130.5,
        "errorRatePct": 64.64,
        "avgAdsPerPod": 1.3,
        "date": "2026-08-18",
        "label": "2026-08-18"
      },
      {
        "requests": 2522,
        "impressions": 2479,
        "errors": 1168,
        "impressionsPerRequest": 0.98,
        "impressionsPerRequestPct": 98.3,
        "errorRatePct": 46.31,
        "avgAdsPerPod": 0.98,
        "date": "2026-08-19",
        "label": "2026-08-19"
      },
      {
        "requests": 3094,
        "impressions": 1930,
        "errors": 2065,
        "impressionsPerRequest": 0.62,
        "impressionsPerRequestPct": 62.38,
        "errorRatePct": 66.74,
        "avgAdsPerPod": 0.62,
        "date": "2026-08-20",
        "label": "2026-08-20"
      },
      {
        "requests": 3402,
        "impressions": 2375,
        "errors": 1754,
        "impressionsPerRequest": 0.7,
        "impressionsPerRequestPct": 69.81,
        "errorRatePct": 51.56,
        "avgAdsPerPod": 0.7,
        "date": "2026-08-21",
        "label": "2026-08-21"
      },
      {
        "requests": 6195,
        "impressions": 5317,
        "errors": 2031,
        "impressionsPerRequest": 0.86,
        "impressionsPerRequestPct": 85.83,
        "errorRatePct": 32.78,
        "avgAdsPerPod": 0.86,
        "date": "2026-08-22",
        "label": "2026-08-22"
      },
      {
        "requests": 6548,
        "impressions": 5626,
        "errors": 2122,
        "impressionsPerRequest": 0.86,
        "impressionsPerRequestPct": 85.92,
        "errorRatePct": 32.41,
        "avgAdsPerPod": 0.86,
        "date": "2026-08-23",
        "label": "2026-08-23"
      }
    ],
    "deviceSplit": [
      {
        "requests": 18184,
        "impressions": 19568,
        "errors": 3418,
        "impressionsPerRequest": 1.08,
        "impressionsPerRequestPct": 107.61,
        "errorRatePct": 18.8,
        "avgAdsPerPod": 1.08,
        "device": "roku",
        "label": "roku"
      },
      {
        "requests": 4401,
        "impressions": 1385,
        "errors": 3339,
        "impressionsPerRequest": 0.31,
        "impressionsPerRequestPct": 31.47,
        "errorRatePct": 75.87,
        "avgAdsPerPod": 0.31,
        "device": "android",
        "label": "android"
      },
      {
        "requests": 829,
        "impressions": 818,
        "errors": 2269,
        "impressionsPerRequest": 0.99,
        "impressionsPerRequestPct": 98.67,
        "errorRatePct": 273.7,
        "avgAdsPerPod": 0.99,
        "device": "ios",
        "label": "ios"
      },
      {
        "requests": 1129,
        "impressions": 618,
        "errors": 507,
        "impressionsPerRequest": 0.55,
        "impressionsPerRequestPct": 54.74,
        "errorRatePct": 44.91,
        "avgAdsPerPod": 0.55,
        "device": "androidtv",
        "label": "androidtv"
      },
      {
        "requests": 802,
        "impressions": 317,
        "errors": 467,
        "impressionsPerRequest": 0.4,
        "impressionsPerRequestPct": 39.53,
        "errorRatePct": 58.23,
        "avgAdsPerPod": 0.39,
        "device": "firetv",
        "label": "firetv"
      },
      {
        "requests": 248,
        "impressions": 248,
        "errors": 360,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 100.0,
        "errorRatePct": 145.16,
        "avgAdsPerPod": 1.0,
        "device": "appletv",
        "label": "appletv"
      },
      {
        "requests": 9,
        "impressions": 10,
        "errors": 2,
        "impressionsPerRequest": 1.11,
        "impressionsPerRequestPct": 111.11,
        "errorRatePct": 22.22,
        "avgAdsPerPod": 1.11,
        "device": "vizio",
        "label": "vizio"
      }
    ],
    "topChannels": [
      {
        "requests": 2058,
        "impressions": 2236,
        "errors": 246,
        "impressionsPerRequest": 1.09,
        "impressionsPerRequestPct": 108.65,
        "errorRatePct": 11.95,
        "avgAdsPerPod": 1.09,
        "channel": "The Ark - Season 2",
        "label": "The Ark - Season 2"
      },
      {
        "requests": 2125,
        "impressions": 1969,
        "errors": 391,
        "impressionsPerRequest": 0.93,
        "impressionsPerRequestPct": 92.66,
        "errorRatePct": 18.4,
        "avgAdsPerPod": 0.93,
        "channel": "Leverage - Season 4",
        "label": "Leverage - Season 4"
      },
      {
        "requests": 1607,
        "impressions": 1849,
        "errors": 256,
        "impressionsPerRequest": 1.15,
        "impressionsPerRequestPct": 115.06,
        "errorRatePct": 15.93,
        "avgAdsPerPod": 1.15,
        "channel": "The Ark - Season 1",
        "label": "The Ark - Season 1"
      },
      {
        "requests": 2127,
        "impressions": 1613,
        "errors": 940,
        "impressionsPerRequest": 0.76,
        "impressionsPerRequestPct": 75.83,
        "errorRatePct": 44.19,
        "avgAdsPerPod": 0.76,
        "channel": "Leverage: Redemption - Season 3",
        "label": "Leverage: Redemption - Season 3"
      },
      {
        "requests": 1328,
        "impressions": 1504,
        "errors": 188,
        "impressionsPerRequest": 1.13,
        "impressionsPerRequestPct": 113.25,
        "errorRatePct": 14.16,
        "avgAdsPerPod": 1.13,
        "channel": "The Librarians - Season 3",
        "label": "The Librarians - Season 3"
      },
      {
        "requests": 1432,
        "impressions": 1483,
        "errors": 171,
        "impressionsPerRequest": 1.04,
        "impressionsPerRequestPct": 103.56,
        "errorRatePct": 11.94,
        "avgAdsPerPod": 1.04,
        "channel": "The Librarians - Season 2",
        "label": "The Librarians - Season 2"
      },
      {
        "requests": 1179,
        "impressions": 1419,
        "errors": 303,
        "impressionsPerRequest": 1.2,
        "impressionsPerRequestPct": 120.36,
        "errorRatePct": 25.7,
        "avgAdsPerPod": 1.2,
        "channel": "Leverage - Season 3",
        "label": "Leverage - Season 3"
      },
      {
        "requests": 2505,
        "impressions": 1409,
        "errors": 1939,
        "impressionsPerRequest": 0.56,
        "impressionsPerRequestPct": 56.25,
        "errorRatePct": 77.41,
        "avgAdsPerPod": 0.56,
        "channel": "The Ark",
        "label": "The Ark"
      },
      {
        "requests": 1236,
        "impressions": 1176,
        "errors": 140,
        "impressionsPerRequest": 0.95,
        "impressionsPerRequestPct": 95.15,
        "errorRatePct": 11.33,
        "avgAdsPerPod": 0.95,
        "channel": "Leverage - Season 2",
        "label": "Leverage - Season 2"
      },
      {
        "requests": 710,
        "impressions": 880,
        "errors": 54,
        "impressionsPerRequest": 1.24,
        "impressionsPerRequestPct": 123.94,
        "errorRatePct": 7.61,
        "avgAdsPerPod": 1.24,
        "channel": "Leverage - Season 1",
        "label": "Leverage - Season 1"
      },
      {
        "requests": 1787,
        "impressions": 816,
        "errors": 1914,
        "impressionsPerRequest": 0.46,
        "impressionsPerRequestPct": 45.66,
        "errorRatePct": 107.11,
        "avgAdsPerPod": 0.46,
        "channel": "Leverage",
        "label": "Leverage"
      },
      {
        "requests": 710,
        "impressions": 606,
        "errors": 344,
        "impressionsPerRequest": 0.85,
        "impressionsPerRequestPct": 85.35,
        "errorRatePct": 48.45,
        "avgAdsPerPod": 0.85,
        "channel": "Leverage: Redemption - Season 2",
        "label": "Leverage: Redemption - Season 2"
      },
      {
        "requests": 458,
        "impressions": 605,
        "errors": 57,
        "impressionsPerRequest": 1.32,
        "impressionsPerRequestPct": 132.1,
        "errorRatePct": 12.45,
        "avgAdsPerPod": 1.32,
        "channel": "The Librarians - Season 4",
        "label": "The Librarians - Season 4"
      },
      {
        "requests": 555,
        "impressions": 579,
        "errors": 72,
        "impressionsPerRequest": 1.04,
        "impressionsPerRequestPct": 104.32,
        "errorRatePct": 12.97,
        "avgAdsPerPod": 1.04,
        "channel": "Almost Paradise - Season 1",
        "label": "Almost Paradise - Season 1"
      },
      {
        "requests": 477,
        "impressions": 525,
        "errors": 62,
        "impressionsPerRequest": 1.1,
        "impressionsPerRequestPct": 110.06,
        "errorRatePct": 13.0,
        "avgAdsPerPod": 1.1,
        "channel": "The Librarians - Season 1",
        "label": "The Librarians - Season 1"
      },
      {
        "requests": 445,
        "impressions": 483,
        "errors": 53,
        "impressionsPerRequest": 1.09,
        "impressionsPerRequestPct": 108.54,
        "errorRatePct": 11.91,
        "avgAdsPerPod": 1.09,
        "channel": "Leverage: Redemption -  Season 1",
        "label": "Leverage: Redemption -  Season 1"
      },
      {
        "requests": 692,
        "impressions": 469,
        "errors": 290,
        "impressionsPerRequest": 0.68,
        "impressionsPerRequestPct": 67.77,
        "errorRatePct": 41.91,
        "avgAdsPerPod": 0.68,
        "channel": "After the Ark - Season 2",
        "label": "After the Ark - Season 2"
      },
      {
        "requests": 388,
        "impressions": 340,
        "errors": 85,
        "impressionsPerRequest": 0.88,
        "impressionsPerRequestPct": 87.63,
        "errorRatePct": 21.91,
        "avgAdsPerPod": 0.88,
        "channel": "Leverage - Season 5",
        "label": "Leverage - Season 5"
      },
      {
        "requests": 1070,
        "impressions": 246,
        "errors": 1226,
        "impressionsPerRequest": 0.23,
        "impressionsPerRequestPct": 22.99,
        "errorRatePct": 114.58,
        "avgAdsPerPod": 0.23,
        "channel": "The Librarians (Full Series)",
        "label": "The Librarians (Full Series)"
      },
      {
        "requests": 166,
        "impressions": 237,
        "errors": 10,
        "impressionsPerRequest": 1.43,
        "impressionsPerRequestPct": 142.77,
        "errorRatePct": 6.02,
        "avgAdsPerPod": 1.43,
        "channel": "La Arca - Temporada 1",
        "label": "La Arca - Temporada 1"
      }
    ],
    "topCountries": [
      {
        "requests": 25282,
        "impressions": 22830,
        "errors": 10080,
        "impressionsPerRequest": 0.9,
        "impressionsPerRequestPct": 90.3,
        "errorRatePct": 39.87,
        "avgAdsPerPod": 0.9,
        "country": "United States",
        "label": "United States"
      },
      {
        "requests": 309,
        "impressions": 128,
        "errors": 279,
        "impressionsPerRequest": 0.41,
        "impressionsPerRequestPct": 41.42,
        "errorRatePct": 90.29,
        "avgAdsPerPod": 0.41,
        "country": "Australia",
        "label": "Australia"
      },
      {
        "requests": 9,
        "impressions": 6,
        "errors": 1,
        "impressionsPerRequest": 0.67,
        "impressionsPerRequestPct": 66.67,
        "errorRatePct": 11.11,
        "avgAdsPerPod": 0.67,
        "country": "India",
        "label": "India"
      },
      {
        "requests": 2,
        "impressions": 0,
        "errors": 2,
        "impressionsPerRequest": 0.0,
        "impressionsPerRequestPct": 0.0,
        "errorRatePct": 100.0,
        "avgAdsPerPod": 0.0,
        "country": "Canada",
        "label": "Canada"
      }
    ],
    "topVideos": [
      {
        "requests": 1227,
        "impressions": 1304,
        "errors": 174,
        "impressionsPerRequest": 1.06,
        "impressionsPerRequestPct": 106.28,
        "errorRatePct": 14.18,
        "avgAdsPerPod": 1.06,
        "videoTitle": "And the Wrath of Chaos",
        "channel": "The Librarians - Season 3",
        "label": "And the Wrath of Chaos"
      },
      {
        "requests": 1171,
        "impressions": 1284,
        "errors": 167,
        "impressionsPerRequest": 1.1,
        "impressionsPerRequestPct": 109.65,
        "errorRatePct": 14.26,
        "avgAdsPerPod": 1.1,
        "videoTitle": "Everybody Wins",
        "channel": "The Ark - Season 1",
        "label": "Everybody Wins"
      },
      {
        "requests": 1208,
        "impressions": 1191,
        "errors": 147,
        "impressionsPerRequest": 0.99,
        "impressionsPerRequestPct": 98.59,
        "errorRatePct": 12.17,
        "avgAdsPerPod": 0.99,
        "videoTitle": "And the Final Curtain",
        "channel": "The Librarians - Season 2",
        "label": "And the Final Curtain"
      },
      {
        "requests": 1566,
        "impressions": 1125,
        "errors": 330,
        "impressionsPerRequest": 0.72,
        "impressionsPerRequestPct": 71.84,
        "errorRatePct": 21.07,
        "avgAdsPerPod": 0.72,
        "videoTitle": "The Boys' Night Out Job",
        "channel": "Leverage - Season 4",
        "label": "The Boys' Night Out Job"
      },
      {
        "requests": 910,
        "impressions": 925,
        "errors": 7,
        "impressionsPerRequest": 1.02,
        "impressionsPerRequestPct": 101.65,
        "errorRatePct": 0.77,
        "avgAdsPerPod": 1.02,
        "videoTitle": "It Can't Be True",
        "channel": "The Ark - Season 2",
        "label": "It Can't Be True"
      },
      {
        "requests": 383,
        "impressions": 840,
        "errors": 82,
        "impressionsPerRequest": 2.19,
        "impressionsPerRequestPct": 219.32,
        "errorRatePct": 21.41,
        "avgAdsPerPod": 2.19,
        "videoTitle": "The Three-Card Monte Job",
        "channel": "Leverage - Season 3",
        "label": "The Three-Card Monte Job"
      },
      {
        "requests": 637,
        "impressions": 722,
        "errors": 138,
        "impressionsPerRequest": 1.13,
        "impressionsPerRequestPct": 113.34,
        "errorRatePct": 21.66,
        "avgAdsPerPod": 1.13,
        "videoTitle": "Kill or Be Killed",
        "channel": "The Ark - Season 2",
        "label": "Kill or Be Killed"
      },
      {
        "requests": 1060,
        "impressions": 661,
        "errors": 435,
        "impressionsPerRequest": 0.62,
        "impressionsPerRequestPct": 62.36,
        "errorRatePct": 41.04,
        "avgAdsPerPod": 0.62,
        "videoTitle": "The Hustler Job",
        "channel": "Leverage: Redemption - Season 3",
        "label": "The Hustler Job"
      },
      {
        "requests": 717,
        "impressions": 604,
        "errors": 187,
        "impressionsPerRequest": 0.84,
        "impressionsPerRequestPct": 84.24,
        "errorRatePct": 26.08,
        "avgAdsPerPod": 0.84,
        "videoTitle": "Fortunate",
        "channel": "The Ark",
        "label": "Fortunate"
      },
      {
        "requests": 669,
        "impressions": 554,
        "errors": 69,
        "impressionsPerRequest": 0.83,
        "impressionsPerRequestPct": 82.81,
        "errorRatePct": 10.31,
        "avgAdsPerPod": 0.83,
        "videoTitle": "The Maltese Falcon Job",
        "channel": "Leverage - Season 2",
        "label": "The Maltese Falcon Job"
      },
      {
        "requests": 692,
        "impressions": 469,
        "errors": 290,
        "impressionsPerRequest": 0.68,
        "impressionsPerRequestPct": 67.77,
        "errorRatePct": 41.91,
        "avgAdsPerPod": 0.68,
        "videoTitle": "Episode 212",
        "channel": "After the Ark - Season 2",
        "label": "Episode 212"
      },
      {
        "requests": 521,
        "impressions": 427,
        "errors": 189,
        "impressionsPerRequest": 0.82,
        "impressionsPerRequestPct": 81.96,
        "errorRatePct": 36.28,
        "avgAdsPerPod": 0.82,
        "videoTitle": "The Crowning Achievement Job",
        "channel": "Leverage: Redemption - Season 2",
        "label": "The Crowning Achievement Job"
      },
      {
        "requests": 407,
        "impressions": 419,
        "errors": 47,
        "impressionsPerRequest": 1.03,
        "impressionsPerRequestPct": 102.95,
        "errorRatePct": 11.55,
        "avgAdsPerPod": 1.03,
        "videoTitle": "The Runway Job",
        "channel": "Leverage - Season 2",
        "label": "The Runway Job"
      },
      {
        "requests": 383,
        "impressions": 375,
        "errors": 50,
        "impressionsPerRequest": 0.98,
        "impressionsPerRequestPct": 97.91,
        "errorRatePct": 13.05,
        "avgAdsPerPod": 0.98,
        "videoTitle": "The Great Train Job",
        "channel": "Leverage: Redemption -  Season 1",
        "label": "The Great Train Job"
      },
      {
        "requests": 348,
        "impressions": 321,
        "errors": 78,
        "impressionsPerRequest": 0.92,
        "impressionsPerRequestPct": 92.24,
        "errorRatePct": 22.41,
        "avgAdsPerPod": 0.92,
        "videoTitle": "Every Single Person Matters",
        "channel": "The Ark - Season 1",
        "label": "Every Single Person Matters"
      },
      {
        "requests": 327,
        "impressions": 314,
        "errors": 4,
        "impressionsPerRequest": 0.96,
        "impressionsPerRequestPct": 96.02,
        "errorRatePct": 1.22,
        "avgAdsPerPod": 0.96,
        "videoTitle": "The Last Dam Job",
        "channel": "Leverage",
        "label": "The Last Dam Job"
      },
      {
        "requests": 301,
        "impressions": 300,
        "errors": 52,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 99.67,
        "errorRatePct": 17.28,
        "avgAdsPerPod": 1.0,
        "videoTitle": "The Boiler Room Job",
        "channel": "Leverage - Season 4",
        "label": "The Boiler Room Job"
      },
      {
        "requests": 313,
        "impressions": 297,
        "errors": 76,
        "impressionsPerRequest": 0.95,
        "impressionsPerRequestPct": 94.89,
        "errorRatePct": 24.28,
        "avgAdsPerPod": 0.95,
        "videoTitle": "The Inside Job",
        "channel": "Leverage - Season 3",
        "label": "The Inside Job"
      },
      {
        "requests": 269,
        "impressions": 258,
        "errors": 34,
        "impressionsPerRequest": 0.96,
        "impressionsPerRequestPct": 95.91,
        "errorRatePct": 12.64,
        "avgAdsPerPod": 0.96,
        "videoTitle": "The Mile High Job",
        "channel": "Leverage - Season 1",
        "label": "The Mile High Job"
      },
      {
        "requests": 249,
        "impressions": 257,
        "errors": 34,
        "impressionsPerRequest": 1.03,
        "impressionsPerRequestPct": 103.21,
        "errorRatePct": 13.65,
        "avgAdsPerPod": 1.03,
        "videoTitle": "It Will Be Over Soon",
        "channel": "The Ark - Season 2",
        "label": "It Will Be Over Soon"
      },
      {
        "requests": 331,
        "impressions": 246,
        "errors": 93,
        "impressionsPerRequest": 0.74,
        "impressionsPerRequestPct": 74.32,
        "errorRatePct": 28.1,
        "avgAdsPerPod": 0.74,
        "videoTitle": "Get Out and Push",
        "channel": "The Ark",
        "label": "Get Out and Push"
      },
      {
        "requests": 223,
        "impressions": 238,
        "errors": 12,
        "impressionsPerRequest": 1.07,
        "impressionsPerRequestPct": 106.73,
        "errorRatePct": 5.38,
        "avgAdsPerPod": 1.07,
        "videoTitle": "Something Walker This Way Comes",
        "channel": "Almost Paradise - Season 1",
        "label": "Something Walker This Way Comes"
      },
      {
        "requests": 77,
        "impressions": 237,
        "errors": 7,
        "impressionsPerRequest": 3.08,
        "impressionsPerRequestPct": 307.79,
        "errorRatePct": 9.09,
        "avgAdsPerPod": 3.08,
        "videoTitle": "The Bank Shot Job",
        "channel": "Leverage - Season 1",
        "label": "The Bank Shot Job"
      },
      {
        "requests": 72,
        "impressions": 232,
        "errors": 7,
        "impressionsPerRequest": 3.22,
        "impressionsPerRequestPct": 322.22,
        "errorRatePct": 9.72,
        "avgAdsPerPod": 3.22,
        "videoTitle": "Get Out and Push",
        "channel": "The Ark - Season 1",
        "label": "Get Out and Push"
      },
      {
        "requests": 260,
        "impressions": 231,
        "errors": 38,
        "impressionsPerRequest": 0.89,
        "impressionsPerRequestPct": 88.85,
        "errorRatePct": 14.62,
        "avgAdsPerPod": 0.89,
        "videoTitle": "And the Heart of Darkness",
        "channel": "The Librarians - Season 1",
        "label": "And the Heart of Darkness"
      },
      {
        "requests": 67,
        "impressions": 229,
        "errors": 0,
        "impressionsPerRequest": 3.42,
        "impressionsPerRequestPct": 341.79,
        "errorRatePct": 0.0,
        "avgAdsPerPod": 3.42,
        "videoTitle": "The Last Dam Job",
        "channel": "Leverage - Season 4",
        "label": "The Last Dam Job"
      },
      {
        "requests": 218,
        "impressions": 218,
        "errors": 92,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 100.0,
        "errorRatePct": 42.2,
        "avgAdsPerPod": 1.0,
        "videoTitle": "The Cooling off the Mark Job",
        "channel": "Leverage: Redemption - Season 3",
        "label": "The Cooling off the Mark Job"
      },
      {
        "requests": 223,
        "impressions": 214,
        "errors": 182,
        "impressionsPerRequest": 0.96,
        "impressionsPerRequestPct": 95.96,
        "errorRatePct": 81.61,
        "avgAdsPerPod": 0.96,
        "videoTitle": "We Don't Kill Our Own",
        "channel": "The Ark",
        "label": "We Don't Kill Our Own"
      },
      {
        "requests": 240,
        "impressions": 213,
        "errors": 42,
        "impressionsPerRequest": 0.89,
        "impressionsPerRequestPct": 88.75,
        "errorRatePct": 17.5,
        "avgAdsPerPod": 0.89,
        "videoTitle": "The Shakedown in Clone-Town Job",
        "channel": "Leverage: Redemption - Season 3",
        "label": "The Shakedown in Clone-Town Job"
      },
      {
        "requests": 209,
        "impressions": 209,
        "errors": 0,
        "impressionsPerRequest": 1.0,
        "impressionsPerRequestPct": 100.0,
        "errorRatePct": 0.0,
        "avgAdsPerPod": 1.0,
        "videoTitle": "The Long Way Down Job",
        "channel": "Leverage",
        "label": "The Long Way Down Job"
      }
    ],
    "caveats": [
      "This is DotStudios app ad-serving delivery data, not GA4 ads_* event data.",
      "These impressions are ElectricNOW in-app ad impressions, not Google/Meta paid-campaign impressions and not YouTube ad impressions.",
      "No ad-server revenue or yield was included in this CSV, so this measures delivery volume, not true ad sales revenue."
    ],
    "plainEnglish": "DotStudios app ad-serving data shows 22,964 in-app ad impressions from 25,602 ad requests for Aug 17-Aug 23, 2026, with 10,362 errors. Roku accounts for most delivered impressions in this export, but ad-server revenue/yield is still needed before calling this true ad sales performance.",
    "status": "fresh_manual",
    "dataFreshness": "manual_current",
    "updatedAt": "2026-08-24T14:50:00-07:00",
    "periodStart": "2026-08-17",
    "periodEnd": "2026-08-23",
    "freshness": "Fresh manual DotStudios app ad-serving export integrated for Aug 17-Aug 23, 2026.",
    "adRevenueAvailable": false,
    "revenueCaveat": "No ad-server revenue or yield was included in this DotStudios CSV; this section measures in-app ad delivery, not true ad-sales revenue."
  },
  "sourceStatus": {
    "ga4": {
      "status": "fresh",
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    "stripe": {
      "status": "fresh_charge_list_analytics_permission_blocked",
      "period": "Aug 17-Aug 23, 2026",
      "gross": 398.81,
      "transactions": 19,
      "note": "Stripe Analytics/Sigma blocked by reporting_write; charge list parsed fresh and not added to DotStudios."
    },
    "rokuSales": {
      "status": "stale_preserved_attachment_unavailable",
      "period": "Aug 10-Aug 16, 2026",
      "source": "Roku Sales Activity email; latest attachment unavailable"
    },
    "rokuAppEngagement": {
      "status": "stale_preserved_attachment_unavailable",
      "period": "Aug 9-Aug 15, 2026 (Roku email generated Aug 17, 2026 7:25 AM PDT)",
      "source": "Roku App Engagement email; latest attachment unavailable"
    },
    "rokuTRC": {
      "status": "excluded_from_app_usage",
      "note": "TRC emails refer to ElectricNOW live channel outside the app in Roku live channel section."
    },
    "appleManual": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "downloads": 528,
      "salesGross": 477.78
    },
    "apple": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "downloads": 528,
      "salesGross": 477.78,
      "source": "Manual Apple App Store Connect snapshot"
    },
    "dotStudiosTvod": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "gross": 1846.15,
      "transactions": 84
    },
    "dotStudiosAppInstalls": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "installs": 1533,
      "updates": 2280,
      "note": "Fresh DotStudios app-installs-summary-2.csv integrated."
    },
    "dotStudiosVideoViews": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "totalViews": 16373,
      "appleTvViews": 241,
      "note": "Fresh DotStudios video-views-3.csv integrated, including Apple TV views."
    },
    "dotStudiosAppAds": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "requests": 25602,
      "impressions": 22964,
      "errors": 10362,
      "note": "Fresh DotStudios ad-metrics-3.csv integrated as ElectricNOW in-app ad-serving delivery only; not Google/Meta paid-campaign impressions and not true ad revenue."
    },
    "googleAds": {
      "status": "stale_metrics_preserved_campaign_inventory_only",
      "period": "Jul 31-Aug 6, 2026",
      "note": "Aug 24 connector returned campaign inventory only, not metrics."
    },
    "metaAds": {
      "status": "stale_no_new_email",
      "period": "Jul 12-Jul 18, 2026",
      "note": "No newer Nathan/Forge One Meta-only report found."
    },
    "youtube": {
      "status": "partial_fresh",
      "period": "Jan 1-Aug 23 YTD; current daily rows through 2026-08-21",
      "ytdRevenue": 115998.58
    }
  },
  "refreshAuditNotes": [
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
    "YouTube YTD income is present and separate from app TVOD.",
    "Roku Aug 24 email search did not expose PDF attachments, so Aug 17 Roku Sales/App Engagement values are preserved and marked stale.",
    "Stripe Analytics/Sigma blocked by reporting_write permission; charge-list source check is fresh.",
    "Google Ads Aug 24 connector output contained campaign inventory only, not performance metrics.",
    "No newer Nathan/Forge One Meta-only report found in the saved Outlook search.",
    "YouTube current-period daily rows returned through Aug 21 only; Aug 22-Aug 23 were not zero-filled."
  ],
  "connectorStatus": {
    "GA4": "CONNECTED; property 497892271 refreshed for Aug 17-Aug 23, 2026.",
    "Stripe": "CONNECTED; charge-list checked fresh for Aug 17-Aug 23, 2026: 19 charges / $398.81. Stripe Analytics/Sigma blocked by reporting_write permission.",
    "Outlook/Roku emails": "CONNECTED search; Aug 24 Roku emails found but attachments were not available in the connector result, so Aug 17 Roku App Engagement/Sales values are preserved and marked stale. TRC emails are excluded from app usage because they are Roku live-channel-only.",
    "Google Ads": "CONNECTED inventory check only; Aug 24 pull did not provide performance metrics, so previous metrics are preserved and labeled stale.",
    "Meta Ads": "Outlook search did not find a newer Nathan/Forge One Meta-only report; prior values preserved and labeled stale.",
    "YouTube": "CONNECTED; YTD refreshed through Aug 23 and current-period daily rows returned through 2026-08-21.",
    "Apple App Store Connect": "Manual sales/download screenshots uploaded Aug 24 integrated for Aug 17-Aug 23, 2026.",
    "DotStudios TVOD": "Manual revenue-transactions-11.csv uploaded Aug 24 integrated as broadest TVOD export covering Aug 17-Aug 23, 2026.",
    "DotStudios App Installs": "Fresh manual app-installs-summary-2.csv integrated for Aug 17-Aug 23, 2026: 1,533 installs and 2,280 updates.",
    "DotStudios Video Views": "Fresh manual video-views-3.csv integrated for Aug 17-Aug 23, 2026: 16,373 views, including 241 Apple TV views.",
    "DotStudios App Ad Serving": "Fresh manual ad-metrics-3.csv integrated for Aug 17-Aug 23, 2026: 22,964 ElectricNOW in-app ad impressions from 25,602 requests. This is ad delivery, not paid-campaign impressions or ad revenue."
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
    "Complete Aug 24 refresh applied for Aug 17-Aug 23, 2026.",
    "DotStudios TVOD is treated as broadest current sales source; Apple, Roku, and Stripe are overlapping checks.",
    "Roku TRC emails are live-channel-only and excluded from ElectricNOW app/platform usage."
  ],
  "monthlyTrendNote": "Rolling 28-day trend covers Jul 24-Aug 20, 2026 and compares against Jun 26-Jul 23, 2026 where summary comparisons are available.",
  "lastUpdated": "2026-08-24 14:50 PDT",
  "lastUpdatedIso": "2026-08-24T14:50:00-07:00",
  "generatedAtIso": "2026-08-24T14:50:00-07:00",
  "reportingPeriod": "Aug 17-Aug 23, 2026",
  "rolling28Summary": {
    "period": "Jul 27-Aug 23, 2026",
    "previousPeriod": "Jun 29-Jul 26, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "current": {
      "activeUsers": 15355,
      "newUsers": 8416,
      "sessions": 50350,
      "engagedSessions": 40165,
      "engagementRate": 79.77159880834161,
      "screenPageViews": 205621,
      "eventCount": 4408491,
      "userEngagementDuration": 90290787,
      "totalEngagementHours": 25080.774166666666,
      "avgEngagedMinutesPerUser": 98.00367632692934,
      "avgEngagedMinutesPerSession": 29.887714995034756
    },
    "previous": {
      "activeUsers": 11387,
      "newUsers": 4892,
      "sessions": 38997,
      "engagedSessions": 30395,
      "engagementRate": 77.94189296612561,
      "screenPageViews": 127781,
      "eventCount": 3995702,
      "userEngagementDuration": 81946428,
      "totalEngagementHours": 22762.896666666667,
      "avgEngagedMinutesPerUser": 119.94149468692369,
      "avgEngagedMinutesPerSession": 35.02253506680001
    },
    "activeUsersDirection": {
      "direction": "up",
      "deltaPct": 34.8
    },
    "sessionsDirection": {
      "direction": "up",
      "deltaPct": 29.1
    },
    "screenPageViewsDirection": {
      "direction": "up",
      "deltaPct": 60.9
    }
  },
  "sourceMediumSummary": {
    "period": "Aug 17-Aug 23, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "sessionSourceMedium": "(direct) / (none)",
        "activeUsers": 2974,
        "sessions": 5818,
        "engagedSessions": 4669,
        "screenPageViews": 29252,
        "eventCount": 161814
      },
      {
        "sessionSourceMedium": "(not set)",
        "activeUsers": 915,
        "sessions": 1900,
        "engagedSessions": 0,
        "screenPageViews": 3723,
        "eventCount": 355340
      },
      {
        "sessionSourceMedium": "homescreen / (not set)",
        "activeUsers": 606,
        "sessions": 2118,
        "engagedSessions": 1867,
        "screenPageViews": 12220,
        "eventCount": 371860
      },
      {
        "sessionSourceMedium": "homescreen / ",
        "activeUsers": 323,
        "sessions": 461,
        "engagedSessions": 0,
        "screenPageViews": 1202,
        "eventCount": 3322
      },
      {
        "sessionSourceMedium": "google-play / organic",
        "activeUsers": 270,
        "sessions": 495,
        "engagedSessions": 443,
        "screenPageViews": 3485,
        "eventCount": 16798
      },
      {
        "sessionSourceMedium": "hs-search / (not set)",
        "activeUsers": 120,
        "sessions": 325,
        "engagedSessions": 257,
        "screenPageViews": 1803,
        "eventCount": 34564
      },
      {
        "sessionSourceMedium": "google / organic",
        "activeUsers": 107,
        "sessions": 310,
        "engagedSessions": 239,
        "screenPageViews": 2700,
        "eventCount": 15443
      },
      {
        "sessionSourceMedium": "homescreen / (none)",
        "activeUsers": 96,
        "sessions": 105,
        "engagedSessions": 6,
        "screenPageViews": 67,
        "eventCount": 33082
      },
      {
        "sessionSourceMedium": "fb / paid",
        "activeUsers": 78,
        "sessions": 106,
        "engagedSessions": 81,
        "screenPageViews": 387,
        "eventCount": 1895
      },
      {
        "sessionSourceMedium": "apps.facebook.com / (not set)",
        "activeUsers": 75,
        "sessions": 100,
        "engagedSessions": 72,
        "screenPageViews": 111,
        "eventCount": 860
      },
      {
        "sessionSourceMedium": "channel-store / (not set)",
        "activeUsers": 54,
        "sessions": 145,
        "engagedSessions": 130,
        "screenPageViews": 908,
        "eventCount": 18628
      },
      {
        "sessionSourceMedium": "hs-search / ",
        "activeUsers": 33,
        "sessions": 53,
        "engagedSessions": 0,
        "screenPageViews": 132,
        "eventCount": 386
      },
      {
        "sessionSourceMedium": "hs-voice-search / (not set)",
        "activeUsers": 27,
        "sessions": 114,
        "engagedSessions": 108,
        "screenPageViews": 753,
        "eventCount": 30036
      },
      {
        "sessionSourceMedium": "bing / organic",
        "activeUsers": 25,
        "sessions": 59,
        "engagedSessions": 52,
        "screenPageViews": 483,
        "eventCount": 4405
      },
      {
        "sessionSourceMedium": "(data not available)",
        "activeUsers": 16,
        "sessions": 16,
        "engagedSessions": 2,
        "screenPageViews": 54,
        "eventCount": 233
      },
      {
        "sessionSourceMedium": "ig / paid",
        "activeUsers": 15,
        "sessions": 25,
        "engagedSessions": 20,
        "screenPageViews": 197,
        "eventCount": 601
      },
      {
        "sessionSourceMedium": "channel-store / ",
        "activeUsers": 12,
        "sessions": 20,
        "engagedSessions": 0,
        "screenPageViews": 59,
        "eventCount": 122
      },
      {
        "sessionSourceMedium": "electricnow.us.auth0.com / referral",
        "activeUsers": 12,
        "sessions": 34,
        "engagedSessions": 29,
        "screenPageViews": 446,
        "eventCount": 1349
      },
      {
        "sessionSourceMedium": "facebook.com / referral",
        "activeUsers": 12,
        "sessions": 12,
        "engagedSessions": 2,
        "screenPageViews": 12,
        "eventCount": 55
      },
      {
        "sessionSourceMedium": "apps.instagram.com / (not set)",
        "activeUsers": 9,
        "sessions": 10,
        "engagedSessions": 6,
        "screenPageViews": 13,
        "eventCount": 200
      },
      {
        "sessionSourceMedium": "hs-search / (none)",
        "activeUsers": 8,
        "sessions": 8,
        "engagedSessions": 1,
        "screenPageViews": 5,
        "eventCount": 52
      },
      {
        "sessionSourceMedium": "google / cpc",
        "activeUsers": 7,
        "sessions": 9,
        "engagedSessions": 8,
        "screenPageViews": 13,
        "eventCount": 64
      },
      {
        "sessionSourceMedium": "homescreen-menu / (not set)",
        "activeUsers": 6,
        "sessions": 10,
        "engagedSessions": 5,
        "screenPageViews": 46,
        "eventCount": 1217
      },
      {
        "sessionSourceMedium": "hs-voice-search / ",
        "activeUsers": 6,
        "sessions": 9,
        "engagedSessions": 0,
        "screenPageViews": 19,
        "eventCount": 47
      },
      {
        "sessionSourceMedium": "tomsguide.com / referral",
        "activeUsers": 5,
        "sessions": 6,
        "engagedSessions": 5,
        "screenPageViews": 46,
        "eventCount": 132
      },
      {
        "sessionSourceMedium": "apps.facebook.com / ",
        "activeUsers": 4,
        "sessions": 9,
        "engagedSessions": 0,
        "screenPageViews": 6,
        "eventCount": 34
      },
      {
        "sessionSourceMedium": "bit.ly / referral",
        "activeUsers": 4,
        "sessions": 4,
        "engagedSessions": 1,
        "screenPageViews": 4,
        "eventCount": 17
      },
      {
        "sessionSourceMedium": "electricentertainment.com / referral",
        "activeUsers": 4,
        "sessions": 26,
        "engagedSessions": 19,
        "screenPageViews": 44,
        "eventCount": 395
      },
      {
        "sessionSourceMedium": "l.facebook.com / referral",
        "activeUsers": 4,
        "sessions": 10,
        "engagedSessions": 6,
        "screenPageViews": 46,
        "eventCount": 93
      },
      {
        "sessionSourceMedium": "roku-mobile-app / (not set)",
        "activeUsers": 4,
        "sessions": 8,
        "engagedSessions": 8,
        "screenPageViews": 38,
        "eventCount": 8232
      },
      {
        "sessionSourceMedium": "voice-command / (not set)",
        "activeUsers": 4,
        "sessions": 14,
        "engagedSessions": 14,
        "screenPageViews": 97,
        "eventCount": 1976
      },
      {
        "sessionSourceMedium": "yahoo / organic",
        "activeUsers": 4,
        "sessions": 27,
        "engagedSessions": 18,
        "screenPageViews": 71,
        "eventCount": 641
      },
      {
        "sessionSourceMedium": "apps.facebook.com / (none)",
        "activeUsers": 3,
        "sessions": 6,
        "engagedSessions": 4,
        "screenPageViews": 4,
        "eventCount": 41
      },
      {
        "sessionSourceMedium": "apps.instagram.com / (none)",
        "activeUsers": 3,
        "sessions": 4,
        "engagedSessions": 3,
        "screenPageViews": 10,
        "eventCount": 150
      },
      {
        "sessionSourceMedium": "channel-store / (none)",
        "activeUsers": 3,
        "sessions": 3,
        "engagedSessions": 0,
        "screenPageViews": 5,
        "eventCount": 6
      },
      {
        "sessionSourceMedium": "duckduckgo / organic",
        "activeUsers": 3,
        "sessions": 10,
        "engagedSessions": 8,
        "screenPageViews": 40,
        "eventCount": 131
      },
      {
        "sessionSourceMedium": "m.facebook.com / referral",
        "activeUsers": 3,
        "sessions": 3,
        "engagedSessions": 0,
        "screenPageViews": 3,
        "eventCount": 12
      },
      {
        "sessionSourceMedium": "apps.instagram.com / ",
        "activeUsers": 2,
        "sessions": 5,
        "engagedSessions": 0,
        "screenPageViews": 3,
        "eventCount": 14
      },
      {
        "sessionSourceMedium": "auto-run-dev / (not set)",
        "activeUsers": 2,
        "sessions": 28,
        "engagedSessions": 28,
        "screenPageViews": 188,
        "eventCount": 5569
      },
      {
        "sessionSourceMedium": "chatgpt.com / ai-assistant",
        "activeUsers": 2,
        "sessions": 2,
        "engagedSessions": 2,
        "screenPageViews": 4,
        "eventCount": 17
      },
      {
        "sessionSourceMedium": "external-control / (not set)",
        "activeUsers": 2,
        "sessions": 17,
        "engagedSessions": 15,
        "screenPageViews": 142,
        "eventCount": 4894
      },
      {
        "sessionSourceMedium": "hs-d / (not set)",
        "activeUsers": 2,
        "sessions": 3,
        "engagedSessions": 2,
        "screenPageViews": 11,
        "eventCount": 23
      },
      {
        "sessionSourceMedium": "hs-voice-search / (none)",
        "activeUsers": 2,
        "sessions": 2,
        "engagedSessions": 0,
        "screenPageViews": 1,
        "eventCount": 2
      },
      {
        "sessionSourceMedium": "ntp.msn.com / referral",
        "activeUsers": 2,
        "sessions": 14,
        "engagedSessions": 13,
        "screenPageViews": 46,
        "eventCount": 215
      },
      {
        "sessionSourceMedium": "roku-mobile-app / ",
        "activeUsers": 2,
        "sessions": 2,
        "engagedSessions": 0,
        "screenPageViews": 3,
        "eventCount": 8
      },
      {
        "sessionSourceMedium": "th / paid",
        "activeUsers": 2,
        "sessions": 4,
        "engagedSessions": 3,
        "screenPageViews": 16,
        "eventCount": 48
      },
      {
        "sessionSourceMedium": "voice-command / ",
        "activeUsers": 2,
        "sessions": 2,
        "engagedSessions": 0,
        "screenPageViews": 6,
        "eventCount": 13
      },
      {
        "sessionSourceMedium": "youtube.com / referral",
        "activeUsers": 2,
        "sessions": 4,
        "engagedSessions": 3,
        "screenPageViews": 18,
        "eventCount": 37
      },
      {
        "sessionSourceMedium": "en.wikipedia.org / referral",
        "activeUsers": 1,
        "sessions": 1,
        "engagedSessions": 0,
        "screenPageViews": 1,
        "eventCount": 5
      },
      {
        "sessionSourceMedium": "homescreen-menu / ",
        "activeUsers": 1,
        "sessions": 2,
        "engagedSessions": 0,
        "screenPageViews": 4,
        "eventCount": 7
      },
      {
        "sessionSourceMedium": "homescreen-menu / (none)",
        "activeUsers": 1,
        "sessions": 1,
        "engagedSessions": 0,
        "screenPageViews": 0,
        "eventCount": 1
      },
      {
        "sessionSourceMedium": "linkedin.com / referral",
        "activeUsers": 1,
        "sessions": 1,
        "engagedSessions": 1,
        "screenPageViews": 3,
        "eventCount": 16
      },
      {
        "sessionSourceMedium": "linktr.ee / referral",
        "activeUsers": 1,
        "sessions": 2,
        "engagedSessions": 2,
        "screenPageViews": 1,
        "eventCount": 9
      },
      {
        "sessionSourceMedium": "msn.com / referral",
        "activeUsers": 1,
        "sessions": 2,
        "engagedSessions": 1,
        "screenPageViews": 3,
        "eventCount": 8
      },
      {
        "sessionSourceMedium": "other-channel / ",
        "activeUsers": 1,
        "sessions": 1,
        "engagedSessions": 0,
        "screenPageViews": 1,
        "eventCount": 120
      },
      {
        "sessionSourceMedium": "reddit.com / referral",
        "activeUsers": 1,
        "sessions": 11,
        "engagedSessions": 11,
        "screenPageViews": 61,
        "eventCount": 786
      },
      {
        "sessionSourceMedium": "roku-mobile-app / (none)",
        "activeUsers": 1,
        "sessions": 1,
        "engagedSessions": 0,
        "screenPageViews": 1,
        "eventCount": 1
      },
      {
        "sessionSourceMedium": "search.brave.com / referral",
        "activeUsers": 1,
        "sessions": 4,
        "engagedSessions": 2,
        "screenPageViews": 14,
        "eventCount": 116
      },
      {
        "sessionSourceMedium": "search.nortonsafesearch.com / referral",
        "activeUsers": 1,
        "sessions": 1,
        "engagedSessions": 1,
        "screenPageViews": 1,
        "eventCount": 5
      }
    ],
    "note": "Landing-page/session acquisition rows are acquisition context only; they are not counted as platform audience."
  },
  "campaignSummary": {
    "period": "Aug 10-Aug 16, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "sessionCampaignName": "(direct)",
        "activeUsers": 3262,
        "newUsers": 1321,
        "sessions": 6484,
        "engagedSessions": 5268,
        "engagementRate": 0.8124614435533621,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "(direct)"
      },
      {
        "sessionCampaignName": "(not set)",
        "activeUsers": 1327,
        "newUsers": 294,
        "sessions": 4436,
        "engagedSessions": 3495,
        "engagementRate": 0.7878719567177638,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "(not set)"
      },
      {
        "sessionCampaignName": "(organic)",
        "activeUsers": 161,
        "newUsers": 81,
        "sessions": 437,
        "engagedSessions": 349,
        "engagementRate": 0.7986270022883295,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "(organic)"
      },
      {
        "sessionCampaignName": "fb4a",
        "activeUsers": 115,
        "newUsers": 7,
        "sessions": 158,
        "engagedSessions": 105,
        "engagementRate": 0.6645569620253164,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "fb4a"
      },
      {
        "sessionCampaignName": "(referral)",
        "activeUsers": 75,
        "newUsers": 49,
        "sessions": 145,
        "engagedSessions": 107,
        "engagementRate": 0.7379310344827587,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "(referral)"
      },
      {
        "sessionCampaignName": "52522971073362",
        "activeUsers": 37,
        "newUsers": 10,
        "sessions": 44,
        "engagedSessions": 41,
        "engagementRate": 0.9318181818181818,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "52522971073362"
      },
      {
        "sessionCampaignName": "52522971072562",
        "activeUsers": 30,
        "newUsers": 9,
        "sessions": 38,
        "engagedSessions": 33,
        "engagementRate": 0.868421052631579,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "52522971072562"
      },
      {
        "sessionCampaignName": "ig4a",
        "activeUsers": 16,
        "newUsers": 1,
        "sessions": 21,
        "engagedSessions": 11,
        "engagementRate": 0.5238095238095238,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "ig4a"
      },
      {
        "sessionCampaignName": "6991179955958",
        "activeUsers": 15,
        "newUsers": 0,
        "sessions": 21,
        "engagedSessions": 13,
        "engagementRate": 0.6190476190476191,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "6991179955958"
      },
      {
        "sessionCampaignName": "PCSM - ElectricNow App Promotion - Android",
        "activeUsers": 10,
        "newUsers": 2,
        "sessions": 11,
        "engagedSessions": 9,
        "engagementRate": 0.8181818181818182,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "PCSM - ElectricNow App Promotion - Android"
      },
      {
        "sessionCampaignName": "6946101792958",
        "activeUsers": 8,
        "newUsers": 0,
        "sessions": 8,
        "engagedSessions": 7,
        "engagementRate": 0.875,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "6946101792958"
      },
      {
        "sessionCampaignName": "52524776437562",
        "activeUsers": 6,
        "newUsers": 4,
        "sessions": 6,
        "engagedSessions": 3,
        "engagementRate": 0.5,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "52524776437562"
      },
      {
        "sessionCampaignName": "52522086945962",
        "activeUsers": 5,
        "newUsers": 0,
        "sessions": 5,
        "engagedSessions": 3,
        "engagementRate": 0.6,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "52522086945962"
      },
      {
        "sessionCampaignName": "(ai-assistant)",
        "activeUsers": 3,
        "newUsers": 2,
        "sessions": 6,
        "engagedSessions": 5,
        "engagementRate": 0.8333333333333334,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "(ai-assistant)"
      },
      {
        "sessionCampaignName": "6952224519558",
        "activeUsers": 3,
        "newUsers": 0,
        "sessions": 4,
        "engagedSessions": 1,
        "engagementRate": 0.25,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "6952224519558"
      },
      {
        "sessionCampaignName": "52522050595562",
        "activeUsers": 2,
        "newUsers": 0,
        "sessions": 2,
        "engagedSessions": 2,
        "engagementRate": 1,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "52522050595562"
      },
      {
        "sessionCampaignName": "search_result",
        "activeUsers": 1,
        "newUsers": 1,
        "sessions": 1,
        "engagedSessions": 1,
        "engagementRate": 1,
        "source": "Internal GA4 pull, property 497892271",
        "period": "Aug 10-Aug 16, 2026",
        "campaign": "search_result"
      }
    ]
  },
  "platformDeviceBreakdown": {
    "period": "Aug 17-Aug 23, 2026",
    "source": "Internal GA4 pull, property 497892271",
    "rows": [
      {
        "platform": "web",
        "deviceCategory": "smart tv",
        "activeUsers": 1510,
        "sessions": 4596,
        "engagedSessions": 2746,
        "screenPageViews": 22027,
        "eventCount": 865383,
        "userEngagementDuration": 10109796,
        "totalEngagementHours": 2808.2766666666666
      },
      {
        "platform": "iOS",
        "deviceCategory": "mobile",
        "activeUsers": 1192,
        "sessions": 2130,
        "engagedSessions": 1626,
        "screenPageViews": 11031,
        "eventCount": 52839,
        "userEngagementDuration": 1637936,
        "totalEngagementHours": 454.9822222222222
      },
      {
        "platform": "Android",
        "deviceCategory": "mobile",
        "activeUsers": 738,
        "sessions": 1698,
        "engagedSessions": 1280,
        "screenPageViews": 7873,
        "eventCount": 38636,
        "userEngagementDuration": 1905703,
        "totalEngagementHours": 529.3619444444445
      },
      {
        "platform": "Android",
        "deviceCategory": "smart tv",
        "activeUsers": 332,
        "sessions": 690,
        "engagedSessions": 629,
        "screenPageViews": 4596,
        "eventCount": 20423,
        "userEngagementDuration": 3400678,
        "totalEngagementHours": 944.6327777777777
      },
      {
        "platform": "web",
        "deviceCategory": "desktop",
        "activeUsers": 310,
        "sessions": 982,
        "engagedSessions": 645,
        "screenPageViews": 6318,
        "eventCount": 49602,
        "userEngagementDuration": 1159743,
        "totalEngagementHours": 322.1508333333333
      },
      {
        "platform": "iOS",
        "deviceCategory": "tablet",
        "activeUsers": 261,
        "sessions": 668,
        "engagedSessions": 566,
        "screenPageViews": 3549,
        "eventCount": 19565,
        "userEngagementDuration": 1686070,
        "totalEngagementHours": 468.35277777777776
      },
      {
        "platform": "iOS",
        "deviceCategory": "smart tv",
        "activeUsers": 157,
        "sessions": 369,
        "engagedSessions": 302,
        "screenPageViews": 1690,
        "eventCount": 12575,
        "userEngagementDuration": 2263465,
        "totalEngagementHours": 628.7402777777778
      },
      {
        "platform": "web",
        "deviceCategory": "mobile",
        "activeUsers": 97,
        "sessions": 134,
        "engagedSessions": 62,
        "screenPageViews": 317,
        "eventCount": 1342,
        "userEngagementDuration": 19177,
        "totalEngagementHours": 5.326944444444444
      },
      {
        "platform": "Android",
        "deviceCategory": "tablet",
        "activeUsers": 94,
        "sessions": 225,
        "engagedSessions": 193,
        "screenPageViews": 941,
        "eventCount": 10798,
        "userEngagementDuration": 672485,
        "totalEngagementHours": 186.80138888888888
      },
      {
        "platform": "web",
        "deviceCategory": "tablet",
        "activeUsers": 24,
        "sessions": 88,
        "engagedSessions": 69,
        "screenPageViews": 690,
        "eventCount": 4984,
        "userEngagementDuration": 123316,
        "totalEngagementHours": 34.254444444444445
      }
    ],
    "note": "GA4 platform/device rows. Website landing/acquisition activity remains acquisition-only."
  },
  "sourceStatuses": {
    "ga4": {
      "status": "fresh",
      "period": "Aug 17-Aug 23, 2026",
      "source": "Internal GA4 pull, property 497892271"
    },
    "stripe": {
      "status": "fresh_charge_list_analytics_permission_blocked",
      "period": "Aug 17-Aug 23, 2026",
      "gross": 398.81,
      "transactions": 19,
      "note": "Stripe Analytics/Sigma blocked by reporting_write; charge list parsed fresh and not added to DotStudios."
    },
    "rokuSales": {
      "status": "stale_preserved_attachment_unavailable",
      "period": "Aug 10-Aug 16, 2026",
      "source": "Roku Sales Activity email; latest attachment unavailable"
    },
    "rokuAppEngagement": {
      "status": "stale_preserved_attachment_unavailable",
      "period": "Aug 9-Aug 15, 2026 (Roku email generated Aug 17, 2026 7:25 AM PDT)",
      "source": "Roku App Engagement email; latest attachment unavailable"
    },
    "rokuTRC": {
      "status": "excluded_from_app_usage",
      "note": "TRC emails refer to ElectricNOW live channel outside the app in Roku live channel section."
    },
    "appleManual": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "downloads": 528,
      "salesGross": 477.78
    },
    "apple": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "downloads": 528,
      "salesGross": 477.78,
      "source": "Manual Apple App Store Connect snapshot"
    },
    "dotStudiosTvod": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "gross": 1846.15,
      "transactions": 84
    },
    "dotStudiosAppInstalls": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "installs": 1533,
      "updates": 2280,
      "note": "Fresh DotStudios app-installs-summary-2.csv integrated."
    },
    "dotStudiosVideoViews": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "totalViews": 16373,
      "appleTvViews": 241,
      "note": "Fresh DotStudios video-views-3.csv integrated, including Apple TV views."
    },
    "dotStudiosAppAds": {
      "status": "fresh_manual",
      "period": "Aug 17-Aug 23, 2026",
      "requests": 25602,
      "impressions": 22964,
      "errors": 10362,
      "note": "Fresh DotStudios ad-metrics-3.csv integrated as ElectricNOW in-app ad-serving delivery only; not Google/Meta paid-campaign impressions and not true ad revenue."
    },
    "googleAds": {
      "status": "stale_metrics_preserved_campaign_inventory_only",
      "period": "Jul 31-Aug 6, 2026",
      "note": "Aug 24 connector returned campaign inventory only, not metrics."
    },
    "metaAds": {
      "status": "stale_no_new_email",
      "period": "Jul 12-Jul 18, 2026",
      "note": "No newer Nathan/Forge One Meta-only report found."
    },
    "youtube": {
      "status": "partial_fresh",
      "period": "Jan 1-Aug 23 YTD; current daily rows through 2026-08-21",
      "ytdRevenue": 115998.58
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
    "updatedAt": "2026-08-17T12:30:00-07:00",
    "sources": [
      "DotStudios TVOD revenue-transactions-7.csv",
      "Apple App Store Connect sales screenshot",
      "Apple App Store Connect downloads screenshot"
    ],
    "period": "Aug 10-Aug 16, 2026",
    "summary": {
      "dotStudiosTvodGross": 2317.84,
      "dotStudiosTvodTransactions": 109,
      "appleGross": 648.69,
      "appleDownloads": 608
    },
    "caveat": "DotStudios and Apple overlap. DotStudios is not added to Apple.",
    "dotStudiosTvodPeriod": "Aug 10-Aug 16, 2026",
    "appleManualSnapshotPeriod": "Aug 10-Aug 16, 2026",
    "dotStudiosAppInstallsPeriod": "Aug 10-Aug 16, 2026",
    "dotStudiosVideoViewsPeriod": "Aug 10-Aug 16, 2026",
    "note": "Fresh manual checks now include DotStudios TVOD, DotStudios app installs, DotStudios title/viewing export, and Apple App Store Connect for Aug 10-Aug 16. Do not add DotStudios to Apple/Roku/Stripe because the sources overlap."
  },
  "dotStudiosAppInstalls": {
    "source": "DotStudios app-installs-summary-2.csv",
    "sourceType": "manual_dotstudios_export",
    "period": "Aug 17-Aug 23, 2026",
    "periodStart": "2026-08-17",
    "periodEnd": "2026-08-23",
    "updatedAt": "2026-08-24T14:50:00-07:00",
    "status": "fresh_manual",
    "totals": {
      "installs": 1533,
      "updates": 2280,
      "totalEvents": 3813,
      "users": 3731,
      "events": 3813
    },
    "byPlatform": [
      {
        "platform": "web",
        "installs": 675,
        "updates": 1167,
        "totalEvents": 1842,
        "users": 1761,
        "shareOfInstallsPct": 44.0
      },
      {
        "platform": "iOS",
        "installs": 570,
        "updates": 549,
        "totalEvents": 1119,
        "users": 1118,
        "shareOfInstallsPct": 37.2
      },
      {
        "platform": "Android",
        "installs": 288,
        "updates": 564,
        "totalEvents": 852,
        "users": 852,
        "shareOfInstallsPct": 18.8
      }
    ],
    "platformBreakout": [
      {
        "Platform": "web",
        "installs": 675,
        "updates": 1167,
        "totalEvents": 1842,
        "users": 1761,
        "shareOfInstallsPct": 44.0
      },
      {
        "Platform": "iOS",
        "installs": 570,
        "updates": 549,
        "totalEvents": 1119,
        "users": 1118,
        "shareOfInstallsPct": 37.2
      },
      {
        "Platform": "Android",
        "installs": 288,
        "updates": 564,
        "totalEvents": 852,
        "users": 852,
        "shareOfInstallsPct": 18.8
      }
    ],
    "byDeviceCategory": [
      {
        "deviceCategory": "mobile",
        "installs": 636,
        "updates": 719,
        "totalEvents": 1355,
        "users": 1354,
        "shareOfInstallsPct": 41.5
      },
      {
        "deviceCategory": "smart tv",
        "installs": 623,
        "updates": 1379,
        "totalEvents": 2002,
        "users": 1923,
        "shareOfInstallsPct": 40.6
      },
      {
        "deviceCategory": "desktop",
        "installs": 178,
        "updates": 14,
        "totalEvents": 192,
        "users": 190,
        "shareOfInstallsPct": 11.6
      },
      {
        "deviceCategory": "tablet",
        "installs": 96,
        "updates": 168,
        "totalEvents": 264,
        "users": 264,
        "shareOfInstallsPct": 6.3
      }
    ],
    "deviceBreakout": [
      {
        "Device Category": "mobile",
        "installs": 636,
        "updates": 719,
        "totalEvents": 1355,
        "users": 1354,
        "shareOfInstallsPct": 41.5
      },
      {
        "Device Category": "smart tv",
        "installs": 623,
        "updates": 1379,
        "totalEvents": 2002,
        "users": 1923,
        "shareOfInstallsPct": 40.6
      },
      {
        "Device Category": "desktop",
        "installs": 178,
        "updates": 14,
        "totalEvents": 192,
        "users": 190,
        "shareOfInstallsPct": 11.6
      },
      {
        "Device Category": "tablet",
        "installs": 96,
        "updates": 168,
        "totalEvents": 264,
        "users": 264,
        "shareOfInstallsPct": 6.3
      }
    ],
    "byCountry": [
      {
        "country": "United States",
        "installs": 1320,
        "updates": 2238,
        "totalEvents": 3558,
        "users": 3481,
        "citiesCount": 1489,
        "shareOfInstallsPct": 86.1
      },
      {
        "country": "Unknown",
        "installs": 178,
        "updates": 14,
        "totalEvents": 192,
        "users": 190,
        "citiesCount": 0,
        "shareOfInstallsPct": 11.6
      },
      {
        "country": "Australia",
        "installs": 13,
        "updates": 9,
        "totalEvents": 22,
        "users": 22,
        "citiesCount": 6,
        "shareOfInstallsPct": 0.8
      },
      {
        "country": "India",
        "installs": 4,
        "updates": 4,
        "totalEvents": 8,
        "users": 5,
        "citiesCount": 2,
        "shareOfInstallsPct": 0.3
      },
      {
        "country": "Brazil",
        "installs": 4,
        "updates": 0,
        "totalEvents": 4,
        "users": 4,
        "citiesCount": 0,
        "shareOfInstallsPct": 0.3
      },
      {
        "country": "Portugal",
        "installs": 4,
        "updates": 0,
        "totalEvents": 4,
        "users": 4,
        "citiesCount": 0,
        "shareOfInstallsPct": 0.3
      },
      {
        "country": "Canada",
        "installs": 2,
        "updates": 7,
        "totalEvents": 9,
        "users": 9,
        "citiesCount": 4,
        "shareOfInstallsPct": 0.1
      },
      {
        "country": "Puerto Rico",
        "installs": 2,
        "updates": 0,
        "totalEvents": 2,
        "users": 2,
        "citiesCount": 2,
        "shareOfInstallsPct": 0.1
      },
      {
        "country": "Ireland",
        "installs": 1,
        "updates": 1,
        "totalEvents": 2,
        "users": 2,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "country": "Netherlands",
        "installs": 1,
        "updates": 0,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "country": "Norway",
        "installs": 1,
        "updates": 0,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "country": "Germany",
        "installs": 1,
        "updates": 0,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "country": "Egypt",
        "installs": 1,
        "updates": 0,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "country": "Costa Rica",
        "installs": 1,
        "updates": 0,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.1
      },
      {
        "country": "Switzerland",
        "installs": 0,
        "updates": 3,
        "totalEvents": 3,
        "users": 3,
        "citiesCount": 0,
        "shareOfInstallsPct": 0.0
      },
      {
        "country": "Aruba",
        "installs": 0,
        "updates": 1,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.0
      },
      {
        "country": "China",
        "installs": 0,
        "updates": 1,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.0
      },
      {
        "country": "United Kingdom",
        "installs": 0,
        "updates": 1,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.0
      },
      {
        "country": "Denmark",
        "installs": 0,
        "updates": 1,
        "totalEvents": 1,
        "users": 1,
        "citiesCount": 1,
        "shareOfInstallsPct": 0.0
      }
    ],
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
    "note": "DotStudios install events are not GA4 active users and should be presented as a manual app-dashboard source."
  },
  "dotStudiosVideoViews": {
    "source": "DotStudios video-views-3.csv",
    "sourceType": "manual_dotstudios_export",
    "period": "Aug 17-Aug 23, 2026",
    "periodStart": "2026-08-17",
    "periodEnd": "2026-08-23",
    "updatedAt": "2026-08-24T14:50:00-07:00",
    "status": "fresh_manual",
    "rowCount": 568,
    "totalViews": 16373,
    "daily": [
      {
        "date": "2026-08-17",
        "label": "Aug 17",
        "views": 59,
        "shareOfViewsPct": 0.4
      },
      {
        "date": "2026-08-18",
        "label": "Aug 18",
        "views": 67,
        "shareOfViewsPct": 0.4
      },
      {
        "date": "2026-08-19",
        "label": "Aug 19",
        "views": 87,
        "shareOfViewsPct": 0.5
      },
      {
        "date": "2026-08-20",
        "label": "Aug 20",
        "views": 123,
        "shareOfViewsPct": 0.8
      },
      {
        "date": "2026-08-21",
        "label": "Aug 21",
        "views": 123,
        "shareOfViewsPct": 0.8
      },
      {
        "date": "2026-08-22",
        "label": "Aug 22",
        "views": 3334,
        "shareOfViewsPct": 20.4
      },
      {
        "date": "2026-08-23",
        "label": "Aug 23",
        "views": 12580,
        "shareOfViewsPct": 76.8
      }
    ],
    "byDevice": [
      {
        "device": "roku",
        "views": 6600,
        "shareOfViewsPct": 40.3
      },
      {
        "device": "android",
        "views": 2657,
        "shareOfViewsPct": 16.2
      },
      {
        "device": "desktop_web",
        "views": 2308,
        "shareOfViewsPct": 14.1
      },
      {
        "device": "ios",
        "views": 1847,
        "shareOfViewsPct": 11.3
      },
      {
        "device": "firetv",
        "views": 1480,
        "shareOfViewsPct": 9.0
      },
      {
        "device": "androidtv",
        "views": 956,
        "shareOfViewsPct": 5.8
      },
      {
        "device": "mobileweb",
        "views": 266,
        "shareOfViewsPct": 1.6
      },
      {
        "device": "appletv",
        "views": 241,
        "shareOfViewsPct": 1.5
      },
      {
        "device": "vizio",
        "views": 18,
        "shareOfViewsPct": 0.1
      }
    ],
    "deviceBreakout": [
      {
        "Device": "roku",
        "views": 6600,
        "shareOfViewsPct": 40.3
      },
      {
        "Device": "android",
        "views": 2657,
        "shareOfViewsPct": 16.2
      },
      {
        "Device": "desktop_web",
        "views": 2308,
        "shareOfViewsPct": 14.1
      },
      {
        "Device": "ios",
        "views": 1847,
        "shareOfViewsPct": 11.3
      },
      {
        "Device": "firetv",
        "views": 1480,
        "shareOfViewsPct": 9.0
      },
      {
        "Device": "androidtv",
        "views": 956,
        "shareOfViewsPct": 5.8
      },
      {
        "Device": "mobileweb",
        "views": 266,
        "shareOfViewsPct": 1.6
      },
      {
        "Device": "appletv",
        "views": 241,
        "shareOfViewsPct": 1.5
      },
      {
        "Device": "vizio",
        "views": 18,
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
    "topTitles": [
      {
        "Title": "Electric Now",
        "views": 4070,
        "shareOfViewsPct": 24.9
      },
      {
        "Title": "(not set)",
        "views": 2696,
        "shareOfViewsPct": 16.5
      },
      {
        "Title": "Hiding in Plain Sight",
        "views": 332,
        "shareOfViewsPct": 2.0
      },
      {
        "Title": "And the Red Rock",
        "views": 286,
        "shareOfViewsPct": 1.7
      },
      {
        "Title": "And Descartes' Dilemma",
        "views": 251,
        "shareOfViewsPct": 1.5
      },
      {
        "Title": "And the Deadly Drekavac",
        "views": 238,
        "shareOfViewsPct": 1.5
      },
      {
        "Title": "The One",
        "views": 215,
        "shareOfViewsPct": 1.3
      },
      {
        "Title": "ElectricNOW en Español",
        "views": 147,
        "shareOfViewsPct": 0.9
      },
      {
        "Title": "And the Burning Heart",
        "views": 141,
        "shareOfViewsPct": 0.9
      },
      {
        "Title": "I Told You Not to Come",
        "views": 136,
        "shareOfViewsPct": 0.8
      },
      {
        "Title": "And the Tethered Wish",
        "views": 134,
        "shareOfViewsPct": 0.8
      },
      {
        "Title": "And the Dance of Doom!",
        "views": 129,
        "shareOfViewsPct": 0.8
      },
      {
        "Title": "And the Vanishing Bankers",
        "views": 124,
        "shareOfViewsPct": 0.8
      },
      {
        "Title": "And the Memory Crystal",
        "views": 123,
        "shareOfViewsPct": 0.8
      },
      {
        "Title": "And the Recipe for Disaster",
        "views": 121,
        "shareOfViewsPct": 0.7
      },
      {
        "Title": "And the Feast of the Vampir",
        "views": 118,
        "shareOfViewsPct": 0.7
      },
      {
        "Title": "Everyone Wanted to Be On This Ship",
        "views": 117,
        "shareOfViewsPct": 0.7
      },
      {
        "Title": "And the House of Cards",
        "views": 112,
        "shareOfViewsPct": 0.7
      },
      {
        "Title": "The Ark Season 3 Trailer",
        "views": 111,
        "shareOfViewsPct": 0.7
      },
      {
        "Title": "And the Thief of Love",
        "views": 107,
        "shareOfViewsPct": 0.7
      }
    ],
    "sourceColumnValues": [
      {
        "source": "google_analytics",
        "views": 16373,
        "shareOfViewsPct": 100.0
      }
    ],
    "note": "DotStudios video views are a manual app-dashboard source. Roku TRC live-channel emails remain excluded from app/platform usage."
  },
  "rokuSalesActivity": {
    "period": "Aug 10-Aug 16, 2026",
    "reportPeriod": "Roku Sales Activity report generated Aug 17, 2026 at 7:24 AM PDT; report covers the last 7 weeks, with Aug 10-Aug 16 rows summarized here.",
    "source": "Roku Sales Activity email from bdp_noreply@data.roku.com",
    "emailDate": "2026-08-17T14:26:07+00:00",
    "status": "stale_preserved_attachment_unavailable",
    "transactions": 9,
    "gross": 197.91,
    "developerRevenue": 158.31,
    "daily": [
      {
        "date": "2026-08-10",
        "product": "Purchase Bundle 21",
        "transactions": 2,
        "gross": 41.98,
        "developerRevenue": 33.58
      },
      {
        "date": "2026-08-13",
        "product": "Purchase Bundle 30",
        "transactions": 1,
        "gross": 29.99,
        "developerRevenue": 23.99
      },
      {
        "date": "2026-08-14",
        "product": "Purchase Bundle 21",
        "transactions": 3,
        "gross": 62.97,
        "developerRevenue": 50.37
      },
      {
        "date": "2026-08-15",
        "product": "Purchase Bundle 21",
        "transactions": 2,
        "gross": 41.98,
        "developerRevenue": 33.58
      },
      {
        "date": "2026-08-16",
        "product": "Purchase Bundle 21",
        "transactions": 1,
        "gross": 20.99,
        "developerRevenue": 16.79
      }
    ],
    "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals.",
    "staleNote": "Aug 24 Outlook search found Roku Sales/App Engagement emails, but the connector result did not expose attachments to parse. Preserved Aug 17 values and labeled stale rather than zeroing.",
    "trcExclusionNote": "Roku TRC emails are for the separate Roku live-channel surface outside the ElectricNOW app and are excluded from app/platform usage."
  },
  "rokuSalesSummary": {
    "period": "Aug 10-Aug 16, 2026",
    "reportPeriod": "Roku Sales Activity report generated Aug 17, 2026 at 7:24 AM PDT; report covers the last 7 weeks, with Aug 10-Aug 16 rows summarized here.",
    "source": "Roku Sales Activity email from bdp_noreply@data.roku.com",
    "emailDate": "2026-08-17T14:26:07+00:00",
    "status": "stale_preserved_attachment_unavailable",
    "transactions": 9,
    "gross": 197.91,
    "developerRevenue": 158.31,
    "daily": [
      {
        "date": "2026-08-10",
        "product": "Purchase Bundle 21",
        "transactions": 2,
        "gross": 41.98,
        "developerRevenue": 33.58
      },
      {
        "date": "2026-08-13",
        "product": "Purchase Bundle 30",
        "transactions": 1,
        "gross": 29.99,
        "developerRevenue": 23.99
      },
      {
        "date": "2026-08-14",
        "product": "Purchase Bundle 21",
        "transactions": 3,
        "gross": 62.97,
        "developerRevenue": 50.37
      },
      {
        "date": "2026-08-15",
        "product": "Purchase Bundle 21",
        "transactions": 2,
        "gross": 41.98,
        "developerRevenue": 33.58
      },
      {
        "date": "2026-08-16",
        "product": "Purchase Bundle 21",
        "transactions": 1,
        "gross": 20.99,
        "developerRevenue": 16.79
      }
    ],
    "note": "Roku Sales Activity is a Roku-only source check and overlaps DotStudios device=roku rows; it is not added to DotStudios totals.",
    "staleNote": "Aug 24 Outlook search found Roku Sales/App Engagement emails, but the connector result did not expose attachments to parse. Preserved Aug 17 values and labeled stale rather than zeroing.",
    "trcExclusionNote": "Roku TRC emails are for the separate Roku live-channel surface outside the ElectricNOW app and are excluded from app/platform usage."
  },
  "visibleSourceWeek": {
    "period": "Aug 17-Aug 23, 2026",
    "source": "DotStudios TVOD export as broadest source; Apple/Roku/Stripe as overlapping checks",
    "gross": 1846.15,
    "transactions": 84
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
function _enPurgeLiveFromOnDemand(payload) {
  if (!payload || typeof payload !== 'object') return payload;
  const tv = payload.tvodTitleRevenue;
  if (tv && typeof tv === 'object') {
    ['topTitlesByNet', 'familyTotals', 'channels', 'channelBreakout'].forEach((key) => {
      if (Array.isArray(tv[key])) tv[key] = tv[key].filter((row) => !_enRowIsLive(row));
    });
  }
  return payload;
}
_enPurgeLiveFromOnDemand(data);
const API_BASE = window.ELECTRICNOW_DASHBOARD_API_BASE || '';
const HOSTED_DATA_URL = window.DASHBOARD_DATA_URL || 'https://raw.githubusercontent.com/electricnow1/electricnow-dashboard-data/main/dashboard-data.json';

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
  const svg = $(selector);
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
  $('#insights-list').innerHTML = insightItems
    .map((item, index) => `<li class="${index === 0 ? 'insight-overview' : ''}">${item}</li>`)
    .join('');
}

function renderPurchases() {
  const wrap = $('#purchase-summary');
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
  const salesSummaryEl = $('#sales-summary') || $('#purchase-summary');
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
  const metrics = report?.metrics || report;
  if (!section || !report || !metrics) {
    if (section) section.hidden = true;
    return;
  }
  section.hidden = false;
  const dateRange = report.dateLabels?.length ? `${report.dateLabels[0]}-${report.dateLabels.at(-1)}` : (report.reportPeriod || report.period);
  const reportRange = dateRange || report.reportPeriod || report.period || 'the latest Roku report';
  $('#roku-app-period').textContent = dateRange || 'Latest Roku App Engagement report';
  $('#roku-app-note').textContent =
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
  $('#roku-app-summary').innerHTML = cards
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
  const target = $(selector);
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
  const tableRows = Array.isArray(rows) ? rows : (rows?.rows || []);
  const target = $(selector);
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
              <td>${fmt.number(r.estimatedHoursWatched ?? r.hoursWatched ?? ((r.watchTimeMinutes || 0) / 60))}</td>
              <td>${fmt.currency(r.estimatedAdRevenue ?? r.estimatedRevenue)}</td>
              <td>${fmt.number(r.adImpressions)}</td>
              <td>${fmt.number(r.monetizedPlaybacks)}</td>
            </tr>`).join('')}
        </tbody>
      </table>`;
  }

  const videos = Array.isArray(summary.topVideos) ? summary.topVideos : (Array.isArray(summary.topVideosCurrentPeriod) ? summary.topVideosCurrentPeriod : []);
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
  const kpisEl = $('#us-geography-kpis');
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
  const mapEl = $('#us-geography-map');
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
      const labelEl = $('#us-geography-timezones-label');
      const tzLabel = !Array.isArray(tz) && tz && tz.label
        ? tz.label
        : 'Share of U.S. app users by time-zone grouping';
      if (labelEl) labelEl.textContent = tzLabel;
      const palette = ['rgba(56,189,248,0.85)', 'rgba(129,140,248,0.85)', 'rgba(52,211,153,0.85)'];
      const barEl = $('#us-geography-timezones-bar');
      if (barEl) {
        barEl.innerHTML = tzGroups
          .map((grp, i) => {
            const seg = `${grp.name}: ${fmt.percent(grp.pct)} (${fmt.number(grp.sessions)} ${grp.metricLabel})`;
            return `<div title="${escapeHtml(seg)}" style="width:${grp.pct}%;background:${palette[i % palette.length]};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#0a1524;min-width:0;overflow:hidden;white-space:nowrap;">${grp.pct >= 8 ? fmt.percent(grp.pct) : ''}</div>`;
          })
          .join('');
      }
      const chipsEl = $('#us-geography-timezones-chips');
      if (chipsEl) {
        chipsEl.innerHTML = tzGroups
          .map((grp) => usageStat(grp.name, fmt.percent(grp.pct), `${fmt.number(grp.sessions)} ${grp.metricLabel}`))
          .join('');
      }
      const tzCaveatEl = $('#us-geography-timezones-caveat');
      const tzCaveat = !Array.isArray(tz) && tz && tz.caveat
        ? tz.caveat
        : 'Time-zone groups are directional and based on GA4 state-level app usage signals.';
      if (tzCaveatEl) tzCaveatEl.textContent = tzCaveat;
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
  const periodLabel = tv.period || (tv.periodStart && tv.periodEnd ? `${tv.periodStart} to ${tv.periodEnd}` : tv.periodStart ? `Since ${tv.periodStart}` : 'Cumulative since launch');
  $('#tvod-title-revenue-period').textContent = periodLabel;
  $('#tvod-title-revenue-note').textContent = tv.periodNote || tv.note || '';

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
  $('#tvod-title-revenue-summary').innerHTML = cards
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

})();
