import type { Metadata } from "next";
import { Target, Eye, ShieldCheck, Users2, Award, Scale, Compass } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/ui/Timeline";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { LeaderCard } from "@/components/cards/LeaderCard";
import { timeline } from "@/data/timeline";
import { certifications } from "@/data/certifications";
import { industryPartners } from "@/data/partners";
import { executives } from "@/data/leadership";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mervanta RCM's mission, values, leadership, organizational structure, and global operations as a healthcare revenue cycle management partner.",
};

const values = [
  { icon: ShieldCheck, title: "Integrity", description: "We handle patient and financial data with the discipline the responsibility demands." },
  { icon: Target, title: "Precision", description: "Accuracy in coding, billing, and reporting is treated as a non-negotiable operating standard." },
  { icon: Users2, title: "Partnership", description: "We operate as an extension of our clients' teams, not a detached vendor." },
  { icon: Compass, title: "Accountability", description: "Every stage of the revenue cycle has a clearly defined owner and standard." },
  { icon: Award, title: "Excellence", description: "We invest continuously in training, quality control, and process improvement." },
  { icon: Scale, title: "Transparency", description: "Clients see the same performance data we use internally to run operations." },
];

const orgLayers = [
  { title: "Executive Leadership", description: "Corporate strategy, governance, and enterprise client relationships." },
  { title: "Departmental Management", description: "Coding, billing, A/R, credentialing, QA, compliance, and IT leadership." },
  { title: "Operational Teams", description: "Specialty-aligned teams executing day-to-day revenue cycle workflows." },
  { title: "Specialist Staff", description: "Certified coders, billing specialists, and dedicated support roles." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="About Mervanta RCM"
        title="A revenue cycle organization built on operational discipline."
        subtitle="Mervanta RCM exists to give healthcare organizations a revenue cycle partner with the infrastructure, governance, and accountability of an enterprise operating company."
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Company Overview" title="Who we are" />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Mervanta RCM is a healthcare revenue cycle management organization supporting
              providers, practices, and health systems across North America, the United
              Kingdom, and Australia. We manage the full revenue cycle — from patient access
              through final reconciliation — for independent practices, multi-location groups,
              and enterprise health systems alike, combining certified specialists with
              standardized operating infrastructure to deliver consistent, transparent results.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Our Story" title="How we got here" />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Mervanta RCM was founded by a small team of healthcare operations leaders who saw
              practices losing revenue to fragmented, inconsistent billing processes. What began
              as a focused medical billing practice for a handful of independent providers has
              grown into a full-service RCM organization, expanding its service lines and global
              delivery footprint to support organizations at every scale.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="slate">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="border border-slate-200 bg-white p-8">
            <Target className="h-7 w-7 text-teal-600" />
            <h3 className="mt-4 font-display text-2xl text-ink-900">Mission</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              To give healthcare organizations of every size the operational infrastructure,
              expertise, and transparency required to manage revenue with confidence.
            </p>
          </Reveal>
          <Reveal delay={0.06} className="border border-slate-200 bg-white p-8">
            <Eye className="h-7 w-7 text-teal-600" />
            <h3 className="mt-4 font-display text-2xl text-ink-900">Vision</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              To be recognized as the most operationally disciplined revenue cycle partner in
              healthcare — trusted at any scale, in any market we serve.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Core Values" title="What guides how we operate" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05} className="bg-white p-7">
              <v.icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-lg text-ink-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading
          eyebrow="Company Milestones"
          title="Our path to current scale"
          subtitle="From a single-city billing practice to a global revenue cycle organization."
          align="center"
        />
        <div className="mt-14">
          <Timeline milestones={timeline} />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Organizational Structure" title="How the organization is structured" align="center" />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {orgLayers.map((layer, i) => (
            <Reveal key={layer.title} delay={i * 0.06} className="relative border border-slate-200 bg-white p-6">
              <div className="font-display text-sm text-slate-300">{`0${i + 1}`}</div>
              <h3 className="mt-2 font-display text-lg text-ink-900">{layer.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{layer.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/people" variant="secondary">Explore our people &amp; expertise</Button>
        </div>
      </Section>

      <Section tone="slate">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Leadership" title="Executive &amp; management leadership" className="max-w-2xl" />
          <Button href="/leadership" variant="secondary">View full leadership team</Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {executives.slice(0, 4).map((e, i) => (
            <LeaderCard key={e.slug} exec={e} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Global Operations" title="A coordinated global footprint" />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Corporate headquarters, regional offices, and global delivery centers operate under
              shared standards, reporting, and quality controls across North America, the United
              Kingdom, Australia, and international delivery locations.
            </p>
            <div className="mt-6">
              <Button href="/global-presence" variant="secondary">View global presence</Button>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Corporate Governance" title="Oversight &amp; accountability" />
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
              <li>— Executive leadership accountable for enterprise strategy and risk oversight</li>
              <li>— Dedicated compliance function monitoring regulatory and payer policy adherence</li>
              <li>— Structured internal audit and quality assurance programs</li>
              <li>— Documented policies governing data privacy, security, and ethical conduct</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Certifications & Memberships" title="Standards we hold ourselves to" align="center" />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {certifications.map((c) => (
            <Badge key={c.name} tone="slate">{c.name}</Badge>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          Industry memberships: {industryPartners.map((p) => p.name).join(" · ")}
        </div>
        <div className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-500">
          See our full <a href="/security-compliance" className="text-teal-600 underline underline-offset-2 hover:text-teal-700">Security &amp; Compliance</a> program for details on our standards and safeguards.
        </div>
      </Section>

      <CTASection
        title="Want to learn more about how we operate?"
        subtitle="Speak with our team about how Mervanta RCM's operational model can support your organization."
      />
    </>
  );
}
