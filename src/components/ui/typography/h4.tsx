import clsx from "clsx"

interface TypographyH7Properties {
  children: React.ReactNode
  className?: string
}

export function TypographyH7({ children, className }: TypographyH7Properties) {
  return (
    <h4 className={clsx("text-md scroll-m-20 tracking-tight text-textColor", className)}>
      {children}
    </h4>
  )
}
