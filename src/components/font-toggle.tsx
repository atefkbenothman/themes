"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FontToggle() {
  const [font, setFont] = useState<string>("mono")

  return (
    <>
      <p>Font Toggle</p>
      <Tabs defaultValue={font} className={`font-${font}`}>
        <TabsList>
          <TabsTrigger value="sans" onClick={() => setFont("sans")}>
            sans
          </TabsTrigger>
          <TabsTrigger value="serif" onClick={() => setFont("serif")}>
            serif
          </TabsTrigger>
          <TabsTrigger value="mono" onClick={() => setFont("mono")}>
            mono
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  )
}
