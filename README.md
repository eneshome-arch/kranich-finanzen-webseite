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
    ├── fenster-fertigung.png  # Bild Fensterfertigung (Leistungskarte)
    ├── montage-einbau.png     # Bild Montage & Einbau (Leistungskarte)
    ├── lieferung-logistik.jpg # Bild Lieferung & Logistik (Leistungskarte)
    └── team-handshake.jpg     # Bild Über uns Section
```

---

## Seiten

| Seite | Datei | Beschreibung |
|-------|-------|--------------|
| Startseite | `index.html` | Hero, Leistungsübersicht, Über-uns-Teaser, ROI-Rechner, Projekt-Timeline, Referenzen, CTA |
| Über uns | `ueber-uns.html` | Unternehmensstory, Team, Werte, Zertifizierungen |
| Leistungen | `leistungen.html` | 6 Leistungsbereiche im Detail |
| Sortiment | `sortiment.html` | Produktkatalog mit Filterung (Kunststoff, Holz, Alu, Hebe-Schiebe) |
| Kontakt | `kontakt.html` | Kontaktformular, Standort (Google Maps) |
| Katalog | `katalog.html` | Erweiterter Produktkatalog |
| Datenschutz | `datenschutz.html` | DSGVO-Datenschutzerklärung |
| Impressum | `impressum.html` | Impressum gemäß §5 TMG |

---

## Features

- **ROI-Rechner** – Interaktiver Energieeinsparungs-Rechner (Fenstertyp, Heizkosten, Fläche → jährliche Ersparnis, CO₂, Amortisation)
- **Projekt-Timeline** – 6-stufige visuelle Darstellung des Auftragsprozesses
- **Filterbarer Katalog** – Kunststoff, Holz, Alu, Hebe-Schiebe
- **Leistungskarten mit Bildhintergrund** – Fenster-Fertigung, Montage & Einbau, Lieferung & Logistik mit echten Fotos
- **Hero-Karten-Animation** – Sanfte Breathing-Animation auf der „Unsere Stärken"-Karte
- **Counter-Animation** – Zahlen zählen beim Einblenden hoch
- **Fade-in on Scroll** – Karten und Galerie-Items via IntersectionObserver
- **Responsives Design** – Mobile-first, Hamburger-Menü ab 768px
- **SEO-Optimiert** – Meta-Tags, OG-Tags, Canonical-Links
- **Scroll-to-Top Button** – Erscheint ab 400px Scrolltiefe

---

## Design

| Eigenschaft | Wert |
|-------------|------|
| Font | Inter (Google Fonts) |
| Primärfarbe | `#0f172a` (Near-Black) |
| Akzentfarbe | `#2563eb` (Clean Blue) |
| Hintergrund | `#ffffff` / `#f8fafc` |
| Stil | Minimalistisch, OpenAI-inspiriert |
| Zielgruppe | B2B (Bauunternehmen, Architekten, Projektentwickler) |

### Header
- Startet transparent über dem dunklen Hero
- Blendet beim Scrollen mit Frosted-Glass-Effekt ein (`backdrop-filter: blur(20px)`)
- Höhe: 68px (kompakt)

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

---

## Technologien

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, backdrop-filter)
- Vanilla JavaScript (ES6+)
- Google Fonts – Inter
