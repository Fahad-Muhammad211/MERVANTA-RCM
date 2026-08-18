import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/ui/CTASection";
import { specialties } from "@/data/specialties";
import { services } from "@/data/services";

export function generateStaticParams() {
  return specialties.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialty = specialties.find((s) => s.slug === slug);
  if (!specialty) return {};
  return {
    title: `${specialty.name} Billing & RCM`,
    description: `Revenue cycle management and medical billing support for ${specialty.name.toLowerCase()} practices and organizations.`,
  };
}

const relatedServiceSlugs = ["medical-billing", "medical-coding", "denial-management", "prior-authorization"];

export default async function SpecialtyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialty = specialties.find((s) => s.slug === slug);
  if (!specialty) notFound();

  const relatedServices = services.filter((s) => relatedServiceSlugs.includes(s.slug));

  return (
    <>
      <PageHero
        breadcrumb={`Specialties / ${specialty.name}`}
        eyebrow={specialty.group}
        title={`${specialty.name} Billing &amp; Revenue Cycle Management`}
        subtitle={`Specialty-aligned coding, billing, and revenue cycle support built around the operational realities of ${specialty.name.toLowerCase()}.`}
        primary={{ label: "Get a Free RCM Assessment", href: "/contact" }}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="border border-slate-200 bg-white p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-signal-red">
              <AlertTriangle className="h-4 w-4" /> Common Billing Challenges
            </div>
            <ul className="mt-5 space-y-3">
              {specialty.billingChallenges.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm leading-relaxed text-ink-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-red" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-slate-200 bg-white p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
              <CheckCircle2 className="h-4 w-4" /> Our RCM Capabilities
            </div>
            <ul className="mt-5 space-y-3">
              {specialty.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm leading-relaxed text-ink-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Related Services" title="Services relevant to this specialty" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((s) => (
            <a
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-teal-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <Icon name={s.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg text-ink-900">{s.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{s.shortDescription}</p>
            </a>
          ))}
        </div>
      </Section>

      <CTASection
        title={`Ready to strengthen your ${specialty.name.toLowerCase()} revenue cycle?`}
        subtitle="Talk with our team about the specific billing and coding challenges your organization is facing."
      />
    </>
  );
}
