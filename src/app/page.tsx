import { Hero } from "@/components/home/Hero";
import { GlobalPresenceStrip } from "@/components/home/GlobalPresenceStrip";
import { ValueProps } from "@/components/home/ValueProps";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { RcmEcosystemPreview } from "@/components/home/RcmEcosystemPreview";
import { SpecialtiesOverview } from "@/components/home/SpecialtiesOverview";
import { WhoWeServePreview } from "@/components/home/WhoWeServePreview";
import { EnterpriseArchitecture } from "@/components/home/EnterpriseArchitecture";
import { TechnologyPreview } from "@/components/home/TechnologyPreview";
import { SecurityPreview } from "@/components/home/SecurityPreview";
import { QualityAssurancePreview } from "@/components/home/QualityAssurancePreview";
import { ClientSuccessPreview } from "@/components/home/ClientSuccessPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ClientLogosSection } from "@/components/home/ClientLogosSection";
import { LeadershipPreview } from "@/components/home/LeadershipPreview";
import { GlobalOperationsPreview } from "@/components/home/GlobalOperationsPreview";
import { KnowledgeCenterPreview } from "@/components/home/KnowledgeCenterPreview";
import { CareersPreview } from "@/components/home/CareersPreview";
import { CTASection } from "@/components/ui/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalPresenceStrip />
      <ValueProps />
      <StatsSection />
      <ServicesOverview />
      <RcmEcosystemPreview />
      <SpecialtiesOverview />
      <WhoWeServePreview />
      <EnterpriseArchitecture />
      <TechnologyPreview />
      <SecurityPreview />
      <QualityAssurancePreview />
      <ClientSuccessPreview />
      <TestimonialsSection />
      <ClientLogosSection />
      <LeadershipPreview />
      <GlobalOperationsPreview />
      <KnowledgeCenterPreview />
      <CareersPreview />
      <CTASection
        eyebrow="Let's Talk"
        title="Ready to see what a true enterprise RCM partner looks like?"
        subtitle="Tell us about your organization and we'll walk you through a free assessment of your current revenue cycle performance."
      />
    </>
  );
}
