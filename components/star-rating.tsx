import { Star } from "lucide-react"

export function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center justify-center gap-1" aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-9 w-9 fill-amber-400 text-amber-400 md:h-10 md:w-10"
        />
      ))}
    </div>
  )
}
