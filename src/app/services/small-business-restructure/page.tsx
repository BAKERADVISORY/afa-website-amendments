import type { Metadata } from 'next'
import { CheckCircle, ChevronRight } from 'lucide-react'
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

const PATH = '/services/small-business-restructure'
const title = 'Small Business Restructuring (SBR) Explained'
const description =
  'How Small Business Restructuring works in Australia: eligibility criteria, what the process is designed to do, and the registered practitioner’s role. General information from an assessment-and-referral advisory.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absUrl(PATH) },
  openGraph: { title: `${title} | AFA`, description, url: absUrl(PATH) },
}

const faqItems: FaqItem[] = [
  {
    question: 'Is Australian Financial Advisory a restructuring practitioner?',
    answer:
      'No. Only a registered small business restructuring practitioner can be appointed. We assess whether the process may suit your company and introduce a registered practitioner from our network.',
  },
  {
    question: 'Does Small Business Restructuring guarantee creditors will accept a plan?',
    answer:
      'No. Creditors vote on the proposed plan. Outcomes vary case by case.',
  },
  {
    question: 'Do directors stay in control during the process?',
    answer:
      'Yes. That is a defining feature of Small Business Restructuring: the directors remain in control of the business while the registered practitioner runs the process.',
  },
]

const eligibility = [
  'Total liabilities under the statutory threshold',
  'An incorporated Australian company',
  'Tax lodgements up to date',
  'Employee entitlements, including superannuation, paid',
  'Directors who have not used the process within the restricted period',
]

const designedTo = [
  'Keep the directors in control of the business while the process runs',
  'Allow a restructuring plan to be proposed to creditors, who vote on it',
  'Provide protection from certain creditor actions while the plan is developed',
  'Set terms that depend on the plan the creditors accept',
]

const steps = [
  {
    num: 1,
    title: 'Eligibility assessment',
    desc: 'The eligibility criteria are checked. Australian Financial Advisory can assess this initially; the registered practitioner confirms it.',
  },
  {
    num: 2,
    title: 'Practitioner appointed',
    desc: 'The directors appoint a registered small business restructuring practitioner.',
  },
  {
    num: 3,
    title: 'Plan developed and proposed',
    desc: 'With the practitioner, a restructuring plan is prepared and put to creditors.',
  },
  {
    num: 4,
    title: 'Creditors vote',
    desc: 'If creditors accept the plan, it is implemented under the practitioner’s oversight. If not, the directors consider the other options.',
  },
]

export default function SmallBusinessRestructurePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: title,
          description,
          about: 'Small Business Restructuring (Australia)',
        })}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="Formal process explained"
          title="Small Business Restructuring explained"
          intro="Small Business Restructuring (SBR) is a formal process under Australian law that allows an eligible small company to propose a plan to its creditors while the directors stay in control of the business. A registered small business restructuring practitioner runs the process. Australian Financial Advisory assesses eligibility and refers you to a practitioner."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Your options explained', href: '/services' },
            { name: 'Small Business Restructuring' },
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
              'SBR lets an eligible small company put a restructuring plan to its creditors while the directors keep running the business.',
              'It is run by a registered small business restructuring practitioner. Creditors vote on the plan.',
              'Australian Financial Advisory assesses whether SBR may suit your company, sets out the options in writing, and introduces a registered practitioner. We do not act as the practitioner.',
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
          id="section-eligibility"
          label="Eligibility"
          heading="Is a company eligible?"
          tone="panel"
        >
          <p style={bodyText}>
            The SBR process has specific eligibility requirements set out in the
            Corporations Act. In general terms, a company needs to meet
            conditions such as:
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {eligibility.map((item) => (
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
          <p style={{ ...bodyText, marginBottom: 0 }}>
            The exact thresholds and conditions are set by legislation and are
            confirmed by the registered practitioner. We assess the position
            initially as part of the free initial consultation.
          </p>
        </ContentSection>

        <ContentSection
          id="section-designed-to"
          label="What it does"
          heading="What Small Business Restructuring is designed to do"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
            }}
            className="sbr-two-col"
          >
            {designedTo.map((benefit) => (
              <div
                key={benefit}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  backgroundColor: '#f8f8ff',
                  borderRadius: 8,
                  padding: '14px 18px',
                }}
              >
                <ChevronRight
                  size={16}
                  color="#6E3E8F"
                  aria-hidden="true"
                  style={{ flexShrink: 0, marginTop: 4 }}
                />
                <span style={{ color: '#383838', fontSize: 15, lineHeight: 1.6 }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection
          id="section-process"
          label="The process"
          heading="How the SBR process runs"
          tone="navy"
        >
          <p style={bodyTextLight}>
            The registered practitioner runs the process. In outline:
          </p>
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
                      backgroundColor: '#9b8ec4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1a1a3e',
                      fontSize: 18,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </div>
                  <div style={{ paddingTop: 8 }}>
                    <h3
                      style={{
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: 18,
                        marginBottom: 6,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ ...bodyTextLight, fontSize: 15, marginBottom: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
                {index < arr.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      width: 2,
                      height: 40,
                      backgroundColor: 'rgba(255,255,255,0.2)',
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
          id="section-practitioner"
          label="Who runs it"
          heading="Who can act as the restructuring practitioner"
        >
          <p style={bodyText}>
            Only a registered small business restructuring practitioner can be
            appointed. Australian Financial Advisory is not a restructuring
            practitioner. We assess whether SBR may suit your company and
            introduce a registered practitioner from our network.
          </p>
          <div
            style={{
              backgroundColor: '#f8f8ff',
              borderRadius: 10,
              padding: '20px 24px',
              borderLeft: '4px solid #9b8ec4',
            }}
          >
            <h3 style={{ ...cardTitle, marginBottom: 6 }}>Not sure if SBR fits?</h3>
            <p style={cardBody}>
              The AFA options page on restructuring sets out SBR alongside the
              other pathways.{' '}
              <a
                href="/restructure-your-business"
                className="afa-crumb-link"
                style={{ color: '#6E3E8F', fontWeight: 600 }}
              >
                Restructure your business
              </a>
            </p>
          </div>
        </ContentSection>

        <CanCannot
          can={[
            'Assess initially whether your company may meet the SBR eligibility criteria.',
            'Set out SBR alongside the other options in writing.',
            'Introduce a registered small business restructuring practitioner from our network.',
          ]}
          cannot={[
            'Act as the restructuring practitioner or run the process.',
            'Guarantee that creditors will accept a plan, or promise a particular outcome.',
            'Give legal or tax advice.',
          ]}
        />

        <ContentSection id="section-faq" label="Common questions" heading="Small Business Restructuring questions">
          <FaqList items={faqItems} alwaysOpen />
        </ContentSection>

        <RelatedLinks
          links={[
            {
              label: 'Restructure your business',
              href: '/restructure-your-business',
            },
            {
              label: 'Voluntary administration explained',
              href: '/services/voluntary-administration',
            },
            {
              label: 'Creditors voluntary liquidation explained',
              href: '/services/creditors-voluntary-liquidation',
            },
            { label: 'ATO debt options', href: '/reduce-debt' },
          ]}
        />

        <PageDisclaimer />
        <ConsultationCTA />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 767px) {
          .svc-hero { padding: 40px 0 !important; }
          .sbr-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
