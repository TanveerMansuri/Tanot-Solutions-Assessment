import type { LucideProps } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ArrowRightIcon(props: LucideProps) {
  return <ArrowRight className="h-4 w-4" {...props} />;
}

export function CheckIcon(props: LucideProps) {
  return <CheckCircle2 className="h-4 w-4" {...props} />;
}
