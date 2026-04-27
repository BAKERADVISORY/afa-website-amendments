import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Website Terms and Conditions for Australian Financial Advisory Proprietary Limited (ABN 73 680 451 129).',
}

export default function TermsConditionsPage() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            backgroundColor: '#1a1a3e',
            padding: '60px 32px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 12,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: 12,
            }}
          >
            legal
          </p>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: '#FFFFFF',
              margin: '0 auto 12px',
              maxWidth: 700,
            }}
          >
            Terms and Conditions
          </h1>
          <p
            style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', margin: 0 }}
          >
            Last updated: April 2026
          </p>
        </section>

        {/* Content */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '80px 32px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            {/* Intro */}
            <div
              style={{
                backgroundColor: '#f8f8ff',
                borderRadius: 12,
                padding: '28px 32px',
                marginBottom: 48,
                borderLeft: '4px solid #333333',
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: '#444',
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                By accessing this website you agree to the following terms. This
                website is operated by Australian Financial Advisory Proprietary
                Limited (ABN 73 680 451 129), directors Jonathan Moy and Jason
                Baker.
              </p>
            </div>

            {/* Sections */}
            {[
              {
                number: '1.',
                title: 'General Information Only',
                body: 'The content on this website is for general informational purposes only. It does not constitute legal, financial, or professional advice. You should seek independent advice tailored to your specific circumstances before acting on any information on this site.',
              },
              {
                number: '2.',
                title: 'No Liability',
                body: 'Australian Financial Advisory Proprietary Limited makes no representations or warranties about the accuracy or completeness of the information on this website. We are not liable for any loss or damage arising from your reliance on this information.',
              },
              {
                number: '3.',
                title: 'Intellectual Property',
                body: 'All content on this website including text, graphics, and logos is owned by or licensed to Australian Financial Advisory Proprietary Limited. You may not reproduce or use any content without our prior written consent.',
              },
              {
                number: '4.',
                title: 'Links to Third Party Sites',
                body: 'This website may contain links to third party websites. We do not endorse or take responsibility for the content of those sites.',
              },
              {
                number: '5.',
                title: 'Governing Law',
                body: 'These terms are governed by the laws of Queensland, Australia. Any disputes are subject to the exclusive jurisdiction of the courts of Queensland.',
              },
              {
                number: '6.',
                title: 'Changes to These Terms',
                body: 'We may update these terms from time to time. Continued use of this website constitutes acceptance of any changes.',
              },
            ].map((section) => (
              <div key={section.number} style={{ marginBottom: 40 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#333333',
                      minWidth: 28,
                    }}
                  >
                    {section.number}
                  </span>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#1a1a3e',
                      margin: 0,
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div style={{ paddingLeft: 38 }}>
                  <p
                    style={{
                      fontSize: 15,
                      color: '#555',
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {section.body}
                  </p>
                </div>
              </div>
            ))}

            {/* Contact block */}
            <div
              style={{
                backgroundColor: '#1a1a3e',
                borderRadius: 12,
                padding: '32px',
                marginTop: 48,
              }}
            >
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: 16,
                  marginTop: 0,
                }}
              >
                7. Contact Us
              </h2>
              <div
                style={{
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 2,
                }}
              >
                <div style={{ fontWeight: 700, color: '#FFFFFF' }}>
                  Australian Financial Advisory Proprietary Limited
                </div>
                <div>Directors: Jonathan Moy and Jason Baker</div>
                <div>8A/215 Brisbane Rd, Biggera Waters QLD 4216</div>
                <div>
                  Email:{' '}
                  <a
                    href="mailto:info@australianfinancialadvisory.com.au"
                    style={{ color: '#ffffff', textDecoration: 'none' }}
                  >
                    info@australianfinancialadvisory.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
