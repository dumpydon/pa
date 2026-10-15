# Vigil portfolio media

The current card presents the public **Apply Vigil for Mac** app, while keeping
the existing Vigil nameplate, purple accent (`#A970FF`), and project position.
The download shortcut and overview action both open the public download site;
neither link points directly to a DMG.

## Sources

- Download site: https://vigil.dumpydon.workers.dev/
- Repository: https://github.com/dumpydon/vigil
- Verified source commit: `eeaac6261191796c4098d4b5ddae19f5aa8c2156`
- Published demo:
  https://github.com/dumpydon/vigil/blob/eeaac6261191796c4098d4b5ddae19f5aa8c2156/docs/images/apply-vigil-demo.gif
- Native architecture and distribution:
  https://github.com/dumpydon/vigil/blob/eeaac6261191796c4098d4b5ddae19f5aa8c2156/docs/macos.md
- Apple platform mark beside the card title: Simple Icons (CC0),
  https://github.com/simple-icons/simple-icons/blob/develop/icons/apple.svg

The locally available demo was verified against the published Git blob
`0a603cb3b79169e35c432ed9f092448bfeed13ed` before conversion. It uses demonstration
data and shows the menu bar, floating window, quick logging, and quiet alerts.
It is a published product preview, not a recording of a private owner workspace.

## Portfolio assets

- `public/projects/vigil/app-demo.mp4`: complete published demo converted to
  H.264 / yuv420p, 1920 × 1080, 30 FPS, CRF 18, fast-start MP4; approximately
  19.13 seconds and 1.73 MB. The original frame is retained without cropping.
- `public/projects/vigil/app-poster.webp`: frame at 10 seconds from the MP4,
  1920 × 1080, WebP quality 92; same framing as the video.
- `public/projects/vigil/mark.svg`: unchanged; matches the current published
  Vigil mark.

The existing `ProjectVideo` component supplies muted, inline, looping playback,
near-viewport loading, a poster fallback, and reduced-motion handling.
