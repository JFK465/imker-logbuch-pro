import { ImageResponse } from "next/og"
import { getBlogPost } from "@/lib/blog"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export async function generateImageMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = getBlogPost(params.slug)
  return [
    {
      id: params.slug,
      alt: post?.title ?? "Imker-Logbuch Pro Blog",
    },
  ]
}

export default async function Image({
  params,
}: {
  params: { slug: string }
}) {
  const post = getBlogPost(params.slug)
  const title = post?.title ?? "Imker-Logbuch Pro Blog"

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 30%, #FDE68A 60%, #F59E0B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#6E5430",
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 32,
          }}
        >
          Imker-Logbuch Pro Blog
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#1F170C",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 22,
            color: "#4A3820",
          }}
        >
          imker-logbuch-pro.de
        </div>
      </div>
    ),
    { ...size }
  )
}
