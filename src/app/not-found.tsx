import { Compass } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="white" className="flex min-h-[60vh] items-center">
      <div className="mx-auto max-w-lg text-center">
        <Compass className="mx-auto h-10 w-10 text-teal-500" />
        <div className="mt-4 font-display text-5xl text-ink-900">404</div>
        <h1 className="mt-3 font-display text-2xl text-ink-900">Page not found</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Explore our site
          from the homepage, or reach out if you can&apos;t find what you need.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="secondary" icon={false}>
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
