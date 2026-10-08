# Hero And Artwork Correction

## Intent

Restore the original polished chrome and liquid artwork while preserving the
new navigation, buttons, and clean lower sections. This is a local review only.

## Composition

- Original liquid images retain their materials and full-strength treatment.
  Right-side positioning uses their measured visible bounds to prevent collision;
  there is no full-height black overlay over the hero.
- The star uses a slower, restrained shimmer and the existing glow image. Both
  stop under reduced motion. There is no extra Kaelux label under the star.
- Descriptions rotate within a fixed-height area. Pause/resume is available;
  reduced motion stops rotation. The initial phrase is visible in server HTML.
- Hero and approach share an artwork owner. The approach background is rendered
  once, faded at its boundaries, and given enough height to finish before the
  project section begins. On mobile its full composition adapts to section height.
- The approach artwork has no readability overlay. Brighter copy and a tight
  text shadow protect the letters without dimming the wave image.
- A static neutral hairline grid sits behind the hero's existing artwork, faded
  unevenly by two soft masks. The central star remains the focal ornament.
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

## Right-Side Spacing Follow-Up

- The upper-right PNG is 571x1024, not square. Its bright alpha pixels extend
  to source y769, giving a visible-height ratio of 769/571 = 1.34676 times
  rendered width.
- The lower-right PNG is 1024x571. Its first bright pixels begin at y18.
  With the existing 5% downward translation, its first visible pixel is
  0.512158 times its rendered width above the hero bottom.
- CSS uses those two bounds to place the upper piece above the lower piece,
  reserving 96px on desktop and 80px on tablet. Mobile reserves at least 64px.
  The upper piece also moves left; the lower piece follows the taller hero bottom.
- Seven viewport checks from 320x568 to 2560x1080 confirm visible separation,
  buttons within the first viewport, and no horizontal overflow. Screenshot
  checks at 1440 and 1909 pixels confirm the approach background has no bounded
  dark overlay. Reduced-motion controls remain correct.
- All 28 focused tests, lint, and the production build pass for this follow-up.
  Changes remain local pending approval.

## Grid And Uncovered Waves Preview

The subsequent review rejected the artwork-wide scrim as too broad even without
its earlier horizontal edges. Remove it entirely; the source wave composition
must remain visible. Keep contrast treatment at the text rather than on the art.
The grid is a local preview of the user's suggested replacement for star specks:
CSS-only, static, neutral, 48px cells on mobile and 72px on larger screens.
Existing artwork, layout, and motion remain unchanged. Do not push before review.

Validated at seven viewport sizes, including short mobile, tablet, laptop, and
wide desktop. Wave pixels sampled outside the foreground differ from the rendered
source by only 1-3 RGB levels, instead of being dimmed by an overlay. There are no
missing images, horizontal overflow, or browser page errors. The grid has no
animation or pointer interception. All 29 focused tests, lint, and build pass.
