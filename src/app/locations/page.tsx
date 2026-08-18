import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WorldMap } from "@/components/ui/WorldMap";
import { LocationCard } from "@/components/cards/LocationCard";
import { CTASection } from "@/components/ui/CTASection";
import { locations, locationTypes } from "@/data/locations";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Mervanta RCM's corporate headquarters, operations centers, regional offices, and global delivery locations.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Locations"
        eyebrow="Locations"
        title="Our corporate and delivery locations."
        subtitle="A directory of our headquarters, operations centers, regional offices, and global delivery locations."
      />

      <Section tone="white">
        <WorldMap locations={locations} />
      </Section>

      {locationTypes.map((type, ti) => {
        const items = locations.filter((l) => l.type === type);
        if (items.length === 0) return null;
        return (
          <Section key={type} tone={ti % 2 === 0 ? "slate" : "white"}>
            <SectionHeading eyebrow="Location Type" title={type} />
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((loc, i) => (
                <LocationCard key={loc.id} location={loc} delay={i * 0.05} />
              ))}
            </div>
          </Section>
        );
      })}

      <CTASection
        title="Looking to connect with a specific location?"
        subtitle="Reach out and our team will direct you to the right regional contact."
      />
    </>
  );
}
