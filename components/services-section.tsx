"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BrainCircuit, ShieldCheck, Database, Network, ArrowUpRight } from "lucide-react"

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence & Machine Learning",
    description: "Design and evaluate practical AI applications, from data-driven prototypes to model integration and intelligent automation.",
    items: ["AI use-case discovery and prototyping", "Machine learning and predictive modelling", "Model evaluation and explainability"],
    tone: "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-blue-600 bg-blue-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & AI Safety",
    description: "Approach digital and AI systems through a security-first lens, with attention to threats, robustness and responsible deployment.",
    items: ["Security assessment and threat modelling", "AI system risk and robustness evaluation", "Secure workflows, privacy and governance"],
    tone: "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-emerald-600 bg-emerald-500/10",
  },
  {
    icon: Database,
    title: "Data Science & Intelligent Systems",
    description: "Turn data into defensible insight and useful decision support through analytical methods and interpretable models.",
    items: ["Data analysis and engineering", "Statistical and predictive modelling", "Explainable AI and analytical reporting"],
    tone: "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-violet-600 bg-violet-500/10",
  },
  {
    icon: Network,
    title: "Digital Infrastructure & Engineering",
    description: "Plan and improve the systems, connectivity and technical foundations that organisations rely on.",
    items: ["Cloud and compute infrastructure planning", "Digital systems and workflow integration", "IT operations and technology advisory"],
    tone: "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-amber-600 bg-amber-500/10",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-background px-6 py-24 text-foreground">
      <div className="mx-auto max-w-7xl">
        <div id="capabilities" className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">What we do</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Four connected capability areas. One technical mission.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">B9TECH brings AI, security, data and infrastructure together. We scope engagements around the problem, the evidence required and the delivery capacity—not around a fashionable tool.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, description, items, tone }) => (
            <Card key={title} className="h-full border-border bg-card transition hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-7 md:p-8">
                <div className={tone}><Icon className="h-7 w-7" /></div>
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
                <ul className="mt-6 space-y-3">{items.map(item => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />{item}</li>)}</ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-muted/40 p-8 md:flex-row md:items-center">
          <div><h3 className="text-xl font-semibold">Need a technical partner?</h3><p className="mt-2 max-w-2xl text-muted-foreground">We also provide scoped consulting, implementation and technology support across these capability areas.</p></div>
          <Button asChild className="shrink-0 bg-blue-600 text-white hover:bg-blue-500"><a href="#contact">Discuss a project <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
        </div>
      </div>
    </section>
  )
}
