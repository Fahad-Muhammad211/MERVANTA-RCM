"use client";

import { useState } from "react";
import { InsightCard } from "@/components/cards/InsightCard";
import { cn } from "@/lib/utils";
import type { Insight, InsightCategory } from "@/data/insights";

export function InsightsExplorer({
  insights,
  categories,
}: {
  insights: Insight[];
  categories: InsightCategory[];
}) {
  const [active, setActive] = useState<InsightCategory | "All">("All");
  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-ink-900 bg-ink-900 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:text-teal-600"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((insight, i) => (
          <InsightCard key={insight.slug} insight={insight} delay={i * 0.04} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-slate-500">No articles found in this category yet.</p>
      )}
    </div>
  );
}
