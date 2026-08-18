import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/ui/CTASection";
import { InsightCard } from "@/components/cards/InsightCard";
import { insights } from "@/data/insights";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return {};
  return { title: insight.title, description: insight.summary };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  const related = insights.filter((i) => i.category === insight.category && i.slug !== insight.slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb={`Insights / ${insight.title}`}
        eyebrow={`${insight.type} · ${insight.readTime}`}
        title={insight.title}
        subtitle={insight.summary}
        size="compact"
      />

      <Section tone="white" containerSize="narrow">
        <div className="flex items-center gap-3">
          <Badge tone="teal">{insight.category}</Badge>
          <span className="text-xs text-slate-400">{insight.date}</span>
        </div>
        <div className="prose-mervanta mt-8 space-y-6">
          {insight.body.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="slate">
          <h2 className="font-display text-2xl text-ink-900">More in {insight.category}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((r, i) => (
              <InsightCard key={r.slug} insight={r} delay={i * 0.05} />
            ))}
          </div>
        </Section>
      )}

      <CTASection
        title="Want to talk through how this applies to your organization?"
        subtitle="Our team can walk through this topic in the context of your specific revenue cycle."
      />
    </>
  );
}
