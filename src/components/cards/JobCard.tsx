import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import type { Job } from "@/data/jobs";

export function JobCard({ job, delay = 0 }: { job: Job; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/careers/${job.slug}`}
        className="group flex flex-col justify-between gap-4 border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 sm:flex-row sm:items-center"
      >
        <div>
          <Badge tone="slate" className="mb-3">{job.department}</Badge>
          <h3 className="font-display text-lg text-ink-900">{job.title}</h3>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
            <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {job.type}</span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-teal-600">
          View role
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </Reveal>
  );
}
