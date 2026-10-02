import {
  UserCheck,
  GitBranch,
  Handshake,
  ShieldAlert,
  MessageSquare,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

interface FeatureItemProps {
  icon: LucideIcon
  title: string
  description: string
}

function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <li style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div
        aria-hidden="true"
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
            margin: '0 0 4px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 14,
            color: '#DEDCEC',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </li>
  )
}

/** Every line traces to approved-copy.md, the GBP content file, or compliance-layer.md. */
const features: FeatureItemProps[] = [
  {
    icon: UserCheck,
    title: 'We work for you, the business owner',
    description:
      'We are engaged by the director, not appointed by creditors. Our job is to help you understand where you stand and what options exist.',
  },
  {
    icon: GitBranch,
    title: 'Every alternative set out before formal insolvency',
    description:
      'Formal insolvency is one option among several. We set out the alternatives in writing before any formal step is considered.',
  },
  {
    icon: Handshake,
    title: 'Assessment first. The right specialist, second.',
    description:
      "We don't try to be everything. Formal restructuring and liquidation go to people licensed to do that work.",
  },
  {
    icon: ShieldAlert,
    title: 'Director Penalty Notice risk explained early',
    description:
      'A DPN can make a director personally liable for certain unpaid company tax debts. Getting advice early matters.',
  },
  {
    icon: MessageSquare,
    title: 'Straight answers, not a sales pitch',
    description:
      "No pressure, no sales pitch. If we're not the right fit, we'll say so on the first call.",
  },
]

export function WhyChooseSection() {
  return (
    <section
      aria-labelledby="why-heading"
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
        <SectionLabel text="Australian Financial Advisory" light align="center" />
        <h2
          id="why-heading"
          style={{
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: 16,
          }}
        >
          Why talk to Australian Financial Advisory?
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#DEDCEC',
            maxWidth: 700,
            margin: '0 auto 48px',
          }}
        >
          A second set of eyes for directors under pressure, at the stage when
          the most options are still available.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'start',
          }}
          className="why-choose-grid"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/business-meeting.webp"
              alt=""
              width={600}
              height={260}
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                borderRadius: 12,
                objectFit: 'cover',
                height: 260,
                filter: 'grayscale(30%)',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/garnishee-order.webp"
              alt=""
              width={600}
              height={260}
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                borderRadius: 12,
                objectFit: 'cover',
                height: 260,
                filter: 'grayscale(30%)',
              }}
            />
          </div>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
            }}
          >
            {features.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </ul>
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
