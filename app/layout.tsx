import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "GIRAF — Get Investment Ready by Accelerator Frankfurt",
  description:
    "We pair founders with senior product/tech squads to ship an investable MVP and a clear fundraising story—fast.",
  keywords: ["accelerator", "MVP development", "startup", "fundraising", "Frankfurt", "tech squad", "investment ready"],
  authors: [{ name: "GIRAF by Accelerator Frankfurt" }],
  creator: "GIRAF",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "GIRAF — Get Investment Ready by Accelerator Frankfurt",
    description:
      "We pair founders with senior product/tech squads to ship an investable MVP and a clear fundraising story—fast.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "GIRAF — Get Investment Ready by Accelerator Frankfurt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIRAF — Get Investment Ready by Accelerator Frankfurt",
    description:
      "We pair founders with senior product/tech squads to ship an investable MVP and a clear fundraising story—fast.",
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@giraf",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GIRAF",
              alternateName: "Get Investment Ready by Accelerator Frankfurt",
              description:
                "We pair founders with senior product/tech squads to ship an investable MVP and a clear fundraising story—fast.",
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Frankfurt am Main",
                addressCountry: "Germany",
              },
              sameAs: ["https://linkedin.com/company/giraf", "https://twitter.com/giraf"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GIRAF",
              url: siteConfig.url,
              description:
                "We pair founders with senior product/tech squads to ship an investable MVP and a clear fundraising story—fast.",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
