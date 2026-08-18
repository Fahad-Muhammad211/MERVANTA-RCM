import type { Metadata } from "next";
import {
  UserPlus, GraduationCap, BookOpen, Scale, ShieldCheck, FileSearch,
  RefreshCw, ClipboardCheck, Award, ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Training & Certification",
  description:
    "Mervanta RCM's structured learning and development program — new employee training, specialty training, compliance training, and ongoing certification.",
};

const programs = [
  { icon: UserPlus, title: "New Employee Training", description: "Structured onboarding covering systems, workflows, and quality standards." },
  { icon: BookOpen, title: "Specialty Training", description: "Focused training on the billing and coding nuances of specific specialties." },
  { icon: GraduationCap, title: "Coding Training", description: "ICD-10-CM, CPT, and HCPCS training aligned to current guidelines." },
  { icon: Scale, title: "Compliance Training", description: "Regulatory and payer policy training required for all client-facing roles." },
  { icon: ShieldCheck, title: "HIPAA Training", description: "Mandatory privacy and security training for every employee." },
  { icon: FileSearch, title: "Payer Policy Training", description: "Ongoing training on payer-specific billing and coverage requirements." },
  { icon: RefreshCw, title: "Continuous Education", description: "Regular refreshers as coding guidelines and payer policy evolve." },
  { icon: ClipboardCheck, title: "Quality Assessments", description: "Periodic competency assessments tied to QA performance data." },
  { icon: Award, title: "Certification Programs", description: "Support for staff pursuing and maintaining professional certifications." },
];

const lifecycle = [
  { title: "Onboarding", description: "Foundational training on systems, standards, and compliance." },
  { title: "Specialization", description: "Specialty and role-specific skill development." },
  { title: "Certification", description: "Support toward professional coding and billing certifications." },
  { title: "Ongoing Development", description: "Continuous education and periodic competency assessment." },
  { title: "Career Growth", description: "Structured paths into senior, QA, and leadership roles." },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        breadcrumb="Training & Certification"
        eyebrow="Training & Certification"
        title="Structured learning, from day one through career growth."
        subtitle="Every team member follows a defined development path — from onboarding through specialty certification and ongoing education."
      />

      <Section tone="white">
        <SectionHeading eyebrow="Training Programs" title="What our people train on" align="center" />
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04} className="bg-white p-6">
              <p.icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-4 font-display text-lg text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="slate">
        <SectionHeading eyebrow="Development Lifecycle" title="A structured path for every employee" align="center" />
        <div className="mt-14 flex flex-wrap items-stretch justify-center gap-3">
          {lifecycle.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.06} className="flex items-center gap-3">
              <div className="flex h-36 w-44 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 text-center">
                <span className="font-display text-lg text-slate-300">{`0${i + 1}`}</span>
                <span className="font-display text-base text-ink-900">{l.title}</span>
                <span className="text-xs leading-snug text-slate-500">{l.description}</span>
              </div>
              {i < lifecycle.length - 1 && <ArrowRight className="h-5 w-5 shrink-0 text-slate-300" />}
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Interested in joining our team?"
        subtitle="Explore open roles and see how our training program supports long-term career growth."
        primary={{ label: "View Open Positions", href: "/careers" }}
        secondary={{ label: "Schedule a Consultation", href: "/contact" }}
      />
    </>
  );
}
