import type { Metadata } from "next";
import {
  ShieldCheck, Scale, GraduationCap, Users2, Accessibility, Leaf,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Corporate Responsibility",
  description:
    "Mervanta RCM's approach to corporate responsibility — patient data protection, ethical business practices, employee development, and community engagement.",
};

const pillars = [
  {
    icon: ShieldCheck,
    title: "Patient Data Protection",
    description:
      "We treat protected health information with the same rigor as our own most sensitive data — governed by documented security policy, access controls, and regular internal review.",
  },
  {
    icon: Scale,
    title: "Ethical Business Practices",
    description:
      "Our operations are guided by documented codes of conduct governing client relationships, vendor engagement, and internal decision-making.",
  },
  {
    icon: GraduationCap,
    title: "Employee Development",
    description:
      "We invest in structured training and career development, treating our workforce's professional growth as core to long-term service quality.",
  },
  {
    icon: Users2,
    title: "Community Initiatives",
    description:
      "Our teams participate in local volunteer days and support healthcare access programs in the communities surrounding our operating centers.",
  },
  {
    icon: Accessibility,
    title: "Healthcare Accessibility",
    description:
      "By strengthening the operational and financial stability of healthcare providers, our work supports the broader goal of sustained access to care.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "As a largely digital operation, we prioritize paperless workflows and energy-efficient facilities across our offices and delivery centers.",
  },
];

export default function CorporateResponsibilityPage() {
  return (
    <>
      <PageHero
        breadcrumb="Corporate Responsibility"
        eyebrow="Corporate Responsibility"
        title="Operating with the standards our role in healthcare demands."
        subtitle="As stewards of sensitive patient and financial data, we hold ourselves to a defined standard of responsibility across our operations, workforce, and communities."
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="bg-white p-7">
              <p.icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-lg text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Questions about our responsibility program?"
        subtitle="Reach out to our compliance team for more detail on any of these areas."
      />
    </>
  );
}
