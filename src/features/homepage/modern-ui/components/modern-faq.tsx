import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { ModernFaqAccordion } from "./modern-faq-accordion";

const TRUST_BENEFITS = ["No obligation", "Actionable roadmap", "1:1 strategy call"];

export function ModernFaqSection({ className }: { className?: string }) {
  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className={cn("relative w-full pt-12 pb-16 sm:pb-24 overflow-hidden", className)}
    >
      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-center gap-4 sm:gap-6">
          <div className="h-[1px] w-12 sm:w-20 md:w-28 bg-gradient-to-r from-transparent via-[#267C6B]/40 to-[#267C6B]" />
          <span className="inline-flex items-center justify-center rounded-full bg-[#DDF5E8] px-4 py-1.5 sm:px-5 sm:py-2 text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-[#123C3A] leading-none select-none shadow-[0_1px_2px_rgba(18,60,58,0.06)]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <div className="h-[1px] w-12 sm:w-20 md:w-28 bg-gradient-to-l from-transparent via-[#267C6B]/40 to-[#267C6B]" />
        </div>

        <div className="mt-12 sm:mt-16 grid w-full grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
          <div className="lg:col-span-5 flex flex-col justify-start text-left">
            <Heading
              level={2}
              className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold tracking-tight text-[#123C3A] leading-[1.12] max-w-[500px]"
            >
              Questions to ask before hiring an SEO agency
            </Heading>

            <Text className="mt-5 sm:mt-6 text-[15.5px] sm:text-[16.5px] font-normal leading-[1.6] text-[#637773] max-w-[460px]">
              Can&rsquo;t find your answer? We&rsquo;re happy to walk you through it on a quick
              call.
            </Text>

            <div className="mt-6 flex flex-col text-[#637773] max-w-[460px]">
              <span className="text-[15px] sm:text-[16px] font-bold text-[#123C3A]">
                Still deciding?
              </span>
              <Text className="mt-1.5 text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#637773]">
                Get a free, no-obligation audit showing your website&rsquo;s current position and a
                step-by-step roadmap to 2X your traffic and leads.
              </Text>
            </div>

            <div className="mt-8 w-full sm:w-auto">
              <Link
                href="#audit"
                className="h-[52px] sm:h-[54px] w-full sm:w-auto rounded-[12px] bg-[#267C6B] hover:bg-[#123C3A] px-6 sm:px-7 text-[15.5px] sm:text-[16px] font-semibold text-white shadow-[0_4px_14px_rgba(38,124,107,0.25)] transition-all flex items-center justify-center gap-2.5"
              >
                <span>Claim your free SEO growth plan</span>
                <ArrowRight className="h-4 w-4 stroke-[2.4] shrink-0" />
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5 text-[13px] sm:text-[13.5px] font-medium text-[#637773]">
              {TRUST_BENEFITS.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DDF5E8] text-[#267C6B]">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-start">
            <ModernFaqAccordion />
          </div>
        </div>
      </Container>
    </section>
  );
}
