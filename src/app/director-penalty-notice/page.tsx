import type { Metadata } from 'next'
import { ChevronRight } from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { PageHero } from '@/components/PageHero'
import {
  ContentSection,
  bodyText,
  bodyTextLight,
  calloutBox,
  cardBody,
  cardStyle,
  cardTitle,
} from '@/components/ContentSection'
import { CanCannot } from '@/components/CanCannot'
import { FaqList } from '@/components/FaqList'
import { RelatedLinks } from '@/components/RelatedLinks'
import { PageDisclaimer } from '@/components/PageDisclaimer'
import { ConsultationCTA } from '@/components/ConsultationCTA'
import { JsonLd } from '@/components/JsonLd'
import { absUrl, serviceSchema, type FaqItem } from '@/lib/site'

const PATH = '/director-penalty-notice'
const title = 'Director Penalty Notice (DPN) Help and Options'
const description =
  'What a Director Penalty Notice is, the 21-day window, lockdown versus non-lockdown notices, and the options still open to directors. Assessment and referral. Free initial consultation.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absUrl(PATH) },
  openGraph: { title: `${title} | AFA`, description, url: absUrl(PATH) },
}

const faqItems: FaqItem[] = [
  {
    question: 'Can I resign as director to avoid a DPN?',
    answer:
      'No. Resigning as a director does not discharge liability for non-compliance that occurred during your tenure as director.',
  },
  {
    question: 'Does a payment plan remove a DPN?',
    answer:
      'A payment plan alone does not remove personal liability under a DPN. For a non-lockdown DPN, the debt must be paid in full or the company must enter administration, restructuring, or liquidation within the 21-day window.',
  },
  {
    question: 'What happens if I do nothing?',
    answer:
      'If no action is taken on a non-lockdown DPN within 21 days, the personal liability becomes permanent. The ATO can then pursue personal assets. A DPN does not expire.',
  },
  {
    question: 'Can Australian Financial Advisory negotiate with the ATO for me?',
    answer:
      "We're not a registered tax agent, so we don't provide tax agent services like direct ATO negotiation ourselves. Where that's relevant, we can point you toward appropriately licensed help.",
  },
  {
    question: 'How much does it cost to get advice?',
    answer:
      'The initial consultation is free. We work on fixed fees agreed upfront, so you know the cost before anything starts.',
  },
]

const triggers = [
  {
    title: 'PAYG withholding',
    body: 'Tax withheld from employee wages that was not remitted to the ATO. Directors can be personally liable regardless of whether they were aware the amounts were not being paid.',
  },
  {
    title: 'GST',
    body: 'Unpaid GST obligations are captured under the DPN regime. GST collected from customers but not remitted to the ATO can become a personal liability for directors.',
  },
  {
    title: 'Superannuation guarantee charge',
    body: 'Unpaid superannuation guarantee amounts owed to employees can also give rise to director liability.',
  },
  {
    title: 'Income tax',
    body: 'Outstanding company income tax obligations can give rise to director liability in certain circumstances.',
  },
]

const protection = [
  {
    num: '01',
    heading: 'Lodge on time, every time',
    body: 'Even if the company cannot pay, lodging BAS, IAS and superannuation statements on time keeps a non-lockdown DPN from becoming a lockdown DPN.',
  },
  {
    num: '02',
    heading: 'Engage the ATO early',
    body: 'If the company is struggling with cash flow, approaching the ATO early about a payment arrangement, through a registered tax agent where needed, is better than waiting for a notice.',
  },
  {
    num: '03',
    heading: 'Keep your ASIC address current',
    body: 'DPNs are sent to the address registered with ASIC. An outdated address is not a defence for missing the 21-day deadline.',
  },
  {
    num: '04',
    heading: "Monitor the company's compliance",
    body: 'As a director you are responsible for knowing whether the company is meeting its tax obligations.',
  },
  {
    num: '05',
    heading: 'Seek advice early',
    body: 'The earlier you talk to a pre-insolvency adviser, the more options may still be available.',
  },
]

export default function DirectorPenaltyNoticePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          path: PATH,
          name: 'Director Penalty Notice options assessment and referral',
          description:
            "An assessment of a director's position after receiving, or at risk of receiving, an ATO Director Penalty Notice, with the available options set out in writing and referral to an appropriately licensed tax agent, restructuring practitioner or insolvency practitioner where formal action is needed.",
        })}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="Director Penalty Notice"
          title="Director Penalty Notice: what it means and the options still open"
          intro="A Director Penalty Notice (DPN) is a notice the ATO can issue that makes a company director personally liable for certain unpaid company tax debts. Getting advice early matters, because the options available can narrow once a notice is issued."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Director Penalty Notice' },
          ]}
          watermark="DPN"
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
              'A DPN makes a company director personally liable for certain unpaid company tax debts, such as PAYG withholding, GST and superannuation guarantee charge.',
              'A non-lockdown DPN gives the director 21 days from the date the notice is posted to act. A lockdown DPN cannot be cancelled.',
              'Australian Financial Advisory assesses your position, sets out the options in writing, and introduces the right licensed specialist: a registered tax agent for ATO matters, or a restructuring or insolvency practitioner for a formal process.',
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
          id="section-what-is-a-dpn"
          label="What is a DPN"
          heading="What is a Director Penalty Notice?"
          tone="panel"
        >
          <p style={bodyText}>
            A Director Penalty Notice is a formal notice issued by the Australian
            Taxation Office that makes a company director personally liable for
            certain unpaid company tax debts. Unlike other company debts, a DPN
            removes the protection of the company structure for those amounts.
            The ATO can then pursue the director personally.
          </p>
          <div style={{ ...calloutBox, backgroundColor: '#ffffff' }}>
            <p
              style={{
                fontSize: 15,
                color: '#1a1a3e',
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 600,
              }}
            >
              Once a non-lockdown DPN is issued, the director has 21 days to
              act. After that window closes, the personal liability is locked
              in, regardless of what happens to the company.
            </p>
          </div>
        </ContentSection>

        <ContentSection
          id="section-triggers"
          label="DPN triggers"
          heading="What debts can trigger a Director Penalty Notice?"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {triggers.map((item) => (
              <div key={item.title} style={{ ...cardStyle, backgroundColor: '#f8f8ff' }}>
                <h3 style={cardTitle}>{item.title}</h3>
                <p style={cardBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection
          id="section-types"
          label="DPN types"
          heading="The two types of Director Penalty Notice"
          tone="panel"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 24,
            }}
            className="dpn-two-col"
          >
            <div style={{ ...cardStyle }}>
              <h3 style={{ ...cardTitle, fontSize: 20 }}>Non-lockdown DPN</h3>
              <p style={{ ...cardBody, marginBottom: 14 }}>
                Issued when the company has lodged its BAS and superannuation
                statements on time but has not paid the debt. Directors have 21
                days from the date the notice is posted, not the date it is
                received, to take action.
              </p>
              <p style={{ ...cardBody, marginBottom: 12 }}>
                Within those 21 days the director can avoid personal liability
                by:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                {[
                  'Paying the debt in full',
                  'Placing the company into voluntary administration',
                  'Appointing a small business restructuring practitioner',
                  'Commencing liquidation',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 8,
                      fontSize: 14,
                      color: '#444444',
                    }}
                  >
                    <ChevronRight
                      size={14}
                      color="#6E3E8F"
                      aria-hidden="true"
                      style={{ flexShrink: 0, marginTop: 3 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p style={cardBody}>
                If no action is taken within 21 days the penalty locks down and
                the personal liability becomes permanent.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#1a1a3e',
                borderRadius: 10,
                padding: '24px 28px',
                borderTop: '3px solid rgba(255,255,255,0.3)',
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: 14,
                }}
              >
                Lockdown DPN
              </h3>
              <p style={{ ...bodyTextLight, fontSize: 14, marginBottom: 14 }}>
                Issued when the company has not lodged its returns within the
                required timeframes. A lockdown DPN cannot be cancelled.
              </p>
              <p style={{ ...bodyTextLight, fontSize: 14, marginBottom: 12 }}>
                Once issued, the liability is dealt with by:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                {[
                  'Paying the debt in full',
                  'Placing the company into voluntary administration',
                  'Appointing a small business restructuring practitioner',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 8,
                      fontSize: 14,
                      color: '#DEDCEC',
                    }}
                  >
                    <ChevronRight
                      size={14}
                      color="#DEDCEC"
                      aria-hidden="true"
                      style={{ flexShrink: 0, marginTop: 3 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: 14,
                  color: '#ffffff',
                  lineHeight: 1.7,
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                Liquidation does not remove personal liability for a lockdown
                DPN.
              </p>
            </div>
          </div>
        </ContentSection>

        <ContentSection
          id="section-21-days"
          label="Critical timing"
          heading="The 21-day window"
          tone="navy"
        >
          <p style={bodyTextLight}>
            The 21-day period for a non-lockdown DPN begins from the date the
            ATO posts the notice, not the date you receive it. By the time you
            open the letter, some of those days may already have passed.
          </p>
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: 10,
              padding: '24px 28px',
              borderLeft: '4px solid #9b8ec4',
            }}
          >
            <p
              style={{
                fontSize: 17,
                color: '#ffffff',
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 600,
              }}
            >
              Do not assume a notice will resolve itself. Talk to a professional
              as soon as it arrives. The options available can narrow quickly.
            </p>
          </div>
        </ContentSection>

        <ContentSection
          id="section-reduce-risk"
          label="Reducing the risk"
          heading="How directors can reduce Director Penalty Notice risk"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {protection.map(({ num, heading, body }) => (
              <div
                key={num}
                style={{
                  display: 'flex',
                  gap: 24,
                  alignItems: 'flex-start',
                  backgroundColor: '#f8f8ff',
                  borderRadius: 10,
                  padding: '24px 28px',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: '#C9C7DA',
                    lineHeight: 1,
                    flexShrink: 0,
                    width: 40,
                  }}
                >
                  {num}
                </span>
                <div>
                  <h3 style={{ ...cardTitle, marginBottom: 6 }}>{heading}</h3>
                  <p style={cardBody}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection
          id="section-how-we-help"
          label="How we help"
          heading="How Australian Financial Advisory helps directors facing a DPN"
          tone="panel"
        >
          <p style={bodyText}>
            We work with directors across Gold Coast, Brisbane, Sydney and
            Australia-wide who have received a Director Penalty Notice or are
            worried one may arrive. We review your financial position, assess
            your ATO obligations, and provide a written report with recommended
            action steps.
          </p>
          <p style={bodyText}>
            We then connect you with the right licensed specialist in our
            network: a registered tax agent to deal with the ATO, a small
            business restructuring practitioner, or an insolvency practitioner.
            We work for you, the director. Any next step is your decision.
          </p>
        </ContentSection>

        <CanCannot
          can={[
            'Assess your financial position and your ATO exposure early.',
            'Explain what a DPN means and set out the options in writing.',
            'Introduce a registered tax agent, a restructuring practitioner or an insolvency practitioner from our network.',
            'Communicate with commercial creditors under a signed authority.',
          ]}
          cannot={[
            'Negotiate directly with the ATO on your behalf. That is tax agent work, which we refer to a registered tax agent.',
            'Act as the restructuring practitioner, administrator or liquidator.',
            'Give legal advice or promise a particular outcome. Outcomes vary case by case.',
          ]}
        />

        <ContentSection
          id="section-faq"
          label="Common questions"
          heading="Director Penalty Notice questions"
        >
          <FaqList items={faqItems} alwaysOpen />
        </ContentSection>

        <RelatedLinks
          links={[
            { label: 'ATO debt options', href: '/reduce-debt' },
            {
              label: 'Restructure your business',
              href: '/restructure-your-business',
            },
            {
              label: 'Small Business Restructuring explained',
              href: '/services/small-business-restructure',
            },
            {
              label: 'Voluntary administration explained',
              href: '/services/voluntary-administration',
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
          .dpn-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
