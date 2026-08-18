export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { heading: string; links: NavLink[] };

export const mainNav: { label: string; href?: string; groups?: NavGroup[] }[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Solutions",
    groups: [
      {
        heading: "Revenue Cycle",
        links: [
          { label: "Revenue Cycle Management", href: "/revenue-cycle-management", description: "The full RCM ecosystem, end to end" },
          { label: "Enterprise Solutions", href: "/enterprise-solutions", description: "Multi-location and multi-TIN architecture" },
          { label: "Who We Serve", href: "/who-we-serve", description: "Organizations at every scale" },
        ],
      },
      {
        heading: "Platform",
        links: [
          { label: "Technology & Infrastructure", href: "/technology", description: "Integrations, security, and systems" },
          { label: "Client Portal", href: "/client-portal", description: "Live dashboard preview" },
          { label: "Security & Compliance", href: "/security-compliance", description: "HIPAA-aligned safeguards" },
          { label: "Quality Assurance", href: "/quality-assurance", description: "Multi-level QA workflow" },
        ],
      },
    ],
  },
  {
    label: "Services",
    groups: [
      {
        heading: "Core Services",
        links: [
          { label: "Medical Billing", href: "/services/medical-billing" },
          { label: "Medical Coding", href: "/services/medical-coding" },
          { label: "Claims Management", href: "/services/claims-management" },
          { label: "Denial Management", href: "/services/denial-management" },
          { label: "A/R Management", href: "/services/accounts-receivable-management" },
          { label: "Credentialing", href: "/services/credentialing" },
        ],
      },
      {
        heading: "Explore",
        links: [
          { label: "All Services", href: "/services", description: "Full service catalog" },
          { label: "Specialties", href: "/specialties", description: "28 specialties supported" },
          { label: "Practice Support", href: "/services/practice-support" },
          { label: "Virtual Medical Staffing", href: "/services/virtual-medical-staffing" },
        ],
      },
    ],
  },
  {
    label: "Company",
    groups: [
      {
        heading: "About",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Leadership", href: "/leadership" },
          { label: "People & Expertise", href: "/people" },
          { label: "Training & Certification", href: "/training" },
          { label: "Corporate Responsibility", href: "/corporate-responsibility" },
        ],
      },
      {
        heading: "Global",
        links: [
          { label: "Global Presence", href: "/global-presence" },
          { label: "Locations", href: "/locations" },
          { label: "Partnerships", href: "/partnerships" },
          { label: "Newsroom", href: "/newsroom" },
          { label: "Careers", href: "/careers" },
        ],
      },
    ],
  },
  {
    label: "Insights",
    groups: [
      {
        heading: "Knowledge Center",
        links: [
          { label: "Insights & Knowledge Center", href: "/insights" },
          { label: "Resources & Tools", href: "/resources" },
          { label: "Client Success Stories", href: "/client-success" },
          { label: "Performance & Transparency", href: "/performance" },
        ],
      },
    ],
  },
];

export const footerColumns: NavGroup[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Locations", href: "/locations" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Revenue Cycle Management", href: "/revenue-cycle-management" },
      { label: "Enterprise Solutions", href: "/enterprise-solutions" },
      { label: "Practice Support", href: "/services/practice-support" },
      { label: "Virtual Staffing", href: "/services/virtual-medical-staffing" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Medical Billing", href: "/services/medical-billing" },
      { label: "Medical Coding", href: "/services/medical-coding" },
      { label: "Claims Management", href: "/services/claims-management" },
      { label: "Denial Management", href: "/services/denial-management" },
      { label: "A/R Management", href: "/services/accounts-receivable-management" },
      { label: "Credentialing", href: "/services/credentialing" },
    ],
  },
  {
    heading: "Specialties",
    links: [
      { label: "Cardiology", href: "/specialties/cardiology" },
      { label: "Orthopedics", href: "/specialties/orthopedics" },
      { label: "Dermatology", href: "/specialties/dermatology" },
      { label: "Pediatrics", href: "/specialties/pediatrics" },
      { label: "Behavioral Health", href: "/specialties/behavioral-health" },
      { label: "All Specialties", href: "/specialties" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Guides & Checklists", href: "/resources" },
      { label: "Case Studies", href: "/client-success" },
      { label: "Performance & Transparency", href: "/performance" },
    ],
  },
  {
    heading: "Security",
    links: [
      { label: "HIPAA Compliance", href: "/security-compliance" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Security", href: "/security-compliance" },
      { label: "Quality Assurance", href: "/quality-assurance" },
    ],
  },
];
