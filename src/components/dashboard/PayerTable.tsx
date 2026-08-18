import { payerPerformance } from "@/data/kpis";

export function PayerTable() {
  return (
    <div>
      <div className="space-y-2 sm:hidden">
        {payerPerformance.map((p) => (
          <div key={p.payer} className="rounded-lg border border-slate-100 px-3 py-2.5">
            <div className="font-medium text-ink-800">{p.payer}</div>
            <div className="mt-1.5 flex items-center justify-between text-sm">
              <span className="text-xs uppercase tracking-wide text-slate-400">Clean Claim Rate</span>
              <span className="text-ink-700" style={{ fontVariantNumeric: "tabular-nums" }}>
                {p.cleanClaimRate}%
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm">
              <span className="text-xs uppercase tracking-wide text-slate-400">Avg. Days to Pay</span>
              <span className="text-ink-700" style={{ fontVariantNumeric: "tabular-nums" }}>
                {p.avgDaysToPay} days
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto scrollbar-none sm:block">
        <table className="w-full min-w-[440px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs font-medium uppercase tracking-wide text-slate-400">
              <th className="py-3">Payer</th>
              <th className="py-3 text-right">Clean Claim Rate</th>
              <th className="py-3 text-right">Avg. Days to Pay</th>
            </tr>
          </thead>
          <tbody>
            {payerPerformance.map((p) => (
              <tr key={p.payer} className="border-b border-slate-100">
                <td className="py-3 font-medium text-ink-800">{p.payer}</td>
                <td className="py-3 text-right text-ink-700" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {p.cleanClaimRate}%
                </td>
                <td className="py-3 text-right text-ink-700" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {p.avgDaysToPay} days
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
