// Bake the previous Gaussian fade and fine dither into small, reusable images.
// No SVG filter, blur, or mask is applied to a scrolling card at runtime.
import { mkdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectSource = await readFile(new URL("../data/projects.ts", import.meta.url), "utf8");
const colors = [...new Set([...projectSource.matchAll(/^\s+accent: "#([\da-f]{6})"/gim)].map((match) => match[1].toLowerCase()))];
const directory = new URL("../public/glows/", import.meta.url);
await mkdir(directory, { recursive: true });

// Match the 192px outset and 320px slices in globals.css. Each edge includes
// 128px of transparent card interior, so only the outer halo is ever painted.
const size = 832;
const outset = 192;
const slice = 320;
const radius = 25.6;
const spread = 7.92;
const shape = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="100%" height="100%" fill="black"/><rect x="${outset - spread}" y="${outset - spread}" width="${size - 2 * (outset - spread)}" height="${size - 2 * (outset - spread)}" rx="${radius}" fill="white"/></svg>`);

function insideCard(x, y) {
  const qx = Math.abs(x - size / 2) - (size / 2 - outset - radius);
  const qy = Math.abs(y - size / 2) - (size / 2 - outset - radius);
  const distance = Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - radius;
  return Math.max(0, Math.min(1, .5 - distance));
}

for (const [theme, sigma, noise] of [["light", 58.08, .24], ["dark", 44.88, .08]]) {
  // Sharp ships with Next.js; this generator is only needed when accents change.
  const alpha = await sharp(shape).greyscale().removeAlpha().blur(sigma).raw().toBuffer();
  const opacity = new Uint8Array(size * size);
  let seed = 17;
  function random() {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  }
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Straight edges are constant along the slice, including their joining
      // pixel. Stretching the middle cannot introduce horizontal/vertical seams.
      const sampleX = x >= slice && x < size - slice ? slice - 1 : x;
      const sampleY = y >= slice && y < size - slice ? slice - 1 : y;
      const a = alpha[sampleY * size + sampleX] / 255;
      const grain = (random() + random() + random() + random()) / 4 - .5;
      const noisy = (1 - noise / 2) * a + noise * Math.pow(a, .25) * grain;
      // Fade the final few pixels to exact transparency; no rectangular edge.
      const edgeDistance = Math.min(x, y, size - x - 1, size - y - 1);
      const t = Math.min(1, edgeDistance / 24);
      const edgeFade = t * t * (3 - 2 * t);
      opacity[y * size + x] = Math.round(255 * Math.max(0, Math.min(1, noisy)) * (1 - insideCard(x + .5, y + .5)) * edgeFade);
    }
  }
  for (const color of colors) {
    const rgb = [0, 2, 4].map((offset) => Number.parseInt(color.slice(offset, offset + 2), 16));
    const pixels = Buffer.alloc(size * size * 4);
    for (let i = 0; i < opacity.length; i++) {
      if (!opacity[i]) continue;
      pixels.set(rgb, i * 4);
      pixels[i * 4 + 3] = opacity[i];
    }
    const output = new URL(`${color}-${theme}.png`, directory);
    await sharp(pixels, { raw: { width: size, height: size, channels: 4 } }).png({ compressionLevel: 9 }).toFile(fileURLToPath(output));
  }
}
console.log(`Generated ${colors.length * 2} cached glow images for ${colors.length} project accents.`);
