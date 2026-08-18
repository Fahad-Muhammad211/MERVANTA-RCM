import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CTASection } from "@/components/ui/CTASection";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Client Success",
  description:
    "Case studies illustrating how Mervanta RCM partners with healthcare organizations to improve revenue cycle performance.",
};

export default function ClientSuccessPage() {
  return (
    <>
      <PageHero
        breadcrumb="Client Success"
        eyebrow="Client Success"
        title="Engagements built around measurable operational outcomes."
        subtitle="A look at how our operating model applies across different organization types, sizes, and specialties."
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <CaseStudyCard key={c.slug} study={c} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Want to see how this could apply to your organization?"
        subtitle="Tell us about your current revenue cycle challenges and we'll walk through a tailored approach."
      />
    </>
  );
}
