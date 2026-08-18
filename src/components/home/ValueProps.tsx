import { Layers, ShieldCheck, LineChart, Users2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const props = [
  {
    icon: Layers,
    title: "Operational Infrastructure",
    description:
      "Standardized workflows, role-based teams, and layered quality control built to run at enterprise volume — not ad hoc processes stretched past their limits.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance by Design",
    description:
      "HIPAA-aligned safeguards, access controls, and audit trails embedded into every stage of the revenue cycle, not bolted on afterward.",
  },
  {
    icon: LineChart,
    title: "Transparent Performance",
    description:
      "Provider-level, location-level, and payer-level reporting that gives leadership real visibility into revenue cycle health — not vague monthly summaries.",
  },
  {
    icon: Users2,
    title: "Dedicated Expertise",
    description:
      "Certified coders, billing specialists, and account teams organized around your specialty mix — with dedicated points of accountability at every level.",
  },
];

export function ValueProps() {
  return (
    <Section tone="paper">
      <SectionHeading
        eyebrow="Why Mervanta"
        title="A revenue cycle partner built like an operating company — not a back-office vendor."
        subtitle="Healthcare organizations don't need another billing service. They need an operational partner with the infrastructure, discipline, and accountability to manage revenue at scale."
      />
      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
        {props.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06} className="flex flex-col bg-white p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-900 text-teal-300">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg text-ink-900">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
