import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Pre-Insolvency Advice & Business Restructuring | Gold Coast QLD",
  description:
    "Facing financial distress? Australian Financial Advisory provides confidential solvency advice, voluntary administration, small business restructuring and creditors voluntary liquidation services across Gold Coast, Brisbane and Australia. Free consultation.",
  alternates: {
    canonical: "https://www.ausfinancialadvisory.com.au/",
  },
  openGraph: {
    title: "Pre-Insolvency Advice & Business Restructuring | Gold Coast QLD",
    description:
      "Confidential solvency advice, voluntary administration, small business restructuring and CVL for company directors across Gold Coast and Australia.",
    url: "https://www.ausfinancialadvisory.com.au/",
  },
};
import { HeroSection } from "@/components/HeroSection";
import { AboutServicesSection } from "@/components/AboutServicesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { BlogCarousel } from "@/components/BlogCarousel";
import { CTABanner } from "@/components/CTABanner";
import { PartnerLogos } from "@/components/PartnerLogos";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutServicesSection />
        <WhyChooseSection />
        <ComparisonSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogCarousel />
        <CTABanner />
        <PartnerLogos />
      </main>
      <Footer />
    </>
  );
}
