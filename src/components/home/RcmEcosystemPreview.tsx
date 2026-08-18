import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { rcmStages } from "@/data/rcmStages";

export function RcmEcosystemPreview() {
  return (
    <Section tone="slate">
      <SectionHeading
        eyebrow="The RCM Ecosystem"
        title="One continuous revenue cycle, managed end to end."
        subtitle="From the first patient interaction through final reconciliation, every stage is connected — with structured handoffs, quality checkpoints, and reporting that closes the loop."
        align="center"
      />

      <div className="mt-14 overflow-x-auto scrollbar-none pb-4">
        <div className="flex min-w-max items-stretch gap-3 px-1">
          {rcmStages.map((stage, i) => (
            <Reveal key={stage.slug} delay={i * 0.04} className="flex items-stretch">
              <div className="flex w-[168px] flex-col justify-between rounded-lg border border-slate-200 bg-white p-4">
                <div>
                  <div className="font-display text-2xl text-slate-300">{stage.number}</div>
                  <div className="mt-2 text-sm font-semibold text-ink-900">{stage.name}</div>
                </div>
                <div className="mt-3 text-xs leading-relaxed text-slate-500">
                  {stage.shortDescription}
                </div>
              </div>
              {i < rcmStages.length - 1 && (
                <div className="flex items-center px-1.5">
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-300" />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button href="/revenue-cycle-management" variant="secondary">
          Explore the full RCM ecosystem
        </Button>
      </div>
    </Section>
  );
}
