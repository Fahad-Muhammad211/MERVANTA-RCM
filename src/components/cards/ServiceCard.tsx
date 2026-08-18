import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/data/services";

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col justify-between border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-[0_16px_40px_-16px_rgba(10,22,38,0.18)]"
      >
        <div>
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
            <Icon name={service.icon} className="h-5 w-5" />
          </div>
          <h3 className="font-display text-xl text-ink-900">{service.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{service.shortDescription}</p>
        </div>
        <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-teal-600">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </Reveal>
  );
}
