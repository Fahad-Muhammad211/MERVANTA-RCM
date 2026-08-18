import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const middleLayer = ["Billing", "Coding", "A/R", "Claims", "Reporting", "Compliance"];

export function EnterpriseArchitecture() {
  return (
    <Section tone="ink">
      <SectionHeading
        eyebrow="Enterprise Solutions"
        title="One centralized platform for multi-location, multi-TIN organizations."
        subtitle="Enterprise healthcare groups operate through a single centralized RCM architecture — standardized workflows feeding structured reporting and full executive visibility."
        align="center"
        tone="light"
      />

      <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-3">
        <Reveal className="w-full max-w-sm rounded-lg border border-white/15 bg-white/[0.06] px-6 py-4 text-center">
          <div className="font-display text-lg text-white">Healthcare Organization</div>
          <div className="text-xs text-slate-400">Multi-location · Multi-TIN · Multi-specialty</div>
        </Reveal>
        <ChevronDown className="h-5 w-5 text-slate-500" />
        <Reveal delay={0.05} className="w-full max-w-sm rounded-lg border border-teal-400/30 bg-teal-500/10 px-6 py-4 text-center">
          <div className="font-display text-lg text-teal-200">Centralized RCM Platform</div>
          <div className="text-xs text-teal-300/70">Standardized workflows &amp; governance</div>
        </Reveal>
        <ChevronDown className="h-5 w-5 text-slate-500" />

        <div className="grid w-full grid-cols-3 gap-3 sm:grid-cols-6">
          {middleLayer.map((item, i) => (
            <Reveal
              key={item}
              delay={0.05 + i * 0.04}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-center text-xs font-medium text-slate-200"
            >
              {item}
            </Reveal>
          ))}
        </div>

        <ChevronDown className="h-5 w-5 text-slate-500" />
        <Reveal delay={0.1} className="w-full max-w-sm rounded-lg border border-gold-300/30 bg-gold-100/[0.08] px-6 py-4 text-center">
          <div className="font-display text-lg text-gold-300">Executive Visibility</div>
          <div className="text-xs text-slate-400">Provider · Location · Payer-level reporting</div>
        </Reveal>
      </div>

      <div className="mt-12 flex justify-center">
        <Button href="/enterprise-solutions" variant="outline-light">
          Explore enterprise solutions
        </Button>
      </div>
    </Section>
  );
}
