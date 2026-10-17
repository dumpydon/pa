"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { Fullscreen, Pause, Play, Replay, Volume } from "./Icons";
import styles from "./ProjectFilm.module.css";

type WebKitVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

/** An interactive launch film, separate from the existing decorative card videos. */
export function ProjectFilm({ project }: { project: Project }) {
  const { media, title, iconSrc } = project;
  const playerRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByUser = useRef(false);
  const automaticPlayback = useRef(false);
  const id = useId();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const player = playerRef.current;
    const video = videoRef.current;
    if (!player || !video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const step = player.closest<HTMLElement>(".project-step");
    let visible = false;
    let wasAvailable = false;
    let disposed = false;

    function available() {
      return !document.hidden && visible && step?.dataset.covered !== "true" &&
        (!document.body.classList.contains("modal-open") || Boolean(player?.closest("dialog[open]")));
    }

    function refresh() {
      if (!video) return;
      const isAvailable = available();
      const entering = isAvailable && !wasAvailable;
      wasAvailable = isAvailable;

      if (!isAvailable) {
        video.pause();
        // Never leave a hidden card or background tab playing audible sound.
        video.muted = true;
        return;
      }

      if (entering) {
        // Every fresh appearance is a new silent preview, including after the film ends.
        // A manual pause still lasts for the remainder of the current appearance.
        pausedByUser.current = false;
        automaticPlayback.current = true;
        video.muted = true;
        video.currentTime = 0;
      }

      if (motion.matches && automaticPlayback.current) {
        video.pause();
        return;
      }
      if (motion.matches || pausedByUser.current || video.ended || video.error || !video.paused) return;
      automaticPlayback.current = true;
      video.muted = true;
      void video.play().then(() => {
        if (disposed || !available()) video.pause();
      }).catch(() => {
        // A blocked autoplay is not an error: the explicit play control remains usable.
      });
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= .25) visible = true;
      else if (entry.intersectionRatio <= .1) visible = false;
      refresh();
    }, { threshold: [0, .1, .25] });
    observer.observe(player);

    const modalObserver = new MutationObserver(refresh);
    modalObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    if (step) modalObserver.observe(step, { attributes: true, attributeFilter: ["data-covered"] });
    const syncFullscreen = () => setFullscreen(document.fullscreenElement === player);
    document.addEventListener("fullscreenchange", syncFullscreen);
    document.addEventListener("visibilitychange", refresh);
    motion.addEventListener("change", refresh);

    // Keep native controls as the no-JavaScript fallback; enhance after hydration.
    video.controls = false;
    player.dataset.enhanced = "true";

    return () => {
      disposed = true;
      observer.disconnect();
      modalObserver.disconnect();
      document.removeEventListener("fullscreenchange", syncFullscreen);
      document.removeEventListener("visibilitychange", refresh);
      motion.removeEventListener("change", refresh);
      video.pause();
      video.muted = true;
    };
  }, [media.videoSrc]);

  async function play(fromStart = false) {
    const video = videoRef.current;
    if (!video) return;
    pausedByUser.current = false;
    automaticPlayback.current = false;
    setMessage(null);
    if (fromStart || video.ended) video.currentTime = 0;
    try {
      await video.play();
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setMessage("Playback couldn’t start. Try play again, or open the film directly.");
    }
  }

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused && !video.ended) {
      pausedByUser.current = true;
      video.pause();
    } else {
      void play();
    }
  }

  async function toggleFullscreen() {
    const player = playerRef.current;
    const video = videoRef.current as WebKitVideo | null;
    if (!player || !video) return;
    try {
      if (document.fullscreenElement === player) await document.exitFullscreen();
      else if (player.requestFullscreen) await player.requestFullscreen();
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
      else setMessage("Full screen is unavailable here. You can open the film directly.");
    } catch {
      setMessage("Full screen is unavailable here. You can open the film directly.");
    }
  }

  return (
    <span ref={playerRef} className={styles.shell} role="group" aria-label={`${title} launch film player`}>
      <span className={styles.heading}>
        {iconSrc ? <Image src={iconSrc} alt="" width={24} height={24} /> : null}
        <strong>{title}</strong>
        <span>Launch film</span>
        <span className={styles.duration}>{media.film?.duration}</span>
      </span>
      <span className={styles.stage}>
        <video
          ref={videoRef}
          id={`${id}-video`}
          src={media.videoSrc}
          poster={media.src}
          width={media.width}
          height={media.height}
          preload="none"
          muted={muted}
          playsInline
          controls
          aria-label={`${title} launch film`}
          aria-describedby={`${id}-description`}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
          onError={() => setMessage("The film couldn’t load. Open the original film directly.")}
        >
          <a href={media.videoSrc}>Open the {title} launch film</a>
        </video>
        <span className={`${styles.controls} ${styles.tools}`}>
          <button type="button" aria-label={`${muted ? "Unmute" : "Mute"} ${title} launch film`} aria-controls={`${id}-video`} title={muted ? "Turn sound on" : "Mute sound"} onClick={() => { if (videoRef.current) videoRef.current.muted = !videoRef.current.muted; }}>
            <Volume muted={muted} />
          </button>
          <button type="button" aria-label={`${fullscreen ? "Exit full screen for" : "Show"} ${title} launch film${fullscreen ? "" : " full screen"}`} aria-controls={`${id}-video`} title={fullscreen ? "Exit full screen" : "Full screen"} onClick={() => void toggleFullscreen()}>
            <Fullscreen />
          </button>
        </span>
        <span className={`${styles.controls} ${styles.playback}`}>
          <button type="button" aria-label={`Restart ${title} launch film`} aria-controls={`${id}-video`} title="Replay from the beginning" onClick={() => void play(true)}><Replay /></button>
          <button type="button" aria-label={`${playing ? "Pause" : "Play"} ${title} launch film`} aria-controls={`${id}-video`} title={playing ? "Pause" : "Play"} onClick={togglePlayback}>{playing ? <Pause /> : <Play />}</button>
        </span>
      </span>
      <span className={styles.note}>{media.film?.note}</span>
      <span className="sr-only" id={`${id}-description`}>{media.alt}. Sound is muted initially; use the sound button to listen to the original soundtrack.</span>
      {message ? <span className={styles.message} role="status">{message} <a href={media.videoSrc} target="_blank" rel="noopener noreferrer">Open film ↗</a></span> : null}
    </span>
  );
}
