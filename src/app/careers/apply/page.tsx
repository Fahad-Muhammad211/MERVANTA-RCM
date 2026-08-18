import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ApplicationForm } from "@/components/careers/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply",
  description: "Submit your application to join the Mervanta RCM team.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Careers / Apply"
        eyebrow="Careers"
        title="Apply to join our team."
        subtitle="Complete the form below and our talent acquisition team will follow up regarding next steps."
        size="compact"
      />
      <Section tone="white" containerSize="narrow">
        <Suspense fallback={null}>
          <ApplicationForm />
        </Suspense>
      </Section>
    </>
  );
}
