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
│   └── products.js     # Zentrale Produktdaten (PRODUCTS-Array, 14 Produkte)
└── images/
    ├── logo.png
    ├── og-image.jpg
    ├── ideal-8000.png
    ├── produkt-1-ideal8000.png / -2.png
    ├── produkt-2-ideal7000.png / -2.png
    ├── produkt-3-neo.png / -2.png
    ├── produkt-4-ideal4000.png / -2.png
    ├── produkt-5-ideal5000.png / -2.png
    ├── produkt-6-hst.png / -2.png
    ├── produkt-7-psk.png / -2.png / -3.png / -4.png
    ├── produkt-8-eingangstuer-pvc.png
    ├── ziehgriffe.png
    ├── tuergriffe-zubehoer.png
    ├── klassische-kunststofftueren.png
    ├── moderne-kunststofftueren.png
    ├── thermo-aluminiumfenster.png
    └── new-design-aluminiumfenster.png
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

### Produktübersicht (alle 14 vollständig)

| # | ID | Produkt | Kategorie | Bild |
|---|----|---------|-----------|------|
| 1 | `ideal-8000` | IDEAL 8000 | Kunststoff | ✅ |
| 2 | `ideal-7000` | IDEAL 7000 | Kunststoff | ✅ |
| 3 | `neo-8000` | NEO – New Look | Kunststoff | ✅ |
| 4 | `ideal-4000` | IDEAL 4000 | Kunststoff | ✅ |
| 5 | `ideal-5000` | IDEAL 5000 | Kunststoff | ✅ |
| 6 | `alu-hst` | HST Hebeschiebetür | Hebe-Schiebe | ✅ |
| 7 | `alu-psk` | PSK Smart Slide Neo | Hebe-Schiebe | ✅ |
| 8 | `alu-comfort` | Eingangstür PVC | Haustür | ✅ |
| 9 | `alu-schiebe` | Ziehgriffe | Zubehör | ✅ |
| 10 | `alu-thermo` | Türgriffe & Türzubehör | Zubehör | ✅ |
| 11 | `alu-ferroline` | Klassische Kunststofftüren | Kunststoff | ✅ |
| 12 | `alu-harmonika` | Moderne Kunststofftüren | Kunststoff | ✅ |
| 13 | `haustuer-pvc` | Thermo Aluminiumfenster | Aluminium | ✅ |
| 14 | `haustuer-genesis` | New Design Aluminiumfenster | Aluminium | ✅ |

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
- **Hero Section** – Blauer Rahmen (`#dbeafe`) + weiße Karte (`border-radius: 20px`). Auf Mobilgeräten deaktiviert.
- **Hannover-Section** – YouTube-Video (autoplay, loop via IFrame API, keine Controls) mit Text-Overlay und CTA-Button.
- **3D Timeline-Karussell** – „So arbeiten wir": 6 Schritte auf virtualem 3D-Zylinder, vollständig in JS berechnet.
- **3D Team-Karussell** – „Unser Team": 3 Karten, JS-Perspektivprojektion, Auto-Advance alle 3,5 s.
- **Trust-Bar Animation** – 5 Vertrauenssignale zirkulieren mit Pop-in-Effekt alle 2,5 s (in Hero integriert).
- **ROI-Rechner** – Fenstertyp, Heizkosten, Fläche → Ersparnis, CO₂, Amortisation. Blauer Rahmen + weiße Karte.
- **Leistungsportfolio** – 6 Leistungskarten im Blue-Frame-Stil.
- **Anfrage-Modal** – Produktspezifisches Formular, öffnet auf allen Produkt-Buttons.
- **Fade-in on Scroll** – `IntersectionObserver`.
- **Counter-Animation** – `requestAnimationFrame`, easeOut.
- **Web3Forms Kontaktformular** – Honeypot, `aria-invalid`-Validierung.
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

/* Innere Karte */
background: #fff;
border-radius: 20px;
```
Angewendet auf: Hero, Hannover-Section, Leistungsportfolio, ROI-Rechner.

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

- [ ] Web3Forms Access-Key in `kontakt.html` einsetzen
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
- YouTube IFrame API (Video-Loop in Hannover-Section)
