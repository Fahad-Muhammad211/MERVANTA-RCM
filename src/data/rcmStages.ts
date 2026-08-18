export type RcmStage = {
  slug: string;
  number: string;
  name: string;
  shortDescription: string;
  description: string;
  keyActivities: string[];
  benefits: string[];
  metrics: { label: string; value: string }[];
};

export const rcmStages: RcmStage[] = [
  {
    slug: "patient-access",
    number: "01",
    name: "Patient Access",
    shortDescription: "The revenue cycle begins before the patient is seen.",
    description:
      "Patient Access establishes the financial and demographic foundation for every downstream process. Accurate intake data reduces denials, rework, and patient billing disputes later in the cycle.",
    keyActivities: [
      "Patient registration and demographic capture",
      "Insurance discovery and verification",
      "Financial counseling and estimates",
      "Scheduling coordination with clinical workflows",
    ],
    benefits: [
      "Fewer downstream demographic denials",
      "Improved patient financial experience",
      "Cleaner data entering the revenue cycle",
    ],
    metrics: [
      { label: "Focus", value: "Data integrity" },
      { label: "Stage type", value: "Front-end" },
    ],
  },
  {
    slug: "eligibility-verification",
    number: "02",
    name: "Eligibility Verification",
    shortDescription: "Confirming active coverage before services are rendered.",
    description:
      "Real-time and batch eligibility checks confirm active coverage, plan benefits, coordination of benefits, and patient financial responsibility prior to the point of service.",
    keyActivities: [
      "Real-time payer eligibility checks",
      "Benefit and coverage validation",
      "Coordination of benefits review",
      "Patient responsibility estimation",
    ],
    benefits: [
      "Reduced eligibility-related denials",
      "Accurate upfront patient estimates",
      "Fewer claim rejections at the payer level",
    ],
    metrics: [
      { label: "Focus", value: "Coverage accuracy" },
      { label: "Stage type", value: "Front-end" },
    ],
  },
  {
    slug: "prior-authorization",
    number: "03",
    name: "Prior Authorization",
    shortDescription: "Securing payer approval ahead of qualifying services.",
    description:
      "Prior authorization management tracks payer-specific requirements, submits documentation, and follows up on approvals for procedures, imaging, and services that require pre-certification.",
    keyActivities: [
      "Payer authorization requirement research",
      "Clinical documentation submission",
      "Status tracking and follow-up",
      "Peer-to-peer coordination support",
    ],
    benefits: [
      "Reduced authorization-related denials",
      "Fewer delayed or cancelled procedures",
      "Improved provider and patient scheduling reliability",
    ],
    metrics: [
      { label: "Focus", value: "Payer approval" },
      { label: "Stage type", value: "Front-end" },
    ],
  },
  {
    slug: "charge-capture",
    number: "04",
    name: "Charge Capture",
    shortDescription: "Translating rendered services into billable charges.",
    description:
      "Charge capture ensures every billable service, procedure, and supply is accurately recorded and routed into the billing workflow, protecting revenue integrity at the source.",
    keyActivities: [
      "Charge entry from clinical documentation",
      "Charge reconciliation against schedules",
      "Missing charge identification",
      "Fee schedule and modifier validation",
    ],
    benefits: [
      "Minimized revenue leakage",
      "Faster time from service to claim",
      "Improved charge accuracy",
    ],
    metrics: [
      { label: "Focus", value: "Revenue integrity" },
      { label: "Stage type", value: "Mid-cycle" },
    ],
  },
  {
    slug: "medical-coding",
    number: "05",
    name: "Medical Coding",
    shortDescription: "Certified coders translate clinical documentation into compliant codes.",
    description:
      "AAPC/AHIMA-aligned coding practices convert clinical documentation into ICD-10-CM, CPT, and HCPCS codes that accurately reflect the services delivered, supporting compliant and optimized reimbursement.",
    keyActivities: [
      "ICD-10-CM, CPT, and HCPCS coding",
      "Specialty-specific coding review",
      "Documentation gap identification",
      "Coding compliance auditing",
    ],
    benefits: [
      "Higher first-pass claim acceptance",
      "Reduced compliance risk",
      "Accurate reimbursement for services rendered",
    ],
    metrics: [
      { label: "Focus", value: "Coding accuracy" },
      { label: "Stage type", value: "Mid-cycle" },
    ],
  },
  {
    slug: "claims-submission",
    number: "06",
    name: "Claims Submission",
    shortDescription: "Clean claims, submitted through validated clearinghouse channels.",
    description:
      "Claims are scrubbed against payer-specific edits, validated for completeness, and submitted electronically through clearinghouse connections to minimize rejections and accelerate adjudication.",
    keyActivities: [
      "Claim scrubbing and edit resolution",
      "Payer-specific formatting validation",
      "Electronic claims submission",
      "Clearinghouse rejection monitoring",
    ],
    benefits: [
      "Higher clean claim rates",
      "Faster payer turnaround",
      "Reduced administrative rework",
    ],
    metrics: [
      { label: "Focus", value: "Clean claim rate" },
      { label: "Stage type", value: "Mid-cycle" },
    ],
  },
  {
    slug: "payment-posting",
    number: "07",
    name: "Payment Posting",
    shortDescription: "Accurate, reconciled posting of every remittance.",
    description:
      "Electronic and manual remittance advices are posted with full reconciliation against expected reimbursement, ensuring accurate account balances and timely identification of variances.",
    keyActivities: [
      "ERA and EOB payment posting",
      "Contractual adjustment application",
      "Underpayment identification",
      "Daily reconciliation against deposits",
    ],
    benefits: [
      "Accurate real-time account balances",
      "Early underpayment detection",
      "Reliable financial reporting",
    ],
    metrics: [
      { label: "Focus", value: "Reconciliation accuracy" },
      { label: "Stage type", value: "Back-end" },
    ],
  },
  {
    slug: "denial-management",
    number: "08",
    name: "Denial Management",
    shortDescription: "Root-cause analysis and structured appeal workflows.",
    description:
      "Denials are categorized, root-caused, and routed through structured appeal and correction workflows, with feedback loops back into front-end and coding processes to prevent recurrence.",
    keyActivities: [
      "Denial categorization and trending",
      "Appeal letter preparation and submission",
      "Root-cause feedback to upstream teams",
      "Payer escalation management",
    ],
    benefits: [
      "Recovered revenue from correctable denials",
      "Declining denial rates over time",
      "Stronger payer relationship management",
    ],
    metrics: [
      { label: "Focus", value: "Recovery & prevention" },
      { label: "Stage type", value: "Back-end" },
    ],
  },
  {
    slug: "ar-management",
    number: "09",
    name: "A/R Management",
    shortDescription: "Proactive follow-up across the full aging spectrum.",
    description:
      "Accounts receivable teams work aged claims by payer, aging bucket, and balance priority, applying structured follow-up cadences to accelerate resolution and reduce aged inventory.",
    keyActivities: [
      "Aging bucket prioritization",
      "Payer follow-up and status tracking",
      "Credit balance resolution",
      "Aged A/R inventory reduction plans",
    ],
    benefits: [
      "Reduced days in A/R",
      "Lower aged and at-risk balances",
      "Improved cash predictability",
    ],
    metrics: [
      { label: "Focus", value: "A/R days" },
      { label: "Stage type", value: "Back-end" },
    ],
  },
  {
    slug: "collections",
    number: "10",
    name: "Collections",
    shortDescription: "Patient and payer collections handled with compliance and empathy.",
    description:
      "Patient billing and collections balance revenue recovery with a respectful patient financial experience, following compliant communication practices and flexible resolution options.",
    keyActivities: [
      "Patient statement management",
      "Payment plan coordination",
      "Compliant collections communication",
      "Bad debt and write-off workflows",
    ],
    benefits: [
      "Improved patient collection rates",
      "Stronger patient satisfaction outcomes",
      "Compliant, well-documented collections process",
    ],
    metrics: [
      { label: "Focus", value: "Patient experience" },
      { label: "Stage type", value: "Back-end" },
    ],
  },
  {
    slug: "reporting-analytics",
    number: "11",
    name: "Reporting & Analytics",
    shortDescription: "Closing the loop with executive-grade visibility.",
    description:
      "Performance across every stage of the revenue cycle is aggregated into provider-level, location-level, and payer-level reporting, giving leadership the visibility required for informed decisions.",
    keyActivities: [
      "Executive and operational dashboards",
      "Provider and location performance reporting",
      "Payer performance benchmarking",
      "Trend analysis and forecasting",
    ],
    benefits: [
      "Data-driven operational decisions",
      "Full transparency into revenue cycle health",
      "Early identification of emerging issues",
    ],
    metrics: [
      { label: "Focus", value: "Transparency" },
      { label: "Stage type", value: "Continuous" },
    ],
  },
];
