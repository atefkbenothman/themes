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
  {
    name: "polar",
    label: "Polar"
  },
  {
    name: "polar-base",
    label: "Polar (Base)"
  },
]

export type Theme = (typeof themes)[number]
