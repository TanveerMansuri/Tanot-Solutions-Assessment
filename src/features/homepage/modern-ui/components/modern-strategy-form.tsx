"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { ArrowRight } from "lucide-react";

import { FormField } from "@/components/common/form-field";
import { Textarea } from "@/components/common/textarea";
import { StrategyFormSuccess } from "@/components/sections/strategy-form/strategy-form-success";
import { validateStrategyForm } from "@/components/sections/strategy-form/validation";
import type {
  StrategyFormData,
  StrategyFormErrors,
} from "@/components/sections/strategy-form/validation";

import { ModernStrategyFields } from "./modern-strategy-fields";

export function ModernStrategyForm() {
  const [data, setData] = useState<StrategyFormData>({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    message: "",
  });
  const [errors, setErrors] = useState<StrategyFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (patch: Partial<StrategyFormData>) => {
    setData((prev) => ({ ...prev, ...patch }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateStrategyForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 800);
  };

  if (status === "success") {
    return <StrategyFormSuccess firstName={data.firstName} />;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 text-left">
      <ModernStrategyFields data={data} errors={errors} onChange={handleChange} />

      <FormField id="m-message" label="How can we help?" required error={errors.message}>
        <Textarea
          id="m-message"
          rows={3}
          placeholder="Tell us about your goals, current challenges, or any specific areas you'd like to improve..."
          value={data.message}
          onChange={(e) => handleChange({ message: e.target.value })}
          hasError={Boolean(errors.message)}
          className="h-[76px] min-h-[76px] max-h-[84px] rounded-[10px] border-[#D7E5DE] bg-white p-3 text-[15px] placeholder:text-[#637773] focus:border-[#267C6B] focus:ring-[#267C6B]/20"
        />
      </FormField>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2.5 h-[48px] rounded-[10px] bg-[#267C6B] hover:bg-[#123C3A] text-[16px] font-semibold text-white shadow-sm shadow-[#267C6B]/20 hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <span>Get My Free Strategy</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
