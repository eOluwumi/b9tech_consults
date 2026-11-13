"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, Repeat, TrendingUp, Sparkles, Globe, Shield, Zap } from "lucide-react"
import Image from "next/image"


export function B3Section() {
  return (
    <section id="b3" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900">
        <div className="absolute inset-0 opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-white/20 mb-8">
            <div className="relative h-8 w-8">
              <Image src="/images/b3-logo.png" alt="B3 Logo" fill className="object-contain" />
            </div>
            <span className="text-white font-semibold">Flagship Innovation</span>
            <Sparkles className="h-4 w-4 text-blue-400" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-heading">
            B3:{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              BringBackBarter
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our flagship platform revolutionizes traditional commerce through secure, digital barter technology.
            Experience the future of cashless trading.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Platform Showcase */}
          <Card className="glass border-white/20 shadow-2xl overflow-hidden">
            <CardHeader className="glass border-b border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16">
                    <Image src="/images/b3-logo.png" alt="B3 Logo" fill className="object-contain" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">BringBackBarter</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-blue-500 hover:bg-blue-600 text-white animate-pulse-neon">Live Platform</Badge>
                      <Badge variant="outline" className="border-white/30 text-white">
                        Digital marketplace
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="glass rounded-xl p-5 text-center"><Users className="h-7 w-7 text-blue-400 mx-auto mb-3" /><p className="text-white font-semibold">Community-led</p><p className="text-slate-400 text-xs mt-1">Designed around people and exchange</p></div>
                <div className="glass rounded-xl p-5 text-center"><Repeat className="h-7 w-7 text-purple-400 mx-auto mb-3" /><p className="text-white font-semibold">Barter-first</p><p className="text-slate-400 text-xs mt-1">Trade value beyond cash transactions</p></div>
                <div className="glass rounded-xl p-5 text-center"><Shield className="h-7 w-7 text-emerald-400 mx-auto mb-3" /><p className="text-white font-semibold">Digital platform</p><p className="text-slate-400 text-xs mt-1">Explore the live product</p></div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
                  asChild
                >
                  <a href="https://barternaija.com.ng" target="_blank" rel="noopener noreferrer">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Experience B3 Platform
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <p className="text-center text-slate-400 text-sm">
                  Explore the platform • Discover barter • Connect with community
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid gap-6">
            {[
              {
                icon: Shield,
                title: "Trust-aware marketplace",
                description: "A product experience designed to support clearer, more confident exchanges between community members",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                icon: Globe,
                title: "Community Impact",
                description: "Empowering local economies through direct value exchange and skill sharing",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: Zap,
                title: "Innovation Showcase",
                description:
                  "Demonstrating how ethical technology can preserve traditions while adding modern security",
                gradient: "from-amber-500 to-orange-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="glass border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 animate-glow`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

        <div className="mt-20 border-t border-white/15 pt-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Watch the B3 story</p>
            <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">A closer look at BringBackBarter</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Explore the story behind B3, B9TECH’s flagship barter marketplace.
            </p>
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
    </section>
  )
}
