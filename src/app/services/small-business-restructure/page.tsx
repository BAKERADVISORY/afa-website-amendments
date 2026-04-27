import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Small Business Restructuring Gold Coast QLD | SBR Practitioners',
  description:
    'Small Business Restructuring (SBR) lets viable businesses restructure debts under $1 million while directors remain in control. Expert SBR practitioners serving Gold Coast QLD 4216 and Australia. Eligibility check - free consultation.',
  keywords: [
    'small business restructuring Gold Coast',
    'SBR practitioners Queensland',
    'small business restructuring plan Australia',
    'business debt restructuring QLD',
  ],
  alternates: {
    canonical:
      'https://www.ausfinancialadvisory.com.au/services/small-business-restructure/',
  },
  openGraph: {
    title: 'Small Business Restructuring Gold Coast QLD | SBR Practitioners',
    description:
      'Restructure debts under $1M while keeping control of your business. Expert SBR practitioners in Gold Coast QLD.',
    url: 'https://www.ausfinancialadvisory.com.au/services/small-business-restructure/',
  },
}
import { CTABanner } from '@/components/CTABanner'
import { Footer } from '@/components/Footer'
import { CheckCircle, Clock, Calendar } from 'lucide-react'

function PlaceholderImage({
  height = 400,
  label = 'Image',
}: {
  height?: number
  label?: string
}) {
  return (
    <div
      style={{
        width: '100%',
        height,
        backgroundColor: '#D1D5DB',
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9CA3AF',
        fontSize: 14,
        fontWeight: 500,
      }}
    >
      {label}
    </div>
  )
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Small Business Restructuring',
  serviceType: 'Small Business Restructuring',
  description:
    'A formal insolvency process that helps viable small businesses restructure debts under $1 million while directors remain in control of the business.',
  provider: {
    '@type': 'FinancialService',
    name: 'Australian Financial Advisory',
    url: 'https://www.ausfinancialadvisory.com.au',
    telephone: '1300052321',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gold Coast',
      addressRegion: 'QLD',
      postalCode: '4216',
      addressCountry: 'AU',
    },
  },
  areaServed: { '@type': 'Country', name: 'Australia' },
  url: 'https://www.ausfinancialadvisory.com.au/services/small-business-restructure/',
}

