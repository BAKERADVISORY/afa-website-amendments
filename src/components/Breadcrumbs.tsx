import { JsonLd } from './JsonLd'
import { breadcrumbSchema, type BreadcrumbItem } from '@/lib/site'

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  tone?: 'dark' | 'light'
}

export function Breadcrumbs({ items, tone = 'dark' }: BreadcrumbsProps) {
  const linkColor = tone === 'dark' ? '#DEDCEC' : '#444444'
  const currentColor = tone === 'dark' ? '#ffffff' : '#1a1a3e'
  const separatorColor = tone === 'dark' ? 'rgba(222,220,236,0.6)' : '#888888'

  return (
    <>
      <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
        <ol
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            fontSize: 13,
          }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li
                key={`${item.name}-${index}`}
                style={{ display: 'flex', alignItems: 'center', gap: 6 }}
              >
                {item.href && !isLast ? (
                  <a
                    href={item.href}
                    className="afa-crumb-link"
                    style={{ color: linkColor, textDecoration: 'none' }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    style={{ color: currentColor, fontWeight: 600 }}
                  >
                    {item.name}
                  </span>
                )}
                {!isLast && (
                  <span aria-hidden="true" style={{ color: separatorColor }}>
                    /
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  )
}
