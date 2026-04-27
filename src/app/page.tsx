import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { HeroSection } from '@/components/HeroSection'
import { AboutServicesSection } from '@/components/AboutServicesSection'
import { DPNSection } from '@/components/DPNSection'
import { WhyChooseSection } from '@/components/WhyChooseSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { TeamSection } from '@/components/TeamSection'
import { FAQSection } from '@/components/FAQSection'
import { CTABanner } from '@/components/CTABanner'
import { PartnerLogos } from '@/components/PartnerLogos'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title:
    'Pre-Insolvency Advisory | ATO Debt & Director Penalty Notice Help | Gold Coast & Brisbane',
  description:
    'Facing ATO debt, cash flow problems, or a Director Penalty Notice? Australian Financial Advisory helps business owners across Gold Coast, Brisbane and Australia protect personal assets and explore every option before formal insolvency. Early action means more options.',
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/',
  },
  openGraph: {
    title:
      'Pre-Insolvency Advisory | ATO Debt & Director Penalty Notice Help | Gold Coast & Brisbane',
    description:
      'Facing ATO debt, cash flow problems, or a Director Penalty Notice? Australian Financial Advisory helps business owners across Gold Coast, Brisbane and Australia protect personal assets and explore every option before formal insolvency. Early action means more options.',
    url: 'https://www.ausfinancialadvisory.com.au/',
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
        <CTABanner />
        <PartnerLogos />
      </main>
      <Footer />
    </>
  )
}
