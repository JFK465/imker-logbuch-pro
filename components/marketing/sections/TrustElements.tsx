"use client"

import { Shield, Server, Lock, Eye } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

interface TrustElementsProps {
  sicherheitsStandard?: string
  supportZeit?: string
  datenschutz?: string
}

export function TrustElements({
  sicherheitsStandard = "Verschlüsselte Datenübertragung",
  supportZeit = "Per E-Mail, Antwort innerhalb von 24 Stunden",
  datenschutz = "DSGVO-konform, Server in Deutschland",
}: TrustElementsProps) {
  const trustItems = [
    {
      icon: <Shield className="h-7 w-7" />,
      title: sicherheitsStandard,
      description: "SSL/TLS-Verschlüsselung für alle Daten",
    },
    {
      icon: <Server className="h-7 w-7" />,
      title: datenschutz,
      description: "Ihre Daten bleiben in Deutschland",
    },
    {
      icon: <Lock className="h-7 w-7" />,
      title: "Ihre Daten gehören Ihnen",
      description: "Jederzeit exportierbar, jederzeit löschbar",
    },
    {
      icon: <Eye className="h-7 w-7" />,
      title: supportZeit,
      description: "Wir lesen und beantworten jede Nachricht",
    },
  ]

  return (
    <section className="py-12 md:py-16 border-t border-honey-100">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
              <div className="flex flex-col items-center text-center space-y-3">
                {/* Gradient icon circle */}
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-honey-100 to-earth-100 flex items-center justify-center text-honey-600 shadow-warm">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-sm md:text-base text-earth-800 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-earth-500">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
