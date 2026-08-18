import {
  Database,
  Link2,
  ShieldCheck,
  LayoutDashboard,
  FileStack,
  Bell,
  Workflow,
  Cloud,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const capabilities = [
  { icon: Link2, label: "EHR / PM Integration" },
  { icon: Database, label: "Clearinghouse Connectivity" },
  { icon: LayoutDashboard, label: "Client Reporting Portal" },
  { icon: FileStack, label: "Document Management" },
  { icon: Workflow, label: "Workflow & Task Management" },
  { icon: ShieldCheck, label: "Role-Based Access Control" },
  { icon: Bell, label: "Automated Notifications" },
  { icon: Cloud, label: "Secure Cloud Infrastructure" },
];

export function TechnologyPreview() {
  return (
    <Section tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Technology & Infrastructure"
          title="Enterprise systems, integrated — not a patchwork of tools."
          subtitle="A connected technology environment built for secure data exchange, operational visibility, and reliable system uptime."
          className="max-w-2xl"
        />
        <Button href="/technology" variant="secondary">
          View technology ecosystem
        </Button>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-slate-200 md:grid-cols-4">
        {capabilities.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.04} className="flex flex-col items-start gap-3 bg-white p-6">
            <c.icon className="h-6 w-6 text-teal-600" />
            <span className="text-sm font-medium text-ink-800">{c.label}</span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
