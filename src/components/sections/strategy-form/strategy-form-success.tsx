import { CheckCircle2 } from "lucide-react";

import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";

export interface StrategyFormSuccessProps {
  firstName: string;
}

export function StrategyFormSuccess({ firstName }: StrategyFormSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
        <CheckCircle2 className="h-6 w-6" />
      </div>
      <Heading level={3} size="sm" className="mt-4">
        Request Received!
      </Heading>
      <Text variant="muted" className="mt-2 text-sm">
        Thank you, {firstName}. Our strategy team will review your website and contact you within 24
        hours.
      </Text>
    </div>
  );
}
