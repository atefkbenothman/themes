"use client"

import { useState } from "react"
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { MailDisplay } from "@/components/mail/mail-display"
import { MailList } from "@/components/mail/mail-list"
import { type Mail } from "@/components/mail/data"

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function Mail({
  accounts,
  mails,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes,
          )}`
        }}
        className="bg-card my-8 flex items-stretch rounded-lg border"
      >
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <div>
            <Tabs defaultValue="all" className="flex h-[500px] flex-col">
              {" "}
              <div className="flex flex-shrink-0 items-center px-4 py-2">
                <h1 className="text-xl font-bold">Inbox</h1>
                <TabsList className="ml-auto">
                  <TabsTrigger
                    value="all"
                    className="text-zinc-600 dark:text-zinc-200"
                  >
                    All mail
                  </TabsTrigger>
                  <TabsTrigger
                    value="unread"
                    className="text-zinc-600 dark:text-zinc-200"
                  >
                    Unread
                  </TabsTrigger>
                </TabsList>
              </div>
              <Separator className="flex-shrink-0" />
              <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 flex-shrink-0 p-4 backdrop-blur">
                <form>
                  <div className="relative">
                    <Search className="text-muted-foreground absolute top-2.5 left-2 h-4 w-4" />
                    <Input placeholder="Search" className="pl-8" />
                  </div>
                </form>
              </div>
              <TabsContent
                value="all"
                className="m-0 flex flex-1 overflow-hidden"
              >
                <MailList items={mails} />
              </TabsContent>
              <TabsContent
                value="unread"
                className="m-0 flex flex-1 overflow-hidden"
              >
                <MailList items={mails.filter((item) => !item.read)} />
              </TabsContent>
            </Tabs>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
          <MailDisplay
            mail={
              mails.find(
                (item) => item.id === "110e8400-e29b-11d4-a716-446655440000",
              ) || null
            }
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}

// <Tabs defaultValue="all" className="bg-green-500">
//             <div className="flex h-full items-center bg-orange-500 px-4 py-2">
//               <h1 className="text-xl font-bold">Inbox</h1>
//               <TabsList className="ml-auto">
//                 <TabsTrigger
//                   value="all"
//                   className="text-zinc-600 dark:text-zinc-200"
//                 >
//                   All mail
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="unread"
//                   className="text-zinc-600 dark:text-zinc-200"
//                 >
//                   Unread
//                 </TabsTrigger>
//               </TabsList>
//             </div>
//             <Separator />
//             <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 p-4 backdrop-blur">
//               <form>
//                 <div className="relative">
//                   <Search className="text-muted-foreground absolute top-2.5 left-2 h-4 w-4" />
//                   <Input placeholder="Search" className="pl-8" />
//                 </div>
//               </form>
//             </div>
//             <TabsContent value="all" className="m-0">
//               <div className="bg-red-500">
//                 <p>hello</p>
//               </div>
//               {/* <MailList items={mails} /> */}
//             </TabsContent>
//             <TabsContent value="unread" className="m-0">
//               <MailList items={mails.filter((item) => !item.read)} />
//             </TabsContent>
//           </Tabs>
//         </ResizablePanel>
//         <ResizableHandle withHandle />
//         <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
//           <MailDisplay
//             mail={
//               mails.find(
//                 (item) => item.id === "110e8400-e29b-11d4-a716-446655440000",
//               ) || null
//             }
//           />
//         </ResizablePanel>
//       </ResizablePanelGroup>
//     </TooltipProvider>
//   )
// }
