import type { Metadata } from 'next'
import {
  AlertTriangle,
  BadgeDollarSign,
  Building2,
  Shield,
  DoorClosed,
  ChevronRight,
  Layers,
  Users,
  Scale,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { PageHero } from '@/components/PageHero'
import { ContentSection, bodyText } from '@/components/ContentSection'
import { PageDisclaimer } from '@/components/PageDisclaimer'
import { ConsultationCTA } from '@/components/ConsultationCTA'
import { JsonLd } from '@/components/JsonLd'
import { absUrl, webPageSchema } from '@/lib/site'

const PATH = '/services'
const title = 'Your Options Explained'
const description =
  'Plain-language explanations of Director Penalty Notices, ATO debt options, Small Business Restructuring, voluntary administration and liquidation, and how Australian Financial Advisory assesses and refers.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absUrl(PATH) },
  openGraph: { title: `${title} | AFA`, description, url: absUrl(PATH) },
}

interface Card {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

const optionsPages: Card[] = [
  {
    icon: AlertTriangle,
    title: 'Director Penalty Notice',
    description:
      'What a DPN is, the 21-day window, lockdown versus non-lockdown notices, and the options still open.',
    href: '/director-penalty-notice',
  },
  {
    icon: BadgeDollarSign,
    title: 'ATO debt options',
    description:
      'Understanding an ATO debt position and the options that may be available, including payment arrangements through a registered tax agent.',
    href: '/reduce-debt',
  },
  {
    icon: Building2,
    title: 'Restructure your business',
    description:
      'Whether Small Business Restructuring, voluntary administration or an informal arrangement may suit your company.',
    href: '/restructure-your-business',
  },
  {
    icon: Shield,
    title: 'Administration and liquidation options',
    description:
      'What each formal process means for a director before committing to a path.',
    href: '/administration-and-liquidation',
  },
  {
    icon: DoorClosed,
    title: 'Close or wind up a company',
    description:
      'Solvent and insolvent closure paths, director duties, and where to start.',
    href: '/close-company',
  },
]

const explainers: Card[] = [
  {
    icon: Layers,
    title: 'Small Business Restructuring explained',
    description:
      'A formal process that lets an eligible small company put a plan to creditors while the directors stay in control. Run by a registered restructuring practitioner.',
    href: '/services/small-business-restructure',
  },
  {
    icon: Users,
    title: 'Voluntary administration explained',
    description:
      'An independent administrator takes control to assess the company’s position and options, with most creditor action paused.',
    href: '/services/voluntary-administration',
  },
  {
    icon: Scale,
    title: 'Creditors voluntary liquidation explained',
    description:
      'An orderly wind-up of an insolvent company by a registered liquidator, who realises assets and distributes available funds to creditors.',
    href: '/services/creditors-voluntary-liquidation',
  },
]

function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }}
      className="options-grid"
    >
      {cards.map(({ icon: Icon, title: cardTitle, description: cardDesc, href }) => (
        <li
          key={href}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 12,
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            borderTop: '3px solid #9b8ec4',
          }}
        >
          <Icon size={32} color="#6E3E8F" aria-hidden="true" />
          <h3
            style={{
              color: '#1a1a3e',
              fontSize: 19,
              fontWeight: 700,
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {cardTitle}
          </h3>
          <p style={{ color: '#444444', fontSize: 15, lineHeight: 1.65, margin: 0 }}>
            {cardDesc}
          </p>
          <a
            href={href}
            className="afa-crumb-link"
            style={{
              color: '#6E3E8F',
              fontSize: 15,
              fontWeight: 700,
              textDecoration: 'none',
              marginTop: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            Read more
            <ChevronRight size={16} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: title,
          description,
          about: 'Pre-insolvency options for Australian company directors',
        })}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="Your options"
          title="Your options explained"
          intro="Plain-language explanations of the formal processes directors ask about, and the pages that set out your options. Australian Financial Advisory assesses and refers. Licensed practitioners carry out formal work."
          breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Your options explained' }]}
          wave
        />

        <ContentSection
          id="section-options-pages"
          label="Where to start"
          heading="Options by situation"
          tone="panel"
          maxWidth={1200}
        >
          <p style={{ ...bodyText, maxWidth: 760, marginBottom: 36 }}>
            Start with the page that matches your situation. Each one explains
            what is happening, what options may exist, and what we can and
            cannot do.
          </p>
          <CardGrid cards={optionsPages} />
        </ContentSection>

        <ContentSection
          id="section-explainers"
          label="Formal processes"
          heading="Formal processes explained"
          maxWidth={1200}
        >
          <p style={{ ...bodyText, maxWidth: 760, marginBottom: 36 }}>
            These explainers describe the formal processes available under
            Australian law. They are general information. Each process is
            carried out by a registered practitioner, never by Australian
            Financial Advisory.
          </p>
          <div
            style={{
              backgroundColor: '#f8f8ff',
              borderRadius: 12,
              padding: 24,
            }}
          >
            <CardGrid cards={explainers} />
          </div>
        </ContentSection>

        <PageDisclaimer />
        <ConsultationCTA />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .options-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
