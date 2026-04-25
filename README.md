# Özdemir Fensterbau – Website

Statische B2B-Website für **Özdemir Fensterbau GmbH**, Hannover. Gebaut mit reinem HTML, CSS und Vanilla JavaScript – kein Framework, kein Build-Prozess.

---

## Projektstruktur

```
ozdemir-fensterbau/
├── index.html          # Startseite
├── ueber-uns.html      # Über uns
├── leistungen.html     # Leistungen
├── sortiment.html      # Unser Sortiment (Produktübersicht)
├── kontakt.html        # Kontakt mit Formular & Google Maps
├── katalog.html        # Filterbarer Produktkatalog
├── datenschutz.html    # Datenschutzerklärung (DSGVO)
├── impressum.html      # Impressum (§5 TMG)
├── css/
│   └── style.css       # Gesamtes Styling
├── js/
│   └── main.js         # Interaktivität & Animationen
└── images/
    ├── logo.png               # Firmenlogo
    ├── hero-bg.jpg            # Hero-Hintergrundbild (Gebäudefassade mit Fenstern)
    ├── fenster-fertigung.png  # Bild Fensterfertigung (Leistungskarte)
    ├── montage-einbau.png     # Bild Montage & Einbau (Leistungskarte)
    ├── lieferung-logistik.jpg # Bild Lieferung & Logistik (Leistungskarte)
    └── team-handshake.jpg     # Bild Über uns Section
```

---

## Seiten

| Seite | Datei | Beschreibung |
|-------|-------|--------------|
| Startseite | `index.html` | Hero, Leistungsübersicht, Über-uns-Teaser, Vorteile-Grid, ROI-Rechner, Projekt-Timeline, CTA |
| Über uns | `ueber-uns.html` | Unternehmensstory, Team, Werte, Zertifizierungen |
| Leistungen | `leistungen.html` | 6 Leistungsbereiche im Detail |
| Sortiment | `sortiment.html` | Produktkatalog mit Filterung (Kunststoff, Holz, Alu, Hebe-Schiebe) |
| Kontakt | `kontakt.html` | Kontaktformular, Standort (Google Maps) |
| Katalog | `katalog.html` | Erweiterter Produktkatalog |
| Datenschutz | `datenschutz.html` | DSGVO-Datenschutzerklärung |
| Impressum | `impressum.html` | Impressum gemäß §5 TMG |

---

## Features

- **Hero mit Ken-Burns-Animation** – Hintergrundbild zoomt und driftet sanft (22s, alternate), 98%-Overlay
- **ROI-Rechner** – Interaktiver Energieeinsparungs-Rechner (Fenstertyp, Heizkosten, Fläche → jährliche Ersparnis, CO₂, Amortisation)
- **Projekt-Timeline** – 6-stufige visuelle Darstellung des Auftragsprozesses
- **Vorteile-Grid** – 6 Karten auf dunklem Hintergrund ("Warum Profis auf uns setzen")
- **Filterbarer Katalog** – Kunststoff, Holz, Alu, Hebe-Schiebe
- **Leistungskarten mit Bildhintergrund** – Fenster-Fertigung, Montage & Einbau, Lieferung & Logistik
- **Trust Bar** – 5 konkrete Vertrauenssignale unterhalb des Heroes
- **Rechner-Button im Header** – Direktlink zum ROI-Rechner
- **Counter-Animation** – Zahlen zählen beim Einblenden hoch
- **Fade-in on Scroll** – Karten und Galerie-Items via IntersectionObserver
- **Responsives Design** – Mobile-first, Hamburger-Menü ab 768px
- **SEO-Optimiert** – Meta-Tags, OG-Tags, Canonical-Links
- **Scroll-to-Top Button** – Erscheint ab 400px Scrolltiefe

---

## Design

| Eigenschaft | Wert |
|-------------|------|
| Body-Font | Inter (Google Fonts) |
| Heading-Font | System Font Stack (`-apple-system, BlinkMacSystemFont, SF Pro Display`) |
| Primärfarbe | `#0f172a` (Near-Black) |
| Akzentfarbe | `#2563eb` (Clean Blue) |
| Hintergrund | `#ffffff` / `#f8fafc` |
| Stil | Minimalistisch, Apple/OpenAI-inspiriert |
| Zielgruppe | B2B (Bauunternehmen, Architekten, Projektentwickler) |

### Header
- Startet transparent über dem dunklen Hero
- Blendet beim Scrollen mit Frosted-Glass-Effekt ein (`backdrop-filter: blur(20px)`)
- Höhe: 68px (kompakt)
- Enthält: Logo, Navigation, Telefon, Rechner-Button, Anfrage-Button

### Hero
- Vollbild-Hintergrundbild mit Ken-Burns-Animation (langsamer Zoom + Drift)
- 98%-Overlay für maximale Lesbarkeit bei subtiler Bildwirkung
- Zentriertes Layout (einspaltig), großer Headline-Block
- Headline: "FENSTER. TÜREN. FÜR PROFIS."

### Seitenstruktur (Startseite)
1. Hero (dark)
2. Trust Bar (light)
3. Leistungen (white)
4. Über uns (light, `#f8fafc`)
5. Vorteile-Grid (dark)
6. ROI-Rechner (white)
7. Projekt-Timeline (light)
8. CTA (dark)
9. Footer (dark)

---

## ROI-Rechner – Berechnungsgrundlage

| Fenstertyp | Einsparfaktor | Basis |
|---|---|---|
| Einfachverglasung (vor 1990) | 17 % der Heizkosten | Uw ≈ 4,5 → 0,7, ~85 % Reduktion × 20 % Fensteranteil |
| Doppelverglasung (1990–2010) | 12 % | Uw ≈ 2,8 → 0,7, ~75 % Reduktion × 20 % Fensteranteil |
| Doppelverglasung (nach 2010) | 5 % | Uw ≈ 1,4 → 0,7, ~50 % Reduktion × 20 % Fensteranteil |
| Investition pro Fenster | 600 € | Marktpreis inkl. Montage |
| CO₂-Faktor | 0,201 kg/kWh | Erdgas (Umweltbundesamt) |
| Gaspreis Annahme | 0,10 €/kWh | Durchschnitt Gewerbe |

---

## Lokal starten

```bash
cd ozdemir-fensterbau
python3 -m http.server 3333
```

Dann im Browser öffnen: [http://localhost:3333](http://localhost:3333)

---

## Vor Veröffentlichung ausfüllen

- [ ] Adresse (`Musterstraße 12, 30159 Hannover`)
- [ ] Telefonnummer (`+49 511 123 456 78`)
- [ ] E-Mail (`info@ozdemir-fensterbau.de`)
- [ ] HRB-Nummer im Impressum (`HRB XXXXX`)
- [ ] Umsatzsteuer-ID (`DE XXXXXXXXX`)
- [ ] Google Maps Embed-URL (echte Adresse)
- [ ] Produktbilder im Katalog (echte Fotos)
- [ ] Galerie-Bilder (echte Projektfotos)
- [ ] Gründungsjahr prüfen (aktuell: 2009)

---

## Technologien

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, backdrop-filter, CSS Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts – Inter
