import type { Metadata } from 'next'
import { ChevronRight, Download, Mail, Phone } from 'lucide-react'
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
import { SectionLabel } from '@/components/SectionLabel'
import { JsonLd } from '@/components/JsonLd'
import { absUrl, serviceSchema, PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'

/**
 * Referral information for accountancy firms.
 *
 * Wording and section order follow the approved brochure source, afa-documents
 * 01_SOURCE/brochure-accountants-v1.0.1-standalone.html.
 * Builder briefs: afa-project handovers/prompts/
 * builder-prompt-2026-11-13-accountants-page-v1_0_2.md, then
 * builder-prompt-2026-11-13-accountants-page-polish-v1_0_0.md.
 *
 * No form on this page, by Jason's decision: the call to action is tap-to-call
 * and email to Jason.
 *
 * Polished and made public on 13 November 2026: one shared content width so
 * section headings line up, phase and service grids that fill the row with no
 * orphan card, a single-column warning-signs list, an "Accountants" nav item,
 * and the noindex removed.
 *
 * Three deliberate differences from the print brochure, approved by Jason on
 * 13 November 2026: the contact box carries the phone number only (no email
 * address and no website line, both of which make sense in print but not on
 * the site itself), and the line under the call-to-action buttons carries the
 * referral undertaking rather than repeating the contact details already in
 * the buttons above it.
 */

/**
 * One content width for every section on this page. Mixing 900 and 1100 left
 * the headings stepping sideways between sections at desktop widths. Prose
 * keeps its own narrower measure so the reading line does not get too long.
 */
const SECTION_WIDTH = 1100
const PROSE_WIDTH = 820

const PATH = '/accountants'
const title = 'Referral Information for Accountancy Firms'
const description =
  'Early, independent support on your clients and their options while you stay their accountant. Assessment and advisory services for accountancy firms. Gold Coast, Brisbane, Sydney, Australia-wide.'

const PDF_PATH = '/afa-brochure-accountants-v1.0.1.pdf'
const JASON_EMAIL = 'jason@australianfinancialadvisory.com.au'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absUrl(PATH) },
  openGraph: { title: `${title} | AFA`, description, url: absUrl(PATH) },
  // Public since 13 November 2026 (polish brief v1.0.0, item 5). The page was
  // noindex while the wording was being settled; it now indexes like the rest
  // of the site, which inherits index/follow from the root layout.
  // afa-documents CLAUDE.md mobile-first rule. Set per page, so nothing else
  // on the site changes in this build.
  formatDetection: { telephone: false },
}

const services: string[] = [
  'Assessment of the financial position and options',
  'Small business restructuring eligibility',
  'Informal restructure and turnaround options',
  'Voluntary administration assessment',
  'Orderly wind down where closing is the right answer',
  'Director exposure review, including DPN risk and personal guarantees',
  'Negotiation with commercial creditors under signed authority',
  'Commercial credit file review',
]

interface ProcessStep {
  n: number
  title: string
  body: string
}

interface ProcessGroup {
  owner: string
  stage: string
  steps: ProcessStep[]
}

const processGroups: ProcessGroup[] = [
  {
    owner: 'Your firm',
    stage: 'Spot it and refer',
    steps: [
      {
        n: 1,
        title: 'Spot the signs',
        body: "You notice insolvency indicators in a client's file.",
      },
      {
        n: 2,
        title: 'Raise it with the client',
        body: 'You talk it through with the director.',
      },
      {
        n: 3,
        title: 'Refer the client',
        body: 'You introduce the client to us by phone or email.',
      },
    ],
  },
  {
    owner: 'Australian Financial Advisory',
    stage: 'Assess and report',
    steps: [
      {
        n: 4,
        title: 'Engagement',
        body: 'We meet the director and agree the engagement.',
      },
      {
        n: 5,
        title: 'Client sign off',
        body: 'The scope is set out in writing and approved by the client before any work starts.',
      },
      {
        n: 6,
        title: 'Gather the information',
        body: 'Up to date financials, ATO portal balances, any Director Penalty Notices, and current lending where a personal guarantee may apply.',
      },
      {
        n: 7,
        title: 'Prepare the report',
        body: 'A written report giving the full picture, a risk profile and the potential options.',
      },
      {
        n: 8,
        title: 'Options to work through',
        body: 'The client receives the options and decides on the path forward.',
      },
    ],
  },
  {
    owner: 'Next step',
    stage: 'The right specialist',
    steps: [
      {
        n: 9,
        title: 'Your insolvency partner',
        body: 'If you work with an insolvency practitioner, the client can be referred on to them with our report.',
      },
      {
        n: 10,
        title: 'Or one of ours',
        body: "If you don't, we can introduce one of our licensed partners.",
      },
    ],
  },
]

