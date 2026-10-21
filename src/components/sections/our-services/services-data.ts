import { SERVICES_PART_1 } from "./services-part-1";
import { SERVICES_PART_2 } from "./services-part-2";
import type { ServiceItem } from "./types";

export type { ServiceItem };

export const SERVICES_DATA: ServiceItem[] = [...SERVICES_PART_1, ...SERVICES_PART_2];
