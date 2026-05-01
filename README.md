# Özdemir Fensterbau – Website

Statische Website für **Özdemir Fensterbau**, Hannover. Gebaut mit reinem HTML, CSS und Vanilla JavaScript – kein Framework, kein Build-Prozess. Zielgruppe: Privatkunden, Bauunternehmen, Architekten und Projektentwickler.

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
├── robots.txt          # Crawler-Direktiven
├── sitemap.xml         # Alle indexierbaren Seiten
├── .nojekyll           # GitHub Pages: Jekyll-Build überspringen
├── css/
│   └── style.css       # Gesamtes Styling (v78)
├── js/
│   └── main.js         # Interaktivität & Animationen (v15)
└── images/
    ├── logo.png                # Firmenlogo
    ├── og-image.jpg            # 1200×630 Social-Sharing-Bild
    ├── fenster-fertigung.jpg   # Leistungskarte: Fenster-Fertigung
    ├── montage-einbau.jpg      # Leistungskarte: Montage & Einbau
    ├── lieferung-logistik.jpg  # Leistungskarte: Lieferung & Logistik
    ├── fassade-bg.jpg          # Leistungskarte: Fassadensysteme
    ├── beratung-planung.jpg    # Leistungskarte: Beratung & Planung
    ├── service-wartung.jpg     # Leistungskarte: Service & Wartung
    └── team-handshake.jpg      # Über-uns-Section (Startseite)
```

---

## Seiten

| Seite | Datei | Headline |
|-------|-------|----------|
| Startseite | `index.html` | FENSTER MIT SYSTEM. |
| Über uns | `ueber-uns.html` | KEIN MITTELSMANN. DIREKT VOM PROFI. |
| Leistungen | `leistungen.html` | SECHS LEISTUNGEN. EIN ANSPRECHPARTNER. |
| Sortiment | `sortiment.html` | ALLE SYSTEME. EIN PARTNER. |
| Kontakt | `kontakt.html` | SPRECHEN WIR ÜBER IHR PROJEKT. |
| Katalog | `katalog.html` | Erweiterter Produktkatalog |
| Datenschutz | `datenschutz.html` | DSGVO-Datenschutzerklärung |
| Impressum | `impressum.html` | Impressum gemäß §5 TMG |

---

## Features

- **Floating Island Navigation** – Pill-förmiger Header, 16px zu den Rändern; bleibt dunkel-transparent bis der Hero-Abschnitt komplett gescrollt wurde, dann weiß mit `backdrop-filter: blur(20px)`. Logo links, Hamburger rechts auf kleinen Geräten.
- **3D Timeline-Karussell** – „So arbeiten wir": 6 Schritte auf einem virtuellen 3D-Zylinder. Perspektivprojektion wird vollständig in JS berechnet (kein CSS `perspective`/`preserve-3d`) – das aktive Item ist dadurch garantiert pixelgenau mittig. Radius skaliert responsiv mit der Containerbreite. Der aktive Schritt ist blau hervorgehoben und zeigt seine Beschriftung; alle anderen sind gedimmt sichtbar im Hintergrund.
- **Trust-Bar Animation** – 5 Vertrauenssignale zirkulieren mit Pop-in-Effekt einzeln durch (3 s sichtbar, 0,5 s Übergang).
- **Benefits-Karussell (mobil)** – „Warum Kunden auf uns setzen": Scroll-Snap-Karussell auf kleinen Geräten mit Dot-Indikatoren, kein Auto-Advance.
- **Leistungen-Karussell (mobil)** – „Alles aus einer Hand": gleiches Karussell-System.
- **Hero** – Linksbündig, CSS-Gradient-Spotlight (blauer Radial-Glow oben rechts + unten links), kein Foto, kein Flackern. Overlay mit Bottom-Fade für sauberen Übergang.
- **ROI-Rechner** – Interaktiver Energieeinsparungs-Rechner (Fenstertyp, Heizkosten, Fläche → jährliche Ersparnis, CO₂, Amortisation).
- **Fade-in on Scroll** – Karten und Items via `IntersectionObserver`.
- **Counter-Animation** – Zahlen zählen beim Einblenden hoch (2,2 s, `easeOut` via `requestAnimationFrame`). Auf Mobile nebeneinander statt untereinander.
- **Filterbarer Katalog** – Kunststoff, Holz, Alu, Hebe-Schiebe.
- **Web3Forms Kontaktformular** – Mit Honeypot, `aria-invalid`-Validierung, Erfolgs-/Fehlermeldung.
- **Footer-Signatur** – „Designed by VYOMedia" mit Unterstrich-Indikator, verlinkt auf [vyomedia.de](https://vyomedia.de).
- **SEO** – Meta-Tags, OG-Tags, Canonical-Links, Schema.org JSON-LD (LocalBusiness).
- **Barrierefreiheit** – Skip-Link, `sr-only`, `:focus-visible`, `prefers-reduced-motion`.
- **Google Maps** eingebettet auf der Kontaktseite.

---

## Design

| Eigenschaft | Wert |
|-------------|------|
| Font | Inter (Google Fonts) |
| Primärfarbe | `#0f172a` (Near-Black) |
| Footer-Farbe | `#020617` (Deep Black) |
| Akzentfarbe | `#2563eb` (Clean Blue) |
| Body-Hintergrund | `#f6f6f8` (sanftes Grau) |
| Helle Sections | `#f8fafc` |
| Timeline-Section | `#eef0f3` |
| Stil | Minimalistisch, Apple/Linear-inspiriert |

