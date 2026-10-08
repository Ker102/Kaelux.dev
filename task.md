# Kaelux Research Lab and Venture Group

## Objective

Position `kaelux.dev` as the founder-led parent brand and research lab behind Kaelux open-source projects, product experiments, and ventures.

The site should communicate:

- Kaelux experiments in AI and ML engineering, publishes open-source work, and develops selected projects into products or ventures.
- Kristofer Jussmann is the founder behind the venture group.
- The primary public proof is MedAI, ViperMesh, PromptTriage, Nullstate, and Harneloop.
- ViperMesh is a unified workspace for 3D professionals informed by research into AI spatial reasoning.
- Harneloop is the open-source, evidence-gated harness-evolution framework used while developing the ViperMesh Blender harness.
- Kaelux offers security-first business automation design and implementation from Estonia for Baltic and international companies.
- Businesses can still contact Kaelux for selective partnership builds inspired by those ventures.
- Investors, strategic partners, collaborators, and co-founder-level partners are the main audience.

## Constraints

- Do not edit `public/hero-title.png`; the hero header is an image that will be regenerated separately.
- Preserve the current visual system and section styling where practical.
- Commit after each meaningful change so the work can be reverted in small chunks.
- Remove fabricated team claims and generated team-member assets.
- Soft-retire old `/solutions` and `/services/*` pages without breaking routes.
- Keep `/api/contact` unchanged.

## Success Criteria

- Homepage copy and CTAs frame Kaelux as an AI and ML research lab, software builder, and venture group.
- Homepage sections are ordered around how Kaelux builds, ventures, labs, business automations, founder, and contact.
- Pricing becomes an engagements page instead of package pricing.
- `/openclaw` is reframed as business automations, with the old route kept only for compatibility.
- Old service routes are removed from navigation and sitemap and are marked `noindex`.
- Metadata, JSON-LD, README, and sitemap match the new positioning.
- Animated numeric text renders real values in server/no-JS output instead of `0`.
- The homepage intake terminal remains writable after a quick prompt is selected and exposes recoverable request errors.
- Harneloop has a Kaelux engineering article, venture card, sitemap entry, and intake-agent context.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.

## July 23, 2026 Status

- Research-lab positioning is live across the homepage, About page, metadata, manifest, engagements, and canonical agent context.
- ViperMesh is described as a unified 3D professional studio informed by spatial-reasoning research.
- Harneloop is listed as a public build and linked to the new harness-evolution engineering article.
- The homepage terminal remains writable after failed quick prompts and shows a recoverable error state.
- Redis ingestion now replaces stale source chunks when canonical content changes.
- Lint, TypeScript, production build, ingestion-script compilation, desktop checks, and mobile article checks pass.

## October 8, 2026 Local Review

- Positioning now centers on collaboration: "Let's solve real problems."
- Generated a replacement transparent chrome headline; retained the original asset.
- Reduced hero effects, stabilized the navigation disclosure, and replaced the
  pastel business-automation panel with a restrained divided layout.
- Added OpenCoast and aligned public copy around research, tools, and collaboration.
- Preserved contact delivery and the intake-agent security and consent behavior.
- Desktop and mobile preview checks show no page overflow or broken images;
  navigation supports keyboard focus, Escape, and reduced motion.
- A reduced-motion browser check exposed mismatched server/client styles in
  existing scroll effects. A shared SSR-safe preference hook now prevents that
  mismatch and stops the homepage parallax when reduced motion is enabled.
- Project cards now reveal individually rather than waiting for a fraction of
  the entire tall grid to enter the viewport on a short mobile screen.
- Lint, TypeScript, production build, and 22 regression tests pass after these fixes.
- Review URL: http://127.0.0.1:3001/.
- Work is local on `codex/collaborative-lab-review-2026-10-08`.
  Do not push, open a PR, or deploy Kaelux until the user reviews it.

## October 8, 2026 Hero And Artwork Correction

- Preserve the approved navigation, button styling, and lower page sections.
- Restore the original liquid-art scale and prominence, phrase rotation, and
  a restrained star shimmer; remove the extra Kaelux label under the star.
- Match the new headline image to the original polished chrome material.
- Anchor an enlarged robot and the tilted "Bring a problem" CTA inside one
  responsive composition, accounting for the source image's transparent padding.
- Let the approach artwork finish before the project section paints over it;
  avoid clipped edges, duplicate imagery, or a hard hero-to-approach boundary.
- Validate desktop, mobile, short screens, reduced motion, phrase rotation,
  link hit areas, and the boundaries with screenshots and layout measurements.
- Keep all changes local pending review.

### Correction Validation

- Restored all three original liquid assets at full strength, added a gentle
  star shimmer, restored phrase rotation, and removed the duplicated brand label.
