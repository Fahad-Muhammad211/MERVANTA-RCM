import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function ProcessFlow({
  steps,
  className,
}: {
  steps: { title: string; description?: string }[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      {steps.map((step, i) => (
        <div key={step.title} className="flex w-full max-w-md flex-col items-center">
          <Reveal
            delay={i * 0.05}
            className="w-full rounded-lg border border-slate-200 bg-white px-6 py-4 text-center shadow-[0_1px_2px_rgba(10,22,38,0.04)]"
          >
            <div className="font-display text-lg text-ink-900">{step.title}</div>
            {step.description && (
              <div className="mt-1 text-sm text-slate-500">{step.description}</div>
            )}
          </Reveal>
          {i < steps.length - 1 && (
            <ArrowDown className="my-2 h-5 w-5 shrink-0 text-slate-300" />
          )}
        </div>
      ))}
    </div>
  );
}

export function InlineFlow({
  steps,
  className,
}: {
  steps: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-3">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-800">
            {step}
          </span>
          {i < steps.length - 1 && (
            <ArrowDown className="h-4 w-4 -rotate-90 text-slate-300" />
          )}
        </div>
      ))}
    </div>
  );
}
