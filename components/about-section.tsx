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
            <span className="text-blue-300 font-medium">About Our Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Meet the <span className="text-blue-400">Founder</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A Data Scientist building practical data systems and analytics solutions for African tech
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Photo Section */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 animate-glow">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="/images/enoch-professional.jpg"
                  alt="Enoch Oluwumi - Co-founder & CEO"
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
                Founder & Data Systems Professional
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Data Scientist | Data Systems & Analytics Professional | Python, SQL, Power BI & Automation
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                Founded by Enoch Oluwumi, a Data Scientist and data systems professional working across analytics, automation, IT systems, and AI/cybersecurity research. B9TECH operates as a technical studio and portfolio platform for emerging work in practical data solutions.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Enoch brings expertise in data engineering, business intelligence, workflow automation, and AI applications within African tech contexts. B9TECH works on real-world data challenges—dashboards, ETL pipelines, analytics platforms, and intelligent automation—serving organizations that need credible, practical digital solutions.
              </p>
            </div>

            {/* Skills & Focus */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center glass p-6 rounded-xl animate-float">
                <div className="text-sm font-bold text-blue-400 mb-2">Python</div>
                <div className="text-xs text-slate-400">Data Engineering</div>
              </div>
              <div className="text-center glass p-6 rounded-xl animate-float" style={{ animationDelay: '0.2s' }}>
                <div className="text-sm font-bold text-purple-400 mb-2">SQL</div>
                <div className="text-xs text-slate-400">Database Design</div>
              </div>
              <div className="text-center glass p-6 rounded-xl animate-float" style={{ animationDelay: '0.4s' }}>
                <div className="text-sm font-bold text-pink-400 mb-2">Power BI</div>
                <div className="text-xs text-slate-400">Analytics & BI</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white animate-glow"
                asChild
              >
                <a href="https://www.linkedin.com/in/enoch-oluwumi-b075a2386/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20">
          <Card className="glass border-white/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-float" />
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">B9TECH Vision</h3>
                <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  "B9TECH is an emerging data, AI, and cybersecurity systems studio. We believe data-driven decisions and practical automation empower organizations and communities. We build dashboards, platforms, and intelligent systems that serve real business problems in African tech contexts."
                </p>
                <div className="mt-6">
                  <span className="text-blue-400 font-semibold">— Enoch Oluwumi, Founder</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
