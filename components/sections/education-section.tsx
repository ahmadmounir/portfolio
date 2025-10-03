"use client"

import { GraduationCap, ExternalLink, Calendar, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function EducationSection() {
  const { t } = useLanguage()
  
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">{t.education.title}</h2>
        <Card className="p-8 bg-card/50 backdrop-blur-sm shadow-lg shadow-emerald-500/10 border-border/50">
          <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
            {/* University Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <GraduationCap className="h-8 w-8 text-emerald-500" />
              </div>
            </div>

            {/* Education Info */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-balance">{t.education.degree}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="font-medium">{t.education.university}</span>
                  <span className="text-sm">({t.education.universityShort})</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-full">
                  <Award className="h-4 w-4 text-emerald-500" />
                  <span>{t.education.status}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-full">
                  <Calendar className="h-4 w-4 text-teal-500" />
                  <span>{t.education.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-pretty">
                {t.education.description}
              </p>
            </div>

            {/* University Link Button */}
            <div className="flex flex-col gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2 backdrop-blur-sm hover:bg-secondary/50 bg-transparent shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
              >
                <a
                  href="https://www.fsm.edu.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t.education.visitUniversity}
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
