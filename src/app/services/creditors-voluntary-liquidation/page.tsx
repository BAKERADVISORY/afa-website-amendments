import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Creditors Voluntary Liquidation Australia | CVL Practitioners Gold Coast',
  description:
    'Creditors Voluntary Liquidation (CVL) winds up an insolvent company in an orderly way, protecting directors from ongoing liability. Expert CVL practitioners serving Gold Coast QLD, Brisbane and Australia. Free director consultation.',
  keywords: [
    'creditors voluntary liquidation Australia',
    'CVL practitioners Gold Coast',
    'company liquidation Queensland',
    'insolvent company winding up Australia',
    'director duties insolvency Queensland',
  ],
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/services/creditors-voluntary-liquidation/',
  },
  openGraph: {
    title: 'Creditors Voluntary Liquidation Australia | CVL Practitioners Gold Coast',
    description:
      'Wind up your insolvent company properly and protect yourself from personal liability. Expert CVL practitioners in Gold Coast QLD.',
    url: 'https://www.ausfinancialadvisory.com.au/services/creditors-voluntary-liquidation/',
  },
}
import { CTABanner } from '@/components/CTABanner'
import { Footer } from '@/components/Footer'
import { AlertCircle, TrendingDown, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react'

function PlaceholderImage({ height = 400, label = 'Image' }: { height?: number; label?: string }) {
  return (
    <div style={{
      width: '100%', height, backgroundColor: '#D1D5DB', borderRadius: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#9CA3AF', fontSize: 14, fontWeight: 500
    }}>{label}</div>
  )
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Creditors Voluntary Liquidation',
  serviceType: 'Creditors Voluntary Liquidation',
  description:
    'A formal process to wind up an insolvent company in an orderly way, distributing assets fairly to creditors and protecting directors from ongoing personal liability.',
  provider: {
    '@type': 'FinancialService',
    name: 'Australian Financial Advisory',
    url: 'https://www.ausfinancialadvisory.com.au',
    telephone: '1300052321',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gold Coast',
      addressRegion: 'QLD',
      postalCode: '4216',
      addressCountry: 'AU',
    },
  },
  areaServed: { '@type': 'Country', name: 'Australia' },
  url: 'https://www.ausfinancialadvisory.com.au/services/creditors-voluntary-liquidation/',
}

export default function CreditorsVoluntaryLiquidationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <p style={{
            color: '#333333',
            textTransform: 'uppercase',
            fontSize: 12,
            letterSpacing: 3,
            fontWeight: 600,
            marginBottom: 16,
          }}>
            INSOLVENCY SERVICES
          </p>
          <h1 style={{
            color: '#FFFFFF',
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: 700,
          }}>
            Creditors Voluntary Liquidation
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18,
            lineHeight: 1.6,
            marginBottom: 36,
            maxWidth: 640,
          }}>
            When a company cannot meet its financial obligations, Creditors Voluntary Liquidation provides an orderly process to wind up affairs and distribute assets fairly to creditors.
          </p>
          <a href="/contact/" style={{
            backgroundColor: '#333333',
            color: '#FFFFFF',
            borderRadius: 50,
            padding: '14px 28px',
            fontSize: 16,
            fontWeight: 700,
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Free Consultation →
          </a>
        </div>
        {/* Wave divider */}
        <div style={{ position: 'absolute', bottom: -1, left: '-35%', width: '171%', height: 100 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* When is CVL Appropriate Section */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{
            fontSize: 36,
            fontWeight: 700,
            color: '#383838',
            textAlign: 'center',
            marginBottom: 16,
            lineHeight: 1.25,
          }}>
            When is CVL Appropriate?
          </h2>
          <p style={{
            fontSize: 16,
            color: '#666666',
            textAlign: 'center',
            maxWidth: 700,
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}>
            Creditors Voluntary Liquidation is suitable when a company is insolvent and cannot continue trading viably.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            {[
              {
                Icon: AlertCircle,
                title: 'Insolvency',
                desc: 'Company cannot pay debts as they fall due or has liabilities exceeding assets',
              },
              {
                Icon: TrendingDown,
                title: 'No Viable Future',
                desc: 'Business has no reasonable prospect of returning to profitability',
              },
              {
                Icon: ShieldCheck,
                title: 'Director Decision',
                desc: 'Directors recognise the need for orderly wind-up to minimise further losses',
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} style={{
                backgroundColor: '#f5f5f5',
                borderRadius: 12,
                padding: 28,
              }}>
                <Icon size={28} color="#333333" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#383838', marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 15, color: '#666666', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The CVL Process Section */}
      <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{
            fontSize: 38,
            fontWeight: 700,
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: 16,
            lineHeight: 1.25,
          }}>
            The CVL Process
          </h2>
          <p style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            maxWidth: 600,
            margin: '0 auto 56px',
            lineHeight: 1.6,
          }}>
            A structured approach to winding up your company affairs
          </p>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            {[
              {
                num: 1,
                title: 'Initial Assessment',
                desc: 'Review company financial position and determine suitability for CVL process.',
              },
              {
                num: 2,
                title: 'Director Resolution',
                desc: 'Directors pass resolution to wind up the company and appoint liquidator.',
              },
              {
                num: 3,
                title: 'Creditor Meeting',
                desc: 'Creditors meeting held to confirm liquidator appointment and discuss process.',
              },
              {
                num: 4,
                title: 'Asset Realisation',
                desc: 'Liquidator realises company assets and investigates director conduct.',
              },
              {
                num: 5,
                title: 'Distribution',
                desc: 'Available funds distributed to creditors according to legal priorities.',
              },
              {
                num: 6,
                title: 'Deregistration',
                desc: 'Company is formally deregistered and removed from ASIC records.',
              },
            ].map((step, index, arr) => (
              <div key={step.num}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    backgroundColor: '#333333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: 18,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    {step.num}
                  </div>
                  <div style={{ paddingTop: 8 }}>
                    <h3 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{step.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
                {index < arr.length - 1 && (
                  <div style={{
                    width: 2,
                    height: 40,
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    marginLeft: 21,
                    marginTop: 4,
                    marginBottom: 4,
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '80px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            {/* Left column */}
            <div>
              <p style={{
                color: '#333333',
                textTransform: 'uppercase',
                fontSize: 12,
                letterSpacing: 3,
                fontWeight: 600,
                marginBottom: 12,
              }}>
                BENEFITS
              </p>
              <h2 style={{ fontSize: 36, fontWeight: 700, color: '#383838', marginBottom: 20, lineHeight: 1.25 }}>
                Benefits of Professional CVL
              </h2>
              <p style={{ fontSize: 16, color: '#444444', lineHeight: 1.7, marginBottom: 32 }}>
                Professional management of the liquidation process ensures compliance, maximises asset recovery, and protects directors from ongoing liability.
              </p>
              <a href="/contact/" style={{
                backgroundColor: '#333333',
                color: '#FFFFFF',
                borderRadius: 50,
                padding: '14px 28px',
                fontSize: 16,
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-block',
              }}>
                Get Free Consultation →
              </a>
            </div>
            {/* Right column: bullets + placeholder */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
                {[
                  'Orderly wind-up of company affairs',
                  'Protection from further creditor pressure',
                  'Compliance with all legal requirements',
                  'Relief from ongoing trading losses',
                  'Director protection from personal liability',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <CheckCircle size={20} color="#333333" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#383838', fontSize: 16 }}>{item}</span>
                  </div>
                ))}
              </div>
              <PlaceholderImage height={420} label="CVL Benefits" />
            </div>
          </div>
        </div>
      </section>

      {/* Director Responsibilities Section */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <div style={{
            backgroundColor: '#FFF4EF',
            borderRadius: 12,
            padding: 40,
          }}>
            <p style={{
              color: '#333333',
              textTransform: 'uppercase',
              fontSize: 12,
              letterSpacing: 3,
              fontWeight: 600,
              marginBottom: 10,
            }}>
              Insolvent Trading
            </p>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111111', marginBottom: 16, lineHeight: 1.3 }}>
              Director Responsibilities
            </h2>
            <p style={{ fontSize: 16, color: '#444444', lineHeight: 1.7, marginBottom: 28 }}>
              Directors have a duty to prevent insolvent trading. Once a company becomes insolvent, continuing to trade can result in personal liability for directors for debts incurred during this period. Early action through CVL can help minimise this risk and ensure compliance with director duties under the Corporations Act.
            </p>
            <a href="/contact/" style={{
              backgroundColor: '#333333',
              color: '#FFFFFF',
              borderRadius: 50,
              padding: '14px 28px',
              fontSize: 16,
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              Get Expert Advice →
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '48px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111111', marginBottom: 24 }}>
            Related Services
          </h2>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/services/voluntary-administration/" style={{ backgroundColor: '#f5f5f5', borderRadius: 8, padding: '14px 20px', fontSize: 15, fontWeight: 600, color: '#111111', textDecoration: 'none' }}>
              Voluntary Administration &rarr;
            </a>
            <a href="/services/small-business-restructure/" style={{ backgroundColor: '#f5f5f5', borderRadius: 8, padding: '14px 20px', fontSize: 15, fontWeight: 600, color: '#111111', textDecoration: 'none' }}>
              Small Business Restructure &rarr;
            </a>
            <a href="/close-company/" style={{ backgroundColor: '#f5f5f5', borderRadius: 8, padding: '14px 20px', fontSize: 15, fontWeight: 600, color: '#111111', textDecoration: 'none' }}>
              Close Your Company &rarr;
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
      </main>
      <Footer />
    </>
  )
}
