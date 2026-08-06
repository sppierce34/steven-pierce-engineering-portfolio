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
    image: "/projects/meet-manager.png",
    imageAlt: "Pole Vault Meet Manager production login screen",
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
      "Release and verification policies spanning unit, smoke, UI, load, stress, fuzz, and security checks.",
    ],
    architecture: [
      { label: "Athletes + staff", detail: "Web, iPhone, iPad, and Android clients" },
      { label: "Cloudflare edge", detail: "Traffic routing, tunnel, health, and failover" },
      { label: "Application layer", detail: "Flask pages, public APIs, mobile APIs, and admin routes" },
      { label: "Shared backend", detail: "Convex functions and authoritative production data" },
      { label: "Operations", detail: "Monitoring, backups, release checks, and store delivery" },
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
      "A multi-camera capture, athlete check-in, computer-vision labeling, and clip-delivery system built for pole vault training environments.",
    description:
      "This system connects physical cameras and a live runway workflow to software that identifies attempts, manages athletes, creates clips, supports model labeling, and delivers video. It combines local, latency-sensitive Python tooling with a hosted FastAPI application and cloud media storage.",
    status: "Live private operational system",
    platforms: "Desktop, web, mobile",
    role: "Product owner and software engineer",
    image: "/projects/pv-checkin.png",
    imageAlt: "Landon Check-In production sign-in screen",
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
      "Face ID, pose and person detection, region-of-interest tools, hosted labeling, and model-training utilities.",
      "Athlete accounts, practice check-in, clip assignment and playback, mobile access, and two-server tunnel failover.",
    ],
    architecture: [
      { label: "Cameras + runway", detail: "PTZ and fixed cameras capture live attempts" },
      { label: "Local vision pipeline", detail: "Python, FFmpeg, OpenCV, detection, Face ID, and clipping" },
      { label: "FastAPI service", detail: "Accounts, check-in, roster, clip metadata, and labeling APIs" },
      { label: "Shared data + media", detail: "Neon/Postgres, Cloudflare Stream, and R2" },
      { label: "Athlete + staff tools", detail: "Browser, Expo mobile, check-in station, and labeling workspace" },
    ],
    decisions: [
      {
        title: "Local where latency matters",
        text: "Capture and vision work stays near the cameras, while account, roster, and clip metadata are coordinated by hosted services.",
      },
      {
        title: "Failure-aware capture",
        text: "Preflight checks, camera recovery, GPU telemetry tolerance, and cached identity data keep practice running through partial failures.",
      },
      {
        title: "Privacy boundaries",
        text: "Public pages reveal the architecture and product surface without exposing private athlete records, face data, credentials, or source code.",
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
      "First-in-line waitlists with 24-hour reservations, email and push alerts, and production web and mobile delivery workflows.",
    ],
    architecture: [
      { label: "Athletes + staff", detail: "One Expo Router product for web, iOS, and Android" },
      { label: "Cloudflare API", detail: "Workers routes, authorization, business rules, and scheduled jobs" },
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
