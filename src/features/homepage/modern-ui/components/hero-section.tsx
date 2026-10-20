import { Card } from "@/components/common/card";
import { Text } from "@/components/common/text";

export function ModernHeroSection() {
  return (
    <Card className="border-indigo-100 bg-indigo-50/50 dark:border-indigo-950 dark:bg-indigo-950/20">
      <div className="flex flex-col gap-3">
        <Text variant="h2" className="text-indigo-900 dark:text-indigo-300">
          Modern B2B Agency Concept
        </Text>
        <Text variant="body">
          High-conversion modern aesthetic, rich typography, and sleek digital marketing showcase.
        </Text>
      </div>
    </Card>
  );
}
