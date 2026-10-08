import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { useReducedMotion } from "../lib/use-reduced-motion";

test("motion preference renders a stable server snapshot without browser APIs", () => {
  function Probe() {
    return createElement("span", null, String(useReducedMotion()));
  }
  assert.equal(renderToString(createElement(Probe)), "<span>false</span>");
});

test("rendered motion components use the hydration-safe preference hook", async () => {
  for (const path of [
    "components/Navbar.tsx",
    "components/sections/Supporters.tsx",
    "components/sections/DiagnoserCTA.tsx",
    "components/sections/Contact.tsx",
    "components/sections/Projects.tsx",
    "components/ui/ScrollUnderline.tsx",
  ]) {
    const source = await readFile(path, "utf8");
    assert.match(source, /import \{ useReducedMotion \} from "@\/lib\/use-reduced-motion"/);
    assert.doesNotMatch(source, /import \{[^}]*useReducedMotion[^}]*\} from "framer-motion"/);
  }
});

test("project cards reveal individually instead of waiting for a tall grid", async () => {
  const source = await readFile("components/sections/Projects.tsx", "utf8");
  assert.match(source, /<motion\.article\s+initial="initial"\s+whileInView="animate"/);
  assert.doesNotMatch(source, /staggerContainer/);
  assert.match(source, /whileHover=\{reducedMotion \? undefined/);
});
