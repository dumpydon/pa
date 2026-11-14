# WoiseX100 portfolio card

WoiseX100 is project 10, immediately after Cue and last in the stack. It reuses
the existing card, overview, build-insight tabs, external shortcut, and cached
glow system. No other project record or scroll/playback behavior changes.

## Sources

- Live app: https://voice100x.dumpydon.workers.dev/
- Repository: https://github.com/dumpydon/WoiseX100
- Inspected source commit: `d5acbe8022f908179213fab010c48870552e1792`
- Product behavior and limitations:
  https://github.com/dumpydon/WoiseX100/blob/d5acbe8022f908179213fab010c48870552e1792/README.md
- Exact brand colors and icon enclosure:
  https://github.com/dumpydon/WoiseX100/blob/d5acbe8022f908179213fab010c48870552e1792/src/styles.css
- Speech gateway, caching, and accounting:
  https://github.com/dumpydon/WoiseX100/blob/d5acbe8022f908179213fab010c48870552e1792/docs/speech-playback.md
- Documented testing scope, not a new reliability claim:
  https://github.com/dumpydon/WoiseX100/blob/d5acbe8022f908179213fab010c48870552e1792/docs/hosted-verification.md

The accent is the live site's `--accent: #ff506e`, also verified in its computed
CSS. Light-mode title/kicker contrast follows the existing theme treatment;
the source accent and glow hue stay the same.

## Media and links

- `public/projects/woisex100/logo.png` is the original, unaltered W/X artwork
  from `public/woisex100-logo.png` at the pinned commit. Git blob:
  `c4e5efede69d7262079ff20b4d08bf52f238a496`.
- `public/projects/woisex100/interface.webp` is a lossless WebP of a real
  1280 × 720 browser capture of the deployed app on 14 November 2026. It shows
  the actual welcome screen, voice and thinking-effort controls, sample prompts,
  and speech-provider settings. It contains no generated answers or private
  profile data; no microphone permission was granted or recording started.
- The inspected repository has no published launch video or GIF and no release
  assets. The card therefore uses an authentic interface capture, not invented
  footage or a misleading launch-film control.
- The app is browser-based, not a macOS download. Its shortcut is "Try the live app"
  and opens the live app in a new tab. The overview also links to the repository.
- `public/glows/ff506e-dark.png` and `public/glows/ff506e-light.png` are generated
  by the existing shared glow script. They preserve the established compositor
  and fade geometry.

Copy distinguishes temporary in-tab conversation state from server-side audio
caching and usage records. Profile grounding configures model instructions and
context; it is not a fine-tuning claim. Future-work bullets are recommendations,
not implemented product features. No private source/profile file is included.

## Verification

- Production build and TypeScript check pass. ESLint reports only the two
  pre-existing unused-disable warnings in `cloudflare-env.d.ts`.
- All nine earlier project records compare equal to the previous Git version.
- Desktop dark/light views, title containment at 320px and 768px CSS widths,
  the overview links, and keyboard navigation of both detail tabs were checked.
- The logo's Git blob matches upstream; the interface WebP preserves every
  pixel of the browser capture. All four new media/glow files serve locally.
- This verifies the portfolio integration, not live microphone compatibility or
  model-answer quality. No paid speech request or microphone capture was used.
