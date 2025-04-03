"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DarkModeToggle() {
  const { setTheme, theme } = useTheme()

  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <p>Dark Mode</p>
      {mounted && (
        <Tabs defaultValue={theme ? theme : ""}>
          <TabsList>
            <TabsTrigger value="light" onClick={() => setTheme("light")}>
              Light
            </TabsTrigger>
            <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
              Dark
            </TabsTrigger>
          </TabsList>
        </Tabs>
      )}
    </>
  )
}
