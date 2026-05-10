import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] bg-[color-mix(in_oklab,rgb(var(--card))_85%,transparent)]",
        "transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-30px_color-mix(in_oklab,rgb(var(--accentA))_40%,transparent)]",
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,rgb(var(--accentA))_40%,transparent),transparent_55%)]" />
        )}
        {!project.image ? (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,color-mix(in_oklab,rgb(var(--accentB))_35%,transparent),transparent_60%)]" />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.62),transparent_62%)] opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_oklab,rgb(var(--card))_20%,transparent),transparent_50%)]" />
        <div className="absolute right-4 top-4 max-w-[62%] rounded-xl border border-white/15 bg-black/35 px-3 py-2 text-xs text-white/80 backdrop-blur">
          {project.preview}
        </div>
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-sm font-medium tracking-tight text-white/90">
            {project.title}
          </p>
          <p className="mt-1 text-xs text-white/70">{project.category}</p>
        </div>
        <div className="absolute left-4 top-4">
          <Badge className="bg-black/30 text-white ring-white/15 backdrop-blur">
            {project.category}
          </Badge>
        </div>
      </div>

      <div className={cn("p-5", compact && "p-4")}>
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[rgb(var(--muted))]">
          {project.summary}
        </p>
        {!compact ? (
          <div className="mt-4 grid gap-3 text-sm">
            <div className="rounded-xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--muted))]">
                Problem
              </p>
              <p className="mt-1 leading-6">{project.problem}</p>
            </div>
            <div className="rounded-xl border border-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--muted))]">
                Solution
              </p>
              <p className="mt-1 leading-6">{project.solution}</p>
            </div>
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, compact ? 3 : 5).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        {!compact ? (
          <div className="mt-4 grid gap-2">
            {project.features.slice(0, 3).map((feature) => (
              <p
                key={feature}
                className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))]"
              >
                <CheckCircle2 className="h-4 w-4 text-[rgb(var(--accentB))]" />
                {feature}
              </p>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex items-center gap-3 text-sm">
          {project.links.github ? (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-[color-mix(in_oklab,rgb(var(--card))_75%,transparent)] transition"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          ) : null}
          {project.links.live ? (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-[color-mix(in_oklab,rgb(var(--card))_75%,transparent)] transition"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

