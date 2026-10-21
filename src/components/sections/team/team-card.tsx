import Image from "next/image";

import { cn } from "@/lib/utils";

import type { TeamMember } from "./team-data";

export interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0-.01-3.26 1.63 1.63 0 0 0 .01 3.26m1.4 9.74V9.93H5.06v8.57h2.8Z" />
    </svg>
  );
}

export function TeamCard({ member, className }: TeamCardProps) {
  const { name, role, imageSrc, linkedinUrl } = member;

  return (
    <div
      className={cn(
        "flex h-full flex-col items-center text-center",
        "rounded-[16px] border border-[#DCE7F2] bg-white p-3.5 sm:p-4.5",
        "shadow-[0_4px_20px_rgba(20,45,75,0.04)]",
        "transition-all duration-200 hover:-translate-y-1 hover:border-[#168BCB]/60 hover:shadow-[0_10px_28px_rgba(22,139,203,0.08)]",
        className
      )}
    >
      {/* Photo Container with rounded corners */}
      <div className="relative aspect-[1.18/1] w-full overflow-hidden rounded-[12px] bg-[#F1F6FB]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Name & Role */}
      <div className="mt-4 flex flex-1 flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <h3 className="text-[16px] sm:text-[17px] font-bold tracking-tight text-[#102544] leading-snug">
            {name}
          </h3>
          <p className="mt-1 text-[13px] sm:text-[13.5px] font-normal leading-normal text-[#5A6F89]">
            {role}
          </p>
        </div>

        {/* LinkedIn Button Icon */}
        <div className="mt-3.5">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}'s LinkedIn Profile`}
            className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-[#168BCB] bg-white text-[#168BCB] transition-colors hover:bg-[#168BCB] hover:text-white"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
