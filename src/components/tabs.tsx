import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsComponent() {
  return (
    <>
      <p>Tabs</p>
      <Tabs defaultValue="two">
        <TabsList>
          <TabsTrigger value="one" className="dark:border-none">
            One
          </TabsTrigger>
          <TabsTrigger value="two" className="dark:border-none">
            Two
          </TabsTrigger>
          <TabsTrigger value="three" className="dark:border-none">
            Three
          </TabsTrigger>
          <TabsTrigger value="four" className="dark:border-none">
            Four
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  )
}
