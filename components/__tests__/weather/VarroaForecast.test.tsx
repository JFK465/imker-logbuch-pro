import { render, screen } from '@testing-library/react'
import { VarroaForecast } from '@/components/weather/VarroaForecast'

describe('VarroaForecast', () => {
  it('shows HIGH risk for warm summer weather', () => {
    render(<VarroaForecast month={7} temperature={28} />)

    // Check that risk level badge exists
    const badge = screen.getByText((content) => content.includes('Varroa-Risiko'))
    expect(badge).toBeInTheDocument()

    // Check HIGH is displayed
    const highElement = screen.getByText((content) => content.includes('HIGH'))
    expect(highElement).toBeInTheDocument()
  })

  it('shows LOW risk for winter', () => {
    render(<VarroaForecast month={12} temperature={2} />)

    // Check LOW is displayed
    const lowElement = screen.getByText((content) => content.includes('LOW'))
    expect(lowElement).toBeInTheDocument()
  })
})
