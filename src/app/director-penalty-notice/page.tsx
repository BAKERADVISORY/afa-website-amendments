import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Director Penalty Notice Help | ATO DPN Advice | Gold Coast & Brisbane | Australian Financial Advisory',
  description:
    'The ATO issued over 84,000 Director Penalty Notices in FY2025 covering $5.5 billion in company tax debts. If you have received a DPN or are at risk, act immediately. We help directors across Gold Coast, Brisbane and Australia understand their options.',
  alternates: {
    canonical:
      'https://www.ausfinancialadvisory.com.au/director-penalty-notice/',
  },
  openGraph: {
    title:
      'Director Penalty Notice Help | ATO DPN Advice | Gold Coast & Brisbane | Australian Financial Advisory',
    description:
      'The ATO issued over 84,000 Director Penalty Notices in FY2025 covering $5.5 billion in company tax debts. If you have received a DPN or are at risk, act immediately. We help directors across Gold Coast, Brisbane and Australia understand their options.',
    url: 'https://www.ausfinancialadvisory.com.au/director-penalty-notice/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Director Penalty Notice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Director Penalty Notice (DPN) is a formal notice issued by the ATO that makes a company director personally liable for unpaid PAYG withholding, GST, and superannuation guarantee charge debts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I resign as director to avoid a DPN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Resigning as a director does not discharge liability for non-compliance that occurred during your tenure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I do nothing after receiving a DPN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you take no action on a Non-Lockdown DPN within 21 days, your personal liability becomes permanent and the ATO can pursue your personal assets including your home at any time in the future.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the ATO take my house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once a DPN is locked down the ATO can issue garnishee notices, offset tax refunds, commence legal proceedings, and ultimately pursue personal assets including your home.',
      },
    },
  ],
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p
      style={{
        fontSize: 12,
        letterSpacing: 3,
        textTransform: 'uppercase',
        color: '#999999',
        marginBottom: 12,
      }}
    >
      {text}
    </p>
  )
}

export default function DirectorPenaltyNoticePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavBar />
      <main style={{ paddingTop: 80 }}>
        {/* 1. Hero */}
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
              fontSize: 260,
              fontWeight: 900,
              color: 'rgba(255,255,255,0.03)',
              right: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              userSelect: 'none',
              lineHeight: 1,
              pointerEvents: 'none',
              letterSpacing: -8,
            }}
          >
            DPN
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
            <SectionLabel text="Director Penalty Notice" />
            <h1
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Director Penalty Notice —{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '5px',
                  textDecorationColor: 'rgba(255,255,255,0.35)',
                }}
              >
                Act Now or Risk Everything
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
              The ATO issued over 84,000 Director Penalty Notices in FY2025
              alone. Your personal assets — including your family home — are at
              risk. Every day without action narrows your options.
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
              Schedule Your Discovery Call
              <ChevronRight size={16} />
            </a>
          </div>
        </section>

        {/* 2. What Is a Director Penalty Notice */}
        <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <SectionLabel text="What is a DPN" />
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#111111',
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              What Is a Director Penalty Notice?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#555555',
                lineHeight: 1.75,
                marginBottom: 20,
              }}
            >
              A Director Penalty Notice (DPN) is a formal notice issued by the
              Australian Taxation Office (ATO) that makes a company director
              personally liable for certain unpaid company tax debts. Unlike
              other company debts, a DPN pierces the corporate veil — meaning
              the protection of your company structure is removed and you become
              personally responsible for the debt. The ATO can then pursue your
              personal assets including your home, savings, and investments to
              recover what is owed.
            </p>
            <p
              style={{
                fontSize: 16,
                color: '#555555',
                lineHeight: 1.75,
                marginBottom: 20,
              }}
            >
              The ATO issued over 84,000 DPNs in FY2024-25, covering
              approximately $5.5 billion in company tax liabilities — a dramatic
              increase from 26,702 notices issued the prior year. This is not a
              tool reserved for large businesses with significant debts. Every
              debt is now on the ATO&apos;s radar.
            </p>
            <div
              style={{
                backgroundColor: '#f5f5f5',
                borderRadius: 10,
                padding: '20px 24px',
                borderLeft: '4px solid #333333',
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: '#333333',
                  lineHeight: 1.7,
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                Once a DPN is issued, you have 21 days to act. After that window
                closes, your personal liability is locked in — regardless of
                what happens to the company.
              </p>
            </div>
          </div>
        </section>

        {/* 3. What Debts Trigger a DPN */}
        <section style={{ backgroundColor: '#f5f5f5', padding: '80px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <SectionLabel text="DPN Triggers" />
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#111111',
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              What Debts Can Trigger a Director Penalty Notice?
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                marginBottom: 32,
              }}
            >
              {[
                {
                  title: 'PAYG Withholding',
                  body: 'Tax withheld from employee wages that was never remitted to the ATO. This is the most common DPN trigger. Directors are personally liable regardless of whether they were aware the amounts were not being paid.',
                },
                {
                  title: 'GST (Goods and Services Tax)',
                  body: 'Unpaid GST obligations are captured under the DPN regime. If your business has been collecting GST from customers but not remitting it to the ATO, directors can be held personally liable for those amounts.',
                },
                {
                  title: 'Superannuation Guarantee Charge',
                  body: 'Unpaid superannuation contributions owed to employees. Since 2019, the ATO can issue a DPN for SGC shortfalls even if the company has lodged returns on time. There is no safe harbour for superannuation.',
                },
                {
                  title: 'Income Tax',
                  body: 'Outstanding company income tax obligations can also give rise to director liability in certain circumstances.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    padding: '24px 28px',
                    borderTop: '3px solid #333333',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: '#111111',
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: '#555555',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Two Types of DPN */}
        <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <SectionLabel text="DPN Types" />
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#111111',
                marginBottom: 32,
                lineHeight: 1.2,
              }}
            >
              The Two Types of Director Penalty Notice
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 24,
              }}
              className="dpn-two-col"
            >
              {/* Non-Lockdown */}
              <div
                style={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: 10,
                  padding: '28px',
                  borderTop: '3px solid #333333',
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: 16,
                  }}
                >
                  Non-Lockdown DPN
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: '#555555',
                    lineHeight: 1.7,
                    marginBottom: 14,
                  }}
                >
                  Issued when the company has lodged its BAS and superannuation
                  statements on time but has not paid the debt. Directors have
                  21 days from the date the notice is posted — not the date it
                  is received — to take action.
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: '#555555',
                    lineHeight: 1.7,
                    marginBottom: 12,
                  }}
                >
                  Within those 21 days the director can avoid personal liability
                  by:
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  {[
                    'Paying the debt in full',
                    'Placing the company into voluntary administration',
                    'Appointing a small business restructuring practitioner',
                    'Commencing liquidation',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        fontSize: 14,
                        color: '#444444',
                      }}
                    >
                      <ChevronRight
                        size={14}
                        color="#333333"
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontSize: 14,
                    color: '#555555',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  If no action is taken within 21 days the penalty locks down
                  and personal liability becomes permanent.
                </p>
              </div>

              {/* Lockdown */}
              <div
                style={{
                  backgroundColor: '#111111',
                  borderRadius: 10,
                  padding: '28px',
                  borderTop: '3px solid rgba(255,255,255,0.3)',
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: 16,
                  }}
                >
                  Lockdown DPN
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.7,
                    marginBottom: 14,
                  }}
                >
                  Issued when the company has not lodged its returns within the
                  required timeframes — typically within 3 months of the due
                  date. A Lockdown DPN cannot be cancelled.
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.7,
                    marginBottom: 12,
                  }}
                >
                  Once issued there are only three ways out:
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  {[
                    'Pay the debt in full',
                    'Place the company into voluntary administration',
                    'Appoint a small business restructuring practitioner',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.75)',
                      }}
                    >
                      <ChevronRight
                        size={14}
                        color="rgba(255,255,255,0.5)"
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.7,
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  Liquidation does not remove personal liability for a Lockdown
                  DPN.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. The 21-Day Window */}
        <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <SectionLabel text="Critical Timing" />
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              The 21-Day Window — What You Must Do
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.75,
                marginBottom: 28,
              }}
            >
              The 21-day period for a Non-Lockdown DPN begins from the date the
              ATO posts the notice — not the date you receive it. This means by
              the time you open the letter, you may already have lost several
              days.
            </p>
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderRadius: 10,
                padding: '28px',
                borderLeft: '4px solid rgba(255,255,255,0.4)',
              }}
            >
              <p
                style={{
                  fontSize: 17,
                  color: '#ffffff',
                  lineHeight: 1.7,
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                Immediate action is critical. Do not wait. Do not assume it will
                be resolved. Contact a professional the same day you receive the
                notice. The difference between a successful outcome and
                permanent personal liability is often measured in days.
              </p>
            </div>
          </div>
        </section>

        {/* 6. How to Protect Yourself */}
        <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <SectionLabel text="Protection" />
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#111111',
                marginBottom: 32,
                lineHeight: 1.2,
              }}
            >
              How to Protect Yourself from a Director Penalty Notice
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  num: '01',
                  heading: 'Lodge on time every time',
                  body: 'Even if you cannot afford to pay, lodging your BAS, IAS, and SGC statements on time prevents a Non-Lockdown DPN from becoming a Lockdown DPN.',
                },
                {
                  num: '02',
                  heading: 'Engage the ATO early',
                  body: 'If your company is struggling with cash flow, proactively contacting the ATO to negotiate a payment plan is significantly better than waiting for a DPN.',
                },
                {
                  num: '03',
                  heading: 'Keep your ASIC address current',
                  body: 'DPNs are sent to your registered address with ASIC. An outdated address is not a valid defence for missing the 21-day deadline.',
                },
                {
                  num: '04',
                  heading: "Monitor your company's compliance",
                  body: 'Ignorance is not a defence. As a director you are responsible for knowing whether your company is meeting its tax obligations.',
                },
                {
                  num: '05',
                  heading: 'Seek advice early',
                  body: 'The earlier you engage a pre-insolvency adviser, the more options are available to you.',
                },
              ].map(({ num, heading, body }) => (
                <div
                  key={num}
                  style={{
                    display: 'flex',
                    gap: 24,
                    alignItems: 'flex-start',
                    backgroundColor: '#f5f5f5',
                    borderRadius: 10,
                    padding: '24px 28px',
                  }}
                >
                  <span
                    style={{
                      fontSize: 28,
                      fontWeight: 900,
                      color: '#dddddd',
                      lineHeight: 1,
                      flexShrink: 0,
                      width: 40,
                    }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: '#111111',
                        marginBottom: 6,
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. How AFA Helps */}
        <section style={{ backgroundColor: '#f5f5f5', padding: '80px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <SectionLabel text="How We Help" />
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#111111',
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              How Australian Financial Advisory Helps Directors Facing a DPN
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#555555',
                lineHeight: 1.75,
                marginBottom: 20,
              }}
            >
              We work with directors across Gold Coast, Brisbane, and
              Australia-wide who are facing Director Penalty Notices or are at
              risk of receiving one. We review your full financial position,
              assess your ATO obligations, and provide a written report with
              clear recommended action steps.
            </p>
            <p
              style={{
                fontSize: 16,
                color: '#555555',
                lineHeight: 1.75,
                marginBottom: 32,
              }}
            >
              We then connect you with the right licensed specialist in our
              network — whether that is a tax agent to negotiate with the ATO, a
              small business restructuring practitioner, or an insolvency
              specialist. We work for you — the director — not the creditors.
              Our clients come to us from Gold Coast, Biggera Waters, Brisbane,
              Queensland, Sydney, New South Wales, and across Australia.
            </p>
            <div
              style={{
                backgroundColor: '#111111',
                borderRadius: 10,
                padding: '24px 28px',
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                We offer a no-obligation discovery call to understand your
                situation. We provide a written report with our recommended
                action steps tailored to your specific situation.
              </p>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <SectionLabel text="Common Questions" />
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#111111',
                marginBottom: 32,
                lineHeight: 1.2,
              }}
            >
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                {
                  q: 'Can I resign as director to avoid a DPN?',
                  a: 'No. Resigning as a director does not discharge liability for non-compliance that occurred during your tenure as director.',
                },
                {
                  q: 'Does a payment plan remove a DPN?',
                  a: 'A payment plan alone does not remove personal liability under a DPN. The debt must be paid in full or the company must enter administration, restructuring, or liquidation within the 21-day window for a Non-Lockdown DPN.',
                },
                {
                  q: 'What happens if I do nothing?',
                  a: 'If you take no action on a Non-Lockdown DPN within 21 days, your personal liability becomes permanent. The ATO can then pursue your personal assets including your home, savings, and bank accounts at any time in the future. A DPN does not expire.',
                },
                {
                  q: 'Can the ATO take my house?',
                  a: 'Yes. Once a DPN is locked down, the debt is treated as a personal debt. The ATO can issue garnishee notices to your bank, offset your personal tax refunds, commence legal proceedings, and ultimately pursue your personal assets including your home.',
                },
                {
                  q: 'How much does it cost to get advice?',
                  a: 'We offer a no-obligation discovery call to understand your situation. We provide a written report with our recommended action steps tailored to your specific situation.',
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  style={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: 10,
                    padding: '24px 28px',
                    borderLeft: '4px solid #333333',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: '#111111',
                      marginBottom: 10,
                    }}
                  >
                    {q}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: '#555555',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
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

        {/* 9. CTA */}
        <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
          <div
            style={{
              maxWidth: 700,
              margin: '0 auto',
              padding: '0 32px',
              textAlign: 'center',
            }}
          >
            <SectionLabel text="Act Now" />
            <h2
              style={{
                fontSize: 42,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              Do Not Wait — Contact Australian Financial Advisory Today
            </h2>
            <p
              style={{
                fontSize: 17,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              Every day without action narrows your options. We help directors
              across Gold Coast, Brisbane, and Australia understand their
              position and take the right steps before it is too late.
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
              Schedule Your Discovery Call
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
          .dpn-two-col {
            grid-template-columns: 1fr !important;
          }
          .dpn-three-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
