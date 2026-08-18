# Portfolio domain hosting

The portfolio is published from one Sites project and exposed through three
product-owned portfolio subdomains. This keeps the portfolio close to the live
products without replacing or intercepting their customer-facing routes.

## Current status

Verified on 2026-08-06:

- All three custom domains are active with valid HTTPS certificates.
- The three root URLs and three direct case-study URLs return HTTP 200 and the
  expected project content.
- Each Cloudflare zone has a DNS-only `portfolio` CNAME plus the two validation
  records supplied by Sites.
- The original Sites URL remains available as a fallback:
  `https://steven-pierce-engineering.sppierce34.chatgpt.site`.

Validation values are intentionally not copied into this repository. Retrieve
the current records from Sites and manage them through the domain provider.

## Public entry points

- Main portfolio: `https://portfolio.meetregistrationpv.com`
- Meet Manager case study:
  `https://portfolio.meetregistrationpv.com/projects/meet-manager`
- PV Video Capture case study:
  `https://portfolio.landoncheckin.com/projects/video-capture`
- Landon Pole Rental case study:
  `https://portfolio.pole-rental.com/projects/pole-rental`
- Meet Manager recruiter demo:
  `https://portfolio.meetregistrationpv.com/demos/meet-manager`
- PV Video Capture recruiter demo:
  `https://portfolio.landoncheckin.com/demos/video-capture`
- Landon Pole Rental recruiter demo:
  `https://portfolio.pole-rental.com/demos/pole-rental`

The root request on `portfolio.landoncheckin.com` renders the PV Video Capture
case study. The root request on `portfolio.pole-rental.com` renders the Landon
Pole Rental case study. The Meet Registration portfolio host keeps the main
portfolio at its root.

## Operational boundary

The existing application hosts remain unchanged:

- `meetregistrationpv.com` continues serving registration and meet operations.
- `landoncheckin.com` continues serving athlete and staff check-in workflows.
- `pole-rental.com` continues serving rental workflows.

Only the dedicated `portfolio.` subdomains point to the Sites deployment. No
application credentials, private data, or internal infrastructure addresses
belong in the portfolio hosting configuration.

Recruiter demos are portfolio-only routes backed by static fictional records.
They do not share authentication, storage, APIs, or runtime bindings with the
customer-facing applications.
