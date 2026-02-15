# Website Enhancement Design Document

**Datum:** 15.02.2026
**Projekt:** Imker-Logbuch Pro - Website Erweiterung
**Status:** Genehmigt

---

## 1. Zielsetzung

Die Website von Imker-Logbuch Pro soll in drei Bereichen erweitert werden:

1. **Content:** Blog erweitern, mehr Ressourcen und Guides
2. **Visuell:** Moderne, professionelle Ästhetik mit Micro-Interactions
3. **Funktionen:** Interaktive Tools (Demo, Wetter, Varroa, Ernte-Tracker)

**Zielgruppe:** Hobby-Imker, die Technologie hassen und keine neuen Tools lernen wollen.

---

## 2. Design-Philosophie

### Visuelle Sprache: Tech-Forward & Modern

- Sanfte Micro-Interactions (Buttons "atmen", Karten slid-in)
- Dunkel-modus-first Ansatz (Bienenstock draußen = helles Display schwer lesbar)
- "App-Feeling" - nicht wie eine statische Marketing-Page
- Viel Weißraum, klare Linien, minimalistisch

### Animationen (Framer-Motion)

| Interaction | Wann | Effekt |
|-------------|------|--------|
| Card-Hover | Maus über Karte | Leichte Skalierung (1.02x), Schatten erhöht |
| Button-Click | Klick | Button "drückt" sich (scale down) |
| Success | Formular abgesendet | Checkmark-Animation, grüner Glow |
| Page-Load | Neue Seite | Content slid-in von unten (staggered) |

---

## 3. Feature-Priorisierung

### Phase A: Quick-Documentation Demo (Prio 1)
- QR-Scan Animation visualisieren
- "1 Scan, 3 Felder, fertig" Konzept zeigen
- Animation: Smartphone → Scan → Formular → Submit → Checkmark

### Phase B: Wetter + Varroa (Prio 2)
- Wetter-Widget mit Imker-spezifischen Daten
- Varroa-Risiko Vorhersage
- Intelligente Empfehlungen basierend auf Wetter

### Phase C: Ernte-Tracker (Prio 3)
- Honig-Ernte protokollieren
- Chargen-Etiketten generieren (PDF)
- "Von der Biene zum Glas" Timeline

---

## 4. Technologie-Stack

### Bestehende Technologien
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons
- React Hook Form + Zod

### Neue Technologien

| Feature | Technologie | Warum |
|---------|-------------|-------|
| Animationen | `framer-motion` | Professionelle Micro-Interactions |
| PDF-Generierung | `react-pdf` oder `jspdf` | Client-seitig, keine Server-Kosten |
| Wetter-Daten | Open-Meteo API (kostenlos) | Keine API-Keys, EU-Datenschutz |

---

## 5. Seitenstruktur

```
/                           (Landing + interaktive Demo)
/app-demo                   (Standalone Demo-Seite)
/blog
  /page.tsx                 (Blog-Übersicht)
  /[slug]                   (Einzelner Artikel)
/signup
/impressum
/datenschutz
```

---

## 6. Component-Struktur

```
components/
├── demo/
│   ├── QRScanAnimation.tsx
│   ├── QuickFormDemo.tsx
│   └── SuccessAnimation.tsx
├── weather/
│   ├── WeatherWidget.tsx
│   └── VarioaForecast.tsx
├── harvest/
│   ├── HarvestTracker.tsx
│   └── LabelGenerator.tsx
└── ui/
    └── (existierende erweitern)
```

---

## 7. Component-Details

### QRScanAnimation

```tsx
// User klickt "Demo starten" → Animation beginnt
function QRScanAnimation() {
  // Smartphone-Frame erscheint
  // Laser-Linie scannt QR-Code
  // "Biep"-Sound (optional)
  // Checkmark ✓
  // Übergang zu QuickFormDemo
}
```

**UX:** User sieht QR-Code an virtual Bienenstock → Scan → "Dokumentation öffnen" → 3 Felder (Biene gesichtet? Varroa? Bemerkungen) → Absenden → Done.

---

### WeatherWidget

```tsx
interface WeatherData {
  temperature: number
  windSpeed: number
  precipitation: number
  forecast: WeekForecast[]
}

function WeatherWidget({ location }) {
  // Zeigt: "Heute: 18°C, ideal für Durchsicht"
  // "Morgen: Regen, Varroa-Behandlung empfohlen"
  // Icons: Sonne/Wolken/Regen mit Lucide
}
```

**Datenquelle:** Open-Meteo API (kostenlos, keine Keys nötig)

**Beispiel-Request:**
```
GET https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,precipitation_sum,windspeed_10m_max&timezone=auto
```

---

### VarroaForecast

```tsx
function VarroaForecast({ weatherData }) {
  // Berechnet Varroa-Risiko basierend auf:
  // - Jahreszeit
  // - Temperatur
  // - Luftfeuchtigkeit
  // → "Niedrig / Mittel / Hoch"
  // → Empfehlung: "Behandeln Ja/Nein"
}
```

---

### HarvestTracker

