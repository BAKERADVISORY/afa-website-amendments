import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Close a Company with Debt | Professional Company Closure Gold Coast',
  description:
    'Close your company correctly and protect yourself from personal liability. Australian Financial Advisory provides professional company closure services for directors across Gold Coast QLD and Australia. Creditors voluntary liquidation, deregistration, asset realisation.',
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/close-company/',
  },
  openGraph: {
    title: 'Close a Company with Debt | Professional Company Closure Gold Coast',
    description:
      'Professional company closure services protecting directors from personal liability. Serving Gold Coast QLD and Australia-wide.',
    url: 'https://www.ausfinancialadvisory.com.au/close-company/',
  },
}
import { CTABanner } from '@/components/CTABanner'
import { Footer } from '@/components/Footer'
import { Scale, FileSearch, Trash2, ShieldCheck, AlertTriangle, CheckCircle } from 'lucide-react'

function PlaceholderImage({ height = 400, label = 'Image' }: { height?: number; label?: string }) {
  return (
    <div style={{
      width: '100%', height, backgroundColor: '#D1D5DB', borderRadius: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#9CA3AF', fontSize: 14, fontWeight: 500
    }}>{label}</div>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div style={{ backgroundColor: '#EBF3F8', borderRadius: 12, padding: 28 }}>
      <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#0C9488', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#17243B', marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 15, color: '#555', lineHeight: 1.6 }}>{description}</p>
    </div>
  )
}

export default function CloseCompanyPage() {
  const bullets = [
    'Minimise personal liability exposure',
    'Ensure regulatory compliance',
    'Professional handling of creditor communications',
    'Complete documentation and filing',
  ]

  return (
    <>
      <NavBar />
      <main>

      {/* Hero Section */}
      <section style={{
        backgroundColor: '#17243B',
        paddingTop: 160,
        paddingBottom: 80,
        paddingLeft: 80,
        paddingRight: 80,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#0C9488', textTransform: 'uppercase', marginBottom: 16 }}>
            CLOSE COMPANY
          </p>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: 20, maxWidth: 700 }}>
            Professional Company Closure
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 640, lineHeight: 1.6, marginBottom: 32 }}>
            When it&apos;s time to close your business, ensure it&apos;s done properly. Our expert team handles every aspect of company closure to protect you from future liabilities.
          </p>
          <a
            href="/contact/"
            style={{
              backgroundColor: '#0C9488',
              color: '#FFFFFF',
              borderRadius: 50,
              padding: '14px 28px',
              fontSize: 16,
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Get Closure Consultation &rarr;
          </a>
        </div>
        {/* Wave */}
        <div style={{ position: 'absolute', bottom: -1, left: '-35%', width: '171%', height: 100 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#383838', textAlign: 'center', marginBottom: 12 }}>
            Complete Closure Services
          </h2>
          <p style={{ fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 48, lineHeight: 1.6 }}>
            Comprehensive company closure solutions ensuring legal and regulatory compliance
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <ServiceCard
              icon={<Scale size={22} color="#FFFFFF" />}
              title="Legal Compliance"
              description="We assist with legal requirements so they are met during the company closure process to help avoid future liabilities."
            />
            <ServiceCard
              icon={<FileSearch size={22} color="#FFFFFF" />}
              title="Asset Valuation"
              description="We help with company assets being properly assessed and valued by a registered independent valuer."
            />
            <ServiceCard
              icon={<Trash2 size={22} color="#FFFFFF" />}
              title="Complete Dissolution"
              description="Handle all aspects of company dissolution including regulatory filings and final reporting."
            />
            <ServiceCard
              icon={<ShieldCheck size={22} color="#FFFFFF" />}
              title="Liability Protection"
              description="Protect directors and shareholders from personal liability through proper closure procedures."
            />
          </div>
        </div>
      </section>

      {/* Why Professional Closure Matters Section */}
      <section style={{ backgroundColor: '#17243B', padding: '80px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            {/* Left text */}
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#0C9488', textTransform: 'uppercase', marginBottom: 16 }}>
                WHY IT MATTERS
              </p>
              <h2 style={{ fontSize: 38, fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginBottom: 20 }}>
                Why Professional Closure Matters
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 32 }}>
                Improper company closure can leave you exposed to ongoing liabilities, tax issues, and regulatory problems. Our professional approach helps minimise risk and ensures the process is handled correctly and in line with all legal obligations.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {bullets.map((bullet) => (
                  <li key={bullet} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <CheckCircle size={20} color="#0C9488" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact/"
                style={{
                  backgroundColor: '#0C9488',
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
            {/* Right placeholder */}
            <div>
              <PlaceholderImage height={420} label="Company Closure" />
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ backgroundColor: '#FFF4EF', borderRadius: 12, padding: 48, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <AlertTriangle size={32} color="#F59E0B" />
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#383838', marginBottom: 8 }}>
              Important Notice
            </h2>
            <p style={{ fontSize: 15, fontWeight: 700, color: '#555', marginBottom: 20 }}>
              Directors&apos; Penalty Notice
            </p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginBottom: 32, maxWidth: 700, margin: '0 auto 32px auto' }}>
              Directors can be held personally liable for unpaid taxes and employee entitlements if company closure is not handled properly. Don&apos;t risk your personal assets &mdash; let our experts handle your company closure with the care and attention it deserves.
            </p>
            <a
              href="/contact/"
              style={{
                backgroundColor: '#0C9488',
                color: '#FFFFFF',
                borderRadius: 50,
                padding: '14px 28px',
                fontSize: 16,
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Get Expert Help &rarr;
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
