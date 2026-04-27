import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import {
  ChevronRight,
  FileText,
  Users,
  Search,
  AlertTriangle,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Business Restructure Advisory | Small Business Restructure & Administration | Australian Financial Advisory',
  description:
    'Facing business financial distress? We assess every restructure, administration, and liquidation option — and connect you with the right specialist. Act before your options narrow.',
  alternates: {
    canonical:
      'https://www.ausfinancialadvisory.com.au/restructure-your-business/',
  },
  openGraph: {
    title: 'Business Restructure Advisory | Australian Financial Advisory',
    description:
      'A business restructure can give you a fresh start without the permanent mark of formal insolvency. Early action keeps more options open.',
    url: 'https://www.ausfinancialadvisory.com.au/restructure-your-business/',
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

export default function RestructureYourBusinessPage() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            backgroundColor: '#111111',
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
            RESTRUCTURE
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
            <SectionLabel text="Business Restructure Advisory" light />
            <h1
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Restructure Before{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '5px',
                  textDecorationColor: 'rgba(255,255,255,0.35)',
                }}
              >
                It&apos;s Too Late.
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
              A business restructure can give you a fresh start — without the
              permanent mark of formal insolvency. But the window to act is
              narrow. Once cash flow collapses, the options that were available
              disappear quickly.
            </p>
            <a
              href="/#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: '#ffffff',
                color: '#000000',
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
                  color: '#111111',
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                We Assess Every Option Before Recommending a Path
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: '#555555',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Not every business in distress needs to close. And not every
                business that needs to close should do so through formal
                insolvency. We assess the full picture before making any
                recommendation.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 24,
                marginBottom: 56,
              }}
              className="ryb-two-col"
            >
              {[
                {
                  icon: Search,
                  heading: 'Business and financial review',
                  body: 'We review your business structure, financials, and creditor position — building a clear picture of what you owe, who you owe it to, and what options remain available.',
                },
                {
                  icon: FileText,
                  heading: 'Small Business Restructure assessment',
                  body: 'We assess whether a formal Small Business Restructure (SBR) is available to you — a process that allows eligible directors to restructure debts while remaining in control of their business.',
                },
                {
                  icon: AlertTriangle,
                  heading: 'Administration and liquidation options',
                  body: 'Where restructuring is not possible or not appropriate, we assess administration and liquidation options — and help you understand the implications of each before committing to anything.',
                },
                {
                  icon: Users,
                  heading: 'Written report and specialist referral',
                  body: 'We issue a written report with clear recommended action steps, then refer you to the right specialist in our network to execute the pathway — whether that is restructuring, administration, or an orderly wind-down.',
                },
              ].map(({ icon: Icon, heading, body }) => (
                <div
                  key={heading}
                  style={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: 12,
                    padding: '28px 32px',
                    borderTop: '3px solid #333333',
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
                      backgroundColor: '#111111',
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
                      color: '#111111',
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

            {/* Key message blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {/* SBR */}
              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: 16,
                  }}
                >
                  Small Business Restructure
                </h3>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                >
                  {[
                    'The Small Business Restructuring process allows eligible businesses to restructure debts while the director remains in control — unlike administration, which appoints an external controller.',
                    'It is less disruptive, less expensive, and carries a lighter long-term stigma than voluntary administration or liquidation.',
                    'It requires early action. Once cash flow collapses and the business cannot meet its obligations, the SBR pathway may no longer be available.',
                  ].map((msg) => (
                    <div
                      key={msg}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 14,
                        padding: '14px 18px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          backgroundColor: '#111111',
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

              {/* Administration */}
              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: 16,
                  }}
                >
                  Voluntary Administration
                </h3>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                >
                  {[
                    'Voluntary administration gives your business breathing room — it pauses most creditor action while an administrator assesses options.',
                    'The outcome may be a Deed of Company Arrangement (DOCA) that restructures the business and allows it to continue, or an orderly wind-down if that is the better outcome.',
                  ].map((msg) => (
                    <div
                      key={msg}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 14,
                        padding: '14px 18px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          backgroundColor: '#111111',
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

              {/* Liquidation — emphasised */}
              <div
                style={{
                  backgroundColor: '#111111',
                  borderRadius: 12,
                  padding: '32px 36px',
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: 8,
                  }}
                >
                  If Liquidation Is Inevitable — Choose Your Own Liquidator
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.65,
                    marginBottom: 20,
                  }}
                >
                  This is one of the most important decisions you can make in a
                  distressed situation.
                </p>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                >
                  {[
                    'A liquidator appointed by creditors works for the creditors — not for you. Their job is to recover money for the people you owe.',
                    'A liquidator you choose through our network understands your position from the outset — and can manage the process in a way that protects directors where possible.',
                    'Early engagement means more control over the outcome — and directors who act first are in a far stronger position than those who wait for a creditor to force the issue.',
                    'Do not wait for a creditor to appoint a liquidator against you. By the time that happens, you have lost all influence over the process.',
                  ].map((msg) => (
                    <div
                      key={msg}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 14,
                        padding: '14px 18px',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        borderRadius: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255,255,255,0.15)',
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
                          color: 'rgba(255,255,255,0.75)',
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
        <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
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
                color: '#000000',
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
          .ryb-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
