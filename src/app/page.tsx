import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { HeroSection } from '@/components/HeroSection'
import { AboutServicesSection } from '@/components/AboutServicesSection'
import { DPNSection } from '@/components/DPNSection'
import { WhyChooseSection } from '@/components/WhyChooseSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { TeamSection } from '@/components/TeamSection'
import { FAQSection } from '@/components/FAQSection'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { SITE_URL, webPageSchema } from '@/lib/site'

const title = 'Australian Financial Advisory | Pre-Insolvency Advisory'
const description =
  'Assessment and referral for company directors facing ATO debt, Director Penalty Notice risk or cash-flow pressure. Gold Coast, Brisbane, Sydney, Australia-wide. Free initial consultation.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/`,
  },
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: '/',
          name: title,
          description,
          about: 'Pre-insolvency advisory for Australian company directors',
        })}
      />
      <NavBar />
      <main id="main">
        <HeroSection />
        <AboutServicesSection />
        <DPNSection />
        <HowItWorksSection />
        <WhyChooseSection />
        <TeamSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
