import { Section, SectionHeading } from "@/components/ui/Section";
import { WorldMap } from "@/components/ui/WorldMap";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { locations } from "@/data/locations";

export function GlobalOperationsPreview() {
  return (
    <Section tone="ink">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Global Operations"
            title="A coordinated delivery network, not a single back office."
            subtitle="Corporate headquarters, regional offices, and global delivery centers work as one coordinated operating network — connected by shared standards, reporting, and quality controls."
            tone="light"
          />
          <Reveal delay={0.1} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["North America", "United Kingdom", "Australia", "International Delivery"].map((r) => (
              <div key={r} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
                {r}
              </div>
            ))}
          </Reveal>
          <div className="mt-8">
            <Button href="/global-presence" variant="outline-light">
              Explore global presence
            </Button>
          </div>
        </div>
        <WorldMap locations={locations} />
      </div>
    </Section>
  );
}
