export type NewsItem = {
  slug: string;
  type: "Press Release" | "Announcement" | "Event" | "Media Coverage";
  title: string;
  date: string;
  summary: string;
  body: string[];
};

export const newsItems: NewsItem[] = [
  {
    slug: "global-delivery-expansion",
    type: "Announcement",
    title: "Mervanta RCM Expands Global Delivery Operations in Karachi",
    date: "June 4, 2026",
    summary:
      "Mervanta RCM has expanded its global delivery center in Karachi, Pakistan, adding coding and quality assurance capacity to support growing client demand.",
    body: [
      "Mervanta RCM today announced the expansion of its global delivery center in Karachi, Pakistan, adding certified coding and quality assurance staff to support a growing base of enterprise and multi-location clients.",
      "The expansion reflects continued demand for standardized, scalable revenue cycle operations among healthcare organizations navigating growth through acquisition and consolidation.",
      "The Karachi center now supports medical coding, billing, accounts receivable, credentialing, and quality assurance functions across multiple specialties.",
    ],
  },
  {
    slug: "enterprise-reporting-suite-launch",
    type: "Press Release",
    title: "Mervanta RCM Launches Enhanced Enterprise Reporting Suite",
    date: "March 18, 2026",
    summary:
      "A new enterprise reporting suite gives multi-location health systems consolidated visibility into provider, location, and payer performance.",
    body: [
      "Mervanta RCM announced the launch of an enhanced enterprise reporting suite, giving multi-location and multi-TIN healthcare organizations a single, consolidated view of revenue cycle performance.",
      "The suite consolidates provider-level, location-level, and payer-level reporting into a unified dashboard, replacing the fragmented reporting that many enterprise clients previously stitched together manually.",
      "The reporting suite is available to all enterprise clients through the Mervanta RCM client portal.",
    ],
  },
  {
    slug: "hfma-conference-participation",
    type: "Event",
    title: "Mervanta RCM to Participate in Regional Healthcare Finance Conference",
    date: "September 22, 2026",
    summary:
      "Mervanta RCM leadership will join a panel discussion on enterprise revenue cycle governance at an upcoming regional healthcare finance conference.",
    body: [
      "Members of the Mervanta RCM leadership team will participate in a panel discussion on building enterprise revenue cycle governance across multi-location healthcare organizations.",
      "The session will cover centralized reporting design, provider-level accountability, and lessons learned from supporting organizations through practice consolidation.",
      "Details on the conference location and session schedule will be shared as they are confirmed.",
    ],
  },
  {
    slug: "healthcare-finance-today-feature",
    type: "Media Coverage",
    title: "Healthcare Finance Today Features Mervanta RCM's Enterprise Approach",
    date: "January 27, 2026",
    summary:
      "An industry publication profiled Mervanta RCM's approach to centralizing revenue cycle operations for multi-location healthcare groups.",
    body: [
      "Healthcare Finance Today featured Mervanta RCM in a profile on how healthcare organizations are centralizing revenue cycle operations following growth through acquisition.",
      "The feature highlighted Mervanta RCM's phased implementation model and its use of standardized workflows to bring newly acquired practices onto a single operating platform.",
    ],
  },
];
