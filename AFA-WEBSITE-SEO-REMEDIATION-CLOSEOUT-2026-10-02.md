version: v1.0.0
date: 2026-10-02 AEST
status: PASS (branch only, not pushed, not deployed)

# AFA website SEO, AI-discoverability, accessibility and conversion remediation (2026-10-02)

Prepared by Claude Code Fable 5.1, single agent, no subagents, under Jonathan's
builder prompt of 2026-10-02 authorising implementation of the audit filed at
`social-media-kit\05_BUSINESS_PROFILES\afa\marketing\05_LANDING_PAGES\AFA-WEBSITE-SEO-AI-DISCOVERABILITY-AUDIT-v1_0_0.md`.

## 1. Outcome

**PASS.** All safe fixes from the audit's Phase 1, Phase 2 (copy, within the
approved sources) and Phase 3 are implemented on branch
`codex/afa-seo-ai-discoverability`. Build, lint and the post-build verification
script all pass. Nothing was pushed. Nothing was deployed.

## 2. Branch and commit

- Branch: `codex/afa-seo-ai-discoverability` (from `main` at `a3f69b7`).
- Commit hash: recorded in the PR description and the session closeout (this
  file is part of the same commit).
- **Deployment warning: a merge or push to `main` auto-deploys production.**
  Review on the branch, then merge only with explicit approval.

## 3. Files changed (summary)

New: `src/lib/site.ts`; `src/components/` `JsonLd`, `Breadcrumbs`,
`SectionLabel`, `PageHero`, `ConsultationCTA`, `FaqList`, `PageDisclaimer`,
`RelatedLinks`, `CanCannot`, `ContentSection`; `public/llms.txt`,
`public/_redirects`, `public/images/og-image.jpg`,
`public/images/hero-city-{960,1440,1920}.{avif,webp}`;
`scripts/optimise-hero.mjs`, `scripts/verify-out.mjs`; this file.

Rewritten: `src/app/layout.tsx`, `page.tsx`, `sitemap.ts`, `globals.css`,
every route under `src/app/` (about, contact, services, the three
`services/*` explainers, director-penalty-notice, reduce-debt,
restructure-your-business, administration-and-liquidation, close-company,
privacy-policy, website-terms-conditions); `src/components/` `NavBar`,
`Footer`, `HeroSection`, `CTABanner` (form), `FAQSection`, `DPNSection`,
`HowItWorksSection`, `WhyChooseSection`, `AboutServicesSection`,
`TeamSection`; `public/robots.txt`; `AGENTS.md`, `README.md`, `TARGET.md`.

Removed: `PartnerLogos.tsx`, `ComparisonSection.tsx`,
`TestimonialsSection.tsx`, `BlogCarousel.tsx`, `public/CITY.jpg` (5.7 MB),
`public/images/hero-video.mp4` (3.2 MB), `public/images/partners/*`,
`public/images/blog/*`. All recoverable from git history.

Untouched: the GTM/GA4 tracking block in `layout.tsx` (a comment documents
the consent blocker), the Formspree endpoint and field names,
`next.config.ts` (`output: 'export'` kept), `docs/research/*`.

## 4. SEO fixes completed

- Canonical URLs on every page now match the served form (no trailing slash;
  home resolves to the origin, which is URL-equivalent to `/`).
- Sitemap lists 14 URLs in the served form with real content dates;
  `changefreq`/`priority` removed; `/contact` added.
- Every internal link uses the served form (0 trailing-slash hrefs remain).
- Title template changed to `%s | AFA`; every title is 20 to 55 characters,
  keyword first; home, About and Contact use absolute titles.
- Descriptions rewritten (free initial consultation, assessment and referral).
- `keywords` meta removed.
- Breadcrumbs (visible, with `BreadcrumbList`) on every inner page.
- `public/_redirects`: 301s for `/credit-repair-and-funding*` (route removed
  2026-08-11) and `/blog*` (placeholder route from April 2026, no longer
  built). No other legacy routes were confirmed.
- Open Graph and Twitter now use a real 1200x630 branded image.

## 5. AI-discoverability fixes completed

- One approved entity description used in schema, home, About and `llms.txt`,
  with the entity-status sentence (not a registered insolvency practitioner,
  credit licensee, tax agent, registered liquidator, AFSL holder or law firm).
- "The short answer" direct-answer block and a "What we can and cannot do"
  block on every options and explainer page; "What we can do / do not do" on
  the home page.
- Home FAQ converted from client-only accordion to static `details/summary`;
  all answers are in the HTML. Every inner page has a visible FAQ block.
