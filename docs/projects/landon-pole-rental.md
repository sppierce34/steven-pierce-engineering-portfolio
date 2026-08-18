# Landon Pole Rental

Public case study:
`https://portfolio.pole-rental.com/projects/pole-rental`

Read-only recruiter demo:
`https://portfolio.pole-rental.com/demos/pole-rental`

The demo uses fictional inventory and rental records stored only in the
portfolio. It has no authentication, payment, agreement, messaging, D1, R2, or
production application connection.

## Public summary

A cross-platform rental application for equipment inventory, checkout,
agreements, staff operations, recurring payments, and waitlists.

## Steven's role

Product owner and full-stack engineer across the Expo application, Cloudflare
API, identity and authorization, Stripe workflows, legal artifacts, CI, and
mobile releases.

## Stripe integration

Each rental organization uses its own Stripe Connect account. Hosted Checkout
saves a billing method, the Worker calculates prorated monthly invoice lines,
and Stripe supports hosted invoices, Billing Portal access, webhook
reconciliation, and partial or full refunds. Payment-card details remain with
Stripe rather than the application database.

## Architecture

1. Athletes and staff share an Expo Router product on web, iOS, and Android.
2. The web frontend is served from self-hosted primary and failover Linux
   servers behind Cloudflare Tunnel and Load Balancing.
3. Cloudflare Workers enforce authorization and rental business rules.
4. Better Auth and organization roles manage identity and access.
5. D1 stores application records; R2 retains agreement artifacts.
6. Stripe Connect, hosted Checkout, monthly invoices, webhooks, and refunds
   support organization-specific billing; Postmark and push notifications
   support messaging.

## Screenshot targets

- Authenticated inventory browser
- Rental cart or checkout-readiness workflow
- Staff pickup/return verification
- Waitlist or rental-status screen

Use a demo organization and sample inventory whenever possible.
