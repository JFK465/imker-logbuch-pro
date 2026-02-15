import { render, screen, fireEvent } from '@testing-library/react'
import { LabelGenerator } from '@/components/harvest/LabelGenerator'

describe('LabelGenerator', () => {
  it('shows harvest form fields', () => {
    render(<LabelGenerator />)
    expect(screen.getByText('Honig-Ernte dokumentieren')).toBeInTheDocument()
    expect(screen.getByLabelText('Erntemenge (kg)')).toBeInTheDocument()
  })

  it('generates label with entered data', async () => {
    render(<LabelGenerator />)
    const input = screen.getByLabelText('Erntemenge (kg)')
    fireEvent.change(input, { target: { value: '15' } })
    // Check that preview appears with amount
    const preview = screen.getByText((content) => content.includes('15') && content.includes('kg'))
    expect(preview).toBeInTheDocument()
  })
})
