"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { SERVICES_DATA } from "@/components/sections/our-services/services-data";
import { cn } from "@/lib/utils";

import { ModernServiceDetailPanel } from "./modern-service-detail-panel";
import { ModernServiceSelectorItem } from "./modern-service-selector-item";

export interface ModernServicesSectionProps {
  className?: string;
  defaultServiceId?: string;
}

export function ModernOurServicesSection({
  className,
  defaultServiceId = "link-building",
}: ModernServicesSectionProps) {
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
        <span className="inline-flex items-center justify-center rounded-full bg-[#DDF5E8] px-4 py-1.5 sm:px-5 sm:py-2 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-[#123C3A] leading-none select-none shadow-[0_1px_2px_rgba(18,60,58,0.06)]">
          OUR SERVICES
        </span>

        <Heading
          level={2}
          className="mt-6 sm:mt-8 max-w-[1240px] text-center text-[34px] sm:text-[48px] md:text-[56px] lg:text-[66px] font-bold tracking-tight leading-[1.12]"
        >
          <span className="block text-[#123C3A]">Comprehensive SEO Solutions</span>
          <span className="mt-1 inline-block bg-gradient-to-r from-[#123C3A] via-[#267C6B] to-[#267C6B] bg-clip-text text-transparent">
            Built For Sustainable Growth
          </span>
        </Heading>

        <Text className="mt-4 sm:mt-5 max-w-[960px] text-center text-[16px] sm:text-[20px] lg:text-[24px] font-normal text-[#637773] leading-[1.5]">
          From high-impact link building to complete organic strategy, we provide data-driven
          services that drive real pipeline revenue.
        </Text>

        <div className="mt-12 sm:mt-14 grid w-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SERVICES_DATA.map((service) => (
              <ModernServiceSelectorItem
                key={service.id}
                service={service}
                isActive={service.id === activeId}
                onSelect={setActiveId}
              />
            ))}
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <ModernServiceDetailPanel service={activeService} />
          </div>
        </div>
      </Container>
    </section>
  );
}