export default function SmallBusinessRestructurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavBar />
      <main>
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: '#1a1a3e',
            paddingTop: 160,
            paddingBottom: 80,
            paddingLeft: 80,
            paddingRight: 80,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <p
              style={{
                color: '#333333',
                textTransform: 'uppercase',
                fontSize: 12,
                letterSpacing: 3,
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              DEBT RESTRUCTURING SERVICE
            </p>
            <h1
              style={{
                color: '#FFFFFF',
                fontSize: 52,
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 24,
                maxWidth: 700,
              }}
            >
              Small Business Restructure
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: 18,
                lineHeight: 1.6,
                marginBottom: 36,
                maxWidth: 640,
              }}
            >
              Give your business a fresh start with our Small Business
              Restructuring Process. A formal insolvency procedure designed to
              help viable businesses recover while maintaining control.
            </p>
            <a
              href="/contact/"
              style={{
                backgroundColor: '#333333',
                color: '#FFFFFF',
                borderRadius: 50,
                padding: '14px 28px',
                fontSize: 16,
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Free Consultation →
            </a>
          </div>
          {/* Wave divider */}
          <div
            style={{
              position: 'absolute',
              bottom: -1,
              left: '-35%',
              width: '171%',
              height: 100,
            }}
          >
            <svg
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              style={{ width: '100%', height: '100%' }}
            >
              <path
                d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </section>

        {/* Quick Assessment Section */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 64,
                alignItems: 'center',
              }}
            >
              {/* Left column */}
              <div>
                <p
                  style={{
                    color: '#333333',
                    textTransform: 'uppercase',
                    fontSize: 12,
                    letterSpacing: 3,
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  QUICK ASSESSMENT
                </p>
                <h2
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: '#383838',
                    marginBottom: 16,
                    lineHeight: 1.25,
                  }}
                >
                  Is Your Business Eligible?
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: '#666666',
                    lineHeight: 1.6,
                    marginBottom: 28,
                  }}
                >
                  The SBR process has specific eligibility requirements. Check
                  if your business qualifies:
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    marginBottom: 32,
                  }}
                >
                  {[
                    'Debt under $1 million',
                    'Incorporated Australian company',
                    'Lodgements up to date',
                    'Superannuation paid',
                    'Viable business model',
                    'No prior SBR in 7 years',
                  ].map((item) => (
                    <div
                      key={item}
                      style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                    >
                      <CheckCircle
                        size={20}
                        color="#333333"
                        style={{ flexShrink: 0 }}
                      />
                      <span style={{ color: '#383838', fontSize: 16 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact/"
                  style={{
                    color: '#333333',
                    fontSize: 16,
                    fontWeight: 600,
                    textDecoration: 'none',
                    borderBottom: '1px solid #333333',
                    paddingBottom: 2,
                  }}
                >
                  Check Your Eligibility →
                </a>
              </div>
              {/* Right column */}
              <div>
                <PlaceholderImage height={420} label="Business Assessment" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SBR Section */}
        <section style={{ backgroundColor: '#f8f8ff', padding: '80px 0' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
            <p
              style={{
                color: '#333333',
                textTransform: 'uppercase',
                fontSize: 12,
                letterSpacing: 3,
                fontWeight: 600,
                textAlign: 'center',
                marginBottom: 12,
              }}
            >
              WHY CHOOSE SBR
            </p>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: '#383838',
                textAlign: 'center',
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              Why Choose Small Business Restructuring?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#666666',
                textAlign: 'center',
                maxWidth: 800,
                margin: '0 auto 48px',
                lineHeight: 1.6,
              }}
            >
              SBR is a formal insolvency process that offers a lifeline for
              struggling small businesses, providing a structured pathway to
              recovery while maintaining business control.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
              }}
            >
              {[
                'Structured debt repayment process',
                'Maintain control of your business',
                'Protection from creditor actions',
                'Flexible repayment terms',
                'Reduced debt obligations',
                'Preserve business relationships',
              ].map((benefit) => (
                <div
                  key={benefit}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#333333',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: '#383838', fontSize: 16 }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our SBR Process Section */}
        <section style={{ backgroundColor: '#1a1a3e', padding: '80px 0' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
            <p
              style={{
                color: '#333333',
                textTransform: 'uppercase',
                fontSize: 12,
                letterSpacing: 3,
                fontWeight: 600,
                textAlign: 'center',
                marginBottom: 12,
              }}
            >
              OUR PROCESS
            </p>
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#FFFFFF',
                textAlign: 'center',
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              Our SBR Process
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.7)',
                textAlign: 'center',
                maxWidth: 700,
                margin: '0 auto 56px',
                lineHeight: 1.6,
              }}
            >
              We guide you through every step of the Small Business
              Restructuring process to ensure the best possible outcome for your
              business.
            </p>
            <div style={{ maxWidth: 600, margin: '0 auto' }}>
              {[
                {
                  num: 1,
                  title: 'Eligibility Assessment',
                  desc: 'We evaluate if your business meets the SBR criteria including debt thresholds and trading history.',
                },
                {
                  num: 2,
                  title: 'Plan Development',
                  desc: 'Create a comprehensive restructuring plan that addresses your specific financial situation.',
                },
                {
                  num: 3,
                  title: 'Creditor Proposal',
                  desc: 'Present the plan to creditors and negotiate favourable terms for debt repayment.',
                },
                {
                  num: 4,
                  title: 'Implementation',
                  desc: 'Execute the approved plan whilst we monitor progress and ensure compliance.',
                },
              ].map((step, index, arr) => (
                <div key={step.num}>
                  <div
                    style={{
                      display: 'flex',
                      gap: 20,
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        backgroundColor: '#333333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: 18,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {step.num}
                    </div>
                    <div style={{ paddingTop: 8 }}>
                      <h3
                        style={{
                          color: '#FFFFFF',
                          fontWeight: 700,
                          fontSize: 18,
                          marginBottom: 6,
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: 15,
                          lineHeight: 1.6,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  {index < arr.length - 1 && (
                    <div
                      style={{
                        width: 2,
                        height: 40,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        marginLeft: 21,
                        marginTop: 4,
                        marginBottom: 4,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Time Statistics Section */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '60px 0' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 32,
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  backgroundColor: '#f8f8ff',
                  borderRadius: 12,
                  padding: 40,
                  textAlign: 'center',
                  maxWidth: 300,
                  width: '100%',
                }}
              >
                <Clock size={36} color="#333333" style={{ marginBottom: 16 }} />
                <p
                  style={{
                    fontSize: 42,
                    fontWeight: 700,
                    color: '#1a1a3e',
                    marginBottom: 8,
                    lineHeight: 1.1,
                  }}
                >
                  4 - 6 Weeks
                </p>
                <p style={{ fontSize: 15, color: '#666666' }}>
                  Time Under Restructure Proposal
                </p>
              </div>
              <div
                style={{
                  backgroundColor: '#f8f8ff',
                  borderRadius: 12,
                  padding: 40,
                  textAlign: 'center',
                  maxWidth: 300,
                  width: '100%',
                }}
              >
                <Calendar
                  size={36}
                  color="#333333"
                  style={{ marginBottom: 16 }}
                />
                <p
                  style={{
                    fontSize: 42,
                    fontWeight: 700,
                    color: '#1a1a3e',
                    marginBottom: 8,
                    lineHeight: 1.1,
                  }}
                >
                  0 - 36 Months
                </p>
                <p style={{ fontSize: 15, color: '#666666' }}>
                  Time Under Restructure Plan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '48px 0' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#1a1a3e',
                marginBottom: 24,
              }}
            >
              Related Services
            </h2>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a
                href="/services/voluntary-administration/"
                style={{
                  backgroundColor: '#f8f8ff',
                  borderRadius: 8,
                  padding: '14px 20px',
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#1a1a3e',
                  textDecoration: 'none',
                }}
              >
                Voluntary Administration &rarr;
              </a>
              <a
                href="/services/creditors-voluntary-liquidation/"
                style={{
                  backgroundColor: '#f8f8ff',
                  borderRadius: 8,
                  padding: '14px 20px',
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#1a1a3e',
                  textDecoration: 'none',
                }}
              >
                Creditors Voluntary Liquidation &rarr;
              </a>
              <a
                href="/reduce-debt/"
                style={{
                  backgroundColor: '#f8f8ff',
                  borderRadius: 8,
                  padding: '14px 20px',
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#1a1a3e',
                  textDecoration: 'none',
                }}
              >
                Reduce Business Debt &rarr;
              </a>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
