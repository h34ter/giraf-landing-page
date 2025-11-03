import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30" id="book-call">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-2">GIRAF™</div>
            <p className="text-sm text-steel leading-relaxed">{siteConfig.tagline}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${siteConfig.footer.contact.email}`}
                className="text-steel hover:text-foreground transition-colors"
              >
                {siteConfig.footer.contact.email}
              </a>
              <a
                href={siteConfig.footer.contact.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel hover:text-foreground transition-colors"
              >
                Book a call
              </a>
              <p className="text-steel mt-2">{siteConfig.footer.contact.address}</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer legal navigation">
              {siteConfig.footer.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-steel hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-steel text-center">© 2025 GIRAF™ by Accelerator Frankfurt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
