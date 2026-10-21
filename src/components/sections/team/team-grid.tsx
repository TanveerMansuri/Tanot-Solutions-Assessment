import { cn } from "@/lib/utils";

import { TeamCard } from "./team-card";
import { TEAM_MEMBERS } from "./team-data";

export interface TeamGridProps {
  className?: string;
}

export function TeamGrid({ className }: TeamGridProps) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch",
        className
      )}
    >
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="flex flex-col h-full">
          <TeamCard member={member} />
        </div>
      ))}
    </div>
  );
}
