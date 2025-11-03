import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"

export function ValueProps() {
  return (
    <section className="py-20 md:py-32" id="program">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.valueProps.map((prop, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2 text-balance">{prop.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
