import { CONTENT_UPDATED_DISPLAY, GENERAL_INFORMATION_LINE } from '@/lib/site'

/** General-information boundary plus a visible content-updated marker for YMYL pages. */
export function PageDisclaimer() {
  return (
    <section
      aria-label="General information notice"
      style={{ backgroundColor: '#ffffff', padding: '24px 0' }}
    >
      <p
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: '0 32px',
          fontSize: 13,
          color: '#555555',
          lineHeight: 1.7,
          textAlign: 'center',
        }}
      >
        {GENERAL_INFORMATION_LINE}
      </p>
      <p
        style={{
          maxWidth: 800,
          margin: '10px auto 0',
          padding: '0 32px',
          fontSize: 13,
          color: '#555555',
          textAlign: 'center',
        }}
      >
        Content last updated: {CONTENT_UPDATED_DISPLAY}.
      </p>
    </section>
  )
}
