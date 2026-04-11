import { Mail, Phone, MapPin } from 'lucide-react'

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
    <footer id="contact" style={{ backgroundColor: '#17243B', paddingTop: 64, paddingBottom: 32 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
        {/* Top grid: 4 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.8fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 24 }}>

          {/* Col 1: Brand */}
          <div>
            <img src="/images/logo-light.svg" alt="Australian Financial Advisory" style={{ height: 37, marginBottom: 24 }} />
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.8)', fontSize: 14, marginBottom: 10 }}>
              <Mail size={16} color="#0C9488" />
              <a href="mailto:contact@ausfinancialadvisory.com.au" style={{ color: 'inherit', textDecoration: 'none' }}>contact@ausfinancialadvisory.com.au</a>
            </div>
            {/* Phone with teal pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <Phone size={16} color="#0C9488" />
              <a href="tel:1300052321" style={{ backgroundColor: '#0C9488', color: '#FFFFFF', borderRadius: 50, padding: '4px 14px', fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>1300 052 321 📞</a>
            </div>
            {/* Gold Coast location */}
            <h4 style={{ fontSize: 15, fontWeight: 700, color: '#5ACBBD', marginBottom: 6 }}>Gold Coast</h4>
            <div style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 16 }}>
              <MapPin size={16} color="#0C9488" style={{ marginTop: 2, flexShrink: 0 }} />
              <address style={{ fontStyle: 'normal' }}>Gold Coast, QLD 4216</address>
            </div>
            {/* Brisbane location */}
            <h4 style={{ fontSize: 15, fontWeight: 700, color: '#5ACBBD', marginBottom: 6 }}>Brisbane</h4>
            <div style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 16 }}>
              <MapPin size={16} color="#0C9488" style={{ marginTop: 2, flexShrink: 0 }} />
              <address style={{ fontStyle: 'normal' }}>310 Edward St, Brisbane, QLD 4000</address>
            </div>
            {/* Sydney location */}
            <h4 style={{ fontSize: 15, fontWeight: 700, color: '#5ACBBD', marginBottom: 6 }}>Sydney</h4>
            <div style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 20 }}>
              <MapPin size={16} color="#0C9488" style={{ marginTop: 2, flexShrink: 0 }} />
              <address style={{ fontStyle: 'normal' }}>75 Pitt St, Sydney, NSW 2000</address>
            </div>
            {/* Follow Us */}
            <h4 style={{ fontSize: 15, fontWeight: 700, color: '#5ACBBD', marginBottom: 8 }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="https://www.linkedin.com/company/australian-financial-advisory" style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#0C9488', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <LinkedinIcon size={18} />
              </a>
              <a href="#" style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#0C9488', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Menu */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: '#5ACBBD', marginBottom: 16 }}>Menu</h4>
            <nav>
              {['Home', 'About', 'Reduce Debt', 'Close Company', 'Services', 'Contact'].map((item) => (
                <a key={item} href={`/${item.toLowerCase().replace(' ', '-')}/`} style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: 14, textDecoration: 'none', padding: '4px 0' }}>{item}</a>
              ))}
            </nav>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: '#5ACBBD', marginBottom: 16 }}>Services</h4>
            <nav>
              {([
                ['Voluntary Administration', '/services/voluntary-administration/'],
                ['Creditors Voluntary Liquidation', '/services/creditors-voluntary-liquidation/'],
                ['Small Business Restructure', '/services/small-business-restructure/'],
              ] as [string, string][]).map(([label, href]) => (
                <a key={label} href={href} style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: 14, textDecoration: 'none', padding: '4px 0' }}>{label}</a>
              ))}
            </nav>
          </div>

          {/* Col 4: Contact form */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: '#5ACBBD', marginBottom: 16 }}>Get in touch</h4>
            <form>
              {/* Two-column rows */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <FormField label="Full Name" type="text" required />
                <FormField label="Email" type="email" required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <FormField label="Phone Number" type="tel" required />
                <FormField label="Company Name" type="text" required />
              </div>
              {/* Service dropdown */}
              <div style={{ marginBottom: 12 }}>
                <label style={labelStyle}>Service Needed</label>
                <select style={inputStyle}>
                  <option>Reduce Debt</option>
                  <option>Close Company</option>
                  <option>Other</option>
                </select>
              </div>
              {/* Message */}
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Message</label>
                <textarea style={{ ...inputStyle, height: 80, resize: 'vertical' }} />
              </div>
              {/* Submit */}
              <button type="submit" style={{ width: '100%', backgroundColor: '#0C9488', color: '#FFFFFF', border: 'none', borderRadius: 6, padding: '14px', fontSize: 14, fontWeight: 700, letterSpacing: 1, cursor: 'pointer' }}>
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: 'rgba(255,255,255,0.5)', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <span>© 2026 Australian Financial Advisory Pty Ltd</span>
            <span>ACN 688 456 788</span>
            <a href="/privacy-policy/" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="/website-terms-conditions/" style={{ color: 'inherit' }}>Terms &amp; Conditions</a>
          </div>
          <span>Website by Theme Press</span>
        </div>
      </div>
    </footer>
  )
}
