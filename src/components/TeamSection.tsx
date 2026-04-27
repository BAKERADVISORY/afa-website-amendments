interface TeamMemberProps {
  photo: string
  alt: string
  name: string
  role: string
  description: string
}

function TeamMember({ photo, alt, name, role, description }: TeamMemberProps) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: '32px 28px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        borderTop: '3px solid #1a1a3e',
      }}
    >
      {/* Photo */}
      <img
        src={photo}
        alt={alt}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'center top',
          border: '3px solid #9b8ec4',
          display: 'block',
          margin: '0 auto 16px',
        }}
      />

      <div>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#1a1a3e',
            margin: '0 0 4px',
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#333333',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          {role}
        </p>
      </div>

      <p
        style={{ fontSize: 14, color: '#555555', lineHeight: 1.65, margin: 0 }}
      >
        {description}
      </p>
    </div>
  )
}

const team: TeamMemberProps[] = [
  {
    photo: '/JB.jpg',
    alt: 'Jason Baker',
    name: 'Jason Baker',
    role: 'Chartered Accountant',
    description: '',
  },
  {
    photo: '/JMOY.jpg',
    alt: 'Jonathan Moy',
    name: 'Jonathan Moy',
    role: 'Advisory & Negotiations',
    description: '',
  },
]

export function TeamSection() {
  return (
    <section style={{ backgroundColor: '#eeeeee', padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <p
          style={{
            textAlign: 'center',
            fontSize: 12,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#333333',
            marginBottom: 12,
          }}
        >
          the team
        </p>
        <h2
          style={{
            textAlign: 'center',
            fontSize: 38,
            fontWeight: 700,
            color: '#1a1a3e',
            marginBottom: 16,
          }}
        >
          Experienced Advisers in Your Corner
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#666666',
            maxWidth: 620,
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}
        >
          Our team combines accounting, negotiation, and insolvency expertise —
          so you get the right advice at the right stage, without being pushed
          into a formal process prematurely.
        </p>

        {/* Team cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 420px))',
            gap: 24,
            justifyContent: 'center',
          }}
          className="team-grid"
        >
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
