import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import postcss, { type AnyNode } from "postcss";

test("mobile refinements cannot change desktop styles", async () => {
  const css = await readFile("app/mobile.css", "utf8");
  const root = postcss.parse(css);
  let count = 0;
  root.walkRules((rule) => {
    count++;
    let parent: AnyNode | undefined = rule.parent;
    while (parent && parent.type !== "atrule") parent = parent.parent;
    assert.ok(parent && parent.type === "atrule" && parent.name === "media");
    assert.match(parent.params, /\(max-width: 767px\)/);
  });
  assert.ok(count > 10);
  const layout = await readFile("app/layout.tsx", "utf8");
  assert.ok(layout.indexOf('import "./mobile.css"') > layout.indexOf('import "./globals.css"'));
});

test("phone navigation has stable layout hooks and a viewport-owned drawer", async () => {
  const source = await readFile("components/Navbar.tsx", "utf8");
  const css = await readFile("app/mobile.css", "utf8");
  for (const hook of ["lab-nav", "lab-nav-home", "lab-nav-disclosure", "lab-nav-drawer", "lab-nav-contact"]) {
    assert.ok(source.includes(hook));
  }
  assert.match(css, /\.lab-nav\s*\{[^}]*grid-template-columns:/);
  assert.match(css, /\.lab-nav-drawer\s*\{[^}]*position: fixed/);
});

test("mobile artwork and the held CTA have independent phone sizing", async () => {
  const hero = await readFile("components/sections/Hero.tsx", "utf8");
  const approach = await readFile("components/sections/ServiceIntroduction.tsx", "utf8");
  const css = await readFile("app/mobile.css", "utf8");
  assert.match(hero, /hero-liquid-left/);
  assert.match(approach, /approach-content-grid/);
  assert.equal((approach.match(/Bring a problem/g) ?? []).length, 1);
  assert.match(css, /\.hero-liquid-upper\s*\{[^}]*right: -/);
  assert.match(css, /\.approach-held-cta\s*\{[^}]*min-height: 2\.75rem/);
  assert.match(css, /\.approach-robot-crop\s*\{[^}]*width: 58%/);
});

test("phone forms use readable inputs, native caret, and named submit controls", async () => {
  const source = await readFile("components/sections/DiagnoserCTA.tsx", "utf8");
  const css = await readFile("app/mobile.css", "utf8");
  assert.match(source, /aria-label="Ask Kaelux"/);
  assert.match(source, /aria-label="Send message"/);
  assert.match(css, /\.intake-cursor\s*\{[^}]*display: none/);
  assert.match(css, /\.intake-input\s*\{[^}]*caret-color: white/);
  assert.match(css, /#contact input,[\s\S]*font-size: 1rem/);
});
