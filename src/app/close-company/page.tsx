import type { Metadata } from 'next'
import {
  ChevronRight,
  Building,
  Scale,
  FileSearch,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { PageHero } from '@/components/PageHero'
import {
  ContentSection,
  bodyText,
  cardBody,
  cardTitle,
} from '@/components/ContentSection'
import { CanCannot } from '@/components/CanCannot'
import { FaqList } from '@/components/FaqList'
import { RelatedLinks } from '@/components/RelatedLinks'
import { PageDisclaimer } from '@/components/PageDisclaimer'
import { ConsultationCTA } from '@/components/ConsultationCTA'
import { JsonLd } from '@/components/JsonLd'
import { absUrl, serviceSchema, type FaqItem } from '@/lib/site'

const PATH = '/close-company'
const title = 'Close or Wind Up a Company with Debt'
const description =
  'How a company is closed or wound up in Australia: solvent and insolvent paths, director duties, and where to start. General information and a free initial consultation.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absUrl(PATH) },
  openGraph: { title: `${title} | AFA`, description, url: absUrl(PATH) },
}

const faqItems: FaqItem[] = [
  {
    question: 'Can I just stop trading and walk away from the company?',
    answer:
      'A company continues to exist, with its directors’ duties and its debts, until it is deregistered or wound up. Stopping trading does not by itself end those obligations. Understanding the correct path before you act is the point of the first conversation.',
  },
  {
    question: 'Does Australian Financial Advisory close the company for me?',
    answer:
      'No. Deregistration is an ASIC process and a liquidation is carried out by a registered liquidator. We assess your position, explain which path applies, set out the options in writing, and introduce a registered liquidator where one is required.',
  },
  {
    question: 'Do you charge for the first conversation?',
    answer: 'No, the initial consultation is free.',
  },
]

const paths = [
  {
    icon: Building,
    title: 'Deregistration (solvent, no debts)',
    body: 'A company that has stopped trading and has no outstanding liabilities may be able to apply to ASIC for voluntary deregistration, provided it meets ASIC’s requirements.',
  },
  {
    icon: Scale,
    title: 'Members voluntary liquidation (solvent)',
    body: 'A solvent company can be wound up by its members. A registered liquidator is appointed to realise the assets, pay any remaining creditors and distribute the balance to members.',
  },
  {
    icon: FileSearch,
    title: 'Creditors voluntary liquidation (insolvent)',
    body: 'An insolvent company is wound up through a registered liquidator, who realises the assets, investigates the company’s affairs and distributes available funds to creditors in the order the law sets out.',
  },
  {
    icon: ShieldCheck,
    title: 'Director duties',
    body: 'Directors have a duty to prevent insolvent trading. Certain unpaid company tax debts can become a director’s personal liability through a Director Penalty Notice.',
  },
]

const whyItMatters = [
  'Understand which closure path applies to your company',
  'Understand your duties as a director before you act',
  'Understand what a registered liquidator does and when one is required',
  'Receive the options in writing before any formal step',
]

export default function CloseCompanyPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          path: PATH,
          name: 'Company closure options assessment and referral',
          description:
            'An assessment of whether a company can be deregistered or must be wound up, with director duties and the available paths set out in writing and referral to a registered liquidator where one is required.',
        })}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="Closing a company"
          title="Closing or winding up a company: understand the paths."
          intro="How a company is closed depends on whether it can pay its debts. A solvent company may be deregistered or wound up by its members. An insolvent company is wound up through a registered liquidator. We help directors understand which path applies and what their duties are."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Close or wind up a company' },
          ]}
          watermark="CLOSE"
          wave
        />

        <ContentSection id="section-in-short" label="In short" heading="The short answer">
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            {[
              'Solvent companies with no debts may apply to ASIC for deregistration, or be wound up by their members with a registered liquidator appointed.',
              'Insolvent companies are wound up through a creditors voluntary liquidation, carried out by a registered liquidator.',
              'Australian Financial Advisory assesses which path applies, explains your duties, sets out the options in writing, and introduces a registered liquidator where one is required. We do not carry out the closure ourselves.',
            ].map((line) => (
              <li
                key={line}
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  fontSize: 16,
                  color: '#444444',
                  lineHeight: 1.7,
                }}
              >
                <ChevronRight
                  size={18}
                  color="#6E3E8F"
                  aria-hidden="true"
                  style={{ flexShrink: 0, marginTop: 4 }}
                />
                {line}
              </li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection
          id="section-paths"
          label="The paths"
          heading="Ways a company can be closed"
          tone="panel"
          maxWidth={1100}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 24,
            }}
            className="cc-two-col"
          >
            {paths.map(({ icon: Icon, title: cardHeading, body }) => (
              <div
                key={cardHeading}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 12,
                  padding: 28,
                  borderTop: '3px solid #9b8ec4',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#1a1a3e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <Icon size={22} color="#FFFFFF" />
                </div>
                <h3 style={cardTitle}>{cardHeading}</h3>
                <p style={cardBody}>{body}</p>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection
          id="section-why"
          label="Why it matters"
          heading="Why closing a company properly matters"
          tone="navy"
        >
          <p style={{ ...bodyText, color: '#DEDCEC' }}>
            Improper closure can leave a director exposed to ongoing
            liabilities, tax issues and regulatory problems. Understanding the
            correct path, and your obligations, before you act is the point of
            the first conversation.
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 8px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            {whyItMatters.map((bullet) => (
              <li
                key={bullet}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                }}
              >
                <CheckCircle
                  size={20}
                  color="#9b8ec4"
                  aria-hidden="true"
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <span
                  style={{ fontSize: 15, color: '#ffffff', lineHeight: 1.5 }}
                >
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </ContentSection>

        <section
          aria-labelledby="notice-heading"
          style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <div
              style={{
                backgroundColor: '#FFF4EF',
                borderRadius: 12,
                padding: 40,
                textAlign: 'center',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <AlertTriangle size={32} color="#B45309" />
              </div>
              <h2
                id="notice-heading"
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: '#383838',
                  marginBottom: 16,
                }}
              >
                Director Penalty Notices and company closure
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: '#444444',
                  lineHeight: 1.7,
                  maxWidth: 700,
                  margin: '0 auto',
                }}
              >
                A Director Penalty Notice can make a director personally liable
                for certain unpaid company tax debts, and closing the company
                does not always remove that liability. Getting advice early
                matters.
              </p>
            </div>
          </div>
        </section>

        <CanCannot
          can={[
            'Assess whether your company can be deregistered or must be wound up.',
            'Explain your duties as a director and what a liquidator does.',
            'Set out the options and recommended next steps in writing.',
            'Introduce a registered liquidator from our network where one is required.',
          ]}
          cannot={[
            'Deregister the company or act as its liquidator.',
            'Give legal or tax advice. Those matters are referred to appropriately licensed professionals.',
            'Promise a particular outcome. Outcomes vary case by case.',
          ]}
        />

        <ContentSection id="section-faq" label="Common questions" heading="Company closure questions">
          <FaqList items={faqItems} alwaysOpen />
        </ContentSection>

        <RelatedLinks
          links={[
            {
              label: 'Creditors voluntary liquidation explained',
              href: '/services/creditors-voluntary-liquidation',
            },
            {
              label: 'Administration and liquidation options',
              href: '/administration-and-liquidation',
            },
            {
              label: 'Director Penalty Notice',
              href: '/director-penalty-notice',
            },
          ]}
        />

        <PageDisclaimer />
        <ConsultationCTA />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 767px) {
          .svc-hero { padding: 40px 0 !important; }
          .cc-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
