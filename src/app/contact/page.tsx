import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { PageHero } from '@/components/PageHero'
import { ContentSection, bodyText } from '@/components/ContentSection'
import { ConsultationCTA } from '@/components/ConsultationCTA'
import { JsonLd } from '@/components/JsonLd'
import {
  ADDRESS_LINE,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_AREA_LINE,
  SITE_NAME,
  absUrl,
  webPageSchema,
} from '@/lib/site'

const PATH = '/contact'
const title = 'Contact Australian Financial Advisory | Gold Coast'
const description =
  'Phone, email and office details for Australian Financial Advisory, 215 Brisbane Road, Biggera Waters QLD 4216. Book a free initial consultation.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: absUrl(PATH) },
  openGraph: { title, description, url: absUrl(PATH) },
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  gap: 14,
  alignItems: 'flex-start',
  backgroundColor: '#f8f8ff',
  borderRadius: 10,
  padding: '18px 22px',
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          ...webPageSchema({
            path: PATH,
            name: title,
            description,
            about: SITE_NAME,
          }),
          '@type': 'ContactPage',
        }}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title="Contact Australian Financial Advisory"
          intro="Call, email, or send the form below to book a free initial consultation. Standard professional confidentiality applies. No pressure, no sales pitch."
          breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Contact' }]}
          wave
        />

        <ContentSection
          id="section-details"
          label="Get in touch"
          heading="Phone, email and office"
        >
          <address
            style={{
              fontStyle: 'normal',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              marginBottom: 24,
            }}
          >
            <div style={rowStyle}>
              <Phone size={20} color="#6E3E8F" aria-hidden="true" style={{ marginTop: 2 }} />
              <div>
                <p style={{ margin: 0, fontWeight: 700, color: '#1a1a3e' }}>Phone</p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="afa-crumb-link"
                  style={{ color: '#444444', fontSize: 16, textDecoration: 'none' }}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div style={rowStyle}>
              <Mail size={20} color="#6E3E8F" aria-hidden="true" style={{ marginTop: 2 }} />
              <div>
                <p style={{ margin: 0, fontWeight: 700, color: '#1a1a3e' }}>Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="afa-crumb-link"
                  style={{ color: '#444444', fontSize: 16, textDecoration: 'none' }}
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <div style={rowStyle}>
              <MapPin size={20} color="#6E3E8F" aria-hidden="true" style={{ marginTop: 2 }} />
              <div>
                <p style={{ margin: 0, fontWeight: 700, color: '#1a1a3e' }}>
                  {SITE_NAME}
                </p>
                <p style={{ margin: 0, color: '#444444', fontSize: 16 }}>{ADDRESS_LINE}</p>
              </div>
            </div>
          </address>
          <p style={bodyText}>Serving {SERVICE_AREA_LINE}</p>
          <p style={{ ...bodyText, marginBottom: 0 }}>
            Availability varies by week. Contact us directly and we will arrange
            a time for your free initial consultation.
          </p>
        </ContentSection>

        <ConsultationCTA
          heading="Book your free initial consultation"
          intro="Tell us a little about your situation and we will be in touch to arrange a time. The first conversation is free, confidential and carries no obligation."
        />
      </main>
      <Footer />
    </>
  )
}
