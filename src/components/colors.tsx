function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>
}

export function Colors() {
  return (
    <>
      <p>Colors</p>
      <div className="grid grid-cols-7 space-y-2">
        <Wrapper>
          <p className="text-xs">Background</p>
          <div className="bg-background border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Foreground</p>
          <div className="bg-foreground border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Card</p>
          <div className="bg-card border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Popover</p>
          <div className="bg-popover border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Popover Foreground</p>
          <div className="bg-popover-foreground border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Primary</p>
          <div className="bg-primary border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Primary Foreground</p>
          <div className="bg-primary-foreground border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Secondary</p>
          <div className="bg-secondary border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Secondary Foreground</p>
          <div className="bg-secondary-foreground border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Muted</p>
          <div className="bg-muted border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Muted Foreground</p>
          <div className="bg-muted-foreground border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Accent</p>
          <div className="bg-accent border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Accent Foreground</p>
          <div className="bg-accent-foreground border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Destructive</p>
          <div className="bg-destructive border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Destructive Foreground</p>
          <div className="bg-destructive-foreground border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Border</p>
          <div className="bg-border border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Input</p>
          <div className="bg-input border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Ring</p>
          <div className="bg-ring border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Chart 1</p>
          <div className="bg-chart-1 border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Chart 2</p>
          <div className="bg-chart-2 border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Chart 3</p>
          <div className="bg-chart-3 border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Chart 4</p>
          <div className="bg-chart-4 border-foreground h-16 w-16 border" />
        </Wrapper>
        <Wrapper>
          <p className="text-xs">Chart 5</p>
          <div className="bg-chart-5 border-foreground h-16 w-16 border" />
        </Wrapper>
      </div>
    </>
  )
}
