import { Mail, MapPin, Phone } from 'lucide-react'
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
            <a href="/privacy-policy" className="afa-footer-link">
              Privacy Policy
            </a>
            <a href="/website-terms-conditions" className="afa-footer-link">
              Terms &amp; Conditions
            </a>
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
        @media (max-width: 767px) {
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
        }
      `}</style>
    </footer>
  )
}
