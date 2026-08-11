import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.australianfinancialadvisory.com.au'),
  title: {
    default:
      'Australian Financial Advisory | Pre-Insolvency & Business Restructuring Gold Coast',
    template: '%s | Australian Financial Advisory',
  },
  description:
    'Pre-insolvency advisory for company directors across Gold Coast and Australia. Assessment and referral. Call (07) 2113 3069.',
  keywords: [
    'solvency advice company directors Australia',
    'voluntary administration Queensland',
    'small business restructuring Gold Coast',
    'creditors voluntary liquidation Australia',
    'debt negotiation company directors',
    'pre-insolvency advice Gold Coast',
    'business restructuring Gold Coast QLD',
    'insolvency practitioners Queensland',
    'company director debt advice Australia',
  ],
  authors: [{ name: 'Australian Financial Advisory' }],
  creator: 'Australian Financial Advisory',
  publisher: 'Australian Financial Advisory',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.australianfinancialadvisory.com.au',
    siteName: 'Australian Financial Advisory',
    title:
      'Australian Financial Advisory | Pre-Insolvency & Business Restructuring Gold Coast',
    description:
      'Pre-insolvency advisory for company directors across Gold Coast and Australia. Assessment and referral.',
    images: [
      {
        url: '/images/business-meeting.webp',
        width: 1200,
        height: 630,
        alt: 'Australian Financial Advisory - Business Restructuring Experts Gold Coast QLD',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Australian Financial Advisory | Pre-Insolvency & Business Restructuring Gold Coast',
    description:
      'Pre-insolvency advisory for company directors across Gold Coast and Australia. Assessment and referral.',
    images: ['/images/business-meeting.webp'],
  },
  alternates: {
    canonical: 'https://www.australianfinancialadvisory.com.au',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['FinancialService', 'LocalBusiness'],
      '@id': 'https://www.australianfinancialadvisory.com.au/#organization',
      name: 'Australian Financial Advisory',
      alternateName: 'AFA',
      url: 'https://www.australianfinancialadvisory.com.au',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.australianfinancialadvisory.com.au/images/logo-light.svg',
      },
      image:
        'https://www.australianfinancialadvisory.com.au/images/business-meeting.webp',
      description:
        'Australian Financial Advisory is a specialist pre-insolvency and corporate restructuring firm serving company directors across Gold Coast, Queensland and Australia. We provide expert voluntary administration, small business restructuring, creditors voluntary liquidation, and debt negotiation services.',
      telephone: '+61 7 2113 3069',
      email: 'info@australianfinancialadvisory.com.au',
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: '215 Brisbane Road',
          addressLocality: 'Biggera Waters',
          addressRegion: 'QLD',
          postalCode: '4216',
          addressCountry: 'AU',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '310 Edward St',
          addressLocality: 'Brisbane',
          addressRegion: 'QLD',
          postalCode: '4000',
          addressCountry: 'AU',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '75 Pitt St',
          addressLocality: 'Sydney',
          addressRegion: 'NSW',
          postalCode: '2000',
          addressCountry: 'AU',
        },
      ],
      areaServed: [
        {
          '@type': 'State',
          name: 'Queensland',
        },
        {
          '@type': 'State',
          name: 'New South Wales',
        },
        {
          '@type': 'Country',
          name: 'Australia',
        },
      ],
      serviceType: [
        'Pre-Insolvency Advice',
        'Voluntary Administration',
        'Small Business Restructuring',
        'Creditors Voluntary Liquidation',
        'Debt Negotiation',
        'Solvency Advice',
        'Business Restructuring',
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:30',
          closes: '17:30',
        },
      ],
      priceRange: '$$',
      sameAs: [
        'https://www.linkedin.com/company/australian-financial-advisory',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.australianfinancialadvisory.com.au/#website',
      url: 'https://www.australianfinancialadvisory.com.au',
      name: 'Australian Financial Advisory',
      publisher: {
        '@id': 'https://www.australianfinancialadvisory.com.au/#organization',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M672BXC4');`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B226QNH900"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-B226QNH900');
`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M672BXC4" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {children}
      </body>
    </html>
  )
}
