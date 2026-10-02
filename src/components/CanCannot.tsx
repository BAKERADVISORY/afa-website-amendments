import { Check, X } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

interface CanCannotProps {
  can: string[]
  cannot: string[]
  heading?: string
}

/** Direct-answer block: what AFA can and cannot do on this topic. Keeps entity status unambiguous for readers and crawlers. */
export function CanCannot({
  can,
  cannot,
  heading = 'What Australian Financial Advisory can and cannot do',
}: CanCannotProps) {
  return (
    <section
      aria-labelledby="can-cannot-heading"
      style={{ backgroundColor: '#f8f8ff', padding: '80px 0' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <SectionLabel text="Our role" />
        <h2
          id="can-cannot-heading"
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: '#1a1a3e',
            lineHeight: 1.2,
            marginBottom: 28,
          }}
        >
          {heading}
        </h2>
        <div
          className="can-cannot-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 12,
              padding: '28px 32px',
            }}
          >
            <h3
              style={{
                fontSize: 19,
                fontWeight: 700,
                color: '#1a1a3e',
                marginBottom: 14,
              }}
            >
              We can
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {can.map((line) => (
                <li
                  key={line}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    fontSize: 15,
                    color: '#444444',
                    lineHeight: 1.6,
                  }}
                >
                  <Check
                    size={18}
                    color="#6E3E8F"
                    aria-hidden="true"
                    style={{ flexShrink: 0, marginTop: 3 }}
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 12,
              padding: '28px 32px',
            }}
          >
            <h3
              style={{
                fontSize: 19,
                fontWeight: 700,
                color: '#1a1a3e',
                marginBottom: 14,
              }}
            >
              We do not
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {cannot.map((line) => (
                <li
                  key={line}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    fontSize: 15,
                    color: '#444444',
                    lineHeight: 1.6,
                  }}
                >
                  <X
                    size={18}
                    color="#8a1c1c"
                    aria-hidden="true"
                    style={{ flexShrink: 0, marginTop: 3 }}
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .can-cannot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
