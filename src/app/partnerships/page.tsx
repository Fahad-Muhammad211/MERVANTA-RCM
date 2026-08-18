import type { Metadata } from "next";
import { Link2, Network } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { technologyPartners, industryPartners } from "@/data/partners";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Mervanta RCM's technology and industry partnership ecosystem — EHR/EMR partners, clearinghouses, and healthcare associations.",
};

export default function PartnershipsPage() {
  const techGroups = Array.from(new Set(technologyPartners.map((p) => p.category)));

  return (
    <>
      <PageHero
        breadcrumb="Partnerships"
        eyebrow="Partnerships"
        title="A connected technology and industry ecosystem."
        subtitle="We work alongside technology and industry partners to extend the reach and reliability of our revenue cycle operations."
      />

      <Section tone="white">
        <SectionHeading eyebrow="Technology Partners" title="EHR, clearinghouse &amp; integration partners" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, gi) => (
            <Reveal key={group} delay={gi * 0.06} className="border border-slate-200 bg-white p-6">
              <Link2 className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-lg text-ink-900">{group}</h3>
              <ul className="mt-3 space-y-1.5">
                {technologyPartners.filter((p) => p.category === group).map((p, i) => (
                  <li key={i} className="text-sm text-slate-500">{p.name}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Industry Partners" title="Associations &amp; professional networks" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {industryPartners.map((p, i) => (
            <Reveal key={i} delay={i * 0.06} className="border border-slate-200 bg-white p-6">
              <Network className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-lg text-ink-900">{p.category}</h3>
              <p className="mt-2 text-sm text-slate-500">{p.name}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Interested in a technology or industry partnership?"
        subtitle="We're open to conversations with organizations aligned to our mission."
      />
    </>
  );
}
