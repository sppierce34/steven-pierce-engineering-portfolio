# Recruiter demos

The portfolio includes a pre-authenticated, read-only demo for each featured
project. These routes let recruiters explore representative product workflows
without creating accounts in, or sending requests to, the production systems.

## Public routes

- Pole Vault Meet Manager:
  `https://portfolio.meetregistrationpv.com/demos/meet-manager`
- PV Video Capture:
  `https://portfolio.landoncheckin.com/demos/video-capture`
- Landon Pole Rental:
  `https://portfolio.pole-rental.com/demos/pole-rental`

## Isolation boundary

- Demo content is defined as fictional, static sample data in
  `lib/demo-scenarios.ts`.
- `components/ProjectDemo.tsx` switches among local views only. It has no
  network, browser-storage, form-submission, authentication, or persistence
  integration.
- The demos do not call production APIs, databases, Stripe, media storage,
  cameras, email, push services, or authentication providers.
- No production application repository, account, permission, or deployment is
  changed by the recruiter demos.
- The interface clearly labels every route as isolated, sample-only, and
  read-only.

## Demonstrated workflows

- Meet Manager: event overview, athlete check-in, and scoring state.
- PV Video Capture: camera health, clip delivery, and model-review evidence.
- Pole Rental: inventory, rental lifecycle, and staff operations.

## Maintenance rules

1. Keep all names, identifiers, organizations, meets, sessions, inventory, and
   activity records fictional.
2. Do not add credentials or connect a demo view to a live service.
3. Do not add actions that imply a production mutation. If a future demo needs
   persistence, give it an independently provisioned environment and document
   the boundary before publishing.
4. Update the matching project note, tests, handoff, and change log whenever a
   demo route or displayed feature changes.
5. Verify the three routes on their product-owned portfolio domains after each
   deployment.
