"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { trackEvent } from "@/lib/analytics"
import { useState } from "react"
import { ApplyModal } from "./apply-modal"
import Image from "next/image"

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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export function FinalCTA() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)

  const handleApplyClick = () => {
    trackEvent("click_apply", { location: "final_cta" })
    setIsApplyModalOpen(true)
  }

  const handleBookCallClick = () => {
    trackEvent("click_book_call", { location: "final_cta" })
    window.open(siteConfig.footer.contact.calendar, "_blank")
  }

  return (
    <>
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/crowd-demoday.jpg"
                alt="GIRAF Demo Day Community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32" id="apply">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-primary/5 rounded-2xl p-12 md:p-16 border-2 border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance">{siteConfig.finalCTA.title}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={handleApplyClick} className="text-lg px-8">
                {siteConfig.finalCTA.primaryCTA}
                <ArrowRightIcon />
              </Button>
              <Button size="lg" variant="outline" onClick={handleBookCallClick} className="text-lg px-8 bg-transparent">
                {siteConfig.finalCTA.secondaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <ApplyModal open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen} />
    </>
  )
}
