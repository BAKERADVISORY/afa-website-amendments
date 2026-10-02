'use client'

import { useId, useState } from 'react'

const inputStyle: React.CSSProperties = {
  border: '1px solid #CFCFD9',
  borderRadius: 8,
  padding: '10px 14px',
  fontSize: 15,
  color: '#1a1a3e',
  backgroundColor: '#FAFAFA',
  width: '100%',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  color: '#1a1a3e',
}

const hintStyle: React.CSSProperties = {
  fontWeight: 400,
  fontSize: 12,
  color: '#666666',
}

interface DiscoveryCallFormProps {
  headingLevel?: 'h2' | 'h3'
}

/**
 * Free initial consultation enquiry form. Posts to the existing Formspree
 * endpoint. Field names are unchanged so existing notifications keep working.
 */
export function DiscoveryCallForm({ headingLevel = 'h2' }: DiscoveryCallFormProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    abn: '',
    email: '',
    service: '',
    situation: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  )
  const uid = useId()
  const id = (field: string) => `${uid}-${field}`
  const Heading = headingLevel

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('https://formspree.io/f/mrejjazr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })
      setStatus(response.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
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
      {status === 'sent' ? (
        <div
          role="status"
          aria-live="polite"
          style={{ textAlign: 'center', padding: '32px 0' }}
        >
          <div aria-hidden="true" style={{ fontSize: 48, marginBottom: 16 }}>
            ✓
          </div>
          <Heading
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: '#1a1a3e',
              margin: '0 0 12px',
            }}
          >
            Thank you. We will be in touch to arrange a time.
          </Heading>
          <p style={{ fontSize: 15, color: '#444444', lineHeight: 1.6 }}>
            Your free initial consultation is a confidential first conversation
            to understand your situation and confirm whether we can help.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate={false}
          aria-labelledby={id('heading')}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <Heading
            id={id('heading')}
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#1a1a3e',
              margin: '0 0 4px',
            }}
          >
            Book a free initial consultation
          </Heading>
          <p
            style={{
              fontSize: 14,
              color: '#444444',
              margin: '0 0 8px',
              lineHeight: 1.5,
            }}
          >
            Tell us a little about your situation and we will be in touch to
            arrange a time. No pressure, no sales pitch.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor={id('name')} style={labelStyle}>
              Your name <span style={hintStyle}>(required)</span>
            </label>
            <input
              id={id('name')}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Andrew Smith"
              value={form.name}
              onChange={handleChange}
              required
              aria-required="true"
              style={inputStyle}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor={id('phone')} style={labelStyle}>
              Phone number <span style={hintStyle}>(required)</span>
            </label>
            <input
              id={id('phone')}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="e.g. 0400 000 000"
              value={form.phone}
              onChange={handleChange}
              required
              aria-required="true"
              style={inputStyle}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor={id('abn')} style={labelStyle}>
              ABN (Australian Business Number){' '}
              <span style={hintStyle}>(optional)</span>
            </label>
            <input
              id={id('abn')}
              name="abn"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              placeholder="e.g. 12 345 678 901"
              value={form.abn}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor={id('email')} style={labelStyle}>
              Email address <span style={hintStyle}>(required)</span>
            </label>
            <input
              id={id('email')}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="e.g. andrew@example.com.au"
              value={form.email}
              onChange={handleChange}
              required
              aria-required="true"
              style={inputStyle}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor={id('service')} style={labelStyle}>
              Which best describes your situation?{' '}
              <span style={hintStyle}>(required)</span>
            </label>
            <select
              id={id('service')}
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              aria-required="true"
              style={inputStyle}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="ATO debt or payment plan pressure">
                ATO debt or payment plan pressure
              </option>
              <option value="Director Penalty Notice">
                Director Penalty Notice received or expected
              </option>
              <option value="Restructure Your Business">
                Considering restructuring
              </option>
              <option value="Administration & Liquidation">
                Considering closing or winding up the company
              </option>
              <option value="Other">Not sure yet</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor={id('situation')} style={labelStyle}>
              Brief description of your situation{' '}
              <span style={hintStyle}>(optional)</span>
            </label>
            <textarea
              id={id('situation')}
              name="situation"
              placeholder="e.g. We have an ATO debt and are receiving creditor pressure"
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
            disabled={status === 'sending'}
            style={{
              backgroundColor: '#1a1a3e',
              color: '#ffffff',
              borderRadius: 50,
              padding: '14px 28px',
              fontSize: 15,
              fontWeight: 700,
              border: 'none',
              cursor: status === 'sending' ? 'wait' : 'pointer',
              marginTop: 4,
            }}
          >
            {status === 'sending'
              ? 'Sending...'
              : 'Book my free initial consultation'}
          </button>

          <p
            id={id('status')}
            role="status"
            aria-live="polite"
            style={{
              fontSize: 14,
              color: status === 'error' ? '#8a1c1c' : '#444444',
              textAlign: 'center',
              margin: 0,
              minHeight: 20,
            }}
          >
            {status === 'error'
              ? 'Sorry, the form could not be sent. Please try again or call (07) 2113 3069.'
              : 'Confidential. No obligation. The initial consultation is free.'}
          </p>
        </form>
      )}
    </div>
  )
}
