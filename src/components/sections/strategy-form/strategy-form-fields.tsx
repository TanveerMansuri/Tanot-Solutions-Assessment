import { FormField } from "@/components/common/form-field";
import { Input } from "@/components/common/input";

import type { StrategyFormData, StrategyFormErrors } from "./validation";

export interface StrategyFormFieldsProps {
  data: StrategyFormData;
  errors: StrategyFormErrors;
  onChange: (patch: Partial<StrategyFormData>) => void;
}

export function StrategyFormFields({ data, errors, onChange }: StrategyFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField id="firstName" label="First Name" required error={errors.firstName}>
          <Input
            id="firstName"
            placeholder="First name"
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            hasError={Boolean(errors.firstName)}
            className="h-[48px] rounded-[10px] border-[#D7E2EF] bg-white px-4 text-[15px] placeholder:text-[#94A3B8]"
          />
        </FormField>
        <FormField id="lastName" label="Last Name" required error={errors.lastName}>
          <Input
            id="lastName"
            placeholder="Last name"
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            hasError={Boolean(errors.lastName)}
            className="h-[48px] rounded-[10px] border-[#D7E2EF] bg-white px-4 text-[15px] placeholder:text-[#94A3B8]"
          />
        </FormField>
      </div>

      <FormField id="email" label="Email" required error={errors.email}>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
          hasError={Boolean(errors.email)}
          className="h-[48px] rounded-[10px] border-[#D7E2EF] bg-white px-4 text-[15px] placeholder:text-[#94A3B8]"
        />
      </FormField>

      <FormField id="website" label="Website / URL" required error={errors.website}>
        <Input
          id="website"
          placeholder="https://yourwebsite.com"
          value={data.website}
          onChange={(e) => onChange({ website: e.target.value })}
          hasError={Boolean(errors.website)}
          className="h-[48px] rounded-[10px] border-[#D7E2EF] bg-white px-4 text-[15px] placeholder:text-[#94A3B8]"
        />
      </FormField>
    </>
  );
}
