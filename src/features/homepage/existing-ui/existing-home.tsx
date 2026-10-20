import { Container } from "@/components/common/container";
import { Text } from "@/components/common/text";

import { ExistingHeroSection } from "./components/hero-section";

export function ExistingHomePage() {
  return (
    <Container className="py-12">
      <div className="flex flex-col gap-8">
        <div>
          <Text variant="h1">Concept 1: Existing UI Enhancement</Text>
          <Text variant="muted" className="mt-2">
            Targeted enhancements to the current live website architecture and aesthetic.
          </Text>
        </div>
        <ExistingHeroSection />
      </div>
    </Container>
  );
}
