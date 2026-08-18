import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { Specialty } from "@/data/specialties";

export function SpecialtyCard({ specialty, delay = 0 }: { specialty: Specialty; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/specialties/${specialty.slug}`}
        className="group flex h-full flex-col border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-[0_16px_40px_-16px_rgba(10,22,38,0.18)]"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-teal-300">
          <Icon name={specialty.icon} className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg text-ink-900">{specialty.name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">
          {specialty.billingChallenges[0]}
        </p>
      </Link>
    </Reveal>
  );
}
