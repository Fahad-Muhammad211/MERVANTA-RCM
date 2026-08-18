import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Executive } from "@/data/leadership";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function LeaderCard({ exec, delay = 0 }: { exec: Executive; delay?: number }) {
  return (
    <Reveal delay={delay} className="group border border-slate-200 bg-white p-6">
      <div className="flex aspect-[4/5] items-center justify-center bg-ink-900">
        <span className="font-display text-5xl text-teal-300">{initials(exec.name)}</span>
      </div>
      <div className="mt-5">
        <h3 className="font-display text-xl text-ink-900">{exec.name}</h3>
        <div className="mt-0.5 text-sm font-medium text-teal-600">{exec.title}</div>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">{exec.bio}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {exec.experienceAreas.map((a) => (
            <span key={a} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
              {a}
            </span>
          ))}
        </div>
        <a
          href={exec.linkedinUrl}
          className="mt-4 flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-teal-600"
        >
          <ExternalLink className="h-3.5 w-3.5" /> View LinkedIn Profile
        </a>
      </div>
    </Reveal>
  );
}
