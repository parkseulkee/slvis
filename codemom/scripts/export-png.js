#!/usr/bin/env node
// Usage: node scripts/export-png.js posts/post-NN-<slug>
// Renders every NN-*.html in the given post directory to 2160x2700 PNG (2x of 1080x1350).

const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const arg = process.argv[2];
if (!arg) {
  console.error("Usage: node scripts/export-png.js <post-dir>");
  console.error("  e.g. node scripts/export-png.js posts/post-01-capcut");
  process.exit(1);
}

const postDir = path.resolve(arg);
if (!fs.existsSync(postDir)) {
  console.error(`Post directory not found: ${postDir}`);
  process.exit(1);
}

const slides = fs
  .readdirSync(postDir)
  .filter((f) => /^\d{2}-.*\.html$/.test(f))
  .sort();

if (slides.length === 0) {
  console.error(`No slide HTMLs matching /^\\d{2}-.*\\.html$/ in ${postDir}`);
  process.exit(1);
}

const outDir = path.join(postDir, "exports", "png");
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });

  for (const f of slides) {
    const url = "file://" + path.join(postDir, f);
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);
    const slide = await page.$(".slide");
    if (!slide) {
      console.warn(`⚠ ${f}: no .slide element, skipping`);
      continue;
    }
    const out = path.join(outDir, f.replace(".html", ".png"));
    await slide.screenshot({ path: out, omitBackground: false });
    console.log("✓", path.relative(process.cwd(), out));
  }
  await browser.close();
})();
