export type Project = {
  slug: string;
  number: string;
  title: string;
  kicker: string;
  summary: string;
  description: string;
  status: string;
  platforms: string;
  role: string;
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  liveUrl: string;
  liveLabel: string;
  stack: string[];
  highlights: string[];
  modelTraining?: {
    title: string;
    description: string;
    evidence: string;
    stats: { value: string; label: string }[];
    pipeline: string[];
  };
  architecture: { label: string; detail: string }[];
  decisions: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "meet-manager",
    number: "01",
    title: "Pole Vault Meet Manager",
    kicker: "Production meet operations",
    summary:
      "A web and mobile platform that runs registrations, check-in, scoring, live results, and organizer workflows from one shared system.",
    description:
      "I designed this around the pressure of a real meet day: many athletes, multiple devices, fast scoring decisions, and no room for data drift. The product combines public registration and results with role-aware administration, native clients, operational health checks, and a shared backend.",
    status: "Live production system",
    platforms: "Web, iOS, Android",
    role: "Product owner and full-stack engineer",
    image: "/projects/meet-manager-dashboard.png",
    imageAlt: "Authenticated Pole Vault Meet Manager dashboard showing event operations and athlete counts",
    liveUrl: "https://meetregistrationpv.com",
    liveLabel: "Open live application",
    stack: [
      "Python",
      "Flask",
      "TypeScript",
      "Convex",
      "React Native",
      "Expo",
      "Cloudflare",
    ],
    highlights: [
      "Meet and camp registration, athlete check-in, organizer administration, scoring, and live public results.",
      "Shared Convex data and scoring workflows used by the web experience and native clients.",
      "Self-hosted across primary and failover Linux servers with Cloudflare routing, health checks, automated deployments, backups, and recovery drills.",
    ],
    architecture: [
      { label: "Athletes + staff", detail: "Web, iPhone, iPad, and Android clients" },
      { label: "Cloudflare edge", detail: "Traffic routing, tunnel, health, and failover" },
      { label: "Application layer", detail: "Flask pages, public APIs, mobile APIs, and admin routes" },
      { label: "Shared backend", detail: "Convex functions and authoritative production data" },
      { label: "Self-hosted operations", detail: "Two Linux servers, monitoring, backups, failover, and releases" },
    ],
    decisions: [
      {
        title: "One scoring model",
        text: "Web and native scoring share the same backend rules so attempt limits and results remain consistent across devices.",
      },
      {
        title: "Production resilience",
        text: "Cloudflare routing, health endpoints, primary and failover services, backups, and documented recovery paths reduce meet-day risk.",
      },
      {
        title: "Release discipline",
        text: "Code changes move through explicit checks and repeatable native release workflows before reaching athletes and organizers.",
      },
    ],
  },
  {
    slug: "video-capture",
    number: "02",
    title: "PV Video Capture",
    kicker: "Computer vision + live operations",
    summary:
      "A multi-camera capture and clip-delivery system with two custom computer-vision models and more than 30,000 labeling-ready frames.",
    description:
      "This system connects physical cameras and a live runway workflow to software that identifies attempts, manages athletes, creates clips, supports model-assisted labeling, and delivers video. I built the data pipeline and trained separate models for scene segmentation and vault-phase detection, combining local, latency-sensitive Python tooling with a hosted FastAPI application and cloud media storage.",
    status: "Live private operational system",
    platforms: "Desktop, web, mobile",
    role: "Product owner and software engineer",
    image: "/projects/pv-labeling-workspace.png",
    imageAlt: "Authenticated PV Labeling workspace showing vault-phase tools, dataset counts, and training video",
    secondaryImage: "/projects/pv-video-capture.png",
    secondaryImageAlt: "Wide-angle source frame from the pole vault video capture system",
    liveUrl: "https://landoncheckin.com",
    liveLabel: "Open live check-in",
    stack: [
      "Python",
      "OpenCV",
      "Ultralytics",
      "MediaPipe",
      "FFmpeg",
      "FastAPI",
      "Expo",
      "Cloudflare Stream",
      "R2",
      "Neon",
    ],
    highlights: [
      "Multi-camera capture, PTZ controls, live previews, attempt monitoring, automated clipping, and recovery-aware launch tooling.",
      "A runway/pit segmentation model and a multi-class vault-phase model trained with versioned datasets, same-split evaluation, and controlled checkpoint promotion.",
      "Athlete accounts, practice check-in, clip assignment and playback, mobile access, and self-hosted primary/secondary server failover.",
    ],
    modelTraining: {
      title: "Two trained models. One field-ready vision pipeline.",
      description:
        "The scene-segmentation model learns the physical geography of the runway and landing pit. The vault-phase model detects the active athlete and classifies phases such as the run, plant, takeoff, top of jump, landing, and walk-off. Keeping those responsibilities separate makes the system easier to evaluate and safer to improve.",
      evidence:
        "The live labeling workspace now contains 30,605 training-ready frames: 22,027 positives and 8,578 negatives. The current published vault-phase model was trained and validated on a 15,579-image split, while the segmentation model was refined on 397 carefully reviewed polygon masks.",
      stats: [
        { value: "30,605", label: "labeling-ready frames in the live workspace" },
        { value: "15,579", label: "images in the current vault-phase split" },
        { value: "0.947", label: "vault-phase validation mAP50" },
        { value: "0.952", label: "scene-segmentation mask mAP50" },
      ],
      pipeline: [
        "Extract candidate frames from real practice and meet video.",
        "Label and review phase boxes, negatives, runway masks, and pit masks.",
        "Train and validate YOLO checkpoints against stable dataset splits.",
        "Publish a candidate only when it beats the current same-split baseline.",
      ],
    },
    architecture: [
      { label: "Cameras + runway", detail: "PTZ and fixed cameras capture live attempts" },
      { label: "Local vision pipeline", detail: "Python, FFmpeg, OpenCV, segmentation, vault phases, Face ID, and clipping" },
      { label: "Self-hosted FastAPI", detail: "Accounts, check-in, roster, labeling APIs, and two-server failover" },
      { label: "Shared data + media", detail: "Neon/Postgres, Cloudflare Stream, and R2" },
      { label: "Athlete + staff tools", detail: "Browser, Expo mobile, check-in station, and labeling workspace" },
    ],
    decisions: [
      {
        title: "Separate the vision jobs",
        text: "Scene segmentation supplies runway and pit geography; the vault-phase model remains responsible for finding the active vaulter and understanding the attempt.",
      },
      {
        title: "Measured model promotion",
        text: "Candidates are evaluated on the same split as the published checkpoint and promoted only when validation mAP50-95 improves.",
      },
      {
        title: "Local where latency matters",
        text: "Capture and inference stay near the cameras, while account, roster, model-labeling, and clip metadata are coordinated by hosted services.",
      },
    ],
  },
  {
    slug: "pole-rental",
    number: "03",
    title: "Landon Pole Rental",
    kicker: "Cross-platform commerce",
    summary:
      "An iOS, Android, and web rental platform for inventory, payments, agreements, staff operations, and time-sensitive waitlists.",
    description:
      "The application manages the complete rental lifecycle: onboarding, role-aware access, inventory discovery, checkout readiness, pickup approval, recurring billing, returns, refunds, and legal agreement artifacts. The same Expo product surface runs across native and web clients.",
    status: "Live production system",
    platforms: "Web, iOS, Android",
    role: "Product owner and full-stack engineer",
    image: "/projects/landon-pole-rental.png",
    imageAlt: "Landon Pole Rental production sign-in screen",
    liveUrl: "https://pole-rental.com",
    liveLabel: "Open live application",
    stack: [
      "TypeScript",
      "Expo Router",
      "React Native",
      "Cloudflare Workers",
      "D1",
      "R2",
      "Stripe",
      "Better Auth",
      "Postmark",
    ],
    highlights: [
      "Inventory, QR and serial scanning, rental cart, staff pickup and return verification, discounts, refunds, and invoicing.",
      "Organization-scoped roles, Better Auth sessions, Stripe Connect and scheduled billing, and immutable agreement artifacts.",
      "Self-hosted web delivery on primary/failover Linux servers, with the API and data layer running on Cloudflare Workers, D1, and R2.",
    ],
    architecture: [
      { label: "Athletes + staff", detail: "One Expo Router product for web, iOS, and Android" },
      { label: "Web + Cloudflare API", detail: "Self-hosted web failover plus Workers business rules and scheduled jobs" },
      { label: "Identity + data", detail: "Better Auth, organization roles, D1 records, and R2 documents" },
      { label: "Payments + messages", detail: "Stripe, Postmark email, and push notifications" },
      { label: "Operations", detail: "CI checks, migrations, deployments, and mobile releases" },
    ],
    decisions: [
      {
        title: "Shared product surface",
        text: "Expo Router keeps core workflows consistent across web and native clients while preserving platform-specific scanning features.",
      },
      {
        title: "Explicit rental state",
        text: "Pickup approval, active rental, pending return, and verified return states make billing and inventory behavior auditable.",
      },
      {
        title: "Durable evidence",
        text: "Signed agreements produce retained records and immutable R2 artifacts with integrity checks instead of relying on transient UI state.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
