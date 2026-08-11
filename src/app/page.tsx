import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { HeroSection } from '@/components/HeroSection'
import { AboutServicesSection } from '@/components/AboutServicesSection'
import { DPNSection } from '@/components/DPNSection'
import { WhyChooseSection } from '@/components/WhyChooseSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { TeamSection } from '@/components/TeamSection'
import { FAQSection } from '@/components/FAQSection'
import { PartnerLogos } from '@/components/PartnerLogos'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title:
    'Pre-Insolvency Advisory | ATO Debt & Director Penalty Notice Help | Gold Coast & Brisbane',
  description:
    'Facing ATO debt or a Director Penalty Notice? Advisory and referral for directors across Gold Coast, Brisbane and Australia. Call (07) 2113 3069.',
  alternates: {
    canonical: 'https://www.australianfinancialadvisory.com.au/',
  },
  openGraph: {
    title:
      'Pre-Insolvency Advisory | ATO Debt & Director Penalty Notice Help | Gold Coast & Brisbane',
    description:
      'Facing ATO debt or a Director Penalty Notice? Advisory and referral for directors across Gold Coast, Brisbane and Australia. Call (07) 2113 3069.',
    url: 'https://www.australianfinancialadvisory.com.au/',
  },
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutServicesSection />
        <DPNSection />
        <HowItWorksSection />
        <WhyChooseSection />
        <TeamSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <PartnerLogos />
      </main>
      <Footer />
    </>
  )
}
