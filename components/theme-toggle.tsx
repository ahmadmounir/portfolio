"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === "system") {
      setTheme("light")
    } else if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("system")
    }
  }

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-5 w-5" />
    }
    if (theme === "light") {
      return <Sun className="h-5 w-5" />
    }
    return <Moon className="h-5 w-5" />
  }

  const getLabel = () => {
    if (theme === "system") return "System theme"
    if (theme === "light") return "Light theme"
    return "Dark theme"
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="relative overflow-hidden"
      title={getLabel()}
    >
      {getIcon()}
      <span className="sr-only">{getLabel()}</span>
    </Button>
  )
}
