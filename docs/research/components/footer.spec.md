# Footer Specification

## Overview

- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static
- **Background:** #17243B (dark navy)

## DOM Structure

```
footer (dark navy bg, pt-16 pb-8)
  div.container (max-w-[1400px] mx-auto px-8)
    div.footer-top (grid 4 cols, gap-8, pb-12, border-bottom)
      div.brand-col
        a[href="/"] img.logo "/images/logo-light.svg"
        ul.contact-info
          li (mail icon + email link)
          li (phone icon + phone link with green pill)
        div.locations
          h4 "Sydney"
          p.address icon + "75 Pitt St, Sydney, NSW, 2000"
          h4 "Brisbane"
          p.address icon + "310 Edward St, Brisbane, QLD, 4000"
        div.social
          h4 "Follow Us"
          div.social-icons (LinkedIn, Facebook — teal circle icons)
      div.menu-col
        h4 "Menu"
        nav ul
          li × 7 (Home, About, Reduce Debt, Close Company, Services, Blog, Contact)
      div.services-col
        h4 "Services"
        nav ul
          li × 3 (Voluntary Administration, Creditors Voluntary Liquidation, Small Business Restructure)
      div.contact-col
        h4 "Get in touch"
        form (contact form)
          div.form-row (2 cols: Full Name | Email)
          div.form-row (2 cols: Phone Number | Company Name)
          select "Service Needed"
          textarea "Message"
          button type="submit" "SUBMIT"
    div.footer-bottom (flex, justify-between, pt-6)
      div.legal-links (flex gap-4)
        span "© 2026 Wynn Advisory Pty Ltd"
        span "ACN 688 456 788"
        a "Privacy Policy"
        a "Terms & Conditions"
      a "Website by Theme Press"
```

## Computed Styles

### Footer

- background-color: #17243B
- padding-top: 64px
- padding-bottom: 32px

### Container

- max-width: 1400px
- margin: 0 auto
- padding: 0 32px

### Footer top grid

- display: grid
- grid-template-columns: 1.5fr 1fr 1fr 1.8fr
- gap: 48px
- padding-bottom: 48px
- border-bottom: 1px solid rgba(255,255,255,0.1)

### Logo

- height: 37px
- margin-bottom: 24px

### Contact info list

- list-style: none
- display: flex
- flex-direction: column
- gap: 10px
- margin-bottom: 24px

### Contact item

- display: flex
- align-items: center
- gap: 10px
- color: rgba(255,255,255,0.8)
- font-size: 14px

### Contact icon

- color: #0C9488
- width: 16px
- height: 16px

### Email/phone link

- color: rgba(255,255,255,0.8)
- text-decoration: none
- font-size: 14px

### Phone pill (green bubble)

- background-color: #0C9488
- border-radius: 50px
- padding: 4px 12px
- color: #FFFFFF
- font-size: 13px
- font-weight: 600
- display: inline-flex
- align-items: center
- gap: 6px

### Location headings

- font-size: 15px
- font-weight: 700
- color: #5ACBBD
- margin: 16px 0 6px

### Address

- font-size: 14px
- color: rgba(255,255,255,0.7)
- display: flex
- align-items: flex-start
- gap: 8px

### "Follow Us" heading

- font-size: 15px
- font-weight: 700
- color: #5ACBBD
- margin-top: 20px

### Social icons

- display: flex
- gap: 10px
- margin-top: 8px

### Social icon button

- width: 36px
- height: 36px
- border-radius: 50%
- background-color: #0C9488
- display: flex
- align-items: center
- justify-content: center
- color: #FFFFFF

### Column headings (Menu, Services, Get in touch)

- font-size: 16px
- font-weight: 700
- color: #5ACBBD
- margin-bottom: 16px

### Nav link items

- color: rgba(255,255,255,0.7)
- font-size: 14px
- text-decoration: none
- padding: 4px 0
- display: block

### Form inputs

- background: rgba(255,255,255,0.05)
- border: 1px solid rgba(255,255,255,0.15)
- border-radius: 6px
- padding: 10px 12px
- color: #FFFFFF
- font-size: 14px
- width: 100%

### Form row grid

- display: grid
- grid-template-columns: 1fr 1fr
- gap: 12px

### Form label

- font-size: 13px
- color: rgba(255,255,255,0.7)
- margin-bottom: 4px
- display: block

### Required asterisk

- color: #EF4444

### Submit button

- background-color: #0C9488
- color: #FFFFFF
- border-radius: 6px
- padding: 14px
- font-size: 14px
- font-weight: 700
- letter-spacing: 1px
- width: 100%
- border: none
- cursor: pointer

### Footer bottom

- display: flex
- justify-content: space-between
- align-items: center
- padding-top: 24px
- font-size: 13px
- color: rgba(255,255,255,0.5)
- flex-wrap: wrap
- gap: 8px

### Legal items

- display: flex
- gap: 16px
- flex-wrap: wrap

### Privacy/Terms links

- color: rgba(255,255,255,0.5)
- text-decoration: none

## Text Content (verbatim)

### Contact info

- Email: contact@wynnadvisory.com.au
- Phone: 1300 052 321

### Locations

- Sydney: 75 Pitt St, Sydney, NSW, 2000
- Brisbane: 310 Edward St, Brisbane, QLD, 4000

### Menu links

Home, About, Reduce Debt, Close Company, Services, Blog, Contact

### Services links

Voluntary Administration, Creditors Voluntary Liquidation, Small Business Restructure

### Contact form fields

- Full Name (required)
- Email (required)
- Phone Number (required)
- Company Name (required)
- Service Needed (dropdown: Reduce Debt, Close Company, Other)
- Message (textarea)
- Submit button

### Footer bottom

- © 2026 Wynn Advisory Pty Ltd
- ACN 688 456 788
- Privacy Policy
- Terms & Conditions
- Website by Theme Press

## Assets

- Logo: `public/images/logo-light.svg`
- Icons: Lucide (Mail, Phone, MapPin, Linkedin, Facebook)

## Responsive Behavior

- **Desktop (1440px):** 4-column grid
- **Mobile (390px):** single column stacked
