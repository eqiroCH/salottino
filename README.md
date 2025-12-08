# salottino – italienische spezialitäten

Moderne Website für salottino GmbH, gebaut mit Next.js, TypeScript und Tailwind CSS.

## Features

- **Tech Stack**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS.
- **UI Library**: shadcn/ui (Radix UI + Tailwind).
- **Internationalisierung (i18n)**: `next-intl` für Deutsch (Standard) und Italienisch.
- **Formulare**: `react-hook-form` + `zod` Validierung.
- **Email**: Server Actions mit `resend` Integration (und Mock-Mode).
- **News**: MDX-basiertes Content Management im Codebase.

## Setup & Entwicklung

1.  **Repository klonen**
2.  **Dependencies installieren**:
    ```bash
    npm install
    ```
3.  **Environment Variables**:
    Erstelle eine `.env` Datei im Root-Verzeichnis:
    ```env
    # Optional: Für echten Email-Versand via Resend.com
    RESEND_API_KEY=re_123456789
    ```
    *Ohne API Key laufen die Formulare im "Mock Mode" (simuliert den Versand).*

4.  **Dev Server starten**:
    ```bash
    npm run dev
    ```
    Öffne [http://localhost:3000](http://localhost:3000).

## Content Management

### Texte ändern
Alle statischen Texte befinden sich in `src/messages/de.json` und `src/messages/it.json`.

### Produkte ändern
Die Spezialitäten-Liste wird in `src/content/products.ts` gepflegt.

### News/Events hinzufügen
Erstelle neue Dateien in `src/content/news/`:
- Format: `meine-news-slug.de.mdx` (für Deutsch) und `meine-news-slug.it.mdx` (für Italienisch).
- Frontmatter (Kopfbereich) ist Pflicht:
  ```mdx
  ---
  title: "Titel des Beitrags"
  date: "2024-05-01"
  ---
  Hier steht der Inhalt...
  ```

## Deployment

Das Projekt ist optimiert für **Vercel**.
1.  Github Repo verbinden.
2.  Environment Variables (`RESEND_API_KEY`) im Vercel Dashboard hinterlegen.
3.  Deploy.

## Struktur

- `src/app`: Pages & Routing
- `src/components`: Wiederverwendbare UI Komponenten
- `src/lib`: Hilfsfunktionen & Server Actions
- `src/messages`: Übersetzungen
- `src/content`: Daten (News MDX, Produkte JSON)

