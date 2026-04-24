# Özdemir Fensterbau – Website

Statische B2B-Website für **Özdemir Fensterbau GmbH**, Hannover. Gebaut mit reinem HTML, CSS und Vanilla JavaScript – kein Framework, kein Build-Prozess.

---

## Projektstruktur

```
ozdemir-fensterbau/
├── index.html          # Startseite
├── ueber-uns.html      # Über uns
├── leistungen.html     # Leistungen
├── portfolio.html      # Portfolio & Referenzen
├── kontakt.html        # Kontakt mit Formular & Google Maps
├── katalog.html        # Filterbarer Produktkatalog
├── datenschutz.html    # Datenschutzerklärung (DSGVO)
├── impressum.html      # Impressum (§5 TMG)
├── css/
│   └── style.css       # Gesamtes Styling
├── js/
│   └── main.js         # Interaktivität & Animationen
└── images/
    └── logo.png        # Firmenlogo
```

---

## Seiten

| Seite | Datei | Beschreibung |
|-------|-------|--------------|
| Startseite | `index.html` | Hero, Leistungsübersicht, Katalog-Teaser, Galerie, CTA |
| Über uns | `ueber-uns.html` | Unternehmensstory, Team, Werte, Zertifizierungen |
| Leistungen | `leistungen.html` | 6 Leistungsbereiche im Detail |
| Portfolio | `portfolio.html` | Referenzprojekte, Bildergalerie mit Lightbox |
| Kontakt | `kontakt.html` | Kontaktformular, Standort (Google Maps), FAQ |
| Katalog | `katalog.html` | Produktkatalog mit Filterung nach Kategorien |
| Datenschutz | `datenschutz.html` | DSGVO-Datenschutzerklärung |
| Impressum | `impressum.html` | Impressum gemäß §5 TMG |

---

## Features

- **Filterbarer Katalog** – Kunststoff, Holz, Alu, Hebe-Schiebe, Türen, Sonderlösungen
- **Bildergalerie & Lightbox** – Portfolio-Bilder mit Klick-Vergrößerung
- **Kontaktformular** – Mit Validierung und Erfolgsanzeige
- **Google Maps** – Standorteinbettung auf der Kontaktseite
- **Scroll-Animationen** – Fade-in via IntersectionObserver
- **Counter-Animation** – Zahlen zählen beim Einblenden hoch
- **Responsives Design** – Mobile-first, Hamburger-Menü ab 768px
- **SEO-Optimiert** – Meta-Tags, OG-Tags, Canonical-Links
- **Scroll-to-Top Button** – Erscheint ab 400px Scrolltiefe

---

## Design

| Eigenschaft | Wert |
|-------------|------|
| Font | Inter (Google Fonts) |
| Primärfarbe | `#1B4F8A` |
| Primär-Dunkel | `#0D2E5A` |
| Akzentfarbe | `#4B8FD4` |
| Hintergrund | `#F4F7FB` |
| Zielgruppe | B2B (Bauunternehmen, Architekten, Projektentwickler) |

---

## Lokal starten

```bash
cd ozdemir-fensterbau
python3 -m http.server 8081
```

Dann im Browser öffnen: [http://localhost:8081](http://localhost:8081)

---

## Vor Veröffentlichung ausfüllen

Folgende Platzhalter müssen vor dem Go-Live mit echten Daten ersetzt werden:

- [ ] Adresse (`Musterstraße 12, 30159 Hannover`)
- [ ] Telefonnummer (`+49 511 123 456 78`)
- [ ] E-Mail (`info@ozdemir-fensterbau.de`)
- [ ] HRB-Nummer im Impressum (`HRB XXXXX`)
- [ ] Umsatzsteuer-ID (`DE XXXXXXXXX`)
- [ ] Google Maps Embed-URL (echte Adresse)
- [ ] Produktbilder im Katalog (echte Fotos)
- [ ] Galerie-Bilder im Portfolio (echte Projektfotos)

---

## Technologien

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts – Inter
- Unsplash (Platzhalter-Bilder)
