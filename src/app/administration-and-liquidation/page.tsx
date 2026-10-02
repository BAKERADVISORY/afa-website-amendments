import type { Metadata } from 'next'
import {
  ChevronRight,
  FileText,
  Users,
  Shield,
  Search,
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

const PATH = '/administration-and-liquidation'
const title = 'Voluntary Administration and Liquidation Options'
const description =
  'Before a formal insolvency decision, understand what voluntary administration and liquidation mean for you as a director. Written options review and referral to a registered practitioner. Free initial consultation.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absUrl(PATH) },
  openGraph: { title: `${title} | AFA`, description, url: absUrl(PATH) },
}

const faqItems: FaqItem[] = [
  {
    question: 'Is Australian Financial Advisory a registered insolvency practitioner?',
    answer:
      "No. We're an assessment-and-referral service. Where formal insolvency work is needed, we refer to appropriately licensed practitioners.",
  },
  {
    question: 'Who appoints the administrator or liquidator?',
    answer:
      'In a voluntary administration or a creditors voluntary liquidation the directors or members resolve to appoint a registered liquidator. A creditor can also apply to the court to wind up a company. In every case the practitioner is a registered liquidator with duties to creditors.',
  },
  {
    question: 'Do you charge for the first conversation?',
    answer: 'No, the initial consultation is free.',
  },
]

const whatWeDo = [
  {
    icon: Search,
    heading: 'Situation assessment',
    body: 'We review your business and financial position, your creditor exposure, and the realistic options available to you, including which formal pathways are still open.',
  },
  {
    icon: Shield,
    heading: 'Director obligations explained',
    body: 'We explain your obligations as a director during each process, including insolvent trading exposure, reporting duties, and what you must and must not do while the pressure continues.',
  },
  {
    icon: FileText,
    heading: 'Written report with a recommended pathway',
    body: 'We issue a written report with a recommended pathway and the next steps required, so you go into any formal process with your eyes open.',
  },
  {
    icon: Users,
    heading: 'Specialist referral',
    body: 'We refer you to a registered insolvency practitioner in our network to carry out the process you choose.',
  },
]

