# FAQSection Specification

## Overview
- **Target file:** `src/components/FAQSection.tsx`
- **Interaction model:** click accordion (expand/collapse)
- **Background:** #FFFFFF

## DOM Structure
```
section (white bg, py-20)
  div.container (max-w-[1200px] mx-auto px-8)
    div.header (text-center, mb-12)
      h2 "Frequently <teal>Asked Questions</teal>"
      p.subtext "Find answers to common questions..."
    div.layout (grid 2 cols: 60% accordion | 35% card)
      div.accordion-col
        AccordionItem × 8
          div.item (rounded-xl, light-teal-bg, mb-3)
            button.trigger (flex, justify-between, p-5)
              span.question (font-weight 500)
              span.icon (+ or ×, teal)
            div.content (hidden/shown, px-5 pb-5)
              p (answer text)
      div.card-col
        div.still-have-questions-card (peach bg, rounded-2xl, p-8, text-center)
          h3 "Still Have Questions?"
          p "Our expert team is here to help..."
          a.btn "Schedule Free Consultation →"
```

## Computed Styles

### Section
- background-color: #FFFFFF
- padding: 80px 0

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

### Layout grid
- display: grid
- grid-template-columns: 1.7fr 1fr
- gap: 48px
- align-items: start

### Accordion item
- background-color: #E8F7F5 (very light teal, ~#E0F5F2)
- border-radius: 10px
- margin-bottom: 12px
- overflow: hidden

### Accordion trigger button
- width: 100%
- display: flex
- justify-content: space-between
- align-items: center
- padding: 18px 20px
- background: none
- border: none
- cursor: pointer
- text-align: left

### Question text
- font-size: 15px
- font-weight: 500
- color: #383838

### + icon (closed)
- color: #0C9488
- font-size: 20px
- font-weight: 300

### Answer content (expanded)
- padding: 0 20px 18px
- font-size: 14px
- color: #555
- line-height: 1.7

### "Still Have Questions" card
- background-color: #FFF4EF
- border-radius: 16px
- padding: 40px 32px
- text-align: center
- display: flex
- flex-direction: column
- gap: 16px
- align-items: center

### Card H3
- font-size: 22px
- font-weight: 700
- color: #383838

### Card paragraph
- font-size: 15px
- color: #555
- line-height: 1.6

### Card button
- background-color: #0C9488
- color: #FFFFFF
- border-radius: 50px
- padding: 12px 24px
- font-size: 15px
- font-weight: 700
- text-decoration: none
- display: inline-flex
- align-items: center
- gap: 8px

## Text Content (verbatim)

### Section header
- H2: "Frequently Asked Questions"
- Teal: "Asked Questions"
- Subtext: "Find answers to common questions about business restructuring, insolvency, and corporate advisory services."

### FAQ Questions (8 items) — answers are generic summaries
1. **What is the difference between voluntary administration and liquidation?**
   Voluntary administration is a process where an independent administrator takes control of a financially distressed company to assess its options, which may include restructuring. Liquidation is the process of winding up a company and distributing its assets to creditors. The key difference is that administration may save the business, while liquidation ends it.

2. **How do I know if my business needs restructuring?**
   Signs include persistent cash flow problems, inability to pay debts when due, creditor pressure, declining revenue, and difficulty meeting payroll. If you're using personal funds to cover business expenses or avoiding creditor calls, it's time to seek advice.

3. **What are director's duties during financial difficulty?**
   Directors must avoid insolvent trading, act in the best interests of creditors once insolvency is suspected, maintain proper books and records, and seek professional advice. Failing these duties can result in personal liability.

4. **How long does a typical restructuring process take?**
   Timelines vary depending on complexity. A small business restructuring plan can be completed in as little as 20 business days. More complex restructuring may take several months. We provide clear timelines at the outset of every engagement.

5. **What costs are involved in business restructuring?**
   Wynn Advisory operates on fixed-fee arrangements, so you know exactly what you're paying upfront. Costs depend on the complexity of your situation and the services required.

6. **Can employees be retained during restructuring?**
   Yes, in many cases employees can be retained during restructuring. This depends on the restructuring approach chosen and the financial position of the business.

7. **What happens to company assets during administration?**
   During voluntary administration, an administrator takes control and assesses all assets. Assets may be sold to pay creditors or preserved if the business continues operating.

8. **How do I communicate with creditors during financial difficulty?**
   Open and transparent communication is important. We can help you develop a creditor communication strategy and negotiate on your behalf to reach workable arrangements.

### Still Have Questions card
- H3: "Still Have Questions?"
- P: "Our expert team is here to help. Get personalised advice for your specific situation."
- Button: "Schedule Free Consultation →"

## Responsive Behavior
- **Desktop (1440px):** 2-column layout (accordion | card)
- **Mobile (390px):** single column, card below accordion