- `FAQPage` schema is generated from the same array that renders the visible
  FAQ, so markup and schema cannot drift; the verifier cross-checks every
  question and answer against the page body.
- `public/llms.txt` added (entity summary, how it works, key page list,
  policies, general-information line).
- `robots.txt` now states an explicit allow for GPTBot, OAI-SearchBot,
  ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended
  and Applebot-Extended (operator may flip any to Disallow).
- Visible "Content last updated: 2 October 2026" on every YMYL page.

## 6. Accessibility fixes completed

- Skip link to `#main` on every page; `<main id="main">` on every page.
- Labelled landmarks: `nav aria-label="Primary"`, `"Mobile"`, `"Footer menu"`,
  `"Footer explainers"`, `"Breadcrumb"`; sections carry `aria-labelledby`.
- Global `:focus-visible` outline; inline `outline: none` removed from form
  fields; nav and button hover states mirrored on keyboard focus.
- Mobile menu: `aria-expanded`, `aria-controls`, `hidden`, Escape to close,
  44 px toggle target; menu is a real `nav`.
- Decorative watermark text, icons and dividers are `aria-hidden`.
- Heading order fixed (footer `h2`, section `h2`/`h3`); single `h1` per page.
- Contrast: eyebrow labels on navy now `#DEDCEC`; footer legal and small text
  lifted; `#999999` hints replaced with `#666666` or stronger.
- `prefers-reduced-motion` honoured (animations and smooth scroll).
- Inaccurate alt text fixed (team photos described; decorative photos
  `alt=""`); logo images carry width/height.
- Form: `autocomplete`, `inputmode`, `aria-required`, a `role="status"`
  `aria-live` region for sending/sent/error, inline error text instead of
  `alert()`, unique ids via `useId` so the form can appear on any page.

## 7. Conversion fixes completed

- `id="contact"` now exists on every page that links to `#contact` (home hero
  form; `ConsultationCTA` band with the form on all 11 inner pages).
- Real `/contact` page (canonical NAP block, phone, email, service area,
  availability line, form) replaces the client-side redirect shell.
- "Free initial consultation" used consistently across every CTA, the form
  heading and button, the thank-you state and the FAQ.
- "What the free initial consultation covers" (approved wording only) sits
  beside the form on every inner page.
- Nav "Get Started" became "Free consultation" linking to `/contact`; About
  and Contact added to primary and mobile navigation.
- No new lead-capture fields. The existing situation dropdown was relabelled
  to self-selected situations; field names are unchanged.

## 8. Bugs and performance fixes completed

- Hero: 5.7 MB JPEG replaced by responsive AVIF (44/95/159 KB) and WebP
  (64/145/249 KB) at 960/1440/1920 px in a `<picture>` with
  `fetchpriority="high"` and a `<link rel="preload" as="image">` emitted from
  the component. Total `out/images` weight is now 0.99 MB including all
  variants.
- Dead/risky components and their assets removed (see section 3).
- All grey placeholder boxes and the solid-square "icons" removed.
- Broken OG image path fixed.
- Lint: from a 27-error / 8-warning baseline to 0 errors / 2 warnings (both
  on the untouched tracking block, which must not change).
- Static export preserved; 18 routes prerender; no server features added.

## 9. Schema, robots, sitemap, llms changes

- Site-wide `FinancialService`/`LocalBusiness` graph replaced by a
  `ProfessionalService` node (one address matching the canonical NAP, service
  area, audience, `knowsAbout`, pricing-free offer catalogue, `sameAs` with
  LinkedIn and the ABN Lookup record) plus `WebSite`. `priceRange`, the
  unconfirmed Brisbane/Sydney street addresses and the unconfirmed opening
  hours were removed. Zero `FinancialService` strings remain in `out/`.
- `Service` schema (assessment and referral) on the five AFA options pages;
  `WebPage` with `dateModified` on the three explainers, hub, home;
  `ContactPage` on contact; `Person` for the two team members on About;
  `BreadcrumbList` on every inner page; `FAQPage` wherever a FAQ is visible.
- `robots.txt`, `sitemap.xml`, `llms.txt`, `_redirects` as described above.

## 10. Tests run and results

