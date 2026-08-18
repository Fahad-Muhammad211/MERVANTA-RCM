"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { glossaryTerms } from "@/data/resources";

export function GlossarySearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossaryTerms;
    return glossaryTerms.filter(
      (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search RCM terms (e.g. A/R days, clean claim)"
          className="w-full rounded-md border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-ink-900 outline-none transition-colors focus:border-teal-400"
        />
      </div>
      <dl className="mt-6 divide-y divide-slate-100 border-t border-slate-100">
        {results.map((t) => (
          <div key={t.term} className="py-4">
            <dt className="font-display text-base text-ink-900">{t.term}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-slate-500">{t.definition}</dd>
          </div>
        ))}
        {results.length === 0 && (
          <p className="py-8 text-center text-sm text-slate-500">No matching terms found.</p>
        )}
      </dl>
    </div>
  );
}
