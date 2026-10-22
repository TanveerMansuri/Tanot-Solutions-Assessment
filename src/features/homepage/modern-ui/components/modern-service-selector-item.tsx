import { ChevronRight, Cloud, FileText, Link2, MapPin, Settings, Sparkles } from "lucide-react";

import type { ServiceItem } from "@/components/sections/our-services/services-data";
import { cn } from "@/lib/utils";

export interface ModernServiceSelectorItemProps {
  service: ServiceItem;
  isActive: boolean;
  onSelect: (id: string) => void;
}

export function ModernServiceSelectorItem({
  service,
  isActive,
  onSelect,
}: ModernServiceSelectorItemProps) {
  const { id, number, name, iconName } = service;

  const renderIcon = () => {
    const iconClass = cn(
      "h-[18px] w-[18px] shrink-0 transition-colors",
      isActive ? "text-white" : "text-[#123C3A]"
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
      aria-controls={`modern-service-panel-${id}`}
      id={`modern-service-tab-${id}`}
      onClick={() => onSelect(id)}
      className={cn(
        "group relative flex flex-1 min-h-[58px] w-full items-center justify-between rounded-[16px] px-3.5 py-3 sm:px-4 sm:py-3.5 text-left transition-all duration-200 select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#267C6B] focus-visible:ring-offset-2",
        isActive
          ? "bg-gradient-to-r from-[#123C3A] to-[#267C6B] text-white shadow-[0_6px_20px_rgba(18,60,58,0.28)]"
          : "bg-white/85 text-[#263B39] border border-[#D7E5DE] hover:bg-white hover:border-[#267C6B] hover:shadow-[0_4px_14px_rgba(18,60,58,0.04)]"
      )}
    >
      <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
        <span
          className={cn(
            "flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg text-[13px] sm:text-[14px] font-semibold transition-colors",
            isActive ? "bg-white/20 text-white" : "bg-[#DDF5E8] text-[#123C3A]"
          )}
        >
          {number}
        </span>
        <span
          className={cn(
            "flex h-8 w-8 sm:h-8.5 sm:w-8.5 shrink-0 items-center justify-center rounded-lg transition-colors",
            isActive ? "bg-white/15" : "bg-[#F7FAF7]"
          )}
        >
          {renderIcon()}
        </span>
        <span
          className={cn(
            "truncate text-[15px] sm:text-[16px] font-semibold tracking-tight",
            isActive ? "text-white font-bold" : "text-[#263B39] group-hover:text-[#123C3A]"
          )}
        >
          {name}
        </span>
      </div>
      <span
        className={cn(
          "ml-2 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5",
          isActive ? "bg-white text-[#123C3A]" : "bg-[#DDF5E8] text-[#123C3A]"
        )}
      >
        <ChevronRight className="h-4 w-4 stroke-[2.5]" />
      </span>
    </button>
  );
}
