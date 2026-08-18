"use client";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import { denialTrend } from "@/data/kpis";

export function DenialTrendChart() {
  return (
    <div className="h-[260px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={denialTrend} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="denialFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-teal-500)" stopOpacity={0.14} />
              <stop offset="100%" stopColor="var(--color-teal-500)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--color-slate-100)" vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={{ stroke: "var(--color-slate-200)" }}
            tick={{ fill: "var(--color-slate-500)", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--color-slate-500)", fontSize: 12 }}
            tickFormatter={(v) => `${v}%`}
            width={40}
          />
          <Tooltip content={<ChartTooltip formatter={(_, v) => `${v}%`} />} />
          <Area
            type="monotone"
            dataKey="rate"
            name="Denial Rate"
            stroke="var(--color-teal-500)"
            strokeWidth={2}
            fill="url(#denialFill)"
            dot={false}
            activeDot={{ r: 4, stroke: "white", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
