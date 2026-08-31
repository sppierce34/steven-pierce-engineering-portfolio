# Recruiter demos

The portfolio provides safe recruiter entry points for each featured project.
Meet Manager and PV Video Capture use static, portfolio-only sample views.
Pole Rental is moving to a separate fictional tenant inside the actual Expo
application so future product updates are reflected in the demo automatically.

## Public routes

- Pole Vault Meet Manager:
  `https://portfolio.meetregistrationpv.com/demos/meet-manager`
- PV Video Capture:
  `https://portfolio.landoncheckin.com/demos/video-capture`
- Landon Pole Rental, pending application deployment:
  `https://pole-rental.com/recruiter-demo`

## Isolation boundary

- Meet Manager and PV Video Capture content is defined as fictional, static
  sample data in `lib/demo-scenarios.ts`.
- `components/ProjectDemo.tsx` switches among local views only. It has no
  network, browser-storage, form-submission, authentication, or persistence
  integration.
- Those two static demos do not call production APIs, databases, Stripe, media
  storage, cameras, email, push services, or authentication providers.
- No production application repository, account, permission, or deployment is
  changed by the two static recruiter demos.
- The Pole Rental demo uses the production application code but a dedicated
  fictional organization. Its normal checkout is simulated locally, and its
  API rejects every authenticated non-read request for that organization. It
  has no Stripe or production-rental records.

## Demonstrated workflows

- Meet Manager: event overview, athlete check-in, and scoring state.
- PV Video Capture: camera health, clip delivery, and model-review evidence.
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
5. Verify the two portfolio routes and the Pole Rental application route after
   each affected deployment.

## Current publishing state

The Pole Rental application work is in `sppierce34/landon-pole-rental` PR #4.
This portfolio branch prepares the new screenshot and link but must not be
published until that PR is merged, migration `0025` is applied, the API and web
application are deployed, and `/recruiter-demo` passes a production smoke test.
