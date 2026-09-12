import Link from "next/link";
import { profile } from "@/data/profile";

const socials = [
  {
    label: "GitHub",
    href: profile.links.github,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: profile.links.whatsapp,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${profile.links.email}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function SiteFooter() {
  const year = new Date().getUTCFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-[color-mix(in_oklab,rgb(var(--border))_60%,transparent)]">
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute left-1/2 -top-24 h-48 w-[600px] -translate-x-1/2 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgb(var(--accentA)), transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8">
        {/* Top row */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-mono text-lg font-semibold tracking-tight"
              aria-label="Home"
            >
              <span className="text-[color-mix(in_oklab,rgb(var(--accentA))_60%,rgb(var(--muted)))]">[</span>
              <span className="gradient-text">Bolaji</span>
              <span className="text-[rgb(var(--accentB))]">.dev</span>
              <span className="text-[color-mix(in_oklab,rgb(var(--accentA))_60%,rgb(var(--muted)))]">]</span>
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[rgb(var(--muted))]">
              Building cross-platform mobile &amp; web apps from Ibadan, Nigeria. Open to opportunities.
            </p>
            {/* Availability badge */}
            <span className="avail-pill mt-4 inline-flex">
              <span className="avail-dot" />
              Open to opportunities
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl
                  border border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)]
                  bg-[color-mix(in_oklab,rgb(var(--card))_50%,transparent)]
                  text-[rgb(var(--muted))]
                  transition-all duration-200
                  hover:border-[color-mix(in_oklab,rgb(var(--accentA))_50%,transparent)]
                  hover:bg-[color-mix(in_oklab,rgb(var(--accentA))_10%,transparent)]
                  hover:text-[rgb(var(--fg))]
                  hover:shadow-[0_0_16px_-4px_color-mix(in_oklab,rgb(var(--accentA))_40%,transparent)]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-[color-mix(in_oklab,rgb(var(--border))_50%,transparent)]" />

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-[rgb(var(--muted))]">
            © {year}{" "}
            <span className="gradient-text font-semibold">Bolaji David</span>
            {" "}— Built with Next.js &amp; Tailwind. Made with ❤️ in Nigeria.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="wavy-link text-sm text-[rgb(var(--muted))] transition-colors hover:text-[rgb(var(--fg))]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
