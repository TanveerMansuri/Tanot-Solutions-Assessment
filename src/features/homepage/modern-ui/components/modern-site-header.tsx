"use client";

import { useState } from "react";

import { Container } from "@/components/common/container";
import { useScrollHeader } from "@/components/layout/site-header/use-scroll-header";
import { cn } from "@/lib/utils";

import { ModernHeaderCTA } from "./modern-header-cta";
import { ModernLogo } from "./modern-logo";
import { ModernMobileNavigation } from "./modern-mobile-navigation";
import { ModernNavigationMenu } from "./modern-navigation-menu";

export function ModernSiteHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const headerRef = useScrollHeader<HTMLElement>({
    headerHeight: 82,
    topThreshold: 10,
    pauseAutoCollapse: isMobileNavOpen,
  });

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-[#D7E5DE] bg-white shadow-xs",
        "backdrop-blur-md will-change-transform motion-reduce:transform-none"
      )}
    >
      <Container className="flex h-[82px] items-center justify-between">
        <ModernLogo />
        <ModernNavigationMenu />
        <div className="flex items-center gap-2 sm:gap-3">
          <ModernHeaderCTA />
          <ModernMobileNavigation onOpenChange={setIsMobileNavOpen} />
        </div>
      </Container>
    </header>
  );
}
