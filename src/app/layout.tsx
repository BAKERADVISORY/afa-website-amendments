import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { ConsentBanner } from '@/components/ConsentBanner'
import { JsonLd } from '@/components/JsonLd'
import { CONSENT_DEFAULT_SCRIPT, CONSENT_STORAGE_KEY } from '@/lib/consent'
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
          Consent Mode defaults must be the first script: every storage signal is
          denied until the visitor accepts in ConsentBanner. IDs GTM-M672BXC4 and
          G-B226QNH900 are unchanged.
          GTM itself loads only after consent (stored or just given): the
          container runs a Meta Pixel template that grants its own consent, which
          Consent Mode cannot hold back. The standard GTM snippet is wrapped, not
          altered; window.afaLoadGtm runs it once.
        */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SCRIPT }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.afaLoadGtm=function(){if(window.afaGtmLoaded)return;window.afaGtmLoaded=true;(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M672BXC4');};try{if(localStorage.getItem('${CONSENT_STORAGE_KEY}')==='granted')window.afaLoadGtm();}catch(e){}`,
          }}
        />
        {/* defer, not async: React hoists async src scripts above the consent defaults. */}
        <script
          defer
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
        {/* No GTM noscript iframe: without JavaScript no consent can be given. */}
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ConsentBanner />
        {children}
      </body>
    </html>
  )
}
