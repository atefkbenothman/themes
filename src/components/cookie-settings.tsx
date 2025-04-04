import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function CookieSettings() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex flex-col">
            <p>Strictly Necessary</p>
            <Label
              htmlFor="necessary"
              className="flex flex-col space-y-1 text-left"
            >
              <span className="text-muted-foreground leading-snug font-normal">
                These cookies are essential in order to use the website and use
                its features.
              </span>
            </Label>
          </div>
          <Switch id="necessary" defaultChecked />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex flex-col">
            <p>Functional Cookies</p>
            <Label htmlFor="functional" className="flex flex-col space-y-1">
              <span className="text-muted-foreground leading-snug font-normal">
                These cookies allow the website to provide personalized
                functionality.
              </span>
            </Label>
          </div>
          <Switch id="functional" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex flex-col">
            <p>Performance Cookies</p>
            <Label htmlFor="performance" className="flex flex-col space-y-1">
              <span className="text-muted-foreground leading-snug font-normal">
                These cookies help to improve the performance of the website.
              </span>
            </Label>
          </div>
          <Switch id="performance" className="p-0" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
