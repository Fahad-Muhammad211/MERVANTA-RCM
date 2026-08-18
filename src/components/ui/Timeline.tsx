import { Reveal } from "./Reveal";
import type { TimelineMilestone } from "@/data/timeline";

export function Timeline({ milestones }: { milestones: TimelineMilestone[] }) {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-5 hidden h-px bg-slate-200 md:block" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-6">
        {milestones.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.06} className="relative flex flex-col">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal-500 bg-white">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
            </div>
            <div className="mt-4 font-display text-lg text-ink-900">{m.title}</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-teal-600">
              {m.year}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{m.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
