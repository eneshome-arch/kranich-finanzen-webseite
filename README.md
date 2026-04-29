# Özdemir Fensterbau – Website

Statische Website für **Özdemir Fensterbau GmbH**, Hannover. Gebaut mit reinem HTML, CSS und Vanilla JavaScript – kein Framework, kein Build-Prozess. Zielgruppe: Privatkunden, Bauunternehmen, Architekten und Projektentwickler.

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
├── sitemap.xml         # Alle 6 indexierbaren Seiten
├── .nojekyll           # GitHub Pages: Jekyll-Build überspringen
├── css/
│   └── style.css       # Gesamtes Styling (v44)
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
| Startseite | `index.html` | FENSTER. TÜREN. FÜR JEDES PROJEKT. |
| Über uns | `ueber-uns.html` | KEIN MITTELSMANN. DIREKT VOM PROFI. |
| Leistungen | `leistungen.html` | SECHS LEISTUNGEN. EIN ANSPRECHPARTNER. |
| Sortiment | `sortiment.html` | ALLE SYSTEME. EIN PARTNER. |
| Kontakt | `kontakt.html` | SPRECHEN WIR ÜBER IHR PROJEKT. |
| Katalog | `katalog.html` | Erweiterter Produktkatalog |
| Datenschutz | `datenschutz.html` | DSGVO-Datenschutzerklärung |
| Impressum | `impressum.html` | Impressum gemäß §5 TMG |

---

## Features

- **Floating Island Navigation** – Header schwebt als pill-förmige Insel mit 16px Abstand zu den Rändern; dunkel-transparent über dem Hero, weiß mit `backdrop-filter: blur(20px)` beim Scrollen
- **HannoHyp-Stil Blob-Dekoration** – Weiche Kreis-Gruppen als Hintergrunddekoration auf allen Sections: Pattern A (zwei überlappende Kreise, rechts) für helle Sections; Pattern B (1 großer + 3 kleinere Kreise, links) für alternierenden Sections; dunkle Varianten in Hellblau für dunkle Sections
- **Page-Hero auf Unterseiten** – Markenfarben-Gradient mit pulsierenden Akzent-Glows, driftenden Partikeln und animiertem Linien-Gitter – alles CSS-only, `prefers-reduced-motion`-konform
- **Pill-Buttons** – Alle Buttons mit `border-radius: 100px` (vollständig gerundet)
- **Section-Divider** – Kurze blaue Linie (44×4px) unter allen Abschnittsüberschriften; weiß in dunklen Sections
- **Verbesserte Cards** – `border-radius: 14px`, Hover mit `translateY(-3px)` und leicht blauem Schatten
- **Hero mit Ken-Burns-Animation** – Hintergrundbild zoomt und driftet sanft (22s, alternate), 98%-Overlay
- **ROI-Rechner** – Interaktiver Energieeinsparungs-Rechner (Fenstertyp, Heizkosten, Fläche → jährliche Ersparnis, CO₂, Amortisation)
- **Projekt-Timeline** – 6-stufige visuelle Darstellung des Auftragsprozesses
- **Vorteile-Grid** – 6 Karten auf dunklem Hintergrund
- **Filterbarer Katalog** – Kunststoff, Holz, Alu, Hebe-Schiebe; Filter-Buttons ebenfalls Pill-Form
- **Trust Bar** – 5 Vertrauenssignale unterhalb des Heroes
- **Counter-Animation** – Zahlen zählen beim Einblenden hoch
- **Fade-in on Scroll** – Karten und Galerie-Items via IntersectionObserver
- **Vollständig responsives Design** – 6 Breakpoints, kein horizontaler Overflow
- **SEO-Optimiert** – Meta-Tags, OG-Tags, Canonical-Links, Schema.org JSON-LD (LocalBusiness, ContactPage)
- **Web3Forms Kontaktformular** – Mit Honeypot, `aria-invalid`-Validierung, Erfolgs-/Fehlermeldung
- **Google Maps** eingebettet auf der Kontaktseite
- **Barrierefreiheit** – Skip-Link, `sr-only`, `:focus-visible`, `prefers-reduced-motion`

---

## Design

