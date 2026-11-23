"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Repeat2, ShieldCheck, Users, Code2 } from "lucide-react"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-slate-900 px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Selected work & product development</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">Building, testing and learning in the open.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We are developing a public body of work that shows how B9TECH approaches real technical problems. We distinguish working prototypes, research and completed delivery rather than presenting them as the same thing.
          </p>
        </div>

        <Card className="overflow-hidden border-white/10 bg-white/[0.04]">
          <div className="grid lg:grid-cols-2">
            <div className="flex min-h-[320px] flex-col justify-between bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-8 md:p-10">
              <div className="flex items-center justify-between">
                <Badge className="border border-amber-300/30 bg-amber-400/10 text-amber-200">Prototype in development</Badge>
                <Repeat2 className="h-8 w-8 text-blue-300" />
              </div>
              <div>
                <p className="mb-2 font-semibold text-blue-300">B9TECH product initiative</p>
                <h3 className="text-3xl font-bold text-white md:text-4xl">B3: BringBackBarter</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  A digital barter marketplace concept exploring how people can discover exchange opportunities and coordinate value beyond cash transactions.
                </p>
              </div>
            </div>
            <CardContent className="flex flex-col justify-center p-8 md:p-10">
              <h4 className="text-xl font-semibold text-white">Product engineering in practice</h4>
              <p className="mt-4 leading-7 text-slate-300">
                B3 gives us a practical environment to work through product architecture, authentication, user experience, data protection and trust-aware marketplace design. The public website is accessible, while core marketplace workflows remain under development and validation.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <span>Authentication, privacy and access-control considerations</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <span>Community, trust and exchange experience design</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300 sm:col-span-2">
                  <Code2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <span>Iterative product development and technical validation</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                  <a href="https://www.barternaija.com.ng" target="_blank" rel="noopener noreferrer">
                    View B3 prototype <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                  <a href="#contact">Discuss a project</a>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        <p className="mt-8 text-sm leading-6 text-slate-400">
          Further case studies will be added as projects have documented scope, verifiable outcomes and permission for public disclosure. No client results or performance claims are implied where evidence has not been published.
        </p>
      </div>
    </section>
  )
}