const firmActions: string[] = [
  "Keep each director's address on the ASIC register current. That is where the ATO generally sends a DPN, and the 21 days start the day it is posted there.",
  "Check the client's address and contact details held by the ATO are up to date.",
  'Check your firm-wide ATO portal communication history regularly for any DPN or warning letter issued to your clients.',
  'Keep BAS, PAYG withholding and super reporting on time, even when the client cannot pay.',
  'Call us the day a DPN appears, so every option inside the 21 days stays open.',
]

const indicators: string[] = [
  'Carrying ATO debt that keeps growing',
  'Falling behind on lodgements, PAYG withholding or super',
  'Worried about a Director Penalty Notice or personal exposure',
  'Receiving letters of demand or a statutory demand',
  'Under sustained cash flow pressure',
  'Struggling to pay debts as they fall due',
  'Talking about closing the company',
  'Being told liquidation is the only option',
  'Running a viable business held back by old debt',
]

const referralBenefits: string[] = [
  'Your client hears every realistic pathway, not just the last one',
  'The tax, accounting and compliance work stays with your practice',
  'You have somewhere to send a client in distress, whether or not you already work with an insolvency practitioner',
  "You stay informed, with your client's consent, as the matter moves forward",
  'A business worth saving gets the chance to keep trading',
]

const listItem: React.CSSProperties = {
  fontSize: 16,
  color: '#444444',
  lineHeight: 1.75,
  marginBottom: 12,
  paddingLeft: 24,
  position: 'relative',
}

const marker: React.CSSProperties = {
  position: 'absolute',
  left: 0,
  color: '#6E3E8F',
  fontWeight: 700,
}

const numeral: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  color: '#6E3E8F',
  letterSpacing: 1,
  textTransform: 'uppercase',
  marginBottom: 8,
}

/**
 * Card copy at 16 px. The shared `cardBody` export is 14 px, which is fine for
 * the short card text elsewhere on the site but sits under the 16 px body-text
 * floor in afa-documents CLAUDE.md, and the cards on this page carry real
 * reading content (service descriptions, the ten process steps, the DPN
 * explanations). Scoped to this page on purpose: raising the shared export
 * would restyle all 14 routes, which is tracked separately as FU-168.
 */
const cardText: React.CSSProperties = { ...cardBody, fontSize: 16 }

/**
 * Tap-to-call and email. Rendered after the key insolvency indicators section
 * (id="contact", the target of the hero button) and again at the foot with the
 * brochure's closing lines.
 */
