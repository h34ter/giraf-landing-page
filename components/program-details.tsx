import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"
import Image from "next/image"

export function ProgramDetails() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Program details</h2>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mt-8 mb-8">
              <Image
                src="/IMG_4653.heic"
                alt="GIRAF Workshop Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">{siteConfig.programDetails.whatWeBuild.title}</h3>
                <p className="text-steel leading-relaxed">{siteConfig.programDetails.whatWeBuild.description}</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">{siteConfig.programDetails.whoWeBack.title}</h3>
                <ul className="space-y-2" role="list">
                  {siteConfig.programDetails.whoWeBack.items.map((item, index) => (
                    <li key={index} className="text-steel text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">{siteConfig.programDetails.economics.title}</h3>
                <p className="text-steel leading-relaxed">{siteConfig.programDetails.economics.description}</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">{siteConfig.programDetails.ipSecurity.title}</h3>
                <p className="text-steel leading-relaxed">{siteConfig.programDetails.ipSecurity.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
