import type { ReactNode } from "react";

export function SmoothstackLogo(): ReactNode {
  return (
    <div className="flex items-center gap-1.5 text-[#1E293B]">
      <span className="flex h-4.5 w-4.5 sm:h-5 sm:w-5 items-center justify-center rounded bg-[#0F172A] text-[11px] sm:text-[12px] font-black text-white">
        S
      </span>
      <span className="text-[13.5px] sm:text-[16px] font-bold text-[#1E293B]">smoothstack</span>
    </div>
  );
}

export function GravytyLogo(): ReactNode {
  return (
    <div className="flex items-center text-[#1D4ED8]">
      <span className="text-[15.5px] sm:text-[18px] font-black tracking-tight text-[#1E40AF]">
        gravyty
      </span>
    </div>
  );
}

export function BeamjobsLogo(): ReactNode {
  return (
    <div className="flex items-center gap-1 text-[#2563EB]">
      <span className="text-[15px] sm:text-[17.5px] font-black text-[#1D4ED8]">b</span>
      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#EAB308]" />
      <span className="text-[15px] sm:text-[17.5px] font-black text-[#1D4ED8]">amjobs</span>
    </div>
  );
}

export function TraceFuseLogo(): ReactNode {
  return (
    <div className="flex items-center gap-1.5 text-[#334155]">
      <svg
        className="h-4.5 w-4.5 stroke-[#0284C7]"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2.5"
      >
        <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
      </svg>
      <span className="text-[12.5px] sm:text-[14.5px] font-black tracking-wider uppercase text-[#334155]">
        TRACEFUSE
      </span>
    </div>
  );
}

export function MovinnzaLogo(): ReactNode {
  return (
    <div className="flex flex-col items-center leading-none text-[#0284C7]">
      <div className="flex items-center gap-0.5">
        <span className="text-[12px] sm:text-[14px] font-black text-[#0284C7]">M</span>
        <span className="text-[13px] sm:text-[15.5px] font-black text-[#0F172A]">MOVINNZA</span>
      </div>
      <span className="text-[7px] sm:text-[8px] tracking-widest text-[#64748B] uppercase font-bold mt-0.5">
        DIGITAL GROWTH
      </span>
    </div>
  );
}

export function AmericanHealthLogo(): ReactNode {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#16A34A] text-white text-[11px] sm:text-[12px] font-bold">
        +
      </div>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[11px] sm:text-[13px] font-extrabold text-[#1E293B]">American</span>
        <span className="text-[8px] sm:text-[9.5px] text-[#DC2626] font-bold">Health Care</span>
      </div>
    </div>
  );
}

export function FluxEngineLogo(): ReactNode {
  return (
    <div className="flex flex-col items-center leading-none">
      <span className="text-[16px] sm:text-[19px] italic font-bold text-[#0D9488]">flux</span>
      <span className="text-[7px] sm:text-[8px] tracking-widest text-[#14B8A6] uppercase font-extrabold mt-0.5">
        ENGINE
      </span>
    </div>
  );
}

export function UltahostLogo(): ReactNode {
  return (
    <div className="flex items-center gap-1 text-[#0284C7]">
      <span className="text-[15px] sm:text-[17.5px] font-black text-[#0066FF]">U•H</span>
      <span className="text-[14px] sm:text-[16.5px] font-bold text-[#0F172A]">Ultahost</span>
    </div>
  );
}
