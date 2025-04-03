import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function InputsComponent() {
  return (
    <>
      <p>Inputs</p>
      <div className="grid grid-cols-5 gap-2">
        <Input type="text" placeholder="Text" />
        <Input type="number" placeholder="Number" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="date" />
        <Input type="time" />
        <Input type="datetime-local" />
        <Input type="month" />
        <Input type="week" />
        <Input type="tel" placeholder="Phone" />
        <Input type="url" placeholder="URL" />
        <Input type="search" placeholder="Search" />
        <Input type="file" />
        <Input type="hidden" />
        <Input type="submit" value="Submit" />
        <Input type="reset" value="Reset" />
        <Input type="button" value="Button" />
        <Input type="checkbox" />
        <Input type="color" />
        <Textarea placeholder="Type your message here." />
      </div>
    </>
  )
}
