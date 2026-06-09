# CosyCase — Design System

## Identity: "The Keeper's Shelf"

A warm, literary aesthetic. Think the glow of a reading lamp, aged paper, and wooden shelves — not a tech dashboard. Every design decision should feel like it belongs in a well-loved library.

---

## Color Tokens

All tokens live in the `@theme {}` block in `src/styles/globals.css`. Tailwind v4 auto-generates utility classes from them (e.g. `--color-orange` → `bg-orange`, `text-orange`, `border-orange`).

### Primary Action — Cosy Orange

| Token                | Value                          | Use                                                                                      |
| -------------------- | ------------------------------ | ---------------------------------------------------------------------------------------- |
| `--color-orange`     | `rgb(231 129 40)` / `#E78128`  | **Only** primary action color: buttons, active states, links, icon fills, section labels |
| `--color-orange-dark`| `rgb(245 180 120)` / `#F5B478` | Orange on dark backgrounds (AIFeature section)                                           |
| `--color-orange-50`  | `rgb(255 250 245)`             | Lightest orange wash: icon container backgrounds, hover states                           |
| `--color-orange-100` | `rgb(255 242 229)`             | Orange tint: borders, dividers on light surfaces                                         |

**Rule:** Orange is the one and only primary action color. Never use a different accent for buttons, CTAs, or active states.

### Delight Accent — Amber Page

| Token               | Value                         | Use                                                                                     |
| ------------------- | ----------------------------- | --------------------------------------------------------------------------------------- |
| `--color-amber`     | `rgb(231 129 40)` / `#E78128` | Delight moments **only**: star ratings, AI badge, milestone icons, heart icon in footer |
| `--color-amber-50`  | `rgb(255 250 245)`            | Lightest amber tint                                                                     |
| `--color-amber-100` | `rgb(255 242 229)`            | Light amber tint                                                                        |

**Rule:** Amber is strictly a delight accent. It signals warmth and personality, not action. If something needs to be clicked, it should be orange.

### Surfaces — Warm Stone (no pure white, ever)

| Token                    | Value                          | Use                                                                          |
| ------------------------ | ------------------------------ | ---------------------------------------------------------------------------- |
| `--color-surface-0`      | `rgb(252 250 246)` / `#FCFAF6` | Primary surface: page wrapper, Hero, Navbar, BookshelfShowcase, review cards |
| `--color-surface-50`     | `rgb(244 242 238)` / `#F4F2EE` | Secondary surface: AppReviews section, cards, subtle section breaks          |
| `--color-surface-100`    | `rgb(219 218 215)` / `#DBDAD7` | Warm stone: borders, dividers, horizontal rules                              |
| `--color-surface-dark`   | `rgb(17 16 14)` / `#11100E`    | Dark sections: Footer, AIFeature, PromoBanner                                |
| `--color-surface-dark-2` | `rgb(38 36 32)` / `#262420`    | Sub-surfaces on dark backgrounds: cards, panels inside dark sections         |

**Warm Surface Rule:** Pure white (`#fff`, `rgb(255 255 255)`, `bg-white`) is absolutely banned from all surfaces. Always use `surface-0` or `surface-50`.

### Text

| Token                    | Value                          | Use                                      |
| ------------------------ | ------------------------------ | ---------------------------------------- |
| `--color-text-primary`   | `rgb(36 36 33)` / `#242421`    | Body copy, headings on light backgrounds |
| `--color-text-secondary` | `rgb(139 138 134)` / `#8B8A86` | Subheadlines, captions, meta information |
| `--color-text-muted`     | `rgb(139 138 134)`             | Same as secondary; aliases for clarity   |
| `--color-text-light`     | `rgb(180 178 175)`             | Placeholder, de-emphasized text          |
| `--color-text-inverse`   | `rgb(227 224 218)` / `#E3E0DA` | Primary text on dark backgrounds         |

### Interactive Chrome

