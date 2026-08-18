# Pole Vault Meet Manager

Public case study:
`https://portfolio.meetregistrationpv.com/projects/meet-manager`

Read-only recruiter demo:
`https://portfolio.meetregistrationpv.com/demos/meet-manager`

The demo uses fictional meet, roster, and scoring records stored only in the
portfolio. It does not authenticate with or submit data to the production meet
platform.

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

## Architecture

1. Athletes and staff use web, iPhone, iPad, and Android clients.
2. Cloudflare routes production traffic through independent server tunnel
   origins and removes an unhealthy origin from rotation.
3. Flask serves public pages, APIs, and organizer workflows.
4. Convex supplies shared authoritative data and scoring behavior.
5. Two self-hosted Linux servers, system services, monitoring, backups,
   guarded maintenance, and app-store delivery support meet day.

## Screenshot targets

- Organizer dashboard with a live or safely staged meet — captured August 2026
- Athlete registration or check-in workflow
- Scoring interface and public results

Use staged or redacted records. Do not publish athlete contact details.
