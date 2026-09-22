"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";

export function ProjectVideo({ media, decorative = false }: { media: Project["media"]; decorative?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !media.videoSrc) return;

    const source = media.videoSrc;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let nearby = false;
    let disposed = false;

    function updatePlayback() {
      if (!video) return;
      const behindModal = document.body.classList.contains("modal-open") && !video.closest("dialog[open]");
      if (!nearby || reducedMotion.matches || document.hidden || behindModal) {
        video.pause();
        if (reducedMotion.matches) delete video.dataset.playing;
        return;
      }

      // Defer the video request until its card approaches the viewport.
      if (!video.getAttribute("src")) video.src = source;
      video.muted = true;
      void video.play().catch(() => {
        // Autoplay can be blocked by a device's power/data policy; retain the poster.
        if (!disposed) delete video.dataset.playing;
      });
    }

    const observer = new IntersectionObserver(([entry]) => {
      nearby = entry.isIntersecting;
      updatePlayback();
    }, { rootMargin: "240px 0px", threshold: 0 });
    observer.observe(video);

    const modalObserver = new MutationObserver(updatePlayback);
    modalObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    reducedMotion.addEventListener("change", updatePlayback);
    document.addEventListener("visibilitychange", updatePlayback);

    return () => {
      disposed = true;
      observer.disconnect();
      modalObserver.disconnect();
      reducedMotion.removeEventListener("change", updatePlayback);
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [media.videoSrc]);

  return (
    <>
      <Image
        className="image-cover"
        src={media.src}
        alt={decorative ? "" : media.alt}
        width={1600}
        height={1178}
        sizes="(max-width: 900px) 100vw, 65vw"
        loading={decorative ? "lazy" : "eager"}
        style={{ objectPosition: media.position }}
      />
      <video
        ref={videoRef}
        className="image-cover project-video"
        width={1600}
        height={1178}
        poster={media.src}
        preload="none"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        tabIndex={-1}
        aria-hidden="true"
        style={{ objectPosition: media.position }}
        onPlaying={(event) => { event.currentTarget.dataset.playing = "true"; }}
        onError={(event) => { delete event.currentTarget.dataset.playing; }}
      />
    </>
  );
}
