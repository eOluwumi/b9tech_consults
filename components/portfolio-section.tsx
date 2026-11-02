"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Repeat2, ShieldCheck, Users, Globe } from "lucide-react"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-black" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Globe className="h-4 w-4 text-purple-400" />
            <span className="text-purple-300 font-medium">Selected Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Built to Solve <span className="text-purple-400">Real Problems</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We prioritise demonstrable work over inflated project lists. Our public flagship product is B3: BringBackBarter.
          </p>
        </div>
        <Card className="glass border-white/20 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="min-h-64 bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950 p-10 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30">Live product</Badge>
                <Repeat2 className="h-8 w-8 text-blue-300" />
              </div>
              <div>
                <p className="text-blue-300 font-semibold mb-2">B9TECH flagship platform</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white">B3: BringBackBarter</h3>
                <p className="text-slate-300 mt-4">A digital marketplace designed to help people exchange value through barter and community-led commerce.</p>
              </div>
            </div>
            <CardContent className="p-8 md:p-10 flex flex-col justify-center">
              <h4 className="text-white text-xl font-semibold mb-4">A product-led approach</h4>
              <p className="text-slate-300 leading-relaxed mb-6">
                B3 is the public product through which we explore digital marketplace design, trust, user experience and technology-enabled exchange. Visit the live platform to assess the product directly.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-blue-400 mt-1" />
                  <span className="text-slate-300 text-sm">Trust-aware digital experiences</span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-blue-400 mt-1" />
                  <span className="text-slate-300 text-sm">Community-centred commerce</span>
                </div>
              </div>
              <Button asChild className="w-full sm:w-fit bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <a href="https://barternaija.com.ng" target="_blank" rel="noopener noreferrer">
                  Explore B3 <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </div>
        </Card>
        <p className="text-center text-slate-400 text-sm mt-8">
          Additional case studies will be published when project scope and client permissions allow public disclosure.
        </p>
      </div>
    </section>
  )
}
