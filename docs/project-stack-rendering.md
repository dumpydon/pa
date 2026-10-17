# Project stack rendering

Each sticky `.project-step` is one stable compositing group. Its opaque,
paint-contained `.project-card` is at local layer 1. The layout supplies a
second opaque backing; videos, text, and controls stay inside that card.
Only the steps carry the increasing stack order.

The ambient glow is an image with a transparent center, painted outside the
card using a nine-slice border. The tighter glow is a box shadow. Neither layer
uses a live DOM blur, SVG filter graph, negative stacking order, or solid accent
fill behind the entire card. The accent colors, Gaussian fade distances, and
theme-specific opacity are derived from the existing glow design.

Glow images are generated from the accents in `data/projects.ts`:

```sh
node scripts/generate-project-glows.mjs
```

Run this when adding or changing an accent, then include the generated
`public/glows/` files. It uses Sharp, which is already installed with Next.js.
The PNGs retain fine deterministic dithering and fade to zero alpha at their
outer edge. Their interiors are transparent even if a card surface is briefly
not painted. Keep the 192px outset / 320px slicing geometry in sync between the
generator and `app/globals.css`.

Highlight ownership follows the scroll position with a 16px entry/exit buffer.
Only a handoff changes the highlight attributes, so a stationary mouse and
overlapping card hitboxes cannot repeatedly toggle the text and glow.

`data-covered` is set when a later card completely covers an earlier card.
Decorative video players pause while covered and retain their last frame;
partly visible cards continue playback. This avoids decoding several hidden
videos simply because sticky cards remain in the viewport. Launch films retain
their muted replay-on-reappearance behavior.
