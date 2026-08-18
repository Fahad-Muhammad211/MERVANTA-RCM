import type { Metadata } from "next";
import {
  HeartPulse, GraduationCap, TrendingUp, Users, Globe2, ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { JobsExplorer } from "@/components/careers/JobsExplorer";
import { jobs, jobDepartments } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore open positions at Mervanta RCM — careers in medical coding, billing, A/R, credentialing, quality assurance, and operations leadership.",
};

const benefits = [
  { icon: HeartPulse, title: "Health & Wellness", description: "Medical, dental, and vision coverage plus a wellness stipend for every full-time employee" },
  { icon: GraduationCap, title: "Learning & Development", description: "Structured training and certification support" },
  { icon: TrendingUp, title: "Career Growth", description: "Defined paths into senior, QA, and leadership roles" },
  { icon: Users, title: "Team Culture", description: "Collaborative, accountable, performance-driven teams" },
  { icon: Globe2, title: "Global Organization", description: "Exposure to international healthcare operations" },
  { icon: ShieldCheck, title: "Stability", description: "A structured, growing organization built for the long term" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        breadcrumb="Careers"
        eyebrow="Careers"
        title="Build your career inside a growing global healthcare operation."
        subtitle="We invest in structured training, clear growth paths, and a culture built around accountability and craft."
      />

      <Section tone="white">
        <SectionHeading eyebrow="Why Join Us" title="What it's like to work here" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05} className="bg-white p-6">
              <b.icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-lg text-ink-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{b.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Open Positions" title="Current opportunities" />
        <div className="mt-10">
          <JobsExplorer jobs={jobs} departments={jobDepartments} />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Internship Programs" title="Early career opportunities" align="center" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-600">
          Our internship program pairs early-career candidates with a mentor on our coding,
          billing, or client success teams for a structured 12-week rotation. Interns complete
          hands-on training alongside certified specialists, with strong performers invited to
          apply for full-time roles at the end of the program.
        </p>
      </Section>

      <CTASection
        title="Don't see the right role?"
        subtitle="We're always interested in hearing from experienced healthcare RCM professionals."
        primary={{ label: "Contact Our Team", href: "/contact" }}
        secondary={{ label: "View Open Positions", href: "/careers" }}
      />
    </>
  );
}
