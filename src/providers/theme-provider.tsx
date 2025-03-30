"use client"

import { useState, useEffect, createContext, useContext } from "react"

const COOKIE_NAME = "theme"
const DEFAULT_THEME = "minimal"

function setThemeCookie(theme: string) {
  if (typeof window === "undefined") return

  document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=31536000; SameSite=Lax; ${window.location.protocol === "https:" ? "Secure;" : ""}`
}

type ThemeContextType = {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  initialTheme,
}: {
  children: React.ReactNode
  initialTheme?: string
}) {
  const [theme, setTheme] = useState<string>(initialTheme || DEFAULT_THEME)

  useEffect(() => {
    setThemeCookie(theme)

    Array.from(document.body.classList)
      .filter((className) => className.startsWith("theme-"))
      .forEach((className) => {
        document.body.classList.remove(className)
      })

    document.body.classList.add(`theme-${theme}`)

    if (theme.endsWith("-scaled")) {
      document.body.classList.add("theme-scaled")
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeConfig() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useThemeConfig must be used within a ThemeProvider")
  }

  return context
}
