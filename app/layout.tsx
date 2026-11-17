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
    default: "B9TECH CONSULTS | IT Support, Procurement, Research & Data Science",
    template: "%s | B9TECH CONSULTS",
  },
  description:
    "B9TECH CONSULTS is a Nigerian consulting practice offering IT support operations, technology procurement, applied research, data science, mechanistic interpretation and explainable AI.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "B9TECH CONSULTS",
    title: "B9TECH CONSULTS | IT Support, Procurement, Research & Data Science",
    description:
      "IT support operations, technology procurement, applied research and data science consulting from Nigeria.",
  },
  twitter: {
    card: "summary_large_image",
    title: "B9TECH CONSULTS | IT Support, Procurement, Research & Data Science",
    description:
      "IT support operations, technology procurement, applied research and data science consulting from Nigeria.",
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
