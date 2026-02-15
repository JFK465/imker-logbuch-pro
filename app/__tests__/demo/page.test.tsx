import { render, screen } from '@testing-library/react'
import DemoPage from '@/app/demo/page'

describe('DemoPage', () => {
  it('renders demo headline', () => {
    render(<DemoPage />)
    expect(screen.getByText('Probier es selbst')).toBeInTheDocument()
  })

  it('renders QRScanAnimation', () => {
    render(<DemoPage />)
    expect(screen.getByText('Scan starten')).toBeInTheDocument()
  })
})
