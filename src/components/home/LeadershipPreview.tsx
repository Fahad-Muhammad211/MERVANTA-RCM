import { Section, SectionHeading } from "@/components/ui/Section";
import { LeaderCard } from "@/components/cards/LeaderCard";
import { Button } from "@/components/ui/Button";
import { executives } from "@/data/leadership";

const featured = executives.slice(0, 4);

export function LeadershipPreview() {
  return (
    <Section tone="slate">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Leadership"
          title="Guided by experienced healthcare and operations leadership."
          className="max-w-2xl"
        />
        <Button href="/leadership" variant="secondary">
          Meet the full team
        </Button>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((e, i) => (
          <LeaderCard key={e.slug} exec={e} delay={i * 0.06} />
        ))}
      </div>
    </Section>
  );
}
