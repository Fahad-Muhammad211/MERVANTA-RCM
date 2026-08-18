import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyCard({ study, delay = 0 }: { study: CaseStudy; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/client-success/${study.slug}`}
        className="group flex h-full flex-col justify-between border border-slate-200 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-[0_16px_40px_-16px_rgba(10,22,38,0.18)]"
      >
        <div>
          <Badge tone="slate">{study.specialty}</Badge>
          <h3 className="mt-4 font-display text-2xl text-ink-900">{study.clientProfile}</h3>
          <div className="mt-1 text-xs text-slate-400">{study.organizationSize}</div>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">{study.challenge}</p>
        </div>
        <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-teal-600">
          Read case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </Reveal>
  );
}
