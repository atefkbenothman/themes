export const themes = [
  {
    name: "default",
    label: "Default"
  },
  {
    name: "minimal",
    label: "Minimal"
  },
  {
    name: "minimal-blue",
    label: "Minimal (Blue)"
  },
  {
    name: "modern",
    label: "Modern"
  },
  {
    name: "claude",
    label: "Claude"
  },
  {
    name: "grok",
    label: "Grok"
  },
]

export type Theme = (typeof themes)[number]
