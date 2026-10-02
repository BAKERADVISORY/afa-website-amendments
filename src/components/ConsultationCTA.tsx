import { Phone, Mail } from 'lucide-react'
import { DiscoveryCallForm } from './CTABanner'
import { SectionLabel } from './SectionLabel'
import {
  CONSULTATION_COVERS,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_AREA_LINE,
} from '@/lib/site'

interface ConsultationCTAProps {
  heading?: string
  intro?: string
}

/**
 * The single contact target on every page. `id="contact"` is the anchor every
 * "free initial consultation" CTA links to, so the form is always on the same page.
 */
export function ConsultationCTA({
  heading = 'Book your free initial consultation',
  intro = 'The earlier you act, the more options may still be open. Tell us a little about your situation and we will be in touch to arrange a time.',
}: ConsultationCTAProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ backgroundColor: '#1a1a3e', padding: '80px 0' }}
    >
      <div
        className="consult-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'start',
        }}
      >
        <div>
          <SectionLabel text="Get started" light />
          <h2
            id="contact-heading"
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            {intro}
          </p>

          <h3
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 12,
            }}
          >
            What the free initial consultation covers
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {CONSULTATION_COVERS.map((line) => (
              <li
                key={line}
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  color: '#DEDCEC',
                  fontSize: 15,
                  lineHeight: 1.6,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#9b8ec4',
                    marginTop: 8,
                    flexShrink: 0,
                  }}
                />
                {line}
              </li>
            ))}
          </ul>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              fontSize: 15,
            }}
          >
            <a
              href={`tel:${PHONE_TEL}`}
              className="afa-inline-link-light"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              <Phone size={16} color="#9b8ec4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="afa-inline-link-light"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              <Mail size={16} color="#9b8ec4" aria-hidden="true" />
              {EMAIL}
            </a>
            <p style={{ color: '#DEDCEC', margin: '6px 0 0' }}>
              {SERVICE_AREA_LINE}
            </p>
          </div>
        </div>

        <DiscoveryCallForm />
      </div>
      <style>{`
        @media (max-width: 900px) {
          .consult-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  )
}
