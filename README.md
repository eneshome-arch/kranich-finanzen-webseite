# Özdemir Fensterbau – Website

Statische Website für **Özdemirbau UG**, Garbsen. Gebaut mit reinem HTML, CSS und Vanilla JavaScript – kein Framework, kein Build-Prozess. Zielgruppe: Privatkunden, Bauunternehmen, Architekten und Projektentwickler.

---

## Firmendaten

| Feld | Wert |
|------|------|
| Firma | Özdemirbau UG (haftungsbeschränkt) |
| Geschäftsführer | Cevat Özdemir |
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
├── index.html          # Startseite
├── ueber-uns.html      # Über uns
├── leistungen.html     # Leistungen
├── sortiment.html      # Produkt-Shop (Shopify-Style, 14 Produkte)
├── produkt.html        # Produktdetailseite (JS-driven, URL-param ?id=)
├── kontakt.html        # Kontakt mit Formular & Google Maps
├── katalog.html        # Filterbarer Produktkatalog
├── datenschutz.html    # Datenschutzerklärung (DSGVO)
├── impressum.html      # Impressum (§5 TMG)
├── robots.txt          # Crawler-Direktiven
├── sitemap.xml         # Alle indexierbaren Seiten
├── .nojekyll           # GitHub Pages: Jekyll-Build überspringen
├── css/
│   └── style.css       # Gesamtes Styling
├── js/
│   ├── main.js         # Interaktivität, Anfrage-Modal, PDP-Logik
│   └── products.js     # Zentrale Produktdaten (PRODUCTS-Array)
└── images/
    ├── logo.png
    ├── og-image.jpg
    ├── produkt-1-ideal8000.png
    ├── produkt-1-ideal8000-2.png
    ├── produkt-2-ideal7000.png
    ├── produkt-2-ideal7000-2.png
    ├── produkt-3-neo.png
    ├── produkt-3-neo-2.png
    ├── produkt-4-ideal4000.png
    ├── produkt-4-ideal4000-2.png
    ├── produkt-5-ideal5000.png
    ├── produkt-5-ideal5000-2.png
    ├── produkt-6-hst.png
    ├── produkt-6-hst-2.png
    ├── produkt-7-psk.png
    ├── produkt-7-psk-2.png
    ├── produkt-7-psk-3.png
    ├── produkt-7-psk-4.png
    └── produkt-8-eingangstuer-pvc.png
