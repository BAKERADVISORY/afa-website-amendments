# TestimonialsSection Specification

## Overview

- **Target file:** `src/components/TestimonialsSection.tsx`
- **Interaction model:** click carousel (dot navigation)
- **Background:** #17243B (dark navy)

## DOM Structure

```
section (dark navy bg, py-20)
  div.container (max-w-[1200px] mx-auto px-8)
    div.layout (flex, gap-16, align-items-center)
      div.left-col (~40% width)
        div.stars (5 teal stars)
        p.rating-text "Rated 5 out of 5"
        h2 "<teal>Trusted</teal> by hundreds of businesses across Australia."
      div.right-col (~55% width)
        div.carousel-wrapper (relative)
          div.carousel (overflow-hidden)
            div.slides (flex, transition on active)
              TestimonialCard × 4 (one visible at a time)
          div.dots (flex gap-3, justify-center, mt-6)
            button × 4 (dot indicators)
```

## Computed Styles

### Section

- background-color: #17243B
- padding: 80px 0

### Layout flex container

- display: flex
- gap: 64px
- align-items: center

### Left col

- width: ~40%
- flex-shrink: 0

### Stars container

- display: flex
- gap: 8px
- color: #5ACBBD
- font-size: 24px
- margin-bottom: 8px

### Rating text

- font-size: 14px
- color: rgba(255,255,255,0.6)
- margin-bottom: 16px

### H2

- font-size: 38px
- font-weight: 700
- color: #FFFFFF
- line-height: 1.25

### H2 teal span ("Trusted")

- color: #5ACBBD

### Right col

- flex: 1

### Carousel card (white bg)

- background-color: #FFFFFF
- border-radius: 16px
- padding: 32px
- position: relative

### Large quote mark

- position: absolute
- top: 20px
- left: 24px
- font-size: 80px
- color: rgba(12,148,136,0.15)
- line-height: 1
- font-family: Georgia, serif

### Review text

- font-size: 15px
- color: #444444
- line-height: 1.7
- padding-top: 32px

### Reviewer name

- font-size: 14px
- font-weight: 700
- color: #0C9488
- margin-top: 16px
- text-align: center

### Dot navigation

- display: flex
- gap: 10px
- justify-content: center
- margin-top: 24px

### Dot (inactive)

- width: 10px
- height: 10px
- border-radius: 50%
- background-color: rgba(255,255,255,0.3)
- cursor: pointer

### Dot (active)

- background-color: #0C9488

## Text Content (verbatim)

### 4 reviews (carousel)

**Review 1 — Joel A:**
"From the very first conversation I had with Sam, I knew he was different. Genuine, transparent, and incredibly grounded — he didn't speak like someone just doing a job, and I never once felt like just another number. I've been burnt before, so I was cautious."

**Review 2 — Daniel C:**
"Working with Wynn Advisory was one of the best decisions we made for our company. They quickly identified the core issues and put together a clear strategy that helped us stabilise and plan forward with confidence."

**Review 3 — Samantha R:**
"The team at Wynn Advisory provided exceptional guidance when our business needed it most. They were professional, empathetic, and incredibly knowledgeable. I would recommend them to any business owner facing financial challenges."

**Review 4 — Michael T:**
"Wynn Advisory helped us navigate a very challenging period with clarity and confidence. Their advice was timely, practical, and exactly what we needed to make informed decisions about our business."

## Responsive Behavior

- **Desktop (1440px):** side-by-side (left col 40%, right col 60%)
- **Mobile (390px):** stacked, stars/heading on top, carousel below
