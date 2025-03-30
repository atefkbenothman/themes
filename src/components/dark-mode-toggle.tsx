"use client"

import { useTheme } from "next-themes"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DarkModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Tabs defaultValue={theme ? theme : "light"}>
      <TabsList>
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          Light
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          Dark
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
