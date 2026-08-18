import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function StatGrid({
  stats,
  tone = "light",
  columns = 4,
}: {
  stats: { value: string; label: string }[];
  tone?: "light" | "dark";
  columns?: 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-xl",
        columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3",
        tone === "light" ? "bg-slate-200" : "bg-white/10"
      )}
    >
      {stats.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={i * 0.05}
          className={cn(
            "flex flex-col justify-center gap-1.5 px-6 py-8",
            tone === "light" ? "bg-white" : "bg-ink-900"
          )}
        >
          <div
            className={cn(
              "font-display text-3xl md:text-4xl",
              tone === "light" ? "text-ink-900" : "text-white"
            )}
          >
            {stat.value}
          </div>
          <div
            className={cn(
              "text-sm leading-snug",
              tone === "light" ? "text-slate-500" : "text-slate-400"
            )}
          >
            {stat.label}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
