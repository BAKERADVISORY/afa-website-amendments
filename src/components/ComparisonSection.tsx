import { X } from 'lucide-react'

interface FeatureRow {
  feature: string
  ourValue: string
  traditionalValue: string
}

const featureRows: FeatureRow[] = [
  {
    feature: 'Who they work for',
    ourValue: 'You (the business owner/director)',
    traditionalValue: 'Acts in best interest of Creditors',
  },
  {
    feature: 'When they get involved',
    ourValue: 'Before a formal insolvency process begins',
    traditionalValue: 'After a formal insolvency appointment',
  },
  {
    feature: 'Type of advice',
    ourValue: 'Strategic, proactive, and tailored to your situation',
    traditionalValue: 'Formal and process-driven',
  },
  {
    feature: 'Goal',
    ourValue: 'To protect and prepare you',
    traditionalValue: "To administer the process in creditors' best interests",
  },
  {
    feature: 'Scope',
    ourValue: 'Advice, preparation, negotiation, documentation',
    traditionalValue: 'Legally bound to follow specific insolvency procedures',
  },
  {
    feature: 'Cost predictability',
    ourValue: 'Fixed-fee known in advance',
    traditionalValue: 'Costs drawn from company assets and time',
  },
]

export function ComparisonSection() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
      {/* Header */}
      <div
        style={{ textAlign: 'center', marginBottom: '48px', padding: '0 32px' }}
      >
        <p
          style={{
            fontSize: 12,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#333333',
            textAlign: 'center',
            marginBottom: 12,
          }}
        >
          australian financial advisory
        </p>
        <h2
          style={{
            fontSize: 38,
            fontWeight: 700,
            color: '#1a1a3e',
            textAlign: 'center',
            margin: '0 0 16px 0',
          }}
        >
          Why engage <span style={{ color: '#9b8ec4' }}>with us?</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: '#666',
            textAlign: 'center',
            marginBottom: 0,
          }}
        >
          See how Australian Financial Advisory&apos;s pre-insolvency approach
          compares to traditional insolvency firms
        </p>
      </div>

      {/* Table card */}
      <div
        style={{
          border: '1px solid #E5E7EB',
          borderRadius: 16,
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* Header row */}
        <div
          style={{
            backgroundColor: '#1a1a3e',
            padding: '16px 24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 15 }}>
            Feature / Focus
          </span>
          <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 15 }}>
            Australian Financial Advisory{' '}
            <span style={{ color: '#cccccc' }}>VS</span> (Pre-Insolvency)
          </span>
          <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 15 }}>
            Traditional Insolvency Firm
          </span>
        </div>

        {/* Feature rows */}
        {featureRows.map((row, index) => (
          <div
            key={row.feature}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              padding: '20px 24px',
              borderBottom: '1px solid #F0F0F0',
              alignItems: 'start',
              backgroundColor: index % 2 === 1 ? '#FAFAFA' : '#FFFFFF',
            }}
          >
            {/* Col 1: Feature name */}
            <div style={{ fontWeight: 600, color: '#1a1a3e', fontSize: 15 }}>
              {row.feature}
            </div>

            {/* Col 2: AFA */}
            <div>
              <div style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>
                Australian Financial Advisory
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <span
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.07)',
                    color: '#333333',
                    borderRadius: 4,
                    padding: '1px 5px',
                    fontSize: 11,
                    fontWeight: 700,
                    marginRight: 6,
                  }}
                >
                  afa
                </span>
                <span style={{ color: '#333333', fontSize: 14 }}>
                  {row.ourValue}
                </span>
              </div>
            </div>

            {/* Col 3: Traditional */}
            <div>
              <div style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>
                Traditional Insolvency Firm
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <X size={16} color="#EF4444" style={{ flexShrink: 0 }} />
                <span style={{ color: '#666', fontSize: 14 }}>
                  {row.traditionalValue}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Key Difference row */}
        <div
          style={{
            backgroundColor: '#f8f8ff',
            padding: 24,
            borderRadius: '0 0 16px 16px',
            display: 'flex',
            gap: 24,
            alignItems: 'flex-start',
            borderTop: '3px solid #9b8ec4',
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: '#1a1a3e',
              fontSize: 18,
              whiteSpace: 'nowrap',
            }}
          >
            The Key Difference
          </div>
          <div style={{ fontSize: 15, color: '#444', lineHeight: 1.6 }}>
            Traditional insolvency firms are appointed after your business has
            failed and work for creditors. Australian Financial Advisory works
            before formal insolvency processes begin, representing your
            interests as the business owner to help you navigate challenges and
            protect your position.
          </div>
        </div>
      </div>
    </section>
  )
}
