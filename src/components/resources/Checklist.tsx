"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Checklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i}>
          <button
            onClick={() => setChecked((c) => ({ ...c, [i]: !c[i] }))}
            className="flex w-full items-start gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-left text-sm transition-colors hover:border-teal-300"
          >
            <span
              className={cn(
                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border",
                checked[i] ? "border-teal-500 bg-teal-500" : "border-slate-300 bg-white"
              )}
            >
              {checked[i] && <span className="h-1.5 w-1.5 rounded-sm bg-white" />}
            </span>
            <span className={cn(checked[i] ? "text-slate-400 line-through" : "text-ink-700")}>
              {item}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
