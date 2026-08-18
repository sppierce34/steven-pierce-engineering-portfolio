# Portfolio documentation

This folder is the durable source of truth for Steven Pierce's public software
engineering portfolio. It keeps product facts, architecture summaries, model
results, and screenshot decisions separate from the page components.

## Agent continuity

- [Current agent handoff](agent-handoff.md) records what is live, how the
  portfolio is routed, and any remaining work.
- [Change log](change-log.md) records material implementation, content,
  deployment, and operations work in reverse chronological order.

Agents must update these files when the current state changes. The repository
root `AGENTS.md` defines the required start-of-task and end-of-task workflow.

## Project case studies

- [Pole Vault Meet Manager](projects/meet-manager.md)
- [PV Video Capture](projects/pv-video-capture.md)
- [Landon Pole Rental](projects/landon-pole-rental.md)

## Publishing notes

- [Portfolio domain hosting](portfolio-hosting.md)
- [Self-hosted production platform](infrastructure.md)
- [Isolated recruiter demos](recruiter-demos.md)
- [Screenshot inventory and capture plan](screenshots.md)
- [Public-content guidelines](public-content-guidelines.md)

Update the relevant project note before changing a public claim. Keep secrets,
private athlete information, face data, credentials, infrastructure addresses,
and proprietary source code out of this repository's public-facing content.
