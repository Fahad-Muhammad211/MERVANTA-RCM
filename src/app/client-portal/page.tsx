import type { Metadata } from "next";
import { FileStack, MessageSquareText, Users, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ClaimStatusChart } from "@/components/dashboard/ClaimStatusChart";
import { DenialTrendChart } from "@/components/dashboard/DenialTrendChart";
import { ArAgingChart } from "@/components/dashboard/ArAgingChart";
import { PerformanceBarChart } from "@/components/dashboard/PerformanceBarChart";
import { PayerTable } from "@/components/dashboard/PayerTable";
import { dashboardSummary, providerPerformance, locationPerformance } from "@/data/kpis";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Preview the Mervanta RCM client portal — real-time revenue, claims, denial, and A/R reporting built for enterprise healthcare organizations.",
};

const summaryCards: { key: keyof typeof dashboardSummary; label: string; changeType: "positive" | "negative" }[] = [
  { key: "totalRevenue", label: "Total Revenue", changeType: "positive" },
  { key: "collections", label: "Collections", changeType: "positive" },
  { key: "openClaims", label: "Open Claims", changeType: "positive" },
  { key: "denialRate", label: "Denial Rate", changeType: "positive" },
  { key: "arDays", label: "A/R Days", changeType: "positive" },
  { key: "netCollectionRate", label: "Net Collection Rate", changeType: "positive" },
];

const sidePanels = [
  { icon: FileStack, title: "Documents", value: "1,842", detail: "Shared reports & statements" },
  { icon: MessageSquareText, title: "Open Tickets", value: "6", detail: "Avg. response under 4 hours" },
  { icon: Users, title: "Team Activity", value: "28", detail: "Actions logged today" },
];

export default function ClientPortalPage() {
  return (
    <>
      <PageHero
        breadcrumb="Client Portal"
        eyebrow="Client Portal"
        title="Full visibility into your revenue cycle, in real time."
        subtitle="Every client receives access to a dedicated reporting portal — revenue, claims, denials, A/R, and team activity, always current."
      />

      <Section tone="slate">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_24px_60px_-24px_rgba(10,22,38,0.25)]">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-5 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs text-slate-400">
              portal.mervantarcm.com/dashboard
            </div>
          </div>

          <div className="p-5 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-xl text-ink-900">Executive Overview</h2>
                <div className="text-xs text-slate-400">Summit Health Partners — 5 Locations</div>
              </div>
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                Updated today at 7:12 AM
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {summaryCards.map((c) => {
                const d = dashboardSummary[c.key];
                return (
                  <KpiCard
                    key={c.key}
                    label={c.label}
                    value={d.value}
                    change={d.change}
                    period={d.period}
                    changeType={c.changeType}
                  />
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="border border-slate-200 p-5 lg:col-span-2">
                <h3 className="font-display text-base text-ink-900">Revenue &amp; Collections</h3>
                <div className="mt-2">
                  <RevenueChart />
                </div>
              </div>
              <div className="border border-slate-200 p-5">
                <h3 className="font-display text-base text-ink-900">Claim Status</h3>
                <div className="mt-6">
                  <ClaimStatusChart />
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="border border-slate-200 p-5">
                <h3 className="font-display text-base text-ink-900">Denial Rate Trend</h3>
                <DenialTrendChart />
              </div>
              <div className="border border-slate-200 p-5">
                <h3 className="font-display text-base text-ink-900">A/R Aging</h3>
                <ArAgingChart />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="border border-slate-200 p-5 lg:col-span-1">
                <h3 className="font-display text-base text-ink-900">Payer Performance</h3>
                <div className="mt-4">
                  <PayerTable />
                </div>
              </div>
              <div className="border border-slate-200 p-5">
                <h3 className="font-display text-base text-ink-900">Provider Performance</h3>
                <div className="mt-4">
                  <PerformanceBarChart data={providerPerformance} dataKey="collectionRate" labelKey="provider" />
                </div>
              </div>
              <div className="border border-slate-200 p-5">
                <h3 className="font-display text-base text-ink-900">Location Performance</h3>
                <div className="mt-4">
                  <PerformanceBarChart data={locationPerformance} dataKey="netCollectionRate" labelKey="location" />
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {sidePanels.map((p) => (
                <div key={p.title} className="flex items-start gap-3 border border-slate-200 p-4">
                  <p.icon className="h-5 w-5 shrink-0 text-teal-600" />
                  <div>
                    <div className="text-xs font-medium text-slate-500">{p.title}</div>
                    <div className="mt-0.5 font-display text-lg text-ink-900">{p.value}</div>
                    <div className="text-xs text-slate-400">{p.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Included With Every Engagement" title="What clients see in their portal" align="center" />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {["Revenue Reports", "Claim Status", "Denial Trends", "A/R Aging", "Payment Detail", "Documents", "Support Tickets", "Team Activity"].map((f) => (
            <div key={f} className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs font-medium text-ink-700">
              <ArrowUpRight className="h-3.5 w-3.5 text-teal-500" /> {f}
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="See the full portal in a live walkthrough."
        subtitle="Schedule time with our team for a guided walkthrough of the client portal on your own data."
      />
    </>
  );
}
