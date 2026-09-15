"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ExternalLink, Github, ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const screenshots = project.screenshots || [];
  const hasScreenshots = screenshots.length > 0;

  return (
    <>
    <article
      className={cn(
        "group overflow-hidden rounded-2xl ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_75%,transparent)] bg-[color-mix(in_oklab,rgb(var(--card))_85%,transparent)]",
        "transition hover:-translate-y-0.5",
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
          <div className="absolute inset-0 bg-[color-mix(in_oklab,rgb(var(--card))_90%,transparent)]" />
        )}
        <div className="absolute right-4 top-4 max-w-[62%] rounded-xl border border-white/15 bg-black/35 px-3 py-2 text-xs text-white/80">
          {project.preview}
        </div>
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-sm font-medium tracking-tight text-white/90">
            {project.title}
          </p>
          <p className="mt-1 text-xs text-white/70">{project.category}</p>
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
          {hasScreenshots ? (
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-[color-mix(in_oklab,rgb(var(--card))_75%,transparent)] transition"
            >
              <ImageIcon className="h-4 w-4" />
              Preview
            </button>
          ) : null}
        </div>
      </div>
    </article>
    {isPreviewOpen && hasScreenshots && (
      <div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md" 
        onClick={() => setIsPreviewOpen(false)}
      >
        <button 
          onClick={() => setIsPreviewOpen(false)} 
          className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] p-3 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all backdrop-blur"
          aria-label="Close Preview"
        >
          <X className="h-6 w-6" />
        </button>

        <div 
          className="relative w-full overflow-x-auto flex snap-x snap-mandatory gap-8 items-center px-6 md:px-[15vw] py-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
          onClick={(e) => e.stopPropagation()}
        >
          {screenshots.map((img, i) => {
            const isPortrait = img.orientation === "portrait";
            return (
              <div 
                key={i} 
                className={`relative flex flex-col items-center flex-none snap-center shrink-0 group ${
                  isPortrait ? "w-[80vw] sm:w-[50vw] md:w-[35vw] max-w-[400px]" : "w-[85vw] md:w-[70vw] max-w-5xl"
                }`}
              >
                <div className={`relative w-full rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/50 shadow-2xl transition duration-500 group-hover:ring-white/30 ${
                  isPortrait ? "aspect-[9/18]" : "aspect-[4/3] md:aspect-video"
                }`}>
                <Image 
                  src={img.src} 
                  alt={`${project.title} screenshot - ${img.caption}`} 
                  fill 
                  className="object-contain" 
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={i === 0}
                />
              </div>
              <p className="mt-5 text-center text-white/90 text-sm md:text-base tracking-wide font-medium bg-black/40 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
                <span className="opacity-60 mr-2">{i + 1} / {screenshots.length}</span> {img.caption}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    )}
    </>
  );
}

