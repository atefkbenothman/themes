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
import { SelectComponent } from "@/components/selects"
import { TextComponent } from "@/components/texts"
import { DropdownMenuComponent } from "@/components/dropdowns"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { LoginForm } from "@/components/login-form"
import { LoginForm2 } from "@/components/login-form-2"
import { useSoundEffect } from "@/hooks/use-sound-effect"

export default function Home() {
  const { theme } = useThemeConfig()
  const { play, AudioComponent } = useSoundEffect("/hover.mp3", { volume: 0.8 })

  const handleToastClick = () => {
    toast("hello world")
    play()
  }

  return (
    <div className="space-y-4 p-4">
      {AudioComponent}
      <p className="font-bold">Home</p>
      <div className="border-b"></div>
      <TextComponent />
      <div className="border-b"></div>
      <p className="">Theme: {theme}</p>
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
      <p>Toast</p>
      <Button onClick={handleToastClick}>Toast</Button>
      <div className="border-b"></div>
      <p>Cmd + k</p>
      <Button className="w-56">
        <div>Search...</div>
        <div className="ml-auto flex flex-row gap-1">
          <p className="text-tiny flex w-[1rem] items-center justify-center rounded-sm border">
            ⌘
          </p>
          <p className="text-tiny flex w-[1rem] items-center justify-center rounded-sm border">
            K
          </p>
        </div>
      </Button>
      <div className="border-b"></div>
      <DropdownMenuComponent />
      <div className="border-b"></div>
      <div className="flex grid grid-cols-5 items-center">
        <div>
          <PopoverComponent />
        </div>
        <div>
          <SelectComponent />
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
      <p>Login</p>
      <div className="grid grid-cols-2">
        <div className="flex justify-center">
          <LoginForm />
        </div>
        <div className="flex justify-center">
          <LoginForm2 />
        </div>
      </div>
      <div className="border-b"></div>
      <Colors />
    </div>
  )
}
