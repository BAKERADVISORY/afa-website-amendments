'use client'

import { useState } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'

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
    <svg
      viewBox="0 0 400 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        height: '104px',
        width: 'auto',
        maxHeight: '60px',
      }}
    >
      <rect x="0" y="0" width="400" height="120" fill="#1a1a3e" />
      <text
        x="200"
        y="78"
        textAnchor="middle"
        style={{
          fontFamily: 'Barlow, Arial, sans-serif',
          fontWeight: 800,
          fontSize: '66px',
          fill: '#ffffff',
          letterSpacing: '-2px',
        }}
      >
        AFA
      </text>
      <text
        x="200"
        y="96"
        textAnchor="middle"
        style={{
          fontFamily: 'Barlow, Arial, sans-serif',
          fontWeight: 400,
          fontSize: '9px',
          fill: '#ffffff',
          letterSpacing: '3px',
        }}
      >
        AUSTRALIAN FINANCIAL ADVISORY
      </text>
    </svg>
  )
}

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: '#1a1a3e',
        height: '80px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '32px',
          paddingRight: '32px',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Australian Financial Advisory"
          style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
        >
          <AfaLogo />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: '4px' }}
        >
          {/* DPN Risk — first position */}
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
                ;(e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
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

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            backgroundColor: '#1a1a3e',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px 0',
          }}
        >
          {/* DPN Risk mobile — first position */}
          <a
            href="/director-penalty-notice"
            onClick={() => setMobileOpen(false)}
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '16px',
              fontWeight: 700,
              padding: '12px 32px',
              textDecoration: 'none',
            }}
          >
            DPN Risk
          </a>
          {serviceLinks.map((link) => (
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
    </header>
  )
}
