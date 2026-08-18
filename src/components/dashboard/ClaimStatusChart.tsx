import { claimStatus } from "@/data/kpis";

export function ClaimStatusChart() {
  const total = claimStatus.reduce((sum, s) => sum + s.value, 0);

  return (
    <div>
      <div className="flex h-8 w-full gap-0.5 overflow-hidden rounded-sm">
        {claimStatus.map((s) => {
          const pct = (s.value / total) * 100;
          return (
            <div
              key={s.name}
              title={`${s.name}: ${s.value}%`}
              style={{ width: `${pct}%`, background: s.color }}
              className="flex h-full items-center justify-center transition-opacity hover:opacity-90"
            >
              {pct >= 12 && (
                <span className="text-[11px] font-semibold text-white">{s.value}%</span>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {claimStatus.map((s) => (
          <div key={s.name} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
            <span className="text-xs text-slate-600">{s.name}</span>
            <span className="ml-auto text-xs font-semibold text-ink-900">{s.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
