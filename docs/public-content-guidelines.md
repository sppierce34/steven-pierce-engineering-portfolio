# Public-content guidelines

The portfolio can describe product behavior, high-level architecture,
technology choices, training methodology, and aggregate model metrics.

Do not publish:

- credentials, environment values, tokens, or private repository URLs
- athlete records, contact details, face embeddings, or identifiable training data
- server addresses, tunnel identifiers, database connection details, or bucket keys
- proprietary source code copied from the private application repositories

Aggregate dataset counts and validation metrics are appropriate when they have
been checked against project documentation. Mark estimates as estimates and
date model results when they may change.

## Before making the repository public

1. Scan the current tracked files and every reachable Git revision for secrets,
   private infrastructure details, sensitive filenames, and private source.
2. Inspect screenshots, PDFs, and other binary assets for identifying records,
   hidden metadata, and unintended historical versions.
3. Run `npm test`, `npm run lint`, and `npm audit` against the release state.
4. Confirm that public documentation describes only high-level architecture and
   verified aggregate evidence.
5. Record the audit and release result in `docs/agent-handoff.md` and
   `docs/change-log.md`.
