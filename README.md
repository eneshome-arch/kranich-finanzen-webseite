# Özdemir Fensterbau – Website

Statische Website für **Özdemir Bau UG**, Garbsen. Gebaut mit reinem HTML, CSS und Vanilla JavaScript – kein Framework, kein Build-Prozess. Zielgruppe: Privatkunden, Bauunternehmen, Architekten und Projektentwickler.

---

## Firmendaten

| Feld | Wert |
|------|------|
| Firma | Özdemir Bau UG (haftungsbeschränkt) |
| Geschäftsinhaber | Cevat Özdemir |
| Geschäftsführer | Mehmet Özdemir |
| Adresse | Bremer Straße 31, 30827 Garbsen |
| Telefon | +49 172 276 1541 |
| E-Mail | info@özdemir-fensterbau.de |
| USt-ID | DE355586862 |
| Domain | özdemir-fensterbau.de |
| Gegründet (UG) | 2025 (Handwerkserfahrung seit über 10 Jahren) |

---

## Projektstruktur

```
ozdemir-fensterbau/
├── index.html              # Startseite
├── ueber-uns.html          # Über uns
├── leistungen.html         # Leistungen
├── sortiment.html          # Produkt-Shop (32 Produkte)
├── produkt/
│   └── index.html          # Produktdetailseite (JS-driven, URL-param ?id=)
├── kontakt.html            # Kontakt mit Formular & Google Maps
├── datenschutz.html        # Datenschutzerklärung (DSGVO)
├── impressum.html          # Impressum (§5 TMG)
├── robots.txt              # Crawler-Direktiven
├── sitemap.xml             # Alle indexierbaren Seiten
├── .nojekyll               # GitHub Pages: Jekyll-Build überspringen
├── css/
│   └── style.css           # Gesamtes Styling (v=114)
├── js/
│   ├── main.js             # Interaktivität, Anfrage-Modal, PDP-Logik
│   └── products.js         # Zentrale Produktdaten (PRODUCTS-Array, 32 Produkte)
└── images/
    ├── logo.png
    ├── hero-bg.png
    ├── og-image.jpg
    ├── ideal-8000.png
    ├── [alle Produktbilder …]
    └── dekoren.png
```

---

## Seiten

| Seite | Datei | Headline |
|-------|-------|----------|
| Startseite | `index.html` | Fenster die überzeugen. |
| Über uns | `ueber-uns.html` | IHR FACHBETRIEB. AUS GARBSEN. |
| Leistungen | `leistungen.html` | SECHS LEISTUNGEN. EIN ANSPRECHPARTNER. |
| Sortiment | `sortiment.html` | ALLE SYSTEME. EIN PARTNER. |
| Produktdetail | `produkt/index.html` | Dynamisch via `?id=` URL-Parameter |
| Kontakt | `kontakt.html` | SPRECHEN WIR ÜBER IHR PROJEKT. |
| Datenschutz | `datenschutz.html` | DSGVO-Datenschutzerklärung |
| Impressum | `impressum.html` | Impressum gemäß §5 TMG |

---

## Produkt-Shop (sortiment.html + produkt/)

Der Shop ist nach dem Shopify-Prinzip aufgebaut: zentrale Produktdaten in `js/products.js`, JS-getriebene Detailseite via URL-Parameter `?id=`. Links immer als `produkt/?id=X` (Directory-Routing für Serverkompatibilität).

### Produktübersicht (alle 32)

| # | ID | Produkt | Kategorie |
|---|----|---------|-----------|
| 1 | `ideal-8000` | IDEAL 8000 | Kunststoff |
| 2 | `ideal-7000` | IDEAL 7000 | Kunststoff |
| 3 | `neo` | NEO – New Look | Kunststoff |
| 4 | `ideal-4000` | IDEAL 4000 | Kunststoff |
| 5 | `ideal-5000` | IDEAL 5000 | Kunststoff |
| 6 | `hst` | HST Hebeschiebetür | Hebe-Schiebe |
| 7 | `psk` | PSK Smart Slide Neo | Hebe-Schiebe |
| 8 | `eingangstuer-pvc` | Eingangstür PVC | Haustür |
| 9 | `alu-schiebe` | Ziehgriffe | Zubehör |
| 10 | `alu-thermo` | Türgriffe & Türzubehör | Zubehör |
| 11 | `alu-ferroline` | Klassische Kunststofftüren | Haustür |
| 12 | `alu-harmonika` | Moderne Kunststofftüren | Haustür |
| 13 | `haustuer-pvc` | Thermo Aluminiumfenster | Aluminium |
| 14 | `haustuer-genesis` | New Design Aluminiumfenster | Aluminium |
| 15 | `untypische-alu` | Untypische Aluminiumfenster | Aluminium |
| 16 | `alu-schiebetueren` | Aluminium Schiebetüren | Aluminium |
| 17 | `alu-falttuer` | Aluminium Falttüren | Aluminium |
| 18 | `alu-eingangstuer` | Aluminium Eingangstüren | Aluminium |
| 19 | `aussenrolladen` | Außenrolläden | Sonnenschutz |
| 20 | `steuerungssysteme` | Steuerungssysteme | Sonnenschutz |
| 21 | `raffstoren` | Raffstoren | Sonnenschutz |
| 22 | `garagentore` | Garagentore | Zubehör |
| 23 | `glasscheibenpakete` | Glasscheibenpakete | Verglasung |
| 24 | `ornamentglas` | Ornamentglas | Verglasung |
| 25 | `sonnenschutzglas` | Sonnenbeständiges Glas | Verglasung |
| 26 | `sprossen` | Sprossen | Zubehör |
| 27 | `sprossenarten` | Sprossenarten | Zubehör |
| 28 | `kopplungsarten` | Kopplungsarten | Zubehör |
| 29 | `fenstergriffe` | Fenstergriffe | Zubehör |
| 30 | `beschlaege` | Beschläge | Zubehör |
| 31 | `sicherheitssysteme` | Sicherheitssysteme | Zubehör |
| 32 | `dekoren` | Dekoren | Zubehör |

