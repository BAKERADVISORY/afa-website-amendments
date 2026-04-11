const logos = [
  { src: '/images/partners/myob.jpeg', alt: 'MYOB accounting software' },
  { src: '/images/partners/ca-logo.jpg', alt: 'Chartered Accountants Australia and New Zealand' },
  { src: '/images/partners/certified-consultant.jpg', alt: 'Certified Consulting Professional' },
  { src: '/images/partners/cpa.jpg', alt: 'CPA Australia' },
  { src: '/images/partners/xero.png', alt: 'Xero accounting software' },
  { src: '/images/partners/qb.png', alt: 'QuickBooks accounting software' },
  { src: '/images/partners/tpa-logo.png', alt: 'Tax Practitioners Board registered' },
  { src: '/images/partners/zohologo.png', alt: 'Zoho business software' },
]

export function PartnerLogos() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '48px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', width: 'fit-content' }} className="animate-marquee">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            style={{ height: 48, width: 'auto', objectFit: 'contain', margin: '0 40px', filter: 'grayscale(100%)', opacity: 0.6 }}
          />
        ))}
      </div>
    </section>
  )
}
