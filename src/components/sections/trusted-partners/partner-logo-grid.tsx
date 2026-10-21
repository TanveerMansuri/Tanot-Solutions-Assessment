import { PARTNER_BRANDS } from "./partner-data";
import { PartnerLogoCard } from "./partner-logo-card";

export interface PartnerLogoGridProps {
  isVisible?: boolean;
}

export function PartnerLogoGrid({ isVisible = true }: PartnerLogoGridProps) {
  return (
    <div className="w-full mt-10 sm:mt-12">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5 lg:gap-4">
        {PARTNER_BRANDS.map((brand, index) => (
          <PartnerLogoCard key={brand.id} brand={brand} index={index} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
}
