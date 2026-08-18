import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => service.related.includes(s.slug));

  return (
    <>
      <PageHero
        breadcrumb={`Services / ${service.name}`}
        eyebrow={service.category}
        title={service.name}
        subtitle={service.shortDescription}
        primary={{ label: "Get a Free RCM Assessment", href: "/contact" }}
        secondary={{ label: "Schedule a Consultation", href: "/contact" }}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_320px]">
          <div>
            <SectionHeading eyebrow="Overview" title="What this service covers" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
              {service.overview}
            </p>

            <div className="mt-14">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Process</div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.process.map((step, i) => (
                  <Reveal key={step.title} delay={i * 0.05} className="border border-slate-200 bg-white p-5">
                    <div className="font-display text-2xl text-slate-200">{`0${i + 1}`}</div>
                    <h3 className="mt-1 font-display text-lg text-ink-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.description}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Key Responsibilities
                </div>
                <ul className="mt-4 space-y-2.5">
                  {service.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-ink-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Benefits
                </div>
                <ul className="mt-4 space-y-2.5">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 border-t border-slate-200 pt-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <ShieldCheck className="h-4 w-4 text-teal-500" /> Quality Controls
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {service.qualityControls.map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-ink-900 text-teal-300">
              <Icon name={service.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-xl text-ink-900">Related Services</h3>
            <ul className="mt-4 space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="block rounded-md border border-slate-200 px-4 py-3 text-sm font-medium text-ink-800 transition-colors hover:border-teal-300 hover:text-teal-600"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 flex items-center justify-center rounded-md bg-teal-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-600"
            >
              Request this service
            </Link>
          </aside>
        </div>
      </Section>

      <CTASection
        title={`Ready to get started with ${service.name}?`}
        subtitle="Tell us about your organization and we'll walk you through how this service fits your revenue cycle."
      />
    </>
  );
}
