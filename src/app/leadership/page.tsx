import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { LeaderCard } from "@/components/cards/LeaderCard";
import { CTASection } from "@/components/ui/CTASection";
import { executives } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the executive and management leadership team guiding Mervanta RCM's global operations.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        breadcrumb="Leadership"
        eyebrow="Leadership"
        title="Guided by experienced healthcare and operations leadership."
        subtitle="Our executive and management team brings together healthcare operations, compliance, technology, and client leadership experience."
      />

      <Section tone="white">
        <SectionHeading eyebrow="Executive Team" title="Corporate leadership" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {executives.slice(0, 4).map((e, i) => (
            <LeaderCard key={e.slug} exec={e} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Management Team" title="Departmental leadership" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {executives.slice(4).map((e, i) => (
            <LeaderCard key={e.slug} exec={e} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Interested in joining our leadership team?"
        subtitle="We're always looking for experienced healthcare operations leaders."
        primary={{ label: "View Open Positions", href: "/careers" }}
        secondary={{ label: "Schedule a Consultation", href: "/contact" }}
      />
    </>
  );
}
