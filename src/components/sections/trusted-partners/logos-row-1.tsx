import type { ReactNode } from "react";

export function EnhancvLogo(): ReactNode {
  return (
    <div className="flex items-center gap-1.5 text-[#00A389]">
      <svg
        className="h-4.5 w-4.5 sm:h-5 sm:w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.267-8-12.362-8-5.096 0-5.096 8 0 8 5.095 0 7.267-8 12.362-8z" />
      </svg>
      <span className="text-[14.5px] sm:text-[17px] font-bold text-[#162D3D]">Enhancv</span>
    </div>
  );
}

export function LearnTasticLogo(): ReactNode {
  return (
    <div className="flex items-center text-[#1A1A1A]">
      <span className="text-[14.5px] sm:text-[17px] font-black tracking-tight">LearnTastic</span>
      <span className="text-[9px] font-bold align-top ml-0.5">™</span>
    </div>
  );
}

export function KommoLogo(): ReactNode {
  return (
    <div className="flex items-center text-[#0E1E38]">
      <span className="text-[15.5px] sm:text-[18px] font-black tracking-tight uppercase">
        Kommo
      </span>
    </div>
  );
}

export function SendPulseLogo(): ReactNode {
  return (
    <div className="flex items-center gap-1 text-[#0089D0]">
      <span className="text-[14.5px] sm:text-[17px] font-bold text-[#0089D0]">SendPulse</span>
      <svg className="h-3.5 w-3.5 stroke-[#0089D0]" viewBox="0 0 24 24" fill="none" strokeWidth="3">
        <path d="M2 12h5l3-9 4 18 3-9h5" />
      </svg>
    </div>
  );
}

export function EngagebayLogo(): ReactNode {
  return (
    <div className="flex items-center gap-1.5">
      <span className="flex h-4 w-4 sm:h-4.5 sm:w-4.5 items-center justify-center rounded-full bg-[#E5484D] text-[10px] font-bold text-white">
        e
      </span>
      <span className="text-[14.5px] sm:text-[17px] font-bold text-[#DE3B3B]">engagebay</span>
    </div>
  );
}

export function FreshLearnLogo(): ReactNode {
  return (
    <div className="flex items-center gap-1 text-[#0D6EFD]">
      <svg className="h-4 w-4 fill-[#0D6EFD]" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="text-[14.5px] sm:text-[17px] font-bold text-[#0A2540]">FreshLearn</span>
    </div>
  );
}

export function StationXLogo(): ReactNode {
  return (
    <div className="flex items-center text-[#102A43]">
      <span className="text-[13.5px] sm:text-[16px] font-black tracking-wider uppercase border-b-2 border-[#102A43] pb-0.5">
        STATION<span className="text-[#0D6EFD]">X</span>
      </span>
    </div>
  );
}

export function LeadSyncLogo(): ReactNode {
  return (
    <div className="flex items-center gap-1 text-[#0284C7]">
      <svg
        className="h-4.5 w-4.5 stroke-[#0284C7]"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2.5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
      <span className="text-[14.5px] sm:text-[17px] font-bold text-[#0F172A]">LeadSync</span>
    </div>
  );
}