| Token              | Value                       | Use                                      |
| ------------------ | --------------------------- | ---------------------------------------- |
| `--color-charcoal` | `rgb(50 47 42)` / `#322F2A` | Tag text, secondary interactive elements |

---

## Typography

| Token            | Value                                | Use                              |
| ---------------- | ------------------------------------ | -------------------------------- |
| `--font-heading` | `"Playfair Display", Georgia, serif` | All section headings (`h1`–`h3`) |
| `--font-body`    | `"Inter", system-ui, sans-serif`     | Body copy, UI labels, captions   |

Apply heading font via `style={{ fontFamily: "var(--font-heading)" }}` on heading elements.

---

## Section Background Rhythm

The page alternates warm surfaces to create visual rhythm. Never flatten consecutive sections to the same background.

| Section           | Background                                          | Notes                                                                  |
| ----------------- | --------------------------------------------------- | ---------------------------------------------------------------------- |
| Navbar            | `surface-0` at 90% opacity + blur                   | Sticky; blurs content underneath                                       |
| Hero              | `surface-0`                                         | Unified light zone — start of page                                     |
| BookshelfShowcase | `surface-0`                                         | Intentionally same as Hero; the two sections merge into one light band |
| AppReviews        | `surface-50`                                        | First tonal break after the light zone                                 |
| PromoBanner       | `surface-dark` with pattern + `bg-black/50` overlay | Dark CTA section                                                       |
| Footer            | `surface-dark`                                      | Continues dark zone from PromoBanner                                   |

---

## Active / Selected State Rules

- **Use full-perimeter border** (`border border-[rgb(231_129_40)]`) — not a side-stripe
- `border-l-4` (side-stripe) is **absolutely banned** on any active or selected state
- Pair the border with a subtle background tint (`bg-[rgb(255_250_245)]`) for warmth

---

## Card and Grid Rules

- **Never create an identical N-card grid** where every card has the same chrome, size, and visual weight
- Break grids into primary/secondary tiers with clearly different visual treatment
- Primary cards: larger, richer padding (`p-8`), can have background tint
- Secondary items: compact row layout (`flex items-start gap-4`), border-top separator, no card chrome

---

## Inline `rgb()` vs. Tailwind Class

Both approaches are valid in this codebase:

- `bg-orange` — use when no opacity modifier is needed and the class is unambiguous
- `bg-[rgb(231_129_40)]` — use when applying opacity modifiers (`/90`) or for clarity in complex expressions

Be consistent with the surrounding code.

---

## Animations (defined in globals.css)

| Class              | Keyframe                                    | Usage                                                                   |
| ------------------ | ------------------------------------------- | ----------------------------------------------------------------------- |
| `.wave-spine`      | `waveSettle` — bounce-settle with overshoot | Applied to each Hero spine image; staggered via inline `animationDelay` |
| `.hero-title`      | `fadeInUp` — 0.7s ease-out from 16px below  | Hero headline, subheadline, store badges — each with increasing delay   |
| `.hero-scroll-cue` | `fadeInUp` — 0.6s, 2s delay                 | Scroll-down indicator at bottom of Hero                                 |

Spine animation delay formula: `index * 55ms` (gives a left-to-right wave).
Hero text stagger: title at `Xms`, subheadline at `X+250ms`, badges at `X+450ms`.

---

## Absolute Bans (do not do these, ever)

1. **`bg-white` / `#fff` / pure white surfaces** — always use `surface-0` or `surface-50`
2. **Amber as a primary action color** — orange only; amber is delight-only
3. **`border-l-4` side-stripe** on active/selected states — use full `border`
4. **Identical N-card grids** — must have at least two tiers of visual treatment
5. **Adding `tailwind.config.js`** — Tailwind v4 is CSS-first; all tokens go in `@theme {}`
6. **`theme()` or `@apply` with custom tokens** — use generated utility classes or inline `rgb()`
