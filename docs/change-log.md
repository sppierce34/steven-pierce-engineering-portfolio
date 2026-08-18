# Portfolio change log

Record material repository and external hosting work here in reverse
chronological order. Each entry should state scope, result, validation,
publishing status, and remaining work. Never include credentials, DNS
validation values, private data, or internal infrastructure addresses.

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
