# Glee portfolio card

Glee is project 08, after Vigil. Its `#B3ED63` accent comes from the published
download page's `--acc` token. The existing macOS badge, download-site shortcut,
technology chips, modal tabs, and shared card/glow styles are reused.

## Verified sources

- Download page: https://glee.dumpydon.workers.dev/
- Repository: https://github.com/dumpydon/glee
- Source commit: `73527dce19fd149c3521477b0ca31700d197f3e0`
- App features and origin:
  https://github.com/dumpydon/glee/blob/73527dce19fd149c3521477b0ca31700d197f3e0/README.md
- Runtime scope:
  https://github.com/dumpydon/glee/blob/73527dce19fd149c3521477b0ca31700d197f3e0/docs/VERIFICATION.md

The card does not claim that Glee monitors/restarts agents, that optional
closed-lid mode works without setup, or that the current release is notarized.
The build notes acknowledge the WakeBee open-source baseline.

## Assets copied without re-encoding

- `public/projects/glee/launch-film.mp4`: the complete published launch film,
  19 seconds, 1920 × 1080, 60 FPS, H.264 + stereo 48 kHz AAC, 7,894,074 bytes.
  Git blob: `d147f08ba8edf5975f0dfa47c1e6c478ef7d6203`.
  SHA-256: `facd89a7e49ba1aeed09cbd916d0726e108b7c4988e067f7776741283493e625`.
- `public/projects/glee/launch-poster.jpg`: the original published poster,
  blob `ad3f23fd9809ecde7b6aa8960d1adea71af38926`.
- `public/projects/glee/app-icon.png`: the original 256 px transparent branding
  thumbnail, blob `7789ccca87e9b60acd3806d4c7c87413768d3123`.

Original asset paths: `docs/media/glee-launch.mp4`,
`docs/media/glee-launch-poster.jpg`, and `docs/branding/thumbnail-256.png` in Glee.
Copyright © 2026 dumpydon. Glee's source/assets retain their
[AGPL-3.0-only license](https://github.com/dumpydon/glee/blob/73527dce19fd149c3521477b0ca31700d197f3e0/LICENSE).

The launch player starts muted, preserves the original soundtrack, and provides
keyboard-accessible play/pause, restart, sound, and full-screen controls. It
pauses offscreen, in background tabs, and behind a project modal; reduced-motion
visitors opt into playback with the play button. Other project videos continue
to use the unchanged decorative `ProjectVideo` component.

On each fresh appearance, the film restarts from the beginning and is muted,
even if the viewer enabled sound or paused/finished the previous preview.
Sound is enabled only by the viewer's sound button. During the same appearance,
manual pause and the chosen sound state are preserved. Viewport hysteresis
(25% visible to enter, 10% or less to leave) avoids restarts from tiny scrolls
near the edge. Reduced-motion preferences and blocked-autoplay policies still
take precedence; the play button remains available.
