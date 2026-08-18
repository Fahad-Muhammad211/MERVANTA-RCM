import { Section, SectionHeading } from "@/components/ui/Section";
import { LogoStrip } from "@/components/ui/LogoStrip";

export function ClientLogosSection() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Trusted By"
        title="Supporting healthcare organizations across the care continuum."
        align="center"
      />
      <div className="mt-12">
        <LogoStrip />
      </div>
    </Section>
  );
}
