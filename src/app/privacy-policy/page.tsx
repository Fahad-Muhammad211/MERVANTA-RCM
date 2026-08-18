import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Mervanta RCM's privacy policy governing the collection and use of personal information.",
};

const sections = [
  {
    title: "1. Scope",
    body: "This Privacy Policy describes how Mervanta RCM (“we,” “us,” or “our”) collects, uses, and discloses information in connection with our website and business operations. It does not apply to protected health information (PHI) processed on behalf of clients under a Business Associate Agreement, which is governed separately under HIPAA and the applicable BAA.",
  },
  {
    title: "2. Information We Collect",
    body: "We may collect information you voluntarily provide through forms on this website (such as name, organization, email, and phone number), as well as standard technical information collected automatically (such as browser type, device information, and usage data) to operate and improve this website.",
  },
  {
    title: "3. How We Use Information",
    body: "Information submitted through this website is used to respond to inquiries, evaluate potential engagements, provide requested resources, and improve our website and services. We do not sell personal information collected through this website.",
  },
  {
    title: "4. Information Sharing",
    body: "We do not share personal information collected through this website with third parties except as necessary to operate our business (e.g., service providers who support our systems), to comply with legal obligations, or with your consent.",
  },
  {
    title: "5. Data Security",
    body: "We maintain administrative, technical, and physical safeguards designed to protect information from unauthorized access, use, or disclosure, consistent with our broader security program described on our Security & Compliance page.",
  },
  {
    title: "6. Your Choices",
    body: "You may contact us at any time to ask about the information we hold about you or to request that we delete information you have submitted through this website, subject to applicable legal and business requirements.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Material changes will be reflected by an updated effective date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero breadcrumb="Privacy Policy" eyebrow="Legal" title="Privacy Policy" size="compact" />
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
