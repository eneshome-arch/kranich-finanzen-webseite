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
├── sortiment.html      # Unser Sortiment (MIROX-Produktübersicht)
├── kontakt.html        # Kontakt mit Formular & Google Maps
├── katalog.html        # Filterbarer Produktkatalog
├── datenschutz.html    # Datenschutzerklärung (DSGVO)
├── impressum.html      # Impressum (§5 TMG)
├── robots.txt          # Crawler-Direktiven
├── sitemap.xml         # Alle indexierbaren Seiten
├── .nojekyll           # GitHub Pages: Jekyll-Build überspringen
├── css/
│   └── style.css       # Gesamtes Styling (v84)
├── js/
│   └── main.js         # Interaktivität & Animationen (v20)
└── images/
    ├── logo.png                    # Firmenlogo
    ├── og-image.jpg                # 1200×630 Social-Sharing-Bild
    ├── fenster-fertigung.jpg       # Leistungskarte: Fenster-Fertigung
    ├── montage-einbau.jpg          # Leistungskarte: Montage & Einbau
    ├── lieferung-logistik.jpg      # Leistungskarte: Lieferung & Logistik
    ├── fassade-bg.jpg              # Leistungskarte: Fassadensysteme
    ├── beratung-planung.jpg        # Leistungskarte: Beratung & Planung
    ├── service-wartung.jpg         # Leistungskarte: Service & Wartung
    ├── team-handshake.jpg          # Über-uns-Section (Startseite)
    ├── mirox-ideal8000.jpg         # Sortiment: MIROX IDEAL 8000
    ├── mirox-ideal7000.jpg         # Sortiment: MIROX IDEAL 7000
    ├── mirox-neo.jpg               # Sortiment: MIROX NEO
    ├── mirox-ideal5000.jpg         # Sortiment: MIROX IDEAL 5000
    ├── mirox-ideal4000.jpg         # Sortiment: MIROX IDEAL 4000
    ├── mirox-hst.jpg               # Sortiment: HST Hebeschiebetür
    ├── mirox-psk.jpg               # Sortiment: PSK Smart Slide Neo
    ├── mirox-alu-thermo.jpg        # Sortiment: THERMO Alu
    ├── mirox-alu-design.jpg        # Sortiment: NEW DESIGN Alu
    ├── mirox-alu-schiebe.jpg       # Sortiment: Alu Schiebetür
    ├── mirox-alu-falt.jpg          # Sortiment: Alu Falttür
    ├── mirox-pvc-haustuer.jpg      # Sortiment: PVC Haustür Modern
    └── mirox-alu-haustuer.jpg      # Sortiment: Alu Haustür Genesis 75
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
- **3D Timeline-Karussell** – „So arbeiten wir": 6 Schritte auf einem virtuellen 3D-Zylinder. Perspektivprojektion vollständig in JS berechnet (kein CSS `perspective`/`preserve-3d`) – aktives Item garantiert pixelgenau mittig. Radius skaliert responsiv.
- **3D Team-Karussell** – „Unser Team": 3 Team-Karten auf demselben JS-Perspektivprojektions-System. Aktive Karte mittig mit blauem Avatar-Highlight; Seitenkarten gedimmt. Klick auf Seitenkarte navigiert. Auto-Advance alle 3,5 s.
- **Werte-Karussell (mobil)** – „Was uns auszeichnet": Scroll-Snap-Karussell auf kleinen Geräten mit Dot-Indikatoren.
- **Trust-Bar Animation** – 5 Vertrauenssignale zirkulieren mit Pop-in-Effekt einzeln durch (3 s sichtbar, 0,5 s Übergang).
- **Benefits-Karussell (mobil)** – „Warum Kunden auf uns setzen": Scroll-Snap-Karussell auf kleinen Geräten mit Dot-Indikatoren.
- **Leistungen-Karussell (mobil)** – „Alles aus einer Hand": gleiches Karussell-System.
- **Hero** – Linksbündig, CSS-Gradient-Spotlight (blauer Radial-Glow), kein Foto, kein Flackern.
- **ROI-Rechner** – Interaktiver Energieeinsparungs-Rechner (Fenstertyp, Heizkosten, Fläche → jährliche Ersparnis, CO₂, Amortisation).
- **Fade-in on Scroll** – Karten und Items via `IntersectionObserver`.
- **Counter-Animation** – Zahlen zählen beim Einblenden hoch (2,2 s, `easeOut` via `requestAnimationFrame`). Auf Mobile nebeneinander.
- **MIROX Sortiment** – 12 Produkte in 4 Kategorien (Kunststoff, Aluminium, Hebe-Schiebe, Haustüren) mit echten Produktfotos direkt aus dem MIROX-Katalog.
- **Filterbarer Katalog** – Kunststoff, Aluminium, Hebe-Schiebe, Haustüren.
- **Web3Forms Kontaktformular** – Mit Honeypot, `aria-invalid`-Validierung, Erfolgs-/Fehlermeldung.
- **Footer-Signatur** – „Designed by VYOMedia" auf allen Seiten, verlinkt auf [vyomedia.de](https://vyomedia.de).
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

