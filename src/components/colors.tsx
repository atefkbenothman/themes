import { Card } from "@/components/ui/card"
import { useSoundEffect } from "@/hooks/use-sound-effect"

const colorItems = [
  { name: "Background", className: "bg-background" },
  { name: "Foreground", className: "bg-foreground" },
  { name: "Card", className: "bg-card" },
  { name: "Popover", className: "bg-popover" },
  { name: "Popover Foreground", className: "bg-popover-foreground" },
  { name: "Primary", className: "bg-primary" },
  { name: "Primary Foreground", className: "bg-primary-foreground" },
  { name: "Secondary", className: "bg-secondary" },
  { name: "Secondary Foreground", className: "bg-secondary-foreground" },
  { name: "Muted", className: "bg-muted" },
  { name: "Muted Foreground", className: "bg-muted-foreground" },
  { name: "Accent", className: "bg-accent" },
  { name: "Accent Foreground", className: "bg-accent-foreground" },
  { name: "Destructive", className: "bg-destructive" },
  { name: "Destructive Foreground", className: "bg-destructive-foreground" },
  { name: "Border", className: "bg-border" },
  { name: "Input", className: "bg-input" },
  { name: "Ring", className: "bg-ring" },
  { name: "Chart 1", className: "bg-chart-1" },
  { name: "Chart 2", className: "bg-chart-2" },
  { name: "Chart 3", className: "bg-chart-3" },
  { name: "Chart 4", className: "bg-chart-4" },
  { name: "Chart 5", className: "bg-chart-5" },
]

export function Colors() {
  const { play, AudioComponent } = useSoundEffect("/hover.mp3", { volume: 0.6 })
  return (
    <>
      {AudioComponent}
      <p>Colors</p>
      <div className="grid grid-cols-7 space-y-2">
        {colorItems.map(({ name, className }) => (
          <div key={name}>
            <p className="text-xs">{name}</p>
            <Card
              onMouseEnter={play}
              className={`${className} h-16 w-16 border hover:scale-105`}
            />
          </div>
        ))}
      </div>
    </>
  )
}
