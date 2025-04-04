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
]

export type Theme = (typeof themes)[number]
