"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Smartphone, Shield } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"

interface ValuePropositionProps {
  produktName?: string
  differenzierer?: string
  konkretVorteile?: string[]
  magicMoment?: string
  ergebnisBild?: string
  alternative?: string
  zeitErsparnis?: string
  uberschrift?: string
}

export function ValueProposition({
  produktName = "Imker-Logbuch Pro",
  differenzierer = "Mobile-first mit Sprach- und Button-Eingabe für den Bienenstand",
  konkretVorteile = [
    "Automatisch rechtskonformes Bestandsbuch",
    "QR-Code-Scan am Bienenstock",
    "Wetterbasierte Varroa-Risikobewertung",
    "Chargenverfolgung für Honigverkauf",
  ],
  magicMoment =
    "Sie scannen den QR-Code am Stock, tippen kurz, und alles ist dokumentiert -- auch mit Bienenstichen an den Fingern.",
  alternative = "Papier, Excel und disparate Notizen",
  zeitErsparnis = "Deutlich weniger Aufwand",
  uberschrift = "Es geht auch anders.",
}: ValuePropositionProps) {
  return (
    <section id="loesung" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-earth-800">
                {uberschrift}
              </h2>
              <p className="text-xl text-earth-500">
                {alternative} war gestern.
              </p>
            </div>
          </AnimatedSection>

          {/* Main Value Proposition */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-12">
            {/* Left: Text content */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-semibold text-earth-800">
                  {differenzierer}
                </h3>
                <p className="text-lg text-earth-600 leading-relaxed font-body">
                  {magicMoment}
                </p>
                <ul className="space-y-4">
                  {konkretVorteile.map((vorteil, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.25 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-honey-500 flex-shrink-0" />
                      </motion.div>
                      <span className="text-earth-700">{vorteil}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Right: Summary Stats */}
            <AnimatedSection
              direction="right"
              delay={0.2}
              className="flex justify-center"
            >
              <div className="bg-gradient-to-br from-honey-50 to-earth-50 rounded-2xl p-8 border border-honey-200 shadow-warm w-full max-w-sm space-y-6">
                <h3 className="font-display text-xl font-bold text-earth-800 text-center">
                  {produktName}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm">
                    <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-honey-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-earth-800">{zeitErsparnis}</p>
                      <p className="text-xs text-earth-500">Weniger Verwaltung</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm">
                    <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                      <Smartphone className="h-5 w-5 text-honey-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-earth-800">30 Sekunden</p>
                      <p className="text-xs text-earth-500">Pro Dokumentation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm">
                    <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-honey-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-earth-800">100% rechtskonform</p>
                      <p className="text-xs text-earth-500">Nach EU-Verordnung</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Bottom CTA */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="text-center">
              <Button
                size="lg"
                className="gradient-honey text-white font-semibold shadow-warm hover:shadow-glow hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/signup">Jetzt kostenlos Beta testen</Link>
              </Button>
              <p className="mt-4 text-sm text-earth-500">
                {zeitErsparnis} -- versprochen.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
