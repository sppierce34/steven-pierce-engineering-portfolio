# Portfolio domain hosting

The portfolio is published from one Sites project and exposed through three
product-owned portfolio subdomains. This keeps the portfolio close to the live
products without replacing or intercepting their customer-facing routes.

## Public entry points

- Main portfolio: `https://portfolio.meetregistrationpv.com`
- Meet Manager case study:
  `https://portfolio.meetregistrationpv.com/projects/meet-manager`
- PV Video Capture case study:
  `https://portfolio.landoncheckin.com/projects/video-capture`
- Landon Pole Rental case study:
  `https://portfolio.pole-rental.com/projects/pole-rental`

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
