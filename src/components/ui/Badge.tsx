import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "teal",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "teal" | "gold" | "slate" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        tone === "teal" && "border-teal-200 bg-teal-50 text-teal-700",
        tone === "gold" && "border-gold-300/60 bg-gold-100/60 text-gold-600",
        tone === "slate" && "border-slate-200 bg-slate-50 text-slate-600",
        tone === "light" && "border-white/25 bg-white/10 text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
