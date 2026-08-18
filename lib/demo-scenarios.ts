export type DemoStatusTone = "blue" | "green" | "orange" | "neutral";

export type DemoMetric = {
  value: string;
  label: string;
};

export type DemoTableRow = {
  cells: string[];
  status?: {
    label: string;
    tone: DemoStatusTone;
  };
};

export type DemoView = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  metrics: DemoMetric[];
  tableTitle: string;
  columns: string[];
  rows: DemoTableRow[];
  activityTitle: string;
  activity: string[];
};

export type DemoScenario = {
  slug: string;
  productName: string;
  accountName: string;
  accountEmail: string;
  environmentLabel: string;
  views: DemoView[];
};

export const demoScenarios: Record<string, DemoScenario> = {
  "meet-manager": {
    slug: "meet-manager",
    productName: "Pole Vault Meet Manager",
    accountName: "Recruiter Demo",
    accountEmail: "demo@meet-manager.local",
    environmentLabel: "Great Lakes Vault Classic — Sample Meet",
    views: [
      {
        id: "overview",
        label: "Meet overview",
        eyebrow: "Event operations",
        title: "One view of a meet in motion.",
        description:
          "Review registration, check-in, flights, and pit readiness from a fictional meet-day workspace.",
        metrics: [
          { value: "48", label: "sample registrations" },
          { value: "31", label: "athletes checked in" },
          { value: "03", label: "active flights" },
          { value: "02", label: "pits ready" },
        ],
        tableTitle: "Flight readiness",
        columns: ["Flight", "Division", "Athletes", "Next height"],
        rows: [
          { cells: ["Flight A", "Open Women", "12", "3.35 m"], status: { label: "Scoring", tone: "green" } },
          { cells: ["Flight B", "Open Men", "14", "4.30 m"], status: { label: "Warm-up", tone: "blue" } },
          { cells: ["Flight C", "High School", "11", "2.75 m"], status: { label: "Check-in", tone: "orange" } },
        ],
        activityTitle: "Meet-day activity",
        activity: [
          "Flight A advanced to 3.35 m.",
          "Sample Athlete 07 completed check-in.",
          "Pit 2 scoring tablet reported healthy.",
        ],
      },
      {
        id: "check-in",
        label: "Athlete check-in",
        eyebrow: "Roster workflow",
        title: "Fast check-in across shared devices.",
        description:
          "See how organizers confirm attendance, divisions, and opening heights without exposing real athlete records.",
        metrics: [
          { value: "31", label: "checked in" },
          { value: "09", label: "awaiting arrival" },
          { value: "04", label: "opening heights updated" },
          { value: "00", label: "blocking issues" },
        ],
        tableTitle: "Sample roster",
        columns: ["Athlete", "Division", "Opening height", "Flight"],
        rows: [
          { cells: ["Sample Athlete 03", "Open Women", "3.05 m", "A"], status: { label: "Checked in", tone: "green" } },
          { cells: ["Sample Athlete 07", "Open Men", "4.00 m", "B"], status: { label: "Checked in", tone: "green" } },
          { cells: ["Sample Athlete 12", "High School", "2.45 m", "C"], status: { label: "Expected", tone: "orange" } },
        ],
        activityTitle: "Check-in safeguards",
        activity: [
          "Division and flight changes remain visible to scoring clients.",
          "Opening-height updates are validated before saving.",
          "Demo records are fictional and reset with the page.",
        ],
      },
      {
        id: "scoring",
        label: "Scoring",
        eyebrow: "Shared scoring state",
        title: "Attempts stay consistent across devices.",
        description:
          "Explore a read-only scoring board that mirrors the shared rules used by web, iPad, and mobile clients.",
        metrics: [
          { value: "3.35 m", label: "current bar" },
          { value: "08", label: "athletes remaining" },
          { value: "02", label: "devices connected" },
          { value: "Live", label: "results status" },
        ],
        tableTitle: "Flight A scoring board",
        columns: ["Athlete", "3.20 m", "3.35 m", "Standing"],
        rows: [
          { cells: ["Sample Athlete 03", "O", "XO", "1"], status: { label: "Active", tone: "blue" } },
          { cells: ["Sample Athlete 05", "XO", "—", "2"], status: { label: "Waiting", tone: "neutral" } },
          { cells: ["Sample Athlete 09", "XXO", "XXX", "3"], status: { label: "Complete", tone: "orange" } },
        ],
        activityTitle: "Scoring behavior",
        activity: [
          "Attempt limits are enforced by shared backend rules.",
          "Provisional standings update after every recorded attempt.",
          "Public results remain separate from organizer controls.",
        ],
      },
    ],
  },
  "video-capture": {
    slug: "video-capture",
    productName: "PV Video Capture",
    accountName: "Recruiter Demo",
    accountEmail: "demo@pv-capture.local",
    environmentLabel: "Indoor Practice 06 — Sample Session",
    views: [
      {
        id: "capture",
        label: "Live capture",
        eyebrow: "Camera operations",
        title: "Capture health at a glance.",
        description:
          "Review a fictional practice session across PTZ and fixed cameras without connecting to the live capture network.",
        metrics: [
          { value: "03", label: "sample cameras" },
          { value: "12", label: "athletes checked in" },
          { value: "38", label: "clips created" },
          { value: "99.2%", label: "capture success" },
        ],
        tableTitle: "Camera health",
        columns: ["Camera", "View", "Stream", "Last clip"],
        rows: [
          { cells: ["CAM-DEMO-01", "Runway wide", "1080p60", "00:42 ago"], status: { label: "Ready", tone: "green" } },
          { cells: ["CAM-DEMO-02", "Pit close", "1080p60", "00:42 ago"], status: { label: "Ready", tone: "green" } },
          { cells: ["CAM-DEMO-03", "Side profile", "1080p30", "02:18 ago"], status: { label: "Standby", tone: "blue" } },
        ],
        activityTitle: "Capture pipeline",
        activity: [
          "Vault-phase signal opened a sample attempt window.",
          "All three fictional camera buffers remained healthy.",
          "Clip metadata was assigned to Sample Athlete 04.",
        ],
      },
      {
        id: "clips",
        label: "Clip library",
        eyebrow: "Athlete delivery",
        title: "From attempt to reviewable clip.",
        description:
          "Browse sample clip assignments, processing states, and delivery readiness with no access to private athlete media.",
        metrics: [
          { value: "38", label: "clips this session" },
          { value: "34", label: "ready to view" },
          { value: "03", label: "processing" },
          { value: "01", label: "review flag" },
        ],
        tableTitle: "Sample clip queue",
        columns: ["Clip", "Athlete", "Camera views", "Duration"],
        rows: [
          { cells: ["DEMO-CLIP-038", "Sample Athlete 04", "3", "00:11"], status: { label: "Ready", tone: "green" } },
          { cells: ["DEMO-CLIP-037", "Sample Athlete 09", "2", "00:13"], status: { label: "Processing", tone: "blue" } },
          { cells: ["DEMO-CLIP-036", "Unassigned", "3", "00:09"], status: { label: "Review", tone: "orange" } },
        ],
        activityTitle: "Delivery safeguards",
        activity: [
          "Only assigned athletes can view their production clips.",
          "Sample entries contain no media, face data, or account identifiers.",
          "Processing states shown here are presentation-only.",
        ],
      },
      {
        id: "models",
        label: "Model review",
        eyebrow: "Computer vision",
        title: "Two models, separate responsibilities.",
        description:
          "Inspect the documented segmentation and vault-phase results through a safe model-review workspace.",
        metrics: [
          { value: "30,605", label: "labeling-ready frames" },
          { value: "0.952", label: "segmentation mask mAP50" },
          { value: "0.947", label: "vault-phase mAP50" },
          { value: "15,579", label: "vault-phase image split" },
        ],
        tableTitle: "Published model evidence",
        columns: ["Model", "Responsibility", "Validation", "Dataset"],
        rows: [
          { cells: ["Runway / pit segmentation", "Scene geography", "0.952 mask mAP50", "397 masks"], status: { label: "Published", tone: "green" } },
          { cells: ["Vault-phase detector", "Attempt phases", "0.947 mAP50", "15,579 images"], status: { label: "Published", tone: "green" } },
          { cells: ["Candidate checkpoint", "Same-split review", "Awaiting comparison", "Versioned split"], status: { label: "Review", tone: "blue" } },
        ],
        activityTitle: "Promotion rules",
        activity: [
          "Candidates are evaluated on the same validation split.",
          "Checkpoint promotion requires an mAP50-95 improvement.",
          "This demo contains metrics only—no training frames or model files.",
        ],
      },
    ],
  },
  "pole-rental": {
    slug: "pole-rental",
    productName: "Landon Pole Rental",
    accountName: "Recruiter Demo",
    accountEmail: "demo@pole-rental.local",
    environmentLabel: "Demo Organization — Sample Inventory",
    views: [
      {
        id: "inventory",
        label: "Inventory",
        eyebrow: "Equipment discovery",
        title: "Find the right pole and its status.",
        description:
          "Explore fictional inventory records, availability, and service states without touching production rentals.",
        metrics: [
          { value: "86", label: "sample poles" },
          { value: "62", label: "available" },
          { value: "18", label: "actively rented" },
          { value: "06", label: "service hold" },
        ],
        tableTitle: "Sample inventory",
        columns: ["Asset", "Length", "Weight", "Location"],
        rows: [
          { cells: ["DEMO-POLE-135-01", "13' 6\"", "135 lb", "Main rack"], status: { label: "Available", tone: "green" } },
          { cells: ["DEMO-POLE-145-02", "14' 0\"", "145 lb", "Rental 014"], status: { label: "Rented", tone: "blue" } },
          { cells: ["DEMO-POLE-150-03", "14' 6\"", "150 lb", "Service bay"], status: { label: "Inspection", tone: "orange" } },
        ],
        activityTitle: "Inventory controls",
        activity: [
          "QR and serial workflows identify the selected asset.",
          "Pickup and return states keep availability explicit.",
          "Every identifier on this page is fictional.",
        ],
      },
      {
        id: "rentals",
        label: "Rental queue",
        eyebrow: "Rental lifecycle",
        title: "Follow a rental from request to return.",
        description:
          "Review sample checkout-readiness and return states with payment and agreement actions disabled.",
        metrics: [
          { value: "05", label: "awaiting pickup" },
          { value: "18", label: "active rentals" },
          { value: "03", label: "pending return" },
          { value: "00", label: "payment actions" },
        ],
        tableTitle: "Sample rental queue",
        columns: ["Rental", "Athlete", "Asset", "Next step"],
        rows: [
          { cells: ["DEMO-RENT-014", "Sample Athlete 14", "DEMO-POLE-145-02", "Staff pickup check"], status: { label: "Ready", tone: "green" } },
          { cells: ["DEMO-RENT-011", "Sample Athlete 08", "DEMO-POLE-150-01", "Return inspection"], status: { label: "Returning", tone: "orange" } },
          { cells: ["DEMO-RENT-009", "Sample Athlete 02", "DEMO-POLE-135-04", "Recurring term"], status: { label: "Active", tone: "blue" } },
        ],
        activityTitle: "Lifecycle safeguards",
        activity: [
          "Agreement and payment buttons are intentionally absent here.",
          "Staff verification separates pickup from active rental state.",
          "Return inspection completes before an asset becomes available.",
        ],
      },
      {
        id: "staff",
        label: "Staff operations",
        eyebrow: "Role-aware workflow",
        title: "A clear queue for physical handoffs.",
        description:
          "See how staff can organize pickups, returns, waitlists, and service work with sample data only.",
        metrics: [
          { value: "05", label: "pickup checks" },
          { value: "03", label: "return checks" },
          { value: "07", label: "waitlist entries" },
          { value: "06", label: "service tasks" },
        ],
        tableTitle: "Staff work queue",
        columns: ["Task", "Asset", "Priority", "Assigned area"],
        rows: [
          { cells: ["Verify pickup", "DEMO-POLE-145-02", "Today", "Front desk"], status: { label: "Ready", tone: "green" } },
          { cells: ["Inspect return", "DEMO-POLE-150-01", "Today", "Service bay"], status: { label: "In progress", tone: "blue" } },
          { cells: ["Review waitlist match", "14' / 150 lb", "Next", "Inventory"], status: { label: "Queued", tone: "neutral" } },
        ],
        activityTitle: "Operational boundaries",
        activity: [
          "The recruiter demo has no staff permissions or mutation endpoints.",
          "No Stripe, email, push, D1, or R2 request can originate here.",
          "All sample state resets when the page reloads.",
        ],
      },
    ],
  },
};

export function getDemoScenario(slug: string) {
  return demoScenarios[slug];
}
