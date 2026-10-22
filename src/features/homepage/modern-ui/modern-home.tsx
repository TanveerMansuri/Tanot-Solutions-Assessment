import { ModernHeroSection } from "./components/hero-section";
import { ModernAwardsSection } from "./components/modern-awards";
import { ModernBlogSection } from "./components/modern-blog";
import { ModernCaseStudySection } from "./components/modern-case-study";
import { ModernFaqSection } from "./components/modern-faq";
import { ModernFeaturedOnSection } from "./components/modern-featured-on";
import { ModernFooter } from "./components/modern-footer";
import { ModernFounderSection } from "./components/modern-founder";
import { ModernOurServicesSection } from "./components/modern-our-services";
import { ModernPageShell } from "./components/modern-page-shell";
import { ModernSeoCtaSection } from "./components/modern-seo-cta";
import { ModernSiteHeader } from "./components/modern-site-header";
import { ModernStatsBar } from "./components/modern-stats-bar";
import { ModernTeamSection } from "./components/modern-team";
import { ModernTestimonials } from "./components/modern-testimonials";
import { ModernTrustedPartners } from "./components/modern-trusted-partners";
import { ModernWhyUsSection } from "./components/modern-why-us";

export function ModernHomePage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <ModernSiteHeader />
      <ModernPageShell>
        <main className="flex-1">
          <ModernHeroSection />
          <ModernStatsBar />
          <ModernTrustedPartners />
          <ModernTestimonials />
          <ModernOurServicesSection />
          <ModernCaseStudySection />
          <ModernWhyUsSection />
          <ModernAwardsSection />
          <ModernFounderSection />
          <ModernTeamSection />
          <ModernFeaturedOnSection />
          <ModernFaqSection />
          <ModernBlogSection />
          <ModernSeoCtaSection />
        </main>
        <ModernFooter />
      </ModernPageShell>
    </div>
  );
}
