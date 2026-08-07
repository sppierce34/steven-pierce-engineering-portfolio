# Landon Pole Rental

## Public summary

A cross-platform rental application for equipment inventory, checkout,
agreements, staff operations, recurring payments, and waitlists.

## Steven's role

Product owner and full-stack engineer across the Expo application, Cloudflare
API, identity and authorization, Stripe workflows, legal artifacts, CI, and
mobile releases.

## Architecture

1. Athletes and staff share an Expo Router product on web, iOS, and Android.
2. The web frontend is served from self-hosted primary and failover Linux
   servers behind Cloudflare Tunnel and Load Balancing.
3. Cloudflare Workers enforce authorization and rental business rules.
4. Better Auth and organization roles manage identity and access.
5. D1 stores application records; R2 retains agreement artifacts.
6. Stripe, Postmark, and push notifications support payments and messaging.

## Screenshot targets

- Authenticated inventory browser
- Rental cart or checkout-readiness workflow
- Staff pickup/return verification
- Waitlist or rental-status screen

Use a demo organization and sample inventory whenever possible.
