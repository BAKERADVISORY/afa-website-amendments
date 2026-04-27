# ComparisonSection Specification

## Overview

- **Target file:** `src/components/ComparisonSection.tsx`
- **Interaction model:** static (all rows visible, no accordion)
- **Background:** #FFFFFF

## DOM Structure

```
section (white bg, py-20)
  div.container (max-w-[1100px] mx-auto px-8)
    p.label "wynn advisory" (small teal uppercase)
    h2 "Why engage <teal>with us?</teal>"
    p.subtext "See how Wynn Advisory's pre-insolvency approach..."
    div.table-card (rounded-2xl, overflow-hidden, border)
      div.table-header (3 cols: Feature | Wynn Advisory | Traditional)
      div.table-rows (alternating rows for each feature)
        ComparisonRow × 6
          div.row (3 cols)
            div.feature-name (bold, dark)
            div.wynn-col (teal "Wa" logo + teal text)
            div.trad-col (red X icon + gray text)
      div.key-difference-row (light teal bg, full-width, text)
```

## Computed Styles

### Section

- background-color: #FFFFFF
- padding: 80px 0

### Label

- font-size: 12px
- color: #0C9488
- letter-spacing: 3px
- text-transform: uppercase
- text-align: center
- margin-bottom: 12px

### H2

- font-size: 38px
- font-weight: 700
- color: #383838
- text-align: center

### H2 teal span

- color: #5ACBBD

### Subtext

- font-size: 16px
- color: #666
- text-align: center
- margin-bottom: 48px

### Table card

- border: 1px solid #E5E7EB
- border-radius: 16px
- overflow: hidden
- background: #FFFFFF

### Table header

- display: grid
- grid-template-columns: 1fr 1fr 1fr
- background-color: #17243B
- padding: 16px 24px
- color: #FFFFFF
- font-weight: 700
- font-size: 15px

### "VS" text in header

- color: #0C9488
- font-weight: 700

### Row

- display: grid
- grid-template-columns: 1fr 1fr 1fr
- padding: 20px 24px
- border-bottom: 1px solid #F0F0F0
- align-items: start

### Row alt background

- background: #FAFAFA

### Feature name (col 1)

- font-weight: 600
- color: #383838
- font-size: 15px

### Wynn col (col 2)

- display: flex
- flex-direction: column
- gap: 4px

### Wynn col label "Wynn Advisory"

- font-size: 12px
- font-weight: 600
- color: #888
- margin-bottom: 4px

### Wynn col value (logo mark + text)

- display: flex
- align-items: flex-start
- gap: 8px
- color: #0C9488
- font-size: 14px
- font-weight: 500

### Traditional col (col 3)

- same structure as Wynn col

### Traditional col label

- font-size: 12px
- color: #888

### Traditional col value (X + text)

- display: flex
- align-items: flex-start
- gap: 8px
- color: #666
- font-size: 14px

### X icon

- color: #EF4444 (red)

### Key Difference row

- background-color: #E0F5F3 (very light teal)
- padding: 24px
- border-radius: 0 0 16px 16px (bottom corners)
- display: grid
- grid-template-columns: auto 1fr
- gap: 24px
- align-items: start

### Key Difference title

- font-weight: 700
- color: #383838
- font-size: 18px
- white-space: nowrap

### Key Difference text

- font-size: 15px
- color: #444
- line-height: 1.6

## Text Content (verbatim)

### Header

- Col 1: "Feature / Focus"
- Col 2: "Wynn Advisory (Pre-Insolvency)"
- Col 3: "Traditional Insolvency Firm"

### Rows (6 features)

| Feature                | Wynn Advisory                                        | Traditional                                            |
| ---------------------- | ---------------------------------------------------- | ------------------------------------------------------ |
| Who they work for      | You (the business owner/director)                    | Acts in best interest of Creditors                     |
| When they get involved | Before a formal insolvency process begins            | After a formal insolvency appointment                  |
| Type of advice         | Strategic, proactive, and tailored to your situation | Formal and process-driven                              |
| Goal                   | To protect and prepare you                           | To administer the process in creditors' best interests |
| Scope                  | Advice, preparation, negotiation, documentation      | Legally bound to follow specific insolvency procedures |
| Cost predictability    | Fixed-fee known in advance                           | Costs drawn from company assets and time               |

### Key Difference

- Title: "The Key Difference"
- Text: "Traditional insolvency firms are appointed after your business has failed and work for creditors. Wynn Advisory works before formal insolvency processes begin, representing your interests as the business owner to help you navigate challenges and protect your position."

## Responsive Behavior

- **Desktop (1440px):** 3-column table
- **Mobile (390px):** consider stacking or simplifying layout to 1-col cards per feature
