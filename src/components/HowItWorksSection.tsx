export function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      heading: 'Discovery Call',
      body: 'Tell us your situation — ATO debt, creditor pressure, cash flow position. No obligation. We listen and give you an honest first read on your options.',
      note: null,
    },
    {
      step: '02',
      heading: 'Financial Review',
      body: 'We assess your full financial position — ATO exposure, creditor obligations, and every available pathway. You get a complete picture of where you stand.',
      note: null,
    },
    {
      step: '03',
      heading: 'Written Report',
      body: 'We deliver a clear written report with recommended action steps tailored to your situation. No jargon — a straight-forward plan of what to do next.',
      note: null,
    },
    {
      step: '04',
      heading: 'Implement & Support',
      body: 'We implement the recommendations in the report, working directly with the director every step of the way.',
      note: null,
    },
  ]

  return (
    <section style={{ backgroundColor: '#eeeeee', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <p
          style={{
            textAlign: 'center',
            fontSize: 12,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#999999',
            marginBottom: 12,
          }}
        >
          how it works
        </p>
        <h2
          style={{
            textAlign: 'center',
            fontSize: 38,
            fontWeight: 700,
            color: '#111111',
            marginBottom: 16,
          }}
        >
          Four Steps to a Clear Path Forward
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#666666',
            maxWidth: 580,
            margin: '0 auto 56px',
            lineHeight: 1.65,
          }}
        >
          We review your situation, assess every available option, and work
          directly with you to implement the right path forward.
        </p>

        {/* Steps grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
          className="hiw-grid"
        >
          {steps.map(({ step, heading, body, note }) => (
            <div
              key={step}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 12,
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                borderTop: '3px solid #333333',
              }}
            >
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 900,
                  color: '#dddddd',
                  lineHeight: 1,
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
                    margin: '0 0 4px',
                  }}
                >
                  {heading}
                </h3>
                {note && (
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#333333',
                      backgroundColor: 'rgba(0,0,0,0.07)',
                      padding: '2px 8px',
                      borderRadius: 50,
                      display: 'inline-block',
                      marginTop: 4,
                    }}
                  >
                    {note}
                  </span>
                )}
              </div>
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
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hiw-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .hiw-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
