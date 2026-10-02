interface RelatedLink {
  label: string
  href: string
}

interface RelatedLinksProps {
  heading?: string
  links: RelatedLink[]
}

export function RelatedLinks({
  heading = 'Related pages',
  links,
}: RelatedLinksProps) {
  return (
    <section
      aria-labelledby="related-heading"
      style={{ backgroundColor: '#ffffff', padding: '48px 0' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
        <h2
          id="related-heading"
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: '#1a1a3e',
            marginBottom: 20,
          }}
        >
          {heading}
        </h2>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="afa-chip-link"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#f8f8ff',
                  borderRadius: 8,
                  padding: '14px 20px',
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#1a1a3e',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
