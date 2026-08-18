import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const regions = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Pakistan / International Delivery",
];

export function GlobalPresenceStrip() {
  return (
    <div className="border-b border-slate-200 bg-white py-4">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Global Presence
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
            {regions.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
        </div>
        <Link
          href="/global-presence"
          className="flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700"
        >
          View global operations <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </Container>
    </div>
  );
}
