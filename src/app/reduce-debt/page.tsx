import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Reduce Business Debt | Debt Negotiation for Company Directors Gold Coast',
  description:
    'Struggling with business debt? Our expert team negotiates with creditors, develops debt management plans and guides company directors through formal insolvency options. Gold Coast QLD and Australia-wide. Free debt assessment.',
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/reduce-debt/',
  },
  openGraph: {
    title: 'Reduce Business Debt | Debt Negotiation for Company Directors Gold Coast',
    description:
      'Expert debt negotiation and restructuring for company directors facing financial distress. Serving Gold Coast QLD and Australia.',
    url: 'https://www.ausfinancialadvisory.com.au/reduce-debt/',
  },
}
import { CTABanner } from '@/components/CTABanner'
import { Footer } from '@/components/Footer'
import { TrendingDown, ShieldCheck, BarChart3, BookOpen, CheckCircle, ArrowRight } from 'lucide-react'

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

const processSteps = [
  'Initial consultation and financial assessment',
  'Comprehensive debt analysis and strategy development',
  'Development of tailored debt management plan',
  'Appointment of registered practitioner when required',
  'Ongoing monitoring and support',
]

export default function ReduceDebtPage() {
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
            DEBT MANAGEMENT
          </p>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: 20, maxWidth: 700 }}>
            Reduce Your Business Debt
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 640, lineHeight: 1.6, marginBottom: 32 }}>
            Strategic debt management solutions to help your business regain financial stability and achieve sustainable growth without compromising your operations.
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
            Get Free Debt Assessment &rarr;
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
            Our Debt Reduction Services
          </h2>
          <p style={{ fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 48, lineHeight: 1.6 }}>
            Comprehensive debt management solutions tailored to your business needs
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <ServiceCard
              icon={<TrendingDown size={22} color="#FFFFFF" />}
              title="Debt Restructuring"
              description="Negotiate with creditors to reduce payment amounts and extend payment terms for better cash flow management."
            />
            <ServiceCard
              icon={<ShieldCheck size={22} color="#FFFFFF" />}
              title="Creditor Protection"
              description="Protect your business assets whilst working toward sustainable debt resolution strategies."
            />
            <ServiceCard
              icon={<BarChart3 size={22} color="#FFFFFF" />}
              title="Financial Analysis"
              description="Comprehensive review of your financial position to identify the best debt reduction strategies."
            />
            <ServiceCard
              icon={<BookOpen size={22} color="#FFFFFF" />}
              title="Insolvency Guidance"
              description="Expert guidance through formal insolvency processes, working closely with you to navigate the best pathway forward."
            />
          </div>
        </div>
      </section>

      {/* Our Proven Process Section */}
      <section style={{ backgroundColor: '#17243B', padding: '80px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#0C9488', textTransform: 'uppercase', marginBottom: 16, textAlign: 'center' }}>
            OUR PROCESS
          </p>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: '#FFFFFF', textAlign: 'center', marginBottom: 12 }}>
            Our Proven Process
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: 56 }}>
            A systematic approach to debt reduction that delivers results
          </p>
          <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {processSteps.map((step, index) => (
              <div key={step} style={{ display: 'flex', alignItems: 'flex-start', gap: 24, position: 'relative' }}>
                {/* Connector line (not after last) */}
                {index < processSteps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: 21,
                    top: 44,
                    width: 2,
                    height: 40,
                    backgroundColor: 'rgba(255,255,255,0.2)',
                  }} />
                )}
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  backgroundColor: '#0C9488',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#FFFFFF',
                  zIndex: 1,
                }}>
                  {index + 1}
                </div>
                <div style={{ paddingBottom: index < processSteps.length - 1 ? 40 : 0, paddingTop: 10 }}>
                  <p style={{ fontSize: 18, fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: 1.4 }}>
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insolvency Options Checker Section */}
      <section style={{ backgroundColor: '#EBF3F8', padding: '80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#0C9488', textTransform: 'uppercase', marginBottom: 16 }}>
            QUICK TOOL
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#383838', marginBottom: 24 }}>
            Insolvency Options Checker
          </h2>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.8, marginBottom: 36 }}>
            Unsure which path is right for your business? Our quick Insolvency Options Checker helps company directors understand the formal processes available when facing financial distress. By answering a few simple questions, you&apos;ll see whether Small Business Restructuring, Voluntary Administration, or Liquidation could be the most suitable option for your situation. It&apos;s free, takes only a couple of minutes, and gives you a clearer starting point before speaking with a professional.
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
            Insolvency Options Checker &rarr;
          </a>
        </div>
      </section>

      <CTABanner />
      </main>
      <Footer />
    </>
  )
}
