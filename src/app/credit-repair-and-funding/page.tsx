import type { Metadata } from 'next';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { ChevronRight, FileText, Users, Search, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Credit Repair & Funding Solutions | Australian Financial Advisory',
  description:
    'Defaults, judgments, and bad credit listings do not have to be permanent. We assess your credit position and connect you with licensed specialists who can help.',
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/credit-repair-and-funding/',
  },
  openGraph: {
    title: 'Credit Repair & Funding Solutions | Australian Financial Advisory',
    description:
      'Whether it\'s your business or personal credit — there are options. We assess your position and refer you to the right specialist.',
    url: 'https://www.ausfinancialadvisory.com.au/credit-repair-and-funding/',
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

export default function CreditRepairAndFundingPage() {
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
              Whether it&apos;s your business or your personal credit — there are options. We help
              you find them. We assess your credit position, identify what can be disputed or
              resolved, and connect you with the right specialist to act.
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
                A Clear Assessment of Your Credit Position and Funding Options
              </h2>
              <p style={{ fontSize: 16, color: '#555555', lineHeight: 1.75, margin: 0 }}>
                Before pursuing credit repair or funding, you need to understand exactly what is on
                your credit file, what can realistically be disputed, and what funding options remain
                available given your current position. That is what we provide.
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
                  heading: 'Credit position review',
                  body: 'We review your credit file — business and personal — including defaults, court judgments, and any other negative listings, and assess what options exist.',
                },
                {
                  icon: CreditCard,
                  heading: 'Dispute and resolution assessment',
                  body: 'We assess whether defaults, judgments, or listings on your credit file can be disputed or resolved — including where information is inaccurate, incomplete, or incorrectly listed.',
                },
                {
                  icon: FileText,
                  heading: 'Funding needs review',
                  body: 'We review your funding requirements and current borrowing capacity — and assess what funding solutions may be available through our specialist broker network.',
                },
                {
                  icon: Users,
                  heading: 'Written report and specialist referral',
                  body: 'We issue a written report with recommended action steps, then refer you to a licensed credit specialist or broker in our network who can execute the strategy.',
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

            {/* Credit Repair */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111111', marginBottom: 16 }}>
                  Credit Repair
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Defaults, court judgments, and negative credit listings can prevent you from accessing finance — for your business and personally. They can affect everything from loan applications to lease approvals.',
                    'We work with licensed credit specialists in our network who can assess your credit file and pursue legitimate disputes on your behalf where grounds exist.',
                    'Not all negative listings can be removed — but many can be disputed where the information is inaccurate, incomplete, or incorrectly listed. We make sure you understand what is realistic before any work begins.',
                    'We never make promises about outcomes. But we do make sure you understand your options before committing to any credit repair pathway.',
                  ].map((msg) => (
                    <div key={msg} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 18px', backgroundColor: '#f5f5f5', borderRadius: 8 }}>
                      <span style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#111111', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 10, color: '#ffffff', fontWeight: 700, marginTop: 2 }}>✓</span>
                      <p style={{ fontSize: 14, color: '#444444', lineHeight: 1.65, margin: 0 }}>{msg}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Funding */}
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111111', marginBottom: 16 }}>
                  Funding Solutions
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'If your credit position is affecting your ability to access finance, there may still be solutions available — even where mainstream lenders have said no.',
                    'We have a network of brokers who specialise in finding funding solutions for businesses and individuals in complex financial situations — including those with defaults, prior insolvency, or non-standard income structures.',
                    'Whether you need business finance, equipment funding, or personal lending — our network works to find a solution where others may have declined.',
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
              The discovery call is free, confidential, and carries no obligation. Let&apos;s
              understand your credit and funding situation and work out the best path forward.
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

        {/* Disclaimer */}
        <section style={{ backgroundColor: '#f5f5f5', padding: '32px 0' }}>
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
              Credit repair and funding services are provided by licensed specialists within our
              referral network. Australian Financial Advisory provides assessment and advisory
              services only and refers clients to appropriately licensed partners.
            </p>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 767px) {
          .crf-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
