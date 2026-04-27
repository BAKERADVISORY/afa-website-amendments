'use client'

import { useState } from 'react'

const inputStyle: React.CSSProperties = {
  border: '1px solid #E5E7EB',
  borderRadius: 8,
  padding: '10px 14px',
  fontSize: 14,
  color: '#383838',
  outline: 'none',
  backgroundColor: '#FAFAFA',
  width: '100%',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: '#383838',
}

export function CTABanner() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    abn: '',
    email: '',
    service: '',
    situation: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#1a1a3e',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background watermark */}
      <div
        style={{
          position: 'absolute',
          fontSize: 300,
          color: 'rgba(255,255,255,0.03)',
          fontWeight: 900,
          right: -100,
          top: '50%',
          transform: 'translateY(-50%)',
          userSelect: 'none',
          letterSpacing: -10,
          lineHeight: 1,
          pointerEvents: 'none',
        }}
      >
        AFA
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
        }}
        className="cta-grid"
      >
        {/* Left: copy */}
        <div>
          <p
            style={{
              fontSize: 12,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#cccccc',
              marginBottom: 12,
            }}
          >
            get in touch
          </p>
          <h2
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Schedule Your{' '}
            <span
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: 'rgba(255,255,255,0.4)',
              }}
            >
              Discovery Call
            </span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.72)',
              marginBottom: 28,
              lineHeight: 1.65,
            }}
          >
            Let&apos;s figure out how we can help you. Early action means more
            options — and a better outcome for you, your business, and your
            personal assets.
          </p>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {[
              'Confidential — your information stays private',
              'No obligation — the discovery call is free',
              'Fast response — we move urgently when needed',
            ].map((point) => (
              <li
                key={point}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.75)',
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 11,
                    color: '#ffffff',
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 16,
            padding: '36px 32px',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#1a1a3e',
                  margin: '0 0 12px',
                }}
              >
                Thank you — we&apos;ll be in touch shortly.
              </h3>
              <p style={{ fontSize: 15, color: '#666', lineHeight: 1.6 }}>
                One of our advisers will contact you to schedule your discovery
                call.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#1a1a3e',
                  margin: '0 0 4px',
                }}
              >
                Book a Discovery Call
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#666',
                  margin: '0 0 8px',
                  lineHeight: 1.5,
                }}
              >
                Tell us a little about your situation and we&apos;ll reach out
                to arrange a time.
              </p>

              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="name" style={labelStyle}>
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Andrew Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="phone" style={labelStyle}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. 0400 000 000"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              {/* ABN — optional */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="abn" style={labelStyle}>
                  ABN (Australian Business Number){' '}
                  <span style={{ fontWeight: 400, color: '#999999' }}>
                    (optional)
                  </span>
                </label>
                <input
                  id="abn"
                  name="abn"
                  type="text"
                  placeholder="e.g. 12 345 678 901"
                  value={form.abn}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="email" style={labelStyle}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. andrew@example.com.au"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              {/* Service dropdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="service" style={labelStyle}>
                  Main Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  <option value="Reduce Debt">Reduce Debt</option>
                  <option value="Restructure Your Business">
                    Restructure Your Business
                  </option>
                  <option value="Administration & Liquidation">
                    Administration &amp; Liquidation
                  </option>
                  <option value="Credit Repair & Funding">
                    Credit Repair &amp; Funding
                  </option>
                  <option value="Director Penalty Notice">
                    Director Penalty Notice
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Situation */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="situation" style={labelStyle}>
                  Brief Description of Your Situation
                </label>
                <textarea
                  id="situation"
                  name="situation"
                  placeholder="e.g. We have an ATO debt of $80k and are receiving creditor pressure..."
                  value={form.situation}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: '#1a1a3e',
                  color: '#ffffff',
                  borderRadius: 50,
                  padding: '14px 28px',
                  fontSize: 15,
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: 4,
                }}
              >
                Submit — Schedule My Discovery Call →
              </button>

              <p
                style={{
                  fontSize: 12,
                  color: '#999',
                  textAlign: 'center',
                  margin: 0,
                }}
              >
                Your information is kept strictly confidential.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
