import { FormField } from "@/components/common/form-field";
import { Input } from "@/components/common/input";
import type {
  StrategyFormData,
  StrategyFormErrors,
} from "@/components/sections/strategy-form/validation";

export function ModernStrategyFields({
  data,
  errors,
  onChange,
}: {
  data: StrategyFormData;
  errors: StrategyFormErrors;
  onChange: (patch: Partial<StrategyFormData>) => void;
}) {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField id="m-firstName" label="First Name" required error={errors.firstName}>
          <Input
            id="m-firstName"
            placeholder="First name"
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            hasError={Boolean(errors.firstName)}
            className="h-[48px] rounded-[10px] border-[#D7E5DE] bg-white px-4 text-[15px] placeholder:text-[#637773] focus:border-[#267C6B] focus:ring-[#267C6B]/20"
          />
        </FormField>
        <FormField id="m-lastName" label="Last Name" required error={errors.lastName}>
          <Input
            id="m-lastName"
            placeholder="Last name"
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            hasError={Boolean(errors.lastName)}
            className="h-[48px] rounded-[10px] border-[#D7E5DE] bg-white px-4 text-[15px] placeholder:text-[#637773] focus:border-[#267C6B] focus:ring-[#267C6B]/20"
          />
        </FormField>
      </div>

      <FormField id="m-email" label="Email" required error={errors.email}>
        <Input
          id="m-email"
          type="email"
          placeholder="your@email.com"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
          hasError={Boolean(errors.email)}
          className="h-[48px] rounded-[10px] border-[#D7E5DE] bg-white px-4 text-[15px] placeholder:text-[#637773] focus:border-[#267C6B] focus:ring-[#267C6B]/20"
        />
      </FormField>

      <FormField id="m-website" label="Website / URL" required error={errors.website}>
        <Input
          id="m-website"
          placeholder="https://yourwebsite.com"
          value={data.website}
          onChange={(e) => onChange({ website: e.target.value })}
          hasError={Boolean(errors.website)}
          className="h-[48px] rounded-[10px] border-[#D7E5DE] bg-white px-4 text-[15px] placeholder:text-[#637773] focus:border-[#267C6B] focus:ring-[#267C6B]/20"
        />
      </FormField>
    </>
  );
}
