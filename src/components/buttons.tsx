"use client"

import { Button } from "@/components/ui/button"
import { useSoundEffect } from "@/hooks/use-sound-effect"
import { ChevronRight } from "lucide-react"

export function ButtonComponent() {
  const { play, AudioComponent } = useSoundEffect("/hover.mp3", { volume: 0.5 })

  return (
    <>
      {AudioComponent}
      <p>Buttons</p>
      <div className="flex flex-row gap-8">
        <Button variant="default" onClick={play}>
          Default
        </Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline" size="icon">
          <ChevronRight />
        </Button>
      </div>
    </>
  )
}
