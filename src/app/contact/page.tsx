import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Contact Us | Free Confidential Business Debt Assessment Gold Coast',
  description:
    'Contact Australian Financial Advisory for a free, confidential consultation about your business debt or insolvency options. Serving Gold Coast QLD 4216, Brisbane and Australia. Call 1300 052 321 or send us a message.',
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/contact/',
  },
  openGraph: {
    title: 'Contact Us | Free Confidential Business Debt Assessment Gold Coast',
    description:
      'Free confidential consultation for company directors facing financial distress. Gold Coast QLD and Australia-wide. Call 1300 052 321.',
    url: 'https://www.ausfinancialadvisory.com.au/contact/',
  },
}
import { Footer } from '@/components/Footer'
import { Phone, Mail, Clock, Headphones } from 'lucide-react'

function PlaceholderImage({
  height = 400,
  label = 'Image',
}: {
  height?: number
  label?: string
}) {
  return (
    <div
      style={{
        width: '100%',
        height,
        backgroundColor: '#D1D5DB',
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9CA3AF',
        fontSize: 14,
        fontWeight: 500,
      }}
    >
      {label}
    </div>
  )
}

export default function ContactPage() {
  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: 8,
    padding: '12px',
    fontSize: 14,
    color: '#383838',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    color: '#555',
    marginBottom: 6,
  }

  return (
    <>
      <NavBar />
      <main>
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: '#1a1a3e',
            paddingTop: 160,
            paddingBottom: 80,
            paddingLeft: 80,
            paddingRight: 80,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              maxWidth: 1400,
              margin: '0 auto',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                color: '#333333',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              CONTACT US
            </p>
            <h1
              style={{
                fontSize: 52,
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.15,
                marginBottom: 20,
                maxWidth: 600,
              }}
            >
              Get In Touch
            </h1>
            <p
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: 600,
                lineHeight: 1.6,
                marginBottom: 32,
              }}
            >
              Ready to take the next step? Contact our expert team for a
              confidential consultation about your business needs. We&apos;re
              here to help.
            </p>
            <a
              href="/contact/"
              style={{
                backgroundColor: '#333333',
                color: '#FFFFFF',
                borderRadius: 50,
                padding: '14px 28px',
                fontSize: 16,
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Get Free Debt Assessment &rarr;
            </a>
          </div>
          {/* Wave */}
          <div
            style={{
              position: 'absolute',
              bottom: -1,
              left: '-35%',
              width: '171%',
              height: 100,
            }}
          >
            <svg
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              style={{ width: '100%', height: '100%' }}
            >
              <path
                d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </section>

        {/* Main Content Section */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 420px',
                gap: 64,
              }}
            >
              {/* Left: Contact Form */}
              <div>
                <h2
                  style={{
                    fontSize: 36,
                    fontWeight: 800,
                    color: '#383838',
                    marginBottom: 12,
                  }}
                >
                  Send Us a Message
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: '#666',
                    marginBottom: 36,
                    lineHeight: 1.6,
                  }}
                >
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
                <form>
                  {/* Row 1: Full Name + Email */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 20,
                      marginBottom: 20,
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input type="text" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input type="email" style={inputStyle} />
                    </div>
                  </div>
                  {/* Row 2: Phone + Company */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 20,
                      marginBottom: 20,
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input type="tel" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Company Name</label>
                      <input type="text" style={inputStyle} />
                    </div>
                  </div>
                  {/* Service Needed */}
                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>Service Needed</label>
                    <select style={inputStyle}>
                      <option>Reduce Debt</option>
                      <option>Close Company</option>
                      <option>Other</option>
                    </select>
                  </div>
                  {/* Message */}
                  <div style={{ marginBottom: 28 }}>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      style={{ ...inputStyle, height: 120, resize: 'vertical' }}
                    />
                  </div>
                  {/* Submit */}
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: '#1a1a3e',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: 8,
                      padding: '16px',
                      fontSize: 15,
                      fontWeight: 700,
                      cursor: 'pointer',
                      letterSpacing: 0.5,
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right: Info Boxes */}
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
              >
                {/* Box 1: Free Consultation */}
                <div
                  style={{
                    backgroundColor: '#f8f8ff',
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        backgroundColor: '#333333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Headphones size={20} color="#FFFFFF" />
                    </div>
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#1a1a3e',
                        margin: 0,
                      }}
                    >
                      Free Consultation
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: '#555',
                      lineHeight: 1.6,
                      marginBottom: 12,
                    }}
                  >
                    Get expert advice on your business challenges with a
                    complimentary 30-minute consultation.
                  </p>
                  <a
                    href="/contact/"
                    style={{
                      color: '#333333',
                      fontWeight: 600,
                      fontSize: 14,
                      textDecoration: 'none',
                    }}
                  >
                    Schedule Now &rarr;
                  </a>
                </div>

                {/* Box 2: Business Hours */}
                <div
                  style={{
                    backgroundColor: '#f8f8ff',
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        backgroundColor: '#333333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Clock size={20} color="#FFFFFF" />
                    </div>
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#1a1a3e',
                        margin: 0,
                      }}
                    >
                      Hours
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: '#555',
                      lineHeight: 1.6,
                      marginBottom: 12,
                    }}
                  >
                    Monday &ndash; Friday: 8.30 AM &ndash; 5.30 PM
                  </p>
                  <a
                    href="/contact/"
                    style={{
                      color: '#333333',
                      fontWeight: 600,
                      fontSize: 14,
                      textDecoration: 'none',
                    }}
                  >
                    Schedule Now &rarr;
                  </a>
                </div>

                {/* Box 3: Urgent Matter */}
                <div
                  style={{
                    backgroundColor: '#1a1a3e',
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        backgroundColor: '#333333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={20} color="#FFFFFF" />
                    </div>
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#FFFFFF',
                        margin: 0,
                      }}
                    >
                      Urgent Business Matter?
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.6,
                      marginBottom: 20,
                    }}
                  >
                    If you&apos;re facing an immediate business crisis such as
                    creditor pressure, legal notices, or time-sensitive
                    financial matters, contact us immediately.
                  </p>
                  <a
                    href="tel:1300052321"
                    style={{
                      backgroundColor: '#333333',
                      color: '#FFFFFF',
                      borderRadius: 50,
                      padding: '10px 24px',
                      fontSize: 15,
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    1300 052 321
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
