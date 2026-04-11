# BlogCarousel + CTABanner + PartnerLogos Specification

## Overview
Three separate sections bundled in one file since they're relatively simple.

## 1. BlogCarousel
- **Target file:** `src/components/BlogCarousel.tsx`
- **Interaction model:** click carousel (prev/next arrows)
- **Background:** #FFFFFF

### DOM Structure
```
section (white bg, py-20)
  div.container (max-w-[1200px] mx-auto px-8)
    h2 "Latest from our <teal>Blog</teal>"
    div.carousel-wrapper (relative)
      div.slides (grid 3 cols or flex overflow-hidden)
        BlogCard × 3 (visible at once from 5+ total)
          a[href] (link wrapping card)
            div.card-img (aspect-video, bg-cover)
            div.card-body (p-4)
              h3.title (dark text)
      button.prev (left arrow)
      button.next (right arrow)
```

### Computed Styles

#### H2
- font-size: 38px
- font-weight: 700
- color: #383838
- text-align: center
- margin-bottom: 48px

#### H2 teal span
- color: #5ACBBD

#### Blog card (link container)
- display: block
- border-radius: 12px
- overflow: hidden
- border: 1px solid #E5E7EB
- text-decoration: none
- transition: box-shadow 0.2s

#### Card image
- width: 100%
- aspect-ratio: 16/9
- object-fit: cover
- background-size: cover
- background-position: center

#### Card title
- font-size: 15px
- font-weight: 600
- color: #383838
- line-height: 1.4
- padding: 16px
- display: -webkit-box
- -webkit-line-clamp: 2
- overflow: hidden

#### Nav arrows
- position: absolute
- top: 50%
- transform: translateY(-50%)
- background: #FFFFFF
- border: 1px solid #E5E7EB
- border-radius: 50%
- width: 44px
- height: 44px
- display: flex
- align-items: center
- justify-content: center
- cursor: pointer
- box-shadow: 0 2px 8px rgba(0,0,0,0.1)

### Blog posts (use as data, show 3 at a time, cycle through)

| Title | Image | URL |
|-------|-------|-----|
| Reduce company debt NSW with expert business advice | `/images/blog/reduce-company-debt-nsw.webp` | `/reduce-company-debt-nsw/` |
| Closing a business with debt Australia What directors need to know | `/images/blog/closing-business-with-debt.webp` | `/closing-a-business-with-debt-australia/` |
| How to restructure a small business Australia with expert guidance | `/images/blog/how-to-restructure.webp` | `/how-to-restructure-a-small-business-australia/` |
| How to fix business cash flow problems Australia | `/images/blog/fix-cash-flow.webp` | `/how-to-fix-business-cash-flow-problems-australia/` |
| Company bankruptcy vs liquidation Australia What directors need to know | `/images/blog/bankruptcy-vs-liquidation.webp` | `/company-bankruptcy-vs-liquidation-australia/` |

---

## 2. CTABanner
- **Target file:** `src/components/CTABanner.tsx`
- **Background:** #17243B with watermark

### DOM Structure
```
section (dark navy bg, py-20, relative overflow-hidden)
  div.watermark (absolute, large "WA" text, low opacity)
  div.container (max-w-[900px] mx-auto px-8 text-center)
    h2 "Ready to Protect Your Business Future?"
    p.subtext
    a.btn "Schedule Free Consultation →"
```

### Computed Styles

#### Section
- background-color: #17243B
- padding: 80px 0
- text-align: center
- position: relative
- overflow: hidden

#### H2
- font-size: 42px
- font-weight: 700
- color: #FFFFFF
- margin-bottom: 20px
- line-height: 1.25

#### Subtext
- font-size: 17px
- color: rgba(255,255,255,0.75)
- margin-bottom: 32px
- max-width: 600px
- margin-left: auto
- margin-right: auto

#### Button
- background-color: #0C9488
- color: #FFFFFF
- border-radius: 50px
- padding: 14px 32px
- font-size: 16px
- font-weight: 700

### Text Content
- H2: "Ready to Protect Your Business Future?"
- Subtext: "Don't let business challenges overwhelm you. Get expert guidance and strategic solutions tailored to your specific situation."
- Button: "Schedule Free Consultation →"

---

## 3. PartnerLogos
- **Target file:** `src/components/PartnerLogos.tsx`
- **Background:** #FFFFFF
- **Interaction:** CSS marquee / infinite scroll

### DOM Structure
```
section (white bg, py-12)
  div.marquee-wrapper (overflow-hidden)
    div.marquee-track (flex, animate-marquee, width: 200%)
      div.logos-set × 2 (duplicate for infinite loop)
        img × 9 (partner logos, grayscale filter)
```

### Computed Styles

#### Section
- background-color: #FFFFFF
- padding: 48px 0

#### Marquee track
- display: flex
- animation: marquee 30s linear infinite
- width: fit-content

#### Logo image
- height: 48px
- width: auto
- filter: grayscale(100%)
- opacity: 0.6
- margin: 0 40px
- object-fit: contain

### Partner logos (9 total)
1. `/images/partners/facebook.png` — Facebook
2. `/images/partners/myob.jpeg` — MYOB
3. `/images/partners/ca-logo.jpg` — CA
4. `/images/partners/certified-consultant.jpg` — Certified Consultant
5. `/images/partners/cpa.jpg` — CPA
6. `/images/partners/xero.png` — Xero
7. `/images/partners/qb.png` — QuickBooks
8. `/images/partners/tpa-logo.png` — TPA
9. `/images/partners/zohologo.png` — Zoho

### CSS Animation
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

## Responsive Behavior
- Blog: 3 cols desktop → 1 col mobile (show 1 card at a time)
- CTA: full width, text centered at all sizes
- Logos: marquee at all sizes (same speed)
