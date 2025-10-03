"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { personalData } from "@/lib/personal-data"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Get WhatsApp number from environment
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    
    if (!whatsappNumber) {
      console.error("WhatsApp number not configured")
      return
    }
    
    // Format the message using the template
    const template = t.contact.whatsapp.template
    const message = template
      .replace('{name}', formData.name)
      .replace('{email}', formData.email)
      .replace('{message}', formData.message)
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground text-pretty">{t.contact.subtitle}</p>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm shadow-xl shadow-emerald-500/10">
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50"
              />
              <Input
                type="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50"
              />
            </div>
            <Textarea
              placeholder={t.contact.form.message}
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-background/50"
            />
            <Button
              type="submit"
              className="w-full gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            >
              <MessageCircle className="h-4 w-4" />
              {t.contact.form.send}
            </Button>
          </form>

          <div className="relative pt-6 mt-6">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                dir="ltr"
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{personalData.email}</span>
              </a>
              <a
              dir="ltr"
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                dir="ltr"
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
