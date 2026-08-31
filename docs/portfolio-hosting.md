# Portfolio domain hosting

The portfolio is published from one Sites project and exposed through three
product-owned portfolio subdomains. This keeps the portfolio close to the live
products without replacing or intercepting their customer-facing routes.

## Current status

Verified on 2026-08-30:

- All three custom domains are active with valid HTTPS certificates.
- The three root URLs and three direct case-study URLs return HTTP 200 and the
  expected project content.
- Each Cloudflare zone has a DNS-only `portfolio` CNAME plus the two validation
  records supplied by Sites.
- Requests to the original Sites hostname redirect permanently to the main
  product-owned portfolio domain while preserving the path and query string.
  Recruiter-facing navigation and resume links therefore never retain or show
  the `chatgpt.site` hostname.
- Static assets run through the Worker first so the same redirect also applies
  to direct PDF requests rather than only application-rendered pages.
- The public PDF route is Worker-served from an internal asset filename. This
  prevents the outer static asset layer from bypassing the legacy-host redirect
  for `/Steven-Pierce-Resume.pdf`.

Validation values are intentionally not copied into this repository. Retrieve
the current records from Sites and manage them through the domain provider.

## Public entry points

- Main portfolio: `https://portfolio.meetregistrationpv.com`
- Resume:
  `https://portfolio.meetregistrationpv.com/Steven-Pierce-Resume.pdf`
- Meet Manager case study:
  `https://portfolio.meetregistrationpv.com/projects/meet-manager`
- PV Video Capture case study:
  `https://portfolio.landoncheckin.com/projects/video-capture`
- Landon Pole Rental case study:
  `https://portfolio.pole-rental.com/projects/pole-rental`
- Meet Manager recruiter demo:
  `https://portfolio.meetregistrationpv.com/demos/meet-manager`
- PV Video Capture recruiter demo:
  `https://demo.landoncheckin.com`
- Landon Pole Rental recruiter demo:
  `https://pole-rental.com/recruiter-demo`

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

Meet Manager remains a portfolio-only route backed by static fictional records.
PV Video Capture and Pole Rental use dedicated fictional application contexts
with server-side isolation so recruiters can exercise maintained production UI
code without creating production bookings, rentals, or payment state.
