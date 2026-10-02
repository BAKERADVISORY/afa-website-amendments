import { SectionLabel } from './SectionLabel'

/** Steps mirror the approved GBP service list and Q&A. No pricing, no outcomes. */
const steps = [
  {
    step: '01',
    heading: 'Free initial consultation',
    body: 'A confidential first conversation to understand your situation and confirm whether we can help. No pressure, no sales pitch.',
  },
  {
    step: '02',
    heading: 'Options Assessment',
    body: 'A structured review of your financial position and the options available to you.',
  },
  {
    step: '03',
    heading: 'Initial Advisory Report',
    body: 'A written report setting out your position, your options, and recommended next steps in plain language.',
  },
  {
    step: '04',
    heading: 'Referral and next steps',
    body: 'Where a licensed specialist is needed, we introduce the right one from our network. Any next step is your decision.',
  },
]

export function HowItWorksSection() {
  return (
    <section
      className="hiw-section"
      aria-labelledby="hiw-heading"
      style={{ backgroundColor: '#f8f8ff', padding: '80px 0' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <SectionLabel text="How it works" align="center" />
        <h2
          id="hiw-heading"
          style={{
            textAlign: 'center',
            fontSize: 38,
            fontWeight: 700,
            color: '#1a1a3e',
            marginBottom: 16,
          }}
        >
          Four steps to a clear picture
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#444444',
            maxWidth: 580,
            margin: '0 auto 56px',
            lineHeight: 1.65,
          }}
        >
          We review your situation, set out every available option in writing,
          and bring in a licensed specialist when the situation calls for one.
        </p>

        <ol
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
          className="hiw-grid"
        >
          {steps.map(({ step, heading, body }) => (
            <li
              key={step}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 12,
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                borderTop: '3px solid #9b8ec4',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontSize: 36,
                  fontWeight: 900,
                  color: '#8A7DBA',
                  lineHeight: 1,
                }}
              >
                {step}
              </span>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#1a1a3e',
                  margin: '0 0 4px',
                }}
              >
                {heading}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#444444',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hiw-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .hiw-section {
            padding: 40px 0 !important;
          }
          .hiw-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
