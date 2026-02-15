import { renderHook, waitFor } from '@testing-library/react'
import { useWeather } from '@/hooks/useWeather'

describe('useWeather', () => {
  it('returns loading state initially', () => {
    const { result } = renderHook(() => useWeather({ lat: 52.52, lon: 13.41 }))
    expect(result.current.loading).toBe(true)
  })
})
