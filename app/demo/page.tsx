import type { Metadata } from "next"
import { QRScanAnimation } from "@/components/demo/QRScanAnimation"
import { QuickFormDemo } from "@/components/demo/QuickFormDemo"
import { HowToSchema } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "QR-Code Demo: Bienenstock-Dokumentation in 30 Sekunden",
  description:
    "Erleben Sie, wie einfach die Bienenstock-Dokumentation mit QR-Code funktioniert. Scannen, dokumentieren, fertig -- auch mit Handschuhen.",
  alternates: { canonical: "/demo" },
}

const howToSteps = [
  {
    name: "QR-Code am Bienenstock scannen",
    text: "Öffnen Sie Imker-Logbuch Pro auf Ihrem Smartphone und scannen Sie den QR-Code, der am Bienenstock befestigt ist. Der Stock wird automatisch erkannt.",
  },
  {
    name: "Durchsicht-Formular ausfüllen",
    text: "Füllen Sie das mobile Formular mit Ihren Beobachtungen aus: Volksstärke, Brut, Varroa-Befund und weitere Notizen. Auch mit Handschuhen bedienbar.",
  },
  {
    name: "Eintrag speichern",
    text: "Tippen Sie auf Speichern. Der Eintrag wird sofort in Ihr digitales Bestandsbuch übernommen und ist rechtskonform archiviert.",
  },
]

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-20">
      <HowToSchema
        name="QR-Code Demo: Bienenstock-Dokumentation in 30 Sekunden"
        description="So dokumentieren Sie Ihre Bienenstock-Durchsicht in wenigen Sekunden mit dem QR-Code-System von Imker-Logbuch Pro."
        steps={howToSteps}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-earth-800 mb-4">
            QR-Code scannen und Bienenstock in 30 Sekunden dokumentieren
          </h1>
          <p className="text-xl text-earth-500 max-w-2xl mx-auto">
            Scannen Sie den QR-Code an Ihrem Bienenstock und dokumentieren Sie Ihre Durchsicht
            in Sekunden -- auch mit Handschuhen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-earth-700">1. Scan</h2>
            <QRScanAnimation />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-earth-700">2. Dokumentieren</h2>
            <QuickFormDemo />
          </div>
        </div>
      </div>
    </main>
  )
}
