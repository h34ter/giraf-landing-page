import { siteConfig } from "@/lib/site-config"

export function ResultsMetrics() {
  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Results that matter</h2>
          <p className="text-lg text-secondary-foreground/80 leading-relaxed">
            Our founders don't just build—they raise capital and grow.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {siteConfig.results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">{result.metric}</div>
              <div className="text-sm md:text-base text-secondary-foreground/80">{result.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