| Check | Result |
|---|---|
| `npm run build` (Next 16.2.1, Turbopack, static export) | PASS, 18 routes prerendered |
| `npm run lint` | 0 errors, 2 warnings (tracking block, intentionally untouched) |
| `node scripts/verify-out.mjs` | PASS: 14 HTML pages; 0 `FinancialService`; canonical form on every page; 14 sitemap URLs all resolve to built files, no trailing slash, no changefreq/priority; `id="contact"` present on every page that links `#contact` (12 of 14 pages carry the form); no `CITY.jpg`; `llms.txt`, `_redirects`, `robots.txt`, `og-image.jpg`, hero assets present; every FAQPage question and answer found in the visible body; `main#main`, skip link, single `h1`, title on every page; no `outline:none`; home preload and `fetchpriority` present; contact page has a form |
| Em/en dash scan of `src`, `public` text, docs | 0 |
| Banned-phrase scan ("we negotiate with the ATO", "we protect", "we clear", "handle every aspect", statistics, testimonials, inherited clone claims, "Theme Press") | clear; the only "guarantee" hits are explicit disclaimers ("we do not guarantee") |
| Lighthouse, axe, Playwright | NOT RUN: none is installed in this repo or on PATH (Playwright exists only inside an unrelated Python virtual environment). Fallback evidence: the static-output checks above plus the lint pass. Recommended on the preview deploy before merge. |
| Live HTTP checks | NOT RUN: nothing deployed from this branch. |

Node 24.14.0, npm 11.9.0. No `npm install` was needed (node_modules present,
lockfile unchanged). No package was added or upgraded. No local server was
started, so the port registry was not consulted.

## 11. Search Console sitemap submission

**Operator action required.** No Search Console access exists in this runtime
and no credential work was attempted. After the branch is merged and deployed:

1. Open Google Search Console for `www.australianfinancialadvisory.com.au`.
2. Sitemaps, enter `https://www.australianfinancialadvisory.com.au/sitemap.xml`,
   Submit (resubmitting the same URL is fine; the content changed).
3. URL Inspection on `/`, `/director-penalty-notice`, `/contact`, request
   indexing.
4. Repeat the sitemap submission in Bing Webmaster Tools.

## 12. Remaining blockers requiring Jonathan, Jason or operator decision

1. **Consent/tracking (HARD STOP 3).** GTM and GA4 still fire without consent.
   Untouched by design. Needs a consent-management decision.
2. **Cloudflare apex over http.** `http://australianfinancialadvisory.com.au/`
   returns a Cloudflare 522 (audit T-04). Fix is an edge redirect rule and
   "Always Use HTTPS" in the Cloudflare zone, then HSTS. Not a code change.
3. **Statutory detail on explainers.** General descriptions of SBR, VA, CVL
   and DPN mechanics carried over from the live site were kept in neutral
   wording; specific figures (dollar thresholds, day counts beyond the
   21-day DPN window, the former "4-6 weeks / 0-36 months" tiles) were
   removed because no approved source records them. If Jason wants exact
   statutory figures on the explainers, supply the source and they can be
   restored with a citation.
4. **DPN statistics removed.** The 84,000 / $5.5 billion / 26,702 figures had
   no recorded source. Restore only with a cited ATO source.
5. **Partner/credential logos removed.** Restore any mark only with approved
   source text proving AFA itself may display it.
6. **Melbourne removed** from the service-area line per the approved line
   ("Gold Coast, Brisbane, Sydney, Australia-wide."). Reinstate only if the
   approved line changes.
7. **Brisbane and Sydney street addresses removed** from schema and footer
   (UNKNOWN in the business profile). Reinstate when confirmed.
8. **Opening hours** omitted from schema (unconfirmed).
9. **"Website by Theme Press"** footer credit removed: it was inherited from
   the cloned template's footer spec. Reinstate only if it is a real AFA
   arrangement.
10. **Privacy Policy content** still has the gaps recorded in the compliance
    register (cookies/analytics, overseas storage, broker disclosure). Text
    unchanged; separate thread.
11. **Jason's personal CA and tax-agent registrations** are not displayed
    anywhere beyond "Chartered Accountant" in his role line. If they should
    be shown, use the wording in `licensing-boundaries` (personal, held
    through Trades HQ Pty Ltd, engaged separately).
12. **Social profile URLs** beyond LinkedIn are not in `sameAs` (none
    confirmed in approved files).
13. **AI-crawler policy** defaults to allow-all; flip any agent to Disallow
    if preferred.
14. **Visual review** of the rewritten pages on a preview deploy before merge
    (no browser rendering was possible in this run).

## 13. Deployment warning

Merging or pushing this branch to `main` **will deploy production** via the
repository's push-triggers-deploy mechanism (twice-proven in prior runs). Do
not merge without explicit approval. Preferred path: open a PR from
`codex/afa-seo-ai-discoverability`, review the Cloudflare Pages preview build
of the branch, run Lighthouse and axe on the preview, then merge.

Subagents used: none.
