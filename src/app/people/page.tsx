import type { Metadata } from "next";
import {
  Stethoscope, Receipt, TrendingUp, IdCard, ShieldCheck, Scale,
  UserSquare2, Settings2, Server, HeadphonesIcon, Users2, ArrowDown,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "People & Expertise",
  description:
    "Meet the departments and expertise behind Mervanta RCM — certified coders, billing specialists, A/R teams, compliance, and dedicated account teams.",
};

const departments = [
  { icon: Stethoscope, title: "Certified Coders", description: "AAPC/AHIMA-aligned coding professionals across general and specialty service lines." },
  { icon: Receipt, title: "Billing Specialists", description: "Claim lifecycle management from charge review through resolution." },
  { icon: TrendingUp, title: "A/R Specialists", description: "Structured follow-up on aged claims and outstanding balances." },
  { icon: IdCard, title: "Credentialing Specialists", description: "Payer and facility credentialing and enrollment management." },
  { icon: ShieldCheck, title: "QA Specialists", description: "Multi-level quality review across coding, billing, and claims." },
  { icon: Scale, title: "Compliance Team", description: "Regulatory and payer policy monitoring and internal auditing." },
  { icon: UserSquare2, title: "Account Managers", description: "Dedicated client relationship and performance ownership." },
  { icon: Settings2, title: "Operations Managers", description: "Day-to-day workflow oversight and performance management." },
  { icon: Server, title: "IT & Security Team", description: "Systems, integrations, and information security operations." },
  { icon: HeadphonesIcon, title: "Client Success Team", description: "Onboarding, business reviews, and ongoing client support." },
];

const structure = [
  { title: "Executive Leadership", description: "Strategy, governance, enterprise accounts" },
  { title: "Department Directors", description: "Coding, billing, A/R, compliance, IT leadership" },
  { title: "Team Supervisors", description: "Day-to-day performance and quality management" },
  { title: "Specialist Staff", description: "Certified coders, billing, and support specialists" },
];

export default function PeoplePage() {
  return (
    <>
      <PageHero
        breadcrumb="People & Expertise"
        eyebrow="People & Expertise"
        title="A trained, structured workforce — not a rotating pool of contractors."
        subtitle="Every engagement is supported by dedicated departments of certified specialists, organized around clear roles, accountability, and career development."
      />

      <Section tone="white">
        <SectionHeading eyebrow="Our Departments" title="The teams behind every engagement" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-5">
          {departments.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.03} className="bg-white p-6">
              <d.icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-base text-ink-900">{d.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{d.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Team Structure" title="How our teams are organized" align="center" />
        <div className="mx-auto mt-14 flex max-w-md flex-col items-center gap-2">
          {structure.map((s, i) => (
            <div key={s.title} className="flex w-full flex-col items-center">
              <Reveal delay={i * 0.06} className="w-full rounded-lg border border-slate-200 bg-white px-6 py-4 text-center">
                <div className="font-display text-base text-ink-900">{s.title}</div>
                <div className="mt-1 text-xs text-slate-500">{s.description}</div>
              </Reveal>
              {i < structure.length - 1 && <ArrowDown className="my-1.5 h-4 w-4 text-slate-300" />}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Dedicated Account Teams" title="A named team, not a ticket queue" />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Every client is supported by a dedicated account team with direct accountability
              for performance — not a rotating pool of anonymous agents. Your account manager,
              operations lead, and specialist team stay consistent over the life of the
              engagement.
            </p>
          </div>
          <Reveal className="flex items-center justify-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-10">
            <Users2 className="h-10 w-10 text-teal-600" />
            <div className="text-sm text-slate-600">
              Account Manager · Operations Lead · Specialty Coding Team · QA Reviewer
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Want to meet the team that would support your organization?"
        subtitle="We'll introduce you to the account structure proposed for your engagement."
      />
    </>
  );
}
