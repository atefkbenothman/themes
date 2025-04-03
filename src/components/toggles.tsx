import { Italic } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleComponent() {
  return (
    <>
      <p>Toggle</p>
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic />
      </Toggle>
    </>
  )
}
