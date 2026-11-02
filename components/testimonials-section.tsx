"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Eye, Users, HeartHandshake } from "lucide-react"

const principles = [
  { icon: ShieldCheck, title: "Privacy by design", description: "We consider data protection, access control and security from the start—not as an afterthought." },
  { icon: Eye, title: "Transparent systems", description: "We aim to make system behaviour, limitations and human oversight understandable." },
  { icon: Users, title: "Human-centred delivery", description: "Technology should support people and organisations, with clear ownership and practical outcomes." },
  { icon: HeartHandshake, title: "Responsible partnership", description: "We work to understand the problem, define realistic scope and communicate trade-offs honestly." },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 font-medium">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Technology with <span className="text-blue-400">Principles</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our approach to building and advising on digital systems is grounded in responsibility, clarity and human value.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="glass border-white/20 h-full">
              <CardContent className="p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
