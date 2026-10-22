import { Footer } from "@/components/layout/footer";
import { PageShell } from "@/components/layout/page-shell";
import { SiteHeader } from "@/components/layout/site-header";
import { AwardsSection } from "@/components/sections/awards";
import { BlogSection } from "@/components/sections/blog";
import { CaseStudySection } from "@/components/sections/case-study";
import { FaqSection } from "@/components/sections/faq";
import { FeaturedOnSection } from "@/components/sections/featured-on";
import { FounderSection } from "@/components/sections/founder";
import { HeroSection } from "@/components/sections/hero";
import { OurServicesSection } from "@/components/sections/our-services";
import { StatsBar } from "@/components/sections/stats-bar";
import { TeamSection } from "@/components/sections/team";
import { TestimonialsHeader } from "@/components/sections/testimonials";
import { TrustedPartnersHeader } from "@/components/sections/trusted-partners";
import { WhyUsSection } from "@/components/sections/why-us";
import { SeoCtaSection } from "@/features/homepage/components/seo-cta";

export function ExistingHomePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <SiteHeader />
      <PageShell>
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
        <TeamSection />
        <FeaturedOnSection />
        <FaqSection />
        <BlogSection />
        <SeoCtaSection />
      </main>
      <Footer />
    </PageShell>
    </div>
  );
}
