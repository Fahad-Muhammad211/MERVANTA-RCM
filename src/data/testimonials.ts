export type Testimonial = {
  quote: string;
  attribution: string;
  organizationType: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mervanta RCM standardized our billing workflow across every location within a single quarter. We finally have one consistent process instead of five different ones.",
    attribution: "Practice Administrator",
    organizationType: "Multi-Specialty Physician Group",
  },
  {
    quote:
      "The account team feels like an extension of our own staff. They know our payer mix and our providers, not just our account number.",
    attribution: "Director of Operations",
    organizationType: "Ambulatory Surgery Center",
  },
  {
    quote:
      "Denial trends that used to take us weeks to identify now show up in a weekly report, with a clear plan attached to fix them.",
    attribution: "Chief Financial Officer",
    organizationType: "Behavioral Health Network",
  },
  {
    quote:
      "Bringing on a centralized RCM partner let our internal team focus on integration and growth instead of day-to-day claims work.",
    attribution: "VP of Revenue Cycle",
    organizationType: "Enterprise Health System",
  },
];

export const clientLogos = [
  { id: "client-1", label: "Summit Health Partners" },
  { id: "client-2", label: "Lakeside Medical Group" },
  { id: "client-3", label: "Northbridge Physician Alliance" },
  { id: "client-4", label: "Harborview Surgical Associates" },
  { id: "client-5", label: "Crestpoint Behavioral Network" },
  { id: "client-6", label: "Meridian Family Care" },
  { id: "client-7", label: "Fieldstone Diagnostics" },
  { id: "client-8", label: "Ashford Urgent Care Group" },
];
