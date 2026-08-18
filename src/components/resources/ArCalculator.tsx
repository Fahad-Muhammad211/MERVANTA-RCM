"use client";

import { useMemo, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function ArCalculator() {
  const [monthlyCollections, setMonthlyCollections] = useState(400000);
  const [currentArDays, setCurrentArDays] = useState(52);
  const [targetArDays, setTargetArDays] = useState(35);

  const { dailyRevenue, cashAcceleration } = useMemo(() => {
    const daily = (monthlyCollections * 12) / 365;
    const improvement = Math.max(0, currentArDays - targetArDays);
    return { dailyRevenue: daily, cashAcceleration: daily * improvement };
  }, [monthlyCollections, currentArDays, targetArDays]);

  return (
    <div className="border border-slate-200 bg-white p-7">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
        <TrendingUp className="h-4 w-4" /> A/R Days Calculator
      </div>
      <p className="mt-2 text-sm text-slate-500">
        Estimate the cash flow impact of reducing your average A/R days.
      </p>

      <div className="mt-6 space-y-5">
        <Field label="Average Monthly Collections ($)">
          <input
            type="number"
            min={0}
            value={monthlyCollections}
            onChange={(e) => setMonthlyCollections(Number(e.target.value) || 0)}
            className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-teal-400"
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Current A/R Days">
            <input
              type="number"
              min={0}
              value={currentArDays}
              onChange={(e) => setCurrentArDays(Number(e.target.value) || 0)}
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-teal-400"
            />
          </Field>
          <Field label="Target A/R Days">
            <input
              type="number"
              min={0}
              value={targetArDays}
              onChange={(e) => setTargetArDays(Number(e.target.value) || 0)}
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-teal-400"
            />
          </Field>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
        <div>
          <div className="text-xs text-slate-400">Average Daily Revenue</div>
          <div className="mt-1 font-display text-2xl text-ink-900">{fmt(dailyRevenue)}</div>
        </div>
        <div>
          <div className="text-xs text-slate-400">One-Time Cash Acceleration</div>
          <div className="mt-1 font-display text-2xl text-teal-600">{fmt(cashAcceleration)}</div>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">
        This is a simplified planning estimate for illustrative purposes only and does not
        constitute a guarantee of results.
      </p>
      <Button href="/contact" variant="secondary" className="mt-5 w-full justify-center">
        Request an RCM Assessment
      </Button>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-slate-500">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
