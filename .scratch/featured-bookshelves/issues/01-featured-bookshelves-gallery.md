# 01 — Featured Bookshelves gallery renders from the image directory

**What to build:** From the site nav, "Featured Bookshelves" opens a page showing a masonry gallery of the published reader shelves — full and uncropped, lazy-loaded, with no captions or reader names, one column on mobile and two/three columns on desktop — headed by a short title and subtitle, with a graceful empty state. Dropping an image into the featured-shelves image directory and rebuilding is the entire publishing workflow. The page stays non-indexed at this stage.

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

- [ ] The nav link reaches the new `featured-bookshelves` route and is labelled "Featured Bookshelves"
- [ ] The dedicated featured-shelves image directory exists and contains the current exported shelves
- [ ] One tile is rendered per image in the directory, in stable alphabetical order
- [ ] Non-image entries (system or placeholder files) are ignored
- [ ] A missing or empty directory renders a graceful empty state and the build still succeeds
- [ ] Tiles render full-width at their natural aspect ratio (never cropped or squashed)
- [ ] Each tile's intrinsic dimensions are emitted so the masonry reserves space and does not shift as images load
- [ ] Images lazy-load and declare a responsive size hint
- [ ] Single column on mobile; multi-column at the larger breakpoints
- [ ] No captions, shelf titles, reader names, store badges, Footer, PromoBanner, or CTA buttons on the page
- [ ] The directory-to-shelf-list logic is a pure module (directory path in → ordered shelf records with dimensions out), covered by unit tests running under the Node built-in test runner with no new test framework
- [ ] `npm run build` emits the route into the static export with the images copied
- [ ] The old placeholder route is removed
