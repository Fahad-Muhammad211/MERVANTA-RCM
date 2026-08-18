import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { newsItems } from "@/data/newsroom";

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        breadcrumb={`Newsroom / ${item.title}`}
        eyebrow={item.type}
        title={item.title}
        subtitle={item.date}
        size="compact"
      />
      <Section tone="white" containerSize="narrow">
        <Badge tone="slate">{item.type}</Badge>
        <div className="mt-8 space-y-6">
          {item.body.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-slate-700">{para}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
