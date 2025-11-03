import { siteConfig } from "@/lib/site-config"
import Image from "next/image"

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mt-8 mb-8">
            <Image
              src="/01_startups_192.jpg"
              alt="GIRAF Startup Community"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {siteConfig.howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-2">
                  <span className="text-sm font-bold text-primary">{step.step}</span>
                  <span className="text-sm text-steel ml-2">{step.weeks}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{step.description}</p>
                {index < siteConfig.howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-6 w-12 h-0.5 bg-border" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
