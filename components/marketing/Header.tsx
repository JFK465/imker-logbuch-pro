"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/lib/constants"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-honey-100"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-1">
          <span className="text-xl font-bold font-display text-earth-800">
            Imker-Logbuch
          </span>
          <span className="text-xl font-bold font-display gradient-text">
            Pro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-earth-700 transition-colors hover:text-honey-600"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="gradient-honey text-white shadow-warm hover:shadow-glow transition-all"
          >
            <Link href="/signup">Kostenlos Beta testen</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-earth-700 hover:text-honey-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-honey-100 bg-white/95 backdrop-blur-md"
          >
            <nav className="flex flex-col space-y-1 p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-earth-700 hover:text-honey-600 transition-colors py-2 px-2 rounded-md hover:bg-honey-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  asChild
                  className="gradient-honey text-white shadow-warm hover:shadow-glow w-full"
                >
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    Kostenlos Beta testen
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
