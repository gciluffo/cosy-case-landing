# Spec: Featured Bookshelves

**Status:** ready-for-agent
**Tracker:** local markdown (`.scratch/featured-bookshelves/`)

## Problem Statement

CosyCase wants to promote the idea of building a digital bookshelf by showing off real shelves built by readers. Today the only entry point is a nav link that leads to a placeholder page with a "Coming soon" message and no images, so a curious visitor who wants to see what a CosyCase shelf actually looks like hits a dead end.

Worse, the nav link and the page's own canonical URL point at a route that does not exist, so the page is effectively unreachable and invisible to search engines. There is also no low-friction way to publish new shelves.

From the maintainer's perspective: adding a featured shelf currently has nowhere to go, and once it does, publishing one should require no code change — only dropping an image file into a folder and rebuilding.

## Solution

Rename and rebuild the Featured Bookshelves page so that:

- It is reachable and correctly addressed from the site navigation.
- It renders a masonry gallery of real reader shelves, sourced automatically from a dedicated image directory at build time — no manifest, no titles, no author names.
- It is indexable, carries proper SEO metadata, advertises Open Graph data, and appears in the sitemap.

Adding a shelf becomes: drop an image into the directory, rebuild, deploy.

## User Stories

### Visitors

1. As a prospective CosyCase user, I want to browse real shelves built by other readers, so that I can picture what my own shelf could look like.
2. As a prospective user, I want to reach Featured Bookshelves from the site navigation, so that I do not have to guess a URL.
3. As a prospective user, I want to see an actual gallery rather than a "coming soon" placeholder, so that I trust the product is live.
4. As a prospective user, I want a short intro line explaining what I am looking at, so that I understand these are community shelves.
5. As a mobile visitor, I want a single-column gallery, so that each shelf is large enough to actually see the spines.
6. As a desktop visitor, I want a multi-column gallery, so that I can scan many shelves at once.
7. As a visitor, I want each shelf shown in full and uncropped, so that I can see the whole arrangement.
8. As a visitor, I want images to keep their natural proportions, so that spines are never squashed or stretched.
9. As a visitor on a slow connection, I want images to load lazily, so that the page is not blocked by the gallery.
10. As a visitor, I want the gallery to reserve space for each image before it loads, so that the page does not jump around as images arrive.
11. As a visitor, I want no captions or names on the tiles, so that the focus stays on the shelves.
12. As a visitor, I want the page to share the site's warm, literary look, so that it feels like part of the same product.
13. As a visitor who lands on the page when no shelves are published, I want a graceful empty state, so that the page never looks broken.
14. As a visitor, I want the gallery to appear in a stable, predictable order, so that the page does not feel random between visits.

### Featured readers (privacy)

15. As a reader whose shelf is featured, I want my name and handle not displayed, so that I am not publicly identified by the gallery.
16. As a reader whose shelf is featured, I want no title or other metadata rendered alongside it, so that only the shelf itself is shown.

### Maintainer

17. As the maintainer, I want to add a featured shelf by dropping an image file into a single folder, so that I never have to edit code.
18. As the maintainer, I want shelves ordered predictably by filename, so that the gallery is stable across rebuilds.
19. As the maintainer, I want non-image files (system or placeholder files) to be ignored, so that they cannot break the gallery.
20. As the maintainer, I want a missing image directory to be non-fatal, so that a fresh checkout still builds.
21. As the maintainer, I want each image's dimensions read automatically, so that I never hand-maintain width and height.
22. As the maintainer, I want the page to be part of the existing static export, so that hosting and deployment are unchanged.
23. As the maintainer, I want the old placeholder route removed, so that there is no dead code or confusion.

### Search engines and sharing

24. As the site owner, I want the page to be indexable, so that it can rank and drive installs.
25. As the site owner, I want a single canonical URL that matches the site's trailing-slash convention, so that no duplicate-URL dilution occurs.
26. As the site owner, I want a descriptive title and meta description, so that the page presents well in search results.
27. As the site owner, I want Open Graph title, description, URL, type, and image, so that shared links render properly.
28. As the site owner, I want the route listed in the sitemap, so that crawlers discover it.
29. As the site owner, I want lightweight structured data describing the collection, so that search engines understand the page is a gallery.

### Accessibility

30. As a screen-reader user, I want each shelf image to carry meaningful alternative text, so that I know what it depicts.
31. As an assistive-technology user, I want a logical heading structure, so that I can navigate the page.
32. As a visitor who zooms, I want images exposed with intrinsic dimensions, so that zooming behaves predictably.

### Engineering

