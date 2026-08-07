# Portfolio workspace guidance

This repository is the source and documentation workspace for Steven Pierce's
public software engineering portfolio.

## Required documentation handoff

Documentation is part of every material repository task, not a separate
follow-up. Before making changes:

1. Read `docs/README.md`.
2. Read `docs/agent-handoff.md` for the current published state and open work.
3. Read the relevant project, hosting, infrastructure, screenshot, or public
   content document.
4. Review the newest entries in `docs/change-log.md`.

Before finishing any task that changes content, code, screenshots, metrics,
resume assets, hosting, DNS, deployment state, or public behavior:

1. Update the matching durable document under `docs/`.
2. Update `docs/agent-handoff.md` when the current state, live URLs, validation
   status, or next actions changed.
3. Add a dated entry to `docs/change-log.md` with the scope, result,
   validation, publishing status, and any follow-up.
4. Commit documentation with the implementation so one Git revision explains
   both what changed and why.

Do not put credentials, validation tokens, private data, internal addresses,
or other secrets in handoff documents. Read-only investigation and no-op tasks
do not require a change-log entry unless they establish a fact future agents
will need.

## Before changing a case study

1. Read `docs/README.md` and the matching file under `docs/projects/`.
2. Keep the project note and the public page consistent.
3. Verify new metrics or architecture claims against the private source project
   or a fact supplied directly by Steven.
4. Follow `docs/public-content-guidelines.md` for privacy and security.

## Screenshots

- Prefer authenticated workflow screens over login pages.
- Use staged or sample data and remove sensitive or identifying information.
- Update `docs/screenshots.md` whenever an image is replaced.
- Store approved public images under `public/projects/`.

## Validation and publishing

- Run `npm test` after content or application changes.
- Keep `.openai/hosting.json` intact and publish validated changes with Sites.
- Commit documentation and public-page changes together so the Git history
  explains why each portfolio claim changed.
- After an external operation such as a Sites deployment or DNS change, record
  the verified outcome in the handoff and change log before closing the task.
