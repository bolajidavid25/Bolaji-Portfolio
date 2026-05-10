import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name}, mobile and web application developer.`,
};

export default function ResumePage() {
  return (
    <Container className="py-16 sm:py-20">
      <section className="mx-auto max-w-4xl rounded-3xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] bg-[color-mix(in_oklab,rgb(var(--card))_88%,transparent)] p-6 sm:p-10">
        <div className="flex flex-col gap-4 border-b border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">{profile.name}</h1>
            <p className="mt-1 text-sm text-[rgb(var(--muted))]">{profile.role}</p>
            <div className="mt-3 space-y-1 text-sm text-[rgb(var(--muted))]">
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {profile.links.email}
              </p>
            </div>
          </div>
          <Link
            href="/bolaji-david-resume.txt"
            className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--accentA))] px-5 py-2.5 text-sm font-medium text-white"
          >
            <Download className="h-4 w-4" />
            Download Text Resume
          </Link>
        </div>

        <div className="mt-6 space-y-6 text-sm">
          <section>
            <h2 className="text-base font-semibold tracking-tight">Professional Summary</h2>
            <p className="mt-2 leading-7 text-[rgb(var(--muted))]">{profile.valueProposition}</p>
          </section>

          <section>
            <h2 className="text-base font-semibold tracking-tight">Core Skills</h2>
            <p className="mt-2 leading-7 text-[rgb(var(--muted))]">
              Frontend: React, Next.js, TypeScript, Tailwind CSS
              <br />
              Mobile: Flutter, React Native, Riverpod
              <br />
              Backend: Firebase, Node.js, REST APIs
              <br />
              Tools: Git, GitHub, VS Code, Figma
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold tracking-tight">Experience</h2>
            <div className="mt-3 space-y-3">
              <div className="rounded-xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-4">
                <p className="font-medium">Freelance Mobile & Web Developer</p>
                <p className="text-xs text-[rgb(var(--muted))]">2022 - Present</p>
                <p className="mt-2 leading-7 text-[rgb(var(--muted))]">
                  Build and maintain web and mobile products from idea to deployment
                  using React, Next.js, Flutter, and Firebase.
                </p>
              </div>
              <div className="rounded-xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-4">
                <p className="font-medium">Personal Product Engineering</p>
                <p className="text-xs text-[rgb(var(--muted))]">2020 - Present</p>
                <p className="mt-2 leading-7 text-[rgb(var(--muted))]">
                  Built portfolio case studies including messaging apps, dashboards,
                  and conversion-focused web experiences.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold tracking-tight">Education</h2>
            <p className="mt-2 leading-7 text-[rgb(var(--muted))]">{profile.education}</p>
          </section>
        </div>
      </section>
    </Container>
  );
}
