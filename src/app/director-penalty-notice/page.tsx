import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import {
  ChevronRight,
  AlertTriangle,
  Home,
  TrendingDown,
  Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Director Penalty Notice (DPN) Risk | Australian Financial Advisory',
  description:
    'Received a Director Penalty Notice? The ATO can make you personally liable for company tax debts. Act now to protect your home, savings, and personal assets.',
  alternates: {
    canonical:
      'https://www.ausfinancialadvisory.com.au/director-penalty-notice/',
  },
  openGraph: {
    title: 'Director Penalty Notice (DPN) Risk | Australian Financial Advisory',
    description:
      "A Director Penalty Notice makes you personally liable for your company's ATO debt. Early action is the only real protection.",
    url: 'https://www.ausfinancialadvisory.com.au/director-penalty-notice/',
  },
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
              Are You at Risk of a{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '5px',
                  textDecorationColor: 'rgba(255,255,255,0.35)',
                }}
              >
                Director Penalty Notice?
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
              A Director Penalty Notice (DPN) is one of the most serious tools
              the ATO uses to collect unpaid tax debt — because it bypasses your
              company entirely and makes{' '}
              <strong style={{ color: '#ffffff' }}>
                you personally liable
              </strong>
              . Your home, savings, and personal assets are at risk.
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
              Get Urgent Advice Now
              <ChevronRight size={16} />
            </a>
          </div>
        </section>

        {/* 2. What is a DPN */}
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
              The ATO Can Hold You Personally Liable
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#555555',
                lineHeight: 1.75,
                marginBottom: 28,
              }}
            >
              A Director Penalty Notice is a formal notice from the Australian
              Taxation Office that transfers your company&apos;s unpaid tax
              obligations directly to you as a director. It now covers a broad
              range of ATO debt types:
            </p>
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
                  body: 'Tax withheld from employee wages that was never remitted to the ATO. This is the most common DPN trigger and the ATO pursues it aggressively. Directors are personally liable regardless of whether they were aware the amounts were not being paid.',
                },
                {
                  title: 'GST (Goods and Services Tax)',
                  body: 'Unpaid GST obligations are now captured under the DPN regime. If your business has been collecting GST from customers but not remitting it to the ATO, directors can be held personally liable for those amounts.',
                },
                {
                  title: 'Income Tax',
                  body: 'Outstanding company income tax obligations can also give rise to director liability in certain circumstances. The ATO has broad powers to pursue directors for unpaid company tax debts.',
                },
                {
                  title: 'Superannuation Guarantee Charge',
                  body: 'Unpaid superannuation contributions owed to employees. Since 2019, the ATO can issue a DPN for SGC shortfalls even if the company has lodged returns on time. This means there is no safe harbour for superannuation — the ATO can act at any time.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: '#f5f5f5',
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
            <div
              style={{
                backgroundColor: '#111111',
                borderRadius: 10,
                padding: '24px 28px',
                marginBottom: 32,
              }}
            >
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: 10,
                }}
              >
                All ATO Debt Is Now on the Radar
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                The ATO has significantly expanded its use of DPNs across all
                debt types. No category of ATO debt is safe from director
                liability action. If your company has any outstanding ATO
                obligations — regardless of type or amount — you should seek
                advice immediately.
              </p>
            </div>
            <p
              style={{
                fontSize: 15,
                color: '#333333',
                lineHeight: 1.7,
                fontWeight: 600,
                backgroundColor: '#f5f5f5',
                padding: '14px 24px',
                borderRadius: 8,
                borderLeft: '4px solid #333333',
                margin: 0,
              }}
            >
              Once a DPN is issued, you have 21 days to act. After that window
              closes, your personal liability is locked in — regardless of what
              happens to the company.
            </p>
          </div>
        </section>

        {/* 3. ATO Escalation */}
        <section style={{ backgroundColor: '#f5f5f5', padding: '80px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <SectionLabel text="ATO Enforcement" />
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#111111',
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              The ATO Is Pursuing Debts More Aggressively Than Ever
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#555555',
                lineHeight: 1.75,
                marginBottom: 28,
              }}
            >
              In recent years, the ATO has significantly increased the issuance
              of Director Penalty Notices. No debt is too small — businesses
              with outstanding PAYG or super obligations of even a few thousand
              dollars have received DPNs.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  icon: AlertTriangle,
                  point:
                    'DPN issuance has increased year-on-year since the end of COVID-era concessions.',
                },
                {
                  icon: TrendingDown,
                  point:
                    'The ATO uses real-time data matching to identify directors of companies with outstanding obligations.',
                },
                {
                  icon: Clock,
                  point:
                    'Lockdown DPNs are issued when returns are not lodged on time and cannot be cancelled. Once a Lockdown DPN is issued, there are only three ways out: (1) pay the debt in full, (2) place the company into voluntary administration, or (3) appoint a Small Business Restructuring practitioner. There is no other path. This is why early action — before returns become overdue — is critical.',
                },
              ].map(({ icon: Icon, point }) => (
                <div
                  key={point}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    padding: '20px 24px',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: '#111111',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="#ffffff" />
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      color: '#444444',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Personal Asset Risk */}
        <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <SectionLabel text="What's at Stake" />
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              Your Personal Assets Are on the Line
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.75,
                marginBottom: 36,
              }}
            >
              A DPN removes the protection of the corporate structure. The ATO
              can — and will — pursue you personally for the outstanding amount.
              That means the following assets are at direct risk:
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 20,
              }}
              className="dpn-three-col"
            >
              {[
                {
                  icon: Home,
                  label: 'Your Home',
                  detail:
                    'Including any equity you have built up over the years.',
                },
                {
                  icon: TrendingDown,
                  label: 'Savings & Investments',
                  detail:
                    'Bank accounts, shares, managed funds, and other liquid assets.',
                },
                {
                  icon: AlertTriangle,
                  label: 'Future Income',
                  detail:
                    'The ATO can garnish wages or income streams if debts go unpaid.',
                },
              ].map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: 10,
                    padding: '28px 24px',
                    textAlign: 'center',
                    borderTop: '3px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <Icon size={22} color="#ffffff" />
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: 8,
                    }}
                  >
                    {label}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. What To Do */}
        <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <SectionLabel text="Your Options" />
            <h2
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#111111',
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              Early Action Is the Only Real Protection
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#555555',
                lineHeight: 1.75,
                marginBottom: 32,
              }}
            >
              Once a DPN arrives, your options narrow quickly. The best outcomes
              come from acting before a notice is issued — when there is still
              time to negotiate, restructure, or explore alternatives to formal
              insolvency.
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                marginBottom: 40,
              }}
            >
              {[
                {
                  step: '01',
                  heading: 'Get an independent assessment',
                  body: 'Understand exactly what you owe, what type of DPN risk you face, and which options are still available to you.',
                },
                {
                  step: '02',
                  heading: 'Explore pre-insolvency options',
                  body: 'Payment plans, debt negotiation, and Small Business Restructuring can all reduce or eliminate your exposure — before any formal process begins.',
                },
                {
                  step: '03',
                  heading: 'If formal action is needed, do it right',
                  body: 'Voluntary Administration or Creditors Voluntary Liquidation can cancel a DPN if done correctly and promptly. We guide you through this without unnecessary cost.',
                },
                {
                  step: '04',
                  heading: 'Protect your personal assets throughout',
                  body: 'Our advisers work for you, not the creditors. Every recommendation is aimed at protecting what you have built personally.',
                },
              ].map(({ step, heading, body }) => (
                <div
                  key={step}
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
                    {step}
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

        {/* 6. CTA */}
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
              Our advisers move quickly when DPN risk is involved. The earlier
              you reach out, the more options we have to protect you. The call
              is free and completely confidential.
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
              Get Urgent Advice — Book Now
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
