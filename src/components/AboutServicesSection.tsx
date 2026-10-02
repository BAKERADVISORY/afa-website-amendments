import {
  BadgeDollarSign,
  Building2,
  Shield,
  ChevronRight,
  Check,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ENTITY_DISCLAIMER } from '@/lib/site'

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
    <li
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
      <Icon color="#6E3E8F" size={40} aria-hidden="true" />

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

      <p style={{ fontSize: 15, color: '#444444', lineHeight: 1.6, margin: 0 }}>
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
              color="#6E3E8F"
              size={16}
              aria-hidden="true"
              style={{ flexShrink: 0, marginTop: 1 }}
            />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={href}
        className="service-learn-more"
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
        Learn more
      </a>
    </li>
  )
}

/** Card copy is assessment, written options and referral only. */
const cards: ServiceCardProps[] = [
  {
    icon: BadgeDollarSign,
    title: 'ATO debt and creditor pressure',
    description:
      'Understand your ATO debt position and the options that may be available, before pressure escalates.',
    features: [
      'Written review of your position',
      'Options set out in plain language',
      'Referral to a registered tax agent for ATO matters where needed',
    ],
    href: '/reduce-debt',
  },
  {
    icon: Building2,
    title: 'Restructure your business',
    description:
      'Explore every option before formal insolvency, with the alternatives set out in writing.',
    features: [
      'Small Business Restructuring eligibility assessment',
      'Director obligations explained',
      'Referral to a licensed practitioner where a formal process is chosen',
    ],
    href: '/restructure-your-business',
  },
  {
    icon: Shield,
    title: 'Administration and liquidation options',
    description:
      'When closure may be the right decision, understand what each process means for you as a director before committing.',
    features: [
      'Options review before any formal step',
      'Director duties explained',
      'Referral to a registered insolvency practitioner',
    ],
    href: '/administration-and-liquidation',
  },
]

const weDo = [
  'Assess your financial position early, particularly where ATO debt or Director Penalty Notice risk is building.',
  'Set out the options available to you in writing.',
  'Communicate with your company’s commercial creditors under a signed authority.',
  'Bring in a licensed specialist when the situation calls for one.',
]

const weDoNot = [
  'Act as a registered insolvency practitioner or liquidator.',
  'Provide tax agent services such as negotiating directly with the ATO. We refer that work to a registered tax agent.',
  'Provide credit assistance or arrange finance. Where finance may be relevant, we can pass on a licensed broker’s details.',
  'Give legal advice.',
]

export function AboutServicesSection() {
  return (
    <section
      aria-labelledby="what-we-do-heading"
      style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2
            id="what-we-do-heading"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 40,
              fontWeight: 700,
              color: '#1a1a3e',
              marginBottom: 16,
            }}
          >
            What Australian Financial Advisory does
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#444444',
              lineHeight: 1.75,
              maxWidth: 760,
              margin: '0 auto 20px',
              textAlign: 'center',
            }}
          >
            Australian Financial Advisory helps company directors get ahead of
            financial pressure, particularly ATO debt and Director Penalty
            Notice risk, before it becomes a crisis. We assess your financial
            position, set out the options in writing, and refer specialist
            execution work to appropriately licensed practitioners in our
            network.
          </p>
          <p
            style={{
              fontSize: 15,
              color: '#1a1a3e',
              lineHeight: 1.7,
              maxWidth: 760,
              margin: '0 auto 56px',
              textAlign: 'center',
              fontWeight: 600,
              backgroundColor: '#f8f8ff',
              padding: '14px 24px',
              borderRadius: 8,
              borderLeft: '4px solid #9b8ec4',
            }}
          >
            {ENTITY_DISCLAIMER}
          </p>
        </div>

        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            listStyle: 'none',
            padding: 0,
            margin: '0 0 56px',
          }}
          className="services-grid mobile-stack-grid"
        >
          {cards.map((card) => (
            <ServiceCard key={card.href} {...card} />
          ))}
        </ul>

        <div
          className="do-dont-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}
        >
          <div
            style={{
              backgroundColor: '#f8f8ff',
              borderRadius: 12,
              padding: '28px 32px',
            }}
          >
            <h3
              style={{
                fontSize: 19,
                fontWeight: 700,
                color: '#1a1a3e',
                marginBottom: 14,
              }}
            >
              What we can do
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {weDo.map((line) => (
                <li
                  key={line}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    fontSize: 15,
                    color: '#444444',
                    lineHeight: 1.6,
                  }}
                >
                  <Check
                    size={18}
                    color="#6E3E8F"
                    aria-hidden="true"
                    style={{ flexShrink: 0, marginTop: 3 }}
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              backgroundColor: '#f8f8ff',
              borderRadius: 12,
              padding: '28px 32px',
            }}
          >
            <h3
              style={{
                fontSize: 19,
                fontWeight: 700,
                color: '#1a1a3e',
                marginBottom: 14,
              }}
            >
              What we do not do
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {weDoNot.map((line) => (
                <li
                  key={line}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    fontSize: 15,
                    color: '#444444',
                    lineHeight: 1.6,
                  }}
                >
                  <X
                    size={18}
                    color="#8a1c1c"
                    aria-hidden="true"
                    style={{ flexShrink: 0, marginTop: 3 }}
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .do-dont-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .service-learn-more {
            width: 100% !important;
            display: block !important;
            text-align: center !important;
            align-self: stretch !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </section>
  )
}
