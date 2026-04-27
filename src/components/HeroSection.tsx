import { ShieldCheck, Eye, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      style={{
        minHeight: '95vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#1a1a3e',
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.35,
        }}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(10, 10, 50, 0.45)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '160px',
          paddingLeft: '80px',
          paddingRight: '80px',
          paddingBottom: '120px',
          maxWidth: '820px',
        }}
      >
        <h1
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 700,
            fontSize: '56px',
            lineHeight: 1.12,
            color: '#FFFFFF',
            margin: 0,
          }}
        >
          Early Action,{' '}
          <span style={{ color: '#ffffff', opacity: 0.85 }}>
            Better Outcomes.
          </span>
        </h1>

        <p
          style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.55,
            maxWidth: '660px',
            marginTop: '24px',
            marginBottom: 0,
            fontWeight: 500,
          }}
        >
          Protect your business and personal assets from ATO debt, cash flow
          crisis, and financial distress before it&apos;s too late. Serving
          business owners across Gold Coast, Brisbane, and Australia-wide.
        </p>

        <p
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.65,
            maxWidth: '620px',
            marginTop: '16px',
            marginBottom: 0,
          }}
        >
          We work for you — the business owner — not the creditors. We explore
          every alternative before formal insolvency to protect your company
          record and your personal assets across Queensland and Australia-wide.
        </p>

        <a
          href="#contact"
          style={{
            backgroundColor: '#ffffff',
            color: '#1a1a3e',
            borderRadius: '50px',
            padding: '16px 32px',
            fontSize: '16px',
            fontWeight: 700,
            display: 'inline-block',
            marginTop: '36px',
            textDecoration: 'none',
            letterSpacing: '0.01em',
          }}
        >
          Schedule Your Discovery Call — Let&apos;s figure out how we can help
          you.
        </a>

        <ul
          style={{
            display: 'flex',
            gap: '32px',
            listStyle: 'none',
            padding: 0,
            margin: '28px 0 0 0',
            flexWrap: 'wrap',
          }}
        >
          {[
            { icon: ShieldCheck, label: 'Trusted Australia wide' },
            { icon: Eye, label: 'Confidential & Private' },
            { icon: Users, label: 'Experienced advisers' },
          ].map(({ icon: Icon, label }) => (
            <li
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '14px',
              }}
            >
              <Icon size={16} color="#cccccc" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Wave divider */}
      <div
        style={{
          position: 'absolute',
          bottom: '-1px',
          left: '-35%',
          width: '171%',
          height: '140px',
          overflow: 'visible',
        }}
      >
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%' }}
        >
          <path
            d="M0,70 C360,140 1080,0 1440,70 L1440,140 L0,140 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}
