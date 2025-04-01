export function Colors() {
  return (
    <>
      <p>Background</p>
      <div className="bg-background border-foreground h-16 w-16 border" />
      <p>Foreground</p>
      <div className="bg-foreground border-background h-16 w-16 border" />
      <p>Muted</p>
      <div className="bg-muted border-foreground h-16 w-16 border" />
      <p>Ring</p>
      <div className="bg-ring border-foreground h-16 w-16 border" />
      <p>Input</p>
      <div className="bg-input border-foreground h-16 w-16 border" />
    </>
  )
}
