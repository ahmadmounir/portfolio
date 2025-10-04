"use client"
import { Github, Linkedin, Mail, ArrowDown, Code2, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { personalData } from "@/lib/personal-data"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 md:py-24 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-green-500/5" />

      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-12rem)] lg:min-h-[80vh]">
          {/* Content Section */}
          <div className="space-y-6 pt-10 md:space-y-8">
            <div dir="ltr" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm shadow-lg shadow-emerald-500/10 animate-fade-in">
              <Terminal className="h-4 w-4 text-teal-500" />
              <code className="text-sm font-mono text-muted-foreground">
                const developer = &quot;{personalData.name}&quot;;
              </code>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance animate-fade-in-up">
              {t.hero.mainTitle.before}{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
                {t.hero.mainTitle.highlight}
              </span>
              <br />
              {t.hero.mainTitle.after}
            </h1>

            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground animate-fade-in-up animation-delay-200">
              {t.hero.title}
            </h2>

            <p className="text-base md:text-md lg:text-lg text-muted-foreground text-pretty leading-relaxed animate-fade-in-up animation-delay-400">
              {t.hero.description.text} <span className="text-teal-500 font-semibold">{t.hero.description.tech1}</span> {t.hero.description.middle}{" "}
              <span className="text-emerald-500 font-semibold">{t.hero.description.tech2}</span> {t.hero.description.end}
            </p>

            <div className="flex flex-wrap gap-4  animate-fade-in-up animation-delay-600">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 border-0 shadow-lg shadow-emerald-500/25"
              >
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  {t.hero.cta}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 backdrop-blur-sm hover:bg-secondary/50 bg-transparent shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
              >
                <a href="#projects">
                  <Code2 className="h-4 w-4" />
                  {t.hero.viewWork}
                </a>
              </Button>
            </div>

            <div className="flex gap-4 animate-fade-in-up animation-delay-800">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm shadow-lg shadow-emerald-500/10 text-muted-foreground hover:text-foreground hover:shadow-xl hover:shadow-teal-500/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm shadow-lg shadow-emerald-500/10 text-muted-foreground hover:text-foreground hover:shadow-xl hover:shadow-emerald-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm shadow-lg shadow-emerald-500/10 text-muted-foreground hover:text-foreground hover:shadow-xl hover:shadow-green-500/30 transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-400 mt-8 lg:mt-0">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] max-w-sm md:max-w-md lg:max-w-none">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl opacity-30 blur-xl"></div>
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] mx-auto border-none rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 bg-gradient-to-br from-secondary/50 to-card/50 backdrop-blur-sm">
                <Image
                  src="/photo.jpg"
                  alt={personalData.name || "Ahmad Munir Malak"}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 400px"
                />
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full shadow-lg shadow-emerald-500/20 flex items-center justify-center animate-bounce animation-delay-2000">
                <Code2 className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full shadow-lg shadow-teal-500/20 flex items-center justify-center animate-bounce animation-delay-4000">
                <Terminal className="w-6 h-6 text-teal-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