### Produktdetailseite – Features
- URL-Routing: `produkt/?id=ideal-8000` (Directory + `<base href="../">`)
- Bildgalerie mit Thumbnail-Navigation und Fade-Effekt
- Variantenauswahl (Farbswatches) mit optionalem Bildwechsel
- Zertifikats-Badges (Passivhaus, RC2, ift Rosenheim, CE, Deutscher Markt)
- Technische Spec-Tabelle mit Fußnote
- Ähnliche Produkte (gleiche Kategorie zuerst, mit Produktbild und korrekten Links)
- Produktspezifisches Anfrage-Modal mit Produktbild, Name und Tagline

---

## Features

- **Hero Section** – Hintergrundfoto (`hero-bg.png`) mit dunklem Gradient-Overlay; Browser-Mockup mit Sortiment-Vorschau (iframe) rechts.
- **Floating Island Navigation** – Pill-förmiger Header; bleibt dunkel-transparent bis Hero gescrollt, dann weiß mit `backdrop-filter: blur(20px)`.
- **Hannover-Section** – YouTube-Video (autoplay, loop via IFrame API, keine Controls) mit Text-Overlay und CTA-Button. Text: „Hannover & Umgebung".
- **3D Timeline-Karussell** – „So arbeiten wir": 6 Schritte auf virtualem 3D-Zylinder.
- **Team-Section** – 2 Karten nebeneinander (Mehmet Özdemir & Cevat Özdemir) mit Float-Animation und Avatar-Glow.
- **Trust-Bar Animation** – 5 Vertrauenssignale zirkulieren mit Pop-in-Effekt alle 2,5 s.
- **ROI-Rechner** – Fenstertyp, Heizkosten, Fläche → Ersparnis, CO₂, Amortisation.
- **Leistungsportfolio** – 6 Leistungskarten im Blue-Frame-Stil.
- **Anfrage-Modal** – Produktspezifisch mit Vorschau (Bild, Kategorie, Name, Tagline). Web3Forms-Integration für E-Mail-Versand.
- **Fade-in on Scroll** – `IntersectionObserver`.
- **Counter-Animation** – `requestAnimationFrame`, easeOut.
- **Web3Forms** – Anfrage-Modal + Kontaktformular.
- **Google Maps** – Adress-spezifischer Embed (Bremer Straße 31, Garbsen).
- **SEO** – Meta-Tags, OG-Tags, Canonical, Schema.org JSON-LD (LocalBusiness).
- **Barrierefreiheit** – Skip-Link, `sr-only`, `:focus-visible`, `prefers-reduced-motion`.

---

## Design

| Eigenschaft | Wert |
|-------------|------|
| Font | Inter (Google Fonts) |
| Primärfarbe | `#0f172a` (Near-Black) |
| Footer-Farbe | `#020617` (Deep Black) |
| Akzentfarbe | `#2563eb` (Clean Blue) |
| Frame-Farbe | `#dbeafe` (Hellblau) |
| Body-Hintergrund | `#f6f6f8` (sanftes Grau) |
| Stil | Minimalistisch, Apple/Linear-inspiriert |

### Blue-Frame-Stil

Konsistentes Design-Muster für alle Hauptsektionen:
```css
/* Äußerer Rahmen */
background: #dbeafe;
padding: 28px;
background-image: radial-gradient(…); /* Bloom */

/* Innere Karte */
background: #fff;
border-radius: 20px;
box-shadow: 0 8px 40px rgba(59,130,246,0.10);
```
Angewendet auf: Hero, Hannover-Section, Leistungsportfolio, ROI-Rechner, Team-Section.

### Navigation – Breakpoints

| Breakpoint | Verhalten |
|-----------|-----------|
| > 1300px | Vollständige Nav inkl. Telefonnummer |
| ≤ 1100px | Hamburger-Menü |
| ≤ 768px | Vollständig mobil |

---

## Lokal starten

```bash
npx serve .
```

Dann im Browser: [http://localhost:3000](http://localhost:3000)

> Produktdetailseite: `http://localhost:3000/produkt/?id=ideal-8000`

---

## Deployment

### GitHub Pages

1. Repository muss **öffentlich** sein
2. GitHub → Repo → **Settings → Pages**
3. Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`
4. Custom Domain: `özdemir-fensterbau.de`

---

## Noch ausstehend

- [ ] Web3Forms Access-Key in `js/main.js` eintragen (`DEIN_WEB3FORMS_KEY`)
- [ ] Echte Projektfotos (Galerie)
- [ ] Team-Fotos

---

## Kontaktformular & Anfrage-Modal einrichten (Web3Forms)

1. Auf [web3forms.com](https://web3forms.com) anmelden und E-Mail eingeben.
2. In `js/main.js` ersetzen:
   ```js
   access_key: 'DEIN_WEB3FORMS_KEY',
   ```

---

## Technologien

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, `clamp()`, `backdrop-filter`)
- Vanilla JavaScript (ES6+, IntersectionObserver, `requestAnimationFrame`)
- Google Fonts – Inter
- Web3Forms (Anfrage-Modal + Kontaktformular, kein Backend)
- YouTube IFrame API (Video-Loop in Hannover-Section)
