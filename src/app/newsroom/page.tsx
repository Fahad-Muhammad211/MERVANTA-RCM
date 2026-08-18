import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { NewsCard } from "@/components/cards/NewsCard";
import { CTASection } from "@/components/ui/CTASection";
import { newsItems } from "@/data/newsroom";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Company news, press releases, announcements, and events from Mervanta RCM.",
};

export default function NewsroomPage() {
  return (
    <>
      <PageHero
        breadcrumb="Newsroom"
        eyebrow="Newsroom"
        title="Company news &amp; announcements."
        subtitle="Press releases, announcements, event participation, and media coverage."
      />

      <Section tone="white">
        <div>
          {newsItems.map((item, i) => (
            <NewsCard key={item.slug} item={item} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Media inquiries"
        subtitle="For press or media inquiries, please contact our team directly."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "About Mervanta RCM", href: "/about" }}
      />
    </>
  );
}
