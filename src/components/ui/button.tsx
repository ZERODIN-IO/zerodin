import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-text-accent text-void hover:bg-text-accent/90 shadow-[0_0_20px_rgba(0,227,253,0.2)]",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border border-border-subtle bg-transparent hover:bg-surface hover:border-border-strong text-text-primary",
        secondary: "bg-surface/40 text-text-primary hover:bg-surface/60",
        ghost: "hover:bg-surface/40 hover:text-text-primary text-text-secondary",
        link: "text-text-accent underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-aurora-cyan to-aurora-cyan/70 text-void hover:from-aurora-cyan/90 hover:to-aurora-cyan/60 shadow-[0_0_30px_rgba(0,227,253,0.3)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
