import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { jobs } from "@/data/jobs";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return { title: job.title, description: job.summary };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <>
      <PageHero
        breadcrumb={`Careers / ${job.title}`}
        eyebrow={job.department}
        title={job.title}
        subtitle={job.summary}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_300px]">
          <div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Responsibilities</div>
              <ul className="mt-4 space-y-2.5">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm leading-relaxed text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Qualifications</div>
              <ul className="mt-4 space-y-2.5">
                {job.qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm leading-relaxed text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="border border-slate-200 bg-slate-50 p-6">
              <Badge tone="teal">{job.department}</Badge>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-400" /> {job.location}</div>
                <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-slate-400" /> {job.type}</div>
              </div>
              <Button href={`/careers/apply?role=${job.slug}`} className="mt-6 w-full justify-center">
                Apply for this role
              </Button>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
