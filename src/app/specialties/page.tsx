import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SpecialtyCard } from "@/components/cards/SpecialtyCard";
import { CTASection } from "@/components/ui/CTASection";
import { specialties, specialtyGroups } from "@/data/specialties";

export const metadata: Metadata = {
  title: "Specialties",
  description:
    "Mervanta RCM supports revenue cycle operations across 28 medical specialties and care settings, from cardiology to telehealth.",
};

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Specialties"
        eyebrow="Specialty Coverage"
        title="Deep specialty expertise across the care continuum."
        subtitle="Billing and coding accuracy depends on specialty-specific expertise. Our teams are organized around the distinct challenges of each specialty we support."
      />

      {specialtyGroups.map((group, gi) => {
        const items = specialties.filter((s) => s.group === group);
        return (
          <Section key={group} tone={gi % 2 === 0 ? "white" : "slate"}>
            <SectionHeading eyebrow="Specialty Group" title={group} />
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((s, i) => (
                <SpecialtyCard key={s.slug} specialty={s} delay={i * 0.03} />
              ))}
            </div>
          </Section>
        );
      })}

      <CTASection
        title="Don't see your specialty listed?"
        subtitle="We support a broad and growing range of specialties — tell us more about your organization."
      />
    </>
  );
}
