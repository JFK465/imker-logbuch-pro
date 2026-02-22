"use client"

import type { ReactNode } from "react"
import {
  QrCode,
  FileText,
  CloudRain,
  Mic,
  TrendingUp,
} from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { HoneycombPattern } from "@/components/ui/decorative-elements"
import { FeatureCard } from "@/components/ui/feature-card"

interface Feature {
  icon: ReactNode
  name: string
  benefit: string
  painPoint: string
}

interface FeaturesSectionProps {
  uberschrift?: string
  unteruberschrift?: string
  features?: Feature[]
  kundenZitat?: string
  schmerzAufloesung?: string
}

const defaultFeatures: Feature[] = [
  {
    icon: <QrCode className="h-8 w-8" />,
    name: "Stockkarten-Digitalisierung",
    benefit:
      "Jeder Stock hat einen QR-Code. Scannen, dokumentieren, fertig.",
    painPoint:
      "Kein Zettelsuchen mehr. Mit Handschuhen und klebrigen Fingern bedienbar.",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    name: "Rechtskonformes Bestandsbuch",
    benefit:
      "Automatisch generiert nach VO (EU) 2017/625. Bereit für die Behörden.",
    painPoint:
      "Schützt vor Bußgeldern bei Kontrollen. Immer aktuell und vollständig.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    name: "Ernte- & Chargenverfolgung",
    benefit:
      "Jede Honig-Charge ist rückverfolgbar. Von der Wabe bis zum Glas.",
    painPoint:
      "Professioneller Verkauf erfordert Nachvollziehbarkeit. Das liefern wir.",
  },
  {
    icon: <CloudRain className="h-8 w-8" />,
    name: "Varroa-Wetter-Integration",
    benefit:
      "Wetterdaten + Varroa-Risiko. Wissen Sie genau, wann behandelt werden muss.",
    painPoint:
      "Die richtige Behandlung zum richtigen Zeitpunkt -- nicht zu früh, nicht zu spät.",
  },
  {
    icon: <Mic className="h-8 w-8" />,
    name: "Spracheingabe",
    benefit: "Dokumentieren Sie, während Sie arbeiten. Ohne Hände.",
    painPoint:
      "Schnell und einfach am Bienenstand. Auch mit Helm und Handschuhen.",
  },
]

export function FeaturesSection({
  uberschrift = "Was Imker-Logbuch Pro für Sie tut",
  unteruberschrift = "Funktionen, die Ihren Alltag verändern",
  features = defaultFeatures,
  kundenZitat = "",
  schmerzAufloesung = "Alles im Griff, vom Smartphone aus",
}: FeaturesSectionProps) {
  return (
    <section id="funktionen" className="relative py-16 md:py-24 bg-gradient-to-br from-honey-50 via-cream to-earth-50 overflow-hidden">
      {/* Honeycomb pattern overlay */}
      <HoneycombPattern className="opacity-20" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection direction="up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-earth-800">
              {uberschrift}
            </h2>
            <p className="text-xl text-earth-500">{unteruberschrift}</p>
          </div>
        </AnimatedSection>

        {/* Features Grid using FeatureCard */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.name}
              description={feature.benefit}
              detail={feature.painPoint}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold font-display text-earth-800 mb-2">
              {schmerzAufloesung}
            </p>
            <p className="text-earth-500">
              Alle Features funktionieren auch offline am Bienenstand.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
