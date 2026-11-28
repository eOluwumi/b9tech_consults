"use client"

import { Separator } from "@/components/ui/separator"
import { Linkedin, Mail, Phone, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      <div className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2">
                  <Image src="/images/b9-logo-main.png" alt="B9TECH Logo" fill className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">B9TECH CONSULTS</h3>
                  <p className="font-medium text-blue-400">Responsible Technology & AI</p>
                </div>
              </div>
              <p className="mb-8 max-w-md leading-relaxed text-slate-300">
                We help organisations explore and deliver practical technology, with responsible AI, security and human-centred design in view.
              </p>
              <a href="https://www.linkedin.com/company/b9tech" target="_blank" rel="noopener noreferrer" aria-label="B9TECH on LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition-colors hover:bg-blue-500/20 hover:text-blue-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <p className="mt-6 text-sm text-slate-400">B9TECH Insights is in preparation. Newsletter enrolment is not yet open.</p>
            </div>
            <div>
              <h4 className="mb-6 font-bold text-white">Explore B9TECH</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="/enterprise" className="transition-colors hover:text-emerald-400">Enterprise Solutions</a></li>
                <li><a href="/#services" className="transition-colors hover:text-emerald-400">Technology Services</a></li>
                <li><a href="/#portfolio" className="transition-colors hover:text-emerald-400">Products & Case Studies</a></li>
                <li><a href="/investors" className="transition-colors hover:text-emerald-400">Investors & Partners</a></li>
                <li><a href="/#about" className="transition-colors hover:text-emerald-400">About B9TECH</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 font-bold text-white">Contact</h4>
              <div className="space-y-4 text-slate-400">
                <a href="mailto:enoch@barternaija.com.ng" className="flex items-center gap-3 transition-colors hover:text-white"><Mail className="h-4 w-4 text-emerald-400" />enoch@barternaija.com.ng</a>
                <a href="tel:+2349030759382" className="flex items-center gap-3 transition-colors hover:text-white"><Phone className="h-4 w-4 text-emerald-400" />+234 903 075 9382</a>
                <a href="https://wa.me/2349030759382" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-white"><MessageCircle className="h-4 w-4 text-emerald-400" />Chat with us on WhatsApp</a>
                <p>Lagos, Nigeria</p>
                <div className="flex items-center gap-3 border-t border-white/20 pt-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-blue-400">
                    <Image src="/images/exquisite_dp.jpg" alt="Enoch Oluwumi" fill className="object-cover object-center" style={{ objectPosition: "50% 30%" }} />
                  </div>
                  <div><p className="text-sm font-medium text-white">Enoch Oluwumi</p><p className="text-xs text-blue-400">Founder & CEO</p></div>
                </div>
                <a href="https://ng.linkedin.com/in/enoch-oluwumi-b075a2386" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-blue-400"><Linkedin className="h-4 w-4" />Connect with the founder</a>
              </div>
            </div>
          </div>
          <Separator className="mb-8 bg-white/20" />
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-center text-sm text-slate-400 md:text-left">© 2026 B9TECH CONSULTS. Made with <Heart className="inline h-4 w-4 text-red-400" /> in Nigeria.</p>
            <div className="flex items-center gap-8 text-sm">
              <a href="/privacy-policy" className="text-slate-400 transition-colors hover:text-white">Privacy Policy</a>
              <a href="/terms-conditions" className="text-slate-400 transition-colors hover:text-white">Terms & Conditions</a>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-slate-500">Building technology for useful, responsible outcomes.</p>
        </div>
      </div>
    </footer>
  )
}
