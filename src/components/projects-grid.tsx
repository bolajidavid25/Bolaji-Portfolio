"use client";

import * as React from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project, ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "React", "Next.js", "React Native", "Flutter"];

export function ProjectsGrid({
  projects,
  initialQuery = "",
}: {
  projects: Project[];
  initialQuery?: string;
}) {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [query, setQuery] = React.useState(initialQuery);

  React.useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const visible = React.useMemo(() => {
    const byCategory =
      filter === "All" ? projects : projects.filter((p) => p.category === filter);

    const q = query.trim().toLowerCase();
    if (!q) return byCategory;

    return byCategory.filter((p) => {
      const searchSpace = [
        p.title,
        p.summary,
        p.problem,
        p.solution,
        ...p.tech,
        ...p.features,
        p.category,
      ]
        .join(" ")
        .toLowerCase();

      return searchSpace.includes(q);
    });
  }, [filter, projects, query]);

  return (
    <div className="space-y-6">
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects..."
          className="w-full rounded-2xl px-4 py-2 text-sm outline-none ring-1 ring-inset ring-[color-mix(in_oklab,rgb(var(--border))_80%,transparent)] bg-[color-mix(in_oklab,rgb(var(--card))_85%,transparent)] focus:ring-2 focus:ring-[rgb(var(--ring))]"
        />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-2 text-sm ring-1 ring-inset transition",
                "ring-[color-mix(in_oklab,rgb(var(--border))_80%,transparent)] bg-[color-mix(in_oklab,rgb(var(--card))_80%,transparent)] hover:bg-[color-mix(in_oklab,rgb(var(--card))_75%,rgb(var(--accentB))_10%)]",
                active &&
                  "bg-[color-mix(in_oklab,rgb(var(--card))_70%,rgb(var(--accentA))_20%)] ring-[color-mix(in_oklab,rgb(var(--accentA))_35%,rgb(var(--border)))]",
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      {visible.length ? (
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-[rgb(var(--muted))]">
          No projects match your search yet. Try another keyword.
        </p>
      )}
    </div>
  );
}

