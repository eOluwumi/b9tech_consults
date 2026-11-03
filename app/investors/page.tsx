import Link from "next/link"
import { ArrowRight, BarChart3, BriefcaseBusiness, Building2, Compass, FileCheck2, Lightbulb, Mail, ShieldCheck, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CorporateHeader } from "@/components/corporate-header"
import { Footer } from "@/components/footer"

const thesis = [
  { icon: Target, title: "A focused problem space", body: "Organisations need practical ways to adopt AI and digital systems while managing cost, complexity, security and trust." },
  { icon: Lightbulb, title: "Services and product development", body: "A consultancy-led model can build delivery experience and customer relationships while proprietary products are developed and validated." },
  { icon: Compass, title: "A product-led learning loop", body: "B3: BringBackBarter is the public flagship product through which B9TECH explores marketplace design, digital exchange and user-centred product development." },
  { icon: ShieldCheck, title: "Responsible technology as a differentiator", body: "Privacy, transparency, security and human oversight are treated as design requirements rather than marketing decoration." },
]

const diligence = [
  ["Corporate and ownership", "Legal entity details, ownership structure, governance and statutory records."],
  ["Commercial performance", "Revenue history, customer concentration, contracts, pipeline, margins and cash-flow position."],
  ["Product and technology", "Product roadmap, architecture, IP ownership, security posture, technical dependencies and operating costs."],
  ["Market and growth", "Target segments, customer discovery, competitor analysis, acquisition channels and expansion assumptions."],
  ["Financial plan", "Historical accounts, forecasts, unit economics, funding requirement, use of funds and milestone plan."],
  ["Risk and compliance", "Material risks, data protection obligations, contracts, regulatory considerations and mitigation plans."],
]

export const metadata = {
  title: "Investor & Strategic Partners",
  description: "Explore B9TECH CONSULTS' business direction, product thesis and investor or strategic partnership enquiries.",
}

export default function InvestorsPage() {
  return (
    <>
      <CorporateHeader />
      <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 dark:from-black dark:via-indigo-950 dark:to-slate-950" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-100"><BriefcaseBusiness className="h-4 w-4" /> Investor & strategic partner relations</div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">Building useful technology businesses from <span className="text-indigo-300">real operating problems.</span></h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">B9TECH CONSULTS is developing a technology consultancy and product portfolio centred on responsible AI, digital systems and practical innovation. This page outlines our direction; it is not an offer to sell securities or a representation of verified investment performance.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700"><a href="mailto:enoch@barternaija.com.ng?subject=Investor%20or%20Strategic%20Partnership%20Enquiry&body=Name%3A%0AOrganisation%3A%0AInterest%3A%0AQuestions%3A"><Mail className="mr-2 h-4 w-4" /> Initiate a discussion</a></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10"><Link href="/#portfolio">View public product</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">Investment thesis</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">A disciplined path from services capability to scalable products.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">The strategic opportunity is to combine problem-led technology delivery with selective development of proprietary products. The commercial model, product-market fit and funding needs must be validated with customers and supported by operating evidence.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {thesis.map(({ icon: Icon, title, body }) => <Card key={title} className="h-full border-border bg-card"><CardContent className="p-7"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{body}</p></CardContent></Card>)}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">Portfolio direction</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Two complementary engines.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">The intended portfolio combines fee-based enterprise engagements with carefully selected proprietary products. This is a strategic direction, not a claim of current revenue mix or proven unit economics.</p>
          </div>
          <div className="space-y-5">
            <div className="rounded-xl border border-border bg-card p-6"><div className="flex items-center gap-3"><Building2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" /><h3 className="text-xl font-semibold">Enterprise services</h3></div><p className="mt-3 text-muted-foreground">Potential revenue from advisory, implementation, engineering and ongoing support engagements, subject to validated demand and delivery capacity.</p><Link href="/enterprise" className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-600 underline underline-offset-4 dark:text-indigo-400">Explore enterprise capabilities <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
            <div className="rounded-xl border border-border bg-card p-6"><div className="flex items-center gap-3"><BarChart3 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" /><h3 className="text-xl font-semibold">Proprietary products</h3></div><p className="mt-3 text-muted-foreground">Longer-term potential from product subscriptions, transaction-related services or licensing where product-market fit, regulatory requirements and sustainable economics support them.</p><Link href="/#b3" className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-600 underline underline-offset-4 dark:text-indigo-400">Explore B3 <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">Due diligence readiness</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">What serious partners should be able to verify.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">The following materials form the diligence baseline. They should be assembled and checked before formal fundraising or institutional investment discussions.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {diligence.map(([title, body]) => <div key={title} className="flex gap-4 rounded-xl border border-border bg-card p-6"><FileCheck2 className="mt-1 h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400" /><div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></div></div>)}
        </div>
        <div className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
          <h3 className="font-semibold">Transparency note</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">B9TECH does not publish audited financials, customer metrics, valuation, funding target or investment terms on this website. These should not be inferred. Any future investor materials will be shared selectively and only after the underlying information has been verified and approved for disclosure.</p>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white dark:bg-black">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl"><h2 className="text-3xl font-bold md:text-4xl">Interested in the direction we're building?</h2><p className="mt-4 leading-relaxed text-slate-300">We welcome substantive conversations with potential enterprise partners, strategic collaborators and investors.</p></div>
          <Button asChild size="lg" className="shrink-0 bg-indigo-600 text-white hover:bg-indigo-700"><a href="mailto:enoch@barternaija.com.ng?subject=Strategic%20Partnership%20Enquiry">Start a conversation <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
        </div>
      </section>
      <div className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground"><Link href="/" className="underline underline-offset-4">Return to B9TECH homepage</Link></div>
      </main>
      <Footer />
    </>
  )
}
