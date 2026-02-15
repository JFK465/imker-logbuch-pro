'use client'

import { useState } from 'react'
import { Download, Package } from 'lucide-react'

interface LabelData {
  harvestDate: string
  amount: string
  batchNumber: string
  honeyType: string
}

export function LabelGenerator() {
  const [labelData, setLabelData] = useState<LabelData>({
    harvestDate: new Date().toISOString().split('T')[0],
    amount: '',
    batchNumber: `H-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
    honeyType: 'Sommerhonig',
  })

  const generatePDF = () => {
    // In der vollständigen Implementierung: react-pdf PDFDocument
    alert(`PDF wird generiert:\n${JSON.stringify(labelData, null, 2)}`)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Package className="w-5 h-5 text-primary" />
        Honig-Ernte dokumentieren
      </h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Erntemenge (kg)
          </label>
          <input
            id="amount"
            type="number"
            value={labelData.amount}
            onChange={(e) => setLabelData({ ...labelData, amount: e.target.value })}
            className="w-full p-3 border border-gray-200 rounded-lg"
            placeholder="z.B. 15"
          />
        </div>

        <div>
          <label htmlFor="honeyType" className="block text-sm font-medium text-gray-700 mb-1">
            Honig-Sorte
          </label>
          <select
            id="honeyType"
            value={labelData.honeyType}
            onChange={(e) => setLabelData({ ...labelData, honeyType: e.target.value })}
            className="w-full p-3 border border-gray-200 rounded-lg"
          >
            <option>Sommerhonig</option>
            <option>Frühjahrshonig</option>
            <option>Waldhonig</option>
            <option>Akazienhonig</option>
            <option>Blütenhonig</option>
          </select>
        </div>

        <div>
          <label htmlFor="batchNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Chargen-Nummer
          </label>
          <input
            id="batchNumber"
            type="text"
            value={labelData.batchNumber}
            onChange={(e) => setLabelData({ ...labelData, batchNumber: e.target.value })}
            className="w-full p-3 border border-gray-200 rounded-lg font-mono text-sm"
          />
        </div>

        {labelData.amount && (
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800 font-medium">Vorschau:</p>
            <p className="text-amber-900">{labelData.honeyType} - {labelData.amount} kg</p>
            <p className="text-amber-700 text-sm">Chargen-Nr: {labelData.batchNumber}</p>
          </div>
        )}

        <button
          onClick={generatePDF}
          disabled={!labelData.amount}
          className="w-full py-3 bg-primary text-white rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Download className="w-5 h-5" />
          Etikett herunterladen
        </button>
      </div>
    </div>
  )
}
