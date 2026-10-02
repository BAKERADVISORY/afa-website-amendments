import type { Metadata } from 'next'
import { ChevronRight, MapPin } from 'lucide-react'
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
import { TeamSection } from '@/components/TeamSection'
import { PageDisclaimer } from '@/components/PageDisclaimer'
import { ConsultationCTA } from '@/components/ConsultationCTA'
import { JsonLd } from '@/components/JsonLd'
import {
  ADDRESS_LINE,
  ENTITY_DISCLAIMER,
  SERVICE_AREA_LINE,
  absUrl,
  personSchema,
  webPageSchema,
} from '@/lib/site'

const PATH = '/about'
const title = 'About Australian Financial Advisory | Who We Are'
const description =
  'Who we are, how we work, and why we refer formal insolvency, tax agent and licensed advice work to appropriately licensed partners. Assessment first. The right specialist, second.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: absUrl(PATH) },
  openGraph: { title, description, url: absUrl(PATH) },
}

/** Approved GBP service list. No pricing. */
const howWeWork = [
  {
    num: '01',
    heading: 'Free initial consultation',
    body: 'A confidential first conversation to understand your situation and confirm whether we can help.',
  },
  {
    num: '02',
    heading: 'Options Assessment',
    body: 'A structured review of your financial position and the options available to you.',
  },
  {
    num: '03',
    heading: 'Initial Advisory Report',
    body: 'A written report setting out your position, your options and recommended next steps. Where execution work needs a licence, we refer it to an appropriately licensed specialist.',
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: title,
          description,
          about: 'Australian Financial Advisory',
        })}
      />
      <JsonLd
        data={personSchema({
          id: 'jason-baker',
          name: 'Jason Baker',
          jobTitle: 'Director',
          description:
            'Chartered Accountant. Reviews the numbers and signs the written advisory report.',
        })}
      />
      <JsonLd
        data={personSchema({
          id: 'jonathan-moy',
          name: 'Jonathan Moy',
          jobTitle: 'Advisory and Negotiations',
          description:
            'First point of contact. Handles intake, assessment and creditor negotiation.',
        })}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="About us"
          title="Who we are and how we work"
          intro="Australian Financial Advisory helps company directors get ahead of financial pressure, particularly ATO debt and Director Penalty Notice risk, before it becomes a crisis. We assess your financial position, set out the options in writing, and refer specialist execution work to appropriately licensed practitioners in our network."
          breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'About' }]}
          wave
        />

        <ContentSection
          id="section-what-we-do"
          label="Who we are"
          heading="What we actually do"
        >
          <p style={bodyText}>
            We assess where you stand, put the options in writing, and bring in
            a licensed specialist when the situation calls for one. A second
            set of eyes for directors under pressure.
          </p>
          <p style={bodyText}>
            We work for you, the business owner. Our job is to help you
            understand your position and the options available at the stage
            when the most options are still open.
          </p>
          <div
            style={{
              backgroundColor: '#f8f8ff',
              borderRadius: 10,
              padding: '20px 24px',
              borderLeft: '4px solid #9b8ec4',
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: '#1a1a3e',
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 600,
              }}
            >
              {ENTITY_DISCLAIMER}
            </p>
          </div>
        </ContentSection>

        <ContentSection
          id="section-first-call"
          label="The first call is free"
          heading="No pressure, no sales pitch"
          tone="panel"
        >
          <p style={bodyText}>
            The first call is free. If we&apos;re not the right fit, we&apos;ll
            say so on that call. Standard professional confidentiality applies.
          </p>
          <p style={{ ...bodyText, marginBottom: 0 }}>
            Any next step is your decision. We don&apos;t push a particular
            outcome.
          </p>
        </ContentSection>

        <ContentSection
          id="section-how-we-work"
          label="How we work"
          heading="Three steps, each one in writing"
          tone="navy"
        >
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {howWeWork.map(({ num, heading, body }) => (
              <li
                key={num}
                style={{
                  display: 'flex',
                  gap: 24,
                  alignItems: 'flex-start',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderRadius: 10,
                  padding: '24px 28px',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: '#9b8ec4',
                    lineHeight: 1,
                    flexShrink: 0,
                    width: 40,
                  }}
                >
                  {num}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: 6,
                    }}
                  >
                    {heading}
                  </h3>
                  <p style={{ ...bodyTextLight, fontSize: 14, marginBottom: 0 }}>
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p style={{ ...bodyTextLight, marginTop: 24, marginBottom: 0 }}>
            We work on fixed fees agreed upfront, so you know the cost before
            anything starts. The initial consultation is free and we&apos;ll
            give you exact figures on that first call.
          </p>
        </ContentSection>

        <ContentSection
          id="section-why-we-refer"
          label="Why we refer"
          heading="Assessment first. The right specialist, second."
        >
          <p style={bodyText}>
            We don&apos;t try to be everything. Formal restructuring and
            liquidation go to people licensed to do that work. Tax agent work,
            such as dealing directly with the ATO, goes to a registered tax
            agent. Legal questions go to a lawyer.
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
              'Formal insolvency and restructuring: referred to registered practitioners.',
              'ATO negotiation, remission requests and representation: referred to a registered tax agent.',
              'Finance, where it may be part of a solution: we can pass on a licensed broker’s details.',
              'Legal advice: referred to a lawyer.',
            ].map((line) => (
              <li
                key={line}
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  fontSize: 15,
                  color: '#444444',
                  lineHeight: 1.6,
                }}
              >
                <ChevronRight
                  size={18}
                  color="#6E3E8F"
                  aria-hidden="true"
                  style={{ flexShrink: 0, marginTop: 3 }}
                />
                {line}
              </li>
            ))}
          </ul>
        </ContentSection>

        <TeamSection />

        <ContentSection
          id="section-where"
          label="Where we work"
          heading="Gold Coast based, Australia-wide by phone and video"
        >
          <div
            style={{
              backgroundColor: '#f8f8ff',
              borderRadius: 10,
              padding: '20px 24px',
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
              marginBottom: 16,
            }}
          >
            <MapPin
              size={20}
              color="#6E3E8F"
              aria-hidden="true"
              style={{ flexShrink: 0, marginTop: 2 }}
            />
            <div>
              <h3 style={{ ...cardTitle, marginBottom: 4 }}>Australian Financial Advisory</h3>
              <address style={{ ...cardBody, fontStyle: 'normal' }}>
                {ADDRESS_LINE}
              </address>
            </div>
          </div>
          <p style={{ ...bodyText, marginBottom: 0 }}>
            Serving {SERVICE_AREA_LINE}
          </p>
        </ContentSection>

        <PageDisclaimer />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  )
}
