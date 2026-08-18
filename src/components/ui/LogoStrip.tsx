import { Building2 } from "lucide-react";
import { clientLogos } from "@/data/testimonials";

export function LogoStrip() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-4 lg:grid-cols-8">
      {clientLogos.map((logo) => (
        <div
          key={logo.id}
          className="flex h-24 flex-col items-center justify-center gap-2 bg-white px-3 text-center text-slate-300"
        >
          <Building2 className="h-5 w-5 shrink-0" strokeWidth={1.5} />
          <span className="text-[11px] font-medium leading-tight uppercase tracking-wide text-slate-400">
            {logo.label}
          </span>
        </div>
      ))}
    </div>
  );
}
