"use client"

import { Colors } from "@/components/colors"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { FontToggle } from "@/components/font-toggle"
import { ThemeSelector } from "@/components/theme-selector"
import { useThemeConfig } from "@/providers/theme-provider"
import { TabsComponent } from "@/components/tabs"
import { ButtonComponent } from "@/components/buttons"
import { InputsComponent } from "@/components/inputs"
import { CardsComponent } from "@/components/cards"
import { PopoverComponent } from "@/components/popovers"
import { TooltipComponent } from "@/components/tooltips"
import { ToggleComponent } from "@/components/toggles"
import { SwitchComponent } from "@/components/switches"

export default function Home() {
  const { theme } = useThemeConfig()

  return (
    <div className="space-y-4 p-4">
      <p className="font-bold">Home</p>
      <div className="border-b"></div>
      <p>Theme: {theme}</p>
      <ThemeSelector />
      <div className="border-b"></div>
      <DarkModeToggle />
      <div className="border-b"></div>
      <FontToggle />
      <div className="border-b"></div>
      <TabsComponent />
      <div className="border-b"></div>
      <ButtonComponent />
      <div className="border-b"></div>
      <InputsComponent />
      <div className="border-b"></div>
      <CardsComponent />
      <div className="border-b"></div>
      <div className="flex grid grid-cols-4 items-center">
        <div>
          <PopoverComponent />
        </div>
        <div>
          <TooltipComponent />
        </div>
        <div>
          <ToggleComponent />
        </div>
        <div>
          <SwitchComponent />
        </div>
      </div>
      <div className="border-b"></div>
      <Colors />
    </div>
  )
}
