"use client"

import { useEffect, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { themes } from "@/lib/themes"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useThemeConfig } from "@/providers/theme-provider"

export function ThemeSelector() {
  const { setTheme } = useThemeConfig()

  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Open</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {themes.map((theme) => (
                  <DropdownMenuItem
                    key={theme.name}
                    onClick={() => setTheme(theme.name)}
                  >
                    {theme.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <RadioGroup defaultValue="default" className="flex flex-row">
              {themes.map((theme) => (
                <div key={theme.name}>
                  <Label htmlFor={theme.name}>{theme.label}</Label>
                  <RadioGroupItem
                    value={theme.name}
                    id={theme.name}
                    onClick={() => setTheme(theme.name)}
                  />
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      )}
    </>
  )
}
