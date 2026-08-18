export function ChartTooltip({
  active,
  payload,
  label,
  formatter,
}: {
  active?: boolean;
  label?: string;
  payload?: { name: string; value: number | string; color?: string }[];
  formatter?: (name: string, value: number | string) => string;
}) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-xs shadow-lg">
      {label && <div className="mb-1.5 font-medium text-ink-900">{label}</div>}
      <div className="space-y-1">
        {payload.map((p) => (
          <div key={p.name} className="flex items-center gap-2 text-slate-600">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: p.color ?? "var(--color-teal-500)" }}
            />
            <span>{p.name}:</span>
            <span className="font-medium text-ink-900">
              {formatter ? formatter(p.name, p.value) : p.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
