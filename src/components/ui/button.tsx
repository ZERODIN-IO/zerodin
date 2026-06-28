import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E3FD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060B14] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#00E3FD] text-[#060B14] hover:bg-[#00E3FD]/90 shadow-[0_0_20px_rgba(0,227,253,0.2)]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-[#1A2D44] bg-transparent hover:bg-[#0A1628] hover:border-[#00E3FD]/50 text-[#E8EDF5]",
        secondary: "bg-[#111D2E] text-[#E8EDF5] hover:bg-[#1A2D44]",
        ghost: "hover:bg-[#0A1628] hover:text-[#E8EDF5] text-[#6B7D95]",
        link: "text-[#00E3FD] underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-[#00E3FD] to-[#8B5CF6] text-white hover:from-[#00E3FD]/90 hover:to-[#8B5CF6]/90 shadow-[0_0_30px_rgba(0,227,253,0.3)]",
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
