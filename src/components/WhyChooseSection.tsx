import { UserCheck, GitBranch, FileX, ShieldAlert, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface FeatureItemProps {
  icon: LucideIcon
  title: string
  description: string
}

function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div
        style={{
          minWidth: 48,
          height: 48,
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
        }}
      >
        <Icon size={22} />
      </div>
      <div>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: 4,
            margin: '0 0 4px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

const features: FeatureItemProps[] = [
  {
    icon: UserCheck,
    title: 'We Work for You — Not the Creditors',
    description:
      'Unlike insolvency practitioners appointed by creditors, we represent you — the business owner. Your interests come first, every time.',
  },
  {
    icon: GitBranch,
    title: 'Every Alternative Explored Before Formal Insolvency',
    description:
      'Formal insolvency is a last resort. We exhaust every negotiation, restructuring, and advisory pathway before recommending it.',
  },
  {
    icon: FileX,
    title:
      'Formal Insolvency Appears on Company Records — We Help You Avoid That',
    description:
      'A formal insolvency appointment stays on the record permanently. Our pre-insolvency approach protects your company history and future reputation.',
  },
  {
    icon: ShieldAlert,
    title: 'Personal Assets Are at Risk from DPNs — We Act Fast',
    description:
      'Director Penalty Notices remove the corporate veil. Once issued, you are personally liable. We move quickly to protect what you have built.',
  },
  {
    icon: Clock,
    title: 'Professional, Urgent, and Reassuring',
    description:
      'We understand that financial distress is stressful. Our approach is fast, confidential, and designed to give you clarity and a clear path forward.',
  },
]

export function WhyChooseSection() {
  return (
    <section
      style={{
        backgroundColor: '#1a1a3e',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark text background */}
      <div
        style={{
          position: 'absolute',
          fontSize: 300,
          color: 'rgba(255,255,255,0.03)',
          fontWeight: 900,
          right: -50,
          top: '50%',
          transform: 'translateY(-50%)',
          userSelect: 'none',
          letterSpacing: -10,
          lineHeight: 1,
          pointerEvents: 'none',
        }}
      >
        AFA
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <p
          style={{
            textAlign: 'center',
            fontSize: 12,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#cccccc',
            marginBottom: 12,
          }}
        >
          australian financial advisory
        </p>
        <h2
          style={{
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: 16,
          }}
        >
          Why Choose{' '}
          <span style={{ color: '#ffffff', opacity: 0.75 }}>
            Australian Financial Advisory?
          </span>
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 700,
            margin: '0 auto 48px',
          }}
        >
          We support business owners at the earliest stage of financial
          difficulty — when the most options are still available to you.
        </p>

        {/* 2-column: images | features */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'start',
          }}
          className="why-choose-grid"
        >
          {/* Images column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <img
              src="/images/business-meeting.webp"
              alt="Business meeting"
              style={{
                width: '100%',
                borderRadius: 12,
                objectFit: 'cover',
                height: 260,
                filter: 'grayscale(30%)',
              }}
            />
            <img
              src="/images/garnishee-order.webp"
              alt="Advisory team"
              style={{
                width: '100%',
                borderRadius: 12,
                objectFit: 'cover',
                height: 260,
                filter: 'grayscale(30%)',
              }}
            />
          </div>

          {/* Features column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {features.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .why-choose-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
