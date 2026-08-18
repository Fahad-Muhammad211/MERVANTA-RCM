import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { rcmStages } from "@/data/rcmStages";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Mervanta RCM's multi-level quality assurance framework — coding QA, billing QA, claim QA, and compliance QA across the full revenue cycle.",
};

const qaTypes = [
  { title: "Coding QA", description: "Sampled review of coded claims for accuracy, specificity, and compliance." },
  { title: "Billing QA", description: "Review of billing workflows for completeness and payer-specific accuracy." },
  { title: "Claim QA", description: "Pre-submission validation against payer edits and formatting requirements." },
  { title: "Documentation QA", description: "Review of supporting documentation against coding and billing requirements." },
  { title: "Compliance QA", description: "Ongoing review against regulatory and payer policy requirements." },
  { title: "Payment QA", description: "Reconciliation checks on posted payments and adjustments." },
  { title: "A/R QA", description: "Review of follow-up activity and aging inventory management." },
  { title: "Reporting QA", description: "Validation of reporting accuracy before client delivery." },
];

const workflow = [
  { title: "Specialist", description: "Work is completed by a trained, certified specialist." },
  { title: "QA Review", description: "A structured quality review is performed on sampled or flagged work." },
  { title: "Supervisor", description: "Findings are escalated to a supervisor for correction and coaching." },
  { title: "Client Reporting", description: "Quality metrics are compiled and reported to the client." },
];

export default function QualityAssurancePage() {
  return (
    <>
      <PageHero
        breadcrumb="Quality Assurance"
        eyebrow="Quality Assurance"
        title="Quality checked at every stage — not sampled after the fact."
        subtitle="A structured, multi-level QA framework runs across every function of the revenue cycle, with findings routed back into training and process improvement."
      />

      <Section tone="white">
        <SectionHeading eyebrow="QA Coverage" title="Where quality is checked" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {qaTypes.map((q, i) => (
            <Reveal key={q.title} delay={i * 0.04} className="bg-white p-6">
              <CheckCircle2 className="h-5 w-5 text-teal-600" />
              <h3 className="mt-3 font-display text-base text-ink-900">{q.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{q.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Quality Workflow" title="A multi-level review process" align="center" />
        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {workflow.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06} className="flex items-center gap-3">
              <div className="flex h-32 w-44 flex-col items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-4 text-center">
                <span className="font-display text-lg text-ink-900">{w.title}</span>
                <span className="text-xs leading-snug text-slate-500">{w.description}</span>
              </div>
              {i < workflow.length - 1 && <ArrowRight className="h-5 w-5 shrink-0 text-slate-300" />}
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Checkpoints Across the Cycle"
          title="Quality checkpoints embedded throughout the RCM lifecycle"
          align="center"
        />
        <div className="mt-12 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-3 px-1">
            {rcmStages.map((stage) => (
              <div key={stage.slug} className="flex w-[150px] flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white p-4 text-center">
                <CheckCircle2 className="h-4 w-4 text-teal-500" />
                <span className="text-xs font-medium text-ink-800">{stage.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Curious how our QA program applies to your specialty mix?"
        subtitle="Our quality team can walk through our review methodology in detail."
      />
    </>
  );
}
