import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

import { ModernFounderPortrait } from "./modern-founder-portrait";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0-.01-3.26 1.63 1.63 0 0 0 .01 3.26m1.4 9.74V9.93H5.06v8.57h2.8Z" />
    </svg>
  );
}

export function ModernFounderSection({ className }: { className?: string }) {
  return (
    <section
      id="about-founder"
      aria-label="About Our Founder"
      style={{
        backgroundImage: "url('/images/founder-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
      className={cn("relative w-full overflow-hidden pt-12 pb-16 sm:pb-24", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-white/70 select-none backdrop-blur-[2px]"
      />
      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex justify-center lg:col-span-5">
            <ModernFounderPortrait />
          </div>

          <div className="flex flex-col justify-center lg:col-span-7 text-left max-w-[620px]">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-[1px] w-8 sm:w-10 bg-gradient-to-r from-transparent via-[#267C6B]/40 to-[#267C6B]" />
              <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#267C6B] select-none">
                ABOUT OUR FOUNDER
              </span>
              <div className="h-[1px] w-8 sm:w-10 bg-gradient-to-l from-transparent via-[#267C6B]/40 to-[#267C6B]" />
            </div>

            <Heading
              level={2}
              className="mt-4 sm:mt-5 text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight leading-[1.18] text-[#123C3A]"
            >
              <span>Hi, I&apos;m Renu. I built Tanot Solutions to make SEO </span>
              <span className="bg-gradient-to-r from-[#123C3A] via-[#267C6B] to-[#267C6B] bg-clip-text text-transparent">
                accountable.
              </span>
            </Heading>

            <div className="mt-4 sm:mt-5 space-y-4 text-[14.5px] sm:text-[15.5px] font-normal leading-[1.65] text-[#637773]">
              <Text>
                For over 11 years, I&apos;ve helped brands grow through search, from early-stage
                startups to global enterprises. Along the way, I saw how easily businesses lose
                trust in SEO: vague reports, guaranteed #1 rankings that never happen, cheap spammy
                links that lead to penalties, and agencies that disappear once the contract
                is signed.
              </Text>
              <Text>
                I founded Tanot Solutions in 2020 to change that, with honest strategy, ethical
                practices, and complete transparency at every step.
              </Text>
            </div>

            <div className="mt-5 sm:mt-6 flex flex-col text-left">
              <span className="text-[16px] sm:text-[17px] font-bold text-[#123C3A]">
                Renu Sharma
              </span>
              <span className="text-[13.5px] sm:text-[14px] font-medium text-[#637773]">
                Founder &amp; Head of SEO Strategy
              </span>
            </div>

            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 pt-2 w-full sm:w-auto">
              <Link
                href="#audit"
                className="h-[50px] sm:h-[54px] rounded-[12px] bg-[#267C6B] hover:bg-[#123C3A] px-6 text-[15.5px] sm:text-[16px] font-medium leading-[1.2] text-white shadow-[0_4px_10px_rgba(38,124,107,0.16)] flex items-center justify-center gap-2 transition-colors"
              >
                <span className="whitespace-nowrap">Book a call with Renu</span>
                <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[50px] sm:h-[54px] rounded-[12px] border-2 border-[#267C6B] bg-white px-5 sm:px-6 text-[15.5px] sm:text-[16px] font-medium leading-[1.2] text-[#267C6B] shadow-[0_2px_6px_rgba(18,60,58,0.04)] hover:bg-[#DDF5E8]/30 flex items-center justify-center gap-2 transition-colors"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0 fill-[#267C6B]" />
                <span className="whitespace-nowrap">Connect on LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
