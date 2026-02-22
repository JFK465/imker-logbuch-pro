"use client"

import { motion } from "framer-motion"
import { QrCode, CheckCircle2 } from "lucide-react"

export function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-[260px] md:w-[280px]"
    >
      {/* Phone Frame */}
      <div className="relative bg-earth-800 rounded-[2.5rem] p-3 shadow-warm-lg">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-earth-800 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Status Bar */}
          <div className="h-8 bg-honey-50 flex items-center justify-center">
            <span className="text-[10px] font-medium text-earth-500">
              Imker-Logbuch Pro
            </span>
          </div>

          {/* App Content */}
          <div className="p-4 space-y-3">
            {/* QR Scan Area */}
            <div className="bg-honey-50 rounded-xl p-4 flex flex-col items-center">
              <QrCode className="h-10 w-10 text-honey-500 mb-2" />
              <span className="text-xs font-medium text-earth-600">
                QR-Code scannen
              </span>
            </div>

            {/* Form Fields */}
            <div className="space-y-2">
              <div className="h-8 bg-earth-100 rounded-lg flex items-center px-3">
                <span className="text-[10px] text-earth-400">
                  Volk: Standort A / #3
                </span>
              </div>
              <div className="h-8 bg-earth-100 rounded-lg flex items-center px-3">
                <span className="text-[10px] text-earth-400">
                  Zustand: Normal
                </span>
              </div>
              <div className="h-16 bg-earth-100 rounded-lg flex items-start p-2">
                <span className="text-[10px] text-earth-400">Notizen...</span>
              </div>
            </div>

            {/* Success Indicator */}
            <div className="flex items-center justify-center gap-2 py-2">
              <CheckCircle2 className="h-5 w-5 text-nature-500" />
              <span className="text-xs font-medium text-nature-600">
                Gespeichert
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
