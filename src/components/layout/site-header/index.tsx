"use client";

import { useState } from "react";

import { Container } from "@/components/common/container";
import { Logo } from "@/components/layout/logo";
import { MobileNavigation } from "@/components/layout/navigation/mobile-navigation";
import { NavigationMenu } from "@/components/layout/navigation/navigation-menu";
import { cn } from "@/lib/utils";

import { HeaderCTA } from "./header-cta";
import { useScrollHeader } from "./use-scroll-header";

export function SiteHeader() {
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
        "sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/98 shadow-xs",
        "backdrop-blur-md will-change-transform motion-reduce:transform-none"
      )}
    >
      <Container className="flex h-[82px] items-center justify-between">
        <Logo />
        <NavigationMenu />
        <div className="flex items-center gap-2 sm:gap-3">
          <HeaderCTA />
          <MobileNavigation onOpenChange={setIsMobileNavOpen} />
        </div>
      </Container>
    </header>
  );
}
