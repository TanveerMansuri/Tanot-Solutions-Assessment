import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { WHY_US_BENEFITS } from "@/components/sections/why-us/why-us-data";
import { cn } from "@/lib/utils";

export function ModernWhyUsSection({ className }: { className?: string }) {
  return (
    <section
      id="why-us"
      aria-label="Why Choose Tanot Solutions"
      style={{
        backgroundImage: "url('/why-tanot-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={cn("relative w-full overflow-hidden pt-12 pb-16 sm:pb-24", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-white/70 select-none backdrop-blur-[2px]"
      />
      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center justify-center rounded-full bg-[#DDF5E8] px-4 py-1.5 sm:px-5 sm:py-2 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-[#123C3A] leading-none select-none shadow-[0_1px_2px_rgba(18,60,58,0.06)]">
          WHY TANOT SOLUTIONS
        </span>

        <div className="mt-10 sm:mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <Heading
              level={2}
              className="text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-bold tracking-tight leading-[1.12] text-[#123C3A]"
            >
              <span className="block">A growth partner,</span>
              <span className="bg-gradient-to-r from-[#123C3A] via-[#267C6B] to-[#267C6B] bg-clip-text text-transparent">
                not another SEO
              </span>{" "}
              <span>agency.</span>
            </Heading>

            <Text className="mt-4 sm:mt-5 text-[15.5px] sm:text-[17px] font-normal leading-[1.65] text-[#637773]">
              Clients describe working with us as &ldquo;less like a vendor, more like a
              partner.&rdquo; Here&rsquo;s why they stay for 2+ years on average.
            </Text>

            <div className="mt-6 sm:mt-8 w-full sm:w-auto">
              <Link
                href="#audit"
                className="h-[50px] sm:h-[54px] w-full sm:w-auto rounded-[12px] bg-[#267C6B] hover:bg-[#123C3A] px-6 sm:px-7 text-[16px] font-medium leading-[1.2] text-white shadow-[0_4px_10px_rgba(38,124,107,0.16)] flex items-center justify-center gap-2 transition-colors"
              >
                <span className="whitespace-nowrap">Talk to our team</span>
                <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {WHY_US_BENEFITS.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex flex-col justify-start rounded-[18px] sm:rounded-[20px] border border-[#D7E5DE] bg-white p-4 sm:p-5 shadow-[0_4px_16px_rgba(18,60,58,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(18,60,58,0.07)] hover:border-[#267C6B]"
                >
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#DDF5E8] text-[#267C6B] border border-[#D7E5DE]">
                    {benefit.icon}
                  </div>
                  <div className="mt-4 flex flex-col text-left">
                    <h3 className="text-[16px] sm:text-[17px] font-bold tracking-tight text-[#123C3A] leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] sm:text-[14px] font-normal leading-[1.6] text-[#637773]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
