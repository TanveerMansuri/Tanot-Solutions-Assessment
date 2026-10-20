import type { LucideProps } from "lucide-react";
import { Home, Sparkles } from "lucide-react";

export function HomeIcon(props: LucideProps) {
  return <Home className="h-4 w-4" {...props} />;
}

export function SparklesIcon(props: LucideProps) {
  return <Sparkles className="h-4 w-4" {...props} />;
}
