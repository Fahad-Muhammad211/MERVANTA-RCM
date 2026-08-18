import { Section, SectionHeading } from "@/components/ui/Section";
import { SpecialtyCard } from "@/components/cards/SpecialtyCard";
import { Button } from "@/components/ui/Button";
import { specialties } from "@/data/specialties";

const featured = specialties.filter((s) =>
  [
    "cardiology",
    "orthopedics",
    "dermatology",
    "oncology",
    "behavioral-health",
    "emergency-medicine",
    "hospitals",
    "telehealth",
  ].includes(s.slug)
);

export function SpecialtiesOverview() {
  return (
    <Section tone="white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Specialties"
          title="Deep specialty coverage across 28 areas of care."
          className="max-w-2xl"
        />
        <Button href="/specialties" variant="secondary">
          View all specialties
        </Button>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {featured.map((s, i) => (
          <SpecialtyCard key={s.slug} specialty={s} delay={i * 0.04} />
        ))}
      </div>
    </Section>
  );
}
