"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Brain, ShieldCheck, Microscope } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-900 px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Who we are</p>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Analytical thinking. Technical execution. <span className="text-blue-400">Research-led problem solving.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            B9TECH CONSULTS is a technology and applied research practice working across cybersecurity, AI and data science, digital infrastructure, and technical investigation.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-slate-800 shadow-2xl">
              <Image
                src="/images/exquisite_dp.jpg"
                alt="Enoch Oluwumi, Founder of B9TECH CONSULTS"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 15%" }}
              />
            </div>
            <div className="absolute -bottom-5 -right-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-blue-600 shadow-xl">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="space-y-7">
            <div>
              <h3 className="text-3xl font-bold text-white">Enoch Oluwumi</h3>
              <p className="mt-2 font-semibold text-blue-300">Founder · Data Scientist · Technology Practitioner</p>
            </div>
            <p className="leading-8 text-slate-300">
              With an academic foundation in mathematics and a transition into computer science, Enoch works at the intersection of analytical reasoning, cybersecurity, data science and technology systems. His approach is to understand how a system behaves, where it can fail, and how it can be made more useful, secure and dependable.
            </p>
            <p className="leading-8 text-slate-300">
              His technical interests include cybersecurity, machine learning, explainable AI, and the evaluation of intelligent systems. A developing research focus is technical AI safety—particularly model robustness and resilience: how models behave under challenging conditions, how weaknesses can be identified, and how reliability can be improved.
            </p>
            <p className="leading-8 text-slate-300">
              B9TECH is the practical expression of that wider outlook: a consultancy that connects infrastructure and security with data-driven investigation, responsible AI and applied research.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                <a href="https://ng.linkedin.com/in/enoch-oluwumi-b075a2386" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/25 bg-white/5 text-white hover:bg-white/10">
                <a href="mailto:enoch@barternaija.com.ng">
                  <Mail className="mr-2 h-4 w-4" /> Contact B9TECH
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          <Card className="border-white/10 bg-white/[0.04] text-white">
            <CardContent className="p-7">
              <ShieldCheck className="mb-4 h-7 w-7 text-blue-300" />
              <h3 className="text-lg font-semibold">Security-minded</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Treat security, risk and resilience as core system properties—not features added at the end.</p>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04] text-white">
            <CardContent className="p-7">
              <Brain className="mb-4 h-7 w-7 text-blue-300" />
              <h3 className="text-lg font-semibold">Evidence-oriented</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Use data, analysis and evaluation to understand problems before prescribing technology.</p>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04] text-white">
            <CardContent className="p-7">
              <Microscope className="mb-4 h-7 w-7 text-blue-300" />
              <h3 className="text-lg font-semibold">Research-led</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Investigate mechanisms, test assumptions and communicate limitations alongside findings.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
