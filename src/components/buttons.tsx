import { Button } from "@/components/ui/button"

export function ButtonComponent() {
  return (
    <>
      <p>Buttons</p>
      <div className="flex flex-row gap-8">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </>
  )
}
