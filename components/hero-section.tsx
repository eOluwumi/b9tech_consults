"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Database, Network, ShieldCheck, FlaskConical } from "lucide-react"

const capabilities = [
  { icon: ShieldCheck, title: "Cybersecurity & Resilience", description: "Understand threats, reduce exposure and strengthen digital systems." },
  { icon: Brain, title: "AI & Data Science", description: "Turn data into insight and evaluate intelligent systems responsibly." },
  { icon: Network, title: "Digital Infrastructure", description: "Build dependable technology foundations, integrations and workflows." },
  { icon: FlaskConical, title: "Applied Research", description: "Investigate complex problems and translate evidence into action." },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-950 via-slate-950 to-black" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            B9TECH CONSULTS · Technology & Applied Research
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Engineering intelligent, secure and <span className="text-blue-400">resilient</span> digital systems.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            We bring cybersecurity, AI and data science, digital infrastructure, and applied research together to help organisations understand complex technical problems and build practical solutions.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
            From strengthening technology operations to analysing data and evaluating intelligent systems, our work connects rigorous thinking with hands-on implementation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-blue-600 px-7 text-white hover:bg-blue-700">
              <a href="#services">Explore our capabilities <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/30 bg-white/5 px-7 text-white hover:bg-white/10">
              <a href="#contact">Discuss a technical challenge</a>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <a key={title} href="#services" className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-blue-400/50 hover:bg-white/[0.08]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-semibold text-white group-hover:text-blue-300">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
