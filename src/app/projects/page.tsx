import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { MotionInView } from "@/components/motion-in-view";
import { ProjectsGrid } from "@/components/projects-grid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected mobile and web projects built with React, Next.js, React Native, Flutter, and Firebase.",
};

export default function ProjectsPage({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const initialSearch = searchParams?.search ?? "";

  return (
    <Container className="py-16 sm:py-20">
      <MotionInView>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-3xl text-[rgb(var(--muted))] leading-7">
          These projects are presented as mini case studies: each one explains the
          problem, the solution approach, key features, and the tech stack used.
        </p>
      </MotionInView>

      <MotionInView className="mt-10" delay={0.05}>
        <ProjectsGrid projects={projects} initialQuery={initialSearch} />
      </MotionInView>
    </Container>
  );
}

