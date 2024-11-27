import Link from "next/link"
import { Celebrity } from "@/types/celebrity"

interface CelebrityCardProps {
  celebrity: any
}

export function CelebrityCard({ celebrity }: CelebrityCardProps) {
  return (
    <Link
      href={`/celebrity/${celebrity.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="block"
    >
      <div className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
        <h2 className="text-2xl font-bold">{celebrity.name}</h2>
        <p className="text-xl font-semibold text-green-600 dark:text-green-400">
          {celebrity.networth}
        </p>
        <p className="mt-2 line-clamp-3 text-muted-foreground">
          {celebrity.description}
        </p>
        <div className="mt-4 flex gap-2">
          <span className="rounded-full bg-secondary px-3 py-1 text-sm">
            {celebrity.category}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-sm">
            {celebrity.subcategory}
          </span>
        </div>
      </div>
    </Link>
  )
}