- Added the brighter generated chrome asset without deleting earlier headlines.
- The enlarged robot holds one tilted, fully clickable CTA. Its original image
  remains unchanged; the crop and button offsets share one local coordinate system.
- A single complete approach background now fades into the project section.
  Readability is preserved by a feathered copy scrim rather than a boxed panel.
- Six width checks (320 through 2560px) pass. Additional short-screen checks at
  320x568, 375x667, and 1366x768 confirm visible buttons, a next-section hint,
  fitting text and headline pixels, and no horizontal overflow.
- Rotation, pause/resume, reduced motion, navbar focus, and CTA hit areas pass
  browser checks without console or hydration errors.
- 25 focused tests, lint, and production build pass.
- Local preview remains http://127.0.0.1:3001/. No Kaelux push is authorized yet.
- Correction committed locally as `0bc99d2`; production remains unchanged.

## Hero Spacing Follow-Up

- Increase the hero's lower breathing room without changing its content position.
- Remove the approach wave's negative top offset on desktop and mobile so it
  no longer overlaps the hero liquids.
- Preserve the full background extent before the projects section begins.
- Keep small-screen sizing, original artwork, motion, buttons, and navigation.
- Desktop hero height grows by 32px while the headline and buttons retain their
  existing positions. The approach artwork begins 160px lower than before on desktop.
- Checks at 1909x938, 1366x768, 390x844, and 320x568 pass: no decorative overlap,
  clipping, page overflow, broken images, or browser errors; buttons remain visible.
- All 26 focused tests, lint, and the production build pass.
- Keep this follow-up local, without pushing.

## Separate Right-Side Liquids And Remove Dark Bands

- The remaining collision is between `liquid-flow-1.png` and `liquid-flow-3.png`,
  not the separate approach wave. The upper asset is 571x1024, although its
  JSX declared it square. Use its real dimensions and visible-pixel bounds.
- Move the upper-right piece up and left and reserve a visible gap before the
  lower-right piece. Validate the pixels rather than only comparing element boxes.
- Provide additional hero height on desktop, with smaller-screen constraints.
- Remove the section-bounded readability overlay that produces dark horizontal
  bands. Preserve contrast with a continuously blended layer owned by the full
  approach artwork, not by the foreground section's rectangle.
- Keep the current headline, buttons, navigation, star, phrase rotation, robot,
  and original assets. Keep all changes local pending review.

### Verification

- Measured the source PNG alpha bounds and projected their visible pixels into
  seven layouts: 320x568, 390x844, 768x1024, 1366x768, 1440x900, 1909x938,
  and 2560x1080. Desktop clearance is approximately 96px; tablet clearance
  is 80px. Mobile clearance remains at least 64px.
- Desktop hero height now reaches 720px on the laptop check, 858px at
  1909x938, and 960px at 2560x1080. Hero buttons stay within every viewport.
- Screenshot review confirms the section-local dark bands are removed and
  the approach copy retains readable contrast. The complete background stays
  inside its stage, with no horizontal overflow or browser page errors.
- Reduced motion disables the star animation and description rotation.
- All 28 focused tests, lint, and the production build pass. The preview remains
  available at http://127.0.0.1:3001/. Generated QA artifacts are not staged.
- Source checkpoint: `687cabb`. No changes have been pushed.

## Uncover Waves And Preview A Faded Hero Grid

- Remove the artwork-wide readability overlay entirely. The previous correction
  eliminated its horizontal boundaries but still left a broad dark shadow.
- Keep text readable using brighter copy and a tight, glyph-local text shadow;
  do not paint black gradients or panels over the decorative image.
- Add a static, neutral hairline grid beneath the hero's existing chrome and
  liquids. Fade it unevenly and keep it outside the accessibility tree and
  pointer interactions. No new assets, dependencies, or animation loops.
- Preserve the approved positioning, controls, rotating phrases, and robot CTA.
- Verify mobile, tablet, and desktop views, then commit locally without pushing.

### Grid Preview Verification

- Seven viewport checks from 320x568 to 2560x1080 confirm no overflow, missing
  images, or browser page errors. Hero buttons remain visible and right-side
  liquid clearance is unchanged.
- The grid has no animation and no pointer events; it uses 48px cells on mobile
  and 72px on larger screens. Original star and description motion remain intact.
- Both artwork and section overlay pseudo-elements are absent. Screenshot pixel
  checks against the rendered source image differ by at most 3 RGB levels at
  three sampled wave locations, confirming the broad dark scrim is gone.
- Mobile and desktop screenshots confirm the original waves and robot composition
  are visible; only the letters receive contrast treatment.
- All 29 focused tests, lint, and the production build pass. Keep this local.
