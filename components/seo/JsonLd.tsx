interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationSchema({
  name,
  url,
  logo,
  sameAs = [],
}: {
  name: string
  url: string
  logo?: string
  sameAs?: string[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    sameAs,
  }

  return <JsonLd data={schema} />
}

export function BetaSoftwareSchema({
  name,
  description,
  url,
  betaStartDate,
}: {
  name: string
  description: string
  url: string
  betaStartDate?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/PreOrder",
      ...(betaStartDate && { validFrom: betaStartDate }),
      description: "Kostenloser Beta-Zugang",
    },
  }

  return <JsonLd data={schema} />
}
