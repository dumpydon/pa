"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

const glowFilters = [
  { id: "project-glow-light", strength: 0.24 },
  { id: "project-glow-dark", strength: 0.08 },
] as const;

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
        <svg className="project-glow-filters" width="0" height="0" aria-hidden="true" focusable="false">
          <defs>
            {glowFilters.map(({ id, strength }) => (
              <filter key={id} id={id} x="-100%" y="-100%" width="300%" height="300%" colorInterpolationFilters="sRGB">
                {/* Dither only the blurred alpha, fading the static noise with the light itself. */}
                <feTurbulence x="0" y="0" width="64" height="64" type="fractalNoise" baseFrequency=".85" numOctaves="1" seed="17" stitchTiles="stitch" result="noise" />
                <feColorMatrix x="0" y="0" width="64" height="64" in="noise" type="matrix" values="1 0 0 0 0   1 0 0 0 0   1 0 0 0 0   0 0 0 0 1" result="noise-tile" />
                <feTile in="noise-tile" result="monochrome" />
                <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 1" result="alpha" />
                <feComponentTransfer in="alpha" result="coverage">
                  <feFuncR type="gamma" exponent=".25" />
                  <feFuncG type="gamma" exponent=".25" />
                  <feFuncB type="gamma" exponent=".25" />
                </feComponentTransfer>
                <feComposite in="monochrome" in2="coverage" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="covered-noise" />
                <feComposite in="alpha" in2="covered-noise" operator="arithmetic" k1="0" k2="1" k3={strength} k4="0" result="alpha-plus-noise" />
                <feComposite in="alpha-plus-noise" in2="coverage" operator="arithmetic" k1="0" k2="1" k3={-strength / 2} k4="0" result="noisy-alpha" />
                <feColorMatrix in="noisy-alpha" type="matrix" values={`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${1 - strength / 2} 0 0 0 0`} result="glow-alpha" />
                {/* Retain the original accent hue; no dithering reaches outside the glow. */}
                <feComponentTransfer in="SourceGraphic" result="glow-color">
                  <feFuncA type="linear" slope="0" intercept="1" />
                </feComponentTransfer>
                <feComposite in="glow-color" in2="glow-alpha" operator="in" />
              </filter>
            ))}
          </defs>
        </svg>
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} onOpen={() => setActiveProject(project)} />
        ))}
      </div>
      {activeProject ? <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} /> : null}
    </section>
  );
}
