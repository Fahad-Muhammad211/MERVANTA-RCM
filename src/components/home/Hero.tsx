import { Globe2, ShieldCheck, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-14 text-white md:pb-28 md:pt-20">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[560px] w-[560px] rounded-full opacity-25 blur-[140px]"
        style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 top-40 h-[420px] w-[420px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-gold-500), transparent 70%)" }}
      />

      <Container className="relative">
        <Reveal className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
          <Globe2 className="h-4 w-4" />
          Global Healthcare Revenue Cycle Partner
        </Reveal>

        <Reveal delay={0.06} className="mt-7 max-w-4xl">
          <h1 className="text-balance font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            End-to-end revenue cycle solutions for healthcare organizations worldwide.
          </h1>
        </Reveal>

        <Reveal delay={0.12} className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
          Mervanta RCM combines certified specialists, standardized operational infrastructure,
          and enterprise-grade security to manage the full revenue cycle — from patient access
          to final reconciliation — for practices, hospitals, and health systems at any scale.
        </Reveal>

        <Reveal delay={0.18} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Get a Free RCM Assessment
          </Button>
          <Button href="/contact" variant="outline-light" size="lg" icon={false}>
            Schedule a Consultation
          </Button>
        </Reveal>

        <Reveal delay={0.24} className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2.5 text-sm text-slate-300">
            <Globe2 className="h-4 w-4 text-teal-300" />
            Operating across North America, the UK, Australia &amp; international delivery centers
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-300">
            <ShieldCheck className="h-4 w-4 text-teal-300" />
            HIPAA-aligned security &amp; compliance program
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-300">
            <Building2 className="h-4 w-4 text-teal-300" />
            Built for single practices through enterprise health systems
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
