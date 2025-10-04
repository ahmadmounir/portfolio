"use client"

import { Card } from "@/components/ui/card"
import { Code2, Database, Layers, Wrench, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function SkillsSection() {

  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t.skills.backend,
      icon: Code2,
      color: "from-emerald-500 to-teal-500",
      skills: [
        ".NET",
        "C#",
        "RESTful APIs",
        "Authentication & Authorization",
        "Enterprise Architecture",
      ],
    },
    {
      title: t.skills.frontend,
      icon: Layers,
      color: "from-teal-500 to-green-500",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Vite",
        "Chrome Extensions",
        "Responsive Design",
        "Modern CSS",
      ],
    },
    {
      title: t.skills.databases,
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: ["SQL Server", "PostgreSQL", "Supabase", "Database Design", "Query Optimization"],
    },
    {
      title: t.skills.tools,
      icon: Wrench,
      color: "from-lime-500 to-emerald-500",
      skills: [
        "Git & GitHub",
        "API Integration",
        "SEO Optimization",
        "CMS Development",
        "Agile Methodologies",
        "Problem Solving",
      ],
    },
    {
      title: t.skills.languages,
      icon: Globe,
      color: "from-emerald-500 to-lime-500",
      skills: ["Arabic (Native)", "Turkish (Fluent)", "English (Professional)"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {t.skills.title.split("&")[0]} &{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {t.skills.title.split("&")[1]}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.skills.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={category.title}
                className={`p-6 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 group `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary/50 backdrop-blur-sm text-foreground rounded-lg text-sm border border-border/50 hover:border-border hover:bg-secondary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
