import { useState, useEffect } from 'react'

interface WeatherData {
  temperature: number
  windSpeed: number
  precipitation: number
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy'
}

interface UseWeatherResult {
  data: WeatherData | null
  loading: boolean
  error: string | null
}

export function useWeather(lat: number, lon: number): UseWeatherResult {
  const [data, setData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,precipitation_sum,windspeed_10m_max&timezone=auto`
        )
        const json = await response.json()

        const today = json.daily
        setData({
          temperature: today.temperature_2m_max[0],
          windSpeed: today.windspeed_10m_max[0],
          precipitation: today.precipitation_sum[0],
          condition: today.precipitation_sum[0] > 5 ? 'rainy' :
                     today.precipitation_sum[0] > 0 ? 'cloudy' : 'sunny',
        })
      } catch {
        setError('Wetter-Daten konnten nicht geladen werden')
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [lat, lon])

  return { data, loading, error }
}
