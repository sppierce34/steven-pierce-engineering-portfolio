# Portfolio change log

Record material repository and external hosting work here in reverse
chronological order. Each entry should state scope, result, validation,
publishing status, and remaining work. Never include credentials, DNS
validation values, private data, or internal infrastructure addresses.

## 2026-09-15 - Update the publicly hosted main resume

Scope and result:

- Replaced the public PDF with Steven's approved main resume, preserving its
  one-page layout, project metrics, skills, employment and seven links.
- Updated Georgia Tech from incoming/Beginning Fall 2026 to current/in progress,
  `August 2026 - Present`; added Eastern Michigan graduation `May 2010`.
- Matched both date colors to RGB (0.314, 0.357, 0.396). No home address,
  private application information, internal labels or unsupported claims added.
- The public URL and audience remain unchanged.
- Preserved the already-live version 18 Meet Manager action-row change when
  reconciling the publishing source with the GitHub copy; no unrelated live
  behavior is rolled back. Both independent change-log entries are retained.

Validation and publishing:

- Exact approved PDF SHA256:
  `46349bc60b6e3c4df7a762be25bad03dc4b788e233521cb916e6348e198f5fdb`.
- One page, seven links, current education text and matching colors checked;
  final full-page render visually inspected with no clipping or overlaps.
- `npm test` passed the production build and all 11 rendered-page tests.
- Re-ran `npm test` after preserving the existing version 18 source changes;
  build and all 11 tests passed. Published exact source
  `0919669986b1f0ddd935f99f63cc9e71b0cda5b1` as Sites version 19; deployment
  succeeded. The canonical PDF returns HTTP 200 / application/pdf and its
  192,134 downloaded bytes exactly match the approved asset and SHA256 above.
- Verified the public Meet Manager case study still contains only its intended
  scoring-demo action, without the removed production-root action.

Follow-up: none for the resume. Existing browser PDF tabs may need refresh.

## 2026-08-31 - Simplify the Meet Manager case-study actions

Scope:

- Removed the redundant **Open live application** action from the Meet Manager
  case study while preserving **Open live scoring demo** as its primary CTA.
- Added rendered-page regression coverage and synchronized the Meet Manager
  project note.

Result:

- Recruiters are directed to the safe fictional scoring flight instead of
  being offered a second action to the production application root.
- The main portfolio card's existing **Live app** link remains unchanged; this
  adjustment is limited to the case-study action row.

Validation:

- `npm test` passed the production build and all 11 rendered-page tests,
  including the Meet Manager action-row regression.
- `npm run lint` completed with zero errors and the three pre-existing `<img>`
  optimization warnings.

Publishing:

- Portfolio version 18 is live on the existing Sites project.
- A fresh request to the product-owned Meet Manager case-study URL returned
  HTTP 200 with **Open live scoring demo** present and no **Open live
  application** label or production-root anchor.

Follow-up:

- None.

## 2026-08-31 - Publish the real Meet Manager scoring demo CTA

Scope:

- Published the prepared Meet Manager case-study CTA that points to
  `https://app.meetregistrationpv.com/recruiter-demo`.
- Replaced the public portfolio-only mock entry with **Open live scoring demo**
  and the **Fresh fictional scoring flight** fact.
- Updated the current handoff, recruiter-demo, project, and hosting notes from
  prepared to live.

Result:

- Recruiters now leave the portfolio case study and enter the maintained Meet
  Manager score page in a fresh, short-lived, score-only demo session.
- The former portfolio-only sample remains unlinked in source for historical
  continuity.

Validation:

- `npm test` passed the production build and all 11 rendered-page tests.
- `npm run lint` completed with zero errors and three pre-existing `<img>`
  optimization warnings.
- Public browser acceptance loaded the product-owned homepage, confirmed the
  Meet Manager **Try demo** target, clicked it, and reached
  `/meet/21/flights/210/score` with the **Recruiter scoring sandbox** notice,
  fictional roster, and scoring controls visible. The case-study
  **Open live scoring demo** action was verified against the same target.

