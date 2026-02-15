import { QRScanAnimation } from '@/components/demo/QRScanAnimation'
import { QuickFormDemo } from '@/components/demo/QuickFormDemo'

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Probier es selbst
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scanne den QR-Code an deinem Bienenstock und dokumentiere deine Durchsicht
            in Sekunden - auch mit Handschuhen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">1. Scan</h2>
            <QRScanAnimation />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">2. Dokumentieren</h2>
            <QuickFormDemo />
          </div>
        </div>
      </div>
    </main>
  )
}
