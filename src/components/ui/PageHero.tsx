import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  primary,
  secondary,
  size = "default",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  breadcrumb?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  size?: "default" | "compact";
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 70%)" }}
      />
      <Container className={`relative ${size === "compact" ? "py-16 md:py-20" : "py-20 md:py-28"}`}>
        {breadcrumb && (
          <Reveal className="mb-6 flex items-center gap-1.5 text-xs text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-300">{breadcrumb}</span>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal delay={0.04} className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            <span className="h-px w-8 bg-current opacity-60" />
            {eyebrow}
          </Reveal>
        )}
        <Reveal delay={0.08} className="max-w-3xl">
          <h1 className="text-balance font-display text-4xl leading-[1.1] md:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.12} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {subtitle}
          </Reveal>
        )}
        {(primary || secondary) && (
          <Reveal delay={0.16} className="mt-9 flex flex-wrap gap-4">
            {primary && (
              <Button href={primary.href} variant="primary" size="lg">
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button href={secondary.href} variant="outline-light" size="lg" icon={false}>
                {secondary.label}
              </Button>
            )}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
