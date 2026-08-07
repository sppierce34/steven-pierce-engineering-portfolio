# Portfolio workspace guidance

This repository is the source and documentation workspace for Steven Pierce's
public software engineering portfolio.

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
