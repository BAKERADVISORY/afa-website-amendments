version: v1.0.0
date: 2026-09-21 AEST
status: PASS

# AFA website ACN fix report (2026-09-21)

Prepared by Claude Code Sonnet, single agent, no subagents, under Jonathan's AUTONOMOUS message of
2026-09-21 instructing correction of the AFA ACN mismatch and safe local website issues in this repository.
No deploy, no push, no live enquiry-form submission, no provider/DNS/analytics mutation, no email or message
sent. `git add`/commit/push were not run (not authorised in this message).

## Correct identity (per operator instruction)

Australian Financial Advisory Pty Ltd, ABN 73 680 451 129, ACN 680 451 129.

## Files changed

1. `src/components/Footer.tsx` line 262 - ACN corrected.
2. `src/components/TeamSection.tsx` line 87 - role typo corrected.

No other file was modified.

## Fix 1: wrong ACN

**Before (grep, this session):**

```
src\components\Footer.tsx:262:            <span>ACN 688 456 788</span>
```

Also present in `docs\research\components\footer.spec.md` (lines 47 and 269), but that file records
"Wynn Advisory Pty Ltd" / "ACN 688 456 788" as a description of the original reverse-engineered target site
(see Root-cause finding below), not as AFA's own identity - it does not refer to AFA's ACN, so it was left
unchanged per the instruction's scope ("Replace only where it refers to AFA's ACN").

**After (grep, this session):**

```
src\components\Footer.tsx:262:            <span>ACN 680 451 129</span>
```

**Post-fix repository-wide scan (src/):**

- `688 456 788` / `688456788`: 0 matches.
- `680 451 129`: 5 matches, all correct (Footer.tsx ACN line, plus ABN lines in Footer.tsx,
  privacy-policy/page.tsx x1, website-terms-conditions/page.tsx x2).
- `73 680 451 129` (ABN): 4 matches, all unchanged and correct - confirms the ABN was never touched by the
  ACN edit.

**Post-build static export scan (`out/`, after `npm run build`):**

