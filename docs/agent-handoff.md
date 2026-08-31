# Current agent handoff

Last verified: 2026-08-31

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
verification. The original Sites hostname permanently redirects every path to
`https://portfolio.meetregistrationpv.com`, so visitors do not remain on or see
the `chatgpt.site` hostname. The Sites project identifier remains in
`.openai/hosting.json`; reuse it rather than creating another site.

## Recruiter demo state

- Meet Manager, PV Video Capture, and Pole Rental have published isolated
  application demos.
- The Meet Manager CTA is
  `https://app.meetregistrationpv.com/recruiter-demo`. Each visit resets a
  fictional shared flight, auto-enters a short-lived non-admin session, and
  restricts that browser to the real scoring page and scoring mutations.
- `components/ProjectDemo.tsx` and `lib/demo-scenarios.ts` still contain the
  former network-free Meet Manager sample for historical/source continuity,
  but recruiter-facing pages no longer link to it.
- All application demos use fictional data and server-side isolation that
  prevents production payment or operational state from being created.
- Main-page project images, titles, and the prominent `View project page`
  actions link directly to each product-owned case-study route. Separate live
  demo links remain explicit.

### Meet Manager recruiter demo (live)

- The rate-limited `/recruiter-demo` route performs target identity validation,
  automatic test-meet reset, non-permanent login, and a server-side score-only
  session guard.
- The demo target remains organization `3`, meet `21`, and flight `210`, all
  fictional. `RECRUITER_DEMO_ENABLED=1` is active on both origins, and the
  existing IDs and `portfolio-demo` username are non-secret defaults.
- The Meet Manager case study now presents **Open live scoring demo**, links the
  application route, shows **Fresh fictional scoring flight**, and omits
  **Discuss the project**.
- Portfolio version 17 published the CTA on August 31. Public browser acceptance
  followed it into `/meet/21/flights/210/score`, where the **Recruiter scoring
  sandbox** notice, fictional roster, and real Make/Miss/Pass controls rendered.

### PV Video Capture recruiter demo

- `https://demo.landoncheckin.com` auto-opens the fictional Demo Athlete in the
  real Clips interface. Four explicitly approved clips across two practice
  dates play through signed Cloudflare Stream sessions.
- The real Lessons interface exposes fictional one-on-one practices. The demo
  registration is browser-session-only, stays on the demo hostname, reports
  **No payment collected**, and stores no lesson booking.
- The service runs separately from production with its own loopback port,
  SQLite data, media manifest, and Cloudflare Tunnel. Public checks returned
  HTTP 403 for production login, Stripe webhook, labeling, and generic health
  routes.
- The PV case study exposes only `Open live check-in`, linked directly to the
  dummy account. Its former `Open read-only demo` and `Discuss the project`
  actions are removed.
- Portfolio version 15 published this CTA change. Live browser acceptance
  followed the case-study link into the automatically opened dummy-athlete
  practice-video view.
- The unused accidental DNS record
  `demo.landoncheckin.com.meetregistrationpv.com` was removed from the
  `meetregistrationpv.com` zone. The intended `demo.landoncheckin.com` hostname
  still resolves and returns HTTP 200.

### Pole Rental recruiter demo

- Pole Rental application PR #4 was merged and deployed on August 30. The
  `/recruiter-demo` route auto-signs visitors into a fictional 12-pole tenant
  that uses the real Expo inventory/cart code, simulates checkout locally, and
  rejects authenticated writes and shared-account mutations at the API
  boundary.
- Production acceptance confirmed the 12 fictional poles, real cart flow,
  local-only completion, HTTP 403 rental/account-mutation barriers, successful
  sign-out, zero demo rentals, and zero Stripe customers.
- The public case study uses Steven's cropped authenticated inventory
  screenshot, removes the former `Open read-only demo` and `Discuss the
  project` actions, and directs its one application CTA to
  `https://pole-rental.com/recruiter-demo`.

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

- `public/assets/resume-document.pdf` is the current one-page public resume
  served at the canonical product-owned URL by the portfolio Worker.
- The layout was rebuilt on 2026-08-17 with larger body text and distributed
  vertical spacing so the content fills the page through the bottom margin
  without clipping or overflowing.
- The contact header does not list a location; the phone, email, GitHub, and
  portfolio links are centered beneath the title.
- Each project now describes its verified Stripe integration. PV Video Capture
  additionally highlights secure online athlete streaming and downloads
  through signed Cloudflare Stream playback.
- The PDF was verified as exactly one US Letter page, visually reviewed from
  both a 144 DPI render and a complete-page overview, and checked to confirm
  that all seven hyperlinks remain active. The last text baseline ends about
  53 points from the physical page bottom, including the 0.35-inch margin.
- The deployed PDF at
  `https://portfolio.meetregistrationpv.com/Steven-Pierce-Resume.pdf` was
  downloaded after publishing and byte-matched to the repository asset. All
  visible portfolio resume actions use this absolute product-owned URL.
- The legacy Sites-host PDF URL redirects permanently to the product-owned PDF
  URL while preserving query parameters.
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
- Recruiter-demo routes and isolation boundary: `docs/recruiter-demos.md`
- Public/privacy boundaries: `docs/public-content-guidelines.md`

Do not change a metric or architecture claim using memory alone. Verify it
against a private source project or a fact supplied directly by Steven.

## PV Video Capture screenshot state

- The case-study hero now uses Steven's August 30 authenticated PV Local
  Labeling capture instead of the older labeling workspace image.
- The approved public crop preserves the full application interface, including
  the phase-model prediction, detected-athlete box, review controls, queue, and
  status bar, while removing all Chrome tabs, address, and bookmarks UI.
- The current screenshot decision and exact crop are recorded in
  `docs/screenshots.md`; the corresponding project context is in
  `docs/projects/pv-video-capture.md`.

## Required verification

For content or application changes:

1. Run `npm test`.
2. Run any focused validation required by the change.
3. Publish the exact validated Git state with Sites unless the task is
   explicitly local-only.
4. Verify affected public URLs after publishing.
5. Update this handoff and `docs/change-log.md` before committing the task.

## Open work

There is no remaining custom-domain activation or resume-hostname work.

- Resolve the current `image-size` and `nanoid` audit advisories in a dedicated
  dependency update. Re-run the full test, lint, audit, and deployment workflow
  because the complete fix currently moves `vinext` beyond the pinned beta.
- Review and merge PV Video Capture PR #201, which records the live demo
  deployment and corrects its tracked service/environment examples.
