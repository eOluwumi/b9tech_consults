"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, BookOpen, Mail, ShieldCheck, Brain, Lightbulb } from "lucide-react"

const topics = [
  { icon: ShieldCheck, title: "Responsible AI", description: "Governance, safety, privacy and accountability in applied AI." },
  { icon: Brain, title: "Applied Intelligence", description: "Practical machine learning and AI systems that address real operational needs." },
  { icon: Lightbulb, title: "Technology for Africa", description: "Digital products, infrastructure and innovation grounded in local realities." },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-slate-900" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <BookOpen className="h-4 w-4 text-green-400" />
            <span className="text-green-300 font-medium">Ideas & Perspectives</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Thinking Beyond <span className="text-green-400">the Hype</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We are developing a publication programme around the questions that matter in responsible technology and AI adoption.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {topics.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="glass border-white/20">
              <CardContent className="p-7">
                <Icon className="h-8 w-8 text-green-400 mb-5" />
                <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <p className="text-slate-300 mb-5">For now, explore a collaboration or ask us about a topic directly.</p>
          <Button asChild variant="outline" className="glass border-white/20 text-white hover:bg-white/10">
            <a href="mailto:enoch@barternaija.com.ng?subject=B9TECH%20Insights">
              <Mail className="mr-2 h-4 w-4" /> Contact B9TECH <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
