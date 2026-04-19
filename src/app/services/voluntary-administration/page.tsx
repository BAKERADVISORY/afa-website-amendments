import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Voluntary Administration Queensland | VA Practitioners Gold Coast',
  description:
    'Voluntary Administration gives financially distressed companies 25 business days to assess all options with creditor protection. Expert VA practitioners in Gold Coast QLD and Queensland. Free confidential assessment for company directors.',
  keywords: [
    'voluntary administration Queensland',
    'voluntary administration Gold Coast',
    'VA practitioners QLD',
    'company voluntary administration Australia',
    'deed of company arrangement Queensland',
  ],
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/services/voluntary-administration/',
  },
  openGraph: {
    title: 'Voluntary Administration Queensland | VA Practitioners Gold Coast',
    description:
      'Protect your company from creditors while exploring all recovery options. Expert voluntary administration practitioners in Gold Coast QLD.',
    url: 'https://www.ausfinancialadvisory.com.au/services/voluntary-administration/',
  },
}
import { Footer } from '@/components/Footer'
import { ShieldCheck, Clock, Users, Scale, CheckCircle, ArrowRight } from 'lucide-react'

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
  name: 'Voluntary Administration',
  serviceType: 'Voluntary Administration',
  description:
    'A formal insolvency process where an independent administrator takes control to assess company options and protect from creditor actions over 25 business days.',
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
  url: 'https://www.ausfinancialadvisory.com.au/services/voluntary-administration/',
}

