import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = "https://b9tech.barternaija.com.ng"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "B9TECH CONSULTS | Enterprise Technology & Responsible AI",
    template: "%s | B9TECH CONSULTS",
  },
  description:
    "B9TECH CONSULTS is a Nigerian technology consultancy focused on enterprise AI strategy, data science, secure digital systems, software engineering and responsible digital transformation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "B9TECH CONSULTS",
    title: "B9TECH CONSULTS | Ethical AI & Technology Solutions",
    description:
      "Enterprise AI, data science, secure digital systems and responsible technology delivery from Nigeria.",
  },
  twitter: {
    card: "summary_large_image",
    title: "B9TECH CONSULTS | Ethical AI & Technology Solutions",
    description:
      "Responsible AI, secure digital systems, and human-centred technology innovation from Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
