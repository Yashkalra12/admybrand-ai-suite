import type React from "react"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong" | "panel" | "neon"
  glow?: boolean
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", glow = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl transition-all duration-300 relative overflow-hidden",
          {
            "glass-card": variant === "default",
            "glass-strong": variant === "strong",
            "glass-panel": variant === "panel",
            "glass-card neon-glow border-primary/40": variant === "neon", // This variant still has a direct border
          },
          glow && "neon-glow",
          className,
        )}
        {...props}
      />
    )
  },
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
