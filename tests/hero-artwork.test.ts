import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("hero preserves liquid artwork and restores controllable phrase rotation", async () => {
  const source = await readFile("components/sections/Hero.tsx", "utf8");
  for (const asset of ["liquid-flow-1.png", "liquid-flow-left-hq.png", "liquid-flow-3.png"]) {
    assert.match(source, new RegExp(asset.replaceAll(".", "\\.")));
  }
  const liquidImages = source.match(/<Image src="\/images\/decorative\/liquid-flow[\s\S]*?\/>/g) ?? [];
  assert.equal(liquidImages.length, 3);
  assert.doesNotMatch(liquidImages.join("\n"), /opacity-(?:30|35|40)/);
  assert.doesNotMatch(source, />Kaelux<|via-black\/40/);
  assert.match(source, /AnimatePresence initial=\{false\} mode="wait"/);
  assert.match(source, /if \(paused \|\| reducedMotion\) return/);
  assert.match(source, /clearInterval\(timer\)/);
  assert.match(source, /Pause description rotation/);
  assert.match(source, /hero-star-shimmer/);
});

test("the approach background has a single aspect-aware layer without negative bottom extensions", async () => {
  const source = await readFile("app/page.tsx", "utf8");
  const css = await readFile("app/globals.css", "utf8");
  assert.equal((source.match(/Same_background_but_202604212151\.jpg/g) ?? []).length, 1);
  assert.match(source, /lab-intro-artwork/);
  assert.match(source, /lab-approach-stage/);
  assert.doesNotMatch(source, /-bottom-56|-bottom-72|-bottom-\[22rem\]/);
  assert.match(css, /aspect-ratio: 2752 \/ 2168/);
  assert.match(css, /min-height: 78\.779vw/);
});

test("approach artwork stays below the hero instead of overlapping its liquids", async () => {
  const css = await readFile("app/globals.css", "utf8");
  const layers = css.match(/\.lab-approach-art\s*\{[^}]+\}/g) ?? [];
  assert.equal(layers.length, 2);
  assert.match(layers[0], /top: 0/);
  for (const layer of layers) assert.doesNotMatch(layer, /top:\s*-|100% \+ 6rem/);
  assert.match(css, /min-height: min\(50rem,/);
  assert.match(css, /padding: 7rem 0 7rem/);
});

test("robot and tilted CTA share a single composition with one accessible link", async () => {
  const source = await readFile("components/sections/ServiceIntroduction.tsx", "utf8");
  const css = await readFile("app/globals.css", "utf8");
  assert.equal((source.match(/Bring a problem/g) ?? []).length, 1);
  assert.match(source, /<div className="approach-handoff">[\s\S]*approach-held-cta[\s\S]*approach-robot-crop/);
  assert.match(css, /approach-held-cta[^}]*rotate\(8deg\)/);
  assert.match(css, /approach-robot-crop[^}]*pointer-events: none/);
  assert.match(css, /approach-robot-image[^}]*max-width: none/);
});

test("corner artwork uses its real aspect ratio and a visible-pixel clearance", async () => {
  const source = await readFile("components/sections/Hero.tsx", "utf8");
  const css = await readFile("app/globals.css", "utf8");
  const png = await readFile("public/images/decorative/liquid-flow-1.png");
  assert.equal(png.readUInt32BE(16), 571);
  assert.equal(png.readUInt32BE(20), 1024);
  assert.match(source, /src="\/images\/decorative\/liquid-flow-1\.png"[^>]*width=\{571\} height=\{1024\}/);
  assert.match(source, /hero-liquid-upper/);
  assert.match(css, /--hero-liquid-gap: 6rem/);
  assert.match(css, /top: min\(-6rem, calc\(100%[^;]*var\(--hero-liquid-gap\)/);
});

test("readability shading belongs to the continuous artwork, not a section rectangle", async () => {
  const css = await readFile("app/globals.css", "utf8");
  assert.doesNotMatch(css, /#approach::before/);
  assert.match(css, /\.lab-approach-art::after\s*\{[^}]*pointer-events: none/);
});
