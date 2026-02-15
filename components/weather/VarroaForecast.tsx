'use client'

import { AlertTriangle, CheckCircle, Info } from 'lucide-react'

interface VarroaForecastProps {
  month: number
  temperature: number
}

type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH'

function calculateRisk(month: number, temperature: number): RiskLevel {
  if (month >= 6 && month <= 8 && temperature > 25) return 'HIGH'
  if (month >= 4 && month <= 9) return 'MEDIUM'
  return 'LOW'
}

function getRecommendation(risk: RiskLevel): string {
  switch (risk) {
    case 'HIGH':
      return 'Behandlung dringend empfohlen! Milbenpopulation wächst rapide.'
    case 'MEDIUM':
      return 'Regelmäßige Kontrolle empfohlen.'
    default:
      return 'Keine Behandlung nötig. Bienenvölker in Winterruhe.'
  }
}

export function VarroaForecast({ month, temperature }: VarroaForecastProps) {
  const risk = calculateRisk(month, temperature)
  const recommendation = getRecommendation(risk)

  const riskColor = {
    LOW: 'bg-green-100 text-green-800',
    MEDIUM: 'bg-yellow-100 text-yellow-800',
    HIGH: 'bg-red-100 text-red-800',
  }[risk]

  const RiskIcon = risk === 'HIGH' ? AlertTriangle : risk === 'MEDIUM' ? Info : CheckCircle

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Varroa-Prognose</h3>

      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${riskColor}`}>
        <RiskIcon className="w-5 h-5" />
        <span className="font-bold">Varroa-Risiko: {risk}</span>
      </div>

      <p className="mt-4 text-gray-600">{recommendation}</p>

      <p className="mt-2 text-sm text-gray-400">
        Basierend auf: {month}. Monat, {temperature}°C
      </p>
    </div>
  )
}
