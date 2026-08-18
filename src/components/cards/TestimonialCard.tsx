import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ item, delay = 0 }: { item: Testimonial; delay?: number }) {
  return (
    <Reveal
      delay={delay}
      className="flex h-full flex-col justify-between border border-white/10 bg-white/[0.04] p-7"
    >
      <Quote className="h-6 w-6 text-teal-400" />
      <p className="mt-5 flex-1 font-display text-lg leading-relaxed text-white/90">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="text-sm font-medium text-white">{item.attribution}</div>
        <div className="text-xs text-slate-400">{item.organizationType}</div>
      </div>
    </Reveal>
  );
}
