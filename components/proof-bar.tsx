import { siteConfig } from "@/lib/site-config"

export function ProofBar() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">{siteConfig.proofBar.title}</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {siteConfig.proofBar.logos.map((logo) => (
            <div
              key={logo}
              className="text-lg font-semibold text-foreground/60 hover:text-foreground transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
