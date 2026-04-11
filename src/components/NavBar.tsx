'use client';

import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

const navLinks = [
  { text: 'Home', href: '/', active: true },
  { text: 'About', href: '/about/' },
  { text: 'Close Company', href: '/close-company/' },
  { text: 'Reduce Debt', href: '/reduce-debt/' },
  { text: 'Services', href: '/services/' },
  { text: 'Contact', href: '/contact/' },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: '#17243B',
        height: '80px',
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
        <a href="/" aria-label="Australian Financial Advisory">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-light.svg"
            alt="Australian Financial Advisory"
            style={{ height: '37px', width: 'auto' }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '4px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: link.active ? '#5ACBBD' : '#FFFFFF',
                fontSize: '16px',
                fontWeight: 400,
                padding: '13px 7px',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (!link.active) {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#0C9488';
                }
              }}
              onMouseLeave={(e) => {
                if (!link.active) {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF';
                }
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
            backgroundColor: '#0C9488',
            color: '#FFFFFF',
            borderRadius: '50px',
            padding: '12px 20px',
            fontSize: '16px',
            fontWeight: 700,
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            transition: 'background-color 0.15s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#20BBAE';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0C9488';
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
            backgroundColor: '#17243B',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px 0',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: link.active ? '#5ACBBD' : '#FFFFFF',
                fontSize: '16px',
                fontWeight: 400,
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
              backgroundColor: '#0C9488',
              color: '#FFFFFF',
              borderRadius: '50px',
              padding: '12px 20px',
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              margin: '12px 32px',
              textAlign: 'center',
            }}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