Publishing:

- Portfolio version 17 is live on the existing Sites project and its custom
  domains.

Follow-up:

- None.

## 2026-08-30 - Prepare the real Meet Manager scoring demo CTA

Scope:

- Replaced the Meet Manager case-study demo target with the prepared
  application route at `https://app.meetregistrationpv.com/recruiter-demo`.
- Changed the action label to **Open live scoring demo**, added the **Fresh
  fictional scoring flight** fact, and removed **Discuss the project**.
- Updated tests and durable demo, project, hosting, and handoff documentation.

Result:

- Once published, recruiters will enter the maintained Meet Manager scoring
  page rather than the portfolio-only mock. Each application entry resets a
  fictional shared flight and constrains the session to its scoring workflow.

Validation:

- `npm test` passed the production build and all 11 rendered-page tests.
- `npm run lint` completed with zero errors and three pre-existing `<img>`
  optimization warnings.
- GitHub Actions reached the existing dependency-audit gate and failed on the
  already documented high-severity `image-size`/`vinext` and `nanoid`
  advisories. The complete available fix still requires a separately validated
  `vinext` beta upgrade; no new dependency was introduced by this change.
- Application deployment and public browser acceptance remain required before
  this CTA can be published safely.

Publishing:

- Not published. Hold this branch until the Meet Manager application PR is
  merged, the route is enabled on both origins, and dual-origin/public smoke
  checks pass.

Follow-up:

- Merge and deploy the application branch, validate reset/scoring/isolation,
  then publish this portfolio branch through the existing Sites project and
  update this entry with the version and public acceptance result.

## 2026-08-30 - Remove an unused accidental DNS record

Scope:

- Deleted the unused `demo.landoncheckin.com.meetregistrationpv.com` CNAME
  from the `meetregistrationpv.com` Cloudflare zone.

Result:

- The accidental nested hostname no longer resolves. The intended PV Video
  Capture recruiter-demo hostname and its Cloudflare Tunnel configuration were
  not changed.

Validation:

- Cloudflare's filtered DNS-record view returned no matching record after the
  deletion.
- A public lookup through Cloudflare DNS returned no record for the accidental
  hostname, while `demo.landoncheckin.com` continued to resolve and its HTTPS
  root returned HTTP 200.

Publishing:

- No portfolio application deployment was required; this was a DNS-only
  cleanup documented in the repository.

Follow-up:

- None.

## 2026-08-30 - Publish the isolated PV Video Capture application demo

Scope:

- Deployed the real PV Video Capture / Landon Check-In web interface as a
  separate recruiter runtime at `https://demo.landoncheckin.com`.
- Removed the PV case study's `Open read-only demo` and `Discuss the project`
  actions and pointed its remaining `Open live check-in` action at the dummy
  athlete session.

Result:

- Recruiters now enter the fictional Demo Athlete automatically, view four
  approved practice clips through the maintained Clips module, and explore
  fictional one-on-one practice registration through the maintained Lessons
  module without credentials or payment access.
- The demo is separated from production by an isolated SQLite database,
  approved-media manifest, loopback service, dedicated Tunnel, fail-closed
  integration checks, and a restricted HTTP route allowlist.

Validation:

- Public root and sanitized health requests returned HTTP 200; production
  login, Stripe webhook, labeling, and generic health routes returned HTTP 403.
- Browser acceptance confirmed automatic dummy-athlete entry, signed video
  playback, a browser-only fictional registration, no Stripe navigation, and
  the **No payment collected** result.
- The isolated database contained two fictional athletes, one active browser
  session, four clips, zero lesson bookings, and zero queued email.
- The PV application full gate passed 1,068 tests with 2 expected skips and 7
  subtests; its web lint and production build also passed.

Publishing:

- The application demo and its public hostname are live. Portfolio version 15
  was published through the existing Sites project.
