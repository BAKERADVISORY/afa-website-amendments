import { Trophy, Lightbulb, Clock, UserCheck, ShieldCheck, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div
        style={{
          minWidth: 48,
          height: 48,
          borderRadius: '50%',
          backgroundColor: 'rgba(12,148,136,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0C9488',
        }}
      >
        <Icon size={22} />
      </div>
      <div>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', marginBottom: 4, margin: '0 0 4px' }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

const features: FeatureItemProps[] = [
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description:
      'We have many years of experience helping businesses navigate complex challenges with a high success rate.',
  },
  {
    icon: Lightbulb,
    title: 'Industry Expertise',
    description:
      'Our advisers specialise in business restructuring, debt management, and strategic planning.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    description:
      'We understand urgency in business. Get expert consultation within 24 hours of your initial contact.',
  },
  {
    icon: UserCheck,
    title: 'Personalised Approach',
    description:
      'Every business is unique. We tailor our solutions to fit your specific situation and goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Complete Compliance',
    description:
      'Stay compliant with legal and regulatory requirements whilst achieving your business objectives.',
  },
  {
    icon: Target,
    title: 'Results Driven',
    description:
      "We measure success by your success. We're designed to deliver measurable outcomes.",
  },
];

export function WhyChooseSection() {
  return (
    <section
      style={{
        backgroundColor: '#17243B',
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
            color: '#5ACBBD',
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
          Why Choose <span style={{ color: '#5ACBBD' }}>Australian Financial Advisory?</span>
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: 'rgba(255,255,255,0.75)',
            maxWidth: 700,
            margin: '0 auto 48px',
          }}
        >
          Australian Financial Advisory is here to support you in the early stages of financial difficulty, when
          decisions matter most.
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
              }}
            />
          </div>

          {/* Features column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
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
  );
}
