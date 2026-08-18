import { Section, SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

const featured = services.filter((s) =>
  [
    "medical-billing",
    "medical-coding",
    "claims-management",
    "denial-management",
    "accounts-receivable-management",
    "credentialing",
    "prior-authorization",
    "reporting-analytics",
  ].includes(s.slug)
);

export function ServicesOverview() {
  return (
    <Section tone="slate">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Services"
          title="Full-spectrum revenue cycle services, delivered as one coordinated operation."
          className="max-w-2xl"
        />
        <Button href="/services" variant="secondary">
          View all 17 services
        </Button>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((s, i) => (
          <ServiceCard key={s.slug} service={s} delay={i * 0.05} />
        ))}
      </div>
    </Section>
  );
}
