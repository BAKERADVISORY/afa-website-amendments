import type { Metadata } from 'next'
import {
  ShieldCheck,
  Clock,
  Users,
  Scale,
  CheckCircle,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { PageHero } from '@/components/PageHero'
import {
  ContentSection,
  bodyText,
  bodyTextLight,
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

const PATH = '/services/voluntary-administration'
const title = 'Voluntary Administration Explained'
const description =
  'How voluntary administration works in Australia: the administrator’s role, creditor meetings, and possible outcomes including a Deed of Company Arrangement. General information from an assessment-and-referral advisory.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absUrl(PATH) },
  openGraph: { title: `${title} | AFA`, description, url: absUrl(PATH) },
}

const faqItems: FaqItem[] = [
  {
    question: 'Who can act as a voluntary administrator?',
    answer:
      'A registered liquidator. Australian Financial Advisory is not a registered liquidator and does not accept appointments. We explain the process and introduce a registered practitioner from our network.',
  },
  {
    question: 'Does voluntary administration stop all creditor action?',
    answer:
      'It pauses most creditor action while the administration runs, but there are exceptions set out in the Corporations Act. The administrator explains what applies to the company.',
  },
  {
    question: 'What are the possible outcomes?',
    answer:
      'At the second creditors’ meeting, creditors vote on whether the company enters a Deed of Company Arrangement, is returned to its directors, or is wound up.',
  },
]

const designedTo = [
  {
    Icon: ShieldCheck,
    title: 'Creditor protection',
    desc: 'Protection from most creditor actions and legal proceedings while the administration runs.',
  },
  {
    Icon: Clock,
    title: 'Time to assess',
    desc: 'Breathing space to properly evaluate the company’s options.',
  },
  {
    Icon: Users,
    title: 'Independent administrator',
    desc: 'A registered liquidator takes control to investigate the company’s affairs and report to creditors.',
  },
  {
    Icon: Scale,
    title: 'Creditor decision',
    desc: 'Creditors decide the outcome by vote at the second meeting.',
  },
]

const steps = [
  {
    num: 1,
    title: 'Appointment',
    desc: 'An administrator is appointed by the directors, a liquidator or a secured creditor.',
  },
  {
    num: 2,
    title: 'Investigation',
    desc: 'The administrator reviews the business, its affairs and the options.',
  },
  {
    num: 3,
    title: 'First creditors’ meeting',
    desc: 'Held within the statutory period after appointment.',
  },
  {
    num: 4,
    title: 'Second creditors’ meeting and decision',
    desc: 'Creditors vote on the company’s future at the second meeting, held within the statutory convening period.',
  },
]

export default function VoluntaryAdministrationPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: title,
          description,
          about: 'Voluntary administration (Australia)',
        })}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="Formal process explained"
          title="Voluntary administration explained"
          intro="Voluntary administration is a formal insolvency process in which an independent administrator, a registered liquidator, takes control of a company to assess its position and the options for its future. It is a step the directors can choose to take. Australian Financial Advisory explains the process and refers you to a practitioner."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Your options explained', href: '/services' },
            { name: 'Voluntary administration' },
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
              'Voluntary administration gives a financially distressed company breathing space while an independent administrator assesses its options.',
              'Most creditor action is paused during the administration. Creditors then vote on the outcome: a Deed of Company Arrangement, a return to the directors, or liquidation.',
              'Australian Financial Advisory explains what the process means for you and introduces a registered liquidator. We do not act as the administrator.',
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
          id="section-what-is-va"
          label="What is VA"
          heading="What is voluntary administration?"
          tone="panel"
        >
          <p style={bodyText}>
            Voluntary administration is a formal insolvency process designed to
            give a company breathing space to explore its options. It is often
            the first formal step when a company faces financial difficulty but
            may still be viable.
          </p>
          <p style={bodyText}>
            During the process, an independent administrator takes control of
            the company to investigate its affairs, assess its prospects, and
            report to creditors on the options.
          </p>
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
            {[
              'A defined statutory timeframe for the process',
              'Protection from most creditor legal action',
              'Independent professional oversight',
            ].map((item) => (
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

        <ContentSection
          id="section-objective"
          label="Key objective"
          heading="Breathing space to assess the company’s future"
          tone="navy"
        >
          <p style={{ ...bodyTextLight, marginBottom: 0 }}>
            The primary objective of a voluntary administration is to give a
            financially distressed company breathing room to assess its future
            and decide on the best path forward. By appointing an independent
            administrator, the company gains protection from most creditor
            action while a proposal is prepared for creditors. The aim is to
            maximise the chances of the company&apos;s survival or, if that is
            not viable, to achieve a better outcome for creditors than an
            immediate liquidation.
          </p>
        </ContentSection>

        <ContentSection
          id="section-designed-to"
          label="What it provides"
          heading="What the process is designed to provide"
          maxWidth={1100}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 24,
              maxWidth: 900,
            }}
            className="va-two-col"
          >
            {designedTo.map(({ Icon, title: cardHeading, desc }) => (
              <div
                key={cardHeading}
                style={{
                  backgroundColor: '#f8f8ff',
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
          heading="The administration process"
          tone="panel"
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
          id="section-outcomes"
          label="Outcomes"
          heading="Possible outcomes"
        >
          <p style={bodyText}>
            At the second creditors&apos; meeting, creditors vote on one of the
            following options for the company&apos;s future.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              marginBottom: 28,
            }}
          >
            {[
              'A Deed of Company Arrangement (DOCA)',
              'The company is returned to the control of its directors',
              'The company proceeds to liquidation',
            ].map((outcome) => (
              <div
                key={outcome}
                style={{ display: 'flex', alignItems: 'center', gap: 12 }}
              >
                <ArrowRight
                  size={20}
                  color="#6E3E8F"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                />
                <span style={{ color: '#383838', fontSize: 16 }}>{outcome}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              backgroundColor: '#f8f8ff',
              borderRadius: 12,
              padding: 32,
            }}
          >
            <h3 style={{ ...cardTitle, fontSize: 22, marginBottom: 12 }}>
              Deed of Company Arrangement
            </h3>
            <p style={{ ...bodyText, fontSize: 15 }}>
              A DOCA is a binding agreement between the company and its
              creditors that allows the company to continue operating while
              paying creditors according to the terms agreed in the deed.
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {[
                'The company may continue trading',
                'Creditors receive what the deed provides',
                'The terms are those creditors voted to accept',
              ].map((item) => (
                <li
                  key={item}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  <CheckCircle
                    size={18}
                    color="#6E3E8F"
                    aria-hidden="true"
                    style={{ flexShrink: 0 }}
                  />
                  <span style={{ color: '#383838', fontSize: 15 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ContentSection>

        <CanCannot
          can={[
            'Explain what voluntary administration would mean for you and your company.',
            'Set out administration alongside the other options in writing.',
            'Introduce a registered liquidator from our network who can act as administrator.',
          ]}
          cannot={[
            'Act as the administrator or accept any appointment.',
            'Promise that creditors will accept a deed, or any particular outcome.',
            'Give legal advice.',
          ]}
        />

        <ContentSection id="section-faq" label="Common questions" heading="Voluntary administration questions">
          <FaqList items={faqItems} alwaysOpen />
        </ContentSection>

        <RelatedLinks
          links={[
            {
              label: 'Administration and liquidation options',
              href: '/administration-and-liquidation',
            },
            {
              label: 'Small Business Restructuring explained',
              href: '/services/small-business-restructure',
            },
            {
              label: 'Creditors voluntary liquidation explained',
              href: '/services/creditors-voluntary-liquidation',
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
          .va-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
