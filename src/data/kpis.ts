/**
 * All figures on this file power the interactive Client Portal preview
 * and Performance & Transparency demo dashboards. They are illustrative
 * sample data generated to demonstrate reporting capability and contain
 * no real client, financial, or clinical information.
 */

export const monthLabels = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const revenueTrend = [
  { month: "Jan", charges: 4.1, collections: 3.4 },
  { month: "Feb", charges: 4.3, collections: 3.6 },
  { month: "Mar", charges: 4.6, collections: 3.8 },
  { month: "Apr", charges: 4.4, collections: 3.7 },
  { month: "May", charges: 4.8, collections: 4.0 },
  { month: "Jun", charges: 5.0, collections: 4.2 },
  { month: "Jul", charges: 5.1, collections: 4.3 },
  { month: "Aug", charges: 5.0, collections: 4.3 },
  { month: "Sep", charges: 5.3, collections: 4.5 },
  { month: "Oct", charges: 5.4, collections: 4.7 },
  { month: "Nov", charges: 5.2, collections: 4.5 },
  { month: "Dec", charges: 5.5, collections: 4.8 },
];

export const claimStatus = [
  { name: "Paid", value: 68, color: "var(--color-signal-green)" },
  { name: "In Process", value: 18, color: "var(--color-slate-400)" },
  { name: "Pending Info", value: 9, color: "var(--color-signal-amber)" },
  { name: "Denied", value: 5, color: "var(--color-signal-red)" },
];

export const denialTrend = [
  { month: "Jan", rate: 8.9 },
  { month: "Feb", rate: 8.6 },
  { month: "Mar", rate: 8.4 },
  { month: "Apr", rate: 8.1 },
  { month: "May", rate: 7.8 },
  { month: "Jun", rate: 7.5 },
  { month: "Jul", rate: 7.3 },
  { month: "Aug", rate: 7.1 },
  { month: "Sep", rate: 6.8 },
  { month: "Oct", rate: 6.6 },
  { month: "Nov", rate: 6.4 },
  { month: "Dec", rate: 6.1 },
];

export const arAging = [
  { bucket: "0–30", value: 42 },
  { bucket: "31–60", value: 24 },
  { bucket: "61–90", value: 14 },
  { bucket: "91–120", value: 9 },
  { bucket: "120+", value: 11 },
];

export const payerPerformance = [
  { payer: "Medicare", cleanClaimRate: 94, avgDaysToPay: 21 },
  { payer: "Medicaid", cleanClaimRate: 91, avgDaysToPay: 27 },
  { payer: "Commercial", cleanClaimRate: 96, avgDaysToPay: 18 },
  { payer: "Managed Care", cleanClaimRate: 89, avgDaysToPay: 33 },
  { payer: "Workers' Comp", cleanClaimRate: 93, avgDaysToPay: 24 },
];

export const providerPerformance = [
  { provider: "Dr. Coleman", collectionRate: 96 },
  { provider: "Dr. Patel", collectionRate: 93 },
  { provider: "Dr. Reyes", collectionRate: 91 },
  { provider: "Dr. Whitfield", collectionRate: 95 },
  { provider: "Dr. Novak", collectionRate: 89 },
];

export const locationPerformance = [
  { location: "Downtown", netCollectionRate: 95 },
  { location: "Westside", netCollectionRate: 92 },
  { location: "Northgate", netCollectionRate: 97 },
  { location: "Eastside", netCollectionRate: 90 },
  { location: "Midtown", netCollectionRate: 94 },
];

export const dashboardSummary = {
  totalRevenue: { value: "$5.5M", change: "+6.2%", period: "vs. prior month" },
  collections: { value: "$4.8M", change: "+4.9%", period: "vs. prior month" },
  openClaims: { value: "3,214", change: "-2.1%", period: "vs. prior month" },
  denialRate: { value: "6.1%", change: "-0.3 pts", period: "vs. prior month" },
  arDays: { value: "38 days", change: "-1.4 days", period: "vs. prior month" },
  netCollectionRate: { value: "94.2%", change: "+0.6 pts", period: "vs. prior month" },
};

export const performanceKpis = [
  { label: "Clean Claim Rate", value: "94.6%", trend: "up" as const, description: "Claims accepted on first submission" },
  { label: "First Pass Rate", value: "91.2%", trend: "up" as const, description: "Claims paid without additional intervention" },
  { label: "Denial Rate", value: "6.1%", trend: "down" as const, description: "Share of claims initially denied" },
  { label: "A/R Days", value: "38", trend: "down" as const, description: "Average days revenue remains outstanding" },
  { label: "Collection Rate", value: "94.2%", trend: "up" as const, description: "Net collections against expected reimbursement" },
  { label: "Payment Turnaround", value: "22 days", trend: "down" as const, description: "Average days from submission to payment" },
  { label: "Credentialing Turnaround", value: "58 days", trend: "down" as const, description: "Average days from application to approval" },
  { label: "Client Satisfaction", value: "4.7 / 5", trend: "up" as const, description: "Average client business review rating" },
];
