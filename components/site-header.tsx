"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { trackEvent } from "@/lib/analytics"
import { ApplyModal } from "./apply-modal"

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleApplyClick = () => {
    trackEvent("click_apply", { location: "header" })
    setIsApplyModalOpen(true)
  }

  const handleBookCallClick = () => {
    trackEvent("click_book_call", { location: "header" })
    window.open(siteConfig.footer.contact.calendar, "_blank")
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-sm text-steel hidden sm:inline">Accelerator Frankfurt</span>
              <span className="text-sm text-steel hidden sm:inline">·</span>
              <span className="text-xl font-bold tracking-tight">GIRAF™</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {siteConfig.nav.slice(0, 2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="outline" size="sm" onClick={handleBookCallClick}>
                Book a Call
              </Button>
              <Button size="sm" onClick={handleApplyClick}>
                Apply as Founder
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border" aria-label="Mobile navigation">
              <div className="flex flex-col gap-4">
                {siteConfig.nav.slice(0, 2).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    handleBookCallClick()
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Book a Call
                </Button>
                <Button
                  className="w-full"
                  onClick={() => {
                    handleApplyClick()
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Apply as Founder
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
      <ApplyModal open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen} />
    </>
  )
}
