import Link from "next/link";

import { Card } from "@/components/common/card";
import { Container } from "@/components/common/container";
import { Text } from "@/components/common/text";
import { ArrowRightIcon } from "@/icons/common";

export function HomeScreen() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center py-16">
      <div className="w-full max-w-2xl text-center">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-300">
          Tanot Solutions
        </span>
        <Text variant="h1" className="mt-4">
          Website Redesign Architecture
        </Text>
        <Text variant="muted" className="mt-3">
          Select a preview concept below to explore the design directions.
        </Text>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 text-left">
          <Link href="/existing-preview" className="group">
            <Card className="h-full transition-all group-hover:border-blue-500 group-hover:shadow-md">
              <Text variant="h3">Existing UI Enhancement</Text>
              <Text variant="muted" className="mt-2 text-sm">
                Cleaned up layout preserving existing brand structure and flow.
              </Text>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span>View Preview</span>
                <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          </Link>

          <Link href="/modern-preview" className="group">
            <Card className="h-full transition-all group-hover:border-indigo-500 group-hover:shadow-md">
              <Text variant="h3">Modern UI Concept</Text>
              <Text variant="muted" className="mt-2 text-sm">
                Bold, premium B2B digital marketing agency aesthetic.
              </Text>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <span>View Preview</span>
                <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </Container>
  );
}
