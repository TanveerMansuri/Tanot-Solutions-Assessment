import { BarChart3, Cloud, FileText, Link2, MapPin, Settings, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

import { ServiceBenefits } from "./service-benefits";
import { ServiceDetailActions } from "./service-detail-actions";
import type { ServiceItem } from "./services-data";

export interface ServiceDetailPanelProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceDetailPanel({ service, className }: ServiceDetailPanelProps) {
  const {
    id,
    number,
    tag,
    title,
    description,
    supporting,
    benefits,
    iconName,
    primaryCtaText,
    primaryCtaHref,
    secondaryCtaText,
    secondaryCtaHref,
  } = service;

  const renderBadgeIcon = () => {
    switch (iconName) {
      case "link":
        return <Link2 className="h-9 w-9 text-[#168BCB] rotate-[-45deg]" />;
      case "settings":
        return <Settings className="h-9 w-9 text-[#168BCB]" />;
      case "sparkles":
        return <Sparkles className="h-9 w-9 text-[#168BCB]" />;
      case "map-pin":
        return <MapPin className="h-9 w-9 text-[#168BCB]" />;
      case "cloud":
        return <Cloud className="h-9 w-9 text-[#168BCB]" />;
      case "file-text":
        return <FileText className="h-9 w-9 text-[#168BCB]" />;
    }
  };

  return (
    <div
      role="tabpanel"
      id={`service-panel-${id}`}
      aria-labelledby={`service-tab-${id}`}
      className={cn(
        "relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#DCE8F5] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(20,45,75,0.06)] text-left",
        className
      )}
    >
      {/* Decorative top-right brand element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 sm:right-6 sm:top-6 flex items-center gap-3 opacity-90"
      >
        <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#EBF5FE] to-[#D8EDFE] shadow-[0_8px_20px_rgba(22,139,203,0.12)] border border-[#CDE5FA]">
          {renderBadgeIcon()}
        </div>
        <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#F0F7FD] border border-[#DEEDFA] text-[#168BCB]">
          <BarChart3 className="h-5 w-5" />
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:gap-6 relative z-10">
        {/* Sequence and Service Tag Pill */}
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#E8F3FD] text-[12px] font-bold text-[#168BCB]">
            {number}
          </span>
          <span className="text-[12.5px] font-bold uppercase tracking-wider text-[#168BCB]">
            {tag}
          </span>
        </div>

        {/* Service Title */}
        <h3 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#102544] leading-tight">
          {title}
        </h3>

        {/* Service Description */}
        <div className="flex flex-col gap-2.5 max-w-[620px]">
          <p className="text-[15.5px] sm:text-[16.5px] leading-[1.65] font-normal text-[#334E6F]">
            {description}
          </p>
          <p className="text-[14.5px] sm:text-[15.5px] leading-[1.6] font-normal text-[#5B738E]">
            {supporting}
          </p>
        </div>

        {/* Benefits Grid */}
        <ServiceBenefits benefits={benefits} />
      </div>

      {/* CTA Buttons */}
      <ServiceDetailActions
        primaryText={primaryCtaText}
        primaryHref={primaryCtaHref}
        secondaryText={secondaryCtaText}
        secondaryHref={secondaryCtaHref}
      />
    </div>
  );
}
