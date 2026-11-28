import { Card, CardContent } from "@/components/ui/card"
import { BrainCircuit, ShieldCheck, Microscope, Activity } from "lucide-react"

const themes = [
  { icon: BrainCircuit, title: "Model robustness & resilience", body: "Investigating how model behaviour changes under perturbations, distribution shifts, adversarial pressure and imperfect operating conditions." },
  { icon: Activity, title: "AI evaluation & assurance", body: "Developing disciplined approaches to assess model capabilities, limitations, reliability and failure modes." },
  { icon: ShieldCheck, title: "AI security & threat analysis", body: "Examining attack surfaces, misuse pathways, system vulnerabilities and practical safeguards for AI-enabled systems." },
  { icon: Microscope, title: "Applied and reproducible research", body: "Translating technical questions into experiments, documented methods and evidence that can inform safer implementation." },
]

export function ResearchSection() {
  return (
    <section id="research" className="border-y border-border bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">Research & innovation</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Better systems begin with better questions.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">B9TECH is developing an applied research direction around trustworthy AI and resilient digital systems. Our current areas of exploration connect model evaluation, AI security and practical engineering.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {themes.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="border-border bg-card">
              <CardContent className="flex gap-5 p-6 md:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"><Icon className="h-6 w-6" /></div>
                <div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{body}</p></div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-muted-foreground">These are research themes and areas of active development, not claims of completed publications, certifications or institutional affiliations. Specific outputs will be presented as methods and results are validated.</p>
      </div>
    </section>
  )
}
