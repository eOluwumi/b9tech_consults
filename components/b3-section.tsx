"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, Repeat, Sparkles, Globe, Shield, Zap } from "lucide-react"
import Image from "next/image"

export function B3Section() {
  return (
    <section id="b3" className="relative overflow-hidden bg-slate-950 px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-950" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3">
            <div className="relative h-8 w-8">
              <Image src="/images/b3-logo.png" alt="B3 Logo" fill className="object-contain" />
            </div>
            <span className="font-semibold text-white">B9TECH product initiative</span>
            <Sparkles className="h-4 w-4 text-blue-400" />
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            B3: <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">BringBackBarter</span>
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300">
            We are developing a digital barter marketplace to help people discover exchange opportunities and coordinate value beyond cash transactions.
          </p>
          <div className="mt-6">
            <Badge className="border border-amber-300/30 bg-amber-400/10 px-4 py-2 text-amber-200">Public prototype · Core workflows in development</Badge>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Card className="overflow-hidden border-white/10 bg-white/[0.04]">
            <CardHeader className="border-b border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16">
                  <Image src="/images/b3-logo.png" alt="B3 Logo" fill className="object-contain" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">BringBackBarter</CardTitle>
                  <p className="mt-2 text-sm text-slate-400">A product being built and validated</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-7 p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-white/[0.04] p-5 text-center">
                  <Users className="mx-auto mb-3 h-7 w-7 text-blue-400" />
                  <p className="font-semibold text-white">Community-led</p>
                  <p className="mt-1 text-xs text-slate-400">Designed around people and exchange</p>
                </div>
                <div className="rounded-xl bg-white/[0.04] p-5 text-center">
                  <Repeat className="mx-auto mb-3 h-7 w-7 text-purple-400" />
                  <p className="font-semibold text-white">Barter-first</p>
                  <p className="mt-1 text-xs text-slate-400">Exchange value beyond cash</p>
                </div>
                <div className="rounded-xl bg-white/[0.04] p-5 text-center">
                  <Shield className="mx-auto mb-3 h-7 w-7 text-emerald-400" />
                  <p className="font-semibold text-white">Trust-aware</p>
                  <p className="mt-1 text-xs text-slate-400">Safety and trust under development</p>
                </div>
              </div>
              <Button asChild className="w-full bg-blue-600 py-6 text-white hover:bg-blue-700">
                <a href="https://www.barternaija.com.ng" target="_blank" rel="noopener noreferrer">
                  Explore the B3 prototype <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-center text-sm leading-6 text-slate-400">
                The public site is available for exploration. Do not assume all marketplace workflows are production-ready or that a displayed interaction represents a completed exchange.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-5">
            {[
              { icon: Shield, title: "Trust and safety", description: "Working through authentication, access control, privacy and safer exchange practices." },
              { icon: Globe, title: "Community-centred commerce", description: "Exploring how people can communicate needs, available items and fair exchange intentions." },
              { icon: Zap, title: "Iterative product engineering", description: "Building and validating the platform in stages, with reliability and user trust as release requirements." },
            ].map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-white/10 bg-white/[0.04]">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15">
                    <Icon className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-white/15 pt-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">The product story</p>
            <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">A closer look at BringBackBarter</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">Explore the idea and development journey behind B3, B9TECH's barter marketplace initiative.</p>
          </div>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black p-2 shadow-2xl">
            <div className="aspect-video overflow-hidden rounded-xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/xO-QVXPeaAw"
                title="B3: Bring Back Barter video"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-slate-400">
            <a href="https://www.youtube.com/watch?v=xO-QVXPeaAw" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
              Watch directly on YouTube
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
