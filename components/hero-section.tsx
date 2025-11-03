"use client"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { trackEvent } from "@/lib/analytics"
import { useState } from "react"
import { ApplyModal } from "./apply-modal"

const ArrowRightIcon = () => (
  <svg
    className="ml-2 h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

export function HeroSection() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)

  const handleApplyClick = () => {
    trackEvent("click_apply", { location: "hero" })
    setIsApplyModalOpen(true)
  }

  const handleBookCallClick = () => {
    trackEvent("click_book_call", { location: "hero" })
    window.open(siteConfig.footer.contact.calendar, "_blank")
  }

  return (
    <>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
              {siteConfig.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-steel text-balance mb-8 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={handleApplyClick} className="text-lg px-8">
                {siteConfig.hero.primaryCTA}
                <ArrowRightIcon />
              </Button>
              <Button size="lg" variant="outline" onClick={handleBookCallClick} className="text-lg px-8 bg-transparent">
                {siteConfig.hero.secondaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <ApplyModal open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen} />
    </>
  )
}
