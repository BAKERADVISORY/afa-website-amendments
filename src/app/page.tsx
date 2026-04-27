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
    'Pre-Insolvency Advisory | ATO Debt & Director Penalty Notices | Gold Coast QLD',
  description:
    'Facing ATO debt, cash flow crisis, or a Director Penalty Notice? Australian Financial Advisory helps business owners protect personal assets and explore every alternative before formal insolvency. Gold Coast, Brisbane, and Australia-wide.',
  alternates: {
    canonical: 'https://www.ausfinancialadvisory.com.au/',
  },
  openGraph: {
    title:
      'Pre-Insolvency Advisory | ATO Debt & Director Penalty Notices | Gold Coast QLD',
    description:
      'Early action protects personal assets. We work for the business owner — not the creditors. Confidential, urgent, and reassuring advice across Australia.',
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
