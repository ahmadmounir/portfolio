"use client"

import { Briefcase } from "lucide-react"
import { useLanguage } from "@/lib/language-context"



export function ExperienceSection() {
  const { t } = useLanguage()
  
  // Get experience data with translations
  const experiences = [
    {
      key: 'freelance',
      title: t.experience.items.freelance.title,
      company: t.experience.items.freelance.company,
      period: t.experience.items.freelance.period,
      description: t.experience.items.freelance.description,
      technologies: ["React", "Next.js", "TypeScript", "API Integration", "CMS Development", "Responsive Design", "Vite"],
    },
    {
      key: 'script',
      title: t.experience.items.script.title,
      company: t.experience.items.script.company,
      period: t.experience.items.script.period,
      duration: t.experience.items.script.duration,
      description: t.experience.items.script.description,
      technologies: ["React", "Next.js", "TypeScript", "API Integration", "Authentication", "Express.js", "MongoDB"],
    },
    {
      key: 'plutosoft',
      title: t.experience.items.plutosoft.title,
      company: t.experience.items.plutosoft.company,
      period: t.experience.items.plutosoft.period,
      duration: t.experience.items.plutosoft.duration,
      description: t.experience.items.plutosoft.description,
      technologies: ["ASP.NET Core", "C#", "Vue.js", "SQL", "Web Development", "Enterprise Architecture", "Chrome Extensions", "Team Collaboration"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">{t.experience.title}</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.key} className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>{exp.period}</span>
                  {exp.duration && (
                    <>
                      <span>•</span>
                      <span>{exp.duration}</span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
