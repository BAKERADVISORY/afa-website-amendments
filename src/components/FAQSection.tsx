'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'What is a Director Penalty Notice?',
    answer:
      'The ATO can make directors personally liable for unpaid PAYG withholding and superannuation through a Director Penalty Notice (DPN). A DPN removes the protection of the corporate structure — meaning your personal assets (home, savings, investments) are at risk. Once issued, your options narrow significantly. Early advice is critical.',
  },
  {
    question: 'How much does it cost to get started?',
    answer:
      'We offer a no-obligation discovery call to understand your situation. Following that, we provide a financial review service priced at $3,300. This gives you a clear picture of your exposure, options, and recommended next steps — before any further commitment.',
  },
  {
    question: 'What happens after the review?',
    answer:
      'We provide a written report with recommended action steps tailored to your situation. If formal insolvency is required, we refer you to our external insolvency practitioner partner. In most cases, we find alternatives — negotiation, restructuring, or a managed wind-down — that avoid a formal appointment.',
  },
  {
    question: 'Do I have to go into liquidation?',
    answer:
      'No. Liquidation is a last resort, and we make that clear from the outset. We explore every alternative first — ATO payment plans, creditor negotiations, small business restructuring, and more. Formal insolvency appointments appear permanently on company records. We help you avoid that wherever possible.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48, padding: '0 32px' }}>
        <h2
          style={{
            fontSize: 38,
            fontWeight: 700,
            color: '#111111',
            margin: '0 0 16px 0',
          }}
        >
          Frequently <span style={{ color: '#333333' }}>Asked Questions</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: '#666',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Common questions from business owners facing financial pressure.
        </p>
      </div>

      {/* Two-column layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.7fr 1fr',
          gap: 48,
          alignItems: 'start',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
        }}
        className="faq-grid"
      >
        {/* Accordion */}
        <div>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: 10,
                  marginBottom: 12,
                  overflow: 'hidden',
                  borderLeft: isOpen
                    ? '4px solid #111111'
                    : '4px solid transparent',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '18px 20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{ fontSize: 15, fontWeight: 600, color: '#111111' }}
                  >
                    {item.question}
                  </span>
                  <span
                    style={{
                      fontSize: 20,
                      color: '#333333',
                      fontWeight: 400,
                      flexShrink: 0,
                      marginLeft: 12,
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: '0 20px 18px',
                      fontSize: 14,
                      color: '#555',
                      lineHeight: 1.75,
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still Have Questions card */}
        <div
          style={{
            backgroundColor: '#111111',
            borderRadius: 16,
            padding: '40px 32px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'center',
          }}
        >
          <h3
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Still Have Questions?
          </h3>
          <p
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Every situation is different. Talk to our team and get personalised
            advice for your specific circumstances — no obligation.
          </p>
          <a
            href="#contact"
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              borderRadius: 50,
              padding: '12px 24px',
              fontSize: 15,
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Schedule a Discovery Call
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
