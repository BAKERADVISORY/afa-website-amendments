export function CTABanner() {
  return (
    <section style={{ backgroundColor: '#17243B', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Watermark */}
      <div style={{ position: 'absolute', fontSize: 300, color: 'rgba(255,255,255,0.03)', fontWeight: 900, right: -100, top: '50%', transform: 'translateY(-50%)', userSelect: 'none', letterSpacing: -10, lineHeight: 1, pointerEvents: 'none' }}>WA</div>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 42, fontWeight: 700, color: '#FFFFFF', marginBottom: 20, lineHeight: 1.25 }}>
          Ready to Protect Your Business Future?
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          Don&apos;t let business challenges overwhelm you. Get expert guidance and strategic solutions tailored to your specific situation.
        </p>
        <a href="#contact" style={{ backgroundColor: '#0C9488', color: '#FFFFFF', borderRadius: 50, padding: '14px 32px', fontSize: 16, fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
          Schedule Free Consultation →
        </a>
      </div>
    </section>
  )
}
