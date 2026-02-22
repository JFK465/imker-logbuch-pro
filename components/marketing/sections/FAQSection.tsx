"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { faqData } from "@/lib/faq-data"
import { AnimatedSection } from "@/components/ui/animated-section"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs?: FAQ[]
}

export function FAQSection({
  title = "Häufige Fragen -- ehrlich beantwortet",
  subtitle = "",
  faqs = faqData,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-honey-50">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        {/* Section Header */}
        <AnimatedSection direction="up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-earth-800">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-earth-500">{subtitle}</p>
            )}
          </div>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <AnimatedSection key={index} direction="up" delay={0.05 + index * 0.06}>
                <div
                  className={cn(
                    "rounded-xl border overflow-hidden transition-colors duration-200",
                    isOpen
                      ? "border-honey-300 bg-cream shadow-warm"
                      : "border-honey-100 bg-white hover:bg-honey-50/50"
                  )}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span className="font-medium text-earth-800 pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-colors",
                          isOpen ? "text-honey-500" : "text-earth-400"
                        )}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div id={`faq-content-${index}`} className="px-5 pb-5 text-earth-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
