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
│   └── style.css       # Gesamtes Styling (v31)
├── js/
│   └── main.js         # Interaktivität & Animationen
└── images/
    ├── logo.png                # Firmenlogo
    ├── hero-bg.jpg             # Hero-Hintergrundbild (Gebäudefassade)
    ├── fenster-fertigung.png   # Leistungskarte: Fenster-Fertigung
    ├── montage-einbau.png      # Leistungskarte: Montage & Einbau
    ├── lieferung-logistik.jpg  # Leistungskarte: Lieferung & Logistik
    ├── fassade-bg.jpg          # Leistungskarte: Fassadensysteme
    ├── beratung-planung.jpg    # Leistungskarte: Beratung & Planung
    └── service-wartung.jpg     # Leistungskarte: Service & Wartung
```

---

## Seiten

| Seite | Datei | Headline |
|-------|-------|----------|
| Startseite | `index.html` | FENSTER. TÜREN. FÜR PROFIS. |
| Über uns | `ueber-uns.html` | KEIN MITTELSMANN. DIREKT VOM PROFI. |
| Leistungen | `leistungen.html` | SECHS LEISTUNGEN. EIN ANSPRECHPARTNER. |
| Sortiment | `sortiment.html` | ALLE SYSTEME. EIN PARTNER. |
| Kontakt | `kontakt.html` | SPRECHEN WIR ÜBER IHR PROJEKT. |
| Katalog | `katalog.html` | Erweiterter Produktkatalog |
| Datenschutz | `datenschutz.html` | DSGVO-Datenschutzerklärung |
| Impressum | `impressum.html` | Impressum gemäß §5 TMG |

---

## Features

- **Hero mit Ken-Burns-Animation** – Hintergrundbild zoomt und driftet sanft (22s, alternate), 98%-Overlay
- **Leistungskarten mit Bildhintergrund** – Alle 6 Karten (Fenster-Fertigung, Montage, Lieferung, Fassade, Beratung, Service) mit eigenen Hintergrundbildern, kein Bild doppelt verwendet
- **ROI-Rechner** – Interaktiver Energieeinsparungs-Rechner (Fenstertyp, Heizkosten, Fläche → jährliche Ersparnis, CO₂, Amortisation)
- **Projekt-Timeline** – 6-stufige visuelle Darstellung des Auftragsprozesses
- **Vorteile-Grid** – 6 Karten auf dunklem Hintergrund
- **Filterbarer Katalog** – Kunststoff, Holz, Alu, Hebe-Schiebe
- **Schwebedropdown-Menü** – Floating-Dropdown auf Mobile (position: absolute, border-radius, box-shadow), mit aktivem Seitenindikator (blau)
- **Aktiver Navlink** – Aktuelle Seite in Desktop-Nav und Mobile-Dropdown blau markiert
- **Trust Bar** – 5 konkrete Vertrauenssignale unterhalb des Heroes
- **Rechner-Button im Header** – Direktlink zum ROI-Rechner
- **Counter-Animation** – Zahlen zählen beim Einblenden hoch
- **Fade-in on Scroll** – Karten und Galerie-Items via IntersectionObserver
- **Vollständig responsives Design** – 6 Breakpoints (1200 / 1100 / 1024 / 900 / 768 / 480 / 380px), kein horizontaler Overflow
- **Frosted-Glass-Header** – Startet transparent, blendet beim Scrollen mit `backdrop-filter: blur(20px)` ein
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
- Desktop: Logo · Navigation · Telefon · Rechner-Button · Anfrage-Button
- Mobile: Logo · Hamburger → Schwebendes Dropdown-Menü mit aktivem Seitenindikator

### Responsive Breakpoints

| Breakpoint | Änderungen |
|-----------|-----------|
| ≤ 1200px | Nav-Links enger |
| ≤ 1100px | Telefonnummer ausgeblendet, Benefits 2-spaltig |
| ≤ 1024px | Tablet-Layout, 2-spaltige Grids, Kontakt 1-spaltig |
| ≤ 900px | Rechner-Button ausgeblendet, Leistungen 1-spaltig |
| ≤ 768px | Vollständig mobil: Hamburger-Menü, 1-spaltige Layouts |
| ≤ 480px | Kleines Mobil: kleinere Schriften, gestapelte Buttons |
| ≤ 380px | Sehr kleines Mobil: minimalste Abstände |

### Seitenstruktur (Startseite)
1. Hero (dark)
2. Trust Bar (light)
3. Leistungen mit Bildhintergründen (white)
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
- CSS3 (Custom Properties, Grid, Flexbox, clamp(), backdrop-filter, CSS Animations, svh-Unit)
- Vanilla JavaScript (ES6+)
- Google Fonts – Inter
