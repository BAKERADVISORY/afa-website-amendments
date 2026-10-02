import type { Metadata } from 'next'
import {
  ChevronRight,
  FileText,
  Users,
  Search,
  AlertTriangle,
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

const PATH = '/restructure-your-business'
const title = 'Business Restructure Options for Directors'
const description =
  'Find out whether Small Business Restructuring, voluntary administration or an informal arrangement may suit your company. Written options and referral to licensed practitioners. Free initial consultation.'

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
      'No. Only a registered small business restructuring practitioner can be appointed to run a Small Business Restructuring. We assess whether the process may suit your company and introduce a registered practitioner from our network.',
  },
  {
    question: 'Does restructuring mean my business has to close?',
    answer:
      'Not necessarily. Small Business Restructuring is designed for eligible companies that want to keep trading while a plan is put to creditors. Whether it suits your company depends on eligibility and the position of the business.',
  },
  {
    question: 'Do you charge for the first conversation?',
    answer: 'No, the initial consultation is free.',
  },
]

const whatWeDo = [
  {
    icon: Search,
    heading: 'Business and financial review',
    body: 'We review your business structure, financials and creditor position, building a clear picture of what you owe, who you owe it to, and what options remain available.',
  },
  {
    icon: FileText,
    heading: 'Small Business Restructuring assessment',
    body: 'We assess whether a formal Small Business Restructuring may be available to you. It is a process that allows eligible directors to put a plan to creditors while remaining in control of the business.',
  },
  {
    icon: AlertTriangle,
    heading: 'Administration and liquidation options',
    body: 'Where restructuring is not possible or not appropriate, we set out the administration and liquidation options and help you understand the implications of each before committing to anything.',
  },
  {
    icon: Users,
    heading: 'Written report and specialist referral',
    body: 'We issue a written report with clear recommended next steps, then refer you to the right licensed specialist in our network to carry out the pathway you choose.',
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

export default function RestructureYourBusinessPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          path: PATH,
          name: 'Business restructure options assessment and referral',
          description:
            "A review of a company's position and the restructuring options that may be available, including Small Business Restructuring eligibility, voluntary administration and informal arrangements, set out in writing with referral to a licensed practitioner where a formal process is chosen.",
        })}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="Business restructure advisory"
          title="Restructure before the options narrow."
          intro="Not every business in distress needs to close, and not every business that needs to close should do so through formal insolvency. We assess the full picture, set out the options in writing, and refer you to a licensed practitioner if a formal process is the right path."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Restructure your business' },
          ]}
          watermark="RESTRUCTURE"
        />

        <ContentSection id="section-in-short" label="In short" heading="The short answer">
          <MessageList
            items={[
              'Restructuring options range from informal arrangements with creditors to formal processes such as Small Business Restructuring and voluntary administration.',
              'The earlier a director acts, the more of these options may still be available. Once cash flow collapses, some pathways close.',
              'Australian Financial Advisory assesses which options may apply, sets them out in writing, and introduces a registered practitioner if a formal process is chosen.',
            ]}
          />
        </ContentSection>

        <ContentSection
          id="section-what-we-do"
          label="What we do"
          heading="We assess every option before recommending a path"
          tone="panel"
          maxWidth={1100}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 24,
            }}
            className="ryb-two-col"
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
          id="section-options"
          label="The options"
          heading="The main restructuring pathways"
          maxWidth={1100}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <h3 style={{ ...cardTitle, fontSize: 20, marginBottom: 16 }}>
                Small Business Restructuring
              </h3>
              <MessageList
                items={[
                  'The Small Business Restructuring process allows an eligible company to put a plan to its creditors while the director remains in control, unlike administration, which appoints an external controller.',
                  'It is designed for eligible small companies that want to keep trading. Eligibility criteria apply, and creditors vote on the plan.',
                  'It requires early action. Once cash flow collapses and the business cannot meet its obligations, the SBR pathway may no longer be available.',
                ]}
              />
              <p style={{ ...bodyText, marginTop: 16, marginBottom: 0 }}>
                <a
                  href="/services/small-business-restructure"
                  className="afa-crumb-link"
                  style={{ color: '#6E3E8F', fontWeight: 600 }}
                >
                  Read the Small Business Restructuring explainer
                </a>
              </p>
            </div>

            <div>
              <h3 style={{ ...cardTitle, fontSize: 20, marginBottom: 16 }}>
                Voluntary administration
              </h3>
              <MessageList
                items={[
                  'Voluntary administration gives a business breathing room. It pauses most creditor action while an independent administrator assesses the options.',
                  'The outcome may be a Deed of Company Arrangement (DOCA) that restructures the business and allows it to continue, or an orderly wind-down if that is the better outcome for creditors.',
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
                If liquidation may be the outcome
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#DEDCEC',
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                Understanding the process before any appointment is one of the
                most useful things a director can do.
              </p>
              <MessageList
                dark
                items={[
                  'A liquidator owes duties to creditors regardless of who nominates them. Their job is to realise assets, investigate the company’s affairs and distribute what is available.',
                  'Taking advice before any appointment means you understand the process, your obligations and your options, rather than learning them after a creditor has acted.',
                  'Acting before a creditor applies to wind up the company keeps more options open and more of the process within your knowledge.',
                ]}
              />
            </div>
          </div>
        </ContentSection>

        <CanCannot
          can={[
            'Assess whether Small Business Restructuring, voluntary administration or an informal arrangement may apply to your company.',
            'Explain your obligations as a director during each option.',
            'Set out the options and recommended next steps in writing.',
            'Introduce a registered restructuring practitioner or insolvency practitioner from our network.',
          ]}
          cannot={[
            'Act as the restructuring practitioner, administrator or liquidator.',
            'Guarantee that creditors will accept a plan, or promise a particular outcome. Outcomes vary case by case.',
            'Give legal or tax advice. Those matters are referred to appropriately licensed professionals.',
          ]}
        />

        <ContentSection id="section-faq" label="Common questions" heading="Restructuring questions">
          <FaqList items={faqItems} alwaysOpen />
        </ContentSection>

        <RelatedLinks
          links={[
            {
              label: 'Small Business Restructuring explained',
              href: '/services/small-business-restructure',
            },
            {
              label: 'Voluntary administration explained',
              href: '/services/voluntary-administration',
            },
            {
              label: 'Administration and liquidation options',
              href: '/administration-and-liquidation',
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
          .ryb-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
