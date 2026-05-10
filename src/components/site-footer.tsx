import Link from "next/link";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const year = new Date().getUTCFullYear();

  return (
    <footer className="border-t border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)]">
      <Container className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[rgb(var(--muted))]">
          © {year} Bolaji David. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <Link className="hover:underline" href="/projects">
            Projects
          </Link>
          <Link className="hover:underline" href="/contact">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}

