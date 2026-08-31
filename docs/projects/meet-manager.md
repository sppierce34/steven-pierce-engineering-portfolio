# Pole Vault Meet Manager

Public case study:
`https://portfolio.meetregistrationpv.com/projects/meet-manager`

Live scoring recruiter demo (publish only after the application route is
deployed and validated):
`https://app.meetregistrationpv.com/recruiter-demo`

The demo uses the real Meet Manager flight scoring page and Convex scoring
mutations against a dedicated fictional test meet. Every entry resets the
shared flight, starts a short-lived non-admin demo session, and restricts the
visitor to that exact scoring page and its scoring controls. It cannot browse
organizer, registration, payment, campaign, health, or real-meet workflows.

## Public summary

A production web and mobile platform for meet registration, athlete check-in,
organizer administration, scoring, and live public results.

## Steven's role

Product owner and full-stack engineer across the web application, shared
backend, native clients, release process, and production operations.

## Production evidence

As of August 2026, the platform has processed 509 successful registrations
across 10 meets. Production operations include external health checks,
synthetic user-flow monitoring, controlled two-origin failover drills, sample
backup restores, and documented recovery procedures.

## Stripe integration

Registration and camp payment workflows use organization-owned Stripe Connect
accounts and hosted Checkout. The platform supports saved-payment setup,
disclosed payment schedules, scheduled charges, webhook reconciliation,
organizer payment-status tracking, and refunds without storing card data.

## Architecture

1. Athletes and staff use web, iPhone, iPad, and Android clients.
2. Cloudflare routes production traffic through independent server tunnel
   origins and removes an unhealthy origin from rotation.
3. Flask serves public pages, APIs, and organizer workflows.
4. Convex supplies shared authoritative data, scoring behavior, payment
   schedules, and idempotent payment state.
5. Two self-hosted Linux servers, system services, monitoring, backups,
   guarded maintenance, and app-store delivery support meet day.

## Screenshot targets

- Organizer dashboard with a live or safely staged meet — captured August 2026
- Athlete registration or check-in workflow
- Scoring interface and public results

Use staged or redacted records. Do not publish athlete contact details.

## Recruiter CTA

- Label: `Open live scoring demo`
- Target: `https://app.meetregistrationpv.com/recruiter-demo`
- Fact: `Fresh fictional scoring flight`
- The former portfolio-only read-only mock remains unlinked and is not the
  recruiter CTA.
- Publish this CTA only after the Meet Manager application PR is merged,
  `RECRUITER_DEMO_ENABLED=1` is active on both origins, and the public route has
  passed reset, scoring, isolation, and failover smoke checks.
