# CosyCase Landing Page — Pre-Deploy Checklist

Complete each item before going live.

---

## 1. Domain

- [ ] Confirm final domain name (you noted `cosycase.app` — double-check spelling)
- [ ] Update every occurrence of `https://cosycase.app` in the following files:
  - `src/pages/index.tsx` — `SITE_URL` constant (line 10)
  - `public/robots.txt` — Sitemap URL
  - `public/sitemap.xml` — `<loc>` entry

---

## 2. OG / Social Sharing Image

> Without a proper OG image, link previews on iMessage, Slack, Twitter, LinkedIn etc. will look broken or empty.

- [ ] Create a `1200 × 630 px` image (PNG or JPG) — ideally a branded screenshot of the bookshelf with the CosyCase logo overlaid
- [ ] Save it to `public/og-image.jpg`
- [ ] Update `OG_IMAGE` in `src/pages/index.tsx`:
  ```ts
  const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
  ```
- [ ] Test the preview once live:
  - Facebook / WhatsApp: https://developers.facebook.com/tools/debug/
  - Twitter / X: https://cards-dev.twitter.com/validator
  - LinkedIn: https://www.linkedin.com/post-inspector/

---

## 3. Favicon Variants

Currently only `favicon.ico` exists. Add these for full browser + PWA support:

- [ ] `public/apple-touch-icon.png` — 180 × 180 px PNG (used when users add the site to iOS home screen)
- [ ] `public/favicon-32x32.png` — 32 × 32 px PNG
- [ ] `public/favicon-16x16.png` — 16 × 16 px PNG
- [ ] Add the `<link>` tags to `src/pages/_document.tsx` `<Head>`:
  ```html
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  ```

---

## 4. Google Search Console

- [ ] Add site to Google Search Console: https://search.google.com/search-console/
- [ ] Verify ownership (HTML meta tag method is easiest — add the tag to `<Head>` in `src/pages/index.tsx`)
- [ ] Submit sitemap URL after domain is live: `https://cosycases.com/sitemap.xml`
- [ ] Monitor Core Web Vitals and Index Coverage reports after launch

---

## 5. Validate Structured Data

Run these before and after deploy:

- [ ] **Rich Results Test** (SoftwareApplication + FAQPage schemas):
      https://search.google.com/test/rich-results
- [ ] **Schema Markup Validator**:
      https://validator.schema.org/

---

## 6. App Store ID

- [ ] Confirm the App Store ID in the Apple Smart App Banner is correct:
  ```
  <meta name="apple-itunes-app" content="app-id=6747253733" />
  ```
  Verify at: https://apps.apple.com/app/apple-store/id6747253733

---

## 7. Update Sitemap `lastmod`

- [ ] Before each significant content update, bump the `<lastmod>` date in `public/sitemap.xml`

---

## 8. Analytics (Optional)

- [ ] If you want to track organic traffic — add Google Analytics 4 or Plausible
  - GA4: add `NEXT_PUBLIC_GA_ID` env var + snippet in `_document.tsx`
  - Plausible (privacy-friendly, no cookie banner needed): https://plausible.io

---

## 9. Performance / Core Web Vitals

- [ ] Run Lighthouse in Chrome DevTools on the deployed URL — aim for 90+ on Performance, SEO, Accessibility
- [ ] Check that the animated Hero bookshelf doesn't cause layout shift (CLS)
- [ ] Ensure all `<Image>` usages have explicit `width` + `height` (already done in Navbar/Footer — verify BookshelfShowcase screenshots too)

---

## 10. Privacy Policy / Terms (App Store Requirement)

- [ ] If required by App Store / Google Play review, add a `/privacy` page
- [ ] Link it in the footer

---

---

## 11. S3 + CloudFront Deployment

### One-time AWS setup

- [ ] Create an S3 bucket named after your domain (e.g. `cosycase.app`)
- [ ] Enable **Static website hosting** on the bucket (`index.html` as index document, `404.html` as error document)
- [ ] Set bucket policy to allow public `s3:GetObject` — OR keep bucket private and serve only via CloudFront OAC (recommended)
- [ ] Create a CloudFront distribution pointing at the S3 bucket origin
- [ ] Set **Default root object** to `index.html` in CloudFront
- [ ] Add a **Custom Error Response**: HTTP 403/404 → `/index.html`, HTTP 200 (needed for SPA routing; with `trailingSlash: true` this is less critical but good to have)
- [ ] Point your domain DNS CNAME/ALIAS to the CloudFront distribution URL

### Deploy (after setup)

Set environment variables then run the deploy scripts:

```bash
export S3_BUCKET_NAME=cosycase.app
export CF_DISTRIBUTION_ID=EXAMPLEID123

# Build + upload to S3
npm run deploy:s3

# Invalidate CloudFront cache so changes go live immediately
npm run deploy:invalidate
```

Both scripts are defined in `package.json`. The AWS CLI must be installed and configured (`aws configure`).

---

_Updated: 2026-03-29_
