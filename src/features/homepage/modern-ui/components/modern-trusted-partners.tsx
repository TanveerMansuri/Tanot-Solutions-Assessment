"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { AndManyMoreFooter } from "@/components/sections/trusted-partners/and-many-more";
import { PartnerLogoGrid } from "@/components/sections/trusted-partners/partner-logo-grid";
import { cn } from "@/lib/utils";

export interface ModernTrustedPartnersProps {
  className?: string;
}

export function ModernTrustedPartners({ className }: ModernTrustedPartnersProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn("w-full pt-8 pb-14 sm:pb-20 text-center relative", className)}
    >
      <Container className="flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center justify-center rounded-full bg-[#DDF5E8] px-4 py-1.5 sm:px-5 sm:py-2 text-[14px] sm:text-[15px] font-bold uppercase tracking-wider text-[#123C3A] leading-[24px] select-none shadow-[0_1px_2px_rgba(18,60,58,0.06)]">
          TRUSTED PARTNERS
        </span>

        <Heading
          level={2}
          className="mt-6 sm:mt-7 max-w-[1240px] text-center text-[28px] sm:text-[38px] lg:text-[46px] xl:text-[48px] font-bold tracking-tight text-[#123C3A] leading-[1.2] lg:leading-[1.18]"
        >
          <span className="block">Trusted By 150+ Brands Across</span>
          <span className="bg-gradient-to-r from-[#123C3A] via-[#267C6B] to-[#267C6B] bg-clip-text text-transparent inline-block whitespace-normal lg:whitespace-nowrap mt-1">
            SaaS, Healthcare, Marketing, B2B And Enterprise
          </span>
        </Heading>

        <Text className="mt-4 sm:mt-4.5 max-w-[940px] text-center text-[16px] sm:text-[18px] lg:text-[20.5px] font-normal text-[#637773] leading-[1.58]">
          We&apos;ve helped startups, growing businesses, and global enterprises improve their
          search visibility, drive qualified leads, and achieve measurable growth.
        </Text>

        <PartnerLogoGrid isVisible={isVisible} />
        <AndManyMoreFooter />
      </Container>
    </section>
  );
}
