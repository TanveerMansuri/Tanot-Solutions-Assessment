import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

import { ModernHeroContent } from "./modern-hero-content";
import { ModernStrategyFormCard } from "./modern-strategy-form-card";

export function ModernHeroSection() {
  return (
    <Section className="relative py-7 sm:py-9 lg:py-[44px] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-2 left-6 sm:left-10 lg:left-12 z-0 h-40 w-52 opacity-35"
        style={{
          backgroundImage: "radial-gradient(#267C6B 2px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
      />

      <Container className="relative z-10 max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center justify-items-center lg:justify-items-stretch gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="w-full flex justify-center lg:justify-start">
            <ModernHeroContent />
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <ModernStrategyFormCard />
          </div>
        </div>
      </Container>
    </Section>
  );
}
