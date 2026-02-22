"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"

interface ProblemStatementProps {
  uberschrift?: string
  taglicheFrustration?: string
  problemDetails?: string[]
  auswirkung?: string
  zeitVerlust?: string
}

export function ProblemStatement({
  uberschrift = "Kennen Sie das?",
  taglicheFrustration =
    "Sie stehen am Bienenstand mit klebrigen Fingern. Ein Volk schwärmt gleich aus. Sie wollen nur schnell notieren, was Sie gesehen haben. Aber wo ist bloß das Bestandsbuch? Und haben Sie die Medikamente vom letzten Jahr eingetragen?",
  problemDetails = [
    "Das Bestandsbuch ist unvollständig -- und das kann bei einer Kontrolle teuer werden",
    "Honig-Chargen lassen sich nicht zurückverfolgen -- Kunden fragen nach",
    "Wichtige Termine wie die Varroa-Kontrolle geraten in Vergessenheit",
    "Alles liegt verstreut: Zettel, Excel, verschiedene Apps",
  ],
  auswirkung =
    "Zeit, die Sie am Bienenstand verbringen sollten, verbringen Sie mit Suchen und Organisieren.",
  zeitVerlust = "2-3 Stunden pro Woche",
}: ProblemStatementProps) {
  return (
    <section id="problem" className="py-16 md:py-24 gradient-warm">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-earth-800">
                {uberschrift}
              </h2>
            </div>
          </AnimatedSection>

          {/* Main Problem Scenario */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="bg-cream rounded-2xl p-6 md:p-8 shadow-warm mb-8 border border-honey-100">
              <p className="text-lg md:text-xl leading-relaxed text-earth-700 font-body">
                {taglicheFrustration}
              </p>
            </div>
          </AnimatedSection>

          {/* Problem Details Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {problemDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className="flex items-start p-4 bg-cream rounded-xl shadow-warm border border-honey-100 h-full"
              >
                <div className="h-2.5 w-2.5 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0" />
                <p className="text-earth-600">{detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Impact Statement */}
          <AnimatedSection direction="up" delay={0.5}>
            <div className="text-center p-8 bg-gradient-to-br from-honey-50 to-earth-50 rounded-2xl border border-honey-200 shadow-warm">
              <p className="font-display text-5xl md:text-6xl font-bold text-honey-600 mb-3">
                {zeitVerlust}
              </p>
              <p className="text-lg font-medium text-earth-700 mb-1">
                {auswirkung}
              </p>
              <p className="text-sm text-earth-500">
                Das sind etwa {zeitVerlust} reine Verwaltungszeit.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
