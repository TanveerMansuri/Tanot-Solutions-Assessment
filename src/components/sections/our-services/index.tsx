"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

import { ServiceDetailPanel } from "./service-detail-panel";
import { ServiceSelector } from "./service-selector";
import { SERVICES_DATA } from "./services-data";
import { ServicesSectionHeader } from "./services-header";

export interface OurServicesSectionProps {
  className?: string;
  defaultServiceId?: string;
}

export function OurServicesSection({
  className,
  defaultServiceId = "link-building",
}: OurServicesSectionProps) {
  const [activeId, setActiveId] = useState(defaultServiceId);

  const activeService = useMemo(() => {
    return SERVICES_DATA.find((s) => s.id === activeId) ?? SERVICES_DATA[0];
  }, [activeId]);

  return (
    <section
      id="services"
      aria-label="Our Services"
      className={cn("relative w-full overflow-hidden pt-12 pb-16 sm:pb-24", className)}
    >
      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <ServicesSectionHeader />

        {/* Two-Column Service Layout: Left Selector (40%) & Right Detail Panel (60%) */}
        <div className="mt-12 sm:mt-14 grid w-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <ServiceSelector services={SERVICES_DATA} activeId={activeId} onSelect={setActiveId} />
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <ServiceDetailPanel service={activeService} />
          </div>
        </div>
      </Container>
    </section>
  );
}
