export type Location = {
  id: string;
  city: string;
  country: string;
  region: "North America" | "United Kingdom" | "Australia" | "International Operations";
  type: "Corporate Headquarters" | "Operations Center" | "Regional Office" | "Global Delivery Center";
  servicesSupported: string[];
  operationsInfo: string;
  phone: string;
  email: string;
  coordinates: { x: number; y: number };
};

export const locations: Location[] = [
  {
    id: "hq-us",
    city: "Dallas, Texas",
    country: "United States",
    region: "North America",
    type: "Corporate Headquarters",
    servicesSupported: ["Executive Leadership", "Enterprise Client Management", "Corporate Operations"],
    operationsInfo: "Primary corporate headquarters overseeing global strategy, enterprise accounts, and corporate governance.",
    phone: "+1 (214) 555-0147",
    email: "dallas@mervantarcm.com",
    coordinates: { x: 22, y: 40 },
  },
  {
    id: "ops-us-2",
    city: "Austin, Texas",
    country: "United States",
    region: "North America",
    type: "Operations Center",
    servicesSupported: ["Medical Billing", "A/R Management", "Client Success"],
    operationsInfo: "Domestic operations center supporting U.S.-based billing, collections, and client success functions.",
    phone: "+1 (512) 555-0163",
    email: "austin@mervantarcm.com",
    coordinates: { x: 27, y: 44 },
  },
  {
    id: "ops-canada",
    city: "Toronto, Ontario",
    country: "Canada",
    region: "North America",
    type: "Regional Office",
    servicesSupported: ["Client Relations", "Enterprise Solutions"],
    operationsInfo: "Regional office supporting Canadian client relationships and North American enterprise accounts.",
    phone: "+1 (416) 555-0119",
    email: "toronto@mervantarcm.com",
    coordinates: { x: 24, y: 33 },
  },
  {
    id: "ops-uk",
    city: "London",
    country: "United Kingdom",
    region: "United Kingdom",
    type: "Regional Office",
    servicesSupported: ["International Client Relations", "Compliance Advisory"],
    operationsInfo: "Regional office supporting United Kingdom and broader European client engagement.",
    phone: "+44 20 5550 0132",
    email: "london@mervantarcm.com",
    coordinates: { x: 47, y: 32 },
  },
  {
    id: "ops-australia",
    city: "Sydney, New South Wales",
    country: "Australia",
    region: "Australia",
    type: "Regional Office",
    servicesSupported: ["International Client Relations", "Asia-Pacific Coordination"],
    operationsInfo: "Regional office supporting Australian and Asia-Pacific client relationships.",
    phone: "+61 2 5550 0148",
    email: "sydney@mervantarcm.com",
    coordinates: { x: 84, y: 78 },
  },
  {
    id: "gdc-pakistan",
    city: "Karachi",
    country: "Pakistan",
    region: "International Operations",
    type: "Global Delivery Center",
    servicesSupported: ["Medical Coding", "Medical Billing", "A/R Management", "Credentialing", "Quality Assurance"],
    operationsInfo: "Primary global delivery center providing certified coding, billing, and back-office operations at scale.",
    phone: "+92 21 5550 0177",
    email: "karachi@mervantarcm.com",
    coordinates: { x: 63, y: 44 },
  },
];

export const locationTypes = [
  "Corporate Headquarters",
  "Operations Center",
  "Regional Office",
  "Global Delivery Center",
] as const;
