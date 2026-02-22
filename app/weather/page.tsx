'use client'

import dynamic from 'next/dynamic'
import { useWeather } from '@/hooks/useWeather'

const WeatherWidget = dynamic(
  () => import('@/components/weather/WeatherWidget').then(m => ({ default: m.WeatherWidget })),
  { ssr: false }
)

const VarroaForecast = dynamic(
  () => import('@/components/weather/VarroaForecast').then(m => ({ default: m.VarroaForecast })),
  { ssr: false }
)

// Standard-Standort (kann später per Geo-Location angepasst werden)
const DEFAULT_LOCATION = { lat: 52.52, lon: 13.41 } // Berlin

export default function WeatherPage() {
  const { data, loading, error } = useWeather(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lon)

  // Aktuellen Monat ermitteln
  const currentMonth = new Date().getMonth() + 1
  const currentTemp = data?.temperature || 20

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-earth-800 mb-4">
            Wetter und Varroa-Prognose für Ihren Bienenstand
          </h1>
          <p className="text-xl text-earth-500 max-w-2xl mx-auto">
            Optimieren Sie Ihre Imkerei-Arbeit mit Wetterdaten und Varroa-Prognosen.
          </p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent" />
            <p className="mt-4 text-earth-500">Wetterdaten werden geladen...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-red-600">
            <p>{error}</p>
          </div>
        )}

        {data && (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <WeatherWidget data={data} />
            <VarroaForecast month={currentMonth} temperature={currentTemp} />
          </div>
        )}
      </div>
    </main>
  )
}
