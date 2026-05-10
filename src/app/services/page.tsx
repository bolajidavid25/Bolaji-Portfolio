import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MotionInView } from "@/components/motion-in-view";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile app development, web app development, UI implementation from Figma, and Firebase integration.",
};

const services = [
  {
    title: "Mobile App Development",
    items: ["Flutter", "React Native", "State management (Riverpod / Context)"],
  },
  {
    title: "Web App Development",
    items: ["React", "Next.js (App Router)", "Tailwind UI systems"],
  },
  {
    title: "UI Implementation from Figma",
    items: ["Pixel-accurate layouts", "Responsive + accessible UI", "Reusable components"],
  },
  {
    title: "Firebase Integration",
    items: ["Auth", "Firestore", "Storage", "Cloud Functions-ready patterns"],
  },
];

export default function ServicesPage() {
  return (
    <Container className="py-16 sm:py-20">
      <MotionInView>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Services
        </h1>
        <p className="mt-4 max-w-3xl text-[rgb(var(--muted))] leading-7">
          I build production-ready mobile and web experiences with a strong
          focus on performance, maintainability, and clean UI.
        </p>
      </MotionInView>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((s, idx) => (
          <MotionInView key={s.title} delay={0.04 * idx}>
            <section className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold tracking-tight">{s.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--muted))]">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[rgb(var(--accentB))]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </section>
          </MotionInView>
        ))}
      </div>

      <MotionInView className="mt-10" delay={0.15}>
        <div className="glass rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Contact for pricing
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--muted))]">
            Share your goals, timelines, and any existing designs (Figma link).
            I’ll respond with the best approach and a clear estimate.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary">
              Start a conversation
            </ButtonLink>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium hover:underline"
            >
              See recent work
            </Link>
          </div>
        </div>
      </MotionInView>
    </Container>
  );
}

