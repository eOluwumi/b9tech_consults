"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Sparkles, Brain, Shield, Users } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 font-medium">About the Consultant</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Technology, Operations & <span className="text-blue-400">Applied Research</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Meet the consultant behind B9TECH CONSULTS' practical, research-informed approach
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Photo Section */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 animate-glow">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="/images/exquisite_dp.jpg"
                  alt="Enoch Oluwumi, Founder and CEO of B9TECH CONSULTS"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: "50% 15%" }}
                />
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-float">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2 font-heading">Enoch Oluwumi</h3>
              <p className="text-xl text-blue-400 font-semibold mb-6">
                Consultant | Data Scientist
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Supporting IT operations, procurement, research and data science
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                Enoch Oluwumi is a data scientist and technology consultant whose work spans IT support operations, procurement, applied research and AI. He has procurement experience serving BriaTek Computers in Gombe State, alongside other procurement solutions. His IT support practice is grounded in office operations and can also be delivered remotely.
              </p>
              <p className="text-slate-300 leading-relaxed">
                His research practice covers empirical, cognitive and implementation themes. In data science, he brings mechanistic interpretation and explainable AI (XAI) to help make analytical results more understandable and useful. B9TECH CONSULTS brings these capabilities together to address practical organisational needs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white animate-glow"
                asChild
              >
                <a href="https://ng.linkedin.com/in/enoch-oluwumi-b075a2386" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass border-white/20 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <a href="mailto:enoch@barternaija.com.ng">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20">
          <Card className="glass border-white/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-float" />
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">Our Mission</h3>
                <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  "B9TECH CONSULTS helps organisations solve practical problems through dependable IT support, informed procurement, applied research and data science. We use technology thoughtfully, with AI as one useful part of a broader consulting practice."
                </p>
                <div className="mt-6">
                  <span className="text-blue-400 font-semibold">— Enoch Oluwumi, CEO</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
