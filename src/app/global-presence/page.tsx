import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WorldMap } from "@/components/ui/WorldMap";
import { LocationCard } from "@/components/cards/LocationCard";
import { CTASection } from "@/components/ui/CTASection";
import { locations, locationTypes } from "@/data/locations";

export const metadata: Metadata = {
  title: "Global Presence",
  description:
    "Explore Mervanta RCM's global operating network — corporate headquarters, operations centers, regional offices, and global delivery centers.",
};

export default function GlobalPresencePage() {
  return (
    <>
      <PageHero
        breadcrumb="Global Presence"
        eyebrow="Global Presence"
        title="A coordinated global operating network."
        subtitle="Mervanta RCM operates through a network of corporate, regional, and delivery locations connected by shared standards, quality controls, and reporting infrastructure."
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Global Network"
          title="Where we operate"
          subtitle="Hover or focus a marker to see the office type and country."
        />
        <div className="mt-10">
          <WorldMap locations={locations} />
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Network by Type" title="Corporate, regional, and delivery locations" align="center" />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {locationTypes.map((t) => (
            <div key={t} className="border border-slate-200 bg-white p-4 text-center">
              <div className="text-sm font-medium text-ink-800">{t}</div>
              <div className="mt-1 text-xs text-slate-400">
                {locations.filter((l) => l.type === t).length} location
                {locations.filter((l) => l.type === t).length === 1 ? "" : "s"}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="All Locations" title="United States, Canada, UK, Australia &amp; international operations" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => (
            <LocationCard key={loc.id} location={loc} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Looking to understand our delivery footprint in more depth?"
        subtitle="Our team can walk through how our global delivery network supports your organization's specific needs."
      />
    </>
  );
}
