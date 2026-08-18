import { ShieldCheck, Lock, KeyRound, FileClock } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { certifications } from "@/data/certifications";

const pillars = [
  { icon: Lock, title: "Data Encryption", desc: "In transit and at rest, across every system handling PHI." },
  { icon: KeyRound, title: "Role-Based Access", desc: "Access scoped to job function and reviewed regularly." },
  { icon: FileClock, title: "Audit Trails", desc: "Comprehensive logging across client and patient data systems." },
  { icon: ShieldCheck, title: "Incident Response", desc: "Documented protocols with defined escalation paths." },
];

export function SecurityPreview() {
  return (
    <Section tone="white">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Security & Compliance"
            title="HIPAA-aligned safeguards built into every layer of operation."
            subtitle="Protecting patient and client data isn't a feature — it's the operating standard across our people, processes, and systems."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {certifications.map((c) => (
              <Badge key={c.name} tone="slate">{c.name}</Badge>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/security-compliance" variant="secondary">
              Explore our security program
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="bg-white p-6">
              <p.icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-lg text-ink-900">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
