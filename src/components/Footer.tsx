import { Mail, MapPin, Phone } from 'lucide-react'
import { ConsentSettingsButton } from './ConsentBanner'
import {
  ADDRESS_LINE,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_AREA_LINE,
} from '@/lib/site'

function AfaLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/afa-logo-transparent.png"
      alt="Australian Financial Advisory"
      width={770}
      height={240}
      loading="lazy"
      style={{
        height: '240px',
        width: 'auto',
        display: 'block',
        objectFit: 'contain',
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
      }}
    />
  )
}

const headingStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: 16,
}

const linkStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 14,
  padding: '5px 0',
}

// Legal links meet the 24px target minimum; the mobile rule below lifts them to 44px.
const legalLinkStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: 24,
}

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Your options explained', href: '/services' },
  { label: 'Director Penalty Notice', href: '/director-penalty-notice' },
  { label: 'ATO debt options', href: '/reduce-debt' },
  { label: 'Restructure your business', href: '/restructure-your-business' },
  {
    label: 'Administration and liquidation',
    href: '/administration-and-liquidation',
  },
  { label: 'Close or wind up a company', href: '/close-company' },
]

const explainerLinks = [
  {
    label: 'Small Business Restructuring explained',
    href: '/services/small-business-restructure',
  },
  {
    label: 'Voluntary administration explained',
    href: '/services/voluntary-administration',
  },
  {
    label: 'Creditors voluntary liquidation explained',
    href: '/services/creditors-voluntary-liquidation',
  },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/AustralianFinancialAdvisory/',
    icon: (
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/australianfinancialadvisory/',
    icon: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1.3" />
      </>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/australian-financial-advisory/',
    icon: (
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v15H.2V8zm7.5 0h4.4v2.05h.06C12.77 8.9 14.27 7.8 16.5 7.8c4.7 0 5.5 3.1 5.5 7.1V23h-4.6v-7.3c0-1.75-.03-4-2.4-4-2.4 0-2.77 1.9-2.77 3.9V23H7.7V8z" />
    ),
  },
]

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#1a1a3e', paddingTop: 64, paddingBottom: 32 }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: 48,
            paddingBottom: 48,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            marginBottom: 24,
          }}
        >
          <div className="footer-col-brand">
            <div className="footer-logo-wrap" style={{ marginBottom: 16 }}>
              <AfaLogo />
            </div>
            <h2 style={headingStyle}>Contact</h2>
            <address
              style={{
                fontStyle: 'normal',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                color: '#DEDCEC',
                fontSize: 14,
              }}
            >
              <span
                style={{ display: 'flex', alignItems: 'center', gap: 10 }}
              >
                <Phone size={16} color="#9b8ec4" aria-hidden="true" />
                <a href={`tel:${PHONE_TEL}`} className="afa-footer-link">
                  {PHONE_DISPLAY}
                </a>
              </span>
              <span
                style={{ display: 'flex', alignItems: 'center', gap: 10 }}
              >
                <Mail size={16} color="#9b8ec4" aria-hidden="true" />
                <a href={`mailto:${EMAIL}`} className="afa-footer-link">
                  {EMAIL}
                </a>
              </span>
              <span style={{ display: 'flex', gap: 10 }}>
                <MapPin
                  size={16}
                  color="#9b8ec4"
                  aria-hidden="true"
                  style={{ marginTop: 2, flexShrink: 0 }}
                />
                <span>{ADDRESS_LINE}</span>
              </span>
            </address>
            <p style={{ color: '#DEDCEC', fontSize: 14, marginTop: 16 }}>
              {SERVICE_AREA_LINE}
            </p>
            <h2 style={{ ...headingStyle, marginTop: 24 }}>Socials</h2>
            <nav aria-label="Footer socials">
              <ul
                className="footer-socials"
                style={{
                  display: 'flex',
                  gap: 8,
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                }}
              >
                {socialLinks.map(({ name, href, icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Australian Financial Advisory on ${name}`}
                      className="afa-social-link text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                      >
                        {icon}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 style={headingStyle}>Menu</h2>
            <nav aria-label="Footer menu">
              {menuLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="afa-footer-link"
                  style={linkStyle}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 style={headingStyle}>Options explained</h2>
            <nav aria-label="Footer explainers">
              {explainerLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="afa-footer-link"
                  style={linkStyle}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div
          className="footer-bottom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 13,
            color: '#DEDCEC',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <span>© 2026 Australian Financial Advisory Pty Ltd</span>
            <span>ACN 680 451 129</span>
            <span>ABN 73 680 451 129</span>
            <a
              href="/privacy-policy"
              className="afa-footer-link afa-footer-legal-link"
              style={legalLinkStyle}
            >
              Privacy Policy
            </a>
            <a
              href="/website-terms-conditions"
              className="afa-footer-link afa-footer-legal-link"
              style={legalLinkStyle}
            >
              Terms &amp; Conditions
            </a>
            <ConsentSettingsButton />
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '24px 32px',
        }}
      >
        <p
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            fontSize: 12,
            color: '#C9C7DA',
            lineHeight: 1.7,
            textAlign: 'center',
          }}
        >
          Australian Financial Advisory Pty Ltd provides general information and
          advisory services only. Any information on this website is general in
          nature and does not constitute legal, financial, taxation, or
          insolvency advice. We are not registered insolvency practitioners,
          credit licensees, or tax agents. All specialist services are referred
          to appropriately licensed partners within our network. You should seek
          independent professional advice before acting on any information on
          this website. Australian Financial Advisory Pty Ltd accepts no
          liability for any loss or damage arising from reliance on information
          contained on this website.
        </p>
        <p
          style={{
            maxWidth: 1400,
            margin: '8px auto 0',
            fontSize: 12,
            color: '#C9C7DA',
            lineHeight: 1.5,
            textAlign: 'center',
          }}
        >
          Serving clients across {SERVICE_AREA_LINE}
        </p>
      </div>
      <style>{`
        .afa-social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.1);
          transition: background-color 0.2s ease;
        }
        .afa-social-link:hover,
        .afa-social-link:focus-visible {
          background-color: rgba(255, 255, 255, 0.22);
        }
        @media (max-width: 767px) {
          .footer-socials {
            justify-content: center;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-logo-wrap {
            display: flex;
            justify-content: center;
          }
          .footer-col-brand address > span {
            justify-content: center;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
          }
          .footer-bottom > div {
            flex-direction: column !important;
            align-items: center !important;
            gap: 4px !important;
          }
          .afa-footer-legal-link {
            min-height: 44px !important;
          }
        }
      `}</style>
    </footer>
  )
}
