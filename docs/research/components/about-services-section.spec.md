# AboutAndServicesSection Specification

## Overview

- **Target file:** `src/components/AboutServicesSection.tsx`
- **Interaction model:** static
- **Background:** #FFFFFF

## DOM Structure

```
section (white bg, py-20)
  div.container (max-w-[1200px] mx-auto px-8)
    div.about-header (text-center, mb-16)
      h2 "Getting help is <span teal>not giving up.</span>"
      p.description "Wynn Advisory is a corporate restructuring firm..."
    div.cards-grid (3 cols, gap-6)
      ServiceCard × 3
        div.card (light blue-gray bg, rounded-xl, p-8, relative overflow-hidden)
          div.watermark (absolute, large "WA" svg, low opacity)
          div.icon (teal icon, mb-4)
          h3.title
          p.desc
          ul.features (list with teal > chevrons)
          a.learn-more-btn "Learn More"
```

## Computed Styles

### Section

- background-color: #FFFFFF
- padding: 80px 0

### Container

- max-width: 1200px
- margin: 0 auto
- padding: 0 32px

### About heading

- text-align: center
- margin-bottom: 16px

### H2

- font-family: Manrope
- font-size: 40px
- font-weight: 700
- color: #383838

### H2 teal span

- color: #5ACBBD

### Description paragraph

- font-size: 16px
- color: #444444
- line-height: 1.7
- max-width: 700px
- margin: 0 auto 64px
- text-align: center

### Cards grid

- display: grid
- grid-template-columns: repeat(3, 1fr)
- gap: 24px

### Card

- background-color: #EBF3F8 (light blue-gray, approximately)
- border-radius: 12px
- padding: 32px
- position: relative
- overflow: hidden
- display: flex
- flex-direction: column
- gap: 12px

### Card watermark

- position: absolute
- bottom: -20px
- right: -20px
- opacity: 0.08
- width: 180px
- height: auto
- pointer-events: none

### Card icon

- width: 48px
- height: 48px
- color: #0C9488

### Card title (H3)

- font-size: 20px
- font-weight: 700
- color: #383838
- margin-top: 8px

### Card description

- font-size: 15px
- color: #555555
- line-height: 1.6

### Feature list

- list-style: none
- display: flex
- flex-direction: column
- gap: 8px
- margin: 8px 0

### Feature list item

- display: flex
- align-items: flex-start
- gap: 8px
- font-size: 14px
- color: #444444

### Feature chevron (>)

- color: #0C9488
- font-weight: 700

### "Learn More" button

- background-color: #0C9488
- color: #FFFFFF
- border-radius: 50px
- padding: 10px 20px
- font-size: 14px
- font-weight: 700
- width: fit-content
- margin-top: auto
- text-decoration: none

## Text Content (verbatim)

### About heading

- "Getting help is not giving up."
- Description: "Wynn Advisory is a corporate restructuring firm supporting Australian business owners through periods of financial pressure. We provide clear, independent advice to help directors understand their options, and prepare for formal pathways like restructure, or company wind up."

### Card 1: Reduce Your Debt

- Icon: dollar/money icon (Lucide: BadgeDollarSign or similar)
- Title: "Reduce Your Debt"
- Desc: "We help directors assess risk, regain control, and act before things escalate."
- Features: "Debt restructuring", "Creditor negotiations", "Interest-free payment plan"
- Button href: "/reduce-debt/"

### Card 2: Close Your Company

- Icon: building/company icon (Lucide: Building2)
- Title: "Close Your Company"
- Desc: "When it's time to step away, we make sure it's done the right way."
- Features: "Asset and liability review", "Minimise personal risk", "Exit planning"
- Button href: "/close-company/"

### Card 3: Corporate Advisory

- Icon: briefcase/advisory icon (Lucide: Briefcase)
- Title: "Corporate Advisory"
- Desc: "Stay ahead of disruption with expert advice to protect and adapt your business."
- Features: "Strategic planning", "Risk assessment", "Growth optimisation"
- Button href: "/services/"

## Assets

- Watermark: `public/images/watermark-bg.svg` (inside each card, low opacity)
- Icons: Lucide React icons

## Responsive Behavior

- **Desktop (1440px):** 3-column grid
- **Tablet (1024px):** 2-column or 1-column
- **Mobile (390px):** 1-column stacked
