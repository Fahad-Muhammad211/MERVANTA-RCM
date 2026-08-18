import { MapPin, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import type { Location } from "@/data/locations";

export function LocationCard({ location, delay = 0 }: { location: Location; delay?: number }) {
  return (
    <Reveal delay={delay} className="flex h-full flex-col border border-slate-200 bg-white p-6">
      <Badge tone="teal" className="w-fit">{location.type}</Badge>
      <div className="mt-4 flex items-start gap-2">
        <MapPin className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
        <div>
          <div className="font-display text-lg text-ink-900">{location.country}</div>
          <div className="text-sm text-slate-500">{location.city}</div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{location.operationsInfo}</p>
      <div className="mt-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Services Supported
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {location.servicesSupported.map((s) => (
            <span key={s} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 space-y-1.5 border-t border-slate-100 pt-4 text-sm text-slate-500">
        <a href={`tel:${location.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 hover:text-teal-600">
          <Phone className="h-3.5 w-3.5 shrink-0" /> {location.phone}
        </a>
        <a href={`mailto:${location.email}`} className="flex items-center gap-2 hover:text-teal-600">
          <Mail className="h-3.5 w-3.5 shrink-0" /> {location.email}
        </a>
      </div>
    </Reveal>
  );
}
