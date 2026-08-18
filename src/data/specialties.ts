export type Specialty = {
  slug: string;
  name: string;
  icon: string;
  group: "Physician Specialties" | "Facility & Ancillary" | "Behavioral & Access Care";
  billingChallenges: string[];
  capabilities: string[];
};

export const specialties: Specialty[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: "HeartPulse",
    group: "Physician Specialties",
    billingChallenges: [
      "Complex procedural and device coding",
      "Frequent prior authorization for imaging and interventions",
    ],
    capabilities: [
      "Interventional and diagnostic coding expertise",
      "Device and implant charge capture accuracy",
    ],
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    icon: "Bone",
    group: "Physician Specialties",
    billingChallenges: [
      "Global surgical period management",
      "Implant and DME coding complexity",
    ],
    capabilities: [
      "Surgical package and modifier expertise",
      "Multi-provider case coordination",
    ],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    icon: "Scan",
    group: "Physician Specialties",
    billingChallenges: [
      "High-volume procedural coding",
      "Medically necessary vs. cosmetic service distinction",
    ],
    capabilities: [
      "High-throughput charge entry workflows",
      "Payer-specific medical necessity documentation support",
    ],
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    icon: "Activity",
    group: "Physician Specialties",
    billingChallenges: [
      "Screening vs. diagnostic procedure classification",
      "Bundled endoscopic procedure coding",
    ],
    capabilities: [
      "Endoscopy and procedure coding accuracy",
      "Preventive service benefit navigation",
    ],
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: "Brain",
    group: "Physician Specialties",
    billingChallenges: [
      "Diagnostic testing bundling rules",
      "Extended E/M documentation requirements",
    ],
    capabilities: [
      "Neurodiagnostic coding expertise",
      "Complex E/M level support",
    ],
  },
  {
    slug: "oncology",
    name: "Oncology",
    icon: "Ribbon",
    group: "Physician Specialties",
    billingChallenges: [
      "Drug and infusion charge accuracy",
      "Prior authorization for high-cost therapies",
    ],
    capabilities: [
      "Infusion and chemotherapy coding precision",
      "High-dollar authorization tracking",
    ],
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    icon: "Baby",
    group: "Physician Specialties",
    billingChallenges: [
      "Vaccine and immunization coding volume",
      "Age-specific coverage and benefit variation",
    ],
    capabilities: [
      "Well-child and immunization billing accuracy",
      "Payer-specific pediatric benefit expertise",
    ],
  },
  {
    slug: "psychiatry",
    name: "Psychiatry",
    icon: "BrainCircuit",
    group: "Physician Specialties",
    billingChallenges: [
      "Time-based coding accuracy",
      "Behavioral health parity and benefit variation",
    ],
    capabilities: [
      "Time-based and add-on code precision",
      "Behavioral health benefit navigation",
    ],
  },
  {
    slug: "radiology",
    name: "Radiology",
    icon: "ScanLine",
    group: "Physician Specialties",
    billingChallenges: [
      "Professional vs. technical component splitting",
      "High authorization volume for advanced imaging",
    ],
    capabilities: [
      "Component and modality-specific coding",
      "High-volume authorization workflows",
    ],
  },
  {
    slug: "urology",
    name: "Urology",
    icon: "TestTube",
    group: "Physician Specialties",
    billingChallenges: [
      "Procedure and in-office lab bundling",
      "Device and implant billing accuracy",
    ],
    capabilities: [
      "Procedural and ancillary coding expertise",
      "Device charge reconciliation",
    ],
  },
  {
    slug: "obgyn",
    name: "OB/GYN",
    icon: "Baby",
    group: "Physician Specialties",
    billingChallenges: [
      "Global maternity package billing",
      "Preventive vs. diagnostic visit classification",
    ],
    capabilities: [
      "Global maternity billing management",
      "Preventive service benefit optimization",
    ],
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    icon: "Eye",
    group: "Physician Specialties",
    billingChallenges: [
      "Refractive vs. medical service distinction",
      "High-volume ASC procedure coding",
    ],
    capabilities: [
      "Medical vs. refractive billing separation",
      "Surgical and diagnostic coding accuracy",
    ],
  },
  {
    slug: "pulmonology",
    name: "Pulmonology",
    icon: "Wind",
    group: "Physician Specialties",
    billingChallenges: [
      "Diagnostic testing bundling",
      "Chronic care management coding",
    ],
    capabilities: [
      "Pulmonary function testing coding",
      "Chronic care program billing support",
    ],
  },
  {
    slug: "nephrology",
    name: "Nephrology",
    icon: "Droplets",
    group: "Physician Specialties",
    billingChallenges: [
      "Dialysis and ESRD billing complexity",
      "Monthly capitated payment methodology",
    ],
    capabilities: [
      "ESRD and dialysis billing expertise",
      "Monthly capitation reconciliation",
    ],
  },
  {
    slug: "endocrinology",
    name: "Endocrinology",
    icon: "FlaskConical",
    group: "Physician Specialties",
    billingChallenges: [
      "Chronic disease management coding",
      "Lab and diagnostic bundling rules",
    ],
    capabilities: [
      "Chronic care coding accuracy",
      "Diagnostic panel billing precision",
    ],
  },
  {
    slug: "rheumatology",
    name: "Rheumatology",
    icon: "Bone",
    group: "Physician Specialties",
    billingChallenges: [
      "Infusion and biologic drug billing",
      "Prior authorization for specialty medications",
    ],
    capabilities: [
      "Infusion and biologic coding expertise",
      "Specialty pharmacy authorization tracking",
    ],
  },
  {
    slug: "physical-therapy",
    name: "Physical Therapy",
    icon: "PersonStanding",
    group: "Physician Specialties",
    billingChallenges: [
      "Time-based unit calculation",
      "Therapy cap and benefit limit tracking",
    ],
    capabilities: [
      "Unit-based billing accuracy",
      "Therapy benefit and cap monitoring",
    ],
  },
  {
    slug: "anesthesiology",
    name: "Anesthesiology",
    icon: "Syringe",
    group: "Physician Specialties",
    billingChallenges: [
      "Time-unit and base-unit calculation",
      "Medical direction and concurrency rules",
    ],
    capabilities: [
      "Anesthesia time-unit billing precision",
      "Medical direction compliance coding",
    ],
  },
  {
    slug: "emergency-medicine",
    name: "Emergency Medicine",
    icon: "Siren",
    group: "Physician Specialties",
    billingChallenges: [
      "High-volume, high-acuity E/M coding",
      "Facility and professional fee coordination",
    ],
    capabilities: [
      "High-volume ED coding throughput",
      "Acuity-based E/M level accuracy",
    ],
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    icon: "Stethoscope",
    group: "Physician Specialties",
    billingChallenges: [
      "Chronic care and E/M documentation depth",
      "Preventive care benefit coordination",
    ],
    capabilities: [
      "Complex E/M coding accuracy",
      "Chronic and preventive care billing",
    ],
  },
  {
    slug: "family-medicine",
    name: "Family Medicine",
    icon: "Users",
    group: "Physician Specialties",
    billingChallenges: [
      "High-volume, multi-service visits",
      "Broad payer and benefit variation",
    ],
    capabilities: [
      "High-throughput billing workflows",
      "Multi-payer benefit navigation",
    ],
  },
  {
    slug: "behavioral-health",
    name: "Behavioral Health",
    icon: "HeartHandshake",
    group: "Behavioral & Access Care",
    billingChallenges: [
      "Parity law and benefit complexity",
      "Session-based and time-based coding",
    ],
    capabilities: [
      "Behavioral health parity navigation",
      "Session-based billing accuracy",
    ],
  },
  {
    slug: "urgent-care",
    name: "Urgent Care",
    icon: "Clock",
    group: "Behavioral & Access Care",
    billingChallenges: [
      "High-volume, walk-in visit billing",
      "Facility fee and level-of-service accuracy",
    ],
    capabilities: [
      "High-throughput urgent care coding",
      "Level-of-service documentation support",
    ],
  },
  {
    slug: "ambulatory-surgery-centers",
    name: "Ambulatory Surgery Centers",
    icon: "Building2",
    group: "Facility & Ancillary",
    billingChallenges: [
      "Facility fee and implant billing complexity",
      "Multi-payer ASC fee schedule variation",
    ],
    capabilities: [
      "ASC facility billing expertise",
      "Implant and supply cost reconciliation",
    ],
  },
  {
    slug: "hospitals",
    name: "Hospitals",
    icon: "Hospital",
    group: "Facility & Ancillary",
    billingChallenges: [
      "High-volume, multi-department billing",
      "DRG and facility coding complexity",
    ],
    capabilities: [
      "Enterprise-scale hospital billing operations",
      "Multi-department revenue coordination",
    ],
  },
  {
    slug: "laboratories",
    name: "Laboratories",
    icon: "TestTubes",
    group: "Facility & Ancillary",
    billingChallenges: [
      "High-volume, low-dollar claim throughput",
      "Panel and bundling rule compliance",
    ],
    capabilities: [
      "High-volume lab claim processing",
      "Panel bundling compliance support",
    ],
  },
  {
    slug: "diagnostic-centers",
    name: "Diagnostic Centers",
    icon: "ScanEye",
    group: "Facility & Ancillary",
    billingChallenges: [
      "Modality-specific coding requirements",
      "Prior authorization for advanced imaging",
    ],
    capabilities: [
      "Modality-specific coding expertise",
      "Imaging authorization management",
    ],
  },
  {
    slug: "telehealth",
    name: "Telehealth",
    icon: "Video",
    group: "Behavioral & Access Care",
    billingChallenges: [
      "Evolving telehealth coverage policy",
      "Originating and distant site billing rules",
    ],
    capabilities: [
      "Telehealth policy monitoring",
      "Virtual visit billing compliance",
    ],
  },
];

export const specialtyGroups = [
  "Physician Specialties",
  "Facility & Ancillary",
  "Behavioral & Access Care",
] as const;
