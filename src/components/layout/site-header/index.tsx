import { Container } from "@/components/common/container";
import { Logo } from "@/components/layout/logo";
import { MobileNavigation } from "@/components/layout/navigation/mobile-navigation";
import { NavigationMenu } from "@/components/layout/navigation/navigation-menu";

import { HeaderCTA } from "./header-cta";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white shadow-xs">
      <Container className="flex h-[82px] items-center justify-between">
        <Logo />
        <NavigationMenu />
        <div className="flex items-center gap-2 sm:gap-3">
          <HeaderCTA />
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
