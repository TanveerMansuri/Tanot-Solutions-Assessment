export interface StrategyFormData {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  message: string;
}

export type StrategyFormErrors = Partial<Record<keyof StrategyFormData, string>>;

export function validateStrategyForm(data: StrategyFormData): StrategyFormErrors {
  const errors: StrategyFormErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required.";
  }
  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (
    data.website.trim() &&
    !/^https?:\/\/.+/i.test(data.website.trim()) &&
    !data.website.includes(".")
  ) {
    errors.website = "Please enter a valid website URL.";
  }
  if (!data.message.trim()) {
    errors.message = "Please tell us how we can help.";
  }

  return errors;
}
