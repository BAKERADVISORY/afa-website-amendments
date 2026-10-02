# Australian Financial Advisory website

The marketing website for Australian Financial Advisory, live at
`https://www.australianfinancialadvisory.com.au/`.

- Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS v4
- Static export (`output: 'export'`), hosted on Cloudflare Pages
- **A push to `main` auto-deploys production. Work on a branch and open a PR.**

## Commands

```bash
npm install     # only when node_modules is missing
npm run dev     # local dev server
npm run build   # static export to out/
npm run lint    # ESLint
```

## Structure

```
src/
  app/              # one folder per route; canonical URLs have no trailing slash
  components/       # shared blocks (ConsultationCTA is the contact target on inner pages)
  lib/site.ts       # site-wide facts and JSON-LD builders (NAP, entity wording, schema)
public/
  robots.txt, llms.txt, _redirects, images/
scripts/
  optimise-hero.mjs # regenerate responsive hero images
docs/research/      # historical research from the original template build
```

See `AGENTS.md` for the compliance rules that apply to any copy change and the
list of approved wording sources.

## History

The repo began as a template clone (April 2026) and was rebuilt as the AFA site.
The remaining template research lives in `docs/research/` for reference only.
