export type Job = {
  slug: string;
  title: string;
  department:
    | "Medical Coding"
    | "Medical Billing"
    | "Accounts Receivable"
    | "Credentialing"
    | "Quality Assurance"
    | "Client Success"
    | "IT & Security"
    | "Operations & Leadership";
  location: string;
  type: "Full-Time" | "Full-Time · Remote" | "Full-Time · Hybrid";
  summary: string;
  responsibilities: string[];
  qualifications: string[];
};

export const jobs: Job[] = [
  {
    slug: "certified-medical-coder-multispecialty",
    title: "Certified Medical Coder — Multi-Specialty",
    department: "Medical Coding",
    location: "Karachi, Pakistan",
    type: "Full-Time",
    summary:
      "Apply ICD-10-CM, CPT, and HCPCS coding across multiple specialties, ensuring accuracy and compliance with current guidelines.",
    responsibilities: [
      "Assign accurate diagnosis and procedure codes from clinical documentation",
      "Identify and route documentation gaps to providers via structured queries",
      "Maintain productivity and accuracy standards aligned with quality benchmarks",
      "Stay current on annual coding guideline and payer policy changes",
    ],
    qualifications: [
      "Active AAPC or AHIMA coding certification",
      "Minimum 2 years of multi-specialty coding experience",
      "Strong working knowledge of NCCI edits and payer coding policy",
    ],
  },
  {
    slug: "senior-ar-specialist",
    title: "Senior A/R Specialist",
    department: "Accounts Receivable",
    location: "Austin, Texas",
    type: "Full-Time",
    summary:
      "Own aged claim resolution across a defined payer and specialty portfolio, driving down days in A/R through structured follow-up.",
    responsibilities: [
      "Work aged claims through prioritized follow-up cadences",
      "Investigate and resolve underpayments and payment variances",
      "Escalate stalled balances with clear documentation",
      "Contribute to monthly A/R inventory review with leadership",
    ],
    qualifications: [
      "3+ years of healthcare A/R or claims follow-up experience",
      "Familiarity with major commercial and government payer portals",
      "Strong analytical and written communication skills",
    ],
  },
  {
    slug: "credentialing-specialist",
    title: "Credentialing Specialist",
    department: "Credentialing",
    location: "Dallas, Texas",
    type: "Full-Time · Hybrid",
    summary:
      "Manage payer and facility credentialing applications from submission through approval for a portfolio of provider clients.",
    responsibilities: [
      "Prepare and submit payer and facility credentialing applications",
      "Maintain CAQH profiles and provider data accuracy",
      "Track application status and proactively follow up with payers",
      "Monitor renewal and expiration timelines",
    ],
    qualifications: [
      "2+ years of provider credentialing experience",
      "Working knowledge of CAQH, PECOS, and payer enrollment portals",
      "High attention to detail and documentation discipline",
    ],
  },
  {
    slug: "qa-analyst-coding-billing",
    title: "Quality Assurance Analyst — Coding & Billing",
    department: "Quality Assurance",
    location: "Karachi, Pakistan",
    type: "Full-Time",
    summary:
      "Conduct structured quality reviews across coding, billing, and claims workflows, reporting findings to supervisors and clients.",
    responsibilities: [
      "Perform sampled QA reviews across coding and billing output",
      "Document findings and route corrective feedback to specialists",
      "Support monthly client quality reporting",
      "Contribute to QA checklist and standard refinement",
    ],
    qualifications: [
      "Active coding or billing certification preferred",
      "Experience in a quality assurance or audit function",
      "Strong documentation and communication skills",
    ],
  },
  {
    slug: "client-success-manager-enterprise",
    title: "Client Success Manager — Enterprise Accounts",
    department: "Client Success",
    location: "Dallas, Texas",
    type: "Full-Time · Hybrid",
    summary:
      "Serve as the primary relationship owner for a portfolio of enterprise, multi-location healthcare clients.",
    responsibilities: [
      "Lead scheduled business reviews and performance reporting",
      "Coordinate cross-functional resolution of client escalations",
      "Support enterprise onboarding and implementation planning",
      "Identify opportunities to strengthen client operational performance",
    ],
    qualifications: [
      "4+ years in healthcare account management or RCM operations",
      "Comfort presenting performance data to executive stakeholders",
      "Strong cross-functional coordination skills",
    ],
  },
  {
    slug: "security-compliance-analyst",
    title: "Security & Compliance Analyst",
    department: "IT & Security",
    location: "Dallas, Texas",
    type: "Full-Time",
    summary:
      "Support the organization's information security and HIPAA compliance program, including access reviews and audit preparation.",
    responsibilities: [
      "Support access control reviews and audit log monitoring",
      "Assist with HIPAA and security policy documentation",
      "Coordinate employee security and compliance training",
      "Support incident response process execution",
    ],
    qualifications: [
      "Experience in healthcare IT security or compliance",
      "Familiarity with HIPAA Security Rule requirements",
      "Strong documentation and process discipline",
    ],
  },
  {
    slug: "billing-operations-supervisor",
    title: "Billing Operations Supervisor",
    department: "Operations & Leadership",
    location: "Austin, Texas",
    type: "Full-Time",
    summary:
      "Lead a team of billing specialists, overseeing daily workflow, quality, and performance against client service standards.",
    responsibilities: [
      "Supervise daily billing team workflow and productivity",
      "Review QA findings and coach specialists on performance",
      "Escalate systemic issues to account and compliance leadership",
      "Support client reporting and business review preparation",
    ],
    qualifications: [
      "3+ years of billing operations experience, including team leadership",
      "Strong working knowledge of end-to-end billing workflows",
      "Demonstrated coaching and performance management skills",
    ],
  },
];

export const jobDepartments = [
  "Medical Coding",
  "Medical Billing",
  "Accounts Receivable",
  "Credentialing",
  "Quality Assurance",
  "Client Success",
  "IT & Security",
  "Operations & Leadership",
] as const;