```tsx
function HarvestTracker() {
  // 3 Schritte:
  // 1. "Wieviel Honig geerntet?" (in kg)
  // 2. "Chargen-Nummer" (automatisch generiert)
  // 3. "Etikett generieren" → PDF-Download
}
```

**PDF-Inhalt:**
```
IMKER-LOGBUCH PRO
━━━━━━━━━━━━━━━━
Honig - Sommer 2026
Erntedatum: 15.02.2026
Chargen-Nr: #H-2026-0142
━━━━━━━━━━━━━━━━
```

---

## 8. Data Flow

### Wetter-Daten (Client-Side)

```
User öffnet Seite
       ↓
Browser → Open-Meteo API (https://api.open-meteo.com/v1/forecast)
       ↓
JSON Response (cached für 1 Stunde)
       ↓
WeatherWidget + VarroaForecast rendern
```

### Quick-Form Demo (Lokal State)

```
User scannt (klickt "Scan")
       ↓
Local State: { step: 'scanning' }
       ↓
Animation: QR-Scan (2 Sekunden)
       ↓
Local State: { step: 'form', stockId: 'STK-001' }
       ↓
User füllt 3 Felder aus
       ↓
Local State: { step: 'success', data: {...} }
       ↓
Animation: Success-Checkmark
       ↓
Reset nach 3 Sekunden
```

### PDF-Generierung (Client-Side)

```
User klickt "Etikett generieren"
       ↓
react-pdf erstellt Canvas im Browser
       ↓
PDF wird als Blob erzeugt
       ↓
Automatischer Download (dateiname: "imker-logbuch-label-001.pdf")
```

---

## 9. Error Handling

| Scenario | Fallback | User-Message |
|----------|----------|--------------|
| Wetter-API fail | Cache anzeigen oder "Daten aktuell nicht verfügbar" | "Wetter-Daten konnten nicht geladen werden. Bitte später erneut versuchen." |
| Keine Internet-Verbindung | Offline-Indicator oben | "Du bist offline. Änderungen werden gespeichert." |
| PDF-Generation fail | Error-Toast | "Etikett konnte nicht erstellt werden." |
| Form-Validation fail | Rotes Feld + Message | "Bitte fülle dieses Feld aus." |

**Error-Boundary:**
```tsx
<ErrorBoundary fallback={<WeatherWidgetError />}>
  <WeatherWidget />
</ErrorBoundary>
```

---

## 10. Testing-Strategie

### Unit Tests (Vitest)
```tsx
// Beispiel
test('Varroa-Risiko wird korrekt berechnet', () => {
  expect(calculateVarroaRisk({ temp: 25, month: 8 }))
    .toBe('HIGH')
})
```

### Integration Tests (React Testing Library)
```tsx
test('Demo-Formular funktioniert komplett', async () => {
  render(<QuickFormDemo />)
  user.click(screen.getByText('Scan starten'))
  await waitFor(() => screen.getByText('Biene gesichtet?'))
  user.click(screen.getByRole('checkbox', { name: /Ja/i }))
  user.click(screen.getByRole('button', { name: /Absenden/i }))
  await waitFor(() => screen.getByText('✓ Erfolgreich'))
})
```

### E2E Tests (Playwright)
```tsx
test('Kompletter Demo-Flow', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Demo starten')
  await expect(page).toHaveURL(/\/demo/)
  await page.click('text=QR scannen')
  await page.fill('[data-testid=bemerkungen]', 'Winterlinge blühen')
  await page.click('text=Absenden')
  await expect(page.locator('svg.lucide-check')).toBeVisible()
})
```

**Test-Coverage-Ziel:** 80%+

---

## 11. Content-Strategie

### Blog-Erweiterung (Geplante Artikel)

1. "10 Fehler, die Imker beim Varroa-Management machen"
2. "Wann ist der Honig reif?"
3. "QR-Codes an Bienenstöcken - wie das funktioniert"
4. "Die optimale Durchsicht bei jedem Wetter"

### Social Proof

- Testimonials von echten Imkern
- "Vorher/Nachher" Dokumentations-Vergleich

---

## 12. Timeline-Schätzung

| Phase | Umfang |
|-------|--------|
| Demo-Feature | 2-3 Tage |
| Wetter + Varroa | 2-3 Tage |
| Ernte-Tracker | 1-2 Tage |
| Blog-Content | 1 Tag |
| Testing | 1 Tag |

**Gesamt:** ~1-2 Wochen (parallelisierbar)

---

## 13. Next Steps

1. Setup: `npm install framer-motion react-pdf` + TypeScript-Typen
2. Component-Rumpf: Alle Components mit leerem Inhalt erstellen
3. Demo-Flow: QRScanAnimation → QuickFormDemo → SuccessAnimation
4. Wetter-Integration: Open-Meteo API einbinden
5. Varroa-Logik: Risiko-Berechnungsfunktion
6. PDF-Generator: LabelTemplate + Download-Funktion
7. Styling: Micro-Interactions + Animationen
8. Tests schreiben
9. Blog-Content: 3 neue Artikel
10. Landing-Page-Update: Demo prominent platzieren

---

## 14. Genehmigung

**Status:** Genehmigt am 15.02.2026

**Unterschrift:** ________________
