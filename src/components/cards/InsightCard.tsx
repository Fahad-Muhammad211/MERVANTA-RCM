import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import type { Insight } from "@/data/insights";

export function InsightCard({ insight, delay = 0 }: { insight: Insight; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/insights/${insight.slug}`}
        className="group flex h-full flex-col justify-between border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-[0_16px_40px_-16px_rgba(10,22,38,0.18)]"
      >
        <div>
          <div className="flex items-center gap-2">
            <Badge tone="teal">{insight.category}</Badge>
            <span className="text-xs text-slate-400">{insight.type}</span>
          </div>
          <h3 className="mt-4 font-display text-xl leading-snug text-ink-900">{insight.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{insight.summary}</p>
        </div>
        <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
          <span>{insight.readTime}</span>
          <span className="flex items-center gap-1 font-medium text-teal-600">
            Read
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
