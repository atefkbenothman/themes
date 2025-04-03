import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsComponent() {
  return (
    <>
      <p>Tabs</p>
      <Tabs defaultValue="two">
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
          <TabsTrigger value="three">Three</TabsTrigger>
          <TabsTrigger value="four">Four</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  )
}
