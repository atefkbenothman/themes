"use client"

import { Colors } from "@/components/colors"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { FontToggle } from "@/components/font-toggle"
import { ThemeSelector } from "@/components/theme-selector"
import { useThemeConfig } from "@/providers/theme-provider"
import { TabsComponent } from "@/components/tabs"

export default function Home() {
  const { theme } = useThemeConfig()

  return (
    <div className="m-4 space-y-2 border border-dashed p-2">
      <div className="border border-dashed p-1">
        <p>Home</p>
      </div>
      <div className="border border-dashed p-1">
        <p>Theme: {theme}</p>
      </div>
      <div className="border border-dashed p-1">
        <ThemeSelector />
      </div>
      <div className="border border-dashed p-1">
        <DarkModeToggle />
      </div>
      <div className="border border-dashed p-1">
        <FontToggle />
      </div>
      <div className="border border-dashed p-1">
        <Colors />
      </div>
      <div className="border border-dashed p-1">
        <TabsComponent />
      </div>
    </div>
  )
}