- The product-owned PV case-study URL returned the new single CTA and dummy-
  account fact. Following `Open live check-in` opened the isolated hostname,
  where the fictional athlete's practice-video view loaded automatically.

Follow-up:

- Review and merge PV Video Capture documentation PR #201.

## 2026-08-30 - Publish the isolated Pole Rental application demo

Scope:

- Released the fictional Pole Rental recruiter tenant through the actual
  production Expo application after application PR #4 was merged.
- Published the prepared portfolio screenshot and single `Open live
  application` CTA to `https://pole-rental.com/recruiter-demo`.
- Removed the former Pole Rental read-only-demo and project-discussion actions;
  the normal application sign-in screen also no longer exposes role-based demo
  shortcuts.

Result:

- Recruiters now enter a fictional 12-pole account automatically and use the
  same inventory/search/grouping/cart code maintained by the production app.
- Demo completion remains local, while the API independently blocks rental,
  reservation, agreement, account, and payment mutations.

Validation:

- Application typechecks and all 85 tests passed; the full D1 migration replay,
  production web export, and Worker dry-run also passed.
- Both production web servers reported healthy application and tunnel services
  with the matching release bundle.
- Live browser acceptance confirmed automatic login, 12 fictional poles, real
  cart interaction, local-only completion, and no browser warnings or errors.
- Direct production tests returned HTTP 403 for rental creation and Better Auth
  account mutation, HTTP 200 for sign-out, and final database checks remained
  at zero demo rentals and zero Stripe customers.
- Portfolio `npm test` and lint completed successfully; CI's build/test/lint
  phases passed, with only the already documented dependency-audit advisories
  keeping the combined workflow red.

Publishing:

- Published through the existing Sites project and verified on the Pole Rental
  product-owned portfolio domain.

Follow-up:

- None for this demo rollout.

## 2026-08-30 - Prepare the real Pole Rental recruiter demo and inventory showcase

Scope:

- Replaced the Pole Rental login image with Steven's authenticated inventory
  capture and removed its Chrome tabs, address bar, and bookmarks.
- Removed the Pole Rental `Open read-only demo` and `Discuss the project`
  actions from the case study and removed the old demo link from its main-page
  card.
- Pointed the single `Open live application` action at the prepared
  `/recruiter-demo` entry point in the actual Pole Rental application.

Result:

- The case study now presents a current production inventory workflow rather
  than a sign-in form.
- Once deployed, recruiters will enter a fictional 12-pole tenant through the
  actual application code, browse inventory, add poles to the real cart UI,
  and complete a simulated checkout without creating a rental, reservation,
  agreement, account change, or Stripe activity.
- Pole Rental application PR #4 implements the tenant, automatic login, local
  checkout simulation, and an independent API write barrier.

Validation:

- Visually reviewed the cropped image and confirmed it contains no browser UI,
  user identity, contact detail, credential, payment information, or token.
- Added rendered-page regression coverage for the single CTA, updated image,
  fictional-tenant fact, and absence of the two removed actions.
- `npm test` passed the production build and all 11 rendered-page tests.
- `npm run lint` completed with zero errors and the three existing
  image-optimization warnings.

Publishing:

- Not published. The portfolio must not expose the new link until Pole Rental
  PR #4 is merged, migration `0025` is applied, the API and self-hosted web app
  are deployed, and the public recruiter route passes a smoke test.

Follow-up:

- Complete the application deployment first, then merge this portfolio branch,
  publish it through the existing Sites project, and verify the affected
  product-owned URLs.

## 2026-08-30 - Replace the PV Video Capture labeling screenshot

Scope:

- Replaced the older labeling-workspace image with Steven's current
  authenticated PV Local Labeling capture.
- Cropped only the Chrome tabs, address bar, and bookmarks bar while retaining
  the complete application width and bottom status bar.
- Updated the case-study alternative text and durable screenshot record to
  describe the model-assisted vault-phase review workflow.

Result:

