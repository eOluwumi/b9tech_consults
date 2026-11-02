"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Mail, ShieldCheck, Brain, Lightbulb } from "lucide-react"

export function NewsletterSection() {
  return (
    <section id="newsletter" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Mail className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 font-medium">B9TECH Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 font-heading">
            Useful Intelligence. <span className="text-blue-300">No Noise.</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            We are preparing a considered stream of insights on responsible AI, secure digital systems and technology in Africa. Newsletter enrolment is not open yet.
          </p>
        </div>
        <Card className="glass border-white/20 max-w-3xl mx-auto">
          <CardContent className="p-8 md:p-10">
            <div className="grid sm:grid-cols-3 gap-6 mb-8 text-center">
              <div><ShieldCheck className="h-7 w-7 text-blue-400 mx-auto mb-3" /><p className="text-white font-medium text-sm">Responsible AI</p></div>
              <div><Brain className="h-7 w-7 text-purple-400 mx-auto mb-3" /><p className="text-white font-medium text-sm">Applied Intelligence</p></div>
              <div><Lightbulb className="h-7 w-7 text-emerald-400 mx-auto mb-3" /><p className="text-white font-medium text-sm">Practical Innovation</p></div>
            </div>
            <div className="text-center">
              <p className="text-slate-300 mb-5">For enquiries and collaboration, contact our team directly.</p>
              <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <a href="mailto:enoch@barternaija.com.ng?subject=B9TECH%20Insights%20Enquiry">
                  Contact B9TECH <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
