import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-[rgb(var(--accentA))] text-white shadow-sm hover:opacity-95",
  secondary:
    "bg-[rgb(var(--card))] text-[rgb(var(--fg))] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_85%,transparent)] hover:bg-[color-mix(in_oklab,rgb(var(--card))_85%,rgb(var(--accentA))_15%)]",
  ghost:
    "text-[rgb(var(--fg))] hover:bg-[color-mix(in_oklab,rgb(var(--card))_75%,transparent)]",
};

export function Button({
  variant = "secondary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}

export function ButtonLink({
  href,
  variant = "secondary",
  className,
  ...props
}: React.ComponentProps<typeof Link> & { variant?: Variant }) {
  return (
    <Link className={cn(base, variants[variant], className)} href={href} {...props} />
  );
}

