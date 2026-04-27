import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import {
  ChevronRight,
  FileText,
  Users,
  Search,
  TrendingDown,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'ATO Debt Negotiation & Reduction | Gold Coast & Brisbane | Australian Financial Advisory',
  description:
    'Struggling with ATO debt or creditor pressure? We review your full financial position and connect you with specialists who negotiate payment plans, debt reduction, and consolidation. Gold Coast, Brisbane and Australia-wide.',
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/reduce-debt/',
  },
  openGraph: {
    title:
      'ATO Debt Negotiation & Reduction | Gold Coast & Brisbane | Australian Financial Advisory',
    description:
      'Struggling with ATO debt or creditor pressure? We review your full financial position and connect you with specialists who negotiate payment plans, debt reduction, and consolidation. Gold Coast, Brisbane and Australia-wide.',
    url: 'https://www.ausfinancialadvisory.com.au/reduce-debt/',
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

export default function ReduceDebtPage() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
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
              fontSize: 220,
              fontWeight: 900,
              color: 'rgba(255,255,255,0.03)',
              right: -40,
              top: '50%',
              transform: 'translateY(-50%)',
              userSelect: 'none',
              lineHeight: 1,
              pointerEvents: 'none',
              letterSpacing: -6,
            }}
          >
            DEBT
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
            <SectionLabel text="Debt Reduction Advisory" light />
            <h1
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Reduce Your Debt.{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '5px',
                  textDecorationColor: 'rgba(255,255,255,0.35)',
                }}
              >
                Protect Your Future.
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
              When ATO debt and creditor pressure is mounting, early negotiation
              is your most powerful tool. Every day without action increases
              your exposure — and narrows your options.
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
                An Independent Review of Your Full Financial Position
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: '#555555',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Before you approach the ATO or any creditor, you need to know
                exactly where you stand. We provide an independent assessment of
                your situation — so you negotiate from a position of knowledge,
                not panic.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 24,
              }}
              className="rd-two-col"
            >
              {[
                {
                  icon: Search,
                  heading: 'Full financial review',
                  body: 'We assess your ATO debt, creditor exposure, cash flow position, and repayment capacity — building a clear picture of where you actually stand.',
                },
                {
                  icon: TrendingDown,
                  heading: 'Negotiation pathway assessment',
                  body: 'We identify every available negotiation and consolidation pathway — ATO payment plans, creditor agreements, and loan consolidation options — and evaluate which are realistic for your situation.',
                },
                {
                  icon: FileText,
                  heading: 'Written report with recommended steps',
                  body: 'You receive a clear written report outlining your position, your options, and the recommended action steps — tailored specifically to your circumstances.',
                },
                {
                  icon: Users,
                  heading: 'Specialist referral',
                  body: 'We connect you with the right specialist in our network to execute the strategy — whether that is ATO payment plan negotiation, creditor negotiation, or loan consolidation.',
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

            {/* Key messages */}
            <div style={{ marginTop: 48 }}>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#1a1a3e',
                  marginBottom: 20,
                }}
              >
                What You Need to Know
              </h3>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
              >
                {[
                  'The ATO will negotiate — but only if you approach them correctly and early. An unguided approach often results in worse outcomes.',
                  'Creditors would often rather settle than pursue — we help you understand your leverage and what a realistic outcome looks like.',
                  'Debt consolidation can simplify repayments and reduce pressure — we connect you with the right people to explore this option.',
                  'Every day without action increases your exposure. The ATO adds interest and penalties daily, and DPN risk grows as time passes.',
                ].map((msg) => (
                  <div
                    key={msg}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 14,
                      padding: '16px 20px',
                      backgroundColor: '#f8f8ff',
                      borderRadius: 8,
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        backgroundColor: '#1a1a3e',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: 11,
                        color: '#ffffff',
                        fontWeight: 700,
                        marginTop: 1,
                      }}
                    >
                      ✓
                    </span>
                    <p
                      style={{
                        fontSize: 15,
                        color: '#444444',
                        lineHeight: 1.6,
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
              The earlier you act, the more options you have. The discovery call
              is free, confidential, and carries no obligation. Let&apos;s work
              out what your best path forward looks like.
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
      </main>
      <Footer />

      <style>{`
        @media (max-width: 767px) {
          .rd-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
