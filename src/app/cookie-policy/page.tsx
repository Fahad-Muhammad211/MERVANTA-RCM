import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Mervanta RCM uses cookies and similar technologies on this website.",
};

const cookieTypes = [
  { title: "Essential Cookies", body: "Required for core website functionality, such as navigation and security. These cannot be disabled." },
  { title: "Analytics Cookies", body: "Help us understand how visitors interact with our website so we can improve content and usability." },
  { title: "Preference Cookies", body: "Remember choices you make on the website to provide a more personalized experience." },
];

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero breadcrumb="Cookie Policy" eyebrow="Legal" title="Cookie Policy" size="compact" />
      <Section tone="white" containerSize="narrow">
        <p className="text-sm text-slate-400">Effective date: January 1, 2026</p>
        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          This website may use cookies and similar technologies to operate reliably, understand
          usage patterns, and improve the visitor experience. You can control cookie preferences
          through your browser settings at any time.
        </p>
        <div className="mt-10 space-y-8">
          {cookieTypes.map((c) => (
            <div key={c.title}>
              <h2 className="font-display text-xl text-ink-900">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
