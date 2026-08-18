"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, UploadCloud } from "lucide-react";
import { jobs } from "@/data/jobs";

const inputCls =
  "w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-400";

export function ApplicationForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("role") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  if (submitted) {
    return (
      <div className="border border-teal-200 bg-teal-50 p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-teal-600" />
        <h2 className="mt-4 font-display text-2xl text-ink-900">Application received</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
          Thank you for your interest in Mervanta RCM. Our talent acquisition team will review
          your application and follow up if there is a match with an open role.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid grid-cols-1 gap-5 border border-slate-200 bg-white p-7 sm:grid-cols-2"
    >
      <Field label="Full Name" required>
        <input required type="text" className={inputCls} />
      </Field>
      <Field label="Email" required>
        <input required type="email" className={inputCls} />
      </Field>
      <Field label="Phone">
        <input type="tel" className={inputCls} />
      </Field>
      <Field label="Position Applying For" required>
        <select required defaultValue={preselected} className={inputCls}>
          <option value="" disabled>
            Select a position
          </option>
          {jobs.map((j) => (
            <option key={j.slug} value={j.slug}>
              {j.title}
            </option>
          ))}
          <option value="other">Other / General Application</option>
        </select>
      </Field>

      <div className="sm:col-span-2">
        <span className="text-xs font-medium text-slate-500">Resume / CV</span>
        <label className="mt-1.5 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-sm text-slate-500 transition-colors hover:border-teal-400">
          <UploadCloud className="h-4 w-4" />
          {fileName || "Click to upload (PDF, DOC)"}
          <input
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </label>
      </div>

      <div className="sm:col-span-2">
        <Field label="Cover Message">
          <textarea
            rows={4}
            className={inputCls}
            placeholder="Tell us a bit about your background and interest in this role."
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-600 sm:col-span-2"
      >
        Submit Application
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-slate-500">
        {label} {required && <span className="text-signal-red">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
