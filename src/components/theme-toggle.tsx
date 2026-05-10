"use client";

import { useTheme } from "next-themes";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => {
        if (!mounted) return;
        setTheme(isDark ? "light" : "dark");
      }}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_85%,transparent)] bg-[color-mix(in_oklab,rgb(var(--card))_85%,transparent)] hover:bg-[color-mix(in_oklab,rgb(var(--card))_80%,rgb(var(--accentB))_10%)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]",
        className,
      )}
      aria-label={
        mounted
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle theme"
      }
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )
      ) : (
        <span className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}

