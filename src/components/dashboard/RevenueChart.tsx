"use client";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import { revenueTrend } from "@/data/kpis";

export function RevenueChart() {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={revenueTrend} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="collectionsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-teal-500)" stopOpacity={0.16} />
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
            tickFormatter={(v) => `$${v}M`}
            width={48}
          />
          <Tooltip
            content={
              <ChartTooltip formatter={(_, v) => `$${v}M`} />
            }
          />
          <Legend
            verticalAlign="top"
            height={32}
            iconType="circle"
            iconSize={8}
            formatter={(value) => <span className="text-xs text-slate-600">{value}</span>}
          />
          <Area
            type="monotone"
            dataKey="charges"
            name="Gross Charges"
            stroke="var(--color-slate-400)"
            strokeWidth={2}
            fill="transparent"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="collections"
            name="Net Collections"
            stroke="var(--color-teal-500)"
            strokeWidth={2}
            fill="url(#collectionsFill)"
            dot={false}
            activeDot={{ r: 4, stroke: "white", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