- `688 456 788` / `688456788`: 0 matches.
- `680 451 129`: 79 matches (expected - the value now appears on every prerendered static page's footer).

## Fix 2: typo

**Before:** `src\components\TeamSection.tsx:87` - `role: 'Advisor and Negotiations',`
**After:** `src\components\TeamSection.tsx:87` - `role: 'Advisory and Negotiations',`

**Post-fix scan:** 0 matches for "Advisor and Negotiations" anywhere in `src/`; 1 match for the corrected
"Advisory and Negotiations" in source, 5 matches in the built static export (one per page that renders the
team section).

## Root-cause finding for the wrong ACN (strengthened this session)

This session found stronger evidence than the prior hedged hypothesis in
`13-WEBSITE-CORRECTION-SPEC-v1_1_1.md`. `docs\research\components\footer.spec.md` (a research artifact
produced during this repo's original site-cloning process, per `TARGET.md` and `AGENTS.md`) records the
original scraped footer content verbatim as:

```
span "© 2026 Wynn Advisory Pty Ltd"
span "ACN 688 456 788"
```

`TARGET.md` confirms this repository was originally cloned from `https://www.wynnadvisory.com.au/` "for
portfolio/template purposes." `git log --oneline --all -S "688 456 788" -- src/components/Footer.tsx` still
shows exactly one commit, `b6bd5f8`, as the point this string entered `Footer.tsx`. Taken together, this is
now a well-supported (not merely coincidental) explanation: the builder of that commit rebranded the company
name in `Footer.tsx` from "Wynn Advisory Pty Ltd" to "Australian Financial Advisory Pty Ltd" but did not
update the adjacent ACN, leaving Wynn Advisory's real ACN sitting next to AFA's real ABN and company name.
This is reported as background for Jason, not as a change made to the historical research file, which
correctly documents the original target site and was left untouched.

## Claims and items checked, status per item (correction spec items 3-9)

All items below required a legal/compliance or content decision beyond a mechanical text substitution, so
none were changed this run, per the instruction ("If a claim needs Jason/legal review rather than a
mechanical fix, mark it BLOCKED with the exact file and line").

| # | Item | Status | File / line |
|---|---|---|---|
| 3 | "Negotiate and consolidate ATO debt" / "ATO payment plan negotiation" claims | BLOCKED - needs Jason/legal review of claim accuracy | `src/components/AboutServicesSection.tsx:109,111`; `src/app/reduce-debt/page.tsx:205` |
| 4 | Overclaiming headings ("options narrow", "we help you avoid that", insolvency-record-avoidance claims) | BLOCKED - needs Jason/legal review | `src/components/FAQSection.tsx:14,29`; `src/components/HeroSection.tsx:76`; `src/components/WhyChooseSection.tsx:70,72` |
| 5 | Partner/credential logo strip (Tax Practitioners Board, CPA Australia, Chartered Accountants ANZ, and others) | BLOCKED - needs Jason to confirm which credentials/partnerships actually apply to AFA; same pattern of risk as the ACN defect (likely inherited from the Wynn Advisory clone, not verified as AFA's own) | `src/components/PartnerLogos.tsx:1-19` |
| 6 | Enquiry form collects ABN and free-text "situation" field | BLOCKED - data-collection/privacy design decision, not a text fix | `src/components/CTABanner.tsx` (form fields lines 24-31, 152-169, 224-242); posts to `https://formspree.io/f/mrejjazr` |
| 7 | GTM/GA4 fire unconditionally with no consent gate | BLOCKED - needs a consent-management decision (which CMP, which regions) before any code change | `src/app/layout.tsx:176-206` |
| 8 | Privacy Policy / Terms placeholder text | Checked this session - no placeholder/bracket/TODO markers found; "Governing Law" clause is filled in (Queensland, Australia). No fix needed. | `src/app/privacy-policy/page.tsx`; `src/app/website-terms-conditions/page.tsx` |
| 9 | `/contact/` redirects to `/` | BLOCKED - confirmed present (`redirect('/')` in `src/app/contact/page.tsx`); whether this is intentional (funnelling contact traffic to the homepage discovery-call form) or should be a dedicated page is a content decision for Jason, not a mechanical fix | `src/app/contact/page.tsx` |

Item 10 (live deploy provenance) is out of scope for this run - no live fetch was performed, per the
instruction's no-live-action constraint.

## Commands run

```
git status --porcelain=v1
git rev-parse HEAD
git log -1 --format="%H %ci"
grep -r "688 456 788|688456788" (repo, then src/, then out/)
grep -r "680 451 129" (src/, then out/)
grep -r "73 680 451 129" src/
grep -r "Advisor and Negotiations" (src/, then out/)
grep -r "Advisory and Negotiations" (src/, then out/)
git log --oneline --all -S "688 456 788" -- src/components/Footer.tsx
npm install
npm run lint
npm run build
git status --porcelain=v1 (post-build, confirms out/ and node_modules are gitignored)
```

## Build/lint result

- `npm install`: succeeded (657 packages; dependencies had never been installed in this repo before this
  session - `node_modules/` did not exist).
- `npm run lint`: FAILED (exit 1) - 27 pre-existing errors, 8 pre-existing warnings. All are `<a>`-vs-`Link`
  navigation rule violations, `<img>`-vs-`Image` warnings, and one unused-import warning, spread across
  files this session did not touch (`about/page.tsx`, `administration-and-liquidation/page.tsx`,
  `close-company/page.tsx`, `director-penalty-notice/page.tsx`, `reduce-debt/page.tsx`,
  `restructure-your-business/page.tsx`, `services/*`, `NavBar.tsx`, `DPNSection.tsx`, `FAQSection.tsx`,
  `BlogCarousel.tsx`, `PartnerLogos.tsx`, `WhyChooseSection.tsx`). `TeamSection.tsx` has one pre-existing
  `<img>` warning unrelated to the role-text line this session edited. These are pre-existing lint failures,
  not introduced by this run's two edits.
- `npm run build`: PASSED (exit 0) - Next.js 16.2.1 Turbopack build compiled successfully, TypeScript check
  passed, all 18 routes prerendered as static content, static export written to `out/`. The ACN and typo
  fixes are confirmed present and correct in that built output (see scan counts above).

**Conclusion: the ACN source fix and typo fix are both fully verified** - present in source, present in the
successfully built static output, and the pre-existing lint failures do not affect or obscure that
verification.

## Confirmation of scope discipline

- No deploy was run or attempted.
- No `git add`, `git commit`, or `git push` was run.
- No live enquiry-form submission was made.
- No DNS, hosting, Formspree, GTM, GA, or other provider setting was changed.
- No email or message was sent to anyone.
- `npm install` and `npm run build` were run as non-destructive local verification only; `out/` and
  `node_modules/` are both gitignored and were not committed. Temporary lint/build log files created during
  this session were deleted before closeout; no process or shell was left running.
- All work stayed inside `C:\Users\moy_i\projects\afa-website-amendments`.

Subagents used: none.

## PASS / BLOCKED / FAIL

**PASS.**

- Wrong ACN absent from repository source (`src/`) and from the built static export (`out/`).
- Correct ACN (680 451 129) present everywhere AFA's ACN is displayed.
- ABN (73 680 451 129) unchanged and correct in all three locations.
- "Advisor and Negotiations" typo fixed to "Advisory and Negotiations".
- This closeout report written at `C:\Users\moy_i\projects\afa-website-amendments\AFA-WEBSITE-ACN-FIX-REPORT-2026-09-21.md`.
- No live action occurred.
- Seven other correction-spec items (3-7, 9) remain correctly BLOCKED pending Jason/legal review, with exact
  file/line references above; item 8 checked clean.
