"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList, ResponsiveContainer } from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import { arAging } from "@/data/kpis";

const ramp = ["#8fc0c2", "#6fa9ab", "#146b71", "#0d484d", "#082e32"];

export function ArAgingChart() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={arAging} margin={{ top: 24, right: 8, left: -16, bottom: 0 }} barCategoryGap={20}>
          <CartesianGrid stroke="var(--color-slate-100)" vertical={false} />
          <XAxis
            dataKey="bucket"
            tickLine={false}
            axisLine={{ stroke: "var(--color-slate-200)" }}
            tick={{ fill: "var(--color-slate-500)", fontSize: 12 }}
            label={{ value: "Days outstanding", position: "insideBottom", offset: -2, fill: "var(--color-slate-400)", fontSize: 11 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--color-slate-500)", fontSize: 12 }}
            tickFormatter={(v) => `${v}%`}
            width={40}
          />
          <Tooltip cursor={{ fill: "var(--color-slate-50)" }} content={<ChartTooltip formatter={(_, v) => `${v}% of A/R`} />} />
          <Bar dataKey="value" name="Share of A/R" radius={[4, 4, 0, 0]} maxBarSize={56}>
            {arAging.map((entry, i) => (
              <Cell key={entry.bucket} fill={ramp[i]} />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              formatter={(v: string | number | boolean | null | undefined) => `${v ?? 0}%`}
              style={{ fill: "var(--color-ink-800)", fontSize: 12, fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
