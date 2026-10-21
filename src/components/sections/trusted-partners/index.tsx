"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { AndManyMoreFooter } from "./and-many-more";
import { PartnerLogoGrid } from "./partner-logo-grid";
import { TrustedPartnersEyebrow } from "./trusted-partners-eyebrow";

export interface TrustedPartnersHeaderProps {
  className?: string;
}

export function TrustedPartnersHeader({ className }: TrustedPartnersHeaderProps) {
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
        <TrustedPartnersEyebrow />

        <Heading
          level={2}
          className="mt-6 sm:mt-7 max-w-[1240px] text-center text-[28px] sm:text-[38px] lg:text-[46px] xl:text-[48px] font-bold tracking-tight text-[#102544] leading-[1.2] lg:leading-[1.18]"
        >
          <span className="block">Trusted By 150+ Brands Across</span>
          <span className="bg-gradient-to-r from-[#0877D1] to-[#49B4F0] bg-clip-text text-transparent inline-block whitespace-normal lg:whitespace-nowrap mt-1">
            SaaS, Healthcare, Marketing, B2B And Enterprise
          </span>
        </Heading>

        <Text className="mt-4 sm:mt-4.5 max-w-[940px] text-center text-[16px] sm:text-[18px] lg:text-[20.5px] font-normal text-[#435B78] leading-[1.58]">
          We&apos;ve helped startups, growing businesses, and global enterprises improve their
          search visibility, drive qualified leads, and achieve measurable growth.
        </Text>

        <PartnerLogoGrid isVisible={isVisible} />
        <AndManyMoreFooter />
      </Container>
    </section>
  );
}
