"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/common/button";
import { FormField } from "@/components/common/form-field";
import { Textarea } from "@/components/common/textarea";

import { StrategyFormFields } from "./strategy-form-fields";
import { StrategyFormSuccess } from "./strategy-form-success";
import { validateStrategyForm } from "./validation";
import type { StrategyFormData, StrategyFormErrors } from "./validation";

export function StrategyForm() {
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
      <StrategyFormFields data={data} errors={errors} onChange={handleChange} />

      <FormField id="message" label="How can we help?" required error={errors.message}>
        <Textarea
          id="message"
          rows={3}
          placeholder="Tell us about your goals, current challenges, or any specific areas you'd like to improve..."
          value={data.message}
          onChange={(e) => handleChange({ message: e.target.value })}
          hasError={Boolean(errors.message)}
          className="h-[76px] min-h-[76px] max-h-[84px] rounded-[10px] border-[#D7E2EF] bg-white p-3 text-[15px] placeholder:text-[#94A3B8]"
        />
      </FormField>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={status === "submitting"}
        className="mt-2.5 h-[48px] rounded-[10px] border-none bg-[#168BCB] hover:bg-[#1276AE] text-[16px] font-semibold text-white shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/30"
      >
        <span>Get My Free Strategy</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
