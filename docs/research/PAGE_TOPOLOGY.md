# Page Topology — Wynn Advisory Homepage

## Overall Structure

- Single-page scroll with sticky header overlay
- No smooth scroll library detected (standard scroll)
- Max content width: ~1400px centered
- z-index layers: header (fixed) > page content

## Section Order (top to bottom)

| # | Name | Background | Interaction |
|---|------|-----------|-------------|
| 1 | **NavBar** | #17243B (fixed overlay) | static + hover states |
| 2 | **HeroSection** | #17243B + person photo overlay | static |
| 3 | **AboutAndServices** | #FFFFFF | static |
| 4 | **WhyChooseSection** | #17243B (dark) | static |
| 5 | **ComparisonSection** | #FFFFFF | static (no accordion interaction needed) |
| 6 | **TestimonialsSection** | #17243B (dark) | click carousel |
| 7 | **FAQSection** | #FFFFFF | click accordion |
| 8 | **BlogCarousel** | #FFFFFF | auto-scroll carousel |
| 9 | **CTABanner** | #17243B (dark) | static |
| 10 | **PartnerLogos** | #FFFFFF | auto-scroll carousel |
| 11 | **Footer** | #17243B (dark) | static |

## Dependencies

- NavBar renders above all content (fixed)
- HeroSection has a wave shape-divider at bottom (white fill SVG)
- The email/chat bubble FAB (bottom-left) is a third-party widget — skip

## Responsive Breakpoints

- Desktop: 1440px — full layout
- Tablet: 1024px — slightly adjusted padding
- Mobile: 767px — stacked single column, hamburger nav

## Key Layout Notes

- NavBar: logo left, nav links center-left, "Get Started" CTA far right
- HeroSection: left-aligned content, right side shows background photo
- WhyChooseSection: 2 stacked images on the left, 6 feature items on the right
- ComparisonSection: heading + subtitle + rounded card table
- TestimonialsSection: heading/stars left ~40%, carousel card right ~55%
- FAQSection: accordion left 60%, "Still Have Questions?" card right 35%
- Footer: 4 columns — brand | menu | services | contact form
