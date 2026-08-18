import type { Metadata } from "next";
import { BookOpenText, FileDown, Stethoscope, HeartPulse } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { DenialCodeLookup } from "@/components/resources/DenialCodeLookup";
import { GlossarySearch } from "@/components/resources/GlossarySearch";
import { RevenueCalculator } from "@/components/resources/RevenueCalculator";
import { ArCalculator } from "@/components/resources/ArCalculator";
import { Checklist } from "@/components/resources/Checklist";
import { billingChecklist, credentialingChecklist } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free RCM tools and resources — denial code lookup, RCM glossary, billing and credentialing checklists, and revenue calculators.",
};

const guides = [
  { icon: Stethoscope, title: "CPT / ICD-10 Coding Resources", description: "Reference materials for common coding scenarios and updates." },
  { icon: HeartPulse, title: "Specialty Billing Guides", description: "Specialty-specific billing and documentation guidance." },
  { icon: BookOpenText, title: "Healthcare Operations Resources", description: "Operational best practices for revenue cycle leaders." },
  { icon: FileDown, title: "Downloadable Guides", description: "In-depth guides available on request from our team." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Resources"
        eyebrow="Resources & Tools"
        title="Practical tools for revenue cycle teams."
        subtitle="Free reference tools and planning calculators — built for healthcare finance and operations leaders."
      />

      <Section tone="white">
        <SectionHeading eyebrow="Denial Code Lookup" title="Understand a denial code" />
        <div className="mt-8">
          <DenialCodeLookup />
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="RCM Glossary" title="Revenue cycle terminology" />
        <div className="mt-8 max-w-3xl">
          <GlossarySearch />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Planning Calculators" title="Estimate your opportunity" align="center" />
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RevenueCalculator />
          <ArCalculator />
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Checklists" title="Operational checklists" align="center" />
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl text-ink-900">Billing Checklist</h3>
            <div className="mt-4">
              <Checklist items={billingChecklist} />
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl text-ink-900">Credentialing Checklist</h3>
            <div className="mt-4">
              <Checklist items={credentialingChecklist} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="More Resources" title="Guides &amp; healthcare resources" align="center" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((g) => (
            <div key={g.title} className="flex flex-col border border-slate-200 bg-white p-6">
              <g.icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-base text-ink-900">{g.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">{g.description}</p>
              <Button href="/contact" variant="ghost" size="sm" className="mt-4 justify-start px-0">
                Request this guide
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Want a resource built for your specialty mix?"
        subtitle="Tell us what you're looking for and our team will follow up directly."
      />
    </>
  );
}
