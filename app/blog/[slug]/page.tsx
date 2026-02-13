import { getBlogPost, getBlogPosts } from "@/lib/blog"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zum Blog
          </Link>
        </Button>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("de-DE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{post.author}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-xl font-bold mb-4">Hat Ihnen dieser Artikel gefallen?</h2>
          <p className="text-muted-foreground mb-4">
            Möchten Sie über neue Artikel informiert werden?
          </p>
          <Button asChild>
            <Link href="/signup">Für den Newsletter anmelden</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
