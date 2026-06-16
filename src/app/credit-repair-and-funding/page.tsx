import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { ChevronRight, Users, Search } from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Credit Repair & Business Funding Solutions | Gold Coast & Brisbane | Australian Financial Advisory',
  description:
    'Understanding your credit and funding options starts with general information. Australian Financial Advisory provides general guidance only. Credit repair and specialist services must be arranged through appropriately licensed providers.',
  alternates: {
    canonical:
      'https://www.ausfinancialadvisory.com.au/credit-repair-and-funding/',
  },
  openGraph: {
    title:
      'Credit Repair & Business Funding Solutions | Gold Coast & Brisbane | Australian Financial Advisory',
    description:
      'Understanding your credit and funding options starts with general information. Australian Financial Advisory provides general guidance only. Credit repair and specialist services must be arranged through appropriately licensed providers.',
    url: 'https://www.ausfinancialadvisory.com.au/credit-repair-and-funding/',
  },
}

function SectionLabel({
  text,
  light = false,
}: {
  text: string
  light?: boolean
}) {
  return (
    <p
      style={{
        fontSize: 12,
        letterSpacing: 3,
        textTransform: 'uppercase',
        color: light ? 'rgba(255,255,255,0.5)' : '#999999',
        marginBottom: 12,
      }}
    >
      {text}
    </p>
  )
}

