# Mobile Refinement Implementation Plan

**Goal:** Make Kaelux's phone layout readable and touch-friendly without changing desktop composition.

**Architecture:** Add semantic hooks to existing components and a separate `app/mobile.css` stylesheet. Every rule is limited to widths below 768px; no user-agent branching, duplicated content, new dependencies, or asset edits.

**Tech Stack:** Existing Next.js, React, Tailwind, CSS, PostCSS, and Node focused tests. Use the executing-plans workflow in the current session.

## 1. Guard The Scope

- Create `tests/mobile-layout.test.ts`. Parse the new stylesheet with the existing PostCSS dependency and require every rule to be inside `@media (max-width: 767px)`.
- Verify semantic navigation/artwork hooks, the single robot-held link, native mobile input carets, and 16px input text.
- Run `npm run test:focused`: the new tests should fail before implementation.

## 2. Phone Artwork And Navigation

- Modify `components/Navbar.tsx`, `components/sections/Hero.tsx`, and `components/sections/ServiceIntroduction.tsx` only to add stable CSS hooks.
- Import `app/mobile.css` after `app/globals.css` in `app/layout.tsx`.
- Use a three-column mobile navigation row with 44px targets and a viewport-anchored drawer.
- Move liquid artwork outward; reserve the hero copy and action area. Keep the current chrome title and star.
- Keep the approach text on the natural black surface. Place its background ornament around the robot scene at the bottom instead of stretching it behind every paragraph.
- Resize the robot and CTA in one coordinate system, with the label and arrow clear of the hands.

## 3. Phone Controls And Density

- Modify `components/sections/DiagnoserCTA.tsx` and `components/sections/Contact.tsx` only for semantic hooks and missing control names.
- Use 32px intake headings, 44px touch targets, 16px editable fields, and the native input caret on phones. Keep the desktop cursor and visual presentation unchanged.
- Reduce mobile-only section spacing and keep decorative intake shapes away from the heading.
- Run `npm run test:focused` and `npm run lint`: all tests must pass.

## 4. Validation And Local Checkpoint

- Check 320x568, 375x667, 390x844, 430x932, and 767px-wide mobile layouts.
- Check open-menu scrolling, Escape focus return, hash navigation, the robot CTA hit area, and long input text without sending messages.
- Compare desktop screenshots and geometry at 1440x900 with the recorded baseline; check 1909x938 as well.
- Inspect all landing-page sections in real viewports. Keep background visibility and reduced-motion behavior intact.
- Run `npm run build`, update `task.md` and `implementation-plan.md`, and commit only named files locally. Do not push until the user approves.

## Verification Evidence

- All 33 focused tests, lint, and the production build pass. The new tests first
  failed before `app/mobile.css` existed, then passed after implementation.
- Phone widths 320, 375, 390, 430, and 767 retain visible hero actions and have
  no horizontal overflow. Menus fit the screen, with internal scrolling when
  needed, and keyboard dismissal returns focus to Explore.
- Touch emulation confirms Projects closes the drawer and reaches `#ventures`
  with its heading below the fixed header. The robot CTA reaches `/pricing`.
- Pixel checks on the robot alpha layer confirm its hands do not cover the
  label or icon at the narrowest phone width. The board retains a 44px target.
- Long questions scroll within the input instead of moving a fake caret outside
  the field. Phone editable controls use 16px type. No messages were submitted.
- Desktop geometry matches the recorded 1440x900 baseline exactly; 1909x938
  screenshots retain the existing composition. New CSS is entirely phone-scoped.
- QA screenshots are under `output/playwright/` and are not source artifacts.
