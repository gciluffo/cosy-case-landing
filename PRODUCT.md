# CosyCase — Product Reference

## What It Is

CosyCase is a digital bookshelf and book tracker app for iOS and Android. It lets readers build a virtual bookshelf that looks and feels like their real one — complete with real spine images, AI-generated artwork for missing covers, and social sharing.

**Tagline:** "Your shelf awaits."
**Brand voice:** Warm, literary, personal. A keeper's shelf, not a data spreadsheet.

---

## Store URLs

```
App Store:   https://apps.apple.com/app/apple-store/id6747253733
Google Play: https://play.google.com/store/apps/details?id=com.gciluffo.cosycase
```

These are the canonical URLs. Use exactly these strings everywhere — in components, structured data, and meta tags.

Also exported from `src/utils/getStoreUrl.ts`:

- `APP_STORE_URL` — App Store link
- `PLAY_STORE_URL` — Google Play link
- `getStoreUrl()` — UA-sniffing helper; returns the appropriate store for the device

---

## Core Features

| Feature                | Description                                                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Digital Bookshelf**  | Books rendered as a real-looking shelf with actual spine images. Your collection grows visually — exactly like a physical shelf. |
| **Track Any Book**     | Search millions of titles; mark as reading / read / want-to-read. Full reading history.                                          |
| **AI Spine Art**       | No cover? Generate custom spine artwork with AI in seconds.                                                                      |
| **Bulk Import**        | Photograph a real bookshelf; AI identifies and imports all visible books automatically.                                          |
| **Deep Customization** | Multiple shelf styles, backgrounds, and widgets (dark wood, floating shelves, etc.).                                             |
| **Share Your Shelf**   | Share a shareable link or image of your shelf on social media or with friends.                                                   |
| **Follow Shelves**     | Follow a friend's shelf; see live updates when they add or remove books. Activity change log per shelf.                          |
| **Reading Challenges** | Join challenges; track reading goals and milestones.                                                                             |
| **Book Reviews**       | Write personal reviews and notes for books in your library.                                                                      |

---

## Platform

- iOS (iPhone & iPad)
- Android
- Free to download

---

## SEO Copy

**Page title:** `CosyCase – Digital Bookshelf & Book Tracker App`

**Meta description:**

> CosyCase is a digital bookshelf app for iOS & Android. Build a reading list, join reading challenges, write book reviews, share your shelf with friends, and track every book you read.

**Site URL:** `https://cosycases.com`

**OG image:** `/screenshots/bookshelf.png`

---

## Structured Data (index.tsx)

Two schemas are always kept in `index.tsx` — even when sections they correspond to are not rendered:

1. `SoftwareApplication` — app name, description, OS, download URLs, free offer
2. `FAQPage` — answers to common user questions (customization, sharing, following, auto-crop spine)

Do not remove either schema. The `FAQPage` schema has independent SEO value whether or not the `<FAQ />` component is rendered on the page.

---

## Landing Page Conversion Flow

1. **Hero** — first impression + store badges (above the fold CTA)
2. **BookshelfShowcase** — interactive demo of the core feature
3. **AppReviews** — social proof
4. **PromoBanner** — final conversion push ("Your shelf awaits.")

**Not currently rendered but available:**

- `Features.tsx` — full feature breakdown (two-tier layout)
- `Customization.tsx` — shelf customization showcase
- `FAQ.tsx` — FAQ accordion (adds SEO + reduces support friction)

---

## FAQ Content

Questions currently in the structured data / FAQ component:

- How can I customize my bookshelf?
- How can I share a bookshelf with a friend?
- How can I follow a bookshelf?
- How can I see what changes were made to a bookshelf?
- How does auto-cropping spines work?