function TalkToUs({ id, closing = false }: { id: string; closing?: boolean }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mobile-section"
      style={{ backgroundColor: '#1a1a3e', padding: '80px 0' }}
    >
      <div style={{ maxWidth: SECTION_WIDTH, margin: '0 auto', padding: '0 32px' }}>
        <SectionLabel text="Get started" light />
        <h2
          id={`${id}-heading`}
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          Talk to us about working together
        </h2>
        {closing && (
          <>
            <p style={{ ...bodyTextLight, fontSize: 18 }}>
              Help your client act while there are still options.
            </p>
            <p style={bodyTextLight}>
              If a client is under pressure, reach out. A quick conversation is
              all it takes to start.
            </p>
          </>
        )}
        <div
          className="mobile-two-col"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            marginTop: 28,
          }}
        >
          <a
            href={`tel:${PHONE_TEL}`}
            className="mobile-full-button afa-button-light"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              minHeight: 52,
              backgroundColor: '#ffffff',
              color: '#1a1a3e',
              borderRadius: 50,
              padding: '14px 28px',
              fontSize: 16,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <Phone size={18} aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${JASON_EMAIL}`}
            className="mobile-full-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              minHeight: 52,
              border: '1px solid rgba(255,255,255,0.5)',
              color: '#ffffff',
              borderRadius: 50,
              padding: '14px 24px',
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <Mail size={18} aria-hidden="true" />
            Email Jason
          </a>
        </div>
        <p
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.7,
            marginTop: 18,
          }}
        >
          We will never refer your client to another tax agent or accountant.
        </p>
      </div>
    </section>
  )
}

export default function AccountantsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          path: PATH,
          name: 'Referral support for accountancy firms',
          description,
        })}
      />
      <NavBar />
      <main id="main">
        <PageHero
          eyebrow="Referral information for accountancy firms"
          title={
            <>
              Early advice.
              <br />
              Better options.
              <br />
              Same accountant.
            </>
          }
          intro="When a client is in financial distress, you are usually the first to know."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'For accountancy firms' },
          ]}
          cta={{ label: 'Talk to us about working together', href: '#contact' }}
          wave
        />

        <section
          aria-label="How we work with your practice"
          className="mobile-section"
          style={{ backgroundColor: '#ffffff', padding: '80px 0' }}
        >
          <div style={{ maxWidth: SECTION_WIDTH, margin: '0 auto', padding: '0 32px' }}>
            <p style={{ ...bodyText, fontSize: 18 }}>
              Australian Financial Advisory gives your clients early,
              independent support on their options, while you stay their
              accountant. We sit beside your practice, not in place of it.
            </p>
            <p style={bodyText}>
              We provide assessment and advisory services and written reports.
              Where a formal process or other specialist work is required, we
              refer to appropriately licensed practitioners within our network.
            </p>
            <div
              className="mobile-three-col"
              style={{
                ...calloutBox,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 24,
                marginTop: 32,
              }}
            >
              <div>
                <p style={numeral}>Speak with us</p>
                <p style={{ ...cardText, marginBottom: 6 }}>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    style={{ color: '#6E3E8F', fontWeight: 700 }}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>
              <div>
                <p style={numeral}>Offices</p>
                <p style={cardText}>
                  Gold Coast
                  <br />
                  Brisbane
                  <br />
                  Sydney
                </p>
              </div>
              <div>
                <p style={numeral}>Hours</p>
                <p style={cardText}>
                  Monday to Friday
                  <br />
                  8:30 to 5:30
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContentSection
          id="working-with-your-practice"
          label="Working with your practice"
          heading="Built for small and busy practices"
          tone="panel"
          maxWidth={SECTION_WIDTH}
        >
          <p style={bodyText}>
            Many accounting firms have small teams. When a client hits financial
            distress, you may not have the people or the specialist expertise to
            work through the options with them. Sending that client to a bigger
            firm or somewhere else can mean losing them.
          </p>
          <p style={{ ...bodyText, marginBottom: 0 }}>
            We give you another option. You keep the client, and we add the
            expertise. We work alongside you to assess the position and guide
            the client through a tough period, so they have the best chance of
            coming back to you as a stronger business. We will not refer your
            client to another tax agent or accountant.
          </p>
        </ContentSection>

        <ContentSection
          id="why-refer-early"
          label="Why refer early"
          heading="Options before liquidation"
          maxWidth={SECTION_WIDTH}
        >
          <p style={bodyText}>
            By the time most directors reach a liquidator, the choices have
            narrowed. An early conversation keeps more of them open.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {referralBenefits.map((item) => (
              <li key={item} style={listItem}>
                <span aria-hidden="true" style={marker}>
                  &ndash;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection
          id="what-we-help-with"
          label="Our services"
          heading="What we help with"
          tone="panel"
          maxWidth={SECTION_WIDTH}
        >
          <p style={{ ...bodyText, maxWidth: PROSE_WIDTH }}>
            Every matter starts with an assessment. The director gets a clear,
            written read on where the business stands and what can realistically
            be done.
          </p>
          <div className="afa-services" style={{ marginTop: 28 }}>
            {services.map((service, index) => (
              <div key={service} style={cardStyle}>
                <p style={numeral}>{String(index + 1).padStart(2, '0')}</p>
                <p style={{ ...cardText, fontWeight: 600, color: '#1a1a3e' }}>
                  {service}
                </p>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection
          id="process"
          label="The process"
          heading="From first signs to clear options"
          maxWidth={SECTION_WIDTH}
        >
          <p style={{ ...bodyText, maxWidth: PROSE_WIDTH }}>
            Ten steps, with your firm involved from start to finish.
          </p>
          {processGroups.map((group) => (
            <div key={group.owner} style={{ marginTop: 36 }}>
              <SectionLabel text={group.owner} />
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#1a1a3e',
                  marginBottom: 18,
                }}
              >
                {group.stage}
              </h3>
              <div className={`afa-phase afa-phase--${group.steps.length}`}>
                {group.steps.map((step) => (
                  <div key={step.n} style={cardStyle}>
                    <p style={numeral}>{String(step.n).padStart(2, '0')}</p>
                    <p style={cardTitle}>{step.title}</p>
                    <p style={cardText}>{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p style={{ ...bodyText, marginTop: 32, marginBottom: 0 }}>
            Either way, we work alongside your firm. Your client&apos;s
            accounting and tax work stays with your practice, and we will not
            refer your client to another tax agent or accountant. We do not take
            formal appointments.
          </p>
        </ContentSection>

        <ContentSection
          id="dpn"
          label="Director Penalty Notices"
          heading="When company debt becomes personal"
          tone="navy"
          maxWidth={SECTION_WIDTH}
        >
          <p style={{ ...bodyTextLight, maxWidth: PROSE_WIDTH }}>
            A Director Penalty Notice can make your client personally liable for
            the company&apos;s unpaid PAYG withholding, GST and super guarantee
            charge. The ATO can start recovery 21 days after the notice is
            issued. Resigning does not remove the liability, and penalties can
            be recovered from every director.
          </p>
          <div
            className="mobile-two-col"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
              marginTop: 28,
            }}
          >
            <div style={cardStyle}>
              <p style={numeral}>Reported on time</p>
              <p style={cardTitle}>Options remain open</p>
              <p style={cardText}>
                Where the amounts were reported within 3 months of the due date
                (by the due date for super guarantee charge), the penalty can be
                remitted within the 21 days by paying in full, appointing an
                administrator or small business restructuring practitioner, or
                winding up the company.
              </p>
            </div>
            <div style={cardStyle}>
              <p style={numeral}>Reported late or not at all</p>
              <p style={cardTitle}>Only one way out</p>
              <p style={cardText}>
                Where the amounts were reported late, or never reported, the
                only way to remit the penalty is to pay the company&apos;s debt
                in full. Amounts the ATO has estimated are treated as never
                reported.
              </p>
            </div>
          </div>
        </ContentSection>

        <ContentSection
          id="what-your-firm-can-do"
          label="Staying on top of it"
          heading="What your firm can do"
          maxWidth={SECTION_WIDTH}
        >
          <p style={bodyText}>
            The 21 days run from the date the notice is issued, not the date
            your client opens it. Something needs to happen inside that window.
          </p>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {firmActions.map((action, index) => (
              <li key={action} style={{ ...listItem, paddingLeft: 28 }}>
                <span aria-hidden="true" style={marker}>
                  {index + 1}
                </span>
                {action}
              </li>
            ))}
          </ol>
        </ContentSection>

        <ContentSection
          id="personal-assets"
          label="Personal assets at risk"
          heading="Could your client lose their home?"
          tone="panel"
          maxWidth={SECTION_WIDTH}
        >
          <p style={bodyText}>
            A director penalty is a personal debt. If it is not paid, the ATO
            can offset the director&apos;s tax refunds and take legal action
            against them personally. Where a director cannot pay, personal
            assets, including the family home, may be at risk.
          </p>
          <p style={bodyText}>
            Personal guarantees behind company loans, equipment finance and
            leases can put the home on the line as well. Many directors do not
            realise how much they have signed until a creditor calls on it. We
            review the director&apos;s exposure and set out the options before
            the window closes.
          </p>
          <p
            style={{
              fontSize: 13,
              color: '#555555',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Source: Australian Taxation Office, Director penalties, last updated
            16 April 2026. General information only, not tax advice.
          </p>
        </ContentSection>

        <ContentSection
          id="indicators"
          label="Key insolvency indicators"
          heading="When to start the conversation"
          maxWidth={SECTION_WIDTH}
        >
          <p style={bodyText}>
            These are key insolvency indicators. It&apos;s worth considering a
            referral when a client is:
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 20px',
            }}
          >
            {indicators.map((item) => (
              <li key={item} style={listItem}>
                <span aria-hidden="true" style={marker}>
                  &ndash;
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p
            style={{
              ...bodyText,
              marginBottom: 0,
              fontWeight: 600,
              color: '#1a1a3e',
            }}
          >
            If you are not sure, call us. We will tell you either way.
          </p>
        </ContentSection>

        <TalkToUs id="contact" />

        <ContentSection
          id="who-you-will-deal-with"
          heading="Who you will deal with"
          tone="panel"
          maxWidth={SECTION_WIDTH}
        >
          <div style={cardStyle}>
            <p style={cardTitle}>
              Jason Baker, Director and Chartered Accountant
            </p>
            <p style={cardText}>
              Your direct contact for every referral, and the person who signs
              each written advisory report.
            </p>
          </div>
        </ContentSection>

        <section
          aria-label="Download the brochure"
          style={{ backgroundColor: '#ffffff', padding: '48px 0' }}
        >
          <div style={{ maxWidth: SECTION_WIDTH, margin: '0 auto', padding: '0 32px' }}>
            <a
              href={PDF_PATH}
              className="mobile-full-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                minHeight: 48,
                border: '1px solid #9b8ec4',
                color: '#1a1a3e',
                borderRadius: 50,
                padding: '12px 26px',
                fontSize: 16,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <Download size={18} aria-hidden="true" />
              Download the PDF
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <TalkToUs id="talk-to-us" closing />

        <section
          aria-label="Disclaimer"
          style={{ backgroundColor: '#ffffff', padding: '48px 0 64px' }}
        >
          <div style={{ maxWidth: SECTION_WIDTH, margin: '0 auto', padding: '0 32px' }}>
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#1a1a3e',
                marginBottom: 6,
              }}
            >
              Australian Financial Advisory Pty Ltd
            </p>
            <p style={{ fontSize: 13, color: '#555555', marginBottom: 6 }}>
              ABN 73 680 451 129 &middot; ACN 680 451 129
            </p>
            <p style={{ fontSize: 13, color: '#555555', marginBottom: 18 }}>
              Gold Coast &middot; Brisbane &middot; Sydney &middot; Melbourne
              &middot; Australia wide
            </p>
            <p
              style={{
                fontSize: 13,
                color: '#555555',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Australian Financial Advisory Pty Ltd provides general information
              and advisory services only. Any information in this brochure is
              general in nature and does not constitute legal, financial,
              taxation, or insolvency advice. We are not registered insolvency
              practitioners, registered liquidators, credit licensees, tax
              agents, AFSL holders or a law firm. Formal appointments and other
              specialist services are referred to appropriately licensed
              partners within our network. You should seek independent
              professional advice before acting on any information in this
              brochure. Australian Financial Advisory Pty Ltd accepts no
              liability for any loss or damage arising from reliance on
              information contained in this brochure.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
