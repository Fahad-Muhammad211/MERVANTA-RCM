import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import type { NewsItem } from "@/data/newsroom";

export function NewsCard({ item, delay = 0 }: { item: NewsItem; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/newsroom/${item.slug}`}
        className="group flex items-start justify-between gap-6 border-b border-slate-200 py-6 transition-colors duration-200 hover:border-teal-300"
      >
        <div>
          <div className="flex items-center gap-3">
            <Badge tone="slate">{item.type}</Badge>
            <span className="text-xs text-slate-400">{item.date}</span>
          </div>
          <h3 className="mt-3 font-display text-xl text-ink-900 group-hover:text-teal-600">
            {item.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">{item.summary}</p>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-600" />
      </Link>
    </Reveal>
  );
}
