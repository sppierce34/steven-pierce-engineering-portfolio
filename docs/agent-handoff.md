# Current agent handoff

Last verified: 2026-08-06

This file is the shortest path to the repository's current operational state.
Update it whenever live URLs, published content, hosting, validation status, or
the next required action changes.

## Published portfolio

The portfolio is public and the product-owned domains are active:

- Main portfolio: `https://portfolio.meetregistrationpv.com`
- Meet Manager: `https://portfolio.meetregistrationpv.com/projects/meet-manager`
- PV Video Capture root: `https://portfolio.landoncheckin.com`
- PV Video Capture case study:
  `https://portfolio.landoncheckin.com/projects/video-capture`
- Pole Rental root: `https://portfolio.pole-rental.com`
- Pole Rental case study:
  `https://portfolio.pole-rental.com/projects/pole-rental`

All six URLs returned HTTP 200 with the intended content during the latest
verification. The fallback Sites URL is
`https://steven-pierce-engineering.sppierce34.chatgpt.site`.

The latest published source at the time of this handoff is commit `725ea1d`.
The Sites project identifier remains in `.openai/hosting.json`; reuse it rather
than creating another site.

## Routing implementation

- `lib/site-urls.ts` is the source of truth for the main portfolio URL and
  product-host root mappings.
- `worker/index.ts` maps the Landon Check-In portfolio host root to PV Video
  Capture and the Pole Rental portfolio host root to Landon Pole Rental.
- `lib/projects.ts` stores direct project portfolio links used by cards and
  case-study navigation.
- Existing customer-facing application hosts and routes are unchanged.
- `docs/portfolio-hosting.md` is the detailed hosting runbook.

## Resume state

- `public/Steven-Pierce-Resume.pdf` is the current one-page public resume served
  by the portfolio.
- Its portfolio and project hyperlinks use the product-owned custom domains.
- The editable DOCX is not stored in this public repository. When the resume is
  changed, export and visually verify a new PDF, replace the public PDF, update
  this handoff and the change log, then publish the site.

## Content sources

- Project claims and dates: `docs/projects/`
- Model-training metrics: `docs/projects/pv-video-capture.md`
- Registration, meet, uptime, failover, and recovery claims:
  `docs/projects/meet-manager.md` and `docs/infrastructure.md`
- Screenshot approvals: `docs/screenshots.md`
- Public/privacy boundaries: `docs/public-content-guidelines.md`

Do not change a metric or architecture claim using memory alone. Verify it
against a private source project or a fact supplied directly by Steven.

## Required verification

For content or application changes:

1. Run `npm test`.
2. Run any focused validation required by the change.
3. Publish the exact validated Git state with Sites unless the task is
   explicitly local-only.
4. Verify affected public URLs after publishing.
5. Update this handoff and `docs/change-log.md` before committing the task.

## Open work

There is no remaining custom-domain activation work. Future agents should add
new follow-ups here with a concrete status and remove them when verified.
