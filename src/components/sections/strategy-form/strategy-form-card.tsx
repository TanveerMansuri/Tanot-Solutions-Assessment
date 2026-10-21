import { Card } from "@/components/common/card";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";

import { StrategyForm } from "./index";

export function StrategyFormCard() {
  return (
    <Card className="w-full max-w-[540px] rounded-[20px] border border-[#E7EEF6] bg-white px-6 py-5 sm:px-[26px] sm:py-[22px] shadow-[0_8px_24px_rgba(20,45,75,0.08)] box-border">
      <div className="text-left">
        <Heading
          level={2}
          className="text-[28px] sm:text-[32px] font-bold tracking-tight text-[#202A35] leading-[1.2]"
        >
          Get Your Free SEO Strategy
        </Heading>
        <Text className="mt-2 mb-3.5 text-[16px] font-normal text-[#657385] leading-[1.5]">
          Tell us about your goals and we&apos;ll show you where your organic growth can improve.
        </Text>
      </div>

      <StrategyForm />
    </Card>
  );
}
