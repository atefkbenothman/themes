import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

interface SettingsSectionProps {
  title: string
  description?: string
  children: React.ReactNode
}

function SettingsSection({
  title,
  description,
  children,
}: SettingsSectionProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

interface SettingsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  footer?: React.ReactNode
  children: React.ReactNode
}

function SettingsCard({
  title,
  description,
  footer,
  children,
  className,
  ...props
}: SettingsCardProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-6">{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}

export function SettingsComponent() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-10">
      <SettingsCard
        title="Settings"
        description="Manage your account settings and preferences."
        footer={
          <div className="flex w-full justify-end">
            <Button>Save All Changes</Button>
          </div>
        }
      >
        {/* Account Settings */}
        <SettingsSection title="Account Information">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                defaultValue="John Doe"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                defaultValue="john.doe@example.com"
              />
            </div>
          </div>
        </SettingsSection>

        <Separator className="my-4" />

        {/* Notification Settings */}
        <SettingsSection title="Notifications">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-muted-foreground text-sm">
                  Receive email notifications about account activity.
                </p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing-emails">Marketing Emails</Label>
                <p className="text-muted-foreground text-sm">
                  Receive emails about new features and offers.
                </p>
              </div>
              <Switch id="marketing-emails" />
            </div>

            <div className="space-y-2">
              <Label>Notification Frequency</Label>
              <Select defaultValue="daily">
                <SelectTrigger className="w-full sm:w-[240px]">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realtime">Real-time</SelectItem>
                  <SelectItem value="daily">Daily Digest</SelectItem>
                  <SelectItem value="weekly">Weekly Digest</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </SettingsSection>

        <Separator className="my-4" />

        {/* Display Settings */}
        <SettingsSection title="Display Settings">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Theme Preference</Label>
              <RadioGroup
                defaultValue="system"
                className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light" />
                  <Label htmlFor="light">Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark" />
                  <Label htmlFor="dark">Dark</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="system" />
                  <Label htmlFor="system">System Default</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="font-size">Font Size</Label>
              <div className="grid grid-cols-2 gap-4 sm:w-[240px]">
                <Input
                  id="font-size"
                  type="number"
                  min="12"
                  max="24"
                  defaultValue="16"
                />
                <Select defaultValue="px">
                  <SelectTrigger>
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="px">px</SelectItem>
                    <SelectItem value="rem">rem</SelectItem>
                    <SelectItem value="em">em</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="animations">Animations</Label>
                <p className="text-muted-foreground text-sm">
                  Enable or disable UI animations.
                </p>
              </div>
              <Switch id="animations" defaultChecked />
            </div>
          </div>
        </SettingsSection>

        <Separator className="my-4" />

        {/* Privacy Settings */}
        <SettingsSection title="Privacy & Security">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                <p className="text-muted-foreground text-sm">
                  Add an extra layer of security to your account.
                </p>
              </div>
              <Switch id="two-factor" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="data-collection">Data Collection</Label>
                <p className="text-muted-foreground text-sm">
                  Allow us to collect usage data to improve our services.
                </p>
              </div>
              <Switch id="data-collection" defaultChecked />
            </div>

            <div className="space-y-2">
              <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
              <Input
                id="session-timeout"
                type="number"
                min="5"
                max="120"
                defaultValue="30"
                className="sm:w-[240px]"
              />
            </div>
          </div>
        </SettingsSection>
      </SettingsCard>
    </div>
  )
}
