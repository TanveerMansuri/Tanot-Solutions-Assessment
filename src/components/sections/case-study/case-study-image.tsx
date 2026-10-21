import Image from "next/image";

import { cn } from "@/lib/utils";

export interface CaseStudyImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function CaseStudyImage({
  src = "/images/case-study-dashboard.png",
  alt = "HR company SEO growth dashboard analytics showing zero to 6200 monthly visitors",
  className,
}: CaseStudyImageProps) {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[490px] w-full items-center justify-center overflow-hidden rounded-[16px] border border-[#168BCB] bg-white p-2.5 sm:p-3 shadow-[0_8px_32px_rgba(20,45,75,0.06)]",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[#F8FAFC]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}
