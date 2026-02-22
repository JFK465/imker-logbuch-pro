export const siteConfig = {
  name: "Imker-Logbuch Pro",
  description:
    "Smarte Verwaltung für Hobby-Imker und Direktvermarkter. Rechtskonform, mobil, einfach.",
  url: "https://imker-logbuch-pro.de",
  companyName: "Imker-Logbuch Pro",
  email: "kontakt@imker-logbuch-pro.de",
  twitterHandle: "",
}

export const betaConfig = {
  phase: "beta" as const,
  betaStartDate: "2025-06-01",
  features: {
    available: ["Stockkarten-Digitalisierung"],
    inDevelopment: ["Rechtskonformes Bestandsbuch", "Ernte- & Chargenverfolgung"],
    planned: ["Varroa-Wetter-Integration", "Spracheingabe"],
  },
}

export const seoKeywords = [
  // Core product keywords
  "Bienenverwaltung Software",
  "Imker App",
  "Bestandsbuch digital",
  "Honig Chargenverfolgung",
  "Varroa Kontrolle",
  "Imkerei Digitalisierung",
  // QR & mobile
  "Bienenstock QR-Code",
  "Imkerei App kostenlos",
  "Imkerei App Android",
  "Imkerei App iPhone",
  "Bienenstock Dokumentation mobil",
  // Target audience
  "Hobby Imker Software",
  "Hobbyimker App",
  "Direktvermarkter Imkerei",
  "Imkerei Direktvermarktung",
  "Kleinimker Verwaltung",
  // Legal & compliance
  "Imkerei Bestandsbuch DSGVO",
  "Imkerei Rechtskonform",
  "Tierseuchenrecht Imkerei",
  "Imkerei Pflichtaufzeichnungen",
  // Varroa & disease
  "Varroa Behandlung Dokumentation",
  "Varroa Prognose",
  "Varroa Monitoring",
  "Varroabehandlung App",
  "Bienenkrankheit dokumentieren",
  // Harvest & labeling
  "Honig Ernte dokumentieren",
  "Honig Etiketten Generator",
  "Honig Etikett erstellen",
  "Honigglas Etikett drucken",
  "Honig Chargennummer",
  // Stock management
  "Bienenstock Durchsicht",
  "Bienenstand Verwaltung",
  "Stockkarte digital",
  "Stockkarte App",
  "Volksstärke erfassen",
  // Weather integration
  "Imkerei Wetter App",
  "Bienenstand Wettervorhersage",
  "Varroa Wetter Prognose",
]

export function getRemainingPlaces(): number | null {
  return null
}
