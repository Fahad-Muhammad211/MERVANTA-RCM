import type { Metadata } from "next";
import {
  Stethoscope, Users, Building2, Hospital, HeartPulse, FlaskConical,
  Scan, Clock, Video, Network, Landmark,
  Check, Minus,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Mervanta RCM supports healthcare providers and business structures of every scale — from independent practices to enterprise, PE-backed healthcare organizations.",
};

const providers = [
  { icon: Stethoscope, label: "Independent Practices" },
  { icon: Users, label: "Multi-Specialty Groups" },
  { icon: Building2, label: "Physician Groups" },
  { icon: HeartPulse, label: "Clinics" },
  { icon: Hospital, label: "Hospitals" },
  { icon: Network, label: "Health Systems" },
  { icon: Scan, label: "Ambulatory Surgery Centers" },
  { icon: FlaskConical, label: "Laboratories" },
  { icon: Scan, label: "Diagnostic Centers" },
  { icon: Clock, label: "Urgent Care" },
  { icon: Video, label: "Telehealth Organizations" },
];

const structures = [
  { icon: Building2, label: "Single-Location Practices", description: "Focused, high-touch support for one-location organizations." },
  { icon: Network, label: "Multi-Location Organizations", description: "Standardized workflows applied consistently across locations." },
  { icon: Landmark, label: "Enterprise Healthcare Groups", description: "Centralized architecture for large, complex organizations." },
  { icon: Users, label: "MSOs", description: "Scalable back-office infrastructure supporting managed practices." },
  { icon: Hospital, label: "PE-Backed Healthcare Organizations", description: "Enterprise reporting built for investor and leadership visibility." },
];

const comparisonRows = [
  { feature: "Dedicated account contact", single: true, multi: true, enterprise: true },
  { feature: "Standardized billing workflows", single: true, multi: true, enterprise: true },
  { feature: "Location-level reporting", single: false, multi: true, enterprise: true },
  { feature: "Multi-TIN management", single: false, multi: true, enterprise: true },
  { feature: "Centralized enterprise reporting", single: false, multi: false, enterprise: true },
  { feature: "Dedicated enterprise implementation team", single: false, multi: false, enterprise: true },
  { feature: "Executive business reviews", single: false, multi: true, enterprise: true },
];

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        breadcrumb="Who We Serve"
        eyebrow="Who We Serve"
        title="Built to support healthcare organizations at every scale."
        subtitle="From a single-location practice to a PE-backed multi-state enterprise group, our operating model adapts to the complexity of your organization — without compromising on standards."
      />

      <Section tone="white">
        <SectionHeading eyebrow="Healthcare Providers" title="Organizations we support" align="center" />
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-3 lg:grid-cols-4">
          {providers.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.03} className="flex flex-col items-start gap-3 bg-white p-6">
              <p.icon className="h-6 w-6 text-teal-600" />
              <span className="text-sm font-medium text-ink-800">{p.label}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Business Structures" title="Every organizational structure, supported" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {structures.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="flex flex-col border border-slate-200 bg-white p-6">
              <s.icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-base text-ink-900">{s.label}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Scale Comparison"
          title="How support scales with organizational complexity"
          align="center"
        />
        <div className="mt-12 space-y-3 md:hidden">
          {comparisonRows.map((row) => (
            <div key={row.feature} className="rounded-lg border border-slate-200 p-4">
              <div className="text-sm font-medium text-ink-800">{row.feature}</div>
              <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center">
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                    Single-Location
                  </div>
                  <div className="mt-1.5 flex justify-center">
                    {row.single ? (
                      <Check className="h-4 w-4 text-teal-500" />
                    ) : (
                      <Minus className="h-4 w-4 text-slate-300" />
                    )}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                    Multi-Location
                  </div>
                  <div className="mt-1.5 flex justify-center">
                    {row.multi ? (
                      <Check className="h-4 w-4 text-teal-500" />
                    ) : (
                      <Minus className="h-4 w-4 text-slate-300" />
                    )}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                    Enterprise
                  </div>
                  <div className="mt-1.5 flex justify-center">
                    {row.enterprise ? (
                      <Check className="h-4 w-4 text-teal-500" />
                    ) : (
                      <Minus className="h-4 w-4 text-slate-300" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 hidden overflow-x-auto md:block">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-4 text-left font-medium text-slate-500">Capability</th>
                <th className="py-4 text-center font-medium text-ink-900">Single-Location</th>
                <th className="py-4 text-center font-medium text-ink-900">Multi-Location</th>
                <th className="py-4 text-center font-medium text-ink-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-slate-100">
                  <td className="py-4 pr-4 text-ink-700">{row.feature}</td>
                  <td className="py-4 text-center">
                    {row.single ? (
                      <Check className="mx-auto h-4 w-4 text-teal-500" />
                    ) : (
                      <Minus className="mx-auto h-4 w-4 text-slate-300" />
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {row.multi ? (
                      <Check className="mx-auto h-4 w-4 text-teal-500" />
                    ) : (
                      <Minus className="mx-auto h-4 w-4 text-slate-300" />
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {row.enterprise ? (
                      <Check className="mx-auto h-4 w-4 text-teal-500" />
                    ) : (
                      <Minus className="mx-auto h-4 w-4 text-slate-300" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CTASection
        title="Tell us about your organization."
        subtitle="Whatever your structure or scale, we'll show you how our operating model applies to your organization."
      />
    </>
  );
}
