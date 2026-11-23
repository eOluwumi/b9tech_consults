"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Brain, Network, FlaskConical, ArrowRight, CheckCircle2 } from "lucide-react"

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Resilience",
    intro: "Understand exposure, strengthen controls and improve the resilience of digital environments.",
    work: ["Infrastructure and security posture reviews", "Threat, vulnerability and risk analysis", "Security hardening and remediation planning", "Resilience and incident-readiness guidance"],
    deliverable: "A prioritised findings report with practical remediation actions.",
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    intro: "Use data and intelligent systems to support better decisions—with attention to interpretability and reliability.",
    work: ["Data analysis, modelling and visualisation", "Business intelligence and decision-support dashboards", "Machine-learning evaluation and explainability", "AI use-case assessment and implementation planning"],
    deliverable: "An analysis, dashboard, model evaluation or actionable AI roadmap.",
  },
  {
    icon: Network,
    title: "Digital Infrastructure",
    intro: "Make the technology environment more dependable, maintainable and fit for organisational needs.",
    work: ["IT operations and technical support", "Infrastructure and systems assessment", "Technology requirements and procurement support", "Systems integration and workflow automation"],
    deliverable: "A practical infrastructure plan, implementation support or operational improvement.",
  },
  {
    icon: FlaskConical,
    title: "Applied Research",
    intro: "Investigate complex technical questions and translate evidence into decisions, prototypes and improvements.",
    work: ["Technical research and problem framing", "Experimental design and evaluation", "AI safety and model robustness research", "Technical documentation and implementation studies"],
    deliverable: "A research brief, evaluation report, prototype or evidence-based recommendation.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-950 px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">What we do</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">Four capabilities. One integrated technical practice.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            B9TECH works across the systems organisations depend on, the data they use, the risks they face and the questions they need to investigate.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, intro, work, deliverable }, index) => (
            <Card key={title} className="h-full border-white/10 bg-white/[0.04] text-white transition-colors hover:border-blue-400/40 hover:bg-white/[0.06]">
              <CardHeader className="pb-4">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">0{index + 1} · Capability</p>
                <CardTitle className="text-2xl text-white">{title}</CardTitle>
                <p className="pt-2 leading-7 text-slate-300">{intro}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {work.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-blue-400/20 bg-blue-400/[0.06] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">Typical outcome</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{deliverable}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-950/70 to-slate-900 p-8 text-center md:p-12">
          <h3 className="text-2xl font-bold text-white md:text-3xl">Start with the problem. Then choose the right technology.</h3>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Engagements can begin with a focused assessment, a defined research question or a specific implementation need. We clarify scope, deliverables and constraints before work begins.
          </p>
          <Button asChild size="lg" className="mt-8 bg-blue-600 text-white hover:bg-blue-700">
            <a href="#contact">Discuss your requirement <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
