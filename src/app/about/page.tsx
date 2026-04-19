import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'About Us | Pre-Insolvency Advisers Gold Coast QLD',
  description:
    'Australian Financial Advisory is a specialist pre-insolvency firm with 15+ years experience helping 500+ company directors across Gold Coast and Australia navigate voluntary administration, restructuring and creditors voluntary liquidation.',
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/about/',
  },
  openGraph: {
    title: 'About Us | Pre-Insolvency Advisers Gold Coast QLD',
    description:
      'Specialist pre-insolvency firm with 15+ years experience helping company directors across Gold Coast and Australia.',
    url: 'https://www.ausfinancialadvisory.com.au/about/',
  },
}
import { CTABanner } from '@/components/CTABanner'
import { Footer } from '@/components/Footer'
import { Users, Target, ShieldCheck, Star } from 'lucide-react'

function PlaceholderImage({ height = 400, label = 'Image' }: { height?: number; label?: string }) {
  return (
    <div style={{
      width: '100%', height, backgroundColor: '#D1D5DB', borderRadius: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#9CA3AF', fontSize: 14, fontWeight: 500
    }}>{label}</div>
  )
}

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* Hero Section */}
        <section style={{
          backgroundColor: '#111111',
          paddingTop: 160,
          paddingBottom: 80,
          paddingLeft: 80,
          paddingRight: 80,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <p style={{
              color: '#ffffff',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              About Us
            </p>
            <h1 style={{
              color: '#FFFFFF',
              fontSize: 52,
              fontWeight: 700,
              marginBottom: 24,
              lineHeight: 1.15,
              maxWidth: 700,
            }}>
              Expert Business Advisory Team
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.70)',
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 600,
              marginBottom: 36,
            }}>
              We&apos;ve been helping businesses navigate their most challenging financial and strategic decisions with expertise, integrity, and proven results.
            </p>
            <a
              href="#contact"
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
              Learn More &rarr;
            </a>
          </div>
          {/* Wave divider */}
          <div style={{ position: 'absolute', bottom: -1, left: '-35%', width: '171%', height: 100, overflow: 'visible' }}>
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* Who We Are Section */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

              {/* Left text */}
              <div>
                <p style={{
                  color: '#333333',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}>
                  Who We Are
                </p>
                <h2 style={{
                  color: '#383838',
                  fontSize: 38,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: 24,
                }}>
                  Dedicated to Your Business Success
                </h2>
                <p style={{ color: '#666666', fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>
                  Australian Financial Advisory Pty Ltd is a specialist advisory firm helping Australian businesses navigate complex financial challenges. Our team of experienced practitioners brings deep expertise in insolvency law, business restructuring, and strategic financial management.
                </p>
                <p style={{ color: '#666666', fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
                  We work closely with business owners, directors, and key stakeholders to develop tailored solutions that protect value, preserve jobs, and achieve the best possible outcomes for all parties involved.
                </p>

                {/* Stats row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                  {[
                    { value: '500+', label: 'Businesses Helped' },
                    { value: '15+', label: 'Years Experience' },
                    { value: '98%', label: 'Client Satisfaction' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        border: '2px solid #333333',
                        borderRadius: 10,
                        padding: '20px 16px',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ color: '#333333', fontSize: 28, fontWeight: 700, lineHeight: 1 }}>{stat.value}</div>
                      <div style={{ color: '#666666', fontSize: 13, marginTop: 6 }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right placeholder */}
              <div>
                <PlaceholderImage height={400} label="Team Photo" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section style={{ backgroundColor: '#f5f5f5', padding: '80px 0' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ color: '#111111', fontSize: 38, fontWeight: 700, marginBottom: 12 }}>Our Core Values</h2>
              <p style={{ color: '#666666', fontSize: 17 }}>The principles that guide everything we do</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
              {[
                {
                  icon: <ShieldCheck size={36} color="#333333" />,
                  title: 'Integrity',
                  desc: 'We operate with complete transparency and honesty in all our dealings, ensuring you always have the full picture.',
                },
                {
                  icon: <Target size={36} color="#333333" />,
                  title: 'Results-Driven',
                  desc: 'Every strategy we develop is focused on delivering measurable outcomes that make a real difference to your business.',
                },
                {
                  icon: <Users size={36} color="#333333" />,
                  title: 'Client-Focused',
                  desc: 'Your success is our success. We tailor every solution to your specific circumstances and goals.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 12,
                    padding: 32,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  }}
                >
                  <div style={{ marginBottom: 20 }}>{card.icon}</div>
                  <h3 style={{ color: '#111111', fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{card.title}</h3>
                  <p style={{ color: '#666666', fontSize: 15, lineHeight: 1.7 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
            <p style={{
              color: '#ffffff',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              Our Expertise
            </p>
            <h2 style={{ color: '#FFFFFF', fontSize: 38, fontWeight: 700, marginBottom: 16, maxWidth: 600 }}>
              Comprehensive Financial Advisory Services
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: 17, lineHeight: 1.6, marginBottom: 48, maxWidth: 560 }}>
              Our team of specialists provides expert guidance across the full spectrum of financial advisory services.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {[
                { title: 'Solvency Advice', desc: 'Expert guidance on your company\'s solvency position and obligations' },
                { title: 'Debt Negotiation', desc: 'Strategic negotiations with creditors to achieve sustainable outcomes' },
                { title: 'Business Restructuring', desc: 'Comprehensive restructuring solutions to revitalise your business' },
                { title: 'Voluntary Administration', desc: 'Independent administration to assess and maximise business value' },
                { title: 'Small Business Restructuring', desc: 'Formal SBR process to help viable small businesses recover' },
                { title: 'Personal Insolvency', desc: 'Expert guidance through personal insolvency options and obligations' },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#333333',
                    marginTop: 6,
                    flexShrink: 0,
                  }} />
                  <div>
                    <h3 style={{ color: '#FFFFFF', fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>
            {/* Quote icon */}
            <div style={{ marginBottom: 24 }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="#333333" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="#333333" />
              </svg>
            </div>
            <p style={{
              color: '#383838',
              fontSize: 19,
              lineHeight: 1.75,
              fontStyle: 'italic',
              marginBottom: 28,
            }}>
              &ldquo;Australian Financial Advisory helped us navigate a very challenging period with clarity and confidence. Their advice was strategic, practical, and tailored to our specific situation. What stood out most was their ability to simplify complex financial decisions and provide a clear path forward. We felt supported at every step.&rdquo;
            </p>
            <p style={{ color: '#666666', fontSize: 15, fontWeight: 600, marginBottom: 12 }}>
              &mdash; Business Owner, Construction Industry
            </p>
            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
