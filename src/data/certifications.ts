export type Certification = {
  name: string;
  fullName: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    name: "HIPAA",
    fullName: "Health Insurance Portability and Accountability Act",
    description: "Administrative, physical, and technical safeguards aligned with the HIPAA Privacy and Security Rules.",
  },
  {
    name: "SOC 2",
    fullName: "SOC 2 Type II",
    description: "Independent audit of security, availability, and confidentiality controls.",
  },
  {
    name: "ISO 27001",
    fullName: "ISO/IEC 27001",
    description: "International standard for information security management systems.",
  },
  {
    name: "HITRUST",
    fullName: "HITRUST CSF",
    description: "Healthcare-specific security and privacy risk management framework certification.",
  },
  {
    name: "AAPC",
    fullName: "AAPC Certified Coders",
    description: "Professional coding staff holding active AAPC certifications (e.g., CPC).",
  },
  {
    name: "AHIMA",
    fullName: "AHIMA Certified Professionals",
    description: "Professional coding and health information staff holding active AHIMA credentials.",
  },
];

export const securityPillars = [
  {
    title: "Data Encryption",
    description: "Encryption in transit and at rest across systems handling protected health information.",
  },
  {
    title: "Secure Data Transmission",
    description: "Controlled, monitored channels for all PHI exchange with clients, payers, and clearinghouses.",
  },
  {
    title: "Role-Based Access Control",
    description: "System access scoped to job function, reviewed on a defined cadence.",
  },
  {
    title: "Audit Logging",
    description: "Comprehensive audit trails across systems handling client and patient data.",
  },
  {
    title: "Data Backup & Recovery",
    description: "Structured backup schedules supporting business continuity objectives.",
  },
  {
    title: "Disaster Recovery",
    description: "Documented recovery procedures tested on a periodic basis.",
  },
  {
    title: "Employee Security Training",
    description: "Mandatory onboarding and recurring security and privacy training for all staff.",
  },
  {
    title: "Incident Response",
    description: "Documented incident response protocol with defined escalation and notification procedures.",
  },
];
