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
    name: "black-white",
    label: "Black & White"
  },
]

export type Theme = (typeof themes)[number]
