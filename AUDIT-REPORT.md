# Site Audit Report

Date: 2026-04-11

---

## AUDIT 1 - Broken Links / 404 Errors

**Fixed.**

Three internal links pointed to pages that did not exist. All three now have pages:

| Page | Status |
|------|--------|
| `/blog/` | Created — placeholder "coming soon" page |
| `/privacy-policy/` | Created — placeholder Privacy Policy |
| `/website-terms-conditions/` | Created — placeholder Terms & Conditions |

---

## AUDIT 2 - Wynn Advisory References

**Fixed.** All references to Wynn / Wynn Advisory / wynnadvisory removed.

| File | What changed |
|------|-------------|
| `src/app/layout.tsx` | Title, OG title, Twitter title, OG siteName, OG image alt, JSON-LD alternateName, JSON-LD sameAs URL, JSON-LD WebSite name |
| `src/components/ComparisonSection.tsx` | `wynnValue` property renamed to `ourValue`; "wynn advisory" label text; "wa" badge abbreviation changed to "afa" |
| `src/components/Footer.tsx` | LinkedIn href changed from `wynn-advisory` company URL to `australian-financial-advisory` |
| `src/components/WhyChooseSection.tsx` | "wynn advisory" section label; "WA" background watermark changed to "AFA" |

---

## AUDIT 3 - Placeholder Checks

**Not removed - listed here for manual input.**

These are grey placeholder boxes (grey rectangles with a label) sitting in page layouts. Each needs a real photo before the site goes live.

| File | Component | Label | Notes |
|------|-----------|-------|-------|
| `src/app/about/page.tsx` line 160 | `PlaceholderImage` | "Team Photo" | Right column of the stats section on the About page. Replace with a real team photo. |
| `src/app/close-company/page.tsx` line 182 | `PlaceholderImage` | "Company Closure" | Right column of the hero content section. Replace with a relevant image. |
| `src/app/services/creditors-voluntary-liquidation/page.tsx` line 334 | `PlaceholderImage` | "CVL Benefits" | Right column of the benefits section. Replace with a relevant image. |
| `src/app/services/page.tsx` line 252 | Inline div (40x40 teal square) | Icon placeholder | Each service card has a solid teal square in place of an icon or illustration. Replace with an actual icon or SVG. |

---

## AUDIT 4 - Navigation Consistency

**Fixed.**

The footer menu included "Blog" but the NavBar did not. Inconsistency resolved:

- Blog added to `src/components/NavBar.tsx` (between Services and Contact)
- Blog placeholder page created at `/blog/`
- NavBar and footer menu now both contain: Home, About, Close Company, Reduce Debt, Services, Blog, Contact

---

## AUDIT 5 - Build Test

**PASSED - clean build, zero errors.**

```
Route (app)
/ - static
/about - static
/blog - static
/close-company - static
/contact - static
/privacy-policy - static
/reduce-debt - static
/services - static
/services/creditors-voluntary-liquidation - static
/services/small-business-restructure - static
/services/voluntary-administration - static
/sitemap.xml - static
/website-terms-conditions - static
```

16 pages generated. TypeScript check passed. No lint errors from the build.

---

## Ready to Push to GitHub?

**YES** - with the following caveats Jonathan should be aware of before launch:

1. The four PlaceholderImage components listed in Audit 3 need real photos before the site looks complete.
2. The LinkedIn and Facebook social links in the footer use placeholder or generic URLs - update to the real company social profiles.
3. The contact form in the footer does not submit anywhere - form action / API integration is still needed.
4. The Privacy Policy and Terms & Conditions pages contain generic placeholder legal text - have a solicitor review or replace with the actual company documents before going live.
