# ElectricNOW Dashboard Data

Public data file for the ElectricNOW dashboard embed.

## Required pre-publish audit

Before pushing `dashboard-data.json` or `electricnow-dashboard-embed.js` to the hosted dashboard-data repo, run:

```bash
python3 /home/user/workspace/electricnow-dashboard/pre_publish_dashboard_audit.py --expected-period "MMM D-MMM D, YYYY"
```

Publishing must be blocked if the audit returns `fail_block_publish`. The gate checks for:

- blank-chart risks, including trend data objects passed to renderers that expect arrays;
- stale or misleading date-range notes;
- missing required sections;
- TVOD title/family/channel totals that do not reconcile;
- missing YouTube YTD revenue;
- Roku TRC being clearly excluded from app/platform usage;
- source freshness labels for Roku, Stripe, Google Ads, Meta, YouTube, Apple, and DotStudios;
- embed/shareable assets containing the same current reporting period.

Use `publish_after_audit.sh` as the safe handoff point: it runs the gate first and exits non-zero if the dashboard should not be published.
