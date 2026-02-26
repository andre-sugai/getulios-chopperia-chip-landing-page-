import type { ReactNode } from "react"
import { ExternalLink } from "lucide-react"

interface ActionButtonProps {
  href: string
  icon: ReactNode
  label: string
  variant?: "primary" | "secondary" | "outline"
}

export function ActionButton({ href, icon, label, variant = "primary" }: ActionButtonProps) {
  const baseClasses =
    "flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-base font-semibold transition-all duration-200 active:scale-[0.98] md:text-lg"

  const variantClasses = {
    primary:
      "bg-[oklch(0.55_0.2_265)] text-white hover:bg-[oklch(0.50_0.22_265)] shadow-lg shadow-[oklch(0.55_0.2_265)]/25",
    secondary:
      "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-lg shadow-pink-500/25",
    outline:
      "border-2 border-[oklch(0.75_0.01_260)] bg-[oklch(0.97_0.005_260)] text-[oklch(0.3_0_0)] hover:bg-[oklch(0.93_0.005_260)]",
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span>{label}</span>
      <ExternalLink className="h-4 w-4 flex-shrink-0 opacity-60" />
    </a>
  )
}