- The PV Video Capture case study now demonstrates a live `run_up` prediction
  at 94 percent confidence, the detected-athlete box, review controls, queue,
  playback timeline, and application status in one current production view.
- The public image contains no browser chrome, account name, contact record,
  credential, token, or infrastructure address.

Validation:

- Visually reviewed the exact 2,560 x 1,346 application-only crop and confirmed
  that the left and right application edges, header, and bottom status bar are
  intact.
- `npm test` passed the production build and all rendered-page and recruiter-
  demo isolation tests.

Publishing:

- Published through the existing Sites project and verified on the PV Video
  Capture product-owned portfolio domain.

Follow-up:

- None.

## 2026-08-30 - Keep the resume on the product-owned portfolio domain

Scope:

- Replaced relative resume actions with one absolute canonical URL on
  `portfolio.meetregistrationpv.com`.
- Added a permanent host-level redirect from the original Sites hostname to
  the product-owned portfolio domain, preserving paths and query strings.
- Enabled Worker-first static asset routing so direct PDF requests cannot
  bypass the hostname redirect.
- Moved the PDF behind a Worker-served canonical route so Sites' outer exact
  asset handling cannot retain the legacy hostname.

Result:

- Opening the resume from any portfolio entry point resolves to
  `https://portfolio.meetregistrationpv.com/Steven-Pierce-Resume.pdf`.
- Recruiters no longer remain on or see a `chatgpt.site` address when entering
  through an old bookmark or search result.

Validation:

- The production build and rendered-page tests passed, including regression
  coverage for the canonical resume link and legacy-host redirect.
- Lint completed without errors; the three existing image-optimization
  warnings remain unchanged.
- The custom-domain PDF returned HTTP 200 with `application/pdf`, and the old
  hostname returned a permanent redirect to the same custom-domain path.

Publishing:

- Published through the existing Sites project and verified on the public
  product-owned domain.

Follow-up:

- None.

## 2026-08-17 - Rebalance resume and document payment integrations

Scope:

- Rebuilt the one-page resume with larger type and more even vertical spacing
  so the content extends naturally through the bottom of the page.
- Added verified Stripe responsibilities to PV Video Capture, Pole Vault Meet
  Manager, and Landon Pole Rental.
- Added a prominent PV Video Capture accomplishment describing secure online
  athlete streaming and downloads through signed Cloudflare Stream playback.
- Updated the three durable project notes with the exact public-safe payment
  and athlete-video boundaries verified from the private source projects.

Result:

- The resume remains one page while using substantially more of the available
  page area; the last text baseline ends about 53 points from the physical
  page bottom, including the 0.35-inch margin.
- Stripe claims now identify registration payments, private-lesson payments,
  and organization-specific rental billing as distinct implementations.
- Video access is described as an account- and attendance-controlled athlete
  feature, not as a paid clip product.

Validation:

- Confirmed the PDF is exactly one US Letter page with all seven contact and
  project hyperlinks active.
- Extracted text contains the three Stripe project descriptions and the online
  stream/download accomplishment, and still contains no location.
- Rendered at 144 DPI and as a complete-page overview; visual review found no
  clipping, overlap, cramped wrapping, or excess bottom gap.
- `npm test` completed successfully: the production build and all seven
  rendered-HTML and recruiter-demo isolation tests passed.

Publishing:

- Release commit `a063040` was pushed to GitHub and the configured Sites source
  repository, then published as Sites version 9.
- The custom-domain and Sites fallback PDF URLs both returned HTTP 200 with
  `application/pdf`; both downloads byte-matched the approved repository PDF.

Follow-up:

- None expected for the resume. The separately documented dependency-audit
  upgrade remains open.

## 2026-08-17 - Add isolated recruiter demos

Scope:

- Added pre-authenticated, read-only demo routes for Meet Manager, PV Video
  Capture, and Landon Pole Rental.
- Added prominent direct project-page links plus separate demo and live-product
  links to every main-page project card.
