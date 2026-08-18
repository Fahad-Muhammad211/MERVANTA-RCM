import { Section, SectionHeading } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/data/caseStudies";

export function ClientSuccessPreview() {
  return (
    <Section tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Client Success"
          title="Engagements built around measurable operational outcomes."
          className="max-w-2xl"
        />
        <Button href="/client-success" variant="secondary">
          View all case studies
        </Button>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {caseStudies.map((c, i) => (
          <CaseStudyCard key={c.slug} study={c} delay={i * 0.06} />
        ))}
      </div>
    </Section>
  );
}
