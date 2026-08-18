import { Button } from "./Button";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function CTASection({
  eyebrow = "Get Started",
  title,
  subtitle,
  primary = { label: "Get a Free RCM Assessment", href: "/contact" },
  secondary = { label: "Schedule a Consultation", href: "/contact" },
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-ink-900 py-24 md:py-32", className)}>
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-teal-500), transparent 70%)" }}
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            {eyebrow}
          </div>
          <h2 className="font-display text-balance text-3xl leading-[1.15] text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              {subtitle}
            </p>
          )}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href={primary.href} variant="primary" size="lg">
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="outline-light" size="lg" icon={false}>
              {secondary.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
