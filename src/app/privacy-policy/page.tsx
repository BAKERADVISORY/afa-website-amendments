import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import type { Metadata } from 'next'
import { absUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Australian Financial Advisory Proprietary Limited (ABN 73 680 451 129).',
  alternates: {
    canonical: absUrl('/privacy-policy'),
  },
}

const policyText: React.CSSProperties = {
  fontSize: 15,
  color: '#555',
  lineHeight: 1.8,
  margin: '0 0 16px',
}

export default function PrivacyPolicyPage() {
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
              items={[{ name: 'Home', href: '/' }, { name: 'Privacy Policy' }]}
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: 15, color: '#DEDCEC', margin: 0 }}>
            Last updated: October 2026
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
                Australian Financial Advisory Proprietary Limited (ABN 73 680
                451 129) is committed to protecting your personal information in
                accordance with the Australian <em>Privacy Act 1988</em> (Cth)
                and the Australian Privacy Principles (APPs).
              </p>
            </div>

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
                title: 'Cookies, Analytics and Advertising',
                body: null,
                custom: (
                  <>
                    <p style={policyText}>
                      Our website uses Google Analytics to understand how the
                      website is used. With your permission, it also uses Google
                      Tag Manager to load advertising measurement tags from
                      Google Ads and Meta. These tools may set cookies that help
                      us understand how the website is used and measure how our
                      advertising performs, including when an enquiry form is
                      submitted.
                    </p>
                    <p style={policyText}>
                      Analytics and advertising cookies are optional. When you
                      first visit, a banner asks you to choose Accept analytics
                      or Decline. Until you accept, these cookies stay off. If
                      you decline, they stay off and any of these cookies
                      already set by our website are removed. Declining does
                      not limit your access to any part of the website.
                    </p>
                    <p style={policyText}>
                      While cookies are off, Google Analytics may still receive
                      limited information that does not rely on cookies, such as
                      the fact that a page was viewed. The Google Ads and Meta
                      tags are not loaded until you accept.
                    </p>
                    <p style={{ ...policyText, marginBottom: 0 }}>
                      You can change your choice at any time using the Privacy
                      choices link in the footer of every page. Your choice is
                      stored in your browser, so clearing your browser data
                      will also reset it and the banner will appear again.
                    </p>
                  </>
                ),
              },
              {
                number: '6.',
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
                      className="afa-crumb-link"
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
                number: '7.',
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
                      className="afa-crumb-link"
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
