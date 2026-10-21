import { ChevronRight, Cloud, FileText, Link2, MapPin, Settings, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

import type { ServiceItem } from "./services-data";

export interface ServiceSelectorItemProps {
  service: ServiceItem;
  isActive: boolean;
  onSelect: (id: string) => void;
}

export function ServiceSelectorItem({ service, isActive, onSelect }: ServiceSelectorItemProps) {
  const { id, number, name, iconName } = service;

  const renderIcon = () => {
    const iconClass = cn(
      "h-[18px] w-[18px] shrink-0 transition-colors",
      isActive ? "text-white" : "text-[#475569]"
    );
    switch (iconName) {
      case "link":
        return <Link2 className={iconClass} />;
      case "settings":
        return <Settings className={iconClass} />;
      case "sparkles":
        return <Sparkles className={iconClass} />;
      case "map-pin":
        return <MapPin className={iconClass} />;
      case "cloud":
        return <Cloud className={iconClass} />;
      case "file-text":
        return <FileText className={iconClass} />;
    }
  };

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`service-panel-${id}`}
      id={`service-tab-${id}`}
      onClick={() => onSelect(id)}
      className={cn(
        "group relative flex flex-1 min-h-[58px] w-full items-center justify-between rounded-[16px] px-3.5 py-3 sm:px-4 sm:py-3.5 text-left transition-all duration-200 select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168BCB] focus-visible:ring-offset-2",
        isActive
          ? "bg-gradient-to-r from-[#1483CE] to-[#1E95DF] text-white shadow-[0_6px_20px_rgba(20,131,206,0.28)]"
          : "bg-white/85 text-[#1E293B] border border-[#E1EDF8] hover:bg-white hover:border-[#BEDAF4] hover:shadow-[0_4px_14px_rgba(20,45,75,0.04)]"
      )}
    >
      <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
        {/* Sequence Number Pill */}
        <span
          className={cn(
            "flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg text-[13px] sm:text-[14px] font-semibold transition-colors",
            isActive ? "bg-white/20 text-white" : "bg-[#F1F6FB] text-[#64748B]"
          )}
        >
          {number}
        </span>

        {/* Category Icon */}
        <span
          className={cn(
            "flex h-8 w-8 sm:h-8.5 sm:w-8.5 shrink-0 items-center justify-center rounded-lg transition-colors",
            isActive ? "bg-white/15" : "bg-[#F4F8FC]"
          )}
        >
          {renderIcon()}
        </span>

        {/* Service Name */}
        <span
          className={cn(
            "truncate text-[15px] sm:text-[16px] font-semibold tracking-tight",
            isActive ? "text-white font-bold" : "text-[#1E293B] group-hover:text-[#0F172A]"
          )}
        >
          {name}
        </span>
      </div>

      {/* Right Chevron / Arrow indicator */}
      <span
        className={cn(
          "ml-2 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5",
          isActive ? "bg-white text-[#1483CE]" : "bg-[#F1F6FB] text-[#64748B]"
        )}
      >
        <ChevronRight className="h-4 w-4 stroke-[2.5]" />
      </span>
    </button>
  );
}
