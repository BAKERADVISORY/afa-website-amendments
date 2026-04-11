import { ShieldCheck, Eye, Users } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      style={{
        minHeight: '95vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#17243B',
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
          opacity: 0.45,
        }}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(23, 36, 59, 0.75)',
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
          maxWidth: '780px',
        }}
      >
        <h1
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 700,
            fontSize: '52px',
            lineHeight: 1.15,
            color: '#FFFFFF',
            margin: 0,
          }}
        >
          You built the business.
          <br />
          <span
            style={{
              color: '#5ACBBD',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
            }}
          >
            We&apos;ll help you
          </span>
          <span style={{ color: '#FFFFFF' }}> protect it.</span>
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.6,
            maxWidth: '600px',
            marginTop: '24px',
            marginBottom: 0,
          }}
        >
          Navigate complex business challenges with confidence. Our expert advisory services help you
          make informed decisions, reduce financial risk, and achieve sustainable growth.
        </p>

        <a
          href="#contact"
          style={{
            backgroundColor: '#0C9488',
            color: '#FFFFFF',
            borderRadius: '50px',
            padding: '14px 28px',
            fontSize: '16px',
            fontWeight: 700,
            display: 'inline-block',
            marginTop: '32px',
            textDecoration: 'none',
          }}
        >
          Get A Free Consultation →
        </a>

        <ul
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '24px',
            listStyle: 'none',
            padding: 0,
            margin: '24px 0 0 0',
          }}
        >
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#FFFFFF',
              fontSize: '14px',
              opacity: 0.9,
            }}
          >
            <ShieldCheck size={16} color="#5ACBBD" />
            Trusted Australia wide
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#FFFFFF',
              fontSize: '14px',
              opacity: 0.9,
            }}
          >
            <Eye size={16} color="#5ACBBD" />
            Confidential &amp; Private
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#FFFFFF',
              fontSize: '14px',
              opacity: 0.9,
            }}
          >
            <Users size={16} color="#5ACBBD" />
            Experienced advisers
          </li>
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
          <path d="M0,70 C360,140 1080,0 1440,70 L1440,140 L0,140 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
