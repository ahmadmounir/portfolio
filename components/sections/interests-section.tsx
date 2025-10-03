"use client"

import { Brain, Code, Rocket } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function InterestsSection() {
  const { t } = useLanguage()
  
  const interests = [
    {
      key: 'ai',
      icon: Brain,
      title: t.interests.items.ai.title,
      description: t.interests.items.ai.description,
    },
    {
      key: 'architecture',
      icon: Code,
      title: t.interests.items.architecture.title,
      description: t.interests.items.architecture.description,
    },
    {
      key: 'webdev',
      icon: Rocket,
      title: t.interests.items.webdev.title,
      description: t.interests.items.webdev.description,
    },
  ]

  return (
    <section id="interests" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">{t.interests.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <Card key={interest.key} className="p-6 bg-card border-border">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <interest.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{interest.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{interest.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
