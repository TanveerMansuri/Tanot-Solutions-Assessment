import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

import { AwardsGrid } from "./awards-grid";
import { AwardsHeader } from "./awards-header";

export interface AwardsSectionProps {
  className?: string;
}

export function AwardsSection({ className }: AwardsSectionProps) {
  return (
    <section
      id="awards"
      aria-label="Awards and Recognition"
      className={cn("relative w-full overflow-hidden bg-white pt-12 pb-16 sm:pb-24", className)}
    >
      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <AwardsHeader />

        {/* 6-Award Responsive Grid */}
        <div className="mt-10 sm:mt-12 w-full">
          <AwardsGrid />
        </div>
      </Container>
    </section>
  );
}
