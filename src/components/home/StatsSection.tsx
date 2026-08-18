import { Section, SectionHeading } from "@/components/ui/Section";
import { StatGrid } from "@/components/ui/StatGrid";
import { companyStats } from "@/data/stats";

export function StatsSection() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Scale &amp; Operating Capacity"
        title="Built to operate at enterprise scale, from day one."
        subtitle="Mervanta RCM is structured as a full-scale operational organization — standardized workflows, dedicated departments, and infrastructure designed to support healthcare organizations of any size."
      />
      <div className="mt-10">
        <StatGrid stats={companyStats} />
      </div>
    </Section>
  );
}
