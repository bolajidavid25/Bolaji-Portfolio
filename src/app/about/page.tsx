import type { Metadata } from "next";
import Image from "next/image";
import {
  Globe,
  Server,
  Smartphone,
  Wrench,
  Sparkles,
  Layers,
  BookOpen,
} from "lucide-react";
import { MotionInView } from "@/components/motion-in-view";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";
import { aboutMe } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — background, skills, and education.`,
};

const skillCategories = [
  {
    group: "Frontend",
    items: aboutMe.skills.frontend,
    icon: Globe,
  },
  {
    group: "Mobile",
    items: aboutMe.skills.mobile,
    icon: Smartphone,
  },
  {
    group: "Backend",
    items: aboutMe.skills.backend,
    icon: Server,
  },
  {
    group: "Tools & Core",
    items: [...aboutMe.skills.core, ...aboutMe.skills.tools],
    icon: Wrench,
  },
] as const;

const highlightCards = [
  {
    icon: BookOpen,
    title: "Structured Growth",
    text: "Formal Computer Science training combined with practical, project-based learning."
  },
  {
    icon: Sparkles,
    title: "Product Mindset",
    text: "I build solutions that balance usability, maintainability, and performance."
  },
  {
    icon: Layers,
    title: "Cross-Platform Reach",
    text: "Responsive web and native mobile experiences using React, Flutter, and modern APIs."
  },
];

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <MotionInView>
        <section className="relative overflow-hidden rounded-3xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] bg-[color-mix(in_oklab,rgb(var(--card))_75%,transparent)] p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,rgb(var(--accentA))_22%,transparent),transparent_70%)] blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,rgb(var(--accentA))_18%,transparent),transparent_72%)] blur-3xl" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[rgb(var(--accentA))]">
                About me
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                {aboutMe.headline}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[rgb(var(--muted))]">
                {aboutMe.summary}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
                <div className="rounded-3xl border border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)] bg-[rgb(var(--card))] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[rgb(var(--muted))]">
                    Current Focus
                  </p>
                  <p className="mt-3 leading-7 text-[rgb(var(--muted))]">
                    Web and mobile applications with strong architecture, polished UI, and scalable integrations.
                  </p>
                </div>
                <div className="rounded-3xl border border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)] bg-[rgb(var(--card))] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[rgb(var(--muted))]">
                    What I Value
                  </p>
                  <p className="mt-3 leading-7 text-[rgb(var(--muted))]">
                    Clear structure, maintainable code, strong collaboration, and building products people enjoy.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Portrait
                src="/about/portrait-1.png"
                alt={`${profile.name} portrait`}
                priority
              />
            </div>
          </div>
        </section>
      </MotionInView>

      <MotionInView className="mt-10" delay={0.05}>
        <section className="grid gap-4 lg:grid-cols-3">
          {highlightCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="glass rounded-3xl border border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgb(var(--accentA))] text-white shadow-[0_16px_32px_-28px_rgb(var(--accentA))]/50">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-lg font-semibold tracking-tight">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[rgb(var(--muted))]">
                  {card.text}
                </p>
              </div>
            );
          })}
        </section>
      </MotionInView>

      <MotionInView className="mt-10" delay={0.1}>
        <section className="glass rounded-3xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Story & experience
          </h2>
          <div className="mt-6 space-y-5">
            {aboutMe.paragraphs.map((paragraph, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)] bg-[rgb(var(--card))] p-5"
              >
                <p className="text-[rgb(var(--muted))] leading-7">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </section>
      </MotionInView>

      <MotionInView className="mt-10" delay={0.15}>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
            <p className="mt-3 text-sm leading-6 text-[rgb(var(--muted))]">
              Organized skill sets for frontend, mobile, backend, and core tooling.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {skillCategories.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.group}
                    className="rounded-3xl border border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)] p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[rgb(var(--accentA))]" />
                      <h3 className="font-semibold tracking-tight">
                        {skill.group}
                      </h3>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
            <div className="mt-6 space-y-4">
              {aboutMe.education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-3xl border border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)] p-5"
                >
                  <p className="text-sm font-semibold">{item.degree}</p>
                  <p className="mt-1 text-sm text-[rgb(var(--muted))]">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[rgb(var(--muted))]">
                    {item.timeframe}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </MotionInView>

      <MotionInView className="mt-10" delay={0.2}>
        <section className="glass rounded-3xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Let&apos;s Work Together</h2>
          <p className="mt-3 leading-7 text-[rgb(var(--muted))]">
            {aboutMe.closingStatement}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--accentA))] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Contact Me
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--accentA))] px-5 py-3 text-sm font-medium text-[rgb(var(--accentA))] transition hover:bg-[color-mix(in_oklab,rgb(var(--accentA))_10%,transparent)]"
            >
              View GitHub
            </a>
          </div>
        </section>
      </MotionInView>
    </Container>
  );
}

function Portrait({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="glass overflow-hidden rounded-3xl ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--accentA))_24%,rgb(var(--border)))] shadow-[0_28px_70px_-40px_color-mix(in_oklab,rgb(var(--accentA))_45%,transparent)]">
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority={priority}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,rgb(var(--accentA))_42%,transparent),transparent_62%)] mix-blend-soft-light opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_55%)]" />
      </div>
    </div>
  );
}

