# Cue portfolio card

Cue is project 09, directly after Glee. The blue accent (`#4D96FF`) is the
download site's `--acc` token. The card reuses the existing macOS badge,
download-site shortcut, interactive launch-film player, modal tabs, and stable
stack rendering. The other eight project records are unchanged.

## Sources

- Download website: https://cue.dumpydon.workers.dev/
- Repository: https://github.com/dumpydon/cue
- Inspected source commit: `a3a5e3ffc182179a8deee6e19eb67122a63053ee`
- App behavior and preview status:
  https://github.com/dumpydon/cue/blob/a3a5e3ffc182179a8deee6e19eb67122a63053ee/README.md
- Film timeline, illustration scope, and original assets:
  https://github.com/dumpydon/cue/blob/a3a5e3ffc182179a8deee6e19eb67122a63053ee/site/film-src/README.md
- Media integrity metadata:
  https://github.com/dumpydon/cue/blob/a3a5e3ffc182179a8deee6e19eb67122a63053ee/site/film.json
- Speaker-labelled answer evidence:
  https://github.com/dumpydon/cue/blob/a3a5e3ffc182179a8deee6e19eb67122a63053ee/src/response-context.js
- Audio lifecycle and source separation:
  https://github.com/dumpydon/cue/blob/a3a5e3ffc182179a8deee6e19eb67122a63053ee/docs/audio-activity.md

The copy describes the existing bring-your-own-provider Mac developer preview.
It does not claim guaranteed screen-share exclusion, Apple notarization, or that
local speech recognition makes cloud chat local. The future-work section is an
engineering recommendation based on the documented distribution/capture limits.

## Original assets

All three assets are copied from the pinned public commit without alteration:

- `public/projects/cue/launch-film.mp4`: complete 38-second film, 1920 × 1080,
  60 FPS, H.264 with 48 kHz stereo AAC audio, 8,676,728 bytes.
  Source: `site/public/media/cue-launch.mp4`.
  Git blob: `39416c1f1faf31eca13ce36f3e7292525b0ea365`.
  SHA-256: `a1554812224be760097f22390f9fbe9819b4182778162c8ec853885bdc6f7d4f`.
- `public/projects/cue/launch-poster.jpg`: original launch poster.
  Source: `site/public/media/cue-launch-poster.jpg`.
  Git blob: `b50424535950a1757eaadf9e26816312bc0d8ded`.
- `public/projects/cue/app-icon.svg`: original app icon, also used by the download page.
  Source: `site/public/assets/cue-app.svg`.
  Git blob: `7b24b7eb017cdc536600bb47dd76feb0bd6fbaf8`.

The film illustrates Cue using synthetic scenes; it is not a recording of a
private meeting. It retains its entire original frame and soundtrack. The
existing player starts/restarts muted on appearance and offers explicit sound,
play/pause, restart, and fullscreen controls. The download shortcut opens the
website, where visitors choose the appropriate Mac download.

The shared glow generator supplies `public/glows/4d96ff-dark.png` and
`public/glows/4d96ff-light.png`; it retains the existing stable glow implementation.

Cue source and original assets remain under their upstream
[GPL-3.0-or-later license](https://github.com/dumpydon/cue/blob/a3a5e3ffc182179a8deee6e19eb67122a63053ee/LICENSE).
