# Imker-Logbuch Pro

Smarte Verwaltung für Hobby-Imker und Direktvermarkter.

## Über das Projekt

Imker-Logbuch Pro ist eine mobile-first Software für die professionelle Bienenverwaltung. Das Tool hilft Hobby-Imkern:

- Stockkarten digital zu erfassen (QR-Code am Bienenstock)
- Ein rechtskonformes Bestandsbuch zu führen
- Honig-Chargen zu verfolgen
- Varroa-Risiken basierend auf Wetterdaten zu bewerten

## Features (Beta)

- **Stockkarten-Digitalisierung**: QR-Code-Scan für schnelle Dokumentation
- **Rechtskonformes Bestandsbuch**: Automatisch generiert nach VO (EU) 2017/625
- **Ernte- & Chargenverfolgung**: Rückverfolgbarkeit von der Wabe bis zum Glas
- **Varroa-Wetter-Integration**: Wetterbasierte Risikobewertung
- **Spracheingabe**: Dokumentieren ohne Hände

## Schnellstart

```bash
npm install
npm run dev
```

Öffne http://localhost:3000

## Deployment

### Vercel (empfohlen)

1. GitHub-Repository verbinden
2. Environment Variables setzen:
   - `NEXT_PUBLIC_PRODUCT_NAME=Imker-Logbuch Pro`
   - `NEXT_PUBLIC_PRODUCT_TAGLINE=Smarte Verwaltung für Hobby-Imker & Direktvermarkter`
   - `NEXT_PUBLIC_SITE_URL=https://imker-logbuch-pro.de`
   - `NEXT_PUBLIC_COMPANY_NAME=Imker-Logbuch Pro`

3. Deploy

### Lokal bauen

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React Icons

## Lizenz

MIT

## Kontakt

E-Mail: kontakt@imker-logbuch-pro.de
Web: https://imker-logbuch-pro.de
