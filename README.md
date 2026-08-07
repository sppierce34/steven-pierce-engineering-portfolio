# Steven Pierce — Software Engineering Portfolio

A public portfolio of production software projects spanning web, mobile, cloud,
and computer vision. The site presents three detailed case studies with product
screenshots, architecture summaries, engineering decisions, and links to live
applications.

## Featured projects

- Meet Manager — event registration, scoring, administration, and results
- PV Video Capture — automated pole-vault capture, processing, and check-in
- Landon Pole Rental — equipment rentals, inventory, payments, and agreements

## Documentation workspace

Project facts, public architecture notes, model results, screenshot planning,
and portfolio content decisions live under [`docs/`](docs/README.md). Start
there when updating a case study or collecting a new product screenshot.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Run the production build and rendered-page tests with:

```bash
npm test
```

The public portfolio intentionally links to live applications without exposing
private source repositories.
