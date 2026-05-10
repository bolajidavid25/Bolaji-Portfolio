"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const [state, setState] = React.useState<FormState>({ status: "idle" });
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const errors = React.useMemo(() => {
    const e: Partial<Record<keyof typeof values, string>> = {};
    if (values.name.trim().length < 2) e.name = "Enter your name.";
    if (!isEmail(values.email.trim())) e.email = "Enter a valid email.";
    if (values.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    return e;
  }, [values]);

  const canSubmit =
    state.status !== "submitting" && Object.keys(errors).length === 0;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setState({ status: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const responseText = await res.text();
      let data: { ok: boolean; error?: string } = { ok: false };

      try {
        data = JSON.parse(responseText) as { ok: boolean; error?: string };
      } catch {
        data = { ok: false, error: responseText || "Unexpected response from the server." };
      }

      if (!res.ok || !data.ok) {
        setState({
          status: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
        return;
      }
      setState({ status: "success" });
      setValues({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error", error);
      setState({
        status: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field
        label="Name"
        value={values.name}
        onChange={(v) => setValues((s) => ({ ...s, name: v }))}
        placeholder="Your name"
        error={errors.name}
        autoComplete="name"
      />
      <Field
        label="Email"
        value={values.email}
        onChange={(v) => setValues((s) => ({ ...s, email: v }))}
        placeholder="you@example.com"
        error={errors.email}
        autoComplete="email"
        inputMode="email"
      />
      <Field
        label="Message"
        value={values.message}
        onChange={(v) => setValues((s) => ({ ...s, message: v }))}
        placeholder="Tell me about your project..."
        error={errors.message}
        textarea
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="primary" disabled={!canSubmit}>
          {state.status === "submitting" ? "Sending..." : "Send message"}
        </Button>

        {state.status === "success" ? (
          <p className="text-sm text-[rgb(var(--muted))]">
            Message sent. I’ll reply shortly.
          </p>
        ) : state.status === "error" ? (
          <p className="text-sm text-red-400">{state.message}</p>
        ) : (
          <p className="text-sm text-[rgb(var(--muted))]">
            I typically respond within 24–48 hours.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  error,
  textarea,
  className,
  ...props
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  textarea?: boolean;
  className?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "placeholder"
>) {
  return (
    <label className={cn("block space-y-2", className)}>
      <span className="text-sm font-medium">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          className={cn(
            "w-full rounded-2xl px-4 py-3 text-sm outline-none transition",
            "bg-[color-mix(in_oklab,rgb(var(--card))_85%,transparent)] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_80%,transparent)]",
            "focus:ring-2 focus:ring-[rgb(var(--ring))]",
          )}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-2xl px-4 py-3 text-sm outline-none transition",
            "bg-[color-mix(in_oklab,rgb(var(--card))_85%,transparent)] ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_80%,transparent)]",
            "focus:ring-2 focus:ring-[rgb(var(--ring))]",
          )}
          {...props}
        />
      )}
      {error ? <span className="block text-xs text-red-400">{error}</span> : null}
    </label>
  );
}

