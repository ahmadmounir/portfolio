"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import unimsgsImg from "@/public/projects/unimsgs.png"
import waslaImg from "@/public/projects/waslatech.png"
import bazaratImg from "@/public/projects/bazarat.png"
import wasla2Img from "@/public/projects/wasla2.png"
import builOurselvesImg from "@/public/projects/buildourselves.png"

export function ProjectsSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Get project data with translations
  const projects = [
    {
      key: 'buildOurselves',
      title: t.projects.items.buildOurselves.title,
      description: t.projects.items.buildOurselves.description,
      image: builOurselvesImg,
      tags: ["React", "Next.js", "Supabase", "Charity Platform", "SEO"],
      demo: "https://build-ourselves.vercel.app",
      github: "https://github.com/ahmadmounir/buildOurselves",
      gradient: "from-teal-500 to-green-500",
    },
    {
      key: 'unimsgs',
      title: t.projects.items.unimsgs.title,
      description: t.projects.items.unimsgs.description,
      image: unimsgsImg,
      tags: ["ASP.NET Core", "C#", "SQL Server", "Gulp", "Vue.js"],
      demo: "https://www.unimsgs.com/",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      key: 'wasla',
      title: t.projects.items.wasla.title,
      description: t.projects.items.wasla.description,
      image: waslaImg,
      tags: ["Chrome extension", "API Integration", "Problem Solving"],
      demo: "https://chromewebstore.google.com/detail/waslatech-whatsapp-tools/ljfondmangjmacdefckkonppdglkcfpa",
      gradient: "from-teal-500 to-green-500",
    },
    {
      key: 'bazarat',
      title: t.projects.items.bazarat.title,
      description: t.projects.items.bazarat.description,
      image: bazaratImg,
      tags: ["ASP.NET Core", "C#", "Dapper", "Vue.js", "SEO", "Modular Architecture"],
      demo: "https://portal.bazaratonline.com/",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      key: 'wasla2',
      title: t.projects.items.wasla2.title,
      description: t.projects.items.wasla2.description,
      image: wasla2Img,
      tags: ["ASP.NET Core", "Vue.js", "Automation", "Web Integration", "Landing Page"],
      demo: "https://waslatech.io/",
      github: "",
      gradient: "from-lime-500 to-teal-500",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {t.projects.title}{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {t.projects.highlight}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.key}
              className={`overflow-hidden bg-card/50 backdrop-blur-sm shadow-lg shadow-emerald-500/10 group transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity z-10`}
                />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-balance group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-500 group-hover:to-teal-500 transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary/50 backdrop-blur-sm text-foreground rounded text-xs font-mono shadow-sm shadow-emerald-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project?.github && (<Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2 backdrop-blur-sm hover:bg-secondary/50 bg-transparent shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
                  >
                    <a href={project?.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      {t.projects.buttons.code}
                    </a>
                  </Button>)}
                  <Button
                    asChild
                    size="sm"
                    className={`gap-2 bg-gradient-to-r ${project.gradient} hover:opacity-90 border-0 shadow-lg`}
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {t.projects.buttons.demo}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
