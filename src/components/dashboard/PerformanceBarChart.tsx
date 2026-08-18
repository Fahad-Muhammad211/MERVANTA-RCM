"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ResponsiveContainer } from "recharts";
import { ChartTooltip } from "./ChartTooltip";

export function PerformanceBarChart({
  data,
  dataKey,
  labelKey,
  suffix = "%",
  height = 260,
}: {
  data: Record<string, string | number>[];
  dataKey: string;
  labelKey: string;
  suffix?: string;
  height?: number;
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 4, right: 32, left: 4, bottom: 4 }}
          barCategoryGap={16}
        >
          <CartesianGrid stroke="var(--color-slate-100)" horizontal={false} />
          <XAxis type="number" hide domain={[0, "dataMax + 10"]} />
          <YAxis
            type="category"
            dataKey={labelKey}
            tickLine={false}
            axisLine={false}
            width={90}
            tick={{ fill: "var(--color-slate-600)", fontSize: 12 }}
          />
          <Tooltip cursor={{ fill: "var(--color-slate-50)" }} content={<ChartTooltip formatter={(_, v) => `${v}${suffix}`} />} />
          <Bar dataKey={dataKey} name="Value" fill="var(--color-teal-500)" radius={[0, 4, 4, 0]} maxBarSize={22}>
            <LabelList
              dataKey={dataKey}
              position="right"
              formatter={(v: string | number | boolean | null | undefined) => `${v ?? 0}${suffix}`}
              style={{ fill: "var(--color-ink-800)", fontSize: 12, fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
