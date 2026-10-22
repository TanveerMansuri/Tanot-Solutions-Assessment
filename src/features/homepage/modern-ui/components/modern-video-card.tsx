import { Check } from "lucide-react";

export function ModernVideoCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-[24px] border border-[#D7E5DE] bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(18,60,58,0.06)]">
      <div className="relative aspect-video w-full overflow-hidden rounded-[18px] bg-[#123C3A] shadow-inner">
        <video
          className="h-full w-full object-cover"
          controls
          preload="metadata"
          poster="/videos/demo-poster.png"
          playsInline
        >
          <source src="/videos/demo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 sm:mt-6">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-br from-[#267C6B] to-[#123C3A] text-white font-bold text-base shadow-sm ring-2 ring-[#DDF5E8]">
            LW
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[17px] sm:text-[18px] font-bold text-[#123C3A]">Lisa Warren</span>
            <span className="text-[13px] sm:text-[14px] text-[#637773] font-normal">
              Content Manager, HR Company
            </span>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#DDF5E8] px-3.5 py-1.5 text-[12.5px] sm:text-[13px] font-semibold text-[#123C3A] border border-[#D7E5DE] select-none">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#267C6B] text-white">
            <Check className="h-2.5 w-2.5 stroke-[3]" />
          </span>
          <span>Verified Testimonial</span>
        </div>
      </div>
    </div>
  );
}
