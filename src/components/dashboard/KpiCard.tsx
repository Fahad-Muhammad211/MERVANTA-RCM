import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function KpiCard({
  label,
  value,
  change,
  period,
  changeType = "positive",
}: {
  label: string;
  value: string;
  change?: string;
  period?: string;
  changeType?: "positive" | "negative" | "neutral";
}) {
  return (
    <div className="border border-slate-200 bg-white p-5">
      <div className="text-xs font-medium text-slate-500">{label}</div>
      <div className="mt-2 font-display text-[1.75rem] leading-none text-ink-900">{value}</div>
      {change && (
        <div className="mt-2.5 flex items-center gap-1.5 text-xs">
          <span
            className={cn(
              "flex items-center gap-0.5 font-medium",
              changeType === "positive" && "text-signal-green",
              changeType === "negative" && "text-signal-red",
              changeType === "neutral" && "text-slate-500"
            )}
          >
            {changeType === "positive" && <ArrowUpRight className="h-3 w-3" />}
            {changeType === "negative" && <ArrowDownRight className="h-3 w-3" />}
            {change}
          </span>
          {period && <span className="text-slate-400">{period}</span>}
        </div>
      )}
    </div>
  );
}
