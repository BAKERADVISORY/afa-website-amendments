# SEO Audit Report

**Project:** Australian Financial Advisory (Wynn Advisory clone)  
**Date:** 2026-04-09  
**Auditor:** Claude Code SEO Skill  
**Build status:** PASS (Next.js 16.2.1, all 11 routes compile)

---

## SEO Health Score: 78 / 100

| Category                 | Score | Weight | Weighted |
| ------------------------ | ----- | ------ | -------- |
| Technical SEO            | 82    | 22%    | 18.0     |
| Content Quality          | 75    | 23%    | 17.3     |
| On-Page SEO              | 88    | 20%    | 17.6     |
| Schema / Structured Data | 80    | 10%    | 8.0      |
| Performance (CWV)        | 65    | 10%    | 6.5      |
| AI Search Readiness      | 70    | 10%    | 7.0      |
| Images                   | 72    | 5%     | 3.6      |

---

## Issues Found and Fixed

### Critical (Fixed)

#### 1. No per-page metadata on any page

**Before:** Only the root `layout.tsx` had a generic title and description. All 9 pages had no individual `Metadata` export.  
**Fix:** Added unique `Metadata` export with optimised title, description, keywords, `alternates.canonical`, and `openGraph` to all 9 pages.  
**Pages fixed:** `/`, `/about`, `/services`, `/services/small-business-restructure`, `/services/voluntary-administration`, `/services/creditors-voluntary-liquidation`, `/reduce-debt`, `/close-company`, `/contact`

#### 2. No Open Graph or Twitter card tags

**Before:** Zero OG or Twitter meta tags anywhere in the project.  
**Fix:** Added full OG and Twitter card metadata in `layout.tsx` (site-wide defaults) and per-page overrides on all pages.

#### 3. No robots.txt

**Before:** File did not exist. Crawlers had no instructions.  
**Fix:** Created `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://www.ausfinancialadvisory.com.au/sitemap.xml
```

#### 4. No sitemap.xml

**Before:** No sitemap in the project.  
**Fix:** Created `src/app/sitemap.ts` using the Next.js 16 Sitemap API. Generates `/sitemap.xml` statically at build time with all 9 routes, correct `priority` values, and `changeFrequency`.

#### 5. Missing `<main>` landmark on 6 pages

**Before:** `/contact`, `/close-company`, `/reduce-debt`, and all three service detail pages had sections as direct children of the fragment with no `<main>` wrapper. This breaks accessibility landmark semantics and is a crawlability/structure signal.  
**Fix:** Added `<main>` wrapper on all 6 pages.

#### 6. `lang="en"` instead of `lang="en-AU"`

**Before:** `<html lang="en">` — generic English locale.  
**Fix:** Changed to `<html lang="en-AU">` in `layout.tsx`.

---

### High (Fixed)

#### 7. No JSON-LD structured data

**Before:** Zero structured data anywhere in the project.  
**Fix:**

- Added `FinancialService` + `LocalBusiness` + `WebSite` JSON-LD graph in `layout.tsx` (site-wide).
- Added page-specific `Service` schema on each of the three service detail pages (SBR, VA, CVL).

**Schema implemented:**

```json
{
  "@type": ["FinancialService", "LocalBusiness"],
  "name": "Australian Financial Advisory",
  "serviceType": [
    "Pre-Insolvency Advice", "Voluntary Administration",
    "Small Business Restructuring", "Creditors Voluntary Liquidation",
    "Debt Negotiation", "Solvency Advice", "Business Restructuring"
  ],
  "address": [Gold Coast QLD 4216, Brisbane QLD 4000, Sydney NSW 2000],
  "telephone": "1300052321",
  "openingHoursSpecification": "Mon-Fri 08:30-17:30"
}
```

#### 8. No Gold Coast location in NAP

**Before:** Footer listed Sydney and Brisbane only. No Gold Coast location despite the target keyword set focusing on Gold Coast QLD 4216.  
**Fix:** Added Gold Coast QLD 4216 as the primary location in the footer, reordered (Gold Coast > Brisbane > Sydney). Used semantic `<address>` elements for machine-readable NAP consistency. Gold Coast also appears in all schema addresses.

#### 9. No internal cross-linking between service pages

**Before:** Service detail pages were isolated with no links to related services.  
**Fix:** Added "Related Services" section at the bottom of each service detail page with contextual links:

- SBR links to: Voluntary Administration, CVL, Reduce Debt
- VA links to: SBR, CVL, Reduce Debt
- CVL links to: VA, SBR, Close Company

---

### Medium (Fixed)

#### 10. Partner logo alt text too generic

**Before:** Alt text like "CA", "TPA", "Certified Consultant" — too vague for screen readers and image search.  
**Fix:** Updated to descriptive text:

- `"CA"` → `"Chartered Accountants Australia and New Zealand"`
- `"TPA"` → `"Tax Practitioners Board registered"`
- `"MYOB"` → `"MYOB accounting software"`
- `"CPA"` → `"CPA Australia"`
- etc.

---

### Low (Not fixed — recommendations only)

#### 11. No OG image asset

The `layout.tsx` references `/images/business-meeting.webp` as the OG image. This is a 16:9 photo, not a dedicated OG image. Recommended: create a 1200x630px branded OG image at `public/images/og-image.jpg` with the Wynn Advisory logo and a short headline. Ideal for social sharing previews.

#### 12. No `llms.txt` for AI search readiness

