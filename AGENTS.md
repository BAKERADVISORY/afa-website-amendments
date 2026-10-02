<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Australian Financial Advisory website

## What this is

The live marketing website for Australian Financial Advisory (AFA), served at
`https://www.australianfinancialadvisory.com.au/`. Next.js 16 App Router,
React 19, TypeScript strict, Tailwind CSS v4, static export (`output: 'export'`
in `next.config.ts`). Hosting is Cloudflare Pages.

## Deployment warning

**A push to `main` auto-deploys production.** Never push to `main` without an
explicit, current instruction from the operator. Work on a branch and open a
pull request. Do not add server features, API routes, middleware, or runtime
rewrites: they do not work in a static export.

## Compliance rules for any copy change

AFA is an assessment-and-referral advisory. It is not a registered insolvency
practitioner, credit licensee, tax agent, registered liquidator, AFSL holder,
or law firm. Copy must never imply AFA performs licensed work. Approved
wording sources (outside this repo):

- `afa-project\09_MARKETING_AND_SOCIAL\google-business-profile-content-v1.0.2.md`
- `social-media-kit\05_BUSINESS_PROFILES\afa\approved-copy.md`
- `social-media-kit\05_BUSINESS_PROFILES\afa\compliance-layer.md`
- `afa-project\02_COMPLIANCE_AND_RISK\licensing-boundaries-v1.0.6.md`
- `afa-project\09_MARKETING_AND_SOCIAL\citation-targets-v1.0.2.md` (canonical NAP)

No pricing, no outcome claims, no statistics without a cited source, no
testimonials or case studies, no "we negotiate with the ATO", "we protect",
"we clear", "we handle every aspect". Use "free initial consultation". Facts not
in an approved source are UNKNOWN and are omitted. Australian English, no em
dashes.

## Where things live

- `src/lib/site.ts`: every site-wide fact and the structured-data builders.
  Change NAP, service area, entity wording and schema here, nowhere else.
- `src/components/`: shared blocks. `ConsultationCTA` is the single contact
  target (`id="contact"`) on every inner page; `HeroSection` carries it on the
  home page.
- `src/app/`: one folder per route. Canonical URLs have no trailing slash,
  matching what the host serves.
- `public/robots.txt`, `public/llms.txt`, `public/_redirects`,
  `src/app/sitemap.ts`: crawl and discovery surfaces.
- `scripts/optimise-hero.mjs`: regenerates the responsive hero images with
  the sharp build that ships with Next.js.

## Known blocker, do not touch

`src/app/layout.tsx` loads GTM and GA4 without a consent mechanism. Recorded as
a compliance hard stop in `afa-project` and awaiting an operator decision on a
consent-management platform. Do not change the tracking block.

## Commands

- `npm run dev`, `npm run build`, `npm run lint`

## Truth Mode Deployment Gate (Cloudflare)

If Jonathan says "Truth Mode", deployment guidance must follow this gate.

- Never recommend build settings before file verification.
- Required read-only checks first: package.json, next.config.ts|js|mjs, wrangler.toml (if present), and route type scan (src/app, pages, API routes, middleware).
- Return one path only: NEXTJS_STATIC_EXPORT or NEXTJS_ADAPTER or STATIC_HTML.
- If evidence is incomplete or conflicting, return BLOCKED: <single conflicting field>.
- Never claim "done" without a PROOF BLOCK.

### Cloudflare Path Rules

- NEXTJS_STATIC_EXPORT only if next.config.\* includes output: "export" and build produces out/.
- NEXTJS_ADAPTER if dynamic/server features exist or output: "export" is absent and SSR is required.
- STATIC_HTML only when repo is plain HTML/CSS/JS (no Next.js dependency).

### Required Output Contract

For any deployment recommendation, include:

[PROOF BLOCK]

- ACTION:
- STATUS: VERIFIED | NOT EXECUTED | UNKNOWN | BLOCKED
- TOOL:
- EVIDENCE:
- ARTIFACT ID:
- SOURCE TYPE: tool_output | user_input | inference
- NEXT SAFE STEP:

### Consensus Rule

Before implementation, both Claude AI and Claude Code must return the same one-line verdict (AGREE or BLOCKED). If they disagree, no changes.
