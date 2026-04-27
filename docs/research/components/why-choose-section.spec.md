# WhyChooseSection Specification

## Overview

- **Target file:** `src/components/WhyChooseSection.tsx`
- **Interaction model:** static
- **Background:** #17243B (dark navy)

## DOM Structure

```
section (dark navy bg, py-20, relative overflow-hidden)
  div.watermark (absolute, large "WA" text, very low opacity)
  div.container (max-w-[1200px] mx-auto px-8)
    p.label "wynn advisory" (small teal uppercase label, text-center)
    h2.heading "Why Choose Wynn Advisory?"
    p.subtext "Wynn Advisory is here to support you..."
    div.content-grid (2 cols: images left, features right)
      div.images-col (flex flex-col gap-4)
        img.img1 "/images/business-meeting.webp" (rounded-xl)
        img.img2 "/images/garnishee-order.webp" (rounded-xl)
      div.features-col (flex flex-col gap-4)
        FeatureItem × 6
          div.feature (flex gap-4, items-start)
            div.icon-circle (teal circle bg, icon inside)
            div.text
              h3.title
              p.desc
```

## Computed Styles

### Section

- background-color: #17243B
- padding: 80px 0
- position: relative
- overflow: hidden

### Section watermark

- position: absolute
- font-size: 300px
- color: rgba(255,255,255,0.03)
- font-weight: 900
- letter-spacing: -10px
- right: -50px
- top: 50%
- transform: translateY(-50%)
- user-select: none
- pointer-events: none

### Label "wynn advisory"

- font-size: 13px
- color: #5ACBBD
- letter-spacing: 3px
- text-transform: uppercase
- text-align: center
- margin-bottom: 12px

### H2 "Why Choose Wynn Advisory?"

- font-size: 40px
- font-weight: 700
- color: #FFFFFF
- text-align: center
- margin-bottom: 16px

### H2 teal span ("Wynn Advisory?")

- color: #5ACBBD

### Subtext

- font-size: 16px
- color: rgba(255,255,255,0.75)
- text-align: center
- max-width: 700px
- margin: 0 auto 48px

### Content grid

- display: grid
- grid-template-columns: 1fr 1fr
- gap: 48px
- align-items: start

### Images column

- display: flex
- flex-direction: column
- gap: 16px

### Image

- width: 100%
- border-radius: 12px
- object-fit: cover
- height: ~260px

### Features column

- display: flex
- flex-direction: column
- gap: 24px

### Feature item

- display: flex
- gap: 16px
- align-items: flex-start

### Icon circle

- min-width: 48px
- height: 48px
- border-radius: 50%
- background-color: rgba(12, 148, 136, 0.2)
- display: flex
- align-items: center
- justify-content: center
- color: #0C9488

### Feature title (H3)

- font-size: 16px
- font-weight: 700
- color: #FFFFFF
- margin-bottom: 4px

### Feature description

- font-size: 14px
- color: rgba(255,255,255,0.7)
- line-height: 1.6

## Text Content (verbatim)

### Section header

- Label: "wynn advisory"
- H2: "Why Choose Wynn Advisory?"
- Subtext: "Wynn Advisory is here to support you in the early stages of financial difficulty, when decisions matter most."

### Features (6 items)

1. **Proven Track Record** — "We have many years of experience helping businesses navigate complex challenges with a high success rate."
2. **Industry Expertise** — "Our advisers specialise in business restructuring, debt management, and strategic planning."
3. **Fast Response Time** — "We understand urgency in business. Get expert consultation within 24 hours of your initial contact."
4. **Personalised Approach** — "Every business is unique. We tailor our solutions to fit your specific situation and goals."
5. **Complete Compliance** — "Stay compliant with legal and regulatory requirements whilst achieving your business objectives."
6. **Results Driven** — "We measure success by your success. We're designed to deliver measurable outcomes."

## Assets

- Image 1: `public/images/business-meeting.webp`
- Image 2: `public/images/garnishee-order.webp`
- Icons: use Lucide icons (Trophy, Lightbulb, Clock, User, Shield, Target)

## Responsive Behavior

- **Desktop (1440px):** 2-column grid (images | features)
- **Mobile (390px):** single column, images first then features
