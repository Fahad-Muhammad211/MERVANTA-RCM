import type { Metadata } from "next";
import {
  Lock, ShieldCheck, KeyRound, FileClock, DatabaseBackup, LifeBuoy,
  FileWarning, GraduationCap, AlertOctagon, Siren, UserCog, ArrowDown,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";
import { certifications, securityPillars } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description:
    "Mervanta RCM's HIPAA-aligned security and compliance program — data encryption, access controls, audit trails, and incident response.",
};

const iconMap: Record<string, typeof Lock> = {
  "Data Encryption": Lock,
  "Secure Data Transmission": ShieldCheck,
  "Role-Based Access Control": KeyRound,
  "Audit Logging": FileClock,
  "Data Backup & Recovery": DatabaseBackup,
  "Disaster Recovery": LifeBuoy,
  "Employee Security Training": GraduationCap,
  "Incident Response": Siren,
};

const architectureLayers = [
  { title: "Perimeter & Access", items: ["Role-based access control", "Multi-factor authentication", "Network access controls"] },
  { title: "Data Protection", items: ["Encryption in transit & at rest", "Secure data transmission", "Data loss prevention controls"] },
  { title: "Monitoring & Response", items: ["Audit logging", "Incident response protocol", "Continuous risk monitoring"] },
  { title: "Continuity", items: ["Data backup", "Disaster recovery", "Business continuity planning"] },
];

const additionalControls = [
  { icon: FileWarning, title: "Privacy Controls", description: "Data minimization and access limitation aligned with HIPAA privacy requirements." },
  { icon: AlertOctagon, title: "Risk Management", description: "Ongoing risk assessment across systems, vendors, and operational processes." },
  { icon: UserCog, title: "Security Policies", description: "Documented policies governing acceptable use, access, and data handling." },
];

export default function SecurityCompliancePage() {
  return (
    <>
      <PageHero
        breadcrumb="Security & Compliance"
        eyebrow="Security & Compliance"
        title="HIPAA-aligned safeguards built into every layer of operation."
        subtitle="Protecting patient and client data is treated as a core operating requirement — not an afterthought. Our security program spans people, process, and technology."
      />

      <Section tone="white">
        <SectionHeading eyebrow="Core Safeguards" title="What our security program includes" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {securityPillars.map((p, i) => {
            const IconCmp = iconMap[p.title] ?? ShieldCheck;
            return (
              <Reveal key={p.title} delay={i * 0.04} className="bg-white p-6">
                <IconCmp className="h-6 w-6 text-teal-600" />
                <h3 className="mt-4 font-display text-base text-ink-900">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{p.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading
          eyebrow="Security Architecture"
          title="A layered security model"
          subtitle="Each layer is designed to reduce risk independently — so a gap in one control doesn't compromise the whole system."
          align="center"
          tone="light"
        />
        <div className="mx-auto mt-14 flex max-w-md flex-col items-center gap-2">
          {architectureLayers.map((layer, i) => (
            <div key={layer.title} className="flex w-full flex-col items-center">
              <Reveal delay={i * 0.06} className="w-full rounded-lg border border-white/15 bg-white/[0.05] p-5">
                <div className="text-center font-display text-base text-white">{layer.title}</div>
                <ul className="mt-3 space-y-1.5">
                  {layer.items.map((item) => (
                    <li key={item} className="text-center text-xs text-slate-400">{item}</li>
                  ))}
                </ul>
              </Reveal>
              {i < architectureLayers.length - 1 && <ArrowDown className="my-1.5 h-4 w-4 text-slate-600" />}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Additional Controls" title="Beyond the technical layer" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {additionalControls.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className="border border-slate-200 bg-white p-6">
              <c.icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-lg text-ink-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Certifications & Frameworks" title="Standards we align to" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05} className="border border-slate-200 bg-white p-6">
              <Badge tone="teal">{c.name}</Badge>
              <h3 className="mt-4 font-display text-lg text-ink-900">{c.fullName}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Business Associate Agreement" title="Contractual accountability" align="center" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-600">
          A signed Business Associate Agreement (BAA) is executed with every client prior to the
          exchange of protected health information, establishing clear contractual obligations
          around data handling, breach notification, and permitted use.
        </p>
      </Section>

      <CTASection
        title="Have security or compliance questions for your organization?"
        subtitle="Our compliance team can walk through our safeguards in the context of your specific requirements."
      />
    </>
  );
}
