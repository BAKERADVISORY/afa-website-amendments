'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Menu, Phone, X } from 'lucide-react'

const mobileMenuLinks = [
  { text: 'Home', href: '/' },
  { text: 'DPN Risk', href: '/director-penalty-notice' },
  { text: 'Reduce Debt', href: '/reduce-debt' },
  { text: 'Restructure Your Business', href: '/restructure-your-business' },
  {
    text: 'Administration & Liquidation',
    href: '/administration-and-liquidation',
  },
]

const serviceLinks = [
  { text: 'Reduce Debt', href: '/reduce-debt/' },
  { text: 'Restructure Your Business', href: '/restructure-your-business/' },
  {
    text: 'Administration & Liquidation',
    href: '/administration-and-liquidation/',
  },
]

function AfaLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/afa-logo-nav.png"
      alt="Australian Financial Advisory"
      className="afa-nav-logo-img"
      style={{
        width: 'clamp(360px, 28vw, 520px)',
        height: 'auto',
        maxHeight: '76px',
        display: 'block',
        objectFit: 'contain',
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        margin: 0,
        padding: 0,
      }}
    />
  )
}

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Slim contact bar — shown only below 1100px, i.e. exactly where the
          in-header phone element is hidden. Sticky, so it stays pinned above
          the header instead of scrolling away. */}
      <a
        href="tel:+61721133069"
        className="afa-contact-bar"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 51,
          height: '40px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          backgroundColor: '#12122e',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          fontSize: '13px',
          fontWeight: 700,
          lineHeight: 1,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        <Phone size={14} color="#9b8ec4" />
        <span style={{ color: 'rgba(255,255,255,0.65)' }}>
          Contact us directly
        </span>
        <span style={{ color: '#ffffff' }}>(07) 2113 3069</span>
      </a>

      <header
        className="afa-header"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: '#1a1a3e',
          height: '120px',
          width: '100%',
        }}
      >
        {/* Logo — absolutely positioned at far left of header */}
        <a
          href="/"
          aria-label="Australian Financial Advisory"
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            background: 'transparent',
            boxShadow: 'none',
            border: 'none',
            padding: 0,
            margin: 0,
            zIndex: 1,
          }}
        >
          <AfaLogo />
        </a>

        {/* Nav + actions — right side, padded left to clear logo */}
        <div
          className="afa-nav-inner"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingLeft: 'clamp(380px, calc(28vw + 20px), 540px)',
            paddingRight: '32px',
          }}
        >
          {/* Desktop nav */}
          <nav
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '4px' }}
          >
            <a
              href="/"
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '15px',
                fontWeight: 700,
                padding: '13px 8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color =
                  'rgba(255,255,255,0.7)'
              }}
            >
              Home
            </a>

            <a
              href="/director-penalty-notice"
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '15px',
                fontWeight: 700,
                padding: '13px 8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color =
                  'rgba(255,255,255,0.7)'
              }}
            >
              DPN Risk
            </a>

            {serviceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '15px',
                  fontWeight: 700,
                  padding: '13px 8px',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color =
                    '#ffffff'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color =
                    'rgba(255,255,255,0.7)'
                }}
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Direct phone contact — desktop only, secondary to Get Started */}
          <a
            href="tel:+61721133069"
            className="afa-nav-phone"
            style={{
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'center',
              lineHeight: 1.25,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              marginLeft: '20px',
            }}
          >
            <span
              className="afa-nav-phone-label"
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.3px',
              }}
            >
              Contact us directly
            </span>
            <span
              className="afa-nav-phone-number"
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '15px',
                fontWeight: 700,
                transition: 'color 0.15s ease',
              }}
            >
              (07) 2113 3069
            </span>
          </a>

          {/* Get Started button — desktop only */}
          <a
            href="/#contact"
            className="hidden md:inline-flex"
            style={{
              backgroundColor: '#9b8ec4',
              color: '#1a1a3e',
              borderRadius: '50px',
              padding: '12px 20px',
              fontSize: '15px',
              fontWeight: 700,
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              transition: 'background-color 0.15s ease',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              marginLeft: '16px',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                '#8a7db4'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                '#9b8ec4'
            }}
          >
            Get Started
            <ChevronRight size={16} />
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Dark overlay — behind mobile menu */}
      {mobileOpen && (
        <div
          className="afa-mobile-overlay md:hidden"
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            top: '120px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 48,
          }}
        />
      )}

      {/* Mobile nav dropdown — fixed below header */}
      {mobileOpen && (
        <div
          className="afa-mobile-dropdown md:hidden"
          style={{
            position: 'fixed',
            top: '120px',
            left: 0,
            right: 0,
            backgroundColor: '#1a1a3e',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px 0',
            zIndex: 49,
          }}
        >
          {mobileMenuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '16px',
                fontWeight: 700,
                padding: '12px 32px',
                textDecoration: 'none',
              }}
            >
              {link.text}
            </a>
          ))}
          {/* Tap to call — mobile menu */}
          <a
            href="tel:+61721133069"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '16px',
              fontWeight: 700,
              padding: '12px 32px',
              textDecoration: 'none',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              marginTop: '4px',
            }}
          >
            <Phone size={18} />
            <span
              style={{
                display: 'flex',
                flexDirection: 'column',
                lineHeight: 1.25,
              }}
            >
              <span
                style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.3px',
                }}
              >
                Contact us directly
              </span>
              (07) 2113 3069
            </span>
          </a>

          <a
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              backgroundColor: '#9b8ec4',
              color: '#1a1a3e',
              borderRadius: '50px',
              padding: '12px 20px',
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              margin: '8px 32px',
              textAlign: 'center',
            }}
          >
            Get Started
          </a>
        </div>
      )}

      <style>{`
        /* Hidden by default; shown only where the header has room for it */
        .afa-nav-phone { display: none; }
        @media (min-width: 1100px) {
          .afa-nav-phone { display: flex; }
        }
        .afa-nav-phone:hover .afa-nav-phone-number { color: #ffffff; }

        /* Contact bar is the inverse of the in-header phone: exactly one shows. */
        .afa-contact-bar { display: flex; }
        @media (min-width: 1100px) {
          .afa-contact-bar { display: none; }
        }
        /* While the bar is visible the sticky header pins below it, not at 0. */
        @media (max-width: 1099px) {
          .afa-header { top: 40px !important; }
        }

        @media (max-width: 767px) {
          .afa-header { height: 70px !important; }
          .afa-nav-inner { padding-left: 0 !important; }
          .afa-nav-logo-img {
            width: min(70vw, 280px) !important;
            height: auto !important;
            max-height: 48px !important;
            object-fit: contain !important;
          }
          /* 40px contact bar + 70px header */
          .afa-mobile-overlay { top: 110px !important; }
          .afa-mobile-dropdown { top: 110px !important; }
        }
      `}</style>
    </>
  )
}
