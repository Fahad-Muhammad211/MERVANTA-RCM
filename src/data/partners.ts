export type Partner = {
  category: string;
  name: string;
};

export const technologyPartners: Partner[] = [
  { category: "EHR / EMR Partners", name: "Athenova Health" },
  { category: "EHR / EMR Partners", name: "Carelink EHR" },
  { category: "Clearinghouses", name: "Meridian Clearinghouse" },
  { category: "Clearinghouses", name: "Northgate Data Exchange" },
  { category: "Healthcare Technology Partners", name: "Vantage Health Systems" },
  { category: "Integration Partners", name: "Bridgeway Integration Partners" },
];

export const industryPartners: Partner[] = [
  { category: "Healthcare Associations", name: "National Healthcare Financial Alliance" },
  { category: "Professional Organizations", name: "Medical Coding Professionals Council" },
  { category: "Industry Networks", name: "Healthcare Operations Leaders Network" },
];
