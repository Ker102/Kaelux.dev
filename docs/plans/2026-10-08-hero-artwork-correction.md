# Hero And Artwork Correction

## Intent

Restore the original polished chrome and liquid artwork while preserving the
new navigation, buttons, and clean lower sections. This is a local review only.

## Composition

- Original liquid images retain their original breakpoint sizes and positioning,
  without the previous review's low-opacity treatment or full-height black overlay.
- The star uses a slower, restrained shimmer and the existing glow image. Both
  stop under reduced motion. There is no extra Kaelux label under the star.
- Descriptions rotate within a fixed-height area. Pause/resume is available;
  reduced motion stops rotation. The initial phrase is visible in server HTML.
- Hero and approach share an artwork owner. The approach background is rendered
  once, faded at its boundaries, and given enough height to finish before the
  project section begins. On mobile its full composition adapts to section height.
- The approach text has a feathered readability layer, not a framed panel.
- The robot and tilted CTA share one coordinate system. Its source canvas is
  2752 x 1536, with the character occupying approximately x1595..2493 and
  y247..1294. A CSS crop removes empty canvas without editing the original image.
  The image has no pointer events, so it cannot intercept the link.

## Generated Headline

Built-in image generation was used, with the previous headline as the edit
target and `public/hero-title.png` as the original chrome-material reference.

Saved asset: `public/hero-title-real-problems-chrome.png`.
The previous assets are retained. Canvas: 2170 x 725 with genuine alpha;
opaque lettering fits x38..2144, y273..458.

Generation prompt:

> Retain the exact wording "Let's solve real problems.", single line, bold
> slightly italic sans-serif typography and silhouette. Change only the material
> to match the original highly polished reflective silver/chrome headline.
> Use crisp chamfered edges, bright white studio reflections alternating with
> charcoal mirror reflections, smooth glossy faces, and professional legibility.
> Avoid matte pewter, plastic, inflated shapes, colored finishes, background
> plates, checkerboards, additional objects, or extra wording. Preserve genuine
> transparency around and inside the letters.

## Verification

- Six viewport widths: 320, 390, 768, 1440, 1897, and 2560 pixels.
- Short-screen checks at 320x568, 375x667, and 1366x768 confirm the hero buttons
  and a hint of the following section remain visible.
- No page overflow, broken images, or browser errors.
- Headline lettering and rotating descriptions stay within their reserved bounds.
- Background artwork ends before the projects section can cover it.
- The robot-held CTA retains its `/pricing` destination and clickable hit area.
- Phrase changes do not shift the hero buttons. Pause/resume works; reduced
  motion disables rotation and star animation without hydration errors.
- Screenshots are in `output/playwright/`; generated logs and QA artifacts are
  not part of the source commit.
- All 25 focused tests, lint, and the production build pass.
