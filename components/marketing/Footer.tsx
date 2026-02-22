"use client"

import Link from "next/link"
import { FOOTER_LINKS } from "@/lib/constants"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { HoneycombPattern } from "@/components/ui/decorative-elements"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <footer className="relative bg-gradient-to-b from-earth-800 to-earth-900 overflow-hidden">
      {/* Subtle honeycomb overlay */}
      <HoneycombPattern className="opacity-20" />

      <div className="relative container py-14 md:py-20">
        {/* Top section: Logo + columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold font-display text-honey-400">
                Imker-Logbuch
              </span>
              <span className="text-2xl font-bold font-display text-honey-300">
                Pro
              </span>
            </div>
            <p className="text-sm text-earth-200 leading-relaxed">
              Smarte Verwaltung für Hobby-Imker und Direktvermarkter.
              Rechtskonform, mobil, einfach.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-honey-300">
              Produkt
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.produkt.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-earth-200 hover:text-honey-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-honey-300">
              Unternehmen
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.unternehmen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-earth-200 hover:text-honey-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-honey-300">
              Updates erhalten
            </h4>
            <p className="text-sm text-earth-200">
              Wir informieren Sie, wenn die Beta startet.
            </p>
            {submitted ? (
              <p className="text-sm text-honey-300 font-medium">
                ✓ Danke! Wir informieren Sie zum Beta-Start.
              </p>
            ) : (
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email.trim()) {
                    setSubmitted(true)
                    setEmail("")
                  }
                }}
              >
                <Input
                  type="email"
                  placeholder="E-Mail-Adresse"
                  aria-label="E-Mail für Newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-earth-700 border-earth-600 text-white placeholder:text-earth-400 focus-visible:ring-honey-500 focus-visible:border-honey-500"
                />
                <Button
                  type="submit"
                  className="gradient-honey text-white shadow-warm hover:shadow-glow shrink-0"
                >
                  OK
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-earth-700" />

        {/* Bottom row */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-earth-400">
              &copy; {new Date().getFullYear()} Imker-Logbuch Pro. Alle Rechte
              vorbehalten.
            </p>
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-earth-600 px-3 py-0.5 text-xs text-earth-300"
            >
              <span className="text-base leading-none">&#127465;&#127466;</span>
              Made in Deutschland
            </span>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-end">
            {FOOTER_LINKS.rechtliches.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-earth-200 hover:text-honey-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