33. As an engineer, I want the directory-to-shelf-list logic isolated in a pure module, so that it can be tested without a browser.
34. As an engineer, I want the existing image component, design tokens, and surface conventions reused, so that the codebase stays consistent.
35. As an engineer, I want the build to emit the route as static HTML, so that the existing static-export pipeline is unaffected.

## Implementation Decisions

- **Route and naming.** The existing placeholder route is renamed to `featured-bookshelves`. The site nav entry is relabelled "Featured Bookshelves" and points at the new route. The old route is deleted. Because the site is a static export, the old URL cannot redirect and will return 404 — this is accepted.
- **Image source.** Featured shelf images live in a dedicated directory under the site's public assets tree, kept separate from the existing shelf-background and book-spine assets.
- **Discovery (no manifest).** The page's static-props hook (which runs at build time and is compatible with the static export) enumerates the directory, keeps only image entries by extension, and sorts them alphabetically. A missing directory yields an empty list; non-image entries are ignored. This keeps the add-a-shelf workflow to "drop file, rebuild, deploy."
- **Dimensions.** Each file's intrinsic width and height are read at build time and emitted with the markup, so the masonry reserves space and does not shift. To avoid hand-maintained dimensions, `image-size` is introduced as a build-time-only dev dependency — the only new dependency for this work.
- **Rendering.** The gallery is a CSS multi-column masonry: one column on mobile, two at the small breakpoint, three at the large breakpoint. Each tile avoids breaking across columns and carries a bottom margin for vertical rhythm. Images render full-width at their natural height (uncropped), with rounded corners and a warm border. Images lazy-load and declare a responsive `sizes` hint.
- **No metadata on tiles.** No captions, shelf titles, or reader names are rendered. Alternative text is a single generic descriptor (a featured bookshelf built in CosyCase).
- **Page chrome.** Navbar only. No PromoBanner, no Footer, no store badges, and no CTA buttons. The page container follows the site's existing max-width, horizontal padding, and primary surface background.
- **Copy.** A single heading ("Featured Bookshelves"), a short subtitle describing real shelves built by readers, and a concise empty-state message when no images are present.
- **SEO.** Remove the existing `noindex` directive. Set page title, meta description, canonical URL, and Open Graph URL to the new route with a trailing slash, matching the site's existing convention. Add Open Graph title, description, type, site name, and image, reusing the existing site OG image. Add the route to the sitemap with monthly change frequency and a current `lastmod`. Include a lightweight `CollectionPage` structured-data block.
- **Explicitly not built.** No per-shelf detail pages and no owner handles (both were considered and rejected).

## Testing Decisions

- **What makes a good test here:** assert externally observable behavior only — given a set of image files in a directory, the data source returns them as an ordered list of shelf records with real dimensions; given an empty or missing directory, it returns an empty list; given non-image files, they are excluded. Tests must not assert *how* the directory is walked or which library reads dimensions.
- **The repo currently has no test harness** — no framework, no test script, no test files. The single proposed seam is therefore a new pure module: extract directory enumeration, image filtering, and dimension reading into one pure function that takes a directory path and returns shelf records. Testing it requires no browser, no build, and no running server.
- **Runner:** use Node's built-in test runner so that no test framework or additional dependency is introduced. This keeps the seam count at one and matches the project's minimal dependency posture.
- **The route itself** is covered by the build: `npm run build` must succeed and emit the route into the static export with the images copied. Responsive behavior (single column on mobile, multi-column on desktop) and the empty state are verified manually.
- **Prior art:** none in this repository. This spec establishes the pattern; keep it deliberately small.

## Out of Scope

- Image compression or file-size reduction — the maintainer is handling this in a separate export process.
- Captions, shelf titles, reader names or handles, book counts, or any per-shelf metadata.
- Per-shelf detail pages, deep links, lightbox/zoom, filtering, sorting controls, pagination, or search.
- PromoBanner, Footer, store badges, or CTA buttons on this page.
- Loading shelves from a remote CMS or API; the source is local files.
- Redirects from the old placeholder route.
- Any change to the homepage, FAQ, contact, or other existing pages.

## Further Notes

- **Known constraint:** adding images always requires a rebuild and redeploy, because a static export cannot enumerate a directory at runtime. This is accepted and expected.
- **Image weight:** the current exported images are heavy PNGs (~12 MB combined). Since optimization is handled elsewhere, the page will ship whatever is placed in the directory. A future optimization pass is out of scope.
- **Duplicate-looking titles:** two source files share a display-name prefix with different hash suffixes. Because no titles are rendered, they are simply treated as two distinct images; this is harmless.
- **Design-system fit:** the design system bans identical uniform card grids. The masonry's natural height variation, combined with the absence of captions and card chrome, keeps the gallery from reading as a uniform N-card grid.
