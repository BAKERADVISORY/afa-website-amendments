import { Mail, MapPin } from 'lucide-react'

function AfaLogo() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/afa-logo-transparent.png"
      alt="Australian Financial Advisory"
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

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#1a1a3e', paddingTop: 64, paddingBottom: 32 }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
        {/* Top grid: 4 columns */}
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
          {/* Col 1: Brand */}
          <div className="footer-col-brand">
            <div className="footer-logo-wrap" style={{ marginBottom: 16 }}>
              <AfaLogo />
            </div>
            {/* Email */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                color: 'rgba(255,255,255,0.8)',
                fontSize: 14,
                marginBottom: 24,
              }}
            >
              <Mail size={16} color="#cccccc" />
              <a
                href="mailto:info@australianfinancialadvisory.com.au"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                info@australianfinancialadvisory.com.au
              </a>
            </div>
            {/* Gold Coast */}
            <h4
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 6,
              }}
            >
              Gold Coast
            </h4>
            <div
              style={{
                display: 'flex',
                gap: 8,
                color: 'rgba(255,255,255,0.7)',
                fontSize: 14,
                marginBottom: 16,
              }}
            >
              <MapPin
                size={16}
                color="#cccccc"
                style={{ marginTop: 2, flexShrink: 0 }}
              />
              <address style={{ fontStyle: 'normal' }}>
                215 Brisbane Road, Biggera Waters, Queensland 4216
              </address>
            </div>
            {/* Brisbane */}
            <h4
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 6,
              }}
            >
              Brisbane
            </h4>
            <div
              style={{
                display: 'flex',
                gap: 8,
                color: 'rgba(255,255,255,0.7)',
                fontSize: 14,
                marginBottom: 16,
              }}
            >
              <MapPin
                size={16}
                color="#cccccc"
                style={{ marginTop: 2, flexShrink: 0 }}
              />
              <address style={{ fontStyle: 'normal' }}>
                Brisbane, Queensland 4000
              </address>
            </div>
            {/* Sydney */}
            <h4
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 6,
              }}
            >
              Sydney
            </h4>
            <div
              style={{
                display: 'flex',
                gap: 8,
                color: 'rgba(255,255,255,0.7)',
                fontSize: 14,
                marginBottom: 20,
              }}
            >
              <MapPin
                size={16}
                color="#cccccc"
                style={{ marginTop: 2, flexShrink: 0 }}
              />
              <address style={{ fontStyle: 'normal' }}>
                Sydney, New South Wales 2000
              </address>
            </div>
          </div>

          {/* Col 2: Menu */}
          <div>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 16,
              }}
            >
              Menu
            </h4>
            <nav>
              {(
                [
                  { label: 'Home', href: '/' },
                  { label: 'DPN Risk', href: '/director-penalty-notice/' },
                  { label: 'Reduce Debt', href: '/reduce-debt/' },
                  {
                    label: 'Restructure Business',
                    href: '/restructure-your-business/',
                  },
                  {
                    label: 'Admin & Liquidation',
                    href: '/administration-and-liquidation/',
                  },
                ] as { label: string; href: string }[]
              ).map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 14,
                    textDecoration: 'none',
                    padding: '4px 0',
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 16,
              }}
            >
              Services
            </h4>
            <nav>
              {(
                [
                  [
                    'Voluntary Administration',
                    '/services/voluntary-administration/',
                  ],
                  [
                    'Creditors Voluntary Liquidation',
                    '/services/creditors-voluntary-liquidation/',
                  ],
                  [
                    'Small Business Restructure',
                    '/services/small-business-restructure/',
                  ],
                ] as [string, string][]
              ).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 14,
                    textDecoration: 'none',
                    padding: '4px 0',
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className="footer-bottom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 13,
            color: 'rgba(255,255,255,0.4)',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <span>© 2026 Australian Financial Advisory Pty Ltd</span>
            <span>ACN 688 456 788</span>
            <span>ABN 73 680 451 129</span>
            <a href="/privacy-policy/" style={{ color: 'inherit' }}>
              Privacy Policy
            </a>
            <a href="/website-terms-conditions/" style={{ color: 'inherit' }}>
              Terms &amp; Conditions
            </a>
          </div>
          <span>Website by Theme Press</span>
        </div>
      </div>

      {/* Disclaimer */}
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
            color: '#888888',
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
            color: '#666666',
            lineHeight: 1.5,
            textAlign: 'center',
          }}
        >
          Serving clients across Gold Coast, Brisbane, Sydney, Melbourne, and
          Australia-wide.
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
          .footer-col-brand address,
          .footer-col-brand > div {
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
