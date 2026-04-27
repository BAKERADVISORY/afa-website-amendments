# NavBar Specification

## Overview

- **Target file:** `src/components/NavBar.tsx`
- **Screenshot:** see desktop hero screenshot
- **Interaction model:** static (fixed position) + hover states

## DOM Structure

```
header (fixed, full-width, z-50)
  div.container (max-w-[1400px] mx-auto flex items-center justify-between px-8)
    a[href="/"] (logo)
      img src="/images/logo-light.svg" alt="Wynn Advisory" h-[37px]
    nav (flex items-center gap-1)
      a × 6 (nav links)
    a[href="#"] (Get Started button, teal pill)
      span "Get Started"
      span "›"
```

## Computed Styles (exact)

### Header wrapper

- position: fixed
- top: 0
- left: 0
- right: 0
- z-index: 50
- background-color: #17243B
- height: 80px
- display: flex
- align-items: center

### Logo

- height: 37px (natural height of SVG)
- width: auto

### Nav links

- color: #FFFFFF
- font-size: 16px
- font-weight: 400
- font-family: Manrope
- padding: 13px 7px
- text-decoration: none
- Active link color: #5ACBBD

### Hover state (nav links)

- color: #0C9488 (transition on hover)

### "Get Started" button

- background-color: #0C9488
- color: #FFFFFF
- border-radius: 50px
- padding: 12px 20px 11px
- font-size: 16px
- font-weight: 700
- font-family: Manrope
- display: flex
- align-items: center
- gap: 8px
- text-decoration: none
- transition: background 0.2s ease

### Hover state (button)

- background-color: #20BBAE

## Nav Links (verbatim)

- Home (href="/", active)
- About (href="/about/")
- Close Company (href="/close-company/")
- Reduce Debt (href="/reduce-debt/")
- Services (href="/services/") — has dropdown chevron
- Contact (href="/contact/")

## Assets

- Logo: `public/images/logo-light.svg`

## Responsive Behavior

- **Desktop (1440px):** full nav shown, hamburger hidden
- **Mobile (< 768px):** hamburger menu icon shown, nav links hidden
- Mobile nav: opens as overlay/off-canvas (simplified: just toggle visibility)

## Notes

- "Services" link has a dropdown arrow in original — can be simplified to static link
- The "Get Started" button has `›` arrow text or a right-arrow icon