- Added an `Open read-only demo` action and explicit sample-data fact to every
  case study.

Result:

- Recruiters can switch among representative project workflows using fictional
  sample records without registering or receiving production credentials.
- Demo UI contains no network, form-submission, browser-storage,
  authentication, payment, media, camera, or persistence integration.
- No production application repository, account, service, database, or
  deployment was changed.

Validation:

- `npm test` completed successfully: the production build and all seven
  rendered-HTML and isolation tests passed.
- All three demo routes rendered with product-specific metadata, account state,
  sample-only labeling, and direct return links to their case studies.
- Lint completed with zero errors and the three existing image-optimization
  warnings.

Publishing:

- Release commit `1cf4adc` was pushed to GitHub and published as Sites version
  8.
- The main portfolio, all three case studies, and all three product-domain demo
  routes returned HTTP 200 with their expected content after publishing.
- The live main page contained all three direct project-page links and all
  three demo links.

Follow-up:

- None for the recruiter demos. The separately documented dependency-audit
  upgrade remains open.

## 2026-08-17 - Refine the one-page resume header

Scope:

- Removed `Ortonville, MI` from the public resume.
- Re-centered the phone, email, GitHub, and portfolio links without changing
  the resume's software-engineering content or project metrics.

Result:

- `public/Steven-Pierce-Resume.pdf` remains a single-page US Letter resume.
- The visible contact line and its clickable link regions remain aligned.

Validation:

- Confirmed the PDF has exactly one page and that extracted text no longer
  contains the removed location.
- Rendered the revised page at 144 DPI and visually reviewed the complete page.
- Confirmed all seven contact and project hyperlinks remain present.
- `npm test` completed successfully: the production build and all five
  rendered-HTML tests passed.
- Post-push GitHub Actions also passed build, rendered-page tests, and lint, but
  the dependency-audit step reported three high-severity advisories newly
  associated with transitive `image-size` and `nanoid` packages.

Publishing:

- Release commit `5fcbb22` was pushed to GitHub and published as Sites version
  7.
- The custom-domain and Sites fallback PDF URLs both returned HTTP 200 after
  publishing; the custom-domain download byte-matched the repository PDF.

Follow-up:

- Address the dependency advisories in a separate upgrade task. The complete
  audit fix currently requires moving `vinext` beyond its pinned beta, so it
  needs full regression testing and a new deployment rather than being folded
  into this resume-only release.

## 2026-08-06 - Prepare the GitHub portfolio for public release

Scope:

- Reworked the repository README around recruiter-facing projects, dates,
  evidence, direct case-study links, and live applications.
- Created the public `sppierce34/sppierce34` profile README and populated the
  GitHub profile name, bio, location, portfolio URL, and available-for-hire
  status.
- Added a security policy, GitHub Actions CI, Dependabot updates, and a durable
  public-release checklist.
- Removed unused database template code and upgraded the active build and
  runtime dependencies.

Security review:

- Scanned every tracked file and every reachable Git revision for secrets,
  sensitive infrastructure details, private source, and unsafe binary assets.
- Found no credentials, tokens, private addresses, private repository links, or
  sensitive records.
- Fixed the one low-severity finding by preventing forwarded host values from
  influencing metadata and product-host root routing.

Validation:

- The production build and all five rendered-HTML tests passed, including the
  hostile-forwarded-host regression test.
- Lint completed with zero errors and three existing image-optimization
  warnings.
- `npm audit --audit-level=low` reported zero vulnerabilities.

Publishing:

- The profile README repository and portfolio source repository are public.
- The profile README is enabled on Steven's public GitHub profile.
- Release commit `e398aa7` was pushed to GitHub and published as Sites version
  6.
- GitHub Actions passed for the release commit.
- All six custom-domain portfolio routes and the Sites fallback URL returned
  HTTP 200 after publishing.

Follow-up:

- None. Dependabot opened routine dependency-update pull requests for later
  review; they are not part of this release.

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
