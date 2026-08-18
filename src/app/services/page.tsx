import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { services, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Mervanta RCM's full catalog of medical billing, coding, claims, credentialing, and revenue cycle management services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Full Service Catalog"
        title="Seventeen services. One coordinated revenue cycle operation."
        subtitle="Every service is delivered under standardized workflows and quality controls — engage a single service or the full end-to-end revenue cycle."
        primary={{ label: "Get a Free RCM Assessment", href: "/contact" }}
      />

      {serviceCategories.map((cat) => {
        const items = services.filter((s) => s.category === cat);
        return (
          <Section key={cat} tone={cat === "Core RCM" || cat === "Back-End" ? "white" : "slate"}>
            <SectionHeading eyebrow={cat} title={cat} className="sr-only" />
            <div className="mb-8 flex items-baseline gap-3">
              <h2 className="font-display text-2xl text-ink-900">{cat}</h2>
              <span className="text-sm text-slate-400">{items.length} services</span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s, i) => (
                <ServiceCard key={s.slug} service={s} delay={i * 0.04} />
              ))}
            </div>
          </Section>
        );
      })}

      <CTASection
        title="Not sure which services you need?"
        subtitle="Tell us about your organization and we'll recommend the right combination of services."
      />
    </>
  );
}
