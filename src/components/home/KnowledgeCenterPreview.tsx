import { Section, SectionHeading } from "@/components/ui/Section";
import { InsightCard } from "@/components/cards/InsightCard";
import { Button } from "@/components/ui/Button";
import { insights } from "@/data/insights";

const featured = insights.slice(0, 3);

export function KnowledgeCenterPreview() {
  return (
    <Section tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Knowledge Center"
          title="Practical insight from the front lines of the revenue cycle."
          className="max-w-2xl"
        />
        <Button href="/insights" variant="secondary">
          Visit the knowledge center
        </Button>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((ins, i) => (
          <InsightCard key={ins.slug} insight={ins} delay={i * 0.06} />
        ))}
      </div>
    </Section>
  );
}
