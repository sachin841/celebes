import { celebs } from "@/types/data"

interface PageProps {
  params: {
    slug: string
  }
}



export default function CelebrityPage({ params }: PageProps) {
  const celebrity = celebs.find(
    (c) => c.name.toLowerCase().replace(/\s+/g, "-") === params.slug
  )

  if (!celebrity) {
    return <div>Celebrity not found</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">{celebrity.name} networth</h1>
      <p className="text-3xl font-semibold text-green-600 dark:text-green-400">
        {celebrity.networth}
      </p>
      <p className="text-lg text-muted-foreground">{celebrity.description}</p>
      <div className="flex gap-3">
        <span className="rounded-full bg-secondary px-4 py-2">
          {celebrity.category}
        </span>
        <span className="rounded-full bg-secondary px-4 py-2">
          {celebrity.subcategory}
        </span>
      </div>
    </div>
  )
}