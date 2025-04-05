import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsComponent() {
  return (
    <div>
      <p>Tabs</p>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Tabs defaultValue="two">
            <TabsList defaultValue="two">
              <TabsTrigger value="one">One</TabsTrigger>
              <TabsTrigger value="two">Two</TabsTrigger>
              <TabsTrigger value="three">Three</TabsTrigger>
              <TabsTrigger value="four">Four</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div>
          <Tabs defaultValue="output" className="w-full max-w-4xl">
            <TabsList className="p-0">
              <TabsTrigger value="output">Output</TabsTrigger>
              <TabsTrigger value="errors" className="relative px-4 py-1.5">
                Errors
                <span className="bg-destructive absolute top-1 right-1 h-2 w-2 rounded-full"></span>
              </TabsTrigger>
              <TabsTrigger value="warnings" className="relative px-4 py-1.5">
                Warnings
                <span className="bg-secondary absolute top-1 right-1 h-2 w-2 rounded-full"></span>
              </TabsTrigger>
              <TabsTrigger value="debug">Debug</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div>
          <Tabs defaultValue="account" className="w-full max-w-4xl font-mono">
            <TabsList className="flex h-auto w-full justify-start gap-1 bg-transparent p-0">
              <TabsTrigger
                value="account"
                className="data-[state=active]:text-foreground data-[state=active]:border-primary text-muted-foreground rounded-none px-3 py-1 transition-colors data-[state=active]:border-b-2 data-[state=active]:bg-transparent"
              >
                <span className="text-muted-foreground mr-1">$</span> account
              </TabsTrigger>
              <TabsTrigger
                value="billing"
                className="data-[state=active]:text-foreground data-[state=active]:border-primary text-muted-foreground rounded-none px-3 py-1 transition-colors data-[state=active]:border-b-2 data-[state=active]:bg-transparent"
              >
                <span className="text-muted-foreground mr-1">$</span> billing
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="data-[state=active]:text-foreground data-[state=active]:border-primary text-muted-foreground rounded-none px-3 py-1 transition-colors data-[state=active]:border-b-2 data-[state=active]:bg-transparent"
              >
                <span className="text-muted-foreground mr-1">$</span> settings
              </TabsTrigger>
              <TabsTrigger
                value="api"
                className="data-[state=active]:text-foreground data-[state=active]:border-primary text-muted-foreground rounded-none px-3 py-1 transition-colors data-[state=active]:border-b-2 data-[state=active]:bg-transparent"
              >
                <span className="text-muted-foreground mr-1">$</span> api
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
