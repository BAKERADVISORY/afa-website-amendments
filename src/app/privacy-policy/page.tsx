import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Australian Financial Advisory Proprietary Limited (ABN 73 680 451 129).',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            backgroundColor: '#111111',
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
            Privacy Policy
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
                backgroundColor: '#f5f5f5',
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
                Australian Financial Advisory Proprietary Limited (ABN 73 680
                451 129) is committed to protecting your personal information in
                accordance with the Australian <em>Privacy Act 1988</em> (Cth)
                and the Australian Privacy Principles (APPs).
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: '#444',
                  lineHeight: 1.8,
                  margin: '12px 0 0',
                }}
              >
                <strong style={{ color: '#111111' }}>Directors:</strong>{' '}
                Jonathan Moy and Jason Baker
              </p>
            </div>

            {/* Sections */}
            {[
              {
                number: '1.',
                title: 'Information We Collect',
                body: 'We collect personal information you provide when you contact us, complete our enquiry form, or engage our services. This may include your name, email address, phone number, company name, ABN, and financial information relevant to your circumstances.',
              },
              {
                number: '2.',
                title: 'How We Use Your Information',
                body: 'We use your personal information to respond to your enquiries, provide advisory services, comply with legal obligations, and improve our services. We do not use your information for unsolicited marketing without your consent.',
              },
              {
                number: '3.',
                title: 'Disclosure to Third Parties',
                body: 'We do not sell or trade your personal information. We may disclose information to professional advisers, regulatory bodies, or as required by law. Any third parties we engage are bound by confidentiality obligations.',
              },
              {
                number: '4.',
                title: 'Data Security',
                body: 'We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, modification, or disclosure. Our systems are secured and access is restricted to authorised personnel only.',
              },
              {
                number: '5.',
                title: 'Access and Correction',
                body: null,
                custom: (
                  <p
                    style={{
                      fontSize: 15,
                      color: '#555',
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    You have the right to access and correct your personal
                    information held by us. To make a request contact us at{' '}
                    <a
                      href="mailto:info@australianfinancialadvisory.com.au"
                      style={{
                        color: '#333333',
                        textDecoration: 'none',
                        fontWeight: 600,
                      }}
                    >
                      info@australianfinancialadvisory.com.au
                    </a>
                  </p>
                ),
              },
              {
                number: '6.',
                title: 'Complaints',
                body: null,
                custom: (
                  <p
                    style={{
                      fontSize: 15,
                      color: '#555',
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    If you believe we have breached your privacy please contact
                    us in writing. If you are not satisfied with our response
                    you may contact the Office of the Australian Information
                    Commissioner at{' '}
                    <a
                      href="https://www.oaic.gov.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#333333',
                        textDecoration: 'none',
                        fontWeight: 600,
                      }}
                    >
                      www.oaic.gov.au
                    </a>
                  </p>
                ),
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
                      color: '#111111',
                      margin: 0,
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
                <div style={{ paddingLeft: 38 }}>
                  {section.body ? (
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
                  ) : (
                    section.custom
                  )}
                </div>
              </div>
            ))}

            {/* Contact block */}
            <div
              style={{
                backgroundColor: '#111111',
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
