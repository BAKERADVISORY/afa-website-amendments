import { AlertTriangle } from 'lucide-react'

export function DPNSection() {
  return (
    <section
      aria-labelledby="dpn-heading"
      style={{
        backgroundColor: '#1a1a3e',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          fontSize: 200,
          color: 'rgba(255,255,255,0.03)',
          fontWeight: 900,
          right: -40,
          top: '50%',
          transform: 'translateY(-50%)',
          userSelect: 'none',
          letterSpacing: -6,
          lineHeight: 1,
          pointerEvents: 'none',
        }}
      >
        DPN
      </div>

      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 32px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 64,
            height: 64,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            marginBottom: 24,
          }}
        >
          <AlertTriangle size={32} color="#ffffff" />
        </div>

        <h2
          id="dpn-heading"
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          Worried about a Director Penalty Notice?
        </h2>

        <p
          style={{
            fontSize: 18,
            color: '#DEDCEC',
            lineHeight: 1.7,
            maxWidth: 680,
            margin: '0 auto 16px',
          }}
        >
          A Director Penalty Notice is a notice the ATO can issue that makes a
          company director personally liable for certain unpaid company tax
          debts.{' '}
          <strong style={{ color: '#ffffff' }}>
            Getting advice early matters.
          </strong>
        </p>

        <p
          style={{
            fontSize: 15,
            color: '#DEDCEC',
            lineHeight: 1.65,
            maxWidth: 600,
            margin: '0 auto 36px',
          }}
        >
          We help directors understand what a notice means, what options may
          still be open, and which licensed specialist to involve. Any next
          step is your decision.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="/director-penalty-notice"
            className="afa-button-light"
            style={{
              backgroundColor: '#ffffff',
              color: '#1a1a3e',
              borderRadius: '50px',
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Learn more about DPNs
          </a>
          <a
            href="#contact"
            style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              borderRadius: '50px',
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
              border: '1px solid rgba(255,255,255,0.5)',
            }}
          >
            Book a free initial consultation
          </a>
        </div>
      </div>
    </section>
  )
}
