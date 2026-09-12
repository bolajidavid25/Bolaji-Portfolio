"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const nav = [
  { href: "/#home",       label: "Home"     },
  { href: "/#about",      label: "About"    },
  { href: "/#projects",   label: "Projects" },
  { href: "/#services",   label: "Services" },
  { href: "/#contact",    label: "Contact"  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Track active section via IntersectionObserver
  React.useEffect(() => {
    const sections = ["home", "about", "projects", "services", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-60px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  React.useEffect(() => { setMenuOpen(false); }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If already on homepage, smooth scroll to anchor
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[9999] w-full transition-all duration-300",
          scrolled
            ? "bg-[rgba(7,9,15,0.88)] backdrop-blur-xl border-b border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)] shadow-[0_2px_30px_-10px_rgba(139,92,246,0.12)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-0.5 font-mono text-base font-semibold tracking-tight"
            aria-label="Home"
          >
            <span className="text-[color-mix(in_oklab,rgb(var(--accentA))_70%,rgb(var(--muted)))] group-hover:text-[rgb(var(--accentA))] transition-colors duration-200">[</span>
            <span className="gradient-text">Bolaji</span>
            <span className="text-[rgb(var(--accentB))]">.dev</span>
            <span className="text-[color-mix(in_oklab,rgb(var(--accentA))_70%,rgb(var(--muted)))] group-hover:text-[rgb(var(--accentA))] transition-colors duration-200">]</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main navigation">
            {nav.map((item) => {
              const sectionId = item.href.slice(2);
              const active = pathname === "/" ? activeSection === sectionId : false;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                    active
                      ? "text-[rgb(var(--fg))]"
                      : "text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
                  )}
                >
                  {active && (
                    <span
                      className="absolute inset-0 rounded-full bg-[color-mix(in_oklab,rgb(var(--accentA))_12%,transparent)] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--accentA))_30%,transparent)]"
                      aria-hidden
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Hire Me CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="hidden btn-glow text-sm md:inline-flex"
            >
              Hire Me
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="relative flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-xl md:hidden border border-[color-mix(in_oklab,rgb(var(--border))_80%,transparent)] bg-[color-mix(in_oklab,rgb(var(--card))_60%,transparent)] transition hover:border-[color-mix(in_oklab,rgb(var(--accentA))_50%,transparent)]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className={cn("block h-[2px] w-4 rounded-full bg-[rgb(var(--fg))] transition-all duration-300 origin-center", menuOpen && "rotate-45 translate-y-[7px]")} />
              <span className={cn("block h-[2px] w-4 rounded-full bg-[rgb(var(--fg))] transition-all duration-200", menuOpen && "opacity-0 scale-x-0")} />
              <span className={cn("block h-[2px] w-4 rounded-full bg-[rgb(var(--fg))] transition-all duration-300 origin-center", menuOpen && "-rotate-45 -translate-y-[7px]")} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      <div className={cn("fixed inset-x-0 top-16 z-[9998] md:hidden transition-all duration-300 overflow-hidden", menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0")}>
        <nav className="flex flex-col gap-1 p-5 border-b border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)] bg-[rgba(7,9,15,0.97)] backdrop-blur-xl" aria-label="Mobile navigation">
          {nav.map((item) => {
            const sectionId = item.href.slice(2);
            const active = pathname === "/" ? activeSection === sectionId : false;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-all",
                  active
                    ? "gradient-text bg-[color-mix(in_oklab,rgb(var(--accentA))_8%,transparent)] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--accentA))_25%,transparent)]"
                    : "text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:bg-[color-mix(in_oklab,rgb(var(--card))_60%,transparent)]"
                )}
              >
                {item.label}
              </a>
            );
          })}
          <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")} className="btn-glow mt-3 justify-center text-sm">
            Hire Me ↗
          </a>
          <p className="mt-3 text-center text-xs text-[rgb(var(--muted))]">{profile.links.email}</p>
        </nav>
      </div>
    </>
  );
}
