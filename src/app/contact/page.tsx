import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MotionInView } from "@/components/motion-in-view";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.name} — send a message or connect on GitHub and LinkedIn.`,
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-20">
      <MotionInView>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 max-w-3xl text-[rgb(var(--muted))] leading-7">
          Let&apos;s build something. If you&apos;re hiring or launching a product, send
          a message and I&apos;ll reply with practical next steps.
        </p>
      </MotionInView>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <MotionInView className="glass rounded-2xl p-6 lg:col-span-3" delay={0.05}>
          <ContactForm />
        </MotionInView>

        <MotionInView className="glass rounded-2xl p-6 lg:col-span-2" delay={0.1}>
          <h2 className="text-lg font-semibold tracking-tight">Links</h2>
          <div className="mt-4 space-y-3 text-sm">
            <Link
              href={`mailto:${profile.links.email}`}
              className="flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-[color-mix(in_oklab,rgb(var(--card))_80%,transparent)] transition"
            >
              <Mail className="h-4 w-4 text-[rgb(var(--accentB))]" />
              <span className="truncate">{profile.links.email}</span>
            </Link>
            <Link
              href={profile.links.phone}
              className="flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-[color-mix(in_oklab,rgb(var(--card))_80%,transparent)] transition"
            >
              <Phone className="h-4 w-4 text-[rgb(var(--accentB))]" />
              <span>Call: 09059916625</span>
            </Link>
            <Link
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-[color-mix(in_oklab,rgb(var(--card))_80%,transparent)] transition"
            >
              <Github className="h-4 w-4 text-[rgb(var(--accentA))]" />
              <span>GitHub</span>
            </Link>
            <Link
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-[color-mix(in_oklab,rgb(var(--card))_80%,transparent)] transition"
            >
              <Linkedin className="h-4 w-4 text-[rgb(var(--accentB))]" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href={profile.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-[color-mix(in_oklab,rgb(var(--card))_80%,transparent)] transition"
            >
              <MessageCircle className="h-4 w-4 text-[rgb(var(--accentA))]" />
              <span>WhatsApp</span>
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-4">
            <p className="text-sm font-medium">Prefer direct contact?</p>
            <p className="mt-2 text-xs text-[rgb(var(--muted))]">
              You can email, message on LinkedIn, or start a WhatsApp conversation.
            </p>
          </div>
        </MotionInView>
      </div>
    </Container>
  );
}

