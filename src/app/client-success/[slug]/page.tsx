import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Quote } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";
import { caseStudies } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return { title: study.clientProfile, description: study.challenge };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <>
      <PageHero
        breadcrumb={`Client Success / ${study.clientProfile}`}
        eyebrow={study.specialty}
        title={study.clientProfile}
        subtitle={study.organizationSize}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <div>
              <Badge tone="slate">Challenge</Badge>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{study.challenge}</p>
            </div>
            <div>
              <Badge tone="slate">Current Situation</Badge>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{study.currentSituation}</p>
            </div>
            <div>
              <Badge tone="teal">Our Approach</Badge>
              <ul className="mt-4 space-y-2.5">
                {study.approach.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm leading-relaxed text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Badge tone="slate">Implementation</Badge>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{study.implementation}</p>
            </div>
            <div>
              <Badge tone="teal">Process Improvements</Badge>
              <ul className="mt-4 space-y-2.5">
                {study.processImprovements.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Badge tone="gold">Results</Badge>
              <ul className="mt-4 space-y-2.5">
                {study.results.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm leading-relaxed text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="border border-slate-200 bg-slate-50 p-6">
              <Quote className="h-6 w-6 text-teal-500" />
              <p className="mt-4 font-display text-lg leading-relaxed text-ink-800">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <div className="mt-4 border-t border-slate-200 pt-3 text-sm font-medium text-ink-700">
                {study.testimonial.attribution}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <CTASection
        title="Facing a similar challenge?"
        subtitle="Tell us about your organization and we'll walk through how a similar approach could apply."
      />
    </>
  );
}
