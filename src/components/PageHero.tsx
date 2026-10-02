import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Breadcrumbs } from './Breadcrumbs'
import { SectionLabel } from './SectionLabel'
import type { BreadcrumbItem } from '@/lib/site'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  intro: string
  breadcrumbs?: BreadcrumbItem[]
  cta?: { label: string; href: string }
  watermark?: string
  wave?: boolean
}

/** Navy page hero shared by every inner page. The watermark is decorative and hidden from assistive technology. */
export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  cta = { label: 'Book a free initial consultation', href: '#contact' },
  watermark,
  wave = false,
}: PageHeroProps) {
  return (
    <section
      className="svc-hero"
      style={{
        backgroundColor: '#1a1a3e',
        padding: '100px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {watermark && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            fontSize: 180,
            fontWeight: 900,
            color: 'rgba(255,255,255,0.03)',
            right: -40,
            top: '50%',
            transform: 'translateY(-50%)',
            userSelect: 'none',
            lineHeight: 1,
            pointerEvents: 'none',
            letterSpacing: -4,
          }}
        >
          {watermark}
        </div>
      )}
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} tone="dark" />}
        <SectionLabel text={eyebrow} light />
        <h1
          className="mobile-hero-title"
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.7,
            maxWidth: 680,
            marginBottom: 36,
          }}
        >
          {intro}
        </p>
        <a
          href={cta.href}
          className="mobile-full-button afa-button-light"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: '#ffffff',
            color: '#1a1a3e',
            borderRadius: 50,
            padding: '14px 28px',
            fontSize: 15,
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          {cta.label}
          <ChevronRight size={16} aria-hidden="true" />
        </a>
      </div>
      {wave && (
        <div
          aria-hidden="true"
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
            focusable="false"
          >
            <path
              d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      )}
    </section>
  )
}
