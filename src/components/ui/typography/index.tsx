import clsx from "clsx"

interface TypographyProperties {
  children: React.ReactNode
  className?: string
}

export function Typography({ children, className }: TypographyProperties) {
  return <p className={clsx(className)}>{children}</p>
}
