import Image from "next/image";

import { Container } from "@/components/common/container";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { TEAM_MEMBERS } from "@/components/sections/team/team-data";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0-.01-3.26 1.63 1.63 0 0 0 .01 3.26m1.4 9.74V9.93H5.06v8.57h2.8Z" />
    </svg>
  );
}

export function ModernTeamSection({ className }: { className?: string }) {
  return (
    <section
      id="team"
      aria-label="Meet Our Team"
      className={cn("relative w-full overflow-hidden bg-white pt-12 pb-16 sm:pb-24", className)}
    >
      <Container className="relative z-10 flex flex-col items-center max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-[960px]">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-[1px] w-8 sm:w-10 bg-gradient-to-r from-transparent via-[#267C6B]/40 to-[#267C6B]" />
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#267C6B] select-none">
              OUR SPECIALISTS
            </span>
            <div className="h-[1px] w-8 sm:w-10 bg-gradient-to-l from-transparent via-[#267C6B]/40 to-[#267C6B]" />
          </div>

          <Heading
            level={2}
            className="mt-4 sm:mt-5 text-[32px] sm:text-[44px] lg:text-[52px] font-bold tracking-tight text-[#123C3A] leading-[1.14]"
          >
            <span>The Team Behind Your </span>
            <span className="bg-gradient-to-r from-[#123C3A] via-[#267C6B] to-[#267C6B] bg-clip-text text-transparent">
              Search Visibility Growth
            </span>
          </Heading>

          <Text className="mt-4 sm:mt-5 text-[16px] sm:text-[19px] lg:text-[20px] font-normal text-[#637773] leading-[1.5]">
            Seasoned practitioners dedicated to high-impact link building, content marketing, and
            technical search execution.
          </Text>
        </div>

        <div className="mt-10 sm:mt-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7 items-stretch">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="flex h-full flex-col items-center text-center rounded-[16px] border border-[#D7E5DE] bg-white p-3.5 sm:p-4.5 shadow-[0_4px_20px_rgba(18,60,58,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#267C6B] hover:shadow-[0_10px_28px_rgba(38,124,107,0.08)]"
              >
                <div className="relative aspect-[1.18/1] w-full overflow-hidden rounded-[12px] bg-[#F7FAF7]">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex flex-1 flex-col items-center justify-between">
                  <div className="flex flex-col items-center">
                    <h3 className="text-[16px] sm:text-[17px] font-bold tracking-tight text-[#123C3A] leading-snug">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[13px] sm:text-[13.5px] font-normal leading-normal text-[#637773]">
                      {member.role}
                    </p>
                  </div>
                  <div className="mt-3.5">
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn Profile`}
                      className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-[#267C6B] bg-white text-[#267C6B] transition-colors hover:bg-[#267C6B] hover:text-white"
                    >
                      <LinkedInIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
