"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [showSearch, setShowSearch] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (showSearch) {
      inputRef.current?.focus();
    }
  }, [showSearch]);

  function onSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/projects?search=${encodeURIComponent(q)}` : "/projects");
  }

  return (
    <header className="sticky top-0 z-[9999] border-b border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] bg-[rgb(var(--bg))]">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-gradient">Bolaji</span>{" "}
          <span className="text-[color-mix(in_oklab,rgb(var(--muted))_70%,rgb(var(--fg)))]">
            David
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition hover:bg-[color-mix(in_oklab,rgb(var(--card))_75%,transparent)]",
                  active &&
                    "bg-blue-600 text-white shadow-md",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <form
            onSubmit={onSearchSubmit}
            className={cn(
              "hidden sm:flex h-10 items-center overflow-hidden rounded-full ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_85%,transparent)] bg-[color-mix(in_oklab,rgb(var(--card))_85%,transparent)] transition-all duration-300 ease-out",
              showSearch ? "w-64 px-2" : "w-10 px-0",
            )}
          >
            <button
              type="button"
              onClick={() => setShowSearch(true)}
              className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full"
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </button>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onBlur={() => {
                if (!query.trim()) setShowSearch(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setShowSearch(false);
                }
              }}
              placeholder="Search projects..."
              className={cn(
                "bg-transparent text-sm outline-none transition-all duration-200",
                showSearch ? "w-full opacity-100" : "w-0 opacity-0",
              )}
            />
          </form>
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

