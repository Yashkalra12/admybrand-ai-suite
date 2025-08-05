import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"

export interface NeonButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "ghost"
  glow?: boolean
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", glow = false, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all duration-300 font-medium",
          "transform hover:scale-[1.02] active:scale-[0.98]",
          {
            // Original neon variants
            "bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary/50 hover:border-primary":
              variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/90 border-2 border-secondary/50 hover:border-secondary":
              variant === "secondary",
            "bg-transparent border-2 border-primary text-primary hover:bg-primary/20 hover:text-primary-foreground":
              variant === "ghost",
          },
          // Only apply glow to original neon variants
          glow &&
            (variant === "primary" || variant === "secondary") && {
              "neon-glow hover:neon-glow-strong": variant === "primary",
              "neon-glow-secondary hover:shadow-[0_0_40px_hsl(var(--secondary))]": variant === "secondary",
            },
          className,
        )}
        {...props}
      >
        {/* Original shimmer for neon variants */}
        {(variant === "primary" || variant === "secondary" || variant === "ghost") && (
          <div className="absolute inset-0 -top-px overflow-hidden rounded-md">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </div>
        )}

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">{children}</span>

        {/* Original glow effect for neon variants */}
        {(variant === "primary" || variant === "secondary" || variant === "ghost") && (
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
      </Button>
    )
  },
)
NeonButton.displayName = "NeonButton"

export { NeonButton }
