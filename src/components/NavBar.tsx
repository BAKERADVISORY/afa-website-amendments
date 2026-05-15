'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'

const mobileMenuLinks = [
  { text: 'DPN Risk', href: '/director-penalty-notice' },
  { text: 'Reduce Debt', href: '/reduce-debt' },
  { text: 'Restructure Your Business', href: '/restructure-your-business' },
  {
    text: 'Administration & Liquidation',
    href: '/administration-and-liquidation',
  },
  { text: 'Credit Repair & Funding', href: '/credit-repair-and-funding' },
]

const serviceLinks = [
  { text: 'Reduce Debt', href: '/reduce-debt/' },
  { text: 'Restructure Your Business', href: '/restructure-your-business/' },
  {
    text: 'Administration & Liquidation',
    href: '/administration-and-liquidation/',
  },
  { text: 'Credit Repair & Funding', href: '/credit-repair-and-funding/' },
]

function AfaLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/afa-logo-transparent.png"
      alt="Australian Financial Advisory"
      className="afa-nav-logo-img"
      style={{
        height: '100px',
        maxHeight: '100px',
        width: 'auto',
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
            paddingLeft: '440px',
            paddingRight: '32px',
          }}
        >
          {/* Desktop nav */}
          <nav
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '4px' }}
          >
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

          {/* Get Started button — desktop only */}
          <a
            href="#contact"
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
          <a
            href="#contact"
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
        @media (max-width: 767px) {
          .afa-header { height: 70px !important; }
          .afa-nav-inner { padding-left: 0 !important; }
          .afa-nav-logo-img {
            height: 44px !important;
            max-height: 44px !important;
            max-width: calc(100vw - 96px) !important;
            width: auto !important;
          }
          .afa-mobile-overlay { top: 70px !important; }
          .afa-mobile-dropdown { top: 70px !important; }
        }
      `}</style>
    </>
  )
}
