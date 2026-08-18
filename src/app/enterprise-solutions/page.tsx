import type { Metadata } from "next";
import {
  Network, Building2, Layers, Landmark, TrendingUp, BarChart3,
  UserSquare2, MapPin, Handshake, Workflow, Users2, Rocket, Gauge,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessFlow } from "@/components/ui/ProcessFlow";
import { CTASection } from "@/components/ui/CTASection";
import { EnterpriseArchitecture } from "@/components/home/EnterpriseArchitecture";

export const metadata: Metadata = {
  title: "Enterprise Solutions",
  description:
    "Enterprise RCM solutions for multi-location, multi-TIN, and multi-specialty healthcare organizations — centralized billing, A/R, and reporting infrastructure.",
};

const capabilities = [
  { icon: Network, title: "Multi-Location RCM", description: "One operating model applied consistently across every location." },
  { icon: Landmark, title: "Multi-TIN Management", description: "Structured billing and reporting across multiple tax ID entities." },
  { icon: Layers, title: "Multi-Specialty Operations", description: "Specialty-aligned coding and billing within one unified operation." },
  { icon: Building2, title: "Centralized Billing", description: "A single billing operation replacing fragmented, location-level processes." },
  { icon: TrendingUp, title: "Centralized A/R", description: "Unified accounts receivable management across the full organization." },
  { icon: BarChart3, title: "Enterprise Reporting", description: "Consolidated reporting spanning every location, provider, and payer." },
  { icon: UserSquare2, title: "Provider-Level Reporting", description: "Individual provider performance visibility within the enterprise view." },
  { icon: MapPin, title: "Location-Level Reporting", description: "Location-by-location performance benchmarking." },
  { icon: Handshake, title: "Payer-Level Reporting", description: "Payer performance and contract analysis across the enterprise." },
  { icon: Workflow, title: "Standardized Workflows", description: "One documented operating standard, applied without variation." },
  { icon: Users2, title: "Dedicated Account Teams", description: "A named team accountable for enterprise performance and escalation." },
  { icon: Rocket, title: "Enterprise Implementation", description: "A structured, phased onboarding model built for complex organizations." },
  { icon: Gauge, title: "Scalable Operations", description: "Operational capacity that grows with acquisition and expansion." },
];

const implementationSteps = [
  { title: "Discovery & Assessment", description: "Current-state workflows, systems, and reporting are assessed." },
  { title: "Architecture Design", description: "A centralized RCM structure is designed around your organization." },
  { title: "Phased Onboarding", description: "Locations and specialties are onboarded in a sequenced rollout." },
  { title: "Parallel Validation", description: "New workflows run in parallel with legacy processes to validate accuracy." },
  { title: "Full Transition", description: "Operations transition fully to the centralized model." },
  { title: "Ongoing Governance", description: "Dedicated account teams manage performance and continuous improvement." },
];

export default function EnterpriseSolutionsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Enterprise Solutions"
        eyebrow="Enterprise Solutions"
        title="Centralized RCM architecture for complex healthcare organizations."
        subtitle="Multi-location, multi-TIN, and multi-specialty organizations require more than a bigger billing team — they require a centralized operating architecture."
        primary={{ label: "Request an RCM Assessment", href: "/contact" }}
      />

      <Section tone="white">
        <SectionHeading eyebrow="Capabilities" title="What enterprise support includes" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.03} className="bg-white p-6">
              <c.icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-lg text-ink-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <EnterpriseArchitecture />

      <Section tone="white">
        <SectionHeading
          eyebrow="Enterprise Implementation"
          title="A structured path from fragmented to centralized"
          align="center"
        />
        <div className="mt-14">
          <ProcessFlow steps={implementationSteps} />
        </div>
      </Section>

      <CTASection
        title="Managing a multi-location or multi-TIN organization?"
        subtitle="Let's talk about how a centralized RCM architecture would work for your organization."
      />
    </>
  );
}
