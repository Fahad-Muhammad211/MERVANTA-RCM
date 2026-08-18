import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { rcmStages } from "@/data/rcmStages";

export const metadata: Metadata = {
  title: "Revenue Cycle Management",
  description:
    "Explore the complete healthcare revenue cycle ecosystem — from patient access through reporting and analytics — managed end to end by Mervanta RCM.",
};

export default function RcmPage() {
  return (
    <>
      <PageHero
        breadcrumb="Revenue Cycle Management"
        eyebrow="The RCM Ecosystem"
        title="One connected revenue cycle, from first contact to final reconciliation."
        subtitle="Every stage of the revenue cycle is managed as part of one coordinated system — structured handoffs, embedded quality checkpoints, and reporting that closes the loop back to leadership."
      />

      <Section tone="white" className="pb-10">
        <SectionHeading eyebrow="Full Ecosystem" title="Eleven stages. One continuous cycle." align="center" />
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2">
          {rcmStages.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-ink-700 transition-colors hover:border-teal-400 hover:text-teal-600"
            >
              {s.number} — {s.name}
            </a>
          ))}
        </div>
      </Section>

      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {rcmStages.map((stage, i) => (
          <Section
            key={stage.slug}
            id={stage.slug}
            tone={i % 2 === 0 ? "white" : "slate"}
            className="scroll-mt-24 py-16 md:py-20"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[auto_1fr]">
              <Reveal className="flex items-start gap-4 lg:w-64">
                <span className="font-display text-5xl text-slate-200">{stage.number}</span>
                <div>
                  <h2 className="font-display text-2xl text-ink-900">{stage.name}</h2>
                  <p className="mt-2 text-sm text-slate-500">{stage.shortDescription}</p>
                </div>
              </Reveal>
              <div>
                <Reveal className="max-w-2xl text-base leading-relaxed text-slate-600">
                  {stage.description}
                </Reveal>
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <Reveal delay={0.06}>
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Key Activities
                    </div>
                    <ul className="mt-3 space-y-2">
                      {stage.keyActivities.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-ink-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Benefits
                    </div>
                    <ul className="mt-3 space-y-2">
                      {stage.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-ink-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
                <Reveal delay={0.14} className="mt-8 flex flex-wrap gap-3">
                  {stage.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs">
                      <span className="text-slate-400">{m.label}: </span>
                      <span className="font-medium text-ink-800">{m.value}</span>
                    </div>
                  ))}
                </Reveal>
              </div>
            </div>
          </Section>
        ))}
      </div>

      <Section tone="paper">
        <SectionHeading
          eyebrow="Explore Further"
          title="See how each stage translates into a dedicated service."
          align="center"
        />
        <div className="mt-8 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md bg-ink-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
          >
            View our full service catalog
          </Link>
        </div>
      </Section>

      <CTASection
        title="Ready to see how this ecosystem would work for your organization?"
        subtitle="Request a free assessment of your current revenue cycle performance across each of these stages."
      />
    </>
  );
}