export default function VoluntaryAdministrationPage() {
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
            Voluntary Administration
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18,
            lineHeight: 1.6,
            marginBottom: 36,
            maxWidth: 640,
          }}>
            Voluntary Administration provides a structured process for financially distressed companies to explore options for recovery while being protected from creditor actions.
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

      {/* What is VA Section */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
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
                WHAT IS VA
              </p>
              <h2 style={{ fontSize: 36, fontWeight: 700, color: '#383838', marginBottom: 20, lineHeight: 1.25 }}>
                What is Voluntary Administration?
              </h2>
              <p style={{ fontSize: 16, color: '#444444', lineHeight: 1.7, marginBottom: 16 }}>
                Voluntary Administration is a formal insolvency process designed to provide companies with breathing space to explore their options. It&apos;s often the first step when a company faces financial difficulties but may still be viable.
              </p>
              <p style={{ fontSize: 16, color: '#444444', lineHeight: 1.7, marginBottom: 28 }}>
                During this process, an independent administrator takes control of the company to investigate its affairs, assess its prospects, and determine the best course of action for creditors and the company.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  'Maximum 25 business days for resolution',
                  'Protection from creditor legal action',
                  'Independent professional oversight',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <CheckCircle size={20} color="#333333" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#383838', fontSize: 16 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right column */}
            <div>
              <PlaceholderImage height={420} label="Voluntary Administration" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Objective Box Section */}
      <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 16,
            padding: 48,
            maxWidth: 900,
            margin: '0 auto',
          }}>
            <p style={{
              color: '#333333',
              textTransform: 'uppercase',
              fontSize: 12,
              letterSpacing: 3,
              fontWeight: 600,
              marginBottom: 12,
            }}>
              Key Objective
            </p>
            <h3 style={{ fontSize: 28, fontWeight: 700, color: '#383838', marginBottom: 20, lineHeight: 1.3 }}>
              Breathing Space to Assess Your Future
            </h3>
            <p style={{ fontSize: 16, color: '#444444', lineHeight: 1.7 }}>
              The primary objective of a Voluntary Administration is to give a financially distressed company breathing room to assess its future and decide on the best path forward. By appointing an independent administrator, the company gains immediate protection from creditor action while a fair proposal is prepared for creditors. The aim is to maximise the chances of the company&apos;s survival or, if that&apos;s not viable, to achieve a better outcome for creditors than an immediate liquidation.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '80px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{
            fontSize: 36,
            fontWeight: 700,
            color: '#383838',
            textAlign: 'center',
            marginBottom: 16,
            lineHeight: 1.25,
          }}>
            Benefits of Voluntary Administration
          </h2>
          <p style={{
            fontSize: 16,
            color: '#666666',
            textAlign: 'center',
            maxWidth: 700,
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}>
            Voluntary Administration provides immediate relief and structured pathways to explore the best options for your business and creditors.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 900, margin: '0 auto' }}>
            {[
              {
                Icon: ShieldCheck,
                title: 'Creditor Protection',
                desc: 'Immediate protection from creditor actions and legal proceedings',
              },
              {
                Icon: Clock,
                title: 'Time to Assess',
                desc: 'Breathing space to properly evaluate your business options',
              },
              {
                Icon: Users,
                title: 'Expert Management',
                desc: 'Independent administrator takes control to maximise outcomes',
              },
              {
                Icon: Scale,
                title: 'Fair Process',
                desc: 'Equitable treatment of all stakeholders and creditors',
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 12,
                padding: 28,
              }}>
                <Icon size={28} color="#333333" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#383838', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 15, color: '#666666', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Administration Process Section */}
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
            The Administration Process
          </h2>
          <p style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            maxWidth: 700,
            margin: '0 auto 56px',
            lineHeight: 1.6,
          }}>
            A structured 25-day process designed to assess all options and determine the best outcome for the company and its creditors.
          </p>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            {[
              {
                num: 1,
                title: 'Appointment',
                desc: 'Administrator appointed by directors or creditors',
              },
              {
                num: 2,
                title: 'Investigation',
                desc: 'Comprehensive review of business affairs and options',
              },
              {
                num: 3,
                title: 'Creditor Meeting',
                desc: 'First meeting within 8 business days of appointment',
              },
              {
                num: 4,
                title: 'Decision',
                desc: "Second meeting to decide the company's future within 25 business days",
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

      {/* Possible Outcomes Section */}
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
            Possible Outcomes
          </h2>
          <p style={{
            fontSize: 16,
            color: '#666666',
            textAlign: 'center',
            maxWidth: 700,
            margin: '0 auto 36px',
            lineHeight: 1.6,
          }}>
            At the second creditors&apos; meeting, creditors will vote on one of several options for the company&apos;s future. Each outcome is designed to maximise value for stakeholders.
          </p>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
              {[
                'Return to creditors (Deed of Company Arrangement)',
                'Proceed to liquidation',
              ].map((outcome) => (
                <div key={outcome} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <ArrowRight size={20} color="#333333" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#383838', fontSize: 16 }}>{outcome}</span>
                </div>
              ))}
            </div>
            {/* DOCA highlighted box */}
            <div style={{
              backgroundColor: '#f5f5f5',
              borderRadius: 12,
              padding: 32,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#111111', margin: 0 }}>
                  Deed of Company Arrangement
                </h3>
                <span style={{
                  backgroundColor: '#333333',
                  color: '#FFFFFF',
                  borderRadius: 50,
                  padding: '4px 14px',
                  fontSize: 13,
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}>
                  The most common successful outcome
                </span>
              </div>
              <p style={{ fontSize: 15, color: '#444444', lineHeight: 1.7, marginBottom: 20 }}>
                A DOCA is a binding agreement between the company and its creditors that allows the company to continue operating while paying creditors according to agreed terms.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Company continues trading',
                  'Jobs are preserved',
                  'Better returns for creditors',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <CheckCircle size={18} color="#333333" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#383838', fontSize: 15 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CTA Section */}
      <section style={{ backgroundColor: '#111111', padding: '64px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: 38, fontWeight: 700, color: '#FFFFFF', marginBottom: 16, lineHeight: 1.25 }}>
            Have Questions About Voluntary Administration?
          </h2>
          <p style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.6,
            marginBottom: 32,
            maxWidth: 640,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Time is critical in financial distress situations. Our experienced team can help you understand your options and guide you through the process.
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
            Get Free Assessment →
          </a>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '48px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111111', marginBottom: 24 }}>
            Related Services
          </h2>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/services/small-business-restructure/" style={{ backgroundColor: '#f5f5f5', borderRadius: 8, padding: '14px 20px', fontSize: 15, fontWeight: 600, color: '#111111', textDecoration: 'none' }}>
              Small Business Restructure &rarr;
            </a>
            <a href="/services/creditors-voluntary-liquidation/" style={{ backgroundColor: '#f5f5f5', borderRadius: 8, padding: '14px 20px', fontSize: 15, fontWeight: 600, color: '#111111', textDecoration: 'none' }}>
              Creditors Voluntary Liquidation &rarr;
            </a>
            <a href="/reduce-debt/" style={{ backgroundColor: '#f5f5f5', borderRadius: 8, padding: '14px 20px', fontSize: 15, fontWeight: 600, color: '#111111', textDecoration: 'none' }}>
              Reduce Business Debt &rarr;
            </a>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  )
}
