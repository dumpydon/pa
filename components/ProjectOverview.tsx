import type { Project } from "@/data/projects";
import Image from "next/image";
import { Code, External } from "./Icons";
import { ProjectVideo } from "./ProjectVideo";

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <div className="project-overview-view" data-project={project.slug} role="tabpanel" id={`${project.slug}-overview-panel`} aria-labelledby={`${project.slug}-overview-tab`}>
      <div className="modal-preview">
        {project.media.videoSrc ? <ProjectVideo media={project.media} /> : <Image
          className={project.media.fit === "contain" ? "image-cover image-contain" : "image-cover"}
          src={project.media.src}
          alt={project.media.alt}
          width={project.media.width ?? 1600}
          height={project.media.height ?? 1000}
          loading="eager"
          sizes="(max-width: 900px) 94vw, 65vw"
          style={project.media.fit === "contain"
            ? { objectPosition: project.media.position }
            : project.slug === "tracelens"
            ? { objectPosition: project.media.position, width: "100%", height: "100%", inset: 0, transformOrigin: "left center" }
            : { objectPosition: project.media.position, width: "102.5%", height: "102.5%", maxWidth: "none", inset: "-1.25%" }}
        />}
        <span className="modal-image-shade" />
      </div>
      <div className="modal-copy">
        <div>
          <p className="project-meta modal-kicker">{project.category}</p>
          <h2 className={project.iconSrc ? "project-title-with-icon" : undefined}>
            {project.iconSrc ? <Image className="project-title-icon" src={project.iconSrc} alt="" aria-hidden="true" width={64} height={64} /> : null}
            {project.title}
          </h2>
          <p className="modal-description">{project.description}</p>
        </div>
        <div className="modal-tags" aria-label="Technologies used">
          {project.technologies.map((technology) => <span className="tech-badge" key={technology}><span className="tech-dot" />{technology}</span>)}
        </div>
        <div className="modal-actions">
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer"><External />View live</a> : null}
          <a href={project.repositoryUrl} target="_blank" rel="noreferrer"><Code />View code</a>
        </div>
      </div>
    </div>
  );
}
