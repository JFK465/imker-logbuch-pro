import { LabelGenerator } from '@/components/harvest/LabelGenerator'

export default function HarvestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ernte-Tracker
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dokumentiere deine Honig-Ernte und generiere professionelle Etiketten
            für deine Gläser.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <LabelGenerator />
        </div>
      </div>
    </main>
  )
}
