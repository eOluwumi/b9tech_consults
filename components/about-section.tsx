"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, BrainCircuit, ShieldCheck, Users } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-900 px-6 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.22),_transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Who we are</p>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">Technology, security and research for real-world systems.</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">B9TECH CONSULTS is a Nigerian technology company working at the intersection of AI, cybersecurity, data science and digital infrastructure.</p>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative h-[480px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500 to-emerald-500 p-1">
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <Image src="/images/exquisite_dp.jpg" alt="Enoch Oluwumi, Founder of B9TECH CONSULTS" fill className="object-cover object-center" style={{ objectPosition: "50% 15%" }} />
              </div>
            </div>
            <div className="absolute -right-4 top-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-800 shadow-xl"><BrainCircuit className="h-8 w-8 text-blue-300" /></div>
            <div className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-800 shadow-xl"><ShieldCheck className="h-8 w-8 text-emerald-300" /></div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold">Enoch Oluwumi</h3>
              <p className="mt-2 text-lg font-semibold text-blue-300">Founder | Data Scientist | Technology Practitioner</p>
            </div>
            <p className="leading-relaxed text-slate-300">Enoch's work brings together a mathematical foundation, data science and practical experience in cybersecurity and IT systems. His current technical interests include AI model robustness, evaluation, security and the reliability of intelligent systems.</p>
            <p className="leading-relaxed text-slate-300">Through B9TECH, these interests inform a broader effort to investigate, design and implement useful technology for organisations operating in real-world conditions. The company combines applied technical work with advisory and implementation engagements.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500"><a href="https://ng.linkedin.com/in/enoch-oluwumi-b075a2386" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn</a></Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10"><a href="mailto:enoch@barternaija.com.ng"><Mail className="mr-2 h-5 w-5" /> Contact B9TECH</a></Button>
            </div>
          </div>
        </div>
        <Card className="mt-20 border-white/10 bg-white/[0.04] text-white">
          <CardContent className="p-8 text-center md:p-12">
            <Users className="mx-auto mb-5 h-10 w-10 text-blue-300" />
            <h3 className="text-2xl font-bold">Our mission</h3>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-relaxed text-slate-300">To build and apply intelligent, secure and resilient technology—combining research, engineering and practical delivery to address challenges across Africa and beyond.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
