import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-[rgb(var(--fg))] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_85%,transparent)] bg-[color-mix(in_oklab,rgb(var(--card))_85%,transparent)]",
        className,
      )}
      {...props}
    />
  );
}

