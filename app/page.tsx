"use client"

import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProofBar } from "@/components/proof-bar"
import { ValueProps } from "@/components/value-props"
import { HowItWorks } from "@/components/how-it-works"
import { ProgramDetails } from "@/components/program-details"
import { ResultsMetrics } from "@/components/results-metrics"
import { PortfolioSection } from "@/components/portfolio-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { trackEvent } from "@/lib/analytics"

export default function Home() {
  useEffect(() => {
    trackEvent("view_hero")
  }, [])

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProofBar />
        <ValueProps />
        <HowItWorks />
        <ProgramDetails />
        <ResultsMetrics />
        <PortfolioSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  )
}
