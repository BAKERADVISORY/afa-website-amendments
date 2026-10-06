/**
 * Single source of site-wide facts and structured-data builders.
 *
 * Every string here traces to an approved AFA source file:
 * - afa-project\09_MARKETING_AND_SOCIAL\google-business-profile-content-v1.0.2.md
 * - afa-project\09_MARKETING_AND_SOCIAL\citation-targets-v1.0.2.md (canonical NAP)
 * - social-media-kit\05_BUSINESS_PROFILES\afa\approved-copy.md
 * - social-media-kit\05_BUSINESS_PROFILES\afa\compliance-layer.md
 * Do not add pricing, outcomes, statistics, or client examples here.
 */

export const SITE_URL = 'https://www.australianfinancialadvisory.com.au'
export const SITE_NAME = 'Australian Financial Advisory'
export const LEGAL_NAME = 'Australian Financial Advisory Pty Ltd'
export const SHORT_NAME = 'AFA'

export const PHONE_DISPLAY = '(07) 2113 3069'
export const PHONE_TEL = '+61721133069'
export const EMAIL = 'info@australianfinancialadvisory.com.au'

export const ADDRESS = {
  street: '215 Brisbane Road',
  locality: 'Biggera Waters',
  region: 'QLD',
  postcode: '4216',
  country: 'AU',
}

export const ADDRESS_LINE = '215 Brisbane Road, Biggera Waters QLD 4216'

/** Approved service-area line (approved-copy.md, "Reusable lines"). */
export const SERVICE_AREA_LINE = 'Gold Coast, Brisbane, Sydney, Australia-wide.'

/** Approved entity description (GBP business description, pricing-free subset). */
export const ENTITY_DESCRIPTION =
  'Australian Financial Advisory helps company directors get ahead of financial pressure, particularly ATO debt and Director Penalty Notice risk, before it becomes a crisis. We assess your financial position, set out the options in writing, and refer specialist execution work to appropriately licensed practitioners in our network. Serving Gold Coast, Brisbane, Sydney, and Australia-wide. Australian Financial Advisory Pty Ltd is not a registered insolvency practitioner, credit licensee, tax agent, registered liquidator, AFSL holder, or law firm. All specialist services are referred to licensed partners.'

/** Approved entity-status sentence (GBP description and compliance-layer.md). */
export const ENTITY_DISCLAIMER =
  'Australian Financial Advisory Pty Ltd is not a registered insolvency practitioner, credit licensee, tax agent, registered liquidator, AFSL holder, or law firm. All specialist services are referred to licensed partners.'

/** General-information boundary (website disclaimer, compliance-register). */
export const GENERAL_INFORMATION_LINE =
  'The information on this page is general in nature and does not constitute legal, financial, taxation, or insolvency advice. Australian Financial Advisory Pty Ltd provides assessment and advisory services only. All specialist services are referred to appropriately licensed partners. You should seek independent professional advice before acting on any information on this page.'

/** Approved reusable tagline (approved-copy.md). */
export const TAGLINE = 'Assessment first. The right specialist, second.'

/** Content last-updated marker for YMYL pages (this remediation run). */
export const CONTENT_UPDATED_ISO = '2026-10-02'
export const CONTENT_UPDATED_DISPLAY = '2 October 2026'

/** What the free initial consultation covers (GBP services and Q&A, approved-copy.md tile 3). */
export const CONSULTATION_COVERS: string[] = [
  'A confidential first conversation to understand your situation and confirm whether we can help.',
  'The initial consultation is free. There is no cost and no obligation.',
  'Standard professional confidentiality applies.',
  "If we're not the right fit, we'll say so on that call.",
  "Any next step is your decision. We don't push a particular outcome.",
]

export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const OG_IMAGE_PATH = '/images/og-image.jpg'

export function absUrl(path: string): string {
  if (path === '/' || path === '') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

/** Site-wide organisation graph. ProfessionalService is a LocalBusiness subtype with no regulated-financial-services meaning. */
export function organizationGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': ORG_ID,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        alternateName: SHORT_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: absUrl('/images/logo-light.svg'),
        },
        image: absUrl(OG_IMAGE_PATH),
        description: ENTITY_DESCRIPTION,
        telephone: '+61 7 2113 3069',
        email: EMAIL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.locality,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postcode,
          addressCountry: ADDRESS.country,
        },
        areaServed: [
          { '@type': 'City', name: 'Gold Coast' },
          { '@type': 'City', name: 'Brisbane' },
          { '@type': 'City', name: 'Sydney' },
          { '@type': 'Country', name: 'Australia' },
        ],
        audience: {
          '@type': 'BusinessAudience',
          name: 'Company directors and small business owners',
        },
        knowsAbout: [
          'Director Penalty Notices',
          'ATO tax debt and payment plans',
          'Small Business Restructuring',
          'Voluntary administration',
          'Creditors voluntary liquidation',
          'Pre-insolvency options for company directors',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'How we work',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Free initial consultation',
                description:
                  'A confidential first conversation to understand your situation and confirm whether we can help.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Options Assessment',
                description:
                  'A structured review of your financial position and the options available to you.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Initial Advisory Report',
                description:
                  'A written report setting out your financial position, the options available, and recommended next steps, with referral to appropriately licensed specialists where execution work is needed.',
              },
            },
          ],
        },
        sameAs: [
          'https://www.facebook.com/AustralianFinancialAdvisory/',
          'https://www.instagram.com/australianfinancialadvisory/',
          'https://www.linkedin.com/company/australian-financial-advisory/',
          'https://abr.business.gov.au/ABN/View?abn=73680451129',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { '@id': ORG_ID },
        inLanguage: 'en-AU',
      },
    ],
  }
}

export interface WebPageInput {
  path: string
  name: string
  description: string
  about?: string
}

/** Explainer pages describe a process rather than an AFA service. */
export function webPageSchema({ path, name, description, about }: WebPageInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absUrl(path)}#webpage`,
    url: absUrl(path),
    name,
    description,
    ...(about ? { about: { '@type': 'Thing', name: about } } : {}),
    dateModified: CONTENT_UPDATED_ISO,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-AU',
  }
}

export interface ServiceInput {
  path: string
  name: string
  description: string
}

/** AFA options pages: the service is assessment and referral, never the licensed work itself. */
export function serviceSchema({ path, name, description }: ServiceInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absUrl(path)}#service`,
    name,
    serviceType: 'Pre-insolvency options assessment and referral',
    description,
    provider: { '@id': ORG_ID },
    audience: { '@type': 'BusinessAudience', name: 'Company directors' },
    areaServed: { '@type': 'Country', name: 'Australia' },
    url: absUrl(path),
  }
}

export interface FaqItem {
  question: string
  answer: string
}

/** Only call with the exact items rendered visibly on the same page. */
export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export interface BreadcrumbItem {
  name: string
  href?: string
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: absUrl(item.href) } : {}),
    })),
  }
}

export function personSchema(input: {
  id: string
  name: string
  jobTitle: string
  description: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${absUrl('/about')}#${input.id}`,
    name: input.name,
    jobTitle: input.jobTitle,
    description: input.description,
    worksFor: { '@id': ORG_ID },
  }
}
