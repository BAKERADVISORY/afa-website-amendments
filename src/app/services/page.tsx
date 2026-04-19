import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Business Restructuring & Insolvency Services | Gold Coast QLD',
  description:
    'Expert insolvency and restructuring services for company directors: voluntary administration, small business restructuring (SBR) and creditors voluntary liquidation (CVL). Serving Gold Coast, Brisbane and Australia. Free confidential consultation.',
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/services/',
  },
  openGraph: {
    title: 'Business Restructuring & Insolvency Services | Gold Coast QLD',
    description:
      'Voluntary administration, small business restructuring and creditors voluntary liquidation for company directors across Gold Coast and Australia.',
    url: 'https://www.ausfinancialadvisory.com.au/services/',
  },
}
import { CTABanner } from '@/components/CTABanner'
import { Footer } from '@/components/Footer'
import { ArrowRight } from 'lucide-react'

export default function ServicesPage() {
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
              Our Services
            </p>
            <h1 style={{
              color: '#FFFFFF',
              fontSize: 52,
              fontWeight: 700,
              marginBottom: 24,
              lineHeight: 1.15,
              maxWidth: 700,
            }}>
              Specialised Financial Advisory Services
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.70)',
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 580,
              marginBottom: 36,
            }}>
              We provide specialised services to help businesses navigate financial challenges and make informed decisions about their future.
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
              Schedule Consultation &rarr;
            </a>
          </div>
          {/* Wave divider */}
          <div style={{ position: 'absolute', bottom: -1, left: '-35%', width: '171%', height: 100, overflow: 'visible' }}>
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* Services Cards Section */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
            <p style={{
              textAlign: 'center',
              color: '#666666',
              fontSize: 17,
              marginBottom: 48,
            }}>
              Tailored solutions for every stage of your business journey
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>

              {/* Card 1: SBR */}
              <ServiceCard
                title="Small Business Restructure (SBR)"
                description="A formal restructuring process designed to help viable small businesses restructure their debts and continue trading."
                bullets={['Debt restructuring', 'Creditor protection', 'Business continuity', 'Professional guidance']}
                href="/services/small-business-restructure/"
              />

              {/* Card 2: VA */}
              <ServiceCard
                title="Voluntary Administration (VA)"
                description="A process where an independent administrator takes control to assess the company's financial position and explore options."
                bullets={['Independent assessment', 'Creditor meetings', 'Business evaluation', 'Restructuring options']}
                href="/services/voluntary-administration/"
              />

              {/* Card 3: CVL */}
              <ServiceCard
                title="Creditors Voluntary Liquidation (CVL)"
                description="A formal process to wind up a company's affairs when it can no longer meet its financial obligations."
                bullets={['Asset liquidation', 'Creditor payments', 'Legal compliance', 'Director protection']}
                href="/services/creditors-voluntary-liquidation/"
              />

            </div>
          </div>
        </section>

        {/* Ready to Transform Section */}
        <section style={{ backgroundColor: '#111111', padding: '80px 0', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>
            <h2 style={{
              color: '#FFFFFF',
              fontSize: 42,
              fontWeight: 700,
              marginBottom: 20,
              lineHeight: 1.2,
            }}>
              Ready to Transform Your Business?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.70)',
              fontSize: 17,
              lineHeight: 1.6,
              marginBottom: 36,
            }}>
              Every business challenge is an opportunity for growth. Let our expert team help you navigate complex decisions and achieve your goals.
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
              Get Free Consultation &rarr;
            </a>
          </div>
        </section>

        {/* Industries Section */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
            <h2 style={{
              color: '#111111',
              fontSize: 38,
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 16,
            }}>
              Industries We Serve
            </h2>
            <p style={{
              color: '#666666',
              fontSize: 17,
              textAlign: 'center',
              marginBottom: 48,
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              Our expertise spans across multiple industries, providing specialised knowledge for your sector&apos;s unique challenges.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              justifyContent: 'center',
            }}>
              {[
                'Construction',
                'Hospitality & Tourism',
                'Professional Services',
                'Labour Hire',
                'Technology & Software',
                'Retail & E-commerce',
                'Manufacturing',
                'Transportation & Logistics',
              ].map((industry) => (
                <span
                  key={industry}
                  style={{
                    backgroundColor: '#f5f5f5',
                    color: '#111111',
                    borderRadius: 50,
                    padding: '12px 24px',
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  {industry}
                </span>
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

interface ServiceCardProps {
  title: string
  description: string
  bullets: string[]
  href: string
}

function ServiceCard({ title, description, bullets, href }: ServiceCardProps) {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      borderRadius: 12,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}>
      {/* Icon placeholder */}
      <div style={{
        width: 40,
        height: 40,
        backgroundColor: '#333333',
        borderRadius: 8,
      }} />
      <h3 style={{ color: '#111111', fontSize: 20, fontWeight: 700, lineHeight: 1.25 }}>{title}</h3>
      <p style={{ color: '#555555', fontSize: 15, lineHeight: 1.65 }}>{description}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {bullets.map((bullet) => (
          <li key={bullet} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ArrowRight size={16} color="#333333" style={{ flexShrink: 0 }} />
            <span style={{ color: '#555555', fontSize: 14 }}>{bullet}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        style={{
          color: '#333333',
          fontSize: 15,
          fontWeight: 700,
          textDecoration: 'none',
          marginTop: 4,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        Learn More &rarr;
      </a>
    </div>
  )
}
