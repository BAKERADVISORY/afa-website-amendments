import { AlertTriangle } from 'lucide-react'

export function DPNSection() {
  return (
    <section
      style={{
        backgroundColor: '#1a1a3e',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background watermark */}
      <div
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
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          Are You at Risk of a{' '}
          <span
            style={{
              color: '#ffffff',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationColor: 'rgba(255,255,255,0.4)',
            }}
          >
            Director Penalty Notice?
          </span>
        </h2>

        <p
          style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.7,
            maxWidth: 680,
            margin: '0 auto 16px',
          }}
        >
          The ATO is issuing Director Penalty Notices aggressively — even for
          debts in the tens of thousands. A DPN puts your personal assets at
          risk.{' '}
          <strong style={{ color: '#ffffff' }}>
            Early action is the only protection.
          </strong>
        </p>

        <p
          style={{
            fontSize: 15,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.65,
            maxWidth: 600,
            margin: '0 auto 36px',
          }}
        >
          Once a DPN is issued, the protection of the corporate structure is
          removed. You become personally liable for unpaid PAYG withholding and
          superannuation. Don&apos;t wait for the letter — act now.
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
            Learn More About DPNs →
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
              border: '1px solid rgba(255,255,255,0.35)',
            }}
          >
            Schedule a Discovery Call
          </a>
        </div>
      </div>
    </section>
  )
}
