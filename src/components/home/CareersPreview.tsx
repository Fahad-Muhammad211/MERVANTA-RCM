import { Section, SectionHeading } from "@/components/ui/Section";
import { JobCard } from "@/components/cards/JobCard";
import { Button } from "@/components/ui/Button";
import { jobs } from "@/data/jobs";

const featured = jobs.slice(0, 3);

export function CareersPreview() {
  return (
    <Section tone="white">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Careers"
            title="Build your career inside a growing global healthcare operation."
            subtitle="We invest in structured training, clear growth paths, and a culture built around accountability and craft — not just headcount."
          />
          <div className="mt-8">
            <Button href="/careers" variant="secondary">
              View open positions
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {featured.map((j, i) => (
            <JobCard key={j.slug} job={j} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </Section>
  );
}
