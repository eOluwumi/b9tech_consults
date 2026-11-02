"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactFormHandler() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || "Website enquiry")
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nOrganisation: ${formData.company || "Not provided"}\n\n${formData.message}`
    )
    window.location.href = `mailto:enoch@barternaija.com.ng?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((previous) => ({ ...previous, [e.target.name]: e.target.value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-slate-200">First Name</Label>
          <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" required className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-slate-200">Last Name</Label>
          <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" required className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-200">Email Address</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company" className="text-slate-200">Company / Organisation (optional)</Label>
        <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Organisation name" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-slate-200">Subject</Label>
        <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required className="bg-white/10 border-white/20 text-white placeholder:text-slate-400" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-slate-200">Message</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." required className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-slate-400" />
      </div>
      <p className="text-xs text-slate-400">Submitting opens your default email application with your message prepared. Your message is not sent until you send it from that application.</p>
      <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold py-4 text-lg rounded-xl">
        <Send className="mr-2 h-5 w-5" /> Open Email to Send
      </Button>
    </form>
  )
}
