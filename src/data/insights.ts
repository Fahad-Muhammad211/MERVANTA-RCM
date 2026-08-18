export type InsightCategory =
  | "Medical Billing"
  | "Coding"
  | "RCM"
  | "Compliance"
  | "Healthcare Operations"
  | "Industry News";

export type InsightType = "Article" | "Guide" | "Whitepaper" | "Webinar" | "Report";

export type Insight = {
  slug: string;
  title: string;
  category: InsightCategory;
  type: InsightType;
  summary: string;
  readTime: string;
  date: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "reducing-first-pass-denials",
    title: "A Structured Approach to Reducing First-Pass Denials",
    category: "RCM",
    type: "Article",
    summary:
      "Why most preventable denials originate upstream of the billing office — and the workflow changes that address them at the source.",
    readTime: "6 min read",
    date: "2026-05-14",
    body: [
      "First-pass denials are frequently treated as a billing office problem, when the majority of correctable causes originate earlier in the revenue cycle — at registration, eligibility verification, and clinical documentation.",
      "Organizations that reduce denial rates sustainably tend to build a closed feedback loop: denial data is categorized by root cause and routed back to the originating department, not just resolved and closed.",
      "A structured weekly review cadence, paired with clear ownership at each stage of the revenue cycle, is consistently more effective than periodic audits alone.",
    ],
  },
  {
    slug: "coding-updates-annual-guidelines",
    title: "Navigating Annual Coding Guideline Updates Without Disrupting Operations",
    category: "Coding",
    type: "Guide",
    summary:
      "A practical framework for absorbing annual ICD-10-CM and CPT changes without a drop in coding accuracy or turnaround.",
    readTime: "8 min read",
    date: "2026-02-02",
    body: [
      "Annual coding updates introduce risk not because the changes are complex, but because implementation is often rushed and undertrained.",
      "A staged rollout — impact assessment, targeted coder training, parallel review period, and full cutover — reduces the accuracy dip that typically follows major guideline updates.",
      "Specialty-specific changes deserve dedicated attention; a general training session rarely transfers cleanly to high-complexity specialties.",
    ],
  },
  {
    slug: "prior-authorization-turnaround",
    title: "Improving Prior Authorization Turnaround Without Adding Headcount",
    category: "Medical Billing",
    type: "Article",
    summary:
      "Workflow and prioritization changes that shorten authorization cycles for high-volume specialties.",
    readTime: "5 min read",
    date: "2026-04-09",
    body: [
      "Authorization delays are rarely caused by a single bottleneck — they compound across requirement research, documentation assembly, and payer follow-up.",
      "Prioritizing by clinical urgency and scheduled service date, rather than first-in-first-out, meaningfully reduces cancelled or delayed procedures.",
      "Maintaining a current, payer-specific authorization requirement matrix removes a large share of avoidable rework.",
    ],
  },
  {
    slug: "hipaa-safeguards-vendor-oversight",
    title: "HIPAA Safeguards and Vendor Oversight for Outsourced RCM",
    category: "Compliance",
    type: "Whitepaper",
    summary:
      "What healthcare organizations should evaluate when extending PHI access to an RCM partner.",
    readTime: "12 min read",
    date: "2026-01-20",
    body: [
      "Extending PHI access to an outsourced partner does not transfer accountability — it expands the scope of oversight required from the covered entity.",
      "A defensible vendor oversight program includes a signed Business Associate Agreement, documented access controls, audit log review rights, and a tested incident response protocol.",
      "Organizations should request evidence of security training programs and periodic risk assessments, not just policy documents.",
    ],
  },
  {
    slug: "multi-tin-centralization",
    title: "Centralizing Billing Across Multiple TINs After a Practice Acquisition",
    category: "Healthcare Operations",
    type: "Guide",
    summary:
      "A phased framework for consolidating billing operations following growth through acquisition.",
    readTime: "9 min read",
    date: "2026-03-11",
    body: [
      "Post-acquisition billing integration often stalls because legacy systems and workflows are left in place under the assumption that consolidation can happen later.",
      "Sequencing consolidation by transaction volume — rather than acquisition date — reduces operational risk during transition.",
      "Enterprise reporting should be established early, even before full workflow consolidation, to preserve leadership visibility throughout the transition.",
    ],
  },
  {
    slug: "denial-trends-payer-behavior",
    title: "What Shifting Payer Denial Patterns Signal for 2026",
    category: "Industry News",
    type: "Report",
    summary:
      "Emerging trends in payer documentation requirements and their operational implications.",
    readTime: "7 min read",
    date: "2026-06-18",
    body: [
      "Payers continue to increase documentation specificity requirements ahead of adjudication, shifting more burden onto front-end and coding accuracy.",
      "Organizations with strong upstream documentation review programs are absorbing these changes with minimal denial rate impact.",
      "Monitoring payer policy bulletins on a defined cadence, rather than reactively, remains the most effective mitigation strategy.",
    ],
  },
  {
    slug: "webinar-enterprise-rcm-governance",
    title: "Webinar: Building Enterprise RCM Governance Across Multi-Location Groups",
    category: "RCM",
    type: "Webinar",
    summary:
      "A recorded session on structuring governance, reporting, and accountability across multi-location healthcare organizations.",
    readTime: "38 min watch",
    date: "2026-05-29",
    body: [
      "This session walks through the governance structures that allow multi-location and multi-specialty organizations to maintain consistent revenue cycle performance at scale.",
      "Topics include centralized reporting design, provider-level accountability, and the role of a dedicated enterprise account team.",
      "The full recording, along with the accompanying slide deck, is available on request from our client success team.",
    ],
  },
  {
    slug: "credentialing-turnaround-benchmarks",
    title: "Understanding Credentialing Turnaround Timelines Across Payers",
    category: "Compliance",
    type: "Article",
    summary:
      "Why credentialing timelines vary so widely across payer types, and how to plan around them.",
    readTime: "6 min read",
    date: "2026-07-02",
    body: [
      "Credentialing turnaround varies significantly between Medicare, Medicaid, and commercial payers, and treating them under a single timeline assumption creates avoidable delays.",
      "Submitting complete applications on first attempt has a disproportionate effect on total turnaround time compared to any single follow-up tactic.",
      "Tracking application status proactively — rather than waiting for payer outreach — remains the most reliable lever available to credentialing teams.",
    ],
  },
];

export const insightCategories: InsightCategory[] = [
  "Medical Billing",
  "Coding",
  "RCM",
  "Compliance",
  "Healthcare Operations",
  "Industry News",
];
