import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const jobs = [
  {
    input: "src/assets/herodesktop2.png",
    outDir: "public/hero",
    name: "hero-desktop",
    widths: [800, 1200, 1672],
    formats: ["avif", "webp"],
  },
  {
    input: "src/assets/heromobile.png",
    outDir: "public/hero",
    name: "hero-mobile",
    widths: [480, 768, 1080],
    formats: ["avif", "webp"],
  },
  {
    input: "src/assets/history.png",
    outDir: "src/assets_optimized",
    name: "history",
    widths: [420, 840],
    formats: ["webp"],
  },
];

const encoders = {
  avif: { quality: 50, effort: 4 },
  webp: { quality: 75 },
};

for (const job of jobs) {
  await mkdir(job.outDir, { recursive: true });
  const { width: srcWidth } = await sharp(job.input).metadata();

  for (const w of job.widths) {
    const target = Math.min(w, srcWidth);
    if (target < w) {
      console.warn(
        `⚠ ${job.input} tem só ${srcWidth}px: ${job.name}-${w} sai com ${target}px`
      );
    }

    for (const fmt of job.formats) {
      const out = path.join(job.outDir, `${job.name}-${w}.${fmt}`);
      const info = await sharp(job.input)
        .resize({ width: target })
        .toFormat(fmt, encoders[fmt])
        .toFile(out);
      console.log(`${out}  ${(info.size / 1024).toFixed(0)} KB`);
    }
  }
}