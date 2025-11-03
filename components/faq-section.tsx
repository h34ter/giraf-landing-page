"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteConfig } from "@/lib/site-config"
import { trackEvent } from "@/lib/analytics"

export function FAQSection() {
  const handleFAQOpen = (question: string) => {
    trackEvent("view_faq", { question })
  }

  return (
    <section className="py-20 md:py-32" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">FAQ</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {siteConfig.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} id={`faq-${index}`}>
                <AccordionTrigger
                  className="text-left text-lg font-semibold"
                  onClick={() => handleFAQOpen(item.question)}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-steel leading-relaxed">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
