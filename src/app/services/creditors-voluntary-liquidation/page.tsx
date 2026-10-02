import type { Metadata } from 'next'
import {
  AlertCircle,
  TrendingDown,
  ShieldCheck,
  CheckCircle,
  ChevronRight,
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
import { absUrl, webPageSchema, type FaqItem } from '@/lib/site'

const PATH = '/services/creditors-voluntary-liquidation'
const title = 'Creditors Voluntary Liquidation Explained'
const description =
  'When a creditors voluntary liquidation is used, how the process runs, and what directors need to know before a registered liquidator is appointed. General information from an assessment-and-referral advisory.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absUrl(PATH) },
  openGraph: { title: `${title} | AFA`, description, url: absUrl(PATH) },
}

const faqItems: FaqItem[] = [
  {
    question: 'Who carries out a creditors voluntary liquidation?',
    answer:
      'A registered liquidator. Australian Financial Advisory is not a registered liquidator and does not accept appointments. We explain the process and introduce a registered liquidator from our network.',
  },
  {
    question: 'Does liquidation end a Director Penalty Notice liability?',
    answer:
      'Not always. For a non-lockdown DPN, commencing liquidation within the 21-day window is one of the ways the penalty can be dealt with. Liquidation does not remove personal liability for a lockdown DPN.',
  },
  {
    question: 'Do you charge for the first conversation?',
    answer: 'No, the initial consultation is free.',
  },
]

const whenUsed = [
  {
    Icon: AlertCircle,
    title: 'Insolvency',
    desc: 'The company cannot pay its debts as they fall due, or its liabilities exceed its assets.',
  },
  {
    Icon: TrendingDown,
    title: 'No viable future',
    desc: 'The business has no reasonable prospect of returning to profitability.',
  },
  {
    Icon: ShieldCheck,
    title: 'Director decision',
    desc: 'The directors recognise the need for an orderly wind-up to minimise further losses.',
  },
]

const steps = [
  {
    num: 1,
    title: 'Initial assessment',
    desc: 'The company’s financial position is reviewed and the suitability of a CVL considered.',
  },
  {
    num: 2,
    title: 'Director and member resolutions',
    desc: 'The directors and members resolve to wind up the company and appoint a registered liquidator.',
  },
  {
    num: 3,
    title: 'Creditors informed',
    desc: 'Creditors are notified and may confirm the appointment or nominate an alternative liquidator.',
  },
  {
    num: 4,
    title: 'Asset realisation and investigation',
    desc: 'The liquidator realises the company’s assets and investigates its affairs, including the conduct of directors.',
  },
  {
    num: 5,
    title: 'Distribution',
    desc: 'Available funds are distributed to creditors in the order the law sets out.',
  },
  {
    num: 6,
    title: 'Deregistration',
    desc: 'The company is deregistered and removed from ASIC’s records.',
  },
]

const designedTo = [
  'An orderly wind-up of the company’s affairs',
  'A registered liquidator deals with creditors on the company’s behalf',
  'Legal requirements of the wind-up handled by the liquidator',
  'An end to further trading losses',
  'A clear, documented record of what happened',
]

export default function CreditorsVoluntaryLiquidationPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: title,
          description,
          about: 'Creditors voluntary liquidation (Australia)',
        })}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="Formal process explained"
          title="Creditors voluntary liquidation explained"
          intro="A creditors voluntary liquidation (CVL) is a formal process to wind up an insolvent company in an orderly way. The directors and members resolve to wind up the company and appoint a registered liquidator, who realises the assets, investigates the company’s affairs and distributes available funds to creditors. Australian Financial Advisory explains the process and refers you to a liquidator."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Your options explained', href: '/services' },
            { name: 'Creditors voluntary liquidation' },
          ]}
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
              'A CVL winds up an insolvent company through a registered liquidator appointed by the company itself, rather than by the court on a creditor’s application.',
              'The liquidator realises assets, investigates the company’s affairs and distributes available funds to creditors in the order the law sets out.',
              'Australian Financial Advisory explains what the process means for you, sets out the options in writing, and introduces a registered liquidator. We do not act as the liquidator.',
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
          id="section-when"
          label="When it is used"
          heading="When is a creditors voluntary liquidation used?"
          tone="panel"
          maxWidth={1100}
        >
          <p style={{ ...bodyText, maxWidth: 700 }}>
            A CVL is used when a company is insolvent and cannot continue
            trading viably.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
            className="cvl-three-col"
          >
            {whenUsed.map(({ Icon, title: cardHeading, desc }) => (
              <div
                key={cardHeading}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 12,
                  padding: 28,
                }}
              >
                <Icon
                  size={28}
                  color="#6E3E8F"
                  aria-hidden="true"
                  style={{ marginBottom: 14 }}
                />
                <h3 style={cardTitle}>{cardHeading}</h3>
                <p style={cardBody}>{desc}</p>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection
          id="section-process"
          label="The process"
          heading="How a creditors voluntary liquidation runs"
        >
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              maxWidth: 600,
            }}
          >
            {steps.map((step, index, arr) => (
              <li key={step.num}>
                <div
                  style={{
                    display: 'flex',
                    gap: 20,
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      backgroundColor: '#1a1a3e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: 18,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </div>
                  <div style={{ paddingTop: 8 }}>
                    <h3 style={{ ...cardTitle, fontSize: 18, marginBottom: 6 }}>
                      {step.title}
                    </h3>
                    <p style={{ ...cardBody, fontSize: 15 }}>{step.desc}</p>
                  </div>
                </div>
                {index < arr.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      width: 2,
                      height: 40,
                      backgroundColor: 'rgba(26,26,62,0.2)',
                      marginLeft: 21,
                      marginTop: 4,
                      marginBottom: 4,
                    }}
                  />
                )}
              </li>
            ))}
          </ol>
        </ContentSection>

        <ContentSection
          id="section-designed-to"
          label="What it provides"
          heading="What a creditors voluntary liquidation is designed to do"
          tone="panel"
        >
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {designedTo.map((item) => (
              <li
                key={item}
                style={{ display: 'flex', alignItems: 'center', gap: 12 }}
              >
                <CheckCircle
                  size={20}
                  color="#6E3E8F"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                />
                <span style={{ color: '#383838', fontSize: 16 }}>{item}</span>
              </li>
            ))}
          </ul>
        </ContentSection>

        <section
          aria-labelledby="duties-heading"
          style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
            <div
              style={{
                backgroundColor: '#FFF4EF',
                borderRadius: 12,
                padding: 40,
              }}
            >
              <p
                style={{
                  color: '#666666',
                  textTransform: 'uppercase',
                  fontSize: 12,
                  letterSpacing: 3,
                  fontWeight: 600,
                  marginBottom: 10,
                }}
              >
                Insolvent trading
              </p>
              <h2
                id="duties-heading"
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#1a1a3e',
                  marginBottom: 16,
                  lineHeight: 1.3,
                }}
              >
                Director responsibilities
              </h2>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                Directors have a duty to prevent insolvent trading. Once a
                company becomes insolvent, continuing to trade can result in
                personal liability for directors for debts incurred during that
                period. Taking advice early helps a director understand this
                risk and the duties under the Corporations Act.
              </p>
            </div>
          </div>
        </section>

        <CanCannot
          can={[
            'Explain what a creditors voluntary liquidation would mean for you and your company.',
            'Set out liquidation alongside the other options in writing.',
            'Introduce a registered liquidator from our network.',
          ]}
          cannot={[
            'Act as the liquidator or accept any appointment.',
            'Determine whether the company is solvent or insolvent. We can prepare a cash-flow projection from your figures.',
            'Give legal advice or promise a particular outcome.',
          ]}
        />

        <ContentSection id="section-faq" label="Common questions" heading="Creditors voluntary liquidation questions">
          <FaqList items={faqItems} alwaysOpen />
        </ContentSection>

        <RelatedLinks
          links={[
            {
              label: 'Voluntary administration explained',
              href: '/services/voluntary-administration',
            },
            {
              label: 'Small Business Restructuring explained',
              href: '/services/small-business-restructure',
            },
            { label: 'Close or wind up a company', href: '/close-company' },
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
        @media (max-width: 900px) {
          .cvl-three-col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          .svc-hero { padding: 40px 0 !important; }
        }
      `}</style>
    </>
  )
}
