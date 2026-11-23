import Link from "next/link"
import { ArrowRight, Brain, FlaskConical, Network, ShieldCheck, Mail, Building2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CorporateHeader } from "@/components/corporate-header"
import { Footer } from "@/components/footer"

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity & resilience",
    description: "Understand exposure, strengthen controls and improve the resilience of digital environments.",
    deliverables: ["Infrastructure and security posture reviews", "Threat, vulnerability and risk analysis", "Security hardening and remediation planning", "Resilience and incident-readiness guidance"],
  },
  {
    icon: Brain,
    title: "AI & data science",
    description: "Use data and intelligent systems to support better decisions, with attention to interpretability and reliability.",
    deliverables: ["Data analysis, modelling and visualisation", "Business intelligence and decision-support dashboards", "Machine-learning evaluation and explainability", "AI use-case assessment and implementation planning"],
  },
  {
    icon: Network,
    title: "Digital infrastructure",
    description: "Make the technology environment more dependable, maintainable and fit for organisational needs.",
    deliverables: ["IT operations and technical support", "Infrastructure and systems assessment", "Technology requirements and procurement support", "Systems integration and workflow automation"],
  },
  {
    icon: FlaskConical,
    title: "Applied research",
    description: "Investigate complex technical questions and translate evidence into decisions, prototypes and improvements.",
    deliverables: ["Technical research and problem framing", "Experimental design and evaluation", "AI safety and model robustness research", "Technical documentation and implementation studies"],
  },
]

const engagementSteps = [
  ["01", "Discover", "Understand the business context, users, constraints and desired outcomes."],
  ["02", "Define", "Agree scope, success measures, assumptions, risks and delivery milestones."],
  ["03", "Deliver", "Build or advise in manageable stages, with regular review and documented decisions."],
  ["04", "Transfer", "Handover documentation, knowledge and a clear view of ongoing support needs."],
]

export const metadata = {
  title: "Enterprise Solutions",
  description: "Cybersecurity, AI and data science, digital infrastructure and applied research services from B9TECH CONSULTS.",
}

export default function EnterprisePage() {
  return (
    <>
      <CorporateHeader />
      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 dark:from-black dark:via-blue-950 dark:to-slate-950" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-100">
                <Building2 className="h-4 w-4" /> Enterprise technology & research
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Secure the systems. Understand the data. <span className="text-blue-300">Build what works.</span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                B9TECH CONSULTS helps organisations assess technical risks, improve digital infrastructure, apply data and AI, and investigate complex problems through research-led consulting.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  <a href="mailto:enoch@barternaija.com.ng?subject=Enterprise%20Consultation%20Request&body=Organisation%3A%0ARole%3A%0AChallenge%20or%20opportunity%3A%0ATimeline%3A">
                    Discuss an enterprise requirement <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10">
                  <Link href="/#portfolio">Explore public work</Link>
                </Button>
              </div>
              <p className="mt-5 text-sm text-slate-400">Nigeria · Engagements scoped to organisational needs and delivery capacity.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Capabilities</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Four connected areas of technical work.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">We start with the problem—not a predetermined tool. An engagement may involve assessment, advisory, implementation or a combination of these, depending on scope and fit.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, description, deliverables }) => (
              <Card key={title} className="h-full border-border bg-card">
                <CardContent className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
                  <ul className="mt-6 space-y-3">
                    {deliverables.map(item => <li key={item} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{item}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/40">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Engagement model</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Clear scope. Measured delivery. Documented handover.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {engagementSteps.map(([number, title, description]) => (
                <div key={number} className="rounded-xl border border-border bg-card p-6">
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400">{number}</p>
                  <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">Scope, timelines, fees, service levels and support arrangements are agreed in writing before work begins. Specific capabilities are confirmed during discovery.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Working principles</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Technical discipline without unnecessary complexity.</h2>
            </div>
            <div className="space-y-5">
              {[
                ["Problem-led", "Recommendations are tied to a defined operational need and an agreed outcome."],
                ["Responsible by design", "Privacy, security, transparency and human review are considered from the outset."],
                ["Evidence over claims", "We distinguish demonstrated capability from proposed functionality and work in progress."],
                ["Documented delivery", "Decisions, assumptions, scope changes and handover expectations are made explicit."],
              ].map(([title, body]) => <div key={title} className="border-b border-border pb-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-muted-foreground">{body}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 text-white dark:bg-black">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold md:text-4xl">Have a defined technical challenge?</h2>
              <p className="mt-4 leading-relaxed text-slate-300">Share the context, desired outcome and constraints. An initial conversation can establish whether there is a suitable fit.</p>
            </div>
            <Button asChild size="lg" className="shrink-0 bg-blue-600 text-white hover:bg-blue-700">
              <a href="mailto:enoch@barternaija.com.ng?subject=Enterprise%20Enquiry"><Mail className="mr-2 h-4 w-4" /> Contact B9TECH</a>
            </Button>
          </div>
        </section>
        <div className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground"><Link href="/" className="underline underline-offset-4">Return to B9TECH homepage</Link></div>
      </main>
      <Footer />
    </>
  )
}
