"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { MotionInView } from "@/components/motion-in-view";
import { DeviceSlider } from "@/components/device-slider";
import { TiltCard } from "@/components/tilt-card";
import { ContactForm } from "@/components/contact-form";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { aboutMe } from "@/data/about";

/* React-icons for marquee */
import { FaReact, FaNodeJs, FaGitAlt, FaAndroid, FaMobileAlt } from "react-icons/fa";
import {
  SiNextdotjs, SiFlutter, SiFirebase, SiTypescript,
  SiTailwindcss, SiDart, SiSupabase, SiVercel,
} from "react-icons/si";

/* ─────────────────────────────────────────────
   MARQUEE TECH TICKER (real icons)
───────────────────────────────────────────── */
const techLogos = [
  { Icon: SiFlutter,     label: "Flutter",       color: "#54C5F8" },
  { Icon: FaReact,       label: "React",         color: "#61DAFB" },
  { Icon: SiNextdotjs,   label: "Next.js",       color: "#FFFFFF" },
  { Icon: FaMobileAlt,   label: "React Native",  color: "#61DAFB" },
  { Icon: SiFirebase,    label: "Firebase",      color: "#FFCA28" },
  { Icon: SiTypescript,  label: "TypeScript",    color: "#3178C6" },
  { Icon: SiTailwindcss, label: "Tailwind CSS",  color: "#06B6D4" },
  { Icon: SiDart,        label: "Dart",          color: "#0175C2" },
  { Icon: FaNodeJs,      label: "Node.js",       color: "#339933" },
  { Icon: FaGitAlt,      label: "Git",           color: "#F05032" },
  { Icon: FaAndroid,     label: "Android",       color: "#3DDC84" },
  { Icon: SiVercel,      label: "Vercel",        color: "#FFFFFF" },
  { Icon: SiSupabase,    label: "Supabase",      color: "#3ECF8E" },
];

