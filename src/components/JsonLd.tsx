interface JsonLdProps {
  data: unknown
}

/** Renders a JSON-LD block. The `<` escape prevents script-breakout in serialised strings. */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
