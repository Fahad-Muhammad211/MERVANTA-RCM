import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Mervanta RCM's commitment to digital accessibility.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero breadcrumb="Accessibility" eyebrow="Accessibility" title="Accessibility Statement" size="compact" />
      <Section tone="white" containerSize="narrow">
        <p className="text-sm text-slate-400">Effective date: January 1, 2026</p>
        <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-600">
          <p>
            Mervanta RCM is committed to ensuring this website is accessible to the widest
            possible audience, including people with disabilities. We aim to align this website
            with the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.
          </p>
          <p>
            Ongoing efforts include structured heading hierarchy, keyboard-navigable interactive
            elements, sufficient color contrast, descriptive link text, and alternative text for
            meaningful imagery.
          </p>
          <p>
            If you encounter an accessibility barrier while using this website, please contact
            our team so we can address the issue.
          </p>
        </div>
      </Section>
    </>
  );
}
