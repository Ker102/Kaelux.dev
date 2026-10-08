import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path: string) => readFile(path, "utf8");

test("venture partner CTA routes to contact", async () => {
  const source = await read("data/engagements.ts");
  const block = source.match(/id: "venture-partners"[\s\S]*?\n    },/)?.[0] ?? "";
  assert.match(block, /href: "\/#contact"/);
});

test("hero uses the approved semantic copy and omits the venture inventory phrase", async () => {
  const source = await read("components/sections/Hero.tsx");
  assert.doesNotMatch(
    source,
    /MedAI, ViperMesh, Harneloop, PromptTriage, and Nullstate sit under the Kaelux group\./,
  );
  assert.match(source, /Let&apos;s solve real problems\./);
  assert.match(source, /src="\/hero-title-real-problems-chrome\.png"/);
  assert.match(source, /alt="" aria-hidden="true"/);
});

test("chat uses current Groq model and exposes validated lead submission", async () => {
  const source = await read("app/api/chat/route.ts");
  assert.match(source, /groq\("qwen\/qwen3\.6-27b"\)/);
  assert.doesNotMatch(source, /llama-3\.3-70b-versatile/);
  assert.match(source, /submitLead:\s*tool\(/);
  assert.match(source, /inputSchema:\s*intakeLeadSchema/);
  assert.match(source, /stepCountIs\(3\)/);
  assert.match(source, /reasoningEffort:\s*"none"/);
  assert.match(source, /parallelToolCalls:\s*false/);
});

test("both chat clients disclose conversational contact delivery", async () => {
  for (const path of [
    "components/sections/DiagnoserCTA.tsx",
    "components/diagnostic/DiagnosticChat.tsx",
  ]) {
    const source = await read(path);
    assert.match(source, /Contact details you share may be emailed to Kaelux for follow-up\./);
    assert.match(source, /getLeadSubmissionStatus/);
  }
});

test("standalone intake failures link to contact without logging lead details", async () => {
  const source = await read("components/diagnostic/DiagnosticChat.tsx");
  assert.match(source, /href="\/#contact"/);
  assert.doesNotMatch(source, /debug\.message|debug\.toolCall|debug\.toolResult/);
});

test("hero title uses the reduced approved footprint", async () => {
  const source = await read("components/sections/Hero.tsx");
  assert.match(source, /max-w-\[900px\]/);
  assert.doesNotMatch(source, /max-w-\[980px\]/);
});

test("ventures use the clean editorial modular system", async () => {
  const source = await read("components/sections/Projects.tsx");
  assert.match(source, /Different problems\./);
  assert.match(source, /Useful tools\./);
  assert.match(
    source,
    /lg:grid-cols-\[minmax\(0,0\.72fr\)_minmax\(0,1\.55fr\)\]/,
  );
  assert.match(source, /venture\.id === "medai"/);
  assert.doesNotMatch(source, /GlassSurface|ScrollUnderline/);
  assert.doesNotMatch(source, /bg-gradient|radial-gradient|blur-\[/);
  assert.doesNotMatch(source, /rounded-\[28px\]|rounded-full/);
  assert.doesNotMatch(
    source,
    /(?:text|border)-white\/(?:68|52|38|78|58|12)/,
    "venture hierarchy must use opacity utilities emitted by Tailwind",
  );
});

test("hero title bypasses lossy Next image optimization", async () => {
  const source = await read("components/sections/Hero.tsx");
  const titleImage =
    source.match(/<Image\s+src="\/hero-title-real-problems-chrome\.png"[\s\S]*?\/>/)?.[0] ?? "";

  assert.match(titleImage, /\bunoptimized\b/);
});

test("lab navigation uses a stable disclosure with keyboard and motion support", async () => {
  const source = await read("components/Navbar.tsx");
  assert.match(source, /aria-expanded=\{isOpen\}/);
  assert.match(source, /aria-controls="kaelux-navigation"/);
  assert.match(source, /event\.key === "Escape"/);
  assert.match(source, /event\.key === "ArrowDown"/);
  assert.match(source, /useReducedMotion/);
  assert.match(source, /overflow-y-auto/);
  assert.doesNotMatch(source, /width:\s*["']auto|height:\s*["']auto/);
});

test("project discovery includes the public-interest OpenCoast build", async () => {
  const source = await read("data/ventures.ts");
  assert.match(source, /id: "opencoast"/);
  assert.match(source, /https:\/\/opencoast\.kaelux\.dev\//);
});

test("contact uses the sharp editorial split while preserving behavior", async () => {
  const source = await read("components/sections/Contact.tsx");

  assert.match(
    source,
    /lg:grid-cols-\[minmax\(0,0\.72fr\)_minmax\(0,1\.28fr\)\]/,
  );
  assert.match(source, /contactChannels\.map/);
  assert.match(source, /bg-green-500/);
  assert.match(source, /useReducedMotion/);
  assert.doesNotMatch(source, /bg-gradient|bg-clip-text|blur-xl/);
  assert.doesNotMatch(source, /rounded-(?:2xl|3xl)/);
  assert.doesNotMatch(
    source,
    /text-white\/(?:40|45)/,
    "small contact and footer text must meet WCAG AA contrast",
  );
  assert.equal(
    (source.match(/transition-colors/g) ?? []).length,
    (source.match(/motion-reduce:transition-none/g) ?? []).length,
    "contact color transitions must stop for reduced-motion users",
  );
  assert.match(
    source,
    /delay: 0\.16 \+ index \* 0\.055/,
    "contact channels must follow the heading reveal",
  );
  assert.match(
    source,
    /\{ \.\.\.revealTransition, delay: 0\.78 \}/,
    "the form workspace must follow the channel stagger",
  );
  assert.equal(
    (source.match(/rounded-full/g) ?? []).length,
    2,
    "only the two availability-dot layers may remain circular",
  );
  for (const id of ["name", "email", "company", "topic", "details"]) {
    assert.match(source, new RegExp(`id="homepage-contact-${id}"`));
  }
  assert.match(source, /submitContactForm/);
});
