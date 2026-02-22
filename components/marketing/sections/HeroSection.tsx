"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import {
  HoneycombPattern,
  WaveDivider,
  FloatingHexagons,
} from "@/components/ui/decorative-elements"
import { PhoneMockup } from "@/components/marketing/PhoneMockup"
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
  const nameParts = produktName.split(" ")
  const proIndex = nameParts.findIndex((w) => w === "Pro")

  return (
    <section className="relative py-20 md:py-32 overflow-hidden gradient-warm">
      {/* Decorative backgrounds */}
      <FloatingHexagons />
      <HoneycombPattern className="opacity-10 top-0 right-0 left-auto w-1/2" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col items-start text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            >
              <div className="inline-flex items-center rounded-full border border-honey-300 px-4 py-1.5 text-sm font-medium mb-8 bg-honey-50 text-honey-700">
                <span className="flex h-2 w-2 rounded-full bg-honey-500 mr-2 animate-pulse" />
                Beta-Phase gestartet
              </div>
            </motion.div>

            {/* H1 Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {proIndex >= 0 ? (
                  <>
                    {nameParts.slice(0, proIndex).join(" ")}{" "}
                    <span className="gradient-text">
                      {nameParts[proIndex]}
                    </span>
                    {nameParts.slice(proIndex + 1).length > 0 &&
                      " " + nameParts.slice(proIndex + 1).join(" ")}
                  </>
                ) : (
                  <>
                    {nameParts.slice(0, -1).join(" ")}{" "}
                    <span className="gradient-text">{nameParts[nameParts.length - 1]}</span>
                  </>
                )}
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-xl md:text-2xl text-earth-600 mb-8 max-w-lg leading-relaxed font-body">
                {hauptVorteil}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="gradient-honey text-white font-semibold shadow-glow hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href="/signup">
                    {primarerCTA}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-honey-300 text-honey-700 hover:bg-honey-50"
                  asChild
                >
                  <Link href="#funktionen">Mehr erfahren</Link>
                </Button>
              </div>
            </motion.div>

            {/* Demo CTA */}
            <DemoCTA />

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            >
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-earth-600"
                  >
                    <CheckCircle2 className="h-4 w-4 text-honey-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Phone Mockup */}
          <AnimatedSection
            direction="right"
            delay={0.2}
            className="flex justify-center md:justify-end"
          >
            <PhoneMockup />
          </AnimatedSection>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <WaveDivider />
    </section>
  )
}