export default function CreditRepairAndFundingPage() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          className="svc-hero"
          style={{
            backgroundColor: '#1a1a3e',
            padding: '100px 0 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              fontSize: 180,
              fontWeight: 900,
              color: 'rgba(255,255,255,0.03)',
              right: -40,
              top: '50%',
              transform: 'translateY(-50%)',
              userSelect: 'none',
              lineHeight: 1,
              pointerEvents: 'none',
              letterSpacing: -4,
            }}
          >
            CREDIT
          </div>
          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
              padding: '0 32px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <SectionLabel text="Credit Repair & Funding" light />
            <h1
              className="mobile-hero-title"
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Defaults and Bad Credit{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '5px',
                  textDecorationColor: 'rgba(255,255,255,0.35)',
                }}
              >
                Don&apos;t Have to Be Permanent.
              </span>
            </h1>
            <p
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.7,
                maxWidth: 680,
                marginBottom: 36,
              }}
            >
              Whether it&apos;s your business or your personal credit — there
              are options. We provide general information to help you understand
              what those options may look like, and point you toward
              appropriately licensed specialists who can assist.
            </p>
            <a
              href="/#contact"
              className="mobile-full-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: '#ffffff',
                color: '#1a1a3e',
                borderRadius: 50,
                padding: '14px 28px',
                fontSize: 15,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Book a Discovery Call
              <ChevronRight size={16} />
            </a>
          </div>
        </section>

        {/* What We Do */}
        <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
            <div style={{ maxWidth: 700, marginBottom: 48 }}>
              <SectionLabel text="What We Do" />
              <h2
                style={{
                  fontSize: 38,
                  fontWeight: 700,
                  color: '#1a1a3e',
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                General Information About Credit and Funding Options
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: '#555555',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Before pursuing credit repair or funding, it helps to understand
                what the general options are and what licensed specialists can
                do. We provide general information only. We do not review credit
                files, assess disputes, or issue reports. If you need specialist
                assistance, we can point you toward appropriately licensed
                providers.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 24,
                marginBottom: 56,
              }}
              className="crf-two-col"
            >
              {[
                {
                  icon: Search,
                  heading: 'Understanding Your Options',
                  body: 'We can provide general information about what credit repair and funding pathways typically look like, and help you understand what questions to ask a licensed specialist.',
                },
                {
                  icon: Users,
                  heading: 'Finding the Right Specialist',
                  body: 'Credit repair and debt negotiation must be performed by appropriately licensed providers. We can assist you in identifying the right type of specialist for your situation.',
                },
              ].map(({ icon: Icon, heading, body }) => (
                <div
                  key={heading}
                  style={{
                    backgroundColor: '#f8f8ff',
                    borderRadius: 12,
                    padding: '28px 32px',
                    borderTop: '3px solid #9b8ec4',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      backgroundColor: '#1a1a3e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} color="#ffffff" />
                  </div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: '#1a1a3e',
                      margin: 0,
                    }}
                  >
                    {heading}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: '#555555',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>

            {/* Credit Repair */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#1a1a3e',
                    marginBottom: 16,
                  }}
                >
                  Credit Repair
                </h3>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                >
                  {[
                    'Defaults, court judgments, and negative credit listings can affect your ability to access finance for your business and personally.',
                    'Credit repair services — including disputing listings and negotiating with lenders — must be performed by providers holding an appropriate Australian Credit Licence. Australian Financial Advisory does not hold a credit licence and does not perform credit repair services.',
                    'If you believe you have grounds to dispute a listing or need assistance with your credit file, you should seek advice from an appropriately licensed credit repair provider or a financial counsellor. Financial counselling services are available free of charge through the National Debt Helpline at ndh.org.au.',
                  ].map((msg) => (
                    <div
                      key={msg}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 14,
                        padding: '14px 18px',
                        backgroundColor: '#f8f8ff',
                        borderRadius: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          backgroundColor: '#1a1a3e',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: 10,
                          color: '#ffffff',
                          fontWeight: 700,
                          marginTop: 2,
                        }}
                      >
                        ✓
                      </span>
                      <p
                        style={{
                          fontSize: 14,
                          color: '#444444',
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {msg}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Funding */}
              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#1a1a3e',
                    marginBottom: 16,
                  }}
                >
                  Funding Solutions
                </h3>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                >
                  {[
                    'If your credit position is affecting your ability to access finance, there may be specialist lenders and brokers who work with borrowers in complex financial situations.',
                    'Australian Financial Advisory does not provide credit, arrange loans, or act as a credit broker. Any funding solutions would need to be arranged through an appropriately licensed broker or lender.',
                    'If you would like general information about what options may exist for your situation, contact us and we can provide general guidance only.',
                  ].map((msg) => (
                    <div
                      key={msg}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 14,
                        padding: '14px 18px',
                        backgroundColor: '#f8f8ff',
                        borderRadius: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          backgroundColor: '#1a1a3e',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: 10,
                          color: '#ffffff',
                          fontWeight: 700,
                          marginTop: 2,
                        }}
                      >
                        ✓
                      </span>
                      <p
                        style={{
                          fontSize: 14,
                          color: '#444444',
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {msg}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section style={{ backgroundColor: '#ffffff', padding: '24px 0' }}>
          <p
            style={{
              maxWidth: 800,
              margin: '0 auto',
              padding: '0 32px',
              fontSize: 12,
              color: '#888888',
              lineHeight: 1.7,
              textAlign: 'center',
            }}
          >
            The information on this page is general in nature and does not
            constitute legal, financial, or insolvency advice. Australian
            Financial Advisory Pty Ltd provides assessment and advisory services
            only. All specialist services are referred to appropriately licensed
            partners. You should seek independent professional advice before
            acting on any information on this page.
          </p>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#1a1a3e', padding: '80px 0' }}>
          <div
            style={{
              maxWidth: 700,
              margin: '0 auto',
              padding: '0 32px',
              textAlign: 'center',
            }}
          >
            <SectionLabel text="Get Started" light />
            <h2
              style={{
                fontSize: 42,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              Schedule Your Discovery Call
            </h2>
            <p
              style={{
                fontSize: 17,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              The discovery call is free, confidential, and carries no
              obligation. Let&apos;s understand your credit and funding
              situation and work out the best path forward.
            </p>
            <a
              href="/#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: '#ffffff',
                color: '#1a1a3e',
                borderRadius: 50,
                padding: '16px 36px',
                fontSize: 16,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Book Your Free Discovery Call
              <ChevronRight size={16} />
            </a>
            <p
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.4)',
                marginTop: 20,
              }}
            >
              Confidential · No obligation · Fast response
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section style={{ backgroundColor: '#f8f8ff', padding: '32px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <p
              style={{
                fontSize: 13,
                color: '#888888',
                lineHeight: 1.65,
                textAlign: 'center',
                margin: 0,
              }}
            >
              Credit repair and funding services are provided by licensed
              specialists within our referral network. Australian Financial
              Advisory provides assessment and advisory services only and refers
              clients to appropriately licensed partners.
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 767px) {
          .svc-hero { padding: 40px 0 !important; }
          .crf-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
