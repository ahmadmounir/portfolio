"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"
import { personalData } from "@/lib/personal-data"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, language } = useLanguage()
  
  // Determine sheet side based on language direction
  const sheetSide = language === 'ar' ? 'right' : 'left'

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-emerald-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between md:justify-normal items-center h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-clip-text text-transparent"
          >
            AM
          </a>

          {/* Desktop Navigation - Links in Middle */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Controls - Right Side */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side={sheetSide as "left" | "right"} 
                className="w-80 bg-background/95 backdrop-blur-xl border-border/50"
              >
                <SheetHeader className="border-b border-border/50 pb-4">
                  <SheetTitle>
                    <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
                      {personalData.name}
                    </span>
                  </SheetTitle>
                </SheetHeader>

                {/* Sheet Content */}
                <div className="flex flex-col justify-between h-full py-6">
                  <div className="space-y-6">
                    {/* Navigation Links */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Navigation
                      </h3>
                      {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block text-base font-medium text-foreground hover:text-emerald-500 transition-colors py-2 px-3 rounded-lg hover:bg-secondary/50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Connect
                      </h3>
                      <div className="flex gap-3">
                        <a
                          href={personalData.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href={personalData.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={`mailto:${personalData.email}`}
                          className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                          aria-label="Email"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>

                    {/* Theme and Language Controls */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Settings
                      </h3>
                      <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <LanguageSwitcher />
                      </div>
                    </div>
                  </div>

                  {/* Sheet Footer */}
                  <SheetFooter className="border-t border-border/50 pt-4 mt-6">
                    <div className="w-full text-center">
                      <p className="text-xs text-muted-foreground">
                        © 2025 {personalData.name}. All rights reserved.
                      </p>
                    </div>
                  </SheetFooter>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
