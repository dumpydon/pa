import type { CSSProperties, MouseEventHandler } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "./Icons";

type Props = {
  project: Project;
  index: number;
  onOpen: MouseEventHandler<HTMLButtonElement>;
};

export function ProjectCard({ project, index, onOpen }: Props) {
  const style = { "--card-accent": project.accent, zIndex: index + 1 } as CSSProperties;

  return (
    <div className="project-step" style={{ zIndex: index + 1 }}>
      <button
        className="project-card"
        type="button"
        aria-haspopup="dialog"
        onClick={onOpen}
        style={style}
        data-project={project.slug}
      >
        <span className="project-layout">
          <span className="project-visual">
            {/* The media is owned by Piyush's project repositories or captured from their live demos. */}
            <Image
              className="image-cover"
              src={project.media.src}
              alt=""
              width={1600}
              height={1000}
              sizes="(max-width: 900px) 100vw, 62vw"
              loading={index === 0 ? "eager" : "lazy"}
              style={project.slug === "tracelens"
                ? { objectPosition: project.media.position, width: "100%", height: "100%", inset: 0, transformOrigin: "left center" }
                : { objectPosition: project.media.position, width: "102.5%", height: "102.5%", maxWidth: "none", inset: "-1.25%" }}
            />
            <span className="project-visual-shade" />
            <span className="project-image-index" aria-hidden="true">{project.number}</span>
          </span>
          <span className="project-copy">
            <span className="project-header">
              <span className="project-meta">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </span>
              <span className="project-title">{project.title}</span>
              <span className="project-description">{project.description}</span>
            </span>
            <span className="project-footer">
              <span className="tech-list" aria-label="Technologies used">
                {project.technologies.map((technology) => (
                  <span className="tech-badge" key={technology}>
                    <span className="tech-dot" aria-hidden="true" />
                    {technology}
                  </span>
                ))}
              </span>
              <span className="project-open" aria-hidden="true"><ArrowUpRight /></span>
            </span>
          </span>
        </span>
      </button>
    </div>
  );
}
