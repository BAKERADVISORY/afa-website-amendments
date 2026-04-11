# Behaviors — Wynn Advisory Homepage

## Header / NavBar

- **Fixed**: `position: fixed`, dark navy (#17243B) always visible
- **No scroll-triggered style change** — always navy with same opacity
- Active nav link = teal (#5ACBBD)
- Hover on nav links: color changes to teal (#0C9488)
- "Get Started" button opens popup modal (implement as scroll-to or modal trigger)
- On mobile (< 768px): hamburger menu toggle

## Hero Section

- **Static layout** — no scroll-driven animations
- Background: dark navy (#17243B) with person photo overlaid at ~0.75 opacity
- Bottom wave: white SVG shape-divider, 171% wide, 140px tall, creating curved transition to white section below
- CTA button opens same popup as header "Get Started"

## About + Services Section

- **Static** — no animations needed
- 3 service cards in equal-width 3-col grid
- Cards have light blue-gray background with subtle rounded corners
- Watermark "wa" SVG visible in card backgrounds (decorative)
- "Learn More" buttons link to respective pages

## Why Choose Section

- **Static** layout
- Dark navy background with large "WA" watermark text (opacity ~0.05–0.1)
- Left side: 2 rectangular images stacked vertically
- Right side: heading + 6 icon-box items (icon left, title + text right)
- Icon boxes have teal circular icon backgrounds

## Comparison Section (Why Engage)

- **Static** — no accordion, all rows visible
- Table has a rounded card container
- Header row: "Wynn Advisory | VS | Traditional Insolvency Firm" with "VS" in teal
- Each feature row: Feature label left, Wynn col (with "Wa" logo mark + teal text), Traditional col (with ❌ icon + gray text)
- "The Key Difference" row at bottom: light teal background (#E8F8F7 or similar), different styling

## Testimonials Section

- **Click carousel** — 4 reviews, dot navigation at bottom right
- Dark navy background
- Stars (teal) + heading on the LEFT ~40% of width
- Review card on RIGHT ~55% width: white rounded card with large quote marks
- Carousel dots: 4 dots, active dot is teal
- Auto-play: likely no (click-only)

## FAQ Section

- **Click accordion** — 8 questions, expand/collapse on click
- `+` icon in teal on right of each row, rotates to `×` when open
- Each accordion row: light teal background (#E8F8F7), rounded corners
- "Still Have Questions?" card on right: peach (#FFF4EF) background, rounded, with button

## Blog Carousel

- **Click carousel** with left/right arrows
- 3 cards visible at once (desktop)
- Cards show: background image + title overlay text
- Previous/Next arrow buttons

## Partner Logos

- **Auto-scrolling** continuous carousel (infinite loop)
- 9 logos, scrolls left automatically
- No pause on hover required (simplify to static grid or CSS marquee)

## Floating Elements

- Email/chat bubble (bottom-left): third-party widget — skip, do not clone