| Eigenschaft | Wert |
|-------------|------|
| Body-Font | Inter (Google Fonts) |
| Heading-Font | System Font Stack (`-apple-system, SF Pro Display, Inter`) |
| Primärfarbe | `#0f172a` (Near-Black) |
| Akzentfarbe | `#2563eb` (Clean Blue) |
| Hintergrund | `#f6f6f8` (sanftes Grau) / `#f8fafc` (helle Sections) |
| Stil | Minimalistisch, HannoHyp/OpenAI-inspiriert |
| Zielgruppe | Privatkunden + Gewerbe (Bauunternehmen, Architekten, Projektentwickler) |

### Navigation

- **Reihenfolge:** Startseite · Sortiment · Leistungen · Über uns · Kontakt
- Schwebt als pill-förmige Insel (top/left/right: 16px, border-radius: 16px)
- Startet dunkel-transparent über dem Hero, wird weiß beim Scrollen (>50px)
- Mobile: schwebendes Dropdown-Menü mit aktivem Seitenindikator

### Blob-Hintergründe

| Section-Typ | Muster | Farbe |
|-------------|--------|-------|
| `.section`, `.section-sm` | Pattern A (2 Kreise, rechts) | Akzentblau, 6–9% |
| `.katalog-section` | Pattern B (4 Kreise, links) | Akzentblau, 6–8% |
| `.vorteile-section` | Pattern B (4 Kreise, links) | Hellblau, 7–10% |
| `.stats-strip` | Pattern A (2 Kreise, rechts) | Hellblau, 7–10% |
| `#footer` | Pattern B (4 Kreise, links) | Hellblau, 7–10% |
| `.hero` | Pattern A (2 Kreise, rechts) | Hellblau, 7–10% |
| `.page-hero` | 2 Kreise, rechts (im Gradient) | Hellblau, 7–10% |

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
python3 -m http.server 5050
```

Dann im Browser öffnen: [http://localhost:5050](http://localhost:5050)

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
- [ ] Domain prüfen: aktuell `https://www.ozdemir-fensterbau.de/` als Canonical/OG/Sitemap

---

## Kontaktformular einrichten (Web3Forms)

Das Formular auf `kontakt.html` ist mit [Web3Forms](https://web3forms.com) verkabelt – kostenlos, kein Backend nötig, E-Mails landen direkt im Postfach.

1. Auf [web3forms.com](https://web3forms.com) mit der Empfänger-E-Mail-Adresse anmelden – Access-Key wird per Mail zugeschickt.
2. In `kontakt.html` den Platzhalter `DEIN_WEB3FORMS_ACCESS_KEY` durch den echten Key ersetzen:
   ```html
   <input type="hidden" name="access_key" value="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx">
   ```
3. Optional: `redirect`-URL anpassen (steht aktuell auf `https://www.ozdemir-fensterbau.de/kontakt.html?ok=1`).

Honeypot-Feld (`botcheck`), `aria-invalid`-Validierung und Erfolgs-/Fehler-Toasts sind bereits vorhanden.

---

## Deployment

### Option A: GitHub Pages (kostenlos)

1. GitHub → Repo `eneshome-arch/-zdemir-fensterbau` → **Settings → Pages**
2. **Source:** `Deploy from a branch`, **Branch:** `main`, **Folder:** `/ (root)`
3. Speichern – Seite ist nach 1–2 Minuten live unter `https://eneshome-arch.github.io/-zdemir-fensterbau/`
4. Für eigene Domain: in **Settings → Pages → Custom domain** `www.ozdemir-fensterbau.de` eintragen, beim Domain-Hoster CNAME auf `eneshome-arch.github.io` setzen.

`.nojekyll` ist im Repo – GitHub Pages überspringt damit den Jekyll-Build.

### Option B: Vercel (auch kostenlos, schneller CDN)

1. [vercel.com](https://vercel.com) → **Add New… → Project** → Repo importieren
2. Framework Preset: `Other`, Build Command leer lassen, Output Directory: `/`
3. Deploy → fertig.

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
- CSS3 (Custom Properties, Grid, Flexbox, `clamp()`, `backdrop-filter`, CSS Animations, `svh`-Unit)
- Vanilla JavaScript (ES6+)
- Google Fonts – Inter
- Web3Forms (Kontaktformular, kein Backend)
