"use client";

import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function ProjectStack() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const steps = Array.from(stack.querySelectorAll<HTMLElement>(".project-step"));
    const cards = steps.map((step) => step.querySelector<HTMLElement>(".project-card")!);
    let highlighted = -1;
    let frame = 0;

    function measure() {
      frame = 0;
      if (!steps.length) return;

      // Use a fixed viewport line, not pointer hit-testing or animated card content.
      // The incoming card takes over when it covers half of the visible sticky card.
      const stickyTop = Number.parseFloat(getComputedStyle(steps[0]).top) || 0;
      const rects = cards.map((card) => card.getBoundingClientRect());
      for (let index = 0; index < steps.length; index++) {
        const covered = rects.slice(index + 1).some((front) =>
          front.top <= rects[index].top + .5 && front.bottom >= rects[index].bottom - .5
        );
        // Sticky cards remain in the viewport even after they are fully covered.
        // Tell their players to stop decoding frames that cannot be seen.
        if (covered && steps[index].dataset.covered !== "true") steps[index].dataset.covered = "true";
        else if (!covered && steps[index].dataset.covered) delete steps[index].dataset.covered;
      }
      const visibleHeight = Math.max(0, Math.min(rects[0].height, window.innerHeight - stickyTop));
      const line = stickyTop + visibleHeight / 2;
      const buffer = 16;
      let next = highlighted;

      // Separate entry/exit thresholds keep tiny scroll reversals from oscillating.
      while (next + 1 < cards.length && rects[next + 1].top <= line - buffer) next++;
      while (next >= 0 && rects[next].top > line + buffer) next--;
      if (next >= 0 && rects[next].bottom <= stickyTop) next = -1;
      if (next === highlighted) return;

      // Only two attributes change at a handoff; scrolling does not re-render videos.
      if (highlighted >= 0) delete steps[highlighted].dataset.highlighted;
      if (next >= 0) steps[next].dataset.highlighted = "true";
      highlighted = next;
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(measure);
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    cards.forEach((card) => observer.observe(card));
    schedule();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      steps.forEach((step) => {
        delete step.dataset.highlighted;
        delete step.dataset.covered;
      });
    };
  }, []);

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <header className="projects-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title">Projects</h2>
        </div>
        <p className="projects-instruction">Scroll to explore · Select a project to open</p>
      </header>
      <div className="project-stack" ref={stackRef}>
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} onOpen={() => setActiveProject(project)} />
        ))}
      </div>
      {activeProject ? <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} /> : null}
    </section>
  );
}
