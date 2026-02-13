import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Bienenverwaltung digital -- Imker-Logbuch Pro",
    template: "%s | Imker-Logbuch Pro",
  },
  description:
    "Smarte Verwaltung für Hobby-Imker und Direktvermarkter. Rechtskonform, mobil, einfach.",
  keywords: [
    "Bienenverwaltung Software",
    "Imker App",
    "Bestandsbuch digital",
    "Honig Chargenverfolgung",
    "Varroa Kontrolle",
    "Imkerei Digitalisierung",
  ],
  authors: [{ name: "Imker-Logbuch Pro Team" }],
  creator: "Imker-Logbuch Pro",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://imker-logbuch-pro.de",
    title: "Imker-Logbuch Pro -- Smarte Bienenverwaltung",
    description:
      "Smarte Verwaltung für Hobby-Imker und Direktvermarkter. Rechtskonform, mobil, einfach.",
    siteName: "Imker-Logbuch Pro",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
