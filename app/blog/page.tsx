import Link from "next/link"
import { getBlogPosts } from "@/lib/blog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="min-h-screen py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Tipps und Neuigkeiten rund um die Imkerei.
          </p>

          <div className="grid gap-6">
            {posts.map((post) => (
              <Card
                key={post.slug}
                className="hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("de-DE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-2xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary text-sm font-medium mt-4 inline-block hover:underline"
                  >
                    Weiterlesen →
                  </Link>
                </CardContent>
              </Card>
            ))}

            {posts.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                Bald finden Sie hier hilfreiche Artikel zur Imkerei.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
