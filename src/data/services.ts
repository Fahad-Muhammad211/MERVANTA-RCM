export type Service = {
  slug: string;
  name: string;
  category: "Core RCM" | "Front-End" | "Back-End" | "Compliance & Growth";
  icon: string;
  shortDescription: string;
  overview: string;
  process: { title: string; description: string }[];
  responsibilities: string[];
  benefits: string[];
  qualityControls: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "medical-billing",
    name: "Medical Billing",
    category: "Core RCM",
    icon: "FileText",
    shortDescription:
      "End-to-end billing operations that keep claims moving and revenue predictable.",
    overview:
      "Our medical billing operations manage the full claim lifecycle — from charge review through final resolution — for practices, groups, and health systems. Dedicated billing teams work within your existing EHR/PM environment under standardized, auditable workflows.",
    process: [
      { title: "Charge review", description: "Charges are reconciled against the clinical schedule and documentation." },
      { title: "Claim preparation", description: "Claims are built, scrubbed, and validated against payer edits." },
      { title: "Submission", description: "Clean claims are submitted electronically through clearinghouse channels." },
      { title: "Resolution tracking", description: "Every claim is tracked to final adjudication, denial, or appeal." },
    ],
    responsibilities: [
      "Daily charge and claim queue management",
      "Payer edit and rejection resolution",
      "Secondary and tertiary claim routing",
      "Billing exception escalation",
    ],
    benefits: [
      "Consistent, predictable claim throughput",
      "Reduced administrative burden on internal staff",
      "Standardized, auditable billing workflows",
    ],
    qualityControls: [
      "Pre-submission claim scrubbing",
      "Peer QA sampling on billed claims",
      "Monthly billing workflow audits",
    ],
    related: ["claims-management", "charge-entry", "payment-posting", "denial-management"],
  },
  {
    slug: "medical-coding",
    name: "Medical Coding",
    category: "Core RCM",
    icon: "Stethoscope",
    shortDescription:
      "Certified, specialty-aligned coding built for compliance and accuracy.",
    overview:
      "Certified coding professionals apply ICD-10-CM, CPT, and HCPCS coding across general and specialty service lines, following payer-specific and regulatory guidance to ensure claims accurately represent documented care.",
    process: [
      { title: "Documentation intake", description: "Clinical notes and encounter data are reviewed for completeness." },
      { title: "Code assignment", description: "Diagnosis and procedure codes are assigned per current coding guidelines." },
      { title: "Compliance check", description: "Coding is reviewed against NCCI edits, LCD/NCD policy, and payer rules." },
      { title: "Query resolution", description: "Documentation gaps are routed back to providers for clarification." },
    ],
    responsibilities: [
      "ICD-10-CM, CPT, and HCPCS code assignment",
      "Specialty-specific coding review",
      "Provider query and documentation feedback",
      "Coding compliance monitoring",
    ],
    benefits: [
      "Higher first-pass claim acceptance",
      "Reduced compliance and audit exposure",
      "Accurate representation of clinical complexity",
    ],
    qualityControls: [
      "Certified coder credential verification",
      "Randomized coding accuracy audits",
      "Ongoing payer policy update reviews",
    ],
    related: ["documentation-review", "compliance-support", "claims-management"],
  },
  {
    slug: "claims-management",
    name: "Claims Management",
    category: "Core RCM",
    icon: "FileCheck2",
    shortDescription: "Full lifecycle claim oversight from submission to final resolution.",
    overview:
      "Claims management provides structured oversight across the entire claim journey, combining automated edit checks with specialist review to maximize clean claim rates and reduce time to payment.",
    process: [
      { title: "Edit resolution", description: "Claims failing payer or clearinghouse edits are corrected and resubmitted." },
      { title: "Status monitoring", description: "Claim status is tracked across payer portals and clearinghouse feeds." },
      { title: "Exception handling", description: "Stuck or rejected claims are escalated for specialist resolution." },
      { title: "Lifecycle reporting", description: "Claim throughput and aging are reported at regular intervals." },
    ],
    responsibilities: [
      "Claim edit and rejection resolution",
      "Payer portal and clearinghouse monitoring",
      "Timely filing deadline tracking",
      "Claim status reporting",
    ],
    benefits: [
      "Improved clean claim and first-pass rates",
      "Reduced claim aging",
      "Fewer timely filing losses",
    ],
    qualityControls: [
      "Automated pre-submission edit checks",
      "Timely filing deadline monitoring",
      "Weekly claim aging review",
    ],
    related: ["medical-billing", "denial-management", "accounts-receivable-management"],
  },
  {
    slug: "charge-entry",
    name: "Charge Entry",
    category: "Front-End",
    icon: "ClipboardList",
    shortDescription: "Accurate, timely capture of billable services at the source.",
    overview:
      "Charge entry teams convert clinical encounter data into structured billable charges, applying fee schedules, modifiers, and units correctly before claims move downstream.",
    process: [
      { title: "Encounter reconciliation", description: "Scheduled encounters are matched against completed visits." },
      { title: "Charge coding", description: "Services are converted into charges with correct codes and units." },
      { title: "Modifier application", description: "Applicable modifiers are applied per payer and specialty rules." },
      { title: "Missing charge audit", description: "Schedules are reviewed for unbilled or missing encounters." },
    ],
    responsibilities: [
      "Daily charge entry across all locations",
      "Fee schedule and modifier accuracy",
      "Missing charge identification",
      "Charge lag monitoring",
    ],
    benefits: [
      "Reduced revenue leakage",
      "Faster time from service to claim",
      "Consistent charge accuracy across providers",
    ],
    qualityControls: [
      "Daily charge reconciliation against schedules",
      "Modifier and units accuracy review",
      "Charge lag threshold monitoring",
    ],
    related: ["medical-coding", "medical-billing", "reporting-analytics"],
  },
  {
    slug: "eligibility-verification",
    name: "Eligibility Verification",
    category: "Front-End",
    icon: "ShieldCheck",
    shortDescription: "Confirming coverage and benefits before care is delivered.",
    overview:
      "Eligibility and benefits verification teams confirm active coverage, plan details, and patient responsibility ahead of scheduled visits, reducing downstream denials and improving patient financial transparency.",
    process: [
      { title: "Schedule review", description: "Upcoming appointments are reviewed against payer requirements." },
      { title: "Real-time verification", description: "Coverage is confirmed through payer portals and electronic checks." },
      { title: "Benefit summary", description: "Plan benefits and cost-share details are documented." },
      { title: "Exception flagging", description: "Coverage issues are flagged to scheduling and patient access teams." },
    ],
    responsibilities: [
      "Real-time and batch eligibility checks",
      "Benefit and coordination of benefits review",
      "Patient responsibility estimation",
      "Coverage exception escalation",
    ],
    benefits: [
      "Fewer eligibility-related denials",
      "Improved patient financial transparency",
      "Reduced day-of-service billing surprises",
    ],
    qualityControls: [
      "Verification completed ahead of service date",
      "Dual-source coverage confirmation on high-value visits",
      "Exception escalation SLAs",
    ],
    related: ["prior-authorization", "patient-billing"],
  },
  {
    slug: "prior-authorization",
    name: "Prior Authorization",
    category: "Front-End",
    icon: "BadgeCheck",
    shortDescription: "Managing payer approval requirements before service delivery.",
    overview:
      "Prior authorization specialists track payer-specific requirements, prepare and submit clinical documentation, and manage the full approval workflow for procedures, imaging, and specialty services.",
    process: [
      { title: "Requirement research", description: "Payer-specific authorization rules are identified per CPT/service." },
      { title: "Documentation packaging", description: "Supporting clinical documentation is compiled and submitted." },
      { title: "Status follow-up", description: "Pending requests are tracked and followed up through resolution." },
      { title: "Approval confirmation", description: "Authorization numbers are logged and attached to scheduling records." },
    ],
    responsibilities: [
      "Authorization requirement tracking by payer and service",
      "Clinical documentation submission",
      "Peer-to-peer review coordination",
      "Authorization status monitoring",
    ],
    benefits: [
      "Reduced authorization-related denials",
      "Fewer delayed or cancelled procedures",
      "Improved scheduling reliability",
    ],
    qualityControls: [
      "Authorization request SLA monitoring",
      "Payer policy update tracking",
      "Pre-service authorization confirmation checks",
    ],
    related: ["eligibility-verification", "documentation-review"],
  },
  {
    slug: "payment-posting",
    name: "Payment Posting",
    category: "Back-End",
    icon: "Landmark",
    shortDescription: "Reconciled, accurate posting of every remittance received.",
    overview:
      "Payment posting teams apply electronic and manual remittances with full reconciliation against expected reimbursement, identifying variances and underpayments as they occur.",
    process: [
      { title: "Remittance intake", description: "ERA and paper EOB files are ingested and matched to claims." },
      { title: "Posting & adjustment", description: "Payments and contractual adjustments are applied to accounts." },
      { title: "Variance review", description: "Underpayments and denials are flagged for follow-up." },
      { title: "Deposit reconciliation", description: "Posted totals are reconciled against bank deposits daily." },
    ],
    responsibilities: [
      "ERA/EOB payment posting",
      "Contractual adjustment application",
      "Underpayment and variance identification",
      "Daily deposit reconciliation",
    ],
    benefits: [
      "Accurate, real-time account balances",
      "Early underpayment detection",
      "Reliable financial close cycles",
    ],
    qualityControls: [
      "Daily posting-to-deposit reconciliation",
      "Variance threshold flagging",
      "Monthly posting accuracy audits",
    ],
    related: ["denial-management", "accounts-receivable-management", "reporting-analytics"],
  },
  {
    slug: "denial-management",
    name: "Denial Management",
    category: "Back-End",
    icon: "AlertTriangle",
    shortDescription: "Structured denial resolution with upstream root-cause correction.",
    overview:
      "Denial management combines categorization, appeals, and root-cause analysis to recover correctable revenue and reduce recurring denial patterns through feedback into upstream workflows.",
    process: [
      { title: "Categorization", description: "Denials are coded by reason, payer, and root cause." },
      { title: "Appeal preparation", description: "Appeal packages are prepared with supporting documentation." },
      { title: "Submission & tracking", description: "Appeals are submitted and tracked through resolution." },
      { title: "Root-cause feedback", description: "Recurring patterns are routed back to front-end and coding teams." },
    ],
    responsibilities: [
      "Denial categorization and trend analysis",
      "Appeal letter drafting and submission",
      "Payer escalation for unresolved denials",
      "Root-cause feedback loops",
    ],
    benefits: [
      "Recovered revenue from correctable denials",
      "Declining denial rates over time",
      "Stronger, better-documented payer relationships",
    ],
    qualityControls: [
      "Denial reason code standardization",
      "Appeal success rate tracking",
      "Monthly denial trend review with clients",
    ],
    related: ["claims-management", "accounts-receivable-management", "medical-coding"],
  },
  {
    slug: "accounts-receivable-management",
    name: "Accounts Receivable Management",
    category: "Back-End",
    icon: "TrendingUp",
    shortDescription: "Proactive follow-up that keeps aging balances moving.",
    overview:
      "A/R teams work aged claims and balances by payer and aging bucket, applying structured follow-up cadences designed to accelerate resolution and reduce aged inventory.",
    process: [
      { title: "Aging segmentation", description: "Open balances are segmented by age, payer, and value." },
      { title: "Prioritized follow-up", description: "High-value and time-sensitive balances are worked first." },
      { title: "Payer engagement", description: "Status is confirmed directly with payers via portal or phone." },
      { title: "Escalation", description: "Stalled balances are escalated for supervisory or client review." },
    ],
    responsibilities: [
      "Aged claim follow-up across all payers",
      "Credit balance identification and resolution",
      "Aged inventory reduction planning",
      "A/R aging reporting",
    ],
    benefits: [
      "Reduced days in A/R",
      "Lower aged and at-risk balances",
      "Improved cash flow predictability",
    ],
    qualityControls: [
      "Aging bucket SLA tracking",
      "Monthly A/R inventory review",
      "Credit balance audit cycles",
    ],
    related: ["denial-management", "payment-posting", "reporting-analytics"],
  },
  {
    slug: "patient-billing",
    name: "Patient Billing",
    category: "Back-End",
    icon: "Users",
    shortDescription: "A compliant, transparent, and respectful patient financial experience.",
    overview:
      "Patient billing and statement management provides clear, accurate patient invoicing paired with flexible payment options and compliant collections communication.",
    process: [
      { title: "Statement generation", description: "Patient statements are generated on a consistent billing cycle." },
      { title: "Payment facilitation", description: "Multiple payment channels and plans are made available." },
      { title: "Inquiry handling", description: "Patient billing questions are resolved through dedicated support." },
      { title: "Compliant follow-up", description: "Outstanding balances are followed up per regulatory guidelines." },
    ],
    responsibilities: [
      "Patient statement cycles and formatting",
      "Payment plan setup and monitoring",
      "Patient billing inquiry support",
      "Compliant collections communication",
    ],
    benefits: [
      "Improved patient collection rates",
      "Stronger patient satisfaction outcomes",
      "Reduced billing-related complaints",
    ],
    qualityControls: [
      "Statement accuracy pre-send review",
      "Collections communication compliance checks",
      "Patient inquiry response SLAs",
    ],
    related: ["accounts-receivable-management", "reporting-analytics"],
  },
  {
    slug: "credentialing",
    name: "Credentialing",
    category: "Compliance & Growth",
    icon: "IdCard",
    shortDescription: "Provider credentialing managed with precision and payer expertise.",
    overview:
      "Credentialing specialists manage the full provider credentialing lifecycle across payers, hospitals, and facilities, maintaining accurate, current provider data and tracking renewal timelines.",
    process: [
      { title: "Data collection", description: "Provider licensure, education, and work history are gathered and verified." },
      { title: "Application submission", description: "Payer and facility credentialing applications are prepared and filed." },
      { title: "Follow-up tracking", description: "Application status is monitored through to approval." },
      { title: "Renewal management", description: "Expirations and re-credentialing cycles are tracked proactively." },
    ],
    responsibilities: [
      "Payer and facility credentialing applications",
      "Primary source verification coordination",
      "CAQH profile maintenance",
      "Renewal and expiration tracking",
    ],
    benefits: [
      "Reduced credentialing turnaround delays",
      "Fewer lapses in billing privileges",
      "Accurate, audit-ready provider files",
    ],
    qualityControls: [
      "Application completeness review",
      "Credentialing status audit cycles",
      "Expiration alert monitoring",
    ],
    related: ["provider-enrollment", "compliance-support"],
  },
  {
    slug: "provider-enrollment",
    name: "Provider Enrollment",
    category: "Compliance & Growth",
    icon: "UserPlus",
    shortDescription: "Payer enrollment managed to protect billing continuity.",
    overview:
      "Provider enrollment teams manage payer enrollment applications, revalidations, and demographic updates required to maintain uninterrupted billing privileges across all contracted payers.",
    process: [
      { title: "Enrollment application", description: "New provider payer enrollment applications are prepared and submitted." },
      { title: "Payer follow-up", description: "Application status is actively tracked with each payer." },
      { title: "Revalidation management", description: "Periodic payer revalidation requirements are monitored and filed." },
      { title: "Demographic updates", description: "Practice and provider data changes are submitted to all payers." },
    ],
    responsibilities: [
      "Medicare, Medicaid, and commercial payer enrollment",
      "Revalidation and demographic update filings",
      "Enrollment status tracking",
      "Effective date confirmation",
    ],
    benefits: [
      "Uninterrupted billing privileges",
      "Reduced new-provider onboarding delays",
      "Accurate payer-facing provider records",
    ],
    qualityControls: [
      "Enrollment application accuracy review",
      "Revalidation deadline monitoring",
      "Effective date verification",
    ],
    related: ["credentialing", "compliance-support"],
  },
  {
    slug: "documentation-review",
    name: "Documentation Review",
    category: "Compliance & Growth",
    icon: "FileSearch",
    shortDescription: "Clinical documentation reviewed to support accurate coding and compliance.",
    overview:
      "Documentation review teams evaluate clinical notes for completeness, specificity, and compliance support, identifying gaps before they affect coding accuracy or claim integrity.",
    process: [
      { title: "Documentation audit", description: "Clinical notes are reviewed against coding and payer requirements." },
      { title: "Gap identification", description: "Missing or ambiguous documentation elements are flagged." },
      { title: "Provider feedback", description: "Findings are communicated through structured provider queries." },
      { title: "Trend reporting", description: "Recurring documentation gaps are reported to leadership." },
    ],
    responsibilities: [
      "Clinical documentation completeness review",
      "Specificity and compliance gap analysis",
      "Provider query management",
      "Documentation trend reporting",
    ],
    benefits: [
      "Reduced coding-related denials",
      "Stronger audit and compliance posture",
      "Improved documentation habits over time",
    ],
    qualityControls: [
      "Documentation review sampling",
      "Provider query response tracking",
      "Compliance trend reporting",
    ],
    related: ["medical-coding", "compliance-support"],
  },
  {
    slug: "compliance-support",
    name: "Compliance Support",
    category: "Compliance & Growth",
    icon: "ShieldHalf",
    shortDescription: "Regulatory and payer compliance built into every workflow.",
    overview:
      "Compliance support functions monitor regulatory change, payer policy updates, and internal audit programs, keeping billing and coding operations aligned with current requirements.",
    process: [
      { title: "Policy monitoring", description: "Payer and regulatory policy changes are continuously tracked." },
      { title: "Internal auditing", description: "Coding, billing, and documentation are periodically audited." },
      { title: "Corrective action", description: "Findings are addressed through targeted process correction." },
      { title: "Compliance reporting", description: "Compliance status is reported to clients and leadership." },
    ],
    responsibilities: [
      "Regulatory and payer policy monitoring",
      "Internal compliance auditing",
      "Corrective action planning",
      "Compliance reporting and documentation",
    ],
    benefits: [
      "Reduced audit and regulatory exposure",
      "Consistent adherence to payer requirements",
      "Documented, defensible compliance program",
    ],
    qualityControls: [
      "Scheduled internal compliance audits",
      "Policy change tracking log",
      "Corrective action verification",
    ],
    related: ["medical-coding", "documentation-review"],
  },
  {
    slug: "reporting-analytics",
    name: "Reporting & Analytics",
    category: "Compliance & Growth",
    icon: "BarChart3",
    shortDescription: "Executive-grade visibility across the full revenue cycle.",
    overview:
      "Reporting and analytics consolidate performance across billing, coding, claims, and A/R into provider-level, location-level, and payer-level dashboards built for operational and executive decision-making.",
    process: [
      { title: "Data consolidation", description: "Performance data is aggregated across systems and workflows." },
      { title: "Dashboard configuration", description: "Reporting is structured by provider, location, and payer." },
      { title: "Trend analysis", description: "Performance trends are analyzed against benchmarks and targets." },
      { title: "Executive review", description: "Findings are reviewed in scheduled client business reviews." },
    ],
    responsibilities: [
      "Provider, location, and payer-level reporting",
      "Trend and variance analysis",
      "Scheduled business review preparation",
      "Custom reporting configuration",
    ],
    benefits: [
      "Full transparency into revenue cycle health",
      "Data-driven operational decisions",
      "Early identification of emerging issues",
    ],
    qualityControls: [
      "Report data accuracy validation",
      "Scheduled reporting cadence adherence",
      "Client business review documentation",
    ],
    related: ["performance", "denial-management", "accounts-receivable-management"],
  },
  {
    slug: "practice-support",
    name: "Practice Support",
    category: "Compliance & Growth",
    icon: "Building2",
    shortDescription: "Operational support that extends beyond billing.",
    overview:
      "Practice support services provide administrative and operational assistance to healthcare organizations, from workflow design to payer contract review, freeing clinical and administrative leadership to focus on patient care.",
    process: [
      { title: "Operational assessment", description: "Current workflows and pain points are evaluated." },
      { title: "Workflow design", description: "Standardized operational workflows are implemented." },
      { title: "Ongoing support", description: "Dedicated support resources assist with day-to-day operations." },
      { title: "Performance review", description: "Operational performance is reviewed on a recurring basis." },
    ],
    responsibilities: [
      "Operational workflow design and support",
      "Payer contract and fee schedule review assistance",
      "Administrative process optimization",
      "Practice performance benchmarking",
    ],
    benefits: [
      "Reduced administrative burden",
      "Standardized, scalable operations",
      "Stronger operational performance visibility",
    ],
    qualityControls: [
      "Workflow documentation standards",
      "Periodic operational review",
      "Client satisfaction check-ins",
    ],
    related: ["enterprise-solutions", "virtual-medical-staffing"],
  },
  {
    slug: "virtual-medical-staffing",
    name: "Virtual Medical Staffing",
    category: "Compliance & Growth",
    icon: "Headset",
    shortDescription: "Dedicated remote staffing for administrative and clinical support roles.",
    overview:
      "Virtual medical staffing places trained, dedicated remote professionals into administrative, billing, and front-office support roles, integrated directly into client workflows and systems.",
    process: [
      { title: "Role scoping", description: "Staffing needs and role requirements are defined with the client." },
      { title: "Candidate placement", description: "Trained staff are matched and onboarded to the specific role." },
      { title: "Integration", description: "Staff are integrated into client systems, workflows, and communication channels." },
      { title: "Performance management", description: "Ongoing supervision and performance review are maintained." },
    ],
    responsibilities: [
      "Dedicated remote staff placement",
      "Role-specific training and onboarding",
      "Workflow and systems integration",
      "Ongoing performance oversight",
    ],
    benefits: [
      "Flexible, scalable staffing capacity",
      "Reduced hiring and training overhead",
      "Consistent role coverage and continuity",
    ],
    qualityControls: [
      "Staff performance monitoring",
      "Role-specific quality checklists",
      "Regular client feedback cycles",
    ],
    related: ["practice-support", "credentialing"],
  },
];

export const serviceCategories = [
  "Core RCM",
  "Front-End",
  "Back-End",
  "Compliance & Growth",
] as const;
