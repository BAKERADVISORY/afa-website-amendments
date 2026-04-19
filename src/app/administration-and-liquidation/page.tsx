import type { Metadata } from 'next';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { ChevronRight, FileText, Users, Shield, AlertTriangle, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Voluntary Administration & Liquidation Advisory | Australian Financial Advisory',
  description:
    'Facing administration or liquidation? Who appoints the liquidator matters enormously. We help you understand your options and connect you with the right specialist before someone else takes control.',
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/administration-and-liquidation/',
  },
  openGraph: {
    title: 'Administration & Liquidation Advisory | Australian Financial Advisory',
    description:
      'Administration and liquidation do not have to happen to you. Choose your path before someone else chooses it for you.',
    url: 'https://www.ausfinancialadvisory.com.au/administration-and-liquidation/',
  },
};

function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
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
  );
}

export default function AdministrationAndLiquidationPage() {
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
              fontSize: 160,
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
            CONTROL
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
            <SectionLabel text="Administration & Liquidation Advisory" light />
            <h1
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              If It&apos;s Come to This —{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '5px',
                  textDecorationColor: 'rgba(255,255,255,0.35)',
                }}
              >
                Make Sure You&apos;re in Control.
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
              Administration and liquidation do not have to happen to you. Choose your path before
              someone else chooses it for you — because who is in control of the process matters
              enormously.
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
                We Help You Understand Your Position Before Committing to Anything
              </h2>
              <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.75, margin: 0 }}>
                When formal insolvency processes are on the table, the decisions you make in the next
                days or weeks will shape everything that follows. We make sure you understand what
                each option means for you as a director — before you commit to a path.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 24,
                marginBottom: 56,
              }}
              className="aal-two-col"
            >
              {[
                {
                  icon: Search,
                  heading: 'Situation assessment',
                  body: 'We review your business and financial position, your creditor exposure, and the realistic options available to you — including which formal pathways are still open.',
                },
                {
                  icon: Shield,
                  heading: 'Director obligations explained',
                  body: 'We explain your obligations as a director during each process — including insolvent trading exposure, reporting duties, and what you must and must not do while distress continues.',
                },
                {
                  icon: FileText,
                  heading: 'Written report with recommended pathway',
                  body: 'We issue a written report with a clear recommended pathway and the next steps required — so you go into any formal process with eyes open.',
                },
                {
                  icon: Users,
                  heading: 'Specialist referral',
                  body: 'We refer you to a trusted insolvency specialist in our network to execute the process — one who understands your position from the outset.',
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
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111111', margin: 0 }}>{heading}</h3>
                  <p style={{ fontSize: 14, color: '#555555', lineHeight: 1.65, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>

            {/* Key message blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

              {/* Voluntary Administration */}
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111111', marginBottom: 16 }}>
                  Voluntary Administration
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Voluntary administration pauses most creditor action — including legal proceedings — while an external administrator assesses the options available to the business.',
                    'The outcome may be a restructured business through a Deed of Company Arrangement (DOCA), or an orderly wind-down — but the key word is voluntary: you are choosing the process, not being forced into it.',
                    'Acting voluntarily gives you more control than waiting for a creditor to apply to wind up your company through the courts.',
                  ].map((msg) => (
                    <div key={msg} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 18px', backgroundColor: '#f5f5f5', borderRadius: 8 }}>
                      <span style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#111111', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 10, color: '#ffffff', fontWeight: 700, marginTop: 2 }}>✓</span>
                      <p style={{ fontSize: 14, color: '#444444', lineHeight: 1.65, margin: 0 }}>{msg}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Liquidation — strongly emphasised */}
              <div
                style={{
                  backgroundColor: '#111111',
                  borderRadius: 12,
                  padding: '32px 36px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <AlertTriangle size={22} color="#ffffff" />
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', margin: 0 }}>
                    Who Appoints the Liquidator Matters Enormously
                  </h3>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: 20 }}>
                  If your company needs to be wound up, this is the most important decision you will make.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'A creditor-appointed liquidator is not on your side. Their duty is to the creditors — to recover as much money as possible. That includes investigating director conduct.',
                    'A liquidator you engage through our network comes in understanding the full picture — and can manage the process in a way that is fairer to directors while still meeting all legal obligations.',
                    'Choosing your liquidator early can mean the difference between a clean wind-down and a prolonged, damaging, and expensive process.',
                    'Director duties during insolvency are serious — including potential personal liability for insolvent trading. The sooner you take advice, the more you can do to protect your position.',
                    'Do not wait for a creditor to appoint a liquidator against you. By the time that happens, you have lost all influence over how the process unfolds.',
                  ].map((msg) => (
                    <div key={msg} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 18px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 8 }}>
                      <span style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 10, color: '#ffffff', fontWeight: 700, marginTop: 2 }}>✓</span>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, margin: 0 }}>{msg}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Director protection */}
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111111', marginBottom: 16 }}>
                  Director Protection
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Insolvent trading — continuing to incur debts when you know or should know the company cannot pay them — is a personal liability risk for directors.',
                    'The sooner you take independent advice, the more you can do to protect yourself from this exposure.',
                    'We help you understand exactly where you stand before any formal process begins — so you make decisions with full knowledge of your obligations.',
                  ].map((msg) => (
                    <div key={msg} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 18px', backgroundColor: '#f5f5f5', borderRadius: 8 }}>
                      <span style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#111111', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 10, color: '#ffffff', fontWeight: 700, marginTop: 2 }}>✓</span>
                      <p style={{ fontSize: 14, color: '#444444', lineHeight: 1.65, margin: 0 }}>{msg}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section style={{ backgroundColor: '#ffffff', padding: '24px 0' }}>
          <p style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', fontSize: 12, color: '#888888', lineHeight: 1.7, textAlign: 'center' }}>
            The information on this page is general in nature and does not constitute legal,
            financial, or insolvency advice. Australian Financial Advisory Pty Ltd provides
            assessment and advisory services only. All specialist services are referred to
            appropriately licensed partners. You should seek independent professional advice before
            acting on any information on this page.
          </p>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
            <SectionLabel text="Get Started" light />
            <h2 style={{ fontSize: 42, fontWeight: 700, color: '#ffffff', marginBottom: 16, lineHeight: 1.2 }}>
              Schedule Your Discovery Call
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 36 }}>
              The earlier you act, the more control you have over what happens next. The discovery
              call is free, confidential, and carries no obligation.
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
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 20 }}>
              Confidential · No obligation · Fast response
            </p>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 767px) {
          .aal-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
