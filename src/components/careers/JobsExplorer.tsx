"use client";

import { useState } from "react";
import { JobCard } from "@/components/cards/JobCard";
import { cn } from "@/lib/utils";
import type { Job } from "@/data/jobs";

export function JobsExplorer({
  jobs,
  departments,
}: {
  jobs: Job[];
  departments: readonly Job["department"][];
}) {
  const [active, setActive] = useState<Job["department"] | "All">("All");
  const filtered = active === "All" ? jobs : jobs.filter((j) => j.department === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", ...departments] as const).map((dept) => (
          <button
            key={dept}
            onClick={() => setActive(dept)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === dept
                ? "border-ink-900 bg-ink-900 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:text-teal-600"
            )}
          >
            {dept}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {filtered.map((job, i) => (
          <JobCard key={job.slug} job={job} delay={i * 0.04} />
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-slate-500">No open positions in this department right now.</p>
        )}
      </div>
    </div>
  );
}
