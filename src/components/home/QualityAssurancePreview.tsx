import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const steps = ["Specialist", "QA Review", "Supervisor", "Client Reporting"];

export function QualityAssurancePreview() {
  return (
    <Section tone="slate">
      <SectionHeading
        eyebrow="Quality Assurance"
        title="Every claim passes through structured, multi-level review."
        subtitle="Quality is checked at every stage of the revenue cycle — not sampled after the fact."
        align="center"
      />
      <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-3">
        {steps.map((step, i) => (
          <Reveal key={step} delay={i * 0.06} className="flex items-center gap-3">
            <div className="flex h-24 w-40 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white text-center shadow-[0_1px_2px_rgba(10,22,38,0.04)]">
              <span className="font-display text-base text-ink-900">{step}</span>
            </div>
            {i < steps.length - 1 && <ArrowRight className="h-5 w-5 shrink-0 text-slate-300" />}
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href="/quality-assurance" variant="secondary">
          See our QA framework
        </Button>
      </div>
    </Section>
  );
}
