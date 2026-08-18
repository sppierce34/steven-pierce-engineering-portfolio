# PV Video Capture

Public case study:
`https://portfolio.landoncheckin.com/projects/video-capture`

Read-only recruiter demo:
`https://portfolio.landoncheckin.com/demos/video-capture`

The demo presents fictional capture, clip, and model-review records. It does
not connect to cameras, athlete accounts, private media, hosted services, or
the production capture environment.

## Public summary

A multi-camera capture, computer-vision, athlete check-in, labeling, and clip
delivery system built for real pole-vault training environments.

## Steven's role

Product owner and software engineer responsible for the capture workflow,
hosted services, labeling tools, dataset pipeline, model training, validation,
deployment, and operational recovery paths.

## Model story

Steven trained two purpose-built YOLO models with different responsibilities:

- **Runway/pit scene segmentation:** identifies physical scene geography and
  supplies masks for runway filtering and pit-focused processing. The current
  best checkpoint was refined using 397 reviewed polygon-mask frames and
  reached mask mAP50 0.952 and mask mAP50-95 0.818 on the documented split.
- **Vault-phase detection:** finds the active vaulter and classifies the attempt
  across phases such as the run, plant, takeoff, top of jump, landing, and
  walk-off. The current split contains 12,426 training images and 3,153
  validation images, with 10,314 positives and 5,265 negatives. The published
  checkpoint reached precision 0.912, recall 0.913, mAP50 0.947, and mAP50-95
  0.740.

As of August 2026, the live workspace contains 30,605 labeling-ready frames:
22,027 positives and 8,578 negatives. Across extraction, curation, labeling,
model-assisted review, training, and evaluation, the workflow has therefore
surpassed the original 25,000-frame milestone.

## Training and promotion workflow

1. Extract candidate frames from real practice and meet video.
2. Label phase boxes, negative frames, runway masks, and pit masks.
3. Review and deduplicate the dataset while preserving source provenance.
4. Train and validate candidates against a stable train/validation split.
5. Publish a new vault-phase checkpoint only when it improves same-split
   mAP50-95 over the current production baseline.

## Architecture

1. PTZ and fixed cameras capture live attempts.
2. Local Python, FFmpeg, OpenCV, Ultralytics, and identity tools perform
   low-latency capture, inference, and clipping.
3. FastAPI coordinates accounts, check-in, rosters, clips, and labeling APIs
   across self-hosted primary and failover Linux servers.
4. Neon/Postgres, Cloudflare Stream, and R2 store shared data, video, and
   training assets.
5. Browser, mobile, check-in-station, and labeling interfaces support athletes
   and staff.

## Screenshot targets

- Authenticated athlete or staff home screen
- Clip library or playback workflow with private details redacted
- Hosted model-labeling workspace
- Segmentation overlay or vault-phase prediction example
