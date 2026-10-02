import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import type { Metadata } from 'next'
import { absUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Website Terms and Conditions for Australian Financial Advisory Proprietary Limited (ABN 73 680 451 129).',
  alternates: {
    canonical: absUrl('/website-terms-conditions'),
  },
}

export default function TermsConditionsPage() {
  return (
    <>
      <NavBar />
      <main id="main">
        <section
          style={{
            backgroundColor: '#1a1a3e',
            padding: '100px 32px 60px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'left' }}>
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Terms and Conditions' },
              ]}
              tone="dark"
            />
          </div>
          <p
            style={{
              fontSize: 12,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#DEDCEC',
              marginBottom: 12,
            }}
          >
            Legal
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
          <p style={{ fontSize: 15, color: '#DEDCEC', margin: 0 }}>
            Last updated: April 2026
          </p>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: '80px 32px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div
              style={{
                backgroundColor: '#f8f8ff',
                borderRadius: 12,
                padding: '28px 32px',
                marginBottom: 48,
                borderLeft: '4px solid #9b8ec4',
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
                Limited (ABN 73 680 451 129).
              </p>
            </div>

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
                    aria-hidden="true"
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
