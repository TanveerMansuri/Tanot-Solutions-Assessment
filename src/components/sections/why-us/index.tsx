import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

import { WhyUsEyebrow } from "./why-us-eyebrow";
import { WhyUsGrid } from "./why-us-grid";
import { WhyUsNarrative } from "./why-us-narrative";

export interface WhyUsSectionProps {
  className?: string;
}

export function WhyUsSection({ className }: WhyUsSectionProps) {
  return (
    <section
      id="why-us"
      aria-label="Why Choose Tanot Solutions"
      style={{
        backgroundImage: "url('/why-tanot-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={cn("relative w-full overflow-hidden pt-12 pb-16 sm:pb-24", className)}
    >
      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Centered Section Label: WHY TANOT SOLUTIONS */}
        <WhyUsEyebrow />

        {/* Two-Column Layout: Left Narrative (45%) & Right 6-Benefit Grid (55%) */}
        <div className="mt-10 sm:mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <WhyUsNarrative />
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <WhyUsGrid />
          </div>
        </div>
      </Container>
    </section>
  );
}
