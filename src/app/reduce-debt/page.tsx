import type { Metadata } from 'next'
import { ChevronRight, FileText, Users, Search, ListChecks } from 'lucide-react'
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

const PATH = '/reduce-debt'
const title = 'ATO Debt Options and Payment Plan Help'
const description =
  'Understand your ATO debt position and the options that may be available, including payment arrangements through a registered tax agent. Assessment and referral. Free initial consultation.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absUrl(PATH) },
  openGraph: { title: `${title} | AFA`, description, url: absUrl(PATH) },
}

const faqItems: FaqItem[] = [
  {
    question: 'Can you negotiate with the ATO on my behalf?',
    answer:
      "We're not a registered tax agent, so we don't provide tax agent services like direct ATO negotiation ourselves. Where that's relevant, we can point you toward appropriately licensed help.",
  },
  {
    question: 'Do you offer debt negotiation for personal debts?',
    answer:
      "We work with businesses on commercial facilities, not consumer credit. Different licensing rules apply to personal debt, which we don't handle.",
  },
  {
    question: 'Do you charge for the first conversation?',
    answer: 'No, the initial consultation is free.',
  },
  {
    question: 'What happens after the Initial Advisory Report?',
    answer:
      "You get a written report setting out your position and options. Any next step is your decision, we don't push a particular outcome.",
  },
]

const whatWeDo = [
  {
    icon: Search,
    heading: 'Full financial review',
    body: 'We assess your ATO debt, creditor exposure, cash-flow position and repayment capacity, building a clear picture of where you actually stand.',
  },
  {
    icon: ListChecks,
    heading: 'Options assessment',
    body: 'We identify the pathways that may be realistic for your situation: an ATO payment arrangement through a registered tax agent, arrangements with commercial creditors, or a formal option where that is relevant.',
  },
  {
    icon: FileText,
    heading: 'Written report with recommended steps',
    body: 'You receive a clear written report setting out your position, your options and the recommended next steps, tailored to your circumstances.',
  },
  {
    icon: Users,
    heading: 'Specialist referral',
    body: 'We connect you with the right specialist in our network: a registered tax agent for ATO matters, a licensed practitioner for a formal process, or a licensed finance broker if finance may be part of the solution.',
  },
]

export default function ReduceDebtPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          path: PATH,
          name: 'ATO debt options assessment and referral',
          description:
            "An independent review of a company's ATO debt and creditor position, with the available options set out in writing and referral to a registered tax agent for ATO matters or a licensed practitioner for formal options.",
        })}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="ATO debt and creditor pressure"
          title="ATO debt and creditor pressure: understand your options."
          intro="When ATO debt or creditor pressure is mounting, knowing exactly where you stand is the first step. We assess your position, set out the options in writing, and refer ATO negotiation to a registered tax agent."
          breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'ATO debt options' }]}
          watermark="DEBT"
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
              'An unpaid ATO debt can lead to interest, penalties, and for certain amounts, personal liability for directors through a Director Penalty Notice.',
              'Options may include an ATO payment arrangement, an arrangement with commercial creditors, Small Business Restructuring, or another formal process. Which ones apply depends on the position of the company.',
              'Australian Financial Advisory assesses the position, sets out the options in writing, and refers ATO negotiation to a registered tax agent. We are not a tax agent and do not negotiate with the ATO ourselves.',
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
          id="section-what-we-do"
          label="What we do"
          heading="An independent review of your full financial position"
          tone="panel"
          maxWidth={1100}
        >
          <p style={{ ...bodyText, maxWidth: 700, marginBottom: 40 }}>
            Before anyone approaches the ATO or a creditor on your behalf, you
            need to know exactly where you stand. We provide an independent
            assessment of your situation, so decisions are made from a position
            of knowledge, not panic.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 24,
            }}
            className="rd-two-col"
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
          id="section-need-to-know"
          label="What you need to know"
          heading="ATO debt: what you need to know"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'The ATO offers payment arrangements in some circumstances. A registered tax agent can deal with the ATO on a company’s behalf. Australian Financial Advisory is not a registered tax agent and refers that work.',
              'Commercial creditors can be approached under a signed authority. We help you understand where you stand before any conversation takes place.',
              'Certain unpaid company tax debts can become a director’s personal liability through a Director Penalty Notice. Getting advice early matters.',
              'Where finance may be part of the solution, we can pass on the details of a licensed finance broker. We do not arrange finance or provide credit assistance.',
              'Any next step is your decision. We set out the options; we do not push a particular outcome.',
            ].map((msg) => (
              <div
                key={msg}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  padding: '16px 20px',
                  backgroundColor: '#f8f8ff',
                  borderRadius: 8,
                }}
              >
                <ChevronRight
                  size={18}
                  color="#6E3E8F"
                  aria-hidden="true"
                  style={{ flexShrink: 0, marginTop: 3 }}
                />
                <p
                  style={{
                    fontSize: 15,
                    color: '#444444',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {msg}
                </p>
              </div>
            ))}
          </div>
        </ContentSection>

        <CanCannot
          can={[
            'Assess your ATO debt, creditor exposure and cash-flow position.',
            'Set out the options available to you in writing.',
            'Communicate with your company’s commercial creditors under a signed authority.',
            'Introduce a registered tax agent for ATO matters, or a licensed practitioner for a formal process.',
          ]}
          cannot={[
            'Negotiate directly with the ATO, apply for remission, or represent you in dealings with the Commissioner. That is tax agent work.',
            'Arrange finance or provide credit assistance. We can pass on a licensed broker’s details.',
            'Handle personal or consumer debts.',
            'Promise a reduction or a particular outcome. Outcomes vary case by case.',
          ]}
        />

        <ContentSection id="section-faq" label="Common questions" heading="ATO debt questions">
          <FaqList items={faqItems} alwaysOpen />
        </ContentSection>

        <RelatedLinks
          links={[
            {
              label: 'Director Penalty Notice',
              href: '/director-penalty-notice',
            },
            {
              label: 'Restructure your business',
              href: '/restructure-your-business',
            },
            {
              label: 'Small Business Restructuring explained',
              href: '/services/small-business-restructure',
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
          .rd-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
