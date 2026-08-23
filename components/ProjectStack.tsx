"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function ProjectStack() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <header className="projects-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title">Projects</h2>
        </div>
        <p className="projects-instruction">Scroll to explore · Select a project to open</p>
      </header>
      <div className="project-stack">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} onOpen={() => setActiveProject(project)} />
        ))}
      </div>
      {activeProject ? <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} /> : null}
    </section>
  );
}
