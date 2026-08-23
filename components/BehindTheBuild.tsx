import type { Project } from "@/data/projects";
import { ArrowUpRight, Branch, Tool, Warning } from "./Icons";

const icons = { tool: Tool, branch: Branch, warning: Warning, arrow: ArrowUpRight };

export function BehindTheBuild({ project }: { project: Project }) {
  return (
    <div className="behind-build-panel" role="tabpanel" id={`${project.slug}-build-panel`} aria-labelledby={`${project.slug}-build-tab`}>
      <header className="behind-build-header">
        <div>
          <p className="modal-kicker eyebrow">Behind the Build / {project.category}</p>
          <h2>{project.title}</h2>
        </div>
        <p>The decisions, constraints, and next steps that shaped the work.</p>
      </header>
      <div className="behind-build-body">
        <div className="build-note-grid" data-testid="build-insight-grid">
          {project.behindTheBuild.map((insight) => {
            const Icon = icons[insight.icon];
            return (
              <article className="build-note" key={insight.number} data-testid="build-insight">
                <header>
                  <div className="build-note-meta"><Icon /><span>{insight.number}</span></div>
                  <h3>{insight.title}</h3>
                </header>
                <p>{insight.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
