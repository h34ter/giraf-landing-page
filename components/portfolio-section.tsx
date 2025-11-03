"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"
import { trackEvent } from "@/lib/analytics"

export function PortfolioSection() {
  const handlePortfolioClick = (companyName: string) => {
    trackEvent("click_portfolio_tile", { company: companyName })
  }

  return (
    <section className="py-20 md:py-32 bg-muted/30" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Portfolio</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteConfig.portfolio.map((company, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handlePortfolioClick(company.name)}
            >
              <div className="relative h-32 bg-muted flex items-center justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">{company.name}</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-steel">
                    <span className="font-semibold text-foreground">Problem:</span> {company.problem}
                  </p>
                  <p className="text-steel">
                    <span className="font-semibold text-foreground">Built:</span> {company.built}
                  </p>
                  <p className="text-steel">
                    <span className="font-semibold text-foreground">Outcome:</span> {company.outcome}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
