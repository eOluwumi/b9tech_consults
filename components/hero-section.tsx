"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BrainCircuit, ShieldCheck, Database, Network, Microscope, Sparkles } from "lucide-react"

const pillars = [
  { icon: BrainCircuit, title: "Artificial intelligence", detail: "Human-centred AI, machine learning and model evaluation" },
  { icon: ShieldCheck, title: "Cybersecurity & AI safety", detail: "Robustness, resilience, security and assurance" },
  { icon: Database, title: "Data science", detail: "Evidence-led analytics, interpretability and intelligent systems" },
  { icon: Network, title: "Digital infrastructure", detail: "Cloud, compute and dependable technology foundations" },
]

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-6 py-24 text-white md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.28),_transparent_48%),radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.18),_transparent_45%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-200">
            <Sparkles className="h-4 w-4" /> African realities. Global standards of reliability.
          </div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">B9TECH CONSULTS · Applied AI & Research</p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            AI designed for <span className="text-blue-300">Africa.</span> Intelligent systems built for the world.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            We investigate, evaluate and engineer human-centred AI and dependable digital systems—bringing together explainability, model understanding, AI safety, data science and digital infrastructure for challenges grounded in African realities.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-blue-600 px-7 text-white hover:bg-blue-500">
              <a href="#research">Explore our AI research <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 px-7 text-white hover:bg-white/10">
              <a href="#capabilities">Explore our capabilities</a>
            </Button>
          </div>
        </div>
        <div className="mt-20 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map(({ icon: Icon, title, detail }) => (
            <a key={title} href="#capabilities" className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.08]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300 transition group-hover:bg-blue-400/20">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{detail}</p>
            </a>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-sm text-slate-400">
          <span>Human-centred & explainable AI</span><span>Mechanistic interpretability</span><span>LLM evaluation & benchmarking</span><span>AI safety & security</span>
        </div>
      </div>
    </section>
  )
}
