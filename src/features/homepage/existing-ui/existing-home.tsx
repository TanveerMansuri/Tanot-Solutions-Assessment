import { Container } from "@/components/common/container";
import { PageShell } from "@/components/layout/page-shell";
import { SiteHeader } from "@/components/layout/site-header";
import { AwardsSection } from "@/components/sections/awards";
import { CaseStudySection } from "@/components/sections/case-study";
import { FounderSection } from "@/components/sections/founder";
import { HeroSection } from "@/components/sections/hero";
import { OurServicesSection } from "@/components/sections/our-services";
import { StatsBar } from "@/components/sections/stats-bar";
import { TestimonialsHeader } from "@/components/sections/testimonials";
import { TrustedPartnersHeader } from "@/components/sections/trusted-partners";
import { WhyUsSection } from "@/components/sections/why-us";

export function ExistingHomePage() {
  return (
    <PageShell>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <TrustedPartnersHeader />
        <TestimonialsHeader />
        <OurServicesSection />
        <CaseStudySection />
        <WhyUsSection />
        <AwardsSection />
        <FounderSection />
      </main>
      <footer className="border-t border-zinc-200/50 py-6 text-center text-xs text-zinc-500">
        <Container>© 2026 Tanot Solutions. Enhanced Preview.</Container>
      </footer>
    </PageShell>
  );
}
