# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static
- **Height:** 95vh minimum

## DOM Structure
```
section (relative, min-h-[95vh], overflow-hidden)
  div.bg-layer (absolute inset-0, hero photo + dark overlay)
    img src="/images/hero-photo.jpg" (absolute, cover the full section)
    div.overlay (absolute inset-0, bg: rgba(23,36,59,0.78))
  div.content (relative z-10, flex flex-col justify-center, px-16 pt-20 pb-32, max-w-[780px])
    h1
      span.line1 "You built the business."
      br
      span.line2-teal "We'll help you" (teal underline)
      " protect it."
    p.subtext "Navigate complex business challenges with confidence..."
    a.cta-btn "Get A Free Consultation →"
    ul.trust-badges (flex, gap-6, mt-6)
      li × 3 (icon + text)
  div.wave-bottom (absolute bottom-0 left-0 right-0)
    svg (wave shape, white fill, width 171%, height 140px)
```

## Computed Styles (exact)

### Section wrapper
- position: relative
- min-height: 95vh
- overflow: hidden
- background-color: #17243B

### Background image
- position: absolute
- inset: 0
- object-fit: cover
- width: 100%
- height: 100%
- opacity: ~0.45 (dark navy overlay on top makes it appear dark)

### Dark overlay
- position: absolute
- inset: 0
- background-color: rgba(23, 36, 59, 0.75)

### Content container
- position: relative
- z-index: 10
- padding: ~120px 64px 120px 80px (pt accounts for fixed header)
- max-width: 780px
- display: flex
- flex-direction: column
- gap: 24px

### H1
- font-family: Manrope
- font-size: 52px (desktop)
- font-weight: 700
- line-height: 1.15
- color: #FFFFFF

### H1 teal span ("We'll help you")
- color: #5ACBBD
- text-decoration: underline
- text-underline-offset: 4px

### Subtext paragraph
- font-size: 18px
- color: rgba(255,255,255,0.85)
- line-height: 1.6
- max-width: 600px

### CTA Button
- display: inline-flex
- align-items: center
- gap: 10px
- background-color: #0C9488
- color: #FFFFFF
- border-radius: 50px
- padding: 14px 28px
- font-size: 16px
- font-weight: 700
- width: fit-content

### Trust badges list
- display: flex
- flex-direction: row
- gap: 32px
- list-style: none
- margin-top: 8px

### Trust badge item
- display: flex
- align-items: center
- gap: 8px
- color: #FFFFFF
- font-size: 14px
- opacity: 0.9

### Wave (bottom shape divider)
- position: absolute
- bottom: -1px
- left: -35%
- width: 171%
- height: 140px
- fill: #FFFFFF
- overflow: visible

## Text Content (verbatim)
- H1 line 1: "You built the business."
- H1 teal: "We'll help you"
- H1 line 3: "protect it."
- Subtext: "Navigate complex business challenges with confidence. Our expert advisory services help you make informed decisions, reduce financial risk, and achieve sustainable growth."
- Button: "Get A Free Consultation →"
- Badge 1: 🛡 "Trusted Australia wide"
- Badge 2: 👁 "Confidential & Private"
- Badge 3: 👥 "Experienced advisers"

## Assets
- Hero photo: `public/images/hero-photo.jpg`
- Wave: inline SVG (white wave shape, see note)

## Wave SVG
Use a simple wave/curve SVG path with white fill:
```svg
<svg viewBox="0 0 1440 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,70 C360,140 1080,0 1440,70 L1440,140 L0,140 Z" fill="#ffffff"/>
</svg>
```

## Responsive Behavior
- **Desktop (1440px):** content left-aligned with large H1, photo shows on right
- **Mobile (390px):** content stacked, H1 ~32px, full-width, bottom padding increased

## Notes
- The photo shows a smiling woman in white shirt with colleagues behind her
- The CTA opens a popup modal in the original — use a `#contact` hash scroll in clone
- Trust badge icons are small shield/eye/people SVG icons (can use Lucide: Shield, Eye, Users)
