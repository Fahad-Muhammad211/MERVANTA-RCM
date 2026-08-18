"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { denialCodes } from "@/data/resources";

export function DenialCodeLookup() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return denialCodes;
    return denialCodes.filter(
      (d) =>
        d.code.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.group.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by code, keyword, or category (e.g. CO-45, timely filing)"
          className="w-full rounded-md border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-ink-900 outline-none transition-colors focus:border-teal-400"
        />
      </div>

      <div className="mt-6 space-y-3 lg:hidden">
        {results.map((d) => (
          <div key={d.code} className="rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-semibold text-teal-700">{d.code}</span>
              <span className="text-xs uppercase tracking-wide text-slate-400">{d.group}</span>
            </div>
            <p className="mt-2 text-sm text-ink-800">{d.description}</p>
            <div className="mt-3 border-t border-slate-100 pt-3">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-400">Common Cause</div>
              <p className="mt-1 text-sm text-slate-600">{d.commonCause}</p>
            </div>
            <div className="mt-3 border-t border-slate-100 pt-3">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-400">Recommended Action</div>
              <p className="mt-1 text-sm text-slate-600">{d.recommendedAction}</p>
            </div>
          </div>
        ))}
        {results.length === 0 && (
          <p className="py-8 text-center text-sm text-slate-500">No matching codes found.</p>
        )}
      </div>

      <div className="mt-6 hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs font-medium uppercase tracking-wide text-slate-400">
              <th className="py-3 pr-4">Code</th>
              <th className="py-3 pr-4">Group</th>
              <th className="py-3 pr-4">Description</th>
              <th className="py-3 pr-4">Common Cause</th>
              <th className="py-3">Recommended Action</th>
            </tr>
          </thead>
          <tbody>
            {results.map((d) => (
              <tr key={d.code} className="border-b border-slate-100 align-top">
                <td className="py-3.5 pr-4 font-mono text-sm font-semibold text-teal-700">{d.code}</td>
                <td className="py-3.5 pr-4 text-slate-500">{d.group}</td>
                <td className="py-3.5 pr-4 text-ink-800">{d.description}</td>
                <td className="py-3.5 pr-4 text-slate-500">{d.commonCause}</td>
                <td className="py-3.5 text-slate-500">{d.recommendedAction}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {results.length === 0 && (
          <p className="py-8 text-center text-sm text-slate-500">No matching codes found.</p>
        )}
      </div>
    </div>
  );
}
