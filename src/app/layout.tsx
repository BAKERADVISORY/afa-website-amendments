import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { JsonLd } from '@/components/JsonLd'
import {
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
  organizationGraph,
} from '@/lib/site'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const viewport: Viewport = {
  themeColor: '#1a1a3e',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Australian Financial Advisory | Pre-Insolvency Advisory',
    template: '%s | AFA',
  },
  description:
    'Assessment and referral for company directors facing ATO debt, Director Penalty Notice risk or cash-flow pressure. Gold Coast, Brisbane, Sydney, Australia-wide. Free initial consultation.',
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: 'Australian Financial Advisory | Pre-Insolvency Advisory',
    description:
      'Assessment and referral for company directors facing ATO debt, Director Penalty Notice risk or cash-flow pressure. Free initial consultation.',
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: 'Australian Financial Advisory. Pre-insolvency advisory for company directors.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australian Financial Advisory | Pre-Insolvency Advisory',
    description:
      'Assessment and referral for company directors facing ATO debt, Director Penalty Notice risk or cash-flow pressure. Free initial consultation.',
    images: [OG_IMAGE_PATH],
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" className={`${manrope.variable} h-full antialiased`}>
      <head>
        {/*
          Tracking block (GTM-M672BXC4, G-B226QNH900) left exactly as deployed.
          Known consent blocker: these tags fire without a consent mechanism.
          Recorded as HARD STOP 3 in afa-project compliance-register. Any change
          here needs a consent-management decision from the operator first.
        */}
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
        <JsonLd data={organizationGraph()} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M672BXC4" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
