"use client"

import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { ThemeSelector } from "@/components/theme-selector"
import { useThemeConfig } from "@/providers/theme-provider"

export default function Home() {
  const { theme } = useThemeConfig()

  return (
    <div className="m-4">
      <p>Home</p>
      <p>Theme: {theme}</p>
      <ThemeSelector />
      <DarkModeToggle />
    </div>
  )
}
