import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

import { FounderDetails } from "./founder-details";
import { FounderPortrait } from "./founder-portrait";

export interface FounderSectionProps {
  className?: string;
}

export function FounderSection({ className }: FounderSectionProps) {
  return (
    <section
      id="about-founder"
      aria-label="About Our Founder"
      style={{
        backgroundImage: "url('/images/founder-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
      className={cn("relative w-full overflow-hidden pt-12 pb-16 sm:pb-24", className)}
    >
      {/* Subtle white overlay to ensure perfect contrast and text readability across full section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-white/40 select-none"
      />
      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Two-Column Balanced Layout: Left Founder Portrait & Right Founder Details */}
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex justify-center lg:col-span-5">
            <FounderPortrait />
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <FounderDetails />
          </div>
        </div>
      </Container>
    </section>
  );
}
