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
    ├── og-image.jpg            # 1200×630 Social-Sharing-Bild
    ├── hero-bg.jpg             # Hero-Hintergrundbild Startseite
    ├── fenster-fertigung.jpg   # Leistungskarte: Fenster-Fertigung
    ├── montage-einbau.jpg      # Leistungskarte: Montage & Einbau
    ├── lieferung-logistik.jpg  # Leistungskarte: Lieferung & Logistik
    ├── fassade-bg.jpg          # Leistungskarte: Fassadensysteme
    ├── beratung-planung.jpg    # Leistungskarte: Beratung & Planung
    ├── service-wartung.jpg     # Leistungskarte: Service & Wartung
    └── team-handshake.jpg      # Über-uns-Section (Startseite)
```

> **Hinweis:** Die Hero-Sections der Unterseiten arbeiten ohne Foto – nur mit einem Markenfarben-Gradient und animierten CSS-Layern (Glows, Partikel, Linien-Gitter). Falls dort später Bilder gewünscht sind, lässt sich pro Seite ein `<div class="page-hero-bg" style="background-image:url(...)">` als erster Child der `.page-hero` ergänzen – die Animations-Layer liegen dann darüber.

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
- **Page-Hero auf Unterseiten** – Markenfarben-Gradient (radial × linear) mit pulsierenden Akzent-Glows, driftenden Partikeln und animiertem Linien-Gitter – alles CSS-only, ohne Foto, `prefers-reduced-motion`-konform
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
- [ ] **Web3Forms Access-Key** in `kontakt.html` einsetzen (siehe unten)
- [ ] **JSON-LD-Adresse** in `index.html` und `kontakt.html` aktualisieren (Schema.org LocalBusiness)
- [ ] Strecke Domain prüfen: aktuell `https://www.ozdemir-fensterbau.de/` als Canonical/OG/Sitemap

---

## Kontaktformular einrichten (Web3Forms)

Das Formular auf `kontakt.html` ist mit [Web3Forms](https://web3forms.com) verkabelt – kostenlos, kein Backend nötig, E-Mails landen direkt im Postfach.

1. Auf [web3forms.com](https://web3forms.com) mit der Empfänger-E-Mail-Adresse anmelden – Access-Key wird per Mail zugeschickt.
2. In `kontakt.html` den Platzhalter `DEIN_WEB3FORMS_ACCESS_KEY` durch den echten Key ersetzen:
   ```html
   <input type="hidden" name="access_key" value="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx">
   ```
3. Optional: `redirect`-URL anpassen (steht aktuell auf `https://www.ozdemir-fensterbau.de/kontakt.html?ok=1`).

Solange der Platzhalter nicht ersetzt ist, läuft das Formular im **Demo-Modus** (zeigt Erfolgsmeldung, sendet aber nicht).

Honeypot-Feld (`botcheck`), `aria-invalid`-Validierung und Erfolgs-/Fehler-Toasts sind bereits vorhanden.

---

## Deployment

### Option A: GitHub Pages (kostenlos)

1. GitHub → Repo `eneshome-arch/-zdemir-fensterbau` → **Settings → Pages**
2. **Source:** `Deploy from a branch`, **Branch:** `main`, **Folder:** `/ (root)`
3. Speichern – Seite ist nach 1–2 Minuten live unter `https://eneshome-arch.github.io/-zdemir-fensterbau/`
4. Für eigene Domain: in **Settings → Pages → Custom domain** `www.ozdemir-fensterbau.de` eintragen, beim Domain-Hoster CNAME auf `eneshome-arch.github.io` setzen.

`.nojekyll` ist im Repo – GitHub Pages überspringt damit den Jekyll-Build (sonst werden Dateien wie `_originals/` ignoriert).

### Option B: Vercel (auch kostenlos, schneller CDN)

1. [vercel.com](https://vercel.com) → **Add New… → Project** → Repo importieren
2. Framework Preset: `Other`, Build Command leer lassen, Output Directory: `/`
3. Deploy → fertig. Custom Domain analog zu GitHub Pages über Vercel-Dashboard.

### robots.txt & sitemap.xml

`robots.txt` und `sitemap.xml` liegen im Root. Nach Deployment in der **Google Search Console** registrieren:
- Property hinzufügen: `https://www.ozdemir-fensterbau.de/`
- Sitemap einreichen: `sitemap.xml`

---

## Performance-Hinweise

- Bilder sind auf max. 1400px Breite skaliert und auf JPEG q72 komprimiert (Hero auf 1920px / q75). Originale liegen unter `images/_originals/` (von `.gitignore` ausgeschlossen).
- Vor neuen Bildern: zuerst Original sichern, dann skalieren mit `sips -Z 1400 -s format jpeg -s formatOptions 72 input.jpg --out output.jpg`.
- `loading="lazy"` und `decoding="async"` ist auf allen Below-the-Fold-Bildern gesetzt; Header-Logos haben explizite `width`/`height` (CLS-Schutz).

---

## Technologien

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, clamp(), backdrop-filter, CSS Animations, svh-Unit)
- Vanilla JavaScript (ES6+)
- Google Fonts – Inter