```

---

## Seiten

| Seite | Datei | Headline |
|-------|-------|----------|
| Startseite | `index.html` | FENSTER MIT SYSTEM. |
| Über uns | `ueber-uns.html` | KEIN MITTELSMANN. DIREKT VOM PROFI. |
| Leistungen | `leistungen.html` | SECHS LEISTUNGEN. EIN ANSPRECHPARTNER. |
| Sortiment | `sortiment.html` | ALLE SYSTEME. EIN PARTNER. |
| Produktdetail | `produkt.html` | Dynamisch via `?id=` URL-Parameter |
| Kontakt | `kontakt.html` | SPRECHEN WIR ÜBER IHR PROJEKT. |
| Katalog | `katalog.html` | Erweiterter Produktkatalog |
| Datenschutz | `datenschutz.html` | DSGVO-Datenschutzerklärung |
| Impressum | `impressum.html` | Impressum gemäß §5 TMG |

---

## Produkt-Shop (sortiment.html + produkt.html)

Der Shop ist nach dem Shopify-Prinzip aufgebaut: zentrale Produktdaten in `js/products.js`, JS-getriebene Detailseite via URL-Parameter `?id=`.

### Produktübersicht

| # | Produkt | Kategorie | Uw-Wert | Bilder |
|---|---------|-----------|---------|--------|
| 1 | IDEAL 8000 | Kunststoff | 0,76 W/m²K | ✅ |
| 2 | IDEAL 7000 | Kunststoff | 0,79 W/m²K | ✅ |
| 3 | NEO – New Look | Kunststoff | 0,78 W/m²K | ✅ |
| 4 | IDEAL 4000 | Kunststoff | 1,28 W/m²K | ✅ |
| 5 | IDEAL 5000 | Kunststoff | 1,23 W/m²K | ✅ |
| 6 | HST Hebeschiebetür | Hebe-Schiebe | 0,71 W/m²K | ✅ |
| 7 | PSK Smart Slide Neo | Hebe-Schiebe | – | ✅ |
| 8 | Eingangstür PVC | Haustür | – | ✅ |
| 9 | Alu Schiebetür MB-59HS | Hebe-Schiebe | – | ⬜ |
| 10 | THERMO Alu MB 104 Passive | Aluminium | – | ⬜ |
| 11 | NEW DESIGN Ferroline | Aluminium | – | ⬜ |
| 12 | Alu Falttür Harmonika | Aluminium | – | ⬜ |
| 13 | Haustür Modern PVC | Haustür | – | ⬜ |
| 14 | Alu Haustür Genesis 75 | Haustür | – | ⬜ |

### Produktdetailseite – Features
- URL-Parameter: `produkt?id=ideal-8000`
- Bildgalerie mit Thumbnail-Navigation und Fade-Effekt
- Variantenauswahl (Farbswatches) mit optionalem Bildwechsel
- Zertifikats-Badges (Passivhaus, RC2, ift Rosenheim, CE, Deutscher Markt)
- Technische Spec-Tabelle mit Fußnote
- Ähnliche Produkte (gleiche Kategorie zuerst)
- Anfrage-Modal produktspezifisch

---

## Features

- **Floating Island Navigation** – Pill-förmiger Header; bleibt dunkel-transparent bis Hero gescrollt, dann weiß mit `backdrop-filter: blur(20px)`. Auf `produkt.html` immer weiß via `data-theme="white"`.
- **3D Timeline-Karussell** – „So arbeiten wir": 6 Schritte auf virtualem 3D-Zylinder, vollständig in JS berechnet.
- **3D Team-Karussell** – „Unser Team": 3 Karten, JS-Perspektivprojektion, Auto-Advance alle 3,5 s.
- **Werte-/Benefits-/Leistungen-Karussell (mobil)** – Scroll-Snap mit Dot-Indikatoren.
- **Trust-Bar Animation** – 5 Vertrauenssignale zirkulieren mit Pop-in-Effekt (3 s / 0,5 s).
- **ROI-Rechner** – Fenstertyp, Heizkosten, Fläche → Ersparnis, CO₂, Amortisation.
- **Anfrage-Modal** – Produktspezifisches Formular, öffnet auf allen Produkt-Buttons.
- **Fade-in on Scroll** – `IntersectionObserver`.
- **Counter-Animation** – `requestAnimationFrame`, easeOut.
- **Web3Forms Kontaktformular** – Honeypot, `aria-invalid`-Validierung.
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
| Body-Hintergrund | `#f6f6f8` (sanftes Grau) |
| Stil | Minimalistisch, Apple/Linear-inspiriert |

### Navigation – Breakpoints

| Breakpoint | Verhalten |
|-----------|-----------|
| > 1300px | Vollständige Nav inkl. Telefonnummer |
| ≤ 1100px | Hamburger-Menü |
| ≤ 768px | Vollständig mobil |

---

## Lokal starten

```bash
npx serve . -p 3000
```

Dann im Browser: [http://localhost:3000](http://localhost:3000)

> Produktdetailseite aufrufen: `http://localhost:3000/produkt?id=ideal-8000`

---

## Deployment

### GitHub Pages

1. GitHub → Repo → **Settings → Pages**
2. Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`

### Coolify / Hetzner

- Server-IP: `46.224.59.145`
- Nixpacks staticfile (Caddy, Port 80)

---

## Noch ausstehend

- [ ] Produktbilder für #9–#14 einfügen
- [ ] PDF-Daten für #9–#14 einpflegen
- [ ] Web3Forms Access-Key in `kontakt.html` einsetzen
- [ ] Google Maps Embed-URL (echte Adresse)
- [ ] Galerie-Bilder (echte Projektfotos)
- [ ] Team-Fotos

---

## Kontaktformular einrichten (Web3Forms)

1. Auf [web3forms.com](https://web3forms.com) anmelden.
2. In `kontakt.html` ersetzen:
   ```html
   <input type="hidden" name="access_key" value="DEIN-KEY-HIER">
   ```

---

## Technologien

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, `clamp()`, `backdrop-filter`)
- Vanilla JavaScript (ES6+, IntersectionObserver, `requestAnimationFrame`)
- Google Fonts – Inter
- Web3Forms (Kontaktformular, kein Backend)
