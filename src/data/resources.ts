export type DenialCode = {
  code: string;
  group: string;
  description: string;
  commonCause: string;
  recommendedAction: string;
};

// Common, industry-standard CARC/RARC-style claim adjustment reason codes.
export const denialCodes: DenialCode[] = [
  {
    code: "CO-16",
    group: "Claim/Line Denial",
    description: "Claim/service lacks information needed for adjudication.",
    commonCause: "Missing or invalid data element on the claim.",
    recommendedAction: "Review remark codes for the specific missing element and resubmit with corrected data.",
  },
  {
    code: "CO-45",
    group: "Contractual Adjustment",
    description: "Charge exceeds fee schedule/maximum allowable amount.",
    commonCause: "Billed amount above the contracted allowable.",
    recommendedAction: "Verify fee schedule alignment; typically not appealable if contract terms are current.",
  },
  {
    code: "CO-97",
    group: "Bundling",
    description: "Benefit for this service is included in the payment for another service already adjudicated.",
    commonCause: "Service considered bundled under NCCI or payer-specific edits.",
    recommendedAction: "Confirm modifier appropriateness; appeal with documentation if unbundling is clinically supported.",
  },
  {
    code: "CO-50",
    group: "Medical Necessity",
    description: "Non-covered service because it is not deemed a medical necessity.",
    commonCause: "Diagnosis does not support medical necessity per payer policy (LCD/NCD).",
    recommendedAction: "Review policy criteria; submit supporting documentation or corrected diagnosis if applicable.",
  },
  {
    code: "CO-29",
    group: "Timely Filing",
    description: "The time limit for filing has expired.",
    commonCause: "Claim submitted after the payer's timely filing deadline.",
    recommendedAction: "Verify submission date evidence; appeal only if a documented exception applies.",
  },
  {
    code: "PR-1",
    group: "Patient Responsibility",
    description: "Deductible amount.",
    commonCause: "Patient has not met annual deductible.",
    recommendedAction: "Route balance to patient billing; confirm deductible accumulator accuracy if disputed.",
  },
  {
    code: "PR-2",
    group: "Patient Responsibility",
    description: "Coinsurance amount.",
    commonCause: "Standard plan cost-share applied post-adjudication.",
    recommendedAction: "Route to patient billing per standard statement cycle.",
  },
  {
    code: "CO-18",
    group: "Duplicate",
    description: "Exact duplicate claim/service.",
    commonCause: "Claim previously submitted and adjudicated.",
    recommendedAction: "Confirm original claim status before resubmitting or appealing.",
  },
  {
    code: "CO-109",
    group: "Coordination of Benefits",
    description: "Claim/service not covered by this payer/contractor.",
    commonCause: "Incorrect payer sequencing or COB information.",
    recommendedAction: "Verify primary/secondary payer order and resubmit to correct payer.",
  },
  {
    code: "CO-197",
    group: "Authorization",
    description: "Precertification/authorization/notification absent.",
    commonCause: "Required prior authorization was not obtained or documented.",
    recommendedAction: "Confirm authorization was secured; appeal with authorization reference if available.",
  },
];

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  { term: "A/R Days", definition: "The average number of days it takes an organization to collect payment after a claim is submitted." },
  { term: "Clean Claim", definition: "A claim submitted without errors that processes successfully through payer adjudication on the first attempt." },
  { term: "CARC", definition: "Claim Adjustment Reason Code — a standardized code explaining why a claim or service line was adjusted or denied." },
  { term: "RARC", definition: "Remittance Advice Remark Code — supplemental codes providing additional explanation alongside a CARC." },
  { term: "Clearinghouse", definition: "An intermediary that transmits claims electronically between providers and payers, validating formatting before submission." },
  { term: "Coordination of Benefits (COB)", definition: "The process of determining the order in which multiple insurance plans pay for a claim." },
  { term: "Credentialing", definition: "The process of verifying a provider's qualifications and enrolling them with payers to bill for services." },
  { term: "Denial Rate", definition: "The percentage of submitted claims that are denied by payers on first submission." },
  { term: "EOB", definition: "Explanation of Benefits — a statement from a payer detailing how a claim was processed." },
  { term: "ERA", definition: "Electronic Remittance Advice — the electronic version of payment and adjustment details from a payer." },
  { term: "Global Period", definition: "The defined timeframe following a surgical procedure during which related follow-up care is bundled into the original payment." },
  { term: "Net Collection Rate", definition: "The percentage of collectible revenue actually collected, after contractual adjustments." },
  { term: "NCCI Edits", definition: "National Correct Coding Initiative edits that prevent improper payment for code combinations that should not be billed together." },
  { term: "Prior Authorization", definition: "Payer approval required before certain services are rendered in order for the claim to be reimbursed." },
  { term: "Revenue Cycle Management (RCM)", definition: "The end-to-end financial process that healthcare organizations use to track revenue from patient registration to final payment." },
  { term: "Timely Filing Limit", definition: "The maximum number of days after service in which a claim must be submitted to a payer to be considered for payment." },
];

export const billingChecklist = [
  "Verify patient demographic and insurance data at intake",
  "Confirm eligibility and benefits prior to date of service",
  "Obtain and document required prior authorizations",
  "Reconcile charges against the clinical schedule daily",
  "Scrub claims against payer-specific edits before submission",
  "Submit claims within payer timely filing windows",
  "Post payments and reconcile against deposits daily",
  "Review denials within 48 hours of receipt",
  "Follow up on aged claims per defined aging cadence",
  "Report key metrics to leadership on a consistent schedule",
];

export const credentialingChecklist = [
  "Collect current licensure, DEA, and board certification documents",
  "Complete or update CAQH profile",
  "Verify work history and malpractice claims history",
  "Submit payer-specific enrollment applications",
  "Track application status with each payer",
  "Confirm effective dates before scheduling billable services",
  "Calendar renewal and revalidation deadlines",
  "Update payer records upon any demographic change",
];
