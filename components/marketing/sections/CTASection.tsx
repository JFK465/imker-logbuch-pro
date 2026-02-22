"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import {
  HoneycombPattern,
  WaveDivider,
} from "@/components/ui/decorative-elements"

interface CTASectionProps {
  problem?: string
  ctaText?: string
  inklusion?: string[]
  knappheit?: string
  zeitstempel?: string
  bonus?: string
}

export function CTASection({
  problem = "Zeit am Bienenstand statt am Schreibtisch verbringen",
  ctaText = "Jetzt kostenlos Beta testen",
  inklusion = [
    "Kostenloser Zugang während der Beta",
    "Einfluss auf die Produkt-Roadmap",
    "Persönliches Onboarding",
  ],
  zeitstempel = "Beta läuft -- jetzt beitreten",
  bonus = "Early-Adopter-Pricing nach der Beta",
}: CTASectionProps) {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-honey-500 to-amber-600 text-white overflow-hidden">
      {/* Wave divider at top (flipped) */}
      <WaveDivider flip={true} />

      {/* Honeycomb pattern overlay */}
      <HoneycombPattern className="opacity-15" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
              {problem}
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Hören Sie auf, Zeit mit Verwaltung zu verschwenden.
              Konzentrieren Sie sich auf das, was wirklich zählt: Ihre Bienen.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-honey-600 hover:bg-honey-50 font-bold shadow-warm hover:shadow-glow transition-all duration-300 px-8"
                asChild
              >
                <Link href="/signup">
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* What's Included */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
              {inklusion.map((item, index) => (
                <div key={index} className="flex items-center text-sm text-white/90">
                  <Check className="h-4 w-4 mr-2 text-white" />
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            {/* Time Stamp */}
            <p className="text-sm text-white/70">{zeitstempel}</p>

            {/* Bonus */}
            {bonus && (
              <p className="text-sm mt-3 text-white/90 font-semibold">
                {bonus}
              </p>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