function MarqueeTicker() {
  const items = [...techLogos, ...techLogos]; // duplicate for seamless loop
  return (
    <div
      className="relative overflow-hidden py-5 border-y"
      style={{ borderColor: "color-mix(in oklab, rgb(var(--border)) 60%, transparent)" }}
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24" style={{ background: "linear-gradient(to right, rgb(var(--bg)), transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24" style={{ background: "linear-gradient(to left, rgb(var(--bg)), transparent)" }} />

      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-7 inline-flex items-center gap-2.5 text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-100"
            style={{ color: "rgb(var(--muted))", opacity: 0.65 }}
          >
            <item.Icon size={18} style={{ color: item.color, flexShrink: 0 }} />
            <span>{item.label}</span>
            <span style={{ marginLeft: 8, opacity: 0.25 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO CODE WINDOW (typewriter effect)
───────────────────────────────────────────── */
function HeroCodeWindow() {
  const [typedLine, setTypedLine] = useState(0);
  const lines = [
    [{ t: "// Bolaji David — Mobile & Web Dev", c: "c-comment" }],
    [],
    [{ t: "const", c: "c-keyword" }, { t: " developer = {", c: "" }],
    [{ t: '  name:      ', c: "c-string" }, { t: '"Bolaji David",', c: "" }],
    [{ t: '  role:      ', c: "c-string" }, { t: '"Mobile & Web Dev",', c: "" }],
    [{ t: '  stack:     ', c: "c-string" }, { t: "[", c: "" }],
    [{ t: '    "Flutter", "React Native",', c: "c-string" }],
    [{ t: '    "Next.js", "Firebase",', c: "c-string" }],
    [{ t: "  ],", c: "" }],
    [{ t: "  available: ", c: "c-string" }, { t: "true", c: "c-keyword" }],
    [{ t: "  location:  ", c: "c-string" }, { t: '"Ibadan, Nigeria",', c: "" }],
    [{ t: "};", c: "" }],
  ];

  useEffect(() => {
    if (typedLine >= lines.length) return;
    const t = setTimeout(() => setTypedLine((n) => n + 1), 110);
    return () => clearTimeout(t);
  }, [typedLine, lines.length]);

  return (
    <div className="code-window w-full max-w-md mx-auto lg:mx-0">
      <div className="code-window-bar">
        <span className="code-dot code-dot-red" />
        <span className="code-dot code-dot-yellow" />
        <span className="code-dot code-dot-green" />
        <span className="ml-auto text-[10px] font-mono" style={{ color: "rgb(var(--muted))" }}>developer.ts</span>
      </div>
      <div className="code-body" style={{ minHeight: 260 }}>
        {lines.slice(0, typedLine).map((line, i) => (
          <div key={i}>
            {line.length === 0 ? <br /> : line.map((tok, j) => (
              <span key={j} className={tok.c}>{tok.t}</span>
            ))}
          </div>
        ))}
        {typedLine < lines.length && <span className="c-cursor" />}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROJECT CARD (alternating, with tilt)
───────────────────────────────────────────── */
function FeaturedProjectCard({
  project, reverse, index,
}: {
  project: (typeof projects)[number];
  reverse: boolean;
  index: number;
}) {
  return (
    <MotionInView delay={index * 80}>
      <TiltCard intensity={6} className="w-full">
        <div className={`flex flex-col gap-8 items-start ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
          {/* Image */}
          <div className="w-full lg:w-[46%] flex-shrink-0">
            <div
              className="project-img-wrap aspect-video"
              style={{ boxShadow: "0 20px 60px -15px color-mix(in oklab, rgb(var(--accentA)) 25%, transparent)" }}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{ background: "linear-gradient(135deg, color-mix(in oklab, rgb(var(--accentA)) 15%, transparent), color-mix(in oklab, rgb(var(--accentB)) 10%, transparent))" }}
                >
                  <span className="text-5xl opacity-30">
                    {project.category === "Flutter" || project.category === "React Native" ? "📱" : "🌐"}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <span className="eyebrow">{project.category}</span>
              <span className="text-xs text-[rgb(var(--muted))]">{String(index + 1).padStart(2, "0")}</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight">
              {project.links.live ? (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="wavy-link hover:text-[rgb(var(--accentA))] transition-colors">{project.title}</a>
              ) : project.title}
            </h3>

            <p className="text-sm leading-relaxed text-[rgb(var(--muted))]">{project.summary}</p>

            <ul className="space-y-1.5">
              {project.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[rgb(var(--muted))]">
                  <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full flex items-center justify-center text-[10px]" style={{ background: "color-mix(in oklab, rgb(var(--accentA)) 15%, transparent)", color: "rgb(var(--accentA))" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>

            <div className="flex items-center gap-3 pt-2">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn-glow text-xs">View Live ↗</a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
              )}
              <Link href={`/projects/${project.slug}`} className="text-xs text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition-colors underline underline-offset-4">
                Case study →
              </Link>
            </div>
          </div>
        </div>
      </TiltCard>
    </MotionInView>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIAL SLIDER
───────────────────────────────────────────── */
const testimonials = [
  { text: "Working together with David on Donsfarm, he was absolutely amazing and very resourceful. His inputs and ideas are among the leading factors that led to the development and deployment of Donsfarm.", author: "Sulaimon Quadri Dolapo", role: " CEO DonsFarm" },
  { text: "I have known David for years now, and he has always helped with my projects while I was still in school. I am so proud and confident to put him in charge of my Gym web app. He is such a focused and tenacious fellow.", author: "Umar Faruk Babatunde ", role: "CEO Babs Cruz  Gym" },
];

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);
  useEffect(() => { const id = setInterval(next, 5500); return () => clearInterval(id); }, [next]);

  return (
    <div className="relative">
      <div key={current} className="glow-card glass rounded-2xl p-7" style={{ animation: "fade-in 0.4s ease forwards" }}>
        <span className="block text-5xl font-serif leading-none mb-3" style={{ color: "rgb(var(--accentA))", opacity: 0.35 }} aria-hidden>&ldquo;</span>
        <p className="text-base leading-relaxed text-[rgb(var(--muted))]">{testimonials[current].text}</p>
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold" style={{ background: "linear-gradient(135deg, rgb(var(--accentA)), rgb(var(--accentB)))", color: "#fff" }}>
            {testimonials[current].author[0]}
          </div>
          <div>
            <p className="text-sm font-semibold">{testimonials[current].author}</p>
            <p className="text-xs text-[rgb(var(--muted))]">{testimonials[current].role}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button onClick={prev} aria-label="Previous" className="flex h-8 w-8 items-center justify-center rounded-full border transition-all border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)] hover:border-[color-mix(in_oklab,rgb(var(--accentA))_50%,transparent)] hover:bg-[color-mix(in_oklab,rgb(var(--accentA))_8%,transparent)]">←</button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Testimonial ${i + 1}`} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[rgb(var(--accentA))]" : "w-2 bg-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)]"}`} />
          ))}
        </div>
        <button onClick={next} aria-label="Next" className="flex h-8 w-8 items-center justify-center rounded-full border transition-all border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)] hover:border-[color-mix(in_oklab,rgb(var(--accentA))_50%,transparent)] hover:bg-[color-mix(in_oklab,rgb(var(--accentA))_8%,transparent)]">→</button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE — SINGLE-PAGE LANDING
───────────────────────────────────────────── */
export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div>
      {/* ══════════════════════════════════════
          HERO  #home
      ══════════════════════════════════════ */}
      <section id="home" className="relative min-h-[92vh] overflow-hidden flex items-center" aria-label="Hero">
        {/* Orb backgrounds */}
        {[
          { w: 600, h: 600, style: { top: "-180px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, color-mix(in oklab, rgb(var(--accentA)) 18%, transparent), transparent 70%)" } },
          { w: 450, h: 450, style: { bottom: "-100px", left: "-120px", background: "radial-gradient(circle, color-mix(in oklab, rgb(var(--accentB)) 14%, transparent), transparent 70%)" } },
          { w: 380, h: 380, style: { top: "10%", right: "-80px", background: "radial-gradient(circle, color-mix(in oklab, rgb(var(--accentA)) 10%, transparent), transparent 70%)" } },
        ].map((orb, i) => (
          <div key={i} className="hero-orb" style={{ width: orb.w, height: orb.h, ...orb.style }} aria-hidden />
        ))}
        <div className="star-field opacity-40" aria-hidden />
        <div className="bg-grid absolute inset-0 opacity-20" aria-hidden />

        <div className="relative mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <div>
              <MotionInView delay={0}>
                <span className="avail-pill">
                  <span className="avail-dot" />
                  {profile.availability} · {profile.location}
                </span>
              </MotionInView>

              <MotionInView delay={100}>
                <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                  Building{" "}
                  <span className="gradient-text">Cross-Platform</span>
                  <br />
                  Apps That{" "}
                  <span className="shimmer-text">Actually Scale.</span>
                </h1>
              </MotionInView>

              <MotionInView delay={200}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-[rgb(var(--muted))] sm:text-lg">
                  Hi, I&apos;m <strong className="text-[rgb(var(--fg))]">{profile.name}</strong> — a Mobile &amp; Web developer from Nigeria. I build polished{" "}
                  <span className="text-[rgb(var(--accentA))] font-medium">Flutter</span>,{" "}
                  <span className="text-[rgb(var(--accentA))] font-medium">React Native</span>, and{" "}
                  <span className="text-[rgb(var(--accentA))] font-medium">Next.js</span>{" "}
                  products with clean architecture and reliable delivery.
                </p>
              </MotionInView>

              <MotionInView delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/#contact" className="btn-glow">
                    Hire Me
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </a>
                  <a href="/#projects" className="btn-outline">View Projects</a>
                  {profile.resumeUrl && <a href={profile.resumeUrl} className="btn-outline" target="_blank" rel="noopener noreferrer">Download CV</a>}
                </div>
              </MotionInView>

              <MotionInView delay={420}>
                <div className="mt-10 grid grid-cols-3 gap-3">
                  {[
                    { val: "3+", label: "Years Exp.", emoji: "🚀" },
                    { val: "5+", label: "Apps Shipped", emoji: "📱" },
                    { val: "10+", label: "Technologies", emoji: "⚙️" },
                  ].map((s) => (
                    <div key={s.label} className="stat-card">
                      <div className="text-2xl mb-1">{s.emoji}</div>
                      <p className="text-xl font-bold">{s.val}</p>
                      <p className="text-[11px] text-[rgb(var(--muted))]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </MotionInView>
            </div>

            {/* Right: Device Slider */}
            <MotionInView delay={150} className="hidden lg:flex justify-center">
              <DeviceSlider />
            </MotionInView>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-[rgb(var(--muted))] opacity-50" aria-hidden>
            <div className="h-8 w-5 rounded-full border-2 flex items-start justify-center pt-1" style={{ borderColor: "color-mix(in oklab, rgb(var(--muted)) 50%, transparent)" }}>
              <div className="h-1.5 w-1 rounded-full animate-bounce" style={{ background: "rgb(var(--muted))" }} />
            </div>
            Scroll
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARQUEE TICKER
      ══════════════════════════════════════ */}
      <MarqueeTicker />

      {/* ══════════════════════════════════════
          ABOUT  #about
      ══════════════════════════════════════ */}
      <section id="about" className="py-20" aria-label="About">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <MotionInView>
                <span className="eyebrow">About Me</span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Building apps that <span className="gradient-text">feel native</span>, perform fast.
                </h2>
              </MotionInView>

              {aboutMe.paragraphs.map((p, i) => (
                <MotionInView key={i} delay={80 + i * 80}>
                  <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">{p}</p>
                </MotionInView>
              ))}

              <MotionInView delay={280}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[...aboutMe.skills.mobile, ...aboutMe.skills.frontend].slice(0, 10).map((sk) => (
                    <span key={sk} className="tag">{sk}</span>
                  ))}
                </div>
              </MotionInView>

              <MotionInView delay={360}>
                <div className="mt-8 flex items-stretch gap-0 rounded-2xl overflow-hidden border" style={{ borderColor: "color-mix(in oklab, rgb(var(--border)) 70%, transparent)" }}>
                  {[
                    { num: "01", title: "Understand", desc: "Deep-dive into product goals" },
                    { num: "02", title: "Architect", desc: "Design clean, scalable systems" },
                    { num: "03", title: "Ship",  desc: "Deploy polished apps on time" },
                  ].map((step, i) => (
                    <div key={step.num} className={`flex-1 p-4 text-center transition-colors ${i < 2 ? "border-r border-[color-mix(in_oklab,rgb(var(--border))_70%,transparent)]" : ""} hover:bg-[color-mix(in_oklab,rgb(var(--accentA))_5%,transparent)]`}>
                      <p className="text-xs font-bold" style={{ color: "rgb(var(--accentA))" }}>{step.num}</p>
                      <p className="mt-1 text-sm font-semibold">{step.title}</p>
                      <p className="mt-1 text-[11px] text-[rgb(var(--muted))]">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </MotionInView>

              <MotionInView delay={420}>
                <div className="mt-6 flex gap-3">
                  <a href="/#contact" className="btn-glow text-sm">Work With Me</a>
                  {profile.resumeUrl && <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">Download CV</a>}
                </div>
              </MotionInView>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3+", label: "Years Building", icon: "🧑‍💻" },
                { value: "5+", label: "Apps Shipped",   icon: "📱" },
                { value: "10+", label: "Global Clients", icon: "🌍" },
                { value: "100%", label: "Cross-Platform", icon: "⚡" },
              ].map((kpi, i) => (
                <MotionInView key={kpi.label} delay={i * 80}>
                  <div className="skill-card text-center" style={i === 1 ? { background: "linear-gradient(135deg, color-mix(in oklab, rgb(var(--accentA)) 12%, rgb(var(--card))), color-mix(in oklab, rgb(var(--accentB)) 8%, rgb(var(--card))))", borderColor: "color-mix(in oklab, rgb(var(--accentA)) 35%, transparent)" } : {}}>
                    <div className="text-3xl mb-3">{kpi.icon}</div>
                    <p className="text-3xl font-bold tracking-tight">{kpi.value}</p>
                    <p className="mt-1 text-xs text-[rgb(var(--muted))]">{kpi.label}</p>
                  </div>
                </MotionInView>
              ))}

              {/* Code snippet */}
              <MotionInView delay={360} className="col-span-2">
                <div className="code-window">
                  <div className="code-window-bar">
                    <span className="code-dot code-dot-red" /><span className="code-dot code-dot-yellow" /><span className="code-dot code-dot-green" />
                    <span className="ml-2 text-[10px] font-mono" style={{ color: "rgb(var(--muted))" }}>main.dart</span>
                  </div>
                  <div className="code-body text-[11px]">
                    <span className="c-keyword">void</span> <span className="c-fn">main</span>{"() {"}<br />
                    {"  "}<span className="c-fn">runApp</span>{"("}<br />
                    {"    "}<span className="c-class">ProviderScope</span>{"("}<br />
                    {"      child: "}<span className="c-class">MyApp</span>{"(),"}<br />
                    {"    ),"}<br />
                    {"  );"}<br />
                    {"}"}
                  </div>
                </div>
              </MotionInView>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES  #services
      ══════════════════════════════════════ */}
      <section
        id="services"
        className="py-20"
        style={{ background: "color-mix(in oklab, rgb(var(--card)) 30%, rgb(var(--bg)))" }}
        aria-label="Services"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <MotionInView>
            <span className="eyebrow">What I Offer</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Services &amp; <span className="gradient-text">Expertise</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[rgb(var(--muted))]">
              End-to-end product development — from UI design implementation to scalable backend integrations.
            </p>
          </MotionInView>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "📱", title: "Mobile App Development", desc: "Cross-platform iOS & Android apps with Flutter and React Native. Clean architecture, state management, and native-feel UX.", tags: ["Flutter", "React Native", "Dart"] },
              { icon: "🌐", title: "Web Development", desc: "Responsive, performant web apps with Next.js and React. Server components, SEO, and lightning-fast Core Web Vitals.", tags: ["Next.js", "React", "TypeScript"] },
              { icon: "🔗", title: "API & Backend Integration", desc: "Firebase, Node.js, REST APIs, third-party payment gateways and auth integrations built for scale.", tags: ["Firebase", "Node.js", "REST"] },
              { icon: "🎨", title: "UI/UX Implementation", desc: "Pixel-perfect, animated interfaces from Figma or design specs. Tailwind, custom CSS, and smooth transitions.", tags: ["Tailwind CSS", "Figma", "CSS"] },
            ].map((svc, i) => (
              <MotionInView key={svc.title} delay={i * 80}>
                <TiltCard intensity={8}>
                  <div className="skill-card h-full flex flex-col">
                    <span className="text-3xl mb-3">{svc.icon}</span>
                    <h3 className="font-semibold text-sm mb-2">{svc.title}</h3>
                    <p className="text-xs leading-relaxed text-[rgb(var(--muted))] mb-4">{svc.desc}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {svc.tags.map((t) => <span key={t} className="tag text-[10px]">{t}</span>)}
                    </div>
                  </div>
                </TiltCard>
              </MotionInView>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURED PROJECTS  #projects
      ══════════════════════════════════════ */}
      <section id="projects" className="py-20" aria-label="Featured Projects">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <MotionInView>
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="eyebrow">My Work</span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm text-[rgb(var(--muted))]">
                  Cross-platform mobile and web applications I&apos;ve built — each solving a real problem with clean, scalable code.
                </p>
              </div>
            </div>
          </MotionInView>

          <div className="mt-14 space-y-20">
            {featured.map((project, i) => (
              <FeaturedProjectCard key={project.slug} project={project} reverse={i % 2 === 1} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SKILLS  #skills
      ══════════════════════════════════════ */}
      <section
        id="skills"
        className="py-20"
        style={{ background: "color-mix(in oklab, rgb(var(--card)) 30%, rgb(var(--bg)))" }}
        aria-label="Skills"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <MotionInView>
            <span className="eyebrow">Expertise</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">My <span className="gradient-text">Tech Stack</span></h2>
          </MotionInView>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "📱", cat: "Mobile",       count: "5+ projects", desc: "Cross-platform mobile development for iOS and Android.", techs: aboutMe.skills.mobile },
              { icon: "🌐", cat: "Frontend",      count: "10+ builds",  desc: "Responsive, performant web interfaces with modern tooling.", techs: aboutMe.skills.frontend },
              { icon: "🔧", cat: "Backend & APIs", count: "3+ projects", desc: "Scalable server-side services and third-party integrations.", techs: aboutMe.skills.backend },
              { icon: "⚙️", cat: "Core & Tools",  count: "Daily",       desc: "Foundational languages, tooling, and engineering principles.", techs: [...aboutMe.skills.core, ...aboutMe.skills.tools].slice(0, 6) },
            ].map((cat, i) => (
              <MotionInView key={cat.cat} delay={i * 80}>
                <TiltCard intensity={10}>
                  <div className="skill-card h-full flex flex-col">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{cat.icon}</span>
                        <h3 className="font-semibold text-sm">{cat.cat}</h3>
                      </div>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-medium whitespace-nowrap" style={{ background: "color-mix(in oklab, rgb(var(--accentA)) 12%, transparent)", color: "rgb(var(--accentA))" }}>{cat.count}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-[rgb(var(--muted))] mb-4">{cat.desc}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {cat.techs.map((t) => <span key={t} className="tag text-[10px]">{t}</span>)}
                    </div>
                  </div>
                </TiltCard>
              </MotionInView>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EXPERIENCE + TESTIMONIALS
      ══════════════════════════════════════ */}
      <section id="experience" className="py-20" aria-label="Experience and testimonials">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2">

            {/* Experience */}
            <div>
              <MotionInView>
                <span className="eyebrow">Work History</span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  Where I&apos;ve Made an <span className="gradient-text">Impact</span>
                </h2>
              </MotionInView>

              <div className="mt-8">
                {profile.workExperience.map((exp, i) => (
                  <MotionInView key={i} delay={i * 100}>
                    <article className="timeline-item">
                      <div className="timeline-dot" />
                      <div className="glow-card glass rounded-2xl p-5" style={{ borderColor: "color-mix(in oklab, rgb(var(--border)) 70%, transparent)" }}>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-semibold text-sm">{exp.role}</h3>
                            <p className="text-xs mt-0.5" style={{ color: "rgb(var(--accentA))" }}>{exp.company}</p>
                          </div>
                          <time className="text-xs text-[rgb(var(--muted))] whitespace-nowrap shrink-0">{exp.period}</time>
                        </div>
                        <p className="mt-3 text-xs leading-relaxed text-[rgb(var(--muted))]">{exp.description}</p>
                        {exp.website && (
                          <a href={exp.website} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs text-[rgb(var(--accentA))] hover:underline">
                            Visit Website
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </article>
                  </MotionInView>
                ))}
              </div>
            </div>

            {/* Testimonials + Why work with me */}
            <div>
              <MotionInView>
                <span className="eyebrow">Testimonials</span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  What Clients <span className="gradient-text">Say</span>
                </h2>
              </MotionInView>
              <MotionInView delay={120} className="mt-8">
                <TestimonialSlider />
              </MotionInView>

              <MotionInView delay={200} className="mt-8">
                <div className="glow-card glass rounded-2xl p-5" style={{ borderColor: "color-mix(in oklab, rgb(var(--border)) 70%, transparent)" }}>
                  <h3 className="font-semibold text-sm mb-4">Why work with me</h3>
                  <div className="space-y-3">
                    {[
                      { i: "01", title: "Product-minded execution", desc: "Pragmatic plans, sharp UX, performance-first decisions." },
                      { i: "02", title: "Cross-platform efficiency", desc: "Faster iteration across iOS/Android with consistent quality." },
                      { i: "03", title: "Clean, scalable architecture", desc: "Components and state that scale with your features." },
                      { i: "04", title: "Reliable delivery", desc: "Clear communication and on-time shipping, always." },
                    ].map((r) => (
                      <div key={r.i} className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[color-mix(in_oklab,rgb(var(--accentA))_5%,transparent)]">
                        <span className="rounded-lg px-2 py-1 text-[10px] font-bold shrink-0" style={{ background: "color-mix(in oklab, rgb(var(--accentA)) 12%, transparent)", color: "rgb(var(--accentA))" }}>{r.i}</span>
                        <div>
                          <p className="text-xs font-semibold">{r.title}</p>
                          <p className="text-xs text-[rgb(var(--muted))] mt-0.5">{r.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionInView>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EDUCATION
      ══════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: "color-mix(in oklab, rgb(var(--card)) 30%, rgb(var(--bg)))" }}
        aria-label="Education"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <MotionInView>
            <span className="eyebrow">Education</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Academic <span className="gradient-text">Background</span></h2>
          </MotionInView>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutMe.education.map((edu, i) => (
              <MotionInView key={i} delay={i * 100}>
                <TiltCard intensity={8}>
                  <div className="glow-card skill-card">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-lg" style={{ background: "color-mix(in oklab, rgb(var(--accentA)) 12%, transparent)" }}>🎓</div>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm mt-1" style={{ color: "rgb(var(--accentA))" }}>{edu.institution}</p>
                    <time className="text-xs text-[rgb(var(--muted))] mt-1 block">{edu.timeframe}</time>
                  </div>
                </TiltCard>
              </MotionInView>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT  #contact
      ══════════════════════════════════════ */}
      <section id="contact" className="py-20" aria-label="Contact">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            {/* Left: info */}
            <div>
              <MotionInView>
                <span className="eyebrow">Get In Touch</span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Let&apos;s Build Something <span className="gradient-text">Real</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">
                  Whether you need a Flutter mobile app, a Next.js web platform, or Firebase backend — I&apos;m here to help you ship it. Send a message and I&apos;ll get back to you within 24 hours.
                </p>
              </MotionInView>

              <MotionInView delay={100}>
                <div className="mt-8 space-y-4">
                  {[
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      ),
                      label: "Email",
                      val: profile.links.email,
                      href: `mailto:${profile.links.email}`
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      ),
                      label: "WhatsApp",
                      val: "Chat on WhatsApp",
                      href: profile.links.whatsapp
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      ),
                      label: "GitHub",
                      val: "github.com/bolajidavid25",
                      href: profile.links.github
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      ),
                      label: "LinkedIn",
                      val: "Connect on LinkedIn",
                      href: profile.links.linkedin
                    },
                  ].map((c) => (
                    <a key={c.label} href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl p-4 border transition-all duration-200 group"
                      style={{ borderColor: "color-mix(in oklab, rgb(var(--border)) 70%, transparent)", background: "color-mix(in oklab, rgb(var(--card)) 50%, transparent)" }}
                    >
                      <span className="text-[rgb(var(--muted))] group-hover:text-[rgb(var(--accentA))] transition-colors">{c.icon}</span>
                      <div>
                        <p className="text-[11px] font-medium text-[rgb(var(--muted))]">{c.label}</p>
                        <p className="text-sm font-semibold group-hover:text-[rgb(var(--accentA))] transition-colors">{c.val}</p>
                      </div>
                      <span className="ml-auto text-[rgb(var(--muted))] group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  ))}

                  {/* Calendly Booking Button */}
                  <a
                    href={profile.links.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 rounded-2xl p-4 border transition-all duration-200 group btn-glow"
                    style={{ borderColor: "color-mix(in oklab, rgb(var(--accentA)) 50%, transparent)", background: "color-mix(in oklab, rgb(var(--accentA)) 10%, transparent)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                    <span className="font-semibold">Book a Meeting</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </MotionInView>
            </div>

            {/* Right: form */}
            <MotionInView delay={150}>
              <div className="glow-card glass rounded-3xl p-7" style={{ borderColor: "color-mix(in oklab, rgb(var(--border)) 70%, transparent)" }}>
                <h3 className="font-semibold mb-5">Send a Message</h3>
                <ContactForm />
              </div>
            </MotionInView>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="py-16" aria-label="CTA">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <MotionInView>
            <div
              className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center"
              style={{
                background: "linear-gradient(135deg, color-mix(in oklab, rgb(var(--accentA)) 18%, rgb(var(--card))), color-mix(in oklab, rgb(var(--accentB)) 12%, rgb(var(--card))))",
                border: "1px solid color-mix(in oklab, rgb(var(--accentA)) 30%, transparent)",
              }}
            >
              <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(ellipse, color-mix(in oklab, rgb(var(--accentA)) 30%, transparent), transparent 70%)", filter: "blur(40px)" }} aria-hidden />
              <p className="eyebrow mb-4" style={{ color: "rgb(var(--accentB))" }}>Open to Work</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Build Something <span className="gradient-text">Remarkable?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[rgb(var(--muted))]">
                I help teams ship reliable mobile and web products with clean UI, scalable architecture, and Firebase-backed features.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="/#contact" className="btn-glow px-8 py-3">
                  Let&apos;s Talk
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                </a>
                <a href="/#projects" className="btn-outline px-8 py-3">See My Work</a>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[rgb(var(--muted))]">
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" />Available for projects</span>
                <span>⚡ Fast turnaround</span>
                <span>🌍 Remote friendly</span>
              </div>
            </div>
          </MotionInView>
        </div>
      </section>
    </div>
  );
}
