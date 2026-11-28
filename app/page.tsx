"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroSection } from "@/components/hero-section"
import { ResearchSection } from "@/components/research-section"
import { AboutSection } from "@/components/about-section"
import { B3Section } from "@/components/b3-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { NavigationHandler } from "@/components/navigation-handler"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <SidebarProvider>
      <NavigationHandler />
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 px-4 backdrop-blur">
          <SidebarTrigger className="-ml-1" />
          <div className={"ml-4 flex items-center gap-3 transition-all duration-300 " + (isScrolled ? "scale-100 opacity-100" : "scale-95 opacity-0")}>
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 p-2 shadow-lg">
              <Image src="/images/b9-logo-main.png" alt="B9TECH logo" fill className="object-contain p-1" />
            </div>
            <div className="hidden sm:block"><span className="text-lg font-black tracking-tight">B9TECH</span><span className="ml-2 text-sm font-semibold tracking-wider text-muted-foreground">CONSULTS</span></div>
          </div>
          <div className="ml-auto"><ThemeToggle /></div>
        </header>
        <main className="flex-1">
          <section id="home"><HeroSection /></section>
          <ResearchSection />
          <AboutSection />
          <ServicesSection />
          <B3Section />
          <section id="testimonials"><TestimonialsSection /></section>
          <section id="portfolio"><PortfolioSection /></section>
          <section id="blog"><BlogSection /></section>
          <section id="contact"><ContactSection /></section>
          <section id="newsletter"><NewsletterSection /></section>
          <Footer />
          <ChatbotWidget />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
