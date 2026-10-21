import { Container } from "@/components/common/container";
import { PageShell } from "@/components/layout/page-shell";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero";

export function ExistingHomePage() {
  return (
    <PageShell>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
      </main>
      <footer className="border-t border-zinc-200/50 py-6 text-center text-xs text-zinc-500">
        <Container>© 2026 Tanot Solutions. Enhanced Preview.</Container>
      </footer>
    </PageShell>
  );
}
