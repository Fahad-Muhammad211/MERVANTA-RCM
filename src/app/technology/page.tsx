import type { Metadata } from "next";
import {
  Link2, ClipboardCheck, Network, LockKeyhole, Webhook, LayoutDashboard,
  BarChart3, FileStack, Workflow, ListChecks, KeyRound, FileClock,
  Bell, RefreshCw, BrainCog, Cloud, ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Technology & Infrastructure",
  description:
    "The enterprise technology infrastructure behind Mervanta RCM — integrations, secure data exchange, reporting platforms, and cloud infrastructure.",
};

const capabilities = [
  { icon: Link2, title: "EHR / EMR Integration", description: "Structured integration with leading electronic health record systems." },
  { icon: ClipboardCheck, title: "Practice Management Integration", description: "Direct connectivity with practice management platforms." },
  { icon: Network, title: "Clearinghouse Connectivity", description: "Validated claim submission channels across major clearinghouses." },
  { icon: LockKeyhole, title: "Secure Data Exchange", description: "Encrypted, monitored data transmission across every integration." },
  { icon: Webhook, title: "API Integrations", description: "Structured API connections supporting workflow automation." },
  { icon: LayoutDashboard, title: "Client Portal", description: "A dedicated portal for real-time visibility into performance." },
  { icon: BarChart3, title: "Reporting Platform", description: "Provider, location, and payer-level reporting infrastructure." },
  { icon: FileStack, title: "Document Management", description: "Centralized, secure storage for claims and supporting documentation." },
  { icon: Workflow, title: "Workflow Management", description: "Structured, auditable workflows across every RCM function." },
  { icon: ListChecks, title: "Task Management", description: "Task assignment and tracking across billing and coding teams." },
  { icon: KeyRound, title: "Role-Based Access", description: "System access scoped precisely to job function." },
  { icon: FileClock, title: "Audit Trails", description: "Full activity logging across systems handling client and patient data." },
  { icon: Bell, title: "Automated Notifications", description: "Proactive alerts for authorization deadlines, denials, and exceptions." },
  { icon: RefreshCw, title: "Data Synchronization", description: "Consistent, up-to-date data across integrated systems." },
  { icon: BrainCog, title: "Business Intelligence", description: "Structured analytics supporting operational decision-making." },
  { icon: Cloud, title: "Secure Cloud Infrastructure", description: "Cloud infrastructure built around healthcare data security requirements." },
];

const ecosystemLayers = [
  { label: "Client Systems", items: ["EHR / EMR", "Practice Management", "Scheduling"] },
  { label: "Integration & Exchange", items: ["Secure Data Exchange", "API Integrations", "Clearinghouse Connectivity"] },
  { label: "Mervanta RCM Platform", items: ["Workflow Management", "Document Management", "Business Intelligence"] },
  { label: "Client-Facing Access", items: ["Client Portal", "Reporting Platform", "Automated Notifications"] },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Technology & Infrastructure"
        eyebrow="Technology & Infrastructure"
        title="Enterprise systems built for secure, connected operations."
        subtitle="Our technology environment is built around integration, security, and operational visibility — a connected infrastructure, not a collection of disconnected tools."
      />

      <Section tone="white">
        <SectionHeading eyebrow="Technology Ecosystem" title="How systems connect" align="center" />
        <div className="mt-14 flex flex-col items-stretch gap-3">
          {ecosystemLayers.map((layer, i) => (
            <div key={layer.label} className="flex flex-col items-center">
              <Reveal delay={i * 0.06} className="w-full rounded-xl border border-slate-200 bg-white p-6">
                <div className="text-center font-display text-lg text-ink-900">{layer.label}</div>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {layer.items.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
              {i < ecosystemLayers.length - 1 && (
                <ArrowRight className="my-2 h-5 w-5 -rotate-90 text-slate-300" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Capabilities" title="The infrastructure behind every engagement" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.03} className="bg-white p-6">
              <c.icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-base text-ink-900">{c.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{c.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Curious how our systems would integrate with yours?"
        subtitle="Our implementation team can walk through integration requirements specific to your EHR and PM systems."
      />
    </>
  );
}
