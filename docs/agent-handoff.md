# Current agent handoff

Last verified: 2026-08-17

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

The latest published source at the time of this handoff is commit `5fcbb22`
(Sites version 7).
The Sites project identifier remains in `.openai/hosting.json`; reuse it rather
than creating another site.

## GitHub public release

- Portfolio source: `https://github.com/sppierce34/steven-pierce-engineering-portfolio`
- Profile: `https://github.com/sppierce34`
- Profile README source: `https://github.com/sppierce34/sppierce34`
- Both repositories are public, and the profile README is enabled on Steven's
  public profile.
- The GitHub profile includes a recruiter-focused bio, location, portfolio URL,
  and available-for-hire status.
- The repository includes recruiter-facing project evidence, a security policy,
  automated CI, and Dependabot configuration.
- A full tracked-file and Git-history security scan found no credentials,
  secrets, private infrastructure addresses, or private source. The only code
  finding was low severity: forwarded host values could influence metadata and
  root routing. The release fixes it with an explicit host allowlist and a
  regression test.
- The 2026-08-17 GitHub Actions run passed build, rendered-page tests, and lint,
  but its dependency-audit step reported three newly known high-severity
  advisories in transitive `image-size` and `nanoid` packages. The available
  complete audit fix currently requires a `vinext` beta upgrade and should be
  handled as a separately validated dependency task.
- All six custom-domain portfolio routes and the Sites fallback URL returned
  HTTP 200 after version 6 was published; the updated resume was separately
  verified after version 7 was published.

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
- The contact header no longer lists a location; the phone, email, GitHub, and
  portfolio links are centered beneath the title.
- The PDF was verified as one US Letter page, visually reviewed from a 144 DPI
  render, and checked to confirm that all seven hyperlinks remain active.
- The deployed PDF at
  `https://portfolio.meetregistrationpv.com/Steven-Pierce-Resume.pdf` was
  downloaded after publishing and byte-matched to the repository asset.
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

There is no remaining custom-domain activation or resume work.

- Resolve the current `image-size` and `nanoid` audit advisories in a dedicated
  dependency update. Re-run the full test, lint, audit, and deployment workflow
  because the complete fix currently moves `vinext` beyond the pinned beta.
