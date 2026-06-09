<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

---

# CosyCase Landing Page — Agent Context

## Product & Design References

- **PRODUCT.md** — app overview, features, store URLs, SEO copy
- **DESIGN.md** — full design system: color tokens, typography, layout rules, absolute bans

Always read DESIGN.md before touching colors, spacing, or components. The design system is non-negotiable.

---

## Tech Stack

| Layer         | Detail                                                                        |
| ------------- | ----------------------------------------------------------------------------- |
| Framework     | Next.js (Pages Router) — check `node_modules/next/dist/docs/` for current API |
| Output        | `output: "export"` — fully static, no SSR/API routes at runtime               |
| Styling       | **Tailwind CSS v4** — CSS-first, no `tailwind.config.js`                      |
| Design tokens | Defined in `@theme {}` block in `src/styles/globals.css`                      |
| Language      | TypeScript 5 + React 19                                                       |

### Tailwind v4 — critical difference from v3

- All custom tokens live in the `@theme {}` block in `src/styles/globals.css`
- `--color-orange` → generates `bg-orange`, `text-orange`, `border-orange`, etc.
- There is **no** `tailwind.config.js` — do not create one
- Do not use `theme()` or `@apply` with custom tokens; use the generated utility classes or inline `rgb()` values

### When inline rgb() is used vs. Tailwind class

Components use `bg-[rgb(231_129_40)]` syntax when a token needs an opacity modifier or when the Tailwind class would be ambiguous. Both styles are correct; be consistent with surrounding code.

---

## File Structure

```
src/
  components/         # All page sections as individual components
  pages/
    index.tsx         # Main landing page — controls which sections render
    faq.tsx           # Standalone FAQ page
    _app.tsx / _document.tsx
  styles/
    globals.css       # Tailwind @theme tokens + global animations
  utils/
    getStoreUrl.ts    # UA-sniffing store URL helper + exported constants
public/
  spines/             # Book spine JPGs used by Hero.tsx bookshelf
  screenshots/        # App screenshots used in BookshelfShowcase
  shelves/            # Shelf background images
```

---

## Current Page Section Order (index.tsx)

1. **Navbar** — sticky, `bg-[rgb(252_250_246)]/90` backdrop
2. **Hero** — book spine wall animation + headline + store badges
3. **BookshelfShowcase** — interactive phone mockup with feature tabs
4. **AppReviews** — review cards, star ratings
5. **PromoBanner** — final conversion CTA
6. **Footer**

**Not currently rendered** (components exist, fully styled, ready to re-enable):

- `Features.tsx` — two-tier feature layout (primary cards + secondary rows)
- `Customization.tsx`
- `FAQ.tsx` — has structured data value; consider re-enabling for SEO

---

## Store URLs

```
App Store:   https://apps.apple.com/app/apple-store/id6747253733
Google Play: https://play.google.com/store/apps/details?id=com.gciluffo.cosycase
```

Always use these exact URLs. Also exported from `src/utils/getStoreUrl.ts`.

---

## Key Animations

Defined in `src/styles/globals.css`:

- `.wave-spine` — `waveSettle` keyframe: staggered bounce-settle for Hero spine images
- `.hero-title` — `fadeInUp` keyframe: used on hero headline, subheadline, and store badges (each with an increasing `animationDelay`)
- `.hero-scroll-cue` — `fadeInUp` with 2s delay

---

## Section Background Rhythm

The page deliberately alternates warm surfaces for visual rhythm. Do not flatten them to a single color:

| Section           | Background                                                    |
| ----------------- | ------------------------------------------------------------- |
| Navbar            | `rgb(252 250 246)/90` (surface-0 with blur)                   |
| Hero              | `rgb(252 250 246)` (surface-0)                                |
| BookshelfShowcase | `rgb(252 250 246)` (surface-0) — unified light zone with Hero |
| AppReviews        | `rgb(244 242 238)` (surface-50) — tonal break                 |
| PromoBanner       | Dark (patterned bg with `bg-black/50` overlay)                |
| Footer            | `rgb(17 16 14)` (surface-dark)                                |

---

## SEO

- Site URL: `https://cosycases.com`
- OG image: `/screenshots/bookshelf.png`
- Structured data in `index.tsx`: `SoftwareApplication` schema + `FAQPage` schema (always keep both present even if FAQ section is not visible)
- Page `<title>`: `CosyCase – Digital Bookshelf & Book Tracker App`

---

## Common Pitfalls

- **Never use pure white** (`bg-white`, `#fff`, `rgb(255 255 255)`) for any surface — use `surface-0` or `surface-50`
- **Never use amber as a primary action color** — orange only. Amber is for delight moments (stars, badges, milestone icons, heart icon in footer)
- **Never use `border-l-4` side-stripe** on active/selected states — use full-perimeter `border` instead
- **Never create an identical N-card grid** where all cards have the same chrome — break into primary/secondary tiers
- The page wrapper in `index.tsx` must use `bg-surface-0`, not `bg-white`
