export const themes = [
  {
    name: "minimal",
    label: "Minimal"
  },
  {
    name: "does-not-exist",
    label: "Does Not Exist"
  },
]

export type Theme = (typeof themes)[number]
