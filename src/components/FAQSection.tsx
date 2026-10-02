import { FaqList } from './FaqList'
import type { FaqItem } from '@/lib/site'

/** Home page FAQ. Every answer is approved GBP Q&A wording. Rendered statically; schema generated from this same array. */
const faqItems: FaqItem[] = [
  {
    question: 'What does Australian Financial Advisory do?',
    answer:
      "We assess a director's financial position early, particularly where ATO debt or Director Penalty Notice risk is building, and set out the options available in writing. Specialist execution work is referred to appropriately licensed practitioners.",
  },
  {
    question: 'Is Australian Financial Advisory a registered insolvency practitioner?',
    answer:
      "No. We're an assessment-and-referral service. Where formal insolvency work is needed, we refer to appropriately licensed practitioners.",
  },
  {
    question: 'Do you charge for the first conversation?',
    answer: 'No, the initial consultation is free.',
  },
  {
    question: 'What is a Director Penalty Notice?',
    answer:
      'A notice the ATO can issue that makes a company director personally liable for certain unpaid company tax debts. Getting advice early matters.',
  },
  {
    question: 'Can you negotiate with the ATO on my behalf?',
    answer:
      "We're not a registered tax agent, so we don't provide tax agent services like direct ATO negotiation ourselves. Where that's relevant, we can point you toward appropriately licensed help.",
  },
  {
    question: 'What happens after the Initial Advisory Report?',
    answer:
      "You get a written report setting out your position and options. Any next step is your decision, we don't push a particular outcome.",
  },
  {
    question: 'How do your fees work?',
    answer:
      "We work on fixed fees agreed upfront, so you know the cost before anything starts. The initial consultation is free and we'll give you exact figures on that first call.",
  },
  {
    question: 'Which areas do you service?',
    answer: 'Gold Coast, Brisbane, Sydney, and Australia-wide.',
  },
  {
    question: 'Is what I tell you confidential?',
    answer: 'Yes, standard professional confidentiality applies.',
  },
]

export function FAQSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}
    >
      <div style={{ textAlign: 'center', marginBottom: 48, padding: '0 32px' }}>
        <h2
          id="faq-heading"
          style={{
            fontSize: 38,
            fontWeight: 700,
            color: '#1a1a3e',
            margin: '0 0 16px 0',
          }}
        >
          Frequently <span style={{ color: '#6E3E8F' }}>asked questions</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: '#444444',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Common questions from business owners facing financial pressure.
        </p>
      </div>

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
        <FaqList items={faqItems} />

        <div
          style={{
            backgroundColor: '#1a1a3e',
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
            Still have questions?
          </h3>
          <p
            style={{
              fontSize: 15,
              color: '#DEDCEC',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Every situation is different. Talk to our team in a free,
            confidential initial consultation. No obligation.
          </p>
          <a
            href="#contact"
            className="afa-button-light"
            style={{
              backgroundColor: '#ffffff',
              color: '#1a1a3e',
              borderRadius: 50,
              padding: '12px 24px',
              fontSize: 15,
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Book a free initial consultation
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
