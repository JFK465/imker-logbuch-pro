"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  detail?: string
  index?: number
}

export function FeatureCard({
  icon,
  title,
  description,
  detail,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-cream rounded-xl p-6 shadow-warm transition-all duration-300 hover:shadow-card-hover border border-transparent hover:border-honey-200"
    >
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-honey-100 to-earth-100 flex items-center justify-center text-honey-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold font-display mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
      {detail && (
        <p className="text-xs text-honey-600 font-medium mt-3">{detail}</p>
      )}
    </motion.div>
  )
}
