export type CaseStudy = {
  slug: string;
  clientProfile: string;
  organizationSize: string;
  specialty: string;
  challenge: string;
  currentSituation: string;
  approach: string[];
  implementation: string;
  processImprovements: string[];
  results: string[];
  testimonial: { quote: string; attribution: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-location-orthopedic-group",
    clientProfile: "Multi-location orthopedic group",
    organizationSize: "12 providers · 5 locations",
    specialty: "Orthopedics",
    challenge:
      "The organization operated with fragmented billing processes across locations, inconsistent charge capture practices, and limited visibility into provider-level performance.",
    currentSituation:
      "Prior to engagement, billing was managed independently at each location with no centralized reporting, resulting in inconsistent denial handling and delayed leadership visibility into revenue performance.",
    approach: [
      "Centralized billing and coding operations under a single standardized workflow",
      "Implemented location-level and provider-level reporting dashboards",
      "Established a dedicated account team with orthopedic coding expertise",
    ],
    implementation:
      "Implementation was phased by location over a structured onboarding period, with parallel processing to validate accuracy before full transition.",
    processImprovements: [
      "Standardized charge entry and coding workflows across all locations",
      "Introduced weekly denial trend reviews with clinical leadership",
      "Centralized A/R follow-up under a dedicated specialty team",
    ],
    results: [
      "Directional improvement in denial resolution turnaround",
      "Increased leadership visibility through consolidated reporting",
      "Standardized workflows across all locations",
    ],
    testimonial: {
      quote:
        "We went from five different billing processes to one. For the first time, I can pull up performance for any location and trust the number I'm looking at.",
      attribution: "Practice Administrator, Multi-Location Orthopedic Group",
    },
  },
  {
    slug: "behavioral-health-network",
    clientProfile: "Regional behavioral health network",
    organizationSize: "40+ clinicians · outpatient network",
    specialty: "Behavioral Health",
    challenge:
      "Complex payer parity requirements and high claim volume created backlog in claims processing and inconsistent authorization tracking.",
    currentSituation:
      "The network's internal billing team faced capacity constraints during a period of rapid clinician growth, resulting in aging authorization requests and claim backlogs.",
    approach: [
      "Deployed a dedicated behavioral health billing and authorization team",
      "Implemented structured authorization tracking workflows",
      "Established denial root-cause reporting specific to parity-related denials",
    ],
    implementation:
      "Transition was structured around a defined cutover date with a two-week parallel support period for the internal team.",
    processImprovements: [
      "Authorization tracking centralized into a single workflow system",
      "Denial categorization refined to isolate parity-specific patterns",
      "Claims backlog addressed through a dedicated recovery sprint",
    ],
    results: [
      "Backlog reduction achieved within the defined recovery period",
      "Improved authorization turnaround consistency",
      "Clearer visibility into parity-related denial patterns",
    ],
    testimonial: {
      quote:
        "The dedicated authorization team gave our clinicians their time back. We stopped losing sessions to backlog within the first month.",
      attribution: "Clinical Operations Director, Regional Behavioral Health Network",
    },
  },
  {
    slug: "enterprise-multi-specialty-group",
    clientProfile: "Enterprise multi-specialty physician group",
    organizationSize: "85+ providers · 14 locations · multiple TINs",
    specialty: "Multi-Specialty",
    challenge:
      "Following a series of practice acquisitions, the organization managed multiple billing systems, disparate reporting formats, and inconsistent coding standards across specialties.",
    currentSituation:
      "Post-acquisition integration had stalled, with each legacy practice continuing to operate under its original billing processes and reporting structure.",
    approach: [
      "Designed a multi-TIN enterprise RCM architecture with centralized oversight",
      "Standardized coding and billing workflows across all specialties",
      "Built unified enterprise reporting spanning every location and provider",
    ],
    implementation:
      "Implementation was sequenced by specialty group, prioritizing the highest-volume locations first, with a dedicated enterprise implementation team throughout.",
    processImprovements: [
      "Unified billing workflow standard applied across all acquired practices",
      "Enterprise reporting consolidated into a single executive dashboard",
      "Specialty-specific coding review introduced for each service line",
    ],
    results: [
      "Consolidated reporting delivered enterprise-wide visibility for the first time",
      "Standardized workflows reduced variability across acquired practices",
      "Dedicated enterprise account structure established for ongoing governance",
    ],
    testimonial: {
      quote:
        "Mervanta gave us one enterprise dashboard after years of stitching together reports from acquired practices. Our board finally sees one number, not fourteen.",
      attribution: "Chief Financial Officer, Enterprise Multi-Specialty Group",
    },
  },
];
