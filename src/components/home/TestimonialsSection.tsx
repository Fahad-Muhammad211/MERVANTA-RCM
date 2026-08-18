import { Section, SectionHeading } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section tone="ink">
      <SectionHeading
        eyebrow="Client Voices"
        title="What healthcare leaders say about working with us."
        align="center"
        tone="light"
      />
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} item={t} delay={i * 0.06} />
        ))}
      </div>
    </Section>
  );
}