### Navigation – Breakpoints

| Breakpoint | Verhalten |
|-----------|-----------|
| > 1300px | Vollständige Nav inkl. Telefonnummer |
| ≤ 1300px | Telefonnummer ausgeblendet |
| ≤ 1200px | Rechner-Button ausgeblendet, Nav-Links enger |
| ≤ 1100px | Hamburger-Menü (Logo links, Hamburger rechts) |
| ≤ 1024px | Tablet-Layout, 2-spaltige Grids |
| ≤ 900px | Schmaleres Tablet-Layout |
| ≤ 768px | Vollständig mobil, 1-spaltige Layouts |
| ≤ 480px | Kleines Mobil |
| ≤ 380px | Sehr kleines Mobil |

### Seitenstruktur (Startseite)
1. Hero (dark, CSS-Gradient, linksbündig)
2. Trust Bar (light, animiert)
3. Leistungen / Karussell mobil (white)
4. Über uns + Stärken-Card (light)
5. Vorteile-Grid / Karussell mobil (dark)
6. ROI-Rechner (white)
7. Projekt-Timeline 3D-Karussell (grau `#eef0f3`)
8. CTA (dark)
9. Footer (dark `#020617`)

---

## ROI-Rechner – Berechnungsgrundlage

| Fenstertyp | Einsparfaktor |
|---|---|
| Einfachverglasung (vor 1990) | 17 % der Heizkosten |
| Doppelverglasung (1990–2010) | 12 % |
| Doppelverglasung (nach 2010) | 5 % |
| Investition pro Fenster | 600 € (inkl. Montage) |
| CO₂-Faktor | 0,201 kg/kWh (Erdgas, UBA) |

---

## Lokal starten

```bash
cd ozdemir-fensterbau
python3 -m http.server 5050
```

Dann im Browser öffnen: [http://localhost:5050](http://localhost:5050)

---

## Vor Veröffentlichung ausfüllen

- [ ] Adresse (`Musterstraße 12, 30159 Hannover`)
- [ ] Telefonnummer (`+49 511 123 456 78`)
- [ ] E-Mail (`info@ozdemir-fensterbau.de`)
- [ ] HRB-Nummer im Impressum
- [ ] Umsatzsteuer-ID
- [ ] Google Maps Embed-URL (echte Adresse)
- [ ] Produktbilder im Katalog (echte Fotos)
- [ ] Galerie-Bilder (echte Projektfotos)
- [ ] Gründungsjahr prüfen (aktuell: 2009)
- [ ] **Web3Forms Access-Key** in `kontakt.html` einsetzen
- [ ] JSON-LD-Adresse in `index.html` und `kontakt.html` aktualisieren
- [ ] Domain prüfen: aktuell `https://www.ozdemir-fensterbau.de/`

---

## Kontaktformular einrichten (Web3Forms)

1. Auf [web3forms.com](https://web3forms.com) mit der Empfänger-E-Mail anmelden.
2. In `kontakt.html` den Platzhalter ersetzen:
   ```html
   <input type="hidden" name="access_key" value="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx">
   ```

---

## Deployment

### GitHub Pages (kostenlos)

1. GitHub → Repo → **Settings → Pages**
2. Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`
3. Live unter `https://eneshome-arch.github.io/-zdemir-fensterbau/`
4. Eigene Domain: in **Settings → Pages → Custom domain** `www.ozdemir-fensterbau.de` eintragen, CNAME auf `eneshome-arch.github.io`.

### Vercel (schnelleres CDN)

1. [vercel.com](https://vercel.com) → **Add New → Project** → Repo importieren
2. Framework Preset: `Other`, Build Command leer, Output Directory: `/`

---

## Technologien

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, `clamp()`, `backdrop-filter`, CSS Animations)
- Vanilla JavaScript (ES6+, IntersectionObserver, `requestAnimationFrame`, JS-basierte 3D-Perspektivprojektion)
- Google Fonts – Inter
- Web3Forms (Kontaktformular, kein Backend)
