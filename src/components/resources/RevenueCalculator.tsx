"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function RevenueCalculator() {
  const [monthlyCharges, setMonthlyCharges] = useState(500000);
  const [currentDenialRate, setCurrentDenialRate] = useState(12);
  const [targetDenialRate, setTargetDenialRate] = useState(6);

  const { monthlyRecovery, annualRecovery } = useMemo(() => {
    const improvement = Math.max(0, currentDenialRate - targetDenialRate);
    const monthly = monthlyCharges * (improvement / 100);
    return { monthlyRecovery: monthly, annualRecovery: monthly * 12 };
  }, [monthlyCharges, currentDenialRate, targetDenialRate]);

  return (
    <div className="border border-slate-200 bg-white p-7">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
        <Calculator className="h-4 w-4" /> Revenue Recovery Calculator
      </div>
      <p className="mt-2 text-sm text-slate-500">
        Estimate the potential monthly revenue impact of reducing your denial rate.
      </p>

      <div className="mt-6 space-y-5">
        <Field label="Average Monthly Gross Charges ($)">
          <input
            type="number"
            min={0}
            value={monthlyCharges}
            onChange={(e) => setMonthlyCharges(Number(e.target.value) || 0)}
            className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-teal-400"
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Current Denial Rate (%)">
            <input
              type="number"
              min={0}
              max={100}
              value={currentDenialRate}
              onChange={(e) => setCurrentDenialRate(Number(e.target.value) || 0)}
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-teal-400"
            />
          </Field>
          <Field label="Target Denial Rate (%)">
            <input
              type="number"
              min={0}
              max={100}
              value={targetDenialRate}
              onChange={(e) => setTargetDenialRate(Number(e.target.value) || 0)}
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-teal-400"
            />
          </Field>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
        <div>
          <div className="text-xs text-slate-400">Estimated Monthly Recovery</div>
          <div className="mt-1 font-display text-2xl text-ink-900">{fmt(monthlyRecovery)}</div>
        </div>
        <div>
          <div className="text-xs text-slate-400">Estimated Annual Recovery</div>
          <div className="mt-1 font-display text-2xl text-teal-600">{fmt(annualRecovery)}</div>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">
        This is a simplified planning estimate for illustrative purposes only and does not
        constitute a guarantee of results.
      </p>
      <Button href="/contact" variant="secondary" className="mt-5 w-full justify-center">
        Get a Free RCM Assessment
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
