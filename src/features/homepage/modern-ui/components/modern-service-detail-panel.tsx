import Link from "next/link";

import { ArrowRight, BarChart3, Cloud, FileText, Link2, MapPin, Settings, Sparkles } from "lucide-react";

import { ServiceBenefits } from "@/components/sections/our-services/service-benefits";
import type { ServiceItem } from "@/components/sections/our-services/services-data";
import { cn } from "@/lib/utils";

export interface ModernServiceDetailPanelProps {
  service: ServiceItem;
  className?: string;
}

export function ModernServiceDetailPanel({ service, className }: ModernServiceDetailPanelProps) {
  const { id, number, tag, title, description, supporting, benefits, iconName } = service;

  const renderBadgeIcon = () => {
    switch (iconName) {
      case "link":
        return <Link2 className="h-9 w-9 text-[#267C6B] rotate-[-45deg]" />;
      case "settings":
        return <Settings className="h-9 w-9 text-[#267C6B]" />;
      case "sparkles":
        return <Sparkles className="h-9 w-9 text-[#267C6B]" />;
      case "map-pin":
        return <MapPin className="h-9 w-9 text-[#267C6B]" />;
      case "cloud":
        return <Cloud className="h-9 w-9 text-[#267C6B]" />;
      case "file-text":
        return <FileText className="h-9 w-9 text-[#267C6B]" />;
    }
  };

  return (
    <div
      role="tabpanel"
      id={`modern-service-panel-${id}`}
      aria-labelledby={`modern-service-tab-${id}`}
      className={cn(
        "relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#D7E5DE] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(18,60,58,0.06)] text-left",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 sm:right-6 sm:top-6 flex items-center gap-3 opacity-90"
      >
        <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#DDF5E8] to-[#D7E5DE] shadow-[0_8px_20px_rgba(38,124,107,0.12)] border border-[#D7E5DE]">
          {renderBadgeIcon()}
        </div>
        <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#DDF5E8] border border-[#D7E5DE] text-[#267C6B]">
          <BarChart3 className="h-5 w-5" />
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:gap-6 relative z-10">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#DDF5E8] text-[12px] font-bold text-[#123C3A]">
            {number}
          </span>
          <span className="text-[12.5px] font-bold uppercase tracking-wider text-[#267C6B]">
            {tag}
          </span>
        </div>

        <h3 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#123C3A] leading-tight">
          {title}
        </h3>

        <div className="flex flex-col gap-2.5 max-w-[620px]">
          <p className="text-[15.5px] sm:text-[16.5px] leading-[1.65] font-normal text-[#263B39]">
            {description}
          </p>
          <p className="text-[14.5px] sm:text-[15.5px] leading-[1.6] font-normal text-[#637773]">
            {supporting}
          </p>
        </div>

        <ServiceBenefits benefits={benefits} />
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 pt-6 border-t border-[#D7E5DE]">
        <Link
          href={service.primaryCtaHref}
          className="h-[48px] sm:h-[52px] w-full sm:w-auto rounded-[12px] bg-[#267C6B] hover:bg-[#123C3A] px-5 sm:px-6 text-[15px] sm:text-[16px] font-semibold text-white shadow-[0_4px_10px_rgba(38,124,107,0.16)] flex items-center justify-center gap-2 transition-colors"
        >
          <span>{service.primaryCtaText}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href={service.secondaryCtaHref}
          className="h-[48px] sm:h-[52px] w-full sm:w-auto rounded-[12px] border-2 border-[#267C6B] bg-white px-5 sm:px-6 text-[15px] sm:text-[16px] font-semibold text-[#123C3A] shadow-[0_2px_6px_rgba(18,60,58,0.04)] hover:bg-[#DDF5E8]/30 flex items-center justify-center gap-2 transition-colors"
        >
          <span>{service.secondaryCtaText}</span>
          <ArrowRight className="h-4 w-4 text-[#267C6B]" />
        </Link>
      </div>
    </div>
  );
}
