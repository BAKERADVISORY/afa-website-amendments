import { SectionLabel } from './SectionLabel'

interface TeamMemberProps {
  photo: string
  alt: string
  name: string
  role: string
  description: string
}

function TeamMember({ photo, alt, name, role, description }: TeamMemberProps) {
  return (
    <li
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo}
        alt={alt}
        width={120}
        height={120}
        loading="lazy"
        decoding="async"
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
        style={{ fontSize: 14, color: '#444444', lineHeight: 1.65, margin: 0 }}
      >
        {description}
      </p>
    </li>
  )
}

/** Names, roles and descriptions are the approved Instagram grid v1.2.0 copy (approved-copy.md). */
export const team: TeamMemberProps[] = [
  {
    photo: '/JB.jpg',
    alt: 'Jason Baker, Director of Australian Financial Advisory',
    name: 'Jason Baker',
    role: 'Director, Chartered Accountant',
    description: 'Reviews the numbers and signs the written advisory report.',
  },
  {
    photo: '/JMOY.jpg',
    alt: 'Jonathan Moy, Advisory and Negotiations at Australian Financial Advisory',
    name: 'Jonathan Moy',
    role: 'Advisory and Negotiations',
    description:
      'First point of contact. Handles intake, assessment and creditor negotiation.',
  },
]

export function TeamSection() {
  return (
    <section
      aria-labelledby="team-heading"
      style={{ backgroundColor: '#eeeeee', padding: '80px 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <SectionLabel text="The team" align="center" />
        <h2
          id="team-heading"
          style={{
            textAlign: 'center',
            fontSize: 38,
            fontWeight: 700,
            color: '#1a1a3e',
            marginBottom: 16,
          }}
        >
          A second set of eyes for directors under pressure
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#444444',
            maxWidth: 620,
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}
        >
          We assess where you stand, put the options in writing, and bring in
          a licensed specialist when the situation calls for one.
        </p>

        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 420px))',
            gap: 24,
            justifyContent: 'center',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
          className="team-grid mobile-card-center"
        >
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </ul>
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
