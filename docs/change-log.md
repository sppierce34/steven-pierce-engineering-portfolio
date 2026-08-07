# Portfolio change log

Record material repository and external hosting work here in reverse
chronological order. Each entry should state scope, result, validation,
publishing status, and remaining work. Never include credentials, DNS
validation values, private data, or internal infrastructure addresses.

## 2026-08-06 - Activate custom domains and require agent handoffs

Scope:

- Activated the product-owned portfolio domains in Cloudflare and Sites.
- Added a durable agent handoff and repository change log.
- Made documentation updates mandatory for future material tasks in
  `AGENTS.md`.

Result:

- `portfolio.meetregistrationpv.com`, `portfolio.landoncheckin.com`, and
  `portfolio.pole-rental.com` are active with valid HTTPS.
- Each domain serves its intended main or project page without changing the
  existing customer-facing application hosts.

Validation:

- Confirmed the CNAME and both validation records resolve publicly for all
  three domains.
- Confirmed HTTP 200 and expected content for all three roots and all three
  direct case-study URLs.
- `npm test` passed with the documentation changes.

Publishing:

- The portfolio code and current public resume were already published from
  commit `725ea1d`; this documentation task records the completed DNS
  activation.

Follow-up:

- None. Future tasks must keep `docs/agent-handoff.md` and this log current.

## 2026-08-06 - Publish product-domain routing and current resume

Scope and result:

- Added domain-aware root routing for the main portfolio, PV Video Capture,
  and Landon Pole Rental.
- Added direct project URLs and canonical metadata.
- Published the current one-page engineering resume at
  `public/Steven-Pierce-Resume.pdf` with product-owned portfolio links.

Validation and publishing:

- Type checking, build, rendered-HTML tests, and lint completed without errors.
- Sites version 5 was published from commit `725ea1d`.

## 2026-08-06 - Replace Meet Manager login screenshot

Scope and result:

- Replaced the Meet Manager login image with an authenticated event-operations
  dashboard screenshot and synchronized the screenshot documentation.

Publishing:

- Published from commit `8dbf29a`.

## 2026-08-06 - Document model training and self-hosted infrastructure

Scope and result:

- Added the segmentation and vault-phase model training results, including the
  labeling-ready frame and training-image counts.
- Documented the two-server Linux platform, Cloudflare routing, uptime,
  failover tests, and disaster-recovery evidence used in the portfolio and
  resume.

Publishing:

- Published from commit `e5f00d1`.

## 2026-08-06 - Create the software engineering portfolio

Scope and result:

- Created the public portfolio, project case studies, screenshot inventory,
  public-content guidance, and supporting documentation workspace.

Publishing:

- Initial portfolio commit: `f53916e`.
