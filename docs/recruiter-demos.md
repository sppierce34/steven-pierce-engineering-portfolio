# Recruiter demos

The portfolio provides safe recruiter entry points for each featured project.
Meet Manager uses a static, portfolio-only sample view. PV Video Capture and
Pole Rental use isolated fictional accounts inside their actual maintained
applications so future product updates are reflected in the demos.

## Public routes

- Pole Vault Meet Manager:
  `https://portfolio.meetregistrationpv.com/demos/meet-manager`
- PV Video Capture:
  `https://demo.landoncheckin.com`
- Landon Pole Rental:
  `https://pole-rental.com/recruiter-demo`

## Isolation boundary

- Meet Manager content is defined as fictional, static sample data in
  `lib/demo-scenarios.ts`.
- `components/ProjectDemo.tsx` switches among local views only. It has no
  network, browser-storage, form-submission, authentication, or persistence
  integration.
- The Meet Manager static demo does not call production APIs, databases,
  Stripe, media storage, email, or authentication providers.
- The PV Video Capture demo uses the real Clips and Lessons modules in a
  separate loopback service with its own SQLite database, ignored approved-
  media manifest, dedicated Tunnel, fictional athlete, and browser-only lesson
  bookings. Its fail-closed guard blocks production login, registration,
  Stripe, admin, labeling, sync, cameras, downloads, and every unapproved API.
- The Pole Rental demo uses the production application code but a dedicated
  fictional organization. Its normal checkout is simulated locally, and its
  API rejects every authenticated non-read request for that organization. It
  has no Stripe or production-rental records.

## Demonstrated workflows

- Meet Manager: event overview, athlete check-in, and scoring state.
- PV Video Capture: signed playback of approved practice clips and fictional
  one-on-one practice registration with no payment.
- Pole Rental: actual inventory search, pole selection, cart, and a simulated
  checkout that creates no rental, reservation, agreement, or payment.

## Maintenance rules

1. Keep all names, identifiers, organizations, meets, sessions, inventory, and
   activity records fictional.
2. Do not publish private credentials. A deliberately public demo login may be
   used only for a tenant that is fictional, non-privileged, and blocked from
   server-side mutations.
3. Do not allow a recruiter flow to create production state or payment
   activity. Keep a server-side write barrier even when the UI already
   simulates the action.
4. Update the matching project note, tests, handoff, and change log whenever a
   demo route or displayed feature changes.
5. Verify the Meet Manager portfolio route and both real-application demo routes
   after each affected deployment.

## Current publishing state

PV Video Capture is deployed at `demo.landoncheckin.com` through a dedicated
Tunnel and loopback-only service. Public browser acceptance confirmed automatic
dummy-athlete entry, four approved clips across two practice dates, signed
playback, fictional practice registration, no Stripe navigation, zero stored
lesson bookings, and HTTP 403 on production login, Stripe webhook, labeling,
and generic health routes.

Pole Rental application PR #4 is merged and deployed. Migration `0025`, the
API, and both self-hosted web servers were released before the portfolio CTA.
Production smoke confirmed automatic login, 12 fictional inventory records,
the real cart interaction, local-only completion, server-side rental and
account-mutation rejection, successful sign-out, and zero rental/Stripe rows.