Large language models and AI overview tools increasingly crawl `llms.txt` to understand site purpose. Recommended: create `public/llms.txt` describing the business, services, and service areas in plain prose.

#### 13. Video lacks `<track>` for captions

The hero section background video (`hero-video.mp4`) has no caption track. For full WCAG 2.1 compliance, add a `<track kind="captions">` element even if empty (muted background video may be exempt, but declaring it explicitly is best practice).

#### 14. No FAQ schema

The `FAQSection` component contains 8 well-structured FAQ items that are currently unindexed as structured data. Adding `FAQPage` schema would improve AI citation readiness and could generate rich snippets for informational queries. Note: per Google's August 2023 update, FAQ rich results are limited for commercial sites, but the AI citation benefit remains.

#### 15. Blog carousel links to non-existent pages

All 5 blog post `href` values (e.g., `/reduce-company-debt-nsw/`, `/closing-a-business-with-debt-australia/`) point to pages that do not exist in the project. These will generate 404s. Recommended: either create these pages or link to the closest existing service pages until content is published.

#### 16. Page speed optimisation

- Hero section uses a background `<video>` loaded eagerly with no `poster` attribute. Add a `poster="/images/hero-photo.jpg"` to show a frame immediately while the video loads, improving LCP.
- Partner logos use `<img>` tags with no `loading="lazy"` attribute. Adding `loading="lazy"` on below-the-fold images reduces initial page load.
- Blog carousel images have no explicit `width` and `height` attributes, causing layout shift (CLS). Add dimensions to eliminate CLS.

---

## Target Keywords Coverage

| Keyword                                     | Page Targeting                            | Meta Optimised            | In H1/H2 |
| ------------------------------------------- | ----------------------------------------- | ------------------------- | -------- |
| solvency advice company directors Australia | Home, About                               | Yes (desc)                | Partial  |
| voluntary administration Queensland         | /services/voluntary-administration        | Yes (title+desc+keywords) | Yes (H1) |
| small business restructuring Gold Coast     | /services/small-business-restructure      | Yes (title+desc+keywords) | Yes (H1) |
| creditors voluntary liquidation Australia   | /services/creditors-voluntary-liquidation | Yes (title+desc+keywords) | Yes (H1) |
| debt negotiation company directors          | /reduce-debt                              | Yes (title+desc)          | Yes (H2) |
| pre-insolvency advice Gold Coast            | Home, layout                              | Yes (title+desc)          | Partial  |

---

## Local SEO Summary (Gold Coast QLD 4216)

| Signal                          | Status                                          |
| ------------------------------- | ----------------------------------------------- |
| Gold Coast in page titles       | Yes - Home, SBR, VA, CVL, About, Contact        |
| Gold Coast in meta descriptions | Yes - all key pages                             |
| Gold Coast in JSON-LD address   | Yes - primary address                           |
| Gold Coast in footer NAP        | Yes - added as primary location                 |
| QLD in schema areaServed        | Yes                                             |
| Semantic `<address>` elements   | Yes - footer                                    |
| Phone number (click-to-call)    | Yes - `tel:1300052321` in footer + contact page |
| Business hours in schema        | Yes - Mon-Fri 08:30-17:30                       |

---

## Files Created / Modified

| File                                                        | Action                                                           |
| ----------------------------------------------------------- | ---------------------------------------------------------------- |
| `src/app/layout.tsx`                                        | Modified - OG/Twitter/JSON-LD/lang/robots metadata               |
| `src/app/page.tsx`                                          | Modified - metadata export added                                 |
| `src/app/about/page.tsx`                                    | Modified - metadata export added                                 |
| `src/app/services/page.tsx`                                 | Modified - metadata export added                                 |
| `src/app/contact/page.tsx`                                  | Modified - metadata + `<main>` wrapper                           |
| `src/app/close-company/page.tsx`                            | Modified - metadata + `<main>` wrapper                           |
| `src/app/reduce-debt/page.tsx`                              | Modified - metadata + `<main>` wrapper                           |
| `src/app/services/small-business-restructure/page.tsx`      | Modified - metadata + `<main>` + Service JSON-LD + related links |
| `src/app/services/voluntary-administration/page.tsx`        | Modified - metadata + `<main>` + Service JSON-LD + related links |
| `src/app/services/creditors-voluntary-liquidation/page.tsx` | Modified - metadata + `<main>` + Service JSON-LD + related links |
| `src/components/Footer.tsx`                                 | Modified - Gold Coast NAP + `<address>` elements                 |
| `src/components/PartnerLogos.tsx`                           | Modified - descriptive alt text                                  |
| `public/robots.txt`                                         | Created                                                          |
| `src/app/sitemap.ts`                                        | Created - Next.js sitemap API                                    |

---

## Next Actions (Prioritised)

1. **High** - Create a 1200x630px branded OG image at `public/images/og-image.jpg`
2. **High** - Add `poster="/images/hero-photo.jpg"` to the hero `<video>` element (LCP improvement)
3. **Medium** - Create `public/llms.txt` for AI search readiness
4. **Medium** - Add `loading="lazy"` and explicit dimensions to partner/blog images
5. **Medium** - Create the 5 blog post pages or redirect their URLs to existing service pages
6. **Low** - Add `FAQPage` JSON-LD to the FAQ section (AI citation benefit)
7. **Low** - Add `<track kind="captions">` to the hero video
8. **Low** - Submit sitemap to Google Search Console once deployed
