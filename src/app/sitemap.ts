import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { specialties } from "@/data/specialties";
import { caseStudies } from "@/data/caseStudies";
import { insights } from "@/data/insights";
import { jobs } from "@/data/jobs";
import { newsItems } from "@/data/newsroom";

const baseUrl = "https://www.mervantarcm.com";

const staticRoutes = [
  "", "about", "global-presence", "revenue-cycle-management", "services", "specialties",
  "who-we-serve", "enterprise-solutions", "technology", "client-portal", "security-compliance",
  "quality-assurance", "people", "training", "client-success", "performance", "insights",
  "resources", "leadership", "careers", "careers/apply", "locations", "partnerships",
  "newsroom", "corporate-responsibility", "contact", "privacy-policy", "terms-of-use",
  "cookie-policy", "accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRoutes = [
    ...services.map((s) => `services/${s.slug}`),
    ...specialties.map((s) => `specialties/${s.slug}`),
    ...caseStudies.map((c) => `client-success/${c.slug}`),
    ...insights.map((i) => `insights/${i.slug}`),
    ...jobs.map((j) => `careers/${j.slug}`),
    ...newsItems.map((n) => `newsroom/${n.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
  }));
}
