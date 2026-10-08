# Implementation Plan: Kaelux Research Lab and Venture Group

1. Documentation baseline
- Replace the old MedAI-only task definition with the holding-studio reposition objective.
- Track the required commit discipline, preserved hero image, and route constraints.

2. Shared content data
- Add typed venture data for MedAI, ViperMesh, PromptTriage, Nullstate, and lower-priority lab projects.
- Add typed engagement-track data for investors, strategic partners, business-build inquiries, and business automations.

3. Homepage and navigation
- Update hero semantic H1, rotating subtitles, CTAs, and scroll targets.
- Replace service-led homepage sections with holding-company sections.
- Remove fake team rendering and navigation references.
- Keep current visuals and transitions wherever possible.

4. Engagements page
- Rewrite `/pricing` as an engagements page.
- Remove old fixed package, LLMOps, platform-service, and managed-agent pricing cards.
- Reuse the existing contact flow and route users to the correct inquiry context.

5. Business automations
- Reframe `/openclaw` from the old managed-agent offer to business automations.
- Keep route compatibility while making OpenClaw an implementation detail only when relevant, not the public service identity.

6. Soft retirement
- Remove `/solutions` and `/services/*` from navigation and sitemap.
- Add `noindex` metadata to old service routes and replace their body copy with compact bridge pages.

7. SEO, docs, and stale claim cleanup
- Update root/about/pricing/openclaw metadata and JSON-LD.
- Escape JSON-LD `<` characters before rendering.
- Update README to remove stale agency pricing and old service positioning.
- Delete unused generated team images if no references remain.

8. Verification
- Run stale-claim searches for fabricated team members and old positioning.
- Run lint, typecheck, and build.
- Start the dev server and visually verify homepage, pricing, about, MedAI, and business automations on desktop and mobile.

9. Research-lab positioning and public research
- Reframe homepage and metadata copy around AI/ML engineering research, open-source experiments, products, and ventures.
- Present security-first business automations as the focused Kaelux service offer, with an Estonia/Baltics base.
- Expand ViperMesh into a unified 3D professional workspace informed by spatial-reasoning research.
- Add Harneloop as a public open-source build and publish the Kaelux harness-evolution engineering article.

10. Intake agent reliability and knowledge
- Repair quick-prompt state handling so the compact homepage terminal remains writable and recoverable.
- Align the system prompt, local canonical context, and Redis ingestion sources with Harneloop, ViperMesh, research-lab positioning, and business automations.

## July 23, 2026 Completion

- Steps 9 and 10 are complete.
- Added the Harneloop public-build card, Kaelux engineering article, wiki discovery, sitemap entry, and structured article metadata.
- Updated ViperMesh positioning and linked its harness research to Harneloop.
- Verified the terminal success path and forced error path in the browser.
- Verified the Harneloop article at 1440px and 390px with no page-level horizontal overflow.
- Full lint, typecheck, production build, and Python syntax validation pass.

## October 8, 2026 Review Batch

1. [x] Refresh upstream and work on a local review branch without reverting user changes.
2. [x] Apply collaborative-lab copy, generate the replacement image headline,
   and include OpenCoast in the public project list.
3. [x] Simplify hero CTAs and automation layout; stabilize navigation and motion.
4. [x] Verify lint, TypeScript, regression tests, build, and desktop/mobile preview.
5. [x] Start the local review server on port 3001.
6. [ ] User review and explicit approval before any Kaelux push or deployment.

## Hero And Artwork Correction Plan

1. [x] Compare the review branch with the original hero/approach implementation;
   measure the headline, robot, and background image bounds.
2. [x] Generate a brighter chrome-material headline without changing its wording.
3. [x] Restore liquid artwork, a gentle star shimmer, and stable rotating copy.
4. [x] Recompose the approach CTA and robot in a shared responsive coordinate system.
5. [x] Repair the background stacking and give the complete artwork enough room.
6. [x] Run focused tests, lint, build, desktop/mobile visual and motion checks.
7. [x] Commit only this correction locally; do not push. Source checkpoint: `0bc99d2`.

## Right-Side Liquid Separation

1. [x] Measure the actual PNG dimensions and bright alpha bounds; compare the
   approach background with and without the section-local scrim.
2. [x] Align the corner and lower wave with a breakpoint-specific visible gap.
3. [x] Replace the bounded copy overlay with a continuous artwork-owned scrim.
4. [x] Verify pixel separation, readability, responsive layout, tests, and build.
5. [x] Commit only this correction locally, with no push. Source checkpoint: `687cabb`.

## Uncovered Waves And Hero Grid Preview

1. [x] Compare the raw image with the remaining broad shadow and test text-local contrast.
2. [x] Remove the wide scrim; add a neutral, static, asymmetrically faded hero grid.
3. [x] Verify the wave pixels, copy readability, responsive layout, controls, tests, and build.
4. [ ] Commit the scoped preview locally, with no push. All validation is complete.
