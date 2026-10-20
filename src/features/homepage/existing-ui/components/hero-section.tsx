import { Card } from "@/components/common/card";
import { Text } from "@/components/common/text";

export function ExistingHeroSection() {
  return (
    <Card className="border-blue-100 bg-blue-50/50 dark:border-blue-950 dark:bg-blue-950/20">
      <div className="flex flex-col gap-3">
        <Text variant="h2" className="text-blue-900 dark:text-blue-300">
          Existing Website Enhancement
        </Text>
        <Text variant="body">
          Refining current design elements, preserving brand structure, and improving readability.
        </Text>
      </div>
    </Card>
  );
}
