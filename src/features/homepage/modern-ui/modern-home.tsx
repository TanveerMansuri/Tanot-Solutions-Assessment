import { Container } from "@/components/common/container";
import { Text } from "@/components/common/text";

import { ModernHeroSection } from "./components/hero-section";

export function ModernHomePage() {
  return (
    <Container className="py-12">
      <div className="flex flex-col gap-8">
        <div>
          <Text variant="h1">Concept 2: Modern UI Concept</Text>
          <Text variant="muted" className="mt-2">
            A contemporary, conversion-focused B2B agency design for Tanot Solutions.
          </Text>
        </div>
        <ModernHeroSection />
      </div>
    </Container>
  );
}
