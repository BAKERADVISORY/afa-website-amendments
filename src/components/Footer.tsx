import { Mail, MapPin } from 'lucide-react'

function AfaLogo() {
  return (
    <svg
      width="960"
      viewBox="0 0 400 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <rect x="0" y="0" width="400" height="120" fill="#111111" />
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

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 13,
  color: 'rgba(255,255,255,0.7)',
  marginBottom: 4,
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 6,
  padding: '10px 12px',
  color: '#FFFFFF',
  fontSize: 14,
  boxSizing: 'border-box',
}

interface FormFieldProps {
  label: string
  type: string
  required?: boolean
}

function FormField({ label, type, required }: FormFieldProps) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input type={type} required={required} style={inputStyle} />
    </div>
  )
}

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#111111', paddingTop: 64, paddingBottom: 32 }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
        {/* Top grid: 4 columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1.8fr',
            gap: 48,
            paddingBottom: 48,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            marginBottom: 24,
          }}
        >
          {/* Col 1: Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
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
              {[
                'Home',
                'About',
                'Reduce Debt',
                'Close Company',
                'Services',
                'Contact',
              ].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}/`}
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 14,
                    textDecoration: 'none',
                    padding: '4px 0',
                  }}
                >
                  {item}
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

          {/* Col 4: Contact form */}
          <div>
            <h4
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 16,
              }}
            >
              Get in touch
            </h4>
            <form>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <FormField label="Full Name" type="text" required />
                <FormField label="Email" type="email" required />
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <FormField label="Phone Number" type="tel" required />
                <FormField label="Company Name" type="text" required />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Service Needed</label>
                <select style={inputStyle}>
                  <option>Reduce Debt</option>
                  <option>Close Company</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  style={{ ...inputStyle, height: 80, resize: 'vertical' }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  border: 'none',
                  borderRadius: 6,
                  padding: '14px',
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 1,
                  cursor: 'pointer',
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div
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
    </footer>
  )
}
