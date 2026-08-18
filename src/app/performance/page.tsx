import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { DenialTrendChart } from "@/components/dashboard/DenialTrendChart";
import { ArAgingChart } from "@/components/dashboard/ArAgingChart";
import { cn } from "@/lib/utils";
import { performanceKpis } from "@/data/kpis";

export const metadata: Metadata = {
  title: "Performance & Transparency",
  description:
    "Transparent, illustrative performance metrics from Mervanta RCM — clean claim rate, denial rate, A/R days, and collection rate.",
};

export default function PerformancePage() {
  return (
    <>
      <PageHero
        breadcrumb="Performance & Transparency"
        eyebrow="Performance & Transparency"
        title="The metrics we hold ourselves accountable to."
        subtitle="Transparent reporting isn't reserved for internal use — clients see the same performance indicators we use to run our own operations."
      />

      <Section tone="white">
        <SectionHeading eyebrow="Key Performance Indicators" title="Enterprise performance dashboard" />
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {performanceKpis.map((k, i) => (
            <Reveal key={k.label} delay={i * 0.03} className="bg-white p-6">
              <div className="text-xs font-medium text-slate-500">{k.label}</div>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-display text-2xl text-ink-900">{k.value}</span>
                {k.trend === "up" ? (
                  <ArrowUpRight className={cn("h-4 w-4 text-signal-green")} />
                ) : (
                  <ArrowDownRight className={cn("h-4 w-4 text-signal-green")} />
                )}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{k.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Revenue Trend" title="Charges vs. net collections" />
        <div className="mt-8 border border-slate-200 bg-white p-6">
          <RevenueChart />
        </div>
      </Section>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Denial Trend" title="Denial rate over time" />
            <div className="mt-8 border border-slate-200 bg-white p-6">
              <DenialTrendChart />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="A/R Aging" title="Share of A/R by age" />
            <div className="mt-8 border border-slate-200 bg-white p-6">
              <ArAgingChart />
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="Want to see how we'd report on your organization's performance?"
        subtitle="Request a free assessment and sample reporting package for your organization."
      />
    </>
  );
}
