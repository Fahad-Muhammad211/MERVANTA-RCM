import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  containerClassName,
  containerSize,
  id,
  tone = "paper",
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  containerSize?: "default" | "narrow" | "wide";
  id?: string;
  tone?: "paper" | "ink" | "slate" | "white";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28",
        tone === "paper" && "bg-paper-0",
        tone === "ink" && "bg-ink-900 text-white",
        tone === "slate" && "bg-slate-50",
        tone === "white" && "bg-white",
        className
      )}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]",
            align === "center" && "justify-center",
            tone === "dark" ? "text-teal-600" : "text-teal-300"
          )}
        >
          <span className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-display text-balance text-3xl leading-[1.15] md:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-ink-900" : "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            tone === "dark" ? "text-slate-600" : "text-slate-300"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
