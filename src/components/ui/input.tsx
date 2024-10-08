/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react/prop-types */
import * as React from "react"

import { cn } from "@/lib/utils"

export type InputProperties = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProperties>(
  ({ className, type, ...properties }, reference) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:font-normal placeholder:text-muted-foreground placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={reference}
        {...properties}
        onWheel={(e) => e.currentTarget.blur()}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
