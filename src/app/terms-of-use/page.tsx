import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use governing access to the Mervanta RCM website.",
};

const sections = [
  { title: "1. Acceptance of Terms", body: "By accessing this website, you agree to be bound by these Terms of Use. If you do not agree, please discontinue use of this website." },
  { title: "2. Use of Website", body: "This website and its contents are provided for informational purposes. You agree not to misuse the website, attempt unauthorized access to our systems, or use the website in violation of applicable law." },
  { title: "3. Intellectual Property", body: "All content on this website, including text, graphics, and design elements, is the property of Mervanta RCM or its licensors and may not be reproduced without permission." },
  { title: "4. No Professional Advice", body: "Content on this website is provided for general informational purposes and does not constitute legal, financial, medical, or coding/billing advice for any specific situation." },
  { title: "5. Third-Party Links", body: "This website may contain links to third-party websites. We are not responsible for the content or practices of any linked third-party site." },
  { title: "6. Limitation of Liability", body: "To the fullest extent permitted by law, Mervanta RCM shall not be liable for any indirect, incidental, or consequential damages arising from use of this website." },
  { title: "7. Changes to These Terms", body: "We may update these Terms of Use from time to time. Continued use of the website constitutes acceptance of the revised terms." },
];

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero breadcrumb="Terms of Use" eyebrow="Legal" title="Terms of Use" size="compact" />
      <Section tone="white" containerSize="narrow">
        <p className="text-sm text-slate-400">Effective date: January 1, 2026</p>
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl text-ink-900">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
