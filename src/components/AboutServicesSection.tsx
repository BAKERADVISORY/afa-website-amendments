import { BadgeDollarSign, Building2, Briefcase, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href: string;
}

function ServiceCard({ icon: Icon, title, description, features, href }: ServiceCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#EBF3F8',
        borderRadius: 12,
        padding: 32,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <Icon color="#0C9488" size={40} />

      <h3
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: '#383838',
          marginTop: 8,
          margin: '8px 0 0',
        }}
      >
        {title}
      </h3>

      <p style={{ fontSize: 15, color: '#555555', lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, margin: '8px 0', padding: 0 }}>
        {features.map((feature) => (
          <li
            key={feature}
            style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: '#444444' }}
          >
            <ChevronRight color="#0C9488" size={16} style={{ flexShrink: 0, marginTop: 1 }} />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={href}
        style={{
          backgroundColor: '#0C9488',
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

      <img
        src="/images/watermark-bg.svg"
        alt=""
        style={{
          position: 'absolute',
          bottom: -20,
          right: -20,
          opacity: 0.08,
          width: 160,
          height: 'auto',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

const cards: ServiceCardProps[] = [
  {
    icon: BadgeDollarSign,
    title: 'Reduce Your Debt',
    description: 'We help directors assess risk, regain control, and act before things escalate.',
    features: ['Debt restructuring', 'Creditor negotiations', 'Interest-free payment plan'],
    href: '/reduce-debt/',
  },
  {
    icon: Building2,
    title: 'Close Your Company',
    description: "When it's time to step away, we make sure it's done the right way.",
    features: ['Asset and liability review', 'Minimise personal risk', 'Exit planning'],
    href: '/close-company/',
  },
  {
    icon: Briefcase,
    title: 'Corporate Advisory',
    description: 'Stay ahead of disruption with expert advice to protect and adapt your business.',
    features: ['Strategic planning', 'Risk assessment', 'Growth optimisation'],
    href: '/services/',
  },
];

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
              color: '#383838',
              marginBottom: 16,
            }}
          >
            Getting help is <span style={{ color: '#5ACBBD' }}>not giving up.</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#444444',
              lineHeight: 1.7,
              maxWidth: 700,
              margin: '0 auto 64px',
              textAlign: 'center',
            }}
          >
            Australian Financial Advisory is a corporate restructuring firm supporting Australian business owners
            through periods of financial pressure. We provide clear, independent advice to help
            directors understand their options, and prepare for formal pathways like restructure, or
            company wind up.
          </p>
        </div>

        {/* 3 service cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
          className="services-grid"
        >
          {cards.map((card) => (
            <ServiceCard key={card.href} {...card} />
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
  );
}
