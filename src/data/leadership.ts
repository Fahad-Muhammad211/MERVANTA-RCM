export type Executive = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  experienceAreas: string[];
  linkedinUrl: string;
};

export const executives: Executive[] = [
  {
    slug: "chief-executive-officer",
    name: "Andrew Callahan",
    title: "Chief Executive Officer",
    bio: "Andrew leads Mervanta RCM's global strategy and operations, with more than 20 years of experience building healthcare services organizations. He previously held senior operating roles at multi-state physician management groups before founding Mervanta RCM.",
    experienceAreas: ["Corporate Strategy", "Healthcare Industry Leadership"],
    linkedinUrl: "#",
  },
  {
    slug: "chief-operating-officer",
    name: "Priya Nataraj",
    title: "Chief Operating Officer",
    bio: "Priya oversees day-to-day service delivery across every Mervanta RCM operating center. She has spent her career scaling healthcare business operations, with a focus on standardized workflows and operational quality.",
    experienceAreas: ["Operations Management", "Service Delivery"],
    linkedinUrl: "#",
  },
  {
    slug: "chief-financial-officer",
    name: "Marcus Whitfield",
    title: "Chief Financial Officer",
    bio: "Marcus leads corporate finance, planning, and reporting for Mervanta RCM. Prior to joining the organization, he held finance leadership roles across healthcare services and business process outsourcing companies.",
    experienceAreas: ["Corporate Finance", "Financial Planning"],
    linkedinUrl: "#",
  },
  {
    slug: "chief-compliance-officer",
    name: "Dana Reyes",
    title: "Chief Compliance Officer",
    bio: "Dana directs Mervanta RCM's compliance and regulatory affairs program, including HIPAA governance and payer policy adherence. She has more than 15 years of experience in healthcare compliance and risk management.",
    experienceAreas: ["Healthcare Compliance", "Regulatory Affairs"],
    linkedinUrl: "#",
  },
  {
    slug: "vp-operations",
    name: "Michael Okafor",
    title: "VP, Operations",
    bio: "Michael leads operational strategy and process standardization across Mervanta RCM's delivery centers, partnering closely with department directors to maintain consistent service quality at scale.",
    experienceAreas: ["Operations Strategy", "Process Standardization"],
    linkedinUrl: "#",
  },
  {
    slug: "vp-revenue-cycle",
    name: "Laura Bennett",
    title: "VP, Revenue Cycle",
    bio: "Laura oversees revenue cycle strategy and payer relations, working directly with enterprise clients on performance improvement initiatives across billing, coding, and collections.",
    experienceAreas: ["Revenue Cycle Strategy", "Payer Relations"],
    linkedinUrl: "#",
  },
  {
    slug: "director-coding",
    name: "Samuel Ortiz",
    title: "Director, Coding",
    bio: "Samuel leads Mervanta RCM's coding organization, including specialty coding programs, coder training, and coding compliance auditing. He holds multiple professional coding certifications.",
    experienceAreas: ["Coding Compliance", "Coding Operations"],
    linkedinUrl: "#",
  },
  {
    slug: "director-client-success",
    name: "Emily Chen",
    title: "Director, Client Success",
    bio: "Emily leads the client success organization, overseeing onboarding, business reviews, and account management for Mervanta RCM's enterprise client portfolio.",
    experienceAreas: ["Client Success", "Enterprise Accounts"],
    linkedinUrl: "#",
  },
];
