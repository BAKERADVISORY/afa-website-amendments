'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, Menu, Phone, X } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'DPN Risk', href: '/director-penalty-notice' },
  { text: 'ATO Debt', href: '/reduce-debt' },
  { text: 'Restructure', href: '/restructure-your-business' },
  { text: 'Admin & Liquidation', href: '/administration-and-liquidation' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
]

function AfaLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/afa-logo-nav.png"
      alt="Australian Financial Advisory"
      className="afa-nav-logo-img"
      width={520}
      height={162}
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

  useEffect(() => {
    if (!mobileOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [mobileOpen])

  return (
    <>
      {/* Slim contact bar, shown only below 1100px where the in-header phone is hidden.
          Wrapped in a labelled aside so its content sits inside a landmark. */}
      <aside
        className="afa-contact-bar"
        aria-label="Phone contact"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 51,
          height: '40px',
          width: '100%',
          backgroundColor: '#12122e',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label={`Call us on ${PHONE_DISPLAY}`}
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: 700,
            lineHeight: 1,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <Phone size={14} color="#9b8ec4" aria-hidden="true" />
          <span style={{ color: '#DEDCEC' }}>Contact us directly</span>
          <span style={{ color: '#ffffff' }}>{PHONE_DISPLAY}</span>
        </a>
      </aside>

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
        <Link
          href="/"
          aria-label="Australian Financial Advisory home"
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
        </Link>

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
          <nav
            aria-label="Primary"
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '2px' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="afa-nav-link"
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  padding: '13px 8px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.text}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${PHONE_TEL}`}
            className="afa-nav-phone afa-nav-link"
            aria-label={`Call us on ${PHONE_DISPLAY}`}
            style={{
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'center',
              lineHeight: 1.25,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              marginLeft: '16px',
            }}
          >
            <span
              className="afa-nav-phone-label"
              style={{
                color: '#DEDCEC',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.3px',
              }}
            >
              Contact us directly
            </span>
            <span
              className="afa-nav-phone-number"
              style={{ fontSize: '15px', fontWeight: 700 }}
            >
              {PHONE_DISPLAY}
            </span>
          </a>

          <a
            href="/contact"
            className="hidden md:inline-flex afa-button-accent"
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
              marginLeft: '12px',
            }}
          >
            Free consultation
            <ChevronRight size={16} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '10px',
              minWidth: 44,
              minHeight: 44,
            }}
          >
            {mobileOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="afa-mobile-overlay md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            top: '120px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 48,
          }}
        />
      )}

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className="afa-mobile-dropdown md:hidden"
        hidden={!mobileOpen}
        style={{
          position: 'fixed',
          top: '120px',
          left: 0,
          right: 0,
          backgroundColor: '#1a1a3e',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: mobileOpen ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '8px 0',
          zIndex: 49,
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="afa-nav-link"
            style={{
              fontSize: '16px',
              fontWeight: 700,
              padding: '14px 32px',
              textDecoration: 'none',
            }}
          >
            {link.text}
          </a>
        ))}
        <a
          href={`tel:${PHONE_TEL}`}
          onClick={() => setMobileOpen(false)}
          className="afa-nav-link"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '16px',
            fontWeight: 700,
            padding: '14px 32px',
            textDecoration: 'none',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '4px',
          }}
        >
          <Phone size={18} aria-hidden="true" />
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1.25,
            }}
          >
            <span
              style={{
                color: '#DEDCEC',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.3px',
              }}
            >
              Contact us directly
            </span>
            {PHONE_DISPLAY}
          </span>
        </a>
        <a
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="afa-button-accent"
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
          Free initial consultation
        </a>
      </nav>

      <style>{`
        .afa-nav-phone { display: none; }
        @media (min-width: 1100px) {
          .afa-nav-phone { display: flex; }
        }
        .afa-contact-bar { display: flex; }
        @media (min-width: 1100px) {
          .afa-contact-bar { display: none; }
        }
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
          .afa-mobile-overlay { top: 110px !important; }
          .afa-mobile-dropdown { top: 110px !important; }
        }
      `}</style>
    </>
  )
}
