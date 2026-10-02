interface SectionLabelProps {
  text: string
  light?: boolean
  align?: 'left' | 'center'
}

/** Eyebrow label. Colours meet WCAG AA on their intended backgrounds (#DEDCEC on #1a1a3e, #666666 on white). */
export function SectionLabel({
  text,
  light = false,
  align = 'left',
}: SectionLabelProps) {
  return (
    <p
      style={{
        fontSize: 12,
        letterSpacing: 3,
        textTransform: 'uppercase',
        fontWeight: 600,
        color: light ? '#DEDCEC' : '#666666',
        marginBottom: 12,
        textAlign: align,
      }}
    >
      {text}
    </p>
  )
}
