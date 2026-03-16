import { cn } from "@/lib/utils"
import { CSSProperties } from "react"

interface LetterTileProps {
  letter: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "gold" | "accent" | "empty"
  className?: string
  style?: CSSProperties
}

export function LetterTile({
  letter,
  size = "md",
  variant = "default",
  className,
  style,
}: LetterTileProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center font-black uppercase rounded-lg border shadow-lg transition-transform hover:scale-105",
        {
          // Sizes
          "w-10 h-10 text-lg": size === "sm",
          "w-14 h-14 text-2xl": size === "md",
          "w-20 h-20 text-4xl": size === "lg",
          // Variants
          "bg-card border-border text-foreground": variant === "default",
          "bg-gradient-to-br from-primary to-primary/80 border-primary/50 text-primary-foreground shadow-primary/30":
            variant === "gold",
          "bg-gradient-to-br from-accent/80 to-accent/60 border-accent/50 text-accent-foreground":
            variant === "accent",
          "bg-secondary/50 border-dashed border-muted-foreground/30 text-muted-foreground":
            variant === "empty",
        },
        className
      )}
      style={style}
    >
      {letter}
    </div>
  )
}
