import type { CSSProperties, MouseEventHandler } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Apple, ArrowUpRight } from "./Icons";
import { ProjectVideo } from "./ProjectVideo";
import { ProjectFilm } from "./ProjectFilm";
import { projectGlowStyle } from "./projectGlow";

type Props = {
  project: Project;
  index: number;
  onOpen: MouseEventHandler<HTMLButtonElement>;
};

export function ProjectCard({ project, index, onOpen }: Props) {
  const style = { "--card-accent": project.accent } as CSSProperties;
  const stepStyle = { ...style, ...projectGlowStyle(project.accent), zIndex: index + 1 };

  const footer = (
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
  );

  const content = (
    <span className="project-layout">
      <span className={project.media.film ? "project-visual project-visual-with-film" : "project-visual"}>
        {/* The media is owned by Piyush's project repositories or captured from their live demos. */}
        {project.media.film ? <ProjectFilm project={project} /> : project.media.videoSrc ? <ProjectVideo media={project.media} decorative /> : <Image
          className={project.media.fit === "contain" ? "image-cover image-contain" : "image-cover"}
          src={project.media.src}
          alt=""
          width={project.media.width ?? 1600}
          height={project.media.height ?? 1000}
          sizes="(max-width: 900px) 100vw, 62vw"
          loading={index === 0 ? "eager" : "lazy"}
          style={project.media.fit === "contain"
            ? { objectPosition: project.media.position }
            : project.slug === "tracelens"
            ? { objectPosition: project.media.position, width: "100%", height: "100%", inset: 0, transformOrigin: "left center" }
            : { objectPosition: project.media.position, width: "102.5%", height: "102.5%", maxWidth: "none", inset: "-1.25%" }}
        />}
        {project.media.film ? null : <span className="project-visual-shade" />}
        <span className="project-image-index" aria-hidden="true">{project.number}</span>
      </span>
      <span className="project-copy">
        <span className="project-header">
          <span className="project-meta">
            <span>{project.number}</span>
            <span>{project.category}</span>
          </span>
          <span className={project.iconSrc ? "project-title project-title-with-icon" : "project-title"}>
            {project.iconSrc ? <Image className="project-title-icon" src={project.iconSrc} alt="" aria-hidden="true" width={64} height={64} /> : null}
            {project.title}
            {project.platform === "macOS" ? <span className="project-platform-badge"><Apple /><span>macOS</span></span> : null}
          </span>
          <span className="project-description">{project.description}</span>
        </span>
        {project.cardLink ? (
          <span className="project-footer-group">
            <a className="project-quick-link" href={project.cardLink.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.cardLink.label} for ${project.title} (opens in a new tab)`}>
              <span>{project.cardLink.label}</span><ArrowUpRight />
            </a>
            {footer}
          </span>
        ) : footer}
      </span>
    </span>
  );

  return (
    <div className="project-step" style={stepStyle}>
      {project.cardLink ? (
        <article className="project-card project-card-with-link" style={style} data-project={project.slug} aria-label={project.title}>
          <button className="project-details-trigger" type="button" aria-haspopup="dialog" aria-label={`Open ${project.title} project details`} onClick={onOpen} />
          {content}
        </article>
      ) : (
        <button className="project-card" type="button" aria-haspopup="dialog" onClick={onOpen} style={style} data-project={project.slug}>
          {content}
        </button>
      )}
    </div>
  );
}
