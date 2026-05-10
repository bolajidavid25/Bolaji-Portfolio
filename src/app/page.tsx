"use client";

import Link from "next/link";
import { ArrowRight, Code2, Database, Rocket, Smartphone, Terminal, ChevronLeft, ChevronRight } from "lucide-react";
import { MotionInView } from "@/components/motion-in-view";
import { ProjectCard } from "@/components/project-card";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { useState, useEffect } from "react";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  const testimonials = [
    {
      text: "Reliable delivery, strong communication, and clean engineering execution from planning through launch.",
      author: "Startup Founder",
    },
    {
      text: "Great balance between product thinking and technical depth across mobile and web experiences.",
      author: "Product Collaborator",
    },
    {
      text: "Delivered high-quality cross-platform apps with excellent performance and user experience.",
      author: "Tech Lead",
    },
    {
      text: "Professional, responsive, and always delivers on time with scalable solutions.",
      author: "Project Manager",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,rgb(var(--accentA))_55%,transparent),transparent_70%)] blur-3xl" />
          <div className="absolute -left-28 top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,rgb(var(--accentB))_45%,transparent),transparent_72%)] blur-3xl" />
          <div className="absolute -right-24 bottom-[-140px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,rgb(var(--accentA))_40%,transparent),transparent_72%)] blur-3xl" />
        </div>

        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <MotionInView className="lg:col-span-7">
              <p className="text-sm text-[rgb(var(--muted))]">
                {profile.availability} • {profile.location}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                I build high-performance web and mobile products that deliver real business value.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[rgb(var(--muted))]">
                {profile.valueProposition}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">
                  Hire Me <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/projects" variant="primary">
                  View Projects <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={profile.resumeUrl} variant="secondary">
                  Download CV
                </ButtonLink>
              </div>
            </MotionInView>

            <MotionInView className="lg:col-span-5" delay={0.08}>
              <div className="glass rounded-3xl p-6 ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--accentA))_22%,rgb(var(--border)))] shadow-[0_30px_90px_-50px_color-mix(in_oklab,rgb(var(--accentA))_55%,transparent)]">
                <p className="text-sm font-medium tracking-tight">
                  {profile.role}
                </p>
                <p className="mt-2 text-sm leading-7 text-[rgb(var(--muted))]">
                  Cross-platform development for mobile and web—built with modern
                  UI systems, reliable state management, and Firebase services.
                </p>
                <div className="mt-5 rounded-2xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-4">
                  <p className="text-xs text-[rgb(var(--muted))]">Core stack</p>
                  <p className="mt-1 text-sm">
                    React • Next.js • React Native • Flutter • Firebase • Node.js
                  </p>
                </div>
              </div>
            </MotionInView>
          </div>

          <MotionInView className="mt-12" delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-[rgb(var(--accentB))]" />
                  <h2 className="font-semibold tracking-tight">Mobile</h2>
                </div>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                  Flutter • React Native • Riverpod
                </p>
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <Code2 className="h-5 w-5 text-[rgb(var(--accentA))]" />
                  <h2 className="font-semibold tracking-tight">Web</h2>
                </div>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                  React • Next.js • Tailwind CSS
                </p>
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-[rgb(var(--accentB))]" />
                  <h2 className="font-semibold tracking-tight">Backend & Tools</h2>
                </div>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                  Firebase • Git/GitHub • VS Code
                </p>
              </div>
            </div>
          </MotionInView>

          <MotionInView className="mt-6" delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="glass rounded-2xl p-5 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-[color-mix(in_oklab,rgb(var(--card))_70%,transparent)] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)]">
                  <Rocket className="h-4 w-4 text-[rgb(var(--accentB))]" />
                </div>
                <p className="mt-3 text-2xl font-semibold tracking-tight">6+</p>
                <p className="mt-1 text-xs text-[rgb(var(--muted))]">
                  Years of Experience
                </p>
              </div>

              <div className="glass rounded-2xl p-5 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-[color-mix(in_oklab,rgb(var(--card))_70%,transparent)] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)]">
                  <Terminal className="h-4 w-4 text-[rgb(var(--accentA))]" />
                </div>
                <p className="mt-3 text-2xl font-semibold tracking-tight">5</p>
                <p className="mt-1 text-xs text-[rgb(var(--muted))]">
                  Projects Delivered
                </p>
              </div>

              <div className="glass rounded-2xl p-5 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-[color-mix(in_oklab,rgb(var(--card))_70%,transparent)] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)]">
                  <Code2 className="h-4 w-4 text-[rgb(var(--accentB))]" />
                </div>
                <p className="mt-3 text-2xl font-semibold tracking-tight">10+</p>
                <p className="mt-1 text-xs text-[rgb(var(--muted))]">
                  Technologies Mastered
                </p>
              </div>

              <div className="glass rounded-2xl p-5 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-[color-mix(in_oklab,rgb(var(--card))_70%,transparent)] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)]">
                  <Database className="h-4 w-4 text-[rgb(var(--accentA))]" />
                </div>
                <p className="mt-3 text-2xl font-semibold tracking-tight">1M+</p>
                <p className="mt-1 text-xs text-[rgb(var(--muted))]">
                  Lines of Code
                </p>
              </div>
            </div>
          </MotionInView>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <MotionInView>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Featured Projects
                </h2>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                  A few highlights across mobile and web.
                </p>
              </div>
              <Link
                href="/projects"
                className="hidden text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] md:inline-flex items-center gap-2"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </MotionInView>

          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {featured.map((p, idx) => (
              <MotionInView key={p.slug} delay={0.05 * idx}>
                <ProjectCard project={p} />
              </MotionInView>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <MotionInView className="mb-8 sm:mb-10">
            <section className="relative overflow-hidden rounded-3xl ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)]">
              <div className="absolute inset-0 bg-[color-mix(in_oklab,rgb(var(--card))_55%,transparent)]" />
              <div className="absolute -left-24 -top-28 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,rgb(var(--accentA))_35%,transparent),transparent_70%)] blur-3xl" />
              <div className="absolute -right-24 -bottom-28 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,rgb(var(--accentB))_30%,transparent),transparent_70%)] blur-3xl" />

              <div className="relative grid gap-10 px-7 py-8 sm:px-10 sm:py-12 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                  <p className="text-xs font-medium tracking-wide text-[rgb(var(--muted))]">
                    Collaboration
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Why work with me
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">
                    You get a developer who communicates clearly, ships reliably,
                    and builds with maintainability in mind.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href="/contact" variant="primary">
                      Let’s talk <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                    <ButtonLink href="/projects" variant="secondary">
                      See proof
                    </ButtonLink>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="grid gap-4">
                    <Reason
                      index="01"
                      title="Product-minded execution"
                      desc="Pragmatic plans, sharp UX, performance-first decisions."
                    />
                    <Reason
                      index="02"
                      title="Cross‑platform efficiency"
                      desc="Faster iteration across iOS/Android with consistent quality."
                    />
                    <Reason
                      index="03"
                      title="Clean, scalable architecture"
                      desc="Components, state, and structure that scale with features."
                    />
                    <Reason
                      index="04"
                      title="Firebase-ready delivery"
                      desc="Auth, real-time data, storage, and secure production patterns."
                    />
                  </div>
                </div>
              </div>
            </section>
          </MotionInView>

          <MotionInView>
            <div className="glass rounded-3xl p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-4">
                  <p className="font-medium">Freelance Mobile & Web Developer</p>
                  <p className="text-xs text-[rgb(var(--muted))]">2022 – Present</p>
                  <p className="mt-2 text-sm leading-7 text-[rgb(var(--muted))]">
                    Build and maintain React/Next.js and Flutter/React Native products
                    for client and personal projects, with Firebase-backed services.
                  </p>
                </div>
                <div className="rounded-2xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-4">
                  <p className="font-medium">Personal Product Engineering</p>
                  <p className="text-xs text-[rgb(var(--muted))]">2020 – Present</p>
                  <p className="mt-2 text-sm leading-7 text-[rgb(var(--muted))]">
                    Delivered multiple case-study projects focused on messaging,
                    dashboards, and portfolio systems with reusable architecture.
                  </p>
                </div>
              </div>
            </div>
          </MotionInView>

          <MotionInView className="mt-8">
            <div className="glass rounded-3xl p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight">Testimonials</h2>
              <div className="mt-5 relative overflow-hidden">
                <div 
                  key={currentTestimonial}
                  className="rounded-2xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-6 animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                  <p className="text-lg leading-7 text-[rgb(var(--muted))] transition-all duration-500">
                    &quot;{testimonials[currentTestimonial].text}&quot;
                  </p>
                  <p className="mt-4 text-sm font-medium transition-all duration-500 delay-100">
                    {testimonials[currentTestimonial].author}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={prevTestimonial}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_oklab,rgb(var(--card))_70%,transparent)] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] hover:bg-[color-mix(in_oklab,rgb(var(--accentA))_10%,transparent)] transition-all duration-300 hover:scale-110"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          index === currentTestimonial
                            ? "bg-[rgb(var(--accentA))] w-6"
                            : "bg-[color-mix(in_oklab,rgb(var(--border))_50%,transparent)] w-2 hover:w-3"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_oklab,rgb(var(--card))_70%,transparent)] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] hover:bg-[color-mix(in_oklab,rgb(var(--accentA))_10%,transparent)] transition-all duration-300 hover:scale-110"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </MotionInView>

          <MotionInView className="mt-8">
            <div className="glass rounded-3xl p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight">Professional Extras</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-4">
                  <p className="font-medium">Certifications</p>
                  <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                    Add verified credentials to strengthen hiring confidence.
                  </p>
                </div>
                <div className="rounded-2xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-4">
                  <p className="font-medium">Blog / Articles</p>
                  <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                    Share practical engineering lessons and build authority.
                  </p>
                </div>
                <div className="rounded-2xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-4">
                  <p className="font-medium">Resume</p>
                  <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                    Keep your CV aligned with project outcomes and impact.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <ButtonLink href={profile.resumeUrl} variant="secondary">
                  Download Resume
                </ButtonLink>
              </div>
            </div>
          </MotionInView>

          <MotionInView className="mt-8">
            <div className="glass rounded-3xl p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                Building something real?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--muted))]">
                I help teams ship reliable mobile and web products with clean UI,
                scalable architecture, and Firebase-backed features.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/services" variant="secondary">
                  View Services
                </ButtonLink>
                <ButtonLink href="/contact" variant="primary">
                  Lets build something <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </MotionInView>
        </Container>
      </section>
    </div>
  );
}

function Reason({
  index,
  title,
  desc,
}: {
  index: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group glass rounded-2xl px-6 py-5 ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)] transition hover:bg-[color-mix(in_oklab,rgb(var(--card))_65%,rgb(var(--accentA))_8%)]">
      <div className="flex items-start gap-4">
        <div className="mt-0.5 rounded-xl bg-[color-mix(in_oklab,rgb(var(--card))_70%,transparent)] px-3 py-2 text-xs font-semibold tracking-wide text-[rgb(var(--muted))] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)]">
          {index}
        </div>
        <div className="min-w-0">
          <p className="font-medium tracking-tight">{title}</p>
          <p className="mt-1 text-sm leading-7 text-[rgb(var(--muted))]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
