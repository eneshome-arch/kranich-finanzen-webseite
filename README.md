# Kranich Finanzen – Website

Offizielle Website von **Kranich Finanzen** – unabhängiger Versicherungsmakler und Finanzberater mit Sitz in Hannover. Geführt von Cem Özdemir & Noel Diaz.

## Seiten

| Seite | Beschreibung |
|-------|-------------|
| `index.html` | Startseite mit Hero-Finanzplan, Leistungsbereiche, Cinematic Scroll, Google Reviews, Timeline, CTA |
| `privatkunden.html` | Alle Privatversicherungen (Haftpflicht, Hausrat, KFZ, BU, Kranken u.v.m.) |
| `gewerbekunden.html` | Alle Gewerbeversicherungen (Betriebshaftpflicht, Cyber, D&O u.v.m.) |
| `vorsorge.html` | Vorsorge & Finanzen (Riester, Rürup, ETF, PKV, Immobilien) |
| `ueber-uns.html` | Geschäftsführung, Werte, Qualifikationen, Standort |
| `kontakt.html` | Kontaktformular, Google Maps, Anfahrt |
| `anfrage.html` | Landing Page für Erstberatung / Social Media |
| `foerderrechner.html` | Förder-Check Marketing-Page |
| `leistungen.html` | Leistungsübersicht |
| `impressum.html` | Impressum (§ 5 DDG) |
| `datenschutz.html` | Datenschutzerklärung (DSGVO) |

## Technik

- **Typ:** Statische Website (HTML, CSS, JS)
- **Hosting:** Coolify (nginx:alpine) auf eigenem Server
- **Domain:** kranichfinanzen.de
- **Schrift:** Inter (lokal gehostet, `css/fonts/`)
- **CSS:** `css/style.css`
- **JS:** `js/main.js`
- **Dev-Server:** `python3 -m http.server 9093` im Projektordner

## Brandfarben

| Farbe | Hex | CSS-Variable |
|-------|-----|-------------|
| Navy | `#1e2b5e` | `--primary` |
| Gold | `#c9962a` | `--accent` |
| Cream | `#fdf6e8` | — |

## Features

- Responsive Design (Mobile-first)
- Interaktiver Finanzplan im Hero (selbstzeichnende SVG-Charts, Count-Up, 3D Mouse-Parallax)
- Finanzplan-Animation auch auf Mobile sichtbar (skaliert, zwischen Text und Buttons)
- Cinematic Horizontal-Scroll Leistungssektion
- Glasmorphism-Orbs mit Backdrop-Blur
- Holographischer Licht-Scan-Effekt
- Google Reviews Sektion
- Canvas-basierte geometrische Animationen
- Count-Up Animationen für Statistiken
- Förder-Check mit interaktivem Rechner
- Scroll-Restoration Fix für Mobile (verhindert Scroll-Sprung beim Laden)
- DSGVO-konform: Fonts lokal, kein Tracking, kein Analytics

## Rechtliches

- Impressum nach § 5 DDG
- Datenschutzerklärung nach DSGVO
- Google Fonts lokal gehostet (kein externer Request)
- Kontaktformulare mit Datenschutz-Checkbox
- Kein Tracking / Analytics

## Kontakt

- **Telefon:** 0178 8960163
- **E-Mail:** info@kranichfinanzen.de
- **Sitz:** Hannover (bundesweite Beratung)
