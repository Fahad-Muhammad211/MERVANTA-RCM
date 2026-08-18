import {
  Stethoscope,
  Users,
  Building2,
  Hospital,
  FlaskConical,
  Scan,
  Clock,
  Video,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const clientTypes = [
  { icon: Stethoscope, label: "Independent Practices" },
  { icon: Users, label: "Multi-Specialty Groups" },
  { icon: Building2, label: "Physician Groups & Clinics" },
  { icon: Hospital, label: "Hospitals & Health Systems" },
  { icon: Scan, label: "Ambulatory Surgery Centers" },
  { icon: FlaskConical, label: "Laboratories & Diagnostics" },
  { icon: Clock, label: "Urgent Care Organizations" },
  { icon: Video, label: "Telehealth Organizations" },
];

export function WhoWeServePreview() {
  return (
    <Section tone="slate">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Who We Serve"
          title="From single-location practices to enterprise health systems."
          className="max-w-2xl"
        />
        <Button href="/who-we-serve" variant="secondary">
          Explore who we serve
        </Button>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-slate-200 md:grid-cols-4">
        {clientTypes.map((c, i) => (
          <Reveal
            key={c.label}
            delay={i * 0.04}
            className="flex flex-col items-start gap-3 bg-white p-6"
          >
            <c.icon className="h-6 w-6 text-teal-600" />
            <span className="text-sm font-medium text-ink-800">{c.label}</span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
