"use client";

import { useState } from "react";
import {
  CheckCircle2, FileText, Stethoscope, TrendingUp, IdCard, Building2,
  ClipboardList, HelpCircle, Receipt,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { value: "full-rcm", label: "Full RCM", icon: Receipt },
  { value: "medical-billing", label: "Medical Billing", icon: FileText },
  { value: "medical-coding", label: "Medical Coding", icon: Stethoscope },
  { value: "ar-recovery", label: "A/R Recovery", icon: TrendingUp },
  { value: "credentialing", label: "Credentialing", icon: IdCard },
  { value: "enterprise-rcm", label: "Enterprise RCM", icon: Building2 },
  { value: "practice-support", label: "Practice Support", icon: ClipboardList },
  { value: "other", label: "Other", icon: HelpCircle },
];

const orgTypes = [
  "Independent Practice", "Multi-Specialty Group", "Physician Group", "Clinic",
  "Hospital", "Health System", "Ambulatory Surgery Center", "Laboratory",
  "Diagnostic Center", "Urgent Care", "Telehealth Organization", "Other",
];

const providerRanges = ["1–5", "6–15", "16–50", "51–100", "100+"];
const locationRanges = ["1", "2–5", "6–15", "16+"];
const contactMethods = ["Email", "Phone", "Either"];

const inputCls =
  "w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-400";

type FormState = {
  service: string;
  orgName: string;
  orgType: string;
  providers: string;
  locations: string;
  ehrSystem: string;
  challenge: string;
  contactName: string;
  email: string;
  phone: string;
  preferredContact: string;
  additionalInfo: string;
};

const initialState: FormState = {
  service: "",
  orgName: "",
  orgType: "",
  providers: "",
  locations: "",
  ehrSystem: "",
  challenge: "",
  contactName: "",
  email: "",
  phone: "",
  preferredContact: "",
  additionalInfo: "",
};

export function ContactWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState<null | "consultation" | "assessment">(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  if (submitted) {
    return (
      <div className="border border-teal-200 bg-teal-50 p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-teal-600" />
        <h2 className="mt-4 font-display text-2xl text-ink-900">
          {submitted === "consultation" ? "Consultation requested" : "Assessment requested"}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
          Thank you, {form.contactName || "there"}. A member of our team will follow up at{" "}
          {form.email || "the email you provided"} shortly to schedule next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b border-slate-100 px-7 py-5">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <div
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                step >= s ? "bg-teal-500 text-white" : "bg-slate-100 text-slate-400"
              )}
            >
              {s}
            </div>
            <div className={cn("h-px flex-1", step > s ? "bg-teal-500" : "bg-slate-200")} />
          </div>
        ))}
      </div>

      <div className="p-7">
        {step === 1 && (
          <div>
            <h2 className="font-display text-2xl text-ink-900">What service are you looking for?</h2>
            <p className="mt-1.5 text-sm text-slate-500">Select the option closest to your need.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {services.map((s) => (
                <button
                  key={s.value}
                  onClick={() => {
                    set("service", s.value);
                    setStep(2);
                  }}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-lg border px-4 py-6 text-center transition-colors",
                    form.service === s.value
                      ? "border-teal-500 bg-teal-50"
                      : "border-slate-200 bg-white hover:border-teal-300"
                  )}
                >
                  <s.icon className="h-5 w-5 text-teal-600" />
                  <span className="text-xs font-medium text-ink-800">{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="font-display text-2xl text-ink-900">Tell us about your organization</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Organization Name" required>
                <input required value={form.orgName} onChange={(e) => set("orgName", e.target.value)} className={inputCls} />
              </Field>
              <Field label="Organization Type" required>
                <select required value={form.orgType} onChange={(e) => set("orgType", e.target.value)} className={inputCls}>
                  <option value="" disabled>Select type</option>
                  {orgTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </Field>
              <Field label="Number of Providers">
                <select value={form.providers} onChange={(e) => set("providers", e.target.value)} className={inputCls}>
                  <option value="">Select range</option>
                  {providerRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </Field>
              <Field label="Number of Locations">
                <select value={form.locations} onChange={(e) => set("locations", e.target.value)} className={inputCls}>
                  <option value="">Select range</option>
                  {locationRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </Field>
              <Field label="Current EHR / PM System" className="sm:col-span-2">
                <input value={form.ehrSystem} onChange={(e) => set("ehrSystem", e.target.value)} className={inputCls} placeholder="e.g. Epic, athenahealth, eClinicalWorks" />
              </Field>
              <Field label="Current Billing Challenge" className="sm:col-span-2">
                <textarea rows={3} value={form.challenge} onChange={(e) => set("challenge", e.target.value)} className={inputCls} placeholder="Briefly describe your current revenue cycle challenge" />
              </Field>
            </div>
            <div className="mt-7 flex justify-between">
              <button onClick={() => setStep(1)} className="text-sm font-medium text-slate-500 hover:text-ink-900">
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!form.orgName || !form.orgType}
                className="rounded-md bg-ink-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="font-display text-2xl text-ink-900">How can we reach you?</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Contact Name" required>
                <input required value={form.contactName} onChange={(e) => set("contactName", e.target.value)} className={inputCls} />
              </Field>
              <Field label="Email" required>
                <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} />
              </Field>
              <Field label="Phone">
                <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} />
              </Field>
              <Field label="Preferred Contact Method">
                <select value={form.preferredContact} onChange={(e) => set("preferredContact", e.target.value)} className={inputCls}>
                  <option value="">Select method</option>
                  {contactMethods.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </Field>
              <Field label="Additional Information" className="sm:col-span-2">
                <textarea rows={3} value={form.additionalInfo} onChange={(e) => set("additionalInfo", e.target.value)} className={inputCls} placeholder="Anything else we should know?" />
              </Field>
            </div>
            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button onClick={() => setStep(2)} className="text-sm font-medium text-slate-500 hover:text-ink-900">
                Back
              </button>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => form.contactName && form.email && setSubmitted("assessment")}
                  disabled={!form.contactName || !form.email}
                  className="rounded-md border border-ink-900 px-6 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Request an RCM Assessment
                </button>
                <button
                  onClick={() => form.contactName && form.email && setSubmitted("consultation")}
                  disabled={!form.contactName || !form.email}
                  className="rounded-md bg-teal-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="text-xs font-medium text-slate-500">
        {label} {required && <span className="text-signal-red">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
