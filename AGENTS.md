<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes â€” APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Website Reverse-Engineer Template

## What This Is

A reusable template for reverse-engineering any website and rebuilding it as a faithful clone using Claude Code. The Next.js + shadcn/ui + Tailwind v4 base is pre-scaffolded â€” just fill in TARGET.md and run `/clone-website`.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (default â€” will be replaced/supplemented by extracted SVGs)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel

## Commands

- `npm run dev` â€” Start dev server
- `npm run build` â€” Production build
- `npm run lint` â€” ESLint check

## Code Style

- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles

- **Pixel-perfect emulation** â€” match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation phase** â€” match 1:1 first, customize later
- **Real content** â€” use actual text and assets from the target site, not placeholders
- **Beauty-first** â€” every pixel matters

## Project Structure

```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Downloaded images from target site
  videos/           # Downloaded videos from target site
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download scripts
```

## MOST IMPORTANT NOTES

- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.

@docs/research/INSPECTION_GUIDE.md
@TARGET.md

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
