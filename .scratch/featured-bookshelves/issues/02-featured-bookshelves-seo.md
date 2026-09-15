# 02 — Featured Bookshelves page is indexable and shareable

**What to build:** The finished Featured Bookshelves page can be found in search and previews correctly when shared. The `noindex` directive is removed, the page carries a descriptive title and meta description, a canonical URL and Open Graph URL using the site's trailing-slash convention, full Open Graph tags reusing the existing site OG image, an entry in the sitemap, and lightweight `CollectionPage` structured data.

**Blocked by:** 01 — Featured Bookshelves gallery renders from the image directory.

**Status:** ready-for-agent

- [ ] The `noindex` directive is gone and the page is indexable
- [ ] The exported HTML carries the correct page title and meta description
- [ ] The canonical URL and Open Graph URL point at the new route with a trailing slash, matching the site's existing convention
- [ ] Open Graph title, description, type, site name, and image are present and correct
- [ ] The route appears in the sitemap with monthly change frequency and a current `lastmod`
- [ ] Lightweight `CollectionPage` structured data is present and valid
- [ ] `npm run build` still succeeds and emits the route