function MessageList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((msg) => (
        <div
          key={msg}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 14,
            padding: '14px 18px',
            backgroundColor: dark ? 'rgba(255,255,255,0.06)' : '#f8f8ff',
            borderRadius: 8,
          }}
        >
          <ChevronRight
            size={16}
            color={dark ? '#DEDCEC' : '#6E3E8F'}
            aria-hidden="true"
            style={{ flexShrink: 0, marginTop: 3 }}
          />
          <p
            style={{
              fontSize: 14,
              color: dark ? '#DEDCEC' : '#444444',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {msg}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function AdministrationAndLiquidationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          path: PATH,
          name: 'Administration and liquidation options assessment and referral',
          description:
            "A review of a company's position when formal insolvency is on the table, with voluntary administration and liquidation options and director duties set out in writing, and referral to a registered insolvency practitioner.",
        })}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="Administration and liquidation advisory"
          title="Before a formal insolvency decision, understand your position."
          intro="When formal insolvency processes are on the table, the decisions you make in the next days or weeks shape everything that follows. We make sure you understand what each option means for you as a director before you commit to a path."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Administration and liquidation' },
          ]}
          watermark="OPTIONS"
        />

        <ContentSection id="section-in-short" label="In short" heading="The short answer">
          <MessageList
            items={[
              'Voluntary administration pauses most creditor action while an independent administrator assesses the company’s options. Liquidation winds the company up through a registered liquidator.',
              'Both processes are run by a registered liquidator with duties to creditors. Directors keep their own duties, including the duty to prevent insolvent trading.',
              'Australian Financial Advisory explains what each process means for you, sets out the options in writing, and introduces a registered insolvency practitioner. We do not act as the administrator or liquidator.',
            ]}
          />
        </ContentSection>

        <ContentSection
          id="section-what-we-do"
          label="What we do"
          heading="We help you understand your position before committing to anything"
          tone="panel"
          maxWidth={1100}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 24,
            }}
            className="aal-two-col"
          >
            {whatWeDo.map(({ icon: Icon, heading, body }) => (
              <div
                key={heading}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 12,
                  padding: '28px 32px',
                  borderTop: '3px solid #9b8ec4',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
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
                  }}
                >
                  <Icon size={20} color="#ffffff" />
                </div>
                <h3 style={{ ...cardTitle, marginBottom: 0 }}>{heading}</h3>
                <p style={cardBody}>{body}</p>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection
          id="section-processes"
          label="The processes"
          heading="What each process means for a director"
          maxWidth={1100}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <h3 style={{ ...cardTitle, fontSize: 20, marginBottom: 16 }}>
                Voluntary administration
              </h3>
              <MessageList
                items={[
                  'Voluntary administration pauses most creditor action, including legal proceedings, while an external administrator assesses the options available to the business.',
                  'The outcome may be a restructured business through a Deed of Company Arrangement (DOCA), a return of the company to its directors, or an orderly wind-down. The key word is voluntary: the directors choose to start the process.',
                  'Acting voluntarily gives a director more involvement than waiting for a creditor to apply to wind up the company through the courts.',
                ]}
              />
              <p style={{ ...bodyText, marginTop: 16, marginBottom: 0 }}>
                <a
                  href="/services/voluntary-administration"
                  className="afa-crumb-link"
                  style={{ color: '#6E3E8F', fontWeight: 600 }}
                >
                  Read the voluntary administration explainer
                </a>
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#1a1a3e',
                borderRadius: 12,
                padding: '32px 36px',
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: 8,
                }}
              >
                What happens when a liquidator is appointed
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#DEDCEC',
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                If the company needs to be wound up, understanding the process
                before it starts matters.
              </p>
              <MessageList
                dark
                items={[
                  'A liquidator’s duties are to the creditors and the court, regardless of who nominates them. That includes investigating the conduct of the directors.',
                  'Taking advice before any appointment means you go in understanding the process, your obligations and what to expect.',
                  'Director duties during insolvency are serious, including potential personal liability for insolvent trading. The sooner you take advice, the better you understand your position.',
                  'Acting before a creditor applies to wind up the company keeps more options open.',
                ]}
              />
              <p style={{ ...bodyText, color: '#DEDCEC', marginTop: 16, marginBottom: 0 }}>
                <a
                  href="/services/creditors-voluntary-liquidation"
                  className="afa-inline-link-light"
                  style={{ color: '#ffffff', fontWeight: 600 }}
                >
                  Read the creditors voluntary liquidation explainer
                </a>
              </p>
            </div>

            <div>
              <h3 style={{ ...cardTitle, fontSize: 20, marginBottom: 16 }}>
                Director duties
              </h3>
              <MessageList
                items={[
                  'Insolvent trading, continuing to incur debts when the company cannot pay them, is a personal liability risk for directors.',
                  'The sooner you take independent advice, the better you understand that exposure and your options.',
                  'We help you understand exactly where you stand before any formal process begins, so you make decisions with full knowledge of your obligations.',
                ]}
              />
            </div>
          </div>
        </ContentSection>

        <CanCannot
          can={[
            'Assess your position and explain which formal pathways are still open.',
            'Explain your duties as a director during administration or liquidation.',
            'Set out the options and a recommended pathway in writing.',
            'Introduce a registered insolvency practitioner from our network.',
          ]}
          cannot={[
            'Act as the administrator or liquidator, or accept an appointment of any kind.',
            'Give legal advice or determine whether the company is solvent or insolvent. We can prepare a cash-flow projection from your figures.',
            'Promise a particular outcome. Outcomes vary case by case.',
          ]}
        />

        <ContentSection id="section-faq" label="Common questions" heading="Administration and liquidation questions">
          <FaqList items={faqItems} alwaysOpen />
        </ContentSection>

        <RelatedLinks
          links={[
            {
              label: 'Voluntary administration explained',
              href: '/services/voluntary-administration',
            },
            {
              label: 'Creditors voluntary liquidation explained',
              href: '/services/creditors-voluntary-liquidation',
            },
            { label: 'Close or wind up a company', href: '/close-company' },
            {
              label: 'Restructure your business',
              href: '/restructure-your-business',
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
          .aal-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
