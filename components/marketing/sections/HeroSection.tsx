import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { DemoCTA } from "./DemoCTA"

interface HeroSectionProps {
  produktName?: string
  hauptVorteil?: string
  primarerCTA?: string
  features?: string[]
}

export function HeroSection({
  produktName = "Imker-Logbuch Pro",
  hauptVorteil = "Alles am Bienenstand im Griff -- vom Smartphone aus",
  primarerCTA = "Kostenlos Beta testen",
  features = [
    "Kostenloser Beta-Zugang",
    "Kein Risiko, jederzeit abmelden",
    "DSGVO-konform",
    "Sie gestalten das Produkt mit",
  ],
}: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-8 bg-primary/10 text-primary border-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Beta-Phase gestartet
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {produktName}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
            {hauptVorteil}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" asChild>
              <Link href="/signup">
                {primarerCTA}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#funktionen">Mehr erfahren</Link>
            </Button>
          </div>

          {/* Demo CTA */}
          <DemoCTA />

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
