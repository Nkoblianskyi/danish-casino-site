import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  max?: number
  size?: "xs" | "sm" | "md" | "lg"
}

export function StarRating({ rating, max = 5, size = "md" }: StarRatingProps) {
  const fullStars = Math.floor(rating / 2)
  const halfStar = rating % 2 >= 1
  const emptyStars = max - fullStars - (halfStar ? 1 : 0)

  const starSize = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }[size]

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={`${starSize} text-yellow-500 fill-yellow-500`} />
      ))}

      {halfStar && (
        <div className="relative">
          <Star className={`${starSize} text-yellow-500`} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className={`${starSize} text-yellow-500 fill-yellow-500`} />
          </div>
        </div>
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className={`${starSize} text-yellow-500`} />
      ))}
    </div>
  )
}
