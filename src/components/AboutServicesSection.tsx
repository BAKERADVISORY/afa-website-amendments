import {
  BadgeDollarSign,
  Building2,
  Shield,
  CreditCard,
  ChevronRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  href: string
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
}: ServiceCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#f8f8ff',
        borderRadius: 12,
        padding: 32,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        borderTop: '3px solid #9b8ec4',
      }}
    >
      <Icon color="#9b8ec4" size={40} />

      <h3
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: '#1a1a3e',
          margin: '8px 0 0',
        }}
      >
        {title}
      </h3>

      <p style={{ fontSize: 15, color: '#555555', lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>

      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          margin: '8px 0',
          padding: 0,
        }}
      >
        {features.map((feature) => (
          <li
            key={feature}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
              fontSize: 14,
              color: '#444444',
            }}
          >
            <ChevronRight
              color="#9b8ec4"
              size={16}
              style={{ flexShrink: 0, marginTop: 1 }}
            />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={href}
        style={{
          backgroundColor: '#1a1a3e',
          color: '#FFFFFF',
          borderRadius: 50,
          padding: '10px 20px',
          fontSize: 14,
          fontWeight: 700,
          marginTop: 'auto',
          textDecoration: 'none',
          display: 'inline-block',
          alignSelf: 'flex-start',
        }}
      >
        Learn More
      </a>
    </div>
  )
}

const cards: (ServiceCardProps & { id?: string })[] = [
  {
    id: 'reduce-debt',
    icon: BadgeDollarSign,
    title: 'Reduce Debt',
    description:
      'Negotiate and consolidate ATO debt and creditor obligations before they spiral out of control.',
    features: [
      'ATO payment plan negotiation',
      'Creditor debt consolidation',
      'Interest reduction strategies',
    ],
    href: '/reduce-debt/',
  },
  {
    id: 'restructure',
    icon: Building2,
    title: 'Restructure Your Business',
    description:
      'Explore every option before formal insolvency. We protect your company record and your future.',
    features: [
      'Small business restructuring',
      'Director liability assessment',
      'Pre-insolvency planning',
    ],
    href: '/restructure-your-business/',
  },
  {
    icon: Shield,
    title: 'Wind Down Safely',
    description:
      'When closure is the right decision, we make sure your personal assets and company record are protected.',
    features: [
      'Asset and liability review',
      'Personal asset protection',
      'Managed company wind-down',
    ],
    href: '/administration-and-liquidation/',
  },
  {
    id: 'credit-repair',
    icon: CreditCard,
    title: 'Credit Repair & Funding',
    description:
      'Rebuild your financial position with expert credit repair and funding solutions through our broker partners.',
    features: [
      'Credit repair for individuals',
      'Funding solution referrals',
      'Broker partnership network',
    ],
    href: '/credit-repair-and-funding/',
  },
]

export function AboutServicesSection() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {/* About header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 40,
              fontWeight: 700,
              color: '#1a1a3e',
              marginBottom: 16,
            }}
          >
            Early advice is the{' '}
            <span
              style={{ color: '#9b8ec4', borderBottom: '2px solid #9b8ec4' }}
            >
              most powerful tool
            </span>{' '}
            you have.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#444444',
              lineHeight: 1.75,
              maxWidth: 740,
              margin: '0 auto 20px',
              textAlign: 'center',
            }}
          >
            Australian Financial Advisory is a pre-insolvency advisory firm
            helping business owners and individuals across Gold Coast, Brisbane,
            Queensland, and Australia-wide who are facing ATO debt, cash flow
            challenges, and financial distress. Early action protects your
            personal assets and keeps your business future open.
          </p>
          <p
            style={{
              fontSize: 15,
              color: '#1a1a3e',
              lineHeight: 1.7,
              maxWidth: 680,
              margin: '0 auto 64px',
              textAlign: 'center',
              fontWeight: 600,
              backgroundColor: '#f8f8ff',
              padding: '14px 24px',
              borderRadius: 8,
              borderLeft: '4px solid #9b8ec4',
            }}
          >
            Warning: The ATO is escalating Director Penalty Notice (DPN)
            issuance aggressively — even for debts in the tens of thousands. A
            DPN makes you personally liable. The earlier you act, the more
            options you have.
          </p>
        </div>

        {/* 4 service cards — 2x2 grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
          }}
          className="services-grid"
        >
          {cards.map((card) => (
            <div key={card.href} id={card.id}>
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
