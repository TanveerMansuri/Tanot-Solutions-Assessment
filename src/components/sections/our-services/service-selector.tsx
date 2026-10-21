import { cn } from "@/lib/utils";

import { ServiceSelectorItem } from "./service-selector-item";
import type { ServiceItem } from "./services-data";

export interface ServiceSelectorProps {
  services: ServiceItem[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export function ServiceSelector({ services, activeId, onSelect, className }: ServiceSelectorProps) {
  return (
    <div
      role="tablist"
      aria-label="Tanot SEO Services"
      className={cn(
        "flex h-full flex-col justify-between gap-2.5 sm:gap-3 rounded-[24px] border border-[#DEECF8] bg-[#F7FAFD]/80 p-3 sm:p-4 backdrop-blur-xs shadow-[0_4px_24px_rgba(20,45,75,0.03)]",
        className
      )}
    >
      {services.map((service) => (
        <ServiceSelectorItem
          key={service.id}
          service={service}
          isActive={service.id === activeId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
