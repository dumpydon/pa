"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import type { Project } from "@/data/projects";
import { BehindTheBuild } from "./BehindTheBuild";
import { Close } from "./Icons";
import { ProjectOverview } from "./ProjectOverview";

type Tab = "overview" | "build";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closingRef = useRef(false);
  const [tab, setTab] = useState<Tab>("overview");
  const [closing, setClosing] = useState(false);

  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    window.setTimeout(onClose, 170);
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previous = document.activeElement as HTMLElement | null;
    dialog.showModal();
    document.body.classList.add("modal-open");
    return () => {
      if (dialog.open) dialog.close();
      document.body.classList.remove("modal-open");
      previous?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      requestClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [requestClose]);

  function onTabsKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const next: Tab = tab === "overview" ? "build" : "overview";
    setTab(next);
    document.getElementById(`${project.slug}-${next}-tab`)?.focus();
  }

  const style = { "--card-accent": project.accent } as CSSProperties;

  return (
    <dialog
      ref={dialogRef}
      className={`project-dialog${closing ? " is-closing" : ""}`}
      aria-labelledby={`${project.slug}-modal-title`}
      onCancel={(event) => { event.preventDefault(); requestClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) requestClose(); }}
    >
      <article className="project-modal" style={style}>
        <h2 className="sr-only" id={`${project.slug}-modal-title`}>{project.title}</h2>
        <button className="modal-close" type="button" onClick={requestClose} aria-label={`Close ${project.title} details`}><Close /></button>
        <div className="project-modal-tabs">
          <div className="project-mode-switch" role="tablist" aria-label={`${project.title} project details`} onKeyDown={onTabsKeyDown}>
            <button
              id={`${project.slug}-overview-tab`}
              type="button"
              role="tab"
              aria-selected={tab === "overview"}
              aria-controls={`${project.slug}-overview-panel`}
              tabIndex={tab === "overview" ? 0 : -1}
              className={tab === "overview" ? "is-active" : ""}
              onClick={() => setTab("overview")}
            >Overview</button>
            <button
              id={`${project.slug}-build-tab`}
              type="button"
              role="tab"
              aria-selected={tab === "build"}
              aria-controls={`${project.slug}-build-panel`}
              tabIndex={tab === "build" ? 0 : -1}
              className={tab === "build" ? "is-active" : ""}
              onClick={() => setTab("build")}
            >Behind the Build</button>
          </div>
          {tab === "overview" ? <ProjectOverview project={project} /> : <BehindTheBuild project={project} />}
        </div>
      </article>
    </dialog>
  );
}
