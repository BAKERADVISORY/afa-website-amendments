import type { ReactNode } from 'react'
import { SectionLabel } from './SectionLabel'

interface ContentSectionProps {
  id: string
  label?: string
  heading: string
  tone?: 'white' | 'panel' | 'navy'
  maxWidth?: number
  children: ReactNode
}

/** Labelled content section with a consistent heading and background. */
export function ContentSection({
  id,
  label,
  heading,
  tone = 'white',
  maxWidth = 900,
  children,
}: ContentSectionProps) {
  const background =
    tone === 'navy' ? '#1a1a3e' : tone === 'panel' ? '#f8f8ff' : '#ffffff'
  const headingColor = tone === 'navy' ? '#ffffff' : '#1a1a3e'

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      style={{ backgroundColor: background, padding: '80px 0' }}
    >
      <div style={{ maxWidth, margin: '0 auto', padding: '0 32px' }}>
        {label && <SectionLabel text={label} light={tone === 'navy'} />}
        <h2
          id={`${id}-heading`}
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: headingColor,
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          {heading}
        </h2>
        {children}
      </div>
    </section>
  )
}

export const bodyText: React.CSSProperties = {
  fontSize: 16,
  color: '#444444',
  lineHeight: 1.75,
  marginBottom: 20,
}

export const bodyTextLight: React.CSSProperties = {
  fontSize: 16,
  color: '#DEDCEC',
  lineHeight: 1.75,
  marginBottom: 20,
}

export const calloutBox: React.CSSProperties = {
  backgroundColor: '#f8f8ff',
  borderRadius: 10,
  padding: '20px 24px',
  borderLeft: '4px solid #9b8ec4',
}

export const cardStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: 10,
  padding: '24px 28px',
  borderTop: '3px solid #9b8ec4',
}

export const cardTitle: React.CSSProperties = {
  fontSize: 17,
  fontWeight: 700,
  color: '#1a1a3e',
  marginBottom: 10,
}

export const cardBody: React.CSSProperties = {
  fontSize: 14,
  color: '#444444',
  lineHeight: 1.65,
  margin: 0,
}
