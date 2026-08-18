import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { InsightsExplorer } from "@/components/insights/InsightsExplorer";
import { insights, insightCategories } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights & Knowledge Center",
  description:
    "Practical insight on medical billing, coding, RCM, compliance, and healthcare operations from Mervanta RCM.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Insights"
        eyebrow="Knowledge Center"
        title="Practical insight from the front lines of the revenue cycle."
        subtitle="Guides, industry updates, and operational insight for healthcare leaders managing revenue cycle performance."
      />

      <Section tone="white">
        <InsightsExplorer insights={insights} categories={insightCategories} />
      </Section>

      <CTASection
        title="Have a topic you'd like us to cover?"
        subtitle="Reach out to our team with topics or questions relevant to your organization."
      />
    </>
  );
}
