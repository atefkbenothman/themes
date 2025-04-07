"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sun, Moon } from "lucide-react"

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
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Tabs value={theme ? theme : "dark"}>
              <TabsList>
                <TabsTrigger value="light" onClick={() => setTheme("light")}>
                  <Sun />
                </TabsTrigger>
                <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
                  <Moon />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div>
            <Select
              value={theme ? theme : "dark"}
              onValueChange={(value) => setTheme(value)}
            >
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="Change dark mode" />
              </SelectTrigger>
              <SelectContent className="w-[80px]" align="start">
                <SelectGroup>
                  <SelectItem value="dark">
                    <Moon />
                  </SelectItem>
                  <SelectItem value="light">
                    <Sun />
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </>
  )
}