### Seitenstruktur (Über uns)
1. Page Hero (dark)
2. Unternehmen + Stats-Grid (white)
3. Werte / Karussell mobil (dark, Mesh-Gradient + Blob-Muster, gerahmter Container)
4. Team 3D-Karussell (white)
5. Zertifizierungen (light `#f8fafc`)
6. CTA (dark)
7. Footer (dark `#020617`)

---

## MIROX Sortiment

| Produkt | Kategorie | Uw-Wert | Besonderheit |
|---------|-----------|---------|--------------|
| IDEAL 8000 | Kunststoff | 0,76 W/m²K | Passivhaus, RC2, 85 mm |
| IDEAL 7000 | Kunststoff | 0,79 W/m²K | Energie A+, RC2, 85 mm |
| NEO – New Look | Kunststoff | 0,78 W/m²K | Design, ift Rosenheim, 76 mm |
| IDEAL 4000 | Kunststoff | 1,28 W/m²K | ECO, 70 mm, 2-/3-fach |
| HST Hebeschiebetür | Hebe-Schiebe | 0,71 W/m²K | Passivhaus, bis 6,50 m, PVC |
| PSK Smart Slide Neo | Hebe-Schiebe | – | 78 mm, max. 6.000 mm |
| Alu Schiebetür MB-59HS | Hebe-Schiebe | – | Aluminium, niedrige Schwelle |
| THERMO Alu MB 104 Passive | Aluminium | – | Passivhaus, 3-fach |
| NEW DESIGN Ferroline | Aluminium | – | Loft-Design, Slim-Profil |
| Alu Falttür Harmonika | Aluminium | – | CE, RAL-lackierbar |
| Haustür Modern PVC | Haustüren | – | IDEAL 7000-Basis, 85 mm |
| Alu Haustür Genesis 75 | Haustüren | – | RC2, Aluminium |

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

## Deployment

### Coolify / Hetzner (aktiv)

- Server-IP: `46.224.59.145`
- Domain: `özdemir-fensterbau.de` → Punycode in Traefik: `xn--zdemir-fensterbau-yzb.de`
- DNS bei IONOS: A-Record auf `46.224.59.145`
- Nixpacks staticfile (Caddy, Port 80, kein Start-Command)

### GitHub Pages (alternativ)

1. GitHub → Repo → **Settings → Pages**
2. Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`
3. Eigene Domain in **Settings → Pages → Custom domain** eintragen.

---

## Noch ausstehend

- [ ] Web3Forms Access-Key in `kontakt.html` einsetzen
- [ ] Google Maps Embed-URL (echte Adresse eintragen)
- [ ] Galerie-Bilder (echte Projektfotos)
- [ ] Team-Fotos (echte Bilder statt Initialen-Avatare)

---

## Kontaktformular einrichten (Web3Forms)

1. Auf [web3forms.com](https://web3forms.com) mit der Empfänger-E-Mail anmelden.
2. In `kontakt.html` den Platzhalter ersetzen:
   ```html
   <input type="hidden" name="access_key" value="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx">
   ```

---

## Technologien

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, `clamp()`, `backdrop-filter`, CSS Animations)
- Vanilla JavaScript (ES6+, IntersectionObserver, `requestAnimationFrame`, JS-basierte 3D-Perspektivprojektion)
- Google Fonts – Inter
- Web3Forms (Kontaktformular, kein Backend)
