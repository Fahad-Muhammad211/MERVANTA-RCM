"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Location } from "@/data/locations";

const HUB_ID = "hq-us";

export function WorldMap({ locations }: { locations: Location[] }) {
  const [active, setActive] = useState<string | null>(null);
  const hub = locations.find((l) => l.id === HUB_ID) ?? locations[0];

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-950">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(20,107,113,0.35), transparent 70%)",
        }}
      />

      {/* graticule ellipses to suggest a globe grid */}
      <svg
        viewBox="0 0 100 56.25"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {[10, 20, 30, 40].map((ry) => (
          <ellipse
            key={ry}
            cx="50"
            cy="28"
            rx="48"
            ry={ry}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.2"
          />
        ))}
        <line x1="2" y1="28" x2="98" y2="28" stroke="rgba(255,255,255,0.08)" strokeWidth="0.2" />
        <line x1="50" y1="2" x2="50" y2="54" stroke="rgba(255,255,255,0.08)" strokeWidth="0.2" />

        {/* connectors from hub to each location */}
        {locations
          .filter((l) => l.id !== hub.id)
          .map((loc) => {
            const x1 = hub.coordinates.x;
            const y1 = hub.coordinates.y * 0.5625;
            const x2 = loc.coordinates.x;
            const y2 = loc.coordinates.y * 0.5625;
            const mx = (x1 + x2) / 2;
            const my = Math.min(y1, y2) - 10;
            return (
              <path
                key={loc.id}
                d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
                fill="none"
                stroke={active === loc.id ? "var(--color-teal-300)" : "rgba(111,169,171,0.35)"}
                strokeWidth={active === loc.id ? 0.4 : 0.25}
                strokeDasharray="1.2 1"
                className="transition-all duration-300"
              />
            );
          })}
      </svg>

      {/* markers */}
      {locations.map((loc) => (
        <button
          key={loc.id}
          onMouseEnter={() => setActive(loc.id)}
          onFocus={() => setActive(loc.id)}
          onMouseLeave={() => setActive(null)}
          onBlur={() => setActive(null)}
          className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
          style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
        >
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
                loc.id === hub.id ? "bg-gold-300" : "bg-teal-300"
              )}
              style={{ animationDuration: "2.4s" }}
            />
            <span
              className={cn(
                "relative inline-flex h-2 w-2 rounded-full ring-2 ring-ink-950",
                loc.id === hub.id ? "bg-gold-300" : "bg-teal-300"
              )}
            />
          </span>

          <div
            className={cn(
              "pointer-events-none absolute left-1/2 top-full z-10 mt-3 w-52 -translate-x-1/2 rounded-lg border border-white/10 bg-ink-900/95 p-3 text-left shadow-xl backdrop-blur transition-all duration-200",
              active === loc.id ? "opacity-100 translate-y-0" : "translate-y-1 opacity-0"
            )}
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-teal-300">
              {loc.type}
            </div>
            <div className="mt-1 font-display text-base text-white">{loc.country}</div>
            <div className="text-xs text-slate-400">{loc.city}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
