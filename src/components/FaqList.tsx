import { JsonLd } from './JsonLd'
import { faqSchema, type FaqItem } from '@/lib/site'

interface FaqListProps {
  items: FaqItem[]
  alwaysOpen?: boolean
}

/**
 * Renders FAQ items in static HTML (never client-only) and emits FAQPage
 * schema from the same array, so the markup and the schema cannot drift.
 */
export function FaqList({ items, alwaysOpen = false }: FaqListProps) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((item) =>
          alwaysOpen ? (
            <div
              key={item.question}
              style={{
                backgroundColor: '#f8f8ff',
                borderRadius: 10,
                padding: '22px 26px',
                borderLeft: '4px solid #9b8ec4',
              }}
            >
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#1a1a3e',
                  marginBottom: 10,
                }}
              >
                {item.question}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: '#444444',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.answer}
              </p>
            </div>
          ) : (
            <details key={item.question} className="afa-faq-item">
              <summary className="afa-faq-summary">
                <span>{item.question}</span>
                <span aria-hidden="true" className="afa-faq-marker" />
              </summary>
              <p className="afa-faq-answer">{item.answer}</p>
            </details>
          )
        )}
      </div>
      <JsonLd data={faqSchema(items)} />
    </>
  )
}
