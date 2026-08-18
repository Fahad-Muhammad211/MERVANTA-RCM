import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactWizard } from "@/components/contact/ContactWizard";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description:
    "Start a conversation with Mervanta RCM — schedule a consultation or request a free RCM assessment for your healthcare organization.",
};

const details = [
  { icon: Phone, label: "Phone", value: "+1 (214) 555-0147", href: "tel:+12145550147" },
  { icon: Mail, label: "Email", value: "hello@mervantarcm.com", href: "mailto:hello@mervantarcm.com" },
  { icon: MapPin, label: "Locations", value: "View our global locations", href: "/locations" },
  { icon: Clock, label: "Response Time", value: "Typically within 1 business day", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Start a Conversation"
        title="Start a Conversation"
        subtitle="Tell us a bit about your organization and what you're looking for — a member of our team will follow up to schedule a consultation or free RCM assessment."
        size="compact"
      />

      <Section tone="slate">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <ContactWizard />

          <aside className="space-y-6">
            <div className="border border-slate-200 bg-white p-6">
              <h3 className="font-display text-lg text-ink-900">Reach us directly</h3>
              <div className="mt-4 space-y-4">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-3">
                    <d.icon className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                    <div>
                      <div className="text-xs text-slate-400">{d.label}</div>
                      {d.href ? (
                        <Link href={d.href} className="text-sm text-ink-800 hover:text-teal-600">
                          {d.value}
                        </Link>
                      ) : (
                        <div className="text-sm text-ink-800">{d.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-slate-200 bg-white p-6">
              <h3 className="font-display text-lg text-ink-900">What happens next?</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                <li>1. We review your submission within 1 business day.</li>
                <li>2. A team member reaches out to schedule a call.</li>
                <li>3. We discuss your organization&apos;s specific needs.</li>
                <li>4. You receive a tailored proposal or assessment.</li>
              </ol>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
