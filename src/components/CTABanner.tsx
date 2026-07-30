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

export function DiscoveryCallForm() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('https://formspree.io/f/mrejjazr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(form),
    })
    if (response.ok) {
      setSubmitted(true)
    } else {
      alert('There was an error submitting the form. Please try again.')
    }
  }

  return (
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
            Book a Free Discovery Call
          </h3>
          <p
            style={{
              fontSize: 14,
              color: '#666',
              margin: '0 0 8px',
              lineHeight: 1.5,
            }}
          >
            Tell us a little about your situation and we&apos;ll reach out to
            arrange a time.
          </p>

          {/* Name */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor="name" style={labelStyle}>
              Your Name{' '}
              <span style={{ fontWeight: 400, fontSize: 11, color: '#999999' }}>
                (required)
              </span>
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
              Phone Number{' '}
              <span style={{ fontWeight: 400, fontSize: 11, color: '#999999' }}>
                (required)
              </span>
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
              Email Address{' '}
              <span style={{ fontWeight: 400, fontSize: 11, color: '#999999' }}>
                (required)
              </span>
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
              Main Service Needed{' '}
              <span style={{ fontWeight: 400, fontSize: 11, color: '#999999' }}>
                (required)
              </span>
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
            className="cta-submit-btn"
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
  )
}
