"use client"

import { ThemeProvider } from "next-themes"

export function DarkModeProvider({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProvider>) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}
