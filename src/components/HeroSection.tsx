import { preload } from 'react-dom'
import { ShieldCheck, Eye, Phone } from 'lucide-react'
import { DiscoveryCallForm } from './CTABanner'
import { SERVICE_AREA_LINE } from '@/lib/site'

const AVIF_SET =
  '/images/hero-city-960.avif 960w, /images/hero-city-1440.avif 1440w, /images/hero-city-1920.avif 1920w'
const WEBP_SET =
  '/images/hero-city-960.webp 960w, /images/hero-city-1440.webp 1440w, /images/hero-city-1920.webp 1920w'

export function HeroSection() {
  // Resource hint so the LCP image is discovered from the HTML head, not after CSS.
  preload('/images/hero-city-1440.avif', {
    as: 'image',
    fetchPriority: 'high',
    imageSrcSet: AVIF_SET,
    imageSizes: '100vw',
  })

  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        minHeight: '95vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#1a1a3e',
      }}
    >
      {/* Decorative background photo, responsive and prioritised as the LCP element */}
      <picture>
        <source type="image/avif" srcSet={AVIF_SET} sizes="100vw" />
        <source type="image/webp" srcSet={WEBP_SET} sizes="100vw" />
        <img
          src="/images/hero-city-1440.webp"
          alt=""
          width={1440}
          height={960}
          fetchPriority="high"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </picture>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(10, 10, 50, 0.5)',
        }}
      />

      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '184px',
          paddingLeft: '80px',
          paddingRight: '80px',
          paddingBottom: '120px',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '88px',
          alignItems: 'start',
        }}
      >
        <div
          className="hero-copy"
          style={{ maxWidth: '620px', paddingRight: '24px' }}
        >
          <h1
            id="hero-heading"
            className="mobile-hero-title"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700,
              fontSize: '52px',
              lineHeight: 1.12,
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Pre-insolvency advisory for company directors.
          </h1>

          <p
            style={{
              fontSize: '22px',
              fontWeight: 600,
              color: '#ffffff',
              lineHeight: 1.4,
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            If your company is facing ATO debt, cash-flow pressure or a
            Director Penalty Notice, the earlier you act, the more options may
            still be open.
          </p>

          <p
            style={{
              fontSize: '19px',
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.55,
              maxWidth: '660px',
              marginTop: 0,
              marginBottom: 0,
              fontWeight: 500,
            }}
          >
            We assess where you stand, put the options in writing, and bring in
            a licensed specialist when the situation calls for one.
          </p>

          <p
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.65,
              maxWidth: '620px',
              marginTop: '24px',
              marginBottom: 0,
            }}
          >
            Serving business owners across {SERVICE_AREA_LINE} No pressure, no
            sales pitch.
          </p>

          <ul
            className="hero-benefits"
            aria-label="Key points"
            style={{
              display: 'flex',
              gap: '32px',
              listStyle: 'none',
              padding: 0,
              margin: '40px 0 0 0',
              flexWrap: 'wrap',
            }}
          >
            {[
              { icon: Phone, label: 'Free initial consultation' },
              { icon: Eye, label: 'Confidential' },
              { icon: ShieldCheck, label: 'Australia-wide' },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '14px',
                }}
              >
                <Icon size={16} color="#DEDCEC" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div id="contact" className="hero-form">
          <DiscoveryCallForm headingLevel="h2" />
        </div>
      </div>

      <style>{`
        /* Tablet: two columns are too narrow for the heading and the form, so stack them. */
        @media (min-width: 768px) and (max-width: 1099px) {
          .hero-content {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding-top: 120px !important;
            padding-left: 48px !important;
            padding-right: 48px !important;
          }
          .hero-copy {
            padding-right: 0 !important;
          }
          .hero-form {
            max-width: 620px;
          }
        }
        @media (max-width: 767px) {
          .hero-content {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding-top: 128px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-bottom: 88px !important;
          }
          .hero-copy {
            padding-right: 0 !important;
          }
          .hero-benefits {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }
      `}</style>

      {/* Wave divider */}
      <div
        aria-hidden="true"
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
          focusable="false"
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
